"""Moorooka flood simulation, step 1: the ground, buildings and hard surfaces on the model's 5 m grid.

Reads town3d/moorooka/height.png and town.json (the same data the 3D model draws) and writes prep.npz:
  z      ground height (m), 660 x 660, row = south-north index (z grows to the south), col = west-east
  bld    1 where a building covers the cell centre
  imp    fraction of the cell that is hard surface (roofs, roads, driveways and paths, estimated)
  road   1 on a road
No council flood information is used anywhere in this simulation.
"""
import json, base64, sys, os
import numpy as np
from PIL import Image, ImageDraw

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(os.path.dirname(HERE))
M = os.path.join(REPO, "town3d", "moorooka")
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, "prep.npz")

town = json.load(open(os.path.join(M, "town.json")))
meta = town["meta"]
nx, nz = meta["grid"]
sx, sz = meta["size"]
dx, dz = sx / nx, sz / nz
h = np.asarray(Image.open(os.path.join(M, "height.png")).convert("RGB")).astype(np.int32)
z = (h[..., 0] * 256 + h[..., 1]) / meta["heightScale"] - meta["heightOffset"]

S = 4  # rasterise at 4x and average, so part-covered cells count part
def to_px(x, zz):  # model metres -> supersampled pixel
    return ((x + sx / 2) / dx * S, (zz + sz / 2) / dz * S)

def raster(polys, lines=()):
    im = Image.new("L", (nx * S, nz * S), 0); d = ImageDraw.Draw(im)
    for p in polys:
        if len(p) >= 3: d.polygon([to_px(x, y) for x, y in p], fill=255)
    for pts, w in lines:
        d.line([to_px(x, y) for x, y in pts], fill=255, width=max(1, int(round(w / dx * S))))
    a = np.asarray(im, dtype=np.float32) / 255
    return a.reshape(nz, S, nx, S).mean(axis=(1, 3))

b = np.frombuffer(base64.b64decode(town["buildings"]), dtype="<i2")
polys, i = [], 0
while i < len(b):
    n = int(b[i]); pts = b[i + 7:i + 7 + 2 * n].astype(np.float64) / 10
    polys.append(list(zip(pts[0::2], pts[1::2]))); i += 7 + 2 * n
bfrac = raster(polys)
roads = []
for r in town["roads"]:
    pts = np.asarray(r[5], dtype=np.float64) / 10
    roads.append((list(zip(pts[0::2], pts[1::2])), max(4.0, r[3] / 10)))
rfrac = raster([], roads)
# hard surface: roofs and roads, plus driveways, paths and paving around houses (about a fifth of a suburban
# block that isn't roof), less in parks and bush
near = np.zeros_like(bfrac)
from scipy.ndimage import uniform_filter
near = uniform_filter(bfrac, 7)  # how built up the neighbourhood is (35 m)
imp = np.clip(bfrac + rfrac + 0.35 * np.clip(near * 3, 0, 1) * (1 - bfrac - rfrac), 0, 1)
np.savez_compressed(OUT, z=z.astype(np.float32), bfrac=bfrac.astype(np.float32), road=rfrac.astype(np.float32),
                    imp=imp.astype(np.float32), dx=dx, dz=dz, sx=sx, sz=sz)
print(json.dumps({"grid": [nx, nz], "cell": [round(dx, 3), round(dz, 3)], "zmin": float(z.min()), "zmax": float(z.max()),
                  "buildings": len(polys), "roof_share": float(bfrac.mean()), "road_share": float(rfrac.mean()), "hard_share": float(imp.mean())}))
