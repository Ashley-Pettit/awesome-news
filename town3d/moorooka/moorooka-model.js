var MoorookaModel=function(Sn){"use strict";var vv=Object.defineProperty;var Mv=(Sn,Pn,bi)=>Pn in Sn?vv(Sn,Pn,{enumerable:!0,configurable:!0,writable:!0,value:bi}):Sn[Pn]=bi;var ot=(Sn,Pn,bi)=>Mv(Sn,typeof Pn!="symbol"?Pn+"":Pn,bi);const Pn=`
.inv-embed, .inv-embed-layer { position: absolute; inset: 0; overflow: hidden; }
/* the labels sit over the model but never take a touch: drags and pinches must reach the canvas underneath */
.inv-embed-labels, .inv-embed .inv-label { pointer-events: none; }
.inv-embed-credit { position: absolute; left: 50%; bottom: var(--inv-credit-bottom, 6px); transform: translateX(-50%); margin: 0; max-width: calc(100% - 24px);
  padding: 2px 8px; border-radius: 4px; background: rgba(13, 24, 30, 0.7); color: rgba(255, 255, 255, 0.82); font: 10px/1.4 system-ui, sans-serif; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; pointer-events: none; }
`;function bi(i,t,e){if(!document.querySelector(`style[${e.styleKey}]`)){const u=document.createElement("style");u.setAttribute(e.styleKey,""),u.textContent=e.css+Pn,document.head.appendChild(u)}const n=document.createElement("div");n.className="inv-embed";const s=document.createElement("div");s.className="inv-embed-layer";const r=document.createElement("div");r.className="inv-embed-layer inv-embed-labels";const a=document.createElement("p");a.className="inv-embed-credit",a.textContent=e.credit,n.append(s,r,a),i.appendChild(n);const o=typeof t.assets=="string"?{height:t.assets+"height.png",ground:t.assets+"ground.webp",town:t.assets+"town.json"}:t.assets;let l=[],c=!1,h;const d=new Promise((u,m)=>h={ok:u,fail:m}),f=e.createScene(s,r,{onProgress:(u,m)=>{var x;return(x=t.onProgress)==null?void 0:x.call(t,u,m)},onReady:u=>{l=u.places.map(m=>{const x=Math.min(Math.max(m.view[0]*.55,90),1500),p=m.view[1]*Math.PI/180,g=m.view[2]*Math.PI/180,_=m.x+x*Math.sin(p)*Math.sin(g),M=m.z+x*Math.sin(p)*Math.cos(g),S=Math.max(f.groundAt(_,M),f.waterLevel)+Math.max(x*Math.cos(p),20),y=m.x-_,E=m.y-10-S,v=m.z-M;return{id:m.id,name:m.name,kind:m.kind,x:_,y:S,z:M,yaw:Math.atan2(-y,-v),pitch:Math.atan2(E,Math.hypot(y,v)),tx:m.x,tz:m.z,stand:f.standNear(m.x,m.z)??void 0}}),t.labels===!1&&f.setLabelsVisible(!1),c=!0,h.ok()},onError:u=>{var m;return c?(m=t.onError)==null?void 0:m.call(t,u):h.fail(new Error(u))},onCompass:()=>{}},{assets:o,external:!0,quality:t.quality,clear:t.clear,clearLatLon:t.clearLatLon});return f.init(),{ready:d,setCamera:(u,m,x,p,g)=>f.setExternalCamera(u,m,x,p,g),setMinutes:u=>f.setSolarMinutes(u),setTide:u=>e.setTide(f,u),setAnimating:u=>f.setAnimating(u),setLabelsVisible:u=>f.setLabelsVisible(u),groundAt:(u,m)=>f.groundAt(u,m),waterLevel:()=>f.waterLevel,bounds:()=>f.bounds,fromLatLon:(u,m)=>f.fromLatLon(u,m),setMode:u=>f.setExternal(u!=="bird"),getCamera:()=>f.getCamera(),flyToPlace:u=>f.flyToPlace(u),lookAt:(u,m,x,p,g)=>f.setView(u,m,x,p,g),addParts:u=>f.addParts(u),addPad:u=>f.addPad(u),spots:()=>l,roadSpot:u=>{const m=f.roadSpot(u);return m?{id:"road:"+u,name:u,kind:"landmark",...m,tx:m.x-Math.sin(m.yaw)*70,tz:m.z-Math.cos(m.yaw)*70}:null},tide:e.tide,credit:e.credit,dispose:()=>{f.dispose(),n.remove()}}}const Gu='.inv-label{position:absolute;left:0;top:0;pointer-events:auto;font:600 12px/1 Space Grotesk,system-ui,sans-serif;padding:6px 10px;border-radius:999px;background:#0c1c24e6;color:#fff;border:1px solid rgba(255,255,255,.2);white-space:nowrap;cursor:pointer;will-change:transform}.inv-label:after{content:"";position:absolute;left:50%;bottom:-8px;width:1px;height:8px;background:#ffffffbf}.inv-label:hover{background:#0b7d9c}.inv-label--nature{background:#183826eb}.inv-label--nature:hover{background:#2c7a4b}.inv-label--water{background:none;border-color:transparent;color:#f1fbff;font-style:italic;font-weight:500;font-size:13px;letter-spacing:.1em;text-shadow:0 1px 2px rgba(0,35,60,.95),0 0 8px rgba(0,35,60,.7)}.inv-label--water:after{display:none}.inv-label--water:hover{background:#0c1c2499}.inv-range{-moz-appearance:none;appearance:none;-webkit-appearance:none;height:28px;background:transparent;cursor:pointer}.inv-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range:focus-visible{outline:2px solid #ffd200;outline-offset:4px;border-radius:4px}.inv-range--flood::-webkit-slider-runnable-track{background:linear-gradient(90deg,#d8c79a,#5c9ab8 55%,#17406e)}.inv-range--flood::-moz-range-track{background:linear-gradient(90deg,#d8c79a,#5c9ab8 55%,#17406e)}.inv-sharpening{position:absolute;left:12px;top:calc(env(safe-area-inset-top,0px) + var(--inv-sharpening-top, 136px));z-index:2;display:flex;align-items:center;gap:7px;margin:0;padding:5px 11px 5px 9px;border-radius:999px;background:#0d181ec7;color:#fff;font:500 12px/1.3 system-ui,sans-serif;pointer-events:none}.inv-sharpening[hidden]{display:none}.inv-sharpening-spin{width:12px;height:12px;border-radius:50%;border:2px solid rgba(255,255,255,.35);border-top-color:#fff;animation:inv-sharpening-turn .9s linear infinite}@keyframes inv-sharpening-turn{to{transform:rotate(360deg)}}@media (prefers-reduced-motion: reduce){.inv-sharpening-spin{animation:none;border-color:#fff}}';/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ra="187",Ln={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hu=0,wl=1,Vu=2,is=1,Wu=2,ss=3,Xn=0,$e=1,ye=2,Ei=0,rs=1,aa=2,Tl=3,Al=4,Xu=5,wi=100,qu=101,Yu=102,$u=103,Ku=104,Zu=200,Ju=201,Qu=202,ju=203,Rl=204,Cl=205,tf=206,ef=207,nf=208,sf=209,rf=210,af=211,of=212,lf=213,cf=214,oa=0,la=1,ca=2,as=3,ha=4,ua=5,fa=6,da=7,pa=0,hf=1,uf=2,Dn=0,Pl=1,Ll=2,Dl=3,Il=4,Nl=5,Ul=6,ma=7,Fl=300,Ti=301,os=302,ga=303,_a=304,$s=1e3,on=1001,xa=1002,Fe=1003,ff=1004,Ks=1005,ke=1006,va=1007,yn=1008,je=1009,Ol=1010,zl=1011,ls=1012,Ma=1013,bn=1014,ln=1015,cn=1016,Sa=1017,ya=1018,Ai=1020,Bl=35902,kl=35899,Gl=1021,Hl=1022,hn=1023,qn=1026,Yn=1027,ba=1028,Ea=1029,$n=1030,wa=1031,Ta=1033,Zs=33776,Js=33777,Qs=33778,js=33779,Aa=35840,Ra=35841,Ca=35842,Pa=35843,La=36196,Da=37492,Ia=37496,Na=37488,Ua=37489,tr=37490,Fa=37491,Oa=37808,za=37809,Ba=37810,ka=37811,Ga=37812,Ha=37813,Va=37814,Wa=37815,Xa=37816,qa=37817,Ya=37818,$a=37819,Ka=37820,Za=37821,Ja=36492,Qa=36494,ja=36495,to=36283,eo=36284,er=36285,no=36286,df=3200,nr=0,pf=1,Kn="",be="srgb",ir="srgb-linear",sr="linear",ae="srgb",io=7680,mf=519,gf=512,_f=513,xf=514,Vl=515,vf=516,Mf=517,Wl=518,Xl=519,Sf=35044,so=35048,ql="300 es",un=2e3,cs=2001;function yf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bf(){const i=hs("canvas");return i.style.display="block",i}const Yl={};function $l(...i){const t="THREE."+i.shift();console.log(t,...i)}function Kl(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Bt(...i){i=Kl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function te(...i){i=Kl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function rr(...i){const t=i.join(" ");t in Yl||(Yl[t]=!0,Bt(...i))}function Ef(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const wf={[oa]:oa,[ca]:fa,[ha]:ha,[as]:ua,[la]:la,[fa]:ca,[da]:da,[ua]:as};class Zn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zl=1234567;const us=Math.PI/180,fs=180/Math.PI;function Ri(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function $t(i,t,e){return Math.max(t,Math.min(e,i))}function ro(i,t){return(i%t+t)%t}function Tf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Af(i,t,e){return i!==t?(e-i)/(t-i):0}function ds(i,t,e){return(1-e)*i+e*t}function Rf(i,t,e,n){return ds(i,t,1-Math.exp(-e*n))}function Cf(i,t=1){return t-Math.abs(ro(i,t*2)-t)}function Pf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Lf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Df(i,t){return i+Math.floor(Math.random()*(t-i+1))}function If(i,t){return i+Math.random()*(t-i)}function Nf(i){return i*(.5-Math.random())}function Uf(i){i!==void 0&&(Zl=i);let t=Zl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ff(i){return i*us}function Of(i){return i*fs}function zf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Bf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kf(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),f=a((t-n)/2),u=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*u,o*c);break;case"YXY":i.set(l*u,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*u,o*h,o*c);break;default:Bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ao(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ql(i,t){if(t.constructor===Float32Array)return i;const e=ao(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function jl(i,t){if(t.constructor===Float32Array)return i;const e=ao(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const me={DEG2RAD:us,RAD2DEG:fs,generateUUID:Ri,clamp:$t,euclideanModulo:ro,mapLinear:Tf,inverseLerp:Af,lerp:ds,damp:Rf,pingpong:Cf,smoothstep:Pf,smootherstep:Lf,randInt:Df,randFloat:If,randFloatSpread:Nf,seededRandom:Uf,degToRad:Ff,radToDeg:Of,isPowerOfTwo:zf,ceilPowerOfTwo:Bf,floorPowerOfTwo:Jl,setQuaternionFromProperEuler:kf,normalize:jl,denormalize:Ql},xl=class xl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xl.prototype.isVector2=!0;let Ut=xl;class fn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[a+0],u=r[a+1],m=r[a+2],x=r[a+3];if(d!==x||l!==f||c!==u||h!==m){let p=l*f+c*u+h*m+d*x;p<0&&(f=-f,u=-u,m=-m,x=-x,p=-p);let g=1-o;if(p<.9995){const _=Math.acos(p),M=Math.sin(_);g=Math.sin(g*_)/M,o=Math.sin(o*_)/M,l=l*g+f*o,c=c*g+u*o,h=h*g+m*o,d=d*g+x*o}else{l=l*g+f*o,c=c*g+u*o,h=h*g+m*o,d=d*g+x*o;const _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],f=r[a+1],u=r[a+2],m=r[a+3];return t[e]=o*m+h*d+l*u-c*f,t[e+1]=l*m+h*f+c*d-o*u,t[e+2]=c*m+h*u+o*f-l*d,t[e+3]=h*m-o*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),f=l(n/2),u=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"YZX":this._x=f*h*d+c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d-f*u*m;break;case"XZY":this._x=f*h*d-c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d+f*u*m;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vl=class vl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oo.copy(this).projectOnVector(t),this.sub(oo)}reflect(t){return this.sub(oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vl.prototype.isVector3=!0;let $=vl;const oo=new $,tc=new fn,Ml=class Ml{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],m=n[8],x=s[0],p=s[3],g=s[6],_=s[1],M=s[4],S=s[7],y=s[2],E=s[5],v=s[8];return r[0]=a*x+o*_+l*y,r[3]=a*p+o*M+l*E,r[6]=a*g+o*S+l*v,r[1]=c*x+h*_+d*y,r[4]=c*p+h*M+d*E,r[7]=c*g+h*S+d*v,r[2]=f*x+u*_+m*y,r[5]=f*p+u*M+m*E,r[8]=f*g+u*S+m*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*r,u=c*r-a*l,m=e*d+n*f+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=u*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lo.makeScale(t,e)),this}rotate(t){return rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lo.makeRotation(-t)),this}translate(t,e){return rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ml.prototype.isMatrix3=!0;let Ht=Ml;const lo=new Ht,ec=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nc=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gf(){const i={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ae&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ir]:{primaries:t,whitePoint:n,transfer:sr,toXYZ:ec,fromXYZ:nc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:ec,fromXYZ:nc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:be}}}),i}const Jt=Gf();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pi;class Hf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Pi===void 0&&(Pi=hs("canvas")),Pi.width=t.width,Pi.height=t.height;const s=Pi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Pi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vf=0;class co{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ho(s[a].image)):r.push(ho(s[a]))}else r=ho(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ho(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}let Wf=0;const uo=new $;class Ae extends Zn{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=on,s=on,r=ke,a=yn,o=hn,l=je,c=Ae.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Ri(),this.name="",this.source=new co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(uo).x}get height(){return this.source.getSize(uo).y}get depth(){return this.source.getSize(uo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $s:t.x=t.x-Math.floor(t.x);break;case on:t.x=t.x<0?0:1;break;case xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $s:t.y=t.y-Math.floor(t.y);break;case on:t.y=t.y<0?0:1;break;case xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null,Ae.DEFAULT_MAPPING=Fl,Ae.DEFAULT_ANISOTROPY=1;const Sl=class Sl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,S=(u+1)/2,y=(g+1)/2,E=(h+f)/4,v=(d+x)/4,b=(m+p)/4;return M>S&&M>y?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=v/n):S>y?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=b/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=v/r,s=b/r),this.set(n,s,r,e),this}let _=Math.sqrt((p-m)*(p-m)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(d-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sl.prototype.isVector4=!0;let ge=Sl;class Xf extends Zn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ae({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new co(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends Xf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ic extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qf extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const na=class na{constructor(t,e,n,s,r,a,o,l,c,h,d,f,u,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,f,u,m,x,p)}set(t,e,n,s,r,a,o,l,c,h,d,f,u,m,x,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new na().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Li.setFromMatrixColumn(t,0).length(),r=1/Li.setFromMatrixColumn(t,1).length(),a=1/Li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*h,u=a*d,m=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+m*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=m+u*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,u=l*d,m=c*h,x=c*d;e[0]=f+x*o,e[4]=m*o-u,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=u*o-m,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,u=l*d,m=c*h,x=c*d;e[0]=f-x*o,e[4]=-a*d,e[8]=m+u*o,e[1]=u+m*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,u=a*d,m=o*h,x=o*d;e[0]=l*h,e[4]=m*c-u,e[8]=f*c+x,e[1]=l*d,e[5]=x*c+f,e[9]=u*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,u=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-f*d,e[8]=m*d+u,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*d+m,e[10]=f-x*d}else if(t.order==="XZY"){const f=a*l,u=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+x,e[5]=a*h,e[9]=u*d-m,e[2]=m*d-u,e[6]=o*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yf,t,$f)}lookAt(t,e,n){const s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),Jn.crossVectors(n,en),Jn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Jn.crossVectors(n,en)),Jn.normalize(),ar.crossVectors(en,Jn),s[0]=Jn.x,s[4]=ar.x,s[8]=en.x,s[1]=Jn.y,s[5]=ar.y,s[9]=en.y,s[2]=Jn.z,s[6]=ar.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],m=n[2],x=n[6],p=n[10],g=n[14],_=n[3],M=n[7],S=n[11],y=n[15],E=s[0],v=s[4],b=s[8],R=s[12],A=s[1],D=s[5],O=s[9],z=s[13],I=s[2],Z=s[6],H=s[10],q=s[14],k=s[3],F=s[7],G=s[11],Q=s[15];return r[0]=a*E+o*A+l*I+c*k,r[4]=a*v+o*D+l*Z+c*F,r[8]=a*b+o*O+l*H+c*G,r[12]=a*R+o*z+l*q+c*Q,r[1]=h*E+d*A+f*I+u*k,r[5]=h*v+d*D+f*Z+u*F,r[9]=h*b+d*O+f*H+u*G,r[13]=h*R+d*z+f*q+u*Q,r[2]=m*E+x*A+p*I+g*k,r[6]=m*v+x*D+p*Z+g*F,r[10]=m*b+x*O+p*H+g*G,r[14]=m*R+x*z+p*q+g*Q,r[3]=_*E+M*A+S*I+y*k,r[7]=_*v+M*D+S*Z+y*F,r[11]=_*b+M*O+S*H+y*G,r[15]=_*R+M*z+S*q+y*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],m=t[3],x=t[7],p=t[11],g=t[15],_=l*u-c*f,M=o*u-c*d,S=o*f-l*d,y=a*u-c*h,E=a*f-l*h,v=a*d-o*h;return e*(x*_-p*M+g*S)-n*(m*_-p*y+g*E)+s*(m*M-x*y+g*v)-r*(m*S-x*E+p*v)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],m=t[12],x=t[13],p=t[14],g=t[15],_=e*o-n*a,M=e*l-s*a,S=e*c-r*a,y=n*l-s*o,E=n*c-r*o,v=s*c-r*l,b=h*x-d*m,R=h*p-f*m,A=h*g-u*m,D=d*p-f*x,O=d*g-u*x,z=f*g-u*p,I=_*z-M*O+S*D+y*A-E*R+v*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/I;return t[0]=(o*z-l*O+c*D)*Z,t[1]=(s*O-n*z-r*D)*Z,t[2]=(x*v-p*E+g*y)*Z,t[3]=(f*E-d*v-u*y)*Z,t[4]=(l*A-a*z-c*R)*Z,t[5]=(e*z-s*A+r*R)*Z,t[6]=(p*S-m*v-g*M)*Z,t[7]=(h*v-f*S+u*M)*Z,t[8]=(a*O-o*A+c*b)*Z,t[9]=(n*A-e*O-r*b)*Z,t[10]=(m*E-x*S+g*_)*Z,t[11]=(d*S-h*E-u*_)*Z,t[12]=(o*R-a*D-l*b)*Z,t[13]=(e*D-n*R+s*b)*Z,t[14]=(x*M-m*y-p*_)*Z,t[15]=(h*y-d*M+f*_)*Z,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,f=r*c,u=r*h,m=r*d,x=a*h,p=a*d,g=o*d,_=l*c,M=l*h,S=l*d,y=n.x,E=n.y,v=n.z;return s[0]=(1-(x+g))*y,s[1]=(u+S)*y,s[2]=(m-M)*y,s[3]=0,s[4]=(u-S)*E,s[5]=(1-(f+g))*E,s[6]=(p+_)*E,s[7]=0,s[8]=(m+M)*v,s[9]=(p-_)*v,s[10]=(1-(f+x))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Li.set(s[0],s[1],s[2]).length();const o=Li.set(s[4],s[5],s[6]).length(),l=Li.set(s[8],s[9],s[10]).length();r<0&&(a=-a),dn.copy(this);const c=1/a,h=1/o,d=1/l;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,e.setFromRotationMatrix(dn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=un,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===un)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===cs)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=un,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),u=-(n+s)/(n-s);let m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===un)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===cs)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};na.prototype.isMatrix4=!0;let ie=na;const Li=new $,dn=new ie,Yf=new $(0,0,0),$f=new $(1,1,1),Jn=new $,ar=new $,en=new $,sc=new ie,rc=new fn;class wn{constructor(t=0,e=0,n=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rc.setFromEuler(this),this.setFromQuaternion(rc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class fo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kf=0;const ac=new $,Di=new fn,Nn=new ie,or=new $,ps=new $,Zf=new $,Jf=new fn,oc=new $(1,0,0),lc=new $(0,1,0),cc=new $(0,0,1),hc={type:"added"},Qf={type:"removed"},Ii={type:"childadded",child:null},po={type:"childremoved",child:null};class Oe extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new $,e=new wn,n=new fn,s=new $(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ht}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(oc,t)}rotateY(t){return this.rotateOnAxis(lc,t)}rotateZ(t){return this.rotateOnAxis(cc,t)}translateOnAxis(t,e){return ac.copy(t).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oc,t)}translateY(t){return this.translateOnAxis(lc,t)}translateZ(t){return this.translateOnAxis(cc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?or.copy(t):or.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(ps,or,this.up):Nn.lookAt(or,ps,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(Nn),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hc),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qf),po.child=t,this.dispatchEvent(po),po.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hc),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,Zf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),u=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Oe.DEFAULT_UP=new $(0,1,0),Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0,Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ke extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jf={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;c.inputState.pinching&&f>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},lr={h:0,s:0,l:0};function go(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?i+(t-i)*6*e:e<.5?t:e<.6666666666666666?i+(t-i)*6*(.6666666666666666-e):i}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=ro(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=go(a,r,t+.3333333333333333),this.g=go(a,r,t),this.b=go(a,r,t-.3333333333333333)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){const n=uc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return Jt.workingToColorSpace(He.copy(this),t),Math.round($t(He.r*255,0,255))*65536+Math.round($t(He.g*255,0,255))*256+Math.round($t(He.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(He.copy(this),e);const n=He.r,s=He.g,r=He.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=be){Jt.workingToColorSpace(He.copy(this),t);const e=He.r,n=He.g,s=He.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(lr);const n=ds(Qn.h,lr.h,e),s=ds(Qn.s,lr.s,e),r=ds(Qn.l,lr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Dt;Dt.NAMES=uc;class td extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const pn=new $,Un=new $,_o=new $,Fn=new $,Ni=new $,Ui=new $,fc=new $,xo=new $,vo=new $,Mo=new $,So=new ge,yo=new ge,bo=new ge;class mn{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),pn.subVectors(t,e),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){pn.subVectors(s,e),Un.subVectors(n,e),_o.subVectors(t,e);const a=pn.dot(pn),o=pn.dot(Un),l=pn.dot(_o),c=Un.dot(Un),h=Un.dot(_o),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return So.setScalar(0),yo.setScalar(0),bo.setScalar(0),So.fromBufferAttribute(t,e),yo.fromBufferAttribute(t,n),bo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(So,r.x),a.addScaledVector(yo,r.y),a.addScaledVector(bo,r.z),a}static isFrontFacing(t,e,n,s){return pn.subVectors(n,e),Un.subVectors(t,e),pn.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),pn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ni.subVectors(s,n),Ui.subVectors(r,n),xo.subVectors(t,n);const l=Ni.dot(xo),c=Ui.dot(xo);if(l<=0&&c<=0)return e.copy(n);vo.subVectors(t,s);const h=Ni.dot(vo),d=Ui.dot(vo);if(h>=0&&d<=h)return e.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Ni,a);Mo.subVectors(t,r);const u=Ni.dot(Mo),m=Ui.dot(Mo);if(m>=0&&u<=m)return e.copy(r);const x=u*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Ui,o);const p=h*m-u*d;if(p<=0&&d-h>=0&&u-m>=0)return fc.subVectors(r,s),o=(d-h)/(d-h+(u-m)),e.copy(s).addScaledVector(fc,o);const g=1/(p+x+f);return a=x*g,o=f*g,e.copy(n).addScaledVector(Ni,a).addScaledVector(Ui,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ui{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(t.matrixWorld),this.union(cr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ms),hr.subVectors(this.max,ms),Fi.subVectors(t.a,ms),Oi.subVectors(t.b,ms),zi.subVectors(t.c,ms),jn.subVectors(Oi,Fi),ti.subVectors(zi,Oi),fi.subVectors(Fi,zi);let e=[0,-jn.z,jn.y,0,-ti.z,ti.y,0,-fi.z,fi.y,jn.z,0,-jn.x,ti.z,0,-ti.x,fi.z,0,-fi.x,-jn.y,jn.x,0,-ti.y,ti.x,0,-fi.y,fi.x,0];return!Eo(e,Fi,Oi,zi,hr)||(e=[1,0,0,0,1,0,0,0,1],!Eo(e,Fi,Oi,zi,hr))?!1:(ur.crossVectors(jn,ti),e=[ur.x,ur.y,ur.z],Eo(e,Fi,Oi,zi,hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const On=[new $,new $,new $,new $,new $,new $,new $,new $],gn=new $,cr=new ui,Fi=new $,Oi=new $,zi=new $,jn=new $,ti=new $,fi=new $,ms=new $,hr=new $,ur=new $,di=new $;function Eo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){di.fromArray(i,r);const o=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),l=t.dot(di),c=e.dot(di),h=n.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const zn=ed();function ed(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function nd(i){Math.abs(i)>65504&&Bt("DataUtils.toHalfFloat(): Value out of range."),i=$t(i,-65504,65504),zn.floatView[0]=i;const t=zn.uint32View[0],e=t>>23&511;return zn.baseTable[e]+((t&8388607)>>zn.shiftTable[e])}function id(i){const t=i>>10;return zn.uint32View[0]=zn.mantissaTable[zn.offsetTable[t]+(i&1023)]+zn.exponentTable[t],zn.floatView[0]}class dc{static toHalfFloat(t){return nd(t)}static fromHalfFloat(t){return id(t)}}const Ee=new $,fr=new Ut;let sd=0;class we extends Zn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sf,this.updateRanges=[],this.gpuType=ln,this.version=0,this._normalizationScale=t!==void 0?ao(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ql(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):jl(t,this.array)}}class pc extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class mc extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}}const rd=new ui,gs=new $,wo=new $;class _s{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):rd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gs.subVectors(t,this.center);const e=gs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gs.copy(t.center).add(wo)),this.expandByPoint(gs.copy(t.center).sub(wo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ad=0;const rn=new ie,To=new Oe,Bi=new $,nn=new ui,xs=new ui,De=new $;class Re extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yf(t)?mc:pc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return To.lookAt(t),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];xs.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(nn.min,xs.min),nn.expandByPoint(De),De.addVectors(nn.max,xs.max),nn.expandByPoint(De)):(nn.expandByPoint(xs.min),nn.expandByPoint(xs.max))}nn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)De.fromBufferAttribute(o,c),l&&(Bi.fromBufferAttribute(t,c),De.add(Bi)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new we(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)o[R]=new $,l[R]=new $;const h=new $,d=new $,f=new $,u=new Ut,m=new Ut,x=new Ut,p=new $,g=new $;function _(R,A,D){c[R]=c[A]=c[D]=1,h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,A),f.fromBufferAttribute(n,D),u.fromBufferAttribute(r,R),m.fromBufferAttribute(r,A),x.fromBufferAttribute(r,D),d.sub(h),f.sub(h),m.sub(u),x.sub(u);const O=1/(m.x*x.y-x.x*m.y);isFinite(O)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(O),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(O),o[R].add(p),o[A].add(p),o[D].add(p),l[R].add(g),l[A].add(g),l[D].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,A=M.length;R<A;++R){const D=M[R],O=D.start,z=D.count;for(let I=O,Z=O+z;I<Z;I+=3)_(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const S=new $,y=new $,E=new $,v=new $;function b(R){E.fromBufferAttribute(s,R),v.copy(E);const A=o[R];S.copy(A),S.sub(E.multiplyScalar(E.dot(A))).normalize(),y.crossVectors(v,A);const O=y.dot(l[R])<0?-1:1;a.setXYZW(R,S.x,S.y,S.z,O)}for(let R=0,A=n.count;R<A;++R)c[R]&&b(R);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const s=new $,r=new $,a=new $,o=new $,l=new $,c=new $,h=new $,d=new $;if(t)for(let f=0,u=t.count;f<u;f+=3){const m=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let u=0,m=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?u=l[x]*o.data.stride+o.offset:u=l[x]*h;for(let g=0;g<h;g++)f[m++]=c[u++]}return new we(f,h,d)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ao=new $,od=new $,ld=new Ht;class Tn{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ao.subVectors(n,e).cross(od.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Ao),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ld.getNormalMatrix(t),s=this.coplanarPoint(Ao).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let cd=0;class ki extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=rs,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Cl,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Tn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Bn=new $,Ro=new $,dr=new $,pr=new $;class Co{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ro.copy(t).add(e).multiplyScalar(.5),dr.copy(e).sub(t).normalize(),pr.copy(this.origin).sub(Ro);const r=t.distanceTo(e)*.5,a=-this.direction.dot(dr),o=pr.dot(this.direction),l=-pr.dot(dr),c=pr.lengthSq(),h=Math.abs(1-a*a);let d,f,u,m;if(h>0)if(d=a*l-o,f=a*o-l,m=r*h,d>=0)if(f>=-m)if(f<=m){const x=1/h;d*=x,f*=x,u=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ro).addScaledVector(dr,f),u}intersectSphere(t,e){if(t.radius<0)return null;Bn.subVectors(t.center,this.origin);const n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,f=t.y-a.y,u=t.z-a.z,m=e.x-a.x,x=e.y-a.y,p=e.z-a.z,g=n.x-a.x,_=n.y-a.y,M=n.z-a.z,S=Math.abs(l),y=Math.abs(c),E=Math.abs(h);let v,b,R,A,D,O,z,I,Z,H,q,k;if(S>=y&&S>=E?(R=l,O=d,Z=m,k=g,l>=0?(v=c,b=h,A=f,D=u,z=x,I=p,H=_,q=M):(v=h,b=c,A=u,D=f,z=p,I=x,H=M,q=_)):y>=E?(R=c,O=f,Z=x,k=_,c>=0?(v=h,b=l,A=u,D=d,z=p,I=m,H=M,q=g):(v=l,b=h,A=d,D=u,z=m,I=p,H=g,q=M)):(R=h,O=u,Z=p,k=M,h>=0?(v=l,b=c,A=d,D=f,z=m,I=x,H=g,q=_):(v=c,b=l,A=f,D=d,z=x,I=m,H=_,q=g)),R===0)return null;const F=v/R,G=b/R,Q=1/R,Y=A-F*O,vt=D-G*O,j=z-F*Z,lt=I-G*Z,ft=H-F*k,dt=q-G*k,pt=ft*lt-dt*j,ht=Y*dt-vt*ft,kt=j*vt-lt*Y;if(s){if(pt<0||ht<0||kt<0)return null}else if((pt<0||ht<0||kt<0)&&(pt>0||ht>0||kt>0))return null;const it=pt+ht+kt;if(it===0)return null;const gt=Q*(pt*O+ht*Z+kt*k);return(it>0?gt<0:gt>0)?null:this.at(gt/it,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ei extends ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const gc=new ie,pi=new Co,mr=new _s,_c=new $,gr=new $,_r=new $,xr=new $,Po=new $,vr=new $,xc=new $,Mr=new $;class Qt extends Oe{constructor(t=new Re,e=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Po.fromBufferAttribute(d,t),a?vr.addScaledVector(Po,h):vr.addScaledVector(Po.sub(e),h))}e.add(vr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(mr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(mr,_c)===null||pi.origin.distanceToSquared(_c)>(t.far-t.near)**2))&&(gc.copy(r).invert(),pi.copy(t.ray).applyMatrix4(gc),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){const p=f[m],g=a[p.materialIndex],_=Math.max(p.start,u.start),M=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let S=_,y=M;S<y;S+=3){const E=o.getX(S),v=o.getX(S+1),b=o.getX(S+2);s=Sr(this,g,t,n,c,h,d,E,v,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let p=m,g=x;p<g;p+=3){const _=o.getX(p),M=o.getX(p+1),S=o.getX(p+2);s=Sr(this,a,t,n,c,h,d,_,M,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){const p=f[m],g=a[p.materialIndex],_=Math.max(p.start,u.start),M=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let S=_,y=M;S<y;S+=3){const E=S,v=S+1,b=S+2;s=Sr(this,g,t,n,c,h,d,E,v,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let p=m,g=x;p<g;p+=3){const _=p,M=p+1,S=p+2;s=Sr(this,a,t,n,c,h,d,_,M,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function hd(i,t,e,n,s,r,a,o){let l;if(t.side===$e?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Xn,o),l===null)return null;Mr.copy(o),Mr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Mr);return c<e.near||c>e.far?null:{distance:c,point:Mr.clone(),object:i}}function Sr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,gr),i.getVertexPosition(l,_r),i.getVertexPosition(c,xr);const h=hd(i,t,e,n,gr,_r,xr,xc);if(h){const d=new $;mn.getBarycoord(xc,gr,_r,xr,d),s&&(h.uv=mn.getInterpolatedAttribute(s,o,l,c,d,new Ut)),r&&(h.uv1=mn.getInterpolatedAttribute(r,o,l,c,d,new Ut)),a&&(h.normal=mn.getInterpolatedAttribute(a,o,l,c,d,new $),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new $,materialIndex:0};mn.getNormal(gr,_r,xr,f.normal),h.face=f,h.barycoord=d}return h}class vs extends Ae{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Fe,h=Fe,d,f){super(null,a,o,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vc extends we{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Gi=new ie,Mc=new ie,yr=[],Sc=new ui,ud=new ie,Ms=new Qt,Ss=new _s;class ni extends Qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ud)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),Sc.copy(t.boundingBox).applyMatrix4(Gi),this.boundingBox.union(Sc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _s),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),Ss.copy(t.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(Ss)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(n),t.ray.intersectsSphere(Ss)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gi),Mc.multiplyMatrices(n,Gi),Ms.matrixWorld=Mc,Ms.raycast(t,yr);for(let a=0,o=yr.length;a<o;a++){const l=yr[a];l.instanceId=r,l.object=this,e.push(l)}yr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vs(new Float32Array(s*this.count),s,this.count,ba,ln));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const mi=new _s,fd=new Ut(.5,.5),br=new $;class ys{constructor(t=new Tn,e=new Tn,n=new Tn,s=new Tn,r=new Tn,a=new Tn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],m=r[8],x=r[9],p=r[10],g=r[11],_=r[12],M=r[13],S=r[14],y=r[15];if(s[0].setComponents(c-a,u-h,g-m,y-_).normalize(),s[1].setComponents(c+a,u+h,g+m,y+_).normalize(),s[2].setComponents(c+o,u+d,g+x,y+M).normalize(),s[3].setComponents(c-o,u-d,g-x,y-M).normalize(),n)s[4].setComponents(l,f,p,S).normalize(),s[5].setComponents(c-l,u-f,g-p,y-S).normalize();else if(s[4].setComponents(c-l,u-f,g-p,y-S).normalize(),e===un)s[5].setComponents(c+l,u+f,g+p,y+S).normalize();else if(e===cs)s[5].setComponents(l,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){mi.center.set(0,0,0);const e=fd.distanceTo(t.center);return mi.radius=.7071067811865476+e,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(br.x=s.normal.x>0?t.max.x:t.min.x,br.y=s.normal.y>0?t.max.y:t.min.y,br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const yc=new ie;class Lo{constructor(){this.coordinateSystem=un,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];yc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ys),n[s].setFromProjectionMatrix(yc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ys),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new Lo().copy(this)}}class bc extends Ae{constructor(t=[],e=Ti,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Er extends Ae{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hi extends Ae{constructor(t,e,n=bn,s,r,a,o=Fe,l=Fe,c,h=qn,d=1){if(h!==qn&&h!==Yn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new co(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Ec extends Hi{constructor(t,e=bn,n=Ti,s,r,a=Fe,o=Fe,l,c=qn){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class wc extends Ae{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class gi extends Re{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,u=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2));function m(x,p,g,_,M,S,y,E,v,b,R){const A=S/v,D=y/b,O=S/2,z=y/2,I=E/2,Z=v+1,H=b+1;let q=0,k=0;const F=new $;for(let G=0;G<H;G++){const Q=G*D-z;for(let Y=0;Y<Z;Y++){const vt=Y*A-O;F[x]=vt*_,F[p]=Q*M,F[g]=I,c.push(F.x,F.y,F.z),F[x]=0,F[p]=0,F[g]=E>0?1:-1,h.push(F.x,F.y,F.z),d.push(Y/v),d.push(1-G/b),q+=1}}for(let G=0;G<b;G++)for(let Q=0;Q<v;Q++){const Y=f+Q+Z*G,vt=f+Q+Z*(G+1),j=f+(Q+1)+Z*(G+1),lt=f+(Q+1)+Z*G;l.push(Y,vt,lt),l.push(vt,j,lt),k+=6}o.addGroup(u,k,R),u+=k,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Do extends Re{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],u=[];let m=0;const x=[],p=n/2;let g=0;_(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(u,2));function _(){const S=new $,y=new $;let E=0;const v=(e-t)/n;for(let b=0;b<=r;b++){const R=[],A=b/r,D=A*(e-t)+t;for(let O=0;O<=s;O++){const z=O/s,I=z*l+o,Z=Math.sin(I),H=Math.cos(I);y.x=D*Z,y.y=-A*n+p,y.z=D*H,d.push(y.x,y.y,y.z),S.set(Z,v,H).normalize(),f.push(S.x,S.y,S.z),u.push(z,1-A),R.push(m++)}x.push(R)}for(let b=0;b<s;b++)for(let R=0;R<r;R++){const A=x[R][b],D=x[R+1][b],O=x[R+1][b+1],z=x[R][b+1];(t>0||R!==0)&&(h.push(A,D,z),E+=3),(e>0||R!==r-1)&&(h.push(D,O,z),E+=3)}c.addGroup(g,E,0),g+=E}function M(S){const y=m,E=new Ut,v=new $;let b=0;const R=S===!0?t:e,A=S===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,p*A,0),f.push(0,A,0),u.push(.5,.5),m++;const D=m;for(let O=0;O<=s;O++){const I=O/s*l+o,Z=Math.cos(I),H=Math.sin(I);v.x=R*H,v.y=p*A,v.z=R*Z,d.push(v.x,v.y,v.z),f.push(0,A,0),E.x=Z*.5+.5,E.y=H*.5*A+.5,u.push(E.x,E.y),m++}for(let O=0;O<s;O++){const z=y+O,I=D+O;S===!0?h.push(I,I+1,z):h.push(I+1,I,z),b+=3}c.addGroup(g,b,S===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Io extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const M=new $,S=new $,y=new $;for(let E=0;E<e.length;E+=3)u(e[E+0],M),u(e[E+1],S),u(e[E+2],y),l(M,S,y,_)}function l(_,M,S,y){const E=y+1,v=[];for(let b=0;b<=E;b++){v[b]=[];const R=_.clone().lerp(S,b/E),A=M.clone().lerp(S,b/E),D=E-b;for(let O=0;O<=D;O++)O===0&&b===E?v[b][O]=R:v[b][O]=R.clone().lerp(A,O/D)}for(let b=0;b<E;b++)for(let R=0;R<2*(E-b)-1;R++){const A=Math.floor(R/2);R%2===0?(f(v[b][A+1]),f(v[b+1][A]),f(v[b][A])):(f(v[b][A+1]),f(v[b+1][A+1]),f(v[b+1][A]))}}function c(_){const M=new $;for(let S=0;S<r.length;S+=3)M.x=r[S+0],M.y=r[S+1],M.z=r[S+2],M.normalize().multiplyScalar(_),r[S+0]=M.x,r[S+1]=M.y,r[S+2]=M.z}function h(){const _=new $;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];const S=p(_)/2/Math.PI+.5,y=g(_)/Math.PI+.5;a.push(S,1-y)}m(),d()}function d(){for(let _=0;_<a.length;_+=6){const M=a[_+0],S=a[_+2],y=a[_+4],E=Math.max(M,S,y),v=Math.min(M,S,y);E>.9&&v<.1&&(M<.2&&(a[_+0]+=1),S<.2&&(a[_+2]+=1),y<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function u(_,M){const S=_*3;M.x=t[S+0],M.y=t[S+1],M.z=t[S+2]}function m(){const _=new $,M=new $,S=new $,y=new $,E=new Ut,v=new Ut,b=new Ut;for(let R=0,A=0;R<r.length;R+=9,A+=6){_.set(r[R+0],r[R+1],r[R+2]),M.set(r[R+3],r[R+4],r[R+5]),S.set(r[R+6],r[R+7],r[R+8]),E.set(a[A+0],a[A+1]),v.set(a[A+2],a[A+3]),b.set(a[A+4],a[A+5]),y.copy(_).add(M).add(S).divideScalar(3);const D=p(y);x(E,A+0,_,D),x(v,A+2,M,D),x(b,A+4,S,D)}}function x(_,M,S,y){y<0&&_.x===1&&(a[M]=_.x-1),S.x===0&&S.z===0&&(a[M]=y/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.vertices,t.indices,t.radius,t.detail)}}function dd(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Tc(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=xd(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let f=e;f<s;f+=e){const u=i[f],m=i[f+1];u<o&&(o=u),m<l&&(l=m),u>h&&(h=u),m>d&&(d=m)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return bs(r,a,e,o,l,c,0),a}function Tc(i,t,e,n,s){let r;if(s===Cd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Pc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Pc(a/n|0,i[a],i[a+1],r);return r&&Vi(r,r.next)&&(Ts(r),r=r.next),r}function _i(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Vi(e,e.next)||xe(e.prev,e,e.next)===0)){if(Ts(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function bs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&bd(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?md(i,n,s,r):pd(i)){t.push(l.i,i.i,c.i),Ts(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=gd(_i(i),t),bs(i,t,e,n,s,r,2)):a===2&&_d(i,t,e,n,s,r):bs(_i(i),t,e,n,s,r,1);break}}}function pd(i){const t=i.prev,e=i,n=i.next;if(xe(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),f=Math.max(s,r,a),u=Math.max(o,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=d&&m.y<=u&&Es(s,o,r,l,a,c,m.x,m.y)&&xe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function md(i,t,e,n){const s=i.prev,r=i,a=i.next;if(xe(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,f=a.y,u=Math.min(o,l,c),m=Math.min(h,d,f),x=Math.max(o,l,c),p=Math.max(h,d,f),g=No(u,m,t,e,n),_=No(x,p,t,e,n);let M=i.prevZ,S=i.nextZ;for(;M&&M.z>=g&&S&&S.z<=_;){if(M.x>=u&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&Es(o,h,l,d,c,f,M.x,M.y)&&xe(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=u&&S.x<=x&&S.y>=m&&S.y<=p&&S!==s&&S!==a&&Es(o,h,l,d,c,f,S.x,S.y)&&xe(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=g;){if(M.x>=u&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&Es(o,h,l,d,c,f,M.x,M.y)&&xe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=_;){if(S.x>=u&&S.x<=x&&S.y>=m&&S.y<=p&&S!==s&&S!==a&&Es(o,h,l,d,c,f,S.x,S.y)&&xe(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function gd(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Vi(n,s)&&Rc(n,e,e.next,s)&&ws(n,s)&&ws(s,n)&&(t.push(n.i,e.i,s.i),Ts(e),Ts(e.next),e=i=s),e=e.next}while(e!==i);return _i(e)}function _d(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Td(a,o)){let l=Cc(a,o);a=_i(a,a.next),l=_i(l,l.next),bs(a,t,e,n,s,r,0),bs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function xd(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Tc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(wd(c))}s.sort(vd);for(let r=0;r<s.length;r++)e=Md(s[r],e);return e}function vd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Md(i,t){const e=Sd(i,t);if(!e)return t;const n=Cc(e,i);return _i(n,n.next),_i(e,e.next)}function Sd(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Vi(i,e))return e;do{if(Vi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Ac(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);ws(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&yd(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function yd(i,t){return xe(i.prev,i,t.prev)<0&&xe(t.next,i,i.next)<0}function bd(i,t,e,n){let s=i;do s.z===0&&(s.z=No(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ed(s)}function Ed(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function No(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function wd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ac(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Es(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Ac(i,t,e,n,s,r,a,o)}function Td(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ad(i,t)&&(ws(i,t)&&ws(t,i)&&Rd(i,t)&&(xe(i.prev,i,t.prev)||xe(i,t.prev,t))||Vi(i,t)&&xe(i.prev,i,i.next)>0&&xe(t.prev,t,t.next)>0)}function xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Vi(i,t){return i.x===t.x&&i.y===t.y}function Rc(i,t,e,n){const s=Tr(xe(i,t,e)),r=Tr(xe(i,t,n)),a=Tr(xe(e,n,i)),o=Tr(xe(e,n,t));return!!(s!==r&&a!==o||s===0&&wr(i,e,t)||r===0&&wr(i,n,t)||a===0&&wr(e,i,n)||o===0&&wr(e,t,n))}function wr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Tr(i){return i>0?1:i<0?-1:0}function Ad(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Rc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ws(i,t){return xe(i.prev,i,i.next)<0?xe(i,t,i.next)>=0&&xe(i,i.prev,t)>=0:xe(i,t,i.prev)<0||xe(i,i.next,t)<0}function Rd(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Cc(i,t){const e=Uo(i.i,i.x,i.y),n=Uo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Pc(i,t,e,n){const s=Uo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ts(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Uo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Pd{static triangulate(t,e,n=2){return dd(t,e,n)}}class Fo{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Fo.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Lc(t),Dc(n,t);let a=t.length;e.forEach(Lc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Dc(n,e[l]);const o=Pd.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Lc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Dc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Oo extends Io{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oo(t.radius,t.detail)}}class ii extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=e/l,u=[],m=[],x=[],p=[];for(let g=0;g<h;g++){const _=g*f-a;for(let M=0;M<c;M++){const S=M*d-r;m.push(S,-_,0),x.push(0,0,1),p.push(M/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){const M=_+c*g,S=_+c*(g+1),y=_+1+c*(g+1),E=_+1+c*g;u.push(M,S,E),u.push(S,y,E)}this.setIndex(u),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.width,t.height,t.widthSegments,t.heightSegments)}}class zo extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new $,f=new $,u=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){const _=[],M=g/n,S=a+M*o,y=t*Math.cos(S),E=Math.sqrt(t*t-y*y);let v=0;g===0&&a===0?v=.5/e:g===n&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){const R=b/e,A=s+R*r;d.x=-E*Math.cos(A),d.y=y,d.z=E*Math.sin(A),m.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),p.push(R+v,1-M),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){const M=h[g][_+1],S=h[g][_],y=h[g+1][_],E=h[g+1][_+1];(g!==0||a>0)&&u.push(M,S,E),(g!==n-1||l<Math.PI)&&u.push(S,y,E)}this.setIndex(u),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Wi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Ic(s))s.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ic(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=Wi(i[e]);for(const s in n)t[s]=n[s]}return t}function Ic(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ld(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Dd={clone:Wi,merge:Ze};var Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=Ld(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Dt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new $().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ie().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Ud extends kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Je extends ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Uc extends ki{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=pa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fd extends ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Od extends ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Bo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Fc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Fc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Fc(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class zd{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const u=c[d],m=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Bd=new zd;class ko{constructor(t){this.manager=t!==void 0?t:Bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}ko.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xi=new WeakMap;class kd extends ko{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Bo.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Xi.get(a);d===void 0&&(d=[],Xi.set(a,d)),d.push({onLoad:e,onError:s})}return a}const o=hs("img");function l(){h(),e&&e(this);const d=Xi.get(this)||[];for(let f=0;f<d.length;f++){const u=d[f];u.onLoad&&u.onLoad(this)}Xi.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),Bo.remove(`image:${t}`);const f=Xi.get(this)||[];for(let u=0;u<f.length;u++){const m=f[u];m.onError&&m.onError(d)}Xi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Bo.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}}class Oc extends ko{constructor(t){super(t)}load(t,e,n,s){const r=new Ae,a=new kd(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class zc extends Oe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Gd extends zc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Go=new ie,Bc=new $,kc=new $;class Hd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ys,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bc),kc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Go.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Go,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===cs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Go)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ar=new $,Rr=new fn,An=new $;class Gc extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ar,Rr,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ar,Rr,An.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ar,Rr,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ar,Rr,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const si=new $,Hc=new Ut,Vc=new Ut;class _n extends Gc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,Hc,Vc),e.subVectors(Vc,Hc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(us*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Wc extends Gc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Vd extends Hd{constructor(){super(new Wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wd extends zc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Vd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const qi=-90,Yi=1;class Ho extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(qi,Yi,t,e);s.layers=this.layers,this.add(s);const r=new _n(qi,Yi,t,e);r.layers=this.layers,this.add(r);const a=new _n(qi,Yi,t,e);a.layers=this.layers,this.add(a);const o=new _n(qi,Yi,t,e);o.layers=this.layers,this.add(o);const l=new _n(qi,Yi,t,e);l.layers=this.layers,this.add(l);const c=new _n(qi,Yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Xd extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const Xc=new ie;class qd{constructor(t,e,n=0,s=1/0){this.ray=new Co(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):te("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Xc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xc),this}intersectObject(t,e=!0,n=[]){return Vo(t,this,n,e),n.sort(qc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Vo(t[s],this,n,e);return n.sort(qc),n}}function qc(i,t){return i.distance-t.distance}function Vo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Vo(r[a],t,e,!0)}}class Cr{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos($t(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const yl=class yl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};yl.prototype.isMatrix2=!0;let Yc=yl;class Yd extends Zn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function $c(i,t,e,n){const s=$d(n);switch(e){case Gl:return i*t;case ba:return i*t/s.components*s.byteLength;case Ea:return i*t/s.components*s.byteLength;case $n:return i*t*2/s.components*s.byteLength;case wa:return i*t*2/s.components*s.byteLength;case Hl:return i*t*3/s.components*s.byteLength;case hn:return i*t*4/s.components*s.byteLength;case Ta:return i*t*4/s.components*s.byteLength;case Zs:case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qs:case js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:case Pa:return Math.max(i,16)*Math.max(t,8)/4;case Aa:case Ca:return Math.max(i,8)*Math.max(t,8)/2;case La:case Da:case Na:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ia:case tr:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ja:case Qa:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*16;case to:case eo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case er:case no:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $d(i){switch(i){case je:case Ol:return{byteLength:1,components:1};case ls:case zl:case cn:return{byteLength:2,components:1};case Sa:case ya:return{byteLength:2,components:4};case bn:case Ma:case ln:return{byteLength:4,components:1};case Bl:case kl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ra}})),typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ra);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kc(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Kd(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){const m=d[f],x=d[u];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,d[f]=x)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){const x=d[u];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jd=`#ifdef USE_ALPHAHASH
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
#endif`,Qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
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
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
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
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cp=`#ifdef USE_IRIDESCENCE
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
#endif`,hp=`#ifdef USE_BUMPMAP
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vp=`#define PI 3.141592653589793
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
} // validated`,Mp=`vec3 transformedNormal = objectNormal;
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
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fp=`#ifdef USE_GRADIENTMAP
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
}`,Op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qp=`PhysicalMaterial material;
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
#endif`,Yp=`uniform sampler2D dfgLUT;
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
}`,$p=`
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rm=`#if defined( USE_POINTS_UV )
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
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cm=`#if defined( USE_MORPHCOLORS )
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
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
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
#endif`,vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nm=`float getShadowMask() {
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
}`,Um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yt={alphahash_fragment:Zd,alphahash_pars_fragment:Jd,alphamap_fragment:Qd,alphamap_pars_fragment:jd,alphatest_fragment:tp,alphatest_pars_fragment:ep,aomap_fragment:np,aomap_pars_fragment:ip,batching_pars_vertex:sp,batching_vertex:rp,begin_vertex:ap,beginnormal_vertex:op,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:hp,clipping_planes_fragment:up,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:dp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:_p,color_vertex:xp,common:vp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:Sp,displacementmap_vertex:yp,emissivemap_fragment:bp,emissivemap_pars_fragment:Ep,colorspace_fragment:wp,colorspace_pars_fragment:Tp,envmap_fragment:Ap,envmap_common_pars_fragment:Rp,envmap_pars_fragment:Cp,envmap_pars_vertex:Pp,envmap_physical_pars_fragment:Gp,envmap_vertex:Lp,fog_vertex:Dp,fog_pars_vertex:Ip,fog_fragment:Np,fog_pars_fragment:Up,gradientmap_pars_fragment:Fp,lightmap_pars_fragment:Op,lights_lambert_fragment:zp,lights_lambert_pars_fragment:Bp,lights_pars_begin:kp,lights_toon_fragment:Hp,lights_toon_pars_fragment:Vp,lights_phong_fragment:Wp,lights_phong_pars_fragment:Xp,lights_physical_fragment:qp,lights_physical_pars_fragment:Yp,lights_fragment_begin:$p,lights_fragment_maps:Kp,lights_fragment_end:Zp,lightprobes_pars_fragment:Jp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:tm,logdepthbuf_vertex:em,map_fragment:nm,map_pars_fragment:im,map_particle_fragment:sm,map_particle_pars_fragment:rm,metalnessmap_fragment:am,metalnessmap_pars_fragment:om,morphinstance_vertex:lm,morphcolor_vertex:cm,morphnormal_vertex:hm,morphtarget_pars_vertex:um,morphtarget_vertex:fm,normal_fragment_begin:dm,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:gm,normal_vertex:_m,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:vm,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:Sm,iridescence_pars_fragment:ym,opaque_fragment:bm,packing:Em,premultiplied_alpha_fragment:wm,project_vertex:Tm,dithering_fragment:Am,dithering_pars_fragment:Rm,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Lm,shadowmap_pars_vertex:Dm,shadowmap_vertex:Im,shadowmask_pars_fragment:Nm,skinbase_vertex:Um,skinning_pars_vertex:Fm,skinning_vertex:Om,skinnormal_vertex:zm,specularmap_fragment:Bm,specularmap_pars_fragment:km,tonemapping_fragment:Gm,tonemapping_pars_fragment:Hm,transmission_fragment:Vm,transmission_pars_fragment:Wm,uv_pars_fragment:Xm,uv_pars_vertex:qm,uv_vertex:Ym,worldpos_vertex:$m,background_vert:`varying vec2 vUv;
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
}`},bt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Rn={basic:{uniforms:Ze([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ze([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ze([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ze([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ze([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ze([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ze([bt.points,bt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ze([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ze([bt.common,bt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ze([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ze([bt.sprite,bt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:Ze([bt.common,bt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:Ze([bt.lights,bt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Rn.physical={uniforms:Ze([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Pr={r:0,b:0,g:0},Km=new ie,Zc=new Ht;Zc.set(-1,0,0,0,1,0,0,0,1);function Zm(i,t,e,n,s,r){const a=new Dt(0);let o=s===!0?0:1,l,c,h=null,d=0,f=null;function u(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){const S=_.backgroundBlurriness>0;M=t.get(M,S)}return M}function m(_){let M=!1;const S=u(_);S===null?p(a,o):S&&S.isColor&&(p(S,1),M=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,M){const S=u(M);S&&S.isCubeTexture?(c===void 0&&(c=new Qt(new gi(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Wi(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Km.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zc),c.material.toneMapped=Jt.getTransfer(S.colorSpace)!==ae,(h!==S||d!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Qt(new ii(2,2),new kn({name:"BackgroundMaterial",uniforms:Wi(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(S.colorSpace)!==ae,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,M){_.getRGB(Pr,Nc(i)),e.buffers.color.setClear(Pr.r,Pr.g,Pr.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,p(a,o)},render:m,addToRenderList:x,dispose:g}}function Jm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(D,O,z,I,Z){let H=!1;const q=d(D,I,z,O);r!==q&&(r=q,c(r.object)),H=u(D,I,z,Z),H&&m(D,I,z,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,S(D,O,z,I),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,O,z,I){const Z=I.wireframe===!0;let H=n[O.id];H===void 0&&(H={},n[O.id]=H);const q=D.isInstancedMesh===!0?D.id:0;let k=H[q];k===void 0&&(k={},H[q]=k);let F=k[z.id];F===void 0&&(F={},k[z.id]=F);let G=F[Z];return G===void 0&&(G=f(l()),F[Z]=G),G}function f(D){const O=[],z=[],I=[];for(let Z=0;Z<e;Z++)O[Z]=0,z[Z]=0,I[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:I,object:D,attributes:{},index:null}}function u(D,O,z,I){const Z=r.attributes,H=O.attributes;let q=0;const k=z.getAttributes();for(const F in k)if(k[F].location>=0){const Q=Z[F];let Y=H[F];if(Y===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor)),Q===void 0||Q.attribute!==Y||Y&&Q.data!==Y.data)return!0;q++}return r.attributesNum!==q||r.index!==I}function m(D,O,z,I){const Z={},H=O.attributes;let q=0;const k=z.getAttributes();for(const F in k)if(k[F].location>=0){let Q=H[F];Q===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));const Y={};Y.attribute=Q,Q&&Q.data&&(Y.data=Q.data),Z[F]=Y,q++}r.attributes=Z,r.attributesNum=q,r.index=I}function x(){const D=r.newAttributes;for(let O=0,z=D.length;O<z;O++)D[O]=0}function p(D){g(D,0)}function g(D,O){const z=r.newAttributes,I=r.enabledAttributes,Z=r.attributeDivisors;z[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),Z[D]!==O&&(i.vertexAttribDivisor(D,O),Z[D]=O)}function _(){const D=r.newAttributes,O=r.enabledAttributes;for(let z=0,I=O.length;z<I;z++)O[z]!==D[z]&&(i.disableVertexAttribArray(z),O[z]=0)}function M(D,O,z,I,Z,H,q){q===!0?i.vertexAttribIPointer(D,O,z,Z,H):i.vertexAttribPointer(D,O,z,I,Z,H)}function S(D,O,z,I){x();const Z=I.attributes,H=z.getAttributes(),q=O.defaultAttributeValues;for(const k in H){const F=H[k];if(F.location>=0){let G=Z[k];if(G===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(G=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(G=D.instanceColor)),G!==void 0){const Q=G.normalized,Y=G.itemSize,vt=t.get(G);if(vt===void 0)continue;const j=vt.buffer,lt=vt.type,ft=vt.bytesPerElement,dt=lt===i.INT||lt===i.UNSIGNED_INT||G.gpuType===Ma;if(G.isInterleavedBufferAttribute){const pt=G.data,ht=pt.isInterleavedBuffer===!0?pt.stride:pt.itemSize,kt=G.offset;if(pt.isInstancedInterleavedBuffer||pt.isInstancedBufferAttribute){for(let it=0;it<F.locationSize;it++)g(F.location+it,pt.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let it=0;it<F.locationSize;it++)p(F.location+it);i.bindBuffer(i.ARRAY_BUFFER,j);for(let it=0;it<F.locationSize;it++)M(F.location+it,Y/F.locationSize,lt,Q,ht*ft,(kt+Y/F.locationSize*it)*ft,dt)}else{if(G.isInstancedBufferAttribute){for(let pt=0;pt<F.locationSize;pt++)g(F.location+pt,G.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let pt=0;pt<F.locationSize;pt++)p(F.location+pt);i.bindBuffer(i.ARRAY_BUFFER,j);for(let pt=0;pt<F.locationSize;pt++)M(F.location+pt,Y/F.locationSize,lt,Q,Y*ft,Y/F.locationSize*pt*ft,dt)}}else if(q!==void 0){const Q=q[k];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(F.location,Q);break;case 3:i.vertexAttrib3fv(F.location,Q);break;case 4:i.vertexAttrib4fv(F.location,Q);break;default:i.vertexAttrib1fv(F.location,Q)}}}}_()}function y(){R();for(const D in n){const O=n[D];for(const z in O){const I=O[z];for(const Z in I){const H=I[Z];for(const q in H)h(H[q].object),delete H[q];delete I[Z]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;const O=n[D.id];for(const z in O){const I=O[z];for(const Z in I){const H=I[Z];for(const q in H)h(H[q].object),delete H[q];delete I[Z]}}delete n[D.id]}function v(D){for(const O in n){const z=n[O];for(const I in z){const Z=z[I];if(Z[D.id]===void 0)continue;const H=Z[D.id];for(const q in H)h(H[q].object),delete H[q];delete Z[D.id]}}}function b(D){for(const O in n){const z=n[O],I=D.isInstancedMesh===!0?D.id:0,Z=z[I];if(Z!==void 0){for(const H in Z){const q=Z[H];for(const k in q)h(q[k].object),delete q[k];delete Z[H]}delete z[I],Object.keys(z).length===0&&delete n[O]}}}function R(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:A,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function Qm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function jm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==hn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){const b=v===cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==je&&v!==ln&&!b&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Bt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Bt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:S,maxSamples:y,samples:E}}function t0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Tn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const m=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,g=i.get(d);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{const _=r?0:n,M=_*4;let S=g.clippingState||null;l.value=S,S=h(m,f,M,u);for(let y=0;y!==M;++y)S[y]=e[y];g.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,m){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,m!==!0||p===null){const g=u+x*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,S=u;M!==x;++M,S+=4)a.copy(d[M]).applyMatrix4(_,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}class Wo extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new bc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gi(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:Ei});r.uniforms.tEquirect.value=e;const a=new Qt(s,r),o=e.minFilter;return e.minFilter===yn&&(e.minFilter=ke),new Ho(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Jc=256,e0=3,n0=20,Qc=256,jc=16,i0=3,s0=new $,r0=new Dt;class Lr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ho(1,10,null),this._boxMesh=new Qt(new gi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=s0}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,m=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(r0));const p=new Ho(n,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=m,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Jc,Jl(t))}_fromTexture(t,e){t.mapping===Ti||t.mapping===os?this._setSize(t.image.length===0?Jc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=th(t,!1,!1),n=Math.log2(t)-e0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=th(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ti||t.mapping===os?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=eh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=a0(),this._integrationMaterial=o0());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/jc);for(let a=0;a<=n;a++){const o=Lr.lodToRoughness(a,n);if(a>n-i0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(Qc*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=l0());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function th(i,t,e){return new Wo(i,{minFilter:yn,generateMipmaps:t,type:cn,colorSpace:ir,depthBuffer:e})}function As(i,t,e){return new kn({name:i,uniforms:t,vertexShader:Yt.cube_vert,fragmentShader:e,side:$e,blending:Ei,depthTest:!1,depthWrite:!1})}function a0(){return As("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Qc}u

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
	`)}function o0(){return As("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:jc}},`

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
	`)}function l0(){return As("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${n0}
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
	`)}function eh(){return As("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function nh(){return As("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function c0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,u=!1){return f==null?null:u?a(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===ga||u===_a)if(t.has(f)){const m=t.get(f).texture;return o(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const x=new Wo(m.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,m=u===ga||u===_a,x=u===Ti||u===os;if(m||x){let p=e.get(f);const g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Lr(i)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{const _=f.image;return m&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new Lr(i)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,u){return u===ga?f.mapping=Ti:u===_a&&(f.mapping=os),f}function l(f){let u=0;const m=6;for(let x=0;x<m;x++)f[x]!==void 0&&u++;return u===m}function c(f){const u=f.target;u.removeEventListener("dispose",c);const m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function h0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&rr("WebGLRenderer: "+n+" extension not supported."),s}}}function u0(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(const p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);const x=r.get(m);x&&(t.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(m){const x=m.attributes;for(const p in x)t.update(x[p],i.ARRAY_BUFFER)}function d(m){const x=m.index,p=m.attributes.position;let g=0;if(p===void 0)return;const _=x!==null?x.array.length:p.array.length/3-1,M=p.count>=65535?mc:pc,S=new M(Math.ceil(_/3)*6,1),y=S.array;if(x!==null){const v=x.array;g=x.version;for(let b=0,R=0;b<_;b+=3){const A=v[b+0],D=v[b+1],O=v[b+2];y[R++]=A,y[R++]=D,y[R++]=D,y[R++]=O,y[R++]=O,y[R++]=A}}else{g=p.version;for(let v=0,b=0;v<_;v+=3){const R=v+0,A=v+1,D=v+2;y[b++]=R,y[b++]=A,y[b++]=A,y[b++]=D,y[b++]=D,y[b++]=R}}S.version=g;const E=r.get(m);E&&t.remove(E),r.set(m,S)}function f(m){const x=r.get(m);if(x){const p=m.index;p!==null&&x.version<p.version&&d(m)}else d(m);return r.get(m)}function u(){for(const m in s){const x=s[m].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function f0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,u){u!==0&&(i.drawElementsInstanced(n,f,r,d*a,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let x=0;for(let p=0;p<u;p++)x+=f[p];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function d0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:te("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function p0(i,t,e){const n=new WeakMap,s=new ge;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let R=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();const u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let M=0;u===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let S=o.attributes.position.count*M,y=1;S>t.maxTextureSize&&(y=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const E=new Float32Array(S*y*4*d),v=new ic(E,S,y,d);v.type=ln,v.needsUpdate=!0;const b=M*4;for(let A=0;A<d;A++){const D=p[A],O=g[A],z=_[A],I=S*y*4*A;for(let Z=0;Z<D.count;Z++){const H=Z*b;u===!0&&(s.fromBufferAttribute(D,Z),E[I+H+0]=s.x,E[I+H+1]=s.y,E[I+H+2]=s.z,E[I+H+3]=0),m===!0&&(s.fromBufferAttribute(O,Z),E[I+H+4]=s.x,E[I+H+5]=s.y,E[I+H+6]=s.z,E[I+H+7]=0),x===!0&&(s.fromBufferAttribute(z,Z),E[I+H+8]=s.x,E[I+H+9]=s.y,E[I+H+10]=s.z,E[I+H+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:v,size:new Ut(S,y)},n.set(o,f),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];const m=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function m0(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const g0={[Pl]:"LINEAR_TONE_MAPPING",[Ll]:"REINHARD_TONE_MAPPING",[Dl]:"CINEON_TONE_MAPPING",[Il]:"ACES_FILMIC_TONE_MAPPING",[Ul]:"AGX_TONE_MAPPING",[ma]:"NEUTRAL_TONE_MAPPING",[Nl]:"CUSTOM_TONE_MAPPING"};function _0(i,t,e,n,s,r){const a=new En(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Re;h.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new se([0,2,0,0,2,0],2));const d=new Ud({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Qt(h,d),u=new Wc(-1,1,1,-1,0,1);let m=null,x=null,p=!1,g,_=null,M=[],S=!1;this.setSize=function(y,E){a.setSize(y,E),o!==null&&o.setSize(y,E),l!==null&&l.setSize(y,E);for(let v=0;v<M.length;v++){const b=M[v];b.setSize&&b.setSize(y,E)}},this.setEffects=function(y){M=y,S=M.length>0&&M[0].isRenderPass===!0;const E=a.width,v=a.height;M.length>0&&o===null&&(o=new En(E,v,{type:cn,depthBuffer:!1,stencilBuffer:!1}),l=new En(E,v,{type:cn,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&M.some(R=>R.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Hi(E,v),r===!0&&(c.format=Yn,c.type=Ai)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let R=0;R<M.length;R++){const A=M[R];A.setSize&&A.setSize(E,v),b&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(y,E){if(p||y.toneMapping===Dn&&M.length===0)return!1;if(_=E,E!==null){const v=E.width,b=E.height;(a.width!==v||a.height!==b)&&this.setSize(v,b)}return S===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Dn,!0},this.hasRenderPass=function(){return S},this.end=function(y,E){y.toneMapping=g,p=!0;let v=a,b=o;for(let R=0;R<M.length;R++){const A=M[R];A.enabled!==!1&&(A.render(y,b,v,E),A.needsSwap!==!1&&(v=b,b=b===o?l:o))}if(m!==y.outputColorSpace||x!==y.toneMapping){m=y.outputColorSpace,x=y.toneMapping,d.defines={},Jt.getTransfer(m)===ae&&(d.defines.SRGB_TRANSFER="");const R=g0[x];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,y.setRenderTarget(_),y.render(f,u),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const ih=new Ae,sh=new Hi(1,1),rh=new Ec(1),ah=new ic,oh=new qf,lh=new bc,ch=[],hh=[],uh=new Float32Array(16),fh=new Float32Array(9),dh=new Float32Array(4);function $i(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ch[s];if(r===void 0&&(r=new Float32Array(s),ch[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Dr(i,t){let e=hh[t];e===void 0&&(e=new Int32Array(t),hh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function x0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function v0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function M0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function S0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function y0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;dh.set(n),i.uniformMatrix2fv(this.addr,!1,dh),Pe(e,n)}}function b0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;fh.set(n),i.uniformMatrix3fv(this.addr,!1,fh),Pe(e,n)}}function E0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;uh.set(n),i.uniformMatrix4fv(this.addr,!1,uh),Pe(e,n)}}function w0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function T0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function A0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function R0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function C0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function L0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function Ir(i){return i.version===0&&(i.compareFunction=Xl,i.needsUpdate=!0),i}function I0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ir(sh):r=ih,e.setTexture2D(t||r,s)}function N0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||oh,s)}function U0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ir(rh):r=lh,e.setTextureCube(t||r,s)}function F0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ah,s)}function O0(i){switch(i){case 5126:return x0;case 35664:return v0;case 35665:return M0;case 35666:return S0;case 35674:return y0;case 35675:return b0;case 35676:return E0;case 5124:case 35670:return w0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return P0;case 36295:return L0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return F0}}function z0(i,t){i.uniform1fv(this.addr,t)}function B0(i,t){const e=$i(t,this.size,2);i.uniform2fv(this.addr,e)}function k0(i,t){const e=$i(t,this.size,3);i.uniform3fv(this.addr,e)}function G0(i,t){const e=$i(t,this.size,4);i.uniform4fv(this.addr,e)}function H0(i,t){const e=$i(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function V0(i,t){const e=$i(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function W0(i,t){const e=$i(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function X0(i,t){i.uniform1iv(this.addr,t)}function q0(i,t){i.uniform2iv(this.addr,t)}function Y0(i,t){i.uniform3iv(this.addr,t)}function $0(i,t){i.uniform4iv(this.addr,t)}function K0(i,t){i.uniform1uiv(this.addr,t)}function Z0(i,t){i.uniform2uiv(this.addr,t)}function J0(i,t){i.uniform3uiv(this.addr,t)}function Q0(i,t){i.uniform4uiv(this.addr,t)}function j0(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ir(sh):a=ih;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function tg(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||oh,r[a])}function eg(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ir(rh):a=lh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function ng(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ah,r[a])}function ig(i){switch(i){case 5126:return z0;case 35664:return B0;case 35665:return k0;case 35666:return G0;case 35674:return H0;case 35675:return V0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return q0;case 35668:case 35672:return Y0;case 35669:case 35673:return $0;case 5125:return K0;case 36294:return Z0;case 36295:return J0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return j0;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return eg;case 36289:case 36303:case 36311:case 36292:return ng}}class sg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=O0(e.type)}}class rg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ig(e.type)}}class ag{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Xo=/(\w+)(\])?(\[|\.)?/g;function ph(i,t){i.seq.push(t),i.map[t.id]=t}function og(i,t,e){const n=i.name,s=n.length;for(Xo.lastIndex=0;;){const r=Xo.exec(n),a=Xo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ph(e,c===void 0?new sg(o,i,t):new rg(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new ag(o),ph(e,d)),e=d}}}class Nr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);og(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function mh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const lg=37297;let cg=0;function hg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const gh=new Ht;function ug(i){Jt._getMatrix(gh,Jt.workingColorSpace,i);const t=`mat3( ${gh.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case sr:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function _h(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+hg(i.getShaderSource(t),o)}else return r}function fg(i,t){const e=ug(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const dg={[Pl]:"Linear",[Ll]:"Reinhard",[Dl]:"Cineon",[Il]:"ACESFilmic",[Ul]:"AgX",[ma]:"Neutral",[Nl]:"Custom"};function pg(i,t){const e=dg[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ur=new $;function mg(){Jt.getLuminanceCoefficients(Ur);const i=Ur.x.toFixed(4),t=Ur.y.toFixed(4),e=Ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function _g(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Rs(i){return i!==""}function xh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function vh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function qo(i){return i.replace(vg,Mg)}function Mg(i,t){const e=Yt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return qo(e)}const Sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mh(i){return i.replace(Sg,yg)}function yg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const bg={[is]:"SHADOWMAP_TYPE_PCF",[ss]:"SHADOWMAP_TYPE_VSM"};function Eg(i){return bg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wg={[os]:"ENVMAP_MODE_REFRACTION"};function Tg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":wg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ag={[pa]:"ENVMAP_BLENDING_MULTIPLY",[hf]:"ENVMAP_BLENDING_MIX",[uf]:"ENVMAP_BLENDING_ADD"};function Rg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ag[i.combine]||"ENVMAP_BLENDING_NONE"}function Cg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Eg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Tg(e),d=Rg(e),f=gg(e),u=_g(r),m=s.createProgram();let x,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Rs).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Rs).join(`
`),p.length>0&&(p+=`
`)):(x=[Sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),p=[Sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?pg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,fg("linearToOutputTexel",e.outputColorSpace),mg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),a=qo(a),a=xh(a,e),a=vh(a,e),o=qo(o),o=xh(o,e),o=vh(o,e),a=Mh(a),o=Mh(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=g+x+a,M=g+p+o,S=mh(s,s.VERTEX_SHADER,_),y=mh(s,s.FRAGMENT_SHADER,M);s.attachShader(m,S),s.attachShader(m,y),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function E(A){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(m)||"",O=s.getShaderInfoLog(S)||"",z=s.getShaderInfoLog(y)||"",I=D.trim(),Z=O.trim(),H=z.trim();let q=!0,k=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,S,y);else{const F=_h(s,S,"vertex"),G=_h(s,y,"fragment");te("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+F+`
`+G)}else I!==""?Bt("WebGLProgram: Program Info Log:",I):(Z===""||H==="")&&(k=!1);k&&(A.diagnostics={runnable:q,programLog:I,vertexShader:{log:Z,prefix:x},fragmentShader:{log:H,prefix:p}})}s.deleteShader(S),s.deleteShader(y),v=new Nr(s,m),b=xg(s,m)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(m,lg)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=y,this}let Pg=0;class Lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Dg(t),e.set(t,n)),n}}class Dg{constructor(t){this.id=Pg++,this.code=t,this.usedTimes=0}}function Ig(i){return i===$n||i===tr||i===er}function Ng(i,t,e,n,s,r){const a=new fo,o=new Lg,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,b,R,A,D,O){const z=A.fog,I=D.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?A.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,q=t.get(v.envMap||Z,H),k=f[v.type];let F=n.precision;v.precision!==null&&(F=n.getMaxPrecision(v.precision),F!==v.precision&&Bt("WebGLProgram.getParameters:",v.precision,"not supported, using",F,"instead."));const G=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Q=G!==void 0?G.length:0;let Y=0;I.morphAttributes.position!==void 0&&(Y=1),I.morphAttributes.normal!==void 0&&(Y=2),I.morphAttributes.color!==void 0&&(Y=3);let vt,j,lt,ft;if(k){const Et=Rn[k];vt=Et.vertexShader,j=Et.fragmentShader}else{vt=v.vertexShader,j=v.fragmentShader;const Et=o.getVertexShaderStage(v),ce=o.getFragmentShaderStage(v);o.update(v,Et,ce),lt=Et.id,ft=ce.id}const dt=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),ht=D.isInstancedMesh===!0,kt=D.isBatchedMesh===!0,it=!!v.map,gt=!!v.matcap,At=!!q,Ot=At&&q.isPMREMTexture===!0,Vt=!!v.aoMap,oe=!!v.lightMap,Ve=!!v.bumpMap&&v.wireframe===!1,re=!!v.normalMap,Ie=!!v.displacementMap,he=!!v.emissiveMap,Se=!!v.metalnessMap,We=!!v.roughnessMap,ze=v.anisotropy>0,V=v.clearcoat>0,Xe=v.diffuseRoughness>0,de=v.dispersion>0,le=v.retroreflectivity>0,Mt=v.iridescence>0,ve=v.sheen>0,It=v.transmission>0,Ft=ze&&!!v.anisotropyMap,L=V&&!!v.clearcoatMap,w=V&&!!v.clearcoatNormalMap,J=V&&!!v.clearcoatRoughnessMap,mt=Xe&&!!v.diffuseRoughnessMap,ct=Mt&&!!v.iridescenceMap,xt=Mt&&!!v.iridescenceThicknessMap,P=ve&&!!v.sheenColorMap,N=ve&&!!v.sheenRoughnessMap,U=!!v.specularMap,W=!!v.specularColorMap,C=!!v.specularIntensityMap,K=It&&!!v.transmissionMap,X=It&&!!v.thicknessMap,rt=!!v.gradientMap,at=!!v.alphaMap,ut=v.alphaTest>0,Tt=!!v.alphaHash,Wt=!!v.extensions;let _t=Dn;v.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(_t=i.toneMapping);const Nt=Ot?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,Xt={shaderID:k,shaderType:v.type,shaderName:v.name,vertexShader:vt,fragmentShader:j,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:ft,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:F,batching:kt,batchingColor:kt&&D._colorsTexture!==null,instancing:ht,instancingColor:ht&&D.instanceColor!==null,instancingMorph:ht&&D.morphTexture!==null,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:it,matcap:gt,envMap:At,envMapMode:At&&q.mapping,envMapPMREM:Ot,envMapMaxLod:Ot?Nt.length-1:null,envMapSize:Ot?Nt[0].width:null,aoMap:Vt,lightMap:oe,bumpMap:Ve,normalMap:re,displacementMap:Ie,emissiveMap:he,normalMapObjectSpace:re&&v.normalMapType===pf,normalMapTangentSpace:re&&v.normalMapType===nr,packedNormalMap:re&&v.normalMapType===nr&&Ig(v.normalMap.format),metalnessMap:Se,roughnessMap:We,anisotropy:ze,anisotropyMap:Ft,clearcoat:V,clearcoatMap:L,clearcoatNormalMap:w,clearcoatRoughnessMap:J,diffuseRoughness:Xe,diffuseRoughnessMap:mt,dispersion:de,retroreflection:le,iridescence:Mt,iridescenceMap:ct,iridescenceThicknessMap:xt,sheen:ve,sheenColorMap:P,sheenRoughnessMap:N,specularMap:U,specularColorMap:W,specularIntensityMap:C,transmission:It,transmissionMap:K,thicknessMap:X,gradientMap:rt,opaque:v.transparent===!1&&v.blending===rs&&v.alphaToCoverage===!1,alphaMap:at,alphaTest:ut,alphaHash:Tt,combine:v.combine,mapUv:it&&u(v.map.channel),aoMapUv:Vt&&u(v.aoMap.channel),lightMapUv:oe&&u(v.lightMap.channel),bumpMapUv:Ve&&u(v.bumpMap.channel),normalMapUv:re&&u(v.normalMap.channel),displacementMapUv:Ie&&u(v.displacementMap.channel),emissiveMapUv:he&&u(v.emissiveMap.channel),metalnessMapUv:Se&&u(v.metalnessMap.channel),roughnessMapUv:We&&u(v.roughnessMap.channel),anisotropyMapUv:Ft&&u(v.anisotropyMap.channel),clearcoatMapUv:L&&u(v.clearcoatMap.channel),clearcoatNormalMapUv:w&&u(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&u(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:mt&&u(v.diffuseRoughnessMap.channel),iridescenceMapUv:ct&&u(v.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&u(v.iridescenceThicknessMap.channel),sheenColorMapUv:P&&u(v.sheenColorMap.channel),sheenRoughnessMapUv:N&&u(v.sheenRoughnessMap.channel),specularMapUv:U&&u(v.specularMap.channel),specularColorMapUv:W&&u(v.specularColorMap.channel),specularIntensityMapUv:C&&u(v.specularIntensityMap.channel),transmissionMapUv:K&&u(v.transmissionMap.channel),thicknessMapUv:X&&u(v.thicknessMap.channel),alphaMapUv:at&&u(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(re||ze),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(it||at),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&re===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Y,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.filter(Et=>Et.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:_t,decodeVideoTexture:it&&v.map.isVideoTexture===!0&&Jt.getTransfer(v.map.colorSpace)===ae,decodeVideoTextureEmissive:he&&v.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(v.emissiveMap.colorSpace)===ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ye,flipSided:v.side===$e,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Wt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&v.extensions.multiDraw===!0||kt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function x(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)b.push(R),b.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(b,v),g(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function p(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function g(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function _(v){const b=f[v.type];let R;if(b){const A=Rn[b];R=Dd.clone(A.uniforms)}else R=v.uniforms;return R}function M(v,b){let R=h.get(b);return R!==void 0?++R.usedTimes:(R=new Cg(i,b,v,s),c.push(R),h.set(b,R)),R}function S(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function y(v){o.remove(v)}function E(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:_,acquireProgram:M,releaseProgram:S,releaseShaderCache:y,programs:c,dispose:E}}function Ug(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Fg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function yh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,m,x,p,g){let _=i[t];return _===void 0?(_={id:f.id,object:f,geometry:u,material:m,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:p,group:g},i[t]=_):(_.id=f.id,_.object=f,_.geometry=u,_.material=m,_.materialVariant=a(f),_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=p,_.group=g),t++,_}function l(f,u,m,x,p,g,_){_.reversedDepth===!0&&(p=-p);const M=o(f,u,m,x,p,g);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):e.push(M)}function c(f,u,m,x,p,g){const _=o(f,u,m,x,p,g);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):e.unshift(_)}function h(f,u){e.length>1&&e.sort(f||Fg),n.length>1&&n.sort(u||yh),s.length>1&&s.sort(u||yh)}function d(){for(let f=t,u=i.length;f<u;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Og(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new bh,i.set(n,[a])):s>=r.length?(a=new bh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function zg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new $,color:new Dt};break;case"SpotLight":e={position:new $,direction:new $,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function Bg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let kg=0;function Gg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Hg(i){const t=new zg,e=Bg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);const s=new $,r=new ie,a=new ie;function o(c){let h=0,d=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let u=0,m=0,x=0,p=0,g=0,_=0,M=0,S=0,y=0,E=0,v=0,b=0,R=0,A=0;c.sort(Gg);for(let O=0,z=c.length;O<z;O++){const I=c[O],Z=I.color,H=I.intensity,q=I.distance;let k=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===$n?k=I.shadow.map.texture:k=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=Z.r*H,d+=Z.g*H,f+=Z.b*H;else if(I.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(I.sh.coefficients[F],H);A++}else if(I.isSunLight){const F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const G=I.shadow,Q=e.get(I);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[m]=Q,n.sunShadowMap[m]=k;const Y=G.getViewportCount();for(let vt=0;vt<Y;vt++)n.sunShadowMatrix[x+vt]=G.getMatrix(vt),n.sunShadowCascade[x+vt]=G._cascadeData[vt];x+=Y,m++}n.sun[u]=F,u++}else if(I.isDirectionalLight){const F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const G=I.shadow,Q=e.get(I);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=I.shadow.matrix,y++}n.directional[p]=F,p++}else if(I.isSpotLight){const F=t.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(Z).multiplyScalar(H),F.distance=q,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,n.spot[_]=F;const G=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,G.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[_]=G.matrix,I.castShadow){const Q=e.get(I);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=k,v++}_++}else if(I.isRectAreaLight){const F=t.get(I);F.color.copy(Z).multiplyScalar(H),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),n.rectArea[M]=F,M++}else if(I.isPointLight){const F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){const G=I.shadow,Q=e.get(I);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,Q.shadowCameraNear=G.camera.near,Q.shadowCameraFar=G.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=F,g++}else if(I.isHemisphereLight){const F=t.get(I);F.skyColor.copy(I.color).multiplyScalar(H),F.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[S]=F,S++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const D=n.hash;(D.sunLength!==u||D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==M||D.hemiLength!==S||D.numSunShadows!==m||D.numDirectionalShadows!==y||D.numPointShadows!==E||D.numSpotShadows!==v||D.numSpotMaps!==b||D.numLightProbes!==A)&&(n.sun.length=u,n.directional.length=p,n.spot.length=_,n.rectArea.length=M,n.point.length=g,n.hemi.length=S,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+b-R,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,D.sunLength=u,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=M,D.hemiLength=S,D.numSunShadows=m,D.numDirectionalShadows=y,D.numPointShadows=E,D.numSpotShadows=v,D.numSpotMaps=b,D.numLightProbes=A,n.version=kg++)}function l(c,h){let d=0,f=0,u=0,m=0,x=0,p=0;const g=h.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){const S=c[_];if(S.isSunLight){const y=n.sun[d];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),d++}else if(S.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(S.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),m++}else if(S.isRectAreaLight){const y=n.rectArea[x];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),u++}else if(S.isHemisphereLight){const y=n.hemi[p];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function Eh(i){const t=new Hg(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){n.push(d)}function l(){t.setup(e),s.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Vg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Eh(i),t.set(s,[o])):r>=a.length?(o=new Eh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xg=`uniform sampler2D shadow_pass;
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
}`,qg=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],Yg=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],wh=new ie,Cs=new $,Yo=new $;function $g(i,t,e){let n=new ys;const s=new Ut,r=new Ut,a=new ge,o=new Fd,l=new Od,c={},h=e.maxTextureSize,d={[Xn]:$e,[$e]:Xn,[ye]:ye},f=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:Wg,fragmentShader:Xg}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const m=new Re;m.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Qt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=is;let g=this.type;this.render=function(E,v,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Wu&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=is);const R=i.getRenderTarget(),A=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Ei),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=g!==this.type;z&&v.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(Z=>Z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,Z=E.length;I<Z;I++){const H=E[I],q=H.shadow;if(q===void 0){Bt("WebGLShadowMap:",H,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const k=q.getFrameExtents();s.multiply(k),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/k.x),s.x=r.x*k.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/k.y),s.y=r.y*k.y,q.mapSize.y=r.y));const F=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=F,q.map===null||z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===ss){if(H.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new En(s.x,s.y,{format:$n,type:cn,minFilter:ke,magFilter:ke,generateMipmaps:!1}),q.map.texture.name=H.name+".shadowMap",q.map.depthTexture=new Hi(s.x,s.y,ln),q.map.depthTexture.name=H.name+".shadowMapDepth",q.map.depthTexture.format=qn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Fe,q.map.depthTexture.magFilter=Fe}else H.isPointLight?(q.map=new Wo(s.x),q.map.depthTexture=new Ec(s.x,bn)):(q.map=new En(s.x,s.y),q.map.depthTexture=new Hi(s.x,s.y,bn)),q.map.depthTexture.name=H.name+".shadowMap",q.map.depthTexture.format=qn,this.type===is?(q.map.depthTexture.compareFunction=F?Wl:Vl,q.map.depthTexture.minFilter=ke,q.map.depthTexture.magFilter=ke):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Fe,q.map.depthTexture.magFilter=Fe);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);const G=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();H.isPointLight!==!0&&q.updateMatrices(H,b);const Q=q.camera.layers.mask&4294967294?q.camera.layers:b.layers;for(let Y=0;Y<G;Y++){const vt=q.getCamera(Y);if(H.isPointLight){const j=q.camera,lt=q.matrix,ft=H.distance||j.far;ft!==j.far&&(j.far=ft,j.updateProjectionMatrix()),Cs.setFromMatrixPosition(H.matrixWorld),j.position.copy(Cs),Yo.copy(j.position),Yo.add(qg[Y]),j.up.copy(Yg[Y]),j.lookAt(Yo),j.updateMatrixWorld(),lt.makeTranslation(-Cs.x,-Cs.y,-Cs.z),wh.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),q._frustum.setFromProjectionMatrix(wh,j.coordinateSystem,j.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,Y),i.clear();else{Y===0&&(i.setRenderTarget(q.map),i.clear());const j=q.getViewport(Y);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),O.viewport(a)}n=q.getFrustum(Y),S(v,b,vt,H,Q,this.type)}q.isPointLightShadow!==!0&&this.type===ss&&_(q,b),q.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(R,A,D)};function _(E,v){const b=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new En(s.x,s.y,{format:$n,type:cn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(v,null,b,f,x,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(v,null,b,u,x,null)}function M(E,v,b,R){let A=null;const D=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)A=D;else if(A=b.isPointLight===!0?l:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const O=A.uuid,z=v.uuid;let I=c[O];I===void 0&&(I={},c[O]=I);let Z=I[z];Z===void 0&&(Z=A.clone(),I[z]=Z,v.addEventListener("dispose",y)),A=Z}if(A.visible=v.visible,A.wireframe=v.wireframe,R===ss?A.side=v.shadowSide!==null?v.shadowSide:v.side:A.side=v.shadowSide!==null?v.shadowSide:d[v.side],A.alphaMap=v.alphaMap,A.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,A.map=v.map,A.clipShadows=v.clipShadows,A.clippingPlanes=v.clippingPlanes,A.clipIntersection=v.clipIntersection,A.displacementMap=v.displacementMap,A.displacementScale=v.displacementScale,A.displacementBias=v.displacementBias,A.wireframeLinewidth=v.wireframeLinewidth,A.linewidth=v.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const O=i.properties.get(A);O.light=b}return A}function S(E,v,b,R,A,D){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===ss)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const I=t.update(E),Z=E.material;if(Array.isArray(Z)){const H=I.groups;for(let q=0,k=H.length;q<k;q++){const F=H[q],G=Z[F.materialIndex];if(G&&G.visible){const Q=M(E,G,R,D);E.onBeforeShadow(i,E,v,b,I,Q,F),i.renderBufferDirect(b,null,I,Q,E,F),E.onAfterShadow(i,E,v,b,I,Q,F)}}}else if(Z.visible){const H=M(E,Z,R,D);E.onBeforeShadow(i,E,v,b,I,H,null),i.renderBufferDirect(b,null,I,H,E,null),E.onAfterShadow(i,E,v,b,I,H,null)}}const z=E.children;for(let I=0,Z=z.length;I<Z;I++)S(z[I],v,b,R,A,D)}function y(E){E.target.removeEventListener("dispose",y);for(const b in c){const R=c[b],A=E.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function Kg(i,t){function e(){let C=!1;const K=new ge;let X=null;const rt=new ge(0,0,0,0);return{setMask:function(at){X!==at&&!C&&(i.colorMask(at,at,at,at),X=at)},setLocked:function(at){C=at},setClear:function(at,ut,Tt,Wt,_t){_t===!0&&(at*=Wt,ut*=Wt,Tt*=Wt),K.set(at,ut,Tt,Wt),rt.equals(K)===!1&&(i.clearColor(at,ut,Tt,Wt),rt.copy(K))},reset:function(){C=!1,X=null,rt.set(-1,0,0,0)}}}function n(){let C=!1,K=!1,X=null,rt=null,at=null;return{setReversed:function(ut){if(K!==ut){const Tt=t.get("EXT_clip_control");ut?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),K=ut;const Wt=at;at=null,this.setClear(Wt)}},getReversed:function(){return K},setTest:function(ut){ut?pt(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(ut){X!==ut&&!C&&(i.depthMask(ut),X=ut)},setFunc:function(ut){if(K&&(ut=wf[ut]),rt!==ut){switch(ut){case oa:i.depthFunc(i.NEVER);break;case la:i.depthFunc(i.ALWAYS);break;case ca:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case ha:i.depthFunc(i.EQUAL);break;case ua:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=ut}},setLocked:function(ut){C=ut},setClear:function(ut){at!==ut&&(at=ut,K&&(ut=1-ut),i.clearDepth(ut))},reset:function(){C=!1,X=null,rt=null,at=null,K=!1}}}function s(){let C=!1,K=null,X=null,rt=null,at=null,ut=null,Tt=null,Wt=null,_t=null;return{setTest:function(Nt){C||(Nt?pt(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(Nt){K!==Nt&&!C&&(i.stencilMask(Nt),K=Nt)},setFunc:function(Nt,Xt,Et){(X!==Nt||rt!==Xt||at!==Et)&&(i.stencilFunc(Nt,Xt,Et),X=Nt,rt=Xt,at=Et)},setOp:function(Nt,Xt,Et){(ut!==Nt||Tt!==Xt||Wt!==Et)&&(i.stencilOp(Nt,Xt,Et),ut=Nt,Tt=Xt,Wt=Et)},setLocked:function(Nt){C=Nt},setClear:function(Nt){_t!==Nt&&(i.clearStencil(Nt),_t=Nt)},reset:function(){C=!1,K=null,X=null,rt=null,at=null,ut=null,Tt=null,Wt=null,_t=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let h={},d={},f={},u=new WeakMap,m=[],x=null,p=!1,g=null,_=null,M=null,S=null,y=null,E=null,v=null,b=new Dt(0,0,0),R=0,A=!1,D=null,O=null,z=null,I=null,Z=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,k=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(F)[1]),q=k>=1):F.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),q=k>=2);let G=null,Q={};const Y=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),j=new ge().fromArray(Y),lt=new ge().fromArray(vt);function ft(C,K,X,rt){const at=new Uint8Array(4),ut=i.createTexture();i.bindTexture(C,ut),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<X;Tt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(K+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return ut}const dt={};dt[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pt(i.DEPTH_TEST),a.setFunc(as),Ve(!1),re(wl),pt(i.CULL_FACE),Vt(Ei);function pt(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function ht(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function kt(C,K){return f[C]!==K?(i.bindFramebuffer(C,K),f[C]=K,C===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=K),C===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=K),!0):!1}function it(C,K){let X=m,rt=!1;if(C){X=u.get(K),X===void 0&&(X=[],u.set(K,X));const at=C.textures;if(X.length!==at.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Tt=at.length;ut<Tt;ut++)X[ut]=i.COLOR_ATTACHMENT0+ut;X.length=at.length,rt=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,rt=!0);rt&&i.drawBuffers(X)}function gt(C){return x!==C?(i.useProgram(C),x=C,!0):!1}const At={[wi]:i.FUNC_ADD,[qu]:i.FUNC_SUBTRACT,[Yu]:i.FUNC_REVERSE_SUBTRACT};At[$u]=i.MIN,At[Ku]=i.MAX;const Ot={[Zu]:i.ZERO,[Ju]:i.ONE,[Qu]:i.SRC_COLOR,[Rl]:i.SRC_ALPHA,[rf]:i.SRC_ALPHA_SATURATE,[nf]:i.DST_COLOR,[tf]:i.DST_ALPHA,[ju]:i.ONE_MINUS_SRC_COLOR,[Cl]:i.ONE_MINUS_SRC_ALPHA,[sf]:i.ONE_MINUS_DST_COLOR,[ef]:i.ONE_MINUS_DST_ALPHA,[af]:i.CONSTANT_COLOR,[of]:i.ONE_MINUS_CONSTANT_COLOR,[lf]:i.CONSTANT_ALPHA,[cf]:i.ONE_MINUS_CONSTANT_ALPHA};function Vt(C,K,X,rt,at,ut,Tt,Wt,_t,Nt){if(C===Ei){p===!0&&(ht(i.BLEND),p=!1);return}if(p===!1&&(pt(i.BLEND),p=!0),C!==Xu){if(C!==g||Nt!==A){if((_!==wi||y!==wi)&&(i.blendEquation(i.FUNC_ADD),_=wi,y=wi),Nt)switch(C){case rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case aa:i.blendFunc(i.ONE,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:te("WebGLState: Invalid blending: ",C);break}else switch(C){case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case aa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tl:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Al:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",C);break}M=null,S=null,E=null,v=null,b.set(0,0,0),R=0,g=C,A=Nt}return}at=at||K,ut=ut||X,Tt=Tt||rt,(K!==_||at!==y)&&(i.blendEquationSeparate(At[K],At[at]),_=K,y=at),(X!==M||rt!==S||ut!==E||Tt!==v)&&(i.blendFuncSeparate(Ot[X],Ot[rt],Ot[ut],Ot[Tt]),M=X,S=rt,E=ut,v=Tt),(Wt.equals(b)===!1||_t!==R)&&(i.blendColor(Wt.r,Wt.g,Wt.b,_t),b.copy(Wt),R=_t),g=C,A=!1}function oe(C,K){C.side===ye?ht(i.CULL_FACE):pt(i.CULL_FACE);let X=C.side===$e;K&&(X=!X),Ve(X),C.blending===rs&&C.transparent===!1?Vt(Ei):Vt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);const rt=C.stencilWrite;o.setTest(rt),rt&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),he(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(C){D!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),D=C)}function re(C){C!==Hu?(pt(i.CULL_FACE),C!==O&&(C===wl?i.cullFace(i.BACK):C===Vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),O=C}function Ie(C){C!==z&&(q&&i.lineWidth(C),z=C)}function he(C,K,X){C?(pt(i.POLYGON_OFFSET_FILL),(I!==K||Z!==X)&&(I=K,Z=X,a.getReversed()&&(K=-K,X=-X),i.polygonOffset(K,X))):ht(i.POLYGON_OFFSET_FILL)}function Se(C){C?pt(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function We(C){C===void 0&&(C=i.TEXTURE0+H-1),G!==C&&(i.activeTexture(C),G=C)}function ze(C,K,X){X===void 0&&(G===null?X=i.TEXTURE0+H-1:X=G);let rt=Q[X];rt===void 0&&(rt={type:void 0,texture:void 0},Q[X]=rt),(rt.type!==C||rt.texture!==K)&&(G!==X&&(i.activeTexture(X),G=X),i.bindTexture(C,K||dt[C]),rt.type=C,rt.texture=K)}function V(){const C=Q[G];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Xe(){try{i.compressedTexImage2D(...arguments)}catch(C){te("WebGLState:",C)}}function de(){try{i.compressedTexImage3D(...arguments)}catch(C){te("WebGLState:",C)}}function le(){try{i.texSubImage2D(...arguments)}catch(C){te("WebGLState:",C)}}function Mt(){try{i.texSubImage3D(...arguments)}catch(C){te("WebGLState:",C)}}function ve(){try{i.compressedTexSubImage2D(...arguments)}catch(C){te("WebGLState:",C)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(C){te("WebGLState:",C)}}function Ft(){try{i.texStorage2D(...arguments)}catch(C){te("WebGLState:",C)}}function L(){try{i.texStorage3D(...arguments)}catch(C){te("WebGLState:",C)}}function w(){try{i.texImage2D(...arguments)}catch(C){te("WebGLState:",C)}}function J(){try{i.texImage3D(...arguments)}catch(C){te("WebGLState:",C)}}function mt(C){return d[C]!==void 0?d[C]:i.getParameter(C)}function ct(C,K){d[C]!==K&&(i.pixelStorei(C,K),d[C]=K)}function xt(C){j.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),j.copy(C))}function P(C){lt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),lt.copy(C))}function N(C,K){let X=c.get(K);X===void 0&&(X=new WeakMap,c.set(K,X));let rt=X.get(C);rt===void 0&&(rt=i.getUniformBlockIndex(K,C.name),i.uniformBlockBinding(K,rt,rt),X.set(C,rt))}function U(C,K,X){const at=c.get(K).get(C);l[at]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,at,X),l[at]=X)}function W(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},G=null,Q={},f={},l={},u=new WeakMap,m=[],x=null,p=!1,g=null,_=null,M=null,S=null,y=null,E=null,v=null,b=new Dt(0,0,0),R=0,A=!1,D=null,O=null,z=null,I=null,Z=null,j.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:pt,disable:ht,bindFramebuffer:kt,drawBuffers:it,useProgram:gt,setBlending:Vt,setMaterial:oe,setFlipSided:Ve,setCullFace:re,setLineWidth:Ie,setPolygonOffset:he,setScissorTest:Se,activeTexture:We,bindTexture:ze,unbindTexture:V,compressedTexImage2D:Xe,compressedTexImage3D:de,texImage2D:w,texImage3D:J,pixelStorei:ct,getParameter:mt,updateUBOMapping:N,uniformBlockBinding:U,texStorage2D:Ft,texStorage3D:L,texSubImage2D:le,texSubImage3D:Mt,compressedTexSubImage2D:ve,compressedTexSubImage3D:It,scissor:xt,viewport:P,reset:W}}function Zg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,h=new WeakMap,d=new Set;let f;const u=new WeakMap,m=new Set,x=new FinalizationRegistry(L=>m.delete(L));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,w){return p?new OffscreenCanvas(L,w):hs("canvas")}function _(L,w,J){let mt=1;const ct=Ft(L);if((ct.width>J||ct.height>J)&&(mt=J/Math.max(ct.width,ct.height)),mt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const xt=Math.floor(mt*ct.width),P=Math.floor(mt*ct.height);f===void 0&&(f=g(xt,P));const N=w?g(xt,P):f;return N.width=xt,N.height=P,N.getContext("2d").drawImage(L,0,0,xt,P),Bt("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+xt+"x"+P+")."),N}else return"data"in L&&Bt("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),L;return L}function M(L){return L.generateMipmaps}function S(L){i.generateMipmap(L)}function y(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(L,w,J,mt,ct,xt=!1){if(L!==null){if(i[L]!==void 0)return i[L];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let P;mt&&(P=t.get("EXT_texture_norm16"),P||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let N=w;if(w===i.RED&&(J===i.FLOAT&&(N=i.R32F),J===i.HALF_FLOAT&&(N=i.R16F),J===i.UNSIGNED_BYTE&&(N=i.R8),J===i.UNSIGNED_SHORT&&P&&(N=P.R16_EXT),J===i.SHORT&&P&&(N=P.R16_SNORM_EXT)),w===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(N=i.R8UI),J===i.UNSIGNED_SHORT&&(N=i.R16UI),J===i.UNSIGNED_INT&&(N=i.R32UI),J===i.BYTE&&(N=i.R8I),J===i.SHORT&&(N=i.R16I),J===i.INT&&(N=i.R32I)),w===i.RG&&(J===i.FLOAT&&(N=i.RG32F),J===i.HALF_FLOAT&&(N=i.RG16F),J===i.UNSIGNED_BYTE&&(N=i.RG8),J===i.UNSIGNED_SHORT&&P&&(N=P.RG16_EXT),J===i.SHORT&&P&&(N=P.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(N=i.RG8UI),J===i.UNSIGNED_SHORT&&(N=i.RG16UI),J===i.UNSIGNED_INT&&(N=i.RG32UI),J===i.BYTE&&(N=i.RG8I),J===i.SHORT&&(N=i.RG16I),J===i.INT&&(N=i.RG32I)),w===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(N=i.RGB8UI),J===i.UNSIGNED_SHORT&&(N=i.RGB16UI),J===i.UNSIGNED_INT&&(N=i.RGB32UI),J===i.BYTE&&(N=i.RGB8I),J===i.SHORT&&(N=i.RGB16I),J===i.INT&&(N=i.RGB32I)),w===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(N=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(N=i.RGBA16UI),J===i.UNSIGNED_INT&&(N=i.RGBA32UI),J===i.BYTE&&(N=i.RGBA8I),J===i.SHORT&&(N=i.RGBA16I),J===i.INT&&(N=i.RGBA32I)),w===i.RGB&&(J===i.UNSIGNED_SHORT&&P&&(N=P.RGB16_EXT),J===i.SHORT&&P&&(N=P.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(N=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(N=i.R11F_G11F_B10F)),w===i.RGBA){const U=xt?sr:Jt.getTransfer(ct);J===i.FLOAT&&(N=i.RGBA32F),J===i.HALF_FLOAT&&(N=i.RGBA16F),J===i.UNSIGNED_BYTE&&(N=U===ae?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&P&&(N=P.RGBA16_EXT),J===i.SHORT&&P&&(N=P.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(N=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(N=i.RGB5_A1)}return(N===i.R16F||N===i.R32F||N===i.RG16F||N===i.RG32F||N===i.RGBA16F||N===i.RGBA32F)&&t.get("EXT_color_buffer_float"),N}function v(L,w){let J;return L?w===null||w===bn||w===Ai?J=i.DEPTH24_STENCIL8:w===ln?J=i.DEPTH32F_STENCIL8:w===ls&&(J=i.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===bn||w===Ai?J=i.DEPTH_COMPONENT24:w===ln?J=i.DEPTH_COMPONENT32F:w===ls&&(J=i.DEPTH_COMPONENT16),J}function b(L,w){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Fe&&L.minFilter!==ke?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function R(L){const w=new WeakRef(L);n.get(L).__ref=w,m.add(w),x.register(L,w,w)}function A(L){const w=n.get(L).__ref;w!==void 0&&(m.delete(w),x.unregister(w))}function D(L){z(L.target)}function O(L){I(L.target)}function z(L){L.removeEventListener("dispose",D),A(L),H(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&d.delete(L)}function I(L){L.removeEventListener("dispose",O),A(L),k(L)}function Z(){for(const L of m){const w=L.deref();w!==void 0&&(w.isRenderTarget===!0?I(w):z(w))}m.clear(),d.clear()}function H(L){const w=n.get(L);if(w.__webglInit===void 0)return;const J=L.source,mt=u.get(J);if(mt){const ct=mt[w.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&q(L),Object.keys(mt).length===0&&u.delete(J)}n.remove(L)}function q(L){const w=n.get(L);i.deleteTexture(w.__webglTexture);const J=L.source,mt=u.get(J);delete mt[w.__cacheKey],a.memory.textures--}function k(L){const w=n.get(L);w.__depthDisposeCallback&&w.__depthDisposeCallback();const J=L.depthTexture;if(J&&J.renderTarget===L&&z(J),L.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(w.__webglFramebuffer[ct]))for(let xt=0;xt<w.__webglFramebuffer[ct].length;xt++)i.deleteFramebuffer(w.__webglFramebuffer[ct][xt]);else i.deleteFramebuffer(w.__webglFramebuffer[ct]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ct])}else{if(Array.isArray(w.__webglFramebuffer))for(let ct=0;ct<w.__webglFramebuffer.length;ct++)i.deleteFramebuffer(w.__webglFramebuffer[ct]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ct=0;ct<w.__webglColorRenderbuffer.length;ct++)w.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ct]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const mt=L.textures;for(let ct=0,xt=mt.length;ct<xt;ct++){const P=n.get(mt[ct]);P.__webglTexture&&(i.deleteTexture(P.__webglTexture),a.memory.textures--),n.remove(mt[ct])}n.remove(L)}let F=0;function G(){F=0}function Q(){return F}function Y(L){F=L}function vt(){const L=F;return L>=s.maxTextures&&Bt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,L}function j(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.mipmapsAutoUpdate),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function lt(L,w){const J=n.get(L);if(L.isVideoTexture&&ve(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){const mt=L.image;if(mt===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(J,L,w);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+w)}function ft(L,w){const J=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){oe(J,L,w);return}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+w)}function dt(L,w){const J=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){oe(J,L,w);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+w)}function pt(L,w){const J=n.get(L);if(L.version>0&&J.__version!==L.version){Ve(J,L,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+w)}const ht={[$s]:i.REPEAT,[on]:i.CLAMP_TO_EDGE,[xa]:i.MIRRORED_REPEAT},kt={[Fe]:i.NEAREST,[ff]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[va]:i.LINEAR_MIPMAP_NEAREST,[yn]:i.LINEAR_MIPMAP_LINEAR},it={[gf]:i.NEVER,[Xl]:i.ALWAYS,[_f]:i.LESS,[Vl]:i.LEQUAL,[xf]:i.EQUAL,[Wl]:i.GEQUAL,[vf]:i.GREATER,[Mf]:i.NOTEQUAL};function gt(L,w){if(w.type===ln&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===ke||w.magFilter===va||w.magFilter===Ks||w.magFilter===yn||w.minFilter===ke||w.minFilter===va||w.minFilter===Ks||w.minFilter===yn)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ht[w.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ht[w.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ht[w.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,kt[w.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,kt[w.minFilter]),w.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,it[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Fe||w.minFilter!==Ks&&w.minFilter!==yn||w.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function At(L,w){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",D),R(w));const mt=w.source;let ct=u.get(mt);ct===void 0&&(ct={},u.set(mt,ct));const xt=j(w);if(xt!==L.__cacheKey){ct[xt]===void 0&&(ct[xt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),ct[xt].usedTimes++;const P=ct[L.__cacheKey];P!==void 0&&(ct[L.__cacheKey].usedTimes--,P.usedTimes===0&&q(w)),L.__cacheKey=xt,L.__webglTexture=ct[xt].texture}return J}function Ot(L,w,J){return Math.floor(Math.floor(L/J)/w)}function Vt(L,w,J,mt){const xt=L.updateRanges;if(xt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,J,mt,w.data);else{xt.sort((C,K)=>C.start-K.start);let P=0;for(let C=1;C<xt.length;C++){const K=xt[P],X=xt[C],rt=K.start+K.count,at=Ot(X.start,w.width,4),ut=Ot(K.start,w.width,4);X.start<=rt+1&&at===ut&&Ot(X.start+X.count-1,w.width,4)===at?K.count=Math.max(K.count,X.start+X.count-K.start):(++P,xt[P]=X)}xt.length=P+1;const N=e.getParameter(i.UNPACK_ROW_LENGTH),U=e.getParameter(i.UNPACK_SKIP_PIXELS),W=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let C=0,K=xt.length;C<K;C++){const X=xt[C],rt=Math.floor(X.start/4),at=Math.ceil(X.count/4),ut=rt%w.width,Tt=Math.floor(rt/w.width),Wt=at,_t=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,Tt),e.texSubImage2D(i.TEXTURE_2D,0,ut,Tt,Wt,_t,J,mt,w.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,N),e.pixelStorei(i.UNPACK_SKIP_PIXELS,U),e.pixelStorei(i.UNPACK_SKIP_ROWS,W)}}function oe(L,w,J){let mt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(mt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(mt=i.TEXTURE_3D);const ct=At(L,w),xt=w.source;e.bindTexture(mt,L.__webglTexture,i.TEXTURE0+J);const P=n.get(xt);if(xt.version!==P.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const _t=Jt.getPrimaries(Jt.workingColorSpace),Nt=w.colorSpace===Kn?null:Jt.getPrimaries(w.colorSpace),Xt=w.colorSpace===Kn||_t===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let U=_(w.image,!1,s.maxTextureSize);U=It(w,U);const W=r.convert(w.format,w.colorSpace),C=r.convert(w.type);let K=E(w.internalFormat,W,C,w.normalized,w.colorSpace,w.isVideoTexture);gt(mt,w);let X;const rt=w.mipmaps,at=w.isVideoTexture!==!0,ut=P.__version===void 0||ct===!0,Tt=xt.dataReady,Wt=b(w,U);if(w.isDepthTexture)K=v(w.format===Yn,w.type),ut&&(at?e.texStorage2D(i.TEXTURE_2D,1,K,U.width,U.height):e.texImage2D(i.TEXTURE_2D,0,K,U.width,U.height,0,W,C,null));else if(w.isDataTexture)if(rt.length>0){at&&ut&&e.texStorage2D(i.TEXTURE_2D,Wt,K,rt[0].width,rt[0].height);for(let _t=0,Nt=rt.length;_t<Nt;_t++)X=rt[_t],at?Tt&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,X.width,X.height,W,C,X.data):e.texImage2D(i.TEXTURE_2D,_t,K,X.width,X.height,0,W,C,X.data);w.generateMipmaps=!1}else at?(ut&&e.texStorage2D(i.TEXTURE_2D,Wt,K,U.width,U.height),Tt&&Vt(w,U,W,C)):e.texImage2D(i.TEXTURE_2D,0,K,U.width,U.height,0,W,C,U.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){at&&ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,K,rt[0].width,rt[0].height,U.depth);for(let _t=0,Nt=rt.length;_t<Nt;_t++)if(X=rt[_t],w.format!==hn)if(W!==null)if(at){if(Tt)if(w.layerUpdates.size>0){const Xt=$c(X.width,X.height,w.format,w.type);for(const Et of w.layerUpdates){const ce=X.data.subarray(Et*Xt/X.data.BYTES_PER_ELEMENT,(Et+1)*Xt/X.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,Et,X.width,X.height,1,W,ce)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,X.width,X.height,U.depth,W,X.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_t,K,X.width,X.height,U.depth,0,X.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Tt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,X.width,X.height,U.depth,W,C,X.data):e.texImage3D(i.TEXTURE_2D_ARRAY,_t,K,X.width,X.height,U.depth,0,W,C,X.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{at&&ut&&e.texStorage2D(i.TEXTURE_2D,Wt,K,rt[0].width,rt[0].height);for(let _t=0,Nt=rt.length;_t<Nt;_t++)X=rt[_t],w.format!==hn?W!==null?at?Tt&&e.compressedTexSubImage2D(i.TEXTURE_2D,_t,0,0,X.width,X.height,W,X.data):e.compressedTexImage2D(i.TEXTURE_2D,_t,K,X.width,X.height,0,X.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Tt&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,X.width,X.height,W,C,X.data):e.texImage2D(i.TEXTURE_2D,_t,K,X.width,X.height,0,W,C,X.data)}else if(w.isDataArrayTexture)if(at){if(ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,K,U.width,U.height,U.depth),Tt)if(w.layerUpdates.size>0){const _t=$c(U.width,U.height,w.format,w.type);for(const Nt of w.layerUpdates){const Xt=U.data.subarray(Nt*_t/U.data.BYTES_PER_ELEMENT,(Nt+1)*_t/U.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Nt,U.width,U.height,1,W,C,Xt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,W,C,U.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,K,U.width,U.height,U.depth,0,W,C,U.data);else if(w.isData3DTexture)at?(ut&&e.texStorage3D(i.TEXTURE_3D,Wt,K,U.width,U.height,U.depth),Tt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,W,C,U.data)):e.texImage3D(i.TEXTURE_3D,0,K,U.width,U.height,U.depth,0,W,C,U.data);else if(w.isFramebufferTexture){if(ut)if(at)e.texStorage2D(i.TEXTURE_2D,Wt,K,U.width,U.height);else{let _t=U.width,Nt=U.height;for(let Xt=0;Xt<Wt;Xt++)e.texImage2D(i.TEXTURE_2D,Xt,K,_t,Nt,0,W,C,null),_t>>=1,Nt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){const _t=i.canvas;if(_t.hasAttribute("layoutsubtree")||_t.setAttribute("layoutsubtree","true"),U.parentNode!==_t){_t.appendChild(U),d.add(w),_t.onpaint=Nt=>{const Xt=Nt.changedElements;for(const Et of d)Xt.includes(Et.image)&&(Et.needsUpdate=!0)},_t.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,U);else{const Xt=i.RGBA,Et=i.RGBA,ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Xt,Et,ce,U)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(rt.length>0){if(at&&ut){const _t=Ft(rt[0]);e.texStorage2D(i.TEXTURE_2D,Wt,K,_t.width,_t.height)}for(let _t=0,Nt=rt.length;_t<Nt;_t++)X=rt[_t],at?Tt&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,W,C,X):e.texImage2D(i.TEXTURE_2D,_t,K,W,C,X);w.generateMipmaps=!1}else if(at){if(ut){const _t=Ft(U);e.texStorage2D(i.TEXTURE_2D,Wt,K,_t.width,_t.height)}Tt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,W,C,U)}else e.texImage2D(i.TEXTURE_2D,0,K,W,C,U);M(w)&&w.mipmapsAutoUpdate===!0&&S(mt),P.__version=xt.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ve(L,w,J){if(w.image.length!==6)return;const mt=At(L,w),ct=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+J);const xt=n.get(ct);if(ct.version!==xt.__version||mt===!0){e.activeTexture(i.TEXTURE0+J);const P=Jt.getPrimaries(Jt.workingColorSpace),N=w.colorSpace===Kn?null:Jt.getPrimaries(w.colorSpace),U=w.colorSpace===Kn||P===N?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,U);const W=w.isCompressedTexture||w.image[0].isCompressedTexture,C=w.image[0]&&w.image[0].isDataTexture,K=[];for(let Et=0;Et<6;Et++)!W&&!C?K[Et]=_(w.image[Et],!0,s.maxCubemapSize):K[Et]=C?w.image[Et].image:w.image[Et],K[Et]=It(w,K[Et]);const X=K[0],rt=r.convert(w.format,w.colorSpace),at=r.convert(w.type);let ut=E(w.internalFormat,rt,at,w.normalized,w.colorSpace);const Tt=w.isVideoTexture!==!0,Wt=xt.__version===void 0||mt===!0,_t=ct.dataReady;let Nt=b(w,X);gt(i.TEXTURE_CUBE_MAP,w);let Xt;if(w.isDepthTexture){if(ut=v(w.format===Yn,w.type),Wt)if(Tt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ut,X.width,X.height);else for(let Et=0;Et<6;Et++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ut,X.width,X.height,0,rt,at,null)}else if(W){Tt&&Wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,ut,X.width,X.height);for(let Et=0;Et<6;Et++){Xt=K[Et].mipmaps;for(let ce=0;ce<Xt.length;ce++){const Ne=Xt[ce];w.format!==hn?rt!==null?Tt?_t&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce,0,0,Ne.width,Ne.height,rt,Ne.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce,ut,Ne.width,Ne.height,0,Ne.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce,0,0,Ne.width,Ne.height,rt,at,Ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce,ut,Ne.width,Ne.height,0,rt,at,Ne.data)}}}else{if(Xt=w.mipmaps,Tt&&Wt){Xt.length>0&&Nt++;const Et=Ft(K[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,ut,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(C){Tt?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,K[Et].width,K[Et].height,rt,at,K[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ut,K[Et].width,K[Et].height,0,rt,at,K[Et].data);for(let ce=0;ce<Xt.length;ce++){const ci=Xt[ce].image[Et].image;Tt?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce+1,0,0,ci.width,ci.height,rt,at,ci.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce+1,ut,ci.width,ci.height,0,rt,at,ci.data)}}else{Tt?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,rt,at,K[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ut,rt,at,K[Et]);for(let ce=0;ce<Xt.length;ce++){const Ne=Xt[ce];Tt?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce+1,0,0,rt,at,Ne.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce+1,ut,rt,at,Ne.image[Et])}}}M(w)&&w.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),xt.__version=ct.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function re(L,w,J,mt,ct,xt){const P=r.convert(J.format,J.colorSpace),N=r.convert(J.type),U=E(J.internalFormat,P,N,J.normalized,J.colorSpace),W=n.get(w),C=n.get(J);if(C.__renderTarget=w,!W.__hasExternalTextures){const K=Math.max(1,w.width>>xt),X=Math.max(1,w.height>>xt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,xt,U,K,X,w.depth,0,P,N,null):e.texImage2D(ct,xt,U,K,X,0,P,N,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),Mt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,ct,C.__webglTexture,0,le(w)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,mt,ct,C.__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(L,w,J){if(i.bindRenderbuffer(i.RENDERBUFFER,L),w.depthBuffer){const mt=w.depthTexture,ct=mt&&mt.isDepthTexture?mt.type:null,xt=v(w.stencilBuffer,ct),P=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Mt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(w),xt,w.width,w.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(w),xt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,xt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,P,i.RENDERBUFFER,L)}else{const mt=w.textures;for(let ct=0;ct<mt.length;ct++){const xt=mt[ct],P=r.convert(xt.format,xt.colorSpace),N=r.convert(xt.type),U=E(xt.internalFormat,P,N,xt.normalized,xt.colorSpace);Mt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(w),U,w.width,w.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(w),U,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,U,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(L,w,J){const mt=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ct=n.get(w.depthTexture);ct.__renderTarget=w;const xt=mt?w.depthTexture.image[0]:w.depthTexture.image;(!ct.__webglTexture||xt.width!==w.width||xt.height!==w.height)&&(xt.width=w.width,xt.height=w.height,w.depthTexture.needsUpdate=!0),mt?pt(w.depthTexture,0):lt(w.depthTexture,0);const P=ct.__webglTexture,N=le(w),U=mt?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,W=w.depthTexture.format===Yn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===qn)Mt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,U,P,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,W,U,P,0);else if(w.depthTexture.format===Yn)Mt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,U,P,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,W,U,P,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Se(L){const w=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const mt=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),mt){const ct=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,mt.removeEventListener("dispose",ct)};mt.addEventListener("dispose",ct),w.__depthDisposeCallback=ct}w.__boundDepthTexture=mt}if(L.depthTexture&&!w.__autoAllocateDepthBuffer)if(J)for(let mt=0;mt<6;mt++)he(w.__webglFramebuffer[mt],L,mt);else L.texture.mipmaps.length>0?he(w.__webglFramebuffer[0],L,0):he(w.__webglFramebuffer,L,0);else if(J){w.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[mt]),w.__webglDepthbuffer[mt]===void 0)w.__webglDepthbuffer[mt]=i.createRenderbuffer(),Ie(w.__webglDepthbuffer[mt],L,!1);else{const ct=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=w.__webglDepthbuffer[mt];i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,xt)}}else if(L.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Ie(w.__webglDepthbuffer,L,!1);else{const ct=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,xt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function We(L,w,J){const mt=n.get(L);w!==void 0&&re(mt.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&Se(L)}function ze(L){const w=L.texture,J=n.get(L),mt=n.get(w);L.addEventListener("dispose",O),R(L);const ct=L.textures,xt=L.isWebGLCubeRenderTarget===!0,P=ct.length>1;if(P||(mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture()),mt.__version=w.version,a.memory.textures++),xt){J.__webglFramebuffer=[];for(let N=0;N<6;N++)if(w.mipmaps.length>0){J.__webglFramebuffer[N]=[];for(let U=0;U<w.mipmaps.length;U++)J.__webglFramebuffer[N][U]=i.createFramebuffer()}else J.__webglFramebuffer[N]=i.createFramebuffer()}else{if(w.mipmaps.length>0){J.__webglFramebuffer=[];for(let N=0;N<w.mipmaps.length;N++)J.__webglFramebuffer[N]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(P)for(let N=0,U=ct.length;N<U;N++){const W=n.get(ct[N]);W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&Mt(L)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let N=0;N<ct.length;N++){const U=ct[N];J.__webglColorRenderbuffer[N]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[N]);const W=r.convert(U.format,U.colorSpace),C=r.convert(U.type),K=E(U.internalFormat,W,C,U.normalized,U.colorSpace,L.isXRRenderTarget===!0),X=le(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,K,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,J.__webglColorRenderbuffer[N])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(J.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xt){e.bindTexture(i.TEXTURE_CUBE_MAP,mt.__webglTexture),gt(i.TEXTURE_CUBE_MAP,w);for(let N=0;N<6;N++)if(w.mipmaps.length>0)for(let U=0;U<w.mipmaps.length;U++)re(J.__webglFramebuffer[N][U],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+N,U);else re(J.__webglFramebuffer[N],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);M(w)?S(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(P){for(let N=0,U=ct.length;N<U;N++){const W=ct[N],C=n.get(W);let K=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(K=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,C.__webglTexture),gt(K,W),re(J.__webglFramebuffer,L,W,i.COLOR_ATTACHMENT0+N,K,0),M(W)&&S(K)}e.unbindTexture()}else{let N=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(N=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(N,mt.__webglTexture),gt(N,w),w.mipmaps.length>0)for(let U=0;U<w.mipmaps.length;U++)re(J.__webglFramebuffer[U],L,w,i.COLOR_ATTACHMENT0,N,U);else re(J.__webglFramebuffer,L,w,i.COLOR_ATTACHMENT0,N,0);M(w)?S(N):w.mipmaps.length>0&&i.texParameteri(N,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}L.depthBuffer&&Se(L)}function V(L){const w=L.textures;for(let J=0,mt=w.length;J<mt;J++){const ct=w[J];if(M(ct)&&ct.mipmapsAutoUpdate===!0){const xt=y(L),P=n.get(ct).__webglTexture;e.bindTexture(xt,P),S(xt),e.unbindTexture()}}}const Xe=[];function de(L){if(L.samples>0){if(Mt(L)===!1){const w=L.textures,J=L.width,mt=L.height;let ct=i.COLOR_BUFFER_BIT;const xt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=n.get(L),N=w.length>1;if(N)for(let W=0;W<w.length;W++)e.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,P.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,P.__webglFramebuffer);for(let W=0;W<w.length;W++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),N){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,P.__webglColorRenderbuffer[W]);const C=n.get(w[W]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,J,mt,0,0,J,mt,ct,i.NEAREST),l===!0&&(Xe.length=0,Xe.push(i.COLOR_ATTACHMENT0+W),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Xe.push(xt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),N)for(let W=0;W<w.length;W++){e.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,P.__webglColorRenderbuffer[W]);const C=n.get(w[W]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.TEXTURE_2D,C,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,P.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){const w=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function le(L){return Math.min(s.maxSamples,L.samples)}function Mt(L){const w=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ve(L){const w=a.render.frame;h.get(L)!==w&&(h.set(L,w),L.update())}function It(L,w){const J=L.colorSpace,mt=L.format,ct=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==ir&&J!==Kn&&(Jt.getTransfer(J)===ae?(mt!==hn||ct!==je)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",J)),w}function Ft(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=vt,this.resetTextureUnits=G,this.getTextureUnits=Q,this.setTextureUnits=Y,this.setTexture2D=lt,this.setTexture2DArray=ft,this.setTexture3D=dt,this.setTextureCube=pt,this.rebindTextures=We,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Mt,this.dispose=Z}function Jg(i,t){function e(n,s=Kn){let r;const a=Jt.getTransfer(s);if(n===je)return i.UNSIGNED_BYTE;if(n===Sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ol)return i.BYTE;if(n===zl)return i.SHORT;if(n===ls)return i.UNSIGNED_SHORT;if(n===Ma)return i.INT;if(n===bn)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===cn)return i.HALF_FLOAT;if(n===Gl)return i.ALPHA;if(n===Hl)return i.RGB;if(n===hn)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===Yn)return i.DEPTH_STENCIL;if(n===ba)return i.RED;if(n===Ea)return i.RED_INTEGER;if(n===$n)return i.RG;if(n===wa)return i.RG_INTEGER;if(n===Ta)return i.RGBA_INTEGER;if(n===Zs||n===Js||n===Qs||n===js)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Da||n===Ia||n===Na||n===Ua||n===tr||n===Fa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===La||n===Da)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ia)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Na)return r.COMPRESSED_R11_EAC;if(n===Ua)return r.COMPRESSED_SIGNED_R11_EAC;if(n===tr)return r.COMPRESSED_RG11_EAC;if(n===Fa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oa||n===za||n===Ba||n===ka||n===Ga||n===Ha||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Ka||n===Za)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ba)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ka)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Va)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ya)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ja||n===Qa||n===ja)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ja)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===to||n===eo||n===er||n===no)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===to)return r.COMPRESSED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===er)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ai?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Qg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jg=`
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

}`;class t_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new wc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new kn({vertexShader:Qg,fragmentShader:jg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e_ extends Zn{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,m=null;const x=typeof XRWebGLBinding<"u",p=new t_,g={},_=e.getContextAttributes();let M=null,S=null;const y=[],E=[],v=new Ut;let b=null,R=null;const A=new _n;A.viewport=new ge;const D=new _n;D.viewport=new ge;const O=[A,D],z=new Xd;let I=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let lt=y[j];return lt===void 0&&(lt=new mo,y[j]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(j){let lt=y[j];return lt===void 0&&(lt=new mo,y[j]=lt),lt.getGripSpace()},this.getHand=function(j){let lt=y[j];return lt===void 0&&(lt=new mo,y[j]=lt),lt.getHandSpace()};function H(j){const lt=E.indexOf(j.inputSource);if(lt===-1)return;const ft=y[lt];ft!==void 0&&(ft.update(j.inputSource,j.frame,c||a),ft.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",k);for(let j=0;j<y.length;j++){const lt=E[j];lt!==null&&(E[j]=null,y[j].disconnect(lt))}I=null,Z=null,p.reset();for(const j in g)delete g[j];if(t.setRenderTarget(M),u=null,f=null,d=null,s=null,S=null,vt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(v.width,v.height,!1),R!==null){const j=R.camera;j.fov=R.fov,j.zoom=R.zoom,j.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",q),s.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,dt=null,pt=null;_.depth&&(pt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=_.stencil?Yn:qn,dt=_.stencil?Ai:bn);const ht={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(ht),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new En(f.textureWidth,f.textureHeight,{format:hn,type:je,depthTexture:new Hi(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const ft={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new En(u.framebufferWidth,u.framebufferHeight,{format:hn,type:je,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),vt.setContext(s),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function k(j){for(let lt=0;lt<j.removed.length;lt++){const ft=j.removed[lt],dt=E.indexOf(ft);dt>=0&&(E[dt]=null,y[dt].disconnect(ft))}for(let lt=0;lt<j.added.length;lt++){const ft=j.added[lt];let dt=E.indexOf(ft);if(dt===-1){for(let ht=0;ht<y.length;ht++)if(ht>=E.length){E.push(ft),dt=ht;break}else if(E[ht]===null){E[ht]=ft,dt=ht;break}if(dt===-1)break}const pt=y[dt];pt&&pt.connect(ft)}}function F(j,lt){lt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(lt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let lt=j.near,ft=j.far;p.texture!==null&&(p.depthNear>0&&(lt=p.depthNear),p.depthFar>0&&(ft=p.depthFar)),z.near=D.near=A.near=lt,z.far=D.far=A.far=ft,(I!==z.near||Z!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),I=z.near,Z=z.far),z.layers.mask=j.layers.mask|6,A.layers.mask=z.layers.mask&-5,D.layers.mask=z.layers.mask&-3;const dt=j.parent,pt=z.cameras;F(z,dt);for(let ht=0;ht<pt.length;ht++)F(pt[ht],dt);z.projectionMatrix.copy(A.projectionMatrix),z.projectionMatrixInverse.copy(A.projectionMatrixInverse),R===null&&j.isPerspectiveCamera&&(R={camera:j,fov:j.fov,zoom:j.zoom}),G(j,z,dt)};function G(j,lt,ft){ft===null?j.matrix.copy(lt.matrixWorld):(j.matrix.copy(ft.matrixWorld),j.matrix.invert(),j.matrix.multiply(lt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(lt.projectionMatrix),j.projectionMatrixInverse.copy(lt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=fs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(j){return g[j]};let Q=null;function Y(j,lt){if(h=lt.getViewerPose(c||a),m=lt,h!==null){const ft=h.views;u!==null&&(t.setRenderTargetFramebuffer(S,u.framebuffer),t.setRenderTarget(S));let dt=!1;ft.length!==z.cameras.length&&(z.cameras.length=0,dt=!0);for(let it=0;it<ft.length;it++){const gt=ft[it];let At=null;if(u!==null)At=u.getViewport(gt);else{const Vt=d.getViewSubImage(f,gt);At=Vt.viewport,it===0&&(t.setRenderTargetTextures(S,Vt.colorTexture,Vt.depthStencilTexture),t.setRenderTarget(S))}let Ot=O[it];Ot===void 0&&(Ot=new _n,Ot.layers.enable(it),Ot.viewport=new ge,O[it]=Ot),Ot.matrix.fromArray(gt.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(gt.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(At.x,At.y,At.width,At.height),it===0&&(z.matrix.copy(Ot.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),dt===!0&&z.cameras.push(Ot)}const pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const it=d.getDepthInformation(ft[0]);it&&it.isValid&&it.texture&&p.init(it,s.renderState)}if(pt&&pt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let it=0;it<ft.length;it++){const gt=ft[it].camera;if(gt){let At=g[gt];At||(At=new wc,g[gt]=At);const Ot=d.getCameraImage(gt);At.sourceTexture=Ot}}}}for(let ft=0;ft<y.length;ft++){const dt=E[ft],pt=y[ft];dt!==null&&pt!==void 0&&pt.update(dt,lt,c||a)}Q&&Q(j,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),m=null}const vt=new Kc;vt.setAnimationLoop(Y),this.setAnimationLoop=function(j){Q=j},this.dispose=function(){}}}const n_=new ie,Th=new Ht;Th.set(-1,0,0,0,1,0,0,0,1);function i_(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Nc(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,_,M,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&u(p,g,S)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,_,M):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===$e&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===$e&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const _=t.get(g),M=_.envMap,S=_.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(n_.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Th),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,_,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=M*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function u(p,g,_){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$e&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){const _=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function s_(i,t,e,n){let s={},r={};function a(_,M){const S=M.program;n.uniformBlockBinding(_,S,s[_.id])}function o(_,M){let S=s[_.id];S===void 0&&(m(_),S=l(_),s[_.id]=S,_.addEventListener("dispose",p));const y=M.program;n.updateUBOMapping(_,y);const E=t.render.frame;r[_.id]!==E&&(c(_),r[_.id]=E)}function l(_){const M=i.createBuffer(),S=_.__size,y=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,S,y),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(_){const M=s[_.id],S=_.uniforms,y=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,v=S.length;E<v;E++){const b=S[E];if(Array.isArray(b))for(let R=0,A=b.length;R<A;R++)h(b[R],E,R,y);else h(b,E,0,y)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,M,S,y){if(f(_,M,S,y)===!0){const E=_.__offset,v=_.value;if(Array.isArray(v)){let b=0;for(let R=0;R<v.length;R++){const A=v[R],D=x(A,!0);d(A,_.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,_.__data)}}function d(_,M,S){typeof _=="number"||typeof _=="boolean"?M[S]=_:_.isMatrix3?(M[S]=_.elements[0],M[S+1]=_.elements[1],M[S+2]=_.elements[2],M[S+3]=0,M[S+4]=_.elements[3],M[S+5]=_.elements[4],M[S+6]=_.elements[5],M[S+7]=0,M[S+8]=_.elements[6],M[S+9]=_.elements[7],M[S+10]=_.elements[8],M[S+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-S),S):_.toArray(M,S)}function f(_,M,S,y){const E=_.value,v=M+"_"+S;if(Array.isArray(E)){y[v]===void 0&&(y[v]=[]);const b=y[v];let R=!1;for(let A=0;A<E.length;A++)u(E[A],b,A)===!0&&(R=!0);return R}return u(E,y,v)}function u(_,M,S){if(M[S]===void 0)return typeof _=="number"||typeof _=="boolean"?M[S]=_:ArrayBuffer.isView(_)?M[S]=_.slice():M[S]=_.clone(),!0;{const y=M[S];if(typeof _=="number"||typeof _=="boolean"){if(y!==_)return M[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(y.equals(_)===!1)return y.copy(_),!0}}return!1}function m(_){const M=_.uniforms;let S=0;const y=16;for(let v=0,b=M.length;v<b;v++){const R=Array.isArray(M[v])?M[v]:[M[v]];for(let A=0,D=R.length;A<D;A++){const O=R[A],z=Array.isArray(O.value)?O.value:[O.value],I=Array.isArray(M[v])||Array.isArray(O.value);let Z=S;for(let q=0,k=z.length;q<k;q++){const F=z[q],G=x(F,I),Q=S%y,Y=Q%G.boundary,vt=Q+Y;S+=Y,vt!==0&&y-vt<G.storage&&(S+=y-vt),q===0&&(Z=S),S+=G.storage}const H=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new H((S-Z)/Float32Array.BYTES_PER_ELEMENT),O.__offset=Z}}const E=S%y;return E>0&&(S+=y-E),_.__size=S,_.__cache={},this}function x(_,M){const S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=16,S.storage=48):_.isMatrix4?(S.boundary=16,S.storage=64):_.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(_){const M=_.target;M.removeEventListener("dispose",p),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(const _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:g}}const r_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Cn=null;function a_(){return Cn===null&&(Cn=new vs(r_,16,16,$n,cn),Cn.name="DFG_LUT",Cn.minFilter=ke,Cn.magFilter=ke,Cn.wrapS=on,Cn.wrapT=on,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}class o_{constructor(t={}){const{canvas:e=bf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=je}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const x=u,p=new Set([Ta,wa,Ea]),g=new Set([je,bn,ls,Ai,Sa,ya]),_=new Uint32Array(4),M=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let y=null,E=null;const v=[],b=[];let R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let D=!1,O=null,z=null,I=null,Z=null;this._outputColorSpace=be;let H=0,q=0,k=null,F=-1,G=null;const Q=new ge,Y=new ge;let vt=null;const j=new Dt(0);let lt=0,ft=e.width,dt=e.height,pt=1,ht=null,kt=null;const it=new ge(0,0,ft,dt),gt=new ge(0,0,ft,dt);let At=!1;const Ot=new ys,Vt=new Lo;let oe=!1,Ve=!1;const re=new ie,Ie=new $,he=new ge,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function ze(){return k===null?pt:1}let V=n;function Xe(T,B){return e.getContext(T,B)}let de,le,Mt,ve,It,Ft,L,w,J,mt,ct,xt,P,N,U,W,C,K,X,rt,at,ut,Tt;try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ra}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),V===null){const B="webgl2";if(V=Xe(B,T),V===null)throw Xe(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(T){throw e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),te("WebGLRenderer: "+T.message),T}function Wt(){de=new h0(V),de.init(),at=new Jg(V,de),le=new jm(V,de,t,at),Mt=new Kg(V,de),le.reversedDepthBuffer&&f&&Mt.buffers.depth.setReversed(!0),z=V.createFramebuffer(),I=V.createFramebuffer(),Z=V.createFramebuffer(),ve=new d0(V),It=new Ug,Ft=new Zg(V,de,Mt,It,le,at,ve),L=new c0(A),w=new Kd(V),ut=new Jm(V,w),J=new u0(V,w,ve,ut),mt=new m0(V,J,w,ut,ve),K=new p0(V,le,Ft),U=new t0(It),ct=new Ng(A,L,de,le,ut,U),xt=new i_(A,It),P=new Og,N=new Vg(de),C=new Zm(A,L,Mt,mt,m,l),W=new $g(A,mt,le),Tt=new s_(V,ve,le,Mt),X=new Qm(V,de,ve),rt=new f0(V,de,ve),ve.programs=ct.programs,A.capabilities=le,A.extensions=de,A.properties=It,A.renderLists=P,A.shadowMap=W,A.state=Mt,A.info=ve}x!==je&&(R=new _0(x,e.width,e.height,o,s,r));const _t=new e_(A,V);this.xr=_t,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=de.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=de.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(T){T!==void 0&&(pt=T,this.setSize(ft,dt,!1))},this.getSize=function(T){return T.set(ft,dt)},this.setSize=function(T,B,st=!0){if(_t.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}ft=T,dt=B,e.width=Math.floor(T*pt),e.height=Math.floor(B*pt),st===!0&&(e.style.width=T+"px",e.style.height=B+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(ft*pt,dt*pt).floor()},this.setDrawingBufferSize=function(T,B,st){ft=T,dt=B,pt=st,e.width=Math.floor(T*st),e.height=Math.floor(B*st),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(x===je){te("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Q)},this.getViewport=function(T){return T.copy(it)},this.setViewport=function(T,B,st,tt){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,B,st,tt),Mt.viewport(Q.copy(it).multiplyScalar(ze()).round())},this.getScissor=function(T){return T.copy(gt)},this.setScissor=function(T,B,st,tt){T.isVector4?gt.set(T.x,T.y,T.z,T.w):gt.set(T,B,st,tt),Mt.scissor(Y.copy(gt).multiplyScalar(ze()).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(T){Mt.setScissorTest(At=T)},this.setOpaqueSort=function(T){ht=T},this.setTransparentSort=function(T){kt=T},this.getClearColor=function(T){return T.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,st=!0){let tt=0;if(T){let et=!1;if(k!==null){const yt=k.texture.format;et=p.has(yt)}if(et){const yt=k.texture.type,Rt=g.has(yt),St=C.getClearColor(),wt=C.getClearAlpha(),Lt=St.r,qt=St.g,Kt=St.b;Rt?(_[0]=Lt,_[1]=qt,_[2]=Kt,_[3]=wt,V.clearBufferuiv(V.COLOR,0,_)):(M[0]=Lt,M[1]=qt,M[2]=Kt,M[3]=wt,V.clearBufferiv(V.COLOR,0,M))}else tt|=V.COLOR_BUFFER_BIT}B&&(tt|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(tt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&V.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),O=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),C.dispose(),P.dispose(),N.dispose(),Ft.dispose(),It.dispose(),L.dispose(),mt.dispose(),J.dispose(),ut.dispose(),Tt.dispose(),ct.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",Lu),_t.removeEventListener("sessionend",Du),Mi.stop()};function Nt(T){T.preventDefault(),$l("WebGLRenderer: Context Lost."),D=!0}function Xt(){$l("WebGLRenderer: Context Restored."),D=!1;const T=ve.autoReset,B=W.enabled,st=W.autoUpdate,tt=W.needsUpdate,et=W.type;Wt(),ve.autoReset=T,W.enabled=B,W.autoUpdate=st,W.needsUpdate=tt,W.type=et}function Et(T){te("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ce(T){const B=T.target;B.removeEventListener("dispose",ce),Ne(B)}function Ne(T){ci(T),It.remove(T)}function ci(T){const B=It.get(T).programs;B!==void 0&&(B.forEach(function(st){ct.releaseProgram(st)}),T.isShaderMaterial&&ct.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,st,tt,et,yt){B===null&&(B=Se);const Rt=et.isMesh&&et.matrixWorld.determinantAffine()<0,St=gv(T,B,st,tt,et);Mt.setMaterial(tt,Rt);let wt=st.index,Lt=1;if(tt.wireframe===!0){if(wt=J.getWireframeAttribute(st),wt===void 0)return;Lt=2}const qt=st.drawRange,Kt=st.attributes.position;let Ct=qt.start*Lt,Zt=(qt.start+qt.count)*Lt;yt!==null&&(Ct=Math.max(Ct,yt.start*Lt),Zt=Math.min(Zt,(yt.start+yt.count)*Lt)),wt!==null?(Ct=Math.max(Ct,0),Zt=Math.min(Zt,wt.count)):Kt!=null&&(Ct=Math.max(Ct,0),Zt=Math.min(Zt,Kt.count));const Te=Zt-Ct;if(Te<0||Te===1/0)return;ut.setup(et,tt,St,st,wt);let pe,ue=X;if(wt!==null&&(pe=w.get(wt),ue=rt,ue.setIndex(pe)),et.isMesh)tt.wireframe===!0?(Mt.setLineWidth(tt.wireframeLinewidth*ze()),ue.setMode(V.LINES)):ue.setMode(V.TRIANGLES);else if(et.isLine){let qe=tt.linewidth;qe===void 0&&(qe=1),Mt.setLineWidth(qe*ze()),et.isLineSegments?ue.setMode(V.LINES):et.isLineLoop?ue.setMode(V.LINE_LOOP):ue.setMode(V.LINE_STRIP)}else et.isPoints?ue.setMode(V.POINTS):et.isSprite&&ue.setMode(V.TRIANGLES);if(et.isBatchedMesh)if(de.get("WEBGL_multi_draw"))ue.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const qe=et._multiDrawStarts,Pt=et._multiDrawCounts,Qe=et._multiDrawCount,ne=wt?w.get(wt).bytesPerElement:1,Si=It.get(tt).currentProgram.getUniforms();for(let Ye=0;Ye<Qe;Ye++)Si.setValue(V,"_gl_DrawID",Ye),ue.render(qe[Ye]/ne,Pt[Ye])}else if(et.isInstancedMesh)ue.renderInstances(Ct,Te,et.count);else if(st.isInstancedBufferGeometry){const qe=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Pt=Math.min(st.instanceCount,qe);ue.renderInstances(Ct,Te,Pt)}else ue.render(Ct,Te)};function Pu(T,B,st,tt){O!==null&&T.isNodeMaterial&&O.setObject(tt,T),oe===!0&&U.setState(T,st,!1),T.transparent===!0&&T.side===ye&&T.forceSinglePass===!1?(T.side=$e,T.needsUpdate=!0,Ys(T,B,tt),T.side=Xn,T.needsUpdate=!0,Ys(T,B,tt),T.side=ye):Ys(T,B,tt)}this.compile=function(T,B,st=null){st===null&&(st=T),O!==null&&O.renderStart(T,B,st),E=N.get(st),E.init(B),b.push(E),st.traverseVisible(function(et){et.isLight&&et.layers.test(B.layers)&&(E.pushLight(et),et.castShadow&&E.pushShadow(et))}),T!==st&&T.traverseVisible(function(et){et.isLight&&et.layers.test(B.layers)&&(E.pushLight(et),et.castShadow&&E.pushShadow(et))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),Ve=this.localClippingEnabled,oe=U.init(this.clippingPlanes,Ve),oe===!0&&U.setGlobalState(this.clippingPlanes,B),O!==null&&W.render(E.state.shadowsArray,st,B);const tt=new Set;return T.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const yt=et.material;if(yt)if(Array.isArray(yt))for(let Rt=0;Rt<yt.length;Rt++){const St=yt[Rt];Pu(St,st,B,et),tt.add(St)}else Pu(yt,st,B,et),tt.add(yt)}),E=b.pop(),O!==null&&O.renderEnd(),tt},this.compileAsync=function(T,B,st=null){const tt=this.compile(T,B,st);return new Promise(et=>{function yt(){if(tt.forEach(function(Rt){const wt=It.get(Rt).currentProgram;(wt===void 0||wt.isReady())&&tt.delete(Rt)}),tt.size===0){et(T);return}setTimeout(yt,10)}de.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let bl=null;function pv(T){bl&&bl(T)}function Lu(){Mi.stop()}function Du(){Mi.start()}const Mi=new Kc;Mi.setAnimationLoop(pv),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(T){bl=T,_t.setAnimationLoop(T),T===null?Mi.stop():Mi.start()},_t.addEventListener("sessionstart",Lu),_t.addEventListener("sessionend",Du),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(T,B);const st=_t.enabled===!0&&_t.isPresenting===!0,tt=R!==null&&(k===null||st)&&R.begin(A,k);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(B),B=_t.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,B,k),E=N.get(T,b.length),E.init(B),E.state.textureUnits=Ft.getTextureUnits(),b.push(E),re.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?Vt.setFromArrayCamera(B):Ot.setFromProjectionMatrix(re,un,B.reversedDepth),Ve=this.localClippingEnabled,oe=U.init(this.clippingPlanes,Ve),y=P.get(T,v.length),y.init(),v.push(y),this.info.render.frame++,_t.enabled===!0&&_t.isPresenting===!0){const Rt=A.xr.getDepthSensingMesh();Rt!==null&&El(Rt,B,-1/0,A.sortObjects)}El(T,B,0,A.sortObjects),y.finish(),O!==null&&O.updateLights(E.state.lightsArray),A.sortObjects===!0&&y.sort(ht,kt),We=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,We&&C.addToRenderList(y,T),this.info.autoReset===!0&&this.info.reset(),oe===!0&&U.beginShadows();const et=E.state.shadowsArray;if(W.render(et,T,B),oe===!0&&U.endShadows(),(tt&&R.hasRenderPass())===!1){const Rt=y.opaque,St=y.transmissive;if(E.setupLights(),B.isArrayCamera){const wt=B.cameras;if(St.length>0)for(let Lt=0,qt=wt.length;Lt<qt;Lt++){const Kt=wt[Lt];Nu(Rt,St,T,Kt)}We&&C.render(T);for(let Lt=0,qt=wt.length;Lt<qt;Lt++){const Kt=wt[Lt];Iu(y,T,Kt,Kt.viewport)}}else St.length>0&&Nu(Rt,St,T,B),We&&C.render(T),Iu(y,T,B)}k!==null&&q===0&&(Ft.updateMultisampleRenderTarget(k),Ft.updateRenderTargetMipmap(k)),tt&&R.end(A),T.isScene===!0&&T.onAfterRender(A,T,B),ut.resetDefaultState(),F=-1,G=null,b.pop(),b.length>0?(E=b[b.length-1],Ft.setTextureUnits(E.state.textureUnits),oe===!0&&U.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,v.pop(),v.length>0?y=v[v.length-1]:y=null,O!==null&&O.renderEnd()};function El(T,B,st,tt){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)st=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){const Rt=B.isArrayCamera?Vt:Ot;if(!T.frustumCulled||T.intersectsFrustum(Rt)){tt&&he.setFromMatrixPosition(T.matrixWorld).applyMatrix4(re);const St=mt.update(T),wt=T.material;wt.visible&&y.push(T,St,wt,st,he.z,null,B)}}else if(T.isMesh||T.isLine||T.isPoints){const Rt=B.isArrayCamera?Vt:Ot;if(!T.frustumCulled||T.intersectsFrustum(Rt)){const St=mt.update(T),wt=T.material;if(tt&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),he.copy(T.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),he.copy(St.boundingSphere.center)),he.applyMatrix4(T.matrixWorld).applyMatrix4(re)),Array.isArray(wt)){const Lt=St.groups;for(let qt=0,Kt=Lt.length;qt<Kt;qt++){const Ct=Lt[qt],Zt=wt[Ct.materialIndex];Zt&&Zt.visible&&y.push(T,St,Zt,st,he.z,Ct,B)}}else wt.visible&&y.push(T,St,wt,st,he.z,null,B)}}}const yt=T.children;for(let Rt=0,St=yt.length;Rt<St;Rt++)El(yt[Rt],B,st,tt)}function Iu(T,B,st,tt){const{opaque:et,transmissive:yt,transparent:Rt}=T;E.setupLightsView(st),oe===!0&&U.setGlobalState(A.clippingPlanes,st),tt&&Mt.viewport(Q.copy(tt)),et.length>0&&ia(et,B,st),yt.length>0&&ia(yt,B,st),Rt.length>0&&ia(Rt,B,st),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Nu(T,B,st,tt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[tt.id]===void 0){const Ct=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[tt.id]=new En(1,1,{generateMipmaps:!0,type:Ct?cn:je,minFilter:yn,samples:Math.max(4,le.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}const yt=E.state.transmissionRenderTarget[tt.id],Rt=tt.viewport||Q;yt.setSize(Rt.z*A.transmissionResolutionScale,Rt.w*A.transmissionResolutionScale);const St=A.getRenderTarget(),wt=A.getActiveCubeFace(),Lt=A.getActiveMipmapLevel();A.setRenderTarget(yt),A.getClearColor(j),lt=A.getClearAlpha(),lt<1&&A.setClearColor(16777215,.5),A.clear(),We&&C.render(st);const qt=A.toneMapping;A.toneMapping=Dn;const Kt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),E.setupLightsView(tt),oe===!0&&U.setGlobalState(A.clippingPlanes,tt),ia(T,st,tt),Ft.updateMultisampleRenderTarget(yt),Ft.updateRenderTargetMipmap(yt),de.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let Zt=0,Te=B.length;Zt<Te;Zt++){const pe=B[Zt],{object:ue,geometry:qe,material:Pt,group:Qe}=pe;if(Pt.side===ye&&ue.layers.test(tt.layers)){const ne=Pt.side;Pt.side=$e,Pt.needsUpdate=!0,Uu(ue,st,tt,qe,Pt,Qe),Pt.side=ne,Pt.needsUpdate=!0,Ct=!0}}Ct===!0&&(Ft.updateMultisampleRenderTarget(yt),Ft.updateRenderTargetMipmap(yt))}A.setRenderTarget(St,wt,Lt),A.setClearColor(j,lt),Kt!==void 0&&(tt.viewport=Kt),A.toneMapping=qt}function ia(T,B,st){const tt=B.isScene===!0?B.overrideMaterial:null;for(let et=0,yt=T.length;et<yt;et++){const Rt=T[et],{object:St,geometry:wt,group:Lt}=Rt;let qt=Rt.material;qt.allowOverride===!0&&tt!==null&&(qt=tt),St.layers.test(st.layers)&&Uu(St,B,st,wt,qt,Lt)}}function Uu(T,B,st,tt,et,yt){O!==null&&et.isNodeMaterial&&O.setObject(T,et),T.onBeforeRender(A,B,st,tt,et,yt),T.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),et.onBeforeRender(A,B,st,tt,T,yt),et.transparent===!0&&et.side===ye&&et.forceSinglePass===!1?(et.side=$e,et.needsUpdate=!0,A.renderBufferDirect(st,B,tt,et,T,yt),et.side=Xn,et.needsUpdate=!0,A.renderBufferDirect(st,B,tt,et,T,yt),et.side=ye):A.renderBufferDirect(st,B,tt,et,T,yt),T.onAfterRender(A,B,st,tt,et,yt)}function Fu(T){let B=0;for(const st of T)st.texture!==null&&B++;return B}function Ys(T,B,st){B.isScene!==!0&&(B=Se);const tt=It.get(T),et=E.state.lights,yt=E.state.shadowsArray,Rt=et.state.version,St=ct.getParameters(T,et.state,yt,B,st,E.state.lightProbeGridArray),wt=ct.getProgramCacheKey(St);let Lt=tt.programs;tt.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,tt.fog=B.fog;const qt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;tt.envMap=L.get(T.envMap||tt.environment,qt),tt.envMapRotation=tt.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Lt===void 0&&(T.addEventListener("dispose",ce),Lt=new Map,tt.programs=Lt,tt.programVariants=new Map);let Kt=Lt.get(wt);if(Kt!==void 0){if(tt.currentProgram===Kt&&tt.lightsStateVersion===Rt)return zu(T,St),Kt}else St.uniforms=ct.getUniforms(T),O!==null&&T.isNodeMaterial&&O.build(T,st,St),T.onBeforeCompile(St,A),Kt=ct.acquireProgram(St,wt),Lt.set(wt,Kt),tt.uniforms=St.uniforms;const Ct=tt.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ct.clippingPlanes=U.uniform),zu(T,St),tt.needsLights=xv(T),tt.lightsStateVersion=Rt,tt.needsLights&&(Ct.ambientLightColor.value=et.state.ambient,Ct.lightProbe.value=et.state.probe,Ct.sunLights.value=et.state.sun,Ct.sunLightShadows.value=et.state.sunShadow,Ct.directionalLights.value=et.state.directional,Ct.directionalLightShadows.value=et.state.directionalShadow,Ct.spotLights.value=et.state.spot,Ct.spotLightShadows.value=et.state.spotShadow,Ct.rectAreaLights.value=et.state.rectArea,Ct.ltc_1.value=et.state.rectAreaLTC1,Ct.ltc_2.value=et.state.rectAreaLTC2,Ct.pointLights.value=et.state.point,Ct.pointLightShadows.value=et.state.pointShadow,Ct.hemisphereLights.value=et.state.hemi,Ct.sunShadowMatrix.value=et.state.sunShadowMatrix,Ct.sunShadowCascade.value=et.state.sunShadowCascade,Ct.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Ct.spotLightMatrix.value=et.state.spotLightMatrix,Ct.spotLightMap.value=et.state.spotLightMap,Ct.pointShadowMatrix.value=et.state.pointShadowMatrix),tt.numLightProbeGrids=Fu(E.state.lightProbeGridArray),tt.currentProgram=Kt,tt.uniformsList=null,Kt}function mv(T,B,st,tt,et){const yt=It.get(T),Rt=yt.currentProgram.id+","+tt+","+et;let St=yt.programVariants.get(Rt);return St===void 0?(St=Ys(T,B,st),yt.programVariants.set(Rt,St)):(yt.currentProgram=St,yt.uniformsList=null,yt.outputColorSpace=tt,yt.toneMapping=et),St}function Ou(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Nr.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function zu(T,B){const st=It.get(T);st.outputColorSpace=B.outputColorSpace,st.batching=B.batching,st.batchingColor=B.batchingColor,st.instancing=B.instancing,st.instancingColor=B.instancingColor,st.instancingMorph=B.instancingMorph,st.skinning=B.skinning,st.morphTargets=B.morphTargets,st.morphNormals=B.morphNormals,st.morphColors=B.morphColors,st.morphTargetsCount=B.morphTargetsCount,st.numClippingPlanes=B.numClippingPlanes,st.numIntersection=B.numClipIntersection,st.vertexAlphas=B.vertexAlphas,st.vertexTangents=B.vertexTangents,st.toneMapping=B.toneMapping}function gv(T,B,st,tt,et){B.isScene!==!0&&(B=Se),Ft.resetTextureUnits();const yt=B.fog,Rt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?B.environment:null,St=k===null?A.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Jt.workingColorSpace,wt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,Lt=L.get(tt.envMap||Rt,wt),qt=tt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Kt=!!st.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Ct=!!st.morphAttributes.position,Zt=!!st.morphAttributes.normal,Te=!!st.morphAttributes.color;let pe=Dn;tt.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(pe=A.toneMapping);const ue=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,qe=ue!==void 0?ue.length:0,Pt=It.get(tt),Qe=E.state.lights;if(oe===!0&&(Ve===!0||T!==G)){const Me=T===G&&tt.id===F;U.setState(tt,T,Me)}let ne=!1,Si=!1;tt.version===Pt.__version?Pt.needsLights&&Pt.lightsStateVersion!==Qe.state.version||et.isBatchedMesh&&Pt.batching===!1||!et.isBatchedMesh&&Pt.batching===!0||et.isBatchedMesh&&Pt.batchingColor===!0&&et._colorsTexture===null||et.isBatchedMesh&&Pt.batchingColor===!1&&et._colorsTexture!==null||et.isInstancedMesh&&Pt.instancing===!1||!et.isInstancedMesh&&Pt.instancing===!0||et.isSkinnedMesh&&Pt.skinning===!1||!et.isSkinnedMesh&&Pt.skinning===!0||et.isInstancedMesh&&Pt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Pt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Pt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Pt.instancingMorph===!1&&et.morphTexture!==null||Pt.envMap!==Lt||tt.fog===!0&&Pt.fog!==yt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==U.numPlanes||Pt.numIntersection!==U.numIntersection)||Pt.vertexAlphas!==qt||Pt.vertexTangents!==Kt||Pt.morphTargets!==Ct||Pt.morphNormals!==Zt||Pt.morphColors!==Te||Pt.morphTargetsCount!==qe||Pt.numLightProbeGrids!==Fu(E.state.lightProbeGridArray)?ne=!0:(Pt.outputColorSpace!==St||Pt.toneMapping!==pe)&&(Si=!0):(ne=!0,Pt.__version=tt.version);let Ye=Pt.currentProgram;(ne===!0||Si===!0)&&(Ye=Si===!0?mv(tt,B,et,St,pe):Ys(tt,B,et),O&&tt.isNodeMaterial&&O.onUpdateProgram(tt,Ye,Pt));let sa=!1,hi=!1,yi=!1;const jt=Ye.getUniforms(),Be=Pt.uniforms;if(Mt.useProgram(Ye.program)&&(sa=!0,hi=!0,yi=!0),tt.id!==F&&(F=tt.id,hi=!0),sa||G!==T){Mt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),jt.setValue(V,"projectionMatrix",T.projectionMatrix),jt.setValue(V,"viewMatrix",T.matrixWorldInverse);const Ue=jt.map.cameraPosition;Ue!==void 0&&Ue.setValue(V,Ie.setFromMatrixPosition(T.matrixWorld)),le.logarithmicDepthBuffer&&jt.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&jt.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),G!==T&&(G=T,hi=!0,yi=!0)}if(Pt.needsLights&&(Qe.state.sunShadowMap.length>0&&jt.setValue(V,"sunShadowMap",Qe.state.sunShadowMap,Ft),Qe.state.directionalShadowMap.length>0&&jt.setValue(V,"directionalShadowMap",Qe.state.directionalShadowMap,Ft),Qe.state.spotShadowMap.length>0&&jt.setValue(V,"spotShadowMap",Qe.state.spotShadowMap,Ft),Qe.state.pointShadowMap.length>0&&jt.setValue(V,"pointShadowMap",Qe.state.pointShadowMap,Ft)),et.isSkinnedMesh){jt.setOptional(V,et,"bindMatrix"),jt.setOptional(V,et,"bindMatrixInverse");const Me=et.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),jt.setValue(V,"boneTexture",Me.boneTexture,Ft))}et.isBatchedMesh&&(jt.setOptional(V,et,"batchingTexture"),jt.setValue(V,"batchingTexture",et._matricesTexture,Ft),jt.setOptional(V,et,"batchingIdTexture"),jt.setValue(V,"batchingIdTexture",et._indirectTexture,Ft),jt.setOptional(V,et,"batchingColorTexture"),et._colorsTexture!==null&&jt.setValue(V,"batchingColorTexture",et._colorsTexture,Ft));const Mn=st.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&K.update(et,st,Ye),(hi||Pt.receiveShadow!==et.receiveShadow)&&(Pt.receiveShadow=et.receiveShadow,jt.setValue(V,"receiveShadow",et.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&B.environment!==null&&(Be.envMapIntensity.value=B.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=a_()),hi){if(jt.setValue(V,"toneMappingExposure",A.toneMappingExposure),Pt.needsLights&&_v(Be,yi),yt&&tt.fog===!0&&xt.refreshFogUniforms(Be,yt),xt.refreshMaterialUniforms(Be,tt,pt,dt,E.state.transmissionRenderTarget[T.id]),Pt.needsLights&&Pt.numLightProbeGrids>0){const Me=S;let Ue=0;for(const Vn of E.state.lightProbeGridArray)Vn.texture!==null&&(Me.textures[Ue]=Vn.texture,Me.min[Ue]=Vn.boundingBox.min,Me.max[Ue]=Vn.boundingBox.max,Me.resolution[Ue]=Vn.resolution,Ue++);for(const Vn in Me)Me[Vn].length=Ue;Be.probesSH.value=Me.textures,Be.probesMin.value=Me.min,Be.probesMax.value=Me.max,Be.probesResolution.value=Me.resolution}Nr.upload(V,Ou(Pt),Be,Ft)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Nr.upload(V,Ou(Pt),Be,Ft),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&jt.setValue(V,"center",et.center),jt.setValue(V,"modelViewMatrix",et.modelViewMatrix),jt.setValue(V,"normalMatrix",et.normalMatrix),jt.setValue(V,"modelMatrix",et.matrixWorld),tt.uniformsGroups!==void 0){const Me=tt.uniformsGroups;for(let Ue=0,Vn=Me.length;Ue<Vn;Ue++){const ku=Me[Ue];Tt.update(ku,Ye),Tt.bind(ku,Ye)}}return Ye}function _v(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.sunLights.needsUpdate=B,T.sunLightShadows.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function xv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(T,B,st){const tt=It.get(T);tt.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),It.get(T.texture).__webglTexture=B,It.get(T.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:st,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const st=It.get(T);st.__webglFramebuffer=B,st.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,st=0){k=T,H=B,q=st;let tt=null,et=!1,yt=!1;if(T){const St=It.get(T);if(St.__useDefaultFramebuffer!==void 0){Mt.bindFramebuffer(V.FRAMEBUFFER,St.__webglFramebuffer),Q.copy(T.viewport),Y.copy(T.scissor),vt=T.scissorTest,Mt.viewport(Q),Mt.scissor(Y),Mt.setScissorTest(vt),F=-1;return}else if(St.__webglFramebuffer===void 0)Ft.setupRenderTarget(T);else if(St.__hasExternalTextures)Ft.rebindTextures(T,It.get(T.texture).__webglTexture,It.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const qt=T.depthTexture;if(St.__boundDepthTexture!==qt){if(qt!==null&&It.has(qt)&&(T.width!==qt.image.width||T.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(T)}}const wt=T.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(yt=!0);const Lt=It.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Lt[B])?tt=Lt[B][st]:tt=Lt[B],et=!0):T.samples>0&&Ft.useMultisampledRTT(T)===!1?tt=It.get(T).__webglMultisampledFramebuffer:Array.isArray(Lt)?tt=Lt[st]:tt=Lt,Q.copy(T.viewport),Y.copy(T.scissor),vt=T.scissorTest}else Q.copy(it).multiplyScalar(pt).floor(),Y.copy(gt).multiplyScalar(pt).floor(),vt=At;if(st!==0&&(tt=z),Mt.bindFramebuffer(V.FRAMEBUFFER,tt)&&Mt.drawBuffers(T,tt),Mt.viewport(Q),Mt.scissor(Y),Mt.setScissorTest(vt),et){const St=It.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+B,St.__webglTexture,st)}else if(yt){const St=B;for(let wt=0;wt<T.textures.length;wt++){const Lt=It.get(T.textures[wt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+wt,Lt.__webglTexture,st,St)}}else if(T!==null&&st!==0){const St=It.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,St.__webglTexture,st)}F=-1};function Bu(T){const B=It.get(T);return(B.__readFormat!==T.format||B.__readType!==T.type)&&(B.__readFormat=T.format,B.__readType=T.type,B.__formatReadable=le.textureFormatReadable(T.format),B.__typeReadable=le.textureTypeReadable(T.type)),B}this.readRenderTargetPixels=function(T,B,st,tt,et,yt,Rt,St=0){if(!(T&&T.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=It.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(wt=wt[Rt],Array.isArray(wt)&&(wt=wt[0])),wt){Mt.bindFramebuffer(V.FRAMEBUFFER,wt);try{const Lt=T.textures[St],qt=Lt.format,Kt=Lt.type;T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+St);const Ct=Bu(Lt);if(Ct.__formatReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-tt&&st>=0&&st<=T.height-et&&V.readPixels(B,st,tt,et,at.convert(qt),at.convert(Kt),yt)}finally{const Lt=k!==null?It.get(k).__webglFramebuffer:null;Mt.bindFramebuffer(V.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(T,B,st,tt,et,yt,Rt,St=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=It.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(wt=wt[Rt],Array.isArray(wt)&&(wt=wt[0])),wt)if(B>=0&&B<=T.width-tt&&st>=0&&st<=T.height-et){Mt.bindFramebuffer(V.FRAMEBUFFER,wt);const Lt=T.textures[St],qt=Lt.format,Kt=Lt.type;T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+St);const Ct=Bu(Lt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Zt),V.bufferData(V.PIXEL_PACK_BUFFER,yt.byteLength,V.STREAM_READ),V.readPixels(B,st,tt,et,at.convert(qt),at.convert(Kt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const Te=k!==null?It.get(k).__webglFramebuffer:null;Mt.bindFramebuffer(V.FRAMEBUFFER,Te);const pe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Ef(V,pe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Zt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,yt),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Zt),V.deleteSync(pe),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,st=0){const tt=Math.pow(2,-st),et=Math.floor(T.image.width*tt),yt=Math.floor(T.image.height*tt),Rt=B!==null?B.x:0,St=B!==null?B.y:0;Ft.setTexture2D(T,0),V.copyTexSubImage2D(V.TEXTURE_2D,st,0,0,Rt,St,et,yt),Mt.unbindTexture()},this.copyTextureToTexture=function(T,B,st=null,tt=null,et=0,yt=0){let Rt,St,wt,Lt,qt,Kt,Ct,Zt,Te;const pe=T.isCompressedTexture?T.mipmaps[yt]:T.image;if(st!==null)Rt=st.max.x-st.min.x,St=st.max.y-st.min.y,wt=st.isBox3?st.max.z-st.min.z:1,Lt=st.min.x,qt=st.min.y,Kt=st.isBox3?st.min.z:0;else{const jt=Math.pow(2,-et);Rt=Math.floor(pe.width*jt),St=Math.floor(pe.height*jt),T.isDataArrayTexture?wt=pe.depth:T.isData3DTexture?wt=Math.floor(pe.depth*jt):wt=1,Lt=0,qt=0,Kt=0}tt!==null?(Ct=tt.x,Zt=tt.y,Te=tt.z):(Ct=0,Zt=0,Te=0);const ue=at.convert(B.format),qe=at.convert(B.type);let Pt;B.isData3DTexture?(Ft.setTexture3D(B,0),Pt=V.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ft.setTexture2DArray(B,0),Pt=V.TEXTURE_2D_ARRAY):(Ft.setTexture2D(B,0),Pt=V.TEXTURE_2D),Mt.activeTexture(V.TEXTURE0),Mt.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,B.flipY),Mt.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),Mt.pixelStorei(V.UNPACK_ALIGNMENT,B.unpackAlignment);const Qe=Mt.getParameter(V.UNPACK_ROW_LENGTH),ne=Mt.getParameter(V.UNPACK_IMAGE_HEIGHT),Si=Mt.getParameter(V.UNPACK_SKIP_PIXELS),Ye=Mt.getParameter(V.UNPACK_SKIP_ROWS),sa=Mt.getParameter(V.UNPACK_SKIP_IMAGES);Mt.pixelStorei(V.UNPACK_ROW_LENGTH,pe.width),Mt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,pe.height),Mt.pixelStorei(V.UNPACK_SKIP_PIXELS,Lt),Mt.pixelStorei(V.UNPACK_SKIP_ROWS,qt),Mt.pixelStorei(V.UNPACK_SKIP_IMAGES,Kt);const hi=T.isDataArrayTexture||T.isData3DTexture,yi=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const jt=It.get(T),Be=It.get(B),Mn=It.get(jt.__renderTarget),Me=It.get(Be.__renderTarget);Mt.bindFramebuffer(V.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Mt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ue=0;Ue<wt;Ue++)hi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,It.get(T).__webglTexture,et,Kt+Ue),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,It.get(B).__webglTexture,yt,Te+Ue)),V.blitFramebuffer(Lt,qt,Lt+Rt,qt+St,Ct,Zt,Ct+Rt,Zt+St,V.DEPTH_BUFFER_BIT,V.NEAREST);Mt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(et!==0||T.isRenderTargetTexture||It.has(T)){const jt=It.get(T),Be=It.get(B);Mt.bindFramebuffer(V.READ_FRAMEBUFFER,I),Mt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Z);for(let Mn=0;Mn<wt;Mn++)hi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,jt.__webglTexture,et,Kt+Mn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,jt.__webglTexture,et),yi?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Be.__webglTexture,yt,Te+Mn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Be.__webglTexture,yt),et!==0?V.blitFramebuffer(Lt,qt,Lt+Rt,qt+St,Ct,Zt,Ct+Rt,Zt+St,V.COLOR_BUFFER_BIT,V.NEAREST):yi?V.copyTexSubImage3D(Pt,yt,Ct,Zt,Te+Mn,Lt,qt,Rt,St):V.copyTexSubImage2D(Pt,yt,Ct,Zt,Lt,qt,Rt,St);Mt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else yi?T.isDataTexture||T.isData3DTexture?V.texSubImage3D(Pt,yt,Ct,Zt,Te,Rt,St,wt,ue,qe,pe.data):B.isCompressedArrayTexture?V.compressedTexSubImage3D(Pt,yt,Ct,Zt,Te,Rt,St,wt,ue,pe.data):V.texSubImage3D(Pt,yt,Ct,Zt,Te,Rt,St,wt,ue,qe,pe):T.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,yt,Ct,Zt,Rt,St,ue,qe,pe.data):T.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,yt,Ct,Zt,pe.width,pe.height,ue,pe.data):V.texSubImage2D(V.TEXTURE_2D,yt,Ct,Zt,Rt,St,ue,qe,pe);Mt.pixelStorei(V.UNPACK_ROW_LENGTH,Qe),Mt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ne),Mt.pixelStorei(V.UNPACK_SKIP_PIXELS,Si),Mt.pixelStorei(V.UNPACK_SKIP_ROWS,Ye),Mt.pixelStorei(V.UNPACK_SKIP_IMAGES,sa),yt===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&V.generateMipmap(Pt),Mt.unbindTexture()},this.initRenderTarget=function(T){It.get(T).__webglFramebuffer===void 0&&Ft.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ft.setTextureCube(T,0):T.isData3DTexture?Ft.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ft.setTexture2DArray(T,0):Ft.setTexture2D(T,0),Mt.unbindTexture()},this.resetState=function(){H=0,q=0,k=null,Mt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}const Fr=new Dt;function nt(i){return Fr.set(i),[Fr.r,Fr.g,Fr.b]}function Gt(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function Ki(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function Zi(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class _e{constructor(){ot(this,"pos",[]);ot(this,"nor",[]);ot(this,"col",[]);ot(this,"glo",[]);ot(this,"ox",0);ot(this,"oy",0);ot(this,"oz",0);ot(this,"c",1);ot(this,"s",0)}get vertexCount(){return this.pos.length/3}frame(t=0,e=0,n=0,s=0){return this.ox=t,this.oy=e,this.oz=n,this.c=Math.cos(s),this.s=Math.sin(s),this}wx(t,e){return this.ox+t*this.c+e*this.s}wz(t,e){return this.oz-t*this.s+e*this.c}tri(t,e,n,s,r,a,o,l,c,h,d=0){const f=this.wx(t,n),u=this.wz(t,n),m=this.oy+e,x=this.wx(s,a),p=this.wz(s,a),g=this.oy+r,_=this.wx(o,c),M=this.wz(o,c),S=this.oy+l,y=x-f,E=g-m,v=p-u,b=_-f,R=S-m,A=M-u;let D=E*A-v*R,O=v*b-y*A,z=y*R-E*b;const I=Math.hypot(D,O,z)||1;D/=I,O/=I,z/=I,this.pos.push(f,m,u,x,g,p,_,S,M),this.nor.push(D,O,z,D,O,z,D,O,z),this.col.push(h[0],h[1],h[2],h[0],h[1],h[2],h[0],h[1],h[2]),this.glo.push(d,d,d)}quad(t,e,n,s,r,a,o,l,c,h,d,f,u,m=0){this.tri(t,e,n,s,r,a,o,l,c,u,m),this.tri(t,e,n,o,l,c,h,d,f,u,m)}box(t,e,n,s,r,a,o,l=void 0,c=null,h=0){this.quad(t,e,a,s,e,a,s,r,a,t,r,a,o,h),this.quad(s,e,n,t,e,n,t,r,n,s,r,n,o,h),this.quad(s,e,a,s,e,n,s,r,n,s,r,a,o,h),this.quad(t,e,n,t,e,a,t,r,a,t,r,n,o,h),l!==null&&this.quad(t,r,a,s,r,a,s,r,n,t,r,n,l??o,h),c&&this.quad(t,e,n,s,e,n,s,e,a,t,e,a,c,h)}cyl(t,e,n,s,r,a,o,l,c=null,h=0){const d=e+a;for(let f=0;f<o;f++){const u=f/o*Math.PI*2,m=(f+1)/o*Math.PI*2,x=Math.cos(u),p=Math.sin(u),g=Math.cos(m),_=Math.sin(m);r>1e-4?(this.quad(t+x*s,e,n+p*s,t+x*r,d,n+p*r,t+g*r,d,n+_*r,t+g*s,e,n+_*s,l,h),c&&this.tri(t,d,n,t+g*r,d,n+_*r,t+x*r,d,n+p*r,c,h)):this.tri(t+x*s,e,n+p*s,t,d,n,t+g*s,e,n+_*s,l,h)}}blob(t,e,n,s,r,a,o,l,c,h,d=0){const f=h??c;for(let u=0;u<l;u++){const m=u/l*Math.PI,x=(u+1)/l*Math.PI,p=Math.cos(m),g=Math.cos(x),_=Math.sin(m),M=Math.sin(x),S=Ki(c,f,1-(u+.5)/l);for(let y=0;y<o;y++){const E=y/o*Math.PI*2,v=(y+1)/o*Math.PI*2,b=Math.cos(E),R=Math.sin(E),A=Math.cos(v),D=Math.sin(v),O=t+b*_*s,z=e+p*r,I=n+R*_*a,Z=t+A*_*s,H=n+D*_*a,q=t+b*M*s,k=e+g*r,F=n+R*M*a,G=t+A*M*s,Q=n+D*M*a;u>0&&this.tri(O,z,I,Z,z,H,G,k,Q,S,d),u<l-1&&this.tri(O,z,I,G,k,Q,q,k,F,S,d)}}}walls(t,e,n,s,r=0){const a=t.length/2,o=$o(t)>0;for(let l=0;l<a;l++){const c=(l+1)%a,h=t[l*2],d=t[l*2+1],f=t[c*2],u=t[c*2+1];o?this.quad(f,e,u,h,e,d,h,n,d,f,n,u,s,r):this.quad(h,e,d,f,e,u,f,n,u,h,n,d,s,r)}}cap(t,e,n,s=0){const r=t.length/2,a=[];for(let l=0;l<r;l++)a.push(new Ut(t[l*2],t[l*2+1]));const o=Fo.triangulateShape(a,[]);for(const l of o){const c=a[l[0]],h=a[l[1]],d=a[l[2]];(h.x-c.x)*(d.y-c.y)-(h.y-c.y)*(d.x-c.x)>0?this.tri(c.x,e,c.y,d.x,e,d.y,h.x,e,h.y,n,s):this.tri(c.x,e,c.y,h.x,e,h.y,d.x,e,d.y,n,s)}}build(){const t=new Re;return t.setAttribute("position",new we(new Float32Array(this.pos),3)),t.setAttribute("normal",new we(new Float32Array(this.nor),3)),t.setAttribute("color",new we(new Float32Array(this.col),3)),t.setAttribute("glow",new we(new Float32Array(this.glo),1)),t.computeBoundingSphere(),t.computeBoundingBox(),this.pos=[],this.nor=[],this.col=[],this.glo=[],t}}function $o(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}const Ji={value:0};function Qi(i={}){const t=new Je({vertexColors:!0,roughness:i.roughness??.86,metalness:0,side:i.side??ye}),e=new Dt(i.glowColor??16761722);return t.onBeforeCompile=n=>{n.uniforms.uNight=Ji,n.uniforms.uGlowColor={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float glow;
varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;
uniform float uNight;
uniform vec3 uGlowColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlowColor * vGlow * uNight * 2.4;`)},t.customProgramCacheKey=()=>"inverloch-model",t}function Ah(i){return i.onBeforeCompile=t=>{t.uniforms.uNight=Ji,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.82 * uNight;`)},i.customProgramCacheKey=()=>"inverloch-unlit",i}const Rh={day:{sunDir:[-.42,.78,-.46],sunColor:16774109,sunIntensity:3.1,hemiSky:13953279,hemiGround:9280120,hemiIntensity:1.25,zenith:4163279,horizon:13625078,below:1582638,sunGlow:1,shallow:7129789,deep:1201018,waterSky:12903158,foam:1,night:0,exposure:1},golden:{sunDir:[-.84,.22,.36],sunColor:16756848,sunIntensity:3,hemiSky:15781309,hemiGround:6973032,hemiIntensity:1.15,zenith:4153244,horizon:16760970,below:1645863,sunGlow:1.6,shallow:7320486,deep:1390942,waterSky:16763040,foam:.9,night:.25,exposure:1},night:{sunDir:[.38,.72,-.42],sunColor:10467071,sunIntensity:.5,hemiSky:3821436,hemiGround:1053980,hemiIntensity:.55,zenith:396056,horizon:1582922,below:263948,sunGlow:.5,shallow:1920092,deep:331552,waterSky:2242140,foam:.45,night:1,exposure:1.05}},l_=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
  gl_Position = p.xyww;
}`,c_=`
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
}`;class h_{constructor(t,e,n,s={}){ot(this,"sun",new Wd(16777215,3));ot(this,"hemi",new Gd(16777215,8947848,1));ot(this,"sky");ot(this,"sunDir",new $);ot(this,"skyUniforms");ot(this,"from");ot(this,"to");ot(this,"t",1);ot(this,"mode","day");this.renderer=t,this.water=e,this.tint=s,this.from=this.to=this.preset("day"),this.skyUniforms={uZenith:{value:new Dt},uHorizon:{value:new Dt},uBelow:{value:new Dt},uSunDir:{value:new $},uSunColor:{value:new Dt},uSunGlow:{value:1},uNight:{value:0}},this.sky=new Qt(new zo(1,32,16),new kn({uniforms:this.skyUniforms,vertexShader:l_,fragmentShader:c_,side:$e,depthWrite:!1,depthTest:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,n>0&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(n,n)),this.apply(1)}set(t,e=!1){t===this.mode&&this.t>=1||(this.from=this.snapshot(),this.to=this.preset(t),this.mode=t,this.t=e?1:0,this.apply(this.t))}update(t){return this.t>=1?!1:(this.t=Math.min(1,this.t+t/1.4),this.apply(this.t),!0)}aimShadow(t,e){if(!this.sun.castShadow)return;const n=me.clamp(e*.7,140,2400),s=this.sun.shadow,r=s.camera,a=n*2/s.mapSize.x,o=Math.round(t.x/a)*a,l=Math.round(t.z/a)*a,c=n*2.4+300;this.sun.target.position.set(o,t.y,l),this.sun.position.set(o,t.y,l).addScaledVector(this.sunDir,c),this.sun.target.updateMatrixWorld(),r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=1,r.far=c*2+400,r.updateProjectionMatrix(),s.bias=-.3/(r.far-r.near),s.normalBias=me.clamp(a*1.6,.06,1.2))}preset(t){return{...Rh[t],...this.tint[t]}}setSolar(t){const e=(t%1440+1440)%1440,n=6*60,s=20.5*60;let r,a;if(e>=n&&e<=s)a=(e-n)/(s-n),r=Math.sin(Math.PI*a)*70;else{const m=((e<n?e+1440:e)-s)/(1440-(s-n));a=m<.5?1:0,r=-Math.sin(Math.PI*m)*40}const o=me.degToRad(110*(1-2*a)),l=me.degToRad(Math.max(r,5)),c=[Math.sin(o)*Math.cos(l),Math.sin(l),-Math.cos(o)*Math.cos(l)];let h;r>=25?h=this.preset("day"):r>=6?h=Ko(this.preset("golden"),this.preset("day"),(r-6)/19):r>=-6?h=Ko(this.preset("night"),this.preset("golden"),(r+6)/12):h=this.preset("night");const d=me.clamp((2-r)/6,0,1),f=Rh.night.sunDir,u=[c[0]+(f[0]-c[0])*d,c[1]+(f[1]-c[1])*d,c[2]+(f[2]-c[2])*d];this.from=this.to={...h,sunDir:u},this.mode=r>=25?"day":r>=-6?"golden":"night",this.apply(1)}snapshot(){return Ko(this.from,this.to,u_(this.t))}apply(t){this.t=t;const e=this.snapshot();this.sunDir.set(...e.sunDir).normalize(),this.sun.color.set(e.sunColor),this.sun.intensity=e.sunIntensity,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const n=this.skyUniforms;n.uZenith.value.set(e.zenith),n.uHorizon.value.set(e.horizon),n.uBelow.value.set(e.below),n.uSunDir.value.copy(this.sunDir),n.uSunColor.value.set(e.sunColor),n.uSunGlow.value=e.sunGlow,n.uNight.value=e.night;const s=this.water.uniforms;s.uSunDir.value.copy(this.sunDir),s.uSunColor.value.set(e.sunColor).multiplyScalar(Math.min(1,e.sunIntensity/2.5)),s.uShallow.value.set(e.shallow),s.uDeep.value.set(e.deep),s.uSky.value.set(e.waterSky),s.uFoam.value=e.foam,this.water.skirt.material.color.set(e.deep).lerp(new Dt(e.shallow),.35),Ji.value=e.night,this.renderer.toneMappingExposure=e.exposure}}function u_(i){return i*i*(3-2*i)}function Ko(i,t,e){if(e<=0)return i;if(e>=1)return t;const n=(r,a)=>new Dt(r).lerp(new Dt(a),e).getHex(),s=(r,a)=>r+(a-r)*e;return{sunDir:[s(i.sunDir[0],t.sunDir[0]),s(i.sunDir[1],t.sunDir[1]),s(i.sunDir[2],t.sunDir[2])],sunColor:n(i.sunColor,t.sunColor),sunIntensity:s(i.sunIntensity,t.sunIntensity),hemiSky:n(i.hemiSky,t.hemiSky),hemiGround:n(i.hemiGround,t.hemiGround),hemiIntensity:s(i.hemiIntensity,t.hemiIntensity),zenith:n(i.zenith,t.zenith),horizon:n(i.horizon,t.horizon),below:n(i.below,t.below),sunGlow:s(i.sunGlow,t.sunGlow),shallow:n(i.shallow,t.shallow),deep:n(i.deep,t.deep),waterSky:n(i.waterSky,t.waterSky),foam:s(i.foam,t.foam),night:s(i.night,t.night),exposure:s(i.exposure,t.exposure)}}const f_=1.5;class d_{constructor(t,e,n,s,r,a,o,l=f_){ot(this,"nx");ot(this,"nz");ot(this,"y");ot(this,"xMin");ot(this,"zMin");ot(this,"xMax");ot(this,"zMax");ot(this,"dx");ot(this,"dz");ot(this,"cellX");ot(this,"cellZ");this.raw=t,this.exposure=e,this.w=n,this.h=s,this.sizeX=r,this.sizeZ=a,this.vex=l,this.cellX=r/n,this.cellZ=a/s,this.nx=Math.floor((n-1)/o)+1,this.nz=Math.floor((s-1)/o)+1,this.dx=this.cellX*o,this.dz=this.cellZ*o,this.xMin=-r/2+this.cellX/2,this.zMin=-a/2+this.cellZ/2,this.xMax=this.xMin+(this.nx-1)*this.dx,this.zMax=this.zMin+(this.nz-1)*this.dz,this.y=new Float32Array(this.nx*this.nz);for(let c=0;c<this.nz;c++)for(let h=0;h<this.nx;h++)this.y[c*this.nx+h]=t[c*o*n+h*o]*l}yAt(t,e){let n=(t-this.xMin)/this.dx,s=(e-this.zMin)/this.dz;n<0?n=0:n>this.nx-1.0001&&(n=this.nx-1.0001),s<0?s=0:s>this.nz-1.0001&&(s=this.nz-1.0001);const r=n|0,a=s|0,o=n-r,l=s-a,c=a*this.nx+r,h=this.y[c],d=this.y[c+1],f=this.y[c+this.nx],u=this.y[c+this.nx+1];return o+l<=1?h+(d-h)*o+(f-h)*l:u+(f-u)*(1-o)+(d-u)*(1-l)}bilinear(t,e,n){let s=(e+this.sizeX/2)/this.cellX-.5,r=(n+this.sizeZ/2)/this.cellZ-.5;s<0?s=0:s>this.w-1.0001&&(s=this.w-1.0001),r<0?r=0:r>this.h-1.0001&&(r=this.h-1.0001);const a=s|0,o=r|0,l=s-a,c=r-o,h=o*this.w+a;return(t[h]*(1-l)+t[h+1]*l)*(1-c)+(t[h+this.w]*(1-l)+t[h+this.w+1]*l)*c}metresAt(t,e){return this.bilinear(this.raw,t,e)}exposureAt(t,e){return this.bilinear(this.exposure,t,e)}inside(t,e,n=0){return t>this.xMin+n&&t<this.xMax-n&&e>this.zMin+n&&e<this.zMax-n}}const Ch={type:"change"},Zo={type:"start"},Ph={type:"end"},Or=new Co,Lh=new Tn,p_=Math.cos(70*me.DEG2RAD),Le=new $,tn=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jo=1e-6;class m_ extends Yd{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ln.ROTATE,MIDDLE:Ln.DOLLY,RIGHT:Ln.PAN},this.touches={ONE:Wn.ROTATE,TWO:Wn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new fn,this._lastTargetPosition=new $,this._quat=new fn().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cr,this._sphericalDelta=new Cr,this._scale=1,this._panOffset=new $,this._rotateStart=new Ut,this._rotateEnd=new Ut,this._rotateDelta=new Ut,this._panStart=new Ut,this._panEnd=new Ut,this._panDelta=new Ut,this._dollyStart=new Ut,this._dollyEnd=new Ut,this._dollyDelta=new Ut,this._dollyDirection=new $,this._mouse=new Ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=__.bind(this),this._onPointerDown=g_.bind(this),this._onPointerUp=x_.bind(this),this._onContextMenu=w_.bind(this),this._onMouseWheel=S_.bind(this),this._onKeyDown=y_.bind(this),this._onTouchStart=b_.bind(this),this._onTouchMove=E_.bind(this),this._onMouseDown=v_.bind(this),this._onMouseMove=M_.bind(this),this._interceptControlDown=T_.bind(this),this._interceptControlUp=A_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ee.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ch),this.update(),this.state=ee.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Le.copy(e).sub(this.target),Le.applyQuaternion(this._quat),this._spherical.setFromVector3(Le),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),s<-Math.PI?s+=tn:s>Math.PI&&(s-=tn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Le.setFromSpherical(this._spherical),Le.applyQuaternion(this._quatInverse),e.copy(this.target).add(Le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Le.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new $(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new $(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Or.origin.copy(this.object.position),Or.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Or.direction))<p_?this.object.lookAt(this.target):(Lh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Or.intersectPlane(Lh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Jo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jo||this._lastTargetPosition.distanceToSquared(this.target)>Jo?(this.dispatchEvent(Ch),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?tn/60*this.autoRotateSpeed*t:tn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Le.setFromMatrixColumn(e,0),Le.multiplyScalar(-t),this._panOffset.add(Le)}_panUp(t,e){this.screenSpacePanning===!0?Le.setFromMatrixColumn(e,1):(Le.setFromMatrixColumn(e,0),Le.crossVectors(this.object.up,Le)),Le.multiplyScalar(t),this._panOffset.add(Le)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Le.copy(s).sub(this.target);let r=Le.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function g_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function __(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function x_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ph),this.state=ee.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function v_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ln.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ee.DOLLY;break;case Ln.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}break;case Ln.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Zo)}function M_(i){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function S_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(i.preventDefault(),this.dispatchEvent(Zo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ph))}function y_(i){this.enabled!==!1&&this._handleKeyDown(i)}function b_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Wn.ROTATE:if(this.enableRotate===!1){this.state=ee.NONE;break}this._handleTouchStartRotate(i),this.state=ee.TOUCH_ROTATE;break;case Wn.PAN:if(this.enablePan===!1){this.state=ee.NONE;break}this._handleTouchStartPan(i),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case Wn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ee.TOUCH_DOLLY_PAN;break;case Wn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Zo)}function E_(i){switch(this._trackPointer(i),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ee.NONE}}function w_(i){this.enabled!==!1&&i.preventDefault()}function T_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function A_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Qo=new Tn,zr=new qd,ji=new Ut,jo=new $;class R_ extends m_{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Ln.PAN,MIDDLE:Ln.DOLLY,RIGHT:Ln.ROTATE},this.touches={ONE:Wn.PAN,TWO:Wn.DOLLY_ROTATE},this._panWorldStart=new $}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;Qo.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();ji.x=(t.clientX-n.left)/n.width*2-1,ji.y=-((t.clientY-n.top)/n.height)*2+1,zr.setFromCamera(ji,this.object),zr.ray.intersectPlane(Qo,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const n=this.domElement.getBoundingClientRect();ji.x=(t.clientX-n.left)/n.width*2-1,ji.y=-((t.clientY-n.top)/n.height)*2+1,zr.setFromCamera(ji,this.object),zr.ray.intersectPlane(Qo,jo)&&(jo.sub(this._panWorldStart),this._panOffset.copy(jo).negate(),this.update())}}class C_{constructor(t,e,n){ot(this,"items",[]);ot(this,"v",new $);ot(this,"visible",!0);ot(this,"obstacles",[]);this.layer=t;for(const s of[...e].sort((r,a)=>r.priority-a.priority)){const r=document.createElement("button");r.type="button",r.tabIndex=-1,r.className=`inv-label inv-label--${s.kind}`,r.textContent=s.name,r.style.visibility="hidden",r.addEventListener("click",()=>n(s.id)),t.appendChild(r),this.items.push({place:s,el:r,w:0,h:0,shown:!1})}}setVisible(t){this.visible=t,this.layer.style.display=t?"":"none"}setObstacles(t){this.obstacles=t}update(t,e,n,s=1/0){if(!this.visible)return;const r=[...this.obstacles];for(const a of this.items){a.w||(a.w=a.el.offsetWidth,a.h=a.el.offsetHeight);const o=a.place;this.v.set(o.x,o.y,o.z);const l=this.v.distanceTo(t.position);this.v.project(t);let c=this.v.z<1&&this.v.z>-1&&l<(o.maxDist??1/0)&&l<s;const h=(this.v.x*.5+.5)*e,d=(-this.v.y*.5+.5)*n,f=h-a.w/2,u=d-a.h,m=h+a.w/2,x=d;if(c&&(m<0||f>e||x<0||u>n)&&(c=!1),c){for(const p of r)if(f<p[2]+6&&m>p[0]-6&&u<p[3]+4&&x>p[1]-4){c=!1;break}}c&&(r.push([f,u,m,x]),a.el.style.transform=`translate3d(${Math.round(f)}px, ${Math.round(u)}px, 0)`),c!==a.shown&&(a.el.style.visibility=c?"visible":"hidden",a.shown=c)}}dispose(){for(const t of this.items)t.el.remove();this.items=[]}}function Gn(i,t,e){return[(e-i.origin[0])*i.metresPerDegree[0],-(t-i.origin[1])*i.metresPerDegree[1]]}function P_(i,t,e){return i.map(n=>{const[s,r]=Gn(t,n.lat,n.lon),a=Math.max(e.yAt(s,r),0);return{...n,x:s,z:r,y:a+(n.lift??6)}})}const L_={high:{step:1,trees:1,shadow:4096,pixelRatio:2},medium:{step:2,trees:.6,shadow:2048,pixelRatio:1.5},low:{step:2,trees:.35,shadow:0,pixelRatio:1}};class tl extends Error{}const D_=()=>new Promise(i=>requestAnimationFrame(()=>i())),I_=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class N_{constructor(t,e,n,s,r={}){ot(this,"renderer");ot(this,"scene",new td);ot(this,"camera",new _n(38,1,5,9e4));ot(this,"controls");ot(this,"atmosphere");ot(this,"hf");ot(this,"disposed",!1);ot(this,"abort",new AbortController);ot(this,"labels");ot(this,"places",[]);ot(this,"raf",0);ot(this,"last",0);ot(this,"time",0);ot(this,"dirty",!0);ot(this,"animating",!0);ot(this,"resizeObserver");ot(this,"flight");ot(this,"lastCompass",NaN);ot(this,"width",1);ot(this,"height",1);ot(this,"pixelRatio",1);ot(this,"slowFrames",0);ot(this,"solarMinutes",NaN);ot(this,"roadPaths",[]);ot(this,"roadIndex");ot(this,"external");ot(this,"meta");ot(this,"shadowAim",new $);ot(this,"viewFocus",new $);ot(this,"viewDistance",1/0);ot(this,"lookDir",new $);ot(this,"onKey",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=this.currentView(),n=e.dist*.12,s=me.degToRad(e.azimuth),r=-Math.sin(s),a=-Math.cos(s),o=Math.cos(s),l=-Math.sin(s);let c=null;switch(t.key){case"ArrowUp":c={...e,x:e.x+r*n,z:e.z+a*n};break;case"ArrowDown":c={...e,x:e.x-r*n,z:e.z-a*n};break;case"ArrowLeft":c={...e,x:e.x-o*n,z:e.z-l*n};break;case"ArrowRight":c={...e,x:e.x+o*n,z:e.z+l*n};break;case"+":case"=":c={...e,dist:e.dist*.8};break;case"-":case"_":c={...e,dist:e.dist*1.25};break;case"q":case"Q":c={...e,azimuth:e.azimuth-15};break;case"e":case"E":c={...e,azimuth:e.azimuth+15};break;case"r":case"R":c={...e,polar:e.polar-6};break;case"f":case"F":c={...e,polar:e.polar+6};break;case"Home":c=this.opts.home;break;default:return}t.preventDefault(),this.fly(c,.3)});ot(this,"frame",t=>{var l;if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);const e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,document.hidden)return;if(this.flight){const c=this.flight;c.t=Math.min(1,c.t+e/c.duration);const h=I_(c.t),d=(f,u)=>f+(u-f)*h;this.applyView({x:d(c.from.x,c.to.x),z:d(c.from.z,c.to.z),dist:Math.exp(d(Math.log(c.from.dist),Math.log(c.to.dist))),polar:d(c.from.polar,c.to.polar),azimuth:d(c.from.azimuth,c.to.azimuth)}),c.t>=1&&(this.flight=void 0)}if(this.controls&&!this.external&&this.controls.update()&&(this.dirty=!0),this.atmosphere.update(e)&&(this.dirty=!0),this.animating&&(this.time+=e,this.tick(e,this.time),this.dirty=!0),!this.dirty)return;this.dirty=!1;const n=this.camera;let s,r=1/0;const a=!!this.controls&&!this.external;if(this.controls&&a){const c=this.hf.yAt(n.position.x,n.position.z)+12;n.position.y<c&&(n.position.y=c),s=n.position.distanceTo(this.controls.target),this.shadowAim.copy(this.controls.target)}else{const c=Math.max(1,n.position.y-Math.max(this.hf.yAt(n.position.x,n.position.z),this.waterLevel));n.getWorldDirection(this.lookDir);const h=Math.min(this.lookDir.y<-.05?c/-this.lookDir.y:1e9,60+c*3,3e3);this.shadowAim.copy(n.position).addScaledVector(this.lookDir,h),s=Math.max(h,c)*1.3,r=Math.max(350,c*10)}const o=a?me.clamp(s*.02,2,80):me.clamp(s*.012,.4,60);if(Math.abs(o-n.near)>n.near*.05&&(n.near=o,n.updateProjectionMatrix()),this.atmosphere.aimShadow(this.shadowAim,s),!a&&s<500?this.viewFocus.set(n.position.x,0,n.position.z):this.viewFocus.copy(this.shadowAim),this.viewDistance=s,this.beforeRender(),this.renderer.render(this.scene,n),(l=this.labels)==null||l.update(n,this.width,this.height,r),this.animating&&e<.25&&(this.slowFrames=e>.042?this.slowFrames+1:Math.max(0,this.slowFrames-2),this.slowFrames>50&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio*.75),this.renderer.setPixelRatio(this.pixelRatio),this.resize(),this.slowFrames=0)),a){const c=Math.round(this.currentView().azimuth);c!==this.lastCompass&&(this.lastCompass=c,this.cb.onCompass(c))}});this.container=t,this.labelLayer=e,this.cb=n,this.opts=s,this.host=r,this.external=!!r.external}async init(){try{this.renderer=new o_({antialias:!0,powerPreference:"high-performance"})}catch{this.cb.onError("This browser could not start WebGL, which the 3D model needs.");return}const t=this.renderer,e=this.pickQuality(),n=L_[e];this.pixelRatio=Math.min(window.devicePixelRatio||1,n.pixelRatio),t.setPixelRatio(this.pixelRatio),t.outputColorSpace=be,t.toneMapping=ma,t.shadowMap.enabled=n.shadow>0,t.shadowMap.type=is;const s=t.domElement;this.host.external?(s.setAttribute("role","img"),s.setAttribute("aria-label",this.opts.name)):(s.tabIndex=0,s.setAttribute("role","application"),s.setAttribute("aria-label",`${this.opts.name}. Drag to pan, right-drag to rotate, scroll to zoom. Arrow keys pan, plus and minus zoom, Q and E rotate.`)),s.style.display="block",s.style.outlineOffset="-3px",this.container.appendChild(s),s.addEventListener("webglcontextlost",o=>{o.preventDefault(),this.disposed||this.cb.onError("The browser reclaimed the graphics memory this model was using.")});let r;try{r=await this.build(n,e,async(o,l)=>{this.cb.onProgress(o,l),await D_()})}catch(o){if(this.disposed)return;o instanceof tl||console.error(o),this.cb.onError(o instanceof tl?o.message:"The model could not be built in this browser.");return}if(this.disposed)return;this.hf=r.hf,this.atmosphere=r.atmosphere,this.scene.add(this.atmosphere.sky,this.atmosphere.sun,this.atmosphere.sun.target,this.atmosphere.hemi),this.places=r.places,this.roadPaths=r.roadPaths,this.roadIndex=r.roadIndex,this.labels=new C_(this.labelLayer,this.places,o=>this.flyToPlace(o)),this.external||this.setupControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize();const a=window.matchMedia("(prefers-reduced-motion: reduce)").matches;a&&(this.animating=!1),this.external?this.setExternalCamera(...this.opts.externalStart):a?this.applyView(this.opts.home):(this.applyView(this.opts.intro),this.fly(this.opts.home,3.4)),this.cb.onProgress(1,"Ready"),this.cb.onReady(r.info),this.last=performance.now(),this.raf=requestAnimationFrame(this.frame)}get isAnimating(){return this.animating}setAnimating(t){this.animating=t,this.dirty=!0}setExternalCamera(t,e,n,s,r){this.external&&(this.camera.position.set(t,e,n),this.camera.rotation.set(r,s,0,"YXZ"),this.dirty=!0)}setExternal(t){if(!(t===this.external||!this.hf)){if(this.external=t,t)this.flight=void 0,this.controls&&(this.controls.enabled=!1);else{this.controls||this.setupControls(),this.controls.enabled=!0;const e=this.camera;e.getWorldDirection(this.lookDir);const n=Math.max(1,e.position.y),s=this.lookDir.y<-.05?Math.min(n/-this.lookDir.y,6e3):900,r=this.controls.target.copy(e.position).addScaledVector(this.lookDir,s);r.x=me.clamp(r.x,this.hf.xMin,this.hf.xMax),r.z=me.clamp(r.z,this.hf.zMin,this.hf.zMax),r.y=this.targetHeight(r.x,r.z),this.controls.update(),this.fly(this.opts.home,1.6)}this.resize()}}getCamera(){const t=new wn().setFromQuaternion(this.camera.quaternion,"YXZ"),e=this.camera.position;return{x:e.x,y:e.y,z:e.z,yaw:t.y,pitch:t.x}}fromLatLon(t,e){return this.meta?Gn(this.meta,t,e):[0,0]}addParts(t){const e=new Ke;e.name="guest";const n=t.map(s=>{const r=new Re;r.setAttribute("position",new se(Array.from(s.positions),3)),s.colors&&r.setAttribute("color",new se(Array.from(s.colors),3)),s.uvs&&r.setAttribute("uv",new se(Array.from(s.uvs),2)),s.indices&&r.setIndex(Array.from(s.indices)),s.normals?r.setAttribute("normal",new se(Array.from(s.normals),3)):r.computeVertexNormals();let a=null;s.map&&(a=new Ae(s.map),a.colorSpace=be,a.wrapS=a.wrapT=$s,s.mapRepeat&&a.repeat.set(s.mapRepeat[0],s.mapRepeat[1]),a.anisotropy=4,a.needsUpdate=!0);const o=s.opacity??1,l={color:new Dt().setRGB(...s.color??[1,1,1]),map:a,vertexColors:!!s.colors,transparent:o<1,opacity:o,side:s.doubleSide?ye:Xn},c=s.unlit?new ei(l):new Je({...l,roughness:s.roughness??.9,metalness:s.metalness??0,emissive:new Dt().setRGB(...s.emissive??[0,0,0]),emissiveIntensity:s.emissiveIntensity??1,flatShading:!!s.flatShading}),h=new Qt(r,c);return h.matrixAutoUpdate=!1,h.matrix.fromArray(Array.from(s.matrix)),h.castShadow=o>=1,h.receiveShadow=!0,e.add(h),h});return this.scene.add(e),this.dirty=!0,{setMatrix:(s,r)=>{const a=n[s];a&&(a.matrix.fromArray(Array.from(r)),a.matrixWorldNeedsUpdate=!0,this.dirty=!0)},setEmissive:(s,r,a,o,l)=>{var h;const c=(h=n[s])==null?void 0:h.material;c instanceof Je&&(c.emissive.setRGB(r,a,o),c.emissiveIntensity=l,this.dirty=!0)},remove:()=>{var s;this.scene.remove(e);for(const r of n){r.geometry.dispose();const a=r.material;(s=a.map)==null||s.dispose(),a.dispose()}this.dirty=!0}}}addPad(t){const e=t.radius??t.halfWidth??5,n=t.radius??t.halfDepth??5,s=t.heading??0,r=Math.cos(s),a=Math.sin(s);let o=1/0,l=-1/0;for(const[u,m]of[[0,0],[-e,-n],[e,-n],[e,n],[-e,n],[0,-n],[0,n],[-e,0],[e,0]]){const x=this.hf.yAt(t.x+u*r+m*a,t.z-u*a+m*r);o=Math.min(o,x),l=Math.max(l,x)}const c=l+(t.lift??.25),h=c-o+1,d=t.radius?new Do(t.radius,t.radius,h,24):new gi(e*2,h,n*2),f=new Qt(d,new Je({color:new Dt().setRGB(...t.color),roughness:1}));return f.position.set(t.x,c-h/2,t.z),f.rotation.y=s,f.receiveShadow=!0,f.name="guest-pad",this.scene.add(f),this.dirty=!0,c}setSolarMinutes(t){!this.atmosphere||t===this.solarMinutes||(this.solarMinutes=t,this.atmosphere.setSolar(t),this.dirty=!0)}roadSpot(t){const e=t.trim().toLowerCase();let n=null;for(const m of this.roadPaths)m.name.toLowerCase()===e&&(!n||m.length>n.length)&&(n=m);if(!n)return null;const s=n.pts.length/3,r=0,a=s-1,o=s>>1;let l=n.pts[a*3]-n.pts[r*3],c=n.pts[a*3+2]-n.pts[r*3+2];const h=Math.hypot(l,c)||1;l/=h,c/=h;const d=Math.min(70,h*.5),f=n.pts[o*3]-l*d,u=n.pts[o*3+2]-c*d;return{x:f,y:this.hf.yAt(f,u)+38,z:u,yaw:Math.atan2(-l,-c),pitch:-.42}}standNear(t,e){const n=this.roadIndex,s=n==null?void 0:n.nearest(t,e,150);if(!n||!s)return null;const r=s.width/2+1.5;let a=(t-s.px)*-s.tz+(e-s.pz)*s.tx>=0?1:-1;const o=u=>{const m=s.px-s.tz*u*(r+6),x=s.pz+s.tx*u*(r+6),p=n.nearest(m,x,r+4);return!!p&&p.dist<r+3};o(a)&&!o(-a)&&(a=-a);const l=s.px-s.tz*a*r,c=s.pz+s.tx*a*r,h=t-l,d=e-c,f=Math.hypot(h,d)>6?Math.atan2(-h,-d):Math.atan2(-s.tx,-s.tz);return{x:l,z:c,yaw:f}}groundAt(t,e){return this.hf?this.hf.yAt(t,e):0}get waterLevel(){return 0}get bounds(){return this.hf?[this.hf.xMin,this.hf.xMax,this.hf.zMin,this.hf.zMax]:[-4e3,4e3,-3440,3440]}setTimeOfDay(t){var e;(e=this.atmosphere)==null||e.set(t,!this.animating),this.dirty=!0}setLabelsVisible(t){var e;(e=this.labels)==null||e.setVisible(t),this.dirty=!0}setLabelObstacles(t){var e;(e=this.labels)==null||e.setObstacles(t),this.dirty=!0}flyToPlace(t){const e=this.places.find(n=>n.id===t);e&&this.fly({x:e.x,z:e.z,dist:e.view[0],polar:e.view[1],azimuth:e.view[2]},2.2)}resetView(){this.fly(this.opts.home,1.8)}setView(t,e,n,s,r,a=1.5){this.fly({x:t,z:e,dist:n,polar:s,azimuth:r},a)}faceNorth(){const t=this.currentView();this.fly({...t,azimuth:0},.8)}zoomBy(t){const e=this.currentView();this.fly({...e,dist:me.clamp(e.dist*t,this.controls.minDistance,this.controls.maxDistance)},.35)}dispose(){var t,e,n;this.disposed=!0,this.abort.abort(),cancelAnimationFrame(this.raf),(t=this.resizeObserver)==null||t.disconnect(),(e=this.labels)==null||e.dispose(),(n=this.controls)==null||n.dispose(),this.renderer&&(this.renderer.domElement.removeEventListener("keydown",this.onKey),this.scene.traverse(s=>{var o,l;const r=s;(l=(o=r.geometry)==null?void 0:o.dispose)==null||l.call(o);const a=Array.isArray(r.material)?r.material:r.material?[r.material]:[];for(const c of a){for(const h of Object.values(c))h instanceof Ae&&h.dispose();c.dispose()}}),this.renderer.dispose(),this.renderer.domElement.remove())}beforeRender(){}invalidate(){this.dirty=!0}clearTest(){const t=[...this.host.clear??[],...(this.host.clearLatLon??[]).map(e=>{const[n,s]=this.fromLatLon(e.lat,e.lon);return{x:n,z:s,r:e.r}})];return(e,n)=>t.some(s=>(e-s.x)**2+(n-s.z)**2<s.r*s.r)}pickQuality(){if(this.host.quality)return this.host.quality;const t=new URLSearchParams(window.location.search).get("quality");if(t==="high"||t==="medium"||t==="low")return t;const e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),s=n?String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)):"";if(/swiftshader|llvmpipe|software/i.test(s))return"low";const r=navigator.deviceMemory??8;return window.matchMedia("(pointer: coarse)").matches||r<=4?"medium":"high"}setupControls(){const t=this.controls=new R_(this.camera,this.renderer.domElement);t.enableDamping=!0,t.dampingFactor=.09,t.screenSpacePanning=!1,t.zoomToCursor=!0,t.minDistance=this.opts.minDistance,t.maxDistance=this.opts.maxDistance,t.maxPolarAngle=me.degToRad(84),t.zoomSpeed=1.1,t.addEventListener("start",()=>{this.flight=void 0}),t.addEventListener("change",()=>{const e=t.target,n=this.hf;e.x=me.clamp(e.x,n.xMin,n.xMax),e.z=me.clamp(e.z,n.zMin,n.zMax);const s=this.targetHeight(e.x,e.z);this.camera.position.y+=s-e.y,e.y=s,this.dirty=!0}),this.renderer.domElement.addEventListener("keydown",this.onKey)}clampView(t){var e,n;return{x:me.clamp(t.x,this.hf.xMin,this.hf.xMax),z:me.clamp(t.z,this.hf.zMin,this.hf.zMax),dist:me.clamp(t.dist,((e=this.controls)==null?void 0:e.minDistance)??this.opts.minDistance,((n=this.controls)==null?void 0:n.maxDistance)??this.opts.maxDistance),polar:me.clamp(t.polar,2,84),azimuth:t.azimuth}}currentView(){const t=this.controls.target,e=this.camera.position.clone().sub(t),n=new Cr().setFromVector3(e);return{x:t.x,z:t.z,dist:n.radius,polar:me.radToDeg(n.phi),azimuth:me.radToDeg(n.theta)}}targetHeight(t,e){return this.opts.followGround?Math.max(0,this.hf.yAt(t,e)):0}applyView(t){const e=new Cr(t.dist,me.degToRad(t.polar),me.degToRad(t.azimuth)),n=this.controls.target.set(t.x,this.targetHeight(t.x,t.z),t.z);this.camera.position.setFromSpherical(e).add(n),this.camera.lookAt(n),this.dirty=!0}fly(t,e){if(!this.controls||this.external)return;if(t=this.clampView(t),!this.animating){this.flight=void 0,this.applyView(t),this.controls.update();return}const n=this.currentView();let s=(t.azimuth-n.azimuth)%360;s>180&&(s-=360),s<-180&&(s+=360),this.flight={from:n,to:{...t,azimuth:n.azimuth+s},t:0,duration:e}}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.fov=this.external?60:t/e<.8?52:38,this.camera.updateProjectionMatrix(),this.dirty=!0}}const Dh=3;function ts(i,t,e,n,s,r,a,o,l,c){const h=new Oo(1,0),d=h.getAttribute("position"),f=[];for(let u=0;u<d.count;u++){const m=d.getX(u),x=d.getY(u),p=d.getZ(u),g=Math.sin(m*12.9898+x*78.233+p*37.719+o*4.1)*43758.5453,_=.8+(g-Math.floor(g))*.42;f.push([t+m*s*_,e+x*r*(x<0?.75:_),n+p*a*_])}for(let u=0;u<f.length;u+=3){const[m,x,p]=[f[u],f[u+1],f[u+2]],g=me.clamp(((m[1]+x[1]+p[1])/3-(e-r))/(2*r),0,1);i.tri(m[0],m[1],m[2],x[0],x[1],x[2],p[0],p[1],p[2],Ki(l,c,g))}h.dispose()}function xi(i){const t=i.build();return t.deleteAttribute("glow"),t}function U_(i,t,e,n,s=()=>!1){const r=new Ke;r.name="trees";const a=new Uc({vertexColors:!0}),o=1300,l=new Map,c=Zi(88);for(let g=0;g<i.length;g+=Dh){if(n<1&&c()>n||s(i[g]/4,i[g+1]/4))continue;const M=`${i[g+2]>>8}:${Math.floor(i[g]/4/o)}:${Math.floor(i[g+1]/4/o)}`;let S=l.get(M);S||l.set(M,S=[]),S.push(g)}const h=new ie,d=new fn,f=new $,u=new $,m=new $(0,1,0),x=new Dt;let p=0;for(const[g,_]of l){const M=Number(g.split(":")[0]),S=new ni(t[M],a,_.length);_.forEach((y,E)=>{const v=i[y]/4,b=i[y+1]/4,R=(i[y+2]&255)/10,A=Zi(y*2654435761+11);u.set(v,e.yAt(v,b)-.15,b),d.setFromAxisAngle(m,A()*Math.PI*2);const D=.85+A()*.35;f.set(R*D,R,R*(.85+A()*.35)),S.setMatrixAt(E,h.compose(u,d,f));const O=.8+A()*.34;S.setColorAt(E,x.setRGB(O*(.94+A()*.14),O,O*(.9+A()*.12)))}),S.instanceMatrix.needsUpdate=!0,S.instanceColor&&(S.instanceColor.needsUpdate=!0),S.computeBoundingSphere(),S.castShadow=!0,S.receiveShadow=!1,r.add(S),p+=_.length}return{group:r,count:p}}const Ih=1,el=2,F_=[nt(5198680),nt(11575168),nt(9072466),nt(12434356)],O_=nt(4474957),z_=nt(15921382),B_=[.34,.3,.26,.22,.16,.15,.13,.11];function k_(i,t){const e=[i[0]/10,i[1]/10];for(let n=2;n<i.length;n+=2){const s=i[n-2]/10,r=i[n-1]/10,a=i[n]/10,o=i[n+1]/10,l=Math.max(1,Math.ceil(Math.hypot(a-s,o-r)/t));for(let c=1;c<=l;c++)e.push(s+(a-s)*c/l,r+(o-r)*c/l)}return e}class G_{constructor(){ot(this,"cells",new Map);ot(this,"segs",[]);ot(this,"size",40)}add(t,e,n,s,r,a,o=7){const l=this.segs.length/7;this.segs.push(t,e,n,s,r,a,o);const c=Math.floor(Math.min(t,n)/this.size),h=Math.floor(Math.max(t,n)/this.size),d=Math.floor(Math.min(e,s)/this.size),f=Math.floor(Math.max(e,s)/this.size);for(let u=c;u<=h;u++)for(let m=d;m<=f;m++){const x=(u+512)*4096+(m+512);let p=this.cells.get(x);p||this.cells.set(x,p=[]),p.push(l)}}nearest(t,e,n){let s=null;const r=Math.ceil(n/this.size),a=Math.floor(t/this.size),o=Math.floor(e/this.size);for(let l=a-r;l<=a+r;l++)for(let c=o-r;c<=o+r;c++){const h=this.cells.get((l+512)*4096+(c+512));if(h)for(const d of h){const f=this.segs[d*7],u=this.segs[d*7+1],m=this.segs[d*7+2],x=this.segs[d*7+3],p=m-f,g=x-u,_=Math.max(0,Math.min(1,((t-f)*p+(e-u)*g)/(p*p+g*g||1))),M=f+p*_,S=u+g*_,y=Math.hypot(t-M,e-S);if(y<=n&&(!s||y<s.dist)){const E=Math.hypot(p,g)||1;s={dist:y,px:M,pz:S,cls:this.segs[d*7+4],name:this.segs[d*7+5],width:this.segs[d*7+6],tx:p/E,tz:g/E}}}}return s}}function H_(i,t){const e=new _e,n=new _e,s=new G_,r=[],a=[];for(const[x,p,g,_,M,S]of i.roads){const y=_/10,E=k_(S,x<=3?6:5),v=E.length/2;if(v<2)continue;const b=p===0&&x<=1?O_:F_[p],R=B_[x],A=(g&Ih)!==0,D=t.yAt(E[0],E[1]),O=t.yAt(E[v*2-2],E[v*2-1]),z=new Float32Array(v);for(let k=1;k<v;k++)z[k]=z[k-1]+Math.hypot(E[k*2]-E[k*2-2],E[k*2+1]-E[k*2-1]);const I=z[v-1]||1,Z=new Float32Array(v*3),H=new Float32Array(v*3),q=new Float32Array(v*3);for(let k=0;k<v;k++){const F=E[k*2],G=E[k*2+1],Q=Math.max(k-1,0),Y=Math.min(k+1,v-1);let vt=E[Y*2]-E[Q*2],j=E[Y*2+1]-E[Q*2+1];const lt=Math.hypot(vt,j)||1;vt/=lt,j/=lt;let ft=1;if(k>0&&k<v-1){const At=E[k*2]-E[k*2-2],Ot=E[k*2+1]-E[k*2-1],Vt=Math.hypot(At,Ot)||1;ft=1/Math.max(.6,(At*vt+Ot*j)/Vt)}const dt=-j*(y/2)*ft,pt=vt*(y/2)*ft,ht=A?D+(O-D)*(z[k]/I)+.6+1*Math.sin(Math.PI*z[k]/I):NaN,kt=A?ht:t.yAt(F,G)+R,it=A?ht:t.yAt(F+dt,G+pt)+R,gt=A?ht:t.yAt(F-dt,G-pt)+R;Z.set([F+dt,it,G+pt],k*3),H.set([F,kt,G],k*3),q.set([F-dt,gt,G-pt],k*3),k>0&&x<=3&&s.add(E[k*2-2],E[k*2-1],F,G,x,M,y)}for(let k=0;k<v-1;k++){const F=k*3,G=F+3;if(e.quad(Z[F],Z[F+1],Z[F+2],Z[G],Z[G+1],Z[G+2],H[G],H[G+1],H[G+2],H[F],H[F+1],H[F+2],b),e.quad(H[F],H[F+1],H[F+2],H[G],H[G+1],H[G+2],q[G],q[G+1],q[G+2],q[F],q[F+1],q[F+2],b),A){const Q=nt(p===2?7297604:13225162);for(const Y of[Z,q])e.quad(Y[F],Y[F+1],Y[F+2],Y[G],Y[G+1],Y[G+2],Y[G],Y[G+1]+1.05,Y[G+2],Y[F],Y[F+1]+1.05,Y[F+2],Q),e.quad(Y[F],Y[F+1]-.7,Y[F+2],Y[G],Y[G+1]-.7,Y[G+2],Y[G],Y[G+1],Y[G+2],Y[F],Y[F+1],Y[F+2],nt(9276036))}}if(x<=5&&!A)for(const k of[0,v-1]){const F=H[k*3],G=H[k*3+1],Q=H[k*3+2],Y=8;for(let vt=0;vt<Y;vt++){const j=vt/Y*Math.PI*2,lt=(vt+1)/Y*Math.PI*2;e.tri(F,G,Q,F+Math.cos(lt)*y/2,G,Q+Math.sin(lt)*y/2,F+Math.cos(j)*y/2,G,Q+Math.sin(j)*y/2,b)}}if(x<=1&&!(g&el)&&I>20){let k=0;for(let F=4;F<I-4;F+=12){for(;k<v-2&&z[k+1]<F;)k++;const G=(F-z[k])/(z[k+1]-z[k]||1),Q=H[k*3]+(H[k*3+3]-H[k*3])*G,Y=H[k*3+1]+(H[k*3+4]-H[k*3+1])*G,vt=H[k*3+2]+(H[k*3+5]-H[k*3+2])*G;let j=H[k*3+3]-H[k*3],lt=H[k*3+5]-H[k*3+2];const ft=Math.hypot(j,lt)||1;j/=ft,lt/=ft;const dt=(H[k*3+4]-H[k*3+1])/ft*3,pt=-lt*.16,ht=j*.16,kt=.05;n.quad(Q+pt,Y+kt,vt+ht,Q+j*3+pt,Y+dt+kt,vt+lt*3+ht,Q+j*3-pt,Y+dt+kt,vt+lt*3-ht,Q-pt,Y+kt,vt-ht,z_)}}if(g&el){let k=0,F=0;for(let lt=0;lt<v;lt++)k+=E[lt*2],F+=E[lt*2+1];k/=v,F/=v;const G=v>>1,Q=V_(E[0],E[1],E[G*2],E[G*2+1],E[v*2-2],E[v*2-1]),Y=Q?Q.x:k,vt=Q?Q.z:F,j=Q?Q.r:Math.hypot(E[0]-k,E[1]-F);j>3&&j<40&&!a.some(lt=>Math.hypot(lt.x-Y,lt.z-vt)<12)&&a.push({x:Y,z:vt,r:j,w:y})}x<=3&&r.push({cls:x,name:M>=0?i.names[M]:"",width:y,flags:g,pts:H,length:I})}const o=nt(13158078),l=nt(7314002),c=nt(4943936);for(const x of a){const p=x.r-x.w/2-.3;if(p<1.2)continue;const g=t.yAt(x.x,x.z)+.2;e.frame(x.x,g,x.z,0),e.cyl(0,0,0,p,p,.4,14,o,l),e.blob(0,.9,0,p*.45,.8,p*.45,6,3,c,nt(7181400)),e.frame()}const h=new Je({vertexColors:!0,roughness:.92,metalness:0,side:ye,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),d=new Qt(Nh(e.build()),h);d.receiveShadow=!0,d.name="roads";const f=Ah(new ei({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})),u=new Qt(Nh(n.build()),f);u.name="road-markings";const m=new Ke;return m.add(d,u),{group:m,index:s,paths:r}}function Nh(i){return i.deleteAttribute("glow"),i}function V_(i,t,e,n,s,r){const a=2*(i*(n-r)+e*(r-t)+s*(t-n));if(Math.abs(a)<.001)return null;const o=i*i+t*t,l=e*e+n*n,c=s*s+r*r,h=(o*(n-r)+l*(r-t)+c*(t-n))/a,d=(o*(s-e)+l*(i-s)+c*(e-i))/a;return{x:h,z:d,r:Math.hypot(i-h,t-d)}}const Ps=-36,W_=170,X_=`
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
`,Ls=4,nl=4,q_=`
          {
            // metres across one screen pixel: the blades and grit only show where a pixel is smaller than they are
            float px = max(length(dFdx(w)), length(dFdy(w)));
            float fine = close * (1.0 - smoothstep(0.03, 0.16, px)) * (1.0 - 0.5 * sharp);
            float mid = close * (1.0 - smoothstep(0.2, 0.9, px)) * (1.0 - 0.85 * sharp);
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
          }`;function Y_(i,t,e,n,s={}){const{nx:r,nz:a}=i,o=new Float32Array(r*a*3),l=new Float32Array(r*a*3),c=new Float32Array(r*a*2);for(let v=0;v<a;v++)for(let b=0;b<r;b++){const R=v*r+b,A=i.xMin+b*i.dx,D=i.zMin+v*i.dz;o[R*3]=A,o[R*3+1]=i.y[R],o[R*3+2]=D,c[R*2]=(A+i.sizeX/2)/i.sizeX,c[R*2+1]=1-(D+i.sizeZ/2)/i.sizeZ;const O=i.y[v*r+Math.max(b-1,0)],z=i.y[v*r+Math.min(b+1,r-1)],I=i.y[Math.max(v-1,0)*r+b],Z=i.y[Math.min(v+1,a-1)*r+b],H=(z-O)/(2*i.dx),q=(Z-I)/(2*i.dz),k=Math.hypot(H,1,q);l[R*3]=-H/k,l[R*3+1]=1/k,l[R*3+2]=-q/k}const h=new Uint32Array((r-1)*(a-1)*6);let d=0;for(let v=0;v<a-1;v++)for(let b=0;b<r-1;b++){const R=v*r+b,A=R+1,D=R+r,O=D+1;h[d++]=R,h[d++]=D,h[d++]=A,h[d++]=A,h[d++]=D,h[d++]=O}const f=new Re;f.setAttribute("position",new we(o,3)),f.setAttribute("normal",new we(l,3)),f.setAttribute("uv",new we(c,2)),f.setIndex(new we(h,1)),f.computeBoundingSphere();const u=new Je({map:t,roughness:.96,metalness:0}),m=new vs(new Uint8Array([128,128,128,255]),1,1);m.needsUpdate=!0;const x=Ls+nl,p=Array.from({length:x},()=>({value:m})),g=Array.from({length:x},()=>({value:new ge(0,0,1,1)})),_=Array.from({length:x},()=>({value:0})),M={set(v,b,R){p[v].value=b??m,_[v].value=b?1:0,R&&g[v].value.set(...R)}},S=Array.from({length:x},(v,b)=>b);u.onBeforeCompile=v=>{v.uniforms.uTide=e,v.uniforms.uJitter={value:new Ut(.6/i.sizeX,.6/i.sizeZ)};for(const b of S)v.uniforms[`uDetail${b}`]=p[b],v.uniforms[`uDetailRect${b}`]=g[b],v.uniforms[`uDetailOn${b}`]=_[b];v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform float uTide;
uniform vec2 uJitter;
${S.map(b=>`uniform sampler2D uDetail${b};
uniform vec4 uDetailRect${b};
uniform float uDetailOn${b};`).join(`
`)}
${X_}`).replace("#include <map_fragment>",`
        float camDist = length(cameraPosition - vWPos);
        vec2 w = vWPos.xz;
        float close = ${s.closeUp?"1.0 - smoothstep(110.0, 380.0, camDist)":"0.0"};
        // close up, the colour is looked up a little to one side, differently at every point: the picture's pixel edges become ragged, not blurred squares
        vec2 guv = vMapUv + (vec2(invNoise(w * 1.4) + 0.5 * invNoise(w * 4.3 + 17.0), invNoise(w * 1.4 + 31.7) + 0.5 * invNoise(w * 4.3 + 5.3)) / 1.5 - 0.5) * 2.0 * uJitter * close;
        #ifdef USE_MAP
          diffuseColor *= texture2D(map, guv);
        #endif
        float sharp = 0.0;
        ${S.map(b=>`if (uDetailOn${b} > 0.5) {
          vec2 duv = (${b<Ls?"guv":"vMapUv"} - uDetailRect${b}.xy) / (uDetailRect${b}.zw - uDetailRect${b}.xy);
          // a slot with no tile in it is skipped altogether: nothing is read for it
          vec4 fine = texture2D(uDetail${b}, clamp(duv, 0.0, 1.0));
          float inside = step(0.0, duv.x) * step(duv.x, 1.0) * step(0.0, duv.y) * step(duv.y, 1.0);
          diffuseColor.rgb = mix(diffuseColor.rgb, fine.rgb, inside * uDetailOn${b});
          ${b<Ls?"":`sharp = max(sharp, inside * uDetailOn${b});`}
        }`).join(`
`)}
        ${s.closeUp?q_:""}
        {
          float nearFade = 1.0 - smoothstep(300.0, 1600.0, camDist);
          float grain = invNoise(vWPos.xz * 0.85) * 0.55 + invNoise(vWPos.xz * 0.21) * 0.45;
          diffuseColor.rgb *= mix(1.0, 0.84 + 0.32 * grain, nearFade * (1.0 - 0.8 * sharp));
          float above = vWPos.y / ${i.vex.toFixed(2)} - uTide;
          float wet = smoothstep(0.45, 0.03, above);
          diffuseColor.rgb *= mix(1.0, 0.76, wet);
        }`)},u.customProgramCacheKey=()=>`town-terrain-${i.vex}-${s.closeUp?1:0}`;const y=new Qt(f,u);y.receiveShadow=!0,y.name="terrain";const E=new Ke;return E.add(y,K_(i),Z_(i,n)),E.userData.detail=M,E}function $_(i){const t=[];for(let e=0;e<i.nx;e++)t.push([i.xMin+e*i.dx,i.zMin]);for(let e=1;e<i.nz;e++)t.push([i.xMax,i.zMin+e*i.dz]);for(let e=i.nx-2;e>=0;e--)t.push([i.xMin+e*i.dx,i.zMax]);for(let e=i.nz-2;e>=1;e--)t.push([i.xMin,i.zMin+e*i.dz]);return t}function K_(i){const t=$_(i),e=t.length,n=[],s=[],r=[],a=new Dt(9074780),o=new Dt(6180669),l=new Dt(3813673),c=[[0,a,o],[1,o,l]];for(let f=0;f<e;f++){const[u,m]=t[f],[x,p]=t[(f+1)%e],g=i.yAt(u,m),_=i.yAt(x,p),M=x-u,S=p-m,y=Math.hypot(M,S)||1,E=-S/y*-1,v=M/y*-1;for(const[b,R,A]of c){const O=b===0?g:g-6,z=b===0?g-6:Ps,I=b===0?_:_-6,Z=b===0?_-6:Ps;n.push(u,O,m,x,I,p,x,Z,p,u,O,m,x,Z,p,u,z,m);for(const H of[R,R,A,R,A,A])s.push(H.r,H.g,H.b);for(let H=0;H<6;H++)r.push(E,0,v)}}const h=new Re;h.setAttribute("position",new se(n,3)),h.setAttribute("normal",new se(r,3)),h.setAttribute("color",new se(s,3));const d=new Qt(h,new Je({vertexColors:!0,roughness:1,side:ye}));return d.name="skirt",d}function Z_(i,t){const e=new Ke,n=t.scale??1,s=W_*n,r=i.xMax-i.xMin+s*2,a=i.zMax-i.zMin+s*2,o=190*n,l=(i.xMin+i.xMax)/2,c=(i.zMin+i.zMax)/2,h=new Qt(new gi(r,o,a),new Je({color:1779245,roughness:.75,metalness:.1}));h.position.set(l,Ps-o/2,c),h.receiveShadow=!0,e.add(h);const d=document.createElement("canvas");d.width=2048,d.height=160;const f=d.getContext("2d");f.fillStyle="#1b262d",f.fillRect(0,0,d.width,d.height),f.fillStyle="#e9d9a6",f.textBaseline="middle",f.font="600 78px 'Space Grotesk', system-ui, sans-serif",f.fillText(t.title,40,84);const u=f.measureText(t.title).width;f.fillStyle="#9fb4bd",f.font="400 42px 'Space Grotesk', system-ui, sans-serif",f.fillText(t.subtitle,40+u+46,88);const m=new Er(d);m.colorSpace=be,m.anisotropy=8;const x=1700*n,p=new Qt(new ii(x,x*(d.height/d.width)),new ei({map:m,toneMapped:!1}));p.position.set(l-r/2+x/2+110*n,Ps-o/2,c+a/2+.6),e.add(p);const g=document.createElement("canvas");g.width=g.height=256;const _=g.getContext("2d");_.fillStyle="#e9d9a6",_.beginPath(),_.moveTo(128,18),_.lineTo(176,150),_.lineTo(128,122),_.lineTo(80,150),_.closePath(),_.fill(),_.font="700 86px 'Space Grotesk', system-ui, sans-serif",_.textAlign="center",_.fillText("N",128,240);const M=new Er(g);M.colorSpace=be;const S=new Qt(new ii(130*n,130*n),new ei({map:M,transparent:!0,toneMapped:!1}));return S.rotation.x=-Math.PI/2,S.position.set(i.xMax+s/2,Ps+.6,i.zMin+120*n),e.add(S),e}const il=128,J_=`
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
`;class Q_{constructor(t){ot(this,"jobs",new Map);ot(this,"order",[]);ot(this,"nextId",1);ot(this,"worker");ot(this,"onPage");ot(this,"longest",0);ot(this,"pieces",0);this.renderer=t,this.onPage=typeof Worker>"u"||new URLSearchParams(window.location.search).get("tileworker")==="0"}get busy(){return this.order.length>0}load(t,e=1){return new Promise((n,s)=>{const r=this.nextId++;this.jobs.set(r,{url:t,anisotropy:e,width:0,height:0,strips:[],cut:!1,sent:0,resolve:n,reject:s}),this.order.push(r);const a=new URL(t,document.baseURI).href;this.onPage?this.cutOnPage(r,a):this.cutOnWorker(r,a)})}cutOnWorker(t,e){try{this.worker||(this.worker=new Worker(URL.createObjectURL(new Blob([J_],{type:"text/javascript"}))),this.worker.onmessage=n=>{const s=n.data,r=this.jobs.get(s.id);r&&(s.error==="unsupported"?(this.onPage=!0,this.cutOnPage(s.id,new URL(r.url,document.baseURI).href)):s.error?r.failed=new Error(s.error):s.done?r.cut=!0:s.data?r.strips.push({y:s.y,h:s.h,data:new Uint8Array(s.data)}):(r.width=s.width,r.height=s.height))},this.worker.onerror=()=>{this.onPage=!0,this.worker=void 0;for(const[n,s]of this.jobs)!s.width&&!s.failed&&this.cutOnPage(n,new URL(s.url,document.baseURI).href)}),this.worker.postMessage({id:t,url:e,rows:il})}catch{this.onPage=!0,this.cutOnPage(t,e)}}async cutOnPage(t,e){const n=this.jobs.get(t);if(n)try{const s=await fetch(e);if(!s.ok)throw new Error(`HTTP ${s.status}`);const r=await createImageBitmap(await s.blob(),{imageOrientation:"flipY",premultiplyAlpha:"none",colorSpaceConversion:"none"});n.width=r.width,n.height=r.height;for(let a=0;a<r.height;a+=il){const o=Math.min(il,r.height-a),l=await createImageBitmap(r,0,a,r.width,o);if(!this.jobs.has(t))return l.close();n.strips.push({y:a,h:o,data:l})}r.close(),n.cut=!0}catch(s){n.failed=s instanceof Error?s:new Error(String(s))}}step(){var a;const t=this.order[0];if(t===void 0)return!1;const e=this.jobs.get(t);if(e.failed)return this.finish(t),(a=e.tex)==null||a.dispose(),e.reject(e.failed),this.busy;if(!e.width)return!0;const n=performance.now(),s=this.renderer.getContext(),r=this.renderer.state;if(e.tex){const o=this.renderer.properties.get(e.tex).__webglTexture;r.activeTexture(s.TEXTURE0),r.bindTexture(s.TEXTURE_2D,o);const l=e.strips.shift();l?(r.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE),l.data instanceof Uint8Array?s.texSubImage2D(s.TEXTURE_2D,0,0,l.y,e.width,l.h,s.RGBA,s.UNSIGNED_BYTE,l.data):(s.texSubImage2D(s.TEXTURE_2D,0,0,l.y,e.width,l.h,s.RGBA,s.UNSIGNED_BYTE,l.data),l.data.close()),e.sent+=l.h):e.cut&&e.sent>=e.height&&(s.generateMipmap(s.TEXTURE_2D),this.finish(t),e.resolve(e.tex))}else{const o=new vs(null,e.width,e.height,hn,je);o.colorSpace=be,o.wrapS=o.wrapT=on,o.magFilter=ke,o.minFilter=yn,o.generateMipmaps=!0,o.flipY=!1,o.anisotropy=e.anisotropy,o.source.dataReady=!1,o.needsUpdate=!0,this.renderer.initTexture(o),e.tex=o}return this.pieces++,this.longest=Math.max(this.longest,performance.now()-n),this.busy}finish(t){this.jobs.delete(t),this.order=this.order.filter(e=>e!==t)}dispose(){var t,e;(t=this.worker)==null||t.terminate();for(const n of this.jobs.values()){(e=n.tex)==null||e.dispose();for(const s of n.strips)s.data instanceof Uint8Array||s.data.close()}this.jobs.clear(),this.order=[]}}const j_=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,tx=`
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
}`;function ex(i,t){const e=i.w*i.h,n=new Uint16Array(e*2);for(let u=0;u<e;u++)n[u*2]=dc.toHalfFloat(i.raw[u]),n[u*2+1]=dc.toHalfFloat(i.exposure[u]);const s=new vs(n,i.w,i.h,$n,cn);s.minFilter=s.magFilter=ke,s.wrapS=s.wrapT=on,s.needsUpdate=!0;const r={tField:{value:s},uSize:{value:new Ut(i.sizeX,i.sizeZ)},uTide:t,uTime:{value:0},uSunDir:{value:new $(.4,.8,.3).normalize()},uSunColor:{value:new Dt(16773848)},uShallow:{value:new Dt(7129789)},uDeep:{value:new Dt(937848)},uSky:{value:new Dt(12573938)},uFoam:{value:1}},a=new kn({uniforms:r,vertexShader:j_,fragmentShader:tx,transparent:!0,depthWrite:!1}),o=new ii(i.xMax-i.xMin,i.zMax-i.zMin);o.rotateX(-Math.PI/2);const l=new Qt(o,a);l.position.set((i.xMin+i.xMax)/2,t.value*i.vex,(i.zMin+i.zMax)/2),l.renderOrder=2,l.name="water";const c=new Qt(new Re,new ei({color:1929103,transparent:!0,opacity:.8,side:ye,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));c.renderOrder=1,c.name="water-edge";const h=[];for(let u=0;u<i.nx;u++)h.push([i.xMin+u*i.dx,i.zMin]);for(let u=1;u<i.nz;u++)h.push([i.xMax,i.zMin+u*i.dz]);for(let u=i.nx-2;u>=0;u--)h.push([i.xMin+u*i.dx,i.zMax]);for(let u=i.nz-2;u>=1;u--)h.push([i.xMin,i.zMin+u*i.dz]);const d=h.map(([u,m])=>i.yAt(u,m)),f=u=>{t.value=u;const m=u*i.vex;l.position.y=m;const x=[],p=h.length;for(let _=0;_<p;_++){const M=(_+1)%p,S=d[_],y=d[M];if(S>=m&&y>=m)continue;const[E,v]=h[_],[b,R]=h[M],A=Math.min(S,m),D=Math.min(y,m);x.push(E,m,v,b,m,R,b,D,R,E,m,v,b,D,R,E,A,v)}c.geometry.dispose();const g=new Re;g.setAttribute("position",new se(x,3)),c.geometry=g};return f(t.value),{mesh:l,skirt:c,uniforms:r,setTide:f}}function Br(i){const t=i.length/2;let e={cx:0,cz:0,w:0,d:0,heading:0,area:1/0};for(let n=0;n<t;n++){const s=(n+1)%t;let r=i[s*2]-i[n*2],a=i[s*2+1]-i[n*2+1];const o=Math.hypot(r,a);if(o<.5)continue;r/=o,a/=o;let l=1/0,c=-1/0,h=1/0,d=-1/0;for(let u=0;u<t;u++){const m=i[u*2],x=i[u*2+1],p=m*r+x*a,g=-m*a+x*r;p<l&&(l=p),p>c&&(c=p),g<h&&(h=g),g>d&&(d=g)}const f=(c-l)*(d-h);if(f<e.area){const u=(l+c)/2,m=(h+d)/2;e={cx:u*r-m*a,cz:u*a+m*r,w:c-l,d:d-h,heading:Math.atan2(-a,r),area:f}}}return e}function nx(i,t){const e=i.length/2,n=$o(i)>0?1:-1,s=[];for(let r=0;r<e;r++){const a=(r+e-1)%e,o=(r+1)%e;let l=i[r*2]-i[a*2],c=i[r*2+1]-i[a*2+1],h=i[o*2]-i[r*2],d=i[o*2+1]-i[r*2+1];const f=Math.hypot(l,c)||1,u=Math.hypot(h,d)||1;l/=f,c/=f,h/=u,d/=u;const m=-c*n,x=l*n,p=-d*n,g=h*n;let _=m+p,M=x+g;const S=Math.hypot(_,M)||1;_/=S,M/=S;const y=t/Math.max(.4,_*m+M*x);s.push(i[r*2]+_*y,i[r*2+1]+M*y)}return s}function kr(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Int16Array(e.buffer,0,e.length>>1)}async function Uh(i){const t=new Uint8Array(i),e=new DataView(i);let n=8,s=0,r=0,a=0,o=0,l=0;const c=[];for(;n<t.length;){const x=e.getUint32(n),p=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]);if(p==="IHDR")s=e.getUint32(n+8),r=e.getUint32(n+12),a=t[n+16],o=t[n+17],l=t[n+20];else if(p==="IDAT")c.push(t.subarray(n+8,n+8+x));else if(p==="IEND")break;n+=12+x}if(a!==8||o!==2&&o!==6||l)throw new Error("Unsupported terrain image format");const h=o===2?3:4,d=new Blob(c).stream().pipeThrough(new DecompressionStream("deflate")),f=new Uint8Array(await new Response(d).arrayBuffer()),u=s*h,m=new Uint8Array(u*r);for(let x=0;x<r;x++){const p=f[x*(u+1)],g=x*(u+1)+1,_=x*u;for(let M=0;M<u;M++){const S=M>=h?m[_+M-h]:0,y=x>0?m[_-u+M]:0,E=M>=h&&x>0?m[_-u+M-h]:0;let v=f[g+M];if(p===1)v+=S;else if(p===2)v+=y;else if(p===3)v+=S+y>>1;else if(p===4){const b=Math.abs(y-E),R=Math.abs(S-E),A=Math.abs(S+y-2*E);v+=b<=R&&b<=A?S:R<=A?y:E}m[_+M]=v&255}}return{width:s,height:r,channels:h,data:m}}function ix(i,t,e){const n=i.width*i.height,s=new Float32Array(n);for(let r=0;r<n;r++)s[r]=(i.data[r*i.channels]<<8|i.data[r*i.channels+1])/t-e;return s}const Ds=4,an=7;function Fh(i){return i.colorSpace=be,i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=yn,i}async function sx(i,t,e){let n=0;const s=c=>t(++n/4,c);t(0,"Fetching map data");const[r,a,o]=await Promise.all([fetch(i.town,{signal:e}).then(c=>{if(!c.ok)throw new Error("Could not load the suburb data");return c.json()}).then(c=>(s("Streets and buildings"),c)),fetch(i.height,{signal:e}).then(c=>{if(!c.ok)throw new Error("Could not load the terrain");return c.arrayBuffer()}).then(Uh).then(c=>(s("Terrain"),c)),new Oc().loadAsync(i.ground).then(c=>(s("Ground texture"),c))]),l=r.meta;return s("Building the model"),{town:{...r,buildings:kr(r.buildings),cars:kr(r.cars),trees:kr(r.trees),fences:r.fences?kr(r.fences):new Int16Array(0)},heights:ix(a,l.heightScale,l.heightOffset),ground:Fh(o)}}async function rx(i){return Fh(await new Oc().loadAsync(i))}const Oh=[16052712,15327951,14673377,13621459,13095900,15129023,12174512,10990520,15786948,14273976,9413530,7307142].map(nt),zh=[10510922,9394760,12158570,13215107,10120021,13807756].map(nt),Bh=[14276300,13224130,14999506,12567492,13682872,11909302,15328988].map(nt),kh=[13619916,12173748,14275778,10135200,9279388].map(nt),ax=nt(3163994),Gh=nt(16053230),ox=nt(11120304),lx=nt(7300956),Hh=nt(12566714),Gr=.05,cx=0,Is=1,Ns=2,Hr=new Dt;function Vh(i,t,e){return Hr.setRGB(i/255,t/255,e/255,be),[Hr.r,Hr.g,Hr.b]}function hx(i,t,e,n,s){const{cx:r,cz:a,hw:o,hd:l}=t,c=Gt(s,.88);if(o>=l){const h=o-l;i.quad(r-o,e,a+l,r+o,e,a+l,r+h,e+n,a,r-h,e+n,a,s),i.quad(r+o,e,a-l,r-o,e,a-l,r-h,e+n,a,r+h,e+n,a,s),i.tri(r+o,e,a+l,r+o,e,a-l,r+h,e+n,a,c),i.tri(r-o,e,a-l,r-o,e,a+l,r-h,e+n,a,c)}else{const h=l-o;i.quad(r+o,e,a+l,r+o,e,a-l,r,e+n,a-h,r,e+n,a+h,s),i.quad(r-o,e,a-l,r-o,e,a+l,r,e+n,a+h,r,e+n,a-h,s),i.tri(r-o,e,a+l,r+o,e,a+l,r,e+n,a+h,c),i.tri(r+o,e,a-l,r-o,e,a-l,r,e+n,a-h,c)}}function Wh(i,t,e,n,s,r,a){const{cx:o,cz:l,hw:c,hd:h}=t;if(c>=h){const d=s*n/h;i.quad(o-c-s,e-d,l+h+s,o+c+s,e-d,l+h+s,o+c+s,e+n,l,o-c-s,e+n,l,r),i.quad(o+c+s,e-d,l-h-s,o-c-s,e-d,l-h-s,o-c-s,e+n,l,o+c+s,e+n,l,r),i.tri(o+c,e,l+h,o+c,e,l-h,o+c,e+n,l,a),i.tri(o-c,e,l-h,o-c,e,l+h,o-c,e+n,l,a)}else{const d=s*n/c;i.quad(o+c+s,e-d,l+h+s,o+c+s,e-d,l-h-s,o,e+n,l-h-s,o,e+n,l+h+s,r),i.quad(o-c-s,e-d,l-h-s,o-c-s,e-d,l+h+s,o,e+n,l+h+s,o,e+n,l-h-s,r),i.tri(o-c,e,l+h,o+c,e,l+h,o,e+n,l+h,a),i.tri(o+c,e,l-h,o-c,e,l-h,o,e+n,l-h,a)}}const ux=1,fx=2,Vr=nt(1846090);function dx(i,t,e,n,s,r){const a=t.hw>=t.hd,o=(a?t.hd:t.hw)+s,l=(a?t.hw:t.hd)-(a?t.hd:t.hw)*.55,c=Math.min(Math.max(l,1.2),3.2),h=a?Math.cos(r)<0?1:-1:Math.sin(r)>0?1:-1,d=.28,f=.74,u=.1,m=h*o*(1-d),x=h*o*(1-f),p=e+n*d+u,g=e+n*f+u;a?h>0?i.quad(t.cx-c,p,t.cz+m,t.cx+c,p,t.cz+m,t.cx+c,g,t.cz+x,t.cx-c,g,t.cz+x,Vr):i.quad(t.cx+c,p,t.cz+m,t.cx-c,p,t.cz+m,t.cx-c,g,t.cz+x,t.cx+c,g,t.cz+x,Vr):h>0?i.quad(t.cx+m,p,t.cz+c,t.cx+m,p,t.cz-c,t.cx+x,g,t.cz-c,t.cx+x,g,t.cz+c,Vr):i.quad(t.cx+m,p,t.cz-c,t.cx+m,p,t.cz+c,t.cx+x,g,t.cz+c,t.cx+x,g,t.cz-c,Vr)}function Xh(i,t,e){let n=!1;const s=i.length/2;for(let r=0,a=s-1;r<s;a=r++){const o=i[r*2],l=i[r*2+1],c=i[a*2],h=i[a*2+1];l>e!=h>e&&t<(c-o)*(e-l)/(h-l)+o&&(n=!n)}return n}function px(i,t,e){const n=Math.max(.5,Math.max(t,e)/64),s=Math.max(1,Math.round(t/n)),r=Math.max(1,Math.round(e/n)),a=t/s,o=e/r,l=new Uint8Array(s*r);let c=0;for(let u=0;u<r;u++)for(let m=0;m<s;m++)Xh(i,-t/2+(m+.5)*a,-e/2+(u+.5)*o)&&(l[u*s+m]=1,c++);if(!c)return null;const h=[],d=new Int32Array(s);let f=0;for(let u=0;u<3;u++){d.fill(0);let m=0,x=0,p=0,g=0,_=0;for(let y=0;y<r;y++){for(let v=0;v<s;v++)d[v]=l[y*s+v]?d[v]+1:0;const E=[];for(let v=0;v<=s;v++){const b=v<s?d[v]:0;for(;E.length&&d[E[E.length-1]]>=b;){const R=d[E.pop()],A=E.length?E[E.length-1]+1:0;R*(v-A)>m&&(m=R*(v-A),x=A,p=v-1,g=y-R+1,_=y)}E.push(v)}}const M=(p-x+1)*a,S=(_-g+1)*o;if(!m||M<2.4||S<2.4||u>0&&M*S<9)break;h.push({cx:-t/2+(x+p+1)/2*a,cz:-e/2+(g+_+1)/2*o,hw:M/2,hd:S/2}),f+=m;for(let y=g;y<=_;y++)l.fill(0,y*s+x,y*s+p+1)}return h.length&&f/c>=.7?h:null}function mx(i,t,e,n,s,r,a,o,l,c=0,h=!1){const d=e.length/2;let f=1/0,u=-1/0,m=0,x=0;for(let H=0;H<d;H++){const q=t.yAt(e[H*2],e[H*2+1]);q<f&&(f=q),q>u&&(u=q),m+=e[H*2],x+=e[H*2+1]}m/=d,x/=d;const p=Math.min(u,Math.max(f,t.yAt(m,x)))+.1,g=Math.max(n,p+(a===Is?2.1:2.4),u+1.5),_=g-p,M=Math.max(0,s-g),S=Math.abs($o(e)),y=Br(e),E=S/(y.w*y.d||1),v=Math.min(y.w,y.d)/2,[b,R,A]=r;let D=Vh(b,R,A);const O=b>R*1.2&&b>A*1.35&&b>105;let z;a===Ns?z=Bh[Math.floor(l()*Bh.length)]:a===Is?z=l()<.45?Ki(D,Gh,.35):kh[Math.floor(l()*kh.length)]:z=O&&l()<.6?zh[Math.floor(l()*zh.length)]:Oh[Math.floor(l()*Oh.length)],o||(z=Ki(z,Hh,.3),D=Ki(D,Hh,.3)),i.frame(0,p,0,0);const I=a===cx&&_>=4.4&&_<6.6?_-2.75:0;if(I?(i.walls(e,f-p-.3,I-.22,Ki(Gt(z,.5),lx,.5)),i.walls(e,I-.22,I,Gh),i.walls(e,I,_,z)):i.walls(e,f-p-.3,_,z),M<.7||a===Ns&&(M<1.3||E<.78))if(a===Ns){i.cap(e,_-.05,D),i.walls(e,_-.05,_+.45,Gt(z,.96));const H=Math.min(5,Math.floor(S/350)),q=Math.cos(y.heading),k=Math.sin(y.heading);for(let F=0;F<H;F++){const G=(l()-.5)*y.w*.5,Q=(l()-.5)*y.d*.5,Y=y.cx+G*q+Q*k,vt=y.cz-G*k+Q*q;i.box(Y-1.1,_,vt-.8,Y+1.1,_+.9,vt+.8,ox)}}else i.cap(e,_,D);else if(a===Ns)i.frame(y.cx,p,y.cz,y.heading),Wh(i,{cx:0,cz:0,hw:y.w/2,hd:y.d/2},_,Math.min(M,v*.45),.3,D,z);else{const H=Math.cos(y.heading),q=Math.sin(y.heading);let k;if(E>=.86)k=[{cx:0,cz:0,hw:y.w/2,hd:y.d/2}];else{const F=[];for(let G=0;G<d;G++){const Q=e[G*2]-y.cx,Y=e[G*2+1]-y.cz;F.push(Q*H-Y*q,Q*q+Y*H)}k=px(F,y.w,y.d)}if(k){i.cap(e,_-.02,Gt(D,.9)),i.frame(y.cx,p,y.cz,y.heading);const F=Math.min(k[0].hw,k[0].hd),G=Math.min(Math.max(M,.6),F*.95),Q=a===Is?.2:.4;k.forEach((Y,vt)=>{const j=Math.min(Y.hw,Y.hd),lt=vt===0?G:Math.max(.4,G*j/F),ft=l()<(a===Is?.7:.36),dt=k.length===1&&(c===fx||c!==ux&&ft);dt?Wh(i,Y,_,lt,Q,D,z):hx(i,{cx:Y.cx,cz:Y.cz,hw:Y.hw+Q,hd:Y.hd+Q},_,lt*(j+Q)/j,D),vt===0&&h&&dx(i,Y,_,dt?lt:lt*(j+Q)/j,dt?0:Q,y.heading)})}else{const F=nx(e,Math.min(2.4,Math.sqrt(S)*.2)),G=Math.min(M,1.6);for(let Q=0;Q<d;Q++){const Y=(Q+1)%d;i.quad(e[Q*2],_,e[Q*2+1],e[Y*2],_,e[Y*2+1],F[Y*2],_+G,F[Y*2+1],F[Q*2],_+G,F[Q*2+1],D)}i.cap(F,_+G,Gt(D,1.04))}}if(a!==Is&&S<2500){const H=I?1:Math.min(12,Math.max(1,Math.round(_/3))),q=a===Ns?4.4:3.4;for(let k=0;k<d;k++){const F=(k+1)%d,G=e[k*2],Q=e[k*2+1],Y=e[F*2],vt=e[F*2+1],j=Math.hypot(Y-G,vt-Q);if(j<3.2)continue;let lt=-(vt-Q)/j,ft=(Y-G)/j;lt*((G+Y)/2-m)+ft*((Q+vt)/2-x)<0&&(lt=-lt,ft=-ft);const dt=Math.atan2(lt,ft),pt=(Y-G)*Math.cos(dt)-(vt-Q)*Math.sin(dt);i.frame(pt>0?G:Y,p,pt>0?Q:vt,dt);const ht=Math.floor(j/q);for(let kt=0;kt<H;kt++){const it=I+kt*3+.9;if(it+1.3>_-.2)break;for(let gt=0;gt<ht;gt++){const At=(gt+.5)/ht*j;i.quad(At-.8,it,Gr,At+.8,it,Gr,At+.8,it+1.3,Gr,At-.8,it+1.3,Gr,ax,l()<.45?1:0)}}}}i.frame()}function gx(i,t,e=[],n=()=>!1){const s=new Ke;s.name="buildings";const r=Qi(),a=560,o=i.buildings,l=e.map(()=>{}),c=u=>{const m=o[u],x=new Array(m*2);for(let p=0;p<m*2;p++)x[p]=o[u+an+p]/10;return x},h=new Map;let d=0;for(let u=0;u<o.length;u+=an+o[u]*2){const m=o[u+an]/10,x=o[u+an+1]/10;if(n(m,x))continue;const p=e.findIndex(([M,S],y)=>!l[y]&&Math.abs(M-m)<60&&Math.abs(S-x)<60&&Xh(c(u),M,S));if(p>=0){l[p]={poly:c(u),eave:o[u+1]/10,ridge:o[u+2]/10,roof:Vh(o[u+3],o[u+4],o[u+5])},d++;continue}const g=`${Math.floor(m/a)}:${Math.floor(x/a)}`;let _=h.get(g);_||h.set(g,_=[]),_.push(u,d++)}let f=0;for(const u of h.values()){const m=new _e;for(let p=0;p<u.length;p+=2){const g=u[p];mx(m,t,c(g),o[g+1]/10,o[g+2]/10,[o[g+3],o[g+4],o[g+5]],o[g+6]&3,(o[g+6]&4)!==0,Zi(u[p+1]*7919+13),o[g+6]>>3&3,(o[g+6]&32)!==0)}f+=m.vertexCount/3;const x=new Qt(m.build(),r);x.castShadow=!0,x.receiveShadow=!0,s.add(x)}return{group:s,count:d,triangles:f,reserved:l}}const Wr=[{id:"6-beaudesert",house:[-27.5256631,153.0234391],street:[-27.5256287,153.0231545],lot:[[-27.5255518,153.0232401],[-27.5256698,153.0239981],[-27.5258215,153.0239682],[-27.525709,153.0231799]],roof:{ridgeBack:.62,frontGable:.83},walls:15261900,trim:16184558,path:[[-27.5256352,153.0232183],[-27.5256631,153.0233586]],driveway:[[-27.5256955,153.0231869],[-27.5257016,153.0232912],[-27.5257188,153.0233652],[-27.5257249,153.0234027]],fences:[{kind:"picket",height:1.05,pts:[[-27.5255562,153.0232457],[-27.5256803,153.0231991]],gate:[-27.5256352,153.0232168]},{kind:"paling",height:1,pts:[[-27.5255562,153.0232457],[-27.5255775,153.0233869]]},{kind:"paling",height:1.6,pts:[[-27.5255775,153.0233869],[-27.5256682,153.023989]]},{kind:"paling",height:1.2,pts:[[-27.5257208,153.0232735],[-27.525739,153.0234028]]},{kind:"paling",height:1.6,pts:[[-27.525739,153.0234028],[-27.525818,153.0239647]]},{kind:"paling",height:1.7,pts:[[-27.5256682,153.023989],[-27.525818,153.0239647]]}],clothesline:[-27.5256955,153.0236194],planters:[{at:[-27.5256844,153.0235368],along:1,across:2},{at:[-27.5257603,153.0236432],along:1.4,across:.8},{at:[-27.5257644,153.023671],along:1.4,across:.8},{at:[-27.5257669,153.0236964],along:1.4,across:.8}],beds:[{at:[-27.5255689,153.0232533],r:.9}],shrubs:[[-27.5256793,153.0232558],[-27.5256803,153.0232811],[-27.5256768,153.0232963]]}],_x=nt(3163994),qh=nt(13815234),xx=nt(2828068),Yh=nt(14867920),Xr=nt(10126440),vx=nt(9405814),$h=nt(10133668),Mx=nt(4151915),Kh=nt(9077624),Sx=nt(12894648),yx=nt(10721922),Zh=nt(7575375),Jh=nt(7904595),Qh=nt(7033664),sl=nt(4157490),rl=nt(8368216),bx=nt(5062451),Ex=2.75,jh=.45;function qr(i,t,e,n){const s=t[3]-t[0],r=t[4]-t[1],a=t[5]-t[2],o=t[6]-t[0],l=t[7]-t[1],c=t[8]-t[2];let h=r*c-a*l,d=s*l-r*o;const f=Math.hypot(h,d)||1;h=h/f*e,d=d/f*e,i.quad(t[0]+h,t[1],t[2]+d,t[3]+h,t[4],t[5]+d,t[6]+h,t[7],t[8]+d,t[9]+h,t[10],t[11]+d,n),i.quad(t[9]-h,t[10],t[11]-d,t[6]-h,t[7],t[8]-d,t[3]-h,t[4],t[5]-d,t[0]-h,t[1],t[2]-d,n)}function tu(i,t,e,n,s,r){const a=[e[0][0],e[0][1]];for(let c=1;c<e.length;c++){const[h,d]=e[c-1],[f,u]=e[c],m=Math.max(1,Math.ceil(Math.hypot(f-h,u-d)/1.2));for(let x=1;x<=m;x++)a.push(h+(f-h)*x/m,d+(u-d)*x/m)}const o=a.length/2;let l=null;for(let c=0;c<o;c++){const h=Math.max(0,c-1),d=Math.min(o-1,c+1);let f=a[d*2]-a[h*2],u=a[d*2+1]-a[h*2+1];const m=Math.hypot(f,u)||1;f/=m,u/=m;const x=a[c*2]+u*n,p=a[c*2+1]-f*n,g=a[c*2]-u*n,_=a[c*2+1]+f*n,M=[x,t.yAt(x,p)+s,p,g,t.yAt(g,_)+s,_];l&&i.quad(l[0],l[1],l[2],l[3],l[4],l[5],M[3],M[4],M[5],M[0],M[1],M[2],r),l=M}}function wx(i,t,[e,n,s,r],a){const o=Math.hypot(n[0]-e[0],n[1]-e[1]),l=Math.hypot(r[0]-e[0],r[1]-e[1]),c=Math.ceil(o/.8),h=Math.ceil(l/1.5),d=(f,u)=>{const m=e[0]+(n[0]-e[0])*f,x=e[1]+(n[1]-e[1])*f,p=r[0]+(s[0]-r[0])*f,g=r[1]+(s[1]-r[1])*f,_=m+(p-m)*u,M=x+(g-x)*u;return[_,t.yAt(_,M)+a,M]};for(let f=0;f<c;f++)for(let u=0;u<h;u++){const m=d(f/c,u/h),x=d(f/c,(u+1)/h),p=d((f+1)/c,(u+1)/h),g=d((f+1)/c,u/h);(x[0]-m[0])*(g[2]-m[2])-(x[2]-m[2])*(g[0]-m[0])<0?i.quad(m[0],m[1],m[2],x[0],x[1],x[2],p[0],p[1],p[2],g[0],g[1],g[2],f%2?Zh:Jh):i.quad(m[0],m[1],m[2],g[0],g[1],g[2],p[0],p[1],p[2],x[0],x[1],x[2],f%2?Zh:Jh)}}function Yr(i,t,e,n,s,r,a){const o=Math.hypot(n[0]-e[0],n[1]-e[1]);if(o<.3)return;const l=Math.max(1,Math.round(o/2.4)),c=Math.atan2(n[0]-e[0],n[1]-e[1]),h=r==="picket"?a:vx,d=m=>{const x=e[0]+(n[0]-e[0])*m,p=e[1]+(n[1]-e[1])*m;return[x,t.yAt(x,p),p]};for(let m=0;m<=l;m++){const[x,p,g]=d(m/l);i.frame(x,p,g,c),i.box(-.06,0,-.06,.06,s+.1,.06,Gt(h,.92))}i.frame();const f=(m,x,p,g,_,M)=>{const S=d(m),y=d(x);qr(i,[S[0],S[1]+p,S[2],y[0],y[1]+p,y[2],y[0],y[1]+g,y[2],S[0],S[1]+g,S[2]],M,_)};if(r==="paling"){for(let m=0;m<l;m++)f(m/l,(m+1)/l,.05,s,h,.02);return}for(const m of[.25,s-.2])f(0,1,m,m+.08,Gt(h,.95),.02);const u=Math.floor(o/.16);for(let m=0;m<u;m++)f((m+.2)/u,(m+.75)/u,.08,s,h,.035)}function Tx(i,t,e,n,s){i.frame(t,e,n,s),i.box(-.035,0,-.035,.035,2.05,.035,$h);for(const[r,a]of[[1,0],[0,1],[-1,0],[0,-1]]){const o=Math.abs(a)*.025,l=Math.abs(r)*.025;i.box(Math.min(0,r*2.1)-o,2,Math.min(0,a*2.1)-l,Math.max(0,r*2.1)+o,2.05,Math.max(0,a*2.1)+l,$h)}for(const r of[.8,1.4,2]){const a=[[r,0],[0,r],[-r,0],[0,-r]];for(let o=0;o<4;o++){const[l,c]=a[o],[h,d]=a[(o+1)%4],f=Math.hypot(h-l,d-c),u=-(d-c)/f*.015,m=(h-l)/f*.015;i.quad(l-u,2.06,c-m,l+u,2.06,c+m,h+u,2.06,d+m,h-u,2.06,d-m,nt(15132386))}}i.frame()}function eu(i,t,e,n,s,r,a,o,l,c){const h=o-l,d=Math.max(2,Math.round(h/.185)),f=.27,u=d*f;for(let p=1;p<=d;p++){const g=o-h*p/d,_=t+n*f*(p-1),M=e+s*f*(p-1),S=t+n*f*p,y=e+s*f*p;i.box(Math.min(_,S,_+r,S+r),g-.05,Math.min(M,y,M+a,y+a),Math.max(_,S,_+r,S+r),g,Math.max(M,y,M+a,y+a),Xr)}const m=t+n*u,x=e+s*u;for(const p of[0,1]){const g=r*p,_=a*p;qr(i,[t+g,o-.3,e+_,m+g,l-.3,x+_,m+g,l,x+_,t+g,o,e+_],.025,c),qr(i,[t+g,o+.9,e+_,m+g,l+.9,x+_,m+g,l+.97,x+_,t+g,o+.97,e+_],.025,c);for(const M of[0,.5,1]){const S=t+g+n*u*M,y=e+_+s*u*M,E=o-h*M;i.box(S-.035,E,y-.035,S+.035,E+.95,y+.035,c,null)}}return[m+r/2,x+a/2]}function Ax(i,t,e,n,s){const r=Br(e.poly);let a=r.heading,o=r.w,l=r.d,c=-1/0;for(let it=0;it<4;it++){const gt=r.heading+it*Math.PI/2,At=Math.sin(gt)*(n[0]-r.cx)+Math.cos(gt)*(n[1]-r.cz);At>c&&(c=At,a=gt,o=it%2?r.d:r.w,l=it%2?r.w:r.d)}let h=1/0,d=-1/0;for(let it=0;it<e.poly.length;it+=2){const gt=t.yAt(e.poly[it],e.poly[it+1]);h=Math.min(h,gt),d=Math.max(d,gt)}const f=Math.min(d,Math.max(h,t.yAt(r.cx,r.cz))),u=Math.max(e.eave-f,2.6),m=Math.max(e.ridge-e.eave,.8),x=Math.max(.3,u-Ex),p=o/2,g=l/2,_=p-jh,M=g-jh,S=nt(s.walls),y=nt(s.trim),E=e.roof,v=h-f-.3,b=Math.max(.16,d-f+.14);if(i.frame(r.cx,f,r.cz,a),i.box(-_,v,-M,_,b,M,Kh,Kh),x>1.2){i.box(-_+.3,b,-M+.3,_-.3,x-.3,M-.3,xx,null);const it=gt=>{const At=Math.max(2,Math.round(gt*2/2.2)+1);return Array.from({length:At},(Ot,Vt)=>-gt+.1+(gt*2-.2)*Vt/(At-1))};for(const gt of it(_))for(const At of[-M+.1,M-.1])i.box(gt-.1,v,At-.1,gt+.1,x-.28,At+.1,qh,null);for(const gt of it(M))for(const At of[-_+.1,_-.1])i.box(At-.1,v,gt-.1,At+.1,x-.28,gt+.1,qh,null);for(let gt=-_+.3;gt<_-.3;gt+=.22)for(const At of[M-.04,-M+.01])i.box(gt,b+.1,At,gt+.12,x-.3,At+.03,Yh,null);for(let gt=-M+.3;gt<M-.3;gt+=.22)for(const At of[_-.04,-_+.01])i.box(At,b+.1,gt,At+.03,x-.3,gt+.12,Yh,null)}i.box(-_-.03,x-.28,-M-.03,_+.03,x,M+.03,y,null);for(let it=x,gt=0;it<u-.01;it+=.28,gt++)i.box(-_,it,-M,_,Math.min(it+.28,u),M,gt%2?Gt(S,.955):S,null);for(const it of[-_,_])for(const gt of[-M,M])i.box(it-.07,x,gt-.07,it+.07,u,gt+.07,y,null);const R=(it,gt,At)=>i.frame(i.wx(it,gt),f,i.wz(it,gt),a+At),A=(it,gt,At)=>{const Ot=x+.95,Vt=x+2.15;i.quad(it-gt/2,Ot,.04,it+gt/2,Ot,.04,it+gt/2,Vt,.04,it-gt/2,Vt,.04,_x,At?1:0),i.box(it-gt/2-.07,Ot-.07,0,it+gt/2+.07,Ot,.07,y),i.box(it-gt/2-.07,Vt,0,it+gt/2+.07,Vt+.07,.07,y);for(const oe of[it-gt/2-.07,it+gt/2,it-.025])i.box(oe,Ot,0,oe+(oe===it-.025?.05:.07),Vt,.06,y,null);i.quad(it-gt/2-.15,Vt+.12,.55,it+gt/2+.15,Vt+.12,.55,it+gt/2+.15,Vt+.42,.02,it-gt/2-.15,Vt+.42,.02,Gt(E,.94))},D=it=>{i.quad(it-.45,x,.04,it+.45,x,.04,it+.45,x+2.05,.04,it-.45,x+2.05,.04,Mx),i.box(it-.52,x+2.05,0,it+.52,x+2.12,.06,y)},O=[[-_,M,0,_*2],[_,M,Math.PI/2,M*2],[_,-M,Math.PI,_*2],[-_,-M,-Math.PI/2,M*2]],[z,I,Z,H]=O,q=(it,gt)=>{i.frame(r.cx,f,r.cz,a),R(it[0],it[1],it[2]),gt(it[3]),i.frame(r.cx,f,r.cz,a)};q(z,it=>{D(1),A(it*.48,1.7,!0),A(it*.8,1.7,!1)});for(const it of[I,H])q(it,gt=>{for(let At=0;At<4;At++)A(gt*(.14+At*.24),1.4,At%2===(it===I?0:1))});q(Z,it=>{A(it*.28,1.6,!1),A(it*.56,1.6,!0),D(it-1)});const k=-_+.15,F=-_+1.85,G=M+1.25;i.box(k,x-.14,M,F,x,G,Xr);for(const it of[k+.05,F-.05])i.box(it-.05,0,G-.1,it+.05,x+2.3,G,y,null);i.box(k,x+.12,G-.05,F,x+.98,G,y,null),i.box(k,x+.12,M,k+.05,x+.98,G,y,null),i.quad(k-.15,x+2.3,G+.2,F+.15,x+2.3,G+.2,F+.15,x+2.6,M,k-.15,x+2.6,M,Gt(E,.96));const Q=eu(i,F,M+.12,1,0,0,1,x,.1,y),Y=-_+.2,vt=-_+1.9,j=-M-1.2;i.box(Y,x-.14,j,vt,x,-M,Xr);for(const it of[Y+.05,vt-.05])i.box(it-.05,0,j,it+.05,x+.98,j+.1,y,null);i.box(Y,x+.12,j,Y+.05,x+.98,-M,y,null),i.box(vt-.05,x+.12,j,vt,x+.98,-M,y,null),i.box(-_+.1,u-.45,-M-1.4,_-1.4,u-.37,-M,Gt(E,.97),void 0,y),eu(i,Y+.3,j,0,-1,1,0,x,.1,y);const lt=g-s.roof.ridgeBack*l,ft=u+m,dt=u+m*s.roof.frontGable,pt=g-s.roof.frontGable*(g-lt);i.quad(-p,u-.02,g,-p,u-.02,-g,p,u-.02,-g,p,u-.02,g,y),i.tri(-p,u,g,0,dt,g,0,dt,pt,E),i.tri(p,u,g,0,dt,pt,0,dt,g,E),i.quad(-p,u,g,0,dt,pt,0,ft,lt,-p,ft,lt,E),i.quad(p,u,g,p,ft,lt,0,ft,lt,0,dt,pt,E),i.quad(-p,ft,lt,p,ft,lt,p,u,-g,-p,u,-g,E),i.tri(-_,u,M,_,u,M,0,dt,M,S),i.quad(-.3,dt-.75,M+.03,.3,dt-.75,M+.03,.3,dt-.4,M+.03,-.3,dt-.4,M+.03,Gt(S,.6)),i.tri(-_,u,M,-_,ft,lt,-_,u,-M,S),i.tri(_,u,-M,_,ft,lt,_,u,M,S);const ht=(it,gt,At,Ot,Vt,oe)=>qr(i,[it,gt-.22,At,Ot,Vt-.22,oe,Ot,Vt-.03,oe,it,gt-.03,At],.02,y);ht(-p,u,g,0,dt,g),ht(0,dt,g,p,u,g);for(const it of[-p,p])ht(it,u,g,it,ft,lt),ht(it,ft,lt,it,u,-g);i.box(-p,u-.12,-g-.1,p,u,-g,y);const kt=[i.wx(Q[0],Q[1]),i.wz(Q[0],Q[1])];return i.frame(),kt}function Rx(i,t){const e=Wr.flatMap((n,s)=>{const r=t[s];if(!r)return[];const a=Br(r.poly),o=c=>Gn(i,c[0],c[1]),l=[a.cx,a.cz];return[{obb:a,lines:[[...n.path.map(o),l],n.driveway.map(o)]}]});return(n,s)=>{for(const{obb:r,lines:a}of e){if(Math.abs(n-r.cx)>80||Math.abs(s-r.cz)>80)continue;const o=Math.cos(r.heading),l=Math.sin(r.heading),c=n-r.cx,h=s-r.cz;if(Math.abs(c*o-h*l)<r.w/2+1&&Math.abs(c*l+h*o)<r.d/2+1)return!0;for(const d of a)for(let f=1;f<d.length;f++){const[u,m]=d[f-1],[x,p]=d[f],g=Math.max(0,Math.min(1,((n-u)*(x-u)+(s-m)*(p-m))/((x-u)**2+(p-m)**2||1)));if(Math.hypot(n-u-(x-u)*g,s-m-(p-m)*g)<1.8)return!0}}return!1}}function Cx(i){const t=Wr.map(e=>e.lot.map(n=>Gn(i,n[0],n[1])));return(e,n)=>t.some(s=>{let r=!1,a=!1;for(let o=0,l=s.length-1;o<s.length;l=o++){const[c,h]=s[o],[d,f]=s[l];h>n!=f>n&&e<(d-c)*(n-h)/(f-h)+c&&(r=!r);const u=Math.max(0,Math.min(1,((e-c)*(d-c)+(n-h)*(f-h))/((d-c)**2+(f-h)**2||1)));Math.hypot(e-c-(d-c)*u,n-h-(f-h)*u)<2.5&&(a=!0)}return r||a})}function Px(i){return Wr.map(t=>Gn(i,t.house[0],t.house[1]))}function Lx(i,t,e){const n=new _e,s=new _e,r=h=>Gn(i,h[0],h[1]);Wr.forEach((h,d)=>{const f=e[d];if(!f)return;const u=h.lot.map(r),m=nt(h.trim),x=Math.atan2(u[1][0]-u[0][0],u[1][1]-u[0][1]);wx(s,t,u,.1);const p=Ax(n,t,f,r(h.street),h);tu(s,t,[...h.path.map(r),p],.45,.16,Sx);const g=h.driveway.map(r);for(const _ of[-.75,.75]){const M=g.map(([S,y],E)=>{const[v,b]=g[Math.max(0,E-1)],[R,A]=g[Math.min(g.length-1,E+1)],D=Math.hypot(R-v,A-b)||1;return[S+(A-b)/D*_,y-(R-v)/D*_]});tu(s,t,M,.28,.14,yx)}for(const _ of h.fences){const M=_.pts.map(r);for(let S=1;S<M.length;S++){const y=M[S-1],E=M[S];if(!_.gate){Yr(n,t,y,E,_.height,_.kind,m);continue}const v=r(_.gate),b=Math.hypot(E[0]-y[0],E[1]-y[1]),R=((v[0]-y[0])*(E[0]-y[0])+(v[1]-y[1])*(E[1]-y[1]))/(b*b),A=.5/b,D=I=>[y[0]+(E[0]-y[0])*I,y[1]+(E[1]-y[1])*I];Yr(n,t,y,D(R-A),_.height,_.kind,m),Yr(n,t,D(R+A),E,_.height,_.kind,m),Yr(n,t,D(R-A+.06/b),D(R+A-.06/b),_.height-.15,_.kind,m);const[O,z]=D(R+A+.35/b);n.frame(O,t.yAt(O,z),z,Math.atan2(E[0]-y[0],E[1]-y[1])),n.box(-.04,0,-.04,.04,1,.04,m,null),n.box(-.14,1,-.2,.14,1.22,.2,nt(4872786)),n.frame()}}if(h.clothesline){const[_,M]=r(h.clothesline);Tx(n,_,t.yAt(_,M),M,x+Math.PI/4)}for(const _ of h.planters){const[M,S]=r(_.at);n.frame(M,t.yAt(M,S),S,x),n.box(-_.across/2,0,-_.along/2,_.across/2,.4,_.along/2,Xr,bx);for(let y=0;y<3;y++)n.blob((y-1)*_.across/3.4,.5,(y%2-.5)*_.along*.4,.22,.2,.22,5,3,sl,rl);n.frame()}for(const _ of h.beds){const[M,S]=r(_.at);n.frame(M,t.yAt(M,S),S,0),n.cyl(0,.05,0,_.r,_.r,.12,10,Qh,Qh),n.blob(0,.55,0,_.r*.6,.5,_.r*.6,6,4,sl,rl),n.frame()}for(const _ of h.shrubs){const[M,S]=r(_);n.frame(M,t.yAt(M,S),S,0),n.blob(0,.32,0,.38,.36,.38,6,4,sl,rl),n.frame()}});const a=new Ke;a.name="detail";const o=new Qt(n.build(),Qi());o.castShadow=!0,o.receiveShadow=!0;const l=s.build();l.deleteAttribute("glow");const c=new Qt(l,new Je({vertexColors:!0,roughness:.95,metalness:0,side:ye,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}));return c.receiveShadow=!0,c.name="detail-ground",a.add(c,o),{group:a,ground:c}}const nu=[9405814,8747884,10129796,7305836,13617332,6253414,9080716].map(nt),$r=1.6,iu=560;function Dx(i,t,e){const n=new Ke;n.name="fences";const s=i.fences,r=new Map;for(let l=0;l+3<s.length;l+=4){const c=s[l]/10,h=s[l+1]/10,d=s[l+2]/10,f=s[l+3]/10,u=Math.hypot(d-c,f-h);if(u<1||e((c+d)/2,(h+f)/2))continue;const m=`${Math.floor(c/iu)}:${Math.floor(h/iu)}`;let x=r.get(m);x||r.set(m,x=new _e);const p=nu[l/4%nu.length],g=Gt(p,.92),_=-(f-h)/u*.04,M=(d-c)/u*.04,S=Math.max(1,Math.ceil(u/5));let y=c,E=h,v=t.yAt(c,h);for(let b=1;b<=S;b++){const R=c+(d-c)*b/S,A=h+(f-h)*b/S,D=t.yAt(R,A);x.quad(y+_,v-.2,E+M,R+_,D-.2,A+M,R+_,D+$r,A+M,y+_,v+$r,E+M,p),x.quad(R-_,D-.2,A-M,y-_,v-.2,E-M,y-_,v+$r,E-M,R-_,D+$r,A-M,g),y=R,E=A,v=D}}const a=new Uc({vertexColors:!0});let o=0;for(const l of r.values()){o+=l.vertexCount/6;const c=l.build();c.deleteAttribute("glow");const h=new Qt(c,a);h.castShadow=!0,h.receiveShadow=!0,n.add(h)}return{group:n,count:o}}const su=.05;class al{constructor(t,e,n){ot(this,"mesh");ot(this,"current","");ot(this,"level");ot(this,"wet");ot(this,"time",{value:0});ot(this,"lower",{value:0});ot(this,"loaded",new Map);this.hf=t,this.info=e,this.file=n;const{nx:s,nz:r}=t,a=s*r;this.level=new Float32Array(a),this.wet=new Uint8Array(a);const o=new Float32Array(a*3),l=new Float32Array(a*3);for(let d=0;d<r;d++)for(let f=0;f<s;f++){const u=d*s+f;o[u*3]=t.xMin+f*t.dx,o[u*3+1]=t.y[u],o[u*3+2]=t.zMin+d*t.dz,l[u*3+1]=1}const c=new Re;c.setAttribute("position",new we(o,3)),c.setAttribute("normal",new we(l,3)),c.setAttribute("aLevel",new we(this.level,1)),c.setAttribute("aWet",new we(new Float32Array(a),1)),c.setIndex([]);const h=new Je({color:16777215,roughness:.25,metalness:0,transparent:!0,depthWrite:!1});h.onBeforeCompile=d=>{d.uniforms.uTime=this.time,d.uniforms.uLower=this.lower,d.uniforms.uNight=Ji,d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
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
          if (vDepth < ${su.toFixed(2)} || vWet < 0.35) discard;
          // pale and a little muddy where it is shallow, dark blue as it deepens, so it reads as water against the ground
          float deep = smoothstep(0.1, 3.0, vDepth);
          diffuseColor.rgb = mix(vec3(0.36, 0.60, 0.74), vec3(0.05, 0.18, 0.40), deep) * (1.0 - 0.6 * uNight);
          diffuseColor.a = mix(0.7, 0.93, smoothstep(0.1, 1.5, vDepth));`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          {
            float nearby = 1.0 - smoothstep(200.0, 1500.0, length(cameraPosition - vWPos));
            vec2 p = vWPos.xz * 0.12 + vec2(uTime * 0.07, uTime * 0.04);
            vec2 ripple = vec2(sin(p.x * 3.1 + sin(p.y * 2.3)), cos(p.y * 2.7 + sin(p.x * 1.9))) * 0.035 * nearby;
            normal = normalize((viewMatrix * vec4(ripple.x, 1.0, ripple.y, 0.0)).xyz);
          }`)},h.customProgramCacheKey=()=>"moorooka-flood-levels",this.mesh=new Qt(c,h),this.mesh.name="flood",this.mesh.renderOrder=40,this.mesh.frustumCulled=!1,this.mesh.visible=!1}static async load(t,e,n,s){const r=await fetch(e,{signal:s});if(!r.ok)throw new Error("Could not load the floods");return new al(t,await r.json(),n)}async show(t,e){if(this.current=t,!t){this.mesh.visible=!1;return}let n=this.loaded.get(t);if(!n){const l=this.info.events.some(p=>p.id===t)?this.file(t):void 0;if(!l)throw new Error("This model has no such flood");const c=await fetch(l,{signal:e});if(!c.ok)throw new Error("Could not load that flood");const h=await Uh(await c.arrayBuffer()),[d,f]=this.info.grid;if(h.width!==d||h.height!==f)throw new Error("That flood does not match this model");const{hf:u}=this,m=Math.round(u.dx/(u.sizeX/d)),x=u.nx*u.nz;n={level:new Float32Array(x),wet:new Uint8Array(x)};for(let p=0;p<u.nz;p++)for(let g=0;g<u.nx;g++){const _=(p*m*d+g*m)*h.channels;n.level[p*u.nx+g]=(h.data[_]<<8|h.data[_+1])/this.info.levelScale-this.info.levelOffset,n.wet[p*u.nx+g]=h.data[_+2]>127?1:0}this.loaded.set(t,n)}if(this.current!==t)return;const{nx:s,nz:r}=this.hf,a=this.mesh.geometry;this.level.set(n.level),this.wet.set(n.wet),a.getAttribute("aWet").array.set(n.wet),a.getAttribute("aLevel").needsUpdate=!0,a.getAttribute("aWet").needsUpdate=!0;const o=[];for(let l=0;l<r-1;l++)for(let c=0;c<s-1;c++){const h=l*s+c,d=h+1,f=h+s,u=f+1;n.wet[h]+n.wet[d]+n.wet[f]+n.wet[u]>0&&o.push(h,f,d,d,f,u)}a.setIndex(o),this.mesh.visible=!0}setLower(t){this.lower.value=Math.max(0,t)}surfaceAt(t,e,n=!1){const{hf:s}=this;if(!this.mesh.visible||!s.inside(t,e))return-1/0;const r=Math.round((e-s.zMin)/s.dz)*s.nx+Math.round((t-s.xMin)/s.dx);if(!this.wet[r])return-1/0;const a=this.level[r]-(n?0:this.lower.value);return a-s.y[r]>su?a:-1/0}tick(t){this.time.value=t}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}const Us=nt(9278358),ol=nt(16053230),ru=nt(3163994),Ix=nt(2054824),Nx=nt(16040479),au=[15327951,3099196,2504783,8007210,3816770,13214282,5209226,11879727].map(nt);function Ux(i,t,e,n,s=()=>!1){const r=new _e,a=Zi(41050),o=i.busStops??[];for(let f=0;f<o.length;f+=2){const u=o[f]/10,m=o[f+1]/10,x=e.nearest(u,m,30);if(!x||n(u,m))continue;let p=u-x.px,g=m-x.pz;const _=Math.hypot(p,g);_<.5?(p=-x.tz,g=x.tx):(p/=_,g/=_);const M=x.width/2+2.4,S=x.px+p*M,y=x.pz+g*M;if(r.frame(S,t.yAt(S,y),y,Math.atan2(-p,-g)),r.box(-2.3,0,.9,-2.2,2.6,1,Us,null),r.box(-2.5,2,.88,-2,2.6,1.02,Ix),r.box(-2.5,1.86,.88,-2,2,1.02,Nx),a()<.5){for(const E of[-1.7,1.7])r.box(E-.05,0,-.6,E+.05,2.35,-.5,Us,null);r.box(-1.9,2.35,-.8,1.9,2.45,.8,Gt(Us,.8)),r.box(-1.7,.5,-.62,1.7,2.1,-.58,ru,null),r.box(-1.3,.42,-.5,1.3,.5,-.1,nt(10126440))}}for(const f of i.pitches){const u=f.p.map(_=>_/10),m=Br(u);if(n(m.cx,m.cz))continue;const x=m.w>=m.d?m.w:m.d,p=Math.min(m.w,m.d),g=m.w>=m.d?m.heading+Math.PI/2:m.heading;if(r.frame(m.cx,t.yAt(m.cx,m.cz),m.cz,g),f.t==="Oval"&&/Football/.test(f.s)&&x>60)for(const _ of[-1,1]){const M=_*(x/2-4);for(const S of[-2.8,2.8])r.cyl(S,0,M,.08,.08,8,5,ol);r.box(-2.8,2.9,M-.05,2.8,3.02,M+.05,ol)}else if(f.s==="Tennis"){r.box(-p/2+.6,0,-.03,p/2-.6,.95,.03,nt(2764595)),r.box(-p/2+.6,.95,-.04,p/2-.6,1.02,.04,ol);for(const _ of[-p/2+.6,p/2-.6])r.cyl(_,0,0,.05,.05,1.07,5,Us)}else if(f.s==="Netball")for(const _ of[-1,1]){const M=_*(x/2-.3);r.cyl(0,0,M,.05,.05,3.05,5,Us),r.box(-.2,3.02,M-_*.42,.2,3.07,M,nt(13644844))}}r.frame();const[,l]=Gn(i.meta,-27.53,153.0245),[,c]=Gn(i.meta,-27.5346,153.0245),h=i.buildings;for(let f=0;f<h.length;f+=an+h[f]*2){const u=h[f],m=h[f+an+1]/10;if(m<l||m>c)continue;let x=0,p=0;for(let _=0;_<u;_++)x+=h[f+an+_*2]/10,p+=h[f+an+_*2+1]/10;x/=u,p/=u;const g=au[Math.floor(a()*au.length)];for(let _=0;_<u;_++){const M=(_+1)%u,S=h[f+an+_*2]/10,y=h[f+an+_*2+1]/10,E=h[f+an+M*2]/10,v=h[f+an+M*2+1]/10,b=Math.hypot(E-S,v-y);if(b<5)continue;const R=(S+E)/2,A=(y+v)/2,D=e.nearest(R,A,16);if(!D||i.names[D.name]!=="Beaudesert Road"||n(R,A)||s(R,A))continue;let O=-(v-y)/b,z=(E-S)/b;if(O*(R-x)+z*(A-p)<0&&(O=-O,z=-z),(D.px-R)*O+(D.pz-A)*z<D.dist*.6)continue;const I=Math.atan2(O,z),Z=(E-S)*Math.cos(I)-(v-y)*Math.sin(I),H=Math.max(t.yAt(S,y),t.yAt(E,v))+.1;r.frame(Z>0?S:E,H,Z>0?y:v,I);const q=Math.min(2.6,Math.max(1.2,D.dist-D.width/2-.6));r.quad(.4,.4,.06,b-.4,.4,.06,b-.4,2.7,.06,.4,2.7,.06,ru,.9),r.box(.2,3,0,b-.2,3.16,q,g,Gt(g,.9),Gt(g,.75)),r.box(.2,2.75,q-.08,b-.2,3.3,q,Gt(g,1.15),null)}}r.frame();const d=new Qt(r.build(),Qi());return d.castShadow=!0,d.receiveShadow=!0,d.name="furniture",d}const es=nt(12170925),ou=nt(13091768),Fx=[.34,.3,.26,.22],Fs=.22,Ox=.13,ll=1.1,lu=1.3;function zx(i,t,e,n){const s=new _e,r=(l,c,h)=>{if(!e.inside(l,c,4)||n(l,c))return!1;const d=t.nearest(l,c,14);return!d||d.dist>d.width/2+h};i.forEach((l,c)=>{if(l.cls>3||l.flags&(Ih|el))return;const h=l.pts.length/3,d=l.width/2,f=Fx[l.cls];for(const u of[-1,1]){const m=l.cls<=2||(c%2?1:-1)===u;let x=null;for(let p=0;p<h;p++){const g=l.pts[p*3],_=l.pts[p*3+2],M=Math.max(p-1,0),S=Math.min(p+1,h-1);let y=l.pts[S*3]-l.pts[M*3],E=l.pts[S*3+2]-l.pts[M*3+2];const v=Math.hypot(y,E)||1;y/=v,E/=v;const b=-E*u,R=y*u,A=ht=>[g+b*(d+ht),_+R*(d+ht)],[D,O]=A(0),[z,I]=A(Fs),[Z,H]=A(Fs/2),q=e.yAt(D,O)+f,k=e.yAt(z,I),F=[D,q,O,z,Math.max(q,k+.05)+Ox,I,k],G=r(Z,H,.02),[Q,Y]=A(Fs+ll),[vt,j]=A(Fs+ll+lu),[lt,ft]=A(Fs+ll+lu/2),dt=[Q,e.yAt(Q,Y)+.09,Y,vt,e.yAt(vt,j)+.09,j],pt=m&&r(lt,ft,.6)&&r(vt,j,.3);if(x){const ht=x;if(G&&ht.kerb){const kt=F[4],it=ht.k[4];u>0?(s.quad(ht.k[0],ht.k[1],ht.k[2],F[0],F[1],F[2],F[0],kt,F[2],ht.k[0],it,ht.k[2],Gt(es,.9)),s.quad(ht.k[0],it,ht.k[2],F[0],kt,F[2],F[3],kt,F[5],ht.k[3],it,ht.k[5],es),s.quad(ht.k[3],it,ht.k[5],F[3],kt,F[5],F[3],F[6]-.3,F[5],ht.k[3],ht.k[6]-.3,ht.k[5],Gt(es,.85))):(s.quad(F[0],F[1],F[2],ht.k[0],ht.k[1],ht.k[2],ht.k[0],it,ht.k[2],F[0],kt,F[2],Gt(es,.9)),s.quad(F[0],kt,F[2],ht.k[0],it,ht.k[2],ht.k[3],it,ht.k[5],F[3],kt,F[5],es),s.quad(F[3],kt,F[5],ht.k[3],it,ht.k[5],ht.k[3],ht.k[6]-.3,ht.k[5],F[3],F[6]-.3,F[5],Gt(es,.85)))}if(pt&&ht.path){const kt=p%2?ou:Gt(ou,.955);u>0?s.quad(ht.f[0],ht.f[1],ht.f[2],dt[0],dt[1],dt[2],dt[3],dt[4],dt[5],ht.f[3],ht.f[4],ht.f[5],kt):s.quad(dt[0],dt[1],dt[2],ht.f[0],ht.f[1],ht.f[2],ht.f[3],ht.f[4],ht.f[5],dt[3],dt[4],dt[5],kt)}}x={k:F,kerb:G,f:dt,path:pt}}}});const a=s.build();a.deleteAttribute("glow");const o=new Qt(a,new Je({vertexColors:!0,roughness:.94,metalness:0,side:ye,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));return o.receiveShadow=!0,o.name="kerbs",o}function Bx(i,t){const e=new _e,n=nt(9278358);e.cyl(0,0,0,.11,.07,8.2,5,n),e.box(-.05,8.1,0,.05,8.22,2.2,n),e.box(-.22,8,1.7,.22,8.14,2.5,nt(5922659)),e.quad(-.2,7.99,2.48,.2,7.99,2.48,.2,7.99,1.72,-.2,7.99,1.72,nt(16773320),3);const s=i.length/4,r=new ni(e.build(),Qi(),s),a=document.createElement("canvas");a.width=a.height=64;const o=a.getContext("2d"),l=o.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(255,214,150,0.85)"),l.addColorStop(.45,"rgba(255,196,120,0.32)"),l.addColorStop(1,"rgba(255,180,100,0)"),o.fillStyle=l,o.fillRect(0,0,64,64);const c=new Er(a);c.colorSpace=be;const h=new ii(34,34);h.rotateX(-Math.PI/2);const d=new ei({map:c,transparent:!0,opacity:0,blending:aa,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),f=new ni(h,d,s);f.renderOrder=3;const u=new ie,m=new fn,x=new $(0,1,0),p=new $(1,1,1),g=new $;for(let _=0;_<s;_++){const M=i[_*4],S=i[_*4+1],y=i[_*4+2],E=i[_*4+3];m.setFromAxisAngle(x,E),r.setMatrixAt(_,u.compose(g.set(M,S,y),m,p));const v=M+Math.sin(E)*2.1,b=y+Math.cos(E)*2.1;f.setMatrixAt(_,u.compose(g.set(v,t.yAt(v,b)+.5,b),m.identity(),p))}return r.castShadow=!1,r.computeBoundingSphere(),f.computeBoundingSphere(),f.onBeforeRender=()=>{d.opacity=Ji.value*.9},f.visible=!0,{lights:r,pools:f,poolMat:d}}const Kr=[16053490,16053490,16053490,13225168,10725291,5593438,2040100,2838410,11020586,2054728,14266938,8368595],Os=nt(1381655),cu=nt(10133154),hu=nt(1713198);function uu(i,t,e,n,s,r,a,o=8){const l=t-r/2*a,c=t+r/2*a;for(let f=0;f<o;f++){const u=f/o*Math.PI*2,m=(f+1)/o*Math.PI*2,x=e+Math.cos(u)*s,p=n+Math.sin(u)*s,g=e+Math.cos(m)*s,_=n+Math.sin(m)*s;a>0?(i.quad(l,x,p,l,g,_,c,g,_,c,x,p,Os),i.tri(c,e,n,c,x,p,c,g,_,Os)):(i.quad(l,g,_,l,x,p,c,x,p,c,g,_,Os),i.tri(c,e,n,c,g,_,c,x,p,Os))}const h=s*.52,d=c+.012*a;a>0?i.quad(d,e-h,n-h,d,e-h,n+h,d,e+h,n+h,d,e+h,n-h,cu):i.quad(d,e-h,n+h,d,e-h,n-h,d,e+h,n-h,d,e+h,n+h,cu)}function Zr(i,t,e,n,s,r,a,o,l=0){i.quad(r,e,t,r,s,n,a,s,n,a,e,t,o,l)}function fu(i,t,e,n,s){const[r,a]=t[0];for(let o=1;o<t.length-1;o++){const[l,c]=t[o],[h,d]=t[o+1];n>0?i.tri(e,a,r,e,d,h,e,c,l,s):i.tri(e,a,r,e,c,l,e,d,h,s)}}function du(){const i=new _e,t=nt(16777215),e=nt(2763824),n=.88,s=[[-2.1,.28],[-2.16,.6],[-2.06,.94],[-1.3,.99],[1.05,.97],[1.95,.84],[2.16,.6],[2.1,.28]];for(let o=0;o<s.length-1;o++)Zr(i,s[o][0],s[o][1],s[o+1][0],s[o+1][1],-n,n,o===0||o===s.length-2?Gt(t,.92):t);for(const o of[-1,1])fu(i,s,n*o,o,t);i.quad(-n,.28,-2.1,n,.28,-2.1,n,.28,2.1,-n,.28,2.1,Os);const r=.8,a=[[-1.42,.97],[-.98,1.45],[.32,1.45],[1.08,.97]];for(let o=0;o<a.length-1;o++)Zr(i,a[o][0],a[o][1],a[o+1][0],a[o+1][1],-r+.06,r-.06,o===1?t:hu,o===1?0:.15);for(const o of[-1,1]){fu(i,a,r*o,o,hu),Zr(i,-1.42,.97,-.98,1.45,o>0?r-.07:-r,o>0?r:-r+.07,t),Zr(i,.32,1.45,1.08,.97,o>0?r-.07:-r,o>0?r:-r+.07,t);const l=(r+.006)*o;i.quad(l,.97,-.32*o,l,.97,-.22*o,l,1.45,-.22*o,l,1.45,-.32*o,t);const c=(n+.006)*o;for(const h of[-1.28,-.27,.95])i.quad(c,.42,(h-.012)*o,c,.42,(h+.012)*o,c,.96,(h+.012)*o,c,.96,(h-.012)*o,e);for(const h of[-.5,.55])i.quad(c,.8,(h-.09)*o,c,.8,(h+.09)*o,c,.84,(h+.09)*o,c,.84,(h-.09)*o,e);i.box(Math.min(n*o,(n+.16)*o),.98,.92,Math.max(n*o,(n+.16)*o),1.1,1,t)}for(const o of[-1,1])for(const l of[-1.3,1.32])uu(i,(n-.1)*o,.33,l,.33,.24,o);i.quad(-n,.3,2.165,n,.3,2.165,n,.5,2.165,-n,.5,2.165,e),i.quad(n,.3,-2.165,-n,.3,-2.165,-n,.5,-2.165,n,.5,-2.165,e),i.quad(-.26,.36,2.17,.26,.36,2.17,.26,.49,2.17,-.26,.49,2.17,nt(16053486)),i.quad(.26,.5,-2.17,-.26,.5,-2.17,-.26,.63,-2.17,.26,.63,-2.17,nt(16053486));for(const o of[-.8,.48])i.quad(o,.6,2.17,o+.32,.6,2.17,o+.32,.78,2.14,o,.78,2.14,nt(16776166),2.2),i.quad(o+.32,.66,-2.165,o,.66,-2.165,o,.84,-2.13,o+.32,.84,-2.13,nt(13770527),.9);return i.build()}const kx=nt(8352874),pu=nt(10133154),mu=nt(7304312),Jr=.44,Gx=.2,gu=1.067;function cl(i,t){const e=[i[0]/10,i[1]/10];for(let l=2;l<i.length;l+=2){const c=i[l-2]/10,h=i[l-1]/10,d=i[l]/10,f=i[l+1]/10,u=Math.max(1,Math.ceil(Math.hypot(d-c,f-h)/6));for(let m=1;m<=u;m++)e.push(c+(d-c)*m/u,h+(f-h)*m/u)}const n=e.length/2,s=new Float32Array(n);for(let l=0;l<n;l++)s[l]=t.yAt(e[l*2],e[l*2+1]);let r=s;for(let l=0;l<2;l++){const c=new Float32Array(n);for(let h=0;h<n;h++){let d=0,f=0;for(let u=Math.max(0,h-4);u<=Math.min(n-1,h+4);u++)d+=r[u],f++;c[h]=d/f}r=c}const a=new Float32Array(n*3),o=new Float32Array(n);for(let l=0;l<n;l++)a[l*3]=e[l*2],a[l*3+1]=Math.max(r[l],s[l]-.2),a[l*3+2]=e[l*2+1],l&&(o[l]=o[l-1]+Math.hypot(e[l*2]-e[l*2-2],e[l*2+1]-e[l*2-1]));return{pts:a,cum:o,length:o[n-1]}}function ns(i,t,e){const n=i.cum.length;let s=0,r=n-1;for(;r-s>1;){const m=s+r>>1;i.cum[m]<=t?s=m:r=m}const a=Math.min(1,Math.max(0,(t-i.cum[s])/(i.cum[r]-i.cum[s]||1))),o=i.pts[s*3],l=i.pts[s*3+1],c=i.pts[s*3+2],h=i.pts[r*3],d=i.pts[r*3+1],f=i.pts[r*3+2],u=Math.hypot(h-o,f-c)||1;e.x=o+(h-o)*a,e.y=l+(d-l)*a,e.z=c+(f-c)*a,e.tx=(h-o)/u,e.tz=(f-c)/u}function hl(i,t,e,n,s,r){const a=t.cum.length;let o=0,l=0,c=0,h=0,d=0;for(let f=0;f<a;f++){const u=Math.max(f-1,0),m=Math.min(f+1,a-1);let x=t.pts[m*3]-t.pts[u*3],p=t.pts[m*3+2]-t.pts[u*3+2];const g=Math.hypot(x,p)||1;x/=g,p/=g;const _=t.pts[f*3]-p*e,M=t.pts[f*3+2]+x*e,S=t.pts[f*3+1]+s,y=_+p*n,E=M-x*n,v=_-p*n,b=M+x*n;f&&i.quad(o,l,c,y,S,E,v,S,b,h,l,d,r),o=y,l=S,c=E,h=v,d=b}}const Hx=nt(12170926),_u=nt(15254842),xu=nt(9276036),vu=150,Vx=Jr+.8;function Wx(i,t,e){const n=t.trainRoutes.map(a=>cl(a,e)),s=(a,o,l,c=0,h=a.cum.length)=>{let d=1/0,f=-1;for(let u=Math.max(0,c);u<Math.min(a.cum.length,h);u++){const m=Math.hypot(a.pts[u*3]-o,a.pts[u*3+2]-l);m<d&&(d=m,f=u)}return{i:f,dist:d}},r={x:0,y:0,z:0,tx:0,tz:0};for(const a of t.stations){const o=a.p[0]/10,l=a.p[1]/10,c=n.map(x=>({t:x,...s(x,o,l)})).filter(x=>x.dist<16).sort((x,p)=>x.dist-p.dist);if(!c.length)continue;const h=c[0],d=c[1],f=h.t.cum[h.i];let u=null,m=d?d.i:0;for(let x=Math.max(4,f-vu/2);x<=Math.min(h.t.length-4,f+vu/2);x+=5){ns(h.t,x,r);let p,g,_,M;if(d){const y=s(d.t,r.x,r.z,m-6,m+7);m=y.i;const E=d.t.pts[y.i*3],v=d.t.pts[y.i*3+2],b=Math.hypot(E-r.x,v-r.z);if(b<4.6){u=null;continue}const R=(E-r.x)/b,A=(v-r.z)/b;p=r.x+R*1.6,g=r.z+A*1.6,_=E-R*1.6,M=v-A*1.6}else{const y=(o-r.x)*r.tz-(l-r.z)*r.tx>=0?1:-1;p=r.x+r.tz*y*1.6,g=r.z-r.tx*y*1.6,_=r.x+r.tz*y*5.6,M=r.z-r.tx*y*5.6}const S=r.y+Vx;if((_-p)*-r.tz+(M-g)*r.tx<0&&([p,_]=[_,p],[g,M]=[M,g]),u){const[y,E,v,b,R]=u;i.quad(y,R,E,v,R,b,_,S,M,p,S,g,Hx);for(const[A,D,O,z,I,Z,H,q]of[[y,E,p,g,v,b,_,M],[v,b,_,M,y,E,p,g]]){const k=Math.hypot(I-A,Z-D)||1,F=Math.hypot(H-O,q-z)||1,G=(Y,vt,j,lt)=>Y+(vt-Y)/j*lt,Q=[G(A,I,k,.45),R+.02,G(D,Z,k,.45),G(O,H,F,.45),S+.02,G(z,q,F,.45),G(O,H,F,.75),S+.02,G(z,q,F,.75),G(A,I,k,.75),R+.02,G(D,Z,k,.75)];A===y&&D===E?(i.quad(Q[0],Q[1],Q[2],Q[9],Q[10],Q[11],Q[6],Q[7],Q[8],Q[3],Q[4],Q[5],_u),i.quad(O,S-1.1,z,A,R-1.1,D,A,R,D,O,S,z,xu)):(i.quad(...Q,_u),i.quad(A,R-1.1,D,O,S-1.1,z,O,S,z,A,R,D,xu))}}u=[p,g,_,M,S]}}}function Xx(i,t){const e=new _e,n=new _e,s=new Set,r={x:0,y:0,z:0,tx:0,tz:0};for(const[f,u]of i.rails){const m=cl(u,t);if(!(m.length<4)&&(hl(e,m,0,1.45,Gx,kx),hl(n,m,-gu/2,.07,Jr,pu),hl(n,m,gu/2,.07,Jr,pu),f===0))for(let x=20;x<m.length-10;x+=62){ns(m,x,r);const p=r.x+r.tz*2.7,g=r.z-r.tx*2.7;if(!t.inside(p,g,6))continue;const _=Math.floor(p/14)*8192+Math.floor(g/14);if(!s.has(_)){for(let M=-1;M<=1;M++)for(let S=-1;S<=1;S++)s.add(Math.floor(p/14+M)*8192+Math.floor(g/14+S));n.frame(p,t.yAt(p,g),g,Math.atan2(-r.tz,r.tx)),n.box(-.09,0,-.09,.09,7.4,.09,mu),n.box(-.05,6.3,0,.05,6.42,3.2,mu),n.frame()}}}const a=new _e;Wx(a,i,t);const o=f=>(f.deleteAttribute("glow"),f),l=new Ke;l.name="railway";const c=new Qt(o(e.build()),new Je({vertexColors:!0,roughness:1,metalness:0,side:ye,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));c.receiveShadow=!0;const h=new Qt(o(n.build()),new Je({vertexColors:!0,roughness:.55,metalness:.35,side:ye}));h.castShadow=!0;const d=new Qt(o(a.build()),new Je({vertexColors:!0,roughness:.92,metalness:0,side:ye}));return d.castShadow=!0,d.receiveShadow=!0,l.add(c,h,d),l}const Mu=2,ul=4;function qx(i,t){const e=i.slice(),n=[],s=(a,o,l,c)=>Math.hypot(a-l,o-c)<3,r=a=>{const o=new Float32Array(a.length);for(let l=0;l<a.length/3;l++)o.set(a.subarray(l*3,l*3+3),a.length-3-l*3);return o};for(;e.length;){let a=Array.from(e.pop()),o=!0;for(;o;){o=!1;for(let l=0;l<e.length;l++){const c=e[l],h=c.length,d=a.length;let f=null,u=!0;if(s(a[d-3],a[d-1],c[0],c[2])?f=c:s(a[0],a[2],c[h-3],c[h-1])?(f=c,u=!1):!t&&s(a[d-3],a[d-1],c[h-3],c[h-1])?f=r(c):!t&&s(a[0],a[2],c[0],c[2])&&(f=r(c),u=!1),!!f){a=u?a.concat(Array.from(f.subarray(3))):Array.from(f.subarray(0,f.length-3)).concat(a),e.splice(l,1),o=!0;break}}}n.push(new Float32Array(a))}return n}function Yx(i){const t=new Map;for(const n of i){if(n.cls>2||!n.name||n.flags&Mu)continue;const s=`${n.name}|${n.flags&ul}`,r=t.get(s)??[];r.push(n),t.set(s,r)}const e=[];for(const n of t.values()){const s=(n[0].flags&ul)!==0;for(const r of qx(n.map(a=>a.pts),s)){const a=r.length/3,o=new Float32Array(a);for(let l=1;l<a;l++)o[l]=o[l-1]+Math.hypot(r[l*3]-r[l*3-3],r[l*3+2]-r[l*3-1]);o[a-1]>260&&e.push({pts:r,cum:o,length:o[a-1],width:n[0].width,cls:n[0].cls,oneWay:s,name:n[0].name})}}return e}function $x(){const i=new _e,t=nt(16185074),e=nt(2054824),n=nt(16040479),s=nt(1713198),r=nt(1381655);i.box(-1.25,.35,-6,1.25,3.1,6,t,nt(15001316),r),i.box(-1.27,.35,-6.02,1.27,1.15,6.02,e,null),i.box(-1.28,1.15,-6.03,1.28,1.32,6.03,n,null);for(const a of[-1.27,1.27]){const o=Math.sign(a);i.quad(a+o*.02,1.55,-5.4*o,a+o*.02,1.55,5.4*o,a+o*.02,2.65,5.4*o,a+o*.02,2.65,-5.4*o,s,.5)}i.quad(-1.1,1.5,6.04,1.1,1.5,6.04,1.1,2.8,6.04,-1.1,2.8,6.04,s,.3);for(const a of[-1,1])for(const o of[-3.75,4.05])uu(i,1.17*a,.48,o,.48,.3,a,10);for(const a of[-1,.7])i.quad(a,.6,6.05,a+.3,.6,6.05,a+.3,.85,6.05,a,.85,6.05,nt(16776166),2.2);return i.build()}const fl=24.2,vi=6;function Su(i){const t=new _e,e=23.4,n=1.42,s=nt(13488596),r=nt(10330790),a=nt(1843753),o=nt(15909424),l=nt(2763822),c=nt(2310287);t.box(-n,.95,-e/2,n,3.7,e/2,s,r),t.box(-n+.2,.2,-e/2+1.4,n-.2,.95,e/2-1.4,l,null),t.box(-.5,3.7,-e/2+3,.5,4,e/2-3,r);for(const h of[-1,1]){const d=h*(n+.02),f=(u,m,x,p,g=a,_=0)=>{h>0?t.quad(d,x,m,d,x,u,d,p,u,d,p,m,g,_):t.quad(d,x,u,d,x,m,d,p,m,d,p,u,g,_)};f(-e/2+.3,e/2-.3,1.45,1.62,c);for(let u=0;u<7;u++){const m=-e/2+2+u*2.9;f(m,m+2.1,2,2.95,a,.75)}for(const u of[-6.4,5])f(u,u+1.4,1,3.1,o)}if(i){const h=e/2+.02;t.quad(-n,.95,h,n,.95,h,n,2.15,h,-n,2.15,h,o),t.quad(-n+.15,2.2,h,n-.15,2.2,h,n-.15,3.35,h,-n+.15,3.35,h,a,.2);for(const d of[-1.05,.7])t.quad(d,1.25,h+.01,d+.35,1.25,h+.01,d+.35,1.5,h+.01,d,1.5,h+.01,nt(16776166),2.4)}return t.build()}class Kx{constructor(t,e,n,s,r=()=>!1,a=()=>!1){ot(this,"group",new Ke);ot(this,"vehicles",[]);ot(this,"carMesh");ot(this,"busMesh");ot(this,"carCount",0);ot(this,"trains",[]);ot(this,"midMesh");ot(this,"cabMesh");ot(this,"tmpM",new ie);ot(this,"tmpQ",new fn);ot(this,"tmpP",new $);ot(this,"up",new $(0,1,0));ot(this,"one",new $(1,1,1));ot(this,"zero",new $(0,0,0));ot(this,"at",{x:0,y:0,z:0,tx:0,tz:0});ot(this,"at2",{x:0,y:0,z:0,tx:0,tz:0});this.town=t,this.hf=e,this.isClear=r,this.noParking=a,this.group.name="life";const o=Qi();this.addParkedCars(o,s),this.addTraffic(o,n),this.addTrains(o),this.addStreetLights(n),this.update(0)}addParkedCars(t,e){const n=this.town.cars,s=n.length/Ds,r=new ni(du(),t,s),a=new Dt;let o=0;for(let l=0;l<s;l++){const c=n[l*Ds]/4,h=n[l*Ds+1]/4;if(this.isClear(c,h)||this.noParking(c,h))continue;const d=e.nearest(c,h,4.4)!==null;this.tmpQ.setFromAxisAngle(this.up,n[l*Ds+2]/10*(Math.PI/180)),r.setMatrixAt(o,this.tmpM.compose(this.tmpP.set(c,this.hf.yAt(c,h)+(d?.24:.03),h),this.tmpQ,this.one)),r.setColorAt(o++,a.set(Kr[(n[l*Ds+3]*7+l)%Kr.length]))}r.count=o,r.castShadow=!0,r.computeBoundingSphere(),this.group.add(r)}addTraffic(t,e){const n=Yx(e);if(!n.length)return;const s=Zi(4105),r=[],a=[];for(const l of n){const c=l.cls===0?20:l.cls===1?12:8,h=Math.round(l.length/1e3*c*(l.oneWay?1:1.6)),d=Math.max(1,Math.round((l.oneWay?l.width:l.width/2)/3.3));for(let f=0;f<h;f++){const u=Math.floor(s()*d),m=l.oneWay?((u+.5)/d-.5)*(l.width-.8):(u+.5)/d*(l.width/2-.3),x=l.cls===0?13:l.cls===1?11:9,p={route:l,s:s()*l.length,dir:l.oneWay||s()<.5?1:-1,speed:x+s()*4,lane:m};(l.name==="Beaudesert Road"||l.name==="Ipswich Road")&&s()<.045?(p.speed=10+s()*2,l.oneWay&&(p.lane=(.5-.5/d)*(l.width-.8)),a.push(p)):r.push(p)}}this.vehicles=r.concat(a),this.carCount=r.length;const o=new Dt;if(r.length){const l=this.carMesh=new ni(du(),t,r.length);l.instanceMatrix.setUsage(so),l.frustumCulled=!1;for(let c=0;c<r.length;c++)l.setColorAt(c,o.set(Kr[Math.floor(s()*Kr.length)]));l.castShadow=!0,this.group.add(l)}if(a.length){const l=this.busMesh=new ni($x(),t,a.length);l.instanceMatrix.setUsage(so),l.frustumCulled=!1,l.castShadow=!0,this.group.add(l)}}addTrains(t){const e=this.town.trainRoutes.map(r=>cl(r,this.hf)).filter(r=>r.length>600);if(!e.length)return;const n=[!0];if(e.length>1){const r=e[0],a=e[1];ns(r,r.length/2,this.at);let o=1/0,l=0,c=1;for(let h=0;h<a.cum.length;h++){const d=a.pts[h*3]-this.at.x,f=a.pts[h*3+2]-this.at.z,u=Math.hypot(d,f);if(u<o){o=u,l=d*-this.at.tz+f*this.at.tx;const m=Math.min(h+1,a.cum.length-1),x=Math.max(h-1,0);c=(a.pts[m*3]-a.pts[x*3])*this.at.tx+(a.pts[m*3+2]-a.pts[x*3+2])*this.at.tz}}n[0]=l>0,n[1]=n[0]?c<0:c>0}const s=vi*fl;e.forEach((r,a)=>{const o=n[a]?r:Zx(r),l=[];for(const c of this.town.stations){const h=c.p[0]/10,d=c.p[1]/10;let f=70,u=-1;for(let m=0;m<o.cum.length;m++){const x=Math.hypot(o.pts[m*3]-h,o.pts[m*3+2]-d);x<f&&(f=x,u=o.cum[m])}u>s/2+10&&u<o.length-10&&l.push(u+s/2)}l.sort((c,h)=>c-h),this.trains.push({track:o,stops:l,s:o.length*(a===0?.28:.62),v:16,dwell:0,next:0})});for(const r of this.trains)r.next=r.stops.findIndex(a=>a>r.s+150);this.midMesh=new ni(Su(!1),t,this.trains.length*(vi-2)),this.cabMesh=new ni(Su(!0),t,this.trains.length*2);for(const r of[this.midMesh,this.cabMesh])r.instanceMatrix.setUsage(so),r.frustumCulled=!1,r.castShadow=!0,this.group.add(r)}addStreetLights(t){const e=[];for(const r of t){if(r.flags&Mu)continue;const a=(r.flags&ul)!==0,o=r.cls<=1?46:r.cls===2?60:105,l=r.pts.length/3;let c=o*.5,h=1;for(let d=1;d<l;d++){const f=r.pts[d*3-3],u=r.pts[d*3-1],m=r.pts[d*3],x=r.pts[d*3+1],p=r.pts[d*3+2],g=Math.hypot(m-f,p-u);if(c+=g,c<o)continue;c=0,h=a?-1:-h;const _=(m-f)/(g||1),M=(p-u)/(g||1),S=r.width/2+1.4,y=m-M*S*h,E=p+_*S*h;!this.hf.inside(y,E,12)||this.isClear(y,E)||e.push(y,Math.max(this.hf.yAt(y,E),x-.4),E,Math.atan2(M*h,-_*h))}}const{lights:n,pools:s}=Bx(e,this.hf);this.group.add(n,s)}update(t){const{at:e,at2:n}=this;if(this.vehicles.forEach((r,a)=>{const o=r.route;r.s+=r.dir*r.speed*t,r.s>o.length&&(r.s-=o.length),r.s<0&&(r.s+=o.length),ns(o,r.s,e);const l=e.tx*r.dir,c=e.tz*r.dir;this.tmpQ.setFromAxisAngle(this.up,Math.atan2(l,c)),this.tmpM.compose(this.tmpP.set(e.x+c*r.lane,e.y+.03,e.z-l*r.lane),this.tmpQ,this.one),a<this.carCount?this.carMesh.setMatrixAt(a,this.tmpM):this.busMesh.setMatrixAt(a-this.carCount,this.tmpM)}),this.carMesh&&(this.carMesh.instanceMatrix.needsUpdate=!0),this.busMesh&&(this.busMesh.instanceMatrix.needsUpdate=!0),!this.midMesh||!this.cabMesh)return;const s=vi*fl;this.trains.forEach((r,a)=>{if(r.dwell>0)r.dwell-=t;else{const l=(r.next>=0&&r.next<r.stops.length?r.stops[r.next]:1/0)-r.s;l<.4?(r.v=0,r.dwell=14,r.next++):l<r.v*r.v/1.7+2?r.v=Math.max(.8,Math.sqrt(1.7*l)):r.v=Math.min(19,r.v+.75*t),r.s+=r.v*t,r.s-s>r.track.length&&(r.s=0,r.next=0,r.v=15)}for(let o=0;o<vi;o++){const l=r.s-(o+.5)*fl,c=o===0||o===vi-1,h=c?this.cabMesh:this.midMesh,d=c?a*2+(o===0?0:1):a*(vi-2)+o-1;if(l<8||l>r.track.length-8){h.setMatrixAt(d,this.tmpM.compose(this.zero,this.tmpQ.identity(),this.zero));continue}ns(r.track,l+8,e),ns(r.track,l-8,n);const f=Math.atan2(e.x-n.x,e.z-n.z)+(o===vi-1?Math.PI:0);this.tmpQ.setFromAxisAngle(this.up,f),h.setMatrixAt(d,this.tmpM.compose(this.tmpP.set((e.x+n.x)/2,(e.y+n.y)/2+Jr,(e.z+n.z)/2),this.tmpQ,this.one))}}),this.midMesh.instanceMatrix.needsUpdate=!0,this.cabMesh.instanceMatrix.needsUpdate=!0}}function Zx(i){const t=i.cum.length,e=new Float32Array(t*3),n=new Float32Array(t);for(let s=0;s<t;s++)e.set(i.pts.subarray((t-1-s)*3,(t-1-s)*3+3),s*3),n[s]=i.length-i.cum[t-1-s];return{pts:e,cum:n,length:i.length}}const Jx=[{id:"shops",name:"Moorvale shops",kind:"landmark",lat:-27.53289,lon:153.02479,blurb:"Moorooka's main street: the shops and cafes along Beaudesert Road, around Moorvale Lane.",view:[420,58,-24],priority:1,lift:24},{id:"square",name:"Moorooka Square",kind:"landmark",lat:-27.53092,lon:153.02368,blurb:"The shopping centre at Beaudesert Road and Durack Street, modelled in extra detail. Its outline and heights are surveyed. The corner frontage (white canopy, brick planters, pylon) and the supermarket entry are fitted from street photographs taken in 2026: the corner wing is newer than the survey, so its position is approximate. The sides away from Beaudesert Road are a guess.",view:[115,62,68],priority:1,maxDist:2600,lift:17},{id:"station",name:"Moorooka Station",kind:"landmark",lat:-27.53566,lon:153.01392,blurb:"On the Beenleigh and Gold Coast lines, beside Ipswich Road. Trains in the model stop here.",view:[330,60,62],priority:1,lift:20},{id:"magic-mile",name:"Magic Mile",kind:"landmark",lat:-27.53208,lon:153.01684,blurb:"Ipswich Road through Moorooka, long known as the Magic Mile of Motors for its car yards. The cars standing in the yards are generated.",view:[520,60,35],priority:2,lift:22},{id:"6-beaudesert",name:"6 Beaudesert Road",kind:"landmark",lat:-27.5256631,lon:153.0234391,blurb:"A high-set house on a 1,348 square metre block near the Ipswich Road junction, modelled in extra detail. The roof outline, its height and colour are surveyed; the fences, paths, steps, garden boxes and clothes hoist are placed from the aerial photograph. Wall colour, windows and doors are a guess.",view:[52,52,-105],priority:2,maxDist:1500,lift:13},{id:"clapham",name:"Clapham Rail Yard",kind:"landmark",lat:-27.5312,lon:153.0132,blurb:"The rail yard between Yeerongpilly and Moorooka stations, on the western edge of the suburb.",view:[640,58,80],priority:3,maxDist:3600,lift:18},{id:"school",name:"Moorooka State School",kind:"landmark",lat:-27.53569,lon:153.02398,blurb:"The state primary school, between Beaudesert Road and Sherley Street.",view:[360,58,10],priority:3,maxDist:2600,lift:18},{id:"alexander",name:"Alexander Park",kind:"nature",lat:-27.53889,lon:153.02367,blurb:"Sports fields beside Beaudesert Road, south of the school.",view:[420,58,-15],priority:4,maxDist:2600,lift:14},{id:"peggs",name:"Pegg's Park",kind:"nature",lat:-27.53231,lon:153.0312,blurb:"Parkland along Vendale Avenue on the eastern side of the suburb.",view:[420,58,20],priority:4,maxDist:2600,lift:14},{id:"koala",name:"Koala Park",kind:"nature",lat:-27.53056,lon:153.02808,blurb:"A long green corridor with playing fields between Vendale Avenue and the houses.",view:[420,60,30],priority:5,maxDist:2e3,lift:14},{id:"community",name:"Moorooka Community Centre",kind:"landmark",lat:-27.53555,lon:153.02088,blurb:"The community hall, west of the school.",view:[300,60,-10],priority:6,maxDist:1400,lift:14},{id:"st-brendans",name:"St Brendan's Primary School",kind:"landmark",lat:-27.53747,lon:153.01931,blurb:"Catholic primary school on Hawtree Street, next to the church.",view:[320,60,15],priority:6,maxDist:1600,lift:15},{id:"post",name:"Moorooka Post Shop",kind:"landmark",lat:-27.5317,lon:153.02369,blurb:"The post office, at the northern end of the shops.",view:[260,60,-20],priority:7,maxDist:900,lift:14},{id:"uniting",name:"Uniting Church",kind:"landmark",lat:-27.53339,lon:153.02759,blurb:"Moorooka's Uniting Church, a few streets east of the shops.",view:[280,60,10],priority:7,maxDist:1e3,lift:14},{id:"stimpson",name:"Stimpson Park",kind:"nature",lat:-27.52648,lon:153.02218,blurb:"A park beside Ipswich Road at the northern tip of the suburb.",view:[360,58,20],priority:6,maxDist:1600,lift:13},{id:"moolabin",name:"Moolabin Park",kind:"nature",lat:-27.52852,lon:153.02564,blurb:"The first of the parks strung along Vendale Avenue.",view:[340,58,15],priority:6,maxDist:1500,lift:13},{id:"veterans",name:"Veterans Park",kind:"nature",lat:-27.53974,lon:153.01694,blurb:"A park on Anson Street, in the south-west of the suburb.",view:[340,58,25],priority:6,maxDist:1500,lift:13},{id:"skate",name:"Peter Scott Skate Park",kind:"landmark",lat:-27.54298,lon:153.01482,blurb:"The skate park in Muriel Avenue Park, near the creek.",view:[260,60,30],priority:6,maxDist:1400,lift:12},{id:"toohey",name:"Toohey Forest",kind:"nature",lat:-27.53512,lon:153.03668,blurb:"Bushland on the ridge along the eastern edge of the suburb. The highest ground in the model, about 125 metres above sea level, is here.",view:[1100,60,-60],priority:2,lift:34},{id:"creek",name:"Rocky Water Holes Creek",kind:"water",lat:-27.54414,lon:153.01554,blurb:"The creek along Moorooka's southern boundary, on its way to Oxley Creek and the Brisbane River.",view:[620,58,20],priority:5,maxDist:3200},{id:"rocklea",name:"Rocklea Station",kind:"landmark",lat:-27.54472,lon:153.01419,blurb:"The next station south, just over the creek in Rocklea.",view:[380,60,40],priority:5,maxDist:2600,lift:16},{id:"yeerongpilly",name:"Yeerongpilly Station",kind:"landmark",lat:-27.52485,lon:153.01416,blurb:"The next station north, where the Tennyson branch leaves the main line.",view:[420,60,70],priority:5,maxDist:2600,lift:16},{id:"river",name:"Brisbane River",kind:"water",lat:-27.5214,lon:153.0102,blurb:"The Tennyson reach of the river touches the north-west corner of the model.",view:[900,55,40],priority:4}],yu=[-27.531134,153.023185],Qx=[-27.5307274,153.0230606],jx=[-27.5310763,153.0237468],bu=[[-27.5307394,153.023705],[-27.5310127,153.0237606]],zs=[78,0,0,0,0,66.5,79.3,66.5,79.3,42.5,83.4,42.5,83.4,47.9,88.2,47.9,88.2,28.1,100.2,28.1,100.2,22.1],tv=[75.2,0,0,0,0,66.5,79.3,66.5,79.3,42.5,83.4,42.5,83.4,47.9,88.2,47.9,88.2,26.3,98.4,26.3,98.4,23.2],ev=[66,0,75.2,0,98.4,23.2,98.4,26.3,88.2,26.3,88.2,47.9,83.4,47.9,83.4,42.5,79.3,42.5,79.3,66.5,66,66.5],zt=39.1,sn=zt+5,Qr=zt+5.85,Bs=5.2,ks=[11.4,14.6],Hn=i=>37.45+(i>0?.036:.02)*i,Gs=nt(14934231),fe=nt(15987437),Hs=nt(15526627),Vs=nt(13619146),dl=nt(11818813),pl=nt(4864816),nv=nt(2832965),Ws=nt(1976109),Xs=nt(3817026),xn=nt(10133668),ri=nt(3817026),qs=nt(13352877),jr=nt(13353645),ai=nt(12434098),Eu=nt(1780811),ta=nt(9409688),ea=nt(4164148),iv=nt(9424476),ml=nt(3104556),sv=nt(9054780);function oi(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);const s=new Er(n);return s.colorSpace=be,s.anisotropy=4,s}const vn="Arial, Helvetica, sans-serif";function gl(i,t,e,n){i.lineWidth=n*.42,i.strokeStyle="#1c9a48",i.beginPath(),i.arc(t-n*.3,e+n*.12,n*.55,0,Math.PI*2),i.stroke(),i.strokeStyle="#7cc242",i.beginPath(),i.arc(t+n*.3,e-n*.12,n*.55,0,Math.PI*2),i.stroke()}const li={square:()=>oi(768,224,(i,t,e)=>{const n=["#f2c230","#2f6fb6","#e2457a","#1f2a55","#f08a2a","#39a7a0"],r=e/2,a=78;for(let o=0;o<6;o++){const l=o/6*Math.PI*2-.5,c=(o+1)/6*Math.PI*2-.5;i.fillStyle=n[o],i.beginPath(),i.moveTo(100+8*Math.cos(l+1),r+8*Math.sin(l+1)),i.lineTo(100+a*Math.cos(l),r+a*Math.sin(l)),i.lineTo(100+a*Math.cos(c),r+a*Math.sin(c)),i.fill()}i.fillStyle="#23201e",i.font=`900 88px ${vn}`,i.textBaseline="middle",i.fillText("MOOROOKA",205,e*.29,t-215),i.fillText("SQUARE",240,e*.74,t-300)}),dental:()=>oi(768,256,(i,t,e)=>{i.fillStyle="#1f4fb5",i.beginPath(),i.arc(110,e/2,96,0,Math.PI*2),i.fill(),i.fillStyle="#ffffff",i.beginPath(),i.moveTo(62,96),i.bezierCurveTo(62,56,110,78,110,78),i.bezierCurveTo(110,78,158,56,158,96),i.bezierCurveTo(158,150,142,196,130,196),i.bezierCurveTo(120,196,122,150,110,150),i.bezierCurveTo(98,150,100,196,90,196),i.bezierCurveTo(78,196,62,150,62,96),i.fill(),i.fillStyle="#1f4fb5",i.textBaseline="middle",i.font=`700 64px ${vn}`,i.fillText("moorooka SQUARE",230,70,t-240),i.font=`900 120px ${vn}`,i.fillText("D E N T A L",228,180,t-236)}),medical:()=>oi(768,256,(i,t,e)=>{i.fillStyle="#5aa9e6",i.fillRect(74,28,76,200),i.fillRect(12,90,200,76),i.fillStyle="#ffffff",i.beginPath(),i.arc(112,e/2,26,0,Math.PI*2),i.fill(),i.fillStyle="#1d2f6b",i.textBaseline="middle",i.font=`900 92px ${vn}`,i.fillText("MOOROOKA",236,78,t-246),i.fillText("MEDICAL",236,182,t-300)}),pylonDental:()=>oi(512,160,(i,t,e)=>{i.fillStyle="#1c2f6e",i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.beginPath(),i.arc(70,e/2,44,0,Math.PI*2),i.fill(),i.textBaseline="middle",i.font=`700 40px ${vn}`,i.fillText("moorooka SQUARE",140,48,t-160),i.font=`900 72px ${vn}`,i.fillText("DENTAL",140,110,t-160)}),parking:()=>oi(512,160,(i,t,e)=>{i.fillStyle="#1668c9",i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.textBaseline="middle",i.font=`900 124px ${vn}`,i.fillText("P",150,e/2+6),i.fillRect(256,e/2-13,80,26),i.beginPath(),i.moveTo(330,e/2-42),i.lineTo(382,e/2),i.lineTo(330,e/2+42),i.fill()}),boot:()=>oi(512,160,(i,t,e)=>{i.fillStyle="#178a3c",i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.beginPath(),i.arc(74,62,44,0,Math.PI*2),i.fill(),gl(i,74,62,30),i.fillStyle="#ffffff",i.textBaseline="middle",i.font=`700 30px ${vn}`,i.fillText("woolworths",14,134,130),i.font=`700 56px ${vn}`,i.fillText("Direct",300,52,190),i.fillText("to boot",300,112,190),i.fillRect(178,44,96,62),i.fillStyle="#178a3c",i.fillRect(186,52,80,30)}),tower:()=>oi(512,400,(i,t,e)=>{i.fillStyle="#34383b",i.fillRect(0,0,t,e),gl(i,t/2,150,118),i.fillStyle="#ffffff",i.textBaseline="middle",i.textAlign="center",i.font=`400 88px ${vn}`,i.fillText("woolworths",t/2,336,t-40)}),entry:()=>oi(1024,256,(i,t,e)=>{i.fillStyle="#ffffff",i.textBaseline="middle",i.font=`400 170px ${vn}`,i.fillText("woolworths",20,e/2+14,700),gl(i,880,e/2,104)})};function wu(i){const t=new Je({map:i,alphaTest:.4,roughness:.8,metalness:0,side:ye,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});return t.onBeforeCompile=e=>{e.uniforms.uNight=Ji,e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * uNight * 0.7;`)},t.customProgramCacheKey=()=>"moorooka-sign",t}function Tu(i){const t=y=>Gn(i,y[0],y[1]),e=t(Qx),n=t(jx),s=Math.hypot(n[0]-e[0],n[1]-e[1]),r=(n[0]-e[0])/s,a=(n[1]-e[1])/s,o=(y,E)=>[e[0]+y*r-E*a,e[1]+y*a+E*r],l=t(bu[0]),c=t(bu[1]),h=Math.hypot(c[0]-l[0],c[1]-l[1]),d=(c[0]-l[0])/h,f=(c[1]-l[1])/h,u=f,m=-d,x=l[0]-10*u,p=l[1]-10*m;return{nw:e,centre:o,wing:(y,E)=>[x+y*u+E*d,p+y*m+E*f],toWing:(y,E)=>[(y-x)*u+(E-p)*m,(y-x)*d+(E-p)*f],toCentre:(y,E)=>[(y-e[0])*r+(E-e[1])*a,-(y-e[0])*a+(E-e[1])*r],south:y=>-((x-n[0])*a-(p-n[1])*r+y*(u*a-m*r))/(d*a-f*r),centreHeading:Math.atan2(-a,r),wingHeading:Math.atan2(-m,u),origin:[x,p]}}function rv(i){const t=Tu(i);return(e,n)=>{const[s,r]=t.toWing(e,n);if(s>-14.5&&s<10.4&&r>-11&&r<40)return!0;const[a,o]=t.toCentre(e,n);if(a<-3||a>106||o<-3||o>70)return!1;let l=!1;const c=zs.length/2;for(let h=0,d=c-1;h<c;d=h++){const f=zs[h*2],u=zs[h*2+1],m=zs[d*2],x=zs[d*2+1];u>o!=x>o&&a<(m-f)*(o-u)/(x-u)+f&&(l=!l);const p=Math.max(0,Math.min(1,((a-f)*(m-f)+(o-u)*(x-u))/((m-f)**2+(x-u)**2||1)));if(Math.hypot(a-f-(m-f)*p,o-u-(x-u)*p)<3)return!0}return l}}function av(i,t,e){const n=new Ke;if(n.name="square",!e)return n;const s=Tu(i),r=new _e,a=Zi(410500),o=[],l=e.eave,c=e.ridge,h=l+1.7,d=Math.min(31,l-13);let f=()=>{};const u=(P,N,U)=>{f=()=>r.frame(P,0,N,U),f()},m=()=>u(s.nw[0],s.nw[1],s.centreHeading),x=()=>u(s.origin[0],s.origin[1],s.wingHeading),p=(P,N)=>{const U=Math.hypot(N[0]-P[0],N[1]-P[1]);return u(P[0],P[1],Math.atan2(-(N[1]-P[1])/U,(N[0]-P[0])/U)),U},g=(P,N=1.5)=>t.yAt(r.wx(P,N),r.wz(P,N)),_=(P,N,U,W,C,K)=>o.push({corners:[r.wx(P,C),U,r.wz(P,C),r.wx(N,C),U,r.wz(N,C),r.wx(N,C),W,r.wz(N,C),r.wx(P,C),W,r.wz(P,C)],tex:K}),M=(P,N)=>{(P[5]-P[2])*(P[6]-P[0])-(P[3]-P[0])*(P[8]-P[2])>0?r.quad(P[0],P[1],P[2],P[3],P[4],P[5],P[6],P[7],P[8],P[9],P[10],P[11],N):r.quad(P[0],P[1],P[2],P[9],P[10],P[11],P[6],P[7],P[8],P[3],P[4],P[5],N)},S=(P,N,U,W,C,K,X=0,rt=.05)=>{if(W-U<.05||N-P<.05)return;const at=Math.max(1,Math.round((N-P)/C));for(let ut=0;ut<at;ut++)r.box(P+(N-P)*ut/at,U,X,P+(N-P)*(ut+1)/at,W,rt,ut%2?Gt(K,.955):K,null)},y=(P,N,U,W,C=nv,K=.6)=>{r.quad(P,U,.06,N,U,.06,N,W,.06,P,W,.06,C,K);const X=Math.max(1,Math.round((N-P)/1.4));for(let rt=0;rt<=X;rt++){const at=P+(N-P)*rt/X;r.box(at-.04,U,.06,at+.04,W,.11,Xs,null)}r.box(P,W-.1,.06,N,W,.12,Xs),r.box(P,U,.06,N,U+.12,.12,Xs)},E=(P,N,U,W,C)=>{r.box(P,U,0,N,U+.16,W,Gt(fe,.9),Vs,Gt(fe,.86)),r.box(P,U-.04,W-.1,N,U+.46,W,fe);for(const K of[P,N-.1])r.box(K,U-.04,0,K+.1,U+.46,W,fe);for(const K of[P+.7,N-.7])r.quad(K-.04,C,.06,K+.04,C,.06,K+.04,U+.46,W-.25,K-.04,U+.46,W-.25,ri)},v=(P,N,U,W,C,K,X=Gt(dl,.9))=>{for(let rt=N,at=0;rt<C-.01;rt+=.26,at++)r.box(P,rt,U,W,Math.min(rt+.26,C),K,at%2?Gt(dl,.94):dl,null);X&&r.quad(P,C,K,W,C,K,W,C,U,P,C,U,X)},b=(P,N,U,W,C=ea,K=iv)=>{const X=r.wx(P,U),rt=r.wz(P,U),at=a()*Math.PI;for(let ut=0;ut<6;ut++){r.frame(X,N,rt,at+ut/6*Math.PI*2);const Tt=.75+a()*.4;r.blob(0,W*.48*Tt,W*.2+ut%2*W*.1,W*.2,W*.5*Tt,W*.06,6,4,C,K)}f()},R=(P,N,U,W,C=ml,K=ea)=>r.blob(P,N+W*.7,U,W,W*.8,W,6,4,C,K);m(),r.walls(tv,d,l,Gs);const A=66,D=66.5,O=A/2,z=D/2,I=3.5,Z=l+3,H=(P,N)=>l+(Z-l)*Math.min(1,(1-Math.max(Math.abs(P-O)/O,Math.abs(N-z)/z))/(1-I/O));M([0,l,0,A,l,0,O+I,Z,z-I,O-I,Z,z-I],e.roof),M([A,l,0,A,l,D,O+I,Z,z+I,O+I,Z,z-I],Gt(e.roof,.97)),M([A,l,D,0,l,D,O-I,Z,z+I,O+I,Z,z+I],e.roof),M([0,l,D,0,l,0,O-I,Z,z-I,O-I,Z,z+I],Gt(e.roof,.97)),r.box(O-I,Z,z-I,O+I,Z+.8,z+I,Gt(Gs,.9),nt(8363952));for(const[P,N,U,W]of[[6,12,13,23],[6,12,26,33],[5,10,39,45]])M([P,H(P,U)+.12,U,N,H(N,U)+.12,U,N,H(N,W)+.12,W,P,H(P,W)+.12,W],Eu);const q=l-.35;r.cap(ev,q,Vs),r.quad(A,q,0,A,q,D,A,l,D,A,l,0,Gs);for(const[P,N,U,W]of[[67.5,77,30,44],[67.5,77,47,62],[80.5,87,30,41]])r.box(P,q,U,N,q+.16,W,xn,Eu);for(const[P,N]of[[70,12],[73.5,17],[69,22],[84,44.5],[72,64],[91,25]])r.box(P,q,N,P+2.2,q+1.1,N+1.3,ta,Gt(ta,.85));const k=c-.6;r.box(70.5,q,4,75.5,k,5.1,ri);for(let P=q;P<k-1.4;P+=.5)r.box(70.5,P,5.1,75.5,P+.3,8.2,Gt(ri,1.25),null);r.box(70.5,k-1.6,5.1,75.5,k-1.4,8.2,ri),p(s.centre(75.5,4),s.centre(70.5,4)),_(.25,4.75,k-3.9,k-.25,.04,li.tower());const F=s.centre(98.4,23.2),G=s.centre(98.4,26.3),Q=s.centre(75.2,0);let Y=p(F,Q);r.box(0,l,-.3,Y,h,0,fe,fe),y(.3,3.4,g(1.8),g(1.8)+3.6,Ws);{const P=g(2,1);v(.6,P-.5,.25,3.8,P+.8,1.6,pl);for(const N of[1.2,2.2,3.2])b(N,P+.75,.9,.8);r.box(-.5,P,.3,.3,P+1.9,1.3,nt(9067066));for(let N=0;N<4;N++)r.box(4.3+N*.5,P+.25,.3,4.7+N*.5,P+1,.9,xn,null)}const vt=(P,N,U)=>{for(let W=P;W<N;W+=3){const C=Math.min(W+3,N),K=g(W,1.4)+.3,X=g(C,1.4)+.3;M([W,K,0,W,K,U,C,X,U,C,X,0],jr),r.quad(W,K-.6,U,C,X-.6,U,C,X,U,W,K,U,ai)}};vt(-1,Y,2.8);const j=7,lt=(Y-j-3.6)/3;for(let P=0;P<3;P++){const N=3.6+P*lt,U=N+lt,W=g((N+U)/2);r.box(N,W-.6,0,U,W+.05,.08,Gt(Gs,.8),null),y(N+.35,U-.35,W+.05,W+3),E(N+.15,U-.15,W+3.25,2.1,Math.min(h-.3,W+5.3)),S(N,U,W+3.75,h,1.3,fe)}const ft=zt+4;y(Y-j,Y-.2,g(Y-4)-.2,ft,Ws,.5),r.box(Y-j,ft,0,Y,ft+.5,.35,ri),S(Y-j,Y,ft+.5,h,1.3,fe),Y=p(Q,s.nw),y(.2,6.6,zt-1.2,ft,Ws,.5),r.box(0,ft,0,6.8,ft+.5,.35,ri);{const N=g(48,3);S(24.2,Y,N+4.1,l,6,Hs),y(31,57,N+.1,N+3.1),r.box(27,N+3.5,0,69,N+3.7,2.6,Gt(fe,.92),Vs,Gt(fe,.85)),r.box(27,N+3.45,2.5,69,N+3.95,2.6,fe);for(let U=28;U<=68;U+=8){const W=t.yAt(r.wx(U,2.4),r.wz(U,2.4))-.2;r.cyl(U,W,2.4,.09,.09,N+3.7-W,5,xn)}}const dt=s.centre(0,66.5),pt=s.centre(79.3,66.5);Y=p(s.nw,dt),S(0,Y,g(Y/2)+.3,l,6,Hs);for(const P of[48,55])r.box(P,g(P+2)-.3,0,P+4,g(P+2)+4,.1,xn,null);Y=p(dt,pt),S(0,Y,g(Y/2)+.3,l,6,Hs);{const P=g(22,3);for(let N=11;N<33;N+=5.5)r.box(N,P-.5,0,N+4.2,P+4.2,.1,xn,null);r.box(8,P+5,0,36,P+5.25,5,Gt(fe,.92),Vs,Gt(fe,.82));for(const N of[8.3,17.5,26.5,35.7])r.cyl(N,P-1,4.7,.11,.11,6,5,xn)}const ht=s.centre(79.3,42.5),kt=s.centre(88.2,47.9),it=s.centre(88.2,26.3);Y=p(pt,ht),S(0,Y,g(Y/2)+.3,l,6,Hs),r.box(4,g(5)-.2,0,5.1,g(5)+2.1,.08,Xs,null),Y=p(kt,it),r.box(0,l,-.3,Y,h,0,fe,fe),S(0,Y,g(Y/2)+.3,h,1.3,fe),r.box(3,g(4)-.2,0,4.1,g(4)+2.1,.08,Xs,null),Y=p(it,G),r.box(0,l,-.3,Y,h,0,fe,fe);{const P=g(4);y(.5,5.4,P+.05,P+3),E(.3,5.6,P+3.25,1.9,Math.min(h-.3,P+5.3)),S(0,5.8,P+3.75,h,1.3,fe),y(6,Y-.2,g(8)-.1,g(8)+3.6,Ws),vt(0,Y+1,2.2);for(const N of[6.8,8.6])b(N,g(N,2.6)+.3,2.6,1.5,sv,nt(11880538))}Y=p(G,F),r.box(0,l,-.3,Y,h,0,fe,fe),y(.2,Y-.2,g(3)-.1,g(3)+3.6,Ws),m();const gt=t.yAt(F[0],F[1]),At=95.9,Ot=23.8,Vt=4.4,oe=-50*Math.PI/180,Ve=100*Math.PI/180,re=16,Ie=gt+3.75,he=h+.8,Se=(P,N=Vt)=>{const U=oe+(Ve-oe)*P/re;return[At+N*Math.cos(U),Ot+N*Math.sin(U)]};for(let P=0;P<re;P++){const[N,U]=Se(P),[W,C]=Se(P+1),[K,X]=Se(P,Vt-.14),[rt,at]=Se(P+1,Vt-.14),ut=P%2?Gt(qs,.955):qs;r.quad(W,Ie,C,N,Ie,U,N,he,U,W,he,C,ut),r.quad(K,Ie,X,rt,Ie,at,rt,he,at,K,he,X,Gt(qs,.7)),M([N,he,U,W,he,C,rt,he,at,K,he,X],Gt(qs,.85))}const We=[];for(let P=0;P<=re;P++)We.push(...Se(P,Vt-.14));const[ze,V]=Se(0,Vt-.14);We.push(Se(re,Vt-.14)[0],26.3,98.4,26.3,98.4,23.2,(ze+V+75.2)/2,(ze+V-75.2)/2),r.cap(We,Ie+.02,ri);const Xe=[];for(let P=0;P<=re;P++)Xe.push(...Se(P,Vt+.9));Xe.push(Se(re)[0],26.3,98.4,26.3,98.4,23.2,(ze+V+75.2)/2,(ze+V-75.2)/2),r.cap(Xe,gt+.32,jr);{const P=[101.6,c,21.4],N=[82,h+1.3,4],U=[86,h+1.3,29.6],W=[77,h+.5,13],C=nt(4935765),K=.32;for(const[X,rt,at]of[[P,N,W],[P,W,U]])M([X[0],X[1],X[2],rt[0],rt[1],rt[2],at[0],at[1],at[2],at[0],at[1],at[2]],C),r.tri(X[0],X[1]-K,X[2],rt[0],rt[1]-K,rt[2],at[0],at[1]-K,at[2],Gt(C,1.6));for(const[X,rt]of[[P,N],[N,W],[W,U],[U,P]])r.quad(X[0],X[1]-K,X[2],rt[0],rt[1]-K,rt[2],rt[0],rt[1],rt[2],X[0],X[1],X[2],Gt(C,.9));for(const[X,rt,at]of[[99.3,25.5,c-1.2],[98.9,20.6,c-1.5],[94.2,27.9,h+2.2]]){const[ut,Tt]=s.centre(X,rt);r.cyl(X,t.yAt(ut,Tt)-.3,rt,.17,.17,at-t.yAt(ut,Tt)+.3,6,ri)}}const de=li.entry(),le={pos:[],uv:[]};{const P=62*Math.PI/180,N=-34*Math.PI/180,U=14,W=Ie+.8,C=Ie+2.4;for(let K=0;K<U;K++){const X=Nt=>{const Xt=P+(N-P)*Nt/U;return s.centre(At+(Vt+.05)*Math.cos(Xt),Ot+(Vt+.05)*Math.sin(Xt))},[rt,at]=X(K),[ut,Tt]=X(K+1),Wt=K/U,_t=(K+1)/U;le.pos.push(rt,W,at,ut,W,Tt,ut,C,Tt,rt,W,at,ut,C,Tt,rt,C,at),le.uv.push(Wt,0,_t,0,_t,1,Wt,0,_t,1,Wt,1)}}x();const Mt=s.south(0),ve=s.south(-13),It=s.south(5.2),Ft=-13,L=6.4;r.walls([0,0,0,Mt,Ft,ve,Ft,0],d,sn,Gs);const w=[Ft,0,0,0,0,-.6,L,-.6,L,It,5.2,It,Ft,ve];r.cap(w,Qr,Vs),r.walls(w,sn,Qr,fe),r.cap([0,-.6,L,-.6,L,It,5.2,It,0,Mt],sn,Gt(fe,.93));for(const[P,N]of[[-9,4],[-6,12],[-9.5,16]])r.box(P,Qr,N,P+2.2,Qr+1.1,N+1.3,ta,Gt(ta,.85));for(let P=1.2;P<Mt-1;P+=2.6)for(const N of[1.6,4.4])r.quad(N-.14,sn-.02,P-.14,N+.14,sn-.02,P-.14,N+.14,sn-.02,P+.14,N-.14,sn-.02,P+.14,nt(16774358),3);const J=3.6;r.walls([0,-.3,J,-.3,J,s.south(J),0,Mt],d,zt,ai),r.cap([0,-.3,J,-.3,J,s.south(J),0,Mt],zt,jr);for(let P=1;P<=5;P++){const N=P*Bs;for(const U of[-.2,.2])r.cyl(4.3,zt,N+U,.1,.1,sn-zt,7,fe);r.cyl(1.5,zt,N+.5,.055,.055,sn-zt,5,xn)}const mt=s.south(4.3)-.4;for(const[P,N]of[[-.3,ks[0]],[ks[1],mt]]){v(J,d,P,5,zt+.45,N,pl);for(let U=P+.9;U<N-.6;U+=1.7+a()*.9){const W=a();Math.abs(U/Bs-Math.round(U/Bs))<.12||(W<.55?b(4.3,zt+.4,U,1.5+a()*1.1):W<.75?(r.cyl(4.3,zt+.4,U,.07,.05,1.3,5,nt(9076076)),r.blob(4.3,zt+2.1,U,.85,.6,.85,7,4,ml,ea)):R(4.3,zt+.4,U,.5))}for(let U=P;U<N-.2;U+=4.4){const W=Math.min(U+4.4,N),C=Hn((U+W)/2);if(!(C>zt-.65)){v(5,d,U,6.3,C+.75,W,pl);for(let K=U+.5;K<W-.3;K+=.9+a()*.5)R(5.65,C+.7,K,.28+a()*.14,ml,a()<.3?nt(11122592):ea)}}}{const[P,N]=ks,U=Hn((P+N)/2)+.12,W=zt-U,C=Math.round(W/.168),K=(6.3-J-.3)/C;for(let X=0;X<C;X++)r.box(J+.3+K*X,d,P,J+.3+K*(X+1),zt-W*(X+1)/C,N,ai);r.box(J,d,P,J+.3,zt,N,ai);for(const X of[P+.12,(P+N)/2,N-.12]){for(const[rt,at]of[[J+.3,zt],[6.3,U]])r.box(rt-.03,at,X-.03,rt+.03,at+.95,X+.03,xn,null);r.quad(J+.3,zt+.9,X-.03,6.3,U+.9,X-.03,6.3,U+.96,X+.03,J+.3,zt+.96,X+.03,xn)}}{const P=W=>W>=-2?9.8:9.8+(W+2)*.6,N=W=>W<-.3?2.6:(W<ks[0]||W>ks[1])&&Hn(W)>zt-.65?5:6.3,U=It+1;for(let W=-9.5;W<U;W+=1.5){const C=Math.min(W+1.5,U),K=Hn(W)+.12,X=Hn(C)+.12;M([N(W+.01),K,W,P(W),K,W,P(C),X,C,N(W+.01),X,C],jr),r.quad(P(W),K-1.2,W,P(C),X-1.2,C,P(C),X,C,P(W),K,W,ai)}v(2.2,d,-9.5,2.6,Hn(-5)+1.05,-.8)}v(2.6,d,-.8,4.5,sn,-.3,null),v(Ft,d,-.25,0,sn,.02,null),p(s.wing(4.5,-.8),s.wing(2.6,-.8)),r.box(.15,zt+3.8,0,1.75,zt+4.4,.05,fe),_(.15,1.75,zt+3,zt+3.7,.05,li.pylonDental()),r.box(.15,zt+2.3,0,1.75,zt+2.9,.05,fe),_(.15,1.75,zt+.8,zt+1.5,.05,li.parking()),_(.15,1.75,zt-.1,zt+.7,.05,li.boot()),Y=p(s.wing(0,Mt),s.wing(0,0)),y(.4,Y-.4,zt,zt+2.9),r.box(0,zt+2.9,0,Y,zt+3.3,.12,nt(9407106)),S(.2,Y-.1,zt+3.3,sn-.05,1.25,qs,.2,.3);for(let P=1;P<=5;P++)r.box(Y-P*Bs-.9,zt+3,.1,Y-P*Bs-.82,zt+3.08,1.5,xn);_(Y-19.6,Y-16,zt+3.5,zt+4.7,.34,li.dental()),_(Y-14.6,Y-11.2,zt+3.55,zt+4.68,.34,li.medical()),Y=p(s.wing(Ft,0),s.wing(Ft,ve));{const P=g(Y/2,3);r.box(.4,P-.3,-.5,Y-.4,zt-.6,.02,nt(1777185),null);for(let N=0;N<=Y;N+=Y/4)r.box(N-.3,P-.5,0,N+.3,zt-.6,.12,ai,null);r.box(0,zt-.6,0,Y,zt,.12,ai),S(0,Y,zt,sn,1.3,Hs)}Y=p(s.wing(8.4,-2.8),s.wing(5.6,-4.4));{const P=Hn(-3.6)+.12;v(0,P-1,-.35,Y,P+1.15,0),_(.2,Y-.2,P+.14,P+1.02,.03,li.square())}x();{const P=Hn(15.6)+.12;r.box(6.9,P,15.2,7.4,P+.1,16,ai),r.box(6.95,P+.1,15.25,7.35,P+1.3,15.95,nt(15855590),nt(14276300)),r.box(7.35,P+.35,15.35,7.37,P+1,15.6,nt(15909424),null),r.box(7.35,P+.3,15.65,7.37,P+.95,15.88,nt(3108790),null);for(const[N,U,W]of[[9.2,-1.2,Math.PI],[5.4,-8.4,Math.PI*.75]]){const C=Hn(U)+.12,K=r.wx(N,U),X=r.wz(N,U);r.frame(K,0,X,s.wingHeading+W),r.cyl(0,C,0,.07,.07,4.2,6,xn),r.box(-.17,C+2.9,.08,.17,C+3.95,.3,nt(1776927));for(const[rt,at,ut]of[[0,14169643,0],[1,15114780,0],[2,3126359,2]]){const Tt=C+3.62-rt*.32;r.quad(-.1,Tt,.31,.1,Tt,.31,.1,Tt+.22,.31,-.1,Tt+.22,.31,Gt(nt(at),ut?1:.45),ut)}f()}}r.frame();const ct=new Qt(r.build(),Qi());ct.castShadow=!0,ct.receiveShadow=!0,n.add(ct);for(const P of o){const N=new Re,U=P.corners;N.setAttribute("position",new se([U[0],U[1],U[2],U[3],U[4],U[5],U[6],U[7],U[8],U[0],U[1],U[2],U[6],U[7],U[8],U[9],U[10],U[11]],3)),N.setAttribute("uv",new se([0,0,1,0,1,1,0,0,1,1,0,1],2)),N.computeVertexNormals(),n.add(new Qt(N,wu(P.tex)))}const xt=new Re;return xt.setAttribute("position",new se(le.pos,3)),xt.setAttribute("uv",new se(le.uv,2)),xt.computeVertexNormals(),n.add(new Qt(xt,wu(de))),n}function ov(){const i=[];let t=new _e;t.cyl(0,0,0,.04,.026,.56,4,nt(12168602)),ts(t,0,.72,0,.36,.3,.36,2,nt(4020790),nt(9086578)),ts(t,.17,.52,.1,.24,.19,.24,3,nt(3757370),nt(8099942)),i.push(xi(t)),t=new _e,t.cyl(0,0,0,.06,.045,.36,4,nt(7034954)),ts(t,0,.62,0,.47,.4,.47,4,nt(2773542),nt(7973460)),i.push(xi(t)),t=new _e,t.cyl(0,0,0,.05,.035,.42,4,nt(6246470)),ts(t,0,.66,0,.5,.34,.5,5,nt(6114450),nt(12034278)),i.push(xi(t)),t=new _e,t.cyl(0,0,0,.07,.05,.5,4,nt(6969418)),ts(t,0,.7,0,.62,.26,.62,6,nt(4156975),nt(14831660)),i.push(xi(t)),t=new _e,t.cyl(0,0,0,.034,.026,.82,5,nt(10128504));for(let e=0;e<7;e++)t.frame(0,0,0,e/7*Math.PI*2),t.blob(0,.83-e%2*.03,.13,.04,.022,.13,4,3,nt(3959600),nt(7972432));return t.frame(),t.blob(0,.86,0,.06,.06,.06,5,3,nt(5077562)),i.push(xi(t)),t=new _e,t.cyl(0,0,0,.03,.022,.2,4,nt(5194038)),t.cyl(0,.14,0,.2,.1,.3,6,nt(2310186)),t.cyl(0,.4,0,.16,.07,.3,6,nt(2837040)),t.cyl(0,.66,0,.11,0,.34,6,nt(3627578)),i.push(xi(t)),t=new _e,ts(t,0,.45,0,.8,.5,.8,1,nt(3101224),nt(7774294)),i.push(xi(t)),i}function lv(i,t,e,n=()=>!1){return U_(i.trees,ov(),t,e,n)}const Au=1,Ru={x:-150,z:-40,dist:2900,polar:54,azimuth:22},cv={day:{shallow:9277288,deep:5003844},golden:{shallow:10127458,deep:4671290},night:{shallow:1976876,deep:593681}};function hv(i,t){const e=new _e,n=nt(16765440),s=i.length/2;let r=0;for(let l=0;l<s;l++){const c=(l+1)%s,h=i[l*2]/10,d=i[l*2+1]/10,f=i[c*2]/10,u=i[c*2+1]/10,m=Math.hypot(f-h,u-d);if(m<.01)continue;const x=(f-h)/m,p=(u-d)/m;for(let g=-r;g<m;g+=15){const _=Math.max(0,g),M=Math.min(m,g+9);if(M<=_)continue;const S=Math.max(1,Math.ceil((M-_)/5));for(let y=0;y<S;y++){const E=_+(M-_)*y/S,v=_+(M-_)*(y+1)/S,b=h+x*E,R=d+p*E,A=h+x*v,D=d+p*v,O=t.yAt(b,R)+.9,z=t.yAt(A,D)+.9;e.quad(b-p*1.1,O,R+x*1.1,A-p*1.1,z,D+x*1.1,A+p*1.1,z,D-x*1.1,b+p*1.1,O,R-x*1.1,n)}}r=(r+m)%15}const a=e.build();a.deleteAttribute("glow");const o=new Qt(a,Ah(new ei({vertexColors:!0,transparent:!0,opacity:.9,side:ye,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12})));return o.name="boundary",o}function uv(i){const t=i==null?void 0:i.material;t&&(t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},t.customProgramCacheKey=()=>"moorooka-streets")}class fv extends N_{constructor(e,n,s,r){super(e,n,s,{name:"3D model of Moorooka",home:Ru,intro:{...Ru,dist:6400,polar:22,azimuth:-24},minDistance:22,followGround:!0,maxDistance:7e3,externalStart:[-150,720,1500,0,-.5]},r);ot(this,"water");ot(this,"life");ot(this,"boundary");ot(this,"terrain");ot(this,"model");ot(this,"aerial");ot(this,"aerialWanted",!1);ot(this,"level",0);ot(this,"boundaryOn",!0);ot(this,"flood");ot(this,"floodLoading");ot(this,"floodLevel",1);ot(this,"rising",0);ot(this,"groundDetail");ot(this,"levels",[]);ot(this,"uploader");ot(this,"tilesAt",0);ot(this,"sharpening",!1);ot(this,"sharpState","no");ot(this,"frameAt",0);ot(this,"frameMs",0);ot(this,"frames",0);ot(this,"lowRate",0);ot(this,"detailGround");this.options=r}async build(e,n,s){let r;try{r=await sx(this.options.assets,(R,A)=>this.cb.onProgress(R*.6,A),this.abort.signal)}catch(R){throw new tl(R instanceof Error?R.message:"The model data could not be loaded.")}const{town:a,heights:o,ground:l}=r;this.meta=a.meta,this.level=a.meta.waterLevel*Au;const c=this.clearTest();l.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.model=l,await s(.62,"Shaping the terrain");const[h,d]=a.meta.grid,f=new d_(o,new Float32Array(h*d),h,d,a.meta.size[0],a.meta.size[1],e.step,Au),u={value:a.meta.waterLevel},m=Y_(f,l,u,{title:"MOOROOKA",subtitle:"Brisbane, Queensland   ·   27.53° S  153.03° E   ·   Postcode 4105",scale:a.meta.size[0]/8010},{closeUp:!0});this.terrain=m.getObjectByName("terrain").material,this.groundDetail=m.userData.detail;const x=this.options.assets.detail;x&&a.detailGrid&&n!=="low"&&this.levels.push({grid:a.detailGrid,first:0,slots:n==="medium"?2:Ls,reach:1400,near:1.6,keep:4,url:x,tiles:new Map,wanted:[]}),this.offerSharpGround(n),this.scene.add(m),this.water=ex(f,u),this.scene.add(this.water.skirt,this.water.mesh),await s(.68,"Laying out the streets");const p=H_(a,f);uv(p.group.getObjectByName("roads")),this.scene.add(p.group,Xx(a,f)),this.boundary=hv(a.boundary,f),this.scene.add(this.boundary),await s(.76,"Raising the buildings");const g=Px(a.meta),_=gx(a,f,[...g,this.fromLatLon(yu[0],yu[1])],c),M=Lx(a.meta,f,_.reserved);this.detailGround=M.ground;const S=rv(a.meta);if(this.scene.add(_.group,M.group,av(a.meta,f,_.reserved[g.length]),Ux(a,f,p.index,c,S)),n!=="low"){this.scene.add(zx(p.paths,p.index,f,(A,D)=>S(A,D)||c(A,D)));const R=Cx(a.meta);this.scene.add(Dx(a,f,(A,D)=>R(A,D)||c(A,D)).group)}await s(.88,"Planting trees");const y=Rx(a.meta,_.reserved),E=[];for(let R=0;R<a.trees.length;R+=Dh){const A=a.trees[R]/4,D=a.trees[R+1]/4;!y(A,D)&&!S(A,D)&&!c(A,D)&&E.push(a.trees[R],a.trees[R+1],a.trees[R+2])}const v=lv({...a,trees:Int16Array.from(E)},f,e.trees);this.scene.add(v.group),await s(.94,"Starting the traffic"),this.life=new Kx(a,f,p.paths,p.index,c,S),this.scene.add(this.life.group);const b=P_(Jx,a.meta,f);return{hf:f,atmosphere:new h_(this.renderer,this.water,e.shadow,cv),places:b,roadPaths:p.paths,roadIndex:p.index,info:{quality:n,buildings:_.count,buildingsInSuburb:a.counts.inside,trees:v.count,sources:a.meta.sources,places:b}}}get hasFlood(){return!!this.options.assets.floods&&!!this.options.assets.floodFile}get floodDrop(){var e;return((e=this.flood)==null?void 0:e.info.drop)??8}async floods(){return(await this.floodLayer()).info.events}async floodLayer(){if(this.flood)return this.flood;const{floods:e,floodFile:n}=this.options.assets;if(!e||!n||!this.hf)throw new Error("This copy of the model has no floods.");this.floodLoading??(this.floodLoading=al.load(this.hf,e,n,this.abort.signal).then(s=>{if(this.disposed)throw s.dispose(),new Error("The model has been closed.");return this.flood=s,this.scene.add(s.mesh),s}));try{return await this.floodLoading}catch(s){throw this.floodLoading=void 0,s}}async setFlood(e){if(cancelAnimationFrame(this.rising),!e){this.flood&&await this.flood.show(""),this.invalidate();return}const n=await this.floodLayer();if(await n.show(e,this.abort.signal),this.disposed||n.current!==e)return;const s=performance.now(),r=()=>{var o,l;const a=Math.min(1,(performance.now()-s)/2600);this.applyFloodLevel(a*a*(3-2*a)),(l=(o=this.options).onFloodLevel)==null||l.call(o,this.floodLevel),a<1&&!this.disposed&&(this.rising=requestAnimationFrame(r))};this.applyFloodLevel(0),this.rising=requestAnimationFrame(r)}setFloodLevel(e){cancelAnimationFrame(this.rising),this.applyFloodLevel(e)}applyFloodLevel(e){var n;this.floodLevel=me.clamp(e,0,1),(n=this.flood)==null||n.setLower((1-this.floodLevel)*this.floodDrop),this.invalidate()}floodSurfaceAt(e,n,s=!1){return this.flood?this.flood.surfaceAt(e,n,s):-1/0}tick(e,n){var s,r;this.water.uniforms.uTime.value=n,(s=this.flood)==null||s.tick(n),(r=this.life)==null||r.update(e)}get waterLevel(){return this.level}setLabelsVisible(e){super.setLabelsVisible(e),this.boundaryOn=e,this.boundary&&(this.boundary.visible=e)}setExternalCamera(e,n,s,r,a){super.setExternalCamera(e,n,s,r,a),this.boundary&&(this.boundary.visible=this.boundaryOn&&n-this.groundAt(e,s)>45)}async setAerial(e){if(this.aerialWanted=e,e&&!this.aerial){if(!this.options.assets.aerial)throw new Error("This copy of the model has no aerial photograph.");const s=await rx(this.options.assets.aerial);if(this.disposed){s.dispose();return}s.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.aerial=s}if(!this.terrain||!this.model)return;const n=this.aerialWanted&&!!this.aerial;this.terrain.map=n?this.aerial:this.model,this.placeTiles(),this.detailGround&&(this.detailGround.visible=!n),this.invalidate()}offerSharpGround(e){var r;const n=this.options.assets.sharp,s=new URLSearchParams(window.location.search).get("sharp");if(!(!n||s==="0")){if(s!=="1"){const a=navigator;if(e==="low"||(a.deviceMemory??8)<4||(r=a.connection)!=null&&r.saveData||this.renderer.capabilities.maxTextureSize<4096)return}fetch(n.index,{signal:this.abort.signal}).then(a=>a.ok?a.json():null).then(a=>{if(!(a!=null&&a.tiles.length)||this.disposed)return;const o=new Set(a.tiles);this.levels.push({grid:a.grid,first:Ls,slots:e==="high"?nl:2,reach:420,near:1.5,keep:e==="high"?6:3,url:(l,c)=>o.has(`${l}_${c}`)?n.tile(l,c):void 0,tiles:new Map,wanted:[],sharp:!0}),this.sharpState=s==="1"?"on":"measuring",s==="1"&&(this.frames=-1e9)}).catch(()=>{})}}watchFrameRate(e){const n=e-this.frameAt;if(this.frameAt=e,!(this.sharpState==="no"||n>250))if(this.frameMs=this.frames>0?this.frameMs*.92+n*.08:n,this.frames++,this.sharpState==="measuring"){if(this.frames<50)return;this.frameMs<42?this.sharpState="on":this.dropSharpGround()}else this.levels.some(s=>s.sharp&&s.wanted.some(r=>s.tiles.get(r)))&&(this.lowRate=this.frameMs>60?this.lowRate+1:0,this.lowRate>150&&this.dropSharpGround())}dropSharpGround(){var n;this.sharpState="no";const e=this.levels.find(s=>s.sharp);if(e){for(const s of e.tiles.values())s==null||s.dispose();this.levels=this.levels.filter(s=>s!==e);for(let s=0;s<e.slots;s++)(n=this.groundDetail)==null||n.set(e.first+s,null);this.reportSharpening(),this.invalidate()}}reportSharpening(){var n,s;const e=this.levels.some(r=>r.wanted.some(a=>r.tiles.get(a)===null));e!==this.sharpening&&(this.sharpening=e,(s=(n=this.options).onSharpening)==null||s.call(n,e))}beforeRender(){var s;const e=performance.now();if(this.watchFrameRate(e),(s=this.uploader)!=null&&s.busy){for(let r=0;r<4&&this.uploader.step()&&performance.now()-e<4;r++);this.uploader.busy&&this.invalidate()}if(!this.levels.length||!this.hf||e-this.tilesAt<250)return;this.tilesAt=e;let n=!1;for(const r of this.levels){const a=r.grid,o=[];if(this.viewDistance<r.reach&&(!r.sharp||this.sharpState==="on")){const l=(this.viewFocus.x+this.hf.sizeX/2)/this.hf.sizeX*a,c=(this.viewFocus.z+this.hf.sizeZ/2)/this.hf.sizeZ*a,h=[];for(let d=Math.max(0,Math.floor(c)-2);d<=Math.min(a-1,Math.floor(c)+2);d++)for(let f=Math.max(0,Math.floor(l)-2);f<=Math.min(a-1,Math.floor(l)+2);f++)r.url(d,f)&&h.push([Math.hypot(f+.5-l,d+.5-c),`${d}_${f}`]);h.sort((d,f)=>d[0]-f[0]);for(const[d,f]of h.slice(0,r.slots))d<r.near&&o.push(f)}if(o.join()!==r.wanted.join()){n=!0,r.wanted=o;for(const l of o){if(r.tiles.has(l))continue;const[c,h]=l.split("_").map(Number),d=r.url(c,h);d&&(r.tiles.set(l,null),this.uploader??(this.uploader=new Q_(this.renderer)),this.uploader.load(d,Math.min(r.sharp&&r.slots<nl?4:8,this.renderer.capabilities.getMaxAnisotropy())).then(f=>{if(this.disposed||!this.levels.includes(r))return f.dispose();r.tiles.set(l,f),this.placeTiles()}).catch(()=>{r.tiles.delete(l),this.reportSharpening()}))}for(const[l,c]of r.tiles){if(r.tiles.size<=r.slots+r.keep)break;c&&!o.includes(l)&&(c.dispose(),r.tiles.delete(l))}}}n&&this.placeTiles()}placeTiles(){if(!this.groundDetail)return;const e=this.aerialWanted&&!!this.aerial;for(const n of this.levels){const s=n.grid;for(let r=0;r<n.slots;r++){const a=n.wanted[r],o=a?n.tiles.get(a):null;if(!o||e){this.groundDetail.set(n.first+r,null);continue}const[l,c]=a.split("_").map(Number);this.groundDetail.set(n.first+r,o,[c/s,1-(l+1)/s,(c+1)/s,1-l/s])}}this.reportSharpening(),this.invalidate()}dispose(){var e,n,s;cancelAnimationFrame(this.rising),(e=this.uploader)==null||e.dispose(),(n=this.model)==null||n.dispose(),(s=this.aerial)==null||s.dispose();for(const r of this.levels)for(const a of r.tiles.values())a==null||a.dispose();super.dispose()}}const Cu="Buildings, streets, railway, terrain and imagery © State of Queensland · Parks and flood maps © Brisbane City Council (CC BY 4.0)",_l=.5;function dv(i,t){const e=typeof t.assets=="string"?t.assets:null;let n;const s=document.createElement("p");s.className="inv-sharpening",s.setAttribute("role","status"),s.hidden=!0,s.innerHTML='<span class="inv-sharpening-spin" aria-hidden="true"></span>Loading sharper ground';const r=bi(i,t,{styleKey:"data-moorooka-model",css:Gu,credit:Cu,tide:{min:_l,max:_l,initial:_l},createScene:(a,o,l,c)=>n=new fv(a,o,l,{...c,onFloodLevel:h=>{var d;return(d=t.onFloodLevel)==null?void 0:d.call(t,h)},onSharpening:h=>{s.hidden=!h},assets:{...c.assets,detail:e?(h,d)=>`${e}detail/${h}_${d}.webp`:void 0,floods:e?`${e}floods.json`:void 0,floodFile:e?h=>`${e}flood-${encodeURIComponent(h)}.png`:void 0}}),setTide:()=>{}});return i.appendChild(s),{...r,dispose:()=>{s.remove(),r.dispose()},floods:e?()=>n.floods():void 0,get floodDrop(){return n.floodDrop},setFlood:a=>n.setFlood(a),setFloodLevel:a=>n.setFloodLevel(a),waterAt:(a,o,l)=>l?n.floodSurfaceAt(a,o,!0):Math.max(n.waterLevel,n.floodSurfaceAt(a,o))}}return Sn.CREDIT=Cu,Sn.create=dv,Object.defineProperty(Sn,Symbol.toStringTag,{value:"Module"}),Sn}({});
