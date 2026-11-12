import sys; sys.path.insert(0,'.')
from vec import *
R=t['roads']; pts=[np.array(r[5]).reshape(-1,2)/10 for r in R]
segs=[(i,a,b) for i,p in enumerate(pts) for a,b in zip(p[:-1],p[1:])]
A=np.array([s[1] for s in segs]); B=np.array([s[2] for s in segs]); I=np.array([s[0] for s in segs])
def nearest(q, skip):
    d=B-A; L2=(d**2).sum(1); u=np.clip(((q-A)*d).sum(1)/np.maximum(L2,1e-9),0,1); c=A+u[:,None]*d
    dist=np.hypot(*(q-c).T); dist[I==skip]=np.inf; j=int(dist.argmin()); return float(dist[j]), int(I[j]), c[j]
gaps=[]
for i,p in enumerate(pts):
    for e,q in ((0,p[0]),(1,p[-1])):
        d,j,c=nearest(q,i)
        edge=d-R[j][3]/20  # from this end to the other line's edge
        if 0.3 < edge <= 6.0 and d>0.6:
            gaps.append(dict(cls=R[i][0],to=R[j][0],edge=round(edge,1),i=i,end=e,j=j,x=round(float(q[0]),1),z=round(float(q[1]),1),cx=round(float(c[0]),1),cz=round(float(c[1]),1)))
