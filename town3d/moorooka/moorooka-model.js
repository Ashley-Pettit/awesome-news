var MoorookaModel=function(bn){"use strict";var d1=Object.defineProperty;var p1=(bn,In,Ri)=>In in bn?d1(bn,In,{enumerable:!0,configurable:!0,writable:!0,value:Ri}):bn[In]=Ri;var it=(bn,In,Ri)=>p1(bn,typeof In!="symbol"?In+"":In,Ri);const In=`
.inv-embed, .inv-embed-layer { position: absolute; inset: 0; overflow: hidden; }
/* the labels sit over the model but never take a touch: drags and pinches must reach the canvas underneath */
.inv-embed-labels, .inv-embed .inv-label { pointer-events: none; }
.inv-embed-credit { position: absolute; left: 50%; bottom: var(--inv-credit-bottom, 6px); transform: translateX(-50%); margin: 0; max-width: calc(100% - 24px);
  padding: 2px 8px; border-radius: 4px; background: rgba(13, 24, 30, 0.7); color: rgba(255, 255, 255, 0.82); font: 10px/1.4 system-ui, sans-serif; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; pointer-events: none; }
`;function Ri(i,t,e){if(!document.querySelector(`style[${e.styleKey}]`)){const f=document.createElement("style");f.setAttribute(e.styleKey,""),f.textContent=e.css+In,document.head.appendChild(f)}const n=document.createElement("div");n.className="inv-embed";const s=document.createElement("div");s.className="inv-embed-layer";const r=document.createElement("div");r.className="inv-embed-layer inv-embed-labels";const o=document.createElement("p");o.className="inv-embed-credit",o.textContent=e.credit,n.append(s,r,o),i.appendChild(n);const a=typeof t.assets=="string"?{height:t.assets+"height.png",ground:t.assets+"ground.webp",town:t.assets+"town.json"}:t.assets;let l=[],c=!1,h;const d=new Promise((f,m)=>h={ok:f,fail:m}),u=e.createScene(s,r,{onProgress:(f,m)=>{var v;return(v=t.onProgress)==null?void 0:v.call(t,f,m)},onReady:f=>{l=f.places.map(m=>{const v=Math.min(Math.max(m.view[0]*.55,90),1500),p=m.view[1]*Math.PI/180,g=m.view[2]*Math.PI/180,_=m.x+v*Math.sin(p)*Math.sin(g),M=m.z+v*Math.sin(p)*Math.cos(g),y=Math.max(u.groundAt(_,M),u.waterLevel)+Math.max(v*Math.cos(p),20),S=m.x-_,E=m.y-10-y,x=m.z-M;return{id:m.id,name:m.name,kind:m.kind,x:_,y,z:M,yaw:Math.atan2(-S,-x),pitch:Math.atan2(E,Math.hypot(S,x)),tx:m.x,tz:m.z,stand:u.standNear(m.x,m.z)??void 0}}),t.labels===!1&&u.setLabelsVisible(!1),c=!0,h.ok()},onError:f=>{var m;return c?(m=t.onError)==null?void 0:m.call(t,f):h.fail(new Error(f))},onCompass:()=>{}},{assets:a,external:!0,quality:t.quality,clear:t.clear,clearLatLon:t.clearLatLon});return u.init(),{ready:d,setCamera:(f,m,v,p,g)=>u.setExternalCamera(f,m,v,p,g),setMinutes:f=>u.setSolarMinutes(f),setTide:f=>e.setTide(u,f),setAnimating:f=>u.setAnimating(f),setLabelsVisible:f=>u.setLabelsVisible(f),groundAt:(f,m)=>u.groundAt(f,m),waterLevel:()=>u.waterLevel,bounds:()=>u.bounds,fromLatLon:(f,m)=>u.fromLatLon(f,m),setMode:f=>u.setExternal(f!=="bird"),getCamera:()=>u.getCamera(),flyToPlace:f=>u.flyToPlace(f),lookAt:(f,m,v,p,g)=>u.setView(f,m,v,p,g),addParts:f=>u.addParts(f),addPad:f=>u.addPad(f),spots:()=>l,roadSpot:f=>{const m=u.roadSpot(f);return m?{id:"road:"+f,name:f,kind:"landmark",...m,tx:m.x-Math.sin(m.yaw)*70,tz:m.z-Math.cos(m.yaw)*70}:null},tide:e.tide,credit:e.credit,dispose:()=>{u.dispose(),n.remove()}}}const ff='.inv-label{position:absolute;left:0;top:0;pointer-events:auto;font:600 12px/1 Space Grotesk,system-ui,sans-serif;padding:6px 10px;border-radius:999px;background:#0c1c24e6;color:#fff;border:1px solid rgba(255,255,255,.2);white-space:nowrap;cursor:pointer;will-change:transform}.inv-label:after{content:"";position:absolute;left:50%;bottom:-8px;width:1px;height:8px;background:#ffffffbf}.inv-label:hover{background:#0b7d9c}.inv-label--nature{background:#183826eb}.inv-label--nature:hover{background:#2c7a4b}.inv-label--water{background:none;border-color:transparent;color:#f1fbff;font-style:italic;font-weight:500;font-size:13px;letter-spacing:.1em;text-shadow:0 1px 2px rgba(0,35,60,.95),0 0 8px rgba(0,35,60,.7)}.inv-label--water:after{display:none}.inv-label--water:hover{background:#0c1c2499}.inv-range{-moz-appearance:none;appearance:none;-webkit-appearance:none;height:28px;background:transparent;cursor:pointer}.inv-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range:focus-visible{outline:2px solid #ffd200;outline-offset:4px;border-radius:4px}.inv-range--flood::-webkit-slider-runnable-track{background:linear-gradient(90deg,#d8c79a,#5c9ab8 55%,#17406e)}.inv-range--flood::-moz-range-track{background:linear-gradient(90deg,#d8c79a,#5c9ab8 55%,#17406e)}.inv-sharpening{position:absolute;right:calc(env(safe-area-inset-right,0px) + 8px);bottom:calc(env(safe-area-inset-bottom,0px) + 8px);z-index:2;margin:0;padding:4px;border-radius:50%;background:#0d181e99;line-height:0;pointer-events:none}.inv-sharpening[hidden]{display:none}.inv-sharpening-spin{display:block;width:10px;height:10px;border-radius:50%;border:2px solid rgba(255,255,255,.35);border-top-color:#fff;animation:inv-sharpening-turn .9s linear infinite}.inv-sharpening-text{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@keyframes inv-sharpening-turn{to{transform:rotate(360deg)}}@media (prefers-reduced-motion: reduce){.inv-sharpening-spin{animation:none;border-color:#fff}}';/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fo="187",Nn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},df=0,Ul=1,pf=2,os=1,mf=2,as=3,jn=0,Ze=1,Ee=2,Ci=0,ls=1,po=2,Fl=3,Ol=4,gf=5,Pi=100,xf=101,_f=102,vf=103,Mf=104,Sf=200,yf=201,bf=202,Ef=203,zl=204,Bl=205,wf=206,Tf=207,Af=208,Rf=209,Cf=210,Pf=211,Lf=212,Df=213,If=214,mo=0,go=1,xo=2,cs=3,_o=4,vo=5,Mo=6,So=7,yo=0,Nf=1,Uf=2,Un=0,kl=1,Gl=2,Hl=3,Vl=4,Wl=5,Xl=6,bo=7,ql=300,Li=301,hs=302,Eo=303,wo=304,Zs=1e3,hn=1001,To=1002,Ge=1003,Ff=1004,Js=1005,We=1006,Ao=1007,En=1008,je=1009,Yl=1010,$l=1011,us=1012,Ro=1013,wn=1014,un=1015,fn=1016,Co=1017,Po=1018,Di=1020,Kl=35902,Zl=35899,Jl=1021,Ql=1022,dn=1023,ti=1026,ei=1027,Lo=1028,Do=1029,ni=1030,Io=1031,No=1033,Qs=33776,js=33777,tr=33778,er=33779,Uo=35840,Fo=35841,Oo=35842,zo=35843,Bo=36196,ko=37492,Go=37496,Ho=37488,Vo=37489,nr=37490,Wo=37491,Xo=37808,qo=37809,Yo=37810,$o=37811,Ko=37812,Zo=37813,Jo=37814,Qo=37815,jo=37816,ta=37817,ea=37818,na=37819,ia=37820,sa=37821,ra=36492,oa=36494,aa=36495,la=36283,ca=36284,ir=36285,ha=36286,Of=3200,sr=0,zf=1,Fn="",Te="srgb",rr="srgb-linear",or="linear",de="srgb",ua=7680,Bf=519,kf=512,Gf=513,Hf=514,jl=515,Vf=516,Wf=517,tc=518,ec=519,Xf=35044,ar=35048,nc="300 es",pn=2e3,fs=2001;function qf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yf(){const i=ds("canvas");return i.style.display="block",i}const ic={};function sc(...i){const t="THREE."+i.shift();console.log(t,...i)}function rc(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ht(...i){i=rc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function le(...i){i=rc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function lr(...i){const t=i.join(" ");t in ic||(ic[t]=!0,Ht(...i))}function $f(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Kf={[mo]:mo,[xo]:Mo,[_o]:_o,[cs]:vo,[go]:go,[Mo]:xo,[So]:So,[vo]:cs};class ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let oc=1234567;const ps=Math.PI/180,ms=180/Math.PI;function Ii(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function fa(i,t){return(i%t+t)%t}function Zf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jf(i,t,e){return i!==t?(e-i)/(t-i):0}function gs(i,t,e){return(1-e)*i+e*t}function Qf(i,t,e,n){return gs(i,t,1-Math.exp(-e*n))}function jf(i,t=1){return t-Math.abs(fa(i,t*2)-t)}function td(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ed(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function nd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function id(i,t){return i+Math.random()*(t-i)}function sd(i){return i*(.5-Math.random())}function rd(i){i!==void 0&&(oc=i);let t=oc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function od(i){return i*ps}function ad(i){return i*ms}function ld(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function cd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ac(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*h,a*c);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function da(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function lc(i,t){if(t.constructor===Float32Array)return i;const e=da(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function cc(i,t){if(t.constructor===Float32Array)return i;const e=da(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const _e={DEG2RAD:ps,RAD2DEG:ms,generateUUID:Ii,clamp:Zt,euclideanModulo:fa,mapLinear:Zf,inverseLerp:Jf,lerp:gs,damp:Qf,pingpong:jf,smoothstep:td,smootherstep:ed,randInt:nd,randFloat:id,randFloatSpread:sd,seededRandom:rd,degToRad:od,radToDeg:ad,isPowerOfTwo:ld,ceilPowerOfTwo:cd,floorPowerOfTwo:ac,setQuaternionFromProperEuler:hd,normalize:cc,denormalize:lc},Rl=class Rl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rl.prototype.isVector2=!0;let Bt=Rl;class rn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(d!==v||l!==u||c!==f||h!==m){let p=l*u+c*f+h*m+d*v;p<0&&(u=-u,f=-f,m=-m,v=-v,p=-p);let g=1-a;if(p<.9995){const _=Math.acos(p),M=Math.sin(_);g=Math.sin(g*_)/M,a=Math.sin(a*_)/M,l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+v*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+v*a;const _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Cl=class Cl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pa.copy(this).projectOnVector(t),this.sub(pa)}reflect(t){return this.sub(pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cl.prototype.isVector3=!0;let Q=Cl;const pa=new Q,hc=new rn,Pl=class Pl{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],v=s[0],p=s[3],g=s[6],_=s[1],M=s[4],y=s[7],S=s[2],E=s[5],x=s[8];return r[0]=o*v+a*_+l*S,r[3]=o*p+a*M+l*E,r[6]=o*g+a*y+l*x,r[1]=c*v+h*_+d*S,r[4]=c*p+h*M+d*E,r[7]=c*g+h*y+d*x,r[2]=u*v+f*_+m*S,r[5]=u*p+f*M+m*E,r[8]=u*g+f*y+m*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ma.makeScale(t,e)),this}rotate(t){return lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Pl.prototype.isMatrix3=!0;let Vt=Pl;const ma=new Vt,uc=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fc=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ud(){const i={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===de&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fn?or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rr]:{primaries:t,whitePoint:n,transfer:or,toXYZ:uc,fromXYZ:fc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:n,transfer:de,toXYZ:uc,fromXYZ:fc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),i}const ee=ud();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class fd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ui===void 0&&(Ui=ds("canvas")),Ui.width=t.width,Ui.height=t.height;const s=Ui.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ui}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ds("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=On(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(On(e[n]/255)*255):e[n]=On(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dd=0;class ga{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xa(s[o].image)):r.push(xa(s[o]))}else r=xa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}let pd=0;const _a=new Q;class De extends ii{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=hn,s=hn,r=We,o=En,a=dn,l=je,c=De.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Ii(),this.name="",this.source=new ga(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zs:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case To:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zs:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case To:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null,De.DEFAULT_MAPPING=ql,De.DEFAULT_ANISOTROPY=1;const Ll=class Ll{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,y=(f+1)/2,S=(g+1)/2,E=(h+u)/4,x=(d+v)/4,b=(m+p)/4;return M>y&&M>S?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=x/n):y>S?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=b/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=x/r,s=b/r),this.set(n,s,r,e),this}let _=Math.sqrt((p-m)*(p-m)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(d-v)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ll.prototype.isVector4=!0;let Me=Ll;class md extends ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new De({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ga(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends md{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class dc extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gd extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const co=class co{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,m,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,m,v,p)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,m,v,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new co().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Fi.setFromMatrixColumn(t,0).length(),r=1/Fi.setFromMatrixColumn(t,1).length(),o=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,m=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,m=c*h,v=c*d;e[0]=u+v*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,m=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,m=a*h,v=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,m=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*l,f=o*c,m=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xd,t,_d)}lookAt(t,e,n){const s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),si.crossVectors(n,en),si.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),si.crossVectors(n,en)),si.normalize(),cr.crossVectors(en,si),s[0]=si.x,s[4]=cr.x,s[8]=en.x,s[1]=si.y,s[5]=cr.y,s[9]=en.y,s[2]=si.z,s[6]=cr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],v=n[6],p=n[10],g=n[14],_=n[3],M=n[7],y=n[11],S=n[15],E=s[0],x=s[4],b=s[8],w=s[12],A=s[1],C=s[5],L=s[9],B=s[13],P=s[2],O=s[6],H=s[10],k=s[14],$=s[3],X=s[7],z=s[11],G=s[15];return r[0]=o*E+a*A+l*P+c*$,r[4]=o*x+a*C+l*O+c*X,r[8]=o*b+a*L+l*H+c*z,r[12]=o*w+a*B+l*k+c*G,r[1]=h*E+d*A+u*P+f*$,r[5]=h*x+d*C+u*O+f*X,r[9]=h*b+d*L+u*H+f*z,r[13]=h*w+d*B+u*k+f*G,r[2]=m*E+v*A+p*P+g*$,r[6]=m*x+v*C+p*O+g*X,r[10]=m*b+v*L+p*H+g*z,r[14]=m*w+v*B+p*k+g*G,r[3]=_*E+M*A+y*P+S*$,r[7]=_*x+M*C+y*O+S*X,r[11]=_*b+M*L+y*H+S*z,r[15]=_*w+M*B+y*k+S*G,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],v=t[7],p=t[11],g=t[15],_=l*f-c*u,M=a*f-c*d,y=a*u-l*d,S=o*f-c*h,E=o*u-l*h,x=o*d-a*h;return e*(v*_-p*M+g*y)-n*(m*_-p*S+g*E)+s*(m*M-v*S+g*x)-r*(m*y-v*E+p*x)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],v=t[13],p=t[14],g=t[15],_=e*a-n*o,M=e*l-s*o,y=e*c-r*o,S=n*l-s*a,E=n*c-r*a,x=s*c-r*l,b=h*v-d*m,w=h*p-u*m,A=h*g-f*m,C=d*p-u*v,L=d*g-f*v,B=u*g-f*p,P=_*B-M*L+y*C+S*A-E*w+x*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return t[0]=(a*B-l*L+c*C)*O,t[1]=(s*L-n*B-r*C)*O,t[2]=(v*x-p*E+g*S)*O,t[3]=(u*E-d*x-f*S)*O,t[4]=(l*A-o*B-c*w)*O,t[5]=(e*B-s*A+r*w)*O,t[6]=(p*y-m*x-g*M)*O,t[7]=(h*x-u*y+f*M)*O,t[8]=(o*L-a*A+c*b)*O,t[9]=(n*A-e*L-r*b)*O,t[10]=(m*E-v*y+g*_)*O,t[11]=(d*y-h*E-f*_)*O,t[12]=(a*w-o*C-l*b)*O,t[13]=(e*C-n*w+s*b)*O,t[14]=(v*M-m*S-p*_)*O,t[15]=(h*S-d*M+u*_)*O,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,v=o*h,p=o*d,g=a*d,_=l*c,M=l*h,y=l*d,S=n.x,E=n.y,x=n.z;return s[0]=(1-(v+g))*S,s[1]=(f+y)*S,s[2]=(m-M)*S,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(u+g))*E,s[6]=(p+_)*E,s[7]=0,s[8]=(m+M)*x,s[9]=(p-_)*x,s[10]=(1-(u+v))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Fi.set(s[0],s[1],s[2]).length();const a=Fi.set(s[4],s[5],s[6]).length(),l=Fi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),mn.copy(this);const c=1/o,h=1/a,d=1/l;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,e.setFromRotationMatrix(mn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=pn,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let m,v;if(l)m=r/(o-r),v=o*r/(o-r);else if(a===pn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===fs)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=pn,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s);let m,v;if(l)m=1/(o-r),v=o/(o-r);else if(a===pn)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===fs)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};co.prototype.isMatrix4=!0;let ie=co;const Fi=new Q,mn=new ie,xd=new Q(0,0,0),_d=new Q(1,1,1),si=new Q,cr=new Q,en=new Q,pc=new ie,mc=new rn;class An{constructor(t=0,e=0,n=0,s=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mc.setFromEuler(this),this.setFromQuaternion(mc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class va{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vd=0;const gc=new Q,Oi=new rn,zn=new ie,hr=new Q,xs=new Q,Md=new Q,Sd=new rn,xc=new Q(1,0,0),_c=new Q(0,1,0),vc=new Q(0,0,1),Mc={type:"added"},yd={type:"removed"},zi={type:"childadded",child:null},Ma={type:"childremoved",child:null};class He extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new Q,e=new An,n=new rn,s=new Q(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Vt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(xc,t)}rotateY(t){return this.rotateOnAxis(_c,t)}rotateZ(t){return this.rotateOnAxis(vc,t)}translateOnAxis(t,e){return gc.copy(t).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xc,t)}translateY(t){return this.translateOnAxis(_c,t)}translateZ(t){return this.translateOnAxis(vc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hr.copy(t):hr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(xs,hr,this.up):zn.lookAt(hr,xs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(zn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mc),zi.child=t,this.dispatchEvent(zi),zi.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yd),Ma.child=t,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mc),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,Md),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Sd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}He.DEFAULT_UP=new Q(0,1,0),He.DEFAULT_MATRIX_AUTO_UPDATE=!0,He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ie extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bd={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},ur={h:0,s:0,l:0};function ya(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?i+(t-i)*6*e:e<.5?t:e<.6666666666666666?i+(t-i)*6*(.6666666666666666-e):i}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=fa(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ya(o,r,t+.3333333333333333),this.g=ya(o,r,t),this.b=ya(o,r,t-.3333333333333333)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const n=Sc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return ee.workingToColorSpace(qe.copy(this),t),Math.round(Zt(qe.r*255,0,255))*65536+Math.round(Zt(qe.g*255,0,255))*256+Math.round(Zt(qe.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,r=qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Te){ee.workingToColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(ur);const n=gs(ri.h,ur.h,e),s=gs(ri.s,ur.s,e),r=gs(ri.l,ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Rt;Rt.NAMES=Sc;class Ed extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const gn=new Q,Bn=new Q,ba=new Q,kn=new Q,Bi=new Q,ki=new Q,yc=new Q,Ea=new Q,wa=new Q,Ta=new Q,Aa=new Me,Ra=new Me,Ca=new Me;class xn{constructor(t=new Q,e=new Q,n=new Q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),Bn.subVectors(n,e),ba.subVectors(t,e);const o=gn.dot(gn),a=gn.dot(Bn),l=gn.dot(ba),c=Bn.dot(Bn),h=Bn.dot(ba),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(o,kn.y),l.addScaledVector(a,kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Aa.setScalar(0),Ra.setScalar(0),Ca.setScalar(0),Aa.fromBufferAttribute(t,e),Ra.fromBufferAttribute(t,n),Ca.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Aa,r.x),o.addScaledVector(Ra,r.y),o.addScaledVector(Ca,r.z),o}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Bn.subVectors(t,e),gn.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),gn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Bi.subVectors(s,n),ki.subVectors(r,n),Ea.subVectors(t,n);const l=Bi.dot(Ea),c=ki.dot(Ea);if(l<=0&&c<=0)return e.copy(n);wa.subVectors(t,s);const h=Bi.dot(wa),d=ki.dot(wa);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Bi,o);Ta.subVectors(t,r);const f=Bi.dot(Ta),m=ki.dot(Ta);if(m>=0&&f<=m)return e.copy(r);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ki,a);const p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return yc.subVectors(r,s),a=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(yc,a);const g=1/(p+v+u);return o=v*g,a=u*g,e.copy(n).addScaledVector(Bi,o).addScaledVector(ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class pi{constructor(t=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),dr.subVectors(this.max,_s),Gi.subVectors(t.a,_s),Hi.subVectors(t.b,_s),Vi.subVectors(t.c,_s),oi.subVectors(Hi,Gi),ai.subVectors(Vi,Hi),mi.subVectors(Gi,Vi);let e=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-mi.z,mi.y,oi.z,0,-oi.x,ai.z,0,-ai.x,mi.z,0,-mi.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-mi.y,mi.x,0];return!Pa(e,Gi,Hi,Vi,dr)||(e=[1,0,0,0,1,0,0,0,1],!Pa(e,Gi,Hi,Vi,dr))?!1:(pr.crossVectors(oi,ai),e=[pr.x,pr.y,pr.z],Pa(e,Gi,Hi,Vi,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Gn=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],_n=new Q,fr=new pi,Gi=new Q,Hi=new Q,Vi=new Q,oi=new Q,ai=new Q,mi=new Q,_s=new Q,dr=new Q,pr=new Q,gi=new Q;function Pa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gi.fromArray(i,r);const a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Hn=wd();function wd(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Td(i){Math.abs(i)>65504&&Ht("DataUtils.toHalfFloat(): Value out of range."),i=Zt(i,-65504,65504),Hn.floatView[0]=i;const t=Hn.uint32View[0],e=t>>23&511;return Hn.baseTable[e]+((t&8388607)>>Hn.shiftTable[e])}function Ad(i){const t=i>>10;return Hn.uint32View[0]=Hn.mantissaTable[Hn.offsetTable[t]+(i&1023)]+Hn.exponentTable[t],Hn.floatView[0]}class bc{static toHalfFloat(t){return Td(t)}static fromHalfFloat(t){return Ad(t)}}const Ce=new Q,mr=new Bt;let Rd=0;class Pe extends ii{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xf,this.updateRanges=[],this.gpuType=un,this.version=0,this._normalizationScale=t!==void 0?da(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mr.fromBufferAttribute(this,e),mr.applyMatrix3(t),this.setXY(e,mr.x,mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):lc(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):cc(t,this.array)}}class Ec extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wc extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Cd=new pi,vs=new Q,La=new Q;class Ms{constructor(t=new Q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Cd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(La.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(La)),this.expandByPoint(vs.copy(t.center).sub(La))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Pd=0;const on=new ie,Da=new He,Wi=new Q,nn=new pi,Ss=new pi,ze=new Q;class Ae extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qf(t)?wc:Ec)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Da.lookAt(t),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new re(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(nn.min,Ss.min),nn.expandByPoint(ze),ze.addVectors(nn.max,Ss.max),nn.expandByPoint(ze)):(nn.expandByPoint(Ss.min),nn.expandByPoint(Ss.max))}nn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ze.fromBufferAttribute(a,c),l&&(Wi.fromBufferAttribute(t,c),ze.add(Wi)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Pe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let w=0;w<n.count;w++)a[w]=new Q,l[w]=new Q;const h=new Q,d=new Q,u=new Q,f=new Bt,m=new Bt,v=new Bt,p=new Q,g=new Q;function _(w,A,C){c[w]=c[A]=c[C]=1,h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,A),u.fromBufferAttribute(n,C),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,A),v.fromBufferAttribute(r,C),d.sub(h),u.sub(h),m.sub(f),v.sub(f);const L=1/(m.x*v.y-v.x*m.y);isFinite(L)&&(p.copy(d).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(L),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(L),a[w].add(p),a[A].add(p),a[C].add(p),l[w].add(g),l[A].add(g),l[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let w=0,A=M.length;w<A;++w){const C=M[w],L=C.start,B=C.count;for(let P=L,O=L+B;P<O;P+=3)_(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const y=new Q,S=new Q,E=new Q,x=new Q;function b(w){E.fromBufferAttribute(s,w),x.copy(E);const A=a[w];y.copy(A),y.sub(E.multiplyScalar(E.dot(A))).normalize(),S.crossVectors(x,A);const L=S.dot(l[w])<0?-1:1;o.setXYZW(w,y.x,y.y,y.z,L)}for(let w=0,A=n.count;w<A;++w)c[w]&&b(w);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new Q,r=new Q,o=new Q,a=new Q,l=new Q,c=new Q,h=new Q,d=new Q;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,m=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new Pe(u,h,d)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ia=new Q,Ld=new Q,Dd=new Vt;class Rn{constructor(t=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ia.subVectors(n,e).cross(Ld.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Ia),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Dd.getNormalMatrix(t),s=this.coplanarPoint(Ia).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Id=0;class Xi extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=ls,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Bl,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ua,this.stencilZFail=ua,this.stencilZPass=ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Rn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Bt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Bt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Vn=new Q,Na=new Q,gr=new Q,xr=new Q;class Ua{constructor(t=new Q,e=new Q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Na.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),xr.copy(this.origin).sub(Na);const r=t.distanceTo(e)*.5,o=-this.direction.dot(gr),a=xr.dot(this.direction),l=-xr.dot(gr),c=xr.lengthSq(),h=Math.abs(1-o*o);let d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Na).addScaledVector(gr,u),f}intersectSphere(t,e){if(t.radius<0)return null;Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,v=e.y-o.y,p=e.z-o.z,g=n.x-o.x,_=n.y-o.y,M=n.z-o.z,y=Math.abs(l),S=Math.abs(c),E=Math.abs(h);let x,b,w,A,C,L,B,P,O,H,k,$;if(y>=S&&y>=E?(w=l,L=d,O=m,$=g,l>=0?(x=c,b=h,A=u,C=f,B=v,P=p,H=_,k=M):(x=h,b=c,A=f,C=u,B=p,P=v,H=M,k=_)):S>=E?(w=c,L=u,O=v,$=_,c>=0?(x=h,b=l,A=f,C=d,B=p,P=m,H=M,k=g):(x=l,b=h,A=d,C=f,B=m,P=p,H=g,k=M)):(w=h,L=f,O=p,$=M,h>=0?(x=l,b=c,A=d,C=u,B=m,P=v,H=g,k=_):(x=c,b=l,A=u,C=d,B=v,P=m,H=_,k=g)),w===0)return null;const X=x/w,z=b/w,G=1/w,V=A-X*L,ut=C-z*L,Y=B-X*O,at=P-z*O,ct=H-X*$,mt=k-z*$,pt=ct*at-mt*Y,Ct=V*mt-ut*ct,Kt=Y*ut-at*V;if(s){if(pt<0||Ct<0||Kt<0)return null}else if((pt<0||Ct<0||Kt<0)&&(pt>0||Ct>0||Kt>0))return null;const st=pt+Ct+Kt;if(st===0)return null;const dt=G*(pt*L+Ct*O+Kt*$);return(st>0?dt<0:dt>0)?null:this.at(dt/st,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wn extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Tc=new ie,xi=new Ua,_r=new Ms,Ac=new Q,vr=new Q,Mr=new Q,Sr=new Q,Fa=new Q,yr=new Q,Rc=new Q,br=new Q;class Jt extends He{constructor(t=new Ae,e=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Fa.fromBufferAttribute(d,t),o?yr.addScaledVector(Fa,h):yr.addScaledVector(Fa.sub(e),h))}e.add(yr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(_r.containsPoint(xi.origin)===!1&&(xi.intersectSphere(_r,Ac)===null||xi.origin.distanceToSquared(Ac)>(t.far-t.near)**2))&&(Tc.copy(r).invert(),xi.copy(t.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){const p=u[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),M=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,S=M;y<S;y+=3){const E=a.getX(y),x=a.getX(y+1),b=a.getX(y+2);s=Er(this,g,t,n,c,h,d,E,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const _=a.getX(p),M=a.getX(p+1),y=a.getX(p+2);s=Er(this,o,t,n,c,h,d,_,M,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){const p=u[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,S=M;y<S;y+=3){const E=y,x=y+1,b=y+2;s=Er(this,g,t,n,c,h,d,E,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const _=p,M=p+1,y=p+2;s=Er(this,o,t,n,c,h,d,_,M,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Nd(i,t,e,n,s,r,o,a){let l;if(t.side===Ze?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===jn,a),l===null)return null;br.copy(a),br.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(br);return c<e.near||c>e.far?null:{distance:c,point:br.clone(),object:i}}function Er(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,vr),i.getVertexPosition(l,Mr),i.getVertexPosition(c,Sr);const h=Nd(i,t,e,n,vr,Mr,Sr,Rc);if(h){const d=new Q;xn.getBarycoord(Rc,vr,Mr,Sr,d),s&&(h.uv=xn.getInterpolatedAttribute(s,a,l,c,d,new Bt)),r&&(h.uv1=xn.getInterpolatedAttribute(r,a,l,c,d,new Bt)),o&&(h.normal=xn.getInterpolatedAttribute(o,a,l,c,d,new Q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new Q,materialIndex:0};xn.getNormal(vr,Mr,Sr,u.normal),h.face=u,h.barycoord=d}return h}class ys extends De{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ge,h=Ge,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cc extends Pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const qi=new ie,Pc=new ie,wr=[],Lc=new pi,Ud=new ie,bs=new Jt,Es=new Ms;class an extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ud)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),Lc.copy(t.boundingBox).applyMatrix4(qi),this.boundingBox.union(Lc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ms),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),Es.copy(t.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(Es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),t.ray.intersectsSphere(Es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qi),Pc.multiplyMatrices(n,qi),bs.matrixWorld=Pc,bs.raycast(t,wr);for(let o=0,a=wr.length;o<a;o++){const l=wr[o];l.instanceId=r,l.object=this,e.push(l)}wr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Cc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ys(new Float32Array(s*this.count),s,this.count,Lo,un));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _i=new Ms,Fd=new Bt(.5,.5),Tr=new Q;class ws{constructor(t=new Rn,e=new Rn,n=new Rn,s=new Rn,r=new Rn,o=new Rn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],v=r[9],p=r[10],g=r[11],_=r[12],M=r[13],y=r[14],S=r[15];if(s[0].setComponents(c-o,f-h,g-m,S-_).normalize(),s[1].setComponents(c+o,f+h,g+m,S+_).normalize(),s[2].setComponents(c+a,f+d,g+v,S+M).normalize(),s[3].setComponents(c-a,f-d,g-v,S-M).normalize(),n)s[4].setComponents(l,u,p,y).normalize(),s[5].setComponents(c-l,f-u,g-p,S-y).normalize();else if(s[4].setComponents(c-l,f-u,g-p,S-y).normalize(),e===pn)s[5].setComponents(c+l,f+u,g+p,S+y).normalize();else if(e===fs)s[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){_i.center.set(0,0,0);const e=Fd.distanceTo(t.center);return _i.radius=.7071067811865476+e,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Tr.x=s.normal.x>0?t.max.x:t.min.x,Tr.y=s.normal.y>0?t.max.y:t.min.y,Tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Dc=new ie;class Oa{constructor(){this.coordinateSystem=pn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];Dc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ws),n[s].setFromProjectionMatrix(Dc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ws),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new Oa().copy(this)}}class Ic extends De{constructor(t=[],e=Li,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ar extends De{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yi extends De{constructor(t,e,n=wn,s,r,o,a=Ge,l=Ge,c,h=ti,d=1){if(h!==ti&&h!==ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ga(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Nc extends Yi{constructor(t,e=wn,n=Li,s,r,o=Ge,a=Ge,l,c=ti){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Uc extends De{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class vi extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(d,2));function m(v,p,g,_,M,y,S,E,x,b,w){const A=y/x,C=S/b,L=y/2,B=S/2,P=E/2,O=x+1,H=b+1;let k=0,$=0;const X=new Q;for(let z=0;z<H;z++){const G=z*C-B;for(let V=0;V<O;V++){const ut=V*A-L;X[v]=ut*_,X[p]=G*M,X[g]=P,c.push(X.x,X.y,X.z),X[v]=0,X[p]=0,X[g]=E>0?1:-1,h.push(X.x,X.y,X.z),d.push(V/x),d.push(1-z/b),k+=1}}for(let z=0;z<b;z++)for(let G=0;G<x;G++){const V=u+G+O*z,ut=u+G+O*(z+1),Y=u+(G+1)+O*(z+1),at=u+(G+1)+O*z;l.push(V,ut,at),l.push(ut,Y,at),$+=6}a.addGroup(f,$,w),f+=$,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class za extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let m=0;const v=[],p=n/2;let g=0;_(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new re(d,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(f,2));function _(){const y=new Q,S=new Q;let E=0;const x=(e-t)/n;for(let b=0;b<=r;b++){const w=[],A=b/r,C=A*(e-t)+t;for(let L=0;L<=s;L++){const B=L/s,P=B*l+a,O=Math.sin(P),H=Math.cos(P);S.x=C*O,S.y=-A*n+p,S.z=C*H,d.push(S.x,S.y,S.z),y.set(O,x,H).normalize(),u.push(y.x,y.y,y.z),f.push(B,1-A),w.push(m++)}v.push(w)}for(let b=0;b<s;b++)for(let w=0;w<r;w++){const A=v[w][b],C=v[w+1][b],L=v[w+1][b+1],B=v[w][b+1];(t>0||w!==0)&&(h.push(A,C,B),E+=3),(e>0||w!==r-1)&&(h.push(C,L,B),E+=3)}c.addGroup(g,E,0),g+=E}function M(y){const S=m,E=new Bt,x=new Q;let b=0;const w=y===!0?t:e,A=y===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,p*A,0),u.push(0,A,0),f.push(.5,.5),m++;const C=m;for(let L=0;L<=s;L++){const P=L/s*l+a,O=Math.cos(P),H=Math.sin(P);x.x=w*H,x.y=p*A,x.z=w*O,d.push(x.x,x.y,x.z),u.push(0,A,0),E.x=O*.5+.5,E.y=H*.5*A+.5,f.push(E.x,E.y),m++}for(let L=0;L<s;L++){const B=S+L,P=C+L;y===!0?h.push(P,P+1,B):h.push(P+1,P,B),b+=3}c.addGroup(g,b,y===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ba extends Ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const M=new Q,y=new Q,S=new Q;for(let E=0;E<e.length;E+=3)f(e[E+0],M),f(e[E+1],y),f(e[E+2],S),l(M,y,S,_)}function l(_,M,y,S){const E=S+1,x=[];for(let b=0;b<=E;b++){x[b]=[];const w=_.clone().lerp(y,b/E),A=M.clone().lerp(y,b/E),C=E-b;for(let L=0;L<=C;L++)L===0&&b===E?x[b][L]=w:x[b][L]=w.clone().lerp(A,L/C)}for(let b=0;b<E;b++)for(let w=0;w<2*(E-b)-1;w++){const A=Math.floor(w/2);w%2===0?(u(x[b][A+1]),u(x[b+1][A]),u(x[b][A])):(u(x[b][A+1]),u(x[b+1][A+1]),u(x[b+1][A]))}}function c(_){const M=new Q;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(_),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){const _=new Q;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];const y=p(_)/2/Math.PI+.5,S=g(_)/Math.PI+.5;o.push(y,1-S)}m(),d()}function d(){for(let _=0;_<o.length;_+=6){const M=o[_+0],y=o[_+2],S=o[_+4],E=Math.max(M,y,S),x=Math.min(M,y,S);E>.9&&x<.1&&(M<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),S<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,M){const y=_*3;M.x=t[y+0],M.y=t[y+1],M.z=t[y+2]}function m(){const _=new Q,M=new Q,y=new Q,S=new Q,E=new Bt,x=new Bt,b=new Bt;for(let w=0,A=0;w<r.length;w+=9,A+=6){_.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),E.set(o[A+0],o[A+1]),x.set(o[A+2],o[A+3]),b.set(o[A+4],o[A+5]),S.copy(_).add(M).add(y).divideScalar(3);const C=p(S);v(E,A+0,_,C),v(x,A+2,M,C),v(b,A+4,y,C)}}function v(_,M,y,S){S<0&&_.x===1&&(o[M]=_.x-1),y.x===0&&y.z===0&&(o[M]=S/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ba(t.vertices,t.indices,t.radius,t.detail)}}function Od(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Fc(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Hd(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<s;u+=e){const f=i[u],m=i[u+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Ts(r,o,e,a,l,c,0),o}function Fc(i,t,e,n,s){let r;if(s===jd(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=kc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=kc(o/n|0,i[o],i[o+1],r);return r&&$i(r,r.next)&&(Cs(r),r=r.next),r}function Mi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($i(e,e.next)||Se(e.prev,e,e.next)===0)){if(Cs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ts(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Yd(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Bd(i,n,s,r):zd(i)){t.push(l.i,i.i,c.i),Cs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=kd(Mi(i),t),Ts(i,t,e,n,s,r,2)):o===2&&Gd(i,t,e,n,s,r):Ts(Mi(i),t,e,n,s,r,1);break}}}function zd(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&As(s,a,r,l,o,c,m.x,m.y)&&Se(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Bd(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Se(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),m=Math.min(h,d,u),v=Math.max(a,l,c),p=Math.max(h,d,u),g=ka(f,m,t,e,n),_=ka(v,p,t,e,n);let M=i.prevZ,y=i.nextZ;for(;M&&M.z>=g&&y&&y.z<=_;){if(M.x>=f&&M.x<=v&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&As(a,h,l,d,c,u,M.x,M.y)&&Se(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=v&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&As(a,h,l,d,c,u,y.x,y.y)&&Se(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=v&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&As(a,h,l,d,c,u,M.x,M.y)&&Se(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&As(a,h,l,d,c,u,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function kd(i,t){let e=i;do{const n=e.prev,s=e.next.next;!$i(n,s)&&zc(n,e,e.next,s)&&Rs(n,s)&&Rs(s,n)&&(t.push(n.i,e.i,s.i),Cs(e),Cs(e.next),e=i=s),e=e.next}while(e!==i);return Mi(e)}function Gd(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zd(o,a)){let l=Bc(o,a);o=Mi(o,o.next),l=Mi(l,l.next),Ts(o,t,e,n,s,r,0),Ts(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Hd(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Fc(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Kd(c))}s.sort(Vd);for(let r=0;r<s.length;r++)e=Wd(s[r],e);return e}function Vd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Wd(i,t){const e=Xd(i,t);if(!e)return t;const n=Bc(e,i);return Mi(n,n.next),Mi(e,e.next)}function Xd(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if($i(i,e))return e;do{if($i(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Oc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);Rs(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&qd(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function qd(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function Yd(i,t,e,n){let s=i;do s.z===0&&(s.z=ka(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,$d(s)}function $d(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function ka(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Kd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Oc(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function As(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Oc(i,t,e,n,s,r,o,a)}function Zd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Jd(i,t)&&(Rs(i,t)&&Rs(t,i)&&Qd(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||$i(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $i(i,t){return i.x===t.x&&i.y===t.y}function zc(i,t,e,n){const s=Cr(Se(i,t,e)),r=Cr(Se(i,t,n)),o=Cr(Se(e,n,i)),a=Cr(Se(e,n,t));return!!(s!==r&&o!==a||s===0&&Rr(i,e,t)||r===0&&Rr(i,n,t)||o===0&&Rr(e,i,n)||a===0&&Rr(e,t,n))}function Rr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Cr(i){return i>0?1:i<0?-1:0}function Jd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&zc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Rs(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function Qd(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Bc(i,t){const e=Ga(i.i,i.x,i.y),n=Ga(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function kc(i,t,e,n){const s=Ga(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Cs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ga(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jd(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class tp{static triangulate(t,e,n=2){return Od(t,e,n)}}class Ha{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ha.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Gc(t),Hc(n,t);let o=t.length;e.forEach(Gc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Hc(n,e[l]);const a=tp.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Gc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Hc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Va extends Ba{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Va(t.radius,t.detail)}}class li extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],v=[],p=[];for(let g=0;g<h;g++){const _=g*u-o;for(let M=0;M<c;M++){const y=M*d-r;m.push(y,-_,0),v.push(0,0,1),p.push(M/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const M=_+c*g,y=_+c*(g+1),S=_+1+c*(g+1),E=_+1+c*g;f.push(M,y,E),f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.width,t.height,t.widthSegments,t.heightSegments)}}class Wa extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new Q,u=new Q,f=[],m=[],v=[],p=[];for(let g=0;g<=n;g++){const _=[],M=g/n,y=o+M*a,S=t*Math.cos(y),E=Math.sqrt(t*t-S*S);let x=0;g===0&&o===0?x=.5/e:g===n&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){const w=b/e,A=s+w*r;d.x=-E*Math.cos(A),d.y=S,d.z=E*Math.sin(A),m.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(w+x,1-M),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){const M=h[g][_+1],y=h[g][_],S=h[g+1][_],E=h[g+1][_+1];(g!==0||o>0)&&f.push(M,y,E),(g!==n-1||l<Math.PI)&&f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Ki(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Vc(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Vc(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Je(i){const t={};for(let e=0;e<i.length;e++){const n=Ki(i[e]);for(const s in n)t[s]=n[s]}return t}function Vc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ep(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const np={clone:Ki,merge:Je};var ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=ep(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Rt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Q().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Vt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ie().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class rp extends Xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ye extends Xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sr,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xc extends Xi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sr,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=yo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class op extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ap extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(qc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!qc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function qc(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class lp{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const cp=new lp;class qa{constructor(t){this.manager=t!==void 0?t:cp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}qa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zi=new WeakMap;class hp extends qa{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Xa.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=Zi.get(o);d===void 0&&(d=[],Zi.set(o,d)),d.push({onLoad:e,onError:s})}return o}const a=ds("img");function l(){h(),e&&e(this);const d=Zi.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Zi.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),Xa.remove(`image:${t}`);const u=Zi.get(this)||[];for(let f=0;f<u.length;f++){const m=u[f];m.onError&&m.onError(d)}Zi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Xa.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class Yc extends qa{constructor(t){super(t)}load(t,e,n,s){const r=new De,o=new hp(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class $c extends He{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class up extends $c{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ya=new ie,Kc=new Q,Zc=new Q;class fp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ws,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Kc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kc),Zc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ya,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===fs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Pr=new Q,Lr=new rn,Cn=new Q;class Jc extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pr,Lr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pr,Lr,Cn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Pr,Lr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pr,Lr,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ci=new Q,Qc=new Bt,jc=new Bt;class vn extends Jc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Qc,jc),e.subVectors(jc,Qc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ps*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class th extends Jc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class dp extends fp{constructor(){super(new th(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pp extends $c{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new dp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Ji=-90,Qi=1;class $a extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(Ji,Qi,t,e);s.layers=this.layers,this.add(s);const r=new vn(Ji,Qi,t,e);r.layers=this.layers,this.add(r);const o=new vn(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const a=new vn(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const l=new vn(Ji,Qi,t,e);l.layers=this.layers,this.add(l);const c=new vn(Ji,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class mp extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const eh=new ie;class gp{constructor(t,e,n=0,s=1/0){this.ray=new Ua(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):le("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return eh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eh),this}intersectObject(t,e=!0,n=[]){return Ka(t,this,n,e),n.sort(nh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ka(t[s],this,n,e);return n.sort(nh),n}}function nh(i,t){return i.distance-t.distance}function Ka(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ka(r[o],t,e,!0)}}class Dr{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Dl=class Dl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Dl.prototype.isMatrix2=!0;let ih=Dl;class xp extends ii{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function sh(i,t,e,n){const s=_p(n);switch(e){case Jl:return i*t;case Lo:return i*t/s.components*s.byteLength;case Do:return i*t/s.components*s.byteLength;case ni:return i*t*2/s.components*s.byteLength;case Io:return i*t*2/s.components*s.byteLength;case Ql:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case No:return i*t*4/s.components*s.byteLength;case Qs:case js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case tr:case er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:case zo:return Math.max(i,16)*Math.max(t,8)/4;case Uo:case Oo:return Math.max(i,8)*Math.max(t,8)/2;case Bo:case ko:case Ho:case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Go:case nr:case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case jo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ta:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ea:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case na:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ia:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ra:case oa:case aa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case la:case ca:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ir:case ha:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _p(i){switch(i){case je:case Yl:return{byteLength:1,components:1};case us:case $l:case fn:return{byteLength:2,components:1};case Co:case Po:return{byteLength:2,components:4};case wn:case Ro:case un:return{byteLength:4,components:1};case Kl:case Zl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}})),typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rh(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function vp(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],v=d[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sp=`#ifdef USE_ALPHAHASH
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
#endif`,yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tp=`#ifdef USE_AOMAP
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
#endif`,Ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rp=`#ifdef USE_BATCHING
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
#endif`,Cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ip=`#ifdef USE_IRIDESCENCE
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
#endif`,Np=`#ifdef USE_BUMPMAP
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Vp=`#define PI 3.141592653589793
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
} // validated`,Wp=`vec3 transformedNormal = objectNormal;
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
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o0=`#ifdef USE_GRADIENTMAP
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
}`,a0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,u0=`#ifdef USE_ENVMAP
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
#endif`,f0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g0=`PhysicalMaterial material;
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
#endif`,x0=`uniform sampler2D dfgLUT;
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
}`,_0=`
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
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
#endif`,M0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,C0=`#if defined( USE_POINTS_UV )
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
#endif`,P0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I0=`#if defined( USE_MORPHCOLORS )
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
#endif`,N0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`#ifdef USE_MORPHTARGETS
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
#endif`,F0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,H0=`#ifdef USE_NORMALMAP
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
#endif`,V0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,K0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sm=`float getShadowMask() {
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
}`,rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $t={alphahash_fragment:Mp,alphahash_pars_fragment:Sp,alphamap_fragment:yp,alphamap_pars_fragment:bp,alphatest_fragment:Ep,alphatest_pars_fragment:wp,aomap_fragment:Tp,aomap_pars_fragment:Ap,batching_pars_vertex:Rp,batching_vertex:Cp,begin_vertex:Pp,beginnormal_vertex:Lp,bsdfs:Dp,iridescence_fragment:Ip,bumpmap_pars_fragment:Np,clipping_planes_fragment:Up,clipping_planes_pars_fragment:Fp,clipping_planes_pars_vertex:Op,clipping_planes_vertex:zp,color_fragment:Bp,color_pars_fragment:kp,color_pars_vertex:Gp,color_vertex:Hp,common:Vp,defaultnormal_vertex:Wp,displacementmap_pars_vertex:Xp,displacementmap_vertex:qp,emissivemap_fragment:Yp,emissivemap_pars_fragment:$p,colorspace_fragment:Kp,colorspace_pars_fragment:Zp,envmap_fragment:Jp,envmap_common_pars_fragment:Qp,envmap_pars_fragment:jp,envmap_pars_vertex:t0,envmap_physical_pars_fragment:u0,envmap_vertex:e0,fog_vertex:n0,fog_pars_vertex:i0,fog_fragment:s0,fog_pars_fragment:r0,gradientmap_pars_fragment:o0,lightmap_pars_fragment:a0,lights_lambert_fragment:l0,lights_lambert_pars_fragment:c0,lights_pars_begin:h0,lights_toon_fragment:f0,lights_toon_pars_fragment:d0,lights_phong_fragment:p0,lights_phong_pars_fragment:m0,lights_physical_fragment:g0,lights_physical_pars_fragment:x0,lights_fragment_begin:_0,lights_fragment_maps:v0,lights_fragment_end:M0,lightprobes_pars_fragment:S0,logdepthbuf_fragment:y0,logdepthbuf_pars_fragment:b0,logdepthbuf_pars_vertex:E0,logdepthbuf_vertex:w0,map_fragment:T0,map_pars_fragment:A0,map_particle_fragment:R0,map_particle_pars_fragment:C0,metalnessmap_fragment:P0,metalnessmap_pars_fragment:L0,morphinstance_vertex:D0,morphcolor_vertex:I0,morphnormal_vertex:N0,morphtarget_pars_vertex:U0,morphtarget_vertex:F0,normal_fragment_begin:O0,normal_fragment_maps:z0,normal_pars_fragment:B0,normal_pars_vertex:k0,normal_vertex:G0,normalmap_pars_fragment:H0,clearcoat_normal_fragment_begin:V0,clearcoat_normal_fragment_maps:W0,clearcoat_pars_fragment:X0,iridescence_pars_fragment:q0,opaque_fragment:Y0,packing:$0,premultiplied_alpha_fragment:K0,project_vertex:Z0,dithering_fragment:J0,dithering_pars_fragment:Q0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:em,shadowmap_pars_vertex:nm,shadowmap_vertex:im,shadowmask_pars_fragment:sm,skinbase_vertex:rm,skinning_pars_vertex:om,skinning_vertex:am,skinnormal_vertex:lm,specularmap_fragment:cm,specularmap_pars_fragment:hm,tonemapping_fragment:um,tonemapping_pars_fragment:fm,transmission_fragment:dm,transmission_pars_fragment:pm,uv_pars_fragment:mm,uv_pars_vertex:gm,uv_vertex:xm,worldpos_vertex:_m,background_vert:`varying vec2 vUv;
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
}`},bt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Pn={basic:{uniforms:Je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Je([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Je([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Je([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Je([bt.points,bt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Je([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Je([bt.common,bt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Je([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Je([bt.sprite,bt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Je([bt.common,bt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Je([bt.lights,bt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Pn.physical={uniforms:Je([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Ir={r:0,b:0,g:0},vm=new ie,oh=new Vt;oh.set(-1,0,0,0,1,0,0,0,1);function Mm(i,t,e,n,s,r){const o=new Rt(0);let a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){const y=_.backgroundBlurriness>0;M=t.get(M,y)}return M}function m(_){let M=!1;const y=f(_);y===null?p(o,a):y&&y.isColor&&(p(y,1),M=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(_,M){const y=f(M);y&&y.isCubeTexture?(c===void 0&&(c=new Jt(new vi(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Ki(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vm.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(oh),c.material.toneMapped=ee.getTransfer(y.colorSpace)!==de,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Jt(new li(2,2),new Xn({name:"BackgroundMaterial",uniforms:Ki(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ee.getTransfer(y.colorSpace)!==de,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,M){_.getRGB(Ir,Wc(i)),e.buffers.color.setClear(Ir.r,Ir.g,Ir.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(o,a)},render:m,addToRenderList:v,dispose:g}}function Sm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(C,L,B,P,O){let H=!1;const k=d(C,P,B,L);r!==k&&(r=k,c(r.object)),H=f(C,P,B,O),H&&m(C,P,B,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(C,L,B,P),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function d(C,L,B,P){const O=P.wireframe===!0;let H=n[L.id];H===void 0&&(H={},n[L.id]=H);const k=C.isInstancedMesh===!0?C.id:0;let $=H[k];$===void 0&&($={},H[k]=$);let X=$[B.id];X===void 0&&(X={},$[B.id]=X);let z=X[O];return z===void 0&&(z=u(l()),X[O]=z),z}function u(C){const L=[],B=[],P=[];for(let O=0;O<e;O++)L[O]=0,B[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:P,object:C,attributes:{},index:null}}function f(C,L,B,P){const O=r.attributes,H=L.attributes;let k=0;const $=B.getAttributes();for(const X in $)if($[X].location>=0){const G=O[X];let V=H[X];if(V===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(V=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(V=C.instanceColor)),G===void 0||G.attribute!==V||V&&G.data!==V.data)return!0;k++}return r.attributesNum!==k||r.index!==P}function m(C,L,B,P){const O={},H=L.attributes;let k=0;const $=B.getAttributes();for(const X in $)if($[X].location>=0){let G=H[X];G===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(G=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(G=C.instanceColor));const V={};V.attribute=G,G&&G.data&&(V.data=G.data),O[X]=V,k++}r.attributes=O,r.attributesNum=k,r.index=P}function v(){const C=r.newAttributes;for(let L=0,B=C.length;L<B;L++)C[L]=0}function p(C){g(C,0)}function g(C,L){const B=r.newAttributes,P=r.enabledAttributes,O=r.attributeDivisors;B[C]=1,P[C]===0&&(i.enableVertexAttribArray(C),P[C]=1),O[C]!==L&&(i.vertexAttribDivisor(C,L),O[C]=L)}function _(){const C=r.newAttributes,L=r.enabledAttributes;for(let B=0,P=L.length;B<P;B++)L[B]!==C[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function M(C,L,B,P,O,H,k){k===!0?i.vertexAttribIPointer(C,L,B,O,H):i.vertexAttribPointer(C,L,B,P,O,H)}function y(C,L,B,P){v();const O=P.attributes,H=B.getAttributes(),k=L.defaultAttributeValues;for(const $ in H){const X=H[$];if(X.location>=0){let z=O[$];if(z===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(z=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(z=C.instanceColor)),z!==void 0){const G=z.normalized,V=z.itemSize,ut=t.get(z);if(ut===void 0)continue;const Y=ut.buffer,at=ut.type,ct=ut.bytesPerElement,mt=at===i.INT||at===i.UNSIGNED_INT||z.gpuType===Ro;if(z.isInterleavedBufferAttribute){const pt=z.data,Ct=pt.isInterleavedBuffer===!0?pt.stride:pt.itemSize,Kt=z.offset;if(pt.isInstancedInterleavedBuffer||pt.isInstancedBufferAttribute){for(let st=0;st<X.locationSize;st++)g(X.location+st,pt.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let st=0;st<X.locationSize;st++)p(X.location+st);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let st=0;st<X.locationSize;st++)M(X.location+st,V/X.locationSize,at,G,Ct*ct,(Kt+V/X.locationSize*st)*ct,mt)}else{if(z.isInstancedBufferAttribute){for(let pt=0;pt<X.locationSize;pt++)g(X.location+pt,z.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let pt=0;pt<X.locationSize;pt++)p(X.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let pt=0;pt<X.locationSize;pt++)M(X.location+pt,V/X.locationSize,at,G,V*ct,V/X.locationSize*pt*ct,mt)}}else if(k!==void 0){const G=k[$];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(X.location,G);break;case 3:i.vertexAttrib3fv(X.location,G);break;case 4:i.vertexAttrib4fv(X.location,G);break;default:i.vertexAttrib1fv(X.location,G)}}}}_()}function S(){w();for(const C in n){const L=n[C];for(const B in L){const P=L[B];for(const O in P){const H=P[O];for(const k in H)h(H[k].object),delete H[k];delete P[O]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;const L=n[C.id];for(const B in L){const P=L[B];for(const O in P){const H=P[O];for(const k in H)h(H[k].object),delete H[k];delete P[O]}}delete n[C.id]}function x(C){for(const L in n){const B=n[L];for(const P in B){const O=B[P];if(O[C.id]===void 0)continue;const H=O[C.id];for(const k in H)h(H[k].object),delete H[k];delete O[C.id]}}}function b(C){for(const L in n){const B=n[L],P=C.isInstancedMesh===!0?C.id:0,O=B[P];if(O!==void 0){for(const H in O){const k=O[H];for(const $ in k)h(k[$].object),delete k[$];delete O[H]}delete B[P],Object.keys(B).length===0&&delete n[L]}}}function w(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function ym(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function bm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==dn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){const b=x===fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==je&&x!==un&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ht("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,maxSamples:S,samples:E}}function Em(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Rn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,g=i.get(d);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{const _=r?0:n,M=_*4;let y=g.clippingState||null;l.value=y,y=h(m,u,M,f);for(let S=0;S!==M;++S)y[S]=e[S];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,m!==!0||p===null){const g=f+v*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,y=f;M!==v;++M,y+=4)o.copy(d[M]).applyMatrix4(_,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}class Za extends Tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ic(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vi(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Ci});r.uniforms.tEquirect.value=e;const o=new Jt(s,r),a=e.minFilter;return e.minFilter===En&&(e.minFilter=We),new $a(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const ah=256,wm=3,Tm=20,lh=256,ch=16,Am=3,Rm=new Q,Cm=new Rt;class Nr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $a(1,10,null),this._boxMesh=new Jt(new vi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Rm}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(Cm));const p=new $a(n,s,h);return p.position.copy(a),p.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ah,ac(t))}_fromTexture(t,e){t.mapping===Li||t.mapping===hs?this._setSize(t.image.length===0?ah:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=hh(t,!1,!1),n=Math.log2(t)-wm;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=hh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Li||t.mapping===hs?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=uh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Pm(),this._integrationMaterial=Lm());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/ch);for(let o=0;o<=n;o++){const a=Nr.lodToRoughness(o,n);if(o>n-Am)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(lh*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Dm());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function hh(i,t,e){return new Za(i,{minFilter:En,generateMipmaps:t,type:fn,colorSpace:rr,depthBuffer:e})}function Ps(i,t,e){return new Xn({name:i,uniforms:t,vertexShader:$t.cube_vert,fragmentShader:e,side:Ze,blending:Ci,depthTest:!1,depthWrite:!1})}function Pm(){return Ps("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${lh}u

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
	`)}function Lm(){return Ps("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ch}},`

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
	`)}function Dm(){return Ps("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Tm}
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
	`)}function uh(){return Ps("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function fh(){return Ps("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Im(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Eo||f===wo)if(t.has(u)){const m=t.get(u).texture;return a(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const v=new Za(m.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const f=u.mapping,m=f===Eo||f===wo,v=f===Li||f===hs;if(m||v){let p=e.get(u);const g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Nr(i)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const _=u.image;return m&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new Nr(i)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===Eo?u.mapping=Li:f===wo&&(u.mapping=hs),u}function l(u){let f=0;const m=6;for(let v=0;v<m;v++)u[v]!==void 0&&f++;return f===m}function c(u){const f=u.target;f.removeEventListener("dispose",c);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Nm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&lr("WebGLRenderer: "+n+" extension not supported."),s}}}function Um(i,t,e,n){const s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(const p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);const v=r.get(m);v&&(t.remove(v),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),e.memory.geometries++),v}function h(m){const v=m.attributes;for(const p in v)t.update(v[p],i.ARRAY_BUFFER)}function d(m){const v=m.index,p=m.attributes.position;let g=0;if(p===void 0)return;const _=v!==null?v.array.length:p.array.length/3-1,M=p.count>=65535?wc:Ec,y=new M(Math.ceil(_/3)*6,1),S=y.array;if(v!==null){const x=v.array;g=v.version;for(let b=0,w=0;b<_;b+=3){const A=x[b+0],C=x[b+1],L=x[b+2];S[w++]=A,S[w++]=C,S[w++]=C,S[w++]=L,S[w++]=L,S[w++]=A}}else{g=p.version;for(let x=0,b=0;x<_;x+=3){const w=x+0,A=x+1,C=x+2;S[b++]=w,S[b++]=A,S[b++]=A,S[b++]=C,S[b++]=C,S[b++]=w}}y.version=g;const E=r.get(m);E&&t.remove(E),r.set(m,y)}function u(m){const v=r.get(m);if(v){const p=m.index;p!==null&&v.version<p.version&&d(m)}else d(m);return r.get(m)}function f(){for(const m in s){const v=s[m].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Fm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let p=0;p<f;p++)v+=u[p];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Om(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:le("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function zm(i,t,e){const n=new WeakMap,s=new Me;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let w=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),m===!0&&(M=2),v===!0&&(M=3);let y=a.attributes.position.count*M,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const E=new Float32Array(y*S*4*d),x=new dc(E,y,S,d);x.type=un,x.needsUpdate=!0;const b=M*4;for(let A=0;A<d;A++){const C=p[A],L=g[A],B=_[A],P=y*S*4*A;for(let O=0;O<C.count;O++){const H=O*b;f===!0&&(s.fromBufferAttribute(C,O),E[P+H+0]=s.x,E[P+H+1]=s.y,E[P+H+2]=s.z,E[P+H+3]=0),m===!0&&(s.fromBufferAttribute(L,O),E[P+H+4]=s.x,E[P+H+5]=s.y,E[P+H+6]=s.z,E[P+H+7]=0),v===!0&&(s.fromBufferAttribute(B,O),E[P+H+8]=s.x,E[P+H+9]=s.y,E[P+H+10]=s.z,E[P+H+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new Bt(y,S)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Bm(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const km={[kl]:"LINEAR_TONE_MAPPING",[Gl]:"REINHARD_TONE_MAPPING",[Hl]:"CINEON_TONE_MAPPING",[Vl]:"ACES_FILMIC_TONE_MAPPING",[Xl]:"AGX_TONE_MAPPING",[bo]:"NEUTRAL_TONE_MAPPING",[Wl]:"CUSTOM_TONE_MAPPING"};function Gm(i,t,e,n,s,r){const o=new Tn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new Ae;h.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new re([0,2,0,0,2,0],2));const d=new rp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Jt(h,d),f=new th(-1,1,1,-1,0,1);let m=null,v=null,p=!1,g,_=null,M=[],y=!1;this.setSize=function(S,E){o.setSize(S,E),a!==null&&a.setSize(S,E),l!==null&&l.setSize(S,E);for(let x=0;x<M.length;x++){const b=M[x];b.setSize&&b.setSize(S,E)}},this.setEffects=function(S){M=S,y=M.length>0&&M[0].isRenderPass===!0;const E=o.width,x=o.height;M.length>0&&a===null&&(a=new Tn(E,x,{type:fn,depthBuffer:!1,stencilBuffer:!1}),l=new Tn(E,x,{type:fn,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&M.some(w=>w.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Yi(E,x),r===!0&&(c.format=ei,c.type=Di)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let w=0;w<M.length;w++){const A=M[w];A.setSize&&A.setSize(E,x),b&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(S,E){if(p||S.toneMapping===Un&&M.length===0)return!1;if(_=E,E!==null){const x=E.width,b=E.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return y===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=Un,!0},this.hasRenderPass=function(){return y},this.end=function(S,E){S.toneMapping=g,p=!0;let x=o,b=a;for(let w=0;w<M.length;w++){const A=M[w];A.enabled!==!1&&(A.render(S,b,x,E),A.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(m!==S.outputColorSpace||v!==S.toneMapping){m=S.outputColorSpace,v=S.toneMapping,d.defines={},ee.getTransfer(m)===de&&(d.defines.SRGB_TRANSFER="");const w=km[v];w&&(d.defines[w]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,S.setRenderTarget(_),S.render(u,f),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const dh=new De,ph=new Yi(1,1),mh=new Nc(1),gh=new dc,xh=new gd,_h=new Ic,vh=[],Mh=[],Sh=new Float32Array(16),yh=new Float32Array(9),bh=new Float32Array(4);function ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=vh[s];if(r===void 0&&(r=new Float32Array(s),vh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ur(i,t){let e=Mh[t];e===void 0&&(e=new Int32Array(t),Mh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function qm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;bh.set(n),i.uniformMatrix2fv(this.addr,!1,bh),Ue(e,n)}}function Ym(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;yh.set(n),i.uniformMatrix3fv(this.addr,!1,yh),Ue(e,n)}}function $m(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Sh.set(n),i.uniformMatrix4fv(this.addr,!1,Sh),Ue(e,n)}}function Km(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function jm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Fr(i){return i.version===0&&(i.compareFunction=ec,i.needsUpdate=!0),i}function ig(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Fr(ph):r=dh,e.setTexture2D(t||r,s)}function sg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xh,s)}function rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Fr(mh):r=_h,e.setTextureCube(t||r,s)}function og(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gh,s)}function ag(i){switch(i){case 5126:return Hm;case 35664:return Vm;case 35665:return Wm;case 35666:return Xm;case 35674:return qm;case 35675:return Ym;case 35676:return $m;case 5124:case 35670:return Km;case 35667:case 35671:return Zm;case 35668:case 35672:return Jm;case 35669:case 35673:return Qm;case 5125:return jm;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return og}}function lg(i,t){i.uniform1fv(this.addr,t)}function cg(i,t){const e=ji(t,this.size,2);i.uniform2fv(this.addr,e)}function hg(i,t){const e=ji(t,this.size,3);i.uniform3fv(this.addr,e)}function ug(i,t){const e=ji(t,this.size,4);i.uniform4fv(this.addr,e)}function fg(i,t){const e=ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dg(i,t){const e=ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pg(i,t){const e=ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mg(i,t){i.uniform1iv(this.addr,t)}function gg(i,t){i.uniform2iv(this.addr,t)}function xg(i,t){i.uniform3iv(this.addr,t)}function _g(i,t){i.uniform4iv(this.addr,t)}function vg(i,t){i.uniform1uiv(this.addr,t)}function Mg(i,t){i.uniform2uiv(this.addr,t)}function Sg(i,t){i.uniform3uiv(this.addr,t)}function yg(i,t){i.uniform4uiv(this.addr,t)}function bg(i,t,e){const n=this.cache,s=t.length,r=Ur(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Fr(ph):o=dh;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Eg(i,t,e){const n=this.cache,s=t.length,r=Ur(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||xh,r[o])}function wg(i,t,e){const n=this.cache,s=t.length,r=Ur(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Fr(mh):o=_h;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Tg(i,t,e){const n=this.cache,s=t.length,r=Ur(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||gh,r[o])}function Ag(i){switch(i){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return ug;case 35674:return fg;case 35675:return dg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return xg;case 35669:case 35673:return _g;case 5125:return vg;case 36294:return Mg;case 36295:return Sg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Tg}}class Rg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ag(e.type)}}class Cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ag(e.type)}}class Pg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ja=/(\w+)(\])?(\[|\.)?/g;function Eh(i,t){i.seq.push(t),i.map[t.id]=t}function Lg(i,t,e){const n=i.name,s=n.length;for(Ja.lastIndex=0;;){const r=Ja.exec(n),o=Ja.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Eh(e,c===void 0?new Rg(a,i,t):new Cg(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Pg(a),Eh(e,d)),e=d}}}class Or{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Lg(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function wh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Dg=37297;let Ig=0;function Ng(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Th=new Vt;function Ug(i){ee._getMatrix(Th,ee.workingColorSpace,i);const t=`mat3( ${Th.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case or:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ah(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ng(i.getShaderSource(t),a)}else return r}function Fg(i,t){const e=Ug(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Og={[kl]:"Linear",[Gl]:"Reinhard",[Hl]:"Cineon",[Vl]:"ACESFilmic",[Xl]:"AgX",[bo]:"Neutral",[Wl]:"Custom"};function zg(i,t){const e=Og[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zr=new Q;function Bg(){ee.getLuminanceCoefficients(zr);const i=zr.x.toFixed(4),t=zr.y.toFixed(4),e=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function Gg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ls(i){return i!==""}function Rh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ch(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(i){return i.replace(Vg,Wg)}function Wg(i,t){const e=$t[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Qa(e)}const Xg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(i){return i.replace(Xg,qg)}function qg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const Yg={[os]:"SHADOWMAP_TYPE_PCF",[as]:"SHADOWMAP_TYPE_VSM"};function $g(i){return Yg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Kg={[hs]:"ENVMAP_MODE_REFRACTION"};function Zg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Kg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Jg={[yo]:"ENVMAP_BLENDING_MULTIPLY",[Nf]:"ENVMAP_BLENDING_MIX",[Uf]:"ENVMAP_BLENDING_ADD"};function Qg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Jg[i.combine]||"ENVMAP_BLENDING_NONE"}function jg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=$g(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Zg(e),d=Qg(e),u=kg(e),f=Gg(r),m=s.createProgram();let v,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ls).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ls).join(`
`),p.length>0&&(p+=`
`)):(v=[Lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),p=[Lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?$t.tonemapping_pars_fragment:"",e.toneMapping!==Un?zg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Fg("linearToOutputTexel",e.outputColorSpace),Bg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ls).join(`
`)),o=Qa(o),o=Rh(o,e),o=Ch(o,e),a=Qa(a),a=Rh(a,e),a=Ch(a,e),o=Ph(o),a=Ph(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=g+v+o,M=g+p+a,y=wh(s,s.VERTEX_SHADER,_),S=wh(s,s.FRAGMENT_SHADER,M);s.attachShader(m,y),s.attachShader(m,S),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function E(A){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(m)||"",L=s.getShaderInfoLog(y)||"",B=s.getShaderInfoLog(S)||"",P=C.trim(),O=L.trim(),H=B.trim();let k=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,y,S);else{const X=Ah(s,y,"vertex"),z=Ah(s,S,"fragment");le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+P+`
`+X+`
`+z)}else P!==""?Ht("WebGLProgram: Program Info Log:",P):(O===""||H==="")&&($=!1);$&&(A.diagnostics={runnable:k,programLog:P,vertexShader:{log:O,prefix:v},fragmentShader:{log:H,prefix:p}})}s.deleteShader(y),s.deleteShader(S),x=new Or(s,m),b=Hg(s,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(m,Dg)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ig++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=S,this}let tx=0;class ex{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new nx(t),e.set(t,n)),n}}class nx{constructor(t){this.id=tx++,this.code=t,this.usedTimes=0}}function ix(i){return i===ni||i===nr||i===ir}function sx(i,t,e,n,s,r){const o=new va,a=new ex,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,b,w,A,C,L){const B=A.fog,P=C.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=t.get(x.envMap||O,H),$=u[x.type];let X=n.precision;x.precision!==null&&(X=n.getMaxPrecision(x.precision),X!==x.precision&&Ht("WebGLProgram.getParameters:",x.precision,"not supported, using",X,"instead."));const z=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,G=z!==void 0?z.length:0;let V=0;P.morphAttributes.position!==void 0&&(V=1),P.morphAttributes.normal!==void 0&&(V=2),P.morphAttributes.color!==void 0&&(V=3);let ut,Y,at,ct;if($){const Et=Pn[$];ut=Et.vertexShader,Y=Et.fragmentShader}else{ut=x.vertexShader,Y=x.fragmentShader;const Et=a.getVertexShaderStage(x),pe=a.getFragmentShaderStage(x);a.update(x,Et,pe),at=Et.id,ct=pe.id}const mt=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),Ct=C.isInstancedMesh===!0,Kt=C.isBatchedMesh===!0,st=!!x.map,dt=!!x.matcap,At=!!k,Ft=At&&k.isPMREMTexture===!0,yt=!!x.aoMap,ne=!!x.lightMap,Re=!!x.bumpMap&&x.wireframe===!1,oe=!!x.normalMap,we=!!x.displacementMap,he=!!x.emissiveMap,ve=!!x.metalnessMap,Oe=!!x.roughnessMap,ue=x.anisotropy>0,K=x.clearcoat>0,Lt=x.diffuseRoughness>0,Qt=x.dispersion>0,Yt=x.retroreflectivity>0,_t=x.iridescence>0,ye=x.sheen>0,Ot=x.transmission>0,kt=ue&&!!x.anisotropyMap,N=K&&!!x.clearcoatMap,T=K&&!!x.clearcoatNormalMap,tt=K&&!!x.clearcoatRoughnessMap,gt=Lt&&!!x.diffuseRoughnessMap,ht=_t&&!!x.iridescenceMap,vt=_t&&!!x.iridescenceThicknessMap,I=ye&&!!x.sheenColorMap,U=ye&&!!x.sheenRoughnessMap,F=!!x.specularMap,Z=!!x.specularColorMap,D=!!x.specularIntensityMap,j=Ot&&!!x.transmissionMap,J=Ot&&!!x.thicknessMap,ot=!!x.gradientMap,lt=!!x.alphaMap,ft=x.alphaTest>0,Tt=!!x.alphaHash,Wt=!!x.extensions;let xt=Un;x.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(xt=i.toneMapping);const zt=Ft?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Xt={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:ut,fragmentShader:Y,defines:x.defines,customVertexShaderID:at,customFragmentShaderID:ct,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:X,batching:Kt,batchingColor:Kt&&C._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&C.instanceColor!==null,instancingMorph:Ct&&C.morphTexture!==null,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:st,matcap:dt,envMap:At,envMapMode:At&&k.mapping,envMapPMREM:Ft,envMapMaxLod:Ft?zt.length-1:null,envMapSize:Ft?zt[0].width:null,aoMap:yt,lightMap:ne,bumpMap:Re,normalMap:oe,displacementMap:we,emissiveMap:he,normalMapObjectSpace:oe&&x.normalMapType===zf,normalMapTangentSpace:oe&&x.normalMapType===sr,packedNormalMap:oe&&x.normalMapType===sr&&ix(x.normalMap.format),metalnessMap:ve,roughnessMap:Oe,anisotropy:ue,anisotropyMap:kt,clearcoat:K,clearcoatMap:N,clearcoatNormalMap:T,clearcoatRoughnessMap:tt,diffuseRoughness:Lt,diffuseRoughnessMap:gt,dispersion:Qt,retroreflection:Yt,iridescence:_t,iridescenceMap:ht,iridescenceThicknessMap:vt,sheen:ye,sheenColorMap:I,sheenRoughnessMap:U,specularMap:F,specularColorMap:Z,specularIntensityMap:D,transmission:Ot,transmissionMap:j,thicknessMap:J,gradientMap:ot,opaque:x.transparent===!1&&x.blending===ls&&x.alphaToCoverage===!1,alphaMap:lt,alphaTest:ft,alphaHash:Tt,combine:x.combine,mapUv:st&&f(x.map.channel),aoMapUv:yt&&f(x.aoMap.channel),lightMapUv:ne&&f(x.lightMap.channel),bumpMapUv:Re&&f(x.bumpMap.channel),normalMapUv:oe&&f(x.normalMap.channel),displacementMapUv:we&&f(x.displacementMap.channel),emissiveMapUv:he&&f(x.emissiveMap.channel),metalnessMapUv:ve&&f(x.metalnessMap.channel),roughnessMapUv:Oe&&f(x.roughnessMap.channel),anisotropyMapUv:kt&&f(x.anisotropyMap.channel),clearcoatMapUv:N&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:gt&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ht&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:I&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:U&&f(x.sheenRoughnessMap.channel),specularMapUv:F&&f(x.specularMap.channel),specularColorMapUv:Z&&f(x.specularColorMap.channel),specularIntensityMapUv:D&&f(x.specularIntensityMap.channel),transmissionMapUv:j&&f(x.transmissionMap.channel),thicknessMapUv:J&&f(x.thicknessMap.channel),alphaMapUv:lt&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(oe||ue),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!P.attributes.uv&&(st||lt),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&oe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:V,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:L.filter(Et=>Et.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:st&&x.map.isVideoTexture===!0&&ee.getTransfer(x.map.colorSpace)===de,decodeVideoTextureEmissive:he&&x.emissiveMap.isVideoTexture===!0&&ee.getTransfer(x.emissiveMap.colorSpace)===de,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ee,flipSided:x.side===Ze,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Wt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&x.extensions.multiDraw===!0||Kt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function v(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const w in x.defines)b.push(w),b.push(x.defines[w]);return x.isRawShaderMaterial===!1&&(p(b,x),g(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function _(x){const b=u[x.type];let w;if(b){const A=Pn[b];w=np.clone(A.uniforms)}else w=x.uniforms;return w}function M(x,b){let w=h.get(b);return w!==void 0?++w.usedTimes:(w=new jg(i,b,x,s),c.push(w),h.set(b,w)),w}function y(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:_,acquireProgram:M,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:E}}function rx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ox(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Dh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ih(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,v,p,g){let _=i[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:g},i[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=m,_.materialVariant=o(u),_.groupOrder=v,_.renderOrder=u.renderOrder,_.z=p,_.group=g),t++,_}function l(u,f,m,v,p,g,_){_.reversedDepth===!0&&(p=-p);const M=a(u,f,m,v,p,g);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):e.push(M)}function c(u,f,m,v,p,g){const _=a(u,f,m,v,p,g);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):e.unshift(_)}function h(u,f){e.length>1&&e.sort(u||ox),n.length>1&&n.sort(f||Dh),s.length>1&&s.sort(f||Dh)}function d(){for(let u=t,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function ax(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ih,i.set(n,[o])):s>=r.length?(o=new Ih,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function lx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Q,color:new Rt};break;case"SpotLight":e={position:new Q,direction:new Q,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return i[t.id]=e,e}}}function cx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let hx=0;function ux(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function fx(i){const t=new lx,e=cx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Q);const s=new Q,r=new ie,o=new ie;function a(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,m=0,v=0,p=0,g=0,_=0,M=0,y=0,S=0,E=0,x=0,b=0,w=0,A=0;c.sort(ux);for(let L=0,B=c.length;L<B;L++){const P=c[L],O=P.color,H=P.intensity,k=P.distance;let $=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ni?$=P.shadow.map.texture:$=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*H,d+=O.g*H,u+=O.b*H;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],H);A++}else if(P.isSunLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,G=e.get(P);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[m]=G,n.sunShadowMap[m]=$;const V=z.getViewportCount();for(let ut=0;ut<V;ut++)n.sunShadowMatrix[v+ut]=z.getMatrix(ut),n.sunShadowCascade[v+ut]=z._cascadeData[ut];v+=V,m++}n.sun[f]=X,f++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,G=e.get(P);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=P.shadow.matrix,S++}n.directional[p]=X,p++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(H),X.distance=k,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[_]=X;const z=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,z.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=z.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=$,x++}_++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(O).multiplyScalar(H),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[M]=X,M++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const z=P.shadow,G=e.get(P);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,G.shadowCameraNear=z.camera.near,G.shadowCameraFar=z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(H),X.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[y]=X,y++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const C=n.hash;(C.sunLength!==f||C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==M||C.hemiLength!==y||C.numSunShadows!==m||C.numDirectionalShadows!==S||C.numPointShadows!==E||C.numSpotShadows!==x||C.numSpotMaps!==b||C.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=p,n.spot.length=_,n.rectArea.length=M,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,C.sunLength=f,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=M,C.hemiLength=y,C.numSunShadows=m,C.numDirectionalShadows=S,C.numPointShadows=E,C.numSpotShadows=x,C.numSpotMaps=b,C.numLightProbes=A,n.version=hx++)}function l(c,h){let d=0,u=0,f=0,m=0,v=0,p=0;const g=h.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){const y=c[_];if(y.isSunLight){const S=n.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),d++}else if(y.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),u++}else if(y.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),m++}else if(y.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const S=n.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function Nh(i){const t=new fx(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function dx(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Nh(i),t.set(s,[a])):r>=o.length?(a=new Nh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mx=`uniform sampler2D shadow_pass;
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
}`,gx=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],xx=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Uh=new ie,Ds=new Q,ja=new Q;function _x(i,t,e){let n=new ws;const s=new Bt,r=new Bt,o=new Me,a=new op,l=new ap,c={},h=e.maxTextureSize,d={[jn]:Ze,[Ze]:jn,[Ee]:Ee},u=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:px,fragmentShader:mx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ae;m.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Jt(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=os;let g=this.type;this.render=function(E,x,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===mf&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=os);const w=i.getRenderTarget(),A=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Ci),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const B=g!==this.type;B&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(O=>O.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,O=E.length;P<O;P++){const H=E[P],k=H.shadow;if(k===void 0){Ht("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const $=k.getFrameExtents();s.multiply($),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,k.mapSize.y=r.y));const X=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||B===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===as){if(H.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Tn(s.x,s.y,{format:ni,type:fn,minFilter:We,magFilter:We,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new Yi(s.x,s.y,un),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=ti,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ge,k.map.depthTexture.magFilter=Ge}else H.isPointLight?(k.map=new Za(s.x),k.map.depthTexture=new Nc(s.x,wn)):(k.map=new Tn(s.x,s.y),k.map.depthTexture=new Yi(s.x,s.y,wn)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=ti,this.type===os?(k.map.depthTexture.compareFunction=X?tc:jl,k.map.depthTexture.minFilter=We,k.map.depthTexture.magFilter=We):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ge,k.map.depthTexture.magFilter=Ge);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);const z=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();H.isPointLight!==!0&&k.updateMatrices(H,b);const G=k.camera.layers.mask&4294967294?k.camera.layers:b.layers;for(let V=0;V<z;V++){const ut=k.getCamera(V);if(H.isPointLight){const Y=k.camera,at=k.matrix,ct=H.distance||Y.far;ct!==Y.far&&(Y.far=ct,Y.updateProjectionMatrix()),Ds.setFromMatrixPosition(H.matrixWorld),Y.position.copy(Ds),ja.copy(Y.position),ja.add(gx[V]),Y.up.copy(xx[V]),Y.lookAt(ja),Y.updateMatrixWorld(),at.makeTranslation(-Ds.x,-Ds.y,-Ds.z),Uh.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Uh,Y.coordinateSystem,Y.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,V),i.clear();else{V===0&&(i.setRenderTarget(k.map),i.clear());const Y=k.getViewport(V);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),L.viewport(o)}n=k.getFrustum(V),y(x,b,ut,H,G,this.type)}k.isPointLightShadow!==!0&&this.type===as&&_(k,b),k.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(w,A,C)};function _(E,x){const b=t.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Tn(s.x,s.y,{format:ni,type:fn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(x,null,b,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(x,null,b,f,v,null)}function M(E,x,b,w){let A=null;const C=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)A=C;else if(A=b.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const L=A.uuid,B=x.uuid;let P=c[L];P===void 0&&(P={},c[L]=P);let O=P[B];O===void 0&&(O=A.clone(),P[B]=O,x.addEventListener("dispose",S)),A=O}if(A.visible=x.visible,A.wireframe=x.wireframe,w===as?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:d[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const L=i.properties.get(A);L.light=b}return A}function y(E,x,b,w,A,C){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===as)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const P=t.update(E),O=E.material;if(Array.isArray(O)){const H=P.groups;for(let k=0,$=H.length;k<$;k++){const X=H[k],z=O[X.materialIndex];if(z&&z.visible){const G=M(E,z,w,C);E.onBeforeShadow(i,E,x,b,P,G,X),i.renderBufferDirect(b,null,P,G,E,X),E.onAfterShadow(i,E,x,b,P,G,X)}}}else if(O.visible){const H=M(E,O,w,C);E.onBeforeShadow(i,E,x,b,P,H,null),i.renderBufferDirect(b,null,P,H,E,null),E.onAfterShadow(i,E,x,b,P,H,null)}}const B=E.children;for(let P=0,O=B.length;P<O;P++)y(B[P],x,b,w,A,C)}function S(E){E.target.removeEventListener("dispose",S);for(const b in c){const w=c[b],A=E.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function vx(i,t){function e(){let D=!1;const j=new Me;let J=null;const ot=new Me(0,0,0,0);return{setMask:function(lt){J!==lt&&!D&&(i.colorMask(lt,lt,lt,lt),J=lt)},setLocked:function(lt){D=lt},setClear:function(lt,ft,Tt,Wt,xt){xt===!0&&(lt*=Wt,ft*=Wt,Tt*=Wt),j.set(lt,ft,Tt,Wt),ot.equals(j)===!1&&(i.clearColor(lt,ft,Tt,Wt),ot.copy(j))},reset:function(){D=!1,J=null,ot.set(-1,0,0,0)}}}function n(){let D=!1,j=!1,J=null,ot=null,lt=null;return{setReversed:function(ft){if(j!==ft){const Tt=t.get("EXT_clip_control");ft?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),j=ft;const Wt=lt;lt=null,this.setClear(Wt)}},getReversed:function(){return j},setTest:function(ft){ft?pt(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(ft){J!==ft&&!D&&(i.depthMask(ft),J=ft)},setFunc:function(ft){if(j&&(ft=Kf[ft]),ot!==ft){switch(ft){case mo:i.depthFunc(i.NEVER);break;case go:i.depthFunc(i.ALWAYS);break;case xo:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case _o:i.depthFunc(i.EQUAL);break;case vo:i.depthFunc(i.GEQUAL);break;case Mo:i.depthFunc(i.GREATER);break;case So:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=ft}},setLocked:function(ft){D=ft},setClear:function(ft){lt!==ft&&(lt=ft,j&&(ft=1-ft),i.clearDepth(ft))},reset:function(){D=!1,J=null,ot=null,lt=null,j=!1}}}function s(){let D=!1,j=null,J=null,ot=null,lt=null,ft=null,Tt=null,Wt=null,xt=null;return{setTest:function(zt){D||(zt?pt(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(zt){j!==zt&&!D&&(i.stencilMask(zt),j=zt)},setFunc:function(zt,Xt,Et){(J!==zt||ot!==Xt||lt!==Et)&&(i.stencilFunc(zt,Xt,Et),J=zt,ot=Xt,lt=Et)},setOp:function(zt,Xt,Et){(ft!==zt||Tt!==Xt||Wt!==Et)&&(i.stencilOp(zt,Xt,Et),ft=zt,Tt=Xt,Wt=Et)},setLocked:function(zt){D=zt},setClear:function(zt){xt!==zt&&(i.clearStencil(zt),xt=zt)},reset:function(){D=!1,j=null,J=null,ot=null,lt=null,ft=null,Tt=null,Wt=null,xt=null}}}const r=new e,o=new n,a=new s;let l={};const c=new WeakMap;let h={},d={},u={},f=new WeakMap,m=[],v=null,p=!1,g=null,_=null,M=null,y=null,S=null,E=null,x=null,b=new Rt(0,0,0),w=0,A=!1,C=null,L=null,B=null,P=null,O=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,$=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=$>=2);let z=null,G={};const V=i.getParameter(i.SCISSOR_BOX),ut=i.getParameter(i.VIEWPORT),Y=new Me().fromArray(V),at=new Me().fromArray(ut);function ct(D,j,J,ot){const lt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(D,ft),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<J;Tt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(j+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ft}const mt={};mt[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(i.DEPTH_TEST),o.setFunc(cs),Re(!1),oe(Ul),pt(i.CULL_FACE),yt(Ci);function pt(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ct(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Kt(D,j){return u[D]!==j?(i.bindFramebuffer(D,j),u[D]=j,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=j),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=j),!0):!1}function st(D,j){let J=m,ot=!1;if(D){J=f.get(j),J===void 0&&(J=[],f.set(j,J));const lt=D.textures;if(J.length!==lt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Tt=lt.length;ft<Tt;ft++)J[ft]=i.COLOR_ATTACHMENT0+ft;J.length=lt.length,ot=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ot=!0);ot&&i.drawBuffers(J)}function dt(D){return v!==D?(i.useProgram(D),v=D,!0):!1}const At={[Pi]:i.FUNC_ADD,[xf]:i.FUNC_SUBTRACT,[_f]:i.FUNC_REVERSE_SUBTRACT};At[vf]=i.MIN,At[Mf]=i.MAX;const Ft={[Sf]:i.ZERO,[yf]:i.ONE,[bf]:i.SRC_COLOR,[zl]:i.SRC_ALPHA,[Cf]:i.SRC_ALPHA_SATURATE,[Af]:i.DST_COLOR,[wf]:i.DST_ALPHA,[Ef]:i.ONE_MINUS_SRC_COLOR,[Bl]:i.ONE_MINUS_SRC_ALPHA,[Rf]:i.ONE_MINUS_DST_COLOR,[Tf]:i.ONE_MINUS_DST_ALPHA,[Pf]:i.CONSTANT_COLOR,[Lf]:i.ONE_MINUS_CONSTANT_COLOR,[Df]:i.CONSTANT_ALPHA,[If]:i.ONE_MINUS_CONSTANT_ALPHA};function yt(D,j,J,ot,lt,ft,Tt,Wt,xt,zt){if(D===Ci){p===!0&&(Ct(i.BLEND),p=!1);return}if(p===!1&&(pt(i.BLEND),p=!0),D!==gf){if(D!==g||zt!==A){if((_!==Pi||S!==Pi)&&(i.blendEquation(i.FUNC_ADD),_=Pi,S=Pi),zt)switch(D){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case po:i.blendFunc(i.ONE,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ol:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:le("WebGLState: Invalid blending: ",D);break}else switch(D){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case po:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fl:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ol:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",D);break}M=null,y=null,E=null,x=null,b.set(0,0,0),w=0,g=D,A=zt}return}lt=lt||j,ft=ft||J,Tt=Tt||ot,(j!==_||lt!==S)&&(i.blendEquationSeparate(At[j],At[lt]),_=j,S=lt),(J!==M||ot!==y||ft!==E||Tt!==x)&&(i.blendFuncSeparate(Ft[J],Ft[ot],Ft[ft],Ft[Tt]),M=J,y=ot,E=ft,x=Tt),(Wt.equals(b)===!1||xt!==w)&&(i.blendColor(Wt.r,Wt.g,Wt.b,xt),b.copy(Wt),w=xt),g=D,A=!1}function ne(D,j){D.side===Ee?Ct(i.CULL_FACE):pt(i.CULL_FACE);let J=D.side===Ze;j&&(J=!J),Re(J),D.blending===ls&&D.transparent===!1?yt(Ci):yt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const ot=D.stencilWrite;a.setTest(ot),ot&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),he(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(D){C!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),C=D)}function oe(D){D!==df?(pt(i.CULL_FACE),D!==L&&(D===Ul?i.cullFace(i.BACK):D===pf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),L=D}function we(D){D!==B&&(k&&i.lineWidth(D),B=D)}function he(D,j,J){D?(pt(i.POLYGON_OFFSET_FILL),(P!==j||O!==J)&&(P=j,O=J,o.getReversed()&&(j=-j,J=-J),i.polygonOffset(j,J))):Ct(i.POLYGON_OFFSET_FILL)}function ve(D){D?pt(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function Oe(D){D===void 0&&(D=i.TEXTURE0+H-1),z!==D&&(i.activeTexture(D),z=D)}function ue(D,j,J){J===void 0&&(z===null?J=i.TEXTURE0+H-1:J=z);let ot=G[J];ot===void 0&&(ot={type:void 0,texture:void 0},G[J]=ot),(ot.type!==D||ot.texture!==j)&&(z!==J&&(i.activeTexture(J),z=J),i.bindTexture(D,j||mt[D]),ot.type=D,ot.texture=j)}function K(){const D=G[z];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Lt(){try{i.compressedTexImage2D(...arguments)}catch(D){le("WebGLState:",D)}}function Qt(){try{i.compressedTexImage3D(...arguments)}catch(D){le("WebGLState:",D)}}function Yt(){try{i.texSubImage2D(...arguments)}catch(D){le("WebGLState:",D)}}function _t(){try{i.texSubImage3D(...arguments)}catch(D){le("WebGLState:",D)}}function ye(){try{i.compressedTexSubImage2D(...arguments)}catch(D){le("WebGLState:",D)}}function Ot(){try{i.compressedTexSubImage3D(...arguments)}catch(D){le("WebGLState:",D)}}function kt(){try{i.texStorage2D(...arguments)}catch(D){le("WebGLState:",D)}}function N(){try{i.texStorage3D(...arguments)}catch(D){le("WebGLState:",D)}}function T(){try{i.texImage2D(...arguments)}catch(D){le("WebGLState:",D)}}function tt(){try{i.texImage3D(...arguments)}catch(D){le("WebGLState:",D)}}function gt(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function ht(D,j){d[D]!==j&&(i.pixelStorei(D,j),d[D]=j)}function vt(D){Y.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Y.copy(D))}function I(D){at.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),at.copy(D))}function U(D,j){let J=c.get(j);J===void 0&&(J=new WeakMap,c.set(j,J));let ot=J.get(D);ot===void 0&&(ot=i.getUniformBlockIndex(j,D.name),i.uniformBlockBinding(j,ot,ot),J.set(D,ot))}function F(D,j,J){const lt=c.get(j).get(D);l[lt]!==J&&(i.bindBufferBase(i.UNIFORM_BUFFER,lt,J),l[lt]=J)}function Z(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},z=null,G={},u={},l={},f=new WeakMap,m=[],v=null,p=!1,g=null,_=null,M=null,y=null,S=null,E=null,x=null,b=new Rt(0,0,0),w=0,A=!1,C=null,L=null,B=null,P=null,O=null,Y.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:Ct,bindFramebuffer:Kt,drawBuffers:st,useProgram:dt,setBlending:yt,setMaterial:ne,setFlipSided:Re,setCullFace:oe,setLineWidth:we,setPolygonOffset:he,setScissorTest:ve,activeTexture:Oe,bindTexture:ue,unbindTexture:K,compressedTexImage2D:Lt,compressedTexImage3D:Qt,texImage2D:T,texImage3D:tt,pixelStorei:ht,getParameter:gt,updateUBOMapping:U,uniformBlockBinding:F,texStorage2D:kt,texStorage3D:N,texSubImage2D:Yt,texSubImage3D:_t,compressedTexSubImage2D:ye,compressedTexSubImage3D:Ot,scissor:vt,viewport:I,reset:Z}}function Mx(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap,d=new Set;let u;const f=new WeakMap,m=new Set,v=new FinalizationRegistry(N=>m.delete(N));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,T){return p?new OffscreenCanvas(N,T):ds("canvas")}function _(N,T,tt){let gt=1;const ht=kt(N);if((ht.width>tt||ht.height>tt)&&(gt=tt/Math.max(ht.width,ht.height)),gt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const vt=Math.floor(gt*ht.width),I=Math.floor(gt*ht.height);u===void 0&&(u=g(vt,I));const U=T?g(vt,I):u;return U.width=vt,U.height=I,U.getContext("2d").drawImage(N,0,0,vt,I),Ht("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+vt+"x"+I+")."),U}else return"data"in N&&Ht("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),N;return N}function M(N){return N.generateMipmaps}function y(N){i.generateMipmap(N)}function S(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(N,T,tt,gt,ht,vt=!1){if(N!==null){if(i[N]!==void 0)return i[N];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let I;gt&&(I=t.get("EXT_texture_norm16"),I||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let U=T;if(T===i.RED&&(tt===i.FLOAT&&(U=i.R32F),tt===i.HALF_FLOAT&&(U=i.R16F),tt===i.UNSIGNED_BYTE&&(U=i.R8),tt===i.UNSIGNED_SHORT&&I&&(U=I.R16_EXT),tt===i.SHORT&&I&&(U=I.R16_SNORM_EXT)),T===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(U=i.R8UI),tt===i.UNSIGNED_SHORT&&(U=i.R16UI),tt===i.UNSIGNED_INT&&(U=i.R32UI),tt===i.BYTE&&(U=i.R8I),tt===i.SHORT&&(U=i.R16I),tt===i.INT&&(U=i.R32I)),T===i.RG&&(tt===i.FLOAT&&(U=i.RG32F),tt===i.HALF_FLOAT&&(U=i.RG16F),tt===i.UNSIGNED_BYTE&&(U=i.RG8),tt===i.UNSIGNED_SHORT&&I&&(U=I.RG16_EXT),tt===i.SHORT&&I&&(U=I.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(U=i.RG8UI),tt===i.UNSIGNED_SHORT&&(U=i.RG16UI),tt===i.UNSIGNED_INT&&(U=i.RG32UI),tt===i.BYTE&&(U=i.RG8I),tt===i.SHORT&&(U=i.RG16I),tt===i.INT&&(U=i.RG32I)),T===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(U=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(U=i.RGB16UI),tt===i.UNSIGNED_INT&&(U=i.RGB32UI),tt===i.BYTE&&(U=i.RGB8I),tt===i.SHORT&&(U=i.RGB16I),tt===i.INT&&(U=i.RGB32I)),T===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(U=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(U=i.RGBA16UI),tt===i.UNSIGNED_INT&&(U=i.RGBA32UI),tt===i.BYTE&&(U=i.RGBA8I),tt===i.SHORT&&(U=i.RGBA16I),tt===i.INT&&(U=i.RGBA32I)),T===i.RGB&&(tt===i.UNSIGNED_SHORT&&I&&(U=I.RGB16_EXT),tt===i.SHORT&&I&&(U=I.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(U=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(U=i.R11F_G11F_B10F)),T===i.RGBA){const F=vt?or:ee.getTransfer(ht);tt===i.FLOAT&&(U=i.RGBA32F),tt===i.HALF_FLOAT&&(U=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(U=F===de?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&I&&(U=I.RGBA16_EXT),tt===i.SHORT&&I&&(U=I.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(U=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(U=i.RGB5_A1)}return(U===i.R16F||U===i.R32F||U===i.RG16F||U===i.RG32F||U===i.RGBA16F||U===i.RGBA32F)&&t.get("EXT_color_buffer_float"),U}function x(N,T){let tt;return N?T===null||T===wn||T===Di?tt=i.DEPTH24_STENCIL8:T===un?tt=i.DEPTH32F_STENCIL8:T===us&&(tt=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===wn||T===Di?tt=i.DEPTH_COMPONENT24:T===un?tt=i.DEPTH_COMPONENT32F:T===us&&(tt=i.DEPTH_COMPONENT16),tt}function b(N,T){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ge&&N.minFilter!==We?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function w(N){const T=new WeakRef(N);n.get(N).__ref=T,m.add(T),v.register(N,T,T)}function A(N){const T=n.get(N).__ref;T!==void 0&&(m.delete(T),v.unregister(T))}function C(N){B(N.target)}function L(N){P(N.target)}function B(N){N.removeEventListener("dispose",C),A(N),H(N),N.isVideoTexture&&h.delete(N),N.isHTMLTexture&&d.delete(N)}function P(N){N.removeEventListener("dispose",L),A(N),$(N)}function O(){for(const N of m){const T=N.deref();T!==void 0&&(T.isRenderTarget===!0?P(T):B(T))}m.clear(),d.clear()}function H(N){const T=n.get(N);if(T.__webglInit===void 0)return;const tt=N.source,gt=f.get(tt);if(gt){const ht=gt[T.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&k(N),Object.keys(gt).length===0&&f.delete(tt)}n.remove(N)}function k(N){const T=n.get(N);i.deleteTexture(T.__webglTexture);const tt=N.source,gt=f.get(tt);delete gt[T.__cacheKey],o.memory.textures--}function $(N){const T=n.get(N);T.__depthDisposeCallback&&T.__depthDisposeCallback();const tt=N.depthTexture;if(tt&&tt.renderTarget===N&&B(tt),N.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(T.__webglFramebuffer[ht]))for(let vt=0;vt<T.__webglFramebuffer[ht].length;vt++)i.deleteFramebuffer(T.__webglFramebuffer[ht][vt]);else i.deleteFramebuffer(T.__webglFramebuffer[ht]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ht])}else{if(Array.isArray(T.__webglFramebuffer))for(let ht=0;ht<T.__webglFramebuffer.length;ht++)i.deleteFramebuffer(T.__webglFramebuffer[ht]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ht=0;ht<T.__webglColorRenderbuffer.length;ht++)T.__webglColorRenderbuffer[ht]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ht]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const gt=N.textures;for(let ht=0,vt=gt.length;ht<vt;ht++){const I=n.get(gt[ht]);I.__webglTexture&&(i.deleteTexture(I.__webglTexture),o.memory.textures--),n.remove(gt[ht])}n.remove(N)}let X=0;function z(){X=0}function G(){return X}function V(N){X=N}function ut(){const N=X;return N>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,N}function Y(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.mipmapsAutoUpdate),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function at(N,T){const tt=n.get(N);if(N.isVideoTexture&&ye(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&tt.__version!==N.version){const gt=N.image;if(gt===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(tt,N,T);return}}else N.isExternalTexture&&(tt.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+T)}function ct(N,T){const tt=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){ne(tt,N,T);return}else N.isExternalTexture&&(tt.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+T)}function mt(N,T){const tt=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){ne(tt,N,T);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+T)}function pt(N,T){const tt=n.get(N);if(N.version>0&&tt.__version!==N.version){Re(tt,N,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+T)}const Ct={[Zs]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[To]:i.MIRRORED_REPEAT},Kt={[Ge]:i.NEAREST,[Ff]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[Ao]:i.LINEAR_MIPMAP_NEAREST,[En]:i.LINEAR_MIPMAP_LINEAR},st={[kf]:i.NEVER,[ec]:i.ALWAYS,[Gf]:i.LESS,[jl]:i.LEQUAL,[Hf]:i.EQUAL,[tc]:i.GEQUAL,[Vf]:i.GREATER,[Wf]:i.NOTEQUAL};function dt(N,T){if(T.type===un&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===We||T.magFilter===Ao||T.magFilter===Js||T.magFilter===En||T.minFilter===We||T.minFilter===Ao||T.minFilter===Js||T.minFilter===En)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Ct[T.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Ct[T.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Ct[T.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Kt[T.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Kt[T.minFilter]),T.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,st[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ge||T.minFilter!==Js&&T.minFilter!==En||T.type===un&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function At(N,T){let tt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",C),w(T));const gt=T.source;let ht=f.get(gt);ht===void 0&&(ht={},f.set(gt,ht));const vt=Y(T);if(vt!==N.__cacheKey){ht[vt]===void 0&&(ht[vt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,tt=!0),ht[vt].usedTimes++;const I=ht[N.__cacheKey];I!==void 0&&(ht[N.__cacheKey].usedTimes--,I.usedTimes===0&&k(T)),N.__cacheKey=vt,N.__webglTexture=ht[vt].texture}return tt}function Ft(N,T,tt){return Math.floor(Math.floor(N/tt)/T)}function yt(N,T,tt,gt){const vt=N.updateRanges;if(vt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,tt,gt,T.data);else{vt.sort((D,j)=>D.start-j.start);let I=0;for(let D=1;D<vt.length;D++){const j=vt[I],J=vt[D],ot=j.start+j.count,lt=Ft(J.start,T.width,4),ft=Ft(j.start,T.width,4);J.start<=ot+1&&lt===ft&&Ft(J.start+J.count-1,T.width,4)===lt?j.count=Math.max(j.count,J.start+J.count-j.start):(++I,vt[I]=J)}vt.length=I+1;const U=e.getParameter(i.UNPACK_ROW_LENGTH),F=e.getParameter(i.UNPACK_SKIP_PIXELS),Z=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let D=0,j=vt.length;D<j;D++){const J=vt[D],ot=Math.floor(J.start/4),lt=Math.ceil(J.count/4),ft=ot%T.width,Tt=Math.floor(ot/T.width),Wt=lt,xt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,Tt),e.texSubImage2D(i.TEXTURE_2D,0,ft,Tt,Wt,xt,tt,gt,T.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,U),e.pixelStorei(i.UNPACK_SKIP_PIXELS,F),e.pixelStorei(i.UNPACK_SKIP_ROWS,Z)}}function ne(N,T,tt){let gt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(gt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(gt=i.TEXTURE_3D);const ht=At(N,T),vt=T.source;e.bindTexture(gt,N.__webglTexture,i.TEXTURE0+tt);const I=n.get(vt);if(vt.version!==I.__version||ht===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const xt=ee.getPrimaries(ee.workingColorSpace),zt=T.colorSpace===Fn?null:ee.getPrimaries(T.colorSpace),Xt=T.colorSpace===Fn||xt===zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let F=_(T.image,!1,s.maxTextureSize);F=Ot(T,F);const Z=r.convert(T.format,T.colorSpace),D=r.convert(T.type);let j=E(T.internalFormat,Z,D,T.normalized,T.colorSpace,T.isVideoTexture);dt(gt,T);let J;const ot=T.mipmaps,lt=T.isVideoTexture!==!0,ft=I.__version===void 0||ht===!0,Tt=vt.dataReady,Wt=b(T,F);if(T.isDepthTexture)j=x(T.format===ei,T.type),ft&&(lt?e.texStorage2D(i.TEXTURE_2D,1,j,F.width,F.height):e.texImage2D(i.TEXTURE_2D,0,j,F.width,F.height,0,Z,D,null));else if(T.isDataTexture)if(ot.length>0){lt&&ft&&e.texStorage2D(i.TEXTURE_2D,Wt,j,ot[0].width,ot[0].height);for(let xt=0,zt=ot.length;xt<zt;xt++)J=ot[xt],lt?Tt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,J.width,J.height,Z,D,J.data):e.texImage2D(i.TEXTURE_2D,xt,j,J.width,J.height,0,Z,D,J.data);T.generateMipmaps=!1}else lt?(ft&&e.texStorage2D(i.TEXTURE_2D,Wt,j,F.width,F.height),Tt&&yt(T,F,Z,D)):e.texImage2D(i.TEXTURE_2D,0,j,F.width,F.height,0,Z,D,F.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){lt&&ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,j,ot[0].width,ot[0].height,F.depth);for(let xt=0,zt=ot.length;xt<zt;xt++)if(J=ot[xt],T.format!==dn)if(Z!==null)if(lt){if(Tt)if(T.layerUpdates.size>0){const Xt=sh(J.width,J.height,T.format,T.type);for(const Et of T.layerUpdates){const pe=J.data.subarray(Et*Xt/J.data.BYTES_PER_ELEMENT,(Et+1)*Xt/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,Et,J.width,J.height,1,Z,pe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,J.width,J.height,F.depth,Z,J.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,j,J.width,J.height,F.depth,0,J.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?Tt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,J.width,J.height,F.depth,Z,D,J.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,j,J.width,J.height,F.depth,0,Z,D,J.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{lt&&ft&&e.texStorage2D(i.TEXTURE_2D,Wt,j,ot[0].width,ot[0].height);for(let xt=0,zt=ot.length;xt<zt;xt++)J=ot[xt],T.format!==dn?Z!==null?lt?Tt&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,J.width,J.height,Z,J.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,j,J.width,J.height,0,J.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?Tt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,J.width,J.height,Z,D,J.data):e.texImage2D(i.TEXTURE_2D,xt,j,J.width,J.height,0,Z,D,J.data)}else if(T.isDataArrayTexture)if(lt){if(ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,j,F.width,F.height,F.depth),Tt)if(T.layerUpdates.size>0){const xt=sh(F.width,F.height,T.format,T.type);for(const zt of T.layerUpdates){const Xt=F.data.subarray(zt*xt/F.data.BYTES_PER_ELEMENT,(zt+1)*xt/F.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,zt,F.width,F.height,1,Z,D,Xt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,Z,D,F.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,j,F.width,F.height,F.depth,0,Z,D,F.data);else if(T.isData3DTexture)lt?(ft&&e.texStorage3D(i.TEXTURE_3D,Wt,j,F.width,F.height,F.depth),Tt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,Z,D,F.data)):e.texImage3D(i.TEXTURE_3D,0,j,F.width,F.height,F.depth,0,Z,D,F.data);else if(T.isFramebufferTexture){if(ft)if(lt)e.texStorage2D(i.TEXTURE_2D,Wt,j,F.width,F.height);else{let xt=F.width,zt=F.height;for(let Xt=0;Xt<Wt;Xt++)e.texImage2D(i.TEXTURE_2D,Xt,j,xt,zt,0,Z,D,null),xt>>=1,zt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){const xt=i.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),F.parentNode!==xt){xt.appendChild(F),d.add(T),xt.onpaint=zt=>{const Xt=zt.changedElements;for(const Et of d)Xt.includes(Et.image)&&(Et.needsUpdate=!0)},xt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,F);else{const Xt=i.RGBA,Et=i.RGBA,pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Xt,Et,pe,F)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ot.length>0){if(lt&&ft){const xt=kt(ot[0]);e.texStorage2D(i.TEXTURE_2D,Wt,j,xt.width,xt.height)}for(let xt=0,zt=ot.length;xt<zt;xt++)J=ot[xt],lt?Tt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Z,D,J):e.texImage2D(i.TEXTURE_2D,xt,j,Z,D,J);T.generateMipmaps=!1}else if(lt){if(ft){const xt=kt(F);e.texStorage2D(i.TEXTURE_2D,Wt,j,xt.width,xt.height)}Tt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Z,D,F)}else e.texImage2D(i.TEXTURE_2D,0,j,Z,D,F);M(T)&&T.mipmapsAutoUpdate===!0&&y(gt),I.__version=vt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Re(N,T,tt){if(T.image.length!==6)return;const gt=At(N,T),ht=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+tt);const vt=n.get(ht);if(ht.version!==vt.__version||gt===!0){e.activeTexture(i.TEXTURE0+tt);const I=ee.getPrimaries(ee.workingColorSpace),U=T.colorSpace===Fn?null:ee.getPrimaries(T.colorSpace),F=T.colorSpace===Fn||I===U?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,F);const Z=T.isCompressedTexture||T.image[0].isCompressedTexture,D=T.image[0]&&T.image[0].isDataTexture,j=[];for(let Et=0;Et<6;Et++)!Z&&!D?j[Et]=_(T.image[Et],!0,s.maxCubemapSize):j[Et]=D?T.image[Et].image:T.image[Et],j[Et]=Ot(T,j[Et]);const J=j[0],ot=r.convert(T.format,T.colorSpace),lt=r.convert(T.type);let ft=E(T.internalFormat,ot,lt,T.normalized,T.colorSpace);const Tt=T.isVideoTexture!==!0,Wt=vt.__version===void 0||gt===!0,xt=ht.dataReady;let zt=b(T,J);dt(i.TEXTURE_CUBE_MAP,T);let Xt;if(T.isDepthTexture){if(ft=x(T.format===ei,T.type),Wt)if(Tt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ft,J.width,J.height);else for(let Et=0;Et<6;Et++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ft,J.width,J.height,0,ot,lt,null)}else if(Z){Tt&&Wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,ft,J.width,J.height);for(let Et=0;Et<6;Et++){Xt=j[Et].mipmaps;for(let pe=0;pe<Xt.length;pe++){const Be=Xt[pe];T.format!==dn?ot!==null?Tt?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe,0,0,Be.width,Be.height,ot,Be.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe,ft,Be.width,Be.height,0,Be.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe,0,0,Be.width,Be.height,ot,lt,Be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe,ft,Be.width,Be.height,0,ot,lt,Be.data)}}}else{if(Xt=T.mipmaps,Tt&&Wt){Xt.length>0&&zt++;const Et=kt(j[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,ft,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(D){Tt?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,j[Et].width,j[Et].height,ot,lt,j[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ft,j[Et].width,j[Et].height,0,ot,lt,j[Et].data);for(let pe=0;pe<Xt.length;pe++){const fi=Xt[pe].image[Et].image;Tt?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe+1,0,0,fi.width,fi.height,ot,lt,fi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe+1,ft,fi.width,fi.height,0,ot,lt,fi.data)}}else{Tt?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,ot,lt,j[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ft,ot,lt,j[Et]);for(let pe=0;pe<Xt.length;pe++){const Be=Xt[pe];Tt?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe+1,0,0,ot,lt,Be.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe+1,ft,ot,lt,Be.image[Et])}}}M(T)&&T.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),vt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function oe(N,T,tt,gt,ht,vt){const I=r.convert(tt.format,tt.colorSpace),U=r.convert(tt.type),F=E(tt.internalFormat,I,U,tt.normalized,tt.colorSpace),Z=n.get(T),D=n.get(tt);if(D.__renderTarget=T,!Z.__hasExternalTextures){const j=Math.max(1,T.width>>vt),J=Math.max(1,T.height>>vt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,vt,F,j,J,T.depth,0,I,U,null):e.texImage2D(ht,vt,F,j,J,0,I,U,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),_t(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,ht,D.__webglTexture,0,Yt(T)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,gt,ht,D.__webglTexture,vt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function we(N,T,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,N),T.depthBuffer){const gt=T.depthTexture,ht=gt&&gt.isDepthTexture?gt.type:null,vt=x(T.stencilBuffer,ht),I=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt(T),vt,T.width,T.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt(T),vt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,vt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,I,i.RENDERBUFFER,N)}else{const gt=T.textures;for(let ht=0;ht<gt.length;ht++){const vt=gt[ht],I=r.convert(vt.format,vt.colorSpace),U=r.convert(vt.type),F=E(vt.internalFormat,I,U,vt.normalized,vt.colorSpace);_t(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt(T),F,T.width,T.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt(T),F,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,F,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(N,T,tt){const gt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ht=n.get(T.depthTexture);ht.__renderTarget=T;const vt=gt?T.depthTexture.image[0]:T.depthTexture.image;(!ht.__webglTexture||vt.width!==T.width||vt.height!==T.height)&&(vt.width=T.width,vt.height=T.height,T.depthTexture.needsUpdate=!0),gt?pt(T.depthTexture,0):at(T.depthTexture,0);const I=ht.__webglTexture,U=Yt(T),F=gt?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,Z=T.depthTexture.format===ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===ti)_t(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,F,I,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,Z,F,I,0);else if(T.depthTexture.format===ei)_t(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,F,I,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,Z,F,I,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ve(N){const T=n.get(N),tt=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const gt=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),gt){const ht=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,gt.removeEventListener("dispose",ht)};gt.addEventListener("dispose",ht),T.__depthDisposeCallback=ht}T.__boundDepthTexture=gt}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(tt)for(let gt=0;gt<6;gt++)he(T.__webglFramebuffer[gt],N,gt);else N.texture.mipmaps.length>0?he(T.__webglFramebuffer[0],N,0):he(T.__webglFramebuffer,N,0);else if(tt){T.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[gt]),T.__webglDepthbuffer[gt]===void 0)T.__webglDepthbuffer[gt]=i.createRenderbuffer(),we(T.__webglDepthbuffer[gt],N,!1);else{const ht=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=T.__webglDepthbuffer[gt];i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,vt)}}else if(N.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),we(T.__webglDepthbuffer,N,!1);else{const ht=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,vt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(N,T,tt){const gt=n.get(N);T!==void 0&&oe(gt.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&ve(N)}function ue(N){const T=N.texture,tt=n.get(N),gt=n.get(T);N.addEventListener("dispose",L),w(N);const ht=N.textures,vt=N.isWebGLCubeRenderTarget===!0,I=ht.length>1;if(I||(gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture()),gt.__version=T.version,o.memory.textures++),vt){tt.__webglFramebuffer=[];for(let U=0;U<6;U++)if(T.mipmaps.length>0){tt.__webglFramebuffer[U]=[];for(let F=0;F<T.mipmaps.length;F++)tt.__webglFramebuffer[U][F]=i.createFramebuffer()}else tt.__webglFramebuffer[U]=i.createFramebuffer()}else{if(T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let U=0;U<T.mipmaps.length;U++)tt.__webglFramebuffer[U]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(I)for(let U=0,F=ht.length;U<F;U++){const Z=n.get(ht[U]);Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&_t(N)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let U=0;U<ht.length;U++){const F=ht[U];tt.__webglColorRenderbuffer[U]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[U]);const Z=r.convert(F.format,F.colorSpace),D=r.convert(F.type),j=E(F.internalFormat,Z,D,F.normalized,F.colorSpace,N.isXRRenderTarget===!0),J=Yt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,j,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.RENDERBUFFER,tt.__webglColorRenderbuffer[U])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),we(tt.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(vt){e.bindTexture(i.TEXTURE_CUBE_MAP,gt.__webglTexture),dt(i.TEXTURE_CUBE_MAP,T);for(let U=0;U<6;U++)if(T.mipmaps.length>0)for(let F=0;F<T.mipmaps.length;F++)oe(tt.__webglFramebuffer[U][F],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+U,F);else oe(tt.__webglFramebuffer[U],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);M(T)?y(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(I){for(let U=0,F=ht.length;U<F;U++){const Z=ht[U],D=n.get(Z);let j=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(j=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,D.__webglTexture),dt(j,Z),oe(tt.__webglFramebuffer,N,Z,i.COLOR_ATTACHMENT0+U,j,0),M(Z)&&y(j)}e.unbindTexture()}else{let U=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(U=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(U,gt.__webglTexture),dt(U,T),T.mipmaps.length>0)for(let F=0;F<T.mipmaps.length;F++)oe(tt.__webglFramebuffer[F],N,T,i.COLOR_ATTACHMENT0,U,F);else oe(tt.__webglFramebuffer,N,T,i.COLOR_ATTACHMENT0,U,0);M(T)?y(U):T.mipmaps.length>0&&i.texParameteri(U,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}N.depthBuffer&&ve(N)}function K(N){const T=N.textures;for(let tt=0,gt=T.length;tt<gt;tt++){const ht=T[tt];if(M(ht)&&ht.mipmapsAutoUpdate===!0){const vt=S(N),I=n.get(ht).__webglTexture;e.bindTexture(vt,I),y(vt),e.unbindTexture()}}}const Lt=[];function Qt(N){if(N.samples>0){if(_t(N)===!1){const T=N.textures,tt=N.width,gt=N.height;let ht=i.COLOR_BUFFER_BIT;const vt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=n.get(N),U=T.length>1;if(U)for(let Z=0;Z<T.length;Z++)e.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,I.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,I.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,I.__webglFramebuffer);for(let Z=0;Z<T.length;Z++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),U){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,I.__webglColorRenderbuffer[Z]);const D=n.get(T[Z]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,tt,gt,0,0,tt,gt,ht,i.NEAREST),l===!0&&(Lt.length=0,Lt.push(i.COLOR_ATTACHMENT0+Z),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&Lt.push(vt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),U)for(let Z=0;Z<T.length;Z++){e.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,I.__webglColorRenderbuffer[Z]);const D=n.get(T[Z]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,I.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){const T=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Yt(N){return Math.min(s.maxSamples,N.samples)}function _t(N){const T=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ye(N){const T=o.render.frame;h.get(N)!==T&&(h.set(N,T),N.update())}function Ot(N,T){const tt=N.colorSpace,gt=N.format,ht=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||tt!==rr&&tt!==Fn&&(ee.getTransfer(tt)===de?(gt!==dn||ht!==je)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",tt)),T}function kt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=ut,this.resetTextureUnits=z,this.getTextureUnits=G,this.setTextureUnits=V,this.setTexture2D=at,this.setTexture2DArray=ct,this.setTexture3D=mt,this.setTextureCube=pt,this.rebindTextures=Oe,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=_t,this.dispose=O}function Sx(i,t){function e(n,s=Fn){let r;const o=ee.getTransfer(s);if(n===je)return i.UNSIGNED_BYTE;if(n===Co)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Po)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yl)return i.BYTE;if(n===$l)return i.SHORT;if(n===us)return i.UNSIGNED_SHORT;if(n===Ro)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===Jl)return i.ALPHA;if(n===Ql)return i.RGB;if(n===dn)return i.RGBA;if(n===ti)return i.DEPTH_COMPONENT;if(n===ei)return i.DEPTH_STENCIL;if(n===Lo)return i.RED;if(n===Do)return i.RED_INTEGER;if(n===ni)return i.RG;if(n===Io)return i.RG_INTEGER;if(n===No)return i.RGBA_INTEGER;if(n===Qs||n===js||n===tr||n===er)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uo||n===Fo||n===Oo||n===zo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Uo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bo||n===ko||n===Go||n===Ho||n===Vo||n===nr||n===Wo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bo||n===ko)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Go)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ho)return r.COMPRESSED_R11_EAC;if(n===Vo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===nr)return r.COMPRESSED_RG11_EAC;if(n===Wo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xo||n===qo||n===Yo||n===$o||n===Ko||n===Zo||n===Jo||n===Qo||n===jo||n===ta||n===ea||n===na||n===ia||n===sa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$o)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ko)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ta)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ea)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===na)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ia)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ra||n===oa||n===aa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ra)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===aa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===la||n===ca||n===ir||n===ha)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===la)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ir)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ha)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const yx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bx=`
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

}`;class Ex{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Uc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xn({vertexShader:yx,fragmentShader:bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wx extends ii{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null;const v=typeof XRWebGLBinding<"u",p=new Ex,g={},_=e.getContextAttributes();let M=null,y=null;const S=[],E=[],x=new Bt;let b=null,w=null;const A=new vn;A.viewport=new Me;const C=new vn;C.viewport=new Me;const L=[A,C],B=new mp;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let at=S[Y];return at===void 0&&(at=new Sa,S[Y]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Y){let at=S[Y];return at===void 0&&(at=new Sa,S[Y]=at),at.getGripSpace()},this.getHand=function(Y){let at=S[Y];return at===void 0&&(at=new Sa,S[Y]=at),at.getHandSpace()};function H(Y){const at=E.indexOf(Y.inputSource);if(at===-1)return;const ct=S[at];ct!==void 0&&(ct.update(Y.inputSource,Y.frame,c||o),ct.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",$);for(let Y=0;Y<S.length;Y++){const at=E[Y];at!==null&&(E[Y]=null,S[Y].disconnect(at))}P=null,O=null,p.reset();for(const Y in g)delete g[Y];if(t.setRenderTarget(M),f=null,u=null,d=null,s=null,y=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),w!==null){const Y=w.camera;Y.fov=w.fov,Y.zoom=w.zoom,Y.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",k),s.addEventListener("inputsourceschange",$),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,mt=null,pt=null;_.depth&&(pt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=_.stencil?ei:ti,mt=_.stencil?Di:wn);const Ct={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ct),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Tn(u.textureWidth,u.textureHeight,{format:dn,type:je,depthTexture:new Yi(u.textureWidth,u.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ct={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Tn(f.framebufferWidth,f.framebufferHeight,{format:dn,type:je,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function $(Y){for(let at=0;at<Y.removed.length;at++){const ct=Y.removed[at],mt=E.indexOf(ct);mt>=0&&(E[mt]=null,S[mt].disconnect(ct))}for(let at=0;at<Y.added.length;at++){const ct=Y.added[at];let mt=E.indexOf(ct);if(mt===-1){for(let Ct=0;Ct<S.length;Ct++)if(Ct>=E.length){E.push(ct),mt=Ct;break}else if(E[Ct]===null){E[Ct]=ct,mt=Ct;break}if(mt===-1)break}const pt=S[mt];pt&&pt.connect(ct)}}function X(Y,at){at===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(at.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let at=Y.near,ct=Y.far;p.texture!==null&&(p.depthNear>0&&(at=p.depthNear),p.depthFar>0&&(ct=p.depthFar)),B.near=C.near=A.near=at,B.far=C.far=A.far=ct,(P!==B.near||O!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),P=B.near,O=B.far),B.layers.mask=Y.layers.mask|6,A.layers.mask=B.layers.mask&-5,C.layers.mask=B.layers.mask&-3;const mt=Y.parent,pt=B.cameras;X(B,mt);for(let Ct=0;Ct<pt.length;Ct++)X(pt[Ct],mt);B.projectionMatrix.copy(A.projectionMatrix),B.projectionMatrixInverse.copy(A.projectionMatrixInverse),w===null&&Y.isPerspectiveCamera&&(w={camera:Y,fov:Y.fov,zoom:Y.zoom}),z(Y,B,mt)};function z(Y,at,ct){ct===null?Y.matrix.copy(at.matrixWorld):(Y.matrix.copy(ct.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(at.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(at.projectionMatrix),Y.projectionMatrixInverse.copy(at.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ms*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(Y){return g[Y]};let G=null;function V(Y,at){if(h=at.getViewerPose(c||o),m=at,h!==null){const ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let mt=!1;ct.length!==B.cameras.length&&(B.cameras.length=0,mt=!0);for(let st=0;st<ct.length;st++){const dt=ct[st];let At=null;if(f!==null)At=f.getViewport(dt);else{const yt=d.getViewSubImage(u,dt);At=yt.viewport,st===0&&(t.setRenderTargetTextures(y,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(y))}let Ft=L[st];Ft===void 0&&(Ft=new vn,Ft.layers.enable(st),Ft.viewport=new Me,L[st]=Ft),Ft.matrix.fromArray(dt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(dt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(At.x,At.y,At.width,At.height),st===0&&(B.matrix.copy(Ft.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),mt===!0&&B.cameras.push(Ft)}const pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const st=d.getDepthInformation(ct[0]);st&&st.isValid&&st.texture&&p.init(st,s.renderState)}if(pt&&pt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let st=0;st<ct.length;st++){const dt=ct[st].camera;if(dt){let At=g[dt];At||(At=new Uc,g[dt]=At);const Ft=d.getCameraImage(dt);At.sourceTexture=Ft}}}}for(let ct=0;ct<S.length;ct++){const mt=E[ct],pt=S[ct];mt!==null&&pt!==void 0&&pt.update(mt,at,c||o)}G&&G(Y,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),m=null}const ut=new rh;ut.setAnimationLoop(V),this.setAnimationLoop=function(Y){G=Y},this.dispose=function(){}}}const Tx=new ie,Fh=new Vt;Fh.set(-1,0,0,0,1,0,0,0,1);function Ax(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Wc(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,_,M,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),v(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,_,M):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ze&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ze&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const _=t.get(g),M=_.envMap,y=_.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(Tx.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Fh),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,_,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=M*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,_){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ze&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const _=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rx(i,t,e,n){let s={},r={};function o(_,M){const y=M.program;n.uniformBlockBinding(_,y,s[_.id])}function a(_,M){let y=s[_.id];y===void 0&&(m(_),y=l(_),s[_.id]=y,_.addEventListener("dispose",p));const S=M.program;n.updateUBOMapping(_,S);const E=t.render.frame;r[_.id]!==E&&(c(_),r[_.id]=E)}function l(_){const M=i.createBuffer(),y=_.__size,S=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,y,S),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(_){const M=s[_.id],y=_.uniforms,S=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,x=y.length;E<x;E++){const b=y[E];if(Array.isArray(b))for(let w=0,A=b.length;w<A;w++)h(b[w],E,w,S);else h(b,E,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,M,y,S){if(u(_,M,y,S)===!0){const E=_.__offset,x=_.value;if(Array.isArray(x)){let b=0;for(let w=0;w<x.length;w++){const A=x[w],C=v(A,!0);d(A,_.__data,b),b+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,_.__data)}}function d(_,M,y){typeof _=="number"||typeof _=="boolean"?M[y]=_:_.isMatrix3?(M[y]=_.elements[0],M[y+1]=_.elements[1],M[y+2]=_.elements[2],M[y+3]=0,M[y+4]=_.elements[3],M[y+5]=_.elements[4],M[y+6]=_.elements[5],M[y+7]=0,M[y+8]=_.elements[6],M[y+9]=_.elements[7],M[y+10]=_.elements[8],M[y+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-y),y):_.toArray(M,y)}function u(_,M,y,S){const E=_.value,x=M+"_"+y;if(Array.isArray(E)){S[x]===void 0&&(S[x]=[]);const b=S[x];let w=!1;for(let A=0;A<E.length;A++)f(E[A],b,A)===!0&&(w=!0);return w}return f(E,S,x)}function f(_,M,y){if(M[y]===void 0)return typeof _=="number"||typeof _=="boolean"?M[y]=_:ArrayBuffer.isView(_)?M[y]=_.slice():M[y]=_.clone(),!0;{const S=M[y];if(typeof _=="number"||typeof _=="boolean"){if(S!==_)return M[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(S.equals(_)===!1)return S.copy(_),!0}}return!1}function m(_){const M=_.uniforms;let y=0;const S=16;for(let x=0,b=M.length;x<b;x++){const w=Array.isArray(M[x])?M[x]:[M[x]];for(let A=0,C=w.length;A<C;A++){const L=w[A],B=Array.isArray(L.value)?L.value:[L.value],P=Array.isArray(M[x])||Array.isArray(L.value);let O=y;for(let k=0,$=B.length;k<$;k++){const X=B[k],z=v(X,P),G=y%S,V=G%z.boundary,ut=G+V;y+=V,ut!==0&&S-ut<z.storage&&(y+=S-ut),k===0&&(O=y),y+=z.storage}const H=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new H((y-O)/Float32Array.BYTES_PER_ELEMENT),L.__offset=O}}const E=y%S;return E>0&&(y+=S-E),_.__size=y,_.__cache={},this}function v(_,M){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=16,y.storage=48):_.isMatrix4?(y.boundary=16,y.storage=64):_.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(_){const M=_.target;M.removeEventListener("dispose",p),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(const _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:g}}const Cx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ln=null;function Px(){return Ln===null&&(Ln=new ys(Cx,16,16,ni,fn),Ln.name="DFG_LUT",Ln.minFilter=We,Ln.magFilter=We,Ln.wrapS=hn,Ln.wrapT=hn,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}class Lx{constructor(t={}){const{canvas:e=Yf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=je}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const v=f,p=new Set([No,Io,Do]),g=new Set([je,wn,us,Di,Co,Po]),_=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let S=null,E=null;const x=[],b=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let C=!1,L=null,B=null,P=null,O=null;this._outputColorSpace=Te;let H=0,k=0,$=null,X=-1,z=null;const G=new Me,V=new Me;let ut=null;const Y=new Rt(0);let at=0,ct=e.width,mt=e.height,pt=1,Ct=null,Kt=null;const st=new Me(0,0,ct,mt),dt=new Me(0,0,ct,mt);let At=!1;const Ft=new ws,yt=new Oa;let ne=!1,Re=!1;const oe=new ie,we=new Q,he=new Me,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function ue(){return $===null?pt:1}let K=n;function Lt(R,W){return e.getContext(R,W)}let Qt,Yt,_t,ye,Ot,kt,N,T,tt,gt,ht,vt,I,U,F,Z,D,j,J,ot,lt,ft,Tt;try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fo}`),e.addEventListener("webglcontextlost",zt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),K===null){const W="webgl2";if(K=Lt(W,R),K===null)throw Lt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(R){throw e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),le("WebGLRenderer: "+R.message),R}function Wt(){Qt=new Nm(K),Qt.init(),lt=new Sx(K,Qt),Yt=new bm(K,Qt,t,lt),_t=new vx(K,Qt),Yt.reversedDepthBuffer&&u&&_t.buffers.depth.setReversed(!0),B=K.createFramebuffer(),P=K.createFramebuffer(),O=K.createFramebuffer(),ye=new Om(K),Ot=new rx,kt=new Mx(K,Qt,_t,Ot,Yt,lt,ye),N=new Im(A),T=new vp(K),ft=new Sm(K,T),tt=new Um(K,T,ye,ft),gt=new Bm(K,tt,T,ft,ye),j=new zm(K,Yt,kt),F=new Em(Ot),ht=new sx(A,N,Qt,Yt,ft,F),vt=new Ax(A,Ot),I=new ax,U=new dx(Qt),D=new Mm(A,N,_t,gt,m,l),Z=new _x(A,gt,Yt),Tt=new Rx(K,ye,Yt,_t),J=new ym(K,Qt,ye),ot=new Fm(K,Qt,ye),ye.programs=ht.programs,A.capabilities=Yt,A.extensions=Qt,A.properties=Ot,A.renderLists=I,A.shadowMap=Z,A.state=_t,A.info=ye}v!==je&&(w=new Gm(v,e.width,e.height,a,s,r));const xt=new wx(A,K);this.xr=xt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const R=Qt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Qt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(R){R!==void 0&&(pt=R,this.setSize(ct,mt,!1))},this.getSize=function(R){return R.set(ct,mt)},this.setSize=function(R,W,rt=!0){if(xt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}ct=R,mt=W,e.width=Math.floor(R*pt),e.height=Math.floor(W*pt),rt===!0&&(e.style.width=R+"px",e.style.height=W+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(ct*pt,mt*pt).floor()},this.setDrawingBufferSize=function(R,W,rt){ct=R,mt=W,pt=rt,e.width=Math.floor(R*rt),e.height=Math.floor(W*rt),this.setViewport(0,0,R,W)},this.setEffects=function(R){if(v===je){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let W=0;W<R.length;W++)if(R[W].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(st)},this.setViewport=function(R,W,rt,et){R.isVector4?st.set(R.x,R.y,R.z,R.w):st.set(R,W,rt,et),_t.viewport(G.copy(st).multiplyScalar(ue()).round())},this.getScissor=function(R){return R.copy(dt)},this.setScissor=function(R,W,rt,et){R.isVector4?dt.set(R.x,R.y,R.z,R.w):dt.set(R,W,rt,et),_t.scissor(V.copy(dt).multiplyScalar(ue()).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(R){_t.setScissorTest(At=R)},this.setOpaqueSort=function(R){Ct=R},this.setTransparentSort=function(R){Kt=R},this.getClearColor=function(R){return R.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,rt=!0){let et=0;if(R){let nt=!1;if($!==null){const St=$.texture.format;nt=p.has(St)}if(nt){const St=$.texture.type,Pt=g.has(St),Mt=D.getClearColor(),wt=D.getClearAlpha(),Ut=Mt.r,qt=Mt.g,jt=Mt.b;Pt?(_[0]=Ut,_[1]=qt,_[2]=jt,_[3]=wt,K.clearBufferuiv(K.COLOR,0,_)):(M[0]=Ut,M[1]=qt,M[2]=jt,M[3]=wt,K.clearBufferiv(K.COLOR,0,M))}else et|=K.COLOR_BUFFER_BIT}W&&(et|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(et|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&K.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),L=R},this.dispose=function(){e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),D.dispose(),I.dispose(),U.dispose(),kt.dispose(),Ot.dispose(),N.dispose(),gt.dispose(),tt.dispose(),ft.dispose(),Tt.dispose(),ht.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",ef),xt.removeEventListener("sessionend",nf),wi.stop()};function zt(R){R.preventDefault(),sc("WebGLRenderer: Context Lost."),C=!0}function Xt(){sc("WebGLRenderer: Context Restored."),C=!1;const R=ye.autoReset,W=Z.enabled,rt=Z.autoUpdate,et=Z.needsUpdate,nt=Z.type;Wt(),ye.autoReset=R,Z.enabled=W,Z.autoUpdate=rt,Z.needsUpdate=et,Z.type=nt}function Et(R){le("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){const W=R.target;W.removeEventListener("dispose",pe),Be(W)}function Be(R){fi(R),Ot.remove(R)}function fi(R){const W=Ot.get(R).programs;W!==void 0&&(W.forEach(function(rt){ht.releaseProgram(rt)}),R.isShaderMaterial&&ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,rt,et,nt,St){W===null&&(W=ve);const Pt=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,Mt=h1(R,W,rt,et,nt);_t.setMaterial(et,Pt);let wt=rt.index,Ut=1;if(et.wireframe===!0){if(wt=tt.getWireframeAttribute(rt),wt===void 0)return;Ut=2}const qt=rt.drawRange,jt=rt.attributes.position;let Dt=qt.start*Ut,te=(qt.start+qt.count)*Ut;St!==null&&(Dt=Math.max(Dt,St.start*Ut),te=Math.min(te,(St.start+St.count)*Ut)),wt!==null?(Dt=Math.max(Dt,0),te=Math.min(te,wt.count)):jt!=null&&(Dt=Math.max(Dt,0),te=Math.min(te,jt.count));const Le=te-Dt;if(Le<0||Le===1/0)return;ft.setup(nt,et,Mt,rt,wt);let xe,me=J;if(wt!==null&&(xe=T.get(wt),me=ot,me.setIndex(xe)),nt.isMesh)et.wireframe===!0?(_t.setLineWidth(et.wireframeLinewidth*ue()),me.setMode(K.LINES)):me.setMode(K.TRIANGLES);else if(nt.isLine){let $e=et.linewidth;$e===void 0&&($e=1),_t.setLineWidth($e*ue()),nt.isLineSegments?me.setMode(K.LINES):nt.isLineLoop?me.setMode(K.LINE_LOOP):me.setMode(K.LINE_STRIP)}else nt.isPoints?me.setMode(K.POINTS):nt.isSprite&&me.setMode(K.TRIANGLES);if(nt.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))me.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const $e=nt._multiDrawStarts,It=nt._multiDrawCounts,Qe=nt._multiDrawCount,fe=wt?T.get(wt).bytesPerElement:1,Ti=Ot.get(et).currentProgram.getUniforms();for(let Ke=0;Ke<Qe;Ke++)Ti.setValue(K,"_gl_DrawID",Ke),me.render($e[Ke]/fe,It[Ke])}else if(nt.isInstancedMesh)me.renderInstances(Dt,Le,nt.count);else if(rt.isInstancedBufferGeometry){const $e=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,It=Math.min(rt.instanceCount,$e);me.renderInstances(Dt,Le,It)}else me.render(Dt,Le)};function tf(R,W,rt,et){L!==null&&R.isNodeMaterial&&L.setObject(et,R),ne===!0&&F.setState(R,rt,!1),R.transparent===!0&&R.side===Ee&&R.forceSinglePass===!1?(R.side=Ze,R.needsUpdate=!0,Ks(R,W,et),R.side=jn,R.needsUpdate=!0,Ks(R,W,et),R.side=Ee):Ks(R,W,et)}this.compile=function(R,W,rt=null){rt===null&&(rt=R),L!==null&&L.renderStart(R,W,rt),E=U.get(rt),E.init(W),b.push(E),rt.traverseVisible(function(nt){nt.isLight&&nt.layers.test(W.layers)&&(E.pushLight(nt),nt.castShadow&&E.pushShadow(nt))}),R!==rt&&R.traverseVisible(function(nt){nt.isLight&&nt.layers.test(W.layers)&&(E.pushLight(nt),nt.castShadow&&E.pushShadow(nt))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),Re=this.localClippingEnabled,ne=F.init(this.clippingPlanes,Re),ne===!0&&F.setGlobalState(this.clippingPlanes,W),L!==null&&Z.render(E.state.shadowsArray,rt,W);const et=new Set;return R.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const St=nt.material;if(St)if(Array.isArray(St))for(let Pt=0;Pt<St.length;Pt++){const Mt=St[Pt];tf(Mt,rt,W,nt),et.add(Mt)}else tf(St,rt,W,nt),et.add(St)}),E=b.pop(),L!==null&&L.renderEnd(),et},this.compileAsync=function(R,W,rt=null){const et=this.compile(R,W,rt);return new Promise(nt=>{function St(){if(et.forEach(function(Pt){const wt=Ot.get(Pt).currentProgram;(wt===void 0||wt.isReady())&&et.delete(Pt)}),et.size===0){nt(R);return}setTimeout(St,10)}Qt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Il=null;function l1(R){Il&&Il(R)}function ef(){wi.stop()}function nf(){wi.start()}const wi=new rh;wi.setAnimationLoop(l1),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(R){Il=R,xt.setAnimationLoop(R),R===null?wi.stop():wi.start()},xt.addEventListener("sessionstart",ef),xt.addEventListener("sessionend",nf),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L!==null&&L.renderStart(R,W);const rt=xt.enabled===!0&&xt.isPresenting===!0,et=w!==null&&($===null||rt)&&w.begin(A,$);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(W),W=xt.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,W,$),E=U.get(R,b.length),E.init(W),E.state.textureUnits=kt.getTextureUnits(),b.push(E),oe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?yt.setFromArrayCamera(W):Ft.setFromProjectionMatrix(oe,pn,W.reversedDepth),Re=this.localClippingEnabled,ne=F.init(this.clippingPlanes,Re),S=I.get(R,x.length),S.init(),x.push(S),this.info.render.frame++,xt.enabled===!0&&xt.isPresenting===!0){const Pt=A.xr.getDepthSensingMesh();Pt!==null&&Nl(Pt,W,-1/0,A.sortObjects)}Nl(R,W,0,A.sortObjects),S.finish(),L!==null&&L.updateLights(E.state.lightsArray),A.sortObjects===!0&&S.sort(Ct,Kt),Oe=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,Oe&&D.addToRenderList(S,R),this.info.autoReset===!0&&this.info.reset(),ne===!0&&F.beginShadows();const nt=E.state.shadowsArray;if(Z.render(nt,R,W),ne===!0&&F.endShadows(),(et&&w.hasRenderPass())===!1){const Pt=S.opaque,Mt=S.transmissive;if(E.setupLights(),W.isArrayCamera){const wt=W.cameras;if(Mt.length>0)for(let Ut=0,qt=wt.length;Ut<qt;Ut++){const jt=wt[Ut];rf(Pt,Mt,R,jt)}Oe&&D.render(R);for(let Ut=0,qt=wt.length;Ut<qt;Ut++){const jt=wt[Ut];sf(S,R,jt,jt.viewport)}}else Mt.length>0&&rf(Pt,Mt,R,W),Oe&&D.render(R),sf(S,R,W)}$!==null&&k===0&&(kt.updateMultisampleRenderTarget($),kt.updateRenderTargetMipmap($)),et&&w.end(A),R.isScene===!0&&R.onAfterRender(A,R,W),ft.resetDefaultState(),X=-1,z=null,b.pop(),b.length>0?(E=b[b.length-1],kt.setTextureUnits(E.state.textureUnits),ne===!0&&F.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?S=x[x.length-1]:S=null,L!==null&&L.renderEnd()};function Nl(R,W,rt,et){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)E.pushLight(R),R.castShadow&&E.pushShadow(R);else if(R.isSprite){const Pt=W.isArrayCamera?yt:Ft;if(!R.frustumCulled||R.intersectsFrustum(Pt)){et&&he.setFromMatrixPosition(R.matrixWorld).applyMatrix4(oe);const Mt=gt.update(R),wt=R.material;wt.visible&&S.push(R,Mt,wt,rt,he.z,null,W)}}else if(R.isMesh||R.isLine||R.isPoints){const Pt=W.isArrayCamera?yt:Ft;if(!R.frustumCulled||R.intersectsFrustum(Pt)){const Mt=gt.update(R),wt=R.material;if(et&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),he.copy(R.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),he.copy(Mt.boundingSphere.center)),he.applyMatrix4(R.matrixWorld).applyMatrix4(oe)),Array.isArray(wt)){const Ut=Mt.groups;for(let qt=0,jt=Ut.length;qt<jt;qt++){const Dt=Ut[qt],te=wt[Dt.materialIndex];te&&te.visible&&S.push(R,Mt,te,rt,he.z,Dt,W)}}else wt.visible&&S.push(R,Mt,wt,rt,he.z,null,W)}}}const St=R.children;for(let Pt=0,Mt=St.length;Pt<Mt;Pt++)Nl(St[Pt],W,rt,et)}function sf(R,W,rt,et){const{opaque:nt,transmissive:St,transparent:Pt}=R;E.setupLightsView(rt),ne===!0&&F.setGlobalState(A.clippingPlanes,rt),et&&_t.viewport(G.copy(et)),nt.length>0&&ho(nt,W,rt),St.length>0&&ho(St,W,rt),Pt.length>0&&ho(Pt,W,rt),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function rf(R,W,rt,et){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[et.id]===void 0){const Dt=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[et.id]=new Tn(1,1,{generateMipmaps:!0,type:Dt?fn:je,minFilter:En,samples:Math.max(4,Yt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}const St=E.state.transmissionRenderTarget[et.id],Pt=et.viewport||G;St.setSize(Pt.z*A.transmissionResolutionScale,Pt.w*A.transmissionResolutionScale);const Mt=A.getRenderTarget(),wt=A.getActiveCubeFace(),Ut=A.getActiveMipmapLevel();A.setRenderTarget(St),A.getClearColor(Y),at=A.getClearAlpha(),at<1&&A.setClearColor(16777215,.5),A.clear(),Oe&&D.render(rt);const qt=A.toneMapping;A.toneMapping=Un;const jt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),E.setupLightsView(et),ne===!0&&F.setGlobalState(A.clippingPlanes,et),ho(R,rt,et),kt.updateMultisampleRenderTarget(St),kt.updateRenderTargetMipmap(St),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let te=0,Le=W.length;te<Le;te++){const xe=W[te],{object:me,geometry:$e,material:It,group:Qe}=xe;if(It.side===Ee&&me.layers.test(et.layers)){const fe=It.side;It.side=Ze,It.needsUpdate=!0,of(me,rt,et,$e,It,Qe),It.side=fe,It.needsUpdate=!0,Dt=!0}}Dt===!0&&(kt.updateMultisampleRenderTarget(St),kt.updateRenderTargetMipmap(St))}A.setRenderTarget(Mt,wt,Ut),A.setClearColor(Y,at),jt!==void 0&&(et.viewport=jt),A.toneMapping=qt}function ho(R,W,rt){const et=W.isScene===!0?W.overrideMaterial:null;for(let nt=0,St=R.length;nt<St;nt++){const Pt=R[nt],{object:Mt,geometry:wt,group:Ut}=Pt;let qt=Pt.material;qt.allowOverride===!0&&et!==null&&(qt=et),Mt.layers.test(rt.layers)&&of(Mt,W,rt,wt,qt,Ut)}}function of(R,W,rt,et,nt,St){L!==null&&nt.isNodeMaterial&&L.setObject(R,nt),R.onBeforeRender(A,W,rt,et,nt,St),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),nt.onBeforeRender(A,W,rt,et,R,St),nt.transparent===!0&&nt.side===Ee&&nt.forceSinglePass===!1?(nt.side=Ze,nt.needsUpdate=!0,A.renderBufferDirect(rt,W,et,nt,R,St),nt.side=jn,nt.needsUpdate=!0,A.renderBufferDirect(rt,W,et,nt,R,St),nt.side=Ee):A.renderBufferDirect(rt,W,et,nt,R,St),R.onAfterRender(A,W,rt,et,nt,St)}function af(R){let W=0;for(const rt of R)rt.texture!==null&&W++;return W}function Ks(R,W,rt){W.isScene!==!0&&(W=ve);const et=Ot.get(R),nt=E.state.lights,St=E.state.shadowsArray,Pt=nt.state.version,Mt=ht.getParameters(R,nt.state,St,W,rt,E.state.lightProbeGridArray),wt=ht.getProgramCacheKey(Mt);let Ut=et.programs;et.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?W.environment:null,et.fog=W.fog;const qt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;et.envMap=N.get(R.envMap||et.environment,qt),et.envMapRotation=et.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Ut===void 0&&(R.addEventListener("dispose",pe),Ut=new Map,et.programs=Ut,et.programVariants=new Map);let jt=Ut.get(wt);if(jt!==void 0){if(et.currentProgram===jt&&et.lightsStateVersion===Pt)return cf(R,Mt),jt}else Mt.uniforms=ht.getUniforms(R),L!==null&&R.isNodeMaterial&&L.build(R,rt,Mt),R.onBeforeCompile(Mt,A),jt=ht.acquireProgram(Mt,wt),Ut.set(wt,jt),et.uniforms=Mt.uniforms;const Dt=et.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Dt.clippingPlanes=F.uniform),cf(R,Mt),et.needsLights=f1(R),et.lightsStateVersion=Pt,et.needsLights&&(Dt.ambientLightColor.value=nt.state.ambient,Dt.lightProbe.value=nt.state.probe,Dt.sunLights.value=nt.state.sun,Dt.sunLightShadows.value=nt.state.sunShadow,Dt.directionalLights.value=nt.state.directional,Dt.directionalLightShadows.value=nt.state.directionalShadow,Dt.spotLights.value=nt.state.spot,Dt.spotLightShadows.value=nt.state.spotShadow,Dt.rectAreaLights.value=nt.state.rectArea,Dt.ltc_1.value=nt.state.rectAreaLTC1,Dt.ltc_2.value=nt.state.rectAreaLTC2,Dt.pointLights.value=nt.state.point,Dt.pointLightShadows.value=nt.state.pointShadow,Dt.hemisphereLights.value=nt.state.hemi,Dt.sunShadowMatrix.value=nt.state.sunShadowMatrix,Dt.sunShadowCascade.value=nt.state.sunShadowCascade,Dt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Dt.spotLightMatrix.value=nt.state.spotLightMatrix,Dt.spotLightMap.value=nt.state.spotLightMap,Dt.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.numLightProbeGrids=af(E.state.lightProbeGridArray),et.currentProgram=jt,et.uniformsList=null,jt}function c1(R,W,rt,et,nt){const St=Ot.get(R),Pt=St.currentProgram.id+","+et+","+nt;let Mt=St.programVariants.get(Pt);return Mt===void 0?(Mt=Ks(R,W,rt),St.programVariants.set(Pt,Mt)):(St.currentProgram=Mt,St.uniformsList=null,St.outputColorSpace=et,St.toneMapping=nt),Mt}function lf(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Or.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function cf(R,W){const rt=Ot.get(R);rt.outputColorSpace=W.outputColorSpace,rt.batching=W.batching,rt.batchingColor=W.batchingColor,rt.instancing=W.instancing,rt.instancingColor=W.instancingColor,rt.instancingMorph=W.instancingMorph,rt.skinning=W.skinning,rt.morphTargets=W.morphTargets,rt.morphNormals=W.morphNormals,rt.morphColors=W.morphColors,rt.morphTargetsCount=W.morphTargetsCount,rt.numClippingPlanes=W.numClippingPlanes,rt.numIntersection=W.numClipIntersection,rt.vertexAlphas=W.vertexAlphas,rt.vertexTangents=W.vertexTangents,rt.toneMapping=W.toneMapping}function h1(R,W,rt,et,nt){W.isScene!==!0&&(W=ve),kt.resetTextureUnits();const St=W.fog,Pt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?W.environment:null,Mt=$===null?A.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ee.workingColorSpace,wt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Ut=N.get(et.envMap||Pt,wt),qt=et.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,jt=!!rt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Dt=!!rt.morphAttributes.position,te=!!rt.morphAttributes.normal,Le=!!rt.morphAttributes.color;let xe=Un;et.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(xe=A.toneMapping);const me=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,$e=me!==void 0?me.length:0,It=Ot.get(et),Qe=E.state.lights;if(ne===!0&&(Re===!0||R!==z)){const be=R===z&&et.id===X;F.setState(et,R,be)}let fe=!1,Ti=!1;et.version===It.__version?It.needsLights&&It.lightsStateVersion!==Qe.state.version||nt.isBatchedMesh&&It.batching===!1||!nt.isBatchedMesh&&It.batching===!0||nt.isBatchedMesh&&It.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&It.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&It.instancing===!1||!nt.isInstancedMesh&&It.instancing===!0||nt.isSkinnedMesh&&It.skinning===!1||!nt.isSkinnedMesh&&It.skinning===!0||nt.isInstancedMesh&&It.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&It.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&It.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&It.instancingMorph===!1&&nt.morphTexture!==null||It.envMap!==Ut||et.fog===!0&&It.fog!==St||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==F.numPlanes||It.numIntersection!==F.numIntersection)||It.vertexAlphas!==qt||It.vertexTangents!==jt||It.morphTargets!==Dt||It.morphNormals!==te||It.morphColors!==Le||It.morphTargetsCount!==$e||It.numLightProbeGrids!==af(E.state.lightProbeGridArray)?fe=!0:(It.outputColorSpace!==Mt||It.toneMapping!==xe)&&(Ti=!0):(fe=!0,It.__version=et.version);let Ke=It.currentProgram;(fe===!0||Ti===!0)&&(Ke=Ti===!0?c1(et,W,nt,Mt,xe):Ks(et,W,nt),L&&et.isNodeMaterial&&L.onUpdateProgram(et,Ke,It));let uo=!1,di=!1,Ai=!1;const ae=Ke.getUniforms(),Ve=It.uniforms;if(_t.useProgram(Ke.program)&&(uo=!0,di=!0,Ai=!0),et.id!==X&&(X=et.id,di=!0),uo||z!==R){_t.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ae.setValue(K,"projectionMatrix",R.projectionMatrix),ae.setValue(K,"viewMatrix",R.matrixWorldInverse);const ke=ae.map.cameraPosition;ke!==void 0&&ke.setValue(K,we.setFromMatrixPosition(R.matrixWorld)),Yt.logarithmicDepthBuffer&&ae.setValue(K,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&ae.setValue(K,"isOrthographic",R.isOrthographicCamera===!0),z!==R&&(z=R,di=!0,Ai=!0)}if(It.needsLights&&(Qe.state.sunShadowMap.length>0&&ae.setValue(K,"sunShadowMap",Qe.state.sunShadowMap,kt),Qe.state.directionalShadowMap.length>0&&ae.setValue(K,"directionalShadowMap",Qe.state.directionalShadowMap,kt),Qe.state.spotShadowMap.length>0&&ae.setValue(K,"spotShadowMap",Qe.state.spotShadowMap,kt),Qe.state.pointShadowMap.length>0&&ae.setValue(K,"pointShadowMap",Qe.state.pointShadowMap,kt)),nt.isSkinnedMesh){ae.setOptional(K,nt,"bindMatrix"),ae.setOptional(K,nt,"bindMatrixInverse");const be=nt.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ae.setValue(K,"boneTexture",be.boneTexture,kt))}nt.isBatchedMesh&&(ae.setOptional(K,nt,"batchingTexture"),ae.setValue(K,"batchingTexture",nt._matricesTexture,kt),ae.setOptional(K,nt,"batchingIdTexture"),ae.setValue(K,"batchingIdTexture",nt._indirectTexture,kt),ae.setOptional(K,nt,"batchingColorTexture"),nt._colorsTexture!==null&&ae.setValue(K,"batchingColorTexture",nt._colorsTexture,kt));const yn=rt.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&j.update(nt,rt,Ke),(di||It.receiveShadow!==nt.receiveShadow)&&(It.receiveShadow=nt.receiveShadow,ae.setValue(K,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&W.environment!==null&&(Ve.envMapIntensity.value=W.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=Px()),di){if(ae.setValue(K,"toneMappingExposure",A.toneMappingExposure),It.needsLights&&u1(Ve,Ai),St&&et.fog===!0&&vt.refreshFogUniforms(Ve,St),vt.refreshMaterialUniforms(Ve,et,pt,mt,E.state.transmissionRenderTarget[R.id]),It.needsLights&&It.numLightProbeGrids>0){const be=y;let ke=0;for(const Jn of E.state.lightProbeGridArray)Jn.texture!==null&&(be.textures[ke]=Jn.texture,be.min[ke]=Jn.boundingBox.min,be.max[ke]=Jn.boundingBox.max,be.resolution[ke]=Jn.resolution,ke++);for(const Jn in be)be[Jn].length=ke;Ve.probesSH.value=be.textures,Ve.probesMin.value=be.min,Ve.probesMax.value=be.max,Ve.probesResolution.value=be.resolution}Or.upload(K,lf(It),Ve,kt)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Or.upload(K,lf(It),Ve,kt),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&ae.setValue(K,"center",nt.center),ae.setValue(K,"modelViewMatrix",nt.modelViewMatrix),ae.setValue(K,"normalMatrix",nt.normalMatrix),ae.setValue(K,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){const be=et.uniformsGroups;for(let ke=0,Jn=be.length;ke<Jn;ke++){const uf=be[ke];Tt.update(uf,Ke),Tt.bind(uf,Ke)}}return Ke}function u1(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.sunLights.needsUpdate=W,R.sunLightShadows.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function f1(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(R,W,rt){const et=Ot.get(R);et.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),Ot.get(R.texture).__webglTexture=W,Ot.get(R.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:rt,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const rt=Ot.get(R);rt.__webglFramebuffer=W,rt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,rt=0){$=R,H=W,k=rt;let et=null,nt=!1,St=!1;if(R){const Mt=Ot.get(R);if(Mt.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(K.FRAMEBUFFER,Mt.__webglFramebuffer),G.copy(R.viewport),V.copy(R.scissor),ut=R.scissorTest,_t.viewport(G),_t.scissor(V),_t.setScissorTest(ut),X=-1;return}else if(Mt.__webglFramebuffer===void 0)kt.setupRenderTarget(R);else if(Mt.__hasExternalTextures)kt.rebindTextures(R,Ot.get(R.texture).__webglTexture,Ot.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qt=R.depthTexture;if(Mt.__boundDepthTexture!==qt){if(qt!==null&&Ot.has(qt)&&(R.width!==qt.image.width||R.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(R)}}const wt=R.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(St=!0);const Ut=Ot.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ut[W])?et=Ut[W][rt]:et=Ut[W],nt=!0):R.samples>0&&kt.useMultisampledRTT(R)===!1?et=Ot.get(R).__webglMultisampledFramebuffer:Array.isArray(Ut)?et=Ut[rt]:et=Ut,G.copy(R.viewport),V.copy(R.scissor),ut=R.scissorTest}else G.copy(st).multiplyScalar(pt).floor(),V.copy(dt).multiplyScalar(pt).floor(),ut=At;if(rt!==0&&(et=B),_t.bindFramebuffer(K.FRAMEBUFFER,et)&&_t.drawBuffers(R,et),_t.viewport(G),_t.scissor(V),_t.setScissorTest(ut),nt){const Mt=Ot.get(R.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+W,Mt.__webglTexture,rt)}else if(St){const Mt=W;for(let wt=0;wt<R.textures.length;wt++){const Ut=Ot.get(R.textures[wt]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+wt,Ut.__webglTexture,rt,Mt)}}else if(R!==null&&rt!==0){const Mt=Ot.get(R.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Mt.__webglTexture,rt)}X=-1};function hf(R){const W=Ot.get(R);return(W.__readFormat!==R.format||W.__readType!==R.type)&&(W.__readFormat=R.format,W.__readType=R.type,W.__formatReadable=Yt.textureFormatReadable(R.format),W.__typeReadable=Yt.textureTypeReadable(R.type)),W}this.readRenderTargetPixels=function(R,W,rt,et,nt,St,Pt,Mt=0){if(!(R&&R.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ot.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt],Array.isArray(wt)&&(wt=wt[0])),wt){_t.bindFramebuffer(K.FRAMEBUFFER,wt);try{const Ut=R.textures[Mt],qt=Ut.format,jt=Ut.type;R.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Mt);const Dt=hf(Ut);if(Dt.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-et&&rt>=0&&rt<=R.height-nt&&K.readPixels(W,rt,et,nt,lt.convert(qt),lt.convert(jt),St)}finally{const Ut=$!==null?Ot.get($).__webglFramebuffer:null;_t.bindFramebuffer(K.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(R,W,rt,et,nt,St,Pt,Mt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ot.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt],Array.isArray(wt)&&(wt=wt[0])),wt)if(W>=0&&W<=R.width-et&&rt>=0&&rt<=R.height-nt){_t.bindFramebuffer(K.FRAMEBUFFER,wt);const Ut=R.textures[Mt],qt=Ut.format,jt=Ut.type;R.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Mt);const Dt=hf(Ut);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,te),K.bufferData(K.PIXEL_PACK_BUFFER,St.byteLength,K.STREAM_READ),K.readPixels(W,rt,et,nt,lt.convert(qt),lt.convert(jt),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const Le=$!==null?Ot.get($).__webglFramebuffer:null;_t.bindFramebuffer(K.FRAMEBUFFER,Le);const xe=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await $f(K,xe,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,te),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,St),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(te),K.deleteSync(xe),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,rt=0){const et=Math.pow(2,-rt),nt=Math.floor(R.image.width*et),St=Math.floor(R.image.height*et),Pt=W!==null?W.x:0,Mt=W!==null?W.y:0;kt.setTexture2D(R,0),K.copyTexSubImage2D(K.TEXTURE_2D,rt,0,0,Pt,Mt,nt,St),_t.unbindTexture()},this.copyTextureToTexture=function(R,W,rt=null,et=null,nt=0,St=0){let Pt,Mt,wt,Ut,qt,jt,Dt,te,Le;const xe=R.isCompressedTexture?R.mipmaps[St]:R.image;if(rt!==null)Pt=rt.max.x-rt.min.x,Mt=rt.max.y-rt.min.y,wt=rt.isBox3?rt.max.z-rt.min.z:1,Ut=rt.min.x,qt=rt.min.y,jt=rt.isBox3?rt.min.z:0;else{const ae=Math.pow(2,-nt);Pt=Math.floor(xe.width*ae),Mt=Math.floor(xe.height*ae),R.isDataArrayTexture?wt=xe.depth:R.isData3DTexture?wt=Math.floor(xe.depth*ae):wt=1,Ut=0,qt=0,jt=0}et!==null?(Dt=et.x,te=et.y,Le=et.z):(Dt=0,te=0,Le=0);const me=lt.convert(W.format),$e=lt.convert(W.type);let It;W.isData3DTexture?(kt.setTexture3D(W,0),It=K.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(kt.setTexture2DArray(W,0),It=K.TEXTURE_2D_ARRAY):(kt.setTexture2D(W,0),It=K.TEXTURE_2D),_t.activeTexture(K.TEXTURE0),_t.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,W.flipY),_t.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),_t.pixelStorei(K.UNPACK_ALIGNMENT,W.unpackAlignment);const Qe=_t.getParameter(K.UNPACK_ROW_LENGTH),fe=_t.getParameter(K.UNPACK_IMAGE_HEIGHT),Ti=_t.getParameter(K.UNPACK_SKIP_PIXELS),Ke=_t.getParameter(K.UNPACK_SKIP_ROWS),uo=_t.getParameter(K.UNPACK_SKIP_IMAGES);_t.pixelStorei(K.UNPACK_ROW_LENGTH,xe.width),_t.pixelStorei(K.UNPACK_IMAGE_HEIGHT,xe.height),_t.pixelStorei(K.UNPACK_SKIP_PIXELS,Ut),_t.pixelStorei(K.UNPACK_SKIP_ROWS,qt),_t.pixelStorei(K.UNPACK_SKIP_IMAGES,jt);const di=R.isDataArrayTexture||R.isData3DTexture,Ai=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const ae=Ot.get(R),Ve=Ot.get(W),yn=Ot.get(ae.__renderTarget),be=Ot.get(Ve.__renderTarget);_t.bindFramebuffer(K.READ_FRAMEBUFFER,yn.__webglFramebuffer),_t.bindFramebuffer(K.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ke=0;ke<wt;ke++)di&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ot.get(R).__webglTexture,nt,jt+ke),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ot.get(W).__webglTexture,St,Le+ke)),K.blitFramebuffer(Ut,qt,Ut+Pt,qt+Mt,Dt,te,Dt+Pt,te+Mt,K.DEPTH_BUFFER_BIT,K.NEAREST);_t.bindFramebuffer(K.READ_FRAMEBUFFER,null),_t.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(nt!==0||R.isRenderTargetTexture||Ot.has(R)){const ae=Ot.get(R),Ve=Ot.get(W);_t.bindFramebuffer(K.READ_FRAMEBUFFER,P),_t.bindFramebuffer(K.DRAW_FRAMEBUFFER,O);for(let yn=0;yn<wt;yn++)di?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ae.__webglTexture,nt,jt+yn):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ae.__webglTexture,nt),Ai?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ve.__webglTexture,St,Le+yn):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Ve.__webglTexture,St),nt!==0?K.blitFramebuffer(Ut,qt,Ut+Pt,qt+Mt,Dt,te,Dt+Pt,te+Mt,K.COLOR_BUFFER_BIT,K.NEAREST):Ai?K.copyTexSubImage3D(It,St,Dt,te,Le+yn,Ut,qt,Pt,Mt):K.copyTexSubImage2D(It,St,Dt,te,Ut,qt,Pt,Mt);_t.bindFramebuffer(K.READ_FRAMEBUFFER,null),_t.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Ai?R.isDataTexture||R.isData3DTexture?K.texSubImage3D(It,St,Dt,te,Le,Pt,Mt,wt,me,$e,xe.data):W.isCompressedArrayTexture?K.compressedTexSubImage3D(It,St,Dt,te,Le,Pt,Mt,wt,me,xe.data):K.texSubImage3D(It,St,Dt,te,Le,Pt,Mt,wt,me,$e,xe):R.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,St,Dt,te,Pt,Mt,me,$e,xe.data):R.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,St,Dt,te,xe.width,xe.height,me,xe.data):K.texSubImage2D(K.TEXTURE_2D,St,Dt,te,Pt,Mt,me,$e,xe);_t.pixelStorei(K.UNPACK_ROW_LENGTH,Qe),_t.pixelStorei(K.UNPACK_IMAGE_HEIGHT,fe),_t.pixelStorei(K.UNPACK_SKIP_PIXELS,Ti),_t.pixelStorei(K.UNPACK_SKIP_ROWS,Ke),_t.pixelStorei(K.UNPACK_SKIP_IMAGES,uo),St===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&K.generateMipmap(It),_t.unbindTexture()},this.initRenderTarget=function(R){Ot.get(R).__webglFramebuffer===void 0&&kt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?kt.setTextureCube(R,0):R.isData3DTexture?kt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?kt.setTexture2DArray(R,0):kt.setTexture2D(R,0),_t.unbindTexture()},this.resetState=function(){H=0,k=0,$=null,_t.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const Br=new Rt;function q(i){return Br.set(i),[Br.r,Br.g,Br.b]}function Nt(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function ts(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function Dn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class se{constructor(){it(this,"pos",[]);it(this,"nor",[]);it(this,"col",[]);it(this,"glo",[]);it(this,"ox",0);it(this,"oy",0);it(this,"oz",0);it(this,"c",1);it(this,"s",0)}get vertexCount(){return this.pos.length/3}frame(t=0,e=0,n=0,s=0){return this.ox=t,this.oy=e,this.oz=n,this.c=Math.cos(s),this.s=Math.sin(s),this}wx(t,e){return this.ox+t*this.c+e*this.s}wz(t,e){return this.oz-t*this.s+e*this.c}tri(t,e,n,s,r,o,a,l,c,h,d=0){const u=this.wx(t,n),f=this.wz(t,n),m=this.oy+e,v=this.wx(s,o),p=this.wz(s,o),g=this.oy+r,_=this.wx(a,c),M=this.wz(a,c),y=this.oy+l,S=v-u,E=g-m,x=p-f,b=_-u,w=y-m,A=M-f;let C=E*A-x*w,L=x*b-S*A,B=S*w-E*b;const P=Math.hypot(C,L,B)||1;C/=P,L/=P,B/=P,this.pos.push(u,m,f,v,g,p,_,y,M),this.nor.push(C,L,B,C,L,B,C,L,B),this.col.push(h[0],h[1],h[2],h[0],h[1],h[2],h[0],h[1],h[2]),this.glo.push(d,d,d)}quad(t,e,n,s,r,o,a,l,c,h,d,u,f,m=0){this.tri(t,e,n,s,r,o,a,l,c,f,m),this.tri(t,e,n,a,l,c,h,d,u,f,m)}box(t,e,n,s,r,o,a,l=void 0,c=null,h=0){this.quad(t,e,o,s,e,o,s,r,o,t,r,o,a,h),this.quad(s,e,n,t,e,n,t,r,n,s,r,n,a,h),this.quad(s,e,o,s,e,n,s,r,n,s,r,o,a,h),this.quad(t,e,n,t,e,o,t,r,o,t,r,n,a,h),l!==null&&this.quad(t,r,o,s,r,o,s,r,n,t,r,n,l??a,h),c&&this.quad(t,e,n,s,e,n,s,e,o,t,e,o,c,h)}cyl(t,e,n,s,r,o,a,l,c=null,h=0){const d=e+o;for(let u=0;u<a;u++){const f=u/a*Math.PI*2,m=(u+1)/a*Math.PI*2,v=Math.cos(f),p=Math.sin(f),g=Math.cos(m),_=Math.sin(m);r>1e-4?(this.quad(t+v*s,e,n+p*s,t+v*r,d,n+p*r,t+g*r,d,n+_*r,t+g*s,e,n+_*s,l,h),c&&this.tri(t,d,n,t+g*r,d,n+_*r,t+v*r,d,n+p*r,c,h)):this.tri(t+v*s,e,n+p*s,t,d,n,t+g*s,e,n+_*s,l,h)}}blob(t,e,n,s,r,o,a,l,c,h,d=0){const u=h??c;for(let f=0;f<l;f++){const m=f/l*Math.PI,v=(f+1)/l*Math.PI,p=Math.cos(m),g=Math.cos(v),_=Math.sin(m),M=Math.sin(v),y=ts(c,u,1-(f+.5)/l);for(let S=0;S<a;S++){const E=S/a*Math.PI*2,x=(S+1)/a*Math.PI*2,b=Math.cos(E),w=Math.sin(E),A=Math.cos(x),C=Math.sin(x),L=t+b*_*s,B=e+p*r,P=n+w*_*o,O=t+A*_*s,H=n+C*_*o,k=t+b*M*s,$=e+g*r,X=n+w*M*o,z=t+A*M*s,G=n+C*M*o;f>0&&this.tri(L,B,P,O,B,H,z,$,G,y,d),f<l-1&&this.tri(L,B,P,z,$,G,k,$,X,y,d)}}}walls(t,e,n,s,r=0){const o=t.length/2,a=tl(t)>0;for(let l=0;l<o;l++){const c=(l+1)%o,h=t[l*2],d=t[l*2+1],u=t[c*2],f=t[c*2+1];a?this.quad(u,e,f,h,e,d,h,n,d,u,n,f,s,r):this.quad(h,e,d,u,e,f,u,n,f,h,n,d,s,r)}}cap(t,e,n,s=0){const r=t.length/2,o=[];for(let l=0;l<r;l++)o.push(new Bt(t[l*2],t[l*2+1]));const a=Ha.triangulateShape(o,[]);for(const l of a){const c=o[l[0]],h=o[l[1]],d=o[l[2]];(h.x-c.x)*(d.y-c.y)-(h.y-c.y)*(d.x-c.x)>0?this.tri(c.x,e,c.y,d.x,e,d.y,h.x,e,h.y,n,s):this.tri(c.x,e,c.y,h.x,e,h.y,d.x,e,d.y,n,s)}}build(){const t=new Ae;return t.setAttribute("position",new Pe(new Float32Array(this.pos),3)),t.setAttribute("normal",new Pe(new Float32Array(this.nor),3)),t.setAttribute("color",new Pe(new Float32Array(this.col),3)),t.setAttribute("glow",new Pe(new Float32Array(this.glo),1)),t.computeBoundingSphere(),t.computeBoundingBox(),this.pos=[],this.nor=[],this.col=[],this.glo=[],t}}function tl(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}const es={value:0};function qn(i={}){const t=new Ye({vertexColors:!0,roughness:i.roughness??.86,metalness:0,side:i.side??Ee}),e=new Rt(i.glowColor??16761722);return t.onBeforeCompile=n=>{n.uniforms.uNight=es,n.uniforms.uGlowColor={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float glow;
varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;
uniform float uNight;
uniform vec3 uGlowColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlowColor * vGlow * uNight * 2.4;`)},t.customProgramCacheKey=()=>"inverloch-model",t}function el(i){return i.onBeforeCompile=t=>{t.uniforms.uNight=es,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.82 * uNight;`)},i.customProgramCacheKey=()=>"inverloch-unlit",i}const Oh={day:{sunDir:[-.42,.78,-.46],sunColor:16774109,sunIntensity:3.1,hemiSky:13953279,hemiGround:9280120,hemiIntensity:1.25,zenith:4163279,horizon:13625078,below:1582638,sunGlow:1,shallow:7129789,deep:1201018,waterSky:12903158,foam:1,night:0,exposure:1},golden:{sunDir:[-.84,.22,.36],sunColor:16756848,sunIntensity:3,hemiSky:15781309,hemiGround:6973032,hemiIntensity:1.15,zenith:4153244,horizon:16760970,below:1645863,sunGlow:1.6,shallow:7320486,deep:1390942,waterSky:16763040,foam:.9,night:.25,exposure:1},night:{sunDir:[.38,.72,-.42],sunColor:10467071,sunIntensity:.5,hemiSky:3821436,hemiGround:1053980,hemiIntensity:.55,zenith:396056,horizon:1582922,below:263948,sunGlow:.5,shallow:1920092,deep:331552,waterSky:2242140,foam:.45,night:1,exposure:1.05}},Dx=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
  gl_Position = p.xyww;
}`,Ix=`
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
}`;class Nx{constructor(t,e,n,s={}){it(this,"sun",new pp(16777215,3));it(this,"hemi",new up(16777215,8947848,1));it(this,"sky");it(this,"sunDir",new Q);it(this,"skyUniforms");it(this,"from");it(this,"to");it(this,"t",1);it(this,"mode","day");this.renderer=t,this.water=e,this.tint=s,this.from=this.to=this.preset("day"),this.skyUniforms={uZenith:{value:new Rt},uHorizon:{value:new Rt},uBelow:{value:new Rt},uSunDir:{value:new Q},uSunColor:{value:new Rt},uSunGlow:{value:1},uNight:{value:0}},this.sky=new Jt(new Wa(1,32,16),new Xn({uniforms:this.skyUniforms,vertexShader:Dx,fragmentShader:Ix,side:Ze,depthWrite:!1,depthTest:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,n>0&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(n,n)),this.apply(1)}set(t,e=!1){t===this.mode&&this.t>=1||(this.from=this.snapshot(),this.to=this.preset(t),this.mode=t,this.t=e?1:0,this.apply(this.t))}update(t){return this.t>=1?!1:(this.t=Math.min(1,this.t+t/1.4),this.apply(this.t),!0)}aimShadow(t,e){if(!this.sun.castShadow)return;const n=_e.clamp(e*.7,140,2400),s=this.sun.shadow,r=s.camera,o=n*2/s.mapSize.x,a=Math.round(t.x/o)*o,l=Math.round(t.z/o)*o,c=n*2.4+300;this.sun.target.position.set(a,t.y,l),this.sun.position.set(a,t.y,l).addScaledVector(this.sunDir,c),this.sun.target.updateMatrixWorld(),r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=1,r.far=c*2+400,r.updateProjectionMatrix(),s.bias=-.3/(r.far-r.near),s.normalBias=_e.clamp(o*1.6,.06,1.2))}preset(t){return{...Oh[t],...this.tint[t]}}setSolar(t){const e=(t%1440+1440)%1440,n=6*60,s=20.5*60;let r,o;if(e>=n&&e<=s)o=(e-n)/(s-n),r=Math.sin(Math.PI*o)*70;else{const m=((e<n?e+1440:e)-s)/(1440-(s-n));o=m<.5?1:0,r=-Math.sin(Math.PI*m)*40}const a=_e.degToRad(110*(1-2*o)),l=_e.degToRad(Math.max(r,5)),c=[Math.sin(a)*Math.cos(l),Math.sin(l),-Math.cos(a)*Math.cos(l)];let h;r>=25?h=this.preset("day"):r>=6?h=nl(this.preset("golden"),this.preset("day"),(r-6)/19):r>=-6?h=nl(this.preset("night"),this.preset("golden"),(r+6)/12):h=this.preset("night");const d=_e.clamp((2-r)/6,0,1),u=Oh.night.sunDir,f=[c[0]+(u[0]-c[0])*d,c[1]+(u[1]-c[1])*d,c[2]+(u[2]-c[2])*d];this.from=this.to={...h,sunDir:f},this.mode=r>=25?"day":r>=-6?"golden":"night",this.apply(1)}snapshot(){return nl(this.from,this.to,Ux(this.t))}apply(t){this.t=t;const e=this.snapshot();this.sunDir.set(...e.sunDir).normalize(),this.sun.color.set(e.sunColor),this.sun.intensity=e.sunIntensity,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const n=this.skyUniforms;n.uZenith.value.set(e.zenith),n.uHorizon.value.set(e.horizon),n.uBelow.value.set(e.below),n.uSunDir.value.copy(this.sunDir),n.uSunColor.value.set(e.sunColor),n.uSunGlow.value=e.sunGlow,n.uNight.value=e.night;const s=this.water.uniforms;s.uSunDir.value.copy(this.sunDir),s.uSunColor.value.set(e.sunColor).multiplyScalar(Math.min(1,e.sunIntensity/2.5)),s.uShallow.value.set(e.shallow),s.uDeep.value.set(e.deep),s.uSky.value.set(e.waterSky),s.uFoam.value=e.foam,this.water.skirt.material.color.set(e.deep).lerp(new Rt(e.shallow),.35),es.value=e.night,this.renderer.toneMappingExposure=e.exposure}}function Ux(i){return i*i*(3-2*i)}function nl(i,t,e){if(e<=0)return i;if(e>=1)return t;const n=(r,o)=>new Rt(r).lerp(new Rt(o),e).getHex(),s=(r,o)=>r+(o-r)*e;return{sunDir:[s(i.sunDir[0],t.sunDir[0]),s(i.sunDir[1],t.sunDir[1]),s(i.sunDir[2],t.sunDir[2])],sunColor:n(i.sunColor,t.sunColor),sunIntensity:s(i.sunIntensity,t.sunIntensity),hemiSky:n(i.hemiSky,t.hemiSky),hemiGround:n(i.hemiGround,t.hemiGround),hemiIntensity:s(i.hemiIntensity,t.hemiIntensity),zenith:n(i.zenith,t.zenith),horizon:n(i.horizon,t.horizon),below:n(i.below,t.below),sunGlow:s(i.sunGlow,t.sunGlow),shallow:n(i.shallow,t.shallow),deep:n(i.deep,t.deep),waterSky:n(i.waterSky,t.waterSky),foam:s(i.foam,t.foam),night:s(i.night,t.night),exposure:s(i.exposure,t.exposure)}}const Fx=1.5;class Ox{constructor(t,e,n,s,r,o,a,l=Fx){it(this,"nx");it(this,"nz");it(this,"y");it(this,"xMin");it(this,"zMin");it(this,"xMax");it(this,"zMax");it(this,"dx");it(this,"dz");it(this,"cellX");it(this,"cellZ");this.raw=t,this.exposure=e,this.w=n,this.h=s,this.sizeX=r,this.sizeZ=o,this.vex=l,this.cellX=r/n,this.cellZ=o/s,this.nx=Math.floor((n-1)/a)+1,this.nz=Math.floor((s-1)/a)+1,this.dx=this.cellX*a,this.dz=this.cellZ*a,this.xMin=-r/2+this.cellX/2,this.zMin=-o/2+this.cellZ/2,this.xMax=this.xMin+(this.nx-1)*this.dx,this.zMax=this.zMin+(this.nz-1)*this.dz,this.y=new Float32Array(this.nx*this.nz);for(let c=0;c<this.nz;c++)for(let h=0;h<this.nx;h++)this.y[c*this.nx+h]=t[c*a*n+h*a]*l}yAt(t,e){let n=(t-this.xMin)/this.dx,s=(e-this.zMin)/this.dz;n<0?n=0:n>this.nx-1.0001&&(n=this.nx-1.0001),s<0?s=0:s>this.nz-1.0001&&(s=this.nz-1.0001);const r=n|0,o=s|0,a=n-r,l=s-o,c=o*this.nx+r,h=this.y[c],d=this.y[c+1],u=this.y[c+this.nx],f=this.y[c+this.nx+1];return a+l<=1?h+(d-h)*a+(u-h)*l:f+(u-f)*(1-a)+(d-f)*(1-l)}bilinear(t,e,n){let s=(e+this.sizeX/2)/this.cellX-.5,r=(n+this.sizeZ/2)/this.cellZ-.5;s<0?s=0:s>this.w-1.0001&&(s=this.w-1.0001),r<0?r=0:r>this.h-1.0001&&(r=this.h-1.0001);const o=s|0,a=r|0,l=s-o,c=r-a,h=a*this.w+o;return(t[h]*(1-l)+t[h+1]*l)*(1-c)+(t[h+this.w]*(1-l)+t[h+this.w+1]*l)*c}metresAt(t,e){return this.bilinear(this.raw,t,e)}exposureAt(t,e){return this.bilinear(this.exposure,t,e)}inside(t,e,n=0){return t>this.xMin+n&&t<this.xMax-n&&e>this.zMin+n&&e<this.zMax-n}}const zh={type:"change"},il={type:"start"},Bh={type:"end"},kr=new Ua,kh=new Rn,zx=Math.cos(70*_e.DEG2RAD),Fe=new Q,tn=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sl=1e-6;class Bx extends xp{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nn.ROTATE,MIDDLE:Nn.DOLLY,RIGHT:Nn.PAN},this.touches={ONE:Qn.ROTATE,TWO:Qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new rn,this._lastTargetPosition=new Q,this._quat=new rn().setFromUnitVectors(t.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dr,this._sphericalDelta=new Dr,this._scale=1,this._panOffset=new Q,this._rotateStart=new Bt,this._rotateEnd=new Bt,this._rotateDelta=new Bt,this._panStart=new Bt,this._panEnd=new Bt,this._panDelta=new Bt,this._dollyStart=new Bt,this._dollyEnd=new Bt,this._dollyDelta=new Bt,this._dollyDirection=new Q,this._mouse=new Bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Gx.bind(this),this._onPointerDown=kx.bind(this),this._onPointerUp=Hx.bind(this),this._onContextMenu=Kx.bind(this),this._onMouseWheel=Xx.bind(this),this._onKeyDown=qx.bind(this),this._onTouchStart=Yx.bind(this),this._onTouchMove=$x.bind(this),this._onMouseDown=Vx.bind(this),this._onMouseMove=Wx.bind(this),this._interceptControlDown=Zx.bind(this),this._interceptControlUp=Jx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ce.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zh),this.update(),this.state=ce.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),s<-Math.PI?s+=tn:s>Math.PI&&(s-=tn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Fe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new Q(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(kr.origin.copy(this.object.position),kr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(kr.direction))<zx?this.object.lookAt(this.target):(kh.setFromNormalAndCoplanarPoint(this.object.up,this.target),kr.intersectPlane(kh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>sl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sl||this._lastTargetPosition.distanceToSquared(this.target)>sl?(this.dispatchEvent(zh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?tn/60*this.autoRotateSpeed*t:tn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){this.screenSpacePanning===!0?Fe.setFromMatrixColumn(e,1):(Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe)),Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Fe.copy(s).sub(this.target);let r=Fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Bt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function kx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Gx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Hx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bh),this.state=ce.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Vx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Nn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ce.DOLLY;break;case Nn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}break;case Nn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(il)}function Wx(i){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Xx(i){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(i.preventDefault(),this.dispatchEvent(il),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Bh))}function qx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Yx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Qn.ROTATE:if(this.enableRotate===!1){this.state=ce.NONE;break}this._handleTouchStartRotate(i),this.state=ce.TOUCH_ROTATE;break;case Qn.PAN:if(this.enablePan===!1){this.state=ce.NONE;break}this._handleTouchStartPan(i),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case Qn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ce.TOUCH_DOLLY_PAN;break;case Qn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(il)}function $x(i){switch(this._trackPointer(i),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ce.NONE}}function Kx(i){this.enabled!==!1&&i.preventDefault()}function Zx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Jx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const rl=new Rn,Gr=new gp,ns=new Bt,ol=new Q;class Qx extends Bx{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Nn.PAN,MIDDLE:Nn.DOLLY,RIGHT:Nn.ROTATE},this.touches={ONE:Qn.PAN,TWO:Qn.DOLLY_ROTATE},this._panWorldStart=new Q}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;rl.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();ns.x=(t.clientX-n.left)/n.width*2-1,ns.y=-((t.clientY-n.top)/n.height)*2+1,Gr.setFromCamera(ns,this.object),Gr.ray.intersectPlane(rl,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const n=this.domElement.getBoundingClientRect();ns.x=(t.clientX-n.left)/n.width*2-1,ns.y=-((t.clientY-n.top)/n.height)*2+1,Gr.setFromCamera(ns,this.object),Gr.ray.intersectPlane(rl,ol)&&(ol.sub(this._panWorldStart),this._panOffset.copy(ol).negate(),this.update())}}class jx{constructor(t,e,n){it(this,"items",[]);it(this,"v",new Q);it(this,"visible",!0);it(this,"obstacles",[]);this.layer=t;for(const s of[...e].sort((r,o)=>r.priority-o.priority)){const r=document.createElement("button");r.type="button",r.tabIndex=-1,r.className=`inv-label inv-label--${s.kind}`,r.textContent=s.name,r.style.visibility="hidden",r.addEventListener("click",()=>n(s.id)),t.appendChild(r),this.items.push({place:s,el:r,w:0,h:0,shown:!1})}}setVisible(t){this.visible=t,this.layer.style.display=t?"":"none"}setObstacles(t){this.obstacles=t}update(t,e,n,s=1/0){if(!this.visible)return;const r=[...this.obstacles];for(const o of this.items){o.w||(o.w=o.el.offsetWidth,o.h=o.el.offsetHeight);const a=o.place;this.v.set(a.x,a.y,a.z);const l=this.v.distanceTo(t.position);this.v.project(t);let c=this.v.z<1&&this.v.z>-1&&l<(a.maxDist??1/0)&&l<s;const h=(this.v.x*.5+.5)*e,d=(-this.v.y*.5+.5)*n,u=h-o.w/2,f=d-o.h,m=h+o.w/2,v=d;if(c&&(m<0||u>e||v<0||f>n)&&(c=!1),c){for(const p of r)if(u<p[2]+6&&m>p[0]-6&&f<p[3]+4&&v>p[1]-4){c=!1;break}}c&&(r.push([u,f,m,v]),o.el.style.transform=`translate3d(${Math.round(u)}px, ${Math.round(f)}px, 0)`),c!==o.shown&&(o.el.style.visibility=c?"visible":"hidden",o.shown=c)}}dispose(){for(const t of this.items)t.el.remove();this.items=[]}}function Yn(i,t,e){return[(e-i.origin[0])*i.metresPerDegree[0],-(t-i.origin[1])*i.metresPerDegree[1]]}function t_(i,t,e){return i.map(n=>{const[s,r]=Yn(t,n.lat,n.lon),o=Math.max(e.yAt(s,r),0);return{...n,x:s,z:r,y:o+(n.lift??6)}})}const e_={high:{step:1,trees:1,shadow:4096,pixelRatio:2},medium:{step:2,trees:.6,shadow:2048,pixelRatio:1.5},low:{step:2,trees:.35,shadow:0,pixelRatio:1}};class al extends Error{}const n_=()=>new Promise(i=>requestAnimationFrame(()=>i())),i_=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class s_{constructor(t,e,n,s,r={}){it(this,"renderer");it(this,"scene",new Ed);it(this,"camera",new vn(38,1,5,9e4));it(this,"controls");it(this,"atmosphere");it(this,"hf");it(this,"disposed",!1);it(this,"abort",new AbortController);it(this,"labels");it(this,"places",[]);it(this,"raf",0);it(this,"last",0);it(this,"time",0);it(this,"dirty",!0);it(this,"animating",!0);it(this,"resizeObserver");it(this,"flight");it(this,"lastCompass",NaN);it(this,"width",1);it(this,"height",1);it(this,"pixelRatio",1);it(this,"slowFrames",0);it(this,"solarMinutes",NaN);it(this,"roadPaths",[]);it(this,"roadIndex");it(this,"external");it(this,"meta");it(this,"shadowAim",new Q);it(this,"viewFocus",new Q);it(this,"viewDistance",1/0);it(this,"lookDir",new Q);it(this,"onKey",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=this.currentView(),n=e.dist*.12,s=_e.degToRad(e.azimuth),r=-Math.sin(s),o=-Math.cos(s),a=Math.cos(s),l=-Math.sin(s);let c=null;switch(t.key){case"ArrowUp":c={...e,x:e.x+r*n,z:e.z+o*n};break;case"ArrowDown":c={...e,x:e.x-r*n,z:e.z-o*n};break;case"ArrowLeft":c={...e,x:e.x-a*n,z:e.z-l*n};break;case"ArrowRight":c={...e,x:e.x+a*n,z:e.z+l*n};break;case"+":case"=":c={...e,dist:e.dist*.8};break;case"-":case"_":c={...e,dist:e.dist*1.25};break;case"q":case"Q":c={...e,azimuth:e.azimuth-15};break;case"e":case"E":c={...e,azimuth:e.azimuth+15};break;case"r":case"R":c={...e,polar:e.polar-6};break;case"f":case"F":c={...e,polar:e.polar+6};break;case"Home":c=this.opts.home;break;default:return}t.preventDefault(),this.fly(c,.3)});it(this,"frame",t=>{var l;if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);const e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,document.hidden)return;if(this.flight){const c=this.flight;c.t=Math.min(1,c.t+e/c.duration);const h=i_(c.t),d=(u,f)=>u+(f-u)*h;this.applyView({x:d(c.from.x,c.to.x),z:d(c.from.z,c.to.z),dist:Math.exp(d(Math.log(c.from.dist),Math.log(c.to.dist))),polar:d(c.from.polar,c.to.polar),azimuth:d(c.from.azimuth,c.to.azimuth)}),c.t>=1&&(this.flight=void 0)}if(this.controls&&!this.external&&this.controls.update()&&(this.dirty=!0),this.atmosphere.update(e)&&(this.dirty=!0),this.animating&&(this.time+=e,this.tick(e,this.time),this.dirty=!0),!this.dirty)return;this.dirty=!1;const n=this.camera;let s,r=1/0;const o=!!this.controls&&!this.external;if(this.controls&&o){const c=this.hf.yAt(n.position.x,n.position.z)+12;n.position.y<c&&(n.position.y=c),s=n.position.distanceTo(this.controls.target),this.shadowAim.copy(this.controls.target)}else{const c=Math.max(1,n.position.y-Math.max(this.hf.yAt(n.position.x,n.position.z),this.waterLevel));n.getWorldDirection(this.lookDir);const h=Math.min(this.lookDir.y<-.05?c/-this.lookDir.y:1e9,60+c*3,3e3);this.shadowAim.copy(n.position).addScaledVector(this.lookDir,h),s=Math.max(h,c)*1.3,r=Math.max(350,c*10)}const a=o?_e.clamp(s*.02,2,80):_e.clamp(s*.012,.4,60);if(Math.abs(a-n.near)>n.near*.05&&(n.near=a,n.updateProjectionMatrix()),this.atmosphere.aimShadow(this.shadowAim,s),!o&&s<500?this.viewFocus.set(n.position.x,0,n.position.z):this.viewFocus.copy(this.shadowAim),this.viewDistance=s,this.beforeRender(),this.renderer.render(this.scene,n),(l=this.labels)==null||l.update(n,this.width,this.height,r),this.animating&&e<.25&&(this.slowFrames=e>.042?this.slowFrames+1:Math.max(0,this.slowFrames-2),this.slowFrames>50&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio*.75),this.renderer.setPixelRatio(this.pixelRatio),this.resize(),this.slowFrames=0)),o){const c=Math.round(this.currentView().azimuth);c!==this.lastCompass&&(this.lastCompass=c,this.cb.onCompass(c))}});this.container=t,this.labelLayer=e,this.cb=n,this.opts=s,this.host=r,this.external=!!r.external}async init(){try{this.renderer=new Lx({antialias:!0,powerPreference:"high-performance"})}catch{this.cb.onError("This browser could not start WebGL, which the 3D model needs.");return}const t=this.renderer,e=this.pickQuality(),n=e_[e];this.pixelRatio=Math.min(window.devicePixelRatio||1,n.pixelRatio),t.setPixelRatio(this.pixelRatio),t.outputColorSpace=Te,t.toneMapping=bo,t.shadowMap.enabled=n.shadow>0,t.shadowMap.type=os;const s=t.domElement;this.host.external?(s.setAttribute("role","img"),s.setAttribute("aria-label",this.opts.name)):(s.tabIndex=0,s.setAttribute("role","application"),s.setAttribute("aria-label",`${this.opts.name}. Drag to pan, right-drag to rotate, scroll to zoom. Arrow keys pan, plus and minus zoom, Q and E rotate.`)),s.style.display="block",s.style.outlineOffset="-3px",this.container.appendChild(s),s.addEventListener("webglcontextlost",a=>{a.preventDefault(),this.disposed||this.cb.onError("The browser reclaimed the graphics memory this model was using.")});let r;try{r=await this.build(n,e,async(a,l)=>{this.cb.onProgress(a,l),await n_()})}catch(a){if(this.disposed)return;a instanceof al||console.error(a),this.cb.onError(a instanceof al?a.message:"The model could not be built in this browser.");return}if(this.disposed)return;this.hf=r.hf,this.atmosphere=r.atmosphere,this.scene.add(this.atmosphere.sky,this.atmosphere.sun,this.atmosphere.sun.target,this.atmosphere.hemi),this.places=r.places,this.roadPaths=r.roadPaths,this.roadIndex=r.roadIndex,this.labels=new jx(this.labelLayer,this.places,a=>this.flyToPlace(a)),this.external||this.setupControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize();const o=window.matchMedia("(prefers-reduced-motion: reduce)").matches;o&&(this.animating=!1),this.external?this.setExternalCamera(...this.opts.externalStart):o?this.applyView(this.opts.home):(this.applyView(this.opts.intro),this.fly(this.opts.home,3.4)),this.cb.onProgress(1,"Ready"),this.cb.onReady(r.info),this.last=performance.now(),this.raf=requestAnimationFrame(this.frame)}get isAnimating(){return this.animating}setAnimating(t){this.animating=t,this.dirty=!0}setExternalCamera(t,e,n,s,r){this.external&&(this.camera.position.set(t,e,n),this.camera.rotation.set(r,s,0,"YXZ"),this.dirty=!0)}setExternal(t){if(!(t===this.external||!this.hf)){if(this.external=t,t)this.flight=void 0,this.controls&&(this.controls.enabled=!1);else{this.controls||this.setupControls(),this.controls.enabled=!0;const e=this.camera;e.getWorldDirection(this.lookDir);const n=Math.max(1,e.position.y),s=this.lookDir.y<-.05?Math.min(n/-this.lookDir.y,6e3):900,r=this.controls.target.copy(e.position).addScaledVector(this.lookDir,s);r.x=_e.clamp(r.x,this.hf.xMin,this.hf.xMax),r.z=_e.clamp(r.z,this.hf.zMin,this.hf.zMax),r.y=this.targetHeight(r.x,r.z),this.controls.update(),this.fly(this.opts.home,1.6)}this.resize()}}getCamera(){const t=new An().setFromQuaternion(this.camera.quaternion,"YXZ"),e=this.camera.position;return{x:e.x,y:e.y,z:e.z,yaw:t.y,pitch:t.x}}fromLatLon(t,e){return this.meta?Yn(this.meta,t,e):[0,0]}addParts(t){const e=new Ie;e.name="guest";const n=t.map(s=>{const r=new Ae;r.setAttribute("position",new re(Array.from(s.positions),3)),s.colors&&r.setAttribute("color",new re(Array.from(s.colors),3)),s.uvs&&r.setAttribute("uv",new re(Array.from(s.uvs),2)),s.indices&&r.setIndex(Array.from(s.indices)),s.normals?r.setAttribute("normal",new re(Array.from(s.normals),3)):r.computeVertexNormals();let o=null;s.map&&(o=new De(s.map),o.colorSpace=Te,o.wrapS=o.wrapT=Zs,s.mapRepeat&&o.repeat.set(s.mapRepeat[0],s.mapRepeat[1]),o.anisotropy=4,o.needsUpdate=!0);const a=s.opacity??1,l={color:new Rt().setRGB(...s.color??[1,1,1]),map:o,vertexColors:!!s.colors,transparent:a<1,opacity:a,side:s.doubleSide?Ee:jn},c=s.unlit?new Wn(l):new Ye({...l,roughness:s.roughness??.9,metalness:s.metalness??0,emissive:new Rt().setRGB(...s.emissive??[0,0,0]),emissiveIntensity:s.emissiveIntensity??1,flatShading:!!s.flatShading}),h=new Jt(r,c);return h.matrixAutoUpdate=!1,h.matrix.fromArray(Array.from(s.matrix)),h.castShadow=a>=1,h.receiveShadow=!0,e.add(h),h});return this.scene.add(e),this.dirty=!0,{setMatrix:(s,r)=>{const o=n[s];o&&(o.matrix.fromArray(Array.from(r)),o.matrixWorldNeedsUpdate=!0,this.dirty=!0)},setEmissive:(s,r,o,a,l)=>{var h;const c=(h=n[s])==null?void 0:h.material;c instanceof Ye&&(c.emissive.setRGB(r,o,a),c.emissiveIntensity=l,this.dirty=!0)},remove:()=>{var s;this.scene.remove(e);for(const r of n){r.geometry.dispose();const o=r.material;(s=o.map)==null||s.dispose(),o.dispose()}this.dirty=!0}}}addPad(t){const e=t.radius??t.halfWidth??5,n=t.radius??t.halfDepth??5,s=t.heading??0,r=Math.cos(s),o=Math.sin(s);let a=1/0,l=-1/0;for(const[f,m]of[[0,0],[-e,-n],[e,-n],[e,n],[-e,n],[0,-n],[0,n],[-e,0],[e,0]]){const v=this.hf.yAt(t.x+f*r+m*o,t.z-f*o+m*r);a=Math.min(a,v),l=Math.max(l,v)}const c=l+(t.lift??.25),h=c-a+1,d=t.radius?new za(t.radius,t.radius,h,24):new vi(e*2,h,n*2),u=new Jt(d,new Ye({color:new Rt().setRGB(...t.color),roughness:1}));return u.position.set(t.x,c-h/2,t.z),u.rotation.y=s,u.receiveShadow=!0,u.name="guest-pad",this.scene.add(u),this.dirty=!0,c}setSolarMinutes(t){!this.atmosphere||t===this.solarMinutes||(this.solarMinutes=t,this.atmosphere.setSolar(t),this.dirty=!0)}roadSpot(t){const e=t.trim().toLowerCase();let n=null;for(const m of this.roadPaths)m.name.toLowerCase()===e&&(!n||m.length>n.length)&&(n=m);if(!n)return null;const s=n.pts.length/3,r=0,o=s-1,a=s>>1;let l=n.pts[o*3]-n.pts[r*3],c=n.pts[o*3+2]-n.pts[r*3+2];const h=Math.hypot(l,c)||1;l/=h,c/=h;const d=Math.min(70,h*.5),u=n.pts[a*3]-l*d,f=n.pts[a*3+2]-c*d;return{x:u,y:this.hf.yAt(u,f)+38,z:f,yaw:Math.atan2(-l,-c),pitch:-.42}}standNear(t,e){const n=this.roadIndex,s=n==null?void 0:n.nearest(t,e,150);if(!n||!s)return null;const r=s.width/2+1.5;let o=(t-s.px)*-s.tz+(e-s.pz)*s.tx>=0?1:-1;const a=f=>{const m=s.px-s.tz*f*(r+6),v=s.pz+s.tx*f*(r+6),p=n.nearest(m,v,r+4);return!!p&&p.dist<r+3};a(o)&&!a(-o)&&(o=-o);const l=s.px-s.tz*o*r,c=s.pz+s.tx*o*r,h=t-l,d=e-c,u=Math.hypot(h,d)>6?Math.atan2(-h,-d):Math.atan2(-s.tx,-s.tz);return{x:l,z:c,yaw:u}}groundAt(t,e){return this.hf?this.hf.yAt(t,e):0}get waterLevel(){return 0}get bounds(){return this.hf?[this.hf.xMin,this.hf.xMax,this.hf.zMin,this.hf.zMax]:[-4e3,4e3,-3440,3440]}setTimeOfDay(t){var e;(e=this.atmosphere)==null||e.set(t,!this.animating),this.dirty=!0}setLabelsVisible(t){var e;(e=this.labels)==null||e.setVisible(t),this.dirty=!0}setLabelObstacles(t){var e;(e=this.labels)==null||e.setObstacles(t),this.dirty=!0}flyToPlace(t){const e=this.places.find(n=>n.id===t);e&&this.fly({x:e.x,z:e.z,dist:e.view[0],polar:e.view[1],azimuth:e.view[2]},2.2)}resetView(){this.fly(this.opts.home,1.8)}setView(t,e,n,s,r,o=1.5){this.fly({x:t,z:e,dist:n,polar:s,azimuth:r},o)}faceNorth(){const t=this.currentView();this.fly({...t,azimuth:0},.8)}zoomBy(t){const e=this.currentView();this.fly({...e,dist:_e.clamp(e.dist*t,this.controls.minDistance,this.controls.maxDistance)},.35)}dispose(){var t,e,n;this.disposed=!0,this.abort.abort(),cancelAnimationFrame(this.raf),(t=this.resizeObserver)==null||t.disconnect(),(e=this.labels)==null||e.dispose(),(n=this.controls)==null||n.dispose(),this.renderer&&(this.renderer.domElement.removeEventListener("keydown",this.onKey),this.scene.traverse(s=>{var a,l;const r=s;(l=(a=r.geometry)==null?void 0:a.dispose)==null||l.call(a);const o=Array.isArray(r.material)?r.material:r.material?[r.material]:[];for(const c of o){for(const h of Object.values(c))h instanceof De&&h.dispose();c.dispose()}}),this.renderer.dispose(),this.renderer.domElement.remove())}beforeRender(){}invalidate(){this.dirty=!0}clearTest(){const t=[...this.host.clear??[],...(this.host.clearLatLon??[]).map(e=>{const[n,s]=this.fromLatLon(e.lat,e.lon);return{x:n,z:s,r:e.r}})];return(e,n)=>t.some(s=>(e-s.x)**2+(n-s.z)**2<s.r*s.r)}pickQuality(){if(this.host.quality)return this.host.quality;const t=new URLSearchParams(window.location.search).get("quality");if(t==="high"||t==="medium"||t==="low")return t;const e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),s=n?String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)):"";if(/swiftshader|llvmpipe|software/i.test(s))return"low";const r=navigator.deviceMemory??8;return window.matchMedia("(pointer: coarse)").matches||r<=4?"medium":"high"}setupControls(){const t=this.controls=new Qx(this.camera,this.renderer.domElement);t.enableDamping=!0,t.dampingFactor=.09,t.screenSpacePanning=!1,t.zoomToCursor=!0,t.minDistance=this.opts.minDistance,t.maxDistance=this.opts.maxDistance,t.maxPolarAngle=_e.degToRad(84),t.zoomSpeed=1.1,t.addEventListener("start",()=>{this.flight=void 0}),t.addEventListener("change",()=>{const e=t.target,n=this.hf;e.x=_e.clamp(e.x,n.xMin,n.xMax),e.z=_e.clamp(e.z,n.zMin,n.zMax);const s=this.targetHeight(e.x,e.z);this.camera.position.y+=s-e.y,e.y=s,this.dirty=!0}),this.renderer.domElement.addEventListener("keydown",this.onKey)}clampView(t){var e,n;return{x:_e.clamp(t.x,this.hf.xMin,this.hf.xMax),z:_e.clamp(t.z,this.hf.zMin,this.hf.zMax),dist:_e.clamp(t.dist,((e=this.controls)==null?void 0:e.minDistance)??this.opts.minDistance,((n=this.controls)==null?void 0:n.maxDistance)??this.opts.maxDistance),polar:_e.clamp(t.polar,2,84),azimuth:t.azimuth}}currentView(){const t=this.controls.target,e=this.camera.position.clone().sub(t),n=new Dr().setFromVector3(e);return{x:t.x,z:t.z,dist:n.radius,polar:_e.radToDeg(n.phi),azimuth:_e.radToDeg(n.theta)}}targetHeight(t,e){return this.opts.followGround?Math.max(0,this.hf.yAt(t,e)):0}applyView(t){const e=new Dr(t.dist,_e.degToRad(t.polar),_e.degToRad(t.azimuth)),n=this.controls.target.set(t.x,this.targetHeight(t.x,t.z),t.z);this.camera.position.setFromSpherical(e).add(n),this.camera.lookAt(n),this.dirty=!0}fly(t,e){if(!this.controls||this.external)return;if(t=this.clampView(t),!this.animating){this.flight=void 0,this.applyView(t),this.controls.update();return}const n=this.currentView();let s=(t.azimuth-n.azimuth)%360;s>180&&(s-=360),s<-180&&(s+=360),this.flight={from:n,to:{...t,azimuth:n.azimuth+s},t:0,duration:e}}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.fov=this.external?60:t/e<.8?52:38,this.camera.updateProjectionMatrix(),this.dirty=!0}}const Gh=3;function is(i,t,e,n,s,r,o,a,l,c){const h=new Va(1,0),d=h.getAttribute("position"),u=[];for(let f=0;f<d.count;f++){const m=d.getX(f),v=d.getY(f),p=d.getZ(f),g=Math.sin(m*12.9898+v*78.233+p*37.719+a*4.1)*43758.5453,_=.8+(g-Math.floor(g))*.42;u.push([t+m*s*_,e+v*r*(v<0?.75:_),n+p*o*_])}for(let f=0;f<u.length;f+=3){const[m,v,p]=[u[f],u[f+1],u[f+2]],g=_e.clamp(((m[1]+v[1]+p[1])/3-(e-r))/(2*r),0,1);i.tri(m[0],m[1],m[2],v[0],v[1],v[2],p[0],p[1],p[2],ts(l,c,g))}h.dispose()}function Si(i){const t=i.build();return t.deleteAttribute("glow"),t}function r_(i,t,e,n,s=()=>!1,r){const o=new Ie;o.name="trees";const a=new Xc({vertexColors:!0}),l=r?r.tile:1300,c=new Map,h=new Map,d=Dn(88);for(let E=0;E<i.length;E+=Gh){if(n<1&&d()>n||s(i[E]/4,i[E+1]/4))continue;const b=`${i[E+2]>>8}:${Math.floor(i[E]/4/l)}:${Math.floor(i[E+1]/4/l)}`;let w=h.get(b);w||h.set(b,w=[]),w.push(E)}const u=new ie,f=new rn,m=new Q,v=new Q,p=new Q(0,1,0),g=new Rt;let _=0;for(const[E,x]of h){const b=Number(E.split(":")[0]),w=new an(t[b],a,x.length);if(x.forEach((A,C)=>{const L=i[A]/4,B=i[A+1]/4,P=(i[A+2]&255)/10,O=Dn(A*2654435761+11);v.set(L,e.yAt(L,B)-.15,B),f.setFromAxisAngle(p,O()*Math.PI*2);const H=.85+O()*.35;m.set(P*H,P,P*(.85+O()*.35)),w.setMatrixAt(C,u.compose(v,f,m));const k=.8+O()*.34;w.setColorAt(C,g.setRGB(k*(.94+O()*.14),k,k*(.9+O()*.12)))}),w.instanceMatrix.needsUpdate=!0,w.instanceColor&&(w.instanceColor.needsUpdate=!0),w.computeBoundingSphere(),w.castShadow=!0,w.receiveShadow=!1,o.add(w),_+=x.length,r){const A=E.slice(E.indexOf(":")+1);let C=c.get(A);C||c.set(A,C={near:[],trees:[],kinds:[]}),C.near.push(w);for(const L of x)C.trees.push(L),C.kinds.push(b)}}if(!r)return{group:o,count:_,cull:(E,x,b)=>{}};const M=o_(),y=t.map(E=>{E.computeBoundingBox();const x=E.boundingBox,b=E.getAttribute("color");let w=0,A=0,C=0;for(let L=0;L<b.count;L++)w+=b.getX(L),A+=b.getY(L),C+=b.getZ(L);return{wide:.8*Math.max(-x.min.x,x.max.x,-x.min.z,x.max.z),top:x.max.y,colour:new Rt(w/b.count,A/b.count,C/b.count)}}),S=[];for(const E of c.values()){const x=new an(M,a,E.trees.length);E.trees.forEach((b,w)=>{const A=i[b]/4,C=i[b+1]/4,L=(i[b+2]&255)/10,B=y[E.kinds[w]],P=Dn(b*2654435761+11);P();const O=L*(.85+P()*.35)*B.wide;v.set(A,e.yAt(A,C)+L*B.top*.62,C),m.set(O,L*B.top*.4,O),x.setMatrixAt(w,u.compose(v,f.identity(),m));const H=.8+P()*.34;x.setColorAt(w,g.copy(B.colour).multiplyScalar(H))}),x.computeBoundingSphere(),x.visible=!1,o.add(x),S.push({near:E.near,far:x,c:x.boundingSphere.center,r:x.boundingSphere.radius})}return{group:o,count:_,cull(E,x,b,w=r.near){for(const A of S){const C=Math.hypot(Math.max(0,Math.hypot(A.c.x-E,A.c.z-b)-A.r),A.c.y-x)<w;for(const L of A.near)L.visible=C;A.far.visible=!C}}}}function o_(){const i=[0,1,0],t=[0,-1,0],e=[[1,0,0],[0,0,1],[-1,0,0],[0,0,-1]],n=[],s=[];for(let o=0;o<4;o++){const a=e[o],l=e[(o+1)%4];n.push(...i,...l,...a,...t,...a,...l),s.push(1.08,1.08,1.08,.95,.95,.95,.95,.95,.95,.6,.6,.6,.78,.78,.78,.78,.78,.78)}const r=new Ae;return r.setAttribute("position",new re(n,3)),r.setAttribute("color",new re(s,3)),r.computeVertexNormals(),r}const Hr=1,Is=2,a_=[q(5198680),q(11575168),q(9072466),q(12434356)],l_=q(4474957),Hh=q(15921382),Vh=[.34,.3,.26,.22,.16,.15,.13,.11];function c_(i,t){const e=[i[0]/10,i[1]/10];for(let n=2;n<i.length;n+=2){const s=i[n-2]/10,r=i[n-1]/10,o=i[n]/10,a=i[n+1]/10,l=Math.max(1,Math.ceil(Math.hypot(o-s,a-r)/t));for(let c=1;c<=l;c++)e.push(s+(o-s)*c/l,r+(a-r)*c/l)}return e}class h_{constructor(){it(this,"cells",new Map);it(this,"segs",[]);it(this,"size",40)}add(t,e,n,s,r,o,a=7){const l=this.segs.length/7;this.segs.push(t,e,n,s,r,o,a);const c=Math.floor(Math.min(t,n)/this.size),h=Math.floor(Math.max(t,n)/this.size),d=Math.floor(Math.min(e,s)/this.size),u=Math.floor(Math.max(e,s)/this.size);for(let f=c;f<=h;f++)for(let m=d;m<=u;m++){const v=(f+512)*4096+(m+512);let p=this.cells.get(v);p||this.cells.set(v,p=[]),p.push(l)}}clear(t,e,n,s){let r=!0;return this.near(t,e,n,(o,a,l,c)=>{o<c/2+s&&(r=!1)}),r}near(t,e,n,s){const r=Math.ceil(n/this.size),o=Math.floor(t/this.size),a=Math.floor(e/this.size);for(let l=o-r;l<=o+r;l++)for(let c=a-r;c<=a+r;c++){const h=this.cells.get((l+512)*4096+(c+512));if(h)for(const d of h){const u=this.segs[d*7],f=this.segs[d*7+1],m=this.segs[d*7+2]-u,v=this.segs[d*7+3]-f,p=Math.max(0,Math.min(1,((t-u)*m+(e-f)*v)/(m*m+v*v||1))),g=Math.hypot(t-u-m*p,e-f-v*p);g<=n&&s(g,this.segs[d*7+4],this.segs[d*7+5],this.segs[d*7+6])}}}nearest(t,e,n){let s=null;const r=Math.ceil(n/this.size),o=Math.floor(t/this.size),a=Math.floor(e/this.size);for(let l=o-r;l<=o+r;l++)for(let c=a-r;c<=a+r;c++){const h=this.cells.get((l+512)*4096+(c+512));if(h)for(const d of h){const u=this.segs[d*7],f=this.segs[d*7+1],m=this.segs[d*7+2],v=this.segs[d*7+3],p=m-u,g=v-f,_=Math.max(0,Math.min(1,((t-u)*p+(e-f)*g)/(p*p+g*g||1))),M=u+p*_,y=f+g*_,S=Math.hypot(t-M,e-y);if(S<=n&&(!s||S<s.dist)){const E=Math.hypot(p,g)||1;s={dist:S,px:M,pz:y,cls:this.segs[d*7+4],name:this.segs[d*7+5],width:this.segs[d*7+6],tx:p/E,tz:g/E}}}}return s}}function u_(i,t,e={}){const n=new se,s=new se,r=new h_,o=[],a=[];for(let p=0;p<i.roads.length;p++){const[g,_,M,y,S,E]=i.roads[p],x=y/10,b=c_(E,g<=3?6:5),w=b.length/2;if(w<2)continue;const A=_===0&&g<=1?l_:a_[_],C=Vh[g],L=(M&Hr)!==0,B=t.yAt(b[0],b[1]),P=t.yAt(b[w*2-2],b[w*2-1]),O=new Float32Array(w);for(let z=1;z<w;z++)O[z]=O[z-1]+Math.hypot(b[z*2]-b[z*2-2],b[z*2+1]-b[z*2-1]);const H=O[w-1]||1,k=new Float32Array(w*3),$=new Float32Array(w*3),X=new Float32Array(w*3);for(let z=0;z<w;z++){const G=b[z*2],V=b[z*2+1],ut=Math.max(z-1,0),Y=Math.min(z+1,w-1);let at=b[Y*2]-b[ut*2],ct=b[Y*2+1]-b[ut*2+1];const mt=Math.hypot(at,ct)||1;at/=mt,ct/=mt;let pt=1;if(z>0&&z<w-1){const yt=b[z*2]-b[z*2-2],ne=b[z*2+1]-b[z*2-1],Re=Math.hypot(yt,ne)||1;pt=1/Math.max(.6,(yt*at+ne*ct)/Re)}const Ct=-ct*(x/2)*pt,Kt=at*(x/2)*pt,st=L?B+(P-B)*(O[z]/H)+.6+1*Math.sin(Math.PI*O[z]/H):NaN,dt=L?st:t.yAt(G,V)+C,At=L?st:t.yAt(G+Ct,V+Kt)+C,Ft=L?st:t.yAt(G-Ct,V-Kt)+C;k.set([G+Ct,At,V+Kt],z*3),$.set([G,dt,V],z*3),X.set([G-Ct,Ft,V-Kt],z*3),z>0&&g<=3&&r.add(b[z*2-2],b[z*2-1],G,V,g,S,x)}for(let z=0;z<w-1;z++){const G=z*3,V=G+3;if((L||g<=3)&&(n.quad(k[G],k[G+1],k[G+2],k[V],k[V+1],k[V+2],$[V],$[V+1],$[V+2],$[G],$[G+1],$[G+2],A),n.quad($[G],$[G+1],$[G+2],$[V],$[V+1],$[V+2],X[V],X[V+1],X[V+2],X[G],X[G+1],X[G+2],A)),L){const ut=q(_===2?7297604:13225162);for(const Y of[k,X])n.quad(Y[G],Y[G+1],Y[G+2],Y[V],Y[V+1],Y[V+2],Y[V],Y[V+1]+1.05,Y[V+2],Y[G],Y[G+1]+1.05,Y[G+2],ut),n.quad(Y[G],Y[G+1]-.7,Y[G+2],Y[V],Y[V+1]-.7,Y[V+2],Y[V],Y[V+1],Y[V+2],Y[G],Y[G+1],Y[G+2],q(9276036))}}if(g<=3&&!L)for(const z of[0,w-1]){const G=$[z*3],V=$[z*3+1],ut=$[z*3+2],Y=8;for(let at=0;at<Y;at++){const ct=at/Y*Math.PI*2,mt=(at+1)/Y*Math.PI*2;n.tri(G,V,ut,G+Math.cos(mt)*x/2,V,ut+Math.sin(mt)*x/2,G+Math.cos(ct)*x/2,V,ut+Math.sin(ct)*x/2,A)}}if((g<=1||e.suburbMarkings&&g<=3&&x>=6.5)&&!(M&Is)&&H>20){let z=0;for(let G=4;G<H-4;G+=12){for(;z<w-2&&O[z+1]<G;)z++;const V=(G-O[z])/(O[z+1]-O[z]||1),ut=$[z*3]+($[z*3+3]-$[z*3])*V,Y=$[z*3+1]+($[z*3+4]-$[z*3+1])*V,at=$[z*3+2]+($[z*3+5]-$[z*3+2])*V;let ct=$[z*3+3]-$[z*3],mt=$[z*3+5]-$[z*3+2];const pt=Math.hypot(ct,mt)||1;ct/=pt,mt/=pt;const Ct=($[z*3+4]-$[z*3+1])/pt*3,Kt=-mt*.16,st=ct*.16,dt=.05;s.quad(ut+Kt,Y+dt,at+st,ut+ct*3+Kt,Y+Ct+dt,at+mt*3+st,ut+ct*3-Kt,Y+Ct+dt,at+mt*3-st,ut-Kt,Y+dt,at-st,Hh)}}if(M&Is){let z=0,G=0;for(let mt=0;mt<w;mt++)z+=b[mt*2],G+=b[mt*2+1];z/=w,G/=w;const V=w>>1,ut=f_(b[0],b[1],b[V*2],b[V*2+1],b[w*2-2],b[w*2-1]),Y=ut?ut.x:z,at=ut?ut.z:G,ct=ut?ut.r:Math.hypot(b[0]-z,b[1]-G);ct>3&&ct<40&&!a.some(mt=>Math.hypot(mt.x-Y,mt.z-at)<12)&&a.push({x:Y,z:at,r:ct,w:x})}g<=3&&o.push({index:p,cls:g,name:S>=0?i.names[S]:"",width:x,flags:M,pts:$,length:H,nameIdx:S})}if(e.suburbMarkings)for(const p of o){if(p.cls<2||p.flags&(Hr|Is)||p.width<5.5||p.length<12)continue;const g=p.pts,_=g.length/3;for(const M of[0,1]){const y=M?_-1:0,S=M?_-2:1,E=g[y*3],x=g[y*3+2];let b=E-g[S*3],w=x-g[S*3+2];const A=Math.hypot(b,w)||1;b/=A,w/=A;let C=0,L=9,B=!1;if(r.near(E,x,1,(z,G,V,ut)=>{V!==p.nameIdx&&z<.8&&(G<L&&(L=G),ut>C&&(C=ut))}),!C||L>p.cls||(r.near(E+b*2,x+w*2,.6,(z,G,V)=>{V===p.nameIdx&&(B=!0)}),B))continue;const P=C/2+1.3,O=E-b*P,H=x-w*P,k=w,$=-b,X=t.yAt(O,H)+Vh[p.cls]+.05;for(let z=.2;z+.5<p.width/2-.3;z+=1.1){const G=O+k*z,V=H+$*z,ut=O+k*(z+.55),Y=H+$*(z+.55);s.quad(G+b*.15,X,V+w*.15,ut+b*.15,X,Y+w*.15,ut-b*.15,X,Y-w*.15,G-b*.15,X,V-w*.15,Hh)}}}const l=q(13158078),c=q(7314002),h=q(4943936);for(const p of a){const g=p.r-p.w/2-.3;if(g<1.2)continue;const _=t.yAt(p.x,p.z)+.2;n.frame(p.x,_,p.z,0),n.cyl(0,0,0,g,g,.4,14,l,c),n.blob(0,.9,0,g*.45,.8,g*.45,6,3,h,q(7181400)),n.frame()}const d=new Ye({vertexColors:!0,roughness:.92,metalness:0,side:Ee,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),u=new Jt(Wh(n.build()),d);u.receiveShadow=!0,u.name="roads";const f=el(new Wn({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})),m=new Jt(Wh(s.build()),f);m.name="road-markings";const v=new Ie;return v.add(u,m),{group:v,index:r,paths:o}}function Wh(i){return i.deleteAttribute("glow"),i}function f_(i,t,e,n,s,r){const o=2*(i*(n-r)+e*(r-t)+s*(t-n));if(Math.abs(o)<.001)return null;const a=i*i+t*t,l=e*e+n*n,c=s*s+r*r,h=(a*(n-r)+l*(r-t)+c*(t-n))/o,d=(a*(s-e)+l*(i-s)+c*(e-i))/o;return{x:h,z:d,r:Math.hypot(i-h,t-d)}}const Ns=-36,d_=170,p_=`
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
`,Us=4,Xh=4,m_=`
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
          }`,g_=`
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
        }`;function x_(i,t,e,n,s={}){const{nx:r,nz:o}=i,a=new Float32Array(r*o*3),l=new Float32Array(r*o*3),c=new Float32Array(r*o*2);for(let x=0;x<o;x++)for(let b=0;b<r;b++){const w=x*r+b,A=i.xMin+b*i.dx,C=i.zMin+x*i.dz;a[w*3]=A,a[w*3+1]=i.y[w],a[w*3+2]=C,c[w*2]=(A+i.sizeX/2)/i.sizeX,c[w*2+1]=1-(C+i.sizeZ/2)/i.sizeZ;const L=i.y[x*r+Math.max(b-1,0)],B=i.y[x*r+Math.min(b+1,r-1)],P=i.y[Math.max(x-1,0)*r+b],O=i.y[Math.min(x+1,o-1)*r+b],H=(B-L)/(2*i.dx),k=(O-P)/(2*i.dz),$=Math.hypot(H,1,k);l[w*3]=-H/$,l[w*3+1]=1/$,l[w*3+2]=-k/$}const h=new Uint32Array((r-1)*(o-1)*6);let d=0;for(let x=0;x<o-1;x++)for(let b=0;b<r-1;b++){const w=x*r+b,A=w+1,C=w+r,L=C+1;h[d++]=w,h[d++]=C,h[d++]=A,h[d++]=A,h[d++]=C,h[d++]=L}const u=new Ae;u.setAttribute("position",new Pe(a,3)),u.setAttribute("normal",new Pe(l,3)),u.setAttribute("uv",new Pe(c,2)),u.setIndex(new Pe(h,1)),u.computeBoundingSphere();const f=new Ye({map:t,roughness:.96,metalness:0}),m=new ys(new Uint8Array([128,128,128,255]),1,1);m.needsUpdate=!0;const v=Us+Xh,p=Array.from({length:v},()=>({value:m})),g=Array.from({length:v},()=>({value:new Me(0,0,1,1)})),_=Array.from({length:v},()=>({value:0})),M={set(x,b,w){p[x].value=b??m,_[x].value=b?1:0,w&&g[x].value.set(...w)}},y=Array.from({length:v},(x,b)=>b);f.onBeforeCompile=x=>{x.uniforms.uTide=e,x.uniforms.uJitter={value:new Bt(.6/i.sizeX,.6/i.sizeZ)};for(const b of y)x.uniforms[`uDetail${b}`]=p[b],x.uniforms[`uDetailRect${b}`]=g[b],x.uniforms[`uDetailOn${b}`]=_[b];x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform float uTide;
uniform vec2 uJitter;
${y.map(b=>`uniform sampler2D uDetail${b};
uniform vec4 uDetailRect${b};
uniform float uDetailOn${b};`).join(`
`)}
${p_}`).replace("#include <map_fragment>",`
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
        ${g_}
        ${s.closeUp?m_:""}
        {
          float nearFade = 1.0 - smoothstep(300.0, 1600.0, camDist);
          float grain = invNoise(vWPos.xz * 0.85) * 0.55 + invNoise(vWPos.xz * 0.21) * 0.45;
          diffuseColor.rgb *= mix(1.0, 0.84 + 0.32 * grain, nearFade * (1.0 - 0.8 * sharp));
          float above = vWPos.y / ${i.vex.toFixed(2)} - uTide;
          float wet = smoothstep(0.45, 0.03, above);
          diffuseColor.rgb *= mix(1.0, 0.76, wet);
        }`)},f.customProgramCacheKey=()=>`town-terrain-${i.vex}-${s.closeUp?1:0}`;const S=new Jt(u,f);S.receiveShadow=!0,S.name="terrain";const E=new Ie;return E.add(S,v_(i),M_(i,n)),E.userData.detail=M,E}function __(i){const t=[];for(let e=0;e<i.nx;e++)t.push([i.xMin+e*i.dx,i.zMin]);for(let e=1;e<i.nz;e++)t.push([i.xMax,i.zMin+e*i.dz]);for(let e=i.nx-2;e>=0;e--)t.push([i.xMin+e*i.dx,i.zMax]);for(let e=i.nz-2;e>=1;e--)t.push([i.xMin,i.zMin+e*i.dz]);return t}function v_(i){const t=__(i),e=t.length,n=[],s=[],r=[],o=new Rt(9074780),a=new Rt(6180669),l=new Rt(3813673),c=[[0,o,a],[1,a,l]];for(let u=0;u<e;u++){const[f,m]=t[u],[v,p]=t[(u+1)%e],g=i.yAt(f,m),_=i.yAt(v,p),M=v-f,y=p-m,S=Math.hypot(M,y)||1,E=-y/S*-1,x=M/S*-1;for(const[b,w,A]of c){const L=b===0?g:g-6,B=b===0?g-6:Ns,P=b===0?_:_-6,O=b===0?_-6:Ns;n.push(f,L,m,v,P,p,v,O,p,f,L,m,v,O,p,f,B,m);for(const H of[w,w,A,w,A,A])s.push(H.r,H.g,H.b);for(let H=0;H<6;H++)r.push(E,0,x)}}const h=new Ae;h.setAttribute("position",new re(n,3)),h.setAttribute("normal",new re(r,3)),h.setAttribute("color",new re(s,3));const d=new Jt(h,new Ye({vertexColors:!0,roughness:1,side:Ee}));return d.name="skirt",d}function M_(i,t){const e=new Ie,n=t.scale??1,s=d_*n,r=i.xMax-i.xMin+s*2,o=i.zMax-i.zMin+s*2,a=190*n,l=(i.xMin+i.xMax)/2,c=(i.zMin+i.zMax)/2,h=new Jt(new vi(r,a,o),new Ye({color:1779245,roughness:.75,metalness:.1}));h.position.set(l,Ns-a/2,c),h.receiveShadow=!0,e.add(h);const d=document.createElement("canvas");d.width=2048,d.height=160;const u=d.getContext("2d");u.fillStyle="#1b262d",u.fillRect(0,0,d.width,d.height),u.fillStyle="#e9d9a6",u.textBaseline="middle",u.font="600 78px 'Space Grotesk', system-ui, sans-serif",u.fillText(t.title,40,84);const f=u.measureText(t.title).width;u.fillStyle="#9fb4bd",u.font="400 42px 'Space Grotesk', system-ui, sans-serif",u.fillText(t.subtitle,40+f+46,88);const m=new Ar(d);m.colorSpace=Te,m.anisotropy=8;const v=1700*n,p=new Jt(new li(v,v*(d.height/d.width)),new Wn({map:m,toneMapped:!1}));p.position.set(l-r/2+v/2+110*n,Ns-a/2,c+o/2+.6),e.add(p);const g=document.createElement("canvas");g.width=g.height=256;const _=g.getContext("2d");_.fillStyle="#e9d9a6",_.beginPath(),_.moveTo(128,18),_.lineTo(176,150),_.lineTo(128,122),_.lineTo(80,150),_.closePath(),_.fill(),_.font="700 86px 'Space Grotesk', system-ui, sans-serif",_.textAlign="center",_.fillText("N",128,240);const M=new Ar(g);M.colorSpace=Te;const y=new Jt(new li(130*n,130*n),new Wn({map:M,transparent:!0,toneMapped:!1}));return y.rotation.x=-Math.PI/2,y.position.set(i.xMax+s/2,Ns+.6,i.zMin+120*n),e.add(y),e}const ll=128,S_=`
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
`;class y_{constructor(t){it(this,"jobs",new Map);it(this,"order",[]);it(this,"nextId",1);it(this,"worker");it(this,"onPage");it(this,"longest",0);it(this,"pieces",0);this.renderer=t,this.onPage=typeof Worker>"u"||new URLSearchParams(window.location.search).get("tileworker")==="0"}get busy(){return this.order.length>0}load(t,e=1,n=!1){return new Promise((s,r)=>{const o=this.nextId++;this.jobs.set(o,{url:t,anisotropy:e,data:n,width:0,height:0,strips:[],cut:!1,sent:0,resolve:s,reject:r}),this.order.push(o);const a=new URL(t,document.baseURI).href;this.onPage?this.cutOnPage(o,a):this.cutOnWorker(o,a)})}cutOnWorker(t,e){try{this.worker||(this.worker=new Worker(URL.createObjectURL(new Blob([S_],{type:"text/javascript"}))),this.worker.onmessage=n=>{const s=n.data,r=this.jobs.get(s.id);r&&(s.error==="unsupported"?(this.onPage=!0,this.cutOnPage(s.id,new URL(r.url,document.baseURI).href)):s.error?r.failed=new Error(s.error):s.done?r.cut=!0:s.data?r.strips.push({y:s.y,h:s.h,data:new Uint8Array(s.data)}):(r.width=s.width,r.height=s.height))},this.worker.onerror=()=>{this.onPage=!0,this.worker=void 0;for(const[n,s]of this.jobs)!s.width&&!s.failed&&this.cutOnPage(n,new URL(s.url,document.baseURI).href)}),this.worker.postMessage({id:t,url:e,rows:ll})}catch{this.onPage=!0,this.cutOnPage(t,e)}}async cutOnPage(t,e){const n=this.jobs.get(t);if(n)try{const s=await fetch(e);if(!s.ok)throw new Error(`HTTP ${s.status}`);const r=await createImageBitmap(await s.blob(),{imageOrientation:"flipY",premultiplyAlpha:"none",colorSpaceConversion:"none"});n.width=r.width,n.height=r.height;for(let o=0;o<r.height;o+=ll){const a=Math.min(ll,r.height-o),l=await createImageBitmap(r,0,o,r.width,a);if(!this.jobs.has(t))return l.close();n.strips.push({y:o,h:a,data:l})}r.close(),n.cut=!0}catch(s){n.failed=s instanceof Error?s:new Error(String(s))}}step(){var o;const t=this.order[0];if(t===void 0)return!1;const e=this.jobs.get(t);if(e.failed)return this.finish(t),(o=e.tex)==null||o.dispose(),e.reject(e.failed),this.busy;if(!e.width)return!0;const n=performance.now(),s=this.renderer.getContext(),r=this.renderer.state;if(e.tex){const a=this.renderer.properties.get(e.tex).__webglTexture;r.activeTexture(s.TEXTURE0),r.bindTexture(s.TEXTURE_2D,a);const l=e.strips.shift();l?(r.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE),l.data instanceof Uint8Array?s.texSubImage2D(s.TEXTURE_2D,0,0,l.y,e.width,l.h,s.RGBA,s.UNSIGNED_BYTE,l.data):(s.texSubImage2D(s.TEXTURE_2D,0,0,l.y,e.width,l.h,s.RGBA,s.UNSIGNED_BYTE,l.data),l.data.close()),e.sent+=l.h):e.cut&&e.sent>=e.height&&(s.generateMipmap(s.TEXTURE_2D),this.finish(t),e.resolve(e.tex))}else{const a=new ys(null,e.width,e.height,dn,je);a.colorSpace=e.data?Fn:Te,a.wrapS=a.wrapT=hn,a.magFilter=We,a.minFilter=En,a.generateMipmaps=!0,a.flipY=!1,a.anisotropy=e.anisotropy,a.source.dataReady=!1,a.needsUpdate=!0,this.renderer.initTexture(a),e.tex=a}return this.pieces++,this.longest=Math.max(this.longest,performance.now()-n),this.busy}finish(t){this.jobs.delete(t),this.order=this.order.filter(e=>e!==t)}dispose(){var t,e;(t=this.worker)==null||t.terminate();for(const n of this.jobs.values()){(e=n.tex)==null||e.dispose();for(const s of n.strips)s.data instanceof Uint8Array||s.data.close()}this.jobs.clear(),this.order=[]}}const b_=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,E_=`
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
}`;function w_(i,t){const e=i.w*i.h,n=new Uint16Array(e*2);for(let f=0;f<e;f++)n[f*2]=bc.toHalfFloat(i.raw[f]),n[f*2+1]=bc.toHalfFloat(i.exposure[f]);const s=new ys(n,i.w,i.h,ni,fn);s.minFilter=s.magFilter=We,s.wrapS=s.wrapT=hn,s.needsUpdate=!0;const r={tField:{value:s},uSize:{value:new Bt(i.sizeX,i.sizeZ)},uTide:t,uTime:{value:0},uSunDir:{value:new Q(.4,.8,.3).normalize()},uSunColor:{value:new Rt(16773848)},uShallow:{value:new Rt(7129789)},uDeep:{value:new Rt(937848)},uSky:{value:new Rt(12573938)},uFoam:{value:1}},o=new Xn({uniforms:r,vertexShader:b_,fragmentShader:E_,transparent:!0,depthWrite:!1}),a=new li(i.xMax-i.xMin,i.zMax-i.zMin);a.rotateX(-Math.PI/2);const l=new Jt(a,o);l.position.set((i.xMin+i.xMax)/2,t.value*i.vex,(i.zMin+i.zMax)/2),l.renderOrder=2,l.name="water";const c=new Jt(new Ae,new Wn({color:1929103,transparent:!0,opacity:.8,side:Ee,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));c.renderOrder=1,c.name="water-edge";const h=[];for(let f=0;f<i.nx;f++)h.push([i.xMin+f*i.dx,i.zMin]);for(let f=1;f<i.nz;f++)h.push([i.xMax,i.zMin+f*i.dz]);for(let f=i.nx-2;f>=0;f--)h.push([i.xMin+f*i.dx,i.zMax]);for(let f=i.nz-2;f>=1;f--)h.push([i.xMin,i.zMin+f*i.dz]);const d=h.map(([f,m])=>i.yAt(f,m)),u=f=>{t.value=f;const m=f*i.vex;l.position.y=m;const v=[],p=h.length;for(let _=0;_<p;_++){const M=(_+1)%p,y=d[_],S=d[M];if(y>=m&&S>=m)continue;const[E,x]=h[_],[b,w]=h[M],A=Math.min(y,m),C=Math.min(S,m);v.push(E,m,x,b,m,w,b,C,w,E,m,x,b,C,w,E,A,x)}c.geometry.dispose();const g=new Ae;g.setAttribute("position",new re(v,3)),c.geometry=g};return u(t.value),{mesh:l,skirt:c,uniforms:r,setTide:u}}function Vr(i){const t=i.length/2;let e={cx:0,cz:0,w:0,d:0,heading:0,area:1/0};for(let n=0;n<t;n++){const s=(n+1)%t;let r=i[s*2]-i[n*2],o=i[s*2+1]-i[n*2+1];const a=Math.hypot(r,o);if(a<.5)continue;r/=a,o/=a;let l=1/0,c=-1/0,h=1/0,d=-1/0;for(let f=0;f<t;f++){const m=i[f*2],v=i[f*2+1],p=m*r+v*o,g=-m*o+v*r;p<l&&(l=p),p>c&&(c=p),g<h&&(h=g),g>d&&(d=g)}const u=(c-l)*(d-h);if(u<e.area){const f=(l+c)/2,m=(h+d)/2;e={cx:f*r-m*o,cz:f*o+m*r,w:c-l,d:d-h,heading:Math.atan2(-o,r),area:u}}}return e}function T_(i,t){const e=i.length/2,n=tl(i)>0?1:-1,s=[];for(let r=0;r<e;r++){const o=(r+e-1)%e,a=(r+1)%e;let l=i[r*2]-i[o*2],c=i[r*2+1]-i[o*2+1],h=i[a*2]-i[r*2],d=i[a*2+1]-i[r*2+1];const u=Math.hypot(l,c)||1,f=Math.hypot(h,d)||1;l/=u,c/=u,h/=f,d/=f;const m=-c*n,v=l*n,p=-d*n,g=h*n;let _=m+p,M=v+g;const y=Math.hypot(_,M)||1;_/=y,M/=y;const S=t/Math.max(.4,_*m+M*v);s.push(i[r*2]+_*S,i[r*2+1]+M*S)}return s}function Wr(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Int16Array(e.buffer,0,e.length>>1)}async function qh(i){const t=new Uint8Array(i),e=new DataView(i);let n=8,s=0,r=0,o=0,a=0,l=0;const c=[];for(;n<t.length;){const v=e.getUint32(n),p=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]);if(p==="IHDR")s=e.getUint32(n+8),r=e.getUint32(n+12),o=t[n+16],a=t[n+17],l=t[n+20];else if(p==="IDAT")c.push(t.subarray(n+8,n+8+v));else if(p==="IEND")break;n+=12+v}if(o!==8||a!==2&&a!==6||l)throw new Error("Unsupported terrain image format");const h=a===2?3:4,d=new Blob(c).stream().pipeThrough(new DecompressionStream("deflate")),u=new Uint8Array(await new Response(d).arrayBuffer()),f=s*h,m=new Uint8Array(f*r);for(let v=0;v<r;v++){const p=u[v*(f+1)],g=v*(f+1)+1,_=v*f;for(let M=0;M<f;M++){const y=M>=h?m[_+M-h]:0,S=v>0?m[_-f+M]:0,E=M>=h&&v>0?m[_-f+M-h]:0;let x=u[g+M];if(p===1)x+=y;else if(p===2)x+=S;else if(p===3)x+=y+S>>1;else if(p===4){const b=Math.abs(S-E),w=Math.abs(y-E),A=Math.abs(y+S-2*E);x+=b<=w&&b<=A?y:w<=A?S:E}m[_+M]=x&255}}return{width:s,height:r,channels:h,data:m}}function A_(i,t,e){const n=i.width*i.height,s=new Float32Array(n);for(let r=0;r<n;r++)s[r]=(i.data[r*i.channels]<<8|i.data[r*i.channels+1])/t-e;return s}const yi=4,ln=7;function Yh(i){return i.colorSpace=Te,i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=En,i}async function R_(i,t,e){let n=0;const s=c=>t(++n/4,c);t(0,"Fetching map data");const[r,o,a]=await Promise.all([fetch(i.town,{signal:e}).then(c=>{if(!c.ok)throw new Error("Could not load the suburb data");return c.json()}).then(c=>(s("Streets and buildings"),c)),fetch(i.height,{signal:e}).then(c=>{if(!c.ok)throw new Error("Could not load the terrain");return c.arrayBuffer()}).then(qh).then(c=>(s("Terrain"),c)),new Yc().loadAsync(i.ground).then(c=>(s("Ground texture"),c))]),l=r.meta;return s("Building the model"),{town:{...r,buildings:Wr(r.buildings),cars:Wr(r.cars),trees:Wr(r.trees),fences:r.fences?Wr(r.fences):new Int16Array(0)},heights:A_(o,l.heightScale,l.heightOffset),ground:Yh(a)}}async function C_(i){return Yh(await new Yc().loadAsync(i))}const $h=[16052712,15327951,14673377,13621459,13095900,15129023,12174512,10990520,15786948,14273976,9413530,7307142].map(q),Kh=[10510922,9394760,12158570,13215107,10120021,13807756].map(q),Zh=[14276300,13224130,14999506,12567492,13682872,11909302,15328988].map(q),Jh=[13619916,12173748,14275778,10135200,9279388].map(q),P_=q(3163994),Qh=q(16053230),L_=q(11120304),D_=q(7300956),jh=q(12566714),Xr=.05,I_=0,Fs=1,Os=2,qr=new Rt;function tu(i,t,e){return qr.setRGB(i/255,t/255,e/255,Te),[qr.r,qr.g,qr.b]}function N_(i,t,e,n,s){const{cx:r,cz:o,hw:a,hd:l}=t,c=Nt(s,.88);if(a>=l){const h=a-l;i.quad(r-a,e,o+l,r+a,e,o+l,r+h,e+n,o,r-h,e+n,o,s),i.quad(r+a,e,o-l,r-a,e,o-l,r-h,e+n,o,r+h,e+n,o,s),i.tri(r+a,e,o+l,r+a,e,o-l,r+h,e+n,o,c),i.tri(r-a,e,o-l,r-a,e,o+l,r-h,e+n,o,c)}else{const h=l-a;i.quad(r+a,e,o+l,r+a,e,o-l,r,e+n,o-h,r,e+n,o+h,s),i.quad(r-a,e,o-l,r-a,e,o+l,r,e+n,o+h,r,e+n,o-h,s),i.tri(r-a,e,o+l,r+a,e,o+l,r,e+n,o+h,c),i.tri(r+a,e,o-l,r-a,e,o-l,r,e+n,o-h,c)}}function eu(i,t,e,n,s,r,o){const{cx:a,cz:l,hw:c,hd:h}=t;if(c>=h){const d=s*n/h;i.quad(a-c-s,e-d,l+h+s,a+c+s,e-d,l+h+s,a+c+s,e+n,l,a-c-s,e+n,l,r),i.quad(a+c+s,e-d,l-h-s,a-c-s,e-d,l-h-s,a-c-s,e+n,l,a+c+s,e+n,l,r),i.tri(a+c,e,l+h,a+c,e,l-h,a+c,e+n,l,o),i.tri(a-c,e,l-h,a-c,e,l+h,a-c,e+n,l,o)}else{const d=s*n/c;i.quad(a+c+s,e-d,l+h+s,a+c+s,e-d,l-h-s,a,e+n,l-h-s,a,e+n,l+h+s,r),i.quad(a-c-s,e-d,l-h-s,a-c-s,e-d,l+h+s,a,e+n,l+h+s,a,e+n,l-h-s,r),i.tri(a-c,e,l+h,a+c,e,l+h,a,e+n,l+h,o),i.tri(a+c,e,l-h,a-c,e,l-h,a,e+n,l-h,o)}}const U_=1,F_=2,Yr=q(1846090);function O_(i,t,e,n,s,r){const o=t.hw>=t.hd,a=(o?t.hd:t.hw)+s,l=(o?t.hw:t.hd)-(o?t.hd:t.hw)*.55,c=Math.min(Math.max(l,1.2),3.2),h=o?Math.cos(r)<0?1:-1:Math.sin(r)>0?1:-1,d=.28,u=.74,f=.1,m=h*a*(1-d),v=h*a*(1-u),p=e+n*d+f,g=e+n*u+f;o?h>0?i.quad(t.cx-c,p,t.cz+m,t.cx+c,p,t.cz+m,t.cx+c,g,t.cz+v,t.cx-c,g,t.cz+v,Yr):i.quad(t.cx+c,p,t.cz+m,t.cx-c,p,t.cz+m,t.cx-c,g,t.cz+v,t.cx+c,g,t.cz+v,Yr):h>0?i.quad(t.cx+m,p,t.cz+c,t.cx+m,p,t.cz-c,t.cx+v,g,t.cz-c,t.cx+v,g,t.cz+c,Yr):i.quad(t.cx+m,p,t.cz-c,t.cx+m,p,t.cz+c,t.cx+v,g,t.cz+c,t.cx+v,g,t.cz-c,Yr)}function nu(i,t,e){let n=!1;const s=i.length/2;for(let r=0,o=s-1;r<s;o=r++){const a=i[r*2],l=i[r*2+1],c=i[o*2],h=i[o*2+1];l>e!=h>e&&t<(c-a)*(e-l)/(h-l)+a&&(n=!n)}return n}function z_(i,t,e){const n=Math.max(.5,Math.max(t,e)/64),s=Math.max(1,Math.round(t/n)),r=Math.max(1,Math.round(e/n)),o=t/s,a=e/r,l=new Uint8Array(s*r);let c=0;for(let f=0;f<r;f++)for(let m=0;m<s;m++)nu(i,-t/2+(m+.5)*o,-e/2+(f+.5)*a)&&(l[f*s+m]=1,c++);if(!c)return null;const h=[],d=new Int32Array(s);let u=0;for(let f=0;f<3;f++){d.fill(0);let m=0,v=0,p=0,g=0,_=0;for(let S=0;S<r;S++){for(let x=0;x<s;x++)d[x]=l[S*s+x]?d[x]+1:0;const E=[];for(let x=0;x<=s;x++){const b=x<s?d[x]:0;for(;E.length&&d[E[E.length-1]]>=b;){const w=d[E.pop()],A=E.length?E[E.length-1]+1:0;w*(x-A)>m&&(m=w*(x-A),v=A,p=x-1,g=S-w+1,_=S)}E.push(x)}}const M=(p-v+1)*o,y=(_-g+1)*a;if(!m||M<2.4||y<2.4||f>0&&M*y<9)break;h.push({cx:-t/2+(v+p+1)/2*o,cz:-e/2+(g+_+1)/2*a,hw:M/2,hd:y/2}),u+=m;for(let S=g;S<=_;S++)l.fill(0,S*s+v,S*s+p+1)}return h.length&&u/c>=.7?h:null}function B_(i,t,e,n,s,r,o,a,l,c=0,h=!1,d=!1){const u=e.length/2;let f=1/0,m=-1/0,v=0,p=0;for(let k=0;k<u;k++){const $=t.yAt(e[k*2],e[k*2+1]);$<f&&(f=$),$>m&&(m=$),v+=e[k*2],p+=e[k*2+1]}v/=u,p/=u;const g=Math.min(m,Math.max(f,t.yAt(v,p)))+.1,_=Math.max(n,g+(o===Fs?2.1:2.4),m+1.5),M=_-g,y=Math.max(0,s-_),S=Math.abs(tl(e)),E=Vr(e),x=S/(E.w*E.d||1),b=Math.min(E.w,E.d)/2,[w,A,C]=r;let L=tu(w,A,C);const B=w>A*1.2&&w>C*1.35&&w>105;let P;o===Os?P=Zh[Math.floor(l()*Zh.length)]:o===Fs?P=l()<.45?ts(L,Qh,.35):Jh[Math.floor(l()*Jh.length)]:P=B&&l()<.6?Kh[Math.floor(l()*Kh.length)]:$h[Math.floor(l()*$h.length)],a||(P=ts(P,jh,.3),L=ts(L,jh,.3)),i.frame(0,g,0,0);const O=o===I_&&M>=4.4&&M<6.6?M-2.75:0;if(O?(i.walls(e,f-g-.3,O-.22,ts(Nt(P,.5),D_,.5)),i.walls(e,O-.22,O,Qh),i.walls(e,O,M,P)):i.walls(e,f-g-.3,M,P),y<.7||o===Os&&(y<1.3||x<.78))if(o===Os){i.cap(e,M-.05,L),i.walls(e,M-.05,M+.45,Nt(P,.96));const k=Math.min(5,Math.floor(S/350)),$=Math.cos(E.heading),X=Math.sin(E.heading);for(let z=0;z<k;z++){const G=(l()-.5)*E.w*.5,V=(l()-.5)*E.d*.5,ut=E.cx+G*$+V*X,Y=E.cz-G*X+V*$;i.box(ut-1.1,M,Y-.8,ut+1.1,M+.9,Y+.8,L_)}}else i.cap(e,M,L);else if(o===Os)i.frame(E.cx,g,E.cz,E.heading),eu(i,{cx:0,cz:0,hw:E.w/2,hd:E.d/2},M,Math.min(y,b*.45),.3,L,P);else{const k=Math.cos(E.heading),$=Math.sin(E.heading);let X;if(x>=.86)X=[{cx:0,cz:0,hw:E.w/2,hd:E.d/2}];else{const z=[];for(let G=0;G<u;G++){const V=e[G*2]-E.cx,ut=e[G*2+1]-E.cz;z.push(V*k-ut*$,V*$+ut*k)}X=z_(z,E.w,E.d)}if(X){i.cap(e,M-.02,Nt(L,.9)),i.frame(E.cx,g,E.cz,E.heading);const z=Math.min(X[0].hw,X[0].hd),G=Math.min(Math.max(y,.6),z*.95),V=o===Fs?.2:.4;X.forEach((ut,Y)=>{const at=Math.min(ut.hw,ut.hd),ct=Y===0?G:Math.max(.4,G*at/z),mt=l()<(o===Fs?.7:.36),pt=X.length===1&&(c===F_||c!==U_&&mt);pt?eu(i,ut,M,ct,V,L,P):N_(i,{cx:ut.cx,cz:ut.cz,hw:ut.hw+V,hd:ut.hd+V},M,ct*(at+V)/at,L),Y===0&&h&&!d&&O_(i,ut,M,pt?ct:ct*(at+V)/at,pt?0:V,E.heading)})}else{const z=T_(e,Math.min(2.4,Math.sqrt(S)*.2)),G=Math.min(y,1.6);for(let V=0;V<u;V++){const ut=(V+1)%u;i.quad(e[V*2],M,e[V*2+1],e[ut*2],M,e[ut*2+1],z[ut*2],M+G,z[ut*2+1],z[V*2],M+G,z[V*2+1],L)}i.cap(z,M+G,Nt(L,1.04))}}if(o!==Fs&&S<2500&&!d){const k=O?1:Math.min(12,Math.max(1,Math.round(M/3))),$=o===Os?4.4:3.4;for(let X=0;X<u;X++){const z=(X+1)%u,G=e[X*2],V=e[X*2+1],ut=e[z*2],Y=e[z*2+1],at=Math.hypot(ut-G,Y-V);if(at<3.2)continue;let ct=-(Y-V)/at,mt=(ut-G)/at;ct*((G+ut)/2-v)+mt*((V+Y)/2-p)<0&&(ct=-ct,mt=-mt);const pt=Math.atan2(ct,mt),Ct=(ut-G)*Math.cos(pt)-(Y-V)*Math.sin(pt);i.frame(Ct>0?G:ut,g,Ct>0?V:Y,pt);const Kt=Math.floor(at/$);for(let st=0;st<k;st++){const dt=O+st*3+.9;if(dt+1.3>M-.2)break;for(let At=0;At<Kt;At++){const Ft=(At+.5)/Kt*at;i.quad(Ft-.8,dt,Xr,Ft+.8,dt,Xr,Ft+.8,dt+1.3,Xr,Ft-.8,dt+1.3,Xr,P_,l()<.45?1:0)}}}}i.frame()}function k_(i,t,e=[],n=()=>!1){const s=new Ie;s.name="buildings";const r=qn(),o=420,a=i.buildings,l=e.map(()=>{}),c=v=>{const p=a[v],g=new Array(p*2);for(let _=0;_<p*2;_++)g[_]=a[v+ln+_]/10;return g},h=new Map;let d=0;for(let v=0;v<a.length;v+=ln+a[v]*2){const p=a[v+ln]/10,g=a[v+ln+1]/10;if(n(p,g))continue;const _=e.findIndex(([S,E],x)=>!l[x]&&Math.abs(S-p)<60&&Math.abs(E-g)<60&&nu(c(v),S,E));if(_>=0){l[_]={poly:c(v),eave:a[v+1]/10,ridge:a[v+2]/10,roof:tu(a[v+3],a[v+4],a[v+5])},d++;continue}const M=`${Math.floor(p/o)}:${Math.floor(g/o)}`;let y=h.get(M);y||h.set(M,y=[]),y.push(v,d++)}let u=0;const f=[];for(const v of h.values()){const p=M=>{const y=new se;for(let E=0;E<v.length;E+=2){const x=v[E];B_(y,t,c(x),a[x+1]/10,a[x+2]/10,[a[x+3],a[x+4],a[x+5]],a[x+6]&3,(a[x+6]&4)!==0,Dn(v[E+1]*7919+13),a[x+6]>>3&3,(a[x+6]&32)!==0,M)}M||(u+=y.vertexCount/3);const S=new Jt(y.build(),r);return S.receiveShadow=!0,S.geometry.computeBoundingSphere(),S},g=p(!1),_=p(!0);g.castShadow=!0,_.visible=!1,f.push({full:g,plain:_}),s.add(g,_)}return{group:s,count:d,triangles:u,reserved:l,cull:(v,p,g,_)=>{for(const{full:M,plain:y}of f){const S=M.geometry.boundingSphere,E=Math.hypot(Math.max(0,Math.hypot(S.center.x-v,S.center.z-g)-S.radius),S.center.y-p)<_;M.visible=E,y.visible=!E}}}}const $r=[{id:"6-beaudesert",house:[-27.5256631,153.0234391],street:[-27.5256287,153.0231545],lot:[[-27.5255518,153.0232401],[-27.5256698,153.0239981],[-27.5258215,153.0239682],[-27.525709,153.0231799]],roof:{ridgeBack:.62,frontGable:.83},walls:15261900,trim:16184558,path:[[-27.5256352,153.0232183],[-27.5256631,153.0233586]],driveway:[[-27.5256955,153.0231869],[-27.5257016,153.0232912],[-27.5257188,153.0233652],[-27.5257249,153.0234027]],fences:[{kind:"picket",height:1.05,pts:[[-27.5255562,153.0232457],[-27.5256803,153.0231991]],gate:[-27.5256352,153.0232168]},{kind:"paling",height:1,pts:[[-27.5255562,153.0232457],[-27.5255775,153.0233869]]},{kind:"paling",height:1.6,pts:[[-27.5255775,153.0233869],[-27.5256682,153.023989]]},{kind:"paling",height:1.2,pts:[[-27.5257208,153.0232735],[-27.525739,153.0234028]]},{kind:"paling",height:1.6,pts:[[-27.525739,153.0234028],[-27.525818,153.0239647]]},{kind:"paling",height:1.7,pts:[[-27.5256682,153.023989],[-27.525818,153.0239647]]}],clothesline:[-27.5256955,153.0236194],planters:[{at:[-27.5256844,153.0235368],along:1,across:2},{at:[-27.5257603,153.0236432],along:1.4,across:.8},{at:[-27.5257644,153.023671],along:1.4,across:.8},{at:[-27.5257669,153.0236964],along:1.4,across:.8}],beds:[{at:[-27.5255689,153.0232533],r:.9}],shrubs:[[-27.5256793,153.0232558],[-27.5256803,153.0232811],[-27.5256768,153.0232963]]}],G_=q(3163994),iu=q(13815234),H_=q(2828068),su=q(14867920),Kr=q(10126440),V_=q(9405814),ru=q(10133668),W_=q(4151915),ou=q(9077624),X_=q(12894648),q_=q(10721922),au=q(7575375),lu=q(7904595),cu=q(7033664),cl=q(4157490),hl=q(8368216),Y_=q(5062451),$_=2.75,hu=.45;function Zr(i,t,e,n){const s=t[3]-t[0],r=t[4]-t[1],o=t[5]-t[2],a=t[6]-t[0],l=t[7]-t[1],c=t[8]-t[2];let h=r*c-o*l,d=s*l-r*a;const u=Math.hypot(h,d)||1;h=h/u*e,d=d/u*e,i.quad(t[0]+h,t[1],t[2]+d,t[3]+h,t[4],t[5]+d,t[6]+h,t[7],t[8]+d,t[9]+h,t[10],t[11]+d,n),i.quad(t[9]-h,t[10],t[11]-d,t[6]-h,t[7],t[8]-d,t[3]-h,t[4],t[5]-d,t[0]-h,t[1],t[2]-d,n)}function uu(i,t,e,n,s,r){const o=[e[0][0],e[0][1]];for(let c=1;c<e.length;c++){const[h,d]=e[c-1],[u,f]=e[c],m=Math.max(1,Math.ceil(Math.hypot(u-h,f-d)/1.2));for(let v=1;v<=m;v++)o.push(h+(u-h)*v/m,d+(f-d)*v/m)}const a=o.length/2;let l=null;for(let c=0;c<a;c++){const h=Math.max(0,c-1),d=Math.min(a-1,c+1);let u=o[d*2]-o[h*2],f=o[d*2+1]-o[h*2+1];const m=Math.hypot(u,f)||1;u/=m,f/=m;const v=o[c*2]+f*n,p=o[c*2+1]-u*n,g=o[c*2]-f*n,_=o[c*2+1]+u*n,M=[v,t.yAt(v,p)+s,p,g,t.yAt(g,_)+s,_];l&&i.quad(l[0],l[1],l[2],l[3],l[4],l[5],M[3],M[4],M[5],M[0],M[1],M[2],r),l=M}}function K_(i,t,[e,n,s,r],o){const a=Math.hypot(n[0]-e[0],n[1]-e[1]),l=Math.hypot(r[0]-e[0],r[1]-e[1]),c=Math.ceil(a/.8),h=Math.ceil(l/1.5),d=(u,f)=>{const m=e[0]+(n[0]-e[0])*u,v=e[1]+(n[1]-e[1])*u,p=r[0]+(s[0]-r[0])*u,g=r[1]+(s[1]-r[1])*u,_=m+(p-m)*f,M=v+(g-v)*f;return[_,t.yAt(_,M)+o,M]};for(let u=0;u<c;u++)for(let f=0;f<h;f++){const m=d(u/c,f/h),v=d(u/c,(f+1)/h),p=d((u+1)/c,(f+1)/h),g=d((u+1)/c,f/h);(v[0]-m[0])*(g[2]-m[2])-(v[2]-m[2])*(g[0]-m[0])<0?i.quad(m[0],m[1],m[2],v[0],v[1],v[2],p[0],p[1],p[2],g[0],g[1],g[2],u%2?au:lu):i.quad(m[0],m[1],m[2],g[0],g[1],g[2],p[0],p[1],p[2],v[0],v[1],v[2],u%2?au:lu)}}function Jr(i,t,e,n,s,r,o){const a=Math.hypot(n[0]-e[0],n[1]-e[1]);if(a<.3)return;const l=Math.max(1,Math.round(a/2.4)),c=Math.atan2(n[0]-e[0],n[1]-e[1]),h=r==="picket"?o:V_,d=m=>{const v=e[0]+(n[0]-e[0])*m,p=e[1]+(n[1]-e[1])*m;return[v,t.yAt(v,p),p]};for(let m=0;m<=l;m++){const[v,p,g]=d(m/l);i.frame(v,p,g,c),i.box(-.06,0,-.06,.06,s+.1,.06,Nt(h,.92))}i.frame();const u=(m,v,p,g,_,M)=>{const y=d(m),S=d(v);Zr(i,[y[0],y[1]+p,y[2],S[0],S[1]+p,S[2],S[0],S[1]+g,S[2],y[0],y[1]+g,y[2]],M,_)};if(r==="paling"){for(let m=0;m<l;m++)u(m/l,(m+1)/l,.05,s,h,.02);return}for(const m of[.25,s-.2])u(0,1,m,m+.08,Nt(h,.95),.02);const f=Math.floor(a/.16);for(let m=0;m<f;m++)u((m+.2)/f,(m+.75)/f,.08,s,h,.035)}function Z_(i,t,e,n,s){i.frame(t,e,n,s),i.box(-.035,0,-.035,.035,2.05,.035,ru);for(const[r,o]of[[1,0],[0,1],[-1,0],[0,-1]]){const a=Math.abs(o)*.025,l=Math.abs(r)*.025;i.box(Math.min(0,r*2.1)-a,2,Math.min(0,o*2.1)-l,Math.max(0,r*2.1)+a,2.05,Math.max(0,o*2.1)+l,ru)}for(const r of[.8,1.4,2]){const o=[[r,0],[0,r],[-r,0],[0,-r]];for(let a=0;a<4;a++){const[l,c]=o[a],[h,d]=o[(a+1)%4],u=Math.hypot(h-l,d-c),f=-(d-c)/u*.015,m=(h-l)/u*.015;i.quad(l-f,2.06,c-m,l+f,2.06,c+m,h+f,2.06,d+m,h-f,2.06,d-m,q(15132386))}}i.frame()}function fu(i,t,e,n,s,r,o,a,l,c){const h=a-l,d=Math.max(2,Math.round(h/.185)),u=.27,f=d*u;for(let p=1;p<=d;p++){const g=a-h*p/d,_=t+n*u*(p-1),M=e+s*u*(p-1),y=t+n*u*p,S=e+s*u*p;i.box(Math.min(_,y,_+r,y+r),g-.05,Math.min(M,S,M+o,S+o),Math.max(_,y,_+r,y+r),g,Math.max(M,S,M+o,S+o),Kr)}const m=t+n*f,v=e+s*f;for(const p of[0,1]){const g=r*p,_=o*p;Zr(i,[t+g,a-.3,e+_,m+g,l-.3,v+_,m+g,l,v+_,t+g,a,e+_],.025,c),Zr(i,[t+g,a+.9,e+_,m+g,l+.9,v+_,m+g,l+.97,v+_,t+g,a+.97,e+_],.025,c);for(const M of[0,.5,1]){const y=t+g+n*f*M,S=e+_+s*f*M,E=a-h*M;i.box(y-.035,E,S-.035,y+.035,E+.95,S+.035,c,null)}}return[m+r/2,v+o/2]}function J_(i,t,e,n,s){const r=Vr(e.poly);let o=r.heading,a=r.w,l=r.d,c=-1/0;for(let st=0;st<4;st++){const dt=r.heading+st*Math.PI/2,At=Math.sin(dt)*(n[0]-r.cx)+Math.cos(dt)*(n[1]-r.cz);At>c&&(c=At,o=dt,a=st%2?r.d:r.w,l=st%2?r.w:r.d)}let h=1/0,d=-1/0;for(let st=0;st<e.poly.length;st+=2){const dt=t.yAt(e.poly[st],e.poly[st+1]);h=Math.min(h,dt),d=Math.max(d,dt)}const u=Math.min(d,Math.max(h,t.yAt(r.cx,r.cz))),f=Math.max(e.eave-u,2.6),m=Math.max(e.ridge-e.eave,.8),v=Math.max(.3,f-$_),p=a/2,g=l/2,_=p-hu,M=g-hu,y=q(s.walls),S=q(s.trim),E=e.roof,x=h-u-.3,b=Math.max(.16,d-u+.14);if(i.frame(r.cx,u,r.cz,o),i.box(-_,x,-M,_,b,M,ou,ou),v>1.2){i.box(-_+.3,b,-M+.3,_-.3,v-.3,M-.3,H_,null);const st=dt=>{const At=Math.max(2,Math.round(dt*2/2.2)+1);return Array.from({length:At},(Ft,yt)=>-dt+.1+(dt*2-.2)*yt/(At-1))};for(const dt of st(_))for(const At of[-M+.1,M-.1])i.box(dt-.1,x,At-.1,dt+.1,v-.28,At+.1,iu,null);for(const dt of st(M))for(const At of[-_+.1,_-.1])i.box(At-.1,x,dt-.1,At+.1,v-.28,dt+.1,iu,null);for(let dt=-_+.3;dt<_-.3;dt+=.22)for(const At of[M-.04,-M+.01])i.box(dt,b+.1,At,dt+.12,v-.3,At+.03,su,null);for(let dt=-M+.3;dt<M-.3;dt+=.22)for(const At of[_-.04,-_+.01])i.box(At,b+.1,dt,At+.03,v-.3,dt+.12,su,null)}i.box(-_-.03,v-.28,-M-.03,_+.03,v,M+.03,S,null);for(let st=v,dt=0;st<f-.01;st+=.28,dt++)i.box(-_,st,-M,_,Math.min(st+.28,f),M,dt%2?Nt(y,.955):y,null);for(const st of[-_,_])for(const dt of[-M,M])i.box(st-.07,v,dt-.07,st+.07,f,dt+.07,S,null);const w=(st,dt,At)=>i.frame(i.wx(st,dt),u,i.wz(st,dt),o+At),A=(st,dt,At)=>{const Ft=v+.95,yt=v+2.15;i.quad(st-dt/2,Ft,.04,st+dt/2,Ft,.04,st+dt/2,yt,.04,st-dt/2,yt,.04,G_,At?1:0),i.box(st-dt/2-.07,Ft-.07,0,st+dt/2+.07,Ft,.07,S),i.box(st-dt/2-.07,yt,0,st+dt/2+.07,yt+.07,.07,S);for(const ne of[st-dt/2-.07,st+dt/2,st-.025])i.box(ne,Ft,0,ne+(ne===st-.025?.05:.07),yt,.06,S,null);i.quad(st-dt/2-.15,yt+.12,.55,st+dt/2+.15,yt+.12,.55,st+dt/2+.15,yt+.42,.02,st-dt/2-.15,yt+.42,.02,Nt(E,.94))},C=st=>{i.quad(st-.45,v,.04,st+.45,v,.04,st+.45,v+2.05,.04,st-.45,v+2.05,.04,W_),i.box(st-.52,v+2.05,0,st+.52,v+2.12,.06,S)},L=[[-_,M,0,_*2],[_,M,Math.PI/2,M*2],[_,-M,Math.PI,_*2],[-_,-M,-Math.PI/2,M*2]],[B,P,O,H]=L,k=(st,dt)=>{i.frame(r.cx,u,r.cz,o),w(st[0],st[1],st[2]),dt(st[3]),i.frame(r.cx,u,r.cz,o)};k(B,st=>{C(1),A(st*.48,1.7,!0),A(st*.8,1.7,!1)});for(const st of[P,H])k(st,dt=>{for(let At=0;At<4;At++)A(dt*(.14+At*.24),1.4,At%2===(st===P?0:1))});k(O,st=>{A(st*.28,1.6,!1),A(st*.56,1.6,!0),C(st-1)});const $=-_+.15,X=-_+1.85,z=M+1.25;i.box($,v-.14,M,X,v,z,Kr);for(const st of[$+.05,X-.05])i.box(st-.05,0,z-.1,st+.05,v+2.3,z,S,null);i.box($,v+.12,z-.05,X,v+.98,z,S,null),i.box($,v+.12,M,$+.05,v+.98,z,S,null),i.quad($-.15,v+2.3,z+.2,X+.15,v+2.3,z+.2,X+.15,v+2.6,M,$-.15,v+2.6,M,Nt(E,.96));const G=fu(i,X,M+.12,1,0,0,1,v,.1,S),V=-_+.2,ut=-_+1.9,Y=-M-1.2;i.box(V,v-.14,Y,ut,v,-M,Kr);for(const st of[V+.05,ut-.05])i.box(st-.05,0,Y,st+.05,v+.98,Y+.1,S,null);i.box(V,v+.12,Y,V+.05,v+.98,-M,S,null),i.box(ut-.05,v+.12,Y,ut,v+.98,-M,S,null),i.box(-_+.1,f-.45,-M-1.4,_-1.4,f-.37,-M,Nt(E,.97),void 0,S),fu(i,V+.3,Y,0,-1,1,0,v,.1,S);const at=g-s.roof.ridgeBack*l,ct=f+m,mt=f+m*s.roof.frontGable,pt=g-s.roof.frontGable*(g-at);i.quad(-p,f-.02,g,-p,f-.02,-g,p,f-.02,-g,p,f-.02,g,S),i.tri(-p,f,g,0,mt,g,0,mt,pt,E),i.tri(p,f,g,0,mt,pt,0,mt,g,E),i.quad(-p,f,g,0,mt,pt,0,ct,at,-p,ct,at,E),i.quad(p,f,g,p,ct,at,0,ct,at,0,mt,pt,E),i.quad(-p,ct,at,p,ct,at,p,f,-g,-p,f,-g,E),i.tri(-_,f,M,_,f,M,0,mt,M,y),i.quad(-.3,mt-.75,M+.03,.3,mt-.75,M+.03,.3,mt-.4,M+.03,-.3,mt-.4,M+.03,Nt(y,.6)),i.tri(-_,f,M,-_,ct,at,-_,f,-M,y),i.tri(_,f,-M,_,ct,at,_,f,M,y);const Ct=(st,dt,At,Ft,yt,ne)=>Zr(i,[st,dt-.22,At,Ft,yt-.22,ne,Ft,yt-.03,ne,st,dt-.03,At],.02,S);Ct(-p,f,g,0,mt,g),Ct(0,mt,g,p,f,g);for(const st of[-p,p])Ct(st,f,g,st,ct,at),Ct(st,ct,at,st,f,-g);i.box(-p,f-.12,-g-.1,p,f,-g,S);const Kt=[i.wx(G[0],G[1]),i.wz(G[0],G[1])];return i.frame(),Kt}function Q_(i,t){const e=$r.flatMap((n,s)=>{const r=t[s];if(!r)return[];const o=Vr(r.poly),a=c=>Yn(i,c[0],c[1]),l=[o.cx,o.cz];return[{obb:o,lines:[[...n.path.map(a),l],n.driveway.map(a)]}]});return(n,s)=>{for(const{obb:r,lines:o}of e){if(Math.abs(n-r.cx)>80||Math.abs(s-r.cz)>80)continue;const a=Math.cos(r.heading),l=Math.sin(r.heading),c=n-r.cx,h=s-r.cz;if(Math.abs(c*a-h*l)<r.w/2+1&&Math.abs(c*l+h*a)<r.d/2+1)return!0;for(const d of o)for(let u=1;u<d.length;u++){const[f,m]=d[u-1],[v,p]=d[u],g=Math.max(0,Math.min(1,((n-f)*(v-f)+(s-m)*(p-m))/((v-f)**2+(p-m)**2||1)));if(Math.hypot(n-f-(v-f)*g,s-m-(p-m)*g)<1.8)return!0}}return!1}}function du(i){const t=$r.map(e=>e.lot.map(n=>Yn(i,n[0],n[1])));return(e,n)=>t.some(s=>{let r=!1,o=!1;for(let a=0,l=s.length-1;a<s.length;l=a++){const[c,h]=s[a],[d,u]=s[l];h>n!=u>n&&e<(d-c)*(n-h)/(u-h)+c&&(r=!r);const f=Math.max(0,Math.min(1,((e-c)*(d-c)+(n-h)*(u-h))/((d-c)**2+(u-h)**2||1)));Math.hypot(e-c-(d-c)*f,n-h-(u-h)*f)<2.5&&(o=!0)}return r||o})}function j_(i){return $r.map(t=>Yn(i,t.house[0],t.house[1]))}function tv(i,t,e){const n=new se,s=new se,r=h=>Yn(i,h[0],h[1]);$r.forEach((h,d)=>{const u=e[d];if(!u)return;const f=h.lot.map(r),m=q(h.trim),v=Math.atan2(f[1][0]-f[0][0],f[1][1]-f[0][1]);K_(s,t,f,.1);const p=J_(n,t,u,r(h.street),h);uu(s,t,[...h.path.map(r),p],.45,.16,X_);const g=h.driveway.map(r);for(const _ of[-.75,.75]){const M=g.map(([y,S],E)=>{const[x,b]=g[Math.max(0,E-1)],[w,A]=g[Math.min(g.length-1,E+1)],C=Math.hypot(w-x,A-b)||1;return[y+(A-b)/C*_,S-(w-x)/C*_]});uu(s,t,M,.28,.14,q_)}for(const _ of h.fences){const M=_.pts.map(r);for(let y=1;y<M.length;y++){const S=M[y-1],E=M[y];if(!_.gate){Jr(n,t,S,E,_.height,_.kind,m);continue}const x=r(_.gate),b=Math.hypot(E[0]-S[0],E[1]-S[1]),w=((x[0]-S[0])*(E[0]-S[0])+(x[1]-S[1])*(E[1]-S[1]))/(b*b),A=.5/b,C=P=>[S[0]+(E[0]-S[0])*P,S[1]+(E[1]-S[1])*P];Jr(n,t,S,C(w-A),_.height,_.kind,m),Jr(n,t,C(w+A),E,_.height,_.kind,m),Jr(n,t,C(w-A+.06/b),C(w+A-.06/b),_.height-.15,_.kind,m);const[L,B]=C(w+A+.35/b);n.frame(L,t.yAt(L,B),B,Math.atan2(E[0]-S[0],E[1]-S[1])),n.box(-.04,0,-.04,.04,1,.04,m,null),n.box(-.14,1,-.2,.14,1.22,.2,q(4872786)),n.frame()}}if(h.clothesline){const[_,M]=r(h.clothesline);Z_(n,_,t.yAt(_,M),M,v+Math.PI/4)}for(const _ of h.planters){const[M,y]=r(_.at);n.frame(M,t.yAt(M,y),y,v),n.box(-_.across/2,0,-_.along/2,_.across/2,.4,_.along/2,Kr,Y_);for(let S=0;S<3;S++)n.blob((S-1)*_.across/3.4,.5,(S%2-.5)*_.along*.4,.22,.2,.22,5,3,cl,hl);n.frame()}for(const _ of h.beds){const[M,y]=r(_.at);n.frame(M,t.yAt(M,y),y,0),n.cyl(0,.05,0,_.r,_.r,.12,10,cu,cu),n.blob(0,.55,0,_.r*.6,.5,_.r*.6,6,4,cl,hl),n.frame()}for(const _ of h.shrubs){const[M,y]=r(_);n.frame(M,t.yAt(M,y),y,0),n.blob(0,.32,0,.38,.36,.38,6,4,cl,hl),n.frame()}});const o=new Ie;o.name="detail";const a=new Jt(n.build(),qn());a.castShadow=!0,a.receiveShadow=!0;const l=s.build();l.deleteAttribute("glow");const c=new Jt(l,new Ye({vertexColors:!0,roughness:.95,metalness:0,side:Ee,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}));return c.receiveShadow=!0,c.name="detail-ground",o.add(c,a),{group:o,ground:c}}const pu=[9405814,8747884,10129796,7305836,13617332,6253414,9080716].map(q),Qr=1.6,mu=560;function ev(i,t,e){const n=new Ie;n.name="fences";const s=i.fences,r=new Map;for(let l=0;l+3<s.length;l+=4){const c=s[l]/10,h=s[l+1]/10,d=s[l+2]/10,u=s[l+3]/10,f=Math.hypot(d-c,u-h);if(f<1||e((c+d)/2,(h+u)/2))continue;const m=`${Math.floor(c/mu)}:${Math.floor(h/mu)}`;let v=r.get(m);v||r.set(m,v=new se);const p=pu[l/4%pu.length],g=Nt(p,.92),_=-(u-h)/f*.04,M=(d-c)/f*.04,y=Math.max(1,Math.ceil(f/5));let S=c,E=h,x=t.yAt(c,h);for(let b=1;b<=y;b++){const w=c+(d-c)*b/y,A=h+(u-h)*b/y,C=t.yAt(w,A);v.quad(S+_,x-.2,E+M,w+_,C-.2,A+M,w+_,C+Qr,A+M,S+_,x+Qr,E+M,p),v.quad(w-_,C-.2,A-M,S-_,x-.2,E-M,S-_,x+Qr,E-M,w-_,C+Qr,A-M,g),S=w,E=A,x=C}}const o=new Xc({vertexColors:!0});let a=0;for(const l of r.values()){a+=l.vertexCount/6;const c=l.build();c.deleteAttribute("glow");const h=new Jt(c,o);h.castShadow=!0,h.receiveShadow=!0,n.add(h)}return{group:n,count:a}}const gu=.05;class ul{constructor(t,e,n){it(this,"mesh");it(this,"current","");it(this,"level");it(this,"wet");it(this,"time",{value:0});it(this,"lower",{value:0});it(this,"loaded",new Map);this.hf=t,this.info=e,this.file=n;const{nx:s,nz:r}=t,o=s*r;this.level=new Float32Array(o),this.wet=new Uint8Array(o);const a=new Float32Array(o*3),l=new Float32Array(o*3);for(let d=0;d<r;d++)for(let u=0;u<s;u++){const f=d*s+u;a[f*3]=t.xMin+u*t.dx,a[f*3+1]=t.y[f],a[f*3+2]=t.zMin+d*t.dz,l[f*3+1]=1}const c=new Ae;c.setAttribute("position",new Pe(a,3)),c.setAttribute("normal",new Pe(l,3)),c.setAttribute("aLevel",new Pe(this.level,1)),c.setAttribute("aWet",new Pe(new Float32Array(o),1)),c.setIndex([]);const h=new Ye({color:16777215,roughness:.25,metalness:0,transparent:!0,depthWrite:!1});h.onBeforeCompile=d=>{d.uniforms.uTime=this.time,d.uniforms.uLower=this.lower,d.uniforms.uNight=es,d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
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
          if (vDepth < ${gu.toFixed(2)} || vWet < 0.35) discard;
          // pale and a little muddy where it is shallow, dark blue as it deepens, so it reads as water against the ground
          float deep = smoothstep(0.1, 3.0, vDepth);
          diffuseColor.rgb = mix(vec3(0.36, 0.60, 0.74), vec3(0.05, 0.18, 0.40), deep) * (1.0 - 0.6 * uNight);
          diffuseColor.a = mix(0.7, 0.93, smoothstep(0.1, 1.5, vDepth));`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          {
            float nearby = 1.0 - smoothstep(200.0, 1500.0, length(cameraPosition - vWPos));
            vec2 p = vWPos.xz * 0.12 + vec2(uTime * 0.07, uTime * 0.04);
            vec2 ripple = vec2(sin(p.x * 3.1 + sin(p.y * 2.3)), cos(p.y * 2.7 + sin(p.x * 1.9))) * 0.035 * nearby;
            normal = normalize((viewMatrix * vec4(ripple.x, 1.0, ripple.y, 0.0)).xyz);
          }`)},h.customProgramCacheKey=()=>"moorooka-flood-levels",this.mesh=new Jt(c,h),this.mesh.name="flood",this.mesh.renderOrder=40,this.mesh.frustumCulled=!1,this.mesh.visible=!1}static async load(t,e,n,s){const r=await fetch(e,{signal:s});if(!r.ok)throw new Error("Could not load the floods");return new ul(t,await r.json(),n)}async show(t,e){if(this.current=t,!t){this.mesh.visible=!1;return}let n=this.loaded.get(t);if(!n){const l=this.info.events.some(p=>p.id===t)?this.file(t):void 0;if(!l)throw new Error("This model has no such flood");const c=await fetch(l,{signal:e});if(!c.ok)throw new Error("Could not load that flood");const h=await qh(await c.arrayBuffer()),[d,u]=this.info.grid;if(h.width!==d||h.height!==u)throw new Error("That flood does not match this model");const{hf:f}=this,m=Math.round(f.dx/(f.sizeX/d)),v=f.nx*f.nz;n={level:new Float32Array(v),wet:new Uint8Array(v)};for(let p=0;p<f.nz;p++)for(let g=0;g<f.nx;g++){const _=(p*m*d+g*m)*h.channels;n.level[p*f.nx+g]=(h.data[_]<<8|h.data[_+1])/this.info.levelScale-this.info.levelOffset,n.wet[p*f.nx+g]=h.data[_+2]>127?1:0}this.loaded.set(t,n)}if(this.current!==t)return;const{nx:s,nz:r}=this.hf,o=this.mesh.geometry;this.level.set(n.level),this.wet.set(n.wet),o.getAttribute("aWet").array.set(n.wet),o.getAttribute("aLevel").needsUpdate=!0,o.getAttribute("aWet").needsUpdate=!0;const a=[];for(let l=0;l<r-1;l++)for(let c=0;c<s-1;c++){const h=l*s+c,d=h+1,u=h+s,f=u+1;n.wet[h]+n.wet[d]+n.wet[u]+n.wet[f]>0&&a.push(h,u,d,d,u,f)}o.setIndex(a),this.mesh.visible=!0}setLower(t){this.lower.value=Math.max(0,t)}surfaceAt(t,e,n=!1){const{hf:s}=this;if(!this.mesh.visible||!s.inside(t,e))return-1/0;const r=Math.round((e-s.zMin)/s.dz)*s.nx+Math.round((t-s.xMin)/s.dx);if(!this.wet[r])return-1/0;const o=this.level[r]-(n?0:this.lower.value);return o-s.y[r]>gu?o:-1/0}tick(t){this.time.value=t}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}const zs=q(9278358),fl=q(16053230),xu=q(3163994),nv=q(2054824),iv=q(16040479),_u=[15327951,3099196,2504783,8007210,3816770,13214282,5209226,11879727].map(q);function sv(i,t,e,n,s=()=>!1){const r=new se,o=Dn(41050),a=i.busStops??[];for(let u=0;u<a.length;u+=2){const f=a[u]/10,m=a[u+1]/10,v=e.nearest(f,m,30);if(!v||n(f,m))continue;let p=f-v.px,g=m-v.pz;const _=Math.hypot(p,g);_<.5?(p=-v.tz,g=v.tx):(p/=_,g/=_);const M=v.width/2+2.4,y=v.px+p*M,S=v.pz+g*M;if(r.frame(y,t.yAt(y,S),S,Math.atan2(-p,-g)),r.box(-2.3,0,.9,-2.2,2.6,1,zs,null),r.box(-2.5,2,.88,-2,2.6,1.02,nv),r.box(-2.5,1.86,.88,-2,2,1.02,iv),o()<.5){for(const E of[-1.7,1.7])r.box(E-.05,0,-.6,E+.05,2.35,-.5,zs,null);r.box(-1.9,2.35,-.8,1.9,2.45,.8,Nt(zs,.8)),r.box(-1.7,.5,-.62,1.7,2.1,-.58,xu,null),r.box(-1.3,.42,-.5,1.3,.5,-.1,q(10126440))}}for(const u of i.pitches){const f=u.p.map(_=>_/10),m=Vr(f);if(n(m.cx,m.cz))continue;const v=m.w>=m.d?m.w:m.d,p=Math.min(m.w,m.d),g=m.w>=m.d?m.heading+Math.PI/2:m.heading;if(r.frame(m.cx,t.yAt(m.cx,m.cz),m.cz,g),u.t==="Oval"&&/Football/.test(u.s)&&v>60)for(const _ of[-1,1]){const M=_*(v/2-4);for(const y of[-2.8,2.8])r.cyl(y,0,M,.08,.08,8,5,fl);r.box(-2.8,2.9,M-.05,2.8,3.02,M+.05,fl)}else if(u.s==="Tennis"){r.box(-p/2+.6,0,-.03,p/2-.6,.95,.03,q(2764595)),r.box(-p/2+.6,.95,-.04,p/2-.6,1.02,.04,fl);for(const _ of[-p/2+.6,p/2-.6])r.cyl(_,0,0,.05,.05,1.07,5,zs)}else if(u.s==="Netball")for(const _ of[-1,1]){const M=_*(v/2-.3);r.cyl(0,0,M,.05,.05,3.05,5,zs),r.box(-.2,3.02,M-_*.42,.2,3.07,M,q(13644844))}}r.frame();const[,l]=Yn(i.meta,-27.53,153.0245),[,c]=Yn(i.meta,-27.5346,153.0245),h=i.buildings;for(let u=0;u<h.length;u+=ln+h[u]*2){const f=h[u],m=h[u+ln+1]/10;if(m<l||m>c)continue;let v=0,p=0;for(let _=0;_<f;_++)v+=h[u+ln+_*2]/10,p+=h[u+ln+_*2+1]/10;v/=f,p/=f;const g=_u[Math.floor(o()*_u.length)];for(let _=0;_<f;_++){const M=(_+1)%f,y=h[u+ln+_*2]/10,S=h[u+ln+_*2+1]/10,E=h[u+ln+M*2]/10,x=h[u+ln+M*2+1]/10,b=Math.hypot(E-y,x-S);if(b<5)continue;const w=(y+E)/2,A=(S+x)/2,C=e.nearest(w,A,16);if(!C||i.names[C.name]!=="Beaudesert Road"||n(w,A)||s(w,A))continue;let L=-(x-S)/b,B=(E-y)/b;if(L*(w-v)+B*(A-p)<0&&(L=-L,B=-B),(C.px-w)*L+(C.pz-A)*B<C.dist*.6)continue;const P=Math.atan2(L,B),O=(E-y)*Math.cos(P)-(x-S)*Math.sin(P),H=Math.max(t.yAt(y,S),t.yAt(E,x))+.1;r.frame(O>0?y:E,H,O>0?S:x,P);const k=Math.min(2.6,Math.max(1.2,C.dist-C.width/2-.6));r.quad(.4,.4,.06,b-.4,.4,.06,b-.4,2.7,.06,.4,2.7,.06,xu,.9),r.box(.2,3,0,b-.2,3.16,k,g,Nt(g,.9),Nt(g,.75)),r.box(.2,2.75,k-.08,b-.2,3.3,k,Nt(g,1.15),null)}}r.frame();const d=new Jt(r.build(),qn());return d.castShadow=!0,d.receiveShadow=!0,d.name="furniture",d}const ss=q(12170925),vu=q(13091768),rv=[.34,.3,.26,.22],jr=.22,ov=.13,av=1.1,dl=1.3,Mu=16;function lv(i,t,e,n,s={}){const r=new Map,o=new Map,a=(S,E)=>`${Math.floor((E+e.sizeZ/2)/e.sizeZ*Mu)}_${Math.floor((S+e.sizeX/2)/e.sizeX*Mu)}`,l=S=>(E,x)=>{const b=a(E,x);let w=S.get(b);return w||S.set(b,w=new se),w},c=l(r),h=l(o),d=(S,E,x)=>!e.inside(S,E,4)||n(S,E)?!1:t.clear(S,E,14,x);i.forEach((S,E)=>{if(S.cls>3||S.flags&(Hr|Is))return;const x=S.pts.length/3,b=S.width/2,w=rv[S.cls],A=s[String(S.index)];for(const C of[-1,1]){const L=A?A[C>0?0:1]/10:NaN,B=A?L>0:S.cls<=2||(E%2?1:-1)===C,P=A?Math.max(jr+.1,L-dl/2):jr+av;let O=null;for(let H=0;H<x;H++){const k=S.pts[H*3],$=S.pts[H*3+2],X=Math.max(H-1,0),z=Math.min(H+1,x-1);let G=S.pts[z*3]-S.pts[X*3],V=S.pts[z*3+2]-S.pts[X*3+2];const ut=Math.hypot(G,V)||1;G/=ut,V/=ut;const Y=-V*C,at=G*C,ct=Lt=>[k+Y*(b+Lt),$+at*(b+Lt)],[mt,pt]=ct(0),[Ct,Kt]=ct(jr),[st,dt]=ct(jr/2),At=e.yAt(mt,pt)+w,Ft=e.yAt(Ct,Kt),yt=[mt,At,pt,Ct,Math.max(At,Ft+.05)+ov,Kt,Ft],ne=d(st,dt,.02),[Re,oe]=ct(P),[we,he]=ct(P+dl),[ve,Oe]=ct(P+dl/2),ue=[Re,e.yAt(Re,oe)+.09,oe,we,e.yAt(we,he)+.09,he],K=B&&d(ve,Oe,.6)&&d(we,he,.3);if(O){const Lt=O;if(ne&&Lt.kerb){const Qt=h(st,dt),Yt=yt[4],_t=Lt.k[4];C>0?(Qt.quad(Lt.k[0],Lt.k[1],Lt.k[2],yt[0],yt[1],yt[2],yt[0],Yt,yt[2],Lt.k[0],_t,Lt.k[2],Nt(ss,.9)),Qt.quad(Lt.k[0],_t,Lt.k[2],yt[0],Yt,yt[2],yt[3],Yt,yt[5],Lt.k[3],_t,Lt.k[5],ss),Qt.quad(Lt.k[3],_t,Lt.k[5],yt[3],Yt,yt[5],yt[3],yt[6]-.3,yt[5],Lt.k[3],Lt.k[6]-.3,Lt.k[5],Nt(ss,.85))):(Qt.quad(yt[0],yt[1],yt[2],Lt.k[0],Lt.k[1],Lt.k[2],Lt.k[0],_t,Lt.k[2],yt[0],Yt,yt[2],Nt(ss,.9)),Qt.quad(yt[0],Yt,yt[2],Lt.k[0],_t,Lt.k[2],Lt.k[3],_t,Lt.k[5],yt[3],Yt,yt[5],ss),Qt.quad(yt[3],Yt,yt[5],Lt.k[3],_t,Lt.k[5],Lt.k[3],Lt.k[6]-.3,Lt.k[5],yt[3],yt[6]-.3,yt[5],Nt(ss,.85)))}if(K&&Lt.path){const Qt=H%2?vu:Nt(vu,.955),Yt=c(ve,Oe);C>0?Yt.quad(Lt.f[0],Lt.f[1],Lt.f[2],ue[0],ue[1],ue[2],ue[3],ue[4],ue[5],Lt.f[3],Lt.f[4],Lt.f[5],Qt):Yt.quad(ue[0],ue[1],ue[2],Lt.f[0],Lt.f[1],Lt.f[2],Lt.f[3],Lt.f[4],Lt.f[5],ue[3],ue[4],ue[5],Qt)}}O={k:yt,kerb:ne,f:ue,path:K}}}});const u=new Ye({vertexColors:!0,roughness:.94,metalness:0,side:Ee,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),f=(S,E)=>{const x=S.build();x.deleteAttribute("glow");const b=new Jt(x,u);return b.receiveShadow=!0,b.name=E,b},m=new Ie;m.name="kerbs";const v=new Map,p=[];for(const[S,E]of o){const x=f(E,`kerb ${S}`);x.geometry.computeBoundingSphere(),p.push(x),m.add(x)}for(const[S,E]of r){const x=f(E,`footpaths ${S}`);x.geometry.computeBoundingSphere(),v.set(S,x),m.add(x)}let g=new Set,_=null;const M=S=>{if(!_)return!0;const E=S.geometry.boundingSphere;return Math.hypot(Math.max(0,Math.hypot(E.center.x-_[0],E.center.z-_[2])-E.radius),E.center.y-_[1])<_[3]},y=()=>{let S=!1;const E=(x,b)=>{x.visible!==b&&(x.visible=b,S=!0)};for(const x of p)E(x,M(x));for(const[x,b]of v)E(b,!g.has(x)&&M(b));return S};return{group:m,showPaths(S){return g=S,y()},cull(S,E,x,b){return _=[S,E,x,b],y()}}}function cv(i,t){const e=new se,n=q(9278358);e.cyl(0,0,0,.11,.07,8.2,5,n),e.box(-.05,8.1,0,.05,8.22,2.2,n),e.box(-.22,8,1.7,.22,8.14,2.5,q(5922659)),e.quad(-.2,7.99,2.48,.2,7.99,2.48,.2,7.99,1.72,-.2,7.99,1.72,q(16773320),3);const s=i.length/4,r=new an(e.build(),qn(),s),o=document.createElement("canvas");o.width=o.height=64;const a=o.getContext("2d"),l=a.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(255,214,150,0.85)"),l.addColorStop(.45,"rgba(255,196,120,0.32)"),l.addColorStop(1,"rgba(255,180,100,0)"),a.fillStyle=l,a.fillRect(0,0,64,64);const c=new Ar(o);c.colorSpace=Te;const h=new li(34,34);h.rotateX(-Math.PI/2);const d=new Wn({map:c,transparent:!0,opacity:0,blending:po,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),u=new an(h,d,s);u.renderOrder=3;const f=new ie,m=new rn,v=new Q(0,1,0),p=new Q(1,1,1),g=new Q;for(let _=0;_<s;_++){const M=i[_*4],y=i[_*4+1],S=i[_*4+2],E=i[_*4+3];m.setFromAxisAngle(v,E),r.setMatrixAt(_,f.compose(g.set(M,y,S),m,p));const x=M+Math.sin(E)*2.1,b=S+Math.cos(E)*2.1;u.setMatrixAt(_,f.compose(g.set(x,t.yAt(x,b)+.5,b),m.identity(),p))}return r.castShadow=!1,r.computeBoundingSphere(),u.computeBoundingSphere(),u.onBeforeRender=()=>{d.opacity=es.value*.9},u.visible=!0,{lights:r,pools:u,poolMat:d}}const to=[16053490,16053490,16053490,13225168,10725291,5593438,2040100,2838410,11020586,2054728,14266938,8368595],Bs=q(1381655),Su=q(10133154),pl=q(1713198);function yu(i,t,e,n,s,r,o,a=8){const l=t-r/2*o,c=t+r/2*o;for(let u=0;u<a;u++){const f=u/a*Math.PI*2,m=(u+1)/a*Math.PI*2,v=e+Math.cos(f)*s,p=n+Math.sin(f)*s,g=e+Math.cos(m)*s,_=n+Math.sin(m)*s;o>0?(i.quad(l,v,p,l,g,_,c,g,_,c,v,p,Bs),i.tri(c,e,n,c,v,p,c,g,_,Bs)):(i.quad(l,g,_,l,v,p,c,v,p,c,g,_,Bs),i.tri(c,e,n,c,g,_,c,v,p,Bs))}const h=s*.52,d=c+.012*o;o>0?i.quad(d,e-h,n-h,d,e-h,n+h,d,e+h,n+h,d,e+h,n-h,Su):i.quad(d,e-h,n+h,d,e-h,n-h,d,e+h,n-h,d,e+h,n+h,Su)}function eo(i,t,e,n,s,r,o,a,l=0){i.quad(r,e,t,r,s,n,o,s,n,o,e,t,a,l)}function bu(i,t,e,n,s){const[r,o]=t[0];for(let a=1;a<t.length-1;a++){const[l,c]=t[a],[h,d]=t[a+1];n>0?i.tri(e,o,r,e,d,h,e,c,l,s):i.tri(e,o,r,e,c,l,e,d,h,s)}}function Eu(){const i=new se,t=q(16777215),e=q(2763824),n=.88,s=[[-2.1,.28],[-2.16,.6],[-2.06,.94],[-1.3,.99],[1.05,.97],[1.95,.84],[2.16,.6],[2.1,.28]];for(let a=0;a<s.length-1;a++)eo(i,s[a][0],s[a][1],s[a+1][0],s[a+1][1],-n,n,a===0||a===s.length-2?Nt(t,.92):t);for(const a of[-1,1])bu(i,s,n*a,a,t);i.quad(-n,.28,-2.1,n,.28,-2.1,n,.28,2.1,-n,.28,2.1,Bs);const r=.8,o=[[-1.42,.97],[-.98,1.45],[.32,1.45],[1.08,.97]];for(let a=0;a<o.length-1;a++)eo(i,o[a][0],o[a][1],o[a+1][0],o[a+1][1],-r+.06,r-.06,a===1?t:pl,a===1?0:.15);for(const a of[-1,1]){bu(i,o,r*a,a,pl),eo(i,-1.42,.97,-.98,1.45,a>0?r-.07:-r,a>0?r:-r+.07,t),eo(i,.32,1.45,1.08,.97,a>0?r-.07:-r,a>0?r:-r+.07,t);const l=(r+.006)*a;i.quad(l,.97,-.32*a,l,.97,-.22*a,l,1.45,-.22*a,l,1.45,-.32*a,t);const c=(n+.006)*a;for(const h of[-1.28,-.27,.95])i.quad(c,.42,(h-.012)*a,c,.42,(h+.012)*a,c,.96,(h+.012)*a,c,.96,(h-.012)*a,e);for(const h of[-.5,.55])i.quad(c,.8,(h-.09)*a,c,.8,(h+.09)*a,c,.84,(h+.09)*a,c,.84,(h-.09)*a,e);i.box(Math.min(n*a,(n+.16)*a),.98,.92,Math.max(n*a,(n+.16)*a),1.1,1,t)}for(const a of[-1,1])for(const l of[-1.3,1.32])yu(i,(n-.1)*a,.33,l,.33,.24,a);i.quad(-n,.3,2.165,n,.3,2.165,n,.5,2.165,-n,.5,2.165,e),i.quad(n,.3,-2.165,-n,.3,-2.165,-n,.5,-2.165,n,.5,-2.165,e),i.quad(-.26,.36,2.17,.26,.36,2.17,.26,.49,2.17,-.26,.49,2.17,q(16053486)),i.quad(.26,.5,-2.17,-.26,.5,-2.17,-.26,.63,-2.17,.26,.63,-2.17,q(16053486));for(const a of[-.8,.48])i.quad(a,.6,2.17,a+.32,.6,2.17,a+.32,.78,2.14,a,.78,2.14,q(16776166),2.2),i.quad(a+.32,.66,-2.165,a,.66,-2.165,a,.84,-2.13,a+.32,.84,-2.13,q(13770527),.9);return i.build()}function wu(){const i=new se,t=q(16777215);return i.box(-.88,.28,-2.14,.88,.96,2.14,t),i.box(-.78,.96,-1.38,.78,1.43,1,pl),i.quad(-.74,1.44,-1,-.74,1.44,.36,.74,1.44,.36,.74,1.44,-1,t),i.build()}const hv=q(8352874),Tu=q(10133154),Au=q(7304312),no=.44,uv=.2,Ru=1.067;function ml(i,t){const e=[i[0]/10,i[1]/10];for(let l=2;l<i.length;l+=2){const c=i[l-2]/10,h=i[l-1]/10,d=i[l]/10,u=i[l+1]/10,f=Math.max(1,Math.ceil(Math.hypot(d-c,u-h)/6));for(let m=1;m<=f;m++)e.push(c+(d-c)*m/f,h+(u-h)*m/f)}const n=e.length/2,s=new Float32Array(n);for(let l=0;l<n;l++)s[l]=t.yAt(e[l*2],e[l*2+1]);let r=s;for(let l=0;l<2;l++){const c=new Float32Array(n);for(let h=0;h<n;h++){let d=0,u=0;for(let f=Math.max(0,h-4);f<=Math.min(n-1,h+4);f++)d+=r[f],u++;c[h]=d/u}r=c}const o=new Float32Array(n*3),a=new Float32Array(n);for(let l=0;l<n;l++)o[l*3]=e[l*2],o[l*3+1]=Math.max(r[l],s[l]-.2),o[l*3+2]=e[l*2+1],l&&(a[l]=a[l-1]+Math.hypot(e[l*2]-e[l*2-2],e[l*2+1]-e[l*2-1]));return{pts:o,cum:a,length:a[n-1]}}function rs(i,t,e){const n=i.cum.length;let s=0,r=n-1;for(;r-s>1;){const m=s+r>>1;i.cum[m]<=t?s=m:r=m}const o=Math.min(1,Math.max(0,(t-i.cum[s])/(i.cum[r]-i.cum[s]||1))),a=i.pts[s*3],l=i.pts[s*3+1],c=i.pts[s*3+2],h=i.pts[r*3],d=i.pts[r*3+1],u=i.pts[r*3+2],f=Math.hypot(h-a,u-c)||1;e.x=a+(h-a)*o,e.y=l+(d-l)*o,e.z=c+(u-c)*o,e.tx=(h-a)/f,e.tz=(u-c)/f}function gl(i,t,e,n,s,r){const o=t.cum.length;let a=0,l=0,c=0,h=0,d=0;for(let u=0;u<o;u++){const f=Math.max(u-1,0),m=Math.min(u+1,o-1);let v=t.pts[m*3]-t.pts[f*3],p=t.pts[m*3+2]-t.pts[f*3+2];const g=Math.hypot(v,p)||1;v/=g,p/=g;const _=t.pts[u*3]-p*e,M=t.pts[u*3+2]+v*e,y=t.pts[u*3+1]+s,S=_+p*n,E=M-v*n,x=_-p*n,b=M+v*n;u&&i.quad(a,l,c,S,y,E,x,y,b,h,l,d,r),a=S,l=y,c=E,h=x,d=b}}const fv=q(12170926),Cu=q(15254842),Pu=q(9276036),Lu=150,dv=no+.8;function pv(i,t,e){const n=t.trainRoutes.map(o=>ml(o,e)),s=(o,a,l,c=0,h=o.cum.length)=>{let d=1/0,u=-1;for(let f=Math.max(0,c);f<Math.min(o.cum.length,h);f++){const m=Math.hypot(o.pts[f*3]-a,o.pts[f*3+2]-l);m<d&&(d=m,u=f)}return{i:u,dist:d}},r={x:0,y:0,z:0,tx:0,tz:0};for(const o of t.stations){const a=o.p[0]/10,l=o.p[1]/10,c=n.map(v=>({t:v,...s(v,a,l)})).filter(v=>v.dist<16).sort((v,p)=>v.dist-p.dist);if(!c.length)continue;const h=c[0],d=c[1],u=h.t.cum[h.i];let f=null,m=d?d.i:0;for(let v=Math.max(4,u-Lu/2);v<=Math.min(h.t.length-4,u+Lu/2);v+=5){rs(h.t,v,r);let p,g,_,M;if(d){const S=s(d.t,r.x,r.z,m-6,m+7);m=S.i;const E=d.t.pts[S.i*3],x=d.t.pts[S.i*3+2],b=Math.hypot(E-r.x,x-r.z);if(b<4.6){f=null;continue}const w=(E-r.x)/b,A=(x-r.z)/b;p=r.x+w*1.6,g=r.z+A*1.6,_=E-w*1.6,M=x-A*1.6}else{const S=(a-r.x)*r.tz-(l-r.z)*r.tx>=0?1:-1;p=r.x+r.tz*S*1.6,g=r.z-r.tx*S*1.6,_=r.x+r.tz*S*5.6,M=r.z-r.tx*S*5.6}const y=r.y+dv;if((_-p)*-r.tz+(M-g)*r.tx<0&&([p,_]=[_,p],[g,M]=[M,g]),f){const[S,E,x,b,w]=f;i.quad(S,w,E,x,w,b,_,y,M,p,y,g,fv);for(const[A,C,L,B,P,O,H,k]of[[S,E,p,g,x,b,_,M],[x,b,_,M,S,E,p,g]]){const $=Math.hypot(P-A,O-C)||1,X=Math.hypot(H-L,k-B)||1,z=(V,ut,Y,at)=>V+(ut-V)/Y*at,G=[z(A,P,$,.45),w+.02,z(C,O,$,.45),z(L,H,X,.45),y+.02,z(B,k,X,.45),z(L,H,X,.75),y+.02,z(B,k,X,.75),z(A,P,$,.75),w+.02,z(C,O,$,.75)];A===S&&C===E?(i.quad(G[0],G[1],G[2],G[9],G[10],G[11],G[6],G[7],G[8],G[3],G[4],G[5],Cu),i.quad(L,y-1.1,B,A,w-1.1,C,A,w,C,L,y,B,Pu)):(i.quad(...G,Cu),i.quad(A,w-1.1,C,L,y-1.1,B,L,y,B,A,w,C,Pu))}}f=[p,g,_,M,y]}}}function mv(i,t){const e=new se,n=new se,s=new Set,r={x:0,y:0,z:0,tx:0,tz:0};for(const[u,f]of i.rails){const m=ml(f,t);if(!(m.length<4)&&(gl(e,m,0,1.45,uv,hv),gl(n,m,-Ru/2,.07,no,Tu),gl(n,m,Ru/2,.07,no,Tu),u===0))for(let v=20;v<m.length-10;v+=62){rs(m,v,r);const p=r.x+r.tz*2.7,g=r.z-r.tx*2.7;if(!t.inside(p,g,6))continue;const _=Math.floor(p/14)*8192+Math.floor(g/14);if(!s.has(_)){for(let M=-1;M<=1;M++)for(let y=-1;y<=1;y++)s.add(Math.floor(p/14+M)*8192+Math.floor(g/14+y));n.frame(p,t.yAt(p,g),g,Math.atan2(-r.tz,r.tx)),n.box(-.09,0,-.09,.09,7.4,.09,Au),n.box(-.05,6.3,0,.05,6.42,3.2,Au),n.frame()}}}const o=new se;pv(o,i,t);const a=u=>(u.deleteAttribute("glow"),u),l=new Ie;l.name="railway";const c=new Jt(a(e.build()),new Ye({vertexColors:!0,roughness:1,metalness:0,side:Ee,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));c.receiveShadow=!0;const h=new Jt(a(n.build()),new Ye({vertexColors:!0,roughness:.55,metalness:.35,side:Ee}));h.castShadow=!0;const d=new Jt(a(o.build()),new Ye({vertexColors:!0,roughness:.92,metalness:0,side:Ee}));return d.castShadow=!0,d.receiveShadow=!0,l.add(c,h,d),l}const Du=2,xl=4;function gv(i,t){const e=i.slice(),n=[],s=(o,a,l,c)=>Math.hypot(o-l,a-c)<3,r=o=>{const a=new Float32Array(o.length);for(let l=0;l<o.length/3;l++)a.set(o.subarray(l*3,l*3+3),o.length-3-l*3);return a};for(;e.length;){let o=Array.from(e.pop()),a=!0;for(;a;){a=!1;for(let l=0;l<e.length;l++){const c=e[l],h=c.length,d=o.length;let u=null,f=!0;if(s(o[d-3],o[d-1],c[0],c[2])?u=c:s(o[0],o[2],c[h-3],c[h-1])?(u=c,f=!1):!t&&s(o[d-3],o[d-1],c[h-3],c[h-1])?u=r(c):!t&&s(o[0],o[2],c[0],c[2])&&(u=r(c),f=!1),!!u){o=f?o.concat(Array.from(u.subarray(3))):Array.from(u.subarray(0,u.length-3)).concat(o),e.splice(l,1),a=!0;break}}}n.push(new Float32Array(o))}return n}function xv(i){const t=new Map;for(const n of i){if(n.cls>2||!n.name||n.flags&Du)continue;const s=`${n.name}|${n.flags&xl}`,r=t.get(s)??[];r.push(n),t.set(s,r)}const e=[];for(const n of t.values()){const s=(n[0].flags&xl)!==0;for(const r of gv(n.map(o=>o.pts),s)){const o=r.length/3,a=new Float32Array(o);for(let l=1;l<o;l++)a[l]=a[l-1]+Math.hypot(r[l*3]-r[l*3-3],r[l*3+2]-r[l*3-1]);a[o-1]>260&&e.push({pts:r,cum:a,length:a[o-1],width:n[0].width,cls:n[0].cls,oneWay:s,name:n[0].name})}}return e}function _v(){const i=new se,t=q(16185074),e=q(2054824),n=q(16040479),s=q(1713198),r=q(1381655);i.box(-1.25,.35,-6,1.25,3.1,6,t,q(15001316),r),i.box(-1.27,.35,-6.02,1.27,1.15,6.02,e,null),i.box(-1.28,1.15,-6.03,1.28,1.32,6.03,n,null);for(const o of[-1.27,1.27]){const a=Math.sign(o);i.quad(o+a*.02,1.55,-5.4*a,o+a*.02,1.55,5.4*a,o+a*.02,2.65,5.4*a,o+a*.02,2.65,-5.4*a,s,.5)}i.quad(-1.1,1.5,6.04,1.1,1.5,6.04,1.1,2.8,6.04,-1.1,2.8,6.04,s,.3);for(const o of[-1,1])for(const a of[-3.75,4.05])yu(i,1.17*o,.48,a,.48,.3,o,10);for(const o of[-1,.7])i.quad(o,.6,6.05,o+.3,.6,6.05,o+.3,.85,6.05,o,.85,6.05,q(16776166),2.2);return i.build()}const _l=24.2,bi=6;function Iu(i){const t=new se,e=23.4,n=1.42,s=q(13488596),r=q(10330790),o=q(1843753),a=q(15909424),l=q(2763822),c=q(2310287);t.box(-n,.95,-e/2,n,3.7,e/2,s,r),t.box(-n+.2,.2,-e/2+1.4,n-.2,.95,e/2-1.4,l,null),t.box(-.5,3.7,-e/2+3,.5,4,e/2-3,r);for(const h of[-1,1]){const d=h*(n+.02),u=(f,m,v,p,g=o,_=0)=>{h>0?t.quad(d,v,m,d,v,f,d,p,f,d,p,m,g,_):t.quad(d,v,f,d,v,m,d,p,m,d,p,f,g,_)};u(-e/2+.3,e/2-.3,1.45,1.62,c);for(let f=0;f<7;f++){const m=-e/2+2+f*2.9;u(m,m+2.1,2,2.95,o,.75)}for(const f of[-6.4,5])u(f,f+1.4,1,3.1,a)}if(i){const h=e/2+.02;t.quad(-n,.95,h,n,.95,h,n,2.15,h,-n,2.15,h,a),t.quad(-n+.15,2.2,h,n-.15,2.2,h,n-.15,3.35,h,-n+.15,3.35,h,o,.2);for(const d of[-1.05,.7])t.quad(d,1.25,h+.01,d+.35,1.25,h+.01,d+.35,1.5,h+.01,d,1.5,h+.01,q(16776166),2.4)}return t.build()}class vv{constructor(t,e,n,s,r=()=>!1,o=()=>!1){it(this,"group",new Ie);it(this,"vehicles",[]);it(this,"carMesh");it(this,"carFarMesh");it(this,"carColours",[]);it(this,"busMesh");it(this,"parked",[]);it(this,"eye",new Q(0,1e6,0));it(this,"reach",{near:140,far:1100});it(this,"carCount",0);it(this,"trains",[]);it(this,"midMesh");it(this,"cabMesh");it(this,"tmpM",new ie);it(this,"tmpQ",new rn);it(this,"tmpP",new Q);it(this,"up",new Q(0,1,0));it(this,"one",new Q(1,1,1));it(this,"zero",new Q(0,0,0));it(this,"at",{x:0,y:0,z:0,tx:0,tz:0});it(this,"at2",{x:0,y:0,z:0,tx:0,tz:0});this.town=t,this.hf=e,this.isClear=r,this.noParking=o,this.group.name="life";const a=qn();this.addParkedCars(a,s),this.addTraffic(a,n),this.addTrains(a),this.addStreetLights(n),this.update(0)}addParkedCars(t,e){const n=this.town.cars,s=n.length/yi,r=250,o=new Map;for(let h=0;h<s;h++){const d=n[h*yi]/4,u=n[h*yi+1]/4;if(this.isClear(d,u)||this.noParking(d,u))continue;const f=`${Math.floor(d/r)}_${Math.floor(u/r)}`;let m=o.get(f);m||o.set(f,m=[]),m.push(h)}const a=Eu(),l=wu(),c=new Rt;for(const h of o.values()){const d=new an(a,t,h.length),u=new an(l,t,h.length);h.forEach((m,v)=>{const p=n[m*yi]/4,g=n[m*yi+1]/4,_=e.nearest(p,g,14),M=!!_&&_.dist<_.width/2;this.tmpQ.setFromAxisAngle(this.up,n[m*yi+2]/10*(Math.PI/180)),this.tmpM.compose(this.tmpP.set(p,this.hf.yAt(p,g)+(M?.24:.03),g),this.tmpQ,this.one),c.set(to[(n[m*yi+3]*7+m)%to.length]),d.setMatrixAt(v,this.tmpM),d.setColorAt(v,c),u.setMatrixAt(v,this.tmpM),u.setColorAt(v,c)}),d.castShadow=!0,d.computeBoundingSphere(),u.computeBoundingSphere(),d.visible=!1;const f=d.boundingSphere;this.parked.push({near:d,far:u,x:f.center.x,y:f.center.y,z:f.center.z,r:f.radius}),this.group.add(d,u)}}cull(t,e,n,s=this.reach.near,r=this.reach.far){this.eye.set(t,e,n),this.reach.near=s,this.reach.far=r;for(const o of this.parked){const a=Math.hypot(Math.max(0,Math.hypot(o.x-t,o.z-n)-o.r),e-o.y);o.near.visible=a<s,o.far.visible=a>=s&&a<r}}addTraffic(t,e){const n=xv(e);if(!n.length)return;const s=Dn(4105),r=[],o=[];for(const l of n){const c=l.cls===0?20:l.cls===1?12:8,h=Math.round(l.length/1e3*c*(l.oneWay?1:1.6)),d=Math.max(1,l.oneWay?Math.min(l.width<13?2:3,Math.round((l.width-2.4)/3.4)):Math.round(l.width/2/3.3)),u=f=>-l.width/2+.4+3.3*(f+.5);for(let f=0;f<h;f++){const m=Math.floor(s()*d),v=l.oneWay?u(m):(m+.5)/d*(l.width/2-.3),p=l.cls===0?13:l.cls===1?11:9,g={route:l,s:s()*l.length,dir:l.oneWay||s()<.5?1:-1,speed:p+s()*4,lane:v};(l.name==="Beaudesert Road"||l.name==="Ipswich Road")&&s()<.045?(g.speed=10+s()*2,l.oneWay&&(g.lane=u(d-1)),o.push(g)):r.push(g)}}this.vehicles=r.concat(o),this.carCount=r.length;const a=new Rt;if(r.length){const l=this.carMesh=new an(Eu(),t,r.length),c=this.carFarMesh=new an(wu(),t,r.length);for(const h of[l,c])h.instanceMatrix.setUsage(ar),h.frustumCulled=!1,h.setColorAt(0,a.set(16777215)),h.instanceColor.setUsage(ar),this.group.add(h);for(let h=0;h<r.length;h++)this.carColours.push(new Rt(to[Math.floor(s()*to.length)]));l.castShadow=!0}if(o.length){const l=this.busMesh=new an(_v(),t,o.length);l.instanceMatrix.setUsage(ar),l.frustumCulled=!1,l.castShadow=!0,this.group.add(l)}}addTrains(t){const e=this.town.trainRoutes.map(r=>ml(r,this.hf)).filter(r=>r.length>600);if(!e.length)return;const n=[!0];if(e.length>1){const r=e[0],o=e[1];rs(r,r.length/2,this.at);let a=1/0,l=0,c=1;for(let h=0;h<o.cum.length;h++){const d=o.pts[h*3]-this.at.x,u=o.pts[h*3+2]-this.at.z,f=Math.hypot(d,u);if(f<a){a=f,l=d*-this.at.tz+u*this.at.tx;const m=Math.min(h+1,o.cum.length-1),v=Math.max(h-1,0);c=(o.pts[m*3]-o.pts[v*3])*this.at.tx+(o.pts[m*3+2]-o.pts[v*3+2])*this.at.tz}}n[0]=l>0,n[1]=n[0]?c<0:c>0}const s=bi*_l;e.forEach((r,o)=>{const a=n[o]?r:Mv(r),l=[];for(const c of this.town.stations){const h=c.p[0]/10,d=c.p[1]/10;let u=70,f=-1;for(let m=0;m<a.cum.length;m++){const v=Math.hypot(a.pts[m*3]-h,a.pts[m*3+2]-d);v<u&&(u=v,f=a.cum[m])}f>s/2+10&&f<a.length-10&&l.push(f+s/2)}l.sort((c,h)=>c-h),this.trains.push({track:a,stops:l,s:a.length*(o===0?.28:.62),v:16,dwell:0,next:0})});for(const r of this.trains)r.next=r.stops.findIndex(o=>o>r.s+150);this.midMesh=new an(Iu(!1),t,this.trains.length*(bi-2)),this.cabMesh=new an(Iu(!0),t,this.trains.length*2);for(const r of[this.midMesh,this.cabMesh])r.instanceMatrix.setUsage(ar),r.frustumCulled=!1,r.castShadow=!0,this.group.add(r)}addStreetLights(t){const e=[];for(const r of t){if(r.flags&Du)continue;const o=(r.flags&xl)!==0,a=r.cls<=1?46:r.cls===2?60:105,l=r.pts.length/3;let c=a*.5,h=1;for(let d=1;d<l;d++){const u=r.pts[d*3-3],f=r.pts[d*3-1],m=r.pts[d*3],v=r.pts[d*3+1],p=r.pts[d*3+2],g=Math.hypot(m-u,p-f);if(c+=g,c<a)continue;c=0,h=o?-1:-h;const _=(m-u)/(g||1),M=(p-f)/(g||1),y=r.width/2+1.4,S=m-M*y*h,E=p+_*y*h;!this.hf.inside(S,E,12)||this.isClear(S,E)||e.push(S,Math.max(this.hf.yAt(S,E),v-.4),E,Math.atan2(M*h,-_*h))}}const{lights:n,pools:s}=cv(e,this.hf);this.group.add(n,s)}update(t){const{at:e,at2:n,eye:s}=this,r=this.reach.near*this.reach.near,o=this.reach.far*this.reach.far;let a=0,l=0;this.vehicles.forEach((h,d)=>{const u=h.route;h.s+=h.dir*h.speed*t,h.s>u.length&&(h.s-=u.length),h.s<0&&(h.s+=u.length),rs(u,h.s,e);const f=e.tx*h.dir,m=e.tz*h.dir;if(this.tmpQ.setFromAxisAngle(this.up,Math.atan2(f,m)),this.tmpM.compose(this.tmpP.set(e.x+m*h.lane,e.y+.03,e.z-f*h.lane),this.tmpQ,this.one),d<this.carCount){const v=(e.x-s.x)**2+(e.y-s.y)**2+(e.z-s.z)**2;v<r?(this.carMesh.setMatrixAt(a,this.tmpM),this.carMesh.setColorAt(a++,this.carColours[d])):v<o&&(this.carFarMesh.setMatrixAt(l,this.tmpM),this.carFarMesh.setColorAt(l++,this.carColours[d]))}else this.busMesh.setMatrixAt(d-this.carCount,this.tmpM)});for(const[h,d]of[[this.carMesh,a],[this.carFarMesh,l]])h&&(h.count=d,h.instanceMatrix.needsUpdate=!0,h.instanceColor.needsUpdate=!0);if(this.busMesh&&(this.busMesh.instanceMatrix.needsUpdate=!0),!this.midMesh||!this.cabMesh)return;const c=bi*_l;this.trains.forEach((h,d)=>{if(h.dwell>0)h.dwell-=t;else{const f=(h.next>=0&&h.next<h.stops.length?h.stops[h.next]:1/0)-h.s;f<.4?(h.v=0,h.dwell=14,h.next++):f<h.v*h.v/1.7+2?h.v=Math.max(.8,Math.sqrt(1.7*f)):h.v=Math.min(19,h.v+.75*t),h.s+=h.v*t,h.s-c>h.track.length&&(h.s=0,h.next=0,h.v=15)}for(let u=0;u<bi;u++){const f=h.s-(u+.5)*_l,m=u===0||u===bi-1,v=m?this.cabMesh:this.midMesh,p=m?d*2+(u===0?0:1):d*(bi-2)+u-1;if(f<8||f>h.track.length-8){v.setMatrixAt(p,this.tmpM.compose(this.zero,this.tmpQ.identity(),this.zero));continue}rs(h.track,f+8,e),rs(h.track,f-8,n);const g=Math.atan2(e.x-n.x,e.z-n.z)+(u===bi-1?Math.PI:0);this.tmpQ.setFromAxisAngle(this.up,g),v.setMatrixAt(p,this.tmpM.compose(this.tmpP.set((e.x+n.x)/2,(e.y+n.y)/2+no,(e.z+n.z)/2),this.tmpQ,this.one))}}),this.midMesh.instanceMatrix.needsUpdate=!0,this.cabMesh.instanceMatrix.needsUpdate=!0}}function Mv(i){const t=i.cum.length,e=new Float32Array(t*3),n=new Float32Array(t);for(let s=0;s<t;s++)e.set(i.pts.subarray((t-1-s)*3,(t-1-s)*3+3),s*3),n[s]=i.length-i.cum[t-1-s];return{pts:e,cum:n,length:i.length}}const Sv=[{id:"shops",name:"Moorvale shops",kind:"landmark",lat:-27.53289,lon:153.02479,blurb:"Moorooka's main street: the shops and cafes along Beaudesert Road, around Moorvale Lane.",view:[420,58,-24],priority:1,lift:24},{id:"square",name:"Moorooka Square",kind:"landmark",lat:-27.53092,lon:153.02368,blurb:"The shopping centre at Beaudesert Road and Durack Street, modelled in extra detail. Its outline and heights are surveyed. The corner frontage (white canopy, brick planters, pylon) and the supermarket entry are fitted from street photographs taken in 2026: the corner wing is newer than the survey, so its position is approximate. The sides away from Beaudesert Road are a guess.",view:[115,62,68],priority:1,maxDist:2600,lift:17},{id:"station",name:"Moorooka Station",kind:"landmark",lat:-27.53566,lon:153.01392,blurb:"On the Beenleigh and Gold Coast lines, beside Ipswich Road. Trains in the model stop here.",view:[330,60,62],priority:1,lift:20},{id:"magic-mile",name:"Magic Mile",kind:"landmark",lat:-27.53208,lon:153.01684,blurb:"Ipswich Road through Moorooka, long known as the Magic Mile of Motors for its car yards. The cars standing in the yards are generated.",view:[520,60,35],priority:2,lift:22},{id:"6-beaudesert",name:"6 Beaudesert Road",kind:"landmark",lat:-27.5256631,lon:153.0234391,blurb:"A high-set house on a 1,348 square metre block near the Ipswich Road junction, modelled in extra detail. The roof outline, its height and colour are surveyed; the fences, paths, steps, garden boxes and clothes hoist are placed from the aerial photograph. Wall colour, windows and doors are a guess.",view:[52,52,-105],priority:2,maxDist:1500,lift:13},{id:"clapham",name:"Clapham Rail Yard",kind:"landmark",lat:-27.5312,lon:153.0132,blurb:"The rail yard between Yeerongpilly and Moorooka stations, on the western edge of the suburb.",view:[640,58,80],priority:3,maxDist:3600,lift:18},{id:"school",name:"Moorooka State School",kind:"landmark",lat:-27.53569,lon:153.02398,blurb:"The state primary school, between Beaudesert Road and Sherley Street.",view:[360,58,10],priority:3,maxDist:2600,lift:18},{id:"alexander",name:"Alexander Park",kind:"nature",lat:-27.53889,lon:153.02367,blurb:"Sports fields beside Beaudesert Road, south of the school.",view:[420,58,-15],priority:4,maxDist:2600,lift:14},{id:"peggs",name:"Pegg's Park",kind:"nature",lat:-27.53231,lon:153.0312,blurb:"Parkland along Vendale Avenue on the eastern side of the suburb.",view:[420,58,20],priority:4,maxDist:2600,lift:14},{id:"koala",name:"Koala Park",kind:"nature",lat:-27.53056,lon:153.02808,blurb:"A long green corridor with playing fields between Vendale Avenue and the houses.",view:[420,60,30],priority:5,maxDist:2e3,lift:14},{id:"community",name:"Moorooka Community Centre",kind:"landmark",lat:-27.53555,lon:153.02088,blurb:"The community hall, west of the school.",view:[300,60,-10],priority:6,maxDist:1400,lift:14},{id:"st-brendans",name:"St Brendan's Primary School",kind:"landmark",lat:-27.53747,lon:153.01931,blurb:"Catholic primary school on Hawtree Street, next to the church.",view:[320,60,15],priority:6,maxDist:1600,lift:15},{id:"post",name:"Moorooka Post Shop",kind:"landmark",lat:-27.5317,lon:153.02369,blurb:"The post office, at the northern end of the shops.",view:[260,60,-20],priority:7,maxDist:900,lift:14},{id:"uniting",name:"Uniting Church",kind:"landmark",lat:-27.53339,lon:153.02759,blurb:"Moorooka's Uniting Church, a few streets east of the shops.",view:[280,60,10],priority:7,maxDist:1e3,lift:14},{id:"stimpson",name:"Stimpson Park",kind:"nature",lat:-27.52648,lon:153.02218,blurb:"A park beside Ipswich Road at the northern tip of the suburb.",view:[360,58,20],priority:6,maxDist:1600,lift:13},{id:"moolabin",name:"Moolabin Park",kind:"nature",lat:-27.52852,lon:153.02564,blurb:"The first of the parks strung along Vendale Avenue.",view:[340,58,15],priority:6,maxDist:1500,lift:13},{id:"veterans",name:"Veterans Park",kind:"nature",lat:-27.53974,lon:153.01694,blurb:"A park on Anson Street, in the south-west of the suburb.",view:[340,58,25],priority:6,maxDist:1500,lift:13},{id:"skate",name:"Peter Scott Skate Park",kind:"landmark",lat:-27.54298,lon:153.01482,blurb:"The skate park in Muriel Avenue Park, near the creek.",view:[260,60,30],priority:6,maxDist:1400,lift:12},{id:"toohey",name:"Toohey Forest",kind:"nature",lat:-27.53512,lon:153.03668,blurb:"Bushland on the ridge along the eastern edge of the suburb. The highest ground in the model, about 125 metres above sea level, is here.",view:[1100,60,-60],priority:2,lift:34},{id:"creek",name:"Rocky Water Holes Creek",kind:"water",lat:-27.54414,lon:153.01554,blurb:"The creek along Moorooka's southern boundary, on its way to Oxley Creek and the Brisbane River.",view:[620,58,20],priority:5,maxDist:3200},{id:"rocklea",name:"Rocklea Station",kind:"landmark",lat:-27.54472,lon:153.01419,blurb:"The next station south, just over the creek in Rocklea.",view:[380,60,40],priority:5,maxDist:2600,lift:16},{id:"yeerongpilly",name:"Yeerongpilly Station",kind:"landmark",lat:-27.52485,lon:153.01416,blurb:"The next station north, where the Tennyson branch leaves the main line.",view:[420,60,70],priority:5,maxDist:2600,lift:16},{id:"river",name:"Brisbane River",kind:"water",lat:-27.5214,lon:153.0102,blurb:"The Tennyson reach of the river touches the north-west corner of the model.",view:[900,55,40],priority:4}],Nu=[-27.531134,153.023185],yv=[-27.5307274,153.0230606],bv=[-27.5310763,153.0237468],Uu=[[-27.5307394,153.023705],[-27.5310127,153.0237606]],ks=[78,0,0,0,0,66.5,79.3,66.5,79.3,42.5,83.4,42.5,83.4,47.9,88.2,47.9,88.2,28.1,100.2,28.1,100.2,22.1],Ev=[75.2,0,0,0,0,66.5,79.3,66.5,79.3,42.5,83.4,42.5,83.4,47.9,88.2,47.9,88.2,26.3,98.4,26.3,98.4,23.2],wv=[66,0,75.2,0,98.4,23.2,98.4,26.3,88.2,26.3,88.2,47.9,83.4,47.9,83.4,42.5,79.3,42.5,79.3,66.5,66,66.5],Gt=39.1,sn=Gt+5,io=Gt+5.85,Gs=5.2,Hs=[11.4,14.6],$n=i=>37.45+(i>0?.036:.02)*i,Vs=q(14934231),ge=q(15987437),Ws=q(15526627),Xs=q(13619146),vl=q(11818813),Ml=q(4864816),Tv=q(2832965),qs=q(1976109),Ys=q(3817026),Mn=q(10133668),hi=q(3817026),$s=q(13352877),so=q(13353645),ui=q(12434098),Fu=q(1780811),ro=q(9409688),oo=q(4164148),Av=q(9424476),Sl=q(3104556),Rv=q(9054780),ao=2;function Kn(i,t,e){const n=document.createElement("canvas");n.width=i*ao,n.height=t*ao;const s=n.getContext("2d");s.scale(ao,ao),e(s,i,t);const r=new Ar(n);return r.colorSpace=Te,r.anisotropy=8,r}const cn="Arial, Helvetica, sans-serif";function yl(i,t,e,n){i.lineWidth=n*.42,i.strokeStyle="#1c9a48",i.beginPath(),i.arc(t-n*.3,e+n*.12,n*.55,0,Math.PI*2),i.stroke(),i.strokeStyle="#7cc242",i.beginPath(),i.arc(t+n*.3,e-n*.12,n*.55,0,Math.PI*2),i.stroke()}const Zn={square:()=>Kn(768,224,(i,t,e)=>{const n=["#f2c230","#2f6fb6","#e2457a","#1f2a55","#f08a2a","#39a7a0"],r=e/2,o=78;for(let a=0;a<6;a++){const l=a/6*Math.PI*2-.5,c=(a+1)/6*Math.PI*2-.5;i.fillStyle=n[a],i.beginPath(),i.moveTo(100+8*Math.cos(l+1),r+8*Math.sin(l+1)),i.lineTo(100+o*Math.cos(l),r+o*Math.sin(l)),i.lineTo(100+o*Math.cos(c),r+o*Math.sin(c)),i.fill()}i.fillStyle="#23201e",i.font=`900 88px ${cn}`,i.textBaseline="middle",i.fillText("MOOROOKA",205,e*.29,t-215),i.fillText("SQUARE",240,e*.74,t-300)}),dental:()=>Kn(768,256,(i,t,e)=>{i.fillStyle="#1f4fb5",i.beginPath(),i.arc(110,e/2,96,0,Math.PI*2),i.fill(),i.fillStyle="#ffffff",i.beginPath(),i.moveTo(62,96),i.bezierCurveTo(62,56,110,78,110,78),i.bezierCurveTo(110,78,158,56,158,96),i.bezierCurveTo(158,150,142,196,130,196),i.bezierCurveTo(120,196,122,150,110,150),i.bezierCurveTo(98,150,100,196,90,196),i.bezierCurveTo(78,196,62,150,62,96),i.fill(),i.fillStyle="#1f4fb5",i.textBaseline="middle",i.font=`700 64px ${cn}`,i.fillText("moorooka SQUARE",230,70,t-240),i.font=`900 120px ${cn}`,i.fillText("D E N T A L",228,180,t-236)}),medical:()=>Kn(768,256,(i,t,e)=>{i.fillStyle="#5aa9e6",i.fillRect(74,28,76,200),i.fillRect(12,90,200,76),i.fillStyle="#ffffff",i.beginPath(),i.arc(112,e/2,26,0,Math.PI*2),i.fill(),i.fillStyle="#1d2f6b",i.textBaseline="middle",i.font=`900 92px ${cn}`,i.fillText("MOOROOKA",236,78,t-246),i.fillText("MEDICAL",236,182,t-300)}),pylonDental:()=>Kn(512,160,(i,t,e)=>{i.fillStyle="#1c2f6e",i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.beginPath(),i.arc(70,e/2,44,0,Math.PI*2),i.fill(),i.textBaseline="middle",i.font=`700 40px ${cn}`,i.fillText("moorooka SQUARE",140,48,t-160),i.font=`900 72px ${cn}`,i.fillText("DENTAL",140,110,t-160)}),parking:()=>Kn(512,160,(i,t,e)=>{i.fillStyle="#1668c9",i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.textBaseline="middle",i.font=`900 124px ${cn}`,i.fillText("P",150,e/2+6),i.fillRect(256,e/2-13,80,26),i.beginPath(),i.moveTo(330,e/2-42),i.lineTo(382,e/2),i.lineTo(330,e/2+42),i.fill()}),boot:()=>Kn(512,160,(i,t,e)=>{i.fillStyle="#178a3c",i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.beginPath(),i.arc(74,62,44,0,Math.PI*2),i.fill(),yl(i,74,62,30),i.fillStyle="#ffffff",i.textBaseline="middle",i.font=`700 30px ${cn}`,i.fillText("woolworths",14,134,130),i.font=`700 56px ${cn}`,i.fillText("Direct",300,52,190),i.fillText("to boot",300,112,190),i.fillRect(178,44,96,62),i.fillStyle="#178a3c",i.fillRect(186,52,80,30)}),tower:()=>Kn(512,400,(i,t,e)=>{i.fillStyle="#34383b",i.fillRect(0,0,t,e),yl(i,t/2,150,118),i.fillStyle="#ffffff",i.textBaseline="middle",i.textAlign="center",i.font=`400 88px ${cn}`,i.fillText("woolworths",t/2,336,t-40)}),cafe:()=>Kn(640,224,(i,t)=>{i.fillStyle="#ffffff",i.textBaseline="middle",i.textAlign="center",i.font='400 112px Georgia, "Times New Roman", serif',i.fillText("botanic café",t/2,78,t-30),i.font=`400 54px ${cn}`,i.fillText("espresso  kitchen",t/2,176,t-120)}),entry:()=>Kn(1024,256,(i,t,e)=>{i.fillStyle="#ffffff",i.textBaseline="middle",i.font=`400 170px ${cn}`,i.fillText("woolworths",20,e/2+14,700),yl(i,880,e/2,104)})};function Ou(i){const t=new Ye({map:i,alphaTest:.4,roughness:.8,metalness:0,side:Ee,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});return t.onBeforeCompile=e=>{e.uniforms.uNight=es,e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * uNight * 0.7;`)},t.customProgramCacheKey=()=>"moorooka-sign",t}function zu(i){const t=S=>Yn(i,S[0],S[1]),e=t(yv),n=t(bv),s=Math.hypot(n[0]-e[0],n[1]-e[1]),r=(n[0]-e[0])/s,o=(n[1]-e[1])/s,a=(S,E)=>[e[0]+S*r-E*o,e[1]+S*o+E*r],l=t(Uu[0]),c=t(Uu[1]),h=Math.hypot(c[0]-l[0],c[1]-l[1]),d=(c[0]-l[0])/h,u=(c[1]-l[1])/h,f=u,m=-d,v=l[0]-10*f,p=l[1]-10*m;return{nw:e,centre:a,wing:(S,E)=>[v+S*f+E*d,p+S*m+E*u],toWing:(S,E)=>[(S-v)*f+(E-p)*m,(S-v)*d+(E-p)*u],toCentre:(S,E)=>[(S-e[0])*r+(E-e[1])*o,-(S-e[0])*o+(E-e[1])*r],south:S=>-((v-n[0])*o-(p-n[1])*r+S*(f*o-m*r))/(d*o-u*r),centreHeading:Math.atan2(-o,r),wingHeading:Math.atan2(-m,f),origin:[v,p]}}function Cv(i){const t=zu(i);return(e,n)=>{const[s,r]=t.toWing(e,n);if(s>-14.5&&s<10.4&&r>-11&&r<40)return!0;const[o,a]=t.toCentre(e,n);if(o<-3||o>106||a<-3||a>70)return!1;let l=!1;const c=ks.length/2;for(let h=0,d=c-1;h<c;d=h++){const u=ks[h*2],f=ks[h*2+1],m=ks[d*2],v=ks[d*2+1];f>a!=v>a&&o<(m-u)*(a-f)/(v-f)+u&&(l=!l);const p=Math.max(0,Math.min(1,((o-u)*(m-u)+(a-f)*(v-f))/((m-u)**2+(v-f)**2||1)));if(Math.hypot(o-u-(m-u)*p,a-f-(v-f)*p)<3)return!0}return l}}function Pv(i,t,e){const n=new Ie;if(n.name="square",!e)return n;const s=zu(i),r=new se,o=Dn(410500),a=[],l=e.eave,c=e.ridge,h=l+1.7,d=Math.min(31,l-13);let u=()=>{};const f=(I,U,F)=>{u=()=>r.frame(I,0,U,F),u()},m=()=>f(s.nw[0],s.nw[1],s.centreHeading),v=()=>f(s.origin[0],s.origin[1],s.wingHeading),p=(I,U)=>{const F=Math.hypot(U[0]-I[0],U[1]-I[1]);return f(I[0],I[1],Math.atan2(-(U[1]-I[1])/F,(U[0]-I[0])/F)),F},g=(I,U=1.5)=>t.yAt(r.wx(I,U),r.wz(I,U)),_=(I,U,F,Z,D,j)=>a.push({corners:[r.wx(I,D),F,r.wz(I,D),r.wx(U,D),F,r.wz(U,D),r.wx(U,D),Z,r.wz(U,D),r.wx(I,D),Z,r.wz(I,D)],tex:j}),M=(I,U)=>{(I[5]-I[2])*(I[6]-I[0])-(I[3]-I[0])*(I[8]-I[2])>0?r.quad(I[0],I[1],I[2],I[3],I[4],I[5],I[6],I[7],I[8],I[9],I[10],I[11],U):r.quad(I[0],I[1],I[2],I[9],I[10],I[11],I[6],I[7],I[8],I[3],I[4],I[5],U)},y=(I,U,F,Z,D,j,J=0,ot=.05)=>{if(Z-F<.05||U-I<.05)return;const lt=Math.max(1,Math.round((U-I)/D));for(let ft=0;ft<lt;ft++)r.box(I+(U-I)*ft/lt,F,J,I+(U-I)*(ft+1)/lt,Z,ot,ft%2?Nt(j,.955):j,null)},S=(I,U,F,Z,D=Tv,j=.6)=>{r.quad(I,F,.06,U,F,.06,U,Z,.06,I,Z,.06,D,j);const J=Math.max(1,Math.round((U-I)/1.4));for(let ot=0;ot<=J;ot++){const lt=I+(U-I)*ot/J;r.box(lt-.04,F,.06,lt+.04,Z,.11,Ys,null)}r.box(I,Z-.1,.06,U,Z,.12,Ys),r.box(I,F,.06,U,F+.12,.12,Ys)},E=(I,U,F,Z,D)=>{r.box(I,F,0,U,F+.16,Z,Nt(ge,.9),Xs,Nt(ge,.86)),r.box(I,F-.04,Z-.1,U,F+.46,Z,ge);for(const j of[I,U-.1])r.box(j,F-.04,0,j+.1,F+.46,Z,ge);for(const j of[I+.7,U-.7])r.quad(j-.04,D,.06,j+.04,D,.06,j+.04,F+.46,Z-.25,j-.04,F+.46,Z-.25,hi)},x=(I,U,F,Z,D,j,J=Nt(vl,.9))=>{for(let ot=U,lt=0;ot<D-.01;ot+=.26,lt++)r.box(I,ot,F,Z,Math.min(ot+.26,D),j,lt%2?Nt(vl,.94):vl,null);J&&r.quad(I,D,j,Z,D,j,Z,D,F,I,D,F,J)},b=(I,U,F,Z,D=oo,j=Av)=>{const J=r.wx(I,F),ot=r.wz(I,F),lt=o()*Math.PI;for(let ft=0;ft<6;ft++){r.frame(J,U,ot,lt+ft/6*Math.PI*2);const Tt=.75+o()*.4;r.blob(0,Z*.48*Tt,Z*.2+ft%2*Z*.1,Z*.2,Z*.5*Tt,Z*.06,6,4,D,j)}u()},w=(I,U,F,Z,D=Sl,j=oo)=>r.blob(I,U+Z*.7,F,Z,Z*.8,Z,6,4,D,j);m(),r.walls(Ev,d,l,Vs);const A=66,C=66.5,L=A/2,B=C/2,P=3.5,O=l+3,H=(I,U)=>l+(O-l)*Math.min(1,(1-Math.max(Math.abs(I-L)/L,Math.abs(U-B)/B))/(1-P/L));M([0,l,0,A,l,0,L+P,O,B-P,L-P,O,B-P],e.roof),M([A,l,0,A,l,C,L+P,O,B+P,L+P,O,B-P],Nt(e.roof,.97)),M([A,l,C,0,l,C,L-P,O,B+P,L+P,O,B+P],e.roof),M([0,l,C,0,l,0,L-P,O,B-P,L-P,O,B+P],Nt(e.roof,.97)),r.box(L-P,O,B-P,L+P,O+.8,B+P,Nt(Vs,.9),q(8363952));for(const[I,U,F,Z]of[[6,12,13,23],[6,12,26,33],[5,10,39,45]])M([I,H(I,F)+.12,F,U,H(U,F)+.12,F,U,H(U,Z)+.12,Z,I,H(I,Z)+.12,Z],Fu);const k=l-.35;r.cap(wv,k,Xs),r.quad(A,k,0,A,k,C,A,l,C,A,l,0,Vs);for(const[I,U,F,Z]of[[67.5,77,30,44],[67.5,77,47,62],[80.5,87,30,41]])r.box(I,k,F,U,k+.16,Z,Mn,Fu);for(const[I,U]of[[70,12],[73.5,17],[69,22],[84,44.5],[72,64],[91,25]])r.box(I,k,U,I+2.2,k+1.1,U+1.3,ro,Nt(ro,.85));const $=c-.6;r.box(70.5,k,4,75.5,$,5.1,hi);for(let I=k;I<$-1.4;I+=.5)r.box(70.5,I,5.1,75.5,I+.3,8.2,Nt(hi,1.25),null);r.box(70.5,$-1.6,5.1,75.5,$-1.4,8.2,hi),p(s.centre(75.5,4),s.centre(70.5,4)),_(.25,4.75,$-3.9,$-.25,.04,Zn.tower());const X=s.centre(98.4,23.2),z=s.centre(98.4,26.3),G=s.centre(75.2,0);let V=p(X,G);r.box(0,l,-.3,V,h,0,ge,ge),S(.3,3.4,g(1.8),g(1.8)+3.6,qs);{const I=g(2,1);x(.6,I-.5,.25,3.8,I+.8,1.6,Ml);for(const U of[1.2,2.2,3.2])b(U,I+.75,.9,.8);r.box(-.5,I,.3,.3,I+1.9,1.3,q(9067066));for(let U=0;U<4;U++)r.box(4.3+U*.5,I+.25,.3,4.7+U*.5,I+1,.9,Mn,null)}const ut=(I,U,F)=>{for(let Z=I;Z<U;Z+=3){const D=Math.min(Z+3,U),j=g(Z,1.4)+.3,J=g(D,1.4)+.3;M([Z,j,0,Z,j,F,D,J,F,D,J,0],so),r.quad(Z,j-.6,F,D,J-.6,F,D,J,F,Z,j,F,ui)}};ut(-1,V,2.8);const Y=7,at=(V-Y-3.6)/3;for(let I=0;I<3;I++){const U=3.6+I*at,F=U+at,Z=g((U+F)/2);r.box(U,Z-.6,0,F,Z+.05,.08,Nt(Vs,.8),null),S(U+.35,F-.35,Z+.05,Z+3),E(U+.15,F-.15,Z+3.25,2.1,Math.min(h-.3,Z+5.3)),y(U,F,Z+3.75,h,1.3,ge)}const ct=Gt+4;S(V-Y,V-.2,g(V-4)-.2,ct,qs,.5),r.box(V-Y,ct,0,V,ct+.5,.35,hi),y(V-Y,V,ct+.5,h,1.3,ge),V=p(G,s.nw),S(.2,6.6,Gt-1.2,ct,qs,.5),r.box(0,ct,0,6.8,ct+.5,.35,hi);{const U=g(48,3);y(24.2,V,U+4.1,l,6,Ws),S(31,57,U+.1,U+3.1),r.box(27,U+3.5,0,69,U+3.7,2.6,Nt(ge,.92),Xs,Nt(ge,.85)),r.box(27,U+3.45,2.5,69,U+3.95,2.6,ge);for(let F=28;F<=68;F+=8){const Z=t.yAt(r.wx(F,2.4),r.wz(F,2.4))-.2;r.cyl(F,Z,2.4,.09,.09,U+3.7-Z,5,Mn)}}const mt=s.centre(0,66.5),pt=s.centre(79.3,66.5);V=p(s.nw,mt),y(0,V,g(V/2)+.3,l,6,Ws);for(const I of[48,55])r.box(I,g(I+2)-.3,0,I+4,g(I+2)+4,.1,Mn,null);V=p(mt,pt),y(0,V,g(V/2)+.3,l,6,Ws);{const I=g(22,3);for(let U=11;U<33;U+=5.5)r.box(U,I-.5,0,U+4.2,I+4.2,.1,Mn,null);r.box(8,I+5,0,36,I+5.25,5,Nt(ge,.92),Xs,Nt(ge,.82));for(const U of[8.3,17.5,26.5,35.7])r.cyl(U,I-1,4.7,.11,.11,6,5,Mn)}const Ct=s.centre(79.3,42.5),Kt=s.centre(88.2,47.9),st=s.centre(88.2,26.3);V=p(pt,Ct),y(0,V,g(V/2)+.3,l,6,Ws),r.box(4,g(5)-.2,0,5.1,g(5)+2.1,.08,Ys,null),V=p(Kt,st),r.box(0,l,-.3,V,h,0,ge,ge),y(0,V,g(V/2)+.3,h,1.3,ge),r.box(3,g(4)-.2,0,4.1,g(4)+2.1,.08,Ys,null),V=p(st,z),r.box(0,l,-.3,V,h,0,ge,ge);{const I=g(4);S(.5,5.4,I+.05,I+3),E(.3,5.6,I+3.25,1.9,Math.min(h-.3,I+5.3)),y(0,5.8,I+3.75,h,1.3,ge),S(6,V-.2,g(8)-.1,g(8)+3.6,qs),_(6.5,V-.6,g(8)+1.25,g(8)+2.4,.13,Zn.cafe()),ut(0,V+1,2.2);for(const U of[6.8,8.6])b(U,g(U,2.6)+.3,2.6,1.5,Rv,q(11880538))}V=p(z,X),r.box(0,l,-.3,V,h,0,ge,ge),S(.2,V-.2,g(3)-.1,g(3)+3.6,qs),m();const dt=t.yAt(X[0],X[1]),At=95.9,Ft=23.8,yt=4.4,ne=-50*Math.PI/180,Re=100*Math.PI/180,oe=16,we=dt+3.75,he=h+.8,ve=(I,U=yt)=>{const F=ne+(Re-ne)*I/oe;return[At+U*Math.cos(F),Ft+U*Math.sin(F)]};for(let I=0;I<oe;I++){const[U,F]=ve(I),[Z,D]=ve(I+1),[j,J]=ve(I,yt-.14),[ot,lt]=ve(I+1,yt-.14),ft=I%2?Nt($s,.955):$s;r.quad(Z,we,D,U,we,F,U,he,F,Z,he,D,ft),r.quad(j,we,J,ot,we,lt,ot,he,lt,j,he,J,Nt($s,.7)),M([U,he,F,Z,he,D,ot,he,lt,j,he,J],Nt($s,.85))}const Oe=[];for(let I=0;I<=oe;I++)Oe.push(...ve(I,yt-.14));const[ue,K]=ve(0,yt-.14);Oe.push(ve(oe,yt-.14)[0],26.3,98.4,26.3,98.4,23.2,(ue+K+75.2)/2,(ue+K-75.2)/2),r.cap(Oe,we+.02,hi);const Lt=[];for(let I=0;I<=oe;I++)Lt.push(...ve(I,yt+.9));Lt.push(ve(oe)[0],26.3,98.4,26.3,98.4,23.2,(ue+K+75.2)/2,(ue+K-75.2)/2),r.cap(Lt,dt+.32,so);{const I=[101.6,c,21.4],U=[82,h+1.3,4],F=[86,h+1.3,29.6],Z=[77,h+.5,13],D=q(4935765),j=.32;for(const[J,ot,lt]of[[I,U,Z],[I,Z,F]])M([J[0],J[1],J[2],ot[0],ot[1],ot[2],lt[0],lt[1],lt[2],lt[0],lt[1],lt[2]],D),r.tri(J[0],J[1]-j,J[2],ot[0],ot[1]-j,ot[2],lt[0],lt[1]-j,lt[2],Nt(D,1.6));for(const[J,ot]of[[I,U],[U,Z],[Z,F],[F,I]])r.quad(J[0],J[1]-j,J[2],ot[0],ot[1]-j,ot[2],ot[0],ot[1],ot[2],J[0],J[1],J[2],Nt(D,.9));for(const[J,ot,lt]of[[99.3,25.5,c-1.2],[98.9,20.6,c-1.5],[94.2,27.9,h+2.2]]){const[ft,Tt]=s.centre(J,ot);r.cyl(J,t.yAt(ft,Tt)-.3,ot,.17,.17,lt-t.yAt(ft,Tt)+.3,6,hi)}}const Qt=Zn.entry(),Yt={pos:[],uv:[]};{const I=62*Math.PI/180,U=-34*Math.PI/180,F=14,Z=we+.8,D=we+2.4;for(let j=0;j<F;j++){const J=zt=>{const Xt=I+(U-I)*zt/F;return s.centre(At+(yt+.05)*Math.cos(Xt),Ft+(yt+.05)*Math.sin(Xt))},[ot,lt]=J(j),[ft,Tt]=J(j+1),Wt=j/F,xt=(j+1)/F;Yt.pos.push(ot,Z,lt,ft,Z,Tt,ft,D,Tt,ot,Z,lt,ft,D,Tt,ot,D,lt),Yt.uv.push(Wt,0,xt,0,xt,1,Wt,0,xt,1,Wt,1)}}v();const _t=s.south(0),ye=s.south(-13),Ot=s.south(5.2),kt=-13,N=6.4;r.walls([0,0,0,_t,kt,ye,kt,0],d,sn,Vs);const T=[kt,0,0,0,0,-.6,N,-.6,N,Ot,5.2,Ot,kt,ye];r.cap(T,io,Xs),r.walls(T,sn,io,ge),r.cap([0,-.6,N,-.6,N,Ot,5.2,Ot,0,_t],sn,Nt(ge,.93));for(const[I,U]of[[-9,4],[-6,12],[-9.5,16]])r.box(I,io,U,I+2.2,io+1.1,U+1.3,ro,Nt(ro,.85));for(let I=1.2;I<_t-1;I+=2.6)for(const U of[1.6,4.4])r.quad(U-.14,sn-.02,I-.14,U+.14,sn-.02,I-.14,U+.14,sn-.02,I+.14,U-.14,sn-.02,I+.14,q(16774358),3);const tt=3.6;r.walls([0,-.3,tt,-.3,tt,s.south(tt),0,_t],d,Gt,ui),r.cap([0,-.3,tt,-.3,tt,s.south(tt),0,_t],Gt,so);for(let I=1;I<=5;I++){const U=I*Gs;for(const F of[-.2,.2])r.cyl(4.3,Gt,U+F,.1,.1,sn-Gt,7,ge);r.cyl(1.5,Gt,U+.5,.055,.055,sn-Gt,5,Mn)}const gt=s.south(4.3)-.4;for(const[I,U]of[[-.3,Hs[0]],[Hs[1],gt]]){x(tt,d,I,5,Gt+.45,U,Ml);for(let F=I+.9;F<U-.6;F+=1.7+o()*.9){const Z=o();Math.abs(F/Gs-Math.round(F/Gs))<.12||(Z<.55?b(4.3,Gt+.4,F,1.5+o()*1.1):Z<.75?(r.cyl(4.3,Gt+.4,F,.07,.05,1.3,5,q(9076076)),r.blob(4.3,Gt+2.1,F,.85,.6,.85,7,4,Sl,oo)):w(4.3,Gt+.4,F,.5))}for(let F=I;F<U-.2;F+=4.4){const Z=Math.min(F+4.4,U),D=$n((F+Z)/2);if(!(D>Gt-.65)){x(5,d,F,6.3,D+.75,Z,Ml);for(let j=F+.5;j<Z-.3;j+=.9+o()*.5)w(5.65,D+.7,j,.28+o()*.14,Sl,o()<.3?q(11122592):oo)}}}{const[I,U]=Hs,F=$n((I+U)/2)+.12,Z=Gt-F,D=Math.round(Z/.168),j=(6.3-tt-.3)/D;for(let J=0;J<D;J++)r.box(tt+.3+j*J,d,I,tt+.3+j*(J+1),Gt-Z*(J+1)/D,U,ui);r.box(tt,d,I,tt+.3,Gt,U,ui);for(const J of[I+.12,(I+U)/2,U-.12]){for(const[ot,lt]of[[tt+.3,Gt],[6.3,F]])r.box(ot-.03,lt,J-.03,ot+.03,lt+.95,J+.03,Mn,null);r.quad(tt+.3,Gt+.9,J-.03,6.3,F+.9,J-.03,6.3,F+.96,J+.03,tt+.3,Gt+.96,J+.03,Mn)}}{const I=Z=>Z>=-2?9.8:9.8+(Z+2)*.6,U=Z=>Z<-.3?2.6:(Z<Hs[0]||Z>Hs[1])&&$n(Z)>Gt-.65?5:6.3,F=Ot+1;for(let Z=-9.5;Z<F;Z+=1.5){const D=Math.min(Z+1.5,F),j=$n(Z)+.12,J=$n(D)+.12;M([U(Z+.01),j,Z,I(Z),j,Z,I(D),J,D,U(Z+.01),J,D],so),r.quad(I(Z),j-1.2,Z,I(D),J-1.2,D,I(D),J,D,I(Z),j,Z,ui)}x(2.2,d,-9.5,2.6,$n(-5)+1.05,-.8)}x(2.6,d,-.8,4.5,sn,-.3,null),x(kt,d,-.25,0,sn,.02,null),p(s.wing(4.5,-.8),s.wing(2.6,-.8)),r.box(.15,Gt+3.8,0,1.75,Gt+4.4,.05,ge),_(.15,1.75,Gt+3,Gt+3.7,.05,Zn.pylonDental()),r.box(.15,Gt+2.3,0,1.75,Gt+2.9,.05,ge),_(.15,1.75,Gt+.8,Gt+1.5,.05,Zn.parking()),_(.15,1.75,Gt-.1,Gt+.7,.05,Zn.boot()),V=p(s.wing(0,_t),s.wing(0,0)),S(.4,V-.4,Gt,Gt+2.9),r.box(0,Gt+2.9,0,V,Gt+3.3,.12,q(9407106)),y(.2,V-.1,Gt+3.3,sn-.05,1.25,$s,.2,.3);for(let I=1;I<=5;I++)r.box(V-I*Gs-.9,Gt+3,.1,V-I*Gs-.82,Gt+3.08,1.5,Mn);_(V-19.6,V-16,Gt+3.5,Gt+4.7,.34,Zn.dental()),_(V-14.6,V-11.2,Gt+3.55,Gt+4.68,.34,Zn.medical()),V=p(s.wing(kt,0),s.wing(kt,ye));{const I=g(V/2,3);r.box(.4,I-.3,-.5,V-.4,Gt-.6,.02,q(1777185),null);for(let U=0;U<=V;U+=V/4)r.box(U-.3,I-.5,0,U+.3,Gt-.6,.12,ui,null);r.box(0,Gt-.6,0,V,Gt,.12,ui),y(0,V,Gt,sn,1.3,Ws)}V=p(s.wing(8.4,-2.8),s.wing(5.6,-4.4));{const I=$n(-3.6)+.12;x(0,I-1,-.35,V,I+1.15,0),_(.2,V-.2,I+.14,I+1.02,.03,Zn.square())}v();{const I=$n(15.6)+.12;r.box(6.9,I,15.2,7.4,I+.1,16,ui),r.box(6.95,I+.1,15.25,7.35,I+1.3,15.95,q(15855590),q(14276300)),r.box(7.35,I+.35,15.35,7.37,I+1,15.6,q(15909424),null),r.box(7.35,I+.3,15.65,7.37,I+.95,15.88,q(3108790),null);for(const[U,F,Z]of[[9.2,-1.2,Math.PI],[5.4,-8.4,Math.PI*.75]]){const D=$n(F)+.12,j=r.wx(U,F),J=r.wz(U,F);r.frame(j,0,J,s.wingHeading+Z),r.cyl(0,D,0,.07,.07,4.2,6,Mn),r.box(-.17,D+2.9,.08,.17,D+3.95,.3,q(1776927));for(const[ot,lt,ft]of[[0,14169643,0],[1,15114780,0],[2,3126359,2]]){const Tt=D+3.62-ot*.32;r.quad(-.1,Tt,.31,.1,Tt,.31,.1,Tt+.22,.31,-.1,Tt+.22,.31,Nt(q(lt),ft?1:.45),ft)}u()}}r.frame();const ht=new Jt(r.build(),qn());ht.castShadow=!0,ht.receiveShadow=!0,n.add(ht);for(const I of a){const U=new Ae,F=I.corners;U.setAttribute("position",new re([F[0],F[1],F[2],F[3],F[4],F[5],F[6],F[7],F[8],F[0],F[1],F[2],F[6],F[7],F[8],F[9],F[10],F[11]],3)),U.setAttribute("uv",new re([0,0,1,0,1,1,0,0,1,1,0,1],2)),U.computeVertexNormals(),n.add(new Jt(U,Ou(I.tex)))}const vt=new Ae;return vt.setAttribute("position",new re(Yt.pos,3)),vt.setAttribute("uv",new re(Yt.uv,2)),vt.computeVertexNormals(),n.add(new Jt(vt,Ou(Qt))),n}const lo=[3104138,12076090,15131350,4156234,2895411,14263361,8018572,10135469,15043163,4886453].map(i=>new Rt(i)),Bu=[3422271,5989488,2832981,7035464,2040100,11049860].map(i=>new Rt(i)),ku=[14727578,13211508,10252114,15782068,8016960].map(i=>new Rt(i)),Gu=[3811870,13214314,15260870,1907999,9067059].map(i=>new Rt(i)),Lv=240,Hu=230;class Dv{constructor(t,e,n,s,r=()=>!1){it(this,"group",new Ie);it(this,"walks",[]);it(this,"centres");it(this,"people",[]);it(this,"parts");it(this,"rand",Dn(9071));it(this,"m",new ie);it(this,"r",new ie);it(this,"q",new rn);it(this,"v",new Q);it(this,"up",new Q(0,1,0));it(this,"one",new Q(1,1,1));it(this,"size",new Q);it(this,"hip",new ie);it(this,"body",new ie);this.hf=n,this.skip=r,this.group.name="strollers";for(const p of t){if(p.cls>3||p.flags&(Hr|Is)||p.length<30)continue;const g=e[String(p.index)],_=g?[[1,g[0]/10],[-1,g[1]/10]]:p.cls<=2?[[1,2.3],[-1,2.3]]:[];for(const[M,y]of _){if(!(y>0))continue;const S=p.pts.length/3,E=new Float32Array(S*2),x=new Float32Array(S);for(let b=0;b<S;b++){const w=Math.max(b-1,0),A=Math.min(b+1,S-1);let C=p.pts[A*3]-p.pts[w*3],L=p.pts[A*3+2]-p.pts[w*3+2];const B=Math.hypot(C,L)||1;C/=B,L/=B;const P=p.width/2+y;E[b*2]=p.pts[b*3]-L*M*P,E[b*2+1]=p.pts[b*3+2]+C*M*P,b&&(x[b]=x[b-1]+Math.hypot(E[b*2]-E[b*2-2],E[b*2+1]-E[b*2-1]))}this.walks.push({pts:E,at:x,length:x[S-1]})}}this.centres=new Float32Array(this.walks.length*2),this.walks.forEach((p,g)=>{const _=Math.floor(p.pts.length/4)*2;this.centres[g*2]=p.pts[_],this.centres[g*2+1]=p.pts[_+1]});const o=qn({roughness:.84}),a=(p,g)=>{const _=new an(p.build(),o,g);return _.castShadow=!0,_.frustumCulled=!1,_.count=0,_.setColorAt(0,new Rt(1,1,1)),this.group.add(_),_},l=q(16777215),c=q(12105912),h=new se;h.box(-.21,.84,-.12,.21,1.42,.12,l);const d=new se;d.blob(0,1.56,0,.11,.13,.11,6,3,l);const u=new se;u.box(-.08,-.84,-.09,.08,0,.09,l,null);const f=new se;f.box(-.04,-.58,-.09,.04,0,.09,l,null);const m=new se;m.box(-.12,.32,-.32,.12,.56,.3,l),m.box(-.09,.48,.26,.09,.7,.48,l),m.box(-.05,.5,.46,.05,.6,.58,c);for(const p of[-.08,.08])m.box(p-.03,.68,.3,p+.03,.78,.36,c);m.box(-.025,.5,-.5,.025,.56,-.3,l);for(const[p,g]of[[-.08,.2],[.08,.2],[-.08,-.22],[.08,-.22]])m.box(p-.035,0,g-.04,p+.035,.34,g+.04,c);const v=new se;v.box(-.012,0,-.012,.012,1,.012,q(13123631),null),this.parts={torso:a(h,s),head:a(d,s),leg:a(u,s*2),arm:a(f,s*2),dog:a(m,s),lead:a(v,s)},this.parts.lead.castShadow=!1;for(let p=0;p<s;p++)this.people.push(this.newWalker())}newWalker(){return{walk:this.walks[0],s:-1,dir:1,pace:1.15+this.rand()*.4,tall:.92+this.rand()*.12,lane:(this.rand()-.5)*.5,dog:this.rand()<.35?Math.floor(this.rand()*Gu.length):-1,heading:0,dogHeading:0}}place(t,e,n){const s=[];for(let r=0;r<this.walks.length;r++)Math.hypot(this.centres[r*2]-e,this.centres[r*2+1]-n)<Hu*.8&&s.push(r);return s.length?(t.walk=this.walks[s[Math.floor(this.rand()*s.length)]],t.s=this.rand()*t.walk.length,t.dir=this.rand()<.5?1:-1,!0):!1}where(t,e){const n=t.at,s=t.pts;let r=0,o=n.length-1;for(;o-r>1;){const d=r+o>>1;n[d]<e?r=d:o=d}const a=n[o]-n[r]||1,l=Math.min(1,Math.max(0,(e-n[r])/a)),c=(s[o*2]-s[r*2])/a,h=(s[o*2+1]-s[r*2+1])/a;return[s[r*2]+(s[o*2]-s[r*2])*l,s[r*2+1]+(s[o*2+1]-s[r*2+1])*l,c,h]}update(t,e,n,s){const r=s<Lv&&this.walks.length>0;if(this.group.visible=r,!r)return!1;const o=this.parts;let a=0,l=0;for(const c of this.people){if(c.s<0&&!this.place(c,e,n))continue;c.s+=c.dir*c.pace*t,(c.s>c.walk.length||c.s<0)&&(c.dir=-c.dir,c.s=Math.min(c.walk.length,Math.max(0,c.s)));let[h,d,u,f]=this.where(c.walk,c.s);if(Math.hypot(h-e,d-n)>Hu){c.s=-1;continue}if(u*=c.dir,f*=c.dir,h+=f*c.lane,d-=u*c.lane,this.skip(h,d))continue;let m=Math.atan2(u,f)-c.heading;m=Math.atan2(Math.sin(m),Math.cos(m)),c.heading+=m*Math.min(1,t*5);const v=this.hf.yAt(h,d)+.02,p=c.tall,g=Math.sin(c.s*4.4)*.55;this.q.setFromAxisAngle(this.up,c.heading),this.body.compose(this.v.set(h,v,d),this.q,this.size.set(p,p,p)),o.torso.setMatrixAt(a,this.body),o.head.setMatrixAt(a,this.body);const _=a*7+Math.floor(c.pace*100)>>>0;o.torso.setColorAt(a,lo[_%lo.length]),o.head.setColorAt(a,ku[_%ku.length]);for(const[M,y]of[[0,-1],[1,1]])this.r.makeRotationX(y*g).premultiply(this.hip.makeTranslation(y*.09,.84,0).premultiply(this.body)),o.leg.setMatrixAt(a*2+M,this.r),o.leg.setColorAt(a*2+M,Bu[_%Bu.length]),this.r.makeRotationX(-y*g*.8).premultiply(this.hip.makeTranslation(y*.25,1.38,0).premultiply(this.body)),o.arm.setMatrixAt(a*2+M,this.r),o.arm.setColorAt(a*2+M,lo[_%lo.length]);if(c.dog>=0){const M=h+u*1+f*.75,y=d+f*1-u*.75;let S=Math.atan2(u,f)-c.dogHeading;S=Math.atan2(Math.sin(S),Math.cos(S)),c.dogHeading+=S*Math.min(1,t*4);const E=Math.abs(Math.sin(c.s*7))*.03;this.q.setFromAxisAngle(this.up,c.dogHeading),this.m.compose(this.v.set(M,this.hf.yAt(M,y)+.02+E,y),this.q,this.one),o.dog.setMatrixAt(l,this.m),o.dog.setColorAt(l,Gu[c.dog]);const x=h+f*.26*p+u*.1,b=d-u*.26*p+f*.1,w=v+.86*p,A=M+u*.3,C=y+f*.3,L=this.hf.yAt(M,y)+.62,B=x-A,P=w-L,O=b-C,H=Math.hypot(B,P,O)||1;this.q.setFromUnitVectors(this.up,this.v.set(B/H,P/H,O/H)),this.m.compose(this.v.set(A,L,C),this.q,this.size.set(1,H,1)),o.lead.setMatrixAt(l,this.m),l++}a++}o.torso.count=o.head.count=a,o.leg.count=o.arm.count=a*2,o.dog.count=o.lead.count=l;for(const c of Object.values(o))c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0);return a>0}dispose(){for(const t of Object.values(this.parts))t.geometry.dispose(),t.dispose()}}function Iv(){const i=[];let t=new se;t.cyl(0,0,0,.04,.026,.56,4,q(12168602)),is(t,0,.72,0,.36,.3,.36,2,q(4020790),q(9086578)),is(t,.17,.52,.1,.24,.19,.24,3,q(3757370),q(8099942)),i.push(Si(t)),t=new se,t.cyl(0,0,0,.06,.045,.36,4,q(7034954)),is(t,0,.62,0,.47,.4,.47,4,q(2773542),q(7973460)),i.push(Si(t)),t=new se,t.cyl(0,0,0,.05,.035,.42,4,q(6246470)),is(t,0,.66,0,.5,.34,.5,5,q(6114450),q(12034278)),i.push(Si(t)),t=new se,t.cyl(0,0,0,.07,.05,.5,4,q(6969418)),is(t,0,.7,0,.62,.26,.62,6,q(4156975),q(14831660)),i.push(Si(t)),t=new se,t.cyl(0,0,0,.034,.026,.82,5,q(10128504));for(let e=0;e<7;e++)t.frame(0,0,0,e/7*Math.PI*2),t.blob(0,.83-e%2*.03,.13,.04,.022,.13,4,3,q(3959600),q(7972432));return t.frame(),t.blob(0,.86,0,.06,.06,.06,5,3,q(5077562)),i.push(Si(t)),t=new se,t.cyl(0,0,0,.03,.022,.2,4,q(5194038)),t.cyl(0,.14,0,.2,.1,.3,6,q(2310186)),t.cyl(0,.4,0,.16,.07,.3,6,q(2837040)),t.cyl(0,.66,0,.11,0,.34,6,q(3627578)),i.push(Si(t)),t=new se,is(t,0,.45,0,.8,.5,.8,1,q(3101224),q(7774294)),i.push(Si(t)),i}function Nv(i,t,e,n=()=>!1){return r_(i.trees,Iv(),t,e,n,{tile:400,near:300})}const bl=6,Uv=1,Vu=2,Fv=3,Ov=4,zv=5,Bv=6,kv=7,Gv=8,Hv=9,Vv=10,Wv=11,Xv=12,qv=13,Yv=14,$v=17,Sn=90,Wu=330,Ei=q(9409430),El=q(2500651),Kv=q(9071178),Zv=q(13815750),wl=q(3104058),Jv=q(11022890),Qv=q(14268718),Xu=[5209412,5932872,6853456,4682303,7245642].map(q),qu=[14241898,15262416,14726447,11038665].map(q),Yu=[3104138,12076090,15131350,4156234,2895411,14263361,8018572,10135469].map(q),$u=[8359802,13223088,9278358,6253414,14210508].map(q),Ku=[10463130,13223088,7306612,14210508].map(q),Zu=[3811870,13214314,15260870,1907999,9067059].map(q),jv=[q(15855592),q(9075560),q(10246723),q(2763822)];function t1(i,t,e=0){const n=Zu[t%Zu.length],s=Nt(n,.7);i.box(-.32,.32,-.12,.3,.56,.12,n),i.box(.26,.48,-.09,.48,.7,.09,n),i.box(.46,.5,-.05,.58,.6,.05,s);for(const r of[-.08,.08])i.box(.3,.68,r-.03,.36,.78,r+.03,s);i.box(-.5,.5,-.025,-.3,.56,.025,n);for(const[r,o,a]of[[.2,-.08,e],[.2,.08,-e],[-.22,-.08,-e],[-.22,.08,e]])i.box(r-.04+a*.12,0,o-.035,r+.04+a*.12,.34,o+.035,s)}function Tl(i,t,e,n){const s=i/2+n,r=t/2+n;if(!e)return[[-s,-r],[s,-r],[s,r],[-s,r]];const o=Math.min(r,s),a=[];for(const[l,c]of[[s-o,-Math.PI/2],[-s+o,Math.PI/2]])for(let h=0;h<=6;h++){const d=c+h/6*Math.PI;a.push([l+Math.cos(d)*o,Math.sin(d)*o])}return a}class e1{constructor(t,e,n,s,r=()=>!1){it(this,"group",new Ie);it(this,"cells",new Map);it(this,"built",new Map);it(this,"material",qn({roughness:.84}));it(this,"water",new Ye({color:4635862,roughness:.08,metalness:.1,emissive:871260,emissiveIntensity:.35,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}));it(this,"flatMat",qn({roughness:.9}));it(this,"far");this.data=t,this.hf=e,this.shadows=n,this.near=s,this.skip=r,this.far=s+150,this.group.name="yards",this.flatMat.polygonOffset=!0,this.flatMat.polygonOffsetFactor=-2,this.flatMat.polygonOffsetUnits=-4;for(let o=0;o+bl<=t.length;o+=bl){const a=`${Math.floor(t[o+1]/10/Sn)}:${Math.floor(t[o+2]/10/Sn)}`;let l=this.cells.get(a);l||this.cells.set(a,l=[]),l.push(o)}}get count(){return this.data.length/bl}update(t,e,n){const s=n<Wu;let r=this.group.visible!==s;this.group.visible=s;for(const[d,u]of this.built){const[f,m]=d.split(":").map(Number);Math.hypot((f+.5)*Sn-t,(m+.5)*Sn-e)>this.far&&(this.group.remove(u),u.traverse(v=>{var p;return(p=v.geometry)==null?void 0:p.dispose()}),this.built.delete(d),r=!0)}if(!s)return r;let o=null,a=this.near;const l=Math.floor(t/Sn),c=Math.floor(e/Sn),h=Math.ceil(this.near/Sn)+1;for(let d=c-h;d<=c+h;d++)for(let u=l-h;u<=l+h;u++){const f=`${u}:${d}`;if(this.built.has(f)||!this.cells.has(f))continue;const m=Math.hypot((u+.5)*Sn-t,(d+.5)*Sn-e);m<a&&(a=m,o=f)}if(o){const d=this.build(this.cells.get(o));this.built.set(o,d),this.group.add(d),r=!0}return r}pending(t,e,n){if(n>=Wu)return!1;for(const s of this.cells.keys()){if(this.built.has(s))continue;const[r,o]=s.split(":").map(Number);if(Math.hypot((r+.5)*Sn-t,(o+.5)*Sn-e)<this.near)return!0}return!1}build(t){const e=this.data,n=this.hf,s=new se,r=new se,o=new se;for(const c of t){const h=e[c],d=e[c+1]/10,u=e[c+2]/10,f=e[c+3]/10*Math.PI/180,m=e[c+4],v=e[c+5];if(this.skip(d,u))continue;const p=n.yAt(d,u),g=e[c+1]*31+e[c+2]*17>>>0,_=Dn(g+7);switch(h){case Uv:case Vu:{const M=m/100,y=v/100,S=h===Vu,E=Tl(M,y,S,0),x=Tl(M,y,S,.6),b=Tl(M,y,S,1.5),w=(L,B,P)=>{const O=d+L*Math.cos(f)-B*Math.sin(f),H=u+L*Math.sin(f)+B*Math.cos(f);return[O,n.yAt(O,H)+P,H]},A=q(4635862);for(let L=1;L+1<E.length;L++){const B=w(...E[0],.05),P=w(...E[L],.05),O=w(...E[L+1],.05);o.tri(B[0],B[1],B[2],O[0],O[1],O[2],P[0],P[1],P[2],A)}for(let L=0;L<E.length;L++){const B=(L+1)%E.length,P=w(...E[L],.07),O=w(...E[B],.07),H=w(...x[L],.07),k=w(...x[B],.07);r.quad(P[0],P[1],P[2],H[0],H[1],H[2],k[0],k[1],k[2],O[0],O[1],O[2],Zv)}const C=q(1974307);for(let L=0;L<b.length;L++){const B=(L+1)%b.length,[P,,O]=w(...b[L],0),[H,,k]=w(...b[B],0),$=Math.hypot(H-P,k-O);if($<.2)continue;const X=(H-P)/$,z=(k-O)/$,G=Math.max(1,Math.round($/.25));for(let V=0;V<G;V++){const ut=P+X*(V*$/G),Y=O+z*(V*$/G),at=n.yAt(ut,Y),ct=V%Math.max(1,Math.round(2.4/.25))===0?.03:.011;this.skip(ut,Y)||(s.frame(ut,at,Y,Math.atan2(X,z)),s.box(-ct,0,-ct,ct,1.2,ct,C,null))}for(const V of[.1,1.15]){const ut=n.yAt(P,O)+V,Y=n.yAt(H,k)+V;s.frame(),s.quad(P,ut,O,H,Y,k,H,Y+.04,k,P,ut+.04,O,C)}}break}case Fv:{const M=m/100;s.frame(d,p,u,f),s.cyl(0,0,0,.04,.04,2.1,6,Ei);for(let y=0;y<4;y++){const S=Math.cos(y*Math.PI/2),E=Math.sin(y*Math.PI/2);s.quad(0,1.95,0,S*M,2.08,E*M,S*M,2.12,E*M,0,1.99,0,Ei)}for(const y of[.45,.72,1]){const S=M*y;for(let E=0;E<4;E++){const x=E*Math.PI/2,b=(E+1)*Math.PI/2,w=1.95+.13*y;s.box(Math.min(Math.cos(x)*S,Math.cos(b)*S)-.008,w-.008,Math.min(Math.sin(x)*S,Math.sin(b)*S)-.008,Math.max(Math.cos(x)*S,Math.cos(b)*S)+.008,w+.008,Math.max(Math.sin(x)*S,Math.sin(b)*S)+.008,q(13619922),null)}}if(_()<.55)for(let y=0;y<4;y++){if(_()<.45)continue;const S=y*Math.PI/2,E=M*.95;for(let x=0;x<3;x++){const b=(x+.5)/3,w=Math.cos(S)*E*(1-b)+Math.cos(S+Math.PI/2)*E*b,A=Math.sin(S)*E*(1-b)+Math.sin(S+Math.PI/2)*E*b,C=.5+_()*.35,L=.22+_()*.12,B=Yu[Math.floor(_()*Yu.length)],P=(Math.cos(S+Math.PI/2)-Math.cos(S))*.7071,O=(Math.sin(S+Math.PI/2)-Math.sin(S))*.7071;s.quad(w-P*L,2.1,A-O*L,w+P*L,2.1,A+O*L,w+P*L,2.1-C,A+O*L,w-P*L,2.1-C,A-O*L,B)}}break}case Ov:{const M=Ku[g%Ku.length],y=m/200,S=v/200;s.frame(d,p,u,f),s.box(-y,0,-S,y,1.9,S,M),s.quad(-y-.1,1.85,S+.1,y+.1,1.85,S+.1,y+.1,2.25,0,-y-.1,2.25,0,Nt(M,1.08)),s.quad(y+.1,1.85,-S-.1,-y-.1,1.85,-S-.1,-y-.1,2.25,0,y+.1,2.25,0,Nt(M,.95)),s.tri(y,1.9,S,y,1.9,-S,y,2.25,0,M),s.tri(-y,1.9,-S,-y,1.9,S,-y,2.25,0,M),s.quad(-.75,0,S+.01,.75,0,S+.01,.75,1.75,S+.01,-.75,1.75,S+.01,Nt(M,.86)),s.box(-.01,.1,S+.01,.01,1.7,S+.03,Nt(M,.7),null);break}case zv:{const M=m/100,y=.85,S=[q(3108789),q(3840586),q(14262842)][g%3];s.frame(d,p,u,f),s.cyl(0,y-.02,0,M+.25,M+.25,.08,12,S,S),s.cyl(0,y,0,M,M,.07,12,El,El);for(let E=0;E<6;E++){const x=E/6*Math.PI*2,b=Math.cos(x)*(M+.2),w=Math.sin(x)*(M+.2);E%2===0&&s.box(b-.03,0,w-.03,b+.03,y,w+.03,Ei,null),s.box(b-.025,y,w-.025,b+.025,y+1.75,w+.025,q(2895667),null);const A=(E+1)/6*Math.PI*2,C=Math.cos(A)*(M+.2),L=Math.sin(A)*(M+.2);s.quad(b,y+1.7,w,C,y+1.7,L,C,y+1.76,L,b,y+1.76,w,S)}break}case Bv:{const M=m/100,y=v/100,S=$u[g%$u.length];s.frame(d,p,u,0),s.cyl(0,0,0,M,M,y,10,S,Nt(S,.9));for(let E=1;E<4;E++)s.cyl(0,y*E/4,0,M+.012,M+.012,.04,10,Nt(S,.86));s.cyl(0,y,0,.18,.18,.08,6,Nt(S,.8),Nt(S,.8));break}case kv:s.frame(d,p,u,f),s.box(-.6,0,-.3,.6,.85,.3,q(2895409)),s.box(-.55,.85,-.28,.55,1.1,.28,q(10133154),q(3816512));break;case Gv:{const M=_()<.5?q(15526370):q(3882304),y=[q(15328207),q(3104138),q(12076090)][g%3];s.frame(d,p,u,f),s.cyl(0,.7,0,.55,.55,.05,8,M,M),s.box(-.04,0,-.04,.04,.7,.04,Ei,null),_()<.5&&(s.box(-.025,.7,-.025,.025,2.2,.025,Ei,null),s.cyl(0,2,0,1.4,0,.45,8,y));for(let S=0;S<4;S++){const E=S/4*Math.PI*2+.4,x=Math.cos(E)*.85,b=Math.sin(E)*.85;s.box(x-.22,0,b-.22,x+.22,.45,b+.22,M),s.box(x+Math.cos(E)*.2-.04,.45,b+Math.sin(E)*.2-.2,x+Math.cos(E)*.2+.04,.9,b+Math.sin(E)*.2+.2,M)}break}case Hv:{const M=q(13123631),y=q(3104680);s.frame(d,p,u,f);for(const S of[-1.9,1.9])s.box(S-.07,0,-.92,S+.07,2.4,-.88,M,null),s.box(S-.07,0,.88,S+.07,2.4,.92,M,null);s.box(-2,2.36,-.07,2,2.48,.07,M);for(const S of[-.9,.9]){for(const E of[-.22,.22])s.box(S-.015,.48,E-.015,S+.015,2.38,E+.015,Ei,null);s.box(S-.24,.44,-.24,S+.24,.5,.24,S<0?y:El)}break}case Vv:s.frame(d,p,u,f),s.box(-.62,0,-.3,-.04,1,.3,wl,Jv),s.box(.04,0,-.3,.62,1,.3,wl,Qv),_()<.4&&s.box(.7,0,-.3,1.28,1,.3,wl,q(6265402));break;case Wv:{const M=[q(15855592),q(2763822),q(10246723),q(13218442)][g%4];s.frame(d,p,u,f),g%3===0?s.box(-.22,0,-.22,.22,1.05,.22,q(10246723)):s.box(-.04,0,-.04,.04,.95,.04,Ei,null),s.box(-.2,.95,-.15,.2,1.25,.15,M);break}case Xv:{const M=m/100,y=Math.max(2,Math.round(M/1.2)),S=Dn(v+11);s.frame(d,p,u,f);for(let E=0;E<y;E++){const x=y===1?0:E/(y-1)*M,b=.35+S()*.25,w=Xu[Math.floor(S()*Xu.length)],A=S()<.25?qu[Math.floor(S()*qu.length)]:Nt(w,1.12),C=d+Math.sin(f)*x,L=u+Math.cos(f)*x;s.frame(C,n.yAt(C,L),L,0),s.blob((S()-.5)*.3,b*.75,(S()-.5)*.3,b,b*.85,b,6,3,Nt(w,.8),A)}break}case qv:{const M=m/10,y=v/10,S=Math.round(e[c+3]/10)%4,E=jv[S],x=Math.hypot(M-d,y-u);if(x<.5)break;const b=(M-d)/x,w=(y-u)/x,A=Math.atan2(b,w),C=S===2?.8:S===1?1.2:1,L=Math.max(1,Math.round(x/2.4));for(let B=0;B<=L;B++){const P=d+b*(x*B)/L,O=u+w*(x*B)/L;s.frame(P,n.yAt(P,O),O,A);const H=S===2?.2:.05;s.box(-H,0,-H,H,C+(S===2?.15:.05),H,S===2?Nt(E,.9):E)}if(S===1||S===2)for(let B=0;B<L;B++){const P=d+b*(x*B)/L,O=u+w*(x*B)/L,H=d+b*(x*(B+1))/L,k=u+w*(x*(B+1))/L,$=n.yAt(P,O),X=n.yAt(H,k),z=w*.06,G=-b*.06;s.frame(),s.quad(P+z,$,O+G,H+z,X,k+G,H+z,X+C,k+G,P+z,$+C,O+G,E),s.quad(H-z,X,k-G,P-z,$,O-G,P-z,$+C,O-G,H-z,X+C,k-G,Nt(E,.92)),s.quad(P+z,$+C,O+G,H+z,X+C,k+G,H-z,X+C,k-G,P-z,$+C,O-G,Nt(E,1.05))}else{const B=S===0?.16:.12,P=Math.max(2,Math.round(x/B));for(let O=0;O<=P;O++){const H=d+b*(x*O)/P,k=u+w*(x*O)/P;s.frame(H,n.yAt(H,k),k,A),S===0?s.box(-.035,0,-.012,.035,C-.08,.012,E,q(15263454)):s.box(-.01,.05,-.01,.01,C-.05,.01,E,null)}for(const O of[.25,C-.2]){s.frame();const H=n.yAt(d,u)+O,k=n.yAt(M,y)+O,$=w*.02,X=-b*.02;s.quad(d+$,H,u+X,M+$,k,y+X,M+$,k+.05,y+X,d+$,H+.05,u+X,Nt(E,.95)),s.quad(M-$,k,y-X,d-$,H,u-X,d-$,H+.05,u-X,M-$,k+.05,y-X,Nt(E,.9))}}break}case Yv:{const M=[q(15328208),q(14205066),q(10469584)][g%3];s.frame(d,p,u,f);for(const[y,S]of[[-.8,-.7],[.8,-.7],[.8,.7],[-.8,.7]])s.box(y-.05,0,S-.05,y+.05,.9,S+.05,Kv,null);s.box(-.85,.9,-.75,.85,2,.75,M),s.quad(-.95,1.95,.85,.95,1.95,.85,.95,2.5,0,-.95,2.5,0,q(9128506)),s.quad(.95,1.95,-.85,-.95,1.95,-.85,-.95,2.5,0,.95,2.5,0,q(8077107)),s.tri(.85,2,.75,.85,2,-.75,.85,2.5,0,M),s.tri(-.85,2,-.75,-.85,2,.75,-.85,2.5,0,M),s.quad(.9,.9,-.3,1.6,0,-.3,1.6,0,.3,.9,.9,.3,q(14726447));break}case $v:s.frame(d,p,u,f),t1(s,m);break}}const a=new Ie,l=(c,h,d)=>{if(!c.vertexCount)return;const u=new Jt(c.build(),h);u.castShadow=d&&this.shadows,u.receiveShadow=!0,a.add(u)};return l(s,this.material,!0),l(r,this.flatMat,!1),l(o,this.water,!1),a}dispose(){for(const t of this.built.values())t.traverse(e=>{var n;return(n=e.geometry)==null?void 0:n.dispose()});this.built.clear(),this.material.dispose(),this.flatMat.dispose(),this.water.dispose()}}const Ju=1,Qu={x:-150,z:-40,dist:2900,polar:54,azimuth:22},n1={day:{shallow:9277288,deep:5003844},golden:{shallow:10127458,deep:4671290},night:{shallow:1976876,deep:593681}};function i1(i,t){const e=new se,n=q(16765440),s=i.length/2;let r=0;for(let l=0;l<s;l++){const c=(l+1)%s,h=i[l*2]/10,d=i[l*2+1]/10,u=i[c*2]/10,f=i[c*2+1]/10,m=Math.hypot(u-h,f-d);if(m<.01)continue;const v=(u-h)/m,p=(f-d)/m;for(let g=-r;g<m;g+=15){const _=Math.max(0,g),M=Math.min(m,g+9);if(M<=_)continue;const y=Math.max(1,Math.ceil((M-_)/5));for(let S=0;S<y;S++){const E=_+(M-_)*S/y,x=_+(M-_)*(S+1)/y,b=h+v*E,w=d+p*E,A=h+v*x,C=d+p*x,L=t.yAt(b,w)+.9,B=t.yAt(A,C)+.9;e.quad(b-p*1.1,L,w+v*1.1,A-p*1.1,B,C+v*1.1,A+p*1.1,B,C-v*1.1,b+p*1.1,L,w-v*1.1,n)}}r=(r+m)%15}const o=e.build();o.deleteAttribute("glow");const a=new Jt(o,el(new Wn({vertexColors:!0,transparent:!0,opacity:.9,side:Ee,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12})));return a.name="boundary",a}function s1(i){const t=i==null?void 0:i.material;t&&(t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},t.customProgramCacheKey=()=>"moorooka-streets")}function r1(i,t){const e=[];for(let a=0;a+3<i.length;a+=4){const l=i[a]/10,c=i[a+1]/10,h=i[a+2]/10,d=i[a+3]/10,u=Math.hypot(h-l,d-c);if(u<.5)continue;const f=-(d-c)/u*.06,m=(h-l)/u*.06,v=Math.max(1,Math.ceil(u/2));for(let p=0;p<v;p++){const g=l+(h-l)*p/v,_=c+(d-c)*p/v,M=l+(h-l)*(p+1)/v,y=c+(d-c)*(p+1)/v,S=t.yAt(g,_)+.07,E=t.yAt(M,y)+.07;e.push(g-f,S,_-m,M-f,E,y-m,M+f,E,y+m,g-f,S,_-m,M+f,E,y+m,g+f,S,_+m)}}const r=new Ae;r.setAttribute("position",new re(e,3));const o=new Jt(r,el(new Wn({color:14605522,side:Ee,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})));return o.name="painted-lines",o}class o1 extends s_{constructor(e,n,s,r){super(e,n,s,{name:"3D model of Moorooka",home:Qu,intro:{...Qu,dist:6400,polar:22,azimuth:-24},minDistance:22,followGround:!0,maxDistance:7e3,externalStart:[-150,720,1500,0,-.5]},r);it(this,"water");it(this,"life");it(this,"boundary");it(this,"terrain");it(this,"model");it(this,"aerial");it(this,"aerialWanted",!1);it(this,"level",0);it(this,"boundaryOn",!0);it(this,"flood");it(this,"floodLoading");it(this,"floodLevel",1);it(this,"rising",0);it(this,"groundDetail");it(this,"levels",[]);it(this,"uploader");it(this,"tilesAt",0);it(this,"sharpening",!1);it(this,"marks");it(this,"sharpState","no");it(this,"detailGround");it(this,"kerbs");it(this,"fences");it(this,"buildingsCull");it(this,"trees");it(this,"reach",[130,1100,300,380,420,380]);it(this,"yards");it(this,"strollers");this.options=r}async build(e,n,s){let r;try{r=await R_(this.options.assets,(w,A)=>this.cb.onProgress(w*.6,A),this.abort.signal)}catch(w){throw new al(w instanceof Error?w.message:"The model data could not be loaded.")}const{town:o,heights:a,ground:l}=r;this.meta=o.meta,this.level=o.meta.waterLevel*Ju;const c=this.clearTest();l.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.model=l,await s(.62,"Shaping the terrain");const[h,d]=o.meta.grid,u=new Ox(a,new Float32Array(h*d),h,d,o.meta.size[0],o.meta.size[1],e.step,Ju),f={value:o.meta.waterLevel},m=x_(u,l,f,{title:"MOOROOKA",subtitle:"Brisbane, Queensland   ·   27.53° S  153.03° E   ·   Postcode 4105",scale:o.meta.size[0]/8010},{closeUp:!0});this.terrain=m.getObjectByName("terrain").material,this.groundDetail=m.userData.detail;const v=this.options.assets.detail;v&&o.detailGrid&&n!=="low"&&this.levels.push({grid:o.detailGrid,first:0,slots:n==="medium"?2:Us,reach:1400,near:1.6,keep:4,url:v,tiles:new Map,wanted:[]}),this.offerSharpGround(n,u),this.scene.add(m),this.water=w_(u,f),this.scene.add(this.water.skirt,this.water.mesh),await s(.68,"Laying out the streets");const p=u_(o,u,{suburbMarkings:!0});s1(p.group.getObjectByName("roads")),this.scene.add(p.group,mv(o,u)),this.boundary=i1(o.boundary,u),this.scene.add(this.boundary),await s(.76,"Raising the buildings");const g=j_(o.meta),_=k_(o,u,[...g,this.fromLatLon(Nu[0],Nu[1])],c);this.buildingsCull=_.cull;const M=tv(o.meta,u,_.reserved);this.detailGround=M.ground;const y=Cv(o.meta);if(this.scene.add(_.group,M.group,Pv(o.meta,u,_.reserved[g.length]),sv(o,u,p.index,c,y)),n!=="low"){this.kerbs=lv(p.paths,p.index,u,(A,C)=>y(A,C)||c(A,C),o.footpaths),this.scene.add(this.kerbs.group);const w=du(o.meta);this.fences=ev(o,u,(A,C)=>w(A,C)||c(A,C)).group;for(const A of this.fences.children)A.geometry.computeBoundingSphere();this.scene.add(this.fences)}await s(.88,"Planting trees");const S=Q_(o.meta,_.reserved),E=[];for(let w=0;w<o.trees.length;w+=Gh){const A=o.trees[w]/4,C=o.trees[w+1]/4;!S(A,C)&&!y(A,C)&&!c(A,C)&&E.push(o.trees[w],o.trees[w+1],o.trees[w+2])}const x=Nv({...o,trees:Int16Array.from(E)},u,e.trees);if(this.scene.add(x.group),this.trees=x,this.reach=n==="high"?[220,1600,480,650,750,700]:n==="medium"?[130,1100,300,380,420,380]:[90,800,200,0,0,260],await s(.94,"Starting the traffic"),this.life=new vv(o,u,p.paths,p.index,c,y),this.scene.add(this.life.group),n!=="low"){const w=du(o.meta),A=(C,L)=>w(C,L)||y(C,L)||c(C,L);this.strollers=new Dv(p.paths,o.footpaths??{},u,n==="high"?30:14,A),this.scene.add(this.strollers.group),this.loadYards(u,n==="high"&&e.shadow>0,n==="high"?220:140,A)}const b=t_(Sv,o.meta,u);return{hf:u,atmosphere:new Nx(this.renderer,this.water,e.shadow,n1),places:b,roadPaths:p.paths,roadIndex:p.index,info:{quality:n,buildings:_.count,buildingsInSuburb:o.counts.inside,trees:x.count,sources:o.meta.sources,places:b}}}get hasFlood(){return!!this.options.assets.floods&&!!this.options.assets.floodFile}get floodDrop(){var e;return((e=this.flood)==null?void 0:e.info.drop)??8}async floods(){return(await this.floodLayer()).info.events}async floodLayer(){if(this.flood)return this.flood;const{floods:e,floodFile:n}=this.options.assets;if(!e||!n||!this.hf)throw new Error("This copy of the model has no floods.");this.floodLoading??(this.floodLoading=ul.load(this.hf,e,n,this.abort.signal).then(s=>{if(this.disposed)throw s.dispose(),new Error("The model has been closed.");return this.flood=s,this.scene.add(s.mesh),s}));try{return await this.floodLoading}catch(s){throw this.floodLoading=void 0,s}}async setFlood(e){if(cancelAnimationFrame(this.rising),!e){this.flood&&await this.flood.show(""),this.invalidate();return}const n=await this.floodLayer();if(await n.show(e,this.abort.signal),this.disposed||n.current!==e)return;const s=performance.now(),r=()=>{var a,l;const o=Math.min(1,(performance.now()-s)/2600);this.applyFloodLevel(o*o*(3-2*o)),(l=(a=this.options).onFloodLevel)==null||l.call(a,this.floodLevel),o<1&&!this.disposed&&(this.rising=requestAnimationFrame(r))};this.applyFloodLevel(0),this.rising=requestAnimationFrame(r)}setFloodLevel(e){cancelAnimationFrame(this.rising),this.applyFloodLevel(e)}applyFloodLevel(e){var n;this.floodLevel=_e.clamp(e,0,1),(n=this.flood)==null||n.setLower((1-this.floodLevel)*this.floodDrop),this.invalidate()}floodSurfaceAt(e,n,s=!1){return this.flood?this.flood.surfaceAt(e,n,s):-1/0}tick(e,n){var s,r;this.water.uniforms.uTime.value=n,(s=this.flood)==null||s.tick(n),(r=this.life)==null||r.update(e),this.strollers&&this.hf&&this.strollers.update(e,this.viewFocus.x,this.viewFocus.z,this.heightOverGround())}drawByDistance(){var c,h,d,u;const e=this.camera.position,[n,s,r,o,a,l]=this.reach;if((c=this.buildingsCull)==null||c.call(this,e.x,e.y,e.z,l),(h=this.life)==null||h.cull(e.x,e.y,e.z,n,s),(d=this.trees)==null||d.cull(e.x,e.y,e.z,r),(u=this.kerbs)==null||u.cull(e.x,e.y,e.z,o),this.fences)for(const f of this.fences.children){const m=f.geometry.boundingSphere;f.visible=Math.hypot(Math.max(0,Math.hypot(m.center.x-e.x,m.center.z-e.z)-m.radius),m.center.y-e.y)<a}}heightOverGround(){const e=this.camera.position;return e.y-this.hf.yAt(e.x,e.z)}loadYards(e,n,s,r){const o=this.options.assets.yards;o&&fetch(o,{signal:this.abort.signal}).then(a=>a.ok?a.arrayBuffer():null).then(a=>{!a||this.disposed||(this.yards=new e1(new Int16Array(a),e,n,s,r),this.scene.add(this.yards.group),this.invalidate())}).catch(()=>{})}get waterLevel(){return this.level}setLabelsVisible(e){super.setLabelsVisible(e),this.boundaryOn=e,this.boundary&&(this.boundary.visible=e)}setExternalCamera(e,n,s,r,o){super.setExternalCamera(e,n,s,r,o),this.boundary&&(this.boundary.visible=this.boundaryOn&&n-this.groundAt(e,s)>45)}async setAerial(e){if(this.aerialWanted=e,e&&!this.aerial){if(!this.options.assets.aerial)throw new Error("This copy of the model has no aerial photograph.");const s=await C_(this.options.assets.aerial);if(this.disposed){s.dispose();return}s.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.aerial=s}if(!this.terrain||!this.model)return;const n=this.aerialWanted&&!!this.aerial;this.terrain.map=n?this.aerial:this.model,this.placeTiles(),this.detailGround&&(this.detailGround.visible=!n),this.invalidate()}offerSharpGround(e,n){var o;const s=this.options.assets.surface,r=new URLSearchParams(window.location.search).get("sharp");if(!(!s||r==="0")){if(r!=="1"){const a=navigator;if((a.deviceMemory??8)<4||(o=a.connection)!=null&&o.saveData||this.renderer.capabilities.maxTextureSize<4096)return}fetch(s.index,{signal:this.abort.signal}).then(a=>a.ok?a.json():null).then(a=>{var c;if(!(a!=null&&a.tiles.length)||this.disposed)return;const l=new Set(a.tiles);this.levels.push({grid:a.grid,first:Us,slots:Xh,reach:460,near:1.7,keep:6,url:(h,d)=>l.has(`${h}_${d}`)?s.tile(h,d):void 0,tiles:new Map,wanted:[],sharp:!0}),(c=a.marks)!=null&&c.length&&(this.marks=r1(a.marks,n),this.scene.add(this.marks)),this.sharpState="on"}).catch(()=>{})}}reportSharpening(){var n,s;const e=this.levels.some(r=>r.wanted.some(o=>r.tiles.get(o)===null));e!==this.sharpening&&(this.sharpening=e,(s=(n=this.options).onSharpening)==null||s.call(n,e))}beforeRender(){var s;const e=performance.now();if(this.drawByDistance(),this.yards&&this.hf){const r=this.heightOverGround();(this.yards.update(this.viewFocus.x,this.viewFocus.z,r)||this.yards.pending(this.viewFocus.x,this.viewFocus.z,r))&&this.invalidate()}if((s=this.uploader)!=null&&s.busy){for(let r=0;r<4&&this.uploader.step()&&performance.now()-e<4;r++);this.uploader.busy&&this.invalidate()}if(!this.levels.length||!this.hf||e-this.tilesAt<250)return;this.tilesAt=e;let n=!1;for(const r of this.levels){const o=r.grid,a=[];if(this.viewDistance<r.reach&&(!r.sharp||this.sharpState==="on")){const l=(this.viewFocus.x+this.hf.sizeX/2)/this.hf.sizeX*o,c=(this.viewFocus.z+this.hf.sizeZ/2)/this.hf.sizeZ*o,h=[];for(let d=Math.max(0,Math.floor(c)-2);d<=Math.min(o-1,Math.floor(c)+2);d++)for(let u=Math.max(0,Math.floor(l)-2);u<=Math.min(o-1,Math.floor(l)+2);u++)r.url(d,u)&&h.push([Math.hypot(u+.5-l,d+.5-c),`${d}_${u}`]);h.sort((d,u)=>d[0]-u[0]);for(const[d,u]of h.slice(0,r.slots))d<r.near&&a.push(u)}if(a.join()!==r.wanted.join()){n=!0,r.wanted=a;for(const l of a){if(r.tiles.has(l))continue;const[c,h]=l.split("_").map(Number),d=r.url(c,h);d&&(r.tiles.set(l,null),this.uploader??(this.uploader=new y_(this.renderer)),this.uploader.load(d,Math.min(r.sharp?4:8,this.renderer.capabilities.getMaxAnisotropy()),!!r.sharp).then(u=>{if(this.disposed||!this.levels.includes(r))return u.dispose();r.tiles.set(l,u),this.placeTiles()}).catch(()=>{r.tiles.delete(l),this.reportSharpening()}))}for(const[l,c]of r.tiles){if(r.tiles.size<=r.slots+r.keep)break;c&&!a.includes(l)&&(c.dispose(),r.tiles.delete(l))}}}n&&this.placeTiles()}placeTiles(){var s;if(!this.groundDetail)return;const e=this.aerialWanted&&!!this.aerial,n=new Set;for(const r of this.levels){const o=r.grid;for(let a=0;a<r.slots;a++){const l=r.wanted[a],c=l?r.tiles.get(l):null;if(!c||e){this.groundDetail.set(r.first+a,null);continue}r.sharp&&n.add(l);const[h,d]=l.split("_").map(Number);this.groundDetail.set(r.first+a,c,[d/o,1-(h+1)/o,(d+1)/o,1-h/o])}}(s=this.kerbs)==null||s.showPaths(n),this.reportSharpening(),this.invalidate()}dispose(){var e,n,s,r,o;cancelAnimationFrame(this.rising),(e=this.uploader)==null||e.dispose(),(n=this.yards)==null||n.dispose(),(s=this.strollers)==null||s.dispose(),(r=this.model)==null||r.dispose(),(o=this.aerial)==null||o.dispose();for(const a of this.levels)for(const l of a.tiles.values())l==null||l.dispose();super.dispose()}}const ju="Buildings, streets, railway, terrain and imagery © State of Queensland · Parks and flood maps © Brisbane City Council (CC BY 4.0)",Al=.5;function a1(i,t){const e=typeof t.assets=="string"?t.assets:null;let n;const s=document.createElement("p");s.className="inv-sharpening",s.setAttribute("role","status"),s.hidden=!0,s.innerHTML='<span class="inv-sharpening-spin" aria-hidden="true"></span><span class="inv-sharpening-text">Loading sharper ground</span>';const r=Ri(i,t,{styleKey:"data-moorooka-model",css:ff,credit:ju,tide:{min:Al,max:Al,initial:Al},createScene:(o,a,l,c)=>n=new o1(o,a,l,{...c,onFloodLevel:h=>{var d;return(d=t.onFloodLevel)==null?void 0:d.call(t,h)},onSharpening:h=>{s.hidden=!h},assets:{...c.assets,detail:e?(h,d)=>`${e}detail/${h}_${d}.webp`:void 0,surface:e?{index:`${e}surface/index.json`,tile:(h,d)=>`${e}surface/${h}_${d}.webp`}:void 0,floods:e?`${e}floods.json`:void 0,yards:e?`${e}yards.bin`:void 0,floodFile:e?h=>`${e}flood-${encodeURIComponent(h)}.png`:void 0}}),setTide:()=>{}});return i.appendChild(s),{...r,dispose:()=>{s.remove(),r.dispose()},floods:e?()=>n.floods():void 0,get floodDrop(){return n.floodDrop},setFlood:o=>n.setFlood(o),setFloodLevel:o=>n.setFloodLevel(o),waterAt:(o,a,l)=>l?n.floodSurfaceAt(o,a,!0):Math.max(n.waterLevel,n.floodSurfaceAt(o,a))}}return bn.CREDIT=ju,bn.create=a1,Object.defineProperty(bn,Symbol.toStringTag,{value:"Module"}),bn}({});
