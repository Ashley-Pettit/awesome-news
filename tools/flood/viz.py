import sys, numpy as np
from PIL import Image, ImageDraw
S = sys.argv[1]; eid = sys.argv[2]
d = np.load(f'{S}/fl/out/{eid}.npz'); dep = np.where(d['wet'], d['depth'], 0)
img = np.asarray(Image.open(f'{S}/fl/hill.png').convert('RGB')).astype(float) / 255
gray = img.mean(-1, keepdims=True) * 0.6 + 0.3
col = np.repeat(gray, 3, -1)
for lo, hi, c in [(0.1, 0.3, (0.55, 0.8, 1)), (0.3, 1, (0.2, 0.55, 1)), (1, 3, (0.05, 0.25, 0.85)), (3, 99, (0.02, 0.08, 0.45))]:
    m = (dep >= lo) & (dep < hi); col[m] = c
im = Image.fromarray((col * 255).astype(np.uint8))
dr = ImageDraw.Draw(im); r, c = 131.7, 276 + 3.6  # 6 Beaudesert Rd (about 18 m east of the start spot)
dr.ellipse([c - 6, r - 6, c + 6, r + 6], outline=(255, 0, 0), width=2)
im.save(f'{S}/fl/{eid}.png')
rr, cc = int(r), int(c); win = dep[rr - 6:rr + 7, cc - 6:cc + 7]
print(eid, 'max depth within 30 m of the house', round(float(win.max()), 2), 'wet cells', int((win > 0).sum()))
