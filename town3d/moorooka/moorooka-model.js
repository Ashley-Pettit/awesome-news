var MoorookaModel=function(yn){"use strict";var u1=Object.defineProperty;var f1=(yn,Ln,Ai)=>Ln in yn?u1(yn,Ln,{enumerable:!0,configurable:!0,writable:!0,value:Ai}):yn[Ln]=Ai;var it=(yn,Ln,Ai)=>f1(yn,typeof Ln!="symbol"?Ln+"":Ln,Ai);const Ln=`
.inv-embed, .inv-embed-layer { position: absolute; inset: 0; overflow: hidden; }
/* the labels sit over the model but never take a touch: drags and pinches must reach the canvas underneath */
.inv-embed-labels, .inv-embed .inv-label { pointer-events: none; }
.inv-embed-credit { position: absolute; left: 50%; bottom: var(--inv-credit-bottom, 6px); transform: translateX(-50%); margin: 0; max-width: calc(100% - 24px);
  padding: 2px 8px; border-radius: 4px; background: rgba(13, 24, 30, 0.7); color: rgba(255, 255, 255, 0.82); font: 10px/1.4 system-ui, sans-serif; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; pointer-events: none; }
`;function Ai(i,t,e){if(!document.querySelector(`style[${e.styleKey}]`)){const u=document.createElement("style");u.setAttribute(e.styleKey,""),u.textContent=e.css+Ln,document.head.appendChild(u)}const n=document.createElement("div");n.className="inv-embed";const s=document.createElement("div");s.className="inv-embed-layer";const r=document.createElement("div");r.className="inv-embed-layer inv-embed-labels";const a=document.createElement("p");a.className="inv-embed-credit",a.textContent=e.credit,n.append(s,r,a),i.appendChild(n);const o=typeof t.assets=="string"?{height:t.assets+"height.png",ground:t.assets+"ground.webp",town:t.assets+"town.json"}:t.assets;let l=[],c=!1,h;const d=new Promise((u,m)=>h={ok:u,fail:m}),f=e.createScene(s,r,{onProgress:(u,m)=>{var _;return(_=t.onProgress)==null?void 0:_.call(t,u,m)},onReady:u=>{l=u.places.map(m=>{const _=Math.min(Math.max(m.view[0]*.55,90),1500),p=m.view[1]*Math.PI/180,g=m.view[2]*Math.PI/180,x=m.x+_*Math.sin(p)*Math.sin(g),M=m.z+_*Math.sin(p)*Math.cos(g),S=Math.max(f.groundAt(x,M),f.waterLevel)+Math.max(_*Math.cos(p),20),y=m.x-x,E=m.y-10-S,v=m.z-M;return{id:m.id,name:m.name,kind:m.kind,x,y:S,z:M,yaw:Math.atan2(-y,-v),pitch:Math.atan2(E,Math.hypot(y,v)),tx:m.x,tz:m.z,stand:f.standNear(m.x,m.z)??void 0}}),t.labels===!1&&f.setLabelsVisible(!1),c=!0,h.ok()},onError:u=>{var m;return c?(m=t.onError)==null?void 0:m.call(t,u):h.fail(new Error(u))},onCompass:()=>{}},{assets:o,external:!0,quality:t.quality,clear:t.clear,clearLatLon:t.clearLatLon});return f.init(),{ready:d,setCamera:(u,m,_,p,g)=>f.setExternalCamera(u,m,_,p,g),setMinutes:u=>f.setSolarMinutes(u),setTide:u=>e.setTide(f,u),setAnimating:u=>f.setAnimating(u),setLabelsVisible:u=>f.setLabelsVisible(u),groundAt:(u,m)=>f.groundAt(u,m),waterLevel:()=>f.waterLevel,bounds:()=>f.bounds,fromLatLon:(u,m)=>f.fromLatLon(u,m),setMode:u=>f.setExternal(u!=="bird"),getCamera:()=>f.getCamera(),flyToPlace:u=>f.flyToPlace(u),lookAt:(u,m,_,p,g)=>f.setView(u,m,_,p,g),addParts:u=>f.addParts(u),addPad:u=>f.addPad(u),spots:()=>l,roadSpot:u=>{const m=f.roadSpot(u);return m?{id:"road:"+u,name:u,kind:"landmark",...m,tx:m.x-Math.sin(m.yaw)*70,tz:m.z-Math.cos(m.yaw)*70}:null},tide:e.tide,credit:e.credit,dispose:()=>{f.dispose(),n.remove()}}}const uf='.inv-label{position:absolute;left:0;top:0;pointer-events:auto;font:600 12px/1 Space Grotesk,system-ui,sans-serif;padding:6px 10px;border-radius:999px;background:#0c1c24e6;color:#fff;border:1px solid rgba(255,255,255,.2);white-space:nowrap;cursor:pointer;will-change:transform}.inv-label:after{content:"";position:absolute;left:50%;bottom:-8px;width:1px;height:8px;background:#ffffffbf}.inv-label:hover{background:#0b7d9c}.inv-label--nature{background:#183826eb}.inv-label--nature:hover{background:#2c7a4b}.inv-label--water{background:none;border-color:transparent;color:#f1fbff;font-style:italic;font-weight:500;font-size:13px;letter-spacing:.1em;text-shadow:0 1px 2px rgba(0,35,60,.95),0 0 8px rgba(0,35,60,.7)}.inv-label--water:after{display:none}.inv-label--water:hover{background:#0c1c2499}.inv-range{-moz-appearance:none;appearance:none;-webkit-appearance:none;height:28px;background:transparent;cursor:pointer}.inv-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range:focus-visible{outline:2px solid #ffd200;outline-offset:4px;border-radius:4px}.inv-range--flood::-webkit-slider-runnable-track{background:linear-gradient(90deg,#d8c79a,#5c9ab8 55%,#17406e)}.inv-range--flood::-moz-range-track{background:linear-gradient(90deg,#d8c79a,#5c9ab8 55%,#17406e)}.inv-sharpening{position:absolute;right:calc(env(safe-area-inset-right,0px) + 8px);bottom:calc(env(safe-area-inset-bottom,0px) + 8px);z-index:2;margin:0;padding:4px;border-radius:50%;background:#0d181e99;line-height:0;pointer-events:none}.inv-sharpening[hidden]{display:none}.inv-sharpening-spin{display:block;width:10px;height:10px;border-radius:50%;border:2px solid rgba(255,255,255,.35);border-top-color:#fff;animation:inv-sharpening-turn .9s linear infinite}.inv-sharpening-text{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@keyframes inv-sharpening-turn{to{transform:rotate(360deg)}}@media (prefers-reduced-motion: reduce){.inv-sharpening-spin{animation:none;border-color:#fff}}';/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ua="187",Dn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ff=0,Nl=1,df=2,rs=1,pf=2,as=3,jn=0,Ze=1,be=2,Ri=0,os=1,fa=2,Ul=3,Fl=4,mf=5,Ci=100,gf=101,xf=102,_f=103,vf=104,Mf=200,Sf=201,yf=202,bf=203,Ol=204,zl=205,Ef=206,wf=207,Tf=208,Af=209,Rf=210,Cf=211,Pf=212,Lf=213,Df=214,da=0,pa=1,ma=2,ls=3,ga=4,xa=5,_a=6,va=7,Ma=0,If=1,Nf=2,In=0,Bl=1,kl=2,Gl=3,Hl=4,Vl=5,Wl=6,Sa=7,Xl=300,Pi=301,cs=302,ya=303,ba=304,Zs=1e3,cn=1001,Ea=1002,ze=1003,Uf=1004,Js=1005,He=1006,wa=1007,bn=1008,je=1009,ql=1010,Yl=1011,hs=1012,Ta=1013,En=1014,hn=1015,un=1016,Aa=1017,Ra=1018,Li=1020,$l=35902,Kl=35899,Zl=1021,Jl=1022,fn=1023,ti=1026,ei=1027,Ca=1028,Pa=1029,ni=1030,La=1031,Da=1033,Qs=33776,js=33777,tr=33778,er=33779,Ia=35840,Na=35841,Ua=35842,Fa=35843,Oa=36196,za=37492,Ba=37496,ka=37488,Ga=37489,nr=37490,Ha=37491,Va=37808,Wa=37809,Xa=37810,qa=37811,Ya=37812,$a=37813,Ka=37814,Za=37815,Ja=37816,Qa=37817,ja=37818,to=37819,eo=37820,no=37821,io=36492,so=36494,ro=36495,ao=36283,oo=36284,ir=36285,lo=36286,Ff=3200,sr=0,Of=1,Nn="",we="srgb",rr="srgb-linear",ar="linear",he="srgb",co=7680,zf=519,Bf=512,kf=513,Gf=514,Ql=515,Hf=516,Vf=517,jl=518,tc=519,Wf=35044,ho=35048,ec="300 es",dn=2e3,us=2001;function Xf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qf(){const i=fs("canvas");return i.style.display="block",i}const nc={};function ic(...i){const t="THREE."+i.shift();console.log(t,...i)}function sc(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ht(...i){i=sc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function re(...i){i=sc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function or(...i){const t=i.join(" ");t in nc||(nc[t]=!0,Ht(...i))}function Yf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const $f={[da]:da,[ma]:_a,[ga]:ga,[ls]:xa,[pa]:pa,[_a]:ma,[va]:va,[xa]:ls};class ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rc=1234567;const ds=Math.PI/180,ps=180/Math.PI;function Di(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function uo(i,t){return(i%t+t)%t}function Kf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Zf(i,t,e){return i!==t?(e-i)/(t-i):0}function ms(i,t,e){return(1-e)*i+e*t}function Jf(i,t,e,n){return ms(i,t,1-Math.exp(-e*n))}function Qf(i,t=1){return t-Math.abs(uo(i,t*2)-t)}function jf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function td(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ed(i,t){return i+Math.floor(Math.random()*(t-i+1))}function nd(i,t){return i+Math.random()*(t-i)}function id(i){return i*(.5-Math.random())}function sd(i){i!==void 0&&(rc=i);let t=rc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rd(i){return i*ds}function ad(i){return i*ps}function od(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function ld(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ac(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cd(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),f=a((t-n)/2),u=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*u,o*c);break;case"YXY":i.set(l*u,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*u,o*h,o*c);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function oc(i,t){if(t.constructor===Float32Array)return i;const e=fo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function lc(i,t){if(t.constructor===Float32Array)return i;const e=fo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const _e={DEG2RAD:ds,RAD2DEG:ps,generateUUID:Di,clamp:Zt,euclideanModulo:uo,mapLinear:Kf,inverseLerp:Zf,lerp:ms,damp:Jf,pingpong:Qf,smoothstep:jf,smootherstep:td,randInt:ed,randFloat:nd,randFloatSpread:id,seededRandom:sd,degToRad:rd,radToDeg:ad,isPowerOfTwo:od,ceilPowerOfTwo:ld,floorPowerOfTwo:ac,setQuaternionFromProperEuler:cd,normalize:lc,denormalize:oc},Al=class Al{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Al.prototype.isVector2=!0;let zt=Al;class rn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[a+0],u=r[a+1],m=r[a+2],_=r[a+3];if(d!==_||l!==f||c!==u||h!==m){let p=l*f+c*u+h*m+d*_;p<0&&(f=-f,u=-u,m=-m,_=-_,p=-p);let g=1-o;if(p<.9995){const x=Math.acos(p),M=Math.sin(x);g=Math.sin(g*x)/M,o=Math.sin(o*x)/M,l=l*g+f*o,c=c*g+u*o,h=h*g+m*o,d=d*g+_*o}else{l=l*g+f*o,c=c*g+u*o,h=h*g+m*o,d=d*g+_*o;const x=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=x,c*=x,h*=x,d*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],f=r[a+1],u=r[a+2],m=r[a+3];return t[e]=o*m+h*d+l*u-c*f,t[e+1]=l*m+h*f+c*d-o*u,t[e+2]=c*m+h*u+o*f-l*d,t[e+3]=h*m-o*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),f=l(n/2),u=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"YZX":this._x=f*h*d+c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d-f*u*m;break;case"XZY":this._x=f*h*d-c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d+f*u*m;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Rl=class Rl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return po.copy(this).projectOnVector(t),this.sub(po)}reflect(t){return this.sub(po.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rl.prototype.isVector3=!0;let Q=Rl;const po=new Q,cc=new rn,Cl=class Cl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],m=n[8],_=s[0],p=s[3],g=s[6],x=s[1],M=s[4],S=s[7],y=s[2],E=s[5],v=s[8];return r[0]=a*_+o*x+l*y,r[3]=a*p+o*M+l*E,r[6]=a*g+o*S+l*v,r[1]=c*_+h*x+d*y,r[4]=c*p+h*M+d*E,r[7]=c*g+h*S+d*v,r[2]=f*_+u*x+m*y,r[5]=f*p+u*M+m*E,r[8]=f*g+u*S+m*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*r,u=c*r-a*l,m=e*d+n*f+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return or("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mo.makeScale(t,e)),this}rotate(t){return or("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mo.makeRotation(-t)),this}translate(t,e){return or("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Cl.prototype.isMatrix3=!0;let Vt=Cl;const mo=new Vt,hc=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uc=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hd(){const i={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===he&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===he&&(s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?ar:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rr]:{primaries:t,whitePoint:n,transfer:ar,toXYZ:hc,fromXYZ:uc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:n,transfer:he,toXYZ:hc,fromXYZ:uc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),i}const te=hd();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ii(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ni;class ud{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ni===void 0&&(Ni=fs("canvas")),Ni.width=t.width,Ni.height=t.height;const s=Ni.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ni}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fd=0;class go{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Di(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xo(s[a].image)):r.push(xo(s[a]))}else r=xo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function xo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ud.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}let dd=0;const _o=new Q;class Pe extends ii{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=cn,s=cn,r=He,a=bn,o=fn,l=je,c=Pe.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Di(),this.name="",this.source=new go(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_o).x}get height(){return this.source.getSize(_o).y}get depth(){return this.source.getSize(_o).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zs:t.x=t.x-Math.floor(t.x);break;case cn:t.x=t.x<0?0:1;break;case Ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zs:t.y=t.y-Math.floor(t.y);break;case cn:t.y=t.y<0?0:1;break;case Ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null,Pe.DEFAULT_MAPPING=Xl,Pe.DEFAULT_ANISOTROPY=1;const Pl=class Pl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,S=(u+1)/2,y=(g+1)/2,E=(h+f)/4,v=(d+_)/4,b=(m+p)/4;return M>S&&M>y?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=v/n):S>y?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=b/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=v/r,s=b/r),this.set(n,s,r,e),this}let x=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(d-_)/x,this.z=(f-h)/x,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pl.prototype.isVector4=!0;let ve=Pl;class pd extends ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Pe({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new go(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends pd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fc extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class md extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const la=class la{constructor(t,e,n,s,r,a,o,l,c,h,d,f,u,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,f,u,m,_,p)}set(t,e,n,s,r,a,o,l,c,h,d,f,u,m,_,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new la().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),a=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*h,u=a*d,m=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+m*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=m+u*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,u=l*d,m=c*h,_=c*d;e[0]=f+_*o,e[4]=m*o-u,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=u*o-m,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,u=l*d,m=c*h,_=c*d;e[0]=f-_*o,e[4]=-a*d,e[8]=m+u*o,e[1]=u+m*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,u=a*d,m=o*h,_=o*d;e[0]=l*h,e[4]=m*c-u,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=u*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,u=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=_-f*d,e[8]=m*d+u,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*d+m,e[10]=f-_*d}else if(t.order==="XZY"){const f=a*l,u=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=a*h,e[9]=u*d-m,e[2]=m*d-u,e[6]=o*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gd,t,xd)}lookAt(t,e,n){const s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),si.crossVectors(n,en),si.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),si.crossVectors(n,en)),si.normalize(),lr.crossVectors(en,si),s[0]=si.x,s[4]=lr.x,s[8]=en.x,s[1]=si.y,s[5]=lr.y,s[9]=en.y,s[2]=si.z,s[6]=lr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],m=n[2],_=n[6],p=n[10],g=n[14],x=n[3],M=n[7],S=n[11],y=n[15],E=s[0],v=s[4],b=s[8],T=s[12],R=s[1],C=s[5],L=s[9],z=s[13],P=s[2],B=s[6],H=s[10],G=s[14],q=s[3],X=s[7],O=s[11],k=s[15];return r[0]=a*E+o*R+l*P+c*q,r[4]=a*v+o*C+l*B+c*X,r[8]=a*b+o*L+l*H+c*O,r[12]=a*T+o*z+l*G+c*k,r[1]=h*E+d*R+f*P+u*q,r[5]=h*v+d*C+f*B+u*X,r[9]=h*b+d*L+f*H+u*O,r[13]=h*T+d*z+f*G+u*k,r[2]=m*E+_*R+p*P+g*q,r[6]=m*v+_*C+p*B+g*X,r[10]=m*b+_*L+p*H+g*O,r[14]=m*T+_*z+p*G+g*k,r[3]=x*E+M*R+S*P+y*q,r[7]=x*v+M*C+S*B+y*X,r[11]=x*b+M*L+S*H+y*O,r[15]=x*T+M*z+S*G+y*k,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],m=t[3],_=t[7],p=t[11],g=t[15],x=l*u-c*f,M=o*u-c*d,S=o*f-l*d,y=a*u-c*h,E=a*f-l*h,v=a*d-o*h;return e*(_*x-p*M+g*S)-n*(m*x-p*y+g*E)+s*(m*M-_*y+g*v)-r*(m*S-_*E+p*v)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],m=t[12],_=t[13],p=t[14],g=t[15],x=e*o-n*a,M=e*l-s*a,S=e*c-r*a,y=n*l-s*o,E=n*c-r*o,v=s*c-r*l,b=h*_-d*m,T=h*p-f*m,R=h*g-u*m,C=d*p-f*_,L=d*g-u*_,z=f*g-u*p,P=x*z-M*L+S*C+y*R-E*T+v*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/P;return t[0]=(o*z-l*L+c*C)*B,t[1]=(s*L-n*z-r*C)*B,t[2]=(_*v-p*E+g*y)*B,t[3]=(f*E-d*v-u*y)*B,t[4]=(l*R-a*z-c*T)*B,t[5]=(e*z-s*R+r*T)*B,t[6]=(p*S-m*v-g*M)*B,t[7]=(h*v-f*S+u*M)*B,t[8]=(a*L-o*R+c*b)*B,t[9]=(n*R-e*L-r*b)*B,t[10]=(m*E-_*S+g*x)*B,t[11]=(d*S-h*E-u*x)*B,t[12]=(o*T-a*C-l*b)*B,t[13]=(e*C-n*T+s*b)*B,t[14]=(_*M-m*y-p*x)*B,t[15]=(h*y-d*M+f*x)*B,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,f=r*c,u=r*h,m=r*d,_=a*h,p=a*d,g=o*d,x=l*c,M=l*h,S=l*d,y=n.x,E=n.y,v=n.z;return s[0]=(1-(_+g))*y,s[1]=(u+S)*y,s[2]=(m-M)*y,s[3]=0,s[4]=(u-S)*E,s[5]=(1-(f+g))*E,s[6]=(p+x)*E,s[7]=0,s[8]=(m+M)*v,s[9]=(p-x)*v,s[10]=(1-(f+_))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ui.set(s[0],s[1],s[2]).length();const o=Ui.set(s[4],s[5],s[6]).length(),l=Ui.set(s[8],s[9],s[10]).length();r<0&&(a=-a),pn.copy(this);const c=1/a,h=1/o,d=1/l;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=d,pn.elements[9]*=d,pn.elements[10]*=d,e.setFromRotationMatrix(pn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=dn,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let m,_;if(l)m=r/(a-r),_=a*r/(a-r);else if(o===dn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===us)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=dn,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),u=-(n+s)/(n-s);let m,_;if(l)m=1/(a-r),_=a/(a-r);else if(o===dn)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===us)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};la.prototype.isMatrix4=!0;let ne=la;const Ui=new Q,pn=new ne,gd=new Q(0,0,0),xd=new Q(1,1,1),si=new Q,lr=new Q,en=new Q,dc=new ne,pc=new rn;class Tn{constructor(t=0,e=0,n=0,s=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pc.setFromEuler(this),this.setFromQuaternion(pc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class vo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _d=0;const mc=new Q,Fi=new rn,Fn=new ne,cr=new Q,gs=new Q,vd=new Q,Md=new rn,gc=new Q(1,0,0),xc=new Q(0,1,0),_c=new Q(0,0,1),vc={type:"added"},Sd={type:"removed"},Oi={type:"childadded",child:null},Mo={type:"childremoved",child:null};class Be extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new Q,e=new Tn,n=new rn,s=new Q(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Vt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(gc,t)}rotateY(t){return this.rotateOnAxis(xc,t)}rotateZ(t){return this.rotateOnAxis(_c,t)}translateOnAxis(t,e){return mc.copy(t).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gc,t)}translateY(t){return this.translateOnAxis(xc,t)}translateZ(t){return this.translateOnAxis(_c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cr.copy(t):cr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(gs,cr,this.up):Fn.lookAt(cr,gs,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vc),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sd),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vc),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,Md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),u=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Be.DEFAULT_UP=new Q(0,1,0),Be.DEFAULT_MATRIX_AUTO_UPDATE=!0,Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Le extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yd={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;c.inputState.pinching&&f>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},hr={h:0,s:0,l:0};function yo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?i+(t-i)*6*e:e<.5?t:e<.6666666666666666?i+(t-i)*6*(.6666666666666666-e):i}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=uo(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=yo(a,r,t+.3333333333333333),this.g=yo(a,r,t),this.b=yo(a,r,t-.3333333333333333)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){const n=Mc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return te.workingToColorSpace(We.copy(this),t),Math.round(Zt(We.r*255,0,255))*65536+Math.round(Zt(We.g*255,0,255))*256+Math.round(Zt(We.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(We.copy(this),e);const n=We.r,s=We.g,r=We.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=we){te.workingToColorSpace(We.copy(this),t);const e=We.r,n=We.g,s=We.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(hr);const n=ms(ri.h,hr.h,e),s=ms(ri.s,hr.s,e),r=ms(ri.l,hr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Rt;Rt.NAMES=Mc;class bd extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const mn=new Q,On=new Q,bo=new Q,zn=new Q,zi=new Q,Bi=new Q,Sc=new Q,Eo=new Q,wo=new Q,To=new Q,Ao=new ve,Ro=new ve,Co=new ve;class gn{constructor(t=new Q,e=new Q,n=new Q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),On.subVectors(n,e),bo.subVectors(t,e);const a=mn.dot(mn),o=mn.dot(On),l=mn.dot(bo),c=On.dot(On),h=On.dot(bo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ao.setScalar(0),Ro.setScalar(0),Co.setScalar(0),Ao.fromBufferAttribute(t,e),Ro.fromBufferAttribute(t,n),Co.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ao,r.x),a.addScaledVector(Ro,r.y),a.addScaledVector(Co,r.z),a}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),On.subVectors(t,e),mn.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),mn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return gn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;zi.subVectors(s,n),Bi.subVectors(r,n),Eo.subVectors(t,n);const l=zi.dot(Eo),c=Bi.dot(Eo);if(l<=0&&c<=0)return e.copy(n);wo.subVectors(t,s);const h=zi.dot(wo),d=Bi.dot(wo);if(h>=0&&d<=h)return e.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(zi,a);To.subVectors(t,r);const u=zi.dot(To),m=Bi.dot(To);if(m>=0&&u<=m)return e.copy(r);const _=u*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Bi,o);const p=h*m-u*d;if(p<=0&&d-h>=0&&u-m>=0)return Sc.subVectors(r,s),o=(d-h)/(d-h+(u-m)),e.copy(s).addScaledVector(Sc,o);const g=1/(p+_+f);return a=_*g,o=f*g,e.copy(n).addScaledVector(zi,a).addScaledVector(Bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class pi{constructor(t=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),fr.subVectors(this.max,xs),ki.subVectors(t.a,xs),Gi.subVectors(t.b,xs),Hi.subVectors(t.c,xs),ai.subVectors(Gi,ki),oi.subVectors(Hi,Gi),mi.subVectors(ki,Hi);let e=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-mi.z,mi.y,ai.z,0,-ai.x,oi.z,0,-oi.x,mi.z,0,-mi.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-mi.y,mi.x,0];return!Po(e,ki,Gi,Hi,fr)||(e=[1,0,0,0,1,0,0,0,1],!Po(e,ki,Gi,Hi,fr))?!1:(dr.crossVectors(ai,oi),e=[dr.x,dr.y,dr.z],Po(e,ki,Gi,Hi,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Bn=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],xn=new Q,ur=new pi,ki=new Q,Gi=new Q,Hi=new Q,ai=new Q,oi=new Q,mi=new Q,xs=new Q,fr=new Q,dr=new Q,gi=new Q;function Po(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gi.fromArray(i,r);const o=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const kn=Ed();function Ed(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function wd(i){Math.abs(i)>65504&&Ht("DataUtils.toHalfFloat(): Value out of range."),i=Zt(i,-65504,65504),kn.floatView[0]=i;const t=kn.uint32View[0],e=t>>23&511;return kn.baseTable[e]+((t&8388607)>>kn.shiftTable[e])}function Td(i){const t=i>>10;return kn.uint32View[0]=kn.mantissaTable[kn.offsetTable[t]+(i&1023)]+kn.exponentTable[t],kn.floatView[0]}class yc{static toHalfFloat(t){return wd(t)}static fromHalfFloat(t){return Td(t)}}const Te=new Q,pr=new zt;let Ad=0;class Ae extends ii{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ad++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wf,this.updateRanges=[],this.gpuType=hn,this.version=0,this._normalizationScale=t!==void 0?fo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):oc(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):lc(t,this.array)}}class bc extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ec extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Rd=new pi,_s=new Q,Lo=new Q;class vs{constructor(t=new Q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(Lo)),this.expandByPoint(_s.copy(t.center).sub(Lo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Cd=0;const an=new ne,Do=new Be,Vi=new Q,nn=new pi,Ms=new pi,Ue=new Q;class Re extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xf(t)?Ec:bc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return Do.lookAt(t),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(nn.min,Ms.min),nn.expandByPoint(Ue),Ue.addVectors(nn.max,Ms.max),nn.expandByPoint(Ue)):(nn.expandByPoint(Ms.min),nn.expandByPoint(Ms.max))}nn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ue.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(t,c),Ue.add(Vi)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ae(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let T=0;T<n.count;T++)o[T]=new Q,l[T]=new Q;const h=new Q,d=new Q,f=new Q,u=new zt,m=new zt,_=new zt,p=new Q,g=new Q;function x(T,R,C){c[T]=c[R]=c[C]=1,h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),f.fromBufferAttribute(n,C),u.fromBufferAttribute(r,T),m.fromBufferAttribute(r,R),_.fromBufferAttribute(r,C),d.sub(h),f.sub(h),m.sub(u),_.sub(u);const L=1/(m.x*_.y-_.x*m.y);isFinite(L)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(L),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(L),o[T].add(p),o[R].add(p),o[C].add(p),l[T].add(g),l[R].add(g),l[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let T=0,R=M.length;T<R;++T){const C=M[T],L=C.start,z=C.count;for(let P=L,B=L+z;P<B;P+=3)x(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const S=new Q,y=new Q,E=new Q,v=new Q;function b(T){E.fromBufferAttribute(s,T),v.copy(E);const R=o[T];S.copy(R),S.sub(E.multiplyScalar(E.dot(R))).normalize(),y.crossVectors(v,R);const L=y.dot(l[T])<0?-1:1;a.setXYZW(T,S.x,S.y,S.z,L)}for(let T=0,R=n.count;T<R;++T)c[T]&&b(T);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const s=new Q,r=new Q,a=new Q,o=new Q,l=new Q,c=new Q,h=new Q,d=new Q;if(t)for(let f=0,u=t.count;f<u;f+=3){const m=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let u=0,m=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?u=l[_]*o.data.stride+o.offset:u=l[_]*h;for(let g=0;g<h;g++)f[m++]=c[u++]}return new Ae(f,h,d)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Io=new Q,Pd=new Q,Ld=new Vt;class An{constructor(t=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Io.subVectors(n,e).cross(Pd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Io),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ld.getNormalMatrix(t),s=this.coplanarPoint(Io).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Dd=0;class Wi extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=os,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=zl,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new An().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Gn=new Q,No=new Q,mr=new Q,gr=new Q;class Uo{constructor(t=new Q,e=new Q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){No.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),gr.copy(this.origin).sub(No);const r=t.distanceTo(e)*.5,a=-this.direction.dot(mr),o=gr.dot(this.direction),l=-gr.dot(mr),c=gr.lengthSq(),h=Math.abs(1-a*a);let d,f,u,m;if(h>0)if(d=a*l-o,f=a*o-l,m=r*h,d>=0)if(f>=-m)if(f<=m){const _=1/h;d*=_,f*=_,u=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(No).addScaledVector(mr,f),u}intersectSphere(t,e){if(t.radius<0)return null;Gn.subVectors(t.center,this.origin);const n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,f=t.y-a.y,u=t.z-a.z,m=e.x-a.x,_=e.y-a.y,p=e.z-a.z,g=n.x-a.x,x=n.y-a.y,M=n.z-a.z,S=Math.abs(l),y=Math.abs(c),E=Math.abs(h);let v,b,T,R,C,L,z,P,B,H,G,q;if(S>=y&&S>=E?(T=l,L=d,B=m,q=g,l>=0?(v=c,b=h,R=f,C=u,z=_,P=p,H=x,G=M):(v=h,b=c,R=u,C=f,z=p,P=_,H=M,G=x)):y>=E?(T=c,L=f,B=_,q=x,c>=0?(v=h,b=l,R=u,C=d,z=p,P=m,H=M,G=g):(v=l,b=h,R=d,C=u,z=m,P=p,H=g,G=M)):(T=h,L=u,B=p,q=M,h>=0?(v=l,b=c,R=d,C=f,z=m,P=_,H=g,G=x):(v=c,b=l,R=f,C=d,z=_,P=m,H=x,G=g)),T===0)return null;const X=v/T,O=b/T,k=1/T,V=R-X*L,pt=C-O*L,Y=z-X*B,ct=P-O*B,ut=H-X*q,at=G-O*q,xt=ut*ct-at*Y,Ct=V*at-pt*ut,$t=Y*pt-ct*V;if(s){if(xt<0||Ct<0||$t<0)return null}else if((xt<0||Ct<0||$t<0)&&(xt>0||Ct>0||$t>0))return null;const st=xt+Ct+$t;if(st===0)return null;const dt=k*(xt*L+Ct*B+$t*q);return(st>0?dt<0:dt>0)?null:this.at(dt/st,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hn extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const wc=new ne,xi=new Uo,xr=new vs,Tc=new Q,_r=new Q,vr=new Q,Mr=new Q,Fo=new Q,Sr=new Q,Ac=new Q,yr=new Q;class Jt extends Be{constructor(t=new Re,e=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Fo.fromBufferAttribute(d,t),a?Sr.addScaledVector(Fo,h):Sr.addScaledVector(Fo.sub(e),h))}e.add(Sr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(xr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(xr,Tc)===null||xi.origin.distanceToSquared(Tc)>(t.far-t.near)**2))&&(wc.copy(r).invert(),xi.copy(t.ray).applyMatrix4(wc),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=a[p.materialIndex],x=Math.max(p.start,u.start),M=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let S=x,y=M;S<y;S+=3){const E=o.getX(S),v=o.getX(S+1),b=o.getX(S+2);s=br(this,g,t,n,c,h,d,E,v,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){const x=o.getX(p),M=o.getX(p+1),S=o.getX(p+2);s=br(this,a,t,n,c,h,d,x,M,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=a[p.materialIndex],x=Math.max(p.start,u.start),M=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let S=x,y=M;S<y;S+=3){const E=S,v=S+1,b=S+2;s=br(this,g,t,n,c,h,d,E,v,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){const x=p,M=p+1,S=p+2;s=br(this,a,t,n,c,h,d,x,M,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Id(i,t,e,n,s,r,a,o){let l;if(t.side===Ze?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===jn,o),l===null)return null;yr.copy(o),yr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(yr);return c<e.near||c>e.far?null:{distance:c,point:yr.clone(),object:i}}function br(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,_r),i.getVertexPosition(l,vr),i.getVertexPosition(c,Mr);const h=Id(i,t,e,n,_r,vr,Mr,Ac);if(h){const d=new Q;gn.getBarycoord(Ac,_r,vr,Mr,d),s&&(h.uv=gn.getInterpolatedAttribute(s,o,l,c,d,new zt)),r&&(h.uv1=gn.getInterpolatedAttribute(r,o,l,c,d,new zt)),a&&(h.normal=gn.getInterpolatedAttribute(a,o,l,c,d,new Q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new Q,materialIndex:0};gn.getNormal(_r,vr,Mr,f.normal),h.face=f,h.barycoord=d}return h}class Ss extends Pe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ze,h=ze,d,f){super(null,a,o,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rc extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xi=new ne,Cc=new ne,Er=[],Pc=new pi,Nd=new ne,ys=new Jt,bs=new vs;class Vn extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Rc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Nd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),Pc.copy(t.boundingBox).applyMatrix4(Xi),this.boundingBox.union(Pc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),bs.copy(t.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),t.ray.intersectsSphere(bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xi),Cc.multiplyMatrices(n,Xi),ys.matrixWorld=Cc,ys.raycast(t,Er);for(let a=0,o=Er.length;a<o;a++){const l=Er[a];l.instanceId=r,l.object=this,e.push(l)}Er.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Rc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ss(new Float32Array(s*this.count),s,this.count,Ca,hn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _i=new vs,Ud=new zt(.5,.5),wr=new Q;class Es{constructor(t=new An,e=new An,n=new An,s=new An,r=new An,a=new An){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=dn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],m=r[8],_=r[9],p=r[10],g=r[11],x=r[12],M=r[13],S=r[14],y=r[15];if(s[0].setComponents(c-a,u-h,g-m,y-x).normalize(),s[1].setComponents(c+a,u+h,g+m,y+x).normalize(),s[2].setComponents(c+o,u+d,g+_,y+M).normalize(),s[3].setComponents(c-o,u-d,g-_,y-M).normalize(),n)s[4].setComponents(l,f,p,S).normalize(),s[5].setComponents(c-l,u-f,g-p,y-S).normalize();else if(s[4].setComponents(c-l,u-f,g-p,y-S).normalize(),e===dn)s[5].setComponents(c+l,u+f,g+p,y+S).normalize();else if(e===us)s[5].setComponents(l,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){_i.center.set(0,0,0);const e=Ud.distanceTo(t.center);return _i.radius=.7071067811865476+e,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(wr.x=s.normal.x>0?t.max.x:t.min.x,wr.y=s.normal.y>0?t.max.y:t.min.y,wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Lc=new ne;class Oo{constructor(){this.coordinateSystem=dn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];Lc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Es),n[s].setFromProjectionMatrix(Lc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Es),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new Oo().copy(this)}}class Dc extends Pe{constructor(t=[],e=Pi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Tr extends Pe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qi extends Pe{constructor(t,e,n=En,s,r,a,o=ze,l=ze,c,h=ti,d=1){if(h!==ti&&h!==ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new go(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Ic extends qi{constructor(t,e=En,n=Pi,s,r,a=ze,o=ze,l,c=ti){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Nc extends Pe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class vi extends Re{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,u=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2));function m(_,p,g,x,M,S,y,E,v,b,T){const R=S/v,C=y/b,L=S/2,z=y/2,P=E/2,B=v+1,H=b+1;let G=0,q=0;const X=new Q;for(let O=0;O<H;O++){const k=O*C-z;for(let V=0;V<B;V++){const pt=V*R-L;X[_]=pt*x,X[p]=k*M,X[g]=P,c.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[g]=E>0?1:-1,h.push(X.x,X.y,X.z),d.push(V/v),d.push(1-O/b),G+=1}}for(let O=0;O<b;O++)for(let k=0;k<v;k++){const V=f+k+B*O,pt=f+k+B*(O+1),Y=f+(k+1)+B*(O+1),ct=f+(k+1)+B*O;l.push(V,pt,ct),l.push(pt,Y,ct),q+=6}o.addGroup(u,q,T),u+=q,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class zo extends Re{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],u=[];let m=0;const _=[],p=n/2;let g=0;x(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(u,2));function x(){const S=new Q,y=new Q;let E=0;const v=(e-t)/n;for(let b=0;b<=r;b++){const T=[],R=b/r,C=R*(e-t)+t;for(let L=0;L<=s;L++){const z=L/s,P=z*l+o,B=Math.sin(P),H=Math.cos(P);y.x=C*B,y.y=-R*n+p,y.z=C*H,d.push(y.x,y.y,y.z),S.set(B,v,H).normalize(),f.push(S.x,S.y,S.z),u.push(z,1-R),T.push(m++)}_.push(T)}for(let b=0;b<s;b++)for(let T=0;T<r;T++){const R=_[T][b],C=_[T+1][b],L=_[T+1][b+1],z=_[T][b+1];(t>0||T!==0)&&(h.push(R,C,z),E+=3),(e>0||T!==r-1)&&(h.push(C,L,z),E+=3)}c.addGroup(g,E,0),g+=E}function M(S){const y=m,E=new zt,v=new Q;let b=0;const T=S===!0?t:e,R=S===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,p*R,0),f.push(0,R,0),u.push(.5,.5),m++;const C=m;for(let L=0;L<=s;L++){const P=L/s*l+o,B=Math.cos(P),H=Math.sin(P);v.x=T*H,v.y=p*R,v.z=T*B,d.push(v.x,v.y,v.z),f.push(0,R,0),E.x=B*.5+.5,E.y=H*.5*R+.5,u.push(E.x,E.y),m++}for(let L=0;L<s;L++){const z=y+L,P=C+L;S===!0?h.push(P,P+1,z):h.push(P+1,P,z),b+=3}c.addGroup(g,b,S===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bo extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const M=new Q,S=new Q,y=new Q;for(let E=0;E<e.length;E+=3)u(e[E+0],M),u(e[E+1],S),u(e[E+2],y),l(M,S,y,x)}function l(x,M,S,y){const E=y+1,v=[];for(let b=0;b<=E;b++){v[b]=[];const T=x.clone().lerp(S,b/E),R=M.clone().lerp(S,b/E),C=E-b;for(let L=0;L<=C;L++)L===0&&b===E?v[b][L]=T:v[b][L]=T.clone().lerp(R,L/C)}for(let b=0;b<E;b++)for(let T=0;T<2*(E-b)-1;T++){const R=Math.floor(T/2);T%2===0?(f(v[b][R+1]),f(v[b+1][R]),f(v[b][R])):(f(v[b][R+1]),f(v[b+1][R+1]),f(v[b+1][R]))}}function c(x){const M=new Q;for(let S=0;S<r.length;S+=3)M.x=r[S+0],M.y=r[S+1],M.z=r[S+2],M.normalize().multiplyScalar(x),r[S+0]=M.x,r[S+1]=M.y,r[S+2]=M.z}function h(){const x=new Q;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];const S=p(x)/2/Math.PI+.5,y=g(x)/Math.PI+.5;a.push(S,1-y)}m(),d()}function d(){for(let x=0;x<a.length;x+=6){const M=a[x+0],S=a[x+2],y=a[x+4],E=Math.max(M,S,y),v=Math.min(M,S,y);E>.9&&v<.1&&(M<.2&&(a[x+0]+=1),S<.2&&(a[x+2]+=1),y<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function u(x,M){const S=x*3;M.x=t[S+0],M.y=t[S+1],M.z=t[S+2]}function m(){const x=new Q,M=new Q,S=new Q,y=new Q,E=new zt,v=new zt,b=new zt;for(let T=0,R=0;T<r.length;T+=9,R+=6){x.set(r[T+0],r[T+1],r[T+2]),M.set(r[T+3],r[T+4],r[T+5]),S.set(r[T+6],r[T+7],r[T+8]),E.set(a[R+0],a[R+1]),v.set(a[R+2],a[R+3]),b.set(a[R+4],a[R+5]),y.copy(x).add(M).add(S).divideScalar(3);const C=p(y);_(E,R+0,x,C),_(v,R+2,M,C),_(b,R+4,S,C)}}function _(x,M,S,y){y<0&&x.x===1&&(a[M]=x.x-1),S.x===0&&S.z===0&&(a[M]=y/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.vertices,t.indices,t.radius,t.detail)}}function Fd(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Uc(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Gd(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let f=e;f<s;f+=e){const u=i[f],m=i[f+1];u<o&&(o=u),m<l&&(l=m),u>h&&(h=u),m>d&&(d=m)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return ws(r,a,e,o,l,c,0),a}function Uc(i,t,e,n,s){let r;if(s===Qd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Bc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Bc(a/n|0,i[a],i[a+1],r);return r&&Yi(r,r.next)&&(Rs(r),r=r.next),r}function Mi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Yi(e,e.next)||Me(e.prev,e,e.next)===0)){if(Rs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ws(i,t,e,n,s,r,a){if(!i)return;!a&&r&&qd(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?zd(i,n,s,r):Od(i)){t.push(l.i,i.i,c.i),Rs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Bd(Mi(i),t),ws(i,t,e,n,s,r,2)):a===2&&kd(i,t,e,n,s,r):ws(Mi(i),t,e,n,s,r,1);break}}}function Od(i){const t=i.prev,e=i,n=i.next;if(Me(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),f=Math.max(s,r,a),u=Math.max(o,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=d&&m.y<=u&&Ts(s,o,r,l,a,c,m.x,m.y)&&Me(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function zd(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Me(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,f=a.y,u=Math.min(o,l,c),m=Math.min(h,d,f),_=Math.max(o,l,c),p=Math.max(h,d,f),g=ko(u,m,t,e,n),x=ko(_,p,t,e,n);let M=i.prevZ,S=i.nextZ;for(;M&&M.z>=g&&S&&S.z<=x;){if(M.x>=u&&M.x<=_&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&Ts(o,h,l,d,c,f,M.x,M.y)&&Me(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=u&&S.x<=_&&S.y>=m&&S.y<=p&&S!==s&&S!==a&&Ts(o,h,l,d,c,f,S.x,S.y)&&Me(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=g;){if(M.x>=u&&M.x<=_&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&Ts(o,h,l,d,c,f,M.x,M.y)&&Me(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=x;){if(S.x>=u&&S.x<=_&&S.y>=m&&S.y<=p&&S!==s&&S!==a&&Ts(o,h,l,d,c,f,S.x,S.y)&&Me(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Bd(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Yi(n,s)&&Oc(n,e,e.next,s)&&As(n,s)&&As(s,n)&&(t.push(n.i,e.i,s.i),Rs(e),Rs(e.next),e=i=s),e=e.next}while(e!==i);return Mi(e)}function kd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Kd(a,o)){let l=zc(a,o);a=Mi(a,a.next),l=Mi(l,l.next),ws(a,t,e,n,s,r,0),ws(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Gd(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Uc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push($d(c))}s.sort(Hd);for(let r=0;r<s.length;r++)e=Vd(s[r],e);return e}function Hd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Vd(i,t){const e=Wd(i,t);if(!e)return t;const n=zc(e,i);return Mi(n,n.next),Mi(e,e.next)}function Wd(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Yi(i,e))return e;do{if(Yi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Fc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);As(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Xd(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Xd(i,t){return Me(i.prev,i,t.prev)<0&&Me(t.next,i,i.next)<0}function qd(i,t,e,n){let s=i;do s.z===0&&(s.z=ko(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Yd(s)}function Yd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function ko(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function $d(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Fc(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ts(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Fc(i,t,e,n,s,r,a,o)}function Kd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Zd(i,t)&&(As(i,t)&&As(t,i)&&Jd(i,t)&&(Me(i.prev,i,t.prev)||Me(i,t.prev,t))||Yi(i,t)&&Me(i.prev,i,i.next)>0&&Me(t.prev,t,t.next)>0)}function Me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Yi(i,t){return i.x===t.x&&i.y===t.y}function Oc(i,t,e,n){const s=Rr(Me(i,t,e)),r=Rr(Me(i,t,n)),a=Rr(Me(e,n,i)),o=Rr(Me(e,n,t));return!!(s!==r&&a!==o||s===0&&Ar(i,e,t)||r===0&&Ar(i,n,t)||a===0&&Ar(e,i,n)||o===0&&Ar(e,t,n))}function Ar(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Rr(i){return i>0?1:i<0?-1:0}function Zd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Oc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function As(i,t){return Me(i.prev,i,i.next)<0?Me(i,t,i.next)>=0&&Me(i,i.prev,t)>=0:Me(i,t,i.prev)<0||Me(i,i.next,t)<0}function Jd(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function zc(i,t){const e=Go(i.i,i.x,i.y),n=Go(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Bc(i,t,e,n){const s=Go(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Rs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Go(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class jd{static triangulate(t,e,n=2){return Fd(t,e,n)}}class Ho{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ho.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];kc(t),Gc(n,t);let a=t.length;e.forEach(kc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Gc(n,e[l]);const o=jd.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function kc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Gc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Vo extends Bo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Vo(t.radius,t.detail)}}class li extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=e/l,u=[],m=[],_=[],p=[];for(let g=0;g<h;g++){const x=g*f-a;for(let M=0;M<c;M++){const S=M*d-r;m.push(S,-x,0),_.push(0,0,1),p.push(M/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<o;x++){const M=x+c*g,S=x+c*(g+1),y=x+1+c*(g+1),E=x+1+c*g;u.push(M,S,E),u.push(S,y,E)}this.setIndex(u),this.setAttribute("position",new ae(m,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.width,t.height,t.widthSegments,t.heightSegments)}}class Wo extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new Q,f=new Q,u=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){const x=[],M=g/n,S=a+M*o,y=t*Math.cos(S),E=Math.sqrt(t*t-y*y);let v=0;g===0&&a===0?v=.5/e:g===n&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){const T=b/e,R=s+T*r;d.x=-E*Math.cos(R),d.y=y,d.z=E*Math.sin(R),m.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(T+v,1-M),x.push(c++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<e;x++){const M=h[g][x+1],S=h[g][x],y=h[g+1][x],E=h[g+1][x+1];(g!==0||a>0)&&u.push(M,S,E),(g!==n-1||l<Math.PI)&&u.push(S,y,E)}this.setIndex(u),this.setAttribute("position",new ae(m,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function $i(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Hc(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Hc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Je(i){const t={};for(let e=0;e<i.length;e++){const n=$i(i[e]);for(const s in n)t[s]=n[s]}return t}function Hc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const ep={clone:$i,merge:Je};var np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=np,this.fragmentShader=ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=tp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Rt().setHex(s.value);break;case"v2":this.uniforms[n].value=new zt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Q().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ve().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Vt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ne().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class sp extends Wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xe extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sr,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wc extends Wi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sr,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Ma,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rp extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ap extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Xc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Xc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Xc(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class op{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const u=c[d],m=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const lp=new op;class qo{constructor(t){this.manager=t!==void 0?t:lp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}qo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ki=new WeakMap;class cp extends qo{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Xo.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Ki.get(a);d===void 0&&(d=[],Ki.set(a,d)),d.push({onLoad:e,onError:s})}return a}const o=fs("img");function l(){h(),e&&e(this);const d=Ki.get(this)||[];for(let f=0;f<d.length;f++){const u=d[f];u.onLoad&&u.onLoad(this)}Ki.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),Xo.remove(`image:${t}`);const f=Ki.get(this)||[];for(let u=0;u<f.length;u++){const m=f[u];m.onError&&m.onError(d)}Ki.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Xo.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}}class qc extends qo{constructor(t){super(t)}load(t,e,n,s){const r=new Pe,a=new cp(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Yc extends Be{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class hp extends Yc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Yo=new ne,$c=new Q,Kc=new Q;class up{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;$c.setFromMatrixPosition(t.matrixWorld),e.position.copy($c),Kc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Yo,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===us||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Yo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Cr=new Q,Pr=new rn,Rn=new Q;class Zc extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Cr,Pr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cr,Pr,Rn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Cr,Pr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cr,Pr,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ci=new Q,Jc=new zt,Qc=new zt;class _n extends Zc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Jc,Qc),e.subVectors(Qc,Jc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ds*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class jc extends Zc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class fp extends up{constructor(){super(new jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dp extends Yc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new fp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Zi=-90,Ji=1;class $o extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(Zi,Ji,t,e);s.layers=this.layers,this.add(s);const r=new _n(Zi,Ji,t,e);r.layers=this.layers,this.add(r);const a=new _n(Zi,Ji,t,e);a.layers=this.layers,this.add(a);const o=new _n(Zi,Ji,t,e);o.layers=this.layers,this.add(o);const l=new _n(Zi,Ji,t,e);l.layers=this.layers,this.add(l);const c=new _n(Zi,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class pp extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const th=new ne;class mp{constructor(t,e,n=0,s=1/0){this.ray=new Uo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):re("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return th.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(th),this}intersectObject(t,e=!0,n=[]){return Ko(t,this,n,e),n.sort(eh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ko(t[s],this,n,e);return n.sort(eh),n}}function eh(i,t){return i.distance-t.distance}function Ko(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Ko(r[a],t,e,!0)}}class Lr{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ll=class Ll{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Ll.prototype.isMatrix2=!0;let nh=Ll;class gp extends ii{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ih(i,t,e,n){const s=xp(n);switch(e){case Zl:return i*t;case Ca:return i*t/s.components*s.byteLength;case Pa:return i*t/s.components*s.byteLength;case ni:return i*t*2/s.components*s.byteLength;case La:return i*t*2/s.components*s.byteLength;case Jl:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case Da:return i*t*4/s.components*s.byteLength;case Qs:case js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case tr:case er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:case Fa:return Math.max(i,16)*Math.max(t,8)/4;case Ia:case Ua:return Math.max(i,8)*Math.max(t,8)/2;case Oa:case za:case ka:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ba:case nr:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case to:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case eo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case no:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case io:case so:case ro:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ao:case oo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ir:case lo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xp(i){switch(i){case je:case ql:return{byteLength:1,components:1};case hs:case Yl:case un:return{byteLength:2,components:1};case Aa:case Ra:return{byteLength:2,components:4};case En:case Ta:case hn:return{byteLength:4,components:1};case $l:case Kl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ua}})),typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ua);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _p(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){const m=d[f],_=d[u];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){const _=d[u];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mp=`#ifdef USE_ALPHAHASH
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
#endif`,Sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wp=`#ifdef USE_AOMAP
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
#endif`,Tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ap=`#ifdef USE_BATCHING
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
#endif`,Rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ip=`#ifdef USE_BUMPMAP
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
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hp=`#define PI 3.141592653589793
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
} // validated`,Vp=`vec3 transformedNormal = objectNormal;
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
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$p="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
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
#endif`,o0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m0=`PhysicalMaterial material;
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
#endif`,g0=`uniform sampler2D dfgLUT;
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
}`,x0=`
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
#endif`,_0=`#if defined( RE_IndirectDiffuse )
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,S0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,R0=`#if defined( USE_POINTS_UV )
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
#endif`,C0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D0=`#if defined( USE_MORPHCOLORS )
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
#endif`,I0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`#ifdef USE_MORPHTARGETS
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
#endif`,U0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,G0=`#ifdef USE_NORMALMAP
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
#endif`,H0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,im=`float getShadowMask() {
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
}`,sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kt={alphahash_fragment:vp,alphahash_pars_fragment:Mp,alphamap_fragment:Sp,alphamap_pars_fragment:yp,alphatest_fragment:bp,alphatest_pars_fragment:Ep,aomap_fragment:wp,aomap_pars_fragment:Tp,batching_pars_vertex:Ap,batching_vertex:Rp,begin_vertex:Cp,beginnormal_vertex:Pp,bsdfs:Lp,iridescence_fragment:Dp,bumpmap_pars_fragment:Ip,clipping_planes_fragment:Np,clipping_planes_pars_fragment:Up,clipping_planes_pars_vertex:Fp,clipping_planes_vertex:Op,color_fragment:zp,color_pars_fragment:Bp,color_pars_vertex:kp,color_vertex:Gp,common:Hp,defaultnormal_vertex:Vp,displacementmap_pars_vertex:Wp,displacementmap_vertex:Xp,emissivemap_fragment:qp,emissivemap_pars_fragment:Yp,colorspace_fragment:$p,colorspace_pars_fragment:Kp,envmap_fragment:Zp,envmap_common_pars_fragment:Jp,envmap_pars_fragment:Qp,envmap_pars_vertex:jp,envmap_physical_pars_fragment:h0,envmap_vertex:t0,fog_vertex:e0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:s0,gradientmap_pars_fragment:r0,lightmap_pars_fragment:a0,lights_lambert_fragment:o0,lights_lambert_pars_fragment:l0,lights_pars_begin:c0,lights_toon_fragment:u0,lights_toon_pars_fragment:f0,lights_phong_fragment:d0,lights_phong_pars_fragment:p0,lights_physical_fragment:m0,lights_physical_pars_fragment:g0,lights_fragment_begin:x0,lights_fragment_maps:_0,lights_fragment_end:v0,lightprobes_pars_fragment:M0,logdepthbuf_fragment:S0,logdepthbuf_pars_fragment:y0,logdepthbuf_pars_vertex:b0,logdepthbuf_vertex:E0,map_fragment:w0,map_pars_fragment:T0,map_particle_fragment:A0,map_particle_pars_fragment:R0,metalnessmap_fragment:C0,metalnessmap_pars_fragment:P0,morphinstance_vertex:L0,morphcolor_vertex:D0,morphnormal_vertex:I0,morphtarget_pars_vertex:N0,morphtarget_vertex:U0,normal_fragment_begin:F0,normal_fragment_maps:O0,normal_pars_fragment:z0,normal_pars_vertex:B0,normal_vertex:k0,normalmap_pars_fragment:G0,clearcoat_normal_fragment_begin:H0,clearcoat_normal_fragment_maps:V0,clearcoat_pars_fragment:W0,iridescence_pars_fragment:X0,opaque_fragment:q0,packing:Y0,premultiplied_alpha_fragment:$0,project_vertex:K0,dithering_fragment:Z0,dithering_pars_fragment:J0,roughnessmap_fragment:Q0,roughnessmap_pars_fragment:j0,shadowmap_pars_fragment:tm,shadowmap_pars_vertex:em,shadowmap_vertex:nm,shadowmask_pars_fragment:im,skinbase_vertex:sm,skinning_pars_vertex:rm,skinning_vertex:am,skinnormal_vertex:om,specularmap_fragment:lm,specularmap_pars_fragment:cm,tonemapping_fragment:hm,tonemapping_pars_fragment:um,transmission_fragment:fm,transmission_pars_fragment:dm,uv_pars_fragment:pm,uv_pars_vertex:mm,uv_vertex:gm,worldpos_vertex:xm,background_vert:`varying vec2 vUv;
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
}`},yt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Cn={basic:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Je([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Je([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Je([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Je([yt.points,yt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Je([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Je([yt.common,yt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Je([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Je([yt.sprite,yt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:Je([yt.common,yt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:Je([yt.lights,yt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Cn.physical={uniforms:Je([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Dr={r:0,b:0,g:0},_m=new ne,rh=new Vt;rh.set(-1,0,0,0,1,0,0,0,1);function vm(i,t,e,n,s,r){const a=new Rt(0);let o=s===!0?0:1,l,c,h=null,d=0,f=null;function u(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const S=x.backgroundBlurriness>0;M=t.get(M,S)}return M}function m(x){let M=!1;const S=u(x);S===null?p(a,o):S&&S.isColor&&(p(S,1),M=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(x,M){const S=u(M);S&&S.isCubeTexture?(c===void 0&&(c=new Jt(new vi(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:$i(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_m.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(rh),c.material.toneMapped=te.getTransfer(S.colorSpace)!==he,(h!==S||d!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Jt(new li(2,2),new Wn({name:"BackgroundMaterial",uniforms:$i(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=te.getTransfer(S.colorSpace)!==he,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,M){x.getRGB(Dr,Vc(i)),e.buffers.color.setClear(Dr.r,Dr.g,Dr.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),o=M,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,p(a,o)},render:m,addToRenderList:_,dispose:g}}function Mm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(C,L,z,P,B){let H=!1;const G=d(C,P,z,L);r!==G&&(r=G,c(r.object)),H=u(C,P,z,B),H&&m(C,P,z,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,S(C,L,z,P),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function d(C,L,z,P){const B=P.wireframe===!0;let H=n[L.id];H===void 0&&(H={},n[L.id]=H);const G=C.isInstancedMesh===!0?C.id:0;let q=H[G];q===void 0&&(q={},H[G]=q);let X=q[z.id];X===void 0&&(X={},q[z.id]=X);let O=X[B];return O===void 0&&(O=f(l()),X[B]=O),O}function f(C){const L=[],z=[],P=[];for(let B=0;B<e;B++)L[B]=0,z[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:P,object:C,attributes:{},index:null}}function u(C,L,z,P){const B=r.attributes,H=L.attributes;let G=0;const q=z.getAttributes();for(const X in q)if(q[X].location>=0){const k=B[X];let V=H[X];if(V===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(V=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(V=C.instanceColor)),k===void 0||k.attribute!==V||V&&k.data!==V.data)return!0;G++}return r.attributesNum!==G||r.index!==P}function m(C,L,z,P){const B={},H=L.attributes;let G=0;const q=z.getAttributes();for(const X in q)if(q[X].location>=0){let k=H[X];k===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(k=C.instanceColor));const V={};V.attribute=k,k&&k.data&&(V.data=k.data),B[X]=V,G++}r.attributes=B,r.attributesNum=G,r.index=P}function _(){const C=r.newAttributes;for(let L=0,z=C.length;L<z;L++)C[L]=0}function p(C){g(C,0)}function g(C,L){const z=r.newAttributes,P=r.enabledAttributes,B=r.attributeDivisors;z[C]=1,P[C]===0&&(i.enableVertexAttribArray(C),P[C]=1),B[C]!==L&&(i.vertexAttribDivisor(C,L),B[C]=L)}function x(){const C=r.newAttributes,L=r.enabledAttributes;for(let z=0,P=L.length;z<P;z++)L[z]!==C[z]&&(i.disableVertexAttribArray(z),L[z]=0)}function M(C,L,z,P,B,H,G){G===!0?i.vertexAttribIPointer(C,L,z,B,H):i.vertexAttribPointer(C,L,z,P,B,H)}function S(C,L,z,P){_();const B=P.attributes,H=z.getAttributes(),G=L.defaultAttributeValues;for(const q in H){const X=H[q];if(X.location>=0){let O=B[q];if(O===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),O!==void 0){const k=O.normalized,V=O.itemSize,pt=t.get(O);if(pt===void 0)continue;const Y=pt.buffer,ct=pt.type,ut=pt.bytesPerElement,at=ct===i.INT||ct===i.UNSIGNED_INT||O.gpuType===Ta;if(O.isInterleavedBufferAttribute){const xt=O.data,Ct=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,$t=O.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let st=0;st<X.locationSize;st++)g(X.location+st,xt.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let st=0;st<X.locationSize;st++)p(X.location+st);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let st=0;st<X.locationSize;st++)M(X.location+st,V/X.locationSize,ct,k,Ct*ut,($t+V/X.locationSize*st)*ut,at)}else{if(O.isInstancedBufferAttribute){for(let xt=0;xt<X.locationSize;xt++)g(X.location+xt,O.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let xt=0;xt<X.locationSize;xt++)p(X.location+xt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let xt=0;xt<X.locationSize;xt++)M(X.location+xt,V/X.locationSize,ct,k,V*ut,V/X.locationSize*xt*ut,at)}}else if(G!==void 0){const k=G[q];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(X.location,k);break;case 3:i.vertexAttrib3fv(X.location,k);break;case 4:i.vertexAttrib4fv(X.location,k);break;default:i.vertexAttrib1fv(X.location,k)}}}}x()}function y(){T();for(const C in n){const L=n[C];for(const z in L){const P=L[z];for(const B in P){const H=P[B];for(const G in H)h(H[G].object),delete H[G];delete P[B]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;const L=n[C.id];for(const z in L){const P=L[z];for(const B in P){const H=P[B];for(const G in H)h(H[G].object),delete H[G];delete P[B]}}delete n[C.id]}function v(C){for(const L in n){const z=n[L];for(const P in z){const B=z[P];if(B[C.id]===void 0)continue;const H=B[C.id];for(const G in H)h(H[G].object),delete H[G];delete B[C.id]}}}function b(C){for(const L in n){const z=n[L],P=C.isInstancedMesh===!0?C.id:0,B=z[P];if(B!==void 0){for(const H in B){const G=B[H];for(const q in G)h(G[q].object),delete G[q];delete B[H]}delete z[P],Object.keys(z).length===0&&delete n[L]}}}function T(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function Sm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ym(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==fn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){const b=v===un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==je&&v!==hn&&!b&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ht("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:S,maxSamples:y,samples:E}}function bm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new An,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=i.get(d);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{const x=r?0:n,M=x*4;let S=g.clippingState||null;l.value=S,S=h(m,f,M,u);for(let y=0;y!==M;++y)S[y]=e[y];g.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,m){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=u+_*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,S=u;M!==_;++M,S+=4)a.copy(d[M]).applyMatrix4(x,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}class Zo extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Dc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vi(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Ri});r.uniforms.tEquirect.value=e;const a=new Jt(s,r),o=e.minFilter;return e.minFilter===bn&&(e.minFilter=He),new $o(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ah=256,Em=3,wm=20,oh=256,lh=16,Tm=3,Am=new Q,Rm=new Rt;class Ir{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $o(1,10,null),this._boxMesh=new Jt(new vi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Am}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,m=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(Rm));const p=new $o(n,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=m,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ah,ac(t))}_fromTexture(t,e){t.mapping===Pi||t.mapping===cs?this._setSize(t.image.length===0?ah:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=ch(t,!1,!1),n=Math.log2(t)-Em;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ch(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Pi||t.mapping===cs?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=hh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Cm(),this._integrationMaterial=Pm());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/lh);for(let a=0;a<=n;a++){const o=Ir.lodToRoughness(a,n);if(a>n-Tm)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(oh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Lm());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function ch(i,t,e){return new Zo(i,{minFilter:bn,generateMipmaps:t,type:un,colorSpace:rr,depthBuffer:e})}function Cs(i,t,e){return new Wn({name:i,uniforms:t,vertexShader:Kt.cube_vert,fragmentShader:e,side:Ze,blending:Ri,depthTest:!1,depthWrite:!1})}function Cm(){return Cs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${oh}u

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
	`)}function Pm(){return Cs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lh}},`

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
	`)}function Lm(){return Cs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${wm}
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
	`)}function hh(){return Cs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function uh(){return Cs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Dm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,u=!1){return f==null?null:u?a(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===ya||u===ba)if(t.has(f)){const m=t.get(f).texture;return o(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const _=new Zo(m.height);return _.fromEquirectangularTexture(i,f),t.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,m=u===ya||u===ba,_=u===Pi||u===cs;if(m||_){let p=e.get(f);const g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Ir(i)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{const x=f.image;return m&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new Ir(i)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,u){return u===ya?f.mapping=Pi:u===ba&&(f.mapping=cs),f}function l(f){let u=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&u++;return u===m}function c(f){const u=f.target;u.removeEventListener("dispose",c);const m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Im(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&or("WebGLRenderer: "+n+" extension not supported."),s}}}function Nm(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(const p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);const _=r.get(m);_&&(t.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),e.memory.geometries++),_}function h(m){const _=m.attributes;for(const p in _)t.update(_[p],i.ARRAY_BUFFER)}function d(m){const _=m.index,p=m.attributes.position;let g=0;if(p===void 0)return;const x=_!==null?_.array.length:p.array.length/3-1,M=p.count>=65535?Ec:bc,S=new M(Math.ceil(x/3)*6,1),y=S.array;if(_!==null){const v=_.array;g=_.version;for(let b=0,T=0;b<x;b+=3){const R=v[b+0],C=v[b+1],L=v[b+2];y[T++]=R,y[T++]=C,y[T++]=C,y[T++]=L,y[T++]=L,y[T++]=R}}else{g=p.version;for(let v=0,b=0;v<x;v+=3){const T=v+0,R=v+1,C=v+2;y[b++]=T,y[b++]=R,y[b++]=R,y[b++]=C,y[b++]=C,y[b++]=T}}S.version=g;const E=r.get(m);E&&t.remove(E),r.set(m,S)}function f(m){const _=r.get(m);if(_){const p=m.index;p!==null&&_.version<p.version&&d(m)}else d(m);return r.get(m)}function u(){for(const m in s){const _=s[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function Um(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,u){u!==0&&(i.drawElementsInstanced(n,f,r,d*a,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let _=0;for(let p=0;p<u;p++)_+=f[p];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Fm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:re("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Om(i,t,e){const n=new WeakMap,s=new ve;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let T=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;u===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let S=o.attributes.position.count*M,y=1;S>t.maxTextureSize&&(y=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const E=new Float32Array(S*y*4*d),v=new fc(E,S,y,d);v.type=hn,v.needsUpdate=!0;const b=M*4;for(let R=0;R<d;R++){const C=p[R],L=g[R],z=x[R],P=S*y*4*R;for(let B=0;B<C.count;B++){const H=B*b;u===!0&&(s.fromBufferAttribute(C,B),E[P+H+0]=s.x,E[P+H+1]=s.y,E[P+H+2]=s.z,E[P+H+3]=0),m===!0&&(s.fromBufferAttribute(L,B),E[P+H+4]=s.x,E[P+H+5]=s.y,E[P+H+6]=s.z,E[P+H+7]=0),_===!0&&(s.fromBufferAttribute(z,B),E[P+H+8]=s.x,E[P+H+9]=s.y,E[P+H+10]=s.z,E[P+H+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:v,size:new zt(S,y)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];const m=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function zm(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Bm={[Bl]:"LINEAR_TONE_MAPPING",[kl]:"REINHARD_TONE_MAPPING",[Gl]:"CINEON_TONE_MAPPING",[Hl]:"ACES_FILMIC_TONE_MAPPING",[Wl]:"AGX_TONE_MAPPING",[Sa]:"NEUTRAL_TONE_MAPPING",[Vl]:"CUSTOM_TONE_MAPPING"};function km(i,t,e,n,s,r){const a=new wn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Re;h.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ae([0,2,0,0,2,0],2));const d=new sp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Jt(h,d),u=new jc(-1,1,1,-1,0,1);let m=null,_=null,p=!1,g,x=null,M=[],S=!1;this.setSize=function(y,E){a.setSize(y,E),o!==null&&o.setSize(y,E),l!==null&&l.setSize(y,E);for(let v=0;v<M.length;v++){const b=M[v];b.setSize&&b.setSize(y,E)}},this.setEffects=function(y){M=y,S=M.length>0&&M[0].isRenderPass===!0;const E=a.width,v=a.height;M.length>0&&o===null&&(o=new wn(E,v,{type:un,depthBuffer:!1,stencilBuffer:!1}),l=new wn(E,v,{type:un,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&M.some(T=>T.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new qi(E,v),r===!0&&(c.format=ei,c.type=Li)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let T=0;T<M.length;T++){const R=M[T];R.setSize&&R.setSize(E,v),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(y,E){if(p||y.toneMapping===In&&M.length===0)return!1;if(x=E,E!==null){const v=E.width,b=E.height;(a.width!==v||a.height!==b)&&this.setSize(v,b)}return S===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=In,!0},this.hasRenderPass=function(){return S},this.end=function(y,E){y.toneMapping=g,p=!0;let v=a,b=o;for(let T=0;T<M.length;T++){const R=M[T];R.enabled!==!1&&(R.render(y,b,v,E),R.needsSwap!==!1&&(v=b,b=b===o?l:o))}if(m!==y.outputColorSpace||_!==y.toneMapping){m=y.outputColorSpace,_=y.toneMapping,d.defines={},te.getTransfer(m)===he&&(d.defines.SRGB_TRANSFER="");const T=Bm[_];T&&(d.defines[T]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,y.setRenderTarget(x),y.render(f,u),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const fh=new Pe,dh=new qi(1,1),ph=new Ic(1),mh=new fc,gh=new md,xh=new Dc,_h=[],vh=[],Mh=new Float32Array(16),Sh=new Float32Array(9),yh=new Float32Array(4);function Qi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=_h[s];if(r===void 0&&(r=new Float32Array(s),_h[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Nr(i,t){let e=vh[t];e===void 0&&(e=new Int32Array(t),vh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function Wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function Xm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;yh.set(n),i.uniformMatrix2fv(this.addr,!1,yh),Ie(e,n)}}function qm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;Sh.set(n),i.uniformMatrix3fv(this.addr,!1,Sh),Ie(e,n)}}function Ym(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;Mh.set(n),i.uniformMatrix4fv(this.addr,!1,Mh),Ie(e,n)}}function $m(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function Qm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function Ur(i){return i.version===0&&(i.compareFunction=tc,i.needsUpdate=!0),i}function ng(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ur(dh):r=fh,e.setTexture2D(t||r,s)}function ig(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gh,s)}function sg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ur(ph):r=xh,e.setTextureCube(t||r,s)}function rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||mh,s)}function ag(i){switch(i){case 5126:return Gm;case 35664:return Hm;case 35665:return Vm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return $m;case 35667:case 35671:return Km;case 35668:case 35672:return Zm;case 35669:case 35673:return Jm;case 5125:return Qm;case 36294:return jm;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}function og(i,t){i.uniform1fv(this.addr,t)}function lg(i,t){const e=Qi(t,this.size,2);i.uniform2fv(this.addr,e)}function cg(i,t){const e=Qi(t,this.size,3);i.uniform3fv(this.addr,e)}function hg(i,t){const e=Qi(t,this.size,4);i.uniform4fv(this.addr,e)}function ug(i,t){const e=Qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fg(i,t){const e=Qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dg(i,t){const e=Qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pg(i,t){i.uniform1iv(this.addr,t)}function mg(i,t){i.uniform2iv(this.addr,t)}function gg(i,t){i.uniform3iv(this.addr,t)}function xg(i,t){i.uniform4iv(this.addr,t)}function _g(i,t){i.uniform1uiv(this.addr,t)}function vg(i,t){i.uniform2uiv(this.addr,t)}function Mg(i,t){i.uniform3uiv(this.addr,t)}function Sg(i,t){i.uniform4uiv(this.addr,t)}function yg(i,t,e){const n=this.cache,s=t.length,r=Nr(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ur(dh):a=fh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function bg(i,t,e){const n=this.cache,s=t.length,r=Nr(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||gh,r[a])}function Eg(i,t,e){const n=this.cache,s=t.length,r=Nr(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ur(ph):a=xh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function wg(i,t,e){const n=this.cache,s=t.length,r=Nr(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||mh,r[a])}function Tg(i){switch(i){case 5126:return og;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return ug;case 35675:return fg;case 35676:return dg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return xg;case 5125:return _g;case 36294:return vg;case 36295:return Mg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return wg}}class Ag{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ag(e.type)}}class Rg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tg(e.type)}}class Cg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Jo=/(\w+)(\])?(\[|\.)?/g;function bh(i,t){i.seq.push(t),i.map[t.id]=t}function Pg(i,t,e){const n=i.name,s=n.length;for(Jo.lastIndex=0;;){const r=Jo.exec(n),a=Jo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){bh(e,c===void 0?new Ag(o,i,t):new Rg(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Cg(o),bh(e,d)),e=d}}}class Fr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Pg(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Eh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Lg=37297;let Dg=0;function Ig(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const wh=new Vt;function Ng(i){te._getMatrix(wh,te.workingColorSpace,i);const t=`mat3( ${wh.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case ar:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Th(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ig(i.getShaderSource(t),o)}else return r}function Ug(i,t){const e=Ng(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Fg={[Bl]:"Linear",[kl]:"Reinhard",[Gl]:"Cineon",[Hl]:"ACESFilmic",[Wl]:"AgX",[Sa]:"Neutral",[Vl]:"Custom"};function Og(i,t){const e=Fg[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Or=new Q;function zg(){te.getLuminanceCoefficients(Or);const i=Or.x.toFixed(4),t=Or.y.toFixed(4),e=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function kg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ps(i){return i!==""}function Ah(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Rh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(i){return i.replace(Hg,Vg)}function Vg(i,t){const e=Kt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Qo(e)}const Wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(i){return i.replace(Wg,Xg)}function Xg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ph(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const qg={[rs]:"SHADOWMAP_TYPE_PCF",[as]:"SHADOWMAP_TYPE_VSM"};function Yg(i){return qg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $g={[cs]:"ENVMAP_MODE_REFRACTION"};function Kg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$g[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Zg={[Ma]:"ENVMAP_BLENDING_MULTIPLY",[If]:"ENVMAP_BLENDING_MIX",[Nf]:"ENVMAP_BLENDING_ADD"};function Jg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Zg[i.combine]||"ENVMAP_BLENDING_NONE"}function Qg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Yg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Kg(e),d=Jg(e),f=Bg(e),u=kg(r),m=s.createProgram();let _,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Ps).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Ps).join(`
`),p.length>0&&(p+=`
`)):(_=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),p=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?Kt.tonemapping_pars_fragment:"",e.toneMapping!==In?Og("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Ug("linearToOutputTexel",e.outputColorSpace),zg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ps).join(`
`)),a=Qo(a),a=Ah(a,e),a=Rh(a,e),o=Qo(o),o=Ah(o,e),o=Rh(o,e),a=Ch(a),o=Ch(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=g+_+a,M=g+p+o,S=Eh(s,s.VERTEX_SHADER,x),y=Eh(s,s.FRAGMENT_SHADER,M);s.attachShader(m,S),s.attachShader(m,y),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function E(R){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(m)||"",L=s.getShaderInfoLog(S)||"",z=s.getShaderInfoLog(y)||"",P=C.trim(),B=L.trim(),H=z.trim();let G=!0,q=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,S,y);else{const X=Th(s,S,"vertex"),O=Th(s,y,"fragment");re("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+X+`
`+O)}else P!==""?Ht("WebGLProgram: Program Info Log:",P):(B===""||H==="")&&(q=!1);q&&(R.diagnostics={runnable:G,programLog:P,vertexShader:{log:B,prefix:_},fragmentShader:{log:H,prefix:p}})}s.deleteShader(S),s.deleteShader(y),v=new Fr(s,m),b=Gg(s,m)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(m,Lg)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=y,this}let jg=0;class tx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ex(t),e.set(t,n)),n}}class ex{constructor(t){this.id=jg++,this.code=t,this.usedTimes=0}}function nx(i){return i===ni||i===nr||i===ir}function ix(i,t,e,n,s,r){const a=new vo,o=new tx,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,b,T,R,C,L){const z=R.fog,P=C.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,G=t.get(v.envMap||B,H),q=f[v.type];let X=n.precision;v.precision!==null&&(X=n.getMaxPrecision(v.precision),X!==v.precision&&Ht("WebGLProgram.getParameters:",v.precision,"not supported, using",X,"instead."));const O=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,k=O!==void 0?O.length:0;let V=0;P.morphAttributes.position!==void 0&&(V=1),P.morphAttributes.normal!==void 0&&(V=2),P.morphAttributes.color!==void 0&&(V=3);let pt,Y,ct,ut;if(q){const bt=Cn[q];pt=bt.vertexShader,Y=bt.fragmentShader}else{pt=v.vertexShader,Y=v.fragmentShader;const bt=o.getVertexShaderStage(v),fe=o.getFragmentShaderStage(v);o.update(v,bt,fe),ct=bt.id,ut=fe.id}const at=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Ct=C.isInstancedMesh===!0,$t=C.isBatchedMesh===!0,st=!!v.map,dt=!!v.matcap,Tt=!!G,Bt=Tt&&G.isPMREMTexture===!0,Ut=!!v.aoMap,ee=!!v.lightMap,At=!!v.bumpMap&&v.wireframe===!1,Yt=!!v.normalMap,ce=!!v.displacementMap,de=!!v.emissiveMap,Ee=!!v.metalnessMap,qe=!!v.roughnessMap,ke=v.anisotropy>0,K=v.clearcoat>0,Ye=v.diffuseRoughness>0,ge=v.dispersion>0,ue=v.retroreflectivity>0,vt=v.iridescence>0,Se=v.sheen>0,Ft=v.transmission>0,kt=ke&&!!v.anisotropyMap,N=K&&!!v.clearcoatMap,w=K&&!!v.clearcoatNormalMap,tt=K&&!!v.clearcoatRoughnessMap,mt=Ye&&!!v.diffuseRoughnessMap,ht=vt&&!!v.iridescenceMap,_t=vt&&!!v.iridescenceThicknessMap,I=Se&&!!v.sheenColorMap,U=Se&&!!v.sheenRoughnessMap,F=!!v.specularMap,Z=!!v.specularColorMap,D=!!v.specularIntensityMap,j=Ft&&!!v.transmissionMap,J=Ft&&!!v.thicknessMap,ot=!!v.gradientMap,lt=!!v.alphaMap,ft=v.alphaTest>0,wt=!!v.alphaHash,Wt=!!v.extensions;let gt=In;v.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(gt=i.toneMapping);const Ot=Bt?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Xt={shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:pt,fragmentShader:Y,defines:v.defines,customVertexShaderID:ct,customFragmentShaderID:ut,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:X,batching:$t,batchingColor:$t&&C._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&C.instanceColor!==null,instancingMorph:Ct&&C.morphTexture!==null,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:st,matcap:dt,envMap:Tt,envMapMode:Tt&&G.mapping,envMapPMREM:Bt,envMapMaxLod:Bt?Ot.length-1:null,envMapSize:Bt?Ot[0].width:null,aoMap:Ut,lightMap:ee,bumpMap:At,normalMap:Yt,displacementMap:ce,emissiveMap:de,normalMapObjectSpace:Yt&&v.normalMapType===Of,normalMapTangentSpace:Yt&&v.normalMapType===sr,packedNormalMap:Yt&&v.normalMapType===sr&&nx(v.normalMap.format),metalnessMap:Ee,roughnessMap:qe,anisotropy:ke,anisotropyMap:kt,clearcoat:K,clearcoatMap:N,clearcoatNormalMap:w,clearcoatRoughnessMap:tt,diffuseRoughness:Ye,diffuseRoughnessMap:mt,dispersion:ge,retroreflection:ue,iridescence:vt,iridescenceMap:ht,iridescenceThicknessMap:_t,sheen:Se,sheenColorMap:I,sheenRoughnessMap:U,specularMap:F,specularColorMap:Z,specularIntensityMap:D,transmission:Ft,transmissionMap:j,thicknessMap:J,gradientMap:ot,opaque:v.transparent===!1&&v.blending===os&&v.alphaToCoverage===!1,alphaMap:lt,alphaTest:ft,alphaHash:wt,combine:v.combine,mapUv:st&&u(v.map.channel),aoMapUv:Ut&&u(v.aoMap.channel),lightMapUv:ee&&u(v.lightMap.channel),bumpMapUv:At&&u(v.bumpMap.channel),normalMapUv:Yt&&u(v.normalMap.channel),displacementMapUv:ce&&u(v.displacementMap.channel),emissiveMapUv:de&&u(v.emissiveMap.channel),metalnessMapUv:Ee&&u(v.metalnessMap.channel),roughnessMapUv:qe&&u(v.roughnessMap.channel),anisotropyMapUv:kt&&u(v.anisotropyMap.channel),clearcoatMapUv:N&&u(v.clearcoatMap.channel),clearcoatNormalMapUv:w&&u(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&u(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:mt&&u(v.diffuseRoughnessMap.channel),iridescenceMapUv:ht&&u(v.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&u(v.iridescenceThicknessMap.channel),sheenColorMapUv:I&&u(v.sheenColorMap.channel),sheenRoughnessMapUv:U&&u(v.sheenRoughnessMap.channel),specularMapUv:F&&u(v.specularMap.channel),specularColorMapUv:Z&&u(v.specularColorMap.channel),specularIntensityMapUv:D&&u(v.specularIntensityMap.channel),transmissionMapUv:j&&u(v.transmissionMap.channel),thicknessMapUv:J&&u(v.thicknessMap.channel),alphaMapUv:lt&&u(v.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Yt||ke),vertexNormals:!!P.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!P.attributes.uv&&(st||lt),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||P.attributes.normal===void 0&&Yt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:V,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:L.filter(bt=>bt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:st&&v.map.isVideoTexture===!0&&te.getTransfer(v.map.colorSpace)===he,decodeVideoTextureEmissive:de&&v.emissiveMap.isVideoTexture===!0&&te.getTransfer(v.emissiveMap.colorSpace)===he,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===be,flipSided:v.side===Ze,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Wt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&v.extensions.multiDraw===!0||$t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function _(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const T in v.defines)b.push(T),b.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(p(b,v),g(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function p(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function g(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function x(v){const b=f[v.type];let T;if(b){const R=Cn[b];T=ep.clone(R.uniforms)}else T=v.uniforms;return T}function M(v,b){let T=h.get(b);return T!==void 0?++T.usedTimes:(T=new Qg(i,b,v,s),c.push(T),h.set(b,T)),T}function S(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function y(v){o.remove(v)}function E(){o.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:x,acquireProgram:M,releaseProgram:S,releaseShaderCache:y,programs:c,dispose:E}}function sx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function rx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Lh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Dh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,m,_,p,g){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:u,material:m,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},i[t]=x):(x.id=f.id,x.object=f,x.geometry=u,x.material=m,x.materialVariant=a(f),x.groupOrder=_,x.renderOrder=f.renderOrder,x.z=p,x.group=g),t++,x}function l(f,u,m,_,p,g,x){x.reversedDepth===!0&&(p=-p);const M=o(f,u,m,_,p,g);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):e.push(M)}function c(f,u,m,_,p,g){const x=o(f,u,m,_,p,g);m.transmission>0?n.unshift(x):m.transparent===!0?s.unshift(x):e.unshift(x)}function h(f,u){e.length>1&&e.sort(f||rx),n.length>1&&n.sort(u||Lh),s.length>1&&s.sort(u||Lh)}function d(){for(let f=t,u=i.length;f<u;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function ax(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Dh,i.set(n,[a])):s>=r.length?(a=new Dh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ox(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Q,color:new Rt};break;case"SpotLight":e={position:new Q,direction:new Q,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return i[t.id]=e,e}}}function lx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let cx=0;function hx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ux(i){const t=new ox,e=lx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Q);const s=new Q,r=new ne,a=new ne;function o(c){let h=0,d=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let u=0,m=0,_=0,p=0,g=0,x=0,M=0,S=0,y=0,E=0,v=0,b=0,T=0,R=0;c.sort(hx);for(let L=0,z=c.length;L<z;L++){const P=c[L],B=P.color,H=P.intensity,G=P.distance;let q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ni?q=P.shadow.map.texture:q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=B.r*H,d+=B.g*H,f+=B.b*H;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],H);R++}else if(P.isSunLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,k=e.get(P);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),n.sunShadow[m]=k,n.sunShadowMap[m]=q;const V=O.getViewportCount();for(let pt=0;pt<V;pt++)n.sunShadowMatrix[_+pt]=O.getMatrix(pt),n.sunShadowCascade[_+pt]=O._cascadeData[pt];_+=V,m++}n.sun[u]=X,u++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,k=e.get(P);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=P.shadow.matrix,y++}n.directional[p]=X,p++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(B).multiplyScalar(H),X.distance=G,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[x]=X;const O=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,O.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[x]=O.matrix,P.castShadow){const k=e.get(P);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=q,v++}x++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(B).multiplyScalar(H),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[M]=X,M++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const O=P.shadow,k=e.get(P);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,k.shadowCameraNear=O.camera.near,k.shadowCameraFar=O.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(H),X.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[S]=X,S++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const C=n.hash;(C.sunLength!==u||C.directionalLength!==p||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==M||C.hemiLength!==S||C.numSunShadows!==m||C.numDirectionalShadows!==y||C.numPointShadows!==E||C.numSpotShadows!==v||C.numSpotMaps!==b||C.numLightProbes!==R)&&(n.sun.length=u,n.directional.length=p,n.spot.length=x,n.rectArea.length=M,n.point.length=g,n.hemi.length=S,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,C.sunLength=u,C.directionalLength=p,C.pointLength=g,C.spotLength=x,C.rectAreaLength=M,C.hemiLength=S,C.numSunShadows=m,C.numDirectionalShadows=y,C.numPointShadows=E,C.numSpotShadows=v,C.numSpotMaps=b,C.numLightProbes=R,n.version=cx++)}function l(c,h){let d=0,f=0,u=0,m=0,_=0,p=0;const g=h.matrixWorldInverse;for(let x=0,M=c.length;x<M;x++){const S=c[x];if(S.isSunLight){const y=n.sun[d];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),d++}else if(S.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(S.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),m++}else if(S.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),u++}else if(S.isHemisphereLight){const y=n.hemi[p];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function Ih(i){const t=new ux(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){n.push(d)}function l(){t.setup(e),s.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function fx(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ih(i),t.set(s,[o])):r>=a.length?(o=new Ih(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,px=`uniform sampler2D shadow_pass;
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
}`,mx=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],gx=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Nh=new ne,Ls=new Q,jo=new Q;function xx(i,t,e){let n=new Es;const s=new zt,r=new zt,a=new ve,o=new rp,l=new ap,c={},h=e.maxTextureSize,d={[jn]:Ze,[Ze]:jn,[be]:be},f=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:dx,fragmentShader:px}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const m=new Re;m.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rs;let g=this.type;this.render=function(E,v,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===pf&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=rs);const T=i.getRenderTarget(),R=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Ri),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const z=g!==this.type;z&&v.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(B=>B.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,B=E.length;P<B;P++){const H=E[P],G=H.shadow;if(G===void 0){Ht("WebGLShadowMap:",H,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const q=G.getFrameExtents();s.multiply(q),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,G.mapSize.y=r.y));const X=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||z===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===as){if(H.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new wn(s.x,s.y,{format:ni,type:un,minFilter:He,magFilter:He,generateMipmaps:!1}),G.map.texture.name=H.name+".shadowMap",G.map.depthTexture=new qi(s.x,s.y,hn),G.map.depthTexture.name=H.name+".shadowMapDepth",G.map.depthTexture.format=ti,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=ze,G.map.depthTexture.magFilter=ze}else H.isPointLight?(G.map=new Zo(s.x),G.map.depthTexture=new Ic(s.x,En)):(G.map=new wn(s.x,s.y),G.map.depthTexture=new qi(s.x,s.y,En)),G.map.depthTexture.name=H.name+".shadowMap",G.map.depthTexture.format=ti,this.type===rs?(G.map.depthTexture.compareFunction=X?jl:Ql,G.map.depthTexture.minFilter=He,G.map.depthTexture.magFilter=He):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=ze,G.map.depthTexture.magFilter=ze);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);const O=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();H.isPointLight!==!0&&G.updateMatrices(H,b);const k=G.camera.layers.mask&4294967294?G.camera.layers:b.layers;for(let V=0;V<O;V++){const pt=G.getCamera(V);if(H.isPointLight){const Y=G.camera,ct=G.matrix,ut=H.distance||Y.far;ut!==Y.far&&(Y.far=ut,Y.updateProjectionMatrix()),Ls.setFromMatrixPosition(H.matrixWorld),Y.position.copy(Ls),jo.copy(Y.position),jo.add(mx[V]),Y.up.copy(gx[V]),Y.lookAt(jo),Y.updateMatrixWorld(),ct.makeTranslation(-Ls.x,-Ls.y,-Ls.z),Nh.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Nh,Y.coordinateSystem,Y.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,V),i.clear();else{V===0&&(i.setRenderTarget(G.map),i.clear());const Y=G.getViewport(V);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),L.viewport(a)}n=G.getFrustum(V),S(v,b,pt,H,k,this.type)}G.isPointLightShadow!==!0&&this.type===as&&x(G,b),G.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(T,R,C)};function x(E,v){const b=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new wn(s.x,s.y,{format:ni,type:un}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(v,null,b,f,_,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(v,null,b,u,_,null)}function M(E,v,b,T){let R=null;const C=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)R=C;else if(R=b.isPointLight===!0?l:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const L=R.uuid,z=v.uuid;let P=c[L];P===void 0&&(P={},c[L]=P);let B=P[z];B===void 0&&(B=R.clone(),P[z]=B,v.addEventListener("dispose",y)),R=B}if(R.visible=v.visible,R.wireframe=v.wireframe,T===as?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:d[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const L=i.properties.get(R);L.light=b}return R}function S(E,v,b,T,R,C){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===as)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const P=t.update(E),B=E.material;if(Array.isArray(B)){const H=P.groups;for(let G=0,q=H.length;G<q;G++){const X=H[G],O=B[X.materialIndex];if(O&&O.visible){const k=M(E,O,T,C);E.onBeforeShadow(i,E,v,b,P,k,X),i.renderBufferDirect(b,null,P,k,E,X),E.onAfterShadow(i,E,v,b,P,k,X)}}}else if(B.visible){const H=M(E,B,T,C);E.onBeforeShadow(i,E,v,b,P,H,null),i.renderBufferDirect(b,null,P,H,E,null),E.onAfterShadow(i,E,v,b,P,H,null)}}const z=E.children;for(let P=0,B=z.length;P<B;P++)S(z[P],v,b,T,R,C)}function y(E){E.target.removeEventListener("dispose",y);for(const b in c){const T=c[b],R=E.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function _x(i,t){function e(){let D=!1;const j=new ve;let J=null;const ot=new ve(0,0,0,0);return{setMask:function(lt){J!==lt&&!D&&(i.colorMask(lt,lt,lt,lt),J=lt)},setLocked:function(lt){D=lt},setClear:function(lt,ft,wt,Wt,gt){gt===!0&&(lt*=Wt,ft*=Wt,wt*=Wt),j.set(lt,ft,wt,Wt),ot.equals(j)===!1&&(i.clearColor(lt,ft,wt,Wt),ot.copy(j))},reset:function(){D=!1,J=null,ot.set(-1,0,0,0)}}}function n(){let D=!1,j=!1,J=null,ot=null,lt=null;return{setReversed:function(ft){if(j!==ft){const wt=t.get("EXT_clip_control");ft?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),j=ft;const Wt=lt;lt=null,this.setClear(Wt)}},getReversed:function(){return j},setTest:function(ft){ft?xt(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(ft){J!==ft&&!D&&(i.depthMask(ft),J=ft)},setFunc:function(ft){if(j&&(ft=$f[ft]),ot!==ft){switch(ft){case da:i.depthFunc(i.NEVER);break;case pa:i.depthFunc(i.ALWAYS);break;case ma:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case ga:i.depthFunc(i.EQUAL);break;case xa:i.depthFunc(i.GEQUAL);break;case _a:i.depthFunc(i.GREATER);break;case va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=ft}},setLocked:function(ft){D=ft},setClear:function(ft){lt!==ft&&(lt=ft,j&&(ft=1-ft),i.clearDepth(ft))},reset:function(){D=!1,J=null,ot=null,lt=null,j=!1}}}function s(){let D=!1,j=null,J=null,ot=null,lt=null,ft=null,wt=null,Wt=null,gt=null;return{setTest:function(Ot){D||(Ot?xt(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(Ot){j!==Ot&&!D&&(i.stencilMask(Ot),j=Ot)},setFunc:function(Ot,Xt,bt){(J!==Ot||ot!==Xt||lt!==bt)&&(i.stencilFunc(Ot,Xt,bt),J=Ot,ot=Xt,lt=bt)},setOp:function(Ot,Xt,bt){(ft!==Ot||wt!==Xt||Wt!==bt)&&(i.stencilOp(Ot,Xt,bt),ft=Ot,wt=Xt,Wt=bt)},setLocked:function(Ot){D=Ot},setClear:function(Ot){gt!==Ot&&(i.clearStencil(Ot),gt=Ot)},reset:function(){D=!1,j=null,J=null,ot=null,lt=null,ft=null,wt=null,Wt=null,gt=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let h={},d={},f={},u=new WeakMap,m=[],_=null,p=!1,g=null,x=null,M=null,S=null,y=null,E=null,v=null,b=new Rt(0,0,0),T=0,R=!1,C=null,L=null,z=null,P=null,B=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,q=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=q>=2);let O=null,k={};const V=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),Y=new ve().fromArray(V),ct=new ve().fromArray(pt);function ut(D,j,J,ot){const lt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(D,ft),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<J;wt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(j+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ft}const at={};at[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(i.DEPTH_TEST),a.setFunc(ls),At(!1),Yt(Nl),xt(i.CULL_FACE),Ut(Ri);function xt(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ct(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function $t(D,j){return f[D]!==j?(i.bindFramebuffer(D,j),f[D]=j,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=j),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=j),!0):!1}function st(D,j){let J=m,ot=!1;if(D){J=u.get(j),J===void 0&&(J=[],u.set(j,J));const lt=D.textures;if(J.length!==lt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,wt=lt.length;ft<wt;ft++)J[ft]=i.COLOR_ATTACHMENT0+ft;J.length=lt.length,ot=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ot=!0);ot&&i.drawBuffers(J)}function dt(D){return _!==D?(i.useProgram(D),_=D,!0):!1}const Tt={[Ci]:i.FUNC_ADD,[gf]:i.FUNC_SUBTRACT,[xf]:i.FUNC_REVERSE_SUBTRACT};Tt[_f]=i.MIN,Tt[vf]=i.MAX;const Bt={[Mf]:i.ZERO,[Sf]:i.ONE,[yf]:i.SRC_COLOR,[Ol]:i.SRC_ALPHA,[Rf]:i.SRC_ALPHA_SATURATE,[Tf]:i.DST_COLOR,[Ef]:i.DST_ALPHA,[bf]:i.ONE_MINUS_SRC_COLOR,[zl]:i.ONE_MINUS_SRC_ALPHA,[Af]:i.ONE_MINUS_DST_COLOR,[wf]:i.ONE_MINUS_DST_ALPHA,[Cf]:i.CONSTANT_COLOR,[Pf]:i.ONE_MINUS_CONSTANT_COLOR,[Lf]:i.CONSTANT_ALPHA,[Df]:i.ONE_MINUS_CONSTANT_ALPHA};function Ut(D,j,J,ot,lt,ft,wt,Wt,gt,Ot){if(D===Ri){p===!0&&(Ct(i.BLEND),p=!1);return}if(p===!1&&(xt(i.BLEND),p=!0),D!==mf){if(D!==g||Ot!==R){if((x!==Ci||y!==Ci)&&(i.blendEquation(i.FUNC_ADD),x=Ci,y=Ci),Ot)switch(D){case os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fa:i.blendFunc(i.ONE,i.ONE);break;case Ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:re("WebGLState: Invalid blending: ",D);break}else switch(D){case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ul:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fl:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",D);break}M=null,S=null,E=null,v=null,b.set(0,0,0),T=0,g=D,R=Ot}return}lt=lt||j,ft=ft||J,wt=wt||ot,(j!==x||lt!==y)&&(i.blendEquationSeparate(Tt[j],Tt[lt]),x=j,y=lt),(J!==M||ot!==S||ft!==E||wt!==v)&&(i.blendFuncSeparate(Bt[J],Bt[ot],Bt[ft],Bt[wt]),M=J,S=ot,E=ft,v=wt),(Wt.equals(b)===!1||gt!==T)&&(i.blendColor(Wt.r,Wt.g,Wt.b,gt),b.copy(Wt),T=gt),g=D,R=!1}function ee(D,j){D.side===be?Ct(i.CULL_FACE):xt(i.CULL_FACE);let J=D.side===Ze;j&&(J=!J),At(J),D.blending===os&&D.transparent===!1?Ut(Ri):Ut(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const ot=D.stencilWrite;o.setTest(ot),ot&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),de(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function At(D){C!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),C=D)}function Yt(D){D!==ff?(xt(i.CULL_FACE),D!==L&&(D===Nl?i.cullFace(i.BACK):D===df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),L=D}function ce(D){D!==z&&(G&&i.lineWidth(D),z=D)}function de(D,j,J){D?(xt(i.POLYGON_OFFSET_FILL),(P!==j||B!==J)&&(P=j,B=J,a.getReversed()&&(j=-j,J=-J),i.polygonOffset(j,J))):Ct(i.POLYGON_OFFSET_FILL)}function Ee(D){D?xt(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function qe(D){D===void 0&&(D=i.TEXTURE0+H-1),O!==D&&(i.activeTexture(D),O=D)}function ke(D,j,J){J===void 0&&(O===null?J=i.TEXTURE0+H-1:J=O);let ot=k[J];ot===void 0&&(ot={type:void 0,texture:void 0},k[J]=ot),(ot.type!==D||ot.texture!==j)&&(O!==J&&(i.activeTexture(J),O=J),i.bindTexture(D,j||at[D]),ot.type=D,ot.texture=j)}function K(){const D=k[O];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ye(){try{i.compressedTexImage2D(...arguments)}catch(D){re("WebGLState:",D)}}function ge(){try{i.compressedTexImage3D(...arguments)}catch(D){re("WebGLState:",D)}}function ue(){try{i.texSubImage2D(...arguments)}catch(D){re("WebGLState:",D)}}function vt(){try{i.texSubImage3D(...arguments)}catch(D){re("WebGLState:",D)}}function Se(){try{i.compressedTexSubImage2D(...arguments)}catch(D){re("WebGLState:",D)}}function Ft(){try{i.compressedTexSubImage3D(...arguments)}catch(D){re("WebGLState:",D)}}function kt(){try{i.texStorage2D(...arguments)}catch(D){re("WebGLState:",D)}}function N(){try{i.texStorage3D(...arguments)}catch(D){re("WebGLState:",D)}}function w(){try{i.texImage2D(...arguments)}catch(D){re("WebGLState:",D)}}function tt(){try{i.texImage3D(...arguments)}catch(D){re("WebGLState:",D)}}function mt(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function ht(D,j){d[D]!==j&&(i.pixelStorei(D,j),d[D]=j)}function _t(D){Y.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Y.copy(D))}function I(D){ct.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ct.copy(D))}function U(D,j){let J=c.get(j);J===void 0&&(J=new WeakMap,c.set(j,J));let ot=J.get(D);ot===void 0&&(ot=i.getUniformBlockIndex(j,D.name),i.uniformBlockBinding(j,ot,ot),J.set(D,ot))}function F(D,j,J){const lt=c.get(j).get(D);l[lt]!==J&&(i.bindBufferBase(i.UNIFORM_BUFFER,lt,J),l[lt]=J)}function Z(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},O=null,k={},f={},l={},u=new WeakMap,m=[],_=null,p=!1,g=null,x=null,M=null,S=null,y=null,E=null,v=null,b=new Rt(0,0,0),T=0,R=!1,C=null,L=null,z=null,P=null,B=null,Y.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xt,disable:Ct,bindFramebuffer:$t,drawBuffers:st,useProgram:dt,setBlending:Ut,setMaterial:ee,setFlipSided:At,setCullFace:Yt,setLineWidth:ce,setPolygonOffset:de,setScissorTest:Ee,activeTexture:qe,bindTexture:ke,unbindTexture:K,compressedTexImage2D:Ye,compressedTexImage3D:ge,texImage2D:w,texImage3D:tt,pixelStorei:ht,getParameter:mt,updateUBOMapping:U,uniformBlockBinding:F,texStorage2D:kt,texStorage3D:N,texSubImage2D:ue,texSubImage3D:vt,compressedTexSubImage2D:Se,compressedTexSubImage3D:Ft,scissor:_t,viewport:I,reset:Z}}function vx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,h=new WeakMap,d=new Set;let f;const u=new WeakMap,m=new Set,_=new FinalizationRegistry(N=>m.delete(N));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,w){return p?new OffscreenCanvas(N,w):fs("canvas")}function x(N,w,tt){let mt=1;const ht=kt(N);if((ht.width>tt||ht.height>tt)&&(mt=tt/Math.max(ht.width,ht.height)),mt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const _t=Math.floor(mt*ht.width),I=Math.floor(mt*ht.height);f===void 0&&(f=g(_t,I));const U=w?g(_t,I):f;return U.width=_t,U.height=I,U.getContext("2d").drawImage(N,0,0,_t,I),Ht("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+_t+"x"+I+")."),U}else return"data"in N&&Ht("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),N;return N}function M(N){return N.generateMipmaps}function S(N){i.generateMipmap(N)}function y(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(N,w,tt,mt,ht,_t=!1){if(N!==null){if(i[N]!==void 0)return i[N];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let I;mt&&(I=t.get("EXT_texture_norm16"),I||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let U=w;if(w===i.RED&&(tt===i.FLOAT&&(U=i.R32F),tt===i.HALF_FLOAT&&(U=i.R16F),tt===i.UNSIGNED_BYTE&&(U=i.R8),tt===i.UNSIGNED_SHORT&&I&&(U=I.R16_EXT),tt===i.SHORT&&I&&(U=I.R16_SNORM_EXT)),w===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(U=i.R8UI),tt===i.UNSIGNED_SHORT&&(U=i.R16UI),tt===i.UNSIGNED_INT&&(U=i.R32UI),tt===i.BYTE&&(U=i.R8I),tt===i.SHORT&&(U=i.R16I),tt===i.INT&&(U=i.R32I)),w===i.RG&&(tt===i.FLOAT&&(U=i.RG32F),tt===i.HALF_FLOAT&&(U=i.RG16F),tt===i.UNSIGNED_BYTE&&(U=i.RG8),tt===i.UNSIGNED_SHORT&&I&&(U=I.RG16_EXT),tt===i.SHORT&&I&&(U=I.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(U=i.RG8UI),tt===i.UNSIGNED_SHORT&&(U=i.RG16UI),tt===i.UNSIGNED_INT&&(U=i.RG32UI),tt===i.BYTE&&(U=i.RG8I),tt===i.SHORT&&(U=i.RG16I),tt===i.INT&&(U=i.RG32I)),w===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(U=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(U=i.RGB16UI),tt===i.UNSIGNED_INT&&(U=i.RGB32UI),tt===i.BYTE&&(U=i.RGB8I),tt===i.SHORT&&(U=i.RGB16I),tt===i.INT&&(U=i.RGB32I)),w===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(U=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(U=i.RGBA16UI),tt===i.UNSIGNED_INT&&(U=i.RGBA32UI),tt===i.BYTE&&(U=i.RGBA8I),tt===i.SHORT&&(U=i.RGBA16I),tt===i.INT&&(U=i.RGBA32I)),w===i.RGB&&(tt===i.UNSIGNED_SHORT&&I&&(U=I.RGB16_EXT),tt===i.SHORT&&I&&(U=I.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(U=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(U=i.R11F_G11F_B10F)),w===i.RGBA){const F=_t?ar:te.getTransfer(ht);tt===i.FLOAT&&(U=i.RGBA32F),tt===i.HALF_FLOAT&&(U=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(U=F===he?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&I&&(U=I.RGBA16_EXT),tt===i.SHORT&&I&&(U=I.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(U=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(U=i.RGB5_A1)}return(U===i.R16F||U===i.R32F||U===i.RG16F||U===i.RG32F||U===i.RGBA16F||U===i.RGBA32F)&&t.get("EXT_color_buffer_float"),U}function v(N,w){let tt;return N?w===null||w===En||w===Li?tt=i.DEPTH24_STENCIL8:w===hn?tt=i.DEPTH32F_STENCIL8:w===hs&&(tt=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===En||w===Li?tt=i.DEPTH_COMPONENT24:w===hn?tt=i.DEPTH_COMPONENT32F:w===hs&&(tt=i.DEPTH_COMPONENT16),tt}function b(N,w){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==ze&&N.minFilter!==He?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function T(N){const w=new WeakRef(N);n.get(N).__ref=w,m.add(w),_.register(N,w,w)}function R(N){const w=n.get(N).__ref;w!==void 0&&(m.delete(w),_.unregister(w))}function C(N){z(N.target)}function L(N){P(N.target)}function z(N){N.removeEventListener("dispose",C),R(N),H(N),N.isVideoTexture&&h.delete(N),N.isHTMLTexture&&d.delete(N)}function P(N){N.removeEventListener("dispose",L),R(N),q(N)}function B(){for(const N of m){const w=N.deref();w!==void 0&&(w.isRenderTarget===!0?P(w):z(w))}m.clear(),d.clear()}function H(N){const w=n.get(N);if(w.__webglInit===void 0)return;const tt=N.source,mt=u.get(tt);if(mt){const ht=mt[w.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&G(N),Object.keys(mt).length===0&&u.delete(tt)}n.remove(N)}function G(N){const w=n.get(N);i.deleteTexture(w.__webglTexture);const tt=N.source,mt=u.get(tt);delete mt[w.__cacheKey],a.memory.textures--}function q(N){const w=n.get(N);w.__depthDisposeCallback&&w.__depthDisposeCallback();const tt=N.depthTexture;if(tt&&tt.renderTarget===N&&z(tt),N.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(w.__webglFramebuffer[ht]))for(let _t=0;_t<w.__webglFramebuffer[ht].length;_t++)i.deleteFramebuffer(w.__webglFramebuffer[ht][_t]);else i.deleteFramebuffer(w.__webglFramebuffer[ht]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ht])}else{if(Array.isArray(w.__webglFramebuffer))for(let ht=0;ht<w.__webglFramebuffer.length;ht++)i.deleteFramebuffer(w.__webglFramebuffer[ht]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ht=0;ht<w.__webglColorRenderbuffer.length;ht++)w.__webglColorRenderbuffer[ht]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ht]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const mt=N.textures;for(let ht=0,_t=mt.length;ht<_t;ht++){const I=n.get(mt[ht]);I.__webglTexture&&(i.deleteTexture(I.__webglTexture),a.memory.textures--),n.remove(mt[ht])}n.remove(N)}let X=0;function O(){X=0}function k(){return X}function V(N){X=N}function pt(){const N=X;return N>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,N}function Y(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.mipmapsAutoUpdate),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function ct(N,w){const tt=n.get(N);if(N.isVideoTexture&&Se(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&tt.__version!==N.version){const mt=N.image;if(mt===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(tt,N,w);return}}else N.isExternalTexture&&(tt.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+w)}function ut(N,w){const tt=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){ee(tt,N,w);return}else N.isExternalTexture&&(tt.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+w)}function at(N,w){const tt=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){ee(tt,N,w);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+w)}function xt(N,w){const tt=n.get(N);if(N.version>0&&tt.__version!==N.version){At(tt,N,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+w)}const Ct={[Zs]:i.REPEAT,[cn]:i.CLAMP_TO_EDGE,[Ea]:i.MIRRORED_REPEAT},$t={[ze]:i.NEAREST,[Uf]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[He]:i.LINEAR,[wa]:i.LINEAR_MIPMAP_NEAREST,[bn]:i.LINEAR_MIPMAP_LINEAR},st={[Bf]:i.NEVER,[tc]:i.ALWAYS,[kf]:i.LESS,[Ql]:i.LEQUAL,[Gf]:i.EQUAL,[jl]:i.GEQUAL,[Hf]:i.GREATER,[Vf]:i.NOTEQUAL};function dt(N,w){if(w.type===hn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===He||w.magFilter===wa||w.magFilter===Js||w.magFilter===bn||w.minFilter===He||w.minFilter===wa||w.minFilter===Js||w.minFilter===bn)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Ct[w.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Ct[w.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Ct[w.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,$t[w.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,$t[w.minFilter]),w.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,st[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ze||w.minFilter!==Js&&w.minFilter!==bn||w.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Tt(N,w){let tt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",C),T(w));const mt=w.source;let ht=u.get(mt);ht===void 0&&(ht={},u.set(mt,ht));const _t=Y(w);if(_t!==N.__cacheKey){ht[_t]===void 0&&(ht[_t]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,tt=!0),ht[_t].usedTimes++;const I=ht[N.__cacheKey];I!==void 0&&(ht[N.__cacheKey].usedTimes--,I.usedTimes===0&&G(w)),N.__cacheKey=_t,N.__webglTexture=ht[_t].texture}return tt}function Bt(N,w,tt){return Math.floor(Math.floor(N/tt)/w)}function Ut(N,w,tt,mt){const _t=N.updateRanges;if(_t.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,tt,mt,w.data);else{_t.sort((D,j)=>D.start-j.start);let I=0;for(let D=1;D<_t.length;D++){const j=_t[I],J=_t[D],ot=j.start+j.count,lt=Bt(J.start,w.width,4),ft=Bt(j.start,w.width,4);J.start<=ot+1&&lt===ft&&Bt(J.start+J.count-1,w.width,4)===lt?j.count=Math.max(j.count,J.start+J.count-j.start):(++I,_t[I]=J)}_t.length=I+1;const U=e.getParameter(i.UNPACK_ROW_LENGTH),F=e.getParameter(i.UNPACK_SKIP_PIXELS),Z=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let D=0,j=_t.length;D<j;D++){const J=_t[D],ot=Math.floor(J.start/4),lt=Math.ceil(J.count/4),ft=ot%w.width,wt=Math.floor(ot/w.width),Wt=lt,gt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,wt),e.texSubImage2D(i.TEXTURE_2D,0,ft,wt,Wt,gt,tt,mt,w.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,U),e.pixelStorei(i.UNPACK_SKIP_PIXELS,F),e.pixelStorei(i.UNPACK_SKIP_ROWS,Z)}}function ee(N,w,tt){let mt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(mt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(mt=i.TEXTURE_3D);const ht=Tt(N,w),_t=w.source;e.bindTexture(mt,N.__webglTexture,i.TEXTURE0+tt);const I=n.get(_t);if(_t.version!==I.__version||ht===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const gt=te.getPrimaries(te.workingColorSpace),Ot=w.colorSpace===Nn?null:te.getPrimaries(w.colorSpace),Xt=w.colorSpace===Nn||gt===Ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let F=x(w.image,!1,s.maxTextureSize);F=Ft(w,F);const Z=r.convert(w.format,w.colorSpace),D=r.convert(w.type);let j=E(w.internalFormat,Z,D,w.normalized,w.colorSpace,w.isVideoTexture);dt(mt,w);let J;const ot=w.mipmaps,lt=w.isVideoTexture!==!0,ft=I.__version===void 0||ht===!0,wt=_t.dataReady,Wt=b(w,F);if(w.isDepthTexture)j=v(w.format===ei,w.type),ft&&(lt?e.texStorage2D(i.TEXTURE_2D,1,j,F.width,F.height):e.texImage2D(i.TEXTURE_2D,0,j,F.width,F.height,0,Z,D,null));else if(w.isDataTexture)if(ot.length>0){lt&&ft&&e.texStorage2D(i.TEXTURE_2D,Wt,j,ot[0].width,ot[0].height);for(let gt=0,Ot=ot.length;gt<Ot;gt++)J=ot[gt],lt?wt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,J.width,J.height,Z,D,J.data):e.texImage2D(i.TEXTURE_2D,gt,j,J.width,J.height,0,Z,D,J.data);w.generateMipmaps=!1}else lt?(ft&&e.texStorage2D(i.TEXTURE_2D,Wt,j,F.width,F.height),wt&&Ut(w,F,Z,D)):e.texImage2D(i.TEXTURE_2D,0,j,F.width,F.height,0,Z,D,F.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){lt&&ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,j,ot[0].width,ot[0].height,F.depth);for(let gt=0,Ot=ot.length;gt<Ot;gt++)if(J=ot[gt],w.format!==fn)if(Z!==null)if(lt){if(wt)if(w.layerUpdates.size>0){const Xt=ih(J.width,J.height,w.format,w.type);for(const bt of w.layerUpdates){const fe=J.data.subarray(bt*Xt/J.data.BYTES_PER_ELEMENT,(bt+1)*Xt/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,bt,J.width,J.height,1,Z,fe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,J.width,J.height,F.depth,Z,J.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,j,J.width,J.height,F.depth,0,J.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?wt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,J.width,J.height,F.depth,Z,D,J.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,j,J.width,J.height,F.depth,0,Z,D,J.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{lt&&ft&&e.texStorage2D(i.TEXTURE_2D,Wt,j,ot[0].width,ot[0].height);for(let gt=0,Ot=ot.length;gt<Ot;gt++)J=ot[gt],w.format!==fn?Z!==null?lt?wt&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,J.width,J.height,Z,J.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,j,J.width,J.height,0,J.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?wt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,J.width,J.height,Z,D,J.data):e.texImage2D(i.TEXTURE_2D,gt,j,J.width,J.height,0,Z,D,J.data)}else if(w.isDataArrayTexture)if(lt){if(ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,j,F.width,F.height,F.depth),wt)if(w.layerUpdates.size>0){const gt=ih(F.width,F.height,w.format,w.type);for(const Ot of w.layerUpdates){const Xt=F.data.subarray(Ot*gt/F.data.BYTES_PER_ELEMENT,(Ot+1)*gt/F.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ot,F.width,F.height,1,Z,D,Xt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,Z,D,F.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,j,F.width,F.height,F.depth,0,Z,D,F.data);else if(w.isData3DTexture)lt?(ft&&e.texStorage3D(i.TEXTURE_3D,Wt,j,F.width,F.height,F.depth),wt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,Z,D,F.data)):e.texImage3D(i.TEXTURE_3D,0,j,F.width,F.height,F.depth,0,Z,D,F.data);else if(w.isFramebufferTexture){if(ft)if(lt)e.texStorage2D(i.TEXTURE_2D,Wt,j,F.width,F.height);else{let gt=F.width,Ot=F.height;for(let Xt=0;Xt<Wt;Xt++)e.texImage2D(i.TEXTURE_2D,Xt,j,gt,Ot,0,Z,D,null),gt>>=1,Ot>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){const gt=i.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),F.parentNode!==gt){gt.appendChild(F),d.add(w),gt.onpaint=Ot=>{const Xt=Ot.changedElements;for(const bt of d)Xt.includes(bt.image)&&(bt.needsUpdate=!0)},gt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,F);else{const Xt=i.RGBA,bt=i.RGBA,fe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Xt,bt,fe,F)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ot.length>0){if(lt&&ft){const gt=kt(ot[0]);e.texStorage2D(i.TEXTURE_2D,Wt,j,gt.width,gt.height)}for(let gt=0,Ot=ot.length;gt<Ot;gt++)J=ot[gt],lt?wt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Z,D,J):e.texImage2D(i.TEXTURE_2D,gt,j,Z,D,J);w.generateMipmaps=!1}else if(lt){if(ft){const gt=kt(F);e.texStorage2D(i.TEXTURE_2D,Wt,j,gt.width,gt.height)}wt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Z,D,F)}else e.texImage2D(i.TEXTURE_2D,0,j,Z,D,F);M(w)&&w.mipmapsAutoUpdate===!0&&S(mt),I.__version=_t.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function At(N,w,tt){if(w.image.length!==6)return;const mt=Tt(N,w),ht=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+tt);const _t=n.get(ht);if(ht.version!==_t.__version||mt===!0){e.activeTexture(i.TEXTURE0+tt);const I=te.getPrimaries(te.workingColorSpace),U=w.colorSpace===Nn?null:te.getPrimaries(w.colorSpace),F=w.colorSpace===Nn||I===U?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,F);const Z=w.isCompressedTexture||w.image[0].isCompressedTexture,D=w.image[0]&&w.image[0].isDataTexture,j=[];for(let bt=0;bt<6;bt++)!Z&&!D?j[bt]=x(w.image[bt],!0,s.maxCubemapSize):j[bt]=D?w.image[bt].image:w.image[bt],j[bt]=Ft(w,j[bt]);const J=j[0],ot=r.convert(w.format,w.colorSpace),lt=r.convert(w.type);let ft=E(w.internalFormat,ot,lt,w.normalized,w.colorSpace);const wt=w.isVideoTexture!==!0,Wt=_t.__version===void 0||mt===!0,gt=ht.dataReady;let Ot=b(w,J);dt(i.TEXTURE_CUBE_MAP,w);let Xt;if(w.isDepthTexture){if(ft=v(w.format===ei,w.type),Wt)if(wt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ft,J.width,J.height);else for(let bt=0;bt<6;bt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ft,J.width,J.height,0,ot,lt,null)}else if(Z){wt&&Wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ot,ft,J.width,J.height);for(let bt=0;bt<6;bt++){Xt=j[bt].mipmaps;for(let fe=0;fe<Xt.length;fe++){const Fe=Xt[fe];w.format!==fn?ot!==null?wt?gt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,fe,0,0,Fe.width,Fe.height,ot,Fe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,fe,ft,Fe.width,Fe.height,0,Fe.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,fe,0,0,Fe.width,Fe.height,ot,lt,Fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,fe,ft,Fe.width,Fe.height,0,ot,lt,Fe.data)}}}else{if(Xt=w.mipmaps,wt&&Wt){Xt.length>0&&Ot++;const bt=kt(j[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ot,ft,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(D){wt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,j[bt].width,j[bt].height,ot,lt,j[bt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ft,j[bt].width,j[bt].height,0,ot,lt,j[bt].data);for(let fe=0;fe<Xt.length;fe++){const fi=Xt[fe].image[bt].image;wt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,fe+1,0,0,fi.width,fi.height,ot,lt,fi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,fe+1,ft,fi.width,fi.height,0,ot,lt,fi.data)}}else{wt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,ot,lt,j[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ft,ot,lt,j[bt]);for(let fe=0;fe<Xt.length;fe++){const Fe=Xt[fe];wt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,fe+1,0,0,ot,lt,Fe.image[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,fe+1,ft,ot,lt,Fe.image[bt])}}}M(w)&&w.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),_t.__version=ht.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function Yt(N,w,tt,mt,ht,_t){const I=r.convert(tt.format,tt.colorSpace),U=r.convert(tt.type),F=E(tt.internalFormat,I,U,tt.normalized,tt.colorSpace),Z=n.get(w),D=n.get(tt);if(D.__renderTarget=w,!Z.__hasExternalTextures){const j=Math.max(1,w.width>>_t),J=Math.max(1,w.height>>_t);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,_t,F,j,J,w.depth,0,I,U,null):e.texImage2D(ht,_t,F,j,J,0,I,U,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),vt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,ht,D.__webglTexture,0,ue(w)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,mt,ht,D.__webglTexture,_t),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(N,w,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,N),w.depthBuffer){const mt=w.depthTexture,ht=mt&&mt.isDepthTexture?mt.type:null,_t=v(w.stencilBuffer,ht),I=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;vt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(w),_t,w.width,w.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(w),_t,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,_t,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,I,i.RENDERBUFFER,N)}else{const mt=w.textures;for(let ht=0;ht<mt.length;ht++){const _t=mt[ht],I=r.convert(_t.format,_t.colorSpace),U=r.convert(_t.type),F=E(_t.internalFormat,I,U,_t.normalized,_t.colorSpace);vt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(w),F,w.width,w.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(w),F,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,F,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(N,w,tt){const mt=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ht=n.get(w.depthTexture);ht.__renderTarget=w;const _t=mt?w.depthTexture.image[0]:w.depthTexture.image;(!ht.__webglTexture||_t.width!==w.width||_t.height!==w.height)&&(_t.width=w.width,_t.height=w.height,w.depthTexture.needsUpdate=!0),mt?xt(w.depthTexture,0):ct(w.depthTexture,0);const I=ht.__webglTexture,U=ue(w),F=mt?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,Z=w.depthTexture.format===ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===ti)vt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,F,I,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,Z,F,I,0);else if(w.depthTexture.format===ei)vt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,F,I,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,Z,F,I,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ee(N){const w=n.get(N),tt=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){const mt=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),mt){const ht=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,mt.removeEventListener("dispose",ht)};mt.addEventListener("dispose",ht),w.__depthDisposeCallback=ht}w.__boundDepthTexture=mt}if(N.depthTexture&&!w.__autoAllocateDepthBuffer)if(tt)for(let mt=0;mt<6;mt++)de(w.__webglFramebuffer[mt],N,mt);else N.texture.mipmaps.length>0?de(w.__webglFramebuffer[0],N,0):de(w.__webglFramebuffer,N,0);else if(tt){w.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[mt]),w.__webglDepthbuffer[mt]===void 0)w.__webglDepthbuffer[mt]=i.createRenderbuffer(),ce(w.__webglDepthbuffer[mt],N,!1);else{const ht=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=w.__webglDepthbuffer[mt];i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,_t)}}else if(N.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ce(w.__webglDepthbuffer,N,!1);else{const ht=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,_t)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(N,w,tt){const mt=n.get(N);w!==void 0&&Yt(mt.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&Ee(N)}function ke(N){const w=N.texture,tt=n.get(N),mt=n.get(w);N.addEventListener("dispose",L),T(N);const ht=N.textures,_t=N.isWebGLCubeRenderTarget===!0,I=ht.length>1;if(I||(mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture()),mt.__version=w.version,a.memory.textures++),_t){tt.__webglFramebuffer=[];for(let U=0;U<6;U++)if(w.mipmaps.length>0){tt.__webglFramebuffer[U]=[];for(let F=0;F<w.mipmaps.length;F++)tt.__webglFramebuffer[U][F]=i.createFramebuffer()}else tt.__webglFramebuffer[U]=i.createFramebuffer()}else{if(w.mipmaps.length>0){tt.__webglFramebuffer=[];for(let U=0;U<w.mipmaps.length;U++)tt.__webglFramebuffer[U]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(I)for(let U=0,F=ht.length;U<F;U++){const Z=n.get(ht[U]);Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture(),a.memory.textures++)}if(N.samples>0&&vt(N)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let U=0;U<ht.length;U++){const F=ht[U];tt.__webglColorRenderbuffer[U]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[U]);const Z=r.convert(F.format,F.colorSpace),D=r.convert(F.type),j=E(F.internalFormat,Z,D,F.normalized,F.colorSpace,N.isXRRenderTarget===!0),J=ue(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,j,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.RENDERBUFFER,tt.__webglColorRenderbuffer[U])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(tt.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_t){e.bindTexture(i.TEXTURE_CUBE_MAP,mt.__webglTexture),dt(i.TEXTURE_CUBE_MAP,w);for(let U=0;U<6;U++)if(w.mipmaps.length>0)for(let F=0;F<w.mipmaps.length;F++)Yt(tt.__webglFramebuffer[U][F],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+U,F);else Yt(tt.__webglFramebuffer[U],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);M(w)?S(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(I){for(let U=0,F=ht.length;U<F;U++){const Z=ht[U],D=n.get(Z);let j=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(j=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,D.__webglTexture),dt(j,Z),Yt(tt.__webglFramebuffer,N,Z,i.COLOR_ATTACHMENT0+U,j,0),M(Z)&&S(j)}e.unbindTexture()}else{let U=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(U=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(U,mt.__webglTexture),dt(U,w),w.mipmaps.length>0)for(let F=0;F<w.mipmaps.length;F++)Yt(tt.__webglFramebuffer[F],N,w,i.COLOR_ATTACHMENT0,U,F);else Yt(tt.__webglFramebuffer,N,w,i.COLOR_ATTACHMENT0,U,0);M(w)?S(U):w.mipmaps.length>0&&i.texParameteri(U,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}N.depthBuffer&&Ee(N)}function K(N){const w=N.textures;for(let tt=0,mt=w.length;tt<mt;tt++){const ht=w[tt];if(M(ht)&&ht.mipmapsAutoUpdate===!0){const _t=y(N),I=n.get(ht).__webglTexture;e.bindTexture(_t,I),S(_t),e.unbindTexture()}}}const Ye=[];function ge(N){if(N.samples>0){if(vt(N)===!1){const w=N.textures,tt=N.width,mt=N.height;let ht=i.COLOR_BUFFER_BIT;const _t=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=n.get(N),U=w.length>1;if(U)for(let Z=0;Z<w.length;Z++)e.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,I.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,I.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,I.__webglFramebuffer);for(let Z=0;Z<w.length;Z++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),U){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,I.__webglColorRenderbuffer[Z]);const D=n.get(w[Z]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,tt,mt,0,0,tt,mt,ht,i.NEAREST),l===!0&&(Ye.length=0,Ye.push(i.COLOR_ATTACHMENT0+Z),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&Ye.push(_t),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ye))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),U)for(let Z=0;Z<w.length;Z++){e.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,I.__webglColorRenderbuffer[Z]);const D=n.get(w[Z]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,I.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){const w=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ue(N){return Math.min(s.maxSamples,N.samples)}function vt(N){const w=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Se(N){const w=a.render.frame;h.get(N)!==w&&(h.set(N,w),N.update())}function Ft(N,w){const tt=N.colorSpace,mt=N.format,ht=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||tt!==rr&&tt!==Nn&&(te.getTransfer(tt)===he?(mt!==fn||ht!==je)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",tt)),w}function kt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=pt,this.resetTextureUnits=O,this.getTextureUnits=k,this.setTextureUnits=V,this.setTexture2D=ct,this.setTexture2DArray=ut,this.setTexture3D=at,this.setTextureCube=xt,this.rebindTextures=qe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Yt,this.useMultisampledRTT=vt,this.dispose=B}function Mx(i,t){function e(n,s=Nn){let r;const a=te.getTransfer(s);if(n===je)return i.UNSIGNED_BYTE;if(n===Aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$l)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ql)return i.BYTE;if(n===Yl)return i.SHORT;if(n===hs)return i.UNSIGNED_SHORT;if(n===Ta)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===Zl)return i.ALPHA;if(n===Jl)return i.RGB;if(n===fn)return i.RGBA;if(n===ti)return i.DEPTH_COMPONENT;if(n===ei)return i.DEPTH_STENCIL;if(n===Ca)return i.RED;if(n===Pa)return i.RED_INTEGER;if(n===ni)return i.RG;if(n===La)return i.RG_INTEGER;if(n===Da)return i.RGBA_INTEGER;if(n===Qs||n===js||n===tr||n===er)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ia||n===Na||n===Ua||n===Fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===za||n===Ba||n===ka||n===Ga||n===nr||n===Ha)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oa||n===za)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ka)return r.COMPRESSED_R11_EAC;if(n===Ga)return r.COMPRESSED_SIGNED_R11_EAC;if(n===nr)return r.COMPRESSED_RG11_EAC;if(n===Ha)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Ka||n===Za||n===Ja||n===Qa||n===ja||n===to||n===eo||n===no)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Va)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Za)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ja)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===to)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===no)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===io||n===so||n===ro)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===io)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===so)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ro)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ao||n===oo||n===ir||n===lo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ir)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yx=`
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

}`;class bx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Nc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Wn({vertexShader:Sx,fragmentShader:yx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ex extends ii{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,m=null;const _=typeof XRWebGLBinding<"u",p=new bx,g={},x=e.getContextAttributes();let M=null,S=null;const y=[],E=[],v=new zt;let b=null,T=null;const R=new _n;R.viewport=new ve;const C=new _n;C.viewport=new ve;const L=[R,C],z=new pp;let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ct=y[Y];return ct===void 0&&(ct=new So,y[Y]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Y){let ct=y[Y];return ct===void 0&&(ct=new So,y[Y]=ct),ct.getGripSpace()},this.getHand=function(Y){let ct=y[Y];return ct===void 0&&(ct=new So,y[Y]=ct),ct.getHandSpace()};function H(Y){const ct=E.indexOf(Y.inputSource);if(ct===-1)return;const ut=y[ct];ut!==void 0&&(ut.update(Y.inputSource,Y.frame,c||a),ut.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",q);for(let Y=0;Y<y.length;Y++){const ct=E[Y];ct!==null&&(E[Y]=null,y[Y].disconnect(ct))}P=null,B=null,p.reset();for(const Y in g)delete g[Y];if(t.setRenderTarget(M),u=null,f=null,d=null,s=null,S=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(v.width,v.height,!1),T!==null){const Y=T.camera;Y.fov=T.fov,Y.zoom=T.zoom,Y.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",G),s.addEventListener("inputsourceschange",q),x.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(v),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,at=null,xt=null;x.depth&&(xt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=x.stencil?ei:ti,at=x.stencil?Li:En);const Ct={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ct),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new wn(f.textureWidth,f.textureHeight,{format:fn,type:je,depthTexture:new qi(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const ut={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new wn(u.framebufferWidth,u.framebufferHeight,{format:fn,type:je,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),pt.setContext(s),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function q(Y){for(let ct=0;ct<Y.removed.length;ct++){const ut=Y.removed[ct],at=E.indexOf(ut);at>=0&&(E[at]=null,y[at].disconnect(ut))}for(let ct=0;ct<Y.added.length;ct++){const ut=Y.added[ct];let at=E.indexOf(ut);if(at===-1){for(let Ct=0;Ct<y.length;Ct++)if(Ct>=E.length){E.push(ut),at=Ct;break}else if(E[Ct]===null){E[Ct]=ut,at=Ct;break}if(at===-1)break}const xt=y[at];xt&&xt.connect(ut)}}function X(Y,ct){ct===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ct.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ct=Y.near,ut=Y.far;p.texture!==null&&(p.depthNear>0&&(ct=p.depthNear),p.depthFar>0&&(ut=p.depthFar)),z.near=C.near=R.near=ct,z.far=C.far=R.far=ut,(P!==z.near||B!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),P=z.near,B=z.far),z.layers.mask=Y.layers.mask|6,R.layers.mask=z.layers.mask&-5,C.layers.mask=z.layers.mask&-3;const at=Y.parent,xt=z.cameras;X(z,at);for(let Ct=0;Ct<xt.length;Ct++)X(xt[Ct],at);z.projectionMatrix.copy(R.projectionMatrix),z.projectionMatrixInverse.copy(R.projectionMatrixInverse),T===null&&Y.isPerspectiveCamera&&(T={camera:Y,fov:Y.fov,zoom:Y.zoom}),O(Y,z,at)};function O(Y,ct,ut){ut===null?Y.matrix.copy(ct.matrixWorld):(Y.matrix.copy(ut.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ct.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ct.projectionMatrix),Y.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ps*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(Y){return g[Y]};let k=null;function V(Y,ct){if(h=ct.getViewerPose(c||a),m=ct,h!==null){const ut=h.views;u!==null&&(t.setRenderTargetFramebuffer(S,u.framebuffer),t.setRenderTarget(S));let at=!1;ut.length!==z.cameras.length&&(z.cameras.length=0,at=!0);for(let st=0;st<ut.length;st++){const dt=ut[st];let Tt=null;if(u!==null)Tt=u.getViewport(dt);else{const Ut=d.getViewSubImage(f,dt);Tt=Ut.viewport,st===0&&(t.setRenderTargetTextures(S,Ut.colorTexture,Ut.depthStencilTexture),t.setRenderTarget(S))}let Bt=L[st];Bt===void 0&&(Bt=new _n,Bt.layers.enable(st),Bt.viewport=new ve,L[st]=Bt),Bt.matrix.fromArray(dt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(dt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),st===0&&(z.matrix.copy(Bt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),at===!0&&z.cameras.push(Bt)}const xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const st=d.getDepthInformation(ut[0]);st&&st.isValid&&st.texture&&p.init(st,s.renderState)}if(xt&&xt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let st=0;st<ut.length;st++){const dt=ut[st].camera;if(dt){let Tt=g[dt];Tt||(Tt=new Nc,g[dt]=Tt);const Bt=d.getCameraImage(dt);Tt.sourceTexture=Bt}}}}for(let ut=0;ut<y.length;ut++){const at=E[ut],xt=y[ut];at!==null&&xt!==void 0&&xt.update(at,ct,c||a)}k&&k(Y,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),m=null}const pt=new sh;pt.setAnimationLoop(V),this.setAnimationLoop=function(Y){k=Y},this.dispose=function(){}}}const wx=new ne,Uh=new Vt;Uh.set(-1,0,0,0,1,0,0,0,1);function Tx(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Vc(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,x,M,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&u(p,g,S)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,x,M):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ze&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ze&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const x=t.get(g),M=x.envMap,S=x.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(wx.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Uh),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,x,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=M*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function u(p,g,x){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ze&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const x=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ax(i,t,e,n){let s={},r={};function a(x,M){const S=M.program;n.uniformBlockBinding(x,S,s[x.id])}function o(x,M){let S=s[x.id];S===void 0&&(m(x),S=l(x),s[x.id]=S,x.addEventListener("dispose",p));const y=M.program;n.updateUBOMapping(x,y);const E=t.render.frame;r[x.id]!==E&&(c(x),r[x.id]=E)}function l(x){const M=i.createBuffer(),S=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,S,y),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(x){const M=s[x.id],S=x.uniforms,y=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,v=S.length;E<v;E++){const b=S[E];if(Array.isArray(b))for(let T=0,R=b.length;T<R;T++)h(b[T],E,T,y);else h(b,E,0,y)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,M,S,y){if(f(x,M,S,y)===!0){const E=x.__offset,v=x.value;if(Array.isArray(v)){let b=0;for(let T=0;T<v.length;T++){const R=v[T],C=_(R,!0);d(R,x.__data,b),b+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,x.__data)}}function d(x,M,S){typeof x=="number"||typeof x=="boolean"?M[S]=x:x.isMatrix3?(M[S]=x.elements[0],M[S+1]=x.elements[1],M[S+2]=x.elements[2],M[S+3]=0,M[S+4]=x.elements[3],M[S+5]=x.elements[4],M[S+6]=x.elements[5],M[S+7]=0,M[S+8]=x.elements[6],M[S+9]=x.elements[7],M[S+10]=x.elements[8],M[S+11]=0):ArrayBuffer.isView(x)?M.set(x.subarray(0,M.length-S),S):x.toArray(M,S)}function f(x,M,S,y){const E=x.value,v=M+"_"+S;if(Array.isArray(E)){y[v]===void 0&&(y[v]=[]);const b=y[v];let T=!1;for(let R=0;R<E.length;R++)u(E[R],b,R)===!0&&(T=!0);return T}return u(E,y,v)}function u(x,M,S){if(M[S]===void 0)return typeof x=="number"||typeof x=="boolean"?M[S]=x:ArrayBuffer.isView(x)?M[S]=x.slice():M[S]=x.clone(),!0;{const y=M[S];if(typeof x=="number"||typeof x=="boolean"){if(y!==x)return M[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(y.equals(x)===!1)return y.copy(x),!0}}return!1}function m(x){const M=x.uniforms;let S=0;const y=16;for(let v=0,b=M.length;v<b;v++){const T=Array.isArray(M[v])?M[v]:[M[v]];for(let R=0,C=T.length;R<C;R++){const L=T[R],z=Array.isArray(L.value)?L.value:[L.value],P=Array.isArray(M[v])||Array.isArray(L.value);let B=S;for(let G=0,q=z.length;G<q;G++){const X=z[G],O=_(X,P),k=S%y,V=k%O.boundary,pt=k+V;S+=V,pt!==0&&y-pt<O.storage&&(S+=y-pt),G===0&&(B=S),S+=O.storage}const H=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new H((S-B)/Float32Array.BYTES_PER_ELEMENT),L.__offset=B}}const E=S%y;return E>0&&(S+=y-E),x.__size=S,x.__cache={},this}function _(x,M){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=16,S.storage=48):x.isMatrix4?(S.boundary=16,S.storage=64):x.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",x),M===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(x){const M=x.target;M.removeEventListener("dispose",p),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(const x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:g}}const Rx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pn=null;function Cx(){return Pn===null&&(Pn=new Ss(Rx,16,16,ni,un),Pn.name="DFG_LUT",Pn.minFilter=He,Pn.magFilter=He,Pn.wrapS=cn,Pn.wrapT=cn,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}class Px{constructor(t={}){const{canvas:e=qf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=je}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=u,p=new Set([Da,La,Pa]),g=new Set([je,En,hs,Li,Aa,Ra]),x=new Uint32Array(4),M=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let y=null,E=null;const v=[],b=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let C=!1,L=null,z=null,P=null,B=null;this._outputColorSpace=we;let H=0,G=0,q=null,X=-1,O=null;const k=new ve,V=new ve;let pt=null;const Y=new Rt(0);let ct=0,ut=e.width,at=e.height,xt=1,Ct=null,$t=null;const st=new ve(0,0,ut,at),dt=new ve(0,0,ut,at);let Tt=!1;const Bt=new Es,Ut=new Oo;let ee=!1,At=!1;const Yt=new ne,ce=new Q,de=new ve,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function ke(){return q===null?xt:1}let K=n;function Ye(A,W){return e.getContext(A,W)}let ge,ue,vt,Se,Ft,kt,N,w,tt,mt,ht,_t,I,U,F,Z,D,j,J,ot,lt,ft,wt;try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ua}`),e.addEventListener("webglcontextlost",Ot,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),K===null){const W="webgl2";if(K=Ye(W,A),K===null)throw Ye(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(A){throw e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),re("WebGLRenderer: "+A.message),A}function Wt(){ge=new Im(K),ge.init(),lt=new Mx(K,ge),ue=new ym(K,ge,t,lt),vt=new _x(K,ge),ue.reversedDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),z=K.createFramebuffer(),P=K.createFramebuffer(),B=K.createFramebuffer(),Se=new Fm(K),Ft=new sx,kt=new vx(K,ge,vt,Ft,ue,lt,Se),N=new Dm(R),w=new _p(K),ft=new Mm(K,w),tt=new Nm(K,w,Se,ft),mt=new zm(K,tt,w,ft,Se),j=new Om(K,ue,kt),F=new bm(Ft),ht=new ix(R,N,ge,ue,ft,F),_t=new Tx(R,Ft),I=new ax,U=new fx(ge),D=new vm(R,N,vt,mt,m,l),Z=new xx(R,mt,ue),wt=new Ax(K,Se,ue,vt),J=new Sm(K,ge,Se),ot=new Um(K,ge,Se),Se.programs=ht.programs,R.capabilities=ue,R.extensions=ge,R.properties=Ft,R.renderLists=I,R.shadowMap=Z,R.state=vt,R.info=Se}_!==je&&(T=new km(_,e.width,e.height,o,s,r));const gt=new Ex(R,K);this.xr=gt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const A=ge.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ge.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(A){A!==void 0&&(xt=A,this.setSize(ut,at,!1))},this.getSize=function(A){return A.set(ut,at)},this.setSize=function(A,W,rt=!0){if(gt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=A,at=W,e.width=Math.floor(A*xt),e.height=Math.floor(W*xt),rt===!0&&(e.style.width=A+"px",e.style.height=W+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(ut*xt,at*xt).floor()},this.setDrawingBufferSize=function(A,W,rt){ut=A,at=W,xt=rt,e.width=Math.floor(A*rt),e.height=Math.floor(W*rt),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(_===je){re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(st)},this.setViewport=function(A,W,rt,et){A.isVector4?st.set(A.x,A.y,A.z,A.w):st.set(A,W,rt,et),vt.viewport(k.copy(st).multiplyScalar(ke()).round())},this.getScissor=function(A){return A.copy(dt)},this.setScissor=function(A,W,rt,et){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,W,rt,et),vt.scissor(V.copy(dt).multiplyScalar(ke()).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(A){vt.setScissorTest(Tt=A)},this.setOpaqueSort=function(A){Ct=A},this.setTransparentSort=function(A){$t=A},this.getClearColor=function(A){return A.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,rt=!0){let et=0;if(A){let nt=!1;if(q!==null){const St=q.texture.format;nt=p.has(St)}if(nt){const St=q.texture.type,Pt=g.has(St),Mt=D.getClearColor(),Et=D.getClearAlpha(),Nt=Mt.r,qt=Mt.g,Qt=Mt.b;Pt?(x[0]=Nt,x[1]=qt,x[2]=Qt,x[3]=Et,K.clearBufferuiv(K.COLOR,0,x)):(M[0]=Nt,M[1]=qt,M[2]=Qt,M[3]=Et,K.clearBufferiv(K.COLOR,0,M))}else et|=K.COLOR_BUFFER_BIT}W&&(et|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(et|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&K.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),D.dispose(),I.dispose(),U.dispose(),kt.dispose(),Ft.dispose(),N.dispose(),mt.dispose(),tt.dispose(),ft.dispose(),wt.dispose(),ht.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",tf),gt.removeEventListener("sessionend",ef),Ei.stop()};function Ot(A){A.preventDefault(),ic("WebGLRenderer: Context Lost."),C=!0}function Xt(){ic("WebGLRenderer: Context Restored."),C=!1;const A=Se.autoReset,W=Z.enabled,rt=Z.autoUpdate,et=Z.needsUpdate,nt=Z.type;Wt(),Se.autoReset=A,Z.enabled=W,Z.autoUpdate=rt,Z.needsUpdate=et,Z.type=nt}function bt(A){re("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function fe(A){const W=A.target;W.removeEventListener("dispose",fe),Fe(W)}function Fe(A){fi(A),Ft.remove(A)}function fi(A){const W=Ft.get(A).programs;W!==void 0&&(W.forEach(function(rt){ht.releaseProgram(rt)}),A.isShaderMaterial&&ht.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,rt,et,nt,St){W===null&&(W=Ee);const Pt=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,Mt=l1(A,W,rt,et,nt);vt.setMaterial(et,Pt);let Et=rt.index,Nt=1;if(et.wireframe===!0){if(Et=tt.getWireframeAttribute(rt),Et===void 0)return;Nt=2}const qt=rt.drawRange,Qt=rt.attributes.position;let Lt=qt.start*Nt,jt=(qt.start+qt.count)*Nt;St!==null&&(Lt=Math.max(Lt,St.start*Nt),jt=Math.min(jt,(St.start+St.count)*Nt)),Et!==null?(Lt=Math.max(Lt,0),jt=Math.min(jt,Et.count)):Qt!=null&&(Lt=Math.max(Lt,0),jt=Math.min(jt,Qt.count));const Ce=jt-Lt;if(Ce<0||Ce===1/0)return;ft.setup(nt,et,Mt,rt,Et);let xe,pe=J;if(Et!==null&&(xe=w.get(Et),pe=ot,pe.setIndex(xe)),nt.isMesh)et.wireframe===!0?(vt.setLineWidth(et.wireframeLinewidth*ke()),pe.setMode(K.LINES)):pe.setMode(K.TRIANGLES);else if(nt.isLine){let $e=et.linewidth;$e===void 0&&($e=1),vt.setLineWidth($e*ke()),nt.isLineSegments?pe.setMode(K.LINES):nt.isLineLoop?pe.setMode(K.LINE_LOOP):pe.setMode(K.LINE_STRIP)}else nt.isPoints?pe.setMode(K.POINTS):nt.isSprite&&pe.setMode(K.TRIANGLES);if(nt.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))pe.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const $e=nt._multiDrawStarts,Dt=nt._multiDrawCounts,Qe=nt._multiDrawCount,le=Et?w.get(Et).bytesPerElement:1,wi=Ft.get(et).currentProgram.getUniforms();for(let Ke=0;Ke<Qe;Ke++)wi.setValue(K,"_gl_DrawID",Ke),pe.render($e[Ke]/le,Dt[Ke])}else if(nt.isInstancedMesh)pe.renderInstances(Lt,Ce,nt.count);else if(rt.isInstancedBufferGeometry){const $e=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Dt=Math.min(rt.instanceCount,$e);pe.renderInstances(Lt,Ce,Dt)}else pe.render(Lt,Ce)};function ju(A,W,rt,et){L!==null&&A.isNodeMaterial&&L.setObject(et,A),ee===!0&&F.setState(A,rt,!1),A.transparent===!0&&A.side===be&&A.forceSinglePass===!1?(A.side=Ze,A.needsUpdate=!0,Ks(A,W,et),A.side=jn,A.needsUpdate=!0,Ks(A,W,et),A.side=be):Ks(A,W,et)}this.compile=function(A,W,rt=null){rt===null&&(rt=A),L!==null&&L.renderStart(A,W,rt),E=U.get(rt),E.init(W),b.push(E),rt.traverseVisible(function(nt){nt.isLight&&nt.layers.test(W.layers)&&(E.pushLight(nt),nt.castShadow&&E.pushShadow(nt))}),A!==rt&&A.traverseVisible(function(nt){nt.isLight&&nt.layers.test(W.layers)&&(E.pushLight(nt),nt.castShadow&&E.pushShadow(nt))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),At=this.localClippingEnabled,ee=F.init(this.clippingPlanes,At),ee===!0&&F.setGlobalState(this.clippingPlanes,W),L!==null&&Z.render(E.state.shadowsArray,rt,W);const et=new Set;return A.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const St=nt.material;if(St)if(Array.isArray(St))for(let Pt=0;Pt<St.length;Pt++){const Mt=St[Pt];ju(Mt,rt,W,nt),et.add(Mt)}else ju(St,rt,W,nt),et.add(St)}),E=b.pop(),L!==null&&L.renderEnd(),et},this.compileAsync=function(A,W,rt=null){const et=this.compile(A,W,rt);return new Promise(nt=>{function St(){if(et.forEach(function(Pt){const Et=Ft.get(Pt).currentProgram;(Et===void 0||Et.isReady())&&et.delete(Pt)}),et.size===0){nt(A);return}setTimeout(St,10)}ge.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Dl=null;function a1(A){Dl&&Dl(A)}function tf(){Ei.stop()}function ef(){Ei.start()}const Ei=new sh;Ei.setAnimationLoop(a1),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(A){Dl=A,gt.setAnimationLoop(A),A===null?Ei.stop():Ei.start()},gt.addEventListener("sessionstart",tf),gt.addEventListener("sessionend",ef),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L!==null&&L.renderStart(A,W);const rt=gt.enabled===!0&&gt.isPresenting===!0,et=T!==null&&(q===null||rt)&&T.begin(R,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(W),W=gt.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,W,q),E=U.get(A,b.length),E.init(W),E.state.textureUnits=kt.getTextureUnits(),b.push(E),Yt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?Ut.setFromArrayCamera(W):Bt.setFromProjectionMatrix(Yt,dn,W.reversedDepth),At=this.localClippingEnabled,ee=F.init(this.clippingPlanes,At),y=I.get(A,v.length),y.init(),v.push(y),this.info.render.frame++,gt.enabled===!0&&gt.isPresenting===!0){const Pt=R.xr.getDepthSensingMesh();Pt!==null&&Il(Pt,W,-1/0,R.sortObjects)}Il(A,W,0,R.sortObjects),y.finish(),L!==null&&L.updateLights(E.state.lightsArray),R.sortObjects===!0&&y.sort(Ct,$t),qe=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,qe&&D.addToRenderList(y,A),this.info.autoReset===!0&&this.info.reset(),ee===!0&&F.beginShadows();const nt=E.state.shadowsArray;if(Z.render(nt,A,W),ee===!0&&F.endShadows(),(et&&T.hasRenderPass())===!1){const Pt=y.opaque,Mt=y.transmissive;if(E.setupLights(),W.isArrayCamera){const Et=W.cameras;if(Mt.length>0)for(let Nt=0,qt=Et.length;Nt<qt;Nt++){const Qt=Et[Nt];sf(Pt,Mt,A,Qt)}qe&&D.render(A);for(let Nt=0,qt=Et.length;Nt<qt;Nt++){const Qt=Et[Nt];nf(y,A,Qt,Qt.viewport)}}else Mt.length>0&&sf(Pt,Mt,A,W),qe&&D.render(A),nf(y,A,W)}q!==null&&G===0&&(kt.updateMultisampleRenderTarget(q),kt.updateRenderTargetMipmap(q)),et&&T.end(R),A.isScene===!0&&A.onAfterRender(R,A,W),ft.resetDefaultState(),X=-1,O=null,b.pop(),b.length>0?(E=b[b.length-1],kt.setTextureUnits(E.state.textureUnits),ee===!0&&F.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,v.pop(),v.length>0?y=v[v.length-1]:y=null,L!==null&&L.renderEnd()};function Il(A,W,rt,et){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){const Pt=W.isArrayCamera?Ut:Bt;if(!A.frustumCulled||A.intersectsFrustum(Pt)){et&&de.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Yt);const Mt=mt.update(A),Et=A.material;Et.visible&&y.push(A,Mt,Et,rt,de.z,null,W)}}else if(A.isMesh||A.isLine||A.isPoints){const Pt=W.isArrayCamera?Ut:Bt;if(!A.frustumCulled||A.intersectsFrustum(Pt)){const Mt=mt.update(A),Et=A.material;if(et&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),de.copy(A.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),de.copy(Mt.boundingSphere.center)),de.applyMatrix4(A.matrixWorld).applyMatrix4(Yt)),Array.isArray(Et)){const Nt=Mt.groups;for(let qt=0,Qt=Nt.length;qt<Qt;qt++){const Lt=Nt[qt],jt=Et[Lt.materialIndex];jt&&jt.visible&&y.push(A,Mt,jt,rt,de.z,Lt,W)}}else Et.visible&&y.push(A,Mt,Et,rt,de.z,null,W)}}}const St=A.children;for(let Pt=0,Mt=St.length;Pt<Mt;Pt++)Il(St[Pt],W,rt,et)}function nf(A,W,rt,et){const{opaque:nt,transmissive:St,transparent:Pt}=A;E.setupLightsView(rt),ee===!0&&F.setGlobalState(R.clippingPlanes,rt),et&&vt.viewport(k.copy(et)),nt.length>0&&ca(nt,W,rt),St.length>0&&ca(St,W,rt),Pt.length>0&&ca(Pt,W,rt),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function sf(A,W,rt,et){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[et.id]===void 0){const Lt=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[et.id]=new wn(1,1,{generateMipmaps:!0,type:Lt?un:je,minFilter:bn,samples:Math.max(4,ue.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}const St=E.state.transmissionRenderTarget[et.id],Pt=et.viewport||k;St.setSize(Pt.z*R.transmissionResolutionScale,Pt.w*R.transmissionResolutionScale);const Mt=R.getRenderTarget(),Et=R.getActiveCubeFace(),Nt=R.getActiveMipmapLevel();R.setRenderTarget(St),R.getClearColor(Y),ct=R.getClearAlpha(),ct<1&&R.setClearColor(16777215,.5),R.clear(),qe&&D.render(rt);const qt=R.toneMapping;R.toneMapping=In;const Qt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),E.setupLightsView(et),ee===!0&&F.setGlobalState(R.clippingPlanes,et),ca(A,rt,et),kt.updateMultisampleRenderTarget(St),kt.updateRenderTargetMipmap(St),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let jt=0,Ce=W.length;jt<Ce;jt++){const xe=W[jt],{object:pe,geometry:$e,material:Dt,group:Qe}=xe;if(Dt.side===be&&pe.layers.test(et.layers)){const le=Dt.side;Dt.side=Ze,Dt.needsUpdate=!0,rf(pe,rt,et,$e,Dt,Qe),Dt.side=le,Dt.needsUpdate=!0,Lt=!0}}Lt===!0&&(kt.updateMultisampleRenderTarget(St),kt.updateRenderTargetMipmap(St))}R.setRenderTarget(Mt,Et,Nt),R.setClearColor(Y,ct),Qt!==void 0&&(et.viewport=Qt),R.toneMapping=qt}function ca(A,W,rt){const et=W.isScene===!0?W.overrideMaterial:null;for(let nt=0,St=A.length;nt<St;nt++){const Pt=A[nt],{object:Mt,geometry:Et,group:Nt}=Pt;let qt=Pt.material;qt.allowOverride===!0&&et!==null&&(qt=et),Mt.layers.test(rt.layers)&&rf(Mt,W,rt,Et,qt,Nt)}}function rf(A,W,rt,et,nt,St){L!==null&&nt.isNodeMaterial&&L.setObject(A,nt),A.onBeforeRender(R,W,rt,et,nt,St),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),nt.onBeforeRender(R,W,rt,et,A,St),nt.transparent===!0&&nt.side===be&&nt.forceSinglePass===!1?(nt.side=Ze,nt.needsUpdate=!0,R.renderBufferDirect(rt,W,et,nt,A,St),nt.side=jn,nt.needsUpdate=!0,R.renderBufferDirect(rt,W,et,nt,A,St),nt.side=be):R.renderBufferDirect(rt,W,et,nt,A,St),A.onAfterRender(R,W,rt,et,nt,St)}function af(A){let W=0;for(const rt of A)rt.texture!==null&&W++;return W}function Ks(A,W,rt){W.isScene!==!0&&(W=Ee);const et=Ft.get(A),nt=E.state.lights,St=E.state.shadowsArray,Pt=nt.state.version,Mt=ht.getParameters(A,nt.state,St,W,rt,E.state.lightProbeGridArray),Et=ht.getProgramCacheKey(Mt);let Nt=et.programs;et.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,et.fog=W.fog;const qt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;et.envMap=N.get(A.envMap||et.environment,qt),et.envMapRotation=et.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Nt===void 0&&(A.addEventListener("dispose",fe),Nt=new Map,et.programs=Nt,et.programVariants=new Map);let Qt=Nt.get(Et);if(Qt!==void 0){if(et.currentProgram===Qt&&et.lightsStateVersion===Pt)return lf(A,Mt),Qt}else Mt.uniforms=ht.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,rt,Mt),A.onBeforeCompile(Mt,R),Qt=ht.acquireProgram(Mt,Et),Nt.set(Et,Qt),et.uniforms=Mt.uniforms;const Lt=et.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Lt.clippingPlanes=F.uniform),lf(A,Mt),et.needsLights=h1(A),et.lightsStateVersion=Pt,et.needsLights&&(Lt.ambientLightColor.value=nt.state.ambient,Lt.lightProbe.value=nt.state.probe,Lt.sunLights.value=nt.state.sun,Lt.sunLightShadows.value=nt.state.sunShadow,Lt.directionalLights.value=nt.state.directional,Lt.directionalLightShadows.value=nt.state.directionalShadow,Lt.spotLights.value=nt.state.spot,Lt.spotLightShadows.value=nt.state.spotShadow,Lt.rectAreaLights.value=nt.state.rectArea,Lt.ltc_1.value=nt.state.rectAreaLTC1,Lt.ltc_2.value=nt.state.rectAreaLTC2,Lt.pointLights.value=nt.state.point,Lt.pointLightShadows.value=nt.state.pointShadow,Lt.hemisphereLights.value=nt.state.hemi,Lt.sunShadowMatrix.value=nt.state.sunShadowMatrix,Lt.sunShadowCascade.value=nt.state.sunShadowCascade,Lt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Lt.spotLightMatrix.value=nt.state.spotLightMatrix,Lt.spotLightMap.value=nt.state.spotLightMap,Lt.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.numLightProbeGrids=af(E.state.lightProbeGridArray),et.currentProgram=Qt,et.uniformsList=null,Qt}function o1(A,W,rt,et,nt){const St=Ft.get(A),Pt=St.currentProgram.id+","+et+","+nt;let Mt=St.programVariants.get(Pt);return Mt===void 0?(Mt=Ks(A,W,rt),St.programVariants.set(Pt,Mt)):(St.currentProgram=Mt,St.uniformsList=null,St.outputColorSpace=et,St.toneMapping=nt),Mt}function of(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Fr.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function lf(A,W){const rt=Ft.get(A);rt.outputColorSpace=W.outputColorSpace,rt.batching=W.batching,rt.batchingColor=W.batchingColor,rt.instancing=W.instancing,rt.instancingColor=W.instancingColor,rt.instancingMorph=W.instancingMorph,rt.skinning=W.skinning,rt.morphTargets=W.morphTargets,rt.morphNormals=W.morphNormals,rt.morphColors=W.morphColors,rt.morphTargetsCount=W.morphTargetsCount,rt.numClippingPlanes=W.numClippingPlanes,rt.numIntersection=W.numClipIntersection,rt.vertexAlphas=W.vertexAlphas,rt.vertexTangents=W.vertexTangents,rt.toneMapping=W.toneMapping}function l1(A,W,rt,et,nt){W.isScene!==!0&&(W=Ee),kt.resetTextureUnits();const St=W.fog,Pt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?W.environment:null,Mt=q===null?R.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:te.workingColorSpace,Et=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Nt=N.get(et.envMap||Pt,Et),qt=et.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Qt=!!rt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Lt=!!rt.morphAttributes.position,jt=!!rt.morphAttributes.normal,Ce=!!rt.morphAttributes.color;let xe=In;et.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(xe=R.toneMapping);const pe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,$e=pe!==void 0?pe.length:0,Dt=Ft.get(et),Qe=E.state.lights;if(ee===!0&&(At===!0||A!==O)){const ye=A===O&&et.id===X;F.setState(et,A,ye)}let le=!1,wi=!1;et.version===Dt.__version?Dt.needsLights&&Dt.lightsStateVersion!==Qe.state.version||nt.isBatchedMesh&&Dt.batching===!1||!nt.isBatchedMesh&&Dt.batching===!0||nt.isBatchedMesh&&Dt.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&Dt.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&Dt.instancing===!1||!nt.isInstancedMesh&&Dt.instancing===!0||nt.isSkinnedMesh&&Dt.skinning===!1||!nt.isSkinnedMesh&&Dt.skinning===!0||nt.isInstancedMesh&&Dt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Dt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Dt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Dt.instancingMorph===!1&&nt.morphTexture!==null||Dt.envMap!==Nt||et.fog===!0&&Dt.fog!==St||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==F.numPlanes||Dt.numIntersection!==F.numIntersection)||Dt.vertexAlphas!==qt||Dt.vertexTangents!==Qt||Dt.morphTargets!==Lt||Dt.morphNormals!==jt||Dt.morphColors!==Ce||Dt.morphTargetsCount!==$e||Dt.numLightProbeGrids!==af(E.state.lightProbeGridArray)?le=!0:(Dt.outputColorSpace!==Mt||Dt.toneMapping!==xe)&&(wi=!0):(le=!0,Dt.__version=et.version);let Ke=Dt.currentProgram;(le===!0||wi===!0)&&(Ke=wi===!0?o1(et,W,nt,Mt,xe):Ks(et,W,nt),L&&et.isNodeMaterial&&L.onUpdateProgram(et,Ke,Dt));let ha=!1,di=!1,Ti=!1;const se=Ke.getUniforms(),Ge=Dt.uniforms;if(vt.useProgram(Ke.program)&&(ha=!0,di=!0,Ti=!0),et.id!==X&&(X=et.id,di=!0),ha||O!==A){vt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),se.setValue(K,"projectionMatrix",A.projectionMatrix),se.setValue(K,"viewMatrix",A.matrixWorldInverse);const Oe=se.map.cameraPosition;Oe!==void 0&&Oe.setValue(K,ce.setFromMatrixPosition(A.matrixWorld)),ue.logarithmicDepthBuffer&&se.setValue(K,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&se.setValue(K,"isOrthographic",A.isOrthographicCamera===!0),O!==A&&(O=A,di=!0,Ti=!0)}if(Dt.needsLights&&(Qe.state.sunShadowMap.length>0&&se.setValue(K,"sunShadowMap",Qe.state.sunShadowMap,kt),Qe.state.directionalShadowMap.length>0&&se.setValue(K,"directionalShadowMap",Qe.state.directionalShadowMap,kt),Qe.state.spotShadowMap.length>0&&se.setValue(K,"spotShadowMap",Qe.state.spotShadowMap,kt),Qe.state.pointShadowMap.length>0&&se.setValue(K,"pointShadowMap",Qe.state.pointShadowMap,kt)),nt.isSkinnedMesh){se.setOptional(K,nt,"bindMatrix"),se.setOptional(K,nt,"bindMatrixInverse");const ye=nt.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),se.setValue(K,"boneTexture",ye.boneTexture,kt))}nt.isBatchedMesh&&(se.setOptional(K,nt,"batchingTexture"),se.setValue(K,"batchingTexture",nt._matricesTexture,kt),se.setOptional(K,nt,"batchingIdTexture"),se.setValue(K,"batchingIdTexture",nt._indirectTexture,kt),se.setOptional(K,nt,"batchingColorTexture"),nt._colorsTexture!==null&&se.setValue(K,"batchingColorTexture",nt._colorsTexture,kt));const Sn=rt.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&j.update(nt,rt,Ke),(di||Dt.receiveShadow!==nt.receiveShadow)&&(Dt.receiveShadow=nt.receiveShadow,se.setValue(K,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&W.environment!==null&&(Ge.envMapIntensity.value=W.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=Cx()),di){if(se.setValue(K,"toneMappingExposure",R.toneMappingExposure),Dt.needsLights&&c1(Ge,Ti),St&&et.fog===!0&&_t.refreshFogUniforms(Ge,St),_t.refreshMaterialUniforms(Ge,et,xt,at,E.state.transmissionRenderTarget[A.id]),Dt.needsLights&&Dt.numLightProbeGrids>0){const ye=S;let Oe=0;for(const Jn of E.state.lightProbeGridArray)Jn.texture!==null&&(ye.textures[Oe]=Jn.texture,ye.min[Oe]=Jn.boundingBox.min,ye.max[Oe]=Jn.boundingBox.max,ye.resolution[Oe]=Jn.resolution,Oe++);for(const Jn in ye)ye[Jn].length=Oe;Ge.probesSH.value=ye.textures,Ge.probesMin.value=ye.min,Ge.probesMax.value=ye.max,Ge.probesResolution.value=ye.resolution}Fr.upload(K,of(Dt),Ge,kt)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Fr.upload(K,of(Dt),Ge,kt),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&se.setValue(K,"center",nt.center),se.setValue(K,"modelViewMatrix",nt.modelViewMatrix),se.setValue(K,"normalMatrix",nt.normalMatrix),se.setValue(K,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){const ye=et.uniformsGroups;for(let Oe=0,Jn=ye.length;Oe<Jn;Oe++){const hf=ye[Oe];wt.update(hf,Ke),wt.bind(hf,Ke)}}return Ke}function c1(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.sunLights.needsUpdate=W,A.sunLightShadows.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function h1(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,W,rt){const et=Ft.get(A);et.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),Ft.get(A.texture).__webglTexture=W,Ft.get(A.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:rt,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const rt=Ft.get(A);rt.__webglFramebuffer=W,rt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,rt=0){q=A,H=W,G=rt;let et=null,nt=!1,St=!1;if(A){const Mt=Ft.get(A);if(Mt.__useDefaultFramebuffer!==void 0){vt.bindFramebuffer(K.FRAMEBUFFER,Mt.__webglFramebuffer),k.copy(A.viewport),V.copy(A.scissor),pt=A.scissorTest,vt.viewport(k),vt.scissor(V),vt.setScissorTest(pt),X=-1;return}else if(Mt.__webglFramebuffer===void 0)kt.setupRenderTarget(A);else if(Mt.__hasExternalTextures)kt.rebindTextures(A,Ft.get(A.texture).__webglTexture,Ft.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const qt=A.depthTexture;if(Mt.__boundDepthTexture!==qt){if(qt!==null&&Ft.has(qt)&&(A.width!==qt.image.width||A.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(A)}}const Et=A.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(St=!0);const Nt=Ft.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Nt[W])?et=Nt[W][rt]:et=Nt[W],nt=!0):A.samples>0&&kt.useMultisampledRTT(A)===!1?et=Ft.get(A).__webglMultisampledFramebuffer:Array.isArray(Nt)?et=Nt[rt]:et=Nt,k.copy(A.viewport),V.copy(A.scissor),pt=A.scissorTest}else k.copy(st).multiplyScalar(xt).floor(),V.copy(dt).multiplyScalar(xt).floor(),pt=Tt;if(rt!==0&&(et=z),vt.bindFramebuffer(K.FRAMEBUFFER,et)&&vt.drawBuffers(A,et),vt.viewport(k),vt.scissor(V),vt.setScissorTest(pt),nt){const Mt=Ft.get(A.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+W,Mt.__webglTexture,rt)}else if(St){const Mt=W;for(let Et=0;Et<A.textures.length;Et++){const Nt=Ft.get(A.textures[Et]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Et,Nt.__webglTexture,rt,Mt)}}else if(A!==null&&rt!==0){const Mt=Ft.get(A.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Mt.__webglTexture,rt)}X=-1};function cf(A){const W=Ft.get(A);return(W.__readFormat!==A.format||W.__readType!==A.type)&&(W.__readFormat=A.format,W.__readType=A.type,W.__formatReadable=ue.textureFormatReadable(A.format),W.__typeReadable=ue.textureTypeReadable(A.type)),W}this.readRenderTargetPixels=function(A,W,rt,et,nt,St,Pt,Mt=0){if(!(A&&A.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(Et=Et[Pt],Array.isArray(Et)&&(Et=Et[0])),Et){vt.bindFramebuffer(K.FRAMEBUFFER,Et);try{const Nt=A.textures[Mt],qt=Nt.format,Qt=Nt.type;A.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Mt);const Lt=cf(Nt);if(Lt.__formatReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-et&&rt>=0&&rt<=A.height-nt&&K.readPixels(W,rt,et,nt,lt.convert(qt),lt.convert(Qt),St)}finally{const Nt=q!==null?Ft.get(q).__webglFramebuffer:null;vt.bindFramebuffer(K.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(A,W,rt,et,nt,St,Pt,Mt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(Et=Et[Pt],Array.isArray(Et)&&(Et=Et[0])),Et)if(W>=0&&W<=A.width-et&&rt>=0&&rt<=A.height-nt){vt.bindFramebuffer(K.FRAMEBUFFER,Et);const Nt=A.textures[Mt],qt=Nt.format,Qt=Nt.type;A.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Mt);const Lt=cf(Nt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,jt),K.bufferData(K.PIXEL_PACK_BUFFER,St.byteLength,K.STREAM_READ),K.readPixels(W,rt,et,nt,lt.convert(qt),lt.convert(Qt),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const Ce=q!==null?Ft.get(q).__webglFramebuffer:null;vt.bindFramebuffer(K.FRAMEBUFFER,Ce);const xe=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await Yf(K,xe,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,jt),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,St),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(jt),K.deleteSync(xe),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,rt=0){const et=Math.pow(2,-rt),nt=Math.floor(A.image.width*et),St=Math.floor(A.image.height*et),Pt=W!==null?W.x:0,Mt=W!==null?W.y:0;kt.setTexture2D(A,0),K.copyTexSubImage2D(K.TEXTURE_2D,rt,0,0,Pt,Mt,nt,St),vt.unbindTexture()},this.copyTextureToTexture=function(A,W,rt=null,et=null,nt=0,St=0){let Pt,Mt,Et,Nt,qt,Qt,Lt,jt,Ce;const xe=A.isCompressedTexture?A.mipmaps[St]:A.image;if(rt!==null)Pt=rt.max.x-rt.min.x,Mt=rt.max.y-rt.min.y,Et=rt.isBox3?rt.max.z-rt.min.z:1,Nt=rt.min.x,qt=rt.min.y,Qt=rt.isBox3?rt.min.z:0;else{const se=Math.pow(2,-nt);Pt=Math.floor(xe.width*se),Mt=Math.floor(xe.height*se),A.isDataArrayTexture?Et=xe.depth:A.isData3DTexture?Et=Math.floor(xe.depth*se):Et=1,Nt=0,qt=0,Qt=0}et!==null?(Lt=et.x,jt=et.y,Ce=et.z):(Lt=0,jt=0,Ce=0);const pe=lt.convert(W.format),$e=lt.convert(W.type);let Dt;W.isData3DTexture?(kt.setTexture3D(W,0),Dt=K.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(kt.setTexture2DArray(W,0),Dt=K.TEXTURE_2D_ARRAY):(kt.setTexture2D(W,0),Dt=K.TEXTURE_2D),vt.activeTexture(K.TEXTURE0),vt.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,W.flipY),vt.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),vt.pixelStorei(K.UNPACK_ALIGNMENT,W.unpackAlignment);const Qe=vt.getParameter(K.UNPACK_ROW_LENGTH),le=vt.getParameter(K.UNPACK_IMAGE_HEIGHT),wi=vt.getParameter(K.UNPACK_SKIP_PIXELS),Ke=vt.getParameter(K.UNPACK_SKIP_ROWS),ha=vt.getParameter(K.UNPACK_SKIP_IMAGES);vt.pixelStorei(K.UNPACK_ROW_LENGTH,xe.width),vt.pixelStorei(K.UNPACK_IMAGE_HEIGHT,xe.height),vt.pixelStorei(K.UNPACK_SKIP_PIXELS,Nt),vt.pixelStorei(K.UNPACK_SKIP_ROWS,qt),vt.pixelStorei(K.UNPACK_SKIP_IMAGES,Qt);const di=A.isDataArrayTexture||A.isData3DTexture,Ti=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const se=Ft.get(A),Ge=Ft.get(W),Sn=Ft.get(se.__renderTarget),ye=Ft.get(Ge.__renderTarget);vt.bindFramebuffer(K.READ_FRAMEBUFFER,Sn.__webglFramebuffer),vt.bindFramebuffer(K.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Oe=0;Oe<Et;Oe++)di&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ft.get(A).__webglTexture,nt,Qt+Oe),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ft.get(W).__webglTexture,St,Ce+Oe)),K.blitFramebuffer(Nt,qt,Nt+Pt,qt+Mt,Lt,jt,Lt+Pt,jt+Mt,K.DEPTH_BUFFER_BIT,K.NEAREST);vt.bindFramebuffer(K.READ_FRAMEBUFFER,null),vt.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(nt!==0||A.isRenderTargetTexture||Ft.has(A)){const se=Ft.get(A),Ge=Ft.get(W);vt.bindFramebuffer(K.READ_FRAMEBUFFER,P),vt.bindFramebuffer(K.DRAW_FRAMEBUFFER,B);for(let Sn=0;Sn<Et;Sn++)di?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,se.__webglTexture,nt,Qt+Sn):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,se.__webglTexture,nt),Ti?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ge.__webglTexture,St,Ce+Sn):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Ge.__webglTexture,St),nt!==0?K.blitFramebuffer(Nt,qt,Nt+Pt,qt+Mt,Lt,jt,Lt+Pt,jt+Mt,K.COLOR_BUFFER_BIT,K.NEAREST):Ti?K.copyTexSubImage3D(Dt,St,Lt,jt,Ce+Sn,Nt,qt,Pt,Mt):K.copyTexSubImage2D(Dt,St,Lt,jt,Nt,qt,Pt,Mt);vt.bindFramebuffer(K.READ_FRAMEBUFFER,null),vt.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Ti?A.isDataTexture||A.isData3DTexture?K.texSubImage3D(Dt,St,Lt,jt,Ce,Pt,Mt,Et,pe,$e,xe.data):W.isCompressedArrayTexture?K.compressedTexSubImage3D(Dt,St,Lt,jt,Ce,Pt,Mt,Et,pe,xe.data):K.texSubImage3D(Dt,St,Lt,jt,Ce,Pt,Mt,Et,pe,$e,xe):A.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,St,Lt,jt,Pt,Mt,pe,$e,xe.data):A.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,St,Lt,jt,xe.width,xe.height,pe,xe.data):K.texSubImage2D(K.TEXTURE_2D,St,Lt,jt,Pt,Mt,pe,$e,xe);vt.pixelStorei(K.UNPACK_ROW_LENGTH,Qe),vt.pixelStorei(K.UNPACK_IMAGE_HEIGHT,le),vt.pixelStorei(K.UNPACK_SKIP_PIXELS,wi),vt.pixelStorei(K.UNPACK_SKIP_ROWS,Ke),vt.pixelStorei(K.UNPACK_SKIP_IMAGES,ha),St===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&K.generateMipmap(Dt),vt.unbindTexture()},this.initRenderTarget=function(A){Ft.get(A).__webglFramebuffer===void 0&&kt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?kt.setTextureCube(A,0):A.isData3DTexture?kt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?kt.setTexture2DArray(A,0):kt.setTexture2D(A,0),vt.unbindTexture()},this.resetState=function(){H=0,G=0,q=null,vt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const zr=new Rt;function $(i){return zr.set(i),[zr.r,zr.g,zr.b]}function It(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function ji(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function Xn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class ie{constructor(){it(this,"pos",[]);it(this,"nor",[]);it(this,"col",[]);it(this,"glo",[]);it(this,"ox",0);it(this,"oy",0);it(this,"oz",0);it(this,"c",1);it(this,"s",0)}get vertexCount(){return this.pos.length/3}frame(t=0,e=0,n=0,s=0){return this.ox=t,this.oy=e,this.oz=n,this.c=Math.cos(s),this.s=Math.sin(s),this}wx(t,e){return this.ox+t*this.c+e*this.s}wz(t,e){return this.oz-t*this.s+e*this.c}tri(t,e,n,s,r,a,o,l,c,h,d=0){const f=this.wx(t,n),u=this.wz(t,n),m=this.oy+e,_=this.wx(s,a),p=this.wz(s,a),g=this.oy+r,x=this.wx(o,c),M=this.wz(o,c),S=this.oy+l,y=_-f,E=g-m,v=p-u,b=x-f,T=S-m,R=M-u;let C=E*R-v*T,L=v*b-y*R,z=y*T-E*b;const P=Math.hypot(C,L,z)||1;C/=P,L/=P,z/=P,this.pos.push(f,m,u,_,g,p,x,S,M),this.nor.push(C,L,z,C,L,z,C,L,z),this.col.push(h[0],h[1],h[2],h[0],h[1],h[2],h[0],h[1],h[2]),this.glo.push(d,d,d)}quad(t,e,n,s,r,a,o,l,c,h,d,f,u,m=0){this.tri(t,e,n,s,r,a,o,l,c,u,m),this.tri(t,e,n,o,l,c,h,d,f,u,m)}box(t,e,n,s,r,a,o,l=void 0,c=null,h=0){this.quad(t,e,a,s,e,a,s,r,a,t,r,a,o,h),this.quad(s,e,n,t,e,n,t,r,n,s,r,n,o,h),this.quad(s,e,a,s,e,n,s,r,n,s,r,a,o,h),this.quad(t,e,n,t,e,a,t,r,a,t,r,n,o,h),l!==null&&this.quad(t,r,a,s,r,a,s,r,n,t,r,n,l??o,h),c&&this.quad(t,e,n,s,e,n,s,e,a,t,e,a,c,h)}cyl(t,e,n,s,r,a,o,l,c=null,h=0){const d=e+a;for(let f=0;f<o;f++){const u=f/o*Math.PI*2,m=(f+1)/o*Math.PI*2,_=Math.cos(u),p=Math.sin(u),g=Math.cos(m),x=Math.sin(m);r>1e-4?(this.quad(t+_*s,e,n+p*s,t+_*r,d,n+p*r,t+g*r,d,n+x*r,t+g*s,e,n+x*s,l,h),c&&this.tri(t,d,n,t+g*r,d,n+x*r,t+_*r,d,n+p*r,c,h)):this.tri(t+_*s,e,n+p*s,t,d,n,t+g*s,e,n+x*s,l,h)}}blob(t,e,n,s,r,a,o,l,c,h,d=0){const f=h??c;for(let u=0;u<l;u++){const m=u/l*Math.PI,_=(u+1)/l*Math.PI,p=Math.cos(m),g=Math.cos(_),x=Math.sin(m),M=Math.sin(_),S=ji(c,f,1-(u+.5)/l);for(let y=0;y<o;y++){const E=y/o*Math.PI*2,v=(y+1)/o*Math.PI*2,b=Math.cos(E),T=Math.sin(E),R=Math.cos(v),C=Math.sin(v),L=t+b*x*s,z=e+p*r,P=n+T*x*a,B=t+R*x*s,H=n+C*x*a,G=t+b*M*s,q=e+g*r,X=n+T*M*a,O=t+R*M*s,k=n+C*M*a;u>0&&this.tri(L,z,P,B,z,H,O,q,k,S,d),u<l-1&&this.tri(L,z,P,O,q,k,G,q,X,S,d)}}}walls(t,e,n,s,r=0){const a=t.length/2,o=tl(t)>0;for(let l=0;l<a;l++){const c=(l+1)%a,h=t[l*2],d=t[l*2+1],f=t[c*2],u=t[c*2+1];o?this.quad(f,e,u,h,e,d,h,n,d,f,n,u,s,r):this.quad(h,e,d,f,e,u,f,n,u,h,n,d,s,r)}}cap(t,e,n,s=0){const r=t.length/2,a=[];for(let l=0;l<r;l++)a.push(new zt(t[l*2],t[l*2+1]));const o=Ho.triangulateShape(a,[]);for(const l of o){const c=a[l[0]],h=a[l[1]],d=a[l[2]];(h.x-c.x)*(d.y-c.y)-(h.y-c.y)*(d.x-c.x)>0?this.tri(c.x,e,c.y,d.x,e,d.y,h.x,e,h.y,n,s):this.tri(c.x,e,c.y,h.x,e,h.y,d.x,e,d.y,n,s)}}build(){const t=new Re;return t.setAttribute("position",new Ae(new Float32Array(this.pos),3)),t.setAttribute("normal",new Ae(new Float32Array(this.nor),3)),t.setAttribute("color",new Ae(new Float32Array(this.col),3)),t.setAttribute("glow",new Ae(new Float32Array(this.glo),1)),t.computeBoundingSphere(),t.computeBoundingBox(),this.pos=[],this.nor=[],this.col=[],this.glo=[],t}}function tl(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}const ts={value:0};function qn(i={}){const t=new Xe({vertexColors:!0,roughness:i.roughness??.86,metalness:0,side:i.side??be}),e=new Rt(i.glowColor??16761722);return t.onBeforeCompile=n=>{n.uniforms.uNight=ts,n.uniforms.uGlowColor={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float glow;
varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;
uniform float uNight;
uniform vec3 uGlowColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlowColor * vGlow * uNight * 2.4;`)},t.customProgramCacheKey=()=>"inverloch-model",t}function el(i){return i.onBeforeCompile=t=>{t.uniforms.uNight=ts,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.82 * uNight;`)},i.customProgramCacheKey=()=>"inverloch-unlit",i}const Fh={day:{sunDir:[-.42,.78,-.46],sunColor:16774109,sunIntensity:3.1,hemiSky:13953279,hemiGround:9280120,hemiIntensity:1.25,zenith:4163279,horizon:13625078,below:1582638,sunGlow:1,shallow:7129789,deep:1201018,waterSky:12903158,foam:1,night:0,exposure:1},golden:{sunDir:[-.84,.22,.36],sunColor:16756848,sunIntensity:3,hemiSky:15781309,hemiGround:6973032,hemiIntensity:1.15,zenith:4153244,horizon:16760970,below:1645863,sunGlow:1.6,shallow:7320486,deep:1390942,waterSky:16763040,foam:.9,night:.25,exposure:1},night:{sunDir:[.38,.72,-.42],sunColor:10467071,sunIntensity:.5,hemiSky:3821436,hemiGround:1053980,hemiIntensity:.55,zenith:396056,horizon:1582922,below:263948,sunGlow:.5,shallow:1920092,deep:331552,waterSky:2242140,foam:.45,night:1,exposure:1.05}},Lx=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
  gl_Position = p.xyww;
}`,Dx=`
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
}`;class Ix{constructor(t,e,n,s={}){it(this,"sun",new dp(16777215,3));it(this,"hemi",new hp(16777215,8947848,1));it(this,"sky");it(this,"sunDir",new Q);it(this,"skyUniforms");it(this,"from");it(this,"to");it(this,"t",1);it(this,"mode","day");this.renderer=t,this.water=e,this.tint=s,this.from=this.to=this.preset("day"),this.skyUniforms={uZenith:{value:new Rt},uHorizon:{value:new Rt},uBelow:{value:new Rt},uSunDir:{value:new Q},uSunColor:{value:new Rt},uSunGlow:{value:1},uNight:{value:0}},this.sky=new Jt(new Wo(1,32,16),new Wn({uniforms:this.skyUniforms,vertexShader:Lx,fragmentShader:Dx,side:Ze,depthWrite:!1,depthTest:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,n>0&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(n,n)),this.apply(1)}set(t,e=!1){t===this.mode&&this.t>=1||(this.from=this.snapshot(),this.to=this.preset(t),this.mode=t,this.t=e?1:0,this.apply(this.t))}update(t){return this.t>=1?!1:(this.t=Math.min(1,this.t+t/1.4),this.apply(this.t),!0)}aimShadow(t,e){if(!this.sun.castShadow)return;const n=_e.clamp(e*.7,140,2400),s=this.sun.shadow,r=s.camera,a=n*2/s.mapSize.x,o=Math.round(t.x/a)*a,l=Math.round(t.z/a)*a,c=n*2.4+300;this.sun.target.position.set(o,t.y,l),this.sun.position.set(o,t.y,l).addScaledVector(this.sunDir,c),this.sun.target.updateMatrixWorld(),r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=1,r.far=c*2+400,r.updateProjectionMatrix(),s.bias=-.3/(r.far-r.near),s.normalBias=_e.clamp(a*1.6,.06,1.2))}preset(t){return{...Fh[t],...this.tint[t]}}setSolar(t){const e=(t%1440+1440)%1440,n=6*60,s=20.5*60;let r,a;if(e>=n&&e<=s)a=(e-n)/(s-n),r=Math.sin(Math.PI*a)*70;else{const m=((e<n?e+1440:e)-s)/(1440-(s-n));a=m<.5?1:0,r=-Math.sin(Math.PI*m)*40}const o=_e.degToRad(110*(1-2*a)),l=_e.degToRad(Math.max(r,5)),c=[Math.sin(o)*Math.cos(l),Math.sin(l),-Math.cos(o)*Math.cos(l)];let h;r>=25?h=this.preset("day"):r>=6?h=nl(this.preset("golden"),this.preset("day"),(r-6)/19):r>=-6?h=nl(this.preset("night"),this.preset("golden"),(r+6)/12):h=this.preset("night");const d=_e.clamp((2-r)/6,0,1),f=Fh.night.sunDir,u=[c[0]+(f[0]-c[0])*d,c[1]+(f[1]-c[1])*d,c[2]+(f[2]-c[2])*d];this.from=this.to={...h,sunDir:u},this.mode=r>=25?"day":r>=-6?"golden":"night",this.apply(1)}snapshot(){return nl(this.from,this.to,Nx(this.t))}apply(t){this.t=t;const e=this.snapshot();this.sunDir.set(...e.sunDir).normalize(),this.sun.color.set(e.sunColor),this.sun.intensity=e.sunIntensity,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const n=this.skyUniforms;n.uZenith.value.set(e.zenith),n.uHorizon.value.set(e.horizon),n.uBelow.value.set(e.below),n.uSunDir.value.copy(this.sunDir),n.uSunColor.value.set(e.sunColor),n.uSunGlow.value=e.sunGlow,n.uNight.value=e.night;const s=this.water.uniforms;s.uSunDir.value.copy(this.sunDir),s.uSunColor.value.set(e.sunColor).multiplyScalar(Math.min(1,e.sunIntensity/2.5)),s.uShallow.value.set(e.shallow),s.uDeep.value.set(e.deep),s.uSky.value.set(e.waterSky),s.uFoam.value=e.foam,this.water.skirt.material.color.set(e.deep).lerp(new Rt(e.shallow),.35),ts.value=e.night,this.renderer.toneMappingExposure=e.exposure}}function Nx(i){return i*i*(3-2*i)}function nl(i,t,e){if(e<=0)return i;if(e>=1)return t;const n=(r,a)=>new Rt(r).lerp(new Rt(a),e).getHex(),s=(r,a)=>r+(a-r)*e;return{sunDir:[s(i.sunDir[0],t.sunDir[0]),s(i.sunDir[1],t.sunDir[1]),s(i.sunDir[2],t.sunDir[2])],sunColor:n(i.sunColor,t.sunColor),sunIntensity:s(i.sunIntensity,t.sunIntensity),hemiSky:n(i.hemiSky,t.hemiSky),hemiGround:n(i.hemiGround,t.hemiGround),hemiIntensity:s(i.hemiIntensity,t.hemiIntensity),zenith:n(i.zenith,t.zenith),horizon:n(i.horizon,t.horizon),below:n(i.below,t.below),sunGlow:s(i.sunGlow,t.sunGlow),shallow:n(i.shallow,t.shallow),deep:n(i.deep,t.deep),waterSky:n(i.waterSky,t.waterSky),foam:s(i.foam,t.foam),night:s(i.night,t.night),exposure:s(i.exposure,t.exposure)}}const Ux=1.5;class Fx{constructor(t,e,n,s,r,a,o,l=Ux){it(this,"nx");it(this,"nz");it(this,"y");it(this,"xMin");it(this,"zMin");it(this,"xMax");it(this,"zMax");it(this,"dx");it(this,"dz");it(this,"cellX");it(this,"cellZ");this.raw=t,this.exposure=e,this.w=n,this.h=s,this.sizeX=r,this.sizeZ=a,this.vex=l,this.cellX=r/n,this.cellZ=a/s,this.nx=Math.floor((n-1)/o)+1,this.nz=Math.floor((s-1)/o)+1,this.dx=this.cellX*o,this.dz=this.cellZ*o,this.xMin=-r/2+this.cellX/2,this.zMin=-a/2+this.cellZ/2,this.xMax=this.xMin+(this.nx-1)*this.dx,this.zMax=this.zMin+(this.nz-1)*this.dz,this.y=new Float32Array(this.nx*this.nz);for(let c=0;c<this.nz;c++)for(let h=0;h<this.nx;h++)this.y[c*this.nx+h]=t[c*o*n+h*o]*l}yAt(t,e){let n=(t-this.xMin)/this.dx,s=(e-this.zMin)/this.dz;n<0?n=0:n>this.nx-1.0001&&(n=this.nx-1.0001),s<0?s=0:s>this.nz-1.0001&&(s=this.nz-1.0001);const r=n|0,a=s|0,o=n-r,l=s-a,c=a*this.nx+r,h=this.y[c],d=this.y[c+1],f=this.y[c+this.nx],u=this.y[c+this.nx+1];return o+l<=1?h+(d-h)*o+(f-h)*l:u+(f-u)*(1-o)+(d-u)*(1-l)}bilinear(t,e,n){let s=(e+this.sizeX/2)/this.cellX-.5,r=(n+this.sizeZ/2)/this.cellZ-.5;s<0?s=0:s>this.w-1.0001&&(s=this.w-1.0001),r<0?r=0:r>this.h-1.0001&&(r=this.h-1.0001);const a=s|0,o=r|0,l=s-a,c=r-o,h=o*this.w+a;return(t[h]*(1-l)+t[h+1]*l)*(1-c)+(t[h+this.w]*(1-l)+t[h+this.w+1]*l)*c}metresAt(t,e){return this.bilinear(this.raw,t,e)}exposureAt(t,e){return this.bilinear(this.exposure,t,e)}inside(t,e,n=0){return t>this.xMin+n&&t<this.xMax-n&&e>this.zMin+n&&e<this.zMax-n}}const Oh={type:"change"},il={type:"start"},zh={type:"end"},Br=new Uo,Bh=new An,Ox=Math.cos(70*_e.DEG2RAD),Ne=new Q,tn=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sl=1e-6;class zx extends gp{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Dn.ROTATE,MIDDLE:Dn.DOLLY,RIGHT:Dn.PAN},this.touches={ONE:Qn.ROTATE,TWO:Qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new rn,this._lastTargetPosition=new Q,this._quat=new rn().setFromUnitVectors(t.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lr,this._sphericalDelta=new Lr,this._scale=1,this._panOffset=new Q,this._rotateStart=new zt,this._rotateEnd=new zt,this._rotateDelta=new zt,this._panStart=new zt,this._panEnd=new zt,this._panDelta=new zt,this._dollyStart=new zt,this._dollyEnd=new zt,this._dollyDelta=new zt,this._dollyDirection=new Q,this._mouse=new zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kx.bind(this),this._onPointerDown=Bx.bind(this),this._onPointerUp=Gx.bind(this),this._onContextMenu=$x.bind(this),this._onMouseWheel=Wx.bind(this),this._onKeyDown=Xx.bind(this),this._onTouchStart=qx.bind(this),this._onTouchMove=Yx.bind(this),this._onMouseDown=Hx.bind(this),this._onMouseMove=Vx.bind(this),this._interceptControlDown=Kx.bind(this),this._interceptControlUp=Zx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=oe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Oh),this.update(),this.state=oe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ne.copy(e).sub(this.target),Ne.applyQuaternion(this._quat),this._spherical.setFromVector3(Ne),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),s<-Math.PI?s+=tn:s>Math.PI&&(s-=tn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ne.setFromSpherical(this._spherical),Ne.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ne),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ne.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new Q(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ne.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Br.origin.copy(this.object.position),Br.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Br.direction))<Ox?this.object.lookAt(this.target):(Bh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Br.intersectPlane(Bh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>sl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sl||this._lastTargetPosition.distanceToSquared(this.target)>sl?(this.dispatchEvent(Oh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?tn/60*this.autoRotateSpeed*t:tn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ne.setFromMatrixColumn(e,0),Ne.multiplyScalar(-t),this._panOffset.add(Ne)}_panUp(t,e){this.screenSpacePanning===!0?Ne.setFromMatrixColumn(e,1):(Ne.setFromMatrixColumn(e,0),Ne.crossVectors(this.object.up,Ne)),Ne.multiplyScalar(t),this._panOffset.add(Ne)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ne.copy(s).sub(this.target);let r=Ne.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new zt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Bx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function kx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Gx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zh),this.state=oe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Hx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Dn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=oe.DOLLY;break;case Dn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}break;case Dn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(il)}function Vx(i){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Wx(i){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(i.preventDefault(),this.dispatchEvent(il),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(zh))}function Xx(i){this.enabled!==!1&&this._handleKeyDown(i)}function qx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Qn.ROTATE:if(this.enableRotate===!1){this.state=oe.NONE;break}this._handleTouchStartRotate(i),this.state=oe.TOUCH_ROTATE;break;case Qn.PAN:if(this.enablePan===!1){this.state=oe.NONE;break}this._handleTouchStartPan(i),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case Qn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=oe.TOUCH_DOLLY_PAN;break;case Qn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(il)}function Yx(i){switch(this._trackPointer(i),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=oe.NONE}}function $x(i){this.enabled!==!1&&i.preventDefault()}function Kx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const rl=new An,kr=new mp,es=new zt,al=new Q;class Jx extends zx{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Dn.PAN,MIDDLE:Dn.DOLLY,RIGHT:Dn.ROTATE},this.touches={ONE:Qn.PAN,TWO:Qn.DOLLY_ROTATE},this._panWorldStart=new Q}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;rl.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();es.x=(t.clientX-n.left)/n.width*2-1,es.y=-((t.clientY-n.top)/n.height)*2+1,kr.setFromCamera(es,this.object),kr.ray.intersectPlane(rl,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const n=this.domElement.getBoundingClientRect();es.x=(t.clientX-n.left)/n.width*2-1,es.y=-((t.clientY-n.top)/n.height)*2+1,kr.setFromCamera(es,this.object),kr.ray.intersectPlane(rl,al)&&(al.sub(this._panWorldStart),this._panOffset.copy(al).negate(),this.update())}}class Qx{constructor(t,e,n){it(this,"items",[]);it(this,"v",new Q);it(this,"visible",!0);it(this,"obstacles",[]);this.layer=t;for(const s of[...e].sort((r,a)=>r.priority-a.priority)){const r=document.createElement("button");r.type="button",r.tabIndex=-1,r.className=`inv-label inv-label--${s.kind}`,r.textContent=s.name,r.style.visibility="hidden",r.addEventListener("click",()=>n(s.id)),t.appendChild(r),this.items.push({place:s,el:r,w:0,h:0,shown:!1})}}setVisible(t){this.visible=t,this.layer.style.display=t?"":"none"}setObstacles(t){this.obstacles=t}update(t,e,n,s=1/0){if(!this.visible)return;const r=[...this.obstacles];for(const a of this.items){a.w||(a.w=a.el.offsetWidth,a.h=a.el.offsetHeight);const o=a.place;this.v.set(o.x,o.y,o.z);const l=this.v.distanceTo(t.position);this.v.project(t);let c=this.v.z<1&&this.v.z>-1&&l<(o.maxDist??1/0)&&l<s;const h=(this.v.x*.5+.5)*e,d=(-this.v.y*.5+.5)*n,f=h-a.w/2,u=d-a.h,m=h+a.w/2,_=d;if(c&&(m<0||f>e||_<0||u>n)&&(c=!1),c){for(const p of r)if(f<p[2]+6&&m>p[0]-6&&u<p[3]+4&&_>p[1]-4){c=!1;break}}c&&(r.push([f,u,m,_]),a.el.style.transform=`translate3d(${Math.round(f)}px, ${Math.round(u)}px, 0)`),c!==a.shown&&(a.el.style.visibility=c?"visible":"hidden",a.shown=c)}}dispose(){for(const t of this.items)t.el.remove();this.items=[]}}function Yn(i,t,e){return[(e-i.origin[0])*i.metresPerDegree[0],-(t-i.origin[1])*i.metresPerDegree[1]]}function jx(i,t,e){return i.map(n=>{const[s,r]=Yn(t,n.lat,n.lon),a=Math.max(e.yAt(s,r),0);return{...n,x:s,z:r,y:a+(n.lift??6)}})}const t_={high:{step:1,trees:1,shadow:4096,pixelRatio:2},medium:{step:2,trees:.6,shadow:2048,pixelRatio:1.5},low:{step:2,trees:.35,shadow:0,pixelRatio:1}};class ol extends Error{}const e_=()=>new Promise(i=>requestAnimationFrame(()=>i())),n_=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class i_{constructor(t,e,n,s,r={}){it(this,"renderer");it(this,"scene",new bd);it(this,"camera",new _n(38,1,5,9e4));it(this,"controls");it(this,"atmosphere");it(this,"hf");it(this,"disposed",!1);it(this,"abort",new AbortController);it(this,"labels");it(this,"places",[]);it(this,"raf",0);it(this,"last",0);it(this,"time",0);it(this,"dirty",!0);it(this,"animating",!0);it(this,"resizeObserver");it(this,"flight");it(this,"lastCompass",NaN);it(this,"width",1);it(this,"height",1);it(this,"pixelRatio",1);it(this,"slowFrames",0);it(this,"solarMinutes",NaN);it(this,"roadPaths",[]);it(this,"roadIndex");it(this,"external");it(this,"meta");it(this,"shadowAim",new Q);it(this,"viewFocus",new Q);it(this,"viewDistance",1/0);it(this,"lookDir",new Q);it(this,"onKey",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=this.currentView(),n=e.dist*.12,s=_e.degToRad(e.azimuth),r=-Math.sin(s),a=-Math.cos(s),o=Math.cos(s),l=-Math.sin(s);let c=null;switch(t.key){case"ArrowUp":c={...e,x:e.x+r*n,z:e.z+a*n};break;case"ArrowDown":c={...e,x:e.x-r*n,z:e.z-a*n};break;case"ArrowLeft":c={...e,x:e.x-o*n,z:e.z-l*n};break;case"ArrowRight":c={...e,x:e.x+o*n,z:e.z+l*n};break;case"+":case"=":c={...e,dist:e.dist*.8};break;case"-":case"_":c={...e,dist:e.dist*1.25};break;case"q":case"Q":c={...e,azimuth:e.azimuth-15};break;case"e":case"E":c={...e,azimuth:e.azimuth+15};break;case"r":case"R":c={...e,polar:e.polar-6};break;case"f":case"F":c={...e,polar:e.polar+6};break;case"Home":c=this.opts.home;break;default:return}t.preventDefault(),this.fly(c,.3)});it(this,"frame",t=>{var l;if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);const e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,document.hidden)return;if(this.flight){const c=this.flight;c.t=Math.min(1,c.t+e/c.duration);const h=n_(c.t),d=(f,u)=>f+(u-f)*h;this.applyView({x:d(c.from.x,c.to.x),z:d(c.from.z,c.to.z),dist:Math.exp(d(Math.log(c.from.dist),Math.log(c.to.dist))),polar:d(c.from.polar,c.to.polar),azimuth:d(c.from.azimuth,c.to.azimuth)}),c.t>=1&&(this.flight=void 0)}if(this.controls&&!this.external&&this.controls.update()&&(this.dirty=!0),this.atmosphere.update(e)&&(this.dirty=!0),this.animating&&(this.time+=e,this.tick(e,this.time),this.dirty=!0),!this.dirty)return;this.dirty=!1;const n=this.camera;let s,r=1/0;const a=!!this.controls&&!this.external;if(this.controls&&a){const c=this.hf.yAt(n.position.x,n.position.z)+12;n.position.y<c&&(n.position.y=c),s=n.position.distanceTo(this.controls.target),this.shadowAim.copy(this.controls.target)}else{const c=Math.max(1,n.position.y-Math.max(this.hf.yAt(n.position.x,n.position.z),this.waterLevel));n.getWorldDirection(this.lookDir);const h=Math.min(this.lookDir.y<-.05?c/-this.lookDir.y:1e9,60+c*3,3e3);this.shadowAim.copy(n.position).addScaledVector(this.lookDir,h),s=Math.max(h,c)*1.3,r=Math.max(350,c*10)}const o=a?_e.clamp(s*.02,2,80):_e.clamp(s*.012,.4,60);if(Math.abs(o-n.near)>n.near*.05&&(n.near=o,n.updateProjectionMatrix()),this.atmosphere.aimShadow(this.shadowAim,s),!a&&s<500?this.viewFocus.set(n.position.x,0,n.position.z):this.viewFocus.copy(this.shadowAim),this.viewDistance=s,this.beforeRender(),this.renderer.render(this.scene,n),(l=this.labels)==null||l.update(n,this.width,this.height,r),this.animating&&e<.25&&(this.slowFrames=e>.042?this.slowFrames+1:Math.max(0,this.slowFrames-2),this.slowFrames>50&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio*.75),this.renderer.setPixelRatio(this.pixelRatio),this.resize(),this.slowFrames=0)),a){const c=Math.round(this.currentView().azimuth);c!==this.lastCompass&&(this.lastCompass=c,this.cb.onCompass(c))}});this.container=t,this.labelLayer=e,this.cb=n,this.opts=s,this.host=r,this.external=!!r.external}async init(){try{this.renderer=new Px({antialias:!0,powerPreference:"high-performance"})}catch{this.cb.onError("This browser could not start WebGL, which the 3D model needs.");return}const t=this.renderer,e=this.pickQuality(),n=t_[e];this.pixelRatio=Math.min(window.devicePixelRatio||1,n.pixelRatio),t.setPixelRatio(this.pixelRatio),t.outputColorSpace=we,t.toneMapping=Sa,t.shadowMap.enabled=n.shadow>0,t.shadowMap.type=rs;const s=t.domElement;this.host.external?(s.setAttribute("role","img"),s.setAttribute("aria-label",this.opts.name)):(s.tabIndex=0,s.setAttribute("role","application"),s.setAttribute("aria-label",`${this.opts.name}. Drag to pan, right-drag to rotate, scroll to zoom. Arrow keys pan, plus and minus zoom, Q and E rotate.`)),s.style.display="block",s.style.outlineOffset="-3px",this.container.appendChild(s),s.addEventListener("webglcontextlost",o=>{o.preventDefault(),this.disposed||this.cb.onError("The browser reclaimed the graphics memory this model was using.")});let r;try{r=await this.build(n,e,async(o,l)=>{this.cb.onProgress(o,l),await e_()})}catch(o){if(this.disposed)return;o instanceof ol||console.error(o),this.cb.onError(o instanceof ol?o.message:"The model could not be built in this browser.");return}if(this.disposed)return;this.hf=r.hf,this.atmosphere=r.atmosphere,this.scene.add(this.atmosphere.sky,this.atmosphere.sun,this.atmosphere.sun.target,this.atmosphere.hemi),this.places=r.places,this.roadPaths=r.roadPaths,this.roadIndex=r.roadIndex,this.labels=new Qx(this.labelLayer,this.places,o=>this.flyToPlace(o)),this.external||this.setupControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize();const a=window.matchMedia("(prefers-reduced-motion: reduce)").matches;a&&(this.animating=!1),this.external?this.setExternalCamera(...this.opts.externalStart):a?this.applyView(this.opts.home):(this.applyView(this.opts.intro),this.fly(this.opts.home,3.4)),this.cb.onProgress(1,"Ready"),this.cb.onReady(r.info),this.last=performance.now(),this.raf=requestAnimationFrame(this.frame)}get isAnimating(){return this.animating}setAnimating(t){this.animating=t,this.dirty=!0}setExternalCamera(t,e,n,s,r){this.external&&(this.camera.position.set(t,e,n),this.camera.rotation.set(r,s,0,"YXZ"),this.dirty=!0)}setExternal(t){if(!(t===this.external||!this.hf)){if(this.external=t,t)this.flight=void 0,this.controls&&(this.controls.enabled=!1);else{this.controls||this.setupControls(),this.controls.enabled=!0;const e=this.camera;e.getWorldDirection(this.lookDir);const n=Math.max(1,e.position.y),s=this.lookDir.y<-.05?Math.min(n/-this.lookDir.y,6e3):900,r=this.controls.target.copy(e.position).addScaledVector(this.lookDir,s);r.x=_e.clamp(r.x,this.hf.xMin,this.hf.xMax),r.z=_e.clamp(r.z,this.hf.zMin,this.hf.zMax),r.y=this.targetHeight(r.x,r.z),this.controls.update(),this.fly(this.opts.home,1.6)}this.resize()}}getCamera(){const t=new Tn().setFromQuaternion(this.camera.quaternion,"YXZ"),e=this.camera.position;return{x:e.x,y:e.y,z:e.z,yaw:t.y,pitch:t.x}}fromLatLon(t,e){return this.meta?Yn(this.meta,t,e):[0,0]}addParts(t){const e=new Le;e.name="guest";const n=t.map(s=>{const r=new Re;r.setAttribute("position",new ae(Array.from(s.positions),3)),s.colors&&r.setAttribute("color",new ae(Array.from(s.colors),3)),s.uvs&&r.setAttribute("uv",new ae(Array.from(s.uvs),2)),s.indices&&r.setIndex(Array.from(s.indices)),s.normals?r.setAttribute("normal",new ae(Array.from(s.normals),3)):r.computeVertexNormals();let a=null;s.map&&(a=new Pe(s.map),a.colorSpace=we,a.wrapS=a.wrapT=Zs,s.mapRepeat&&a.repeat.set(s.mapRepeat[0],s.mapRepeat[1]),a.anisotropy=4,a.needsUpdate=!0);const o=s.opacity??1,l={color:new Rt().setRGB(...s.color??[1,1,1]),map:a,vertexColors:!!s.colors,transparent:o<1,opacity:o,side:s.doubleSide?be:jn},c=s.unlit?new Hn(l):new Xe({...l,roughness:s.roughness??.9,metalness:s.metalness??0,emissive:new Rt().setRGB(...s.emissive??[0,0,0]),emissiveIntensity:s.emissiveIntensity??1,flatShading:!!s.flatShading}),h=new Jt(r,c);return h.matrixAutoUpdate=!1,h.matrix.fromArray(Array.from(s.matrix)),h.castShadow=o>=1,h.receiveShadow=!0,e.add(h),h});return this.scene.add(e),this.dirty=!0,{setMatrix:(s,r)=>{const a=n[s];a&&(a.matrix.fromArray(Array.from(r)),a.matrixWorldNeedsUpdate=!0,this.dirty=!0)},setEmissive:(s,r,a,o,l)=>{var h;const c=(h=n[s])==null?void 0:h.material;c instanceof Xe&&(c.emissive.setRGB(r,a,o),c.emissiveIntensity=l,this.dirty=!0)},remove:()=>{var s;this.scene.remove(e);for(const r of n){r.geometry.dispose();const a=r.material;(s=a.map)==null||s.dispose(),a.dispose()}this.dirty=!0}}}addPad(t){const e=t.radius??t.halfWidth??5,n=t.radius??t.halfDepth??5,s=t.heading??0,r=Math.cos(s),a=Math.sin(s);let o=1/0,l=-1/0;for(const[u,m]of[[0,0],[-e,-n],[e,-n],[e,n],[-e,n],[0,-n],[0,n],[-e,0],[e,0]]){const _=this.hf.yAt(t.x+u*r+m*a,t.z-u*a+m*r);o=Math.min(o,_),l=Math.max(l,_)}const c=l+(t.lift??.25),h=c-o+1,d=t.radius?new zo(t.radius,t.radius,h,24):new vi(e*2,h,n*2),f=new Jt(d,new Xe({color:new Rt().setRGB(...t.color),roughness:1}));return f.position.set(t.x,c-h/2,t.z),f.rotation.y=s,f.receiveShadow=!0,f.name="guest-pad",this.scene.add(f),this.dirty=!0,c}setSolarMinutes(t){!this.atmosphere||t===this.solarMinutes||(this.solarMinutes=t,this.atmosphere.setSolar(t),this.dirty=!0)}roadSpot(t){const e=t.trim().toLowerCase();let n=null;for(const m of this.roadPaths)m.name.toLowerCase()===e&&(!n||m.length>n.length)&&(n=m);if(!n)return null;const s=n.pts.length/3,r=0,a=s-1,o=s>>1;let l=n.pts[a*3]-n.pts[r*3],c=n.pts[a*3+2]-n.pts[r*3+2];const h=Math.hypot(l,c)||1;l/=h,c/=h;const d=Math.min(70,h*.5),f=n.pts[o*3]-l*d,u=n.pts[o*3+2]-c*d;return{x:f,y:this.hf.yAt(f,u)+38,z:u,yaw:Math.atan2(-l,-c),pitch:-.42}}standNear(t,e){const n=this.roadIndex,s=n==null?void 0:n.nearest(t,e,150);if(!n||!s)return null;const r=s.width/2+1.5;let a=(t-s.px)*-s.tz+(e-s.pz)*s.tx>=0?1:-1;const o=u=>{const m=s.px-s.tz*u*(r+6),_=s.pz+s.tx*u*(r+6),p=n.nearest(m,_,r+4);return!!p&&p.dist<r+3};o(a)&&!o(-a)&&(a=-a);const l=s.px-s.tz*a*r,c=s.pz+s.tx*a*r,h=t-l,d=e-c,f=Math.hypot(h,d)>6?Math.atan2(-h,-d):Math.atan2(-s.tx,-s.tz);return{x:l,z:c,yaw:f}}groundAt(t,e){return this.hf?this.hf.yAt(t,e):0}get waterLevel(){return 0}get bounds(){return this.hf?[this.hf.xMin,this.hf.xMax,this.hf.zMin,this.hf.zMax]:[-4e3,4e3,-3440,3440]}setTimeOfDay(t){var e;(e=this.atmosphere)==null||e.set(t,!this.animating),this.dirty=!0}setLabelsVisible(t){var e;(e=this.labels)==null||e.setVisible(t),this.dirty=!0}setLabelObstacles(t){var e;(e=this.labels)==null||e.setObstacles(t),this.dirty=!0}flyToPlace(t){const e=this.places.find(n=>n.id===t);e&&this.fly({x:e.x,z:e.z,dist:e.view[0],polar:e.view[1],azimuth:e.view[2]},2.2)}resetView(){this.fly(this.opts.home,1.8)}setView(t,e,n,s,r,a=1.5){this.fly({x:t,z:e,dist:n,polar:s,azimuth:r},a)}faceNorth(){const t=this.currentView();this.fly({...t,azimuth:0},.8)}zoomBy(t){const e=this.currentView();this.fly({...e,dist:_e.clamp(e.dist*t,this.controls.minDistance,this.controls.maxDistance)},.35)}dispose(){var t,e,n;this.disposed=!0,this.abort.abort(),cancelAnimationFrame(this.raf),(t=this.resizeObserver)==null||t.disconnect(),(e=this.labels)==null||e.dispose(),(n=this.controls)==null||n.dispose(),this.renderer&&(this.renderer.domElement.removeEventListener("keydown",this.onKey),this.scene.traverse(s=>{var o,l;const r=s;(l=(o=r.geometry)==null?void 0:o.dispose)==null||l.call(o);const a=Array.isArray(r.material)?r.material:r.material?[r.material]:[];for(const c of a){for(const h of Object.values(c))h instanceof Pe&&h.dispose();c.dispose()}}),this.renderer.dispose(),this.renderer.domElement.remove())}beforeRender(){}invalidate(){this.dirty=!0}clearTest(){const t=[...this.host.clear??[],...(this.host.clearLatLon??[]).map(e=>{const[n,s]=this.fromLatLon(e.lat,e.lon);return{x:n,z:s,r:e.r}})];return(e,n)=>t.some(s=>(e-s.x)**2+(n-s.z)**2<s.r*s.r)}pickQuality(){if(this.host.quality)return this.host.quality;const t=new URLSearchParams(window.location.search).get("quality");if(t==="high"||t==="medium"||t==="low")return t;const e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),s=n?String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)):"";if(/swiftshader|llvmpipe|software/i.test(s))return"low";const r=navigator.deviceMemory??8;return window.matchMedia("(pointer: coarse)").matches||r<=4?"medium":"high"}setupControls(){const t=this.controls=new Jx(this.camera,this.renderer.domElement);t.enableDamping=!0,t.dampingFactor=.09,t.screenSpacePanning=!1,t.zoomToCursor=!0,t.minDistance=this.opts.minDistance,t.maxDistance=this.opts.maxDistance,t.maxPolarAngle=_e.degToRad(84),t.zoomSpeed=1.1,t.addEventListener("start",()=>{this.flight=void 0}),t.addEventListener("change",()=>{const e=t.target,n=this.hf;e.x=_e.clamp(e.x,n.xMin,n.xMax),e.z=_e.clamp(e.z,n.zMin,n.zMax);const s=this.targetHeight(e.x,e.z);this.camera.position.y+=s-e.y,e.y=s,this.dirty=!0}),this.renderer.domElement.addEventListener("keydown",this.onKey)}clampView(t){var e,n;return{x:_e.clamp(t.x,this.hf.xMin,this.hf.xMax),z:_e.clamp(t.z,this.hf.zMin,this.hf.zMax),dist:_e.clamp(t.dist,((e=this.controls)==null?void 0:e.minDistance)??this.opts.minDistance,((n=this.controls)==null?void 0:n.maxDistance)??this.opts.maxDistance),polar:_e.clamp(t.polar,2,84),azimuth:t.azimuth}}currentView(){const t=this.controls.target,e=this.camera.position.clone().sub(t),n=new Lr().setFromVector3(e);return{x:t.x,z:t.z,dist:n.radius,polar:_e.radToDeg(n.phi),azimuth:_e.radToDeg(n.theta)}}targetHeight(t,e){return this.opts.followGround?Math.max(0,this.hf.yAt(t,e)):0}applyView(t){const e=new Lr(t.dist,_e.degToRad(t.polar),_e.degToRad(t.azimuth)),n=this.controls.target.set(t.x,this.targetHeight(t.x,t.z),t.z);this.camera.position.setFromSpherical(e).add(n),this.camera.lookAt(n),this.dirty=!0}fly(t,e){if(!this.controls||this.external)return;if(t=this.clampView(t),!this.animating){this.flight=void 0,this.applyView(t),this.controls.update();return}const n=this.currentView();let s=(t.azimuth-n.azimuth)%360;s>180&&(s-=360),s<-180&&(s+=360),this.flight={from:n,to:{...t,azimuth:n.azimuth+s},t:0,duration:e}}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.fov=this.external?60:t/e<.8?52:38,this.camera.updateProjectionMatrix(),this.dirty=!0}}const kh=3;function ns(i,t,e,n,s,r,a,o,l,c){const h=new Vo(1,0),d=h.getAttribute("position"),f=[];for(let u=0;u<d.count;u++){const m=d.getX(u),_=d.getY(u),p=d.getZ(u),g=Math.sin(m*12.9898+_*78.233+p*37.719+o*4.1)*43758.5453,x=.8+(g-Math.floor(g))*.42;f.push([t+m*s*x,e+_*r*(_<0?.75:x),n+p*a*x])}for(let u=0;u<f.length;u+=3){const[m,_,p]=[f[u],f[u+1],f[u+2]],g=_e.clamp(((m[1]+_[1]+p[1])/3-(e-r))/(2*r),0,1);i.tri(m[0],m[1],m[2],_[0],_[1],_[2],p[0],p[1],p[2],ji(l,c,g))}h.dispose()}function Si(i){const t=i.build();return t.deleteAttribute("glow"),t}function s_(i,t,e,n,s=()=>!1){const r=new Le;r.name="trees";const a=new Wc({vertexColors:!0}),o=1300,l=new Map,c=Xn(88);for(let g=0;g<i.length;g+=kh){if(n<1&&c()>n||s(i[g]/4,i[g+1]/4))continue;const M=`${i[g+2]>>8}:${Math.floor(i[g]/4/o)}:${Math.floor(i[g+1]/4/o)}`;let S=l.get(M);S||l.set(M,S=[]),S.push(g)}const h=new ne,d=new rn,f=new Q,u=new Q,m=new Q(0,1,0),_=new Rt;let p=0;for(const[g,x]of l){const M=Number(g.split(":")[0]),S=new Vn(t[M],a,x.length);x.forEach((y,E)=>{const v=i[y]/4,b=i[y+1]/4,T=(i[y+2]&255)/10,R=Xn(y*2654435761+11);u.set(v,e.yAt(v,b)-.15,b),d.setFromAxisAngle(m,R()*Math.PI*2);const C=.85+R()*.35;f.set(T*C,T,T*(.85+R()*.35)),S.setMatrixAt(E,h.compose(u,d,f));const L=.8+R()*.34;S.setColorAt(E,_.setRGB(L*(.94+R()*.14),L,L*(.9+R()*.12)))}),S.instanceMatrix.needsUpdate=!0,S.instanceColor&&(S.instanceColor.needsUpdate=!0),S.computeBoundingSphere(),S.castShadow=!0,S.receiveShadow=!1,r.add(S),p+=x.length}return{group:r,count:p}}const Gr=1,Ds=2,r_=[$(5198680),$(11575168),$(9072466),$(12434356)],a_=$(4474957),Gh=$(15921382),Hh=[.34,.3,.26,.22,.16,.15,.13,.11];function o_(i,t){const e=[i[0]/10,i[1]/10];for(let n=2;n<i.length;n+=2){const s=i[n-2]/10,r=i[n-1]/10,a=i[n]/10,o=i[n+1]/10,l=Math.max(1,Math.ceil(Math.hypot(a-s,o-r)/t));for(let c=1;c<=l;c++)e.push(s+(a-s)*c/l,r+(o-r)*c/l)}return e}class l_{constructor(){it(this,"cells",new Map);it(this,"segs",[]);it(this,"size",40)}add(t,e,n,s,r,a,o=7){const l=this.segs.length/7;this.segs.push(t,e,n,s,r,a,o);const c=Math.floor(Math.min(t,n)/this.size),h=Math.floor(Math.max(t,n)/this.size),d=Math.floor(Math.min(e,s)/this.size),f=Math.floor(Math.max(e,s)/this.size);for(let u=c;u<=h;u++)for(let m=d;m<=f;m++){const _=(u+512)*4096+(m+512);let p=this.cells.get(_);p||this.cells.set(_,p=[]),p.push(l)}}clear(t,e,n,s){let r=!0;return this.near(t,e,n,(a,o,l,c)=>{a<c/2+s&&(r=!1)}),r}near(t,e,n,s){const r=Math.ceil(n/this.size),a=Math.floor(t/this.size),o=Math.floor(e/this.size);for(let l=a-r;l<=a+r;l++)for(let c=o-r;c<=o+r;c++){const h=this.cells.get((l+512)*4096+(c+512));if(h)for(const d of h){const f=this.segs[d*7],u=this.segs[d*7+1],m=this.segs[d*7+2]-f,_=this.segs[d*7+3]-u,p=Math.max(0,Math.min(1,((t-f)*m+(e-u)*_)/(m*m+_*_||1))),g=Math.hypot(t-f-m*p,e-u-_*p);g<=n&&s(g,this.segs[d*7+4],this.segs[d*7+5],this.segs[d*7+6])}}}nearest(t,e,n){let s=null;const r=Math.ceil(n/this.size),a=Math.floor(t/this.size),o=Math.floor(e/this.size);for(let l=a-r;l<=a+r;l++)for(let c=o-r;c<=o+r;c++){const h=this.cells.get((l+512)*4096+(c+512));if(h)for(const d of h){const f=this.segs[d*7],u=this.segs[d*7+1],m=this.segs[d*7+2],_=this.segs[d*7+3],p=m-f,g=_-u,x=Math.max(0,Math.min(1,((t-f)*p+(e-u)*g)/(p*p+g*g||1))),M=f+p*x,S=u+g*x,y=Math.hypot(t-M,e-S);if(y<=n&&(!s||y<s.dist)){const E=Math.hypot(p,g)||1;s={dist:y,px:M,pz:S,cls:this.segs[d*7+4],name:this.segs[d*7+5],width:this.segs[d*7+6],tx:p/E,tz:g/E}}}}return s}}function c_(i,t,e={}){const n=new ie,s=new ie,r=new l_,a=[],o=[];for(let p=0;p<i.roads.length;p++){const[g,x,M,S,y,E]=i.roads[p],v=S/10,b=o_(E,g<=3?6:5),T=b.length/2;if(T<2)continue;const R=x===0&&g<=1?a_:r_[x],C=Hh[g],L=(M&Gr)!==0,z=t.yAt(b[0],b[1]),P=t.yAt(b[T*2-2],b[T*2-1]),B=new Float32Array(T);for(let O=1;O<T;O++)B[O]=B[O-1]+Math.hypot(b[O*2]-b[O*2-2],b[O*2+1]-b[O*2-1]);const H=B[T-1]||1,G=new Float32Array(T*3),q=new Float32Array(T*3),X=new Float32Array(T*3);for(let O=0;O<T;O++){const k=b[O*2],V=b[O*2+1],pt=Math.max(O-1,0),Y=Math.min(O+1,T-1);let ct=b[Y*2]-b[pt*2],ut=b[Y*2+1]-b[pt*2+1];const at=Math.hypot(ct,ut)||1;ct/=at,ut/=at;let xt=1;if(O>0&&O<T-1){const Ut=b[O*2]-b[O*2-2],ee=b[O*2+1]-b[O*2-1],At=Math.hypot(Ut,ee)||1;xt=1/Math.max(.6,(Ut*ct+ee*ut)/At)}const Ct=-ut*(v/2)*xt,$t=ct*(v/2)*xt,st=L?z+(P-z)*(B[O]/H)+.6+1*Math.sin(Math.PI*B[O]/H):NaN,dt=L?st:t.yAt(k,V)+C,Tt=L?st:t.yAt(k+Ct,V+$t)+C,Bt=L?st:t.yAt(k-Ct,V-$t)+C;G.set([k+Ct,Tt,V+$t],O*3),q.set([k,dt,V],O*3),X.set([k-Ct,Bt,V-$t],O*3),O>0&&g<=3&&r.add(b[O*2-2],b[O*2-1],k,V,g,y,v)}for(let O=0;O<T-1;O++){const k=O*3,V=k+3;if(n.quad(G[k],G[k+1],G[k+2],G[V],G[V+1],G[V+2],q[V],q[V+1],q[V+2],q[k],q[k+1],q[k+2],R),n.quad(q[k],q[k+1],q[k+2],q[V],q[V+1],q[V+2],X[V],X[V+1],X[V+2],X[k],X[k+1],X[k+2],R),L){const pt=$(x===2?7297604:13225162);for(const Y of[G,X])n.quad(Y[k],Y[k+1],Y[k+2],Y[V],Y[V+1],Y[V+2],Y[V],Y[V+1]+1.05,Y[V+2],Y[k],Y[k+1]+1.05,Y[k+2],pt),n.quad(Y[k],Y[k+1]-.7,Y[k+2],Y[V],Y[V+1]-.7,Y[V+2],Y[V],Y[V+1],Y[V+2],Y[k],Y[k+1],Y[k+2],$(9276036))}}if(g<=5&&!L)for(const O of[0,T-1]){const k=q[O*3],V=q[O*3+1],pt=q[O*3+2],Y=8;for(let ct=0;ct<Y;ct++){const ut=ct/Y*Math.PI*2,at=(ct+1)/Y*Math.PI*2;n.tri(k,V,pt,k+Math.cos(at)*v/2,V,pt+Math.sin(at)*v/2,k+Math.cos(ut)*v/2,V,pt+Math.sin(ut)*v/2,R)}}if((g<=1||e.suburbMarkings&&g<=3&&v>=6.5)&&!(M&Ds)&&H>20){let O=0;for(let k=4;k<H-4;k+=12){for(;O<T-2&&B[O+1]<k;)O++;const V=(k-B[O])/(B[O+1]-B[O]||1),pt=q[O*3]+(q[O*3+3]-q[O*3])*V,Y=q[O*3+1]+(q[O*3+4]-q[O*3+1])*V,ct=q[O*3+2]+(q[O*3+5]-q[O*3+2])*V;let ut=q[O*3+3]-q[O*3],at=q[O*3+5]-q[O*3+2];const xt=Math.hypot(ut,at)||1;ut/=xt,at/=xt;const Ct=(q[O*3+4]-q[O*3+1])/xt*3,$t=-at*.16,st=ut*.16,dt=.05;s.quad(pt+$t,Y+dt,ct+st,pt+ut*3+$t,Y+Ct+dt,ct+at*3+st,pt+ut*3-$t,Y+Ct+dt,ct+at*3-st,pt-$t,Y+dt,ct-st,Gh)}}if(M&Ds){let O=0,k=0;for(let at=0;at<T;at++)O+=b[at*2],k+=b[at*2+1];O/=T,k/=T;const V=T>>1,pt=h_(b[0],b[1],b[V*2],b[V*2+1],b[T*2-2],b[T*2-1]),Y=pt?pt.x:O,ct=pt?pt.z:k,ut=pt?pt.r:Math.hypot(b[0]-O,b[1]-k);ut>3&&ut<40&&!o.some(at=>Math.hypot(at.x-Y,at.z-ct)<12)&&o.push({x:Y,z:ct,r:ut,w:v})}g<=3&&a.push({index:p,cls:g,name:y>=0?i.names[y]:"",width:v,flags:M,pts:q,length:H,nameIdx:y})}if(e.suburbMarkings)for(const p of a){if(p.cls<2||p.flags&(Gr|Ds)||p.width<5.5||p.length<12)continue;const g=p.pts,x=g.length/3;for(const M of[0,1]){const S=M?x-1:0,y=M?x-2:1,E=g[S*3],v=g[S*3+2];let b=E-g[y*3],T=v-g[y*3+2];const R=Math.hypot(b,T)||1;b/=R,T/=R;let C=0,L=9,z=!1;if(r.near(E,v,1,(O,k,V,pt)=>{V!==p.nameIdx&&O<.8&&(k<L&&(L=k),pt>C&&(C=pt))}),!C||L>p.cls||(r.near(E+b*2,v+T*2,.6,(O,k,V)=>{V===p.nameIdx&&(z=!0)}),z))continue;const P=C/2+1.3,B=E-b*P,H=v-T*P,G=T,q=-b,X=t.yAt(B,H)+Hh[p.cls]+.05;for(let O=.2;O+.5<p.width/2-.3;O+=1.1){const k=B+G*O,V=H+q*O,pt=B+G*(O+.55),Y=H+q*(O+.55);s.quad(k+b*.15,X,V+T*.15,pt+b*.15,X,Y+T*.15,pt-b*.15,X,Y-T*.15,k-b*.15,X,V-T*.15,Gh)}}}const l=$(13158078),c=$(7314002),h=$(4943936);for(const p of o){const g=p.r-p.w/2-.3;if(g<1.2)continue;const x=t.yAt(p.x,p.z)+.2;n.frame(p.x,x,p.z,0),n.cyl(0,0,0,g,g,.4,14,l,c),n.blob(0,.9,0,g*.45,.8,g*.45,6,3,h,$(7181400)),n.frame()}const d=new Xe({vertexColors:!0,roughness:.92,metalness:0,side:be,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),f=new Jt(Vh(n.build()),d);f.receiveShadow=!0,f.name="roads";const u=el(new Hn({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})),m=new Jt(Vh(s.build()),u);m.name="road-markings";const _=new Le;return _.add(f,m),{group:_,index:r,paths:a}}function Vh(i){return i.deleteAttribute("glow"),i}function h_(i,t,e,n,s,r){const a=2*(i*(n-r)+e*(r-t)+s*(t-n));if(Math.abs(a)<.001)return null;const o=i*i+t*t,l=e*e+n*n,c=s*s+r*r,h=(o*(n-r)+l*(r-t)+c*(t-n))/a,d=(o*(s-e)+l*(i-s)+c*(e-i))/a;return{x:h,z:d,r:Math.hypot(i-h,t-d)}}const Is=-36,u_=170,f_=`
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
`,Ns=4,Wh=4,d_=`
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
          }`,p_=`
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
        }`;function m_(i,t,e,n,s={}){const{nx:r,nz:a}=i,o=new Float32Array(r*a*3),l=new Float32Array(r*a*3),c=new Float32Array(r*a*2);for(let v=0;v<a;v++)for(let b=0;b<r;b++){const T=v*r+b,R=i.xMin+b*i.dx,C=i.zMin+v*i.dz;o[T*3]=R,o[T*3+1]=i.y[T],o[T*3+2]=C,c[T*2]=(R+i.sizeX/2)/i.sizeX,c[T*2+1]=1-(C+i.sizeZ/2)/i.sizeZ;const L=i.y[v*r+Math.max(b-1,0)],z=i.y[v*r+Math.min(b+1,r-1)],P=i.y[Math.max(v-1,0)*r+b],B=i.y[Math.min(v+1,a-1)*r+b],H=(z-L)/(2*i.dx),G=(B-P)/(2*i.dz),q=Math.hypot(H,1,G);l[T*3]=-H/q,l[T*3+1]=1/q,l[T*3+2]=-G/q}const h=new Uint32Array((r-1)*(a-1)*6);let d=0;for(let v=0;v<a-1;v++)for(let b=0;b<r-1;b++){const T=v*r+b,R=T+1,C=T+r,L=C+1;h[d++]=T,h[d++]=C,h[d++]=R,h[d++]=R,h[d++]=C,h[d++]=L}const f=new Re;f.setAttribute("position",new Ae(o,3)),f.setAttribute("normal",new Ae(l,3)),f.setAttribute("uv",new Ae(c,2)),f.setIndex(new Ae(h,1)),f.computeBoundingSphere();const u=new Xe({map:t,roughness:.96,metalness:0}),m=new Ss(new Uint8Array([128,128,128,255]),1,1);m.needsUpdate=!0;const _=Ns+Wh,p=Array.from({length:_},()=>({value:m})),g=Array.from({length:_},()=>({value:new ve(0,0,1,1)})),x=Array.from({length:_},()=>({value:0})),M={set(v,b,T){p[v].value=b??m,x[v].value=b?1:0,T&&g[v].value.set(...T)}},S=Array.from({length:_},(v,b)=>b);u.onBeforeCompile=v=>{v.uniforms.uTide=e,v.uniforms.uJitter={value:new zt(.6/i.sizeX,.6/i.sizeZ)};for(const b of S)v.uniforms[`uDetail${b}`]=p[b],v.uniforms[`uDetailRect${b}`]=g[b],v.uniforms[`uDetailOn${b}`]=x[b];v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform float uTide;
uniform vec2 uJitter;
${S.map(b=>`uniform sampler2D uDetail${b};
uniform vec4 uDetailRect${b};
uniform float uDetailOn${b};`).join(`
`)}
${f_}`).replace("#include <map_fragment>",`
        float camDist = length(cameraPosition - vWPos);
        vec2 w = vWPos.xz;
        float close = ${s.closeUp?"1.0 - smoothstep(110.0, 380.0, camDist)":"0.0"};
        // close up, the colour is looked up a little to one side, differently at every point: the picture's pixel edges become ragged, not blurred squares
        vec2 guv = vMapUv + (vec2(invNoise(w * 1.4) + 0.5 * invNoise(w * 4.3 + 17.0), invNoise(w * 1.4 + 31.7) + 0.5 * invNoise(w * 4.3 + 5.3)) / 1.5 - 0.5) * 2.0 * uJitter * close;
        #ifdef USE_MAP
          diffuseColor *= texture2D(map, guv);
        #endif
        float sharp = 0.0;
        ${S.slice(0,Ns).map(b=>`if (uDetailOn${b} > 0.5) {
          // a slot with no tile in it is skipped altogether: nothing is read for it
          vec2 duv = (guv - uDetailRect${b}.xy) / (uDetailRect${b}.zw - uDetailRect${b}.xy);
          vec4 fine = texture2D(uDetail${b}, clamp(duv, 0.0, 1.0));
          float inside = step(0.0, duv.x) * step(duv.x, 1.0) * step(0.0, duv.y) * step(duv.y, 1.0);
          diffuseColor.rgb = mix(diffuseColor.rgb, fine.rgb, inside);
        }`).join(`
`)}
        // what the ground is made of here, if a block says: lawn, asphalt, concrete (128 is the edge of each)
        vec4 kinds = vec4(0.0);
        ${S.slice(Ns).map(b=>`if (uDetailOn${b} > 0.5) {
          vec2 duv = (vMapUv - uDetailRect${b}.xy) / (uDetailRect${b}.zw - uDetailRect${b}.xy);
          if (duv.x >= 0.0 && duv.x <= 1.0 && duv.y >= 0.0 && duv.y <= 1.0) kinds = vec4(texture2D(uDetail${b}, duv).rgb, 1.0);
        }`).join(`
`)}
        ${p_}
        ${s.closeUp?d_:""}
        {
          float nearFade = 1.0 - smoothstep(300.0, 1600.0, camDist);
          float grain = invNoise(vWPos.xz * 0.85) * 0.55 + invNoise(vWPos.xz * 0.21) * 0.45;
          diffuseColor.rgb *= mix(1.0, 0.84 + 0.32 * grain, nearFade * (1.0 - 0.8 * sharp));
          float above = vWPos.y / ${i.vex.toFixed(2)} - uTide;
          float wet = smoothstep(0.45, 0.03, above);
          diffuseColor.rgb *= mix(1.0, 0.76, wet);
        }`)},u.customProgramCacheKey=()=>`town-terrain-${i.vex}-${s.closeUp?1:0}`;const y=new Jt(f,u);y.receiveShadow=!0,y.name="terrain";const E=new Le;return E.add(y,x_(i),__(i,n)),E.userData.detail=M,E}function g_(i){const t=[];for(let e=0;e<i.nx;e++)t.push([i.xMin+e*i.dx,i.zMin]);for(let e=1;e<i.nz;e++)t.push([i.xMax,i.zMin+e*i.dz]);for(let e=i.nx-2;e>=0;e--)t.push([i.xMin+e*i.dx,i.zMax]);for(let e=i.nz-2;e>=1;e--)t.push([i.xMin,i.zMin+e*i.dz]);return t}function x_(i){const t=g_(i),e=t.length,n=[],s=[],r=[],a=new Rt(9074780),o=new Rt(6180669),l=new Rt(3813673),c=[[0,a,o],[1,o,l]];for(let f=0;f<e;f++){const[u,m]=t[f],[_,p]=t[(f+1)%e],g=i.yAt(u,m),x=i.yAt(_,p),M=_-u,S=p-m,y=Math.hypot(M,S)||1,E=-S/y*-1,v=M/y*-1;for(const[b,T,R]of c){const L=b===0?g:g-6,z=b===0?g-6:Is,P=b===0?x:x-6,B=b===0?x-6:Is;n.push(u,L,m,_,P,p,_,B,p,u,L,m,_,B,p,u,z,m);for(const H of[T,T,R,T,R,R])s.push(H.r,H.g,H.b);for(let H=0;H<6;H++)r.push(E,0,v)}}const h=new Re;h.setAttribute("position",new ae(n,3)),h.setAttribute("normal",new ae(r,3)),h.setAttribute("color",new ae(s,3));const d=new Jt(h,new Xe({vertexColors:!0,roughness:1,side:be}));return d.name="skirt",d}function __(i,t){const e=new Le,n=t.scale??1,s=u_*n,r=i.xMax-i.xMin+s*2,a=i.zMax-i.zMin+s*2,o=190*n,l=(i.xMin+i.xMax)/2,c=(i.zMin+i.zMax)/2,h=new Jt(new vi(r,o,a),new Xe({color:1779245,roughness:.75,metalness:.1}));h.position.set(l,Is-o/2,c),h.receiveShadow=!0,e.add(h);const d=document.createElement("canvas");d.width=2048,d.height=160;const f=d.getContext("2d");f.fillStyle="#1b262d",f.fillRect(0,0,d.width,d.height),f.fillStyle="#e9d9a6",f.textBaseline="middle",f.font="600 78px 'Space Grotesk', system-ui, sans-serif",f.fillText(t.title,40,84);const u=f.measureText(t.title).width;f.fillStyle="#9fb4bd",f.font="400 42px 'Space Grotesk', system-ui, sans-serif",f.fillText(t.subtitle,40+u+46,88);const m=new Tr(d);m.colorSpace=we,m.anisotropy=8;const _=1700*n,p=new Jt(new li(_,_*(d.height/d.width)),new Hn({map:m,toneMapped:!1}));p.position.set(l-r/2+_/2+110*n,Is-o/2,c+a/2+.6),e.add(p);const g=document.createElement("canvas");g.width=g.height=256;const x=g.getContext("2d");x.fillStyle="#e9d9a6",x.beginPath(),x.moveTo(128,18),x.lineTo(176,150),x.lineTo(128,122),x.lineTo(80,150),x.closePath(),x.fill(),x.font="700 86px 'Space Grotesk', system-ui, sans-serif",x.textAlign="center",x.fillText("N",128,240);const M=new Tr(g);M.colorSpace=we;const S=new Jt(new li(130*n,130*n),new Hn({map:M,transparent:!0,toneMapped:!1}));return S.rotation.x=-Math.PI/2,S.position.set(i.xMax+s/2,Is+.6,i.zMin+120*n),e.add(S),e}const ll=128,v_=`
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
`;class M_{constructor(t){it(this,"jobs",new Map);it(this,"order",[]);it(this,"nextId",1);it(this,"worker");it(this,"onPage");it(this,"longest",0);it(this,"pieces",0);this.renderer=t,this.onPage=typeof Worker>"u"||new URLSearchParams(window.location.search).get("tileworker")==="0"}get busy(){return this.order.length>0}load(t,e=1,n=!1){return new Promise((s,r)=>{const a=this.nextId++;this.jobs.set(a,{url:t,anisotropy:e,data:n,width:0,height:0,strips:[],cut:!1,sent:0,resolve:s,reject:r}),this.order.push(a);const o=new URL(t,document.baseURI).href;this.onPage?this.cutOnPage(a,o):this.cutOnWorker(a,o)})}cutOnWorker(t,e){try{this.worker||(this.worker=new Worker(URL.createObjectURL(new Blob([v_],{type:"text/javascript"}))),this.worker.onmessage=n=>{const s=n.data,r=this.jobs.get(s.id);r&&(s.error==="unsupported"?(this.onPage=!0,this.cutOnPage(s.id,new URL(r.url,document.baseURI).href)):s.error?r.failed=new Error(s.error):s.done?r.cut=!0:s.data?r.strips.push({y:s.y,h:s.h,data:new Uint8Array(s.data)}):(r.width=s.width,r.height=s.height))},this.worker.onerror=()=>{this.onPage=!0,this.worker=void 0;for(const[n,s]of this.jobs)!s.width&&!s.failed&&this.cutOnPage(n,new URL(s.url,document.baseURI).href)}),this.worker.postMessage({id:t,url:e,rows:ll})}catch{this.onPage=!0,this.cutOnPage(t,e)}}async cutOnPage(t,e){const n=this.jobs.get(t);if(n)try{const s=await fetch(e);if(!s.ok)throw new Error(`HTTP ${s.status}`);const r=await createImageBitmap(await s.blob(),{imageOrientation:"flipY",premultiplyAlpha:"none",colorSpaceConversion:"none"});n.width=r.width,n.height=r.height;for(let a=0;a<r.height;a+=ll){const o=Math.min(ll,r.height-a),l=await createImageBitmap(r,0,a,r.width,o);if(!this.jobs.has(t))return l.close();n.strips.push({y:a,h:o,data:l})}r.close(),n.cut=!0}catch(s){n.failed=s instanceof Error?s:new Error(String(s))}}step(){var a;const t=this.order[0];if(t===void 0)return!1;const e=this.jobs.get(t);if(e.failed)return this.finish(t),(a=e.tex)==null||a.dispose(),e.reject(e.failed),this.busy;if(!e.width)return!0;const n=performance.now(),s=this.renderer.getContext(),r=this.renderer.state;if(e.tex){const o=this.renderer.properties.get(e.tex).__webglTexture;r.activeTexture(s.TEXTURE0),r.bindTexture(s.TEXTURE_2D,o);const l=e.strips.shift();l?(r.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE),l.data instanceof Uint8Array?s.texSubImage2D(s.TEXTURE_2D,0,0,l.y,e.width,l.h,s.RGBA,s.UNSIGNED_BYTE,l.data):(s.texSubImage2D(s.TEXTURE_2D,0,0,l.y,e.width,l.h,s.RGBA,s.UNSIGNED_BYTE,l.data),l.data.close()),e.sent+=l.h):e.cut&&e.sent>=e.height&&(s.generateMipmap(s.TEXTURE_2D),this.finish(t),e.resolve(e.tex))}else{const o=new Ss(null,e.width,e.height,fn,je);o.colorSpace=e.data?Nn:we,o.wrapS=o.wrapT=cn,o.magFilter=He,o.minFilter=bn,o.generateMipmaps=!0,o.flipY=!1,o.anisotropy=e.anisotropy,o.source.dataReady=!1,o.needsUpdate=!0,this.renderer.initTexture(o),e.tex=o}return this.pieces++,this.longest=Math.max(this.longest,performance.now()-n),this.busy}finish(t){this.jobs.delete(t),this.order=this.order.filter(e=>e!==t)}dispose(){var t,e;(t=this.worker)==null||t.terminate();for(const n of this.jobs.values()){(e=n.tex)==null||e.dispose();for(const s of n.strips)s.data instanceof Uint8Array||s.data.close()}this.jobs.clear(),this.order=[]}}const S_=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,y_=`
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
}`;function b_(i,t){const e=i.w*i.h,n=new Uint16Array(e*2);for(let u=0;u<e;u++)n[u*2]=yc.toHalfFloat(i.raw[u]),n[u*2+1]=yc.toHalfFloat(i.exposure[u]);const s=new Ss(n,i.w,i.h,ni,un);s.minFilter=s.magFilter=He,s.wrapS=s.wrapT=cn,s.needsUpdate=!0;const r={tField:{value:s},uSize:{value:new zt(i.sizeX,i.sizeZ)},uTide:t,uTime:{value:0},uSunDir:{value:new Q(.4,.8,.3).normalize()},uSunColor:{value:new Rt(16773848)},uShallow:{value:new Rt(7129789)},uDeep:{value:new Rt(937848)},uSky:{value:new Rt(12573938)},uFoam:{value:1}},a=new Wn({uniforms:r,vertexShader:S_,fragmentShader:y_,transparent:!0,depthWrite:!1}),o=new li(i.xMax-i.xMin,i.zMax-i.zMin);o.rotateX(-Math.PI/2);const l=new Jt(o,a);l.position.set((i.xMin+i.xMax)/2,t.value*i.vex,(i.zMin+i.zMax)/2),l.renderOrder=2,l.name="water";const c=new Jt(new Re,new Hn({color:1929103,transparent:!0,opacity:.8,side:be,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));c.renderOrder=1,c.name="water-edge";const h=[];for(let u=0;u<i.nx;u++)h.push([i.xMin+u*i.dx,i.zMin]);for(let u=1;u<i.nz;u++)h.push([i.xMax,i.zMin+u*i.dz]);for(let u=i.nx-2;u>=0;u--)h.push([i.xMin+u*i.dx,i.zMax]);for(let u=i.nz-2;u>=1;u--)h.push([i.xMin,i.zMin+u*i.dz]);const d=h.map(([u,m])=>i.yAt(u,m)),f=u=>{t.value=u;const m=u*i.vex;l.position.y=m;const _=[],p=h.length;for(let x=0;x<p;x++){const M=(x+1)%p,S=d[x],y=d[M];if(S>=m&&y>=m)continue;const[E,v]=h[x],[b,T]=h[M],R=Math.min(S,m),C=Math.min(y,m);_.push(E,m,v,b,m,T,b,C,T,E,m,v,b,C,T,E,R,v)}c.geometry.dispose();const g=new Re;g.setAttribute("position",new ae(_,3)),c.geometry=g};return f(t.value),{mesh:l,skirt:c,uniforms:r,setTide:f}}function Hr(i){const t=i.length/2;let e={cx:0,cz:0,w:0,d:0,heading:0,area:1/0};for(let n=0;n<t;n++){const s=(n+1)%t;let r=i[s*2]-i[n*2],a=i[s*2+1]-i[n*2+1];const o=Math.hypot(r,a);if(o<.5)continue;r/=o,a/=o;let l=1/0,c=-1/0,h=1/0,d=-1/0;for(let u=0;u<t;u++){const m=i[u*2],_=i[u*2+1],p=m*r+_*a,g=-m*a+_*r;p<l&&(l=p),p>c&&(c=p),g<h&&(h=g),g>d&&(d=g)}const f=(c-l)*(d-h);if(f<e.area){const u=(l+c)/2,m=(h+d)/2;e={cx:u*r-m*a,cz:u*a+m*r,w:c-l,d:d-h,heading:Math.atan2(-a,r),area:f}}}return e}function E_(i,t){const e=i.length/2,n=tl(i)>0?1:-1,s=[];for(let r=0;r<e;r++){const a=(r+e-1)%e,o=(r+1)%e;let l=i[r*2]-i[a*2],c=i[r*2+1]-i[a*2+1],h=i[o*2]-i[r*2],d=i[o*2+1]-i[r*2+1];const f=Math.hypot(l,c)||1,u=Math.hypot(h,d)||1;l/=f,c/=f,h/=u,d/=u;const m=-c*n,_=l*n,p=-d*n,g=h*n;let x=m+p,M=_+g;const S=Math.hypot(x,M)||1;x/=S,M/=S;const y=t/Math.max(.4,x*m+M*_);s.push(i[r*2]+x*y,i[r*2+1]+M*y)}return s}function Vr(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Int16Array(e.buffer,0,e.length>>1)}async function Xh(i){const t=new Uint8Array(i),e=new DataView(i);let n=8,s=0,r=0,a=0,o=0,l=0;const c=[];for(;n<t.length;){const _=e.getUint32(n),p=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]);if(p==="IHDR")s=e.getUint32(n+8),r=e.getUint32(n+12),a=t[n+16],o=t[n+17],l=t[n+20];else if(p==="IDAT")c.push(t.subarray(n+8,n+8+_));else if(p==="IEND")break;n+=12+_}if(a!==8||o!==2&&o!==6||l)throw new Error("Unsupported terrain image format");const h=o===2?3:4,d=new Blob(c).stream().pipeThrough(new DecompressionStream("deflate")),f=new Uint8Array(await new Response(d).arrayBuffer()),u=s*h,m=new Uint8Array(u*r);for(let _=0;_<r;_++){const p=f[_*(u+1)],g=_*(u+1)+1,x=_*u;for(let M=0;M<u;M++){const S=M>=h?m[x+M-h]:0,y=_>0?m[x-u+M]:0,E=M>=h&&_>0?m[x-u+M-h]:0;let v=f[g+M];if(p===1)v+=S;else if(p===2)v+=y;else if(p===3)v+=S+y>>1;else if(p===4){const b=Math.abs(y-E),T=Math.abs(S-E),R=Math.abs(S+y-2*E);v+=b<=T&&b<=R?S:T<=R?y:E}m[x+M]=v&255}}return{width:s,height:r,channels:h,data:m}}function w_(i,t,e){const n=i.width*i.height,s=new Float32Array(n);for(let r=0;r<n;r++)s[r]=(i.data[r*i.channels]<<8|i.data[r*i.channels+1])/t-e;return s}const Us=4,on=7;function qh(i){return i.colorSpace=we,i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=bn,i}async function T_(i,t,e){let n=0;const s=c=>t(++n/4,c);t(0,"Fetching map data");const[r,a,o]=await Promise.all([fetch(i.town,{signal:e}).then(c=>{if(!c.ok)throw new Error("Could not load the suburb data");return c.json()}).then(c=>(s("Streets and buildings"),c)),fetch(i.height,{signal:e}).then(c=>{if(!c.ok)throw new Error("Could not load the terrain");return c.arrayBuffer()}).then(Xh).then(c=>(s("Terrain"),c)),new qc().loadAsync(i.ground).then(c=>(s("Ground texture"),c))]),l=r.meta;return s("Building the model"),{town:{...r,buildings:Vr(r.buildings),cars:Vr(r.cars),trees:Vr(r.trees),fences:r.fences?Vr(r.fences):new Int16Array(0)},heights:w_(a,l.heightScale,l.heightOffset),ground:qh(o)}}async function A_(i){return qh(await new qc().loadAsync(i))}const Yh=[16052712,15327951,14673377,13621459,13095900,15129023,12174512,10990520,15786948,14273976,9413530,7307142].map($),$h=[10510922,9394760,12158570,13215107,10120021,13807756].map($),Kh=[14276300,13224130,14999506,12567492,13682872,11909302,15328988].map($),Zh=[13619916,12173748,14275778,10135200,9279388].map($),R_=$(3163994),Jh=$(16053230),C_=$(11120304),P_=$(7300956),Qh=$(12566714),Wr=.05,L_=0,Fs=1,Os=2,Xr=new Rt;function jh(i,t,e){return Xr.setRGB(i/255,t/255,e/255,we),[Xr.r,Xr.g,Xr.b]}function D_(i,t,e,n,s){const{cx:r,cz:a,hw:o,hd:l}=t,c=It(s,.88);if(o>=l){const h=o-l;i.quad(r-o,e,a+l,r+o,e,a+l,r+h,e+n,a,r-h,e+n,a,s),i.quad(r+o,e,a-l,r-o,e,a-l,r-h,e+n,a,r+h,e+n,a,s),i.tri(r+o,e,a+l,r+o,e,a-l,r+h,e+n,a,c),i.tri(r-o,e,a-l,r-o,e,a+l,r-h,e+n,a,c)}else{const h=l-o;i.quad(r+o,e,a+l,r+o,e,a-l,r,e+n,a-h,r,e+n,a+h,s),i.quad(r-o,e,a-l,r-o,e,a+l,r,e+n,a+h,r,e+n,a-h,s),i.tri(r-o,e,a+l,r+o,e,a+l,r,e+n,a+h,c),i.tri(r+o,e,a-l,r-o,e,a-l,r,e+n,a-h,c)}}function tu(i,t,e,n,s,r,a){const{cx:o,cz:l,hw:c,hd:h}=t;if(c>=h){const d=s*n/h;i.quad(o-c-s,e-d,l+h+s,o+c+s,e-d,l+h+s,o+c+s,e+n,l,o-c-s,e+n,l,r),i.quad(o+c+s,e-d,l-h-s,o-c-s,e-d,l-h-s,o-c-s,e+n,l,o+c+s,e+n,l,r),i.tri(o+c,e,l+h,o+c,e,l-h,o+c,e+n,l,a),i.tri(o-c,e,l-h,o-c,e,l+h,o-c,e+n,l,a)}else{const d=s*n/c;i.quad(o+c+s,e-d,l+h+s,o+c+s,e-d,l-h-s,o,e+n,l-h-s,o,e+n,l+h+s,r),i.quad(o-c-s,e-d,l-h-s,o-c-s,e-d,l+h+s,o,e+n,l+h+s,o,e+n,l-h-s,r),i.tri(o-c,e,l+h,o+c,e,l+h,o,e+n,l+h,a),i.tri(o+c,e,l-h,o-c,e,l-h,o,e+n,l-h,a)}}const I_=1,N_=2,qr=$(1846090);function U_(i,t,e,n,s,r){const a=t.hw>=t.hd,o=(a?t.hd:t.hw)+s,l=(a?t.hw:t.hd)-(a?t.hd:t.hw)*.55,c=Math.min(Math.max(l,1.2),3.2),h=a?Math.cos(r)<0?1:-1:Math.sin(r)>0?1:-1,d=.28,f=.74,u=.1,m=h*o*(1-d),_=h*o*(1-f),p=e+n*d+u,g=e+n*f+u;a?h>0?i.quad(t.cx-c,p,t.cz+m,t.cx+c,p,t.cz+m,t.cx+c,g,t.cz+_,t.cx-c,g,t.cz+_,qr):i.quad(t.cx+c,p,t.cz+m,t.cx-c,p,t.cz+m,t.cx-c,g,t.cz+_,t.cx+c,g,t.cz+_,qr):h>0?i.quad(t.cx+m,p,t.cz+c,t.cx+m,p,t.cz-c,t.cx+_,g,t.cz-c,t.cx+_,g,t.cz+c,qr):i.quad(t.cx+m,p,t.cz-c,t.cx+m,p,t.cz+c,t.cx+_,g,t.cz+c,t.cx+_,g,t.cz-c,qr)}function eu(i,t,e){let n=!1;const s=i.length/2;for(let r=0,a=s-1;r<s;a=r++){const o=i[r*2],l=i[r*2+1],c=i[a*2],h=i[a*2+1];l>e!=h>e&&t<(c-o)*(e-l)/(h-l)+o&&(n=!n)}return n}function F_(i,t,e){const n=Math.max(.5,Math.max(t,e)/64),s=Math.max(1,Math.round(t/n)),r=Math.max(1,Math.round(e/n)),a=t/s,o=e/r,l=new Uint8Array(s*r);let c=0;for(let u=0;u<r;u++)for(let m=0;m<s;m++)eu(i,-t/2+(m+.5)*a,-e/2+(u+.5)*o)&&(l[u*s+m]=1,c++);if(!c)return null;const h=[],d=new Int32Array(s);let f=0;for(let u=0;u<3;u++){d.fill(0);let m=0,_=0,p=0,g=0,x=0;for(let y=0;y<r;y++){for(let v=0;v<s;v++)d[v]=l[y*s+v]?d[v]+1:0;const E=[];for(let v=0;v<=s;v++){const b=v<s?d[v]:0;for(;E.length&&d[E[E.length-1]]>=b;){const T=d[E.pop()],R=E.length?E[E.length-1]+1:0;T*(v-R)>m&&(m=T*(v-R),_=R,p=v-1,g=y-T+1,x=y)}E.push(v)}}const M=(p-_+1)*a,S=(x-g+1)*o;if(!m||M<2.4||S<2.4||u>0&&M*S<9)break;h.push({cx:-t/2+(_+p+1)/2*a,cz:-e/2+(g+x+1)/2*o,hw:M/2,hd:S/2}),f+=m;for(let y=g;y<=x;y++)l.fill(0,y*s+_,y*s+p+1)}return h.length&&f/c>=.7?h:null}function O_(i,t,e,n,s,r,a,o,l,c=0,h=!1){const d=e.length/2;let f=1/0,u=-1/0,m=0,_=0;for(let H=0;H<d;H++){const G=t.yAt(e[H*2],e[H*2+1]);G<f&&(f=G),G>u&&(u=G),m+=e[H*2],_+=e[H*2+1]}m/=d,_/=d;const p=Math.min(u,Math.max(f,t.yAt(m,_)))+.1,g=Math.max(n,p+(a===Fs?2.1:2.4),u+1.5),x=g-p,M=Math.max(0,s-g),S=Math.abs(tl(e)),y=Hr(e),E=S/(y.w*y.d||1),v=Math.min(y.w,y.d)/2,[b,T,R]=r;let C=jh(b,T,R);const L=b>T*1.2&&b>R*1.35&&b>105;let z;a===Os?z=Kh[Math.floor(l()*Kh.length)]:a===Fs?z=l()<.45?ji(C,Jh,.35):Zh[Math.floor(l()*Zh.length)]:z=L&&l()<.6?$h[Math.floor(l()*$h.length)]:Yh[Math.floor(l()*Yh.length)],o||(z=ji(z,Qh,.3),C=ji(C,Qh,.3)),i.frame(0,p,0,0);const P=a===L_&&x>=4.4&&x<6.6?x-2.75:0;if(P?(i.walls(e,f-p-.3,P-.22,ji(It(z,.5),P_,.5)),i.walls(e,P-.22,P,Jh),i.walls(e,P,x,z)):i.walls(e,f-p-.3,x,z),M<.7||a===Os&&(M<1.3||E<.78))if(a===Os){i.cap(e,x-.05,C),i.walls(e,x-.05,x+.45,It(z,.96));const H=Math.min(5,Math.floor(S/350)),G=Math.cos(y.heading),q=Math.sin(y.heading);for(let X=0;X<H;X++){const O=(l()-.5)*y.w*.5,k=(l()-.5)*y.d*.5,V=y.cx+O*G+k*q,pt=y.cz-O*q+k*G;i.box(V-1.1,x,pt-.8,V+1.1,x+.9,pt+.8,C_)}}else i.cap(e,x,C);else if(a===Os)i.frame(y.cx,p,y.cz,y.heading),tu(i,{cx:0,cz:0,hw:y.w/2,hd:y.d/2},x,Math.min(M,v*.45),.3,C,z);else{const H=Math.cos(y.heading),G=Math.sin(y.heading);let q;if(E>=.86)q=[{cx:0,cz:0,hw:y.w/2,hd:y.d/2}];else{const X=[];for(let O=0;O<d;O++){const k=e[O*2]-y.cx,V=e[O*2+1]-y.cz;X.push(k*H-V*G,k*G+V*H)}q=F_(X,y.w,y.d)}if(q){i.cap(e,x-.02,It(C,.9)),i.frame(y.cx,p,y.cz,y.heading);const X=Math.min(q[0].hw,q[0].hd),O=Math.min(Math.max(M,.6),X*.95),k=a===Fs?.2:.4;q.forEach((V,pt)=>{const Y=Math.min(V.hw,V.hd),ct=pt===0?O:Math.max(.4,O*Y/X),ut=l()<(a===Fs?.7:.36),at=q.length===1&&(c===N_||c!==I_&&ut);at?tu(i,V,x,ct,k,C,z):D_(i,{cx:V.cx,cz:V.cz,hw:V.hw+k,hd:V.hd+k},x,ct*(Y+k)/Y,C),pt===0&&h&&U_(i,V,x,at?ct:ct*(Y+k)/Y,at?0:k,y.heading)})}else{const X=E_(e,Math.min(2.4,Math.sqrt(S)*.2)),O=Math.min(M,1.6);for(let k=0;k<d;k++){const V=(k+1)%d;i.quad(e[k*2],x,e[k*2+1],e[V*2],x,e[V*2+1],X[V*2],x+O,X[V*2+1],X[k*2],x+O,X[k*2+1],C)}i.cap(X,x+O,It(C,1.04))}}if(a!==Fs&&S<2500){const H=P?1:Math.min(12,Math.max(1,Math.round(x/3))),G=a===Os?4.4:3.4;for(let q=0;q<d;q++){const X=(q+1)%d,O=e[q*2],k=e[q*2+1],V=e[X*2],pt=e[X*2+1],Y=Math.hypot(V-O,pt-k);if(Y<3.2)continue;let ct=-(pt-k)/Y,ut=(V-O)/Y;ct*((O+V)/2-m)+ut*((k+pt)/2-_)<0&&(ct=-ct,ut=-ut);const at=Math.atan2(ct,ut),xt=(V-O)*Math.cos(at)-(pt-k)*Math.sin(at);i.frame(xt>0?O:V,p,xt>0?k:pt,at);const Ct=Math.floor(Y/G);for(let $t=0;$t<H;$t++){const st=P+$t*3+.9;if(st+1.3>x-.2)break;for(let dt=0;dt<Ct;dt++){const Tt=(dt+.5)/Ct*Y;i.quad(Tt-.8,st,Wr,Tt+.8,st,Wr,Tt+.8,st+1.3,Wr,Tt-.8,st+1.3,Wr,R_,l()<.45?1:0)}}}}i.frame()}function z_(i,t,e=[],n=()=>!1){const s=new Le;s.name="buildings";const r=qn(),a=560,o=i.buildings,l=e.map(()=>{}),c=u=>{const m=o[u],_=new Array(m*2);for(let p=0;p<m*2;p++)_[p]=o[u+on+p]/10;return _},h=new Map;let d=0;for(let u=0;u<o.length;u+=on+o[u]*2){const m=o[u+on]/10,_=o[u+on+1]/10;if(n(m,_))continue;const p=e.findIndex(([M,S],y)=>!l[y]&&Math.abs(M-m)<60&&Math.abs(S-_)<60&&eu(c(u),M,S));if(p>=0){l[p]={poly:c(u),eave:o[u+1]/10,ridge:o[u+2]/10,roof:jh(o[u+3],o[u+4],o[u+5])},d++;continue}const g=`${Math.floor(m/a)}:${Math.floor(_/a)}`;let x=h.get(g);x||h.set(g,x=[]),x.push(u,d++)}let f=0;for(const u of h.values()){const m=new ie;for(let p=0;p<u.length;p+=2){const g=u[p];O_(m,t,c(g),o[g+1]/10,o[g+2]/10,[o[g+3],o[g+4],o[g+5]],o[g+6]&3,(o[g+6]&4)!==0,Xn(u[p+1]*7919+13),o[g+6]>>3&3,(o[g+6]&32)!==0)}f+=m.vertexCount/3;const _=new Jt(m.build(),r);_.castShadow=!0,_.receiveShadow=!0,s.add(_)}return{group:s,count:d,triangles:f,reserved:l}}const Yr=[{id:"6-beaudesert",house:[-27.5256631,153.0234391],street:[-27.5256287,153.0231545],lot:[[-27.5255518,153.0232401],[-27.5256698,153.0239981],[-27.5258215,153.0239682],[-27.525709,153.0231799]],roof:{ridgeBack:.62,frontGable:.83},walls:15261900,trim:16184558,path:[[-27.5256352,153.0232183],[-27.5256631,153.0233586]],driveway:[[-27.5256955,153.0231869],[-27.5257016,153.0232912],[-27.5257188,153.0233652],[-27.5257249,153.0234027]],fences:[{kind:"picket",height:1.05,pts:[[-27.5255562,153.0232457],[-27.5256803,153.0231991]],gate:[-27.5256352,153.0232168]},{kind:"paling",height:1,pts:[[-27.5255562,153.0232457],[-27.5255775,153.0233869]]},{kind:"paling",height:1.6,pts:[[-27.5255775,153.0233869],[-27.5256682,153.023989]]},{kind:"paling",height:1.2,pts:[[-27.5257208,153.0232735],[-27.525739,153.0234028]]},{kind:"paling",height:1.6,pts:[[-27.525739,153.0234028],[-27.525818,153.0239647]]},{kind:"paling",height:1.7,pts:[[-27.5256682,153.023989],[-27.525818,153.0239647]]}],clothesline:[-27.5256955,153.0236194],planters:[{at:[-27.5256844,153.0235368],along:1,across:2},{at:[-27.5257603,153.0236432],along:1.4,across:.8},{at:[-27.5257644,153.023671],along:1.4,across:.8},{at:[-27.5257669,153.0236964],along:1.4,across:.8}],beds:[{at:[-27.5255689,153.0232533],r:.9}],shrubs:[[-27.5256793,153.0232558],[-27.5256803,153.0232811],[-27.5256768,153.0232963]]}],B_=$(3163994),nu=$(13815234),k_=$(2828068),iu=$(14867920),$r=$(10126440),G_=$(9405814),su=$(10133668),H_=$(4151915),ru=$(9077624),V_=$(12894648),W_=$(10721922),au=$(7575375),ou=$(7904595),lu=$(7033664),cl=$(4157490),hl=$(8368216),X_=$(5062451),q_=2.75,cu=.45;function Kr(i,t,e,n){const s=t[3]-t[0],r=t[4]-t[1],a=t[5]-t[2],o=t[6]-t[0],l=t[7]-t[1],c=t[8]-t[2];let h=r*c-a*l,d=s*l-r*o;const f=Math.hypot(h,d)||1;h=h/f*e,d=d/f*e,i.quad(t[0]+h,t[1],t[2]+d,t[3]+h,t[4],t[5]+d,t[6]+h,t[7],t[8]+d,t[9]+h,t[10],t[11]+d,n),i.quad(t[9]-h,t[10],t[11]-d,t[6]-h,t[7],t[8]-d,t[3]-h,t[4],t[5]-d,t[0]-h,t[1],t[2]-d,n)}function hu(i,t,e,n,s,r){const a=[e[0][0],e[0][1]];for(let c=1;c<e.length;c++){const[h,d]=e[c-1],[f,u]=e[c],m=Math.max(1,Math.ceil(Math.hypot(f-h,u-d)/1.2));for(let _=1;_<=m;_++)a.push(h+(f-h)*_/m,d+(u-d)*_/m)}const o=a.length/2;let l=null;for(let c=0;c<o;c++){const h=Math.max(0,c-1),d=Math.min(o-1,c+1);let f=a[d*2]-a[h*2],u=a[d*2+1]-a[h*2+1];const m=Math.hypot(f,u)||1;f/=m,u/=m;const _=a[c*2]+u*n,p=a[c*2+1]-f*n,g=a[c*2]-u*n,x=a[c*2+1]+f*n,M=[_,t.yAt(_,p)+s,p,g,t.yAt(g,x)+s,x];l&&i.quad(l[0],l[1],l[2],l[3],l[4],l[5],M[3],M[4],M[5],M[0],M[1],M[2],r),l=M}}function Y_(i,t,[e,n,s,r],a){const o=Math.hypot(n[0]-e[0],n[1]-e[1]),l=Math.hypot(r[0]-e[0],r[1]-e[1]),c=Math.ceil(o/.8),h=Math.ceil(l/1.5),d=(f,u)=>{const m=e[0]+(n[0]-e[0])*f,_=e[1]+(n[1]-e[1])*f,p=r[0]+(s[0]-r[0])*f,g=r[1]+(s[1]-r[1])*f,x=m+(p-m)*u,M=_+(g-_)*u;return[x,t.yAt(x,M)+a,M]};for(let f=0;f<c;f++)for(let u=0;u<h;u++){const m=d(f/c,u/h),_=d(f/c,(u+1)/h),p=d((f+1)/c,(u+1)/h),g=d((f+1)/c,u/h);(_[0]-m[0])*(g[2]-m[2])-(_[2]-m[2])*(g[0]-m[0])<0?i.quad(m[0],m[1],m[2],_[0],_[1],_[2],p[0],p[1],p[2],g[0],g[1],g[2],f%2?au:ou):i.quad(m[0],m[1],m[2],g[0],g[1],g[2],p[0],p[1],p[2],_[0],_[1],_[2],f%2?au:ou)}}function Zr(i,t,e,n,s,r,a){const o=Math.hypot(n[0]-e[0],n[1]-e[1]);if(o<.3)return;const l=Math.max(1,Math.round(o/2.4)),c=Math.atan2(n[0]-e[0],n[1]-e[1]),h=r==="picket"?a:G_,d=m=>{const _=e[0]+(n[0]-e[0])*m,p=e[1]+(n[1]-e[1])*m;return[_,t.yAt(_,p),p]};for(let m=0;m<=l;m++){const[_,p,g]=d(m/l);i.frame(_,p,g,c),i.box(-.06,0,-.06,.06,s+.1,.06,It(h,.92))}i.frame();const f=(m,_,p,g,x,M)=>{const S=d(m),y=d(_);Kr(i,[S[0],S[1]+p,S[2],y[0],y[1]+p,y[2],y[0],y[1]+g,y[2],S[0],S[1]+g,S[2]],M,x)};if(r==="paling"){for(let m=0;m<l;m++)f(m/l,(m+1)/l,.05,s,h,.02);return}for(const m of[.25,s-.2])f(0,1,m,m+.08,It(h,.95),.02);const u=Math.floor(o/.16);for(let m=0;m<u;m++)f((m+.2)/u,(m+.75)/u,.08,s,h,.035)}function $_(i,t,e,n,s){i.frame(t,e,n,s),i.box(-.035,0,-.035,.035,2.05,.035,su);for(const[r,a]of[[1,0],[0,1],[-1,0],[0,-1]]){const o=Math.abs(a)*.025,l=Math.abs(r)*.025;i.box(Math.min(0,r*2.1)-o,2,Math.min(0,a*2.1)-l,Math.max(0,r*2.1)+o,2.05,Math.max(0,a*2.1)+l,su)}for(const r of[.8,1.4,2]){const a=[[r,0],[0,r],[-r,0],[0,-r]];for(let o=0;o<4;o++){const[l,c]=a[o],[h,d]=a[(o+1)%4],f=Math.hypot(h-l,d-c),u=-(d-c)/f*.015,m=(h-l)/f*.015;i.quad(l-u,2.06,c-m,l+u,2.06,c+m,h+u,2.06,d+m,h-u,2.06,d-m,$(15132386))}}i.frame()}function uu(i,t,e,n,s,r,a,o,l,c){const h=o-l,d=Math.max(2,Math.round(h/.185)),f=.27,u=d*f;for(let p=1;p<=d;p++){const g=o-h*p/d,x=t+n*f*(p-1),M=e+s*f*(p-1),S=t+n*f*p,y=e+s*f*p;i.box(Math.min(x,S,x+r,S+r),g-.05,Math.min(M,y,M+a,y+a),Math.max(x,S,x+r,S+r),g,Math.max(M,y,M+a,y+a),$r)}const m=t+n*u,_=e+s*u;for(const p of[0,1]){const g=r*p,x=a*p;Kr(i,[t+g,o-.3,e+x,m+g,l-.3,_+x,m+g,l,_+x,t+g,o,e+x],.025,c),Kr(i,[t+g,o+.9,e+x,m+g,l+.9,_+x,m+g,l+.97,_+x,t+g,o+.97,e+x],.025,c);for(const M of[0,.5,1]){const S=t+g+n*u*M,y=e+x+s*u*M,E=o-h*M;i.box(S-.035,E,y-.035,S+.035,E+.95,y+.035,c,null)}}return[m+r/2,_+a/2]}function K_(i,t,e,n,s){const r=Hr(e.poly);let a=r.heading,o=r.w,l=r.d,c=-1/0;for(let st=0;st<4;st++){const dt=r.heading+st*Math.PI/2,Tt=Math.sin(dt)*(n[0]-r.cx)+Math.cos(dt)*(n[1]-r.cz);Tt>c&&(c=Tt,a=dt,o=st%2?r.d:r.w,l=st%2?r.w:r.d)}let h=1/0,d=-1/0;for(let st=0;st<e.poly.length;st+=2){const dt=t.yAt(e.poly[st],e.poly[st+1]);h=Math.min(h,dt),d=Math.max(d,dt)}const f=Math.min(d,Math.max(h,t.yAt(r.cx,r.cz))),u=Math.max(e.eave-f,2.6),m=Math.max(e.ridge-e.eave,.8),_=Math.max(.3,u-q_),p=o/2,g=l/2,x=p-cu,M=g-cu,S=$(s.walls),y=$(s.trim),E=e.roof,v=h-f-.3,b=Math.max(.16,d-f+.14);if(i.frame(r.cx,f,r.cz,a),i.box(-x,v,-M,x,b,M,ru,ru),_>1.2){i.box(-x+.3,b,-M+.3,x-.3,_-.3,M-.3,k_,null);const st=dt=>{const Tt=Math.max(2,Math.round(dt*2/2.2)+1);return Array.from({length:Tt},(Bt,Ut)=>-dt+.1+(dt*2-.2)*Ut/(Tt-1))};for(const dt of st(x))for(const Tt of[-M+.1,M-.1])i.box(dt-.1,v,Tt-.1,dt+.1,_-.28,Tt+.1,nu,null);for(const dt of st(M))for(const Tt of[-x+.1,x-.1])i.box(Tt-.1,v,dt-.1,Tt+.1,_-.28,dt+.1,nu,null);for(let dt=-x+.3;dt<x-.3;dt+=.22)for(const Tt of[M-.04,-M+.01])i.box(dt,b+.1,Tt,dt+.12,_-.3,Tt+.03,iu,null);for(let dt=-M+.3;dt<M-.3;dt+=.22)for(const Tt of[x-.04,-x+.01])i.box(Tt,b+.1,dt,Tt+.03,_-.3,dt+.12,iu,null)}i.box(-x-.03,_-.28,-M-.03,x+.03,_,M+.03,y,null);for(let st=_,dt=0;st<u-.01;st+=.28,dt++)i.box(-x,st,-M,x,Math.min(st+.28,u),M,dt%2?It(S,.955):S,null);for(const st of[-x,x])for(const dt of[-M,M])i.box(st-.07,_,dt-.07,st+.07,u,dt+.07,y,null);const T=(st,dt,Tt)=>i.frame(i.wx(st,dt),f,i.wz(st,dt),a+Tt),R=(st,dt,Tt)=>{const Bt=_+.95,Ut=_+2.15;i.quad(st-dt/2,Bt,.04,st+dt/2,Bt,.04,st+dt/2,Ut,.04,st-dt/2,Ut,.04,B_,Tt?1:0),i.box(st-dt/2-.07,Bt-.07,0,st+dt/2+.07,Bt,.07,y),i.box(st-dt/2-.07,Ut,0,st+dt/2+.07,Ut+.07,.07,y);for(const ee of[st-dt/2-.07,st+dt/2,st-.025])i.box(ee,Bt,0,ee+(ee===st-.025?.05:.07),Ut,.06,y,null);i.quad(st-dt/2-.15,Ut+.12,.55,st+dt/2+.15,Ut+.12,.55,st+dt/2+.15,Ut+.42,.02,st-dt/2-.15,Ut+.42,.02,It(E,.94))},C=st=>{i.quad(st-.45,_,.04,st+.45,_,.04,st+.45,_+2.05,.04,st-.45,_+2.05,.04,H_),i.box(st-.52,_+2.05,0,st+.52,_+2.12,.06,y)},L=[[-x,M,0,x*2],[x,M,Math.PI/2,M*2],[x,-M,Math.PI,x*2],[-x,-M,-Math.PI/2,M*2]],[z,P,B,H]=L,G=(st,dt)=>{i.frame(r.cx,f,r.cz,a),T(st[0],st[1],st[2]),dt(st[3]),i.frame(r.cx,f,r.cz,a)};G(z,st=>{C(1),R(st*.48,1.7,!0),R(st*.8,1.7,!1)});for(const st of[P,H])G(st,dt=>{for(let Tt=0;Tt<4;Tt++)R(dt*(.14+Tt*.24),1.4,Tt%2===(st===P?0:1))});G(B,st=>{R(st*.28,1.6,!1),R(st*.56,1.6,!0),C(st-1)});const q=-x+.15,X=-x+1.85,O=M+1.25;i.box(q,_-.14,M,X,_,O,$r);for(const st of[q+.05,X-.05])i.box(st-.05,0,O-.1,st+.05,_+2.3,O,y,null);i.box(q,_+.12,O-.05,X,_+.98,O,y,null),i.box(q,_+.12,M,q+.05,_+.98,O,y,null),i.quad(q-.15,_+2.3,O+.2,X+.15,_+2.3,O+.2,X+.15,_+2.6,M,q-.15,_+2.6,M,It(E,.96));const k=uu(i,X,M+.12,1,0,0,1,_,.1,y),V=-x+.2,pt=-x+1.9,Y=-M-1.2;i.box(V,_-.14,Y,pt,_,-M,$r);for(const st of[V+.05,pt-.05])i.box(st-.05,0,Y,st+.05,_+.98,Y+.1,y,null);i.box(V,_+.12,Y,V+.05,_+.98,-M,y,null),i.box(pt-.05,_+.12,Y,pt,_+.98,-M,y,null),i.box(-x+.1,u-.45,-M-1.4,x-1.4,u-.37,-M,It(E,.97),void 0,y),uu(i,V+.3,Y,0,-1,1,0,_,.1,y);const ct=g-s.roof.ridgeBack*l,ut=u+m,at=u+m*s.roof.frontGable,xt=g-s.roof.frontGable*(g-ct);i.quad(-p,u-.02,g,-p,u-.02,-g,p,u-.02,-g,p,u-.02,g,y),i.tri(-p,u,g,0,at,g,0,at,xt,E),i.tri(p,u,g,0,at,xt,0,at,g,E),i.quad(-p,u,g,0,at,xt,0,ut,ct,-p,ut,ct,E),i.quad(p,u,g,p,ut,ct,0,ut,ct,0,at,xt,E),i.quad(-p,ut,ct,p,ut,ct,p,u,-g,-p,u,-g,E),i.tri(-x,u,M,x,u,M,0,at,M,S),i.quad(-.3,at-.75,M+.03,.3,at-.75,M+.03,.3,at-.4,M+.03,-.3,at-.4,M+.03,It(S,.6)),i.tri(-x,u,M,-x,ut,ct,-x,u,-M,S),i.tri(x,u,-M,x,ut,ct,x,u,M,S);const Ct=(st,dt,Tt,Bt,Ut,ee)=>Kr(i,[st,dt-.22,Tt,Bt,Ut-.22,ee,Bt,Ut-.03,ee,st,dt-.03,Tt],.02,y);Ct(-p,u,g,0,at,g),Ct(0,at,g,p,u,g);for(const st of[-p,p])Ct(st,u,g,st,ut,ct),Ct(st,ut,ct,st,u,-g);i.box(-p,u-.12,-g-.1,p,u,-g,y);const $t=[i.wx(k[0],k[1]),i.wz(k[0],k[1])];return i.frame(),$t}function Z_(i,t){const e=Yr.flatMap((n,s)=>{const r=t[s];if(!r)return[];const a=Hr(r.poly),o=c=>Yn(i,c[0],c[1]),l=[a.cx,a.cz];return[{obb:a,lines:[[...n.path.map(o),l],n.driveway.map(o)]}]});return(n,s)=>{for(const{obb:r,lines:a}of e){if(Math.abs(n-r.cx)>80||Math.abs(s-r.cz)>80)continue;const o=Math.cos(r.heading),l=Math.sin(r.heading),c=n-r.cx,h=s-r.cz;if(Math.abs(c*o-h*l)<r.w/2+1&&Math.abs(c*l+h*o)<r.d/2+1)return!0;for(const d of a)for(let f=1;f<d.length;f++){const[u,m]=d[f-1],[_,p]=d[f],g=Math.max(0,Math.min(1,((n-u)*(_-u)+(s-m)*(p-m))/((_-u)**2+(p-m)**2||1)));if(Math.hypot(n-u-(_-u)*g,s-m-(p-m)*g)<1.8)return!0}}return!1}}function fu(i){const t=Yr.map(e=>e.lot.map(n=>Yn(i,n[0],n[1])));return(e,n)=>t.some(s=>{let r=!1,a=!1;for(let o=0,l=s.length-1;o<s.length;l=o++){const[c,h]=s[o],[d,f]=s[l];h>n!=f>n&&e<(d-c)*(n-h)/(f-h)+c&&(r=!r);const u=Math.max(0,Math.min(1,((e-c)*(d-c)+(n-h)*(f-h))/((d-c)**2+(f-h)**2||1)));Math.hypot(e-c-(d-c)*u,n-h-(f-h)*u)<2.5&&(a=!0)}return r||a})}function J_(i){return Yr.map(t=>Yn(i,t.house[0],t.house[1]))}function Q_(i,t,e){const n=new ie,s=new ie,r=h=>Yn(i,h[0],h[1]);Yr.forEach((h,d)=>{const f=e[d];if(!f)return;const u=h.lot.map(r),m=$(h.trim),_=Math.atan2(u[1][0]-u[0][0],u[1][1]-u[0][1]);Y_(s,t,u,.1);const p=K_(n,t,f,r(h.street),h);hu(s,t,[...h.path.map(r),p],.45,.16,V_);const g=h.driveway.map(r);for(const x of[-.75,.75]){const M=g.map(([S,y],E)=>{const[v,b]=g[Math.max(0,E-1)],[T,R]=g[Math.min(g.length-1,E+1)],C=Math.hypot(T-v,R-b)||1;return[S+(R-b)/C*x,y-(T-v)/C*x]});hu(s,t,M,.28,.14,W_)}for(const x of h.fences){const M=x.pts.map(r);for(let S=1;S<M.length;S++){const y=M[S-1],E=M[S];if(!x.gate){Zr(n,t,y,E,x.height,x.kind,m);continue}const v=r(x.gate),b=Math.hypot(E[0]-y[0],E[1]-y[1]),T=((v[0]-y[0])*(E[0]-y[0])+(v[1]-y[1])*(E[1]-y[1]))/(b*b),R=.5/b,C=P=>[y[0]+(E[0]-y[0])*P,y[1]+(E[1]-y[1])*P];Zr(n,t,y,C(T-R),x.height,x.kind,m),Zr(n,t,C(T+R),E,x.height,x.kind,m),Zr(n,t,C(T-R+.06/b),C(T+R-.06/b),x.height-.15,x.kind,m);const[L,z]=C(T+R+.35/b);n.frame(L,t.yAt(L,z),z,Math.atan2(E[0]-y[0],E[1]-y[1])),n.box(-.04,0,-.04,.04,1,.04,m,null),n.box(-.14,1,-.2,.14,1.22,.2,$(4872786)),n.frame()}}if(h.clothesline){const[x,M]=r(h.clothesline);$_(n,x,t.yAt(x,M),M,_+Math.PI/4)}for(const x of h.planters){const[M,S]=r(x.at);n.frame(M,t.yAt(M,S),S,_),n.box(-x.across/2,0,-x.along/2,x.across/2,.4,x.along/2,$r,X_);for(let y=0;y<3;y++)n.blob((y-1)*x.across/3.4,.5,(y%2-.5)*x.along*.4,.22,.2,.22,5,3,cl,hl);n.frame()}for(const x of h.beds){const[M,S]=r(x.at);n.frame(M,t.yAt(M,S),S,0),n.cyl(0,.05,0,x.r,x.r,.12,10,lu,lu),n.blob(0,.55,0,x.r*.6,.5,x.r*.6,6,4,cl,hl),n.frame()}for(const x of h.shrubs){const[M,S]=r(x);n.frame(M,t.yAt(M,S),S,0),n.blob(0,.32,0,.38,.36,.38,6,4,cl,hl),n.frame()}});const a=new Le;a.name="detail";const o=new Jt(n.build(),qn());o.castShadow=!0,o.receiveShadow=!0;const l=s.build();l.deleteAttribute("glow");const c=new Jt(l,new Xe({vertexColors:!0,roughness:.95,metalness:0,side:be,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}));return c.receiveShadow=!0,c.name="detail-ground",a.add(c,o),{group:a,ground:c}}const du=[9405814,8747884,10129796,7305836,13617332,6253414,9080716].map($),Jr=1.6,pu=560;function j_(i,t,e){const n=new Le;n.name="fences";const s=i.fences,r=new Map;for(let l=0;l+3<s.length;l+=4){const c=s[l]/10,h=s[l+1]/10,d=s[l+2]/10,f=s[l+3]/10,u=Math.hypot(d-c,f-h);if(u<1||e((c+d)/2,(h+f)/2))continue;const m=`${Math.floor(c/pu)}:${Math.floor(h/pu)}`;let _=r.get(m);_||r.set(m,_=new ie);const p=du[l/4%du.length],g=It(p,.92),x=-(f-h)/u*.04,M=(d-c)/u*.04,S=Math.max(1,Math.ceil(u/5));let y=c,E=h,v=t.yAt(c,h);for(let b=1;b<=S;b++){const T=c+(d-c)*b/S,R=h+(f-h)*b/S,C=t.yAt(T,R);_.quad(y+x,v-.2,E+M,T+x,C-.2,R+M,T+x,C+Jr,R+M,y+x,v+Jr,E+M,p),_.quad(T-x,C-.2,R-M,y-x,v-.2,E-M,y-x,v+Jr,E-M,T-x,C+Jr,R-M,g),y=T,E=R,v=C}}const a=new Wc({vertexColors:!0});let o=0;for(const l of r.values()){o+=l.vertexCount/6;const c=l.build();c.deleteAttribute("glow");const h=new Jt(c,a);h.castShadow=!0,h.receiveShadow=!0,n.add(h)}return{group:n,count:o}}const mu=.05;class ul{constructor(t,e,n){it(this,"mesh");it(this,"current","");it(this,"level");it(this,"wet");it(this,"time",{value:0});it(this,"lower",{value:0});it(this,"loaded",new Map);this.hf=t,this.info=e,this.file=n;const{nx:s,nz:r}=t,a=s*r;this.level=new Float32Array(a),this.wet=new Uint8Array(a);const o=new Float32Array(a*3),l=new Float32Array(a*3);for(let d=0;d<r;d++)for(let f=0;f<s;f++){const u=d*s+f;o[u*3]=t.xMin+f*t.dx,o[u*3+1]=t.y[u],o[u*3+2]=t.zMin+d*t.dz,l[u*3+1]=1}const c=new Re;c.setAttribute("position",new Ae(o,3)),c.setAttribute("normal",new Ae(l,3)),c.setAttribute("aLevel",new Ae(this.level,1)),c.setAttribute("aWet",new Ae(new Float32Array(a),1)),c.setIndex([]);const h=new Xe({color:16777215,roughness:.25,metalness:0,transparent:!0,depthWrite:!1});h.onBeforeCompile=d=>{d.uniforms.uTime=this.time,d.uniforms.uLower=this.lower,d.uniforms.uNight=ts,d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
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
          if (vDepth < ${mu.toFixed(2)} || vWet < 0.35) discard;
          // pale and a little muddy where it is shallow, dark blue as it deepens, so it reads as water against the ground
          float deep = smoothstep(0.1, 3.0, vDepth);
          diffuseColor.rgb = mix(vec3(0.36, 0.60, 0.74), vec3(0.05, 0.18, 0.40), deep) * (1.0 - 0.6 * uNight);
          diffuseColor.a = mix(0.7, 0.93, smoothstep(0.1, 1.5, vDepth));`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          {
            float nearby = 1.0 - smoothstep(200.0, 1500.0, length(cameraPosition - vWPos));
            vec2 p = vWPos.xz * 0.12 + vec2(uTime * 0.07, uTime * 0.04);
            vec2 ripple = vec2(sin(p.x * 3.1 + sin(p.y * 2.3)), cos(p.y * 2.7 + sin(p.x * 1.9))) * 0.035 * nearby;
            normal = normalize((viewMatrix * vec4(ripple.x, 1.0, ripple.y, 0.0)).xyz);
          }`)},h.customProgramCacheKey=()=>"moorooka-flood-levels",this.mesh=new Jt(c,h),this.mesh.name="flood",this.mesh.renderOrder=40,this.mesh.frustumCulled=!1,this.mesh.visible=!1}static async load(t,e,n,s){const r=await fetch(e,{signal:s});if(!r.ok)throw new Error("Could not load the floods");return new ul(t,await r.json(),n)}async show(t,e){if(this.current=t,!t){this.mesh.visible=!1;return}let n=this.loaded.get(t);if(!n){const l=this.info.events.some(p=>p.id===t)?this.file(t):void 0;if(!l)throw new Error("This model has no such flood");const c=await fetch(l,{signal:e});if(!c.ok)throw new Error("Could not load that flood");const h=await Xh(await c.arrayBuffer()),[d,f]=this.info.grid;if(h.width!==d||h.height!==f)throw new Error("That flood does not match this model");const{hf:u}=this,m=Math.round(u.dx/(u.sizeX/d)),_=u.nx*u.nz;n={level:new Float32Array(_),wet:new Uint8Array(_)};for(let p=0;p<u.nz;p++)for(let g=0;g<u.nx;g++){const x=(p*m*d+g*m)*h.channels;n.level[p*u.nx+g]=(h.data[x]<<8|h.data[x+1])/this.info.levelScale-this.info.levelOffset,n.wet[p*u.nx+g]=h.data[x+2]>127?1:0}this.loaded.set(t,n)}if(this.current!==t)return;const{nx:s,nz:r}=this.hf,a=this.mesh.geometry;this.level.set(n.level),this.wet.set(n.wet),a.getAttribute("aWet").array.set(n.wet),a.getAttribute("aLevel").needsUpdate=!0,a.getAttribute("aWet").needsUpdate=!0;const o=[];for(let l=0;l<r-1;l++)for(let c=0;c<s-1;c++){const h=l*s+c,d=h+1,f=h+s,u=f+1;n.wet[h]+n.wet[d]+n.wet[f]+n.wet[u]>0&&o.push(h,f,d,d,f,u)}a.setIndex(o),this.mesh.visible=!0}setLower(t){this.lower.value=Math.max(0,t)}surfaceAt(t,e,n=!1){const{hf:s}=this;if(!this.mesh.visible||!s.inside(t,e))return-1/0;const r=Math.round((e-s.zMin)/s.dz)*s.nx+Math.round((t-s.xMin)/s.dx);if(!this.wet[r])return-1/0;const a=this.level[r]-(n?0:this.lower.value);return a-s.y[r]>mu?a:-1/0}tick(t){this.time.value=t}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}const zs=$(9278358),fl=$(16053230),gu=$(3163994),tv=$(2054824),ev=$(16040479),xu=[15327951,3099196,2504783,8007210,3816770,13214282,5209226,11879727].map($);function nv(i,t,e,n,s=()=>!1){const r=new ie,a=Xn(41050),o=i.busStops??[];for(let f=0;f<o.length;f+=2){const u=o[f]/10,m=o[f+1]/10,_=e.nearest(u,m,30);if(!_||n(u,m))continue;let p=u-_.px,g=m-_.pz;const x=Math.hypot(p,g);x<.5?(p=-_.tz,g=_.tx):(p/=x,g/=x);const M=_.width/2+2.4,S=_.px+p*M,y=_.pz+g*M;if(r.frame(S,t.yAt(S,y),y,Math.atan2(-p,-g)),r.box(-2.3,0,.9,-2.2,2.6,1,zs,null),r.box(-2.5,2,.88,-2,2.6,1.02,tv),r.box(-2.5,1.86,.88,-2,2,1.02,ev),a()<.5){for(const E of[-1.7,1.7])r.box(E-.05,0,-.6,E+.05,2.35,-.5,zs,null);r.box(-1.9,2.35,-.8,1.9,2.45,.8,It(zs,.8)),r.box(-1.7,.5,-.62,1.7,2.1,-.58,gu,null),r.box(-1.3,.42,-.5,1.3,.5,-.1,$(10126440))}}for(const f of i.pitches){const u=f.p.map(x=>x/10),m=Hr(u);if(n(m.cx,m.cz))continue;const _=m.w>=m.d?m.w:m.d,p=Math.min(m.w,m.d),g=m.w>=m.d?m.heading+Math.PI/2:m.heading;if(r.frame(m.cx,t.yAt(m.cx,m.cz),m.cz,g),f.t==="Oval"&&/Football/.test(f.s)&&_>60)for(const x of[-1,1]){const M=x*(_/2-4);for(const S of[-2.8,2.8])r.cyl(S,0,M,.08,.08,8,5,fl);r.box(-2.8,2.9,M-.05,2.8,3.02,M+.05,fl)}else if(f.s==="Tennis"){r.box(-p/2+.6,0,-.03,p/2-.6,.95,.03,$(2764595)),r.box(-p/2+.6,.95,-.04,p/2-.6,1.02,.04,fl);for(const x of[-p/2+.6,p/2-.6])r.cyl(x,0,0,.05,.05,1.07,5,zs)}else if(f.s==="Netball")for(const x of[-1,1]){const M=x*(_/2-.3);r.cyl(0,0,M,.05,.05,3.05,5,zs),r.box(-.2,3.02,M-x*.42,.2,3.07,M,$(13644844))}}r.frame();const[,l]=Yn(i.meta,-27.53,153.0245),[,c]=Yn(i.meta,-27.5346,153.0245),h=i.buildings;for(let f=0;f<h.length;f+=on+h[f]*2){const u=h[f],m=h[f+on+1]/10;if(m<l||m>c)continue;let _=0,p=0;for(let x=0;x<u;x++)_+=h[f+on+x*2]/10,p+=h[f+on+x*2+1]/10;_/=u,p/=u;const g=xu[Math.floor(a()*xu.length)];for(let x=0;x<u;x++){const M=(x+1)%u,S=h[f+on+x*2]/10,y=h[f+on+x*2+1]/10,E=h[f+on+M*2]/10,v=h[f+on+M*2+1]/10,b=Math.hypot(E-S,v-y);if(b<5)continue;const T=(S+E)/2,R=(y+v)/2,C=e.nearest(T,R,16);if(!C||i.names[C.name]!=="Beaudesert Road"||n(T,R)||s(T,R))continue;let L=-(v-y)/b,z=(E-S)/b;if(L*(T-_)+z*(R-p)<0&&(L=-L,z=-z),(C.px-T)*L+(C.pz-R)*z<C.dist*.6)continue;const P=Math.atan2(L,z),B=(E-S)*Math.cos(P)-(v-y)*Math.sin(P),H=Math.max(t.yAt(S,y),t.yAt(E,v))+.1;r.frame(B>0?S:E,H,B>0?y:v,P);const G=Math.min(2.6,Math.max(1.2,C.dist-C.width/2-.6));r.quad(.4,.4,.06,b-.4,.4,.06,b-.4,2.7,.06,.4,2.7,.06,gu,.9),r.box(.2,3,0,b-.2,3.16,G,g,It(g,.9),It(g,.75)),r.box(.2,2.75,G-.08,b-.2,3.3,G,It(g,1.15),null)}}r.frame();const d=new Jt(r.build(),qn());return d.castShadow=!0,d.receiveShadow=!0,d.name="furniture",d}const is=$(12170925),_u=$(13091768),iv=[.34,.3,.26,.22],Qr=.22,sv=.13,rv=1.1,dl=1.3,vu=16;function av(i,t,e,n,s={}){const r=new ie,a=new Map,o=(u,m)=>{const _=`${Math.floor((m+e.sizeZ/2)/e.sizeZ*vu)}_${Math.floor((u+e.sizeX/2)/e.sizeX*vu)}`;let p=a.get(_);return p||a.set(_,p=new ie),p},l=(u,m,_)=>!e.inside(u,m,4)||n(u,m)?!1:t.clear(u,m,14,_);i.forEach((u,m)=>{if(u.cls>3||u.flags&(Gr|Ds))return;const _=u.pts.length/3,p=u.width/2,g=iv[u.cls],x=s[String(u.index)];for(const M of[-1,1]){const S=x?x[M>0?0:1]/10:NaN,y=x?S>0:u.cls<=2||(m%2?1:-1)===M,E=x?Math.max(Qr+.1,S-dl/2):Qr+rv;let v=null;for(let b=0;b<_;b++){const T=u.pts[b*3],R=u.pts[b*3+2],C=Math.max(b-1,0),L=Math.min(b+1,_-1);let z=u.pts[L*3]-u.pts[C*3],P=u.pts[L*3+2]-u.pts[C*3+2];const B=Math.hypot(z,P)||1;z/=B,P/=B;const H=-P*M,G=z*M,q=At=>[T+H*(p+At),R+G*(p+At)],[X,O]=q(0),[k,V]=q(Qr),[pt,Y]=q(Qr/2),ct=e.yAt(X,O)+g,ut=e.yAt(k,V),at=[X,ct,O,k,Math.max(ct,ut+.05)+sv,V,ut],xt=l(pt,Y,.02),[Ct,$t]=q(E),[st,dt]=q(E+dl),[Tt,Bt]=q(E+dl/2),Ut=[Ct,e.yAt(Ct,$t)+.09,$t,st,e.yAt(st,dt)+.09,dt],ee=y&&l(Tt,Bt,.6)&&l(st,dt,.3);if(v){const At=v;if(xt&&At.kerb){const Yt=at[4],ce=At.k[4];M>0?(r.quad(At.k[0],At.k[1],At.k[2],at[0],at[1],at[2],at[0],Yt,at[2],At.k[0],ce,At.k[2],It(is,.9)),r.quad(At.k[0],ce,At.k[2],at[0],Yt,at[2],at[3],Yt,at[5],At.k[3],ce,At.k[5],is),r.quad(At.k[3],ce,At.k[5],at[3],Yt,at[5],at[3],at[6]-.3,at[5],At.k[3],At.k[6]-.3,At.k[5],It(is,.85))):(r.quad(at[0],at[1],at[2],At.k[0],At.k[1],At.k[2],At.k[0],ce,At.k[2],at[0],Yt,at[2],It(is,.9)),r.quad(at[0],Yt,at[2],At.k[0],ce,At.k[2],At.k[3],ce,At.k[5],at[3],Yt,at[5],is),r.quad(at[3],Yt,at[5],At.k[3],ce,At.k[5],At.k[3],At.k[6]-.3,At.k[5],at[3],at[6]-.3,at[5],It(is,.85)))}if(ee&&At.path){const Yt=b%2?_u:It(_u,.955),ce=o(Tt,Bt);M>0?ce.quad(At.f[0],At.f[1],At.f[2],Ut[0],Ut[1],Ut[2],Ut[3],Ut[4],Ut[5],At.f[3],At.f[4],At.f[5],Yt):ce.quad(Ut[0],Ut[1],Ut[2],At.f[0],At.f[1],At.f[2],At.f[3],At.f[4],At.f[5],Ut[3],Ut[4],Ut[5],Yt)}}v={k:at,kerb:xt,f:Ut,path:ee}}}});const c=new Xe({vertexColors:!0,roughness:.94,metalness:0,side:be,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),h=(u,m)=>{const _=u.build();_.deleteAttribute("glow");const p=new Jt(_,c);return p.receiveShadow=!0,p.name=m,p},d=new Le;d.name="kerbs",d.add(h(r,"kerb"));const f=new Map;for(const[u,m]of a){const _=h(m,`footpaths ${u}`);f.set(u,_),d.add(_)}return{group:d,showPaths(u){let m=!1;for(const[_,p]of f){const g=!u.has(_);p.visible!==g&&(p.visible=g,m=!0)}return m}}}function ov(i,t){const e=new ie,n=$(9278358);e.cyl(0,0,0,.11,.07,8.2,5,n),e.box(-.05,8.1,0,.05,8.22,2.2,n),e.box(-.22,8,1.7,.22,8.14,2.5,$(5922659)),e.quad(-.2,7.99,2.48,.2,7.99,2.48,.2,7.99,1.72,-.2,7.99,1.72,$(16773320),3);const s=i.length/4,r=new Vn(e.build(),qn(),s),a=document.createElement("canvas");a.width=a.height=64;const o=a.getContext("2d"),l=o.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(255,214,150,0.85)"),l.addColorStop(.45,"rgba(255,196,120,0.32)"),l.addColorStop(1,"rgba(255,180,100,0)"),o.fillStyle=l,o.fillRect(0,0,64,64);const c=new Tr(a);c.colorSpace=we;const h=new li(34,34);h.rotateX(-Math.PI/2);const d=new Hn({map:c,transparent:!0,opacity:0,blending:fa,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),f=new Vn(h,d,s);f.renderOrder=3;const u=new ne,m=new rn,_=new Q(0,1,0),p=new Q(1,1,1),g=new Q;for(let x=0;x<s;x++){const M=i[x*4],S=i[x*4+1],y=i[x*4+2],E=i[x*4+3];m.setFromAxisAngle(_,E),r.setMatrixAt(x,u.compose(g.set(M,S,y),m,p));const v=M+Math.sin(E)*2.1,b=y+Math.cos(E)*2.1;f.setMatrixAt(x,u.compose(g.set(v,t.yAt(v,b)+.5,b),m.identity(),p))}return r.castShadow=!1,r.computeBoundingSphere(),f.computeBoundingSphere(),f.onBeforeRender=()=>{d.opacity=ts.value*.9},f.visible=!0,{lights:r,pools:f,poolMat:d}}const jr=[16053490,16053490,16053490,13225168,10725291,5593438,2040100,2838410,11020586,2054728,14266938,8368595],Bs=$(1381655),Mu=$(10133154),Su=$(1713198);function yu(i,t,e,n,s,r,a,o=8){const l=t-r/2*a,c=t+r/2*a;for(let f=0;f<o;f++){const u=f/o*Math.PI*2,m=(f+1)/o*Math.PI*2,_=e+Math.cos(u)*s,p=n+Math.sin(u)*s,g=e+Math.cos(m)*s,x=n+Math.sin(m)*s;a>0?(i.quad(l,_,p,l,g,x,c,g,x,c,_,p,Bs),i.tri(c,e,n,c,_,p,c,g,x,Bs)):(i.quad(l,g,x,l,_,p,c,_,p,c,g,x,Bs),i.tri(c,e,n,c,g,x,c,_,p,Bs))}const h=s*.52,d=c+.012*a;a>0?i.quad(d,e-h,n-h,d,e-h,n+h,d,e+h,n+h,d,e+h,n-h,Mu):i.quad(d,e-h,n+h,d,e-h,n-h,d,e+h,n-h,d,e+h,n+h,Mu)}function ta(i,t,e,n,s,r,a,o,l=0){i.quad(r,e,t,r,s,n,a,s,n,a,e,t,o,l)}function bu(i,t,e,n,s){const[r,a]=t[0];for(let o=1;o<t.length-1;o++){const[l,c]=t[o],[h,d]=t[o+1];n>0?i.tri(e,a,r,e,d,h,e,c,l,s):i.tri(e,a,r,e,c,l,e,d,h,s)}}function Eu(){const i=new ie,t=$(16777215),e=$(2763824),n=.88,s=[[-2.1,.28],[-2.16,.6],[-2.06,.94],[-1.3,.99],[1.05,.97],[1.95,.84],[2.16,.6],[2.1,.28]];for(let o=0;o<s.length-1;o++)ta(i,s[o][0],s[o][1],s[o+1][0],s[o+1][1],-n,n,o===0||o===s.length-2?It(t,.92):t);for(const o of[-1,1])bu(i,s,n*o,o,t);i.quad(-n,.28,-2.1,n,.28,-2.1,n,.28,2.1,-n,.28,2.1,Bs);const r=.8,a=[[-1.42,.97],[-.98,1.45],[.32,1.45],[1.08,.97]];for(let o=0;o<a.length-1;o++)ta(i,a[o][0],a[o][1],a[o+1][0],a[o+1][1],-r+.06,r-.06,o===1?t:Su,o===1?0:.15);for(const o of[-1,1]){bu(i,a,r*o,o,Su),ta(i,-1.42,.97,-.98,1.45,o>0?r-.07:-r,o>0?r:-r+.07,t),ta(i,.32,1.45,1.08,.97,o>0?r-.07:-r,o>0?r:-r+.07,t);const l=(r+.006)*o;i.quad(l,.97,-.32*o,l,.97,-.22*o,l,1.45,-.22*o,l,1.45,-.32*o,t);const c=(n+.006)*o;for(const h of[-1.28,-.27,.95])i.quad(c,.42,(h-.012)*o,c,.42,(h+.012)*o,c,.96,(h+.012)*o,c,.96,(h-.012)*o,e);for(const h of[-.5,.55])i.quad(c,.8,(h-.09)*o,c,.8,(h+.09)*o,c,.84,(h+.09)*o,c,.84,(h-.09)*o,e);i.box(Math.min(n*o,(n+.16)*o),.98,.92,Math.max(n*o,(n+.16)*o),1.1,1,t)}for(const o of[-1,1])for(const l of[-1.3,1.32])yu(i,(n-.1)*o,.33,l,.33,.24,o);i.quad(-n,.3,2.165,n,.3,2.165,n,.5,2.165,-n,.5,2.165,e),i.quad(n,.3,-2.165,-n,.3,-2.165,-n,.5,-2.165,n,.5,-2.165,e),i.quad(-.26,.36,2.17,.26,.36,2.17,.26,.49,2.17,-.26,.49,2.17,$(16053486)),i.quad(.26,.5,-2.17,-.26,.5,-2.17,-.26,.63,-2.17,.26,.63,-2.17,$(16053486));for(const o of[-.8,.48])i.quad(o,.6,2.17,o+.32,.6,2.17,o+.32,.78,2.14,o,.78,2.14,$(16776166),2.2),i.quad(o+.32,.66,-2.165,o,.66,-2.165,o,.84,-2.13,o+.32,.84,-2.13,$(13770527),.9);return i.build()}const lv=$(8352874),wu=$(10133154),Tu=$(7304312),ea=.44,cv=.2,Au=1.067;function pl(i,t){const e=[i[0]/10,i[1]/10];for(let l=2;l<i.length;l+=2){const c=i[l-2]/10,h=i[l-1]/10,d=i[l]/10,f=i[l+1]/10,u=Math.max(1,Math.ceil(Math.hypot(d-c,f-h)/6));for(let m=1;m<=u;m++)e.push(c+(d-c)*m/u,h+(f-h)*m/u)}const n=e.length/2,s=new Float32Array(n);for(let l=0;l<n;l++)s[l]=t.yAt(e[l*2],e[l*2+1]);let r=s;for(let l=0;l<2;l++){const c=new Float32Array(n);for(let h=0;h<n;h++){let d=0,f=0;for(let u=Math.max(0,h-4);u<=Math.min(n-1,h+4);u++)d+=r[u],f++;c[h]=d/f}r=c}const a=new Float32Array(n*3),o=new Float32Array(n);for(let l=0;l<n;l++)a[l*3]=e[l*2],a[l*3+1]=Math.max(r[l],s[l]-.2),a[l*3+2]=e[l*2+1],l&&(o[l]=o[l-1]+Math.hypot(e[l*2]-e[l*2-2],e[l*2+1]-e[l*2-1]));return{pts:a,cum:o,length:o[n-1]}}function ss(i,t,e){const n=i.cum.length;let s=0,r=n-1;for(;r-s>1;){const m=s+r>>1;i.cum[m]<=t?s=m:r=m}const a=Math.min(1,Math.max(0,(t-i.cum[s])/(i.cum[r]-i.cum[s]||1))),o=i.pts[s*3],l=i.pts[s*3+1],c=i.pts[s*3+2],h=i.pts[r*3],d=i.pts[r*3+1],f=i.pts[r*3+2],u=Math.hypot(h-o,f-c)||1;e.x=o+(h-o)*a,e.y=l+(d-l)*a,e.z=c+(f-c)*a,e.tx=(h-o)/u,e.tz=(f-c)/u}function ml(i,t,e,n,s,r){const a=t.cum.length;let o=0,l=0,c=0,h=0,d=0;for(let f=0;f<a;f++){const u=Math.max(f-1,0),m=Math.min(f+1,a-1);let _=t.pts[m*3]-t.pts[u*3],p=t.pts[m*3+2]-t.pts[u*3+2];const g=Math.hypot(_,p)||1;_/=g,p/=g;const x=t.pts[f*3]-p*e,M=t.pts[f*3+2]+_*e,S=t.pts[f*3+1]+s,y=x+p*n,E=M-_*n,v=x-p*n,b=M+_*n;f&&i.quad(o,l,c,y,S,E,v,S,b,h,l,d,r),o=y,l=S,c=E,h=v,d=b}}const hv=$(12170926),Ru=$(15254842),Cu=$(9276036),Pu=150,uv=ea+.8;function fv(i,t,e){const n=t.trainRoutes.map(a=>pl(a,e)),s=(a,o,l,c=0,h=a.cum.length)=>{let d=1/0,f=-1;for(let u=Math.max(0,c);u<Math.min(a.cum.length,h);u++){const m=Math.hypot(a.pts[u*3]-o,a.pts[u*3+2]-l);m<d&&(d=m,f=u)}return{i:f,dist:d}},r={x:0,y:0,z:0,tx:0,tz:0};for(const a of t.stations){const o=a.p[0]/10,l=a.p[1]/10,c=n.map(_=>({t:_,...s(_,o,l)})).filter(_=>_.dist<16).sort((_,p)=>_.dist-p.dist);if(!c.length)continue;const h=c[0],d=c[1],f=h.t.cum[h.i];let u=null,m=d?d.i:0;for(let _=Math.max(4,f-Pu/2);_<=Math.min(h.t.length-4,f+Pu/2);_+=5){ss(h.t,_,r);let p,g,x,M;if(d){const y=s(d.t,r.x,r.z,m-6,m+7);m=y.i;const E=d.t.pts[y.i*3],v=d.t.pts[y.i*3+2],b=Math.hypot(E-r.x,v-r.z);if(b<4.6){u=null;continue}const T=(E-r.x)/b,R=(v-r.z)/b;p=r.x+T*1.6,g=r.z+R*1.6,x=E-T*1.6,M=v-R*1.6}else{const y=(o-r.x)*r.tz-(l-r.z)*r.tx>=0?1:-1;p=r.x+r.tz*y*1.6,g=r.z-r.tx*y*1.6,x=r.x+r.tz*y*5.6,M=r.z-r.tx*y*5.6}const S=r.y+uv;if((x-p)*-r.tz+(M-g)*r.tx<0&&([p,x]=[x,p],[g,M]=[M,g]),u){const[y,E,v,b,T]=u;i.quad(y,T,E,v,T,b,x,S,M,p,S,g,hv);for(const[R,C,L,z,P,B,H,G]of[[y,E,p,g,v,b,x,M],[v,b,x,M,y,E,p,g]]){const q=Math.hypot(P-R,B-C)||1,X=Math.hypot(H-L,G-z)||1,O=(V,pt,Y,ct)=>V+(pt-V)/Y*ct,k=[O(R,P,q,.45),T+.02,O(C,B,q,.45),O(L,H,X,.45),S+.02,O(z,G,X,.45),O(L,H,X,.75),S+.02,O(z,G,X,.75),O(R,P,q,.75),T+.02,O(C,B,q,.75)];R===y&&C===E?(i.quad(k[0],k[1],k[2],k[9],k[10],k[11],k[6],k[7],k[8],k[3],k[4],k[5],Ru),i.quad(L,S-1.1,z,R,T-1.1,C,R,T,C,L,S,z,Cu)):(i.quad(...k,Ru),i.quad(R,T-1.1,C,L,S-1.1,z,L,S,z,R,T,C,Cu))}}u=[p,g,x,M,S]}}}function dv(i,t){const e=new ie,n=new ie,s=new Set,r={x:0,y:0,z:0,tx:0,tz:0};for(const[f,u]of i.rails){const m=pl(u,t);if(!(m.length<4)&&(ml(e,m,0,1.45,cv,lv),ml(n,m,-Au/2,.07,ea,wu),ml(n,m,Au/2,.07,ea,wu),f===0))for(let _=20;_<m.length-10;_+=62){ss(m,_,r);const p=r.x+r.tz*2.7,g=r.z-r.tx*2.7;if(!t.inside(p,g,6))continue;const x=Math.floor(p/14)*8192+Math.floor(g/14);if(!s.has(x)){for(let M=-1;M<=1;M++)for(let S=-1;S<=1;S++)s.add(Math.floor(p/14+M)*8192+Math.floor(g/14+S));n.frame(p,t.yAt(p,g),g,Math.atan2(-r.tz,r.tx)),n.box(-.09,0,-.09,.09,7.4,.09,Tu),n.box(-.05,6.3,0,.05,6.42,3.2,Tu),n.frame()}}}const a=new ie;fv(a,i,t);const o=f=>(f.deleteAttribute("glow"),f),l=new Le;l.name="railway";const c=new Jt(o(e.build()),new Xe({vertexColors:!0,roughness:1,metalness:0,side:be,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));c.receiveShadow=!0;const h=new Jt(o(n.build()),new Xe({vertexColors:!0,roughness:.55,metalness:.35,side:be}));h.castShadow=!0;const d=new Jt(o(a.build()),new Xe({vertexColors:!0,roughness:.92,metalness:0,side:be}));return d.castShadow=!0,d.receiveShadow=!0,l.add(c,h,d),l}const Lu=2,gl=4;function pv(i,t){const e=i.slice(),n=[],s=(a,o,l,c)=>Math.hypot(a-l,o-c)<3,r=a=>{const o=new Float32Array(a.length);for(let l=0;l<a.length/3;l++)o.set(a.subarray(l*3,l*3+3),a.length-3-l*3);return o};for(;e.length;){let a=Array.from(e.pop()),o=!0;for(;o;){o=!1;for(let l=0;l<e.length;l++){const c=e[l],h=c.length,d=a.length;let f=null,u=!0;if(s(a[d-3],a[d-1],c[0],c[2])?f=c:s(a[0],a[2],c[h-3],c[h-1])?(f=c,u=!1):!t&&s(a[d-3],a[d-1],c[h-3],c[h-1])?f=r(c):!t&&s(a[0],a[2],c[0],c[2])&&(f=r(c),u=!1),!!f){a=u?a.concat(Array.from(f.subarray(3))):Array.from(f.subarray(0,f.length-3)).concat(a),e.splice(l,1),o=!0;break}}}n.push(new Float32Array(a))}return n}function mv(i){const t=new Map;for(const n of i){if(n.cls>2||!n.name||n.flags&Lu)continue;const s=`${n.name}|${n.flags&gl}`,r=t.get(s)??[];r.push(n),t.set(s,r)}const e=[];for(const n of t.values()){const s=(n[0].flags&gl)!==0;for(const r of pv(n.map(a=>a.pts),s)){const a=r.length/3,o=new Float32Array(a);for(let l=1;l<a;l++)o[l]=o[l-1]+Math.hypot(r[l*3]-r[l*3-3],r[l*3+2]-r[l*3-1]);o[a-1]>260&&e.push({pts:r,cum:o,length:o[a-1],width:n[0].width,cls:n[0].cls,oneWay:s,name:n[0].name})}}return e}function gv(){const i=new ie,t=$(16185074),e=$(2054824),n=$(16040479),s=$(1713198),r=$(1381655);i.box(-1.25,.35,-6,1.25,3.1,6,t,$(15001316),r),i.box(-1.27,.35,-6.02,1.27,1.15,6.02,e,null),i.box(-1.28,1.15,-6.03,1.28,1.32,6.03,n,null);for(const a of[-1.27,1.27]){const o=Math.sign(a);i.quad(a+o*.02,1.55,-5.4*o,a+o*.02,1.55,5.4*o,a+o*.02,2.65,5.4*o,a+o*.02,2.65,-5.4*o,s,.5)}i.quad(-1.1,1.5,6.04,1.1,1.5,6.04,1.1,2.8,6.04,-1.1,2.8,6.04,s,.3);for(const a of[-1,1])for(const o of[-3.75,4.05])yu(i,1.17*a,.48,o,.48,.3,a,10);for(const a of[-1,.7])i.quad(a,.6,6.05,a+.3,.6,6.05,a+.3,.85,6.05,a,.85,6.05,$(16776166),2.2);return i.build()}const xl=24.2,yi=6;function Du(i){const t=new ie,e=23.4,n=1.42,s=$(13488596),r=$(10330790),a=$(1843753),o=$(15909424),l=$(2763822),c=$(2310287);t.box(-n,.95,-e/2,n,3.7,e/2,s,r),t.box(-n+.2,.2,-e/2+1.4,n-.2,.95,e/2-1.4,l,null),t.box(-.5,3.7,-e/2+3,.5,4,e/2-3,r);for(const h of[-1,1]){const d=h*(n+.02),f=(u,m,_,p,g=a,x=0)=>{h>0?t.quad(d,_,m,d,_,u,d,p,u,d,p,m,g,x):t.quad(d,_,u,d,_,m,d,p,m,d,p,u,g,x)};f(-e/2+.3,e/2-.3,1.45,1.62,c);for(let u=0;u<7;u++){const m=-e/2+2+u*2.9;f(m,m+2.1,2,2.95,a,.75)}for(const u of[-6.4,5])f(u,u+1.4,1,3.1,o)}if(i){const h=e/2+.02;t.quad(-n,.95,h,n,.95,h,n,2.15,h,-n,2.15,h,o),t.quad(-n+.15,2.2,h,n-.15,2.2,h,n-.15,3.35,h,-n+.15,3.35,h,a,.2);for(const d of[-1.05,.7])t.quad(d,1.25,h+.01,d+.35,1.25,h+.01,d+.35,1.5,h+.01,d,1.5,h+.01,$(16776166),2.4)}return t.build()}class xv{constructor(t,e,n,s,r=()=>!1,a=()=>!1){it(this,"group",new Le);it(this,"vehicles",[]);it(this,"carMesh");it(this,"busMesh");it(this,"carCount",0);it(this,"trains",[]);it(this,"midMesh");it(this,"cabMesh");it(this,"tmpM",new ne);it(this,"tmpQ",new rn);it(this,"tmpP",new Q);it(this,"up",new Q(0,1,0));it(this,"one",new Q(1,1,1));it(this,"zero",new Q(0,0,0));it(this,"at",{x:0,y:0,z:0,tx:0,tz:0});it(this,"at2",{x:0,y:0,z:0,tx:0,tz:0});this.town=t,this.hf=e,this.isClear=r,this.noParking=a,this.group.name="life";const o=qn();this.addParkedCars(o,s),this.addTraffic(o,n),this.addTrains(o),this.addStreetLights(n),this.update(0)}addParkedCars(t,e){const n=this.town.cars,s=n.length/Us,r=new Vn(Eu(),t,s),a=new Rt;let o=0;for(let l=0;l<s;l++){const c=n[l*Us]/4,h=n[l*Us+1]/4;if(this.isClear(c,h)||this.noParking(c,h))continue;const d=e.nearest(c,h,14),f=!!d&&d.dist<d.width/2;this.tmpQ.setFromAxisAngle(this.up,n[l*Us+2]/10*(Math.PI/180)),r.setMatrixAt(o,this.tmpM.compose(this.tmpP.set(c,this.hf.yAt(c,h)+(f?.24:.03),h),this.tmpQ,this.one)),r.setColorAt(o++,a.set(jr[(n[l*Us+3]*7+l)%jr.length]))}r.count=o,r.castShadow=!0,r.computeBoundingSphere(),this.group.add(r)}addTraffic(t,e){const n=mv(e);if(!n.length)return;const s=Xn(4105),r=[],a=[];for(const l of n){const c=l.cls===0?20:l.cls===1?12:8,h=Math.round(l.length/1e3*c*(l.oneWay?1:1.6)),d=Math.max(1,l.oneWay?Math.min(l.width<13?2:3,Math.round((l.width-2.4)/3.4)):Math.round(l.width/2/3.3)),f=u=>-l.width/2+.4+3.3*(u+.5);for(let u=0;u<h;u++){const m=Math.floor(s()*d),_=l.oneWay?f(m):(m+.5)/d*(l.width/2-.3),p=l.cls===0?13:l.cls===1?11:9,g={route:l,s:s()*l.length,dir:l.oneWay||s()<.5?1:-1,speed:p+s()*4,lane:_};(l.name==="Beaudesert Road"||l.name==="Ipswich Road")&&s()<.045?(g.speed=10+s()*2,l.oneWay&&(g.lane=f(d-1)),a.push(g)):r.push(g)}}this.vehicles=r.concat(a),this.carCount=r.length;const o=new Rt;if(r.length){const l=this.carMesh=new Vn(Eu(),t,r.length);l.instanceMatrix.setUsage(ho),l.frustumCulled=!1;for(let c=0;c<r.length;c++)l.setColorAt(c,o.set(jr[Math.floor(s()*jr.length)]));l.castShadow=!0,this.group.add(l)}if(a.length){const l=this.busMesh=new Vn(gv(),t,a.length);l.instanceMatrix.setUsage(ho),l.frustumCulled=!1,l.castShadow=!0,this.group.add(l)}}addTrains(t){const e=this.town.trainRoutes.map(r=>pl(r,this.hf)).filter(r=>r.length>600);if(!e.length)return;const n=[!0];if(e.length>1){const r=e[0],a=e[1];ss(r,r.length/2,this.at);let o=1/0,l=0,c=1;for(let h=0;h<a.cum.length;h++){const d=a.pts[h*3]-this.at.x,f=a.pts[h*3+2]-this.at.z,u=Math.hypot(d,f);if(u<o){o=u,l=d*-this.at.tz+f*this.at.tx;const m=Math.min(h+1,a.cum.length-1),_=Math.max(h-1,0);c=(a.pts[m*3]-a.pts[_*3])*this.at.tx+(a.pts[m*3+2]-a.pts[_*3+2])*this.at.tz}}n[0]=l>0,n[1]=n[0]?c<0:c>0}const s=yi*xl;e.forEach((r,a)=>{const o=n[a]?r:_v(r),l=[];for(const c of this.town.stations){const h=c.p[0]/10,d=c.p[1]/10;let f=70,u=-1;for(let m=0;m<o.cum.length;m++){const _=Math.hypot(o.pts[m*3]-h,o.pts[m*3+2]-d);_<f&&(f=_,u=o.cum[m])}u>s/2+10&&u<o.length-10&&l.push(u+s/2)}l.sort((c,h)=>c-h),this.trains.push({track:o,stops:l,s:o.length*(a===0?.28:.62),v:16,dwell:0,next:0})});for(const r of this.trains)r.next=r.stops.findIndex(a=>a>r.s+150);this.midMesh=new Vn(Du(!1),t,this.trains.length*(yi-2)),this.cabMesh=new Vn(Du(!0),t,this.trains.length*2);for(const r of[this.midMesh,this.cabMesh])r.instanceMatrix.setUsage(ho),r.frustumCulled=!1,r.castShadow=!0,this.group.add(r)}addStreetLights(t){const e=[];for(const r of t){if(r.flags&Lu)continue;const a=(r.flags&gl)!==0,o=r.cls<=1?46:r.cls===2?60:105,l=r.pts.length/3;let c=o*.5,h=1;for(let d=1;d<l;d++){const f=r.pts[d*3-3],u=r.pts[d*3-1],m=r.pts[d*3],_=r.pts[d*3+1],p=r.pts[d*3+2],g=Math.hypot(m-f,p-u);if(c+=g,c<o)continue;c=0,h=a?-1:-h;const x=(m-f)/(g||1),M=(p-u)/(g||1),S=r.width/2+1.4,y=m-M*S*h,E=p+x*S*h;!this.hf.inside(y,E,12)||this.isClear(y,E)||e.push(y,Math.max(this.hf.yAt(y,E),_-.4),E,Math.atan2(M*h,-x*h))}}const{lights:n,pools:s}=ov(e,this.hf);this.group.add(n,s)}update(t){const{at:e,at2:n}=this;if(this.vehicles.forEach((r,a)=>{const o=r.route;r.s+=r.dir*r.speed*t,r.s>o.length&&(r.s-=o.length),r.s<0&&(r.s+=o.length),ss(o,r.s,e);const l=e.tx*r.dir,c=e.tz*r.dir;this.tmpQ.setFromAxisAngle(this.up,Math.atan2(l,c)),this.tmpM.compose(this.tmpP.set(e.x+c*r.lane,e.y+.03,e.z-l*r.lane),this.tmpQ,this.one),a<this.carCount?this.carMesh.setMatrixAt(a,this.tmpM):this.busMesh.setMatrixAt(a-this.carCount,this.tmpM)}),this.carMesh&&(this.carMesh.instanceMatrix.needsUpdate=!0),this.busMesh&&(this.busMesh.instanceMatrix.needsUpdate=!0),!this.midMesh||!this.cabMesh)return;const s=yi*xl;this.trains.forEach((r,a)=>{if(r.dwell>0)r.dwell-=t;else{const l=(r.next>=0&&r.next<r.stops.length?r.stops[r.next]:1/0)-r.s;l<.4?(r.v=0,r.dwell=14,r.next++):l<r.v*r.v/1.7+2?r.v=Math.max(.8,Math.sqrt(1.7*l)):r.v=Math.min(19,r.v+.75*t),r.s+=r.v*t,r.s-s>r.track.length&&(r.s=0,r.next=0,r.v=15)}for(let o=0;o<yi;o++){const l=r.s-(o+.5)*xl,c=o===0||o===yi-1,h=c?this.cabMesh:this.midMesh,d=c?a*2+(o===0?0:1):a*(yi-2)+o-1;if(l<8||l>r.track.length-8){h.setMatrixAt(d,this.tmpM.compose(this.zero,this.tmpQ.identity(),this.zero));continue}ss(r.track,l+8,e),ss(r.track,l-8,n);const f=Math.atan2(e.x-n.x,e.z-n.z)+(o===yi-1?Math.PI:0);this.tmpQ.setFromAxisAngle(this.up,f),h.setMatrixAt(d,this.tmpM.compose(this.tmpP.set((e.x+n.x)/2,(e.y+n.y)/2+ea,(e.z+n.z)/2),this.tmpQ,this.one))}}),this.midMesh.instanceMatrix.needsUpdate=!0,this.cabMesh.instanceMatrix.needsUpdate=!0}}function _v(i){const t=i.cum.length,e=new Float32Array(t*3),n=new Float32Array(t);for(let s=0;s<t;s++)e.set(i.pts.subarray((t-1-s)*3,(t-1-s)*3+3),s*3),n[s]=i.length-i.cum[t-1-s];return{pts:e,cum:n,length:i.length}}const vv=[{id:"shops",name:"Moorvale shops",kind:"landmark",lat:-27.53289,lon:153.02479,blurb:"Moorooka's main street: the shops and cafes along Beaudesert Road, around Moorvale Lane.",view:[420,58,-24],priority:1,lift:24},{id:"square",name:"Moorooka Square",kind:"landmark",lat:-27.53092,lon:153.02368,blurb:"The shopping centre at Beaudesert Road and Durack Street, modelled in extra detail. Its outline and heights are surveyed. The corner frontage (white canopy, brick planters, pylon) and the supermarket entry are fitted from street photographs taken in 2026: the corner wing is newer than the survey, so its position is approximate. The sides away from Beaudesert Road are a guess.",view:[115,62,68],priority:1,maxDist:2600,lift:17},{id:"station",name:"Moorooka Station",kind:"landmark",lat:-27.53566,lon:153.01392,blurb:"On the Beenleigh and Gold Coast lines, beside Ipswich Road. Trains in the model stop here.",view:[330,60,62],priority:1,lift:20},{id:"magic-mile",name:"Magic Mile",kind:"landmark",lat:-27.53208,lon:153.01684,blurb:"Ipswich Road through Moorooka, long known as the Magic Mile of Motors for its car yards. The cars standing in the yards are generated.",view:[520,60,35],priority:2,lift:22},{id:"6-beaudesert",name:"6 Beaudesert Road",kind:"landmark",lat:-27.5256631,lon:153.0234391,blurb:"A high-set house on a 1,348 square metre block near the Ipswich Road junction, modelled in extra detail. The roof outline, its height and colour are surveyed; the fences, paths, steps, garden boxes and clothes hoist are placed from the aerial photograph. Wall colour, windows and doors are a guess.",view:[52,52,-105],priority:2,maxDist:1500,lift:13},{id:"clapham",name:"Clapham Rail Yard",kind:"landmark",lat:-27.5312,lon:153.0132,blurb:"The rail yard between Yeerongpilly and Moorooka stations, on the western edge of the suburb.",view:[640,58,80],priority:3,maxDist:3600,lift:18},{id:"school",name:"Moorooka State School",kind:"landmark",lat:-27.53569,lon:153.02398,blurb:"The state primary school, between Beaudesert Road and Sherley Street.",view:[360,58,10],priority:3,maxDist:2600,lift:18},{id:"alexander",name:"Alexander Park",kind:"nature",lat:-27.53889,lon:153.02367,blurb:"Sports fields beside Beaudesert Road, south of the school.",view:[420,58,-15],priority:4,maxDist:2600,lift:14},{id:"peggs",name:"Pegg's Park",kind:"nature",lat:-27.53231,lon:153.0312,blurb:"Parkland along Vendale Avenue on the eastern side of the suburb.",view:[420,58,20],priority:4,maxDist:2600,lift:14},{id:"koala",name:"Koala Park",kind:"nature",lat:-27.53056,lon:153.02808,blurb:"A long green corridor with playing fields between Vendale Avenue and the houses.",view:[420,60,30],priority:5,maxDist:2e3,lift:14},{id:"community",name:"Moorooka Community Centre",kind:"landmark",lat:-27.53555,lon:153.02088,blurb:"The community hall, west of the school.",view:[300,60,-10],priority:6,maxDist:1400,lift:14},{id:"st-brendans",name:"St Brendan's Primary School",kind:"landmark",lat:-27.53747,lon:153.01931,blurb:"Catholic primary school on Hawtree Street, next to the church.",view:[320,60,15],priority:6,maxDist:1600,lift:15},{id:"post",name:"Moorooka Post Shop",kind:"landmark",lat:-27.5317,lon:153.02369,blurb:"The post office, at the northern end of the shops.",view:[260,60,-20],priority:7,maxDist:900,lift:14},{id:"uniting",name:"Uniting Church",kind:"landmark",lat:-27.53339,lon:153.02759,blurb:"Moorooka's Uniting Church, a few streets east of the shops.",view:[280,60,10],priority:7,maxDist:1e3,lift:14},{id:"stimpson",name:"Stimpson Park",kind:"nature",lat:-27.52648,lon:153.02218,blurb:"A park beside Ipswich Road at the northern tip of the suburb.",view:[360,58,20],priority:6,maxDist:1600,lift:13},{id:"moolabin",name:"Moolabin Park",kind:"nature",lat:-27.52852,lon:153.02564,blurb:"The first of the parks strung along Vendale Avenue.",view:[340,58,15],priority:6,maxDist:1500,lift:13},{id:"veterans",name:"Veterans Park",kind:"nature",lat:-27.53974,lon:153.01694,blurb:"A park on Anson Street, in the south-west of the suburb.",view:[340,58,25],priority:6,maxDist:1500,lift:13},{id:"skate",name:"Peter Scott Skate Park",kind:"landmark",lat:-27.54298,lon:153.01482,blurb:"The skate park in Muriel Avenue Park, near the creek.",view:[260,60,30],priority:6,maxDist:1400,lift:12},{id:"toohey",name:"Toohey Forest",kind:"nature",lat:-27.53512,lon:153.03668,blurb:"Bushland on the ridge along the eastern edge of the suburb. The highest ground in the model, about 125 metres above sea level, is here.",view:[1100,60,-60],priority:2,lift:34},{id:"creek",name:"Rocky Water Holes Creek",kind:"water",lat:-27.54414,lon:153.01554,blurb:"The creek along Moorooka's southern boundary, on its way to Oxley Creek and the Brisbane River.",view:[620,58,20],priority:5,maxDist:3200},{id:"rocklea",name:"Rocklea Station",kind:"landmark",lat:-27.54472,lon:153.01419,blurb:"The next station south, just over the creek in Rocklea.",view:[380,60,40],priority:5,maxDist:2600,lift:16},{id:"yeerongpilly",name:"Yeerongpilly Station",kind:"landmark",lat:-27.52485,lon:153.01416,blurb:"The next station north, where the Tennyson branch leaves the main line.",view:[420,60,70],priority:5,maxDist:2600,lift:16},{id:"river",name:"Brisbane River",kind:"water",lat:-27.5214,lon:153.0102,blurb:"The Tennyson reach of the river touches the north-west corner of the model.",view:[900,55,40],priority:4}],Iu=[-27.531134,153.023185],Mv=[-27.5307274,153.0230606],Sv=[-27.5310763,153.0237468],Nu=[[-27.5307394,153.023705],[-27.5310127,153.0237606]],ks=[78,0,0,0,0,66.5,79.3,66.5,79.3,42.5,83.4,42.5,83.4,47.9,88.2,47.9,88.2,28.1,100.2,28.1,100.2,22.1],yv=[75.2,0,0,0,0,66.5,79.3,66.5,79.3,42.5,83.4,42.5,83.4,47.9,88.2,47.9,88.2,26.3,98.4,26.3,98.4,23.2],bv=[66,0,75.2,0,98.4,23.2,98.4,26.3,88.2,26.3,88.2,47.9,83.4,47.9,83.4,42.5,79.3,42.5,79.3,66.5,66,66.5],Gt=39.1,sn=Gt+5,na=Gt+5.85,Gs=5.2,Hs=[11.4,14.6],$n=i=>37.45+(i>0?.036:.02)*i,Vs=$(14934231),me=$(15987437),Ws=$(15526627),Xs=$(13619146),_l=$(11818813),vl=$(4864816),Ev=$(2832965),qs=$(1976109),Ys=$(3817026),vn=$(10133668),hi=$(3817026),$s=$(13352877),ia=$(13353645),ui=$(12434098),Uu=$(1780811),sa=$(9409688),ra=$(4164148),wv=$(9424476),Ml=$(3104556),Tv=$(9054780),aa=2;function Kn(i,t,e){const n=document.createElement("canvas");n.width=i*aa,n.height=t*aa;const s=n.getContext("2d");s.scale(aa,aa),e(s,i,t);const r=new Tr(n);return r.colorSpace=we,r.anisotropy=8,r}const ln="Arial, Helvetica, sans-serif";function Sl(i,t,e,n){i.lineWidth=n*.42,i.strokeStyle="#1c9a48",i.beginPath(),i.arc(t-n*.3,e+n*.12,n*.55,0,Math.PI*2),i.stroke(),i.strokeStyle="#7cc242",i.beginPath(),i.arc(t+n*.3,e-n*.12,n*.55,0,Math.PI*2),i.stroke()}const Zn={square:()=>Kn(768,224,(i,t,e)=>{const n=["#f2c230","#2f6fb6","#e2457a","#1f2a55","#f08a2a","#39a7a0"],r=e/2,a=78;for(let o=0;o<6;o++){const l=o/6*Math.PI*2-.5,c=(o+1)/6*Math.PI*2-.5;i.fillStyle=n[o],i.beginPath(),i.moveTo(100+8*Math.cos(l+1),r+8*Math.sin(l+1)),i.lineTo(100+a*Math.cos(l),r+a*Math.sin(l)),i.lineTo(100+a*Math.cos(c),r+a*Math.sin(c)),i.fill()}i.fillStyle="#23201e",i.font=`900 88px ${ln}`,i.textBaseline="middle",i.fillText("MOOROOKA",205,e*.29,t-215),i.fillText("SQUARE",240,e*.74,t-300)}),dental:()=>Kn(768,256,(i,t,e)=>{i.fillStyle="#1f4fb5",i.beginPath(),i.arc(110,e/2,96,0,Math.PI*2),i.fill(),i.fillStyle="#ffffff",i.beginPath(),i.moveTo(62,96),i.bezierCurveTo(62,56,110,78,110,78),i.bezierCurveTo(110,78,158,56,158,96),i.bezierCurveTo(158,150,142,196,130,196),i.bezierCurveTo(120,196,122,150,110,150),i.bezierCurveTo(98,150,100,196,90,196),i.bezierCurveTo(78,196,62,150,62,96),i.fill(),i.fillStyle="#1f4fb5",i.textBaseline="middle",i.font=`700 64px ${ln}`,i.fillText("moorooka SQUARE",230,70,t-240),i.font=`900 120px ${ln}`,i.fillText("D E N T A L",228,180,t-236)}),medical:()=>Kn(768,256,(i,t,e)=>{i.fillStyle="#5aa9e6",i.fillRect(74,28,76,200),i.fillRect(12,90,200,76),i.fillStyle="#ffffff",i.beginPath(),i.arc(112,e/2,26,0,Math.PI*2),i.fill(),i.fillStyle="#1d2f6b",i.textBaseline="middle",i.font=`900 92px ${ln}`,i.fillText("MOOROOKA",236,78,t-246),i.fillText("MEDICAL",236,182,t-300)}),pylonDental:()=>Kn(512,160,(i,t,e)=>{i.fillStyle="#1c2f6e",i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.beginPath(),i.arc(70,e/2,44,0,Math.PI*2),i.fill(),i.textBaseline="middle",i.font=`700 40px ${ln}`,i.fillText("moorooka SQUARE",140,48,t-160),i.font=`900 72px ${ln}`,i.fillText("DENTAL",140,110,t-160)}),parking:()=>Kn(512,160,(i,t,e)=>{i.fillStyle="#1668c9",i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.textBaseline="middle",i.font=`900 124px ${ln}`,i.fillText("P",150,e/2+6),i.fillRect(256,e/2-13,80,26),i.beginPath(),i.moveTo(330,e/2-42),i.lineTo(382,e/2),i.lineTo(330,e/2+42),i.fill()}),boot:()=>Kn(512,160,(i,t,e)=>{i.fillStyle="#178a3c",i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.beginPath(),i.arc(74,62,44,0,Math.PI*2),i.fill(),Sl(i,74,62,30),i.fillStyle="#ffffff",i.textBaseline="middle",i.font=`700 30px ${ln}`,i.fillText("woolworths",14,134,130),i.font=`700 56px ${ln}`,i.fillText("Direct",300,52,190),i.fillText("to boot",300,112,190),i.fillRect(178,44,96,62),i.fillStyle="#178a3c",i.fillRect(186,52,80,30)}),tower:()=>Kn(512,400,(i,t,e)=>{i.fillStyle="#34383b",i.fillRect(0,0,t,e),Sl(i,t/2,150,118),i.fillStyle="#ffffff",i.textBaseline="middle",i.textAlign="center",i.font=`400 88px ${ln}`,i.fillText("woolworths",t/2,336,t-40)}),cafe:()=>Kn(640,224,(i,t)=>{i.fillStyle="#ffffff",i.textBaseline="middle",i.textAlign="center",i.font='400 112px Georgia, "Times New Roman", serif',i.fillText("botanic café",t/2,78,t-30),i.font=`400 54px ${ln}`,i.fillText("espresso  kitchen",t/2,176,t-120)}),entry:()=>Kn(1024,256,(i,t,e)=>{i.fillStyle="#ffffff",i.textBaseline="middle",i.font=`400 170px ${ln}`,i.fillText("woolworths",20,e/2+14,700),Sl(i,880,e/2,104)})};function Fu(i){const t=new Xe({map:i,alphaTest:.4,roughness:.8,metalness:0,side:be,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});return t.onBeforeCompile=e=>{e.uniforms.uNight=ts,e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * uNight * 0.7;`)},t.customProgramCacheKey=()=>"moorooka-sign",t}function Ou(i){const t=y=>Yn(i,y[0],y[1]),e=t(Mv),n=t(Sv),s=Math.hypot(n[0]-e[0],n[1]-e[1]),r=(n[0]-e[0])/s,a=(n[1]-e[1])/s,o=(y,E)=>[e[0]+y*r-E*a,e[1]+y*a+E*r],l=t(Nu[0]),c=t(Nu[1]),h=Math.hypot(c[0]-l[0],c[1]-l[1]),d=(c[0]-l[0])/h,f=(c[1]-l[1])/h,u=f,m=-d,_=l[0]-10*u,p=l[1]-10*m;return{nw:e,centre:o,wing:(y,E)=>[_+y*u+E*d,p+y*m+E*f],toWing:(y,E)=>[(y-_)*u+(E-p)*m,(y-_)*d+(E-p)*f],toCentre:(y,E)=>[(y-e[0])*r+(E-e[1])*a,-(y-e[0])*a+(E-e[1])*r],south:y=>-((_-n[0])*a-(p-n[1])*r+y*(u*a-m*r))/(d*a-f*r),centreHeading:Math.atan2(-a,r),wingHeading:Math.atan2(-m,u),origin:[_,p]}}function Av(i){const t=Ou(i);return(e,n)=>{const[s,r]=t.toWing(e,n);if(s>-14.5&&s<10.4&&r>-11&&r<40)return!0;const[a,o]=t.toCentre(e,n);if(a<-3||a>106||o<-3||o>70)return!1;let l=!1;const c=ks.length/2;for(let h=0,d=c-1;h<c;d=h++){const f=ks[h*2],u=ks[h*2+1],m=ks[d*2],_=ks[d*2+1];u>o!=_>o&&a<(m-f)*(o-u)/(_-u)+f&&(l=!l);const p=Math.max(0,Math.min(1,((a-f)*(m-f)+(o-u)*(_-u))/((m-f)**2+(_-u)**2||1)));if(Math.hypot(a-f-(m-f)*p,o-u-(_-u)*p)<3)return!0}return l}}function Rv(i,t,e){const n=new Le;if(n.name="square",!e)return n;const s=Ou(i),r=new ie,a=Xn(410500),o=[],l=e.eave,c=e.ridge,h=l+1.7,d=Math.min(31,l-13);let f=()=>{};const u=(I,U,F)=>{f=()=>r.frame(I,0,U,F),f()},m=()=>u(s.nw[0],s.nw[1],s.centreHeading),_=()=>u(s.origin[0],s.origin[1],s.wingHeading),p=(I,U)=>{const F=Math.hypot(U[0]-I[0],U[1]-I[1]);return u(I[0],I[1],Math.atan2(-(U[1]-I[1])/F,(U[0]-I[0])/F)),F},g=(I,U=1.5)=>t.yAt(r.wx(I,U),r.wz(I,U)),x=(I,U,F,Z,D,j)=>o.push({corners:[r.wx(I,D),F,r.wz(I,D),r.wx(U,D),F,r.wz(U,D),r.wx(U,D),Z,r.wz(U,D),r.wx(I,D),Z,r.wz(I,D)],tex:j}),M=(I,U)=>{(I[5]-I[2])*(I[6]-I[0])-(I[3]-I[0])*(I[8]-I[2])>0?r.quad(I[0],I[1],I[2],I[3],I[4],I[5],I[6],I[7],I[8],I[9],I[10],I[11],U):r.quad(I[0],I[1],I[2],I[9],I[10],I[11],I[6],I[7],I[8],I[3],I[4],I[5],U)},S=(I,U,F,Z,D,j,J=0,ot=.05)=>{if(Z-F<.05||U-I<.05)return;const lt=Math.max(1,Math.round((U-I)/D));for(let ft=0;ft<lt;ft++)r.box(I+(U-I)*ft/lt,F,J,I+(U-I)*(ft+1)/lt,Z,ot,ft%2?It(j,.955):j,null)},y=(I,U,F,Z,D=Ev,j=.6)=>{r.quad(I,F,.06,U,F,.06,U,Z,.06,I,Z,.06,D,j);const J=Math.max(1,Math.round((U-I)/1.4));for(let ot=0;ot<=J;ot++){const lt=I+(U-I)*ot/J;r.box(lt-.04,F,.06,lt+.04,Z,.11,Ys,null)}r.box(I,Z-.1,.06,U,Z,.12,Ys),r.box(I,F,.06,U,F+.12,.12,Ys)},E=(I,U,F,Z,D)=>{r.box(I,F,0,U,F+.16,Z,It(me,.9),Xs,It(me,.86)),r.box(I,F-.04,Z-.1,U,F+.46,Z,me);for(const j of[I,U-.1])r.box(j,F-.04,0,j+.1,F+.46,Z,me);for(const j of[I+.7,U-.7])r.quad(j-.04,D,.06,j+.04,D,.06,j+.04,F+.46,Z-.25,j-.04,F+.46,Z-.25,hi)},v=(I,U,F,Z,D,j,J=It(_l,.9))=>{for(let ot=U,lt=0;ot<D-.01;ot+=.26,lt++)r.box(I,ot,F,Z,Math.min(ot+.26,D),j,lt%2?It(_l,.94):_l,null);J&&r.quad(I,D,j,Z,D,j,Z,D,F,I,D,F,J)},b=(I,U,F,Z,D=ra,j=wv)=>{const J=r.wx(I,F),ot=r.wz(I,F),lt=a()*Math.PI;for(let ft=0;ft<6;ft++){r.frame(J,U,ot,lt+ft/6*Math.PI*2);const wt=.75+a()*.4;r.blob(0,Z*.48*wt,Z*.2+ft%2*Z*.1,Z*.2,Z*.5*wt,Z*.06,6,4,D,j)}f()},T=(I,U,F,Z,D=Ml,j=ra)=>r.blob(I,U+Z*.7,F,Z,Z*.8,Z,6,4,D,j);m(),r.walls(yv,d,l,Vs);const R=66,C=66.5,L=R/2,z=C/2,P=3.5,B=l+3,H=(I,U)=>l+(B-l)*Math.min(1,(1-Math.max(Math.abs(I-L)/L,Math.abs(U-z)/z))/(1-P/L));M([0,l,0,R,l,0,L+P,B,z-P,L-P,B,z-P],e.roof),M([R,l,0,R,l,C,L+P,B,z+P,L+P,B,z-P],It(e.roof,.97)),M([R,l,C,0,l,C,L-P,B,z+P,L+P,B,z+P],e.roof),M([0,l,C,0,l,0,L-P,B,z-P,L-P,B,z+P],It(e.roof,.97)),r.box(L-P,B,z-P,L+P,B+.8,z+P,It(Vs,.9),$(8363952));for(const[I,U,F,Z]of[[6,12,13,23],[6,12,26,33],[5,10,39,45]])M([I,H(I,F)+.12,F,U,H(U,F)+.12,F,U,H(U,Z)+.12,Z,I,H(I,Z)+.12,Z],Uu);const G=l-.35;r.cap(bv,G,Xs),r.quad(R,G,0,R,G,C,R,l,C,R,l,0,Vs);for(const[I,U,F,Z]of[[67.5,77,30,44],[67.5,77,47,62],[80.5,87,30,41]])r.box(I,G,F,U,G+.16,Z,vn,Uu);for(const[I,U]of[[70,12],[73.5,17],[69,22],[84,44.5],[72,64],[91,25]])r.box(I,G,U,I+2.2,G+1.1,U+1.3,sa,It(sa,.85));const q=c-.6;r.box(70.5,G,4,75.5,q,5.1,hi);for(let I=G;I<q-1.4;I+=.5)r.box(70.5,I,5.1,75.5,I+.3,8.2,It(hi,1.25),null);r.box(70.5,q-1.6,5.1,75.5,q-1.4,8.2,hi),p(s.centre(75.5,4),s.centre(70.5,4)),x(.25,4.75,q-3.9,q-.25,.04,Zn.tower());const X=s.centre(98.4,23.2),O=s.centre(98.4,26.3),k=s.centre(75.2,0);let V=p(X,k);r.box(0,l,-.3,V,h,0,me,me),y(.3,3.4,g(1.8),g(1.8)+3.6,qs);{const I=g(2,1);v(.6,I-.5,.25,3.8,I+.8,1.6,vl);for(const U of[1.2,2.2,3.2])b(U,I+.75,.9,.8);r.box(-.5,I,.3,.3,I+1.9,1.3,$(9067066));for(let U=0;U<4;U++)r.box(4.3+U*.5,I+.25,.3,4.7+U*.5,I+1,.9,vn,null)}const pt=(I,U,F)=>{for(let Z=I;Z<U;Z+=3){const D=Math.min(Z+3,U),j=g(Z,1.4)+.3,J=g(D,1.4)+.3;M([Z,j,0,Z,j,F,D,J,F,D,J,0],ia),r.quad(Z,j-.6,F,D,J-.6,F,D,J,F,Z,j,F,ui)}};pt(-1,V,2.8);const Y=7,ct=(V-Y-3.6)/3;for(let I=0;I<3;I++){const U=3.6+I*ct,F=U+ct,Z=g((U+F)/2);r.box(U,Z-.6,0,F,Z+.05,.08,It(Vs,.8),null),y(U+.35,F-.35,Z+.05,Z+3),E(U+.15,F-.15,Z+3.25,2.1,Math.min(h-.3,Z+5.3)),S(U,F,Z+3.75,h,1.3,me)}const ut=Gt+4;y(V-Y,V-.2,g(V-4)-.2,ut,qs,.5),r.box(V-Y,ut,0,V,ut+.5,.35,hi),S(V-Y,V,ut+.5,h,1.3,me),V=p(k,s.nw),y(.2,6.6,Gt-1.2,ut,qs,.5),r.box(0,ut,0,6.8,ut+.5,.35,hi);{const U=g(48,3);S(24.2,V,U+4.1,l,6,Ws),y(31,57,U+.1,U+3.1),r.box(27,U+3.5,0,69,U+3.7,2.6,It(me,.92),Xs,It(me,.85)),r.box(27,U+3.45,2.5,69,U+3.95,2.6,me);for(let F=28;F<=68;F+=8){const Z=t.yAt(r.wx(F,2.4),r.wz(F,2.4))-.2;r.cyl(F,Z,2.4,.09,.09,U+3.7-Z,5,vn)}}const at=s.centre(0,66.5),xt=s.centre(79.3,66.5);V=p(s.nw,at),S(0,V,g(V/2)+.3,l,6,Ws);for(const I of[48,55])r.box(I,g(I+2)-.3,0,I+4,g(I+2)+4,.1,vn,null);V=p(at,xt),S(0,V,g(V/2)+.3,l,6,Ws);{const I=g(22,3);for(let U=11;U<33;U+=5.5)r.box(U,I-.5,0,U+4.2,I+4.2,.1,vn,null);r.box(8,I+5,0,36,I+5.25,5,It(me,.92),Xs,It(me,.82));for(const U of[8.3,17.5,26.5,35.7])r.cyl(U,I-1,4.7,.11,.11,6,5,vn)}const Ct=s.centre(79.3,42.5),$t=s.centre(88.2,47.9),st=s.centre(88.2,26.3);V=p(xt,Ct),S(0,V,g(V/2)+.3,l,6,Ws),r.box(4,g(5)-.2,0,5.1,g(5)+2.1,.08,Ys,null),V=p($t,st),r.box(0,l,-.3,V,h,0,me,me),S(0,V,g(V/2)+.3,h,1.3,me),r.box(3,g(4)-.2,0,4.1,g(4)+2.1,.08,Ys,null),V=p(st,O),r.box(0,l,-.3,V,h,0,me,me);{const I=g(4);y(.5,5.4,I+.05,I+3),E(.3,5.6,I+3.25,1.9,Math.min(h-.3,I+5.3)),S(0,5.8,I+3.75,h,1.3,me),y(6,V-.2,g(8)-.1,g(8)+3.6,qs),x(6.5,V-.6,g(8)+1.25,g(8)+2.4,.13,Zn.cafe()),pt(0,V+1,2.2);for(const U of[6.8,8.6])b(U,g(U,2.6)+.3,2.6,1.5,Tv,$(11880538))}V=p(O,X),r.box(0,l,-.3,V,h,0,me,me),y(.2,V-.2,g(3)-.1,g(3)+3.6,qs),m();const dt=t.yAt(X[0],X[1]),Tt=95.9,Bt=23.8,Ut=4.4,ee=-50*Math.PI/180,At=100*Math.PI/180,Yt=16,ce=dt+3.75,de=h+.8,Ee=(I,U=Ut)=>{const F=ee+(At-ee)*I/Yt;return[Tt+U*Math.cos(F),Bt+U*Math.sin(F)]};for(let I=0;I<Yt;I++){const[U,F]=Ee(I),[Z,D]=Ee(I+1),[j,J]=Ee(I,Ut-.14),[ot,lt]=Ee(I+1,Ut-.14),ft=I%2?It($s,.955):$s;r.quad(Z,ce,D,U,ce,F,U,de,F,Z,de,D,ft),r.quad(j,ce,J,ot,ce,lt,ot,de,lt,j,de,J,It($s,.7)),M([U,de,F,Z,de,D,ot,de,lt,j,de,J],It($s,.85))}const qe=[];for(let I=0;I<=Yt;I++)qe.push(...Ee(I,Ut-.14));const[ke,K]=Ee(0,Ut-.14);qe.push(Ee(Yt,Ut-.14)[0],26.3,98.4,26.3,98.4,23.2,(ke+K+75.2)/2,(ke+K-75.2)/2),r.cap(qe,ce+.02,hi);const Ye=[];for(let I=0;I<=Yt;I++)Ye.push(...Ee(I,Ut+.9));Ye.push(Ee(Yt)[0],26.3,98.4,26.3,98.4,23.2,(ke+K+75.2)/2,(ke+K-75.2)/2),r.cap(Ye,dt+.32,ia);{const I=[101.6,c,21.4],U=[82,h+1.3,4],F=[86,h+1.3,29.6],Z=[77,h+.5,13],D=$(4935765),j=.32;for(const[J,ot,lt]of[[I,U,Z],[I,Z,F]])M([J[0],J[1],J[2],ot[0],ot[1],ot[2],lt[0],lt[1],lt[2],lt[0],lt[1],lt[2]],D),r.tri(J[0],J[1]-j,J[2],ot[0],ot[1]-j,ot[2],lt[0],lt[1]-j,lt[2],It(D,1.6));for(const[J,ot]of[[I,U],[U,Z],[Z,F],[F,I]])r.quad(J[0],J[1]-j,J[2],ot[0],ot[1]-j,ot[2],ot[0],ot[1],ot[2],J[0],J[1],J[2],It(D,.9));for(const[J,ot,lt]of[[99.3,25.5,c-1.2],[98.9,20.6,c-1.5],[94.2,27.9,h+2.2]]){const[ft,wt]=s.centre(J,ot);r.cyl(J,t.yAt(ft,wt)-.3,ot,.17,.17,lt-t.yAt(ft,wt)+.3,6,hi)}}const ge=Zn.entry(),ue={pos:[],uv:[]};{const I=62*Math.PI/180,U=-34*Math.PI/180,F=14,Z=ce+.8,D=ce+2.4;for(let j=0;j<F;j++){const J=Ot=>{const Xt=I+(U-I)*Ot/F;return s.centre(Tt+(Ut+.05)*Math.cos(Xt),Bt+(Ut+.05)*Math.sin(Xt))},[ot,lt]=J(j),[ft,wt]=J(j+1),Wt=j/F,gt=(j+1)/F;ue.pos.push(ot,Z,lt,ft,Z,wt,ft,D,wt,ot,Z,lt,ft,D,wt,ot,D,lt),ue.uv.push(Wt,0,gt,0,gt,1,Wt,0,gt,1,Wt,1)}}_();const vt=s.south(0),Se=s.south(-13),Ft=s.south(5.2),kt=-13,N=6.4;r.walls([0,0,0,vt,kt,Se,kt,0],d,sn,Vs);const w=[kt,0,0,0,0,-.6,N,-.6,N,Ft,5.2,Ft,kt,Se];r.cap(w,na,Xs),r.walls(w,sn,na,me),r.cap([0,-.6,N,-.6,N,Ft,5.2,Ft,0,vt],sn,It(me,.93));for(const[I,U]of[[-9,4],[-6,12],[-9.5,16]])r.box(I,na,U,I+2.2,na+1.1,U+1.3,sa,It(sa,.85));for(let I=1.2;I<vt-1;I+=2.6)for(const U of[1.6,4.4])r.quad(U-.14,sn-.02,I-.14,U+.14,sn-.02,I-.14,U+.14,sn-.02,I+.14,U-.14,sn-.02,I+.14,$(16774358),3);const tt=3.6;r.walls([0,-.3,tt,-.3,tt,s.south(tt),0,vt],d,Gt,ui),r.cap([0,-.3,tt,-.3,tt,s.south(tt),0,vt],Gt,ia);for(let I=1;I<=5;I++){const U=I*Gs;for(const F of[-.2,.2])r.cyl(4.3,Gt,U+F,.1,.1,sn-Gt,7,me);r.cyl(1.5,Gt,U+.5,.055,.055,sn-Gt,5,vn)}const mt=s.south(4.3)-.4;for(const[I,U]of[[-.3,Hs[0]],[Hs[1],mt]]){v(tt,d,I,5,Gt+.45,U,vl);for(let F=I+.9;F<U-.6;F+=1.7+a()*.9){const Z=a();Math.abs(F/Gs-Math.round(F/Gs))<.12||(Z<.55?b(4.3,Gt+.4,F,1.5+a()*1.1):Z<.75?(r.cyl(4.3,Gt+.4,F,.07,.05,1.3,5,$(9076076)),r.blob(4.3,Gt+2.1,F,.85,.6,.85,7,4,Ml,ra)):T(4.3,Gt+.4,F,.5))}for(let F=I;F<U-.2;F+=4.4){const Z=Math.min(F+4.4,U),D=$n((F+Z)/2);if(!(D>Gt-.65)){v(5,d,F,6.3,D+.75,Z,vl);for(let j=F+.5;j<Z-.3;j+=.9+a()*.5)T(5.65,D+.7,j,.28+a()*.14,Ml,a()<.3?$(11122592):ra)}}}{const[I,U]=Hs,F=$n((I+U)/2)+.12,Z=Gt-F,D=Math.round(Z/.168),j=(6.3-tt-.3)/D;for(let J=0;J<D;J++)r.box(tt+.3+j*J,d,I,tt+.3+j*(J+1),Gt-Z*(J+1)/D,U,ui);r.box(tt,d,I,tt+.3,Gt,U,ui);for(const J of[I+.12,(I+U)/2,U-.12]){for(const[ot,lt]of[[tt+.3,Gt],[6.3,F]])r.box(ot-.03,lt,J-.03,ot+.03,lt+.95,J+.03,vn,null);r.quad(tt+.3,Gt+.9,J-.03,6.3,F+.9,J-.03,6.3,F+.96,J+.03,tt+.3,Gt+.96,J+.03,vn)}}{const I=Z=>Z>=-2?9.8:9.8+(Z+2)*.6,U=Z=>Z<-.3?2.6:(Z<Hs[0]||Z>Hs[1])&&$n(Z)>Gt-.65?5:6.3,F=Ft+1;for(let Z=-9.5;Z<F;Z+=1.5){const D=Math.min(Z+1.5,F),j=$n(Z)+.12,J=$n(D)+.12;M([U(Z+.01),j,Z,I(Z),j,Z,I(D),J,D,U(Z+.01),J,D],ia),r.quad(I(Z),j-1.2,Z,I(D),J-1.2,D,I(D),J,D,I(Z),j,Z,ui)}v(2.2,d,-9.5,2.6,$n(-5)+1.05,-.8)}v(2.6,d,-.8,4.5,sn,-.3,null),v(kt,d,-.25,0,sn,.02,null),p(s.wing(4.5,-.8),s.wing(2.6,-.8)),r.box(.15,Gt+3.8,0,1.75,Gt+4.4,.05,me),x(.15,1.75,Gt+3,Gt+3.7,.05,Zn.pylonDental()),r.box(.15,Gt+2.3,0,1.75,Gt+2.9,.05,me),x(.15,1.75,Gt+.8,Gt+1.5,.05,Zn.parking()),x(.15,1.75,Gt-.1,Gt+.7,.05,Zn.boot()),V=p(s.wing(0,vt),s.wing(0,0)),y(.4,V-.4,Gt,Gt+2.9),r.box(0,Gt+2.9,0,V,Gt+3.3,.12,$(9407106)),S(.2,V-.1,Gt+3.3,sn-.05,1.25,$s,.2,.3);for(let I=1;I<=5;I++)r.box(V-I*Gs-.9,Gt+3,.1,V-I*Gs-.82,Gt+3.08,1.5,vn);x(V-19.6,V-16,Gt+3.5,Gt+4.7,.34,Zn.dental()),x(V-14.6,V-11.2,Gt+3.55,Gt+4.68,.34,Zn.medical()),V=p(s.wing(kt,0),s.wing(kt,Se));{const I=g(V/2,3);r.box(.4,I-.3,-.5,V-.4,Gt-.6,.02,$(1777185),null);for(let U=0;U<=V;U+=V/4)r.box(U-.3,I-.5,0,U+.3,Gt-.6,.12,ui,null);r.box(0,Gt-.6,0,V,Gt,.12,ui),S(0,V,Gt,sn,1.3,Ws)}V=p(s.wing(8.4,-2.8),s.wing(5.6,-4.4));{const I=$n(-3.6)+.12;v(0,I-1,-.35,V,I+1.15,0),x(.2,V-.2,I+.14,I+1.02,.03,Zn.square())}_();{const I=$n(15.6)+.12;r.box(6.9,I,15.2,7.4,I+.1,16,ui),r.box(6.95,I+.1,15.25,7.35,I+1.3,15.95,$(15855590),$(14276300)),r.box(7.35,I+.35,15.35,7.37,I+1,15.6,$(15909424),null),r.box(7.35,I+.3,15.65,7.37,I+.95,15.88,$(3108790),null);for(const[U,F,Z]of[[9.2,-1.2,Math.PI],[5.4,-8.4,Math.PI*.75]]){const D=$n(F)+.12,j=r.wx(U,F),J=r.wz(U,F);r.frame(j,0,J,s.wingHeading+Z),r.cyl(0,D,0,.07,.07,4.2,6,vn),r.box(-.17,D+2.9,.08,.17,D+3.95,.3,$(1776927));for(const[ot,lt,ft]of[[0,14169643,0],[1,15114780,0],[2,3126359,2]]){const wt=D+3.62-ot*.32;r.quad(-.1,wt,.31,.1,wt,.31,.1,wt+.22,.31,-.1,wt+.22,.31,It($(lt),ft?1:.45),ft)}f()}}r.frame();const ht=new Jt(r.build(),qn());ht.castShadow=!0,ht.receiveShadow=!0,n.add(ht);for(const I of o){const U=new Re,F=I.corners;U.setAttribute("position",new ae([F[0],F[1],F[2],F[3],F[4],F[5],F[6],F[7],F[8],F[0],F[1],F[2],F[6],F[7],F[8],F[9],F[10],F[11]],3)),U.setAttribute("uv",new ae([0,0,1,0,1,1,0,0,1,1,0,1],2)),U.computeVertexNormals(),n.add(new Jt(U,Fu(I.tex)))}const _t=new Re;return _t.setAttribute("position",new ae(ue.pos,3)),_t.setAttribute("uv",new ae(ue.uv,2)),_t.computeVertexNormals(),n.add(new Jt(_t,Fu(ge))),n}const oa=[3104138,12076090,15131350,4156234,2895411,14263361,8018572,10135469,15043163,4886453].map(i=>new Rt(i)),zu=[3422271,5989488,2832981,7035464,2040100,11049860].map(i=>new Rt(i)),Bu=[14727578,13211508,10252114,15782068,8016960].map(i=>new Rt(i)),ku=[3811870,13214314,15260870,1907999,9067059].map(i=>new Rt(i)),Cv=240,Gu=230;class Pv{constructor(t,e,n,s,r=()=>!1){it(this,"group",new Le);it(this,"walks",[]);it(this,"centres");it(this,"people",[]);it(this,"parts");it(this,"rand",Xn(9071));it(this,"m",new ne);it(this,"r",new ne);it(this,"q",new rn);it(this,"v",new Q);it(this,"up",new Q(0,1,0));it(this,"one",new Q(1,1,1));it(this,"size",new Q);it(this,"hip",new ne);it(this,"body",new ne);this.hf=n,this.skip=r,this.group.name="strollers";for(const p of t){if(p.cls>3||p.flags&(Gr|Ds)||p.length<30)continue;const g=e[String(p.index)],x=g?[[1,g[0]/10],[-1,g[1]/10]]:p.cls<=2?[[1,2.3],[-1,2.3]]:[];for(const[M,S]of x){if(!(S>0))continue;const y=p.pts.length/3,E=new Float32Array(y*2),v=new Float32Array(y);for(let b=0;b<y;b++){const T=Math.max(b-1,0),R=Math.min(b+1,y-1);let C=p.pts[R*3]-p.pts[T*3],L=p.pts[R*3+2]-p.pts[T*3+2];const z=Math.hypot(C,L)||1;C/=z,L/=z;const P=p.width/2+S;E[b*2]=p.pts[b*3]-L*M*P,E[b*2+1]=p.pts[b*3+2]+C*M*P,b&&(v[b]=v[b-1]+Math.hypot(E[b*2]-E[b*2-2],E[b*2+1]-E[b*2-1]))}this.walks.push({pts:E,at:v,length:v[y-1]})}}this.centres=new Float32Array(this.walks.length*2),this.walks.forEach((p,g)=>{const x=Math.floor(p.pts.length/4)*2;this.centres[g*2]=p.pts[x],this.centres[g*2+1]=p.pts[x+1]});const a=qn({roughness:.84}),o=(p,g)=>{const x=new Vn(p.build(),a,g);return x.castShadow=!0,x.frustumCulled=!1,x.count=0,x.setColorAt(0,new Rt(1,1,1)),this.group.add(x),x},l=$(16777215),c=$(12105912),h=new ie;h.box(-.21,.84,-.12,.21,1.42,.12,l);const d=new ie;d.blob(0,1.56,0,.11,.13,.11,6,3,l);const f=new ie;f.box(-.08,-.84,-.09,.08,0,.09,l,null);const u=new ie;u.box(-.04,-.58,-.09,.04,0,.09,l,null);const m=new ie;m.box(-.12,.32,-.32,.12,.56,.3,l),m.box(-.09,.48,.26,.09,.7,.48,l),m.box(-.05,.5,.46,.05,.6,.58,c);for(const p of[-.08,.08])m.box(p-.03,.68,.3,p+.03,.78,.36,c);m.box(-.025,.5,-.5,.025,.56,-.3,l);for(const[p,g]of[[-.08,.2],[.08,.2],[-.08,-.22],[.08,-.22]])m.box(p-.035,0,g-.04,p+.035,.34,g+.04,c);const _=new ie;_.box(-.012,0,-.012,.012,1,.012,$(13123631),null),this.parts={torso:o(h,s),head:o(d,s),leg:o(f,s*2),arm:o(u,s*2),dog:o(m,s),lead:o(_,s)},this.parts.lead.castShadow=!1;for(let p=0;p<s;p++)this.people.push(this.newWalker())}newWalker(){return{walk:this.walks[0],s:-1,dir:1,pace:1.15+this.rand()*.4,tall:.92+this.rand()*.12,lane:(this.rand()-.5)*.5,dog:this.rand()<.35?Math.floor(this.rand()*ku.length):-1,heading:0,dogHeading:0}}place(t,e,n){const s=[];for(let r=0;r<this.walks.length;r++)Math.hypot(this.centres[r*2]-e,this.centres[r*2+1]-n)<Gu*.8&&s.push(r);return s.length?(t.walk=this.walks[s[Math.floor(this.rand()*s.length)]],t.s=this.rand()*t.walk.length,t.dir=this.rand()<.5?1:-1,!0):!1}where(t,e){const n=t.at,s=t.pts;let r=0,a=n.length-1;for(;a-r>1;){const d=r+a>>1;n[d]<e?r=d:a=d}const o=n[a]-n[r]||1,l=Math.min(1,Math.max(0,(e-n[r])/o)),c=(s[a*2]-s[r*2])/o,h=(s[a*2+1]-s[r*2+1])/o;return[s[r*2]+(s[a*2]-s[r*2])*l,s[r*2+1]+(s[a*2+1]-s[r*2+1])*l,c,h]}update(t,e,n,s){const r=s<Cv&&this.walks.length>0;if(this.group.visible=r,!r)return!1;const a=this.parts;let o=0,l=0;for(const c of this.people){if(c.s<0&&!this.place(c,e,n))continue;c.s+=c.dir*c.pace*t,(c.s>c.walk.length||c.s<0)&&(c.dir=-c.dir,c.s=Math.min(c.walk.length,Math.max(0,c.s)));let[h,d,f,u]=this.where(c.walk,c.s);if(Math.hypot(h-e,d-n)>Gu){c.s=-1;continue}if(f*=c.dir,u*=c.dir,h+=u*c.lane,d-=f*c.lane,this.skip(h,d))continue;let m=Math.atan2(f,u)-c.heading;m=Math.atan2(Math.sin(m),Math.cos(m)),c.heading+=m*Math.min(1,t*5);const _=this.hf.yAt(h,d)+.02,p=c.tall,g=Math.sin(c.s*4.4)*.55;this.q.setFromAxisAngle(this.up,c.heading),this.body.compose(this.v.set(h,_,d),this.q,this.size.set(p,p,p)),a.torso.setMatrixAt(o,this.body),a.head.setMatrixAt(o,this.body);const x=o*7+Math.floor(c.pace*100)>>>0;a.torso.setColorAt(o,oa[x%oa.length]),a.head.setColorAt(o,Bu[x%Bu.length]);for(const[M,S]of[[0,-1],[1,1]])this.r.makeRotationX(S*g).premultiply(this.hip.makeTranslation(S*.09,.84,0).premultiply(this.body)),a.leg.setMatrixAt(o*2+M,this.r),a.leg.setColorAt(o*2+M,zu[x%zu.length]),this.r.makeRotationX(-S*g*.8).premultiply(this.hip.makeTranslation(S*.25,1.38,0).premultiply(this.body)),a.arm.setMatrixAt(o*2+M,this.r),a.arm.setColorAt(o*2+M,oa[x%oa.length]);if(c.dog>=0){const M=h+f*1+u*.75,S=d+u*1-f*.75;let y=Math.atan2(f,u)-c.dogHeading;y=Math.atan2(Math.sin(y),Math.cos(y)),c.dogHeading+=y*Math.min(1,t*4);const E=Math.abs(Math.sin(c.s*7))*.03;this.q.setFromAxisAngle(this.up,c.dogHeading),this.m.compose(this.v.set(M,this.hf.yAt(M,S)+.02+E,S),this.q,this.one),a.dog.setMatrixAt(l,this.m),a.dog.setColorAt(l,ku[c.dog]);const v=h+u*.26*p+f*.1,b=d-f*.26*p+u*.1,T=_+.86*p,R=M+f*.3,C=S+u*.3,L=this.hf.yAt(M,S)+.62,z=v-R,P=T-L,B=b-C,H=Math.hypot(z,P,B)||1;this.q.setFromUnitVectors(this.up,this.v.set(z/H,P/H,B/H)),this.m.compose(this.v.set(R,L,C),this.q,this.size.set(1,H,1)),a.lead.setMatrixAt(l,this.m),l++}o++}a.torso.count=a.head.count=o,a.leg.count=a.arm.count=o*2,a.dog.count=a.lead.count=l;for(const c of Object.values(a))c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0);return o>0}dispose(){for(const t of Object.values(this.parts))t.geometry.dispose(),t.dispose()}}function Lv(){const i=[];let t=new ie;t.cyl(0,0,0,.04,.026,.56,4,$(12168602)),ns(t,0,.72,0,.36,.3,.36,2,$(4020790),$(9086578)),ns(t,.17,.52,.1,.24,.19,.24,3,$(3757370),$(8099942)),i.push(Si(t)),t=new ie,t.cyl(0,0,0,.06,.045,.36,4,$(7034954)),ns(t,0,.62,0,.47,.4,.47,4,$(2773542),$(7973460)),i.push(Si(t)),t=new ie,t.cyl(0,0,0,.05,.035,.42,4,$(6246470)),ns(t,0,.66,0,.5,.34,.5,5,$(6114450),$(12034278)),i.push(Si(t)),t=new ie,t.cyl(0,0,0,.07,.05,.5,4,$(6969418)),ns(t,0,.7,0,.62,.26,.62,6,$(4156975),$(14831660)),i.push(Si(t)),t=new ie,t.cyl(0,0,0,.034,.026,.82,5,$(10128504));for(let e=0;e<7;e++)t.frame(0,0,0,e/7*Math.PI*2),t.blob(0,.83-e%2*.03,.13,.04,.022,.13,4,3,$(3959600),$(7972432));return t.frame(),t.blob(0,.86,0,.06,.06,.06,5,3,$(5077562)),i.push(Si(t)),t=new ie,t.cyl(0,0,0,.03,.022,.2,4,$(5194038)),t.cyl(0,.14,0,.2,.1,.3,6,$(2310186)),t.cyl(0,.4,0,.16,.07,.3,6,$(2837040)),t.cyl(0,.66,0,.11,0,.34,6,$(3627578)),i.push(Si(t)),t=new ie,ns(t,0,.45,0,.8,.5,.8,1,$(3101224),$(7774294)),i.push(Si(t)),i}function Dv(i,t,e,n=()=>!1){return s_(i.trees,Lv(),t,e,n)}const yl=6,Iv=1,Hu=2,Nv=3,Uv=4,Fv=5,Ov=6,zv=7,Bv=8,kv=9,Gv=10,Hv=11,Vv=12,Wv=13,Xv=14,qv=17,Mn=90,Vu=330,bi=$(9409430),bl=$(2500651),Yv=$(9071178),$v=$(13815750),El=$(3104058),Kv=$(11022890),Zv=$(14268718),Wu=[5209412,5932872,6853456,4682303,7245642].map($),Xu=[14241898,15262416,14726447,11038665].map($),qu=[3104138,12076090,15131350,4156234,2895411,14263361,8018572,10135469].map($),Yu=[8359802,13223088,9278358,6253414,14210508].map($),$u=[10463130,13223088,7306612,14210508].map($),Ku=[3811870,13214314,15260870,1907999,9067059].map($),Jv=[$(15855592),$(9075560),$(10246723),$(2763822)];function Qv(i,t,e=0){const n=Ku[t%Ku.length],s=It(n,.7);i.box(-.32,.32,-.12,.3,.56,.12,n),i.box(.26,.48,-.09,.48,.7,.09,n),i.box(.46,.5,-.05,.58,.6,.05,s);for(const r of[-.08,.08])i.box(.3,.68,r-.03,.36,.78,r+.03,s);i.box(-.5,.5,-.025,-.3,.56,.025,n);for(const[r,a,o]of[[.2,-.08,e],[.2,.08,-e],[-.22,-.08,-e],[-.22,.08,e]])i.box(r-.04+o*.12,0,a-.035,r+.04+o*.12,.34,a+.035,s)}function wl(i,t,e,n){const s=i/2+n,r=t/2+n;if(!e)return[[-s,-r],[s,-r],[s,r],[-s,r]];const a=Math.min(r,s),o=[];for(const[l,c]of[[s-a,-Math.PI/2],[-s+a,Math.PI/2]])for(let h=0;h<=6;h++){const d=c+h/6*Math.PI;o.push([l+Math.cos(d)*a,Math.sin(d)*a])}return o}class jv{constructor(t,e,n,s,r=()=>!1){it(this,"group",new Le);it(this,"cells",new Map);it(this,"built",new Map);it(this,"material",qn({roughness:.84}));it(this,"water",new Xe({color:4635862,roughness:.08,metalness:.1,emissive:871260,emissiveIntensity:.35,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}));it(this,"flatMat",qn({roughness:.9}));it(this,"far");this.data=t,this.hf=e,this.shadows=n,this.near=s,this.skip=r,this.far=s+150,this.group.name="yards",this.flatMat.polygonOffset=!0,this.flatMat.polygonOffsetFactor=-2,this.flatMat.polygonOffsetUnits=-4;for(let a=0;a+yl<=t.length;a+=yl){const o=`${Math.floor(t[a+1]/10/Mn)}:${Math.floor(t[a+2]/10/Mn)}`;let l=this.cells.get(o);l||this.cells.set(o,l=[]),l.push(a)}}get count(){return this.data.length/yl}update(t,e,n){const s=n<Vu;let r=this.group.visible!==s;this.group.visible=s;for(const[d,f]of this.built){const[u,m]=d.split(":").map(Number);Math.hypot((u+.5)*Mn-t,(m+.5)*Mn-e)>this.far&&(this.group.remove(f),f.traverse(_=>{var p;return(p=_.geometry)==null?void 0:p.dispose()}),this.built.delete(d),r=!0)}if(!s)return r;let a=null,o=this.near;const l=Math.floor(t/Mn),c=Math.floor(e/Mn),h=Math.ceil(this.near/Mn)+1;for(let d=c-h;d<=c+h;d++)for(let f=l-h;f<=l+h;f++){const u=`${f}:${d}`;if(this.built.has(u)||!this.cells.has(u))continue;const m=Math.hypot((f+.5)*Mn-t,(d+.5)*Mn-e);m<o&&(o=m,a=u)}if(a){const d=this.build(this.cells.get(a));this.built.set(a,d),this.group.add(d),r=!0}return r}pending(t,e,n){if(n>=Vu)return!1;for(const s of this.cells.keys()){if(this.built.has(s))continue;const[r,a]=s.split(":").map(Number);if(Math.hypot((r+.5)*Mn-t,(a+.5)*Mn-e)<this.near)return!0}return!1}build(t){const e=this.data,n=this.hf,s=new ie,r=new ie,a=new ie;for(const c of t){const h=e[c],d=e[c+1]/10,f=e[c+2]/10,u=e[c+3]/10*Math.PI/180,m=e[c+4],_=e[c+5];if(this.skip(d,f))continue;const p=n.yAt(d,f),g=e[c+1]*31+e[c+2]*17>>>0,x=Xn(g+7);switch(h){case Iv:case Hu:{const M=m/100,S=_/100,y=h===Hu,E=wl(M,S,y,0),v=wl(M,S,y,.6),b=wl(M,S,y,1.5),T=(L,z,P)=>{const B=d+L*Math.cos(u)-z*Math.sin(u),H=f+L*Math.sin(u)+z*Math.cos(u);return[B,n.yAt(B,H)+P,H]},R=$(4635862);for(let L=1;L+1<E.length;L++){const z=T(...E[0],.05),P=T(...E[L],.05),B=T(...E[L+1],.05);a.tri(z[0],z[1],z[2],B[0],B[1],B[2],P[0],P[1],P[2],R)}for(let L=0;L<E.length;L++){const z=(L+1)%E.length,P=T(...E[L],.07),B=T(...E[z],.07),H=T(...v[L],.07),G=T(...v[z],.07);r.quad(P[0],P[1],P[2],H[0],H[1],H[2],G[0],G[1],G[2],B[0],B[1],B[2],$v)}const C=$(1974307);for(let L=0;L<b.length;L++){const z=(L+1)%b.length,[P,,B]=T(...b[L],0),[H,,G]=T(...b[z],0),q=Math.hypot(H-P,G-B);if(q<.2)continue;const X=(H-P)/q,O=(G-B)/q,k=Math.max(1,Math.round(q/.25));for(let V=0;V<k;V++){const pt=P+X*(V*q/k),Y=B+O*(V*q/k),ct=n.yAt(pt,Y),ut=V%Math.max(1,Math.round(2.4/.25))===0?.03:.011;this.skip(pt,Y)||(s.frame(pt,ct,Y,Math.atan2(X,O)),s.box(-ut,0,-ut,ut,1.2,ut,C,null))}for(const V of[.1,1.15]){const pt=n.yAt(P,B)+V,Y=n.yAt(H,G)+V;s.frame(),s.quad(P,pt,B,H,Y,G,H,Y+.04,G,P,pt+.04,B,C)}}break}case Nv:{const M=m/100;s.frame(d,p,f,u),s.cyl(0,0,0,.04,.04,2.1,6,bi);for(let S=0;S<4;S++){const y=Math.cos(S*Math.PI/2),E=Math.sin(S*Math.PI/2);s.quad(0,1.95,0,y*M,2.08,E*M,y*M,2.12,E*M,0,1.99,0,bi)}for(const S of[.45,.72,1]){const y=M*S;for(let E=0;E<4;E++){const v=E*Math.PI/2,b=(E+1)*Math.PI/2,T=1.95+.13*S;s.box(Math.min(Math.cos(v)*y,Math.cos(b)*y)-.008,T-.008,Math.min(Math.sin(v)*y,Math.sin(b)*y)-.008,Math.max(Math.cos(v)*y,Math.cos(b)*y)+.008,T+.008,Math.max(Math.sin(v)*y,Math.sin(b)*y)+.008,$(13619922),null)}}if(x()<.55)for(let S=0;S<4;S++){if(x()<.45)continue;const y=S*Math.PI/2,E=M*.95;for(let v=0;v<3;v++){const b=(v+.5)/3,T=Math.cos(y)*E*(1-b)+Math.cos(y+Math.PI/2)*E*b,R=Math.sin(y)*E*(1-b)+Math.sin(y+Math.PI/2)*E*b,C=.5+x()*.35,L=.22+x()*.12,z=qu[Math.floor(x()*qu.length)],P=(Math.cos(y+Math.PI/2)-Math.cos(y))*.7071,B=(Math.sin(y+Math.PI/2)-Math.sin(y))*.7071;s.quad(T-P*L,2.1,R-B*L,T+P*L,2.1,R+B*L,T+P*L,2.1-C,R+B*L,T-P*L,2.1-C,R-B*L,z)}}break}case Uv:{const M=$u[g%$u.length],S=m/200,y=_/200;s.frame(d,p,f,u),s.box(-S,0,-y,S,1.9,y,M),s.quad(-S-.1,1.85,y+.1,S+.1,1.85,y+.1,S+.1,2.25,0,-S-.1,2.25,0,It(M,1.08)),s.quad(S+.1,1.85,-y-.1,-S-.1,1.85,-y-.1,-S-.1,2.25,0,S+.1,2.25,0,It(M,.95)),s.tri(S,1.9,y,S,1.9,-y,S,2.25,0,M),s.tri(-S,1.9,-y,-S,1.9,y,-S,2.25,0,M),s.quad(-.75,0,y+.01,.75,0,y+.01,.75,1.75,y+.01,-.75,1.75,y+.01,It(M,.86)),s.box(-.01,.1,y+.01,.01,1.7,y+.03,It(M,.7),null);break}case Fv:{const M=m/100,S=.85,y=[$(3108789),$(3840586),$(14262842)][g%3];s.frame(d,p,f,u),s.cyl(0,S-.02,0,M+.25,M+.25,.08,12,y,y),s.cyl(0,S,0,M,M,.07,12,bl,bl);for(let E=0;E<6;E++){const v=E/6*Math.PI*2,b=Math.cos(v)*(M+.2),T=Math.sin(v)*(M+.2);E%2===0&&s.box(b-.03,0,T-.03,b+.03,S,T+.03,bi,null),s.box(b-.025,S,T-.025,b+.025,S+1.75,T+.025,$(2895667),null);const R=(E+1)/6*Math.PI*2,C=Math.cos(R)*(M+.2),L=Math.sin(R)*(M+.2);s.quad(b,S+1.7,T,C,S+1.7,L,C,S+1.76,L,b,S+1.76,T,y)}break}case Ov:{const M=m/100,S=_/100,y=Yu[g%Yu.length];s.frame(d,p,f,0),s.cyl(0,0,0,M,M,S,10,y,It(y,.9));for(let E=1;E<4;E++)s.cyl(0,S*E/4,0,M+.012,M+.012,.04,10,It(y,.86));s.cyl(0,S,0,.18,.18,.08,6,It(y,.8),It(y,.8));break}case zv:s.frame(d,p,f,u),s.box(-.6,0,-.3,.6,.85,.3,$(2895409)),s.box(-.55,.85,-.28,.55,1.1,.28,$(10133154),$(3816512));break;case Bv:{const M=x()<.5?$(15526370):$(3882304),S=[$(15328207),$(3104138),$(12076090)][g%3];s.frame(d,p,f,u),s.cyl(0,.7,0,.55,.55,.05,8,M,M),s.box(-.04,0,-.04,.04,.7,.04,bi,null),x()<.5&&(s.box(-.025,.7,-.025,.025,2.2,.025,bi,null),s.cyl(0,2,0,1.4,0,.45,8,S));for(let y=0;y<4;y++){const E=y/4*Math.PI*2+.4,v=Math.cos(E)*.85,b=Math.sin(E)*.85;s.box(v-.22,0,b-.22,v+.22,.45,b+.22,M),s.box(v+Math.cos(E)*.2-.04,.45,b+Math.sin(E)*.2-.2,v+Math.cos(E)*.2+.04,.9,b+Math.sin(E)*.2+.2,M)}break}case kv:{const M=$(13123631),S=$(3104680);s.frame(d,p,f,u);for(const y of[-1.9,1.9])s.box(y-.07,0,-.92,y+.07,2.4,-.88,M,null),s.box(y-.07,0,.88,y+.07,2.4,.92,M,null);s.box(-2,2.36,-.07,2,2.48,.07,M);for(const y of[-.9,.9]){for(const E of[-.22,.22])s.box(y-.015,.48,E-.015,y+.015,2.38,E+.015,bi,null);s.box(y-.24,.44,-.24,y+.24,.5,.24,y<0?S:bl)}break}case Gv:s.frame(d,p,f,u),s.box(-.62,0,-.3,-.04,1,.3,El,Kv),s.box(.04,0,-.3,.62,1,.3,El,Zv),x()<.4&&s.box(.7,0,-.3,1.28,1,.3,El,$(6265402));break;case Hv:{const M=[$(15855592),$(2763822),$(10246723),$(13218442)][g%4];s.frame(d,p,f,u),g%3===0?s.box(-.22,0,-.22,.22,1.05,.22,$(10246723)):s.box(-.04,0,-.04,.04,.95,.04,bi,null),s.box(-.2,.95,-.15,.2,1.25,.15,M);break}case Vv:{const M=m/100,S=Math.max(2,Math.round(M/1.2)),y=Xn(_+11);s.frame(d,p,f,u);for(let E=0;E<S;E++){const v=S===1?0:E/(S-1)*M,b=.35+y()*.25,T=Wu[Math.floor(y()*Wu.length)],R=y()<.25?Xu[Math.floor(y()*Xu.length)]:It(T,1.12),C=d+Math.sin(u)*v,L=f+Math.cos(u)*v;s.frame(C,n.yAt(C,L),L,0),s.blob((y()-.5)*.3,b*.75,(y()-.5)*.3,b,b*.85,b,6,3,It(T,.8),R)}break}case Wv:{const M=m/10,S=_/10,y=Math.round(e[c+3]/10)%4,E=Jv[y],v=Math.hypot(M-d,S-f);if(v<.5)break;const b=(M-d)/v,T=(S-f)/v,R=Math.atan2(b,T),C=y===2?.8:y===1?1.2:1,L=Math.max(1,Math.round(v/2.4));for(let z=0;z<=L;z++){const P=d+b*(v*z)/L,B=f+T*(v*z)/L;s.frame(P,n.yAt(P,B),B,R);const H=y===2?.2:.05;s.box(-H,0,-H,H,C+(y===2?.15:.05),H,y===2?It(E,.9):E)}if(y===1||y===2)for(let z=0;z<L;z++){const P=d+b*(v*z)/L,B=f+T*(v*z)/L,H=d+b*(v*(z+1))/L,G=f+T*(v*(z+1))/L,q=n.yAt(P,B),X=n.yAt(H,G),O=T*.06,k=-b*.06;s.frame(),s.quad(P+O,q,B+k,H+O,X,G+k,H+O,X+C,G+k,P+O,q+C,B+k,E),s.quad(H-O,X,G-k,P-O,q,B-k,P-O,q+C,B-k,H-O,X+C,G-k,It(E,.92)),s.quad(P+O,q+C,B+k,H+O,X+C,G+k,H-O,X+C,G-k,P-O,q+C,B-k,It(E,1.05))}else{const z=y===0?.16:.12,P=Math.max(2,Math.round(v/z));for(let B=0;B<=P;B++){const H=d+b*(v*B)/P,G=f+T*(v*B)/P;s.frame(H,n.yAt(H,G),G,R),y===0?s.box(-.035,0,-.012,.035,C-.08,.012,E,$(15263454)):s.box(-.01,.05,-.01,.01,C-.05,.01,E,null)}for(const B of[.25,C-.2]){s.frame();const H=n.yAt(d,f)+B,G=n.yAt(M,S)+B,q=T*.02,X=-b*.02;s.quad(d+q,H,f+X,M+q,G,S+X,M+q,G+.05,S+X,d+q,H+.05,f+X,It(E,.95)),s.quad(M-q,G,S-X,d-q,H,f-X,d-q,H+.05,f-X,M-q,G+.05,S-X,It(E,.9))}}break}case Xv:{const M=[$(15328208),$(14205066),$(10469584)][g%3];s.frame(d,p,f,u);for(const[S,y]of[[-.8,-.7],[.8,-.7],[.8,.7],[-.8,.7]])s.box(S-.05,0,y-.05,S+.05,.9,y+.05,Yv,null);s.box(-.85,.9,-.75,.85,2,.75,M),s.quad(-.95,1.95,.85,.95,1.95,.85,.95,2.5,0,-.95,2.5,0,$(9128506)),s.quad(.95,1.95,-.85,-.95,1.95,-.85,-.95,2.5,0,.95,2.5,0,$(8077107)),s.tri(.85,2,.75,.85,2,-.75,.85,2.5,0,M),s.tri(-.85,2,-.75,-.85,2,.75,-.85,2.5,0,M),s.quad(.9,.9,-.3,1.6,0,-.3,1.6,0,.3,.9,.9,.3,$(14726447));break}case qv:s.frame(d,p,f,u),Qv(s,m);break}}const o=new Le,l=(c,h,d)=>{if(!c.vertexCount)return;const f=new Jt(c.build(),h);f.castShadow=d&&this.shadows,f.receiveShadow=!0,o.add(f)};return l(s,this.material,!0),l(r,this.flatMat,!1),l(a,this.water,!1),o}dispose(){for(const t of this.built.values())t.traverse(e=>{var n;return(n=e.geometry)==null?void 0:n.dispose()});this.built.clear(),this.material.dispose(),this.flatMat.dispose(),this.water.dispose()}}const Zu=1,Ju={x:-150,z:-40,dist:2900,polar:54,azimuth:22},t1={day:{shallow:9277288,deep:5003844},golden:{shallow:10127458,deep:4671290},night:{shallow:1976876,deep:593681}};function e1(i,t){const e=new ie,n=$(16765440),s=i.length/2;let r=0;for(let l=0;l<s;l++){const c=(l+1)%s,h=i[l*2]/10,d=i[l*2+1]/10,f=i[c*2]/10,u=i[c*2+1]/10,m=Math.hypot(f-h,u-d);if(m<.01)continue;const _=(f-h)/m,p=(u-d)/m;for(let g=-r;g<m;g+=15){const x=Math.max(0,g),M=Math.min(m,g+9);if(M<=x)continue;const S=Math.max(1,Math.ceil((M-x)/5));for(let y=0;y<S;y++){const E=x+(M-x)*y/S,v=x+(M-x)*(y+1)/S,b=h+_*E,T=d+p*E,R=h+_*v,C=d+p*v,L=t.yAt(b,T)+.9,z=t.yAt(R,C)+.9;e.quad(b-p*1.1,L,T+_*1.1,R-p*1.1,z,C+_*1.1,R+p*1.1,z,C-_*1.1,b+p*1.1,L,T-_*1.1,n)}}r=(r+m)%15}const a=e.build();a.deleteAttribute("glow");const o=new Jt(a,el(new Hn({vertexColors:!0,transparent:!0,opacity:.9,side:be,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12})));return o.name="boundary",o}function n1(i){const t=i==null?void 0:i.material;t&&(t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},t.customProgramCacheKey=()=>"moorooka-streets")}function i1(i,t){const e=[];for(let o=0;o+3<i.length;o+=4){const l=i[o]/10,c=i[o+1]/10,h=i[o+2]/10,d=i[o+3]/10,f=Math.hypot(h-l,d-c);if(f<.5)continue;const u=-(d-c)/f*.06,m=(h-l)/f*.06,_=Math.max(1,Math.ceil(f/2));for(let p=0;p<_;p++){const g=l+(h-l)*p/_,x=c+(d-c)*p/_,M=l+(h-l)*(p+1)/_,S=c+(d-c)*(p+1)/_,y=t.yAt(g,x)+.07,E=t.yAt(M,S)+.07;e.push(g-u,y,x-m,M-u,E,S-m,M+u,E,S+m,g-u,y,x-m,M+u,E,S+m,g+u,y,x+m)}}const r=new Re;r.setAttribute("position",new ae(e,3));const a=new Jt(r,el(new Hn({color:14605522,side:be,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})));return a.name="painted-lines",a}class s1 extends i_{constructor(e,n,s,r){super(e,n,s,{name:"3D model of Moorooka",home:Ju,intro:{...Ju,dist:6400,polar:22,azimuth:-24},minDistance:22,followGround:!0,maxDistance:7e3,externalStart:[-150,720,1500,0,-.5]},r);it(this,"water");it(this,"life");it(this,"boundary");it(this,"terrain");it(this,"model");it(this,"aerial");it(this,"aerialWanted",!1);it(this,"level",0);it(this,"boundaryOn",!0);it(this,"flood");it(this,"floodLoading");it(this,"floodLevel",1);it(this,"rising",0);it(this,"groundDetail");it(this,"levels",[]);it(this,"uploader");it(this,"tilesAt",0);it(this,"sharpening",!1);it(this,"marks");it(this,"sharpState","no");it(this,"frameAt",0);it(this,"frameMs",0);it(this,"frames",0);it(this,"lowRate",0);it(this,"detailGround");it(this,"kerbs");it(this,"yards");it(this,"strollers");this.options=r}async build(e,n,s){let r;try{r=await T_(this.options.assets,(T,R)=>this.cb.onProgress(T*.6,R),this.abort.signal)}catch(T){throw new ol(T instanceof Error?T.message:"The model data could not be loaded.")}const{town:a,heights:o,ground:l}=r;this.meta=a.meta,this.level=a.meta.waterLevel*Zu;const c=this.clearTest();l.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.model=l,await s(.62,"Shaping the terrain");const[h,d]=a.meta.grid,f=new Fx(o,new Float32Array(h*d),h,d,a.meta.size[0],a.meta.size[1],e.step,Zu),u={value:a.meta.waterLevel},m=m_(f,l,u,{title:"MOOROOKA",subtitle:"Brisbane, Queensland   ·   27.53° S  153.03° E   ·   Postcode 4105",scale:a.meta.size[0]/8010},{closeUp:!0});this.terrain=m.getObjectByName("terrain").material,this.groundDetail=m.userData.detail;const _=this.options.assets.detail;_&&a.detailGrid&&n!=="low"&&this.levels.push({grid:a.detailGrid,first:0,slots:n==="medium"?2:Ns,reach:1400,near:1.6,keep:4,url:_,tiles:new Map,wanted:[]}),this.offerSharpGround(n,f),this.scene.add(m),this.water=b_(f,u),this.scene.add(this.water.skirt,this.water.mesh),await s(.68,"Laying out the streets");const p=c_(a,f,{suburbMarkings:!0});n1(p.group.getObjectByName("roads")),this.scene.add(p.group,dv(a,f)),this.boundary=e1(a.boundary,f),this.scene.add(this.boundary),await s(.76,"Raising the buildings");const g=J_(a.meta),x=z_(a,f,[...g,this.fromLatLon(Iu[0],Iu[1])],c),M=Q_(a.meta,f,x.reserved);this.detailGround=M.ground;const S=Av(a.meta);if(this.scene.add(x.group,M.group,Rv(a.meta,f,x.reserved[g.length]),nv(a,f,p.index,c,S)),n!=="low"){this.kerbs=av(p.paths,p.index,f,(R,C)=>S(R,C)||c(R,C),a.footpaths),this.scene.add(this.kerbs.group);const T=fu(a.meta);this.scene.add(j_(a,f,(R,C)=>T(R,C)||c(R,C)).group)}await s(.88,"Planting trees");const y=Z_(a.meta,x.reserved),E=[];for(let T=0;T<a.trees.length;T+=kh){const R=a.trees[T]/4,C=a.trees[T+1]/4;!y(R,C)&&!S(R,C)&&!c(R,C)&&E.push(a.trees[T],a.trees[T+1],a.trees[T+2])}const v=Dv({...a,trees:Int16Array.from(E)},f,e.trees);if(this.scene.add(v.group),await s(.94,"Starting the traffic"),this.life=new xv(a,f,p.paths,p.index,c,S),this.scene.add(this.life.group),n!=="low"){const T=fu(a.meta),R=(C,L)=>T(C,L)||S(C,L)||c(C,L);this.strollers=new Pv(p.paths,a.footpaths??{},f,n==="high"?30:14,R),this.scene.add(this.strollers.group),this.loadYards(f,n==="high"&&e.shadow>0,n==="high"?220:140,R)}const b=jx(vv,a.meta,f);return{hf:f,atmosphere:new Ix(this.renderer,this.water,e.shadow,t1),places:b,roadPaths:p.paths,roadIndex:p.index,info:{quality:n,buildings:x.count,buildingsInSuburb:a.counts.inside,trees:v.count,sources:a.meta.sources,places:b}}}get hasFlood(){return!!this.options.assets.floods&&!!this.options.assets.floodFile}get floodDrop(){var e;return((e=this.flood)==null?void 0:e.info.drop)??8}async floods(){return(await this.floodLayer()).info.events}async floodLayer(){if(this.flood)return this.flood;const{floods:e,floodFile:n}=this.options.assets;if(!e||!n||!this.hf)throw new Error("This copy of the model has no floods.");this.floodLoading??(this.floodLoading=ul.load(this.hf,e,n,this.abort.signal).then(s=>{if(this.disposed)throw s.dispose(),new Error("The model has been closed.");return this.flood=s,this.scene.add(s.mesh),s}));try{return await this.floodLoading}catch(s){throw this.floodLoading=void 0,s}}async setFlood(e){if(cancelAnimationFrame(this.rising),!e){this.flood&&await this.flood.show(""),this.invalidate();return}const n=await this.floodLayer();if(await n.show(e,this.abort.signal),this.disposed||n.current!==e)return;const s=performance.now(),r=()=>{var o,l;const a=Math.min(1,(performance.now()-s)/2600);this.applyFloodLevel(a*a*(3-2*a)),(l=(o=this.options).onFloodLevel)==null||l.call(o,this.floodLevel),a<1&&!this.disposed&&(this.rising=requestAnimationFrame(r))};this.applyFloodLevel(0),this.rising=requestAnimationFrame(r)}setFloodLevel(e){cancelAnimationFrame(this.rising),this.applyFloodLevel(e)}applyFloodLevel(e){var n;this.floodLevel=_e.clamp(e,0,1),(n=this.flood)==null||n.setLower((1-this.floodLevel)*this.floodDrop),this.invalidate()}floodSurfaceAt(e,n,s=!1){return this.flood?this.flood.surfaceAt(e,n,s):-1/0}tick(e,n){var s,r;this.water.uniforms.uTime.value=n,(s=this.flood)==null||s.tick(n),(r=this.life)==null||r.update(e),this.strollers&&this.hf&&this.strollers.update(e,this.viewFocus.x,this.viewFocus.z,this.heightOverGround())}heightOverGround(){const e=this.camera.position;return e.y-this.hf.yAt(e.x,e.z)}loadYards(e,n,s,r){const a=this.options.assets.yards;a&&fetch(a,{signal:this.abort.signal}).then(o=>o.ok?o.arrayBuffer():null).then(o=>{!o||this.disposed||(this.yards=new jv(new Int16Array(o),e,n,s,r),this.scene.add(this.yards.group),this.invalidate())}).catch(()=>{})}get waterLevel(){return this.level}setLabelsVisible(e){super.setLabelsVisible(e),this.boundaryOn=e,this.boundary&&(this.boundary.visible=e)}setExternalCamera(e,n,s,r,a){super.setExternalCamera(e,n,s,r,a),this.boundary&&(this.boundary.visible=this.boundaryOn&&n-this.groundAt(e,s)>45)}async setAerial(e){if(this.aerialWanted=e,e&&!this.aerial){if(!this.options.assets.aerial)throw new Error("This copy of the model has no aerial photograph.");const s=await A_(this.options.assets.aerial);if(this.disposed){s.dispose();return}s.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.aerial=s}if(!this.terrain||!this.model)return;const n=this.aerialWanted&&!!this.aerial;this.terrain.map=n?this.aerial:this.model,this.placeTiles(),this.detailGround&&(this.detailGround.visible=!n),this.invalidate()}offerSharpGround(e,n){var a;const s=this.options.assets.surface,r=new URLSearchParams(window.location.search).get("sharp");if(!(!s||r==="0")){if(r!=="1"){const o=navigator;if(e==="low"||(o.deviceMemory??8)<4||(a=o.connection)!=null&&a.saveData||this.renderer.capabilities.maxTextureSize<4096)return}fetch(s.index,{signal:this.abort.signal}).then(o=>o.ok?o.json():null).then(o=>{var c;if(!(o!=null&&o.tiles.length)||this.disposed)return;const l=new Set(o.tiles);this.levels.push({grid:o.grid,first:Ns,slots:Wh,reach:460,near:1.7,keep:6,url:(h,d)=>l.has(`${h}_${d}`)?s.tile(h,d):void 0,tiles:new Map,wanted:[],sharp:!0}),(c=o.marks)!=null&&c.length&&(this.marks=i1(o.marks,n),this.marks.visible=r==="1",this.scene.add(this.marks)),this.sharpState=r==="1"?"on":"measuring",r==="1"&&(this.frames=-1e9)}).catch(()=>{})}}watchFrameRate(e){const n=e-this.frameAt;if(this.frameAt=e,!(this.sharpState==="no"||n>250))if(this.frameMs=this.frames>0?this.frameMs*.92+n*.08:n,this.frames++,this.sharpState==="measuring"){if(this.frames<50)return;this.frameMs<42?(this.sharpState="on",this.marks&&(this.marks.visible=!0)):this.dropSharpGround()}else this.levels.some(s=>s.sharp&&s.wanted.some(r=>s.tiles.get(r)))&&(this.lowRate=this.frameMs>60?this.lowRate+1:0,this.lowRate>150&&this.dropSharpGround())}dropSharpGround(){var n,s;this.sharpState="no",this.marks&&(this.marks.visible=!1);const e=this.levels.find(r=>r.sharp);if(e){for(const r of e.tiles.values())r==null||r.dispose();this.levels=this.levels.filter(r=>r!==e);for(let r=0;r<e.slots;r++)(n=this.groundDetail)==null||n.set(e.first+r,null);(s=this.kerbs)==null||s.showPaths(new Set),this.reportSharpening(),this.invalidate()}}reportSharpening(){var n,s;const e=this.levels.some(r=>r.wanted.some(a=>r.tiles.get(a)===null));e!==this.sharpening&&(this.sharpening=e,(s=(n=this.options).onSharpening)==null||s.call(n,e))}beforeRender(){var s;const e=performance.now();if(this.watchFrameRate(e),this.yards&&this.hf){const r=this.heightOverGround();(this.yards.update(this.viewFocus.x,this.viewFocus.z,r)||this.yards.pending(this.viewFocus.x,this.viewFocus.z,r))&&this.invalidate()}if((s=this.uploader)!=null&&s.busy){for(let r=0;r<4&&this.uploader.step()&&performance.now()-e<4;r++);this.uploader.busy&&this.invalidate()}if(!this.levels.length||!this.hf||e-this.tilesAt<250)return;this.tilesAt=e;let n=!1;for(const r of this.levels){const a=r.grid,o=[];if(this.viewDistance<r.reach&&(!r.sharp||this.sharpState==="on")){const l=(this.viewFocus.x+this.hf.sizeX/2)/this.hf.sizeX*a,c=(this.viewFocus.z+this.hf.sizeZ/2)/this.hf.sizeZ*a,h=[];for(let d=Math.max(0,Math.floor(c)-2);d<=Math.min(a-1,Math.floor(c)+2);d++)for(let f=Math.max(0,Math.floor(l)-2);f<=Math.min(a-1,Math.floor(l)+2);f++)r.url(d,f)&&h.push([Math.hypot(f+.5-l,d+.5-c),`${d}_${f}`]);h.sort((d,f)=>d[0]-f[0]);for(const[d,f]of h.slice(0,r.slots))d<r.near&&o.push(f)}if(o.join()!==r.wanted.join()){n=!0,r.wanted=o;for(const l of o){if(r.tiles.has(l))continue;const[c,h]=l.split("_").map(Number),d=r.url(c,h);d&&(r.tiles.set(l,null),this.uploader??(this.uploader=new M_(this.renderer)),this.uploader.load(d,Math.min(r.sharp?4:8,this.renderer.capabilities.getMaxAnisotropy()),!!r.sharp).then(f=>{if(this.disposed||!this.levels.includes(r))return f.dispose();r.tiles.set(l,f),this.placeTiles()}).catch(()=>{r.tiles.delete(l),this.reportSharpening()}))}for(const[l,c]of r.tiles){if(r.tiles.size<=r.slots+r.keep)break;c&&!o.includes(l)&&(c.dispose(),r.tiles.delete(l))}}}n&&this.placeTiles()}placeTiles(){var s;if(!this.groundDetail)return;const e=this.aerialWanted&&!!this.aerial,n=new Set;for(const r of this.levels){const a=r.grid;for(let o=0;o<r.slots;o++){const l=r.wanted[o],c=l?r.tiles.get(l):null;if(!c||e){this.groundDetail.set(r.first+o,null);continue}r.sharp&&n.add(l);const[h,d]=l.split("_").map(Number);this.groundDetail.set(r.first+o,c,[d/a,1-(h+1)/a,(d+1)/a,1-h/a])}}(s=this.kerbs)==null||s.showPaths(n),this.reportSharpening(),this.invalidate()}dispose(){var e,n,s,r,a;cancelAnimationFrame(this.rising),(e=this.uploader)==null||e.dispose(),(n=this.yards)==null||n.dispose(),(s=this.strollers)==null||s.dispose(),(r=this.model)==null||r.dispose(),(a=this.aerial)==null||a.dispose();for(const o of this.levels)for(const l of o.tiles.values())l==null||l.dispose();super.dispose()}}const Qu="Buildings, streets, railway, terrain and imagery © State of Queensland · Parks and flood maps © Brisbane City Council (CC BY 4.0)",Tl=.5;function r1(i,t){const e=typeof t.assets=="string"?t.assets:null;let n;const s=document.createElement("p");s.className="inv-sharpening",s.setAttribute("role","status"),s.hidden=!0,s.innerHTML='<span class="inv-sharpening-spin" aria-hidden="true"></span><span class="inv-sharpening-text">Loading sharper ground</span>';const r=Ai(i,t,{styleKey:"data-moorooka-model",css:uf,credit:Qu,tide:{min:Tl,max:Tl,initial:Tl},createScene:(a,o,l,c)=>n=new s1(a,o,l,{...c,onFloodLevel:h=>{var d;return(d=t.onFloodLevel)==null?void 0:d.call(t,h)},onSharpening:h=>{s.hidden=!h},assets:{...c.assets,detail:e?(h,d)=>`${e}detail/${h}_${d}.webp`:void 0,surface:e?{index:`${e}surface/index.json`,tile:(h,d)=>`${e}surface/${h}_${d}.webp`}:void 0,floods:e?`${e}floods.json`:void 0,yards:e?`${e}yards.bin`:void 0,floodFile:e?h=>`${e}flood-${encodeURIComponent(h)}.png`:void 0}}),setTide:()=>{}});return i.appendChild(s),{...r,dispose:()=>{s.remove(),r.dispose()},floods:e?()=>n.floods():void 0,get floodDrop(){return n.floodDrop},setFlood:a=>n.setFlood(a),setFloodLevel:a=>n.setFloodLevel(a),waterAt:(a,o,l)=>l?n.floodSurfaceAt(a,o,!0):Math.max(n.waterLevel,n.floodSurfaceAt(a,o))}}return yn.CREDIT=Qu,yn.create=r1,Object.defineProperty(yn,Symbol.toStringTag,{value:"Module"}),yn}({});
