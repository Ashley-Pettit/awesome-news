-- Moorooka News: Community board (jobs, wanted, and notes to neighbours).
-- Run once in Supabase: Project > SQL Editor > New query > paste all of this > Run.
-- Then put the project's URL and anon (public) key in local/brands.json under moo.local.board_url / board_key.
--
-- Rules: anyone can read and post (no account), posts show for 30 days, a post or reply is hidden after
-- 3 reports, and nobody but you (in the Supabase dashboard) can edit or delete.

create table if not exists board_posts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  kind text not null check (kind in ('job', 'wanted', 'neighbours')),
  name text not null check (char_length(trim(name)) between 1 and 40),
  title text not null check (char_length(trim(title)) between 3 and 80),
  body text not null default '' check (char_length(body) <= 1000),
  contact text not null default '' check (char_length(contact) <= 100),
  reports int not null default 0,
  hidden boolean not null default false
);

create table if not exists board_replies (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  post_id uuid not null references board_posts(id) on delete cascade,
  name text not null check (char_length(trim(name)) between 1 and 40),
  body text not null check (char_length(trim(body)) between 1 and 500),
  reports int not null default 0,
  hidden boolean not null default false
);
create index if not exists board_replies_post on board_replies(post_id, created_at);

alter table board_posts enable row level security;
alter table board_replies enable row level security;

-- Read: what isn't hidden, from the last 30 days.
drop policy if exists "read posts" on board_posts;
create policy "read posts" on board_posts for select to anon
  using (not hidden and created_at > now() - interval '30 days');
drop policy if exists "read replies" on board_replies;
create policy "read replies" on board_replies for select to anon
  using (not hidden and exists (select 1 from board_posts p where p.id = post_id and not p.hidden and p.created_at > now() - interval '30 days'));

-- Post: new, unreported rows only.
drop policy if exists "add posts" on board_posts;
create policy "add posts" on board_posts for insert to anon
  with check (reports = 0 and not hidden);
drop policy if exists "add replies" on board_replies;
create policy "add replies" on board_replies for insert to anon
  with check (reports = 0 and not hidden);

-- Flood guard: no more than 30 posts and 120 replies an hour across the board, and no repeats.
create or replace function board_guard() returns trigger language plpgsql security definer set search_path = public as $$
begin
  new.created_at := now();
  if tg_table_name = 'board_posts' then
    if (select count(*) from board_posts where created_at > now() - interval '1 hour') >= 30 then
      raise exception 'The board is busy, try again a bit later';
    end if;
    if exists (select 1 from board_posts where lower(title) = lower(new.title) and created_at > now() - interval '1 day') then
      raise exception 'That has already been posted today';
    end if;
  else
    if (select count(*) from board_replies where created_at > now() - interval '1 hour') >= 120 then
      raise exception 'The board is busy, try again a bit later';
    end if;
  end if;
  return new;
end $$;
drop trigger if exists board_posts_guard on board_posts;
create trigger board_posts_guard before insert on board_posts for each row execute function board_guard();
drop trigger if exists board_replies_guard on board_replies;
create trigger board_replies_guard before insert on board_replies for each row execute function board_guard();

-- Report: anyone can report; 3 reports hides it.
create or replace function board_report(kind text, rid uuid) returns void language plpgsql security definer set search_path = public as $$
begin
  if kind = 'post' then
    update board_posts set reports = reports + 1, hidden = (reports + 1 >= 3) where id = rid;
  elsif kind = 'reply' then
    update board_replies set reports = reports + 1, hidden = (reports + 1 >= 3) where id = rid;
  end if;
end $$;
revoke all on function board_report(text, uuid) from public;
grant execute on function board_report(text, uuid) to anon;

grant select, insert on board_posts, board_replies to anon;
