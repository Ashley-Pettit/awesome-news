var MoorookaModel=function(bn){"use strict";var S1=Object.defineProperty;var y1=(bn,In,Ri)=>In in bn?S1(bn,In,{enumerable:!0,configurable:!0,writable:!0,value:Ri}):bn[In]=Ri;var nt=(bn,In,Ri)=>y1(bn,typeof In!="symbol"?In+"":In,Ri);const In=`
.inv-embed, .inv-embed-layer { position: absolute; inset: 0; overflow: hidden; }
/* the labels sit over the model but never take a touch: drags and pinches must reach the canvas underneath */
.inv-embed-labels, .inv-embed .inv-label { pointer-events: none; }
.inv-embed-credit { position: absolute; left: 50%; bottom: var(--inv-credit-bottom, 6px); transform: translateX(-50%); margin: 0; max-width: calc(100% - 24px);
  padding: 2px 8px; border-radius: 4px; background: rgba(13, 24, 30, 0.7); color: rgba(255, 255, 255, 0.82); font: 10px/1.4 system-ui, sans-serif; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; pointer-events: none; }
`;function Ri(i,t,e){if(!document.querySelector(`style[${e.styleKey}]`)){const f=document.createElement("style");f.setAttribute(e.styleKey,""),f.textContent=e.css+In,document.head.appendChild(f)}const n=document.createElement("div");n.className="inv-embed";const s=document.createElement("div");s.className="inv-embed-layer";const r=document.createElement("div");r.className="inv-embed-layer inv-embed-labels";const o=document.createElement("p");o.className="inv-embed-credit",o.textContent=e.credit,n.append(s,r,o),i.appendChild(n);const a=typeof t.assets=="string"?{height:t.assets+"height.png",ground:t.assets+"ground.webp",town:t.assets+"town.json"}:t.assets;let l=[],c=!1,h;const d=new Promise((f,m)=>h={ok:f,fail:m}),u=e.createScene(s,r,{onProgress:(f,m)=>{var v;return(v=t.onProgress)==null?void 0:v.call(t,f,m)},onReady:f=>{l=f.places.map(m=>{const v=Math.min(Math.max(m.view[0]*.55,90),1500),p=m.view[1]*Math.PI/180,g=m.view[2]*Math.PI/180,x=m.x+v*Math.sin(p)*Math.sin(g),M=m.z+v*Math.sin(p)*Math.cos(g),y=Math.max(u.groundAt(x,M),u.waterLevel)+Math.max(v*Math.cos(p),20),S=m.x-x,E=m.y-10-y,_=m.z-M;return{id:m.id,name:m.name,kind:m.kind,x,y,z:M,yaw:Math.atan2(-S,-_),pitch:Math.atan2(E,Math.hypot(S,_)),tx:m.x,tz:m.z,stand:u.standNear(m.x,m.z)??void 0}}),t.labels===!1&&u.setLabelsVisible(!1),c=!0,h.ok()},onError:f=>{var m;return c?(m=t.onError)==null?void 0:m.call(t,f):h.fail(new Error(f))},onCompass:()=>{}},{assets:a,external:!0,quality:t.quality,clear:t.clear,clearLatLon:t.clearLatLon});return u.init(),{ready:d,setCamera:(f,m,v,p,g)=>u.setExternalCamera(f,m,v,p,g),setMinutes:f=>u.setSolarMinutes(f),setTide:f=>e.setTide(u,f),setAnimating:f=>u.setAnimating(f),setLabelsVisible:f=>u.setLabelsVisible(f),groundAt:(f,m)=>u.groundAt(f,m),waterLevel:()=>u.waterLevel,bounds:()=>u.bounds,fromLatLon:(f,m)=>u.fromLatLon(f,m),setMode:f=>u.setExternal(f!=="bird"),getCamera:()=>u.getCamera(),flyToPlace:f=>u.flyToPlace(f),lookAt:(f,m,v,p,g)=>u.setView(f,m,v,p,g),addParts:f=>u.addParts(f),addPad:f=>u.addPad(f),spots:()=>l,roadSpot:f=>{const m=u.roadSpot(f);return m?{id:"road:"+f,name:f,kind:"landmark",...m,tx:m.x-Math.sin(m.yaw)*70,tz:m.z-Math.cos(m.yaw)*70}:null},tide:e.tide,credit:e.credit,dispose:()=>{u.dispose(),n.remove()}}}const _f='.inv-label{position:absolute;left:0;top:0;pointer-events:auto;font:600 12px/1 Space Grotesk,system-ui,sans-serif;padding:6px 10px;border-radius:999px;background:#0c1c24e6;color:#fff;border:1px solid rgba(255,255,255,.2);white-space:nowrap;cursor:pointer;will-change:transform}.inv-label:after{content:"";position:absolute;left:50%;bottom:-8px;width:1px;height:8px;background:#ffffffbf}.inv-label:hover{background:#0b7d9c}.inv-label--nature{background:#183826eb}.inv-label--nature:hover{background:#2c7a4b}.inv-label--water{background:none;border-color:transparent;color:#f1fbff;font-style:italic;font-weight:500;font-size:13px;letter-spacing:.1em;text-shadow:0 1px 2px rgba(0,35,60,.95),0 0 8px rgba(0,35,60,.7)}.inv-label--water:after{display:none}.inv-label--water:hover{background:#0c1c2499}.inv-range{-moz-appearance:none;appearance:none;-webkit-appearance:none;height:28px;background:transparent;cursor:pointer}.inv-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range:focus-visible{outline:2px solid #ffd200;outline-offset:4px;border-radius:4px}.inv-range--flood::-webkit-slider-runnable-track{background:linear-gradient(90deg,#d8c79a,#5c9ab8 55%,#17406e)}.inv-range--flood::-moz-range-track{background:linear-gradient(90deg,#d8c79a,#5c9ab8 55%,#17406e)}.inv-sharpening{position:absolute;right:calc(env(safe-area-inset-right,0px) + 8px);bottom:calc(env(safe-area-inset-bottom,0px) + 8px);z-index:2;margin:0;padding:4px;border-radius:50%;background:#0d181e99;line-height:0;pointer-events:none}.inv-sharpening[hidden]{display:none}.inv-sharpening-spin{display:block;width:10px;height:10px;border-radius:50%;border:2px solid rgba(255,255,255,.35);border-top-color:#fff;animation:inv-sharpening-turn .9s linear infinite}.inv-sharpening-text{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@keyframes inv-sharpening-turn{to{transform:rotate(360deg)}}@media (prefers-reduced-motion: reduce){.inv-sharpening-spin{animation:none;border-color:#fff}}';/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mo="187",Nn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},jn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vf=0,zl=1,Mf=2,os=1,Sf=2,as=3,ti=0,Ze=1,Ee=2,Ci=0,ls=1,go=2,Bl=3,kl=4,yf=5,Pi=100,bf=101,Ef=102,wf=103,Tf=104,Af=200,Rf=201,Cf=202,Pf=203,Gl=204,Hl=205,Lf=206,Df=207,If=208,Nf=209,Uf=210,Ff=211,Of=212,zf=213,Bf=214,xo=0,_o=1,vo=2,cs=3,Mo=4,So=5,yo=6,bo=7,Eo=0,kf=1,Gf=2,Un=0,Vl=1,Wl=2,Xl=3,ql=4,Yl=5,$l=6,wo=7,Kl=300,Li=301,hs=302,To=303,Ao=304,Zs=1e3,hn=1001,Ro=1002,Ge=1003,Hf=1004,Js=1005,We=1006,Co=1007,En=1008,je=1009,Zl=1010,Jl=1011,us=1012,Po=1013,wn=1014,un=1015,fn=1016,Lo=1017,Do=1018,Di=1020,Ql=35902,jl=35899,tc=1021,ec=1022,dn=1023,ei=1026,ni=1027,Io=1028,No=1029,ii=1030,Uo=1031,Fo=1033,Qs=33776,js=33777,tr=33778,er=33779,Oo=35840,zo=35841,Bo=35842,ko=35843,Go=36196,Ho=37492,Vo=37496,Wo=37488,Xo=37489,nr=37490,qo=37491,Yo=37808,$o=37809,Ko=37810,Zo=37811,Jo=37812,Qo=37813,jo=37814,ta=37815,ea=37816,na=37817,ia=37818,sa=37819,ra=37820,oa=37821,aa=36492,la=36494,ca=36495,ha=36283,ua=36284,ir=36285,fa=36286,Vf=3200,sr=0,Wf=1,Fn="",Te="srgb",rr="srgb-linear",or="linear",de="srgb",da=7680,Xf=519,qf=512,Yf=513,$f=514,nc=515,Kf=516,Zf=517,ic=518,sc=519,Jf=35044,ar=35048,rc="300 es",pn=2e3,fs=2001;function Qf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jf(){const i=ds("canvas");return i.style.display="block",i}const oc={};function ac(...i){const t="THREE."+i.shift();console.log(t,...i)}function lc(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ht(...i){i=lc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function le(...i){i=lc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function lr(...i){const t=i.join(" ");t in oc||(oc[t]=!0,Ht(...i))}function td(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ed={[xo]:xo,[vo]:yo,[Mo]:Mo,[cs]:So,[_o]:_o,[yo]:vo,[bo]:bo,[So]:cs};class si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cc=1234567;const ps=Math.PI/180,ms=180/Math.PI;function Ii(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function pa(i,t){return(i%t+t)%t}function nd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function id(i,t,e){return i!==t?(e-i)/(t-i):0}function gs(i,t,e){return(1-e)*i+e*t}function sd(i,t,e,n){return gs(i,t,1-Math.exp(-e*n))}function rd(i,t=1){return t-Math.abs(pa(i,t*2)-t)}function od(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ad(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ld(i,t){return i+Math.floor(Math.random()*(t-i+1))}function cd(i,t){return i+Math.random()*(t-i)}function hd(i){return i*(.5-Math.random())}function ud(i){i!==void 0&&(cc=i);let t=cc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fd(i){return i*ps}function dd(i){return i*ms}function pd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function md(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*h,a*c);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ma(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function uc(i,t){if(t.constructor===Float32Array)return i;const e=ma(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function fc(i,t){if(t.constructor===Float32Array)return i;const e=ma(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const _e={DEG2RAD:ps,RAD2DEG:ms,generateUUID:Ii,clamp:Zt,euclideanModulo:pa,mapLinear:nd,inverseLerp:id,lerp:gs,damp:sd,pingpong:rd,smoothstep:od,smootherstep:ad,randInt:ld,randFloat:cd,randFloatSpread:hd,seededRandom:ud,degToRad:fd,radToDeg:dd,isPowerOfTwo:pd,ceilPowerOfTwo:md,floorPowerOfTwo:hc,setQuaternionFromProperEuler:gd,normalize:fc,denormalize:uc},Ll=class Ll{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ll.prototype.isVector2=!0;let Bt=Ll;class rn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(d!==v||l!==u||c!==f||h!==m){let p=l*u+c*f+h*m+d*v;p<0&&(u=-u,f=-f,m=-m,v=-v,p=-p);let g=1-a;if(p<.9995){const x=Math.acos(p),M=Math.sin(x);g=Math.sin(g*x)/M,a=Math.sin(a*x)/M,l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+v*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+v*a;const x=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=x,c*=x,h*=x,d*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Dl=class Dl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dl.prototype.isVector3=!0;let Q=Dl;const ga=new Q,dc=new rn,Il=class Il{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],v=s[0],p=s[3],g=s[6],x=s[1],M=s[4],y=s[7],S=s[2],E=s[5],_=s[8];return r[0]=o*v+a*x+l*S,r[3]=o*p+a*M+l*E,r[6]=o*g+a*y+l*_,r[1]=c*v+h*x+d*S,r[4]=c*p+h*M+d*E,r[7]=c*g+h*y+d*_,r[2]=u*v+f*x+m*S,r[5]=u*p+f*M+m*E,r[8]=u*g+f*y+m*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xa.makeScale(t,e)),this}rotate(t){return lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xa.makeRotation(-t)),this}translate(t,e){return lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Il.prototype.isMatrix3=!0;let Vt=Il;const xa=new Vt,pc=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mc=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xd(){const i={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===de&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fn?or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rr]:{primaries:t,whitePoint:n,transfer:or,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:n,transfer:de,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),i}const ne=xd();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class _d{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ui===void 0&&(Ui=ds("canvas")),Ui.width=t.width,Ui.height=t.height;const s=Ui.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ui}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ds("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=On(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(On(e[n]/255)*255):e[n]=On(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vd=0;class _a{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(va(s[o].image)):r.push(va(s[o]))}else r=va(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_d.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}let Md=0;const Ma=new Q;class De extends si{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=hn,s=hn,r=We,o=En,a=dn,l=je,c=De.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Ii(),this.name="",this.source=new _a(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ma).x}get height(){return this.source.getSize(Ma).y}get depth(){return this.source.getSize(Ma).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zs:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case Ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zs:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case Ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null,De.DEFAULT_MAPPING=Kl,De.DEFAULT_ANISOTROPY=1;const Nl=class Nl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,y=(f+1)/2,S=(g+1)/2,E=(h+u)/4,_=(d+v)/4,b=(m+p)/4;return M>y&&M>S?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=_/n):y>S?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=b/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=_/r,s=b/r),this.set(n,s,r,e),this}let x=Math.sqrt((p-m)*(p-m)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(d-v)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nl.prototype.isVector4=!0;let Me=Nl;class Sd extends si{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new De({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new _a(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends Sd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class gc extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yd extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const uo=class uo{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,m,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,m,v,p)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,m,v,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uo().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Fi.setFromMatrixColumn(t,0).length(),r=1/Fi.setFromMatrixColumn(t,1).length(),o=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,m=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,m=c*h,v=c*d;e[0]=u+v*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,m=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,m=a*h,v=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,m=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*l,f=o*c,m=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bd,t,Ed)}lookAt(t,e,n){const s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),ri.crossVectors(n,en),ri.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ri.crossVectors(n,en)),ri.normalize(),cr.crossVectors(en,ri),s[0]=ri.x,s[4]=cr.x,s[8]=en.x,s[1]=ri.y,s[5]=cr.y,s[9]=en.y,s[2]=ri.z,s[6]=cr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],v=n[6],p=n[10],g=n[14],x=n[3],M=n[7],y=n[11],S=n[15],E=s[0],_=s[4],b=s[8],R=s[12],A=s[1],L=s[5],P=s[9],N=s[13],T=s[2],O=s[6],H=s[10],k=s[14],X=s[3],V=s[7],z=s[11],G=s[15];return r[0]=o*E+a*A+l*T+c*X,r[4]=o*_+a*L+l*O+c*V,r[8]=o*b+a*P+l*H+c*z,r[12]=o*R+a*N+l*k+c*G,r[1]=h*E+d*A+u*T+f*X,r[5]=h*_+d*L+u*O+f*V,r[9]=h*b+d*P+u*H+f*z,r[13]=h*R+d*N+u*k+f*G,r[2]=m*E+v*A+p*T+g*X,r[6]=m*_+v*L+p*O+g*V,r[10]=m*b+v*P+p*H+g*z,r[14]=m*R+v*N+p*k+g*G,r[3]=x*E+M*A+y*T+S*X,r[7]=x*_+M*L+y*O+S*V,r[11]=x*b+M*P+y*H+S*z,r[15]=x*R+M*N+y*k+S*G,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],v=t[7],p=t[11],g=t[15],x=l*f-c*u,M=a*f-c*d,y=a*u-l*d,S=o*f-c*h,E=o*u-l*h,_=o*d-a*h;return e*(v*x-p*M+g*y)-n*(m*x-p*S+g*E)+s*(m*M-v*S+g*_)-r*(m*y-v*E+p*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],v=t[13],p=t[14],g=t[15],x=e*a-n*o,M=e*l-s*o,y=e*c-r*o,S=n*l-s*a,E=n*c-r*a,_=s*c-r*l,b=h*v-d*m,R=h*p-u*m,A=h*g-f*m,L=d*p-u*v,P=d*g-f*v,N=u*g-f*p,T=x*N-M*P+y*L+S*A-E*R+_*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/T;return t[0]=(a*N-l*P+c*L)*O,t[1]=(s*P-n*N-r*L)*O,t[2]=(v*_-p*E+g*S)*O,t[3]=(u*E-d*_-f*S)*O,t[4]=(l*A-o*N-c*R)*O,t[5]=(e*N-s*A+r*R)*O,t[6]=(p*y-m*_-g*M)*O,t[7]=(h*_-u*y+f*M)*O,t[8]=(o*P-a*A+c*b)*O,t[9]=(n*A-e*P-r*b)*O,t[10]=(m*E-v*y+g*x)*O,t[11]=(d*y-h*E-f*x)*O,t[12]=(a*R-o*L-l*b)*O,t[13]=(e*L-n*R+s*b)*O,t[14]=(v*M-m*S-p*x)*O,t[15]=(h*S-d*M+u*x)*O,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,v=o*h,p=o*d,g=a*d,x=l*c,M=l*h,y=l*d,S=n.x,E=n.y,_=n.z;return s[0]=(1-(v+g))*S,s[1]=(f+y)*S,s[2]=(m-M)*S,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(u+g))*E,s[6]=(p+x)*E,s[7]=0,s[8]=(m+M)*_,s[9]=(p-x)*_,s[10]=(1-(u+v))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Fi.set(s[0],s[1],s[2]).length();const a=Fi.set(s[4],s[5],s[6]).length(),l=Fi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),mn.copy(this);const c=1/o,h=1/a,d=1/l;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,e.setFromRotationMatrix(mn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=pn,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let m,v;if(l)m=r/(o-r),v=o*r/(o-r);else if(a===pn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===fs)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=pn,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s);let m,v;if(l)m=1/(o-r),v=o/(o-r);else if(a===pn)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===fs)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};uo.prototype.isMatrix4=!0;let Qt=uo;const Fi=new Q,mn=new Qt,bd=new Q(0,0,0),Ed=new Q(1,1,1),ri=new Q,cr=new Q,en=new Q,xc=new Qt,_c=new rn;class An{constructor(t=0,e=0,n=0,s=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _c.setFromEuler(this),this.setFromQuaternion(_c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Sa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wd=0;const vc=new Q,Oi=new rn,zn=new Qt,hr=new Q,xs=new Q,Td=new Q,Ad=new rn,Mc=new Q(1,0,0),Sc=new Q(0,1,0),yc=new Q(0,0,1),bc={type:"added"},Rd={type:"removed"},zi={type:"childadded",child:null},ya={type:"childremoved",child:null};class He extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new Q,e=new An,n=new rn,s=new Q(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Vt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(Mc,t)}rotateY(t){return this.rotateOnAxis(Sc,t)}rotateZ(t){return this.rotateOnAxis(yc,t)}translateOnAxis(t,e){return vc.copy(t).applyQuaternion(this.quaternion),this.position.add(vc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mc,t)}translateY(t){return this.translateOnAxis(Sc,t)}translateZ(t){return this.translateOnAxis(yc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hr.copy(t):hr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(xs,hr,this.up):zn.lookAt(hr,xs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(zn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),zi.child=t,this.dispatchEvent(zi),zi.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rd),ya.child=t,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,Td),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Ad,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}He.DEFAULT_UP=new Q(0,1,0),He.DEFAULT_MATRIX_AUTO_UPDATE=!0,He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ie extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cd={type:"move"};class ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?i+(t-i)*6*e:e<.5?t:e<.6666666666666666?i+(t-i)*6*(.6666666666666666-e):i}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=pa(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ea(o,r,t+.3333333333333333),this.g=Ea(o,r,t),this.b=Ea(o,r,t-.3333333333333333)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const n=Ec[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return ne.workingToColorSpace(qe.copy(this),t),Math.round(Zt(qe.r*255,0,255))*65536+Math.round(Zt(qe.g*255,0,255))*256+Math.round(Zt(qe.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,r=qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Te){ne.workingToColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(ur);const n=gs(oi.h,ur.h,e),s=gs(oi.s,ur.s,e),r=gs(oi.l,ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Rt;Rt.NAMES=Ec;class Pd extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const gn=new Q,Bn=new Q,wa=new Q,kn=new Q,Bi=new Q,ki=new Q,wc=new Q,Ta=new Q,Aa=new Q,Ra=new Q,Ca=new Me,Pa=new Me,La=new Me;class xn{constructor(t=new Q,e=new Q,n=new Q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),Bn.subVectors(n,e),wa.subVectors(t,e);const o=gn.dot(gn),a=gn.dot(Bn),l=gn.dot(wa),c=Bn.dot(Bn),h=Bn.dot(wa),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(o,kn.y),l.addScaledVector(a,kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ca.setScalar(0),Pa.setScalar(0),La.setScalar(0),Ca.fromBufferAttribute(t,e),Pa.fromBufferAttribute(t,n),La.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ca,r.x),o.addScaledVector(Pa,r.y),o.addScaledVector(La,r.z),o}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Bn.subVectors(t,e),gn.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),gn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Bi.subVectors(s,n),ki.subVectors(r,n),Ta.subVectors(t,n);const l=Bi.dot(Ta),c=ki.dot(Ta);if(l<=0&&c<=0)return e.copy(n);Aa.subVectors(t,s);const h=Bi.dot(Aa),d=ki.dot(Aa);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Bi,o);Ra.subVectors(t,r);const f=Bi.dot(Ra),m=ki.dot(Ra);if(m>=0&&f<=m)return e.copy(r);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ki,a);const p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return wc.subVectors(r,s),a=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(wc,a);const g=1/(p+v+u);return o=v*g,a=u*g,e.copy(n).addScaledVector(Bi,o).addScaledVector(ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class mi{constructor(t=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),dr.subVectors(this.max,_s),Gi.subVectors(t.a,_s),Hi.subVectors(t.b,_s),Vi.subVectors(t.c,_s),ai.subVectors(Hi,Gi),li.subVectors(Vi,Hi),gi.subVectors(Gi,Vi);let e=[0,-ai.z,ai.y,0,-li.z,li.y,0,-gi.z,gi.y,ai.z,0,-ai.x,li.z,0,-li.x,gi.z,0,-gi.x,-ai.y,ai.x,0,-li.y,li.x,0,-gi.y,gi.x,0];return!Da(e,Gi,Hi,Vi,dr)||(e=[1,0,0,0,1,0,0,0,1],!Da(e,Gi,Hi,Vi,dr))?!1:(pr.crossVectors(ai,li),e=[pr.x,pr.y,pr.z],Da(e,Gi,Hi,Vi,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Gn=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],_n=new Q,fr=new mi,Gi=new Q,Hi=new Q,Vi=new Q,ai=new Q,li=new Q,gi=new Q,_s=new Q,dr=new Q,pr=new Q,xi=new Q;function Da(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){xi.fromArray(i,r);const a=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Hn=Ld();function Ld(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Dd(i){Math.abs(i)>65504&&Ht("DataUtils.toHalfFloat(): Value out of range."),i=Zt(i,-65504,65504),Hn.floatView[0]=i;const t=Hn.uint32View[0],e=t>>23&511;return Hn.baseTable[e]+((t&8388607)>>Hn.shiftTable[e])}function Id(i){const t=i>>10;return Hn.uint32View[0]=Hn.mantissaTable[Hn.offsetTable[t]+(i&1023)]+Hn.exponentTable[t],Hn.floatView[0]}class Tc{static toHalfFloat(t){return Dd(t)}static fromHalfFloat(t){return Id(t)}}const Ce=new Q,mr=new Bt;let Nd=0;class Pe extends si{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jf,this.updateRanges=[],this.gpuType=un,this.version=0,this._normalizationScale=t!==void 0?ma(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mr.fromBufferAttribute(this,e),mr.applyMatrix3(t),this.setXY(e,mr.x,mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):uc(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):fc(t,this.array)}}class Ac extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Rc extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Ud=new mi,vs=new Q,Ia=new Q;class Ms{constructor(t=new Q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ud.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(Ia)),this.expandByPoint(vs.copy(t.center).sub(Ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Fd=0;const on=new Qt,Na=new He,Wi=new Q,nn=new mi,Ss=new mi,ze=new Q;class Ae extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qf(t)?Rc:Ac)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Na.lookAt(t),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new re(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(nn.min,Ss.min),nn.expandByPoint(ze),ze.addVectors(nn.max,Ss.max),nn.expandByPoint(ze)):(nn.expandByPoint(Ss.min),nn.expandByPoint(Ss.max))}nn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ze.fromBufferAttribute(a,c),l&&(Wi.fromBufferAttribute(t,c),ze.add(Wi)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Pe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)a[R]=new Q,l[R]=new Q;const h=new Q,d=new Q,u=new Q,f=new Bt,m=new Bt,v=new Bt,p=new Q,g=new Q;function x(R,A,L){c[R]=c[A]=c[L]=1,h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,A),u.fromBufferAttribute(n,L),f.fromBufferAttribute(r,R),m.fromBufferAttribute(r,A),v.fromBufferAttribute(r,L),d.sub(h),u.sub(h),m.sub(f),v.sub(f);const P=1/(m.x*v.y-v.x*m.y);isFinite(P)&&(p.copy(d).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(P),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(P),a[R].add(p),a[A].add(p),a[L].add(p),l[R].add(g),l[A].add(g),l[L].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,A=M.length;R<A;++R){const L=M[R],P=L.start,N=L.count;for(let T=P,O=P+N;T<O;T+=3)x(t.getX(T+0),t.getX(T+1),t.getX(T+2))}const y=new Q,S=new Q,E=new Q,_=new Q;function b(R){E.fromBufferAttribute(s,R),_.copy(E);const A=a[R];y.copy(A),y.sub(E.multiplyScalar(E.dot(A))).normalize(),S.crossVectors(_,A);const P=S.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,P)}for(let R=0,A=n.count;R<A;++R)c[R]&&b(R);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new Q,r=new Q,o=new Q,a=new Q,l=new Q,c=new Q,h=new Q,d=new Q;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,m=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new Pe(u,h,d)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ua=new Q,Od=new Q,zd=new Vt;class Rn{constructor(t=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ua.subVectors(n,e).cross(Od.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Ua),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zd.getNormalMatrix(t),s=this.coplanarPoint(Ua).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Bd=0;class Xi extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=ls,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Hl,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=da,this.stencilZFail=da,this.stencilZPass=da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Rn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Bt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Bt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Vn=new Q,Fa=new Q,gr=new Q,xr=new Q;class Oa{constructor(t=new Q,e=new Q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fa.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),xr.copy(this.origin).sub(Fa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(gr),a=xr.dot(this.direction),l=-xr.dot(gr),c=xr.lengthSq(),h=Math.abs(1-o*o);let d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fa).addScaledVector(gr,u),f}intersectSphere(t,e){if(t.radius<0)return null;Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,v=e.y-o.y,p=e.z-o.z,g=n.x-o.x,x=n.y-o.y,M=n.z-o.z,y=Math.abs(l),S=Math.abs(c),E=Math.abs(h);let _,b,R,A,L,P,N,T,O,H,k,X;if(y>=S&&y>=E?(R=l,P=d,O=m,X=g,l>=0?(_=c,b=h,A=u,L=f,N=v,T=p,H=x,k=M):(_=h,b=c,A=f,L=u,N=p,T=v,H=M,k=x)):S>=E?(R=c,P=u,O=v,X=x,c>=0?(_=h,b=l,A=f,L=d,N=p,T=m,H=M,k=g):(_=l,b=h,A=d,L=f,N=m,T=p,H=g,k=M)):(R=h,P=f,O=p,X=M,h>=0?(_=l,b=c,A=d,L=u,N=m,T=v,H=g,k=x):(_=c,b=l,A=u,L=d,N=v,T=m,H=x,k=g)),R===0)return null;const V=_/R,z=b/R,G=1/R,W=A-V*P,ut=L-z*P,q=N-V*O,at=T-z*O,ct=H-V*X,mt=k-z*X,pt=ct*at-mt*q,Ct=W*mt-ut*ct,Kt=q*ut-at*W;if(s){if(pt<0||Ct<0||Kt<0)return null}else if((pt<0||Ct<0||Kt<0)&&(pt>0||Ct>0||Kt>0))return null;const st=pt+Ct+Kt;if(st===0)return null;const dt=G*(pt*P+Ct*O+Kt*X);return(st>0?dt<0:dt>0)?null:this.at(dt/st,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wn extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Cc=new Qt,_i=new Oa,_r=new Ms,Pc=new Q,vr=new Q,Mr=new Q,Sr=new Q,za=new Q,yr=new Q,Lc=new Q,br=new Q;class Jt extends He{constructor(t=new Ae,e=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(za.fromBufferAttribute(d,t),o?yr.addScaledVector(za,h):yr.addScaledVector(za.sub(e),h))}e.add(yr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(_r.containsPoint(_i.origin)===!1&&(_i.intersectSphere(_r,Pc)===null||_i.origin.distanceToSquared(Pc)>(t.far-t.near)**2))&&(Cc.copy(r).invert(),_i.copy(t.ray).applyMatrix4(Cc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){const p=u[m],g=o[p.materialIndex],x=Math.max(p.start,f.start),M=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,S=M;y<S;y+=3){const E=a.getX(y),_=a.getX(y+1),b=a.getX(y+2);s=Er(this,g,t,n,c,h,d,E,_,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const x=a.getX(p),M=a.getX(p+1),y=a.getX(p+2);s=Er(this,o,t,n,c,h,d,x,M,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){const p=u[m],g=o[p.materialIndex],x=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,S=M;y<S;y+=3){const E=y,_=y+1,b=y+2;s=Er(this,g,t,n,c,h,d,E,_,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const x=p,M=p+1,y=p+2;s=Er(this,o,t,n,c,h,d,x,M,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function kd(i,t,e,n,s,r,o,a){let l;if(t.side===Ze?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ti,a),l===null)return null;br.copy(a),br.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(br);return c<e.near||c>e.far?null:{distance:c,point:br.clone(),object:i}}function Er(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,vr),i.getVertexPosition(l,Mr),i.getVertexPosition(c,Sr);const h=kd(i,t,e,n,vr,Mr,Sr,Lc);if(h){const d=new Q;xn.getBarycoord(Lc,vr,Mr,Sr,d),s&&(h.uv=xn.getInterpolatedAttribute(s,a,l,c,d,new Bt)),r&&(h.uv1=xn.getInterpolatedAttribute(r,a,l,c,d,new Bt)),o&&(h.normal=xn.getInterpolatedAttribute(o,a,l,c,d,new Q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new Q,materialIndex:0};xn.getNormal(vr,Mr,Sr,u.normal),h.face=u,h.barycoord=d}return h}class ys extends De{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ge,h=Ge,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dc extends Pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const qi=new Qt,Ic=new Qt,wr=[],Nc=new mi,Gd=new Qt,bs=new Jt,Es=new Ms;class an extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Dc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Gd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),Nc.copy(t.boundingBox).applyMatrix4(qi),this.boundingBox.union(Nc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ms),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),Es.copy(t.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(Es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),t.ray.intersectsSphere(Es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qi),Ic.multiplyMatrices(n,qi),bs.matrixWorld=Ic,bs.raycast(t,wr);for(let o=0,a=wr.length;o<a;o++){const l=wr[o];l.instanceId=r,l.object=this,e.push(l)}wr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Dc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ys(new Float32Array(s*this.count),s,this.count,Io,un));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const vi=new Ms,Hd=new Bt(.5,.5),Tr=new Q;class ws{constructor(t=new Rn,e=new Rn,n=new Rn,s=new Rn,r=new Rn,o=new Rn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],v=r[9],p=r[10],g=r[11],x=r[12],M=r[13],y=r[14],S=r[15];if(s[0].setComponents(c-o,f-h,g-m,S-x).normalize(),s[1].setComponents(c+o,f+h,g+m,S+x).normalize(),s[2].setComponents(c+a,f+d,g+v,S+M).normalize(),s[3].setComponents(c-a,f-d,g-v,S-M).normalize(),n)s[4].setComponents(l,u,p,y).normalize(),s[5].setComponents(c-l,f-u,g-p,S-y).normalize();else if(s[4].setComponents(c-l,f-u,g-p,S-y).normalize(),e===pn)s[5].setComponents(c+l,f+u,g+p,S+y).normalize();else if(e===fs)s[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){vi.center.set(0,0,0);const e=Hd.distanceTo(t.center);return vi.radius=.7071067811865476+e,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Tr.x=s.normal.x>0?t.max.x:t.min.x,Tr.y=s.normal.y>0?t.max.y:t.min.y,Tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Uc=new Qt;class Ba{constructor(){this.coordinateSystem=pn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];Uc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ws),n[s].setFromProjectionMatrix(Uc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ws),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new Ba().copy(this)}}class Fc extends De{constructor(t=[],e=Li,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ar extends De{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yi extends De{constructor(t,e,n=wn,s,r,o,a=Ge,l=Ge,c,h=ei,d=1){if(h!==ei&&h!==ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _a(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Oc extends Yi{constructor(t,e=wn,n=Li,s,r,o=Ge,a=Ge,l,c=ei){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class zc extends De{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Mi extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(d,2));function m(v,p,g,x,M,y,S,E,_,b,R){const A=y/_,L=S/b,P=y/2,N=S/2,T=E/2,O=_+1,H=b+1;let k=0,X=0;const V=new Q;for(let z=0;z<H;z++){const G=z*L-N;for(let W=0;W<O;W++){const ut=W*A-P;V[v]=ut*x,V[p]=G*M,V[g]=T,c.push(V.x,V.y,V.z),V[v]=0,V[p]=0,V[g]=E>0?1:-1,h.push(V.x,V.y,V.z),d.push(W/_),d.push(1-z/b),k+=1}}for(let z=0;z<b;z++)for(let G=0;G<_;G++){const W=u+G+O*z,ut=u+G+O*(z+1),q=u+(G+1)+O*(z+1),at=u+(G+1)+O*z;l.push(W,ut,at),l.push(ut,q,at),X+=6}a.addGroup(f,X,R),f+=X,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ka extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let m=0;const v=[],p=n/2;let g=0;x(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new re(d,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(f,2));function x(){const y=new Q,S=new Q;let E=0;const _=(e-t)/n;for(let b=0;b<=r;b++){const R=[],A=b/r,L=A*(e-t)+t;for(let P=0;P<=s;P++){const N=P/s,T=N*l+a,O=Math.sin(T),H=Math.cos(T);S.x=L*O,S.y=-A*n+p,S.z=L*H,d.push(S.x,S.y,S.z),y.set(O,_,H).normalize(),u.push(y.x,y.y,y.z),f.push(N,1-A),R.push(m++)}v.push(R)}for(let b=0;b<s;b++)for(let R=0;R<r;R++){const A=v[R][b],L=v[R+1][b],P=v[R+1][b+1],N=v[R][b+1];(t>0||R!==0)&&(h.push(A,L,N),E+=3),(e>0||R!==r-1)&&(h.push(L,P,N),E+=3)}c.addGroup(g,E,0),g+=E}function M(y){const S=m,E=new Bt,_=new Q;let b=0;const R=y===!0?t:e,A=y===!0?1:-1;for(let P=1;P<=s;P++)d.push(0,p*A,0),u.push(0,A,0),f.push(.5,.5),m++;const L=m;for(let P=0;P<=s;P++){const T=P/s*l+a,O=Math.cos(T),H=Math.sin(T);_.x=R*H,_.y=p*A,_.z=R*O,d.push(_.x,_.y,_.z),u.push(0,A,0),E.x=O*.5+.5,E.y=H*.5*A+.5,f.push(E.x,E.y),m++}for(let P=0;P<s;P++){const N=S+P,T=L+P;y===!0?h.push(T,T+1,N):h.push(T+1,T,N),b+=3}c.addGroup(g,b,y===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ka(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ga extends Ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new Q,y=new Q,S=new Q;for(let E=0;E<e.length;E+=3)f(e[E+0],M),f(e[E+1],y),f(e[E+2],S),l(M,y,S,x)}function l(x,M,y,S){const E=S+1,_=[];for(let b=0;b<=E;b++){_[b]=[];const R=x.clone().lerp(y,b/E),A=M.clone().lerp(y,b/E),L=E-b;for(let P=0;P<=L;P++)P===0&&b===E?_[b][P]=R:_[b][P]=R.clone().lerp(A,P/L)}for(let b=0;b<E;b++)for(let R=0;R<2*(E-b)-1;R++){const A=Math.floor(R/2);R%2===0?(u(_[b][A+1]),u(_[b+1][A]),u(_[b][A])):(u(_[b][A+1]),u(_[b+1][A+1]),u(_[b+1][A]))}}function c(x){const M=new Q;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(x),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){const x=new Q;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];const y=p(x)/2/Math.PI+.5,S=g(x)/Math.PI+.5;o.push(y,1-S)}m(),d()}function d(){for(let x=0;x<o.length;x+=6){const M=o[x+0],y=o[x+2],S=o[x+4],E=Math.max(M,y,S),_=Math.min(M,y,S);E>.9&&_<.1&&(M<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),S<.2&&(o[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,M){const y=x*3;M.x=t[y+0],M.y=t[y+1],M.z=t[y+2]}function m(){const x=new Q,M=new Q,y=new Q,S=new Q,E=new Bt,_=new Bt,b=new Bt;for(let R=0,A=0;R<r.length;R+=9,A+=6){x.set(r[R+0],r[R+1],r[R+2]),M.set(r[R+3],r[R+4],r[R+5]),y.set(r[R+6],r[R+7],r[R+8]),E.set(o[A+0],o[A+1]),_.set(o[A+2],o[A+3]),b.set(o[A+4],o[A+5]),S.copy(x).add(M).add(y).divideScalar(3);const L=p(S);v(E,A+0,x,L),v(_,A+2,M,L),v(b,A+4,y,L)}}function v(x,M,y,S){S<0&&x.x===1&&(o[M]=x.x-1),y.x===0&&y.z===0&&(o[M]=S/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.vertices,t.indices,t.radius,t.detail)}}function Vd(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Bc(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=$d(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<s;u+=e){const f=i[u],m=i[u+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Ts(r,o,e,a,l,c,0),o}function Bc(i,t,e,n,s){let r;if(s===rp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Vc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Vc(o/n|0,i[o],i[o+1],r);return r&&$i(r,r.next)&&(Cs(r),r=r.next),r}function Si(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($i(e,e.next)||Se(e.prev,e,e.next)===0)){if(Cs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ts(i,t,e,n,s,r,o){if(!i)return;!o&&r&&jd(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Xd(i,n,s,r):Wd(i)){t.push(l.i,i.i,c.i),Cs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=qd(Si(i),t),Ts(i,t,e,n,s,r,2)):o===2&&Yd(i,t,e,n,s,r):Ts(Si(i),t,e,n,s,r,1);break}}}function Wd(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&As(s,a,r,l,o,c,m.x,m.y)&&Se(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Xd(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Se(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),m=Math.min(h,d,u),v=Math.max(a,l,c),p=Math.max(h,d,u),g=Ha(f,m,t,e,n),x=Ha(v,p,t,e,n);let M=i.prevZ,y=i.nextZ;for(;M&&M.z>=g&&y&&y.z<=x;){if(M.x>=f&&M.x<=v&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&As(a,h,l,d,c,u,M.x,M.y)&&Se(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=v&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&As(a,h,l,d,c,u,y.x,y.y)&&Se(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=v&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&As(a,h,l,d,c,u,M.x,M.y)&&Se(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&As(a,h,l,d,c,u,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function qd(i,t){let e=i;do{const n=e.prev,s=e.next.next;!$i(n,s)&&Gc(n,e,e.next,s)&&Rs(n,s)&&Rs(s,n)&&(t.push(n.i,e.i,s.i),Cs(e),Cs(e.next),e=i=s),e=e.next}while(e!==i);return Si(e)}function Yd(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&np(o,a)){let l=Hc(o,a);o=Si(o,o.next),l=Si(l,l.next),Ts(o,t,e,n,s,r,0),Ts(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function $d(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Bc(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ep(c))}s.sort(Kd);for(let r=0;r<s.length;r++)e=Zd(s[r],e);return e}function Kd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Zd(i,t){const e=Jd(i,t);if(!e)return t;const n=Hc(e,i);return Si(n,n.next),Si(e,e.next)}function Jd(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if($i(i,e))return e;do{if($i(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&kc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);Rs(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Qd(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Qd(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function jd(i,t,e,n){let s=i;do s.z===0&&(s.z=Ha(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,tp(s)}function tp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ha(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ep(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function kc(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function As(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&kc(i,t,e,n,s,r,o,a)}function np(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ip(i,t)&&(Rs(i,t)&&Rs(t,i)&&sp(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||$i(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $i(i,t){return i.x===t.x&&i.y===t.y}function Gc(i,t,e,n){const s=Cr(Se(i,t,e)),r=Cr(Se(i,t,n)),o=Cr(Se(e,n,i)),a=Cr(Se(e,n,t));return!!(s!==r&&o!==a||s===0&&Rr(i,e,t)||r===0&&Rr(i,n,t)||o===0&&Rr(e,i,n)||a===0&&Rr(e,t,n))}function Rr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Cr(i){return i>0?1:i<0?-1:0}function ip(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Gc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Rs(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function sp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Hc(i,t){const e=Va(i.i,i.x,i.y),n=Va(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Vc(i,t,e,n){const s=Va(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Cs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Va(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class op{static triangulate(t,e,n=2){return Vd(t,e,n)}}class Wa{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Wa.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Wc(t),Xc(n,t);let o=t.length;e.forEach(Wc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Xc(n,e[l]);const a=op.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Wc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Xc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Xa extends Ga{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xa(t.radius,t.detail)}}class ci extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],v=[],p=[];for(let g=0;g<h;g++){const x=g*u-o;for(let M=0;M<c;M++){const y=M*d-r;m.push(y,-x,0),v.push(0,0,1),p.push(M/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){const M=x+c*g,y=x+c*(g+1),S=x+1+c*(g+1),E=x+1+c*g;f.push(M,y,E),f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.width,t.height,t.widthSegments,t.heightSegments)}}class qa extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new Q,u=new Q,f=[],m=[],v=[],p=[];for(let g=0;g<=n;g++){const x=[],M=g/n,y=o+M*a,S=t*Math.cos(y),E=Math.sqrt(t*t-S*S);let _=0;g===0&&o===0?_=.5/e:g===n&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){const R=b/e,A=s+R*r;d.x=-E*Math.cos(A),d.y=S,d.z=E*Math.sin(A),m.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(R+_,1-M),x.push(c++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<e;x++){const M=h[g][x+1],y=h[g][x],S=h[g+1][x],E=h[g+1][x+1];(g!==0||o>0)&&f.push(M,y,E),(g!==n-1||l<Math.PI)&&f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Ki(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(qc(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(qc(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Je(i){const t={};for(let e=0;e<i.length;e++){const n=Ki(i[e]);for(const s in n)t[s]=n[s]}return t}function qc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ap(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const lp={clone:Ki,merge:Je};var cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cp,this.fragmentShader=hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=ap(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Rt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Q().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Vt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Qt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class up extends Xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ye extends Xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sr,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $c extends Xi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sr,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Eo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fp extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dp extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ya={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Kc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Kc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Kc(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class pp{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const mp=new pp;class $a{constructor(t){this.manager=t!==void 0?t:mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}$a.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zi=new WeakMap;class gp extends $a{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ya.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=Zi.get(o);d===void 0&&(d=[],Zi.set(o,d)),d.push({onLoad:e,onError:s})}return o}const a=ds("img");function l(){h(),e&&e(this);const d=Zi.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Zi.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),Ya.remove(`image:${t}`);const u=Zi.get(this)||[];for(let f=0;f<u.length;f++){const m=u[f];m.onError&&m.onError(d)}Zi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ya.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class Zc extends $a{constructor(t){super(t)}load(t,e,n,s){const r=new De,o=new gp(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Jc extends He{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class xp extends Jc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ka=new Qt,Qc=new Q,jc=new Q;class _p{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ws,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Qc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qc),jc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ka,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===fs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Pr=new Q,Lr=new rn,Cn=new Q;class th extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pr,Lr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pr,Lr,Cn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Pr,Lr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pr,Lr,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hi=new Q,eh=new Bt,nh=new Bt;class vn extends th{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,eh,nh),e.subVectors(nh,eh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ps*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ih extends th{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class vp extends _p{constructor(){super(new ih(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mp extends Jc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new vp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Ji=-90,Qi=1;class Za extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(Ji,Qi,t,e);s.layers=this.layers,this.add(s);const r=new vn(Ji,Qi,t,e);r.layers=this.layers,this.add(r);const o=new vn(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const a=new vn(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const l=new vn(Ji,Qi,t,e);l.layers=this.layers,this.add(l);const c=new vn(Ji,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Sp extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const sh=new Qt;class yp{constructor(t,e,n=0,s=1/0){this.ray=new Oa(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Sa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):le("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return sh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sh),this}intersectObject(t,e=!0,n=[]){return Ja(t,this,n,e),n.sort(rh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ja(t[s],this,n,e);return n.sort(rh),n}}function rh(i,t){return i.distance-t.distance}function Ja(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ja(r[o],t,e,!0)}}class Dr{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ul=class Ul{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Ul.prototype.isMatrix2=!0;let oh=Ul;class bp extends si{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ah(i,t,e,n){const s=Ep(n);switch(e){case tc:return i*t;case Io:return i*t/s.components*s.byteLength;case No:return i*t/s.components*s.byteLength;case ii:return i*t*2/s.components*s.byteLength;case Uo:return i*t*2/s.components*s.byteLength;case ec:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case Fo:return i*t*4/s.components*s.byteLength;case Qs:case js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case tr:case er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zo:case ko:return Math.max(i,16)*Math.max(t,8)/4;case Oo:case Bo:return Math.max(i,8)*Math.max(t,8)/2;case Go:case Ho:case Wo:case Xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vo:case nr:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ko:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case jo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ea:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case na:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ra:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case oa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case aa:case la:case ca:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ha:case ua:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ir:case fa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ep(i){switch(i){case je:case Zl:return{byteLength:1,components:1};case us:case Jl:case fn:return{byteLength:2,components:1};case Lo:case Do:return{byteLength:2,components:4};case wn:case Po:case un:return{byteLength:4,components:1};case Ql:case jl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mo}})),typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lh(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function wp(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],v=d[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ap=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Kp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e0="gl_FragColor = linearToOutputTexel( gl_FragColor );",n0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,r0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,d0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,x0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,_0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,b0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,E0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,w0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,T0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,R0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,U0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B0=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,H0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,W0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,K0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_m=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $t={alphahash_fragment:Tp,alphahash_pars_fragment:Ap,alphamap_fragment:Rp,alphamap_pars_fragment:Cp,alphatest_fragment:Pp,alphatest_pars_fragment:Lp,aomap_fragment:Dp,aomap_pars_fragment:Ip,batching_pars_vertex:Np,batching_vertex:Up,begin_vertex:Fp,beginnormal_vertex:Op,bsdfs:zp,iridescence_fragment:Bp,bumpmap_pars_fragment:kp,clipping_planes_fragment:Gp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Wp,color_fragment:Xp,color_pars_fragment:qp,color_pars_vertex:Yp,color_vertex:$p,common:Kp,defaultnormal_vertex:Zp,displacementmap_pars_vertex:Jp,displacementmap_vertex:Qp,emissivemap_fragment:jp,emissivemap_pars_fragment:t0,colorspace_fragment:e0,colorspace_pars_fragment:n0,envmap_fragment:i0,envmap_common_pars_fragment:s0,envmap_pars_fragment:r0,envmap_pars_vertex:o0,envmap_physical_pars_fragment:x0,envmap_vertex:a0,fog_vertex:l0,fog_pars_vertex:c0,fog_fragment:h0,fog_pars_fragment:u0,gradientmap_pars_fragment:f0,lightmap_pars_fragment:d0,lights_lambert_fragment:p0,lights_lambert_pars_fragment:m0,lights_pars_begin:g0,lights_toon_fragment:_0,lights_toon_pars_fragment:v0,lights_phong_fragment:M0,lights_phong_pars_fragment:S0,lights_physical_fragment:y0,lights_physical_pars_fragment:b0,lights_fragment_begin:E0,lights_fragment_maps:w0,lights_fragment_end:T0,lightprobes_pars_fragment:A0,logdepthbuf_fragment:R0,logdepthbuf_pars_fragment:C0,logdepthbuf_pars_vertex:P0,logdepthbuf_vertex:L0,map_fragment:D0,map_pars_fragment:I0,map_particle_fragment:N0,map_particle_pars_fragment:U0,metalnessmap_fragment:F0,metalnessmap_pars_fragment:O0,morphinstance_vertex:z0,morphcolor_vertex:B0,morphnormal_vertex:k0,morphtarget_pars_vertex:G0,morphtarget_vertex:H0,normal_fragment_begin:V0,normal_fragment_maps:W0,normal_pars_fragment:X0,normal_pars_vertex:q0,normal_vertex:Y0,normalmap_pars_fragment:$0,clearcoat_normal_fragment_begin:K0,clearcoat_normal_fragment_maps:Z0,clearcoat_pars_fragment:J0,iridescence_pars_fragment:Q0,opaque_fragment:j0,packing:tm,premultiplied_alpha_fragment:em,project_vertex:nm,dithering_fragment:im,dithering_pars_fragment:sm,roughnessmap_fragment:rm,roughnessmap_pars_fragment:om,shadowmap_pars_fragment:am,shadowmap_pars_vertex:lm,shadowmap_vertex:cm,shadowmask_pars_fragment:hm,skinbase_vertex:um,skinning_pars_vertex:fm,skinning_vertex:dm,skinnormal_vertex:pm,specularmap_fragment:mm,specularmap_pars_fragment:gm,tonemapping_fragment:xm,tonemapping_pars_fragment:_m,transmission_fragment:vm,transmission_pars_fragment:Mm,uv_pars_fragment:Sm,uv_pars_vertex:ym,uv_vertex:bm,worldpos_vertex:Em,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},bt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Pn={basic:{uniforms:Je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Je([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Je([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Je([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Je([bt.points,bt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Je([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Je([bt.common,bt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Je([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Je([bt.sprite,bt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Je([bt.common,bt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Je([bt.lights,bt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Pn.physical={uniforms:Je([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Ir={r:0,b:0,g:0},wm=new Qt,ch=new Vt;ch.set(-1,0,0,0,1,0,0,0,1);function Tm(i,t,e,n,s,r){const o=new Rt(0);let a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const y=x.backgroundBlurriness>0;M=t.get(M,y)}return M}function m(x){let M=!1;const y=f(x);y===null?p(o,a):y&&y.isColor&&(p(y,1),M=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,M){const y=f(M);y&&y.isCubeTexture?(c===void 0&&(c=new Jt(new Mi(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Ki(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wm.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ch),c.material.toneMapped=ne.getTransfer(y.colorSpace)!==de,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Jt(new ci(2,2),new Xn({name:"BackgroundMaterial",uniforms:Ki(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ne.getTransfer(y.colorSpace)!==de,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,M){x.getRGB(Ir,Yc(i)),e.buffers.color.setClear(Ir.r,Ir.g,Ir.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),a=M,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:m,addToRenderList:v,dispose:g}}function Am(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(L,P,N,T,O){let H=!1;const k=d(L,T,N,P);r!==k&&(r=k,c(r.object)),H=f(L,T,N,O),H&&m(L,T,N,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(L,P,N,T),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,P,N,T){const O=T.wireframe===!0;let H=n[P.id];H===void 0&&(H={},n[P.id]=H);const k=L.isInstancedMesh===!0?L.id:0;let X=H[k];X===void 0&&(X={},H[k]=X);let V=X[N.id];V===void 0&&(V={},X[N.id]=V);let z=V[O];return z===void 0&&(z=u(l()),V[O]=z),z}function u(L){const P=[],N=[],T=[];for(let O=0;O<e;O++)P[O]=0,N[O]=0,T[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:T,object:L,attributes:{},index:null}}function f(L,P,N,T){const O=r.attributes,H=P.attributes;let k=0;const X=N.getAttributes();for(const V in X)if(X[V].location>=0){const G=O[V];let W=H[V];if(W===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),G===void 0||G.attribute!==W||W&&G.data!==W.data)return!0;k++}return r.attributesNum!==k||r.index!==T}function m(L,P,N,T){const O={},H=P.attributes;let k=0;const X=N.getAttributes();for(const V in X)if(X[V].location>=0){let G=H[V];G===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(G=L.instanceColor));const W={};W.attribute=G,G&&G.data&&(W.data=G.data),O[V]=W,k++}r.attributes=O,r.attributesNum=k,r.index=T}function v(){const L=r.newAttributes;for(let P=0,N=L.length;P<N;P++)L[P]=0}function p(L){g(L,0)}function g(L,P){const N=r.newAttributes,T=r.enabledAttributes,O=r.attributeDivisors;N[L]=1,T[L]===0&&(i.enableVertexAttribArray(L),T[L]=1),O[L]!==P&&(i.vertexAttribDivisor(L,P),O[L]=P)}function x(){const L=r.newAttributes,P=r.enabledAttributes;for(let N=0,T=P.length;N<T;N++)P[N]!==L[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function M(L,P,N,T,O,H,k){k===!0?i.vertexAttribIPointer(L,P,N,O,H):i.vertexAttribPointer(L,P,N,T,O,H)}function y(L,P,N,T){v();const O=T.attributes,H=N.getAttributes(),k=P.defaultAttributeValues;for(const X in H){const V=H[X];if(V.location>=0){let z=O[X];if(z===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),z!==void 0){const G=z.normalized,W=z.itemSize,ut=t.get(z);if(ut===void 0)continue;const q=ut.buffer,at=ut.type,ct=ut.bytesPerElement,mt=at===i.INT||at===i.UNSIGNED_INT||z.gpuType===Po;if(z.isInterleavedBufferAttribute){const pt=z.data,Ct=pt.isInterleavedBuffer===!0?pt.stride:pt.itemSize,Kt=z.offset;if(pt.isInstancedInterleavedBuffer||pt.isInstancedBufferAttribute){for(let st=0;st<V.locationSize;st++)g(V.location+st,pt.meshPerAttribute);L.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let st=0;st<V.locationSize;st++)p(V.location+st);i.bindBuffer(i.ARRAY_BUFFER,q);for(let st=0;st<V.locationSize;st++)M(V.location+st,W/V.locationSize,at,G,Ct*ct,(Kt+W/V.locationSize*st)*ct,mt)}else{if(z.isInstancedBufferAttribute){for(let pt=0;pt<V.locationSize;pt++)g(V.location+pt,z.meshPerAttribute);L.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let pt=0;pt<V.locationSize;pt++)p(V.location+pt);i.bindBuffer(i.ARRAY_BUFFER,q);for(let pt=0;pt<V.locationSize;pt++)M(V.location+pt,W/V.locationSize,at,G,W*ct,W/V.locationSize*pt*ct,mt)}}else if(k!==void 0){const G=k[X];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(V.location,G);break;case 3:i.vertexAttrib3fv(V.location,G);break;case 4:i.vertexAttrib4fv(V.location,G);break;default:i.vertexAttrib1fv(V.location,G)}}}}x()}function S(){R();for(const L in n){const P=n[L];for(const N in P){const T=P[N];for(const O in T){const H=T[O];for(const k in H)h(H[k].object),delete H[k];delete T[O]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;const P=n[L.id];for(const N in P){const T=P[N];for(const O in T){const H=T[O];for(const k in H)h(H[k].object),delete H[k];delete T[O]}}delete n[L.id]}function _(L){for(const P in n){const N=n[P];for(const T in N){const O=N[T];if(O[L.id]===void 0)continue;const H=O[L.id];for(const k in H)h(H[k].object),delete H[k];delete O[L.id]}}}function b(L){for(const P in n){const N=n[P],T=L.isInstancedMesh===!0?L.id:0,O=N[T];if(O!==void 0){for(const H in O){const k=O[H];for(const X in k)h(k[X].object),delete k[X];delete O[H]}delete N[T],Object.keys(N).length===0&&delete n[P]}}}function R(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:p,disableUnusedAttributes:x}}function Rm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Cm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==dn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){const b=_===fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==je&&_!==un&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ht("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:y,maxSamples:S,samples:E}}function Pm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Rn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,g=i.get(d);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{const x=r?0:n,M=x*4;let y=g.clippingState||null;l.value=y,y=h(m,u,M,f);for(let S=0;S!==M;++S)y[S]=e[S];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,m!==!0||p===null){const g=f+v*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,y=f;M!==v;++M,y+=4)o.copy(d[M]).applyMatrix4(x,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}class Qa extends Tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Fc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Mi(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Ci});r.uniforms.tEquirect.value=e;const o=new Jt(s,r),a=e.minFilter;return e.minFilter===En&&(e.minFilter=We),new Za(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const hh=256,Lm=3,Dm=20,uh=256,fh=16,Im=3,Nm=new Q,Um=new Rt;class Nr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Za(1,10,null),this._boxMesh=new Jt(new Mi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Nm}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(Um));const p=new Za(n,s,h);return p.position.copy(a),p.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(hh,hc(t))}_fromTexture(t,e){t.mapping===Li||t.mapping===hs?this._setSize(t.image.length===0?hh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=dh(t,!1,!1),n=Math.log2(t)-Lm;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=dh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Li||t.mapping===hs?(this._cubemapMaterial===null&&(this._cubemapMaterial=mh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ph()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Fm(),this._integrationMaterial=Om());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/fh);for(let o=0;o<=n;o++){const a=Nr.lodToRoughness(o,n);if(o>n-Im)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(uh*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=zm());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function dh(i,t,e){return new Qa(i,{minFilter:En,generateMipmaps:t,type:fn,colorSpace:rr,depthBuffer:e})}function Ps(i,t,e){return new Xn({name:i,uniforms:t,vertexShader:$t.cube_vert,fragmentShader:e,side:Ze,blending:Ci,depthTest:!1,depthWrite:!1})}function Fm(){return Ps("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${uh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Om(){return Ps("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:fh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function zm(){return Ps("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Dm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ph(){return Ps("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function mh(){return Ps("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Bm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===To||f===Ao)if(t.has(u)){const m=t.get(u).texture;return a(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const v=new Qa(m.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const f=u.mapping,m=f===To||f===Ao,v=f===Li||f===hs;if(m||v){let p=e.get(u);const g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Nr(i)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const x=u.image;return m&&x&&x.height>0||v&&x&&l(x)?(n===null&&(n=new Nr(i)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===To?u.mapping=Li:f===Ao&&(u.mapping=hs),u}function l(u){let f=0;const m=6;for(let v=0;v<m;v++)u[v]!==void 0&&f++;return f===m}function c(u){const f=u.target;f.removeEventListener("dispose",c);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function km(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&lr("WebGLRenderer: "+n+" extension not supported."),s}}}function Gm(i,t,e,n){const s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(const p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);const v=r.get(m);v&&(t.remove(v),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),e.memory.geometries++),v}function h(m){const v=m.attributes;for(const p in v)t.update(v[p],i.ARRAY_BUFFER)}function d(m){const v=m.index,p=m.attributes.position;let g=0;if(p===void 0)return;const x=v!==null?v.array.length:p.array.length/3-1,M=p.count>=65535?Rc:Ac,y=new M(Math.ceil(x/3)*6,1),S=y.array;if(v!==null){const _=v.array;g=v.version;for(let b=0,R=0;b<x;b+=3){const A=_[b+0],L=_[b+1],P=_[b+2];S[R++]=A,S[R++]=L,S[R++]=L,S[R++]=P,S[R++]=P,S[R++]=A}}else{g=p.version;for(let _=0,b=0;_<x;_+=3){const R=_+0,A=_+1,L=_+2;S[b++]=R,S[b++]=A,S[b++]=A,S[b++]=L,S[b++]=L,S[b++]=R}}y.version=g;const E=r.get(m);E&&t.remove(E),r.set(m,y)}function u(m){const v=r.get(m);if(v){const p=m.index;p!==null&&v.version<p.version&&d(m)}else d(m);return r.get(m)}function f(){for(const m in s){const v=s[m].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Hm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let p=0;p<f;p++)v+=u[p];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Vm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:le("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Wm(i,t,e){const n=new WeakMap,s=new Me;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let R=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),m===!0&&(M=2),v===!0&&(M=3);let y=a.attributes.position.count*M,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const E=new Float32Array(y*S*4*d),_=new gc(E,y,S,d);_.type=un,_.needsUpdate=!0;const b=M*4;for(let A=0;A<d;A++){const L=p[A],P=g[A],N=x[A],T=y*S*4*A;for(let O=0;O<L.count;O++){const H=O*b;f===!0&&(s.fromBufferAttribute(L,O),E[T+H+0]=s.x,E[T+H+1]=s.y,E[T+H+2]=s.z,E[T+H+3]=0),m===!0&&(s.fromBufferAttribute(P,O),E[T+H+4]=s.x,E[T+H+5]=s.y,E[T+H+6]=s.z,E[T+H+7]=0),v===!0&&(s.fromBufferAttribute(N,O),E[T+H+8]=s.x,E[T+H+9]=s.y,E[T+H+10]=s.z,E[T+H+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new Bt(y,S)},n.set(a,u),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Xm(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const qm={[Vl]:"LINEAR_TONE_MAPPING",[Wl]:"REINHARD_TONE_MAPPING",[Xl]:"CINEON_TONE_MAPPING",[ql]:"ACES_FILMIC_TONE_MAPPING",[$l]:"AGX_TONE_MAPPING",[wo]:"NEUTRAL_TONE_MAPPING",[Yl]:"CUSTOM_TONE_MAPPING"};function Ym(i,t,e,n,s,r){const o=new Tn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new Ae;h.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new re([0,2,0,0,2,0],2));const d=new up({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Jt(h,d),f=new ih(-1,1,1,-1,0,1);let m=null,v=null,p=!1,g,x=null,M=[],y=!1;this.setSize=function(S,E){o.setSize(S,E),a!==null&&a.setSize(S,E),l!==null&&l.setSize(S,E);for(let _=0;_<M.length;_++){const b=M[_];b.setSize&&b.setSize(S,E)}},this.setEffects=function(S){M=S,y=M.length>0&&M[0].isRenderPass===!0;const E=o.width,_=o.height;M.length>0&&a===null&&(a=new Tn(E,_,{type:fn,depthBuffer:!1,stencilBuffer:!1}),l=new Tn(E,_,{type:fn,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&M.some(R=>R.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Yi(E,_),r===!0&&(c.format=ni,c.type=Di)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let R=0;R<M.length;R++){const A=M[R];A.setSize&&A.setSize(E,_),b&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(S,E){if(p||S.toneMapping===Un&&M.length===0)return!1;if(x=E,E!==null){const _=E.width,b=E.height;(o.width!==_||o.height!==b)&&this.setSize(_,b)}return y===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=Un,!0},this.hasRenderPass=function(){return y},this.end=function(S,E){S.toneMapping=g,p=!0;let _=o,b=a;for(let R=0;R<M.length;R++){const A=M[R];A.enabled!==!1&&(A.render(S,b,_,E),A.needsSwap!==!1&&(_=b,b=b===a?l:a))}if(m!==S.outputColorSpace||v!==S.toneMapping){m=S.outputColorSpace,v=S.toneMapping,d.defines={},ne.getTransfer(m)===de&&(d.defines.SRGB_TRANSFER="");const R=qm[v];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,S.setRenderTarget(x),S.render(u,f),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const gh=new De,xh=new Yi(1,1),_h=new Oc(1),vh=new gc,Mh=new yd,Sh=new Fc,yh=[],bh=[],Eh=new Float32Array(16),wh=new Float32Array(9),Th=new Float32Array(4);function ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=yh[s];if(r===void 0&&(r=new Float32Array(s),yh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ur(i,t){let e=bh[t];e===void 0&&(e=new Int32Array(t),bh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $m(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function Qm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Th.set(n),i.uniformMatrix2fv(this.addr,!1,Th),Ue(e,n)}}function jm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;wh.set(n),i.uniformMatrix3fv(this.addr,!1,wh),Ue(e,n)}}function tg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Eh.set(n),i.uniformMatrix4fv(this.addr,!1,Eh),Ue(e,n)}}function eg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function rg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Fr(i){return i.version===0&&(i.compareFunction=sc,i.needsUpdate=!0),i}function cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Fr(xh):r=gh,e.setTexture2D(t||r,s)}function hg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mh,s)}function ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Fr(_h):r=Sh,e.setTextureCube(t||r,s)}function fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vh,s)}function dg(i){switch(i){case 5126:return $m;case 35664:return Km;case 35665:return Zm;case 35666:return Jm;case 35674:return Qm;case 35675:return jm;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return og;case 36295:return ag;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return fg}}function pg(i,t){i.uniform1fv(this.addr,t)}function mg(i,t){const e=ji(t,this.size,2);i.uniform2fv(this.addr,e)}function gg(i,t){const e=ji(t,this.size,3);i.uniform3fv(this.addr,e)}function xg(i,t){const e=ji(t,this.size,4);i.uniform4fv(this.addr,e)}function _g(i,t){const e=ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function vg(i,t){const e=ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Mg(i,t){const e=ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Sg(i,t){i.uniform1iv(this.addr,t)}function yg(i,t){i.uniform2iv(this.addr,t)}function bg(i,t){i.uniform3iv(this.addr,t)}function Eg(i,t){i.uniform4iv(this.addr,t)}function wg(i,t){i.uniform1uiv(this.addr,t)}function Tg(i,t){i.uniform2uiv(this.addr,t)}function Ag(i,t){i.uniform3uiv(this.addr,t)}function Rg(i,t){i.uniform4uiv(this.addr,t)}function Cg(i,t,e){const n=this.cache,s=t.length,r=Ur(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Fr(xh):o=gh;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Pg(i,t,e){const n=this.cache,s=t.length,r=Ur(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Mh,r[o])}function Lg(i,t,e){const n=this.cache,s=t.length,r=Ur(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Fr(_h):o=Sh;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Dg(i,t,e){const n=this.cache,s=t.length,r=Ur(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vh,r[o])}function Ig(i){switch(i){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return xg;case 35674:return _g;case 35675:return vg;case 35676:return Mg;case 5124:case 35670:return Sg;case 35667:case 35671:return yg;case 35668:case 35672:return bg;case 35669:case 35673:return Eg;case 5125:return wg;case 36294:return Tg;case 36295:return Ag;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}class Ng{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dg(e.type)}}class Ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ig(e.type)}}class Fg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function Ah(i,t){i.seq.push(t),i.map[t.id]=t}function Og(i,t,e){const n=i.name,s=n.length;for(ja.lastIndex=0;;){const r=ja.exec(n),o=ja.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ah(e,c===void 0?new Ng(a,i,t):new Ug(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Fg(a),Ah(e,d)),e=d}}}class Or{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Og(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Rh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const zg=37297;let Bg=0;function kg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ch=new Vt;function Gg(i){ne._getMatrix(Ch,ne.workingColorSpace,i);const t=`mat3( ${Ch.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case or:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ph(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+kg(i.getShaderSource(t),a)}else return r}function Hg(i,t){const e=Gg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Vg={[Vl]:"Linear",[Wl]:"Reinhard",[Xl]:"Cineon",[ql]:"ACESFilmic",[$l]:"AgX",[wo]:"Neutral",[Yl]:"Custom"};function Wg(i,t){const e=Vg[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zr=new Q;function Xg(){ne.getLuminanceCoefficients(zr);const i=zr.x.toFixed(4),t=zr.y.toFixed(4),e=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function Yg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $g(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ls(i){return i!==""}function Lh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Dh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(i){return i.replace(Kg,Zg)}function Zg(i,t){const e=$t[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return tl(e)}const Jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ih(i){return i.replace(Jg,Qg)}function Qg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const jg={[os]:"SHADOWMAP_TYPE_PCF",[as]:"SHADOWMAP_TYPE_VSM"};function tx(i){return jg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ex={[hs]:"ENVMAP_MODE_REFRACTION"};function nx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ex[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ix={[Eo]:"ENVMAP_BLENDING_MULTIPLY",[kf]:"ENVMAP_BLENDING_MIX",[Gf]:"ENVMAP_BLENDING_ADD"};function sx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ix[i.combine]||"ENVMAP_BLENDING_NONE"}function rx(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=tx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=nx(e),d=sx(e),u=qg(e),f=Yg(r),m=s.createProgram();let v,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ls).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ls).join(`
`),p.length>0&&(p+=`
`)):(v=[Nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),p=[Nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?$t.tonemapping_pars_fragment:"",e.toneMapping!==Un?Wg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Hg("linearToOutputTexel",e.outputColorSpace),Xg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ls).join(`
`)),o=tl(o),o=Lh(o,e),o=Dh(o,e),a=tl(a),a=Lh(a,e),a=Dh(a,e),o=Ih(o),a=Ih(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=g+v+o,M=g+p+a,y=Rh(s,s.VERTEX_SHADER,x),S=Rh(s,s.FRAGMENT_SHADER,M);s.attachShader(m,y),s.attachShader(m,S),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function E(A){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(m)||"",P=s.getShaderInfoLog(y)||"",N=s.getShaderInfoLog(S)||"",T=L.trim(),O=P.trim(),H=N.trim();let k=!0,X=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,y,S);else{const V=Ph(s,y,"vertex"),z=Ph(s,S,"fragment");le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+T+`
`+V+`
`+z)}else T!==""?Ht("WebGLProgram: Program Info Log:",T):(O===""||H==="")&&(X=!1);X&&(A.diagnostics={runnable:k,programLog:T,vertexShader:{log:O,prefix:v},fragmentShader:{log:H,prefix:p}})}s.deleteShader(y),s.deleteShader(S),_=new Or(s,m),b=$g(s,m)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(m,zg)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=S,this}let ox=0;class ax{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new lx(t),e.set(t,n)),n}}class lx{constructor(t){this.id=ox++,this.code=t,this.usedTimes=0}}function cx(i){return i===ii||i===nr||i===ir}function hx(i,t,e,n,s,r){const o=new Sa,a=new ax,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,b,R,A,L,P){const N=A.fog,T=L.geometry,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,k=t.get(_.envMap||O,H),X=u[_.type];let V=n.precision;_.precision!==null&&(V=n.getMaxPrecision(_.precision),V!==_.precision&&Ht("WebGLProgram.getParameters:",_.precision,"not supported, using",V,"instead."));const z=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,G=z!==void 0?z.length:0;let W=0;T.morphAttributes.position!==void 0&&(W=1),T.morphAttributes.normal!==void 0&&(W=2),T.morphAttributes.color!==void 0&&(W=3);let ut,q,at,ct;if(X){const Et=Pn[X];ut=Et.vertexShader,q=Et.fragmentShader}else{ut=_.vertexShader,q=_.fragmentShader;const Et=a.getVertexShaderStage(_),pe=a.getFragmentShaderStage(_);a.update(_,Et,pe),at=Et.id,ct=pe.id}const mt=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),Ct=L.isInstancedMesh===!0,Kt=L.isBatchedMesh===!0,st=!!_.map,dt=!!_.matcap,At=!!k,Ft=At&&k.isPMREMTexture===!0,yt=!!_.aoMap,ie=!!_.lightMap,Re=!!_.bumpMap&&_.wireframe===!1,oe=!!_.normalMap,we=!!_.displacementMap,he=!!_.emissiveMap,ve=!!_.metalnessMap,Oe=!!_.roughnessMap,ue=_.anisotropy>0,K=_.clearcoat>0,Lt=_.diffuseRoughness>0,jt=_.dispersion>0,Yt=_.retroreflectivity>0,_t=_.iridescence>0,ye=_.sheen>0,Ot=_.transmission>0,kt=ue&&!!_.anisotropyMap,U=K&&!!_.clearcoatMap,w=K&&!!_.clearcoatNormalMap,tt=K&&!!_.clearcoatRoughnessMap,gt=Lt&&!!_.diffuseRoughnessMap,ht=_t&&!!_.iridescenceMap,vt=_t&&!!_.iridescenceThicknessMap,I=ye&&!!_.sheenColorMap,F=ye&&!!_.sheenRoughnessMap,B=!!_.specularMap,Z=!!_.specularColorMap,D=!!_.specularIntensityMap,j=Ot&&!!_.transmissionMap,J=Ot&&!!_.thicknessMap,ot=!!_.gradientMap,lt=!!_.alphaMap,ft=_.alphaTest>0,Tt=!!_.alphaHash,Wt=!!_.extensions;let xt=Un;_.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(xt=i.toneMapping);const zt=Ft?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Xt={shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:ut,fragmentShader:q,defines:_.defines,customVertexShaderID:at,customFragmentShaderID:ct,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:V,batching:Kt,batchingColor:Kt&&L._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&L.instanceColor!==null,instancingMorph:Ct&&L.morphTexture!==null,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:st,matcap:dt,envMap:At,envMapMode:At&&k.mapping,envMapPMREM:Ft,envMapMaxLod:Ft?zt.length-1:null,envMapSize:Ft?zt[0].width:null,aoMap:yt,lightMap:ie,bumpMap:Re,normalMap:oe,displacementMap:we,emissiveMap:he,normalMapObjectSpace:oe&&_.normalMapType===Wf,normalMapTangentSpace:oe&&_.normalMapType===sr,packedNormalMap:oe&&_.normalMapType===sr&&cx(_.normalMap.format),metalnessMap:ve,roughnessMap:Oe,anisotropy:ue,anisotropyMap:kt,clearcoat:K,clearcoatMap:U,clearcoatNormalMap:w,clearcoatRoughnessMap:tt,diffuseRoughness:Lt,diffuseRoughnessMap:gt,dispersion:jt,retroreflection:Yt,iridescence:_t,iridescenceMap:ht,iridescenceThicknessMap:vt,sheen:ye,sheenColorMap:I,sheenRoughnessMap:F,specularMap:B,specularColorMap:Z,specularIntensityMap:D,transmission:Ot,transmissionMap:j,thicknessMap:J,gradientMap:ot,opaque:_.transparent===!1&&_.blending===ls&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:ft,alphaHash:Tt,combine:_.combine,mapUv:st&&f(_.map.channel),aoMapUv:yt&&f(_.aoMap.channel),lightMapUv:ie&&f(_.lightMap.channel),bumpMapUv:Re&&f(_.bumpMap.channel),normalMapUv:oe&&f(_.normalMap.channel),displacementMapUv:we&&f(_.displacementMap.channel),emissiveMapUv:he&&f(_.emissiveMap.channel),metalnessMapUv:ve&&f(_.metalnessMap.channel),roughnessMapUv:Oe&&f(_.roughnessMap.channel),anisotropyMapUv:kt&&f(_.anisotropyMap.channel),clearcoatMapUv:U&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:gt&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ht&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:I&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:F&&f(_.sheenRoughnessMap.channel),specularMapUv:B&&f(_.specularMap.channel),specularColorMapUv:Z&&f(_.specularColorMap.channel),specularIntensityMapUv:D&&f(_.specularIntensityMap.channel),transmissionMapUv:j&&f(_.transmissionMap.channel),thicknessMapUv:J&&f(_.thicknessMap.channel),alphaMapUv:lt&&f(_.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(oe||ue),vertexNormals:!!T.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!T.attributes.uv&&(st||lt),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||T.attributes.normal===void 0&&oe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:T.attributes.position!==void 0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:W,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:P.filter(Et=>Et.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:st&&_.map.isVideoTexture===!0&&ne.getTransfer(_.map.colorSpace)===de,decodeVideoTextureEmissive:he&&_.emissiveMap.isVideoTexture===!0&&ne.getTransfer(_.emissiveMap.colorSpace)===de,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ee,flipSided:_.side===Ze,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Wt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&_.extensions.multiDraw===!0||Kt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function v(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)b.push(R),b.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(b,_),g(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function g(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function x(_){const b=u[_.type];let R;if(b){const A=Pn[b];R=lp.clone(A.uniforms)}else R=_.uniforms;return R}function M(_,b){let R=h.get(b);return R!==void 0?++R.usedTimes:(R=new rx(i,b,_,s),c.push(R),h.set(b,R)),R}function y(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:x,acquireProgram:M,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:E}}function ux(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function fx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Uh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,v,p,g){let x=i[t];return x===void 0?(x={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:g},i[t]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=m,x.materialVariant=o(u),x.groupOrder=v,x.renderOrder=u.renderOrder,x.z=p,x.group=g),t++,x}function l(u,f,m,v,p,g,x){x.reversedDepth===!0&&(p=-p);const M=a(u,f,m,v,p,g);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):e.push(M)}function c(u,f,m,v,p,g){const x=a(u,f,m,v,p,g);m.transmission>0?n.unshift(x):m.transparent===!0?s.unshift(x):e.unshift(x)}function h(u,f){e.length>1&&e.sort(u||fx),n.length>1&&n.sort(f||Uh),s.length>1&&s.sort(f||Uh)}function d(){for(let u=t,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function dx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Fh,i.set(n,[o])):s>=r.length?(o=new Fh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function px(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Q,color:new Rt};break;case"SpotLight":e={position:new Q,direction:new Q,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return i[t.id]=e,e}}}function mx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let gx=0;function xx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _x(i){const t=new px,e=mx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Q);const s=new Q,r=new Qt,o=new Qt;function a(c){let h=0,d=0,u=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,m=0,v=0,p=0,g=0,x=0,M=0,y=0,S=0,E=0,_=0,b=0,R=0,A=0;c.sort(xx);for(let P=0,N=c.length;P<N;P++){const T=c[P],O=T.color,H=T.intensity,k=T.distance;let X=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===ii?X=T.shadow.map.texture:X=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)h+=O.r*H,d+=O.g*H,u+=O.b*H;else if(T.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(T.sh.coefficients[V],H);A++}else if(T.isSunLight){const V=t.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const z=T.shadow,G=e.get(T);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[m]=G,n.sunShadowMap[m]=X;const W=z.getViewportCount();for(let ut=0;ut<W;ut++)n.sunShadowMatrix[v+ut]=z.getMatrix(ut),n.sunShadowCascade[v+ut]=z._cascadeData[ut];v+=W,m++}n.sun[f]=V,f++}else if(T.isDirectionalLight){const V=t.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const z=T.shadow,G=e.get(T);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=T.shadow.matrix,S++}n.directional[p]=V,p++}else if(T.isSpotLight){const V=t.get(T);V.position.setFromMatrixPosition(T.matrixWorld),V.color.copy(O).multiplyScalar(H),V.distance=k,V.coneCos=Math.cos(T.angle),V.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),V.decay=T.decay,n.spot[x]=V;const z=T.shadow;if(T.map&&(n.spotLightMap[b]=T.map,b++,z.updateMatrices(T),T.castShadow&&R++),n.spotLightMatrix[x]=z.matrix,T.castShadow){const G=e.get(T);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=X,_++}x++}else if(T.isRectAreaLight){const V=t.get(T);V.color.copy(O).multiplyScalar(H),V.halfWidth.set(T.width*.5,0,0),V.halfHeight.set(0,T.height*.5,0),n.rectArea[M]=V,M++}else if(T.isPointLight){const V=t.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),V.distance=T.distance,V.decay=T.decay,T.castShadow){const z=T.shadow,G=e.get(T);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,G.shadowCameraNear=z.camera.near,G.shadowCameraFar=z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=T.shadow.matrix,E++}n.point[g]=V,g++}else if(T.isHemisphereLight){const V=t.get(T);V.skyColor.copy(T.color).multiplyScalar(H),V.groundColor.copy(T.groundColor).multiplyScalar(H),n.hemi[y]=V,y++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const L=n.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==M||L.hemiLength!==y||L.numSunShadows!==m||L.numDirectionalShadows!==S||L.numPointShadows!==E||L.numSpotShadows!==_||L.numSpotMaps!==b||L.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=p,n.spot.length=x,n.rectArea.length=M,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-R,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,L.sunLength=f,L.directionalLength=p,L.pointLength=g,L.spotLength=x,L.rectAreaLength=M,L.hemiLength=y,L.numSunShadows=m,L.numDirectionalShadows=S,L.numPointShadows=E,L.numSpotShadows=_,L.numSpotMaps=b,L.numLightProbes=A,n.version=gx++)}function l(c,h){let d=0,u=0,f=0,m=0,v=0,p=0;const g=h.matrixWorldInverse;for(let x=0,M=c.length;x<M;x++){const y=c[x];if(y.isSunLight){const S=n.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),d++}else if(y.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),u++}else if(y.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),m++}else if(y.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const S=n.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function Oh(i){const t=new _x(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function vx(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Oh(i),t.set(s,[a])):r>=o.length?(a=new Oh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yx=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],bx=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],zh=new Qt,Ds=new Q,el=new Q;function Ex(i,t,e){let n=new ws;const s=new Bt,r=new Bt,o=new Me,a=new fp,l=new dp,c={},h=e.maxTextureSize,d={[ti]:Ze,[Ze]:ti,[Ee]:Ee},u=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:Mx,fragmentShader:Sx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ae;m.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Jt(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=os;let g=this.type;this.render=function(E,_,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Sf&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=os);const R=i.getRenderTarget(),A=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Ci),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const N=g!==this.type;N&&_.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(O=>O.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,O=E.length;T<O;T++){const H=E[T],k=H.shadow;if(k===void 0){Ht("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const X=k.getFrameExtents();s.multiply(X),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,k.mapSize.y=r.y));const V=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=V,k.map===null||N===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===as){if(H.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Tn(s.x,s.y,{format:ii,type:fn,minFilter:We,magFilter:We,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new Yi(s.x,s.y,un),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=ei,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ge,k.map.depthTexture.magFilter=Ge}else H.isPointLight?(k.map=new Qa(s.x),k.map.depthTexture=new Oc(s.x,wn)):(k.map=new Tn(s.x,s.y),k.map.depthTexture=new Yi(s.x,s.y,wn)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=ei,this.type===os?(k.map.depthTexture.compareFunction=V?ic:nc,k.map.depthTexture.minFilter=We,k.map.depthTexture.magFilter=We):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ge,k.map.depthTexture.magFilter=Ge);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);const z=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();H.isPointLight!==!0&&k.updateMatrices(H,b);const G=k.camera.layers.mask&4294967294?k.camera.layers:b.layers;for(let W=0;W<z;W++){const ut=k.getCamera(W);if(H.isPointLight){const q=k.camera,at=k.matrix,ct=H.distance||q.far;ct!==q.far&&(q.far=ct,q.updateProjectionMatrix()),Ds.setFromMatrixPosition(H.matrixWorld),q.position.copy(Ds),el.copy(q.position),el.add(yx[W]),q.up.copy(bx[W]),q.lookAt(el),q.updateMatrixWorld(),at.makeTranslation(-Ds.x,-Ds.y,-Ds.z),zh.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),k._frustum.setFromProjectionMatrix(zh,q.coordinateSystem,q.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,W),i.clear();else{W===0&&(i.setRenderTarget(k.map),i.clear());const q=k.getViewport(W);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),P.viewport(o)}n=k.getFrustum(W),y(_,b,ut,H,G,this.type)}k.isPointLightShadow!==!0&&this.type===as&&x(k,b),k.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(R,A,L)};function x(E,_){const b=t.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Tn(s.x,s.y,{format:ii,type:fn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,b,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,b,f,v,null)}function M(E,_,b,R){let A=null;const L=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)A=L;else if(A=b.isPointLight===!0?l:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const P=A.uuid,N=_.uuid;let T=c[P];T===void 0&&(T={},c[P]=T);let O=T[N];O===void 0&&(O=A.clone(),T[N]=O,_.addEventListener("dispose",S)),A=O}if(A.visible=_.visible,A.wireframe=_.wireframe,R===as?A.side=_.shadowSide!==null?_.shadowSide:_.side:A.side=_.shadowSide!==null?_.shadowSide:d[_.side],A.alphaMap=_.alphaMap,A.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,A.map=_.map,A.clipShadows=_.clipShadows,A.clippingPlanes=_.clippingPlanes,A.clipIntersection=_.clipIntersection,A.displacementMap=_.displacementMap,A.displacementScale=_.displacementScale,A.displacementBias=_.displacementBias,A.wireframeLinewidth=_.wireframeLinewidth,A.linewidth=_.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const P=i.properties.get(A);P.light=b}return A}function y(E,_,b,R,A,L){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===as)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const T=t.update(E),O=E.material;if(Array.isArray(O)){const H=T.groups;for(let k=0,X=H.length;k<X;k++){const V=H[k],z=O[V.materialIndex];if(z&&z.visible){const G=M(E,z,R,L);E.onBeforeShadow(i,E,_,b,T,G,V),i.renderBufferDirect(b,null,T,G,E,V),E.onAfterShadow(i,E,_,b,T,G,V)}}}else if(O.visible){const H=M(E,O,R,L);E.onBeforeShadow(i,E,_,b,T,H,null),i.renderBufferDirect(b,null,T,H,E,null),E.onAfterShadow(i,E,_,b,T,H,null)}}const N=E.children;for(let T=0,O=N.length;T<O;T++)y(N[T],_,b,R,A,L)}function S(E){E.target.removeEventListener("dispose",S);for(const b in c){const R=c[b],A=E.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function wx(i,t){function e(){let D=!1;const j=new Me;let J=null;const ot=new Me(0,0,0,0);return{setMask:function(lt){J!==lt&&!D&&(i.colorMask(lt,lt,lt,lt),J=lt)},setLocked:function(lt){D=lt},setClear:function(lt,ft,Tt,Wt,xt){xt===!0&&(lt*=Wt,ft*=Wt,Tt*=Wt),j.set(lt,ft,Tt,Wt),ot.equals(j)===!1&&(i.clearColor(lt,ft,Tt,Wt),ot.copy(j))},reset:function(){D=!1,J=null,ot.set(-1,0,0,0)}}}function n(){let D=!1,j=!1,J=null,ot=null,lt=null;return{setReversed:function(ft){if(j!==ft){const Tt=t.get("EXT_clip_control");ft?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),j=ft;const Wt=lt;lt=null,this.setClear(Wt)}},getReversed:function(){return j},setTest:function(ft){ft?pt(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(ft){J!==ft&&!D&&(i.depthMask(ft),J=ft)},setFunc:function(ft){if(j&&(ft=ed[ft]),ot!==ft){switch(ft){case xo:i.depthFunc(i.NEVER);break;case _o:i.depthFunc(i.ALWAYS);break;case vo:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case Mo:i.depthFunc(i.EQUAL);break;case So:i.depthFunc(i.GEQUAL);break;case yo:i.depthFunc(i.GREATER);break;case bo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=ft}},setLocked:function(ft){D=ft},setClear:function(ft){lt!==ft&&(lt=ft,j&&(ft=1-ft),i.clearDepth(ft))},reset:function(){D=!1,J=null,ot=null,lt=null,j=!1}}}function s(){let D=!1,j=null,J=null,ot=null,lt=null,ft=null,Tt=null,Wt=null,xt=null;return{setTest:function(zt){D||(zt?pt(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(zt){j!==zt&&!D&&(i.stencilMask(zt),j=zt)},setFunc:function(zt,Xt,Et){(J!==zt||ot!==Xt||lt!==Et)&&(i.stencilFunc(zt,Xt,Et),J=zt,ot=Xt,lt=Et)},setOp:function(zt,Xt,Et){(ft!==zt||Tt!==Xt||Wt!==Et)&&(i.stencilOp(zt,Xt,Et),ft=zt,Tt=Xt,Wt=Et)},setLocked:function(zt){D=zt},setClear:function(zt){xt!==zt&&(i.clearStencil(zt),xt=zt)},reset:function(){D=!1,j=null,J=null,ot=null,lt=null,ft=null,Tt=null,Wt=null,xt=null}}}const r=new e,o=new n,a=new s;let l={};const c=new WeakMap;let h={},d={},u={},f=new WeakMap,m=[],v=null,p=!1,g=null,x=null,M=null,y=null,S=null,E=null,_=null,b=new Rt(0,0,0),R=0,A=!1,L=null,P=null,N=null,T=null,O=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,X=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=X>=2);let z=null,G={};const W=i.getParameter(i.SCISSOR_BOX),ut=i.getParameter(i.VIEWPORT),q=new Me().fromArray(W),at=new Me().fromArray(ut);function ct(D,j,J,ot){const lt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(D,ft),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<J;Tt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(j+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ft}const mt={};mt[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(i.DEPTH_TEST),o.setFunc(cs),Re(!1),oe(zl),pt(i.CULL_FACE),yt(Ci);function pt(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ct(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Kt(D,j){return u[D]!==j?(i.bindFramebuffer(D,j),u[D]=j,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=j),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=j),!0):!1}function st(D,j){let J=m,ot=!1;if(D){J=f.get(j),J===void 0&&(J=[],f.set(j,J));const lt=D.textures;if(J.length!==lt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Tt=lt.length;ft<Tt;ft++)J[ft]=i.COLOR_ATTACHMENT0+ft;J.length=lt.length,ot=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ot=!0);ot&&i.drawBuffers(J)}function dt(D){return v!==D?(i.useProgram(D),v=D,!0):!1}const At={[Pi]:i.FUNC_ADD,[bf]:i.FUNC_SUBTRACT,[Ef]:i.FUNC_REVERSE_SUBTRACT};At[wf]=i.MIN,At[Tf]=i.MAX;const Ft={[Af]:i.ZERO,[Rf]:i.ONE,[Cf]:i.SRC_COLOR,[Gl]:i.SRC_ALPHA,[Uf]:i.SRC_ALPHA_SATURATE,[If]:i.DST_COLOR,[Lf]:i.DST_ALPHA,[Pf]:i.ONE_MINUS_SRC_COLOR,[Hl]:i.ONE_MINUS_SRC_ALPHA,[Nf]:i.ONE_MINUS_DST_COLOR,[Df]:i.ONE_MINUS_DST_ALPHA,[Ff]:i.CONSTANT_COLOR,[Of]:i.ONE_MINUS_CONSTANT_COLOR,[zf]:i.CONSTANT_ALPHA,[Bf]:i.ONE_MINUS_CONSTANT_ALPHA};function yt(D,j,J,ot,lt,ft,Tt,Wt,xt,zt){if(D===Ci){p===!0&&(Ct(i.BLEND),p=!1);return}if(p===!1&&(pt(i.BLEND),p=!0),D!==yf){if(D!==g||zt!==A){if((x!==Pi||S!==Pi)&&(i.blendEquation(i.FUNC_ADD),x=Pi,S=Pi),zt)switch(D){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case go:i.blendFunc(i.ONE,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:le("WebGLState: Invalid blending: ",D);break}else switch(D){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case go:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bl:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kl:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",D);break}M=null,y=null,E=null,_=null,b.set(0,0,0),R=0,g=D,A=zt}return}lt=lt||j,ft=ft||J,Tt=Tt||ot,(j!==x||lt!==S)&&(i.blendEquationSeparate(At[j],At[lt]),x=j,S=lt),(J!==M||ot!==y||ft!==E||Tt!==_)&&(i.blendFuncSeparate(Ft[J],Ft[ot],Ft[ft],Ft[Tt]),M=J,y=ot,E=ft,_=Tt),(Wt.equals(b)===!1||xt!==R)&&(i.blendColor(Wt.r,Wt.g,Wt.b,xt),b.copy(Wt),R=xt),g=D,A=!1}function ie(D,j){D.side===Ee?Ct(i.CULL_FACE):pt(i.CULL_FACE);let J=D.side===Ze;j&&(J=!J),Re(J),D.blending===ls&&D.transparent===!1?yt(Ci):yt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const ot=D.stencilWrite;a.setTest(ot),ot&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),he(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(D){L!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),L=D)}function oe(D){D!==vf?(pt(i.CULL_FACE),D!==P&&(D===zl?i.cullFace(i.BACK):D===Mf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),P=D}function we(D){D!==N&&(k&&i.lineWidth(D),N=D)}function he(D,j,J){D?(pt(i.POLYGON_OFFSET_FILL),(T!==j||O!==J)&&(T=j,O=J,o.getReversed()&&(j=-j,J=-J),i.polygonOffset(j,J))):Ct(i.POLYGON_OFFSET_FILL)}function ve(D){D?pt(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function Oe(D){D===void 0&&(D=i.TEXTURE0+H-1),z!==D&&(i.activeTexture(D),z=D)}function ue(D,j,J){J===void 0&&(z===null?J=i.TEXTURE0+H-1:J=z);let ot=G[J];ot===void 0&&(ot={type:void 0,texture:void 0},G[J]=ot),(ot.type!==D||ot.texture!==j)&&(z!==J&&(i.activeTexture(J),z=J),i.bindTexture(D,j||mt[D]),ot.type=D,ot.texture=j)}function K(){const D=G[z];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Lt(){try{i.compressedTexImage2D(...arguments)}catch(D){le("WebGLState:",D)}}function jt(){try{i.compressedTexImage3D(...arguments)}catch(D){le("WebGLState:",D)}}function Yt(){try{i.texSubImage2D(...arguments)}catch(D){le("WebGLState:",D)}}function _t(){try{i.texSubImage3D(...arguments)}catch(D){le("WebGLState:",D)}}function ye(){try{i.compressedTexSubImage2D(...arguments)}catch(D){le("WebGLState:",D)}}function Ot(){try{i.compressedTexSubImage3D(...arguments)}catch(D){le("WebGLState:",D)}}function kt(){try{i.texStorage2D(...arguments)}catch(D){le("WebGLState:",D)}}function U(){try{i.texStorage3D(...arguments)}catch(D){le("WebGLState:",D)}}function w(){try{i.texImage2D(...arguments)}catch(D){le("WebGLState:",D)}}function tt(){try{i.texImage3D(...arguments)}catch(D){le("WebGLState:",D)}}function gt(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function ht(D,j){d[D]!==j&&(i.pixelStorei(D,j),d[D]=j)}function vt(D){q.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),q.copy(D))}function I(D){at.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),at.copy(D))}function F(D,j){let J=c.get(j);J===void 0&&(J=new WeakMap,c.set(j,J));let ot=J.get(D);ot===void 0&&(ot=i.getUniformBlockIndex(j,D.name),i.uniformBlockBinding(j,ot,ot),J.set(D,ot))}function B(D,j,J){const lt=c.get(j).get(D);l[lt]!==J&&(i.bindBufferBase(i.UNIFORM_BUFFER,lt,J),l[lt]=J)}function Z(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},z=null,G={},u={},l={},f=new WeakMap,m=[],v=null,p=!1,g=null,x=null,M=null,y=null,S=null,E=null,_=null,b=new Rt(0,0,0),R=0,A=!1,L=null,P=null,N=null,T=null,O=null,q.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:Ct,bindFramebuffer:Kt,drawBuffers:st,useProgram:dt,setBlending:yt,setMaterial:ie,setFlipSided:Re,setCullFace:oe,setLineWidth:we,setPolygonOffset:he,setScissorTest:ve,activeTexture:Oe,bindTexture:ue,unbindTexture:K,compressedTexImage2D:Lt,compressedTexImage3D:jt,texImage2D:w,texImage3D:tt,pixelStorei:ht,getParameter:gt,updateUBOMapping:F,uniformBlockBinding:B,texStorage2D:kt,texStorage3D:U,texSubImage2D:Yt,texSubImage3D:_t,compressedTexSubImage2D:ye,compressedTexSubImage3D:Ot,scissor:vt,viewport:I,reset:Z}}function Tx(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap,d=new Set;let u;const f=new WeakMap,m=new Set,v=new FinalizationRegistry(U=>m.delete(U));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,w){return p?new OffscreenCanvas(U,w):ds("canvas")}function x(U,w,tt){let gt=1;const ht=kt(U);if((ht.width>tt||ht.height>tt)&&(gt=tt/Math.max(ht.width,ht.height)),gt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const vt=Math.floor(gt*ht.width),I=Math.floor(gt*ht.height);u===void 0&&(u=g(vt,I));const F=w?g(vt,I):u;return F.width=vt,F.height=I,F.getContext("2d").drawImage(U,0,0,vt,I),Ht("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+vt+"x"+I+")."),F}else return"data"in U&&Ht("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),U;return U}function M(U){return U.generateMipmaps}function y(U){i.generateMipmap(U)}function S(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(U,w,tt,gt,ht,vt=!1){if(U!==null){if(i[U]!==void 0)return i[U];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let I;gt&&(I=t.get("EXT_texture_norm16"),I||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let F=w;if(w===i.RED&&(tt===i.FLOAT&&(F=i.R32F),tt===i.HALF_FLOAT&&(F=i.R16F),tt===i.UNSIGNED_BYTE&&(F=i.R8),tt===i.UNSIGNED_SHORT&&I&&(F=I.R16_EXT),tt===i.SHORT&&I&&(F=I.R16_SNORM_EXT)),w===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(F=i.R8UI),tt===i.UNSIGNED_SHORT&&(F=i.R16UI),tt===i.UNSIGNED_INT&&(F=i.R32UI),tt===i.BYTE&&(F=i.R8I),tt===i.SHORT&&(F=i.R16I),tt===i.INT&&(F=i.R32I)),w===i.RG&&(tt===i.FLOAT&&(F=i.RG32F),tt===i.HALF_FLOAT&&(F=i.RG16F),tt===i.UNSIGNED_BYTE&&(F=i.RG8),tt===i.UNSIGNED_SHORT&&I&&(F=I.RG16_EXT),tt===i.SHORT&&I&&(F=I.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(F=i.RG8UI),tt===i.UNSIGNED_SHORT&&(F=i.RG16UI),tt===i.UNSIGNED_INT&&(F=i.RG32UI),tt===i.BYTE&&(F=i.RG8I),tt===i.SHORT&&(F=i.RG16I),tt===i.INT&&(F=i.RG32I)),w===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(F=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(F=i.RGB16UI),tt===i.UNSIGNED_INT&&(F=i.RGB32UI),tt===i.BYTE&&(F=i.RGB8I),tt===i.SHORT&&(F=i.RGB16I),tt===i.INT&&(F=i.RGB32I)),w===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(F=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(F=i.RGBA16UI),tt===i.UNSIGNED_INT&&(F=i.RGBA32UI),tt===i.BYTE&&(F=i.RGBA8I),tt===i.SHORT&&(F=i.RGBA16I),tt===i.INT&&(F=i.RGBA32I)),w===i.RGB&&(tt===i.UNSIGNED_SHORT&&I&&(F=I.RGB16_EXT),tt===i.SHORT&&I&&(F=I.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(F=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(F=i.R11F_G11F_B10F)),w===i.RGBA){const B=vt?or:ne.getTransfer(ht);tt===i.FLOAT&&(F=i.RGBA32F),tt===i.HALF_FLOAT&&(F=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(F=B===de?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&I&&(F=I.RGBA16_EXT),tt===i.SHORT&&I&&(F=I.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(F=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(F=i.RGB5_A1)}return(F===i.R16F||F===i.R32F||F===i.RG16F||F===i.RG32F||F===i.RGBA16F||F===i.RGBA32F)&&t.get("EXT_color_buffer_float"),F}function _(U,w){let tt;return U?w===null||w===wn||w===Di?tt=i.DEPTH24_STENCIL8:w===un?tt=i.DEPTH32F_STENCIL8:w===us&&(tt=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===wn||w===Di?tt=i.DEPTH_COMPONENT24:w===un?tt=i.DEPTH_COMPONENT32F:w===us&&(tt=i.DEPTH_COMPONENT16),tt}function b(U,w){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ge&&U.minFilter!==We?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function R(U){const w=new WeakRef(U);n.get(U).__ref=w,m.add(w),v.register(U,w,w)}function A(U){const w=n.get(U).__ref;w!==void 0&&(m.delete(w),v.unregister(w))}function L(U){N(U.target)}function P(U){T(U.target)}function N(U){U.removeEventListener("dispose",L),A(U),H(U),U.isVideoTexture&&h.delete(U),U.isHTMLTexture&&d.delete(U)}function T(U){U.removeEventListener("dispose",P),A(U),X(U)}function O(){for(const U of m){const w=U.deref();w!==void 0&&(w.isRenderTarget===!0?T(w):N(w))}m.clear(),d.clear()}function H(U){const w=n.get(U);if(w.__webglInit===void 0)return;const tt=U.source,gt=f.get(tt);if(gt){const ht=gt[w.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&k(U),Object.keys(gt).length===0&&f.delete(tt)}n.remove(U)}function k(U){const w=n.get(U);i.deleteTexture(w.__webglTexture);const tt=U.source,gt=f.get(tt);delete gt[w.__cacheKey],o.memory.textures--}function X(U){const w=n.get(U);w.__depthDisposeCallback&&w.__depthDisposeCallback();const tt=U.depthTexture;if(tt&&tt.renderTarget===U&&N(tt),U.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(w.__webglFramebuffer[ht]))for(let vt=0;vt<w.__webglFramebuffer[ht].length;vt++)i.deleteFramebuffer(w.__webglFramebuffer[ht][vt]);else i.deleteFramebuffer(w.__webglFramebuffer[ht]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ht])}else{if(Array.isArray(w.__webglFramebuffer))for(let ht=0;ht<w.__webglFramebuffer.length;ht++)i.deleteFramebuffer(w.__webglFramebuffer[ht]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ht=0;ht<w.__webglColorRenderbuffer.length;ht++)w.__webglColorRenderbuffer[ht]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ht]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const gt=U.textures;for(let ht=0,vt=gt.length;ht<vt;ht++){const I=n.get(gt[ht]);I.__webglTexture&&(i.deleteTexture(I.__webglTexture),o.memory.textures--),n.remove(gt[ht])}n.remove(U)}let V=0;function z(){V=0}function G(){return V}function W(U){V=U}function ut(){const U=V;return U>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,U}function q(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.mipmapsAutoUpdate),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function at(U,w){const tt=n.get(U);if(U.isVideoTexture&&ye(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&tt.__version!==U.version){const gt=U.image;if(gt===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(tt,U,w);return}}else U.isExternalTexture&&(tt.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+w)}function ct(U,w){const tt=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){ie(tt,U,w);return}else U.isExternalTexture&&(tt.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+w)}function mt(U,w){const tt=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){ie(tt,U,w);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+w)}function pt(U,w){const tt=n.get(U);if(U.version>0&&tt.__version!==U.version){Re(tt,U,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+w)}const Ct={[Zs]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[Ro]:i.MIRRORED_REPEAT},Kt={[Ge]:i.NEAREST,[Hf]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[Co]:i.LINEAR_MIPMAP_NEAREST,[En]:i.LINEAR_MIPMAP_LINEAR},st={[qf]:i.NEVER,[sc]:i.ALWAYS,[Yf]:i.LESS,[nc]:i.LEQUAL,[$f]:i.EQUAL,[ic]:i.GEQUAL,[Kf]:i.GREATER,[Zf]:i.NOTEQUAL};function dt(U,w){if(w.type===un&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===We||w.magFilter===Co||w.magFilter===Js||w.magFilter===En||w.minFilter===We||w.minFilter===Co||w.minFilter===Js||w.minFilter===En)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Ct[w.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Ct[w.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Ct[w.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Kt[w.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Kt[w.minFilter]),w.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,st[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ge||w.minFilter!==Js&&w.minFilter!==En||w.type===un&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function At(U,w){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",L),R(w));const gt=w.source;let ht=f.get(gt);ht===void 0&&(ht={},f.set(gt,ht));const vt=q(w);if(vt!==U.__cacheKey){ht[vt]===void 0&&(ht[vt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,tt=!0),ht[vt].usedTimes++;const I=ht[U.__cacheKey];I!==void 0&&(ht[U.__cacheKey].usedTimes--,I.usedTimes===0&&k(w)),U.__cacheKey=vt,U.__webglTexture=ht[vt].texture}return tt}function Ft(U,w,tt){return Math.floor(Math.floor(U/tt)/w)}function yt(U,w,tt,gt){const vt=U.updateRanges;if(vt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,tt,gt,w.data);else{vt.sort((D,j)=>D.start-j.start);let I=0;for(let D=1;D<vt.length;D++){const j=vt[I],J=vt[D],ot=j.start+j.count,lt=Ft(J.start,w.width,4),ft=Ft(j.start,w.width,4);J.start<=ot+1&&lt===ft&&Ft(J.start+J.count-1,w.width,4)===lt?j.count=Math.max(j.count,J.start+J.count-j.start):(++I,vt[I]=J)}vt.length=I+1;const F=e.getParameter(i.UNPACK_ROW_LENGTH),B=e.getParameter(i.UNPACK_SKIP_PIXELS),Z=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let D=0,j=vt.length;D<j;D++){const J=vt[D],ot=Math.floor(J.start/4),lt=Math.ceil(J.count/4),ft=ot%w.width,Tt=Math.floor(ot/w.width),Wt=lt,xt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,Tt),e.texSubImage2D(i.TEXTURE_2D,0,ft,Tt,Wt,xt,tt,gt,w.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,F),e.pixelStorei(i.UNPACK_SKIP_PIXELS,B),e.pixelStorei(i.UNPACK_SKIP_ROWS,Z)}}function ie(U,w,tt){let gt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(gt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(gt=i.TEXTURE_3D);const ht=At(U,w),vt=w.source;e.bindTexture(gt,U.__webglTexture,i.TEXTURE0+tt);const I=n.get(vt);if(vt.version!==I.__version||ht===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const xt=ne.getPrimaries(ne.workingColorSpace),zt=w.colorSpace===Fn?null:ne.getPrimaries(w.colorSpace),Xt=w.colorSpace===Fn||xt===zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let B=x(w.image,!1,s.maxTextureSize);B=Ot(w,B);const Z=r.convert(w.format,w.colorSpace),D=r.convert(w.type);let j=E(w.internalFormat,Z,D,w.normalized,w.colorSpace,w.isVideoTexture);dt(gt,w);let J;const ot=w.mipmaps,lt=w.isVideoTexture!==!0,ft=I.__version===void 0||ht===!0,Tt=vt.dataReady,Wt=b(w,B);if(w.isDepthTexture)j=_(w.format===ni,w.type),ft&&(lt?e.texStorage2D(i.TEXTURE_2D,1,j,B.width,B.height):e.texImage2D(i.TEXTURE_2D,0,j,B.width,B.height,0,Z,D,null));else if(w.isDataTexture)if(ot.length>0){lt&&ft&&e.texStorage2D(i.TEXTURE_2D,Wt,j,ot[0].width,ot[0].height);for(let xt=0,zt=ot.length;xt<zt;xt++)J=ot[xt],lt?Tt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,J.width,J.height,Z,D,J.data):e.texImage2D(i.TEXTURE_2D,xt,j,J.width,J.height,0,Z,D,J.data);w.generateMipmaps=!1}else lt?(ft&&e.texStorage2D(i.TEXTURE_2D,Wt,j,B.width,B.height),Tt&&yt(w,B,Z,D)):e.texImage2D(i.TEXTURE_2D,0,j,B.width,B.height,0,Z,D,B.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){lt&&ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,j,ot[0].width,ot[0].height,B.depth);for(let xt=0,zt=ot.length;xt<zt;xt++)if(J=ot[xt],w.format!==dn)if(Z!==null)if(lt){if(Tt)if(w.layerUpdates.size>0){const Xt=ah(J.width,J.height,w.format,w.type);for(const Et of w.layerUpdates){const pe=J.data.subarray(Et*Xt/J.data.BYTES_PER_ELEMENT,(Et+1)*Xt/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,Et,J.width,J.height,1,Z,pe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,J.width,J.height,B.depth,Z,J.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,j,J.width,J.height,B.depth,0,J.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?Tt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,J.width,J.height,B.depth,Z,D,J.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,j,J.width,J.height,B.depth,0,Z,D,J.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{lt&&ft&&e.texStorage2D(i.TEXTURE_2D,Wt,j,ot[0].width,ot[0].height);for(let xt=0,zt=ot.length;xt<zt;xt++)J=ot[xt],w.format!==dn?Z!==null?lt?Tt&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,J.width,J.height,Z,J.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,j,J.width,J.height,0,J.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?Tt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,J.width,J.height,Z,D,J.data):e.texImage2D(i.TEXTURE_2D,xt,j,J.width,J.height,0,Z,D,J.data)}else if(w.isDataArrayTexture)if(lt){if(ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,j,B.width,B.height,B.depth),Tt)if(w.layerUpdates.size>0){const xt=ah(B.width,B.height,w.format,w.type);for(const zt of w.layerUpdates){const Xt=B.data.subarray(zt*xt/B.data.BYTES_PER_ELEMENT,(zt+1)*xt/B.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,zt,B.width,B.height,1,Z,D,Xt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,Z,D,B.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,j,B.width,B.height,B.depth,0,Z,D,B.data);else if(w.isData3DTexture)lt?(ft&&e.texStorage3D(i.TEXTURE_3D,Wt,j,B.width,B.height,B.depth),Tt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,Z,D,B.data)):e.texImage3D(i.TEXTURE_3D,0,j,B.width,B.height,B.depth,0,Z,D,B.data);else if(w.isFramebufferTexture){if(ft)if(lt)e.texStorage2D(i.TEXTURE_2D,Wt,j,B.width,B.height);else{let xt=B.width,zt=B.height;for(let Xt=0;Xt<Wt;Xt++)e.texImage2D(i.TEXTURE_2D,Xt,j,xt,zt,0,Z,D,null),xt>>=1,zt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){const xt=i.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),B.parentNode!==xt){xt.appendChild(B),d.add(w),xt.onpaint=zt=>{const Xt=zt.changedElements;for(const Et of d)Xt.includes(Et.image)&&(Et.needsUpdate=!0)},xt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,B);else{const Xt=i.RGBA,Et=i.RGBA,pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Xt,Et,pe,B)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ot.length>0){if(lt&&ft){const xt=kt(ot[0]);e.texStorage2D(i.TEXTURE_2D,Wt,j,xt.width,xt.height)}for(let xt=0,zt=ot.length;xt<zt;xt++)J=ot[xt],lt?Tt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Z,D,J):e.texImage2D(i.TEXTURE_2D,xt,j,Z,D,J);w.generateMipmaps=!1}else if(lt){if(ft){const xt=kt(B);e.texStorage2D(i.TEXTURE_2D,Wt,j,xt.width,xt.height)}Tt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Z,D,B)}else e.texImage2D(i.TEXTURE_2D,0,j,Z,D,B);M(w)&&w.mipmapsAutoUpdate===!0&&y(gt),I.__version=vt.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Re(U,w,tt){if(w.image.length!==6)return;const gt=At(U,w),ht=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+tt);const vt=n.get(ht);if(ht.version!==vt.__version||gt===!0){e.activeTexture(i.TEXTURE0+tt);const I=ne.getPrimaries(ne.workingColorSpace),F=w.colorSpace===Fn?null:ne.getPrimaries(w.colorSpace),B=w.colorSpace===Fn||I===F?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);const Z=w.isCompressedTexture||w.image[0].isCompressedTexture,D=w.image[0]&&w.image[0].isDataTexture,j=[];for(let Et=0;Et<6;Et++)!Z&&!D?j[Et]=x(w.image[Et],!0,s.maxCubemapSize):j[Et]=D?w.image[Et].image:w.image[Et],j[Et]=Ot(w,j[Et]);const J=j[0],ot=r.convert(w.format,w.colorSpace),lt=r.convert(w.type);let ft=E(w.internalFormat,ot,lt,w.normalized,w.colorSpace);const Tt=w.isVideoTexture!==!0,Wt=vt.__version===void 0||gt===!0,xt=ht.dataReady;let zt=b(w,J);dt(i.TEXTURE_CUBE_MAP,w);let Xt;if(w.isDepthTexture){if(ft=_(w.format===ni,w.type),Wt)if(Tt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ft,J.width,J.height);else for(let Et=0;Et<6;Et++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ft,J.width,J.height,0,ot,lt,null)}else if(Z){Tt&&Wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,ft,J.width,J.height);for(let Et=0;Et<6;Et++){Xt=j[Et].mipmaps;for(let pe=0;pe<Xt.length;pe++){const Be=Xt[pe];w.format!==dn?ot!==null?Tt?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe,0,0,Be.width,Be.height,ot,Be.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe,ft,Be.width,Be.height,0,Be.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe,0,0,Be.width,Be.height,ot,lt,Be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe,ft,Be.width,Be.height,0,ot,lt,Be.data)}}}else{if(Xt=w.mipmaps,Tt&&Wt){Xt.length>0&&zt++;const Et=kt(j[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,ft,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(D){Tt?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,j[Et].width,j[Et].height,ot,lt,j[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ft,j[Et].width,j[Et].height,0,ot,lt,j[Et].data);for(let pe=0;pe<Xt.length;pe++){const di=Xt[pe].image[Et].image;Tt?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe+1,0,0,di.width,di.height,ot,lt,di.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe+1,ft,di.width,di.height,0,ot,lt,di.data)}}else{Tt?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,ot,lt,j[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ft,ot,lt,j[Et]);for(let pe=0;pe<Xt.length;pe++){const Be=Xt[pe];Tt?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe+1,0,0,ot,lt,Be.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe+1,ft,ot,lt,Be.image[Et])}}}M(w)&&w.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),vt.__version=ht.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function oe(U,w,tt,gt,ht,vt){const I=r.convert(tt.format,tt.colorSpace),F=r.convert(tt.type),B=E(tt.internalFormat,I,F,tt.normalized,tt.colorSpace),Z=n.get(w),D=n.get(tt);if(D.__renderTarget=w,!Z.__hasExternalTextures){const j=Math.max(1,w.width>>vt),J=Math.max(1,w.height>>vt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,vt,B,j,J,w.depth,0,I,F,null):e.texImage2D(ht,vt,B,j,J,0,I,F,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),_t(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,ht,D.__webglTexture,0,Yt(w)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,gt,ht,D.__webglTexture,vt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function we(U,w,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,U),w.depthBuffer){const gt=w.depthTexture,ht=gt&&gt.isDepthTexture?gt.type:null,vt=_(w.stencilBuffer,ht),I=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt(w),vt,w.width,w.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt(w),vt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,vt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,I,i.RENDERBUFFER,U)}else{const gt=w.textures;for(let ht=0;ht<gt.length;ht++){const vt=gt[ht],I=r.convert(vt.format,vt.colorSpace),F=r.convert(vt.type),B=E(vt.internalFormat,I,F,vt.normalized,vt.colorSpace);_t(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt(w),B,w.width,w.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt(w),B,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,B,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(U,w,tt){const gt=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ht=n.get(w.depthTexture);ht.__renderTarget=w;const vt=gt?w.depthTexture.image[0]:w.depthTexture.image;(!ht.__webglTexture||vt.width!==w.width||vt.height!==w.height)&&(vt.width=w.width,vt.height=w.height,w.depthTexture.needsUpdate=!0),gt?pt(w.depthTexture,0):at(w.depthTexture,0);const I=ht.__webglTexture,F=Yt(w),B=gt?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,Z=w.depthTexture.format===ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===ei)_t(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,B,I,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,Z,B,I,0);else if(w.depthTexture.format===ni)_t(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,B,I,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,Z,B,I,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ve(U){const w=n.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const gt=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),gt){const ht=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,gt.removeEventListener("dispose",ht)};gt.addEventListener("dispose",ht),w.__depthDisposeCallback=ht}w.__boundDepthTexture=gt}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(tt)for(let gt=0;gt<6;gt++)he(w.__webglFramebuffer[gt],U,gt);else U.texture.mipmaps.length>0?he(w.__webglFramebuffer[0],U,0):he(w.__webglFramebuffer,U,0);else if(tt){w.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[gt]),w.__webglDepthbuffer[gt]===void 0)w.__webglDepthbuffer[gt]=i.createRenderbuffer(),we(w.__webglDepthbuffer[gt],U,!1);else{const ht=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=w.__webglDepthbuffer[gt];i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,vt)}}else if(U.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),we(w.__webglDepthbuffer,U,!1);else{const ht=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,vt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(U,w,tt){const gt=n.get(U);w!==void 0&&oe(gt.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&ve(U)}function ue(U){const w=U.texture,tt=n.get(U),gt=n.get(w);U.addEventListener("dispose",P),R(U);const ht=U.textures,vt=U.isWebGLCubeRenderTarget===!0,I=ht.length>1;if(I||(gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture()),gt.__version=w.version,o.memory.textures++),vt){tt.__webglFramebuffer=[];for(let F=0;F<6;F++)if(w.mipmaps.length>0){tt.__webglFramebuffer[F]=[];for(let B=0;B<w.mipmaps.length;B++)tt.__webglFramebuffer[F][B]=i.createFramebuffer()}else tt.__webglFramebuffer[F]=i.createFramebuffer()}else{if(w.mipmaps.length>0){tt.__webglFramebuffer=[];for(let F=0;F<w.mipmaps.length;F++)tt.__webglFramebuffer[F]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(I)for(let F=0,B=ht.length;F<B;F++){const Z=n.get(ht[F]);Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&_t(U)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let F=0;F<ht.length;F++){const B=ht[F];tt.__webglColorRenderbuffer[F]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[F]);const Z=r.convert(B.format,B.colorSpace),D=r.convert(B.type),j=E(B.internalFormat,Z,D,B.normalized,B.colorSpace,U.isXRRenderTarget===!0),J=Yt(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,j,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,tt.__webglColorRenderbuffer[F])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),we(tt.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(vt){e.bindTexture(i.TEXTURE_CUBE_MAP,gt.__webglTexture),dt(i.TEXTURE_CUBE_MAP,w);for(let F=0;F<6;F++)if(w.mipmaps.length>0)for(let B=0;B<w.mipmaps.length;B++)oe(tt.__webglFramebuffer[F][B],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+F,B);else oe(tt.__webglFramebuffer[F],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);M(w)?y(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(I){for(let F=0,B=ht.length;F<B;F++){const Z=ht[F],D=n.get(Z);let j=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(j=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,D.__webglTexture),dt(j,Z),oe(tt.__webglFramebuffer,U,Z,i.COLOR_ATTACHMENT0+F,j,0),M(Z)&&y(j)}e.unbindTexture()}else{let F=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(F=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(F,gt.__webglTexture),dt(F,w),w.mipmaps.length>0)for(let B=0;B<w.mipmaps.length;B++)oe(tt.__webglFramebuffer[B],U,w,i.COLOR_ATTACHMENT0,F,B);else oe(tt.__webglFramebuffer,U,w,i.COLOR_ATTACHMENT0,F,0);M(w)?y(F):w.mipmaps.length>0&&i.texParameteri(F,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}U.depthBuffer&&ve(U)}function K(U){const w=U.textures;for(let tt=0,gt=w.length;tt<gt;tt++){const ht=w[tt];if(M(ht)&&ht.mipmapsAutoUpdate===!0){const vt=S(U),I=n.get(ht).__webglTexture;e.bindTexture(vt,I),y(vt),e.unbindTexture()}}}const Lt=[];function jt(U){if(U.samples>0){if(_t(U)===!1){const w=U.textures,tt=U.width,gt=U.height;let ht=i.COLOR_BUFFER_BIT;const vt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=n.get(U),F=w.length>1;if(F)for(let Z=0;Z<w.length;Z++)e.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,I.__webglMultisampledFramebuffer),U.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,I.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,I.__webglFramebuffer);for(let Z=0;Z<w.length;Z++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),F){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,I.__webglColorRenderbuffer[Z]);const D=n.get(w[Z]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,tt,gt,0,0,tt,gt,ht,i.NEAREST),l===!0&&(Lt.length=0,Lt.push(i.COLOR_ATTACHMENT0+Z),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&Lt.push(vt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),F)for(let Z=0;Z<w.length;Z++){e.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,I.__webglColorRenderbuffer[Z]);const D=n.get(w[Z]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,I.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){const w=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Yt(U){return Math.min(s.maxSamples,U.samples)}function _t(U){const w=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ye(U){const w=o.render.frame;h.get(U)!==w&&(h.set(U,w),U.update())}function Ot(U,w){const tt=U.colorSpace,gt=U.format,ht=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==rr&&tt!==Fn&&(ne.getTransfer(tt)===de?(gt!==dn||ht!==je)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",tt)),w}function kt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=ut,this.resetTextureUnits=z,this.getTextureUnits=G,this.setTextureUnits=W,this.setTexture2D=at,this.setTexture2DArray=ct,this.setTexture3D=mt,this.setTextureCube=pt,this.rebindTextures=Oe,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=_t,this.dispose=O}function Ax(i,t){function e(n,s=Fn){let r;const o=ne.getTransfer(s);if(n===je)return i.UNSIGNED_BYTE;if(n===Lo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Do)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zl)return i.BYTE;if(n===Jl)return i.SHORT;if(n===us)return i.UNSIGNED_SHORT;if(n===Po)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===tc)return i.ALPHA;if(n===ec)return i.RGB;if(n===dn)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===ni)return i.DEPTH_STENCIL;if(n===Io)return i.RED;if(n===No)return i.RED_INTEGER;if(n===ii)return i.RG;if(n===Uo)return i.RG_INTEGER;if(n===Fo)return i.RGBA_INTEGER;if(n===Qs||n===js||n===tr||n===er)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oo||n===zo||n===Bo||n===ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Go||n===Ho||n===Vo||n===Wo||n===Xo||n===nr||n===qo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Go||n===Ho)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wo)return r.COMPRESSED_R11_EAC;if(n===Xo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===nr)return r.COMPRESSED_RG11_EAC;if(n===qo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yo||n===$o||n===Ko||n===Zo||n===Jo||n===Qo||n===jo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ko)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ta)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ea)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===na)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ia)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ra)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===aa||n===la||n===ca)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===aa)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ca)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ha||n===ua||n===ir||n===fa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ir)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Rx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Px{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new zc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xn({vertexShader:Rx,fragmentShader:Cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lx extends si{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null;const v=typeof XRWebGLBinding<"u",p=new Px,g={},x=e.getContextAttributes();let M=null,y=null;const S=[],E=[],_=new Bt;let b=null,R=null;const A=new vn;A.viewport=new Me;const L=new vn;L.viewport=new Me;const P=[A,L],N=new Sp;let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let at=S[q];return at===void 0&&(at=new ba,S[q]=at),at.getTargetRaySpace()},this.getControllerGrip=function(q){let at=S[q];return at===void 0&&(at=new ba,S[q]=at),at.getGripSpace()},this.getHand=function(q){let at=S[q];return at===void 0&&(at=new ba,S[q]=at),at.getHandSpace()};function H(q){const at=E.indexOf(q.inputSource);if(at===-1)return;const ct=S[at];ct!==void 0&&(ct.update(q.inputSource,q.frame,c||o),ct.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",X);for(let q=0;q<S.length;q++){const at=E[q];at!==null&&(E[q]=null,S[q].disconnect(at))}T=null,O=null,p.reset();for(const q in g)delete g[q];if(t.setRenderTarget(M),f=null,u=null,d=null,s=null,y=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),R!==null){const q=R.camera;q.fov=R.fov,q.zoom=R.zoom,q.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",k),s.addEventListener("inputsourceschange",X),x.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,mt=null,pt=null;x.depth&&(pt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=x.stencil?ni:ei,mt=x.stencil?Di:wn);const Ct={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ct),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Tn(u.textureWidth,u.textureHeight,{format:dn,type:je,depthTexture:new Yi(u.textureWidth,u.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ct={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Tn(f.framebufferWidth,f.framebufferHeight,{format:dn,type:je,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function X(q){for(let at=0;at<q.removed.length;at++){const ct=q.removed[at],mt=E.indexOf(ct);mt>=0&&(E[mt]=null,S[mt].disconnect(ct))}for(let at=0;at<q.added.length;at++){const ct=q.added[at];let mt=E.indexOf(ct);if(mt===-1){for(let Ct=0;Ct<S.length;Ct++)if(Ct>=E.length){E.push(ct),mt=Ct;break}else if(E[Ct]===null){E[Ct]=ct,mt=Ct;break}if(mt===-1)break}const pt=S[mt];pt&&pt.connect(ct)}}function V(q,at){at===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(at.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let at=q.near,ct=q.far;p.texture!==null&&(p.depthNear>0&&(at=p.depthNear),p.depthFar>0&&(ct=p.depthFar)),N.near=L.near=A.near=at,N.far=L.far=A.far=ct,(T!==N.near||O!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),T=N.near,O=N.far),N.layers.mask=q.layers.mask|6,A.layers.mask=N.layers.mask&-5,L.layers.mask=N.layers.mask&-3;const mt=q.parent,pt=N.cameras;V(N,mt);for(let Ct=0;Ct<pt.length;Ct++)V(pt[Ct],mt);N.projectionMatrix.copy(A.projectionMatrix),N.projectionMatrixInverse.copy(A.projectionMatrixInverse),R===null&&q.isPerspectiveCamera&&(R={camera:q,fov:q.fov,zoom:q.zoom}),z(q,N,mt)};function z(q,at,ct){ct===null?q.matrix.copy(at.matrixWorld):(q.matrix.copy(ct.matrixWorld),q.matrix.invert(),q.matrix.multiply(at.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(at.projectionMatrix),q.projectionMatrixInverse.copy(at.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ms*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(q){return g[q]};let G=null;function W(q,at){if(h=at.getViewerPose(c||o),m=at,h!==null){const ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let mt=!1;ct.length!==N.cameras.length&&(N.cameras.length=0,mt=!0);for(let st=0;st<ct.length;st++){const dt=ct[st];let At=null;if(f!==null)At=f.getViewport(dt);else{const yt=d.getViewSubImage(u,dt);At=yt.viewport,st===0&&(t.setRenderTargetTextures(y,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(y))}let Ft=P[st];Ft===void 0&&(Ft=new vn,Ft.layers.enable(st),Ft.viewport=new Me,P[st]=Ft),Ft.matrix.fromArray(dt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(dt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(At.x,At.y,At.width,At.height),st===0&&(N.matrix.copy(Ft.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),mt===!0&&N.cameras.push(Ft)}const pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const st=d.getDepthInformation(ct[0]);st&&st.isValid&&st.texture&&p.init(st,s.renderState)}if(pt&&pt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let st=0;st<ct.length;st++){const dt=ct[st].camera;if(dt){let At=g[dt];At||(At=new zc,g[dt]=At);const Ft=d.getCameraImage(dt);At.sourceTexture=Ft}}}}for(let ct=0;ct<S.length;ct++){const mt=E[ct],pt=S[ct];mt!==null&&pt!==void 0&&pt.update(mt,at,c||o)}G&&G(q,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),m=null}const ut=new lh;ut.setAnimationLoop(W),this.setAnimationLoop=function(q){G=q},this.dispose=function(){}}}const Dx=new Qt,Bh=new Vt;Bh.set(-1,0,0,0,1,0,0,0,1);function Ix(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Yc(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,x,M,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),v(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,x,M):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ze&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ze&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const x=t.get(g),M=x.envMap,y=x.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Bh),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,x,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=M*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,x){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ze&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const x=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Nx(i,t,e,n){let s={},r={};function o(x,M){const y=M.program;n.uniformBlockBinding(x,y,s[x.id])}function a(x,M){let y=s[x.id];y===void 0&&(m(x),y=l(x),s[x.id]=y,x.addEventListener("dispose",p));const S=M.program;n.updateUBOMapping(x,S);const E=t.render.frame;r[x.id]!==E&&(c(x),r[x.id]=E)}function l(x){const M=i.createBuffer(),y=x.__size,S=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,y,S),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(x){const M=s[x.id],y=x.uniforms,S=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,_=y.length;E<_;E++){const b=y[E];if(Array.isArray(b))for(let R=0,A=b.length;R<A;R++)h(b[R],E,R,S);else h(b,E,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,M,y,S){if(u(x,M,y,S)===!0){const E=x.__offset,_=x.value;if(Array.isArray(_)){let b=0;for(let R=0;R<_.length;R++){const A=_[R],L=v(A,!0);d(A,x.__data,b),b+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,x.__data)}}function d(x,M,y){typeof x=="number"||typeof x=="boolean"?M[y]=x:x.isMatrix3?(M[y]=x.elements[0],M[y+1]=x.elements[1],M[y+2]=x.elements[2],M[y+3]=0,M[y+4]=x.elements[3],M[y+5]=x.elements[4],M[y+6]=x.elements[5],M[y+7]=0,M[y+8]=x.elements[6],M[y+9]=x.elements[7],M[y+10]=x.elements[8],M[y+11]=0):ArrayBuffer.isView(x)?M.set(x.subarray(0,M.length-y),y):x.toArray(M,y)}function u(x,M,y,S){const E=x.value,_=M+"_"+y;if(Array.isArray(E)){S[_]===void 0&&(S[_]=[]);const b=S[_];let R=!1;for(let A=0;A<E.length;A++)f(E[A],b,A)===!0&&(R=!0);return R}return f(E,S,_)}function f(x,M,y){if(M[y]===void 0)return typeof x=="number"||typeof x=="boolean"?M[y]=x:ArrayBuffer.isView(x)?M[y]=x.slice():M[y]=x.clone(),!0;{const S=M[y];if(typeof x=="number"||typeof x=="boolean"){if(S!==x)return M[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(S.equals(x)===!1)return S.copy(x),!0}}return!1}function m(x){const M=x.uniforms;let y=0;const S=16;for(let _=0,b=M.length;_<b;_++){const R=Array.isArray(M[_])?M[_]:[M[_]];for(let A=0,L=R.length;A<L;A++){const P=R[A],N=Array.isArray(P.value)?P.value:[P.value],T=Array.isArray(M[_])||Array.isArray(P.value);let O=y;for(let k=0,X=N.length;k<X;k++){const V=N[k],z=v(V,T),G=y%S,W=G%z.boundary,ut=G+W;y+=W,ut!==0&&S-ut<z.storage&&(y+=S-ut),k===0&&(O=y),y+=z.storage}const H=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new H((y-O)/Float32Array.BYTES_PER_ELEMENT),P.__offset=O}}const E=y%S;return E>0&&(y+=S-E),x.__size=y,x.__cache={},this}function v(x,M){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=16,y.storage=48):x.isMatrix4?(y.boundary=16,y.storage=64):x.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",x),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(x){const M=x.target;M.removeEventListener("dispose",p),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(const x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:o,update:a,dispose:g}}const Ux=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ln=null;function Fx(){return Ln===null&&(Ln=new ys(Ux,16,16,ii,fn),Ln.name="DFG_LUT",Ln.minFilter=We,Ln.magFilter=We,Ln.wrapS=hn,Ln.wrapT=hn,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}class Ox{constructor(t={}){const{canvas:e=jf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=je}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const v=f,p=new Set([Fo,Uo,No]),g=new Set([je,wn,us,Di,Lo,Do]),x=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let S=null,E=null;const _=[],b=[];let R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1,P=null,N=null,T=null,O=null;this._outputColorSpace=Te;let H=0,k=0,X=null,V=-1,z=null;const G=new Me,W=new Me;let ut=null;const q=new Rt(0);let at=0,ct=e.width,mt=e.height,pt=1,Ct=null,Kt=null;const st=new Me(0,0,ct,mt),dt=new Me(0,0,ct,mt);let At=!1;const Ft=new ws,yt=new Ba;let ie=!1,Re=!1;const oe=new Qt,we=new Q,he=new Me,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function ue(){return X===null?pt:1}let K=n;function Lt(C,Y){return e.getContext(C,Y)}let jt,Yt,_t,ye,Ot,kt,U,w,tt,gt,ht,vt,I,F,B,Z,D,j,J,ot,lt,ft,Tt;try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mo}`),e.addEventListener("webglcontextlost",zt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),K===null){const Y="webgl2";if(K=Lt(Y,C),K===null)throw Lt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(C){throw e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),le("WebGLRenderer: "+C.message),C}function Wt(){jt=new km(K),jt.init(),lt=new Ax(K,jt),Yt=new Cm(K,jt,t,lt),_t=new wx(K,jt),Yt.reversedDepthBuffer&&u&&_t.buffers.depth.setReversed(!0),N=K.createFramebuffer(),T=K.createFramebuffer(),O=K.createFramebuffer(),ye=new Vm(K),Ot=new ux,kt=new Tx(K,jt,_t,Ot,Yt,lt,ye),U=new Bm(A),w=new wp(K),ft=new Am(K,w),tt=new Gm(K,w,ye,ft),gt=new Xm(K,tt,w,ft,ye),j=new Wm(K,Yt,kt),B=new Pm(Ot),ht=new hx(A,U,jt,Yt,ft,B),vt=new Ix(A,Ot),I=new dx,F=new vx(jt),D=new Tm(A,U,_t,gt,m,l),Z=new Ex(A,gt,Yt),Tt=new Nx(K,ye,Yt,_t),J=new Rm(K,jt,ye),ot=new Hm(K,jt,ye),ye.programs=ht.programs,A.capabilities=Yt,A.extensions=jt,A.properties=Ot,A.renderLists=I,A.shadowMap=Z,A.state=_t,A.info=ye}v!==je&&(R=new Ym(v,e.width,e.height,a,s,r));const xt=new Lx(A,K);this.xr=xt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const C=jt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=jt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(C){C!==void 0&&(pt=C,this.setSize(ct,mt,!1))},this.getSize=function(C){return C.set(ct,mt)},this.setSize=function(C,Y,rt=!0){if(xt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}ct=C,mt=Y,e.width=Math.floor(C*pt),e.height=Math.floor(Y*pt),rt===!0&&(e.style.width=C+"px",e.style.height=Y+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(ct*pt,mt*pt).floor()},this.setDrawingBufferSize=function(C,Y,rt){ct=C,mt=Y,pt=rt,e.width=Math.floor(C*rt),e.height=Math.floor(Y*rt),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(v===je){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(st)},this.setViewport=function(C,Y,rt,et){C.isVector4?st.set(C.x,C.y,C.z,C.w):st.set(C,Y,rt,et),_t.viewport(G.copy(st).multiplyScalar(ue()).round())},this.getScissor=function(C){return C.copy(dt)},this.setScissor=function(C,Y,rt,et){C.isVector4?dt.set(C.x,C.y,C.z,C.w):dt.set(C,Y,rt,et),_t.scissor(W.copy(dt).multiplyScalar(ue()).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(C){_t.setScissorTest(At=C)},this.setOpaqueSort=function(C){Ct=C},this.setTransparentSort=function(C){Kt=C},this.getClearColor=function(C){return C.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,rt=!0){let et=0;if(C){let it=!1;if(X!==null){const St=X.texture.format;it=p.has(St)}if(it){const St=X.texture.type,Pt=g.has(St),Mt=D.getClearColor(),wt=D.getClearAlpha(),Ut=Mt.r,qt=Mt.g,te=Mt.b;Pt?(x[0]=Ut,x[1]=qt,x[2]=te,x[3]=wt,K.clearBufferuiv(K.COLOR,0,x)):(M[0]=Ut,M[1]=qt,M[2]=te,M[3]=wt,K.clearBufferiv(K.COLOR,0,M))}else et|=K.COLOR_BUFFER_BIT}Y&&(et|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(et|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&K.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),P=C},this.dispose=function(){e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),D.dispose(),I.dispose(),F.dispose(),kt.dispose(),Ot.dispose(),U.dispose(),gt.dispose(),tt.dispose(),ft.dispose(),Tt.dispose(),ht.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",lf),xt.removeEventListener("sessionend",cf),wi.stop()};function zt(C){C.preventDefault(),ac("WebGLRenderer: Context Lost."),L=!0}function Xt(){ac("WebGLRenderer: Context Restored."),L=!1;const C=ye.autoReset,Y=Z.enabled,rt=Z.autoUpdate,et=Z.needsUpdate,it=Z.type;Wt(),ye.autoReset=C,Z.enabled=Y,Z.autoUpdate=rt,Z.needsUpdate=et,Z.type=it}function Et(C){le("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function pe(C){const Y=C.target;Y.removeEventListener("dispose",pe),Be(Y)}function Be(C){di(C),Ot.remove(C)}function di(C){const Y=Ot.get(C).programs;Y!==void 0&&(Y.forEach(function(rt){ht.releaseProgram(rt)}),C.isShaderMaterial&&ht.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,rt,et,it,St){Y===null&&(Y=ve);const Pt=it.isMesh&&it.matrixWorld.determinantAffine()<0,Mt=_1(C,Y,rt,et,it);_t.setMaterial(et,Pt);let wt=rt.index,Ut=1;if(et.wireframe===!0){if(wt=tt.getWireframeAttribute(rt),wt===void 0)return;Ut=2}const qt=rt.drawRange,te=rt.attributes.position;let Dt=qt.start*Ut,ee=(qt.start+qt.count)*Ut;St!==null&&(Dt=Math.max(Dt,St.start*Ut),ee=Math.min(ee,(St.start+St.count)*Ut)),wt!==null?(Dt=Math.max(Dt,0),ee=Math.min(ee,wt.count)):te!=null&&(Dt=Math.max(Dt,0),ee=Math.min(ee,te.count));const Le=ee-Dt;if(Le<0||Le===1/0)return;ft.setup(it,et,Mt,rt,wt);let xe,me=J;if(wt!==null&&(xe=w.get(wt),me=ot,me.setIndex(xe)),it.isMesh)et.wireframe===!0?(_t.setLineWidth(et.wireframeLinewidth*ue()),me.setMode(K.LINES)):me.setMode(K.TRIANGLES);else if(it.isLine){let $e=et.linewidth;$e===void 0&&($e=1),_t.setLineWidth($e*ue()),it.isLineSegments?me.setMode(K.LINES):it.isLineLoop?me.setMode(K.LINE_LOOP):me.setMode(K.LINE_STRIP)}else it.isPoints?me.setMode(K.POINTS):it.isSprite&&me.setMode(K.TRIANGLES);if(it.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))me.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const $e=it._multiDrawStarts,It=it._multiDrawCounts,Qe=it._multiDrawCount,fe=wt?w.get(wt).bytesPerElement:1,Ti=Ot.get(et).currentProgram.getUniforms();for(let Ke=0;Ke<Qe;Ke++)Ti.setValue(K,"_gl_DrawID",Ke),me.render($e[Ke]/fe,It[Ke])}else if(it.isInstancedMesh)me.renderInstances(Dt,Le,it.count);else if(rt.isInstancedBufferGeometry){const $e=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,It=Math.min(rt.instanceCount,$e);me.renderInstances(Dt,Le,It)}else me.render(Dt,Le)};function af(C,Y,rt,et){P!==null&&C.isNodeMaterial&&P.setObject(et,C),ie===!0&&B.setState(C,rt,!1),C.transparent===!0&&C.side===Ee&&C.forceSinglePass===!1?(C.side=Ze,C.needsUpdate=!0,Ks(C,Y,et),C.side=ti,C.needsUpdate=!0,Ks(C,Y,et),C.side=Ee):Ks(C,Y,et)}this.compile=function(C,Y,rt=null){rt===null&&(rt=C),P!==null&&P.renderStart(C,Y,rt),E=F.get(rt),E.init(Y),b.push(E),rt.traverseVisible(function(it){it.isLight&&it.layers.test(Y.layers)&&(E.pushLight(it),it.castShadow&&E.pushShadow(it))}),C!==rt&&C.traverseVisible(function(it){it.isLight&&it.layers.test(Y.layers)&&(E.pushLight(it),it.castShadow&&E.pushShadow(it))}),E.setupLights(),P!==null&&P.updateLights(E.state.lightsArray),Re=this.localClippingEnabled,ie=B.init(this.clippingPlanes,Re),ie===!0&&B.setGlobalState(this.clippingPlanes,Y),P!==null&&Z.render(E.state.shadowsArray,rt,Y);const et=new Set;return C.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const St=it.material;if(St)if(Array.isArray(St))for(let Pt=0;Pt<St.length;Pt++){const Mt=St[Pt];af(Mt,rt,Y,it),et.add(Mt)}else af(St,rt,Y,it),et.add(St)}),E=b.pop(),P!==null&&P.renderEnd(),et},this.compileAsync=function(C,Y,rt=null){const et=this.compile(C,Y,rt);return new Promise(it=>{function St(){if(et.forEach(function(Pt){const wt=Ot.get(Pt).currentProgram;(wt===void 0||wt.isReady())&&et.delete(Pt)}),et.size===0){it(C);return}setTimeout(St,10)}jt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Fl=null;function g1(C){Fl&&Fl(C)}function lf(){wi.stop()}function cf(){wi.start()}const wi=new lh;wi.setAnimationLoop(g1),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(C){Fl=C,xt.setAnimationLoop(C),C===null?wi.stop():wi.start()},xt.addEventListener("sessionstart",lf),xt.addEventListener("sessionend",cf),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;P!==null&&P.renderStart(C,Y);const rt=xt.enabled===!0&&xt.isPresenting===!0,et=R!==null&&(X===null||rt)&&R.begin(A,X);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(Y),Y=xt.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,Y,X),E=F.get(C,b.length),E.init(Y),E.state.textureUnits=kt.getTextureUnits(),b.push(E),oe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Y.isArrayCamera?yt.setFromArrayCamera(Y):Ft.setFromProjectionMatrix(oe,pn,Y.reversedDepth),Re=this.localClippingEnabled,ie=B.init(this.clippingPlanes,Re),S=I.get(C,_.length),S.init(),_.push(S),this.info.render.frame++,xt.enabled===!0&&xt.isPresenting===!0){const Pt=A.xr.getDepthSensingMesh();Pt!==null&&Ol(Pt,Y,-1/0,A.sortObjects)}Ol(C,Y,0,A.sortObjects),S.finish(),P!==null&&P.updateLights(E.state.lightsArray),A.sortObjects===!0&&S.sort(Ct,Kt),Oe=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,Oe&&D.addToRenderList(S,C),this.info.autoReset===!0&&this.info.reset(),ie===!0&&B.beginShadows();const it=E.state.shadowsArray;if(Z.render(it,C,Y),ie===!0&&B.endShadows(),(et&&R.hasRenderPass())===!1){const Pt=S.opaque,Mt=S.transmissive;if(E.setupLights(),Y.isArrayCamera){const wt=Y.cameras;if(Mt.length>0)for(let Ut=0,qt=wt.length;Ut<qt;Ut++){const te=wt[Ut];uf(Pt,Mt,C,te)}Oe&&D.render(C);for(let Ut=0,qt=wt.length;Ut<qt;Ut++){const te=wt[Ut];hf(S,C,te,te.viewport)}}else Mt.length>0&&uf(Pt,Mt,C,Y),Oe&&D.render(C),hf(S,C,Y)}X!==null&&k===0&&(kt.updateMultisampleRenderTarget(X),kt.updateRenderTargetMipmap(X)),et&&R.end(A),C.isScene===!0&&C.onAfterRender(A,C,Y),ft.resetDefaultState(),V=-1,z=null,b.pop(),b.length>0?(E=b[b.length-1],kt.setTextureUnits(E.state.textureUnits),ie===!0&&B.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?S=_[_.length-1]:S=null,P!==null&&P.renderEnd()};function Ol(C,Y,rt,et){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)rt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){const Pt=Y.isArrayCamera?yt:Ft;if(!C.frustumCulled||C.intersectsFrustum(Pt)){et&&he.setFromMatrixPosition(C.matrixWorld).applyMatrix4(oe);const Mt=gt.update(C),wt=C.material;wt.visible&&S.push(C,Mt,wt,rt,he.z,null,Y)}}else if(C.isMesh||C.isLine||C.isPoints){const Pt=Y.isArrayCamera?yt:Ft;if(!C.frustumCulled||C.intersectsFrustum(Pt)){const Mt=gt.update(C),wt=C.material;if(et&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),he.copy(C.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),he.copy(Mt.boundingSphere.center)),he.applyMatrix4(C.matrixWorld).applyMatrix4(oe)),Array.isArray(wt)){const Ut=Mt.groups;for(let qt=0,te=Ut.length;qt<te;qt++){const Dt=Ut[qt],ee=wt[Dt.materialIndex];ee&&ee.visible&&S.push(C,Mt,ee,rt,he.z,Dt,Y)}}else wt.visible&&S.push(C,Mt,wt,rt,he.z,null,Y)}}}const St=C.children;for(let Pt=0,Mt=St.length;Pt<Mt;Pt++)Ol(St[Pt],Y,rt,et)}function hf(C,Y,rt,et){const{opaque:it,transmissive:St,transparent:Pt}=C;E.setupLightsView(rt),ie===!0&&B.setGlobalState(A.clippingPlanes,rt),et&&_t.viewport(G.copy(et)),it.length>0&&fo(it,Y,rt),St.length>0&&fo(St,Y,rt),Pt.length>0&&fo(Pt,Y,rt),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function uf(C,Y,rt,et){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[et.id]===void 0){const Dt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[et.id]=new Tn(1,1,{generateMipmaps:!0,type:Dt?fn:je,minFilter:En,samples:Math.max(4,Yt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}const St=E.state.transmissionRenderTarget[et.id],Pt=et.viewport||G;St.setSize(Pt.z*A.transmissionResolutionScale,Pt.w*A.transmissionResolutionScale);const Mt=A.getRenderTarget(),wt=A.getActiveCubeFace(),Ut=A.getActiveMipmapLevel();A.setRenderTarget(St),A.getClearColor(q),at=A.getClearAlpha(),at<1&&A.setClearColor(16777215,.5),A.clear(),Oe&&D.render(rt);const qt=A.toneMapping;A.toneMapping=Un;const te=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),E.setupLightsView(et),ie===!0&&B.setGlobalState(A.clippingPlanes,et),fo(C,rt,et),kt.updateMultisampleRenderTarget(St),kt.updateRenderTargetMipmap(St),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let ee=0,Le=Y.length;ee<Le;ee++){const xe=Y[ee],{object:me,geometry:$e,material:It,group:Qe}=xe;if(It.side===Ee&&me.layers.test(et.layers)){const fe=It.side;It.side=Ze,It.needsUpdate=!0,ff(me,rt,et,$e,It,Qe),It.side=fe,It.needsUpdate=!0,Dt=!0}}Dt===!0&&(kt.updateMultisampleRenderTarget(St),kt.updateRenderTargetMipmap(St))}A.setRenderTarget(Mt,wt,Ut),A.setClearColor(q,at),te!==void 0&&(et.viewport=te),A.toneMapping=qt}function fo(C,Y,rt){const et=Y.isScene===!0?Y.overrideMaterial:null;for(let it=0,St=C.length;it<St;it++){const Pt=C[it],{object:Mt,geometry:wt,group:Ut}=Pt;let qt=Pt.material;qt.allowOverride===!0&&et!==null&&(qt=et),Mt.layers.test(rt.layers)&&ff(Mt,Y,rt,wt,qt,Ut)}}function ff(C,Y,rt,et,it,St){P!==null&&it.isNodeMaterial&&P.setObject(C,it),C.onBeforeRender(A,Y,rt,et,it,St),C.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),it.onBeforeRender(A,Y,rt,et,C,St),it.transparent===!0&&it.side===Ee&&it.forceSinglePass===!1?(it.side=Ze,it.needsUpdate=!0,A.renderBufferDirect(rt,Y,et,it,C,St),it.side=ti,it.needsUpdate=!0,A.renderBufferDirect(rt,Y,et,it,C,St),it.side=Ee):A.renderBufferDirect(rt,Y,et,it,C,St),C.onAfterRender(A,Y,rt,et,it,St)}function df(C){let Y=0;for(const rt of C)rt.texture!==null&&Y++;return Y}function Ks(C,Y,rt){Y.isScene!==!0&&(Y=ve);const et=Ot.get(C),it=E.state.lights,St=E.state.shadowsArray,Pt=it.state.version,Mt=ht.getParameters(C,it.state,St,Y,rt,E.state.lightProbeGridArray),wt=ht.getProgramCacheKey(Mt);let Ut=et.programs;et.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Y.environment:null,et.fog=Y.fog;const qt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;et.envMap=U.get(C.envMap||et.environment,qt),et.envMapRotation=et.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,Ut===void 0&&(C.addEventListener("dispose",pe),Ut=new Map,et.programs=Ut,et.programVariants=new Map);let te=Ut.get(wt);if(te!==void 0){if(et.currentProgram===te&&et.lightsStateVersion===Pt)return mf(C,Mt),te}else Mt.uniforms=ht.getUniforms(C),P!==null&&C.isNodeMaterial&&P.build(C,rt,Mt),C.onBeforeCompile(Mt,A),te=ht.acquireProgram(Mt,wt),Ut.set(wt,te),et.uniforms=Mt.uniforms;const Dt=et.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Dt.clippingPlanes=B.uniform),mf(C,Mt),et.needsLights=M1(C),et.lightsStateVersion=Pt,et.needsLights&&(Dt.ambientLightColor.value=it.state.ambient,Dt.lightProbe.value=it.state.probe,Dt.sunLights.value=it.state.sun,Dt.sunLightShadows.value=it.state.sunShadow,Dt.directionalLights.value=it.state.directional,Dt.directionalLightShadows.value=it.state.directionalShadow,Dt.spotLights.value=it.state.spot,Dt.spotLightShadows.value=it.state.spotShadow,Dt.rectAreaLights.value=it.state.rectArea,Dt.ltc_1.value=it.state.rectAreaLTC1,Dt.ltc_2.value=it.state.rectAreaLTC2,Dt.pointLights.value=it.state.point,Dt.pointLightShadows.value=it.state.pointShadow,Dt.hemisphereLights.value=it.state.hemi,Dt.sunShadowMatrix.value=it.state.sunShadowMatrix,Dt.sunShadowCascade.value=it.state.sunShadowCascade,Dt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Dt.spotLightMatrix.value=it.state.spotLightMatrix,Dt.spotLightMap.value=it.state.spotLightMap,Dt.pointShadowMatrix.value=it.state.pointShadowMatrix),et.numLightProbeGrids=df(E.state.lightProbeGridArray),et.currentProgram=te,et.uniformsList=null,te}function x1(C,Y,rt,et,it){const St=Ot.get(C),Pt=St.currentProgram.id+","+et+","+it;let Mt=St.programVariants.get(Pt);return Mt===void 0?(Mt=Ks(C,Y,rt),St.programVariants.set(Pt,Mt)):(St.currentProgram=Mt,St.uniformsList=null,St.outputColorSpace=et,St.toneMapping=it),Mt}function pf(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Or.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function mf(C,Y){const rt=Ot.get(C);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function _1(C,Y,rt,et,it){Y.isScene!==!0&&(Y=ve),kt.resetTextureUnits();const St=Y.fog,Pt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?Y.environment:null,Mt=X===null?A.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ne.workingColorSpace,wt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Ut=U.get(et.envMap||Pt,wt),qt=et.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,te=!!rt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Dt=!!rt.morphAttributes.position,ee=!!rt.morphAttributes.normal,Le=!!rt.morphAttributes.color;let xe=Un;et.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(xe=A.toneMapping);const me=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,$e=me!==void 0?me.length:0,It=Ot.get(et),Qe=E.state.lights;if(ie===!0&&(Re===!0||C!==z)){const be=C===z&&et.id===V;B.setState(et,C,be)}let fe=!1,Ti=!1;et.version===It.__version?It.needsLights&&It.lightsStateVersion!==Qe.state.version||it.isBatchedMesh&&It.batching===!1||!it.isBatchedMesh&&It.batching===!0||it.isBatchedMesh&&It.batchingColor===!0&&it._colorsTexture===null||it.isBatchedMesh&&It.batchingColor===!1&&it._colorsTexture!==null||it.isInstancedMesh&&It.instancing===!1||!it.isInstancedMesh&&It.instancing===!0||it.isSkinnedMesh&&It.skinning===!1||!it.isSkinnedMesh&&It.skinning===!0||it.isInstancedMesh&&It.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&It.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&It.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&It.instancingMorph===!1&&it.morphTexture!==null||It.envMap!==Ut||et.fog===!0&&It.fog!==St||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==B.numPlanes||It.numIntersection!==B.numIntersection)||It.vertexAlphas!==qt||It.vertexTangents!==te||It.morphTargets!==Dt||It.morphNormals!==ee||It.morphColors!==Le||It.morphTargetsCount!==$e||It.numLightProbeGrids!==df(E.state.lightProbeGridArray)?fe=!0:(It.outputColorSpace!==Mt||It.toneMapping!==xe)&&(Ti=!0):(fe=!0,It.__version=et.version);let Ke=It.currentProgram;(fe===!0||Ti===!0)&&(Ke=Ti===!0?x1(et,Y,it,Mt,xe):Ks(et,Y,it),P&&et.isNodeMaterial&&P.onUpdateProgram(et,Ke,It));let po=!1,pi=!1,Ai=!1;const ae=Ke.getUniforms(),Ve=It.uniforms;if(_t.useProgram(Ke.program)&&(po=!0,pi=!0,Ai=!0),et.id!==V&&(V=et.id,pi=!0),po||z!==C){_t.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ae.setValue(K,"projectionMatrix",C.projectionMatrix),ae.setValue(K,"viewMatrix",C.matrixWorldInverse);const ke=ae.map.cameraPosition;ke!==void 0&&ke.setValue(K,we.setFromMatrixPosition(C.matrixWorld)),Yt.logarithmicDepthBuffer&&ae.setValue(K,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&ae.setValue(K,"isOrthographic",C.isOrthographicCamera===!0),z!==C&&(z=C,pi=!0,Ai=!0)}if(It.needsLights&&(Qe.state.sunShadowMap.length>0&&ae.setValue(K,"sunShadowMap",Qe.state.sunShadowMap,kt),Qe.state.directionalShadowMap.length>0&&ae.setValue(K,"directionalShadowMap",Qe.state.directionalShadowMap,kt),Qe.state.spotShadowMap.length>0&&ae.setValue(K,"spotShadowMap",Qe.state.spotShadowMap,kt),Qe.state.pointShadowMap.length>0&&ae.setValue(K,"pointShadowMap",Qe.state.pointShadowMap,kt)),it.isSkinnedMesh){ae.setOptional(K,it,"bindMatrix"),ae.setOptional(K,it,"bindMatrixInverse");const be=it.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ae.setValue(K,"boneTexture",be.boneTexture,kt))}it.isBatchedMesh&&(ae.setOptional(K,it,"batchingTexture"),ae.setValue(K,"batchingTexture",it._matricesTexture,kt),ae.setOptional(K,it,"batchingIdTexture"),ae.setValue(K,"batchingIdTexture",it._indirectTexture,kt),ae.setOptional(K,it,"batchingColorTexture"),it._colorsTexture!==null&&ae.setValue(K,"batchingColorTexture",it._colorsTexture,kt));const yn=rt.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&j.update(it,rt,Ke),(pi||It.receiveShadow!==it.receiveShadow)&&(It.receiveShadow=it.receiveShadow,ae.setValue(K,"receiveShadow",it.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&Y.environment!==null&&(Ve.envMapIntensity.value=Y.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=Fx()),pi){if(ae.setValue(K,"toneMappingExposure",A.toneMappingExposure),It.needsLights&&v1(Ve,Ai),St&&et.fog===!0&&vt.refreshFogUniforms(Ve,St),vt.refreshMaterialUniforms(Ve,et,pt,mt,E.state.transmissionRenderTarget[C.id]),It.needsLights&&It.numLightProbeGrids>0){const be=y;let ke=0;for(const Qn of E.state.lightProbeGridArray)Qn.texture!==null&&(be.textures[ke]=Qn.texture,be.min[ke]=Qn.boundingBox.min,be.max[ke]=Qn.boundingBox.max,be.resolution[ke]=Qn.resolution,ke++);for(const Qn in be)be[Qn].length=ke;Ve.probesSH.value=be.textures,Ve.probesMin.value=be.min,Ve.probesMax.value=be.max,Ve.probesResolution.value=be.resolution}Or.upload(K,pf(It),Ve,kt)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Or.upload(K,pf(It),Ve,kt),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&ae.setValue(K,"center",it.center),ae.setValue(K,"modelViewMatrix",it.modelViewMatrix),ae.setValue(K,"normalMatrix",it.normalMatrix),ae.setValue(K,"modelMatrix",it.matrixWorld),et.uniformsGroups!==void 0){const be=et.uniformsGroups;for(let ke=0,Qn=be.length;ke<Qn;ke++){const xf=be[ke];Tt.update(xf,Ke),Tt.bind(xf,Ke)}}return Ke}function v1(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.sunLights.needsUpdate=Y,C.sunLightShadows.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function M1(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(C,Y,rt){const et=Ot.get(C);et.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),Ot.get(C.texture).__webglTexture=Y,Ot.get(C.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:rt,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const rt=Ot.get(C);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,rt=0){X=C,H=Y,k=rt;let et=null,it=!1,St=!1;if(C){const Mt=Ot.get(C);if(Mt.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(K.FRAMEBUFFER,Mt.__webglFramebuffer),G.copy(C.viewport),W.copy(C.scissor),ut=C.scissorTest,_t.viewport(G),_t.scissor(W),_t.setScissorTest(ut),V=-1;return}else if(Mt.__webglFramebuffer===void 0)kt.setupRenderTarget(C);else if(Mt.__hasExternalTextures)kt.rebindTextures(C,Ot.get(C.texture).__webglTexture,Ot.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const qt=C.depthTexture;if(Mt.__boundDepthTexture!==qt){if(qt!==null&&Ot.has(qt)&&(C.width!==qt.image.width||C.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(C)}}const wt=C.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(St=!0);const Ut=Ot.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ut[Y])?et=Ut[Y][rt]:et=Ut[Y],it=!0):C.samples>0&&kt.useMultisampledRTT(C)===!1?et=Ot.get(C).__webglMultisampledFramebuffer:Array.isArray(Ut)?et=Ut[rt]:et=Ut,G.copy(C.viewport),W.copy(C.scissor),ut=C.scissorTest}else G.copy(st).multiplyScalar(pt).floor(),W.copy(dt).multiplyScalar(pt).floor(),ut=At;if(rt!==0&&(et=N),_t.bindFramebuffer(K.FRAMEBUFFER,et)&&_t.drawBuffers(C,et),_t.viewport(G),_t.scissor(W),_t.setScissorTest(ut),it){const Mt=Ot.get(C.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Mt.__webglTexture,rt)}else if(St){const Mt=Y;for(let wt=0;wt<C.textures.length;wt++){const Ut=Ot.get(C.textures[wt]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+wt,Ut.__webglTexture,rt,Mt)}}else if(C!==null&&rt!==0){const Mt=Ot.get(C.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Mt.__webglTexture,rt)}V=-1};function gf(C){const Y=Ot.get(C);return(Y.__readFormat!==C.format||Y.__readType!==C.type)&&(Y.__readFormat=C.format,Y.__readType=C.type,Y.__formatReadable=Yt.textureFormatReadable(C.format),Y.__typeReadable=Yt.textureTypeReadable(C.type)),Y}this.readRenderTargetPixels=function(C,Y,rt,et,it,St,Pt,Mt=0){if(!(C&&C.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ot.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt],Array.isArray(wt)&&(wt=wt[0])),wt){_t.bindFramebuffer(K.FRAMEBUFFER,wt);try{const Ut=C.textures[Mt],qt=Ut.format,te=Ut.type;C.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Mt);const Dt=gf(Ut);if(Dt.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-et&&rt>=0&&rt<=C.height-it&&K.readPixels(Y,rt,et,it,lt.convert(qt),lt.convert(te),St)}finally{const Ut=X!==null?Ot.get(X).__webglFramebuffer:null;_t.bindFramebuffer(K.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(C,Y,rt,et,it,St,Pt,Mt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ot.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt],Array.isArray(wt)&&(wt=wt[0])),wt)if(Y>=0&&Y<=C.width-et&&rt>=0&&rt<=C.height-it){_t.bindFramebuffer(K.FRAMEBUFFER,wt);const Ut=C.textures[Mt],qt=Ut.format,te=Ut.type;C.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Mt);const Dt=gf(Ut);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,ee),K.bufferData(K.PIXEL_PACK_BUFFER,St.byteLength,K.STREAM_READ),K.readPixels(Y,rt,et,it,lt.convert(qt),lt.convert(te),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const Le=X!==null?Ot.get(X).__webglFramebuffer:null;_t.bindFramebuffer(K.FRAMEBUFFER,Le);const xe=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await td(K,xe,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,ee),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,St),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(ee),K.deleteSync(xe),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,rt=0){const et=Math.pow(2,-rt),it=Math.floor(C.image.width*et),St=Math.floor(C.image.height*et),Pt=Y!==null?Y.x:0,Mt=Y!==null?Y.y:0;kt.setTexture2D(C,0),K.copyTexSubImage2D(K.TEXTURE_2D,rt,0,0,Pt,Mt,it,St),_t.unbindTexture()},this.copyTextureToTexture=function(C,Y,rt=null,et=null,it=0,St=0){let Pt,Mt,wt,Ut,qt,te,Dt,ee,Le;const xe=C.isCompressedTexture?C.mipmaps[St]:C.image;if(rt!==null)Pt=rt.max.x-rt.min.x,Mt=rt.max.y-rt.min.y,wt=rt.isBox3?rt.max.z-rt.min.z:1,Ut=rt.min.x,qt=rt.min.y,te=rt.isBox3?rt.min.z:0;else{const ae=Math.pow(2,-it);Pt=Math.floor(xe.width*ae),Mt=Math.floor(xe.height*ae),C.isDataArrayTexture?wt=xe.depth:C.isData3DTexture?wt=Math.floor(xe.depth*ae):wt=1,Ut=0,qt=0,te=0}et!==null?(Dt=et.x,ee=et.y,Le=et.z):(Dt=0,ee=0,Le=0);const me=lt.convert(Y.format),$e=lt.convert(Y.type);let It;Y.isData3DTexture?(kt.setTexture3D(Y,0),It=K.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(kt.setTexture2DArray(Y,0),It=K.TEXTURE_2D_ARRAY):(kt.setTexture2D(Y,0),It=K.TEXTURE_2D),_t.activeTexture(K.TEXTURE0),_t.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Y.flipY),_t.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),_t.pixelStorei(K.UNPACK_ALIGNMENT,Y.unpackAlignment);const Qe=_t.getParameter(K.UNPACK_ROW_LENGTH),fe=_t.getParameter(K.UNPACK_IMAGE_HEIGHT),Ti=_t.getParameter(K.UNPACK_SKIP_PIXELS),Ke=_t.getParameter(K.UNPACK_SKIP_ROWS),po=_t.getParameter(K.UNPACK_SKIP_IMAGES);_t.pixelStorei(K.UNPACK_ROW_LENGTH,xe.width),_t.pixelStorei(K.UNPACK_IMAGE_HEIGHT,xe.height),_t.pixelStorei(K.UNPACK_SKIP_PIXELS,Ut),_t.pixelStorei(K.UNPACK_SKIP_ROWS,qt),_t.pixelStorei(K.UNPACK_SKIP_IMAGES,te);const pi=C.isDataArrayTexture||C.isData3DTexture,Ai=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const ae=Ot.get(C),Ve=Ot.get(Y),yn=Ot.get(ae.__renderTarget),be=Ot.get(Ve.__renderTarget);_t.bindFramebuffer(K.READ_FRAMEBUFFER,yn.__webglFramebuffer),_t.bindFramebuffer(K.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ke=0;ke<wt;ke++)pi&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ot.get(C).__webglTexture,it,te+ke),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ot.get(Y).__webglTexture,St,Le+ke)),K.blitFramebuffer(Ut,qt,Ut+Pt,qt+Mt,Dt,ee,Dt+Pt,ee+Mt,K.DEPTH_BUFFER_BIT,K.NEAREST);_t.bindFramebuffer(K.READ_FRAMEBUFFER,null),_t.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(it!==0||C.isRenderTargetTexture||Ot.has(C)){const ae=Ot.get(C),Ve=Ot.get(Y);_t.bindFramebuffer(K.READ_FRAMEBUFFER,T),_t.bindFramebuffer(K.DRAW_FRAMEBUFFER,O);for(let yn=0;yn<wt;yn++)pi?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ae.__webglTexture,it,te+yn):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ae.__webglTexture,it),Ai?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ve.__webglTexture,St,Le+yn):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Ve.__webglTexture,St),it!==0?K.blitFramebuffer(Ut,qt,Ut+Pt,qt+Mt,Dt,ee,Dt+Pt,ee+Mt,K.COLOR_BUFFER_BIT,K.NEAREST):Ai?K.copyTexSubImage3D(It,St,Dt,ee,Le+yn,Ut,qt,Pt,Mt):K.copyTexSubImage2D(It,St,Dt,ee,Ut,qt,Pt,Mt);_t.bindFramebuffer(K.READ_FRAMEBUFFER,null),_t.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Ai?C.isDataTexture||C.isData3DTexture?K.texSubImage3D(It,St,Dt,ee,Le,Pt,Mt,wt,me,$e,xe.data):Y.isCompressedArrayTexture?K.compressedTexSubImage3D(It,St,Dt,ee,Le,Pt,Mt,wt,me,xe.data):K.texSubImage3D(It,St,Dt,ee,Le,Pt,Mt,wt,me,$e,xe):C.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,St,Dt,ee,Pt,Mt,me,$e,xe.data):C.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,St,Dt,ee,xe.width,xe.height,me,xe.data):K.texSubImage2D(K.TEXTURE_2D,St,Dt,ee,Pt,Mt,me,$e,xe);_t.pixelStorei(K.UNPACK_ROW_LENGTH,Qe),_t.pixelStorei(K.UNPACK_IMAGE_HEIGHT,fe),_t.pixelStorei(K.UNPACK_SKIP_PIXELS,Ti),_t.pixelStorei(K.UNPACK_SKIP_ROWS,Ke),_t.pixelStorei(K.UNPACK_SKIP_IMAGES,po),St===0&&Y.generateMipmaps===!0&&Y.mipmapsAutoUpdate===!0&&K.generateMipmap(It),_t.unbindTexture()},this.initRenderTarget=function(C){Ot.get(C).__webglFramebuffer===void 0&&kt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?kt.setTextureCube(C,0):C.isData3DTexture?kt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?kt.setTexture2DArray(C,0):kt.setTexture2D(C,0),_t.unbindTexture()},this.resetState=function(){H=0,k=0,X=null,_t.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}const Br=new Rt;function $(i){return Br.set(i),[Br.r,Br.g,Br.b]}function Nt(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function ts(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function Dn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class se{constructor(){nt(this,"pos",[]);nt(this,"nor",[]);nt(this,"col",[]);nt(this,"glo",[]);nt(this,"ox",0);nt(this,"oy",0);nt(this,"oz",0);nt(this,"c",1);nt(this,"s",0)}get vertexCount(){return this.pos.length/3}frame(t=0,e=0,n=0,s=0){return this.ox=t,this.oy=e,this.oz=n,this.c=Math.cos(s),this.s=Math.sin(s),this}wx(t,e){return this.ox+t*this.c+e*this.s}wz(t,e){return this.oz-t*this.s+e*this.c}tri(t,e,n,s,r,o,a,l,c,h,d=0){const u=this.wx(t,n),f=this.wz(t,n),m=this.oy+e,v=this.wx(s,o),p=this.wz(s,o),g=this.oy+r,x=this.wx(a,c),M=this.wz(a,c),y=this.oy+l,S=v-u,E=g-m,_=p-f,b=x-u,R=y-m,A=M-f;let L=E*A-_*R,P=_*b-S*A,N=S*R-E*b;const T=Math.hypot(L,P,N)||1;L/=T,P/=T,N/=T,this.pos.push(u,m,f,v,g,p,x,y,M),this.nor.push(L,P,N,L,P,N,L,P,N),this.col.push(h[0],h[1],h[2],h[0],h[1],h[2],h[0],h[1],h[2]),this.glo.push(d,d,d)}quad(t,e,n,s,r,o,a,l,c,h,d,u,f,m=0){this.tri(t,e,n,s,r,o,a,l,c,f,m),this.tri(t,e,n,a,l,c,h,d,u,f,m)}box(t,e,n,s,r,o,a,l=void 0,c=null,h=0){this.quad(t,e,o,s,e,o,s,r,o,t,r,o,a,h),this.quad(s,e,n,t,e,n,t,r,n,s,r,n,a,h),this.quad(s,e,o,s,e,n,s,r,n,s,r,o,a,h),this.quad(t,e,n,t,e,o,t,r,o,t,r,n,a,h),l!==null&&this.quad(t,r,o,s,r,o,s,r,n,t,r,n,l??a,h),c&&this.quad(t,e,n,s,e,n,s,e,o,t,e,o,c,h)}cyl(t,e,n,s,r,o,a,l,c=null,h=0){const d=e+o;for(let u=0;u<a;u++){const f=u/a*Math.PI*2,m=(u+1)/a*Math.PI*2,v=Math.cos(f),p=Math.sin(f),g=Math.cos(m),x=Math.sin(m);r>1e-4?(this.quad(t+v*s,e,n+p*s,t+v*r,d,n+p*r,t+g*r,d,n+x*r,t+g*s,e,n+x*s,l,h),c&&this.tri(t,d,n,t+g*r,d,n+x*r,t+v*r,d,n+p*r,c,h)):this.tri(t+v*s,e,n+p*s,t,d,n,t+g*s,e,n+x*s,l,h)}}blob(t,e,n,s,r,o,a,l,c,h,d=0){const u=h??c;for(let f=0;f<l;f++){const m=f/l*Math.PI,v=(f+1)/l*Math.PI,p=Math.cos(m),g=Math.cos(v),x=Math.sin(m),M=Math.sin(v),y=ts(c,u,1-(f+.5)/l);for(let S=0;S<a;S++){const E=S/a*Math.PI*2,_=(S+1)/a*Math.PI*2,b=Math.cos(E),R=Math.sin(E),A=Math.cos(_),L=Math.sin(_),P=t+b*x*s,N=e+p*r,T=n+R*x*o,O=t+A*x*s,H=n+L*x*o,k=t+b*M*s,X=e+g*r,V=n+R*M*o,z=t+A*M*s,G=n+L*M*o;f>0&&this.tri(P,N,T,O,N,H,z,X,G,y,d),f<l-1&&this.tri(P,N,T,z,X,G,k,X,V,y,d)}}}walls(t,e,n,s,r=0){const o=t.length/2,a=nl(t)>0;for(let l=0;l<o;l++){const c=(l+1)%o,h=t[l*2],d=t[l*2+1],u=t[c*2],f=t[c*2+1];a?this.quad(u,e,f,h,e,d,h,n,d,u,n,f,s,r):this.quad(h,e,d,u,e,f,u,n,f,h,n,d,s,r)}}cap(t,e,n,s=0){const r=t.length/2,o=[];for(let l=0;l<r;l++)o.push(new Bt(t[l*2],t[l*2+1]));const a=Wa.triangulateShape(o,[]);for(const l of a){const c=o[l[0]],h=o[l[1]],d=o[l[2]];(h.x-c.x)*(d.y-c.y)-(h.y-c.y)*(d.x-c.x)>0?this.tri(c.x,e,c.y,d.x,e,d.y,h.x,e,h.y,n,s):this.tri(c.x,e,c.y,h.x,e,h.y,d.x,e,d.y,n,s)}}build(){const t=new Ae;return t.setAttribute("position",new Pe(new Float32Array(this.pos),3)),t.setAttribute("normal",new Pe(new Float32Array(this.nor),3)),t.setAttribute("color",new Pe(new Float32Array(this.col),3)),t.setAttribute("glow",new Pe(new Float32Array(this.glo),1)),t.computeBoundingSphere(),t.computeBoundingBox(),this.pos=[],this.nor=[],this.col=[],this.glo=[],t}}function nl(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}const es={value:0};function qn(i={}){const t=new Ye({vertexColors:!0,roughness:i.roughness??.86,metalness:0,side:i.side??Ee}),e=new Rt(i.glowColor??16761722);return t.onBeforeCompile=n=>{n.uniforms.uNight=es,n.uniforms.uGlowColor={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float glow;
varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;
uniform float uNight;
uniform vec3 uGlowColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlowColor * vGlow * uNight * 2.4;`)},t.customProgramCacheKey=()=>"inverloch-model",t}function il(i){return i.onBeforeCompile=t=>{t.uniforms.uNight=es,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.82 * uNight;`)},i.customProgramCacheKey=()=>"inverloch-unlit",i}const kh={day:{sunDir:[-.42,.78,-.46],sunColor:16774109,sunIntensity:3.1,hemiSky:13953279,hemiGround:9280120,hemiIntensity:1.25,zenith:4163279,horizon:13625078,below:1582638,sunGlow:1,shallow:7129789,deep:1201018,waterSky:12903158,foam:1,night:0,exposure:1},golden:{sunDir:[-.84,.22,.36],sunColor:16756848,sunIntensity:3,hemiSky:15781309,hemiGround:6973032,hemiIntensity:1.15,zenith:4153244,horizon:16760970,below:1645863,sunGlow:1.6,shallow:7320486,deep:1390942,waterSky:16763040,foam:.9,night:.25,exposure:1},night:{sunDir:[.38,.72,-.42],sunColor:10467071,sunIntensity:.5,hemiSky:3821436,hemiGround:1053980,hemiIntensity:.55,zenith:396056,horizon:1582922,below:263948,sunGlow:.5,shallow:1920092,deep:331552,waterSky:2242140,foam:.45,night:1,exposure:1.05}},zx=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
  gl_Position = p.xyww;
}`,Bx=`
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uBelow;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uSunGlow;
uniform float uNight;
varying vec3 vDir;
float sHash(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
void main() {
  vec3 dir = normalize(vDir);
  float h = dir.y;
  vec3 col = mix(uHorizon, uZenith, pow(clamp(h, 0.0, 1.0), 0.5));
  col = mix(col, uBelow, smoothstep(0.015, -0.3, h));
  float sd = max(dot(dir, uSunDir), 0.0);
  float above = smoothstep(-0.04, 0.03, h);
  col += uSunColor * (pow(sd, 900.0) * 3.0 + pow(sd, 40.0) * 0.35 + pow(sd, 6.0) * 0.12) * uSunGlow * above;
  vec3 cell = floor(dir * 190.0);
  float star = step(0.9972, sHash(cell)) * uNight * smoothstep(0.04, 0.35, h);
  col += vec3(0.85, 0.9, 1.0) * star * (0.5 + 0.5 * sHash(cell + 3.0));
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;class kx{constructor(t,e,n,s={}){nt(this,"sun",new Mp(16777215,3));nt(this,"hemi",new xp(16777215,8947848,1));nt(this,"sky");nt(this,"sunDir",new Q);nt(this,"skyUniforms");nt(this,"from");nt(this,"to");nt(this,"t",1);nt(this,"mode","day");this.renderer=t,this.water=e,this.tint=s,this.from=this.to=this.preset("day"),this.skyUniforms={uZenith:{value:new Rt},uHorizon:{value:new Rt},uBelow:{value:new Rt},uSunDir:{value:new Q},uSunColor:{value:new Rt},uSunGlow:{value:1},uNight:{value:0}},this.sky=new Jt(new qa(1,32,16),new Xn({uniforms:this.skyUniforms,vertexShader:zx,fragmentShader:Bx,side:Ze,depthWrite:!1,depthTest:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,n>0&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(n,n)),this.apply(1)}set(t,e=!1){t===this.mode&&this.t>=1||(this.from=this.snapshot(),this.to=this.preset(t),this.mode=t,this.t=e?1:0,this.apply(this.t))}update(t){return this.t>=1?!1:(this.t=Math.min(1,this.t+t/1.4),this.apply(this.t),!0)}aimShadow(t,e){if(!this.sun.castShadow)return;const n=_e.clamp(e*.7,140,2400),s=this.sun.shadow,r=s.camera,o=n*2/s.mapSize.x,a=Math.round(t.x/o)*o,l=Math.round(t.z/o)*o,c=n*2.4+300;this.sun.target.position.set(a,t.y,l),this.sun.position.set(a,t.y,l).addScaledVector(this.sunDir,c),this.sun.target.updateMatrixWorld(),r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=1,r.far=c*2+400,r.updateProjectionMatrix(),s.bias=-.3/(r.far-r.near),s.normalBias=_e.clamp(o*1.6,.06,1.2))}preset(t){return{...kh[t],...this.tint[t]}}setSolar(t){const e=(t%1440+1440)%1440,n=6*60,s=20.5*60;let r,o;if(e>=n&&e<=s)o=(e-n)/(s-n),r=Math.sin(Math.PI*o)*70;else{const m=((e<n?e+1440:e)-s)/(1440-(s-n));o=m<.5?1:0,r=-Math.sin(Math.PI*m)*40}const a=_e.degToRad(110*(1-2*o)),l=_e.degToRad(Math.max(r,5)),c=[Math.sin(a)*Math.cos(l),Math.sin(l),-Math.cos(a)*Math.cos(l)];let h;r>=25?h=this.preset("day"):r>=6?h=sl(this.preset("golden"),this.preset("day"),(r-6)/19):r>=-6?h=sl(this.preset("night"),this.preset("golden"),(r+6)/12):h=this.preset("night");const d=_e.clamp((2-r)/6,0,1),u=kh.night.sunDir,f=[c[0]+(u[0]-c[0])*d,c[1]+(u[1]-c[1])*d,c[2]+(u[2]-c[2])*d];this.from=this.to={...h,sunDir:f},this.mode=r>=25?"day":r>=-6?"golden":"night",this.apply(1)}snapshot(){return sl(this.from,this.to,Gx(this.t))}apply(t){this.t=t;const e=this.snapshot();this.sunDir.set(...e.sunDir).normalize(),this.sun.color.set(e.sunColor),this.sun.intensity=e.sunIntensity,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const n=this.skyUniforms;n.uZenith.value.set(e.zenith),n.uHorizon.value.set(e.horizon),n.uBelow.value.set(e.below),n.uSunDir.value.copy(this.sunDir),n.uSunColor.value.set(e.sunColor),n.uSunGlow.value=e.sunGlow,n.uNight.value=e.night;const s=this.water.uniforms;s.uSunDir.value.copy(this.sunDir),s.uSunColor.value.set(e.sunColor).multiplyScalar(Math.min(1,e.sunIntensity/2.5)),s.uShallow.value.set(e.shallow),s.uDeep.value.set(e.deep),s.uSky.value.set(e.waterSky),s.uFoam.value=e.foam,this.water.skirt.material.color.set(e.deep).lerp(new Rt(e.shallow),.35),es.value=e.night,this.renderer.toneMappingExposure=e.exposure}}function Gx(i){return i*i*(3-2*i)}function sl(i,t,e){if(e<=0)return i;if(e>=1)return t;const n=(r,o)=>new Rt(r).lerp(new Rt(o),e).getHex(),s=(r,o)=>r+(o-r)*e;return{sunDir:[s(i.sunDir[0],t.sunDir[0]),s(i.sunDir[1],t.sunDir[1]),s(i.sunDir[2],t.sunDir[2])],sunColor:n(i.sunColor,t.sunColor),sunIntensity:s(i.sunIntensity,t.sunIntensity),hemiSky:n(i.hemiSky,t.hemiSky),hemiGround:n(i.hemiGround,t.hemiGround),hemiIntensity:s(i.hemiIntensity,t.hemiIntensity),zenith:n(i.zenith,t.zenith),horizon:n(i.horizon,t.horizon),below:n(i.below,t.below),sunGlow:s(i.sunGlow,t.sunGlow),shallow:n(i.shallow,t.shallow),deep:n(i.deep,t.deep),waterSky:n(i.waterSky,t.waterSky),foam:s(i.foam,t.foam),night:s(i.night,t.night),exposure:s(i.exposure,t.exposure)}}const Hx=1.5;class Vx{constructor(t,e,n,s,r,o,a,l=Hx){nt(this,"nx");nt(this,"nz");nt(this,"y");nt(this,"xMin");nt(this,"zMin");nt(this,"xMax");nt(this,"zMax");nt(this,"dx");nt(this,"dz");nt(this,"cellX");nt(this,"cellZ");this.raw=t,this.exposure=e,this.w=n,this.h=s,this.sizeX=r,this.sizeZ=o,this.vex=l,this.cellX=r/n,this.cellZ=o/s,this.nx=Math.floor((n-1)/a)+1,this.nz=Math.floor((s-1)/a)+1,this.dx=this.cellX*a,this.dz=this.cellZ*a,this.xMin=-r/2+this.cellX/2,this.zMin=-o/2+this.cellZ/2,this.xMax=this.xMin+(this.nx-1)*this.dx,this.zMax=this.zMin+(this.nz-1)*this.dz,this.y=new Float32Array(this.nx*this.nz);for(let c=0;c<this.nz;c++)for(let h=0;h<this.nx;h++)this.y[c*this.nx+h]=t[c*a*n+h*a]*l}yAt(t,e){let n=(t-this.xMin)/this.dx,s=(e-this.zMin)/this.dz;n<0?n=0:n>this.nx-1.0001&&(n=this.nx-1.0001),s<0?s=0:s>this.nz-1.0001&&(s=this.nz-1.0001);const r=n|0,o=s|0,a=n-r,l=s-o,c=o*this.nx+r,h=this.y[c],d=this.y[c+1],u=this.y[c+this.nx],f=this.y[c+this.nx+1];return a+l<=1?h+(d-h)*a+(u-h)*l:f+(u-f)*(1-a)+(d-f)*(1-l)}bilinear(t,e,n){let s=(e+this.sizeX/2)/this.cellX-.5,r=(n+this.sizeZ/2)/this.cellZ-.5;s<0?s=0:s>this.w-1.0001&&(s=this.w-1.0001),r<0?r=0:r>this.h-1.0001&&(r=this.h-1.0001);const o=s|0,a=r|0,l=s-o,c=r-a,h=a*this.w+o;return(t[h]*(1-l)+t[h+1]*l)*(1-c)+(t[h+this.w]*(1-l)+t[h+this.w+1]*l)*c}metresAt(t,e){return this.bilinear(this.raw,t,e)}exposureAt(t,e){return this.bilinear(this.exposure,t,e)}inside(t,e,n=0){return t>this.xMin+n&&t<this.xMax-n&&e>this.zMin+n&&e<this.zMax-n}}const Gh={type:"change"},rl={type:"start"},Hh={type:"end"},kr=new Oa,Vh=new Rn,Wx=Math.cos(70*_e.DEG2RAD),Fe=new Q,tn=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ol=1e-6;class Xx extends bp{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nn.ROTATE,MIDDLE:Nn.DOLLY,RIGHT:Nn.PAN},this.touches={ONE:jn.ROTATE,TWO:jn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new rn,this._lastTargetPosition=new Q,this._quat=new rn().setFromUnitVectors(t.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dr,this._sphericalDelta=new Dr,this._scale=1,this._panOffset=new Q,this._rotateStart=new Bt,this._rotateEnd=new Bt,this._rotateDelta=new Bt,this._panStart=new Bt,this._panEnd=new Bt,this._panDelta=new Bt,this._dollyStart=new Bt,this._dollyEnd=new Bt,this._dollyDelta=new Bt,this._dollyDirection=new Q,this._mouse=new Bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Yx.bind(this),this._onPointerDown=qx.bind(this),this._onPointerUp=$x.bind(this),this._onContextMenu=e_.bind(this),this._onMouseWheel=Jx.bind(this),this._onKeyDown=Qx.bind(this),this._onTouchStart=jx.bind(this),this._onTouchMove=t_.bind(this),this._onMouseDown=Kx.bind(this),this._onMouseMove=Zx.bind(this),this._interceptControlDown=n_.bind(this),this._interceptControlUp=i_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ce.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gh),this.update(),this.state=ce.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),s<-Math.PI?s+=tn:s>Math.PI&&(s-=tn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Fe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new Q(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(kr.origin.copy(this.object.position),kr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(kr.direction))<Wx?this.object.lookAt(this.target):(Vh.setFromNormalAndCoplanarPoint(this.object.up,this.target),kr.intersectPlane(Vh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ol||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ol||this._lastTargetPosition.distanceToSquared(this.target)>ol?(this.dispatchEvent(Gh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?tn/60*this.autoRotateSpeed*t:tn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){this.screenSpacePanning===!0?Fe.setFromMatrixColumn(e,1):(Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe)),Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Fe.copy(s).sub(this.target);let r=Fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Bt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function qx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Yx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function $x(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hh),this.state=ce.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Kx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Nn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ce.DOLLY;break;case Nn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}break;case Nn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(rl)}function Zx(i){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Jx(i){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(i.preventDefault(),this.dispatchEvent(rl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Hh))}function Qx(i){this.enabled!==!1&&this._handleKeyDown(i)}function jx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case jn.ROTATE:if(this.enableRotate===!1){this.state=ce.NONE;break}this._handleTouchStartRotate(i),this.state=ce.TOUCH_ROTATE;break;case jn.PAN:if(this.enablePan===!1){this.state=ce.NONE;break}this._handleTouchStartPan(i),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case jn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ce.TOUCH_DOLLY_PAN;break;case jn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(rl)}function t_(i){switch(this._trackPointer(i),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ce.NONE}}function e_(i){this.enabled!==!1&&i.preventDefault()}function n_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function i_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const al=new Rn,Gr=new yp,ns=new Bt,ll=new Q;class s_ extends Xx{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Nn.PAN,MIDDLE:Nn.DOLLY,RIGHT:Nn.ROTATE},this.touches={ONE:jn.PAN,TWO:jn.DOLLY_ROTATE},this._panWorldStart=new Q}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;al.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();ns.x=(t.clientX-n.left)/n.width*2-1,ns.y=-((t.clientY-n.top)/n.height)*2+1,Gr.setFromCamera(ns,this.object),Gr.ray.intersectPlane(al,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const n=this.domElement.getBoundingClientRect();ns.x=(t.clientX-n.left)/n.width*2-1,ns.y=-((t.clientY-n.top)/n.height)*2+1,Gr.setFromCamera(ns,this.object),Gr.ray.intersectPlane(al,ll)&&(ll.sub(this._panWorldStart),this._panOffset.copy(ll).negate(),this.update())}}class r_{constructor(t,e,n){nt(this,"items",[]);nt(this,"v",new Q);nt(this,"visible",!0);nt(this,"obstacles",[]);this.layer=t;for(const s of[...e].sort((r,o)=>r.priority-o.priority)){const r=document.createElement("button");r.type="button",r.tabIndex=-1,r.className=`inv-label inv-label--${s.kind}`,r.textContent=s.name,r.style.visibility="hidden",r.addEventListener("click",()=>n(s.id)),t.appendChild(r),this.items.push({place:s,el:r,w:0,h:0,shown:!1})}}setVisible(t){this.visible=t,this.layer.style.display=t?"":"none"}setObstacles(t){this.obstacles=t}update(t,e,n,s=1/0){if(!this.visible)return;const r=[...this.obstacles];for(const o of this.items){o.w||(o.w=o.el.offsetWidth,o.h=o.el.offsetHeight);const a=o.place;this.v.set(a.x,a.y,a.z);const l=this.v.distanceTo(t.position);this.v.project(t);let c=this.v.z<1&&this.v.z>-1&&l<(a.maxDist??1/0)&&l<s;const h=(this.v.x*.5+.5)*e,d=(-this.v.y*.5+.5)*n,u=h-o.w/2,f=d-o.h,m=h+o.w/2,v=d;if(c&&(m<0||u>e||v<0||f>n)&&(c=!1),c){for(const p of r)if(u<p[2]+6&&m>p[0]-6&&f<p[3]+4&&v>p[1]-4){c=!1;break}}c&&(r.push([u,f,m,v]),o.el.style.transform=`translate3d(${Math.round(u)}px, ${Math.round(f)}px, 0)`),c!==o.shown&&(o.el.style.visibility=c?"visible":"hidden",o.shown=c)}}dispose(){for(const t of this.items)t.el.remove();this.items=[]}}function Yn(i,t,e){return[(e-i.origin[0])*i.metresPerDegree[0],-(t-i.origin[1])*i.metresPerDegree[1]]}function o_(i,t,e){return i.map(n=>{const[s,r]=Yn(t,n.lat,n.lon),o=Math.max(e.yAt(s,r),0);return{...n,x:s,z:r,y:o+(n.lift??6)}})}const a_={high:{step:1,trees:1,shadow:4096,pixelRatio:2},medium:{step:2,trees:.6,shadow:2048,pixelRatio:1.5},low:{step:2,trees:.35,shadow:0,pixelRatio:1}};class cl extends Error{}const l_=()=>new Promise(i=>requestAnimationFrame(()=>i())),c_=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class h_{constructor(t,e,n,s,r={}){nt(this,"renderer");nt(this,"scene",new Pd);nt(this,"camera",new vn(38,1,5,9e4));nt(this,"controls");nt(this,"atmosphere");nt(this,"hf");nt(this,"disposed",!1);nt(this,"abort",new AbortController);nt(this,"labels");nt(this,"places",[]);nt(this,"raf",0);nt(this,"last",0);nt(this,"time",0);nt(this,"dirty",!0);nt(this,"animating",!0);nt(this,"resizeObserver");nt(this,"flight");nt(this,"lastCompass",NaN);nt(this,"width",1);nt(this,"height",1);nt(this,"pixelRatio",1);nt(this,"slowFrames",0);nt(this,"solarMinutes",NaN);nt(this,"roadPaths",[]);nt(this,"roadIndex");nt(this,"external");nt(this,"meta");nt(this,"shadowAim",new Q);nt(this,"viewFocus",new Q);nt(this,"viewDistance",1/0);nt(this,"lookDir",new Q);nt(this,"onKey",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=this.currentView(),n=e.dist*.12,s=_e.degToRad(e.azimuth),r=-Math.sin(s),o=-Math.cos(s),a=Math.cos(s),l=-Math.sin(s);let c=null;switch(t.key){case"ArrowUp":c={...e,x:e.x+r*n,z:e.z+o*n};break;case"ArrowDown":c={...e,x:e.x-r*n,z:e.z-o*n};break;case"ArrowLeft":c={...e,x:e.x-a*n,z:e.z-l*n};break;case"ArrowRight":c={...e,x:e.x+a*n,z:e.z+l*n};break;case"+":case"=":c={...e,dist:e.dist*.8};break;case"-":case"_":c={...e,dist:e.dist*1.25};break;case"q":case"Q":c={...e,azimuth:e.azimuth-15};break;case"e":case"E":c={...e,azimuth:e.azimuth+15};break;case"r":case"R":c={...e,polar:e.polar-6};break;case"f":case"F":c={...e,polar:e.polar+6};break;case"Home":c=this.opts.home;break;default:return}t.preventDefault(),this.fly(c,.3)});nt(this,"frame",t=>{var l;if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);const e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,document.hidden)return;if(this.flight){const c=this.flight;c.t=Math.min(1,c.t+e/c.duration);const h=c_(c.t),d=(u,f)=>u+(f-u)*h;this.applyView({x:d(c.from.x,c.to.x),z:d(c.from.z,c.to.z),dist:Math.exp(d(Math.log(c.from.dist),Math.log(c.to.dist))),polar:d(c.from.polar,c.to.polar),azimuth:d(c.from.azimuth,c.to.azimuth)}),c.t>=1&&(this.flight=void 0)}if(this.controls&&!this.external&&this.controls.update()&&(this.dirty=!0),this.atmosphere.update(e)&&(this.dirty=!0),this.animating&&(this.time+=e,this.tick(e,this.time),this.dirty=!0),!this.dirty)return;this.dirty=!1;const n=this.camera;let s,r=1/0;const o=!!this.controls&&!this.external;if(this.controls&&o){const c=this.hf.yAt(n.position.x,n.position.z)+12;n.position.y<c&&(n.position.y=c),s=n.position.distanceTo(this.controls.target),this.shadowAim.copy(this.controls.target)}else{const c=Math.max(1,n.position.y-Math.max(this.hf.yAt(n.position.x,n.position.z),this.waterLevel));n.getWorldDirection(this.lookDir);const h=Math.min(this.lookDir.y<-.05?c/-this.lookDir.y:1e9,60+c*3,3e3);this.shadowAim.copy(n.position).addScaledVector(this.lookDir,h),s=Math.max(h,c)*1.3,r=Math.max(350,c*10)}const a=o?_e.clamp(s*.02,2,80):_e.clamp(s*.012,.4,60);if(Math.abs(a-n.near)>n.near*.05&&(n.near=a,n.updateProjectionMatrix()),this.atmosphere.aimShadow(this.shadowAim,s),!o&&s<500?this.viewFocus.set(n.position.x,0,n.position.z):this.viewFocus.copy(this.shadowAim),this.viewDistance=s,this.beforeRender(),this.renderer.render(this.scene,n),(l=this.labels)==null||l.update(n,this.width,this.height,r),this.animating&&e<.25&&(this.slowFrames=e>.042?this.slowFrames+1:Math.max(0,this.slowFrames-2),this.slowFrames>50&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio*.75),this.renderer.setPixelRatio(this.pixelRatio),this.resize(),this.slowFrames=0)),o){const c=Math.round(this.currentView().azimuth);c!==this.lastCompass&&(this.lastCompass=c,this.cb.onCompass(c))}});this.container=t,this.labelLayer=e,this.cb=n,this.opts=s,this.host=r,this.external=!!r.external}async init(){try{this.renderer=new Ox({antialias:!0,powerPreference:"high-performance"})}catch{this.cb.onError("This browser could not start WebGL, which the 3D model needs.");return}const t=this.renderer,e=this.pickQuality(),n=a_[e];this.pixelRatio=Math.min(window.devicePixelRatio||1,n.pixelRatio),t.setPixelRatio(this.pixelRatio),t.outputColorSpace=Te,t.toneMapping=wo,t.shadowMap.enabled=n.shadow>0,t.shadowMap.type=os;const s=t.domElement;this.host.external?(s.setAttribute("role","img"),s.setAttribute("aria-label",this.opts.name)):(s.tabIndex=0,s.setAttribute("role","application"),s.setAttribute("aria-label",`${this.opts.name}. Drag to pan, right-drag to rotate, scroll to zoom. Arrow keys pan, plus and minus zoom, Q and E rotate.`)),s.style.display="block",s.style.outlineOffset="-3px",this.container.appendChild(s),s.addEventListener("webglcontextlost",a=>{a.preventDefault(),this.disposed||this.cb.onError("The browser reclaimed the graphics memory this model was using.")});let r;try{r=await this.build(n,e,async(a,l)=>{this.cb.onProgress(a,l),await l_()})}catch(a){if(this.disposed)return;a instanceof cl||console.error(a),this.cb.onError(a instanceof cl?a.message:"The model could not be built in this browser.");return}if(this.disposed)return;this.hf=r.hf,this.atmosphere=r.atmosphere,this.scene.add(this.atmosphere.sky,this.atmosphere.sun,this.atmosphere.sun.target,this.atmosphere.hemi),this.places=r.places,this.roadPaths=r.roadPaths,this.roadIndex=r.roadIndex,this.labels=new r_(this.labelLayer,this.places,a=>this.flyToPlace(a)),this.external||this.setupControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize();const o=window.matchMedia("(prefers-reduced-motion: reduce)").matches;o&&(this.animating=!1),this.external?this.setExternalCamera(...this.opts.externalStart):o?this.applyView(this.opts.home):(this.applyView(this.opts.intro),this.fly(this.opts.home,3.4)),this.cb.onProgress(1,"Ready"),this.cb.onReady(r.info),this.last=performance.now(),this.raf=requestAnimationFrame(this.frame)}get isAnimating(){return this.animating}setAnimating(t){this.animating=t,this.dirty=!0}setExternalCamera(t,e,n,s,r){this.external&&(this.camera.position.set(t,e,n),this.camera.rotation.set(r,s,0,"YXZ"),this.dirty=!0)}setExternal(t){if(!(t===this.external||!this.hf)){if(this.external=t,t)this.flight=void 0,this.controls&&(this.controls.enabled=!1);else{this.controls||this.setupControls(),this.controls.enabled=!0;const e=this.camera;e.getWorldDirection(this.lookDir);const n=Math.max(1,e.position.y),s=this.lookDir.y<-.05?Math.min(n/-this.lookDir.y,6e3):900,r=this.controls.target.copy(e.position).addScaledVector(this.lookDir,s);r.x=_e.clamp(r.x,this.hf.xMin,this.hf.xMax),r.z=_e.clamp(r.z,this.hf.zMin,this.hf.zMax),r.y=this.targetHeight(r.x,r.z),this.controls.update(),this.fly(this.opts.home,1.6)}this.resize()}}getCamera(){const t=new An().setFromQuaternion(this.camera.quaternion,"YXZ"),e=this.camera.position;return{x:e.x,y:e.y,z:e.z,yaw:t.y,pitch:t.x}}fromLatLon(t,e){return this.meta?Yn(this.meta,t,e):[0,0]}addParts(t){const e=new Ie;e.name="guest";const n=t.map(s=>{const r=new Ae;r.setAttribute("position",new re(Array.from(s.positions),3)),s.colors&&r.setAttribute("color",new re(Array.from(s.colors),3)),s.uvs&&r.setAttribute("uv",new re(Array.from(s.uvs),2)),s.indices&&r.setIndex(Array.from(s.indices)),s.normals?r.setAttribute("normal",new re(Array.from(s.normals),3)):r.computeVertexNormals();let o=null;s.map&&(o=new De(s.map),o.colorSpace=Te,o.wrapS=o.wrapT=Zs,s.mapRepeat&&o.repeat.set(s.mapRepeat[0],s.mapRepeat[1]),o.anisotropy=4,o.needsUpdate=!0);const a=s.opacity??1,l={color:new Rt().setRGB(...s.color??[1,1,1]),map:o,vertexColors:!!s.colors,transparent:a<1,opacity:a,side:s.doubleSide?Ee:ti},c=s.unlit?new Wn(l):new Ye({...l,roughness:s.roughness??.9,metalness:s.metalness??0,emissive:new Rt().setRGB(...s.emissive??[0,0,0]),emissiveIntensity:s.emissiveIntensity??1,flatShading:!!s.flatShading}),h=new Jt(r,c);return h.matrixAutoUpdate=!1,h.matrix.fromArray(Array.from(s.matrix)),h.castShadow=a>=1,h.receiveShadow=!0,e.add(h),h});return this.scene.add(e),this.dirty=!0,{setMatrix:(s,r)=>{const o=n[s];o&&(o.matrix.fromArray(Array.from(r)),o.matrixWorldNeedsUpdate=!0,this.dirty=!0)},setEmissive:(s,r,o,a,l)=>{var h;const c=(h=n[s])==null?void 0:h.material;c instanceof Ye&&(c.emissive.setRGB(r,o,a),c.emissiveIntensity=l,this.dirty=!0)},remove:()=>{var s;this.scene.remove(e);for(const r of n){r.geometry.dispose();const o=r.material;(s=o.map)==null||s.dispose(),o.dispose()}this.dirty=!0}}}addPad(t){const e=t.radius??t.halfWidth??5,n=t.radius??t.halfDepth??5,s=t.heading??0,r=Math.cos(s),o=Math.sin(s);let a=1/0,l=-1/0;for(const[f,m]of[[0,0],[-e,-n],[e,-n],[e,n],[-e,n],[0,-n],[0,n],[-e,0],[e,0]]){const v=this.hf.yAt(t.x+f*r+m*o,t.z-f*o+m*r);a=Math.min(a,v),l=Math.max(l,v)}const c=l+(t.lift??.25),h=c-a+1,d=t.radius?new ka(t.radius,t.radius,h,24):new Mi(e*2,h,n*2),u=new Jt(d,new Ye({color:new Rt().setRGB(...t.color),roughness:1}));return u.position.set(t.x,c-h/2,t.z),u.rotation.y=s,u.receiveShadow=!0,u.name="guest-pad",this.scene.add(u),this.dirty=!0,c}setSolarMinutes(t){!this.atmosphere||t===this.solarMinutes||(this.solarMinutes=t,this.atmosphere.setSolar(t),this.dirty=!0)}roadSpot(t){const e=t.trim().toLowerCase();let n=null;for(const m of this.roadPaths)m.name.toLowerCase()===e&&(!n||m.length>n.length)&&(n=m);if(!n)return null;const s=n.pts.length/3,r=0,o=s-1,a=s>>1;let l=n.pts[o*3]-n.pts[r*3],c=n.pts[o*3+2]-n.pts[r*3+2];const h=Math.hypot(l,c)||1;l/=h,c/=h;const d=Math.min(70,h*.5),u=n.pts[a*3]-l*d,f=n.pts[a*3+2]-c*d;return{x:u,y:this.hf.yAt(u,f)+38,z:f,yaw:Math.atan2(-l,-c),pitch:-.42}}standNear(t,e){const n=this.roadIndex,s=n==null?void 0:n.nearest(t,e,150);if(!n||!s)return null;const r=s.width/2+1.5;let o=(t-s.px)*-s.tz+(e-s.pz)*s.tx>=0?1:-1;const a=f=>{const m=s.px-s.tz*f*(r+6),v=s.pz+s.tx*f*(r+6),p=n.nearest(m,v,r+4);return!!p&&p.dist<r+3};a(o)&&!a(-o)&&(o=-o);const l=s.px-s.tz*o*r,c=s.pz+s.tx*o*r,h=t-l,d=e-c,u=Math.hypot(h,d)>6?Math.atan2(-h,-d):Math.atan2(-s.tx,-s.tz);return{x:l,z:c,yaw:u}}groundAt(t,e){return this.hf?this.hf.yAt(t,e):0}get waterLevel(){return 0}get bounds(){return this.hf?[this.hf.xMin,this.hf.xMax,this.hf.zMin,this.hf.zMax]:[-4e3,4e3,-3440,3440]}setTimeOfDay(t){var e;(e=this.atmosphere)==null||e.set(t,!this.animating),this.dirty=!0}setLabelsVisible(t){var e;(e=this.labels)==null||e.setVisible(t),this.dirty=!0}setLabelObstacles(t){var e;(e=this.labels)==null||e.setObstacles(t),this.dirty=!0}flyToPlace(t){const e=this.places.find(n=>n.id===t);e&&this.fly({x:e.x,z:e.z,dist:e.view[0],polar:e.view[1],azimuth:e.view[2]},2.2)}resetView(){this.fly(this.opts.home,1.8)}setView(t,e,n,s,r,o=1.5){this.fly({x:t,z:e,dist:n,polar:s,azimuth:r},o)}faceNorth(){const t=this.currentView();this.fly({...t,azimuth:0},.8)}zoomBy(t){const e=this.currentView();this.fly({...e,dist:_e.clamp(e.dist*t,this.controls.minDistance,this.controls.maxDistance)},.35)}dispose(){var t,e,n;this.disposed=!0,this.abort.abort(),cancelAnimationFrame(this.raf),(t=this.resizeObserver)==null||t.disconnect(),(e=this.labels)==null||e.dispose(),(n=this.controls)==null||n.dispose(),this.renderer&&(this.renderer.domElement.removeEventListener("keydown",this.onKey),this.scene.traverse(s=>{var a,l;const r=s;(l=(a=r.geometry)==null?void 0:a.dispose)==null||l.call(a);const o=Array.isArray(r.material)?r.material:r.material?[r.material]:[];for(const c of o){for(const h of Object.values(c))h instanceof De&&h.dispose();c.dispose()}}),this.renderer.dispose(),this.renderer.domElement.remove())}beforeRender(){}invalidate(){this.dirty=!0}clearTest(){const t=[...this.host.clear??[],...(this.host.clearLatLon??[]).map(e=>{const[n,s]=this.fromLatLon(e.lat,e.lon);return{x:n,z:s,r:e.r}})];return(e,n)=>t.some(s=>(e-s.x)**2+(n-s.z)**2<s.r*s.r)}pickQuality(){if(this.host.quality)return this.host.quality;const t=new URLSearchParams(window.location.search).get("quality");if(t==="high"||t==="medium"||t==="low")return t;const e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),s=n?String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)):"";if(/swiftshader|llvmpipe|software/i.test(s))return"low";const r=navigator.deviceMemory??8;return window.matchMedia("(pointer: coarse)").matches||r<=4?"medium":"high"}setupControls(){const t=this.controls=new s_(this.camera,this.renderer.domElement);t.enableDamping=!0,t.dampingFactor=.09,t.screenSpacePanning=!1,t.zoomToCursor=!0,t.minDistance=this.opts.minDistance,t.maxDistance=this.opts.maxDistance,t.maxPolarAngle=_e.degToRad(84),t.zoomSpeed=1.1,t.addEventListener("start",()=>{this.flight=void 0}),t.addEventListener("change",()=>{const e=t.target,n=this.hf;e.x=_e.clamp(e.x,n.xMin,n.xMax),e.z=_e.clamp(e.z,n.zMin,n.zMax);const s=this.targetHeight(e.x,e.z);this.camera.position.y+=s-e.y,e.y=s,this.dirty=!0}),this.renderer.domElement.addEventListener("keydown",this.onKey)}clampView(t){var e,n;return{x:_e.clamp(t.x,this.hf.xMin,this.hf.xMax),z:_e.clamp(t.z,this.hf.zMin,this.hf.zMax),dist:_e.clamp(t.dist,((e=this.controls)==null?void 0:e.minDistance)??this.opts.minDistance,((n=this.controls)==null?void 0:n.maxDistance)??this.opts.maxDistance),polar:_e.clamp(t.polar,2,84),azimuth:t.azimuth}}currentView(){const t=this.controls.target,e=this.camera.position.clone().sub(t),n=new Dr().setFromVector3(e);return{x:t.x,z:t.z,dist:n.radius,polar:_e.radToDeg(n.phi),azimuth:_e.radToDeg(n.theta)}}targetHeight(t,e){return this.opts.followGround?Math.max(0,this.hf.yAt(t,e)):0}applyView(t){const e=new Dr(t.dist,_e.degToRad(t.polar),_e.degToRad(t.azimuth)),n=this.controls.target.set(t.x,this.targetHeight(t.x,t.z),t.z);this.camera.position.setFromSpherical(e).add(n),this.camera.lookAt(n),this.dirty=!0}fly(t,e){if(!this.controls||this.external)return;if(t=this.clampView(t),!this.animating){this.flight=void 0,this.applyView(t),this.controls.update();return}const n=this.currentView();let s=(t.azimuth-n.azimuth)%360;s>180&&(s-=360),s<-180&&(s+=360),this.flight={from:n,to:{...t,azimuth:n.azimuth+s},t:0,duration:e}}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.fov=this.external?60:t/e<.8?52:38,this.camera.updateProjectionMatrix(),this.dirty=!0}}const Wh=new WeakMap,u_=new Qt().makeScale(0,0,0);function Hr(i,t,e){let n=Wh.get(i);if(n||Wh.set(i,n=new Map),e){if(n.has(t))return;const s=new Qt;i.getMatrixAt(t,s),n.set(t,s),i.setMatrixAt(t,u_)}else{const s=n.get(t);if(!s)return;i.setMatrixAt(t,s),n.delete(t)}i.instanceMatrix.needsUpdate=!0}function hl(i,t,e,n,s,r){const{o,d:a}=i,l=a.x*a.x+a.z*a.z;let c;if(l<1e-6?c=a.y<0?(o.y-s)/-a.y:-1:c=((t-o.x)*a.x+(e-o.z)*a.z)/l,c<=0)return-1;const h=o.y+a.y*c;return(h<n-.3||h>s+.3)&&(a.y>=0||(c=(o.y-s)/-a.y,c<=0))?-1:Math.hypot(o.x+a.x*c-t,o.z+a.z*c-e)<=r?c:-1}const Xh=3;function is(i,t,e,n,s,r,o,a,l,c){const h=new Xa(1,0),d=h.getAttribute("position"),u=[];for(let f=0;f<d.count;f++){const m=d.getX(f),v=d.getY(f),p=d.getZ(f),g=Math.sin(m*12.9898+v*78.233+p*37.719+a*4.1)*43758.5453,x=.8+(g-Math.floor(g))*.42;u.push([t+m*s*x,e+v*r*(v<0?.75:x),n+p*o*x])}for(let f=0;f<u.length;f+=3){const[m,v,p]=[u[f],u[f+1],u[f+2]],g=_e.clamp(((m[1]+v[1]+p[1])/3-(e-r))/(2*r),0,1);i.tri(m[0],m[1],m[2],v[0],v[1],v[2],p[0],p[1],p[2],ts(l,c,g))}h.dispose()}function yi(i){const t=i.build();return t.deleteAttribute("glow"),t}function f_(i,t,e,n,s=()=>!1,r){const o=new Ie;o.name="trees";const a=new $c({vertexColors:!0}),l=r?r.tile:1300,c=new Map,h=new Map,d=Dn(88);for(let A=0;A<i.length;A+=Xh){if(n<1&&d()>n||s(i[A]/4,i[A+1]/4))continue;const P=`${i[A+2]>>8}:${Math.floor(i[A]/4/l)}:${Math.floor(i[A+1]/4/l)}`;let N=h.get(P);N||h.set(P,N=[]),N.push(A)}const u=new Qt,f=new rn,m=new Q,v=new Q,p=new Q(0,1,0),g=new Rt;let x=0;const M=new Map;let y=new Set;for(const[A,L]of h){const P=Number(A.split(":")[0]),N=new an(t[P],a,L.length);if(L.forEach((T,O)=>{const H=i[T]/4,k=i[T+1]/4,X=(i[T+2]&255)/10,V=Dn(T*2654435761+11);v.set(H,e.yAt(H,k)-.15,k),M.set(`${i[T]}_${i[T+1]}`,{near:N,n:O,x:H,y:v.y,z:k,h:X}),f.setFromAxisAngle(p,V()*Math.PI*2);const z=.85+V()*.35;m.set(X*z,X,X*(.85+V()*.35)),N.setMatrixAt(O,u.compose(v,f,m));const G=.8+V()*.34;N.setColorAt(O,g.setRGB(G*(.94+V()*.14),G,G*(.9+V()*.12)))}),N.instanceMatrix.needsUpdate=!0,N.instanceColor&&(N.instanceColor.needsUpdate=!0),N.computeBoundingSphere(),N.castShadow=!0,N.receiveShadow=!1,o.add(N),x+=L.length,r){const T=A.slice(A.indexOf(":")+1);let O=c.get(T);O||c.set(T,O={near:[],trees:[],kinds:[]}),O.near.push(N);for(const H of L)O.trees.push(H),O.kinds.push(P)}}const S=A=>{const L=new Set(A.map(([P,N])=>`${Math.round(P*4)}_${Math.round(N*4)}`));for(const P of new Set([...L,...y])){const N=M.get(P);!N||L.has(P)===y.has(P)||(Hr(N.near,N.n,L.has(P)),N.far&&N.fn!==void 0&&Hr(N.far,N.fn,L.has(P)))}y=L},E=(A,L)=>{let P=null;for(const[N,T]of M){if(y.has(N)||Math.abs(T.x-A.x)>400||Math.abs(T.z-A.z)>400)continue;const O=hl({o:A,d:L},T.x,T.z,T.y,T.y+T.h,Math.max(.8,T.h*.3));O>0&&(!P||O<P.t)&&(P={type:"tree",x:T.x,z:T.z,t:O})}return P};if(!r)return{group:o,count:x,cull:(A,L,P)=>{},setGone:S,pick:E};const _=d_(),b=t.map(A=>{A.computeBoundingBox();const L=A.boundingBox,P=A.getAttribute("color");let N=0,T=0,O=0;for(let H=0;H<P.count;H++)N+=P.getX(H),T+=P.getY(H),O+=P.getZ(H);return{wide:.8*Math.max(-L.min.x,L.max.x,-L.min.z,L.max.z),top:L.max.y,colour:new Rt(N/P.count,T/P.count,O/P.count)}}),R=[];for(const A of c.values()){const L=new an(_,a,A.trees.length);A.trees.forEach((P,N)=>{const T=M.get(`${i[P]}_${i[P+1]}`);T&&(T.far=L,T.fn=N);const O=i[P]/4,H=i[P+1]/4,k=(i[P+2]&255)/10,X=b[A.kinds[N]],V=Dn(P*2654435761+11);V();const z=k*(.85+V()*.35)*X.wide;v.set(O,e.yAt(O,H)+k*X.top*.62,H),m.set(z,k*X.top*.4,z),L.setMatrixAt(N,u.compose(v,f.identity(),m));const G=.8+V()*.34;L.setColorAt(N,g.copy(X.colour).multiplyScalar(G))}),L.computeBoundingSphere(),L.visible=!1,o.add(L),R.push({near:A.near,far:L,c:L.boundingSphere.center,r:L.boundingSphere.radius})}return{group:o,count:x,setGone:S,pick:E,cull(A,L,P,N=r.near){for(const T of R){const O=Math.hypot(Math.max(0,Math.hypot(T.c.x-A,T.c.z-P)-T.r),T.c.y-L)<N;for(const H of T.near)H.visible=O;T.far.visible=!O}}}}function d_(){const i=[0,1,0],t=[0,-1,0],e=[[1,0,0],[0,0,1],[-1,0,0],[0,0,-1]],n=[],s=[];for(let o=0;o<4;o++){const a=e[o],l=e[(o+1)%4];n.push(...i,...l,...a,...t,...a,...l),s.push(1.08,1.08,1.08,.95,.95,.95,.95,.95,.95,.6,.6,.6,.78,.78,.78,.78,.78,.78)}const r=new Ae;return r.setAttribute("position",new re(n,3)),r.setAttribute("color",new re(s,3)),r.computeVertexNormals(),r}const Vr=1,Is=2,p_=[$(5198680),$(11575168),$(9072466),$(12434356)],m_=$(4474957),qh=$(15921382),Yh=[.34,.3,.26,.22,.16,.15,.13,.11],$h=.05;function g_(i,t){const e=[i[0]/10,i[1]/10];for(let n=2;n<i.length;n+=2){const s=i[n-2]/10,r=i[n-1]/10,o=i[n]/10,a=i[n+1]/10,l=Math.max(1,Math.ceil(Math.hypot(o-s,a-r)/t));for(let c=1;c<=l;c++)e.push(s+(o-s)*c/l,r+(a-r)*c/l)}return e}class x_{constructor(){nt(this,"cells",new Map);nt(this,"segs",[]);nt(this,"size",40)}add(t,e,n,s,r,o,a=7){const l=this.segs.length/7;this.segs.push(t,e,n,s,r,o,a);const c=Math.floor(Math.min(t,n)/this.size),h=Math.floor(Math.max(t,n)/this.size),d=Math.floor(Math.min(e,s)/this.size),u=Math.floor(Math.max(e,s)/this.size);for(let f=c;f<=h;f++)for(let m=d;m<=u;m++){const v=(f+512)*4096+(m+512);let p=this.cells.get(v);p||this.cells.set(v,p=[]),p.push(l)}}clear(t,e,n,s){let r=!0;return this.near(t,e,n,(o,a,l,c)=>{o<c/2+s&&(r=!1)}),r}near(t,e,n,s){const r=Math.ceil(n/this.size),o=Math.floor(t/this.size),a=Math.floor(e/this.size);for(let l=o-r;l<=o+r;l++)for(let c=a-r;c<=a+r;c++){const h=this.cells.get((l+512)*4096+(c+512));if(h)for(const d of h){const u=this.segs[d*7],f=this.segs[d*7+1],m=this.segs[d*7+2]-u,v=this.segs[d*7+3]-f,p=Math.max(0,Math.min(1,((t-u)*m+(e-f)*v)/(m*m+v*v||1))),g=Math.hypot(t-u-m*p,e-f-v*p);g<=n&&s(g,this.segs[d*7+4],this.segs[d*7+5],this.segs[d*7+6])}}}nearest(t,e,n){let s=null;const r=Math.ceil(n/this.size),o=Math.floor(t/this.size),a=Math.floor(e/this.size);for(let l=o-r;l<=o+r;l++)for(let c=a-r;c<=a+r;c++){const h=this.cells.get((l+512)*4096+(c+512));if(h)for(const d of h){const u=this.segs[d*7],f=this.segs[d*7+1],m=this.segs[d*7+2],v=this.segs[d*7+3],p=m-u,g=v-f,x=Math.max(0,Math.min(1,((t-u)*p+(e-f)*g)/(p*p+g*g||1))),M=u+p*x,y=f+g*x,S=Math.hypot(t-M,e-y);if(S<=n&&(!s||S<s.dist)){const E=Math.hypot(p,g)||1;s={dist:S,px:M,pz:y,cls:this.segs[d*7+4],name:this.segs[d*7+5],width:this.segs[d*7+6],tx:p/E,tz:g/E}}}}return s}}function __(i,t,e={}){const n=new se,s=new se,r=new x_,o=[],a=[];for(let p=0;p<i.roads.length;p++){const[g,x,M,y,S,E]=i.roads[p],_=y/10,b=g_(E,g<=3?6:5),R=b.length/2;if(R<2)continue;const A=x===0&&g<=1?m_:p_[x],L=e.groundDrawsRoads?$h:Yh[g],P=(M&Vr)!==0,N=t.yAt(b[0],b[1]),T=t.yAt(b[R*2-2],b[R*2-1]),O=new Float32Array(R);for(let z=1;z<R;z++)O[z]=O[z-1]+Math.hypot(b[z*2]-b[z*2-2],b[z*2+1]-b[z*2-1]);const H=O[R-1]||1,k=new Float32Array(R*3),X=new Float32Array(R*3),V=new Float32Array(R*3);for(let z=0;z<R;z++){const G=b[z*2],W=b[z*2+1],ut=Math.max(z-1,0),q=Math.min(z+1,R-1);let at=b[q*2]-b[ut*2],ct=b[q*2+1]-b[ut*2+1];const mt=Math.hypot(at,ct)||1;at/=mt,ct/=mt;let pt=1;if(z>0&&z<R-1){const yt=b[z*2]-b[z*2-2],ie=b[z*2+1]-b[z*2-1],Re=Math.hypot(yt,ie)||1;pt=1/Math.max(.6,(yt*at+ie*ct)/Re)}const Ct=-ct*(_/2)*pt,Kt=at*(_/2)*pt,st=P?N+(T-N)*(O[z]/H)+.6+1*Math.sin(Math.PI*O[z]/H):NaN,dt=P?st:t.yAt(G,W)+L,At=P?st:t.yAt(G+Ct,W+Kt)+L,Ft=P?st:t.yAt(G-Ct,W-Kt)+L;k.set([G+Ct,At,W+Kt],z*3),X.set([G,dt,W],z*3),V.set([G-Ct,Ft,W-Kt],z*3),z>0&&g<=3&&r.add(b[z*2-2],b[z*2-1],G,W,g,S,_)}for(let z=0;z<R-1;z++){const G=z*3,W=G+3;if((P||g<=3&&!e.groundDrawsRoads)&&(n.quad(k[G],k[G+1],k[G+2],k[W],k[W+1],k[W+2],X[W],X[W+1],X[W+2],X[G],X[G+1],X[G+2],A),n.quad(X[G],X[G+1],X[G+2],X[W],X[W+1],X[W+2],V[W],V[W+1],V[W+2],V[G],V[G+1],V[G+2],A)),P){const ut=$(x===2?7297604:13225162);for(const q of[k,V])n.quad(q[G],q[G+1],q[G+2],q[W],q[W+1],q[W+2],q[W],q[W+1]+1.05,q[W+2],q[G],q[G+1]+1.05,q[G+2],ut),n.quad(q[G],q[G+1]-.7,q[G+2],q[W],q[W+1]-.7,q[W+2],q[W],q[W+1],q[W+2],q[G],q[G+1],q[G+2],$(9276036))}}if(g<=3&&!P&&!e.groundDrawsRoads)for(const z of[0,R-1]){const G=X[z*3],W=X[z*3+1],ut=X[z*3+2],q=8;for(let at=0;at<q;at++){const ct=at/q*Math.PI*2,mt=(at+1)/q*Math.PI*2;n.tri(G,W,ut,G+Math.cos(mt)*_/2,W,ut+Math.sin(mt)*_/2,G+Math.cos(ct)*_/2,W,ut+Math.sin(ct)*_/2,A)}}if((g<=1||e.suburbMarkings&&g<=3&&_>=6.5)&&!(M&Is)&&H>20){let z=0;for(let G=4;G<H-4;G+=12){for(;z<R-2&&O[z+1]<G;)z++;const W=(G-O[z])/(O[z+1]-O[z]||1),ut=X[z*3]+(X[z*3+3]-X[z*3])*W,q=X[z*3+1]+(X[z*3+4]-X[z*3+1])*W,at=X[z*3+2]+(X[z*3+5]-X[z*3+2])*W;let ct=X[z*3+3]-X[z*3],mt=X[z*3+5]-X[z*3+2];const pt=Math.hypot(ct,mt)||1;ct/=pt,mt/=pt;const Ct=(X[z*3+4]-X[z*3+1])/pt*3,Kt=-mt*.16,st=ct*.16,dt=.05;s.quad(ut+Kt,q+dt,at+st,ut+ct*3+Kt,q+Ct+dt,at+mt*3+st,ut+ct*3-Kt,q+Ct+dt,at+mt*3-st,ut-Kt,q+dt,at-st,qh)}}if(M&Is){let z=0,G=0;for(let mt=0;mt<R;mt++)z+=b[mt*2],G+=b[mt*2+1];z/=R,G/=R;const W=R>>1,ut=v_(b[0],b[1],b[W*2],b[W*2+1],b[R*2-2],b[R*2-1]),q=ut?ut.x:z,at=ut?ut.z:G,ct=ut?ut.r:Math.hypot(b[0]-z,b[1]-G);ct>3&&ct<40&&!a.some(mt=>Math.hypot(mt.x-q,mt.z-at)<12)&&a.push({x:q,z:at,r:ct,w:_})}g<=3&&o.push({index:p,cls:g,name:S>=0?i.names[S]:"",width:_,flags:M,pts:X,length:H,nameIdx:S})}if(e.suburbMarkings)for(const p of o){if(p.cls<2||p.flags&(Vr|Is)||p.width<5.5||p.length<12)continue;const g=p.pts,x=g.length/3;for(const M of[0,1]){const y=M?x-1:0,S=M?x-2:1,E=g[y*3],_=g[y*3+2];let b=E-g[S*3],R=_-g[S*3+2];const A=Math.hypot(b,R)||1;b/=A,R/=A;let L=0,P=9,N=!1;if(r.near(E,_,1,(z,G,W,ut)=>{W!==p.nameIdx&&z<.8&&(G<P&&(P=G),ut>L&&(L=ut))}),!L||P>p.cls||(r.near(E+b*2,_+R*2,.6,(z,G,W)=>{W===p.nameIdx&&(N=!0)}),N))continue;const T=L/2+1.3,O=E-b*T,H=_-R*T,k=R,X=-b,V=t.yAt(O,H)+(e.groundDrawsRoads?$h:Yh[p.cls])+.05;for(let z=.2;z+.5<p.width/2-.3;z+=1.1){const G=O+k*z,W=H+X*z,ut=O+k*(z+.55),q=H+X*(z+.55);s.quad(G+b*.15,V,W+R*.15,ut+b*.15,V,q+R*.15,ut-b*.15,V,q-R*.15,G-b*.15,V,W-R*.15,qh)}}}const l=$(13158078),c=$(7314002),h=$(4943936);for(const p of a){const g=p.r-p.w/2-.3;if(g<1.2)continue;const x=t.yAt(p.x,p.z)+.2;n.frame(p.x,x,p.z,0),n.cyl(0,0,0,g,g,.4,14,l,c),n.blob(0,.9,0,g*.45,.8,g*.45,6,3,h,$(7181400)),n.frame()}const d=new Ye({vertexColors:!0,roughness:.92,metalness:0,side:Ee,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),u=new Jt(Kh(n.build()),d);u.receiveShadow=!0,u.name="roads";const f=il(new Wn({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})),m=new Jt(Kh(s.build()),f);m.name="road-markings";const v=new Ie;return v.add(u,m),{group:v,index:r,paths:o}}function Kh(i){return i.deleteAttribute("glow"),i}function v_(i,t,e,n,s,r){const o=2*(i*(n-r)+e*(r-t)+s*(t-n));if(Math.abs(o)<.001)return null;const a=i*i+t*t,l=e*e+n*n,c=s*s+r*r,h=(a*(n-r)+l*(r-t)+c*(t-n))/o,d=(a*(s-e)+l*(i-s)+c*(e-i))/o;return{x:h,z:d,r:Math.hypot(i-h,t-d)}}const Ns=-36,M_=170,S_=`
float invHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float invNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(invHash(i), invHash(i + vec2(1.0, 0.0)), f.x), mix(invHash(i + vec2(0.0, 1.0)), invHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
`,Us=4,Zh=4,y_=`
          {
            // metres across one screen pixel: the blades and grit only show where a pixel is smaller than they are
            float px = max(length(dFdx(w)), length(dFdy(w)));
            float fine = close * (1.0 - smoothstep(0.03, 0.16, px)) * (1.0 - sharp);
            float mid = close * (1.0 - smoothstep(0.2, 0.9, px)) * (1.0 - sharp);
            vec3 c = diffuseColor.rgb;
            float lawn = smoothstep(0.0, 0.035, c.g - max(c.r, c.b));
            float sat = max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
            float sealed = (1.0 - lawn) * (1.0 - smoothstep(0.03, 0.1, sat));
            // lawn: clumps, blades (finer along one way than the other), and patches gone dry
            float clumps = invNoise(w * 2.3) * 0.6 + invNoise(w * 6.1 + 3.0) * 0.4;
            float blades = invNoise(vec2(w.x * 26.0 + invNoise(w * 3.1) * 5.0, w.y * 11.0));
            float dry = smoothstep(0.55, 0.82, invNoise(w * 0.17 + 7.0));
            vec3 grass = c * (0.84 + 0.3 * clumps);
            grass = mix(grass, grass * vec3(1.2, 1.04, 0.7), dry * 0.45);
            grass *= 1.0 + (blades - 0.5) * 0.5 * fine;
            // sealed and bare ground: stains, then grit
            float stain = invNoise(w * 1.7 + 11.0) * 0.6 + invNoise(w * 5.3) * 0.4;
            float grit = invHash(floor(w * 31.0)) * 0.6 + invNoise(w * 13.0) * 0.4;
            vec3 hard = c * (0.92 + 0.15 * stain) * (1.0 + (grit - 0.5) * 0.28 * fine);
            c = mix(c, grass, lawn * mid);
            c = mix(c, hard, (1.0 - lawn) * mix(0.55, 1.0, sealed) * mid);
            diffuseColor.rgb = c;
          }`,b_=`
        if (kinds.a > 0.5) {
          const float EDGE = 128.0 / 255.0;
          // metres to the nearest edge are (value - EDGE) * 255 / 80
          float v[4];
          v[0] = kinds.r; v[1] = kinds.g; v[2] = kinds.b; v[3] = EDGE; // lawn, asphalt, concrete, and everything else
          int top = 3, next = 3;
          float a = EDGE, b = -1.0;
          for (int i = 0; i < 3; i++) {
            if (v[i] > a) { b = a; next = top; a = v[i]; top = i; }
            else if (v[i] > b) { b = v[i]; next = i; }
          }
          float px = max(length(dFdx(w)), length(dFdy(w)));
          float nearBy = 1.0 - smoothstep(320.0, 520.0, camDist);
          float fine = nearBy * (1.0 - smoothstep(0.03, 0.16, px));
          float mid = nearBy * (1.0 - smoothstep(0.2, 0.9, px));
          vec3 painted = diffuseColor.rgb;
          // the broad colour of the ground here: the ground picture read very coarsely (13 m), so none of its
          // pixels or blotches show. Close up, nothing in a block is the picture itself.
          vec3 tone = painted;
          #ifdef USE_MAP
            tone = texture2D(map, vMapUv, 4.0).rgb;
          #endif
          vec3 col[4];
          {
            // lawn: the painted green where there is one, with clumps, blades and patches gone dry
            vec3 c = mix(vec3(0.105, 0.215, 0.052), tone, 0.45 * smoothstep(0.0, 0.05, tone.g - max(tone.r, tone.b)));
            float clumps = invNoise(w * 2.3) * 0.6 + invNoise(w * 6.1 + 3.0) * 0.4;
            float blades = invNoise(vec2(w.x * 26.0 + invNoise(w * 3.1) * 5.0, w.y * 11.0));
            float dry = smoothstep(0.55, 0.82, invNoise(w * 0.17 + 7.0));
            c *= mix(1.0, 0.82 + 0.34 * clumps, mid);
            c = mix(c, c * vec3(1.22, 1.04, 0.68), dry * 0.45);
            col[0] = c * (1.0 + (blades - 0.5) * 0.5 * fine);
          }
          {
            // asphalt: stains, fine aggregate, and here and there a crack
            float stain = invNoise(w * 1.1 + 5.0) * 0.6 + invNoise(w * 4.7) * 0.4;
            float grit = invHash(floor(w * 31.0)) * 0.6 + invNoise(w * 13.0) * 0.4;
            float crack = (1.0 - smoothstep(0.0, 0.014, abs(invNoise(w * 0.45 + 40.0) - 0.5))) * step(0.55, invNoise(w * 0.12 + 3.0));
            // the cracks only from near: from further off they break up into dotted lines
            col[1] = vec3(0.082, 0.086, 0.094) * mix(1.0, 0.86 + 0.28 * stain, mid) * (1.0 + (grit - 0.5) * 0.4 * fine) * (1.0 - 0.3 * crack * fine);
          }
          {
            // concrete: paler, with weathering, a finer grit and the odd crack
            float stain = invNoise(w * 1.6 + 21.0) * 0.6 + invNoise(w * 6.3 + 2.0) * 0.4;
            float grit = invHash(floor(w * 43.0)) * 0.5 + invNoise(w * 17.0) * 0.5;
            float crack = (1.0 - smoothstep(0.0, 0.012, abs(invNoise(w * 0.6 + 80.0) - 0.5))) * step(0.6, invNoise(w * 0.15 + 9.0));
            col[2] = vec3(0.50, 0.485, 0.435) * mix(1.0, 0.9 + 0.2 * stain, mid) * (1.0 + (grit - 0.5) * 0.22 * fine) * (1.0 - 0.22 * crack * fine);
          }
          {
            // everything else (garden beds, bare earth): soil and mulch, lumpy, with leaf litter
            float lumps = invNoise(w * 3.3 + 13.0) * 0.6 + invNoise(w * 9.0) * 0.4;
            float litter = invHash(floor(w * 21.0)) * 0.6 + invNoise(w * 12.0 + 4.0) * 0.4;
            col[3] = mix(vec3(0.118, 0.085, 0.058), tone, 0.4) * mix(1.0, 0.78 + 0.44 * lumps, mid) * (1.0 + (litter - 0.5) * 0.55 * fine);
          }
          // the edge between the two kinds that matter here: sharp, softened only across one screen pixel
          float gap = a - b;
          float t = 0.5 + 0.5 * smoothstep(0.0, max(fwidth(gap), 1e-5) * 1.2, gap);
          vec3 c = mix(col[next], col[top], t);
          // a thin dark line along the edge, as where lawn meets a path
          float edgeMetres = gap * (255.0 / 80.0) * (top == 3 || next == 3 ? 1.0 : 0.5);
          c *= 1.0 - 0.22 * (1.0 - smoothstep(0.02, 0.07, edgeMetres)) * fine;
          // from further off the ground picture takes over again
          diffuseColor.rgb = mix(painted, c, nearBy);
          sharp = nearBy;
        }`;function E_(i,t,e,n,s={}){const{nx:r,nz:o}=i,a=new Float32Array(r*o*3),l=new Float32Array(r*o*3),c=new Float32Array(r*o*2);for(let _=0;_<o;_++)for(let b=0;b<r;b++){const R=_*r+b,A=i.xMin+b*i.dx,L=i.zMin+_*i.dz;a[R*3]=A,a[R*3+1]=i.y[R],a[R*3+2]=L,c[R*2]=(A+i.sizeX/2)/i.sizeX,c[R*2+1]=1-(L+i.sizeZ/2)/i.sizeZ;const P=i.y[_*r+Math.max(b-1,0)],N=i.y[_*r+Math.min(b+1,r-1)],T=i.y[Math.max(_-1,0)*r+b],O=i.y[Math.min(_+1,o-1)*r+b],H=(N-P)/(2*i.dx),k=(O-T)/(2*i.dz),X=Math.hypot(H,1,k);l[R*3]=-H/X,l[R*3+1]=1/X,l[R*3+2]=-k/X}const h=new Uint32Array((r-1)*(o-1)*6);let d=0;for(let _=0;_<o-1;_++)for(let b=0;b<r-1;b++){const R=_*r+b,A=R+1,L=R+r,P=L+1;h[d++]=R,h[d++]=L,h[d++]=A,h[d++]=A,h[d++]=L,h[d++]=P}const u=new Ae;u.setAttribute("position",new Pe(a,3)),u.setAttribute("normal",new Pe(l,3)),u.setAttribute("uv",new Pe(c,2)),u.setIndex(new Pe(h,1)),u.computeBoundingSphere();const f=new Ye({map:t,roughness:.96,metalness:0}),m=new ys(new Uint8Array([128,128,128,255]),1,1);m.needsUpdate=!0;const v=Us+Zh,p=Array.from({length:v},()=>({value:m})),g=Array.from({length:v},()=>({value:new Me(0,0,1,1)})),x=Array.from({length:v},()=>({value:0})),M={set(_,b,R){p[_].value=b??m,x[_].value=b?1:0,R&&g[_].value.set(...R)}},y=Array.from({length:v},(_,b)=>b);f.onBeforeCompile=_=>{_.uniforms.uTide=e,_.uniforms.uJitter={value:new Bt(.6/i.sizeX,.6/i.sizeZ)};for(const b of y)_.uniforms[`uDetail${b}`]=p[b],_.uniforms[`uDetailRect${b}`]=g[b],_.uniforms[`uDetailOn${b}`]=x[b];_.vertexShader=_.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),_.fragmentShader=_.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform float uTide;
uniform vec2 uJitter;
${y.map(b=>`uniform sampler2D uDetail${b};
uniform vec4 uDetailRect${b};
uniform float uDetailOn${b};`).join(`
`)}
${S_}`).replace("#include <map_fragment>",`
        float camDist = length(cameraPosition - vWPos);
        vec2 w = vWPos.xz;
        float close = ${s.closeUp?"1.0 - smoothstep(110.0, 380.0, camDist)":"0.0"};
        // close up, the colour is looked up a little to one side, differently at every point: the picture's pixel edges become ragged, not blurred squares
        vec2 guv = vMapUv + (vec2(invNoise(w * 1.4) + 0.5 * invNoise(w * 4.3 + 17.0), invNoise(w * 1.4 + 31.7) + 0.5 * invNoise(w * 4.3 + 5.3)) / 1.5 - 0.5) * 2.0 * uJitter * close;
        #ifdef USE_MAP
          diffuseColor *= texture2D(map, guv);
        #endif
        float sharp = 0.0;
        ${y.slice(0,Us).map(b=>`if (uDetailOn${b} > 0.5) {
          // a slot with no tile in it is skipped altogether: nothing is read for it
          vec2 duv = (guv - uDetailRect${b}.xy) / (uDetailRect${b}.zw - uDetailRect${b}.xy);
          vec4 fine = texture2D(uDetail${b}, clamp(duv, 0.0, 1.0));
          float inside = step(0.0, duv.x) * step(duv.x, 1.0) * step(0.0, duv.y) * step(duv.y, 1.0);
          diffuseColor.rgb = mix(diffuseColor.rgb, fine.rgb, inside);
        }`).join(`
`)}
        // what the ground is made of here, if a block says: lawn, asphalt, concrete (128 is the edge of each)
        vec4 kinds = vec4(0.0);
        ${y.slice(Us).map(b=>`if (uDetailOn${b} > 0.5) {
          vec2 duv = (vMapUv - uDetailRect${b}.xy) / (uDetailRect${b}.zw - uDetailRect${b}.xy);
          if (duv.x >= 0.0 && duv.x <= 1.0 && duv.y >= 0.0 && duv.y <= 1.0) kinds = vec4(texture2D(uDetail${b}, duv).rgb, 1.0);
        }`).join(`
`)}
        ${b_}
        ${s.closeUp?y_:""}
        {
          float nearFade = 1.0 - smoothstep(300.0, 1600.0, camDist);
          float grain = invNoise(vWPos.xz * 0.85) * 0.55 + invNoise(vWPos.xz * 0.21) * 0.45;
          diffuseColor.rgb *= mix(1.0, 0.84 + 0.32 * grain, nearFade * (1.0 - 0.8 * sharp));
          float above = vWPos.y / ${i.vex.toFixed(2)} - uTide;
          float wet = smoothstep(0.45, 0.03, above);
          diffuseColor.rgb *= mix(1.0, 0.76, wet);
        }`)},f.customProgramCacheKey=()=>`town-terrain-${i.vex}-${s.closeUp?1:0}`;const S=new Jt(u,f);S.receiveShadow=!0,S.name="terrain";const E=new Ie;return E.add(S,T_(i),A_(i,n)),E.userData.detail=M,E}function w_(i){const t=[];for(let e=0;e<i.nx;e++)t.push([i.xMin+e*i.dx,i.zMin]);for(let e=1;e<i.nz;e++)t.push([i.xMax,i.zMin+e*i.dz]);for(let e=i.nx-2;e>=0;e--)t.push([i.xMin+e*i.dx,i.zMax]);for(let e=i.nz-2;e>=1;e--)t.push([i.xMin,i.zMin+e*i.dz]);return t}function T_(i){const t=w_(i),e=t.length,n=[],s=[],r=[],o=new Rt(9074780),a=new Rt(6180669),l=new Rt(3813673),c=[[0,o,a],[1,a,l]];for(let u=0;u<e;u++){const[f,m]=t[u],[v,p]=t[(u+1)%e],g=i.yAt(f,m),x=i.yAt(v,p),M=v-f,y=p-m,S=Math.hypot(M,y)||1,E=-y/S*-1,_=M/S*-1;for(const[b,R,A]of c){const P=b===0?g:g-6,N=b===0?g-6:Ns,T=b===0?x:x-6,O=b===0?x-6:Ns;n.push(f,P,m,v,T,p,v,O,p,f,P,m,v,O,p,f,N,m);for(const H of[R,R,A,R,A,A])s.push(H.r,H.g,H.b);for(let H=0;H<6;H++)r.push(E,0,_)}}const h=new Ae;h.setAttribute("position",new re(n,3)),h.setAttribute("normal",new re(r,3)),h.setAttribute("color",new re(s,3));const d=new Jt(h,new Ye({vertexColors:!0,roughness:1,side:Ee}));return d.name="skirt",d}function A_(i,t){const e=new Ie,n=t.scale??1,s=M_*n,r=i.xMax-i.xMin+s*2,o=i.zMax-i.zMin+s*2,a=190*n,l=(i.xMin+i.xMax)/2,c=(i.zMin+i.zMax)/2,h=new Jt(new Mi(r,a,o),new Ye({color:1779245,roughness:.75,metalness:.1}));h.position.set(l,Ns-a/2,c),h.receiveShadow=!0,e.add(h);const d=document.createElement("canvas");d.width=2048,d.height=160;const u=d.getContext("2d");u.fillStyle="#1b262d",u.fillRect(0,0,d.width,d.height),u.fillStyle="#e9d9a6",u.textBaseline="middle",u.font="600 78px 'Space Grotesk', system-ui, sans-serif",u.fillText(t.title,40,84);const f=u.measureText(t.title).width;u.fillStyle="#9fb4bd",u.font="400 42px 'Space Grotesk', system-ui, sans-serif",u.fillText(t.subtitle,40+f+46,88);const m=new Ar(d);m.colorSpace=Te,m.anisotropy=8;const v=1700*n,p=new Jt(new ci(v,v*(d.height/d.width)),new Wn({map:m,toneMapped:!1}));p.position.set(l-r/2+v/2+110*n,Ns-a/2,c+o/2+.6),e.add(p);const g=document.createElement("canvas");g.width=g.height=256;const x=g.getContext("2d");x.fillStyle="#e9d9a6",x.beginPath(),x.moveTo(128,18),x.lineTo(176,150),x.lineTo(128,122),x.lineTo(80,150),x.closePath(),x.fill(),x.font="700 86px 'Space Grotesk', system-ui, sans-serif",x.textAlign="center",x.fillText("N",128,240);const M=new Ar(g);M.colorSpace=Te;const y=new Jt(new ci(130*n,130*n),new Wn({map:M,transparent:!0,toneMapped:!1}));return y.rotation.x=-Math.PI/2,y.position.set(i.xMax+s/2,Ns+.6,i.zMin+120*n),e.add(y),e}const Wr=128,R_=`
self.onmessage = async (e) => {
  const { id, url, rows } = e.data;
  try {
    if (typeof OffscreenCanvas === "undefined" || typeof createImageBitmap === "undefined") throw new Error("unsupported");
    const r = await fetch(url);
    if (!r.ok) throw new Error("HTTP " + r.status);
    const bmp = await createImageBitmap(await r.blob(), { imageOrientation: "flipY", premultiplyAlpha: "none", colorSpaceConversion: "none" });
    const w = bmp.width, h = bmp.height;
    const g = new OffscreenCanvas(w, rows).getContext("2d", { willReadFrequently: true });
    if (!g) throw new Error("unsupported");
    self.postMessage({ id, width: w, height: h });
    for (let y = 0; y < h; y += rows) {
      const n = Math.min(rows, h - y);
      g.drawImage(bmp, 0, y, w, n, 0, 0, w, n);
      const d = g.getImageData(0, 0, w, n).data;
      self.postMessage({ id, y, h: n, data: d.buffer }, [d.buffer]);
    }
    bmp.close();
    self.postMessage({ id, done: true });
  } catch (err) {
    self.postMessage({ id, error: String(err && err.message || err) });
  }
};
`;class C_{constructor(t){nt(this,"jobs",new Map);nt(this,"order",[]);nt(this,"nextId",1);nt(this,"worker");nt(this,"onPage");nt(this,"longest",0);nt(this,"pieces",0);nt(this,"scratch");this.renderer=t,this.onPage=typeof Worker>"u"||new URLSearchParams(window.location.search).get("tileworker")==="0"}get busy(){return this.order.length>0}load(t,e=1,n=!1,s){return new Promise((r,o)=>{const a=this.nextId++;this.jobs.set(a,{url:t,anisotropy:e,data:n,edit:s,width:0,height:0,strips:[],cut:!1,sent:0,resolve:r,reject:o}),this.order.push(a);const l=new URL(t,document.baseURI).href;this.onPage?this.cutOnPage(a,l):this.cutOnWorker(a,l)})}cutOnWorker(t,e){try{this.worker||(this.worker=new Worker(URL.createObjectURL(new Blob([R_],{type:"text/javascript"}))),this.worker.onmessage=n=>{const s=n.data,r=this.jobs.get(s.id);r&&(s.error==="unsupported"?(this.onPage=!0,this.cutOnPage(s.id,new URL(r.url,document.baseURI).href)):s.error?r.failed=new Error(s.error):s.done?r.cut=!0:s.data?r.strips.push({y:s.y,h:s.h,data:new Uint8Array(s.data)}):(r.width=s.width,r.height=s.height))},this.worker.onerror=()=>{this.onPage=!0,this.worker=void 0;for(const[n,s]of this.jobs)!s.width&&!s.failed&&this.cutOnPage(n,new URL(s.url,document.baseURI).href)}),this.worker.postMessage({id:t,url:e,rows:Wr})}catch{this.onPage=!0,this.cutOnPage(t,e)}}async cutOnPage(t,e){const n=this.jobs.get(t);if(n)try{const s=await fetch(e);if(!s.ok)throw new Error(`HTTP ${s.status}`);const r=await createImageBitmap(await s.blob(),{imageOrientation:"flipY",premultiplyAlpha:"none",colorSpaceConversion:"none"});n.width=r.width,n.height=r.height;for(let o=0;o<r.height;o+=Wr){const a=Math.min(Wr,r.height-o),l=await createImageBitmap(r,0,o,r.width,a);if(!this.jobs.has(t))return l.close();n.strips.push({y:o,h:a,data:l})}r.close(),n.cut=!0}catch(s){n.failed=s instanceof Error?s:new Error(String(s))}}step(){var o,a;const t=this.order[0];if(t===void 0)return!1;const e=this.jobs.get(t);if(e.failed)return this.finish(t),(o=e.tex)==null||o.dispose(),e.reject(e.failed),this.busy;if(!e.width)return!0;const n=performance.now(),s=this.renderer.getContext(),r=this.renderer.state;if(e.tex){const l=this.renderer.properties.get(e.tex).__webglTexture;r.activeTexture(s.TEXTURE0),r.bindTexture(s.TEXTURE_2D,l);const c=e.strips.shift();if(c){if(r.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE),e.edit&&!(c.data instanceof Uint8Array)){const h=this.pixelsOf(c.data,e.width,c.h);c.data.close(),c.data=h}c.data instanceof Uint8Array?((a=e.edit)==null||a.call(e,c.data,c.y,c.h,e.width,e.height),s.texSubImage2D(s.TEXTURE_2D,0,0,c.y,e.width,c.h,s.RGBA,s.UNSIGNED_BYTE,c.data)):(s.texSubImage2D(s.TEXTURE_2D,0,0,c.y,e.width,c.h,s.RGBA,s.UNSIGNED_BYTE,c.data),c.data.close()),e.sent+=c.h}else e.cut&&e.sent>=e.height&&(s.generateMipmap(s.TEXTURE_2D),this.finish(t),e.resolve(e.tex))}else{const l=new ys(null,e.width,e.height,dn,je);l.colorSpace=e.data?Fn:Te,l.wrapS=l.wrapT=hn,l.magFilter=We,l.minFilter=En,l.generateMipmaps=!0,l.flipY=!1,l.anisotropy=e.anisotropy,l.source.dataReady=!1,l.needsUpdate=!0,this.renderer.initTexture(l),e.tex=l}return this.pieces++,this.longest=Math.max(this.longest,performance.now()-n),this.busy}pixelsOf(t,e,n){const s=this.scratch??(this.scratch=document.createElement("canvas"));(s.width!==e||s.height<n)&&(s.width=e,s.height=Math.max(n,Wr));const r=s.getContext("2d",{willReadFrequently:!0});return r.clearRect(0,0,e,n),r.drawImage(t,0,0),new Uint8Array(r.getImageData(0,0,e,n).data.buffer)}finish(t){this.jobs.delete(t),this.order=this.order.filter(e=>e!==t)}dispose(){var t,e;(t=this.worker)==null||t.terminate();for(const n of this.jobs.values()){(e=n.tex)==null||e.dispose();for(const s of n.strips)s.data instanceof Uint8Array||s.data.close()}this.jobs.clear(),this.order=[]}}const P_=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,L_=`
uniform sampler2D tField;   // r = sea bed / ground height (m), g = open-ocean exposure
uniform vec2 uSize;
uniform float uTide;
uniform float uTime;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uShallow;
uniform vec3 uDeep;
uniform vec3 uSky;
uniform float uFoam;
varying vec3 vW;

float wHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float wNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(wHash(i), wHash(i + vec2(1.0, 0.0)), f.x), mix(wHash(i + vec2(0.0, 1.0)), wHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
// wind chop: several octaves of drifting noise, each faded out before it can alias
float chopHeight(vec2 p, float pix) {
  float h = 0.0;
  h += wNoise(p / 2.4 + vec2(uTime * 0.42, uTime * 0.27)) * 0.085 * (1.0 - smoothstep(0.22, 0.6, pix / 2.4));
  h += wNoise(p / 6.1 + vec2(-uTime * 0.25, uTime * 0.33)) * 0.20 * (1.0 - smoothstep(0.22, 0.6, pix / 6.1));
  h += wNoise(p / 16.0 + vec2(uTime * 0.14, -uTime * 0.19)) * 0.46 * (1.0 - smoothstep(0.22, 0.6, pix / 16.0));
  h += wNoise(p / 47.0 + vec2(uTime * 0.07, uTime * 0.05)) * 1.05 * (1.0 - smoothstep(0.22, 0.6, pix / 47.0));
  return h;
}
vec2 swell(vec2 p, vec2 dir, float wavelength, float speed, float slope, float pix) {
  float k = 6.2831853 / wavelength;
  float fade = 1.0 - smoothstep(0.18, 0.5, pix / wavelength);
  return dir * (cos(dot(dir, p) * k + uTime * speed * k) * slope * fade);
}

void main() {
  vec2 uv = (vW.xz + uSize * 0.5) / uSize;
  vec2 field = texture2D(tField, uv).rg;
  float depth = uTide - field.r;
  if (depth < -0.03) discard;
  float expo = field.g;
  vec2 p = vW.xz;
  float pix = max(fwidth(p.x), fwidth(p.y));

  float chop = mix(0.6, 1.2, expo);
  float e = max(0.45, pix);
  float h0 = chopHeight(p, pix);
  vec2 g = vec2(chopHeight(p + vec2(e, 0.0), pix) - h0, chopHeight(p + vec2(0.0, e), pix) - h0) / e * chop;
  // long ocean swell, only on the open coast
  g += swell(p, normalize(vec2(0.25, -0.97)), 38.0, 2.4, 0.03 * expo, pix);
  g += swell(p, normalize(vec2(-0.2, -0.98)), 21.0, 1.8, 0.022 * expo, pix);
  vec3 n = normalize(vec3(-g.x, 1.0, -g.y));
  vec3 V = normalize(cameraPosition - vW);

  // body colour: sand shows through the shallows, channels go deep green-blue
  float k = 1.0 - exp(-depth * 0.5);
  vec3 col = mix(uShallow, uDeep, k);
  float patches = wNoise(p * 0.004 + uTime * 0.01) * 0.5 + wNoise(p * 0.0011) * 0.5;
  col *= 0.93 + 0.14 * patches;
  float alpha = (0.26 + 0.70 * (1.0 - exp(-depth * 1.15))) * smoothstep(-0.03, 0.06, depth);

  float fres = 0.03 + 0.97 * pow(1.0 - max(dot(n, V), 0.0), 5.0);
  col = mix(col, uSky, fres * 0.7);
  alpha = max(alpha, fres * 0.75 * smoothstep(0.0, 0.2, depth));

  vec3 H = normalize(V + uSunDir);
  float ndh = max(dot(n, H), 0.0);
  col += uSunColor * (pow(ndh, 140.0) * 0.75 + pow(ndh, 18.0) * 0.035);

  // surf: a few lines of white water rolling in over the open-coast shallows
  float breakup = wNoise(p * 0.05 + vec2(uTime * 0.05, 0.0));
  float phase = depth * 9.0 + uTime * 0.7 + breakup * 3.2;
  float crisp = 1.0 - smoothstep(0.7, 2.0, fwidth(phase));
  float zone = smoothstep(1.7, 0.5, depth) * smoothstep(0.03, 0.25, depth);
  float band = pow(max(sin(phase), 0.0), 9.0);
  float surf = mix(0.14, band, crisp) * zone * expo * expo * (0.3 + 0.7 * breakup);
  float lace = smoothstep(0.16, 0.0, depth) * (0.35 + 0.65 * wNoise(p * 0.6 + uTime * 0.3)) * mix(0.45, 1.0, expo);
  float foam = clamp(max(surf, lace) * uFoam, 0.0, 1.0);
  col = mix(col, vec3(0.97, 0.98, 0.98) * (0.35 + 0.65 * uFoam), foam);
  alpha = max(alpha, foam * 0.92);

  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function D_(i,t){const e=i.w*i.h,n=new Uint16Array(e*2);for(let f=0;f<e;f++)n[f*2]=Tc.toHalfFloat(i.raw[f]),n[f*2+1]=Tc.toHalfFloat(i.exposure[f]);const s=new ys(n,i.w,i.h,ii,fn);s.minFilter=s.magFilter=We,s.wrapS=s.wrapT=hn,s.needsUpdate=!0;const r={tField:{value:s},uSize:{value:new Bt(i.sizeX,i.sizeZ)},uTide:t,uTime:{value:0},uSunDir:{value:new Q(.4,.8,.3).normalize()},uSunColor:{value:new Rt(16773848)},uShallow:{value:new Rt(7129789)},uDeep:{value:new Rt(937848)},uSky:{value:new Rt(12573938)},uFoam:{value:1}},o=new Xn({uniforms:r,vertexShader:P_,fragmentShader:L_,transparent:!0,depthWrite:!1}),a=new ci(i.xMax-i.xMin,i.zMax-i.zMin);a.rotateX(-Math.PI/2);const l=new Jt(a,o);l.position.set((i.xMin+i.xMax)/2,t.value*i.vex,(i.zMin+i.zMax)/2),l.renderOrder=2,l.name="water";const c=new Jt(new Ae,new Wn({color:1929103,transparent:!0,opacity:.8,side:Ee,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));c.renderOrder=1,c.name="water-edge";const h=[];for(let f=0;f<i.nx;f++)h.push([i.xMin+f*i.dx,i.zMin]);for(let f=1;f<i.nz;f++)h.push([i.xMax,i.zMin+f*i.dz]);for(let f=i.nx-2;f>=0;f--)h.push([i.xMin+f*i.dx,i.zMax]);for(let f=i.nz-2;f>=1;f--)h.push([i.xMin,i.zMin+f*i.dz]);const d=h.map(([f,m])=>i.yAt(f,m)),u=f=>{t.value=f;const m=f*i.vex;l.position.y=m;const v=[],p=h.length;for(let x=0;x<p;x++){const M=(x+1)%p,y=d[x],S=d[M];if(y>=m&&S>=m)continue;const[E,_]=h[x],[b,R]=h[M],A=Math.min(y,m),L=Math.min(S,m);v.push(E,m,_,b,m,R,b,L,R,E,m,_,b,L,R,E,A,_)}c.geometry.dispose();const g=new Ae;g.setAttribute("position",new re(v,3)),c.geometry=g};return u(t.value),{mesh:l,skirt:c,uniforms:r,setTide:u}}function Xr(i){const t=i.length/2;let e={cx:0,cz:0,w:0,d:0,heading:0,area:1/0};for(let n=0;n<t;n++){const s=(n+1)%t;let r=i[s*2]-i[n*2],o=i[s*2+1]-i[n*2+1];const a=Math.hypot(r,o);if(a<.5)continue;r/=a,o/=a;let l=1/0,c=-1/0,h=1/0,d=-1/0;for(let f=0;f<t;f++){const m=i[f*2],v=i[f*2+1],p=m*r+v*o,g=-m*o+v*r;p<l&&(l=p),p>c&&(c=p),g<h&&(h=g),g>d&&(d=g)}const u=(c-l)*(d-h);if(u<e.area){const f=(l+c)/2,m=(h+d)/2;e={cx:f*r-m*o,cz:f*o+m*r,w:c-l,d:d-h,heading:Math.atan2(-o,r),area:u}}}return e}function I_(i,t){const e=i.length/2,n=nl(i)>0?1:-1,s=[];for(let r=0;r<e;r++){const o=(r+e-1)%e,a=(r+1)%e;let l=i[r*2]-i[o*2],c=i[r*2+1]-i[o*2+1],h=i[a*2]-i[r*2],d=i[a*2+1]-i[r*2+1];const u=Math.hypot(l,c)||1,f=Math.hypot(h,d)||1;l/=u,c/=u,h/=f,d/=f;const m=-c*n,v=l*n,p=-d*n,g=h*n;let x=m+p,M=v+g;const y=Math.hypot(x,M)||1;x/=y,M/=y;const S=t/Math.max(.4,x*m+M*v);s.push(i[r*2]+x*S,i[r*2+1]+M*S)}return s}function qr(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Int16Array(e.buffer,0,e.length>>1)}async function Jh(i){const t=new Uint8Array(i),e=new DataView(i);let n=8,s=0,r=0,o=0,a=0,l=0;const c=[];for(;n<t.length;){const v=e.getUint32(n),p=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]);if(p==="IHDR")s=e.getUint32(n+8),r=e.getUint32(n+12),o=t[n+16],a=t[n+17],l=t[n+20];else if(p==="IDAT")c.push(t.subarray(n+8,n+8+v));else if(p==="IEND")break;n+=12+v}if(o!==8||a!==2&&a!==6||l)throw new Error("Unsupported terrain image format");const h=a===2?3:4,d=new Blob(c).stream().pipeThrough(new DecompressionStream("deflate")),u=new Uint8Array(await new Response(d).arrayBuffer()),f=s*h,m=new Uint8Array(f*r);for(let v=0;v<r;v++){const p=u[v*(f+1)],g=v*(f+1)+1,x=v*f;for(let M=0;M<f;M++){const y=M>=h?m[x+M-h]:0,S=v>0?m[x-f+M]:0,E=M>=h&&v>0?m[x-f+M-h]:0;let _=u[g+M];if(p===1)_+=y;else if(p===2)_+=S;else if(p===3)_+=y+S>>1;else if(p===4){const b=Math.abs(S-E),R=Math.abs(y-E),A=Math.abs(y+S-2*E);_+=b<=R&&b<=A?y:R<=A?S:E}m[x+M]=_&255}}return{width:s,height:r,channels:h,data:m}}function N_(i,t,e){const n=i.width*i.height,s=new Float32Array(n);for(let r=0;r<n;r++)s[r]=(i.data[r*i.channels]<<8|i.data[r*i.channels+1])/t-e;return s}const $n=4,ln=7;function Qh(i){return i.colorSpace=Te,i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=En,i}async function U_(i,t,e){let n=0;const s=c=>t(++n/4,c);t(0,"Fetching map data");const[r,o,a]=await Promise.all([fetch(i.town,{signal:e}).then(c=>{if(!c.ok)throw new Error("Could not load the suburb data");return c.json()}).then(c=>(s("Streets and buildings"),c)),fetch(i.height,{signal:e}).then(c=>{if(!c.ok)throw new Error("Could not load the terrain");return c.arrayBuffer()}).then(Jh).then(c=>(s("Terrain"),c)),new Zc().loadAsync(i.ground).then(c=>(s("Ground texture"),c))]),l=r.meta;return s("Building the model"),{town:{...r,buildings:qr(r.buildings),cars:qr(r.cars),trees:qr(r.trees),fences:r.fences?qr(r.fences):new Int16Array(0)},heights:N_(o,l.heightScale,l.heightOffset),ground:Qh(a)}}async function F_(i){return Qh(await new Zc().loadAsync(i))}const jh=[16052712,15327951,14673377,13621459,13095900,15129023,12174512,10990520,15786948,14273976,9413530,7307142].map($),tu=[10510922,9394760,12158570,13215107,10120021,13807756].map($),eu=[14276300,13224130,14999506,12567492,13682872,11909302,15328988].map($),nu=[13619916,12173748,14275778,10135200,9279388].map($),O_=$(3163994),iu=$(16053230),z_=$(11120304),B_=$(7300956),su=$(12566714),Yr=.05,k_=0,Fs=1,Os=2,$r=new Rt;function ru(i,t,e){return $r.setRGB(i/255,t/255,e/255,Te),[$r.r,$r.g,$r.b]}function G_(i,t,e,n,s){const{cx:r,cz:o,hw:a,hd:l}=t,c=Nt(s,.88);if(a>=l){const h=a-l;i.quad(r-a,e,o+l,r+a,e,o+l,r+h,e+n,o,r-h,e+n,o,s),i.quad(r+a,e,o-l,r-a,e,o-l,r-h,e+n,o,r+h,e+n,o,s),i.tri(r+a,e,o+l,r+a,e,o-l,r+h,e+n,o,c),i.tri(r-a,e,o-l,r-a,e,o+l,r-h,e+n,o,c)}else{const h=l-a;i.quad(r+a,e,o+l,r+a,e,o-l,r,e+n,o-h,r,e+n,o+h,s),i.quad(r-a,e,o-l,r-a,e,o+l,r,e+n,o+h,r,e+n,o-h,s),i.tri(r-a,e,o+l,r+a,e,o+l,r,e+n,o+h,c),i.tri(r+a,e,o-l,r-a,e,o-l,r,e+n,o-h,c)}}function ou(i,t,e,n,s,r,o){const{cx:a,cz:l,hw:c,hd:h}=t;if(c>=h){const d=s*n/h;i.quad(a-c-s,e-d,l+h+s,a+c+s,e-d,l+h+s,a+c+s,e+n,l,a-c-s,e+n,l,r),i.quad(a+c+s,e-d,l-h-s,a-c-s,e-d,l-h-s,a-c-s,e+n,l,a+c+s,e+n,l,r),i.tri(a+c,e,l+h,a+c,e,l-h,a+c,e+n,l,o),i.tri(a-c,e,l-h,a-c,e,l+h,a-c,e+n,l,o)}else{const d=s*n/c;i.quad(a+c+s,e-d,l+h+s,a+c+s,e-d,l-h-s,a,e+n,l-h-s,a,e+n,l+h+s,r),i.quad(a-c-s,e-d,l-h-s,a-c-s,e-d,l+h+s,a,e+n,l+h+s,a,e+n,l-h-s,r),i.tri(a-c,e,l+h,a+c,e,l+h,a,e+n,l+h,o),i.tri(a+c,e,l-h,a-c,e,l-h,a,e+n,l-h,o)}}const H_=1,V_=2,Kr=$(1846090);function W_(i,t,e,n,s,r){const o=t.hw>=t.hd,a=(o?t.hd:t.hw)+s,l=(o?t.hw:t.hd)-(o?t.hd:t.hw)*.55,c=Math.min(Math.max(l,1.2),3.2),h=o?Math.cos(r)<0?1:-1:Math.sin(r)>0?1:-1,d=.28,u=.74,f=.1,m=h*a*(1-d),v=h*a*(1-u),p=e+n*d+f,g=e+n*u+f;o?h>0?i.quad(t.cx-c,p,t.cz+m,t.cx+c,p,t.cz+m,t.cx+c,g,t.cz+v,t.cx-c,g,t.cz+v,Kr):i.quad(t.cx+c,p,t.cz+m,t.cx-c,p,t.cz+m,t.cx-c,g,t.cz+v,t.cx+c,g,t.cz+v,Kr):h>0?i.quad(t.cx+m,p,t.cz+c,t.cx+m,p,t.cz-c,t.cx+v,g,t.cz-c,t.cx+v,g,t.cz+c,Kr):i.quad(t.cx+m,p,t.cz-c,t.cx+m,p,t.cz+c,t.cx+v,g,t.cz+c,t.cx+v,g,t.cz-c,Kr)}function au(i,t,e){let n=!1;const s=i.length/2;for(let r=0,o=s-1;r<s;o=r++){const a=i[r*2],l=i[r*2+1],c=i[o*2],h=i[o*2+1];l>e!=h>e&&t<(c-a)*(e-l)/(h-l)+a&&(n=!n)}return n}function X_(i,t,e){const n=Math.max(.5,Math.max(t,e)/64),s=Math.max(1,Math.round(t/n)),r=Math.max(1,Math.round(e/n)),o=t/s,a=e/r,l=new Uint8Array(s*r);let c=0;for(let f=0;f<r;f++)for(let m=0;m<s;m++)au(i,-t/2+(m+.5)*o,-e/2+(f+.5)*a)&&(l[f*s+m]=1,c++);if(!c)return null;const h=[],d=new Int32Array(s);let u=0;for(let f=0;f<3;f++){d.fill(0);let m=0,v=0,p=0,g=0,x=0;for(let S=0;S<r;S++){for(let _=0;_<s;_++)d[_]=l[S*s+_]?d[_]+1:0;const E=[];for(let _=0;_<=s;_++){const b=_<s?d[_]:0;for(;E.length&&d[E[E.length-1]]>=b;){const R=d[E.pop()],A=E.length?E[E.length-1]+1:0;R*(_-A)>m&&(m=R*(_-A),v=A,p=_-1,g=S-R+1,x=S)}E.push(_)}}const M=(p-v+1)*o,y=(x-g+1)*a;if(!m||M<2.4||y<2.4||f>0&&M*y<9)break;h.push({cx:-t/2+(v+p+1)/2*o,cz:-e/2+(g+x+1)/2*a,hw:M/2,hd:y/2}),u+=m;for(let S=g;S<=x;S++)l.fill(0,S*s+v,S*s+p+1)}return h.length&&u/c>=.7?h:null}function q_(i,t,e,n,s,r,o,a,l,c=0,h=!1,d=!1){const u=e.length/2;let f=1/0,m=-1/0,v=0,p=0;for(let k=0;k<u;k++){const X=t.yAt(e[k*2],e[k*2+1]);X<f&&(f=X),X>m&&(m=X),v+=e[k*2],p+=e[k*2+1]}v/=u,p/=u;const g=Math.min(m,Math.max(f,t.yAt(v,p)))+.1,x=Math.max(n,g+(o===Fs?2.1:2.4),m+1.5),M=x-g,y=Math.max(0,s-x),S=Math.abs(nl(e)),E=Xr(e),_=S/(E.w*E.d||1),b=Math.min(E.w,E.d)/2,[R,A,L]=r;let P=ru(R,A,L);const N=R>A*1.2&&R>L*1.35&&R>105;let T;o===Os?T=eu[Math.floor(l()*eu.length)]:o===Fs?T=l()<.45?ts(P,iu,.35):nu[Math.floor(l()*nu.length)]:T=N&&l()<.6?tu[Math.floor(l()*tu.length)]:jh[Math.floor(l()*jh.length)],a||(T=ts(T,su,.3),P=ts(P,su,.3)),i.frame(0,g,0,0);const O=o===k_&&M>=4.4&&M<6.6?M-2.75:0;if(O?(i.walls(e,f-g-.3,O-.22,ts(Nt(T,.5),B_,.5)),i.walls(e,O-.22,O,iu),i.walls(e,O,M,T)):i.walls(e,f-g-.3,M,T),y<.7||o===Os&&(y<1.3||_<.78))if(o===Os){i.cap(e,M-.05,P),i.walls(e,M-.05,M+.45,Nt(T,.96));const k=Math.min(5,Math.floor(S/350)),X=Math.cos(E.heading),V=Math.sin(E.heading);for(let z=0;z<k;z++){const G=(l()-.5)*E.w*.5,W=(l()-.5)*E.d*.5,ut=E.cx+G*X+W*V,q=E.cz-G*V+W*X;i.box(ut-1.1,M,q-.8,ut+1.1,M+.9,q+.8,z_)}}else i.cap(e,M,P);else if(o===Os)i.frame(E.cx,g,E.cz,E.heading),ou(i,{cx:0,cz:0,hw:E.w/2,hd:E.d/2},M,Math.min(y,b*.45),.3,P,T);else{const k=Math.cos(E.heading),X=Math.sin(E.heading);let V;if(_>=.86)V=[{cx:0,cz:0,hw:E.w/2,hd:E.d/2}];else{const z=[];for(let G=0;G<u;G++){const W=e[G*2]-E.cx,ut=e[G*2+1]-E.cz;z.push(W*k-ut*X,W*X+ut*k)}V=X_(z,E.w,E.d)}if(V){i.cap(e,M-.02,Nt(P,.9)),i.frame(E.cx,g,E.cz,E.heading);const z=Math.min(V[0].hw,V[0].hd),G=Math.min(Math.max(y,.6),z*.95),W=o===Fs?.2:.4;V.forEach((ut,q)=>{const at=Math.min(ut.hw,ut.hd),ct=q===0?G:Math.max(.4,G*at/z),mt=l()<(o===Fs?.7:.36),pt=V.length===1&&(c===V_||c!==H_&&mt);pt?ou(i,ut,M,ct,W,P,T):G_(i,{cx:ut.cx,cz:ut.cz,hw:ut.hw+W,hd:ut.hd+W},M,ct*(at+W)/at,P),q===0&&h&&!d&&W_(i,ut,M,pt?ct:ct*(at+W)/at,pt?0:W,E.heading)})}else{const z=I_(e,Math.min(2.4,Math.sqrt(S)*.2)),G=Math.min(y,1.6);for(let W=0;W<u;W++){const ut=(W+1)%u;i.quad(e[W*2],M,e[W*2+1],e[ut*2],M,e[ut*2+1],z[ut*2],M+G,z[ut*2+1],z[W*2],M+G,z[W*2+1],P)}i.cap(z,M+G,Nt(P,1.04))}}if(o!==Fs&&S<2500&&!d){const k=O?1:Math.min(12,Math.max(1,Math.round(M/3))),X=o===Os?4.4:3.4;for(let V=0;V<u;V++){const z=(V+1)%u,G=e[V*2],W=e[V*2+1],ut=e[z*2],q=e[z*2+1],at=Math.hypot(ut-G,q-W);if(at<3.2)continue;let ct=-(q-W)/at,mt=(ut-G)/at;ct*((G+ut)/2-v)+mt*((W+q)/2-p)<0&&(ct=-ct,mt=-mt);const pt=Math.atan2(ct,mt),Ct=(ut-G)*Math.cos(pt)-(q-W)*Math.sin(pt);i.frame(Ct>0?G:ut,g,Ct>0?W:q,pt);const Kt=Math.floor(at/X);for(let st=0;st<k;st++){const dt=O+st*3+.9;if(dt+1.3>M-.2)break;for(let At=0;At<Kt;At++){const Ft=(At+.5)/Kt*at;i.quad(Ft-.8,dt,Yr,Ft+.8,dt,Yr,Ft+.8,dt+1.3,Yr,Ft-.8,dt+1.3,Yr,O_,l()<.45?1:0)}}}}i.frame()}function Y_(i,t,e=[],n=()=>!1){const s=new Ie;s.name="buildings";const r=qn(),o=420,a=i.buildings,l=e.map(()=>{}),c=v=>{const p=a[v],g=new Array(p*2);for(let x=0;x<p*2;x++)g[x]=a[v+ln+x]/10;return g},h=new Map;let d=0;for(let v=0;v<a.length;v+=ln+a[v]*2){const p=a[v+ln]/10,g=a[v+ln+1]/10;if(n(p,g))continue;const x=e.findIndex(([S,E],_)=>!l[_]&&Math.abs(S-p)<60&&Math.abs(E-g)<60&&au(c(v),S,E));if(x>=0){l[x]={poly:c(v),eave:a[v+1]/10,ridge:a[v+2]/10,roof:ru(a[v+3],a[v+4],a[v+5])},d++;continue}const M=`${Math.floor(p/o)}:${Math.floor(g/o)}`;let y=h.get(M);y||h.set(M,y=[]),y.push(v,d++)}let u=0;const f=[];for(const v of h.values()){const p=M=>{const y=new se;for(let E=0;E<v.length;E+=2){const _=v[E];q_(y,t,c(_),a[_+1]/10,a[_+2]/10,[a[_+3],a[_+4],a[_+5]],a[_+6]&3,(a[_+6]&4)!==0,Dn(v[E+1]*7919+13),a[_+6]>>3&3,(a[_+6]&32)!==0,M)}M||(u+=y.vertexCount/3);const S=new Jt(y.build(),r);return S.receiveShadow=!0,S.geometry.computeBoundingSphere(),S},g=p(!1),x=p(!0);g.castShadow=!0,x.visible=!1,f.push({full:g,plain:x}),s.add(g,x)}return{group:s,count:d,triangles:u,reserved:l,cull:(v,p,g,x)=>{for(const{full:M,plain:y}of f){const S=M.geometry.boundingSphere,E=Math.hypot(Math.max(0,Math.hypot(S.center.x-v,S.center.z-g)-S.radius),S.center.y-p)<x;M.visible=E,y.visible=!E}}}}const Zr=[{id:"6-beaudesert",house:[-27.5256631,153.0234391],street:[-27.5256287,153.0231545],lot:[[-27.5255518,153.0232401],[-27.5256698,153.0239981],[-27.5258215,153.0239682],[-27.525709,153.0231799]],roof:{ridgeBack:.62,frontGable:.83},walls:15261900,trim:16184558,path:[[-27.5256352,153.0232183],[-27.5256631,153.0233586]],driveway:[[-27.5256955,153.0231869],[-27.5257016,153.0232912],[-27.5257188,153.0233652],[-27.5257249,153.0234027]],fences:[{kind:"picket",height:1.05,pts:[[-27.5255562,153.0232457],[-27.5256803,153.0231991]],gate:[-27.5256352,153.0232168]},{kind:"paling",height:1,pts:[[-27.5255562,153.0232457],[-27.5255775,153.0233869]]},{kind:"paling",height:1.6,pts:[[-27.5255775,153.0233869],[-27.5256682,153.023989]]},{kind:"paling",height:1.2,pts:[[-27.5257208,153.0232735],[-27.525739,153.0234028]]},{kind:"paling",height:1.6,pts:[[-27.525739,153.0234028],[-27.525818,153.0239647]]},{kind:"paling",height:1.7,pts:[[-27.5256682,153.023989],[-27.525818,153.0239647]]}],clothesline:[-27.5256955,153.0236194],planters:[{at:[-27.5256844,153.0235368],along:1,across:2},{at:[-27.5257603,153.0236432],along:1.4,across:.8},{at:[-27.5257644,153.023671],along:1.4,across:.8},{at:[-27.5257669,153.0236964],along:1.4,across:.8}],beds:[{at:[-27.5255689,153.0232533],r:.9}],shrubs:[[-27.5256793,153.0232558],[-27.5256803,153.0232811],[-27.5256768,153.0232963]]}],$_=$(3163994),lu=$(13815234),K_=$(2828068),cu=$(14867920),Jr=$(10126440),Z_=$(9405814),hu=$(10133668),J_=$(4151915),uu=$(9077624),Q_=$(12894648),j_=$(10721922),fu=$(7575375),du=$(7904595),pu=$(7033664),ul=$(4157490),fl=$(8368216),tv=$(5062451),ev=2.75,mu=.45;function Qr(i,t,e,n){const s=t[3]-t[0],r=t[4]-t[1],o=t[5]-t[2],a=t[6]-t[0],l=t[7]-t[1],c=t[8]-t[2];let h=r*c-o*l,d=s*l-r*a;const u=Math.hypot(h,d)||1;h=h/u*e,d=d/u*e,i.quad(t[0]+h,t[1],t[2]+d,t[3]+h,t[4],t[5]+d,t[6]+h,t[7],t[8]+d,t[9]+h,t[10],t[11]+d,n),i.quad(t[9]-h,t[10],t[11]-d,t[6]-h,t[7],t[8]-d,t[3]-h,t[4],t[5]-d,t[0]-h,t[1],t[2]-d,n)}function gu(i,t,e,n,s,r){const o=[e[0][0],e[0][1]];for(let c=1;c<e.length;c++){const[h,d]=e[c-1],[u,f]=e[c],m=Math.max(1,Math.ceil(Math.hypot(u-h,f-d)/1.2));for(let v=1;v<=m;v++)o.push(h+(u-h)*v/m,d+(f-d)*v/m)}const a=o.length/2;let l=null;for(let c=0;c<a;c++){const h=Math.max(0,c-1),d=Math.min(a-1,c+1);let u=o[d*2]-o[h*2],f=o[d*2+1]-o[h*2+1];const m=Math.hypot(u,f)||1;u/=m,f/=m;const v=o[c*2]+f*n,p=o[c*2+1]-u*n,g=o[c*2]-f*n,x=o[c*2+1]+u*n,M=[v,t.yAt(v,p)+s,p,g,t.yAt(g,x)+s,x];l&&i.quad(l[0],l[1],l[2],l[3],l[4],l[5],M[3],M[4],M[5],M[0],M[1],M[2],r),l=M}}function nv(i,t,[e,n,s,r],o){const a=Math.hypot(n[0]-e[0],n[1]-e[1]),l=Math.hypot(r[0]-e[0],r[1]-e[1]),c=Math.ceil(a/.8),h=Math.ceil(l/1.5),d=(u,f)=>{const m=e[0]+(n[0]-e[0])*u,v=e[1]+(n[1]-e[1])*u,p=r[0]+(s[0]-r[0])*u,g=r[1]+(s[1]-r[1])*u,x=m+(p-m)*f,M=v+(g-v)*f;return[x,t.yAt(x,M)+o,M]};for(let u=0;u<c;u++)for(let f=0;f<h;f++){const m=d(u/c,f/h),v=d(u/c,(f+1)/h),p=d((u+1)/c,(f+1)/h),g=d((u+1)/c,f/h);(v[0]-m[0])*(g[2]-m[2])-(v[2]-m[2])*(g[0]-m[0])<0?i.quad(m[0],m[1],m[2],v[0],v[1],v[2],p[0],p[1],p[2],g[0],g[1],g[2],u%2?fu:du):i.quad(m[0],m[1],m[2],g[0],g[1],g[2],p[0],p[1],p[2],v[0],v[1],v[2],u%2?fu:du)}}function jr(i,t,e,n,s,r,o){const a=Math.hypot(n[0]-e[0],n[1]-e[1]);if(a<.3)return;const l=Math.max(1,Math.round(a/2.4)),c=Math.atan2(n[0]-e[0],n[1]-e[1]),h=r==="picket"?o:Z_,d=m=>{const v=e[0]+(n[0]-e[0])*m,p=e[1]+(n[1]-e[1])*m;return[v,t.yAt(v,p),p]};for(let m=0;m<=l;m++){const[v,p,g]=d(m/l);i.frame(v,p,g,c),i.box(-.06,0,-.06,.06,s+.1,.06,Nt(h,.92))}i.frame();const u=(m,v,p,g,x,M)=>{const y=d(m),S=d(v);Qr(i,[y[0],y[1]+p,y[2],S[0],S[1]+p,S[2],S[0],S[1]+g,S[2],y[0],y[1]+g,y[2]],M,x)};if(r==="paling"){for(let m=0;m<l;m++)u(m/l,(m+1)/l,.05,s,h,.02);return}for(const m of[.25,s-.2])u(0,1,m,m+.08,Nt(h,.95),.02);const f=Math.floor(a/.16);for(let m=0;m<f;m++)u((m+.2)/f,(m+.75)/f,.08,s,h,.035)}function iv(i,t,e,n,s){i.frame(t,e,n,s),i.box(-.035,0,-.035,.035,2.05,.035,hu);for(const[r,o]of[[1,0],[0,1],[-1,0],[0,-1]]){const a=Math.abs(o)*.025,l=Math.abs(r)*.025;i.box(Math.min(0,r*2.1)-a,2,Math.min(0,o*2.1)-l,Math.max(0,r*2.1)+a,2.05,Math.max(0,o*2.1)+l,hu)}for(const r of[.8,1.4,2]){const o=[[r,0],[0,r],[-r,0],[0,-r]];for(let a=0;a<4;a++){const[l,c]=o[a],[h,d]=o[(a+1)%4],u=Math.hypot(h-l,d-c),f=-(d-c)/u*.015,m=(h-l)/u*.015;i.quad(l-f,2.06,c-m,l+f,2.06,c+m,h+f,2.06,d+m,h-f,2.06,d-m,$(15132386))}}i.frame()}function xu(i,t,e,n,s,r,o,a,l,c){const h=a-l,d=Math.max(2,Math.round(h/.185)),u=.27,f=d*u;for(let p=1;p<=d;p++){const g=a-h*p/d,x=t+n*u*(p-1),M=e+s*u*(p-1),y=t+n*u*p,S=e+s*u*p;i.box(Math.min(x,y,x+r,y+r),g-.05,Math.min(M,S,M+o,S+o),Math.max(x,y,x+r,y+r),g,Math.max(M,S,M+o,S+o),Jr)}const m=t+n*f,v=e+s*f;for(const p of[0,1]){const g=r*p,x=o*p;Qr(i,[t+g,a-.3,e+x,m+g,l-.3,v+x,m+g,l,v+x,t+g,a,e+x],.025,c),Qr(i,[t+g,a+.9,e+x,m+g,l+.9,v+x,m+g,l+.97,v+x,t+g,a+.97,e+x],.025,c);for(const M of[0,.5,1]){const y=t+g+n*f*M,S=e+x+s*f*M,E=a-h*M;i.box(y-.035,E,S-.035,y+.035,E+.95,S+.035,c,null)}}return[m+r/2,v+o/2]}function sv(i,t,e,n,s){const r=Xr(e.poly);let o=r.heading,a=r.w,l=r.d,c=-1/0;for(let st=0;st<4;st++){const dt=r.heading+st*Math.PI/2,At=Math.sin(dt)*(n[0]-r.cx)+Math.cos(dt)*(n[1]-r.cz);At>c&&(c=At,o=dt,a=st%2?r.d:r.w,l=st%2?r.w:r.d)}let h=1/0,d=-1/0;for(let st=0;st<e.poly.length;st+=2){const dt=t.yAt(e.poly[st],e.poly[st+1]);h=Math.min(h,dt),d=Math.max(d,dt)}const u=Math.min(d,Math.max(h,t.yAt(r.cx,r.cz))),f=Math.max(e.eave-u,2.6),m=Math.max(e.ridge-e.eave,.8),v=Math.max(.3,f-ev),p=a/2,g=l/2,x=p-mu,M=g-mu,y=$(s.walls),S=$(s.trim),E=e.roof,_=h-u-.3,b=Math.max(.16,d-u+.14);if(i.frame(r.cx,u,r.cz,o),i.box(-x,_,-M,x,b,M,uu,uu),v>1.2){i.box(-x+.3,b,-M+.3,x-.3,v-.3,M-.3,K_,null);const st=dt=>{const At=Math.max(2,Math.round(dt*2/2.2)+1);return Array.from({length:At},(Ft,yt)=>-dt+.1+(dt*2-.2)*yt/(At-1))};for(const dt of st(x))for(const At of[-M+.1,M-.1])i.box(dt-.1,_,At-.1,dt+.1,v-.28,At+.1,lu,null);for(const dt of st(M))for(const At of[-x+.1,x-.1])i.box(At-.1,_,dt-.1,At+.1,v-.28,dt+.1,lu,null);for(let dt=-x+.3;dt<x-.3;dt+=.22)for(const At of[M-.04,-M+.01])i.box(dt,b+.1,At,dt+.12,v-.3,At+.03,cu,null);for(let dt=-M+.3;dt<M-.3;dt+=.22)for(const At of[x-.04,-x+.01])i.box(At,b+.1,dt,At+.03,v-.3,dt+.12,cu,null)}i.box(-x-.03,v-.28,-M-.03,x+.03,v,M+.03,S,null);for(let st=v,dt=0;st<f-.01;st+=.28,dt++)i.box(-x,st,-M,x,Math.min(st+.28,f),M,dt%2?Nt(y,.955):y,null);for(const st of[-x,x])for(const dt of[-M,M])i.box(st-.07,v,dt-.07,st+.07,f,dt+.07,S,null);const R=(st,dt,At)=>i.frame(i.wx(st,dt),u,i.wz(st,dt),o+At),A=(st,dt,At)=>{const Ft=v+.95,yt=v+2.15;i.quad(st-dt/2,Ft,.04,st+dt/2,Ft,.04,st+dt/2,yt,.04,st-dt/2,yt,.04,$_,At?1:0),i.box(st-dt/2-.07,Ft-.07,0,st+dt/2+.07,Ft,.07,S),i.box(st-dt/2-.07,yt,0,st+dt/2+.07,yt+.07,.07,S);for(const ie of[st-dt/2-.07,st+dt/2,st-.025])i.box(ie,Ft,0,ie+(ie===st-.025?.05:.07),yt,.06,S,null);i.quad(st-dt/2-.15,yt+.12,.55,st+dt/2+.15,yt+.12,.55,st+dt/2+.15,yt+.42,.02,st-dt/2-.15,yt+.42,.02,Nt(E,.94))},L=st=>{i.quad(st-.45,v,.04,st+.45,v,.04,st+.45,v+2.05,.04,st-.45,v+2.05,.04,J_),i.box(st-.52,v+2.05,0,st+.52,v+2.12,.06,S)},P=[[-x,M,0,x*2],[x,M,Math.PI/2,M*2],[x,-M,Math.PI,x*2],[-x,-M,-Math.PI/2,M*2]],[N,T,O,H]=P,k=(st,dt)=>{i.frame(r.cx,u,r.cz,o),R(st[0],st[1],st[2]),dt(st[3]),i.frame(r.cx,u,r.cz,o)};k(N,st=>{L(1),A(st*.48,1.7,!0),A(st*.8,1.7,!1)});for(const st of[T,H])k(st,dt=>{for(let At=0;At<4;At++)A(dt*(.14+At*.24),1.4,At%2===(st===T?0:1))});k(O,st=>{A(st*.28,1.6,!1),A(st*.56,1.6,!0),L(st-1)});const X=-x+.15,V=-x+1.85,z=M+1.25;i.box(X,v-.14,M,V,v,z,Jr);for(const st of[X+.05,V-.05])i.box(st-.05,0,z-.1,st+.05,v+2.3,z,S,null);i.box(X,v+.12,z-.05,V,v+.98,z,S,null),i.box(X,v+.12,M,X+.05,v+.98,z,S,null),i.quad(X-.15,v+2.3,z+.2,V+.15,v+2.3,z+.2,V+.15,v+2.6,M,X-.15,v+2.6,M,Nt(E,.96));const G=xu(i,V,M+.12,1,0,0,1,v,.1,S),W=-x+.2,ut=-x+1.9,q=-M-1.2;i.box(W,v-.14,q,ut,v,-M,Jr);for(const st of[W+.05,ut-.05])i.box(st-.05,0,q,st+.05,v+.98,q+.1,S,null);i.box(W,v+.12,q,W+.05,v+.98,-M,S,null),i.box(ut-.05,v+.12,q,ut,v+.98,-M,S,null),i.box(-x+.1,f-.45,-M-1.4,x-1.4,f-.37,-M,Nt(E,.97),void 0,S),xu(i,W+.3,q,0,-1,1,0,v,.1,S);const at=g-s.roof.ridgeBack*l,ct=f+m,mt=f+m*s.roof.frontGable,pt=g-s.roof.frontGable*(g-at);i.quad(-p,f-.02,g,-p,f-.02,-g,p,f-.02,-g,p,f-.02,g,S),i.tri(-p,f,g,0,mt,g,0,mt,pt,E),i.tri(p,f,g,0,mt,pt,0,mt,g,E),i.quad(-p,f,g,0,mt,pt,0,ct,at,-p,ct,at,E),i.quad(p,f,g,p,ct,at,0,ct,at,0,mt,pt,E),i.quad(-p,ct,at,p,ct,at,p,f,-g,-p,f,-g,E),i.tri(-x,f,M,x,f,M,0,mt,M,y),i.quad(-.3,mt-.75,M+.03,.3,mt-.75,M+.03,.3,mt-.4,M+.03,-.3,mt-.4,M+.03,Nt(y,.6)),i.tri(-x,f,M,-x,ct,at,-x,f,-M,y),i.tri(x,f,-M,x,ct,at,x,f,M,y);const Ct=(st,dt,At,Ft,yt,ie)=>Qr(i,[st,dt-.22,At,Ft,yt-.22,ie,Ft,yt-.03,ie,st,dt-.03,At],.02,S);Ct(-p,f,g,0,mt,g),Ct(0,mt,g,p,f,g);for(const st of[-p,p])Ct(st,f,g,st,ct,at),Ct(st,ct,at,st,f,-g);i.box(-p,f-.12,-g-.1,p,f,-g,S);const Kt=[i.wx(G[0],G[1]),i.wz(G[0],G[1])];return i.frame(),Kt}function rv(i,t){const e=Zr.flatMap((n,s)=>{const r=t[s];if(!r)return[];const o=Xr(r.poly),a=c=>Yn(i,c[0],c[1]),l=[o.cx,o.cz];return[{obb:o,lines:[[...n.path.map(a),l],n.driveway.map(a)]}]});return(n,s)=>{for(const{obb:r,lines:o}of e){if(Math.abs(n-r.cx)>80||Math.abs(s-r.cz)>80)continue;const a=Math.cos(r.heading),l=Math.sin(r.heading),c=n-r.cx,h=s-r.cz;if(Math.abs(c*a-h*l)<r.w/2+1&&Math.abs(c*l+h*a)<r.d/2+1)return!0;for(const d of o)for(let u=1;u<d.length;u++){const[f,m]=d[u-1],[v,p]=d[u],g=Math.max(0,Math.min(1,((n-f)*(v-f)+(s-m)*(p-m))/((v-f)**2+(p-m)**2||1)));if(Math.hypot(n-f-(v-f)*g,s-m-(p-m)*g)<1.8)return!0}}return!1}}function _u(i){const t=Zr.map(e=>e.lot.map(n=>Yn(i,n[0],n[1])));return(e,n)=>t.some(s=>{let r=!1,o=!1;for(let a=0,l=s.length-1;a<s.length;l=a++){const[c,h]=s[a],[d,u]=s[l];h>n!=u>n&&e<(d-c)*(n-h)/(u-h)+c&&(r=!r);const f=Math.max(0,Math.min(1,((e-c)*(d-c)+(n-h)*(u-h))/((d-c)**2+(u-h)**2||1)));Math.hypot(e-c-(d-c)*f,n-h-(u-h)*f)<2.5&&(o=!0)}return r||o})}function ov(i){return Zr.map(t=>Yn(i,t.house[0],t.house[1]))}function av(i,t,e){const n=new se,s=new se,r=h=>Yn(i,h[0],h[1]);Zr.forEach((h,d)=>{const u=e[d];if(!u)return;const f=h.lot.map(r),m=$(h.trim),v=Math.atan2(f[1][0]-f[0][0],f[1][1]-f[0][1]);nv(s,t,f,.1);const p=sv(n,t,u,r(h.street),h);gu(s,t,[...h.path.map(r),p],.45,.16,Q_);const g=h.driveway.map(r);for(const x of[-.75,.75]){const M=g.map(([y,S],E)=>{const[_,b]=g[Math.max(0,E-1)],[R,A]=g[Math.min(g.length-1,E+1)],L=Math.hypot(R-_,A-b)||1;return[y+(A-b)/L*x,S-(R-_)/L*x]});gu(s,t,M,.28,.14,j_)}for(const x of h.fences){const M=x.pts.map(r);for(let y=1;y<M.length;y++){const S=M[y-1],E=M[y];if(!x.gate){jr(n,t,S,E,x.height,x.kind,m);continue}const _=r(x.gate),b=Math.hypot(E[0]-S[0],E[1]-S[1]),R=((_[0]-S[0])*(E[0]-S[0])+(_[1]-S[1])*(E[1]-S[1]))/(b*b),A=.5/b,L=T=>[S[0]+(E[0]-S[0])*T,S[1]+(E[1]-S[1])*T];jr(n,t,S,L(R-A),x.height,x.kind,m),jr(n,t,L(R+A),E,x.height,x.kind,m),jr(n,t,L(R-A+.06/b),L(R+A-.06/b),x.height-.15,x.kind,m);const[P,N]=L(R+A+.35/b);n.frame(P,t.yAt(P,N),N,Math.atan2(E[0]-S[0],E[1]-S[1])),n.box(-.04,0,-.04,.04,1,.04,m,null),n.box(-.14,1,-.2,.14,1.22,.2,$(4872786)),n.frame()}}if(h.clothesline){const[x,M]=r(h.clothesline);iv(n,x,t.yAt(x,M),M,v+Math.PI/4)}for(const x of h.planters){const[M,y]=r(x.at);n.frame(M,t.yAt(M,y),y,v),n.box(-x.across/2,0,-x.along/2,x.across/2,.4,x.along/2,Jr,tv);for(let S=0;S<3;S++)n.blob((S-1)*x.across/3.4,.5,(S%2-.5)*x.along*.4,.22,.2,.22,5,3,ul,fl);n.frame()}for(const x of h.beds){const[M,y]=r(x.at);n.frame(M,t.yAt(M,y),y,0),n.cyl(0,.05,0,x.r,x.r,.12,10,pu,pu),n.blob(0,.55,0,x.r*.6,.5,x.r*.6,6,4,ul,fl),n.frame()}for(const x of h.shrubs){const[M,y]=r(x);n.frame(M,t.yAt(M,y),y,0),n.blob(0,.32,0,.38,.36,.38,6,4,ul,fl),n.frame()}});const o=new Ie;o.name="detail";const a=new Jt(n.build(),qn());a.castShadow=!0,a.receiveShadow=!0;const l=s.build();l.deleteAttribute("glow");const c=new Jt(l,new Ye({vertexColors:!0,roughness:.95,metalness:0,side:Ee,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}));return c.receiveShadow=!0,c.name="detail-ground",o.add(c,a),{group:o,ground:c}}const dl=1.6;function vu(i,t,e,n,s){return i.filter(r=>{const o=r.w/2+dl;for(let a=0;a+1<r.p.length;a+=2){const l=Math.min(a+2,r.p.length-2);if(Math.max(r.p[a],r.p[l])+o>t&&Math.min(r.p[a],r.p[l])-o<n&&Math.max(r.p[a+1],r.p[l+1])+o>e&&Math.min(r.p[a+1],r.p[l+1])-o<s)return!0}return!1})}function lv(i,t,e,n,s){return(r,o,a,l,c)=>{const h=n/l,d=s/c;for(const u of i){const f=u.w/2,m=f+dl,v=u.k-1,p=u.p.length/2;for(let g=0;g<Math.max(1,p-1);g++){const x=u.p[g*2],M=u.p[g*2+1],y=Math.min(g+1,p-1),S=u.p[y*2],E=u.p[y*2+1],_=S-x,b=E-M,R=_*_+b*b,A=Math.max(0,Math.floor((Math.min(x,S)-m-t)/h)),L=Math.min(l-1,Math.ceil((Math.max(x,S)+m-t)/h)),P=Math.max(c-o-a,Math.floor((Math.min(M,E)-m-e)/d)),N=Math.min(c-1-o,Math.ceil((Math.max(M,E)+m-e)/d));for(let T=P;T<=N;T++){const O=e+(T+.5)*d,H=(c-1-T-o)*l*4;for(let k=A;k<=L;k++){const X=t+(k+.5)*h,V=R>0?Math.max(0,Math.min(1,((X-x)*_+(O-M)*b)/R)):0,z=Math.hypot(X-x-_*V,O-M-b*V)-f;if(z>dl)continue;const G=H+k*4,W=Math.max(0,Math.min(255,Math.round(128-80*z))),ut=Math.max(0,Math.min(255,Math.round(128+80*z)));for(let q=0;q<3;q++)q===v?r[G+q]=Math.max(r[G+q],W):r[G+q]=Math.min(r[G+q],ut)}}}}}}const Mu=[9405814,8747884,10129796,7305836,13617332,6253414,9080716].map($),to=1.6,Su=560;function cv(i,t,e){const n=new Ie;n.name="fences";const s=i.fences,r=new Map;for(let l=0;l+3<s.length;l+=4){const c=s[l]/10,h=s[l+1]/10,d=s[l+2]/10,u=s[l+3]/10,f=Math.hypot(d-c,u-h);if(f<1||e((c+d)/2,(h+u)/2))continue;const m=`${Math.floor(c/Su)}:${Math.floor(h/Su)}`;let v=r.get(m);v||r.set(m,v=new se);const p=Mu[l/4%Mu.length],g=Nt(p,.92),x=-(u-h)/f*.04,M=(d-c)/f*.04,y=Math.max(1,Math.ceil(f/5));let S=c,E=h,_=t.yAt(c,h);for(let b=1;b<=y;b++){const R=c+(d-c)*b/y,A=h+(u-h)*b/y,L=t.yAt(R,A);v.quad(S+x,_-.2,E+M,R+x,L-.2,A+M,R+x,L+to,A+M,S+x,_+to,E+M,p),v.quad(R-x,L-.2,A-M,S-x,_-.2,E-M,S-x,_+to,E-M,R-x,L+to,A-M,g),S=R,E=A,_=L}}const o=new $c({vertexColors:!0});let a=0;for(const l of r.values()){a+=l.vertexCount/6;const c=l.build();c.deleteAttribute("glow");const h=new Jt(c,o);h.castShadow=!0,h.receiveShadow=!0,n.add(h)}return{group:n,count:a}}const yu=.05;class pl{constructor(t,e,n){nt(this,"mesh");nt(this,"current","");nt(this,"level");nt(this,"wet");nt(this,"time",{value:0});nt(this,"lower",{value:0});nt(this,"loaded",new Map);this.hf=t,this.info=e,this.file=n;const{nx:s,nz:r}=t,o=s*r;this.level=new Float32Array(o),this.wet=new Uint8Array(o);const a=new Float32Array(o*3),l=new Float32Array(o*3);for(let d=0;d<r;d++)for(let u=0;u<s;u++){const f=d*s+u;a[f*3]=t.xMin+u*t.dx,a[f*3+1]=t.y[f],a[f*3+2]=t.zMin+d*t.dz,l[f*3+1]=1}const c=new Ae;c.setAttribute("position",new Pe(a,3)),c.setAttribute("normal",new Pe(l,3)),c.setAttribute("aLevel",new Pe(this.level,1)),c.setAttribute("aWet",new Pe(new Float32Array(o),1)),c.setIndex([]);const h=new Ye({color:16777215,roughness:.25,metalness:0,transparent:!0,depthWrite:!1});h.onBeforeCompile=d=>{d.uniforms.uTime=this.time,d.uniforms.uLower=this.lower,d.uniforms.uNight=es,d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
attribute float aLevel;
attribute float aWet;
uniform float uLower;
varying float vDepth;
varying float vWet;
varying vec3 vWPos;`).replace("#include <begin_vertex>",`vec3 transformed = vec3(position.x, aLevel - uLower, position.z);
vDepth = aLevel - uLower - position.y;
vWet = aWet;
vWPos = transformed;`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uNight;
varying float vDepth;
varying float vWet;
varying vec3 vWPos;`).replace("#include <color_fragment>",`#include <color_fragment>
          if (vDepth < ${yu.toFixed(2)} || vWet < 0.35) discard;
          // pale and a little muddy where it is shallow, dark blue as it deepens, so it reads as water against the ground
          float deep = smoothstep(0.1, 3.0, vDepth);
          diffuseColor.rgb = mix(vec3(0.36, 0.60, 0.74), vec3(0.05, 0.18, 0.40), deep) * (1.0 - 0.6 * uNight);
          diffuseColor.a = mix(0.7, 0.93, smoothstep(0.1, 1.5, vDepth));`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          {
            float nearby = 1.0 - smoothstep(200.0, 1500.0, length(cameraPosition - vWPos));
            vec2 p = vWPos.xz * 0.12 + vec2(uTime * 0.07, uTime * 0.04);
            vec2 ripple = vec2(sin(p.x * 3.1 + sin(p.y * 2.3)), cos(p.y * 2.7 + sin(p.x * 1.9))) * 0.035 * nearby;
            normal = normalize((viewMatrix * vec4(ripple.x, 1.0, ripple.y, 0.0)).xyz);
          }`)},h.customProgramCacheKey=()=>"moorooka-flood-levels",this.mesh=new Jt(c,h),this.mesh.name="flood",this.mesh.renderOrder=40,this.mesh.frustumCulled=!1,this.mesh.visible=!1}static async load(t,e,n,s){const r=await fetch(e,{signal:s});if(!r.ok)throw new Error("Could not load the floods");return new pl(t,await r.json(),n)}async show(t,e){if(this.current=t,!t){this.mesh.visible=!1;return}let n=this.loaded.get(t);if(!n){const l=this.info.events.some(p=>p.id===t)?this.file(t):void 0;if(!l)throw new Error("This model has no such flood");const c=await fetch(l,{signal:e});if(!c.ok)throw new Error("Could not load that flood");const h=await Jh(await c.arrayBuffer()),[d,u]=this.info.grid;if(h.width!==d||h.height!==u)throw new Error("That flood does not match this model");const{hf:f}=this,m=Math.round(f.dx/(f.sizeX/d)),v=f.nx*f.nz;n={level:new Float32Array(v),wet:new Uint8Array(v)};for(let p=0;p<f.nz;p++)for(let g=0;g<f.nx;g++){const x=(p*m*d+g*m)*h.channels;n.level[p*f.nx+g]=(h.data[x]<<8|h.data[x+1])/this.info.levelScale-this.info.levelOffset,n.wet[p*f.nx+g]=h.data[x+2]>127?1:0}this.loaded.set(t,n)}if(this.current!==t)return;const{nx:s,nz:r}=this.hf,o=this.mesh.geometry;this.level.set(n.level),this.wet.set(n.wet),o.getAttribute("aWet").array.set(n.wet),o.getAttribute("aLevel").needsUpdate=!0,o.getAttribute("aWet").needsUpdate=!0;const a=[];for(let l=0;l<r-1;l++)for(let c=0;c<s-1;c++){const h=l*s+c,d=h+1,u=h+s,f=u+1;n.wet[h]+n.wet[d]+n.wet[u]+n.wet[f]>0&&a.push(h,u,d,d,u,f)}o.setIndex(a),this.mesh.visible=!0}setLower(t){this.lower.value=Math.max(0,t)}surfaceAt(t,e,n=!1){const{hf:s}=this;if(!this.mesh.visible||!s.inside(t,e))return-1/0;const r=Math.round((e-s.zMin)/s.dz)*s.nx+Math.round((t-s.xMin)/s.dx);if(!this.wet[r])return-1/0;const o=this.level[r]-(n?0:this.lower.value);return o-s.y[r]>yu?o:-1/0}tick(t){this.time.value=t}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}const zs=$(9278358),ml=$(16053230),bu=$(3163994),hv=$(2054824),uv=$(16040479),Eu=[15327951,3099196,2504783,8007210,3816770,13214282,5209226,11879727].map($);function fv(i,t,e,n,s=()=>!1){const r=new se,o=Dn(41050),a=i.busStops??[];for(let u=0;u<a.length;u+=2){const f=a[u]/10,m=a[u+1]/10,v=e.nearest(f,m,30);if(!v||n(f,m))continue;let p=f-v.px,g=m-v.pz;const x=Math.hypot(p,g);x<.5?(p=-v.tz,g=v.tx):(p/=x,g/=x);const M=v.width/2+2.4,y=v.px+p*M,S=v.pz+g*M;if(r.frame(y,t.yAt(y,S),S,Math.atan2(-p,-g)),r.box(-2.3,0,.9,-2.2,2.6,1,zs,null),r.box(-2.5,2,.88,-2,2.6,1.02,hv),r.box(-2.5,1.86,.88,-2,2,1.02,uv),o()<.5){for(const E of[-1.7,1.7])r.box(E-.05,0,-.6,E+.05,2.35,-.5,zs,null);r.box(-1.9,2.35,-.8,1.9,2.45,.8,Nt(zs,.8)),r.box(-1.7,.5,-.62,1.7,2.1,-.58,bu,null),r.box(-1.3,.42,-.5,1.3,.5,-.1,$(10126440))}}for(const u of i.pitches){const f=u.p.map(x=>x/10),m=Xr(f);if(n(m.cx,m.cz))continue;const v=m.w>=m.d?m.w:m.d,p=Math.min(m.w,m.d),g=m.w>=m.d?m.heading+Math.PI/2:m.heading;if(r.frame(m.cx,t.yAt(m.cx,m.cz),m.cz,g),u.t==="Oval"&&/Football/.test(u.s)&&v>60)for(const x of[-1,1]){const M=x*(v/2-4);for(const y of[-2.8,2.8])r.cyl(y,0,M,.08,.08,8,5,ml);r.box(-2.8,2.9,M-.05,2.8,3.02,M+.05,ml)}else if(u.s==="Tennis"){r.box(-p/2+.6,0,-.03,p/2-.6,.95,.03,$(2764595)),r.box(-p/2+.6,.95,-.04,p/2-.6,1.02,.04,ml);for(const x of[-p/2+.6,p/2-.6])r.cyl(x,0,0,.05,.05,1.07,5,zs)}else if(u.s==="Netball")for(const x of[-1,1]){const M=x*(v/2-.3);r.cyl(0,0,M,.05,.05,3.05,5,zs),r.box(-.2,3.02,M-x*.42,.2,3.07,M,$(13644844))}}r.frame();const[,l]=Yn(i.meta,-27.53,153.0245),[,c]=Yn(i.meta,-27.5346,153.0245),h=i.buildings;for(let u=0;u<h.length;u+=ln+h[u]*2){const f=h[u],m=h[u+ln+1]/10;if(m<l||m>c)continue;let v=0,p=0;for(let x=0;x<f;x++)v+=h[u+ln+x*2]/10,p+=h[u+ln+x*2+1]/10;v/=f,p/=f;const g=Eu[Math.floor(o()*Eu.length)];for(let x=0;x<f;x++){const M=(x+1)%f,y=h[u+ln+x*2]/10,S=h[u+ln+x*2+1]/10,E=h[u+ln+M*2]/10,_=h[u+ln+M*2+1]/10,b=Math.hypot(E-y,_-S);if(b<5)continue;const R=(y+E)/2,A=(S+_)/2,L=e.nearest(R,A,16);if(!L||i.names[L.name]!=="Beaudesert Road"||n(R,A)||s(R,A))continue;let P=-(_-S)/b,N=(E-y)/b;if(P*(R-v)+N*(A-p)<0&&(P=-P,N=-N),(L.px-R)*P+(L.pz-A)*N<L.dist*.6)continue;const T=Math.atan2(P,N),O=(E-y)*Math.cos(T)-(_-S)*Math.sin(T),H=Math.max(t.yAt(y,S),t.yAt(E,_))+.1;r.frame(O>0?y:E,H,O>0?S:_,T);const k=Math.min(2.6,Math.max(1.2,L.dist-L.width/2-.6));r.quad(.4,.4,.06,b-.4,.4,.06,b-.4,2.7,.06,.4,2.7,.06,bu,.9),r.box(.2,3,0,b-.2,3.16,k,g,Nt(g,.9),Nt(g,.75)),r.box(.2,2.75,k-.08,b-.2,3.3,k,Nt(g,1.15),null)}}r.frame();const d=new Jt(r.build(),qn());return d.castShadow=!0,d.receiveShadow=!0,d.name="furniture",d}const ss=$(12170925),wu=$(13091768),dv=[.02,.02,.02,.02],eo=.22,pv=.13,mv=1.1,gl=1.3,Tu=16;function gv(i,t,e,n,s={}){const r=new Map,o=new Map,a=(S,E)=>`${Math.floor((E+e.sizeZ/2)/e.sizeZ*Tu)}_${Math.floor((S+e.sizeX/2)/e.sizeX*Tu)}`,l=S=>(E,_)=>{const b=a(E,_);let R=S.get(b);return R||S.set(b,R=new se),R},c=l(r),h=l(o),d=(S,E,_)=>!e.inside(S,E,4)||n(S,E)?!1:t.clear(S,E,14,_);i.forEach((S,E)=>{if(S.cls>3||S.flags&(Vr|Is))return;const _=S.pts.length/3,b=S.width/2,R=dv[S.cls],A=s[String(S.index)];for(const L of[-1,1]){const P=A?A[L>0?0:1]/10:NaN,N=A?P>0:S.cls<=2||(E%2?1:-1)===L,T=A?Math.max(eo+.1,P-gl/2):eo+mv;let O=null;for(let H=0;H<_;H++){const k=S.pts[H*3],X=S.pts[H*3+2],V=Math.max(H-1,0),z=Math.min(H+1,_-1);let G=S.pts[z*3]-S.pts[V*3],W=S.pts[z*3+2]-S.pts[V*3+2];const ut=Math.hypot(G,W)||1;G/=ut,W/=ut;const q=-W*L,at=G*L,ct=Lt=>[k+q*(b+Lt),X+at*(b+Lt)],[mt,pt]=ct(0),[Ct,Kt]=ct(eo),[st,dt]=ct(eo/2),At=e.yAt(mt,pt)+R,Ft=e.yAt(Ct,Kt),yt=[mt,At,pt,Ct,Math.max(At,Ft+.05)+pv,Kt,Ft],ie=d(st,dt,.02),[Re,oe]=ct(T),[we,he]=ct(T+gl),[ve,Oe]=ct(T+gl/2),ue=[Re,e.yAt(Re,oe)+.09,oe,we,e.yAt(we,he)+.09,he],K=N&&d(ve,Oe,.6)&&d(we,he,.3);if(O){const Lt=O;if(ie&&Lt.kerb){const jt=h(st,dt),Yt=yt[4],_t=Lt.k[4];L>0?(jt.quad(Lt.k[0],Lt.k[1],Lt.k[2],yt[0],yt[1],yt[2],yt[0],Yt,yt[2],Lt.k[0],_t,Lt.k[2],Nt(ss,.9)),jt.quad(Lt.k[0],_t,Lt.k[2],yt[0],Yt,yt[2],yt[3],Yt,yt[5],Lt.k[3],_t,Lt.k[5],ss),jt.quad(Lt.k[3],_t,Lt.k[5],yt[3],Yt,yt[5],yt[3],yt[6]-.3,yt[5],Lt.k[3],Lt.k[6]-.3,Lt.k[5],Nt(ss,.85))):(jt.quad(yt[0],yt[1],yt[2],Lt.k[0],Lt.k[1],Lt.k[2],Lt.k[0],_t,Lt.k[2],yt[0],Yt,yt[2],Nt(ss,.9)),jt.quad(yt[0],Yt,yt[2],Lt.k[0],_t,Lt.k[2],Lt.k[3],_t,Lt.k[5],yt[3],Yt,yt[5],ss),jt.quad(yt[3],Yt,yt[5],Lt.k[3],_t,Lt.k[5],Lt.k[3],Lt.k[6]-.3,Lt.k[5],yt[3],yt[6]-.3,yt[5],Nt(ss,.85)))}if(K&&Lt.path){const jt=H%2?wu:Nt(wu,.955),Yt=c(ve,Oe);L>0?Yt.quad(Lt.f[0],Lt.f[1],Lt.f[2],ue[0],ue[1],ue[2],ue[3],ue[4],ue[5],Lt.f[3],Lt.f[4],Lt.f[5],jt):Yt.quad(ue[0],ue[1],ue[2],Lt.f[0],Lt.f[1],Lt.f[2],Lt.f[3],Lt.f[4],Lt.f[5],ue[3],ue[4],ue[5],jt)}}O={k:yt,kerb:ie,f:ue,path:K}}}});const u=new Ye({vertexColors:!0,roughness:.94,metalness:0,side:Ee,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),f=(S,E)=>{const _=S.build();_.deleteAttribute("glow");const b=new Jt(_,u);return b.receiveShadow=!0,b.name=E,b},m=new Ie;m.name="kerbs";const v=new Map,p=[];for(const[S,E]of o){const _=f(E,`kerb ${S}`);_.geometry.computeBoundingSphere(),p.push(_),m.add(_)}for(const[S,E]of r){const _=f(E,`footpaths ${S}`);_.geometry.computeBoundingSphere(),v.set(S,_),m.add(_)}let g=new Set,x=null;const M=S=>{if(!x)return!0;const E=S.geometry.boundingSphere;return Math.hypot(Math.max(0,Math.hypot(E.center.x-x[0],E.center.z-x[2])-E.radius),E.center.y-x[1])<x[3]},y=()=>{let S=!1;const E=(_,b)=>{_.visible!==b&&(_.visible=b,S=!0)};for(const _ of p)E(_,M(_));for(const[_,b]of v)E(b,!g.has(_)&&M(b));return S};return{group:m,showPaths(S){return g=S,y()},cull(S,E,_,b){return x=[S,E,_,b],y()}}}function xv(i,t){const e=new se,n=$(9278358);e.cyl(0,0,0,.11,.07,8.2,5,n),e.box(-.05,8.1,0,.05,8.22,2.2,n),e.box(-.22,8,1.7,.22,8.14,2.5,$(5922659)),e.quad(-.2,7.99,2.48,.2,7.99,2.48,.2,7.99,1.72,-.2,7.99,1.72,$(16773320),3);const s=i.length/4,r=new an(e.build(),qn(),s),o=document.createElement("canvas");o.width=o.height=64;const a=o.getContext("2d"),l=a.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(255,214,150,0.85)"),l.addColorStop(.45,"rgba(255,196,120,0.32)"),l.addColorStop(1,"rgba(255,180,100,0)"),a.fillStyle=l,a.fillRect(0,0,64,64);const c=new Ar(o);c.colorSpace=Te;const h=new ci(34,34);h.rotateX(-Math.PI/2);const d=new Wn({map:c,transparent:!0,opacity:0,blending:go,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),u=new an(h,d,s);u.renderOrder=3;const f=new Qt,m=new rn,v=new Q(0,1,0),p=new Q(1,1,1),g=new Q;for(let x=0;x<s;x++){const M=i[x*4],y=i[x*4+1],S=i[x*4+2],E=i[x*4+3];m.setFromAxisAngle(v,E),r.setMatrixAt(x,f.compose(g.set(M,y,S),m,p));const _=M+Math.sin(E)*2.1,b=S+Math.cos(E)*2.1;u.setMatrixAt(x,f.compose(g.set(_,t.yAt(_,b)+.5,b),m.identity(),p))}return r.castShadow=!1,r.computeBoundingSphere(),u.computeBoundingSphere(),u.onBeforeRender=()=>{d.opacity=es.value*.9},u.visible=!0,{lights:r,pools:u,poolMat:d}}const no=[16053490,16053490,16053490,13225168,10725291,5593438,2040100,2838410,11020586,2054728,14266938,8368595],Bs=$(1381655),Au=$(10133154),xl=$(1713198);function Ru(i,t,e,n,s,r,o,a=8){const l=t-r/2*o,c=t+r/2*o;for(let u=0;u<a;u++){const f=u/a*Math.PI*2,m=(u+1)/a*Math.PI*2,v=e+Math.cos(f)*s,p=n+Math.sin(f)*s,g=e+Math.cos(m)*s,x=n+Math.sin(m)*s;o>0?(i.quad(l,v,p,l,g,x,c,g,x,c,v,p,Bs),i.tri(c,e,n,c,v,p,c,g,x,Bs)):(i.quad(l,g,x,l,v,p,c,v,p,c,g,x,Bs),i.tri(c,e,n,c,g,x,c,v,p,Bs))}const h=s*.52,d=c+.012*o;o>0?i.quad(d,e-h,n-h,d,e-h,n+h,d,e+h,n+h,d,e+h,n-h,Au):i.quad(d,e-h,n+h,d,e-h,n-h,d,e+h,n-h,d,e+h,n+h,Au)}function io(i,t,e,n,s,r,o,a,l=0){i.quad(r,e,t,r,s,n,o,s,n,o,e,t,a,l)}function Cu(i,t,e,n,s){const[r,o]=t[0];for(let a=1;a<t.length-1;a++){const[l,c]=t[a],[h,d]=t[a+1];n>0?i.tri(e,o,r,e,d,h,e,c,l,s):i.tri(e,o,r,e,c,l,e,d,h,s)}}function Pu(){const i=new se,t=$(16777215),e=$(2763824),n=.88,s=[[-2.1,.28],[-2.16,.6],[-2.06,.94],[-1.3,.99],[1.05,.97],[1.95,.84],[2.16,.6],[2.1,.28]];for(let a=0;a<s.length-1;a++)io(i,s[a][0],s[a][1],s[a+1][0],s[a+1][1],-n,n,a===0||a===s.length-2?Nt(t,.92):t);for(const a of[-1,1])Cu(i,s,n*a,a,t);i.quad(-n,.28,-2.1,n,.28,-2.1,n,.28,2.1,-n,.28,2.1,Bs);const r=.8,o=[[-1.42,.97],[-.98,1.45],[.32,1.45],[1.08,.97]];for(let a=0;a<o.length-1;a++)io(i,o[a][0],o[a][1],o[a+1][0],o[a+1][1],-r+.06,r-.06,a===1?t:xl,a===1?0:.15);for(const a of[-1,1]){Cu(i,o,r*a,a,xl),io(i,-1.42,.97,-.98,1.45,a>0?r-.07:-r,a>0?r:-r+.07,t),io(i,.32,1.45,1.08,.97,a>0?r-.07:-r,a>0?r:-r+.07,t);const l=(r+.006)*a;i.quad(l,.97,-.32*a,l,.97,-.22*a,l,1.45,-.22*a,l,1.45,-.32*a,t);const c=(n+.006)*a;for(const h of[-1.28,-.27,.95])i.quad(c,.42,(h-.012)*a,c,.42,(h+.012)*a,c,.96,(h+.012)*a,c,.96,(h-.012)*a,e);for(const h of[-.5,.55])i.quad(c,.8,(h-.09)*a,c,.8,(h+.09)*a,c,.84,(h+.09)*a,c,.84,(h-.09)*a,e);i.box(Math.min(n*a,(n+.16)*a),.98,.92,Math.max(n*a,(n+.16)*a),1.1,1,t)}for(const a of[-1,1])for(const l of[-1.3,1.32])Ru(i,(n-.1)*a,.33,l,.33,.24,a);i.quad(-n,.3,2.165,n,.3,2.165,n,.5,2.165,-n,.5,2.165,e),i.quad(n,.3,-2.165,-n,.3,-2.165,-n,.5,-2.165,n,.5,-2.165,e),i.quad(-.26,.36,2.17,.26,.36,2.17,.26,.49,2.17,-.26,.49,2.17,$(16053486)),i.quad(.26,.5,-2.17,-.26,.5,-2.17,-.26,.63,-2.17,.26,.63,-2.17,$(16053486));for(const a of[-.8,.48])i.quad(a,.6,2.17,a+.32,.6,2.17,a+.32,.78,2.14,a,.78,2.14,$(16776166),2.2),i.quad(a+.32,.66,-2.165,a,.66,-2.165,a,.84,-2.13,a+.32,.84,-2.13,$(13770527),.9);return i.build()}function Lu(){const i=new se,t=$(16777215);return i.box(-.88,.28,-2.14,.88,.96,2.14,t),i.box(-.78,.96,-1.38,.78,1.43,1,xl),i.quad(-.74,1.44,-1,-.74,1.44,.36,.74,1.44,.36,.74,1.44,-1,t),i.build()}const _v=$(8352874),Du=$(10133154),Iu=$(7304312),so=.44,vv=.2,Nu=1.067;function _l(i,t){const e=[i[0]/10,i[1]/10];for(let l=2;l<i.length;l+=2){const c=i[l-2]/10,h=i[l-1]/10,d=i[l]/10,u=i[l+1]/10,f=Math.max(1,Math.ceil(Math.hypot(d-c,u-h)/6));for(let m=1;m<=f;m++)e.push(c+(d-c)*m/f,h+(u-h)*m/f)}const n=e.length/2,s=new Float32Array(n);for(let l=0;l<n;l++)s[l]=t.yAt(e[l*2],e[l*2+1]);let r=s;for(let l=0;l<2;l++){const c=new Float32Array(n);for(let h=0;h<n;h++){let d=0,u=0;for(let f=Math.max(0,h-4);f<=Math.min(n-1,h+4);f++)d+=r[f],u++;c[h]=d/u}r=c}const o=new Float32Array(n*3),a=new Float32Array(n);for(let l=0;l<n;l++)o[l*3]=e[l*2],o[l*3+1]=Math.max(r[l],s[l]-.2),o[l*3+2]=e[l*2+1],l&&(a[l]=a[l-1]+Math.hypot(e[l*2]-e[l*2-2],e[l*2+1]-e[l*2-1]));return{pts:o,cum:a,length:a[n-1]}}function rs(i,t,e){const n=i.cum.length;let s=0,r=n-1;for(;r-s>1;){const m=s+r>>1;i.cum[m]<=t?s=m:r=m}const o=Math.min(1,Math.max(0,(t-i.cum[s])/(i.cum[r]-i.cum[s]||1))),a=i.pts[s*3],l=i.pts[s*3+1],c=i.pts[s*3+2],h=i.pts[r*3],d=i.pts[r*3+1],u=i.pts[r*3+2],f=Math.hypot(h-a,u-c)||1;e.x=a+(h-a)*o,e.y=l+(d-l)*o,e.z=c+(u-c)*o,e.tx=(h-a)/f,e.tz=(u-c)/f}function vl(i,t,e,n,s,r){const o=t.cum.length;let a=0,l=0,c=0,h=0,d=0;for(let u=0;u<o;u++){const f=Math.max(u-1,0),m=Math.min(u+1,o-1);let v=t.pts[m*3]-t.pts[f*3],p=t.pts[m*3+2]-t.pts[f*3+2];const g=Math.hypot(v,p)||1;v/=g,p/=g;const x=t.pts[u*3]-p*e,M=t.pts[u*3+2]+v*e,y=t.pts[u*3+1]+s,S=x+p*n,E=M-v*n,_=x-p*n,b=M+v*n;u&&i.quad(a,l,c,S,y,E,_,y,b,h,l,d,r),a=S,l=y,c=E,h=_,d=b}}const Mv=$(12170926),Uu=$(15254842),Fu=$(9276036),Ou=150,Sv=so+.8;function yv(i,t,e){const n=t.trainRoutes.map(o=>_l(o,e)),s=(o,a,l,c=0,h=o.cum.length)=>{let d=1/0,u=-1;for(let f=Math.max(0,c);f<Math.min(o.cum.length,h);f++){const m=Math.hypot(o.pts[f*3]-a,o.pts[f*3+2]-l);m<d&&(d=m,u=f)}return{i:u,dist:d}},r={x:0,y:0,z:0,tx:0,tz:0};for(const o of t.stations){const a=o.p[0]/10,l=o.p[1]/10,c=n.map(v=>({t:v,...s(v,a,l)})).filter(v=>v.dist<16).sort((v,p)=>v.dist-p.dist);if(!c.length)continue;const h=c[0],d=c[1],u=h.t.cum[h.i];let f=null,m=d?d.i:0;for(let v=Math.max(4,u-Ou/2);v<=Math.min(h.t.length-4,u+Ou/2);v+=5){rs(h.t,v,r);let p,g,x,M;if(d){const S=s(d.t,r.x,r.z,m-6,m+7);m=S.i;const E=d.t.pts[S.i*3],_=d.t.pts[S.i*3+2],b=Math.hypot(E-r.x,_-r.z);if(b<4.6){f=null;continue}const R=(E-r.x)/b,A=(_-r.z)/b;p=r.x+R*1.6,g=r.z+A*1.6,x=E-R*1.6,M=_-A*1.6}else{const S=(a-r.x)*r.tz-(l-r.z)*r.tx>=0?1:-1;p=r.x+r.tz*S*1.6,g=r.z-r.tx*S*1.6,x=r.x+r.tz*S*5.6,M=r.z-r.tx*S*5.6}const y=r.y+Sv;if((x-p)*-r.tz+(M-g)*r.tx<0&&([p,x]=[x,p],[g,M]=[M,g]),f){const[S,E,_,b,R]=f;i.quad(S,R,E,_,R,b,x,y,M,p,y,g,Mv);for(const[A,L,P,N,T,O,H,k]of[[S,E,p,g,_,b,x,M],[_,b,x,M,S,E,p,g]]){const X=Math.hypot(T-A,O-L)||1,V=Math.hypot(H-P,k-N)||1,z=(W,ut,q,at)=>W+(ut-W)/q*at,G=[z(A,T,X,.45),R+.02,z(L,O,X,.45),z(P,H,V,.45),y+.02,z(N,k,V,.45),z(P,H,V,.75),y+.02,z(N,k,V,.75),z(A,T,X,.75),R+.02,z(L,O,X,.75)];A===S&&L===E?(i.quad(G[0],G[1],G[2],G[9],G[10],G[11],G[6],G[7],G[8],G[3],G[4],G[5],Uu),i.quad(P,y-1.1,N,A,R-1.1,L,A,R,L,P,y,N,Fu)):(i.quad(...G,Uu),i.quad(A,R-1.1,L,P,y-1.1,N,P,y,N,A,R,L,Fu))}}f=[p,g,x,M,y]}}}function bv(i,t){const e=new se,n=new se,s=new Set,r={x:0,y:0,z:0,tx:0,tz:0};for(const[u,f]of i.rails){const m=_l(f,t);if(!(m.length<4)&&(vl(e,m,0,1.45,vv,_v),vl(n,m,-Nu/2,.07,so,Du),vl(n,m,Nu/2,.07,so,Du),u===0))for(let v=20;v<m.length-10;v+=62){rs(m,v,r);const p=r.x+r.tz*2.7,g=r.z-r.tx*2.7;if(!t.inside(p,g,6))continue;const x=Math.floor(p/14)*8192+Math.floor(g/14);if(!s.has(x)){for(let M=-1;M<=1;M++)for(let y=-1;y<=1;y++)s.add(Math.floor(p/14+M)*8192+Math.floor(g/14+y));n.frame(p,t.yAt(p,g),g,Math.atan2(-r.tz,r.tx)),n.box(-.09,0,-.09,.09,7.4,.09,Iu),n.box(-.05,6.3,0,.05,6.42,3.2,Iu),n.frame()}}}const o=new se;yv(o,i,t);const a=u=>(u.deleteAttribute("glow"),u),l=new Ie;l.name="railway";const c=new Jt(a(e.build()),new Ye({vertexColors:!0,roughness:1,metalness:0,side:Ee,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));c.receiveShadow=!0;const h=new Jt(a(n.build()),new Ye({vertexColors:!0,roughness:.55,metalness:.35,side:Ee}));h.castShadow=!0;const d=new Jt(a(o.build()),new Ye({vertexColors:!0,roughness:.92,metalness:0,side:Ee}));return d.castShadow=!0,d.receiveShadow=!0,l.add(c,h,d),l}const zu=2,Ml=4;function Ev(i,t){const e=i.slice(),n=[],s=(o,a,l,c)=>Math.hypot(o-l,a-c)<3,r=o=>{const a=new Float32Array(o.length);for(let l=0;l<o.length/3;l++)a.set(o.subarray(l*3,l*3+3),o.length-3-l*3);return a};for(;e.length;){let o=Array.from(e.pop()),a=!0;for(;a;){a=!1;for(let l=0;l<e.length;l++){const c=e[l],h=c.length,d=o.length;let u=null,f=!0;if(s(o[d-3],o[d-1],c[0],c[2])?u=c:s(o[0],o[2],c[h-3],c[h-1])?(u=c,f=!1):!t&&s(o[d-3],o[d-1],c[h-3],c[h-1])?u=r(c):!t&&s(o[0],o[2],c[0],c[2])&&(u=r(c),f=!1),!!u){o=f?o.concat(Array.from(u.subarray(3))):Array.from(u.subarray(0,u.length-3)).concat(o),e.splice(l,1),a=!0;break}}}n.push(new Float32Array(o))}return n}function wv(i){const t=new Map;for(const n of i){if(n.cls>2||!n.name||n.flags&zu)continue;const s=`${n.name}|${n.flags&Ml}`,r=t.get(s)??[];r.push(n),t.set(s,r)}const e=[];for(const n of t.values()){const s=(n[0].flags&Ml)!==0;for(const r of Ev(n.map(o=>o.pts),s)){const o=r.length/3,a=new Float32Array(o);for(let l=1;l<o;l++)a[l]=a[l-1]+Math.hypot(r[l*3]-r[l*3-3],r[l*3+2]-r[l*3-1]);a[o-1]>260&&e.push({pts:r,cum:a,length:a[o-1],width:n[0].width,cls:n[0].cls,oneWay:s,name:n[0].name})}}return e}function Tv(){const i=new se,t=$(16185074),e=$(2054824),n=$(16040479),s=$(1713198),r=$(1381655);i.box(-1.25,.35,-6,1.25,3.1,6,t,$(15001316),r),i.box(-1.27,.35,-6.02,1.27,1.15,6.02,e,null),i.box(-1.28,1.15,-6.03,1.28,1.32,6.03,n,null);for(const o of[-1.27,1.27]){const a=Math.sign(o);i.quad(o+a*.02,1.55,-5.4*a,o+a*.02,1.55,5.4*a,o+a*.02,2.65,5.4*a,o+a*.02,2.65,-5.4*a,s,.5)}i.quad(-1.1,1.5,6.04,1.1,1.5,6.04,1.1,2.8,6.04,-1.1,2.8,6.04,s,.3);for(const o of[-1,1])for(const a of[-3.75,4.05])Ru(i,1.17*o,.48,a,.48,.3,o,10);for(const o of[-1,.7])i.quad(o,.6,6.05,o+.3,.6,6.05,o+.3,.85,6.05,o,.85,6.05,$(16776166),2.2);return i.build()}const Sl=24.2,bi=6;function Bu(i){const t=new se,e=23.4,n=1.42,s=$(13488596),r=$(10330790),o=$(1843753),a=$(15909424),l=$(2763822),c=$(2310287);t.box(-n,.95,-e/2,n,3.7,e/2,s,r),t.box(-n+.2,.2,-e/2+1.4,n-.2,.95,e/2-1.4,l,null),t.box(-.5,3.7,-e/2+3,.5,4,e/2-3,r);for(const h of[-1,1]){const d=h*(n+.02),u=(f,m,v,p,g=o,x=0)=>{h>0?t.quad(d,v,m,d,v,f,d,p,f,d,p,m,g,x):t.quad(d,v,f,d,v,m,d,p,m,d,p,f,g,x)};u(-e/2+.3,e/2-.3,1.45,1.62,c);for(let f=0;f<7;f++){const m=-e/2+2+f*2.9;u(m,m+2.1,2,2.95,o,.75)}for(const f of[-6.4,5])u(f,f+1.4,1,3.1,a)}if(i){const h=e/2+.02;t.quad(-n,.95,h,n,.95,h,n,2.15,h,-n,2.15,h,a),t.quad(-n+.15,2.2,h,n-.15,2.2,h,n-.15,3.35,h,-n+.15,3.35,h,o,.2);for(const d of[-1.05,.7])t.quad(d,1.25,h+.01,d+.35,1.25,h+.01,d+.35,1.5,h+.01,d,1.5,h+.01,$(16776166),2.4)}return t.build()}class Av{constructor(t,e,n,s,r=()=>!1,o=()=>!1){nt(this,"group",new Ie);nt(this,"vehicles",[]);nt(this,"carMesh");nt(this,"carFarMesh");nt(this,"carColours",[]);nt(this,"busMesh");nt(this,"parked",[]);nt(this,"parkedAt",new Map);nt(this,"parkedGone",new Set);nt(this,"eye",new Q(0,1e6,0));nt(this,"reach",{near:140,far:1100});nt(this,"carCount",0);nt(this,"trains",[]);nt(this,"midMesh");nt(this,"cabMesh");nt(this,"tmpM",new Qt);nt(this,"tmpQ",new rn);nt(this,"tmpP",new Q);nt(this,"up",new Q(0,1,0));nt(this,"one",new Q(1,1,1));nt(this,"zero",new Q(0,0,0));nt(this,"at",{x:0,y:0,z:0,tx:0,tz:0});nt(this,"at2",{x:0,y:0,z:0,tx:0,tz:0});this.town=t,this.hf=e,this.isClear=r,this.noParking=o,this.group.name="life";const a=qn();this.addParkedCars(a,s),this.addTraffic(a,n),this.addTrains(a),this.addStreetLights(n),this.update(0)}addParkedCars(t,e){const n=this.town.cars,s=n.length/$n,r=250,o=new Map;for(let h=0;h<s;h++){const d=n[h*$n]/4,u=n[h*$n+1]/4;if(this.isClear(d,u)||this.noParking(d,u))continue;const f=`${Math.floor(d/r)}_${Math.floor(u/r)}`;let m=o.get(f);m||o.set(f,m=[]),m.push(h)}const a=Pu(),l=Lu(),c=new Rt;for(const h of o.values()){const d=new an(a,t,h.length),u=new an(l,t,h.length);h.forEach((m,v)=>{const p=n[m*$n]/4,g=n[m*$n+1]/4,x=e.nearest(p,g,14),M=!!x&&x.dist<x.width/2;this.tmpQ.setFromAxisAngle(this.up,n[m*$n+2]/10*(Math.PI/180));const y=this.hf.yAt(p,g)+(M?.06:.03);this.tmpM.compose(this.tmpP.set(p,y,g),this.tmpQ,this.one),this.parkedAt.set(`${n[m*$n]}_${n[m*$n+1]}`,{near:d,far:u,k:v,x:p,y,z:g}),c.set(no[(n[m*$n+3]*7+m)%no.length]),d.setMatrixAt(v,this.tmpM),d.setColorAt(v,c),u.setMatrixAt(v,this.tmpM),u.setColorAt(v,c)}),d.castShadow=!0,d.computeBoundingSphere(),u.computeBoundingSphere(),d.visible=!1;const f=d.boundingSphere;this.parked.push({near:d,far:u,x:f.center.x,y:f.center.y,z:f.center.z,r:f.radius}),this.group.add(d,u)}}setParkedGone(t){const e=new Set(t.map(([n,s])=>`${Math.round(n*4)}_${Math.round(s*4)}`));for(const n of new Set([...e,...this.parkedGone])){const s=this.parkedAt.get(n);!s||e.has(n)===this.parkedGone.has(n)||(Hr(s.near,s.k,e.has(n)),Hr(s.far,s.k,e.has(n)))}this.parkedGone=e}pickParked(t,e){let n=null;for(const[s,r]of this.parkedAt){if(this.parkedGone.has(s)||Math.abs(r.x-t.x)>400||Math.abs(r.z-t.z)>400)continue;const o=hl({o:t,d:e},r.x,r.z,r.y,r.y+1.5,2.2);o>0&&(!n||o<n.t)&&(n={type:"car",x:r.x,z:r.z,t:o})}return n}cull(t,e,n,s=this.reach.near,r=this.reach.far){this.eye.set(t,e,n),this.reach.near=s,this.reach.far=r;for(const o of this.parked){const a=Math.hypot(Math.max(0,Math.hypot(o.x-t,o.z-n)-o.r),e-o.y);o.near.visible=a<s,o.far.visible=a>=s&&a<r}}addTraffic(t,e){const n=wv(e);if(!n.length)return;const s=Dn(4105),r=[],o=[];for(const l of n){const c=l.cls===0?20:l.cls===1?12:8,h=Math.round(l.length/1e3*c*(l.oneWay?1:1.6)),d=Math.max(1,l.oneWay?Math.min(l.width<13?2:3,Math.round((l.width-2.4)/3.4)):Math.round(l.width/2/3.3)),u=f=>-l.width/2+.4+3.3*(f+.5);for(let f=0;f<h;f++){const m=Math.floor(s()*d),v=l.oneWay?u(m):(m+.5)/d*(l.width/2-.3),p=l.cls===0?13:l.cls===1?11:9,g={route:l,s:s()*l.length,dir:l.oneWay||s()<.5?1:-1,speed:p+s()*4,lane:v};(l.name==="Beaudesert Road"||l.name==="Ipswich Road")&&s()<.045?(g.speed=10+s()*2,l.oneWay&&(g.lane=u(d-1)),o.push(g)):r.push(g)}}this.vehicles=r.concat(o),this.carCount=r.length;const a=new Rt;if(r.length){const l=this.carMesh=new an(Pu(),t,r.length),c=this.carFarMesh=new an(Lu(),t,r.length);for(const h of[l,c])h.instanceMatrix.setUsage(ar),h.frustumCulled=!1,h.setColorAt(0,a.set(16777215)),h.instanceColor.setUsage(ar),this.group.add(h);for(let h=0;h<r.length;h++)this.carColours.push(new Rt(no[Math.floor(s()*no.length)]));l.castShadow=!0}if(o.length){const l=this.busMesh=new an(Tv(),t,o.length);l.instanceMatrix.setUsage(ar),l.frustumCulled=!1,l.castShadow=!0,this.group.add(l)}}addTrains(t){const e=this.town.trainRoutes.map(r=>_l(r,this.hf)).filter(r=>r.length>600);if(!e.length)return;const n=[!0];if(e.length>1){const r=e[0],o=e[1];rs(r,r.length/2,this.at);let a=1/0,l=0,c=1;for(let h=0;h<o.cum.length;h++){const d=o.pts[h*3]-this.at.x,u=o.pts[h*3+2]-this.at.z,f=Math.hypot(d,u);if(f<a){a=f,l=d*-this.at.tz+u*this.at.tx;const m=Math.min(h+1,o.cum.length-1),v=Math.max(h-1,0);c=(o.pts[m*3]-o.pts[v*3])*this.at.tx+(o.pts[m*3+2]-o.pts[v*3+2])*this.at.tz}}n[0]=l>0,n[1]=n[0]?c<0:c>0}const s=bi*Sl;e.forEach((r,o)=>{const a=n[o]?r:Rv(r),l=[];for(const c of this.town.stations){const h=c.p[0]/10,d=c.p[1]/10;let u=70,f=-1;for(let m=0;m<a.cum.length;m++){const v=Math.hypot(a.pts[m*3]-h,a.pts[m*3+2]-d);v<u&&(u=v,f=a.cum[m])}f>s/2+10&&f<a.length-10&&l.push(f+s/2)}l.sort((c,h)=>c-h),this.trains.push({track:a,stops:l,s:a.length*(o===0?.28:.62),v:16,dwell:0,next:0})});for(const r of this.trains)r.next=r.stops.findIndex(o=>o>r.s+150);this.midMesh=new an(Bu(!1),t,this.trains.length*(bi-2)),this.cabMesh=new an(Bu(!0),t,this.trains.length*2);for(const r of[this.midMesh,this.cabMesh])r.instanceMatrix.setUsage(ar),r.frustumCulled=!1,r.castShadow=!0,this.group.add(r)}addStreetLights(t){const e=[];for(const r of t){if(r.flags&zu)continue;const o=(r.flags&Ml)!==0,a=r.cls<=1?46:r.cls===2?60:105,l=r.pts.length/3;let c=a*.5,h=1;for(let d=1;d<l;d++){const u=r.pts[d*3-3],f=r.pts[d*3-1],m=r.pts[d*3],v=r.pts[d*3+1],p=r.pts[d*3+2],g=Math.hypot(m-u,p-f);if(c+=g,c<a)continue;c=0,h=o?-1:-h;const x=(m-u)/(g||1),M=(p-f)/(g||1),y=r.width/2+1.4,S=m-M*y*h,E=p+x*y*h;!this.hf.inside(S,E,12)||this.isClear(S,E)||e.push(S,Math.max(this.hf.yAt(S,E),v-.4),E,Math.atan2(M*h,-x*h))}}const{lights:n,pools:s}=xv(e,this.hf);this.group.add(n,s)}update(t){const{at:e,at2:n,eye:s}=this,r=this.reach.near*this.reach.near,o=this.reach.far*this.reach.far;let a=0,l=0;this.vehicles.forEach((h,d)=>{const u=h.route;h.s+=h.dir*h.speed*t,h.s>u.length&&(h.s-=u.length),h.s<0&&(h.s+=u.length),rs(u,h.s,e);const f=e.tx*h.dir,m=e.tz*h.dir;if(this.tmpQ.setFromAxisAngle(this.up,Math.atan2(f,m)),this.tmpM.compose(this.tmpP.set(e.x+m*h.lane,e.y+.03,e.z-f*h.lane),this.tmpQ,this.one),d<this.carCount){const v=(e.x-s.x)**2+(e.y-s.y)**2+(e.z-s.z)**2;v<r?(this.carMesh.setMatrixAt(a,this.tmpM),this.carMesh.setColorAt(a++,this.carColours[d])):v<o&&(this.carFarMesh.setMatrixAt(l,this.tmpM),this.carFarMesh.setColorAt(l++,this.carColours[d]))}else this.busMesh.setMatrixAt(d-this.carCount,this.tmpM)});for(const[h,d]of[[this.carMesh,a],[this.carFarMesh,l]])h&&(h.count=d,h.instanceMatrix.needsUpdate=!0,h.instanceColor.needsUpdate=!0);if(this.busMesh&&(this.busMesh.instanceMatrix.needsUpdate=!0),!this.midMesh||!this.cabMesh)return;const c=bi*Sl;this.trains.forEach((h,d)=>{if(h.dwell>0)h.dwell-=t;else{const f=(h.next>=0&&h.next<h.stops.length?h.stops[h.next]:1/0)-h.s;f<.4?(h.v=0,h.dwell=14,h.next++):f<h.v*h.v/1.7+2?h.v=Math.max(.8,Math.sqrt(1.7*f)):h.v=Math.min(19,h.v+.75*t),h.s+=h.v*t,h.s-c>h.track.length&&(h.s=0,h.next=0,h.v=15)}for(let u=0;u<bi;u++){const f=h.s-(u+.5)*Sl,m=u===0||u===bi-1,v=m?this.cabMesh:this.midMesh,p=m?d*2+(u===0?0:1):d*(bi-2)+u-1;if(f<8||f>h.track.length-8){v.setMatrixAt(p,this.tmpM.compose(this.zero,this.tmpQ.identity(),this.zero));continue}rs(h.track,f+8,e),rs(h.track,f-8,n);const g=Math.atan2(e.x-n.x,e.z-n.z)+(u===bi-1?Math.PI:0);this.tmpQ.setFromAxisAngle(this.up,g),v.setMatrixAt(p,this.tmpM.compose(this.tmpP.set((e.x+n.x)/2,(e.y+n.y)/2+so,(e.z+n.z)/2),this.tmpQ,this.one))}}),this.midMesh.instanceMatrix.needsUpdate=!0,this.cabMesh.instanceMatrix.needsUpdate=!0}}function Rv(i){const t=i.cum.length,e=new Float32Array(t*3),n=new Float32Array(t);for(let s=0;s<t;s++)e.set(i.pts.subarray((t-1-s)*3,(t-1-s)*3+3),s*3),n[s]=i.length-i.cum[t-1-s];return{pts:e,cum:n,length:i.length}}const Cv=[{id:"shops",name:"Moorvale shops",kind:"landmark",lat:-27.53289,lon:153.02479,blurb:"Moorooka's main street: the shops and cafes along Beaudesert Road, around Moorvale Lane.",view:[420,58,-24],priority:1,lift:24},{id:"square",name:"Moorooka Square",kind:"landmark",lat:-27.53092,lon:153.02368,blurb:"The shopping centre at Beaudesert Road and Durack Street, modelled in extra detail. Its outline and heights are surveyed. The corner frontage (white canopy, brick planters, pylon) and the supermarket entry are fitted from street photographs taken in 2026: the corner wing is newer than the survey, so its position is approximate. The sides away from Beaudesert Road are a guess.",view:[115,62,68],priority:1,maxDist:2600,lift:17},{id:"station",name:"Moorooka Station",kind:"landmark",lat:-27.53566,lon:153.01392,blurb:"On the Beenleigh and Gold Coast lines, beside Ipswich Road. Trains in the model stop here.",view:[330,60,62],priority:1,lift:20},{id:"magic-mile",name:"Magic Mile",kind:"landmark",lat:-27.53208,lon:153.01684,blurb:"Ipswich Road through Moorooka, long known as the Magic Mile of Motors for its car yards. The cars standing in the yards are generated.",view:[520,60,35],priority:2,lift:22},{id:"6-beaudesert",name:"6 Beaudesert Road",kind:"landmark",lat:-27.5256631,lon:153.0234391,blurb:"A high-set house on a 1,348 square metre block near the Ipswich Road junction, modelled in extra detail. The roof outline, its height and colour are surveyed; the fences, paths, steps, garden boxes and clothes hoist are placed from the aerial photograph. Wall colour, windows and doors are a guess.",view:[52,52,-105],priority:2,maxDist:1500,lift:13},{id:"clapham",name:"Clapham Rail Yard",kind:"landmark",lat:-27.5312,lon:153.0132,blurb:"The rail yard between Yeerongpilly and Moorooka stations, on the western edge of the suburb.",view:[640,58,80],priority:3,maxDist:3600,lift:18},{id:"school",name:"Moorooka State School",kind:"landmark",lat:-27.53569,lon:153.02398,blurb:"The state primary school, between Beaudesert Road and Sherley Street.",view:[360,58,10],priority:3,maxDist:2600,lift:18},{id:"alexander",name:"Alexander Park",kind:"nature",lat:-27.53889,lon:153.02367,blurb:"Sports fields beside Beaudesert Road, south of the school.",view:[420,58,-15],priority:4,maxDist:2600,lift:14},{id:"peggs",name:"Pegg's Park",kind:"nature",lat:-27.53231,lon:153.0312,blurb:"Parkland along Vendale Avenue on the eastern side of the suburb.",view:[420,58,20],priority:4,maxDist:2600,lift:14},{id:"koala",name:"Koala Park",kind:"nature",lat:-27.53056,lon:153.02808,blurb:"A long green corridor with playing fields between Vendale Avenue and the houses.",view:[420,60,30],priority:5,maxDist:2e3,lift:14},{id:"community",name:"Moorooka Community Centre",kind:"landmark",lat:-27.53555,lon:153.02088,blurb:"The community hall, west of the school.",view:[300,60,-10],priority:6,maxDist:1400,lift:14},{id:"st-brendans",name:"St Brendan's Primary School",kind:"landmark",lat:-27.53747,lon:153.01931,blurb:"Catholic primary school on Hawtree Street, next to the church.",view:[320,60,15],priority:6,maxDist:1600,lift:15},{id:"post",name:"Moorooka Post Shop",kind:"landmark",lat:-27.5317,lon:153.02369,blurb:"The post office, at the northern end of the shops.",view:[260,60,-20],priority:7,maxDist:900,lift:14},{id:"uniting",name:"Uniting Church",kind:"landmark",lat:-27.53339,lon:153.02759,blurb:"Moorooka's Uniting Church, a few streets east of the shops.",view:[280,60,10],priority:7,maxDist:1e3,lift:14},{id:"stimpson",name:"Stimpson Park",kind:"nature",lat:-27.52648,lon:153.02218,blurb:"A park beside Ipswich Road at the northern tip of the suburb.",view:[360,58,20],priority:6,maxDist:1600,lift:13},{id:"moolabin",name:"Moolabin Park",kind:"nature",lat:-27.52852,lon:153.02564,blurb:"The first of the parks strung along Vendale Avenue.",view:[340,58,15],priority:6,maxDist:1500,lift:13},{id:"veterans",name:"Veterans Park",kind:"nature",lat:-27.53974,lon:153.01694,blurb:"A park on Anson Street, in the south-west of the suburb.",view:[340,58,25],priority:6,maxDist:1500,lift:13},{id:"skate",name:"Peter Scott Skate Park",kind:"landmark",lat:-27.54298,lon:153.01482,blurb:"The skate park in Muriel Avenue Park, near the creek.",view:[260,60,30],priority:6,maxDist:1400,lift:12},{id:"toohey",name:"Toohey Forest",kind:"nature",lat:-27.53512,lon:153.03668,blurb:"Bushland on the ridge along the eastern edge of the suburb. The highest ground in the model, about 125 metres above sea level, is here.",view:[1100,60,-60],priority:2,lift:34},{id:"creek",name:"Rocky Water Holes Creek",kind:"water",lat:-27.54414,lon:153.01554,blurb:"The creek along Moorooka's southern boundary, on its way to Oxley Creek and the Brisbane River.",view:[620,58,20],priority:5,maxDist:3200},{id:"rocklea",name:"Rocklea Station",kind:"landmark",lat:-27.54472,lon:153.01419,blurb:"The next station south, just over the creek in Rocklea.",view:[380,60,40],priority:5,maxDist:2600,lift:16},{id:"yeerongpilly",name:"Yeerongpilly Station",kind:"landmark",lat:-27.52485,lon:153.01416,blurb:"The next station north, where the Tennyson branch leaves the main line.",view:[420,60,70],priority:5,maxDist:2600,lift:16},{id:"river",name:"Brisbane River",kind:"water",lat:-27.5214,lon:153.0102,blurb:"The Tennyson reach of the river touches the north-west corner of the model.",view:[900,55,40],priority:4}],ku=[-27.531134,153.023185],Pv=[-27.5307274,153.0230606],Lv=[-27.5310763,153.0237468],Gu=[[-27.5307394,153.023705],[-27.5310127,153.0237606]],ks=[78,0,0,0,0,66.5,79.3,66.5,79.3,42.5,83.4,42.5,83.4,47.9,88.2,47.9,88.2,28.1,100.2,28.1,100.2,22.1],Dv=[75.2,0,0,0,0,66.5,79.3,66.5,79.3,42.5,83.4,42.5,83.4,47.9,88.2,47.9,88.2,26.3,98.4,26.3,98.4,23.2],Iv=[66,0,75.2,0,98.4,23.2,98.4,26.3,88.2,26.3,88.2,47.9,83.4,47.9,83.4,42.5,79.3,42.5,79.3,66.5,66,66.5],Gt=39.1,sn=Gt+5,ro=Gt+5.85,Gs=5.2,Hs=[11.4,14.6],Kn=i=>37.45+(i>0?.036:.02)*i,Vs=$(14934231),ge=$(15987437),Ws=$(15526627),Xs=$(13619146),yl=$(11818813),bl=$(4864816),Nv=$(2832965),qs=$(1976109),Ys=$(3817026),Mn=$(10133668),ui=$(3817026),$s=$(13352877),oo=$(13353645),fi=$(12434098),Hu=$(1780811),ao=$(9409688),lo=$(4164148),Uv=$(9424476),El=$(3104556),Fv=$(9054780),co=2;function Zn(i,t,e){const n=document.createElement("canvas");n.width=i*co,n.height=t*co;const s=n.getContext("2d");s.scale(co,co),e(s,i,t);const r=new Ar(n);return r.colorSpace=Te,r.anisotropy=8,r}const cn="Arial, Helvetica, sans-serif";function wl(i,t,e,n){i.lineWidth=n*.42,i.strokeStyle="#1c9a48",i.beginPath(),i.arc(t-n*.3,e+n*.12,n*.55,0,Math.PI*2),i.stroke(),i.strokeStyle="#7cc242",i.beginPath(),i.arc(t+n*.3,e-n*.12,n*.55,0,Math.PI*2),i.stroke()}const Jn={square:()=>Zn(768,224,(i,t,e)=>{const n=["#f2c230","#2f6fb6","#e2457a","#1f2a55","#f08a2a","#39a7a0"],r=e/2,o=78;for(let a=0;a<6;a++){const l=a/6*Math.PI*2-.5,c=(a+1)/6*Math.PI*2-.5;i.fillStyle=n[a],i.beginPath(),i.moveTo(100+8*Math.cos(l+1),r+8*Math.sin(l+1)),i.lineTo(100+o*Math.cos(l),r+o*Math.sin(l)),i.lineTo(100+o*Math.cos(c),r+o*Math.sin(c)),i.fill()}i.fillStyle="#23201e",i.font=`900 88px ${cn}`,i.textBaseline="middle",i.fillText("MOOROOKA",205,e*.29,t-215),i.fillText("SQUARE",240,e*.74,t-300)}),dental:()=>Zn(768,256,(i,t,e)=>{i.fillStyle="#1f4fb5",i.beginPath(),i.arc(110,e/2,96,0,Math.PI*2),i.fill(),i.fillStyle="#ffffff",i.beginPath(),i.moveTo(62,96),i.bezierCurveTo(62,56,110,78,110,78),i.bezierCurveTo(110,78,158,56,158,96),i.bezierCurveTo(158,150,142,196,130,196),i.bezierCurveTo(120,196,122,150,110,150),i.bezierCurveTo(98,150,100,196,90,196),i.bezierCurveTo(78,196,62,150,62,96),i.fill(),i.fillStyle="#1f4fb5",i.textBaseline="middle",i.font=`700 64px ${cn}`,i.fillText("moorooka SQUARE",230,70,t-240),i.font=`900 120px ${cn}`,i.fillText("D E N T A L",228,180,t-236)}),medical:()=>Zn(768,256,(i,t,e)=>{i.fillStyle="#5aa9e6",i.fillRect(74,28,76,200),i.fillRect(12,90,200,76),i.fillStyle="#ffffff",i.beginPath(),i.arc(112,e/2,26,0,Math.PI*2),i.fill(),i.fillStyle="#1d2f6b",i.textBaseline="middle",i.font=`900 92px ${cn}`,i.fillText("MOOROOKA",236,78,t-246),i.fillText("MEDICAL",236,182,t-300)}),pylonDental:()=>Zn(512,160,(i,t,e)=>{i.fillStyle="#1c2f6e",i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.beginPath(),i.arc(70,e/2,44,0,Math.PI*2),i.fill(),i.textBaseline="middle",i.font=`700 40px ${cn}`,i.fillText("moorooka SQUARE",140,48,t-160),i.font=`900 72px ${cn}`,i.fillText("DENTAL",140,110,t-160)}),parking:()=>Zn(512,160,(i,t,e)=>{i.fillStyle="#1668c9",i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.textBaseline="middle",i.font=`900 124px ${cn}`,i.fillText("P",150,e/2+6),i.fillRect(256,e/2-13,80,26),i.beginPath(),i.moveTo(330,e/2-42),i.lineTo(382,e/2),i.lineTo(330,e/2+42),i.fill()}),boot:()=>Zn(512,160,(i,t,e)=>{i.fillStyle="#178a3c",i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.beginPath(),i.arc(74,62,44,0,Math.PI*2),i.fill(),wl(i,74,62,30),i.fillStyle="#ffffff",i.textBaseline="middle",i.font=`700 30px ${cn}`,i.fillText("woolworths",14,134,130),i.font=`700 56px ${cn}`,i.fillText("Direct",300,52,190),i.fillText("to boot",300,112,190),i.fillRect(178,44,96,62),i.fillStyle="#178a3c",i.fillRect(186,52,80,30)}),tower:()=>Zn(512,400,(i,t,e)=>{i.fillStyle="#34383b",i.fillRect(0,0,t,e),wl(i,t/2,150,118),i.fillStyle="#ffffff",i.textBaseline="middle",i.textAlign="center",i.font=`400 88px ${cn}`,i.fillText("woolworths",t/2,336,t-40)}),cafe:()=>Zn(640,224,(i,t)=>{i.fillStyle="#ffffff",i.textBaseline="middle",i.textAlign="center",i.font='400 112px Georgia, "Times New Roman", serif',i.fillText("botanic café",t/2,78,t-30),i.font=`400 54px ${cn}`,i.fillText("espresso  kitchen",t/2,176,t-120)}),entry:()=>Zn(1024,256,(i,t,e)=>{i.fillStyle="#ffffff",i.textBaseline="middle",i.font=`400 170px ${cn}`,i.fillText("woolworths",20,e/2+14,700),wl(i,880,e/2,104)})};function Vu(i){const t=new Ye({map:i,alphaTest:.4,roughness:.8,metalness:0,side:Ee,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});return t.onBeforeCompile=e=>{e.uniforms.uNight=es,e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * uNight * 0.7;`)},t.customProgramCacheKey=()=>"moorooka-sign",t}function Wu(i){const t=S=>Yn(i,S[0],S[1]),e=t(Pv),n=t(Lv),s=Math.hypot(n[0]-e[0],n[1]-e[1]),r=(n[0]-e[0])/s,o=(n[1]-e[1])/s,a=(S,E)=>[e[0]+S*r-E*o,e[1]+S*o+E*r],l=t(Gu[0]),c=t(Gu[1]),h=Math.hypot(c[0]-l[0],c[1]-l[1]),d=(c[0]-l[0])/h,u=(c[1]-l[1])/h,f=u,m=-d,v=l[0]-10*f,p=l[1]-10*m;return{nw:e,centre:a,wing:(S,E)=>[v+S*f+E*d,p+S*m+E*u],toWing:(S,E)=>[(S-v)*f+(E-p)*m,(S-v)*d+(E-p)*u],toCentre:(S,E)=>[(S-e[0])*r+(E-e[1])*o,-(S-e[0])*o+(E-e[1])*r],south:S=>-((v-n[0])*o-(p-n[1])*r+S*(f*o-m*r))/(d*o-u*r),centreHeading:Math.atan2(-o,r),wingHeading:Math.atan2(-m,f),origin:[v,p]}}function Ov(i){const t=Wu(i);return(e,n)=>{const[s,r]=t.toWing(e,n);if(s>-14.5&&s<10.4&&r>-11&&r<40)return!0;const[o,a]=t.toCentre(e,n);if(o<-3||o>106||a<-3||a>70)return!1;let l=!1;const c=ks.length/2;for(let h=0,d=c-1;h<c;d=h++){const u=ks[h*2],f=ks[h*2+1],m=ks[d*2],v=ks[d*2+1];f>a!=v>a&&o<(m-u)*(a-f)/(v-f)+u&&(l=!l);const p=Math.max(0,Math.min(1,((o-u)*(m-u)+(a-f)*(v-f))/((m-u)**2+(v-f)**2||1)));if(Math.hypot(o-u-(m-u)*p,a-f-(v-f)*p)<3)return!0}return l}}function zv(i,t,e){const n=new Ie;if(n.name="square",!e)return n;const s=Wu(i),r=new se,o=Dn(410500),a=[],l=e.eave,c=e.ridge,h=l+1.7,d=Math.min(31,l-13);let u=()=>{};const f=(I,F,B)=>{u=()=>r.frame(I,0,F,B),u()},m=()=>f(s.nw[0],s.nw[1],s.centreHeading),v=()=>f(s.origin[0],s.origin[1],s.wingHeading),p=(I,F)=>{const B=Math.hypot(F[0]-I[0],F[1]-I[1]);return f(I[0],I[1],Math.atan2(-(F[1]-I[1])/B,(F[0]-I[0])/B)),B},g=(I,F=1.5)=>t.yAt(r.wx(I,F),r.wz(I,F)),x=(I,F,B,Z,D,j)=>a.push({corners:[r.wx(I,D),B,r.wz(I,D),r.wx(F,D),B,r.wz(F,D),r.wx(F,D),Z,r.wz(F,D),r.wx(I,D),Z,r.wz(I,D)],tex:j}),M=(I,F)=>{(I[5]-I[2])*(I[6]-I[0])-(I[3]-I[0])*(I[8]-I[2])>0?r.quad(I[0],I[1],I[2],I[3],I[4],I[5],I[6],I[7],I[8],I[9],I[10],I[11],F):r.quad(I[0],I[1],I[2],I[9],I[10],I[11],I[6],I[7],I[8],I[3],I[4],I[5],F)},y=(I,F,B,Z,D,j,J=0,ot=.05)=>{if(Z-B<.05||F-I<.05)return;const lt=Math.max(1,Math.round((F-I)/D));for(let ft=0;ft<lt;ft++)r.box(I+(F-I)*ft/lt,B,J,I+(F-I)*(ft+1)/lt,Z,ot,ft%2?Nt(j,.955):j,null)},S=(I,F,B,Z,D=Nv,j=.6)=>{r.quad(I,B,.06,F,B,.06,F,Z,.06,I,Z,.06,D,j);const J=Math.max(1,Math.round((F-I)/1.4));for(let ot=0;ot<=J;ot++){const lt=I+(F-I)*ot/J;r.box(lt-.04,B,.06,lt+.04,Z,.11,Ys,null)}r.box(I,Z-.1,.06,F,Z,.12,Ys),r.box(I,B,.06,F,B+.12,.12,Ys)},E=(I,F,B,Z,D)=>{r.box(I,B,0,F,B+.16,Z,Nt(ge,.9),Xs,Nt(ge,.86)),r.box(I,B-.04,Z-.1,F,B+.46,Z,ge);for(const j of[I,F-.1])r.box(j,B-.04,0,j+.1,B+.46,Z,ge);for(const j of[I+.7,F-.7])r.quad(j-.04,D,.06,j+.04,D,.06,j+.04,B+.46,Z-.25,j-.04,B+.46,Z-.25,ui)},_=(I,F,B,Z,D,j,J=Nt(yl,.9))=>{for(let ot=F,lt=0;ot<D-.01;ot+=.26,lt++)r.box(I,ot,B,Z,Math.min(ot+.26,D),j,lt%2?Nt(yl,.94):yl,null);J&&r.quad(I,D,j,Z,D,j,Z,D,B,I,D,B,J)},b=(I,F,B,Z,D=lo,j=Uv)=>{const J=r.wx(I,B),ot=r.wz(I,B),lt=o()*Math.PI;for(let ft=0;ft<6;ft++){r.frame(J,F,ot,lt+ft/6*Math.PI*2);const Tt=.75+o()*.4;r.blob(0,Z*.48*Tt,Z*.2+ft%2*Z*.1,Z*.2,Z*.5*Tt,Z*.06,6,4,D,j)}u()},R=(I,F,B,Z,D=El,j=lo)=>r.blob(I,F+Z*.7,B,Z,Z*.8,Z,6,4,D,j);m(),r.walls(Dv,d,l,Vs);const A=66,L=66.5,P=A/2,N=L/2,T=3.5,O=l+3,H=(I,F)=>l+(O-l)*Math.min(1,(1-Math.max(Math.abs(I-P)/P,Math.abs(F-N)/N))/(1-T/P));M([0,l,0,A,l,0,P+T,O,N-T,P-T,O,N-T],e.roof),M([A,l,0,A,l,L,P+T,O,N+T,P+T,O,N-T],Nt(e.roof,.97)),M([A,l,L,0,l,L,P-T,O,N+T,P+T,O,N+T],e.roof),M([0,l,L,0,l,0,P-T,O,N-T,P-T,O,N+T],Nt(e.roof,.97)),r.box(P-T,O,N-T,P+T,O+.8,N+T,Nt(Vs,.9),$(8363952));for(const[I,F,B,Z]of[[6,12,13,23],[6,12,26,33],[5,10,39,45]])M([I,H(I,B)+.12,B,F,H(F,B)+.12,B,F,H(F,Z)+.12,Z,I,H(I,Z)+.12,Z],Hu);const k=l-.35;r.cap(Iv,k,Xs),r.quad(A,k,0,A,k,L,A,l,L,A,l,0,Vs);for(const[I,F,B,Z]of[[67.5,77,30,44],[67.5,77,47,62],[80.5,87,30,41]])r.box(I,k,B,F,k+.16,Z,Mn,Hu);for(const[I,F]of[[70,12],[73.5,17],[69,22],[84,44.5],[72,64],[91,25]])r.box(I,k,F,I+2.2,k+1.1,F+1.3,ao,Nt(ao,.85));const X=c-.6;r.box(70.5,k,4,75.5,X,5.1,ui);for(let I=k;I<X-1.4;I+=.5)r.box(70.5,I,5.1,75.5,I+.3,8.2,Nt(ui,1.25),null);r.box(70.5,X-1.6,5.1,75.5,X-1.4,8.2,ui),p(s.centre(75.5,4),s.centre(70.5,4)),x(.25,4.75,X-3.9,X-.25,.04,Jn.tower());const V=s.centre(98.4,23.2),z=s.centre(98.4,26.3),G=s.centre(75.2,0);let W=p(V,G);r.box(0,l,-.3,W,h,0,ge,ge),S(.3,3.4,g(1.8),g(1.8)+3.6,qs);{const I=g(2,1);_(.6,I-.5,.25,3.8,I+.8,1.6,bl);for(const F of[1.2,2.2,3.2])b(F,I+.75,.9,.8);r.box(-.5,I,.3,.3,I+1.9,1.3,$(9067066));for(let F=0;F<4;F++)r.box(4.3+F*.5,I+.25,.3,4.7+F*.5,I+1,.9,Mn,null)}const ut=(I,F,B)=>{for(let Z=I;Z<F;Z+=3){const D=Math.min(Z+3,F),j=g(Z,1.4)+.3,J=g(D,1.4)+.3;M([Z,j,0,Z,j,B,D,J,B,D,J,0],oo),r.quad(Z,j-.6,B,D,J-.6,B,D,J,B,Z,j,B,fi)}};ut(-1,W,2.8);const q=7,at=(W-q-3.6)/3;for(let I=0;I<3;I++){const F=3.6+I*at,B=F+at,Z=g((F+B)/2);r.box(F,Z-.6,0,B,Z+.05,.08,Nt(Vs,.8),null),S(F+.35,B-.35,Z+.05,Z+3),E(F+.15,B-.15,Z+3.25,2.1,Math.min(h-.3,Z+5.3)),y(F,B,Z+3.75,h,1.3,ge)}const ct=Gt+4;S(W-q,W-.2,g(W-4)-.2,ct,qs,.5),r.box(W-q,ct,0,W,ct+.5,.35,ui),y(W-q,W,ct+.5,h,1.3,ge),W=p(G,s.nw),S(.2,6.6,Gt-1.2,ct,qs,.5),r.box(0,ct,0,6.8,ct+.5,.35,ui);{const F=g(48,3);y(24.2,W,F+4.1,l,6,Ws),S(31,57,F+.1,F+3.1),r.box(27,F+3.5,0,69,F+3.7,2.6,Nt(ge,.92),Xs,Nt(ge,.85)),r.box(27,F+3.45,2.5,69,F+3.95,2.6,ge);for(let B=28;B<=68;B+=8){const Z=t.yAt(r.wx(B,2.4),r.wz(B,2.4))-.2;r.cyl(B,Z,2.4,.09,.09,F+3.7-Z,5,Mn)}}const mt=s.centre(0,66.5),pt=s.centre(79.3,66.5);W=p(s.nw,mt),y(0,W,g(W/2)+.3,l,6,Ws);for(const I of[48,55])r.box(I,g(I+2)-.3,0,I+4,g(I+2)+4,.1,Mn,null);W=p(mt,pt),y(0,W,g(W/2)+.3,l,6,Ws);{const I=g(22,3);for(let F=11;F<33;F+=5.5)r.box(F,I-.5,0,F+4.2,I+4.2,.1,Mn,null);r.box(8,I+5,0,36,I+5.25,5,Nt(ge,.92),Xs,Nt(ge,.82));for(const F of[8.3,17.5,26.5,35.7])r.cyl(F,I-1,4.7,.11,.11,6,5,Mn)}const Ct=s.centre(79.3,42.5),Kt=s.centre(88.2,47.9),st=s.centre(88.2,26.3);W=p(pt,Ct),y(0,W,g(W/2)+.3,l,6,Ws),r.box(4,g(5)-.2,0,5.1,g(5)+2.1,.08,Ys,null),W=p(Kt,st),r.box(0,l,-.3,W,h,0,ge,ge),y(0,W,g(W/2)+.3,h,1.3,ge),r.box(3,g(4)-.2,0,4.1,g(4)+2.1,.08,Ys,null),W=p(st,z),r.box(0,l,-.3,W,h,0,ge,ge);{const I=g(4);S(.5,5.4,I+.05,I+3),E(.3,5.6,I+3.25,1.9,Math.min(h-.3,I+5.3)),y(0,5.8,I+3.75,h,1.3,ge),S(6,W-.2,g(8)-.1,g(8)+3.6,qs),x(6.5,W-.6,g(8)+1.25,g(8)+2.4,.13,Jn.cafe()),ut(0,W+1,2.2);for(const F of[6.8,8.6])b(F,g(F,2.6)+.3,2.6,1.5,Fv,$(11880538))}W=p(z,V),r.box(0,l,-.3,W,h,0,ge,ge),S(.2,W-.2,g(3)-.1,g(3)+3.6,qs),m();const dt=t.yAt(V[0],V[1]),At=95.9,Ft=23.8,yt=4.4,ie=-50*Math.PI/180,Re=100*Math.PI/180,oe=16,we=dt+3.75,he=h+.8,ve=(I,F=yt)=>{const B=ie+(Re-ie)*I/oe;return[At+F*Math.cos(B),Ft+F*Math.sin(B)]};for(let I=0;I<oe;I++){const[F,B]=ve(I),[Z,D]=ve(I+1),[j,J]=ve(I,yt-.14),[ot,lt]=ve(I+1,yt-.14),ft=I%2?Nt($s,.955):$s;r.quad(Z,we,D,F,we,B,F,he,B,Z,he,D,ft),r.quad(j,we,J,ot,we,lt,ot,he,lt,j,he,J,Nt($s,.7)),M([F,he,B,Z,he,D,ot,he,lt,j,he,J],Nt($s,.85))}const Oe=[];for(let I=0;I<=oe;I++)Oe.push(...ve(I,yt-.14));const[ue,K]=ve(0,yt-.14);Oe.push(ve(oe,yt-.14)[0],26.3,98.4,26.3,98.4,23.2,(ue+K+75.2)/2,(ue+K-75.2)/2),r.cap(Oe,we+.02,ui);const Lt=[];for(let I=0;I<=oe;I++)Lt.push(...ve(I,yt+.9));Lt.push(ve(oe)[0],26.3,98.4,26.3,98.4,23.2,(ue+K+75.2)/2,(ue+K-75.2)/2),r.cap(Lt,dt+.32,oo);{const I=[101.6,c,21.4],F=[82,h+1.3,4],B=[86,h+1.3,29.6],Z=[77,h+.5,13],D=$(4935765),j=.32;for(const[J,ot,lt]of[[I,F,Z],[I,Z,B]])M([J[0],J[1],J[2],ot[0],ot[1],ot[2],lt[0],lt[1],lt[2],lt[0],lt[1],lt[2]],D),r.tri(J[0],J[1]-j,J[2],ot[0],ot[1]-j,ot[2],lt[0],lt[1]-j,lt[2],Nt(D,1.6));for(const[J,ot]of[[I,F],[F,Z],[Z,B],[B,I]])r.quad(J[0],J[1]-j,J[2],ot[0],ot[1]-j,ot[2],ot[0],ot[1],ot[2],J[0],J[1],J[2],Nt(D,.9));for(const[J,ot,lt]of[[99.3,25.5,c-1.2],[98.9,20.6,c-1.5],[94.2,27.9,h+2.2]]){const[ft,Tt]=s.centre(J,ot);r.cyl(J,t.yAt(ft,Tt)-.3,ot,.17,.17,lt-t.yAt(ft,Tt)+.3,6,ui)}}const jt=Jn.entry(),Yt={pos:[],uv:[]};{const I=62*Math.PI/180,F=-34*Math.PI/180,B=14,Z=we+.8,D=we+2.4;for(let j=0;j<B;j++){const J=zt=>{const Xt=I+(F-I)*zt/B;return s.centre(At+(yt+.05)*Math.cos(Xt),Ft+(yt+.05)*Math.sin(Xt))},[ot,lt]=J(j),[ft,Tt]=J(j+1),Wt=j/B,xt=(j+1)/B;Yt.pos.push(ot,Z,lt,ft,Z,Tt,ft,D,Tt,ot,Z,lt,ft,D,Tt,ot,D,lt),Yt.uv.push(Wt,0,xt,0,xt,1,Wt,0,xt,1,Wt,1)}}v();const _t=s.south(0),ye=s.south(-13),Ot=s.south(5.2),kt=-13,U=6.4;r.walls([0,0,0,_t,kt,ye,kt,0],d,sn,Vs);const w=[kt,0,0,0,0,-.6,U,-.6,U,Ot,5.2,Ot,kt,ye];r.cap(w,ro,Xs),r.walls(w,sn,ro,ge),r.cap([0,-.6,U,-.6,U,Ot,5.2,Ot,0,_t],sn,Nt(ge,.93));for(const[I,F]of[[-9,4],[-6,12],[-9.5,16]])r.box(I,ro,F,I+2.2,ro+1.1,F+1.3,ao,Nt(ao,.85));for(let I=1.2;I<_t-1;I+=2.6)for(const F of[1.6,4.4])r.quad(F-.14,sn-.02,I-.14,F+.14,sn-.02,I-.14,F+.14,sn-.02,I+.14,F-.14,sn-.02,I+.14,$(16774358),3);const tt=3.6;r.walls([0,-.3,tt,-.3,tt,s.south(tt),0,_t],d,Gt,fi),r.cap([0,-.3,tt,-.3,tt,s.south(tt),0,_t],Gt,oo);for(let I=1;I<=5;I++){const F=I*Gs;for(const B of[-.2,.2])r.cyl(4.3,Gt,F+B,.1,.1,sn-Gt,7,ge);r.cyl(1.5,Gt,F+.5,.055,.055,sn-Gt,5,Mn)}const gt=s.south(4.3)-.4;for(const[I,F]of[[-.3,Hs[0]],[Hs[1],gt]]){_(tt,d,I,5,Gt+.45,F,bl);for(let B=I+.9;B<F-.6;B+=1.7+o()*.9){const Z=o();Math.abs(B/Gs-Math.round(B/Gs))<.12||(Z<.55?b(4.3,Gt+.4,B,1.5+o()*1.1):Z<.75?(r.cyl(4.3,Gt+.4,B,.07,.05,1.3,5,$(9076076)),r.blob(4.3,Gt+2.1,B,.85,.6,.85,7,4,El,lo)):R(4.3,Gt+.4,B,.5))}for(let B=I;B<F-.2;B+=4.4){const Z=Math.min(B+4.4,F),D=Kn((B+Z)/2);if(!(D>Gt-.65)){_(5,d,B,6.3,D+.75,Z,bl);for(let j=B+.5;j<Z-.3;j+=.9+o()*.5)R(5.65,D+.7,j,.28+o()*.14,El,o()<.3?$(11122592):lo)}}}{const[I,F]=Hs,B=Kn((I+F)/2)+.12,Z=Gt-B,D=Math.round(Z/.168),j=(6.3-tt-.3)/D;for(let J=0;J<D;J++)r.box(tt+.3+j*J,d,I,tt+.3+j*(J+1),Gt-Z*(J+1)/D,F,fi);r.box(tt,d,I,tt+.3,Gt,F,fi);for(const J of[I+.12,(I+F)/2,F-.12]){for(const[ot,lt]of[[tt+.3,Gt],[6.3,B]])r.box(ot-.03,lt,J-.03,ot+.03,lt+.95,J+.03,Mn,null);r.quad(tt+.3,Gt+.9,J-.03,6.3,B+.9,J-.03,6.3,B+.96,J+.03,tt+.3,Gt+.96,J+.03,Mn)}}{const I=Z=>Z>=-2?9.8:9.8+(Z+2)*.6,F=Z=>Z<-.3?2.6:(Z<Hs[0]||Z>Hs[1])&&Kn(Z)>Gt-.65?5:6.3,B=Ot+1;for(let Z=-9.5;Z<B;Z+=1.5){const D=Math.min(Z+1.5,B),j=Kn(Z)+.12,J=Kn(D)+.12;M([F(Z+.01),j,Z,I(Z),j,Z,I(D),J,D,F(Z+.01),J,D],oo),r.quad(I(Z),j-1.2,Z,I(D),J-1.2,D,I(D),J,D,I(Z),j,Z,fi)}_(2.2,d,-9.5,2.6,Kn(-5)+1.05,-.8)}_(2.6,d,-.8,4.5,sn,-.3,null),_(kt,d,-.25,0,sn,.02,null),p(s.wing(4.5,-.8),s.wing(2.6,-.8)),r.box(.15,Gt+3.8,0,1.75,Gt+4.4,.05,ge),x(.15,1.75,Gt+3,Gt+3.7,.05,Jn.pylonDental()),r.box(.15,Gt+2.3,0,1.75,Gt+2.9,.05,ge),x(.15,1.75,Gt+.8,Gt+1.5,.05,Jn.parking()),x(.15,1.75,Gt-.1,Gt+.7,.05,Jn.boot()),W=p(s.wing(0,_t),s.wing(0,0)),S(.4,W-.4,Gt,Gt+2.9),r.box(0,Gt+2.9,0,W,Gt+3.3,.12,$(9407106)),y(.2,W-.1,Gt+3.3,sn-.05,1.25,$s,.2,.3);for(let I=1;I<=5;I++)r.box(W-I*Gs-.9,Gt+3,.1,W-I*Gs-.82,Gt+3.08,1.5,Mn);x(W-19.6,W-16,Gt+3.5,Gt+4.7,.34,Jn.dental()),x(W-14.6,W-11.2,Gt+3.55,Gt+4.68,.34,Jn.medical()),W=p(s.wing(kt,0),s.wing(kt,ye));{const I=g(W/2,3);r.box(.4,I-.3,-.5,W-.4,Gt-.6,.02,$(1777185),null);for(let F=0;F<=W;F+=W/4)r.box(F-.3,I-.5,0,F+.3,Gt-.6,.12,fi,null);r.box(0,Gt-.6,0,W,Gt,.12,fi),y(0,W,Gt,sn,1.3,Ws)}W=p(s.wing(8.4,-2.8),s.wing(5.6,-4.4));{const I=Kn(-3.6)+.12;_(0,I-1,-.35,W,I+1.15,0),x(.2,W-.2,I+.14,I+1.02,.03,Jn.square())}v();{const I=Kn(15.6)+.12;r.box(6.9,I,15.2,7.4,I+.1,16,fi),r.box(6.95,I+.1,15.25,7.35,I+1.3,15.95,$(15855590),$(14276300)),r.box(7.35,I+.35,15.35,7.37,I+1,15.6,$(15909424),null),r.box(7.35,I+.3,15.65,7.37,I+.95,15.88,$(3108790),null);for(const[F,B,Z]of[[9.2,-1.2,Math.PI],[5.4,-8.4,Math.PI*.75]]){const D=Kn(B)+.12,j=r.wx(F,B),J=r.wz(F,B);r.frame(j,0,J,s.wingHeading+Z),r.cyl(0,D,0,.07,.07,4.2,6,Mn),r.box(-.17,D+2.9,.08,.17,D+3.95,.3,$(1776927));for(const[ot,lt,ft]of[[0,14169643,0],[1,15114780,0],[2,3126359,2]]){const Tt=D+3.62-ot*.32;r.quad(-.1,Tt,.31,.1,Tt,.31,.1,Tt+.22,.31,-.1,Tt+.22,.31,Nt($(lt),ft?1:.45),ft)}u()}}r.frame();const ht=new Jt(r.build(),qn());ht.castShadow=!0,ht.receiveShadow=!0,n.add(ht);for(const I of a){const F=new Ae,B=I.corners;F.setAttribute("position",new re([B[0],B[1],B[2],B[3],B[4],B[5],B[6],B[7],B[8],B[0],B[1],B[2],B[6],B[7],B[8],B[9],B[10],B[11]],3)),F.setAttribute("uv",new re([0,0,1,0,1,1,0,0,1,1,0,1],2)),F.computeVertexNormals(),n.add(new Jt(F,Vu(I.tex)))}const vt=new Ae;return vt.setAttribute("position",new re(Yt.pos,3)),vt.setAttribute("uv",new re(Yt.uv,2)),vt.computeVertexNormals(),n.add(new Jt(vt,Vu(jt))),n}const ho=[3104138,12076090,15131350,4156234,2895411,14263361,8018572,10135469,15043163,4886453].map(i=>new Rt(i)),Xu=[3422271,5989488,2832981,7035464,2040100,11049860].map(i=>new Rt(i)),qu=[14727578,13211508,10252114,15782068,8016960].map(i=>new Rt(i)),Yu=[3811870,13214314,15260870,1907999,9067059].map(i=>new Rt(i)),Bv=240,$u=230;class kv{constructor(t,e,n,s,r=()=>!1){nt(this,"group",new Ie);nt(this,"walks",[]);nt(this,"centres");nt(this,"people",[]);nt(this,"parts");nt(this,"rand",Dn(9071));nt(this,"noGo",[]);nt(this,"drawnAt",[]);nt(this,"m",new Qt);nt(this,"r",new Qt);nt(this,"q",new rn);nt(this,"v",new Q);nt(this,"up",new Q(0,1,0));nt(this,"one",new Q(1,1,1));nt(this,"size",new Q);nt(this,"hip",new Qt);nt(this,"body",new Qt);this.hf=n,this.skip=r,this.group.name="strollers";for(const p of t){if(p.cls>3||p.flags&(Vr|Is)||p.length<30)continue;const g=e[String(p.index)],x=g?[[1,g[0]/10],[-1,g[1]/10]]:p.cls<=2?[[1,2.3],[-1,2.3]]:[];for(const[M,y]of x){if(!(y>0))continue;const S=p.pts.length/3,E=new Float32Array(S*2),_=new Float32Array(S);for(let b=0;b<S;b++){const R=Math.max(b-1,0),A=Math.min(b+1,S-1);let L=p.pts[A*3]-p.pts[R*3],P=p.pts[A*3+2]-p.pts[R*3+2];const N=Math.hypot(L,P)||1;L/=N,P/=N;const T=p.width/2+y;E[b*2]=p.pts[b*3]-P*M*T,E[b*2+1]=p.pts[b*3+2]+L*M*T,b&&(_[b]=_[b-1]+Math.hypot(E[b*2]-E[b*2-2],E[b*2+1]-E[b*2-1]))}this.walks.push({pts:E,at:_,length:_[S-1]})}}this.centres=new Float32Array(this.walks.length*2),this.walks.forEach((p,g)=>{const x=Math.floor(p.pts.length/4)*2;this.centres[g*2]=p.pts[x],this.centres[g*2+1]=p.pts[x+1]});const o=qn({roughness:.84}),a=(p,g)=>{const x=new an(p.build(),o,g);return x.castShadow=!0,x.frustumCulled=!1,x.count=0,x.setColorAt(0,new Rt(1,1,1)),this.group.add(x),x},l=$(16777215),c=$(12105912),h=new se;h.box(-.21,.84,-.12,.21,1.42,.12,l);const d=new se;d.blob(0,1.56,0,.11,.13,.11,6,3,l);const u=new se;u.box(-.08,-.84,-.09,.08,0,.09,l,null);const f=new se;f.box(-.04,-.58,-.09,.04,0,.09,l,null);const m=new se;m.box(-.12,.32,-.32,.12,.56,.3,l),m.box(-.09,.48,.26,.09,.7,.48,l),m.box(-.05,.5,.46,.05,.6,.58,c);for(const p of[-.08,.08])m.box(p-.03,.68,.3,p+.03,.78,.36,c);m.box(-.025,.5,-.5,.025,.56,-.3,l);for(const[p,g]of[[-.08,.2],[.08,.2],[-.08,-.22],[.08,-.22]])m.box(p-.035,0,g-.04,p+.035,.34,g+.04,c);const v=new se;v.box(-.012,0,-.012,.012,1,.012,$(13123631),null),this.parts={torso:a(h,s),head:a(d,s),leg:a(u,s*2),arm:a(f,s*2),dog:a(m,s),lead:a(v,s)},this.parts.lead.castShadow=!1;for(let p=0;p<s;p++)this.people.push(this.newWalker())}newWalker(){return{walk:this.walks[0],s:-1,dir:1,pace:1.15+this.rand()*.4,tall:.92+this.rand()*.12,lane:(this.rand()-.5)*.5,dog:this.rand()<.35?Math.floor(this.rand()*Yu.length):-1,heading:0,dogHeading:0}}place(t,e,n){const s=[];for(let r=0;r<this.walks.length;r++)Math.hypot(this.centres[r*2]-e,this.centres[r*2+1]-n)<$u*.8&&s.push(r);return s.length?(t.walk=this.walks[s[Math.floor(this.rand()*s.length)]],t.s=this.rand()*t.walk.length,t.dir=this.rand()<.5?1:-1,!0):!1}where(t,e){const n=t.at,s=t.pts;let r=0,o=n.length-1;for(;o-r>1;){const d=r+o>>1;n[d]<e?r=d:o=d}const a=n[o]-n[r]||1,l=Math.min(1,Math.max(0,(e-n[r])/a)),c=(s[o*2]-s[r*2])/a,h=(s[o*2+1]-s[r*2+1])/a;return[s[r*2]+(s[o*2]-s[r*2])*l,s[r*2+1]+(s[o*2+1]-s[r*2+1])*l,c,h]}setNoGo(t){this.noGo=t}pick(t,e){let n=null;if(!this.group.visible)return n;for(let s=0;s<this.drawnAt.length;s+=3){const r=this.drawnAt[s],o=this.drawnAt[s+1],a=this.drawnAt[s+2],l=hl({o:t,d:e},r,a,o,o+1.8,1.5);l>0&&(!n||l<n.t)&&(n={type:"person",x:r,z:a,t:l})}return n}update(t,e,n,s){const r=s<Bv&&this.walks.length>0;if(this.group.visible=r,!r)return!1;const o=this.parts;this.drawnAt.length=0;let a=0,l=0;for(const c of this.people){if(c.s<0&&!this.place(c,e,n))continue;c.s+=c.dir*c.pace*t,(c.s>c.walk.length||c.s<0)&&(c.dir=-c.dir,c.s=Math.min(c.walk.length,Math.max(0,c.s)));let[h,d,u,f]=this.where(c.walk,c.s);if(Math.hypot(h-e,d-n)>$u){c.s=-1;continue}if(u*=c.dir,f*=c.dir,h+=f*c.lane,d-=u*c.lane,this.skip(h,d)||this.noGo.some(([M,y,S])=>(h-M)**2+(d-y)**2<S*S))continue;let m=Math.atan2(u,f)-c.heading;m=Math.atan2(Math.sin(m),Math.cos(m)),c.heading+=m*Math.min(1,t*5);const v=this.hf.yAt(h,d)+.02,p=c.tall,g=Math.sin(c.s*4.4)*.55;this.q.setFromAxisAngle(this.up,c.heading),this.drawnAt.push(h,v,d),this.body.compose(this.v.set(h,v,d),this.q,this.size.set(p,p,p)),o.torso.setMatrixAt(a,this.body),o.head.setMatrixAt(a,this.body);const x=a*7+Math.floor(c.pace*100)>>>0;o.torso.setColorAt(a,ho[x%ho.length]),o.head.setColorAt(a,qu[x%qu.length]);for(const[M,y]of[[0,-1],[1,1]])this.r.makeRotationX(y*g).premultiply(this.hip.makeTranslation(y*.09,.84,0).premultiply(this.body)),o.leg.setMatrixAt(a*2+M,this.r),o.leg.setColorAt(a*2+M,Xu[x%Xu.length]),this.r.makeRotationX(-y*g*.8).premultiply(this.hip.makeTranslation(y*.25,1.38,0).premultiply(this.body)),o.arm.setMatrixAt(a*2+M,this.r),o.arm.setColorAt(a*2+M,ho[x%ho.length]);if(c.dog>=0){const M=h+u*1+f*.75,y=d+f*1-u*.75;let S=Math.atan2(u,f)-c.dogHeading;S=Math.atan2(Math.sin(S),Math.cos(S)),c.dogHeading+=S*Math.min(1,t*4);const E=Math.abs(Math.sin(c.s*7))*.03;this.q.setFromAxisAngle(this.up,c.dogHeading),this.m.compose(this.v.set(M,this.hf.yAt(M,y)+.02+E,y),this.q,this.one),o.dog.setMatrixAt(l,this.m),o.dog.setColorAt(l,Yu[c.dog]);const _=h+f*.26*p+u*.1,b=d-u*.26*p+f*.1,R=v+.86*p,A=M+u*.3,L=y+f*.3,P=this.hf.yAt(M,y)+.62,N=_-A,T=R-P,O=b-L,H=Math.hypot(N,T,O)||1;this.q.setFromUnitVectors(this.up,this.v.set(N/H,T/H,O/H)),this.m.compose(this.v.set(A,P,L),this.q,this.size.set(1,H,1)),o.lead.setMatrixAt(l,this.m),l++}a++}o.torso.count=o.head.count=a,o.leg.count=o.arm.count=a*2,o.dog.count=o.lead.count=l;for(const c of Object.values(o))c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0);return a>0}dispose(){for(const t of Object.values(this.parts))t.geometry.dispose(),t.dispose()}}function Gv(){const i=[];let t=new se;t.cyl(0,0,0,.04,.026,.56,4,$(12168602)),is(t,0,.72,0,.36,.3,.36,2,$(4020790),$(9086578)),is(t,.17,.52,.1,.24,.19,.24,3,$(3757370),$(8099942)),i.push(yi(t)),t=new se,t.cyl(0,0,0,.06,.045,.36,4,$(7034954)),is(t,0,.62,0,.47,.4,.47,4,$(2773542),$(7973460)),i.push(yi(t)),t=new se,t.cyl(0,0,0,.05,.035,.42,4,$(6246470)),is(t,0,.66,0,.5,.34,.5,5,$(6114450),$(12034278)),i.push(yi(t)),t=new se,t.cyl(0,0,0,.07,.05,.5,4,$(6969418)),is(t,0,.7,0,.62,.26,.62,6,$(4156975),$(14831660)),i.push(yi(t)),t=new se,t.cyl(0,0,0,.034,.026,.82,5,$(10128504));for(let e=0;e<7;e++)t.frame(0,0,0,e/7*Math.PI*2),t.blob(0,.83-e%2*.03,.13,.04,.022,.13,4,3,$(3959600),$(7972432));return t.frame(),t.blob(0,.86,0,.06,.06,.06,5,3,$(5077562)),i.push(yi(t)),t=new se,t.cyl(0,0,0,.03,.022,.2,4,$(5194038)),t.cyl(0,.14,0,.2,.1,.3,6,$(2310186)),t.cyl(0,.4,0,.16,.07,.3,6,$(2837040)),t.cyl(0,.66,0,.11,0,.34,6,$(3627578)),i.push(yi(t)),t=new se,is(t,0,.45,0,.8,.5,.8,1,$(3101224),$(7774294)),i.push(yi(t)),i}function Hv(i,t,e,n=()=>!1){return f_(i.trees,Gv(),t,e,n,{tile:400,near:300})}const Tl=6,Vv=1,Ku=2,Wv=3,Xv=4,qv=5,Yv=6,$v=7,Kv=8,Zv=9,Jv=10,Qv=11,jv=12,t1=13,e1=14,n1=17,Sn=90,Zu=330,Ei=$(9409430),Al=$(2500651),i1=$(9071178),s1=$(13815750),Rl=$(3104058),r1=$(11022890),o1=$(14268718),Ju=[5209412,5932872,6853456,4682303,7245642].map($),Qu=[14241898,15262416,14726447,11038665].map($),ju=[3104138,12076090,15131350,4156234,2895411,14263361,8018572,10135469].map($),tf=[8359802,13223088,9278358,6253414,14210508].map($),ef=[10463130,13223088,7306612,14210508].map($),nf=[3811870,13214314,15260870,1907999,9067059].map($),a1=[$(15855592),$(9075560),$(10246723),$(2763822)];function l1(i,t,e=0){const n=nf[t%nf.length],s=Nt(n,.7);i.box(-.32,.32,-.12,.3,.56,.12,n),i.box(.26,.48,-.09,.48,.7,.09,n),i.box(.46,.5,-.05,.58,.6,.05,s);for(const r of[-.08,.08])i.box(.3,.68,r-.03,.36,.78,r+.03,s);i.box(-.5,.5,-.025,-.3,.56,.025,n);for(const[r,o,a]of[[.2,-.08,e],[.2,.08,-e],[-.22,-.08,-e],[-.22,.08,e]])i.box(r-.04+a*.12,0,o-.035,r+.04+a*.12,.34,o+.035,s)}function Cl(i,t,e,n){const s=i/2+n,r=t/2+n;if(!e)return[[-s,-r],[s,-r],[s,r],[-s,r]];const o=Math.min(r,s),a=[];for(const[l,c]of[[s-o,-Math.PI/2],[-s+o,Math.PI/2]])for(let h=0;h<=6;h++){const d=c+h/6*Math.PI;a.push([l+Math.cos(d)*o,Math.sin(d)*o])}return a}class c1{constructor(t,e,n,s,r=()=>!1){nt(this,"group",new Ie);nt(this,"cells",new Map);nt(this,"built",new Map);nt(this,"material",qn({roughness:.84}));nt(this,"water",new Ye({color:4635862,roughness:.08,metalness:.1,emissive:871260,emissiveIntensity:.35,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}));nt(this,"flatMat",qn({roughness:.9}));nt(this,"far");this.data=t,this.hf=e,this.shadows=n,this.near=s,this.skip=r,this.far=s+150,this.group.name="yards",this.flatMat.polygonOffset=!0,this.flatMat.polygonOffsetFactor=-2,this.flatMat.polygonOffsetUnits=-4;for(let o=0;o+Tl<=t.length;o+=Tl){const a=`${Math.floor(t[o+1]/10/Sn)}:${Math.floor(t[o+2]/10/Sn)}`;let l=this.cells.get(a);l||this.cells.set(a,l=[]),l.push(o)}}get count(){return this.data.length/Tl}update(t,e,n){const s=n<Zu;let r=this.group.visible!==s;this.group.visible=s;for(const[d,u]of this.built){const[f,m]=d.split(":").map(Number);Math.hypot((f+.5)*Sn-t,(m+.5)*Sn-e)>this.far&&(this.group.remove(u),u.traverse(v=>{var p;return(p=v.geometry)==null?void 0:p.dispose()}),this.built.delete(d),r=!0)}if(!s)return r;let o=null,a=this.near;const l=Math.floor(t/Sn),c=Math.floor(e/Sn),h=Math.ceil(this.near/Sn)+1;for(let d=c-h;d<=c+h;d++)for(let u=l-h;u<=l+h;u++){const f=`${u}:${d}`;if(this.built.has(f)||!this.cells.has(f))continue;const m=Math.hypot((u+.5)*Sn-t,(d+.5)*Sn-e);m<a&&(a=m,o=f)}if(o){const d=this.build(this.cells.get(o));this.built.set(o,d),this.group.add(d),r=!0}return r}pending(t,e,n){if(n>=Zu)return!1;for(const s of this.cells.keys()){if(this.built.has(s))continue;const[r,o]=s.split(":").map(Number);if(Math.hypot((r+.5)*Sn-t,(o+.5)*Sn-e)<this.near)return!0}return!1}build(t){const e=this.data,n=this.hf,s=new se,r=new se,o=new se;for(const c of t){const h=e[c],d=e[c+1]/10,u=e[c+2]/10,f=e[c+3]/10*Math.PI/180,m=e[c+4],v=e[c+5];if(this.skip(d,u))continue;const p=n.yAt(d,u),g=e[c+1]*31+e[c+2]*17>>>0,x=Dn(g+7);switch(h){case Vv:case Ku:{const M=m/100,y=v/100,S=h===Ku,E=Cl(M,y,S,0),_=Cl(M,y,S,.6),b=Cl(M,y,S,1.5),R=(P,N,T)=>{const O=d+P*Math.cos(f)-N*Math.sin(f),H=u+P*Math.sin(f)+N*Math.cos(f);return[O,n.yAt(O,H)+T,H]},A=$(4635862);for(let P=1;P+1<E.length;P++){const N=R(...E[0],.05),T=R(...E[P],.05),O=R(...E[P+1],.05);o.tri(N[0],N[1],N[2],O[0],O[1],O[2],T[0],T[1],T[2],A)}for(let P=0;P<E.length;P++){const N=(P+1)%E.length,T=R(...E[P],.07),O=R(...E[N],.07),H=R(..._[P],.07),k=R(..._[N],.07);r.quad(T[0],T[1],T[2],H[0],H[1],H[2],k[0],k[1],k[2],O[0],O[1],O[2],s1)}const L=$(1974307);for(let P=0;P<b.length;P++){const N=(P+1)%b.length,[T,,O]=R(...b[P],0),[H,,k]=R(...b[N],0),X=Math.hypot(H-T,k-O);if(X<.2)continue;const V=(H-T)/X,z=(k-O)/X,G=Math.max(1,Math.round(X/.25));for(let W=0;W<G;W++){const ut=T+V*(W*X/G),q=O+z*(W*X/G),at=n.yAt(ut,q),ct=W%Math.max(1,Math.round(2.4/.25))===0?.03:.011;this.skip(ut,q)||(s.frame(ut,at,q,Math.atan2(V,z)),s.box(-ct,0,-ct,ct,1.2,ct,L,null))}for(const W of[.1,1.15]){const ut=n.yAt(T,O)+W,q=n.yAt(H,k)+W;s.frame(),s.quad(T,ut,O,H,q,k,H,q+.04,k,T,ut+.04,O,L)}}break}case Wv:{const M=m/100;s.frame(d,p,u,f),s.cyl(0,0,0,.04,.04,2.1,6,Ei);for(let y=0;y<4;y++){const S=Math.cos(y*Math.PI/2),E=Math.sin(y*Math.PI/2);s.quad(0,1.95,0,S*M,2.08,E*M,S*M,2.12,E*M,0,1.99,0,Ei)}for(const y of[.45,.72,1]){const S=M*y;for(let E=0;E<4;E++){const _=E*Math.PI/2,b=(E+1)*Math.PI/2,R=1.95+.13*y;s.box(Math.min(Math.cos(_)*S,Math.cos(b)*S)-.008,R-.008,Math.min(Math.sin(_)*S,Math.sin(b)*S)-.008,Math.max(Math.cos(_)*S,Math.cos(b)*S)+.008,R+.008,Math.max(Math.sin(_)*S,Math.sin(b)*S)+.008,$(13619922),null)}}if(x()<.55)for(let y=0;y<4;y++){if(x()<.45)continue;const S=y*Math.PI/2,E=M*.95;for(let _=0;_<3;_++){const b=(_+.5)/3,R=Math.cos(S)*E*(1-b)+Math.cos(S+Math.PI/2)*E*b,A=Math.sin(S)*E*(1-b)+Math.sin(S+Math.PI/2)*E*b,L=.5+x()*.35,P=.22+x()*.12,N=ju[Math.floor(x()*ju.length)],T=(Math.cos(S+Math.PI/2)-Math.cos(S))*.7071,O=(Math.sin(S+Math.PI/2)-Math.sin(S))*.7071;s.quad(R-T*P,2.1,A-O*P,R+T*P,2.1,A+O*P,R+T*P,2.1-L,A+O*P,R-T*P,2.1-L,A-O*P,N)}}break}case Xv:{const M=ef[g%ef.length],y=m/200,S=v/200;s.frame(d,p,u,f),s.box(-y,0,-S,y,1.9,S,M),s.quad(-y-.1,1.85,S+.1,y+.1,1.85,S+.1,y+.1,2.25,0,-y-.1,2.25,0,Nt(M,1.08)),s.quad(y+.1,1.85,-S-.1,-y-.1,1.85,-S-.1,-y-.1,2.25,0,y+.1,2.25,0,Nt(M,.95)),s.tri(y,1.9,S,y,1.9,-S,y,2.25,0,M),s.tri(-y,1.9,-S,-y,1.9,S,-y,2.25,0,M),s.quad(-.75,0,S+.01,.75,0,S+.01,.75,1.75,S+.01,-.75,1.75,S+.01,Nt(M,.86)),s.box(-.01,.1,S+.01,.01,1.7,S+.03,Nt(M,.7),null);break}case qv:{const M=m/100,y=.85,S=[$(3108789),$(3840586),$(14262842)][g%3];s.frame(d,p,u,f),s.cyl(0,y-.02,0,M+.25,M+.25,.08,12,S,S),s.cyl(0,y,0,M,M,.07,12,Al,Al);for(let E=0;E<6;E++){const _=E/6*Math.PI*2,b=Math.cos(_)*(M+.2),R=Math.sin(_)*(M+.2);E%2===0&&s.box(b-.03,0,R-.03,b+.03,y,R+.03,Ei,null),s.box(b-.025,y,R-.025,b+.025,y+1.75,R+.025,$(2895667),null);const A=(E+1)/6*Math.PI*2,L=Math.cos(A)*(M+.2),P=Math.sin(A)*(M+.2);s.quad(b,y+1.7,R,L,y+1.7,P,L,y+1.76,P,b,y+1.76,R,S)}break}case Yv:{const M=m/100,y=v/100,S=tf[g%tf.length];s.frame(d,p,u,0),s.cyl(0,0,0,M,M,y,10,S,Nt(S,.9));for(let E=1;E<4;E++)s.cyl(0,y*E/4,0,M+.012,M+.012,.04,10,Nt(S,.86));s.cyl(0,y,0,.18,.18,.08,6,Nt(S,.8),Nt(S,.8));break}case $v:s.frame(d,p,u,f),s.box(-.6,0,-.3,.6,.85,.3,$(2895409)),s.box(-.55,.85,-.28,.55,1.1,.28,$(10133154),$(3816512));break;case Kv:{const M=x()<.5?$(15526370):$(3882304),y=[$(15328207),$(3104138),$(12076090)][g%3];s.frame(d,p,u,f),s.cyl(0,.7,0,.55,.55,.05,8,M,M),s.box(-.04,0,-.04,.04,.7,.04,Ei,null),x()<.5&&(s.box(-.025,.7,-.025,.025,2.2,.025,Ei,null),s.cyl(0,2,0,1.4,0,.45,8,y));for(let S=0;S<4;S++){const E=S/4*Math.PI*2+.4,_=Math.cos(E)*.85,b=Math.sin(E)*.85;s.box(_-.22,0,b-.22,_+.22,.45,b+.22,M),s.box(_+Math.cos(E)*.2-.04,.45,b+Math.sin(E)*.2-.2,_+Math.cos(E)*.2+.04,.9,b+Math.sin(E)*.2+.2,M)}break}case Zv:{const M=$(13123631),y=$(3104680);s.frame(d,p,u,f);for(const S of[-1.9,1.9])s.box(S-.07,0,-.92,S+.07,2.4,-.88,M,null),s.box(S-.07,0,.88,S+.07,2.4,.92,M,null);s.box(-2,2.36,-.07,2,2.48,.07,M);for(const S of[-.9,.9]){for(const E of[-.22,.22])s.box(S-.015,.48,E-.015,S+.015,2.38,E+.015,Ei,null);s.box(S-.24,.44,-.24,S+.24,.5,.24,S<0?y:Al)}break}case Jv:s.frame(d,p,u,f),s.box(-.62,0,-.3,-.04,1,.3,Rl,r1),s.box(.04,0,-.3,.62,1,.3,Rl,o1),x()<.4&&s.box(.7,0,-.3,1.28,1,.3,Rl,$(6265402));break;case Qv:{const M=[$(15855592),$(2763822),$(10246723),$(13218442)][g%4];s.frame(d,p,u,f),g%3===0?s.box(-.22,0,-.22,.22,1.05,.22,$(10246723)):s.box(-.04,0,-.04,.04,.95,.04,Ei,null),s.box(-.2,.95,-.15,.2,1.25,.15,M);break}case jv:{const M=m/100,y=Math.max(2,Math.round(M/1.2)),S=Dn(v+11);s.frame(d,p,u,f);for(let E=0;E<y;E++){const _=y===1?0:E/(y-1)*M,b=.35+S()*.25,R=Ju[Math.floor(S()*Ju.length)],A=S()<.25?Qu[Math.floor(S()*Qu.length)]:Nt(R,1.12),L=d+Math.sin(f)*_,P=u+Math.cos(f)*_;s.frame(L,n.yAt(L,P),P,0),s.blob((S()-.5)*.3,b*.75,(S()-.5)*.3,b,b*.85,b,6,3,Nt(R,.8),A)}break}case t1:{const M=m/10,y=v/10,S=Math.round(e[c+3]/10)%4,E=a1[S],_=Math.hypot(M-d,y-u);if(_<.5)break;const b=(M-d)/_,R=(y-u)/_,A=Math.atan2(b,R),L=S===2?.8:S===1?1.2:1,P=Math.max(1,Math.round(_/2.4));for(let N=0;N<=P;N++){const T=d+b*(_*N)/P,O=u+R*(_*N)/P;s.frame(T,n.yAt(T,O),O,A);const H=S===2?.2:.05;s.box(-H,0,-H,H,L+(S===2?.15:.05),H,S===2?Nt(E,.9):E)}if(S===1||S===2)for(let N=0;N<P;N++){const T=d+b*(_*N)/P,O=u+R*(_*N)/P,H=d+b*(_*(N+1))/P,k=u+R*(_*(N+1))/P,X=n.yAt(T,O),V=n.yAt(H,k),z=R*.06,G=-b*.06;s.frame(),s.quad(T+z,X,O+G,H+z,V,k+G,H+z,V+L,k+G,T+z,X+L,O+G,E),s.quad(H-z,V,k-G,T-z,X,O-G,T-z,X+L,O-G,H-z,V+L,k-G,Nt(E,.92)),s.quad(T+z,X+L,O+G,H+z,V+L,k+G,H-z,V+L,k-G,T-z,X+L,O-G,Nt(E,1.05))}else{const N=S===0?.16:.12,T=Math.max(2,Math.round(_/N));for(let O=0;O<=T;O++){const H=d+b*(_*O)/T,k=u+R*(_*O)/T;s.frame(H,n.yAt(H,k),k,A),S===0?s.box(-.035,0,-.012,.035,L-.08,.012,E,$(15263454)):s.box(-.01,.05,-.01,.01,L-.05,.01,E,null)}for(const O of[.25,L-.2]){s.frame();const H=n.yAt(d,u)+O,k=n.yAt(M,y)+O,X=R*.02,V=-b*.02;s.quad(d+X,H,u+V,M+X,k,y+V,M+X,k+.05,y+V,d+X,H+.05,u+V,Nt(E,.95)),s.quad(M-X,k,y-V,d-X,H,u-V,d-X,H+.05,u-V,M-X,k+.05,y-V,Nt(E,.9))}}break}case e1:{const M=[$(15328208),$(14205066),$(10469584)][g%3];s.frame(d,p,u,f);for(const[y,S]of[[-.8,-.7],[.8,-.7],[.8,.7],[-.8,.7]])s.box(y-.05,0,S-.05,y+.05,.9,S+.05,i1,null);s.box(-.85,.9,-.75,.85,2,.75,M),s.quad(-.95,1.95,.85,.95,1.95,.85,.95,2.5,0,-.95,2.5,0,$(9128506)),s.quad(.95,1.95,-.85,-.95,1.95,-.85,-.95,2.5,0,.95,2.5,0,$(8077107)),s.tri(.85,2,.75,.85,2,-.75,.85,2.5,0,M),s.tri(-.85,2,-.75,-.85,2,.75,-.85,2.5,0,M),s.quad(.9,.9,-.3,1.6,0,-.3,1.6,0,.3,.9,.9,.3,$(14726447));break}case n1:s.frame(d,p,u,f),l1(s,m);break}}const a=new Ie,l=(c,h,d)=>{if(!c.vertexCount)return;const u=new Jt(c.build(),h);u.castShadow=d&&this.shadows,u.receiveShadow=!0,a.add(u)};return l(s,this.material,!0),l(r,this.flatMat,!1),l(o,this.water,!1),a}dispose(){for(const t of this.built.values())t.traverse(e=>{var n;return(n=e.geometry)==null?void 0:n.dispose()});this.built.clear(),this.material.dispose(),this.flatMat.dispose(),this.water.dispose()}}const sf=1,rf={x:-150,z:-40,dist:2900,polar:54,azimuth:22},h1={day:{shallow:9277288,deep:5003844},golden:{shallow:10127458,deep:4671290},night:{shallow:1976876,deep:593681}};function u1(i,t){const e=new se,n=$(16765440),s=i.length/2;let r=0;for(let l=0;l<s;l++){const c=(l+1)%s,h=i[l*2]/10,d=i[l*2+1]/10,u=i[c*2]/10,f=i[c*2+1]/10,m=Math.hypot(u-h,f-d);if(m<.01)continue;const v=(u-h)/m,p=(f-d)/m;for(let g=-r;g<m;g+=15){const x=Math.max(0,g),M=Math.min(m,g+9);if(M<=x)continue;const y=Math.max(1,Math.ceil((M-x)/5));for(let S=0;S<y;S++){const E=x+(M-x)*S/y,_=x+(M-x)*(S+1)/y,b=h+v*E,R=d+p*E,A=h+v*_,L=d+p*_,P=t.yAt(b,R)+.9,N=t.yAt(A,L)+.9;e.quad(b-p*1.1,P,R+v*1.1,A-p*1.1,N,L+v*1.1,A+p*1.1,N,L-v*1.1,b+p*1.1,P,R-v*1.1,n)}}r=(r+m)%15}const o=e.build();o.deleteAttribute("glow");const a=new Jt(o,il(new Wn({vertexColors:!0,transparent:!0,opacity:.9,side:Ee,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12})));return a.name="boundary",a}function f1(i){const t=i==null?void 0:i.material;t&&(t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWPos;
        float stHash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
        float stNoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(stHash(i), stHash(i + vec2(1.0, 0.0)), f.x), mix(stHash(i + vec2(0.0, 1.0)), stHash(i + vec2(1.0, 1.0)), f.x), f.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          vec2 w = vWPos.xz;
          float close = 1.0 - smoothstep(110.0, 380.0, length(cameraPosition - vWPos));
          float px = max(length(dFdx(w)), length(dFdy(w)));
          float stain = stNoise(w * 0.9) * 0.6 + stNoise(w * 3.7 + 9.0) * 0.4;
          float grit = stHash(floor(w * 34.0)) * 0.65 + stNoise(w * 15.0) * 0.35;
          diffuseColor.rgb *= mix(1.0, 0.9 + 0.2 * stain, close * (1.0 - smoothstep(0.2, 0.9, px)));
          diffuseColor.rgb *= 1.0 + (grit - 0.5) * 0.34 * close * (1.0 - smoothstep(0.03, 0.16, px));
        }`)},t.customProgramCacheKey=()=>"moorooka-streets")}function d1(i,t){const e=[];for(let a=0;a+3<i.length;a+=4){const l=i[a]/10,c=i[a+1]/10,h=i[a+2]/10,d=i[a+3]/10,u=Math.hypot(h-l,d-c);if(u<.5)continue;const f=-(d-c)/u*.06,m=(h-l)/u*.06,v=Math.max(1,Math.ceil(u/2));for(let p=0;p<v;p++){const g=l+(h-l)*p/v,x=c+(d-c)*p/v,M=l+(h-l)*(p+1)/v,y=c+(d-c)*(p+1)/v,S=t.yAt(g,x)+.07,E=t.yAt(M,y)+.07;e.push(g-f,S,x-m,M-f,E,y-m,M+f,E,y+m,g-f,S,x-m,M+f,E,y+m,g+f,S,x+m)}}const r=new Ae;r.setAttribute("position",new re(e,3));const o=new Jt(r,il(new Wn({color:14605522,side:Ee,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})));return o.name="painted-lines",o}class p1 extends h_{constructor(e,n,s,r){super(e,n,s,{name:"3D model of Moorooka",home:rf,intro:{...rf,dist:6400,polar:22,azimuth:-24},minDistance:22,followGround:!0,maxDistance:7e3,externalStart:[-150,720,1500,0,-.5]},r);nt(this,"water");nt(this,"life");nt(this,"boundary");nt(this,"terrain");nt(this,"model");nt(this,"aerial");nt(this,"aerialWanted",!1);nt(this,"level",0);nt(this,"boundaryOn",!0);nt(this,"flood");nt(this,"floodLoading");nt(this,"floodLevel",1);nt(this,"rising",0);nt(this,"groundDetail");nt(this,"levels",[]);nt(this,"uploader");nt(this,"tilesAt",0);nt(this,"sharpening",!1);nt(this,"strokes",[]);nt(this,"removed",{});nt(this,"marks");nt(this,"sharpState","no");nt(this,"detailGround");nt(this,"kerbs");nt(this,"fences");nt(this,"buildingsCull");nt(this,"trees");nt(this,"reach",[130,1100,300,380,420,380]);nt(this,"yards");nt(this,"strollers");this.options=r}async build(e,n,s){var R,A,L;let r;try{r=await U_(this.options.assets,(P,N)=>this.cb.onProgress(P*.6,N),this.abort.signal)}catch(P){throw new cl(P instanceof Error?P.message:"The model data could not be loaded.")}const{town:o,heights:a,ground:l}=r;this.meta=o.meta,this.level=o.meta.waterLevel*sf;const c=this.clearTest();l.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.model=l,await s(.62,"Shaping the terrain");const[h,d]=o.meta.grid,u=new Vx(a,new Float32Array(h*d),h,d,o.meta.size[0],o.meta.size[1],e.step,sf),f={value:o.meta.waterLevel},m=E_(u,l,f,{title:"MOOROOKA",subtitle:"Brisbane, Queensland   ·   27.53° S  153.03° E   ·   Postcode 4105",scale:o.meta.size[0]/8010},{closeUp:!0});this.terrain=m.getObjectByName("terrain").material,this.groundDetail=m.userData.detail;const v=this.options.assets.detail;v&&o.detailGrid&&n!=="low"&&this.levels.push({grid:o.detailGrid,first:0,slots:n==="medium"?2:Us,reach:1400,near:1.6,keep:4,url:v,tiles:new Map,wanted:[]}),this.offerSharpGround(n,u),this.scene.add(m),this.water=D_(u,f),this.scene.add(this.water.skirt,this.water.mesh),await s(.68,"Laying out the streets");const p=__(o,u,{suburbMarkings:!0,groundDrawsRoads:!0});f1(p.group.getObjectByName("roads")),this.scene.add(p.group,bv(o,u)),this.boundary=u1(o.boundary,u),this.scene.add(this.boundary),await s(.76,"Raising the buildings");const g=ov(o.meta),x=Y_(o,u,[...g,this.fromLatLon(ku[0],ku[1])],c);this.buildingsCull=x.cull;const M=av(o.meta,u,x.reserved);this.detailGround=M.ground;const y=Ov(o.meta);if(this.scene.add(x.group,M.group,zv(o.meta,u,x.reserved[g.length]),fv(o,u,p.index,c,y)),n!=="low"){this.kerbs=gv(p.paths,p.index,u,(N,T)=>y(N,T)||c(N,T),o.footpaths),this.scene.add(this.kerbs.group);const P=_u(o.meta);this.fences=cv(o,u,(N,T)=>P(N,T)||c(N,T)).group;for(const N of this.fences.children)N.geometry.computeBoundingSphere();this.scene.add(this.fences)}await s(.88,"Planting trees");const S=rv(o.meta,x.reserved),E=[];for(let P=0;P<o.trees.length;P+=Xh){const N=o.trees[P]/4,T=o.trees[P+1]/4;!S(N,T)&&!y(N,T)&&!c(N,T)&&E.push(o.trees[P],o.trees[P+1],o.trees[P+2])}const _=Hv({...o,trees:Int16Array.from(E)},u,e.trees);if(this.scene.add(_.group),this.trees=_,this.reach=n==="high"?[220,1600,480,650,750,700]:n==="medium"?[130,1100,300,380,420,380]:[90,800,200,0,0,260],await s(.94,"Starting the traffic"),this.life=new Av(o,u,p.paths,p.index,c,y),this.scene.add(this.life.group),n!=="low"){const P=_u(o.meta),N=(T,O)=>P(T,O)||y(T,O)||c(T,O);this.strollers=new kv(p.paths,o.footpaths??{},u,n==="high"?30:14,N),this.scene.add(this.strollers.group),this.loadYards(u,n==="high"&&e.shadow>0,n==="high"?220:140,N)}this.life.setParkedGone(this.removed.cars??[]),(A=(R=this.trees).setGone)==null||A.call(R,this.removed.trees??[]),(L=this.strollers)==null||L.setNoGo(this.removed.people??[]);const b=o_(Cv,o.meta,u);return{hf:u,atmosphere:new kx(this.renderer,this.water,e.shadow,h1),places:b,roadPaths:p.paths,roadIndex:p.index,info:{quality:n,buildings:x.count,buildingsInSuburb:o.counts.inside,trees:_.count,sources:o.meta.sources,places:b}}}get hasFlood(){return!!this.options.assets.floods&&!!this.options.assets.floodFile}get floodDrop(){var e;return((e=this.flood)==null?void 0:e.info.drop)??8}async floods(){return(await this.floodLayer()).info.events}async floodLayer(){if(this.flood)return this.flood;const{floods:e,floodFile:n}=this.options.assets;if(!e||!n||!this.hf)throw new Error("This copy of the model has no floods.");this.floodLoading??(this.floodLoading=pl.load(this.hf,e,n,this.abort.signal).then(s=>{if(this.disposed)throw s.dispose(),new Error("The model has been closed.");return this.flood=s,this.scene.add(s.mesh),s}));try{return await this.floodLoading}catch(s){throw this.floodLoading=void 0,s}}async setFlood(e){if(cancelAnimationFrame(this.rising),!e){this.flood&&await this.flood.show(""),this.invalidate();return}const n=await this.floodLayer();if(await n.show(e,this.abort.signal),this.disposed||n.current!==e)return;const s=performance.now(),r=()=>{var a,l;const o=Math.min(1,(performance.now()-s)/2600);this.applyFloodLevel(o*o*(3-2*o)),(l=(a=this.options).onFloodLevel)==null||l.call(a,this.floodLevel),o<1&&!this.disposed&&(this.rising=requestAnimationFrame(r))};this.applyFloodLevel(0),this.rising=requestAnimationFrame(r)}setFloodLevel(e){cancelAnimationFrame(this.rising),this.applyFloodLevel(e)}applyFloodLevel(e){var n;this.floodLevel=_e.clamp(e,0,1),(n=this.flood)==null||n.setLower((1-this.floodLevel)*this.floodDrop),this.invalidate()}floodSurfaceAt(e,n,s=!1){return this.flood?this.flood.surfaceAt(e,n,s):-1/0}tick(e,n){var s,r;this.water.uniforms.uTime.value=n,(s=this.flood)==null||s.tick(n),(r=this.life)==null||r.update(e),this.strollers&&this.hf&&this.strollers.update(e,this.viewFocus.x,this.viewFocus.z,this.heightOverGround())}drawByDistance(){var c,h,d,u;const e=this.camera.position,[n,s,r,o,a,l]=this.reach;if((c=this.buildingsCull)==null||c.call(this,e.x,e.y,e.z,l),(h=this.life)==null||h.cull(e.x,e.y,e.z,n,s),(d=this.trees)==null||d.cull(e.x,e.y,e.z,r),(u=this.kerbs)==null||u.cull(e.x,e.y,e.z,o),this.fences)for(const f of this.fences.children){const m=f.geometry.boundingSphere;f.visible=Math.hypot(Math.max(0,Math.hypot(m.center.x-e.x,m.center.z-e.z)-m.radius),m.center.y-e.y)<a}}heightOverGround(){const e=this.camera.position;return e.y-this.hf.yAt(e.x,e.z)}loadYards(e,n,s,r){const o=this.options.assets.yards;o&&fetch(o,{signal:this.abort.signal}).then(a=>a.ok?a.arrayBuffer():null).then(a=>{!a||this.disposed||(this.yards=new c1(new Int16Array(a),e,n,s,r),this.scene.add(this.yards.group),this.invalidate())}).catch(()=>{})}get waterLevel(){return this.level}setLabelsVisible(e){super.setLabelsVisible(e),this.boundaryOn=e,this.boundary&&(this.boundary.visible=e)}setExternalCamera(e,n,s,r,o){super.setExternalCamera(e,n,s,r,o),this.boundary&&(this.boundary.visible=this.boundaryOn&&n-this.groundAt(e,s)>45)}async setAerial(e){if(this.aerialWanted=e,e&&!this.aerial){if(!this.options.assets.aerial)throw new Error("This copy of the model has no aerial photograph.");const s=await F_(this.options.assets.aerial);if(this.disposed){s.dispose();return}s.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.aerial=s}if(!this.terrain||!this.model)return;const n=this.aerialWanted&&!!this.aerial;this.terrain.map=n?this.aerial:this.model,this.placeTiles(),this.detailGround&&(this.detailGround.visible=!n),this.invalidate()}offerSharpGround(e,n){var o;const s=this.options.assets.surface,r=new URLSearchParams(window.location.search).get("sharp");if(!(!s||r==="0")){if(r!=="1"){const a=navigator;if((a.deviceMemory??8)<4||(o=a.connection)!=null&&o.saveData||this.renderer.capabilities.maxTextureSize<4096)return}fetch(s.index,{signal:this.abort.signal}).then(a=>a.ok?a.json():null).then(a=>{var c;if(!(a!=null&&a.tiles.length)||this.disposed)return;const l=new Set(a.tiles);this.levels.push({grid:a.grid,first:Us,slots:Zh,reach:460,near:1.7,keep:6,url:(h,d)=>l.has(`${h}_${d}`)?s.tile(h,d):void 0,tiles:new Map,wanted:[],sharp:!0}),(c=a.marks)!=null&&c.length&&(this.marks=d1(a.marks,n),this.scene.add(this.marks)),this.sharpState="on"}).catch(()=>{})}}reportSharpening(){var n,s;const e=this.levels.some(r=>r.wanted.some(o=>r.tiles.get(o)===null));e!==this.sharpening&&(this.sharpening=e,(s=(n=this.options).onSharpening)==null||s.call(n,e))}beforeRender(){var s,r;const e=performance.now();if(this.drawByDistance(),this.yards&&this.hf){const o=this.heightOverGround();(this.yards.update(this.viewFocus.x,this.viewFocus.z,o)||this.yards.pending(this.viewFocus.x,this.viewFocus.z,o))&&this.invalidate()}if((s=this.uploader)!=null&&s.busy){for(let o=0;o<4&&this.uploader.step()&&performance.now()-e<4;o++);this.uploader.busy&&this.invalidate()}if(!this.levels.length||!this.hf||e-this.tilesAt<250)return;this.tilesAt=e;let n=!1;for(const o of this.levels){const a=o.grid,l=[];if(this.viewDistance<o.reach&&(!o.sharp||this.sharpState==="on")){const c=(this.viewFocus.x+this.hf.sizeX/2)/this.hf.sizeX*a,h=(this.viewFocus.z+this.hf.sizeZ/2)/this.hf.sizeZ*a,d=[];for(let u=Math.max(0,Math.floor(h)-2);u<=Math.min(a-1,Math.floor(h)+2);u++)for(let f=Math.max(0,Math.floor(c)-2);f<=Math.min(a-1,Math.floor(c)+2);f++)o.url(u,f)&&d.push([Math.hypot(f+.5-c,u+.5-h),`${u}_${f}`]);d.sort((u,f)=>u[0]-f[0]);for(const[u,f]of d.slice(0,o.slots))u<o.near&&l.push(f)}if(l.join()!==o.wanted.join()){n=!0,o.wanted=l;for(const c of l){if(o.tiles.has(c))continue;const[h,d]=c.split("_").map(Number);o.url(h,d)&&(o.tiles.set(c,null),this.fetchTile(o,c))}for(const[c,h]of o.tiles){if(o.tiles.size<=o.slots+o.keep)break;h&&!l.includes(c)&&(h.dispose(),o.tiles.delete(c),(r=o.drawn)==null||r.delete(c))}}}n&&this.placeTiles()}fetchTile(e,n){const[s,r]=n.split("_").map(Number),o=e.url(s,r);if(!o||!this.hf)return;const a=e.grid,l=this.hf.sizeX/a,c=this.hf.sizeZ/a,h=-this.hf.sizeX/2+r*l,d=-this.hf.sizeZ/2+s*c,u=e.sharp?vu(this.strokes,h,d,h+l,d+c):[],f=u.length?JSON.stringify(u):"",m=e.asked??(e.asked=new Map),v=(m.get(n)??0)+1;m.set(n,v),(e.drawn??(e.drawn=new Map)).set(n,f),this.uploader??(this.uploader=new C_(this.renderer)),this.uploader.load(o,Math.min(e.sharp?4:8,this.renderer.capabilities.getMaxAnisotropy()),!!e.sharp,u.length?lv(u,h,d,l,c):void 0).then(p=>{var g;if(this.disposed||!this.levels.includes(e)||m.get(n)!==v||!e.tiles.has(n))return p.dispose();(g=e.tiles.get(n))==null||g.dispose(),e.tiles.set(n,p),this.placeTiles()}).catch(()=>{m.get(n)===v&&(e.tiles.get(n)||e.tiles.delete(n),this.reportSharpening())})}setGroundEdits(e){var n;if(this.strokes=e.filter(s=>{var r;return s&&((r=s.p)==null?void 0:r.length)>=2&&s.w>0&&(s.k===1||s.k===2||s.k===3)}),!!this.hf){for(const s of this.levels){if(!s.sharp)continue;const r=s.grid,o=this.hf.sizeX/r,a=this.hf.sizeZ/r;for(const l of s.tiles.keys()){const[c,h]=l.split("_").map(Number),d=-this.hf.sizeX/2+h*o,u=-this.hf.sizeZ/2+c*a,f=vu(this.strokes,d,u,d+o,u+a);(f.length?JSON.stringify(f):"")!==(((n=s.drawn)==null?void 0:n.get(l))??"")&&this.fetchTile(s,l)}}this.invalidate()}}groundUnder(e,n){const s=this.rayThrough(e,n);if(!s||!this.hf)return null;const{o:r,d:o}=s,a=this.hf.sizeX/2,l=this.hf.sizeZ/2;let c=0,h=r.y-this.hf.yAt(r.x,r.z);if(h<=0)return null;for(let d=.5;d<3e3;d+=Math.max(.5,h*.5)){const u=r.x+o.x*d,f=r.z+o.z*d;if(Math.abs(u)>a||Math.abs(f)>l)return null;if(h=r.y+o.y*d-this.hf.yAt(u,f),h<=0){let m=c,v=d;for(let x=0;x<24;x++){const M=(m+v)/2;r.y+o.y*M-this.hf.yAt(r.x+o.x*M,r.z+o.z*M)>0?m=M:v=M}const p=r.x+o.x*v,g=r.z+o.z*v;return{x:p,y:this.hf.yAt(p,g),z:g}}c=d}return null}rayThrough(e,n){var o;const s=(o=this.renderer)==null?void 0:o.domElement.getBoundingClientRect();if(!s||!s.width||!s.height)return null;this.camera.updateMatrixWorld();const r=new Q((e-s.left)/s.width*2-1,-((n-s.top)/s.height)*2+1,.5).unproject(this.camera).sub(this.camera.position).normalize();return{o:this.camera.position.clone(),d:r}}pickThing(e,n){var l,c,h,d;const s=this.rayThrough(e,n);if(!s)return null;const r=this.groundUnder(e,n),o=r?Math.hypot(r.x-s.o.x,r.y-s.o.y,r.z-s.o.z)+2:600;let a=null;for(const u of[(l=this.strollers)==null?void 0:l.pick(s.o,s.d),(c=this.life)==null?void 0:c.pickParked(s.o,s.d),(d=(h=this.trees)==null?void 0:h.pick)==null?void 0:d.call(h,s.o,s.d)])u&&u.t<o&&(!a||u.t<a.t)&&(a=u);return a&&{type:a.type,x:a.x,z:a.z}}setRemoved(e){var n,s,r,o;this.removed=e,(n=this.life)==null||n.setParkedGone(e.cars??[]),(r=(s=this.trees)==null?void 0:s.setGone)==null||r.call(s,e.trees??[]),(o=this.strollers)==null||o.setNoGo(e.people??[]),this.invalidate()}frameCost(){const e=this.renderer.info.render;return{triangles:e.triangles,calls:e.calls}}placeTiles(){var s;if(!this.groundDetail)return;const e=this.aerialWanted&&!!this.aerial,n=new Set;for(const r of this.levels){const o=r.grid;for(let a=0;a<r.slots;a++){const l=r.wanted[a],c=l?r.tiles.get(l):null;if(!c||e){this.groundDetail.set(r.first+a,null);continue}r.sharp&&n.add(l);const[h,d]=l.split("_").map(Number);this.groundDetail.set(r.first+a,c,[d/o,1-(h+1)/o,(d+1)/o,1-h/o])}}(s=this.kerbs)==null||s.showPaths(n),this.reportSharpening(),this.invalidate()}dispose(){var e,n,s,r,o;cancelAnimationFrame(this.rising),(e=this.uploader)==null||e.dispose(),(n=this.yards)==null||n.dispose(),(s=this.strollers)==null||s.dispose(),(r=this.model)==null||r.dispose(),(o=this.aerial)==null||o.dispose();for(const a of this.levels)for(const l of a.tiles.values())l==null||l.dispose();super.dispose()}}const of="Buildings, streets, railway, terrain and imagery © State of Queensland · Parks and flood maps © Brisbane City Council (CC BY 4.0)",Pl=.5;function m1(i,t){const e=typeof t.assets=="string"?t.assets:null;let n;const s=document.createElement("p");s.className="inv-sharpening",s.setAttribute("role","status"),s.hidden=!0,s.innerHTML='<span class="inv-sharpening-spin" aria-hidden="true"></span><span class="inv-sharpening-text">Loading sharper ground</span>';const r=Ri(i,t,{styleKey:"data-moorooka-model",css:_f,credit:of,tide:{min:Pl,max:Pl,initial:Pl},createScene:(o,a,l,c)=>n=new p1(o,a,l,{...c,onFloodLevel:h=>{var d;return(d=t.onFloodLevel)==null?void 0:d.call(t,h)},onSharpening:h=>{s.hidden=!h},assets:{...c.assets,detail:e?(h,d)=>`${e}detail/${h}_${d}.webp`:void 0,surface:e?{index:`${e}surface/index.json`,tile:(h,d)=>`${e}surface/${h}_${d}.webp`}:void 0,floods:e?`${e}floods.json`:void 0,yards:e?`${e}yards.bin`:void 0,floodFile:e?h=>`${e}flood-${encodeURIComponent(h)}.png`:void 0}}),setTide:()=>{}});return i.appendChild(s),{...r,dispose:()=>{s.remove(),r.dispose()},floods:e?()=>n.floods():void 0,get floodDrop(){return n.floodDrop},setFlood:o=>n.setFlood(o),setFloodLevel:o=>n.setFloodLevel(o),waterAt:(o,a,l)=>l?n.floodSurfaceAt(o,a,!0):Math.max(n.waterLevel,n.floodSurfaceAt(o,a)),setGroundEdits:o=>n.setGroundEdits(o),groundUnder:(o,a)=>n.groundUnder(o,a),pickThing:(o,a)=>n.pickThing(o,a),setRemoved:o=>n.setRemoved(o),frameCost:()=>n.frameCost()}}return bn.CREDIT=of,bn.create=m1,Object.defineProperty(bn,Symbol.toStringTag,{value:"Module"}),bn}({});
