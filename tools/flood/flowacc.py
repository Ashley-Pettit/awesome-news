"""Flow paths over the ground: fill hollows (priority flood), then D8 flow directions and how much ground drains through
each cell. Used to find the creeks, where they leave the model, and how far upstream they reach."""
import heapq
import numpy as np
from numba import njit

DIRS = np.array([(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)], dtype=np.int64)

@njit(cache=True)
def _fill(z, eps):
    nz, nx = z.shape
    out = np.full_like(z, np.inf); done = np.zeros(z.shape, np.bool_)
    # heap as arrays (numba has heapq on lists of tuples)
    h = [(z[0, 0], 0, 0)]; h.pop()
    for r in range(nz):
        for c in range(nx):
            if r == 0 or c == 0 or r == nz - 1 or c == nx - 1:
                out[r, c] = z[r, c]; done[r, c] = True; heapq.heappush(h, (z[r, c], r, c))
    while h:
        v, r, c = heapq.heappop(h)
        for k in range(8):
            rr = r + DIRS[k, 0]; cc = c + DIRS[k, 1]
            if rr < 0 or cc < 0 or rr >= nz or cc >= nx or done[rr, cc]:
                continue
            nv = max(z[rr, cc], v + eps)
            out[rr, cc] = nv; done[rr, cc] = True; heapq.heappush(h, (nv, rr, cc))
    return out

@njit(cache=True)
def _d8(f, dx):
    nz, nx = f.shape; to = np.full((nz, nx), -1, np.int64)
    for r in range(nz):
        for c in range(nx):
            best = 0.0; bi = -1
            for k in range(8):
                rr = r + DIRS[k, 0]; cc = c + DIRS[k, 1]
                if rr < 0 or cc < 0 or rr >= nz or cc >= nx:
                    continue
                dist = dx * (1.4142 if DIRS[k, 0] != 0 and DIRS[k, 1] != 0 else 1.0)
                s = (f[r, c] - f[rr, cc]) / dist
                if s > best:
                    best = s; bi = rr * nx + cc
            to[r, c] = bi
    return to

@njit(cache=True)
def _acc(f, to):
    nz, nx = f.shape; n = nz * nx
    order = np.argsort(-f.ravel()); a = np.ones(n)
    for i in order:
        j = to.ravel()[i]
        if j >= 0:
            a[j] += a[i]
    return a.reshape(nz, nx)

def flow(z, dx):
    f = _fill(z.astype(np.float64), 1e-4)
    to = _d8(f, dx)
    return f, to, _acc(f, to)
