var MoorookaModel=function(Mn){"use strict";var tv=Object.defineProperty;var ev=(Mn,Cn,Ei)=>Cn in Mn?tv(Mn,Cn,{enumerable:!0,configurable:!0,writable:!0,value:Ei}):Mn[Cn]=Ei;var ct=(Mn,Cn,Ei)=>ev(Mn,typeof Cn!="symbol"?Cn+"":Cn,Ei);const Cn=`
.inv-embed, .inv-embed-layer { position: absolute; inset: 0; overflow: hidden; }
/* the labels sit over the model but never take a touch: drags and pinches must reach the canvas underneath */
.inv-embed-labels, .inv-embed .inv-label { pointer-events: none; }
.inv-embed-credit { position: absolute; left: 50%; bottom: var(--inv-credit-bottom, 6px); transform: translateX(-50%); margin: 0; max-width: calc(100% - 24px);
  padding: 2px 8px; border-radius: 4px; background: rgba(13, 24, 30, 0.7); color: rgba(255, 255, 255, 0.82); font: 10px/1.4 system-ui, sans-serif; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; pointer-events: none; }
`;function Ei(i,t,e){if(!document.querySelector(`style[${e.styleKey}]`)){const u=document.createElement("style");u.setAttribute(e.styleKey,""),u.textContent=e.css+Cn,document.head.appendChild(u)}const n=document.createElement("div");n.className="inv-embed";const s=document.createElement("div");s.className="inv-embed-layer";const r=document.createElement("div");r.className="inv-embed-layer inv-embed-labels";const a=document.createElement("p");a.className="inv-embed-credit",a.textContent=e.credit,n.append(s,r,a),i.appendChild(n);const l=typeof t.assets=="string"?{height:t.assets+"height.png",ground:t.assets+"ground.webp",town:t.assets+"town.json"}:t.assets;let o=[],c=!1,h;const f=new Promise((u,p)=>h={ok:u,fail:p}),d=e.createScene(s,r,{onProgress:(u,p)=>{var x;return(x=t.onProgress)==null?void 0:x.call(t,u,p)},onReady:u=>{o=u.places.map(p=>{const x=Math.min(Math.max(p.view[0]*.55,90),1500),m=p.view[1]*Math.PI/180,g=p.view[2]*Math.PI/180,_=p.x+x*Math.sin(m)*Math.sin(g),M=p.z+x*Math.sin(m)*Math.cos(g),S=Math.max(d.groundAt(_,M),d.waterLevel)+Math.max(x*Math.cos(m),20),y=p.x-_,E=p.y-10-S,v=p.z-M;return{id:p.id,name:p.name,kind:p.kind,x:_,y:S,z:M,yaw:Math.atan2(-y,-v),pitch:Math.atan2(E,Math.hypot(y,v)),tx:p.x,tz:p.z,stand:d.standNear(p.x,p.z)??void 0}}),t.labels===!1&&d.setLabelsVisible(!1),c=!0,h.ok()},onError:u=>{var p;return c?(p=t.onError)==null?void 0:p.call(t,u):h.fail(new Error(u))},onCompass:()=>{}},{assets:l,external:!0,quality:t.quality,clear:t.clear,clearLatLon:t.clearLatLon});return d.init(),{ready:f,setCamera:(u,p,x,m,g)=>d.setExternalCamera(u,p,x,m,g),setMinutes:u=>d.setSolarMinutes(u),setTide:u=>e.setTide(d,u),setAnimating:u=>d.setAnimating(u),setLabelsVisible:u=>d.setLabelsVisible(u),groundAt:(u,p)=>d.groundAt(u,p),waterLevel:()=>d.waterLevel,bounds:()=>d.bounds,fromLatLon:(u,p)=>d.fromLatLon(u,p),setMode:u=>d.setExternal(u!=="bird"),getCamera:()=>d.getCamera(),flyToPlace:u=>d.flyToPlace(u),lookAt:(u,p,x,m,g)=>d.setView(u,p,x,m,g),addParts:u=>d.addParts(u),addPad:u=>d.addPad(u),spots:()=>o,roadSpot:u=>{const p=d.roadSpot(u);return p?{id:"road:"+u,name:u,kind:"landmark",...p,tx:p.x-Math.sin(p.yaw)*70,tz:p.z-Math.cos(p.yaw)*70}:null},tide:e.tide,credit:e.credit,dispose:()=>{d.dispose(),n.remove()}}}const Au='.inv-label{position:absolute;left:0;top:0;pointer-events:auto;font:600 12px/1 Space Grotesk,system-ui,sans-serif;padding:6px 10px;border-radius:999px;background:#0c1c24e6;color:#fff;border:1px solid rgba(255,255,255,.2);white-space:nowrap;cursor:pointer;will-change:transform}.inv-label:after{content:"";position:absolute;left:50%;bottom:-8px;width:1px;height:8px;background:#ffffffbf}.inv-label:hover{background:#0b7d9c}.inv-label--nature{background:#183826eb}.inv-label--nature:hover{background:#2c7a4b}.inv-label--water{background:none;border-color:transparent;color:#f1fbff;font-style:italic;font-weight:500;font-size:13px;letter-spacing:.1em;text-shadow:0 1px 2px rgba(0,35,60,.95),0 0 8px rgba(0,35,60,.7)}.inv-label--water:after{display:none}.inv-label--water:hover{background:#0c1c2499}.inv-range{-moz-appearance:none;appearance:none;-webkit-appearance:none;height:28px;background:transparent;cursor:pointer}.inv-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range:focus-visible{outline:2px solid #ffd200;outline-offset:4px;border-radius:4px}.inv-range--flood::-webkit-slider-runnable-track{background:linear-gradient(90deg,#d8c79a,#5c9ab8 55%,#17406e)}.inv-range--flood::-moz-range-track{background:linear-gradient(90deg,#d8c79a,#5c9ab8 55%,#17406e)}';/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const na="187",Pn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ru=0,Ml=1,Cu=2,is=1,Pu=2,ss=3,Xn=0,Ye=1,ye=2,bi=0,rs=1,ia=2,Sl=3,yl=4,Du=5,wi=100,Lu=101,Iu=102,Nu=103,Uu=104,Fu=200,Ou=201,zu=202,Bu=203,El=204,bl=205,ku=206,Gu=207,Hu=208,Vu=209,Wu=210,Xu=211,qu=212,Yu=213,Zu=214,sa=0,ra=1,aa=2,as=3,oa=4,la=5,ca=6,ha=7,ua=0,$u=1,Ku=2,Dn=0,wl=1,Tl=2,Al=3,Rl=4,Cl=5,Pl=6,da=7,Dl=300,Ti=301,os=302,fa=303,pa=304,Ws=1e3,on=1001,ma=1002,Fe=1003,Ju=1004,Xs=1005,Ze=1006,ga=1007,Ln=1008,tn=1009,Ll=1010,Il=1011,ls=1012,_a=1013,Sn=1014,ln=1015,cn=1016,xa=1017,va=1018,Ai=1020,Nl=35902,Ul=35899,Fl=1021,Ol=1022,yn=1023,qn=1026,Yn=1027,Ma=1028,Sa=1029,Zn=1030,ya=1031,Ea=1033,qs=33776,Ys=33777,Zs=33778,$s=33779,ba=35840,wa=35841,Ta=35842,Aa=35843,Ra=36196,Ca=37492,Pa=37496,Da=37488,La=37489,Ks=37490,Ia=37491,Na=37808,Ua=37809,Fa=37810,Oa=37811,za=37812,Ba=37813,ka=37814,Ga=37815,Ha=37816,Va=37817,Wa=37818,Xa=37819,qa=37820,Ya=37821,Za=36492,$a=36494,Ka=36495,Ja=36283,Qa=36284,Js=36285,ja=36286,Qu=3200,Qs=0,ju=1,$n="",Ee="srgb",js="srgb-linear",tr="linear",ae="srgb",to=7680,td=519,ed=512,nd=513,id=514,zl=515,sd=516,rd=517,Bl=518,kl=519,ad=35044,er=35048,Gl="300 es",hn=2e3,cs=2001;function od(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ld(){const i=hs("canvas");return i.style.display="block",i}const Hl={};function Vl(...i){const t="THREE."+i.shift();console.log(t,...i)}function Wl(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Bt(...i){i=Wl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function te(...i){i=Wl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function nr(...i){const t=i.join(" ");t in Hl||(Hl[t]=!0,Bt(...i))}function cd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const hd={[sa]:sa,[aa]:ca,[oa]:oa,[as]:la,[ra]:ra,[ca]:aa,[ha]:ha,[la]:as};class Kn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xl=1234567;const us=Math.PI/180,ds=180/Math.PI;function Ri(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function eo(i,t){return(i%t+t)%t}function ud(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function dd(i,t,e){return i!==t?(e-i)/(t-i):0}function fs(i,t,e){return(1-e)*i+e*t}function fd(i,t,e,n){return fs(i,t,1-Math.exp(-e*n))}function pd(i,t=1){return t-Math.abs(eo(i,t*2)-t)}function md(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function gd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function _d(i,t){return i+Math.floor(Math.random()*(t-i+1))}function xd(i,t){return i+Math.random()*(t-i)}function vd(i){return i*(.5-Math.random())}function Md(i){i!==void 0&&(Xl=i);let t=Xl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sd(i){return i*us}function yd(i){return i*ds}function Ed(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function bd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ql(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wd(i,t,e,n,s){const r=Math.cos,a=Math.sin,l=r(e/2),o=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),d=a((t-n)/2),u=r((n-t)/2),p=a((n-t)/2);switch(s){case"XYX":i.set(l*h,o*f,o*d,l*c);break;case"YZY":i.set(o*d,l*h,o*f,l*c);break;case"ZXZ":i.set(o*f,o*d,l*h,l*c);break;case"XZX":i.set(l*h,o*p,o*u,l*c);break;case"YXY":i.set(o*u,l*h,o*p,l*c);break;case"ZYZ":i.set(o*p,o*u,l*h,l*c);break;default:Bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function no(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Yl(i,t){if(t.constructor===Float32Array)return i;const e=no(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Zl(i,t){if(t.constructor===Float32Array)return i;const e=no(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const de={DEG2RAD:us,RAD2DEG:ds,generateUUID:Ri,clamp:Yt,euclideanModulo:eo,mapLinear:ud,inverseLerp:dd,lerp:fs,damp:fd,pingpong:pd,smoothstep:md,smootherstep:gd,randInt:_d,randFloat:xd,randFloatSpread:vd,seededRandom:Md,degToRad:Sd,radToDeg:yd,isPowerOfTwo:Ed,ceilPowerOfTwo:bd,floorPowerOfTwo:ql,setQuaternionFromProperEuler:wd,normalize:Zl,denormalize:Yl},fl=class fl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fl.prototype.isVector2=!0;let Ut=fl;class un{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let o=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],u=r[a+1],p=r[a+2],x=r[a+3];if(f!==x||o!==d||c!==u||h!==p){let m=o*d+c*u+h*p+f*x;m<0&&(d=-d,u=-u,p=-p,x=-x,m=-m);let g=1-l;if(m<.9995){const _=Math.acos(m),M=Math.sin(_);g=Math.sin(g*_)/M,l=Math.sin(l*_)/M,o=o*g+d*l,c=c*g+u*l,h=h*g+p*l,f=f*g+x*l}else{o=o*g+d*l,c=c*g+u*l,h=h*g+p*l,f=f*g+x*l;const _=1/Math.sqrt(o*o+c*c+h*h+f*f);o*=_,c*=_,h*=_,f*=_}}t[e]=o,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const l=n[s],o=n[s+1],c=n[s+2],h=n[s+3],f=r[a],d=r[a+1],u=r[a+2],p=r[a+3];return t[e]=l*p+h*f+o*u-c*d,t[e+1]=o*p+h*d+c*f-l*u,t[e+2]=c*p+h*u+l*d-o*f,t[e+3]=h*p-l*f-o*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,o=Math.sin,c=l(n/2),h=l(s/2),f=l(r/2),d=o(n/2),u=o(s/2),p=o(r/2);switch(a){case"XYZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"YXZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"ZXY":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"ZYX":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"YZX":this._x=d*h*f+c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f-d*u*p;break;case"XZY":this._x=d*h*f-c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f+d*u*p;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],o=e[9],c=e[2],h=e[6],f=e[10],d=n+l+f;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-o)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>l&&n>f){const u=2*Math.sqrt(1+n-l-f);this._w=(h-o)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(l>f){const u=2*Math.sqrt(1+l-n-f);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(o+h)/u}else{const u=2*Math.sqrt(1+f-n-l);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(o+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,o=e._y,c=e._z,h=e._w;return this._x=n*h+a*l+s*c-r*o,this._y=s*h+a*o+r*l-n*c,this._z=r*h+a*c+n*o-s*l,this._w=a*h-n*l-s*o-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let o=1-e;if(l<.9995){const c=Math.acos(l),h=Math.sin(c);o=Math.sin(o*c)/h,e=Math.sin(e*c)/h,this._x=this._x*o+n*e,this._y=this._y*o+s*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+s*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const pl=class pl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($l.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($l.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,o=t.w,c=2*(a*s-l*n),h=2*(l*e-r*s),f=2*(r*n-a*e);return this.x=e+o*c+a*f-l*h,this.y=n+o*h+l*c-r*f,this.z=s+o*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,o=e.z;return this.x=s*o-r*l,this.y=r*a-n*o,this.z=n*l-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pl.prototype.isVector3=!0;let Y=pl;const io=new Y,$l=new un,ml=class ml{constructor(t,e,n,s,r,a,l,o,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,c)}set(t,e,n,s,r,a,l,o,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=l,h[3]=e,h[4]=r,h[5]=o,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],o=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],p=n[8],x=s[0],m=s[3],g=s[6],_=s[1],M=s[4],S=s[7],y=s[2],E=s[5],v=s[8];return r[0]=a*x+l*_+o*y,r[3]=a*m+l*M+o*E,r[6]=a*g+l*S+o*v,r[1]=c*x+h*_+f*y,r[4]=c*m+h*M+f*E,r[7]=c*g+h*S+f*v,r[2]=d*x+u*_+p*y,r[5]=d*m+u*M+p*E,r[8]=d*g+u*S+p*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],c=t[7],h=t[8];return e*a*h-e*l*c-n*r*h+n*l*o+s*r*c-s*a*o}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],c=t[7],h=t[8],f=h*a-l*c,d=l*o-h*r,u=c*r-a*o,p=e*f+n*d+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=f*x,t[1]=(s*c-h*n)*x,t[2]=(l*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*o)*x,t[5]=(s*r-l*e)*x,t[6]=u*x,t[7]=(n*o-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){const o=Math.cos(r),c=Math.sin(r);return this.set(n*o,n*c,-n*(o*a+c*l)+a+t,-s*c,s*o,-s*(-c*a+o*l)+l+e,0,0,1),this}scale(t,e){return nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(so.makeScale(t,e)),this}rotate(t){return nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(so.makeRotation(-t)),this}translate(t,e){return nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(so.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ml.prototype.isMatrix3=!0;let kt=ml;const so=new kt,Kl=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jl=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Td(){const i={enabled:!0,workingColorSpace:js,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ae&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[js]:{primaries:t,whitePoint:n,transfer:tr,toXYZ:Kl,fromXYZ:Jl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Kl,fromXYZ:Jl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),i}const Kt=Td();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pi;class Ad{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Pi===void 0&&(Pi=hs("canvas")),Pi.width=t.width,Pi.height=t.height;const s=Pi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Pi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rd=0;class ro{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(ao(s[a].image)):r.push(ao(s[a]))}else r=ao(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ao(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ad.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}let Cd=0;const oo=new Y;class Te extends Kn{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=on,s=on,r=Ze,a=Ln,l=yn,o=tn,c=Te.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Ri(),this.name="",this.source=new ro(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=o,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(oo).x}get height(){return this.source.getSize(oo).y}get depth(){return this.source.getSize(oo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ws:t.x=t.x-Math.floor(t.x);break;case on:t.x=t.x<0?0:1;break;case ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ws:t.y=t.y-Math.floor(t.y);break;case on:t.y=t.y<0?0:1;break;case ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null,Te.DEFAULT_MAPPING=Dl,Te.DEFAULT_ANISOTROPY=1;const gl=class gl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const o=t.elements,c=o[0],h=o[4],f=o[8],d=o[1],u=o[5],p=o[9],x=o[2],m=o[6],g=o[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,S=(u+1)/2,y=(g+1)/2,E=(h+d)/4,v=(f+x)/4,b=(p+m)/4;return M>S&&M>y?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=v/n):S>y?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=b/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=v/r,s=b/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-p)*(m-p)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(f-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gl.prototype.isVector4=!0;let ge=gl;class Pd extends Kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Te({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ro(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends Pd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ql extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dd extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const jr=class jr{constructor(t,e,n,s,r,a,l,o,c,h,f,d,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,c,h,f,d,u,p,x,m)}set(t,e,n,s,r,a,l,o,c,h,f,d,u,p,x,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=l,g[13]=o,g[2]=c,g[6]=h,g[10]=f,g[14]=d,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),a=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),o=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*h,u=a*f,p=l*h,x=l*f;e[0]=o*h,e[4]=-o*f,e[8]=c,e[1]=u+p*c,e[5]=d-x*c,e[9]=-l*o,e[2]=x-d*c,e[6]=p+u*c,e[10]=a*o}else if(t.order==="YXZ"){const d=o*h,u=o*f,p=c*h,x=c*f;e[0]=d+x*l,e[4]=p*l-u,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-l,e[2]=u*l-p,e[6]=x+d*l,e[10]=a*o}else if(t.order==="ZXY"){const d=o*h,u=o*f,p=c*h,x=c*f;e[0]=d-x*l,e[4]=-a*f,e[8]=p+u*l,e[1]=u+p*l,e[5]=a*h,e[9]=x-d*l,e[2]=-a*c,e[6]=l,e[10]=a*o}else if(t.order==="ZYX"){const d=a*h,u=a*f,p=l*h,x=l*f;e[0]=o*h,e[4]=p*c-u,e[8]=d*c+x,e[1]=o*f,e[5]=x*c+d,e[9]=u*c-p,e[2]=-c,e[6]=l*o,e[10]=a*o}else if(t.order==="YZX"){const d=a*o,u=a*c,p=l*o,x=l*c;e[0]=o*h,e[4]=x-d*f,e[8]=p*f+u,e[1]=f,e[5]=a*h,e[9]=-l*h,e[2]=-c*h,e[6]=u*f+p,e[10]=d-x*f}else if(t.order==="XZY"){const d=a*o,u=a*c,p=l*o,x=l*c;e[0]=o*h,e[4]=-f,e[8]=c*h,e[1]=d*f+x,e[5]=a*h,e[9]=u*f-p,e[2]=p*f-u,e[6]=l*h,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ld,t,Id)}lookAt(t,e,n){const s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),Jn.crossVectors(n,en),Jn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Jn.crossVectors(n,en)),Jn.normalize(),ir.crossVectors(en,Jn),s[0]=Jn.x,s[4]=ir.x,s[8]=en.x,s[1]=Jn.y,s[5]=ir.y,s[9]=en.y,s[2]=Jn.z,s[6]=ir.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],o=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],p=n[2],x=n[6],m=n[10],g=n[14],_=n[3],M=n[7],S=n[11],y=n[15],E=s[0],v=s[4],b=s[8],D=s[12],A=s[1],N=s[5],F=s[9],B=s[13],L=s[2],J=s[6],k=s[10],Z=s[14],G=s[3],O=s[7],H=s[11],Q=s[15];return r[0]=a*E+l*A+o*L+c*G,r[4]=a*v+l*N+o*J+c*O,r[8]=a*b+l*F+o*k+c*H,r[12]=a*D+l*B+o*Z+c*Q,r[1]=h*E+f*A+d*L+u*G,r[5]=h*v+f*N+d*J+u*O,r[9]=h*b+f*F+d*k+u*H,r[13]=h*D+f*B+d*Z+u*Q,r[2]=p*E+x*A+m*L+g*G,r[6]=p*v+x*N+m*J+g*O,r[10]=p*b+x*F+m*k+g*H,r[14]=p*D+x*B+m*Z+g*Q,r[3]=_*E+M*A+S*L+y*G,r[7]=_*v+M*N+S*J+y*O,r[11]=_*b+M*F+S*k+y*H,r[15]=_*D+M*B+S*Z+y*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],o=t[9],c=t[13],h=t[2],f=t[6],d=t[10],u=t[14],p=t[3],x=t[7],m=t[11],g=t[15],_=o*u-c*d,M=l*u-c*f,S=l*d-o*f,y=a*u-c*h,E=a*d-o*h,v=a*f-l*h;return e*(x*_-m*M+g*S)-n*(p*_-m*y+g*E)+s*(p*M-x*y+g*v)-r*(p*S-x*E+m*v)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],o=t[2],c=t[6],h=t[10];return e*(a*h-l*c)-n*(r*h-l*o)+s*(r*c-a*o)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],p=t[12],x=t[13],m=t[14],g=t[15],_=e*l-n*a,M=e*o-s*a,S=e*c-r*a,y=n*o-s*l,E=n*c-r*l,v=s*c-r*o,b=h*x-f*p,D=h*m-d*p,A=h*g-u*p,N=f*m-d*x,F=f*g-u*x,B=d*g-u*m,L=_*B-M*F+S*N+y*A-E*D+v*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/L;return t[0]=(l*B-o*F+c*N)*J,t[1]=(s*F-n*B-r*N)*J,t[2]=(x*v-m*E+g*y)*J,t[3]=(d*E-f*v-u*y)*J,t[4]=(o*A-a*B-c*D)*J,t[5]=(e*B-s*A+r*D)*J,t[6]=(m*S-p*v-g*M)*J,t[7]=(h*v-d*S+u*M)*J,t[8]=(a*F-l*A+c*b)*J,t[9]=(n*A-e*F-r*b)*J,t[10]=(p*E-x*S+g*_)*J,t[11]=(f*S-h*E-u*_)*J,t[12]=(l*D-a*N-o*b)*J,t[13]=(e*N-n*D+s*b)*J,t[14]=(x*M-p*y-m*_)*J,t[15]=(h*y-f*M+d*_)*J,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,o=t.z,c=r*a,h=r*l;return this.set(c*a+n,c*l-s*o,c*o+s*l,0,c*l+s*o,h*l+n,h*o-s*a,0,c*o-s*l,h*o+s*a,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,l=e._z,o=e._w,c=r+r,h=a+a,f=l+l,d=r*c,u=r*h,p=r*f,x=a*h,m=a*f,g=l*f,_=o*c,M=o*h,S=o*f,y=n.x,E=n.y,v=n.z;return s[0]=(1-(x+g))*y,s[1]=(u+S)*y,s[2]=(p-M)*y,s[3]=0,s[4]=(u-S)*E,s[5]=(1-(d+g))*E,s[6]=(m+_)*E,s[7]=0,s[8]=(p+M)*v,s[9]=(m-_)*v,s[10]=(1-(d+x))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Di.set(s[0],s[1],s[2]).length();const l=Di.set(s[4],s[5],s[6]).length(),o=Di.set(s[8],s[9],s[10]).length();r<0&&(a=-a),dn.copy(this);const c=1/a,h=1/l,f=1/o;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=f,dn.elements[9]*=f,dn.elements[10]*=f,e.setFromRotationMatrix(dn),n.x=a,n.y=l,n.z=o,this}makePerspective(t,e,n,s,r,a,l=hn,o=!1){const c=this.elements,h=2*r/(e-t),f=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let p,x;if(o)p=r/(a-r),x=a*r/(a-r);else if(l===hn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(l===cs)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=hn,o=!1){const c=this.elements,h=2/(e-t),f=2/(n-s),d=-(e+t)/(e-t),u=-(n+s)/(n-s);let p,x;if(o)p=1/(a-r),x=a/(a-r);else if(l===hn)p=-2/(a-r),x=-(a+r)/(a-r);else if(l===cs)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};jr.prototype.isMatrix4=!0;let ie=jr;const Di=new Y,dn=new ie,Ld=new Y(0,0,0),Id=new Y(1,1,1),Jn=new Y,ir=new Y,en=new Y,jl=new ie,tc=new un;class bn{constructor(t=0,e=0,n=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],l=s[8],o=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,u),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(l,u));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tc.setFromEuler(this),this.setFromQuaternion(tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class lo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nd=0;const ec=new Y,Li=new un,Nn=new ie,sr=new Y,ps=new Y,Ud=new Y,Fd=new un,nc=new Y(1,0,0),ic=new Y(0,1,0),sc=new Y(0,0,1),rc={type:"added"},Od={type:"removed"},Ii={type:"childadded",child:null},co={type:"childremoved",child:null};class Oe extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new Y,e=new bn,n=new un,s=new Y(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new kt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(nc,t)}rotateY(t){return this.rotateOnAxis(ic,t)}rotateZ(t){return this.rotateOnAxis(sc,t)}translateOnAxis(t,e){return ec.copy(t).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nc,t)}translateY(t){return this.translateOnAxis(ic,t)}translateZ(t){return this.translateOnAxis(sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sr.copy(t):sr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(ps,sr,this.up):Nn.lookAt(sr,ps,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(Nn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rc),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Od),co.child=t,this.dispatchEvent(co),co.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rc),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,Ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const o=l.shapes;if(Array.isArray(o))for(let c=0,h=o.length;c<h;c++){const f=o[c];r(t.shapes,f)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let o=0,c=this.material.length;o<c;o++)l.push(r(t.materials,this.material[o]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const o=this.animations[l];s.animations.push(r(t.animations,o))}}if(e){const l=a(t.geometries),o=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),u=a(t.animations),p=a(t.nodes);l.length>0&&(n.geometries=l),o.length>0&&(n.materials=o),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(l){const o=[];for(const c in l){const h=l[c];delete h.metadata,o.push(h)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Oe.DEFAULT_UP=new Y(0,1,0),Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0,Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $e extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zd={type:"move"};class ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const l=this._targetRay,o=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,p=.005;c.inputState.pinching&&d>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(zd)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},rr={h:0,s:0,l:0};function uo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?i+(t-i)*6*e:e<.5?t:e<.6666666666666666?i+(t-i)*6*(.6666666666666666-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=eo(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=uo(a,r,t+.3333333333333333),this.g=uo(a,r,t),this.b=uo(a,r,t-.3333333333333333)}return Kt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const n=ac[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return Kt.workingToColorSpace(Ge.copy(this),t),Math.round(Yt(Ge.r*255,0,255))*65536+Math.round(Yt(Ge.g*255,0,255))*256+Math.round(Yt(Ge.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(Ge.copy(this),e);const n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),l=Math.min(n,s,r);let o,c;const h=(l+a)/2;if(l===a)o=0,c=0;else{const f=a-l;switch(c=h<=.5?f/(a+l):f/(2-a-l),a){case n:o=(s-r)/f+(s<r?6:0);break;case s:o=(r-n)/f+2;break;case r:o=(n-s)/f+4;break}o/=6}return t.h=o,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Ee){Kt.workingToColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,s=Ge.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(rr);const n=fs(Qn.h,rr.h,e),s=fs(Qn.s,rr.s,e),r=fs(Qn.l,rr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new Lt;Lt.NAMES=ac;class Bd extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const fn=new Y,Un=new Y,fo=new Y,Fn=new Y,Ni=new Y,Ui=new Y,oc=new Y,po=new Y,mo=new Y,go=new Y,_o=new ge,xo=new ge,vo=new ge;class pn{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),fn.subVectors(t,e),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){fn.subVectors(s,e),Un.subVectors(n,e),fo.subVectors(t,e);const a=fn.dot(fn),l=fn.dot(Un),o=fn.dot(fo),c=Un.dot(Un),h=Un.dot(fo),f=a*c-l*l;if(f===0)return r.set(0,0,0),null;const d=1/f,u=(c*o-l*h)*d,p=(a*h-l*o)*d;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,a,l,o){return this.getBarycoord(t,e,n,s,Fn)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Fn.x),o.addScaledVector(a,Fn.y),o.addScaledVector(l,Fn.z),o)}static getInterpolatedAttribute(t,e,n,s,r,a){return _o.setScalar(0),xo.setScalar(0),vo.setScalar(0),_o.fromBufferAttribute(t,e),xo.fromBufferAttribute(t,n),vo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(_o,r.x),a.addScaledVector(xo,r.y),a.addScaledVector(vo,r.z),a}static isFrontFacing(t,e,n,s){return fn.subVectors(n,e),Un.subVectors(t,e),fn.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),fn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,l;Ni.subVectors(s,n),Ui.subVectors(r,n),po.subVectors(t,n);const o=Ni.dot(po),c=Ui.dot(po);if(o<=0&&c<=0)return e.copy(n);mo.subVectors(t,s);const h=Ni.dot(mo),f=Ui.dot(mo);if(h>=0&&f<=h)return e.copy(s);const d=o*f-h*c;if(d<=0&&o>=0&&h<=0&&o-h>0)return a=o/(o-h),e.copy(n).addScaledVector(Ni,a);go.subVectors(t,r);const u=Ni.dot(go),p=Ui.dot(go);if(p>=0&&u<=p)return e.copy(r);const x=u*c-o*p;if(x<=0&&c>=0&&p<=0)return l=c/(c-p),e.copy(n).addScaledVector(Ui,l);const m=h*p-u*f;if(m<=0&&f-h>=0&&u-p>=0)return oc.subVectors(r,s),l=(f-h)/(f-h+(u-p)),e.copy(s).addScaledVector(oc,l);const g=1/(m+x+d);return a=x*g,l=d*g,e.copy(n).addScaledVector(Ni,a).addScaledVector(Ui,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ui{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,mn):mn.fromBufferAttribute(r,a),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ar.copy(n.boundingBox)),ar.applyMatrix4(t.matrixWorld),this.union(ar)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ms),or.subVectors(this.max,ms),Fi.subVectors(t.a,ms),Oi.subVectors(t.b,ms),zi.subVectors(t.c,ms),jn.subVectors(Oi,Fi),ti.subVectors(zi,Oi),di.subVectors(Fi,zi);let e=[0,-jn.z,jn.y,0,-ti.z,ti.y,0,-di.z,di.y,jn.z,0,-jn.x,ti.z,0,-ti.x,di.z,0,-di.x,-jn.y,jn.x,0,-ti.y,ti.x,0,-di.y,di.x,0];return!Mo(e,Fi,Oi,zi,or)||(e=[1,0,0,0,1,0,0,0,1],!Mo(e,Fi,Oi,zi,or))?!1:(lr.crossVectors(jn,ti),e=[lr.x,lr.y,lr.z],Mo(e,Fi,Oi,zi,or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const On=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],mn=new Y,ar=new ui,Fi=new Y,Oi=new Y,zi=new Y,jn=new Y,ti=new Y,di=new Y,ms=new Y,or=new Y,lr=new Y,fi=new Y;function Mo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){fi.fromArray(i,r);const l=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),o=t.dot(fi),c=e.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(o,c,h),Math.min(o,c,h))>l)return!1}return!0}const zn=kd();function kd(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let o=0;o<256;++o){const c=o-127;c<-27?(n[o]=0,n[o|256]=32768,s[o]=24,s[o|256]=24):c<-14?(n[o]=1024>>-c-14,n[o|256]=1024>>-c-14|32768,s[o]=-c-1,s[o|256]=-c-1):c<=15?(n[o]=c+15<<10,n[o|256]=c+15<<10|32768,s[o]=13,s[o|256]=13):c<128?(n[o]=31744,n[o|256]=64512,s[o]=24,s[o|256]=24):(n[o]=31744,n[o|256]=64512,s[o]=13,s[o|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),l=new Uint32Array(64);for(let o=1;o<1024;++o){let c=o<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[o]=c|h}for(let o=1024;o<2048;++o)r[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)a[o]=o<<23;a[31]=1199570944,a[32]=2147483648;for(let o=33;o<63;++o)a[o]=2147483648+(o-32<<23);a[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(l[o]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:l}}function Gd(i){Math.abs(i)>65504&&Bt("DataUtils.toHalfFloat(): Value out of range."),i=Yt(i,-65504,65504),zn.floatView[0]=i;const t=zn.uint32View[0],e=t>>23&511;return zn.baseTable[e]+((t&8388607)>>zn.shiftTable[e])}function Hd(i){const t=i>>10;return zn.uint32View[0]=zn.mantissaTable[zn.offsetTable[t]+(i&1023)]+zn.exponentTable[t],zn.floatView[0]}class lc{static toHalfFloat(t){return Gd(t)}static fromHalfFloat(t){return Hd(t)}}const be=new Y,cr=new Ut;let Vd=0;class Ae extends Kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ad,this.updateRanges=[],this.gpuType=ln,this.version=0,this._normalizationScale=t!==void 0?no(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cr.fromBufferAttribute(this,e),cr.applyMatrix3(t),this.setXY(e,cr.x,cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Yl(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Zl(t,this.array)}}class cc extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hc extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Wd=new ui,gs=new Y,So=new Y;class _s{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gs.subVectors(t,this.center);const e=gs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(So.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gs.copy(t.center).add(So)),this.expandByPoint(gs.copy(t.center).sub(So))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Xd=0;const rn=new ie,yo=new Oe,Bi=new Y,nn=new ui,xs=new ui,Le=new Y;class Re extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(od(t)?hc:cc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return yo.lookAt(t),yo.updateMatrix(),this.applyMatrix4(yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const l=e[r];xs.setFromBufferAttribute(l),this.morphTargetsRelative?(Le.addVectors(nn.min,xs.min),nn.expandByPoint(Le),Le.addVectors(nn.max,xs.max),nn.expandByPoint(Le)):(nn.expandByPoint(xs.min),nn.expandByPoint(xs.max))}nn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){const l=e[r],o=this.morphTargetsRelative;for(let c=0,h=l.count;c<h;c++)Le.fromBufferAttribute(l,c),o&&(Bi.fromBufferAttribute(t,c),Le.add(Bi)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ae(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const l=[],o=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)l[D]=new Y,o[D]=new Y;const h=new Y,f=new Y,d=new Y,u=new Ut,p=new Ut,x=new Ut,m=new Y,g=new Y;function _(D,A,N){c[D]=c[A]=c[N]=1,h.fromBufferAttribute(n,D),f.fromBufferAttribute(n,A),d.fromBufferAttribute(n,N),u.fromBufferAttribute(r,D),p.fromBufferAttribute(r,A),x.fromBufferAttribute(r,N),f.sub(h),d.sub(h),p.sub(u),x.sub(u);const F=1/(p.x*x.y-x.x*p.y);isFinite(F)&&(m.copy(f).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(F),g.copy(d).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(F),l[D].add(m),l[A].add(m),l[N].add(m),o[D].add(g),o[A].add(g),o[N].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let D=0,A=M.length;D<A;++D){const N=M[D],F=N.start,B=N.count;for(let L=F,J=F+B;L<J;L+=3)_(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const S=new Y,y=new Y,E=new Y,v=new Y;function b(D){E.fromBufferAttribute(s,D),v.copy(E);const A=l[D];S.copy(A),S.sub(E.multiplyScalar(E.dot(A))).normalize(),y.crossVectors(v,A);const F=y.dot(o[D])<0?-1:1;a.setXYZW(D,S.x,S.y,S.z,F)}for(let D=0,A=n.count;D<A;++D)c[D]&&b(D);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const s=new Y,r=new Y,a=new Y,l=new Y,o=new Y,c=new Y,h=new Y,f=new Y;if(t)for(let d=0,u=t.count;d<u;d+=3){const p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),l.fromBufferAttribute(n,p),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),l.add(h),o.add(h),c.add(h),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(l,o){const c=l.array,h=l.itemSize,f=l.normalized,d=new c.constructor(o.length*h);let u=0,p=0;for(let x=0,m=o.length;x<m;x++){l.isInterleavedBufferAttribute?u=o[x]*l.data.stride+l.offset:u=o[x]*h;for(let g=0;g<h;g++)d[p++]=c[u++]}return new Ae(d,h,f)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,s=this.attributes;for(const l in s){const o=s[l],c=t(o,n);e.setAttribute(l,c)}const r=this.morphAttributes;for(const l in r){const o=[],c=r[l];for(let h=0,f=c.length;h<f;h++){const d=c[h],u=t(d,n);o.push(u)}e.morphAttributes[l]=o}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,o=a.length;l<o;l++){const c=a[l];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(t[c]=o[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const o in n){const c=n[o];t.data.attributes[o]=c.toJSON(t.data)}const s={};let r=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],h=[];for(let f=0,d=c.length;f<d;f++){const u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(s[o]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eo=new Y,qd=new Y,Yd=new kt;class wn{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Eo.subVectors(n,e).cross(qd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Eo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yd.getNormalMatrix(t),s=this.coplanarPoint(Eo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Zd=0;class ki extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=rs,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=El,this.blendDst=bl,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const l in r){const o=r[l];delete o.metadata,a.push(o)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new wn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Bn=new Y,bo=new Y,hr=new Y,ur=new Y;class wo{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){bo.copy(t).add(e).multiplyScalar(.5),hr.copy(e).sub(t).normalize(),ur.copy(this.origin).sub(bo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(hr),l=ur.dot(this.direction),o=-ur.dot(hr),c=ur.lengthSq(),h=Math.abs(1-a*a);let f,d,u,p;if(h>0)if(f=a*o-l,d=a*l-o,p=r*h,f>=0)if(d>=-p)if(d<=p){const x=1/h;f*=x,d*=x,u=f*(f+a*d+2*l)+d*(a*f+d+2*o)+c}else d=r,f=Math.max(0,-(a*d+l)),u=-f*f+d*(d+2*o)+c;else d=-r,f=Math.max(0,-(a*d+l)),u=-f*f+d*(d+2*o)+c;else d<=-p?(f=Math.max(0,-(-a*r+l)),d=f>0?-r:Math.min(Math.max(-r,-o),r),u=-f*f+d*(d+2*o)+c):d<=p?(f=0,d=Math.min(Math.max(-r,-o),r),u=d*(d+2*o)+c):(f=Math.max(0,-(a*r+l)),d=f>0?r:Math.min(Math.max(-r,-o),r),u=-f*f+d*(d+2*o)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+l)),u=-f*f+d*(d+2*o)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(bo).addScaledVector(hr,d),u}intersectSphere(t,e){if(t.radius<0)return null;Bn.subVectors(t.center,this.origin);const n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),l=n-a,o=n+a;return o<0?null:l<0?this.at(o,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,o;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(l=(t.min.z-d.z)*f,o=(t.max.z-d.z)*f):(l=(t.max.z-d.z)*f,o=(t.min.z-d.z)*f),n>o||l>s)||((l>n||n!==n)&&(n=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,l=this.direction,o=l.x,c=l.y,h=l.z,f=t.x-a.x,d=t.y-a.y,u=t.z-a.z,p=e.x-a.x,x=e.y-a.y,m=e.z-a.z,g=n.x-a.x,_=n.y-a.y,M=n.z-a.z,S=Math.abs(o),y=Math.abs(c),E=Math.abs(h);let v,b,D,A,N,F,B,L,J,k,Z,G;if(S>=y&&S>=E?(D=o,F=f,J=p,G=g,o>=0?(v=c,b=h,A=d,N=u,B=x,L=m,k=_,Z=M):(v=h,b=c,A=u,N=d,B=m,L=x,k=M,Z=_)):y>=E?(D=c,F=d,J=x,G=_,c>=0?(v=h,b=o,A=u,N=f,B=m,L=p,k=M,Z=g):(v=o,b=h,A=f,N=u,B=p,L=m,k=g,Z=M)):(D=h,F=u,J=m,G=M,h>=0?(v=o,b=c,A=f,N=d,B=p,L=x,k=g,Z=_):(v=c,b=o,A=d,N=f,B=x,L=p,k=_,Z=g)),D===0)return null;const O=v/D,H=b/D,Q=1/D,q=A-O*F,xt=N-H*F,j=B-O*J,ot=L-H*J,ut=k-O*G,vt=Z-H*G,mt=ut*ot-vt*j,Pt=q*vt-xt*ut,Jt=j*xt-ot*q;if(s){if(mt<0||Pt<0||Jt<0)return null}else if((mt<0||Pt<0||Jt<0)&&(mt>0||Pt>0||Jt>0))return null;const st=mt+Pt+Jt;if(st===0)return null;const ft=Q*(mt*F+Pt*J+Jt*G);return(st>0?ft<0:ft>0)?null:this.at(ft/st,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ei extends ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const uc=new ie,pi=new wo,dr=new _s,dc=new Y,fr=new Y,pr=new Y,mr=new Y,To=new Y,gr=new Y,fc=new Y,_r=new Y;class Qt extends Oe{constructor(t=new Re,e=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const l=this.morphTargetInfluences;if(r&&l){gr.set(0,0,0);for(let o=0,c=r.length;o<c;o++){const h=l[o],f=r[o];h!==0&&(To.fromBufferAttribute(f,t),a?gr.addScaledVector(To,h):gr.addScaledVector(To.sub(e),h))}e.add(gr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(dr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(dr,dc)===null||pi.origin.distanceToSquared(dc)>(t.far-t.near)**2))&&(uc.copy(r).invert(),pi.copy(t.ray).applyMatrix4(uc),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(l!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){const m=d[p],g=a[m.materialIndex],_=Math.max(m.start,u.start),M=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let S=_,y=M;S<y;S+=3){const E=l.getX(S),v=l.getX(S+1),b=l.getX(S+2);s=xr(this,g,t,n,c,h,f,E,v,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){const _=l.getX(m),M=l.getX(m+1),S=l.getX(m+2);s=xr(this,a,t,n,c,h,f,_,M,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){const m=d[p],g=a[m.materialIndex],_=Math.max(m.start,u.start),M=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let S=_,y=M;S<y;S+=3){const E=S,v=S+1,b=S+2;s=xr(this,g,t,n,c,h,f,E,v,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){const _=m,M=m+1,S=m+2;s=xr(this,a,t,n,c,h,f,_,M,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function $d(i,t,e,n,s,r,a,l){let o;if(t.side===Ye?o=n.intersectTriangle(a,r,s,!0,l):o=n.intersectTriangle(s,r,a,t.side===Xn,l),o===null)return null;_r.copy(l),_r.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(_r);return c<e.near||c>e.far?null:{distance:c,point:_r.clone(),object:i}}function xr(i,t,e,n,s,r,a,l,o,c){i.getVertexPosition(l,fr),i.getVertexPosition(o,pr),i.getVertexPosition(c,mr);const h=$d(i,t,e,n,fr,pr,mr,fc);if(h){const f=new Y;pn.getBarycoord(fc,fr,pr,mr,f),s&&(h.uv=pn.getInterpolatedAttribute(s,l,o,c,f,new Ut)),r&&(h.uv1=pn.getInterpolatedAttribute(r,l,o,c,f,new Ut)),a&&(h.normal=pn.getInterpolatedAttribute(a,l,o,c,f,new Y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:l,b:o,c,normal:new Y,materialIndex:0};pn.getNormal(fr,pr,mr,d.normal),h.face=d,h.barycoord=f}return h}class vr extends Te{constructor(t=null,e=1,n=1,s,r,a,l,o,c=Fe,h=Fe,f,d){super(null,a,l,o,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pc extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Gi=new ie,mc=new ie,Mr=[],gc=new ui,Kd=new ie,vs=new Qt,Ms=new _s;class ni extends Qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Kd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),gc.copy(t.boundingBox).applyMatrix4(Gi),this.boundingBox.union(gc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _s),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),Ms.copy(t.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(Ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),t.ray.intersectsSphere(Ms)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gi),mc.multiplyMatrices(n,Gi),vs.matrixWorld=mc,vs.raycast(t,Mr);for(let a=0,l=Mr.length;a<l;a++){const o=Mr[a];o.instanceId=r,o.object=this,e.push(o)}Mr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new pc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vr(new Float32Array(s*this.count),s,this.count,Ma,ln));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const l=this.geometry.morphTargetsRelative?1:1-a,o=s*t;return r[o]=l,r.set(n,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const mi=new _s,Jd=new Ut(.5,.5),Sr=new Y;class Ss{constructor(t=new wn,e=new wn,n=new wn,s=new wn,r=new wn,a=new wn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hn,n=!1){const s=this.planes,r=t.elements,a=r[0],l=r[1],o=r[2],c=r[3],h=r[4],f=r[5],d=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],_=r[12],M=r[13],S=r[14],y=r[15];if(s[0].setComponents(c-a,u-h,g-p,y-_).normalize(),s[1].setComponents(c+a,u+h,g+p,y+_).normalize(),s[2].setComponents(c+l,u+f,g+x,y+M).normalize(),s[3].setComponents(c-l,u-f,g-x,y-M).normalize(),n)s[4].setComponents(o,d,m,S).normalize(),s[5].setComponents(c-o,u-d,g-m,y-S).normalize();else if(s[4].setComponents(c-o,u-d,g-m,y-S).normalize(),e===hn)s[5].setComponents(c+o,u+d,g+m,y+S).normalize();else if(e===cs)s[5].setComponents(o,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){mi.center.set(0,0,0);const e=Jd.distanceTo(t.center);return mi.radius=.7071067811865476+e,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Sr.x=s.normal.x>0?t.max.x:t.min.x,Sr.y=s.normal.y>0?t.max.y:t.min.y,Sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const _c=new ie;class Ao{constructor(){this.coordinateSystem=hn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];_c.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ss),n[s].setFromProjectionMatrix(_c,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ss),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new Ao().copy(this)}}class xc extends Te{constructor(t=[],e=Ti,n,s,r,a,l,o,c,h){super(t,e,n,s,r,a,l,o,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yr extends Te{constructor(t,e,n,s,r,a,l,o,c){super(t,e,n,s,r,a,l,o,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hi extends Te{constructor(t,e,n=Sn,s,r,a,l=Fe,o=Fe,c,h=qn,f=1){if(h!==qn&&h!==Yn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:f};super(d,s,r,a,l,o,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ro(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class vc extends Hi{constructor(t,e=Sn,n=Ti,s,r,a=Fe,l=Fe,o,c=qn){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,l,o,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Mc extends Te{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class gi extends Re{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const o=[],c=[],h=[],f=[];let d=0,u=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(o),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(f,2));function p(x,m,g,_,M,S,y,E,v,b,D){const A=S/v,N=y/b,F=S/2,B=y/2,L=E/2,J=v+1,k=b+1;let Z=0,G=0;const O=new Y;for(let H=0;H<k;H++){const Q=H*N-B;for(let q=0;q<J;q++){const xt=q*A-F;O[x]=xt*_,O[m]=Q*M,O[g]=L,c.push(O.x,O.y,O.z),O[x]=0,O[m]=0,O[g]=E>0?1:-1,h.push(O.x,O.y,O.z),f.push(q/v),f.push(1-H/b),Z+=1}}for(let H=0;H<b;H++)for(let Q=0;Q<v;Q++){const q=d+Q+J*H,xt=d+Q+J*(H+1),j=d+(Q+1)+J*(H+1),ot=d+(Q+1)+J*H;o.push(q,xt,ot),o.push(xt,j,ot),G+=6}l.addGroup(u,G,D),u+=G,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ro extends Re{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],d=[],u=[];let p=0;const x=[],m=n/2;let g=0;_(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new se(f,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(u,2));function _(){const S=new Y,y=new Y;let E=0;const v=(e-t)/n;for(let b=0;b<=r;b++){const D=[],A=b/r,N=A*(e-t)+t;for(let F=0;F<=s;F++){const B=F/s,L=B*o+l,J=Math.sin(L),k=Math.cos(L);y.x=N*J,y.y=-A*n+m,y.z=N*k,f.push(y.x,y.y,y.z),S.set(J,v,k).normalize(),d.push(S.x,S.y,S.z),u.push(B,1-A),D.push(p++)}x.push(D)}for(let b=0;b<s;b++)for(let D=0;D<r;D++){const A=x[D][b],N=x[D+1][b],F=x[D+1][b+1],B=x[D][b+1];(t>0||D!==0)&&(h.push(A,N,B),E+=3),(e>0||D!==r-1)&&(h.push(N,F,B),E+=3)}c.addGroup(g,E,0),g+=E}function M(S){const y=p,E=new Ut,v=new Y;let b=0;const D=S===!0?t:e,A=S===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*A,0),d.push(0,A,0),u.push(.5,.5),p++;const N=p;for(let F=0;F<=s;F++){const L=F/s*o+l,J=Math.cos(L),k=Math.sin(L);v.x=D*k,v.y=m*A,v.z=D*J,f.push(v.x,v.y,v.z),d.push(0,A,0),E.x=J*.5+.5,E.y=k*.5*A+.5,u.push(E.x,E.y),p++}for(let F=0;F<s;F++){const B=y+F,L=N+F;S===!0?h.push(L,L+1,B):h.push(L+1,L,B),b+=3}c.addGroup(g,b,S===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ro(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Co extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];l(s),c(n),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(_){const M=new Y,S=new Y,y=new Y;for(let E=0;E<e.length;E+=3)u(e[E+0],M),u(e[E+1],S),u(e[E+2],y),o(M,S,y,_)}function o(_,M,S,y){const E=y+1,v=[];for(let b=0;b<=E;b++){v[b]=[];const D=_.clone().lerp(S,b/E),A=M.clone().lerp(S,b/E),N=E-b;for(let F=0;F<=N;F++)F===0&&b===E?v[b][F]=D:v[b][F]=D.clone().lerp(A,F/N)}for(let b=0;b<E;b++)for(let D=0;D<2*(E-b)-1;D++){const A=Math.floor(D/2);D%2===0?(d(v[b][A+1]),d(v[b+1][A]),d(v[b][A])):(d(v[b][A+1]),d(v[b+1][A+1]),d(v[b+1][A]))}}function c(_){const M=new Y;for(let S=0;S<r.length;S+=3)M.x=r[S+0],M.y=r[S+1],M.z=r[S+2],M.normalize().multiplyScalar(_),r[S+0]=M.x,r[S+1]=M.y,r[S+2]=M.z}function h(){const _=new Y;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];const S=m(_)/2/Math.PI+.5,y=g(_)/Math.PI+.5;a.push(S,1-y)}p(),f()}function f(){for(let _=0;_<a.length;_+=6){const M=a[_+0],S=a[_+2],y=a[_+4],E=Math.max(M,S,y),v=Math.min(M,S,y);E>.9&&v<.1&&(M<.2&&(a[_+0]+=1),S<.2&&(a[_+2]+=1),y<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function u(_,M){const S=_*3;M.x=t[S+0],M.y=t[S+1],M.z=t[S+2]}function p(){const _=new Y,M=new Y,S=new Y,y=new Y,E=new Ut,v=new Ut,b=new Ut;for(let D=0,A=0;D<r.length;D+=9,A+=6){_.set(r[D+0],r[D+1],r[D+2]),M.set(r[D+3],r[D+4],r[D+5]),S.set(r[D+6],r[D+7],r[D+8]),E.set(a[A+0],a[A+1]),v.set(a[A+2],a[A+3]),b.set(a[A+4],a[A+5]),y.copy(_).add(M).add(S).divideScalar(3);const N=m(y);x(E,A+0,_,N),x(v,A+2,M,N),x(b,A+4,S,N)}}function x(_,M,S,y){y<0&&_.x===1&&(a[M]=_.x-1),S.x===0&&S.z===0&&(a[M]=y/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Co(t.vertices,t.indices,t.radius,t.detail)}}function Qd(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Sc(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let l,o,c;if(n&&(r=sf(i,t,r,e)),i.length>80*e){l=i[0],o=i[1];let h=l,f=o;for(let d=e;d<s;d+=e){const u=i[d],p=i[d+1];u<l&&(l=u),p<o&&(o=p),u>h&&(h=u),p>f&&(f=p)}c=Math.max(h-l,f-o),c=c!==0?32767/c:0}return ys(r,a,e,l,o,c,0),a}function Sc(i,t,e,n,s){let r;if(s===mf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=wc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=wc(a/n|0,i[a],i[a+1],r);return r&&Vi(r,r.next)&&(ws(r),r=r.next),r}function _i(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Vi(e,e.next)||_e(e.prev,e,e.next)===0)){if(ws(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ys(i,t,e,n,s,r,a){if(!i)return;!a&&r&&cf(i,n,s,r);let l=i;for(;i.prev!==i.next;){const o=i.prev,c=i.next;if(r?tf(i,n,s,r):jd(i)){t.push(o.i,i.i,c.i),ws(i),i=c.next,l=c.next;continue}if(i=c,i===l){a?a===1?(i=ef(_i(i),t),ys(i,t,e,n,s,r,2)):a===2&&nf(i,t,e,n,s,r):ys(_i(i),t,e,n,s,r,1);break}}}function jd(i){const t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,l=t.y,o=e.y,c=n.y,h=Math.min(s,r,a),f=Math.min(l,o,c),d=Math.max(s,r,a),u=Math.max(l,o,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=f&&p.y<=u&&Es(s,l,r,o,a,c,p.x,p.y)&&_e(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function tf(i,t,e,n){const s=i.prev,r=i,a=i.next;if(_e(s,r,a)>=0)return!1;const l=s.x,o=r.x,c=a.x,h=s.y,f=r.y,d=a.y,u=Math.min(l,o,c),p=Math.min(h,f,d),x=Math.max(l,o,c),m=Math.max(h,f,d),g=Po(u,p,t,e,n),_=Po(x,m,t,e,n);let M=i.prevZ,S=i.nextZ;for(;M&&M.z>=g&&S&&S.z<=_;){if(M.x>=u&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==a&&Es(l,h,o,f,c,d,M.x,M.y)&&_e(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=u&&S.x<=x&&S.y>=p&&S.y<=m&&S!==s&&S!==a&&Es(l,h,o,f,c,d,S.x,S.y)&&_e(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=g;){if(M.x>=u&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==a&&Es(l,h,o,f,c,d,M.x,M.y)&&_e(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=_;){if(S.x>=u&&S.x<=x&&S.y>=p&&S.y<=m&&S!==s&&S!==a&&Es(l,h,o,f,c,d,S.x,S.y)&&_e(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function ef(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Vi(n,s)&&Ec(n,e,e.next,s)&&bs(n,s)&&bs(s,n)&&(t.push(n.i,e.i,s.i),ws(e),ws(e.next),e=i=s),e=e.next}while(e!==i);return _i(e)}function nf(i,t,e,n,s,r){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&df(a,l)){let o=bc(a,l);a=_i(a,a.next),o=_i(o,o.next),ys(a,t,e,n,s,r,0),ys(o,t,e,n,s,r,0);return}l=l.next}a=a.next}while(a!==i)}function sf(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const l=t[r]*n,o=r<a-1?t[r+1]*n:i.length,c=Sc(i,l,o,n,!1);c===c.next&&(c.steiner=!0),s.push(uf(c))}s.sort(rf);for(let r=0;r<s.length;r++)e=af(s[r],e);return e}function rf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function af(i,t){const e=of(i,t);if(!e)return t;const n=bc(e,i);return _i(n,n.next),_i(e,e.next)}function of(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Vi(i,e))return e;do{if(Vi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;const l=a,o=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=o&&n!==e.x&&yc(s<c?n:r,s,o,c,s<c?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);bs(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&lf(a,e)))&&(a=e,h=f)}e=e.next}while(e!==l);return a}function lf(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function cf(i,t,e,n){let s=i;do s.z===0&&(s.z=Po(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,hf(s)}function hf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,l=0;for(let c=0;c<e&&(l++,a=a.nextZ,!!a);c++);let o=e;for(;l>0||o>0&&a;)l!==0&&(o===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,l--):(s=a,a=a.nextZ,o--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Po(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function uf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function yc(i,t,e,n,s,r,a,l){return(s-a)*(t-l)>=(i-a)*(r-l)&&(i-a)*(n-l)>=(e-a)*(t-l)&&(e-a)*(r-l)>=(s-a)*(n-l)}function Es(i,t,e,n,s,r,a,l){return!(i===a&&t===l)&&yc(i,t,e,n,s,r,a,l)}function df(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ff(i,t)&&(bs(i,t)&&bs(t,i)&&pf(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||Vi(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Vi(i,t){return i.x===t.x&&i.y===t.y}function Ec(i,t,e,n){const s=br(_e(i,t,e)),r=br(_e(i,t,n)),a=br(_e(e,n,i)),l=br(_e(e,n,t));return!!(s!==r&&a!==l||s===0&&Er(i,e,t)||r===0&&Er(i,n,t)||a===0&&Er(e,i,n)||l===0&&Er(e,t,n))}function Er(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function br(i){return i>0?1:i<0?-1:0}function ff(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ec(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function bs(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function pf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function bc(i,t){const e=Do(i.i,i.x,i.y),n=Do(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wc(i,t,e,n){const s=Do(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ws(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Do(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class gf{static triangulate(t,e,n=2){return Qd(t,e,n)}}class Lo{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Lo.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Tc(t),Ac(n,t);let a=t.length;e.forEach(Tc);for(let o=0;o<e.length;o++)s.push(a),a+=e[o].length,Ac(n,e[o]);const l=gf.triangulate(n,s);for(let o=0;o<l.length;o+=3)r.push(l.slice(o,o+3));return r}}function Tc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ac(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Io extends Co{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Io(t.radius,t.detail)}}class ii extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,l=Math.floor(n),o=Math.floor(s),c=l+1,h=o+1,f=t/l,d=e/o,u=[],p=[],x=[],m=[];for(let g=0;g<h;g++){const _=g*d-a;for(let M=0;M<c;M++){const S=M*f-r;p.push(S,-_,0),x.push(0,0,1),m.push(M/l),m.push(1-g/o)}}for(let g=0;g<o;g++)for(let _=0;_<l;_++){const M=_+c*g,S=_+c*(g+1),y=_+1+c*(g+1),E=_+1+c*g;u.push(M,S,E),u.push(S,y,E)}this.setIndex(u),this.setAttribute("position",new se(p,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.width,t.height,t.widthSegments,t.heightSegments)}}class No extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const o=Math.min(a+l,Math.PI);let c=0;const h=[],f=new Y,d=new Y,u=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){const _=[],M=g/n,S=a+M*l,y=t*Math.cos(S),E=Math.sqrt(t*t-y*y);let v=0;g===0&&a===0?v=.5/e:g===n&&o===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){const D=b/e,A=s+D*r;f.x=-E*Math.cos(A),f.y=y,f.z=E*Math.sin(A),p.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(D+v,1-M),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){const M=h[g][_+1],S=h[g][_],y=h[g+1][_],E=h[g+1][_+1];(g!==0||a>0)&&u.push(M,S,E),(g!==n-1||o<Math.PI)&&u.push(S,y,E)}this.setIndex(u),this.setAttribute("position",new se(p,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new No(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Wi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Rc(s))s.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Rc(s[0])){const r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ke(i){const t={};for(let e=0;e<i.length;e++){const n=Wi(i[e]);for(const s in n)t[s]=n[s]}return t}function Rc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _f(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Cc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const xf={clone:Wi,merge:Ke};var vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=_f(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Lt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ie().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Sf extends kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qe extends ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pc extends ki{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=ua,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yf extends ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ef extends ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Uo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Dc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Dc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Dc(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class bf{constructor(t,e,n){const s=this;let r=!1,a=0,l=0,o;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,l),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){const u=c[f],p=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const wf=new bf;class Fo{constructor(t){this.manager=t!==void 0?t:wf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Fo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xi=new WeakMap;class Tf extends Fo{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Uo.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=Xi.get(a);f===void 0&&(f=[],Xi.set(a,f)),f.push({onLoad:e,onError:s})}return a}const l=hs("img");function o(){h(),e&&e(this);const f=Xi.get(this)||[];for(let d=0;d<f.length;d++){const u=f[d];u.onLoad&&u.onLoad(this)}Xi.delete(this),r.manager.itemEnd(t)}function c(f){h(),s&&s(f),Uo.remove(`image:${t}`);const d=Xi.get(this)||[];for(let u=0;u<d.length;u++){const p=d[u];p.onError&&p.onError(f)}Xi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){l.removeEventListener("load",o,!1),l.removeEventListener("error",c,!1)}return l.addEventListener("load",o,!1),l.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Uo.add(`image:${t}`,l),r.manager.itemStart(t),l.fetchPriority=this.priority,l.src=t,l}}class Oo extends Fo{constructor(t){super(t)}load(t,e,n,s){const r=new Te,a=new Tf(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(l){r.image=l,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Lc extends Oe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Af extends Lc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const zo=new ie,Ic=new Y,Nc=new Y;class Rf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ic),Nc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(zo,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,o=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===cs||t.reversedDepth?e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,.5,.5,0,0,0,1),e.multiply(zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const wr=new Y,Tr=new un,Tn=new Y;class Uc extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wr,Tr,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Tr,Tn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(wr,Tr,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Tr,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const si=new Y,Fc=new Ut,Oc=new Ut;class gn extends Uc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,Fc,Oc),e.subVectors(Oc,Fc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(us*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const o=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/o,e-=a.offsetY*n/c,s*=a.width/o,n*=a.height/c}const l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class zc extends Uc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,l=s+e,o=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,l-=h*this.view.offsetY,o=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Cf extends Rf{constructor(){super(new zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pf extends Lc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Cf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const qi=-90,Yi=1;class Bo extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(qi,Yi,t,e);s.layers=this.layers,this.add(s);const r=new gn(qi,Yi,t,e);r.layers=this.layers,this.add(r);const a=new gn(qi,Yi,t,e);a.layers=this.layers,this.add(a);const l=new gn(qi,Yi,t,e);l.layers=this.layers,this.add(l);const o=new gn(qi,Yi,t,e);o.layers=this.layers,this.add(o);const c=new gn(qi,Yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,o]=e;for(const c of e)this.remove(c);if(t===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,o,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Df extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const Bc=new ie;class Lf{constructor(t,e,n=0,s=1/0){this.ray=new wo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new lo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):te("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Bc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bc),this}intersectObject(t,e=!0,n=[]){return ko(t,this,n,e),n.sort(kc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ko(t[s],this,n,e);return n.sort(kc),n}}function kc(i,t){return i.distance-t.distance}function ko(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,l=r.length;a<l;a++)ko(r[a],t,e,!0)}}class Ar{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Yt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const _l=class _l{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};_l.prototype.isMatrix2=!0;let Gc=_l;class If extends Kn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Hc(i,t,e,n){const s=Nf(n);switch(e){case Fl:return i*t;case Ma:return i*t/s.components*s.byteLength;case Sa:return i*t/s.components*s.byteLength;case Zn:return i*t*2/s.components*s.byteLength;case ya:return i*t*2/s.components*s.byteLength;case Ol:return i*t*3/s.components*s.byteLength;case yn:return i*t*4/s.components*s.byteLength;case Ea:return i*t*4/s.components*s.byteLength;case qs:case Ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zs:case $s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wa:case Aa:return Math.max(i,16)*Math.max(t,8)/4;case ba:case Ta:return Math.max(i,8)*Math.max(t,8)/2;case Ra:case Ca:case Da:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pa:case Ks:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Za:case $a:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ja:case Qa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Js:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Nf(i){switch(i){case tn:case Ll:return{byteLength:1,components:1};case ls:case Il:case cn:return{byteLength:2,components:1};case xa:case va:return{byteLength:2,components:4};case Sn:case _a:case ln:return{byteLength:4,components:1};case Nl:case Ul:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:na}})),typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=na);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vc(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Uf(i){const t=new WeakMap;function e(l,o){const c=l.array,h=l.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(o,d),i.bufferData(o,c,h),l.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:f}}function n(l,o,c){const h=o.array,f=o.updateRanges;if(i.bindBuffer(c,l),f.length===0)i.bufferSubData(c,0,h);else{f.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<f.length;u++){const p=f[d],x=f[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,f[d]=x)}f.length=d+1;for(let u=0,p=f.length;u<p;u++){const x=f[u];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const o=t.get(l);o&&(i.deleteBuffer(o.buffer),t.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=t.get(l);(!h||h.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=t.get(l);if(c===void 0)t.set(l,e(l,o));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,o),c.version=l.version}}return{get:s,remove:r,update:a}}var Ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Of=`#ifdef USE_ALPHAHASH
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
#endif`,zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hf=`#ifdef USE_AOMAP
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
#endif`,Vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wf=`#ifdef USE_BATCHING
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
#endif`,Xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$f=`#ifdef USE_IRIDESCENCE
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
#endif`,Kf=`#ifdef USE_BUMPMAP
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
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,rp=`#define PI 3.141592653589793
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
} // validated`,ap=`vec3 transformedNormal = objectNormal;
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
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,up="gl_FragColor = linearToOutputTexel( gl_FragColor );",dp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yp=`#ifdef USE_GRADIENTMAP
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
}`,Ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lp=`PhysicalMaterial material;
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
#endif`,Ip=`uniform sampler2D dfgLUT;
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
}`,Np=`
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
#endif`,Up=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Op=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,zp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xp=`#if defined( USE_POINTS_UV )
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
#endif`,qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$p=`#if defined( USE_MORPHCOLORS )
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
#endif`,Kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`#ifdef USE_MORPHTARGETS
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
#endif`,Qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sm=`#ifdef USE_NORMALMAP
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
#endif`,rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mm=`float getShadowMask() {
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
}`,Sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,Em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cm=`#ifdef USE_TRANSMISSION
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
#endif`,Pm=`#ifdef USE_TRANSMISSION
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xt={alphahash_fragment:Ff,alphahash_pars_fragment:Of,alphamap_fragment:zf,alphamap_pars_fragment:Bf,alphatest_fragment:kf,alphatest_pars_fragment:Gf,aomap_fragment:Hf,aomap_pars_fragment:Vf,batching_pars_vertex:Wf,batching_vertex:Xf,begin_vertex:qf,beginnormal_vertex:Yf,bsdfs:Zf,iridescence_fragment:$f,bumpmap_pars_fragment:Kf,clipping_planes_fragment:Jf,clipping_planes_pars_fragment:Qf,clipping_planes_pars_vertex:jf,clipping_planes_vertex:tp,color_fragment:ep,color_pars_fragment:np,color_pars_vertex:ip,color_vertex:sp,common:rp,defaultnormal_vertex:ap,displacementmap_pars_vertex:op,displacementmap_vertex:lp,emissivemap_fragment:cp,emissivemap_pars_fragment:hp,colorspace_fragment:up,colorspace_pars_fragment:dp,envmap_fragment:fp,envmap_common_pars_fragment:pp,envmap_pars_fragment:mp,envmap_pars_vertex:gp,envmap_physical_pars_fragment:Ap,envmap_vertex:_p,fog_vertex:xp,fog_pars_vertex:vp,fog_fragment:Mp,fog_pars_fragment:Sp,gradientmap_pars_fragment:yp,lightmap_pars_fragment:Ep,lights_lambert_fragment:bp,lights_lambert_pars_fragment:wp,lights_pars_begin:Tp,lights_toon_fragment:Rp,lights_toon_pars_fragment:Cp,lights_phong_fragment:Pp,lights_phong_pars_fragment:Dp,lights_physical_fragment:Lp,lights_physical_pars_fragment:Ip,lights_fragment_begin:Np,lights_fragment_maps:Up,lights_fragment_end:Fp,lightprobes_pars_fragment:Op,logdepthbuf_fragment:zp,logdepthbuf_pars_fragment:Bp,logdepthbuf_pars_vertex:kp,logdepthbuf_vertex:Gp,map_fragment:Hp,map_pars_fragment:Vp,map_particle_fragment:Wp,map_particle_pars_fragment:Xp,metalnessmap_fragment:qp,metalnessmap_pars_fragment:Yp,morphinstance_vertex:Zp,morphcolor_vertex:$p,morphnormal_vertex:Kp,morphtarget_pars_vertex:Jp,morphtarget_vertex:Qp,normal_fragment_begin:jp,normal_fragment_maps:tm,normal_pars_fragment:em,normal_pars_vertex:nm,normal_vertex:im,normalmap_pars_fragment:sm,clearcoat_normal_fragment_begin:rm,clearcoat_normal_fragment_maps:am,clearcoat_pars_fragment:om,iridescence_pars_fragment:lm,opaque_fragment:cm,packing:hm,premultiplied_alpha_fragment:um,project_vertex:dm,dithering_fragment:fm,dithering_pars_fragment:pm,roughnessmap_fragment:mm,roughnessmap_pars_fragment:gm,shadowmap_pars_fragment:_m,shadowmap_pars_vertex:xm,shadowmap_vertex:vm,shadowmask_pars_fragment:Mm,skinbase_vertex:Sm,skinning_pars_vertex:ym,skinning_vertex:Em,skinnormal_vertex:bm,specularmap_fragment:wm,specularmap_pars_fragment:Tm,tonemapping_fragment:Am,tonemapping_pars_fragment:Rm,transmission_fragment:Cm,transmission_pars_fragment:Pm,uv_pars_fragment:Dm,uv_pars_vertex:Lm,uv_vertex:Im,worldpos_vertex:Nm,background_vert:`varying vec2 vUv;
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
}`},yt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},An={basic:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ke([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ke([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ke([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ke([yt.points,yt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ke([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ke([yt.common,yt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ke([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ke([yt.sprite,yt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:Ke([yt.common,yt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:Ke([yt.lights,yt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};An.physical={uniforms:Ke([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Rr={r:0,b:0,g:0},Um=new ie,Wc=new kt;Wc.set(-1,0,0,0,1,0,0,0,1);function Fm(i,t,e,n,s,r){const a=new Lt(0);let l=s===!0?0:1,o,c,h=null,f=0,d=null;function u(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){const S=_.backgroundBlurriness>0;M=t.get(M,S)}return M}function p(_){let M=!1;const S=u(_);S===null?m(a,l):S&&S.isColor&&(m(S,1),M=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,M){const S=u(M);S&&S.isCubeTexture?(c===void 0&&(c=new Qt(new gi(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Wi(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Um.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Wc),c.material.toneMapped=Kt.getTransfer(S.colorSpace)!==ae,(h!==S||f!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(o===void 0&&(o=new Qt(new ii(2,2),new kn({name:"BackgroundMaterial",uniforms:Wi(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=S,o.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,o.material.toneMapped=Kt.getTransfer(S.colorSpace)!==ae,S.matrixAutoUpdate===!0&&S.updateMatrix(),o.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==i.toneMapping)&&(o.material.needsUpdate=!0,h=S,f=S.version,d=i.toneMapping),o.layers.enableAll(),_.unshift(o,o.geometry,o.material,0,0,null))}function m(_,M){_.getRGB(Rr,Cc(i)),e.buffers.color.setClear(Rr.r,Rr.g,Rr.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:p,addToRenderList:x,dispose:g}}function Om(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function l(N,F,B,L,J){let k=!1;const Z=f(N,L,B,F);r!==Z&&(r=Z,c(r.object)),k=u(N,L,B,J),k&&p(N,L,B,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,S(N,F,B,L),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function o(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function f(N,F,B,L){const J=L.wireframe===!0;let k=n[F.id];k===void 0&&(k={},n[F.id]=k);const Z=N.isInstancedMesh===!0?N.id:0;let G=k[Z];G===void 0&&(G={},k[Z]=G);let O=G[B.id];O===void 0&&(O={},G[B.id]=O);let H=O[J];return H===void 0&&(H=d(o()),O[J]=H),H}function d(N){const F=[],B=[],L=[];for(let J=0;J<e;J++)F[J]=0,B[J]=0,L[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:L,object:N,attributes:{},index:null}}function u(N,F,B,L){const J=r.attributes,k=F.attributes;let Z=0;const G=B.getAttributes();for(const O in G)if(G[O].location>=0){const Q=J[O];let q=k[O];if(q===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(q=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(q=N.instanceColor)),Q===void 0||Q.attribute!==q||q&&Q.data!==q.data)return!0;Z++}return r.attributesNum!==Z||r.index!==L}function p(N,F,B,L){const J={},k=F.attributes;let Z=0;const G=B.getAttributes();for(const O in G)if(G[O].location>=0){let Q=k[O];Q===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor));const q={};q.attribute=Q,Q&&Q.data&&(q.data=Q.data),J[O]=q,Z++}r.attributes=J,r.attributesNum=Z,r.index=L}function x(){const N=r.newAttributes;for(let F=0,B=N.length;F<B;F++)N[F]=0}function m(N){g(N,0)}function g(N,F){const B=r.newAttributes,L=r.enabledAttributes,J=r.attributeDivisors;B[N]=1,L[N]===0&&(i.enableVertexAttribArray(N),L[N]=1),J[N]!==F&&(i.vertexAttribDivisor(N,F),J[N]=F)}function _(){const N=r.newAttributes,F=r.enabledAttributes;for(let B=0,L=F.length;B<L;B++)F[B]!==N[B]&&(i.disableVertexAttribArray(B),F[B]=0)}function M(N,F,B,L,J,k,Z){Z===!0?i.vertexAttribIPointer(N,F,B,J,k):i.vertexAttribPointer(N,F,B,L,J,k)}function S(N,F,B,L){x();const J=L.attributes,k=B.getAttributes(),Z=F.defaultAttributeValues;for(const G in k){const O=k[G];if(O.location>=0){let H=J[G];if(H===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(H=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(H=N.instanceColor)),H!==void 0){const Q=H.normalized,q=H.itemSize,xt=t.get(H);if(xt===void 0)continue;const j=xt.buffer,ot=xt.type,ut=xt.bytesPerElement,vt=ot===i.INT||ot===i.UNSIGNED_INT||H.gpuType===_a;if(H.isInterleavedBufferAttribute){const mt=H.data,Pt=mt.isInterleavedBuffer===!0?mt.stride:mt.itemSize,Jt=H.offset;if(mt.isInstancedInterleavedBuffer||mt.isInstancedBufferAttribute){for(let st=0;st<O.locationSize;st++)g(O.location+st,mt.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let st=0;st<O.locationSize;st++)m(O.location+st);i.bindBuffer(i.ARRAY_BUFFER,j);for(let st=0;st<O.locationSize;st++)M(O.location+st,q/O.locationSize,ot,Q,Pt*ut,(Jt+q/O.locationSize*st)*ut,vt)}else{if(H.isInstancedBufferAttribute){for(let mt=0;mt<O.locationSize;mt++)g(O.location+mt,H.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let mt=0;mt<O.locationSize;mt++)m(O.location+mt);i.bindBuffer(i.ARRAY_BUFFER,j);for(let mt=0;mt<O.locationSize;mt++)M(O.location+mt,q/O.locationSize,ot,Q,q*ut,q/O.locationSize*mt*ut,vt)}}else if(Z!==void 0){const Q=Z[G];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(O.location,Q);break;case 3:i.vertexAttrib3fv(O.location,Q);break;case 4:i.vertexAttrib4fv(O.location,Q);break;default:i.vertexAttrib1fv(O.location,Q)}}}}_()}function y(){D();for(const N in n){const F=n[N];for(const B in F){const L=F[B];for(const J in L){const k=L[J];for(const Z in k)h(k[Z].object),delete k[Z];delete L[J]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;const F=n[N.id];for(const B in F){const L=F[B];for(const J in L){const k=L[J];for(const Z in k)h(k[Z].object),delete k[Z];delete L[J]}}delete n[N.id]}function v(N){for(const F in n){const B=n[F];for(const L in B){const J=B[L];if(J[N.id]===void 0)continue;const k=J[N.id];for(const Z in k)h(k[Z].object),delete k[Z];delete J[N.id]}}}function b(N){for(const F in n){const B=n[F],L=N.isInstancedMesh===!0?N.id:0,J=B[L];if(J!==void 0){for(const k in J){const Z=J[k];for(const G in Z)h(Z[G].object),delete Z[G];delete J[k]}delete B[L],Object.keys(B).length===0&&delete n[F]}}}function D(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:D,resetDefaultState:A,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function zm(i,t,e){let n;function s(o){n=o}function r(o,c){i.drawArrays(n,o,c),e.update(c,n,1)}function a(o,c,h){h!==0&&(i.drawArraysInstanced(n,o,c,h),e.update(c,n,h))}function l(o,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function Bm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==yn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(v){const b=v===cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==tn&&v!==ln&&!b&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function o(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=o(c);h!==c&&(Bt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Bt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:S,maxSamples:y,samples:E}}function km(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new wn,l=new kt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){const p=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,g=i.get(f);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{const _=r?0:n,M=_*4;let S=g.clippingState||null;o.value=S,S=h(p,d,M,u);for(let y=0;y!==M;++y)S[y]=e[y];g.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){o.value!==e&&(o.value=e,o.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,p){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=o.value,p!==!0||m===null){const g=u+x*4,_=d.matrixWorldInverse;l.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,S=u;M!==x;++M,S+=4)a.copy(f[M]).applyMatrix4(_,l),a.normal.toArray(m,S),m[S+3]=a.constant}o.value=m,o.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}class Go extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gi(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:bi});r.uniforms.tEquirect.value=e;const a=new Qt(s,r),l=e.minFilter;return e.minFilter===Ln&&(e.minFilter=Ze),new Bo(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Xc=256,Gm=3,Hm=20,qc=256,Yc=16,Vm=3,Wm=new Y,Xm=new Lt;class Cr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Bo(1,10,null),this._boxMesh=new Qt(new gi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:l=Wm}=r,o=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const f=o.autoClear,d=o.autoClearColor,u=o.autoClearDepth,p=o.autoClearStencil,x=t.background;o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,x===null&&(t.background=o.getClearColor(Xm));const m=new Bo(n,s,h);return m.position.copy(l),m.update(o,t),o.autoClear=f,o.autoClearColor=d,o.autoClearDepth=u,o.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Xc,ql(t))}_fromTexture(t,e){t.mapping===Ti||t.mapping===os?this._setSize(t.image.length===0?Xc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Zc(t,!1,!1),n=Math.log2(t)-Gm;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Zc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ti||t.mapping===os?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=$c()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=qm(),this._integrationMaterial=Ym());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Yc);for(let a=0;a<=n;a++){const l=Cr.lodToRoughness(a,n);if(a>n-Vm)r.roughness.value=l,this._renderCube(t,a,this._integrationMaterial);else{const o=l>0?Math.log2(e)+.5*Math.log2(6/(qc*Math.pow(l,4)))+.5:0;s.roughness.value=l,s.lodBias.value=o,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Zm());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function Zc(i,t,e){return new Go(i,{minFilter:Ln,generateMipmaps:t,type:cn,colorSpace:js,depthBuffer:e})}function Ts(i,t,e){return new kn({name:i,uniforms:t,vertexShader:Xt.cube_vert,fragmentShader:e,side:Ye,blending:bi,depthTest:!1,depthWrite:!1})}function qm(){return Ts("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qc}u

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
	`)}function Ym(){return Ts("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Yc}},`

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
	`)}function Zm(){return Ts("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Hm}
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
	`)}function $c(){return Ts("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Kc(){return Ts("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function $m(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){const u=d.mapping;if(u===fa||u===pa)if(t.has(d)){const p=t.get(d).texture;return l(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const x=new Go(p.height);return x.fromEquirectangularTexture(i,d),t.set(d,x),d.addEventListener("dispose",c),l(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const u=d.mapping,p=u===fa||u===pa,x=u===Ti||u===os;if(p||x){let m=e.get(d);const g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Cr(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const _=d.image;return p&&_&&_.height>0||x&&_&&o(_)?(n===null&&(n=new Cr(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function l(d,u){return u===fa?d.mapping=Ti:u===pa&&(d.mapping=os),d}function o(d){let u=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&u++;return u===p}function c(d){const u=d.target;u.removeEventListener("dispose",c);const p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(d){const u=d.target;u.removeEventListener("dispose",h);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Km(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&nr("WebGLRenderer: "+n+" extension not supported."),s}}}function Jm(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function l(p){o(p.target)}function o(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",l),delete s[p.id],a.unregister(p);const x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",l),s[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(p){const x=p.attributes;for(const m in x)t.update(x[m],i.ARRAY_BUFFER)}function f(p){const x=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const _=x!==null?x.array.length:m.array.length/3-1,M=m.count>=65535?hc:cc,S=new M(Math.ceil(_/3)*6,1),y=S.array;if(x!==null){const v=x.array;g=x.version;for(let b=0,D=0;b<_;b+=3){const A=v[b+0],N=v[b+1],F=v[b+2];y[D++]=A,y[D++]=N,y[D++]=N,y[D++]=F,y[D++]=F,y[D++]=A}}else{g=m.version;for(let v=0,b=0;v<_;v+=3){const D=v+0,A=v+1,N=v+2;y[b++]=D,y[b++]=A,y[b++]=A,y[b++]=N,y[b++]=N,y[b++]=D}}S.version=g;const E=r.get(p);E&&t.remove(E),r.set(p,S)}function d(p){const x=r.get(p);if(x){const m=p.index;m!==null&&x.version<m.version&&f(p)}else f(p);return r.get(p)}function u(){for(const p in s){const x=s[p].deref();x!==void 0&&o(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:u}}function Qm(i,t,e){let n;function s(f){n=f}let r,a;function l(f){r=f.type,a=f.bytesPerElement}function o(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,f*a,u),e.update(d,n,u))}function h(f,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,u);let x=0;for(let m=0;m<u;m++)x+=d[m];e.update(x,n,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=c,this.renderMultiDraw=h}function jm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:te("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function t0(i,t,e){const n=new WeakMap,s=new ge;function r(a,l,o){const c=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(l);if(d===void 0||d.count!==f){let D=function(){v.dispose(),n.delete(l),l.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();const u=l.morphAttributes.position!==void 0,p=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],g=l.morphAttributes.normal||[],_=l.morphAttributes.color||[];let M=0;u===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let S=l.attributes.position.count*M,y=1;S>t.maxTextureSize&&(y=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const E=new Float32Array(S*y*4*f),v=new Ql(E,S,y,f);v.type=ln,v.needsUpdate=!0;const b=M*4;for(let A=0;A<f;A++){const N=m[A],F=g[A],B=_[A],L=S*y*4*A;for(let J=0;J<N.count;J++){const k=J*b;u===!0&&(s.fromBufferAttribute(N,J),E[L+k+0]=s.x,E[L+k+1]=s.y,E[L+k+2]=s.z,E[L+k+3]=0),p===!0&&(s.fromBufferAttribute(F,J),E[L+k+4]=s.x,E[L+k+5]=s.y,E[L+k+6]=s.z,E[L+k+7]=0),x===!0&&(s.fromBufferAttribute(B,J),E[L+k+8]=s.x,E[L+k+9]=s.y,E[L+k+10]=s.z,E[L+k+11]=B.itemSize===4?s.w:1)}}d={count:f,texture:v,size:new Ut(S,y)},n.set(l,d),l.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];const p=l.morphTargetsRelative?1:1-u;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",c)}o.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),o.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function e0(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,f=c.geometry,d=t.get(c,f);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function l(){r=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:l}}const n0={[wl]:"LINEAR_TONE_MAPPING",[Tl]:"REINHARD_TONE_MAPPING",[Al]:"CINEON_TONE_MAPPING",[Rl]:"ACES_FILMIC_TONE_MAPPING",[Pl]:"AGX_TONE_MAPPING",[da]:"NEUTRAL_TONE_MAPPING",[Cl]:"CUSTOM_TONE_MAPPING"};function i0(i,t,e,n,s,r){const a=new En(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,o=null,c=null;const h=new Re;h.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new se([0,2,0,0,2,0],2));const f=new Sf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Qt(h,f),u=new zc(-1,1,1,-1,0,1);let p=null,x=null,m=!1,g,_=null,M=[],S=!1;this.setSize=function(y,E){a.setSize(y,E),l!==null&&l.setSize(y,E),o!==null&&o.setSize(y,E);for(let v=0;v<M.length;v++){const b=M[v];b.setSize&&b.setSize(y,E)}},this.setEffects=function(y){M=y,S=M.length>0&&M[0].isRenderPass===!0;const E=a.width,v=a.height;M.length>0&&l===null&&(l=new En(E,v,{type:cn,depthBuffer:!1,stencilBuffer:!1}),o=new En(E,v,{type:cn,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&M.some(D=>D.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Hi(E,v),r===!0&&(c.format=Yn,c.type=Ai)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let D=0;D<M.length;D++){const A=M[D];A.setSize&&A.setSize(E,v),b&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(y,E){if(m||y.toneMapping===Dn&&M.length===0)return!1;if(_=E,E!==null){const v=E.width,b=E.height;(a.width!==v||a.height!==b)&&this.setSize(v,b)}return S===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Dn,!0},this.hasRenderPass=function(){return S},this.end=function(y,E){y.toneMapping=g,m=!0;let v=a,b=l;for(let D=0;D<M.length;D++){const A=M[D];A.enabled!==!1&&(A.render(y,b,v,E),A.needsSwap!==!1&&(v=b,b=b===l?o:l))}if(p!==y.outputColorSpace||x!==y.toneMapping){p=y.outputColorSpace,x=y.toneMapping,f.defines={},Kt.getTransfer(p)===ae&&(f.defines.SRGB_TRANSFER="");const D=n0[x];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=v.texture,y.setRenderTarget(_),y.render(d,u),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),h.dispose(),f.dispose()}}const Jc=new Te,Qc=new Hi(1,1),jc=new vc(1),th=new Ql,eh=new Dd,nh=new xc,ih=[],sh=[],rh=new Float32Array(16),ah=new Float32Array(9),oh=new Float32Array(4);function Zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ih[s];if(r===void 0&&(r=new Float32Array(s),ih[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pr(i,t){let e=sh[t];e===void 0&&(e=new Int32Array(t),sh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function s0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function l0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;oh.set(n),i.uniformMatrix2fv(this.addr,!1,oh),Pe(e,n)}}function c0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;ah.set(n),i.uniformMatrix3fv(this.addr,!1,ah),Pe(e,n)}}function h0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;rh.set(n),i.uniformMatrix4fv(this.addr,!1,rh),Pe(e,n)}}function u0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function f0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function p0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function m0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function g0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function _0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function x0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function Dr(i){return i.version===0&&(i.compareFunction=kl,i.needsUpdate=!0),i}function v0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Dr(Qc):r=Jc,e.setTexture2D(t||r,s)}function M0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||eh,s)}function S0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Dr(jc):r=nh,e.setTextureCube(t||r,s)}function y0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||th,s)}function E0(i){switch(i){case 5126:return s0;case 35664:return r0;case 35665:return a0;case 35666:return o0;case 35674:return l0;case 35675:return c0;case 35676:return h0;case 5124:case 35670:return u0;case 35667:case 35671:return d0;case 35668:case 35672:return f0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return _0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return y0}}function b0(i,t){i.uniform1fv(this.addr,t)}function w0(i,t){const e=Zi(t,this.size,2);i.uniform2fv(this.addr,e)}function T0(i,t){const e=Zi(t,this.size,3);i.uniform3fv(this.addr,e)}function A0(i,t){const e=Zi(t,this.size,4);i.uniform4fv(this.addr,e)}function R0(i,t){const e=Zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function C0(i,t){const e=Zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function P0(i,t){const e=Zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function D0(i,t){i.uniform1iv(this.addr,t)}function L0(i,t){i.uniform2iv(this.addr,t)}function I0(i,t){i.uniform3iv(this.addr,t)}function N0(i,t){i.uniform4iv(this.addr,t)}function U0(i,t){i.uniform1uiv(this.addr,t)}function F0(i,t){i.uniform2uiv(this.addr,t)}function O0(i,t){i.uniform3uiv(this.addr,t)}function z0(i,t){i.uniform4uiv(this.addr,t)}function B0(i,t,e){const n=this.cache,s=t.length,r=Pr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Dr(Qc):a=Jc;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function k0(i,t,e){const n=this.cache,s=t.length,r=Pr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||eh,r[a])}function G0(i,t,e){const n=this.cache,s=t.length,r=Pr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Dr(jc):a=nh;for(let l=0;l!==s;++l)e.setTextureCube(t[l]||a,r[l])}function H0(i,t,e){const n=this.cache,s=t.length,r=Pr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||th,r[a])}function V0(i){switch(i){case 5126:return b0;case 35664:return w0;case 35665:return T0;case 35666:return A0;case 35674:return R0;case 35675:return C0;case 35676:return P0;case 5124:case 35670:return D0;case 35667:case 35671:return L0;case 35668:case 35672:return I0;case 35669:case 35673:return N0;case 5125:return U0;case 36294:return F0;case 36295:return O0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return B0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return H0}}class W0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=E0(e.type)}}class X0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=V0(e.type)}}class q0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const l=s[r];l.setValue(t,e[l.id],n)}}}const Ho=/(\w+)(\])?(\[|\.)?/g;function lh(i,t){i.seq.push(t),i.map[t.id]=t}function Y0(i,t,e){const n=i.name,s=n.length;for(Ho.lastIndex=0;;){const r=Ho.exec(n),a=Ho.lastIndex;let l=r[1];const o=r[2]==="]",c=r[3];if(o&&(l=l|0),c===void 0||c==="["&&a+2===s){lh(e,c===void 0?new W0(l,i,t):new X0(l,i,t));break}else{let f=e.map[l];f===void 0&&(f=new q0(l),lh(e,f)),e=f}}}class Lr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const l=t.getActiveUniform(e,a),o=t.getUniformLocation(e,l.name);Y0(l,o,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const l=e[r],o=n[l.id];o.needsUpdate!==!1&&l.setValue(t,o.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ch(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Z0=37297;let $0=0;function K0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}const hh=new kt;function J0(i){Kt._getMatrix(hh,Kt.workingColorSpace,i);const t=`mat3( ${hh.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case tr:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+K0(i.getShaderSource(t),l)}else return r}function Q0(i,t){const e=J0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const j0={[wl]:"Linear",[Tl]:"Reinhard",[Al]:"Cineon",[Rl]:"ACESFilmic",[Pl]:"AgX",[da]:"Neutral",[Cl]:"Custom"};function tg(i,t){const e=j0[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ir=new Y;function eg(){Kt.getLuminanceCoefficients(Ir);const i=Ir.x.toFixed(4),t=Ir.y.toFixed(4),e=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ng(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function ig(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function As(i){return i!==""}function dh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function fh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(i){return i.replace(rg,ag)}function ag(i,t){const e=Xt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Vo(e)}const og=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(i){return i.replace(og,lg)}function lg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const cg={[is]:"SHADOWMAP_TYPE_PCF",[ss]:"SHADOWMAP_TYPE_VSM"};function hg(i){return cg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ug={[os]:"ENVMAP_MODE_REFRACTION"};function dg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ug[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fg={[ua]:"ENVMAP_BLENDING_MULTIPLY",[$u]:"ENVMAP_BLENDING_MIX",[Ku]:"ENVMAP_BLENDING_ADD"};function pg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":fg[i.combine]||"ENVMAP_BLENDING_NONE"}function mg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,l=e.fragmentShader;const o=hg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=dg(e),f=pg(e),d=ng(e),u=ig(r),p=s.createProgram();let x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(As).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(As).join(`
`),m.length>0&&(m+=`
`)):(x=[mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),m=[mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?tg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Q0("linearToOutputTexel",e.outputColorSpace),eg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),a=Vo(a),a=dh(a,e),a=fh(a,e),l=Vo(l),l=dh(l,e),l=fh(l,e),a=ph(a),l=ph(l),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=g+x+a,M=g+m+l,S=ch(s,s.VERTEX_SHADER,_),y=ch(s,s.FRAGMENT_SHADER,M);s.attachShader(p,S),s.attachShader(p,y),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(A){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(p)||"",F=s.getShaderInfoLog(S)||"",B=s.getShaderInfoLog(y)||"",L=N.trim(),J=F.trim(),k=B.trim();let Z=!0,G=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,S,y);else{const O=uh(s,S,"vertex"),H=uh(s,y,"fragment");te("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+O+`
`+H)}else L!==""?Bt("WebGLProgram: Program Info Log:",L):(J===""||k==="")&&(G=!1);G&&(A.diagnostics={runnable:Z,programLog:L,vertexShader:{log:J,prefix:x},fragmentShader:{log:k,prefix:m}})}s.deleteShader(S),s.deleteShader(y),v=new Lr(s,p),b=sg(s,p)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(p,Z0)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$0++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=y,this}let gg=0;class _g{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new xg(t),e.set(t,n)),n}}class xg{constructor(t){this.id=gg++,this.code=t,this.usedTimes=0}}function vg(i){return i===Zn||i===Ks||i===Js}function Mg(i,t,e,n,s,r){const a=new lo,l=new _g,o=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(v){return o.add(v),v===0?"uv":`uv${v}`}function p(v,b,D,A,N,F){const B=A.fog,L=N.geometry,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?A.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Z=t.get(v.envMap||J,k),G=d[v.type];let O=n.precision;v.precision!==null&&(O=n.getMaxPrecision(v.precision),O!==v.precision&&Bt("WebGLProgram.getParameters:",v.precision,"not supported, using",O,"instead."));const H=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Q=H!==void 0?H.length:0;let q=0;L.morphAttributes.position!==void 0&&(q=1),L.morphAttributes.normal!==void 0&&(q=2),L.morphAttributes.color!==void 0&&(q=3);let xt,j,ot,ut;if(G){const Et=An[G];xt=Et.vertexShader,j=Et.fragmentShader}else{xt=v.vertexShader,j=v.fragmentShader;const Et=l.getVertexShaderStage(v),ce=l.getFragmentShaderStage(v);l.update(v,Et,ce),ot=Et.id,ut=ce.id}const vt=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),Pt=N.isInstancedMesh===!0,Jt=N.isBatchedMesh===!0,st=!!v.map,ft=!!v.matcap,Tt=!!Z,Ot=Tt&&Z.isPMREMTexture===!0,Gt=!!v.aoMap,oe=!!v.lightMap,He=!!v.bumpMap&&v.wireframe===!1,re=!!v.normalMap,Ie=!!v.displacementMap,he=!!v.emissiveMap,Se=!!v.metalnessMap,Ve=!!v.roughnessMap,ze=v.anisotropy>0,V=v.clearcoat>0,We=v.diffuseRoughness>0,pe=v.dispersion>0,le=v.retroreflectivity>0,_t=v.iridescence>0,ve=v.sheen>0,It=v.transmission>0,Ft=ze&&!!v.anisotropyMap,P=V&&!!v.clearcoatMap,w=V&&!!v.clearcoatNormalMap,K=V&&!!v.clearcoatRoughnessMap,dt=We&&!!v.diffuseRoughnessMap,lt=_t&&!!v.iridescenceMap,gt=_t&&!!v.iridescenceThicknessMap,C=ve&&!!v.sheenColorMap,I=ve&&!!v.sheenRoughnessMap,U=!!v.specularMap,W=!!v.specularColorMap,R=!!v.specularIntensityMap,$=It&&!!v.transmissionMap,X=It&&!!v.thicknessMap,rt=!!v.gradientMap,at=!!v.alphaMap,ht=v.alphaTest>0,wt=!!v.alphaHash,Ht=!!v.extensions;let pt=Dn;v.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(pt=i.toneMapping);const Nt=Ot?Z.isCompressedCubeTexture?Z.image[0].mipmaps:Z.mipmaps:null,Vt={shaderID:G,shaderType:v.type,shaderName:v.name,vertexShader:xt,fragmentShader:j,defines:v.defines,customVertexShaderID:ot,customFragmentShaderID:ut,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:O,batching:Jt,batchingColor:Jt&&N._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&N.instanceColor!==null,instancingMorph:Pt&&N.morphTexture!==null,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:st,matcap:ft,envMap:Tt,envMapMode:Tt&&Z.mapping,envMapPMREM:Ot,envMapMaxLod:Ot?Nt.length-1:null,envMapSize:Ot?Nt[0].width:null,aoMap:Gt,lightMap:oe,bumpMap:He,normalMap:re,displacementMap:Ie,emissiveMap:he,normalMapObjectSpace:re&&v.normalMapType===ju,normalMapTangentSpace:re&&v.normalMapType===Qs,packedNormalMap:re&&v.normalMapType===Qs&&vg(v.normalMap.format),metalnessMap:Se,roughnessMap:Ve,anisotropy:ze,anisotropyMap:Ft,clearcoat:V,clearcoatMap:P,clearcoatNormalMap:w,clearcoatRoughnessMap:K,diffuseRoughness:We,diffuseRoughnessMap:dt,dispersion:pe,retroreflection:le,iridescence:_t,iridescenceMap:lt,iridescenceThicknessMap:gt,sheen:ve,sheenColorMap:C,sheenRoughnessMap:I,specularMap:U,specularColorMap:W,specularIntensityMap:R,transmission:It,transmissionMap:$,thicknessMap:X,gradientMap:rt,opaque:v.transparent===!1&&v.blending===rs&&v.alphaToCoverage===!1,alphaMap:at,alphaTest:ht,alphaHash:wt,combine:v.combine,mapUv:st&&u(v.map.channel),aoMapUv:Gt&&u(v.aoMap.channel),lightMapUv:oe&&u(v.lightMap.channel),bumpMapUv:He&&u(v.bumpMap.channel),normalMapUv:re&&u(v.normalMap.channel),displacementMapUv:Ie&&u(v.displacementMap.channel),emissiveMapUv:he&&u(v.emissiveMap.channel),metalnessMapUv:Se&&u(v.metalnessMap.channel),roughnessMapUv:Ve&&u(v.roughnessMap.channel),anisotropyMapUv:Ft&&u(v.anisotropyMap.channel),clearcoatMapUv:P&&u(v.clearcoatMap.channel),clearcoatNormalMapUv:w&&u(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&u(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:dt&&u(v.diffuseRoughnessMap.channel),iridescenceMapUv:lt&&u(v.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&u(v.iridescenceThicknessMap.channel),sheenColorMapUv:C&&u(v.sheenColorMap.channel),sheenRoughnessMapUv:I&&u(v.sheenRoughnessMap.channel),specularMapUv:U&&u(v.specularMap.channel),specularColorMapUv:W&&u(v.specularColorMap.channel),specularIntensityMapUv:R&&u(v.specularIntensityMap.channel),transmissionMapUv:$&&u(v.transmissionMap.channel),thicknessMapUv:X&&u(v.thicknessMap.channel),alphaMapUv:at&&u(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(re||ze),vertexNormals:!!L.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(st||at),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||L.attributes.normal===void 0&&re===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:mt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:q,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:F.filter(Et=>Et.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,decodeVideoTexture:st&&v.map.isVideoTexture===!0&&Kt.getTransfer(v.map.colorSpace)===ae,decodeVideoTextureEmissive:he&&v.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(v.emissiveMap.colorSpace)===ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ye,flipSided:v.side===Ye,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ht&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&v.extensions.multiDraw===!0||Jt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Vt.vertexUv1s=o.has(1),Vt.vertexUv2s=o.has(2),Vt.vertexUv3s=o.has(3),o.clear(),Vt}function x(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)b.push(D),b.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(m(b,v),g(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function m(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function g(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function _(v){const b=d[v.type];let D;if(b){const A=An[b];D=xf.clone(A.uniforms)}else D=v.uniforms;return D}function M(v,b){let D=h.get(b);return D!==void 0?++D.usedTimes:(D=new mg(i,b,v,s),c.push(D),h.set(b,D)),D}function S(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function y(v){l.remove(v)}function E(){l.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:_,acquireProgram:M,releaseProgram:S,releaseShaderCache:y,programs:c,dispose:E}}function Sg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,o){i.get(a)[l]=o}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function yg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function gh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _h(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function l(d,u,p,x,m,g){let _=i[t];return _===void 0?(_={id:d.id,object:d,geometry:u,material:p,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},i[t]=_):(_.id=d.id,_.object=d,_.geometry=u,_.material=p,_.materialVariant=a(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=m,_.group=g),t++,_}function o(d,u,p,x,m,g,_){_.reversedDepth===!0&&(m=-m);const M=l(d,u,p,x,m,g);p.transmission>0?n.push(M):p.transparent===!0?s.push(M):e.push(M)}function c(d,u,p,x,m,g){const _=l(d,u,p,x,m,g);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):e.unshift(_)}function h(d,u){e.length>1&&e.sort(d||yg),n.length>1&&n.sort(u||gh),s.length>1&&s.sort(u||gh)}function f(){for(let d=t,u=i.length;d<u;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:f,sort:h}}function Eg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new _h,i.set(n,[a])):s>=r.length?(a=new _h,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function bg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Y,color:new Lt};break;case"SpotLight":e={position:new Y,direction:new Y,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[t.id]=e,e}}}function wg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Tg=0;function Ag(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Rg(i){const t=new bg,e=wg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);const s=new Y,r=new ie,a=new ie;function l(c){let h=0,f=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,_=0,M=0,S=0,y=0,E=0,v=0,b=0,D=0,A=0;c.sort(Ag);for(let F=0,B=c.length;F<B;F++){const L=c[F],J=L.color,k=L.intensity,Z=L.distance;let G=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Zn?G=L.shadow.map.texture:G=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=J.r*k,f+=J.g*k,d+=J.b*k;else if(L.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(L.sh.coefficients[O],k);A++}else if(L.isSunLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,Q=e.get(L);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[p]=Q,n.sunShadowMap[p]=G;const q=H.getViewportCount();for(let xt=0;xt<q;xt++)n.sunShadowMatrix[x+xt]=H.getMatrix(xt),n.sunShadowCascade[x+xt]=H._cascadeData[xt];x+=q,p++}n.sun[u]=O,u++}else if(L.isDirectionalLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,Q=e.get(L);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=G,n.directionalShadowMatrix[m]=L.shadow.matrix,y++}n.directional[m]=O,m++}else if(L.isSpotLight){const O=t.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(J).multiplyScalar(k),O.distance=Z,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,n.spot[_]=O;const H=L.shadow;if(L.map&&(n.spotLightMap[b]=L.map,b++,H.updateMatrices(L),L.castShadow&&D++),n.spotLightMatrix[_]=H.matrix,L.castShadow){const Q=e.get(L);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=G,v++}_++}else if(L.isRectAreaLight){const O=t.get(L);O.color.copy(J).multiplyScalar(k),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),n.rectArea[M]=O,M++}else if(L.isPointLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),O.distance=L.distance,O.decay=L.decay,L.castShadow){const H=L.shadow,Q=e.get(L);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,Q.shadowCameraNear=H.camera.near,Q.shadowCameraFar=H.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=O,g++}else if(L.isHemisphereLight){const O=t.get(L);O.skyColor.copy(L.color).multiplyScalar(k),O.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[S]=O,S++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const N=n.hash;(N.sunLength!==u||N.directionalLength!==m||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==M||N.hemiLength!==S||N.numSunShadows!==p||N.numDirectionalShadows!==y||N.numPointShadows!==E||N.numSpotShadows!==v||N.numSpotMaps!==b||N.numLightProbes!==A)&&(n.sun.length=u,n.directional.length=m,n.spot.length=_,n.rectArea.length=M,n.point.length=g,n.hemi.length=S,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+b-D,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=A,N.sunLength=u,N.directionalLength=m,N.pointLength=g,N.spotLength=_,N.rectAreaLength=M,N.hemiLength=S,N.numSunShadows=p,N.numDirectionalShadows=y,N.numPointShadows=E,N.numSpotShadows=v,N.numSpotMaps=b,N.numLightProbes=A,n.version=Tg++)}function o(c,h){let f=0,d=0,u=0,p=0,x=0,m=0;const g=h.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){const S=c[_];if(S.isSunLight){const y=n.sun[f];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),f++}else if(S.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(S.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),p++}else if(S.isRectAreaLight){const y=n.rectArea[x];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),u++}else if(S.isHemisphereLight){const y=n.hemi[m];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),m++}}}return{setup:l,setupView:o,state:n}}function xh(i){const t=new Rg(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function l(f){n.push(f)}function o(){t.setup(e),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){t.setupView(e,f)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:l}}function Cg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let l;return a===void 0?(l=new xh(i),t.set(s,[l])):r>=a.length?(l=new xh(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}const Pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dg=`uniform sampler2D shadow_pass;
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
}`,Lg=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],Ig=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],vh=new ie,Rs=new Y,Wo=new Y;function Ng(i,t,e){let n=new Ss;const s=new Ut,r=new Ut,a=new ge,l=new yf,o=new Ef,c={},h=e.maxTextureSize,f={[Xn]:Ye,[Ye]:Xn,[ye]:ye},d=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:Pg,fragmentShader:Dg}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const p=new Re;p.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Qt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=is;let g=this.type;this.render=function(E,v,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Pu&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=is);const D=i.getRenderTarget(),A=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending(bi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=g!==this.type;B&&v.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(J=>J.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,J=E.length;L<J;L++){const k=E[L],Z=k.shadow;if(Z===void 0){Bt("WebGLShadowMap:",k,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const G=Z.getFrameExtents();s.multiply(G),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,Z.mapSize.y=r.y));const O=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=O,Z.map===null||B===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===ss){if(k.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new En(s.x,s.y,{format:Zn,type:cn,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),Z.map.texture.name=k.name+".shadowMap",Z.map.depthTexture=new Hi(s.x,s.y,ln),Z.map.depthTexture.name=k.name+".shadowMapDepth",Z.map.depthTexture.format=qn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Fe,Z.map.depthTexture.magFilter=Fe}else k.isPointLight?(Z.map=new Go(s.x),Z.map.depthTexture=new vc(s.x,Sn)):(Z.map=new En(s.x,s.y),Z.map.depthTexture=new Hi(s.x,s.y,Sn)),Z.map.depthTexture.name=k.name+".shadowMap",Z.map.depthTexture.format=qn,this.type===is?(Z.map.depthTexture.compareFunction=O?Bl:zl,Z.map.depthTexture.minFilter=Ze,Z.map.depthTexture.magFilter=Ze):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Fe,Z.map.depthTexture.magFilter=Fe);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);const H=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();k.isPointLight!==!0&&Z.updateMatrices(k,b);const Q=Z.camera.layers.mask&4294967294?Z.camera.layers:b.layers;for(let q=0;q<H;q++){const xt=Z.getCamera(q);if(k.isPointLight){const j=Z.camera,ot=Z.matrix,ut=k.distance||j.far;ut!==j.far&&(j.far=ut,j.updateProjectionMatrix()),Rs.setFromMatrixPosition(k.matrixWorld),j.position.copy(Rs),Wo.copy(j.position),Wo.add(Lg[q]),j.up.copy(Ig[q]),j.lookAt(Wo),j.updateMatrixWorld(),ot.makeTranslation(-Rs.x,-Rs.y,-Rs.z),vh.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(vh,j.coordinateSystem,j.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,q),i.clear();else{q===0&&(i.setRenderTarget(Z.map),i.clear());const j=Z.getViewport(q);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),F.viewport(a)}n=Z.getFrustum(q),S(v,b,xt,k,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===ss&&_(Z,b),Z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(D,A,N)};function _(E,v){const b=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new En(s.x,s.y,{format:Zn,type:cn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(v,null,b,d,x,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(v,null,b,u,x,null)}function M(E,v,b,D){let A=null;const N=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)A=N;else if(A=b.isPointLight===!0?o:l,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const F=A.uuid,B=v.uuid;let L=c[F];L===void 0&&(L={},c[F]=L);let J=L[B];J===void 0&&(J=A.clone(),L[B]=J,v.addEventListener("dispose",y)),A=J}if(A.visible=v.visible,A.wireframe=v.wireframe,D===ss?A.side=v.shadowSide!==null?v.shadowSide:v.side:A.side=v.shadowSide!==null?v.shadowSide:f[v.side],A.alphaMap=v.alphaMap,A.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,A.map=v.map,A.clipShadows=v.clipShadows,A.clippingPlanes=v.clippingPlanes,A.clipIntersection=v.clipIntersection,A.displacementMap=v.displacementMap,A.displacementScale=v.displacementScale,A.displacementBias=v.displacementBias,A.wireframeLinewidth=v.wireframeLinewidth,A.linewidth=v.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const F=i.properties.get(A);F.light=b}return A}function S(E,v,b,D,A,N){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===ss)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const L=t.update(E),J=E.material;if(Array.isArray(J)){const k=L.groups;for(let Z=0,G=k.length;Z<G;Z++){const O=k[Z],H=J[O.materialIndex];if(H&&H.visible){const Q=M(E,H,D,N);E.onBeforeShadow(i,E,v,b,L,Q,O),i.renderBufferDirect(b,null,L,Q,E,O),E.onAfterShadow(i,E,v,b,L,Q,O)}}}else if(J.visible){const k=M(E,J,D,N);E.onBeforeShadow(i,E,v,b,L,k,null),i.renderBufferDirect(b,null,L,k,E,null),E.onAfterShadow(i,E,v,b,L,k,null)}}const B=E.children;for(let L=0,J=B.length;L<J;L++)S(B[L],v,b,D,A,N)}function y(E){E.target.removeEventListener("dispose",y);for(const b in c){const D=c[b],A=E.target.uuid;A in D&&(D[A].dispose(),delete D[A])}}}function Ug(i,t){function e(){let R=!1;const $=new ge;let X=null;const rt=new ge(0,0,0,0);return{setMask:function(at){X!==at&&!R&&(i.colorMask(at,at,at,at),X=at)},setLocked:function(at){R=at},setClear:function(at,ht,wt,Ht,pt){pt===!0&&(at*=Ht,ht*=Ht,wt*=Ht),$.set(at,ht,wt,Ht),rt.equals($)===!1&&(i.clearColor(at,ht,wt,Ht),rt.copy($))},reset:function(){R=!1,X=null,rt.set(-1,0,0,0)}}}function n(){let R=!1,$=!1,X=null,rt=null,at=null;return{setReversed:function(ht){if($!==ht){const wt=t.get("EXT_clip_control");ht?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),$=ht;const Ht=at;at=null,this.setClear(Ht)}},getReversed:function(){return $},setTest:function(ht){ht?mt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(ht){X!==ht&&!R&&(i.depthMask(ht),X=ht)},setFunc:function(ht){if($&&(ht=hd[ht]),rt!==ht){switch(ht){case sa:i.depthFunc(i.NEVER);break;case ra:i.depthFunc(i.ALWAYS);break;case aa:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case oa:i.depthFunc(i.EQUAL);break;case la:i.depthFunc(i.GEQUAL);break;case ca:i.depthFunc(i.GREATER);break;case ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=ht}},setLocked:function(ht){R=ht},setClear:function(ht){at!==ht&&(at=ht,$&&(ht=1-ht),i.clearDepth(ht))},reset:function(){R=!1,X=null,rt=null,at=null,$=!1}}}function s(){let R=!1,$=null,X=null,rt=null,at=null,ht=null,wt=null,Ht=null,pt=null;return{setTest:function(Nt){R||(Nt?mt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(Nt){$!==Nt&&!R&&(i.stencilMask(Nt),$=Nt)},setFunc:function(Nt,Vt,Et){(X!==Nt||rt!==Vt||at!==Et)&&(i.stencilFunc(Nt,Vt,Et),X=Nt,rt=Vt,at=Et)},setOp:function(Nt,Vt,Et){(ht!==Nt||wt!==Vt||Ht!==Et)&&(i.stencilOp(Nt,Vt,Et),ht=Nt,wt=Vt,Ht=Et)},setLocked:function(Nt){R=Nt},setClear:function(Nt){pt!==Nt&&(i.clearStencil(Nt),pt=Nt)},reset:function(){R=!1,$=null,X=null,rt=null,at=null,ht=null,wt=null,Ht=null,pt=null}}}const r=new e,a=new n,l=new s;let o={};const c=new WeakMap;let h={},f={},d={},u=new WeakMap,p=[],x=null,m=!1,g=null,_=null,M=null,S=null,y=null,E=null,v=null,b=new Lt(0,0,0),D=0,A=!1,N=null,F=null,B=null,L=null,J=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,G=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(O)[1]),Z=G>=1):O.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),Z=G>=2);let H=null,Q={};const q=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),j=new ge().fromArray(q),ot=new ge().fromArray(xt);function ut(R,$,X,rt){const at=new Uint8Array(4),ht=i.createTexture();i.bindTexture(R,ht),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<X;wt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D($+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return ht}const vt={};vt[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),mt(i.DEPTH_TEST),a.setFunc(as),He(!1),re(Ml),mt(i.CULL_FACE),Gt(bi);function mt(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Pt(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Jt(R,$){return d[R]!==$?(i.bindFramebuffer(R,$),d[R]=$,R===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=$),R===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=$),!0):!1}function st(R,$){let X=p,rt=!1;if(R){X=u.get($),X===void 0&&(X=[],u.set($,X));const at=R.textures;if(X.length!==at.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,wt=at.length;ht<wt;ht++)X[ht]=i.COLOR_ATTACHMENT0+ht;X.length=at.length,rt=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,rt=!0);rt&&i.drawBuffers(X)}function ft(R){return x!==R?(i.useProgram(R),x=R,!0):!1}const Tt={[wi]:i.FUNC_ADD,[Lu]:i.FUNC_SUBTRACT,[Iu]:i.FUNC_REVERSE_SUBTRACT};Tt[Nu]=i.MIN,Tt[Uu]=i.MAX;const Ot={[Fu]:i.ZERO,[Ou]:i.ONE,[zu]:i.SRC_COLOR,[El]:i.SRC_ALPHA,[Wu]:i.SRC_ALPHA_SATURATE,[Hu]:i.DST_COLOR,[ku]:i.DST_ALPHA,[Bu]:i.ONE_MINUS_SRC_COLOR,[bl]:i.ONE_MINUS_SRC_ALPHA,[Vu]:i.ONE_MINUS_DST_COLOR,[Gu]:i.ONE_MINUS_DST_ALPHA,[Xu]:i.CONSTANT_COLOR,[qu]:i.ONE_MINUS_CONSTANT_COLOR,[Yu]:i.CONSTANT_ALPHA,[Zu]:i.ONE_MINUS_CONSTANT_ALPHA};function Gt(R,$,X,rt,at,ht,wt,Ht,pt,Nt){if(R===bi){m===!0&&(Pt(i.BLEND),m=!1);return}if(m===!1&&(mt(i.BLEND),m=!0),R!==Du){if(R!==g||Nt!==A){if((_!==wi||y!==wi)&&(i.blendEquation(i.FUNC_ADD),_=wi,y=wi),Nt)switch(R){case rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ia:i.blendFunc(i.ONE,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:te("WebGLState: Invalid blending: ",R);break}else switch(R){case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ia:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sl:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yl:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",R);break}M=null,S=null,E=null,v=null,b.set(0,0,0),D=0,g=R,A=Nt}return}at=at||$,ht=ht||X,wt=wt||rt,($!==_||at!==y)&&(i.blendEquationSeparate(Tt[$],Tt[at]),_=$,y=at),(X!==M||rt!==S||ht!==E||wt!==v)&&(i.blendFuncSeparate(Ot[X],Ot[rt],Ot[ht],Ot[wt]),M=X,S=rt,E=ht,v=wt),(Ht.equals(b)===!1||pt!==D)&&(i.blendColor(Ht.r,Ht.g,Ht.b,pt),b.copy(Ht),D=pt),g=R,A=!1}function oe(R,$){R.side===ye?Pt(i.CULL_FACE):mt(i.CULL_FACE);let X=R.side===Ye;$&&(X=!X),He(X),R.blending===rs&&R.transparent===!1?Gt(bi):Gt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);const rt=R.stencilWrite;l.setTest(rt),rt&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),he(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(R){N!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),N=R)}function re(R){R!==Ru?(mt(i.CULL_FACE),R!==F&&(R===Ml?i.cullFace(i.BACK):R===Cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),F=R}function Ie(R){R!==B&&(Z&&i.lineWidth(R),B=R)}function he(R,$,X){R?(mt(i.POLYGON_OFFSET_FILL),(L!==$||J!==X)&&(L=$,J=X,a.getReversed()&&($=-$,X=-X),i.polygonOffset($,X))):Pt(i.POLYGON_OFFSET_FILL)}function Se(R){R?mt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function Ve(R){R===void 0&&(R=i.TEXTURE0+k-1),H!==R&&(i.activeTexture(R),H=R)}function ze(R,$,X){X===void 0&&(H===null?X=i.TEXTURE0+k-1:X=H);let rt=Q[X];rt===void 0&&(rt={type:void 0,texture:void 0},Q[X]=rt),(rt.type!==R||rt.texture!==$)&&(H!==X&&(i.activeTexture(X),H=X),i.bindTexture(R,$||vt[R]),rt.type=R,rt.texture=$)}function V(){const R=Q[H];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function We(){try{i.compressedTexImage2D(...arguments)}catch(R){te("WebGLState:",R)}}function pe(){try{i.compressedTexImage3D(...arguments)}catch(R){te("WebGLState:",R)}}function le(){try{i.texSubImage2D(...arguments)}catch(R){te("WebGLState:",R)}}function _t(){try{i.texSubImage3D(...arguments)}catch(R){te("WebGLState:",R)}}function ve(){try{i.compressedTexSubImage2D(...arguments)}catch(R){te("WebGLState:",R)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(R){te("WebGLState:",R)}}function Ft(){try{i.texStorage2D(...arguments)}catch(R){te("WebGLState:",R)}}function P(){try{i.texStorage3D(...arguments)}catch(R){te("WebGLState:",R)}}function w(){try{i.texImage2D(...arguments)}catch(R){te("WebGLState:",R)}}function K(){try{i.texImage3D(...arguments)}catch(R){te("WebGLState:",R)}}function dt(R){return f[R]!==void 0?f[R]:i.getParameter(R)}function lt(R,$){f[R]!==$&&(i.pixelStorei(R,$),f[R]=$)}function gt(R){j.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),j.copy(R))}function C(R){ot.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),ot.copy(R))}function I(R,$){let X=c.get($);X===void 0&&(X=new WeakMap,c.set($,X));let rt=X.get(R);rt===void 0&&(rt=i.getUniformBlockIndex($,R.name),i.uniformBlockBinding($,rt,rt),X.set(R,rt))}function U(R,$,X){const at=c.get($).get(R);o[at]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,at,X),o[at]=X)}function W(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},H=null,Q={},d={},o={},u=new WeakMap,p=[],x=null,m=!1,g=null,_=null,M=null,S=null,y=null,E=null,v=null,b=new Lt(0,0,0),D=0,A=!1,N=null,F=null,B=null,L=null,J=null,j.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:mt,disable:Pt,bindFramebuffer:Jt,drawBuffers:st,useProgram:ft,setBlending:Gt,setMaterial:oe,setFlipSided:He,setCullFace:re,setLineWidth:Ie,setPolygonOffset:he,setScissorTest:Se,activeTexture:Ve,bindTexture:ze,unbindTexture:V,compressedTexImage2D:We,compressedTexImage3D:pe,texImage2D:w,texImage3D:K,pixelStorei:lt,getParameter:dt,updateUBOMapping:I,uniformBlockBinding:U,texStorage2D:Ft,texStorage3D:P,texSubImage2D:le,texSubImage3D:_t,compressedTexSubImage2D:ve,compressedTexSubImage3D:It,scissor:gt,viewport:C,reset:W}}function Fg(i,t,e,n,s,r,a){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,h=new WeakMap,f=new Set;let d;const u=new WeakMap,p=new Set,x=new FinalizationRegistry(P=>p.delete(P));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return m?new OffscreenCanvas(P,w):hs("canvas")}function _(P,w,K){let dt=1;const lt=Ft(P);if((lt.width>K||lt.height>K)&&(dt=K/Math.max(lt.width,lt.height)),dt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const gt=Math.floor(dt*lt.width),C=Math.floor(dt*lt.height);d===void 0&&(d=g(gt,C));const I=w?g(gt,C):d;return I.width=gt,I.height=C,I.getContext("2d").drawImage(P,0,0,gt,C),Bt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+gt+"x"+C+")."),I}else return"data"in P&&Bt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),P;return P}function M(P){return P.generateMipmaps}function S(P){i.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(P,w,K,dt,lt,gt=!1){if(P!==null){if(i[P]!==void 0)return i[P];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let C;dt&&(C=t.get("EXT_texture_norm16"),C||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let I=w;if(w===i.RED&&(K===i.FLOAT&&(I=i.R32F),K===i.HALF_FLOAT&&(I=i.R16F),K===i.UNSIGNED_BYTE&&(I=i.R8),K===i.UNSIGNED_SHORT&&C&&(I=C.R16_EXT),K===i.SHORT&&C&&(I=C.R16_SNORM_EXT)),w===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(I=i.R8UI),K===i.UNSIGNED_SHORT&&(I=i.R16UI),K===i.UNSIGNED_INT&&(I=i.R32UI),K===i.BYTE&&(I=i.R8I),K===i.SHORT&&(I=i.R16I),K===i.INT&&(I=i.R32I)),w===i.RG&&(K===i.FLOAT&&(I=i.RG32F),K===i.HALF_FLOAT&&(I=i.RG16F),K===i.UNSIGNED_BYTE&&(I=i.RG8),K===i.UNSIGNED_SHORT&&C&&(I=C.RG16_EXT),K===i.SHORT&&C&&(I=C.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(I=i.RG8UI),K===i.UNSIGNED_SHORT&&(I=i.RG16UI),K===i.UNSIGNED_INT&&(I=i.RG32UI),K===i.BYTE&&(I=i.RG8I),K===i.SHORT&&(I=i.RG16I),K===i.INT&&(I=i.RG32I)),w===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(I=i.RGB8UI),K===i.UNSIGNED_SHORT&&(I=i.RGB16UI),K===i.UNSIGNED_INT&&(I=i.RGB32UI),K===i.BYTE&&(I=i.RGB8I),K===i.SHORT&&(I=i.RGB16I),K===i.INT&&(I=i.RGB32I)),w===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(I=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(I=i.RGBA16UI),K===i.UNSIGNED_INT&&(I=i.RGBA32UI),K===i.BYTE&&(I=i.RGBA8I),K===i.SHORT&&(I=i.RGBA16I),K===i.INT&&(I=i.RGBA32I)),w===i.RGB&&(K===i.UNSIGNED_SHORT&&C&&(I=C.RGB16_EXT),K===i.SHORT&&C&&(I=C.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(I=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(I=i.R11F_G11F_B10F)),w===i.RGBA){const U=gt?tr:Kt.getTransfer(lt);K===i.FLOAT&&(I=i.RGBA32F),K===i.HALF_FLOAT&&(I=i.RGBA16F),K===i.UNSIGNED_BYTE&&(I=U===ae?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&C&&(I=C.RGBA16_EXT),K===i.SHORT&&C&&(I=C.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(I=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(I=i.RGB5_A1)}return(I===i.R16F||I===i.R32F||I===i.RG16F||I===i.RG32F||I===i.RGBA16F||I===i.RGBA32F)&&t.get("EXT_color_buffer_float"),I}function v(P,w){let K;return P?w===null||w===Sn||w===Ai?K=i.DEPTH24_STENCIL8:w===ln?K=i.DEPTH32F_STENCIL8:w===ls&&(K=i.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Sn||w===Ai?K=i.DEPTH_COMPONENT24:w===ln?K=i.DEPTH_COMPONENT32F:w===ls&&(K=i.DEPTH_COMPONENT16),K}function b(P,w){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==Fe&&P.minFilter!==Ze?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function D(P){const w=new WeakRef(P);n.get(P).__ref=w,p.add(w),x.register(P,w,w)}function A(P){const w=n.get(P).__ref;w!==void 0&&(p.delete(w),x.unregister(w))}function N(P){B(P.target)}function F(P){L(P.target)}function B(P){P.removeEventListener("dispose",N),A(P),k(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&f.delete(P)}function L(P){P.removeEventListener("dispose",F),A(P),G(P)}function J(){for(const P of p){const w=P.deref();w!==void 0&&(w.isRenderTarget===!0?L(w):B(w))}p.clear(),f.clear()}function k(P){const w=n.get(P);if(w.__webglInit===void 0)return;const K=P.source,dt=u.get(K);if(dt){const lt=dt[w.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&Z(P),Object.keys(dt).length===0&&u.delete(K)}n.remove(P)}function Z(P){const w=n.get(P);i.deleteTexture(w.__webglTexture);const K=P.source,dt=u.get(K);delete dt[w.__cacheKey],a.memory.textures--}function G(P){const w=n.get(P);w.__depthDisposeCallback&&w.__depthDisposeCallback();const K=P.depthTexture;if(K&&K.renderTarget===P&&B(K),P.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(w.__webglFramebuffer[lt]))for(let gt=0;gt<w.__webglFramebuffer[lt].length;gt++)i.deleteFramebuffer(w.__webglFramebuffer[lt][gt]);else i.deleteFramebuffer(w.__webglFramebuffer[lt]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[lt])}else{if(Array.isArray(w.__webglFramebuffer))for(let lt=0;lt<w.__webglFramebuffer.length;lt++)i.deleteFramebuffer(w.__webglFramebuffer[lt]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let lt=0;lt<w.__webglColorRenderbuffer.length;lt++)w.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[lt]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const dt=P.textures;for(let lt=0,gt=dt.length;lt<gt;lt++){const C=n.get(dt[lt]);C.__webglTexture&&(i.deleteTexture(C.__webglTexture),a.memory.textures--),n.remove(dt[lt])}n.remove(P)}let O=0;function H(){O=0}function Q(){return O}function q(P){O=P}function xt(){const P=O;return P>=s.maxTextures&&Bt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,P}function j(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.mipmapsAutoUpdate),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function ot(P,w){const K=n.get(P);if(P.isVideoTexture&&ve(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&K.__version!==P.version){const dt=P.image;if(dt===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(K,P,w);return}}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+w)}function ut(P,w){const K=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){oe(K,P,w);return}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+w)}function vt(P,w){const K=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){oe(K,P,w);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+w)}function mt(P,w){const K=n.get(P);if(P.version>0&&K.__version!==P.version){He(K,P,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+w)}const Pt={[Ws]:i.REPEAT,[on]:i.CLAMP_TO_EDGE,[ma]:i.MIRRORED_REPEAT},Jt={[Fe]:i.NEAREST,[Ju]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[ga]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},st={[ed]:i.NEVER,[kl]:i.ALWAYS,[nd]:i.LESS,[zl]:i.LEQUAL,[id]:i.EQUAL,[Bl]:i.GEQUAL,[sd]:i.GREATER,[rd]:i.NOTEQUAL};function ft(P,w){if(w.type===ln&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ze||w.magFilter===ga||w.magFilter===Xs||w.magFilter===Ln||w.minFilter===Ze||w.minFilter===ga||w.minFilter===Xs||w.minFilter===Ln)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Pt[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Pt[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Pt[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Jt[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Jt[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,st[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Fe||w.minFilter!==Xs&&w.minFilter!==Ln||w.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Tt(P,w){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",N),D(w));const dt=w.source;let lt=u.get(dt);lt===void 0&&(lt={},u.set(dt,lt));const gt=j(w);if(gt!==P.__cacheKey){lt[gt]===void 0&&(lt[gt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),lt[gt].usedTimes++;const C=lt[P.__cacheKey];C!==void 0&&(lt[P.__cacheKey].usedTimes--,C.usedTimes===0&&Z(w)),P.__cacheKey=gt,P.__webglTexture=lt[gt].texture}return K}function Ot(P,w,K){return Math.floor(Math.floor(P/K)/w)}function Gt(P,w,K,dt){const gt=P.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,K,dt,w.data);else{gt.sort((R,$)=>R.start-$.start);let C=0;for(let R=1;R<gt.length;R++){const $=gt[C],X=gt[R],rt=$.start+$.count,at=Ot(X.start,w.width,4),ht=Ot($.start,w.width,4);X.start<=rt+1&&at===ht&&Ot(X.start+X.count-1,w.width,4)===at?$.count=Math.max($.count,X.start+X.count-$.start):(++C,gt[C]=X)}gt.length=C+1;const I=e.getParameter(i.UNPACK_ROW_LENGTH),U=e.getParameter(i.UNPACK_SKIP_PIXELS),W=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let R=0,$=gt.length;R<$;R++){const X=gt[R],rt=Math.floor(X.start/4),at=Math.ceil(X.count/4),ht=rt%w.width,wt=Math.floor(rt/w.width),Ht=at,pt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,wt),e.texSubImage2D(i.TEXTURE_2D,0,ht,wt,Ht,pt,K,dt,w.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,I),e.pixelStorei(i.UNPACK_SKIP_PIXELS,U),e.pixelStorei(i.UNPACK_SKIP_ROWS,W)}}function oe(P,w,K){let dt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(dt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(dt=i.TEXTURE_3D);const lt=Tt(P,w),gt=w.source;e.bindTexture(dt,P.__webglTexture,i.TEXTURE0+K);const C=n.get(gt);if(gt.version!==C.__version||lt===!0){if(e.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const pt=Kt.getPrimaries(Kt.workingColorSpace),Nt=w.colorSpace===$n?null:Kt.getPrimaries(w.colorSpace),Vt=w.colorSpace===$n||pt===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let U=_(w.image,!1,s.maxTextureSize);U=It(w,U);const W=r.convert(w.format,w.colorSpace),R=r.convert(w.type);let $=E(w.internalFormat,W,R,w.normalized,w.colorSpace,w.isVideoTexture);ft(dt,w);let X;const rt=w.mipmaps,at=w.isVideoTexture!==!0,ht=C.__version===void 0||lt===!0,wt=gt.dataReady,Ht=b(w,U);if(w.isDepthTexture)$=v(w.format===Yn,w.type),ht&&(at?e.texStorage2D(i.TEXTURE_2D,1,$,U.width,U.height):e.texImage2D(i.TEXTURE_2D,0,$,U.width,U.height,0,W,R,null));else if(w.isDataTexture)if(rt.length>0){at&&ht&&e.texStorage2D(i.TEXTURE_2D,Ht,$,rt[0].width,rt[0].height);for(let pt=0,Nt=rt.length;pt<Nt;pt++)X=rt[pt],at?wt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,X.width,X.height,W,R,X.data):e.texImage2D(i.TEXTURE_2D,pt,$,X.width,X.height,0,W,R,X.data);w.generateMipmaps=!1}else at?(ht&&e.texStorage2D(i.TEXTURE_2D,Ht,$,U.width,U.height),wt&&Gt(w,U,W,R)):e.texImage2D(i.TEXTURE_2D,0,$,U.width,U.height,0,W,R,U.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){at&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,$,rt[0].width,rt[0].height,U.depth);for(let pt=0,Nt=rt.length;pt<Nt;pt++)if(X=rt[pt],w.format!==yn)if(W!==null)if(at){if(wt)if(w.layerUpdates.size>0){const Vt=Hc(X.width,X.height,w.format,w.type);for(const Et of w.layerUpdates){const ce=X.data.subarray(Et*Vt/X.data.BYTES_PER_ELEMENT,(Et+1)*Vt/X.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,Et,X.width,X.height,1,W,ce)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,X.width,X.height,U.depth,W,X.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,$,X.width,X.height,U.depth,0,X.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?wt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,X.width,X.height,U.depth,W,R,X.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,$,X.width,X.height,U.depth,0,W,R,X.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{at&&ht&&e.texStorage2D(i.TEXTURE_2D,Ht,$,rt[0].width,rt[0].height);for(let pt=0,Nt=rt.length;pt<Nt;pt++)X=rt[pt],w.format!==yn?W!==null?at?wt&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,X.width,X.height,W,X.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,$,X.width,X.height,0,X.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?wt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,X.width,X.height,W,R,X.data):e.texImage2D(i.TEXTURE_2D,pt,$,X.width,X.height,0,W,R,X.data)}else if(w.isDataArrayTexture)if(at){if(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,$,U.width,U.height,U.depth),wt)if(w.layerUpdates.size>0){const pt=Hc(U.width,U.height,w.format,w.type);for(const Nt of w.layerUpdates){const Vt=U.data.subarray(Nt*pt/U.data.BYTES_PER_ELEMENT,(Nt+1)*pt/U.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Nt,U.width,U.height,1,W,R,Vt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,W,R,U.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$,U.width,U.height,U.depth,0,W,R,U.data);else if(w.isData3DTexture)at?(ht&&e.texStorage3D(i.TEXTURE_3D,Ht,$,U.width,U.height,U.depth),wt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,W,R,U.data)):e.texImage3D(i.TEXTURE_3D,0,$,U.width,U.height,U.depth,0,W,R,U.data);else if(w.isFramebufferTexture){if(ht)if(at)e.texStorage2D(i.TEXTURE_2D,Ht,$,U.width,U.height);else{let pt=U.width,Nt=U.height;for(let Vt=0;Vt<Ht;Vt++)e.texImage2D(i.TEXTURE_2D,Vt,$,pt,Nt,0,W,R,null),pt>>=1,Nt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){const pt=i.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),U.parentNode!==pt){pt.appendChild(U),f.add(w),pt.onpaint=Nt=>{const Vt=Nt.changedElements;for(const Et of f)Vt.includes(Et.image)&&(Et.needsUpdate=!0)},pt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,U);else{const Vt=i.RGBA,Et=i.RGBA,ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Vt,Et,ce,U)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(rt.length>0){if(at&&ht){const pt=Ft(rt[0]);e.texStorage2D(i.TEXTURE_2D,Ht,$,pt.width,pt.height)}for(let pt=0,Nt=rt.length;pt<Nt;pt++)X=rt[pt],at?wt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,W,R,X):e.texImage2D(i.TEXTURE_2D,pt,$,W,R,X);w.generateMipmaps=!1}else if(at){if(ht){const pt=Ft(U);e.texStorage2D(i.TEXTURE_2D,Ht,$,pt.width,pt.height)}wt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,W,R,U)}else e.texImage2D(i.TEXTURE_2D,0,$,W,R,U);M(w)&&w.mipmapsAutoUpdate===!0&&S(dt),C.__version=gt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function He(P,w,K){if(w.image.length!==6)return;const dt=Tt(P,w),lt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+K);const gt=n.get(lt);if(lt.version!==gt.__version||dt===!0){e.activeTexture(i.TEXTURE0+K);const C=Kt.getPrimaries(Kt.workingColorSpace),I=w.colorSpace===$n?null:Kt.getPrimaries(w.colorSpace),U=w.colorSpace===$n||C===I?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,U);const W=w.isCompressedTexture||w.image[0].isCompressedTexture,R=w.image[0]&&w.image[0].isDataTexture,$=[];for(let Et=0;Et<6;Et++)!W&&!R?$[Et]=_(w.image[Et],!0,s.maxCubemapSize):$[Et]=R?w.image[Et].image:w.image[Et],$[Et]=It(w,$[Et]);const X=$[0],rt=r.convert(w.format,w.colorSpace),at=r.convert(w.type);let ht=E(w.internalFormat,rt,at,w.normalized,w.colorSpace);const wt=w.isVideoTexture!==!0,Ht=gt.__version===void 0||dt===!0,pt=lt.dataReady;let Nt=b(w,X);ft(i.TEXTURE_CUBE_MAP,w);let Vt;if(w.isDepthTexture){if(ht=v(w.format===Yn,w.type),Ht)if(wt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ht,X.width,X.height);else for(let Et=0;Et<6;Et++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ht,X.width,X.height,0,rt,at,null)}else if(W){wt&&Ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,ht,X.width,X.height);for(let Et=0;Et<6;Et++){Vt=$[Et].mipmaps;for(let ce=0;ce<Vt.length;ce++){const Ne=Vt[ce];w.format!==yn?rt!==null?wt?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce,0,0,Ne.width,Ne.height,rt,Ne.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce,ht,Ne.width,Ne.height,0,Ne.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce,0,0,Ne.width,Ne.height,rt,at,Ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce,ht,Ne.width,Ne.height,0,rt,at,Ne.data)}}}else{if(Vt=w.mipmaps,wt&&Ht){Vt.length>0&&Nt++;const Et=Ft($[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,ht,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(R){wt?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,$[Et].width,$[Et].height,rt,at,$[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ht,$[Et].width,$[Et].height,0,rt,at,$[Et].data);for(let ce=0;ce<Vt.length;ce++){const ci=Vt[ce].image[Et].image;wt?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce+1,0,0,ci.width,ci.height,rt,at,ci.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce+1,ht,ci.width,ci.height,0,rt,at,ci.data)}}else{wt?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,rt,at,$[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ht,rt,at,$[Et]);for(let ce=0;ce<Vt.length;ce++){const Ne=Vt[ce];wt?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce+1,0,0,rt,at,Ne.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce+1,ht,rt,at,Ne.image[Et])}}}M(w)&&w.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),gt.__version=lt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function re(P,w,K,dt,lt,gt){const C=r.convert(K.format,K.colorSpace),I=r.convert(K.type),U=E(K.internalFormat,C,I,K.normalized,K.colorSpace),W=n.get(w),R=n.get(K);if(R.__renderTarget=w,!W.__hasExternalTextures){const $=Math.max(1,w.width>>gt),X=Math.max(1,w.height>>gt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,gt,U,$,X,w.depth,0,C,I,null):e.texImage2D(lt,gt,U,$,X,0,C,I,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),_t(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,lt,R.__webglTexture,0,le(w)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,dt,lt,R.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(P,w,K){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){const dt=w.depthTexture,lt=dt&&dt.isDepthTexture?dt.type:null,gt=v(w.stencilBuffer,lt),C=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(w),gt,w.width,w.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(w),gt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,gt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,C,i.RENDERBUFFER,P)}else{const dt=w.textures;for(let lt=0;lt<dt.length;lt++){const gt=dt[lt],C=r.convert(gt.format,gt.colorSpace),I=r.convert(gt.type),U=E(gt.internalFormat,C,I,gt.normalized,gt.colorSpace);_t(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(w),U,w.width,w.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(w),U,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,U,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(P,w,K){const dt=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const lt=n.get(w.depthTexture);lt.__renderTarget=w;const gt=dt?w.depthTexture.image[0]:w.depthTexture.image;(!lt.__webglTexture||gt.width!==w.width||gt.height!==w.height)&&(gt.width=w.width,gt.height=w.height,w.depthTexture.needsUpdate=!0),dt?mt(w.depthTexture,0):ot(w.depthTexture,0);const C=lt.__webglTexture,I=le(w),U=dt?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,W=w.depthTexture.format===Yn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===qn)_t(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,U,C,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,W,U,C,0);else if(w.depthTexture.format===Yn)_t(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,U,C,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,W,U,C,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Se(P){const w=n.get(P),K=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const dt=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),dt){const lt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,dt.removeEventListener("dispose",lt)};dt.addEventListener("dispose",lt),w.__depthDisposeCallback=lt}w.__boundDepthTexture=dt}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(K)for(let dt=0;dt<6;dt++)he(w.__webglFramebuffer[dt],P,dt);else P.texture.mipmaps.length>0?he(w.__webglFramebuffer[0],P,0):he(w.__webglFramebuffer,P,0);else if(K){w.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[dt]),w.__webglDepthbuffer[dt]===void 0)w.__webglDepthbuffer[dt]=i.createRenderbuffer(),Ie(w.__webglDepthbuffer[dt],P,!1);else{const lt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=w.__webglDepthbuffer[dt];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,gt)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Ie(w.__webglDepthbuffer,P,!1);else{const lt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,gt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(P,w,K){const dt=n.get(P);w!==void 0&&re(dt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Se(P)}function ze(P){const w=P.texture,K=n.get(P),dt=n.get(w);P.addEventListener("dispose",F),D(P);const lt=P.textures,gt=P.isWebGLCubeRenderTarget===!0,C=lt.length>1;if(C||(dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture()),dt.__version=w.version,a.memory.textures++),gt){K.__webglFramebuffer=[];for(let I=0;I<6;I++)if(w.mipmaps.length>0){K.__webglFramebuffer[I]=[];for(let U=0;U<w.mipmaps.length;U++)K.__webglFramebuffer[I][U]=i.createFramebuffer()}else K.__webglFramebuffer[I]=i.createFramebuffer()}else{if(w.mipmaps.length>0){K.__webglFramebuffer=[];for(let I=0;I<w.mipmaps.length;I++)K.__webglFramebuffer[I]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(C)for(let I=0,U=lt.length;I<U;I++){const W=n.get(lt[I]);W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&_t(P)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let I=0;I<lt.length;I++){const U=lt[I];K.__webglColorRenderbuffer[I]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[I]);const W=r.convert(U.format,U.colorSpace),R=r.convert(U.type),$=E(U.internalFormat,W,R,U.normalized,U.colorSpace,P.isXRRenderTarget===!0),X=le(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,$,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,K.__webglColorRenderbuffer[I])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(K.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),ft(i.TEXTURE_CUBE_MAP,w);for(let I=0;I<6;I++)if(w.mipmaps.length>0)for(let U=0;U<w.mipmaps.length;U++)re(K.__webglFramebuffer[I][U],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+I,U);else re(K.__webglFramebuffer[I],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);M(w)?S(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(C){for(let I=0,U=lt.length;I<U;I++){const W=lt[I],R=n.get(W);let $=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&($=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,R.__webglTexture),ft($,W),re(K.__webglFramebuffer,P,W,i.COLOR_ATTACHMENT0+I,$,0),M(W)&&S($)}e.unbindTexture()}else{let I=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(I=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(I,dt.__webglTexture),ft(I,w),w.mipmaps.length>0)for(let U=0;U<w.mipmaps.length;U++)re(K.__webglFramebuffer[U],P,w,i.COLOR_ATTACHMENT0,I,U);else re(K.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,I,0);M(w)?S(I):w.mipmaps.length>0&&i.texParameteri(I,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&Se(P)}function V(P){const w=P.textures;for(let K=0,dt=w.length;K<dt;K++){const lt=w[K];if(M(lt)&&lt.mipmapsAutoUpdate===!0){const gt=y(P),C=n.get(lt).__webglTexture;e.bindTexture(gt,C),S(gt),e.unbindTexture()}}}const We=[];function pe(P){if(P.samples>0){if(_t(P)===!1){const w=P.textures,K=P.width,dt=P.height;let lt=i.COLOR_BUFFER_BIT;const gt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=n.get(P),I=w.length>1;if(I)for(let W=0;W<w.length;W++)e.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,C.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,C.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,C.__webglFramebuffer);for(let W=0;W<w.length;W++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),I){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,C.__webglColorRenderbuffer[W]);const R=n.get(w[W]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,K,dt,0,0,K,dt,lt,i.NEAREST),o===!0&&(We.length=0,We.push(i.COLOR_ATTACHMENT0+W),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&We.push(gt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,We))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),I)for(let W=0;W<w.length;W++){e.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,C.__webglColorRenderbuffer[W]);const R=n.get(w[W]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.TEXTURE_2D,R,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,C.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&o){const w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function le(P){return Math.min(s.maxSamples,P.samples)}function _t(P){const w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ve(P){const w=a.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function It(P,w){const K=P.colorSpace,dt=P.format,lt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==js&&K!==$n&&(Kt.getTransfer(K)===ae?(dt!==yn||lt!==tn)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",K)),w}function Ft(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=xt,this.resetTextureUnits=H,this.getTextureUnits=Q,this.setTextureUnits=q,this.setTexture2D=ot,this.setTexture2DArray=ut,this.setTexture3D=vt,this.setTextureCube=mt,this.rebindTextures=Ve,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=re,this.useMultisampledRTT=_t,this.dispose=J}function Og(i,t){function e(n,s=$n){let r;const a=Kt.getTransfer(s);if(n===tn)return i.UNSIGNED_BYTE;if(n===xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ul)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ll)return i.BYTE;if(n===Il)return i.SHORT;if(n===ls)return i.UNSIGNED_SHORT;if(n===_a)return i.INT;if(n===Sn)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===cn)return i.HALF_FLOAT;if(n===Fl)return i.ALPHA;if(n===Ol)return i.RGB;if(n===yn)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===Yn)return i.DEPTH_STENCIL;if(n===Ma)return i.RED;if(n===Sa)return i.RED_INTEGER;if(n===Zn)return i.RG;if(n===ya)return i.RG_INTEGER;if(n===Ea)return i.RGBA_INTEGER;if(n===qs||n===Ys||n===Zs||n===$s)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ba||n===wa||n===Ta||n===Aa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Ca||n===Pa||n===Da||n===La||n===Ks||n===Ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ra||n===Ca)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Da)return r.COMPRESSED_R11_EAC;if(n===La)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ks)return r.COMPRESSED_RG11_EAC;if(n===Ia)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Na||n===Ua||n===Fa||n===Oa||n===za||n===Ba||n===ka||n===Ga||n===Ha||n===Va||n===Wa||n===Xa||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Na)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ua)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ba)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ka)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ya)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Za||n===$a||n===Ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Za)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ja||n===Qa||n===Js||n===ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ja)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Js)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ai?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bg=`
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

}`;class kg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Mc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new kn({vertexShader:zg,fragmentShader:Bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gg extends Kn{constructor(t,e){super();const n=this;let s=null,r=1,a=null,l="local-floor",o=1,c=null,h=null,f=null,d=null,u=null,p=null;const x=typeof XRWebGLBinding<"u",m=new kg,g={},_=e.getContextAttributes();let M=null,S=null;const y=[],E=[],v=new Ut;let b=null,D=null;const A=new gn;A.viewport=new ge;const N=new gn;N.viewport=new ge;const F=[A,N],B=new Df;let L=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ot=y[j];return ot===void 0&&(ot=new ho,y[j]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(j){let ot=y[j];return ot===void 0&&(ot=new ho,y[j]=ot),ot.getGripSpace()},this.getHand=function(j){let ot=y[j];return ot===void 0&&(ot=new ho,y[j]=ot),ot.getHandSpace()};function k(j){const ot=E.indexOf(j.inputSource);if(ot===-1)return;const ut=y[ot];ut!==void 0&&(ut.update(j.inputSource,j.frame,c||a),ut.dispatchEvent({type:j.type,data:j.inputSource}))}function Z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",G);for(let j=0;j<y.length;j++){const ot=E[j];ot!==null&&(E[j]=null,y[j].disconnect(ot))}L=null,J=null,m.reset();for(const j in g)delete g[j];if(t.setRenderTarget(M),u=null,d=null,f=null,s=null,S=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(v.width,v.height,!1),D!==null){const j=D.camera;j.fov=D.fov,j.zoom=D.zoom,j.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){l=j,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",G),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,vt=null,mt=null;_.depth&&(mt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=_.stencil?Yn:qn,vt=_.stencil?Ai:Sn);const Pt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new En(d.textureWidth,d.textureHeight,{format:yn,type:tn,depthTexture:new Hi(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ut={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new En(u.framebufferWidth,u.framebufferHeight,{format:yn,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(o),c=null,a=await s.requestReferenceSpace(l),xt.setContext(s),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(j){for(let ot=0;ot<j.removed.length;ot++){const ut=j.removed[ot],vt=E.indexOf(ut);vt>=0&&(E[vt]=null,y[vt].disconnect(ut))}for(let ot=0;ot<j.added.length;ot++){const ut=j.added[ot];let vt=E.indexOf(ut);if(vt===-1){for(let Pt=0;Pt<y.length;Pt++)if(Pt>=E.length){E.push(ut),vt=Pt;break}else if(E[Pt]===null){E[Pt]=ut,vt=Pt;break}if(vt===-1)break}const mt=y[vt];mt&&mt.connect(ut)}}function O(j,ot){ot===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ot.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ot=j.near,ut=j.far;m.texture!==null&&(m.depthNear>0&&(ot=m.depthNear),m.depthFar>0&&(ut=m.depthFar)),B.near=N.near=A.near=ot,B.far=N.far=A.far=ut,(L!==B.near||J!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,J=B.far),B.layers.mask=j.layers.mask|6,A.layers.mask=B.layers.mask&-5,N.layers.mask=B.layers.mask&-3;const vt=j.parent,mt=B.cameras;O(B,vt);for(let Pt=0;Pt<mt.length;Pt++)O(mt[Pt],vt);B.projectionMatrix.copy(A.projectionMatrix),B.projectionMatrixInverse.copy(A.projectionMatrixInverse),D===null&&j.isPerspectiveCamera&&(D={camera:j,fov:j.fov,zoom:j.zoom}),H(j,B,vt)};function H(j,ot,ut){ut===null?j.matrix.copy(ot.matrixWorld):(j.matrix.copy(ut.matrixWorld),j.matrix.invert(),j.matrix.multiply(ot.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ds*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&u===null))return o},this.setFoveation=function(j){o=j,d!==null&&(d.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(j){return g[j]};let Q=null;function q(j,ot){if(h=ot.getViewerPose(c||a),p=ot,h!==null){const ut=h.views;u!==null&&(t.setRenderTargetFramebuffer(S,u.framebuffer),t.setRenderTarget(S));let vt=!1;ut.length!==B.cameras.length&&(B.cameras.length=0,vt=!0);for(let st=0;st<ut.length;st++){const ft=ut[st];let Tt=null;if(u!==null)Tt=u.getViewport(ft);else{const Gt=f.getViewSubImage(d,ft);Tt=Gt.viewport,st===0&&(t.setRenderTargetTextures(S,Gt.colorTexture,Gt.depthStencilTexture),t.setRenderTarget(S))}let Ot=F[st];Ot===void 0&&(Ot=new gn,Ot.layers.enable(st),Ot.viewport=new ge,F[st]=Ot),Ot.matrix.fromArray(ft.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(ft.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),st===0&&(B.matrix.copy(Ot.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),vt===!0&&B.cameras.push(Ot)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const st=f.getDepthInformation(ut[0]);st&&st.isValid&&st.texture&&m.init(st,s.renderState)}if(mt&&mt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let st=0;st<ut.length;st++){const ft=ut[st].camera;if(ft){let Tt=g[ft];Tt||(Tt=new Mc,g[ft]=Tt);const Ot=f.getCameraImage(ft);Tt.sourceTexture=Ot}}}}for(let ut=0;ut<y.length;ut++){const vt=E[ut],mt=y[ut];vt!==null&&mt!==void 0&&mt.update(vt,ot,c||a)}Q&&Q(j,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),p=null}const xt=new Vc;xt.setAnimationLoop(q),this.setAnimationLoop=function(j){Q=j},this.dispose=function(){}}}const Hg=new ie,Mh=new kt;Mh.set(-1,0,0,0,1,0,0,0,1);function Vg(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Cc(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,M,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&u(m,g,S)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&l(m,g)):g.isPointsMaterial?o(m,g,_,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ye&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ye&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const _=t.get(g),M=_.envMap,S=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Mh),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function l(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function o(m,g,_,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=M*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ye&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const _=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Wg(i,t,e,n){let s={},r={};function a(_,M){const S=M.program;n.uniformBlockBinding(_,S,s[_.id])}function l(_,M){let S=s[_.id];S===void 0&&(p(_),S=o(_),s[_.id]=S,_.addEventListener("dispose",m));const y=M.program;n.updateUBOMapping(_,y);const E=t.render.frame;r[_.id]!==E&&(c(_),r[_.id]=E)}function o(_){const M=i.createBuffer(),S=_.__size,y=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,S,y),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(_){const M=s[_.id],S=_.uniforms,y=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,v=S.length;E<v;E++){const b=S[E];if(Array.isArray(b))for(let D=0,A=b.length;D<A;D++)h(b[D],E,D,y);else h(b,E,0,y)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,M,S,y){if(d(_,M,S,y)===!0){const E=_.__offset,v=_.value;if(Array.isArray(v)){let b=0;for(let D=0;D<v.length;D++){const A=v[D],N=x(A,!0);f(A,_.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(v,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,_.__data)}}function f(_,M,S){typeof _=="number"||typeof _=="boolean"?M[S]=_:_.isMatrix3?(M[S]=_.elements[0],M[S+1]=_.elements[1],M[S+2]=_.elements[2],M[S+3]=0,M[S+4]=_.elements[3],M[S+5]=_.elements[4],M[S+6]=_.elements[5],M[S+7]=0,M[S+8]=_.elements[6],M[S+9]=_.elements[7],M[S+10]=_.elements[8],M[S+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-S),S):_.toArray(M,S)}function d(_,M,S,y){const E=_.value,v=M+"_"+S;if(Array.isArray(E)){y[v]===void 0&&(y[v]=[]);const b=y[v];let D=!1;for(let A=0;A<E.length;A++)u(E[A],b,A)===!0&&(D=!0);return D}return u(E,y,v)}function u(_,M,S){if(M[S]===void 0)return typeof _=="number"||typeof _=="boolean"?M[S]=_:ArrayBuffer.isView(_)?M[S]=_.slice():M[S]=_.clone(),!0;{const y=M[S];if(typeof _=="number"||typeof _=="boolean"){if(y!==_)return M[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(y.equals(_)===!1)return y.copy(_),!0}}return!1}function p(_){const M=_.uniforms;let S=0;const y=16;for(let v=0,b=M.length;v<b;v++){const D=Array.isArray(M[v])?M[v]:[M[v]];for(let A=0,N=D.length;A<N;A++){const F=D[A],B=Array.isArray(F.value)?F.value:[F.value],L=Array.isArray(M[v])||Array.isArray(F.value);let J=S;for(let Z=0,G=B.length;Z<G;Z++){const O=B[Z],H=x(O,L),Q=S%y,q=Q%H.boundary,xt=Q+q;S+=q,xt!==0&&y-xt<H.storage&&(S+=y-xt),Z===0&&(J=S),S+=H.storage}const k=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new k((S-J)/Float32Array.BYTES_PER_ELEMENT),F.__offset=J}}const E=S%y;return E>0&&(S+=y-E),_.__size=S,_.__cache={},this}function x(_,M){const S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=16,S.storage=48):_.isMatrix4?(S.boundary=16,S.storage=64):_.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(_){const M=_.target;M.removeEventListener("dispose",m),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(const _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:l,dispose:g}}const Xg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Rn=null;function qg(){return Rn===null&&(Rn=new vr(Xg,16,16,Zn,cn),Rn.name="DFG_LUT",Rn.minFilter=Ze,Rn.magFilter=Ze,Rn.wrapS=on,Rn.wrapT=on,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}class Yg{constructor(t={}){const{canvas:e=ld(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=tn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const x=u,m=new Set([Ea,ya,Sa]),g=new Set([tn,Sn,ls,Ai,xa,va]),_=new Uint32Array(4),M=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let y=null,E=null;const v=[],b=[];let D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1,F=null,B=null,L=null,J=null;this._outputColorSpace=Ee;let k=0,Z=0,G=null,O=-1,H=null;const Q=new ge,q=new ge;let xt=null;const j=new Lt(0);let ot=0,ut=e.width,vt=e.height,mt=1,Pt=null,Jt=null;const st=new ge(0,0,ut,vt),ft=new ge(0,0,ut,vt);let Tt=!1;const Ot=new Ss,Gt=new Ao;let oe=!1,He=!1;const re=new ie,Ie=new Y,he=new ge,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function ze(){return G===null?mt:1}let V=n;function We(T,z){return e.getContext(T,z)}let pe,le,_t,ve,It,Ft,P,w,K,dt,lt,gt,C,I,U,W,R,$,X,rt,at,ht,wt;try{const T={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${na}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),V===null){const z="webgl2";if(V=We(z,T),V===null)throw We(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(T){throw e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),te("WebGLRenderer: "+T.message),T}function Ht(){pe=new Km(V),pe.init(),at=new Og(V,pe),le=new Bm(V,pe,t,at),_t=new Ug(V,pe),le.reversedDepthBuffer&&d&&_t.buffers.depth.setReversed(!0),B=V.createFramebuffer(),L=V.createFramebuffer(),J=V.createFramebuffer(),ve=new jm(V),It=new Sg,Ft=new Fg(V,pe,_t,It,le,at,ve),P=new $m(A),w=new Uf(V),ht=new Om(V,w),K=new Jm(V,w,ve,ht),dt=new e0(V,K,w,ht,ve),$=new t0(V,le,Ft),U=new km(It),lt=new Mg(A,P,pe,le,ht,U),gt=new Vg(A,It),C=new Eg,I=new Cg(pe),R=new Fm(A,P,_t,dt,p,o),W=new Ng(A,dt,le),wt=new Wg(V,ve,le,_t),X=new zm(V,pe,ve),rt=new Qm(V,pe,ve),ve.programs=lt.programs,A.capabilities=le,A.extensions=pe,A.properties=It,A.renderLists=C,A.shadowMap=W,A.state=_t,A.info=ve}x!==tn&&(D=new i0(x,e.width,e.height,l,s,r));const pt=new Gg(A,V);this.xr=pt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(T){T!==void 0&&(mt=T,this.setSize(ut,vt,!1))},this.getSize=function(T){return T.set(ut,vt)},this.setSize=function(T,z,nt=!0){if(pt.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=T,vt=z,e.width=Math.floor(T*mt),e.height=Math.floor(z*mt),nt===!0&&(e.style.width=T+"px",e.style.height=z+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(ut*mt,vt*mt).floor()},this.setDrawingBufferSize=function(T,z,nt){ut=T,vt=z,mt=nt,e.width=Math.floor(T*nt),e.height=Math.floor(z*nt),this.setViewport(0,0,T,z)},this.setEffects=function(T){if(x===tn){te("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let z=0;z<T.length;z++)if(T[z].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Q)},this.getViewport=function(T){return T.copy(st)},this.setViewport=function(T,z,nt,tt){T.isVector4?st.set(T.x,T.y,T.z,T.w):st.set(T,z,nt,tt),_t.viewport(Q.copy(st).multiplyScalar(ze()).round())},this.getScissor=function(T){return T.copy(ft)},this.setScissor=function(T,z,nt,tt){T.isVector4?ft.set(T.x,T.y,T.z,T.w):ft.set(T,z,nt,tt),_t.scissor(q.copy(ft).multiplyScalar(ze()).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(T){_t.setScissorTest(Tt=T)},this.setOpaqueSort=function(T){Pt=T},this.setTransparentSort=function(T){Jt=T},this.getClearColor=function(T){return T.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,nt=!0){let tt=0;if(T){let et=!1;if(G!==null){const St=G.texture.format;et=m.has(St)}if(et){const St=G.texture.type,At=g.has(St),Mt=R.getClearColor(),bt=R.getClearAlpha(),Dt=Mt.r,Wt=Mt.g,Zt=Mt.b;At?(_[0]=Dt,_[1]=Wt,_[2]=Zt,_[3]=bt,V.clearBufferuiv(V.COLOR,0,_)):(M[0]=Dt,M[1]=Wt,M[2]=Zt,M[3]=bt,V.clearBufferiv(V.COLOR,0,M))}else tt|=V.COLOR_BUFFER_BIT}z&&(tt|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),nt&&(tt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&V.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),F=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),R.dispose(),C.dispose(),I.dispose(),Ft.dispose(),It.dispose(),P.dispose(),dt.dispose(),K.dispose(),ht.dispose(),wt.dispose(),lt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",_u),pt.removeEventListener("sessionend",xu),Mi.stop()};function Nt(T){T.preventDefault(),Vl("WebGLRenderer: Context Lost."),N=!0}function Vt(){Vl("WebGLRenderer: Context Restored."),N=!1;const T=ve.autoReset,z=W.enabled,nt=W.autoUpdate,tt=W.needsUpdate,et=W.type;Ht(),ve.autoReset=T,W.enabled=z,W.autoUpdate=nt,W.needsUpdate=tt,W.type=et}function Et(T){te("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ce(T){const z=T.target;z.removeEventListener("dispose",ce),Ne(z)}function Ne(T){ci(T),It.remove(T)}function ci(T){const z=It.get(T).programs;z!==void 0&&(z.forEach(function(nt){lt.releaseProgram(nt)}),T.isShaderMaterial&&lt.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,nt,tt,et,St){z===null&&(z=Se);const At=et.isMesh&&et.matrixWorld.determinantAffine()<0,Mt=Jx(T,z,nt,tt,et);_t.setMaterial(tt,At);let bt=nt.index,Dt=1;if(tt.wireframe===!0){if(bt=K.getWireframeAttribute(nt),bt===void 0)return;Dt=2}const Wt=nt.drawRange,Zt=nt.attributes.position;let Rt=Wt.start*Dt,$t=(Wt.start+Wt.count)*Dt;St!==null&&(Rt=Math.max(Rt,St.start*Dt),$t=Math.min($t,(St.start+St.count)*Dt)),bt!==null?(Rt=Math.max(Rt,0),$t=Math.min($t,bt.count)):Zt!=null&&(Rt=Math.max(Rt,0),$t=Math.min($t,Zt.count));const we=$t-Rt;if(we<0||we===1/0)return;ht.setup(et,tt,Mt,nt,bt);let me,ue=X;if(bt!==null&&(me=w.get(bt),ue=rt,ue.setIndex(me)),et.isMesh)tt.wireframe===!0?(_t.setLineWidth(tt.wireframeLinewidth*ze()),ue.setMode(V.LINES)):ue.setMode(V.TRIANGLES);else if(et.isLine){let Xe=tt.linewidth;Xe===void 0&&(Xe=1),_t.setLineWidth(Xe*ze()),et.isLineSegments?ue.setMode(V.LINES):et.isLineLoop?ue.setMode(V.LINE_LOOP):ue.setMode(V.LINE_STRIP)}else et.isPoints?ue.setMode(V.POINTS):et.isSprite&&ue.setMode(V.TRIANGLES);if(et.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))ue.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const Xe=et._multiDrawStarts,Ct=et._multiDrawCounts,Je=et._multiDrawCount,ne=bt?w.get(bt).bytesPerElement:1,Si=It.get(tt).currentProgram.getUniforms();for(let qe=0;qe<Je;qe++)Si.setValue(V,"_gl_DrawID",qe),ue.render(Xe[qe]/ne,Ct[qe])}else if(et.isInstancedMesh)ue.renderInstances(Rt,we,et.count);else if(nt.isInstancedBufferGeometry){const Xe=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Ct=Math.min(nt.instanceCount,Xe);ue.renderInstances(Rt,we,Ct)}else ue.render(Rt,we)};function gu(T,z,nt,tt){F!==null&&T.isNodeMaterial&&F.setObject(tt,T),oe===!0&&U.setState(T,nt,!1),T.transparent===!0&&T.side===ye&&T.forceSinglePass===!1?(T.side=Ye,T.needsUpdate=!0,Vs(T,z,tt),T.side=Xn,T.needsUpdate=!0,Vs(T,z,tt),T.side=ye):Vs(T,z,tt)}this.compile=function(T,z,nt=null){nt===null&&(nt=T),F!==null&&F.renderStart(T,z,nt),E=I.get(nt),E.init(z),b.push(E),nt.traverseVisible(function(et){et.isLight&&et.layers.test(z.layers)&&(E.pushLight(et),et.castShadow&&E.pushShadow(et))}),T!==nt&&T.traverseVisible(function(et){et.isLight&&et.layers.test(z.layers)&&(E.pushLight(et),et.castShadow&&E.pushShadow(et))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),He=this.localClippingEnabled,oe=U.init(this.clippingPlanes,He),oe===!0&&U.setGlobalState(this.clippingPlanes,z),F!==null&&W.render(E.state.shadowsArray,nt,z);const tt=new Set;return T.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const St=et.material;if(St)if(Array.isArray(St))for(let At=0;At<St.length;At++){const Mt=St[At];gu(Mt,nt,z,et),tt.add(Mt)}else gu(St,nt,z,et),tt.add(St)}),E=b.pop(),F!==null&&F.renderEnd(),tt},this.compileAsync=function(T,z,nt=null){const tt=this.compile(T,z,nt);return new Promise(et=>{function St(){if(tt.forEach(function(At){const bt=It.get(At).currentProgram;(bt===void 0||bt.isReady())&&tt.delete(At)}),tt.size===0){et(T);return}setTimeout(St,10)}pe.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let xl=null;function $x(T){xl&&xl(T)}function _u(){Mi.stop()}function xu(){Mi.start()}const Mi=new Vc;Mi.setAnimationLoop($x),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(T){xl=T,pt.setAnimationLoop(T),T===null?Mi.stop():Mi.start()},pt.addEventListener("sessionstart",_u),pt.addEventListener("sessionend",xu),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(T,z);const nt=pt.enabled===!0&&pt.isPresenting===!0,tt=D!==null&&(G===null||nt)&&D.begin(A,G);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(z),z=pt.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,z,G),E=I.get(T,b.length),E.init(z),E.state.textureUnits=Ft.getTextureUnits(),b.push(E),re.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?Gt.setFromArrayCamera(z):Ot.setFromProjectionMatrix(re,hn,z.reversedDepth),He=this.localClippingEnabled,oe=U.init(this.clippingPlanes,He),y=C.get(T,v.length),y.init(),v.push(y),this.info.render.frame++,pt.enabled===!0&&pt.isPresenting===!0){const At=A.xr.getDepthSensingMesh();At!==null&&vl(At,z,-1/0,A.sortObjects)}vl(T,z,0,A.sortObjects),y.finish(),F!==null&&F.updateLights(E.state.lightsArray),A.sortObjects===!0&&y.sort(Pt,Jt),Ve=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,Ve&&R.addToRenderList(y,T),this.info.autoReset===!0&&this.info.reset(),oe===!0&&U.beginShadows();const et=E.state.shadowsArray;if(W.render(et,T,z),oe===!0&&U.endShadows(),(tt&&D.hasRenderPass())===!1){const At=y.opaque,Mt=y.transmissive;if(E.setupLights(),z.isArrayCamera){const bt=z.cameras;if(Mt.length>0)for(let Dt=0,Wt=bt.length;Dt<Wt;Dt++){const Zt=bt[Dt];Mu(At,Mt,T,Zt)}Ve&&R.render(T);for(let Dt=0,Wt=bt.length;Dt<Wt;Dt++){const Zt=bt[Dt];vu(y,T,Zt,Zt.viewport)}}else Mt.length>0&&Mu(At,Mt,T,z),Ve&&R.render(T),vu(y,T,z)}G!==null&&Z===0&&(Ft.updateMultisampleRenderTarget(G),Ft.updateRenderTargetMipmap(G)),tt&&D.end(A),T.isScene===!0&&T.onAfterRender(A,T,z),ht.resetDefaultState(),O=-1,H=null,b.pop(),b.length>0?(E=b[b.length-1],Ft.setTextureUnits(E.state.textureUnits),oe===!0&&U.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,v.pop(),v.length>0?y=v[v.length-1]:y=null,F!==null&&F.renderEnd()};function vl(T,z,nt,tt){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)nt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){const At=z.isArrayCamera?Gt:Ot;if(!T.frustumCulled||T.intersectsFrustum(At)){tt&&he.setFromMatrixPosition(T.matrixWorld).applyMatrix4(re);const Mt=dt.update(T),bt=T.material;bt.visible&&y.push(T,Mt,bt,nt,he.z,null,z)}}else if(T.isMesh||T.isLine||T.isPoints){const At=z.isArrayCamera?Gt:Ot;if(!T.frustumCulled||T.intersectsFrustum(At)){const Mt=dt.update(T),bt=T.material;if(tt&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),he.copy(T.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),he.copy(Mt.boundingSphere.center)),he.applyMatrix4(T.matrixWorld).applyMatrix4(re)),Array.isArray(bt)){const Dt=Mt.groups;for(let Wt=0,Zt=Dt.length;Wt<Zt;Wt++){const Rt=Dt[Wt],$t=bt[Rt.materialIndex];$t&&$t.visible&&y.push(T,Mt,$t,nt,he.z,Rt,z)}}else bt.visible&&y.push(T,Mt,bt,nt,he.z,null,z)}}}const St=T.children;for(let At=0,Mt=St.length;At<Mt;At++)vl(St[At],z,nt,tt)}function vu(T,z,nt,tt){const{opaque:et,transmissive:St,transparent:At}=T;E.setupLightsView(nt),oe===!0&&U.setGlobalState(A.clippingPlanes,nt),tt&&_t.viewport(Q.copy(tt)),et.length>0&&ta(et,z,nt),St.length>0&&ta(St,z,nt),At.length>0&&ta(At,z,nt),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Mu(T,z,nt,tt){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[tt.id]===void 0){const Rt=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[tt.id]=new En(1,1,{generateMipmaps:!0,type:Rt?cn:tn,minFilter:Ln,samples:Math.max(4,le.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}const St=E.state.transmissionRenderTarget[tt.id],At=tt.viewport||Q;St.setSize(At.z*A.transmissionResolutionScale,At.w*A.transmissionResolutionScale);const Mt=A.getRenderTarget(),bt=A.getActiveCubeFace(),Dt=A.getActiveMipmapLevel();A.setRenderTarget(St),A.getClearColor(j),ot=A.getClearAlpha(),ot<1&&A.setClearColor(16777215,.5),A.clear(),Ve&&R.render(nt);const Wt=A.toneMapping;A.toneMapping=Dn;const Zt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),E.setupLightsView(tt),oe===!0&&U.setGlobalState(A.clippingPlanes,tt),ta(T,nt,tt),Ft.updateMultisampleRenderTarget(St),Ft.updateRenderTargetMipmap(St),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let $t=0,we=z.length;$t<we;$t++){const me=z[$t],{object:ue,geometry:Xe,material:Ct,group:Je}=me;if(Ct.side===ye&&ue.layers.test(tt.layers)){const ne=Ct.side;Ct.side=Ye,Ct.needsUpdate=!0,Su(ue,nt,tt,Xe,Ct,Je),Ct.side=ne,Ct.needsUpdate=!0,Rt=!0}}Rt===!0&&(Ft.updateMultisampleRenderTarget(St),Ft.updateRenderTargetMipmap(St))}A.setRenderTarget(Mt,bt,Dt),A.setClearColor(j,ot),Zt!==void 0&&(tt.viewport=Zt),A.toneMapping=Wt}function ta(T,z,nt){const tt=z.isScene===!0?z.overrideMaterial:null;for(let et=0,St=T.length;et<St;et++){const At=T[et],{object:Mt,geometry:bt,group:Dt}=At;let Wt=At.material;Wt.allowOverride===!0&&tt!==null&&(Wt=tt),Mt.layers.test(nt.layers)&&Su(Mt,z,nt,bt,Wt,Dt)}}function Su(T,z,nt,tt,et,St){F!==null&&et.isNodeMaterial&&F.setObject(T,et),T.onBeforeRender(A,z,nt,tt,et,St),T.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),et.onBeforeRender(A,z,nt,tt,T,St),et.transparent===!0&&et.side===ye&&et.forceSinglePass===!1?(et.side=Ye,et.needsUpdate=!0,A.renderBufferDirect(nt,z,tt,et,T,St),et.side=Xn,et.needsUpdate=!0,A.renderBufferDirect(nt,z,tt,et,T,St),et.side=ye):A.renderBufferDirect(nt,z,tt,et,T,St),T.onAfterRender(A,z,nt,tt,et,St)}function yu(T){let z=0;for(const nt of T)nt.texture!==null&&z++;return z}function Vs(T,z,nt){z.isScene!==!0&&(z=Se);const tt=It.get(T),et=E.state.lights,St=E.state.shadowsArray,At=et.state.version,Mt=lt.getParameters(T,et.state,St,z,nt,E.state.lightProbeGridArray),bt=lt.getProgramCacheKey(Mt);let Dt=tt.programs;tt.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,tt.fog=z.fog;const Wt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;tt.envMap=P.get(T.envMap||tt.environment,Wt),tt.envMapRotation=tt.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Dt===void 0&&(T.addEventListener("dispose",ce),Dt=new Map,tt.programs=Dt,tt.programVariants=new Map);let Zt=Dt.get(bt);if(Zt!==void 0){if(tt.currentProgram===Zt&&tt.lightsStateVersion===At)return bu(T,Mt),Zt}else Mt.uniforms=lt.getUniforms(T),F!==null&&T.isNodeMaterial&&F.build(T,nt,Mt),T.onBeforeCompile(Mt,A),Zt=lt.acquireProgram(Mt,bt),Dt.set(bt,Zt),tt.uniforms=Mt.uniforms;const Rt=tt.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Rt.clippingPlanes=U.uniform),bu(T,Mt),tt.needsLights=jx(T),tt.lightsStateVersion=At,tt.needsLights&&(Rt.ambientLightColor.value=et.state.ambient,Rt.lightProbe.value=et.state.probe,Rt.sunLights.value=et.state.sun,Rt.sunLightShadows.value=et.state.sunShadow,Rt.directionalLights.value=et.state.directional,Rt.directionalLightShadows.value=et.state.directionalShadow,Rt.spotLights.value=et.state.spot,Rt.spotLightShadows.value=et.state.spotShadow,Rt.rectAreaLights.value=et.state.rectArea,Rt.ltc_1.value=et.state.rectAreaLTC1,Rt.ltc_2.value=et.state.rectAreaLTC2,Rt.pointLights.value=et.state.point,Rt.pointLightShadows.value=et.state.pointShadow,Rt.hemisphereLights.value=et.state.hemi,Rt.sunShadowMatrix.value=et.state.sunShadowMatrix,Rt.sunShadowCascade.value=et.state.sunShadowCascade,Rt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Rt.spotLightMatrix.value=et.state.spotLightMatrix,Rt.spotLightMap.value=et.state.spotLightMap,Rt.pointShadowMatrix.value=et.state.pointShadowMatrix),tt.numLightProbeGrids=yu(E.state.lightProbeGridArray),tt.currentProgram=Zt,tt.uniformsList=null,Zt}function Kx(T,z,nt,tt,et){const St=It.get(T),At=St.currentProgram.id+","+tt+","+et;let Mt=St.programVariants.get(At);return Mt===void 0?(Mt=Vs(T,z,nt),St.programVariants.set(At,Mt)):(St.currentProgram=Mt,St.uniformsList=null,St.outputColorSpace=tt,St.toneMapping=et),Mt}function Eu(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Lr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function bu(T,z){const nt=It.get(T);nt.outputColorSpace=z.outputColorSpace,nt.batching=z.batching,nt.batchingColor=z.batchingColor,nt.instancing=z.instancing,nt.instancingColor=z.instancingColor,nt.instancingMorph=z.instancingMorph,nt.skinning=z.skinning,nt.morphTargets=z.morphTargets,nt.morphNormals=z.morphNormals,nt.morphColors=z.morphColors,nt.morphTargetsCount=z.morphTargetsCount,nt.numClippingPlanes=z.numClippingPlanes,nt.numIntersection=z.numClipIntersection,nt.vertexAlphas=z.vertexAlphas,nt.vertexTangents=z.vertexTangents,nt.toneMapping=z.toneMapping}function Jx(T,z,nt,tt,et){z.isScene!==!0&&(z=Se),Ft.resetTextureUnits();const St=z.fog,At=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?z.environment:null,Mt=G===null?A.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Kt.workingColorSpace,bt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,Dt=P.get(tt.envMap||At,bt),Wt=tt.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,Zt=!!nt.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Rt=!!nt.morphAttributes.position,$t=!!nt.morphAttributes.normal,we=!!nt.morphAttributes.color;let me=Dn;tt.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(me=A.toneMapping);const ue=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Xe=ue!==void 0?ue.length:0,Ct=It.get(tt),Je=E.state.lights;if(oe===!0&&(He===!0||T!==H)){const Me=T===H&&tt.id===O;U.setState(tt,T,Me)}let ne=!1,Si=!1;tt.version===Ct.__version?Ct.needsLights&&Ct.lightsStateVersion!==Je.state.version||et.isBatchedMesh&&Ct.batching===!1||!et.isBatchedMesh&&Ct.batching===!0||et.isBatchedMesh&&Ct.batchingColor===!0&&et._colorsTexture===null||et.isBatchedMesh&&Ct.batchingColor===!1&&et._colorsTexture!==null||et.isInstancedMesh&&Ct.instancing===!1||!et.isInstancedMesh&&Ct.instancing===!0||et.isSkinnedMesh&&Ct.skinning===!1||!et.isSkinnedMesh&&Ct.skinning===!0||et.isInstancedMesh&&Ct.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Ct.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Ct.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Ct.instancingMorph===!1&&et.morphTexture!==null||Ct.envMap!==Dt||tt.fog===!0&&Ct.fog!==St||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==U.numPlanes||Ct.numIntersection!==U.numIntersection)||Ct.vertexAlphas!==Wt||Ct.vertexTangents!==Zt||Ct.morphTargets!==Rt||Ct.morphNormals!==$t||Ct.morphColors!==we||Ct.morphTargetsCount!==Xe||Ct.numLightProbeGrids!==yu(E.state.lightProbeGridArray)?ne=!0:(Ct.outputColorSpace!==Mt||Ct.toneMapping!==me)&&(Si=!0):(ne=!0,Ct.__version=tt.version);let qe=Ct.currentProgram;(ne===!0||Si===!0)&&(qe=Si===!0?Kx(tt,z,et,Mt,me):Vs(tt,z,et),F&&tt.isNodeMaterial&&F.onUpdateProgram(tt,qe,Ct));let ea=!1,hi=!1,yi=!1;const jt=qe.getUniforms(),Be=Ct.uniforms;if(_t.useProgram(qe.program)&&(ea=!0,hi=!0,yi=!0),tt.id!==O&&(O=tt.id,hi=!0),ea||H!==T){_t.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),jt.setValue(V,"projectionMatrix",T.projectionMatrix),jt.setValue(V,"viewMatrix",T.matrixWorldInverse);const Ue=jt.map.cameraPosition;Ue!==void 0&&Ue.setValue(V,Ie.setFromMatrixPosition(T.matrixWorld)),le.logarithmicDepthBuffer&&jt.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&jt.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),H!==T&&(H=T,hi=!0,yi=!0)}if(Ct.needsLights&&(Je.state.sunShadowMap.length>0&&jt.setValue(V,"sunShadowMap",Je.state.sunShadowMap,Ft),Je.state.directionalShadowMap.length>0&&jt.setValue(V,"directionalShadowMap",Je.state.directionalShadowMap,Ft),Je.state.spotShadowMap.length>0&&jt.setValue(V,"spotShadowMap",Je.state.spotShadowMap,Ft),Je.state.pointShadowMap.length>0&&jt.setValue(V,"pointShadowMap",Je.state.pointShadowMap,Ft)),et.isSkinnedMesh){jt.setOptional(V,et,"bindMatrix"),jt.setOptional(V,et,"bindMatrixInverse");const Me=et.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),jt.setValue(V,"boneTexture",Me.boneTexture,Ft))}et.isBatchedMesh&&(jt.setOptional(V,et,"batchingTexture"),jt.setValue(V,"batchingTexture",et._matricesTexture,Ft),jt.setOptional(V,et,"batchingIdTexture"),jt.setValue(V,"batchingIdTexture",et._indirectTexture,Ft),jt.setOptional(V,et,"batchingColorTexture"),et._colorsTexture!==null&&jt.setValue(V,"batchingColorTexture",et._colorsTexture,Ft));const vn=nt.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&$.update(et,nt,qe),(hi||Ct.receiveShadow!==et.receiveShadow)&&(Ct.receiveShadow=et.receiveShadow,jt.setValue(V,"receiveShadow",et.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&z.environment!==null&&(Be.envMapIntensity.value=z.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=qg()),hi){if(jt.setValue(V,"toneMappingExposure",A.toneMappingExposure),Ct.needsLights&&Qx(Be,yi),St&&tt.fog===!0&&gt.refreshFogUniforms(Be,St),gt.refreshMaterialUniforms(Be,tt,mt,vt,E.state.transmissionRenderTarget[T.id]),Ct.needsLights&&Ct.numLightProbeGrids>0){const Me=S;let Ue=0;for(const Vn of E.state.lightProbeGridArray)Vn.texture!==null&&(Me.textures[Ue]=Vn.texture,Me.min[Ue]=Vn.boundingBox.min,Me.max[Ue]=Vn.boundingBox.max,Me.resolution[Ue]=Vn.resolution,Ue++);for(const Vn in Me)Me[Vn].length=Ue;Be.probesSH.value=Me.textures,Be.probesMin.value=Me.min,Be.probesMax.value=Me.max,Be.probesResolution.value=Me.resolution}Lr.upload(V,Eu(Ct),Be,Ft)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Lr.upload(V,Eu(Ct),Be,Ft),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&jt.setValue(V,"center",et.center),jt.setValue(V,"modelViewMatrix",et.modelViewMatrix),jt.setValue(V,"normalMatrix",et.normalMatrix),jt.setValue(V,"modelMatrix",et.matrixWorld),tt.uniformsGroups!==void 0){const Me=tt.uniformsGroups;for(let Ue=0,Vn=Me.length;Ue<Vn;Ue++){const Tu=Me[Ue];wt.update(Tu,qe),wt.bind(Tu,qe)}}return qe}function Qx(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.sunLights.needsUpdate=z,T.sunLightShadows.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function jx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(T,z,nt){const tt=It.get(T);tt.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),It.get(T.texture).__webglTexture=z,It.get(T.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:nt,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const nt=It.get(T);nt.__webglFramebuffer=z,nt.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,nt=0){G=T,k=z,Z=nt;let tt=null,et=!1,St=!1;if(T){const Mt=It.get(T);if(Mt.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(V.FRAMEBUFFER,Mt.__webglFramebuffer),Q.copy(T.viewport),q.copy(T.scissor),xt=T.scissorTest,_t.viewport(Q),_t.scissor(q),_t.setScissorTest(xt),O=-1;return}else if(Mt.__webglFramebuffer===void 0)Ft.setupRenderTarget(T);else if(Mt.__hasExternalTextures)Ft.rebindTextures(T,It.get(T.texture).__webglTexture,It.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Wt=T.depthTexture;if(Mt.__boundDepthTexture!==Wt){if(Wt!==null&&It.has(Wt)&&(T.width!==Wt.image.width||T.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(T)}}const bt=T.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(St=!0);const Dt=It.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Dt[z])?tt=Dt[z][nt]:tt=Dt[z],et=!0):T.samples>0&&Ft.useMultisampledRTT(T)===!1?tt=It.get(T).__webglMultisampledFramebuffer:Array.isArray(Dt)?tt=Dt[nt]:tt=Dt,Q.copy(T.viewport),q.copy(T.scissor),xt=T.scissorTest}else Q.copy(st).multiplyScalar(mt).floor(),q.copy(ft).multiplyScalar(mt).floor(),xt=Tt;if(nt!==0&&(tt=B),_t.bindFramebuffer(V.FRAMEBUFFER,tt)&&_t.drawBuffers(T,tt),_t.viewport(Q),_t.scissor(q),_t.setScissorTest(xt),et){const Mt=It.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+z,Mt.__webglTexture,nt)}else if(St){const Mt=z;for(let bt=0;bt<T.textures.length;bt++){const Dt=It.get(T.textures[bt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+bt,Dt.__webglTexture,nt,Mt)}}else if(T!==null&&nt!==0){const Mt=It.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Mt.__webglTexture,nt)}O=-1};function wu(T){const z=It.get(T);return(z.__readFormat!==T.format||z.__readType!==T.type)&&(z.__readFormat=T.format,z.__readType=T.type,z.__formatReadable=le.textureFormatReadable(T.format),z.__typeReadable=le.textureTypeReadable(T.type)),z}this.readRenderTargetPixels=function(T,z,nt,tt,et,St,At,Mt=0){if(!(T&&T.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=It.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&At!==void 0&&(bt=bt[At],Array.isArray(bt)&&(bt=bt[0])),bt){_t.bindFramebuffer(V.FRAMEBUFFER,bt);try{const Dt=T.textures[Mt],Wt=Dt.format,Zt=Dt.type;T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Mt);const Rt=wu(Dt);if(Rt.__formatReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-tt&&nt>=0&&nt<=T.height-et&&V.readPixels(z,nt,tt,et,at.convert(Wt),at.convert(Zt),St)}finally{const Dt=G!==null?It.get(G).__webglFramebuffer:null;_t.bindFramebuffer(V.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(T,z,nt,tt,et,St,At,Mt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=It.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&At!==void 0&&(bt=bt[At],Array.isArray(bt)&&(bt=bt[0])),bt)if(z>=0&&z<=T.width-tt&&nt>=0&&nt<=T.height-et){_t.bindFramebuffer(V.FRAMEBUFFER,bt);const Dt=T.textures[Mt],Wt=Dt.format,Zt=Dt.type;T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Mt);const Rt=wu(Dt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,$t),V.bufferData(V.PIXEL_PACK_BUFFER,St.byteLength,V.STREAM_READ),V.readPixels(z,nt,tt,et,at.convert(Wt),at.convert(Zt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const we=G!==null?It.get(G).__webglFramebuffer:null;_t.bindFramebuffer(V.FRAMEBUFFER,we);const me=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await cd(V,me,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,$t),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,St),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer($t),V.deleteSync(me),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,nt=0){const tt=Math.pow(2,-nt),et=Math.floor(T.image.width*tt),St=Math.floor(T.image.height*tt),At=z!==null?z.x:0,Mt=z!==null?z.y:0;Ft.setTexture2D(T,0),V.copyTexSubImage2D(V.TEXTURE_2D,nt,0,0,At,Mt,et,St),_t.unbindTexture()},this.copyTextureToTexture=function(T,z,nt=null,tt=null,et=0,St=0){let At,Mt,bt,Dt,Wt,Zt,Rt,$t,we;const me=T.isCompressedTexture?T.mipmaps[St]:T.image;if(nt!==null)At=nt.max.x-nt.min.x,Mt=nt.max.y-nt.min.y,bt=nt.isBox3?nt.max.z-nt.min.z:1,Dt=nt.min.x,Wt=nt.min.y,Zt=nt.isBox3?nt.min.z:0;else{const jt=Math.pow(2,-et);At=Math.floor(me.width*jt),Mt=Math.floor(me.height*jt),T.isDataArrayTexture?bt=me.depth:T.isData3DTexture?bt=Math.floor(me.depth*jt):bt=1,Dt=0,Wt=0,Zt=0}tt!==null?(Rt=tt.x,$t=tt.y,we=tt.z):(Rt=0,$t=0,we=0);const ue=at.convert(z.format),Xe=at.convert(z.type);let Ct;z.isData3DTexture?(Ft.setTexture3D(z,0),Ct=V.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Ft.setTexture2DArray(z,0),Ct=V.TEXTURE_2D_ARRAY):(Ft.setTexture2D(z,0),Ct=V.TEXTURE_2D),_t.activeTexture(V.TEXTURE0),_t.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,z.flipY),_t.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),_t.pixelStorei(V.UNPACK_ALIGNMENT,z.unpackAlignment);const Je=_t.getParameter(V.UNPACK_ROW_LENGTH),ne=_t.getParameter(V.UNPACK_IMAGE_HEIGHT),Si=_t.getParameter(V.UNPACK_SKIP_PIXELS),qe=_t.getParameter(V.UNPACK_SKIP_ROWS),ea=_t.getParameter(V.UNPACK_SKIP_IMAGES);_t.pixelStorei(V.UNPACK_ROW_LENGTH,me.width),_t.pixelStorei(V.UNPACK_IMAGE_HEIGHT,me.height),_t.pixelStorei(V.UNPACK_SKIP_PIXELS,Dt),_t.pixelStorei(V.UNPACK_SKIP_ROWS,Wt),_t.pixelStorei(V.UNPACK_SKIP_IMAGES,Zt);const hi=T.isDataArrayTexture||T.isData3DTexture,yi=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const jt=It.get(T),Be=It.get(z),vn=It.get(jt.__renderTarget),Me=It.get(Be.__renderTarget);_t.bindFramebuffer(V.READ_FRAMEBUFFER,vn.__webglFramebuffer),_t.bindFramebuffer(V.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ue=0;Ue<bt;Ue++)hi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,It.get(T).__webglTexture,et,Zt+Ue),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,It.get(z).__webglTexture,St,we+Ue)),V.blitFramebuffer(Dt,Wt,Dt+At,Wt+Mt,Rt,$t,Rt+At,$t+Mt,V.DEPTH_BUFFER_BIT,V.NEAREST);_t.bindFramebuffer(V.READ_FRAMEBUFFER,null),_t.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(et!==0||T.isRenderTargetTexture||It.has(T)){const jt=It.get(T),Be=It.get(z);_t.bindFramebuffer(V.READ_FRAMEBUFFER,L),_t.bindFramebuffer(V.DRAW_FRAMEBUFFER,J);for(let vn=0;vn<bt;vn++)hi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,jt.__webglTexture,et,Zt+vn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,jt.__webglTexture,et),yi?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Be.__webglTexture,St,we+vn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Be.__webglTexture,St),et!==0?V.blitFramebuffer(Dt,Wt,Dt+At,Wt+Mt,Rt,$t,Rt+At,$t+Mt,V.COLOR_BUFFER_BIT,V.NEAREST):yi?V.copyTexSubImage3D(Ct,St,Rt,$t,we+vn,Dt,Wt,At,Mt):V.copyTexSubImage2D(Ct,St,Rt,$t,Dt,Wt,At,Mt);_t.bindFramebuffer(V.READ_FRAMEBUFFER,null),_t.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else yi?T.isDataTexture||T.isData3DTexture?V.texSubImage3D(Ct,St,Rt,$t,we,At,Mt,bt,ue,Xe,me.data):z.isCompressedArrayTexture?V.compressedTexSubImage3D(Ct,St,Rt,$t,we,At,Mt,bt,ue,me.data):V.texSubImage3D(Ct,St,Rt,$t,we,At,Mt,bt,ue,Xe,me):T.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,St,Rt,$t,At,Mt,ue,Xe,me.data):T.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,St,Rt,$t,me.width,me.height,ue,me.data):V.texSubImage2D(V.TEXTURE_2D,St,Rt,$t,At,Mt,ue,Xe,me);_t.pixelStorei(V.UNPACK_ROW_LENGTH,Je),_t.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ne),_t.pixelStorei(V.UNPACK_SKIP_PIXELS,Si),_t.pixelStorei(V.UNPACK_SKIP_ROWS,qe),_t.pixelStorei(V.UNPACK_SKIP_IMAGES,ea),St===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&V.generateMipmap(Ct),_t.unbindTexture()},this.initRenderTarget=function(T){It.get(T).__webglFramebuffer===void 0&&Ft.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ft.setTextureCube(T,0):T.isData3DTexture?Ft.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ft.setTexture2DArray(T,0):Ft.setTexture2D(T,0),_t.unbindTexture()},this.resetState=function(){k=0,Z=0,G=null,_t.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}const Nr=new Lt;function it(i){return Nr.set(i),[Nr.r,Nr.g,Nr.b]}function qt(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function $i(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function Ki(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class xe{constructor(){ct(this,"pos",[]);ct(this,"nor",[]);ct(this,"col",[]);ct(this,"glo",[]);ct(this,"ox",0);ct(this,"oy",0);ct(this,"oz",0);ct(this,"c",1);ct(this,"s",0)}get vertexCount(){return this.pos.length/3}frame(t=0,e=0,n=0,s=0){return this.ox=t,this.oy=e,this.oz=n,this.c=Math.cos(s),this.s=Math.sin(s),this}wx(t,e){return this.ox+t*this.c+e*this.s}wz(t,e){return this.oz-t*this.s+e*this.c}tri(t,e,n,s,r,a,l,o,c,h,f=0){const d=this.wx(t,n),u=this.wz(t,n),p=this.oy+e,x=this.wx(s,a),m=this.wz(s,a),g=this.oy+r,_=this.wx(l,c),M=this.wz(l,c),S=this.oy+o,y=x-d,E=g-p,v=m-u,b=_-d,D=S-p,A=M-u;let N=E*A-v*D,F=v*b-y*A,B=y*D-E*b;const L=Math.hypot(N,F,B)||1;N/=L,F/=L,B/=L,this.pos.push(d,p,u,x,g,m,_,S,M),this.nor.push(N,F,B,N,F,B,N,F,B),this.col.push(h[0],h[1],h[2],h[0],h[1],h[2],h[0],h[1],h[2]),this.glo.push(f,f,f)}quad(t,e,n,s,r,a,l,o,c,h,f,d,u,p=0){this.tri(t,e,n,s,r,a,l,o,c,u,p),this.tri(t,e,n,l,o,c,h,f,d,u,p)}box(t,e,n,s,r,a,l,o=void 0,c=null,h=0){this.quad(t,e,a,s,e,a,s,r,a,t,r,a,l,h),this.quad(s,e,n,t,e,n,t,r,n,s,r,n,l,h),this.quad(s,e,a,s,e,n,s,r,n,s,r,a,l,h),this.quad(t,e,n,t,e,a,t,r,a,t,r,n,l,h),o!==null&&this.quad(t,r,a,s,r,a,s,r,n,t,r,n,o??l,h),c&&this.quad(t,e,n,s,e,n,s,e,a,t,e,a,c,h)}cyl(t,e,n,s,r,a,l,o,c=null,h=0){const f=e+a;for(let d=0;d<l;d++){const u=d/l*Math.PI*2,p=(d+1)/l*Math.PI*2,x=Math.cos(u),m=Math.sin(u),g=Math.cos(p),_=Math.sin(p);r>1e-4?(this.quad(t+x*s,e,n+m*s,t+x*r,f,n+m*r,t+g*r,f,n+_*r,t+g*s,e,n+_*s,o,h),c&&this.tri(t,f,n,t+g*r,f,n+_*r,t+x*r,f,n+m*r,c,h)):this.tri(t+x*s,e,n+m*s,t,f,n,t+g*s,e,n+_*s,o,h)}}blob(t,e,n,s,r,a,l,o,c,h,f=0){const d=h??c;for(let u=0;u<o;u++){const p=u/o*Math.PI,x=(u+1)/o*Math.PI,m=Math.cos(p),g=Math.cos(x),_=Math.sin(p),M=Math.sin(x),S=$i(c,d,1-(u+.5)/o);for(let y=0;y<l;y++){const E=y/l*Math.PI*2,v=(y+1)/l*Math.PI*2,b=Math.cos(E),D=Math.sin(E),A=Math.cos(v),N=Math.sin(v),F=t+b*_*s,B=e+m*r,L=n+D*_*a,J=t+A*_*s,k=n+N*_*a,Z=t+b*M*s,G=e+g*r,O=n+D*M*a,H=t+A*M*s,Q=n+N*M*a;u>0&&this.tri(F,B,L,J,B,k,H,G,Q,S,f),u<o-1&&this.tri(F,B,L,H,G,Q,Z,G,O,S,f)}}}walls(t,e,n,s,r=0){const a=t.length/2,l=Xo(t)>0;for(let o=0;o<a;o++){const c=(o+1)%a,h=t[o*2],f=t[o*2+1],d=t[c*2],u=t[c*2+1];l?this.quad(d,e,u,h,e,f,h,n,f,d,n,u,s,r):this.quad(h,e,f,d,e,u,d,n,u,h,n,f,s,r)}}cap(t,e,n,s=0){const r=t.length/2,a=[];for(let o=0;o<r;o++)a.push(new Ut(t[o*2],t[o*2+1]));const l=Lo.triangulateShape(a,[]);for(const o of l){const c=a[o[0]],h=a[o[1]],f=a[o[2]];(h.x-c.x)*(f.y-c.y)-(h.y-c.y)*(f.x-c.x)>0?this.tri(c.x,e,c.y,f.x,e,f.y,h.x,e,h.y,n,s):this.tri(c.x,e,c.y,h.x,e,h.y,f.x,e,f.y,n,s)}}build(){const t=new Re;return t.setAttribute("position",new Ae(new Float32Array(this.pos),3)),t.setAttribute("normal",new Ae(new Float32Array(this.nor),3)),t.setAttribute("color",new Ae(new Float32Array(this.col),3)),t.setAttribute("glow",new Ae(new Float32Array(this.glo),1)),t.computeBoundingSphere(),t.computeBoundingBox(),this.pos=[],this.nor=[],this.col=[],this.glo=[],t}}function Xo(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}const Ji={value:0};function Qi(i={}){const t=new Qe({vertexColors:!0,roughness:i.roughness??.86,metalness:0,side:i.side??ye}),e=new Lt(i.glowColor??16761722);return t.onBeforeCompile=n=>{n.uniforms.uNight=Ji,n.uniforms.uGlowColor={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float glow;
varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;
uniform float uNight;
uniform vec3 uGlowColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlowColor * vGlow * uNight * 2.4;`)},t.customProgramCacheKey=()=>"inverloch-model",t}function Sh(i){return i.onBeforeCompile=t=>{t.uniforms.uNight=Ji,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.82 * uNight;`)},i.customProgramCacheKey=()=>"inverloch-unlit",i}const yh={day:{sunDir:[-.42,.78,-.46],sunColor:16774109,sunIntensity:3.1,hemiSky:13953279,hemiGround:9280120,hemiIntensity:1.25,zenith:4163279,horizon:13625078,below:1582638,sunGlow:1,shallow:7129789,deep:1201018,waterSky:12903158,foam:1,night:0,exposure:1},golden:{sunDir:[-.84,.22,.36],sunColor:16756848,sunIntensity:3,hemiSky:15781309,hemiGround:6973032,hemiIntensity:1.15,zenith:4153244,horizon:16760970,below:1645863,sunGlow:1.6,shallow:7320486,deep:1390942,waterSky:16763040,foam:.9,night:.25,exposure:1},night:{sunDir:[.38,.72,-.42],sunColor:10467071,sunIntensity:.5,hemiSky:3821436,hemiGround:1053980,hemiIntensity:.55,zenith:396056,horizon:1582922,below:263948,sunGlow:.5,shallow:1920092,deep:331552,waterSky:2242140,foam:.45,night:1,exposure:1.05}},Zg=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
  gl_Position = p.xyww;
}`,$g=`
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
}`;class Kg{constructor(t,e,n,s={}){ct(this,"sun",new Pf(16777215,3));ct(this,"hemi",new Af(16777215,8947848,1));ct(this,"sky");ct(this,"sunDir",new Y);ct(this,"skyUniforms");ct(this,"from");ct(this,"to");ct(this,"t",1);ct(this,"mode","day");this.renderer=t,this.water=e,this.tint=s,this.from=this.to=this.preset("day"),this.skyUniforms={uZenith:{value:new Lt},uHorizon:{value:new Lt},uBelow:{value:new Lt},uSunDir:{value:new Y},uSunColor:{value:new Lt},uSunGlow:{value:1},uNight:{value:0}},this.sky=new Qt(new No(1,32,16),new kn({uniforms:this.skyUniforms,vertexShader:Zg,fragmentShader:$g,side:Ye,depthWrite:!1,depthTest:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,n>0&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(n,n)),this.apply(1)}set(t,e=!1){t===this.mode&&this.t>=1||(this.from=this.snapshot(),this.to=this.preset(t),this.mode=t,this.t=e?1:0,this.apply(this.t))}update(t){return this.t>=1?!1:(this.t=Math.min(1,this.t+t/1.4),this.apply(this.t),!0)}aimShadow(t,e){if(!this.sun.castShadow)return;const n=de.clamp(e*.7,140,2400),s=this.sun.shadow,r=s.camera,a=n*2/s.mapSize.x,l=Math.round(t.x/a)*a,o=Math.round(t.z/a)*a,c=n*2.4+300;this.sun.target.position.set(l,t.y,o),this.sun.position.set(l,t.y,o).addScaledVector(this.sunDir,c),this.sun.target.updateMatrixWorld(),r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=1,r.far=c*2+400,r.updateProjectionMatrix(),s.bias=-.3/(r.far-r.near),s.normalBias=de.clamp(a*1.6,.06,1.2))}preset(t){return{...yh[t],...this.tint[t]}}setSolar(t){const e=(t%1440+1440)%1440,n=6*60,s=20.5*60;let r,a;if(e>=n&&e<=s)a=(e-n)/(s-n),r=Math.sin(Math.PI*a)*70;else{const p=((e<n?e+1440:e)-s)/(1440-(s-n));a=p<.5?1:0,r=-Math.sin(Math.PI*p)*40}const l=de.degToRad(110*(1-2*a)),o=de.degToRad(Math.max(r,5)),c=[Math.sin(l)*Math.cos(o),Math.sin(o),-Math.cos(l)*Math.cos(o)];let h;r>=25?h=this.preset("day"):r>=6?h=qo(this.preset("golden"),this.preset("day"),(r-6)/19):r>=-6?h=qo(this.preset("night"),this.preset("golden"),(r+6)/12):h=this.preset("night");const f=de.clamp((2-r)/6,0,1),d=yh.night.sunDir,u=[c[0]+(d[0]-c[0])*f,c[1]+(d[1]-c[1])*f,c[2]+(d[2]-c[2])*f];this.from=this.to={...h,sunDir:u},this.mode=r>=25?"day":r>=-6?"golden":"night",this.apply(1)}snapshot(){return qo(this.from,this.to,Jg(this.t))}apply(t){this.t=t;const e=this.snapshot();this.sunDir.set(...e.sunDir).normalize(),this.sun.color.set(e.sunColor),this.sun.intensity=e.sunIntensity,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const n=this.skyUniforms;n.uZenith.value.set(e.zenith),n.uHorizon.value.set(e.horizon),n.uBelow.value.set(e.below),n.uSunDir.value.copy(this.sunDir),n.uSunColor.value.set(e.sunColor),n.uSunGlow.value=e.sunGlow,n.uNight.value=e.night;const s=this.water.uniforms;s.uSunDir.value.copy(this.sunDir),s.uSunColor.value.set(e.sunColor).multiplyScalar(Math.min(1,e.sunIntensity/2.5)),s.uShallow.value.set(e.shallow),s.uDeep.value.set(e.deep),s.uSky.value.set(e.waterSky),s.uFoam.value=e.foam,this.water.skirt.material.color.set(e.deep).lerp(new Lt(e.shallow),.35),Ji.value=e.night,this.renderer.toneMappingExposure=e.exposure}}function Jg(i){return i*i*(3-2*i)}function qo(i,t,e){if(e<=0)return i;if(e>=1)return t;const n=(r,a)=>new Lt(r).lerp(new Lt(a),e).getHex(),s=(r,a)=>r+(a-r)*e;return{sunDir:[s(i.sunDir[0],t.sunDir[0]),s(i.sunDir[1],t.sunDir[1]),s(i.sunDir[2],t.sunDir[2])],sunColor:n(i.sunColor,t.sunColor),sunIntensity:s(i.sunIntensity,t.sunIntensity),hemiSky:n(i.hemiSky,t.hemiSky),hemiGround:n(i.hemiGround,t.hemiGround),hemiIntensity:s(i.hemiIntensity,t.hemiIntensity),zenith:n(i.zenith,t.zenith),horizon:n(i.horizon,t.horizon),below:n(i.below,t.below),sunGlow:s(i.sunGlow,t.sunGlow),shallow:n(i.shallow,t.shallow),deep:n(i.deep,t.deep),waterSky:n(i.waterSky,t.waterSky),foam:s(i.foam,t.foam),night:s(i.night,t.night),exposure:s(i.exposure,t.exposure)}}const Qg=1.5;class jg{constructor(t,e,n,s,r,a,l,o=Qg){ct(this,"nx");ct(this,"nz");ct(this,"y");ct(this,"xMin");ct(this,"zMin");ct(this,"xMax");ct(this,"zMax");ct(this,"dx");ct(this,"dz");ct(this,"cellX");ct(this,"cellZ");this.raw=t,this.exposure=e,this.w=n,this.h=s,this.sizeX=r,this.sizeZ=a,this.vex=o,this.cellX=r/n,this.cellZ=a/s,this.nx=Math.floor((n-1)/l)+1,this.nz=Math.floor((s-1)/l)+1,this.dx=this.cellX*l,this.dz=this.cellZ*l,this.xMin=-r/2+this.cellX/2,this.zMin=-a/2+this.cellZ/2,this.xMax=this.xMin+(this.nx-1)*this.dx,this.zMax=this.zMin+(this.nz-1)*this.dz,this.y=new Float32Array(this.nx*this.nz);for(let c=0;c<this.nz;c++)for(let h=0;h<this.nx;h++)this.y[c*this.nx+h]=t[c*l*n+h*l]*o}yAt(t,e){let n=(t-this.xMin)/this.dx,s=(e-this.zMin)/this.dz;n<0?n=0:n>this.nx-1.0001&&(n=this.nx-1.0001),s<0?s=0:s>this.nz-1.0001&&(s=this.nz-1.0001);const r=n|0,a=s|0,l=n-r,o=s-a,c=a*this.nx+r,h=this.y[c],f=this.y[c+1],d=this.y[c+this.nx],u=this.y[c+this.nx+1];return l+o<=1?h+(f-h)*l+(d-h)*o:u+(d-u)*(1-l)+(f-u)*(1-o)}bilinear(t,e,n){let s=(e+this.sizeX/2)/this.cellX-.5,r=(n+this.sizeZ/2)/this.cellZ-.5;s<0?s=0:s>this.w-1.0001&&(s=this.w-1.0001),r<0?r=0:r>this.h-1.0001&&(r=this.h-1.0001);const a=s|0,l=r|0,o=s-a,c=r-l,h=l*this.w+a;return(t[h]*(1-o)+t[h+1]*o)*(1-c)+(t[h+this.w]*(1-o)+t[h+this.w+1]*o)*c}metresAt(t,e){return this.bilinear(this.raw,t,e)}exposureAt(t,e){return this.bilinear(this.exposure,t,e)}inside(t,e,n=0){return t>this.xMin+n&&t<this.xMax-n&&e>this.zMin+n&&e<this.zMax-n}}const Eh={type:"change"},Yo={type:"start"},bh={type:"end"},Ur=new wo,wh=new wn,t_=Math.cos(70*de.DEG2RAD),De=new Y,je=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zo=1e-6;class e_ extends If{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pn.ROTATE,MIDDLE:Pn.DOLLY,RIGHT:Pn.PAN},this.touches={ONE:Wn.ROTATE,TWO:Wn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new un,this._lastTargetPosition=new Y,this._quat=new un().setFromUnitVectors(t.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ar,this._sphericalDelta=new Ar,this._scale=1,this._panOffset=new Y,this._rotateStart=new Ut,this._rotateEnd=new Ut,this._rotateDelta=new Ut,this._panStart=new Ut,this._panEnd=new Ut,this._panDelta=new Ut,this._dollyStart=new Ut,this._dollyEnd=new Ut,this._dollyDelta=new Ut,this._dollyDirection=new Y,this._mouse=new Ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=i_.bind(this),this._onPointerDown=n_.bind(this),this._onPointerUp=s_.bind(this),this._onContextMenu=u_.bind(this),this._onMouseWheel=o_.bind(this),this._onKeyDown=l_.bind(this),this._onTouchStart=c_.bind(this),this._onTouchMove=h_.bind(this),this._onMouseDown=r_.bind(this),this._onMouseMove=a_.bind(this),this._interceptControlDown=d_.bind(this),this._interceptControlUp=f_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ee.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Eh),this.update(),this.state=ee.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;De.copy(e).sub(this.target),De.applyQuaternion(this._quat),this._spherical.setFromVector3(De),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=je:n>Math.PI&&(n-=je),s<-Math.PI?s+=je:s>Math.PI&&(s-=je),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(De.setFromSpherical(this._spherical),De.applyQuaternion(this._quatInverse),e.copy(this.target).add(De),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const l=De.length();a=this._clampDistance(l*this._scale);const o=l-a;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),r=!!o}else if(this.object.isOrthographicCamera){const l=new Y(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=o!==this.object.zoom;const c=new Y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(l),this.object.updateMatrixWorld(),a=De.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ur.origin.copy(this.object.position),Ur.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ur.direction))<t_?this.object.lookAt(this.target):(wh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ur.intersectPlane(wh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Zo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zo||this._lastTargetPosition.distanceToSquared(this.target)>Zo?(this.dispatchEvent(Eh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?je/60*this.autoRotateSpeed*t:je/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){De.setFromMatrixColumn(e,0),De.multiplyScalar(-t),this._panOffset.add(De)}_panUp(t,e){this.screenSpacePanning===!0?De.setFromMatrixColumn(e,1):(De.setFromMatrixColumn(e,0),De.crossVectors(this.object.up,De)),De.multiplyScalar(t),this._panOffset.add(De)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;De.copy(s).sub(this.target);let r=De.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,l=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,l=(t.pageY+e.y)*.5;this._updateZoomParameters(a,l)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function n_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function i_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function s_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bh),this.state=ee.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function r_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Pn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ee.DOLLY;break;case Pn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}break;case Pn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Yo)}function a_(i){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function o_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(i.preventDefault(),this.dispatchEvent(Yo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(bh))}function l_(i){this.enabled!==!1&&this._handleKeyDown(i)}function c_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Wn.ROTATE:if(this.enableRotate===!1){this.state=ee.NONE;break}this._handleTouchStartRotate(i),this.state=ee.TOUCH_ROTATE;break;case Wn.PAN:if(this.enablePan===!1){this.state=ee.NONE;break}this._handleTouchStartPan(i),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case Wn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ee.TOUCH_DOLLY_PAN;break;case Wn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Yo)}function h_(i){switch(this._trackPointer(i),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ee.NONE}}function u_(i){this.enabled!==!1&&i.preventDefault()}function d_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function f_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const $o=new wn,Fr=new Lf,ji=new Ut,Ko=new Y;class p_ extends e_{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Pn.PAN,MIDDLE:Pn.DOLLY,RIGHT:Pn.ROTATE},this.touches={ONE:Wn.PAN,TWO:Wn.DOLLY_ROTATE},this._panWorldStart=new Y}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;$o.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();ji.x=(t.clientX-n.left)/n.width*2-1,ji.y=-((t.clientY-n.top)/n.height)*2+1,Fr.setFromCamera(ji,this.object),Fr.ray.intersectPlane($o,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const n=this.domElement.getBoundingClientRect();ji.x=(t.clientX-n.left)/n.width*2-1,ji.y=-((t.clientY-n.top)/n.height)*2+1,Fr.setFromCamera(ji,this.object),Fr.ray.intersectPlane($o,Ko)&&(Ko.sub(this._panWorldStart),this._panOffset.copy(Ko).negate(),this.update())}}class m_{constructor(t,e,n){ct(this,"items",[]);ct(this,"v",new Y);ct(this,"visible",!0);ct(this,"obstacles",[]);this.layer=t;for(const s of[...e].sort((r,a)=>r.priority-a.priority)){const r=document.createElement("button");r.type="button",r.tabIndex=-1,r.className=`inv-label inv-label--${s.kind}`,r.textContent=s.name,r.style.visibility="hidden",r.addEventListener("click",()=>n(s.id)),t.appendChild(r),this.items.push({place:s,el:r,w:0,h:0,shown:!1})}}setVisible(t){this.visible=t,this.layer.style.display=t?"":"none"}setObstacles(t){this.obstacles=t}update(t,e,n,s=1/0){if(!this.visible)return;const r=[...this.obstacles];for(const a of this.items){a.w||(a.w=a.el.offsetWidth,a.h=a.el.offsetHeight);const l=a.place;this.v.set(l.x,l.y,l.z);const o=this.v.distanceTo(t.position);this.v.project(t);let c=this.v.z<1&&this.v.z>-1&&o<(l.maxDist??1/0)&&o<s;const h=(this.v.x*.5+.5)*e,f=(-this.v.y*.5+.5)*n,d=h-a.w/2,u=f-a.h,p=h+a.w/2,x=f;if(c&&(p<0||d>e||x<0||u>n)&&(c=!1),c){for(const m of r)if(d<m[2]+6&&p>m[0]-6&&u<m[3]+4&&x>m[1]-4){c=!1;break}}c&&(r.push([d,u,p,x]),a.el.style.transform=`translate3d(${Math.round(d)}px, ${Math.round(u)}px, 0)`),c!==a.shown&&(a.el.style.visibility=c?"visible":"hidden",a.shown=c)}}dispose(){for(const t of this.items)t.el.remove();this.items=[]}}function Gn(i,t,e){return[(e-i.origin[0])*i.metresPerDegree[0],-(t-i.origin[1])*i.metresPerDegree[1]]}function g_(i,t,e){return i.map(n=>{const[s,r]=Gn(t,n.lat,n.lon),a=Math.max(e.yAt(s,r),0);return{...n,x:s,z:r,y:a+(n.lift??6)}})}const __={high:{step:1,trees:1,shadow:4096,pixelRatio:2},medium:{step:2,trees:.6,shadow:2048,pixelRatio:1.5},low:{step:2,trees:.35,shadow:0,pixelRatio:1}};class Jo extends Error{}const x_=()=>new Promise(i=>requestAnimationFrame(()=>i())),v_=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class M_{constructor(t,e,n,s,r={}){ct(this,"renderer");ct(this,"scene",new Bd);ct(this,"camera",new gn(38,1,5,9e4));ct(this,"controls");ct(this,"atmosphere");ct(this,"hf");ct(this,"disposed",!1);ct(this,"abort",new AbortController);ct(this,"labels");ct(this,"places",[]);ct(this,"raf",0);ct(this,"last",0);ct(this,"time",0);ct(this,"dirty",!0);ct(this,"animating",!0);ct(this,"resizeObserver");ct(this,"flight");ct(this,"lastCompass",NaN);ct(this,"width",1);ct(this,"height",1);ct(this,"pixelRatio",1);ct(this,"slowFrames",0);ct(this,"solarMinutes",NaN);ct(this,"roadPaths",[]);ct(this,"roadIndex");ct(this,"external");ct(this,"meta");ct(this,"shadowAim",new Y);ct(this,"viewFocus",new Y);ct(this,"viewDistance",1/0);ct(this,"lookDir",new Y);ct(this,"onKey",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=this.currentView(),n=e.dist*.12,s=de.degToRad(e.azimuth),r=-Math.sin(s),a=-Math.cos(s),l=Math.cos(s),o=-Math.sin(s);let c=null;switch(t.key){case"ArrowUp":c={...e,x:e.x+r*n,z:e.z+a*n};break;case"ArrowDown":c={...e,x:e.x-r*n,z:e.z-a*n};break;case"ArrowLeft":c={...e,x:e.x-l*n,z:e.z-o*n};break;case"ArrowRight":c={...e,x:e.x+l*n,z:e.z+o*n};break;case"+":case"=":c={...e,dist:e.dist*.8};break;case"-":case"_":c={...e,dist:e.dist*1.25};break;case"q":case"Q":c={...e,azimuth:e.azimuth-15};break;case"e":case"E":c={...e,azimuth:e.azimuth+15};break;case"r":case"R":c={...e,polar:e.polar-6};break;case"f":case"F":c={...e,polar:e.polar+6};break;case"Home":c=this.opts.home;break;default:return}t.preventDefault(),this.fly(c,.3)});ct(this,"frame",t=>{var o;if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);const e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,document.hidden)return;if(this.flight){const c=this.flight;c.t=Math.min(1,c.t+e/c.duration);const h=v_(c.t),f=(d,u)=>d+(u-d)*h;this.applyView({x:f(c.from.x,c.to.x),z:f(c.from.z,c.to.z),dist:Math.exp(f(Math.log(c.from.dist),Math.log(c.to.dist))),polar:f(c.from.polar,c.to.polar),azimuth:f(c.from.azimuth,c.to.azimuth)}),c.t>=1&&(this.flight=void 0)}if(this.controls&&!this.external&&this.controls.update()&&(this.dirty=!0),this.atmosphere.update(e)&&(this.dirty=!0),this.animating&&(this.time+=e,this.tick(e,this.time),this.dirty=!0),!this.dirty)return;this.dirty=!1;const n=this.camera;let s,r=1/0;const a=!!this.controls&&!this.external;if(this.controls&&a){const c=this.hf.yAt(n.position.x,n.position.z)+12;n.position.y<c&&(n.position.y=c),s=n.position.distanceTo(this.controls.target),this.shadowAim.copy(this.controls.target)}else{const c=Math.max(1,n.position.y-Math.max(this.hf.yAt(n.position.x,n.position.z),this.waterLevel));n.getWorldDirection(this.lookDir);const h=Math.min(this.lookDir.y<-.05?c/-this.lookDir.y:1e9,60+c*3,3e3);this.shadowAim.copy(n.position).addScaledVector(this.lookDir,h),s=Math.max(h,c)*1.3,r=Math.max(350,c*10)}const l=a?de.clamp(s*.02,2,80):de.clamp(s*.012,.4,60);if(Math.abs(l-n.near)>n.near*.05&&(n.near=l,n.updateProjectionMatrix()),this.atmosphere.aimShadow(this.shadowAim,s),!a&&s<500?this.viewFocus.set(n.position.x,0,n.position.z):this.viewFocus.copy(this.shadowAim),this.viewDistance=s,this.beforeRender(),this.renderer.render(this.scene,n),(o=this.labels)==null||o.update(n,this.width,this.height,r),this.animating&&e<.25&&(this.slowFrames=e>.042?this.slowFrames+1:Math.max(0,this.slowFrames-2),this.slowFrames>50&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio*.75),this.renderer.setPixelRatio(this.pixelRatio),this.resize(),this.slowFrames=0)),a){const c=Math.round(this.currentView().azimuth);c!==this.lastCompass&&(this.lastCompass=c,this.cb.onCompass(c))}});this.container=t,this.labelLayer=e,this.cb=n,this.opts=s,this.host=r,this.external=!!r.external}async init(){try{this.renderer=new Yg({antialias:!0,powerPreference:"high-performance"})}catch{this.cb.onError("This browser could not start WebGL, which the 3D model needs.");return}const t=this.renderer,e=this.pickQuality(),n=__[e];this.pixelRatio=Math.min(window.devicePixelRatio||1,n.pixelRatio),t.setPixelRatio(this.pixelRatio),t.outputColorSpace=Ee,t.toneMapping=da,t.shadowMap.enabled=n.shadow>0,t.shadowMap.type=is;const s=t.domElement;this.host.external?(s.setAttribute("role","img"),s.setAttribute("aria-label",this.opts.name)):(s.tabIndex=0,s.setAttribute("role","application"),s.setAttribute("aria-label",`${this.opts.name}. Drag to pan, right-drag to rotate, scroll to zoom. Arrow keys pan, plus and minus zoom, Q and E rotate.`)),s.style.display="block",s.style.outlineOffset="-3px",this.container.appendChild(s),s.addEventListener("webglcontextlost",l=>{l.preventDefault(),this.disposed||this.cb.onError("The browser reclaimed the graphics memory this model was using.")});let r;try{r=await this.build(n,e,async(l,o)=>{this.cb.onProgress(l,o),await x_()})}catch(l){if(this.disposed)return;l instanceof Jo||console.error(l),this.cb.onError(l instanceof Jo?l.message:"The model could not be built in this browser.");return}if(this.disposed)return;this.hf=r.hf,this.atmosphere=r.atmosphere,this.scene.add(this.atmosphere.sky,this.atmosphere.sun,this.atmosphere.sun.target,this.atmosphere.hemi),this.places=r.places,this.roadPaths=r.roadPaths,this.roadIndex=r.roadIndex,this.labels=new m_(this.labelLayer,this.places,l=>this.flyToPlace(l)),this.external||this.setupControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize();const a=window.matchMedia("(prefers-reduced-motion: reduce)").matches;a&&(this.animating=!1),this.external?this.setExternalCamera(...this.opts.externalStart):a?this.applyView(this.opts.home):(this.applyView(this.opts.intro),this.fly(this.opts.home,3.4)),this.cb.onProgress(1,"Ready"),this.cb.onReady(r.info),this.last=performance.now(),this.raf=requestAnimationFrame(this.frame)}get isAnimating(){return this.animating}setAnimating(t){this.animating=t,this.dirty=!0}setExternalCamera(t,e,n,s,r){this.external&&(this.camera.position.set(t,e,n),this.camera.rotation.set(r,s,0,"YXZ"),this.dirty=!0)}setExternal(t){if(!(t===this.external||!this.hf)){if(this.external=t,t)this.flight=void 0,this.controls&&(this.controls.enabled=!1);else{this.controls||this.setupControls(),this.controls.enabled=!0;const e=this.camera;e.getWorldDirection(this.lookDir);const n=Math.max(1,e.position.y),s=this.lookDir.y<-.05?Math.min(n/-this.lookDir.y,6e3):900,r=this.controls.target.copy(e.position).addScaledVector(this.lookDir,s);r.x=de.clamp(r.x,this.hf.xMin,this.hf.xMax),r.z=de.clamp(r.z,this.hf.zMin,this.hf.zMax),r.y=this.targetHeight(r.x,r.z),this.controls.update(),this.fly(this.opts.home,1.6)}this.resize()}}getCamera(){const t=new bn().setFromQuaternion(this.camera.quaternion,"YXZ"),e=this.camera.position;return{x:e.x,y:e.y,z:e.z,yaw:t.y,pitch:t.x}}fromLatLon(t,e){return this.meta?Gn(this.meta,t,e):[0,0]}addParts(t){const e=new $e;e.name="guest";const n=t.map(s=>{const r=new Re;r.setAttribute("position",new se(Array.from(s.positions),3)),s.colors&&r.setAttribute("color",new se(Array.from(s.colors),3)),s.uvs&&r.setAttribute("uv",new se(Array.from(s.uvs),2)),s.indices&&r.setIndex(Array.from(s.indices)),s.normals?r.setAttribute("normal",new se(Array.from(s.normals),3)):r.computeVertexNormals();let a=null;s.map&&(a=new Te(s.map),a.colorSpace=Ee,a.wrapS=a.wrapT=Ws,s.mapRepeat&&a.repeat.set(s.mapRepeat[0],s.mapRepeat[1]),a.anisotropy=4,a.needsUpdate=!0);const l=s.opacity??1,o={color:new Lt().setRGB(...s.color??[1,1,1]),map:a,vertexColors:!!s.colors,transparent:l<1,opacity:l,side:s.doubleSide?ye:Xn},c=s.unlit?new ei(o):new Qe({...o,roughness:s.roughness??.9,metalness:s.metalness??0,emissive:new Lt().setRGB(...s.emissive??[0,0,0]),emissiveIntensity:s.emissiveIntensity??1,flatShading:!!s.flatShading}),h=new Qt(r,c);return h.matrixAutoUpdate=!1,h.matrix.fromArray(Array.from(s.matrix)),h.castShadow=l>=1,h.receiveShadow=!0,e.add(h),h});return this.scene.add(e),this.dirty=!0,{setMatrix:(s,r)=>{const a=n[s];a&&(a.matrix.fromArray(Array.from(r)),a.matrixWorldNeedsUpdate=!0,this.dirty=!0)},setEmissive:(s,r,a,l,o)=>{var h;const c=(h=n[s])==null?void 0:h.material;c instanceof Qe&&(c.emissive.setRGB(r,a,l),c.emissiveIntensity=o,this.dirty=!0)},remove:()=>{var s;this.scene.remove(e);for(const r of n){r.geometry.dispose();const a=r.material;(s=a.map)==null||s.dispose(),a.dispose()}this.dirty=!0}}}addPad(t){const e=t.radius??t.halfWidth??5,n=t.radius??t.halfDepth??5,s=t.heading??0,r=Math.cos(s),a=Math.sin(s);let l=1/0,o=-1/0;for(const[u,p]of[[0,0],[-e,-n],[e,-n],[e,n],[-e,n],[0,-n],[0,n],[-e,0],[e,0]]){const x=this.hf.yAt(t.x+u*r+p*a,t.z-u*a+p*r);l=Math.min(l,x),o=Math.max(o,x)}const c=o+(t.lift??.25),h=c-l+1,f=t.radius?new Ro(t.radius,t.radius,h,24):new gi(e*2,h,n*2),d=new Qt(f,new Qe({color:new Lt().setRGB(...t.color),roughness:1}));return d.position.set(t.x,c-h/2,t.z),d.rotation.y=s,d.receiveShadow=!0,d.name="guest-pad",this.scene.add(d),this.dirty=!0,c}setSolarMinutes(t){!this.atmosphere||t===this.solarMinutes||(this.solarMinutes=t,this.atmosphere.setSolar(t),this.dirty=!0)}roadSpot(t){const e=t.trim().toLowerCase();let n=null;for(const p of this.roadPaths)p.name.toLowerCase()===e&&(!n||p.length>n.length)&&(n=p);if(!n)return null;const s=n.pts.length/3,r=0,a=s-1,l=s>>1;let o=n.pts[a*3]-n.pts[r*3],c=n.pts[a*3+2]-n.pts[r*3+2];const h=Math.hypot(o,c)||1;o/=h,c/=h;const f=Math.min(70,h*.5),d=n.pts[l*3]-o*f,u=n.pts[l*3+2]-c*f;return{x:d,y:this.hf.yAt(d,u)+38,z:u,yaw:Math.atan2(-o,-c),pitch:-.42}}standNear(t,e){const n=this.roadIndex,s=n==null?void 0:n.nearest(t,e,150);if(!n||!s)return null;const r=s.width/2+1.5;let a=(t-s.px)*-s.tz+(e-s.pz)*s.tx>=0?1:-1;const l=u=>{const p=s.px-s.tz*u*(r+6),x=s.pz+s.tx*u*(r+6),m=n.nearest(p,x,r+4);return!!m&&m.dist<r+3};l(a)&&!l(-a)&&(a=-a);const o=s.px-s.tz*a*r,c=s.pz+s.tx*a*r,h=t-o,f=e-c,d=Math.hypot(h,f)>6?Math.atan2(-h,-f):Math.atan2(-s.tx,-s.tz);return{x:o,z:c,yaw:d}}groundAt(t,e){return this.hf?this.hf.yAt(t,e):0}get waterLevel(){return 0}get bounds(){return this.hf?[this.hf.xMin,this.hf.xMax,this.hf.zMin,this.hf.zMax]:[-4e3,4e3,-3440,3440]}setTimeOfDay(t){var e;(e=this.atmosphere)==null||e.set(t,!this.animating),this.dirty=!0}setLabelsVisible(t){var e;(e=this.labels)==null||e.setVisible(t),this.dirty=!0}setLabelObstacles(t){var e;(e=this.labels)==null||e.setObstacles(t),this.dirty=!0}flyToPlace(t){const e=this.places.find(n=>n.id===t);e&&this.fly({x:e.x,z:e.z,dist:e.view[0],polar:e.view[1],azimuth:e.view[2]},2.2)}resetView(){this.fly(this.opts.home,1.8)}setView(t,e,n,s,r,a=1.5){this.fly({x:t,z:e,dist:n,polar:s,azimuth:r},a)}faceNorth(){const t=this.currentView();this.fly({...t,azimuth:0},.8)}zoomBy(t){const e=this.currentView();this.fly({...e,dist:de.clamp(e.dist*t,this.controls.minDistance,this.controls.maxDistance)},.35)}dispose(){var t,e,n;this.disposed=!0,this.abort.abort(),cancelAnimationFrame(this.raf),(t=this.resizeObserver)==null||t.disconnect(),(e=this.labels)==null||e.dispose(),(n=this.controls)==null||n.dispose(),this.renderer&&(this.renderer.domElement.removeEventListener("keydown",this.onKey),this.scene.traverse(s=>{var l,o;const r=s;(o=(l=r.geometry)==null?void 0:l.dispose)==null||o.call(l);const a=Array.isArray(r.material)?r.material:r.material?[r.material]:[];for(const c of a){for(const h of Object.values(c))h instanceof Te&&h.dispose();c.dispose()}}),this.renderer.dispose(),this.renderer.domElement.remove())}beforeRender(){}invalidate(){this.dirty=!0}clearTest(){const t=[...this.host.clear??[],...(this.host.clearLatLon??[]).map(e=>{const[n,s]=this.fromLatLon(e.lat,e.lon);return{x:n,z:s,r:e.r}})];return(e,n)=>t.some(s=>(e-s.x)**2+(n-s.z)**2<s.r*s.r)}pickQuality(){if(this.host.quality)return this.host.quality;const t=new URLSearchParams(window.location.search).get("quality");if(t==="high"||t==="medium"||t==="low")return t;const e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),s=n?String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)):"";if(/swiftshader|llvmpipe|software/i.test(s))return"low";const r=navigator.deviceMemory??8;return window.matchMedia("(pointer: coarse)").matches||r<=4?"medium":"high"}setupControls(){const t=this.controls=new p_(this.camera,this.renderer.domElement);t.enableDamping=!0,t.dampingFactor=.09,t.screenSpacePanning=!1,t.zoomToCursor=!0,t.minDistance=this.opts.minDistance,t.maxDistance=this.opts.maxDistance,t.maxPolarAngle=de.degToRad(84),t.zoomSpeed=1.1,t.addEventListener("start",()=>{this.flight=void 0}),t.addEventListener("change",()=>{const e=t.target,n=this.hf;e.x=de.clamp(e.x,n.xMin,n.xMax),e.z=de.clamp(e.z,n.zMin,n.zMax);const s=this.targetHeight(e.x,e.z);this.camera.position.y+=s-e.y,e.y=s,this.dirty=!0}),this.renderer.domElement.addEventListener("keydown",this.onKey)}clampView(t){var e,n;return{x:de.clamp(t.x,this.hf.xMin,this.hf.xMax),z:de.clamp(t.z,this.hf.zMin,this.hf.zMax),dist:de.clamp(t.dist,((e=this.controls)==null?void 0:e.minDistance)??this.opts.minDistance,((n=this.controls)==null?void 0:n.maxDistance)??this.opts.maxDistance),polar:de.clamp(t.polar,2,84),azimuth:t.azimuth}}currentView(){const t=this.controls.target,e=this.camera.position.clone().sub(t),n=new Ar().setFromVector3(e);return{x:t.x,z:t.z,dist:n.radius,polar:de.radToDeg(n.phi),azimuth:de.radToDeg(n.theta)}}targetHeight(t,e){return this.opts.followGround?Math.max(0,this.hf.yAt(t,e)):0}applyView(t){const e=new Ar(t.dist,de.degToRad(t.polar),de.degToRad(t.azimuth)),n=this.controls.target.set(t.x,this.targetHeight(t.x,t.z),t.z);this.camera.position.setFromSpherical(e).add(n),this.camera.lookAt(n),this.dirty=!0}fly(t,e){if(!this.controls||this.external)return;if(t=this.clampView(t),!this.animating){this.flight=void 0,this.applyView(t),this.controls.update();return}const n=this.currentView();let s=(t.azimuth-n.azimuth)%360;s>180&&(s-=360),s<-180&&(s+=360),this.flight={from:n,to:{...t,azimuth:n.azimuth+s},t:0,duration:e}}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.fov=this.external?60:t/e<.8?52:38,this.camera.updateProjectionMatrix(),this.dirty=!0}}const Th=3;function ts(i,t,e,n,s,r,a,l,o,c){const h=new Io(1,0),f=h.getAttribute("position"),d=[];for(let u=0;u<f.count;u++){const p=f.getX(u),x=f.getY(u),m=f.getZ(u),g=Math.sin(p*12.9898+x*78.233+m*37.719+l*4.1)*43758.5453,_=.8+(g-Math.floor(g))*.42;d.push([t+p*s*_,e+x*r*(x<0?.75:_),n+m*a*_])}for(let u=0;u<d.length;u+=3){const[p,x,m]=[d[u],d[u+1],d[u+2]],g=de.clamp(((p[1]+x[1]+m[1])/3-(e-r))/(2*r),0,1);i.tri(p[0],p[1],p[2],x[0],x[1],x[2],m[0],m[1],m[2],$i(o,c,g))}h.dispose()}function xi(i){const t=i.build();return t.deleteAttribute("glow"),t}function S_(i,t,e,n,s=()=>!1){const r=new $e;r.name="trees";const a=new Pc({vertexColors:!0}),l=1300,o=new Map,c=Ki(88);for(let g=0;g<i.length;g+=Th){if(n<1&&c()>n||s(i[g]/4,i[g+1]/4))continue;const M=`${i[g+2]>>8}:${Math.floor(i[g]/4/l)}:${Math.floor(i[g+1]/4/l)}`;let S=o.get(M);S||o.set(M,S=[]),S.push(g)}const h=new ie,f=new un,d=new Y,u=new Y,p=new Y(0,1,0),x=new Lt;let m=0;for(const[g,_]of o){const M=Number(g.split(":")[0]),S=new ni(t[M],a,_.length);_.forEach((y,E)=>{const v=i[y]/4,b=i[y+1]/4,D=(i[y+2]&255)/10,A=Ki(y*2654435761+11);u.set(v,e.yAt(v,b)-.15,b),f.setFromAxisAngle(p,A()*Math.PI*2);const N=.85+A()*.35;d.set(D*N,D,D*(.85+A()*.35)),S.setMatrixAt(E,h.compose(u,f,d));const F=.8+A()*.34;S.setColorAt(E,x.setRGB(F*(.94+A()*.14),F,F*(.9+A()*.12)))}),S.instanceMatrix.needsUpdate=!0,S.instanceColor&&(S.instanceColor.needsUpdate=!0),S.computeBoundingSphere(),S.castShadow=!0,S.receiveShadow=!1,r.add(S),m+=_.length}return{group:r,count:m}}const y_=1,Ah=2,E_=[it(5198680),it(11575168),it(9072466),it(12434356)],b_=it(4474957),w_=it(15921382),T_=[.34,.3,.26,.22,.16,.15,.13,.11];function A_(i,t){const e=[i[0]/10,i[1]/10];for(let n=2;n<i.length;n+=2){const s=i[n-2]/10,r=i[n-1]/10,a=i[n]/10,l=i[n+1]/10,o=Math.max(1,Math.ceil(Math.hypot(a-s,l-r)/t));for(let c=1;c<=o;c++)e.push(s+(a-s)*c/o,r+(l-r)*c/o)}return e}class R_{constructor(){ct(this,"cells",new Map);ct(this,"segs",[]);ct(this,"size",40)}add(t,e,n,s,r,a,l=7){const o=this.segs.length/7;this.segs.push(t,e,n,s,r,a,l);const c=Math.floor(Math.min(t,n)/this.size),h=Math.floor(Math.max(t,n)/this.size),f=Math.floor(Math.min(e,s)/this.size),d=Math.floor(Math.max(e,s)/this.size);for(let u=c;u<=h;u++)for(let p=f;p<=d;p++){const x=(u+512)*4096+(p+512);let m=this.cells.get(x);m||this.cells.set(x,m=[]),m.push(o)}}nearest(t,e,n){let s=null;const r=Math.ceil(n/this.size),a=Math.floor(t/this.size),l=Math.floor(e/this.size);for(let o=a-r;o<=a+r;o++)for(let c=l-r;c<=l+r;c++){const h=this.cells.get((o+512)*4096+(c+512));if(h)for(const f of h){const d=this.segs[f*7],u=this.segs[f*7+1],p=this.segs[f*7+2],x=this.segs[f*7+3],m=p-d,g=x-u,_=Math.max(0,Math.min(1,((t-d)*m+(e-u)*g)/(m*m+g*g||1))),M=d+m*_,S=u+g*_,y=Math.hypot(t-M,e-S);if(y<=n&&(!s||y<s.dist)){const E=Math.hypot(m,g)||1;s={dist:y,px:M,pz:S,cls:this.segs[f*7+4],name:this.segs[f*7+5],width:this.segs[f*7+6],tx:m/E,tz:g/E}}}}return s}}function C_(i,t){const e=new xe,n=new xe,s=new R_,r=[],a=[];for(const[x,m,g,_,M,S]of i.roads){const y=_/10,E=A_(S,x<=3?6:5),v=E.length/2;if(v<2)continue;const b=m===0&&x<=1?b_:E_[m],D=T_[x],A=(g&y_)!==0,N=t.yAt(E[0],E[1]),F=t.yAt(E[v*2-2],E[v*2-1]),B=new Float32Array(v);for(let G=1;G<v;G++)B[G]=B[G-1]+Math.hypot(E[G*2]-E[G*2-2],E[G*2+1]-E[G*2-1]);const L=B[v-1]||1,J=new Float32Array(v*3),k=new Float32Array(v*3),Z=new Float32Array(v*3);for(let G=0;G<v;G++){const O=E[G*2],H=E[G*2+1],Q=Math.max(G-1,0),q=Math.min(G+1,v-1);let xt=E[q*2]-E[Q*2],j=E[q*2+1]-E[Q*2+1];const ot=Math.hypot(xt,j)||1;xt/=ot,j/=ot;let ut=1;if(G>0&&G<v-1){const Tt=E[G*2]-E[G*2-2],Ot=E[G*2+1]-E[G*2-1],Gt=Math.hypot(Tt,Ot)||1;ut=1/Math.max(.6,(Tt*xt+Ot*j)/Gt)}const vt=-j*(y/2)*ut,mt=xt*(y/2)*ut,Pt=A?N+(F-N)*(B[G]/L)+.6+1*Math.sin(Math.PI*B[G]/L):NaN,Jt=A?Pt:t.yAt(O,H)+D,st=A?Pt:t.yAt(O+vt,H+mt)+D,ft=A?Pt:t.yAt(O-vt,H-mt)+D;J.set([O+vt,st,H+mt],G*3),k.set([O,Jt,H],G*3),Z.set([O-vt,ft,H-mt],G*3),G>0&&x<=3&&s.add(E[G*2-2],E[G*2-1],O,H,x,M,y)}for(let G=0;G<v-1;G++){const O=G*3,H=O+3;if(e.quad(J[O],J[O+1],J[O+2],J[H],J[H+1],J[H+2],k[H],k[H+1],k[H+2],k[O],k[O+1],k[O+2],b),e.quad(k[O],k[O+1],k[O+2],k[H],k[H+1],k[H+2],Z[H],Z[H+1],Z[H+2],Z[O],Z[O+1],Z[O+2],b),A){const Q=it(m===2?7297604:13225162);for(const q of[J,Z])e.quad(q[O],q[O+1],q[O+2],q[H],q[H+1],q[H+2],q[H],q[H+1]+1.05,q[H+2],q[O],q[O+1]+1.05,q[O+2],Q),e.quad(q[O],q[O+1]-.7,q[O+2],q[H],q[H+1]-.7,q[H+2],q[H],q[H+1],q[H+2],q[O],q[O+1],q[O+2],it(9276036))}}if(x<=5&&!A)for(const G of[0,v-1]){const O=k[G*3],H=k[G*3+1],Q=k[G*3+2],q=8;for(let xt=0;xt<q;xt++){const j=xt/q*Math.PI*2,ot=(xt+1)/q*Math.PI*2;e.tri(O,H,Q,O+Math.cos(ot)*y/2,H,Q+Math.sin(ot)*y/2,O+Math.cos(j)*y/2,H,Q+Math.sin(j)*y/2,b)}}if(x<=1&&!(g&Ah)&&L>20){let G=0;for(let O=4;O<L-4;O+=12){for(;G<v-2&&B[G+1]<O;)G++;const H=(O-B[G])/(B[G+1]-B[G]||1),Q=k[G*3]+(k[G*3+3]-k[G*3])*H,q=k[G*3+1]+(k[G*3+4]-k[G*3+1])*H,xt=k[G*3+2]+(k[G*3+5]-k[G*3+2])*H;let j=k[G*3+3]-k[G*3],ot=k[G*3+5]-k[G*3+2];const ut=Math.hypot(j,ot)||1;j/=ut,ot/=ut;const vt=(k[G*3+4]-k[G*3+1])/ut*3,mt=-ot*.16,Pt=j*.16,Jt=.05;n.quad(Q+mt,q+Jt,xt+Pt,Q+j*3+mt,q+vt+Jt,xt+ot*3+Pt,Q+j*3-mt,q+vt+Jt,xt+ot*3-Pt,Q-mt,q+Jt,xt-Pt,w_)}}if(g&Ah){let G=0,O=0;for(let ot=0;ot<v;ot++)G+=E[ot*2],O+=E[ot*2+1];G/=v,O/=v;const H=v>>1,Q=P_(E[0],E[1],E[H*2],E[H*2+1],E[v*2-2],E[v*2-1]),q=Q?Q.x:G,xt=Q?Q.z:O,j=Q?Q.r:Math.hypot(E[0]-G,E[1]-O);j>3&&j<40&&!a.some(ot=>Math.hypot(ot.x-q,ot.z-xt)<12)&&a.push({x:q,z:xt,r:j,w:y})}x<=3&&r.push({cls:x,name:M>=0?i.names[M]:"",width:y,flags:g,pts:k,length:L})}const l=it(13158078),o=it(7314002),c=it(4943936);for(const x of a){const m=x.r-x.w/2-.3;if(m<1.2)continue;const g=t.yAt(x.x,x.z)+.2;e.frame(x.x,g,x.z,0),e.cyl(0,0,0,m,m,.4,14,l,o),e.blob(0,.9,0,m*.45,.8,m*.45,6,3,c,it(7181400)),e.frame()}const h=new Qe({vertexColors:!0,roughness:.92,metalness:0,side:ye,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),f=new Qt(Rh(e.build()),h);f.receiveShadow=!0,f.name="roads";const d=Sh(new ei({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})),u=new Qt(Rh(n.build()),d);u.name="road-markings";const p=new $e;return p.add(f,u),{group:p,index:s,paths:r}}function Rh(i){return i.deleteAttribute("glow"),i}function P_(i,t,e,n,s,r){const a=2*(i*(n-r)+e*(r-t)+s*(t-n));if(Math.abs(a)<.001)return null;const l=i*i+t*t,o=e*e+n*n,c=s*s+r*r,h=(l*(n-r)+o*(r-t)+c*(t-n))/a,f=(l*(s-e)+o*(i-s)+c*(e-i))/a;return{x:h,z:f,r:Math.hypot(i-h,t-f)}}const Cs=-36,D_=170,L_=`
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
`,es=4;function I_(i,t,e,n){const{nx:s,nz:r}=i,a=new Float32Array(s*r*3),l=new Float32Array(s*r*3),o=new Float32Array(s*r*2);for(let y=0;y<r;y++)for(let E=0;E<s;E++){const v=y*s+E,b=i.xMin+E*i.dx,D=i.zMin+y*i.dz;a[v*3]=b,a[v*3+1]=i.y[v],a[v*3+2]=D,o[v*2]=(b+i.sizeX/2)/i.sizeX,o[v*2+1]=1-(D+i.sizeZ/2)/i.sizeZ;const A=i.y[y*s+Math.max(E-1,0)],N=i.y[y*s+Math.min(E+1,s-1)],F=i.y[Math.max(y-1,0)*s+E],B=i.y[Math.min(y+1,r-1)*s+E],L=(N-A)/(2*i.dx),J=(B-F)/(2*i.dz),k=Math.hypot(L,1,J);l[v*3]=-L/k,l[v*3+1]=1/k,l[v*3+2]=-J/k}const c=new Uint32Array((s-1)*(r-1)*6);let h=0;for(let y=0;y<r-1;y++)for(let E=0;E<s-1;E++){const v=y*s+E,b=v+1,D=v+s,A=D+1;c[h++]=v,c[h++]=D,c[h++]=b,c[h++]=b,c[h++]=D,c[h++]=A}const f=new Re;f.setAttribute("position",new Ae(a,3)),f.setAttribute("normal",new Ae(l,3)),f.setAttribute("uv",new Ae(o,2)),f.setIndex(new Ae(c,1)),f.computeBoundingSphere();const d=new Qe({map:t,roughness:.96,metalness:0}),u=new vr(new Uint8Array([128,128,128,255]),1,1);u.needsUpdate=!0;const p=Array.from({length:es},()=>({value:u})),x=Array.from({length:es},()=>({value:new ge(0,0,1,1)})),m=Array.from({length:es},()=>({value:0})),g={set(y,E,v){p[y].value=E??u,m[y].value=E?1:0,v&&x[y].value.set(...v)}},_=Array.from({length:es},(y,E)=>E);d.onBeforeCompile=y=>{y.uniforms.uTide=e;for(const E of _)y.uniforms[`uDetail${E}`]=p[E],y.uniforms[`uDetailRect${E}`]=x[E],y.uniforms[`uDetailOn${E}`]=m[E];y.vertexShader=y.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),y.fragmentShader=y.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform float uTide;
${_.map(E=>`uniform sampler2D uDetail${E};
uniform vec4 uDetailRect${E};
uniform float uDetailOn${E};`).join(`
`)}
${L_}`).replace("#include <map_fragment>",`#include <map_fragment>
        ${_.map(E=>`{
          vec2 duv = (vMapUv - uDetailRect${E}.xy) / (uDetailRect${E}.zw - uDetailRect${E}.xy);
          vec4 fine = texture2D(uDetail${E}, clamp(duv, 0.0, 1.0));
          float inside = step(0.0, duv.x) * step(duv.x, 1.0) * step(0.0, duv.y) * step(duv.y, 1.0);
          diffuseColor.rgb = mix(diffuseColor.rgb, fine.rgb, inside * uDetailOn${E});
        }`).join(`
`)}
        {
          float camDist = length(cameraPosition - vWPos);
          float nearFade = 1.0 - smoothstep(300.0, 1600.0, camDist);
          float grain = invNoise(vWPos.xz * 0.85) * 0.55 + invNoise(vWPos.xz * 0.21) * 0.45;
          diffuseColor.rgb *= mix(1.0, 0.84 + 0.32 * grain, nearFade);
          float above = vWPos.y / ${i.vex.toFixed(2)} - uTide;
          float wet = smoothstep(0.45, 0.03, above);
          diffuseColor.rgb *= mix(1.0, 0.76, wet);
        }`)},d.customProgramCacheKey=()=>`town-terrain-${i.vex}`;const M=new Qt(f,d);M.receiveShadow=!0,M.name="terrain";const S=new $e;return S.add(M,U_(i),F_(i,n)),S.userData.detail=g,S}function N_(i){const t=[];for(let e=0;e<i.nx;e++)t.push([i.xMin+e*i.dx,i.zMin]);for(let e=1;e<i.nz;e++)t.push([i.xMax,i.zMin+e*i.dz]);for(let e=i.nx-2;e>=0;e--)t.push([i.xMin+e*i.dx,i.zMax]);for(let e=i.nz-2;e>=1;e--)t.push([i.xMin,i.zMin+e*i.dz]);return t}function U_(i){const t=N_(i),e=t.length,n=[],s=[],r=[],a=new Lt(9074780),l=new Lt(6180669),o=new Lt(3813673),c=[[0,a,l],[1,l,o]];for(let d=0;d<e;d++){const[u,p]=t[d],[x,m]=t[(d+1)%e],g=i.yAt(u,p),_=i.yAt(x,m),M=x-u,S=m-p,y=Math.hypot(M,S)||1,E=-S/y*-1,v=M/y*-1;for(const[b,D,A]of c){const F=b===0?g:g-6,B=b===0?g-6:Cs,L=b===0?_:_-6,J=b===0?_-6:Cs;n.push(u,F,p,x,L,m,x,J,m,u,F,p,x,J,m,u,B,p);for(const k of[D,D,A,D,A,A])s.push(k.r,k.g,k.b);for(let k=0;k<6;k++)r.push(E,0,v)}}const h=new Re;h.setAttribute("position",new se(n,3)),h.setAttribute("normal",new se(r,3)),h.setAttribute("color",new se(s,3));const f=new Qt(h,new Qe({vertexColors:!0,roughness:1,side:ye}));return f.name="skirt",f}function F_(i,t){const e=new $e,n=t.scale??1,s=D_*n,r=i.xMax-i.xMin+s*2,a=i.zMax-i.zMin+s*2,l=190*n,o=(i.xMin+i.xMax)/2,c=(i.zMin+i.zMax)/2,h=new Qt(new gi(r,l,a),new Qe({color:1779245,roughness:.75,metalness:.1}));h.position.set(o,Cs-l/2,c),h.receiveShadow=!0,e.add(h);const f=document.createElement("canvas");f.width=2048,f.height=160;const d=f.getContext("2d");d.fillStyle="#1b262d",d.fillRect(0,0,f.width,f.height),d.fillStyle="#e9d9a6",d.textBaseline="middle",d.font="600 78px 'Space Grotesk', system-ui, sans-serif",d.fillText(t.title,40,84);const u=d.measureText(t.title).width;d.fillStyle="#9fb4bd",d.font="400 42px 'Space Grotesk', system-ui, sans-serif",d.fillText(t.subtitle,40+u+46,88);const p=new yr(f);p.colorSpace=Ee,p.anisotropy=8;const x=1700*n,m=new Qt(new ii(x,x*(f.height/f.width)),new ei({map:p,toneMapped:!1}));m.position.set(o-r/2+x/2+110*n,Cs-l/2,c+a/2+.6),e.add(m);const g=document.createElement("canvas");g.width=g.height=256;const _=g.getContext("2d");_.fillStyle="#e9d9a6",_.beginPath(),_.moveTo(128,18),_.lineTo(176,150),_.lineTo(128,122),_.lineTo(80,150),_.closePath(),_.fill(),_.font="700 86px 'Space Grotesk', system-ui, sans-serif",_.textAlign="center",_.fillText("N",128,240);const M=new yr(g);M.colorSpace=Ee;const S=new Qt(new ii(130*n,130*n),new ei({map:M,transparent:!0,toneMapped:!1}));return S.rotation.x=-Math.PI/2,S.position.set(i.xMax+s/2,Cs+.6,i.zMin+120*n),e.add(S),e}const O_=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,z_=`
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
}`;function B_(i,t){const e=i.w*i.h,n=new Uint16Array(e*2);for(let u=0;u<e;u++)n[u*2]=lc.toHalfFloat(i.raw[u]),n[u*2+1]=lc.toHalfFloat(i.exposure[u]);const s=new vr(n,i.w,i.h,Zn,cn);s.minFilter=s.magFilter=Ze,s.wrapS=s.wrapT=on,s.needsUpdate=!0;const r={tField:{value:s},uSize:{value:new Ut(i.sizeX,i.sizeZ)},uTide:t,uTime:{value:0},uSunDir:{value:new Y(.4,.8,.3).normalize()},uSunColor:{value:new Lt(16773848)},uShallow:{value:new Lt(7129789)},uDeep:{value:new Lt(937848)},uSky:{value:new Lt(12573938)},uFoam:{value:1}},a=new kn({uniforms:r,vertexShader:O_,fragmentShader:z_,transparent:!0,depthWrite:!1}),l=new ii(i.xMax-i.xMin,i.zMax-i.zMin);l.rotateX(-Math.PI/2);const o=new Qt(l,a);o.position.set((i.xMin+i.xMax)/2,t.value*i.vex,(i.zMin+i.zMax)/2),o.renderOrder=2,o.name="water";const c=new Qt(new Re,new ei({color:1929103,transparent:!0,opacity:.8,side:ye,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));c.renderOrder=1,c.name="water-edge";const h=[];for(let u=0;u<i.nx;u++)h.push([i.xMin+u*i.dx,i.zMin]);for(let u=1;u<i.nz;u++)h.push([i.xMax,i.zMin+u*i.dz]);for(let u=i.nx-2;u>=0;u--)h.push([i.xMin+u*i.dx,i.zMax]);for(let u=i.nz-2;u>=1;u--)h.push([i.xMin,i.zMin+u*i.dz]);const f=h.map(([u,p])=>i.yAt(u,p)),d=u=>{t.value=u;const p=u*i.vex;o.position.y=p;const x=[],m=h.length;for(let _=0;_<m;_++){const M=(_+1)%m,S=f[_],y=f[M];if(S>=p&&y>=p)continue;const[E,v]=h[_],[b,D]=h[M],A=Math.min(S,p),N=Math.min(y,p);x.push(E,p,v,b,p,D,b,N,D,E,p,v,b,N,D,E,A,v)}c.geometry.dispose();const g=new Re;g.setAttribute("position",new se(x,3)),c.geometry=g};return d(t.value),{mesh:o,skirt:c,uniforms:r,setTide:d}}function Or(i){const t=i.length/2;let e={cx:0,cz:0,w:0,d:0,heading:0,area:1/0};for(let n=0;n<t;n++){const s=(n+1)%t;let r=i[s*2]-i[n*2],a=i[s*2+1]-i[n*2+1];const l=Math.hypot(r,a);if(l<.5)continue;r/=l,a/=l;let o=1/0,c=-1/0,h=1/0,f=-1/0;for(let u=0;u<t;u++){const p=i[u*2],x=i[u*2+1],m=p*r+x*a,g=-p*a+x*r;m<o&&(o=m),m>c&&(c=m),g<h&&(h=g),g>f&&(f=g)}const d=(c-o)*(f-h);if(d<e.area){const u=(o+c)/2,p=(h+f)/2;e={cx:u*r-p*a,cz:u*a+p*r,w:c-o,d:f-h,heading:Math.atan2(-a,r),area:d}}}return e}function k_(i,t){const e=i.length/2,n=Xo(i)>0?1:-1,s=[];for(let r=0;r<e;r++){const a=(r+e-1)%e,l=(r+1)%e;let o=i[r*2]-i[a*2],c=i[r*2+1]-i[a*2+1],h=i[l*2]-i[r*2],f=i[l*2+1]-i[r*2+1];const d=Math.hypot(o,c)||1,u=Math.hypot(h,f)||1;o/=d,c/=d,h/=u,f/=u;const p=-c*n,x=o*n,m=-f*n,g=h*n;let _=p+m,M=x+g;const S=Math.hypot(_,M)||1;_/=S,M/=S;const y=t/Math.max(.4,_*p+M*x);s.push(i[r*2]+_*y,i[r*2+1]+M*y)}return s}function zr(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Int16Array(e.buffer,0,e.length>>1)}async function Ch(i){const t=new Uint8Array(i),e=new DataView(i);let n=8,s=0,r=0,a=0,l=0,o=0;const c=[];for(;n<t.length;){const x=e.getUint32(n),m=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]);if(m==="IHDR")s=e.getUint32(n+8),r=e.getUint32(n+12),a=t[n+16],l=t[n+17],o=t[n+20];else if(m==="IDAT")c.push(t.subarray(n+8,n+8+x));else if(m==="IEND")break;n+=12+x}if(a!==8||l!==2&&l!==6||o)throw new Error("Unsupported terrain image format");const h=l===2?3:4,f=new Blob(c).stream().pipeThrough(new DecompressionStream("deflate")),d=new Uint8Array(await new Response(f).arrayBuffer()),u=s*h,p=new Uint8Array(u*r);for(let x=0;x<r;x++){const m=d[x*(u+1)],g=x*(u+1)+1,_=x*u;for(let M=0;M<u;M++){const S=M>=h?p[_+M-h]:0,y=x>0?p[_-u+M]:0,E=M>=h&&x>0?p[_-u+M-h]:0;let v=d[g+M];if(m===1)v+=S;else if(m===2)v+=y;else if(m===3)v+=S+y>>1;else if(m===4){const b=Math.abs(y-E),D=Math.abs(S-E),A=Math.abs(S+y-2*E);v+=b<=D&&b<=A?S:D<=A?y:E}p[_+M]=v&255}}return{width:s,height:r,channels:h,data:p}}function G_(i,t,e){const n=i.width*i.height,s=new Float32Array(n);for(let r=0;r<n;r++)s[r]=(i.data[r*i.channels]<<8|i.data[r*i.channels+1])/t-e;return s}const Ps=4,an=7;function Qo(i){return i.colorSpace=Ee,i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=Ln,i}async function H_(i,t,e){let n=0;const s=c=>t(++n/4,c);t(0,"Fetching map data");const[r,a,l]=await Promise.all([fetch(i.town,{signal:e}).then(c=>{if(!c.ok)throw new Error("Could not load the suburb data");return c.json()}).then(c=>(s("Streets and buildings"),c)),fetch(i.height,{signal:e}).then(c=>{if(!c.ok)throw new Error("Could not load the terrain");return c.arrayBuffer()}).then(Ch).then(c=>(s("Terrain"),c)),new Oo().loadAsync(i.ground).then(c=>(s("Ground texture"),c))]),o=r.meta;return s("Building the model"),{town:{...r,buildings:zr(r.buildings),cars:zr(r.cars),trees:zr(r.trees),fences:r.fences?zr(r.fences):new Int16Array(0)},heights:G_(a,o.heightScale,o.heightOffset),ground:Qo(l)}}async function V_(i){const t=Qo(await new Oo().loadAsync(i));return t.wrapS=t.wrapT=on,t}async function W_(i){return Qo(await new Oo().loadAsync(i))}const Ph=[16052712,15327951,14673377,13621459,13095900,15129023,12174512,10990520,15786948,14273976,9413530,7307142].map(it),Dh=[10510922,9394760,12158570,13215107,10120021,13807756].map(it),Lh=[14276300,13224130,14999506,12567492,13682872,11909302,15328988].map(it),Ih=[13619916,12173748,14275778,10135200,9279388].map(it),X_=it(3163994),Nh=it(16053230),q_=it(11120304),Y_=it(7300956),Uh=it(12566714),Br=.05,Z_=0,Ds=1,Ls=2,kr=new Lt;function Fh(i,t,e){return kr.setRGB(i/255,t/255,e/255,Ee),[kr.r,kr.g,kr.b]}function $_(i,t,e,n,s){const{cx:r,cz:a,hw:l,hd:o}=t,c=qt(s,.88);if(l>=o){const h=l-o;i.quad(r-l,e,a+o,r+l,e,a+o,r+h,e+n,a,r-h,e+n,a,s),i.quad(r+l,e,a-o,r-l,e,a-o,r-h,e+n,a,r+h,e+n,a,s),i.tri(r+l,e,a+o,r+l,e,a-o,r+h,e+n,a,c),i.tri(r-l,e,a-o,r-l,e,a+o,r-h,e+n,a,c)}else{const h=o-l;i.quad(r+l,e,a+o,r+l,e,a-o,r,e+n,a-h,r,e+n,a+h,s),i.quad(r-l,e,a-o,r-l,e,a+o,r,e+n,a+h,r,e+n,a-h,s),i.tri(r-l,e,a+o,r+l,e,a+o,r,e+n,a+h,c),i.tri(r+l,e,a-o,r-l,e,a-o,r,e+n,a-h,c)}}function Oh(i,t,e,n,s,r,a){const{cx:l,cz:o,hw:c,hd:h}=t;if(c>=h){const f=s*n/h;i.quad(l-c-s,e-f,o+h+s,l+c+s,e-f,o+h+s,l+c+s,e+n,o,l-c-s,e+n,o,r),i.quad(l+c+s,e-f,o-h-s,l-c-s,e-f,o-h-s,l-c-s,e+n,o,l+c+s,e+n,o,r),i.tri(l+c,e,o+h,l+c,e,o-h,l+c,e+n,o,a),i.tri(l-c,e,o-h,l-c,e,o+h,l-c,e+n,o,a)}else{const f=s*n/c;i.quad(l+c+s,e-f,o+h+s,l+c+s,e-f,o-h-s,l,e+n,o-h-s,l,e+n,o+h+s,r),i.quad(l-c-s,e-f,o-h-s,l-c-s,e-f,o+h+s,l,e+n,o+h+s,l,e+n,o-h-s,r),i.tri(l-c,e,o+h,l+c,e,o+h,l,e+n,o+h,a),i.tri(l+c,e,o-h,l-c,e,o-h,l,e+n,o-h,a)}}const K_=1,J_=2,Gr=it(1846090);function Q_(i,t,e,n,s,r){const a=t.hw>=t.hd,l=(a?t.hd:t.hw)+s,o=(a?t.hw:t.hd)-(a?t.hd:t.hw)*.55,c=Math.min(Math.max(o,1.2),3.2),h=a?Math.cos(r)<0?1:-1:Math.sin(r)>0?1:-1,f=.28,d=.74,u=.1,p=h*l*(1-f),x=h*l*(1-d),m=e+n*f+u,g=e+n*d+u;a?h>0?i.quad(t.cx-c,m,t.cz+p,t.cx+c,m,t.cz+p,t.cx+c,g,t.cz+x,t.cx-c,g,t.cz+x,Gr):i.quad(t.cx+c,m,t.cz+p,t.cx-c,m,t.cz+p,t.cx-c,g,t.cz+x,t.cx+c,g,t.cz+x,Gr):h>0?i.quad(t.cx+p,m,t.cz+c,t.cx+p,m,t.cz-c,t.cx+x,g,t.cz-c,t.cx+x,g,t.cz+c,Gr):i.quad(t.cx+p,m,t.cz-c,t.cx+p,m,t.cz+c,t.cx+x,g,t.cz+c,t.cx+x,g,t.cz-c,Gr)}function zh(i,t,e){let n=!1;const s=i.length/2;for(let r=0,a=s-1;r<s;a=r++){const l=i[r*2],o=i[r*2+1],c=i[a*2],h=i[a*2+1];o>e!=h>e&&t<(c-l)*(e-o)/(h-o)+l&&(n=!n)}return n}function j_(i,t,e){const n=Math.max(.5,Math.max(t,e)/64),s=Math.max(1,Math.round(t/n)),r=Math.max(1,Math.round(e/n)),a=t/s,l=e/r,o=new Uint8Array(s*r);let c=0;for(let u=0;u<r;u++)for(let p=0;p<s;p++)zh(i,-t/2+(p+.5)*a,-e/2+(u+.5)*l)&&(o[u*s+p]=1,c++);if(!c)return null;const h=[],f=new Int32Array(s);let d=0;for(let u=0;u<3;u++){f.fill(0);let p=0,x=0,m=0,g=0,_=0;for(let y=0;y<r;y++){for(let v=0;v<s;v++)f[v]=o[y*s+v]?f[v]+1:0;const E=[];for(let v=0;v<=s;v++){const b=v<s?f[v]:0;for(;E.length&&f[E[E.length-1]]>=b;){const D=f[E.pop()],A=E.length?E[E.length-1]+1:0;D*(v-A)>p&&(p=D*(v-A),x=A,m=v-1,g=y-D+1,_=y)}E.push(v)}}const M=(m-x+1)*a,S=(_-g+1)*l;if(!p||M<2.4||S<2.4||u>0&&M*S<9)break;h.push({cx:-t/2+(x+m+1)/2*a,cz:-e/2+(g+_+1)/2*l,hw:M/2,hd:S/2}),d+=p;for(let y=g;y<=_;y++)o.fill(0,y*s+x,y*s+m+1)}return h.length&&d/c>=.7?h:null}function tx(i,t,e,n,s,r,a,l,o,c=0,h=!1){const f=e.length/2;let d=1/0,u=-1/0,p=0,x=0;for(let k=0;k<f;k++){const Z=t.yAt(e[k*2],e[k*2+1]);Z<d&&(d=Z),Z>u&&(u=Z),p+=e[k*2],x+=e[k*2+1]}p/=f,x/=f;const m=Math.min(u,Math.max(d,t.yAt(p,x)))+.1,g=Math.max(n,m+(a===Ds?2.1:2.4),u+1.5),_=g-m,M=Math.max(0,s-g),S=Math.abs(Xo(e)),y=Or(e),E=S/(y.w*y.d||1),v=Math.min(y.w,y.d)/2,[b,D,A]=r;let N=Fh(b,D,A);const F=b>D*1.2&&b>A*1.35&&b>105;let B;a===Ls?B=Lh[Math.floor(o()*Lh.length)]:a===Ds?B=o()<.45?$i(N,Nh,.35):Ih[Math.floor(o()*Ih.length)]:B=F&&o()<.6?Dh[Math.floor(o()*Dh.length)]:Ph[Math.floor(o()*Ph.length)],l||(B=$i(B,Uh,.3),N=$i(N,Uh,.3)),i.frame(0,m,0,0);const L=a===Z_&&_>=4.4&&_<6.6?_-2.75:0;if(L?(i.walls(e,d-m-.3,L-.22,$i(qt(B,.5),Y_,.5)),i.walls(e,L-.22,L,Nh),i.walls(e,L,_,B)):i.walls(e,d-m-.3,_,B),M<.7||a===Ls&&(M<1.3||E<.78))if(a===Ls){i.cap(e,_-.05,N),i.walls(e,_-.05,_+.45,qt(B,.96));const k=Math.min(5,Math.floor(S/350)),Z=Math.cos(y.heading),G=Math.sin(y.heading);for(let O=0;O<k;O++){const H=(o()-.5)*y.w*.5,Q=(o()-.5)*y.d*.5,q=y.cx+H*Z+Q*G,xt=y.cz-H*G+Q*Z;i.box(q-1.1,_,xt-.8,q+1.1,_+.9,xt+.8,q_)}}else i.cap(e,_,N);else if(a===Ls)i.frame(y.cx,m,y.cz,y.heading),Oh(i,{cx:0,cz:0,hw:y.w/2,hd:y.d/2},_,Math.min(M,v*.45),.3,N,B);else{const k=Math.cos(y.heading),Z=Math.sin(y.heading);let G;if(E>=.86)G=[{cx:0,cz:0,hw:y.w/2,hd:y.d/2}];else{const O=[];for(let H=0;H<f;H++){const Q=e[H*2]-y.cx,q=e[H*2+1]-y.cz;O.push(Q*k-q*Z,Q*Z+q*k)}G=j_(O,y.w,y.d)}if(G){i.cap(e,_-.02,qt(N,.9)),i.frame(y.cx,m,y.cz,y.heading);const O=Math.min(G[0].hw,G[0].hd),H=Math.min(Math.max(M,.6),O*.95),Q=a===Ds?.2:.4;G.forEach((q,xt)=>{const j=Math.min(q.hw,q.hd),ot=xt===0?H:Math.max(.4,H*j/O),ut=o()<(a===Ds?.7:.36),vt=G.length===1&&(c===J_||c!==K_&&ut);vt?Oh(i,q,_,ot,Q,N,B):$_(i,{cx:q.cx,cz:q.cz,hw:q.hw+Q,hd:q.hd+Q},_,ot*(j+Q)/j,N),xt===0&&h&&Q_(i,q,_,vt?ot:ot*(j+Q)/j,vt?0:Q,y.heading)})}else{const O=k_(e,Math.min(2.4,Math.sqrt(S)*.2)),H=Math.min(M,1.6);for(let Q=0;Q<f;Q++){const q=(Q+1)%f;i.quad(e[Q*2],_,e[Q*2+1],e[q*2],_,e[q*2+1],O[q*2],_+H,O[q*2+1],O[Q*2],_+H,O[Q*2+1],N)}i.cap(O,_+H,qt(N,1.04))}}if(a!==Ds&&S<2500){const k=L?1:Math.min(12,Math.max(1,Math.round(_/3))),Z=a===Ls?4.4:3.4;for(let G=0;G<f;G++){const O=(G+1)%f,H=e[G*2],Q=e[G*2+1],q=e[O*2],xt=e[O*2+1],j=Math.hypot(q-H,xt-Q);if(j<3.2)continue;let ot=-(xt-Q)/j,ut=(q-H)/j;ot*((H+q)/2-p)+ut*((Q+xt)/2-x)<0&&(ot=-ot,ut=-ut);const vt=Math.atan2(ot,ut),mt=(q-H)*Math.cos(vt)-(xt-Q)*Math.sin(vt);i.frame(mt>0?H:q,m,mt>0?Q:xt,vt);const Pt=Math.floor(j/Z);for(let Jt=0;Jt<k;Jt++){const st=L+Jt*3+.9;if(st+1.3>_-.2)break;for(let ft=0;ft<Pt;ft++){const Tt=(ft+.5)/Pt*j;i.quad(Tt-.8,st,Br,Tt+.8,st,Br,Tt+.8,st+1.3,Br,Tt-.8,st+1.3,Br,X_,o()<.45?1:0)}}}}i.frame()}function ex(i,t,e=[],n=()=>!1){const s=new $e;s.name="buildings";const r=Qi(),a=560,l=i.buildings,o=e.map(()=>{}),c=u=>{const p=l[u],x=new Array(p*2);for(let m=0;m<p*2;m++)x[m]=l[u+an+m]/10;return x},h=new Map;let f=0;for(let u=0;u<l.length;u+=an+l[u]*2){const p=l[u+an]/10,x=l[u+an+1]/10;if(n(p,x))continue;const m=e.findIndex(([M,S],y)=>!o[y]&&Math.abs(M-p)<60&&Math.abs(S-x)<60&&zh(c(u),M,S));if(m>=0){o[m]={poly:c(u),eave:l[u+1]/10,ridge:l[u+2]/10,roof:Fh(l[u+3],l[u+4],l[u+5])},f++;continue}const g=`${Math.floor(p/a)}:${Math.floor(x/a)}`;let _=h.get(g);_||h.set(g,_=[]),_.push(u,f++)}let d=0;for(const u of h.values()){const p=new xe;for(let m=0;m<u.length;m+=2){const g=u[m];tx(p,t,c(g),l[g+1]/10,l[g+2]/10,[l[g+3],l[g+4],l[g+5]],l[g+6]&3,(l[g+6]&4)!==0,Ki(u[m+1]*7919+13),l[g+6]>>3&3,(l[g+6]&32)!==0)}d+=p.vertexCount/3;const x=new Qt(p.build(),r);x.castShadow=!0,x.receiveShadow=!0,s.add(x)}return{group:s,count:f,triangles:d,reserved:o}}const Hr=[{id:"6-beaudesert",house:[-27.5256631,153.0234391],street:[-27.5256287,153.0231545],lot:[[-27.5255518,153.0232401],[-27.5256698,153.0239981],[-27.5258215,153.0239682],[-27.525709,153.0231799]],roof:{ridgeBack:.62,frontGable:.83},walls:15261900,trim:16184558,path:[[-27.5256352,153.0232183],[-27.5256631,153.0233586]],driveway:[[-27.5256955,153.0231869],[-27.5257016,153.0232912],[-27.5257188,153.0233652],[-27.5257249,153.0234027]],fences:[{kind:"picket",height:1.05,pts:[[-27.5255562,153.0232457],[-27.5256803,153.0231991]],gate:[-27.5256352,153.0232168]},{kind:"paling",height:1,pts:[[-27.5255562,153.0232457],[-27.5255775,153.0233869]]},{kind:"paling",height:1.6,pts:[[-27.5255775,153.0233869],[-27.5256682,153.023989]]},{kind:"paling",height:1.2,pts:[[-27.5257208,153.0232735],[-27.525739,153.0234028]]},{kind:"paling",height:1.6,pts:[[-27.525739,153.0234028],[-27.525818,153.0239647]]},{kind:"paling",height:1.7,pts:[[-27.5256682,153.023989],[-27.525818,153.0239647]]}],clothesline:[-27.5256955,153.0236194],planters:[{at:[-27.5256844,153.0235368],along:1,across:2},{at:[-27.5257603,153.0236432],along:1.4,across:.8},{at:[-27.5257644,153.023671],along:1.4,across:.8},{at:[-27.5257669,153.0236964],along:1.4,across:.8}],beds:[{at:[-27.5255689,153.0232533],r:.9}],shrubs:[[-27.5256793,153.0232558],[-27.5256803,153.0232811],[-27.5256768,153.0232963]]}],nx=it(3163994),Bh=it(13815234),ix=it(2828068),kh=it(14867920),Vr=it(10126440),sx=it(9405814),Gh=it(10133668),rx=it(4151915),Hh=it(9077624),ax=it(12894648),ox=it(10721922),Vh=it(7575375),Wh=it(7904595),Xh=it(7033664),jo=it(4157490),tl=it(8368216),lx=it(5062451),cx=2.75,qh=.45;function Wr(i,t,e,n){const s=t[3]-t[0],r=t[4]-t[1],a=t[5]-t[2],l=t[6]-t[0],o=t[7]-t[1],c=t[8]-t[2];let h=r*c-a*o,f=s*o-r*l;const d=Math.hypot(h,f)||1;h=h/d*e,f=f/d*e,i.quad(t[0]+h,t[1],t[2]+f,t[3]+h,t[4],t[5]+f,t[6]+h,t[7],t[8]+f,t[9]+h,t[10],t[11]+f,n),i.quad(t[9]-h,t[10],t[11]-f,t[6]-h,t[7],t[8]-f,t[3]-h,t[4],t[5]-f,t[0]-h,t[1],t[2]-f,n)}function Yh(i,t,e,n,s,r){const a=[e[0][0],e[0][1]];for(let c=1;c<e.length;c++){const[h,f]=e[c-1],[d,u]=e[c],p=Math.max(1,Math.ceil(Math.hypot(d-h,u-f)/1.2));for(let x=1;x<=p;x++)a.push(h+(d-h)*x/p,f+(u-f)*x/p)}const l=a.length/2;let o=null;for(let c=0;c<l;c++){const h=Math.max(0,c-1),f=Math.min(l-1,c+1);let d=a[f*2]-a[h*2],u=a[f*2+1]-a[h*2+1];const p=Math.hypot(d,u)||1;d/=p,u/=p;const x=a[c*2]+u*n,m=a[c*2+1]-d*n,g=a[c*2]-u*n,_=a[c*2+1]+d*n,M=[x,t.yAt(x,m)+s,m,g,t.yAt(g,_)+s,_];o&&i.quad(o[0],o[1],o[2],o[3],o[4],o[5],M[3],M[4],M[5],M[0],M[1],M[2],r),o=M}}function hx(i,t,[e,n,s,r],a){const l=Math.hypot(n[0]-e[0],n[1]-e[1]),o=Math.hypot(r[0]-e[0],r[1]-e[1]),c=Math.ceil(l/.8),h=Math.ceil(o/1.5),f=(d,u)=>{const p=e[0]+(n[0]-e[0])*d,x=e[1]+(n[1]-e[1])*d,m=r[0]+(s[0]-r[0])*d,g=r[1]+(s[1]-r[1])*d,_=p+(m-p)*u,M=x+(g-x)*u;return[_,t.yAt(_,M)+a,M]};for(let d=0;d<c;d++)for(let u=0;u<h;u++){const p=f(d/c,u/h),x=f(d/c,(u+1)/h),m=f((d+1)/c,(u+1)/h),g=f((d+1)/c,u/h);(x[0]-p[0])*(g[2]-p[2])-(x[2]-p[2])*(g[0]-p[0])<0?i.quad(p[0],p[1],p[2],x[0],x[1],x[2],m[0],m[1],m[2],g[0],g[1],g[2],d%2?Vh:Wh):i.quad(p[0],p[1],p[2],g[0],g[1],g[2],m[0],m[1],m[2],x[0],x[1],x[2],d%2?Vh:Wh)}}function Xr(i,t,e,n,s,r,a){const l=Math.hypot(n[0]-e[0],n[1]-e[1]);if(l<.3)return;const o=Math.max(1,Math.round(l/2.4)),c=Math.atan2(n[0]-e[0],n[1]-e[1]),h=r==="picket"?a:sx,f=p=>{const x=e[0]+(n[0]-e[0])*p,m=e[1]+(n[1]-e[1])*p;return[x,t.yAt(x,m),m]};for(let p=0;p<=o;p++){const[x,m,g]=f(p/o);i.frame(x,m,g,c),i.box(-.06,0,-.06,.06,s+.1,.06,qt(h,.92))}i.frame();const d=(p,x,m,g,_,M)=>{const S=f(p),y=f(x);Wr(i,[S[0],S[1]+m,S[2],y[0],y[1]+m,y[2],y[0],y[1]+g,y[2],S[0],S[1]+g,S[2]],M,_)};if(r==="paling"){for(let p=0;p<o;p++)d(p/o,(p+1)/o,.05,s,h,.02);return}for(const p of[.25,s-.2])d(0,1,p,p+.08,qt(h,.95),.02);const u=Math.floor(l/.16);for(let p=0;p<u;p++)d((p+.2)/u,(p+.75)/u,.08,s,h,.035)}function ux(i,t,e,n,s){i.frame(t,e,n,s),i.box(-.035,0,-.035,.035,2.05,.035,Gh);for(const[r,a]of[[1,0],[0,1],[-1,0],[0,-1]]){const l=Math.abs(a)*.025,o=Math.abs(r)*.025;i.box(Math.min(0,r*2.1)-l,2,Math.min(0,a*2.1)-o,Math.max(0,r*2.1)+l,2.05,Math.max(0,a*2.1)+o,Gh)}for(const r of[.8,1.4,2]){const a=[[r,0],[0,r],[-r,0],[0,-r]];for(let l=0;l<4;l++){const[o,c]=a[l],[h,f]=a[(l+1)%4],d=Math.hypot(h-o,f-c),u=-(f-c)/d*.015,p=(h-o)/d*.015;i.quad(o-u,2.06,c-p,o+u,2.06,c+p,h+u,2.06,f+p,h-u,2.06,f-p,it(15132386))}}i.frame()}function Zh(i,t,e,n,s,r,a,l,o,c){const h=l-o,f=Math.max(2,Math.round(h/.185)),d=.27,u=f*d;for(let m=1;m<=f;m++){const g=l-h*m/f,_=t+n*d*(m-1),M=e+s*d*(m-1),S=t+n*d*m,y=e+s*d*m;i.box(Math.min(_,S,_+r,S+r),g-.05,Math.min(M,y,M+a,y+a),Math.max(_,S,_+r,S+r),g,Math.max(M,y,M+a,y+a),Vr)}const p=t+n*u,x=e+s*u;for(const m of[0,1]){const g=r*m,_=a*m;Wr(i,[t+g,l-.3,e+_,p+g,o-.3,x+_,p+g,o,x+_,t+g,l,e+_],.025,c),Wr(i,[t+g,l+.9,e+_,p+g,o+.9,x+_,p+g,o+.97,x+_,t+g,l+.97,e+_],.025,c);for(const M of[0,.5,1]){const S=t+g+n*u*M,y=e+_+s*u*M,E=l-h*M;i.box(S-.035,E,y-.035,S+.035,E+.95,y+.035,c,null)}}return[p+r/2,x+a/2]}function dx(i,t,e,n,s){const r=Or(e.poly);let a=r.heading,l=r.w,o=r.d,c=-1/0;for(let st=0;st<4;st++){const ft=r.heading+st*Math.PI/2,Tt=Math.sin(ft)*(n[0]-r.cx)+Math.cos(ft)*(n[1]-r.cz);Tt>c&&(c=Tt,a=ft,l=st%2?r.d:r.w,o=st%2?r.w:r.d)}let h=1/0,f=-1/0;for(let st=0;st<e.poly.length;st+=2){const ft=t.yAt(e.poly[st],e.poly[st+1]);h=Math.min(h,ft),f=Math.max(f,ft)}const d=Math.min(f,Math.max(h,t.yAt(r.cx,r.cz))),u=Math.max(e.eave-d,2.6),p=Math.max(e.ridge-e.eave,.8),x=Math.max(.3,u-cx),m=l/2,g=o/2,_=m-qh,M=g-qh,S=it(s.walls),y=it(s.trim),E=e.roof,v=h-d-.3,b=Math.max(.16,f-d+.14);if(i.frame(r.cx,d,r.cz,a),i.box(-_,v,-M,_,b,M,Hh,Hh),x>1.2){i.box(-_+.3,b,-M+.3,_-.3,x-.3,M-.3,ix,null);const st=ft=>{const Tt=Math.max(2,Math.round(ft*2/2.2)+1);return Array.from({length:Tt},(Ot,Gt)=>-ft+.1+(ft*2-.2)*Gt/(Tt-1))};for(const ft of st(_))for(const Tt of[-M+.1,M-.1])i.box(ft-.1,v,Tt-.1,ft+.1,x-.28,Tt+.1,Bh,null);for(const ft of st(M))for(const Tt of[-_+.1,_-.1])i.box(Tt-.1,v,ft-.1,Tt+.1,x-.28,ft+.1,Bh,null);for(let ft=-_+.3;ft<_-.3;ft+=.22)for(const Tt of[M-.04,-M+.01])i.box(ft,b+.1,Tt,ft+.12,x-.3,Tt+.03,kh,null);for(let ft=-M+.3;ft<M-.3;ft+=.22)for(const Tt of[_-.04,-_+.01])i.box(Tt,b+.1,ft,Tt+.03,x-.3,ft+.12,kh,null)}i.box(-_-.03,x-.28,-M-.03,_+.03,x,M+.03,y,null);for(let st=x,ft=0;st<u-.01;st+=.28,ft++)i.box(-_,st,-M,_,Math.min(st+.28,u),M,ft%2?qt(S,.955):S,null);for(const st of[-_,_])for(const ft of[-M,M])i.box(st-.07,x,ft-.07,st+.07,u,ft+.07,y,null);const D=(st,ft,Tt)=>i.frame(i.wx(st,ft),d,i.wz(st,ft),a+Tt),A=(st,ft,Tt)=>{const Ot=x+.95,Gt=x+2.15;i.quad(st-ft/2,Ot,.04,st+ft/2,Ot,.04,st+ft/2,Gt,.04,st-ft/2,Gt,.04,nx,Tt?1:0),i.box(st-ft/2-.07,Ot-.07,0,st+ft/2+.07,Ot,.07,y),i.box(st-ft/2-.07,Gt,0,st+ft/2+.07,Gt+.07,.07,y);for(const oe of[st-ft/2-.07,st+ft/2,st-.025])i.box(oe,Ot,0,oe+(oe===st-.025?.05:.07),Gt,.06,y,null);i.quad(st-ft/2-.15,Gt+.12,.55,st+ft/2+.15,Gt+.12,.55,st+ft/2+.15,Gt+.42,.02,st-ft/2-.15,Gt+.42,.02,qt(E,.94))},N=st=>{i.quad(st-.45,x,.04,st+.45,x,.04,st+.45,x+2.05,.04,st-.45,x+2.05,.04,rx),i.box(st-.52,x+2.05,0,st+.52,x+2.12,.06,y)},F=[[-_,M,0,_*2],[_,M,Math.PI/2,M*2],[_,-M,Math.PI,_*2],[-_,-M,-Math.PI/2,M*2]],[B,L,J,k]=F,Z=(st,ft)=>{i.frame(r.cx,d,r.cz,a),D(st[0],st[1],st[2]),ft(st[3]),i.frame(r.cx,d,r.cz,a)};Z(B,st=>{N(1),A(st*.48,1.7,!0),A(st*.8,1.7,!1)});for(const st of[L,k])Z(st,ft=>{for(let Tt=0;Tt<4;Tt++)A(ft*(.14+Tt*.24),1.4,Tt%2===(st===L?0:1))});Z(J,st=>{A(st*.28,1.6,!1),A(st*.56,1.6,!0),N(st-1)});const G=-_+.15,O=-_+1.85,H=M+1.25;i.box(G,x-.14,M,O,x,H,Vr);for(const st of[G+.05,O-.05])i.box(st-.05,0,H-.1,st+.05,x+2.3,H,y,null);i.box(G,x+.12,H-.05,O,x+.98,H,y,null),i.box(G,x+.12,M,G+.05,x+.98,H,y,null),i.quad(G-.15,x+2.3,H+.2,O+.15,x+2.3,H+.2,O+.15,x+2.6,M,G-.15,x+2.6,M,qt(E,.96));const Q=Zh(i,O,M+.12,1,0,0,1,x,.1,y),q=-_+.2,xt=-_+1.9,j=-M-1.2;i.box(q,x-.14,j,xt,x,-M,Vr);for(const st of[q+.05,xt-.05])i.box(st-.05,0,j,st+.05,x+.98,j+.1,y,null);i.box(q,x+.12,j,q+.05,x+.98,-M,y,null),i.box(xt-.05,x+.12,j,xt,x+.98,-M,y,null),i.box(-_+.1,u-.45,-M-1.4,_-1.4,u-.37,-M,qt(E,.97),void 0,y),Zh(i,q+.3,j,0,-1,1,0,x,.1,y);const ot=g-s.roof.ridgeBack*o,ut=u+p,vt=u+p*s.roof.frontGable,mt=g-s.roof.frontGable*(g-ot);i.quad(-m,u-.02,g,-m,u-.02,-g,m,u-.02,-g,m,u-.02,g,y),i.tri(-m,u,g,0,vt,g,0,vt,mt,E),i.tri(m,u,g,0,vt,mt,0,vt,g,E),i.quad(-m,u,g,0,vt,mt,0,ut,ot,-m,ut,ot,E),i.quad(m,u,g,m,ut,ot,0,ut,ot,0,vt,mt,E),i.quad(-m,ut,ot,m,ut,ot,m,u,-g,-m,u,-g,E),i.tri(-_,u,M,_,u,M,0,vt,M,S),i.quad(-.3,vt-.75,M+.03,.3,vt-.75,M+.03,.3,vt-.4,M+.03,-.3,vt-.4,M+.03,qt(S,.6)),i.tri(-_,u,M,-_,ut,ot,-_,u,-M,S),i.tri(_,u,-M,_,ut,ot,_,u,M,S);const Pt=(st,ft,Tt,Ot,Gt,oe)=>Wr(i,[st,ft-.22,Tt,Ot,Gt-.22,oe,Ot,Gt-.03,oe,st,ft-.03,Tt],.02,y);Pt(-m,u,g,0,vt,g),Pt(0,vt,g,m,u,g);for(const st of[-m,m])Pt(st,u,g,st,ut,ot),Pt(st,ut,ot,st,u,-g);i.box(-m,u-.12,-g-.1,m,u,-g,y);const Jt=[i.wx(Q[0],Q[1]),i.wz(Q[0],Q[1])];return i.frame(),Jt}function fx(i,t){const e=Hr.flatMap((n,s)=>{const r=t[s];if(!r)return[];const a=Or(r.poly),l=c=>Gn(i,c[0],c[1]),o=[a.cx,a.cz];return[{obb:a,lines:[[...n.path.map(l),o],n.driveway.map(l)]}]});return(n,s)=>{for(const{obb:r,lines:a}of e){if(Math.abs(n-r.cx)>80||Math.abs(s-r.cz)>80)continue;const l=Math.cos(r.heading),o=Math.sin(r.heading),c=n-r.cx,h=s-r.cz;if(Math.abs(c*l-h*o)<r.w/2+1&&Math.abs(c*o+h*l)<r.d/2+1)return!0;for(const f of a)for(let d=1;d<f.length;d++){const[u,p]=f[d-1],[x,m]=f[d],g=Math.max(0,Math.min(1,((n-u)*(x-u)+(s-p)*(m-p))/((x-u)**2+(m-p)**2||1)));if(Math.hypot(n-u-(x-u)*g,s-p-(m-p)*g)<1.8)return!0}}return!1}}function px(i){const t=Hr.map(e=>e.lot.map(n=>Gn(i,n[0],n[1])));return(e,n)=>t.some(s=>{let r=!1,a=!1;for(let l=0,o=s.length-1;l<s.length;o=l++){const[c,h]=s[l],[f,d]=s[o];h>n!=d>n&&e<(f-c)*(n-h)/(d-h)+c&&(r=!r);const u=Math.max(0,Math.min(1,((e-c)*(f-c)+(n-h)*(d-h))/((f-c)**2+(d-h)**2||1)));Math.hypot(e-c-(f-c)*u,n-h-(d-h)*u)<2.5&&(a=!0)}return r||a})}function mx(i){return Hr.map(t=>Gn(i,t.house[0],t.house[1]))}function gx(i,t,e){const n=new xe,s=new xe,r=h=>Gn(i,h[0],h[1]);Hr.forEach((h,f)=>{const d=e[f];if(!d)return;const u=h.lot.map(r),p=it(h.trim),x=Math.atan2(u[1][0]-u[0][0],u[1][1]-u[0][1]);hx(s,t,u,.1);const m=dx(n,t,d,r(h.street),h);Yh(s,t,[...h.path.map(r),m],.45,.16,ax);const g=h.driveway.map(r);for(const _ of[-.75,.75]){const M=g.map(([S,y],E)=>{const[v,b]=g[Math.max(0,E-1)],[D,A]=g[Math.min(g.length-1,E+1)],N=Math.hypot(D-v,A-b)||1;return[S+(A-b)/N*_,y-(D-v)/N*_]});Yh(s,t,M,.28,.14,ox)}for(const _ of h.fences){const M=_.pts.map(r);for(let S=1;S<M.length;S++){const y=M[S-1],E=M[S];if(!_.gate){Xr(n,t,y,E,_.height,_.kind,p);continue}const v=r(_.gate),b=Math.hypot(E[0]-y[0],E[1]-y[1]),D=((v[0]-y[0])*(E[0]-y[0])+(v[1]-y[1])*(E[1]-y[1]))/(b*b),A=.5/b,N=L=>[y[0]+(E[0]-y[0])*L,y[1]+(E[1]-y[1])*L];Xr(n,t,y,N(D-A),_.height,_.kind,p),Xr(n,t,N(D+A),E,_.height,_.kind,p),Xr(n,t,N(D-A+.06/b),N(D+A-.06/b),_.height-.15,_.kind,p);const[F,B]=N(D+A+.35/b);n.frame(F,t.yAt(F,B),B,Math.atan2(E[0]-y[0],E[1]-y[1])),n.box(-.04,0,-.04,.04,1,.04,p,null),n.box(-.14,1,-.2,.14,1.22,.2,it(4872786)),n.frame()}}if(h.clothesline){const[_,M]=r(h.clothesline);ux(n,_,t.yAt(_,M),M,x+Math.PI/4)}for(const _ of h.planters){const[M,S]=r(_.at);n.frame(M,t.yAt(M,S),S,x),n.box(-_.across/2,0,-_.along/2,_.across/2,.4,_.along/2,Vr,lx);for(let y=0;y<3;y++)n.blob((y-1)*_.across/3.4,.5,(y%2-.5)*_.along*.4,.22,.2,.22,5,3,jo,tl);n.frame()}for(const _ of h.beds){const[M,S]=r(_.at);n.frame(M,t.yAt(M,S),S,0),n.cyl(0,.05,0,_.r,_.r,.12,10,Xh,Xh),n.blob(0,.55,0,_.r*.6,.5,_.r*.6,6,4,jo,tl),n.frame()}for(const _ of h.shrubs){const[M,S]=r(_);n.frame(M,t.yAt(M,S),S,0),n.blob(0,.32,0,.38,.36,.38,6,4,jo,tl),n.frame()}});const a=new $e;a.name="detail";const l=new Qt(n.build(),Qi());l.castShadow=!0,l.receiveShadow=!0;const o=s.build();o.deleteAttribute("glow");const c=new Qt(o,new Qe({vertexColors:!0,roughness:.95,metalness:0,side:ye,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}));return c.receiveShadow=!0,c.name="detail-ground",a.add(c,l),{group:a,ground:c}}const $h=[9405814,8747884,10129796,7305836,13617332,6253414,9080716].map(it),qr=1.6,Kh=560;function _x(i,t,e){const n=new $e;n.name="fences";const s=i.fences,r=new Map;for(let o=0;o+3<s.length;o+=4){const c=s[o]/10,h=s[o+1]/10,f=s[o+2]/10,d=s[o+3]/10,u=Math.hypot(f-c,d-h);if(u<1||e((c+f)/2,(h+d)/2))continue;const p=`${Math.floor(c/Kh)}:${Math.floor(h/Kh)}`;let x=r.get(p);x||r.set(p,x=new xe);const m=$h[o/4%$h.length],g=qt(m,.92),_=-(d-h)/u*.04,M=(f-c)/u*.04,S=Math.max(1,Math.ceil(u/5));let y=c,E=h,v=t.yAt(c,h);for(let b=1;b<=S;b++){const D=c+(f-c)*b/S,A=h+(d-h)*b/S,N=t.yAt(D,A);x.quad(y+_,v-.2,E+M,D+_,N-.2,A+M,D+_,N+qr,A+M,y+_,v+qr,E+M,m),x.quad(D-_,N-.2,A-M,y-_,v-.2,E-M,y-_,v+qr,E-M,D-_,N+qr,A-M,g),y=D,E=A,v=N}}const a=new Pc({vertexColors:!0});let l=0;for(const o of r.values()){l+=o.vertexCount/6;const c=o.build();c.deleteAttribute("glow");const h=new Qt(c,a);h.castShadow=!0,h.receiveShadow=!0,n.add(h)}return{group:n,count:l}}const el=.08;class nl{constructor(t,e,n,s){ct(this,"mesh");ct(this,"depth");ct(this,"decode");ct(this,"time",{value:0});ct(this,"hour",-1);this.hf=t,this.info=e,this.frames=n,this.channels=s,this.decode=new Float32Array(256);for(let p=0;p<256;p++)this.decode[p]=(p/255)**2*e.depthMax;const{nx:r,nz:a}=t,l=r*a,o=new Float32Array(l*3),c=new Float32Array(l*3);for(let p=0;p<a;p++)for(let x=0;x<r;x++){const m=p*r+x;o[m*3]=t.xMin+x*t.dx,o[m*3+1]=t.y[m],o[m*3+2]=t.zMin+p*t.dz,c[m*3+1]=1}const h=new Uint8Array(l);for(let p=0;p<e.frames;p++)for(let x=0;x<l;x++)this.sample(p,x)>el&&(h[x]=1);const f=[];for(let p=0;p<a-1;p++)for(let x=0;x<r-1;x++){const m=p*r+x,g=m+1,_=m+r,M=_+1;h[m]+h[g]+h[_]+h[M]>0&&f.push(m,_,g,g,_,M)}const d=new Re;d.setAttribute("position",new Ae(o,3)),d.setAttribute("normal",new Ae(c,3)),this.depth=new Ae(new Float32Array(l),1),this.depth.setUsage(er),d.setAttribute("aDepth",this.depth),d.setIndex(f);const u=new Qe({color:16777215,roughness:.25,metalness:0,transparent:!0,depthWrite:!1});u.onBeforeCompile=p=>{p.uniforms.uTime=this.time,p.uniforms.uNight=Ji,p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
attribute float aDepth;
varying float vDepth;
varying vec3 vWPos;`).replace("#include <begin_vertex>",`vec3 transformed = vec3(position.x, position.y + aDepth, position.z);
vDepth = aDepth;
vWPos = transformed;`),p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uNight;
varying float vDepth;
varying vec3 vWPos;`).replace("#include <color_fragment>",`#include <color_fragment>
          if (vDepth < ${el.toFixed(2)}) discard;
          // pale and a little muddy where it is shallow, dark blue as it deepens, so it reads as water against the ground
          float deep = smoothstep(0.1, 3.0, vDepth);
          diffuseColor.rgb = mix(vec3(0.36, 0.60, 0.74), vec3(0.05, 0.18, 0.40), deep) * (1.0 - 0.6 * uNight);
          diffuseColor.a = mix(0.7, 0.93, smoothstep(0.1, 1.5, vDepth));`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          {
            float nearby = 1.0 - smoothstep(200.0, 1500.0, length(cameraPosition - vWPos));
            vec2 p = vWPos.xz * 0.12 + vec2(uTime * 0.07, uTime * 0.04);
            vec2 ripple = vec2(sin(p.x * 3.1 + sin(p.y * 2.3)), cos(p.y * 2.7 + sin(p.x * 1.9))) * 0.035 * nearby;
            normal = normalize((viewMatrix * vec4(ripple.x, 1.0, ripple.y, 0.0)).xyz);
          }`)},u.customProgramCacheKey=()=>"moorooka-flood",this.mesh=new Qt(d,u),this.mesh.name="flood",this.mesh.renderOrder=40,this.mesh.frustumCulled=!1,this.mesh.visible=!1,this.setHour(e.hours)}static async load(t,e,n,s){const[r,a]=await Promise.all([fetch(e,{signal:s}).then(l=>{if(!l.ok)throw new Error("Could not load the flood simulation");return l.json()}),fetch(n,{signal:s}).then(l=>{if(!l.ok)throw new Error("Could not load the flood simulation");return l.arrayBuffer()}).then(Ch)]);if(a.width!==r.grid[0]||a.height!==r.grid[1]*Math.ceil(r.frames/3))throw new Error("The flood simulation does not match this model");return new nl(t,r,a.data,a.channels)}sample(t,e){const{hf:n}=this,[s,r]=this.info.grid,a=Math.round(n.dx/(n.sizeX/s)),l=e%n.nx*a,o=Math.floor(e/n.nx)*a;return this.decode[this.frames[((t/3|0)*r+o)*s*this.channels+l*this.channels+t%3]]}setHour(t){const e=this.info;if(t=de.clamp(t,0,e.hours),t===this.hour)return;this.hour=t;const n=t/e.frameHours-1,s=Math.floor(n),r=n-s,a=this.depth.array;for(let l=0;l<a.length;l++){const o=s<0?0:this.sample(Math.min(s,e.frames-1),l),c=this.sample(Math.min(s+1,e.frames-1),l);a[l]=o+(c-o)*r}this.depth.needsUpdate=!0}surfaceAt(t,e){const{hf:n}=this;if(!this.mesh.visible||!n.inside(t,e))return-1/0;const s=Math.round((e-n.zMin)/n.dz)*n.nx+Math.round((t-n.xMin)/n.dx),r=this.depth.array[s];return r>el?n.y[s]+r:-1/0}rainBy(t){return this.info.totalRainMm*de.clamp(t,0,this.info.hours)/this.info.hours}tick(t){this.time.value=t}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}const Is=it(9278358),il=it(16053230),Jh=it(3163994),xx=it(2054824),vx=it(16040479),Qh=[15327951,3099196,2504783,8007210,3816770,13214282,5209226,11879727].map(it);function Mx(i,t,e,n,s=()=>!1){const r=new xe,a=Ki(41050),l=i.busStops??[];for(let d=0;d<l.length;d+=2){const u=l[d]/10,p=l[d+1]/10,x=e.nearest(u,p,30);if(!x||n(u,p))continue;let m=u-x.px,g=p-x.pz;const _=Math.hypot(m,g);_<.5?(m=-x.tz,g=x.tx):(m/=_,g/=_);const M=x.width/2+2.4,S=x.px+m*M,y=x.pz+g*M;if(r.frame(S,t.yAt(S,y),y,Math.atan2(-m,-g)),r.box(-2.3,0,.9,-2.2,2.6,1,Is,null),r.box(-2.5,2,.88,-2,2.6,1.02,xx),r.box(-2.5,1.86,.88,-2,2,1.02,vx),a()<.5){for(const E of[-1.7,1.7])r.box(E-.05,0,-.6,E+.05,2.35,-.5,Is,null);r.box(-1.9,2.35,-.8,1.9,2.45,.8,qt(Is,.8)),r.box(-1.7,.5,-.62,1.7,2.1,-.58,Jh,null),r.box(-1.3,.42,-.5,1.3,.5,-.1,it(10126440))}}for(const d of i.pitches){const u=d.p.map(_=>_/10),p=Or(u);if(n(p.cx,p.cz))continue;const x=p.w>=p.d?p.w:p.d,m=Math.min(p.w,p.d),g=p.w>=p.d?p.heading+Math.PI/2:p.heading;if(r.frame(p.cx,t.yAt(p.cx,p.cz),p.cz,g),d.t==="Oval"&&/Football/.test(d.s)&&x>60)for(const _ of[-1,1]){const M=_*(x/2-4);for(const S of[-2.8,2.8])r.cyl(S,0,M,.08,.08,8,5,il);r.box(-2.8,2.9,M-.05,2.8,3.02,M+.05,il)}else if(d.s==="Tennis"){r.box(-m/2+.6,0,-.03,m/2-.6,.95,.03,it(2764595)),r.box(-m/2+.6,.95,-.04,m/2-.6,1.02,.04,il);for(const _ of[-m/2+.6,m/2-.6])r.cyl(_,0,0,.05,.05,1.07,5,Is)}else if(d.s==="Netball")for(const _ of[-1,1]){const M=_*(x/2-.3);r.cyl(0,0,M,.05,.05,3.05,5,Is),r.box(-.2,3.02,M-_*.42,.2,3.07,M,it(13644844))}}r.frame();const[,o]=Gn(i.meta,-27.53,153.0245),[,c]=Gn(i.meta,-27.5346,153.0245),h=i.buildings;for(let d=0;d<h.length;d+=an+h[d]*2){const u=h[d],p=h[d+an+1]/10;if(p<o||p>c)continue;let x=0,m=0;for(let _=0;_<u;_++)x+=h[d+an+_*2]/10,m+=h[d+an+_*2+1]/10;x/=u,m/=u;const g=Qh[Math.floor(a()*Qh.length)];for(let _=0;_<u;_++){const M=(_+1)%u,S=h[d+an+_*2]/10,y=h[d+an+_*2+1]/10,E=h[d+an+M*2]/10,v=h[d+an+M*2+1]/10,b=Math.hypot(E-S,v-y);if(b<5)continue;const D=(S+E)/2,A=(y+v)/2,N=e.nearest(D,A,16);if(!N||i.names[N.name]!=="Beaudesert Road"||n(D,A)||s(D,A))continue;let F=-(v-y)/b,B=(E-S)/b;if(F*(D-x)+B*(A-m)<0&&(F=-F,B=-B),(N.px-D)*F+(N.pz-A)*B<N.dist*.6)continue;const L=Math.atan2(F,B),J=(E-S)*Math.cos(L)-(v-y)*Math.sin(L),k=Math.max(t.yAt(S,y),t.yAt(E,v))+.1;r.frame(J>0?S:E,k,J>0?y:v,L);const Z=Math.min(2.6,Math.max(1.2,N.dist-N.width/2-.6));r.quad(.4,.4,.06,b-.4,.4,.06,b-.4,2.7,.06,.4,2.7,.06,Jh,.9),r.box(.2,3,0,b-.2,3.16,Z,g,qt(g,.9),qt(g,.75)),r.box(.2,2.75,Z-.08,b-.2,3.3,Z,qt(g,1.15),null)}}r.frame();const f=new Qt(r.build(),Qi());return f.castShadow=!0,f.receiveShadow=!0,f.name="furniture",f}function Sx(i,t){const e=new xe,n=it(9278358);e.cyl(0,0,0,.11,.07,8.2,5,n),e.box(-.05,8.1,0,.05,8.22,2.2,n),e.box(-.22,8,1.7,.22,8.14,2.5,it(5922659)),e.quad(-.2,7.99,2.48,.2,7.99,2.48,.2,7.99,1.72,-.2,7.99,1.72,it(16773320),3);const s=i.length/4,r=new ni(e.build(),Qi(),s),a=document.createElement("canvas");a.width=a.height=64;const l=a.getContext("2d"),o=l.createRadialGradient(32,32,0,32,32,32);o.addColorStop(0,"rgba(255,214,150,0.85)"),o.addColorStop(.45,"rgba(255,196,120,0.32)"),o.addColorStop(1,"rgba(255,180,100,0)"),l.fillStyle=o,l.fillRect(0,0,64,64);const c=new yr(a);c.colorSpace=Ee;const h=new ii(34,34);h.rotateX(-Math.PI/2);const f=new ei({map:c,transparent:!0,opacity:0,blending:ia,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),d=new ni(h,f,s);d.renderOrder=3;const u=new ie,p=new un,x=new Y(0,1,0),m=new Y(1,1,1),g=new Y;for(let _=0;_<s;_++){const M=i[_*4],S=i[_*4+1],y=i[_*4+2],E=i[_*4+3];p.setFromAxisAngle(x,E),r.setMatrixAt(_,u.compose(g.set(M,S,y),p,m));const v=M+Math.sin(E)*2.1,b=y+Math.cos(E)*2.1;d.setMatrixAt(_,u.compose(g.set(v,t.yAt(v,b)+.5,b),p.identity(),m))}return r.castShadow=!1,r.computeBoundingSphere(),d.computeBoundingSphere(),d.onBeforeRender=()=>{f.opacity=Ji.value*.9},d.visible=!0,{lights:r,pools:d,poolMat:f}}const Yr=[16053490,16053490,16053490,13225168,10725291,5593438,2040100,2838410,11020586,2054728,14266938,8368595];function jh(){const i=new xe,t=it(16777215),e=it(1713198),n=it(1381655);i.box(-.88,.3,-2.1,.88,.95,2.1,t,void 0,n),i.box(-.8,.95,-1.35,.8,1.48,.7,e,t);for(const s of[-.9,.68])for(const r of[-1.55,1])i.box(s,0,r,s+.22,.62,r+.62,n);for(const s of[-.75,.45])i.quad(s,.6,2.11,s+.3,.6,2.11,s+.3,.8,2.11,s,.8,2.11,it(16776166),2.2);return i.build()}const yx=it(8352874),tu=it(10133154),eu=it(7304312),Zr=.44,Ex=.2,nu=1.067;function sl(i,t){const e=[i[0]/10,i[1]/10];for(let o=2;o<i.length;o+=2){const c=i[o-2]/10,h=i[o-1]/10,f=i[o]/10,d=i[o+1]/10,u=Math.max(1,Math.ceil(Math.hypot(f-c,d-h)/6));for(let p=1;p<=u;p++)e.push(c+(f-c)*p/u,h+(d-h)*p/u)}const n=e.length/2,s=new Float32Array(n);for(let o=0;o<n;o++)s[o]=t.yAt(e[o*2],e[o*2+1]);let r=s;for(let o=0;o<2;o++){const c=new Float32Array(n);for(let h=0;h<n;h++){let f=0,d=0;for(let u=Math.max(0,h-4);u<=Math.min(n-1,h+4);u++)f+=r[u],d++;c[h]=f/d}r=c}const a=new Float32Array(n*3),l=new Float32Array(n);for(let o=0;o<n;o++)a[o*3]=e[o*2],a[o*3+1]=Math.max(r[o],s[o]-.2),a[o*3+2]=e[o*2+1],o&&(l[o]=l[o-1]+Math.hypot(e[o*2]-e[o*2-2],e[o*2+1]-e[o*2-1]));return{pts:a,cum:l,length:l[n-1]}}function ns(i,t,e){const n=i.cum.length;let s=0,r=n-1;for(;r-s>1;){const p=s+r>>1;i.cum[p]<=t?s=p:r=p}const a=Math.min(1,Math.max(0,(t-i.cum[s])/(i.cum[r]-i.cum[s]||1))),l=i.pts[s*3],o=i.pts[s*3+1],c=i.pts[s*3+2],h=i.pts[r*3],f=i.pts[r*3+1],d=i.pts[r*3+2],u=Math.hypot(h-l,d-c)||1;e.x=l+(h-l)*a,e.y=o+(f-o)*a,e.z=c+(d-c)*a,e.tx=(h-l)/u,e.tz=(d-c)/u}function rl(i,t,e,n,s,r){const a=t.cum.length;let l=0,o=0,c=0,h=0,f=0;for(let d=0;d<a;d++){const u=Math.max(d-1,0),p=Math.min(d+1,a-1);let x=t.pts[p*3]-t.pts[u*3],m=t.pts[p*3+2]-t.pts[u*3+2];const g=Math.hypot(x,m)||1;x/=g,m/=g;const _=t.pts[d*3]-m*e,M=t.pts[d*3+2]+x*e,S=t.pts[d*3+1]+s,y=_+m*n,E=M-x*n,v=_-m*n,b=M+x*n;d&&i.quad(l,o,c,y,S,E,v,S,b,h,o,f,r),l=y,o=S,c=E,h=v,f=b}}const bx=it(12170926),iu=it(15254842),su=it(9276036),ru=150,wx=Zr+.8;function Tx(i,t,e){const n=t.trainRoutes.map(a=>sl(a,e)),s=(a,l,o,c=0,h=a.cum.length)=>{let f=1/0,d=-1;for(let u=Math.max(0,c);u<Math.min(a.cum.length,h);u++){const p=Math.hypot(a.pts[u*3]-l,a.pts[u*3+2]-o);p<f&&(f=p,d=u)}return{i:d,dist:f}},r={x:0,y:0,z:0,tx:0,tz:0};for(const a of t.stations){const l=a.p[0]/10,o=a.p[1]/10,c=n.map(x=>({t:x,...s(x,l,o)})).filter(x=>x.dist<16).sort((x,m)=>x.dist-m.dist);if(!c.length)continue;const h=c[0],f=c[1],d=h.t.cum[h.i];let u=null,p=f?f.i:0;for(let x=Math.max(4,d-ru/2);x<=Math.min(h.t.length-4,d+ru/2);x+=5){ns(h.t,x,r);let m,g,_,M;if(f){const y=s(f.t,r.x,r.z,p-6,p+7);p=y.i;const E=f.t.pts[y.i*3],v=f.t.pts[y.i*3+2],b=Math.hypot(E-r.x,v-r.z);if(b<4.6){u=null;continue}const D=(E-r.x)/b,A=(v-r.z)/b;m=r.x+D*1.6,g=r.z+A*1.6,_=E-D*1.6,M=v-A*1.6}else{const y=(l-r.x)*r.tz-(o-r.z)*r.tx>=0?1:-1;m=r.x+r.tz*y*1.6,g=r.z-r.tx*y*1.6,_=r.x+r.tz*y*5.6,M=r.z-r.tx*y*5.6}const S=r.y+wx;if((_-m)*-r.tz+(M-g)*r.tx<0&&([m,_]=[_,m],[g,M]=[M,g]),u){const[y,E,v,b,D]=u;i.quad(y,D,E,v,D,b,_,S,M,m,S,g,bx);for(const[A,N,F,B,L,J,k,Z]of[[y,E,m,g,v,b,_,M],[v,b,_,M,y,E,m,g]]){const G=Math.hypot(L-A,J-N)||1,O=Math.hypot(k-F,Z-B)||1,H=(q,xt,j,ot)=>q+(xt-q)/j*ot,Q=[H(A,L,G,.45),D+.02,H(N,J,G,.45),H(F,k,O,.45),S+.02,H(B,Z,O,.45),H(F,k,O,.75),S+.02,H(B,Z,O,.75),H(A,L,G,.75),D+.02,H(N,J,G,.75)];A===y&&N===E?(i.quad(Q[0],Q[1],Q[2],Q[9],Q[10],Q[11],Q[6],Q[7],Q[8],Q[3],Q[4],Q[5],iu),i.quad(F,S-1.1,B,A,D-1.1,N,A,D,N,F,S,B,su)):(i.quad(...Q,iu),i.quad(A,D-1.1,N,F,S-1.1,B,F,S,B,A,D,N,su))}}u=[m,g,_,M,S]}}}function Ax(i,t){const e=new xe,n=new xe,s=new Set,r={x:0,y:0,z:0,tx:0,tz:0};for(const[d,u]of i.rails){const p=sl(u,t);if(!(p.length<4)&&(rl(e,p,0,1.45,Ex,yx),rl(n,p,-nu/2,.07,Zr,tu),rl(n,p,nu/2,.07,Zr,tu),d===0))for(let x=20;x<p.length-10;x+=62){ns(p,x,r);const m=r.x+r.tz*2.7,g=r.z-r.tx*2.7;if(!t.inside(m,g,6))continue;const _=Math.floor(m/14)*8192+Math.floor(g/14);if(!s.has(_)){for(let M=-1;M<=1;M++)for(let S=-1;S<=1;S++)s.add(Math.floor(m/14+M)*8192+Math.floor(g/14+S));n.frame(m,t.yAt(m,g),g,Math.atan2(-r.tz,r.tx)),n.box(-.09,0,-.09,.09,7.4,.09,eu),n.box(-.05,6.3,0,.05,6.42,3.2,eu),n.frame()}}}const a=new xe;Tx(a,i,t);const l=d=>(d.deleteAttribute("glow"),d),o=new $e;o.name="railway";const c=new Qt(l(e.build()),new Qe({vertexColors:!0,roughness:1,metalness:0,side:ye,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));c.receiveShadow=!0;const h=new Qt(l(n.build()),new Qe({vertexColors:!0,roughness:.55,metalness:.35,side:ye}));h.castShadow=!0;const f=new Qt(l(a.build()),new Qe({vertexColors:!0,roughness:.92,metalness:0,side:ye}));return f.castShadow=!0,f.receiveShadow=!0,o.add(c,h,f),o}const au=2,al=4;function Rx(i,t){const e=i.slice(),n=[],s=(a,l,o,c)=>Math.hypot(a-o,l-c)<3,r=a=>{const l=new Float32Array(a.length);for(let o=0;o<a.length/3;o++)l.set(a.subarray(o*3,o*3+3),a.length-3-o*3);return l};for(;e.length;){let a=Array.from(e.pop()),l=!0;for(;l;){l=!1;for(let o=0;o<e.length;o++){const c=e[o],h=c.length,f=a.length;let d=null,u=!0;if(s(a[f-3],a[f-1],c[0],c[2])?d=c:s(a[0],a[2],c[h-3],c[h-1])?(d=c,u=!1):!t&&s(a[f-3],a[f-1],c[h-3],c[h-1])?d=r(c):!t&&s(a[0],a[2],c[0],c[2])&&(d=r(c),u=!1),!!d){a=u?a.concat(Array.from(d.subarray(3))):Array.from(d.subarray(0,d.length-3)).concat(a),e.splice(o,1),l=!0;break}}}n.push(new Float32Array(a))}return n}function Cx(i){const t=new Map;for(const n of i){if(n.cls>2||!n.name||n.flags&au)continue;const s=`${n.name}|${n.flags&al}`,r=t.get(s)??[];r.push(n),t.set(s,r)}const e=[];for(const n of t.values()){const s=(n[0].flags&al)!==0;for(const r of Rx(n.map(a=>a.pts),s)){const a=r.length/3,l=new Float32Array(a);for(let o=1;o<a;o++)l[o]=l[o-1]+Math.hypot(r[o*3]-r[o*3-3],r[o*3+2]-r[o*3-1]);l[a-1]>260&&e.push({pts:r,cum:l,length:l[a-1],width:n[0].width,cls:n[0].cls,oneWay:s,name:n[0].name})}}return e}function Px(){const i=new xe,t=it(16185074),e=it(2054824),n=it(16040479),s=it(1713198),r=it(1381655);i.box(-1.25,.35,-6,1.25,3.1,6,t,it(15001316),r),i.box(-1.27,.35,-6.02,1.27,1.15,6.02,e,null),i.box(-1.28,1.15,-6.03,1.28,1.32,6.03,n,null);for(const a of[-1.27,1.27]){const l=Math.sign(a);i.quad(a+l*.02,1.55,-5.4*l,a+l*.02,1.55,5.4*l,a+l*.02,2.65,5.4*l,a+l*.02,2.65,-5.4*l,s,.5)}i.quad(-1.1,1.5,6.04,1.1,1.5,6.04,1.1,2.8,6.04,-1.1,2.8,6.04,s,.3);for(const a of[-1.3,1.05])for(const l of[-4.2,3.6])i.box(a,0,l,a+.25,.9,l+.9,r);for(const a of[-1,.7])i.quad(a,.6,6.05,a+.3,.6,6.05,a+.3,.85,6.05,a,.85,6.05,it(16776166),2.2);return i.build()}const ol=24.2,vi=6;function ou(i){const t=new xe,e=23.4,n=1.42,s=it(13488596),r=it(10330790),a=it(1843753),l=it(15909424),o=it(2763822),c=it(2310287);t.box(-n,.95,-e/2,n,3.7,e/2,s,r),t.box(-n+.2,.2,-e/2+1.4,n-.2,.95,e/2-1.4,o,null),t.box(-.5,3.7,-e/2+3,.5,4,e/2-3,r);for(const h of[-1,1]){const f=h*(n+.02),d=(u,p,x,m,g=a,_=0)=>{h>0?t.quad(f,x,p,f,x,u,f,m,u,f,m,p,g,_):t.quad(f,x,u,f,x,p,f,m,p,f,m,u,g,_)};d(-e/2+.3,e/2-.3,1.45,1.62,c);for(let u=0;u<7;u++){const p=-e/2+2+u*2.9;d(p,p+2.1,2,2.95,a,.75)}for(const u of[-6.4,5])d(u,u+1.4,1,3.1,l)}if(i){const h=e/2+.02;t.quad(-n,.95,h,n,.95,h,n,2.15,h,-n,2.15,h,l),t.quad(-n+.15,2.2,h,n-.15,2.2,h,n-.15,3.35,h,-n+.15,3.35,h,a,.2);for(const f of[-1.05,.7])t.quad(f,1.25,h+.01,f+.35,1.25,h+.01,f+.35,1.5,h+.01,f,1.5,h+.01,it(16776166),2.4)}return t.build()}class Dx{constructor(t,e,n,s,r=()=>!1,a=()=>!1){ct(this,"group",new $e);ct(this,"vehicles",[]);ct(this,"carMesh");ct(this,"busMesh");ct(this,"carCount",0);ct(this,"trains",[]);ct(this,"midMesh");ct(this,"cabMesh");ct(this,"tmpM",new ie);ct(this,"tmpQ",new un);ct(this,"tmpP",new Y);ct(this,"up",new Y(0,1,0));ct(this,"one",new Y(1,1,1));ct(this,"zero",new Y(0,0,0));ct(this,"at",{x:0,y:0,z:0,tx:0,tz:0});ct(this,"at2",{x:0,y:0,z:0,tx:0,tz:0});this.town=t,this.hf=e,this.isClear=r,this.noParking=a,this.group.name="life";const l=Qi();this.addParkedCars(l,s),this.addTraffic(l,n),this.addTrains(l),this.addStreetLights(n),this.update(0)}addParkedCars(t,e){const n=this.town.cars,s=n.length/Ps,r=new ni(jh(),t,s),a=new Lt;let l=0;for(let o=0;o<s;o++){const c=n[o*Ps]/4,h=n[o*Ps+1]/4;if(this.isClear(c,h)||this.noParking(c,h))continue;const f=e.nearest(c,h,4.4)!==null;this.tmpQ.setFromAxisAngle(this.up,n[o*Ps+2]/10*(Math.PI/180)),r.setMatrixAt(l,this.tmpM.compose(this.tmpP.set(c,this.hf.yAt(c,h)+(f?.24:.03),h),this.tmpQ,this.one)),r.setColorAt(l++,a.set(Yr[(n[o*Ps+3]*7+o)%Yr.length]))}r.count=l,r.castShadow=!0,r.computeBoundingSphere(),this.group.add(r)}addTraffic(t,e){const n=Cx(e);if(!n.length)return;const s=Ki(4105),r=[],a=[];for(const o of n){const c=o.cls===0?20:o.cls===1?12:8,h=Math.round(o.length/1e3*c*(o.oneWay?1:1.6)),f=Math.max(1,Math.round((o.oneWay?o.width:o.width/2)/3.3));for(let d=0;d<h;d++){const u=Math.floor(s()*f),p=o.oneWay?((u+.5)/f-.5)*(o.width-.8):(u+.5)/f*(o.width/2-.3),x=o.cls===0?13:o.cls===1?11:9,m={route:o,s:s()*o.length,dir:o.oneWay||s()<.5?1:-1,speed:x+s()*4,lane:p};(o.name==="Beaudesert Road"||o.name==="Ipswich Road")&&s()<.045?(m.speed=10+s()*2,o.oneWay&&(m.lane=(.5-.5/f)*(o.width-.8)),a.push(m)):r.push(m)}}this.vehicles=r.concat(a),this.carCount=r.length;const l=new Lt;if(r.length){const o=this.carMesh=new ni(jh(),t,r.length);o.instanceMatrix.setUsage(er),o.frustumCulled=!1;for(let c=0;c<r.length;c++)o.setColorAt(c,l.set(Yr[Math.floor(s()*Yr.length)]));o.castShadow=!0,this.group.add(o)}if(a.length){const o=this.busMesh=new ni(Px(),t,a.length);o.instanceMatrix.setUsage(er),o.frustumCulled=!1,o.castShadow=!0,this.group.add(o)}}addTrains(t){const e=this.town.trainRoutes.map(r=>sl(r,this.hf)).filter(r=>r.length>600);if(!e.length)return;const n=[!0];if(e.length>1){const r=e[0],a=e[1];ns(r,r.length/2,this.at);let l=1/0,o=0,c=1;for(let h=0;h<a.cum.length;h++){const f=a.pts[h*3]-this.at.x,d=a.pts[h*3+2]-this.at.z,u=Math.hypot(f,d);if(u<l){l=u,o=f*-this.at.tz+d*this.at.tx;const p=Math.min(h+1,a.cum.length-1),x=Math.max(h-1,0);c=(a.pts[p*3]-a.pts[x*3])*this.at.tx+(a.pts[p*3+2]-a.pts[x*3+2])*this.at.tz}}n[0]=o>0,n[1]=n[0]?c<0:c>0}const s=vi*ol;e.forEach((r,a)=>{const l=n[a]?r:Lx(r),o=[];for(const c of this.town.stations){const h=c.p[0]/10,f=c.p[1]/10;let d=70,u=-1;for(let p=0;p<l.cum.length;p++){const x=Math.hypot(l.pts[p*3]-h,l.pts[p*3+2]-f);x<d&&(d=x,u=l.cum[p])}u>s/2+10&&u<l.length-10&&o.push(u+s/2)}o.sort((c,h)=>c-h),this.trains.push({track:l,stops:o,s:l.length*(a===0?.28:.62),v:16,dwell:0,next:0})});for(const r of this.trains)r.next=r.stops.findIndex(a=>a>r.s+150);this.midMesh=new ni(ou(!1),t,this.trains.length*(vi-2)),this.cabMesh=new ni(ou(!0),t,this.trains.length*2);for(const r of[this.midMesh,this.cabMesh])r.instanceMatrix.setUsage(er),r.frustumCulled=!1,r.castShadow=!0,this.group.add(r)}addStreetLights(t){const e=[];for(const r of t){if(r.flags&au)continue;const a=(r.flags&al)!==0,l=r.cls<=1?46:r.cls===2?60:105,o=r.pts.length/3;let c=l*.5,h=1;for(let f=1;f<o;f++){const d=r.pts[f*3-3],u=r.pts[f*3-1],p=r.pts[f*3],x=r.pts[f*3+1],m=r.pts[f*3+2],g=Math.hypot(p-d,m-u);if(c+=g,c<l)continue;c=0,h=a?-1:-h;const _=(p-d)/(g||1),M=(m-u)/(g||1),S=r.width/2+1.4,y=p-M*S*h,E=m+_*S*h;!this.hf.inside(y,E,12)||this.isClear(y,E)||e.push(y,Math.max(this.hf.yAt(y,E),x-.4),E,Math.atan2(M*h,-_*h))}}const{lights:n,pools:s}=Sx(e,this.hf);this.group.add(n,s)}update(t){const{at:e,at2:n}=this;if(this.vehicles.forEach((r,a)=>{const l=r.route;r.s+=r.dir*r.speed*t,r.s>l.length&&(r.s-=l.length),r.s<0&&(r.s+=l.length),ns(l,r.s,e);const o=e.tx*r.dir,c=e.tz*r.dir;this.tmpQ.setFromAxisAngle(this.up,Math.atan2(o,c)),this.tmpM.compose(this.tmpP.set(e.x+c*r.lane,e.y+.03,e.z-o*r.lane),this.tmpQ,this.one),a<this.carCount?this.carMesh.setMatrixAt(a,this.tmpM):this.busMesh.setMatrixAt(a-this.carCount,this.tmpM)}),this.carMesh&&(this.carMesh.instanceMatrix.needsUpdate=!0),this.busMesh&&(this.busMesh.instanceMatrix.needsUpdate=!0),!this.midMesh||!this.cabMesh)return;const s=vi*ol;this.trains.forEach((r,a)=>{if(r.dwell>0)r.dwell-=t;else{const o=(r.next>=0&&r.next<r.stops.length?r.stops[r.next]:1/0)-r.s;o<.4?(r.v=0,r.dwell=14,r.next++):o<r.v*r.v/1.7+2?r.v=Math.max(.8,Math.sqrt(1.7*o)):r.v=Math.min(19,r.v+.75*t),r.s+=r.v*t,r.s-s>r.track.length&&(r.s=0,r.next=0,r.v=15)}for(let l=0;l<vi;l++){const o=r.s-(l+.5)*ol,c=l===0||l===vi-1,h=c?this.cabMesh:this.midMesh,f=c?a*2+(l===0?0:1):a*(vi-2)+l-1;if(o<8||o>r.track.length-8){h.setMatrixAt(f,this.tmpM.compose(this.zero,this.tmpQ.identity(),this.zero));continue}ns(r.track,o+8,e),ns(r.track,o-8,n);const d=Math.atan2(e.x-n.x,e.z-n.z)+(l===vi-1?Math.PI:0);this.tmpQ.setFromAxisAngle(this.up,d),h.setMatrixAt(f,this.tmpM.compose(this.tmpP.set((e.x+n.x)/2,(e.y+n.y)/2+Zr,(e.z+n.z)/2),this.tmpQ,this.one))}}),this.midMesh.instanceMatrix.needsUpdate=!0,this.cabMesh.instanceMatrix.needsUpdate=!0}}function Lx(i){const t=i.cum.length,e=new Float32Array(t*3),n=new Float32Array(t);for(let s=0;s<t;s++)e.set(i.pts.subarray((t-1-s)*3,(t-1-s)*3+3),s*3),n[s]=i.length-i.cum[t-1-s];return{pts:e,cum:n,length:i.length}}const Ix=[{id:"shops",name:"Moorvale shops",kind:"landmark",lat:-27.53289,lon:153.02479,blurb:"Moorooka's main street: the shops and cafes along Beaudesert Road, around Moorvale Lane.",view:[420,58,-24],priority:1,lift:24},{id:"square",name:"Moorooka Square",kind:"landmark",lat:-27.53092,lon:153.02368,blurb:"The shopping centre at Beaudesert Road and Durack Street, modelled in extra detail. Its outline and heights are surveyed. The corner frontage (white canopy, brick planters, pylon) and the supermarket entry are fitted from street photographs taken in 2026: the corner wing is newer than the survey, so its position is approximate. The sides away from Beaudesert Road are a guess.",view:[115,62,68],priority:1,maxDist:2600,lift:17},{id:"station",name:"Moorooka Station",kind:"landmark",lat:-27.53566,lon:153.01392,blurb:"On the Beenleigh and Gold Coast lines, beside Ipswich Road. Trains in the model stop here.",view:[330,60,62],priority:1,lift:20},{id:"magic-mile",name:"Magic Mile",kind:"landmark",lat:-27.53208,lon:153.01684,blurb:"Ipswich Road through Moorooka, long known as the Magic Mile of Motors for its car yards. The cars standing in the yards are generated.",view:[520,60,35],priority:2,lift:22},{id:"6-beaudesert",name:"6 Beaudesert Road",kind:"landmark",lat:-27.5256631,lon:153.0234391,blurb:"A high-set house on a 1,348 square metre block near the Ipswich Road junction, modelled in extra detail. The roof outline, its height and colour are surveyed; the fences, paths, steps, garden boxes and clothes hoist are placed from the aerial photograph. Wall colour, windows and doors are a guess.",view:[52,52,-105],priority:2,maxDist:1500,lift:13},{id:"clapham",name:"Clapham Rail Yard",kind:"landmark",lat:-27.5312,lon:153.0132,blurb:"The rail yard between Yeerongpilly and Moorooka stations, on the western edge of the suburb.",view:[640,58,80],priority:3,maxDist:3600,lift:18},{id:"school",name:"Moorooka State School",kind:"landmark",lat:-27.53569,lon:153.02398,blurb:"The state primary school, between Beaudesert Road and Sherley Street.",view:[360,58,10],priority:3,maxDist:2600,lift:18},{id:"alexander",name:"Alexander Park",kind:"nature",lat:-27.53889,lon:153.02367,blurb:"Sports fields beside Beaudesert Road, south of the school.",view:[420,58,-15],priority:4,maxDist:2600,lift:14},{id:"peggs",name:"Pegg's Park",kind:"nature",lat:-27.53231,lon:153.0312,blurb:"Parkland along Vendale Avenue on the eastern side of the suburb.",view:[420,58,20],priority:4,maxDist:2600,lift:14},{id:"koala",name:"Koala Park",kind:"nature",lat:-27.53056,lon:153.02808,blurb:"A long green corridor with playing fields between Vendale Avenue and the houses.",view:[420,60,30],priority:5,maxDist:2e3,lift:14},{id:"community",name:"Moorooka Community Centre",kind:"landmark",lat:-27.53555,lon:153.02088,blurb:"The community hall, west of the school.",view:[300,60,-10],priority:6,maxDist:1400,lift:14},{id:"st-brendans",name:"St Brendan's Primary School",kind:"landmark",lat:-27.53747,lon:153.01931,blurb:"Catholic primary school on Hawtree Street, next to the church.",view:[320,60,15],priority:6,maxDist:1600,lift:15},{id:"post",name:"Moorooka Post Shop",kind:"landmark",lat:-27.5317,lon:153.02369,blurb:"The post office, at the northern end of the shops.",view:[260,60,-20],priority:7,maxDist:900,lift:14},{id:"uniting",name:"Uniting Church",kind:"landmark",lat:-27.53339,lon:153.02759,blurb:"Moorooka's Uniting Church, a few streets east of the shops.",view:[280,60,10],priority:7,maxDist:1e3,lift:14},{id:"stimpson",name:"Stimpson Park",kind:"nature",lat:-27.52648,lon:153.02218,blurb:"A park beside Ipswich Road at the northern tip of the suburb.",view:[360,58,20],priority:6,maxDist:1600,lift:13},{id:"moolabin",name:"Moolabin Park",kind:"nature",lat:-27.52852,lon:153.02564,blurb:"The first of the parks strung along Vendale Avenue.",view:[340,58,15],priority:6,maxDist:1500,lift:13},{id:"veterans",name:"Veterans Park",kind:"nature",lat:-27.53974,lon:153.01694,blurb:"A park on Anson Street, in the south-west of the suburb.",view:[340,58,25],priority:6,maxDist:1500,lift:13},{id:"skate",name:"Peter Scott Skate Park",kind:"landmark",lat:-27.54298,lon:153.01482,blurb:"The skate park in Muriel Avenue Park, near the creek.",view:[260,60,30],priority:6,maxDist:1400,lift:12},{id:"toohey",name:"Toohey Forest",kind:"nature",lat:-27.53512,lon:153.03668,blurb:"Bushland on the ridge along the eastern edge of the suburb. The highest ground in the model, about 125 metres above sea level, is here.",view:[1100,60,-60],priority:2,lift:34},{id:"creek",name:"Rocky Water Holes Creek",kind:"water",lat:-27.54414,lon:153.01554,blurb:"The creek along Moorooka's southern boundary, on its way to Oxley Creek and the Brisbane River.",view:[620,58,20],priority:5,maxDist:3200},{id:"rocklea",name:"Rocklea Station",kind:"landmark",lat:-27.54472,lon:153.01419,blurb:"The next station south, just over the creek in Rocklea.",view:[380,60,40],priority:5,maxDist:2600,lift:16},{id:"yeerongpilly",name:"Yeerongpilly Station",kind:"landmark",lat:-27.52485,lon:153.01416,blurb:"The next station north, where the Tennyson branch leaves the main line.",view:[420,60,70],priority:5,maxDist:2600,lift:16},{id:"river",name:"Brisbane River",kind:"water",lat:-27.5214,lon:153.0102,blurb:"The Tennyson reach of the river touches the north-west corner of the model.",view:[900,55,40],priority:4}],lu=[-27.531134,153.023185],Nx=[-27.5307274,153.0230606],Ux=[-27.5310763,153.0237468],cu=[[-27.5307394,153.023705],[-27.5310127,153.0237606]],Ns=[78,0,0,0,0,66.5,79.3,66.5,79.3,42.5,83.4,42.5,83.4,47.9,88.2,47.9,88.2,28.1,100.2,28.1,100.2,22.1],Fx=[75.2,0,0,0,0,66.5,79.3,66.5,79.3,42.5,83.4,42.5,83.4,47.9,88.2,47.9,88.2,26.3,98.4,26.3,98.4,23.2],Ox=[66,0,75.2,0,98.4,23.2,98.4,26.3,88.2,26.3,88.2,47.9,83.4,47.9,83.4,42.5,79.3,42.5,79.3,66.5,66,66.5],zt=39.1,sn=zt+5,$r=zt+5.85,Us=5.2,Fs=[11.4,14.6],Hn=i=>37.45+(i>0?.036:.02)*i,Os=it(14934231),fe=it(15987437),zs=it(15526627),Bs=it(13619146),ll=it(11818813),cl=it(4864816),zx=it(2832965),ks=it(1976109),Gs=it(3817026),_n=it(10133668),ri=it(3817026),Hs=it(13352877),Kr=it(13353645),ai=it(12434098),hu=it(1780811),Jr=it(9409688),Qr=it(4164148),Bx=it(9424476),hl=it(3104556),kx=it(9054780);function oi(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);const s=new yr(n);return s.colorSpace=Ee,s.anisotropy=4,s}const xn="Arial, Helvetica, sans-serif";function ul(i,t,e,n){i.lineWidth=n*.42,i.strokeStyle="#1c9a48",i.beginPath(),i.arc(t-n*.3,e+n*.12,n*.55,0,Math.PI*2),i.stroke(),i.strokeStyle="#7cc242",i.beginPath(),i.arc(t+n*.3,e-n*.12,n*.55,0,Math.PI*2),i.stroke()}const li={square:()=>oi(768,224,(i,t,e)=>{const n=["#f2c230","#2f6fb6","#e2457a","#1f2a55","#f08a2a","#39a7a0"],r=e/2,a=78;for(let l=0;l<6;l++){const o=l/6*Math.PI*2-.5,c=(l+1)/6*Math.PI*2-.5;i.fillStyle=n[l],i.beginPath(),i.moveTo(100+8*Math.cos(o+1),r+8*Math.sin(o+1)),i.lineTo(100+a*Math.cos(o),r+a*Math.sin(o)),i.lineTo(100+a*Math.cos(c),r+a*Math.sin(c)),i.fill()}i.fillStyle="#23201e",i.font=`900 88px ${xn}`,i.textBaseline="middle",i.fillText("MOOROOKA",205,e*.29,t-215),i.fillText("SQUARE",240,e*.74,t-300)}),dental:()=>oi(768,256,(i,t,e)=>{i.fillStyle="#1f4fb5",i.beginPath(),i.arc(110,e/2,96,0,Math.PI*2),i.fill(),i.fillStyle="#ffffff",i.beginPath(),i.moveTo(62,96),i.bezierCurveTo(62,56,110,78,110,78),i.bezierCurveTo(110,78,158,56,158,96),i.bezierCurveTo(158,150,142,196,130,196),i.bezierCurveTo(120,196,122,150,110,150),i.bezierCurveTo(98,150,100,196,90,196),i.bezierCurveTo(78,196,62,150,62,96),i.fill(),i.fillStyle="#1f4fb5",i.textBaseline="middle",i.font=`700 64px ${xn}`,i.fillText("moorooka SQUARE",230,70,t-240),i.font=`900 120px ${xn}`,i.fillText("D E N T A L",228,180,t-236)}),medical:()=>oi(768,256,(i,t,e)=>{i.fillStyle="#5aa9e6",i.fillRect(74,28,76,200),i.fillRect(12,90,200,76),i.fillStyle="#ffffff",i.beginPath(),i.arc(112,e/2,26,0,Math.PI*2),i.fill(),i.fillStyle="#1d2f6b",i.textBaseline="middle",i.font=`900 92px ${xn}`,i.fillText("MOOROOKA",236,78,t-246),i.fillText("MEDICAL",236,182,t-300)}),pylonDental:()=>oi(512,160,(i,t,e)=>{i.fillStyle="#1c2f6e",i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.beginPath(),i.arc(70,e/2,44,0,Math.PI*2),i.fill(),i.textBaseline="middle",i.font=`700 40px ${xn}`,i.fillText("moorooka SQUARE",140,48,t-160),i.font=`900 72px ${xn}`,i.fillText("DENTAL",140,110,t-160)}),parking:()=>oi(512,160,(i,t,e)=>{i.fillStyle="#1668c9",i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.textBaseline="middle",i.font=`900 124px ${xn}`,i.fillText("P",150,e/2+6),i.fillRect(256,e/2-13,80,26),i.beginPath(),i.moveTo(330,e/2-42),i.lineTo(382,e/2),i.lineTo(330,e/2+42),i.fill()}),boot:()=>oi(512,160,(i,t,e)=>{i.fillStyle="#178a3c",i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.beginPath(),i.arc(74,62,44,0,Math.PI*2),i.fill(),ul(i,74,62,30),i.fillStyle="#ffffff",i.textBaseline="middle",i.font=`700 30px ${xn}`,i.fillText("woolworths",14,134,130),i.font=`700 56px ${xn}`,i.fillText("Direct",300,52,190),i.fillText("to boot",300,112,190),i.fillRect(178,44,96,62),i.fillStyle="#178a3c",i.fillRect(186,52,80,30)}),tower:()=>oi(512,400,(i,t,e)=>{i.fillStyle="#34383b",i.fillRect(0,0,t,e),ul(i,t/2,150,118),i.fillStyle="#ffffff",i.textBaseline="middle",i.textAlign="center",i.font=`400 88px ${xn}`,i.fillText("woolworths",t/2,336,t-40)}),entry:()=>oi(1024,256,(i,t,e)=>{i.fillStyle="#ffffff",i.textBaseline="middle",i.font=`400 170px ${xn}`,i.fillText("woolworths",20,e/2+14,700),ul(i,880,e/2,104)})};function uu(i){const t=new Qe({map:i,alphaTest:.4,roughness:.8,metalness:0,side:ye,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});return t.onBeforeCompile=e=>{e.uniforms.uNight=Ji,e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * uNight * 0.7;`)},t.customProgramCacheKey=()=>"moorooka-sign",t}function du(i){const t=y=>Gn(i,y[0],y[1]),e=t(Nx),n=t(Ux),s=Math.hypot(n[0]-e[0],n[1]-e[1]),r=(n[0]-e[0])/s,a=(n[1]-e[1])/s,l=(y,E)=>[e[0]+y*r-E*a,e[1]+y*a+E*r],o=t(cu[0]),c=t(cu[1]),h=Math.hypot(c[0]-o[0],c[1]-o[1]),f=(c[0]-o[0])/h,d=(c[1]-o[1])/h,u=d,p=-f,x=o[0]-10*u,m=o[1]-10*p;return{nw:e,centre:l,wing:(y,E)=>[x+y*u+E*f,m+y*p+E*d],toWing:(y,E)=>[(y-x)*u+(E-m)*p,(y-x)*f+(E-m)*d],toCentre:(y,E)=>[(y-e[0])*r+(E-e[1])*a,-(y-e[0])*a+(E-e[1])*r],south:y=>-((x-n[0])*a-(m-n[1])*r+y*(u*a-p*r))/(f*a-d*r),centreHeading:Math.atan2(-a,r),wingHeading:Math.atan2(-p,u),origin:[x,m]}}function Gx(i){const t=du(i);return(e,n)=>{const[s,r]=t.toWing(e,n);if(s>-14.5&&s<10.4&&r>-11&&r<40)return!0;const[a,l]=t.toCentre(e,n);if(a<-3||a>106||l<-3||l>70)return!1;let o=!1;const c=Ns.length/2;for(let h=0,f=c-1;h<c;f=h++){const d=Ns[h*2],u=Ns[h*2+1],p=Ns[f*2],x=Ns[f*2+1];u>l!=x>l&&a<(p-d)*(l-u)/(x-u)+d&&(o=!o);const m=Math.max(0,Math.min(1,((a-d)*(p-d)+(l-u)*(x-u))/((p-d)**2+(x-u)**2||1)));if(Math.hypot(a-d-(p-d)*m,l-u-(x-u)*m)<3)return!0}return o}}function Hx(i,t,e){const n=new $e;if(n.name="square",!e)return n;const s=du(i),r=new xe,a=Ki(410500),l=[],o=e.eave,c=e.ridge,h=o+1.7,f=Math.min(31,o-13);let d=()=>{};const u=(C,I,U)=>{d=()=>r.frame(C,0,I,U),d()},p=()=>u(s.nw[0],s.nw[1],s.centreHeading),x=()=>u(s.origin[0],s.origin[1],s.wingHeading),m=(C,I)=>{const U=Math.hypot(I[0]-C[0],I[1]-C[1]);return u(C[0],C[1],Math.atan2(-(I[1]-C[1])/U,(I[0]-C[0])/U)),U},g=(C,I=1.5)=>t.yAt(r.wx(C,I),r.wz(C,I)),_=(C,I,U,W,R,$)=>l.push({corners:[r.wx(C,R),U,r.wz(C,R),r.wx(I,R),U,r.wz(I,R),r.wx(I,R),W,r.wz(I,R),r.wx(C,R),W,r.wz(C,R)],tex:$}),M=(C,I)=>{(C[5]-C[2])*(C[6]-C[0])-(C[3]-C[0])*(C[8]-C[2])>0?r.quad(C[0],C[1],C[2],C[3],C[4],C[5],C[6],C[7],C[8],C[9],C[10],C[11],I):r.quad(C[0],C[1],C[2],C[9],C[10],C[11],C[6],C[7],C[8],C[3],C[4],C[5],I)},S=(C,I,U,W,R,$,X=0,rt=.05)=>{if(W-U<.05||I-C<.05)return;const at=Math.max(1,Math.round((I-C)/R));for(let ht=0;ht<at;ht++)r.box(C+(I-C)*ht/at,U,X,C+(I-C)*(ht+1)/at,W,rt,ht%2?qt($,.955):$,null)},y=(C,I,U,W,R=zx,$=.6)=>{r.quad(C,U,.06,I,U,.06,I,W,.06,C,W,.06,R,$);const X=Math.max(1,Math.round((I-C)/1.4));for(let rt=0;rt<=X;rt++){const at=C+(I-C)*rt/X;r.box(at-.04,U,.06,at+.04,W,.11,Gs,null)}r.box(C,W-.1,.06,I,W,.12,Gs),r.box(C,U,.06,I,U+.12,.12,Gs)},E=(C,I,U,W,R)=>{r.box(C,U,0,I,U+.16,W,qt(fe,.9),Bs,qt(fe,.86)),r.box(C,U-.04,W-.1,I,U+.46,W,fe);for(const $ of[C,I-.1])r.box($,U-.04,0,$+.1,U+.46,W,fe);for(const $ of[C+.7,I-.7])r.quad($-.04,R,.06,$+.04,R,.06,$+.04,U+.46,W-.25,$-.04,U+.46,W-.25,ri)},v=(C,I,U,W,R,$,X=qt(ll,.9))=>{for(let rt=I,at=0;rt<R-.01;rt+=.26,at++)r.box(C,rt,U,W,Math.min(rt+.26,R),$,at%2?qt(ll,.94):ll,null);X&&r.quad(C,R,$,W,R,$,W,R,U,C,R,U,X)},b=(C,I,U,W,R=Qr,$=Bx)=>{const X=r.wx(C,U),rt=r.wz(C,U),at=a()*Math.PI;for(let ht=0;ht<6;ht++){r.frame(X,I,rt,at+ht/6*Math.PI*2);const wt=.75+a()*.4;r.blob(0,W*.48*wt,W*.2+ht%2*W*.1,W*.2,W*.5*wt,W*.06,6,4,R,$)}d()},D=(C,I,U,W,R=hl,$=Qr)=>r.blob(C,I+W*.7,U,W,W*.8,W,6,4,R,$);p(),r.walls(Fx,f,o,Os);const A=66,N=66.5,F=A/2,B=N/2,L=3.5,J=o+3,k=(C,I)=>o+(J-o)*Math.min(1,(1-Math.max(Math.abs(C-F)/F,Math.abs(I-B)/B))/(1-L/F));M([0,o,0,A,o,0,F+L,J,B-L,F-L,J,B-L],e.roof),M([A,o,0,A,o,N,F+L,J,B+L,F+L,J,B-L],qt(e.roof,.97)),M([A,o,N,0,o,N,F-L,J,B+L,F+L,J,B+L],e.roof),M([0,o,N,0,o,0,F-L,J,B-L,F-L,J,B+L],qt(e.roof,.97)),r.box(F-L,J,B-L,F+L,J+.8,B+L,qt(Os,.9),it(8363952));for(const[C,I,U,W]of[[6,12,13,23],[6,12,26,33],[5,10,39,45]])M([C,k(C,U)+.12,U,I,k(I,U)+.12,U,I,k(I,W)+.12,W,C,k(C,W)+.12,W],hu);const Z=o-.35;r.cap(Ox,Z,Bs),r.quad(A,Z,0,A,Z,N,A,o,N,A,o,0,Os);for(const[C,I,U,W]of[[67.5,77,30,44],[67.5,77,47,62],[80.5,87,30,41]])r.box(C,Z,U,I,Z+.16,W,_n,hu);for(const[C,I]of[[70,12],[73.5,17],[69,22],[84,44.5],[72,64],[91,25]])r.box(C,Z,I,C+2.2,Z+1.1,I+1.3,Jr,qt(Jr,.85));const G=c-.6;r.box(70.5,Z,4,75.5,G,5.1,ri);for(let C=Z;C<G-1.4;C+=.5)r.box(70.5,C,5.1,75.5,C+.3,8.2,qt(ri,1.25),null);r.box(70.5,G-1.6,5.1,75.5,G-1.4,8.2,ri),m(s.centre(75.5,4),s.centre(70.5,4)),_(.25,4.75,G-3.9,G-.25,.04,li.tower());const O=s.centre(98.4,23.2),H=s.centre(98.4,26.3),Q=s.centre(75.2,0);let q=m(O,Q);r.box(0,o,-.3,q,h,0,fe,fe),y(.3,3.4,g(1.8),g(1.8)+3.6,ks);{const C=g(2,1);v(.6,C-.5,.25,3.8,C+.8,1.6,cl);for(const I of[1.2,2.2,3.2])b(I,C+.75,.9,.8);r.box(-.5,C,.3,.3,C+1.9,1.3,it(9067066));for(let I=0;I<4;I++)r.box(4.3+I*.5,C+.25,.3,4.7+I*.5,C+1,.9,_n,null)}const xt=(C,I,U)=>{for(let W=C;W<I;W+=3){const R=Math.min(W+3,I),$=g(W,1.4)+.3,X=g(R,1.4)+.3;M([W,$,0,W,$,U,R,X,U,R,X,0],Kr),r.quad(W,$-.6,U,R,X-.6,U,R,X,U,W,$,U,ai)}};xt(-1,q,2.8);const j=7,ot=(q-j-3.6)/3;for(let C=0;C<3;C++){const I=3.6+C*ot,U=I+ot,W=g((I+U)/2);r.box(I,W-.6,0,U,W+.05,.08,qt(Os,.8),null),y(I+.35,U-.35,W+.05,W+3),E(I+.15,U-.15,W+3.25,2.1,Math.min(h-.3,W+5.3)),S(I,U,W+3.75,h,1.3,fe)}const ut=zt+4;y(q-j,q-.2,g(q-4)-.2,ut,ks,.5),r.box(q-j,ut,0,q,ut+.5,.35,ri),S(q-j,q,ut+.5,h,1.3,fe),q=m(Q,s.nw),y(.2,6.6,zt-1.2,ut,ks,.5),r.box(0,ut,0,6.8,ut+.5,.35,ri);{const I=g(48,3);S(24.2,q,I+4.1,o,6,zs),y(31,57,I+.1,I+3.1),r.box(27,I+3.5,0,69,I+3.7,2.6,qt(fe,.92),Bs,qt(fe,.85)),r.box(27,I+3.45,2.5,69,I+3.95,2.6,fe);for(let U=28;U<=68;U+=8){const W=t.yAt(r.wx(U,2.4),r.wz(U,2.4))-.2;r.cyl(U,W,2.4,.09,.09,I+3.7-W,5,_n)}}const vt=s.centre(0,66.5),mt=s.centre(79.3,66.5);q=m(s.nw,vt),S(0,q,g(q/2)+.3,o,6,zs);for(const C of[48,55])r.box(C,g(C+2)-.3,0,C+4,g(C+2)+4,.1,_n,null);q=m(vt,mt),S(0,q,g(q/2)+.3,o,6,zs);{const C=g(22,3);for(let I=11;I<33;I+=5.5)r.box(I,C-.5,0,I+4.2,C+4.2,.1,_n,null);r.box(8,C+5,0,36,C+5.25,5,qt(fe,.92),Bs,qt(fe,.82));for(const I of[8.3,17.5,26.5,35.7])r.cyl(I,C-1,4.7,.11,.11,6,5,_n)}const Pt=s.centre(79.3,42.5),Jt=s.centre(88.2,47.9),st=s.centre(88.2,26.3);q=m(mt,Pt),S(0,q,g(q/2)+.3,o,6,zs),r.box(4,g(5)-.2,0,5.1,g(5)+2.1,.08,Gs,null),q=m(Jt,st),r.box(0,o,-.3,q,h,0,fe,fe),S(0,q,g(q/2)+.3,h,1.3,fe),r.box(3,g(4)-.2,0,4.1,g(4)+2.1,.08,Gs,null),q=m(st,H),r.box(0,o,-.3,q,h,0,fe,fe);{const C=g(4);y(.5,5.4,C+.05,C+3),E(.3,5.6,C+3.25,1.9,Math.min(h-.3,C+5.3)),S(0,5.8,C+3.75,h,1.3,fe),y(6,q-.2,g(8)-.1,g(8)+3.6,ks),xt(0,q+1,2.2);for(const I of[6.8,8.6])b(I,g(I,2.6)+.3,2.6,1.5,kx,it(11880538))}q=m(H,O),r.box(0,o,-.3,q,h,0,fe,fe),y(.2,q-.2,g(3)-.1,g(3)+3.6,ks),p();const ft=t.yAt(O[0],O[1]),Tt=95.9,Ot=23.8,Gt=4.4,oe=-50*Math.PI/180,He=100*Math.PI/180,re=16,Ie=ft+3.75,he=h+.8,Se=(C,I=Gt)=>{const U=oe+(He-oe)*C/re;return[Tt+I*Math.cos(U),Ot+I*Math.sin(U)]};for(let C=0;C<re;C++){const[I,U]=Se(C),[W,R]=Se(C+1),[$,X]=Se(C,Gt-.14),[rt,at]=Se(C+1,Gt-.14),ht=C%2?qt(Hs,.955):Hs;r.quad(W,Ie,R,I,Ie,U,I,he,U,W,he,R,ht),r.quad($,Ie,X,rt,Ie,at,rt,he,at,$,he,X,qt(Hs,.7)),M([I,he,U,W,he,R,rt,he,at,$,he,X],qt(Hs,.85))}const Ve=[];for(let C=0;C<=re;C++)Ve.push(...Se(C,Gt-.14));const[ze,V]=Se(0,Gt-.14);Ve.push(Se(re,Gt-.14)[0],26.3,98.4,26.3,98.4,23.2,(ze+V+75.2)/2,(ze+V-75.2)/2),r.cap(Ve,Ie+.02,ri);const We=[];for(let C=0;C<=re;C++)We.push(...Se(C,Gt+.9));We.push(Se(re)[0],26.3,98.4,26.3,98.4,23.2,(ze+V+75.2)/2,(ze+V-75.2)/2),r.cap(We,ft+.32,Kr);{const C=[101.6,c,21.4],I=[82,h+1.3,4],U=[86,h+1.3,29.6],W=[77,h+.5,13],R=it(4935765),$=.32;for(const[X,rt,at]of[[C,I,W],[C,W,U]])M([X[0],X[1],X[2],rt[0],rt[1],rt[2],at[0],at[1],at[2],at[0],at[1],at[2]],R),r.tri(X[0],X[1]-$,X[2],rt[0],rt[1]-$,rt[2],at[0],at[1]-$,at[2],qt(R,1.6));for(const[X,rt]of[[C,I],[I,W],[W,U],[U,C]])r.quad(X[0],X[1]-$,X[2],rt[0],rt[1]-$,rt[2],rt[0],rt[1],rt[2],X[0],X[1],X[2],qt(R,.9));for(const[X,rt,at]of[[99.3,25.5,c-1.2],[98.9,20.6,c-1.5],[94.2,27.9,h+2.2]]){const[ht,wt]=s.centre(X,rt);r.cyl(X,t.yAt(ht,wt)-.3,rt,.17,.17,at-t.yAt(ht,wt)+.3,6,ri)}}const pe=li.entry(),le={pos:[],uv:[]};{const C=62*Math.PI/180,I=-34*Math.PI/180,U=14,W=Ie+.8,R=Ie+2.4;for(let $=0;$<U;$++){const X=Nt=>{const Vt=C+(I-C)*Nt/U;return s.centre(Tt+(Gt+.05)*Math.cos(Vt),Ot+(Gt+.05)*Math.sin(Vt))},[rt,at]=X($),[ht,wt]=X($+1),Ht=$/U,pt=($+1)/U;le.pos.push(rt,W,at,ht,W,wt,ht,R,wt,rt,W,at,ht,R,wt,rt,R,at),le.uv.push(Ht,0,pt,0,pt,1,Ht,0,pt,1,Ht,1)}}x();const _t=s.south(0),ve=s.south(-13),It=s.south(5.2),Ft=-13,P=6.4;r.walls([0,0,0,_t,Ft,ve,Ft,0],f,sn,Os);const w=[Ft,0,0,0,0,-.6,P,-.6,P,It,5.2,It,Ft,ve];r.cap(w,$r,Bs),r.walls(w,sn,$r,fe),r.cap([0,-.6,P,-.6,P,It,5.2,It,0,_t],sn,qt(fe,.93));for(const[C,I]of[[-9,4],[-6,12],[-9.5,16]])r.box(C,$r,I,C+2.2,$r+1.1,I+1.3,Jr,qt(Jr,.85));for(let C=1.2;C<_t-1;C+=2.6)for(const I of[1.6,4.4])r.quad(I-.14,sn-.02,C-.14,I+.14,sn-.02,C-.14,I+.14,sn-.02,C+.14,I-.14,sn-.02,C+.14,it(16774358),3);const K=3.6;r.walls([0,-.3,K,-.3,K,s.south(K),0,_t],f,zt,ai),r.cap([0,-.3,K,-.3,K,s.south(K),0,_t],zt,Kr);for(let C=1;C<=5;C++){const I=C*Us;for(const U of[-.2,.2])r.cyl(4.3,zt,I+U,.1,.1,sn-zt,7,fe);r.cyl(1.5,zt,I+.5,.055,.055,sn-zt,5,_n)}const dt=s.south(4.3)-.4;for(const[C,I]of[[-.3,Fs[0]],[Fs[1],dt]]){v(K,f,C,5,zt+.45,I,cl);for(let U=C+.9;U<I-.6;U+=1.7+a()*.9){const W=a();Math.abs(U/Us-Math.round(U/Us))<.12||(W<.55?b(4.3,zt+.4,U,1.5+a()*1.1):W<.75?(r.cyl(4.3,zt+.4,U,.07,.05,1.3,5,it(9076076)),r.blob(4.3,zt+2.1,U,.85,.6,.85,7,4,hl,Qr)):D(4.3,zt+.4,U,.5))}for(let U=C;U<I-.2;U+=4.4){const W=Math.min(U+4.4,I),R=Hn((U+W)/2);if(!(R>zt-.65)){v(5,f,U,6.3,R+.75,W,cl);for(let $=U+.5;$<W-.3;$+=.9+a()*.5)D(5.65,R+.7,$,.28+a()*.14,hl,a()<.3?it(11122592):Qr)}}}{const[C,I]=Fs,U=Hn((C+I)/2)+.12,W=zt-U,R=Math.round(W/.168),$=(6.3-K-.3)/R;for(let X=0;X<R;X++)r.box(K+.3+$*X,f,C,K+.3+$*(X+1),zt-W*(X+1)/R,I,ai);r.box(K,f,C,K+.3,zt,I,ai);for(const X of[C+.12,(C+I)/2,I-.12]){for(const[rt,at]of[[K+.3,zt],[6.3,U]])r.box(rt-.03,at,X-.03,rt+.03,at+.95,X+.03,_n,null);r.quad(K+.3,zt+.9,X-.03,6.3,U+.9,X-.03,6.3,U+.96,X+.03,K+.3,zt+.96,X+.03,_n)}}{const C=W=>W>=-2?9.8:9.8+(W+2)*.6,I=W=>W<-.3?2.6:(W<Fs[0]||W>Fs[1])&&Hn(W)>zt-.65?5:6.3,U=It+1;for(let W=-9.5;W<U;W+=1.5){const R=Math.min(W+1.5,U),$=Hn(W)+.12,X=Hn(R)+.12;M([I(W+.01),$,W,C(W),$,W,C(R),X,R,I(W+.01),X,R],Kr),r.quad(C(W),$-1.2,W,C(R),X-1.2,R,C(R),X,R,C(W),$,W,ai)}v(2.2,f,-9.5,2.6,Hn(-5)+1.05,-.8)}v(2.6,f,-.8,4.5,sn,-.3,null),v(Ft,f,-.25,0,sn,.02,null),m(s.wing(4.5,-.8),s.wing(2.6,-.8)),r.box(.15,zt+3.8,0,1.75,zt+4.4,.05,fe),_(.15,1.75,zt+3,zt+3.7,.05,li.pylonDental()),r.box(.15,zt+2.3,0,1.75,zt+2.9,.05,fe),_(.15,1.75,zt+.8,zt+1.5,.05,li.parking()),_(.15,1.75,zt-.1,zt+.7,.05,li.boot()),q=m(s.wing(0,_t),s.wing(0,0)),y(.4,q-.4,zt,zt+2.9),r.box(0,zt+2.9,0,q,zt+3.3,.12,it(9407106)),S(.2,q-.1,zt+3.3,sn-.05,1.25,Hs,.2,.3);for(let C=1;C<=5;C++)r.box(q-C*Us-.9,zt+3,.1,q-C*Us-.82,zt+3.08,1.5,_n);_(q-19.6,q-16,zt+3.5,zt+4.7,.34,li.dental()),_(q-14.6,q-11.2,zt+3.55,zt+4.68,.34,li.medical()),q=m(s.wing(Ft,0),s.wing(Ft,ve));{const C=g(q/2,3);r.box(.4,C-.3,-.5,q-.4,zt-.6,.02,it(1777185),null);for(let I=0;I<=q;I+=q/4)r.box(I-.3,C-.5,0,I+.3,zt-.6,.12,ai,null);r.box(0,zt-.6,0,q,zt,.12,ai),S(0,q,zt,sn,1.3,zs)}q=m(s.wing(8.4,-2.8),s.wing(5.6,-4.4));{const C=Hn(-3.6)+.12;v(0,C-1,-.35,q,C+1.15,0),_(.2,q-.2,C+.14,C+1.02,.03,li.square())}x();{const C=Hn(15.6)+.12;r.box(6.9,C,15.2,7.4,C+.1,16,ai),r.box(6.95,C+.1,15.25,7.35,C+1.3,15.95,it(15855590),it(14276300)),r.box(7.35,C+.35,15.35,7.37,C+1,15.6,it(15909424),null),r.box(7.35,C+.3,15.65,7.37,C+.95,15.88,it(3108790),null);for(const[I,U,W]of[[9.2,-1.2,Math.PI],[5.4,-8.4,Math.PI*.75]]){const R=Hn(U)+.12,$=r.wx(I,U),X=r.wz(I,U);r.frame($,0,X,s.wingHeading+W),r.cyl(0,R,0,.07,.07,4.2,6,_n),r.box(-.17,R+2.9,.08,.17,R+3.95,.3,it(1776927));for(const[rt,at,ht]of[[0,14169643,0],[1,15114780,0],[2,3126359,2]]){const wt=R+3.62-rt*.32;r.quad(-.1,wt,.31,.1,wt,.31,.1,wt+.22,.31,-.1,wt+.22,.31,qt(it(at),ht?1:.45),ht)}d()}}r.frame();const lt=new Qt(r.build(),Qi());lt.castShadow=!0,lt.receiveShadow=!0,n.add(lt);for(const C of l){const I=new Re,U=C.corners;I.setAttribute("position",new se([U[0],U[1],U[2],U[3],U[4],U[5],U[6],U[7],U[8],U[0],U[1],U[2],U[6],U[7],U[8],U[9],U[10],U[11]],3)),I.setAttribute("uv",new se([0,0,1,0,1,1,0,0,1,1,0,1],2)),I.computeVertexNormals(),n.add(new Qt(I,uu(C.tex)))}const gt=new Re;return gt.setAttribute("position",new se(le.pos,3)),gt.setAttribute("uv",new se(le.uv,2)),gt.computeVertexNormals(),n.add(new Qt(gt,uu(pe))),n}function Vx(){const i=[];let t=new xe;t.cyl(0,0,0,.04,.026,.56,4,it(12168602)),ts(t,0,.72,0,.36,.3,.36,2,it(4020790),it(9086578)),ts(t,.17,.52,.1,.24,.19,.24,3,it(3757370),it(8099942)),i.push(xi(t)),t=new xe,t.cyl(0,0,0,.06,.045,.36,4,it(7034954)),ts(t,0,.62,0,.47,.4,.47,4,it(2773542),it(7973460)),i.push(xi(t)),t=new xe,t.cyl(0,0,0,.05,.035,.42,4,it(6246470)),ts(t,0,.66,0,.5,.34,.5,5,it(6114450),it(12034278)),i.push(xi(t)),t=new xe,t.cyl(0,0,0,.07,.05,.5,4,it(6969418)),ts(t,0,.7,0,.62,.26,.62,6,it(4156975),it(14831660)),i.push(xi(t)),t=new xe,t.cyl(0,0,0,.034,.026,.82,5,it(10128504));for(let e=0;e<7;e++)t.frame(0,0,0,e/7*Math.PI*2),t.blob(0,.83-e%2*.03,.13,.04,.022,.13,4,3,it(3959600),it(7972432));return t.frame(),t.blob(0,.86,0,.06,.06,.06,5,3,it(5077562)),i.push(xi(t)),t=new xe,t.cyl(0,0,0,.03,.022,.2,4,it(5194038)),t.cyl(0,.14,0,.2,.1,.3,6,it(2310186)),t.cyl(0,.4,0,.16,.07,.3,6,it(2837040)),t.cyl(0,.66,0,.11,0,.34,6,it(3627578)),i.push(xi(t)),t=new xe,ts(t,0,.45,0,.8,.5,.8,1,it(3101224),it(7774294)),i.push(xi(t)),i}function Wx(i,t,e,n=()=>!1){return S_(i.trees,Vx(),t,e,n)}const fu=1,pu={x:-150,z:-40,dist:2900,polar:54,azimuth:22},Xx={day:{shallow:9277288,deep:5003844},golden:{shallow:10127458,deep:4671290},night:{shallow:1976876,deep:593681}};function qx(i,t){const e=new xe,n=it(16765440),s=i.length/2;let r=0;for(let o=0;o<s;o++){const c=(o+1)%s,h=i[o*2]/10,f=i[o*2+1]/10,d=i[c*2]/10,u=i[c*2+1]/10,p=Math.hypot(d-h,u-f);if(p<.01)continue;const x=(d-h)/p,m=(u-f)/p;for(let g=-r;g<p;g+=15){const _=Math.max(0,g),M=Math.min(p,g+9);if(M<=_)continue;const S=Math.max(1,Math.ceil((M-_)/5));for(let y=0;y<S;y++){const E=_+(M-_)*y/S,v=_+(M-_)*(y+1)/S,b=h+x*E,D=f+m*E,A=h+x*v,N=f+m*v,F=t.yAt(b,D)+.9,B=t.yAt(A,N)+.9;e.quad(b-m*1.1,F,D+x*1.1,A-m*1.1,B,N+x*1.1,A+m*1.1,B,N-x*1.1,b+m*1.1,F,D-x*1.1,n)}}r=(r+p)%15}const a=e.build();a.deleteAttribute("glow");const l=new Qt(a,Sh(new ei({vertexColors:!0,transparent:!0,opacity:.9,side:ye,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12})));return l.name="boundary",l}class Yx extends M_{constructor(e,n,s,r){super(e,n,s,{name:"3D model of Moorooka",home:pu,intro:{...pu,dist:6400,polar:22,azimuth:-24},minDistance:22,followGround:!0,maxDistance:7e3,externalStart:[-150,720,1500,0,-.5]},r);ct(this,"water");ct(this,"life");ct(this,"boundary");ct(this,"terrain");ct(this,"model");ct(this,"aerial");ct(this,"aerialWanted",!1);ct(this,"level",0);ct(this,"boundaryOn",!0);ct(this,"flood");ct(this,"groundDetail");ct(this,"detailGrid",0);ct(this,"detailSlots",0);ct(this,"tiles",new Map);ct(this,"tilesWanted",[]);ct(this,"tilesAt",0);ct(this,"detailGround");this.options=r}async build(e,n,s){let r;try{r=await H_(this.options.assets,(b,D)=>this.cb.onProgress(b*.6,D),this.abort.signal)}catch(b){throw new Jo(b instanceof Error?b.message:"The model data could not be loaded.")}const{town:a,heights:l,ground:o}=r;this.meta=a.meta,this.level=a.meta.waterLevel*fu;const c=this.clearTest();o.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.model=o,await s(.62,"Shaping the terrain");const[h,f]=a.meta.grid,d=new jg(l,new Float32Array(h*f),h,f,a.meta.size[0],a.meta.size[1],e.step,fu),u={value:a.meta.waterLevel},p=I_(d,o,u,{title:"MOOROOKA",subtitle:"Brisbane, Queensland   ·   27.53° S  153.03° E   ·   Postcode 4105",scale:a.meta.size[0]/8010});this.terrain=p.getObjectByName("terrain").material,this.groundDetail=p.userData.detail,this.detailGrid=a.detailGrid??0,this.detailSlots=!this.options.assets.detail||n==="low"?0:n==="medium"?2:es,this.scene.add(p),this.water=B_(d,u),this.scene.add(this.water.skirt,this.water.mesh),await s(.68,"Laying out the streets");const x=C_(a,d);this.scene.add(x.group,Ax(a,d)),this.boundary=qx(a.boundary,d),this.scene.add(this.boundary),await s(.76,"Raising the buildings");const m=mx(a.meta),g=ex(a,d,[...m,this.fromLatLon(lu[0],lu[1])],c),_=gx(a.meta,d,g.reserved);this.detailGround=_.ground;const M=Gx(a.meta);if(this.scene.add(g.group,_.group,Hx(a.meta,d,g.reserved[m.length]),Mx(a,d,x.index,c,M)),n!=="low"){const b=px(a.meta);this.scene.add(_x(a,d,(D,A)=>b(D,A)||c(D,A)).group)}await s(.88,"Planting trees");const S=fx(a.meta,g.reserved),y=[];for(let b=0;b<a.trees.length;b+=Th){const D=a.trees[b]/4,A=a.trees[b+1]/4;!S(D,A)&&!M(D,A)&&!c(D,A)&&y.push(a.trees[b],a.trees[b+1],a.trees[b+2])}const E=Wx({...a,trees:Int16Array.from(y)},d,e.trees);this.scene.add(E.group),await s(.94,"Starting the traffic"),this.life=new Dx(a,d,x.paths,x.index,c,M),this.scene.add(this.life.group);const v=g_(Ix,a.meta,d);return{hf:d,atmosphere:new Kg(this.renderer,this.water,e.shadow,Xx),places:v,roadPaths:x.paths,roadIndex:x.index,info:{quality:n,buildings:g.count,buildingsInSuburb:a.counts.inside,trees:E.count,sources:a.meta.sources,places:v}}}get hasFlood(){return!!this.options.assets.flood&&!!this.options.assets.floodInfo}async setFlood(e){var r;const{flood:n,floodInfo:s}=this.options.assets;if(e&&!this.flood){if(!n||!s||!this.hf)throw new Error("This copy of the model has no flood simulation.");const a=await nl.load(this.hf,s,n,this.abort.signal);if(this.disposed)return a.dispose(),null;this.flood=a,this.scene.add(a.mesh)}return this.flood&&(this.flood.mesh.visible=e),this.invalidate(),((r=this.flood)==null?void 0:r.info)??null}floodSurfaceAt(e,n){return this.flood?this.flood.surfaceAt(e,n):-1/0}setFloodHour(e){var n;(n=this.flood)==null||n.setHour(e),this.invalidate()}tick(e,n){var s,r;this.water.uniforms.uTime.value=n,(s=this.flood)==null||s.tick(n),(r=this.life)==null||r.update(e)}get waterLevel(){return this.level}setLabelsVisible(e){super.setLabelsVisible(e),this.boundaryOn=e,this.boundary&&(this.boundary.visible=e)}setExternalCamera(e,n,s,r,a){super.setExternalCamera(e,n,s,r,a),this.boundary&&(this.boundary.visible=this.boundaryOn&&n-this.groundAt(e,s)>45)}async setAerial(e){if(this.aerialWanted=e,e&&!this.aerial){if(!this.options.assets.aerial)throw new Error("This copy of the model has no aerial photograph.");const s=await W_(this.options.assets.aerial);if(this.disposed){s.dispose();return}s.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.aerial=s}if(!this.terrain||!this.model)return;const n=this.aerialWanted&&!!this.aerial;this.terrain.map=n?this.aerial:this.model,this.placeTiles(),this.detailGround&&(this.detailGround.visible=!n),this.invalidate()}beforeRender(){var r,a;if(!this.detailSlots||!this.detailGrid||!this.hf)return;const e=performance.now();if(e-this.tilesAt<250)return;this.tilesAt=e;const n=this.detailGrid,s=[];if(this.viewDistance<1400){const l=(this.viewFocus.x+this.hf.sizeX/2)/this.hf.sizeX*n,o=(this.viewFocus.z+this.hf.sizeZ/2)/this.hf.sizeZ*n,c=[];for(let h=0;h<n;h++)for(let f=0;f<n;f++)c.push([Math.hypot(f+.5-l,h+.5-o),`${h}_${f}`]);c.sort((h,f)=>h[0]-f[0]);for(const[h,f]of c.slice(0,this.detailSlots))h<1.6&&s.push(f)}if(s.join()!==this.tilesWanted.join()){this.tilesWanted=s;for(const l of s){if(this.tiles.has(l))continue;const[o,c]=l.split("_").map(Number),h=(a=(r=this.options.assets).detail)==null?void 0:a.call(r,o,c);h&&(this.tiles.set(l,null),V_(h).then(f=>{if(this.disposed)return f.dispose();f.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.tiles.set(l,f),this.placeTiles()}).catch(()=>this.tiles.delete(l)))}for(const[l,o]of this.tiles){if(this.tiles.size<=this.detailSlots+4)break;o&&!s.includes(l)&&(o.dispose(),this.tiles.delete(l))}this.placeTiles()}}placeTiles(){if(!this.groundDetail)return;const e=this.detailGrid,n=this.aerialWanted&&!!this.aerial;for(let s=0;s<es;s++){const r=this.tilesWanted[s],a=r?this.tiles.get(r):null;if(!a||n){this.groundDetail.set(s,null);continue}const[l,o]=r.split("_").map(Number);this.groundDetail.set(s,a,[o/e,1-(l+1)/e,(o+1)/e,1-l/e])}this.invalidate()}dispose(){var e,n;(e=this.model)==null||e.dispose(),(n=this.aerial)==null||n.dispose();for(const s of this.tiles.values())s==null||s.dispose();super.dispose()}}const mu="Buildings, streets, railway, terrain and imagery © State of Queensland · Parks © Brisbane City Council (CC BY 4.0)",dl=.5;function Zx(i,t){const e=typeof t.assets=="string"?t.assets:null;let n;return{...Ei(i,t,{styleKey:"data-moorooka-model",css:Au,credit:mu,tide:{min:dl,max:dl,initial:dl},createScene:(r,a,l,o)=>n=new Yx(r,a,l,{...o,assets:{...o.assets,detail:e?(c,h)=>`${e}detail/${c}_${h}.webp`:void 0,flood:e?`${e}flood.png`:void 0,floodInfo:e?`${e}flood.json`:void 0}}),setTide:()=>{}}),simulateFlood:e?{show:r=>n.setFlood(r),setHour:r=>n.setFloodHour(r)}:void 0,waterAt:(r,a)=>Math.max(n.waterLevel,n.floodSurfaceAt(r,a))}}return Mn.CREDIT=mu,Mn.create=Zx,Object.defineProperty(Mn,Symbol.toStringTag,{value:"Module"}),Mn}({});
