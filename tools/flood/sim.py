"""Moorooka flood simulation, step 2: rain on the ground, water moving over it.

A 2D shallow-water model of the "local inertial" kind (Bates, Horritt and Fewtrell 2010; de Almeida et al. 2012), the
method used by LISFLOOD-FP and by rain-on-grid runs in TUFLOW and HEC-RAS. On the model's 5 m grid:

- Rain falls on every cell. Some soaks in: gardens, parks and bush lose the first 15 mm and then 1 mm an hour; roofs,
  roads and paving lose 1 mm. What is left runs off.
- Buildings stand 2 m proud of the ground, so water goes round them; rain on a roof runs off it to the ground.
- Stormwater pipes in the built-up streets take up to 30 mm an hour of the water on the surface (an older suburb's
  pipes, allowing for blocked grates) and carry it to the nearest creek downhill.
- Ground roughness (Manning's n): roads and paving 0.02, house blocks 0.06 (fences, gardens), parks 0.045, bush 0.08.
- Water leaves over the edges of the model freely, or, on the western edge, against a set level in Oxley Creek.

No council flood information goes in. Usage: see run.py.
"""
import numpy as np
from numba import njit

G = 9.81


@njit(cache=True)
def _step(h, zb, qx, qy, n2, dt, dx, hmin):
    """One local inertial step: update the flows across cell faces, then the depths."""
    nz, nx = h.shape
    # x faces: between (r, c) and (r, c+1); qx[r, c] in m2/s, positive towards +x
    for r in range(nz):
        for c in range(nx - 1):
            ha = h[r, c]; hb = h[r, c + 1]
            ea = zb[r, c] + ha; eb = zb[r, c + 1] + hb
            hf = max(ea, eb) - max(zb[r, c], zb[r, c + 1])
            if hf <= hmin:
                qx[r, c] = 0.0
                continue
            s = (eb - ea) / dx
            q0 = qx[r, c]
            nn = 0.5 * (n2[r, c] + n2[r, c + 1])
            q = (q0 - G * hf * dt * s) / (1.0 + G * dt * nn * abs(q0) / hf ** (7.0 / 3.0))
            # don't move more water out of a cell than it has (stops overshoot on steep, shallow ground)
            lim = hf * np.sqrt(G * hf)
            if q > lim: q = lim
            if q < -lim: q = -lim
            qx[r, c] = q
    for r in range(nz - 1):
        for c in range(nx):
            ha = h[r, c]; hb = h[r + 1, c]
            ea = zb[r, c] + ha; eb = zb[r + 1, c] + hb
            hf = max(ea, eb) - max(zb[r, c], zb[r + 1, c])
            if hf <= hmin:
                qy[r, c] = 0.0
                continue
            s = (eb - ea) / dx
            q0 = qy[r, c]
            nn = 0.5 * (n2[r, c] + n2[r + 1, c])
            q = (q0 - G * hf * dt * s) / (1.0 + G * dt * nn * abs(q0) / hf ** (7.0 / 3.0))
            lim = hf * np.sqrt(G * hf)
            if q > lim: q = lim
            if q < -lim: q = -lim
            qy[r, c] = q
    # depths from the net flow into each cell
    out = 0.0
    for r in range(nz):
        for c in range(nx):
            dq = 0.0
            if c > 0: dq += qx[r, c - 1]
            if c < nx - 1: dq -= qx[r, c]
            if r > 0: dq += qy[r - 1, c]
            if r < nz - 1: dq -= qy[r, c]
            hn = h[r, c] + dt * dq / dx
            if hn < 0.0:
                hn = 0.0
            h[r, c] = hn
    return out


@njit(cache=True)
def _edges(h, zb, dt, dx, west_level):
    """Water at the edges leaves at critical flow; on the west edge a level above the ground holds it back (or pushes
    water in, as Oxley Creek backing up). Returns the volume that left."""
    nz, nx = h.shape
    gone = 0.0
    for r in range(nz):
        for c in (0, nx - 1):
            if c == 0 and west_level > -100.0:
                if zb[r, c] < west_level:
                    hw = west_level - zb[r, c]
                    gone += (h[r, c] - hw) * dx * dx
                    h[r, c] = hw
                    continue
            hh = h[r, c]
            if hh > 0.0:
                d = min(hh, dt * np.sqrt(G * hh) * hh / dx)
                h[r, c] = hh - d; gone += d * dx * dx
    for c in range(1, nx - 1):
        for r in (0, nz - 1):
            hh = h[r, c]
            if hh > 0.0:
                d = min(hh, dt * np.sqrt(G * hh) * hh / dx)
                h[r, c] = hh - d; gone += d * dx * dx
    return gone


@njit(cache=True)
def _sources(h, rain, pipe_cap, pipe_to, dt):
    """Add the rain that runs off; let the pipes take what they can and drop it at their creek outlet."""
    nz, nx = h.shape
    taken = np.zeros(nz * nx)
    for r in range(nz):
        for c in range(nx):
            i = r * nx + c
            hh = h[r, c] + rain[r, c] * dt
            cap = pipe_cap[r, c] * dt
            if cap > 0.0 and hh > 0.0:
                t = min(hh, cap)
                hh -= t
                j = pipe_to[i]
                if j >= 0:
                    taken[j] += t
            h[r, c] = hh
    for i in range(nz * nx):
        if taken[i] > 0.0:
            h[i // nx, i % nx] += taken[i]


class Sim:
    def __init__(self, zb, n, pipe_cap, pipe_to, dx, west_level=-999.0, hmin=1e-3):
        self.zb = zb.astype(np.float64); self.n2 = (n.astype(np.float64)) ** 2
        self.pipe_cap = pipe_cap.astype(np.float64); self.pipe_to = pipe_to.astype(np.int64)
        self.dx = float(dx); self.west = float(west_level); self.hmin = hmin
        self.h = np.zeros_like(self.zb); self.qx = np.zeros_like(self.zb); self.qy = np.zeros_like(self.zb)
        self.hmax = np.zeros_like(self.zb); self.vmax = np.zeros_like(self.zb); self.t = 0.0

    def run(self, until, rain_at, alpha=0.7, dtmax=2.0, every=None):
        """rain_at(t) -> runoff rate per cell (m/s) for the time t. Runs to `until` seconds."""
        while self.t < until:
            hm = self.h.max()
            dt = min(dtmax, alpha * self.dx / np.sqrt(G * max(hm, 0.01)), until - self.t)
            rain = rain_at(self.t)
            _sources(self.h, rain, self.pipe_cap, self.pipe_to, dt)
            _step(self.h, self.zb, self.qx, self.qy, self.n2, dt, self.dx, self.hmin)
            _edges(self.h, self.zb, dt, self.dx, self.west)
            np.maximum(self.hmax, self.h, out=self.hmax)
            self.t += dt
            if every and int(self.t / every) != int((self.t - dt) / every):
                every_cb = getattr(self, "report", None)
                if every_cb: every_cb(self)
        return self
