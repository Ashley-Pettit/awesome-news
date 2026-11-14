var MoorookaModel=function(En){"use strict";var yv=Object.defineProperty;var bv=(En,In,Ri)=>In in En?yv(En,In,{enumerable:!0,configurable:!0,writable:!0,value:Ri}):En[In]=Ri;var et=(En,In,Ri)=>bv(En,typeof In!="symbol"?In+"":In,Ri);const In=`
.inv-embed, .inv-embed-layer { position: absolute; inset: 0; overflow: hidden; }
/* the labels sit over the model but never take a touch: drags and pinches must reach the canvas underneath */
.inv-embed-labels, .inv-embed .inv-label { pointer-events: none; }
.inv-embed-credit { position: absolute; left: 50%; bottom: var(--inv-credit-bottom, 6px); transform: translateX(-50%); margin: 0; max-width: calc(100% - 24px);
  padding: 2px 8px; border-radius: 4px; background: rgba(13, 24, 30, 0.7); color: rgba(255, 255, 255, 0.82); font: 10px/1.4 system-ui, sans-serif; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; pointer-events: none; }
`;function Ri(i,t,e){if(!document.querySelector(`style[${e.styleKey}]`)){const d=document.createElement("style");d.setAttribute(e.styleKey,""),d.textContent=e.css+In,document.head.appendChild(d)}const n=document.createElement("div");n.className="inv-embed";const s=document.createElement("div");s.className="inv-embed-layer";const r=document.createElement("div");r.className="inv-embed-layer inv-embed-labels";const a=document.createElement("p");a.className="inv-embed-credit",a.textContent=e.credit,n.append(s,r,a),i.appendChild(n);const o=typeof t.assets=="string"?{height:t.assets+"height.png",ground:t.assets+"ground.webp",town:t.assets+"town.json"}:t.assets;let l=[],c=!1,h;const f=new Promise((d,m)=>h={ok:d,fail:m}),u=e.createScene(s,r,{onProgress:(d,m)=>{var M;return(M=t.onProgress)==null?void 0:M.call(t,d,m)},onReady:d=>{l=d.places.map(m=>{const M=Math.min(Math.max(m.view[0]*.55,90),1500),p=m.view[1]*Math.PI/180,g=m.view[2]*Math.PI/180,v=m.x+M*Math.sin(p)*Math.sin(g),S=m.z+M*Math.sin(p)*Math.cos(g),_=Math.max(u.groundAt(v,S),u.waterLevel)+Math.max(M*Math.cos(p),20),y=m.x-v,E=m.y-10-_,x=m.z-S;return{id:m.id,name:m.name,kind:m.kind,x:v,y:_,z:S,yaw:Math.atan2(-y,-x),pitch:Math.atan2(E,Math.hypot(y,x)),tx:m.x,tz:m.z,stand:u.standNear(m.x,m.z)??void 0}}),t.labels===!1&&u.setLabelsVisible(!1),c=!0,h.ok()},onError:d=>{var m;return c?(m=t.onError)==null?void 0:m.call(t,d):h.fail(new Error(d))},onCompass:()=>{}},{assets:o,external:!0,quality:t.quality,clear:t.clear,clearLatLon:t.clearLatLon});return u.init(),{ready:f,setCamera:(d,m,M,p,g)=>u.setExternalCamera(d,m,M,p,g),setMinutes:d=>u.setSolarMinutes(d),setTide:d=>e.setTide(u,d),setAnimating:d=>u.setAnimating(d),setLabelsVisible:d=>u.setLabelsVisible(d),groundAt:(d,m)=>u.groundAt(d,m),waterLevel:()=>u.waterLevel,bounds:()=>u.bounds,fromLatLon:(d,m)=>u.fromLatLon(d,m),setMode:d=>u.setExternal(d!=="bird"),getCamera:()=>u.getCamera(),flyToPlace:d=>u.flyToPlace(d),lookAt:(d,m,M,p,g)=>u.setView(d,m,M,p,g),addParts:d=>u.addParts(d),addPad:d=>u.addPad(d),spots:()=>l,roadSpot:d=>{const m=u.roadSpot(d);return m?{id:"road:"+d,name:d,kind:"landmark",...m,tx:m.x-Math.sin(m.yaw)*70,tz:m.z-Math.cos(m.yaw)*70}:null},tide:e.tide,credit:e.credit,dispose:()=>{u.dispose(),n.remove()}}}const Mf='.inv-label{position:absolute;left:0;top:0;pointer-events:auto;font:600 12px/1 Space Grotesk,system-ui,sans-serif;padding:6px 10px;border-radius:999px;background:#0c1c24e6;color:#fff;border:1px solid rgba(255,255,255,.2);white-space:nowrap;cursor:pointer;will-change:transform}.inv-label:after{content:"";position:absolute;left:50%;bottom:-8px;width:1px;height:8px;background:#ffffffbf}.inv-label:hover{background:#0b7d9c}.inv-label--nature{background:#183826eb}.inv-label--nature:hover{background:#2c7a4b}.inv-label--water{background:none;border-color:transparent;color:#f1fbff;font-style:italic;font-weight:500;font-size:13px;letter-spacing:.1em;text-shadow:0 1px 2px rgba(0,35,60,.95),0 0 8px rgba(0,35,60,.7)}.inv-label--water:after{display:none}.inv-label--water:hover{background:#0c1c2499}.inv-range{-moz-appearance:none;appearance:none;-webkit-appearance:none;height:28px;background:transparent;cursor:pointer}.inv-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range:focus-visible{outline:2px solid #ffd200;outline-offset:4px;border-radius:4px}.inv-range--flood::-webkit-slider-runnable-track{background:linear-gradient(90deg,#d8c79a,#5c9ab8 55%,#17406e)}.inv-range--flood::-moz-range-track{background:linear-gradient(90deg,#d8c79a,#5c9ab8 55%,#17406e)}.inv-sharpening{position:absolute;right:calc(env(safe-area-inset-right,0px) + 8px);bottom:calc(env(safe-area-inset-bottom,0px) + 8px);z-index:2;margin:0;padding:4px;border-radius:50%;background:#0d181e99;line-height:0;pointer-events:none}.inv-sharpening[hidden]{display:none}.inv-sharpening-spin{display:block;width:10px;height:10px;border-radius:50%;border:2px solid rgba(255,255,255,.35);border-top-color:#fff;animation:inv-sharpening-turn .9s linear infinite}.inv-sharpening-text{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@keyframes inv-sharpening-turn{to{transform:rotate(360deg)}}@media (prefers-reduced-motion: reduce){.inv-sharpening-spin{animation:none;border-color:#fff}}';/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pa="187",Nn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},jn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sf=0,zl=1,yf=2,os=1,bf=2,ls=3,ti=0,Ke=1,we=2,Ci=0,cs=1,ma=2,Bl=3,kl=4,Ef=5,Pi=100,wf=101,Af=102,Tf=103,Rf=104,Cf=200,Pf=201,Lf=202,Df=203,Gl=204,Hl=205,If=206,Nf=207,Uf=208,Ff=209,Of=210,zf=211,Bf=212,kf=213,Gf=214,ga=0,xa=1,_a=2,hs=3,va=4,Ma=5,Sa=6,ya=7,ba=0,Hf=1,Vf=2,Un=0,Vl=1,Wl=2,Xl=3,ql=4,Yl=5,$l=6,Ea=7,Zl=300,Li=301,us=302,wa=303,Aa=304,Js=1e3,hn=1001,Ta=1002,Ge=1003,Wf=1004,Qs=1005,We=1006,Ra=1007,wn=1008,tn=1009,Kl=1010,Jl=1011,fs=1012,Ca=1013,An=1014,un=1015,fn=1016,Pa=1017,La=1018,Di=1020,Ql=35902,jl=35899,tc=1021,ec=1022,dn=1023,ei=1026,ni=1027,Da=1028,Ia=1029,ii=1030,Na=1031,Ua=1033,js=33776,tr=33777,er=33778,nr=33779,Fa=35840,Oa=35841,za=35842,Ba=35843,ka=36196,Ga=37492,Ha=37496,Va=37488,Wa=37489,ir=37490,Xa=37491,qa=37808,Ya=37809,$a=37810,Za=37811,Ka=37812,Ja=37813,Qa=37814,ja=37815,to=37816,eo=37817,no=37818,io=37819,so=37820,ro=37821,ao=36492,oo=36494,lo=36495,co=36283,ho=36284,sr=36285,uo=36286,Xf=3200,rr=0,qf=1,Fn="",Te="srgb",ar="srgb-linear",or="linear",de="srgb",fo=7680,Yf=519,$f=512,Zf=513,Kf=514,nc=515,Jf=516,Qf=517,ic=518,sc=519,jf=35044,lr=35048,rc="300 es",pn=2e3,ds=2001;function td(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ed(){const i=ps("canvas");return i.style.display="block",i}const ac={};function oc(...i){const t="THREE."+i.shift();console.log(t,...i)}function lc(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ht(...i){i=lc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function le(...i){i=lc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function cr(...i){const t=i.join(" ");t in ac||(ac[t]=!0,Ht(...i))}function nd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const id={[ga]:ga,[_a]:Sa,[va]:va,[hs]:Ma,[xa]:xa,[Sa]:_a,[ya]:ya,[Ma]:hs};class si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cc=1234567;const ms=Math.PI/180,gs=180/Math.PI;function Ii(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function po(i,t){return(i%t+t)%t}function sd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function rd(i,t,e){return i!==t?(e-i)/(t-i):0}function xs(i,t,e){return(1-e)*i+e*t}function ad(i,t,e,n){return xs(i,t,1-Math.exp(-e*n))}function od(i,t=1){return t-Math.abs(po(i,t*2)-t)}function ld(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function cd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function hd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ud(i,t){return i+Math.random()*(t-i)}function fd(i){return i*(.5-Math.random())}function dd(i){i!==void 0&&(cc=i);let t=cc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pd(i){return i*ms}function md(i){return i*gs}function gd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function xd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _d(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),d=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*d,o*h,o*c);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function uc(i,t){if(t.constructor===Float32Array)return i;const e=mo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function fc(i,t){if(t.constructor===Float32Array)return i;const e=mo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const _e={DEG2RAD:ms,RAD2DEG:gs,generateUUID:Ii,clamp:Jt,euclideanModulo:po,mapLinear:sd,inverseLerp:rd,lerp:xs,damp:ad,pingpong:od,smoothstep:ld,smootherstep:cd,randInt:hd,randFloat:ud,randFloatSpread:fd,seededRandom:dd,degToRad:pd,radToDeg:md,isPowerOfTwo:gd,ceilPowerOfTwo:xd,floorPowerOfTwo:hc,setQuaternionFromProperEuler:_d,normalize:fc,denormalize:uc},Ll=class Ll{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ll.prototype.isVector2=!0;let Bt=Ll;class on{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],m=r[a+2],M=r[a+3];if(f!==M||l!==u||c!==d||h!==m){let p=l*u+c*d+h*m+f*M;p<0&&(u=-u,d=-d,m=-m,M=-M,p=-p);let g=1-o;if(p<.9995){const v=Math.acos(p),S=Math.sin(v);g=Math.sin(g*v)/S,o=Math.sin(o*v)/S,l=l*g+u*o,c=c*g+d*o,h=h*g+m*o,f=f*g+M*o}else{l=l*g+u*o,c=c*g+d*o,h=h*g+m*o,f=f*g+M*o;const v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-o*d,t[e+2]=c*m+h*d+o*u-l*f,t[e+3]=h*m-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Dl=class Dl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return go.copy(this).projectOnVector(t),this.sub(go)}reflect(t){return this.sub(go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dl.prototype.isVector3=!0;let Q=Dl;const go=new Q,dc=new on,Il=class Il{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],M=s[0],p=s[3],g=s[6],v=s[1],S=s[4],_=s[7],y=s[2],E=s[5],x=s[8];return r[0]=a*M+o*v+l*y,r[3]=a*p+o*S+l*E,r[6]=a*g+o*_+l*x,r[1]=c*M+h*v+f*y,r[4]=c*p+h*S+f*E,r[7]=c*g+h*_+f*x,r[2]=u*M+d*v+m*y,r[5]=u*p+d*S+m*E,r[8]=u*g+d*_+m*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=e*f+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/m;return t[0]=f*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=d*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xo.makeScale(t,e)),this}rotate(t){return cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xo.makeRotation(-t)),this}translate(t,e){return cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Il.prototype.isMatrix3=!0;let Vt=Il;const xo=new Vt,pc=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mc=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vd(){const i={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fn?or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ar]:{primaries:t,whitePoint:n,transfer:or,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:n,transfer:de,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),i}const ie=vd();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class Md{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ui===void 0&&(Ui=ps("canvas")),Ui.width=t.width,Ui.height=t.height;const s=Ui.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ui}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ps("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(On(e[n]/255)*255):e[n]=On(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sd=0;class _o{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vo(s[a].image)):r.push(vo(s[a]))}else r=vo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function vo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Md.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}let yd=0;const Mo=new Q;class De extends si{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=hn,s=hn,r=We,a=wn,o=dn,l=tn,c=De.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Ii(),this.name="",this.source=new _o(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Mo).x}get height(){return this.source.getSize(Mo).y}get depth(){return this.source.getSize(Mo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Js:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case Ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Js:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case Ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null,De.DEFAULT_MAPPING=Zl,De.DEFAULT_ANISOTROPY=1;const Nl=class Nl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],M=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-M)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+M)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,_=(d+1)/2,y=(g+1)/2,E=(h+u)/4,x=(f+M)/4,b=(m+p)/4;return S>_&&S>y?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=x/n):_>y?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=b/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=x/r,s=b/r),this.set(n,s,r,e),this}let v=Math.sqrt((p-m)*(p-m)+(f-M)*(f-M)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(f-M)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nl.prototype.isVector4=!0;let Se=Nl;class bd extends si{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new De({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new _o(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends bd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class gc extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ed extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ua=class ua{constructor(t,e,n,s,r,a,o,l,c,h,f,u,d,m,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,d,m,M,p)}set(t,e,n,s,r,a,o,l,c,h,f,u,d,m,M,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=m,g[11]=M,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ua().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Fi.setFromMatrixColumn(t,0).length(),r=1/Fi.setFromMatrixColumn(t,1).length(),a=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=a*h,d=a*f,m=o*h,M=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-M*c,e[9]=-o*l,e[2]=M-u*c,e[6]=m+d*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,m=c*h,M=c*f;e[0]=u+M*o,e[4]=m*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=M+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,m=c*h,M=c*f;e[0]=u-M*o,e[4]=-a*f,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,d=a*f,m=o*h,M=o*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+M,e[1]=l*f,e[5]=M*c+u,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,d=a*c,m=o*l,M=o*c;e[0]=l*h,e[4]=M-u*f,e[8]=m*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-M*f}else if(t.order==="XZY"){const u=a*l,d=a*c,m=o*l,M=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+M,e[5]=a*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=o*h,e[10]=M*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wd,t,Ad)}lookAt(t,e,n){const s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ri.crossVectors(n,nn),ri.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ri.crossVectors(n,nn)),ri.normalize(),hr.crossVectors(nn,ri),s[0]=ri.x,s[4]=hr.x,s[8]=nn.x,s[1]=ri.y,s[5]=hr.y,s[9]=nn.y,s[2]=ri.z,s[6]=hr.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],M=n[6],p=n[10],g=n[14],v=n[3],S=n[7],_=n[11],y=n[15],E=s[0],x=s[4],b=s[8],R=s[12],w=s[1],L=s[5],C=s[9],D=s[13],A=s[2],F=s[6],G=s[10],z=s[14],W=s[3],V=s[7],k=s[11],H=s[15];return r[0]=a*E+o*w+l*A+c*W,r[4]=a*x+o*L+l*F+c*V,r[8]=a*b+o*C+l*G+c*k,r[12]=a*R+o*D+l*z+c*H,r[1]=h*E+f*w+u*A+d*W,r[5]=h*x+f*L+u*F+d*V,r[9]=h*b+f*C+u*G+d*k,r[13]=h*R+f*D+u*z+d*H,r[2]=m*E+M*w+p*A+g*W,r[6]=m*x+M*L+p*F+g*V,r[10]=m*b+M*C+p*G+g*k,r[14]=m*R+M*D+p*z+g*H,r[3]=v*E+S*w+_*A+y*W,r[7]=v*x+S*L+_*F+y*V,r[11]=v*b+S*C+_*G+y*k,r[15]=v*R+S*D+_*z+y*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],M=t[7],p=t[11],g=t[15],v=l*d-c*u,S=o*d-c*f,_=o*u-l*f,y=a*d-c*h,E=a*u-l*h,x=a*f-o*h;return e*(M*v-p*S+g*_)-n*(m*v-p*y+g*E)+s*(m*S-M*y+g*x)-r*(m*_-M*E+p*x)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],M=t[13],p=t[14],g=t[15],v=e*o-n*a,S=e*l-s*a,_=e*c-r*a,y=n*l-s*o,E=n*c-r*o,x=s*c-r*l,b=h*M-f*m,R=h*p-u*m,w=h*g-d*m,L=f*p-u*M,C=f*g-d*M,D=u*g-d*p,A=v*D-S*C+_*L+y*w-E*R+x*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/A;return t[0]=(o*D-l*C+c*L)*F,t[1]=(s*C-n*D-r*L)*F,t[2]=(M*x-p*E+g*y)*F,t[3]=(u*E-f*x-d*y)*F,t[4]=(l*w-a*D-c*R)*F,t[5]=(e*D-s*w+r*R)*F,t[6]=(p*_-m*x-g*S)*F,t[7]=(h*x-u*_+d*S)*F,t[8]=(a*C-o*w+c*b)*F,t[9]=(n*w-e*C-r*b)*F,t[10]=(m*E-M*_+g*v)*F,t[11]=(f*_-h*E-d*v)*F,t[12]=(o*R-a*L-l*b)*F,t[13]=(e*L-n*R+s*b)*F,t[14]=(M*S-m*y-p*v)*F,t[15]=(h*y-f*S+u*v)*F,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,m=r*f,M=a*h,p=a*f,g=o*f,v=l*c,S=l*h,_=l*f,y=n.x,E=n.y,x=n.z;return s[0]=(1-(M+g))*y,s[1]=(d+_)*y,s[2]=(m-S)*y,s[3]=0,s[4]=(d-_)*E,s[5]=(1-(u+g))*E,s[6]=(p+v)*E,s[7]=0,s[8]=(m+S)*x,s[9]=(p-v)*x,s[10]=(1-(u+M))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Fi.set(s[0],s[1],s[2]).length();const o=Fi.set(s[4],s[5],s[6]).length(),l=Fi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),mn.copy(this);const c=1/a,h=1/o,f=1/l;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,e.setFromRotationMatrix(mn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=pn,l=!1){const c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let m,M;if(l)m=r/(a-r),M=a*r/(a-r);else if(o===pn)m=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===ds)m=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=pn,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s);let m,M;if(l)m=1/(a-r),M=a/(a-r);else if(o===pn)m=-2/(a-r),M=-(a+r)/(a-r);else if(o===ds)m=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ua.prototype.isMatrix4=!0;let jt=ua;const Fi=new Q,mn=new jt,wd=new Q(0,0,0),Ad=new Q(1,1,1),ri=new Q,hr=new Q,nn=new Q,xc=new jt,_c=new on;class gn{constructor(t=0,e=0,n=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _c.setFromEuler(this),this.setFromQuaternion(_c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class So{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Td=0;const vc=new Q,Oi=new on,zn=new jt,ur=new Q,_s=new Q,Rd=new Q,Cd=new on,Mc=new Q(1,0,0),Sc=new Q(0,1,0),yc=new Q(0,0,1),bc={type:"added"},Pd={type:"removed"},zi={type:"childadded",child:null},yo={type:"childremoved",child:null};class He extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new Q,e=new gn,n=new on,s=new Q(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new Vt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(Mc,t)}rotateY(t){return this.rotateOnAxis(Sc,t)}rotateZ(t){return this.rotateOnAxis(yc,t)}translateOnAxis(t,e){return vc.copy(t).applyQuaternion(this.quaternion),this.position.add(vc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mc,t)}translateY(t){return this.translateOnAxis(Sc,t)}translateZ(t){return this.translateOnAxis(yc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ur.copy(t):ur.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(_s,ur,this.up):zn.lookAt(ur,_s,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(zn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),zi.child=t,this.dispatchEvent(zi),zi.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pd),yo.child=t,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,Rd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Cd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}He.DEFAULT_UP=new Q(0,1,0),He.DEFAULT_MATRIX_AUTO_UPDATE=!0,He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ie extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ld={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const p=e.getJointPose(M,n),g=this._getHandJoint(c,M);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ld)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Eo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?i+(t-i)*6*e:e<.5?t:e<.6666666666666666?i+(t-i)*6*(.6666666666666666-e):i}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=po(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Eo(a,r,t+.3333333333333333),this.g=Eo(a,r,t),this.b=Eo(a,r,t-.3333333333333333)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const n=Ec[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return ie.workingToColorSpace(qe.copy(this),t),Math.round(Jt(qe.r*255,0,255))*65536+Math.round(Jt(qe.g*255,0,255))*256+Math.round(Jt(qe.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,r=qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Te){ie.workingToColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(fr);const n=xs(ai.h,fr.h,e),s=xs(ai.s,fr.s,e),r=xs(ai.l,fr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Ct;Ct.NAMES=Ec;class Dd extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const xn=new Q,Bn=new Q,wo=new Q,kn=new Q,Bi=new Q,ki=new Q,wc=new Q,Ao=new Q,To=new Q,Ro=new Q,Co=new Se,Po=new Se,Lo=new Se;class _n{constructor(t=new Q,e=new Q,n=new Q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),Bn.subVectors(n,e),wo.subVectors(t,e);const a=xn.dot(xn),o=xn.dot(Bn),l=xn.dot(wo),c=Bn.dot(Bn),h=Bn.dot(wo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Co.setScalar(0),Po.setScalar(0),Lo.setScalar(0),Co.fromBufferAttribute(t,e),Po.fromBufferAttribute(t,n),Lo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Co,r.x),a.addScaledVector(Po,r.y),a.addScaledVector(Lo,r.z),a}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),Bn.subVectors(t,e),xn.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),xn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return _n.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Bi.subVectors(s,n),ki.subVectors(r,n),Ao.subVectors(t,n);const l=Bi.dot(Ao),c=ki.dot(Ao);if(l<=0&&c<=0)return e.copy(n);To.subVectors(t,s);const h=Bi.dot(To),f=ki.dot(To);if(h>=0&&f<=h)return e.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Bi,a);Ro.subVectors(t,r);const d=Bi.dot(Ro),m=ki.dot(Ro);if(m>=0&&d<=m)return e.copy(r);const M=d*c-l*m;if(M<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(ki,o);const p=h*m-d*f;if(p<=0&&f-h>=0&&d-m>=0)return wc.subVectors(r,s),o=(f-h)/(f-h+(d-m)),e.copy(s).addScaledVector(wc,o);const g=1/(p+M+u);return a=M*g,o=u*g,e.copy(n).addScaledVector(Bi,a).addScaledVector(ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class mi{constructor(t=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(t.matrixWorld),this.union(dr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),pr.subVectors(this.max,vs),Gi.subVectors(t.a,vs),Hi.subVectors(t.b,vs),Vi.subVectors(t.c,vs),oi.subVectors(Hi,Gi),li.subVectors(Vi,Hi),gi.subVectors(Gi,Vi);let e=[0,-oi.z,oi.y,0,-li.z,li.y,0,-gi.z,gi.y,oi.z,0,-oi.x,li.z,0,-li.x,gi.z,0,-gi.x,-oi.y,oi.x,0,-li.y,li.x,0,-gi.y,gi.x,0];return!Do(e,Gi,Hi,Vi,pr)||(e=[1,0,0,0,1,0,0,0,1],!Do(e,Gi,Hi,Vi,pr))?!1:(mr.crossVectors(oi,li),e=[mr.x,mr.y,mr.z],Do(e,Gi,Hi,Vi,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Gn=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],vn=new Q,dr=new mi,Gi=new Q,Hi=new Q,Vi=new Q,oi=new Q,li=new Q,gi=new Q,vs=new Q,pr=new Q,mr=new Q,xi=new Q;function Do(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){xi.fromArray(i,r);const o=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Hn=Id();function Id(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Nd(i){Math.abs(i)>65504&&Ht("DataUtils.toHalfFloat(): Value out of range."),i=Jt(i,-65504,65504),Hn.floatView[0]=i;const t=Hn.uint32View[0],e=t>>23&511;return Hn.baseTable[e]+((t&8388607)>>Hn.shiftTable[e])}function Ud(i){const t=i>>10;return Hn.uint32View[0]=Hn.mantissaTable[Hn.offsetTable[t]+(i&1023)]+Hn.exponentTable[t],Hn.floatView[0]}class Ac{static toHalfFloat(t){return Nd(t)}static fromHalfFloat(t){return Ud(t)}}const Ce=new Q,gr=new Bt;let Fd=0;class Pe extends si{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jf,this.updateRanges=[],this.gpuType=un,this.version=0,this._normalizationScale=t!==void 0?mo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):uc(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):fc(t,this.array)}}class Tc extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Rc extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Od=new mi,Ms=new Q,Io=new Q;class Ss{constructor(t=new Q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Od.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);const e=Ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add(Io)),this.expandByPoint(Ms.copy(t.center).sub(Io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let zd=0;const ln=new jt,No=new He,Wi=new Q,sn=new mi,ys=new mi,ze=new Q;class Re extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(td(t)?Rc:Tc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return No.lookAt(t),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(sn.min,ys.min),sn.expandByPoint(ze),ze.addVectors(sn.max,ys.max),sn.expandByPoint(ze)):(sn.expandByPoint(ys.min),sn.expandByPoint(ys.max))}sn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ze.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(t,c),ze.add(Wi)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Pe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)o[R]=new Q,l[R]=new Q;const h=new Q,f=new Q,u=new Q,d=new Bt,m=new Bt,M=new Bt,p=new Q,g=new Q;function v(R,w,L){c[R]=c[w]=c[L]=1,h.fromBufferAttribute(n,R),f.fromBufferAttribute(n,w),u.fromBufferAttribute(n,L),d.fromBufferAttribute(r,R),m.fromBufferAttribute(r,w),M.fromBufferAttribute(r,L),f.sub(h),u.sub(h),m.sub(d),M.sub(d);const C=1/(m.x*M.y-M.x*m.y);isFinite(C)&&(p.copy(f).multiplyScalar(M.y).addScaledVector(u,-m.y).multiplyScalar(C),g.copy(u).multiplyScalar(m.x).addScaledVector(f,-M.x).multiplyScalar(C),o[R].add(p),o[w].add(p),o[L].add(p),l[R].add(g),l[w].add(g),l[L].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,w=S.length;R<w;++R){const L=S[R],C=L.start,D=L.count;for(let A=C,F=C+D;A<F;A+=3)v(t.getX(A+0),t.getX(A+1),t.getX(A+2))}const _=new Q,y=new Q,E=new Q,x=new Q;function b(R){E.fromBufferAttribute(s,R),x.copy(E);const w=o[R];_.copy(w),_.sub(E.multiplyScalar(E.dot(w))).normalize(),y.crossVectors(x,w);const C=y.dot(l[R])<0?-1:1;a.setXYZW(R,_.x,_.y,_.z,C)}for(let R=0,w=n.count;R<w;++R)c[R]&&b(R);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new Q,r=new Q,a=new Q,o=new Q,l=new Q,c=new Q,h=new Q,f=new Q;if(t)for(let u=0,d=t.count;u<d;u+=3){const m=t.getX(u+0),M=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*h;for(let g=0;g<h;g++)u[m++]=c[d++]}return new Pe(u,h,f)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uo=new Q,Bd=new Q,kd=new Vt;class Rn{constructor(t=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Uo.subVectors(n,e).cross(Bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Uo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||kd.getNormalMatrix(t),s=this.coplanarPoint(Uo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Gd=0;class Xi extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=cs,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Hl,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Rn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Bt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Bt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Vn=new Q,Fo=new Q,xr=new Q,_r=new Q;class Oo{constructor(t=new Q,e=new Q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fo.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),_r.copy(this.origin).sub(Fo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(xr),o=_r.dot(this.direction),l=-_r.dot(xr),c=_r.lengthSq(),h=Math.abs(1-a*a);let f,u,d,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){const M=1/h;f*=M,u*=M,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Fo).addScaledVector(xr,u),d}intersectSphere(t,e){if(t.radius<0)return null;Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,m=e.x-a.x,M=e.y-a.y,p=e.z-a.z,g=n.x-a.x,v=n.y-a.y,S=n.z-a.z,_=Math.abs(l),y=Math.abs(c),E=Math.abs(h);let x,b,R,w,L,C,D,A,F,G,z,W;if(_>=y&&_>=E?(R=l,C=f,F=m,W=g,l>=0?(x=c,b=h,w=u,L=d,D=M,A=p,G=v,z=S):(x=h,b=c,w=d,L=u,D=p,A=M,G=S,z=v)):y>=E?(R=c,C=u,F=M,W=v,c>=0?(x=h,b=l,w=d,L=f,D=p,A=m,G=S,z=g):(x=l,b=h,w=f,L=d,D=m,A=p,G=g,z=S)):(R=h,C=d,F=p,W=S,h>=0?(x=l,b=c,w=f,L=u,D=m,A=M,G=g,z=v):(x=c,b=l,w=u,L=f,D=M,A=m,G=v,z=g)),R===0)return null;const V=x/R,k=b/R,H=1/R,X=w-V*C,ht=L-k*C,Y=D-V*F,ct=A-k*F,lt=G-V*W,xt=z-k*W,dt=lt*ct-xt*Y,Pt=X*xt-ht*lt,Yt=Y*ht-ct*X;if(s){if(dt<0||Pt<0||Yt<0)return null}else if((dt<0||Pt<0||Yt<0)&&(dt>0||Pt>0||Yt>0))return null;const bt=dt+Pt+Yt;if(bt===0)return null;const ut=H*(dt*C+Pt*F+Yt*W);return(bt>0?ut<0:ut>0)?null:this.at(ut/bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wn extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Cc=new jt,_i=new Oo,vr=new Ss,Pc=new Q,Mr=new Q,Sr=new Q,yr=new Q,zo=new Q,br=new Q,Lc=new Q,Er=new Q;class Qt extends He{constructor(t=new Re,e=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(zo.fromBufferAttribute(f,t),a?br.addScaledVector(zo,h):br.addScaledVector(zo.sub(e),h))}e.add(br)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(vr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(vr,Pc)===null||_i.origin.distanceToSquared(Pc)>(t.far-t.near)**2))&&(Cc.copy(r).invert(),_i.copy(t.ray).applyMatrix4(Cc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,M=u.length;m<M;m++){const p=u[m],g=a[p.materialIndex],v=Math.max(p.start,d.start),S=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let _=v,y=S;_<y;_+=3){const E=o.getX(_),x=o.getX(_+1),b=o.getX(_+2);s=wr(this,g,t,n,c,h,f,E,x,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let p=m,g=M;p<g;p+=3){const v=o.getX(p),S=o.getX(p+1),_=o.getX(p+2);s=wr(this,a,t,n,c,h,f,v,S,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,M=u.length;m<M;m++){const p=u[m],g=a[p.materialIndex],v=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let _=v,y=S;_<y;_+=3){const E=_,x=_+1,b=_+2;s=wr(this,g,t,n,c,h,f,E,x,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let p=m,g=M;p<g;p+=3){const v=p,S=p+1,_=p+2;s=wr(this,a,t,n,c,h,f,v,S,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Hd(i,t,e,n,s,r,a,o){let l;if(t.side===Ke?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ti,o),l===null)return null;Er.copy(o),Er.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Er);return c<e.near||c>e.far?null:{distance:c,point:Er.clone(),object:i}}function wr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Mr),i.getVertexPosition(l,Sr),i.getVertexPosition(c,yr);const h=Hd(i,t,e,n,Mr,Sr,yr,Lc);if(h){const f=new Q;_n.getBarycoord(Lc,Mr,Sr,yr,f),s&&(h.uv=_n.getInterpolatedAttribute(s,o,l,c,f,new Bt)),r&&(h.uv1=_n.getInterpolatedAttribute(r,o,l,c,f,new Bt)),a&&(h.normal=_n.getInterpolatedAttribute(a,o,l,c,f,new Q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new Q,materialIndex:0};_n.getNormal(Mr,Sr,yr,u.normal),h.face=u,h.barycoord=f}return h}class bs extends De{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ge,h=Ge,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dc extends Pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const qi=new jt,Ic=new jt,Ar=[],Nc=new mi,Vd=new jt,Es=new Qt,ws=new Ss;class rn extends Qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Dc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Vd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),Nc.copy(t.boundingBox).applyMatrix4(qi),this.boundingBox.union(Nc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ss),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),ws.copy(t.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(ws)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ws.copy(this.boundingSphere),ws.applyMatrix4(n),t.ray.intersectsSphere(ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qi),Ic.multiplyMatrices(n,qi),Es.matrixWorld=Ic,Es.raycast(t,Ar);for(let a=0,o=Ar.length;a<o;a++){const l=Ar[a];l.instanceId=r,l.object=this,e.push(l)}Ar.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Dc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new bs(new Float32Array(s*this.count),s,this.count,Da,un));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const vi=new Ss,Wd=new Bt(.5,.5),Tr=new Q;class As{constructor(t=new Rn,e=new Rn,n=new Rn,s=new Rn,r=new Rn,a=new Rn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],M=r[9],p=r[10],g=r[11],v=r[12],S=r[13],_=r[14],y=r[15];if(s[0].setComponents(c-a,d-h,g-m,y-v).normalize(),s[1].setComponents(c+a,d+h,g+m,y+v).normalize(),s[2].setComponents(c+o,d+f,g+M,y+S).normalize(),s[3].setComponents(c-o,d-f,g-M,y-S).normalize(),n)s[4].setComponents(l,u,p,_).normalize(),s[5].setComponents(c-l,d-u,g-p,y-_).normalize();else if(s[4].setComponents(c-l,d-u,g-p,y-_).normalize(),e===pn)s[5].setComponents(c+l,d+u,g+p,y+_).normalize();else if(e===ds)s[5].setComponents(l,u,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){vi.center.set(0,0,0);const e=Wd.distanceTo(t.center);return vi.radius=.7071067811865476+e,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Tr.x=s.normal.x>0?t.max.x:t.min.x,Tr.y=s.normal.y>0?t.max.y:t.min.y,Tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Uc=new jt;class Bo{constructor(){this.coordinateSystem=pn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];Uc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new As),n[s].setFromProjectionMatrix(Uc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new As),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new Bo().copy(this)}}class Fc extends De{constructor(t=[],e=Li,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rr extends De{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yi extends De{constructor(t,e,n=An,s,r,a,o=Ge,l=Ge,c,h=ei,f=1){if(h!==ei&&h!==ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _o(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Oc extends Yi{constructor(t,e=An,n=Li,s,r,a=Ge,o=Ge,l,c=ei){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class zc extends De{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Mi extends Re{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(f,2));function m(M,p,g,v,S,_,y,E,x,b,R){const w=_/x,L=y/b,C=_/2,D=y/2,A=E/2,F=x+1,G=b+1;let z=0,W=0;const V=new Q;for(let k=0;k<G;k++){const H=k*L-D;for(let X=0;X<F;X++){const ht=X*w-C;V[M]=ht*v,V[p]=H*S,V[g]=A,c.push(V.x,V.y,V.z),V[M]=0,V[p]=0,V[g]=E>0?1:-1,h.push(V.x,V.y,V.z),f.push(X/x),f.push(1-k/b),z+=1}}for(let k=0;k<b;k++)for(let H=0;H<x;H++){const X=u+H+F*k,ht=u+H+F*(k+1),Y=u+(H+1)+F*(k+1),ct=u+(H+1)+F*k;l.push(X,ht,ct),l.push(ht,Y,ct),W+=6}o.addGroup(d,W,R),d+=W,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ko extends Re{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let m=0;const M=[],p=n/2;let g=0;v(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new re(f,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(d,2));function v(){const _=new Q,y=new Q;let E=0;const x=(e-t)/n;for(let b=0;b<=r;b++){const R=[],w=b/r,L=w*(e-t)+t;for(let C=0;C<=s;C++){const D=C/s,A=D*l+o,F=Math.sin(A),G=Math.cos(A);y.x=L*F,y.y=-w*n+p,y.z=L*G,f.push(y.x,y.y,y.z),_.set(F,x,G).normalize(),u.push(_.x,_.y,_.z),d.push(D,1-w),R.push(m++)}M.push(R)}for(let b=0;b<s;b++)for(let R=0;R<r;R++){const w=M[R][b],L=M[R+1][b],C=M[R+1][b+1],D=M[R][b+1];(t>0||R!==0)&&(h.push(w,L,D),E+=3),(e>0||R!==r-1)&&(h.push(L,C,D),E+=3)}c.addGroup(g,E,0),g+=E}function S(_){const y=m,E=new Bt,x=new Q;let b=0;const R=_===!0?t:e,w=_===!0?1:-1;for(let C=1;C<=s;C++)f.push(0,p*w,0),u.push(0,w,0),d.push(.5,.5),m++;const L=m;for(let C=0;C<=s;C++){const A=C/s*l+o,F=Math.cos(A),G=Math.sin(A);x.x=R*G,x.y=p*w,x.z=R*F,f.push(x.x,x.y,x.z),u.push(0,w,0),E.x=F*.5+.5,E.y=G*.5*w+.5,d.push(E.x,E.y),m++}for(let C=0;C<s;C++){const D=y+C,A=L+C;_===!0?h.push(A,A+1,D):h.push(A+1,A,D),b+=3}c.addGroup(g,b,_===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Go extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const S=new Q,_=new Q,y=new Q;for(let E=0;E<e.length;E+=3)d(e[E+0],S),d(e[E+1],_),d(e[E+2],y),l(S,_,y,v)}function l(v,S,_,y){const E=y+1,x=[];for(let b=0;b<=E;b++){x[b]=[];const R=v.clone().lerp(_,b/E),w=S.clone().lerp(_,b/E),L=E-b;for(let C=0;C<=L;C++)C===0&&b===E?x[b][C]=R:x[b][C]=R.clone().lerp(w,C/L)}for(let b=0;b<E;b++)for(let R=0;R<2*(E-b)-1;R++){const w=Math.floor(R/2);R%2===0?(u(x[b][w+1]),u(x[b+1][w]),u(x[b][w])):(u(x[b][w+1]),u(x[b+1][w+1]),u(x[b+1][w]))}}function c(v){const S=new Q;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(v),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function h(){const v=new Q;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];const _=p(v)/2/Math.PI+.5,y=g(v)/Math.PI+.5;a.push(_,1-y)}m(),f()}function f(){for(let v=0;v<a.length;v+=6){const S=a[v+0],_=a[v+2],y=a[v+4],E=Math.max(S,_,y),x=Math.min(S,_,y);E>.9&&x<.1&&(S<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),y<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function d(v,S){const _=v*3;S.x=t[_+0],S.y=t[_+1],S.z=t[_+2]}function m(){const v=new Q,S=new Q,_=new Q,y=new Q,E=new Bt,x=new Bt,b=new Bt;for(let R=0,w=0;R<r.length;R+=9,w+=6){v.set(r[R+0],r[R+1],r[R+2]),S.set(r[R+3],r[R+4],r[R+5]),_.set(r[R+6],r[R+7],r[R+8]),E.set(a[w+0],a[w+1]),x.set(a[w+2],a[w+3]),b.set(a[w+4],a[w+5]),y.copy(v).add(S).add(_).divideScalar(3);const L=p(y);M(E,w+0,v,L),M(x,w+2,S,L),M(b,w+4,_,L)}}function M(v,S,_,y){y<0&&v.x===1&&(a[S]=v.x-1),_.x===0&&_.z===0&&(a[S]=y/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.vertices,t.indices,t.radius,t.detail)}}function Xd(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Bc(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Kd(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,f=l;for(let u=e;u<s;u+=e){const d=i[u],m=i[u+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Ts(r,a,e,o,l,c,0),a}function Bc(i,t,e,n,s){let r;if(s===op(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Vc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Vc(a/n|0,i[a],i[a+1],r);return r&&$i(r,r.next)&&(Ps(r),r=r.next),r}function Si(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($i(e,e.next)||ye(e.prev,e,e.next)===0)){if(Ps(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ts(i,t,e,n,s,r,a){if(!i)return;!a&&r&&ep(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Yd(i,n,s,r):qd(i)){t.push(l.i,i.i,c.i),Ps(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=$d(Si(i),t),Ts(i,t,e,n,s,r,2)):a===2&&Zd(i,t,e,n,s,r):Ts(Si(i),t,e,n,s,r,1);break}}}function qd(i){const t=i.prev,e=i,n=i.next;if(ye(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Rs(s,o,r,l,a,c,m.x,m.y)&&ye(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Yd(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ye(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),m=Math.min(h,f,u),M=Math.max(o,l,c),p=Math.max(h,f,u),g=Ho(d,m,t,e,n),v=Ho(M,p,t,e,n);let S=i.prevZ,_=i.nextZ;for(;S&&S.z>=g&&_&&_.z<=v;){if(S.x>=d&&S.x<=M&&S.y>=m&&S.y<=p&&S!==s&&S!==a&&Rs(o,h,l,f,c,u,S.x,S.y)&&ye(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=d&&_.x<=M&&_.y>=m&&_.y<=p&&_!==s&&_!==a&&Rs(o,h,l,f,c,u,_.x,_.y)&&ye(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=g;){if(S.x>=d&&S.x<=M&&S.y>=m&&S.y<=p&&S!==s&&S!==a&&Rs(o,h,l,f,c,u,S.x,S.y)&&ye(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=M&&_.y>=m&&_.y<=p&&_!==s&&_!==a&&Rs(o,h,l,f,c,u,_.x,_.y)&&ye(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function $d(i,t){let e=i;do{const n=e.prev,s=e.next.next;!$i(n,s)&&Gc(n,e,e.next,s)&&Cs(n,s)&&Cs(s,n)&&(t.push(n.i,e.i,s.i),Ps(e),Ps(e.next),e=i=s),e=e.next}while(e!==i);return Si(e)}function Zd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&sp(a,o)){let l=Hc(a,o);a=Si(a,a.next),l=Si(l,l.next),Ts(a,t,e,n,s,r,0),Ts(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Kd(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Bc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ip(c))}s.sort(Jd);for(let r=0;r<s.length;r++)e=Qd(s[r],e);return e}function Jd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Qd(i,t){const e=jd(i,t);if(!e)return t;const n=Hc(e,i);return Si(n,n.next),Si(e,e.next)}function jd(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if($i(i,e))return e;do{if($i(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&kc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);Cs(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&tp(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function tp(i,t){return ye(i.prev,i,t.prev)<0&&ye(t.next,i,i.next)<0}function ep(i,t,e,n){let s=i;do s.z===0&&(s.z=Ho(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,np(s)}function np(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Ho(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ip(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function kc(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Rs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&kc(i,t,e,n,s,r,a,o)}function sp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!rp(i,t)&&(Cs(i,t)&&Cs(t,i)&&ap(i,t)&&(ye(i.prev,i,t.prev)||ye(i,t.prev,t))||$i(i,t)&&ye(i.prev,i,i.next)>0&&ye(t.prev,t,t.next)>0)}function ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $i(i,t){return i.x===t.x&&i.y===t.y}function Gc(i,t,e,n){const s=Pr(ye(i,t,e)),r=Pr(ye(i,t,n)),a=Pr(ye(e,n,i)),o=Pr(ye(e,n,t));return!!(s!==r&&a!==o||s===0&&Cr(i,e,t)||r===0&&Cr(i,n,t)||a===0&&Cr(e,i,n)||o===0&&Cr(e,t,n))}function Cr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Pr(i){return i>0?1:i<0?-1:0}function rp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Gc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Cs(i,t){return ye(i.prev,i,i.next)<0?ye(i,t,i.next)>=0&&ye(i,i.prev,t)>=0:ye(i,t,i.prev)<0||ye(i,i.next,t)<0}function ap(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Hc(i,t){const e=Vo(i.i,i.x,i.y),n=Vo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Vc(i,t,e,n){const s=Vo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ps(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function op(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class lp{static triangulate(t,e,n=2){return Xd(t,e,n)}}class Wo{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Wo.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Wc(t),Xc(n,t);let a=t.length;e.forEach(Wc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Xc(n,e[l]);const o=lp.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Wc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Xc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Xo extends Go{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xo(t.radius,t.detail)}}class ci extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],m=[],M=[],p=[];for(let g=0;g<h;g++){const v=g*u-a;for(let S=0;S<c;S++){const _=S*f-r;m.push(_,-v,0),M.push(0,0,1),p.push(S/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){const S=v+c*g,_=v+c*(g+1),y=v+1+c*(g+1),E=v+1+c*g;d.push(S,_,E),d.push(_,y,E)}this.setIndex(d),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(M,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.width,t.height,t.widthSegments,t.heightSegments)}}class qo extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new Q,u=new Q,d=[],m=[],M=[],p=[];for(let g=0;g<=n;g++){const v=[],S=g/n,_=a+S*o,y=t*Math.cos(_),E=Math.sqrt(t*t-y*y);let x=0;g===0&&a===0?x=.5/e:g===n&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){const R=b/e,w=s+R*r;f.x=-E*Math.cos(w),f.y=y,f.z=E*Math.sin(w),m.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),p.push(R+x,1-S),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<e;v++){const S=h[g][v+1],_=h[g][v],y=h[g+1][v],E=h[g+1][v+1];(g!==0||a>0)&&d.push(S,_,E),(g!==n-1||l<Math.PI)&&d.push(_,y,E)}this.setIndex(d),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(M,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Zi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(qc(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(qc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Je(i){const t={};for(let e=0;e<i.length;e++){const n=Zi(i[e]);for(const s in n)t[s]=n[s]}return t}function qc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function cp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const hp={clone:Zi,merge:Je};var up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=cp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ct().setHex(s.value);break;case"v2":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Q().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Vt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new jt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class dp extends Xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ye extends Xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $c extends Xi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=ba,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pp extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mp extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Yo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Zc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Zc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Zc(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class gp{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const xp=new gp;class $o{constructor(t){this.manager=t!==void 0?t:xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}$o.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ki=new WeakMap;class _p extends $o{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Yo.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=Ki.get(a);f===void 0&&(f=[],Ki.set(a,f)),f.push({onLoad:e,onError:s})}return a}const o=ps("img");function l(){h(),e&&e(this);const f=Ki.get(this)||[];for(let u=0;u<f.length;u++){const d=f[u];d.onLoad&&d.onLoad(this)}Ki.delete(this),r.manager.itemEnd(t)}function c(f){h(),s&&s(f),Yo.remove(`image:${t}`);const u=Ki.get(this)||[];for(let d=0;d<u.length;d++){const m=u[d];m.onError&&m.onError(f)}Ki.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Yo.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}}class Kc extends $o{constructor(t){super(t)}load(t,e,n,s){const r=new De,a=new _p(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Jc extends He{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class vp extends Jc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Zo=new jt,Qc=new Q,jc=new Q;class Mp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Qc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qc),jc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Zo,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ds||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Lr=new Q,Dr=new on,Cn=new Q;class th extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Lr,Dr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lr,Dr,Cn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Lr,Dr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lr,Dr,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hi=new Q,eh=new Bt,nh=new Bt;class Mn extends th{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,eh,nh),e.subVectors(nh,eh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ms*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ih extends th{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Sp extends Mp{constructor(){super(new ih(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yp extends Jc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Sp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Ji=-90,Qi=1;class Ko extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(Ji,Qi,t,e);s.layers=this.layers,this.add(s);const r=new Mn(Ji,Qi,t,e);r.layers=this.layers,this.add(r);const a=new Mn(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const o=new Mn(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const l=new Mn(Ji,Qi,t,e);l.layers=this.layers,this.add(l);const c=new Mn(Ji,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class bp extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const sh=new jt;class Ep{constructor(t,e,n=0,s=1/0){this.ray=new Oo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new So,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):le("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return sh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sh),this}intersectObject(t,e=!0,n=[]){return Jo(t,this,n,e),n.sort(rh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Jo(t[s],this,n,e);return n.sort(rh),n}}function rh(i,t){return i.distance-t.distance}function Jo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Jo(r[a],t,e,!0)}}class Ir{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ul=class Ul{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Ul.prototype.isMatrix2=!0;let ah=Ul;class wp extends si{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function oh(i,t,e,n){const s=Ap(n);switch(e){case tc:return i*t;case Da:return i*t/s.components*s.byteLength;case Ia:return i*t/s.components*s.byteLength;case ii:return i*t*2/s.components*s.byteLength;case Na:return i*t*2/s.components*s.byteLength;case ec:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case Ua:return i*t*4/s.components*s.byteLength;case js:case tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case er:case nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:case Ba:return Math.max(i,16)*Math.max(t,8)/4;case Fa:case za:return Math.max(i,8)*Math.max(t,8)/2;case ka:case Ga:case Va:case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ha:case ir:case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case to:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case no:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case io:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case so:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ro:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ao:case oo:case lo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case co:case ho:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sr:case uo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ap(i){switch(i){case tn:case Kl:return{byteLength:1,components:1};case fs:case Jl:case fn:return{byteLength:2,components:1};case Pa:case La:return{byteLength:2,components:4};case An:case Ca:case un:return{byteLength:4,components:1};case Ql:case jl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pa}})),typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tp(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],M=f[d];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++u,f[u]=M)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const M=f[d];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cp=`#ifdef USE_ALPHAHASH
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
#endif`,Pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
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
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
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
#endif`,Op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gp=`#ifdef USE_IRIDESCENCE
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
#endif`,Hp=`#ifdef USE_BUMPMAP
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jp=`#define PI 3.141592653589793
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
} // validated`,Qp=`vec3 transformedNormal = objectNormal;
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
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i0="gl_FragColor = linearToOutputTexel( gl_FragColor );",s0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
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
#endif`,h0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p0=`#ifdef USE_GRADIENTMAP
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
}`,m0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,v0=`#ifdef USE_ENVMAP
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
#endif`,M0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E0=`PhysicalMaterial material;
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
#endif`,w0=`uniform sampler2D dfgLUT;
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
}`,A0=`
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
#endif`,T0=`#if defined( RE_IndirectDiffuse )
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
#endif`,R0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,P0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O0=`#if defined( USE_POINTS_UV )
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
#endif`,z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G0=`#if defined( USE_MORPHCOLORS )
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
#endif`,H0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V0=`#ifdef USE_MORPHTARGETS
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
#endif`,W0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,K0=`#ifdef USE_NORMALMAP
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
#endif`,J0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fm=`float getShadowMask() {
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
}`,dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sm=`#ifdef USE_TRANSMISSION
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
#endif`,ym=`#ifdef USE_TRANSMISSION
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zt={alphahash_fragment:Rp,alphahash_pars_fragment:Cp,alphamap_fragment:Pp,alphamap_pars_fragment:Lp,alphatest_fragment:Dp,alphatest_pars_fragment:Ip,aomap_fragment:Np,aomap_pars_fragment:Up,batching_pars_vertex:Fp,batching_vertex:Op,begin_vertex:zp,beginnormal_vertex:Bp,bsdfs:kp,iridescence_fragment:Gp,bumpmap_pars_fragment:Hp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Wp,clipping_planes_pars_vertex:Xp,clipping_planes_vertex:qp,color_fragment:Yp,color_pars_fragment:$p,color_pars_vertex:Zp,color_vertex:Kp,common:Jp,defaultnormal_vertex:Qp,displacementmap_pars_vertex:jp,displacementmap_vertex:t0,emissivemap_fragment:e0,emissivemap_pars_fragment:n0,colorspace_fragment:i0,colorspace_pars_fragment:s0,envmap_fragment:r0,envmap_common_pars_fragment:a0,envmap_pars_fragment:o0,envmap_pars_vertex:l0,envmap_physical_pars_fragment:v0,envmap_vertex:c0,fog_vertex:h0,fog_pars_vertex:u0,fog_fragment:f0,fog_pars_fragment:d0,gradientmap_pars_fragment:p0,lightmap_pars_fragment:m0,lights_lambert_fragment:g0,lights_lambert_pars_fragment:x0,lights_pars_begin:_0,lights_toon_fragment:M0,lights_toon_pars_fragment:S0,lights_phong_fragment:y0,lights_phong_pars_fragment:b0,lights_physical_fragment:E0,lights_physical_pars_fragment:w0,lights_fragment_begin:A0,lights_fragment_maps:T0,lights_fragment_end:R0,lightprobes_pars_fragment:C0,logdepthbuf_fragment:P0,logdepthbuf_pars_fragment:L0,logdepthbuf_pars_vertex:D0,logdepthbuf_vertex:I0,map_fragment:N0,map_pars_fragment:U0,map_particle_fragment:F0,map_particle_pars_fragment:O0,metalnessmap_fragment:z0,metalnessmap_pars_fragment:B0,morphinstance_vertex:k0,morphcolor_vertex:G0,morphnormal_vertex:H0,morphtarget_pars_vertex:V0,morphtarget_vertex:W0,normal_fragment_begin:X0,normal_fragment_maps:q0,normal_pars_fragment:Y0,normal_pars_vertex:$0,normal_vertex:Z0,normalmap_pars_fragment:K0,clearcoat_normal_fragment_begin:J0,clearcoat_normal_fragment_maps:Q0,clearcoat_pars_fragment:j0,iridescence_pars_fragment:tm,opaque_fragment:em,packing:nm,premultiplied_alpha_fragment:im,project_vertex:sm,dithering_fragment:rm,dithering_pars_fragment:am,roughnessmap_fragment:om,roughnessmap_pars_fragment:lm,shadowmap_pars_fragment:cm,shadowmap_pars_vertex:hm,shadowmap_vertex:um,shadowmask_pars_fragment:fm,skinbase_vertex:dm,skinning_pars_vertex:pm,skinning_vertex:mm,skinnormal_vertex:gm,specularmap_fragment:xm,specularmap_pars_fragment:_m,tonemapping_fragment:vm,tonemapping_pars_fragment:Mm,transmission_fragment:Sm,transmission_pars_fragment:ym,uv_pars_fragment:bm,uv_pars_vertex:Em,uv_vertex:wm,worldpos_vertex:Am,background_vert:`varying vec2 vUv;
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
}`},yt={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Pn={basic:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Je([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Je([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Je([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Je([yt.points,yt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Je([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Je([yt.common,yt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Je([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Je([yt.sprite,yt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:Je([yt.common,yt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:Je([yt.lights,yt.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Pn.physical={uniforms:Je([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Nr={r:0,b:0,g:0},Tm=new jt,ch=new Vt;ch.set(-1,0,0,0,1,0,0,0,1);function Rm(i,t,e,n,s,r){const a=new Ct(0);let o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const _=v.backgroundBlurriness>0;S=t.get(S,_)}return S}function m(v){let S=!1;const _=d(v);_===null?p(a,o):_&&_.isColor&&(p(_,1),S=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(v,S){const _=d(S);_&&_.isCubeTexture?(c===void 0&&(c=new Qt(new Mi(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Zi(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tm.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ch),c.material.toneMapped=ie.getTransfer(_.colorSpace)!==de,(h!==_||f!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Qt(new ci(2,2),new Xn({name:"BackgroundMaterial",uniforms:Zi(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ie.getTransfer(_.colorSpace)!==de,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,S){v.getRGB(Nr,Yc(i)),e.buffers.color.setClear(Nr.r,Nr.g,Nr.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:m,addToRenderList:M,dispose:g}}function Cm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(L,C,D,A,F){let G=!1;const z=f(L,A,D,C);r!==z&&(r=z,c(r.object)),G=d(L,A,D,F),G&&m(L,A,D,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,_(L,C,D,A),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function f(L,C,D,A){const F=A.wireframe===!0;let G=n[C.id];G===void 0&&(G={},n[C.id]=G);const z=L.isInstancedMesh===!0?L.id:0;let W=G[z];W===void 0&&(W={},G[z]=W);let V=W[D.id];V===void 0&&(V={},W[D.id]=V);let k=V[F];return k===void 0&&(k=u(l()),V[F]=k),k}function u(L){const C=[],D=[],A=[];for(let F=0;F<e;F++)C[F]=0,D[F]=0,A[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:A,object:L,attributes:{},index:null}}function d(L,C,D,A){const F=r.attributes,G=C.attributes;let z=0;const W=D.getAttributes();for(const V in W)if(W[V].location>=0){const H=F[V];let X=G[V];if(X===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),H===void 0||H.attribute!==X||X&&H.data!==X.data)return!0;z++}return r.attributesNum!==z||r.index!==A}function m(L,C,D,A){const F={},G=C.attributes;let z=0;const W=D.getAttributes();for(const V in W)if(W[V].location>=0){let H=G[V];H===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(H=L.instanceColor));const X={};X.attribute=H,H&&H.data&&(X.data=H.data),F[V]=X,z++}r.attributes=F,r.attributesNum=z,r.index=A}function M(){const L=r.newAttributes;for(let C=0,D=L.length;C<D;C++)L[C]=0}function p(L){g(L,0)}function g(L,C){const D=r.newAttributes,A=r.enabledAttributes,F=r.attributeDivisors;D[L]=1,A[L]===0&&(i.enableVertexAttribArray(L),A[L]=1),F[L]!==C&&(i.vertexAttribDivisor(L,C),F[L]=C)}function v(){const L=r.newAttributes,C=r.enabledAttributes;for(let D=0,A=C.length;D<A;D++)C[D]!==L[D]&&(i.disableVertexAttribArray(D),C[D]=0)}function S(L,C,D,A,F,G,z){z===!0?i.vertexAttribIPointer(L,C,D,F,G):i.vertexAttribPointer(L,C,D,A,F,G)}function _(L,C,D,A){M();const F=A.attributes,G=D.getAttributes(),z=C.defaultAttributeValues;for(const W in G){const V=G[W];if(V.location>=0){let k=F[W];if(k===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(k=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(k=L.instanceColor)),k!==void 0){const H=k.normalized,X=k.itemSize,ht=t.get(k);if(ht===void 0)continue;const Y=ht.buffer,ct=ht.type,lt=ht.bytesPerElement,xt=ct===i.INT||ct===i.UNSIGNED_INT||k.gpuType===Ca;if(k.isInterleavedBufferAttribute){const dt=k.data,Pt=dt.isInterleavedBuffer===!0?dt.stride:dt.itemSize,Yt=k.offset;if(dt.isInstancedInterleavedBuffer||dt.isInstancedBufferAttribute){for(let bt=0;bt<V.locationSize;bt++)g(V.location+bt,dt.meshPerAttribute);L.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let bt=0;bt<V.locationSize;bt++)p(V.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let bt=0;bt<V.locationSize;bt++)S(V.location+bt,X/V.locationSize,ct,H,Pt*lt,(Yt+X/V.locationSize*bt)*lt,xt)}else{if(k.isInstancedBufferAttribute){for(let dt=0;dt<V.locationSize;dt++)g(V.location+dt,k.meshPerAttribute);L.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let dt=0;dt<V.locationSize;dt++)p(V.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let dt=0;dt<V.locationSize;dt++)S(V.location+dt,X/V.locationSize,ct,H,X*lt,X/V.locationSize*dt*lt,xt)}}else if(z!==void 0){const H=z[W];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(V.location,H);break;case 3:i.vertexAttrib3fv(V.location,H);break;case 4:i.vertexAttrib4fv(V.location,H);break;default:i.vertexAttrib1fv(V.location,H)}}}}v()}function y(){R();for(const L in n){const C=n[L];for(const D in C){const A=C[D];for(const F in A){const G=A[F];for(const z in G)h(G[z].object),delete G[z];delete A[F]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;const C=n[L.id];for(const D in C){const A=C[D];for(const F in A){const G=A[F];for(const z in G)h(G[z].object),delete G[z];delete A[F]}}delete n[L.id]}function x(L){for(const C in n){const D=n[C];for(const A in D){const F=D[A];if(F[L.id]===void 0)continue;const G=F[L.id];for(const z in G)h(G[z].object),delete G[z];delete F[L.id]}}}function b(L){for(const C in n){const D=n[C],A=L.isInstancedMesh===!0?L.id:0,F=D[A];if(F!==void 0){for(const G in F){const z=F[G];for(const W in z)h(z[W].object),delete z[W];delete F[G]}delete D[A],Object.keys(D).length===0&&delete n[C]}}}function R(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:w,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:p,disableUnusedAttributes:v}}function Pm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Lm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==dn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const b=x===fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==tn&&x!==un&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Ht("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:_,maxSamples:y,samples:E}}function Dm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Rn,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,g=i.get(f);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{const v=r?0:n,S=v*4;let _=g.clippingState||null;l.value=_,_=h(m,u,S,d);for(let y=0;y!==S;++y)_[y]=e[y];g.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,m){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=l.value,m!==!0||p===null){const g=d+M*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let S=0,_=d;S!==M;++S,_+=4)a.copy(f[S]).applyMatrix4(v,o),a.normal.toArray(p,_),p[_+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}class Qo extends Tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Fc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mi(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:Ci});r.uniforms.tEquirect.value=e;const a=new Qt(s,r),o=e.minFilter;return e.minFilter===wn&&(e.minFilter=We),new Ko(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const hh=256,Im=3,Nm=20,uh=256,fh=16,Um=3,Fm=new Q,Om=new Ct;class Ur{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ko(1,10,null),this._boxMesh=new Qt(new Mi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Fm}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(Om));const p=new Ko(n,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=m,t.background=M,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(hh,hc(t))}_fromTexture(t,e){t.mapping===Li||t.mapping===us?this._setSize(t.image.length===0?hh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=dh(t,!1,!1),n=Math.log2(t)-Im;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=dh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Li||t.mapping===us?(this._cubemapMaterial===null&&(this._cubemapMaterial=mh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ph()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=zm(),this._integrationMaterial=Bm());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/fh);for(let a=0;a<=n;a++){const o=Ur.lodToRoughness(a,n);if(a>n-Um)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(uh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=km());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function dh(i,t,e){return new Qo(i,{minFilter:wn,generateMipmaps:t,type:fn,colorSpace:ar,depthBuffer:e})}function Ls(i,t,e){return new Xn({name:i,uniforms:t,vertexShader:Zt.cube_vert,fragmentShader:e,side:Ke,blending:Ci,depthTest:!1,depthWrite:!1})}function zm(){return Ls("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function Bm(){return Ls("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:fh}},`

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
	`)}function km(){return Ls("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Nm}
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
	`)}function ph(){return Ls("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function mh(){return Ls("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Gm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===wa||d===Aa)if(t.has(u)){const m=t.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const M=new Qo(m.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const d=u.mapping,m=d===wa||d===Aa,M=d===Li||d===us;if(m||M){let p=e.get(u);const g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Ur(i)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const v=u.image;return m&&v&&v.height>0||M&&v&&l(v)?(n===null&&(n=new Ur(i)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===wa?u.mapping=Li:d===Aa&&(u.mapping=us),u}function l(u){let d=0;const m=6;for(let M=0;M<m;M++)u[M]!==void 0&&d++;return d===m}function c(u){const d=u.target;d.removeEventListener("dispose",c);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Hm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&cr("WebGLRenderer: "+n+" extension not supported."),s}}}function Vm(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(const p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);const M=r.get(m);M&&(t.remove(M),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),e.memory.geometries++),M}function h(m){const M=m.attributes;for(const p in M)t.update(M[p],i.ARRAY_BUFFER)}function f(m){const M=m.index,p=m.attributes.position;let g=0;if(p===void 0)return;const v=M!==null?M.array.length:p.array.length/3-1,S=p.count>=65535?Rc:Tc,_=new S(Math.ceil(v/3)*6,1),y=_.array;if(M!==null){const x=M.array;g=M.version;for(let b=0,R=0;b<v;b+=3){const w=x[b+0],L=x[b+1],C=x[b+2];y[R++]=w,y[R++]=L,y[R++]=L,y[R++]=C,y[R++]=C,y[R++]=w}}else{g=p.version;for(let x=0,b=0;x<v;x+=3){const R=x+0,w=x+1,L=x+2;y[b++]=R,y[b++]=w,y[b++]=w,y[b++]=L,y[b++]=L,y[b++]=R}}_.version=g;const E=r.get(m);E&&t.remove(E),r.set(m,_)}function u(m){const M=r.get(m);if(M){const p=m.index;p!==null&&M.version<p.version&&f(m)}else f(m);return r.get(m)}function d(){for(const m in s){const M=s[m].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function Wm(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let M=0;for(let p=0;p<d;p++)M+=u[p];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Xm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:le("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qm(i,t,e){const n=new WeakMap,s=new Se;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let R=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;d===!0&&(S=1),m===!0&&(S=2),M===!0&&(S=3);let _=o.attributes.position.count*S,y=1;_>t.maxTextureSize&&(y=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const E=new Float32Array(_*y*4*f),x=new gc(E,_,y,f);x.type=un,x.needsUpdate=!0;const b=S*4;for(let w=0;w<f;w++){const L=p[w],C=g[w],D=v[w],A=_*y*4*w;for(let F=0;F<L.count;F++){const G=F*b;d===!0&&(s.fromBufferAttribute(L,F),E[A+G+0]=s.x,E[A+G+1]=s.y,E[A+G+2]=s.z,E[A+G+3]=0),m===!0&&(s.fromBufferAttribute(C,F),E[A+G+4]=s.x,E[A+G+5]=s.y,E[A+G+6]=s.z,E[A+G+7]=0),M===!0&&(s.fromBufferAttribute(D,F),E[A+G+8]=s.x,E[A+G+9]=s.y,E[A+G+10]=s.z,E[A+G+11]=D.itemSize===4?s.w:1)}}u={count:f,texture:x,size:new Bt(_,y)},n.set(o,u),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];const m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Ym(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const $m={[Vl]:"LINEAR_TONE_MAPPING",[Wl]:"REINHARD_TONE_MAPPING",[Xl]:"CINEON_TONE_MAPPING",[ql]:"ACES_FILMIC_TONE_MAPPING",[$l]:"AGX_TONE_MAPPING",[Ea]:"NEUTRAL_TONE_MAPPING",[Yl]:"CUSTOM_TONE_MAPPING"};function Zm(i,t,e,n,s,r){const a=new Tn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Re;h.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new re([0,2,0,0,2,0],2));const f=new dp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Qt(h,f),d=new ih(-1,1,1,-1,0,1);let m=null,M=null,p=!1,g,v=null,S=[],_=!1;this.setSize=function(y,E){a.setSize(y,E),o!==null&&o.setSize(y,E),l!==null&&l.setSize(y,E);for(let x=0;x<S.length;x++){const b=S[x];b.setSize&&b.setSize(y,E)}},this.setEffects=function(y){S=y,_=S.length>0&&S[0].isRenderPass===!0;const E=a.width,x=a.height;S.length>0&&o===null&&(o=new Tn(E,x,{type:fn,depthBuffer:!1,stencilBuffer:!1}),l=new Tn(E,x,{type:fn,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&S.some(R=>R.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Yi(E,x),r===!0&&(c.format=ni,c.type=Di)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let R=0;R<S.length;R++){const w=S[R];w.setSize&&w.setSize(E,x),b&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(c)}},this.begin=function(y,E){if(p||y.toneMapping===Un&&S.length===0)return!1;if(v=E,E!==null){const x=E.width,b=E.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return _===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Un,!0},this.hasRenderPass=function(){return _},this.end=function(y,E){y.toneMapping=g,p=!0;let x=a,b=o;for(let R=0;R<S.length;R++){const w=S[R];w.enabled!==!1&&(w.render(y,b,x,E),w.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(m!==y.outputColorSpace||M!==y.toneMapping){m=y.outputColorSpace,M=y.toneMapping,f.defines={},ie.getTransfer(m)===de&&(f.defines.SRGB_TRANSFER="");const R=$m[M];R&&(f.defines[R]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,y.setRenderTarget(v),y.render(u,d),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}const gh=new De,xh=new Yi(1,1),_h=new Oc(1),vh=new gc,Mh=new Ed,Sh=new Fc,yh=[],bh=[],Eh=new Float32Array(16),wh=new Float32Array(9),Ah=new Float32Array(4);function ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=yh[s];if(r===void 0&&(r=new Float32Array(s),yh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fr(i,t){let e=bh[t];e===void 0&&(e=new Int32Array(t),bh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Km(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function tg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Ah.set(n),i.uniformMatrix2fv(this.addr,!1,Ah),Ue(e,n)}}function eg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;wh.set(n),i.uniformMatrix3fv(this.addr,!1,wh),Ue(e,n)}}function ng(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Eh.set(n),i.uniformMatrix4fv(this.addr,!1,Eh),Ue(e,n)}}function ig(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function og(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Or(i){return i.version===0&&(i.compareFunction=sc,i.needsUpdate=!0),i}function ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Or(xh):r=gh,e.setTexture2D(t||r,s)}function fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mh,s)}function dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Or(_h):r=Sh,e.setTextureCube(t||r,s)}function pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vh,s)}function mg(i){switch(i){case 5126:return Km;case 35664:return Jm;case 35665:return Qm;case 35666:return jm;case 35674:return tg;case 35675:return eg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return rg;case 35669:case 35673:return ag;case 5125:return og;case 36294:return lg;case 36295:return cg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return pg}}function gg(i,t){i.uniform1fv(this.addr,t)}function xg(i,t){const e=ji(t,this.size,2);i.uniform2fv(this.addr,e)}function _g(i,t){const e=ji(t,this.size,3);i.uniform3fv(this.addr,e)}function vg(i,t){const e=ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Mg(i,t){const e=ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sg(i,t){const e=ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yg(i,t){const e=ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bg(i,t){i.uniform1iv(this.addr,t)}function Eg(i,t){i.uniform2iv(this.addr,t)}function wg(i,t){i.uniform3iv(this.addr,t)}function Ag(i,t){i.uniform4iv(this.addr,t)}function Tg(i,t){i.uniform1uiv(this.addr,t)}function Rg(i,t){i.uniform2uiv(this.addr,t)}function Cg(i,t){i.uniform3uiv(this.addr,t)}function Pg(i,t){i.uniform4uiv(this.addr,t)}function Lg(i,t,e){const n=this.cache,s=t.length,r=Fr(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Or(xh):a=gh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Dg(i,t,e){const n=this.cache,s=t.length,r=Fr(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Mh,r[a])}function Ig(i,t,e){const n=this.cache,s=t.length,r=Fr(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Or(_h):a=Sh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Ng(i,t,e){const n=this.cache,s=t.length,r=Fr(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||vh,r[a])}function Ug(i){switch(i){case 5126:return gg;case 35664:return xg;case 35665:return _g;case 35666:return vg;case 35674:return Mg;case 35675:return Sg;case 35676:return yg;case 5124:case 35670:return bg;case 35667:case 35671:return Eg;case 35668:case 35672:return wg;case 35669:case 35673:return Ag;case 5125:return Tg;case 36294:return Rg;case 36295:return Cg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Ng}}class Fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mg(e.type)}}class Og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ug(e.type)}}class zg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const jo=/(\w+)(\])?(\[|\.)?/g;function Th(i,t){i.seq.push(t),i.map[t.id]=t}function Bg(i,t,e){const n=i.name,s=n.length;for(jo.lastIndex=0;;){const r=jo.exec(n),a=jo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Th(e,c===void 0?new Fg(o,i,t):new Og(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new zg(o),Th(e,f)),e=f}}}class zr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Bg(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Rh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const kg=37297;let Gg=0;function Hg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ch=new Vt;function Vg(i){ie._getMatrix(Ch,ie.workingColorSpace,i);const t=`mat3( ${Ch.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case or:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ph(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Hg(i.getShaderSource(t),o)}else return r}function Wg(i,t){const e=Vg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Xg={[Vl]:"Linear",[Wl]:"Reinhard",[Xl]:"Cineon",[ql]:"ACESFilmic",[$l]:"AgX",[Ea]:"Neutral",[Yl]:"Custom"};function qg(i,t){const e=Xg[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Br=new Q;function Yg(){ie.getLuminanceCoefficients(Br);const i=Br.x.toFixed(4),t=Br.y.toFixed(4),e=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $g(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function Zg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ds(i){return i!==""}function Lh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Dh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(i){return i.replace(Jg,Qg)}function Qg(i,t){const e=Zt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return tl(e)}const jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ih(i){return i.replace(jg,tx)}function tx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const ex={[os]:"SHADOWMAP_TYPE_PCF",[ls]:"SHADOWMAP_TYPE_VSM"};function nx(i){return ex[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ix={[us]:"ENVMAP_MODE_REFRACTION"};function sx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ix[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rx={[ba]:"ENVMAP_BLENDING_MULTIPLY",[Hf]:"ENVMAP_BLENDING_MIX",[Vf]:"ENVMAP_BLENDING_ADD"};function ax(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":rx[i.combine]||"ENVMAP_BLENDING_NONE"}function ox(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=nx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=sx(e),f=ax(e),u=$g(e),d=Zg(r),m=s.createProgram();let M,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ds).join(`
`),M.length>0&&(M+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ds).join(`
`),p.length>0&&(p+=`
`)):(M=[Nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),p=[Nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Un?qg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Wg("linearToOutputTexel",e.outputColorSpace),Yg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ds).join(`
`)),a=tl(a),a=Lh(a,e),a=Dh(a,e),o=tl(o),o=Lh(o,e),o=Dh(o,e),a=Ih(a),o=Ih(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",e.glslVersion===rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=g+M+a,S=g+p+o,_=Rh(s,s.VERTEX_SHADER,v),y=Rh(s,s.FRAGMENT_SHADER,S);s.attachShader(m,_),s.attachShader(m,y),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function E(w){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(m)||"",C=s.getShaderInfoLog(_)||"",D=s.getShaderInfoLog(y)||"",A=L.trim(),F=C.trim(),G=D.trim();let z=!0,W=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,_,y);else{const V=Ph(s,_,"vertex"),k=Ph(s,y,"fragment");le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+A+`
`+V+`
`+k)}else A!==""?Ht("WebGLProgram: Program Info Log:",A):(F===""||G==="")&&(W=!1);W&&(w.diagnostics={runnable:z,programLog:A,vertexShader:{log:F,prefix:M},fragmentShader:{log:G,prefix:p}})}s.deleteShader(_),s.deleteShader(y),x=new zr(s,m),b=Kg(s,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(m,kg)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=_,this.fragmentShader=y,this}let lx=0;class cx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new hx(t),e.set(t,n)),n}}class hx{constructor(t){this.id=lx++,this.code=t,this.usedTimes=0}}function ux(i){return i===ii||i===ir||i===sr}function fx(i,t,e,n,s,r){const a=new So,o=new cx,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,b,R,w,L,C){const D=w.fog,A=L.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=t.get(x.envMap||F,G),W=u[x.type];let V=n.precision;x.precision!==null&&(V=n.getMaxPrecision(x.precision),V!==x.precision&&Ht("WebGLProgram.getParameters:",x.precision,"not supported, using",V,"instead."));const k=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,H=k!==void 0?k.length:0;let X=0;A.morphAttributes.position!==void 0&&(X=1),A.morphAttributes.normal!==void 0&&(X=2),A.morphAttributes.color!==void 0&&(X=3);let ht,Y,ct,lt;if(W){const Et=Pn[W];ht=Et.vertexShader,Y=Et.fragmentShader}else{ht=x.vertexShader,Y=x.fragmentShader;const Et=o.getVertexShaderStage(x),pe=o.getFragmentShaderStage(x);o.update(x,Et,pe),ct=Et.id,lt=pe.id}const xt=i.getRenderTarget(),dt=i.state.buffers.depth.getReversed(),Pt=L.isInstancedMesh===!0,Yt=L.isBatchedMesh===!0,bt=!!x.map,ut=!!x.matcap,vt=!!z,wt=vt&&z.isPMREMTexture===!0,Rt=!!x.aoMap,Kt=!!x.lightMap,ve=!!x.bumpMap&&x.wireframe===!1,ae=!!x.normalMap,Ae=!!x.displacementMap,he=!!x.emissiveMap,Me=!!x.metalnessMap,Oe=!!x.roughnessMap,ue=x.anisotropy>0,Z=x.clearcoat>0,Dt=x.diffuseRoughness>0,te=x.dispersion>0,$t=x.retroreflectivity>0,gt=x.iridescence>0,be=x.sheen>0,Ot=x.transmission>0,kt=ue&&!!x.anisotropyMap,U=Z&&!!x.clearcoatMap,T=Z&&!!x.clearcoatNormalMap,tt=Z&&!!x.clearcoatRoughnessMap,pt=Dt&&!!x.diffuseRoughnessMap,ot=gt&&!!x.iridescenceMap,_t=gt&&!!x.iridescenceThicknessMap,N=be&&!!x.sheenColorMap,O=be&&!!x.sheenRoughnessMap,B=!!x.specularMap,K=!!x.specularColorMap,I=!!x.specularIntensityMap,j=Ot&&!!x.transmissionMap,J=Ot&&!!x.thicknessMap,rt=!!x.gradientMap,at=!!x.alphaMap,ft=x.alphaTest>0,Tt=!!x.alphaHash,Wt=!!x.extensions;let mt=Un;x.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(mt=i.toneMapping);const zt=wt?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Xt={shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:ht,fragmentShader:Y,defines:x.defines,customVertexShaderID:ct,customFragmentShaderID:lt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:V,batching:Yt,batchingColor:Yt&&L._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&L.instanceColor!==null,instancingMorph:Pt&&L.morphTexture!==null,outputColorSpace:xt===null?i.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:bt,matcap:ut,envMap:vt,envMapMode:vt&&z.mapping,envMapPMREM:wt,envMapMaxLod:wt?zt.length-1:null,envMapSize:wt?zt[0].width:null,aoMap:Rt,lightMap:Kt,bumpMap:ve,normalMap:ae,displacementMap:Ae,emissiveMap:he,normalMapObjectSpace:ae&&x.normalMapType===qf,normalMapTangentSpace:ae&&x.normalMapType===rr,packedNormalMap:ae&&x.normalMapType===rr&&ux(x.normalMap.format),metalnessMap:Me,roughnessMap:Oe,anisotropy:ue,anisotropyMap:kt,clearcoat:Z,clearcoatMap:U,clearcoatNormalMap:T,clearcoatRoughnessMap:tt,diffuseRoughness:Dt,diffuseRoughnessMap:pt,dispersion:te,retroreflection:$t,iridescence:gt,iridescenceMap:ot,iridescenceThicknessMap:_t,sheen:be,sheenColorMap:N,sheenRoughnessMap:O,specularMap:B,specularColorMap:K,specularIntensityMap:I,transmission:Ot,transmissionMap:j,thicknessMap:J,gradientMap:rt,opaque:x.transparent===!1&&x.blending===cs&&x.alphaToCoverage===!1,alphaMap:at,alphaTest:ft,alphaHash:Tt,combine:x.combine,mapUv:bt&&d(x.map.channel),aoMapUv:Rt&&d(x.aoMap.channel),lightMapUv:Kt&&d(x.lightMap.channel),bumpMapUv:ve&&d(x.bumpMap.channel),normalMapUv:ae&&d(x.normalMap.channel),displacementMapUv:Ae&&d(x.displacementMap.channel),emissiveMapUv:he&&d(x.emissiveMap.channel),metalnessMapUv:Me&&d(x.metalnessMap.channel),roughnessMapUv:Oe&&d(x.roughnessMap.channel),anisotropyMapUv:kt&&d(x.anisotropyMap.channel),clearcoatMapUv:U&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pt&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:ot&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:N&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:O&&d(x.sheenRoughnessMap.channel),specularMapUv:B&&d(x.specularMap.channel),specularColorMapUv:K&&d(x.specularColorMap.channel),specularIntensityMapUv:I&&d(x.specularIntensityMap.channel),transmissionMapUv:j&&d(x.transmissionMap.channel),thicknessMapUv:J&&d(x.thicknessMap.channel),alphaMapUv:at&&d(x.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(ae||ue),vertexNormals:!!A.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!A.attributes.uv&&(bt||at),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||A.attributes.normal===void 0&&ae===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:dt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:X,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:C.filter(Et=>Et.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,decodeVideoTexture:bt&&x.map.isVideoTexture===!0&&ie.getTransfer(x.map.colorSpace)===de,decodeVideoTextureEmissive:he&&x.emissiveMap.isVideoTexture===!0&&ie.getTransfer(x.emissiveMap.colorSpace)===de,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===we,flipSided:x.side===Ke,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Wt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&x.extensions.multiDraw===!0||Yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function M(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)b.push(R),b.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(b,x),g(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){const b=u[x.type];let R;if(b){const w=Pn[b];R=hp.clone(w.uniforms)}else R=x.uniforms;return R}function S(x,b){let R=h.get(b);return R!==void 0?++R.usedTimes:(R=new ox(i,b,x,s),c.push(R),h.set(b,R)),R}function _(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function y(x){o.remove(x)}function E(){o.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:v,acquireProgram:S,releaseProgram:_,releaseShaderCache:y,programs:c,dispose:E}}function dx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function px(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Uh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,M,p,g){let v=i[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:p,group:g},i[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=m,v.materialVariant=a(u),v.groupOrder=M,v.renderOrder=u.renderOrder,v.z=p,v.group=g),t++,v}function l(u,d,m,M,p,g,v){v.reversedDepth===!0&&(p=-p);const S=o(u,d,m,M,p,g);m.transmission>0?n.push(S):m.transparent===!0?s.push(S):e.push(S)}function c(u,d,m,M,p,g){const v=o(u,d,m,M,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,d){e.length>1&&e.sort(u||px),n.length>1&&n.sort(d||Uh),s.length>1&&s.sort(d||Uh)}function f(){for(let u=t,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function mx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Fh,i.set(n,[a])):s>=r.length?(a=new Fh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function gx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Q,color:new Ct};break;case"SpotLight":e={position:new Q,direction:new Q,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return i[t.id]=e,e}}}function xx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let _x=0;function vx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Mx(i){const t=new gx,e=xx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Q);const s=new Q,r=new jt,a=new jt;function o(c){let h=0,f=0,u=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let d=0,m=0,M=0,p=0,g=0,v=0,S=0,_=0,y=0,E=0,x=0,b=0,R=0,w=0;c.sort(vx);for(let C=0,D=c.length;C<D;C++){const A=c[C],F=A.color,G=A.intensity,z=A.distance;let W=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===ii?W=A.shadow.map.texture:W=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=F.r*G,f+=F.g*G,u+=F.b*G;else if(A.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(A.sh.coefficients[V],G);w++}else if(A.isSunLight){const V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const k=A.shadow,H=e.get(A);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[m]=H,n.sunShadowMap[m]=W;const X=k.getViewportCount();for(let ht=0;ht<X;ht++)n.sunShadowMatrix[M+ht]=k.getMatrix(ht),n.sunShadowCascade[M+ht]=k._cascadeData[ht];M+=X,m++}n.sun[d]=V,d++}else if(A.isDirectionalLight){const V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const k=A.shadow,H=e.get(A);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=A.shadow.matrix,y++}n.directional[p]=V,p++}else if(A.isSpotLight){const V=t.get(A);V.position.setFromMatrixPosition(A.matrixWorld),V.color.copy(F).multiplyScalar(G),V.distance=z,V.coneCos=Math.cos(A.angle),V.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),V.decay=A.decay,n.spot[v]=V;const k=A.shadow;if(A.map&&(n.spotLightMap[b]=A.map,b++,k.updateMatrices(A),A.castShadow&&R++),n.spotLightMatrix[v]=k.matrix,A.castShadow){const H=e.get(A);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=W,x++}v++}else if(A.isRectAreaLight){const V=t.get(A);V.color.copy(F).multiplyScalar(G),V.halfWidth.set(A.width*.5,0,0),V.halfHeight.set(0,A.height*.5,0),n.rectArea[S]=V,S++}else if(A.isPointLight){const V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),V.distance=A.distance,V.decay=A.decay,A.castShadow){const k=A.shadow,H=e.get(A);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=A.shadow.matrix,E++}n.point[g]=V,g++}else if(A.isHemisphereLight){const V=t.get(A);V.skyColor.copy(A.color).multiplyScalar(G),V.groundColor.copy(A.groundColor).multiplyScalar(G),n.hemi[_]=V,_++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const L=n.hash;(L.sunLength!==d||L.directionalLength!==p||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==S||L.hemiLength!==_||L.numSunShadows!==m||L.numDirectionalShadows!==y||L.numPointShadows!==E||L.numSpotShadows!==x||L.numSpotMaps!==b||L.numLightProbes!==w)&&(n.sun.length=d,n.directional.length=p,n.spot.length=v,n.rectArea.length=S,n.point.length=g,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-R,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,L.sunLength=d,L.directionalLength=p,L.pointLength=g,L.spotLength=v,L.rectAreaLength=S,L.hemiLength=_,L.numSunShadows=m,L.numDirectionalShadows=y,L.numPointShadows=E,L.numSpotShadows=x,L.numSpotMaps=b,L.numLightProbes=w,n.version=_x++)}function l(c,h){let f=0,u=0,d=0,m=0,M=0,p=0;const g=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){const _=c[v];if(_.isSunLight){const y=n.sun[f];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),f++}else if(_.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(_.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),m++}else if(_.isRectAreaLight){const y=n.rectArea[M];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),M++}else if(_.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const y=n.hemi[p];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function Oh(i){const t=new Mx(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function l(){t.setup(e),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){t.setupView(e,f)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Sx(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Oh(i),t.set(s,[o])):r>=a.length?(o=new Oh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bx=`uniform sampler2D shadow_pass;
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
}`,Ex=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],wx=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],zh=new jt,Is=new Q,el=new Q;function Ax(i,t,e){let n=new As;const s=new Bt,r=new Bt,a=new Se,o=new pp,l=new mp,c={},h=e.maxTextureSize,f={[ti]:Ke,[Ke]:ti,[we]:we},u=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:yx,fragmentShader:bx}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new Re;m.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Qt(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=os;let g=this.type;this.render=function(E,x,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===bf&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=os);const R=i.getRenderTarget(),w=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Ci),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const D=g!==this.type;D&&x.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(F=>F.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,F=E.length;A<F;A++){const G=E[A],z=G.shadow;if(z===void 0){Ht("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const W=z.getFrameExtents();s.multiply(W),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,z.mapSize.y=r.y));const V=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=V,z.map===null||D===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ls){if(G.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Tn(s.x,s.y,{format:ii,type:fn,minFilter:We,magFilter:We,generateMipmaps:!1}),z.map.texture.name=G.name+".shadowMap",z.map.depthTexture=new Yi(s.x,s.y,un),z.map.depthTexture.name=G.name+".shadowMapDepth",z.map.depthTexture.format=ei,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ge,z.map.depthTexture.magFilter=Ge}else G.isPointLight?(z.map=new Qo(s.x),z.map.depthTexture=new Oc(s.x,An)):(z.map=new Tn(s.x,s.y),z.map.depthTexture=new Yi(s.x,s.y,An)),z.map.depthTexture.name=G.name+".shadowMap",z.map.depthTexture.format=ei,this.type===os?(z.map.depthTexture.compareFunction=V?ic:nc,z.map.depthTexture.minFilter=We,z.map.depthTexture.magFilter=We):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ge,z.map.depthTexture.magFilter=Ge);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const k=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();G.isPointLight!==!0&&z.updateMatrices(G,b);const H=z.camera.layers.mask&4294967294?z.camera.layers:b.layers;for(let X=0;X<k;X++){const ht=z.getCamera(X);if(G.isPointLight){const Y=z.camera,ct=z.matrix,lt=G.distance||Y.far;lt!==Y.far&&(Y.far=lt,Y.updateProjectionMatrix()),Is.setFromMatrixPosition(G.matrixWorld),Y.position.copy(Is),el.copy(Y.position),el.add(Ex[X]),Y.up.copy(wx[X]),Y.lookAt(el),Y.updateMatrixWorld(),ct.makeTranslation(-Is.x,-Is.y,-Is.z),zh.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),z._frustum.setFromProjectionMatrix(zh,Y.coordinateSystem,Y.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,X),i.clear();else{X===0&&(i.setRenderTarget(z.map),i.clear());const Y=z.getViewport(X);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),C.viewport(a)}n=z.getFrustum(X),_(x,b,ht,G,H,this.type)}z.isPointLightShadow!==!0&&this.type===ls&&v(z,b),z.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(R,w,L)};function v(E,x){const b=t.update(M);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Tn(s.x,s.y,{format:ii,type:fn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(x,null,b,u,M,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(x,null,b,d,M,null)}function S(E,x,b,R){let w=null;const L=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)w=L;else if(w=b.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const C=w.uuid,D=x.uuid;let A=c[C];A===void 0&&(A={},c[C]=A);let F=A[D];F===void 0&&(F=w.clone(),A[D]=F,x.addEventListener("dispose",y)),w=F}if(w.visible=x.visible,w.wireframe=x.wireframe,R===ls?w.side=x.shadowSide!==null?x.shadowSide:x.side:w.side=x.shadowSide!==null?x.shadowSide:f[x.side],w.alphaMap=x.alphaMap,w.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,w.map=x.map,w.clipShadows=x.clipShadows,w.clippingPlanes=x.clippingPlanes,w.clipIntersection=x.clipIntersection,w.displacementMap=x.displacementMap,w.displacementScale=x.displacementScale,w.displacementBias=x.displacementBias,w.wireframeLinewidth=x.wireframeLinewidth,w.linewidth=x.linewidth,b.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const C=i.properties.get(w);C.light=b}return w}function _(E,x,b,R,w,L){if(E.visible===!1)return;if(E.layers.test(w)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===ls)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const A=t.update(E),F=E.material;if(Array.isArray(F)){const G=A.groups;for(let z=0,W=G.length;z<W;z++){const V=G[z],k=F[V.materialIndex];if(k&&k.visible){const H=S(E,k,R,L);E.onBeforeShadow(i,E,x,b,A,H,V),i.renderBufferDirect(b,null,A,H,E,V),E.onAfterShadow(i,E,x,b,A,H,V)}}}else if(F.visible){const G=S(E,F,R,L);E.onBeforeShadow(i,E,x,b,A,G,null),i.renderBufferDirect(b,null,A,G,E,null),E.onAfterShadow(i,E,x,b,A,G,null)}}const D=E.children;for(let A=0,F=D.length;A<F;A++)_(D[A],x,b,R,w,L)}function y(E){E.target.removeEventListener("dispose",y);for(const b in c){const R=c[b],w=E.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}function Tx(i,t){function e(){let I=!1;const j=new Se;let J=null;const rt=new Se(0,0,0,0);return{setMask:function(at){J!==at&&!I&&(i.colorMask(at,at,at,at),J=at)},setLocked:function(at){I=at},setClear:function(at,ft,Tt,Wt,mt){mt===!0&&(at*=Wt,ft*=Wt,Tt*=Wt),j.set(at,ft,Tt,Wt),rt.equals(j)===!1&&(i.clearColor(at,ft,Tt,Wt),rt.copy(j))},reset:function(){I=!1,J=null,rt.set(-1,0,0,0)}}}function n(){let I=!1,j=!1,J=null,rt=null,at=null;return{setReversed:function(ft){if(j!==ft){const Tt=t.get("EXT_clip_control");ft?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),j=ft;const Wt=at;at=null,this.setClear(Wt)}},getReversed:function(){return j},setTest:function(ft){ft?dt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(ft){J!==ft&&!I&&(i.depthMask(ft),J=ft)},setFunc:function(ft){if(j&&(ft=id[ft]),rt!==ft){switch(ft){case ga:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case _a:i.depthFunc(i.LESS);break;case hs:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case Ma:i.depthFunc(i.GEQUAL);break;case Sa:i.depthFunc(i.GREATER);break;case ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=ft}},setLocked:function(ft){I=ft},setClear:function(ft){at!==ft&&(at=ft,j&&(ft=1-ft),i.clearDepth(ft))},reset:function(){I=!1,J=null,rt=null,at=null,j=!1}}}function s(){let I=!1,j=null,J=null,rt=null,at=null,ft=null,Tt=null,Wt=null,mt=null;return{setTest:function(zt){I||(zt?dt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(zt){j!==zt&&!I&&(i.stencilMask(zt),j=zt)},setFunc:function(zt,Xt,Et){(J!==zt||rt!==Xt||at!==Et)&&(i.stencilFunc(zt,Xt,Et),J=zt,rt=Xt,at=Et)},setOp:function(zt,Xt,Et){(ft!==zt||Tt!==Xt||Wt!==Et)&&(i.stencilOp(zt,Xt,Et),ft=zt,Tt=Xt,Wt=Et)},setLocked:function(zt){I=zt},setClear:function(zt){mt!==zt&&(i.clearStencil(zt),mt=zt)},reset:function(){I=!1,j=null,J=null,rt=null,at=null,ft=null,Tt=null,Wt=null,mt=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let h={},f={},u={},d=new WeakMap,m=[],M=null,p=!1,g=null,v=null,S=null,_=null,y=null,E=null,x=null,b=new Ct(0,0,0),R=0,w=!1,L=null,C=null,D=null,A=null,F=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,W=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=W>=2);let k=null,H={};const X=i.getParameter(i.SCISSOR_BOX),ht=i.getParameter(i.VIEWPORT),Y=new Se().fromArray(X),ct=new Se().fromArray(ht);function lt(I,j,J,rt){const at=new Uint8Array(4),ft=i.createTexture();i.bindTexture(I,ft),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<J;Tt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(j+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return ft}const xt={};xt[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(i.DEPTH_TEST),a.setFunc(hs),ve(!1),ae(zl),dt(i.CULL_FACE),Rt(Ci);function dt(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Pt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Yt(I,j){return u[I]!==j?(i.bindFramebuffer(I,j),u[I]=j,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=j),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=j),!0):!1}function bt(I,j){let J=m,rt=!1;if(I){J=d.get(j),J===void 0&&(J=[],d.set(j,J));const at=I.textures;if(J.length!==at.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Tt=at.length;ft<Tt;ft++)J[ft]=i.COLOR_ATTACHMENT0+ft;J.length=at.length,rt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,rt=!0);rt&&i.drawBuffers(J)}function ut(I){return M!==I?(i.useProgram(I),M=I,!0):!1}const vt={[Pi]:i.FUNC_ADD,[wf]:i.FUNC_SUBTRACT,[Af]:i.FUNC_REVERSE_SUBTRACT};vt[Tf]=i.MIN,vt[Rf]=i.MAX;const wt={[Cf]:i.ZERO,[Pf]:i.ONE,[Lf]:i.SRC_COLOR,[Gl]:i.SRC_ALPHA,[Of]:i.SRC_ALPHA_SATURATE,[Uf]:i.DST_COLOR,[If]:i.DST_ALPHA,[Df]:i.ONE_MINUS_SRC_COLOR,[Hl]:i.ONE_MINUS_SRC_ALPHA,[Ff]:i.ONE_MINUS_DST_COLOR,[Nf]:i.ONE_MINUS_DST_ALPHA,[zf]:i.CONSTANT_COLOR,[Bf]:i.ONE_MINUS_CONSTANT_COLOR,[kf]:i.CONSTANT_ALPHA,[Gf]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(I,j,J,rt,at,ft,Tt,Wt,mt,zt){if(I===Ci){p===!0&&(Pt(i.BLEND),p=!1);return}if(p===!1&&(dt(i.BLEND),p=!0),I!==Ef){if(I!==g||zt!==w){if((v!==Pi||y!==Pi)&&(i.blendEquation(i.FUNC_ADD),v=Pi,y=Pi),zt)switch(I){case cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ma:i.blendFunc(i.ONE,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:le("WebGLState: Invalid blending: ",I);break}else switch(I){case cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ma:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bl:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kl:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",I);break}S=null,_=null,E=null,x=null,b.set(0,0,0),R=0,g=I,w=zt}return}at=at||j,ft=ft||J,Tt=Tt||rt,(j!==v||at!==y)&&(i.blendEquationSeparate(vt[j],vt[at]),v=j,y=at),(J!==S||rt!==_||ft!==E||Tt!==x)&&(i.blendFuncSeparate(wt[J],wt[rt],wt[ft],wt[Tt]),S=J,_=rt,E=ft,x=Tt),(Wt.equals(b)===!1||mt!==R)&&(i.blendColor(Wt.r,Wt.g,Wt.b,mt),b.copy(Wt),R=mt),g=I,w=!1}function Kt(I,j){I.side===we?Pt(i.CULL_FACE):dt(i.CULL_FACE);let J=I.side===Ke;j&&(J=!J),ve(J),I.blending===cs&&I.transparent===!1?Rt(Ci):Rt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const rt=I.stencilWrite;o.setTest(rt),rt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),he(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(I){L!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),L=I)}function ae(I){I!==Sf?(dt(i.CULL_FACE),I!==C&&(I===zl?i.cullFace(i.BACK):I===yf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),C=I}function Ae(I){I!==D&&(z&&i.lineWidth(I),D=I)}function he(I,j,J){I?(dt(i.POLYGON_OFFSET_FILL),(A!==j||F!==J)&&(A=j,F=J,a.getReversed()&&(j=-j,J=-J),i.polygonOffset(j,J))):Pt(i.POLYGON_OFFSET_FILL)}function Me(I){I?dt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function Oe(I){I===void 0&&(I=i.TEXTURE0+G-1),k!==I&&(i.activeTexture(I),k=I)}function ue(I,j,J){J===void 0&&(k===null?J=i.TEXTURE0+G-1:J=k);let rt=H[J];rt===void 0&&(rt={type:void 0,texture:void 0},H[J]=rt),(rt.type!==I||rt.texture!==j)&&(k!==J&&(i.activeTexture(J),k=J),i.bindTexture(I,j||xt[I]),rt.type=I,rt.texture=j)}function Z(){const I=H[k];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Dt(){try{i.compressedTexImage2D(...arguments)}catch(I){le("WebGLState:",I)}}function te(){try{i.compressedTexImage3D(...arguments)}catch(I){le("WebGLState:",I)}}function $t(){try{i.texSubImage2D(...arguments)}catch(I){le("WebGLState:",I)}}function gt(){try{i.texSubImage3D(...arguments)}catch(I){le("WebGLState:",I)}}function be(){try{i.compressedTexSubImage2D(...arguments)}catch(I){le("WebGLState:",I)}}function Ot(){try{i.compressedTexSubImage3D(...arguments)}catch(I){le("WebGLState:",I)}}function kt(){try{i.texStorage2D(...arguments)}catch(I){le("WebGLState:",I)}}function U(){try{i.texStorage3D(...arguments)}catch(I){le("WebGLState:",I)}}function T(){try{i.texImage2D(...arguments)}catch(I){le("WebGLState:",I)}}function tt(){try{i.texImage3D(...arguments)}catch(I){le("WebGLState:",I)}}function pt(I){return f[I]!==void 0?f[I]:i.getParameter(I)}function ot(I,j){f[I]!==j&&(i.pixelStorei(I,j),f[I]=j)}function _t(I){Y.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Y.copy(I))}function N(I){ct.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ct.copy(I))}function O(I,j){let J=c.get(j);J===void 0&&(J=new WeakMap,c.set(j,J));let rt=J.get(I);rt===void 0&&(rt=i.getUniformBlockIndex(j,I.name),i.uniformBlockBinding(j,rt,rt),J.set(I,rt))}function B(I,j,J){const at=c.get(j).get(I);l[at]!==J&&(i.bindBufferBase(i.UNIFORM_BUFFER,at,J),l[at]=J)}function K(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},k=null,H={},u={},l={},d=new WeakMap,m=[],M=null,p=!1,g=null,v=null,S=null,_=null,y=null,E=null,x=null,b=new Ct(0,0,0),R=0,w=!1,L=null,C=null,D=null,A=null,F=null,Y.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:dt,disable:Pt,bindFramebuffer:Yt,drawBuffers:bt,useProgram:ut,setBlending:Rt,setMaterial:Kt,setFlipSided:ve,setCullFace:ae,setLineWidth:Ae,setPolygonOffset:he,setScissorTest:Me,activeTexture:Oe,bindTexture:ue,unbindTexture:Z,compressedTexImage2D:Dt,compressedTexImage3D:te,texImage2D:T,texImage3D:tt,pixelStorei:ot,getParameter:pt,updateUBOMapping:O,uniformBlockBinding:B,texStorage2D:kt,texStorage3D:U,texSubImage2D:$t,texSubImage3D:gt,compressedTexSubImage2D:be,compressedTexSubImage3D:Ot,scissor:_t,viewport:N,reset:K}}function Rx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap,f=new Set;let u;const d=new WeakMap,m=new Set,M=new FinalizationRegistry(U=>m.delete(U));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,T){return p?new OffscreenCanvas(U,T):ps("canvas")}function v(U,T,tt){let pt=1;const ot=kt(U);if((ot.width>tt||ot.height>tt)&&(pt=tt/Math.max(ot.width,ot.height)),pt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const _t=Math.floor(pt*ot.width),N=Math.floor(pt*ot.height);u===void 0&&(u=g(_t,N));const O=T?g(_t,N):u;return O.width=_t,O.height=N,O.getContext("2d").drawImage(U,0,0,_t,N),Ht("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+_t+"x"+N+")."),O}else return"data"in U&&Ht("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),U;return U}function S(U){return U.generateMipmaps}function _(U){i.generateMipmap(U)}function y(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(U,T,tt,pt,ot,_t=!1){if(U!==null){if(i[U]!==void 0)return i[U];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let N;pt&&(N=t.get("EXT_texture_norm16"),N||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let O=T;if(T===i.RED&&(tt===i.FLOAT&&(O=i.R32F),tt===i.HALF_FLOAT&&(O=i.R16F),tt===i.UNSIGNED_BYTE&&(O=i.R8),tt===i.UNSIGNED_SHORT&&N&&(O=N.R16_EXT),tt===i.SHORT&&N&&(O=N.R16_SNORM_EXT)),T===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(O=i.R8UI),tt===i.UNSIGNED_SHORT&&(O=i.R16UI),tt===i.UNSIGNED_INT&&(O=i.R32UI),tt===i.BYTE&&(O=i.R8I),tt===i.SHORT&&(O=i.R16I),tt===i.INT&&(O=i.R32I)),T===i.RG&&(tt===i.FLOAT&&(O=i.RG32F),tt===i.HALF_FLOAT&&(O=i.RG16F),tt===i.UNSIGNED_BYTE&&(O=i.RG8),tt===i.UNSIGNED_SHORT&&N&&(O=N.RG16_EXT),tt===i.SHORT&&N&&(O=N.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(O=i.RG8UI),tt===i.UNSIGNED_SHORT&&(O=i.RG16UI),tt===i.UNSIGNED_INT&&(O=i.RG32UI),tt===i.BYTE&&(O=i.RG8I),tt===i.SHORT&&(O=i.RG16I),tt===i.INT&&(O=i.RG32I)),T===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(O=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(O=i.RGB16UI),tt===i.UNSIGNED_INT&&(O=i.RGB32UI),tt===i.BYTE&&(O=i.RGB8I),tt===i.SHORT&&(O=i.RGB16I),tt===i.INT&&(O=i.RGB32I)),T===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(O=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(O=i.RGBA16UI),tt===i.UNSIGNED_INT&&(O=i.RGBA32UI),tt===i.BYTE&&(O=i.RGBA8I),tt===i.SHORT&&(O=i.RGBA16I),tt===i.INT&&(O=i.RGBA32I)),T===i.RGB&&(tt===i.UNSIGNED_SHORT&&N&&(O=N.RGB16_EXT),tt===i.SHORT&&N&&(O=N.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(O=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(O=i.R11F_G11F_B10F)),T===i.RGBA){const B=_t?or:ie.getTransfer(ot);tt===i.FLOAT&&(O=i.RGBA32F),tt===i.HALF_FLOAT&&(O=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(O=B===de?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&N&&(O=N.RGBA16_EXT),tt===i.SHORT&&N&&(O=N.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(O=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(O=i.RGB5_A1)}return(O===i.R16F||O===i.R32F||O===i.RG16F||O===i.RG32F||O===i.RGBA16F||O===i.RGBA32F)&&t.get("EXT_color_buffer_float"),O}function x(U,T){let tt;return U?T===null||T===An||T===Di?tt=i.DEPTH24_STENCIL8:T===un?tt=i.DEPTH32F_STENCIL8:T===fs&&(tt=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===An||T===Di?tt=i.DEPTH_COMPONENT24:T===un?tt=i.DEPTH_COMPONENT32F:T===fs&&(tt=i.DEPTH_COMPONENT16),tt}function b(U,T){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ge&&U.minFilter!==We?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function R(U){const T=new WeakRef(U);n.get(U).__ref=T,m.add(T),M.register(U,T,T)}function w(U){const T=n.get(U).__ref;T!==void 0&&(m.delete(T),M.unregister(T))}function L(U){D(U.target)}function C(U){A(U.target)}function D(U){U.removeEventListener("dispose",L),w(U),G(U),U.isVideoTexture&&h.delete(U),U.isHTMLTexture&&f.delete(U)}function A(U){U.removeEventListener("dispose",C),w(U),W(U)}function F(){for(const U of m){const T=U.deref();T!==void 0&&(T.isRenderTarget===!0?A(T):D(T))}m.clear(),f.clear()}function G(U){const T=n.get(U);if(T.__webglInit===void 0)return;const tt=U.source,pt=d.get(tt);if(pt){const ot=pt[T.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&z(U),Object.keys(pt).length===0&&d.delete(tt)}n.remove(U)}function z(U){const T=n.get(U);i.deleteTexture(T.__webglTexture);const tt=U.source,pt=d.get(tt);delete pt[T.__cacheKey],a.memory.textures--}function W(U){const T=n.get(U);T.__depthDisposeCallback&&T.__depthDisposeCallback();const tt=U.depthTexture;if(tt&&tt.renderTarget===U&&D(tt),U.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(T.__webglFramebuffer[ot]))for(let _t=0;_t<T.__webglFramebuffer[ot].length;_t++)i.deleteFramebuffer(T.__webglFramebuffer[ot][_t]);else i.deleteFramebuffer(T.__webglFramebuffer[ot]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ot])}else{if(Array.isArray(T.__webglFramebuffer))for(let ot=0;ot<T.__webglFramebuffer.length;ot++)i.deleteFramebuffer(T.__webglFramebuffer[ot]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ot=0;ot<T.__webglColorRenderbuffer.length;ot++)T.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ot]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const pt=U.textures;for(let ot=0,_t=pt.length;ot<_t;ot++){const N=n.get(pt[ot]);N.__webglTexture&&(i.deleteTexture(N.__webglTexture),a.memory.textures--),n.remove(pt[ot])}n.remove(U)}let V=0;function k(){V=0}function H(){return V}function X(U){V=U}function ht(){const U=V;return U>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,U}function Y(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.mipmapsAutoUpdate),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function ct(U,T){const tt=n.get(U);if(U.isVideoTexture&&be(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&tt.__version!==U.version){const pt=U.image;if(pt===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Kt(tt,U,T);return}}else U.isExternalTexture&&(tt.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+T)}function lt(U,T){const tt=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){Kt(tt,U,T);return}else U.isExternalTexture&&(tt.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+T)}function xt(U,T){const tt=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){Kt(tt,U,T);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+T)}function dt(U,T){const tt=n.get(U);if(U.version>0&&tt.__version!==U.version){ve(tt,U,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+T)}const Pt={[Js]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},Yt={[Ge]:i.NEAREST,[Wf]:i.NEAREST_MIPMAP_NEAREST,[Qs]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[Ra]:i.LINEAR_MIPMAP_NEAREST,[wn]:i.LINEAR_MIPMAP_LINEAR},bt={[$f]:i.NEVER,[sc]:i.ALWAYS,[Zf]:i.LESS,[nc]:i.LEQUAL,[Kf]:i.EQUAL,[ic]:i.GEQUAL,[Jf]:i.GREATER,[Qf]:i.NOTEQUAL};function ut(U,T){if(T.type===un&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===We||T.magFilter===Ra||T.magFilter===Qs||T.magFilter===wn||T.minFilter===We||T.minFilter===Ra||T.minFilter===Qs||T.minFilter===wn)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Pt[T.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Pt[T.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Pt[T.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Yt[T.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Yt[T.minFilter]),T.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,bt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ge||T.minFilter!==Qs&&T.minFilter!==wn||T.type===un&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function vt(U,T){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",L),R(T));const pt=T.source;let ot=d.get(pt);ot===void 0&&(ot={},d.set(pt,ot));const _t=Y(T);if(_t!==U.__cacheKey){ot[_t]===void 0&&(ot[_t]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,tt=!0),ot[_t].usedTimes++;const N=ot[U.__cacheKey];N!==void 0&&(ot[U.__cacheKey].usedTimes--,N.usedTimes===0&&z(T)),U.__cacheKey=_t,U.__webglTexture=ot[_t].texture}return tt}function wt(U,T,tt){return Math.floor(Math.floor(U/tt)/T)}function Rt(U,T,tt,pt){const _t=U.updateRanges;if(_t.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,tt,pt,T.data);else{_t.sort((I,j)=>I.start-j.start);let N=0;for(let I=1;I<_t.length;I++){const j=_t[N],J=_t[I],rt=j.start+j.count,at=wt(J.start,T.width,4),ft=wt(j.start,T.width,4);J.start<=rt+1&&at===ft&&wt(J.start+J.count-1,T.width,4)===at?j.count=Math.max(j.count,J.start+J.count-j.start):(++N,_t[N]=J)}_t.length=N+1;const O=e.getParameter(i.UNPACK_ROW_LENGTH),B=e.getParameter(i.UNPACK_SKIP_PIXELS),K=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let I=0,j=_t.length;I<j;I++){const J=_t[I],rt=Math.floor(J.start/4),at=Math.ceil(J.count/4),ft=rt%T.width,Tt=Math.floor(rt/T.width),Wt=at,mt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,Tt),e.texSubImage2D(i.TEXTURE_2D,0,ft,Tt,Wt,mt,tt,pt,T.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,O),e.pixelStorei(i.UNPACK_SKIP_PIXELS,B),e.pixelStorei(i.UNPACK_SKIP_ROWS,K)}}function Kt(U,T,tt){let pt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pt=i.TEXTURE_3D);const ot=vt(U,T),_t=T.source;e.bindTexture(pt,U.__webglTexture,i.TEXTURE0+tt);const N=n.get(_t);if(_t.version!==N.__version||ot===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const mt=ie.getPrimaries(ie.workingColorSpace),zt=T.colorSpace===Fn?null:ie.getPrimaries(T.colorSpace),Xt=T.colorSpace===Fn||mt===zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let B=v(T.image,!1,s.maxTextureSize);B=Ot(T,B);const K=r.convert(T.format,T.colorSpace),I=r.convert(T.type);let j=E(T.internalFormat,K,I,T.normalized,T.colorSpace,T.isVideoTexture);ut(pt,T);let J;const rt=T.mipmaps,at=T.isVideoTexture!==!0,ft=N.__version===void 0||ot===!0,Tt=_t.dataReady,Wt=b(T,B);if(T.isDepthTexture)j=x(T.format===ni,T.type),ft&&(at?e.texStorage2D(i.TEXTURE_2D,1,j,B.width,B.height):e.texImage2D(i.TEXTURE_2D,0,j,B.width,B.height,0,K,I,null));else if(T.isDataTexture)if(rt.length>0){at&&ft&&e.texStorage2D(i.TEXTURE_2D,Wt,j,rt[0].width,rt[0].height);for(let mt=0,zt=rt.length;mt<zt;mt++)J=rt[mt],at?Tt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,J.width,J.height,K,I,J.data):e.texImage2D(i.TEXTURE_2D,mt,j,J.width,J.height,0,K,I,J.data);T.generateMipmaps=!1}else at?(ft&&e.texStorage2D(i.TEXTURE_2D,Wt,j,B.width,B.height),Tt&&Rt(T,B,K,I)):e.texImage2D(i.TEXTURE_2D,0,j,B.width,B.height,0,K,I,B.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){at&&ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,j,rt[0].width,rt[0].height,B.depth);for(let mt=0,zt=rt.length;mt<zt;mt++)if(J=rt[mt],T.format!==dn)if(K!==null)if(at){if(Tt)if(T.layerUpdates.size>0){const Xt=oh(J.width,J.height,T.format,T.type);for(const Et of T.layerUpdates){const pe=J.data.subarray(Et*Xt/J.data.BYTES_PER_ELEMENT,(Et+1)*Xt/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,Et,J.width,J.height,1,K,pe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,J.width,J.height,B.depth,K,J.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,j,J.width,J.height,B.depth,0,J.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Tt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,J.width,J.height,B.depth,K,I,J.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,j,J.width,J.height,B.depth,0,K,I,J.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{at&&ft&&e.texStorage2D(i.TEXTURE_2D,Wt,j,rt[0].width,rt[0].height);for(let mt=0,zt=rt.length;mt<zt;mt++)J=rt[mt],T.format!==dn?K!==null?at?Tt&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,J.width,J.height,K,J.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,j,J.width,J.height,0,J.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Tt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,J.width,J.height,K,I,J.data):e.texImage2D(i.TEXTURE_2D,mt,j,J.width,J.height,0,K,I,J.data)}else if(T.isDataArrayTexture)if(at){if(ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,j,B.width,B.height,B.depth),Tt)if(T.layerUpdates.size>0){const mt=oh(B.width,B.height,T.format,T.type);for(const zt of T.layerUpdates){const Xt=B.data.subarray(zt*mt/B.data.BYTES_PER_ELEMENT,(zt+1)*mt/B.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,zt,B.width,B.height,1,K,I,Xt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,K,I,B.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,j,B.width,B.height,B.depth,0,K,I,B.data);else if(T.isData3DTexture)at?(ft&&e.texStorage3D(i.TEXTURE_3D,Wt,j,B.width,B.height,B.depth),Tt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,K,I,B.data)):e.texImage3D(i.TEXTURE_3D,0,j,B.width,B.height,B.depth,0,K,I,B.data);else if(T.isFramebufferTexture){if(ft)if(at)e.texStorage2D(i.TEXTURE_2D,Wt,j,B.width,B.height);else{let mt=B.width,zt=B.height;for(let Xt=0;Xt<Wt;Xt++)e.texImage2D(i.TEXTURE_2D,Xt,j,mt,zt,0,K,I,null),mt>>=1,zt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){const mt=i.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),B.parentNode!==mt){mt.appendChild(B),f.add(T),mt.onpaint=zt=>{const Xt=zt.changedElements;for(const Et of f)Xt.includes(Et.image)&&(Et.needsUpdate=!0)},mt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,B);else{const Xt=i.RGBA,Et=i.RGBA,pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Xt,Et,pe,B)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(rt.length>0){if(at&&ft){const mt=kt(rt[0]);e.texStorage2D(i.TEXTURE_2D,Wt,j,mt.width,mt.height)}for(let mt=0,zt=rt.length;mt<zt;mt++)J=rt[mt],at?Tt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,K,I,J):e.texImage2D(i.TEXTURE_2D,mt,j,K,I,J);T.generateMipmaps=!1}else if(at){if(ft){const mt=kt(B);e.texStorage2D(i.TEXTURE_2D,Wt,j,mt.width,mt.height)}Tt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,K,I,B)}else e.texImage2D(i.TEXTURE_2D,0,j,K,I,B);S(T)&&T.mipmapsAutoUpdate===!0&&_(pt),N.__version=_t.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ve(U,T,tt){if(T.image.length!==6)return;const pt=vt(U,T),ot=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+tt);const _t=n.get(ot);if(ot.version!==_t.__version||pt===!0){e.activeTexture(i.TEXTURE0+tt);const N=ie.getPrimaries(ie.workingColorSpace),O=T.colorSpace===Fn?null:ie.getPrimaries(T.colorSpace),B=T.colorSpace===Fn||N===O?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);const K=T.isCompressedTexture||T.image[0].isCompressedTexture,I=T.image[0]&&T.image[0].isDataTexture,j=[];for(let Et=0;Et<6;Et++)!K&&!I?j[Et]=v(T.image[Et],!0,s.maxCubemapSize):j[Et]=I?T.image[Et].image:T.image[Et],j[Et]=Ot(T,j[Et]);const J=j[0],rt=r.convert(T.format,T.colorSpace),at=r.convert(T.type);let ft=E(T.internalFormat,rt,at,T.normalized,T.colorSpace);const Tt=T.isVideoTexture!==!0,Wt=_t.__version===void 0||pt===!0,mt=ot.dataReady;let zt=b(T,J);ut(i.TEXTURE_CUBE_MAP,T);let Xt;if(T.isDepthTexture){if(ft=x(T.format===ni,T.type),Wt)if(Tt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ft,J.width,J.height);else for(let Et=0;Et<6;Et++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ft,J.width,J.height,0,rt,at,null)}else if(K){Tt&&Wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,ft,J.width,J.height);for(let Et=0;Et<6;Et++){Xt=j[Et].mipmaps;for(let pe=0;pe<Xt.length;pe++){const Be=Xt[pe];T.format!==dn?rt!==null?Tt?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe,0,0,Be.width,Be.height,rt,Be.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe,ft,Be.width,Be.height,0,Be.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe,0,0,Be.width,Be.height,rt,at,Be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe,ft,Be.width,Be.height,0,rt,at,Be.data)}}}else{if(Xt=T.mipmaps,Tt&&Wt){Xt.length>0&&zt++;const Et=kt(j[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,ft,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(I){Tt?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,j[Et].width,j[Et].height,rt,at,j[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ft,j[Et].width,j[Et].height,0,rt,at,j[Et].data);for(let pe=0;pe<Xt.length;pe++){const di=Xt[pe].image[Et].image;Tt?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe+1,0,0,di.width,di.height,rt,at,di.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe+1,ft,di.width,di.height,0,rt,at,di.data)}}else{Tt?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,rt,at,j[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ft,rt,at,j[Et]);for(let pe=0;pe<Xt.length;pe++){const Be=Xt[pe];Tt?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe+1,0,0,rt,at,Be.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe+1,ft,rt,at,Be.image[Et])}}}S(T)&&T.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),_t.__version=ot.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ae(U,T,tt,pt,ot,_t){const N=r.convert(tt.format,tt.colorSpace),O=r.convert(tt.type),B=E(tt.internalFormat,N,O,tt.normalized,tt.colorSpace),K=n.get(T),I=n.get(tt);if(I.__renderTarget=T,!K.__hasExternalTextures){const j=Math.max(1,T.width>>_t),J=Math.max(1,T.height>>_t);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,_t,B,j,J,T.depth,0,N,O,null):e.texImage2D(ot,_t,B,j,J,0,N,O,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),gt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,ot,I.__webglTexture,0,$t(T)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pt,ot,I.__webglTexture,_t),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(U,T,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,U),T.depthBuffer){const pt=T.depthTexture,ot=pt&&pt.isDepthTexture?pt.type:null,_t=x(T.stencilBuffer,ot),N=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t(T),_t,T.width,T.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t(T),_t,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,_t,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,N,i.RENDERBUFFER,U)}else{const pt=T.textures;for(let ot=0;ot<pt.length;ot++){const _t=pt[ot],N=r.convert(_t.format,_t.colorSpace),O=r.convert(_t.type),B=E(_t.internalFormat,N,O,_t.normalized,_t.colorSpace);gt(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t(T),B,T.width,T.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t(T),B,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,B,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(U,T,tt){const pt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ot=n.get(T.depthTexture);ot.__renderTarget=T;const _t=pt?T.depthTexture.image[0]:T.depthTexture.image;(!ot.__webglTexture||_t.width!==T.width||_t.height!==T.height)&&(_t.width=T.width,_t.height=T.height,T.depthTexture.needsUpdate=!0),pt?dt(T.depthTexture,0):ct(T.depthTexture,0);const N=ot.__webglTexture,O=$t(T),B=pt?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,K=T.depthTexture.format===ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===ei)gt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,B,N,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,K,B,N,0);else if(T.depthTexture.format===ni)gt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,B,N,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,K,B,N,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Me(U){const T=n.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const pt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pt){const ot=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pt.removeEventListener("dispose",ot)};pt.addEventListener("dispose",ot),T.__depthDisposeCallback=ot}T.__boundDepthTexture=pt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer)if(tt)for(let pt=0;pt<6;pt++)he(T.__webglFramebuffer[pt],U,pt);else U.texture.mipmaps.length>0?he(T.__webglFramebuffer[0],U,0):he(T.__webglFramebuffer,U,0);else if(tt){T.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[pt]),T.__webglDepthbuffer[pt]===void 0)T.__webglDepthbuffer[pt]=i.createRenderbuffer(),Ae(T.__webglDepthbuffer[pt],U,!1);else{const ot=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=T.__webglDepthbuffer[pt];i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,_t)}}else if(U.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Ae(T.__webglDepthbuffer,U,!1);else{const ot=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,_t)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(U,T,tt){const pt=n.get(U);T!==void 0&&ae(pt.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&Me(U)}function ue(U){const T=U.texture,tt=n.get(U),pt=n.get(T);U.addEventListener("dispose",C),R(U);const ot=U.textures,_t=U.isWebGLCubeRenderTarget===!0,N=ot.length>1;if(N||(pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture()),pt.__version=T.version,a.memory.textures++),_t){tt.__webglFramebuffer=[];for(let O=0;O<6;O++)if(T.mipmaps.length>0){tt.__webglFramebuffer[O]=[];for(let B=0;B<T.mipmaps.length;B++)tt.__webglFramebuffer[O][B]=i.createFramebuffer()}else tt.__webglFramebuffer[O]=i.createFramebuffer()}else{if(T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let O=0;O<T.mipmaps.length;O++)tt.__webglFramebuffer[O]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(N)for(let O=0,B=ot.length;O<B;O++){const K=n.get(ot[O]);K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&gt(U)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let O=0;O<ot.length;O++){const B=ot[O];tt.__webglColorRenderbuffer[O]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[O]);const K=r.convert(B.format,B.colorSpace),I=r.convert(B.type),j=E(B.internalFormat,K,I,B.normalized,B.colorSpace,U.isXRRenderTarget===!0),J=$t(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,j,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,tt.__webglColorRenderbuffer[O])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(tt.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_t){e.bindTexture(i.TEXTURE_CUBE_MAP,pt.__webglTexture),ut(i.TEXTURE_CUBE_MAP,T);for(let O=0;O<6;O++)if(T.mipmaps.length>0)for(let B=0;B<T.mipmaps.length;B++)ae(tt.__webglFramebuffer[O][B],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+O,B);else ae(tt.__webglFramebuffer[O],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);S(T)?_(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(N){for(let O=0,B=ot.length;O<B;O++){const K=ot[O],I=n.get(K);let j=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(j=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,I.__webglTexture),ut(j,K),ae(tt.__webglFramebuffer,U,K,i.COLOR_ATTACHMENT0+O,j,0),S(K)&&_(j)}e.unbindTexture()}else{let O=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(O=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(O,pt.__webglTexture),ut(O,T),T.mipmaps.length>0)for(let B=0;B<T.mipmaps.length;B++)ae(tt.__webglFramebuffer[B],U,T,i.COLOR_ATTACHMENT0,O,B);else ae(tt.__webglFramebuffer,U,T,i.COLOR_ATTACHMENT0,O,0);S(T)?_(O):T.mipmaps.length>0&&i.texParameteri(O,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}U.depthBuffer&&Me(U)}function Z(U){const T=U.textures;for(let tt=0,pt=T.length;tt<pt;tt++){const ot=T[tt];if(S(ot)&&ot.mipmapsAutoUpdate===!0){const _t=y(U),N=n.get(ot).__webglTexture;e.bindTexture(_t,N),_(_t),e.unbindTexture()}}}const Dt=[];function te(U){if(U.samples>0){if(gt(U)===!1){const T=U.textures,tt=U.width,pt=U.height;let ot=i.COLOR_BUFFER_BIT;const _t=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=n.get(U),O=T.length>1;if(O)for(let K=0;K<T.length;K++)e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,N.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,N.__webglMultisampledFramebuffer),U.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,N.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,N.__webglFramebuffer);for(let K=0;K<T.length;K++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),O){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,N.__webglColorRenderbuffer[K]);const I=n.get(T[K]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,tt,pt,0,0,tt,pt,ot,i.NEAREST),l===!0&&(Dt.length=0,Dt.push(i.COLOR_ATTACHMENT0+K),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&Dt.push(_t),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),O)for(let K=0;K<T.length;K++){e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,N.__webglColorRenderbuffer[K]);const I=n.get(T[K]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,N.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,I,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,N.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){const T=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function $t(U){return Math.min(s.maxSamples,U.samples)}function gt(U){const T=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function be(U){const T=a.render.frame;h.get(U)!==T&&(h.set(U,T),U.update())}function Ot(U,T){const tt=U.colorSpace,pt=U.format,ot=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==ar&&tt!==Fn&&(ie.getTransfer(tt)===de?(pt!==dn||ot!==tn)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",tt)),T}function kt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=ht,this.resetTextureUnits=k,this.getTextureUnits=H,this.setTextureUnits=X,this.setTexture2D=ct,this.setTexture2DArray=lt,this.setTexture3D=xt,this.setTextureCube=dt,this.rebindTextures=Oe,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=gt,this.dispose=F}function Cx(i,t){function e(n,s=Fn){let r;const a=ie.getTransfer(s);if(n===tn)return i.UNSIGNED_BYTE;if(n===Pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===La)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kl)return i.BYTE;if(n===Jl)return i.SHORT;if(n===fs)return i.UNSIGNED_SHORT;if(n===Ca)return i.INT;if(n===An)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===tc)return i.ALPHA;if(n===ec)return i.RGB;if(n===dn)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===ni)return i.DEPTH_STENCIL;if(n===Da)return i.RED;if(n===Ia)return i.RED_INTEGER;if(n===ii)return i.RG;if(n===Na)return i.RG_INTEGER;if(n===Ua)return i.RGBA_INTEGER;if(n===js||n===tr||n===er||n===nr)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===Oa||n===za||n===Ba)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===Ga||n===Ha||n===Va||n===Wa||n===ir||n===Xa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ka||n===Ga)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ha)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Va)return r.COMPRESSED_R11_EAC;if(n===Wa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ir)return r.COMPRESSED_RG11_EAC;if(n===Xa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qa||n===Ya||n===$a||n===Za||n===Ka||n===Ja||n===Qa||n===ja||n===to||n===eo||n===no||n===io||n===so||n===ro)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qa)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ya)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$a)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ka)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qa)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===to)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===no)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===io)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===so)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ro)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ao||n===oo||n===lo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ao)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===co||n===ho||n===sr||n===uo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===co)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lx=`
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

}`;class Dx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new zc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xn({vertexShader:Px,fragmentShader:Lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ix extends si{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const M=typeof XRWebGLBinding<"u",p=new Dx,g={},v=e.getContextAttributes();let S=null,_=null;const y=[],E=[],x=new Bt;let b=null,R=null;const w=new Mn;w.viewport=new Se;const L=new Mn;L.viewport=new Se;const C=[w,L],D=new bp;let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ct=y[Y];return ct===void 0&&(ct=new bo,y[Y]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Y){let ct=y[Y];return ct===void 0&&(ct=new bo,y[Y]=ct),ct.getGripSpace()},this.getHand=function(Y){let ct=y[Y];return ct===void 0&&(ct=new bo,y[Y]=ct),ct.getHandSpace()};function G(Y){const ct=E.indexOf(Y.inputSource);if(ct===-1)return;const lt=y[ct];lt!==void 0&&(lt.update(Y.inputSource,Y.frame,c||a),lt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",W);for(let Y=0;Y<y.length;Y++){const ct=E[Y];ct!==null&&(E[Y]=null,y[Y].disconnect(ct))}A=null,F=null,p.reset();for(const Y in g)delete g[Y];if(t.setRenderTarget(S),d=null,u=null,f=null,s=null,_=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),R!==null){const Y=R.camera;Y.fov=R.fov,Y.zoom=R.zoom,Y.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",z),s.addEventListener("inputsourceschange",W),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,xt=null,dt=null;v.depth&&(dt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=v.stencil?ni:ei,xt=v.stencil?Di:An);const Pt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Pt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Tn(u.textureWidth,u.textureHeight,{format:dn,type:tn,depthTexture:new Yi(u.textureWidth,u.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const lt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Tn(d.framebufferWidth,d.framebufferHeight,{format:dn,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ht.setContext(s),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function W(Y){for(let ct=0;ct<Y.removed.length;ct++){const lt=Y.removed[ct],xt=E.indexOf(lt);xt>=0&&(E[xt]=null,y[xt].disconnect(lt))}for(let ct=0;ct<Y.added.length;ct++){const lt=Y.added[ct];let xt=E.indexOf(lt);if(xt===-1){for(let Pt=0;Pt<y.length;Pt++)if(Pt>=E.length){E.push(lt),xt=Pt;break}else if(E[Pt]===null){E[Pt]=lt,xt=Pt;break}if(xt===-1)break}const dt=y[xt];dt&&dt.connect(lt)}}function V(Y,ct){ct===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ct.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ct=Y.near,lt=Y.far;p.texture!==null&&(p.depthNear>0&&(ct=p.depthNear),p.depthFar>0&&(lt=p.depthFar)),D.near=L.near=w.near=ct,D.far=L.far=w.far=lt,(A!==D.near||F!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),A=D.near,F=D.far),D.layers.mask=Y.layers.mask|6,w.layers.mask=D.layers.mask&-5,L.layers.mask=D.layers.mask&-3;const xt=Y.parent,dt=D.cameras;V(D,xt);for(let Pt=0;Pt<dt.length;Pt++)V(dt[Pt],xt);D.projectionMatrix.copy(w.projectionMatrix),D.projectionMatrixInverse.copy(w.projectionMatrixInverse),R===null&&Y.isPerspectiveCamera&&(R={camera:Y,fov:Y.fov,zoom:Y.zoom}),k(Y,D,xt)};function k(Y,ct,lt){lt===null?Y.matrix.copy(ct.matrixWorld):(Y.matrix.copy(lt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ct.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ct.projectionMatrix),Y.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=gs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(Y){return g[Y]};let H=null;function X(Y,ct){if(h=ct.getViewerPose(c||a),m=ct,h!==null){const lt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let xt=!1;lt.length!==D.cameras.length&&(D.cameras.length=0,xt=!0);for(let bt=0;bt<lt.length;bt++){const ut=lt[bt];let vt=null;if(d!==null)vt=d.getViewport(ut);else{const Rt=f.getViewSubImage(u,ut);vt=Rt.viewport,bt===0&&(t.setRenderTargetTextures(_,Rt.colorTexture,Rt.depthStencilTexture),t.setRenderTarget(_))}let wt=C[bt];wt===void 0&&(wt=new Mn,wt.layers.enable(bt),wt.viewport=new Se,C[bt]=wt),wt.matrix.fromArray(ut.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(ut.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(vt.x,vt.y,vt.width,vt.height),bt===0&&(D.matrix.copy(wt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),xt===!0&&D.cameras.push(wt)}const dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();const bt=f.getDepthInformation(lt[0]);bt&&bt.isValid&&bt.texture&&p.init(bt,s.renderState)}if(dt&&dt.includes("camera-access")&&M){t.state.unbindTexture(),f=n.getBinding();for(let bt=0;bt<lt.length;bt++){const ut=lt[bt].camera;if(ut){let vt=g[ut];vt||(vt=new zc,g[ut]=vt);const wt=f.getCameraImage(ut);vt.sourceTexture=wt}}}}for(let lt=0;lt<y.length;lt++){const xt=E[lt],dt=y[lt];xt!==null&&dt!==void 0&&dt.update(xt,ct,c||a)}H&&H(Y,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),m=null}const ht=new lh;ht.setAnimationLoop(X),this.setAnimationLoop=function(Y){H=Y},this.dispose=function(){}}}const Nx=new jt,Bh=new Vt;Bh.set(-1,0,0,0,1,0,0,0,1);function Ux(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Yc(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,v,S,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&d(p,g,_)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),M(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,v,S):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ke&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ke&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const v=t.get(g),S=v.envMap,_=v.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Bh),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,S){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=S*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ke&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function M(p,g){const v=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fx(i,t,e,n){let s={},r={};function a(v,S){const _=S.program;n.uniformBlockBinding(v,_,s[v.id])}function o(v,S){let _=s[v.id];_===void 0&&(m(v),_=l(v),s[v.id]=_,v.addEventListener("dispose",p));const y=S.program;n.updateUBOMapping(v,y);const E=t.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function l(v){const S=i.createBuffer(),_=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,_,y),i.bindBuffer(i.UNIFORM_BUFFER,null),S}function c(v){const S=s[v.id],_=v.uniforms,y=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let E=0,x=_.length;E<x;E++){const b=_[E];if(Array.isArray(b))for(let R=0,w=b.length;R<w;R++)h(b[R],E,R,y);else h(b,E,0,y)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,S,_,y){if(u(v,S,_,y)===!0){const E=v.__offset,x=v.value;if(Array.isArray(x)){let b=0;for(let R=0;R<x.length;R++){const w=x[R],L=M(w,!0);f(w,v.__data,b),b+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,v.__data)}}function f(v,S,_){typeof v=="number"||typeof v=="boolean"?S[_]=v:v.isMatrix3?(S[_]=v.elements[0],S[_+1]=v.elements[1],S[_+2]=v.elements[2],S[_+3]=0,S[_+4]=v.elements[3],S[_+5]=v.elements[4],S[_+6]=v.elements[5],S[_+7]=0,S[_+8]=v.elements[6],S[_+9]=v.elements[7],S[_+10]=v.elements[8],S[_+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-_),_):v.toArray(S,_)}function u(v,S,_,y){const E=v.value,x=S+"_"+_;if(Array.isArray(E)){y[x]===void 0&&(y[x]=[]);const b=y[x];let R=!1;for(let w=0;w<E.length;w++)d(E[w],b,w)===!0&&(R=!0);return R}return d(E,y,x)}function d(v,S,_){if(S[_]===void 0)return typeof v=="number"||typeof v=="boolean"?S[_]=v:ArrayBuffer.isView(v)?S[_]=v.slice():S[_]=v.clone(),!0;{const y=S[_];if(typeof v=="number"||typeof v=="boolean"){if(y!==v)return S[_]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(y.equals(v)===!1)return y.copy(v),!0}}return!1}function m(v){const S=v.uniforms;let _=0;const y=16;for(let x=0,b=S.length;x<b;x++){const R=Array.isArray(S[x])?S[x]:[S[x]];for(let w=0,L=R.length;w<L;w++){const C=R[w],D=Array.isArray(C.value)?C.value:[C.value],A=Array.isArray(S[x])||Array.isArray(C.value);let F=_;for(let z=0,W=D.length;z<W;z++){const V=D[z],k=M(V,A),H=_%y,X=H%k.boundary,ht=H+X;_+=X,ht!==0&&y-ht<k.storage&&(_+=y-ht),z===0&&(F=_),_+=k.storage}const G=C.type==="int"?Int32Array:C.type==="uint"?Uint32Array:Float32Array;C.__data=new G((_-F)/Float32Array.BYTES_PER_ELEMENT),C.__offset=F}}const E=_%y;return E>0&&(_+=y-E),v.__size=_,v.__cache={},this}function M(v,S){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=16,_.storage=48):v.isMatrix4?(_.boundary=16,_.storage=64):v.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(_.boundary=16,_.storage=v.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function p(v){const S=v.target;S.removeEventListener("dispose",p),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(const v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:g}}const Ox=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ln=null;function zx(){return Ln===null&&(Ln=new bs(Ox,16,16,ii,fn),Ln.name="DFG_LUT",Ln.minFilter=We,Ln.magFilter=We,Ln.wrapS=hn,Ln.wrapT=hn,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}class Bx{constructor(t={}){const{canvas:e=ed(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=tn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const M=d,p=new Set([Ua,Na,Ia]),g=new Set([tn,An,fs,Di,Pa,La]),v=new Uint32Array(4),S=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]};let y=null,E=null;const x=[],b=[];let R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let L=!1,C=null,D=null,A=null,F=null;this._outputColorSpace=Te;let G=0,z=0,W=null,V=-1,k=null;const H=new Se,X=new Se;let ht=null;const Y=new Ct(0);let ct=0,lt=e.width,xt=e.height,dt=1,Pt=null,Yt=null;const bt=new Se(0,0,lt,xt),ut=new Se(0,0,lt,xt);let vt=!1;const wt=new As,Rt=new Bo;let Kt=!1,ve=!1;const ae=new jt,Ae=new Q,he=new Se,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function ue(){return W===null?dt:1}let Z=n;function Dt(P,q){return e.getContext(P,q)}let te,$t,gt,be,Ot,kt,U,T,tt,pt,ot,_t,N,O,B,K,I,j,J,rt,at,ft,Tt;try{const P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pa}`),e.addEventListener("webglcontextlost",zt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),Z===null){const q="webgl2";if(Z=Dt(q,P),Z===null)throw Dt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(P){throw e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),le("WebGLRenderer: "+P.message),P}function Wt(){te=new Hm(Z),te.init(),at=new Cx(Z,te),$t=new Lm(Z,te,t,at),gt=new Tx(Z,te),$t.reversedDepthBuffer&&u&&gt.buffers.depth.setReversed(!0),D=Z.createFramebuffer(),A=Z.createFramebuffer(),F=Z.createFramebuffer(),be=new Xm(Z),Ot=new dx,kt=new Rx(Z,te,gt,Ot,$t,at,be),U=new Gm(w),T=new Tp(Z),ft=new Cm(Z,T),tt=new Vm(Z,T,be,ft),pt=new Ym(Z,tt,T,ft,be),j=new qm(Z,$t,kt),B=new Dm(Ot),ot=new fx(w,U,te,$t,ft,B),_t=new Ux(w,Ot),N=new mx,O=new Sx(te),I=new Rm(w,U,gt,pt,m,l),K=new Ax(w,pt,$t),Tt=new Fx(Z,be,$t,gt),J=new Pm(Z,te,be),rt=new Wm(Z,te,be),be.programs=ot.programs,w.capabilities=$t,w.extensions=te,w.properties=Ot,w.renderLists=N,w.shadowMap=K,w.state=gt,w.info=be}M!==tn&&(R=new Zm(M,e.width,e.height,o,s,r));const mt=new Ix(w,Z);this.xr=mt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const P=te.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=te.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(P){P!==void 0&&(dt=P,this.setSize(lt,xt,!1))},this.getSize=function(P){return P.set(lt,xt)},this.setSize=function(P,q,st=!0){if(mt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=P,xt=q,e.width=Math.floor(P*dt),e.height=Math.floor(q*dt),st===!0&&(e.style.width=P+"px",e.style.height=q+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(lt*dt,xt*dt).floor()},this.setDrawingBufferSize=function(P,q,st){lt=P,xt=q,dt=st,e.width=Math.floor(P*st),e.height=Math.floor(q*st),this.setViewport(0,0,P,q)},this.setEffects=function(P){if(M===tn){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let q=0;q<P.length;q++)if(P[q].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(H)},this.getViewport=function(P){return P.copy(bt)},this.setViewport=function(P,q,st,nt){P.isVector4?bt.set(P.x,P.y,P.z,P.w):bt.set(P,q,st,nt),gt.viewport(H.copy(bt).multiplyScalar(ue()).round())},this.getScissor=function(P){return P.copy(ut)},this.setScissor=function(P,q,st,nt){P.isVector4?ut.set(P.x,P.y,P.z,P.w):ut.set(P,q,st,nt),gt.scissor(X.copy(ut).multiplyScalar(ue()).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(P){gt.setScissorTest(vt=P)},this.setOpaqueSort=function(P){Pt=P},this.setTransparentSort=function(P){Yt=P},this.getClearColor=function(P){return P.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(P=!0,q=!0,st=!0){let nt=0;if(P){let it=!1;if(W!==null){const St=W.texture.format;it=p.has(St)}if(it){const St=W.texture.type,Lt=g.has(St),Mt=I.getClearColor(),At=I.getClearAlpha(),Ft=Mt.r,qt=Mt.g,ee=Mt.b;Lt?(v[0]=Ft,v[1]=qt,v[2]=ee,v[3]=At,Z.clearBufferuiv(Z.COLOR,0,v)):(S[0]=Ft,S[1]=qt,S[2]=ee,S[3]=At,Z.clearBufferiv(Z.COLOR,0,S))}else nt|=Z.COLOR_BUFFER_BIT}q&&(nt|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(nt|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&Z.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),C=P},this.dispose=function(){e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),I.dispose(),N.dispose(),O.dispose(),kt.dispose(),Ot.dispose(),U.dispose(),pt.dispose(),tt.dispose(),ft.dispose(),Tt.dispose(),ot.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",hf),mt.removeEventListener("sessionend",uf),wi.stop()};function zt(P){P.preventDefault(),oc("WebGLRenderer: Context Lost."),L=!0}function Xt(){oc("WebGLRenderer: Context Restored."),L=!1;const P=be.autoReset,q=K.enabled,st=K.autoUpdate,nt=K.needsUpdate,it=K.type;Wt(),be.autoReset=P,K.enabled=q,K.autoUpdate=st,K.needsUpdate=nt,K.type=it}function Et(P){le("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function pe(P){const q=P.target;q.removeEventListener("dispose",pe),Be(q)}function Be(P){di(P),Ot.remove(P)}function di(P){const q=Ot.get(P).programs;q!==void 0&&(q.forEach(function(st){ot.releaseProgram(st)}),P.isShaderMaterial&&ot.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,st,nt,it,St){q===null&&(q=Me);const Lt=it.isMesh&&it.matrixWorld.determinantAffine()<0,Mt=vv(P,q,st,nt,it);gt.setMaterial(nt,Lt);let At=st.index,Ft=1;if(nt.wireframe===!0){if(At=tt.getWireframeAttribute(st),At===void 0)return;Ft=2}const qt=st.drawRange,ee=st.attributes.position;let It=qt.start*Ft,ne=(qt.start+qt.count)*Ft;St!==null&&(It=Math.max(It,St.start*Ft),ne=Math.min(ne,(St.start+St.count)*Ft)),At!==null?(It=Math.max(It,0),ne=Math.min(ne,At.count)):ee!=null&&(It=Math.max(It,0),ne=Math.min(ne,ee.count));const Le=ne-It;if(Le<0||Le===1/0)return;ft.setup(it,nt,Mt,st,At);let xe,me=J;if(At!==null&&(xe=T.get(At),me=rt,me.setIndex(xe)),it.isMesh)nt.wireframe===!0?(gt.setLineWidth(nt.wireframeLinewidth*ue()),me.setMode(Z.LINES)):me.setMode(Z.TRIANGLES);else if(it.isLine){let $e=nt.linewidth;$e===void 0&&($e=1),gt.setLineWidth($e*ue()),it.isLineSegments?me.setMode(Z.LINES):it.isLineLoop?me.setMode(Z.LINE_LOOP):me.setMode(Z.LINE_STRIP)}else it.isPoints?me.setMode(Z.POINTS):it.isSprite&&me.setMode(Z.TRIANGLES);if(it.isBatchedMesh)if(te.get("WEBGL_multi_draw"))me.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const $e=it._multiDrawStarts,Nt=it._multiDrawCounts,je=it._multiDrawCount,fe=At?T.get(At).bytesPerElement:1,Ai=Ot.get(nt).currentProgram.getUniforms();for(let Ze=0;Ze<je;Ze++)Ai.setValue(Z,"_gl_DrawID",Ze),me.render($e[Ze]/fe,Nt[Ze])}else if(it.isInstancedMesh)me.renderInstances(It,Le,it.count);else if(st.isInstancedBufferGeometry){const $e=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Nt=Math.min(st.instanceCount,$e);me.renderInstances(It,Le,Nt)}else me.render(It,Le)};function cf(P,q,st,nt){C!==null&&P.isNodeMaterial&&C.setObject(nt,P),Kt===!0&&B.setState(P,st,!1),P.transparent===!0&&P.side===we&&P.forceSinglePass===!1?(P.side=Ke,P.needsUpdate=!0,Ks(P,q,nt),P.side=ti,P.needsUpdate=!0,Ks(P,q,nt),P.side=we):Ks(P,q,nt)}this.compile=function(P,q,st=null){st===null&&(st=P),C!==null&&C.renderStart(P,q,st),E=O.get(st),E.init(q),b.push(E),st.traverseVisible(function(it){it.isLight&&it.layers.test(q.layers)&&(E.pushLight(it),it.castShadow&&E.pushShadow(it))}),P!==st&&P.traverseVisible(function(it){it.isLight&&it.layers.test(q.layers)&&(E.pushLight(it),it.castShadow&&E.pushShadow(it))}),E.setupLights(),C!==null&&C.updateLights(E.state.lightsArray),ve=this.localClippingEnabled,Kt=B.init(this.clippingPlanes,ve),Kt===!0&&B.setGlobalState(this.clippingPlanes,q),C!==null&&K.render(E.state.shadowsArray,st,q);const nt=new Set;return P.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const St=it.material;if(St)if(Array.isArray(St))for(let Lt=0;Lt<St.length;Lt++){const Mt=St[Lt];cf(Mt,st,q,it),nt.add(Mt)}else cf(St,st,q,it),nt.add(St)}),E=b.pop(),C!==null&&C.renderEnd(),nt},this.compileAsync=function(P,q,st=null){const nt=this.compile(P,q,st);return new Promise(it=>{function St(){if(nt.forEach(function(Lt){const At=Ot.get(Lt).currentProgram;(At===void 0||At.isReady())&&nt.delete(Lt)}),nt.size===0){it(P);return}setTimeout(St,10)}te.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Fl=null;function xv(P){Fl&&Fl(P)}function hf(){wi.stop()}function uf(){wi.start()}const wi=new lh;wi.setAnimationLoop(xv),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(P){Fl=P,mt.setAnimationLoop(P),P===null?wi.stop():wi.start()},mt.addEventListener("sessionstart",hf),mt.addEventListener("sessionend",uf),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;C!==null&&C.renderStart(P,q);const st=mt.enabled===!0&&mt.isPresenting===!0,nt=R!==null&&(W===null||st)&&R.begin(w,W);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(q),q=mt.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,q,W),E=O.get(P,b.length),E.init(q),E.state.textureUnits=kt.getTextureUnits(),b.push(E),ae.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),q.isArrayCamera?Rt.setFromArrayCamera(q):wt.setFromProjectionMatrix(ae,pn,q.reversedDepth),ve=this.localClippingEnabled,Kt=B.init(this.clippingPlanes,ve),y=N.get(P,x.length),y.init(),x.push(y),this.info.render.frame++,mt.enabled===!0&&mt.isPresenting===!0){const Lt=w.xr.getDepthSensingMesh();Lt!==null&&Ol(Lt,q,-1/0,w.sortObjects)}Ol(P,q,0,w.sortObjects),y.finish(),C!==null&&C.updateLights(E.state.lightsArray),w.sortObjects===!0&&y.sort(Pt,Yt),Oe=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,Oe&&I.addToRenderList(y,P),this.info.autoReset===!0&&this.info.reset(),Kt===!0&&B.beginShadows();const it=E.state.shadowsArray;if(K.render(it,P,q),Kt===!0&&B.endShadows(),(nt&&R.hasRenderPass())===!1){const Lt=y.opaque,Mt=y.transmissive;if(E.setupLights(),q.isArrayCamera){const At=q.cameras;if(Mt.length>0)for(let Ft=0,qt=At.length;Ft<qt;Ft++){const ee=At[Ft];df(Lt,Mt,P,ee)}Oe&&I.render(P);for(let Ft=0,qt=At.length;Ft<qt;Ft++){const ee=At[Ft];ff(y,P,ee,ee.viewport)}}else Mt.length>0&&df(Lt,Mt,P,q),Oe&&I.render(P),ff(y,P,q)}W!==null&&z===0&&(kt.updateMultisampleRenderTarget(W),kt.updateRenderTargetMipmap(W)),nt&&R.end(w),P.isScene===!0&&P.onAfterRender(w,P,q),ft.resetDefaultState(),V=-1,k=null,b.pop(),b.length>0?(E=b[b.length-1],kt.setTextureUnits(E.state.textureUnits),Kt===!0&&B.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?y=x[x.length-1]:y=null,C!==null&&C.renderEnd()};function Ol(P,q,st,nt){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)st=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)E.pushLight(P),P.castShadow&&E.pushShadow(P);else if(P.isSprite){const Lt=q.isArrayCamera?Rt:wt;if(!P.frustumCulled||P.intersectsFrustum(Lt)){nt&&he.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ae);const Mt=pt.update(P),At=P.material;At.visible&&y.push(P,Mt,At,st,he.z,null,q)}}else if(P.isMesh||P.isLine||P.isPoints){const Lt=q.isArrayCamera?Rt:wt;if(!P.frustumCulled||P.intersectsFrustum(Lt)){const Mt=pt.update(P),At=P.material;if(nt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),he.copy(P.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),he.copy(Mt.boundingSphere.center)),he.applyMatrix4(P.matrixWorld).applyMatrix4(ae)),Array.isArray(At)){const Ft=Mt.groups;for(let qt=0,ee=Ft.length;qt<ee;qt++){const It=Ft[qt],ne=At[It.materialIndex];ne&&ne.visible&&y.push(P,Mt,ne,st,he.z,It,q)}}else At.visible&&y.push(P,Mt,At,st,he.z,null,q)}}}const St=P.children;for(let Lt=0,Mt=St.length;Lt<Mt;Lt++)Ol(St[Lt],q,st,nt)}function ff(P,q,st,nt){const{opaque:it,transmissive:St,transparent:Lt}=P;E.setupLightsView(st),Kt===!0&&B.setGlobalState(w.clippingPlanes,st),nt&&gt.viewport(H.copy(nt)),it.length>0&&fa(it,q,st),St.length>0&&fa(St,q,st),Lt.length>0&&fa(Lt,q,st),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function df(P,q,st,nt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[nt.id]===void 0){const It=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[nt.id]=new Tn(1,1,{generateMipmaps:!0,type:It?fn:tn,minFilter:wn,samples:Math.max(4,$t.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}const St=E.state.transmissionRenderTarget[nt.id],Lt=nt.viewport||H;St.setSize(Lt.z*w.transmissionResolutionScale,Lt.w*w.transmissionResolutionScale);const Mt=w.getRenderTarget(),At=w.getActiveCubeFace(),Ft=w.getActiveMipmapLevel();w.setRenderTarget(St),w.getClearColor(Y),ct=w.getClearAlpha(),ct<1&&w.setClearColor(16777215,.5),w.clear(),Oe&&I.render(st);const qt=w.toneMapping;w.toneMapping=Un;const ee=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),E.setupLightsView(nt),Kt===!0&&B.setGlobalState(w.clippingPlanes,nt),fa(P,st,nt),kt.updateMultisampleRenderTarget(St),kt.updateRenderTargetMipmap(St),te.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let ne=0,Le=q.length;ne<Le;ne++){const xe=q[ne],{object:me,geometry:$e,material:Nt,group:je}=xe;if(Nt.side===we&&me.layers.test(nt.layers)){const fe=Nt.side;Nt.side=Ke,Nt.needsUpdate=!0,pf(me,st,nt,$e,Nt,je),Nt.side=fe,Nt.needsUpdate=!0,It=!0}}It===!0&&(kt.updateMultisampleRenderTarget(St),kt.updateRenderTargetMipmap(St))}w.setRenderTarget(Mt,At,Ft),w.setClearColor(Y,ct),ee!==void 0&&(nt.viewport=ee),w.toneMapping=qt}function fa(P,q,st){const nt=q.isScene===!0?q.overrideMaterial:null;for(let it=0,St=P.length;it<St;it++){const Lt=P[it],{object:Mt,geometry:At,group:Ft}=Lt;let qt=Lt.material;qt.allowOverride===!0&&nt!==null&&(qt=nt),Mt.layers.test(st.layers)&&pf(Mt,q,st,At,qt,Ft)}}function pf(P,q,st,nt,it,St){C!==null&&it.isNodeMaterial&&C.setObject(P,it),P.onBeforeRender(w,q,st,nt,it,St),P.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),it.onBeforeRender(w,q,st,nt,P,St),it.transparent===!0&&it.side===we&&it.forceSinglePass===!1?(it.side=Ke,it.needsUpdate=!0,w.renderBufferDirect(st,q,nt,it,P,St),it.side=ti,it.needsUpdate=!0,w.renderBufferDirect(st,q,nt,it,P,St),it.side=we):w.renderBufferDirect(st,q,nt,it,P,St),P.onAfterRender(w,q,st,nt,it,St)}function mf(P){let q=0;for(const st of P)st.texture!==null&&q++;return q}function Ks(P,q,st){q.isScene!==!0&&(q=Me);const nt=Ot.get(P),it=E.state.lights,St=E.state.shadowsArray,Lt=it.state.version,Mt=ot.getParameters(P,it.state,St,q,st,E.state.lightProbeGridArray),At=ot.getProgramCacheKey(Mt);let Ft=nt.programs;nt.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?q.environment:null,nt.fog=q.fog;const qt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;nt.envMap=U.get(P.envMap||nt.environment,qt),nt.envMapRotation=nt.environment!==null&&P.envMap===null?q.environmentRotation:P.envMapRotation,Ft===void 0&&(P.addEventListener("dispose",pe),Ft=new Map,nt.programs=Ft,nt.programVariants=new Map);let ee=Ft.get(At);if(ee!==void 0){if(nt.currentProgram===ee&&nt.lightsStateVersion===Lt)return xf(P,Mt),ee}else Mt.uniforms=ot.getUniforms(P),C!==null&&P.isNodeMaterial&&C.build(P,st,Mt),P.onBeforeCompile(Mt,w),ee=ot.acquireProgram(Mt,At),Ft.set(At,ee),nt.uniforms=Mt.uniforms;const It=nt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(It.clippingPlanes=B.uniform),xf(P,Mt),nt.needsLights=Sv(P),nt.lightsStateVersion=Lt,nt.needsLights&&(It.ambientLightColor.value=it.state.ambient,It.lightProbe.value=it.state.probe,It.sunLights.value=it.state.sun,It.sunLightShadows.value=it.state.sunShadow,It.directionalLights.value=it.state.directional,It.directionalLightShadows.value=it.state.directionalShadow,It.spotLights.value=it.state.spot,It.spotLightShadows.value=it.state.spotShadow,It.rectAreaLights.value=it.state.rectArea,It.ltc_1.value=it.state.rectAreaLTC1,It.ltc_2.value=it.state.rectAreaLTC2,It.pointLights.value=it.state.point,It.pointLightShadows.value=it.state.pointShadow,It.hemisphereLights.value=it.state.hemi,It.sunShadowMatrix.value=it.state.sunShadowMatrix,It.sunShadowCascade.value=it.state.sunShadowCascade,It.directionalShadowMatrix.value=it.state.directionalShadowMatrix,It.spotLightMatrix.value=it.state.spotLightMatrix,It.spotLightMap.value=it.state.spotLightMap,It.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.numLightProbeGrids=mf(E.state.lightProbeGridArray),nt.currentProgram=ee,nt.uniformsList=null,ee}function _v(P,q,st,nt,it){const St=Ot.get(P),Lt=St.currentProgram.id+","+nt+","+it;let Mt=St.programVariants.get(Lt);return Mt===void 0?(Mt=Ks(P,q,st),St.programVariants.set(Lt,Mt)):(St.currentProgram=Mt,St.uniformsList=null,St.outputColorSpace=nt,St.toneMapping=it),Mt}function gf(P){if(P.uniformsList===null){const q=P.currentProgram.getUniforms();P.uniformsList=zr.seqWithValue(q.seq,P.uniforms)}return P.uniformsList}function xf(P,q){const st=Ot.get(P);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function vv(P,q,st,nt,it){q.isScene!==!0&&(q=Me),kt.resetTextureUnits();const St=q.fog,Lt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?q.environment:null,Mt=W===null?w.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ie.workingColorSpace,At=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Ft=U.get(nt.envMap||Lt,At),qt=nt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ee=!!st.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),It=!!st.morphAttributes.position,ne=!!st.morphAttributes.normal,Le=!!st.morphAttributes.color;let xe=Un;nt.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(xe=w.toneMapping);const me=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,$e=me!==void 0?me.length:0,Nt=Ot.get(nt),je=E.state.lights;if(Kt===!0&&(ve===!0||P!==k)){const Ee=P===k&&nt.id===V;B.setState(nt,P,Ee)}let fe=!1,Ai=!1;nt.version===Nt.__version?Nt.needsLights&&Nt.lightsStateVersion!==je.state.version||it.isBatchedMesh&&Nt.batching===!1||!it.isBatchedMesh&&Nt.batching===!0||it.isBatchedMesh&&Nt.batchingColor===!0&&it._colorsTexture===null||it.isBatchedMesh&&Nt.batchingColor===!1&&it._colorsTexture!==null||it.isInstancedMesh&&Nt.instancing===!1||!it.isInstancedMesh&&Nt.instancing===!0||it.isSkinnedMesh&&Nt.skinning===!1||!it.isSkinnedMesh&&Nt.skinning===!0||it.isInstancedMesh&&Nt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Nt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Nt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Nt.instancingMorph===!1&&it.morphTexture!==null||Nt.envMap!==Ft||nt.fog===!0&&Nt.fog!==St||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==B.numPlanes||Nt.numIntersection!==B.numIntersection)||Nt.vertexAlphas!==qt||Nt.vertexTangents!==ee||Nt.morphTargets!==It||Nt.morphNormals!==ne||Nt.morphColors!==Le||Nt.morphTargetsCount!==$e||Nt.numLightProbeGrids!==mf(E.state.lightProbeGridArray)?fe=!0:(Nt.outputColorSpace!==Mt||Nt.toneMapping!==xe)&&(Ai=!0):(fe=!0,Nt.__version=nt.version);let Ze=Nt.currentProgram;(fe===!0||Ai===!0)&&(Ze=Ai===!0?_v(nt,q,it,Mt,xe):Ks(nt,q,it),C&&nt.isNodeMaterial&&C.onUpdateProgram(nt,Ze,Nt));let da=!1,pi=!1,Ti=!1;const oe=Ze.getUniforms(),Ve=Nt.uniforms;if(gt.useProgram(Ze.program)&&(da=!0,pi=!0,Ti=!0),nt.id!==V&&(V=nt.id,pi=!0),da||k!==P){gt.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),oe.setValue(Z,"projectionMatrix",P.projectionMatrix),oe.setValue(Z,"viewMatrix",P.matrixWorldInverse);const ke=oe.map.cameraPosition;ke!==void 0&&ke.setValue(Z,Ae.setFromMatrixPosition(P.matrixWorld)),$t.logarithmicDepthBuffer&&oe.setValue(Z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&oe.setValue(Z,"isOrthographic",P.isOrthographicCamera===!0),k!==P&&(k=P,pi=!0,Ti=!0)}if(Nt.needsLights&&(je.state.sunShadowMap.length>0&&oe.setValue(Z,"sunShadowMap",je.state.sunShadowMap,kt),je.state.directionalShadowMap.length>0&&oe.setValue(Z,"directionalShadowMap",je.state.directionalShadowMap,kt),je.state.spotShadowMap.length>0&&oe.setValue(Z,"spotShadowMap",je.state.spotShadowMap,kt),je.state.pointShadowMap.length>0&&oe.setValue(Z,"pointShadowMap",je.state.pointShadowMap,kt)),it.isSkinnedMesh){oe.setOptional(Z,it,"bindMatrix"),oe.setOptional(Z,it,"bindMatrixInverse");const Ee=it.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),oe.setValue(Z,"boneTexture",Ee.boneTexture,kt))}it.isBatchedMesh&&(oe.setOptional(Z,it,"batchingTexture"),oe.setValue(Z,"batchingTexture",it._matricesTexture,kt),oe.setOptional(Z,it,"batchingIdTexture"),oe.setValue(Z,"batchingIdTexture",it._indirectTexture,kt),oe.setOptional(Z,it,"batchingColorTexture"),it._colorsTexture!==null&&oe.setValue(Z,"batchingColorTexture",it._colorsTexture,kt));const bn=st.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&j.update(it,st,Ze),(pi||Nt.receiveShadow!==it.receiveShadow)&&(Nt.receiveShadow=it.receiveShadow,oe.setValue(Z,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&q.environment!==null&&(Ve.envMapIntensity.value=q.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=zx()),pi){if(oe.setValue(Z,"toneMappingExposure",w.toneMappingExposure),Nt.needsLights&&Mv(Ve,Ti),St&&nt.fog===!0&&_t.refreshFogUniforms(Ve,St),_t.refreshMaterialUniforms(Ve,nt,dt,xt,E.state.transmissionRenderTarget[P.id]),Nt.needsLights&&Nt.numLightProbeGrids>0){const Ee=_;let ke=0;for(const Qn of E.state.lightProbeGridArray)Qn.texture!==null&&(Ee.textures[ke]=Qn.texture,Ee.min[ke]=Qn.boundingBox.min,Ee.max[ke]=Qn.boundingBox.max,Ee.resolution[ke]=Qn.resolution,ke++);for(const Qn in Ee)Ee[Qn].length=ke;Ve.probesSH.value=Ee.textures,Ve.probesMin.value=Ee.min,Ve.probesMax.value=Ee.max,Ve.probesResolution.value=Ee.resolution}zr.upload(Z,gf(Nt),Ve,kt)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(zr.upload(Z,gf(Nt),Ve,kt),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&oe.setValue(Z,"center",it.center),oe.setValue(Z,"modelViewMatrix",it.modelViewMatrix),oe.setValue(Z,"normalMatrix",it.normalMatrix),oe.setValue(Z,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){const Ee=nt.uniformsGroups;for(let ke=0,Qn=Ee.length;ke<Qn;ke++){const vf=Ee[ke];Tt.update(vf,Ze),Tt.bind(vf,Ze)}}return Ze}function Mv(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.sunLights.needsUpdate=q,P.sunLightShadows.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function Sv(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(P,q,st){const nt=Ot.get(P);nt.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),Ot.get(P.texture).__webglTexture=q,Ot.get(P.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:st,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,q){const st=Ot.get(P);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(P,q=0,st=0){W=P,G=q,z=st;let nt=null,it=!1,St=!1;if(P){const Mt=Ot.get(P);if(Mt.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(Z.FRAMEBUFFER,Mt.__webglFramebuffer),H.copy(P.viewport),X.copy(P.scissor),ht=P.scissorTest,gt.viewport(H),gt.scissor(X),gt.setScissorTest(ht),V=-1;return}else if(Mt.__webglFramebuffer===void 0)kt.setupRenderTarget(P);else if(Mt.__hasExternalTextures)kt.rebindTextures(P,Ot.get(P.texture).__webglTexture,Ot.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const qt=P.depthTexture;if(Mt.__boundDepthTexture!==qt){if(qt!==null&&Ot.has(qt)&&(P.width!==qt.image.width||P.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(P)}}const At=P.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(St=!0);const Ft=Ot.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ft[q])?nt=Ft[q][st]:nt=Ft[q],it=!0):P.samples>0&&kt.useMultisampledRTT(P)===!1?nt=Ot.get(P).__webglMultisampledFramebuffer:Array.isArray(Ft)?nt=Ft[st]:nt=Ft,H.copy(P.viewport),X.copy(P.scissor),ht=P.scissorTest}else H.copy(bt).multiplyScalar(dt).floor(),X.copy(ut).multiplyScalar(dt).floor(),ht=vt;if(st!==0&&(nt=D),gt.bindFramebuffer(Z.FRAMEBUFFER,nt)&&gt.drawBuffers(P,nt),gt.viewport(H),gt.scissor(X),gt.setScissorTest(ht),it){const Mt=Ot.get(P.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Mt.__webglTexture,st)}else if(St){const Mt=q;for(let At=0;At<P.textures.length;At++){const Ft=Ot.get(P.textures[At]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+At,Ft.__webglTexture,st,Mt)}}else if(P!==null&&st!==0){const Mt=Ot.get(P.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Mt.__webglTexture,st)}V=-1};function _f(P){const q=Ot.get(P);return(q.__readFormat!==P.format||q.__readType!==P.type)&&(q.__readFormat=P.format,q.__readType=P.type,q.__formatReadable=$t.textureFormatReadable(P.format),q.__typeReadable=$t.textureTypeReadable(P.type)),q}this.readRenderTargetPixels=function(P,q,st,nt,it,St,Lt,Mt=0){if(!(P&&P.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Ot.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Lt!==void 0&&(At=At[Lt],Array.isArray(At)&&(At=At[0])),At){gt.bindFramebuffer(Z.FRAMEBUFFER,At);try{const Ft=P.textures[Mt],qt=Ft.format,ee=Ft.type;P.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Mt);const It=_f(Ft);if(It.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-nt&&st>=0&&st<=P.height-it&&Z.readPixels(q,st,nt,it,at.convert(qt),at.convert(ee),St)}finally{const Ft=W!==null?Ot.get(W).__webglFramebuffer:null;gt.bindFramebuffer(Z.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(P,q,st,nt,it,St,Lt,Mt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Ot.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Lt!==void 0&&(At=At[Lt],Array.isArray(At)&&(At=At[0])),At)if(q>=0&&q<=P.width-nt&&st>=0&&st<=P.height-it){gt.bindFramebuffer(Z.FRAMEBUFFER,At);const Ft=P.textures[Mt],qt=Ft.format,ee=Ft.type;P.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Mt);const It=_f(Ft);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ne),Z.bufferData(Z.PIXEL_PACK_BUFFER,St.byteLength,Z.STREAM_READ),Z.readPixels(q,st,nt,it,at.convert(qt),at.convert(ee),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);const Le=W!==null?Ot.get(W).__webglFramebuffer:null;gt.bindFramebuffer(Z.FRAMEBUFFER,Le);const xe=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await nd(Z,xe,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ne),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,St),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(ne),Z.deleteSync(xe),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,q=null,st=0){const nt=Math.pow(2,-st),it=Math.floor(P.image.width*nt),St=Math.floor(P.image.height*nt),Lt=q!==null?q.x:0,Mt=q!==null?q.y:0;kt.setTexture2D(P,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,st,0,0,Lt,Mt,it,St),gt.unbindTexture()},this.copyTextureToTexture=function(P,q,st=null,nt=null,it=0,St=0){let Lt,Mt,At,Ft,qt,ee,It,ne,Le;const xe=P.isCompressedTexture?P.mipmaps[St]:P.image;if(st!==null)Lt=st.max.x-st.min.x,Mt=st.max.y-st.min.y,At=st.isBox3?st.max.z-st.min.z:1,Ft=st.min.x,qt=st.min.y,ee=st.isBox3?st.min.z:0;else{const oe=Math.pow(2,-it);Lt=Math.floor(xe.width*oe),Mt=Math.floor(xe.height*oe),P.isDataArrayTexture?At=xe.depth:P.isData3DTexture?At=Math.floor(xe.depth*oe):At=1,Ft=0,qt=0,ee=0}nt!==null?(It=nt.x,ne=nt.y,Le=nt.z):(It=0,ne=0,Le=0);const me=at.convert(q.format),$e=at.convert(q.type);let Nt;q.isData3DTexture?(kt.setTexture3D(q,0),Nt=Z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(kt.setTexture2DArray(q,0),Nt=Z.TEXTURE_2D_ARRAY):(kt.setTexture2D(q,0),Nt=Z.TEXTURE_2D),gt.activeTexture(Z.TEXTURE0),gt.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,q.flipY),gt.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),gt.pixelStorei(Z.UNPACK_ALIGNMENT,q.unpackAlignment);const je=gt.getParameter(Z.UNPACK_ROW_LENGTH),fe=gt.getParameter(Z.UNPACK_IMAGE_HEIGHT),Ai=gt.getParameter(Z.UNPACK_SKIP_PIXELS),Ze=gt.getParameter(Z.UNPACK_SKIP_ROWS),da=gt.getParameter(Z.UNPACK_SKIP_IMAGES);gt.pixelStorei(Z.UNPACK_ROW_LENGTH,xe.width),gt.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,xe.height),gt.pixelStorei(Z.UNPACK_SKIP_PIXELS,Ft),gt.pixelStorei(Z.UNPACK_SKIP_ROWS,qt),gt.pixelStorei(Z.UNPACK_SKIP_IMAGES,ee);const pi=P.isDataArrayTexture||P.isData3DTexture,Ti=q.isDataArrayTexture||q.isData3DTexture;if(P.isDepthTexture){const oe=Ot.get(P),Ve=Ot.get(q),bn=Ot.get(oe.__renderTarget),Ee=Ot.get(Ve.__renderTarget);gt.bindFramebuffer(Z.READ_FRAMEBUFFER,bn.__webglFramebuffer),gt.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ke=0;ke<At;ke++)pi&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ot.get(P).__webglTexture,it,ee+ke),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ot.get(q).__webglTexture,St,Le+ke)),Z.blitFramebuffer(Ft,qt,Ft+Lt,qt+Mt,It,ne,It+Lt,ne+Mt,Z.DEPTH_BUFFER_BIT,Z.NEAREST);gt.bindFramebuffer(Z.READ_FRAMEBUFFER,null),gt.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(it!==0||P.isRenderTargetTexture||Ot.has(P)){const oe=Ot.get(P),Ve=Ot.get(q);gt.bindFramebuffer(Z.READ_FRAMEBUFFER,A),gt.bindFramebuffer(Z.DRAW_FRAMEBUFFER,F);for(let bn=0;bn<At;bn++)pi?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,oe.__webglTexture,it,ee+bn):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,oe.__webglTexture,it),Ti?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ve.__webglTexture,St,Le+bn):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ve.__webglTexture,St),it!==0?Z.blitFramebuffer(Ft,qt,Ft+Lt,qt+Mt,It,ne,It+Lt,ne+Mt,Z.COLOR_BUFFER_BIT,Z.NEAREST):Ti?Z.copyTexSubImage3D(Nt,St,It,ne,Le+bn,Ft,qt,Lt,Mt):Z.copyTexSubImage2D(Nt,St,It,ne,Ft,qt,Lt,Mt);gt.bindFramebuffer(Z.READ_FRAMEBUFFER,null),gt.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Ti?P.isDataTexture||P.isData3DTexture?Z.texSubImage3D(Nt,St,It,ne,Le,Lt,Mt,At,me,$e,xe.data):q.isCompressedArrayTexture?Z.compressedTexSubImage3D(Nt,St,It,ne,Le,Lt,Mt,At,me,xe.data):Z.texSubImage3D(Nt,St,It,ne,Le,Lt,Mt,At,me,$e,xe):P.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,St,It,ne,Lt,Mt,me,$e,xe.data):P.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,St,It,ne,xe.width,xe.height,me,xe.data):Z.texSubImage2D(Z.TEXTURE_2D,St,It,ne,Lt,Mt,me,$e,xe);gt.pixelStorei(Z.UNPACK_ROW_LENGTH,je),gt.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,fe),gt.pixelStorei(Z.UNPACK_SKIP_PIXELS,Ai),gt.pixelStorei(Z.UNPACK_SKIP_ROWS,Ze),gt.pixelStorei(Z.UNPACK_SKIP_IMAGES,da),St===0&&q.generateMipmaps===!0&&q.mipmapsAutoUpdate===!0&&Z.generateMipmap(Nt),gt.unbindTexture()},this.initRenderTarget=function(P){Ot.get(P).__webglFramebuffer===void 0&&kt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?kt.setTextureCube(P,0):P.isData3DTexture?kt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?kt.setTexture2DArray(P,0):kt.setTexture2D(P,0),gt.unbindTexture()},this.resetState=function(){G=0,z=0,W=null,gt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const kr=new Ct;function $(i){return kr.set(i),[kr.r,kr.g,kr.b]}function Ut(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function ts(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function Dn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class se{constructor(){et(this,"pos",[]);et(this,"nor",[]);et(this,"col",[]);et(this,"glo",[]);et(this,"ox",0);et(this,"oy",0);et(this,"oz",0);et(this,"c",1);et(this,"s",0)}get vertexCount(){return this.pos.length/3}frame(t=0,e=0,n=0,s=0){return this.ox=t,this.oy=e,this.oz=n,this.c=Math.cos(s),this.s=Math.sin(s),this}wx(t,e){return this.ox+t*this.c+e*this.s}wz(t,e){return this.oz-t*this.s+e*this.c}tri(t,e,n,s,r,a,o,l,c,h,f=0){const u=this.wx(t,n),d=this.wz(t,n),m=this.oy+e,M=this.wx(s,a),p=this.wz(s,a),g=this.oy+r,v=this.wx(o,c),S=this.wz(o,c),_=this.oy+l,y=M-u,E=g-m,x=p-d,b=v-u,R=_-m,w=S-d;let L=E*w-x*R,C=x*b-y*w,D=y*R-E*b;const A=Math.hypot(L,C,D)||1;L/=A,C/=A,D/=A,this.pos.push(u,m,d,M,g,p,v,_,S),this.nor.push(L,C,D,L,C,D,L,C,D),this.col.push(h[0],h[1],h[2],h[0],h[1],h[2],h[0],h[1],h[2]),this.glo.push(f,f,f)}quad(t,e,n,s,r,a,o,l,c,h,f,u,d,m=0){this.tri(t,e,n,s,r,a,o,l,c,d,m),this.tri(t,e,n,o,l,c,h,f,u,d,m)}box(t,e,n,s,r,a,o,l=void 0,c=null,h=0){this.quad(t,e,a,s,e,a,s,r,a,t,r,a,o,h),this.quad(s,e,n,t,e,n,t,r,n,s,r,n,o,h),this.quad(s,e,a,s,e,n,s,r,n,s,r,a,o,h),this.quad(t,e,n,t,e,a,t,r,a,t,r,n,o,h),l!==null&&this.quad(t,r,a,s,r,a,s,r,n,t,r,n,l??o,h),c&&this.quad(t,e,n,s,e,n,s,e,a,t,e,a,c,h)}cyl(t,e,n,s,r,a,o,l,c=null,h=0){const f=e+a;for(let u=0;u<o;u++){const d=u/o*Math.PI*2,m=(u+1)/o*Math.PI*2,M=Math.cos(d),p=Math.sin(d),g=Math.cos(m),v=Math.sin(m);r>1e-4?(this.quad(t+M*s,e,n+p*s,t+M*r,f,n+p*r,t+g*r,f,n+v*r,t+g*s,e,n+v*s,l,h),c&&this.tri(t,f,n,t+g*r,f,n+v*r,t+M*r,f,n+p*r,c,h)):this.tri(t+M*s,e,n+p*s,t,f,n,t+g*s,e,n+v*s,l,h)}}blob(t,e,n,s,r,a,o,l,c,h,f=0){const u=h??c;for(let d=0;d<l;d++){const m=d/l*Math.PI,M=(d+1)/l*Math.PI,p=Math.cos(m),g=Math.cos(M),v=Math.sin(m),S=Math.sin(M),_=ts(c,u,1-(d+.5)/l);for(let y=0;y<o;y++){const E=y/o*Math.PI*2,x=(y+1)/o*Math.PI*2,b=Math.cos(E),R=Math.sin(E),w=Math.cos(x),L=Math.sin(x),C=t+b*v*s,D=e+p*r,A=n+R*v*a,F=t+w*v*s,G=n+L*v*a,z=t+b*S*s,W=e+g*r,V=n+R*S*a,k=t+w*S*s,H=n+L*S*a;d>0&&this.tri(C,D,A,F,D,G,k,W,H,_,f),d<l-1&&this.tri(C,D,A,k,W,H,z,W,V,_,f)}}}walls(t,e,n,s,r=0){const a=t.length/2,o=nl(t)>0;for(let l=0;l<a;l++){const c=(l+1)%a,h=t[l*2],f=t[l*2+1],u=t[c*2],d=t[c*2+1];o?this.quad(u,e,d,h,e,f,h,n,f,u,n,d,s,r):this.quad(h,e,f,u,e,d,u,n,d,h,n,f,s,r)}}cap(t,e,n,s=0){const r=t.length/2,a=[];for(let l=0;l<r;l++)a.push(new Bt(t[l*2],t[l*2+1]));const o=Wo.triangulateShape(a,[]);for(const l of o){const c=a[l[0]],h=a[l[1]],f=a[l[2]];(h.x-c.x)*(f.y-c.y)-(h.y-c.y)*(f.x-c.x)>0?this.tri(c.x,e,c.y,f.x,e,f.y,h.x,e,h.y,n,s):this.tri(c.x,e,c.y,h.x,e,h.y,f.x,e,f.y,n,s)}}build(){const t=new Re;return t.setAttribute("position",new Pe(new Float32Array(this.pos),3)),t.setAttribute("normal",new Pe(new Float32Array(this.nor),3)),t.setAttribute("color",new Pe(new Float32Array(this.col),3)),t.setAttribute("glow",new Pe(new Float32Array(this.glo),1)),t.computeBoundingSphere(),t.computeBoundingBox(),this.pos=[],this.nor=[],this.col=[],this.glo=[],t}}function nl(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}const es={value:0};function qn(i={}){const t=new Ye({vertexColors:!0,roughness:i.roughness??.86,metalness:0,side:i.side??we}),e=new Ct(i.glowColor??16761722);return t.onBeforeCompile=n=>{n.uniforms.uNight=es,n.uniforms.uGlowColor={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float glow;
varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;
uniform float uNight;
uniform vec3 uGlowColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlowColor * vGlow * uNight * 2.4;`)},t.customProgramCacheKey=()=>"inverloch-model",t}function il(i){return i.onBeforeCompile=t=>{t.uniforms.uNight=es,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.82 * uNight;`)},i.customProgramCacheKey=()=>"inverloch-unlit",i}const kh={day:{sunDir:[-.42,.78,-.46],sunColor:16774109,sunIntensity:3.1,hemiSky:13953279,hemiGround:9280120,hemiIntensity:1.25,zenith:4163279,horizon:13625078,below:1582638,sunGlow:1,shallow:7129789,deep:1201018,waterSky:12903158,foam:1,night:0,exposure:1},golden:{sunDir:[-.84,.22,.36],sunColor:16756848,sunIntensity:3,hemiSky:15781309,hemiGround:6973032,hemiIntensity:1.15,zenith:4153244,horizon:16760970,below:1645863,sunGlow:1.6,shallow:7320486,deep:1390942,waterSky:16763040,foam:.9,night:.25,exposure:1},night:{sunDir:[.38,.72,-.42],sunColor:10467071,sunIntensity:.5,hemiSky:3821436,hemiGround:1053980,hemiIntensity:.55,zenith:396056,horizon:1582922,below:263948,sunGlow:.5,shallow:1920092,deep:331552,waterSky:2242140,foam:.45,night:1,exposure:1.05}},kx=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
  gl_Position = p.xyww;
}`,Gx=`
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
}`;class Hx{constructor(t,e,n,s={}){et(this,"sun",new yp(16777215,3));et(this,"hemi",new vp(16777215,8947848,1));et(this,"sky");et(this,"sunDir",new Q);et(this,"skyUniforms");et(this,"from");et(this,"to");et(this,"t",1);et(this,"mode","day");this.renderer=t,this.water=e,this.tint=s,this.from=this.to=this.preset("day"),this.skyUniforms={uZenith:{value:new Ct},uHorizon:{value:new Ct},uBelow:{value:new Ct},uSunDir:{value:new Q},uSunColor:{value:new Ct},uSunGlow:{value:1},uNight:{value:0}},this.sky=new Qt(new qo(1,32,16),new Xn({uniforms:this.skyUniforms,vertexShader:kx,fragmentShader:Gx,side:Ke,depthWrite:!1,depthTest:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,n>0&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(n,n)),this.apply(1)}set(t,e=!1){t===this.mode&&this.t>=1||(this.from=this.snapshot(),this.to=this.preset(t),this.mode=t,this.t=e?1:0,this.apply(this.t))}update(t){return this.t>=1?!1:(this.t=Math.min(1,this.t+t/1.4),this.apply(this.t),!0)}aimShadow(t,e){if(!this.sun.castShadow)return;const n=_e.clamp(e*.7,140,2400),s=this.sun.shadow,r=s.camera,a=n*2/s.mapSize.x,o=Math.round(t.x/a)*a,l=Math.round(t.z/a)*a,c=n*2.4+300;this.sun.target.position.set(o,t.y,l),this.sun.position.set(o,t.y,l).addScaledVector(this.sunDir,c),this.sun.target.updateMatrixWorld(),r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=1,r.far=c*2+400,r.updateProjectionMatrix(),s.bias=-.3/(r.far-r.near),s.normalBias=_e.clamp(a*1.6,.06,1.2))}preset(t){return{...kh[t],...this.tint[t]}}setSolar(t){const e=(t%1440+1440)%1440,n=6*60,s=20.5*60;let r,a;if(e>=n&&e<=s)a=(e-n)/(s-n),r=Math.sin(Math.PI*a)*70;else{const m=((e<n?e+1440:e)-s)/(1440-(s-n));a=m<.5?1:0,r=-Math.sin(Math.PI*m)*40}const o=_e.degToRad(110*(1-2*a)),l=_e.degToRad(Math.max(r,5)),c=[Math.sin(o)*Math.cos(l),Math.sin(l),-Math.cos(o)*Math.cos(l)];let h;r>=25?h=this.preset("day"):r>=6?h=sl(this.preset("golden"),this.preset("day"),(r-6)/19):r>=-6?h=sl(this.preset("night"),this.preset("golden"),(r+6)/12):h=this.preset("night");const f=_e.clamp((2-r)/6,0,1),u=kh.night.sunDir,d=[c[0]+(u[0]-c[0])*f,c[1]+(u[1]-c[1])*f,c[2]+(u[2]-c[2])*f];this.from=this.to={...h,sunDir:d},this.mode=r>=25?"day":r>=-6?"golden":"night",this.apply(1)}snapshot(){return sl(this.from,this.to,Vx(this.t))}apply(t){this.t=t;const e=this.snapshot();this.sunDir.set(...e.sunDir).normalize(),this.sun.color.set(e.sunColor),this.sun.intensity=e.sunIntensity,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const n=this.skyUniforms;n.uZenith.value.set(e.zenith),n.uHorizon.value.set(e.horizon),n.uBelow.value.set(e.below),n.uSunDir.value.copy(this.sunDir),n.uSunColor.value.set(e.sunColor),n.uSunGlow.value=e.sunGlow,n.uNight.value=e.night;const s=this.water.uniforms;s.uSunDir.value.copy(this.sunDir),s.uSunColor.value.set(e.sunColor).multiplyScalar(Math.min(1,e.sunIntensity/2.5)),s.uShallow.value.set(e.shallow),s.uDeep.value.set(e.deep),s.uSky.value.set(e.waterSky),s.uFoam.value=e.foam,this.water.skirt.material.color.set(e.deep).lerp(new Ct(e.shallow),.35),es.value=e.night,this.renderer.toneMappingExposure=e.exposure}}function Vx(i){return i*i*(3-2*i)}function sl(i,t,e){if(e<=0)return i;if(e>=1)return t;const n=(r,a)=>new Ct(r).lerp(new Ct(a),e).getHex(),s=(r,a)=>r+(a-r)*e;return{sunDir:[s(i.sunDir[0],t.sunDir[0]),s(i.sunDir[1],t.sunDir[1]),s(i.sunDir[2],t.sunDir[2])],sunColor:n(i.sunColor,t.sunColor),sunIntensity:s(i.sunIntensity,t.sunIntensity),hemiSky:n(i.hemiSky,t.hemiSky),hemiGround:n(i.hemiGround,t.hemiGround),hemiIntensity:s(i.hemiIntensity,t.hemiIntensity),zenith:n(i.zenith,t.zenith),horizon:n(i.horizon,t.horizon),below:n(i.below,t.below),sunGlow:s(i.sunGlow,t.sunGlow),shallow:n(i.shallow,t.shallow),deep:n(i.deep,t.deep),waterSky:n(i.waterSky,t.waterSky),foam:s(i.foam,t.foam),night:s(i.night,t.night),exposure:s(i.exposure,t.exposure)}}const Wx=1.5;class Xx{constructor(t,e,n,s,r,a,o,l=Wx){et(this,"nx");et(this,"nz");et(this,"y");et(this,"xMin");et(this,"zMin");et(this,"xMax");et(this,"zMax");et(this,"dx");et(this,"dz");et(this,"cellX");et(this,"cellZ");this.raw=t,this.exposure=e,this.w=n,this.h=s,this.sizeX=r,this.sizeZ=a,this.vex=l,this.cellX=r/n,this.cellZ=a/s,this.nx=Math.floor((n-1)/o)+1,this.nz=Math.floor((s-1)/o)+1,this.dx=this.cellX*o,this.dz=this.cellZ*o,this.xMin=-r/2+this.cellX/2,this.zMin=-a/2+this.cellZ/2,this.xMax=this.xMin+(this.nx-1)*this.dx,this.zMax=this.zMin+(this.nz-1)*this.dz,this.y=new Float32Array(this.nx*this.nz);for(let c=0;c<this.nz;c++)for(let h=0;h<this.nx;h++)this.y[c*this.nx+h]=t[c*o*n+h*o]*l}yAt(t,e){let n=(t-this.xMin)/this.dx,s=(e-this.zMin)/this.dz;n<0?n=0:n>this.nx-1.0001&&(n=this.nx-1.0001),s<0?s=0:s>this.nz-1.0001&&(s=this.nz-1.0001);const r=n|0,a=s|0,o=n-r,l=s-a,c=a*this.nx+r,h=this.y[c],f=this.y[c+1],u=this.y[c+this.nx],d=this.y[c+this.nx+1];return o+l<=1?h+(f-h)*o+(u-h)*l:d+(u-d)*(1-o)+(f-d)*(1-l)}bilinear(t,e,n){let s=(e+this.sizeX/2)/this.cellX-.5,r=(n+this.sizeZ/2)/this.cellZ-.5;s<0?s=0:s>this.w-1.0001&&(s=this.w-1.0001),r<0?r=0:r>this.h-1.0001&&(r=this.h-1.0001);const a=s|0,o=r|0,l=s-a,c=r-o,h=o*this.w+a;return(t[h]*(1-l)+t[h+1]*l)*(1-c)+(t[h+this.w]*(1-l)+t[h+this.w+1]*l)*c}metresAt(t,e){return this.bilinear(this.raw,t,e)}exposureAt(t,e){return this.bilinear(this.exposure,t,e)}inside(t,e,n=0){return t>this.xMin+n&&t<this.xMax-n&&e>this.zMin+n&&e<this.zMax-n}}const Gh={type:"change"},rl={type:"start"},Hh={type:"end"},Gr=new Oo,Vh=new Rn,qx=Math.cos(70*_e.DEG2RAD),Fe=new Q,en=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},al=1e-6;class Yx extends wp{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nn.ROTATE,MIDDLE:Nn.DOLLY,RIGHT:Nn.PAN},this.touches={ONE:jn.ROTATE,TWO:jn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new on,this._lastTargetPosition=new Q,this._quat=new on().setFromUnitVectors(t.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ir,this._sphericalDelta=new Ir,this._scale=1,this._panOffset=new Q,this._rotateStart=new Bt,this._rotateEnd=new Bt,this._rotateDelta=new Bt,this._panStart=new Bt,this._panEnd=new Bt,this._panDelta=new Bt,this._dollyStart=new Bt,this._dollyEnd=new Bt,this._dollyDelta=new Bt,this._dollyDirection=new Q,this._mouse=new Bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Zx.bind(this),this._onPointerDown=$x.bind(this),this._onPointerUp=Kx.bind(this),this._onContextMenu=i_.bind(this),this._onMouseWheel=jx.bind(this),this._onKeyDown=t_.bind(this),this._onTouchStart=e_.bind(this),this._onTouchMove=n_.bind(this),this._onMouseDown=Jx.bind(this),this._onMouseMove=Qx.bind(this),this._interceptControlDown=s_.bind(this),this._interceptControlUp=r_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ce.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gh),this.update(),this.state=ce.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=en:n>Math.PI&&(n-=en),s<-Math.PI?s+=en:s>Math.PI&&(s-=en),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Fe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new Q(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Gr.origin.copy(this.object.position),Gr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gr.direction))<qx?this.object.lookAt(this.target):(Vh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gr.intersectPlane(Vh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>al||8*(1-this._lastQuaternion.dot(this.object.quaternion))>al||this._lastTargetPosition.distanceToSquared(this.target)>al?(this.dispatchEvent(Gh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?en/60*this.autoRotateSpeed*t:en/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){this.screenSpacePanning===!0?Fe.setFromMatrixColumn(e,1):(Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe)),Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Fe.copy(s).sub(this.target);let r=Fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Bt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function $x(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Zx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Kx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hh),this.state=ce.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Jx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Nn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ce.DOLLY;break;case Nn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}break;case Nn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(rl)}function Qx(i){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function jx(i){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(i.preventDefault(),this.dispatchEvent(rl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Hh))}function t_(i){this.enabled!==!1&&this._handleKeyDown(i)}function e_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case jn.ROTATE:if(this.enableRotate===!1){this.state=ce.NONE;break}this._handleTouchStartRotate(i),this.state=ce.TOUCH_ROTATE;break;case jn.PAN:if(this.enablePan===!1){this.state=ce.NONE;break}this._handleTouchStartPan(i),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case jn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ce.TOUCH_DOLLY_PAN;break;case jn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(rl)}function n_(i){switch(this._trackPointer(i),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ce.NONE}}function i_(i){this.enabled!==!1&&i.preventDefault()}function s_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function r_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ol=new Rn,Hr=new Ep,ns=new Bt,ll=new Q;class a_ extends Yx{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Nn.PAN,MIDDLE:Nn.DOLLY,RIGHT:Nn.ROTATE},this.touches={ONE:jn.PAN,TWO:jn.DOLLY_ROTATE},this._panWorldStart=new Q}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;ol.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();ns.x=(t.clientX-n.left)/n.width*2-1,ns.y=-((t.clientY-n.top)/n.height)*2+1,Hr.setFromCamera(ns,this.object),Hr.ray.intersectPlane(ol,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const n=this.domElement.getBoundingClientRect();ns.x=(t.clientX-n.left)/n.width*2-1,ns.y=-((t.clientY-n.top)/n.height)*2+1,Hr.setFromCamera(ns,this.object),Hr.ray.intersectPlane(ol,ll)&&(ll.sub(this._panWorldStart),this._panOffset.copy(ll).negate(),this.update())}}class o_{constructor(t,e,n){et(this,"items",[]);et(this,"v",new Q);et(this,"visible",!0);et(this,"obstacles",[]);this.layer=t;for(const s of[...e].sort((r,a)=>r.priority-a.priority)){const r=document.createElement("button");r.type="button",r.tabIndex=-1,r.className=`inv-label inv-label--${s.kind}`,r.textContent=s.name,r.style.visibility="hidden",r.addEventListener("click",()=>n(s.id)),t.appendChild(r),this.items.push({place:s,el:r,w:0,h:0,shown:!1})}}setVisible(t){this.visible=t,this.layer.style.display=t?"":"none"}setObstacles(t){this.obstacles=t}update(t,e,n,s=1/0){if(!this.visible)return;const r=[...this.obstacles];for(const a of this.items){a.w||(a.w=a.el.offsetWidth,a.h=a.el.offsetHeight);const o=a.place;this.v.set(o.x,o.y,o.z);const l=this.v.distanceTo(t.position);this.v.project(t);let c=this.v.z<1&&this.v.z>-1&&l<(o.maxDist??1/0)&&l<s;const h=(this.v.x*.5+.5)*e,f=(-this.v.y*.5+.5)*n,u=h-a.w/2,d=f-a.h,m=h+a.w/2,M=f;if(c&&(m<0||u>e||M<0||d>n)&&(c=!1),c){for(const p of r)if(u<p[2]+6&&m>p[0]-6&&d<p[3]+4&&M>p[1]-4){c=!1;break}}c&&(r.push([u,d,m,M]),a.el.style.transform=`translate3d(${Math.round(u)}px, ${Math.round(d)}px, 0)`),c!==a.shown&&(a.el.style.visibility=c?"visible":"hidden",a.shown=c)}}dispose(){for(const t of this.items)t.el.remove();this.items=[]}}function Yn(i,t,e){return[(e-i.origin[0])*i.metresPerDegree[0],-(t-i.origin[1])*i.metresPerDegree[1]]}function l_(i,t,e){return i.map(n=>{const[s,r]=Yn(t,n.lat,n.lon),a=Math.max(e.yAt(s,r),0);return{...n,x:s,z:r,y:a+(n.lift??6)}})}const c_={high:{step:1,trees:1,shadow:4096,pixelRatio:2},medium:{step:2,trees:.6,shadow:2048,pixelRatio:1.5},low:{step:2,trees:.35,shadow:0,pixelRatio:1}};class cl extends Error{}const h_=()=>new Promise(i=>requestAnimationFrame(()=>i())),u_=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class f_{constructor(t,e,n,s,r={}){et(this,"renderer");et(this,"scene",new Dd);et(this,"camera",new Mn(38,1,5,9e4));et(this,"controls");et(this,"atmosphere");et(this,"hf");et(this,"disposed",!1);et(this,"abort",new AbortController);et(this,"labels");et(this,"places",[]);et(this,"raf",0);et(this,"last",0);et(this,"time",0);et(this,"dirty",!0);et(this,"animating",!0);et(this,"resizeObserver");et(this,"flight");et(this,"lastCompass",NaN);et(this,"width",1);et(this,"height",1);et(this,"pixelRatio",1);et(this,"slowFrames",0);et(this,"solarMinutes",NaN);et(this,"roadPaths",[]);et(this,"roadIndex");et(this,"external");et(this,"meta");et(this,"shadowAim",new Q);et(this,"viewFocus",new Q);et(this,"viewDistance",1/0);et(this,"lookDir",new Q);et(this,"onKey",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=this.currentView(),n=e.dist*.12,s=_e.degToRad(e.azimuth),r=-Math.sin(s),a=-Math.cos(s),o=Math.cos(s),l=-Math.sin(s);let c=null;switch(t.key){case"ArrowUp":c={...e,x:e.x+r*n,z:e.z+a*n};break;case"ArrowDown":c={...e,x:e.x-r*n,z:e.z-a*n};break;case"ArrowLeft":c={...e,x:e.x-o*n,z:e.z-l*n};break;case"ArrowRight":c={...e,x:e.x+o*n,z:e.z+l*n};break;case"+":case"=":c={...e,dist:e.dist*.8};break;case"-":case"_":c={...e,dist:e.dist*1.25};break;case"q":case"Q":c={...e,azimuth:e.azimuth-15};break;case"e":case"E":c={...e,azimuth:e.azimuth+15};break;case"r":case"R":c={...e,polar:e.polar-6};break;case"f":case"F":c={...e,polar:e.polar+6};break;case"Home":c=this.opts.home;break;default:return}t.preventDefault(),this.fly(c,.3)});et(this,"frame",t=>{var l;if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);const e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,document.hidden)return;if(this.flight){const c=this.flight;c.t=Math.min(1,c.t+e/c.duration);const h=u_(c.t),f=(u,d)=>u+(d-u)*h;this.applyView({x:f(c.from.x,c.to.x),z:f(c.from.z,c.to.z),dist:Math.exp(f(Math.log(c.from.dist),Math.log(c.to.dist))),polar:f(c.from.polar,c.to.polar),azimuth:f(c.from.azimuth,c.to.azimuth)}),c.t>=1&&(this.flight=void 0)}if(this.controls&&!this.external&&this.controls.update()&&(this.dirty=!0),this.atmosphere.update(e)&&(this.dirty=!0),this.animating&&(this.time+=e,this.tick(e,this.time),this.dirty=!0),!this.dirty)return;this.dirty=!1;const n=this.camera;let s,r=1/0;const a=!!this.controls&&!this.external;if(this.controls&&a){const c=this.hf.yAt(n.position.x,n.position.z)+12;n.position.y<c&&(n.position.y=c),s=n.position.distanceTo(this.controls.target),this.shadowAim.copy(this.controls.target)}else{const c=Math.max(1,n.position.y-Math.max(this.hf.yAt(n.position.x,n.position.z),this.waterLevel));n.getWorldDirection(this.lookDir);const h=Math.min(this.lookDir.y<-.05?c/-this.lookDir.y:1e9,60+c*3,3e3);this.shadowAim.copy(n.position).addScaledVector(this.lookDir,h),s=Math.max(h,c)*1.3,r=Math.max(350,c*10)}const o=a?_e.clamp(s*.02,2,80):_e.clamp(s*.012,.4,60);if(Math.abs(o-n.near)>n.near*.05&&(n.near=o,n.updateProjectionMatrix()),this.atmosphere.aimShadow(this.shadowAim,s),!a&&s<500?this.viewFocus.set(n.position.x,0,n.position.z):this.viewFocus.copy(this.shadowAim),this.viewDistance=s,this.beforeRender(),this.renderer.render(this.scene,n),(l=this.labels)==null||l.update(n,this.width,this.height,r),this.animating&&e<.25&&(this.slowFrames=e>.042?this.slowFrames+1:Math.max(0,this.slowFrames-2),this.slowFrames>50&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio*.75),this.renderer.setPixelRatio(this.pixelRatio),this.resize(),this.slowFrames=0)),a){const c=Math.round(this.currentView().azimuth);c!==this.lastCompass&&(this.lastCompass=c,this.cb.onCompass(c))}});this.container=t,this.labelLayer=e,this.cb=n,this.opts=s,this.host=r,this.external=!!r.external}async init(){try{this.renderer=new Bx({antialias:!0,powerPreference:"high-performance"})}catch{this.cb.onError("This browser could not start WebGL, which the 3D model needs.");return}const t=this.renderer,e=this.pickQuality(),n=c_[e];this.pixelRatio=Math.min(window.devicePixelRatio||1,n.pixelRatio),t.setPixelRatio(this.pixelRatio),t.outputColorSpace=Te,t.toneMapping=Ea,t.shadowMap.enabled=n.shadow>0,t.shadowMap.type=os;const s=t.domElement;this.host.external?(s.setAttribute("role","img"),s.setAttribute("aria-label",this.opts.name)):(s.tabIndex=0,s.setAttribute("role","application"),s.setAttribute("aria-label",`${this.opts.name}. Drag to pan, right-drag to rotate, scroll to zoom. Arrow keys pan, plus and minus zoom, Q and E rotate.`)),s.style.display="block",s.style.outlineOffset="-3px",this.container.appendChild(s),s.addEventListener("webglcontextlost",o=>{o.preventDefault(),this.disposed||this.cb.onError("The browser reclaimed the graphics memory this model was using.")});let r;try{r=await this.build(n,e,async(o,l)=>{this.cb.onProgress(o,l),await h_()})}catch(o){if(this.disposed)return;o instanceof cl||console.error(o),this.cb.onError(o instanceof cl?o.message:"The model could not be built in this browser.");return}if(this.disposed)return;this.hf=r.hf,this.atmosphere=r.atmosphere,this.scene.add(this.atmosphere.sky,this.atmosphere.sun,this.atmosphere.sun.target,this.atmosphere.hemi),this.places=r.places,this.roadPaths=r.roadPaths,this.roadIndex=r.roadIndex,this.labels=new o_(this.labelLayer,this.places,o=>this.flyToPlace(o)),this.external||this.setupControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize();const a=window.matchMedia("(prefers-reduced-motion: reduce)").matches;a&&(this.animating=!1),this.external?this.setExternalCamera(...this.opts.externalStart):a?this.applyView(this.opts.home):(this.applyView(this.opts.intro),this.fly(this.opts.home,3.4)),this.cb.onProgress(1,"Ready"),this.cb.onReady(r.info),this.last=performance.now(),this.raf=requestAnimationFrame(this.frame)}get isAnimating(){return this.animating}setAnimating(t){this.animating=t,this.dirty=!0}setExternalCamera(t,e,n,s,r){this.external&&(this.camera.position.set(t,e,n),this.camera.rotation.set(r,s,0,"YXZ"),this.dirty=!0)}setExternal(t){if(!(t===this.external||!this.hf)){if(this.external=t,t)this.flight=void 0,this.controls&&(this.controls.enabled=!1);else{this.controls||this.setupControls(),this.controls.enabled=!0;const e=this.camera;e.getWorldDirection(this.lookDir);const n=Math.max(1,e.position.y),s=this.lookDir.y<-.05?Math.min(n/-this.lookDir.y,6e3):900,r=this.controls.target.copy(e.position).addScaledVector(this.lookDir,s);r.x=_e.clamp(r.x,this.hf.xMin,this.hf.xMax),r.z=_e.clamp(r.z,this.hf.zMin,this.hf.zMax),r.y=this.targetHeight(r.x,r.z),this.controls.update(),this.fly(this.opts.home,1.6)}this.resize()}}getCamera(){const t=new gn().setFromQuaternion(this.camera.quaternion,"YXZ"),e=this.camera.position;return{x:e.x,y:e.y,z:e.z,yaw:t.y,pitch:t.x}}fromLatLon(t,e){return this.meta?Yn(this.meta,t,e):[0,0]}addParts(t){const e=new Ie;e.name="guest";const n=t.map(s=>{const r=new Re;r.setAttribute("position",new re(Array.from(s.positions),3)),s.colors&&r.setAttribute("color",new re(Array.from(s.colors),3)),s.uvs&&r.setAttribute("uv",new re(Array.from(s.uvs),2)),s.indices&&r.setIndex(Array.from(s.indices)),s.normals?r.setAttribute("normal",new re(Array.from(s.normals),3)):r.computeVertexNormals();let a=null;s.map&&(a=new De(s.map),a.colorSpace=Te,a.wrapS=a.wrapT=Js,s.mapRepeat&&a.repeat.set(s.mapRepeat[0],s.mapRepeat[1]),a.anisotropy=4,a.needsUpdate=!0);const o=s.opacity??1,l={color:new Ct().setRGB(...s.color??[1,1,1]),map:a,vertexColors:!!s.colors,transparent:o<1,opacity:o,side:s.doubleSide?we:ti},c=s.unlit?new Wn(l):new Ye({...l,roughness:s.roughness??.9,metalness:s.metalness??0,emissive:new Ct().setRGB(...s.emissive??[0,0,0]),emissiveIntensity:s.emissiveIntensity??1,flatShading:!!s.flatShading}),h=new Qt(r,c);return h.matrixAutoUpdate=!1,h.matrix.fromArray(Array.from(s.matrix)),h.castShadow=o>=1,h.receiveShadow=!0,e.add(h),h});return this.scene.add(e),this.dirty=!0,{setMatrix:(s,r)=>{const a=n[s];a&&(a.matrix.fromArray(Array.from(r)),a.matrixWorldNeedsUpdate=!0,this.dirty=!0)},setEmissive:(s,r,a,o,l)=>{var h;const c=(h=n[s])==null?void 0:h.material;c instanceof Ye&&(c.emissive.setRGB(r,a,o),c.emissiveIntensity=l,this.dirty=!0)},remove:()=>{var s;this.scene.remove(e);for(const r of n){r.geometry.dispose();const a=r.material;(s=a.map)==null||s.dispose(),a.dispose()}this.dirty=!0}}}addPad(t){const e=t.radius??t.halfWidth??5,n=t.radius??t.halfDepth??5,s=t.heading??0,r=Math.cos(s),a=Math.sin(s);let o=1/0,l=-1/0;for(const[d,m]of[[0,0],[-e,-n],[e,-n],[e,n],[-e,n],[0,-n],[0,n],[-e,0],[e,0]]){const M=this.hf.yAt(t.x+d*r+m*a,t.z-d*a+m*r);o=Math.min(o,M),l=Math.max(l,M)}const c=l+(t.lift??.25),h=c-o+1,f=t.radius?new ko(t.radius,t.radius,h,24):new Mi(e*2,h,n*2),u=new Qt(f,new Ye({color:new Ct().setRGB(...t.color),roughness:1}));return u.position.set(t.x,c-h/2,t.z),u.rotation.y=s,u.receiveShadow=!0,u.name="guest-pad",this.scene.add(u),this.dirty=!0,c}setSolarMinutes(t){!this.atmosphere||t===this.solarMinutes||(this.solarMinutes=t,this.atmosphere.setSolar(t),this.dirty=!0)}roadSpot(t){const e=t.trim().toLowerCase();let n=null;for(const m of this.roadPaths)m.name.toLowerCase()===e&&(!n||m.length>n.length)&&(n=m);if(!n)return null;const s=n.pts.length/3,r=0,a=s-1,o=s>>1;let l=n.pts[a*3]-n.pts[r*3],c=n.pts[a*3+2]-n.pts[r*3+2];const h=Math.hypot(l,c)||1;l/=h,c/=h;const f=Math.min(70,h*.5),u=n.pts[o*3]-l*f,d=n.pts[o*3+2]-c*f;return{x:u,y:this.hf.yAt(u,d)+38,z:d,yaw:Math.atan2(-l,-c),pitch:-.42}}standNear(t,e){const n=this.roadIndex,s=n==null?void 0:n.nearest(t,e,150);if(!n||!s)return null;const r=s.width/2+1.5;let a=(t-s.px)*-s.tz+(e-s.pz)*s.tx>=0?1:-1;const o=d=>{const m=s.px-s.tz*d*(r+6),M=s.pz+s.tx*d*(r+6),p=n.nearest(m,M,r+4);return!!p&&p.dist<r+3};o(a)&&!o(-a)&&(a=-a);const l=s.px-s.tz*a*r,c=s.pz+s.tx*a*r,h=t-l,f=e-c,u=Math.hypot(h,f)>6?Math.atan2(-h,-f):Math.atan2(-s.tx,-s.tz);return{x:l,z:c,yaw:u}}groundAt(t,e){return this.hf?this.hf.yAt(t,e):0}get waterLevel(){return 0}get bounds(){return this.hf?[this.hf.xMin,this.hf.xMax,this.hf.zMin,this.hf.zMax]:[-4e3,4e3,-3440,3440]}setTimeOfDay(t){var e;(e=this.atmosphere)==null||e.set(t,!this.animating),this.dirty=!0}setLabelsVisible(t){var e;(e=this.labels)==null||e.setVisible(t),this.dirty=!0}setLabelObstacles(t){var e;(e=this.labels)==null||e.setObstacles(t),this.dirty=!0}flyToPlace(t){const e=this.places.find(n=>n.id===t);e&&this.fly({x:e.x,z:e.z,dist:e.view[0],polar:e.view[1],azimuth:e.view[2]},2.2)}resetView(){this.fly(this.opts.home,1.8)}setView(t,e,n,s,r,a=1.5){this.fly({x:t,z:e,dist:n,polar:s,azimuth:r},a)}faceNorth(){const t=this.currentView();this.fly({...t,azimuth:0},.8)}zoomBy(t){const e=this.currentView();this.fly({...e,dist:_e.clamp(e.dist*t,this.controls.minDistance,this.controls.maxDistance)},.35)}dispose(){var t,e,n;this.disposed=!0,this.abort.abort(),cancelAnimationFrame(this.raf),(t=this.resizeObserver)==null||t.disconnect(),(e=this.labels)==null||e.dispose(),(n=this.controls)==null||n.dispose(),this.renderer&&(this.renderer.domElement.removeEventListener("keydown",this.onKey),this.scene.traverse(s=>{var o,l;const r=s;(l=(o=r.geometry)==null?void 0:o.dispose)==null||l.call(o);const a=Array.isArray(r.material)?r.material:r.material?[r.material]:[];for(const c of a){for(const h of Object.values(c))h instanceof De&&h.dispose();c.dispose()}}),this.renderer.dispose(),this.renderer.domElement.remove())}beforeRender(){}invalidate(){this.dirty=!0}clearTest(){const t=[...this.host.clear??[],...(this.host.clearLatLon??[]).map(e=>{const[n,s]=this.fromLatLon(e.lat,e.lon);return{x:n,z:s,r:e.r}})];return(e,n)=>t.some(s=>(e-s.x)**2+(n-s.z)**2<s.r*s.r)}pickQuality(){if(this.host.quality)return this.host.quality;const t=new URLSearchParams(window.location.search).get("quality");if(t==="high"||t==="medium"||t==="low")return t;const e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),s=n?String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)):"";if(/swiftshader|llvmpipe|software/i.test(s))return"low";const r=navigator.deviceMemory??8;return window.matchMedia("(pointer: coarse)").matches||r<=4?"medium":"high"}setupControls(){const t=this.controls=new a_(this.camera,this.renderer.domElement);t.enableDamping=!0,t.dampingFactor=.09,t.screenSpacePanning=!1,t.zoomToCursor=!0,t.minDistance=this.opts.minDistance,t.maxDistance=this.opts.maxDistance,t.maxPolarAngle=_e.degToRad(84),t.zoomSpeed=1.1,t.addEventListener("start",()=>{this.flight=void 0}),t.addEventListener("change",()=>{const e=t.target,n=this.hf;e.x=_e.clamp(e.x,n.xMin,n.xMax),e.z=_e.clamp(e.z,n.zMin,n.zMax);const s=this.targetHeight(e.x,e.z);this.camera.position.y+=s-e.y,e.y=s,this.dirty=!0}),this.renderer.domElement.addEventListener("keydown",this.onKey)}clampView(t){var e,n;return{x:_e.clamp(t.x,this.hf.xMin,this.hf.xMax),z:_e.clamp(t.z,this.hf.zMin,this.hf.zMax),dist:_e.clamp(t.dist,((e=this.controls)==null?void 0:e.minDistance)??this.opts.minDistance,((n=this.controls)==null?void 0:n.maxDistance)??this.opts.maxDistance),polar:_e.clamp(t.polar,2,84),azimuth:t.azimuth}}currentView(){const t=this.controls.target,e=this.camera.position.clone().sub(t),n=new Ir().setFromVector3(e);return{x:t.x,z:t.z,dist:n.radius,polar:_e.radToDeg(n.phi),azimuth:_e.radToDeg(n.theta)}}targetHeight(t,e){return this.opts.followGround?Math.max(0,this.hf.yAt(t,e)):0}applyView(t){const e=new Ir(t.dist,_e.degToRad(t.polar),_e.degToRad(t.azimuth)),n=this.controls.target.set(t.x,this.targetHeight(t.x,t.z),t.z);this.camera.position.setFromSpherical(e).add(n),this.camera.lookAt(n),this.dirty=!0}fly(t,e){if(!this.controls||this.external)return;if(t=this.clampView(t),!this.animating){this.flight=void 0,this.applyView(t),this.controls.update();return}const n=this.currentView();let s=(t.azimuth-n.azimuth)%360;s>180&&(s-=360),s<-180&&(s+=360),this.flight={from:n,to:{...t,azimuth:n.azimuth+s},t:0,duration:e}}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.fov=this.external?60:t/e<.8?52:38,this.camera.updateProjectionMatrix(),this.dirty=!0}}const Wh=new WeakMap,d_=new jt().makeScale(0,0,0);function is(i,t,e){let n=Wh.get(i);if(n||Wh.set(i,n=new Map),e){if(n.has(t))return;const s=new jt;i.getMatrixAt(t,s),n.set(t,s),i.setMatrixAt(t,d_)}else{const s=n.get(t);if(!s)return;i.setMatrixAt(t,s),n.delete(t)}i.instanceMatrix.needsUpdate=!0}function hl(i,t,e,n,s,r){const{o:a,d:o}=i,l=o.x*o.x+o.z*o.z;let c;if(l<1e-6?c=o.y<0?(a.y-s)/-o.y:-1:c=((t-a.x)*o.x+(e-a.z)*o.z)/l,c<=0)return-1;const h=a.y+o.y*c;return(h<n-.3||h>s+.3)&&(o.y>=0||(c=(a.y-s)/-o.y,c<=0))?-1:Math.hypot(a.x+o.x*c-t,a.z+o.z*c-e)<=r?c:-1}const Xh=3;function ss(i,t,e,n,s,r,a,o,l,c){const h=new Xo(1,0),f=h.getAttribute("position"),u=[];for(let d=0;d<f.count;d++){const m=f.getX(d),M=f.getY(d),p=f.getZ(d),g=Math.sin(m*12.9898+M*78.233+p*37.719+o*4.1)*43758.5453,v=.8+(g-Math.floor(g))*.42;u.push([t+m*s*v,e+M*r*(M<0?.75:v),n+p*a*v])}for(let d=0;d<u.length;d+=3){const[m,M,p]=[u[d],u[d+1],u[d+2]],g=_e.clamp(((m[1]+M[1]+p[1])/3-(e-r))/(2*r),0,1);i.tri(m[0],m[1],m[2],M[0],M[1],M[2],p[0],p[1],p[2],ts(l,c,g))}h.dispose()}function yi(i){const t=i.build();return t.deleteAttribute("glow"),t}function p_(i,t,e,n,s=()=>!1,r){const a=new Ie;a.name="trees";const o=new $c({vertexColors:!0}),l=r?r.tile:1300,c=new Map,h=new Map,f=Dn(88);for(let w=0;w<i.length;w+=Xh){if(n<1&&f()>n||s(i[w]/4,i[w+1]/4))continue;const C=`${i[w+2]>>8}:${Math.floor(i[w]/4/l)}:${Math.floor(i[w+1]/4/l)}`;let D=h.get(C);D||h.set(C,D=[]),D.push(w)}const u=new jt,d=new on,m=new Q,M=new Q,p=new Q(0,1,0),g=new Ct;let v=0;const S=new Map;let _=new Set;for(const[w,L]of h){const C=Number(w.split(":")[0]),D=new rn(t[C],o,L.length);if(L.forEach((A,F)=>{const G=i[A]/4,z=i[A+1]/4,W=(i[A+2]&255)/10,V=Dn(A*2654435761+11);M.set(G,e.yAt(G,z)-.15,z),S.set(`${i[A]}_${i[A+1]}`,{near:D,n:F,x:G,y:M.y,z,h:W}),d.setFromAxisAngle(p,V()*Math.PI*2);const k=.85+V()*.35;m.set(W*k,W,W*(.85+V()*.35)),D.setMatrixAt(F,u.compose(M,d,m));const H=.8+V()*.34;D.setColorAt(F,g.setRGB(H*(.94+V()*.14),H,H*(.9+V()*.12)))}),D.instanceMatrix.needsUpdate=!0,D.instanceColor&&(D.instanceColor.needsUpdate=!0),D.computeBoundingSphere(),D.castShadow=!0,D.receiveShadow=!1,a.add(D),v+=L.length,r){const A=w.slice(w.indexOf(":")+1);let F=c.get(A);F||c.set(A,F={near:[],trees:[],kinds:[]}),F.near.push(D);for(const G of L)F.trees.push(G),F.kinds.push(C)}}const y=w=>{const L=new Set(w.map(([C,D])=>`${Math.round(C*4)}_${Math.round(D*4)}`));for(const C of new Set([...L,..._])){const D=S.get(C);!D||L.has(C)===_.has(C)||(is(D.near,D.n,L.has(C)),D.far&&D.fn!==void 0&&is(D.far,D.fn,L.has(C)))}_=L},E=(w,L)=>{let C=null;for(const[D,A]of S){if(_.has(D)||Math.abs(A.x-w.x)>400||Math.abs(A.z-w.z)>400)continue;const F=hl({o:w,d:L},A.x,A.z,A.y,A.y+A.h,Math.max(.8,A.h*.3));F>0&&(!C||F<C.t)&&(C={type:"tree",x:A.x,z:A.z,t:F})}return C};if(!r)return{group:a,count:v,cull:(w,L,C)=>{},setGone:y,pick:E};const x=m_(),b=t.map(w=>{w.computeBoundingBox();const L=w.boundingBox,C=w.getAttribute("color");let D=0,A=0,F=0;for(let G=0;G<C.count;G++)D+=C.getX(G),A+=C.getY(G),F+=C.getZ(G);return{wide:.8*Math.max(-L.min.x,L.max.x,-L.min.z,L.max.z),top:L.max.y,colour:new Ct(D/C.count,A/C.count,F/C.count)}}),R=[];for(const w of c.values()){const L=new rn(x,o,w.trees.length);w.trees.forEach((C,D)=>{const A=S.get(`${i[C]}_${i[C+1]}`);A&&(A.far=L,A.fn=D);const F=i[C]/4,G=i[C+1]/4,z=(i[C+2]&255)/10,W=b[w.kinds[D]],V=Dn(C*2654435761+11);V();const k=z*(.85+V()*.35)*W.wide;M.set(F,e.yAt(F,G)+z*W.top*.62,G),m.set(k,z*W.top*.4,k),L.setMatrixAt(D,u.compose(M,d.identity(),m));const H=.8+V()*.34;L.setColorAt(D,g.copy(W.colour).multiplyScalar(H))}),L.computeBoundingSphere(),L.visible=!1,a.add(L),R.push({near:w.near,far:L,c:L.boundingSphere.center,r:L.boundingSphere.radius})}return{group:a,count:v,setGone:y,pick:E,cull(w,L,C,D=r.near){for(const A of R){const F=Math.hypot(Math.max(0,Math.hypot(A.c.x-w,A.c.z-C)-A.r),A.c.y-L)<D;for(const G of A.near)G.visible=F;A.far.visible=!F}}}}function m_(){const i=[0,1,0],t=[0,-1,0],e=[[1,0,0],[0,0,1],[-1,0,0],[0,0,-1]],n=[],s=[];for(let a=0;a<4;a++){const o=e[a],l=e[(a+1)%4];n.push(...i,...l,...o,...t,...o,...l),s.push(1.08,1.08,1.08,.95,.95,.95,.95,.95,.95,.6,.6,.6,.78,.78,.78,.78,.78,.78)}const r=new Re;return r.setAttribute("position",new re(n,3)),r.setAttribute("color",new re(s,3)),r.computeVertexNormals(),r}const Vr=1,Ns=2,g_=[$(5198680),$(11575168),$(9072466),$(12434356)],x_=$(4474957),qh=$(15921382),Yh=[.34,.3,.26,.22,.16,.15,.13,.11],$h=.05;function __(i,t){const e=[i[0]/10,i[1]/10];for(let n=2;n<i.length;n+=2){const s=i[n-2]/10,r=i[n-1]/10,a=i[n]/10,o=i[n+1]/10,l=Math.max(1,Math.ceil(Math.hypot(a-s,o-r)/t));for(let c=1;c<=l;c++)e.push(s+(a-s)*c/l,r+(o-r)*c/l)}return e}class v_{constructor(){et(this,"cells",new Map);et(this,"segs",[]);et(this,"size",40)}add(t,e,n,s,r,a,o=7){const l=this.segs.length/7;this.segs.push(t,e,n,s,r,a,o);const c=Math.floor(Math.min(t,n)/this.size),h=Math.floor(Math.max(t,n)/this.size),f=Math.floor(Math.min(e,s)/this.size),u=Math.floor(Math.max(e,s)/this.size);for(let d=c;d<=h;d++)for(let m=f;m<=u;m++){const M=(d+512)*4096+(m+512);let p=this.cells.get(M);p||this.cells.set(M,p=[]),p.push(l)}}clear(t,e,n,s){let r=!0;return this.near(t,e,n,(a,o,l,c)=>{a<c/2+s&&(r=!1)}),r}near(t,e,n,s){const r=Math.ceil(n/this.size),a=Math.floor(t/this.size),o=Math.floor(e/this.size);for(let l=a-r;l<=a+r;l++)for(let c=o-r;c<=o+r;c++){const h=this.cells.get((l+512)*4096+(c+512));if(h)for(const f of h){const u=this.segs[f*7],d=this.segs[f*7+1],m=this.segs[f*7+2]-u,M=this.segs[f*7+3]-d,p=Math.max(0,Math.min(1,((t-u)*m+(e-d)*M)/(m*m+M*M||1))),g=Math.hypot(t-u-m*p,e-d-M*p);g<=n&&s(g,this.segs[f*7+4],this.segs[f*7+5],this.segs[f*7+6])}}}nearest(t,e,n){let s=null;const r=Math.ceil(n/this.size),a=Math.floor(t/this.size),o=Math.floor(e/this.size);for(let l=a-r;l<=a+r;l++)for(let c=o-r;c<=o+r;c++){const h=this.cells.get((l+512)*4096+(c+512));if(h)for(const f of h){const u=this.segs[f*7],d=this.segs[f*7+1],m=this.segs[f*7+2],M=this.segs[f*7+3],p=m-u,g=M-d,v=Math.max(0,Math.min(1,((t-u)*p+(e-d)*g)/(p*p+g*g||1))),S=u+p*v,_=d+g*v,y=Math.hypot(t-S,e-_);if(y<=n&&(!s||y<s.dist)){const E=Math.hypot(p,g)||1;s={dist:y,px:S,pz:_,cls:this.segs[f*7+4],name:this.segs[f*7+5],width:this.segs[f*7+6],tx:p/E,tz:g/E}}}}return s}}function M_(i,t,e={}){const n=new se,s=new se,r=new v_,a=[],o=[];for(let p=0;p<i.roads.length;p++){const[g,v,S,_,y,E]=i.roads[p],x=_/10,b=__(E,g<=3?6:5),R=b.length/2;if(R<2)continue;const w=v===0&&g<=1?x_:g_[v],L=e.groundDrawsRoads?$h:Yh[g],C=(S&Vr)!==0,D=t.yAt(b[0],b[1]),A=t.yAt(b[R*2-2],b[R*2-1]),F=new Float32Array(R);for(let k=1;k<R;k++)F[k]=F[k-1]+Math.hypot(b[k*2]-b[k*2-2],b[k*2+1]-b[k*2-1]);const G=F[R-1]||1,z=new Float32Array(R*3),W=new Float32Array(R*3),V=new Float32Array(R*3);for(let k=0;k<R;k++){const H=b[k*2],X=b[k*2+1],ht=Math.max(k-1,0),Y=Math.min(k+1,R-1);let ct=b[Y*2]-b[ht*2],lt=b[Y*2+1]-b[ht*2+1];const xt=Math.hypot(ct,lt)||1;ct/=xt,lt/=xt;let dt=1;if(k>0&&k<R-1){const Rt=b[k*2]-b[k*2-2],Kt=b[k*2+1]-b[k*2-1],ve=Math.hypot(Rt,Kt)||1;dt=1/Math.max(.6,(Rt*ct+Kt*lt)/ve)}const Pt=-lt*(x/2)*dt,Yt=ct*(x/2)*dt,bt=C?D+(A-D)*(F[k]/G)+.6+1*Math.sin(Math.PI*F[k]/G):NaN,ut=C?bt:t.yAt(H,X)+L,vt=C?bt:t.yAt(H+Pt,X+Yt)+L,wt=C?bt:t.yAt(H-Pt,X-Yt)+L;z.set([H+Pt,vt,X+Yt],k*3),W.set([H,ut,X],k*3),V.set([H-Pt,wt,X-Yt],k*3),k>0&&g<=3&&r.add(b[k*2-2],b[k*2-1],H,X,g,y,x)}for(let k=0;k<R-1;k++){const H=k*3,X=H+3;if((C||g<=3&&!e.groundDrawsRoads)&&(n.quad(z[H],z[H+1],z[H+2],z[X],z[X+1],z[X+2],W[X],W[X+1],W[X+2],W[H],W[H+1],W[H+2],w),n.quad(W[H],W[H+1],W[H+2],W[X],W[X+1],W[X+2],V[X],V[X+1],V[X+2],V[H],V[H+1],V[H+2],w)),C){const ht=$(v===2?7297604:13225162);for(const Y of[z,V])n.quad(Y[H],Y[H+1],Y[H+2],Y[X],Y[X+1],Y[X+2],Y[X],Y[X+1]+1.05,Y[X+2],Y[H],Y[H+1]+1.05,Y[H+2],ht),n.quad(Y[H],Y[H+1]-.7,Y[H+2],Y[X],Y[X+1]-.7,Y[X+2],Y[X],Y[X+1],Y[X+2],Y[H],Y[H+1],Y[H+2],$(9276036))}}if(g<=3&&!C&&!e.groundDrawsRoads)for(const k of[0,R-1]){const H=W[k*3],X=W[k*3+1],ht=W[k*3+2],Y=8;for(let ct=0;ct<Y;ct++){const lt=ct/Y*Math.PI*2,xt=(ct+1)/Y*Math.PI*2;n.tri(H,X,ht,H+Math.cos(xt)*x/2,X,ht+Math.sin(xt)*x/2,H+Math.cos(lt)*x/2,X,ht+Math.sin(lt)*x/2,w)}}if((g<=1||e.suburbMarkings&&g<=3&&x>=6.5)&&!(S&Ns)&&G>20){let k=0;for(let H=4;H<G-4;H+=12){for(;k<R-2&&F[k+1]<H;)k++;const X=(H-F[k])/(F[k+1]-F[k]||1),ht=W[k*3]+(W[k*3+3]-W[k*3])*X,Y=W[k*3+1]+(W[k*3+4]-W[k*3+1])*X,ct=W[k*3+2]+(W[k*3+5]-W[k*3+2])*X;let lt=W[k*3+3]-W[k*3],xt=W[k*3+5]-W[k*3+2];const dt=Math.hypot(lt,xt)||1;lt/=dt,xt/=dt;const Pt=(W[k*3+4]-W[k*3+1])/dt*3,Yt=-xt*.16,bt=lt*.16,ut=.05;s.quad(ht+Yt,Y+ut,ct+bt,ht+lt*3+Yt,Y+Pt+ut,ct+xt*3+bt,ht+lt*3-Yt,Y+Pt+ut,ct+xt*3-bt,ht-Yt,Y+ut,ct-bt,qh)}}if(S&Ns){let k=0,H=0;for(let xt=0;xt<R;xt++)k+=b[xt*2],H+=b[xt*2+1];k/=R,H/=R;const X=R>>1,ht=S_(b[0],b[1],b[X*2],b[X*2+1],b[R*2-2],b[R*2-1]),Y=ht?ht.x:k,ct=ht?ht.z:H,lt=ht?ht.r:Math.hypot(b[0]-k,b[1]-H);lt>3&&lt<40&&!o.some(xt=>Math.hypot(xt.x-Y,xt.z-ct)<12)&&o.push({x:Y,z:ct,r:lt,w:x})}g<=3&&a.push({index:p,cls:g,name:y>=0?i.names[y]:"",width:x,flags:S,pts:W,length:G,nameIdx:y})}if(e.suburbMarkings)for(const p of a){if(p.cls<2||p.flags&(Vr|Ns)||p.width<5.5||p.length<12)continue;const g=p.pts,v=g.length/3;for(const S of[0,1]){const _=S?v-1:0,y=S?v-2:1,E=g[_*3],x=g[_*3+2];let b=E-g[y*3],R=x-g[y*3+2];const w=Math.hypot(b,R)||1;b/=w,R/=w;let L=0,C=9,D=!1;if(r.near(E,x,1,(k,H,X,ht)=>{X!==p.nameIdx&&k<.8&&(H<C&&(C=H),ht>L&&(L=ht))}),!L||C>p.cls||(r.near(E+b*2,x+R*2,.6,(k,H,X)=>{X===p.nameIdx&&(D=!0)}),D))continue;const A=L/2+1.3,F=E-b*A,G=x-R*A,z=R,W=-b,V=t.yAt(F,G)+(e.groundDrawsRoads?$h:Yh[p.cls])+.05;for(let k=.2;k+.5<p.width/2-.3;k+=1.1){const H=F+z*k,X=G+W*k,ht=F+z*(k+.55),Y=G+W*(k+.55);s.quad(H+b*.15,V,X+R*.15,ht+b*.15,V,Y+R*.15,ht-b*.15,V,Y-R*.15,H-b*.15,V,X-R*.15,qh)}}}const l=$(13158078),c=$(7314002),h=$(4943936);for(const p of o){const g=p.r-p.w/2-.3;if(g<1.2)continue;const v=t.yAt(p.x,p.z)+.2;n.frame(p.x,v,p.z,0),n.cyl(0,0,0,g,g,.4,14,l,c),n.blob(0,.9,0,g*.45,.8,g*.45,6,3,h,$(7181400)),n.frame()}const f=new Ye({vertexColors:!0,roughness:.92,metalness:0,side:we,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),u=new Qt(Zh(n.build()),f);u.receiveShadow=!0,u.name="roads";const d=il(new Wn({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})),m=new Qt(Zh(s.build()),d);m.name="road-markings";const M=new Ie;return M.add(u,m),{group:M,index:r,paths:a}}function Zh(i){return i.deleteAttribute("glow"),i}function S_(i,t,e,n,s,r){const a=2*(i*(n-r)+e*(r-t)+s*(t-n));if(Math.abs(a)<.001)return null;const o=i*i+t*t,l=e*e+n*n,c=s*s+r*r,h=(o*(n-r)+l*(r-t)+c*(t-n))/a,f=(o*(s-e)+l*(i-s)+c*(e-i))/a;return{x:h,z:f,r:Math.hypot(i-h,t-f)}}const Us=-36,y_=170,b_=`
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
`,Fs=4,Kh=4,E_=`
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
          }`,w_=`
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
        }`;function A_(i,t,e,n,s={}){const{nx:r,nz:a}=i,o=new Float32Array(r*a*3),l=new Float32Array(r*a*3),c=new Float32Array(r*a*2);for(let x=0;x<a;x++)for(let b=0;b<r;b++){const R=x*r+b,w=i.xMin+b*i.dx,L=i.zMin+x*i.dz;o[R*3]=w,o[R*3+1]=i.y[R],o[R*3+2]=L,c[R*2]=(w+i.sizeX/2)/i.sizeX,c[R*2+1]=1-(L+i.sizeZ/2)/i.sizeZ;const C=i.y[x*r+Math.max(b-1,0)],D=i.y[x*r+Math.min(b+1,r-1)],A=i.y[Math.max(x-1,0)*r+b],F=i.y[Math.min(x+1,a-1)*r+b],G=(D-C)/(2*i.dx),z=(F-A)/(2*i.dz),W=Math.hypot(G,1,z);l[R*3]=-G/W,l[R*3+1]=1/W,l[R*3+2]=-z/W}const h=new Uint32Array((r-1)*(a-1)*6);let f=0;for(let x=0;x<a-1;x++)for(let b=0;b<r-1;b++){const R=x*r+b,w=R+1,L=R+r,C=L+1;h[f++]=R,h[f++]=L,h[f++]=w,h[f++]=w,h[f++]=L,h[f++]=C}const u=new Re;u.setAttribute("position",new Pe(o,3)),u.setAttribute("normal",new Pe(l,3)),u.setAttribute("uv",new Pe(c,2)),u.setIndex(new Pe(h,1)),u.computeBoundingSphere();const d=new Ye({map:t,roughness:.96,metalness:0}),m=new bs(new Uint8Array([128,128,128,255]),1,1);m.needsUpdate=!0;const M=Fs+Kh,p=Array.from({length:M},()=>({value:m})),g=Array.from({length:M},()=>({value:new Se(0,0,1,1)})),v=Array.from({length:M},()=>({value:0})),S={set(x,b,R){p[x].value=b??m,v[x].value=b?1:0,R&&g[x].value.set(...R)}},_=Array.from({length:M},(x,b)=>b);d.onBeforeCompile=x=>{x.uniforms.uTide=e,x.uniforms.uJitter={value:new Bt(.6/i.sizeX,.6/i.sizeZ)};for(const b of _)x.uniforms[`uDetail${b}`]=p[b],x.uniforms[`uDetailRect${b}`]=g[b],x.uniforms[`uDetailOn${b}`]=v[b];x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform float uTide;
uniform vec2 uJitter;
${_.map(b=>`uniform sampler2D uDetail${b};
uniform vec4 uDetailRect${b};
uniform float uDetailOn${b};`).join(`
`)}
${b_}`).replace("#include <map_fragment>",`
        float camDist = length(cameraPosition - vWPos);
        vec2 w = vWPos.xz;
        float close = ${s.closeUp?"1.0 - smoothstep(110.0, 380.0, camDist)":"0.0"};
        // close up, the colour is looked up a little to one side, differently at every point: the picture's pixel edges become ragged, not blurred squares
        vec2 guv = vMapUv + (vec2(invNoise(w * 1.4) + 0.5 * invNoise(w * 4.3 + 17.0), invNoise(w * 1.4 + 31.7) + 0.5 * invNoise(w * 4.3 + 5.3)) / 1.5 - 0.5) * 2.0 * uJitter * close;
        #ifdef USE_MAP
          diffuseColor *= texture2D(map, guv);
        #endif
        float sharp = 0.0;
        // how fast the picture's coordinates change across the screen, taken here, outside any branch: a tile read
        // inside an "if" at the pixel where two tiles meet otherwise gets a wild answer, picks its smallest copy and
        // draws that tile's average colour there (a dashed green line across a road, at every tile edge)
        vec2 mapDx = dFdx(vMapUv), mapDy = dFdy(vMapUv);
        ${_.slice(0,Fs).map(b=>`if (uDetailOn${b} > 0.5) {
          // a slot with no tile in it is skipped altogether: nothing is read for it
          vec2 duv = (guv - uDetailRect${b}.xy) / (uDetailRect${b}.zw - uDetailRect${b}.xy);
          vec2 dsize = uDetailRect${b}.zw - uDetailRect${b}.xy;
          vec4 fine = textureGrad(uDetail${b}, clamp(duv, 0.0, 1.0), mapDx / dsize, mapDy / dsize);
          float inside = step(0.0, duv.x) * step(duv.x, 1.0) * step(0.0, duv.y) * step(duv.y, 1.0);
          diffuseColor.rgb = mix(diffuseColor.rgb, fine.rgb, inside);
        }`).join(`
`)}
        // what the ground is made of here, if a block says: lawn, asphalt, concrete (128 is the edge of each)
        vec4 kinds = vec4(0.0);
        ${_.slice(Fs).map(b=>`if (uDetailOn${b} > 0.5) {
          vec2 duv = (vMapUv - uDetailRect${b}.xy) / (uDetailRect${b}.zw - uDetailRect${b}.xy);
          if (duv.x >= 0.0 && duv.x <= 1.0 && duv.y >= 0.0 && duv.y <= 1.0) kinds = vec4(textureGrad(uDetail${b}, duv, mapDx / (uDetailRect${b}.zw - uDetailRect${b}.xy), mapDy / (uDetailRect${b}.zw - uDetailRect${b}.xy)).rgb, 1.0);
        }`).join(`
`)}
        ${w_}
        ${s.closeUp?E_:""}
        {
          float nearFade = 1.0 - smoothstep(300.0, 1600.0, camDist);
          float grain = invNoise(vWPos.xz * 0.85) * 0.55 + invNoise(vWPos.xz * 0.21) * 0.45;
          diffuseColor.rgb *= mix(1.0, 0.84 + 0.32 * grain, nearFade * (1.0 - 0.8 * sharp));
          float above = vWPos.y / ${i.vex.toFixed(2)} - uTide;
          float wet = smoothstep(0.45, 0.03, above);
          diffuseColor.rgb *= mix(1.0, 0.76, wet);
        }`)},d.customProgramCacheKey=()=>`town-terrain-${i.vex}-${s.closeUp?1:0}`;const y=new Qt(u,d);y.receiveShadow=!0,y.name="terrain";const E=new Ie;return E.add(y,R_(i),C_(i,n)),E.userData.detail=S,E}function T_(i){const t=[];for(let e=0;e<i.nx;e++)t.push([i.xMin+e*i.dx,i.zMin]);for(let e=1;e<i.nz;e++)t.push([i.xMax,i.zMin+e*i.dz]);for(let e=i.nx-2;e>=0;e--)t.push([i.xMin+e*i.dx,i.zMax]);for(let e=i.nz-2;e>=1;e--)t.push([i.xMin,i.zMin+e*i.dz]);return t}function R_(i){const t=T_(i),e=t.length,n=[],s=[],r=[],a=new Ct(9074780),o=new Ct(6180669),l=new Ct(3813673),c=[[0,a,o],[1,o,l]];for(let u=0;u<e;u++){const[d,m]=t[u],[M,p]=t[(u+1)%e],g=i.yAt(d,m),v=i.yAt(M,p),S=M-d,_=p-m,y=Math.hypot(S,_)||1,E=-_/y*-1,x=S/y*-1;for(const[b,R,w]of c){const C=b===0?g:g-6,D=b===0?g-6:Us,A=b===0?v:v-6,F=b===0?v-6:Us;n.push(d,C,m,M,A,p,M,F,p,d,C,m,M,F,p,d,D,m);for(const G of[R,R,w,R,w,w])s.push(G.r,G.g,G.b);for(let G=0;G<6;G++)r.push(E,0,x)}}const h=new Re;h.setAttribute("position",new re(n,3)),h.setAttribute("normal",new re(r,3)),h.setAttribute("color",new re(s,3));const f=new Qt(h,new Ye({vertexColors:!0,roughness:1,side:we}));return f.name="skirt",f}function C_(i,t){const e=new Ie,n=t.scale??1,s=y_*n,r=i.xMax-i.xMin+s*2,a=i.zMax-i.zMin+s*2,o=190*n,l=(i.xMin+i.xMax)/2,c=(i.zMin+i.zMax)/2,h=new Qt(new Mi(r,o,a),new Ye({color:1779245,roughness:.75,metalness:.1}));h.position.set(l,Us-o/2,c),h.receiveShadow=!0,e.add(h);const f=document.createElement("canvas");f.width=2048,f.height=160;const u=f.getContext("2d");u.fillStyle="#1b262d",u.fillRect(0,0,f.width,f.height),u.fillStyle="#e9d9a6",u.textBaseline="middle",u.font="600 78px 'Space Grotesk', system-ui, sans-serif",u.fillText(t.title,40,84);const d=u.measureText(t.title).width;u.fillStyle="#9fb4bd",u.font="400 42px 'Space Grotesk', system-ui, sans-serif",u.fillText(t.subtitle,40+d+46,88);const m=new Rr(f);m.colorSpace=Te,m.anisotropy=8;const M=1700*n,p=new Qt(new ci(M,M*(f.height/f.width)),new Wn({map:m,toneMapped:!1}));p.position.set(l-r/2+M/2+110*n,Us-o/2,c+a/2+.6),e.add(p);const g=document.createElement("canvas");g.width=g.height=256;const v=g.getContext("2d");v.fillStyle="#e9d9a6",v.beginPath(),v.moveTo(128,18),v.lineTo(176,150),v.lineTo(128,122),v.lineTo(80,150),v.closePath(),v.fill(),v.font="700 86px 'Space Grotesk', system-ui, sans-serif",v.textAlign="center",v.fillText("N",128,240);const S=new Rr(g);S.colorSpace=Te;const _=new Qt(new ci(130*n,130*n),new Wn({map:S,transparent:!0,toneMapped:!1}));return _.rotation.x=-Math.PI/2,_.position.set(i.xMax+s/2,Us+.6,i.zMin+120*n),e.add(_),e}const Wr=128,P_=`
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
`;class L_{constructor(t){et(this,"jobs",new Map);et(this,"order",[]);et(this,"nextId",1);et(this,"worker");et(this,"onPage");et(this,"longest",0);et(this,"pieces",0);et(this,"scratch");this.renderer=t,this.onPage=typeof Worker>"u"||new URLSearchParams(window.location.search).get("tileworker")==="0"}get busy(){return this.order.length>0}load(t,e=1,n=!1,s){return new Promise((r,a)=>{const o=this.nextId++;this.jobs.set(o,{url:t,anisotropy:e,data:n,edit:s,width:0,height:0,strips:[],cut:!1,sent:0,resolve:r,reject:a}),this.order.push(o);const l=new URL(t,document.baseURI).href;this.onPage?this.cutOnPage(o,l):this.cutOnWorker(o,l)})}cutOnWorker(t,e){try{this.worker||(this.worker=new Worker(URL.createObjectURL(new Blob([P_],{type:"text/javascript"}))),this.worker.onmessage=n=>{const s=n.data,r=this.jobs.get(s.id);r&&(s.error==="unsupported"?(this.onPage=!0,this.cutOnPage(s.id,new URL(r.url,document.baseURI).href)):s.error?r.failed=new Error(s.error):s.done?r.cut=!0:s.data?r.strips.push({y:s.y,h:s.h,data:new Uint8Array(s.data)}):(r.width=s.width,r.height=s.height))},this.worker.onerror=()=>{this.onPage=!0,this.worker=void 0;for(const[n,s]of this.jobs)!s.width&&!s.failed&&this.cutOnPage(n,new URL(s.url,document.baseURI).href)}),this.worker.postMessage({id:t,url:e,rows:Wr})}catch{this.onPage=!0,this.cutOnPage(t,e)}}async cutOnPage(t,e){const n=this.jobs.get(t);if(n)try{const s=await fetch(e);if(!s.ok)throw new Error(`HTTP ${s.status}`);const r=await createImageBitmap(await s.blob(),{imageOrientation:"flipY",premultiplyAlpha:"none",colorSpaceConversion:"none"});n.width=r.width,n.height=r.height;for(let a=0;a<r.height;a+=Wr){const o=Math.min(Wr,r.height-a),l=await createImageBitmap(r,0,a,r.width,o);if(!this.jobs.has(t))return l.close();n.strips.push({y:a,h:o,data:l})}r.close(),n.cut=!0}catch(s){n.failed=s instanceof Error?s:new Error(String(s))}}step(){var a,o;const t=this.order[0];if(t===void 0)return!1;const e=this.jobs.get(t);if(e.failed)return this.finish(t),(a=e.tex)==null||a.dispose(),e.reject(e.failed),this.busy;if(!e.width)return!0;const n=performance.now(),s=this.renderer.getContext(),r=this.renderer.state;if(e.tex){const l=this.renderer.properties.get(e.tex).__webglTexture;r.activeTexture(s.TEXTURE0),r.bindTexture(s.TEXTURE_2D,l);const c=e.strips.shift();if(c){if(r.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE),e.edit&&!(c.data instanceof Uint8Array)){const h=this.pixelsOf(c.data,e.width,c.h);c.data.close(),c.data=h}c.data instanceof Uint8Array?((o=e.edit)==null||o.call(e,c.data,c.y,c.h,e.width,e.height),s.texSubImage2D(s.TEXTURE_2D,0,0,c.y,e.width,c.h,s.RGBA,s.UNSIGNED_BYTE,c.data)):(s.texSubImage2D(s.TEXTURE_2D,0,0,c.y,e.width,c.h,s.RGBA,s.UNSIGNED_BYTE,c.data),c.data.close()),e.sent+=c.h}else e.cut&&e.sent>=e.height&&(s.generateMipmap(s.TEXTURE_2D),this.finish(t),e.resolve(e.tex))}else{const l=new bs(null,e.width,e.height,dn,tn);l.colorSpace=e.data?Fn:Te,l.wrapS=l.wrapT=hn,l.magFilter=We,l.minFilter=wn,l.generateMipmaps=!0,l.flipY=!1,l.anisotropy=e.anisotropy,l.source.dataReady=!1,l.needsUpdate=!0,this.renderer.initTexture(l),e.tex=l}return this.pieces++,this.longest=Math.max(this.longest,performance.now()-n),this.busy}pixelsOf(t,e,n){const s=this.scratch??(this.scratch=document.createElement("canvas"));(s.width!==e||s.height<n)&&(s.width=e,s.height=Math.max(n,Wr));const r=s.getContext("2d",{willReadFrequently:!0});return r.clearRect(0,0,e,n),r.drawImage(t,0,0),new Uint8Array(r.getImageData(0,0,e,n).data.buffer)}finish(t){this.jobs.delete(t),this.order=this.order.filter(e=>e!==t)}dispose(){var t,e;(t=this.worker)==null||t.terminate();for(const n of this.jobs.values()){(e=n.tex)==null||e.dispose();for(const s of n.strips)s.data instanceof Uint8Array||s.data.close()}this.jobs.clear(),this.order=[]}}const D_=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,I_=`
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
}`;function N_(i,t){const e=i.w*i.h,n=new Uint16Array(e*2);for(let d=0;d<e;d++)n[d*2]=Ac.toHalfFloat(i.raw[d]),n[d*2+1]=Ac.toHalfFloat(i.exposure[d]);const s=new bs(n,i.w,i.h,ii,fn);s.minFilter=s.magFilter=We,s.wrapS=s.wrapT=hn,s.needsUpdate=!0;const r={tField:{value:s},uSize:{value:new Bt(i.sizeX,i.sizeZ)},uTide:t,uTime:{value:0},uSunDir:{value:new Q(.4,.8,.3).normalize()},uSunColor:{value:new Ct(16773848)},uShallow:{value:new Ct(7129789)},uDeep:{value:new Ct(937848)},uSky:{value:new Ct(12573938)},uFoam:{value:1}},a=new Xn({uniforms:r,vertexShader:D_,fragmentShader:I_,transparent:!0,depthWrite:!1}),o=new ci(i.xMax-i.xMin,i.zMax-i.zMin);o.rotateX(-Math.PI/2);const l=new Qt(o,a);l.position.set((i.xMin+i.xMax)/2,t.value*i.vex,(i.zMin+i.zMax)/2),l.renderOrder=2,l.name="water";const c=new Qt(new Re,new Wn({color:1929103,transparent:!0,opacity:.8,side:we,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));c.renderOrder=1,c.name="water-edge";const h=[];for(let d=0;d<i.nx;d++)h.push([i.xMin+d*i.dx,i.zMin]);for(let d=1;d<i.nz;d++)h.push([i.xMax,i.zMin+d*i.dz]);for(let d=i.nx-2;d>=0;d--)h.push([i.xMin+d*i.dx,i.zMax]);for(let d=i.nz-2;d>=1;d--)h.push([i.xMin,i.zMin+d*i.dz]);const f=h.map(([d,m])=>i.yAt(d,m)),u=d=>{t.value=d;const m=d*i.vex;l.position.y=m;const M=[],p=h.length;for(let v=0;v<p;v++){const S=(v+1)%p,_=f[v],y=f[S];if(_>=m&&y>=m)continue;const[E,x]=h[v],[b,R]=h[S],w=Math.min(_,m),L=Math.min(y,m);M.push(E,m,x,b,m,R,b,L,R,E,m,x,b,L,R,E,w,x)}c.geometry.dispose();const g=new Re;g.setAttribute("position",new re(M,3)),c.geometry=g};return u(t.value),{mesh:l,skirt:c,uniforms:r,setTide:u}}function Xr(i){const t=i.length/2;let e={cx:0,cz:0,w:0,d:0,heading:0,area:1/0};for(let n=0;n<t;n++){const s=(n+1)%t;let r=i[s*2]-i[n*2],a=i[s*2+1]-i[n*2+1];const o=Math.hypot(r,a);if(o<.5)continue;r/=o,a/=o;let l=1/0,c=-1/0,h=1/0,f=-1/0;for(let d=0;d<t;d++){const m=i[d*2],M=i[d*2+1],p=m*r+M*a,g=-m*a+M*r;p<l&&(l=p),p>c&&(c=p),g<h&&(h=g),g>f&&(f=g)}const u=(c-l)*(f-h);if(u<e.area){const d=(l+c)/2,m=(h+f)/2;e={cx:d*r-m*a,cz:d*a+m*r,w:c-l,d:f-h,heading:Math.atan2(-a,r),area:u}}}return e}function U_(i,t){const e=i.length/2,n=nl(i)>0?1:-1,s=[];for(let r=0;r<e;r++){const a=(r+e-1)%e,o=(r+1)%e;let l=i[r*2]-i[a*2],c=i[r*2+1]-i[a*2+1],h=i[o*2]-i[r*2],f=i[o*2+1]-i[r*2+1];const u=Math.hypot(l,c)||1,d=Math.hypot(h,f)||1;l/=u,c/=u,h/=d,f/=d;const m=-c*n,M=l*n,p=-f*n,g=h*n;let v=m+p,S=M+g;const _=Math.hypot(v,S)||1;v/=_,S/=_;const y=t/Math.max(.4,v*m+S*M);s.push(i[r*2]+v*y,i[r*2+1]+S*y)}return s}function qr(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Int16Array(e.buffer,0,e.length>>1)}async function Jh(i){const t=new Uint8Array(i),e=new DataView(i);let n=8,s=0,r=0,a=0,o=0,l=0;const c=[];for(;n<t.length;){const M=e.getUint32(n),p=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]);if(p==="IHDR")s=e.getUint32(n+8),r=e.getUint32(n+12),a=t[n+16],o=t[n+17],l=t[n+20];else if(p==="IDAT")c.push(t.subarray(n+8,n+8+M));else if(p==="IEND")break;n+=12+M}if(a!==8||o!==2&&o!==6||l)throw new Error("Unsupported terrain image format");const h=o===2?3:4,f=new Blob(c).stream().pipeThrough(new DecompressionStream("deflate")),u=new Uint8Array(await new Response(f).arrayBuffer()),d=s*h,m=new Uint8Array(d*r);for(let M=0;M<r;M++){const p=u[M*(d+1)],g=M*(d+1)+1,v=M*d;for(let S=0;S<d;S++){const _=S>=h?m[v+S-h]:0,y=M>0?m[v-d+S]:0,E=S>=h&&M>0?m[v-d+S-h]:0;let x=u[g+S];if(p===1)x+=_;else if(p===2)x+=y;else if(p===3)x+=_+y>>1;else if(p===4){const b=Math.abs(y-E),R=Math.abs(_-E),w=Math.abs(_+y-2*E);x+=b<=R&&b<=w?_:R<=w?y:E}m[v+S]=x&255}}return{width:s,height:r,channels:h,data:m}}function F_(i,t,e){const n=i.width*i.height,s=new Float32Array(n);for(let r=0;r<n;r++)s[r]=(i.data[r*i.channels]<<8|i.data[r*i.channels+1])/t-e;return s}const $n=4,Qe=7;function Qh(i){return i.colorSpace=Te,i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=wn,i}async function O_(i,t,e){let n=0;const s=c=>t(++n/4,c);t(0,"Fetching map data");const[r,a,o]=await Promise.all([fetch(i.town,{signal:e}).then(c=>{if(!c.ok)throw new Error("Could not load the suburb data");return c.json()}).then(c=>(s("Streets and buildings"),c)),fetch(i.height,{signal:e}).then(c=>{if(!c.ok)throw new Error("Could not load the terrain");return c.arrayBuffer()}).then(Jh).then(c=>(s("Terrain"),c)),new Kc().loadAsync(i.ground).then(c=>(s("Ground texture"),c))]),l=r.meta;return s("Building the model"),{town:{...r,buildings:qr(r.buildings),cars:qr(r.cars),trees:qr(r.trees),fences:r.fences?qr(r.fences):new Int16Array(0)},heights:F_(a,l.heightScale,l.heightOffset),ground:Qh(o)}}async function z_(i){return Qh(await new Kc().loadAsync(i))}const jh=[16052712,15327951,14673377,13621459,13095900,15129023,12174512,10990520,15786948,14273976,9413530,7307142].map($),tu=[10510922,9394760,12158570,13215107,10120021,13807756].map($),eu=[14276300,13224130,14999506,12567492,13682872,11909302,15328988].map($),nu=[13619916,12173748,14275778,10135200,9279388].map($),B_=$(3163994),iu=$(16053230),k_=$(11120304),G_=$(7300956),su=$(12566714),Yr=.05,H_=0,Os=1,zs=2,$r=new Ct;function ru(i,t,e){return $r.setRGB(i/255,t/255,e/255,Te),[$r.r,$r.g,$r.b]}function V_(i,t,e,n,s){const{cx:r,cz:a,hw:o,hd:l}=t,c=Ut(s,.88);if(o>=l){const h=o-l;i.quad(r-o,e,a+l,r+o,e,a+l,r+h,e+n,a,r-h,e+n,a,s),i.quad(r+o,e,a-l,r-o,e,a-l,r-h,e+n,a,r+h,e+n,a,s),i.tri(r+o,e,a+l,r+o,e,a-l,r+h,e+n,a,c),i.tri(r-o,e,a-l,r-o,e,a+l,r-h,e+n,a,c)}else{const h=l-o;i.quad(r+o,e,a+l,r+o,e,a-l,r,e+n,a-h,r,e+n,a+h,s),i.quad(r-o,e,a-l,r-o,e,a+l,r,e+n,a+h,r,e+n,a-h,s),i.tri(r-o,e,a+l,r+o,e,a+l,r,e+n,a+h,c),i.tri(r+o,e,a-l,r-o,e,a-l,r,e+n,a-h,c)}}function au(i,t,e,n,s,r,a){const{cx:o,cz:l,hw:c,hd:h}=t;if(c>=h){const f=s*n/h;i.quad(o-c-s,e-f,l+h+s,o+c+s,e-f,l+h+s,o+c+s,e+n,l,o-c-s,e+n,l,r),i.quad(o+c+s,e-f,l-h-s,o-c-s,e-f,l-h-s,o-c-s,e+n,l,o+c+s,e+n,l,r),i.tri(o+c,e,l+h,o+c,e,l-h,o+c,e+n,l,a),i.tri(o-c,e,l-h,o-c,e,l+h,o-c,e+n,l,a)}else{const f=s*n/c;i.quad(o+c+s,e-f,l+h+s,o+c+s,e-f,l-h-s,o,e+n,l-h-s,o,e+n,l+h+s,r),i.quad(o-c-s,e-f,l-h-s,o-c-s,e-f,l+h+s,o,e+n,l+h+s,o,e+n,l-h-s,r),i.tri(o-c,e,l+h,o+c,e,l+h,o,e+n,l+h,a),i.tri(o+c,e,l-h,o-c,e,l-h,o,e+n,l-h,a)}}const W_=1,X_=2,Zr=$(1846090);function q_(i,t,e,n,s,r){const a=t.hw>=t.hd,o=(a?t.hd:t.hw)+s,l=(a?t.hw:t.hd)-(a?t.hd:t.hw)*.55,c=Math.min(Math.max(l,1.2),3.2),h=a?Math.cos(r)<0?1:-1:Math.sin(r)>0?1:-1,f=.28,u=.74,d=.1,m=h*o*(1-f),M=h*o*(1-u),p=e+n*f+d,g=e+n*u+d;a?h>0?i.quad(t.cx-c,p,t.cz+m,t.cx+c,p,t.cz+m,t.cx+c,g,t.cz+M,t.cx-c,g,t.cz+M,Zr):i.quad(t.cx+c,p,t.cz+m,t.cx-c,p,t.cz+m,t.cx-c,g,t.cz+M,t.cx+c,g,t.cz+M,Zr):h>0?i.quad(t.cx+m,p,t.cz+c,t.cx+m,p,t.cz-c,t.cx+M,g,t.cz-c,t.cx+M,g,t.cz+c,Zr):i.quad(t.cx+m,p,t.cz-c,t.cx+m,p,t.cz+c,t.cx+M,g,t.cz+c,t.cx+M,g,t.cz-c,Zr)}function ou(i,t,e){let n=!1;const s=i.length/2;for(let r=0,a=s-1;r<s;a=r++){const o=i[r*2],l=i[r*2+1],c=i[a*2],h=i[a*2+1];l>e!=h>e&&t<(c-o)*(e-l)/(h-l)+o&&(n=!n)}return n}function Y_(i,t,e){const n=Math.max(.5,Math.max(t,e)/64),s=Math.max(1,Math.round(t/n)),r=Math.max(1,Math.round(e/n)),a=t/s,o=e/r,l=new Uint8Array(s*r);let c=0;for(let d=0;d<r;d++)for(let m=0;m<s;m++)ou(i,-t/2+(m+.5)*a,-e/2+(d+.5)*o)&&(l[d*s+m]=1,c++);if(!c)return null;const h=[],f=new Int32Array(s);let u=0;for(let d=0;d<3;d++){f.fill(0);let m=0,M=0,p=0,g=0,v=0;for(let y=0;y<r;y++){for(let x=0;x<s;x++)f[x]=l[y*s+x]?f[x]+1:0;const E=[];for(let x=0;x<=s;x++){const b=x<s?f[x]:0;for(;E.length&&f[E[E.length-1]]>=b;){const R=f[E.pop()],w=E.length?E[E.length-1]+1:0;R*(x-w)>m&&(m=R*(x-w),M=w,p=x-1,g=y-R+1,v=y)}E.push(x)}}const S=(p-M+1)*a,_=(v-g+1)*o;if(!m||S<2.4||_<2.4||d>0&&S*_<9)break;h.push({cx:-t/2+(M+p+1)/2*a,cz:-e/2+(g+v+1)/2*o,hw:S/2,hd:_/2}),u+=m;for(let y=g;y<=v;y++)l.fill(0,y*s+M,y*s+p+1)}return h.length&&u/c>=.7?h:null}function $_(i,t,e,n,s,r,a,o,l,c=0,h=!1,f=!1){const u=e.length/2;let d=1/0,m=-1/0,M=0,p=0;for(let z=0;z<u;z++){const W=t.yAt(e[z*2],e[z*2+1]);W<d&&(d=W),W>m&&(m=W),M+=e[z*2],p+=e[z*2+1]}M/=u,p/=u;const g=Math.min(m,Math.max(d,t.yAt(M,p)))+.1,v=Math.max(n,g+(a===Os?2.1:2.4),m+1.5),S=v-g,_=Math.max(0,s-v),y=Math.abs(nl(e)),E=Xr(e),x=y/(E.w*E.d||1),b=Math.min(E.w,E.d)/2,[R,w,L]=r;let C=ru(R,w,L);const D=R>w*1.2&&R>L*1.35&&R>105;let A;a===zs?A=eu[Math.floor(l()*eu.length)]:a===Os?A=l()<.45?ts(C,iu,.35):nu[Math.floor(l()*nu.length)]:A=D&&l()<.6?tu[Math.floor(l()*tu.length)]:jh[Math.floor(l()*jh.length)],o||(A=ts(A,su,.3),C=ts(C,su,.3)),i.frame(0,g,0,0);const F=a===H_&&S>=4.4&&S<6.6?S-2.75:0;if(F?(i.walls(e,d-g-.3,F-.22,ts(Ut(A,.5),G_,.5)),i.walls(e,F-.22,F,iu),i.walls(e,F,S,A)):i.walls(e,d-g-.3,S,A),_<.7||a===zs&&(_<1.3||x<.78))if(a===zs){i.cap(e,S-.05,C),i.walls(e,S-.05,S+.45,Ut(A,.96));const z=Math.min(5,Math.floor(y/350)),W=Math.cos(E.heading),V=Math.sin(E.heading);for(let k=0;k<z;k++){const H=(l()-.5)*E.w*.5,X=(l()-.5)*E.d*.5,ht=E.cx+H*W+X*V,Y=E.cz-H*V+X*W;i.box(ht-1.1,S,Y-.8,ht+1.1,S+.9,Y+.8,k_)}}else i.cap(e,S,C);else if(a===zs)i.frame(E.cx,g,E.cz,E.heading),au(i,{cx:0,cz:0,hw:E.w/2,hd:E.d/2},S,Math.min(_,b*.45),.3,C,A);else{const z=Math.cos(E.heading),W=Math.sin(E.heading);let V;if(x>=.86)V=[{cx:0,cz:0,hw:E.w/2,hd:E.d/2}];else{const k=[];for(let H=0;H<u;H++){const X=e[H*2]-E.cx,ht=e[H*2+1]-E.cz;k.push(X*z-ht*W,X*W+ht*z)}V=Y_(k,E.w,E.d)}if(V){i.cap(e,S-.02,Ut(C,.9)),i.frame(E.cx,g,E.cz,E.heading);const k=Math.min(V[0].hw,V[0].hd),H=Math.min(Math.max(_,.6),k*.95),X=a===Os?.2:.4;V.forEach((ht,Y)=>{const ct=Math.min(ht.hw,ht.hd),lt=Y===0?H:Math.max(.4,H*ct/k),xt=l()<(a===Os?.7:.36),dt=V.length===1&&(c===X_||c!==W_&&xt);dt?au(i,ht,S,lt,X,C,A):V_(i,{cx:ht.cx,cz:ht.cz,hw:ht.hw+X,hd:ht.hd+X},S,lt*(ct+X)/ct,C),Y===0&&h&&!f&&q_(i,ht,S,dt?lt:lt*(ct+X)/ct,dt?0:X,E.heading)})}else{const k=U_(e,Math.min(2.4,Math.sqrt(y)*.2)),H=Math.min(_,1.6);for(let X=0;X<u;X++){const ht=(X+1)%u;i.quad(e[X*2],S,e[X*2+1],e[ht*2],S,e[ht*2+1],k[ht*2],S+H,k[ht*2+1],k[X*2],S+H,k[X*2+1],C)}i.cap(k,S+H,Ut(C,1.04))}}if(a!==Os&&y<2500&&!f){const z=F?1:Math.min(12,Math.max(1,Math.round(S/3))),W=a===zs?4.4:3.4;for(let V=0;V<u;V++){const k=(V+1)%u,H=e[V*2],X=e[V*2+1],ht=e[k*2],Y=e[k*2+1],ct=Math.hypot(ht-H,Y-X);if(ct<3.2)continue;let lt=-(Y-X)/ct,xt=(ht-H)/ct;lt*((H+ht)/2-M)+xt*((X+Y)/2-p)<0&&(lt=-lt,xt=-xt);const dt=Math.atan2(lt,xt),Pt=(ht-H)*Math.cos(dt)-(Y-X)*Math.sin(dt);i.frame(Pt>0?H:ht,g,Pt>0?X:Y,dt);const Yt=Math.floor(ct/W);for(let bt=0;bt<z;bt++){const ut=F+bt*3+.9;if(ut+1.3>S-.2)break;for(let vt=0;vt<Yt;vt++){const wt=(vt+.5)/Yt*ct;i.quad(wt-.8,ut,Yr,wt+.8,ut,Yr,wt+.8,ut+1.3,Yr,wt-.8,ut+1.3,Yr,B_,l()<.45?1:0)}}}}i.frame()}function Z_(i,t,e=[],n=()=>!1){const s=new Ie;s.name="buildings";const r=qn(),a=420,o=i.buildings,l=e.map(()=>{}),c=M=>{const p=o[M],g=new Array(p*2);for(let v=0;v<p*2;v++)g[v]=o[M+Qe+v]/10;return g},h=new Map;let f=0;for(let M=0;M<o.length;M+=Qe+o[M]*2){const p=o[M+Qe]/10,g=o[M+Qe+1]/10;if(n(p,g))continue;const v=e.findIndex(([y,E],x)=>!l[x]&&Math.abs(y-p)<60&&Math.abs(E-g)<60&&ou(c(M),y,E));if(v>=0){l[v]={poly:c(M),eave:o[M+1]/10,ridge:o[M+2]/10,roof:ru(o[M+3],o[M+4],o[M+5])},f++;continue}const S=`${Math.floor(p/a)}:${Math.floor(g/a)}`;let _=h.get(S);_||h.set(S,_=[]),_.push(M,f++)}let u=0;const d=[];for(const M of h.values()){const p=S=>{const _=new se;for(let E=0;E<M.length;E+=2){const x=M[E];$_(_,t,c(x),o[x+1]/10,o[x+2]/10,[o[x+3],o[x+4],o[x+5]],o[x+6]&3,(o[x+6]&4)!==0,Dn(M[E+1]*7919+13),o[x+6]>>3&3,(o[x+6]&32)!==0,S)}S||(u+=_.vertexCount/3);const y=new Qt(_.build(),r);return y.receiveShadow=!0,y.geometry.computeBoundingSphere(),y},g=p(!1),v=p(!0);g.castShadow=!0,v.visible=!1,d.push({full:g,plain:v}),s.add(g,v)}return{group:s,count:f,triangles:u,reserved:l,cull:(M,p,g,v)=>{for(const{full:S,plain:_}of d){const y=S.geometry.boundingSphere,E=Math.hypot(Math.max(0,Math.hypot(y.center.x-M,y.center.z-g)-y.radius),y.center.y-p)<v;S.visible=E,_.visible=!E}}}}function K_(i){const e=new Map;for(let n=0;n<i.length;n+=Qe+i[n]*2){const s=i[n];if(s<3)continue;const r=new Float32Array(s*2);let a=1/0,o=-1/0,l=1/0,c=-1/0;for(let h=0;h<s;h++){const f=r[h*2]=i[n+Qe+h*2]/10,u=r[h*2+1]=i[n+Qe+h*2+1]/10;a=Math.min(a,f),o=Math.max(o,f),l=Math.min(l,u),c=Math.max(c,u)}for(let h=Math.floor(a/16);h<=Math.floor(o/16);h++)for(let f=Math.floor(l/16);f<=Math.floor(c/16);f++){const u=`${h}_${f}`;let d=e.get(u);d||e.set(u,d=[]),d.push(r)}}return(n,s)=>{const r=e.get(`${Math.floor(n/16)}_${Math.floor(s/16)}`);if(!r)return!1;for(const a of r){let o=!1;for(let l=0,c=a.length/2-1;l<a.length/2;c=l++){const h=a[l*2],f=a[l*2+1],u=a[c*2],d=a[c*2+1];f>s!=d>s&&n<(u-h)*(s-f)/(d-f)+h&&(o=!o)}if(o)return!0}return!1}}const Kr=[{id:"6-beaudesert",house:[-27.5256631,153.0234391],street:[-27.5256287,153.0231545],lot:[[-27.5255518,153.0232401],[-27.5256698,153.0239981],[-27.5258215,153.0239682],[-27.525709,153.0231799]],roof:{ridgeBack:.62,frontGable:.83},walls:15261900,trim:16184558,path:[[-27.5256352,153.0232183],[-27.5256631,153.0233586]],driveway:[[-27.5256955,153.0231869],[-27.5257016,153.0232912],[-27.5257188,153.0233652],[-27.5257249,153.0234027]],fences:[{kind:"picket",height:1.05,pts:[[-27.5255562,153.0232457],[-27.5256803,153.0231991]],gate:[-27.5256352,153.0232168]},{kind:"paling",height:1,pts:[[-27.5255562,153.0232457],[-27.5255775,153.0233869]]},{kind:"paling",height:1.6,pts:[[-27.5255775,153.0233869],[-27.5256682,153.023989]]},{kind:"paling",height:1.2,pts:[[-27.5257208,153.0232735],[-27.525739,153.0234028]]},{kind:"paling",height:1.6,pts:[[-27.525739,153.0234028],[-27.525818,153.0239647]]},{kind:"paling",height:1.7,pts:[[-27.5256682,153.023989],[-27.525818,153.0239647]]}],clothesline:[-27.5256955,153.0236194],planters:[{at:[-27.5256844,153.0235368],along:1,across:2},{at:[-27.5257603,153.0236432],along:1.4,across:.8},{at:[-27.5257644,153.023671],along:1.4,across:.8},{at:[-27.5257669,153.0236964],along:1.4,across:.8}],beds:[{at:[-27.5255689,153.0232533],r:.9}],shrubs:[[-27.5256793,153.0232558],[-27.5256803,153.0232811],[-27.5256768,153.0232963]]},...[{id:"near-6-1rp130916",lotplan:"1RP130916",house:[-27.5257937,153.0233699],street:[-27.5257542,153.022967],lot:[[-27.525709,153.0231799],[-27.5257587,153.0235114],[-27.5259145,153.0234821],[-27.5258604,153.0231209]],roof:{ridgeBack:.6,frontGable:.85},walls:14673628,trim:16184558,ground:!1,path:[[-27.5257325,153.0231734]],driveway:[],fences:[{kind:"picket",height:1.05,pts:[[-27.5257094,153.0231824],[-27.5258607,153.0231234]],gate:[-27.5257325,153.0231734]},{kind:"paling",height:1,pts:[[-27.5258604,153.0231209],[-27.5258847,153.0232834]]},{kind:"paling",height:1.6,pts:[[-27.5258847,153.0232834],[-27.5259145,153.0234821]]},{kind:"paling",height:1.7,pts:[[-27.5257587,153.0235114],[-27.5259145,153.0234821]]}],planters:[],beds:[{at:[-27.5257737,153.0231716],r:.8}],shrubs:[[-27.5257542,153.0231739]],clothesline:[-27.5258173,153.0234773]},{id:"near-6-1rp65197",lotplan:"1RP65197",house:[-27.5255076,153.0234276],street:[-27.5253251,153.023492],lot:[[-27.5254526,153.0236459],[-27.5256101,153.0236149],[-27.5255518,153.0232401],[-27.525401,153.0232984]],roof:{ridgeBack:.5,frontGable:.78},walls:15854296,trim:7044970,ground:!1,path:[[-27.5254248,153.0234431]],driveway:[],fences:[{kind:"picket",height:1.05,pts:[[-27.5254548,153.0236455],[-27.5254032,153.023298]],gate:[-27.5254248,153.0234431]},{kind:"paling",height:1,pts:[[-27.5254526,153.0236459],[-27.5255235,153.023632]]},{kind:"paling",height:1.6,pts:[[-27.5255235,153.023632],[-27.5256101,153.0236149]]},{kind:"paling",height:1,pts:[[-27.525401,153.0232984],[-27.5254689,153.0232722]]},{kind:"paling",height:1.6,pts:[[-27.5254689,153.0232722],[-27.5255518,153.0232401]]}],planters:[],beds:[{at:[-27.52543,153.0233948],r:.8}],shrubs:[[-27.5254356,153.0234636],[-27.52544,153.023475],[-27.5254288,153.0234176]]},{id:"near-6-2rp130916",lotplan:"2RP130916",house:[-27.5258799,153.0237497],street:[-27.5253891,153.0238378],lot:[[-27.5258215,153.0239682],[-27.5259826,153.0239364],[-27.5259145,153.0234821],[-27.5257587,153.0235114]],roof:{ridgeBack:.68,frontGable:.9},walls:14278630,trim:16250867,ground:!1,path:[],driveway:[],fences:[{kind:"paling",height:1.6,pts:[[-27.5258215,153.0239682],[-27.5259826,153.0239364]]},{kind:"paling",height:1.7,pts:[[-27.5259826,153.0239364],[-27.5259145,153.0234821]]}],planters:[],beds:[],shrubs:[]},{id:"near-6-2rp65197",lotplan:"2RP65197",house:[-27.5255722,153.023788],street:[-27.5253935,153.0238617],lot:[[-27.5255095,153.0240298],[-27.5256698,153.0239981],[-27.5256101,153.0236149],[-27.5254526,153.0236459]],roof:{ridgeBack:.55,frontGable:.82},walls:15325636,trim:16183782,ground:!1,path:[[-27.5254785,153.0238054]],driveway:[],fences:[{kind:"picket",height:1.05,pts:[[-27.5255118,153.0240293],[-27.5254548,153.0236455]],gate:[-27.5254785,153.0238054]},{kind:"paling",height:1,pts:[[-27.5255095,153.0240298],[-27.5255817,153.0240155]]},{kind:"paling",height:1.6,pts:[[-27.5255817,153.0240155],[-27.5256698,153.0239981]]}],planters:[],beds:[{at:[-27.5254837,153.0237571],r:.8}],shrubs:[[-27.5254894,153.0238259],[-27.5254938,153.0238374],[-27.5254825,153.02378]]},{id:"near-6-1rp57597",lotplan:"1RP57597",house:[-27.5260974,153.0231818],street:[-27.5260521,153.0229065],lot:[[-27.526006,153.0230646],[-27.5260652,153.0234556],[-27.526205,153.0234288],[-27.5261444,153.0230111]],roof:{ridgeBack:.64,frontGable:.74},walls:13621455,trim:16052970,ground:!1,path:[[-27.5260559,153.023048]],driveway:[],fences:[{kind:"picket",height:1.05,pts:[[-27.5260064,153.0230671],[-27.5261448,153.0230136]],gate:[-27.5260559,153.023048]},{kind:"paling",height:1,pts:[[-27.526006,153.0230646],[-27.526021,153.0231639]]},{kind:"paling",height:1.6,pts:[[-27.526021,153.0231639],[-27.5260652,153.0234556]]},{kind:"paling",height:1,pts:[[-27.5261444,153.0230111],[-27.5261583,153.0231067]]},{kind:"paling",height:1.6,pts:[[-27.5261583,153.0231067],[-27.526205,153.0234288]]},{kind:"paling",height:1.7,pts:[[-27.5260652,153.0234556],[-27.526205,153.0234288]]}],planters:[],beds:[{at:[-27.5260972,153.0230463],r:.8}],shrubs:[[-27.5260384,153.0230637],[-27.5260286,153.0230707],[-27.5260777,153.0230486]],clothesline:[-27.5261107,153.0233059]}]],J_=$(3163994),lu=$(13815234),cu=$(2828068),hu=$(14867920),Jr=$(10126440),Q_=$(9405814),uu=$(10133668),j_=$(4151915),fu=$(9077624),t1=$(12894648),e1=$(10721922),du=$(7575375),pu=$(7904595),mu=$(7033664),ul=$(4157490),fl=$(8368216),n1=$(5062451),i1=2.75,gu=.45;function Qr(i,t,e,n){const s=t[3]-t[0],r=t[4]-t[1],a=t[5]-t[2],o=t[6]-t[0],l=t[7]-t[1],c=t[8]-t[2];let h=r*c-a*l,f=s*l-r*o;const u=Math.hypot(h,f)||1;h=h/u*e,f=f/u*e,i.quad(t[0]+h,t[1],t[2]+f,t[3]+h,t[4],t[5]+f,t[6]+h,t[7],t[8]+f,t[9]+h,t[10],t[11]+f,n),i.quad(t[9]-h,t[10],t[11]-f,t[6]-h,t[7],t[8]-f,t[3]-h,t[4],t[5]-f,t[0]-h,t[1],t[2]-f,n)}function xu(i,t,e,n,s,r){const a=[e[0][0],e[0][1]];for(let c=1;c<e.length;c++){const[h,f]=e[c-1],[u,d]=e[c],m=Math.max(1,Math.ceil(Math.hypot(u-h,d-f)/1.2));for(let M=1;M<=m;M++)a.push(h+(u-h)*M/m,f+(d-f)*M/m)}const o=a.length/2;let l=null;for(let c=0;c<o;c++){const h=Math.max(0,c-1),f=Math.min(o-1,c+1);let u=a[f*2]-a[h*2],d=a[f*2+1]-a[h*2+1];const m=Math.hypot(u,d)||1;u/=m,d/=m;const M=a[c*2]+d*n,p=a[c*2+1]-u*n,g=a[c*2]-d*n,v=a[c*2+1]+u*n,S=[M,t.yAt(M,p)+s,p,g,t.yAt(g,v)+s,v];l&&i.quad(l[0],l[1],l[2],l[3],l[4],l[5],S[3],S[4],S[5],S[0],S[1],S[2],r),l=S}}function s1(i,t,[e,n,s,r],a){const o=Math.hypot(n[0]-e[0],n[1]-e[1]),l=Math.hypot(r[0]-e[0],r[1]-e[1]),c=Math.ceil(o/.8),h=Math.ceil(l/1.5),f=(u,d)=>{const m=e[0]+(n[0]-e[0])*u,M=e[1]+(n[1]-e[1])*u,p=r[0]+(s[0]-r[0])*u,g=r[1]+(s[1]-r[1])*u,v=m+(p-m)*d,S=M+(g-M)*d;return[v,t.yAt(v,S)+a,S]};for(let u=0;u<c;u++)for(let d=0;d<h;d++){const m=f(u/c,d/h),M=f(u/c,(d+1)/h),p=f((u+1)/c,(d+1)/h),g=f((u+1)/c,d/h);(M[0]-m[0])*(g[2]-m[2])-(M[2]-m[2])*(g[0]-m[0])<0?i.quad(m[0],m[1],m[2],M[0],M[1],M[2],p[0],p[1],p[2],g[0],g[1],g[2],u%2?du:pu):i.quad(m[0],m[1],m[2],g[0],g[1],g[2],p[0],p[1],p[2],M[0],M[1],M[2],u%2?du:pu)}}function jr(i,t,e,n,s,r,a){const o=Math.hypot(n[0]-e[0],n[1]-e[1]);if(o<.3)return;const l=Math.max(1,Math.round(o/2.4)),c=Math.atan2(n[0]-e[0],n[1]-e[1]),h=r==="picket"?a:Q_,f=m=>{const M=e[0]+(n[0]-e[0])*m,p=e[1]+(n[1]-e[1])*m;return[M,t.yAt(M,p),p]};for(let m=0;m<=l;m++){const[M,p,g]=f(m/l);i.frame(M,p,g,c),i.box(-.06,0,-.06,.06,s+.1,.06,Ut(h,.92))}i.frame();const u=(m,M,p,g,v,S)=>{const _=f(m),y=f(M);Qr(i,[_[0],_[1]+p,_[2],y[0],y[1]+p,y[2],y[0],y[1]+g,y[2],_[0],_[1]+g,_[2]],S,v)};if(r==="paling"){for(let m=0;m<l;m++)u(m/l,(m+1)/l,.05,s,h,.02);return}for(const m of[.25,s-.2])u(0,1,m,m+.08,Ut(h,.95),.02);const d=Math.floor(o/.16);for(let m=0;m<d;m++)u((m+.2)/d,(m+.75)/d,.08,s,h,.035)}function r1(i,t,e,n,s){i.frame(t,e,n,s),i.box(-.035,0,-.035,.035,2.05,.035,uu);for(const[r,a]of[[1,0],[0,1],[-1,0],[0,-1]]){const o=Math.abs(a)*.025,l=Math.abs(r)*.025;i.box(Math.min(0,r*2.1)-o,2,Math.min(0,a*2.1)-l,Math.max(0,r*2.1)+o,2.05,Math.max(0,a*2.1)+l,uu)}for(const r of[.8,1.4,2]){const a=[[r,0],[0,r],[-r,0],[0,-r]];for(let o=0;o<4;o++){const[l,c]=a[o],[h,f]=a[(o+1)%4],u=Math.hypot(h-l,f-c),d=-(f-c)/u*.015,m=(h-l)/u*.015;i.quad(l-d,2.06,c-m,l+d,2.06,c+m,h+d,2.06,f+m,h-d,2.06,f-m,$(15132386))}}i.frame()}function _u(i,t,e,n,s,r,a,o,l,c){const h=o-l,f=Math.max(2,Math.round(h/.185)),u=.27,d=f*u;for(let p=1;p<=f;p++){const g=o-h*p/f,v=t+n*u*(p-1),S=e+s*u*(p-1),_=t+n*u*p,y=e+s*u*p;i.box(Math.min(v,_,v+r,_+r),g-.05,Math.min(S,y,S+a,y+a),Math.max(v,_,v+r,_+r),g,Math.max(S,y,S+a,y+a),Jr)}const m=t+n*d,M=e+s*d;for(const p of[0,1]){const g=r*p,v=a*p;Qr(i,[t+g,o-.3,e+v,m+g,l-.3,M+v,m+g,l,M+v,t+g,o,e+v],.025,c),Qr(i,[t+g,o+.9,e+v,m+g,l+.9,M+v,m+g,l+.97,M+v,t+g,o+.97,e+v],.025,c);for(const S of[0,.5,1]){const _=t+g+n*d*S,y=e+v+s*d*S,E=o-h*S;i.box(_-.035,E,y-.035,_+.035,E+.95,y+.035,c,null)}}return[m+r/2,M+a/2]}function vu(i,t,e,n,s,r=!1){const a=Xr(e.poly);let o=a.heading,l=a.w,c=a.d,h=-1/0;for(let z=0;z<4;z++){const W=a.heading+z*Math.PI/2,V=Math.sin(W)*(n[0]-a.cx)+Math.cos(W)*(n[1]-a.cz);V>h&&(h=V,o=W,l=z%2?a.d:a.w,c=z%2?a.w:a.d)}let f=1/0,u=-1/0;for(let z=0;z<e.poly.length;z+=2){const W=t.yAt(e.poly[z],e.poly[z+1]);f=Math.min(f,W),u=Math.max(u,W)}const d=Math.min(u,Math.max(f,t.yAt(a.cx,a.cz))),m=Math.max(e.eave-d,2.6),M=Math.max(e.ridge-e.eave,.8),p=Math.max(.3,m-i1),g=l/2,v=c/2,S=g-gu,_=v-gu,y=$(s.walls),E=$(s.trim),x=e.roof,b=f-d-.3,R=Math.max(.16,u-d+.14);i.frame(a.cx,d,a.cz,o);let w=[-S+1,_+1.4];if(r)p>1.2&&i.box(-S+.3,b,-_+.3,S-.3,p,_-.3,cu,null),i.box(-S,p>1.2?p-.28:b,-_,S,m,_,y,null);else{if(i.box(-S,b,-_,S,R,_,fu,fu),p>1.2){i.box(-S+.3,R,-_+.3,S-.3,p-.3,_-.3,cu,null);const ut=vt=>{const wt=Math.max(2,Math.round(vt*2/2.2)+1);return Array.from({length:wt},(Rt,Kt)=>-vt+.1+(vt*2-.2)*Kt/(wt-1))};for(const vt of ut(S))for(const wt of[-_+.1,_-.1])i.box(vt-.1,b,wt-.1,vt+.1,p-.28,wt+.1,lu,null);for(const vt of ut(_))for(const wt of[-S+.1,S-.1])i.box(wt-.1,b,vt-.1,wt+.1,p-.28,vt+.1,lu,null);for(let vt=-S+.3;vt<S-.3;vt+=.22)for(const wt of[_-.04,-_+.01])i.box(vt,R+.1,wt,vt+.12,p-.3,wt+.03,hu,null);for(let vt=-_+.3;vt<_-.3;vt+=.22)for(const wt of[S-.04,-S+.01])i.box(wt,R+.1,vt,wt+.03,p-.3,vt+.12,hu,null)}i.box(-S-.03,p-.28,-_-.03,S+.03,p,_+.03,E,null);for(let ut=p,vt=0;ut<m-.01;ut+=.28,vt++)i.box(-S,ut,-_,S,Math.min(ut+.28,m),_,vt%2?Ut(y,.955):y,null);for(const ut of[-S,S])for(const vt of[-_,_])i.box(ut-.07,p,vt-.07,ut+.07,m,vt+.07,E,null);const z=(ut,vt,wt)=>i.frame(i.wx(ut,vt),d,i.wz(ut,vt),o+wt),W=(ut,vt,wt)=>{const Rt=p+.95,Kt=p+2.15;i.quad(ut-vt/2,Rt,.04,ut+vt/2,Rt,.04,ut+vt/2,Kt,.04,ut-vt/2,Kt,.04,J_,wt?1:0),i.box(ut-vt/2-.07,Rt-.07,0,ut+vt/2+.07,Rt,.07,E),i.box(ut-vt/2-.07,Kt,0,ut+vt/2+.07,Kt+.07,.07,E);for(const ve of[ut-vt/2-.07,ut+vt/2,ut-.025])i.box(ve,Rt,0,ve+(ve===ut-.025?.05:.07),Kt,.06,E,null);i.quad(ut-vt/2-.15,Kt+.12,.55,ut+vt/2+.15,Kt+.12,.55,ut+vt/2+.15,Kt+.42,.02,ut-vt/2-.15,Kt+.42,.02,Ut(x,.94))},V=ut=>{i.quad(ut-.45,p,.04,ut+.45,p,.04,ut+.45,p+2.05,.04,ut-.45,p+2.05,.04,j_),i.box(ut-.52,p+2.05,0,ut+.52,p+2.12,.06,E)},k=[[-S,_,0,S*2],[S,_,Math.PI/2,_*2],[S,-_,Math.PI,S*2],[-S,-_,-Math.PI/2,_*2]],[H,X,ht,Y]=k,ct=(ut,vt)=>{i.frame(a.cx,d,a.cz,o),z(ut[0],ut[1],ut[2]),vt(ut[3]),i.frame(a.cx,d,a.cz,o)};ct(H,ut=>{V(1),W(ut*.48,1.7,!0),W(ut*.8,1.7,!1)});for(const ut of[X,Y])ct(ut,vt=>{for(let wt=0;wt<4;wt++)W(vt*(.14+wt*.24),1.4,wt%2===(ut===X?0:1))});ct(ht,ut=>{W(ut*.28,1.6,!1),W(ut*.56,1.6,!0),V(ut-1)});const lt=-S+.15,xt=-S+1.85,dt=_+1.25;i.box(lt,p-.14,_,xt,p,dt,Jr);for(const ut of[lt+.05,xt-.05])i.box(ut-.05,0,dt-.1,ut+.05,p+2.3,dt,E,null);i.box(lt,p+.12,dt-.05,xt,p+.98,dt,E,null),i.box(lt,p+.12,_,lt+.05,p+.98,dt,E,null),i.quad(lt-.15,p+2.3,dt+.2,xt+.15,p+2.3,dt+.2,xt+.15,p+2.6,_,lt-.15,p+2.6,_,Ut(x,.96)),w=_u(i,xt,_+.12,1,0,0,1,p,.1,E);const Pt=-S+.2,Yt=-S+1.9,bt=-_-1.2;i.box(Pt,p-.14,bt,Yt,p,-_,Jr);for(const ut of[Pt+.05,Yt-.05])i.box(ut-.05,0,bt,ut+.05,p+.98,bt+.1,E,null);i.box(Pt,p+.12,bt,Pt+.05,p+.98,-_,E,null),i.box(Yt-.05,p+.12,bt,Yt,p+.98,-_,E,null),i.box(-S+.1,m-.45,-_-1.4,S-1.4,m-.37,-_,Ut(x,.97),void 0,E),_u(i,Pt+.3,bt,0,-1,1,0,p,.1,E)}const L=v-s.roof.ridgeBack*c,C=m+M,D=m+M*s.roof.frontGable,A=v-s.roof.frontGable*(v-L);i.quad(-g,m-.02,v,-g,m-.02,-v,g,m-.02,-v,g,m-.02,v,E),i.tri(-g,m,v,0,D,v,0,D,A,x),i.tri(g,m,v,0,D,A,0,D,v,x),i.quad(-g,m,v,0,D,A,0,C,L,-g,C,L,x),i.quad(g,m,v,g,C,L,0,C,L,0,D,A,x),i.quad(-g,C,L,g,C,L,g,m,-v,-g,m,-v,x),i.tri(-S,m,_,S,m,_,0,D,_,y),r||i.quad(-.3,D-.75,_+.03,.3,D-.75,_+.03,.3,D-.4,_+.03,-.3,D-.4,_+.03,Ut(y,.6)),i.tri(-S,m,_,-S,C,L,-S,m,-_,y),i.tri(S,m,-_,S,C,L,S,m,_,y);const F=(z,W,V,k,H,X)=>Qr(i,[z,W-.22,V,k,H-.22,X,k,H-.03,X,z,W-.03,V],.02,E);if(!r){F(-g,m,v,0,D,v),F(0,D,v,g,m,v);for(const z of[-g,g])F(z,m,v,z,C,L),F(z,C,L,z,m,-v);i.box(-g,m-.12,-v-.1,g,m,-v,E)}const G=[i.wx(w[0],w[1]),i.wz(w[0],w[1])];return i.frame(),G}function a1(i,t){const e=Kr.flatMap((n,s)=>{const r=t[s];if(!r)return[];const a=Xr(r.poly),o=c=>Yn(i,c[0],c[1]),l=[a.cx,a.cz];return[{obb:a,lines:[[...n.path.map(o),l],n.driveway.map(o)]}]});return(n,s)=>{for(const{obb:r,lines:a}of e){if(Math.abs(n-r.cx)>80||Math.abs(s-r.cz)>80)continue;const o=Math.cos(r.heading),l=Math.sin(r.heading),c=n-r.cx,h=s-r.cz;if(Math.abs(c*o-h*l)<r.w/2+1&&Math.abs(c*l+h*o)<r.d/2+1)return!0;for(const f of a)for(let u=1;u<f.length;u++){const[d,m]=f[u-1],[M,p]=f[u],g=Math.max(0,Math.min(1,((n-d)*(M-d)+(s-m)*(p-m))/((M-d)**2+(p-m)**2||1)));if(Math.hypot(n-d-(M-d)*g,s-m-(p-m)*g)<1.8)return!0}}return!1}}function Mu(i){const t=Kr.map(e=>e.lot.map(n=>Yn(i,n[0],n[1])));return(e,n)=>t.some(s=>{let r=!1,a=!1;for(let o=0,l=s.length-1;o<s.length;l=o++){const[c,h]=s[o],[f,u]=s[l];h>n!=u>n&&e<(f-c)*(n-h)/(u-h)+c&&(r=!r);const d=Math.max(0,Math.min(1,((e-c)*(f-c)+(n-h)*(u-h))/((f-c)**2+(u-h)**2||1)));Math.hypot(e-c-(f-c)*d,n-h-(u-h)*d)<2.5&&(a=!0)}return r||a})}function o1(i){return Kr.map(t=>Yn(i,t.house[0],t.house[1]))}function l1(i,t,e){const n=new se,s=h=>Yn(i,h[0],h[1]),r=new Ie;r.name="detail";const a=qn(),o=[];Kr.forEach((h,f)=>{const u=e[f];if(!u)return;const d=new se,m=new se;vu(m,t,u,s(h.street),h,!0);const M=h.lot.map(s),p=$(h.trim),g=Math.atan2(M[1][0]-M[0][0],M[1][1]-M[0][1]);h.ground!==!1&&s1(n,t,M,.1);const v=vu(d,t,u,s(h.street),h);h.path.length&&xu(n,t,[...h.path.map(s),v],.45,.16,t1);const S=h.driveway.map(s);for(const x of S.length>1?[-.75,.75]:[]){const b=S.map(([R,w],L)=>{const[C,D]=S[Math.max(0,L-1)],[A,F]=S[Math.min(S.length-1,L+1)],G=Math.hypot(A-C,F-D)||1;return[R+(F-D)/G*x,w-(A-C)/G*x]});xu(n,t,b,.28,.14,e1)}for(const x of h.fences){const b=x.pts.map(s);for(let R=1;R<b.length;R++){const w=b[R-1],L=b[R];if(!x.gate){jr(d,t,w,L,x.height,x.kind,p);continue}const C=s(x.gate),D=Math.hypot(L[0]-w[0],L[1]-w[1]),A=((C[0]-w[0])*(L[0]-w[0])+(C[1]-w[1])*(L[1]-w[1]))/(D*D),F=.5/D,G=V=>[w[0]+(L[0]-w[0])*V,w[1]+(L[1]-w[1])*V];jr(d,t,w,G(A-F),x.height,x.kind,p),jr(d,t,G(A+F),L,x.height,x.kind,p),jr(d,t,G(A-F+.06/D),G(A+F-.06/D),x.height-.15,x.kind,p);const[z,W]=G(A+F+.35/D);d.frame(z,t.yAt(z,W),W,Math.atan2(L[0]-w[0],L[1]-w[1])),d.box(-.04,0,-.04,.04,1,.04,p,null),d.box(-.14,1,-.2,.14,1.22,.2,$(4872786)),d.frame()}}if(h.clothesline){const[x,b]=s(h.clothesline);r1(d,x,t.yAt(x,b),b,g+Math.PI/4)}for(const x of h.planters){const[b,R]=s(x.at);d.frame(b,t.yAt(b,R),R,g),d.box(-x.across/2,0,-x.along/2,x.across/2,.4,x.along/2,Jr,n1);for(let w=0;w<3;w++)d.blob((w-1)*x.across/3.4,.5,(w%2-.5)*x.along*.4,.22,.2,.22,5,3,ul,fl);d.frame()}for(const x of h.beds){const[b,R]=s(x.at);d.frame(b,t.yAt(b,R),R,0),d.cyl(0,.05,0,x.r,x.r,.12,10,mu,mu),d.blob(0,.55,0,x.r*.6,.5,x.r*.6,6,4,ul,fl),d.frame()}for(const x of h.shrubs){const[b,R]=s(x);d.frame(b,t.yAt(b,R),R,0),d.blob(0,.32,0,.38,.36,.38,6,4,ul,fl),d.frame()}const _=x=>(x.index?x.index.count:x.getAttribute("position").count)/3,y=new Qt(d.build(),a),E=new Qt(m.build(),a);y.castShadow=y.receiveShadow=E.receiveShadow=!0,y.geometry.computeBoundingSphere(),E.visible=!1,r.add(y,E),o.push({id:h.id,near:y,far:E,c:y.geometry.boundingSphere.center,r:y.geometry.boundingSphere.radius,triangles:[_(y.geometry),_(E.geometry)]})});const l=n.build();l.deleteAttribute("glow");const c=new Qt(l,new Ye({vertexColors:!0,roughness:.95,metalness:0,side:we,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}));return c.receiveShadow=!0,c.name="detail-ground",r.add(c),{group:r,ground:c,cost:o.map(h=>({id:h.id,full:h.triangles[0],plain:h.triangles[1]})),cull(h,f,u,d){for(const m of o){const M=Math.hypot(Math.max(0,Math.hypot(m.c.x-h,m.c.z-u)-m.r),m.c.y-f)<d;m.near.visible=M,m.far.visible=!M}}}}const dl=1.6;function Su(i,t,e,n,s){return i.filter(r=>{const a=r.w/2+dl;for(let o=0;o+1<r.p.length;o+=2){const l=Math.min(o+2,r.p.length-2);if(Math.max(r.p[o],r.p[l])+a>t&&Math.min(r.p[o],r.p[l])-a<n&&Math.max(r.p[o+1],r.p[l+1])+a>e&&Math.min(r.p[o+1],r.p[l+1])-a<s)return!0}return!1})}function c1(i,t,e,n,s){return(r,a,o,l,c)=>{const h=n/l,f=s/c;for(const u of i){const d=u.w/2,m=d+dl,M=u.k-1,p=u.p.length/2;for(let g=0;g<Math.max(1,p-1);g++){const v=u.p[g*2],S=u.p[g*2+1],_=Math.min(g+1,p-1),y=u.p[_*2],E=u.p[_*2+1],x=y-v,b=E-S,R=x*x+b*b,w=Math.max(0,Math.floor((Math.min(v,y)-m-t)/h)),L=Math.min(l-1,Math.ceil((Math.max(v,y)+m-t)/h)),C=Math.max(c-a-o,Math.floor((Math.min(S,E)-m-e)/f)),D=Math.min(c-1-a,Math.ceil((Math.max(S,E)+m-e)/f));for(let A=C;A<=D;A++){const F=e+(A+.5)*f,G=(c-1-A-a)*l*4;for(let z=w;z<=L;z++){const W=t+(z+.5)*h,V=R>0?Math.max(0,Math.min(1,((W-v)*x+(F-S)*b)/R)):0,k=Math.hypot(W-v-x*V,F-S-b*V)-d;if(k>dl)continue;const H=G+z*4,X=Math.max(0,Math.min(255,Math.round(128-80*k))),ht=Math.max(0,Math.min(255,Math.round(128+80*k)));for(let Y=0;Y<3;Y++)Y===M?r[H+Y]=Math.max(r[H+Y],X):r[H+Y]=Math.min(r[H+Y],ht)}}}}}}const yu=[9405814,8747884,10129796,7305836,13617332,6253414,9080716].map($),ta=1.6,bu=560;function h1(i,t,e){const n=new Ie;n.name="fences";const s=i.fences,r=new Map;for(let l=0;l+3<s.length;l+=4){const c=s[l]/10,h=s[l+1]/10,f=s[l+2]/10,u=s[l+3]/10,d=Math.hypot(f-c,u-h);if(d<1||e((c+f)/2,(h+u)/2))continue;const m=`${Math.floor(c/bu)}:${Math.floor(h/bu)}`;let M=r.get(m);M||r.set(m,M=new se);const p=yu[l/4%yu.length],g=Ut(p,.92),v=-(u-h)/d*.04,S=(f-c)/d*.04,_=Math.max(1,Math.ceil(d/5));let y=c,E=h,x=t.yAt(c,h);for(let b=1;b<=_;b++){const R=c+(f-c)*b/_,w=h+(u-h)*b/_,L=t.yAt(R,w);M.quad(y+v,x-.2,E+S,R+v,L-.2,w+S,R+v,L+ta,w+S,y+v,x+ta,E+S,p),M.quad(R-v,L-.2,w-S,y-v,x-.2,E-S,y-v,x+ta,E-S,R-v,L+ta,w-S,g),y=R,E=w,x=L}}const a=new $c({vertexColors:!0});let o=0;for(const l of r.values()){o+=l.vertexCount/6;const c=l.build();c.deleteAttribute("glow");const h=new Qt(c,a);h.castShadow=!0,h.receiveShadow=!0,n.add(h)}return{group:n,count:o}}const Eu=.05;class pl{constructor(t,e,n){et(this,"mesh");et(this,"current","");et(this,"level");et(this,"wet");et(this,"time",{value:0});et(this,"lower",{value:0});et(this,"loaded",new Map);this.hf=t,this.info=e,this.file=n;const{nx:s,nz:r}=t,a=s*r;this.level=new Float32Array(a),this.wet=new Uint8Array(a);const o=new Float32Array(a*3),l=new Float32Array(a*3);for(let f=0;f<r;f++)for(let u=0;u<s;u++){const d=f*s+u;o[d*3]=t.xMin+u*t.dx,o[d*3+1]=t.y[d],o[d*3+2]=t.zMin+f*t.dz,l[d*3+1]=1}const c=new Re;c.setAttribute("position",new Pe(o,3)),c.setAttribute("normal",new Pe(l,3)),c.setAttribute("aLevel",new Pe(this.level,1)),c.setAttribute("aWet",new Pe(new Float32Array(a),1)),c.setIndex([]);const h=new Ye({color:16777215,roughness:.25,metalness:0,transparent:!0,depthWrite:!1});h.onBeforeCompile=f=>{f.uniforms.uTime=this.time,f.uniforms.uLower=this.lower,f.uniforms.uNight=es,f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
attribute float aLevel;
attribute float aWet;
uniform float uLower;
varying float vDepth;
varying float vWet;
varying vec3 vWPos;`).replace("#include <begin_vertex>",`vec3 transformed = vec3(position.x, aLevel - uLower, position.z);
vDepth = aLevel - uLower - position.y;
vWet = aWet;
vWPos = transformed;`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uNight;
varying float vDepth;
varying float vWet;
varying vec3 vWPos;`).replace("#include <color_fragment>",`#include <color_fragment>
          if (vDepth < ${Eu.toFixed(2)} || vWet < 0.35) discard;
          // pale and a little muddy where it is shallow, dark blue as it deepens, so it reads as water against the ground
          float deep = smoothstep(0.1, 3.0, vDepth);
          diffuseColor.rgb = mix(vec3(0.36, 0.60, 0.74), vec3(0.05, 0.18, 0.40), deep) * (1.0 - 0.6 * uNight);
          diffuseColor.a = mix(0.7, 0.93, smoothstep(0.1, 1.5, vDepth));`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          {
            float nearby = 1.0 - smoothstep(200.0, 1500.0, length(cameraPosition - vWPos));
            vec2 p = vWPos.xz * 0.12 + vec2(uTime * 0.07, uTime * 0.04);
            vec2 ripple = vec2(sin(p.x * 3.1 + sin(p.y * 2.3)), cos(p.y * 2.7 + sin(p.x * 1.9))) * 0.035 * nearby;
            normal = normalize((viewMatrix * vec4(ripple.x, 1.0, ripple.y, 0.0)).xyz);
          }`)},h.customProgramCacheKey=()=>"moorooka-flood-levels",this.mesh=new Qt(c,h),this.mesh.name="flood",this.mesh.renderOrder=40,this.mesh.frustumCulled=!1,this.mesh.visible=!1}static async load(t,e,n,s){const r=await fetch(e,{signal:s});if(!r.ok)throw new Error("Could not load the floods");return new pl(t,await r.json(),n)}async show(t,e){if(this.current=t,!t){this.mesh.visible=!1;return}let n=this.loaded.get(t);if(!n){const l=this.info.events.some(p=>p.id===t)?this.file(t):void 0;if(!l)throw new Error("This model has no such flood");const c=await fetch(l,{signal:e});if(!c.ok)throw new Error("Could not load that flood");const h=await Jh(await c.arrayBuffer()),[f,u]=this.info.grid;if(h.width!==f||h.height!==u)throw new Error("That flood does not match this model");const{hf:d}=this,m=Math.round(d.dx/(d.sizeX/f)),M=d.nx*d.nz;n={level:new Float32Array(M),wet:new Uint8Array(M)};for(let p=0;p<d.nz;p++)for(let g=0;g<d.nx;g++){const v=(p*m*f+g*m)*h.channels;n.level[p*d.nx+g]=(h.data[v]<<8|h.data[v+1])/this.info.levelScale-this.info.levelOffset,n.wet[p*d.nx+g]=h.data[v+2]>127?1:0}this.loaded.set(t,n)}if(this.current!==t)return;const{nx:s,nz:r}=this.hf,a=this.mesh.geometry;this.level.set(n.level),this.wet.set(n.wet),a.getAttribute("aWet").array.set(n.wet),a.getAttribute("aLevel").needsUpdate=!0,a.getAttribute("aWet").needsUpdate=!0;const o=[];for(let l=0;l<r-1;l++)for(let c=0;c<s-1;c++){const h=l*s+c,f=h+1,u=h+s,d=u+1;n.wet[h]+n.wet[f]+n.wet[u]+n.wet[d]>0&&o.push(h,u,f,f,u,d)}a.setIndex(o),this.mesh.visible=!0}setLower(t){this.lower.value=Math.max(0,t)}surfaceAt(t,e,n=!1){const{hf:s}=this;if(!this.mesh.visible||!s.inside(t,e))return-1/0;const r=Math.round((e-s.zMin)/s.dz)*s.nx+Math.round((t-s.xMin)/s.dx);if(!this.wet[r])return-1/0;const a=this.level[r]-(n?0:this.lower.value);return a-s.y[r]>Eu?a:-1/0}tick(t){this.time.value=t}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}const Bs=$(9278358),ml=$(16053230),wu=$(3163994),u1=$(2054824),f1=$(16040479),Au=[15327951,3099196,2504783,8007210,3816770,13214282,5209226,11879727].map($);function d1(i,t,e,n,s=()=>!1){const r=new se,a=Dn(41050),o=i.busStops??[];for(let u=0;u<o.length;u+=2){const d=o[u]/10,m=o[u+1]/10,M=e.nearest(d,m,30);if(!M||n(d,m))continue;let p=d-M.px,g=m-M.pz;const v=Math.hypot(p,g);v<.5?(p=-M.tz,g=M.tx):(p/=v,g/=v);const S=M.width/2+2.4,_=M.px+p*S,y=M.pz+g*S;if(r.frame(_,t.yAt(_,y),y,Math.atan2(-p,-g)),r.box(-2.3,0,.9,-2.2,2.6,1,Bs,null),r.box(-2.5,2,.88,-2,2.6,1.02,u1),r.box(-2.5,1.86,.88,-2,2,1.02,f1),a()<.5){for(const E of[-1.7,1.7])r.box(E-.05,0,-.6,E+.05,2.35,-.5,Bs,null);r.box(-1.9,2.35,-.8,1.9,2.45,.8,Ut(Bs,.8)),r.box(-1.7,.5,-.62,1.7,2.1,-.58,wu,null),r.box(-1.3,.42,-.5,1.3,.5,-.1,$(10126440))}}for(const u of i.pitches){const d=u.p.map(v=>v/10),m=Xr(d);if(n(m.cx,m.cz))continue;const M=m.w>=m.d?m.w:m.d,p=Math.min(m.w,m.d),g=m.w>=m.d?m.heading+Math.PI/2:m.heading;if(r.frame(m.cx,t.yAt(m.cx,m.cz),m.cz,g),u.t==="Oval"&&/Football/.test(u.s)&&M>60)for(const v of[-1,1]){const S=v*(M/2-4);for(const _ of[-2.8,2.8])r.cyl(_,0,S,.08,.08,8,5,ml);r.box(-2.8,2.9,S-.05,2.8,3.02,S+.05,ml)}else if(u.s==="Tennis"){r.box(-p/2+.6,0,-.03,p/2-.6,.95,.03,$(2764595)),r.box(-p/2+.6,.95,-.04,p/2-.6,1.02,.04,ml);for(const v of[-p/2+.6,p/2-.6])r.cyl(v,0,0,.05,.05,1.07,5,Bs)}else if(u.s==="Netball")for(const v of[-1,1]){const S=v*(M/2-.3);r.cyl(0,0,S,.05,.05,3.05,5,Bs),r.box(-.2,3.02,S-v*.42,.2,3.07,S,$(13644844))}}r.frame();const[,l]=Yn(i.meta,-27.53,153.0245),[,c]=Yn(i.meta,-27.5346,153.0245),h=i.buildings;for(let u=0;u<h.length;u+=Qe+h[u]*2){const d=h[u],m=h[u+Qe+1]/10;if(m<l||m>c)continue;let M=0,p=0;for(let v=0;v<d;v++)M+=h[u+Qe+v*2]/10,p+=h[u+Qe+v*2+1]/10;M/=d,p/=d;const g=Au[Math.floor(a()*Au.length)];for(let v=0;v<d;v++){const S=(v+1)%d,_=h[u+Qe+v*2]/10,y=h[u+Qe+v*2+1]/10,E=h[u+Qe+S*2]/10,x=h[u+Qe+S*2+1]/10,b=Math.hypot(E-_,x-y);if(b<5)continue;const R=(_+E)/2,w=(y+x)/2,L=e.nearest(R,w,16);if(!L||i.names[L.name]!=="Beaudesert Road"||n(R,w)||s(R,w))continue;let C=-(x-y)/b,D=(E-_)/b;if(C*(R-M)+D*(w-p)<0&&(C=-C,D=-D),(L.px-R)*C+(L.pz-w)*D<L.dist*.6)continue;const A=Math.atan2(C,D),F=(E-_)*Math.cos(A)-(x-y)*Math.sin(A),G=Math.max(t.yAt(_,y),t.yAt(E,x))+.1;r.frame(F>0?_:E,G,F>0?y:x,A);const z=Math.min(2.6,Math.max(1.2,L.dist-L.width/2-.6));r.quad(.4,.4,.06,b-.4,.4,.06,b-.4,2.7,.06,.4,2.7,.06,wu,.9),r.box(.2,3,0,b-.2,3.16,z,g,Ut(g,.9),Ut(g,.75)),r.box(.2,2.75,z-.08,b-.2,3.3,z,Ut(g,1.15),null)}}r.frame();const f=new Qt(r.build(),qn());return f.castShadow=!0,f.receiveShadow=!0,f.name="furniture",f}const rs=$(12170925),Tu=$(13091768),p1=[.02,.02,.02,.02],ea=.22,m1=.13,g1=1.1,gl=1.3,Ru=16;function x1(i,t,e,n,s={}){const r=new Map,a=new Map,o=(y,E)=>`${Math.floor((E+e.sizeZ/2)/e.sizeZ*Ru)}_${Math.floor((y+e.sizeX/2)/e.sizeX*Ru)}`,l=y=>(E,x)=>{const b=o(E,x);let R=y.get(b);return R||y.set(b,R=new se),R},c=l(r),h=l(a),f=(y,E,x)=>!e.inside(y,E,4)||n(y,E)?!1:t.clear(y,E,14,x);i.forEach((y,E)=>{if(y.cls>3||y.flags&(Vr|Ns))return;const x=y.pts.length/3,b=y.width/2,R=p1[y.cls],w=s[String(y.index)];for(const L of[-1,1]){const C=w?w[L>0?0:1]/10:NaN,D=w?C>0:y.cls<=2||(E%2?1:-1)===L,A=w?Math.max(ea+.1,C-gl/2):ea+g1;let F=null;for(let G=0;G<x;G++){const z=y.pts[G*3],W=y.pts[G*3+2],V=Math.max(G-1,0),k=Math.min(G+1,x-1);let H=y.pts[k*3]-y.pts[V*3],X=y.pts[k*3+2]-y.pts[V*3+2];const ht=Math.hypot(H,X)||1;H/=ht,X/=ht;const Y=-X*L,ct=H*L,lt=Dt=>[z+Y*(b+Dt),W+ct*(b+Dt)],[xt,dt]=lt(0),[Pt,Yt]=lt(ea),[bt,ut]=lt(ea/2),vt=e.yAt(xt,dt)+R,wt=e.yAt(Pt,Yt),Rt=[xt,vt,dt,Pt,Math.max(vt,wt+.05)+m1,Yt,wt],Kt=f(bt,ut,.02),[ve,ae]=lt(A),[Ae,he]=lt(A+gl),[Me,Oe]=lt(A+gl/2),ue=[ve,e.yAt(ve,ae)+.09,ae,Ae,e.yAt(Ae,he)+.09,he],Z=D&&f(Me,Oe,.6)&&f(Ae,he,.3);if(F){const Dt=F;if(Kt&&Dt.kerb){const te=h(bt,ut),$t=Rt[4],gt=Dt.k[4];L>0?(te.quad(Dt.k[0],Dt.k[1],Dt.k[2],Rt[0],Rt[1],Rt[2],Rt[0],$t,Rt[2],Dt.k[0],gt,Dt.k[2],Ut(rs,.9)),te.quad(Dt.k[0],gt,Dt.k[2],Rt[0],$t,Rt[2],Rt[3],$t,Rt[5],Dt.k[3],gt,Dt.k[5],rs),te.quad(Dt.k[3],gt,Dt.k[5],Rt[3],$t,Rt[5],Rt[3],Rt[6]-.3,Rt[5],Dt.k[3],Dt.k[6]-.3,Dt.k[5],Ut(rs,.85))):(te.quad(Rt[0],Rt[1],Rt[2],Dt.k[0],Dt.k[1],Dt.k[2],Dt.k[0],gt,Dt.k[2],Rt[0],$t,Rt[2],Ut(rs,.9)),te.quad(Rt[0],$t,Rt[2],Dt.k[0],gt,Dt.k[2],Dt.k[3],gt,Dt.k[5],Rt[3],$t,Rt[5],rs),te.quad(Rt[3],$t,Rt[5],Dt.k[3],gt,Dt.k[5],Dt.k[3],Dt.k[6]-.3,Dt.k[5],Rt[3],Rt[6]-.3,Rt[5],Ut(rs,.85)))}if(Z&&Dt.path){const te=G%2?Tu:Ut(Tu,.955),$t=c(Me,Oe);L>0?$t.quad(Dt.f[0],Dt.f[1],Dt.f[2],ue[0],ue[1],ue[2],ue[3],ue[4],ue[5],Dt.f[3],Dt.f[4],Dt.f[5],te):$t.quad(ue[0],ue[1],ue[2],Dt.f[0],Dt.f[1],Dt.f[2],Dt.f[3],Dt.f[4],Dt.f[5],ue[3],ue[4],ue[5],te)}}F={k:Rt,kerb:Kt,f:ue,path:Z}}}});const u=new Ye({vertexColors:!0,roughness:.94,metalness:0,side:we,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),d=(y,E)=>{const x=y.build();x.deleteAttribute("glow");const b=new Qt(x,u);return b.receiveShadow=!0,b.name=E,b},m=new Ie;m.name="kerbs";const M=new Map,p=[];for(const[y,E]of a){const x=d(E,`kerb ${y}`);x.geometry.computeBoundingSphere(),p.push(x),m.add(x)}for(const[y,E]of r){const x=d(E,`footpaths ${y}`);x.geometry.computeBoundingSphere(),M.set(y,x),m.add(x)}let g=new Set,v=null;const S=y=>{if(!v)return!0;const E=y.geometry.boundingSphere;return Math.hypot(Math.max(0,Math.hypot(E.center.x-v[0],E.center.z-v[2])-E.radius),E.center.y-v[1])<v[3]},_=()=>{let y=!1;const E=(x,b)=>{x.visible!==b&&(x.visible=b,y=!0)};for(const x of p)E(x,S(x));for(const[x,b]of M)E(b,!g.has(x)&&S(b));return y};return{group:m,showPaths(y){return g=y,_()},cull(y,E,x,b){return v=[y,E,x,b],_()}}}function _1(i,t){const e=new se,n=$(9278358);e.cyl(0,0,0,.11,.07,8.2,5,n),e.box(-.05,8.1,0,.05,8.22,2.2,n),e.box(-.22,8,1.7,.22,8.14,2.5,$(5922659)),e.quad(-.2,7.99,2.48,.2,7.99,2.48,.2,7.99,1.72,-.2,7.99,1.72,$(16773320),3);const s=i.length/4,r=new rn(e.build(),qn(),s),a=document.createElement("canvas");a.width=a.height=64;const o=a.getContext("2d"),l=o.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(255,214,150,0.85)"),l.addColorStop(.45,"rgba(255,196,120,0.32)"),l.addColorStop(1,"rgba(255,180,100,0)"),o.fillStyle=l,o.fillRect(0,0,64,64);const c=new Rr(a);c.colorSpace=Te;const h=new ci(34,34);h.rotateX(-Math.PI/2);const f=new Wn({map:c,transparent:!0,opacity:0,blending:ma,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),u=new rn(h,f,s);u.renderOrder=3;const d=new jt,m=new on,M=new Q(0,1,0),p=new Q(1,1,1),g=new Q;for(let v=0;v<s;v++){const S=i[v*4],_=i[v*4+1],y=i[v*4+2],E=i[v*4+3];m.setFromAxisAngle(M,E),r.setMatrixAt(v,d.compose(g.set(S,_,y),m,p));const x=S+Math.sin(E)*2.1,b=y+Math.cos(E)*2.1;u.setMatrixAt(v,d.compose(g.set(x,t.yAt(x,b)+.5,b),m.identity(),p))}return r.castShadow=!1,r.computeBoundingSphere(),u.computeBoundingSphere(),u.onBeforeRender=()=>{f.opacity=es.value*.9},u.visible=!0,{lights:r,pools:u,poolMat:f}}const na=[16053490,16053490,16053490,13225168,10725291,5593438,2040100,2838410,11020586,2054728,14266938,8368595],ks=$(1381655),Cu=$(10133154),xl=$(1713198);function Pu(i,t,e,n,s,r,a,o=8){const l=t-r/2*a,c=t+r/2*a;for(let u=0;u<o;u++){const d=u/o*Math.PI*2,m=(u+1)/o*Math.PI*2,M=e+Math.cos(d)*s,p=n+Math.sin(d)*s,g=e+Math.cos(m)*s,v=n+Math.sin(m)*s;a>0?(i.quad(l,M,p,l,g,v,c,g,v,c,M,p,ks),i.tri(c,e,n,c,M,p,c,g,v,ks)):(i.quad(l,g,v,l,M,p,c,M,p,c,g,v,ks),i.tri(c,e,n,c,g,v,c,M,p,ks))}const h=s*.52,f=c+.012*a;a>0?i.quad(f,e-h,n-h,f,e-h,n+h,f,e+h,n+h,f,e+h,n-h,Cu):i.quad(f,e-h,n+h,f,e-h,n-h,f,e+h,n-h,f,e+h,n+h,Cu)}function ia(i,t,e,n,s,r,a,o,l=0){i.quad(r,e,t,r,s,n,a,s,n,a,e,t,o,l)}function Lu(i,t,e,n,s){const[r,a]=t[0];for(let o=1;o<t.length-1;o++){const[l,c]=t[o],[h,f]=t[o+1];n>0?i.tri(e,a,r,e,f,h,e,c,l,s):i.tri(e,a,r,e,c,l,e,f,h,s)}}function Du(){const i=new se,t=$(16777215),e=$(2763824),n=.88,s=[[-2.1,.28],[-2.16,.6],[-2.06,.94],[-1.3,.99],[1.05,.97],[1.95,.84],[2.16,.6],[2.1,.28]];for(let o=0;o<s.length-1;o++)ia(i,s[o][0],s[o][1],s[o+1][0],s[o+1][1],-n,n,o===0||o===s.length-2?Ut(t,.92):t);for(const o of[-1,1])Lu(i,s,n*o,o,t);i.quad(-n,.28,-2.1,n,.28,-2.1,n,.28,2.1,-n,.28,2.1,ks);const r=.8,a=[[-1.42,.97],[-.98,1.45],[.32,1.45],[1.08,.97]];for(let o=0;o<a.length-1;o++)ia(i,a[o][0],a[o][1],a[o+1][0],a[o+1][1],-r+.06,r-.06,o===1?t:xl,o===1?0:.15);for(const o of[-1,1]){Lu(i,a,r*o,o,xl),ia(i,-1.42,.97,-.98,1.45,o>0?r-.07:-r,o>0?r:-r+.07,t),ia(i,.32,1.45,1.08,.97,o>0?r-.07:-r,o>0?r:-r+.07,t);const l=(r+.006)*o;i.quad(l,.97,-.32*o,l,.97,-.22*o,l,1.45,-.22*o,l,1.45,-.32*o,t);const c=(n+.006)*o;for(const h of[-1.28,-.27,.95])i.quad(c,.42,(h-.012)*o,c,.42,(h+.012)*o,c,.96,(h+.012)*o,c,.96,(h-.012)*o,e);for(const h of[-.5,.55])i.quad(c,.8,(h-.09)*o,c,.8,(h+.09)*o,c,.84,(h+.09)*o,c,.84,(h-.09)*o,e);i.box(Math.min(n*o,(n+.16)*o),.98,.92,Math.max(n*o,(n+.16)*o),1.1,1,t)}for(const o of[-1,1])for(const l of[-1.3,1.32])Pu(i,(n-.1)*o,.33,l,.33,.24,o);i.quad(-n,.3,2.165,n,.3,2.165,n,.5,2.165,-n,.5,2.165,e),i.quad(n,.3,-2.165,-n,.3,-2.165,-n,.5,-2.165,n,.5,-2.165,e),i.quad(-.26,.36,2.17,.26,.36,2.17,.26,.49,2.17,-.26,.49,2.17,$(16053486)),i.quad(.26,.5,-2.17,-.26,.5,-2.17,-.26,.63,-2.17,.26,.63,-2.17,$(16053486));for(const o of[-.8,.48])i.quad(o,.6,2.17,o+.32,.6,2.17,o+.32,.78,2.14,o,.78,2.14,$(16776166),2.2),i.quad(o+.32,.66,-2.165,o,.66,-2.165,o,.84,-2.13,o+.32,.84,-2.13,$(13770527),.9);return i.build()}function Iu(){const i=new se,t=$(16777215);return i.box(-.88,.28,-2.14,.88,.96,2.14,t),i.box(-.78,.96,-1.38,.78,1.43,1,xl),i.quad(-.74,1.44,-1,-.74,1.44,.36,.74,1.44,.36,.74,1.44,-1,t),i.build()}const v1=$(8352874),Nu=$(10133154),Uu=$(7304312),sa=.44,M1=.2,Fu=1.067;function _l(i,t){const e=[i[0]/10,i[1]/10];for(let l=2;l<i.length;l+=2){const c=i[l-2]/10,h=i[l-1]/10,f=i[l]/10,u=i[l+1]/10,d=Math.max(1,Math.ceil(Math.hypot(f-c,u-h)/6));for(let m=1;m<=d;m++)e.push(c+(f-c)*m/d,h+(u-h)*m/d)}const n=e.length/2,s=new Float32Array(n);for(let l=0;l<n;l++)s[l]=t.yAt(e[l*2],e[l*2+1]);let r=s;for(let l=0;l<2;l++){const c=new Float32Array(n);for(let h=0;h<n;h++){let f=0,u=0;for(let d=Math.max(0,h-4);d<=Math.min(n-1,h+4);d++)f+=r[d],u++;c[h]=f/u}r=c}const a=new Float32Array(n*3),o=new Float32Array(n);for(let l=0;l<n;l++)a[l*3]=e[l*2],a[l*3+1]=Math.max(r[l],s[l]-.2),a[l*3+2]=e[l*2+1],l&&(o[l]=o[l-1]+Math.hypot(e[l*2]-e[l*2-2],e[l*2+1]-e[l*2-1]));return{pts:a,cum:o,length:o[n-1]}}function as(i,t,e){const n=i.cum.length;let s=0,r=n-1;for(;r-s>1;){const m=s+r>>1;i.cum[m]<=t?s=m:r=m}const a=Math.min(1,Math.max(0,(t-i.cum[s])/(i.cum[r]-i.cum[s]||1))),o=i.pts[s*3],l=i.pts[s*3+1],c=i.pts[s*3+2],h=i.pts[r*3],f=i.pts[r*3+1],u=i.pts[r*3+2],d=Math.hypot(h-o,u-c)||1;e.x=o+(h-o)*a,e.y=l+(f-l)*a,e.z=c+(u-c)*a,e.tx=(h-o)/d,e.tz=(u-c)/d}function vl(i,t,e,n,s,r){const a=t.cum.length;let o=0,l=0,c=0,h=0,f=0;for(let u=0;u<a;u++){const d=Math.max(u-1,0),m=Math.min(u+1,a-1);let M=t.pts[m*3]-t.pts[d*3],p=t.pts[m*3+2]-t.pts[d*3+2];const g=Math.hypot(M,p)||1;M/=g,p/=g;const v=t.pts[u*3]-p*e,S=t.pts[u*3+2]+M*e,_=t.pts[u*3+1]+s,y=v+p*n,E=S-M*n,x=v-p*n,b=S+M*n;u&&i.quad(o,l,c,y,_,E,x,_,b,h,l,f,r),o=y,l=_,c=E,h=x,f=b}}const S1=$(12170926),Ou=$(15254842),zu=$(9276036),Bu=150,y1=sa+.8;function b1(i,t,e){const n=t.trainRoutes.map(a=>_l(a,e)),s=(a,o,l,c=0,h=a.cum.length)=>{let f=1/0,u=-1;for(let d=Math.max(0,c);d<Math.min(a.cum.length,h);d++){const m=Math.hypot(a.pts[d*3]-o,a.pts[d*3+2]-l);m<f&&(f=m,u=d)}return{i:u,dist:f}},r={x:0,y:0,z:0,tx:0,tz:0};for(const a of t.stations){const o=a.p[0]/10,l=a.p[1]/10,c=n.map(M=>({t:M,...s(M,o,l)})).filter(M=>M.dist<16).sort((M,p)=>M.dist-p.dist);if(!c.length)continue;const h=c[0],f=c[1],u=h.t.cum[h.i];let d=null,m=f?f.i:0;for(let M=Math.max(4,u-Bu/2);M<=Math.min(h.t.length-4,u+Bu/2);M+=5){as(h.t,M,r);let p,g,v,S;if(f){const y=s(f.t,r.x,r.z,m-6,m+7);m=y.i;const E=f.t.pts[y.i*3],x=f.t.pts[y.i*3+2],b=Math.hypot(E-r.x,x-r.z);if(b<4.6){d=null;continue}const R=(E-r.x)/b,w=(x-r.z)/b;p=r.x+R*1.6,g=r.z+w*1.6,v=E-R*1.6,S=x-w*1.6}else{const y=(o-r.x)*r.tz-(l-r.z)*r.tx>=0?1:-1;p=r.x+r.tz*y*1.6,g=r.z-r.tx*y*1.6,v=r.x+r.tz*y*5.6,S=r.z-r.tx*y*5.6}const _=r.y+y1;if((v-p)*-r.tz+(S-g)*r.tx<0&&([p,v]=[v,p],[g,S]=[S,g]),d){const[y,E,x,b,R]=d;i.quad(y,R,E,x,R,b,v,_,S,p,_,g,S1);for(const[w,L,C,D,A,F,G,z]of[[y,E,p,g,x,b,v,S],[x,b,v,S,y,E,p,g]]){const W=Math.hypot(A-w,F-L)||1,V=Math.hypot(G-C,z-D)||1,k=(X,ht,Y,ct)=>X+(ht-X)/Y*ct,H=[k(w,A,W,.45),R+.02,k(L,F,W,.45),k(C,G,V,.45),_+.02,k(D,z,V,.45),k(C,G,V,.75),_+.02,k(D,z,V,.75),k(w,A,W,.75),R+.02,k(L,F,W,.75)];w===y&&L===E?(i.quad(H[0],H[1],H[2],H[9],H[10],H[11],H[6],H[7],H[8],H[3],H[4],H[5],Ou),i.quad(C,_-1.1,D,w,R-1.1,L,w,R,L,C,_,D,zu)):(i.quad(...H,Ou),i.quad(w,R-1.1,L,C,_-1.1,D,C,_,D,w,R,L,zu))}}d=[p,g,v,S,_]}}}function E1(i,t){const e=new se,n=new se,s=new Set,r={x:0,y:0,z:0,tx:0,tz:0};for(const[u,d]of i.rails){const m=_l(d,t);if(!(m.length<4)&&(vl(e,m,0,1.45,M1,v1),vl(n,m,-Fu/2,.07,sa,Nu),vl(n,m,Fu/2,.07,sa,Nu),u===0))for(let M=20;M<m.length-10;M+=62){as(m,M,r);const p=r.x+r.tz*2.7,g=r.z-r.tx*2.7;if(!t.inside(p,g,6))continue;const v=Math.floor(p/14)*8192+Math.floor(g/14);if(!s.has(v)){for(let S=-1;S<=1;S++)for(let _=-1;_<=1;_++)s.add(Math.floor(p/14+S)*8192+Math.floor(g/14+_));n.frame(p,t.yAt(p,g),g,Math.atan2(-r.tz,r.tx)),n.box(-.09,0,-.09,.09,7.4,.09,Uu),n.box(-.05,6.3,0,.05,6.42,3.2,Uu),n.frame()}}}const a=new se;b1(a,i,t);const o=u=>(u.deleteAttribute("glow"),u),l=new Ie;l.name="railway";const c=new Qt(o(e.build()),new Ye({vertexColors:!0,roughness:1,metalness:0,side:we,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));c.receiveShadow=!0;const h=new Qt(o(n.build()),new Ye({vertexColors:!0,roughness:.55,metalness:.35,side:we}));h.castShadow=!0;const f=new Qt(o(a.build()),new Ye({vertexColors:!0,roughness:.92,metalness:0,side:we}));return f.castShadow=!0,f.receiveShadow=!0,l.add(c,h,f),l}const ku=2,Ml=4;function w1(i,t){const e=i.slice(),n=[],s=(a,o,l,c)=>Math.hypot(a-l,o-c)<3,r=a=>{const o=new Float32Array(a.length);for(let l=0;l<a.length/3;l++)o.set(a.subarray(l*3,l*3+3),a.length-3-l*3);return o};for(;e.length;){let a=Array.from(e.pop()),o=!0;for(;o;){o=!1;for(let l=0;l<e.length;l++){const c=e[l],h=c.length,f=a.length;let u=null,d=!0;if(s(a[f-3],a[f-1],c[0],c[2])?u=c:s(a[0],a[2],c[h-3],c[h-1])?(u=c,d=!1):!t&&s(a[f-3],a[f-1],c[h-3],c[h-1])?u=r(c):!t&&s(a[0],a[2],c[0],c[2])&&(u=r(c),d=!1),!!u){a=d?a.concat(Array.from(u.subarray(3))):Array.from(u.subarray(0,u.length-3)).concat(a),e.splice(l,1),o=!0;break}}}n.push(new Float32Array(a))}return n}function A1(i){const t=new Map;for(const n of i){if(n.cls>2||!n.name||n.flags&ku)continue;const s=`${n.name}|${n.flags&Ml}`,r=t.get(s)??[];r.push(n),t.set(s,r)}const e=[];for(const n of t.values()){const s=(n[0].flags&Ml)!==0;for(const r of w1(n.map(a=>a.pts),s)){const a=r.length/3,o=new Float32Array(a);for(let l=1;l<a;l++)o[l]=o[l-1]+Math.hypot(r[l*3]-r[l*3-3],r[l*3+2]-r[l*3-1]);o[a-1]>260&&e.push({pts:r,cum:o,length:o[a-1],width:n[0].width,cls:n[0].cls,oneWay:s,name:n[0].name})}}return e}function T1(){const i=new se,t=$(16185074),e=$(2054824),n=$(16040479),s=$(1713198),r=$(1381655);i.box(-1.25,.35,-6,1.25,3.1,6,t,$(15001316),r),i.box(-1.27,.35,-6.02,1.27,1.15,6.02,e,null),i.box(-1.28,1.15,-6.03,1.28,1.32,6.03,n,null);for(const a of[-1.27,1.27]){const o=Math.sign(a);i.quad(a+o*.02,1.55,-5.4*o,a+o*.02,1.55,5.4*o,a+o*.02,2.65,5.4*o,a+o*.02,2.65,-5.4*o,s,.5)}i.quad(-1.1,1.5,6.04,1.1,1.5,6.04,1.1,2.8,6.04,-1.1,2.8,6.04,s,.3);for(const a of[-1,1])for(const o of[-3.75,4.05])Pu(i,1.17*a,.48,o,.48,.3,a,10);for(const a of[-1,.7])i.quad(a,.6,6.05,a+.3,.6,6.05,a+.3,.85,6.05,a,.85,6.05,$(16776166),2.2);return i.build()}const Sl=24.2,bi=6;function Gu(i){const t=new se,e=23.4,n=1.42,s=$(13488596),r=$(10330790),a=$(1843753),o=$(15909424),l=$(2763822),c=$(2310287);t.box(-n,.95,-e/2,n,3.7,e/2,s,r),t.box(-n+.2,.2,-e/2+1.4,n-.2,.95,e/2-1.4,l,null),t.box(-.5,3.7,-e/2+3,.5,4,e/2-3,r);for(const h of[-1,1]){const f=h*(n+.02),u=(d,m,M,p,g=a,v=0)=>{h>0?t.quad(f,M,m,f,M,d,f,p,d,f,p,m,g,v):t.quad(f,M,d,f,M,m,f,p,m,f,p,d,g,v)};u(-e/2+.3,e/2-.3,1.45,1.62,c);for(let d=0;d<7;d++){const m=-e/2+2+d*2.9;u(m,m+2.1,2,2.95,a,.75)}for(const d of[-6.4,5])u(d,d+1.4,1,3.1,o)}if(i){const h=e/2+.02;t.quad(-n,.95,h,n,.95,h,n,2.15,h,-n,2.15,h,o),t.quad(-n+.15,2.2,h,n-.15,2.2,h,n-.15,3.35,h,-n+.15,3.35,h,a,.2);for(const f of[-1.05,.7])t.quad(f,1.25,h+.01,f+.35,1.25,h+.01,f+.35,1.5,h+.01,f,1.5,h+.01,$(16776166),2.4)}return t.build()}class R1{constructor(t,e,n,s,r=()=>!1,a=()=>!1){et(this,"group",new Ie);et(this,"vehicles",[]);et(this,"carMesh");et(this,"carFarMesh");et(this,"carColours",[]);et(this,"busMesh");et(this,"parked",[]);et(this,"parkedAt",new Map);et(this,"parkedGone",new Set);et(this,"driven");et(this,"drivenAt",new Map);et(this,"carFull");et(this,"carMat");et(this,"tmpE",new gn);et(this,"eye",new Q(0,1e6,0));et(this,"reach",{near:140,far:1100});et(this,"carCount",0);et(this,"trains",[]);et(this,"midMesh");et(this,"cabMesh");et(this,"tmpM",new jt);et(this,"tmpQ",new on);et(this,"tmpP",new Q);et(this,"up",new Q(0,1,0));et(this,"one",new Q(1,1,1));et(this,"zero",new Q(0,0,0));et(this,"at",{x:0,y:0,z:0,tx:0,tz:0});et(this,"at2",{x:0,y:0,z:0,tx:0,tz:0});this.town=t,this.hf=e,this.isClear=r,this.noParking=a,this.group.name="life";const o=qn();this.addParkedCars(o,s),this.addTraffic(o,n),this.addTrains(o),this.addStreetLights(n),this.update(0)}addParkedCars(t,e){const n=this.town.cars,s=n.length/$n,r=250,a=new Map;for(let h=0;h<s;h++){const f=n[h*$n]/4,u=n[h*$n+1]/4;if(this.isClear(f,u)||this.noParking(f,u))continue;const d=`${Math.floor(f/r)}_${Math.floor(u/r)}`;let m=a.get(d);m||a.set(d,m=[]),m.push(h)}const o=Du(),l=Iu();this.carFull=o,this.carMat=t;const c=new Ct;for(const h of a.values()){const f=new rn(o,t,h.length),u=new rn(l,t,h.length);h.forEach((m,M)=>{const p=n[m*$n]/4,g=n[m*$n+1]/4,v=e.nearest(p,g,14),S=!!v&&v.dist<v.width/2,_=n[m*$n+2]/10*(Math.PI/180);this.tmpQ.setFromAxisAngle(this.up,_);const y=this.hf.yAt(p,g)+(S?.06:.03);this.tmpM.compose(this.tmpP.set(p,y,g),this.tmpQ,this.one),this.parkedAt.set(`${n[m*$n]}_${n[m*$n+1]}`,{near:f,far:u,k:M,x:p,y,z:g,heading:_}),c.set(na[(n[m*$n+3]*7+m)%na.length]),f.setMatrixAt(M,this.tmpM),f.setColorAt(M,c),u.setMatrixAt(M,this.tmpM),u.setColorAt(M,c)}),f.castShadow=!0,f.computeBoundingSphere(),u.computeBoundingSphere(),f.visible=!1;const d=f.boundingSphere;this.parked.push({near:f,far:u,x:d.center.x,y:d.center.y,z:d.center.z,r:d.radius}),this.group.add(f,u)}}setParkedGone(t){const e=new Set(t.map(([n,s])=>`${Math.round(n*4)}_${Math.round(s*4)}`));for(const n of new Set([...e,...this.parkedGone])){const s=this.parkedAt.get(n);!s||e.has(n)===this.parkedGone.has(n)||this.drivenAt.has(n)||(is(s.near,s.k,e.has(n)),is(s.far,s.k,e.has(n)))}this.parkedGone=e}nearestCar(t,e,n){let s=null;for(const[r,a]of this.parkedAt){if(this.parkedGone.has(r))continue;const o=this.drivenAt.get(r)??a,l=Math.hypot(o.x-t,o.z-e);l<(s?s.distance:n)&&(s={id:[a.x,a.z],x:o.x,z:o.z,heading:o.heading,distance:l})}return s}driveCar(t,e,n,s,r,a,o=0,l=0){const c=`${Math.round(t*4)}_${Math.round(e*4)}`,h=this.parkedAt.get(c);if(!h||!this.carFull||!this.carMat)return!1;let f=this.drivenAt.get(c);if(!f){if(this.drivenAt.size>=12)return!1;this.driven||(this.driven=new rn(this.carFull,this.carMat,12),this.driven.count=0,this.driven.frustumCulled=!1,this.driven.castShadow=!0,this.group.add(this.driven)),f={k:this.drivenAt.size,x:n,y:s,z:r,heading:a},this.drivenAt.set(c,f),this.driven.count=this.drivenAt.size;const u=new Ct;h.near.getColorAt(h.k,u),this.driven.setColorAt(f.k,u),this.driven.instanceColor.needsUpdate=!0,is(h.near,h.k,!0),is(h.far,h.k,!0)}return f.x=n,f.y=s,f.z=r,f.heading=a,this.tmpQ.setFromEuler(this.tmpE.set(-o,a,l,"YXZ")),this.driven.setMatrixAt(f.k,this.tmpM.compose(this.tmpP.set(n,s,r),this.tmpQ,this.one)),this.driven.instanceMatrix.needsUpdate=!0,!0}pickParked(t,e){let n=null;for(const[s,r]of this.parkedAt){if(this.parkedGone.has(s)||this.drivenAt.has(s)||Math.abs(r.x-t.x)>400||Math.abs(r.z-t.z)>400)continue;const a=hl({o:t,d:e},r.x,r.z,r.y,r.y+1.5,2.2);a>0&&(!n||a<n.t)&&(n={type:"car",x:r.x,z:r.z,t:a})}return n}cull(t,e,n,s=this.reach.near,r=this.reach.far){this.eye.set(t,e,n),this.reach.near=s,this.reach.far=r;for(const a of this.parked){const o=Math.hypot(Math.max(0,Math.hypot(a.x-t,a.z-n)-a.r),e-a.y);a.near.visible=o<s,a.far.visible=o>=s&&o<r}}addTraffic(t,e){const n=A1(e);if(!n.length)return;const s=Dn(4105),r=[],a=[];for(const l of n){const c=l.cls===0?20:l.cls===1?12:8,h=Math.round(l.length/1e3*c*(l.oneWay?1:1.6)),f=Math.max(1,l.oneWay?Math.min(l.width<13?2:3,Math.round((l.width-2.4)/3.4)):Math.round(l.width/2/3.3)),u=d=>-l.width/2+.4+3.3*(d+.5);for(let d=0;d<h;d++){const m=Math.floor(s()*f),M=l.oneWay?u(m):(m+.5)/f*(l.width/2-.3),p=l.cls===0?13:l.cls===1?11:9,g={route:l,s:s()*l.length,dir:l.oneWay||s()<.5?1:-1,speed:p+s()*4,lane:M};(l.name==="Beaudesert Road"||l.name==="Ipswich Road")&&s()<.045?(g.speed=10+s()*2,l.oneWay&&(g.lane=u(f-1)),a.push(g)):r.push(g)}}this.vehicles=r.concat(a),this.carCount=r.length;const o=new Ct;if(r.length){const l=this.carMesh=new rn(Du(),t,r.length),c=this.carFarMesh=new rn(Iu(),t,r.length);for(const h of[l,c])h.instanceMatrix.setUsage(lr),h.frustumCulled=!1,h.setColorAt(0,o.set(16777215)),h.instanceColor.setUsage(lr),this.group.add(h);for(let h=0;h<r.length;h++)this.carColours.push(new Ct(na[Math.floor(s()*na.length)]));l.castShadow=!0}if(a.length){const l=this.busMesh=new rn(T1(),t,a.length);l.instanceMatrix.setUsage(lr),l.frustumCulled=!1,l.castShadow=!0,this.group.add(l)}}addTrains(t){const e=this.town.trainRoutes.map(r=>_l(r,this.hf)).filter(r=>r.length>600);if(!e.length)return;const n=[!0];if(e.length>1){const r=e[0],a=e[1];as(r,r.length/2,this.at);let o=1/0,l=0,c=1;for(let h=0;h<a.cum.length;h++){const f=a.pts[h*3]-this.at.x,u=a.pts[h*3+2]-this.at.z,d=Math.hypot(f,u);if(d<o){o=d,l=f*-this.at.tz+u*this.at.tx;const m=Math.min(h+1,a.cum.length-1),M=Math.max(h-1,0);c=(a.pts[m*3]-a.pts[M*3])*this.at.tx+(a.pts[m*3+2]-a.pts[M*3+2])*this.at.tz}}n[0]=l>0,n[1]=n[0]?c<0:c>0}const s=bi*Sl;e.forEach((r,a)=>{const o=n[a]?r:C1(r),l=[];for(const c of this.town.stations){const h=c.p[0]/10,f=c.p[1]/10;let u=70,d=-1;for(let m=0;m<o.cum.length;m++){const M=Math.hypot(o.pts[m*3]-h,o.pts[m*3+2]-f);M<u&&(u=M,d=o.cum[m])}d>s/2+10&&d<o.length-10&&l.push(d+s/2)}l.sort((c,h)=>c-h),this.trains.push({track:o,stops:l,s:o.length*(a===0?.28:.62),v:16,dwell:0,next:0})});for(const r of this.trains)r.next=r.stops.findIndex(a=>a>r.s+150);this.midMesh=new rn(Gu(!1),t,this.trains.length*(bi-2)),this.cabMesh=new rn(Gu(!0),t,this.trains.length*2);for(const r of[this.midMesh,this.cabMesh])r.instanceMatrix.setUsage(lr),r.frustumCulled=!1,r.castShadow=!0,this.group.add(r)}addStreetLights(t){const e=[];for(const r of t){if(r.flags&ku)continue;const a=(r.flags&Ml)!==0,o=r.cls<=1?46:r.cls===2?60:105,l=r.pts.length/3;let c=o*.5,h=1;for(let f=1;f<l;f++){const u=r.pts[f*3-3],d=r.pts[f*3-1],m=r.pts[f*3],M=r.pts[f*3+1],p=r.pts[f*3+2],g=Math.hypot(m-u,p-d);if(c+=g,c<o)continue;c=0,h=a?-1:-h;const v=(m-u)/(g||1),S=(p-d)/(g||1),_=r.width/2+1.4,y=m-S*_*h,E=p+v*_*h;!this.hf.inside(y,E,12)||this.isClear(y,E)||e.push(y,Math.max(this.hf.yAt(y,E),M-.4),E,Math.atan2(S*h,-v*h))}}const{lights:n,pools:s}=_1(e,this.hf);this.group.add(n,s)}update(t){const{at:e,at2:n,eye:s}=this,r=this.reach.near*this.reach.near,a=this.reach.far*this.reach.far;let o=0,l=0;this.vehicles.forEach((h,f)=>{const u=h.route;h.s+=h.dir*h.speed*t,h.s>u.length&&(h.s-=u.length),h.s<0&&(h.s+=u.length),as(u,h.s,e);const d=e.tx*h.dir,m=e.tz*h.dir;if(this.tmpQ.setFromAxisAngle(this.up,Math.atan2(d,m)),this.tmpM.compose(this.tmpP.set(e.x+m*h.lane,e.y+.03,e.z-d*h.lane),this.tmpQ,this.one),f<this.carCount){const M=(e.x-s.x)**2+(e.y-s.y)**2+(e.z-s.z)**2;M<r?(this.carMesh.setMatrixAt(o,this.tmpM),this.carMesh.setColorAt(o++,this.carColours[f])):M<a&&(this.carFarMesh.setMatrixAt(l,this.tmpM),this.carFarMesh.setColorAt(l++,this.carColours[f]))}else this.busMesh.setMatrixAt(f-this.carCount,this.tmpM)});for(const[h,f]of[[this.carMesh,o],[this.carFarMesh,l]])h&&(h.count=f,h.instanceMatrix.needsUpdate=!0,h.instanceColor.needsUpdate=!0);if(this.busMesh&&(this.busMesh.instanceMatrix.needsUpdate=!0),!this.midMesh||!this.cabMesh)return;const c=bi*Sl;this.trains.forEach((h,f)=>{if(h.dwell>0)h.dwell-=t;else{const d=(h.next>=0&&h.next<h.stops.length?h.stops[h.next]:1/0)-h.s;d<.4?(h.v=0,h.dwell=14,h.next++):d<h.v*h.v/1.7+2?h.v=Math.max(.8,Math.sqrt(1.7*d)):h.v=Math.min(19,h.v+.75*t),h.s+=h.v*t,h.s-c>h.track.length&&(h.s=0,h.next=0,h.v=15)}for(let u=0;u<bi;u++){const d=h.s-(u+.5)*Sl,m=u===0||u===bi-1,M=m?this.cabMesh:this.midMesh,p=m?f*2+(u===0?0:1):f*(bi-2)+u-1;if(d<8||d>h.track.length-8){M.setMatrixAt(p,this.tmpM.compose(this.zero,this.tmpQ.identity(),this.zero));continue}as(h.track,d+8,e),as(h.track,d-8,n);const g=Math.atan2(e.x-n.x,e.z-n.z)+(u===bi-1?Math.PI:0);this.tmpQ.setFromAxisAngle(this.up,g),M.setMatrixAt(p,this.tmpM.compose(this.tmpP.set((e.x+n.x)/2,(e.y+n.y)/2+sa,(e.z+n.z)/2),this.tmpQ,this.one))}}),this.midMesh.instanceMatrix.needsUpdate=!0,this.cabMesh.instanceMatrix.needsUpdate=!0}}function C1(i){const t=i.cum.length,e=new Float32Array(t*3),n=new Float32Array(t);for(let s=0;s<t;s++)e.set(i.pts.subarray((t-1-s)*3,(t-1-s)*3+3),s*3),n[s]=i.length-i.cum[t-1-s];return{pts:e,cum:n,length:i.length}}const P1=[{id:"shops",name:"Moorvale shops",kind:"landmark",lat:-27.53289,lon:153.02479,blurb:"Moorooka's main street: the shops and cafes along Beaudesert Road, around Moorvale Lane.",view:[420,58,-24],priority:1,lift:24},{id:"square",name:"Moorooka Square",kind:"landmark",lat:-27.53092,lon:153.02368,blurb:"The shopping centre at Beaudesert Road and Durack Street, modelled in extra detail. Its outline and heights are surveyed. The corner frontage (white canopy, brick planters, pylon) and the supermarket entry are fitted from street photographs taken in 2026: the corner wing is newer than the survey, so its position is approximate. The sides away from Beaudesert Road are a guess.",view:[115,62,68],priority:1,maxDist:2600,lift:17},{id:"station",name:"Moorooka Station",kind:"landmark",lat:-27.53566,lon:153.01392,blurb:"On the Beenleigh and Gold Coast lines, beside Ipswich Road. Trains in the model stop here.",view:[330,60,62],priority:1,lift:20},{id:"magic-mile",name:"Magic Mile",kind:"landmark",lat:-27.53208,lon:153.01684,blurb:"Ipswich Road through Moorooka, long known as the Magic Mile of Motors for its car yards. The cars standing in the yards are generated.",view:[520,60,35],priority:2,lift:22},{id:"6-beaudesert",name:"6 Beaudesert Road",kind:"landmark",lat:-27.5256631,lon:153.0234391,blurb:"A high-set house on a 1,348 square metre block near the Ipswich Road junction, modelled in extra detail. The roof outline, its height and colour are surveyed; the fences, paths, steps, garden boxes and clothes hoist are placed from the aerial photograph. Wall colour, windows and doors are a guess.",view:[52,52,-105],priority:2,maxDist:1500,lift:13},{id:"clapham",name:"Clapham Rail Yard",kind:"landmark",lat:-27.5312,lon:153.0132,blurb:"The rail yard between Yeerongpilly and Moorooka stations, on the western edge of the suburb.",view:[640,58,80],priority:3,maxDist:3600,lift:18},{id:"school",name:"Moorooka State School",kind:"landmark",lat:-27.53569,lon:153.02398,blurb:"The state primary school, between Beaudesert Road and Sherley Street.",view:[360,58,10],priority:3,maxDist:2600,lift:18},{id:"alexander",name:"Alexander Park",kind:"nature",lat:-27.53889,lon:153.02367,blurb:"Sports fields beside Beaudesert Road, south of the school.",view:[420,58,-15],priority:4,maxDist:2600,lift:14},{id:"peggs",name:"Pegg's Park",kind:"nature",lat:-27.53231,lon:153.0312,blurb:"Parkland along Vendale Avenue on the eastern side of the suburb.",view:[420,58,20],priority:4,maxDist:2600,lift:14},{id:"koala",name:"Koala Park",kind:"nature",lat:-27.53056,lon:153.02808,blurb:"A long green corridor with playing fields between Vendale Avenue and the houses.",view:[420,60,30],priority:5,maxDist:2e3,lift:14},{id:"community",name:"Moorooka Community Centre",kind:"landmark",lat:-27.53555,lon:153.02088,blurb:"The community hall, west of the school.",view:[300,60,-10],priority:6,maxDist:1400,lift:14},{id:"st-brendans",name:"St Brendan's Primary School",kind:"landmark",lat:-27.53747,lon:153.01931,blurb:"Catholic primary school on Hawtree Street, next to the church.",view:[320,60,15],priority:6,maxDist:1600,lift:15},{id:"post",name:"Moorooka Post Shop",kind:"landmark",lat:-27.5317,lon:153.02369,blurb:"The post office, at the northern end of the shops.",view:[260,60,-20],priority:7,maxDist:900,lift:14},{id:"uniting",name:"Uniting Church",kind:"landmark",lat:-27.53339,lon:153.02759,blurb:"Moorooka's Uniting Church, a few streets east of the shops.",view:[280,60,10],priority:7,maxDist:1e3,lift:14},{id:"stimpson",name:"Stimpson Park",kind:"nature",lat:-27.52648,lon:153.02218,blurb:"A park beside Ipswich Road at the northern tip of the suburb.",view:[360,58,20],priority:6,maxDist:1600,lift:13},{id:"moolabin",name:"Moolabin Park",kind:"nature",lat:-27.52852,lon:153.02564,blurb:"The first of the parks strung along Vendale Avenue.",view:[340,58,15],priority:6,maxDist:1500,lift:13},{id:"veterans",name:"Veterans Park",kind:"nature",lat:-27.53974,lon:153.01694,blurb:"A park on Anson Street, in the south-west of the suburb.",view:[340,58,25],priority:6,maxDist:1500,lift:13},{id:"skate",name:"Peter Scott Skate Park",kind:"landmark",lat:-27.54298,lon:153.01482,blurb:"The skate park in Muriel Avenue Park, near the creek.",view:[260,60,30],priority:6,maxDist:1400,lift:12},{id:"toohey",name:"Toohey Forest",kind:"nature",lat:-27.53512,lon:153.03668,blurb:"Bushland on the ridge along the eastern edge of the suburb. The highest ground in the model, about 125 metres above sea level, is here.",view:[1100,60,-60],priority:2,lift:34},{id:"creek",name:"Rocky Water Holes Creek",kind:"water",lat:-27.54414,lon:153.01554,blurb:"The creek along Moorooka's southern boundary, on its way to Oxley Creek and the Brisbane River.",view:[620,58,20],priority:5,maxDist:3200},{id:"rocklea",name:"Rocklea Station",kind:"landmark",lat:-27.54472,lon:153.01419,blurb:"The next station south, just over the creek in Rocklea.",view:[380,60,40],priority:5,maxDist:2600,lift:16},{id:"yeerongpilly",name:"Yeerongpilly Station",kind:"landmark",lat:-27.52485,lon:153.01416,blurb:"The next station north, where the Tennyson branch leaves the main line.",view:[420,60,70],priority:5,maxDist:2600,lift:16},{id:"river",name:"Brisbane River",kind:"water",lat:-27.5214,lon:153.0102,blurb:"The Tennyson reach of the river touches the north-west corner of the model.",view:[900,55,40],priority:4}],Hu=[-27.531134,153.023185],L1=[-27.5307274,153.0230606],D1=[-27.5310763,153.0237468],Vu=[[-27.5307394,153.023705],[-27.5310127,153.0237606]],Gs=[78,0,0,0,0,66.5,79.3,66.5,79.3,42.5,83.4,42.5,83.4,47.9,88.2,47.9,88.2,28.1,100.2,28.1,100.2,22.1],I1=[75.2,0,0,0,0,66.5,79.3,66.5,79.3,42.5,83.4,42.5,83.4,47.9,88.2,47.9,88.2,26.3,98.4,26.3,98.4,23.2],N1=[66,0,75.2,0,98.4,23.2,98.4,26.3,88.2,26.3,88.2,47.9,83.4,47.9,83.4,42.5,79.3,42.5,79.3,66.5,66,66.5],Gt=39.1,an=Gt+5,ra=Gt+5.85,Hs=5.2,Vs=[11.4,14.6],Zn=i=>37.45+(i>0?.036:.02)*i,Ws=$(14934231),ge=$(15987437),Xs=$(15526627),qs=$(13619146),yl=$(11818813),bl=$(4864816),U1=$(2832965),Ys=$(1976109),$s=$(3817026),Sn=$(10133668),ui=$(3817026),Zs=$(13352877),aa=$(13353645),fi=$(12434098),Wu=$(1780811),oa=$(9409688),la=$(4164148),F1=$(9424476),El=$(3104556),O1=$(9054780),ca=2;function Kn(i,t,e){const n=document.createElement("canvas");n.width=i*ca,n.height=t*ca;const s=n.getContext("2d");s.scale(ca,ca),e(s,i,t);const r=new Rr(n);return r.colorSpace=Te,r.anisotropy=8,r}const cn="Arial, Helvetica, sans-serif";function wl(i,t,e,n){i.lineWidth=n*.42,i.strokeStyle="#1c9a48",i.beginPath(),i.arc(t-n*.3,e+n*.12,n*.55,0,Math.PI*2),i.stroke(),i.strokeStyle="#7cc242",i.beginPath(),i.arc(t+n*.3,e-n*.12,n*.55,0,Math.PI*2),i.stroke()}const Jn={square:()=>Kn(768,224,(i,t,e)=>{const n=["#f2c230","#2f6fb6","#e2457a","#1f2a55","#f08a2a","#39a7a0"],r=e/2,a=78;for(let o=0;o<6;o++){const l=o/6*Math.PI*2-.5,c=(o+1)/6*Math.PI*2-.5;i.fillStyle=n[o],i.beginPath(),i.moveTo(100+8*Math.cos(l+1),r+8*Math.sin(l+1)),i.lineTo(100+a*Math.cos(l),r+a*Math.sin(l)),i.lineTo(100+a*Math.cos(c),r+a*Math.sin(c)),i.fill()}i.fillStyle="#23201e",i.font=`900 88px ${cn}`,i.textBaseline="middle",i.fillText("MOOROOKA",205,e*.29,t-215),i.fillText("SQUARE",240,e*.74,t-300)}),dental:()=>Kn(768,256,(i,t,e)=>{i.fillStyle="#1f4fb5",i.beginPath(),i.arc(110,e/2,96,0,Math.PI*2),i.fill(),i.fillStyle="#ffffff",i.beginPath(),i.moveTo(62,96),i.bezierCurveTo(62,56,110,78,110,78),i.bezierCurveTo(110,78,158,56,158,96),i.bezierCurveTo(158,150,142,196,130,196),i.bezierCurveTo(120,196,122,150,110,150),i.bezierCurveTo(98,150,100,196,90,196),i.bezierCurveTo(78,196,62,150,62,96),i.fill(),i.fillStyle="#1f4fb5",i.textBaseline="middle",i.font=`700 64px ${cn}`,i.fillText("moorooka SQUARE",230,70,t-240),i.font=`900 120px ${cn}`,i.fillText("D E N T A L",228,180,t-236)}),medical:()=>Kn(768,256,(i,t,e)=>{i.fillStyle="#5aa9e6",i.fillRect(74,28,76,200),i.fillRect(12,90,200,76),i.fillStyle="#ffffff",i.beginPath(),i.arc(112,e/2,26,0,Math.PI*2),i.fill(),i.fillStyle="#1d2f6b",i.textBaseline="middle",i.font=`900 92px ${cn}`,i.fillText("MOOROOKA",236,78,t-246),i.fillText("MEDICAL",236,182,t-300)}),pylonDental:()=>Kn(512,160,(i,t,e)=>{i.fillStyle="#1c2f6e",i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.beginPath(),i.arc(70,e/2,44,0,Math.PI*2),i.fill(),i.textBaseline="middle",i.font=`700 40px ${cn}`,i.fillText("moorooka SQUARE",140,48,t-160),i.font=`900 72px ${cn}`,i.fillText("DENTAL",140,110,t-160)}),parking:()=>Kn(512,160,(i,t,e)=>{i.fillStyle="#1668c9",i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.textBaseline="middle",i.font=`900 124px ${cn}`,i.fillText("P",150,e/2+6),i.fillRect(256,e/2-13,80,26),i.beginPath(),i.moveTo(330,e/2-42),i.lineTo(382,e/2),i.lineTo(330,e/2+42),i.fill()}),boot:()=>Kn(512,160,(i,t,e)=>{i.fillStyle="#178a3c",i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.beginPath(),i.arc(74,62,44,0,Math.PI*2),i.fill(),wl(i,74,62,30),i.fillStyle="#ffffff",i.textBaseline="middle",i.font=`700 30px ${cn}`,i.fillText("woolworths",14,134,130),i.font=`700 56px ${cn}`,i.fillText("Direct",300,52,190),i.fillText("to boot",300,112,190),i.fillRect(178,44,96,62),i.fillStyle="#178a3c",i.fillRect(186,52,80,30)}),tower:()=>Kn(512,400,(i,t,e)=>{i.fillStyle="#34383b",i.fillRect(0,0,t,e),wl(i,t/2,150,118),i.fillStyle="#ffffff",i.textBaseline="middle",i.textAlign="center",i.font=`400 88px ${cn}`,i.fillText("woolworths",t/2,336,t-40)}),cafe:()=>Kn(640,224,(i,t)=>{i.fillStyle="#ffffff",i.textBaseline="middle",i.textAlign="center",i.font='400 112px Georgia, "Times New Roman", serif',i.fillText("botanic café",t/2,78,t-30),i.font=`400 54px ${cn}`,i.fillText("espresso  kitchen",t/2,176,t-120)}),entry:()=>Kn(1024,256,(i,t,e)=>{i.fillStyle="#ffffff",i.textBaseline="middle",i.font=`400 170px ${cn}`,i.fillText("woolworths",20,e/2+14,700),wl(i,880,e/2,104)})};function Xu(i){const t=new Ye({map:i,alphaTest:.4,roughness:.8,metalness:0,side:we,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});return t.onBeforeCompile=e=>{e.uniforms.uNight=es,e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * uNight * 0.7;`)},t.customProgramCacheKey=()=>"moorooka-sign",t}function qu(i){const t=y=>Yn(i,y[0],y[1]),e=t(L1),n=t(D1),s=Math.hypot(n[0]-e[0],n[1]-e[1]),r=(n[0]-e[0])/s,a=(n[1]-e[1])/s,o=(y,E)=>[e[0]+y*r-E*a,e[1]+y*a+E*r],l=t(Vu[0]),c=t(Vu[1]),h=Math.hypot(c[0]-l[0],c[1]-l[1]),f=(c[0]-l[0])/h,u=(c[1]-l[1])/h,d=u,m=-f,M=l[0]-10*d,p=l[1]-10*m;return{nw:e,centre:o,wing:(y,E)=>[M+y*d+E*f,p+y*m+E*u],toWing:(y,E)=>[(y-M)*d+(E-p)*m,(y-M)*f+(E-p)*u],toCentre:(y,E)=>[(y-e[0])*r+(E-e[1])*a,-(y-e[0])*a+(E-e[1])*r],south:y=>-((M-n[0])*a-(p-n[1])*r+y*(d*a-m*r))/(f*a-u*r),centreHeading:Math.atan2(-a,r),wingHeading:Math.atan2(-m,d),origin:[M,p]}}function z1(i){const t=qu(i);return(e,n)=>{const[s,r]=t.toWing(e,n);if(s>-14.5&&s<10.4&&r>-11&&r<40)return!0;const[a,o]=t.toCentre(e,n);if(a<-3||a>106||o<-3||o>70)return!1;let l=!1;const c=Gs.length/2;for(let h=0,f=c-1;h<c;f=h++){const u=Gs[h*2],d=Gs[h*2+1],m=Gs[f*2],M=Gs[f*2+1];d>o!=M>o&&a<(m-u)*(o-d)/(M-d)+u&&(l=!l);const p=Math.max(0,Math.min(1,((a-u)*(m-u)+(o-d)*(M-d))/((m-u)**2+(M-d)**2||1)));if(Math.hypot(a-u-(m-u)*p,o-d-(M-d)*p)<3)return!0}return l}}function B1(i,t,e){const n=new Ie;if(n.name="square",!e)return n;const s=qu(i),r=new se,a=Dn(410500),o=[],l=e.eave,c=e.ridge,h=l+1.7,f=Math.min(31,l-13);let u=()=>{};const d=(N,O,B)=>{u=()=>r.frame(N,0,O,B),u()},m=()=>d(s.nw[0],s.nw[1],s.centreHeading),M=()=>d(s.origin[0],s.origin[1],s.wingHeading),p=(N,O)=>{const B=Math.hypot(O[0]-N[0],O[1]-N[1]);return d(N[0],N[1],Math.atan2(-(O[1]-N[1])/B,(O[0]-N[0])/B)),B},g=(N,O=1.5)=>t.yAt(r.wx(N,O),r.wz(N,O)),v=(N,O,B,K,I,j)=>o.push({corners:[r.wx(N,I),B,r.wz(N,I),r.wx(O,I),B,r.wz(O,I),r.wx(O,I),K,r.wz(O,I),r.wx(N,I),K,r.wz(N,I)],tex:j}),S=(N,O)=>{(N[5]-N[2])*(N[6]-N[0])-(N[3]-N[0])*(N[8]-N[2])>0?r.quad(N[0],N[1],N[2],N[3],N[4],N[5],N[6],N[7],N[8],N[9],N[10],N[11],O):r.quad(N[0],N[1],N[2],N[9],N[10],N[11],N[6],N[7],N[8],N[3],N[4],N[5],O)},_=(N,O,B,K,I,j,J=0,rt=.05)=>{if(K-B<.05||O-N<.05)return;const at=Math.max(1,Math.round((O-N)/I));for(let ft=0;ft<at;ft++)r.box(N+(O-N)*ft/at,B,J,N+(O-N)*(ft+1)/at,K,rt,ft%2?Ut(j,.955):j,null)},y=(N,O,B,K,I=U1,j=.6)=>{r.quad(N,B,.06,O,B,.06,O,K,.06,N,K,.06,I,j);const J=Math.max(1,Math.round((O-N)/1.4));for(let rt=0;rt<=J;rt++){const at=N+(O-N)*rt/J;r.box(at-.04,B,.06,at+.04,K,.11,$s,null)}r.box(N,K-.1,.06,O,K,.12,$s),r.box(N,B,.06,O,B+.12,.12,$s)},E=(N,O,B,K,I)=>{r.box(N,B,0,O,B+.16,K,Ut(ge,.9),qs,Ut(ge,.86)),r.box(N,B-.04,K-.1,O,B+.46,K,ge);for(const j of[N,O-.1])r.box(j,B-.04,0,j+.1,B+.46,K,ge);for(const j of[N+.7,O-.7])r.quad(j-.04,I,.06,j+.04,I,.06,j+.04,B+.46,K-.25,j-.04,B+.46,K-.25,ui)},x=(N,O,B,K,I,j,J=Ut(yl,.9))=>{for(let rt=O,at=0;rt<I-.01;rt+=.26,at++)r.box(N,rt,B,K,Math.min(rt+.26,I),j,at%2?Ut(yl,.94):yl,null);J&&r.quad(N,I,j,K,I,j,K,I,B,N,I,B,J)},b=(N,O,B,K,I=la,j=F1)=>{const J=r.wx(N,B),rt=r.wz(N,B),at=a()*Math.PI;for(let ft=0;ft<6;ft++){r.frame(J,O,rt,at+ft/6*Math.PI*2);const Tt=.75+a()*.4;r.blob(0,K*.48*Tt,K*.2+ft%2*K*.1,K*.2,K*.5*Tt,K*.06,6,4,I,j)}u()},R=(N,O,B,K,I=El,j=la)=>r.blob(N,O+K*.7,B,K,K*.8,K,6,4,I,j);m(),r.walls(I1,f,l,Ws);const w=66,L=66.5,C=w/2,D=L/2,A=3.5,F=l+3,G=(N,O)=>l+(F-l)*Math.min(1,(1-Math.max(Math.abs(N-C)/C,Math.abs(O-D)/D))/(1-A/C));S([0,l,0,w,l,0,C+A,F,D-A,C-A,F,D-A],e.roof),S([w,l,0,w,l,L,C+A,F,D+A,C+A,F,D-A],Ut(e.roof,.97)),S([w,l,L,0,l,L,C-A,F,D+A,C+A,F,D+A],e.roof),S([0,l,L,0,l,0,C-A,F,D-A,C-A,F,D+A],Ut(e.roof,.97)),r.box(C-A,F,D-A,C+A,F+.8,D+A,Ut(Ws,.9),$(8363952));for(const[N,O,B,K]of[[6,12,13,23],[6,12,26,33],[5,10,39,45]])S([N,G(N,B)+.12,B,O,G(O,B)+.12,B,O,G(O,K)+.12,K,N,G(N,K)+.12,K],Wu);const z=l-.35;r.cap(N1,z,qs),r.quad(w,z,0,w,z,L,w,l,L,w,l,0,Ws);for(const[N,O,B,K]of[[67.5,77,30,44],[67.5,77,47,62],[80.5,87,30,41]])r.box(N,z,B,O,z+.16,K,Sn,Wu);for(const[N,O]of[[70,12],[73.5,17],[69,22],[84,44.5],[72,64],[91,25]])r.box(N,z,O,N+2.2,z+1.1,O+1.3,oa,Ut(oa,.85));const W=c-.6;r.box(70.5,z,4,75.5,W,5.1,ui);for(let N=z;N<W-1.4;N+=.5)r.box(70.5,N,5.1,75.5,N+.3,8.2,Ut(ui,1.25),null);r.box(70.5,W-1.6,5.1,75.5,W-1.4,8.2,ui),p(s.centre(75.5,4),s.centre(70.5,4)),v(.25,4.75,W-3.9,W-.25,.04,Jn.tower());const V=s.centre(98.4,23.2),k=s.centre(98.4,26.3),H=s.centre(75.2,0);let X=p(V,H);r.box(0,l,-.3,X,h,0,ge,ge),y(.3,3.4,g(1.8),g(1.8)+3.6,Ys);{const N=g(2,1);x(.6,N-.5,.25,3.8,N+.8,1.6,bl);for(const O of[1.2,2.2,3.2])b(O,N+.75,.9,.8);r.box(-.5,N,.3,.3,N+1.9,1.3,$(9067066));for(let O=0;O<4;O++)r.box(4.3+O*.5,N+.25,.3,4.7+O*.5,N+1,.9,Sn,null)}const ht=(N,O,B)=>{for(let K=N;K<O;K+=3){const I=Math.min(K+3,O),j=g(K,1.4)+.3,J=g(I,1.4)+.3;S([K,j,0,K,j,B,I,J,B,I,J,0],aa),r.quad(K,j-.6,B,I,J-.6,B,I,J,B,K,j,B,fi)}};ht(-1,X,2.8);const Y=7,ct=(X-Y-3.6)/3;for(let N=0;N<3;N++){const O=3.6+N*ct,B=O+ct,K=g((O+B)/2);r.box(O,K-.6,0,B,K+.05,.08,Ut(Ws,.8),null),y(O+.35,B-.35,K+.05,K+3),E(O+.15,B-.15,K+3.25,2.1,Math.min(h-.3,K+5.3)),_(O,B,K+3.75,h,1.3,ge)}const lt=Gt+4;y(X-Y,X-.2,g(X-4)-.2,lt,Ys,.5),r.box(X-Y,lt,0,X,lt+.5,.35,ui),_(X-Y,X,lt+.5,h,1.3,ge),X=p(H,s.nw),y(.2,6.6,Gt-1.2,lt,Ys,.5),r.box(0,lt,0,6.8,lt+.5,.35,ui);{const O=g(48,3);_(24.2,X,O+4.1,l,6,Xs),y(31,57,O+.1,O+3.1),r.box(27,O+3.5,0,69,O+3.7,2.6,Ut(ge,.92),qs,Ut(ge,.85)),r.box(27,O+3.45,2.5,69,O+3.95,2.6,ge);for(let B=28;B<=68;B+=8){const K=t.yAt(r.wx(B,2.4),r.wz(B,2.4))-.2;r.cyl(B,K,2.4,.09,.09,O+3.7-K,5,Sn)}}const xt=s.centre(0,66.5),dt=s.centre(79.3,66.5);X=p(s.nw,xt),_(0,X,g(X/2)+.3,l,6,Xs);for(const N of[48,55])r.box(N,g(N+2)-.3,0,N+4,g(N+2)+4,.1,Sn,null);X=p(xt,dt),_(0,X,g(X/2)+.3,l,6,Xs);{const N=g(22,3);for(let O=11;O<33;O+=5.5)r.box(O,N-.5,0,O+4.2,N+4.2,.1,Sn,null);r.box(8,N+5,0,36,N+5.25,5,Ut(ge,.92),qs,Ut(ge,.82));for(const O of[8.3,17.5,26.5,35.7])r.cyl(O,N-1,4.7,.11,.11,6,5,Sn)}const Pt=s.centre(79.3,42.5),Yt=s.centre(88.2,47.9),bt=s.centre(88.2,26.3);X=p(dt,Pt),_(0,X,g(X/2)+.3,l,6,Xs),r.box(4,g(5)-.2,0,5.1,g(5)+2.1,.08,$s,null),X=p(Yt,bt),r.box(0,l,-.3,X,h,0,ge,ge),_(0,X,g(X/2)+.3,h,1.3,ge),r.box(3,g(4)-.2,0,4.1,g(4)+2.1,.08,$s,null),X=p(bt,k),r.box(0,l,-.3,X,h,0,ge,ge);{const N=g(4);y(.5,5.4,N+.05,N+3),E(.3,5.6,N+3.25,1.9,Math.min(h-.3,N+5.3)),_(0,5.8,N+3.75,h,1.3,ge),y(6,X-.2,g(8)-.1,g(8)+3.6,Ys),v(6.5,X-.6,g(8)+1.25,g(8)+2.4,.13,Jn.cafe()),ht(0,X+1,2.2);for(const O of[6.8,8.6])b(O,g(O,2.6)+.3,2.6,1.5,O1,$(11880538))}X=p(k,V),r.box(0,l,-.3,X,h,0,ge,ge),y(.2,X-.2,g(3)-.1,g(3)+3.6,Ys),m();const ut=t.yAt(V[0],V[1]),vt=95.9,wt=23.8,Rt=4.4,Kt=-50*Math.PI/180,ve=100*Math.PI/180,ae=16,Ae=ut+3.75,he=h+.8,Me=(N,O=Rt)=>{const B=Kt+(ve-Kt)*N/ae;return[vt+O*Math.cos(B),wt+O*Math.sin(B)]};for(let N=0;N<ae;N++){const[O,B]=Me(N),[K,I]=Me(N+1),[j,J]=Me(N,Rt-.14),[rt,at]=Me(N+1,Rt-.14),ft=N%2?Ut(Zs,.955):Zs;r.quad(K,Ae,I,O,Ae,B,O,he,B,K,he,I,ft),r.quad(j,Ae,J,rt,Ae,at,rt,he,at,j,he,J,Ut(Zs,.7)),S([O,he,B,K,he,I,rt,he,at,j,he,J],Ut(Zs,.85))}const Oe=[];for(let N=0;N<=ae;N++)Oe.push(...Me(N,Rt-.14));const[ue,Z]=Me(0,Rt-.14);Oe.push(Me(ae,Rt-.14)[0],26.3,98.4,26.3,98.4,23.2,(ue+Z+75.2)/2,(ue+Z-75.2)/2),r.cap(Oe,Ae+.02,ui);const Dt=[];for(let N=0;N<=ae;N++)Dt.push(...Me(N,Rt+.9));Dt.push(Me(ae)[0],26.3,98.4,26.3,98.4,23.2,(ue+Z+75.2)/2,(ue+Z-75.2)/2),r.cap(Dt,ut+.32,aa);{const N=[101.6,c,21.4],O=[82,h+1.3,4],B=[86,h+1.3,29.6],K=[77,h+.5,13],I=$(4935765),j=.32;for(const[J,rt,at]of[[N,O,K],[N,K,B]])S([J[0],J[1],J[2],rt[0],rt[1],rt[2],at[0],at[1],at[2],at[0],at[1],at[2]],I),r.tri(J[0],J[1]-j,J[2],rt[0],rt[1]-j,rt[2],at[0],at[1]-j,at[2],Ut(I,1.6));for(const[J,rt]of[[N,O],[O,K],[K,B],[B,N]])r.quad(J[0],J[1]-j,J[2],rt[0],rt[1]-j,rt[2],rt[0],rt[1],rt[2],J[0],J[1],J[2],Ut(I,.9));for(const[J,rt,at]of[[99.3,25.5,c-1.2],[98.9,20.6,c-1.5],[94.2,27.9,h+2.2]]){const[ft,Tt]=s.centre(J,rt);r.cyl(J,t.yAt(ft,Tt)-.3,rt,.17,.17,at-t.yAt(ft,Tt)+.3,6,ui)}}const te=Jn.entry(),$t={pos:[],uv:[]};{const N=62*Math.PI/180,O=-34*Math.PI/180,B=14,K=Ae+.8,I=Ae+2.4;for(let j=0;j<B;j++){const J=zt=>{const Xt=N+(O-N)*zt/B;return s.centre(vt+(Rt+.05)*Math.cos(Xt),wt+(Rt+.05)*Math.sin(Xt))},[rt,at]=J(j),[ft,Tt]=J(j+1),Wt=j/B,mt=(j+1)/B;$t.pos.push(rt,K,at,ft,K,Tt,ft,I,Tt,rt,K,at,ft,I,Tt,rt,I,at),$t.uv.push(Wt,0,mt,0,mt,1,Wt,0,mt,1,Wt,1)}}M();const gt=s.south(0),be=s.south(-13),Ot=s.south(5.2),kt=-13,U=6.4;r.walls([0,0,0,gt,kt,be,kt,0],f,an,Ws);const T=[kt,0,0,0,0,-.6,U,-.6,U,Ot,5.2,Ot,kt,be];r.cap(T,ra,qs),r.walls(T,an,ra,ge),r.cap([0,-.6,U,-.6,U,Ot,5.2,Ot,0,gt],an,Ut(ge,.93));for(const[N,O]of[[-9,4],[-6,12],[-9.5,16]])r.box(N,ra,O,N+2.2,ra+1.1,O+1.3,oa,Ut(oa,.85));for(let N=1.2;N<gt-1;N+=2.6)for(const O of[1.6,4.4])r.quad(O-.14,an-.02,N-.14,O+.14,an-.02,N-.14,O+.14,an-.02,N+.14,O-.14,an-.02,N+.14,$(16774358),3);const tt=3.6;r.walls([0,-.3,tt,-.3,tt,s.south(tt),0,gt],f,Gt,fi),r.cap([0,-.3,tt,-.3,tt,s.south(tt),0,gt],Gt,aa);for(let N=1;N<=5;N++){const O=N*Hs;for(const B of[-.2,.2])r.cyl(4.3,Gt,O+B,.1,.1,an-Gt,7,ge);r.cyl(1.5,Gt,O+.5,.055,.055,an-Gt,5,Sn)}const pt=s.south(4.3)-.4;for(const[N,O]of[[-.3,Vs[0]],[Vs[1],pt]]){x(tt,f,N,5,Gt+.45,O,bl);for(let B=N+.9;B<O-.6;B+=1.7+a()*.9){const K=a();Math.abs(B/Hs-Math.round(B/Hs))<.12||(K<.55?b(4.3,Gt+.4,B,1.5+a()*1.1):K<.75?(r.cyl(4.3,Gt+.4,B,.07,.05,1.3,5,$(9076076)),r.blob(4.3,Gt+2.1,B,.85,.6,.85,7,4,El,la)):R(4.3,Gt+.4,B,.5))}for(let B=N;B<O-.2;B+=4.4){const K=Math.min(B+4.4,O),I=Zn((B+K)/2);if(!(I>Gt-.65)){x(5,f,B,6.3,I+.75,K,bl);for(let j=B+.5;j<K-.3;j+=.9+a()*.5)R(5.65,I+.7,j,.28+a()*.14,El,a()<.3?$(11122592):la)}}}{const[N,O]=Vs,B=Zn((N+O)/2)+.12,K=Gt-B,I=Math.round(K/.168),j=(6.3-tt-.3)/I;for(let J=0;J<I;J++)r.box(tt+.3+j*J,f,N,tt+.3+j*(J+1),Gt-K*(J+1)/I,O,fi);r.box(tt,f,N,tt+.3,Gt,O,fi);for(const J of[N+.12,(N+O)/2,O-.12]){for(const[rt,at]of[[tt+.3,Gt],[6.3,B]])r.box(rt-.03,at,J-.03,rt+.03,at+.95,J+.03,Sn,null);r.quad(tt+.3,Gt+.9,J-.03,6.3,B+.9,J-.03,6.3,B+.96,J+.03,tt+.3,Gt+.96,J+.03,Sn)}}{const N=K=>K>=-2?9.8:9.8+(K+2)*.6,O=K=>K<-.3?2.6:(K<Vs[0]||K>Vs[1])&&Zn(K)>Gt-.65?5:6.3,B=Ot+1;for(let K=-9.5;K<B;K+=1.5){const I=Math.min(K+1.5,B),j=Zn(K)+.12,J=Zn(I)+.12;S([O(K+.01),j,K,N(K),j,K,N(I),J,I,O(K+.01),J,I],aa),r.quad(N(K),j-1.2,K,N(I),J-1.2,I,N(I),J,I,N(K),j,K,fi)}x(2.2,f,-9.5,2.6,Zn(-5)+1.05,-.8)}x(2.6,f,-.8,4.5,an,-.3,null),x(kt,f,-.25,0,an,.02,null),p(s.wing(4.5,-.8),s.wing(2.6,-.8)),r.box(.15,Gt+3.8,0,1.75,Gt+4.4,.05,ge),v(.15,1.75,Gt+3,Gt+3.7,.05,Jn.pylonDental()),r.box(.15,Gt+2.3,0,1.75,Gt+2.9,.05,ge),v(.15,1.75,Gt+.8,Gt+1.5,.05,Jn.parking()),v(.15,1.75,Gt-.1,Gt+.7,.05,Jn.boot()),X=p(s.wing(0,gt),s.wing(0,0)),y(.4,X-.4,Gt,Gt+2.9),r.box(0,Gt+2.9,0,X,Gt+3.3,.12,$(9407106)),_(.2,X-.1,Gt+3.3,an-.05,1.25,Zs,.2,.3);for(let N=1;N<=5;N++)r.box(X-N*Hs-.9,Gt+3,.1,X-N*Hs-.82,Gt+3.08,1.5,Sn);v(X-19.6,X-16,Gt+3.5,Gt+4.7,.34,Jn.dental()),v(X-14.6,X-11.2,Gt+3.55,Gt+4.68,.34,Jn.medical()),X=p(s.wing(kt,0),s.wing(kt,be));{const N=g(X/2,3);r.box(.4,N-.3,-.5,X-.4,Gt-.6,.02,$(1777185),null);for(let O=0;O<=X;O+=X/4)r.box(O-.3,N-.5,0,O+.3,Gt-.6,.12,fi,null);r.box(0,Gt-.6,0,X,Gt,.12,fi),_(0,X,Gt,an,1.3,Xs)}X=p(s.wing(8.4,-2.8),s.wing(5.6,-4.4));{const N=Zn(-3.6)+.12;x(0,N-1,-.35,X,N+1.15,0),v(.2,X-.2,N+.14,N+1.02,.03,Jn.square())}M();{const N=Zn(15.6)+.12;r.box(6.9,N,15.2,7.4,N+.1,16,fi),r.box(6.95,N+.1,15.25,7.35,N+1.3,15.95,$(15855590),$(14276300)),r.box(7.35,N+.35,15.35,7.37,N+1,15.6,$(15909424),null),r.box(7.35,N+.3,15.65,7.37,N+.95,15.88,$(3108790),null);for(const[O,B,K]of[[9.2,-1.2,Math.PI],[5.4,-8.4,Math.PI*.75]]){const I=Zn(B)+.12,j=r.wx(O,B),J=r.wz(O,B);r.frame(j,0,J,s.wingHeading+K),r.cyl(0,I,0,.07,.07,4.2,6,Sn),r.box(-.17,I+2.9,.08,.17,I+3.95,.3,$(1776927));for(const[rt,at,ft]of[[0,14169643,0],[1,15114780,0],[2,3126359,2]]){const Tt=I+3.62-rt*.32;r.quad(-.1,Tt,.31,.1,Tt,.31,.1,Tt+.22,.31,-.1,Tt+.22,.31,Ut($(at),ft?1:.45),ft)}u()}}r.frame();const ot=new Qt(r.build(),qn());ot.castShadow=!0,ot.receiveShadow=!0,n.add(ot);for(const N of o){const O=new Re,B=N.corners;O.setAttribute("position",new re([B[0],B[1],B[2],B[3],B[4],B[5],B[6],B[7],B[8],B[0],B[1],B[2],B[6],B[7],B[8],B[9],B[10],B[11]],3)),O.setAttribute("uv",new re([0,0,1,0,1,1,0,0,1,1,0,1],2)),O.computeVertexNormals(),n.add(new Qt(O,Xu(N.tex)))}const _t=new Re;return _t.setAttribute("position",new re($t.pos,3)),_t.setAttribute("uv",new re($t.uv,2)),_t.computeVertexNormals(),n.add(new Qt(_t,Xu(te))),n}const ha=[3104138,12076090,15131350,4156234,2895411,14263361,8018572,10135469,15043163,4886453].map(i=>new Ct(i)),Yu=[3422271,5989488,2832981,7035464,2040100,11049860].map(i=>new Ct(i)),$u=[14727578,13211508,10252114,15782068,8016960].map(i=>new Ct(i)),Zu=[3811870,13214314,15260870,1907999,9067059].map(i=>new Ct(i)),k1=240,Ku=230;class G1{constructor(t,e,n,s,r=()=>!1){et(this,"group",new Ie);et(this,"walks",[]);et(this,"centres");et(this,"people",[]);et(this,"parts");et(this,"rand",Dn(9071));et(this,"noGo",[]);et(this,"drawnAt",[]);et(this,"m",new jt);et(this,"r",new jt);et(this,"q",new on);et(this,"v",new Q);et(this,"up",new Q(0,1,0));et(this,"one",new Q(1,1,1));et(this,"size",new Q);et(this,"hip",new jt);et(this,"body",new jt);this.hf=n,this.skip=r,this.group.name="strollers";for(const p of t){if(p.cls>3||p.flags&(Vr|Ns)||p.length<30)continue;const g=e[String(p.index)],v=g?[[1,g[0]/10],[-1,g[1]/10]]:p.cls<=2?[[1,2.3],[-1,2.3]]:[];for(const[S,_]of v){if(!(_>0))continue;const y=p.pts.length/3,E=new Float32Array(y*2),x=new Float32Array(y);for(let b=0;b<y;b++){const R=Math.max(b-1,0),w=Math.min(b+1,y-1);let L=p.pts[w*3]-p.pts[R*3],C=p.pts[w*3+2]-p.pts[R*3+2];const D=Math.hypot(L,C)||1;L/=D,C/=D;const A=p.width/2+_;E[b*2]=p.pts[b*3]-C*S*A,E[b*2+1]=p.pts[b*3+2]+L*S*A,b&&(x[b]=x[b-1]+Math.hypot(E[b*2]-E[b*2-2],E[b*2+1]-E[b*2-1]))}this.walks.push({pts:E,at:x,length:x[y-1]})}}this.centres=new Float32Array(this.walks.length*2),this.walks.forEach((p,g)=>{const v=Math.floor(p.pts.length/4)*2;this.centres[g*2]=p.pts[v],this.centres[g*2+1]=p.pts[v+1]});const a=qn({roughness:.84}),o=(p,g)=>{const v=new rn(p.build(),a,g);return v.castShadow=!0,v.frustumCulled=!1,v.count=0,v.setColorAt(0,new Ct(1,1,1)),this.group.add(v),v},l=$(16777215),c=$(12105912),h=new se;h.box(-.21,.84,-.12,.21,1.42,.12,l);const f=new se;f.blob(0,1.56,0,.11,.13,.11,6,3,l);const u=new se;u.box(-.08,-.84,-.09,.08,0,.09,l,null);const d=new se;d.box(-.04,-.58,-.09,.04,0,.09,l,null);const m=new se;m.box(-.12,.32,-.32,.12,.56,.3,l),m.box(-.09,.48,.26,.09,.7,.48,l),m.box(-.05,.5,.46,.05,.6,.58,c);for(const p of[-.08,.08])m.box(p-.03,.68,.3,p+.03,.78,.36,c);m.box(-.025,.5,-.5,.025,.56,-.3,l);for(const[p,g]of[[-.08,.2],[.08,.2],[-.08,-.22],[.08,-.22]])m.box(p-.035,0,g-.04,p+.035,.34,g+.04,c);const M=new se;M.box(-.012,0,-.012,.012,1,.012,$(13123631),null),this.parts={torso:o(h,s),head:o(f,s),leg:o(u,s*2),arm:o(d,s*2),dog:o(m,s),lead:o(M,s)},this.parts.lead.castShadow=!1;for(let p=0;p<s;p++)this.people.push(this.newWalker())}newWalker(){return{walk:this.walks[0],s:-1,dir:1,pace:1.15+this.rand()*.4,tall:.92+this.rand()*.12,lane:(this.rand()-.5)*.5,dog:this.rand()<.35?Math.floor(this.rand()*Zu.length):-1,heading:0,dogHeading:0}}place(t,e,n){const s=[];for(let r=0;r<this.walks.length;r++)Math.hypot(this.centres[r*2]-e,this.centres[r*2+1]-n)<Ku*.8&&s.push(r);return s.length?(t.walk=this.walks[s[Math.floor(this.rand()*s.length)]],t.s=this.rand()*t.walk.length,t.dir=this.rand()<.5?1:-1,!0):!1}where(t,e){const n=t.at,s=t.pts;let r=0,a=n.length-1;for(;a-r>1;){const f=r+a>>1;n[f]<e?r=f:a=f}const o=n[a]-n[r]||1,l=Math.min(1,Math.max(0,(e-n[r])/o)),c=(s[a*2]-s[r*2])/o,h=(s[a*2+1]-s[r*2+1])/o;return[s[r*2]+(s[a*2]-s[r*2])*l,s[r*2+1]+(s[a*2+1]-s[r*2+1])*l,c,h]}setNoGo(t){this.noGo=t}pick(t,e){let n=null;if(!this.group.visible)return n;for(let s=0;s<this.drawnAt.length;s+=3){const r=this.drawnAt[s],a=this.drawnAt[s+1],o=this.drawnAt[s+2],l=hl({o:t,d:e},r,o,a,a+1.8,1.5);l>0&&(!n||l<n.t)&&(n={type:"person",x:r,z:o,t:l})}return n}update(t,e,n,s){const r=s<k1&&this.walks.length>0;if(this.group.visible=r,!r)return!1;const a=this.parts;this.drawnAt.length=0;let o=0,l=0;for(const c of this.people){if(c.s<0&&!this.place(c,e,n))continue;c.s+=c.dir*c.pace*t,(c.s>c.walk.length||c.s<0)&&(c.dir=-c.dir,c.s=Math.min(c.walk.length,Math.max(0,c.s)));let[h,f,u,d]=this.where(c.walk,c.s);if(Math.hypot(h-e,f-n)>Ku){c.s=-1;continue}if(u*=c.dir,d*=c.dir,h+=d*c.lane,f-=u*c.lane,this.skip(h,f)||this.noGo.some(([S,_,y])=>(h-S)**2+(f-_)**2<y*y))continue;let m=Math.atan2(u,d)-c.heading;m=Math.atan2(Math.sin(m),Math.cos(m)),c.heading+=m*Math.min(1,t*5);const M=this.hf.yAt(h,f)+.02,p=c.tall,g=Math.sin(c.s*4.4)*.55;this.q.setFromAxisAngle(this.up,c.heading),this.drawnAt.push(h,M,f),this.body.compose(this.v.set(h,M,f),this.q,this.size.set(p,p,p)),a.torso.setMatrixAt(o,this.body),a.head.setMatrixAt(o,this.body);const v=o*7+Math.floor(c.pace*100)>>>0;a.torso.setColorAt(o,ha[v%ha.length]),a.head.setColorAt(o,$u[v%$u.length]);for(const[S,_]of[[0,-1],[1,1]])this.r.makeRotationX(_*g).premultiply(this.hip.makeTranslation(_*.09,.84,0).premultiply(this.body)),a.leg.setMatrixAt(o*2+S,this.r),a.leg.setColorAt(o*2+S,Yu[v%Yu.length]),this.r.makeRotationX(-_*g*.8).premultiply(this.hip.makeTranslation(_*.25,1.38,0).premultiply(this.body)),a.arm.setMatrixAt(o*2+S,this.r),a.arm.setColorAt(o*2+S,ha[v%ha.length]);if(c.dog>=0){const S=h+u*1+d*.75,_=f+d*1-u*.75;let y=Math.atan2(u,d)-c.dogHeading;y=Math.atan2(Math.sin(y),Math.cos(y)),c.dogHeading+=y*Math.min(1,t*4);const E=Math.abs(Math.sin(c.s*7))*.03;this.q.setFromAxisAngle(this.up,c.dogHeading),this.m.compose(this.v.set(S,this.hf.yAt(S,_)+.02+E,_),this.q,this.one),a.dog.setMatrixAt(l,this.m),a.dog.setColorAt(l,Zu[c.dog]);const x=h+d*.26*p+u*.1,b=f-u*.26*p+d*.1,R=M+.86*p,w=S+u*.3,L=_+d*.3,C=this.hf.yAt(S,_)+.62,D=x-w,A=R-C,F=b-L,G=Math.hypot(D,A,F)||1;this.q.setFromUnitVectors(this.up,this.v.set(D/G,A/G,F/G)),this.m.compose(this.v.set(w,C,L),this.q,this.size.set(1,G,1)),a.lead.setMatrixAt(l,this.m),l++}o++}a.torso.count=a.head.count=o,a.leg.count=a.arm.count=o*2,a.dog.count=a.lead.count=l;for(const c of Object.values(a))c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0);return o>0}dispose(){for(const t of Object.values(this.parts))t.geometry.dispose(),t.dispose()}}function H1(){const i=[];let t=new se;t.cyl(0,0,0,.04,.026,.56,4,$(12168602)),ss(t,0,.72,0,.36,.3,.36,2,$(4020790),$(9086578)),ss(t,.17,.52,.1,.24,.19,.24,3,$(3757370),$(8099942)),i.push(yi(t)),t=new se,t.cyl(0,0,0,.06,.045,.36,4,$(7034954)),ss(t,0,.62,0,.47,.4,.47,4,$(2773542),$(7973460)),i.push(yi(t)),t=new se,t.cyl(0,0,0,.05,.035,.42,4,$(6246470)),ss(t,0,.66,0,.5,.34,.5,5,$(6114450),$(12034278)),i.push(yi(t)),t=new se,t.cyl(0,0,0,.07,.05,.5,4,$(6969418)),ss(t,0,.7,0,.62,.26,.62,6,$(4156975),$(14831660)),i.push(yi(t)),t=new se,t.cyl(0,0,0,.034,.026,.82,5,$(10128504));for(let e=0;e<7;e++)t.frame(0,0,0,e/7*Math.PI*2),t.blob(0,.83-e%2*.03,.13,.04,.022,.13,4,3,$(3959600),$(7972432));return t.frame(),t.blob(0,.86,0,.06,.06,.06,5,3,$(5077562)),i.push(yi(t)),t=new se,t.cyl(0,0,0,.03,.022,.2,4,$(5194038)),t.cyl(0,.14,0,.2,.1,.3,6,$(2310186)),t.cyl(0,.4,0,.16,.07,.3,6,$(2837040)),t.cyl(0,.66,0,.11,0,.34,6,$(3627578)),i.push(yi(t)),t=new se,ss(t,0,.45,0,.8,.5,.8,1,$(3101224),$(7774294)),i.push(yi(t)),i}function V1(i,t,e,n=()=>!1){return p_(i.trees,H1(),t,e,n,{tile:400,near:300})}const Al=6,W1=1,Ju=2,X1=3,q1=4,Y1=5,$1=6,Z1=7,K1=8,J1=9,Q1=10,j1=11,tv=12,ev=13,nv=14,iv=17,yn=90,Qu=330,Ei=$(9409430),Tl=$(2500651),sv=$(9071178),rv=$(13815750),Rl=$(3104058),av=$(11022890),ov=$(14268718),ju=[5209412,5932872,6853456,4682303,7245642].map($),tf=[14241898,15262416,14726447,11038665].map($),ef=[3104138,12076090,15131350,4156234,2895411,14263361,8018572,10135469].map($),nf=[8359802,13223088,9278358,6253414,14210508].map($),sf=[10463130,13223088,7306612,14210508].map($),rf=[3811870,13214314,15260870,1907999,9067059].map($),lv=[$(15855592),$(9075560),$(10246723),$(2763822)];function cv(i,t,e=0){const n=rf[t%rf.length],s=Ut(n,.7);i.box(-.32,.32,-.12,.3,.56,.12,n),i.box(.26,.48,-.09,.48,.7,.09,n),i.box(.46,.5,-.05,.58,.6,.05,s);for(const r of[-.08,.08])i.box(.3,.68,r-.03,.36,.78,r+.03,s);i.box(-.5,.5,-.025,-.3,.56,.025,n);for(const[r,a,o]of[[.2,-.08,e],[.2,.08,-e],[-.22,-.08,-e],[-.22,.08,e]])i.box(r-.04+o*.12,0,a-.035,r+.04+o*.12,.34,a+.035,s)}function Cl(i,t,e,n){const s=i/2+n,r=t/2+n;if(!e)return[[-s,-r],[s,-r],[s,r],[-s,r]];const a=Math.min(r,s),o=[];for(const[l,c]of[[s-a,-Math.PI/2],[-s+a,Math.PI/2]])for(let h=0;h<=6;h++){const f=c+h/6*Math.PI;o.push([l+Math.cos(f)*a,Math.sin(f)*a])}return o}class hv{constructor(t,e,n,s,r=()=>!1){et(this,"group",new Ie);et(this,"cells",new Map);et(this,"built",new Map);et(this,"material",qn({roughness:.84}));et(this,"water",new Ye({color:4635862,roughness:.08,metalness:.1,emissive:871260,emissiveIntensity:.35,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}));et(this,"flatMat",qn({roughness:.9}));et(this,"far");this.data=t,this.hf=e,this.shadows=n,this.near=s,this.skip=r,this.far=s+150,this.group.name="yards",this.flatMat.polygonOffset=!0,this.flatMat.polygonOffsetFactor=-2,this.flatMat.polygonOffsetUnits=-4;for(let a=0;a+Al<=t.length;a+=Al){const o=`${Math.floor(t[a+1]/10/yn)}:${Math.floor(t[a+2]/10/yn)}`;let l=this.cells.get(o);l||this.cells.set(o,l=[]),l.push(a)}}get count(){return this.data.length/Al}update(t,e,n){const s=n<Qu;let r=this.group.visible!==s;this.group.visible=s;for(const[f,u]of this.built){const[d,m]=f.split(":").map(Number);Math.hypot((d+.5)*yn-t,(m+.5)*yn-e)>this.far&&(this.group.remove(u),u.traverse(M=>{var p;return(p=M.geometry)==null?void 0:p.dispose()}),this.built.delete(f),r=!0)}if(!s)return r;let a=null,o=this.near;const l=Math.floor(t/yn),c=Math.floor(e/yn),h=Math.ceil(this.near/yn)+1;for(let f=c-h;f<=c+h;f++)for(let u=l-h;u<=l+h;u++){const d=`${u}:${f}`;if(this.built.has(d)||!this.cells.has(d))continue;const m=Math.hypot((u+.5)*yn-t,(f+.5)*yn-e);m<o&&(o=m,a=d)}if(a){const f=this.build(this.cells.get(a));this.built.set(a,f),this.group.add(f),r=!0}return r}pending(t,e,n){if(n>=Qu)return!1;for(const s of this.cells.keys()){if(this.built.has(s))continue;const[r,a]=s.split(":").map(Number);if(Math.hypot((r+.5)*yn-t,(a+.5)*yn-e)<this.near)return!0}return!1}build(t){const e=this.data,n=this.hf,s=new se,r=new se,a=new se;for(const c of t){const h=e[c],f=e[c+1]/10,u=e[c+2]/10,d=e[c+3]/10*Math.PI/180,m=e[c+4],M=e[c+5];if(this.skip(f,u))continue;const p=n.yAt(f,u),g=e[c+1]*31+e[c+2]*17>>>0,v=Dn(g+7);switch(h){case W1:case Ju:{const S=m/100,_=M/100,y=h===Ju,E=Cl(S,_,y,0),x=Cl(S,_,y,.6),b=Cl(S,_,y,1.5),R=(C,D,A)=>{const F=f+C*Math.cos(d)-D*Math.sin(d),G=u+C*Math.sin(d)+D*Math.cos(d);return[F,n.yAt(F,G)+A,G]},w=$(4635862);for(let C=1;C+1<E.length;C++){const D=R(...E[0],.05),A=R(...E[C],.05),F=R(...E[C+1],.05);a.tri(D[0],D[1],D[2],F[0],F[1],F[2],A[0],A[1],A[2],w)}for(let C=0;C<E.length;C++){const D=(C+1)%E.length,A=R(...E[C],.07),F=R(...E[D],.07),G=R(...x[C],.07),z=R(...x[D],.07);r.quad(A[0],A[1],A[2],G[0],G[1],G[2],z[0],z[1],z[2],F[0],F[1],F[2],rv)}const L=$(1974307);for(let C=0;C<b.length;C++){const D=(C+1)%b.length,[A,,F]=R(...b[C],0),[G,,z]=R(...b[D],0),W=Math.hypot(G-A,z-F);if(W<.2)continue;const V=(G-A)/W,k=(z-F)/W,H=Math.max(1,Math.round(W/.25));for(let X=0;X<H;X++){const ht=A+V*(X*W/H),Y=F+k*(X*W/H),ct=n.yAt(ht,Y),lt=X%Math.max(1,Math.round(2.4/.25))===0?.03:.011;this.skip(ht,Y)||(s.frame(ht,ct,Y,Math.atan2(V,k)),s.box(-lt,0,-lt,lt,1.2,lt,L,null))}for(const X of[.1,1.15]){const ht=n.yAt(A,F)+X,Y=n.yAt(G,z)+X;s.frame(),s.quad(A,ht,F,G,Y,z,G,Y+.04,z,A,ht+.04,F,L)}}break}case X1:{const S=m/100;s.frame(f,p,u,d),s.cyl(0,0,0,.04,.04,2.1,6,Ei);for(let _=0;_<4;_++){const y=Math.cos(_*Math.PI/2),E=Math.sin(_*Math.PI/2);s.quad(0,1.95,0,y*S,2.08,E*S,y*S,2.12,E*S,0,1.99,0,Ei)}for(const _ of[.45,.72,1]){const y=S*_;for(let E=0;E<4;E++){const x=E*Math.PI/2,b=(E+1)*Math.PI/2,R=1.95+.13*_;s.box(Math.min(Math.cos(x)*y,Math.cos(b)*y)-.008,R-.008,Math.min(Math.sin(x)*y,Math.sin(b)*y)-.008,Math.max(Math.cos(x)*y,Math.cos(b)*y)+.008,R+.008,Math.max(Math.sin(x)*y,Math.sin(b)*y)+.008,$(13619922),null)}}if(v()<.55)for(let _=0;_<4;_++){if(v()<.45)continue;const y=_*Math.PI/2,E=S*.95;for(let x=0;x<3;x++){const b=(x+.5)/3,R=Math.cos(y)*E*(1-b)+Math.cos(y+Math.PI/2)*E*b,w=Math.sin(y)*E*(1-b)+Math.sin(y+Math.PI/2)*E*b,L=.5+v()*.35,C=.22+v()*.12,D=ef[Math.floor(v()*ef.length)],A=(Math.cos(y+Math.PI/2)-Math.cos(y))*.7071,F=(Math.sin(y+Math.PI/2)-Math.sin(y))*.7071;s.quad(R-A*C,2.1,w-F*C,R+A*C,2.1,w+F*C,R+A*C,2.1-L,w+F*C,R-A*C,2.1-L,w-F*C,D)}}break}case q1:{const S=sf[g%sf.length],_=m/200,y=M/200;s.frame(f,p,u,d),s.box(-_,0,-y,_,1.9,y,S),s.quad(-_-.1,1.85,y+.1,_+.1,1.85,y+.1,_+.1,2.25,0,-_-.1,2.25,0,Ut(S,1.08)),s.quad(_+.1,1.85,-y-.1,-_-.1,1.85,-y-.1,-_-.1,2.25,0,_+.1,2.25,0,Ut(S,.95)),s.tri(_,1.9,y,_,1.9,-y,_,2.25,0,S),s.tri(-_,1.9,-y,-_,1.9,y,-_,2.25,0,S),s.quad(-.75,0,y+.01,.75,0,y+.01,.75,1.75,y+.01,-.75,1.75,y+.01,Ut(S,.86)),s.box(-.01,.1,y+.01,.01,1.7,y+.03,Ut(S,.7),null);break}case Y1:{const S=m/100,_=.85,y=[$(3108789),$(3840586),$(14262842)][g%3];s.frame(f,p,u,d),s.cyl(0,_-.02,0,S+.25,S+.25,.08,12,y,y),s.cyl(0,_,0,S,S,.07,12,Tl,Tl);for(let E=0;E<6;E++){const x=E/6*Math.PI*2,b=Math.cos(x)*(S+.2),R=Math.sin(x)*(S+.2);E%2===0&&s.box(b-.03,0,R-.03,b+.03,_,R+.03,Ei,null),s.box(b-.025,_,R-.025,b+.025,_+1.75,R+.025,$(2895667),null);const w=(E+1)/6*Math.PI*2,L=Math.cos(w)*(S+.2),C=Math.sin(w)*(S+.2);s.quad(b,_+1.7,R,L,_+1.7,C,L,_+1.76,C,b,_+1.76,R,y)}break}case $1:{const S=m/100,_=M/100,y=nf[g%nf.length];s.frame(f,p,u,0),s.cyl(0,0,0,S,S,_,10,y,Ut(y,.9));for(let E=1;E<4;E++)s.cyl(0,_*E/4,0,S+.012,S+.012,.04,10,Ut(y,.86));s.cyl(0,_,0,.18,.18,.08,6,Ut(y,.8),Ut(y,.8));break}case Z1:s.frame(f,p,u,d),s.box(-.6,0,-.3,.6,.85,.3,$(2895409)),s.box(-.55,.85,-.28,.55,1.1,.28,$(10133154),$(3816512));break;case K1:{const S=v()<.5?$(15526370):$(3882304),_=[$(15328207),$(3104138),$(12076090)][g%3];s.frame(f,p,u,d),s.cyl(0,.7,0,.55,.55,.05,8,S,S),s.box(-.04,0,-.04,.04,.7,.04,Ei,null),v()<.5&&(s.box(-.025,.7,-.025,.025,2.2,.025,Ei,null),s.cyl(0,2,0,1.4,0,.45,8,_));for(let y=0;y<4;y++){const E=y/4*Math.PI*2+.4,x=Math.cos(E)*.85,b=Math.sin(E)*.85;s.box(x-.22,0,b-.22,x+.22,.45,b+.22,S),s.box(x+Math.cos(E)*.2-.04,.45,b+Math.sin(E)*.2-.2,x+Math.cos(E)*.2+.04,.9,b+Math.sin(E)*.2+.2,S)}break}case J1:{const S=$(13123631),_=$(3104680);s.frame(f,p,u,d);for(const y of[-1.9,1.9])s.box(y-.07,0,-.92,y+.07,2.4,-.88,S,null),s.box(y-.07,0,.88,y+.07,2.4,.92,S,null);s.box(-2,2.36,-.07,2,2.48,.07,S);for(const y of[-.9,.9]){for(const E of[-.22,.22])s.box(y-.015,.48,E-.015,y+.015,2.38,E+.015,Ei,null);s.box(y-.24,.44,-.24,y+.24,.5,.24,y<0?_:Tl)}break}case Q1:s.frame(f,p,u,d),s.box(-.62,0,-.3,-.04,1,.3,Rl,av),s.box(.04,0,-.3,.62,1,.3,Rl,ov),v()<.4&&s.box(.7,0,-.3,1.28,1,.3,Rl,$(6265402));break;case j1:{const S=[$(15855592),$(2763822),$(10246723),$(13218442)][g%4];s.frame(f,p,u,d),g%3===0?s.box(-.22,0,-.22,.22,1.05,.22,$(10246723)):s.box(-.04,0,-.04,.04,.95,.04,Ei,null),s.box(-.2,.95,-.15,.2,1.25,.15,S);break}case tv:{const S=m/100,_=Math.max(2,Math.round(S/1.2)),y=Dn(M+11);s.frame(f,p,u,d);for(let E=0;E<_;E++){const x=_===1?0:E/(_-1)*S,b=.35+y()*.25,R=ju[Math.floor(y()*ju.length)],w=y()<.25?tf[Math.floor(y()*tf.length)]:Ut(R,1.12),L=f+Math.sin(d)*x,C=u+Math.cos(d)*x;s.frame(L,n.yAt(L,C),C,0),s.blob((y()-.5)*.3,b*.75,(y()-.5)*.3,b,b*.85,b,6,3,Ut(R,.8),w)}break}case ev:{const S=m/10,_=M/10,y=Math.round(e[c+3]/10)%4,E=lv[y],x=Math.hypot(S-f,_-u);if(x<.5)break;const b=(S-f)/x,R=(_-u)/x,w=Math.atan2(b,R),L=y===2?.8:y===1?1.2:1,C=Math.max(1,Math.round(x/2.4));for(let D=0;D<=C;D++){const A=f+b*(x*D)/C,F=u+R*(x*D)/C;s.frame(A,n.yAt(A,F),F,w);const G=y===2?.2:.05;s.box(-G,0,-G,G,L+(y===2?.15:.05),G,y===2?Ut(E,.9):E)}if(y===1||y===2)for(let D=0;D<C;D++){const A=f+b*(x*D)/C,F=u+R*(x*D)/C,G=f+b*(x*(D+1))/C,z=u+R*(x*(D+1))/C,W=n.yAt(A,F),V=n.yAt(G,z),k=R*.06,H=-b*.06;s.frame(),s.quad(A+k,W,F+H,G+k,V,z+H,G+k,V+L,z+H,A+k,W+L,F+H,E),s.quad(G-k,V,z-H,A-k,W,F-H,A-k,W+L,F-H,G-k,V+L,z-H,Ut(E,.92)),s.quad(A+k,W+L,F+H,G+k,V+L,z+H,G-k,V+L,z-H,A-k,W+L,F-H,Ut(E,1.05))}else{const D=y===0?.16:.12,A=Math.max(2,Math.round(x/D));for(let F=0;F<=A;F++){const G=f+b*(x*F)/A,z=u+R*(x*F)/A;s.frame(G,n.yAt(G,z),z,w),y===0?s.box(-.035,0,-.012,.035,L-.08,.012,E,$(15263454)):s.box(-.01,.05,-.01,.01,L-.05,.01,E,null)}for(const F of[.25,L-.2]){s.frame();const G=n.yAt(f,u)+F,z=n.yAt(S,_)+F,W=R*.02,V=-b*.02;s.quad(f+W,G,u+V,S+W,z,_+V,S+W,z+.05,_+V,f+W,G+.05,u+V,Ut(E,.95)),s.quad(S-W,z,_-V,f-W,G,u-V,f-W,G+.05,u-V,S-W,z+.05,_-V,Ut(E,.9))}}break}case nv:{const S=[$(15328208),$(14205066),$(10469584)][g%3];s.frame(f,p,u,d);for(const[_,y]of[[-.8,-.7],[.8,-.7],[.8,.7],[-.8,.7]])s.box(_-.05,0,y-.05,_+.05,.9,y+.05,sv,null);s.box(-.85,.9,-.75,.85,2,.75,S),s.quad(-.95,1.95,.85,.95,1.95,.85,.95,2.5,0,-.95,2.5,0,$(9128506)),s.quad(.95,1.95,-.85,-.95,1.95,-.85,-.95,2.5,0,.95,2.5,0,$(8077107)),s.tri(.85,2,.75,.85,2,-.75,.85,2.5,0,S),s.tri(-.85,2,-.75,-.85,2,.75,-.85,2.5,0,S),s.quad(.9,.9,-.3,1.6,0,-.3,1.6,0,.3,.9,.9,.3,$(14726447));break}case iv:s.frame(f,p,u,d),cv(s,m);break}}const o=new Ie,l=(c,h,f)=>{if(!c.vertexCount)return;const u=new Qt(c.build(),h);u.castShadow=f&&this.shadows,u.receiveShadow=!0,o.add(u)};return l(s,this.material,!0),l(r,this.flatMat,!1),l(a,this.water,!1),o}dispose(){for(const t of this.built.values())t.traverse(e=>{var n;return(n=e.geometry)==null?void 0:n.dispose()});this.built.clear(),this.material.dispose(),this.flatMat.dispose(),this.water.dispose()}}const af=1,of={x:-150,z:-40,dist:2900,polar:54,azimuth:22},uv={day:{shallow:9277288,deep:5003844},golden:{shallow:10127458,deep:4671290},night:{shallow:1976876,deep:593681}};function fv(i,t){const e=new se,n=$(16765440),s=i.length/2;let r=0;for(let l=0;l<s;l++){const c=(l+1)%s,h=i[l*2]/10,f=i[l*2+1]/10,u=i[c*2]/10,d=i[c*2+1]/10,m=Math.hypot(u-h,d-f);if(m<.01)continue;const M=(u-h)/m,p=(d-f)/m;for(let g=-r;g<m;g+=15){const v=Math.max(0,g),S=Math.min(m,g+9);if(S<=v)continue;const _=Math.max(1,Math.ceil((S-v)/5));for(let y=0;y<_;y++){const E=v+(S-v)*y/_,x=v+(S-v)*(y+1)/_,b=h+M*E,R=f+p*E,w=h+M*x,L=f+p*x,C=t.yAt(b,R)+.9,D=t.yAt(w,L)+.9;e.quad(b-p*1.1,C,R+M*1.1,w-p*1.1,D,L+M*1.1,w+p*1.1,D,L-M*1.1,b+p*1.1,C,R-M*1.1,n)}}r=(r+m)%15}const a=e.build();a.deleteAttribute("glow");const o=new Qt(a,il(new Wn({vertexColors:!0,transparent:!0,opacity:.9,side:we,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12})));return o.name="boundary",o}function dv(i){const t=i==null?void 0:i.material;t&&(t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},t.customProgramCacheKey=()=>"moorooka-streets")}function pv(i,t){const e=[];for(let o=0;o+3<i.length;o+=4){const l=i[o]/10,c=i[o+1]/10,h=i[o+2]/10,f=i[o+3]/10,u=Math.hypot(h-l,f-c);if(u<.5)continue;const d=-(f-c)/u*.06,m=(h-l)/u*.06,M=Math.max(1,Math.ceil(u/2));for(let p=0;p<M;p++){const g=l+(h-l)*p/M,v=c+(f-c)*p/M,S=l+(h-l)*(p+1)/M,_=c+(f-c)*(p+1)/M,y=t.yAt(g,v)+.07,E=t.yAt(S,_)+.07;e.push(g-d,y,v-m,S-d,E,_-m,S+d,E,_+m,g-d,y,v-m,S+d,E,_+m,g+d,y,v+m)}}const r=new Re;r.setAttribute("position",new re(e,3));const a=new Qt(r,il(new Wn({color:14605522,side:we,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})));return a.name="painted-lines",a}class mv extends f_{constructor(e,n,s,r){super(e,n,s,{name:"3D model of Moorooka",home:of,intro:{...of,dist:6400,polar:22,azimuth:-24},minDistance:22,followGround:!0,maxDistance:7e3,externalStart:[-150,720,1500,0,-.5]},r);et(this,"water");et(this,"life");et(this,"boundary");et(this,"terrain");et(this,"model");et(this,"aerial");et(this,"aerialWanted",!1);et(this,"level",0);et(this,"boundaryOn",!0);et(this,"flood");et(this,"floodLoading");et(this,"floodLevel",1);et(this,"rising",0);et(this,"groundDetail");et(this,"levels",[]);et(this,"uploader");et(this,"tilesAt",0);et(this,"sharpening",!1);et(this,"inBuilding");et(this,"strokes",[]);et(this,"removed",{});et(this,"marks");et(this,"sharpState","no");et(this,"detailGround");et(this,"detail");et(this,"kerbs");et(this,"fences");et(this,"buildingsCull");et(this,"trees");et(this,"reach",[130,1100,300,380,420,380,160]);et(this,"yards");et(this,"strollers");this.options=r}async build(e,n,s){var R,w,L;let r;try{r=await O_(this.options.assets,(C,D)=>this.cb.onProgress(C*.6,D),this.abort.signal)}catch(C){throw new cl(C instanceof Error?C.message:"The model data could not be loaded.")}const{town:a,heights:o,ground:l}=r;this.meta=a.meta,this.level=a.meta.waterLevel*af;const c=this.clearTest();l.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.model=l,await s(.62,"Shaping the terrain");const[h,f]=a.meta.grid,u=new Xx(o,new Float32Array(h*f),h,f,a.meta.size[0],a.meta.size[1],e.step,af),d={value:a.meta.waterLevel},m=A_(u,l,d,{title:"MOOROOKA",subtitle:"Brisbane, Queensland   ·   27.53° S  153.03° E   ·   Postcode 4105",scale:a.meta.size[0]/8010},{closeUp:!0});this.terrain=m.getObjectByName("terrain").material,this.groundDetail=m.userData.detail;const M=this.options.assets.detail;M&&a.detailGrid&&n!=="low"&&this.levels.push({grid:a.detailGrid,first:0,slots:n==="medium"?2:Fs,reach:1400,near:1.6,keep:4,url:M,tiles:new Map,wanted:[]}),this.offerSharpGround(n,u),this.scene.add(m),this.water=N_(u,d),this.scene.add(this.water.skirt,this.water.mesh),await s(.68,"Laying out the streets");const p=M_(a,u,{suburbMarkings:!0,groundDrawsRoads:!0});dv(p.group.getObjectByName("roads")),this.scene.add(p.group,E1(a,u)),this.boundary=fv(a.boundary,u),this.scene.add(this.boundary),await s(.76,"Raising the buildings");const g=o1(a.meta),v=Z_(a,u,[...g,this.fromLatLon(Hu[0],Hu[1])],c);this.inBuilding=K_(a.buildings),this.buildingsCull=v.cull;const S=l1(a.meta,u,v.reserved);this.detailGround=S.ground,this.detail=S;const _=z1(a.meta);if(this.scene.add(v.group,S.group,B1(a.meta,u,v.reserved[g.length]),d1(a,u,p.index,c,_)),n!=="low"){this.kerbs=x1(p.paths,p.index,u,(D,A)=>_(D,A)||c(D,A),a.footpaths),this.scene.add(this.kerbs.group);const C=Mu(a.meta);this.fences=h1(a,u,(D,A)=>C(D,A)||c(D,A)).group;for(const D of this.fences.children)D.geometry.computeBoundingSphere();this.scene.add(this.fences)}await s(.88,"Planting trees");const y=a1(a.meta,v.reserved),E=[];for(let C=0;C<a.trees.length;C+=Xh){const D=a.trees[C]/4,A=a.trees[C+1]/4;!y(D,A)&&!_(D,A)&&!c(D,A)&&E.push(a.trees[C],a.trees[C+1],a.trees[C+2])}const x=V1({...a,trees:Int16Array.from(E)},u,e.trees);if(this.scene.add(x.group),this.trees=x,this.reach=n==="high"?[220,1600,480,650,750,700,260]:n==="medium"?[130,1100,300,380,420,380,160]:[90,800,200,0,0,260,110],await s(.94,"Starting the traffic"),this.life=new R1(a,u,p.paths,p.index,c,_),this.scene.add(this.life.group),n!=="low"){const C=Mu(a.meta),D=(A,F)=>C(A,F)||_(A,F)||c(A,F);this.strollers=new G1(p.paths,a.footpaths??{},u,n==="high"?30:14,D),this.scene.add(this.strollers.group),this.loadYards(u,n==="high"&&e.shadow>0,n==="high"?220:140,D)}this.life.setParkedGone(this.removed.cars??[]),(w=(R=this.trees).setGone)==null||w.call(R,this.removed.trees??[]),(L=this.strollers)==null||L.setNoGo(this.removed.people??[]);const b=l_(P1,a.meta,u);return{hf:u,atmosphere:new Hx(this.renderer,this.water,e.shadow,uv),places:b,roadPaths:p.paths,roadIndex:p.index,info:{quality:n,buildings:v.count,buildingsInSuburb:a.counts.inside,trees:x.count,sources:a.meta.sources,places:b}}}get hasFlood(){return!!this.options.assets.floods&&!!this.options.assets.floodFile}get floodDrop(){var e;return((e=this.flood)==null?void 0:e.info.drop)??8}async floods(){return(await this.floodLayer()).info.events}async floodLayer(){if(this.flood)return this.flood;const{floods:e,floodFile:n}=this.options.assets;if(!e||!n||!this.hf)throw new Error("This copy of the model has no floods.");this.floodLoading??(this.floodLoading=pl.load(this.hf,e,n,this.abort.signal).then(s=>{if(this.disposed)throw s.dispose(),new Error("The model has been closed.");return this.flood=s,this.scene.add(s.mesh),s}));try{return await this.floodLoading}catch(s){throw this.floodLoading=void 0,s}}async setFlood(e){if(cancelAnimationFrame(this.rising),!e){this.flood&&await this.flood.show(""),this.invalidate();return}const n=await this.floodLayer();if(await n.show(e,this.abort.signal),this.disposed||n.current!==e)return;const s=performance.now(),r=()=>{var o,l;const a=Math.min(1,(performance.now()-s)/2600);this.applyFloodLevel(a*a*(3-2*a)),(l=(o=this.options).onFloodLevel)==null||l.call(o,this.floodLevel),a<1&&!this.disposed&&(this.rising=requestAnimationFrame(r))};this.applyFloodLevel(0),this.rising=requestAnimationFrame(r)}setFloodLevel(e){cancelAnimationFrame(this.rising),this.applyFloodLevel(e)}applyFloodLevel(e){var n;this.floodLevel=_e.clamp(e,0,1),(n=this.flood)==null||n.setLower((1-this.floodLevel)*this.floodDrop),this.invalidate()}floodSurfaceAt(e,n,s=!1){return this.flood?this.flood.surfaceAt(e,n,s):-1/0}tick(e,n){var s,r;this.water.uniforms.uTime.value=n,(s=this.flood)==null||s.tick(n),(r=this.life)==null||r.update(e),this.strollers&&this.hf&&this.strollers.update(e,this.viewFocus.x,this.viewFocus.z,this.heightOverGround())}drawByDistance(){var h,f,u,d,m;const e=this.camera.position,[n,s,r,a,o,l,c]=this.reach;if((h=this.buildingsCull)==null||h.call(this,e.x,e.y,e.z,l),(f=this.detail)==null||f.cull(e.x,e.y,e.z,c),(u=this.life)==null||u.cull(e.x,e.y,e.z,n,s),(d=this.trees)==null||d.cull(e.x,e.y,e.z,r),(m=this.kerbs)==null||m.cull(e.x,e.y,e.z,a),this.fences)for(const M of this.fences.children){const p=M.geometry.boundingSphere;M.visible=Math.hypot(Math.max(0,Math.hypot(p.center.x-e.x,p.center.z-e.z)-p.radius),p.center.y-e.y)<o}}heightOverGround(){const e=this.camera.position;return e.y-this.hf.yAt(e.x,e.z)}loadYards(e,n,s,r){const a=this.options.assets.yards;a&&fetch(a,{signal:this.abort.signal}).then(o=>o.ok?o.arrayBuffer():null).then(o=>{!o||this.disposed||(this.yards=new hv(new Int16Array(o),e,n,s,r),this.scene.add(this.yards.group),this.invalidate())}).catch(()=>{})}get waterLevel(){return this.level}setLabelsVisible(e){super.setLabelsVisible(e),this.boundaryOn=e,this.boundary&&(this.boundary.visible=e)}setExternalCamera(e,n,s,r,a){super.setExternalCamera(e,n,s,r,a),this.boundary&&(this.boundary.visible=this.boundaryOn&&n-this.groundAt(e,s)>45)}async setAerial(e){if(this.aerialWanted=e,e&&!this.aerial){if(!this.options.assets.aerial)throw new Error("This copy of the model has no aerial photograph.");const s=await z_(this.options.assets.aerial);if(this.disposed){s.dispose();return}s.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.aerial=s}if(!this.terrain||!this.model)return;const n=this.aerialWanted&&!!this.aerial;this.terrain.map=n?this.aerial:this.model,this.placeTiles(),this.detailGround&&(this.detailGround.visible=!n),this.invalidate()}offerSharpGround(e,n){var a;const s=this.options.assets.surface,r=new URLSearchParams(window.location.search).get("sharp");if(!(!s||r==="0")){if(r!=="1"){const o=navigator;if((o.deviceMemory??8)<4||(a=o.connection)!=null&&a.saveData||this.renderer.capabilities.maxTextureSize<4096)return}fetch(s.index,{signal:this.abort.signal}).then(o=>o.ok?o.json():null).then(o=>{var c;if(!(o!=null&&o.tiles.length)||this.disposed)return;const l=new Set(o.tiles);this.levels.push({grid:o.grid,first:Fs,slots:Kh,reach:460,near:1.7,keep:6,url:(h,f)=>l.has(`${h}_${f}`)?s.tile(h,f):void 0,tiles:new Map,wanted:[],sharp:!0}),(c=o.marks)!=null&&c.length&&(this.marks=pv(o.marks,n),this.scene.add(this.marks)),this.sharpState="on"}).catch(()=>{})}}reportSharpening(){var n,s;const e=this.levels.some(r=>r.wanted.some(a=>r.tiles.get(a)===null));e!==this.sharpening&&(this.sharpening=e,(s=(n=this.options).onSharpening)==null||s.call(n,e))}beforeRender(){var s,r;const e=performance.now();if(this.drawByDistance(),this.yards&&this.hf){const a=this.heightOverGround();(this.yards.update(this.viewFocus.x,this.viewFocus.z,a)||this.yards.pending(this.viewFocus.x,this.viewFocus.z,a))&&this.invalidate()}if((s=this.uploader)!=null&&s.busy){for(let a=0;a<4&&this.uploader.step()&&performance.now()-e<4;a++);this.uploader.busy&&this.invalidate()}if(!this.levels.length||!this.hf||e-this.tilesAt<250)return;this.tilesAt=e;let n=!1;for(const a of this.levels){const o=a.grid,l=[];if(this.viewDistance<a.reach&&(!a.sharp||this.sharpState==="on")){const c=(this.viewFocus.x+this.hf.sizeX/2)/this.hf.sizeX*o,h=(this.viewFocus.z+this.hf.sizeZ/2)/this.hf.sizeZ*o,f=[];for(let u=Math.max(0,Math.floor(h)-2);u<=Math.min(o-1,Math.floor(h)+2);u++)for(let d=Math.max(0,Math.floor(c)-2);d<=Math.min(o-1,Math.floor(c)+2);d++)a.url(u,d)&&f.push([Math.hypot(d+.5-c,u+.5-h),`${u}_${d}`]);f.sort((u,d)=>u[0]-d[0]);for(const[u,d]of f.slice(0,a.slots))u<a.near&&l.push(d)}if(l.join()!==a.wanted.join()){n=!0,a.wanted=l;for(const c of l){if(a.tiles.has(c))continue;const[h,f]=c.split("_").map(Number);a.url(h,f)&&(a.tiles.set(c,null),this.fetchTile(a,c))}for(const[c,h]of a.tiles){if(a.tiles.size<=a.slots+a.keep)break;h&&!l.includes(c)&&(h.dispose(),a.tiles.delete(c),(r=a.drawn)==null||r.delete(c))}}}n&&this.placeTiles()}fetchTile(e,n){const[s,r]=n.split("_").map(Number),a=e.url(s,r);if(!a||!this.hf)return;const o=e.grid,l=this.hf.sizeX/o,c=this.hf.sizeZ/o,h=-this.hf.sizeX/2+r*l,f=-this.hf.sizeZ/2+s*c,u=e.sharp?Su(this.strokes,h,f,h+l,f+c):[],d=u.length?JSON.stringify(u):"",m=e.asked??(e.asked=new Map),M=(m.get(n)??0)+1;m.set(n,M),(e.drawn??(e.drawn=new Map)).set(n,d),this.uploader??(this.uploader=new L_(this.renderer)),this.uploader.load(a,Math.min(e.sharp?4:8,this.renderer.capabilities.getMaxAnisotropy()),!!e.sharp,u.length?c1(u,h,f,l,c):void 0).then(p=>{var g;if(this.disposed||!this.levels.includes(e)||m.get(n)!==M||!e.tiles.has(n))return p.dispose();(g=e.tiles.get(n))==null||g.dispose(),e.tiles.set(n,p),this.placeTiles()}).catch(()=>{m.get(n)===M&&(e.tiles.get(n)||e.tiles.delete(n),this.reportSharpening())})}setGroundEdits(e){var n;if(this.strokes=e.filter(s=>{var r;return s&&((r=s.p)==null?void 0:r.length)>=2&&s.w>0&&(s.k===1||s.k===2||s.k===3)}),!!this.hf){for(const s of this.levels){if(!s.sharp)continue;const r=s.grid,a=this.hf.sizeX/r,o=this.hf.sizeZ/r;for(const l of s.tiles.keys()){const[c,h]=l.split("_").map(Number),f=-this.hf.sizeX/2+h*a,u=-this.hf.sizeZ/2+c*o,d=Su(this.strokes,f,u,f+a,u+o);(d.length?JSON.stringify(d):"")!==(((n=s.drawn)==null?void 0:n.get(l))??"")&&this.fetchTile(s,l)}}this.invalidate()}}groundUnder(e,n){const s=this.rayThrough(e,n);if(!s||!this.hf)return null;const{o:r,d:a}=s,o=this.hf.sizeX/2,l=this.hf.sizeZ/2;let c=0,h=r.y-this.hf.yAt(r.x,r.z);if(h<=0)return null;for(let f=.5;f<3e3;f+=Math.max(.5,h*.5)){const u=r.x+a.x*f,d=r.z+a.z*f;if(Math.abs(u)>o||Math.abs(d)>l)return null;if(h=r.y+a.y*f-this.hf.yAt(u,d),h<=0){let m=c,M=f;for(let v=0;v<24;v++){const S=(m+M)/2;r.y+a.y*S-this.hf.yAt(r.x+a.x*S,r.z+a.z*S)>0?m=S:M=S}const p=r.x+a.x*M,g=r.z+a.z*M;return{x:p,y:this.hf.yAt(p,g),z:g}}c=f}return null}rayThrough(e,n){var a;const s=(a=this.renderer)==null?void 0:a.domElement.getBoundingClientRect();if(!s||!s.width||!s.height)return null;this.camera.updateMatrixWorld();const r=new Q((e-s.left)/s.width*2-1,-((n-s.top)/s.height)*2+1,.5).unproject(this.camera).sub(this.camera.position).normalize();return{o:this.camera.position.clone(),d:r}}pickThing(e,n){var l,c,h,f;const s=this.rayThrough(e,n);if(!s)return null;const r=this.groundUnder(e,n),a=r?Math.hypot(r.x-s.o.x,r.y-s.o.y,r.z-s.o.z)+2:600;let o=null;for(const u of[(l=this.strollers)==null?void 0:l.pick(s.o,s.d),(c=this.life)==null?void 0:c.pickParked(s.o,s.d),(f=(h=this.trees)==null?void 0:h.pick)==null?void 0:f.call(h,s.o,s.d)])u&&u.t<a&&(!o||u.t<o.t)&&(o=u);return o&&{type:o.type,x:o.x,z:o.z}}setRemoved(e){var n,s,r,a;this.removed=e,(n=this.life)==null||n.setParkedGone(e.cars??[]),(r=(s=this.trees)==null?void 0:s.setGone)==null||r.call(s,e.trees??[]),(a=this.strollers)==null||a.setNoGo(e.people??[]),this.invalidate()}nearestCar(e,n,s){var r;return((r=this.life)==null?void 0:r.nearestCar(e,n,s))??null}driveCar(e,n,s,r,a,o,l=0,c=0){var f;const h=((f=this.life)==null?void 0:f.driveCar(e,n,s,r,a,o,l,c))??!1;return this.invalidate(),h}solidAt(e,n){var s;return((s=this.inBuilding)==null?void 0:s.call(this,e,n))??!1}frameCost(){var n;const e=this.renderer.info.render;return{triangles:e.triangles,calls:e.calls,detail:((n=this.detail)==null?void 0:n.cost)??[]}}placeTiles(){var s;if(!this.groundDetail)return;const e=this.aerialWanted&&!!this.aerial,n=new Set;for(const r of this.levels){const a=r.grid;for(let o=0;o<r.slots;o++){const l=r.wanted[o],c=l?r.tiles.get(l):null;if(!c||e){this.groundDetail.set(r.first+o,null);continue}r.sharp&&n.add(l);const[h,f]=l.split("_").map(Number);this.groundDetail.set(r.first+o,c,[f/a,1-(h+1)/a,(f+1)/a,1-h/a])}}(s=this.kerbs)==null||s.showPaths(n),this.reportSharpening(),this.invalidate()}dispose(){var e,n,s,r,a;cancelAnimationFrame(this.rising),(e=this.uploader)==null||e.dispose(),(n=this.yards)==null||n.dispose(),(s=this.strollers)==null||s.dispose(),(r=this.model)==null||r.dispose(),(a=this.aerial)==null||a.dispose();for(const o of this.levels)for(const l of o.tiles.values())l==null||l.dispose();super.dispose()}}const lf="Buildings, streets, railway, terrain and imagery © State of Queensland · Parks and flood maps © Brisbane City Council (CC BY 4.0)",Pl=.5;function gv(i,t){const e=typeof t.assets=="string"?t.assets:null;let n;const s=document.createElement("p");s.className="inv-sharpening",s.setAttribute("role","status"),s.hidden=!0,s.innerHTML='<span class="inv-sharpening-spin" aria-hidden="true"></span><span class="inv-sharpening-text">Loading sharper ground</span>';const r=Ri(i,t,{styleKey:"data-moorooka-model",css:Mf,credit:lf,tide:{min:Pl,max:Pl,initial:Pl},createScene:(a,o,l,c)=>n=new mv(a,o,l,{...c,onFloodLevel:h=>{var f;return(f=t.onFloodLevel)==null?void 0:f.call(t,h)},onSharpening:h=>{s.hidden=!h},assets:{...c.assets,detail:e?(h,f)=>`${e}detail/${h}_${f}.webp`:void 0,surface:e?{index:`${e}surface/index.json`,tile:(h,f)=>`${e}surface/${h}_${f}.webp`}:void 0,floods:e?`${e}floods.json`:void 0,yards:e?`${e}yards.bin`:void 0,floodFile:e?h=>`${e}flood-${encodeURIComponent(h)}.png`:void 0}}),setTide:()=>{}});return i.appendChild(s),{...r,dispose:()=>{s.remove(),r.dispose()},floods:e?()=>n.floods():void 0,get floodDrop(){return n.floodDrop},setFlood:a=>n.setFlood(a),setFloodLevel:a=>n.setFloodLevel(a),waterAt:(a,o,l)=>l?n.floodSurfaceAt(a,o,!0):Math.max(n.waterLevel,n.floodSurfaceAt(a,o)),setGroundEdits:a=>n.setGroundEdits(a),groundUnder:(a,o)=>n.groundUnder(a,o),pickThing:(a,o)=>n.pickThing(a,o),setRemoved:a=>n.setRemoved(a),nearestCar:(a,o,l)=>n.nearestCar(a,o,l),driveCar:(a,o,l,c,h,f,u,d)=>n.driveCar(a,o,l,c,h,f,u,d),solidAt:(a,o)=>n.solidAt(a,o),frameCost:()=>n.frameCost()}}return En.CREDIT=lf,En.create=gv,Object.defineProperty(En,Symbol.toStringTag,{value:"Module"}),En}({});
