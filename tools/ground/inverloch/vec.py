import json, base64, math, numpy as np
from PIL import Image, ImageDraw
t=json.load(open('/home/claude/awesome-news/town3d/town.json'))
SX,SZ=t['meta']['size']; G=1.0  # 1 m grid
W,H=int(SX/G)+1,int(SZ/G)+1
def P(x,z): return ((x+SX/2)/G,(z+SZ/2)/G)
def i16(key,n): return np.frombuffer(base64.b64decode(t[key]),dtype='<i2').reshape(-1,n).astype(float)
def raster(cls_ok, extra=0.0):
    im=Image.new('L',(W,H)); d=ImageDraw.Draw(im)
    for r in t['roads']:
        if not cls_ok(r): continue
        p=np.array(r[5]).reshape(-1,2)/10; w=max(0.5,r[3]/10+extra)
        pp=[P(*a) for a in p]; d.line(pp,fill=255,width=max(1,int(round(w/G))))
        for a in pp: d.ellipse([a[0]-w/2/G,a[1]-w/2/G,a[0]+w/2/G,a[1]+w/2/G],fill=255)
    return np.array(im)>0
