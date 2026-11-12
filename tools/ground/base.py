"""Shared loading for the Moorooka ground-plan clean-up (inference only: vectors and the existing plan)."""
import json, os
import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage as ndi

S = os.path.dirname(os.path.abspath(__file__))
TOWN = '/home/claude/awesome-news/town3d/moorooka'
t = json.load(open(f'{TOWN}/town.json'))
g = json.load(open(f'{S}/geo.json'))
X0, Z0, MPP = g['x0'], g['z0'], g['mpp']
N = 2048
KERB, PATH_W = 0.22, 1.3


def px(x, z):
    return ((x - X0) / MPP, (z - Z0) / MPP)


def roads():
    out = []
    for i, r in enumerate(t['roads']):
        p = np.array(r[5], float).reshape(-1, 2) / 10
        out.append(dict(i=i, cls=r[0], surf=r[1], flags=r[2], w=r[3] / 10, name=r[4], p=p))
    return out


def carriageway(rs, extra=0.0):
    im = Image.new('L', (N, N)); d = ImageDraw.Draw(im)
    for r in rs:
        if r['cls'] > 3 or r['flags'] & 3:
            continue
        q = [px(*a) for a in r['p']]
        wpx = (r['w'] + 2 * extra) / MPP
        d.line(q, fill=255, width=max(1, int(round(wpx))))
        for a in q:
            rr = wpx / 2
            d.ellipse([a[0] - rr, a[1] - rr, a[0] + rr, a[1] + rr], fill=255)
    return np.array(im) > 0


def path_strips(rs, fp):
    """Footpath strips as the model draws them (kx): per side, centred at max(kerb+0.1, p-0.65)+0.65 past the
    carriageway edge, 1.3 m wide. Returns a mask and a per-road-side list of point runs (model metres)."""
    im = Image.new('L', (N, N)); d = ImageDraw.Draw(im)
    for h, r in enumerate(rs):
        if r['cls'] > 3 or r['flags'] & 3:
            continue
        m = fp.get(str(r['i']))
        p = r['p']
        if len(p) < 2:
            continue
        for side in (-1, 1):
            if m:
                v = m[0 if side > 0 else 1] / 10
                on = v > 0
                off = max(KERB + 0.1, v - PATH_W / 2)
            else:
                on = r['cls'] <= 2 or (1 if h % 2 else -1) == side
                off = KERB + 1.1
            if not on:
                continue
            dirs = np.gradient(p, axis=0)
            dirs /= np.maximum(np.hypot(*dirs.T), 1e-9)[:, None]
            nrm = np.stack([-dirs[:, 1] * side, dirs[:, 0] * side], 1)
            c = p + nrm * (r['w'] / 2 + off + PATH_W / 2)
            d.line([px(*a) for a in c], fill=255, width=max(1, int(round(PATH_W / MPP))))
    return np.array(im) > 0
