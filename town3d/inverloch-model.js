var InverlochModel=function(En){"use strict";var K_=Object.defineProperty;var $_=(En,Nn,Jn)=>Nn in En?K_(En,Nn,{enumerable:!0,configurable:!0,writable:!0,value:Jn}):En[Nn]=Jn;var at=(En,Nn,Jn)=>$_(En,typeof Nn!="symbol"?Nn+"":Nn,Jn);const Nn='.inv-label{position:absolute;left:0;top:0;pointer-events:auto;font:600 12px/1 Space Grotesk,system-ui,sans-serif;padding:6px 10px;border-radius:999px;background:#0c1c24e6;color:#fff;border:1px solid rgba(255,255,255,.2);white-space:nowrap;cursor:pointer;will-change:transform}.inv-label:after{content:"";position:absolute;left:50%;bottom:-8px;width:1px;height:8px;background:#ffffffbf}.inv-label:hover{background:#0b7d9c}.inv-label--nature{background:#183826eb}.inv-label--nature:hover{background:#2c7a4b}.inv-label--water{background:none;border-color:transparent;color:#f1fbff;font-style:italic;font-weight:500;font-size:13px;letter-spacing:.1em;text-shadow:0 1px 2px rgba(0,35,60,.95),0 0 8px rgba(0,35,60,.7)}.inv-label--water:after{display:none}.inv-label--water:hover{background:#0c1c2499}.inv-range{-moz-appearance:none;appearance:none;-webkit-appearance:none;height:28px;background:transparent;cursor:pointer}.inv-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range:focus-visible{outline:2px solid #ffd200;outline-offset:4px;border-radius:4px}';/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jn="187",Un={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gh=0,nl=1,Hh=2,as=1,Vh=2,os=3,jn=0,Ve=1,ze=2,Ai=0,ls=1,$r=2,il=3,sl=4,Wh=5,Ri=100,Xh=101,qh=102,Yh=103,Zh=104,Kh=200,$h=201,Jh=202,Qh=203,rl=204,al=205,jh=206,tu=207,eu=208,nu=209,iu=210,su=211,ru=212,au=213,ou=214,Jr=0,Qr=1,jr=2,cs=3,ta=4,ea=5,na=6,ia=7,sa=0,lu=1,cu=2,Fn=0,ol=1,ll=2,cl=3,hl=4,ul=5,dl=6,ra=7,fl=300,Ci=301,hs=302,aa=303,oa=304,Os=1e3,un=1001,la=1002,Ue=1003,hu=1004,zs=1005,We=1006,ca=1007,bn=1008,$e=1009,pl=1010,ml=1011,us=1012,ha=1013,wn=1014,dn=1015,fn=1016,ua=1017,da=1018,Pi=1020,gl=35902,_l=35899,xl=1021,vl=1022,Tn=1023,ti=1026,ei=1027,fa=1028,pa=1029,ni=1030,ma=1031,ga=1033,Bs=33776,ks=33777,Gs=33778,Hs=33779,_a=35840,xa=35841,va=35842,Ma=35843,Sa=36196,ya=37492,Ea=37496,ba=37488,wa=37489,Vs=37490,Ta=37491,Aa=37808,Ra=37809,Ca=37810,Pa=37811,Da=37812,La=37813,Ia=37814,Na=37815,Ua=37816,Fa=37817,Oa=37818,za=37819,Ba=37820,ka=37821,Ga=36492,Ha=36494,Va=36495,Wa=36283,Xa=36284,Ws=36285,qa=36286,uu=3200,Xs=0,du=1,ii="",ye="srgb",qs="srgb-linear",Ys="linear",ne="srgb",Ya=7680,fu=519,pu=512,mu=513,gu=514,Ml=515,_u=516,xu=517,Sl=518,yl=519,vu=35044,Zs=35048,El="300 es",pn=2e3,ds=2001;function Mu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Su(){const i=fs("canvas");return i.style.display="block",i}const bl={};function wl(...i){const t="THREE."+i.shift();console.log(t,...i)}function Tl(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Nt(...i){i=Tl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Jt(...i){i=Tl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ks(...i){const t=i.join(" ");t in bl||(bl[t]=!0,Nt(...i))}function yu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Eu={[Jr]:Jr,[jr]:na,[ta]:ta,[cs]:ea,[Qr]:Qr,[na]:jr,[ia]:ia,[ea]:cs};class si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Al=1234567;const ps=Math.PI/180,ms=180/Math.PI;function Di(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function Za(i,t){return(i%t+t)%t}function bu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function wu(i,t,e){return i!==t?(e-i)/(t-i):0}function gs(i,t,e){return(1-e)*i+e*t}function Tu(i,t,e,n){return gs(i,t,1-Math.exp(-e*n))}function Au(i,t=1){return t-Math.abs(Za(i,t*2)-t)}function Ru(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Cu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Pu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Du(i,t){return i+Math.random()*(t-i)}function Lu(i){return i*(.5-Math.random())}function Iu(i){i!==void 0&&(Al=i);let t=Al+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nu(i){return i*ps}function Uu(i){return i*ms}function Fu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ou(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Rl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zu(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),f=a((t-n)/2),u=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*u,o*c);break;case"YXY":i.set(l*u,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*u,o*h,o*c);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ka(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Cl(i,t){if(t.constructor===Float32Array)return i;const e=Ka(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Pl(i,t){if(t.constructor===Float32Array)return i;const e=Ka(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const le={DEG2RAD:ps,RAD2DEG:ms,generateUUID:Di,clamp:Vt,euclideanModulo:Za,mapLinear:bu,inverseLerp:wu,lerp:gs,damp:Tu,pingpong:Au,smoothstep:Ru,smootherstep:Cu,randInt:Pu,randFloat:Du,randFloatSpread:Lu,seededRandom:Iu,degToRad:Nu,radToDeg:Uu,isPowerOfTwo:Fu,ceilPowerOfTwo:Ou,floorPowerOfTwo:Rl,setQuaternionFromProperEuler:zu,normalize:Pl,denormalize:Cl},Ko=class Ko{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ko.prototype.isVector2=!0;let Lt=Ko;class mn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[a+0],u=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||l!==f||c!==u||h!==g){let m=l*f+c*u+h*g+d*v;m<0&&(f=-f,u=-u,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){const x=Math.acos(m),S=Math.sin(x);p=Math.sin(p*x)/S,o=Math.sin(o*x)/S,l=l*p+f*o,c=c*p+u*o,h=h*p+g*o,d=d*p+v*o}else{l=l*p+f*o,c=c*p+u*o,h=h*p+g*o,d=d*p+v*o;const x=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=x,c*=x,h*=x,d*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],f=r[a+1],u=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*u-c*f,t[e+1]=l*g+h*f+c*d-o*u,t[e+2]=c*g+h*u+o*f-l*d,t[e+3]=h*g-o*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),f=l(n/2),u=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"YZX":this._x=f*h*d+c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d-f*u*g;break;case"XZY":this._x=f*h*d-c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d+f*u*g;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const $o=class $o{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $a.copy(this).projectOnVector(t),this.sub($a)}reflect(t){return this.sub($a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$o.prototype.isVector3=!0;let G=$o;const $a=new G,Dl=new mn,Jo=class Jo{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],g=n[8],v=s[0],m=s[3],p=s[6],x=s[1],S=s[4],M=s[7],w=s[2],E=s[5],_=s[8];return r[0]=a*v+o*x+l*w,r[3]=a*m+o*S+l*E,r[6]=a*p+o*M+l*_,r[1]=c*v+h*x+d*w,r[4]=c*m+h*S+d*E,r[7]=c*p+h*M+d*_,r[2]=f*v+u*x+g*w,r[5]=f*m+u*S+g*E,r[8]=f*p+u*M+g*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*r,u=c*r-a*l,g=e*d+n*f+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=u*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ja.makeScale(t,e)),this}rotate(t){return Ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ja.makeRotation(-t)),this}translate(t,e){return Ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Jo.prototype.isMatrix3=!0;let Ut=Jo;const Ja=new Ut,Ll=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Il=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bu(){const i={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ne&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ne&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?Ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qs]:{primaries:t,whitePoint:n,transfer:Ys,toXYZ:Ll,fromXYZ:Il,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:Ll,fromXYZ:Il,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}}),i}const Zt=Bu();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ii;class ku{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ii===void 0&&(Ii=fs("canvas")),Ii.width=t.width,Ii.height=t.height;const s=Ii.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ii}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(On(e[n]/255)*255):e[n]=On(e[n]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gu=0;class Qa{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Di(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ja(s[a].image)):r.push(ja(s[a]))}else r=ja(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ja(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ku.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let Hu=0;const to=new G;class Ee extends si{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=un,s=un,r=We,a=bn,o=Tn,l=$e,c=Ee.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Di(),this.name="",this.source=new Qa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(to).x}get height(){return this.source.getSize(to).y}get depth(){return this.source.getSize(to).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Os:t.x=t.x-Math.floor(t.x);break;case un:t.x=t.x<0?0:1;break;case la:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Os:t.y=t.y-Math.floor(t.y);break;case un:t.y=t.y<0?0:1;break;case la:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null,Ee.DEFAULT_MAPPING=fl,Ee.DEFAULT_ANISOTROPY=1;const Qo=class Qo{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,M=(u+1)/2,w=(p+1)/2,E=(h+f)/4,_=(d+v)/4,y=(g+m)/4;return S>M&&S>w?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=_/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=y/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=_/r,s=y/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-v)/x,this.z=(f-h)/x,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qo.prototype.isVector4=!0;let ce=Qo;class Vu extends si{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ee({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Qa(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends Vu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Nl extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wu extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Yr=class Yr{constructor(t,e,n,s,r,a,o,l,c,h,d,f,u,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,f,u,g,v,m)}set(t,e,n,s,r,a,o,l,c,h,d,f,u,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ni.setFromMatrixColumn(t,0).length(),r=1/Ni.setFromMatrixColumn(t,1).length(),a=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*h,u=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+u*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,u=l*d,g=c*h,v=c*d;e[0]=f+v*o,e[4]=g*o-u,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=u*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,u=l*d,g=c*h,v=c*d;e[0]=f-v*o,e[4]=-a*d,e[8]=g+u*o,e[1]=u+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,u=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-u,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=u*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,u=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-f*d,e[8]=g*d+u,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*d+g,e[10]=f-v*d}else if(t.order==="XZY"){const f=a*l,u=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+v,e[5]=a*h,e[9]=u*d-g,e[2]=g*d-u,e[6]=o*h,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xu,t,qu)}lookAt(t,e,n){const s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),ri.crossVectors(n,Je),ri.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),ri.crossVectors(n,Je)),ri.normalize(),$s.crossVectors(Je,ri),s[0]=ri.x,s[4]=$s.x,s[8]=Je.x,s[1]=ri.y,s[5]=$s.y,s[9]=Je.y,s[2]=ri.z,s[6]=$s.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],S=n[7],M=n[11],w=n[15],E=s[0],_=s[4],y=s[8],C=s[12],b=s[1],R=s[5],D=s[9],F=s[13],P=s[2],O=s[6],U=s[10],I=s[14],X=s[3],N=s[7],B=s[11],H=s[15];return r[0]=a*E+o*b+l*P+c*X,r[4]=a*_+o*R+l*O+c*N,r[8]=a*y+o*D+l*U+c*B,r[12]=a*C+o*F+l*I+c*H,r[1]=h*E+d*b+f*P+u*X,r[5]=h*_+d*R+f*O+u*N,r[9]=h*y+d*D+f*U+u*B,r[13]=h*C+d*F+f*I+u*H,r[2]=g*E+v*b+m*P+p*X,r[6]=g*_+v*R+m*O+p*N,r[10]=g*y+v*D+m*U+p*B,r[14]=g*C+v*F+m*I+p*H,r[3]=x*E+S*b+M*P+w*X,r[7]=x*_+S*R+M*O+w*N,r[11]=x*y+S*D+M*U+w*B,r[15]=x*C+S*F+M*I+w*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],g=t[3],v=t[7],m=t[11],p=t[15],x=l*u-c*f,S=o*u-c*d,M=o*f-l*d,w=a*u-c*h,E=a*f-l*h,_=a*d-o*h;return e*(v*x-m*S+p*M)-n*(g*x-m*w+p*E)+s*(g*S-v*w+p*_)-r*(g*M-v*E+m*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=e*o-n*a,S=e*l-s*a,M=e*c-r*a,w=n*l-s*o,E=n*c-r*o,_=s*c-r*l,y=h*v-d*g,C=h*m-f*g,b=h*p-u*g,R=d*m-f*v,D=d*p-u*v,F=f*p-u*m,P=x*F-S*D+M*R+w*b-E*C+_*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return t[0]=(o*F-l*D+c*R)*O,t[1]=(s*D-n*F-r*R)*O,t[2]=(v*_-m*E+p*w)*O,t[3]=(f*E-d*_-u*w)*O,t[4]=(l*b-a*F-c*C)*O,t[5]=(e*F-s*b+r*C)*O,t[6]=(m*M-g*_-p*S)*O,t[7]=(h*_-f*M+u*S)*O,t[8]=(a*D-o*b+c*y)*O,t[9]=(n*b-e*D-r*y)*O,t[10]=(g*E-v*M+p*x)*O,t[11]=(d*M-h*E-u*x)*O,t[12]=(o*C-a*R-l*y)*O,t[13]=(e*R-n*C+s*y)*O,t[14]=(v*S-g*w-m*x)*O,t[15]=(h*w-d*S+f*x)*O,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,f=r*c,u=r*h,g=r*d,v=a*h,m=a*d,p=o*d,x=l*c,S=l*h,M=l*d,w=n.x,E=n.y,_=n.z;return s[0]=(1-(v+p))*w,s[1]=(u+M)*w,s[2]=(g-S)*w,s[3]=0,s[4]=(u-M)*E,s[5]=(1-(f+p))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+S)*_,s[9]=(m-x)*_,s[10]=(1-(f+v))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ni.set(s[0],s[1],s[2]).length();const o=Ni.set(s[4],s[5],s[6]).length(),l=Ni.set(s[8],s[9],s[10]).length();r<0&&(a=-a),gn.copy(this);const c=1/a,h=1/o,d=1/l;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=d,gn.elements[9]*=d,gn.elements[10]*=d,e.setFromRotationMatrix(gn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=pn,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===pn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ds)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=pn,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),u=-(n+s)/(n-s);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===pn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===ds)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Yr.prototype.isMatrix4=!0;let Kt=Yr;const Ni=new G,gn=new Kt,Xu=new G(0,0,0),qu=new G(1,1,1),ri=new G,$s=new G,Je=new G,Ul=new Kt,Fl=new mn;class _n{constructor(t=0,e=0,n=0,s=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ul,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fl.setFromEuler(this),this.setFromQuaternion(Fl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class eo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yu=0;const Ol=new G,Ui=new mn,zn=new Kt,Js=new G,_s=new G,Zu=new G,Ku=new mn,zl=new G(1,0,0),Bl=new G(0,1,0),kl=new G(0,0,1),Gl={type:"added"},$u={type:"removed"},Fi={type:"childadded",child:null},no={type:"childremoved",child:null};class Pe extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new G,e=new _n,n=new mn,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Ut}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(zl,t)}rotateY(t){return this.rotateOnAxis(Bl,t)}rotateZ(t){return this.rotateOnAxis(kl,t)}translateOnAxis(t,e){return Ol.copy(t).applyQuaternion(this.quaternion),this.position.add(Ol.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zl,t)}translateY(t){return this.translateOnAxis(Bl,t)}translateZ(t){return this.translateOnAxis(kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Js.copy(t):Js.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(_s,Js,this.up):zn.lookAt(Js,_s,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(zn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gl),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($u),no.child=t,this.dispatchEvent(no),no.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gl),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,Zu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Ku,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),u=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Pe.DEFAULT_UP=new G(0,1,0),Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0,Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qe extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ju={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ju)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function so(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?i+(t-i)*6*e:e<.5?t:e<.6666666666666666?i+(t-i)*6*(.6666666666666666-e):i}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=Za(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=so(a,r,t+.3333333333333333),this.g=so(a,r,t),this.b=so(a,r,t-.3333333333333333)}return Zt.colorSpaceToWorking(this,s),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const n=Hl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return Zt.workingToColorSpace(ke.copy(this),t),Math.round(Vt(ke.r*255,0,255))*65536+Math.round(Vt(ke.g*255,0,255))*256+Math.round(Vt(ke.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(ke.copy(this),e);const n=ke.r,s=ke.g,r=ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=ye){Zt.workingToColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,s=ke.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(Qs);const n=gs(ai.h,Qs.h,e),s=gs(ai.s,Qs.s,e),r=gs(ai.l,Qs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Rt;Rt.NAMES=Hl;class Qu extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const xn=new G,Bn=new G,ro=new G,kn=new G,Oi=new G,zi=new G,Vl=new G,ao=new G,oo=new G,lo=new G,co=new ce,ho=new ce,uo=new ce;class vn{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),Bn.subVectors(n,e),ro.subVectors(t,e);const a=xn.dot(xn),o=xn.dot(Bn),l=xn.dot(ro),c=Bn.dot(Bn),h=Bn.dot(ro),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return co.setScalar(0),ho.setScalar(0),uo.setScalar(0),co.fromBufferAttribute(t,e),ho.fromBufferAttribute(t,n),uo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(co,r.x),a.addScaledVector(ho,r.y),a.addScaledVector(uo,r.z),a}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),Bn.subVectors(t,e),xn.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),xn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Oi.subVectors(s,n),zi.subVectors(r,n),ao.subVectors(t,n);const l=Oi.dot(ao),c=zi.dot(ao);if(l<=0&&c<=0)return e.copy(n);oo.subVectors(t,s);const h=Oi.dot(oo),d=zi.dot(oo);if(h>=0&&d<=h)return e.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Oi,a);lo.subVectors(t,r);const u=Oi.dot(lo),g=zi.dot(lo);if(g>=0&&u<=g)return e.copy(r);const v=u*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(zi,o);const m=h*g-u*d;if(m<=0&&d-h>=0&&u-g>=0)return Vl.subVectors(r,s),o=(d-h)/(d-h+(u-g)),e.copy(s).addScaledVector(Vl,o);const p=1/(m+v+f);return a=v*p,o=f*p,e.copy(n).addScaledVector(Oi,a).addScaledVector(zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class gi{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(t.matrixWorld),this.union(js)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),tr.subVectors(this.max,xs),Bi.subVectors(t.a,xs),ki.subVectors(t.b,xs),Gi.subVectors(t.c,xs),oi.subVectors(ki,Bi),li.subVectors(Gi,ki),_i.subVectors(Bi,Gi);let e=[0,-oi.z,oi.y,0,-li.z,li.y,0,-_i.z,_i.y,oi.z,0,-oi.x,li.z,0,-li.x,_i.z,0,-_i.x,-oi.y,oi.x,0,-li.y,li.x,0,-_i.y,_i.x,0];return!fo(e,Bi,ki,Gi,tr)||(e=[1,0,0,0,1,0,0,0,1],!fo(e,Bi,ki,Gi,tr))?!1:(er.crossVectors(oi,li),e=[er.x,er.y,er.z],fo(e,Bi,ki,Gi,tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Gn=[new G,new G,new G,new G,new G,new G,new G,new G],Mn=new G,js=new gi,Bi=new G,ki=new G,Gi=new G,oi=new G,li=new G,_i=new G,xs=new G,tr=new G,er=new G,xi=new G;function fo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){xi.fromArray(i,r);const o=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Hn=ju();function ju(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function td(i){Math.abs(i)>65504&&Nt("DataUtils.toHalfFloat(): Value out of range."),i=Vt(i,-65504,65504),Hn.floatView[0]=i;const t=Hn.uint32View[0],e=t>>23&511;return Hn.baseTable[e]+((t&8388607)>>Hn.shiftTable[e])}function ed(i){const t=i>>10;return Hn.uint32View[0]=Hn.mantissaTable[Hn.offsetTable[t]+(i&1023)]+Hn.exponentTable[t],Hn.floatView[0]}class Wl{static toHalfFloat(t){return td(t)}static fromHalfFloat(t){return ed(t)}}const ve=new G,nr=new Lt;let nd=0;class be extends si{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vu,this.updateRanges=[],this.gpuType=dn,this.version=0,this._normalizationScale=t!==void 0?Ka(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)nr.fromBufferAttribute(this,e),nr.applyMatrix3(t),this.setXY(e,nr.x,nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Cl(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Pl(t,this.array)}}class Xl extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ql extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}}const id=new gi,vs=new G,po=new G;class Hi{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):id.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(po)),this.expandByPoint(vs.copy(t.center).sub(po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let sd=0;const nn=new Kt,mo=new Pe,Vi=new G,je=new gi,Ms=new gi,De=new G;class we extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mu(t)?ql:Xl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return mo.lookAt(t),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(je.min,Ms.min),je.expandByPoint(De),De.addVectors(je.max,Ms.max),je.expandByPoint(De)):(je.expandByPoint(Ms.min),je.expandByPoint(Ms.max))}je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)De.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(t,c),De.add(Vi)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new be(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)o[C]=new G,l[C]=new G;const h=new G,d=new G,f=new G,u=new Lt,g=new Lt,v=new Lt,m=new G,p=new G;function x(C,b,R){c[C]=c[b]=c[R]=1,h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,b),f.fromBufferAttribute(n,R),u.fromBufferAttribute(r,C),g.fromBufferAttribute(r,b),v.fromBufferAttribute(r,R),d.sub(h),f.sub(h),g.sub(u),v.sub(u);const D=1/(g.x*v.y-v.x*g.y);isFinite(D)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(D),p.copy(f).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar(D),o[C].add(m),o[b].add(m),o[R].add(m),l[C].add(p),l[b].add(p),l[R].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let C=0,b=S.length;C<b;++C){const R=S[C],D=R.start,F=R.count;for(let P=D,O=D+F;P<O;P+=3)x(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const M=new G,w=new G,E=new G,_=new G;function y(C){E.fromBufferAttribute(s,C),_.copy(E);const b=o[C];M.copy(b),M.sub(E.multiplyScalar(E.dot(b))).normalize(),w.crossVectors(_,b);const D=w.dot(l[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,D)}for(let C=0,b=n.count;C<b;++C)c[C]&&y(C);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,h=new G,d=new G;if(t)for(let f=0,u=t.count;f<u;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let u=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?u=l[v]*o.data.stride+o.offset:u=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[u++]}return new be(f,h,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const go=new G,rd=new G,ad=new Ut;class Rn{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=go.subVectors(n,e).cross(rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(go),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ad.getNormalMatrix(t),s=this.coplanarPoint(go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let od=0;class vi extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=ls,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=al,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ya,this.stencilZFail=Ya,this.stencilZPass=Ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Rn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Vn=new G,_o=new G,ir=new G,sr=new G;class rr{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){_o.copy(t).add(e).multiplyScalar(.5),ir.copy(e).sub(t).normalize(),sr.copy(this.origin).sub(_o);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ir),o=sr.dot(this.direction),l=-sr.dot(ir),c=sr.lengthSq(),h=Math.abs(1-a*a);let d,f,u,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const v=1/h;d*=v,f*=v,u=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_o).addScaledVector(ir,f),u}intersectSphere(t,e){if(t.radius<0)return null;Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,f=t.y-a.y,u=t.z-a.z,g=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=n.x-a.x,x=n.y-a.y,S=n.z-a.z,M=Math.abs(l),w=Math.abs(c),E=Math.abs(h);let _,y,C,b,R,D,F,P,O,U,I,X;if(M>=w&&M>=E?(C=l,D=d,O=g,X=p,l>=0?(_=c,y=h,b=f,R=u,F=v,P=m,U=x,I=S):(_=h,y=c,b=u,R=f,F=m,P=v,U=S,I=x)):w>=E?(C=c,D=f,O=v,X=x,c>=0?(_=h,y=l,b=u,R=d,F=m,P=g,U=S,I=p):(_=l,y=h,b=d,R=u,F=g,P=m,U=p,I=S)):(C=h,D=u,O=m,X=S,h>=0?(_=l,y=c,b=d,R=f,F=g,P=v,U=p,I=x):(_=c,y=l,b=f,R=d,F=v,P=g,U=x,I=p)),C===0)return null;const N=_/C,B=y/C,H=1/C,it=b-N*D,st=R-B*D,q=F-N*O,et=P-B*O,rt=U-N*X,vt=I-B*X,ot=rt*et-vt*q,bt=it*vt-st*rt,Wt=q*st-et*it;if(s){if(ot<0||bt<0||Wt<0)return null}else if((ot<0||bt<0||Wt<0)&&(ot>0||bt>0||Wt>0))return null;const Et=ot+bt+Wt;if(Et===0)return null;const Bt=H*(ot*D+bt*O+Wt*X);return(Et>0?Bt<0:Bt>0)?null:this.at(Bt/Et,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wn extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Yl=new Kt,Mi=new rr,ar=new Hi,Zl=new G,or=new G,lr=new G,cr=new G,xo=new G,hr=new G,Kl=new G,ur=new G;class Qt extends Pe{constructor(t=new we,e=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(xo.fromBufferAttribute(d,t),a?hr.addScaledVector(xo,h):hr.addScaledVector(xo.sub(e),h))}e.add(hr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(ar.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(ar,Zl)===null||Mi.origin.distanceToSquared(Zl)>(t.far-t.near)**2))&&(Yl.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(Yl),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],x=Math.max(m.start,u.start),S=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let M=x,w=S;M<w;M+=3){const E=o.getX(M),_=o.getX(M+1),y=o.getX(M+2);s=dr(this,p,t,n,c,h,d,E,_,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){const x=o.getX(m),S=o.getX(m+1),M=o.getX(m+2);s=dr(this,a,t,n,c,h,d,x,S,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],x=Math.max(m.start,u.start),S=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let M=x,w=S;M<w;M+=3){const E=M,_=M+1,y=M+2;s=dr(this,p,t,n,c,h,d,E,_,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){const x=m,S=m+1,M=m+2;s=dr(this,a,t,n,c,h,d,x,S,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function ld(i,t,e,n,s,r,a,o){let l;if(t.side===Ve?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===jn,o),l===null)return null;ur.copy(o),ur.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ur);return c<e.near||c>e.far?null:{distance:c,point:ur.clone(),object:i}}function dr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,or),i.getVertexPosition(l,lr),i.getVertexPosition(c,cr);const h=ld(i,t,e,n,or,lr,cr,Kl);if(h){const d=new G;vn.getBarycoord(Kl,or,lr,cr,d),s&&(h.uv=vn.getInterpolatedAttribute(s,o,l,c,d,new Lt)),r&&(h.uv1=vn.getInterpolatedAttribute(r,o,l,c,d,new Lt)),a&&(h.normal=vn.getInterpolatedAttribute(a,o,l,c,d,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new G,materialIndex:0};vn.getNormal(or,lr,cr,f.normal),h.face=f,h.barycoord=d}return h}class fr extends Ee{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ue,h=Ue,d,f){super(null,a,o,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $l extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wi=new Kt,Jl=new Kt,pr=[],Ql=new gi,cd=new Kt,Ss=new Qt,ys=new Hi;class Ze extends Qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $l(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),Ql.copy(t.boundingBox).applyMatrix4(Wi),this.boundingBox.union(Ql)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),ys.copy(t.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ys.copy(this.boundingSphere),ys.applyMatrix4(n),t.ray.intersectsSphere(ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Wi),Jl.multiplyMatrices(n,Wi),Ss.matrixWorld=Jl,Ss.raycast(t,pr);for(let a=0,o=pr.length;a<o;a++){const l=pr[a];l.instanceId=r,l.object=this,e.push(l)}pr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new $l(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fr(new Float32Array(s*this.count),s,this.count,fa,dn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Si=new Hi,hd=new Lt(.5,.5),mr=new G;class Es{constructor(t=new Rn,e=new Rn,n=new Rn,s=new Rn,r=new Rn,a=new Rn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],g=r[8],v=r[9],m=r[10],p=r[11],x=r[12],S=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-a,u-h,p-g,w-x).normalize(),s[1].setComponents(c+a,u+h,p+g,w+x).normalize(),s[2].setComponents(c+o,u+d,p+v,w+S).normalize(),s[3].setComponents(c-o,u-d,p-v,w-S).normalize(),n)s[4].setComponents(l,f,m,M).normalize(),s[5].setComponents(c-l,u-f,p-m,w-M).normalize();else if(s[4].setComponents(c-l,u-f,p-m,w-M).normalize(),e===pn)s[5].setComponents(c+l,u+f,p+m,w+M).normalize();else if(e===ds)s[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){Si.center.set(0,0,0);const e=hd.distanceTo(t.center);return Si.radius=.7071067811865476+e,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(mr.x=s.normal.x>0?t.max.x:t.min.x,mr.y=s.normal.y>0?t.max.y:t.min.y,mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(mr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const jl=new Kt;class vo{constructor(){this.coordinateSystem=pn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];jl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Es),n[s].setFromProjectionMatrix(jl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Es),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new vo().copy(this)}}class tc extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const gr=new G,_r=new G,ec=new Kt,bs=new rr,xr=new Hi,Mo=new G,nc=new G;class ud extends Pe{constructor(t=new we,e=new tc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)gr.fromBufferAttribute(e,s-1),_r.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=gr.distanceTo(_r);t.setAttribute("lineDistance",new he(n,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(s),xr.radius+=r,t.ray.intersectsSphere(xr)===!1)return;ec.copy(s).invert(),bs.copy(t.ray).applyMatrix4(ec);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=u,m=g-1;v<m;v+=c){const p=h.getX(v),x=h.getX(v+1),S=vr(this,t,bs,l,p,x,v);S&&e.push(S)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(u),p=vr(this,t,bs,l,v,m,g-1);p&&e.push(p)}}else{const u=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=u,m=g-1;v<m;v+=c){const p=vr(this,t,bs,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=vr(this,t,bs,l,g-1,u,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function vr(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(gr.fromBufferAttribute(o,s),_r.fromBufferAttribute(o,r),e.distanceSqToSegment(gr,_r,Mo,nc)>n)return;Mo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Mo);if(!(c<t.near||c>t.far))return{distance:c,point:nc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const ic=new G,sc=new G;class dd extends ud{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ic.fromBufferAttribute(e,s),sc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ic.distanceTo(sc);t.setAttribute("lineDistance",new he(n,1))}else Nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rc extends Ee{constructor(t=[],e=Ci,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class So extends Ee{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xi extends Ee{constructor(t,e,n=wn,s,r,a,o=Ue,l=Ue,c,h=ti,d=1){if(h!==ti&&h!==ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class ac extends Xi{constructor(t,e=wn,n=Ci,s,r,a=Ue,o=Ue,l,c=ti){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class oc extends Ee{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class yi extends we{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,u=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(d,2));function g(v,m,p,x,S,M,w,E,_,y,C){const b=M/_,R=w/y,D=M/2,F=w/2,P=E/2,O=_+1,U=y+1;let I=0,X=0;const N=new G;for(let B=0;B<U;B++){const H=B*R-F;for(let it=0;it<O;it++){const st=it*b-D;N[v]=st*x,N[m]=H*S,N[p]=P,c.push(N.x,N.y,N.z),N[v]=0,N[m]=0,N[p]=E>0?1:-1,h.push(N.x,N.y,N.z),d.push(it/_),d.push(1-B/y),I+=1}}for(let B=0;B<y;B++)for(let H=0;H<_;H++){const it=f+H+O*B,st=f+H+O*(B+1),q=f+(H+1)+O*(B+1),et=f+(H+1)+O*B;l.push(it,st,et),l.push(st,q,et),X+=6}o.addGroup(u,X,C),u+=X,f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class yo extends we{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],u=[];let g=0;const v=[],m=n/2;let p=0;x(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new he(d,3)),this.setAttribute("normal",new he(f,3)),this.setAttribute("uv",new he(u,2));function x(){const M=new G,w=new G;let E=0;const _=(e-t)/n;for(let y=0;y<=r;y++){const C=[],b=y/r,R=b*(e-t)+t;for(let D=0;D<=s;D++){const F=D/s,P=F*l+o,O=Math.sin(P),U=Math.cos(P);w.x=R*O,w.y=-b*n+m,w.z=R*U,d.push(w.x,w.y,w.z),M.set(O,_,U).normalize(),f.push(M.x,M.y,M.z),u.push(F,1-b),C.push(g++)}v.push(C)}for(let y=0;y<s;y++)for(let C=0;C<r;C++){const b=v[C][y],R=v[C+1][y],D=v[C+1][y+1],F=v[C][y+1];(t>0||C!==0)&&(h.push(b,R,F),E+=3),(e>0||C!==r-1)&&(h.push(R,D,F),E+=3)}c.addGroup(p,E,0),p+=E}function S(M){const w=g,E=new Lt,_=new G;let y=0;const C=M===!0?t:e,b=M===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,m*b,0),f.push(0,b,0),u.push(.5,.5),g++;const R=g;for(let D=0;D<=s;D++){const P=D/s*l+o,O=Math.cos(P),U=Math.sin(P);_.x=C*U,_.y=m*b,_.z=C*O,d.push(_.x,_.y,_.z),f.push(0,b,0),E.x=O*.5+.5,E.y=U*.5*b+.5,u.push(E.x,E.y),g++}for(let D=0;D<s;D++){const F=w+D,P=R+D;M===!0?h.push(P,P+1,F):h.push(P+1,P,F),y+=3}c.addGroup(p,y,M===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Eo extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const S=new G,M=new G,w=new G;for(let E=0;E<e.length;E+=3)u(e[E+0],S),u(e[E+1],M),u(e[E+2],w),l(S,M,w,x)}function l(x,S,M,w){const E=w+1,_=[];for(let y=0;y<=E;y++){_[y]=[];const C=x.clone().lerp(M,y/E),b=S.clone().lerp(M,y/E),R=E-y;for(let D=0;D<=R;D++)D===0&&y===E?_[y][D]=C:_[y][D]=C.clone().lerp(b,D/R)}for(let y=0;y<E;y++)for(let C=0;C<2*(E-y)-1;C++){const b=Math.floor(C/2);C%2===0?(f(_[y][b+1]),f(_[y+1][b]),f(_[y][b])):(f(_[y][b+1]),f(_[y+1][b+1]),f(_[y+1][b]))}}function c(x){const S=new G;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(x),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function h(){const x=new G;for(let S=0;S<r.length;S+=3){x.x=r[S+0],x.y=r[S+1],x.z=r[S+2];const M=m(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;a.push(M,1-w)}g(),d()}function d(){for(let x=0;x<a.length;x+=6){const S=a[x+0],M=a[x+2],w=a[x+4],E=Math.max(S,M,w),_=Math.min(S,M,w);E>.9&&_<.1&&(S<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function u(x,S){const M=x*3;S.x=t[M+0],S.y=t[M+1],S.z=t[M+2]}function g(){const x=new G,S=new G,M=new G,w=new G,E=new Lt,_=new Lt,y=new Lt;for(let C=0,b=0;C<r.length;C+=9,b+=6){x.set(r[C+0],r[C+1],r[C+2]),S.set(r[C+3],r[C+4],r[C+5]),M.set(r[C+6],r[C+7],r[C+8]),E.set(a[b+0],a[b+1]),_.set(a[b+2],a[b+3]),y.set(a[b+4],a[b+5]),w.copy(x).add(S).add(M).divideScalar(3);const R=m(w);v(E,b+0,x,R),v(_,b+2,S,R),v(y,b+4,M,R)}}function v(x,S,M,w){w<0&&x.x===1&&(a[S]=x.x-1),M.x===0&&M.z===0&&(a[S]=w/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.vertices,t.indices,t.radius,t.detail)}}function fd(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=lc(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=xd(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let f=e;f<s;f+=e){const u=i[f],g=i[f+1];u<o&&(o=u),g<l&&(l=g),u>h&&(h=u),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return ws(r,a,e,o,l,c,0),a}function lc(i,t,e,n,s){let r;if(s===Cd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=dc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=dc(a/n|0,i[a],i[a+1],r);return r&&qi(r,r.next)&&(Rs(r),r=r.next),r}function Ei(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(qi(e,e.next)||pe(e.prev,e,e.next)===0)){if(Rs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ws(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Ed(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?md(i,n,s,r):pd(i)){t.push(l.i,i.i,c.i),Rs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=gd(Ei(i),t),ws(i,t,e,n,s,r,2)):a===2&&_d(i,t,e,n,s,r):ws(Ei(i),t,e,n,s,r,1);break}}}function pd(i){const t=i.prev,e=i,n=i.next;if(pe(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),f=Math.max(s,r,a),u=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=d&&g.y<=u&&Ts(s,o,r,l,a,c,g.x,g.y)&&pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function md(i,t,e,n){const s=i.prev,r=i,a=i.next;if(pe(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,f=a.y,u=Math.min(o,l,c),g=Math.min(h,d,f),v=Math.max(o,l,c),m=Math.max(h,d,f),p=bo(u,g,t,e,n),x=bo(v,m,t,e,n);let S=i.prevZ,M=i.nextZ;for(;S&&S.z>=p&&M&&M.z<=x;){if(S.x>=u&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Ts(o,h,l,d,c,f,S.x,S.y)&&pe(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=u&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Ts(o,h,l,d,c,f,M.x,M.y)&&pe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=p;){if(S.x>=u&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Ts(o,h,l,d,c,f,S.x,S.y)&&pe(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=x;){if(M.x>=u&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Ts(o,h,l,d,c,f,M.x,M.y)&&pe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function gd(i,t){let e=i;do{const n=e.prev,s=e.next.next;!qi(n,s)&&hc(n,e,e.next,s)&&As(n,s)&&As(s,n)&&(t.push(n.i,e.i,s.i),Rs(e),Rs(e.next),e=i=s),e=e.next}while(e!==i);return Ei(e)}function _d(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Td(a,o)){let l=uc(a,o);a=Ei(a,a.next),l=Ei(l,l.next),ws(a,t,e,n,s,r,0),ws(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function xd(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=lc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(wd(c))}s.sort(vd);for(let r=0;r<s.length;r++)e=Md(s[r],e);return e}function vd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Md(i,t){const e=Sd(i,t);if(!e)return t;const n=uc(e,i);return Ei(n,n.next),Ei(e,e.next)}function Sd(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(qi(i,e))return e;do{if(qi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&cc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);As(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&yd(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function yd(i,t){return pe(i.prev,i,t.prev)<0&&pe(t.next,i,i.next)<0}function Ed(i,t,e,n){let s=i;do s.z===0&&(s.z=bo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,bd(s)}function bd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function bo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function wd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function cc(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ts(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&cc(i,t,e,n,s,r,a,o)}function Td(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ad(i,t)&&(As(i,t)&&As(t,i)&&Rd(i,t)&&(pe(i.prev,i,t.prev)||pe(i,t.prev,t))||qi(i,t)&&pe(i.prev,i,i.next)>0&&pe(t.prev,t,t.next)>0)}function pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function qi(i,t){return i.x===t.x&&i.y===t.y}function hc(i,t,e,n){const s=Sr(pe(i,t,e)),r=Sr(pe(i,t,n)),a=Sr(pe(e,n,i)),o=Sr(pe(e,n,t));return!!(s!==r&&a!==o||s===0&&Mr(i,e,t)||r===0&&Mr(i,n,t)||a===0&&Mr(e,i,n)||o===0&&Mr(e,t,n))}function Mr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Sr(i){return i>0?1:i<0?-1:0}function Ad(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&hc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function As(i,t){return pe(i.prev,i,i.next)<0?pe(i,t,i.next)>=0&&pe(i,i.prev,t)>=0:pe(i,t,i.prev)<0||pe(i,i.next,t)<0}function Rd(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function uc(i,t){const e=wo(i.i,i.x,i.y),n=wo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function dc(i,t,e,n){const s=wo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Rs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Pd{static triangulate(t,e,n=2){return fd(t,e,n)}}class To{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return To.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];fc(t),pc(n,t);let a=t.length;e.forEach(fc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,pc(n,e[l]);const o=Pd.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function fc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function pc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ao extends Eo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ao(t.radius,t.detail)}}class ci extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=e/l,u=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const x=p*f-a;for(let S=0;S<c;S++){const M=S*d-r;g.push(M,-x,0),v.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const S=x+c*p,M=x+c*(p+1),w=x+1+c*(p+1),E=x+1+c*p;u.push(S,M,E),u.push(M,w,E)}this.setIndex(u),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(v,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ro extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new G,f=new G,u=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const x=[],S=p/n,M=a+S*o,w=t*Math.cos(M),E=Math.sqrt(t*t-w*w);let _=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let y=0;y<=e;y++){const C=y/e,b=s+C*r;d.x=-E*Math.cos(b),d.y=w,d.z=E*Math.sin(b),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(C+_,1-S),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const S=h[p][x+1],M=h[p][x],w=h[p+1][x],E=h[p+1][x+1];(p!==0||a>0)&&u.push(S,M,E),(p!==n-1||l<Math.PI)&&u.push(M,w,E)}this.setIndex(u),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(v,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ro(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Yi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(mc(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(mc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=Yi(i[e]);for(const s in n)t[s]=n[s]}return t}function mc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Dd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Ld={clone:Yi,merge:Xe};var Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=Dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Rt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ce().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Kt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Ud extends Xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hi extends vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xs,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _c extends vi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xs,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=sa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fd extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Od extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Co={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(xc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!xc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function xc(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class zd{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const u=c[d],g=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Bd=new zd;class Po{constructor(t){this.manager=t!==void 0?t:Bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Po.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zi=new WeakMap;class kd extends Po{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Co.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Zi.get(a);d===void 0&&(d=[],Zi.set(a,d)),d.push({onLoad:e,onError:s})}return a}const o=fs("img");function l(){h(),e&&e(this);const d=Zi.get(this)||[];for(let f=0;f<d.length;f++){const u=d[f];u.onLoad&&u.onLoad(this)}Zi.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),Co.remove(`image:${t}`);const f=Zi.get(this)||[];for(let u=0;u<f.length;u++){const g=f[u];g.onError&&g.onError(d)}Zi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Co.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}}class vc extends Po{constructor(t){super(t)}load(t,e,n,s){const r=new Ee,a=new kd(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Mc extends Pe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Gd extends Mc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Do=new Kt,Sc=new G,yc=new G;class Hd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=$e,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sc),yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Do.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Do,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ds||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Do)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yr=new G,Er=new mn,Cn=new G;class Ec extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(yr,Er,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yr,Er,Cn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(yr,Er,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yr,Er,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ui=new G,bc=new Lt,wc=new Lt;class Sn extends Ec{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,bc,wc),e.subVectors(wc,bc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ps*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Tc extends Ec{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Vd extends Hd{constructor(){super(new Tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wd extends Mc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Vd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Ki=-90,$i=1;class Lo extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Sn(Ki,$i,t,e);s.layers=this.layers,this.add(s);const r=new Sn(Ki,$i,t,e);r.layers=this.layers,this.add(r);const a=new Sn(Ki,$i,t,e);a.layers=this.layers,this.add(a);const o=new Sn(Ki,$i,t,e);o.layers=this.layers,this.add(o);const l=new Sn(Ki,$i,t,e);l.layers=this.layers,this.add(l);const c=new Sn(Ki,$i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xd extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const Ac=new Kt;class qd{constructor(t,e,n=0,s=1/0){this.ray=new rr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new eo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ac.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ac),this}intersectObject(t,e=!0,n=[]){return Io(t,this,n,e),n.sort(Rc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Io(t[s],this,n,e);return n.sort(Rc),n}}function Rc(i,t){return i.distance-t.distance}function Io(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Io(r[a],t,e,!0)}}class br{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Vt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const jo=class jo{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};jo.prototype.isMatrix2=!0;let Cc=jo;class Yd extends si{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Pc(i,t,e,n){const s=Zd(n);switch(e){case xl:return i*t;case fa:return i*t/s.components*s.byteLength;case pa:return i*t/s.components*s.byteLength;case ni:return i*t*2/s.components*s.byteLength;case ma:return i*t*2/s.components*s.byteLength;case vl:return i*t*3/s.components*s.byteLength;case Tn:return i*t*4/s.components*s.byteLength;case ga:return i*t*4/s.components*s.byteLength;case Bs:case ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gs:case Hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:case Ma:return Math.max(i,16)*Math.max(t,8)/4;case _a:case va:return Math.max(i,8)*Math.max(t,8)/2;case Sa:case ya:case ba:case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ea:case Vs:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ga:case Ha:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ws:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zd(i){switch(i){case $e:case pl:return{byteLength:1,components:1};case us:case ml:case fn:return{byteLength:2,components:1};case ua:case da:return{byteLength:2,components:4};case wn:case ha:case dn:return{byteLength:4,components:1};case gl:case _l:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jn}})),typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jn);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dc(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Kd(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<d.length;u++){const g=d[f],v=d[u];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let u=0,g=d.length;u<g;u++){const v=d[u];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var $d=`#ifdef USE_ALPHAHASH
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
#endif`,tf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nf=`#ifdef USE_AOMAP
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
#endif`,sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rf=`#ifdef USE_BATCHING
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
#endif`,af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hf=`#ifdef USE_IRIDESCENCE
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
#endif`,uf=`#ifdef USE_BUMPMAP
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
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Mf=`#define PI 3.141592653589793
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
} // validated`,Sf=`vec3 transformedNormal = objectNormal;
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
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Af=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Of=`#ifdef USE_GRADIENTMAP
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
}`,zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yf=`PhysicalMaterial material;
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
#endif`,Zf=`uniform sampler2D dfgLUT;
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
}`,Kf=`
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
#endif`,$f=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ap=`#if defined( USE_POINTS_UV )
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
#endif`,op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hp=`#if defined( USE_MORPHCOLORS )
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
#endif`,up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dp=`#ifdef USE_MORPHTARGETS
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
#endif`,fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vp=`#ifdef USE_NORMALMAP
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
#endif`,Mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Up=`float getShadowMask() {
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
}`,Fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Op=`#ifdef USE_SKINNING
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
#endif`,zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bp=`#ifdef USE_SKINNING
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
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,Xp=`#ifdef USE_TRANSMISSION
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gt={alphahash_fragment:$d,alphahash_pars_fragment:Jd,alphamap_fragment:Qd,alphamap_pars_fragment:jd,alphatest_fragment:tf,alphatest_pars_fragment:ef,aomap_fragment:nf,aomap_pars_fragment:sf,batching_pars_vertex:rf,batching_vertex:af,begin_vertex:of,beginnormal_vertex:lf,bsdfs:cf,iridescence_fragment:hf,bumpmap_pars_fragment:uf,clipping_planes_fragment:df,clipping_planes_pars_fragment:ff,clipping_planes_pars_vertex:pf,clipping_planes_vertex:mf,color_fragment:gf,color_pars_fragment:_f,color_pars_vertex:xf,color_vertex:vf,common:Mf,defaultnormal_vertex:Sf,displacementmap_pars_vertex:yf,displacementmap_vertex:Ef,emissivemap_fragment:bf,emissivemap_pars_fragment:wf,colorspace_fragment:Tf,colorspace_pars_fragment:Af,envmap_fragment:Rf,envmap_common_pars_fragment:Cf,envmap_pars_fragment:Pf,envmap_pars_vertex:Df,envmap_physical_pars_fragment:Hf,envmap_vertex:Lf,fog_vertex:If,fog_pars_vertex:Nf,fog_fragment:Uf,fog_pars_fragment:Ff,gradientmap_pars_fragment:Of,lightmap_pars_fragment:zf,lights_lambert_fragment:Bf,lights_lambert_pars_fragment:kf,lights_pars_begin:Gf,lights_toon_fragment:Vf,lights_toon_pars_fragment:Wf,lights_phong_fragment:Xf,lights_phong_pars_fragment:qf,lights_physical_fragment:Yf,lights_physical_pars_fragment:Zf,lights_fragment_begin:Kf,lights_fragment_maps:$f,lights_fragment_end:Jf,lightprobes_pars_fragment:Qf,logdepthbuf_fragment:jf,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:np,map_fragment:ip,map_pars_fragment:sp,map_particle_fragment:rp,map_particle_pars_fragment:ap,metalnessmap_fragment:op,metalnessmap_pars_fragment:lp,morphinstance_vertex:cp,morphcolor_vertex:hp,morphnormal_vertex:up,morphtarget_pars_vertex:dp,morphtarget_vertex:fp,normal_fragment_begin:pp,normal_fragment_maps:mp,normal_pars_fragment:gp,normal_pars_vertex:_p,normal_vertex:xp,normalmap_pars_fragment:vp,clearcoat_normal_fragment_begin:Mp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:yp,iridescence_pars_fragment:Ep,opaque_fragment:bp,packing:wp,premultiplied_alpha_fragment:Tp,project_vertex:Ap,dithering_fragment:Rp,dithering_pars_fragment:Cp,roughnessmap_fragment:Pp,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Ip,shadowmap_vertex:Np,shadowmask_pars_fragment:Up,skinbase_vertex:Fp,skinning_pars_vertex:Op,skinning_vertex:zp,skinnormal_vertex:Bp,specularmap_fragment:kp,specularmap_pars_fragment:Gp,tonemapping_fragment:Hp,tonemapping_pars_fragment:Vp,transmission_fragment:Wp,transmission_pars_fragment:Xp,uv_pars_fragment:qp,uv_pars_vertex:Yp,uv_vertex:Zp,worldpos_vertex:Kp,background_vert:`varying vec2 vUv;
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
}`},Mt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Pn={basic:{uniforms:Xe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Xe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Xe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Xe([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Xe([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Xe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Xe([Mt.points,Mt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Xe([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Xe([Mt.common,Mt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Xe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Xe([Mt.sprite,Mt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:Xe([Mt.common,Mt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:Xe([Mt.lights,Mt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Pn.physical={uniforms:Xe([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const wr={r:0,b:0,g:0},$p=new Kt,Lc=new Ut;Lc.set(-1,0,0,0,1,0,0,0,1);function Jp(i,t,e,n,s,r){const a=new Rt(0);let o=s===!0?0:1,l,c,h=null,d=0,f=null;function u(x){let S=x.isScene===!0?x.background:null;if(S&&S.isTexture){const M=x.backgroundBlurriness>0;S=t.get(S,M)}return S}function g(x){let S=!1;const M=u(x);M===null?m(a,o):M&&M.isColor&&(m(M,1),S=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,S){const M=u(S);M&&M.isCubeTexture?(c===void 0&&(c=new Qt(new yi(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Yi(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($p.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Lc),c.material.toneMapped=Zt.getTransfer(M.colorSpace)!==ne,(h!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Qt(new ci(2,2),new Xn({name:"BackgroundMaterial",uniforms:Yi(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(M.colorSpace)!==ne,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,S){x.getRGB(wr,gc(i)),e.buffers.color.setClear(wr.r,wr.g,wr.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:g,addToRenderList:v,dispose:p}}function Qp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(R,D,F,P,O){let U=!1;const I=d(R,P,F,D);r!==I&&(r=I,c(r.object)),U=u(R,P,F,O),U&&g(R,P,F,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,M(R,D,F,P),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function d(R,D,F,P){const O=P.wireframe===!0;let U=n[D.id];U===void 0&&(U={},n[D.id]=U);const I=R.isInstancedMesh===!0?R.id:0;let X=U[I];X===void 0&&(X={},U[I]=X);let N=X[F.id];N===void 0&&(N={},X[F.id]=N);let B=N[O];return B===void 0&&(B=f(l()),N[O]=B),B}function f(R){const D=[],F=[],P=[];for(let O=0;O<e;O++)D[O]=0,F[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:P,object:R,attributes:{},index:null}}function u(R,D,F,P){const O=r.attributes,U=D.attributes;let I=0;const X=F.getAttributes();for(const N in X)if(X[N].location>=0){const H=O[N];let it=U[N];if(it===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(it=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(it=R.instanceColor)),H===void 0||H.attribute!==it||it&&H.data!==it.data)return!0;I++}return r.attributesNum!==I||r.index!==P}function g(R,D,F,P){const O={},U=D.attributes;let I=0;const X=F.getAttributes();for(const N in X)if(X[N].location>=0){let H=U[N];H===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(H=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(H=R.instanceColor));const it={};it.attribute=H,H&&H.data&&(it.data=H.data),O[N]=it,I++}r.attributes=O,r.attributesNum=I,r.index=P}function v(){const R=r.newAttributes;for(let D=0,F=R.length;D<F;D++)R[D]=0}function m(R){p(R,0)}function p(R,D){const F=r.newAttributes,P=r.enabledAttributes,O=r.attributeDivisors;F[R]=1,P[R]===0&&(i.enableVertexAttribArray(R),P[R]=1),O[R]!==D&&(i.vertexAttribDivisor(R,D),O[R]=D)}function x(){const R=r.newAttributes,D=r.enabledAttributes;for(let F=0,P=D.length;F<P;F++)D[F]!==R[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function S(R,D,F,P,O,U,I){I===!0?i.vertexAttribIPointer(R,D,F,O,U):i.vertexAttribPointer(R,D,F,P,O,U)}function M(R,D,F,P){v();const O=P.attributes,U=F.getAttributes(),I=D.defaultAttributeValues;for(const X in U){const N=U[X];if(N.location>=0){let B=O[X];if(B===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(B=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(B=R.instanceColor)),B!==void 0){const H=B.normalized,it=B.itemSize,st=t.get(B);if(st===void 0)continue;const q=st.buffer,et=st.type,rt=st.bytesPerElement,vt=et===i.INT||et===i.UNSIGNED_INT||B.gpuType===ha;if(B.isInterleavedBufferAttribute){const ot=B.data,bt=ot.isInterleavedBuffer===!0?ot.stride:ot.itemSize,Wt=B.offset;if(ot.isInstancedInterleavedBuffer||ot.isInstancedBufferAttribute){for(let Et=0;Et<N.locationSize;Et++)p(N.location+Et,ot.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Et=0;Et<N.locationSize;Et++)m(N.location+Et);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Et=0;Et<N.locationSize;Et++)S(N.location+Et,it/N.locationSize,et,H,bt*rt,(Wt+it/N.locationSize*Et)*rt,vt)}else{if(B.isInstancedBufferAttribute){for(let ot=0;ot<N.locationSize;ot++)p(N.location+ot,B.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ot=0;ot<N.locationSize;ot++)m(N.location+ot);i.bindBuffer(i.ARRAY_BUFFER,q);for(let ot=0;ot<N.locationSize;ot++)S(N.location+ot,it/N.locationSize,et,H,it*rt,it/N.locationSize*ot*rt,vt)}}else if(I!==void 0){const H=I[X];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(N.location,H);break;case 3:i.vertexAttrib3fv(N.location,H);break;case 4:i.vertexAttrib4fv(N.location,H);break;default:i.vertexAttrib1fv(N.location,H)}}}}x()}function w(){C();for(const R in n){const D=n[R];for(const F in D){const P=D[F];for(const O in P){const U=P[O];for(const I in U)h(U[I].object),delete U[I];delete P[O]}}delete n[R]}}function E(R){if(n[R.id]===void 0)return;const D=n[R.id];for(const F in D){const P=D[F];for(const O in P){const U=P[O];for(const I in U)h(U[I].object),delete U[I];delete P[O]}}delete n[R.id]}function _(R){for(const D in n){const F=n[D];for(const P in F){const O=F[P];if(O[R.id]===void 0)continue;const U=O[R.id];for(const I in U)h(U[I].object),delete U[I];delete O[R.id]}}}function y(R){for(const D in n){const F=n[D],P=R.isInstancedMesh===!0?R.id:0,O=F[P];if(O!==void 0){for(const U in O){const I=O[U];for(const X in I)h(I[X].object),delete I[X];delete O[U]}delete F[P],Object.keys(F).length===0&&delete n[D]}}}function C(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function jp(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function tm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Tn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const y=_===fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==$e&&_!==dn&&!y&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:M,maxSamples:w,samples:E}}function em(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Rn,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,S=x*4;let M=p.clippingState||null;l.value=M,M=h(g,f,S,u);for(let w=0;w!==S;++w)M[w]=e[w];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=u+v*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=u;S!==v;++S,M+=4)a.copy(d[S]).applyMatrix4(x,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}class No extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new rc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yi(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Ai});r.uniforms.tEquirect.value=e;const a=new Qt(s,r),o=e.minFilter;return e.minFilter===bn&&(e.minFilter=We),new Lo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Ic=256,nm=3,im=20,Nc=256,Uc=16,sm=3,rm=new G,am=new Rt;class Tr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Lo(1,10,null),this._boxMesh=new Qt(new yi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=rm}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,g=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(am));const m=new Lo(n,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=g,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Ic,Rl(t))}_fromTexture(t,e){t.mapping===Ci||t.mapping===hs?this._setSize(t.image.length===0?Ic:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Fc(t,!1,!1),n=Math.log2(t)-nm;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Fc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ci||t.mapping===hs?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Oc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=om(),this._integrationMaterial=lm());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Uc);for(let a=0;a<=n;a++){const o=Tr.lodToRoughness(a,n);if(a>n-sm)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(Nc*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=cm());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function Fc(i,t,e){return new No(i,{minFilter:bn,generateMipmaps:t,type:fn,colorSpace:qs,depthBuffer:e})}function Cs(i,t,e){return new Xn({name:i,uniforms:t,vertexShader:Gt.cube_vert,fragmentShader:e,side:Ve,blending:Ai,depthTest:!1,depthWrite:!1})}function om(){return Cs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Nc}u

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
	`)}function lm(){return Cs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Uc}},`

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
	`)}function cm(){return Cs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${im}
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
	`)}function Oc(){return Cs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function zc(){return Cs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function hm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,u=!1){return f==null?null:u?a(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===aa||u===oa)if(t.has(f)){const g=t.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const v=new No(g.height);return v.fromEquirectangularTexture(i,f),t.set(f,v),f.addEventListener("dispose",c),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,g=u===aa||u===oa,v=u===Ci||u===hs;if(g||v){let m=e.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Tr(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const x=f.image;return g&&x&&x.height>0||v&&x&&l(x)?(n===null&&(n=new Tr(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,u){return u===aa?f.mapping=Ci:u===oa&&(f.mapping=hs),f}function l(f){let u=0;const g=6;for(let v=0;v<g;v++)f[v]!==void 0&&u++;return u===g}function c(f){const u=f.target;u.removeEventListener("dispose",c);const g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function um(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ks("WebGLRenderer: "+n+" extension not supported."),s}}}function dm(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(const m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);const v=r.get(g);v&&(t.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function h(g){const v=g.attributes;for(const m in v)t.update(v[m],i.ARRAY_BUFFER)}function d(g){const v=g.index,m=g.attributes.position;let p=0;if(m===void 0)return;const x=v!==null?v.array.length:m.array.length/3-1,S=m.count>=65535?ql:Xl,M=new S(Math.ceil(x/3)*6,1),w=M.array;if(v!==null){const _=v.array;p=v.version;for(let y=0,C=0;y<x;y+=3){const b=_[y+0],R=_[y+1],D=_[y+2];w[C++]=b,w[C++]=R,w[C++]=R,w[C++]=D,w[C++]=D,w[C++]=b}}else{p=m.version;for(let _=0,y=0;_<x;_+=3){const C=_+0,b=_+1,R=_+2;w[y++]=C,w[y++]=b,w[y++]=b,w[y++]=R,w[y++]=R,w[y++]=C}}M.version=p;const E=r.get(g);E&&t.remove(E),r.set(g,M)}function f(g){const v=r.get(g);if(v){const m=g.index;m!==null&&v.version<m.version&&d(g)}else d(g);return r.get(g)}function u(){for(const g in s){const v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function fm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,u){u!==0&&(i.drawElementsInstanced(n,f,r,d*a,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let v=0;for(let m=0;m<u;m++)v+=f[m];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function pm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function mm(i,t,e){const n=new WeakMap,s=new ce;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let C=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",C)};f!==void 0&&f.texture.dispose();const u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;u===!0&&(S=1),g===!0&&(S=2),v===!0&&(S=3);let M=o.attributes.position.count*S,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const E=new Float32Array(M*w*4*d),_=new Nl(E,M,w,d);_.type=dn,_.needsUpdate=!0;const y=S*4;for(let b=0;b<d;b++){const R=m[b],D=p[b],F=x[b],P=M*w*4*b;for(let O=0;O<R.count;O++){const U=O*y;u===!0&&(s.fromBufferAttribute(R,O),E[P+U+0]=s.x,E[P+U+1]=s.y,E[P+U+2]=s.z,E[P+U+3]=0),g===!0&&(s.fromBufferAttribute(D,O),E[P+U+4]=s.x,E[P+U+5]=s.y,E[P+U+6]=s.z,E[P+U+7]=0),v===!0&&(s.fromBufferAttribute(F,O),E[P+U+8]=s.x,E[P+U+9]=s.y,E[P+U+10]=s.z,E[P+U+11]=F.itemSize===4?s.w:1)}}f={count:d,texture:_,size:new Lt(M,w)},n.set(o,f),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let v=0;v<c.length;v++)u+=c[v];const g=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function gm(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const _m={[ol]:"LINEAR_TONE_MAPPING",[ll]:"REINHARD_TONE_MAPPING",[cl]:"CINEON_TONE_MAPPING",[hl]:"ACES_FILMIC_TONE_MAPPING",[dl]:"AGX_TONE_MAPPING",[ra]:"NEUTRAL_TONE_MAPPING",[ul]:"CUSTOM_TONE_MAPPING"};function xm(i,t,e,n,s,r){const a=new An(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new we;h.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new he([0,2,0,0,2,0],2));const d=new Ud({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Qt(h,d),u=new Tc(-1,1,1,-1,0,1);let g=null,v=null,m=!1,p,x=null,S=[],M=!1;this.setSize=function(w,E){a.setSize(w,E),o!==null&&o.setSize(w,E),l!==null&&l.setSize(w,E);for(let _=0;_<S.length;_++){const y=S[_];y.setSize&&y.setSize(w,E)}},this.setEffects=function(w){S=w,M=S.length>0&&S[0].isRenderPass===!0;const E=a.width,_=a.height;S.length>0&&o===null&&(o=new An(E,_,{type:fn,depthBuffer:!1,stencilBuffer:!1}),l=new An(E,_,{type:fn,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&S.some(C=>C.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new Xi(E,_),r===!0&&(c.format=ei,c.type=Pi)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let C=0;C<S.length;C++){const b=S[C];b.setSize&&b.setSize(E,_),y&&b.needsDepthTexture===!0&&b.setDepthTexture&&b.setDepthTexture(c)}},this.begin=function(w,E){if(m||w.toneMapping===Fn&&S.length===0)return!1;if(x=E,E!==null){const _=E.width,y=E.height;(a.width!==_||a.height!==y)&&this.setSize(_,y)}return M===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=Fn,!0},this.hasRenderPass=function(){return M},this.end=function(w,E){w.toneMapping=p,m=!0;let _=a,y=o;for(let C=0;C<S.length;C++){const b=S[C];b.enabled!==!1&&(b.render(w,y,_,E),b.needsSwap!==!1&&(_=y,y=y===o?l:o))}if(g!==w.outputColorSpace||v!==w.toneMapping){g=w.outputColorSpace,v=w.toneMapping,d.defines={},Zt.getTransfer(g)===ne&&(d.defines.SRGB_TRANSFER="");const C=_m[v];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(x),w.render(f,u),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const Bc=new Ee,kc=new Xi(1,1),Gc=new ac(1),Hc=new Nl,Vc=new Wu,Wc=new rc,Xc=[],qc=[],Yc=new Float32Array(16),Zc=new Float32Array(9),Kc=new Float32Array(4);function Ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Xc[s];if(r===void 0&&(r=new Float32Array(s),Xc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ar(i,t){let e=qc[t];e===void 0&&(e=new Int32Array(t),qc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function Em(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Kc.set(n),i.uniformMatrix2fv(this.addr,!1,Kc),Ae(e,n)}}function bm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Zc.set(n),i.uniformMatrix3fv(this.addr,!1,Zc),Ae(e,n)}}function wm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Yc.set(n),i.uniformMatrix4fv(this.addr,!1,Yc),Ae(e,n)}}function Tm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function Pm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function Rr(i){return i.version===0&&(i.compareFunction=yl,i.needsUpdate=!0),i}function Nm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Rr(kc):r=Bc,e.setTexture2D(t||r,s)}function Um(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vc,s)}function Fm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Rr(Gc):r=Wc,e.setTextureCube(t||r,s)}function Om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hc,s)}function zm(i){switch(i){case 5126:return vm;case 35664:return Mm;case 35665:return Sm;case 35666:return ym;case 35674:return Em;case 35675:return bm;case 35676:return wm;case 5124:case 35670:return Tm;case 35667:case 35671:return Am;case 35668:case 35672:return Rm;case 35669:case 35673:return Cm;case 5125:return Pm;case 36294:return Dm;case 36295:return Lm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Om}}function Bm(i,t){i.uniform1fv(this.addr,t)}function km(i,t){const e=Ji(t,this.size,2);i.uniform2fv(this.addr,e)}function Gm(i,t){const e=Ji(t,this.size,3);i.uniform3fv(this.addr,e)}function Hm(i,t){const e=Ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Vm(i,t){const e=Ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Wm(i,t){const e=Ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Xm(i,t){const e=Ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qm(i,t){i.uniform1iv(this.addr,t)}function Ym(i,t){i.uniform2iv(this.addr,t)}function Zm(i,t){i.uniform3iv(this.addr,t)}function Km(i,t){i.uniform4iv(this.addr,t)}function $m(i,t){i.uniform1uiv(this.addr,t)}function Jm(i,t){i.uniform2uiv(this.addr,t)}function Qm(i,t){i.uniform3uiv(this.addr,t)}function jm(i,t){i.uniform4uiv(this.addr,t)}function t0(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Rr(kc):a=Bc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function e0(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Vc,r[a])}function n0(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Rr(Gc):a=Wc;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function i0(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Hc,r[a])}function s0(i){switch(i){case 5126:return Bm;case 35664:return km;case 35665:return Gm;case 35666:return Hm;case 35674:return Vm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return qm;case 35667:case 35671:return Ym;case 35668:case 35672:return Zm;case 35669:case 35673:return Km;case 5125:return $m;case 36294:return Jm;case 36295:return Qm;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}class r0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zm(e.type)}}class a0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=s0(e.type)}}class o0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Uo=/(\w+)(\])?(\[|\.)?/g;function $c(i,t){i.seq.push(t),i.map[t.id]=t}function l0(i,t,e){const n=i.name,s=n.length;for(Uo.lastIndex=0;;){const r=Uo.exec(n),a=Uo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){$c(e,c===void 0?new r0(o,i,t):new a0(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new o0(o),$c(e,d)),e=d}}}class Cr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);l0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Jc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const c0=37297;let h0=0;function u0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Qc=new Ut;function d0(i){Zt._getMatrix(Qc,Zt.workingColorSpace,i);const t=`mat3( ${Qc.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case Ys:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+u0(i.getShaderSource(t),o)}else return r}function f0(i,t){const e=d0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const p0={[ol]:"Linear",[ll]:"Reinhard",[cl]:"Cineon",[hl]:"ACESFilmic",[dl]:"AgX",[ra]:"Neutral",[ul]:"Custom"};function m0(i,t){const e=p0[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Pr=new G;function g0(){Zt.getLuminanceCoefficients(Pr);const i=Pr.x.toFixed(4),t=Pr.y.toFixed(4),e=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function x0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function v0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ps(i){return i!==""}function th(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function eh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const M0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(i){return i.replace(M0,S0)}function S0(i,t){const e=Gt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Fo(e)}const y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(i){return i.replace(y0,E0)}function E0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ih(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const b0={[as]:"SHADOWMAP_TYPE_PCF",[os]:"SHADOWMAP_TYPE_VSM"};function w0(i){return b0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const T0={[hs]:"ENVMAP_MODE_REFRACTION"};function A0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":T0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const R0={[sa]:"ENVMAP_BLENDING_MULTIPLY",[lu]:"ENVMAP_BLENDING_MIX",[cu]:"ENVMAP_BLENDING_ADD"};function C0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":R0[i.combine]||"ENVMAP_BLENDING_NONE"}function P0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=w0(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=A0(e),d=C0(e),f=_0(e),u=x0(r),g=s.createProgram();let v,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Ps).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Ps).join(`
`),m.length>0&&(m+=`
`)):(v=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),m=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Fn?m0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,f0("linearToOutputTexel",e.outputColorSpace),g0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ps).join(`
`)),a=Fo(a),a=th(a,e),a=eh(a,e),o=Fo(o),o=th(o,e),o=eh(o,e),a=nh(a),o=nh(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=p+v+a,S=p+m+o,M=Jc(s,s.VERTEX_SHADER,x),w=Jc(s,s.FRAGMENT_SHADER,S);s.attachShader(g,M),s.attachShader(g,w),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(b){if(i.debug.checkShaderErrors){const R=s.getProgramInfoLog(g)||"",D=s.getShaderInfoLog(M)||"",F=s.getShaderInfoLog(w)||"",P=R.trim(),O=D.trim(),U=F.trim();let I=!0,X=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,w);else{const N=jc(s,M,"vertex"),B=jc(s,w,"fragment");Jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+P+`
`+N+`
`+B)}else P!==""?Nt("WebGLProgram: Program Info Log:",P):(O===""||U==="")&&(X=!1);X&&(b.diagnostics={runnable:I,programLog:P,vertexShader:{log:O,prefix:v},fragmentShader:{log:U,prefix:m}})}s.deleteShader(M),s.deleteShader(w),_=new Cr(s,g),y=v0(s,g)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(g,c0)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=h0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=w,this}let D0=0;class L0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new I0(t),e.set(t,n)),n}}class I0{constructor(t){this.id=D0++,this.code=t,this.usedTimes=0}}function N0(i){return i===ni||i===Vs||i===Ws}function U0(i,t,e,n,s,r){const a=new eo,o=new L0,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,y,C,b,R,D){const F=b.fog,P=R.geometry,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?b.environment:null,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,I=t.get(_.envMap||O,U),X=f[_.type];let N=n.precision;_.precision!==null&&(N=n.getMaxPrecision(_.precision),N!==_.precision&&Nt("WebGLProgram.getParameters:",_.precision,"not supported, using",N,"instead."));const B=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,H=B!==void 0?B.length:0;let it=0;P.morphAttributes.position!==void 0&&(it=1),P.morphAttributes.normal!==void 0&&(it=2),P.morphAttributes.color!==void 0&&(it=3);let st,q,et,rt;if(X){const St=Pn[X];st=St.vertexShader,q=St.fragmentShader}else{st=_.vertexShader,q=_.fragmentShader;const St=o.getVertexShaderStage(_),se=o.getFragmentShaderStage(_);o.update(_,St,se),et=St.id,rt=se.id}const vt=i.getRenderTarget(),ot=i.state.buffers.depth.getReversed(),bt=R.isInstancedMesh===!0,Wt=R.isBatchedMesh===!0,Et=!!_.map,Bt=!!_.matcap,Xt=!!I,zt=Xt&&I.isPMREMTexture===!0,ge=!!_.aoMap,ee=!!_.lightMap,ae=!!_.bumpMap&&_.wireframe===!1,_e=!!_.normalMap,In=!!_.displacementMap,Le=!!_.emissiveMap,on=!!_.metalnessMap,ln=!!_.roughnessMap,cn=_.anisotropy>0,V=_.clearcoat>0,hn=_.diffuseRoughness>0,de=_.dispersion>0,fe=_.retroreflectivity>0,xt=_.iridescence>0,Ce=_.sheen>0,It=_.transmission>0,Ft=cn&&!!_.anisotropyMap,L=V&&!!_.clearcoatMap,T=V&&!!_.clearcoatNormalMap,Z=V&&!!_.clearcoatRoughnessMap,lt=hn&&!!_.diffuseRoughnessMap,nt=xt&&!!_.iridescenceMap,ut=xt&&!!_.iridescenceThicknessMap,gt=Ce&&!!_.sheenColorMap,Q=Ce&&!!_.sheenRoughnessMap,j=!!_.specularMap,ft=!!_.specularColorMap,z=!!_.specularIntensityMap,tt=It&&!!_.transmissionMap,J=It&&!!_.thicknessMap,pt=!!_.gradientMap,ht=!!_.alphaMap,dt=_.alphaTest>0,Pt=!!_.alphaHash,Ht=!!_.extensions;let ct=Fn;_.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ct=i.toneMapping);const Dt=zt?I.isCompressedCubeTexture?I.image[0].mipmaps:I.mipmaps:null,kt={shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:st,fragmentShader:q,defines:_.defines,customVertexShaderID:et,customFragmentShaderID:rt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:N,batching:Wt,batchingColor:Wt&&R._colorsTexture!==null,instancing:bt,instancingColor:bt&&R.instanceColor!==null,instancingMorph:bt&&R.morphTexture!==null,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Et,matcap:Bt,envMap:Xt,envMapMode:Xt&&I.mapping,envMapPMREM:zt,envMapMaxLod:zt?Dt.length-1:null,envMapSize:zt?Dt[0].width:null,aoMap:ge,lightMap:ee,bumpMap:ae,normalMap:_e,displacementMap:In,emissiveMap:Le,normalMapObjectSpace:_e&&_.normalMapType===du,normalMapTangentSpace:_e&&_.normalMapType===Xs,packedNormalMap:_e&&_.normalMapType===Xs&&N0(_.normalMap.format),metalnessMap:on,roughnessMap:ln,anisotropy:cn,anisotropyMap:Ft,clearcoat:V,clearcoatMap:L,clearcoatNormalMap:T,clearcoatRoughnessMap:Z,diffuseRoughness:hn,diffuseRoughnessMap:lt,dispersion:de,retroreflection:fe,iridescence:xt,iridescenceMap:nt,iridescenceThicknessMap:ut,sheen:Ce,sheenColorMap:gt,sheenRoughnessMap:Q,specularMap:j,specularColorMap:ft,specularIntensityMap:z,transmission:It,transmissionMap:tt,thicknessMap:J,gradientMap:pt,opaque:_.transparent===!1&&_.blending===ls&&_.alphaToCoverage===!1,alphaMap:ht,alphaTest:dt,alphaHash:Pt,combine:_.combine,mapUv:Et&&u(_.map.channel),aoMapUv:ge&&u(_.aoMap.channel),lightMapUv:ee&&u(_.lightMap.channel),bumpMapUv:ae&&u(_.bumpMap.channel),normalMapUv:_e&&u(_.normalMap.channel),displacementMapUv:In&&u(_.displacementMap.channel),emissiveMapUv:Le&&u(_.emissiveMap.channel),metalnessMapUv:on&&u(_.metalnessMap.channel),roughnessMapUv:ln&&u(_.roughnessMap.channel),anisotropyMapUv:Ft&&u(_.anisotropyMap.channel),clearcoatMapUv:L&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:T&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:lt&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:Q&&u(_.sheenRoughnessMap.channel),specularMapUv:j&&u(_.specularMap.channel),specularColorMapUv:ft&&u(_.specularColorMap.channel),specularIntensityMapUv:z&&u(_.specularIntensityMap.channel),transmissionMapUv:tt&&u(_.transmissionMap.channel),thicknessMapUv:J&&u(_.thicknessMap.channel),alphaMapUv:ht&&u(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(_e||cn),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!P.attributes.uv&&(Et||ht),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&_e===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ot,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:it,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:D.filter(St=>St.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,decodeVideoTexture:Et&&_.map.isVideoTexture===!0&&Zt.getTransfer(_.map.colorSpace)===ne,decodeVideoTextureEmissive:Le&&_.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(_.emissiveMap.colorSpace)===ne,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ze,flipSided:_.side===Ve,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ht&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&_.extensions.multiDraw===!0||Wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function v(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)y.push(C),y.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(m(y,_),p(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function m(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapPMREM),_.push(y.envMapMaxLod),_.push(y.envMapSize),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.diffuseRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.numSunLights),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numSunLightShadows),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.numLightProbeGrids),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function p(_,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){const y=f[_.type];let C;if(y){const b=Pn[y];C=Ld.clone(b.uniforms)}else C=_.uniforms;return C}function S(_,y){let C=h.get(y);return C!==void 0?++C.usedTimes:(C=new P0(i,y,_,s),c.push(C),h.set(y,C)),C}function M(_){if(--_.usedTimes===0){const y=c.indexOf(_);c[y]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:x,acquireProgram:S,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:E}}function F0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function O0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function sh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,g,v,m,p){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:u,material:g,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:p},i[t]=x):(x.id=f.id,x.object=f,x.geometry=u,x.material=g,x.materialVariant=a(f),x.groupOrder=v,x.renderOrder=f.renderOrder,x.z=m,x.group=p),t++,x}function l(f,u,g,v,m,p,x){x.reversedDepth===!0&&(m=-m);const S=o(f,u,g,v,m,p);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):e.push(S)}function c(f,u,g,v,m,p){const x=o(f,u,g,v,m,p);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):e.unshift(x)}function h(f,u){e.length>1&&e.sort(f||O0),n.length>1&&n.sort(u||sh),s.length>1&&s.sort(u||sh)}function d(){for(let f=t,u=i.length;f<u;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function z0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new rh,i.set(n,[a])):s>=r.length?(a=new rh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function B0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Rt};break;case"SpotLight":e={position:new G,direction:new G,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function k0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let G0=0;function H0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function V0(i){const t=new B0,e=k0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const s=new G,r=new Kt,a=new Kt;function o(c){let h=0,d=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let u=0,g=0,v=0,m=0,p=0,x=0,S=0,M=0,w=0,E=0,_=0,y=0,C=0,b=0;c.sort(H0);for(let D=0,F=c.length;D<F;D++){const P=c[D],O=P.color,U=P.intensity,I=P.distance;let X=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ni?X=P.shadow.map.texture:X=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*U,d+=O.g*U,f+=O.b*U;else if(P.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(P.sh.coefficients[N],U);b++}else if(P.isSunLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,H=e.get(P);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[g]=H,n.sunShadowMap[g]=X;const it=B.getViewportCount();for(let st=0;st<it;st++)n.sunShadowMatrix[v+st]=B.getMatrix(st),n.sunShadowCascade[v+st]=B._cascadeData[st];v+=it,g++}n.sun[u]=N,u++}else if(P.isDirectionalLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,H=e.get(P);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=P.shadow.matrix,w++}n.directional[m]=N,m++}else if(P.isSpotLight){const N=t.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(O).multiplyScalar(U),N.distance=I,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,n.spot[x]=N;const B=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,B.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[x]=B.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=X,_++}x++}else if(P.isRectAreaLight){const N=t.get(P);N.color.copy(O).multiplyScalar(U),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),n.rectArea[S]=N,S++}else if(P.isPointLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){const B=P.shadow,H=e.get(P);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,H.shadowCameraNear=B.camera.near,H.shadowCameraFar=B.camera.far,n.pointShadow[p]=H,n.pointShadowMap[p]=X,n.pointShadowMatrix[p]=P.shadow.matrix,E++}n.point[p]=N,p++}else if(P.isHemisphereLight){const N=t.get(P);N.skyColor.copy(P.color).multiplyScalar(U),N.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[M]=N,M++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const R=n.hash;(R.sunLength!==u||R.directionalLength!==m||R.pointLength!==p||R.spotLength!==x||R.rectAreaLength!==S||R.hemiLength!==M||R.numSunShadows!==g||R.numDirectionalShadows!==w||R.numPointShadows!==E||R.numSpotShadows!==_||R.numSpotMaps!==y||R.numLightProbes!==b)&&(n.sun.length=u,n.directional.length=m,n.spot.length=x,n.rectArea.length=S,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+y-C,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=b,R.sunLength=u,R.directionalLength=m,R.pointLength=p,R.spotLength=x,R.rectAreaLength=S,R.hemiLength=M,R.numSunShadows=g,R.numDirectionalShadows=w,R.numPointShadows=E,R.numSpotShadows=_,R.numSpotMaps=y,R.numLightProbes=b,n.version=G0++)}function l(c,h){let d=0,f=0,u=0,g=0,v=0,m=0;const p=h.matrixWorldInverse;for(let x=0,S=c.length;x<S;x++){const M=c[x];if(M.isSunLight){const w=n.sun[d];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),d++}else if(M.isDirectionalLight){const w=n.directional[f];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),f++}else if(M.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const w=n.rectArea[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const w=n.point[u];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),u++}else if(M.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function ah(i){const t=new V0(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){n.push(d)}function l(){t.setup(e),s.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function W0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ah(i),t.set(s,[o])):r>=a.length?(o=new ah(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const X0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q0=`uniform sampler2D shadow_pass;
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
}`,Y0=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Z0=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],oh=new Kt,Ds=new G,Oo=new G;function K0(i,t,e){let n=new Es;const s=new Lt,r=new Lt,a=new ce,o=new Fd,l=new Od,c={},h=e.maxTextureSize,d={[jn]:Ve,[Ve]:jn,[ze]:ze},f=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:X0,fragmentShader:q0}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Qt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=as;let p=this.type;this.render=function(E,_,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Vh&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=as);const C=i.getRenderTarget(),b=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Ai),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=p!==this.type;F&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(O=>O.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,O=E.length;P<O;P++){const U=E[P],I=U.shadow;if(I===void 0){Nt("WebGLShadowMap:",U,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const X=I.getFrameExtents();s.multiply(X),r.copy(I.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,I.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,I.mapSize.y=r.y));const N=i.state.buffers.depth.getReversed();if(I.camera._reversedDepth=N,I.map===null||F===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===os){if(U.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new An(s.x,s.y,{format:ni,type:fn,minFilter:We,magFilter:We,generateMipmaps:!1}),I.map.texture.name=U.name+".shadowMap",I.map.depthTexture=new Xi(s.x,s.y,dn),I.map.depthTexture.name=U.name+".shadowMapDepth",I.map.depthTexture.format=ti,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Ue,I.map.depthTexture.magFilter=Ue}else U.isPointLight?(I.map=new No(s.x),I.map.depthTexture=new ac(s.x,wn)):(I.map=new An(s.x,s.y),I.map.depthTexture=new Xi(s.x,s.y,wn)),I.map.depthTexture.name=U.name+".shadowMap",I.map.depthTexture.format=ti,this.type===as?(I.map.depthTexture.compareFunction=N?Sl:Ml,I.map.depthTexture.minFilter=We,I.map.depthTexture.magFilter=We):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Ue,I.map.depthTexture.magFilter=Ue);I.camera.updateProjectionMatrix()}I.map.isWebGLCubeRenderTarget!==!0&&(I.map.width!==s.x||I.map.height!==s.y)&&I.map.setSize(s.x,s.y);const B=I.map.isWebGLCubeRenderTarget?6:I.getViewportCount();U.isPointLight!==!0&&I.updateMatrices(U,y);const H=I.camera.layers.mask&4294967294?I.camera.layers:y.layers;for(let it=0;it<B;it++){const st=I.getCamera(it);if(U.isPointLight){const q=I.camera,et=I.matrix,rt=U.distance||q.far;rt!==q.far&&(q.far=rt,q.updateProjectionMatrix()),Ds.setFromMatrixPosition(U.matrixWorld),q.position.copy(Ds),Oo.copy(q.position),Oo.add(Y0[it]),q.up.copy(Z0[it]),q.lookAt(Oo),q.updateMatrixWorld(),et.makeTranslation(-Ds.x,-Ds.y,-Ds.z),oh.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),I._frustum.setFromProjectionMatrix(oh,q.coordinateSystem,q.reversedDepth)}if(I.map.isWebGLCubeRenderTarget)i.setRenderTarget(I.map,it),i.clear();else{it===0&&(i.setRenderTarget(I.map),i.clear());const q=I.getViewport(it);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),D.viewport(a)}n=I.getFrustum(it),M(_,y,st,U,H,this.type)}I.isPointLightShadow!==!0&&this.type===os&&x(I,y),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(C,b,R)};function x(E,_){const y=t.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new An(s.x,s.y,{format:ni,type:fn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,y,f,v,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,y,u,v,null)}function S(E,_,y,C){let b=null;const R=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)b=R;else if(b=y.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const D=b.uuid,F=_.uuid;let P=c[D];P===void 0&&(P={},c[D]=P);let O=P[F];O===void 0&&(O=b.clone(),P[F]=O,_.addEventListener("dispose",w)),b=O}if(b.visible=_.visible,b.wireframe=_.wireframe,C===os?b.side=_.shadowSide!==null?_.shadowSide:_.side:b.side=_.shadowSide!==null?_.shadowSide:d[_.side],b.alphaMap=_.alphaMap,b.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,b.map=_.map,b.clipShadows=_.clipShadows,b.clippingPlanes=_.clippingPlanes,b.clipIntersection=_.clipIntersection,b.displacementMap=_.displacementMap,b.displacementScale=_.displacementScale,b.displacementBias=_.displacementBias,b.wireframeLinewidth=_.wireframeLinewidth,b.linewidth=_.linewidth,y.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const D=i.properties.get(b);D.light=y}return b}function M(E,_,y,C,b,R){if(E.visible===!1)return;if(E.layers.test(b)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===os)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const P=t.update(E),O=E.material;if(Array.isArray(O)){const U=P.groups;for(let I=0,X=U.length;I<X;I++){const N=U[I],B=O[N.materialIndex];if(B&&B.visible){const H=S(E,B,C,R);E.onBeforeShadow(i,E,_,y,P,H,N),i.renderBufferDirect(y,null,P,H,E,N),E.onAfterShadow(i,E,_,y,P,H,N)}}}else if(O.visible){const U=S(E,O,C,R);E.onBeforeShadow(i,E,_,y,P,U,null),i.renderBufferDirect(y,null,P,U,E,null),E.onAfterShadow(i,E,_,y,P,U,null)}}const F=E.children;for(let P=0,O=F.length;P<O;P++)M(F[P],_,y,C,b,R)}function w(E){E.target.removeEventListener("dispose",w);for(const y in c){const C=c[y],b=E.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}function $0(i,t){function e(){let z=!1;const tt=new ce;let J=null;const pt=new ce(0,0,0,0);return{setMask:function(ht){J!==ht&&!z&&(i.colorMask(ht,ht,ht,ht),J=ht)},setLocked:function(ht){z=ht},setClear:function(ht,dt,Pt,Ht,ct){ct===!0&&(ht*=Ht,dt*=Ht,Pt*=Ht),tt.set(ht,dt,Pt,Ht),pt.equals(tt)===!1&&(i.clearColor(ht,dt,Pt,Ht),pt.copy(tt))},reset:function(){z=!1,J=null,pt.set(-1,0,0,0)}}}function n(){let z=!1,tt=!1,J=null,pt=null,ht=null;return{setReversed:function(dt){if(tt!==dt){const Pt=t.get("EXT_clip_control");dt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),tt=dt;const Ht=ht;ht=null,this.setClear(Ht)}},getReversed:function(){return tt},setTest:function(dt){dt?ot(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(dt){J!==dt&&!z&&(i.depthMask(dt),J=dt)},setFunc:function(dt){if(tt&&(dt=Eu[dt]),pt!==dt){switch(dt){case Jr:i.depthFunc(i.NEVER);break;case Qr:i.depthFunc(i.ALWAYS);break;case jr:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case ta:i.depthFunc(i.EQUAL);break;case ea:i.depthFunc(i.GEQUAL);break;case na:i.depthFunc(i.GREATER);break;case ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=dt}},setLocked:function(dt){z=dt},setClear:function(dt){ht!==dt&&(ht=dt,tt&&(dt=1-dt),i.clearDepth(dt))},reset:function(){z=!1,J=null,pt=null,ht=null,tt=!1}}}function s(){let z=!1,tt=null,J=null,pt=null,ht=null,dt=null,Pt=null,Ht=null,ct=null;return{setTest:function(Dt){z||(Dt?ot(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Dt){tt!==Dt&&!z&&(i.stencilMask(Dt),tt=Dt)},setFunc:function(Dt,kt,St){(J!==Dt||pt!==kt||ht!==St)&&(i.stencilFunc(Dt,kt,St),J=Dt,pt=kt,ht=St)},setOp:function(Dt,kt,St){(dt!==Dt||Pt!==kt||Ht!==St)&&(i.stencilOp(Dt,kt,St),dt=Dt,Pt=kt,Ht=St)},setLocked:function(Dt){z=Dt},setClear:function(Dt){ct!==Dt&&(i.clearStencil(Dt),ct=Dt)},reset:function(){z=!1,tt=null,J=null,pt=null,ht=null,dt=null,Pt=null,Ht=null,ct=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let h={},d={},f={},u=new WeakMap,g=[],v=null,m=!1,p=null,x=null,S=null,M=null,w=null,E=null,_=null,y=new Rt(0,0,0),C=0,b=!1,R=null,D=null,F=null,P=null,O=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,X=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(N)[1]),I=X>=1):N.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),I=X>=2);let B=null,H={};const it=i.getParameter(i.SCISSOR_BOX),st=i.getParameter(i.VIEWPORT),q=new ce().fromArray(it),et=new ce().fromArray(st);function rt(z,tt,J,pt){const ht=new Uint8Array(4),dt=i.createTexture();i.bindTexture(z,dt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<J;Pt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(tt+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return dt}const vt={};vt[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(i.DEPTH_TEST),a.setFunc(cs),ae(!1),_e(nl),ot(i.CULL_FACE),ge(Ai);function ot(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function bt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Wt(z,tt){return f[z]!==tt?(i.bindFramebuffer(z,tt),f[z]=tt,z===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=tt),z===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function Et(z,tt){let J=g,pt=!1;if(z){J=u.get(tt),J===void 0&&(J=[],u.set(tt,J));const ht=z.textures;if(J.length!==ht.length||J[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Pt=ht.length;dt<Pt;dt++)J[dt]=i.COLOR_ATTACHMENT0+dt;J.length=ht.length,pt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,pt=!0);pt&&i.drawBuffers(J)}function Bt(z){return v!==z?(i.useProgram(z),v=z,!0):!1}const Xt={[Ri]:i.FUNC_ADD,[Xh]:i.FUNC_SUBTRACT,[qh]:i.FUNC_REVERSE_SUBTRACT};Xt[Yh]=i.MIN,Xt[Zh]=i.MAX;const zt={[Kh]:i.ZERO,[$h]:i.ONE,[Jh]:i.SRC_COLOR,[rl]:i.SRC_ALPHA,[iu]:i.SRC_ALPHA_SATURATE,[eu]:i.DST_COLOR,[jh]:i.DST_ALPHA,[Qh]:i.ONE_MINUS_SRC_COLOR,[al]:i.ONE_MINUS_SRC_ALPHA,[nu]:i.ONE_MINUS_DST_COLOR,[tu]:i.ONE_MINUS_DST_ALPHA,[su]:i.CONSTANT_COLOR,[ru]:i.ONE_MINUS_CONSTANT_COLOR,[au]:i.CONSTANT_ALPHA,[ou]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(z,tt,J,pt,ht,dt,Pt,Ht,ct,Dt){if(z===Ai){m===!0&&(bt(i.BLEND),m=!1);return}if(m===!1&&(ot(i.BLEND),m=!0),z!==Wh){if(z!==p||Dt!==b){if((x!==Ri||w!==Ri)&&(i.blendEquation(i.FUNC_ADD),x=Ri,w=Ri),Dt)switch(z){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $r:i.blendFunc(i.ONE,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Jt("WebGLState: Invalid blending: ",z);break}else switch(z){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case il:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sl:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",z);break}S=null,M=null,E=null,_=null,y.set(0,0,0),C=0,p=z,b=Dt}return}ht=ht||tt,dt=dt||J,Pt=Pt||pt,(tt!==x||ht!==w)&&(i.blendEquationSeparate(Xt[tt],Xt[ht]),x=tt,w=ht),(J!==S||pt!==M||dt!==E||Pt!==_)&&(i.blendFuncSeparate(zt[J],zt[pt],zt[dt],zt[Pt]),S=J,M=pt,E=dt,_=Pt),(Ht.equals(y)===!1||ct!==C)&&(i.blendColor(Ht.r,Ht.g,Ht.b,ct),y.copy(Ht),C=ct),p=z,b=!1}function ee(z,tt){z.side===ze?bt(i.CULL_FACE):ot(i.CULL_FACE);let J=z.side===Ve;tt&&(J=!J),ae(J),z.blending===ls&&z.transparent===!1?ge(Ai):ge(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const pt=z.stencilWrite;o.setTest(pt),pt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Le(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(z){R!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),R=z)}function _e(z){z!==Gh?(ot(i.CULL_FACE),z!==D&&(z===nl?i.cullFace(i.BACK):z===Hh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),D=z}function In(z){z!==F&&(I&&i.lineWidth(z),F=z)}function Le(z,tt,J){z?(ot(i.POLYGON_OFFSET_FILL),(P!==tt||O!==J)&&(P=tt,O=J,a.getReversed()&&(tt=-tt,J=-J),i.polygonOffset(tt,J))):bt(i.POLYGON_OFFSET_FILL)}function on(z){z?ot(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function ln(z){z===void 0&&(z=i.TEXTURE0+U-1),B!==z&&(i.activeTexture(z),B=z)}function cn(z,tt,J){J===void 0&&(B===null?J=i.TEXTURE0+U-1:J=B);let pt=H[J];pt===void 0&&(pt={type:void 0,texture:void 0},H[J]=pt),(pt.type!==z||pt.texture!==tt)&&(B!==J&&(i.activeTexture(J),B=J),i.bindTexture(z,tt||vt[z]),pt.type=z,pt.texture=tt)}function V(){const z=H[B];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function hn(){try{i.compressedTexImage2D(...arguments)}catch(z){Jt("WebGLState:",z)}}function de(){try{i.compressedTexImage3D(...arguments)}catch(z){Jt("WebGLState:",z)}}function fe(){try{i.texSubImage2D(...arguments)}catch(z){Jt("WebGLState:",z)}}function xt(){try{i.texSubImage3D(...arguments)}catch(z){Jt("WebGLState:",z)}}function Ce(){try{i.compressedTexSubImage2D(...arguments)}catch(z){Jt("WebGLState:",z)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(z){Jt("WebGLState:",z)}}function Ft(){try{i.texStorage2D(...arguments)}catch(z){Jt("WebGLState:",z)}}function L(){try{i.texStorage3D(...arguments)}catch(z){Jt("WebGLState:",z)}}function T(){try{i.texImage2D(...arguments)}catch(z){Jt("WebGLState:",z)}}function Z(){try{i.texImage3D(...arguments)}catch(z){Jt("WebGLState:",z)}}function lt(z){return d[z]!==void 0?d[z]:i.getParameter(z)}function nt(z,tt){d[z]!==tt&&(i.pixelStorei(z,tt),d[z]=tt)}function ut(z){q.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),q.copy(z))}function gt(z){et.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),et.copy(z))}function Q(z,tt){let J=c.get(tt);J===void 0&&(J=new WeakMap,c.set(tt,J));let pt=J.get(z);pt===void 0&&(pt=i.getUniformBlockIndex(tt,z.name),i.uniformBlockBinding(tt,pt,pt),J.set(z,pt))}function j(z,tt,J){const ht=c.get(tt).get(z);l[ht]!==J&&(i.bindBufferBase(i.UNIFORM_BUFFER,ht,J),l[ht]=J)}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},B=null,H={},f={},l={},u=new WeakMap,g=[],v=null,m=!1,p=null,x=null,S=null,M=null,w=null,E=null,_=null,y=new Rt(0,0,0),C=0,b=!1,R=null,D=null,F=null,P=null,O=null,q.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:bt,bindFramebuffer:Wt,drawBuffers:Et,useProgram:Bt,setBlending:ge,setMaterial:ee,setFlipSided:ae,setCullFace:_e,setLineWidth:In,setPolygonOffset:Le,setScissorTest:on,activeTexture:ln,bindTexture:cn,unbindTexture:V,compressedTexImage2D:hn,compressedTexImage3D:de,texImage2D:T,texImage3D:Z,pixelStorei:nt,getParameter:lt,updateUBOMapping:Q,uniformBlockBinding:j,texStorage2D:Ft,texStorage3D:L,texSubImage2D:fe,texSubImage3D:xt,compressedTexSubImage2D:Ce,compressedTexSubImage3D:It,scissor:ut,viewport:gt,reset:ft}}function J0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,d=new Set;let f;const u=new WeakMap,g=new Set,v=new FinalizationRegistry(L=>g.delete(L));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,T){return m?new OffscreenCanvas(L,T):fs("canvas")}function x(L,T,Z){let lt=1;const nt=Ft(L);if((nt.width>Z||nt.height>Z)&&(lt=Z/Math.max(nt.width,nt.height)),lt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ut=Math.floor(lt*nt.width),gt=Math.floor(lt*nt.height);f===void 0&&(f=p(ut,gt));const Q=T?p(ut,gt):f;return Q.width=ut,Q.height=gt,Q.getContext("2d").drawImage(L,0,0,ut,gt),Nt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+ut+"x"+gt+")."),Q}else return"data"in L&&Nt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),L;return L}function S(L){return L.generateMipmaps}function M(L){i.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(L,T,Z,lt,nt,ut=!1){if(L!==null){if(i[L]!==void 0)return i[L];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let gt;lt&&(gt=t.get("EXT_texture_norm16"),gt||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=T;if(T===i.RED&&(Z===i.FLOAT&&(Q=i.R32F),Z===i.HALF_FLOAT&&(Q=i.R16F),Z===i.UNSIGNED_BYTE&&(Q=i.R8),Z===i.UNSIGNED_SHORT&&gt&&(Q=gt.R16_EXT),Z===i.SHORT&&gt&&(Q=gt.R16_SNORM_EXT)),T===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(Q=i.R8UI),Z===i.UNSIGNED_SHORT&&(Q=i.R16UI),Z===i.UNSIGNED_INT&&(Q=i.R32UI),Z===i.BYTE&&(Q=i.R8I),Z===i.SHORT&&(Q=i.R16I),Z===i.INT&&(Q=i.R32I)),T===i.RG&&(Z===i.FLOAT&&(Q=i.RG32F),Z===i.HALF_FLOAT&&(Q=i.RG16F),Z===i.UNSIGNED_BYTE&&(Q=i.RG8),Z===i.UNSIGNED_SHORT&&gt&&(Q=gt.RG16_EXT),Z===i.SHORT&&gt&&(Q=gt.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(Q=i.RG8UI),Z===i.UNSIGNED_SHORT&&(Q=i.RG16UI),Z===i.UNSIGNED_INT&&(Q=i.RG32UI),Z===i.BYTE&&(Q=i.RG8I),Z===i.SHORT&&(Q=i.RG16I),Z===i.INT&&(Q=i.RG32I)),T===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),Z===i.UNSIGNED_INT&&(Q=i.RGB32UI),Z===i.BYTE&&(Q=i.RGB8I),Z===i.SHORT&&(Q=i.RGB16I),Z===i.INT&&(Q=i.RGB32I)),T===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),Z===i.UNSIGNED_INT&&(Q=i.RGBA32UI),Z===i.BYTE&&(Q=i.RGBA8I),Z===i.SHORT&&(Q=i.RGBA16I),Z===i.INT&&(Q=i.RGBA32I)),T===i.RGB&&(Z===i.UNSIGNED_SHORT&&gt&&(Q=gt.RGB16_EXT),Z===i.SHORT&&gt&&(Q=gt.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),T===i.RGBA){const j=ut?Ys:Zt.getTransfer(nt);Z===i.FLOAT&&(Q=i.RGBA32F),Z===i.HALF_FLOAT&&(Q=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(Q=j===ne?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&gt&&(Q=gt.RGBA16_EXT),Z===i.SHORT&&gt&&(Q=gt.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function _(L,T){let Z;return L?T===null||T===wn||T===Pi?Z=i.DEPTH24_STENCIL8:T===dn?Z=i.DEPTH32F_STENCIL8:T===us&&(Z=i.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===wn||T===Pi?Z=i.DEPTH_COMPONENT24:T===dn?Z=i.DEPTH_COMPONENT32F:T===us&&(Z=i.DEPTH_COMPONENT16),Z}function y(L,T){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ue&&L.minFilter!==We?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function C(L){const T=new WeakRef(L);n.get(L).__ref=T,g.add(T),v.register(L,T,T)}function b(L){const T=n.get(L).__ref;T!==void 0&&(g.delete(T),v.unregister(T))}function R(L){F(L.target)}function D(L){P(L.target)}function F(L){L.removeEventListener("dispose",R),b(L),U(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&d.delete(L)}function P(L){L.removeEventListener("dispose",D),b(L),X(L)}function O(){for(const L of g){const T=L.deref();T!==void 0&&(T.isRenderTarget===!0?P(T):F(T))}g.clear(),d.clear()}function U(L){const T=n.get(L);if(T.__webglInit===void 0)return;const Z=L.source,lt=u.get(Z);if(lt){const nt=lt[T.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&I(L),Object.keys(lt).length===0&&u.delete(Z)}n.remove(L)}function I(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const Z=L.source,lt=u.get(Z);delete lt[T.__cacheKey],a.memory.textures--}function X(L){const T=n.get(L);T.__depthDisposeCallback&&T.__depthDisposeCallback();const Z=L.depthTexture;if(Z&&Z.renderTarget===L&&F(Z),L.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(T.__webglFramebuffer[nt]))for(let ut=0;ut<T.__webglFramebuffer[nt].length;ut++)i.deleteFramebuffer(T.__webglFramebuffer[nt][ut]);else i.deleteFramebuffer(T.__webglFramebuffer[nt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[nt])}else{if(Array.isArray(T.__webglFramebuffer))for(let nt=0;nt<T.__webglFramebuffer.length;nt++)i.deleteFramebuffer(T.__webglFramebuffer[nt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let nt=0;nt<T.__webglColorRenderbuffer.length;nt++)T.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[nt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const lt=L.textures;for(let nt=0,ut=lt.length;nt<ut;nt++){const gt=n.get(lt[nt]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(lt[nt])}n.remove(L)}let N=0;function B(){N=0}function H(){return N}function it(L){N=L}function st(){const L=N;return L>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,L}function q(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.mipmapsAutoUpdate),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function et(L,T){const Z=n.get(L);if(L.isVideoTexture&&Ce(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Z.__version!==L.version){const lt=L.image;if(lt===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(Z,L,T);return}}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+T)}function rt(L,T){const Z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){ee(Z,L,T);return}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+T)}function vt(L,T){const Z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){ee(Z,L,T);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+T)}function ot(L,T){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){ae(Z,L,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+T)}const bt={[Os]:i.REPEAT,[un]:i.CLAMP_TO_EDGE,[la]:i.MIRRORED_REPEAT},Wt={[Ue]:i.NEAREST,[hu]:i.NEAREST_MIPMAP_NEAREST,[zs]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[ca]:i.LINEAR_MIPMAP_NEAREST,[bn]:i.LINEAR_MIPMAP_LINEAR},Et={[pu]:i.NEVER,[yl]:i.ALWAYS,[mu]:i.LESS,[Ml]:i.LEQUAL,[gu]:i.EQUAL,[Sl]:i.GEQUAL,[_u]:i.GREATER,[xu]:i.NOTEQUAL};function Bt(L,T){if(T.type===dn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===We||T.magFilter===ca||T.magFilter===zs||T.magFilter===bn||T.minFilter===We||T.minFilter===ca||T.minFilter===zs||T.minFilter===bn)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,bt[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,bt[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,bt[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Wt[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Wt[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Et[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ue||T.minFilter!==zs&&T.minFilter!==bn||T.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Xt(L,T){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",R),C(T));const lt=T.source;let nt=u.get(lt);nt===void 0&&(nt={},u.set(lt,nt));const ut=q(T);if(ut!==L.__cacheKey){nt[ut]===void 0&&(nt[ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),nt[ut].usedTimes++;const gt=nt[L.__cacheKey];gt!==void 0&&(nt[L.__cacheKey].usedTimes--,gt.usedTimes===0&&I(T)),L.__cacheKey=ut,L.__webglTexture=nt[ut].texture}return Z}function zt(L,T,Z){return Math.floor(Math.floor(L/Z)/T)}function ge(L,T,Z,lt){const ut=L.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,Z,lt,T.data);else{ut.sort((z,tt)=>z.start-tt.start);let gt=0;for(let z=1;z<ut.length;z++){const tt=ut[gt],J=ut[z],pt=tt.start+tt.count,ht=zt(J.start,T.width,4),dt=zt(tt.start,T.width,4);J.start<=pt+1&&ht===dt&&zt(J.start+J.count-1,T.width,4)===ht?tt.count=Math.max(tt.count,J.start+J.count-tt.start):(++gt,ut[gt]=J)}ut.length=gt+1;const Q=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let z=0,tt=ut.length;z<tt;z++){const J=ut[z],pt=Math.floor(J.start/4),ht=Math.ceil(J.count/4),dt=pt%T.width,Pt=Math.floor(pt/T.width),Ht=ht,ct=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Pt),e.texSubImage2D(i.TEXTURE_2D,0,dt,Pt,Ht,ct,Z,lt,T.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,ft)}}function ee(L,T,Z){let lt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(lt=i.TEXTURE_3D);const nt=Xt(L,T),ut=T.source;e.bindTexture(lt,L.__webglTexture,i.TEXTURE0+Z);const gt=n.get(ut);if(ut.version!==gt.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const ct=Zt.getPrimaries(Zt.workingColorSpace),Dt=T.colorSpace===ii?null:Zt.getPrimaries(T.colorSpace),kt=T.colorSpace===ii||ct===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let j=x(T.image,!1,s.maxTextureSize);j=It(T,j);const ft=r.convert(T.format,T.colorSpace),z=r.convert(T.type);let tt=E(T.internalFormat,ft,z,T.normalized,T.colorSpace,T.isVideoTexture);Bt(lt,T);let J;const pt=T.mipmaps,ht=T.isVideoTexture!==!0,dt=gt.__version===void 0||nt===!0,Pt=ut.dataReady,Ht=y(T,j);if(T.isDepthTexture)tt=_(T.format===ei,T.type),dt&&(ht?e.texStorage2D(i.TEXTURE_2D,1,tt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,tt,j.width,j.height,0,ft,z,null));else if(T.isDataTexture)if(pt.length>0){ht&&dt&&e.texStorage2D(i.TEXTURE_2D,Ht,tt,pt[0].width,pt[0].height);for(let ct=0,Dt=pt.length;ct<Dt;ct++)J=pt[ct],ht?Pt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,J.width,J.height,ft,z,J.data):e.texImage2D(i.TEXTURE_2D,ct,tt,J.width,J.height,0,ft,z,J.data);T.generateMipmaps=!1}else ht?(dt&&e.texStorage2D(i.TEXTURE_2D,Ht,tt,j.width,j.height),Pt&&ge(T,j,ft,z)):e.texImage2D(i.TEXTURE_2D,0,tt,j.width,j.height,0,ft,z,j.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ht&&dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,tt,pt[0].width,pt[0].height,j.depth);for(let ct=0,Dt=pt.length;ct<Dt;ct++)if(J=pt[ct],T.format!==Tn)if(ft!==null)if(ht){if(Pt)if(T.layerUpdates.size>0){const kt=Pc(J.width,J.height,T.format,T.type);for(const St of T.layerUpdates){const se=J.data.subarray(St*kt/J.data.BYTES_PER_ELEMENT,(St+1)*kt/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,St,J.width,J.height,1,ft,se)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,J.width,J.height,j.depth,ft,J.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,tt,J.width,J.height,j.depth,0,J.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?Pt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,J.width,J.height,j.depth,ft,z,J.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,tt,J.width,J.height,j.depth,0,ft,z,J.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ht&&dt&&e.texStorage2D(i.TEXTURE_2D,Ht,tt,pt[0].width,pt[0].height);for(let ct=0,Dt=pt.length;ct<Dt;ct++)J=pt[ct],T.format!==Tn?ft!==null?ht?Pt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,J.width,J.height,ft,J.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,tt,J.width,J.height,0,J.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?Pt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,J.width,J.height,ft,z,J.data):e.texImage2D(i.TEXTURE_2D,ct,tt,J.width,J.height,0,ft,z,J.data)}else if(T.isDataArrayTexture)if(ht){if(dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,tt,j.width,j.height,j.depth),Pt)if(T.layerUpdates.size>0){const ct=Pc(j.width,j.height,T.format,T.type);for(const Dt of T.layerUpdates){const kt=j.data.subarray(Dt*ct/j.data.BYTES_PER_ELEMENT,(Dt+1)*ct/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Dt,j.width,j.height,1,ft,z,kt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ft,z,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,tt,j.width,j.height,j.depth,0,ft,z,j.data);else if(T.isData3DTexture)ht?(dt&&e.texStorage3D(i.TEXTURE_3D,Ht,tt,j.width,j.height,j.depth),Pt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ft,z,j.data)):e.texImage3D(i.TEXTURE_3D,0,tt,j.width,j.height,j.depth,0,ft,z,j.data);else if(T.isFramebufferTexture){if(dt)if(ht)e.texStorage2D(i.TEXTURE_2D,Ht,tt,j.width,j.height);else{let ct=j.width,Dt=j.height;for(let kt=0;kt<Ht;kt++)e.texImage2D(i.TEXTURE_2D,kt,tt,ct,Dt,0,ft,z,null),ct>>=1,Dt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){const ct=i.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),j.parentNode!==ct){ct.appendChild(j),d.add(T),ct.onpaint=Dt=>{const kt=Dt.changedElements;for(const St of d)kt.includes(St.image)&&(St.needsUpdate=!0)},ct.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{const kt=i.RGBA,St=i.RGBA,se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,kt,St,se,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(pt.length>0){if(ht&&dt){const ct=Ft(pt[0]);e.texStorage2D(i.TEXTURE_2D,Ht,tt,ct.width,ct.height)}for(let ct=0,Dt=pt.length;ct<Dt;ct++)J=pt[ct],ht?Pt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,ft,z,J):e.texImage2D(i.TEXTURE_2D,ct,tt,ft,z,J);T.generateMipmaps=!1}else if(ht){if(dt){const ct=Ft(j);e.texStorage2D(i.TEXTURE_2D,Ht,tt,ct.width,ct.height)}Pt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,z,j)}else e.texImage2D(i.TEXTURE_2D,0,tt,ft,z,j);S(T)&&T.mipmapsAutoUpdate===!0&&M(lt),gt.__version=ut.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ae(L,T,Z){if(T.image.length!==6)return;const lt=Xt(L,T),nt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+Z);const ut=n.get(nt);if(nt.version!==ut.__version||lt===!0){e.activeTexture(i.TEXTURE0+Z);const gt=Zt.getPrimaries(Zt.workingColorSpace),Q=T.colorSpace===ii?null:Zt.getPrimaries(T.colorSpace),j=T.colorSpace===ii||gt===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const ft=T.isCompressedTexture||T.image[0].isCompressedTexture,z=T.image[0]&&T.image[0].isDataTexture,tt=[];for(let St=0;St<6;St++)!ft&&!z?tt[St]=x(T.image[St],!0,s.maxCubemapSize):tt[St]=z?T.image[St].image:T.image[St],tt[St]=It(T,tt[St]);const J=tt[0],pt=r.convert(T.format,T.colorSpace),ht=r.convert(T.type);let dt=E(T.internalFormat,pt,ht,T.normalized,T.colorSpace);const Pt=T.isVideoTexture!==!0,Ht=ut.__version===void 0||lt===!0,ct=nt.dataReady;let Dt=y(T,J);Bt(i.TEXTURE_CUBE_MAP,T);let kt;if(T.isDepthTexture){if(dt=_(T.format===ei,T.type),Ht)if(Pt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,dt,J.width,J.height);else for(let St=0;St<6;St++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,dt,J.width,J.height,0,pt,ht,null)}else if(ft){Pt&&Ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,dt,J.width,J.height);for(let St=0;St<6;St++){kt=tt[St].mipmaps;for(let se=0;se<kt.length;se++){const Ie=kt[se];T.format!==Tn?pt!==null?Pt?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,se,0,0,Ie.width,Ie.height,pt,Ie.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,se,dt,Ie.width,Ie.height,0,Ie.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,se,0,0,Ie.width,Ie.height,pt,ht,Ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,se,dt,Ie.width,Ie.height,0,pt,ht,Ie.data)}}}else{if(kt=T.mipmaps,Pt&&Ht){kt.length>0&&Dt++;const St=Ft(tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,dt,St.width,St.height)}for(let St=0;St<6;St++)if(z){Pt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,tt[St].width,tt[St].height,pt,ht,tt[St].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,dt,tt[St].width,tt[St].height,0,pt,ht,tt[St].data);for(let se=0;se<kt.length;se++){const pi=kt[se].image[St].image;Pt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,se+1,0,0,pi.width,pi.height,pt,ht,pi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,se+1,dt,pi.width,pi.height,0,pt,ht,pi.data)}}else{Pt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,pt,ht,tt[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,dt,pt,ht,tt[St]);for(let se=0;se<kt.length;se++){const Ie=kt[se];Pt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,se+1,0,0,pt,ht,Ie.image[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,se+1,dt,pt,ht,Ie.image[St])}}}S(T)&&T.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ut.__version=nt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function _e(L,T,Z,lt,nt,ut){const gt=r.convert(Z.format,Z.colorSpace),Q=r.convert(Z.type),j=E(Z.internalFormat,gt,Q,Z.normalized,Z.colorSpace),ft=n.get(T),z=n.get(Z);if(z.__renderTarget=T,!ft.__hasExternalTextures){const tt=Math.max(1,T.width>>ut),J=Math.max(1,T.height>>ut);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,ut,j,tt,J,T.depth,0,gt,Q,null):e.texImage2D(nt,ut,j,tt,J,0,gt,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),xt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,nt,z.__webglTexture,0,fe(T)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,nt,z.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function In(L,T,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const lt=T.depthTexture,nt=lt&&lt.isDepthTexture?lt.type:null,ut=_(T.stencilBuffer,nt),gt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xt(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(T),ut,T.width,T.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(T),ut,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ut,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,L)}else{const lt=T.textures;for(let nt=0;nt<lt.length;nt++){const ut=lt[nt],gt=r.convert(ut.format,ut.colorSpace),Q=r.convert(ut.type),j=E(ut.internalFormat,gt,Q,ut.normalized,ut.colorSpace);xt(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(T),j,T.width,T.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(T),j,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,j,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(L,T,Z){const lt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const nt=n.get(T.depthTexture);nt.__renderTarget=T;const ut=lt?T.depthTexture.image[0]:T.depthTexture.image;(!nt.__webglTexture||ut.width!==T.width||ut.height!==T.height)&&(ut.width=T.width,ut.height=T.height,T.depthTexture.needsUpdate=!0),lt?ot(T.depthTexture,0):et(T.depthTexture,0);const gt=nt.__webglTexture,Q=fe(T),j=lt?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,ft=T.depthTexture.format===ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===ti)xt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,j,gt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,ft,j,gt,0);else if(T.depthTexture.format===ei)xt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,j,gt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,ft,j,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function on(L){const T=n.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const lt=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),lt){const nt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,lt.removeEventListener("dispose",nt)};lt.addEventListener("dispose",nt),T.__depthDisposeCallback=nt}T.__boundDepthTexture=lt}if(L.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let lt=0;lt<6;lt++)Le(T.__webglFramebuffer[lt],L,lt);else L.texture.mipmaps.length>0?Le(T.__webglFramebuffer[0],L,0):Le(T.__webglFramebuffer,L,0);else if(Z){T.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[lt]),T.__webglDepthbuffer[lt]===void 0)T.__webglDepthbuffer[lt]=i.createRenderbuffer(),In(T.__webglDepthbuffer[lt],L,!1);else{const nt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ut)}}else if(L.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),In(T.__webglDepthbuffer,L,!1);else{const nt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ut)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ln(L,T,Z){const lt=n.get(L);T!==void 0&&_e(lt.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&on(L)}function cn(L){const T=L.texture,Z=n.get(L),lt=n.get(T);L.addEventListener("dispose",D),C(L);const nt=L.textures,ut=L.isWebGLCubeRenderTarget===!0,gt=nt.length>1;if(gt||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=T.version,a.memory.textures++),ut){Z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(T.mipmaps.length>0){Z.__webglFramebuffer[Q]=[];for(let j=0;j<T.mipmaps.length;j++)Z.__webglFramebuffer[Q][j]=i.createFramebuffer()}else Z.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Q=0;Q<T.mipmaps.length;Q++)Z.__webglFramebuffer[Q]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(gt)for(let Q=0,j=nt.length;Q<j;Q++){const ft=n.get(nt[Q]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&xt(L)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Q=0;Q<nt.length;Q++){const j=nt[Q];Z.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[Q]);const ft=r.convert(j.format,j.colorSpace),z=r.convert(j.type),tt=E(j.internalFormat,ft,z,j.normalized,j.colorSpace,L.isXRRenderTarget===!0),J=fe(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,tt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,Z.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),In(Z.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,T);for(let Q=0;Q<6;Q++)if(T.mipmaps.length>0)for(let j=0;j<T.mipmaps.length;j++)_e(Z.__webglFramebuffer[Q][j],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,j);else _e(Z.__webglFramebuffer[Q],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);S(T)?M(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let Q=0,j=nt.length;Q<j;Q++){const ft=nt[Q],z=n.get(ft);let tt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(tt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,z.__webglTexture),Bt(tt,ft),_e(Z.__webglFramebuffer,L,ft,i.COLOR_ATTACHMENT0+Q,tt,0),S(ft)&&M(tt)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Q=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,lt.__webglTexture),Bt(Q,T),T.mipmaps.length>0)for(let j=0;j<T.mipmaps.length;j++)_e(Z.__webglFramebuffer[j],L,T,i.COLOR_ATTACHMENT0,Q,j);else _e(Z.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,Q,0);S(T)?M(Q):T.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}L.depthBuffer&&on(L)}function V(L){const T=L.textures;for(let Z=0,lt=T.length;Z<lt;Z++){const nt=T[Z];if(S(nt)&&nt.mipmapsAutoUpdate===!0){const ut=w(L),gt=n.get(nt).__webglTexture;e.bindTexture(ut,gt),M(ut),e.unbindTexture()}}}const hn=[];function de(L){if(L.samples>0){if(xt(L)===!1){const T=L.textures,Z=L.width,lt=L.height;let nt=i.COLOR_BUFFER_BIT;const ut=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(L),Q=T.length>1;if(Q)for(let ft=0;ft<T.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ft=0;ft<T.length;ft++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ft]);const z=n.get(T[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,z,0)}i.blitFramebuffer(0,0,Z,lt,0,0,Z,lt,nt,i.NEAREST),l===!0&&(hn.length=0,hn.push(i.COLOR_ATTACHMENT0+ft),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&hn.push(ut),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,hn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ft=0;ft<T.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ft]);const z=n.get(T[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,z,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function fe(L){return Math.min(s.maxSamples,L.samples)}function xt(L){const T=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ce(L){const T=a.render.frame;h.get(L)!==T&&(h.set(L,T),L.update())}function It(L,T){const Z=L.colorSpace,lt=L.format,nt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==qs&&Z!==ii&&(Zt.getTransfer(Z)===ne?(lt!==Tn||nt!==$e)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",Z)),T}function Ft(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=st,this.resetTextureUnits=B,this.getTextureUnits=H,this.setTextureUnits=it,this.setTexture2D=et,this.setTexture2DArray=rt,this.setTexture3D=vt,this.setTextureCube=ot,this.rebindTextures=ln,this.setupRenderTarget=cn,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=on,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=xt,this.dispose=O}function Q0(i,t){function e(n,s=ii){let r;const a=Zt.getTransfer(s);if(n===$e)return i.UNSIGNED_BYTE;if(n===ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===da)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_l)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pl)return i.BYTE;if(n===ml)return i.SHORT;if(n===us)return i.UNSIGNED_SHORT;if(n===ha)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===xl)return i.ALPHA;if(n===vl)return i.RGB;if(n===Tn)return i.RGBA;if(n===ti)return i.DEPTH_COMPONENT;if(n===ei)return i.DEPTH_STENCIL;if(n===fa)return i.RED;if(n===pa)return i.RED_INTEGER;if(n===ni)return i.RG;if(n===ma)return i.RG_INTEGER;if(n===ga)return i.RGBA_INTEGER;if(n===Bs||n===ks||n===Gs||n===Hs)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_a||n===xa||n===va||n===Ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sa||n===ya||n===Ea||n===ba||n===wa||n===Vs||n===Ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sa||n===ya)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ea)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ba)return r.COMPRESSED_R11_EAC;if(n===wa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Vs)return r.COMPRESSED_RG11_EAC;if(n===Ta)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa||n===Da||n===La||n===Ia||n===Na||n===Ua||n===Fa||n===Oa||n===za||n===Ba||n===ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Aa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ia)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ua)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ba)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===Ha||n===Va)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ga)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wa||n===Xa||n===Ws||n===qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ws)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const j0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tg=`
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

}`;class eg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new oc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xn({vertexShader:j0,fragmentShader:tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ng extends si{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,g=null;const v=typeof XRWebGLBinding<"u",m=new eg,p={},x=e.getContextAttributes();let S=null,M=null;const w=[],E=[],_=new Lt;let y=null,C=null;const b=new Sn;b.viewport=new ce;const R=new Sn;R.viewport=new ce;const D=[b,R],F=new Xd;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=w[q];return et===void 0&&(et=new io,w[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=w[q];return et===void 0&&(et=new io,w[q]=et),et.getGripSpace()},this.getHand=function(q){let et=w[q];return et===void 0&&(et=new io,w[q]=et),et.getHandSpace()};function U(q){const et=E.indexOf(q.inputSource);if(et===-1)return;const rt=w[et];rt!==void 0&&(rt.update(q.inputSource,q.frame,c||a),rt.dispatchEvent({type:q.type,data:q.inputSource}))}function I(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",X);for(let q=0;q<w.length;q++){const et=E[q];et!==null&&(E[q]=null,w[q].disconnect(et))}P=null,O=null,m.reset();for(const q in p)delete p[q];if(t.setRenderTarget(S),u=null,f=null,d=null,s=null,M=null,st.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(_.width,_.height,!1),C!==null){const q=C.camera;q.fov=C.fov,q.zoom=C.zoom,q.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",I),s.addEventListener("inputsourceschange",X),x.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,vt=null,ot=null;x.depth&&(ot=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=x.stencil?ei:ti,vt=x.stencil?Pi:wn);const bt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new An(f.textureWidth,f.textureHeight,{format:Tn,type:$e,depthTexture:new Xi(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const rt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new An(u.framebufferWidth,u.framebufferHeight,{format:Tn,type:$e,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(q){for(let et=0;et<q.removed.length;et++){const rt=q.removed[et],vt=E.indexOf(rt);vt>=0&&(E[vt]=null,w[vt].disconnect(rt))}for(let et=0;et<q.added.length;et++){const rt=q.added[et];let vt=E.indexOf(rt);if(vt===-1){for(let bt=0;bt<w.length;bt++)if(bt>=E.length){E.push(rt),vt=bt;break}else if(E[bt]===null){E[bt]=rt,vt=bt;break}if(vt===-1)break}const ot=w[vt];ot&&ot.connect(rt)}}function N(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let et=q.near,rt=q.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(rt=m.depthFar)),F.near=R.near=b.near=et,F.far=R.far=b.far=rt,(P!==F.near||O!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),P=F.near,O=F.far),F.layers.mask=q.layers.mask|6,b.layers.mask=F.layers.mask&-5,R.layers.mask=F.layers.mask&-3;const vt=q.parent,ot=F.cameras;N(F,vt);for(let bt=0;bt<ot.length;bt++)N(ot[bt],vt);F.projectionMatrix.copy(b.projectionMatrix),F.projectionMatrixInverse.copy(b.projectionMatrixInverse),C===null&&q.isPerspectiveCamera&&(C={camera:q,fov:q.fov,zoom:q.zoom}),B(q,F,vt)};function B(q,et,rt){rt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(rt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ms*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(q){return p[q]};let H=null;function it(q,et){if(h=et.getViewerPose(c||a),g=et,h!==null){const rt=h.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let vt=!1;rt.length!==F.cameras.length&&(F.cameras.length=0,vt=!0);for(let Et=0;Et<rt.length;Et++){const Bt=rt[Et];let Xt=null;if(u!==null)Xt=u.getViewport(Bt);else{const ge=d.getViewSubImage(f,Bt);Xt=ge.viewport,Et===0&&(t.setRenderTargetTextures(M,ge.colorTexture,ge.depthStencilTexture),t.setRenderTarget(M))}let zt=D[Et];zt===void 0&&(zt=new Sn,zt.layers.enable(Et),zt.viewport=new ce,D[Et]=zt),zt.matrix.fromArray(Bt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Bt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Et===0&&(F.matrix.copy(zt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),vt===!0&&F.cameras.push(zt)}const ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const Et=d.getDepthInformation(rt[0]);Et&&Et.isValid&&Et.texture&&m.init(Et,s.renderState)}if(ot&&ot.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let Et=0;Et<rt.length;Et++){const Bt=rt[Et].camera;if(Bt){let Xt=p[Bt];Xt||(Xt=new oc,p[Bt]=Xt);const zt=d.getCameraImage(Bt);Xt.sourceTexture=zt}}}}for(let rt=0;rt<w.length;rt++){const vt=E[rt],ot=w[rt];vt!==null&&ot!==void 0&&ot.update(vt,et,c||a)}H&&H(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const st=new Dc;st.setAnimationLoop(it),this.setAnimationLoop=function(q){H=q},this.dispose=function(){}}}const ig=new Kt,lh=new Ut;lh.set(-1,0,0,0,1,0,0,0,1);function sg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,S,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),S=x.envMap,M=x.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(ig.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(lh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,x){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rg(i,t,e,n){let s={},r={};function a(x,S){const M=S.program;n.uniformBlockBinding(x,M,s[x.id])}function o(x,S){let M=s[x.id];M===void 0&&(g(x),M=l(x),s[x.id]=M,x.addEventListener("dispose",m));const w=S.program;n.updateUBOMapping(x,w);const E=t.render.frame;r[x.id]!==E&&(c(x),r[x.id]=E)}function l(x){const S=i.createBuffer(),M=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,M,w),i.bindBuffer(i.UNIFORM_BUFFER,null),S}function c(x){const S=s[x.id],M=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let E=0,_=M.length;E<_;E++){const y=M[E];if(Array.isArray(y))for(let C=0,b=y.length;C<b;C++)h(y[C],E,C,w);else h(y,E,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,S,M,w){if(f(x,S,M,w)===!0){const E=x.__offset,_=x.value;if(Array.isArray(_)){let y=0;for(let C=0;C<_.length;C++){const b=_[C],R=v(b,!0);d(b,x.__data,y),y+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,x.__data)}}function d(x,S,M){typeof x=="number"||typeof x=="boolean"?S[M]=x:x.isMatrix3?(S[M]=x.elements[0],S[M+1]=x.elements[1],S[M+2]=x.elements[2],S[M+3]=0,S[M+4]=x.elements[3],S[M+5]=x.elements[4],S[M+6]=x.elements[5],S[M+7]=0,S[M+8]=x.elements[6],S[M+9]=x.elements[7],S[M+10]=x.elements[8],S[M+11]=0):ArrayBuffer.isView(x)?S.set(x.subarray(0,S.length-M),M):x.toArray(S,M)}function f(x,S,M,w){const E=x.value,_=S+"_"+M;if(Array.isArray(E)){w[_]===void 0&&(w[_]=[]);const y=w[_];let C=!1;for(let b=0;b<E.length;b++)u(E[b],y,b)===!0&&(C=!0);return C}return u(E,w,_)}function u(x,S,M){if(S[M]===void 0)return typeof x=="number"||typeof x=="boolean"?S[M]=x:ArrayBuffer.isView(x)?S[M]=x.slice():S[M]=x.clone(),!0;{const w=S[M];if(typeof x=="number"||typeof x=="boolean"){if(w!==x)return S[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(w.equals(x)===!1)return w.copy(x),!0}}return!1}function g(x){const S=x.uniforms;let M=0;const w=16;for(let _=0,y=S.length;_<y;_++){const C=Array.isArray(S[_])?S[_]:[S[_]];for(let b=0,R=C.length;b<R;b++){const D=C[b],F=Array.isArray(D.value)?D.value:[D.value],P=Array.isArray(S[_])||Array.isArray(D.value);let O=M;for(let I=0,X=F.length;I<X;I++){const N=F[I],B=v(N,P),H=M%w,it=H%B.boundary,st=H+it;M+=it,st!==0&&w-st<B.storage&&(M+=w-st),I===0&&(O=M),M+=B.storage}const U=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new U((M-O)/Float32Array.BYTES_PER_ELEMENT),D.__offset=O}}const E=M%w;return E>0&&(M+=w-E),x.__size=M,x.__cache={},this}function v(x,S){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=16,M.storage=48):x.isMatrix4?(M.boundary=16,M.storage=64):x.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",x),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(x){const S=x.target;S.removeEventListener("dispose",m),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:p}}const ag=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Dn=null;function og(){return Dn===null&&(Dn=new fr(ag,16,16,ni,fn),Dn.name="DFG_LUT",Dn.minFilter=We,Dn.magFilter=We,Dn.wrapS=un,Dn.wrapT=un,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}class lg{constructor(t={}){const{canvas:e=Su(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=$e}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=u,m=new Set([ga,ma,pa]),p=new Set([$e,wn,us,Pi,ua,da]),x=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let w=null,E=null;const _=[],y=[];let C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let R=!1,D=null,F=null,P=null,O=null;this._outputColorSpace=ye;let U=0,I=0,X=null,N=-1,B=null;const H=new ce,it=new ce;let st=null;const q=new Rt(0);let et=0,rt=e.width,vt=e.height,ot=1,bt=null,Wt=null;const Et=new ce(0,0,rt,vt),Bt=new ce(0,0,rt,vt);let Xt=!1;const zt=new Es,ge=new vo;let ee=!1,ae=!1;const _e=new Kt,In=new G,Le=new ce,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ln=!1;function cn(){return X===null?ot:1}let V=n;function hn(A,k){return e.getContext(A,k)}let de,fe,xt,Ce,It,Ft,L,T,Z,lt,nt,ut,gt,Q,j,ft,z,tt,J,pt,ht,dt,Pt;try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jn}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",St,!1),V===null){const k="webgl2";if(V=hn(k,A),V===null)throw hn(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(A){throw e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Jt("WebGLRenderer: "+A.message),A}function Ht(){de=new um(V),de.init(),ht=new Q0(V,de),fe=new tm(V,de,t,ht),xt=new $0(V,de),fe.reversedDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),F=V.createFramebuffer(),P=V.createFramebuffer(),O=V.createFramebuffer(),Ce=new pm(V),It=new F0,Ft=new J0(V,de,xt,It,fe,ht,Ce),L=new hm(b),T=new Kd(V),dt=new Qp(V,T),Z=new dm(V,T,Ce,dt),lt=new gm(V,Z,T,dt,Ce),tt=new mm(V,fe,Ft),j=new em(It),nt=new U0(b,L,de,fe,dt,j),ut=new sg(b,It),gt=new z0,Q=new W0(de),z=new Jp(b,L,xt,lt,g,l),ft=new K0(b,lt,fe),Pt=new rg(V,Ce,fe,xt),J=new jp(V,de,Ce),pt=new fm(V,de,Ce),Ce.programs=nt.programs,b.capabilities=fe,b.extensions=de,b.properties=It,b.renderLists=gt,b.shadowMap=ft,b.state=xt,b.info=Ce}v!==$e&&(C=new xm(v,e.width,e.height,o,s,r));const ct=new ng(b,V);this.xr=ct,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=de.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=de.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(A){A!==void 0&&(ot=A,this.setSize(rt,vt,!1))},this.getSize=function(A){return A.set(rt,vt)},this.setSize=function(A,k,$=!0){if(ct.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=A,vt=k,e.width=Math.floor(A*ot),e.height=Math.floor(k*ot),$===!0&&(e.style.width=A+"px",e.style.height=k+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(rt*ot,vt*ot).floor()},this.setDrawingBufferSize=function(A,k,$){rt=A,vt=k,ot=$,e.width=Math.floor(A*$),e.height=Math.floor(k*$),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(v===$e){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(Et)},this.setViewport=function(A,k,$,Y){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,k,$,Y),xt.viewport(H.copy(Et).multiplyScalar(cn()).round())},this.getScissor=function(A){return A.copy(Bt)},this.setScissor=function(A,k,$,Y){A.isVector4?Bt.set(A.x,A.y,A.z,A.w):Bt.set(A,k,$,Y),xt.scissor(it.copy(Bt).multiplyScalar(cn()).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(A){xt.setScissorTest(Xt=A)},this.setOpaqueSort=function(A){bt=A},this.setTransparentSort=function(A){Wt=A},this.getClearColor=function(A){return A.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,$=!0){let Y=0;if(A){let K=!1;if(X!==null){const _t=X.texture.format;K=m.has(_t)}if(K){const _t=X.texture.type,wt=p.has(_t),mt=z.getClearColor(),yt=z.getClearAlpha(),Ct=mt.r,Ot=mt.g,qt=mt.b;wt?(x[0]=Ct,x[1]=Ot,x[2]=qt,x[3]=yt,V.clearBufferuiv(V.COLOR,0,x)):(S[0]=Ct,S[1]=Ot,S[2]=qt,S[3]=yt,V.clearBufferiv(V.COLOR,0,S))}else Y|=V.COLOR_BUFFER_BIT}k&&(Y|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),z.dispose(),gt.dispose(),Q.dispose(),Ft.dispose(),It.dispose(),L.dispose(),lt.dispose(),Z.dispose(),dt.dispose(),Pt.dispose(),nt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Dh),ct.removeEventListener("sessionend",Lh),bi.stop()};function Dt(A){A.preventDefault(),wl("WebGLRenderer: Context Lost."),R=!0}function kt(){wl("WebGLRenderer: Context Restored."),R=!1;const A=Ce.autoReset,k=ft.enabled,$=ft.autoUpdate,Y=ft.needsUpdate,K=ft.type;Ht(),Ce.autoReset=A,ft.enabled=k,ft.autoUpdate=$,ft.needsUpdate=Y,ft.type=K}function St(A){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function se(A){const k=A.target;k.removeEventListener("dispose",se),Ie(k)}function Ie(A){pi(A),It.remove(A)}function pi(A){const k=It.get(A).programs;k!==void 0&&(k.forEach(function($){nt.releaseProgram($)}),A.isShaderMaterial&&nt.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,$,Y,K,_t){k===null&&(k=on);const wt=K.isMesh&&K.matrixWorld.determinantAffine()<0,mt=q_(A,k,$,Y,K);xt.setMaterial(Y,wt);let yt=$.index,Ct=1;if(Y.wireframe===!0){if(yt=Z.getWireframeAttribute($),yt===void 0)return;Ct=2}const Ot=$.drawRange,qt=$.attributes.position;let Tt=Ot.start*Ct,Yt=(Ot.start+Ot.count)*Ct;_t!==null&&(Tt=Math.max(Tt,_t.start*Ct),Yt=Math.min(Yt,(_t.start+_t.count)*Ct)),yt!==null?(Tt=Math.max(Tt,0),Yt=Math.min(Yt,yt.count)):qt!=null&&(Tt=Math.max(Tt,0),Yt=Math.min(Yt,qt.count));const Se=Yt-Tt;if(Se<0||Se===1/0)return;dt.setup(K,Y,mt,$,yt);let oe,re=J;if(yt!==null&&(oe=T.get(yt),re=pt,re.setIndex(oe)),K.isMesh)Y.wireframe===!0?(xt.setLineWidth(Y.wireframeLinewidth*cn()),re.setMode(V.LINES)):re.setMode(V.TRIANGLES);else if(K.isLine){let Ge=Y.linewidth;Ge===void 0&&(Ge=1),xt.setLineWidth(Ge*cn()),K.isLineSegments?re.setMode(V.LINES):K.isLineLoop?re.setMode(V.LINE_LOOP):re.setMode(V.LINE_STRIP)}else K.isPoints?re.setMode(V.POINTS):K.isSprite&&re.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(de.get("WEBGL_multi_draw"))re.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Ge=K._multiDrawStarts,At=K._multiDrawCounts,Ye=K._multiDrawCount,te=yt?T.get(yt).bytesPerElement:1,wi=It.get(Y).currentProgram.getUniforms();for(let He=0;He<Ye;He++)wi.setValue(V,"_gl_DrawID",He),re.render(Ge[He]/te,At[He])}else if(K.isInstancedMesh)re.renderInstances(Tt,Se,K.count);else if($.isInstancedBufferGeometry){const Ge=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,At=Math.min($.instanceCount,Ge);re.renderInstances(Tt,Se,At)}else re.render(Tt,Se)};function Ph(A,k,$,Y){D!==null&&A.isNodeMaterial&&D.setObject(Y,A),ee===!0&&j.setState(A,$,!1),A.transparent===!0&&A.side===ze&&A.forceSinglePass===!1?(A.side=Ve,A.needsUpdate=!0,Fs(A,k,Y),A.side=jn,A.needsUpdate=!0,Fs(A,k,Y),A.side=ze):Fs(A,k,Y)}this.compile=function(A,k,$=null){$===null&&($=A),D!==null&&D.renderStart(A,k,$),E=Q.get($),E.init(k),y.push(E),$.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),A!==$&&A.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),ae=this.localClippingEnabled,ee=j.init(this.clippingPlanes,ae),ee===!0&&j.setGlobalState(this.clippingPlanes,k),D!==null&&ft.render(E.state.shadowsArray,$,k);const Y=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const _t=K.material;if(_t)if(Array.isArray(_t))for(let wt=0;wt<_t.length;wt++){const mt=_t[wt];Ph(mt,$,k,K),Y.add(mt)}else Ph(_t,$,k,K),Y.add(_t)}),E=y.pop(),D!==null&&D.renderEnd(),Y},this.compileAsync=function(A,k,$=null){const Y=this.compile(A,k,$);return new Promise(K=>{function _t(){if(Y.forEach(function(wt){const yt=It.get(wt).currentProgram;(yt===void 0||yt.isReady())&&Y.delete(wt)}),Y.size===0){K(A);return}setTimeout(_t,10)}de.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let tl=null;function W_(A){tl&&tl(A)}function Dh(){bi.stop()}function Lh(){bi.start()}const bi=new Dc;bi.setAnimationLoop(W_),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(A){tl=A,ct.setAnimationLoop(A),A===null?bi.stop():bi.start()},ct.addEventListener("sessionstart",Dh),ct.addEventListener("sessionend",Lh),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D!==null&&D.renderStart(A,k);const $=ct.enabled===!0&&ct.isPresenting===!0,Y=C!==null&&(X===null||$)&&C.begin(b,X);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(k),k=ct.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,k,X),E=Q.get(A,y.length),E.init(k),E.state.textureUnits=Ft.getTextureUnits(),y.push(E),_e.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?ge.setFromArrayCamera(k):zt.setFromProjectionMatrix(_e,pn,k.reversedDepth),ae=this.localClippingEnabled,ee=j.init(this.clippingPlanes,ae),w=gt.get(A,_.length),w.init(),_.push(w),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){const wt=b.xr.getDepthSensingMesh();wt!==null&&el(wt,k,-1/0,b.sortObjects)}el(A,k,0,b.sortObjects),w.finish(),D!==null&&D.updateLights(E.state.lightsArray),b.sortObjects===!0&&w.sort(bt,Wt),ln=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ln&&z.addToRenderList(w,A),this.info.autoReset===!0&&this.info.reset(),ee===!0&&j.beginShadows();const K=E.state.shadowsArray;if(ft.render(K,A,k),ee===!0&&j.endShadows(),(Y&&C.hasRenderPass())===!1){const wt=w.opaque,mt=w.transmissive;if(E.setupLights(),k.isArrayCamera){const yt=k.cameras;if(mt.length>0)for(let Ct=0,Ot=yt.length;Ct<Ot;Ct++){const qt=yt[Ct];Nh(wt,mt,A,qt)}ln&&z.render(A);for(let Ct=0,Ot=yt.length;Ct<Ot;Ct++){const qt=yt[Ct];Ih(w,A,qt,qt.viewport)}}else mt.length>0&&Nh(wt,mt,A,k),ln&&z.render(A),Ih(w,A,k)}X!==null&&I===0&&(Ft.updateMultisampleRenderTarget(X),Ft.updateRenderTargetMipmap(X)),Y&&C.end(b),A.isScene===!0&&A.onAfterRender(b,A,k),dt.resetDefaultState(),N=-1,B=null,y.pop(),y.length>0?(E=y[y.length-1],Ft.setTextureUnits(E.state.textureUnits),ee===!0&&j.setGlobalState(b.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,D!==null&&D.renderEnd()};function el(A,k,$,Y){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){const wt=k.isArrayCamera?ge:zt;if(!A.frustumCulled||A.intersectsFrustum(wt)){Y&&Le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);const mt=lt.update(A),yt=A.material;yt.visible&&w.push(A,mt,yt,$,Le.z,null,k)}}else if(A.isMesh||A.isLine||A.isPoints){const wt=k.isArrayCamera?ge:zt;if(!A.frustumCulled||A.intersectsFrustum(wt)){const mt=lt.update(A),yt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Le.copy(A.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Le.copy(mt.boundingSphere.center)),Le.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(yt)){const Ct=mt.groups;for(let Ot=0,qt=Ct.length;Ot<qt;Ot++){const Tt=Ct[Ot],Yt=yt[Tt.materialIndex];Yt&&Yt.visible&&w.push(A,mt,Yt,$,Le.z,Tt,k)}}else yt.visible&&w.push(A,mt,yt,$,Le.z,null,k)}}}const _t=A.children;for(let wt=0,mt=_t.length;wt<mt;wt++)el(_t[wt],k,$,Y)}function Ih(A,k,$,Y){const{opaque:K,transmissive:_t,transparent:wt}=A;E.setupLightsView($),ee===!0&&j.setGlobalState(b.clippingPlanes,$),Y&&xt.viewport(H.copy(Y)),K.length>0&&Zr(K,k,$),_t.length>0&&Zr(_t,k,$),wt.length>0&&Zr(wt,k,$),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Nh(A,k,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Y.id]===void 0){const Tt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Y.id]=new An(1,1,{generateMipmaps:!0,type:Tt?fn:$e,minFilter:bn,samples:Math.max(4,fe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const _t=E.state.transmissionRenderTarget[Y.id],wt=Y.viewport||H;_t.setSize(wt.z*b.transmissionResolutionScale,wt.w*b.transmissionResolutionScale);const mt=b.getRenderTarget(),yt=b.getActiveCubeFace(),Ct=b.getActiveMipmapLevel();b.setRenderTarget(_t),b.getClearColor(q),et=b.getClearAlpha(),et<1&&b.setClearColor(16777215,.5),b.clear(),ln&&z.render($);const Ot=b.toneMapping;b.toneMapping=Fn;const qt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),E.setupLightsView(Y),ee===!0&&j.setGlobalState(b.clippingPlanes,Y),Zr(A,$,Y),Ft.updateMultisampleRenderTarget(_t),Ft.updateRenderTargetMipmap(_t),de.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let Yt=0,Se=k.length;Yt<Se;Yt++){const oe=k[Yt],{object:re,geometry:Ge,material:At,group:Ye}=oe;if(At.side===ze&&re.layers.test(Y.layers)){const te=At.side;At.side=Ve,At.needsUpdate=!0,Uh(re,$,Y,Ge,At,Ye),At.side=te,At.needsUpdate=!0,Tt=!0}}Tt===!0&&(Ft.updateMultisampleRenderTarget(_t),Ft.updateRenderTargetMipmap(_t))}b.setRenderTarget(mt,yt,Ct),b.setClearColor(q,et),qt!==void 0&&(Y.viewport=qt),b.toneMapping=Ot}function Zr(A,k,$){const Y=k.isScene===!0?k.overrideMaterial:null;for(let K=0,_t=A.length;K<_t;K++){const wt=A[K],{object:mt,geometry:yt,group:Ct}=wt;let Ot=wt.material;Ot.allowOverride===!0&&Y!==null&&(Ot=Y),mt.layers.test($.layers)&&Uh(mt,k,$,yt,Ot,Ct)}}function Uh(A,k,$,Y,K,_t){D!==null&&K.isNodeMaterial&&D.setObject(A,K),A.onBeforeRender(b,k,$,Y,K,_t),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(b,k,$,Y,A,_t),K.transparent===!0&&K.side===ze&&K.forceSinglePass===!1?(K.side=Ve,K.needsUpdate=!0,b.renderBufferDirect($,k,Y,K,A,_t),K.side=jn,K.needsUpdate=!0,b.renderBufferDirect($,k,Y,K,A,_t),K.side=ze):b.renderBufferDirect($,k,Y,K,A,_t),A.onAfterRender(b,k,$,Y,K,_t)}function Fh(A){let k=0;for(const $ of A)$.texture!==null&&k++;return k}function Fs(A,k,$){k.isScene!==!0&&(k=on);const Y=It.get(A),K=E.state.lights,_t=E.state.shadowsArray,wt=K.state.version,mt=nt.getParameters(A,K.state,_t,k,$,E.state.lightProbeGridArray),yt=nt.getProgramCacheKey(mt);let Ct=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;const Ot=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=L.get(A.envMap||Y.environment,Ot),Y.envMapRotation=Y.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ct===void 0&&(A.addEventListener("dispose",se),Ct=new Map,Y.programs=Ct,Y.programVariants=new Map);let qt=Ct.get(yt);if(qt!==void 0){if(Y.currentProgram===qt&&Y.lightsStateVersion===wt)return zh(A,mt),qt}else mt.uniforms=nt.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,$,mt),A.onBeforeCompile(mt,b),qt=nt.acquireProgram(mt,yt),Ct.set(yt,qt),Y.uniforms=mt.uniforms;const Tt=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Tt.clippingPlanes=j.uniform),zh(A,mt),Y.needsLights=Z_(A),Y.lightsStateVersion=wt,Y.needsLights&&(Tt.ambientLightColor.value=K.state.ambient,Tt.lightProbe.value=K.state.probe,Tt.sunLights.value=K.state.sun,Tt.sunLightShadows.value=K.state.sunShadow,Tt.directionalLights.value=K.state.directional,Tt.directionalLightShadows.value=K.state.directionalShadow,Tt.spotLights.value=K.state.spot,Tt.spotLightShadows.value=K.state.spotShadow,Tt.rectAreaLights.value=K.state.rectArea,Tt.ltc_1.value=K.state.rectAreaLTC1,Tt.ltc_2.value=K.state.rectAreaLTC2,Tt.pointLights.value=K.state.point,Tt.pointLightShadows.value=K.state.pointShadow,Tt.hemisphereLights.value=K.state.hemi,Tt.sunShadowMatrix.value=K.state.sunShadowMatrix,Tt.sunShadowCascade.value=K.state.sunShadowCascade,Tt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Tt.spotLightMatrix.value=K.state.spotLightMatrix,Tt.spotLightMap.value=K.state.spotLightMap,Tt.pointShadowMatrix.value=K.state.pointShadowMatrix),Y.numLightProbeGrids=Fh(E.state.lightProbeGridArray),Y.currentProgram=qt,Y.uniformsList=null,qt}function X_(A,k,$,Y,K){const _t=It.get(A),wt=_t.currentProgram.id+","+Y+","+K;let mt=_t.programVariants.get(wt);return mt===void 0?(mt=Fs(A,k,$),_t.programVariants.set(wt,mt)):(_t.currentProgram=mt,_t.uniformsList=null,_t.outputColorSpace=Y,_t.toneMapping=K),mt}function Oh(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Cr.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function zh(A,k){const $=It.get(A);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function q_(A,k,$,Y,K){k.isScene!==!0&&(k=on),Ft.resetTextureUnits();const _t=k.fog,wt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,mt=X===null?b.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Zt.workingColorSpace,yt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ct=L.get(Y.envMap||wt,yt),Ot=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,qt=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Tt=!!$.morphAttributes.position,Yt=!!$.morphAttributes.normal,Se=!!$.morphAttributes.color;let oe=Fn;Y.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(oe=b.toneMapping);const re=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ge=re!==void 0?re.length:0,At=It.get(Y),Ye=E.state.lights;if(ee===!0&&(ae===!0||A!==B)){const xe=A===B&&Y.id===N;j.setState(Y,A,xe)}let te=!1,wi=!1;Y.version===At.__version?At.needsLights&&At.lightsStateVersion!==Ye.state.version||K.isBatchedMesh&&At.batching===!1||!K.isBatchedMesh&&At.batching===!0||K.isBatchedMesh&&At.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&At.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&At.instancing===!1||!K.isInstancedMesh&&At.instancing===!0||K.isSkinnedMesh&&At.skinning===!1||!K.isSkinnedMesh&&At.skinning===!0||K.isInstancedMesh&&At.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&At.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&At.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&At.instancingMorph===!1&&K.morphTexture!==null||At.envMap!==Ct||Y.fog===!0&&At.fog!==_t||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==j.numPlanes||At.numIntersection!==j.numIntersection)||At.vertexAlphas!==Ot||At.vertexTangents!==qt||At.morphTargets!==Tt||At.morphNormals!==Yt||At.morphColors!==Se||At.morphTargetsCount!==Ge||At.numLightProbeGrids!==Fh(E.state.lightProbeGridArray)?te=!0:(At.outputColorSpace!==mt||At.toneMapping!==oe)&&(wi=!0):(te=!0,At.__version=Y.version);let He=At.currentProgram;(te===!0||wi===!0)&&(He=wi===!0?X_(Y,k,K,mt,oe):Fs(Y,k,K),D&&Y.isNodeMaterial&&D.onUpdateProgram(Y,He,At));let Kr=!1,mi=!1,Ti=!1;const $t=He.getUniforms(),Oe=At.uniforms;if(xt.useProgram(He.program)&&(Kr=!0,mi=!0,Ti=!0),Y.id!==N&&(N=Y.id,mi=!0),Kr||B!==A){xt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),$t.setValue(V,"projectionMatrix",A.projectionMatrix),$t.setValue(V,"viewMatrix",A.matrixWorldInverse);const Ne=$t.map.cameraPosition;Ne!==void 0&&Ne.setValue(V,In.setFromMatrixPosition(A.matrixWorld)),fe.logarithmicDepthBuffer&&$t.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&$t.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),B!==A&&(B=A,mi=!0,Ti=!0)}if(At.needsLights&&(Ye.state.sunShadowMap.length>0&&$t.setValue(V,"sunShadowMap",Ye.state.sunShadowMap,Ft),Ye.state.directionalShadowMap.length>0&&$t.setValue(V,"directionalShadowMap",Ye.state.directionalShadowMap,Ft),Ye.state.spotShadowMap.length>0&&$t.setValue(V,"spotShadowMap",Ye.state.spotShadowMap,Ft),Ye.state.pointShadowMap.length>0&&$t.setValue(V,"pointShadowMap",Ye.state.pointShadowMap,Ft)),K.isSkinnedMesh){$t.setOptional(V,K,"bindMatrix"),$t.setOptional(V,K,"bindMatrixInverse");const xe=K.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),$t.setValue(V,"boneTexture",xe.boneTexture,Ft))}K.isBatchedMesh&&($t.setOptional(V,K,"batchingTexture"),$t.setValue(V,"batchingTexture",K._matricesTexture,Ft),$t.setOptional(V,K,"batchingIdTexture"),$t.setValue(V,"batchingIdTexture",K._indirectTexture,Ft),$t.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&$t.setValue(V,"batchingColorTexture",K._colorsTexture,Ft));const yn=$.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&tt.update(K,$,He),(mi||At.receiveShadow!==K.receiveShadow)&&(At.receiveShadow=K.receiveShadow,$t.setValue(V,"receiveShadow",K.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(Oe.envMapIntensity.value=k.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=og()),mi){if($t.setValue(V,"toneMappingExposure",b.toneMappingExposure),At.needsLights&&Y_(Oe,Ti),_t&&Y.fog===!0&&ut.refreshFogUniforms(Oe,_t),ut.refreshMaterialUniforms(Oe,Y,ot,vt,E.state.transmissionRenderTarget[A.id]),At.needsLights&&At.numLightProbeGrids>0){const xe=M;let Ne=0;for(const $n of E.state.lightProbeGridArray)$n.texture!==null&&(xe.textures[Ne]=$n.texture,xe.min[Ne]=$n.boundingBox.min,xe.max[Ne]=$n.boundingBox.max,xe.resolution[Ne]=$n.resolution,Ne++);for(const $n in xe)xe[$n].length=Ne;Oe.probesSH.value=xe.textures,Oe.probesMin.value=xe.min,Oe.probesMax.value=xe.max,Oe.probesResolution.value=xe.resolution}Cr.upload(V,Oh(At),Oe,Ft)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Cr.upload(V,Oh(At),Oe,Ft),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&$t.setValue(V,"center",K.center),$t.setValue(V,"modelViewMatrix",K.modelViewMatrix),$t.setValue(V,"normalMatrix",K.normalMatrix),$t.setValue(V,"modelMatrix",K.matrixWorld),Y.uniformsGroups!==void 0){const xe=Y.uniformsGroups;for(let Ne=0,$n=xe.length;Ne<$n;Ne++){const kh=xe[Ne];Pt.update(kh,He),Pt.bind(kh,He)}}return He}function Y_(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Z_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,k,$){const Y=It.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),It.get(A.texture).__webglTexture=k,It.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const $=It.get(A);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,$=0){X=A,U=k,I=$;let Y=null,K=!1,_t=!1;if(A){const mt=It.get(A);if(mt.__useDefaultFramebuffer!==void 0){xt.bindFramebuffer(V.FRAMEBUFFER,mt.__webglFramebuffer),H.copy(A.viewport),it.copy(A.scissor),st=A.scissorTest,xt.viewport(H),xt.scissor(it),xt.setScissorTest(st),N=-1;return}else if(mt.__webglFramebuffer===void 0)Ft.setupRenderTarget(A);else if(mt.__hasExternalTextures)Ft.rebindTextures(A,It.get(A.texture).__webglTexture,It.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ot=A.depthTexture;if(mt.__boundDepthTexture!==Ot){if(Ot!==null&&It.has(Ot)&&(A.width!==Ot.image.width||A.height!==Ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(A)}}const yt=A.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(_t=!0);const Ct=It.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ct[k])?Y=Ct[k][$]:Y=Ct[k],K=!0):A.samples>0&&Ft.useMultisampledRTT(A)===!1?Y=It.get(A).__webglMultisampledFramebuffer:Array.isArray(Ct)?Y=Ct[$]:Y=Ct,H.copy(A.viewport),it.copy(A.scissor),st=A.scissorTest}else H.copy(Et).multiplyScalar(ot).floor(),it.copy(Bt).multiplyScalar(ot).floor(),st=Xt;if($!==0&&(Y=F),xt.bindFramebuffer(V.FRAMEBUFFER,Y)&&xt.drawBuffers(A,Y),xt.viewport(H),xt.scissor(it),xt.setScissorTest(st),K){const mt=It.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,mt.__webglTexture,$)}else if(_t){const mt=k;for(let yt=0;yt<A.textures.length;yt++){const Ct=It.get(A.textures[yt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+yt,Ct.__webglTexture,$,mt)}}else if(A!==null&&$!==0){const mt=It.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,mt.__webglTexture,$)}N=-1};function Bh(A){const k=It.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=fe.textureFormatReadable(A.format),k.__typeReadable=fe.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,$,Y,K,_t,wt,mt=0){if(!(A&&A.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=It.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(yt=yt[wt],Array.isArray(yt)&&(yt=yt[0])),yt){xt.bindFramebuffer(V.FRAMEBUFFER,yt);try{const Ct=A.textures[mt],Ot=Ct.format,qt=Ct.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+mt);const Tt=Bh(Ct);if(Tt.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-Y&&$>=0&&$<=A.height-K&&V.readPixels(k,$,Y,K,ht.convert(Ot),ht.convert(qt),_t)}finally{const Ct=X!==null?It.get(X).__webglFramebuffer:null;xt.bindFramebuffer(V.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(A,k,$,Y,K,_t,wt,mt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=It.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(yt=yt[wt],Array.isArray(yt)&&(yt=yt[0])),yt)if(k>=0&&k<=A.width-Y&&$>=0&&$<=A.height-K){xt.bindFramebuffer(V.FRAMEBUFFER,yt);const Ct=A.textures[mt],Ot=Ct.format,qt=Ct.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+mt);const Tt=Bh(Ct);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Yt),V.bufferData(V.PIXEL_PACK_BUFFER,_t.byteLength,V.STREAM_READ),V.readPixels(k,$,Y,K,ht.convert(Ot),ht.convert(qt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const Se=X!==null?It.get(X).__webglFramebuffer:null;xt.bindFramebuffer(V.FRAMEBUFFER,Se);const oe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await yu(V,oe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Yt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,_t),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Yt),V.deleteSync(oe),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,$=0){const Y=Math.pow(2,-$),K=Math.floor(A.image.width*Y),_t=Math.floor(A.image.height*Y),wt=k!==null?k.x:0,mt=k!==null?k.y:0;Ft.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,$,0,0,wt,mt,K,_t),xt.unbindTexture()},this.copyTextureToTexture=function(A,k,$=null,Y=null,K=0,_t=0){let wt,mt,yt,Ct,Ot,qt,Tt,Yt,Se;const oe=A.isCompressedTexture?A.mipmaps[_t]:A.image;if($!==null)wt=$.max.x-$.min.x,mt=$.max.y-$.min.y,yt=$.isBox3?$.max.z-$.min.z:1,Ct=$.min.x,Ot=$.min.y,qt=$.isBox3?$.min.z:0;else{const $t=Math.pow(2,-K);wt=Math.floor(oe.width*$t),mt=Math.floor(oe.height*$t),A.isDataArrayTexture?yt=oe.depth:A.isData3DTexture?yt=Math.floor(oe.depth*$t):yt=1,Ct=0,Ot=0,qt=0}Y!==null?(Tt=Y.x,Yt=Y.y,Se=Y.z):(Tt=0,Yt=0,Se=0);const re=ht.convert(k.format),Ge=ht.convert(k.type);let At;k.isData3DTexture?(Ft.setTexture3D(k,0),At=V.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Ft.setTexture2DArray(k,0),At=V.TEXTURE_2D_ARRAY):(Ft.setTexture2D(k,0),At=V.TEXTURE_2D),xt.activeTexture(V.TEXTURE0),xt.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,k.flipY),xt.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),xt.pixelStorei(V.UNPACK_ALIGNMENT,k.unpackAlignment);const Ye=xt.getParameter(V.UNPACK_ROW_LENGTH),te=xt.getParameter(V.UNPACK_IMAGE_HEIGHT),wi=xt.getParameter(V.UNPACK_SKIP_PIXELS),He=xt.getParameter(V.UNPACK_SKIP_ROWS),Kr=xt.getParameter(V.UNPACK_SKIP_IMAGES);xt.pixelStorei(V.UNPACK_ROW_LENGTH,oe.width),xt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,oe.height),xt.pixelStorei(V.UNPACK_SKIP_PIXELS,Ct),xt.pixelStorei(V.UNPACK_SKIP_ROWS,Ot),xt.pixelStorei(V.UNPACK_SKIP_IMAGES,qt);const mi=A.isDataArrayTexture||A.isData3DTexture,Ti=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const $t=It.get(A),Oe=It.get(k),yn=It.get($t.__renderTarget),xe=It.get(Oe.__renderTarget);xt.bindFramebuffer(V.READ_FRAMEBUFFER,yn.__webglFramebuffer),xt.bindFramebuffer(V.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ne=0;Ne<yt;Ne++)mi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,It.get(A).__webglTexture,K,qt+Ne),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,It.get(k).__webglTexture,_t,Se+Ne)),V.blitFramebuffer(Ct,Ot,Ct+wt,Ot+mt,Tt,Yt,Tt+wt,Yt+mt,V.DEPTH_BUFFER_BIT,V.NEAREST);xt.bindFramebuffer(V.READ_FRAMEBUFFER,null),xt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||It.has(A)){const $t=It.get(A),Oe=It.get(k);xt.bindFramebuffer(V.READ_FRAMEBUFFER,P),xt.bindFramebuffer(V.DRAW_FRAMEBUFFER,O);for(let yn=0;yn<yt;yn++)mi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$t.__webglTexture,K,qt+yn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,$t.__webglTexture,K),Ti?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Oe.__webglTexture,_t,Se+yn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Oe.__webglTexture,_t),K!==0?V.blitFramebuffer(Ct,Ot,Ct+wt,Ot+mt,Tt,Yt,Tt+wt,Yt+mt,V.COLOR_BUFFER_BIT,V.NEAREST):Ti?V.copyTexSubImage3D(At,_t,Tt,Yt,Se+yn,Ct,Ot,wt,mt):V.copyTexSubImage2D(At,_t,Tt,Yt,Ct,Ot,wt,mt);xt.bindFramebuffer(V.READ_FRAMEBUFFER,null),xt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ti?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(At,_t,Tt,Yt,Se,wt,mt,yt,re,Ge,oe.data):k.isCompressedArrayTexture?V.compressedTexSubImage3D(At,_t,Tt,Yt,Se,wt,mt,yt,re,oe.data):V.texSubImage3D(At,_t,Tt,Yt,Se,wt,mt,yt,re,Ge,oe):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,_t,Tt,Yt,wt,mt,re,Ge,oe.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,_t,Tt,Yt,oe.width,oe.height,re,oe.data):V.texSubImage2D(V.TEXTURE_2D,_t,Tt,Yt,wt,mt,re,Ge,oe);xt.pixelStorei(V.UNPACK_ROW_LENGTH,Ye),xt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,te),xt.pixelStorei(V.UNPACK_SKIP_PIXELS,wi),xt.pixelStorei(V.UNPACK_SKIP_ROWS,He),xt.pixelStorei(V.UNPACK_SKIP_IMAGES,Kr),_t===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&V.generateMipmap(At),xt.unbindTexture()},this.initRenderTarget=function(A){It.get(A).__webglFramebuffer===void 0&&Ft.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ft.setTextureCube(A,0):A.isData3DTexture?Ft.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ft.setTexture2DArray(A,0):Ft.setTexture2D(A,0),xt.unbindTexture()},this.resetState=function(){U=0,I=0,X=null,xt.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const ch={type:"change"},zo={type:"start"},hh={type:"end"},Dr=new rr,uh=new Rn,cg=Math.cos(70*le.DEG2RAD),Re=new G,Ke=2*Math.PI,jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bo=1e-6;class hg extends Yd{constructor(t,e=null){super(t,e),this.state=jt.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Un.ROTATE,MIDDLE:Un.DOLLY,RIGHT:Un.PAN},this.touches={ONE:Qn.ROTATE,TWO:Qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new mn,this._lastTargetPosition=new G,this._quat=new mn().setFromUnitVectors(t.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new br,this._sphericalDelta=new br,this._scale=1,this._panOffset=new G,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new G,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=dg.bind(this),this._onPointerDown=ug.bind(this),this._onPointerUp=fg.bind(this),this._onContextMenu=Mg.bind(this),this._onMouseWheel=gg.bind(this),this._onKeyDown=_g.bind(this),this._onTouchStart=xg.bind(this),this._onTouchMove=vg.bind(this),this._onMouseDown=pg.bind(this),this._onMouseMove=mg.bind(this),this._interceptControlDown=Sg.bind(this),this._interceptControlUp=yg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=jt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ch),this.update(),this.state=jt.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Re.copy(e).sub(this.target),Re.applyQuaternion(this._quat),this._spherical.setFromVector3(Re),this.autoRotate&&this.state===jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ke:n>Math.PI&&(n-=Ke),s<-Math.PI?s+=Ke:s>Math.PI&&(s-=Ke),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Re.setFromSpherical(this._spherical),Re.applyQuaternion(this._quatInverse),e.copy(this.target).add(Re),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Re.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new G(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Re.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Dr.origin.copy(this.object.position),Dr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Dr.direction))<cg?this.object.lookAt(this.target):(uh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Dr.intersectPlane(uh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Bo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bo||this._lastTargetPosition.distanceToSquared(this.target)>Bo?(this.dispatchEvent(ch),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ke/60*this.autoRotateSpeed*t:Ke/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Re.setFromMatrixColumn(e,0),Re.multiplyScalar(-t),this._panOffset.add(Re)}_panUp(t,e){this.screenSpacePanning===!0?Re.setFromMatrixColumn(e,1):(Re.setFromMatrixColumn(e,0),Re.crossVectors(this.object.up,Re)),Re.multiplyScalar(t),this._panOffset.add(Re)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Re.copy(s).sub(this.target);let r=Re.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ug(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function dg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function fg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hh),this.state=jt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function pg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Un.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=jt.DOLLY;break;case Un.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=jt.ROTATE}break;case Un.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=jt.PAN}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(zo)}function mg(i){switch(this.state){case jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function gg(i){this.enabled===!1||this.enableZoom===!1||this.state!==jt.NONE||(i.preventDefault(),this.dispatchEvent(zo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(hh))}function _g(i){this.enabled!==!1&&this._handleKeyDown(i)}function xg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Qn.ROTATE:if(this.enableRotate===!1){this.state=jt.NONE;break}this._handleTouchStartRotate(i),this.state=jt.TOUCH_ROTATE;break;case Qn.PAN:if(this.enablePan===!1){this.state=jt.NONE;break}this._handleTouchStartPan(i),this.state=jt.TOUCH_PAN;break;default:this.state=jt.NONE}break;case 2:switch(this.touches.TWO){case Qn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=jt.TOUCH_DOLLY_PAN;break;case Qn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=jt.TOUCH_DOLLY_ROTATE;break;default:this.state=jt.NONE}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(zo)}function vg(i){switch(this._trackPointer(i),this.state){case jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=jt.NONE}}function Mg(i){this.enabled!==!1&&i.preventDefault()}function Sg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ko=new Rn,Lr=new qd,Qi=new Lt,Go=new G;class Eg extends hg{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Un.PAN,MIDDLE:Un.DOLLY,RIGHT:Un.ROTATE},this.touches={ONE:Qn.PAN,TWO:Qn.DOLLY_ROTATE},this._panWorldStart=new G}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;ko.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();Qi.x=(t.clientX-n.left)/n.width*2-1,Qi.y=-((t.clientY-n.top)/n.height)*2+1,Lr.setFromCamera(Qi,this.object),Lr.ray.intersectPlane(ko,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const n=this.domElement.getBoundingClientRect();Qi.x=(t.clientX-n.left)/n.width*2-1,Qi.y=-((t.clientY-n.top)/n.height)*2+1,Lr.setFromCamera(Qi,this.object),Lr.ray.intersectPlane(ko,Go)&&(Go.sub(this._panWorldStart),this._panOffset.copy(Go).negate(),this.update())}}const Ir=new Rt;function W(i){return Ir.set(i),[Ir.r,Ir.g,Ir.b]}function ie(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function Ls(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function qe(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class ue{constructor(){at(this,"pos",[]);at(this,"nor",[]);at(this,"col",[]);at(this,"glo",[]);at(this,"ox",0);at(this,"oy",0);at(this,"oz",0);at(this,"c",1);at(this,"s",0)}get vertexCount(){return this.pos.length/3}frame(t=0,e=0,n=0,s=0){return this.ox=t,this.oy=e,this.oz=n,this.c=Math.cos(s),this.s=Math.sin(s),this}wx(t,e){return this.ox+t*this.c+e*this.s}wz(t,e){return this.oz-t*this.s+e*this.c}tri(t,e,n,s,r,a,o,l,c,h,d=0){const f=this.wx(t,n),u=this.wz(t,n),g=this.oy+e,v=this.wx(s,a),m=this.wz(s,a),p=this.oy+r,x=this.wx(o,c),S=this.wz(o,c),M=this.oy+l,w=v-f,E=p-g,_=m-u,y=x-f,C=M-g,b=S-u;let R=E*b-_*C,D=_*y-w*b,F=w*C-E*y;const P=Math.hypot(R,D,F)||1;R/=P,D/=P,F/=P,this.pos.push(f,g,u,v,p,m,x,M,S),this.nor.push(R,D,F,R,D,F,R,D,F),this.col.push(h[0],h[1],h[2],h[0],h[1],h[2],h[0],h[1],h[2]),this.glo.push(d,d,d)}quad(t,e,n,s,r,a,o,l,c,h,d,f,u,g=0){this.tri(t,e,n,s,r,a,o,l,c,u,g),this.tri(t,e,n,o,l,c,h,d,f,u,g)}box(t,e,n,s,r,a,o,l=void 0,c=null,h=0){this.quad(t,e,a,s,e,a,s,r,a,t,r,a,o,h),this.quad(s,e,n,t,e,n,t,r,n,s,r,n,o,h),this.quad(s,e,a,s,e,n,s,r,n,s,r,a,o,h),this.quad(t,e,n,t,e,a,t,r,a,t,r,n,o,h),l!==null&&this.quad(t,r,a,s,r,a,s,r,n,t,r,n,l??o,h),c&&this.quad(t,e,n,s,e,n,s,e,a,t,e,a,c,h)}cyl(t,e,n,s,r,a,o,l,c=null,h=0){const d=e+a;for(let f=0;f<o;f++){const u=f/o*Math.PI*2,g=(f+1)/o*Math.PI*2,v=Math.cos(u),m=Math.sin(u),p=Math.cos(g),x=Math.sin(g);r>1e-4?(this.quad(t+v*s,e,n+m*s,t+v*r,d,n+m*r,t+p*r,d,n+x*r,t+p*s,e,n+x*s,l,h),c&&this.tri(t,d,n,t+p*r,d,n+x*r,t+v*r,d,n+m*r,c,h)):this.tri(t+v*s,e,n+m*s,t,d,n,t+p*s,e,n+x*s,l,h)}}blob(t,e,n,s,r,a,o,l,c,h,d=0){const f=h??c;for(let u=0;u<l;u++){const g=u/l*Math.PI,v=(u+1)/l*Math.PI,m=Math.cos(g),p=Math.cos(v),x=Math.sin(g),S=Math.sin(v),M=Ls(c,f,1-(u+.5)/l);for(let w=0;w<o;w++){const E=w/o*Math.PI*2,_=(w+1)/o*Math.PI*2,y=Math.cos(E),C=Math.sin(E),b=Math.cos(_),R=Math.sin(_),D=t+y*x*s,F=e+m*r,P=n+C*x*a,O=t+b*x*s,U=n+R*x*a,I=t+y*S*s,X=e+p*r,N=n+C*S*a,B=t+b*S*s,H=n+R*S*a;u>0&&this.tri(D,F,P,O,F,U,B,X,H,M,d),u<l-1&&this.tri(D,F,P,B,X,H,I,X,N,M,d)}}}walls(t,e,n,s,r=0){const a=t.length/2,o=Ho(t)>0;for(let l=0;l<a;l++){const c=(l+1)%a,h=t[l*2],d=t[l*2+1],f=t[c*2],u=t[c*2+1];o?this.quad(f,e,u,h,e,d,h,n,d,f,n,u,s,r):this.quad(h,e,d,f,e,u,f,n,u,h,n,d,s,r)}}cap(t,e,n,s=0){const r=t.length/2,a=[];for(let l=0;l<r;l++)a.push(new Lt(t[l*2],t[l*2+1]));const o=To.triangulateShape(a,[]);for(const l of o){const c=a[l[0]],h=a[l[1]],d=a[l[2]];(h.x-c.x)*(d.y-c.y)-(h.y-c.y)*(d.x-c.x)>0?this.tri(c.x,e,c.y,d.x,e,d.y,h.x,e,h.y,n,s):this.tri(c.x,e,c.y,h.x,e,h.y,d.x,e,d.y,n,s)}}build(){const t=new we;return t.setAttribute("position",new be(new Float32Array(this.pos),3)),t.setAttribute("normal",new be(new Float32Array(this.nor),3)),t.setAttribute("color",new be(new Float32Array(this.col),3)),t.setAttribute("glow",new be(new Float32Array(this.glo),1)),t.computeBoundingSphere(),t.computeBoundingBox(),this.pos=[],this.nor=[],this.col=[],this.glo=[],t}}function Ho(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}const Nr={value:0};function ji(i={}){const t=new hi({vertexColors:!0,roughness:i.roughness??.86,metalness:0,side:i.side??ze}),e=new Rt(i.glowColor??16761722);return t.onBeforeCompile=n=>{n.uniforms.uNight=Nr,n.uniforms.uGlowColor={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float glow;
varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;
uniform float uNight;
uniform vec3 uGlowColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlowColor * vGlow * uNight * 2.4;`)},t.customProgramCacheKey=()=>"inverloch-model",t}function Ur(i){return i.onBeforeCompile=t=>{t.uniforms.uNight=Nr,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.82 * uNight;`)},i.customProgramCacheKey=()=>"inverloch-unlit",i}const qn={day:{sunDir:[-.42,.78,-.46],sunColor:16774109,sunIntensity:3.1,hemiSky:13953279,hemiGround:9280120,hemiIntensity:1.25,zenith:4163279,horizon:13625078,below:1582638,sunGlow:1,shallow:7129789,deep:1201018,waterSky:12903158,foam:1,night:0,exposure:1},golden:{sunDir:[-.84,.22,.36],sunColor:16756848,sunIntensity:3,hemiSky:15781309,hemiGround:6973032,hemiIntensity:1.15,zenith:4153244,horizon:16760970,below:1645863,sunGlow:1.6,shallow:7320486,deep:1390942,waterSky:16763040,foam:.9,night:.25,exposure:1},night:{sunDir:[.38,.72,-.42],sunColor:10467071,sunIntensity:.5,hemiSky:3821436,hemiGround:1053980,hemiIntensity:.55,zenith:396056,horizon:1582922,below:263948,sunGlow:.5,shallow:1920092,deep:331552,waterSky:2242140,foam:.45,night:1,exposure:1.05}},bg=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
  gl_Position = p.xyww;
}`,wg=`
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
}`;class Tg{constructor(t,e,n){at(this,"sun",new Wd(16777215,3));at(this,"hemi",new Gd(16777215,8947848,1));at(this,"sky");at(this,"sunDir",new G);at(this,"skyUniforms");at(this,"from");at(this,"to");at(this,"t",1);at(this,"mode","day");this.renderer=t,this.water=e,this.from=this.to=qn.day,this.skyUniforms={uZenith:{value:new Rt},uHorizon:{value:new Rt},uBelow:{value:new Rt},uSunDir:{value:new G},uSunColor:{value:new Rt},uSunGlow:{value:1},uNight:{value:0}},this.sky=new Qt(new Ro(1,32,16),new Xn({uniforms:this.skyUniforms,vertexShader:bg,fragmentShader:wg,side:Ve,depthWrite:!1,depthTest:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,n>0&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(n,n)),this.apply(1)}set(t,e=!1){t===this.mode&&this.t>=1||(this.from=this.snapshot(),this.to=qn[t],this.mode=t,this.t=e?1:0,this.apply(this.t))}update(t){return this.t>=1?!1:(this.t=Math.min(1,this.t+t/1.4),this.apply(this.t),!0)}aimShadow(t,e){if(!this.sun.castShadow)return;const n=le.clamp(e*.7,140,2400),s=this.sun.shadow,r=s.camera,a=n*2/s.mapSize.x,o=Math.round(t.x/a)*a,l=Math.round(t.z/a)*a,c=n*2.4+300;this.sun.target.position.set(o,0,l),this.sun.position.set(o,0,l).addScaledVector(this.sunDir,c),this.sun.target.updateMatrixWorld(),r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=1,r.far=c*2+400,r.updateProjectionMatrix(),s.bias=-.3/(r.far-r.near),s.normalBias=le.clamp(a*1.6,.06,1.2))}setSolar(t){const e=(t%1440+1440)%1440,n=6*60,s=20.5*60;let r,a;if(e>=n&&e<=s)a=(e-n)/(s-n),r=Math.sin(Math.PI*a)*70;else{const g=((e<n?e+1440:e)-s)/(1440-(s-n));a=g<.5?1:0,r=-Math.sin(Math.PI*g)*40}const o=le.degToRad(110*(1-2*a)),l=le.degToRad(Math.max(r,5)),c=[Math.sin(o)*Math.cos(l),Math.sin(l),-Math.cos(o)*Math.cos(l)];let h;r>=25?h=qn.day:r>=6?h=Vo(qn.golden,qn.day,(r-6)/19):r>=-6?h=Vo(qn.night,qn.golden,(r+6)/12):h=qn.night;const d=le.clamp((2-r)/6,0,1),f=qn.night.sunDir,u=[c[0]+(f[0]-c[0])*d,c[1]+(f[1]-c[1])*d,c[2]+(f[2]-c[2])*d];this.from=this.to={...h,sunDir:u},this.mode=r>=25?"day":r>=-6?"golden":"night",this.apply(1)}snapshot(){return Vo(this.from,this.to,Ag(this.t))}apply(t){this.t=t;const e=this.snapshot();this.sunDir.set(...e.sunDir).normalize(),this.sun.color.set(e.sunColor),this.sun.intensity=e.sunIntensity,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const n=this.skyUniforms;n.uZenith.value.set(e.zenith),n.uHorizon.value.set(e.horizon),n.uBelow.value.set(e.below),n.uSunDir.value.copy(this.sunDir),n.uSunColor.value.set(e.sunColor),n.uSunGlow.value=e.sunGlow,n.uNight.value=e.night;const s=this.water.uniforms;s.uSunDir.value.copy(this.sunDir),s.uSunColor.value.set(e.sunColor).multiplyScalar(Math.min(1,e.sunIntensity/2.5)),s.uShallow.value.set(e.shallow),s.uDeep.value.set(e.deep),s.uSky.value.set(e.waterSky),s.uFoam.value=e.foam,this.water.skirt.material.color.set(e.deep).lerp(new Rt(e.shallow),.35),Nr.value=e.night,this.renderer.toneMappingExposure=e.exposure}}function Ag(i){return i*i*(3-2*i)}function Vo(i,t,e){if(e<=0)return i;if(e>=1)return t;const n=(r,a)=>new Rt(r).lerp(new Rt(a),e).getHex(),s=(r,a)=>r+(a-r)*e;return{sunDir:[s(i.sunDir[0],t.sunDir[0]),s(i.sunDir[1],t.sunDir[1]),s(i.sunDir[2],t.sunDir[2])],sunColor:n(i.sunColor,t.sunColor),sunIntensity:s(i.sunIntensity,t.sunIntensity),hemiSky:n(i.hemiSky,t.hemiSky),hemiGround:n(i.hemiGround,t.hemiGround),hemiIntensity:s(i.hemiIntensity,t.hemiIntensity),zenith:n(i.zenith,t.zenith),horizon:n(i.horizon,t.horizon),below:n(i.below,t.below),sunGlow:s(i.sunGlow,t.sunGlow),shallow:n(i.shallow,t.shallow),deep:n(i.deep,t.deep),waterSky:n(i.waterSky,t.waterSky),foam:s(i.foam,t.foam),night:s(i.night,t.night),exposure:s(i.exposure,t.exposure)}}async function Rg(i,t,e){if(!i.detail)return[];try{const n=await fetch(i.detail,{signal:e});if(!n.ok)return[];const s=(await n.json()).patches,r=i.detail.slice(0,i.detail.lastIndexOf("/")+1),a=await Promise.all(s.map(async o=>{var h;const l=t?o.lo:o.file,c=await new vc().loadAsync(((h=i.detailFiles)==null?void 0:h[l])??r+l);return c.colorSpace=ye,c.generateMipmaps=!0,c.minFilter=bn,c.wrapS=c.wrapT=un,{x:o.x,z:o.z,size:o.size,texture:c}}));if(e!=null&&e.aborted){for(const o of a)o.texture.dispose();return[]}return a}catch{return[]}}const Wo=10,Cg=5,ts=4,Pg=3;function Fr(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Int16Array(e.buffer,0,e.length>>1)}async function Dg(i){const t=new Uint8Array(i),e=new DataView(i);let n=8,s=0,r=0,a=0,o=0,l=0;const c=[];for(;n<t.length;){const v=e.getUint32(n),m=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]);if(m==="IHDR")s=e.getUint32(n+8),r=e.getUint32(n+12),a=t[n+16],o=t[n+17],l=t[n+20];else if(m==="IDAT")c.push(t.subarray(n+8,n+8+v));else if(m==="IEND")break;n+=12+v}if(a!==8||o!==2&&o!==6||l)throw new Error("Unsupported terrain image format");const h=o===2?3:4,d=new Blob(c).stream().pipeThrough(new DecompressionStream("deflate")),f=new Uint8Array(await new Response(d).arrayBuffer()),u=s*h,g=new Uint8Array(u*r);for(let v=0;v<r;v++){const m=f[v*(u+1)],p=v*(u+1)+1,x=v*u;for(let S=0;S<u;S++){const M=S>=h?g[x+S-h]:0,w=v>0?g[x-u+S]:0,E=S>=h&&v>0?g[x-u+S-h]:0;let _=f[p+S];if(m===1)_+=M;else if(m===2)_+=w;else if(m===3)_+=M+w>>1;else if(m===4){const y=Math.abs(w-E),C=Math.abs(M-E),b=Math.abs(M+w-2*E);_+=y<=C&&y<=b?M:C<=b?w:E}g[x+S]=_&255}}return{width:s,height:r,channels:h,data:g}}async function Lg(i,t,e){let n=0;const s=u=>t(++n/4,u);t(0,"Fetching map data");const[r,a,o]=await Promise.all([fetch(i.town,{signal:e}).then(u=>{if(!u.ok)throw new Error("Could not load the town data");return u.json()}).then(u=>(s("Streets and buildings"),u)),fetch(i.height,{signal:e}).then(u=>{if(!u.ok)throw new Error("Could not load the terrain");return u.arrayBuffer()}).then(Dg).then(u=>(s("Terrain"),u)),new vc().loadAsync(i.ground).then(u=>(s("Ground texture"),u))]),l=r.meta,c=a.width*a.height,h=new Float32Array(c),d=new Float32Array(c),f=a.channels;for(let u=0;u<c;u++)h[u]=(a.data[u*f]<<8|a.data[u*f+1])/l.heightScale-l.heightOffset,d[u]=a.data[u*f+2]/255;return o.colorSpace=ye,o.anisotropy=8,o.generateMipmaps=!0,o.minFilter=bn,s("Building the model"),{town:{...r,houses:Fr(r.houses),cabins:Fr(r.cabins),cars:Fr(r.cars),trees:Fr(r.trees)},heights:h,exposure:d,ground:o}}const Or=[15921126,15261640,13619920,11120043,12110550,11845800,14272936,5988452,11036494,14205088,15327150,16448250].map(W),di=[15000277,12435386,8948618,4934726,3487290,6957594,8160360,3555666,11888447,11644323].map(W),tn=W(3163994),zr=[7031348,3098712,9056042,15658730,4151878].map(W),Br=W(9138002),fi=W(16053230),dh=W(12171184),kr=W(1846090),fh=[15327951,3099196,2504783,8007210,3816770,13214282,5209226].map(W);function ph(i,t,e,n,s,r){const a=ie(r,.9);if(t>=e){const o=t-e;i.quad(-t,n,e,t,n,e,o,n+s,0,-o,n+s,0,r),i.quad(t,n,-e,-t,n,-e,-o,n+s,0,o,n+s,0,r),i.tri(t,n,e,t,n,-e,o,n+s,0,a),i.tri(-t,n,-e,-t,n,e,-o,n+s,0,a)}else{const o=e-t;i.quad(t,n,e,t,n,-e,0,n+s,-o,0,n+s,o,r),i.quad(-t,n,-e,-t,n,e,0,n+s,o,0,n+s,-o,r),i.tri(-t,n,e,t,n,e,0,n+s,o,a),i.tri(t,n,-e,-t,n,-e,0,n+s,-o,a)}}function es(i,t,e,n,s,r,a,o){const l=t/2,c=e/2;if(t>=e){const d=c*s;return i.quad(-l-r,n-r*s,c+r,l+r,n-r*s,c+r,l+r,n+d,0,-l-r,n+d,0,a),i.quad(l+r,n-r*s,-c-r,-l-r,n-r*s,-c-r,-l-r,n+d,0,l+r,n+d,0,a),i.tri(l,n,c,l,n,-c,l,n+d,0,o),i.tri(-l,n,-c,-l,n,c,-l,n+d,0,o),d}const h=l*s;return i.quad(l+r,n-r*s,c+r,l+r,n-r*s,-c-r,0,n+h,-c-r,0,n+h,c+r,a),i.quad(-l-r,n-r*s,-c-r,-l-r,n-r*s,c+r,0,n+h,c+r,0,n+h,-c-r,a),i.tri(-l,n,c,l,n,c,0,n+h,c,o),i.tri(l,n,-c,-l,n,-c,0,n+h,-c,o),h}function Gr(i,t,e,n,s,r,a,o,l){const c=t/2,h=e/2,d=n+s,f=n+r,u=(d-f)/e;i.quad(-c-a,d+a*u,h+a,c+a,d+a*u,h+a,c+a,f-a*u,-h-a,-c-a,f-a*u,-h-a,o),i.quad(-c,n,h,c,n,h,c,d,h,-c,d,h,l),i.quad(c,n,h,c,n,-h,c,f,-h,c,d,h,l),i.quad(-c,n,-h,-c,n,h,-c,d,h,-c,f,-h,l),i.quad(c,n,-h,-c,n,-h,-c,f,-h,c,f,-h,l)}const sn=.05;function Yn(i,t,e,n,s,r,a,o=0){const l=t/2+sn;i.quad(e,s,l,n,s,l,n,r,l,e,r,l,a,o)}function Ig(i,t,e,n,s,r,a,o=0){const l=-t/2-sn;i.quad(n,s,l,e,s,l,e,r,l,n,r,l,a,o)}function mh(i,t,e,n,s,r,a,o=0){const l=t/2+sn;i.quad(l,s,n,l,s,e,l,r,e,l,r,n,a,o)}function gh(i,t,e,n,s,r,a,o=0){const l=-t/2-sn;i.quad(l,s,e,l,s,n,l,r,n,l,r,e,a,o)}function Xo(i,t,e,n){let s=1/0,r=-1/0;for(const[a,o]of[[-e,-n],[e,-n],[e,n],[-e,n],[0,0]]){const l=i.yAt(t.wx(a,o),t.wz(a,o));l<s&&(s=l),l>r&&(r=l)}return{lo:s,hi:r}}function Ng(i,t,e,n,s,r,a,o,l,c,h,d){i.frame(e,0,n,a);const f=Xo(t,i,s/2,r/2),u=f.hi+.18;i.frame(e,u,n,a);const g=Or[c%Or.length],v=di[h%di.length],m=o===2?5.5:2.85,p=s/2,x=r/2,S=ie(g,.7);i.box(-p,f.lo-u-.3,-x,p,0,x,S,null),i.box(-p,0,-x,p,m,x,g,l===3?ie(v,1):null);let M=m;if(l===0){const y=Math.min(p,x)+.5;ph(i,p+.5,x+.5,m,y*.44,v),M=m+y*.44}else l===1?M=m+es(i,s,r,m,.5,.4,v,g):l===2?(Gr(i,s,r,m,1.35,.25,.5,v,g),Yn(i,r,-p+.5,p-.5,m+.25,m+1.05,tn,d()<.5?1:0),M=m+1.4):(i.box(-p-.15,m,-x-.15,p+.15,m+.3,x+.15,ie(g,.92),v),M=m+.3);const w=zr[Math.floor(d()*zr.length)];for(let _=0;_<o;_++){const y=_*2.75+.85,C=y+1.3,b=Math.max(2,Math.floor(s/3.2)),R=_===0?Math.floor(d()*b):-1;for(let P=0;P<b;P++){const O=-p+(P+.5)/b*s;P===R?Yn(i,r,O-.5,O+.5,0,2.1,w):Yn(i,r,O-.85,O+.85,y,C,tn,d()<.55?1:0)}const D=Math.max(1,Math.floor(s/3.8));for(let P=0;P<D;P++){const O=-p+(P+.5)/D*s;Ig(i,r,O-.75,O+.75,y,C,tn,d()<.5?1:0)}const F=Math.max(1,Math.floor(r/4.2));for(let P=0;P<F;P++){const O=-x+(P+.5)/F*r;mh(i,s,O-.7,O+.7,y,C,tn,d()<.45?1:0),gh(i,s,O-.7,O+.7,y,C,tn,d()<.45?1:0)}}const E=d();if(o===1&&E<.36){const _=p*(.6+d()*.4),y=1.9;i.box(-_,-.12,x,_,.02,x+y,Br),i.quad(-_-.2,2.3,x+y+.2,_+.2,2.3,x+y+.2,_+.2,2.7,x,-_-.2,2.7,x,ie(v,.93));const C=Math.max(2,Math.round(_*2/3));for(let b=0;b<=C;b++){const R=-_+b/C*_*2;i.box(R-.06,0,x+y-.12,R+.06,2.32,x+y,fi,null)}}else if(o===2&&E<.5){const _=p*(.55+d()*.45),y=2;i.box(-_,2.62,x,_,2.78,x+y,dh,Br,ie(dh,.8));const C=d()<.5?W(10469580):fi;i.box(-_,2.78,x+y-.05,_,3.75,x+y,C,null),i.box(-_,2.78,x,-_+.05,3.75,x+y,C,null),i.box(_-.05,2.78,x,_,3.75,x+y,C,null);for(const b of[-_+.1,_-.1])i.box(b-.08,0,x+y-.2,b+.08,2.62,x+y-.04,fi,null);d()<.5&&i.quad(-_-.2,5.05,x+y+.2,_+.2,5.05,x+y+.2,_+.2,5.4,x,-_-.2,5.4,x,ie(v,.93))}if(d()<.1&&l<=1){const _=(d()-.5)*p,y=(d()-.5)*x*.6;i.box(_-.32,m,y-.32,_+.32,M+.55,y+.32,W(10116936))}if(d()<.24&&l<=1&&Ug(i,s,r,m,a,l,d),d()<.15){const _=(d()<.5?-1:1)*(p+1.25),y=-x+1.3;i.cyl(_,f.hi-u,y,1.05,1.05,2.1,8,d()<.5?W(9347975):W(12370625),W(11120814))}}function Ug(i,t,e,n,s,r,a){const o=t/2,l=e/2,c=r===0?.5:.4,h=.22,d=.74,f=.09;if(t>=e){const u=l+c,g=r===0?u*.44:l*.5*(1+c/l),v=r===0?n:n-c*.5,m=Math.max(1.4,(r===0?o-l:o)*.7)*(.6+a()*.4),p=Math.cos(s)<0,x=p?1:-1,S=x*u*(1-h),M=x*u*(1-d),w=v+g*h+f,E=v+g*d+f;p?i.quad(-m,w,S,m,w,S,m,E,M,-m,E,M,kr):i.quad(m,w,S,-m,w,S,-m,E,M,m,E,M,kr)}else{const u=o+c,g=r===0?u*.44:o*.5*(1+c/o),v=r===0?n:n-c*.5,m=Math.max(1.4,(r===0?l-o:l)*.7)*(.6+a()*.4),p=Math.sin(s)>0,x=p?1:-1,S=x*u*(1-h),M=x*u*(1-d),w=v+g*h+f,E=v+g*d+f;p?i.quad(S,w,m,S,w,-m,M,E,-m,M,E,m,kr):i.quad(S,w,-m,S,w,m,M,E,m,M,E,-m,kr)}}function Fg(i,t,e,n,s,r,a,o,l,c){i.frame(e,0,n,a);const h=Xo(t,i,s/2,r/2);i.frame(e,h.hi+.05,n,a);const d=[W(14275778),W(9083526),W(12041145),W(7305842)][l%4],f=di[c%di.length],u=2.4,g=s/2,v=r/2;i.box(-g,h.lo-h.hi-.3,-v,g,u,v,d,null),o===1?es(i,s,r,u,.32,.2,f,d):Gr(i,s,r,u,.6,.1,.2,f,d),Yn(i,r,-g*.72,g*.72,0,2.05,ie(d,1.12))}const Hr=[14243375,3112880,6266970,14725690,9134e3,4170656,14252591,4878261].map(W);function Og(i,t,e,n,s,r,a,o){const l={0:[8,4.2],1:[6.4,4.8],2:[3.6,3.6],3:[10.5,7.5]},[c,h]=l[r];i.frame(e,0,n,s);const d=Xo(t,i,c/2,h/2);i.frame(e,d.hi+.05,n,s);const f=d.lo-d.hi-.3;if(r===0){const u=[W(15129798),W(12175305),W(13219994),W(10465434)][a%4],g=di[(a*3+1)%di.length];i.box(-4,f,-2.1,4,.35,2.1,ie(u,.6),null),i.box(-4,.35,-2.1,4,2.75,2.1,u,null),es(i,8,4.2,2.75,.42,.35,g,u),i.box(-3.2,.2,2.1,1.2,.35,3.7,Br),i.box(-3.2,.35,3.62,1.2,1.25,3.7,fi,null),Yn(i,4.2,-2.8,-1.2,1.2,2.3,tn,o()<.5?1:0),Yn(i,4.2,-.4,.5,.35,2.4,zr[a%zr.length]),Yn(i,4.2,1.4,3.2,1.2,2.3,tn,o()<.5?1:0)}else if(r===1){const u=Hr[a%Hr.length];i.box(-2.9,.45,-2.3,2.9,2.55,-.1,fi,W(15263972),W(9079432)),i.box(-2.92,1.05,-2.32,2.92,1.3,-.08,u,null),i.box(-1.4,0,-2.2,-.8,.5,-.2,W(2763308)),i.box(.8,0,-2.2,1.4,.5,-.2,W(2763308)),Yn(i,-.2,-2.2,-1,1.45,2.15,tn,o()<.4?1:0),i.box(-2.6,0,-.1,2.6,2,2.3,Ls(u,fi,.72),null),i.quad(-2.7,2,2.4,2.7,2,2.4,2.7,2.5,-.1,-2.7,2.5,-.1,Ls(u,fi,.55))}else if(r===2){const u=Hr[a%Hr.length];i.blob(0,0,0,1.75,1.55,1.75,6,4,ie(u,.85),u)}else{const u=W(14209732),g=W(5922659);i.box(-5.25,f,-3.75,5.25,3,3.75,u,null),Gr(i,10.5,7.5,3,1.5,.2,.7,g,W(9072466)),Yn(i,7.5,-4.4,4.4,.3,2.6,tn,o()<.6?1:0),i.box(-5.25,.05,3.75,5.25,.25,6.2,Br),mh(i,10.5,-2,2,.9,2.3,tn,o()<.5?1:0),gh(i,10.5,-2,2,.9,2.3,tn,o()<.5?1:0)}}function zg(i){const t=i.length/2;let e={cx:0,cz:0,w:0,d:0,heading:0,area:1/0};for(let n=0;n<t;n++){const s=(n+1)%t;let r=i[s*2]-i[n*2],a=i[s*2+1]-i[n*2+1];const o=Math.hypot(r,a);if(o<.5)continue;r/=o,a/=o;let l=1/0,c=-1/0,h=1/0,d=-1/0;for(let u=0;u<t;u++){const g=i[u*2],v=i[u*2+1],m=g*r+v*a,p=-g*a+v*r;m<l&&(l=m),m>c&&(c=m),p<h&&(h=p),p>d&&(d=p)}const f=(c-l)*(d-h);if(f<e.area){const u=(l+c)/2,g=(h+d)/2;e={cx:u*r-g*a,cz:u*a+g*r,w:c-l,d:d-h,heading:Math.atan2(-a,r),area:f}}}return e}function Bg(i,t){const e=i.length/2,n=Ho(i)>0?1:-1,s=[];for(let r=0;r<e;r++){const a=(r+e-1)%e,o=(r+1)%e;let l=i[r*2]-i[a*2],c=i[r*2+1]-i[a*2+1],h=i[o*2]-i[r*2],d=i[o*2+1]-i[r*2+1];const f=Math.hypot(l,c)||1,u=Math.hypot(h,d)||1;l/=f,c/=f,h/=u,d/=u;const g=-c*n,v=l*n,m=-d*n,p=h*n;let x=g+m,S=v+p;const M=Math.hypot(x,S)||1;x/=M,S/=M;const w=t/Math.max(.4,x*g+S*v);s.push(i[r*2]+x*w,i[r*2+1]+S*w)}return s}const kg=new Set(["house","detached","residential","terrace","yes;house","semidetached_house","bungalow"]),Gg=new Set(["shed","garage","garages","toilets","hut"]);function _h(i,t,e,n,s,r){const a=e.p.map(C=>C/10),o=a.length/2;let l=0,c=0,h=1/0,d=-1/0;for(let C=0;C<o;C++){l+=a[C*2],c+=a[C*2+1];const b=t.yAt(a[C*2],a[C*2+1]);b<h&&(h=b),b>d&&(d=b)}l/=o,c/=o;const f=Math.abs(Ho(a)),u=zg(a),g=f/(u.w*u.d||1),v=d+.15,m=Math.hypot(l-r[0],c-r[1])<420,p=e.k==="retail"||e.k==="commercial"||!!e.u||!!e.n||e.k==="yes"&&(f>300||m&&f>110),x=!p&&(kg.has(e.k)||e.k==="yes"&&f<=300),S=Gg.has(e.k)||f<28;let M;e.l?M=e.l*3.1:e.k==="roof"?M=3:e.k==="hangar"?M=6.5:e.k==="church"?M=5:S?M=2.5:x?M=s()<.2?5.5:2.9:M=f>1200?7:f>500?5.6:4.3+s()*.8;const w={name:e.n,use:e.u,kind:e.k,poly:a,cx:l,cz:c,area:f,obb:u,floorY:v,wallH:M,topY:v+M};let E=26;for(let C=0;C<o;C++){const b=(C+1)%o,R=a[C*2],D=a[C*2+1],F=a[b*2],P=a[b*2+1],O=Math.hypot(F-R,P-D);if(O<4.5)continue;const U=(R+F)/2,I=(D+P)/2,X=n.nearest(U,I,E);if(!X)continue;let N=-(P-D)/O,B=(F-R)/O;if(N*(U-l)+B*(I-c)<0&&(N=-N,B=-B),(X.px-U)*N+(X.pz-I)*B<X.dist*.5)continue;E=X.dist;const H=Math.atan2(N,B),it=(F-R)*Math.cos(H)-(P-D)*Math.sin(H);w.street={x:it>0?R:F,z:it>0?D:P,heading:H,length:O}}if(i.frame(0,v,0,0),e.k==="roof"){const C=W(12172728);i.walls(a,M-.25,M,C),i.cap(a,M,C);for(let b=0;b<o;b++)i.box(a[b*2]-.12,h-v,a[b*2+1]-.12,a[b*2]+.12,M-.25,a[b*2+1]+.12,W(6974832),null);return w}const _=p?[W(15328470),W(14275266),W(13620178),W(15128768),W(12568777),W(15789540),W(13220258)][Math.floor(s()*7)]:Or[Math.floor(s()*Or.length)],y=p&&f>300?[W(13225160),W(11777972),W(14211280),W(10133405)][Math.floor(s()*4)]:di[Math.floor(s()*di.length)];if(i.walls(a,h-v-.3,M,_),e.k==="church"){i.frame(u.cx,v,u.cz,u.heading);const C=es(i,u.w,u.d,M,1.15,.3,W(5922659),_);w.topY=v+M+C}else if((x||S||e.k==="hangar")&&g>.8&&o<=8)if(i.frame(u.cx,v,u.cz,u.heading),e.k==="hangar")w.topY=v+M+es(i,u.w,u.d,M,.3,.3,W(12172728),_);else if(S)Gr(i,u.w,u.d,M,.5,.1,.2,y,_);else if(s()<.55){const C=Math.min(u.w,u.d)/2+.45;ph(i,u.w/2+.45,u.d/2+.45,M,C*.44,y),w.topY=v+M+C*.44}else w.topY=v+M+es(i,u.w,u.d,M,.5,.4,y,_);else if(f<420&&!p){const C=Bg(a,Math.min(2.2,Math.sqrt(f)*.18)),b=1.15;for(let R=0;R<o;R++){const D=(R+1)%o;i.quad(a[R*2],M,a[R*2+1],a[D*2],M,a[D*2+1],C[D*2],M+b,C[D*2+1],C[R*2],M+b,C[R*2+1],y)}i.cap(C,M+b,ie(y,1.05)),w.topY=v+M+b}else{i.cap(a,M-.05,y),i.walls(a,M-.05,M+.45,ie(_,.96)),w.topY=v+M+.45;const C=Math.min(6,Math.floor(f/220));for(let b=0;b<C;b++){const R=(s()-.5)*u.w*.5,D=(s()-.5)*u.d*.5,F=Math.cos(u.heading),P=Math.sin(u.heading),O=u.cx+R*F+D*P,U=u.cz-R*P+D*F;i.box(O-1.1,M,U-.8,O+1.1,M+.9,U+.8,W(11120304))}}if(!S&&e.k!=="hangar"){const C=Math.max(1,Math.round(M/3));for(let b=0;b<o;b++){const R=(b+1)%o,D=a[b*2],F=a[b*2+1],P=a[R*2],O=a[R*2+1],U=Math.hypot(P-D,O-F);if(U<3.2)continue;let I=-(O-F)/U,X=(P-D)/U;I*((D+P)/2-l)+X*((F+O)/2-c)<0&&(I=-I,X=-X);const N=Math.atan2(I,X),B=(P-D)*Math.cos(N)-(O-F)*Math.sin(N);i.frame(B>0?D:P,v,B>0?F:O,N);const H=Math.floor(U/(p?4.2:3.4));for(let it=0;it<C;it++){const st=it*3+.9;if(!(p&&it===0&&w.street&&Math.abs(N-w.street.heading)<.01))for(let q=0;q<H;q++){const et=(q+.5)/H*U;i.quad(et-.8,st,sn,et+.8,st,sn,et+.8,st+1.3,sn,et-.8,st+1.3,sn,tn,s()<.5?1:0)}}}}if(p&&w.street&&!e.k.includes("church")&&f>60){const C=w.street;i.frame(C.x,v,C.z,C.heading);const b=fh[Math.floor(s()*fh.length)];if(i.quad(.5,.35,sn,C.length-.5,.35,sn,C.length-.5,2.7,sn,.5,2.7,sn,tn,.9),m&&C.length>6&&M<9){i.box(.2,3,0,C.length-.2,3.16,2.7,b,ie(b,.9),ie(b,.75)),i.box(.2,2.75,2.62,C.length-.2,3.3,2.7,Ls(b,fi,.25),null);const R=Math.max(1,Math.round(C.length/4.5));for(let D=0;D<=R;D++){const F=.35+D/R*(C.length-.7);i.box(F-.06,0,2.5,F+.06,3,2.62,W(4869456),null)}}}return i.frame(),w}function Hg(i,t,e,n,s=()=>!1){const r=new Qe;r.name="buildings";const a=ji(),o=900,l=new Map,c=(p,x)=>{const S=`${Math.floor(p/o)}:${Math.floor(x/o)}`;let M=l.get(S);return M||l.set(S,M=new ue),M},h=i.meta,d=[(145.7285-h.origin[0])*h.metresPerDegree[0],-(-38.63385-h.origin[1])*h.metresPerDegree[1]],f=qe(3996),u=[];for(const p of i.buildings){let x=0,S=0;for(let M=0;M<p.p.length;M+=2)x+=p.p[M],S+=p.p[M+1];if(x/=p.p.length*5,S/=p.p.length*5,!s(x,S)){if(n.has(p.n)){const M=new ue,w=_h(M,t,p,e,qe(1),d);w.custom=!0,u.push(w);continue}u.push(_h(c(x,S),t,p,e,f,d))}}const g=i.houses;for(let p=0;p<g.length;p+=Wo){const x=g[p]/4,S=g[p+1]/4,M=g[p+2]/10,w=g[p+3]/10,E=g[p+4]/10*(Math.PI/180),_=qe(p*7919+17);s(x,S)||(g[p+5]===1?Fg(c(x,S),t,x,S,M,w,E,g[p+7],g[p+8],g[p+9]):Ng(c(x,S),t,x,S,M,w,E,g[p+6],g[p+7],g[p+8],g[p+9],_))}const v=i.cabins;for(let p=0;p<v.length;p+=Cg){const x=v[p]/4,S=v[p+1]/4;s(x,S)||Og(c(x,S),t,x,S,v[p+2]/10*(Math.PI/180),v[p+3],v[p+4],qe(p*31+5))}let m=0;for(const p of l.values()){p.frame(),m+=p.vertexCount/3;const x=new Qt(p.build(),a);x.castShadow=!0,x.receiveShadow=!0,r.add(x)}return{group:r,footprints:u,triangles:m}}const Ln=1.5;class Vg{constructor(t,e,n,s,r,a,o){at(this,"nx");at(this,"nz");at(this,"y");at(this,"xMin");at(this,"zMin");at(this,"xMax");at(this,"zMax");at(this,"dx");at(this,"dz");at(this,"cellX");at(this,"cellZ");this.raw=t,this.exposure=e,this.w=n,this.h=s,this.sizeX=r,this.sizeZ=a,this.cellX=r/n,this.cellZ=a/s,this.nx=Math.floor((n-1)/o)+1,this.nz=Math.floor((s-1)/o)+1,this.dx=this.cellX*o,this.dz=this.cellZ*o,this.xMin=-r/2+this.cellX/2,this.zMin=-a/2+this.cellZ/2,this.xMax=this.xMin+(this.nx-1)*this.dx,this.zMax=this.zMin+(this.nz-1)*this.dz,this.y=new Float32Array(this.nx*this.nz);for(let l=0;l<this.nz;l++)for(let c=0;c<this.nx;c++)this.y[l*this.nx+c]=t[l*o*n+c*o]*Ln}yAt(t,e){let n=(t-this.xMin)/this.dx,s=(e-this.zMin)/this.dz;n<0?n=0:n>this.nx-1.0001&&(n=this.nx-1.0001),s<0?s=0:s>this.nz-1.0001&&(s=this.nz-1.0001);const r=n|0,a=s|0,o=n-r,l=s-a,c=a*this.nx+r,h=this.y[c],d=this.y[c+1],f=this.y[c+this.nx],u=this.y[c+this.nx+1];return o+l<=1?h+(d-h)*o+(f-h)*l:u+(f-u)*(1-o)+(d-u)*(1-l)}bilinear(t,e,n){let s=(e+this.sizeX/2)/this.cellX-.5,r=(n+this.sizeZ/2)/this.cellZ-.5;s<0?s=0:s>this.w-1.0001&&(s=this.w-1.0001),r<0?r=0:r>this.h-1.0001&&(r=this.h-1.0001);const a=s|0,o=r|0,l=s-a,c=r-o,h=o*this.w+a;return(t[h]*(1-l)+t[h+1]*l)*(1-c)+(t[h+this.w]*(1-l)+t[h+this.w+1]*l)*c}metresAt(t,e){return this.bilinear(this.raw,t,e)}exposureAt(t,e){return this.bilinear(this.exposure,t,e)}inside(t,e,n=0){return t>this.xMin+n&&t<this.xMax-n&&e>this.zMin+n&&e<this.zMax-n}}class Wg{constructor(t,e,n){at(this,"items",[]);at(this,"v",new G);at(this,"visible",!0);at(this,"obstacles",[]);this.layer=t;for(const s of[...e].sort((r,a)=>r.priority-a.priority)){const r=document.createElement("button");r.type="button",r.tabIndex=-1,r.className=`inv-label inv-label--${s.kind}`,r.textContent=s.name,r.style.visibility="hidden",r.addEventListener("click",()=>n(s.id)),t.appendChild(r),this.items.push({place:s,el:r,w:0,h:0,shown:!1})}}setVisible(t){this.visible=t,this.layer.style.display=t?"":"none"}setObstacles(t){this.obstacles=t}update(t,e,n,s=1/0){if(!this.visible)return;const r=[...this.obstacles];for(const a of this.items){a.w||(a.w=a.el.offsetWidth,a.h=a.el.offsetHeight);const o=a.place;this.v.set(o.x,o.y,o.z);const l=this.v.distanceTo(t.position);this.v.project(t);let c=this.v.z<1&&this.v.z>-1&&l<(o.maxDist??1/0)&&l<s;const h=(this.v.x*.5+.5)*e,d=(-this.v.y*.5+.5)*n,f=h-a.w/2,u=d-a.h,g=h+a.w/2,v=d;if(c&&(g<0||f>e||v<0||u>n)&&(c=!1),c){for(const m of r)if(f<m[2]+6&&g>m[0]-6&&u<m[3]+4&&v>m[1]-4){c=!1;break}}c&&(r.push([f,u,g,v]),a.el.style.transform=`translate3d(${Math.round(f)}px, ${Math.round(u)}px, 0)`),c!==a.shown&&(a.el.style.visibility=c?"visible":"hidden",a.shown=c)}}dispose(){for(const t of this.items)t.el.remove();this.items=[]}}const Xg=[{id:"town",name:"A'Beckett Street",kind:"landmark",lat:-38.63372,lon:145.7283,blurb:"Inverloch's main street: bakeries, fish and chips, cafes and shops, a short walk from the inlet.",view:[380,58,-28],priority:1,lift:26},{id:"jetty",name:"Inverloch Jetty",kind:"landmark",lat:-38.63591,lon:145.73413,blurb:"Timber jetty reaching into Anderson Inlet, with the boat ramp alongside. A favourite for fishing and an evening walk.",view:[190,63,32],priority:1,lift:16},{id:"surf",name:"Surf Beach & Life Saving Club",kind:"landmark",lat:-38.64634,lon:145.70199,blurb:"Ocean beach facing Bass Strait, watched over by the Inverloch Surf Life Saving Club on the dune.",view:[330,62,-32],priority:1,lift:20},{id:"inlet",name:"Anderson Inlet",kind:"water",lat:-38.6412,lon:145.7445,blurb:"A shallow tidal estuary where the Tarwin River meets the sea. The sandbars here come from LiDAR survey data: slide the tide to cover and uncover them.",view:[3e3,50,8],priority:2},{id:"hub",name:"The Hub",kind:"landmark",lat:-38.63332,lon:145.72762,blurb:"Inverloch Community Hub on A'Beckett Street, home to the library and visitor information.",view:[300,60,20],priority:3,maxDist:2600,lift:18},{id:"espy",name:"Esplanade Hotel",kind:"landmark",lat:-38.63419,lon:145.72889,blurb:"The pub at the foreshore end of the main street.",view:[280,62,-40],priority:3,maxDist:2200,lift:18},{id:"rainbow",name:"Rainbow Park",kind:"landmark",lat:-38.63529,lon:145.72876,blurb:"Foreshore playground with picnic lawns and barbecues beside the inlet beach.",view:[150,60,14],priority:3,maxDist:2200,lift:14},{id:"bunurong",name:"Bunurong Environment Centre",kind:"landmark",lat:-38.63465,lon:145.72917,blurb:"Environment centre and shell museum on The Esplanade.",view:[260,60,-15],priority:5,maxDist:1100,lift:15},{id:"glade",name:"The Glade",kind:"landmark",lat:-38.63539,lon:145.7302,blurb:"Foreshore reserve and picnic shelter between the town centre and the jetty.",view:[300,62,5],priority:5,maxDist:1300,lift:13},{id:"oval",name:"Recreation Reserve",kind:"landmark",lat:-38.63194,lon:145.72681,blurb:"The town's football oval, a block back from the main street.",view:[460,58,15],priority:4,maxDist:2600,lift:16},{id:"school",name:"Primary School",kind:"landmark",lat:-38.63062,lon:145.72813,blurb:"Inverloch Primary School.",view:[380,58,0],priority:6,maxDist:1500,lift:14},{id:"bowls",name:"Bowls Club",kind:"landmark",lat:-38.63556,lon:145.73245,blurb:"Inverloch Bowls Club, two greens beside the foreshore.",view:[260,60,0],priority:6,maxDist:1300,lift:12},{id:"tennis",name:"Tennis Club & Oval",kind:"landmark",lat:-38.62722,lon:145.7372,blurb:"Tennis courts and a second football oval on the north-east side of town.",view:[520,58,10],priority:6,maxDist:2e3,lift:14},{id:"camping",name:"Foreshore Holiday Parks",kind:"landmark",lat:-38.63425,lon:145.7442,blurb:"Cabins, caravans and tents under the trees along The Esplanade, steps from the inlet.",view:[560,60,15],priority:4,maxDist:2800,lift:16},{id:"screw",name:"Screw Creek & Townsend Bluff",kind:"nature",lat:-38.6338,lon:145.7546,blurb:"A tidal creek in a nature conservation reserve, with a walking circuit up to the lookout on Townsend Bluff.",view:[900,60,-20],priority:3,lift:24},{id:"norman",name:"Point Norman",kind:"nature",lat:-38.648,lon:145.7118,blurb:"The corner where the surf beach turns into the inlet.",view:[900,60,-35],priority:4,maxDist:4200,lift:14},{id:"smythe",name:"Point Smythe",kind:"nature",lat:-38.6466,lon:145.7366,blurb:"The tip of the Venus Bay peninsula, across the entrance from town: coastal scrub, dunes and walking tracks.",view:[1300,58,150],priority:3,lift:22},{id:"racv",name:"RACV Inverloch Resort",kind:"landmark",lat:-38.6487,lon:145.6876,blurb:"Resort and villas on the Cape Paterson road, on the hill above the coast.",view:[520,60,40],priority:5,maxDist:3200,lift:18},{id:"strait",name:"Bass Strait",kind:"water",lat:-38.6565,lon:145.7075,blurb:"Open ocean. Swell rolls in to the surf beach from here.",view:[2300,50,-12],priority:4}];function qg(i,t){return Xg.map(e=>{const n=(e.lon-i.origin[0])*i.metresPerDegree[0],s=-(e.lat-i.origin[1])*i.metresPerDegree[1],r=Math.max(t.yAt(n,s),0);return{...e,x:n,z:s,y:r+(e.lift??6)}})}function rn(i,t,e){return[(e-i.origin[0])*i.metresPerDegree[0],-(t-i.origin[1])*i.metresPerDegree[1]]}const Yg=new Set(["Inverloch Surf Life Saving Club","The Hub"]),Fe=W(10126440),Me=W(6113848),an=W(16053230),ns=W(11842219),me=W(7304312),Is=W(3163994),is=W(13644844),ss=W(15909424),Zg=W(16119022),qo=2.05*Ln;function xh(i,t,e,n=35){let s=1/0,r=0,a=1;for(let o=0;o<24;o++){const l=o/24*Math.PI*2,c=i.metresAt(t+Math.cos(l)*n,e+Math.sin(l)*n)+i.metresAt(t+Math.cos(l)*n*2,e+Math.sin(l)*n*2);c<s&&(s=c,r=Math.cos(l),a=Math.sin(l))}return[r,a]}function Vr(i){let t=0,e=0;for(let n=0;n<i.length;n+=2)t+=i[n],e+=i[n+1];return[t/(i.length/2)/10,e/(i.length/2)/10]}function Kg(i,t,e){const n=[];for(let S=0;S<e.length;S+=2)n.push([e[S]/10,e[S+1]/10]);t.metresAt(n[0][0],n[0][1])<t.metresAt(n[n.length-1][0],n[n.length-1][1])&&n.reverse();const s=1.7,r=qo,[a,o]=n[0];let l=a-n[1][0],c=o-n[1][1];const h=Math.hypot(l,c)||1;l/=h,c/=h;let d=0;for(;d<30&&t.yAt(a+l*d,o+c*d)<r-.25;)d+=1.5;const f=Math.max(t.yAt(a+l*d,o+c*d),r-1.2),u=Math.atan2(-l,-c);i.frame(a+l*d,0,o+c*d,u),i.quad(-s,f+.05,0,s,f+.05,0,s,r,d,-s,r,d,Fe),i.quad(-s,f-1.2,0,-s,r-.4,d,-s,r,d,-s,f+.05,0,Me),i.quad(s,f-1.2,0,s,f+.05,0,s,r,d,s,r-.4,d,Me);for(let S=0;S<n.length-1;S++){const[M,w]=n[S],[E,_]=n[S+1],y=Math.hypot(E-M,_-w),C=Math.atan2(E-M,_-w);i.frame(M,r,w,C);const b=Math.ceil(y/1.2);for(let D=0;D<b;D++){const F=D/b*y,P=(D+1)/b*y;i.box(-s,-.14,F,s,0,P,ie(Fe,.9+D*7%5*.04),void 0,Me)}i.box(-s+.25,-.5,0,-s+.5,-.14,y,Me,null),i.box(s-.5,-.5,0,s-.25,-.14,y,Me,null);const R=Math.max(1,Math.round(y/3.6));for(let D=0;D<=R;D++){const F=D/R*y;for(const P of[-1,1]){const O=P*(s-.12),U=t.yAt(i.wx(O,F),i.wz(O,F));i.cyl(O,U-r-.6,F,.17,.15,r-U+.6+1.1,6,Me,ie(Fe,.8))}i.box(-s,-.78,F-.12,s,-.5,F+.12,Me),i.quad(-s+.1,-2.6,F,s-.1,-.8,F,s-.1,-.6,F,-s+.1,-2.4,F,ie(Me,.9))}for(const D of[-1,1]){const F=D*(s-.12);i.box(F-.05,1.02,0,F+.05,1.1,y,Fe,void 0,Me),i.box(F-.03,.52,0,F+.03,.58,y,Fe,void 0,Me)}i.box(-s,-.14,-s,s,0,.01,Fe,void 0,Me)}const[g,v]=n[n.length-1],[m,p]=n[n.length-2],x=Math.atan2(g-m,v-p);i.frame(g,r,v,x),i.box(-3.2,-.14,0,3.2,0,5.2,ie(Fe,.96),void 0,Me);for(const[S,M]of[[-3.05,.2],[3.05,.2],[-3.05,5],[3.05,5],[0,5]]){const w=t.yAt(i.wx(S,M),i.wz(S,M));i.cyl(S,w-r-.6,M,.19,.17,r-w+.6+(S===0?0:1.1),6,Me,ie(Fe,.8))}i.box(-3.1,1.02,4.9,3.1,1.1,5,Fe,void 0,Me),i.box(-3.1,1.02,0,-3,1.1,5,Fe,void 0,Me),i.box(3,1.02,0,3.1,1.1,5,Fe,void 0,Me),i.cyl(2.6,0,4.5,.07,.05,4.6,5,me),i.blob(2.6,4.75,4.5,.28,.2,.28,6,3,W(16773320),void 0,1.6),i.box(-.35,-3.6,5.22,-.3,.9,5.28,me,null),i.box(.3,-3.6,5.22,.35,.9,5.28,me,null);for(let S=-3.3;S<.6;S+=.42)i.box(-.3,S,5.22,.3,S+.05,5.28,me);return i.frame(),{head:new G(g,r,v),points:n}}function $g(i,t,e,n){const[s,r]=xh(t,e,n,25),a=Math.atan2(s,r);i.frame(e,0,n,a);const o=4.2,l=-8,c=[];for(let g=l;g<=46;g+=3){const v=t.yAt(i.wx(0,g),i.wz(0,g));if(c.push([g,v]),v<-1.6*Ln)break}const h=c[0][1]+.12,d=Math.min(c[c.length-1][1]+.25,-.9*Ln),f=c[c.length-1][0],u=c.length-1;for(let g=0;g<u;g++){const v=l+(f-l)*g/u,m=l+(f-l)*(g+1)/u,p=h+(d-h)*g/u,x=h+(d-h)*(g+1)/u;i.quad(-o,p,v,-o,x,m,o,x,m,o,p,v,g%2?ns:ie(ns,.94));for(const S of[-1,1])i.quad(S*o,p-1.5,v,S*o,x-1.5,m,S*o,x+.15,m,S*o,p+.15,v,ie(ns,.8))}i.frame()}function Jg(i,t,e){const[n,s]=xh(t,e.cx,e.cz,60),r=e.obb;let a=r.heading,o=r.w,l=r.d,c=-1/0;for(let E=0;E<4;E++){const _=r.heading+E*Math.PI/2,y=Math.sin(_)*n+Math.cos(_)*s;y>c&&(c=y,a=_,o=E%2?r.d:r.w,l=E%2?r.w:r.d)}const h=o/2,d=l/2;i.frame(r.cx,e.floorY,r.cz,a);const f=W(13223611),u=W(15394522),g=W(6975604);i.box(-h,-4,-d,h,3.1,d,f,null),i.box(-h,3.1,-d,h,6.1,d,u,null);const v=Math.max(2,Math.floor(o/5));for(let E=0;E<v;E++){const _=-h+(E+.5)/v*o;i.quad(_-1.7,.05,d+.05,_+1.7,.05,d+.05,_+1.7,2.7,d+.05,_-1.7,2.7,d+.05,E%2?is:ss)}i.quad(-h+.6,3.6,d+.05,h-.6,3.6,d+.05,h-.6,5.7,d+.05,-h+.6,5.7,d+.05,Is,.9),i.box(-h-.6,2.95,d,h+.6,3.12,d+3.4,ns,Fe,ie(ns,.8)),i.box(-h-.6,3.12,d+3.32,h+.6,4.15,d+3.4,W(10469580),null);for(const E of[-h-.4,-h/3,h/3,h+.4])i.box(E-.12,-4,d+3,E+.12,2.95,d+3.24,me,null);i.quad(-h-.8,7.5,d+3.8,h+.8,7.5,d+3.8,h+.8,6.2,-d-.6,-h-.8,6.2,-d-.6,g),i.quad(-h,6.1,d,h,6.1,d,h,7.1,d,-h,7.1,d,u),i.quad(h,6.1,d,h,6.1,-d,h,6.3,-d,h,7.1,d,u),i.quad(-h,6.1,-d,-h,6.1,d,-h,7.1,d,-h,6.3,-d,u);const m=h-2.2,p=d-1.8;i.box(m-1.8,6.1,p-1.8,m+1.8,9.2,p+1.8,u,null),i.box(m-1.85,9.2,p-1.85,m+1.85,10.5,p+1.85,Is,null,null,.7),i.box(m-2.3,10.5,p-2.3,m+2.3,10.72,p+2.3,g),i.cyl(m,10.72,p,.06,.04,5.2,5,an),i.quad(m,15.6,p,m+1.9,15.6,p,m+1.9,14.5,p,m,14.5,p,is),i.quad(m,14.5,p,m+1.9,14.5,p,m+1.9,13.4,p,m,13.4,p,ss);for(let E=0;E<4;E++){const _=-h+(E+.5)/4*o;i.quad(_+.9,3.9,-d-.05,_-.9,3.9,-d-.05,_-.9,5.3,-d-.05,_+.9,5.3,-d-.05,Is,E%2)}let x=d+14;for(;x<160&&t.metresAt(r.cx+n*x,r.cz+s*x)>1.75;)x+=3;const S=r.cx+n*x,M=r.cz+s*x,w=Math.atan2(n,s);i.frame(S,t.yAt(S,M),M,w);for(const E of[-1,1]){const _=E*32,y=t.yAt(i.wx(_,0),i.wz(_,0))-t.yAt(S,M);i.cyl(_,y,0,.05,.04,4.4,5,an),i.quad(_,y+4.4,0,_+.95,y+4.4,0,_+.95,y+3.1,0,_,y+3.1,0,is),i.quad(_,y+3.1,0,_+.95,y+3.1,0,_+.95,y+1.8,0,_,y+1.8,0,ss)}for(const[E,_]of[[-1.5,-5.5],[1.5,-5.5],[-1.5,-8.5],[1.5,-8.5]])i.cyl(E,0,_,.04,.04,2.2,4,me);i.tri(-1.7,2.2,-5.3,1.7,2.2,-5.3,0,3,-7,is),i.tri(1.7,2.2,-8.7,-1.7,2.2,-8.7,0,3,-7,is),i.tri(1.7,2.2,-5.3,1.7,2.2,-8.7,0,3,-7,ss),i.tri(-1.7,2.2,-8.7,-1.7,2.2,-5.3,0,3,-7,ss),i.blob(6,.35,-6,.95,.4,2.1,8,3,W(14238751),W(15755818)),i.box(5.6,.3,-7.9,6.4,.95,-7.5,W(2763308));for(let E=0;E<4;E++)i.box(-7+E*.5,.2,-7.2,-6.85+E*.5,.75,-4.6,E%2?ss:W(3116992));return i.frame(),{beach:new G(S,t.yAt(S,M),M),seaward:[n,s]}}function vh(i,t){const e=i.length/2;let n=0;for(let a=0;a<e;a++){const o=(a+1)%e;n+=i[a*2]*i[o*2+1]-i[o*2]*i[a*2+1]}const s=n>0?1:-1,r=[];for(let a=0;a<e;a++){const o=(a+e-1)%e,l=(a+1)%e;let c=i[a*2]-i[o*2],h=i[a*2+1]-i[o*2+1],d=i[l*2]-i[a*2],f=i[l*2+1]-i[a*2+1];const u=Math.hypot(c,h)||1,g=Math.hypot(d,f)||1;c/=u,h/=u,d/=g,f/=g;const v=-h*s,m=c*s;let p=v-f*s,x=m+d*s;const S=Math.hypot(p,x)||1;p/=S,x/=S;const M=t/Math.max(.45,p*v+x*m);r.push(i[a*2]+p*M,i[a*2+1]+x*M)}return r}function Qg(i,t,e){i.frame(0,e.floorY,0,0);const n=W(11111014),s=W(15328470),r=W(9410458);let a=1/0;for(let h=0;h<e.poly.length;h+=2)a=Math.min(a,t.yAt(e.poly[h],e.poly[h+1]));const o=e.poly.length/2;i.walls(e.poly,a-e.floorY-.3,3.2,n),i.walls(e.poly,3.2,6.2,s);const l=vh(e.poly,3.2),c=vh(e.poly,4.4);for(let h=0;h<o;h++){const d=(h+1)%o;i.quad(e.poly[h*2],6.6,e.poly[h*2+1],e.poly[d*2],6.6,e.poly[d*2+1],l[d*2],6.05,l[d*2+1],l[h*2],6.05,l[h*2+1],r)}if(i.walls(e.poly,6.2,6.6,ie(s,.92)),i.walls(l,6.05,7.9,Is,.8),i.cap(l,7.9,ie(r,1.08)),i.walls(c,7.9,8.3,ie(r,.9)),i.cap(c,8.3,r),e.street){const h=e.street;i.frame(h.x,e.floorY,h.z,h.heading),i.quad(.6,.3,.06,h.length-.6,.3,.06,h.length-.6,5.6,.06,.6,5.6,.06,Is,.9),i.box(h.length*.3,3.3,0,h.length*.7,3.5,3.4,W(14263361),void 0,ie(W(14263361),.8)),i.box(h.length*.3+.2,0,3.1,h.length*.3+.4,3.3,3.3,me,null),i.box(h.length*.7-.4,0,3.1,h.length*.7-.2,3.3,3.3,me,null)}i.frame()}function en(i,t,e,n,s,r=Zg){const a=e.length,o=.22,l=s?a:a-1;for(let c=0;c<l;c++){const[h,d]=e[c],[f,u]=e[(c+1)%a];let g=-(u-d),v=f-h;const m=Math.hypot(g,v)||1;g=g/m*n*.5,v=v/m*n*.5;const p=t.yAt(h,d)+o,x=t.yAt(f,u)+o;i.quad(h+g,p,d+v,f+g,x,u+v,f-g,x,u-v,h-g,p,d-v,r)}}function jg(i,t,e,n,s){const r=[];for(let S=0;S<n.length;S+=2)r.push([n[S]/10,n[S+1]/10]);const[a,o]=Vr(n);let l=0,c=0,h=0;for(const[S,M]of r)l+=(S-a)**2,c+=(M-o)**2,h+=(S-a)*(M-o);const d=.5*Math.atan2(2*h,l-c),f=Math.cos(d),u=Math.sin(d);let g=0,v=0;for(const[S,M]of r)g=Math.max(g,Math.abs((S-a)*f+(M-o)*u)),v=Math.max(v,Math.abs(-(S-a)*u+(M-o)*f));g-=5,v-=5;const m=(S,M)=>[a+S*f-M*u,o+S*u+M*f],p=[];for(let S=0;S<72;S++){const M=S/72*Math.PI*2;p.push(m(Math.cos(M)*g,Math.sin(M)*v))}en(t,e,p,.35,!0),en(t,e,[m(-25,-25),m(25,-25),m(25,25),m(-25,25)],.3,!0);const x=S=>Array.from({length:24},(M,w)=>m(Math.cos(w/24*Math.PI*2)*S,Math.sin(w/24*Math.PI*2)*S));en(t,e,x(5),.3,!0),en(t,e,x(1.5),.3,!0);for(const S of[-1,1]){en(t,e,[m(S*g,-3.2),m(S*(g-9),-3.2),m(S*(g-9),3.2),m(S*g,3.2)],.3,!1);const M=[];for(let w=-8;w<=8;w++){const E=w/8*1.05,_=S*(g-50*Math.cos(E)),y=50*Math.sin(E);(_/g)**2+(y/v)**2<1&&M.push(m(_,y))}M.length>2&&en(t,e,M,.3,!1);for(const[w,E]of[[-3.2,9.5],[3.2,9.5],[-9.6,6.2],[9.6,6.2]]){const[_,y]=m(S*g,w);i.frame(_,e.yAt(_,y),y,0),i.cyl(0,0,0,.11,.09,E,6,an),i.cyl(0,0,0,.2,.2,1.6,6,w*w<12?W(2973608):W(12597806))}}if(s)for(const[S,M]of[[-.62,-1],[.62,-1],[-.62,1],[.62,1]]){const[w,E]=m(S*(g+6),M*(v+9));i.frame(w,e.yAt(w,E),E,Math.atan2(a-w,o-E)),i.cyl(0,0,0,.28,.16,24,6,me),i.box(-1.7,24,-.2,1.7,25.3,.2,W(4869972)),i.quad(-1.6,24.1,.22,1.6,24.1,.22,1.6,25.2,.22,-1.6,25.2,.22,W(16774876),2.2)}i.frame()}function t_(i,t,e,n,s){const r=[];for(let M=0;M<n.length;M+=2)r.push([n[M]/10,n[M+1]/10]);if(r.length<4)return;if(s==="bowls"){en(t,e,r,.5,!0,W(15328986));return}const[a,o,l,c]=r,h=Math.hypot(o[0]-a[0],o[1]-a[1])>Math.hypot(l[0]-o[0],l[1]-o[1]),d=h?a:o,f=h?o:l,u=h?l:c,g=h?c:a,v=(M,w)=>{const E=d[0]+(f[0]-d[0])*M,_=d[1]+(f[1]-d[1])*M,y=g[0]+(u[0]-g[0])*M,C=g[1]+(u[1]-g[1])*M;return[E+(y-E)*w,_+(C-_)*w]},m=.14;en(t,e,[v(0,0),v(1,0),v(1,1),v(0,1)],m,!0),en(t,e,[v(0,.125),v(1,.125)],m,!1),en(t,e,[v(0,.875),v(1,.875)],m,!1),en(t,e,[v(.23,.125),v(.23,.875)],m,!1),en(t,e,[v(.77,.125),v(.77,.875)],m,!1),en(t,e,[v(.23,.5),v(.77,.5)],m,!1);const p=v(.5,-.04),x=v(.5,1.04),S=e.yAt(p[0],p[1])+.2;i.frame(0,S,0,0),i.quad(p[0],0,p[1],x[0],0,x[1],x[0],.95,x[1],p[0],.95,p[1],W(2830131)),i.quad(p[0],.95,p[1],x[0],.95,x[1],x[0],1.05,x[1],p[0],1.05,p[1],an);for(const M of[p,x])i.cyl(M[0],0,M[1],.06,.06,1.1,5,me);i.frame()}const Zn=[14826299,15764004,15909424,5025616,3117008,8280002].map(W);function e_(i,t,e,n,s){const[r,a]=Vr(e),o=t.yAt(r,a)+.05,l=s()*Math.PI;i.frame(r,o,a,l);const c=(f,u,g,v)=>{for(const[m,p]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.cyl(f+m,0,u+p,.07,.07,g+2,5,W(8018492));i.box(f-1,g-.1,u-1,f+1,g,u+1,Fe,void 0,Me),i.cyl(f,g+2,u,1.5,0,1,4,v)};c(-2.2,0,1.5,Zn[0]),c(2.2,0,2.1,Zn[4]),i.box(-1.2,1.4,-.35,1.2,1.5,.35,Fe),i.quad(3.2,2.1,-.4,6.4,.15,-.4,6.4,.15,.4,3.2,2.1,.4,Zn[2]),i.quad(-3.2,1.5,.4,-5.6,.15,.4,-5.6,.15,-.4,-3.2,1.5,-.4,Zn[1]);const h=0,d=5.2;for(const f of[-2.2,2.2])i.quad(h+f,0,d-1.1,h+f+.08,0,d-1.1,h+f+.08,2.6,d,h+f,2.6,d,me),i.quad(h+f,0,d+1.1,h+f+.08,0,d+1.1,h+f+.08,2.6,d,h+f,2.6,d,me);i.box(h-2.25,2.55,d-.05,h+2.25,2.65,d+.05,Zn[3]);for(const f of[-1.1,0,1.1])i.box(h+f-.25,.5,d-.1,h+f+.25,.56,d+.1,W(2763308)),i.box(h+f-.24,.56,d-.01,h+f-.22,2.55,d+.01,me,null),i.box(h+f+.22,.56,d-.01,h+f+.24,2.55,d+.01,me,null);if(n){i.cyl(-6.5,0,-5.5,.09,.07,5.2,5,me);for(let f=0;f<6;f++){const u=f/6*Math.PI*2,g=-6.5+Math.cos(u)*3.2,v=-5.5+Math.sin(u)*3.2;i.quad(g-.04,0,v,g+.04,0,v,-6.46,5.1,-5.5,-6.54,5.1,-5.5,W(3104672))}for(let f=0;f<6;f++){const u=-9+f*3.4,g=Zn[f],v=4.6,m=3.3;i.cyl(u,0,-11,.08,.07,v,5,me),i.cyl(u+1.7,0,-7.2,.08,.07,m,5,me),i.tri(u,v,-11,u+3.4,v,-11,u+1.7,m,-7.2,g)}i.cyl(11.399999999999999,0,-11,.08,.07,4.6,5,me),i.cyl(6.5,.3,5.5,1.3,1.3,.12,10,Zn[5],Zn[2]),i.cyl(6.5,0,5.5,.1,.1,1.1,5,me);for(let f=0;f<3;f++)i.blob(9.5+f*1.6,.55,-1.5,.3,.3,.55,5,3,Zn[(f*2+1)%6])}i.frame()}function n_(i,t,e){const n=[];for(let d=0;d<e.length;d+=2)n.push([e[d]/10,e[d+1]/10]);const[s,r]=Vr(e),a=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1])>Math.hypot(n[2][0]-n[1][0],n[2][1]-n[1][1])?[n[0],n[1]]:[n[1],n[2]],o=Math.atan2(a[1][0]-a[0][0],a[1][1]-a[0][1]),l=Math.hypot(a[1][0]-a[0][0],a[1][1]-a[0][1])/2-1;i.frame(s,t.yAt(s,r)+.1,r,o);const c=W(13092286),h=ie(c,.88);for(const d of[-1,1]){const f=d*l,u=[[0,0],[1.4,.35],[2.4,1.1],[3,2]];for(let g=0;g<3;g++){const[v,m]=u[g],[p,x]=u[g+1],S=f-d*(3-v),M=f-d*(3-p);d>0?i.quad(-4,m,S,4,m,S,4,x,M,-4,x,M,g%2?c:h):i.quad(4,m,S,-4,m,S,-4,x,M,4,x,M,g%2?c:h)}i.box(-4,0,Math.min(f,f+d*1.2),4,2,Math.max(f,f+d*1.2),h,c)}i.box(-1.5,0,-1.2,1.5,.45,1.2,h,c),i.quad(-1.5,.45,1.2,1.5,.45,1.2,1.5,0,3,-1.5,0,3,c),i.quad(1.5,.45,-1.2,-1.5,.45,-1.2,-1.5,0,-3,1.5,0,-3,c),i.box(3.2,.45,-2.5,3.28,.5,2.5,me),i.frame()}function i_(i,t){const e=t.obb,n=e.w>=e.d,s=(n?e.w:e.d)/2;i.frame(e.cx,t.floorY,e.cz,e.heading);const r=n?s+1.2:0,a=n?0:s+1.2,o=W(15262418);i.box(r-1.4,-1,a-1.4,r+1.4,t.wallH+4.6,a+1.4,o,null),i.cyl(r,t.wallH+4.6,a,2.1,0,4.2,4,W(5922659)),i.box(r-.07,t.wallH+8.8,a-.07,r+.07,t.wallH+10.6,a+.07,an),i.box(r-.5,t.wallH+9.8,a-.07,r+.5,t.wallH+9.95,a+.07,an),i.frame()}function s_(i,t,e,n){i.frame(e,t.yAt(e,n),n,.4);const s=46;for(let r=0;r<6;r++){const a=r/6*s,o=1.5-r/6*1.1,l=1.5-(r+1)/6*1.1;i.cyl(0,a,0,o,l,s/6,3,r%2?an:is)}i.cyl(0,s,0,.08,.05,5,4,me),i.blob(0,s+5.1,0,.3,.3,.3,5,3,W(16726832),void 0,2.5);for(const[r,a]of[[.3,38],[2.4,35],[4.4,40]])i.cyl(Math.cos(r)*.9,a,Math.sin(r)*.9,.55,.55,.35,8,an,an);i.box(2.5,0,-1.5,5.5,2.6,1.5,W(13619919),W(9080716)),i.frame()}function r_(i,t,e,n,s){const r=s.nearest(e,n,60),a=r?Math.atan2(r.px-e,r.pz-n):0;i.frame(e,t.yAt(e,n)+.1,n,a);const o=W(3116874);for(const[l,c]of[[-6,3.5],[6,3.5],[-6,9.5],[6,9.5]])i.box(l-.2,0,c-.2,l+.2,5,c+.2,an,null);i.box(-8,5,2,8,5.25,11,an,W(14277590),W(15921902),.5),i.box(-8.05,5.25,1.95,8.05,5.9,11.05,o,W(14277590));for(const l of[-4,0,4])i.box(l-1.3,0,6.2,l+1.3,.2,6.8,ns),i.box(l-.4,.2,6.25,l+.4,1.7,6.75,an,o);i.frame()}function a_(i,t,e,n,s){for(let r=0;r<3;r++){const a=e+(s()-.5)*16,o=n+(s()-.5)*16;i.frame(a,t.yAt(a,o)+.05,o,s()*Math.PI),i.box(-1,.7,-.4,1,.78,.4,Fe,void 0,Me),i.box(-1,.4,-.85,1,.46,-.6,Fe,void 0,Me),i.box(-1,.4,.6,1,.46,.85,Fe,void 0,Me),i.box(-.75,0,-.7,-.65,.7,.7,me,null),i.box(.65,0,-.7,.75,.7,.7,me,null)}i.frame()}function o_(i){if(!i.hasDetail)return null;const{town:t,hf:e,roads:n,paths:s}=i,r=new ue,a=qe(4411),o=[12597547,3108687,15921902,3426654,9268810,14266938,10134443].map(W),l=W(7301730),c=W(3103290),h=[W(13115434),W(15254046)],d=t.houses;for(let S=0;S<d.length;S+=Wo){const M=d[S]/4,w=d[S+1]/4;if(d[S+5]===1||!i.isDetail(M,w)||i.isClear(M,w))continue;const E=n.nearest(M,w,45),_=a()<.5?-1:1,y=_*(2.5+a()*2.5),C=Math.floor(a()*o.length),b=a()<.7;if(!E)continue;const R=E.cls<=3?6.4:3.6;if(E.dist<R+3)continue;const D=(M-E.px)/E.dist,F=(w-E.pz)/E.dist,P=-F,O=D,U=Math.atan2(D,F),I=E.px+D*R+P*y,X=E.pz+F*R+O*y;if(!i.isClear(I,X)&&(r.frame(I,e.yAt(I,X),X,U),r.box(-.05,0,-.05,.05,.95,.05,l),r.box(-.17,.95,-.22,.17,1.22,.22,o[C],ie(o[C],.8)),b)){const N=E.px+D*(R-1.1)+P*(y+_*1.5),B=E.pz+F*(R-1.1)+O*(y+_*1.5);r.frame(N,e.yAt(N,B),B,U),h.forEach((H,it)=>{r.box(it*.72-.28,0,-.33,it*.72+.28,.96,.33,c),r.box(it*.72-.3,.96,-.36,it*.72+.3,1.04,.36,H)})}}const f=W(7034692),u=W(5917242),g=W(2829102),v=W(14276303),m=42,p=new ue;for(const S of s){if(S.cls>3||S.flags)continue;const M=S.pts.length/3;let w=m*.4,E=null;for(let _=1;_<M;_++){const y=S.pts[_*3-3],C=S.pts[_*3-1],b=S.pts[_*3],R=S.pts[_*3+2],D=Math.hypot(b-y,R-C);if(w+=D,w<m)continue;w=0;const F=(b-y)/(D||1),P=(R-C)/(D||1),O=S.width/2+2.5,U=b+P*O,I=R-F*O;if(!i.isDetail(U,I)||i.isClear(U,I)||!e.inside(U,I,20)){E=null;continue}const X=e.yAt(U,I);p.frame(U,X,I,Math.atan2(F,P)),p.cyl(0,0,0,.15,.1,9.2,6,f),p.box(-1.15,8.45,-.06,1.15,8.58,.06,u);for(const B of[-.95,0,.95])p.box(B-.04,8.58,-.04,B+.04,8.72,.04,v);const N={x:U,y:X+8.72,z:I,nx:P,nz:-F};if(E&&Math.hypot(N.x-E.x,N.z-E.z)<m*1.8){p.frame();for(const B of[-.95,0,.95]){const H=E.x+E.nx*B,it=E.z+E.nz*B,st=N.x+N.nx*B,q=N.z+N.nz*B,et=(H+st)/2,rt=(it+q)/2,vt=(E.y+N.y)/2-.5;for(const[ot,bt,Wt,Et,Bt,Xt]of[[H,E.y,it,et,vt,rt],[et,vt,rt,st,N.y,q]])p.quad(ot,bt,Wt,Et,Bt,Xt,Et,Bt+.035,Xt,ot,bt+.035,Wt,g),p.quad(ot,bt,Wt,Et,Bt,Xt,Et+N.nx*.035,Bt,Xt+N.nz*.035,ot+N.nx*.035,bt,Wt+N.nz*.035,g)}}E=N}}if(!r.vertexCount&&!p.vertexCount)return null;const x=new Qt(r.build(),ji());if(x.castShadow=!0,x.receiveShadow=!0,x.name="street-detail",p.vertexCount){const S=new Qt(p.build(),ji());S.castShadow=!1,S.receiveShadow=!0,S.name="power-poles",x.add(S)}return x}function l_(i){const{town:t,hf:e,paths:n}=i,s=120,r=new Map,a=t.houses;for(let R=0;R<a.length;R+=Wo){const D=Math.floor(a[R]/4/s)*4096+Math.floor(a[R+1]/4/s)+8390656;r.set(D,(r.get(D)??0)+1)}const[o,l]=rn(t.meta,-38.63385,145.7285),c=(R,D)=>(r.get(Math.floor(R/s)*4096+Math.floor(D/s)+2048*4097)??0)>=4||Math.hypot(R-o,D-l)<380,h=[];for(const R of n){if(R.cls>2||R.flags)continue;const D=R.cls===0?48:58,F=R.pts.length/3;let P=D*.5,O=1;for(let U=1;U<F;U++){const I=R.pts[U*3-3],X=R.pts[U*3-1],N=R.pts[U*3],B=R.pts[U*3+2],H=Math.hypot(N-I,B-X);if(P+=H,P<D)continue;P=0,O=-O;const it=(N-I)/(H||1),st=(B-X)/(H||1),q=R.width/2+1.6,et=N-st*q*O,rt=B+it*q*O;!c(et,rt)||!e.inside(et,rt,20)||i.isClear(et,rt)||h.push(et,e.yAt(et,rt),rt,Math.atan2(st*O,-it*O))}}const d=new ue,f=W(9278358);d.cyl(0,0,0,.11,.07,8.2,5,f),d.box(-.05,8.1,0,.05,8.22,2.2,f),d.box(-.22,8,1.7,.22,8.14,2.5,W(5922659)),d.quad(-.2,7.99,2.48,.2,7.99,2.48,.2,7.99,1.72,-.2,7.99,1.72,W(16773320),3);const u=h.length/4,g=new Ze(d.build(),ji(),u),v=document.createElement("canvas");v.width=v.height=64;const m=v.getContext("2d"),p=m.createRadialGradient(32,32,0,32,32,32);p.addColorStop(0,"rgba(255,214,150,0.85)"),p.addColorStop(.45,"rgba(255,196,120,0.32)"),p.addColorStop(1,"rgba(255,180,100,0)"),m.fillStyle=p,m.fillRect(0,0,64,64);const x=new So(v);x.colorSpace=ye;const S=new ci(34,34);S.rotateX(-Math.PI/2);const M=new Wn({map:x,transparent:!0,opacity:0,blending:$r,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),w=new Ze(S,M,u);w.renderOrder=3;const E=new Kt,_=new mn,y=new G(0,1,0),C=new G(1,1,1),b=new G;for(let R=0;R<u;R++){const D=h[R*4],F=h[R*4+1],P=h[R*4+2],O=h[R*4+3];_.setFromAxisAngle(y,O),g.setMatrixAt(R,E.compose(b.set(D,F,P),_,C));const U=D+Math.sin(O)*2.1,I=P+Math.cos(O)*2.1;w.setMatrixAt(R,E.compose(b.set(U,e.yAt(U,I)+.5,I),_.identity(),C))}return g.castShadow=!1,g.computeBoundingSphere(),w.computeBoundingSphere(),w.onBeforeRender=()=>{M.opacity=Nr.value*.9},w.visible=!0,{lights:g,pools:w,poolMat:M}}function c_(i){const{town:t,hf:e,footprints:n,roads:s}=i,r=new Qe;r.name="landmarks";const a=new ue,o=new ue,l=qe(20261111),c={group:r,nightMaterials:[]};t.piers[0]&&(c.jetty=Kg(a,e,t.piers[0]));for(const[y,C]of[[-38.63578,145.73393],[-38.63595,145.73085]]){const[b,R]=rn(t.meta,y,C);$g(a,e,b,R)}const h=n.find(y=>y.name==="Inverloch Surf Life Saving Club");h&&(c.surf=Jg(a,e,h));const d=n.find(y=>y.name==="The Hub");d&&Qg(a,e,d);for(const y of n)y.kind==="church"&&i_(a,y);let f=0;for(const y of t.pitches)y.s==="australian_football"?jg(a,o,e,y.p,f++===0):y.s==="tennis"||y.s==="bowls"?t_(a,o,e,y.p,y.s):y.s==="skateboard"&&n_(a,e,y.p);const[u,g]=rn(t.meta,-38.63529,145.72876);for(const y of t.playgrounds){const[C,b]=Vr(y);e_(a,e,y,Math.hypot(C-u,b-g)<60,l)}const[v,m]=rn(t.meta,-38.62462,145.71011);s_(a,e,v,m);const[p,x]=rn(t.meta,-38.63161,145.72943);r_(a,e,p,x,s);for(const[y,C]of[[-38.6358,145.72885],[-38.63447,145.72923],[-38.63545,145.72875]]){const[b,R]=rn(t.meta,y,C);a_(a,e,b,R,l)}const S=new Qt(a.build(),ji());S.castShadow=!0,S.receiveShadow=!0,r.add(S);const M=o.build();M.deleteAttribute("glow");const w=new Qt(M,Ur(new Wn({vertexColors:!0,side:ze,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})));r.add(w);const E=o_(i);E&&r.add(E);const _=l_(i);return r.add(_.lights,_.pools),c.nightMaterials.push(_.poolMat),c}const Ns=[16053490,16053490,16053490,13225168,10725291,5593438,2040100,2838410,11020586,2054728,14266938,8368595],Mh=[15223869,3113154,15909424,3843690,16777215,9329589,15764004,2042422,15231654,4899008],Kn=[14826299,15764004,15909424,3715691,3117008,13651872,3720896,16053490].map(W);function Sh(){const i=new ue,t=W(16777215),e=W(1713198),n=W(1381655);i.box(-.88,.3,-2.1,.88,.95,2.1,t,void 0,n),i.box(-.8,.95,-1.35,.8,1.48,.7,e,t);for(const s of[-.9,.68])for(const r of[-1.55,1])i.box(s,0,r,s+.22,.62,r+.62,n);for(const s of[-.75,.45])i.quad(s,.6,2.11,s+.3,.6,2.11,s+.3,.8,2.11,s,.8,2.11,W(16776166),2.2);return i.build()}function yh(i){const t=new ue,e=new ue,n=W(16777215),s=W(1845814),r=W(1315862),a=W(11843772),o=W(2500651),l=(p,x,S,M,w)=>{let E=0,_=0;for(const[y,C]of x)E+=y,_+=C;E/=x.length,_/=x.length;for(let y=0;y<x.length;y++){const[C,b]=x[y],[R,D]=x[(y+1)%x.length];p.quad(S,b,C,M,b,C,M,D,R,S,D,R,w),p.tri(S,_,E,S,D,R,S,b,C,w),p.tri(M,_,E,M,b,C,M,D,R,w)}},c=[{lower:[[-2.12,.34],[2.1,.34],[2.18,.62],[2.02,.84],[1.02,.98],[-1.4,.98],[-2.08,.9],[-2.18,.6]],cabin:[[-1.4,.98],[1.02,.98],[.4,1.44],[-.9,1.44]]},{lower:[[-2.12,.36],[2.1,.36],[2.18,.68],[2,.92],[1.05,1.06],[-2.1,1.06],[-2.18,.66]],cabin:[[-2.05,1.06],[1.05,1.06],[.5,1.62],[-1.9,1.62]]},{lower:[[-2.3,.38],[2.15,.38],[2.22,.7],[2.05,.94],[1.1,1.06],[-.35,1.06],[-.4,.98],[-2.3,.98]],cabin:[[-.35,1.06],[1.1,1.06],[.55,1.58],[-.3,1.58]]}],{lower:h,cabin:d}=c[i%c.length],f=Math.max(...h.map(p=>p[0])),u=Math.min(...h.map(p=>p[0])),g=d[2][1];l(t,h,-.88,.88,n),l(e,d,-.8,.8,s),t.box(-.82,g,d[3][0]-.04,.82,g+.05,d[2][0]+.04,n);for(const p of[-.82,.78])for(const[x,S]of[[d[0],d[3]],[d[1],d[2]]])t.quad(p,x[1],x[0]-.05,p+.04,x[1],x[0]+.05,p+.04,S[1],S[0]+.05,p,S[1],S[0]-.05,n);e.box(-.84,.22,u+.2,.84,.36,f-.2,o,null);const v=.34,m=10;for(const p of[-1,1])for(const x of[-1.35,1.38]){const S=p*.66,M=p*.9;for(let w=0;w<m;w++){const E=w/m*Math.PI*2,_=(w+1)/m*Math.PI*2,y=v+Math.sin(E)*v,C=x+Math.cos(E)*v,b=v+Math.sin(_)*v,R=x+Math.cos(_)*v;e.quad(S,y,C,M,y,C,M,b,R,S,b,R,r),e.tri(M,v,x,M,y,C,M,b,R,r),e.tri(M+p*.012,v,x,M+p*.012,v+Math.sin(E)*v*.55,x+Math.cos(E)*v*.55,M+p*.012,v+Math.sin(_)*v*.55,x+Math.cos(_)*v*.55,a)}}for(const p of[-.78,.46])e.quad(p,.6,f+.01,p+.32,.6,f+.01,p+.32,.76,f+.01,p,.76,f+.01,W(16776166),2.2),e.quad(p,.64,u-.01,p+.32,.64,u-.01,p+.32,.8,u-.01,p,.8,u-.01,W(11736604),.9);for(const p of[f+.012,u-.012])e.quad(-.24,.42,p,.24,.42,p,.24,.54,p,-.24,.54,p,W(15921902));return{body:t.build(),trim:e.build()}}function Wr(i,t,e,n,s,r){const a=-t/2,o=t*.12,l=t/2,c=e/2,h=c*.5,d=ie(s,.72);for(const u of[-1,1])u>0?(i.quad(h,0,a,c*.88,n,a,c,n,o,h,0,o,s),i.quad(h,0,o,c,n,o,0,n*1.12,l,0,.1,l*.86,s)):(i.quad(-h,0,o,-c,n,o,-c*.88,n,a,-h,0,a,s),i.quad(0,.1,l*.86,0,n*1.12,l,-c,n,o,-h,0,o,s));i.quad(-h,0,a,-c*.88,n,a,c*.88,n,a,h,0,a,d),i.quad(-h,0,a,h,0,a,h,0,o,-h,0,o,d),i.tri(-h,0,o,h,0,o,0,.1,l*.86,d);const f=n*.8;i.quad(-c*.84,f,a+.05,c*.84,f,a+.05,c*.95,f,o,-c*.95,f,o,r),i.tri(-c*.95,f,o,c*.95,f,o,0,f,l*.95,r)}function h_(i,t){const e=new ue,n=W(16119280);if(i===0)Wr(e,4.6,1.9,.75,t()<.5?W(12962767):Kn[Math.floor(t()*6)],W(10133668)),e.box(-.2,.55,-2.65,.2,1.25,-2.25,W(1974822)),e.box(-.75,.6,-.9,.75,.72,-.5,W(9138002)),e.box(-.75,.6,.4,.75,.72,.8,W(9138002));else if(i===1){const s=Kn[Math.floor(t()*Kn.length)];Wr(e,7.4,2.7,1.25,n,W(15131350)),e.box(-1.37,.72,-3.7,1.37,.9,3,s,null),e.box(-1.05,1,-1.2,1.05,2.25,1.9,n,W(15329248)),e.quad(-1,1.45,1.92,1,1.45,1.92,.9,2.2,1.92,-.9,2.2,1.92,W(2240572),.4),e.box(-1.06,1.5,-.9,-1.05,2.1,1.6,W(2240572),null),e.box(1.05,1.5,-.9,1.06,2.1,1.6,W(2240572),null),e.box(-.9,2.25,-1,.9,2.33,1.2,n),e.cyl(0,2.33,-.6,.03,.02,1.6,4,W(9278358))}else Wr(e,9,2.8,1.3,t()<.6?n:W(2377070),W(14208952)),e.box(-.85,1.05,-1.6,.85,1.55,1.6,n,W(15329248)),e.cyl(0,1.05,.9,.08,.05,11.5,5,W(14014682)),e.box(-.06,2.45,-3,.06,2.57,.9,W(14014682)),e.blob(0,2.72,-1.05,.17,.17,1.9,5,3,W(3104666)),e.quad(-.01,12.4,.9,.01,12.4,.9,.01,1.4,4.4,-.01,1.4,4.4,W(10133154));return e.build()}function u_(i){const t=new ue;return Wr(t,4.2,1.5,.55,W(16119280),W(14736588)),t.cyl(0,.45,.5,.04,.03,6,4,W(14014682)),t.tri(.02,6.3,.5,.02,1.1,.45,.6,1.2,-2,i),t.tri(.02,4.6,.6,.3,1,1.9,.02,1,.6,W(16250866)),t.blob(.35,.95,-.9,.22,.4,.22,5,3,W(14238767)),t.build()}function d_(i,t){const e=new ue,n=8,s=9,r=2.6;for(let a=0;a<n;a++){const o=-1.15+a/n*2.3,l=-1.15+(a+1)/n*2.3,c=Math.sin(o)*s*.5,h=Math.cos(o)*s*.42,d=Math.sin(l)*s*.5,f=Math.cos(l)*s*.42,u=a===0||a===n-1||a===3||a===4?t:i;e.quad(c,h,-r/2,d,f,-r/2,d,f,r/2,c,h,r/2,u)}return e.build()}function f_(i,t){const e=new ue;return e.box(-.22,0,-.75,.22,.06,.75,i),e.blob(-.25,.75,0,.2,.62,.22,5,3,t),e.blob(-.42,1.48,0,.13,.14,.13,5,3,W(14264711)),e.build()}function p_(i){const t=new ue;return t.blob(0,.02,0,.27,.05,1.05,6,2,i),t.blob(0,.42,-.1,.2,.4,.18,5,3,W(1976112)),t.blob(0,.9,-.1,.12,.13,.12,5,3,W(14264711)),t.build()}function m_(i){const t=new Map;for(const r of i){if(r.cls>1||!r.name||r.flags)continue;const a=t.get(r.name)??[];a.push(r),t.set(r.name,a)}const e=[],n=(r,a)=>a?[r[r.length-3],r[r.length-1]]:[r[0],r[2]],s=r=>{const a=new Float32Array(r.length);for(let o=0;o<r.length/3;o++)a.set(r.subarray(o*3,o*3+3),r.length-3-o*3);return a};for(const r of t.values()){const a=r.map(l=>l.pts),o=r[0].width;for(;a.length;){let l=Array.from(a.pop()),c=!0;for(;c;){c=!1;for(let u=0;u<a.length;u++){const g=a[u],v=[l[l.length-3],l[l.length-1]],m=[l[0],l[2]],p=(M,w)=>Math.hypot(M[0]-w[0],M[1]-w[1])<2.5;let x=null,S=!0;if(p(v,n(g,!1))?x=g:p(v,n(g,!0))?x=s(g):p(m,n(g,!0))?(x=g,S=!1):p(m,n(g,!1))&&(x=s(g),S=!1),!!x){l=S?l.concat(Array.from(x.subarray(3))):Array.from(x.subarray(0,x.length-3)).concat(l),a.splice(u,1),c=!0;break}}}const h=new Float32Array(l),d=h.length/3,f=new Float32Array(d);for(let u=1;u<d;u++)f[u]=f[u-1]+Math.hypot(h[u*3]-h[u*3-3],h[u*3+2]-h[u*3-1]);f[d-1]>380&&e.push({pts:h,cum:f,length:f[d-1],width:o})}}return e}class g_{constructor(t,e){at(this,"group",new Qe);at(this,"afloat",new Qe);at(this,"boats",[]);at(this,"dinghies",[]);at(this,"kites",[]);at(this,"kiteLines");at(this,"surfers",[]);at(this,"traffic");at(this,"trafficTrim");at(this,"cars",[]);at(this,"parkedAt",new Map);at(this,"parkedSets",[]);at(this,"drivenAt",new Map);at(this,"drivenSets",[]);at(this,"carMat");at(this,"tmpE",new _n);at(this,"nothing",new Kt().makeScale(0,0,0));at(this,"gulls");at(this,"gullState",[]);at(this,"tmpM",new Kt);at(this,"tmpQ",new mn);at(this,"tmpP",new G);at(this,"up",new G(0,1,0));at(this,"one",new G(1,1,1));this.ctx=t,this.group.name="life",this.group.add(this.afloat);const n=ji();this.addParkedCars(n),this.addTraffic(n),this.addBoats(n,e),this.addKites(n),this.addSurfers(n,e),this.addPeople(e),this.addGulls(e),this.update(0,0)}setTide(t){this.afloat.position.y=t}sit(t,e,n,s){const r=this.ctx.hf,a=Math.sin(n),o=Math.cos(n),l=r.yAt(t+a*1.3,e+o*1.3),c=r.yAt(t-a*1.3,e-o*1.3),h=r.yAt(t-o*.8,e+a*.8),d=r.yAt(t+o*.8,e-a*.8);return this.tmpQ.setFromEuler(this.tmpE.set(-Math.atan2(l-c,2.6),n,Math.atan2(d-h,1.6),"YXZ")),this.tmpM.compose(this.tmpP.set(t,(l+c+h+d)/4+s,e),this.tmpQ,this.one)}carShapes(t){return t?yh(t-1):{body:Sh(),trim:void 0}}addParkedCars(t){const{town:e,hf:n,paths:s}=this.ctx,r=e.cars,a=r.length/ts;this.carMat=t;const o=new Rt,l=[[],[],[],[]],c=new Set,h=(u,g)=>`${Math.round(u/7)}_${Math.round(g/7)}`;for(let u=0;u<a;u++){const g=r[u*ts]/4,v=r[u*ts+1]/4;if(this.ctx.isClear(g,v)||!this.ctx.isDetail(g,v)&&this.ctx.roads.nearest(g,v,5.5))continue;const m=this.ctx.hasDetail?1+(r[u*ts+3]+u)%3:0;l[m].push({x:g,z:v,heading:r[u*ts+2]/10*(Math.PI/180),colour:(r[u*ts+3]*7+u)%Ns.length}),c.add(h(g,v))}const d=qe(911);let f=0;for(const u of s){if(f>=1100||u.width<3.4||u.width>12)continue;const g=u.pts.length/3;let v=20+d()*60;for(let m=1;m<g;m++){const p=u.pts[(m-1)*3],x=u.pts[(m-1)*3+2],S=u.pts[m*3],M=u.pts[m*3+2],w=Math.hypot(S-p,M-x);if(v-=w,v>0||w<.01)continue;v=28+d()*70;const E=d()<.5?1:-1,_=(S-p)/w,y=(M-x)/w,C=Math.max(u.width/2-.55,1.5),b=S+y*C*E,R=M-_*C*E,D=Math.floor(d()*Ns.length),F=Math.floor(d()*3);if(n.metresAt(b,R)<.6||!n.inside(b,R,30)||this.ctx.isClear(b,R))continue;let P=!0;for(let O=-1;O<=1&&P;O++)for(let U=-1;U<=1;U++)if(c.has(`${Math.round(b/7)+O}_${Math.round(R/7)+U}`)){P=!1;break}P&&(c.add(h(b,R)),l[this.ctx.isDetail(b,R)?1+F:0].push({x:b,z:R,heading:Math.atan2(_*-E,y*-E),colour:D}),f++)}}l.forEach((u,g)=>{if(!u.length)return;const v=this.carShapes(g),m=new Ze(v.body,t,u.length),p=v.trim?new Ze(v.trim,t,u.length):void 0;u.forEach((x,S)=>{this.sit(x.x,x.z,x.heading,.3),m.setMatrixAt(S,this.tmpM),p==null||p.setMatrixAt(S,this.tmpM),m.setColorAt(S,o.set(Ns[x.colour])),this.parkedAt.set(`${Math.round(x.x*4)}_${Math.round(x.z*4)}`,{set:g,k:S,x:x.x,z:x.z,heading:x.heading})});for(const x of[m,p])x&&(x.castShadow=!0,x.computeBoundingSphere(),this.group.add(x));this.parkedSets[g]={body:m,trim:p,shape:g}})}addCars(t){if(!this.carMat||!t.length)return;const e=new Rt,n=[[],[],[],[]];for(const s of t)n[this.ctx.hasDetail?1+(s.kind??0)%3:0].push(s);n.forEach((s,r)=>{if(!s.length)return;const a=this.carShapes(r),o=this.parkedSets.length,l=new Ze(a.body,this.carMat,s.length),c=a.trim?new Ze(a.trim,this.carMat,s.length):void 0;s.forEach((h,d)=>{this.sit(h.x,h.z,h.heading,.3),l.setMatrixAt(d,this.tmpM),c==null||c.setMatrixAt(d,this.tmpM),l.setColorAt(d,e.set(h.colour)),this.parkedAt.set(`${Math.round(h.x*4)}_${Math.round(h.z*4)}`,{set:o,k:d,x:h.x,z:h.z,heading:h.heading})});for(const h of[l,c])h&&(h.castShadow=!0,h.computeBoundingSphere(),this.group.add(h));this.parkedSets.push({body:l,trim:c,shape:r})})}nearestCar(t,e,n){let s=null;for(const[r,a]of this.parkedAt){const o=this.drivenAt.get(r)??a,l=Math.hypot(o.x-t,o.z-e);l<(s?s.distance:n)&&(s={id:[a.x,a.z],x:o.x,z:o.z,heading:o.heading,distance:l})}return this.cars.forEach((r,a)=>{const o=this.drivenAt.get(`t${a}`)??r,l=Math.hypot(o.x-t,o.z-e);l<(s?s.distance:n)&&(s={id:[9e5+a,0],x:o.x,z:o.z,heading:o.heading,distance:l})}),s}driveCar(t,e,n,s,r,a,o=0,l=0){const c=t>=9e5?this.cars[t-9e5]:void 0,h=c?`t${t-9e5}`:`${Math.round(t*4)}_${Math.round(e*4)}`,d=c?void 0:this.parkedAt.get(h);if(!d&&!c||!this.carMat)return!1;let f=this.drivenAt.get(h);if(!f){if(this.drivenAt.size>=12)return!1;const g=d?this.parkedSets[d.set].shape:this.trafficTrim?1:0;let v=this.drivenSets[g];if(!v){const p=this.carShapes(g);v=this.drivenSets[g]={body:new Ze(p.body,this.carMat,12),trim:p.trim?new Ze(p.trim,this.carMat,12):void 0,n:0};for(const x of[v.body,v.trim])x&&(x.count=0,x.frustumCulled=!1,x.castShadow=!0,this.group.add(x))}f={set:g,k:v.n++,x:n,y:s,z:r,heading:a},this.drivenAt.set(h,f),v.body.count=v.n,v.trim&&(v.trim.count=v.n);const m=new Rt;if(d){const p=this.parkedSets[d.set];p.body.getColorAt(d.k,m);for(const x of[p.body,p.trim])x&&(x.setMatrixAt(d.k,this.nothing),x.instanceMatrix.needsUpdate=!0)}else this.traffic.getColorAt(t-9e5,m),c.gone=!0;v.body.setColorAt(f.k,m),v.body.instanceColor.needsUpdate=!0}f.x=n,f.y=s,f.z=r,f.heading=a;const u=this.drivenSets[f.set];return this.tmpQ.setFromEuler(this.tmpE.set(-o,a,l,"YXZ")),this.tmpM.compose(this.tmpP.set(n,s+.25,r),this.tmpQ,this.one),u.body.setMatrixAt(f.k,this.tmpM),u.body.instanceMatrix.needsUpdate=!0,u.trim&&(u.trim.setMatrixAt(f.k,this.tmpM),u.trim.instanceMatrix.needsUpdate=!0),!0}addTraffic(t){const e=m_(this.ctx.paths);if(!e.length)return;const n=e.reduce((c,h)=>c+h.length,0),s=Math.min(82,Math.round(n/160)),r=qe(77),a=this.ctx.hasDetail?yh(0):null,o=this.traffic=new Ze(a?a.body:Sh(),t,s);if(o.instanceMatrix.setUsage(Zs),o.frustumCulled=!1,a){const c=this.trafficTrim=new Ze(a.trim,t,s);c.instanceMatrix.setUsage(Zs),c.frustumCulled=!1,c.castShadow=!0,this.group.add(c)}const l=new Rt;for(let c=0;c<s;c++){let h=r()*n,d=e[0];for(const f of e)if((h-=f.length)<=0){d=f;break}this.cars.push({route:d,s:r()*d.length,dir:r()<.5?1:-1,speed:9+r()*6,x:0,z:0,heading:0}),o.setColorAt(c,l.set(Ns[Math.floor(r()*Ns.length)]))}o.castShadow=!0,this.group.add(o)}addBoats(t,e){var c;const{hf:n}=this.ctx,s=qe(451),r=((c=e.jetty)==null?void 0:c.head)??new G(380,0,-117),a=[];for(let h=0;h<4e3&&a.length<16;h++){const d=s()*Math.PI*2,f=55+s()*420,u=r.x+Math.cos(d)*f,g=r.z+Math.sin(d)*f;n.metresAt(u,g)>-1.9||!n.inside(u,g,40)||a.some(([v,m])=>Math.hypot(v-u,m-g)<26)||a.push([u,g])}const o=2.2+s()*.4;a.forEach(([h,d],f)=>{const u=f%5===0?2:f%2?0:1,g=new Qt(h_(u,s),t);g.position.set(h,0,d),g.rotation.y=o+(s()-.5)*.5,g.castShadow=!0,this.afloat.add(g),this.boats.push({obj:g,phase:s()*6.28,y:u===0?-.22:-.42})});const l=[W(16250866),W(15222589),W(3117008),W(15909424)];for(let h=0;h<600&&this.dinghies.length<4;h++){const d=s()*Math.PI*2,f=150+s()*900,u=r.x+Math.cos(d)*f,g=r.z+160+Math.sin(d)*f*.5,v=45+s()*70,m=30+s()*40;let p=n.inside(u,g,160);for(let S=0;S<12&&p;S++){const M=S/12*Math.PI*2;n.metresAt(u+Math.cos(M)*v,g+Math.sin(M)*m)>-1.5&&(p=!1)}if(!p||this.dinghies.some(S=>Math.hypot(S.cx-u,S.cz-g)<170))continue;const x=new Qt(u_(l[this.dinghies.length%l.length]),t);x.castShadow=!0,this.afloat.add(x),this.dinghies.push({obj:x,cx:u,cz:g,rx:v,rz:m,phase:s()*6.28,speed:(2.2+s())/Math.max(v,m)})}}addKites(t){const{hf:e,town:n}=this.ctx,s=qe(990),[r,a]=rn(n.meta,-38.6385,145.714),[o,l]=rn(n.meta,-38.645,145.731),c=[];for(let f=0;f<3e3&&c.length<6;f++){const u=r+s()*(o-r),g=a+s()*(l-a);e.metresAt(u,g)>-1.6||c.some(v=>Math.hypot(v.x-u,v.z-g)<110)||c.push(new G(u,0,g))}const h=new Float32Array(c.length*12);c.forEach((f,u)=>{let g=85;for(;g>15&&(e.metresAt(f.x+.65*g,f.z+.76*g)>-1.2||e.metresAt(f.x-.65*g,f.z-.76*g)>-1.2);)g-=10;const v=Kn[Math.floor(s()*7)],m=Kn[Math.floor(s()*7)],p=new Qt(d_(v,m===v?Kn[7]:m),t),x=new Qt(f_(Kn[Math.floor(s()*7)],W(1976112)),t);p.castShadow=!0,this.afloat.add(p,x),this.kites.push({base:f,reach:g,phase:s()*6.28,speed:.12+s()*.06,kite:p,rider:x})});const d=new we;d.setAttribute("position",new be(h,3).setUsage(Zs)),this.kiteLines=new dd(d,Ur(new tc({color:15921906,transparent:!0,opacity:.7}))),this.kiteLines.frustumCulled=!1,this.afloat.add(this.kiteLines)}addSurfers(t,e){if(!e.surf)return;const{hf:n}=this.ctx,s=qe(31),[r,a]=e.surf.seaward,o=e.surf.beach;let l=20;for(;l<420&&n.metresAt(o.x+r*l,o.z+a*l)>-2;)l+=5;for(let c=0;c<9;c++){const h=(c-4)*13+(s()-.5)*8,d=l+(s()-.5)*30,f=o.x+r*d-a*h,u=o.z+a*d+r*h,g=new Qt(p_(Kn[Math.floor(s()*Kn.length)]),t);g.position.set(f,0,u),g.rotation.y=Math.atan2(r,a)+(s()-.5)*.8,this.afloat.add(g),this.surfers.push({obj:g,phase:s()*6.28})}}addPeople(t){const{hf:e,town:n,paths:s,roads:r,footprints:a}=this.ctx,o=qe(2026),l=[],c=[],h=(U,I)=>a.some(X=>{if(Math.hypot(U-X.cx,I-X.cz)>Math.max(X.obb.w,X.obb.d))return!1;let N=!1;for(let B=0,H=X.poly.length-2;B<X.poly.length;H=B,B+=2){const it=X.poly[B],st=X.poly[B+1],q=X.poly[H],et=X.poly[H+1];st>I!=et>I&&U<(q-it)*(I-st)/(et-st)+it&&(N=!N)}return N}),d=(U,I)=>!r.nearest(U,I,6.4)&&!h(U,I),f=(U,I,X,N,B,H,it=0)=>{for(let st=0,q=0;st<N*40&&q<N;st++){const et=o()*Math.PI*2,rt=Math.sqrt(o())*X,vt=U+Math.cos(et)*rt,ot=I+Math.sin(et)*rt,bt=e.metresAt(vt,ot);bt<B||bt>H||!d(vt,ot)||(l.push(vt,e.yAt(vt,ot),ot),o()<it&&c.push(vt+1.2,e.yAt(vt+1.2,ot),ot+.6),q++)}};t.surf&&f(t.surf.beach.x,t.surf.beach.z,130,60,1.5,3,.32);const[u,g]=rn(n.meta,-38.63575,145.729);f(u,g,120,34,1.5,2.4,.3);const[v,m]=rn(n.meta,-38.6356,145.7337);f(v,m,110,26,1.5,2.6,.2);const[p,x]=rn(n.meta,-38.63194,145.72681);f(p,x,55,14,0,99);const[S,M]=rn(n.meta,-38.63385,145.7285);for(const U of s){if(U.cls>3||U.flags)continue;const I=U.pts.length/3;for(let X=1;X<I;X++){const N=U.pts[X*3],B=U.pts[X*3+2];if(Math.hypot(N-S,B-M)>300||o()>.42||this.ctx.isClear(N,B))continue;const H=N-U.pts[X*3-3],it=B-U.pts[X*3-1],st=Math.hypot(H,it)||1,q=o()<.5?1:-1,et=U.width/2+2.3+o()*1,rt=N-it/st*et*q,vt=B+H/st*et*q;d(rt,vt)&&l.push(rt,e.yAt(rt,vt),vt)}}if(t.jetty){const U=t.jetty.points;for(let I=0;I<U.length-1;I++)for(let X=0;X<3;X++){const N=o();l.push(U[I][0]+(U[I+1][0]-U[I][0])*N+(o()-.5)*2,qo,U[I][1]+(U[I+1][1]-U[I][1])*N+(o()-.5)*2)}}const w=l.length/3,E=new ue;E.cyl(0,0,0,.17,.22,.85,5,W(2765632)),E.cyl(0,.85,0,.24,.2,.6,5,W(16777215),W(16777215));const _=new ue;_.blob(0,1.6,0,.14,.15,.14,5,3,W(14264711));const y=new _c({vertexColors:!0}),C=U=>(U.deleteAttribute("glow"),U),b=new Ze(C(E.build()),y,w),R=new Ze(C(_.build()),y,w),D=new Rt,F=[16777215,15255976,12159590,9068354];for(let U=0;U<w;U++){const I=.92+o()*.2;this.tmpQ.setFromAxisAngle(this.up,o()*6.28),this.tmpM.compose(this.tmpP.set(l[U*3],l[U*3+1],l[U*3+2]),this.tmpQ,new G(I,I,I)),b.setMatrixAt(U,this.tmpM),R.setMatrixAt(U,this.tmpM),b.setColorAt(U,D.set(Mh[Math.floor(o()*Mh.length)])),R.setColorAt(U,D.set(F[Math.floor(o()*F.length)]))}b.computeBoundingSphere(),R.computeBoundingSphere(),this.group.add(b,R);const P=new ue;P.cyl(0,0,0,.03,.03,2,4,W(14277081)),P.cyl(0,1.75,0,1.25,0,.5,8,W(16777215));const O=new Ze(C(P.build()),y,c.length/3);for(let U=0;U<c.length/3;U++)this.tmpQ.setFromAxisAngle(new G(1,0,0),(o()-.5)*.3),O.setMatrixAt(U,this.tmpM.compose(this.tmpP.set(c[U*3],c[U*3+1],c[U*3+2]),this.tmpQ,this.one)),O.setColorAt(U,D.set([14826299,3117008,15909424,3715691,15764004,16053490][Math.floor(o()*6)]));O.castShadow=!0,O.computeBoundingSphere(),this.group.add(O)}addGulls(t){if(!t.jetty)return;const e=qe(8),n=16;for(let r=0;r<n;r++)this.gullState.push({cx:t.jetty.head.x+(e()-.5)*90,cz:t.jetty.head.z+(e()-.5)*90,r:18+e()*55,h:qo+6+e()*16,w:(.25+e()*.3)*(e()<.5?1:-1),phase:e()*6.28});const s=new we;s.setAttribute("position",new be(new Float32Array(n*18),3).setUsage(Zs)),this.gulls=new Qt(s,Ur(new Wn({color:16185074,side:ze}))),this.gulls.frustumCulled=!1,this.group.add(this.gulls)}update(t,e){for(const n of this.boats)n.obj.rotation.z=Math.sin(e*.9+n.phase)*.04,n.obj.rotation.x=Math.sin(e*.7+n.phase*1.7)*.025,n.obj.position.y=n.y+Math.sin(e*1.1+n.phase)*.06;for(const n of this.dinghies){const s=n.phase+e*n.speed;n.obj.position.set(n.cx+Math.cos(s)*n.rx,-.15,n.cz+Math.sin(s)*n.rz),n.obj.rotation.y=Math.atan2(-Math.sin(s)*n.rx,Math.cos(s)*n.rz),n.obj.rotation.z=.12+Math.sin(e*.8+n.phase)*.04}for(const n of this.surfers)n.obj.position.y=-.05+Math.sin(e*.9+n.phase)*.22;if(this.kiteLines){const n=this.kiteLines.geometry.getAttribute("position");this.kites.forEach((s,r)=>{const a=Math.sin(e*s.speed*6.28+s.phase),o=Math.cos(e*s.speed*6.28+s.phase)>=0?1:-1,l=s.base.x+.65*s.reach*a,c=s.base.z+.76*s.reach*a;s.rider.position.set(l,.05,c),s.rider.rotation.y=Math.atan2(.65*o,.76*o),s.rider.rotation.z=.28;const h=e*1.3+s.phase,d=l+12+o*5+Math.sin(h)*4.5,f=c-10+Math.cos(h)*1.5,u=17+Math.sin(h*2)*2.4;s.kite.position.set(d,u,f),s.kite.lookAt(l,1.2,c),s.kite.rotateX(-Math.PI/2),n.setXYZ(r*4,l-.3,1.25,c),n.setXYZ(r*4+1,d-2.6,u-1,f),n.setXYZ(r*4+2,l-.3,1.25,c),n.setXYZ(r*4+3,d+2.6,u-1,f)}),n.needsUpdate=!0}if(this.traffic&&(this.cars.forEach((n,s)=>{var S,M;if(n.gone){this.traffic.setMatrixAt(s,this.nothing),(S=this.trafficTrim)==null||S.setMatrixAt(s,this.nothing);return}const r=n.route;n.s+=n.dir*n.speed*t,n.s>r.length&&(n.s=r.length,n.dir=-1),n.s<0&&(n.s=0,n.dir=1);let a=0,o=r.cum.length-1;for(;o-a>1;){const w=a+o>>1;r.cum[w]<=n.s?a=w:o=w}const l=(n.s-r.cum[a])/(r.cum[o]-r.cum[a]||1),c=r.pts[a*3],h=r.pts[a*3+2],d=r.pts[o*3],f=r.pts[o*3+2];let u=d-c,g=f-h;const v=Math.hypot(u,g)||1;u=u/v*n.dir,g=g/v*n.dir;const m=Math.min(r.width*.24,2),p=c+(d-c)*l+g*m,x=h+(f-h)*l-u*m;n.x=p,n.z=x,n.heading=Math.atan2(u,g),this.traffic.setMatrixAt(s,this.sit(p,x,n.heading,.36)),(M=this.trafficTrim)==null||M.setMatrixAt(s,this.tmpM)}),this.traffic.instanceMatrix.needsUpdate=!0,this.trafficTrim&&(this.trafficTrim.instanceMatrix.needsUpdate=!0)),this.gulls){const n=this.gulls.geometry.getAttribute("position");this.gullState.forEach((s,r)=>{const a=s.phase+e*s.w,o=s.cx+Math.cos(a)*s.r,l=s.cz+Math.sin(a)*s.r,c=s.h+Math.sin(a*2.3)*1.5,h=s.w>0?1:-1,d=-Math.sin(a)*h,f=Math.cos(a)*h,u=f,g=-d,v=Math.sin(e*7+s.phase*3)*.45,m=r*6;n.setXYZ(m,o+d*.35,c,l+f*.35),n.setXYZ(m+1,o-d*.3,c,l-f*.3),n.setXYZ(m+2,o+u*.85,c+v,l+g*.85),n.setXYZ(m+3,o+d*.35,c,l+f*.35),n.setXYZ(m+4,o-u*.85,c+v,l-g*.85),n.setXYZ(m+5,o-d*.3,c,l-f*.3)}),n.needsUpdate=!0}}}const __=1,Eh=2,x_=[W(5198680),W(11575168),W(9072466),W(12434356)],v_=W(4474957),M_=W(15921382),S_=[.34,.3,.26,.22,.16,.15,.13,.11],bh=new Float32Array(9);function y_(i,t){const e=[i[0]/10,i[1]/10];for(let n=2;n<i.length;n+=2){const s=i[n-2]/10,r=i[n-1]/10,a=i[n]/10,o=i[n+1]/10,l=Math.max(1,Math.ceil(Math.hypot(a-s,o-r)/t));for(let c=1;c<=l;c++)e.push(s+(a-s)*c/l,r+(o-r)*c/l)}return e}class E_{constructor(){at(this,"cells",new Map);at(this,"segs",[]);at(this,"size",40)}add(t,e,n,s,r,a){const o=this.segs.length/6;this.segs.push(t,e,n,s,r,a);const l=Math.floor(Math.min(t,n)/this.size),c=Math.floor(Math.max(t,n)/this.size),h=Math.floor(Math.min(e,s)/this.size),d=Math.floor(Math.max(e,s)/this.size);for(let f=l;f<=c;f++)for(let u=h;u<=d;u++){const g=(f+512)*4096+(u+512);let v=this.cells.get(g);v||this.cells.set(g,v=[]),v.push(o)}}nearest(t,e,n){let s=null;const r=Math.ceil(n/this.size),a=Math.floor(t/this.size),o=Math.floor(e/this.size);for(let l=a-r;l<=a+r;l++)for(let c=o-r;c<=o+r;c++){const h=this.cells.get((l+512)*4096+(c+512));if(h)for(const d of h){const f=this.segs[d*6],u=this.segs[d*6+1],g=this.segs[d*6+2],v=this.segs[d*6+3],m=g-f,p=v-u,x=Math.max(0,Math.min(1,((t-f)*m+(e-u)*p)/(m*m+p*p||1))),S=f+m*x,M=u+p*x,w=Math.hypot(t-S,e-M);w<=n&&(!s||w<s.dist)&&(s={dist:w,px:S,pz:M,cls:this.segs[d*6+4],name:this.segs[d*6+5]})}}return s}}function b_(i,t,e){const n=new ue,s=new ue,r=new E_,a=[],o=[];for(const[m,p,x,S,M,w]of i.roads){const E=S/10,_=y_(w,m<=3?6:5),y=_.length/2;if(y<2)continue;const C=p===0&&m<=1?v_:x_[p],b=S_[m],R=(x&__)!==0,D=t.yAt(_[0],_[1]),F=t.yAt(_[y*2-2],_[y*2-1]),P=new Float32Array(y);for(let N=1;N<y;N++)P[N]=P[N-1]+Math.hypot(_[N*2]-_[N*2-2],_[N*2+1]-_[N*2-1]);const O=P[y-1]||1,U=new Float32Array(y*3),I=new Float32Array(y*3),X=new Float32Array(y*3);for(let N=0;N<y;N++){const B=_[N*2],H=_[N*2+1],it=Math.max(N-1,0),st=Math.min(N+1,y-1);let q=_[st*2]-_[it*2],et=_[st*2+1]-_[it*2+1];const rt=Math.hypot(q,et)||1;q/=rt,et/=rt;let vt=1;if(N>0&&N<y-1){const zt=_[N*2]-_[N*2-2],ge=_[N*2+1]-_[N*2-1],ee=Math.hypot(zt,ge)||1;vt=1/Math.max(.6,(zt*q+ge*et)/ee)}const ot=-et*(E/2)*vt,bt=q*(E/2)*vt,Wt=R?D+(F-D)*(P[N]/O)+.6+1*Math.sin(Math.PI*P[N]/O):NaN,Et=R?Wt:t.yAt(B,H)+b,Bt=R?Wt:t.yAt(B+ot,H+bt)+b,Xt=R?Wt:t.yAt(B-ot,H-bt)+b;U.set([B+ot,Bt,H+bt],N*3),I.set([B,Et,H],N*3),X.set([B-ot,Xt,H-bt],N*3),N>0&&m<=3&&r.add(_[N*2-2],_[N*2-1],B,H,m,M)}for(let N=0;N<y-1;N++){const B=N*3,H=B+3;if(e){const it=e(I[B],I[B+2]),st=e(I[H],I[H+2]);if(it&&st)continue;if(it!==st){let q=0,et=1;for(let ee=0;ee<12;ee++){const ae=(q+et)/2;e(I[B]+(I[H]-I[B])*ae,I[B+2]+(I[H+2]-I[B+2])*ae)===it?q=ae:et=ae}const rt=(q+et)/2;for(const ee of[U,I,X])for(let ae=0;ae<3;ae++)bh[(ee===U?0:ee===I?3:6)+ae]=ee[B+ae]+(ee[H+ae]-ee[B+ae])*rt;const[vt,ot,bt,Wt,Et,Bt,Xt,zt,ge]=bh;it?(n.quad(vt,ot,bt,U[H],U[H+1],U[H+2],I[H],I[H+1],I[H+2],Wt,Et,Bt,C),n.quad(Wt,Et,Bt,I[H],I[H+1],I[H+2],X[H],X[H+1],X[H+2],Xt,zt,ge,C)):(n.quad(U[B],U[B+1],U[B+2],vt,ot,bt,Wt,Et,Bt,I[B],I[B+1],I[B+2],C),n.quad(I[B],I[B+1],I[B+2],Wt,Et,Bt,Xt,zt,ge,X[B],X[B+1],X[B+2],C));continue}}if(n.quad(U[B],U[B+1],U[B+2],U[H],U[H+1],U[H+2],I[H],I[H+1],I[H+2],I[B],I[B+1],I[B+2],C),n.quad(I[B],I[B+1],I[B+2],I[H],I[H+1],I[H+2],X[H],X[H+1],X[H+2],X[B],X[B+1],X[B+2],C),R){const it=W(p===2?7297604:13225162);for(const st of[U,X])n.quad(st[B],st[B+1],st[B+2],st[H],st[H+1],st[H+2],st[H],st[H+1]+1.05,st[H+2],st[B],st[B+1]+1.05,st[B+2],it),n.quad(st[B],st[B+1]-.7,st[B+2],st[H],st[H+1]-.7,st[H+2],st[H],st[H+1],st[H+2],st[B],st[B+1],st[B+2],W(9276036))}}if(m<=5&&!R)for(const N of[0,y-1]){const B=I[N*3],H=I[N*3+1],it=I[N*3+2];if(e!=null&&e(B,it))continue;const st=16;for(let q=0;q<st;q++){const et=q/st*Math.PI*2,rt=(q+1)/st*Math.PI*2;n.tri(B,H,it,B+Math.cos(rt)*E/2,H,it+Math.sin(rt)*E/2,B+Math.cos(et)*E/2,H,it+Math.sin(et)*E/2,C)}}if(m<=1&&!(x&Eh)&&O>20){let N=0;for(let B=4;B<O-4;B+=12){for(;N<y-2&&P[N+1]<B;)N++;const H=(B-P[N])/(P[N+1]-P[N]||1),it=I[N*3]+(I[N*3+3]-I[N*3])*H,st=I[N*3+1]+(I[N*3+4]-I[N*3+1])*H,q=I[N*3+2]+(I[N*3+5]-I[N*3+2])*H;if(e!=null&&e(it,q))continue;let et=I[N*3+3]-I[N*3],rt=I[N*3+5]-I[N*3+2];const vt=Math.hypot(et,rt)||1;et/=vt,rt/=vt;const ot=(I[N*3+4]-I[N*3+1])/vt*3,bt=-rt*.16,Wt=et*.16,Et=.05;s.quad(it+bt,st+Et,q+Wt,it+et*3+bt,st+ot+Et,q+rt*3+Wt,it+et*3-bt,st+ot+Et,q+rt*3-Wt,it-bt,st+Et,q-Wt,M_)}}if(x&Eh){let N=0,B=0;for(let rt=0;rt<y;rt++)N+=_[rt*2],B+=_[rt*2+1];N/=y,B/=y;const H=y>>1,it=w_(_[0],_[1],_[H*2],_[H*2+1],_[y*2-2],_[y*2-1]),st=it?it.x:N,q=it?it.z:B,et=it?it.r:Math.hypot(_[0]-N,_[1]-B);et>3&&et<40&&!(e!=null&&e(st,q))&&!o.some(rt=>Math.hypot(rt.x-st,rt.z-q)<12)&&o.push({x:st,z:q,r:et,w:E})}m<=3&&a.push({cls:m,name:M>=0?i.names[M]:"",width:E,flags:x,pts:I,length:O})}const l=W(13158078),c=W(7314002),h=W(4943936);for(const m of o){const p=m.r-m.w/2-.3;if(p<1.2)continue;const x=t.yAt(m.x,m.z)+.2;n.frame(m.x,x,m.z,0),n.cyl(0,0,0,p,p,.4,14,l,c),n.blob(0,.9,0,p*.45,.8,p*.45,6,3,h,W(7181400)),n.frame()}const d=new hi({vertexColors:!0,roughness:.92,metalness:0,side:ze,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),f=new Qt(wh(n.build()),d);f.receiveShadow=!0,f.name="roads";const u=Ur(new Wn({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})),g=new Qt(wh(s.build()),u);g.name="road-markings";const v=new Qe;return v.add(f,g),{group:v,index:r,paths:a}}function wh(i){return i.deleteAttribute("glow"),i}function w_(i,t,e,n,s,r){const a=2*(i*(n-r)+e*(r-t)+s*(t-n));if(Math.abs(a)<.001)return null;const o=i*i+t*t,l=e*e+n*n,c=s*s+r*r,h=(o*(n-r)+l*(r-t)+c*(t-n))/a,d=(o*(s-e)+l*(i-s)+c*(e-i))/a;return{x:h,z:d,r:Math.hypot(i-h,t-d)}}const Us=-36,Yo=170,T_=`
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
`,Xr=2;function Th(){const i=new fr(new Uint8Array([128,128,128,255]),1,1);return i.needsUpdate=!0,{maps:Array.from({length:Xr},()=>({value:i})),rects:Array.from({length:Xr},()=>({value:new ce(0,0,1,0)}))}}function A_(i,t,e,n=Th()){const{nx:s,nz:r}=i,a=new Float32Array(s*r*3),o=new Float32Array(s*r*3),l=new Float32Array(s*r*2);for(let v=0;v<r;v++)for(let m=0;m<s;m++){const p=v*s+m,x=i.xMin+m*i.dx,S=i.zMin+v*i.dz;a[p*3]=x,a[p*3+1]=i.y[p],a[p*3+2]=S,l[p*2]=(x+i.sizeX/2)/i.sizeX,l[p*2+1]=1-(S+i.sizeZ/2)/i.sizeZ;const M=i.y[v*s+Math.max(m-1,0)],w=i.y[v*s+Math.min(m+1,s-1)],E=i.y[Math.max(v-1,0)*s+m],_=i.y[Math.min(v+1,r-1)*s+m],y=(w-M)/(2*i.dx),C=(_-E)/(2*i.dz),b=Math.hypot(y,1,C);o[p*3]=-y/b,o[p*3+1]=1/b,o[p*3+2]=-C/b}const c=new Uint32Array((s-1)*(r-1)*6);let h=0;for(let v=0;v<r-1;v++)for(let m=0;m<s-1;m++){const p=v*s+m,x=p+1,S=p+s,M=S+1;c[h++]=p,c[h++]=S,c[h++]=x,c[h++]=x,c[h++]=S,c[h++]=M}const d=new we;d.setAttribute("position",new be(a,3)),d.setAttribute("normal",new be(o,3)),d.setAttribute("uv",new be(l,2)),d.setIndex(new be(c,1)),d.computeBoundingSphere();const f=new hi({map:t,roughness:.96,metalness:0});f.onBeforeCompile=v=>{v.uniforms.uTide=e;for(let m=0;m<Xr;m++)v.uniforms["uDetail"+m]=n.maps[m],v.uniforms["uDetailRect"+m]=n.rects[m];v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform float uTide;
uniform sampler2D uDetail0;
uniform vec4 uDetailRect0;
uniform sampler2D uDetail1;
uniform vec4 uDetailRect1;
${T_}`).replace("#include <map_fragment>",`#include <map_fragment>
        {
          float camDist = length(cameraPosition - vWPos);
          float nearFade = 1.0 - smoothstep(300.0, 1600.0, camDist);
          #ifdef USE_MAP
          {
            // The ground's picture is about two metres to the pixel, so up close it is a blur. Near the camera its
            // edges are sharpened (against the average of the pixels around) and frayed with fine noise, so where
            // grass meets a path or a car park there is a crisp, uneven line instead of a soft smear.
            float close = 1.0 - smoothstep(70.0, 420.0, camDist);
            if (close > 0.0) {
              vec2 px = 1.0 / vec2(textureSize(map, 0));
              vec2 fray = (vec2(invNoise(vWPos.xz * 0.9), invNoise(vWPos.xz * 0.9 + 37.0)) - 0.5) * px * 1.2;
              vec2 uv = vMapUv + fray * close;
              vec3 here = texture2D(map, uv).rgb;
              vec3 e = texture2D(map, uv + px * vec2(1.6, 0.0)).rgb, w = texture2D(map, uv - px * vec2(1.6, 0.0)).rgb;
              vec3 n = texture2D(map, uv + px * vec2(0.0, 1.6)).rgb, t = texture2D(map, uv - px * vec2(0.0, 1.6)).rgb;
              vec3 around = (e + w + n + t) * 0.25;
              // (never past the lightest or darkest of the colours around: no dark or bright fringes)
              vec3 crisp = clamp(here + (here - around) * 1.6, min(min(e, w), min(n, t)), max(max(e, w), max(n, t)));
              diffuseColor.rgb = mix(diffuseColor.rgb, crisp, close);
            }
          }
          #endif
          {
            // a close-up picture of this square of the map, where there is one, faded in over 25 m at its edge
            vec2 d = (vWPos.xz - uDetailRect0.xy) * uDetailRect0.z;
            float edge = min(min(d.x, 1.0 - d.x), min(d.y, 1.0 - d.y)) / (25.0 * uDetailRect0.z);
            vec3 sharp = texture2D(uDetail0, vec2(d.x, 1.0 - d.y)).rgb;
            diffuseColor.rgb = mix(diffuseColor.rgb, sharp, uDetailRect0.w * clamp(edge, 0.0, 1.0));
          }
          {
            // a close-up picture of this square of the map, where there is one, faded in over 25 m at its edge
            vec2 d = (vWPos.xz - uDetailRect1.xy) * uDetailRect1.z;
            float edge = min(min(d.x, 1.0 - d.x), min(d.y, 1.0 - d.y)) / (25.0 * uDetailRect1.z);
            vec3 sharp = texture2D(uDetail1, vec2(d.x, 1.0 - d.y)).rgb;
            diffuseColor.rgb = mix(diffuseColor.rgb, sharp, uDetailRect1.w * clamp(edge, 0.0, 1.0));
          }
          float grain = invNoise(vWPos.xz * 0.85) * 0.55 + invNoise(vWPos.xz * 0.21) * 0.45;
          diffuseColor.rgb *= mix(1.0, 0.84 + 0.32 * grain, nearFade);
          // and a finer grain underfoot, so grass and gravel have some texture when you stand on them
          float fine = invNoise(vWPos.xz * 5.5) * 0.6 + invNoise(vWPos.xz * 17.0) * 0.4;
          diffuseColor.rgb *= mix(1.0, 0.88 + 0.24 * fine, 1.0 - smoothstep(25.0, 140.0, camDist));
          float above = vWPos.y / ${Ln.toFixed(2)} - uTide;
          float wet = smoothstep(0.45, 0.03, above);
          diffuseColor.rgb *= mix(1.0, 0.76, wet);
        }`)},f.customProgramCacheKey=()=>"inverloch-terrain-3";const u=new Qt(d,f);u.receiveShadow=!0,u.name="terrain";const g=new Qe;return g.add(u,C_(i),P_(i)),g}function R_(i){const t=[];for(let e=0;e<i.nx;e++)t.push([i.xMin+e*i.dx,i.zMin]);for(let e=1;e<i.nz;e++)t.push([i.xMax,i.zMin+e*i.dz]);for(let e=i.nx-2;e>=0;e--)t.push([i.xMin+e*i.dx,i.zMax]);for(let e=i.nz-2;e>=1;e--)t.push([i.xMin,i.zMin+e*i.dz]);return t}function C_(i){const t=R_(i),e=t.length,n=[],s=[],r=[],a=new Rt(9074780),o=new Rt(6180669),l=new Rt(3813673),c=[[0,a,o],[1,o,l]];for(let f=0;f<e;f++){const[u,g]=t[f],[v,m]=t[(f+1)%e],p=i.yAt(u,g),x=i.yAt(v,m),S=v-u,M=m-g,w=Math.hypot(S,M)||1,E=-M/w*-1,_=S/w*-1;for(const[y,C,b]of c){const D=y===0?p:p-6,F=y===0?p-6:Us,P=y===0?x:x-6,O=y===0?x-6:Us;n.push(u,D,g,v,P,m,v,O,m,u,D,g,v,O,m,u,F,g);for(const U of[C,C,b,C,b,b])s.push(U.r,U.g,U.b);for(let U=0;U<6;U++)r.push(E,0,_)}}const h=new we;h.setAttribute("position",new he(n,3)),h.setAttribute("normal",new he(r,3)),h.setAttribute("color",new he(s,3));const d=new Qt(h,new hi({vertexColors:!0,roughness:1,side:ze}));return d.name="skirt",d}function P_(i){const t=new Qe,e=i.xMax-i.xMin+Yo*2,n=i.zMax-i.zMin+Yo*2,s=190,r=(i.xMin+i.xMax)/2,a=(i.zMin+i.zMax)/2,o=new Qt(new yi(e,s,n),new hi({color:1779245,roughness:.75,metalness:.1}));o.position.set(r,Us-s/2,a),o.receiveShadow=!0,t.add(o);const l=document.createElement("canvas");l.width=2048,l.height=160;const c=l.getContext("2d");c.fillStyle="#1b262d",c.fillRect(0,0,l.width,l.height),c.fillStyle="#e9d9a6",c.textBaseline="middle",c.font="600 78px 'Space Grotesk', system-ui, sans-serif",c.fillText("INVERLOCH",40,84);const h=c.measureText("INVERLOCH").width;c.fillStyle="#9fb4bd",c.font="400 42px 'Space Grotesk', system-ui, sans-serif",c.fillText("Bass Coast, Victoria   ·   38.63° S  145.73° E   ·   Anderson Inlet & Bass Strait",40+h+46,88);const d=new So(l);d.colorSpace=ye,d.anisotropy=8;const f=1700,u=new Qt(new ci(f,f*(l.height/l.width)),new Wn({map:d,toneMapped:!1}));u.position.set(r-e/2+f/2+110,Us-s/2,a+n/2+.6),t.add(u);const g=document.createElement("canvas");g.width=g.height=256;const v=g.getContext("2d");v.fillStyle="#e9d9a6",v.beginPath(),v.moveTo(128,18),v.lineTo(176,150),v.lineTo(128,122),v.lineTo(80,150),v.closePath(),v.fill(),v.font="700 86px 'Space Grotesk', system-ui, sans-serif",v.textAlign="center",v.fillText("N",128,240);const m=new So(g);m.colorSpace=ye;const p=new Qt(new ci(130,130),new Wn({map:m,transparent:!0,toneMapped:!1}));return p.rotation.x=-Math.PI/2,p.position.set(i.xMax+Yo/2,Us+.6,i.zMin+120),t.add(p),t}function qr(i,t,e,n,s,r,a,o,l,c){const h=new Ao(1,0),d=h.getAttribute("position"),f=[];for(let u=0;u<d.count;u++){const g=d.getX(u),v=d.getY(u),m=d.getZ(u),p=Math.sin(g*12.9898+v*78.233+m*37.719+o*4.1)*43758.5453,x=.8+(p-Math.floor(p))*.42;f.push([t+g*s*x,e+v*r*(v<0?.75:x),n+m*a*x])}for(let u=0;u<f.length;u+=3){const[g,v,m]=[f[u],f[u+1],f[u+2]],p=le.clamp(((g[1]+v[1]+m[1])/3-(e-r))/(2*r),0,1);i.tri(g[0],g[1],g[2],v[0],v[1],v[2],m[0],m[1],m[2],Ls(l,c,p))}h.dispose()}function D_(){const i=[],t=n=>{const s=n.build();return s.deleteAttribute("glow"),s};let e=new ue;return qr(e,0,.44,0,.82,.56,.82,1,W(3098152),W(7507285)),i.push(t(e)),e=new ue,e.cyl(0,0,0,.04,.026,.56,4,W(11905429)),qr(e,0,.72,0,.36,.3,.36,2,W(4151352),W(9349240)),qr(e,.17,.52,.1,.24,.19,.24,3,W(3887925),W(8362603)),i.push(t(e)),e=new ue,e.cyl(0,0,0,.055,.04,.4,4,W(7297608)),qr(e,0,.64,0,.46,.38,.46,4,W(3695150),W(9091170)),i.push(t(e)),e=new ue,e.cyl(0,0,0,.035,.03,.16,4,W(5916728)),e.cyl(0,.12,0,.23,.11,.42,6,W(2506539)),e.cyl(0,.5,0,.15,0,.5,6,W(4020796)),i.push(t(e)),i}function L_(i,t,e,n=()=>!1){const s=new Qe;s.name="trees";const r=D_(),a=new _c({vertexColors:!0}),o=1300,l=new Map,c=i.trees,h=qe(88);for(let x=0;x<c.length;x+=Pg){if(e<1&&h()>e||n(c[x]/4,c[x+1]/4))continue;const M=`${c[x+2]>>8}:${Math.floor(c[x]/4/o)}:${Math.floor(c[x+1]/4/o)}`;let w=l.get(M);w||l.set(M,w=[]),w.push(x)}const d=new Kt,f=new mn,u=new G,g=new G,v=new G(0,1,0),m=new Rt;let p=0;for(const[x,S]of l){const M=Number(x.split(":")[0]),w=new Ze(r[M],a,S.length);S.forEach((E,_)=>{const y=c[E]/4,C=c[E+1]/4,b=(c[E+2]&255)/10,R=qe(E*2654435761+11);g.set(y,t.yAt(y,C)-.15,C),f.setFromAxisAngle(v,R()*Math.PI*2);const D=.85+R()*.35;u.set(b*D,b,b*(.85+R()*.35)),w.setMatrixAt(_,d.compose(g,f,u));const F=.8+R()*.34;w.setColorAt(_,m.setRGB(F*(.94+R()*.14),F,F*(.9+R()*.12)))}),w.instanceMatrix.needsUpdate=!0,w.instanceColor&&(w.instanceColor.needsUpdate=!0),w.computeBoundingSphere(),w.castShadow=!0,w.receiveShadow=!1,s.add(w),p+=S.length}return{group:s,count:p}}const I_=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,N_=`
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
}`;function U_(i,t){const e=i.w*i.h,n=new Uint16Array(e*2);for(let u=0;u<e;u++)n[u*2]=Wl.toHalfFloat(i.raw[u]),n[u*2+1]=Wl.toHalfFloat(i.exposure[u]);const s=new fr(n,i.w,i.h,ni,fn);s.minFilter=s.magFilter=We,s.wrapS=s.wrapT=un,s.needsUpdate=!0;const r={tField:{value:s},uSize:{value:new Lt(i.sizeX,i.sizeZ)},uTide:t,uTime:{value:0},uSunDir:{value:new G(.4,.8,.3).normalize()},uSunColor:{value:new Rt(16773848)},uShallow:{value:new Rt(7129789)},uDeep:{value:new Rt(937848)},uSky:{value:new Rt(12573938)},uFoam:{value:1}},a=new Xn({uniforms:r,vertexShader:I_,fragmentShader:N_,transparent:!0,depthWrite:!1}),o=new ci(i.xMax-i.xMin,i.zMax-i.zMin);o.rotateX(-Math.PI/2);const l=new Qt(o,a);l.position.set((i.xMin+i.xMax)/2,t.value*Ln,(i.zMin+i.zMax)/2),l.renderOrder=2,l.name="water";const c=new Qt(new we,new Wn({color:1929103,transparent:!0,opacity:.8,side:ze,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));c.renderOrder=1,c.name="water-edge";const h=[];for(let u=0;u<i.nx;u++)h.push([i.xMin+u*i.dx,i.zMin]);for(let u=1;u<i.nz;u++)h.push([i.xMax,i.zMin+u*i.dz]);for(let u=i.nx-2;u>=0;u--)h.push([i.xMin+u*i.dx,i.zMax]);for(let u=i.nz-2;u>=1;u--)h.push([i.xMin,i.zMin+u*i.dz]);const d=h.map(([u,g])=>i.yAt(u,g)),f=u=>{t.value=u;const g=u*Ln;l.position.y=g;const v=[],m=h.length;for(let x=0;x<m;x++){const S=(x+1)%m,M=d[x],w=d[S];if(M>=g&&w>=g)continue;const[E,_]=h[x],[y,C]=h[S],b=Math.min(M,g),R=Math.min(w,g);v.push(E,g,_,y,g,C,y,R,C,E,g,_,y,R,C,E,b,_)}c.geometry.dispose();const p=new we;p.setAttribute("position",new he(v,3)),c.geometry=p};return f(t.value),{mesh:l,skirt:c,uniforms:r,setTide:f}}const Ah=-.9,Rh=1.3,Ch=.2,rs={x:260,z:150,dist:3900,polar:55,azimuth:16},F_={high:{step:1,trees:1,shadow:4096,pixelRatio:2},medium:{step:2,trees:.6,shadow:2048,pixelRatio:1.5},low:{step:2,trees:.35,shadow:0,pixelRatio:1}},O_=()=>new Promise(i=>requestAnimationFrame(()=>i()));function z_(i,t){const n=t.positions,s=t.normals,r=t.colors,a=t.uvs,o=t.indices,l=o?o.length:n.length/3,c=new Kt().fromArray(Array.from(t.matrix)),h=new Ut().getNormalMatrix(c),d=new G,f=_=>{const y=o?o[_]:_,C=new Float64Array(11);return d.set(n[y*3],n[y*3+1],n[y*3+2]).applyMatrix4(c),C[0]=d.x,C[1]=d.y,C[2]=d.z,s&&(d.set(s[y*3],s[y*3+1],s[y*3+2]).applyMatrix3(h).normalize(),C[3]=d.x,C[4]=d.y,C[5]=d.z),r&&(C[6]=r[y*3],C[7]=r[y*3+1],C[8]=r[y*3+2]),a&&(C[9]=a[y*2],C[10]=a[y*2+1]),C},u=_=>(_[0]-i.xMin)/i.dx,g=_=>(_[2]-i.zMin)/i.dz,v=_=>u(_)+g(_),m=(_,y,C)=>{const b=[],R=[];for(let D=0;D<_.length;D++){const F=_[D],P=_[(D+1)%_.length],O=y(F)-C,U=y(P)-C;if(O<=1e-9&&b.push(F),O>=-1e-9&&R.push(F),O<-1e-9&&U>1e-9||O>1e-9&&U<-1e-9){const I=O/(O-U),X=new Float64Array(11);for(let N=0;N<11;N++)X[N]=F[N]+(P[N]-F[N])*I;b.push(X),R.push(X)}}return[b,R]},p=(_,y)=>{const C=[];for(let b of _){let R=1/0,D=-1/0;for(const F of b){const P=y(F);P<R&&(R=P),P>D&&(D=P)}for(let F=Math.floor(R+1e-9)+1;F<D-1e-9&&b.length>=3;F++){const[P,O]=m(b,y,F);P.length>=3&&C.push(P),b=O}b.length>=3&&C.push(b)}return C},x=[],S=[],M=[],w=[],E=_=>{x.push(_[0],_[1]+i.yAt(_[0],_[2]),_[2]),s&&S.push(_[3],_[4],_[5]),r&&M.push(_[6],_[7],_[8]),a&&w.push(_[9],_[10])};for(let _=0;_+2<l;_+=3){const y=f(_),C=f(_+1),b=f(_+2),R=Math.min(u(y),u(C),u(b)),D=Math.max(u(y),u(C),u(b)),F=Math.min(g(y),g(C),g(b)),P=Math.max(g(y),g(C),g(b)),O=Math.min(v(y),v(C),v(b)),U=Math.max(v(y),v(C),v(b));if(Math.floor(R)===Math.floor(D-1e-9)&&Math.floor(F)===Math.floor(P-1e-9)&&Math.floor(O)===Math.floor(U-1e-9)){E(y),E(C),E(b);continue}for(const I of p(p(p([[y,C,b]],u),g),v))for(let X=1;X+1<I.length;X++)E(I[0]),E(I[X]),E(I[X+1])}return{positions:new Float32Array(x),normals:s?new Float32Array(S):void 0,colors:r?new Float32Array(M):void 0,uvs:a?new Float32Array(w):void 0}}function B_(i,t,e){let n=0;for(let s=0;s<i.length;s++){const r=i[s],a=i[(s+1)%i.length],o=(a[0]-r[0])*(e-r[1])-(a[1]-r[1])*(t-r[0]);if(o!==0){if(n===0)n=Math.sign(o);else if(Math.sign(o)!==n)return!1}}return!0}const k_=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class G_{constructor(t,e,n,s){at(this,"renderer");at(this,"scene",new Qu);at(this,"camera",new Sn(38,1,5,9e4));at(this,"controls");at(this,"atmosphere");at(this,"water");at(this,"hf");at(this,"life");at(this,"solid");at(this,"labels");at(this,"places",[]);at(this,"tide",{value:Ch});at(this,"raf",0);at(this,"last",0);at(this,"time",0);at(this,"dirty",!0);at(this,"animating",!0);at(this,"disposed",!1);at(this,"abort",new AbortController);at(this,"detailMaps",[]);at(this,"resizeObserver");at(this,"flight");at(this,"lastCompass",NaN);at(this,"width",1);at(this,"height",1);at(this,"quality","high");at(this,"pixelRatio",1);at(this,"slowFrames",0);at(this,"solarMinutes",NaN);at(this,"roadPaths",[]);at(this,"external");at(this,"meta");at(this,"shadowAim",new G);at(this,"lookDir",new G);at(this,"onKey",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=this.currentView(),n=e.dist*.12,s=le.degToRad(e.azimuth),r=-Math.sin(s),a=-Math.cos(s),o=Math.cos(s),l=-Math.sin(s);let c=null;switch(t.key){case"ArrowUp":c={...e,x:e.x+r*n,z:e.z+a*n};break;case"ArrowDown":c={...e,x:e.x-r*n,z:e.z-a*n};break;case"ArrowLeft":c={...e,x:e.x-o*n,z:e.z-l*n};break;case"ArrowRight":c={...e,x:e.x+o*n,z:e.z+l*n};break;case"+":case"=":c={...e,dist:e.dist*.8};break;case"-":case"_":c={...e,dist:e.dist*1.25};break;case"q":case"Q":c={...e,azimuth:e.azimuth-15};break;case"e":case"E":c={...e,azimuth:e.azimuth+15};break;case"r":case"R":c={...e,polar:e.polar-6};break;case"f":case"F":c={...e,polar:e.polar+6};break;case"Home":c=rs;break;default:return}t.preventDefault(),this.fly(c,.3)});at(this,"frame",t=>{var l,c;if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);const e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,document.hidden)return;if(this.flight){const h=this.flight;h.t=Math.min(1,h.t+e/h.duration);const d=k_(h.t),f=(u,g)=>u+(g-u)*d;this.applyView({x:f(h.from.x,h.to.x),z:f(h.from.z,h.to.z),dist:Math.exp(f(Math.log(h.from.dist),Math.log(h.to.dist))),polar:f(h.from.polar,h.to.polar),azimuth:f(h.from.azimuth,h.to.azimuth)}),h.t>=1&&(this.flight=void 0)}if(this.controls&&!this.external&&this.controls.update()&&(this.dirty=!0),this.atmosphere.update(e)&&(this.dirty=!0),this.animating&&(this.time+=e,this.water.uniforms.uTime.value=this.time,(l=this.life)==null||l.update(e,this.time),this.dirty=!0),!this.dirty)return;this.dirty=!1;const n=this.camera;let s,r=1/0;const a=!!this.controls&&!this.external;if(this.controls&&a){const h=this.hf.yAt(n.position.x,n.position.z)+12;n.position.y<h&&(n.position.y=h),s=n.position.distanceTo(this.controls.target),this.shadowAim.copy(this.controls.target)}else{const h=Math.max(1,n.position.y-Math.max(this.hf.yAt(n.position.x,n.position.z),this.waterLevel));n.getWorldDirection(this.lookDir);const d=Math.min(this.lookDir.y<-.05?h/-this.lookDir.y:1e9,60+h*3,3e3);this.shadowAim.copy(n.position).addScaledVector(this.lookDir,d),s=Math.max(d,h)*1.3,r=Math.max(350,h*10)}const o=a?le.clamp(s*.02,2,80):le.clamp(s*.012,.4,60);if(Math.abs(o-n.near)>n.near*.05&&(n.near=o,n.updateProjectionMatrix()),this.atmosphere.aimShadow(this.shadowAim,s),this.renderer.render(this.scene,n),(c=this.labels)==null||c.update(n,this.width,this.height,r),this.animating&&e<.25&&(this.slowFrames=e>.042?this.slowFrames+1:Math.max(0,this.slowFrames-2),this.slowFrames>50&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio*.75),this.renderer.setPixelRatio(this.pixelRatio),this.resize(),this.slowFrames=0)),a){const h=Math.round(this.currentView().azimuth);h!==this.lastCompass&&(this.lastCompass=h,this.cb.onCompass(h))}});this.container=t,this.labelLayer=e,this.cb=n,this.opts=s,this.external=!!s.external}async init(){try{this.renderer=new lg({antialias:!0,powerPreference:"high-performance"})}catch{this.cb.onError("This browser could not start WebGL, which the 3D model needs.");return}const t=this.renderer;this.quality=this.pickQuality();let e=F_[this.quality];const n=(navigator.deviceMemory??8)>4;this.quality==="medium"&&n&&!this.opts.quality&&(e={...e,pixelRatio:2,trees:.8}),this.pixelRatio=Math.min(window.devicePixelRatio||1,e.pixelRatio),t.setPixelRatio(this.pixelRatio),t.outputColorSpace=ye,t.toneMapping=ra,t.shadowMap.enabled=e.shadow>0,t.shadowMap.type=as;const s=t.domElement;this.opts.external?(s.setAttribute("role","img"),s.setAttribute("aria-label","3D model of Inverloch")):(s.tabIndex=0,s.setAttribute("role","application"),s.setAttribute("aria-label","3D model of Inverloch. Drag to pan, right-drag to rotate, scroll to zoom. Arrow keys pan, plus and minus zoom, Q and E rotate.")),s.style.display="block",s.style.outlineOffset="-3px",this.container.appendChild(s),s.addEventListener("webglcontextlost",b=>{b.preventDefault(),this.disposed||this.cb.onError("The browser reclaimed the graphics memory this model was using.")});let r;try{r=await Lg(this.opts.assets,(b,R)=>this.cb.onProgress(b*.6,R),this.abort.signal)}catch(b){this.disposed||this.cb.onError(b instanceof Error?b.message:"The model data could not be loaded.");return}if(this.disposed)return;const{town:a,heights:o,exposure:l,ground:c}=r;this.meta=a.meta;const h=[...this.opts.clear??[],...(this.opts.clearLatLon??[]).map(b=>{const[R,D]=this.fromLatLon(b.lat,b.lon);return{x:R,z:D,r:b.r}})],d=(this.opts.clearPolygons??[]).map(b=>({pts:b.latLon.map(([R,D])=>this.fromLatLon(R,D)),roads:!!b.roads})),f=(b,R,D)=>d.some(F=>(!D||F.roads)&&B_(F.pts,b,R)),u=(b,R)=>h.some(D=>(b-D.x)**2+(R-D.z)**2<D.r*D.r)||f(b,R,!1),g=(this.opts.detailLatLon??[]).map(b=>{const[R,D]=this.fromLatLon(b.lat,b.lon);return{x:R,z:D,r:b.r}}),v=(b,R)=>g.some(D=>(b-D.x)**2+(R-D.z)**2<D.r*D.r);c.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());const m=async(b,R)=>{this.cb.onProgress(b,R),await O_()};await m(.62,"Shaping the terrain");const p=this.hf=new Vg(o,l,a.meta.grid[0],a.meta.grid[1],a.meta.size[0],a.meta.size[1],e.step),x=Th();this.scene.add(A_(p,c,this.tide,x));const S=navigator.deviceMemory??8;Rg(this.opts.assets,this.quality==="low"||S<=4,this.abort.signal).then(b=>{if(this.disposed){for(const R of b)R.texture.dispose();return}b.slice(0,Xr).forEach((R,D)=>{R.texture.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),x.maps[D].value=R.texture,x.rects[D].value.set(R.x,R.z,1/R.size,1),this.detailMaps.push(R.texture)}),this.dirty=!0}),this.water=U_(p,this.tide),this.scene.add(this.water.skirt,this.water.mesh),await m(.7,"Laying out the streets");const M=b_(a,p,d.some(b=>b.roads)?(b,R)=>f(b,R,!0):void 0);this.scene.add(M.group),this.roadPaths=M.paths,await m(.78,"Raising the buildings");const w=Hg(a,p,M.index,Yg,u);this.scene.add(w.group),await m(.86,"Planting trees");const E=L_(a,p,e.trees,u);this.scene.add(E.group),await m(.92,"Adding landmarks");const _={town:a,hf:p,footprints:w.footprints,roads:M.index,paths:M.paths,isClear:u,isDetail:v,hasDetail:g.length>0},y=c_(_);this.scene.add(y.group),this.solid=new Map;for(const b of w.footprints){if(!(b!=null&&b.poly)||b.poly.length<6)continue;let R=1/0,D=-1/0,F=1/0,P=-1/0;for(let O=0;O<b.poly.length;O+=2)R=Math.min(R,b.poly[O]),D=Math.max(D,b.poly[O]),F=Math.min(F,b.poly[O+1]),P=Math.max(P,b.poly[O+1]);for(let O=Math.floor(R/16);O<=Math.floor(D/16);O++)for(let U=Math.floor(F/16);U<=Math.floor(P/16);U++){const I=`${O}_${U}`,X=this.solid.get(I);X?X.push(b.poly):this.solid.set(I,[b.poly])}}if(this.life=new g_(_,y),this.life.setTide(this.tide.value*Ln),this.scene.add(this.life.group),this.disposed)return;this.atmosphere=new Tg(t,this.water,e.shadow),this.scene.add(this.atmosphere.sky,this.atmosphere.sun,this.atmosphere.sun.target,this.atmosphere.hemi),this.places=qg(a.meta,p),this.labels=new Wg(this.labelLayer,this.places,b=>this.flyToPlace(b)),this.external||this.setupControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize();const C=window.matchMedia("(prefers-reduced-motion: reduce)").matches;C&&(this.animating=!1),this.external?this.setExternalCamera(300,900,2600,0,-.42):C?this.applyView(rs):(this.applyView({...rs,dist:9500,polar:24,azimuth:-20}),this.fly(rs,3.4)),this.cb.onProgress(1,"Ready"),this.cb.onReady({quality:this.quality,houses:a.counts.houses,mappedBuildings:a.counts.buildings,trees:E.count,roadPieces:a.counts.roads,sources:a.meta.sources,places:this.places}),this.last=performance.now(),this.raf=requestAnimationFrame(this.frame)}get isAnimating(){return this.animating}setAnimating(t){this.animating=t,this.dirty=!0}setExternalCamera(t,e,n,s,r){this.external&&(this.camera.position.set(t,e,n),this.camera.rotation.set(r,s,0,"YXZ"),this.dirty=!0)}setExternal(t){if(!(t===this.external||!this.hf)){if(this.external=t,t)this.flight=void 0,this.controls&&(this.controls.enabled=!1);else{this.controls||this.setupControls(),this.controls.enabled=!0;const e=this.camera;e.getWorldDirection(this.lookDir);const n=Math.max(1,e.position.y),s=this.lookDir.y<-.05?Math.min(n/-this.lookDir.y,6e3):900,r=this.controls.target.copy(e.position).addScaledVector(this.lookDir,s);r.x=le.clamp(r.x,this.hf.xMin,this.hf.xMax),r.z=le.clamp(r.z,this.hf.zMin,this.hf.zMax),r.y=0,this.controls.update(),this.fly(rs,1.6)}this.resize()}}getCamera(){const t=new _n().setFromQuaternion(this.camera.quaternion,"YXZ"),e=this.camera.position;return{x:e.x,y:e.y,z:e.z,yaw:t.y,pitch:t.x}}fromLatLon(t,e){const n=this.meta;return n?[(e-n.origin[0])*n.metresPerDegree[0],-(t-n.origin[1])*n.metresPerDegree[1]]:[0,0]}addParts(t){const e=new Qe;e.name="guest";const n=t.map(s=>{const r=s.onGround?{...s,...z_(this.hf,s),indices:void 0}:s,a=new we,o=(u,g)=>new be(u instanceof Float32Array?u:Float32Array.from(u),g);a.setAttribute("position",o(r.positions,3)),r.colors&&a.setAttribute("color",o(r.colors,3)),r.uvs&&a.setAttribute("uv",o(r.uvs,2)),r.indices&&a.setIndex(Array.from(r.indices)),r.normals?a.setAttribute("normal",o(r.normals,3)):a.computeVertexNormals();let l=null;r.map&&(l=new Ee(r.map),l.colorSpace=ye,l.wrapS=l.wrapT=Os,r.mapRepeat&&l.repeat.set(r.mapRepeat[0],r.mapRepeat[1]),l.anisotropy=4,l.needsUpdate=!0);const c=r.opacity??1,h={color:new Rt().setRGB(...r.color??[1,1,1]),map:l,vertexColors:!!r.colors,transparent:c<1,opacity:c,side:r.doubleSide?ze:jn},d=r.unlit?new Wn(h):new hi({...h,roughness:r.roughness??.9,metalness:r.metalness??0,emissive:new Rt().setRGB(...r.emissive??[0,0,0]),emissiveIntensity:r.emissiveIntensity??1,emissiveMap:r.glowMap?l:null,flatShading:!!r.flatShading}),f=new Qt(a,d);return f.matrixAutoUpdate=!1,r.onGround||f.matrix.fromArray(Array.from(r.matrix)),f.userData.fixed=!!r.onGround,f.castShadow=c>=1,f.receiveShadow=!0,e.add(f),f});return this.scene.add(e),this.dirty=!0,{setMatrix:(s,r)=>{const a=n[s];!a||a.userData.fixed||(a.matrix.fromArray(Array.from(r)),a.matrixWorldNeedsUpdate=!0,this.dirty=!0)},setEmissive:(s,r,a,o,l)=>{var h;const c=(h=n[s])==null?void 0:h.material;c instanceof hi&&(c.emissive.setRGB(r,a,o),c.emissiveIntensity=l,this.dirty=!0)},remove:()=>{var s;this.scene.remove(e);for(const r of n){r.geometry.dispose();const a=r.material;(s=a.map)==null||s.dispose(),a.dispose()}this.dirty=!0}}}addPad(t){const e=t.radius??t.halfWidth??5,n=t.radius??t.halfDepth??5,s=t.heading??0,r=Math.cos(s),a=Math.sin(s);let o=1/0,l=-1/0;for(const[u,g]of[[0,0],[-e,-n],[e,-n],[e,n],[-e,n],[0,-n],[0,n],[-e,0],[e,0]]){const v=this.hf.yAt(t.x+u*r+g*a,t.z-u*a+g*r);o=Math.min(o,v),l=Math.max(l,v)}const c=l+(t.lift??.25),h=c-o+1,d=t.radius?new yo(t.radius,t.radius,h,24):new yi(e*2,h,n*2),f=new Qt(d,new hi({color:new Rt().setRGB(...t.color),roughness:1}));return f.position.set(t.x,c-h/2,t.z),f.rotation.y=s,f.receiveShadow=!0,f.name="guest-pad",this.scene.add(f),this.dirty=!0,c}setSolarMinutes(t){!this.atmosphere||t===this.solarMinutes||(this.solarMinutes=t,this.atmosphere.setSolar(t),this.dirty=!0)}roadSpot(t){const e=t.trim().toLowerCase();let n=null;for(const g of this.roadPaths)g.name.toLowerCase()===e&&(!n||g.length>n.length)&&(n=g);if(!n)return null;const s=n.pts.length/3,r=0,a=s-1,o=s>>1;let l=n.pts[a*3]-n.pts[r*3],c=n.pts[a*3+2]-n.pts[r*3+2];const h=Math.hypot(l,c)||1;l/=h,c/=h;const d=Math.min(70,h*.5),f=n.pts[o*3]-l*d,u=n.pts[o*3+2]-c*d;return{x:f,y:this.hf.yAt(f,u)+38,z:u,yaw:Math.atan2(-l,-c),pitch:-.42}}groundAt(t,e){return this.hf?this.hf.yAt(t,e):0}nearestCar(t,e,n){var s;return((s=this.life)==null?void 0:s.nearestCar(t,e,n))??null}addCars(t){var e;(e=this.life)==null||e.addCars(t),this.dirty=!0}driveCar(t,e,n,s,r,a,o=0,l=0){var h;const c=((h=this.life)==null?void 0:h.driveCar(t,e,n,s,r,a,o,l))??!1;return this.dirty=!0,c}solidAt(t,e){var s;const n=(s=this.solid)==null?void 0:s.get(`${Math.floor(t/16)}_${Math.floor(e/16)}`);if(!n)return!1;for(const r of n){let a=!1;for(let o=0,l=r.length/2-1;o<r.length/2;l=o++){const c=r[o*2],h=r[o*2+1],d=r[l*2],f=r[l*2+1];h>e!=f>e&&t<(d-c)*(e-h)/(f-h)+c&&(a=!a)}if(a)return!0}return!1}get waterLevel(){return this.tide.value*Ln}get bounds(){return this.hf?[this.hf.xMin,this.hf.xMax,this.hf.zMin,this.hf.zMax]:[-4e3,4e3,-3440,3440]}setTimeOfDay(t){var e;(e=this.atmosphere)==null||e.set(t,!this.animating),this.dirty=!0}setTide(t){var e;this.water&&(this.water.setTide(le.clamp(t,Ah,Rh)),(e=this.life)==null||e.setTide(this.tide.value*Ln),this.dirty=!0)}setLabelsVisible(t){var e;(e=this.labels)==null||e.setVisible(t),this.dirty=!0}setLabelObstacles(t){var e;(e=this.labels)==null||e.setObstacles(t),this.dirty=!0}flyToPlace(t){const e=this.places.find(n=>n.id===t);e&&this.fly({x:e.x,z:e.z,dist:e.view[0],polar:e.view[1],azimuth:e.view[2]},2.2)}resetView(){this.fly(rs,1.8)}setView(t,e,n,s,r,a=1.5){this.fly({x:t,z:e,dist:n,polar:s,azimuth:r},a)}faceNorth(){const t=this.currentView();this.fly({...t,azimuth:0},.8)}zoomBy(t){const e=this.currentView();this.fly({...e,dist:le.clamp(e.dist*t,this.controls.minDistance,this.controls.maxDistance)},.35)}dispose(){var t,e,n;if(this.disposed=!0,this.abort.abort(),cancelAnimationFrame(this.raf),(t=this.resizeObserver)==null||t.disconnect(),(e=this.labels)==null||e.dispose(),(n=this.controls)==null||n.dispose(),!!this.renderer){for(const s of this.detailMaps)s.dispose();this.renderer.domElement.removeEventListener("keydown",this.onKey),this.scene.traverse(s=>{var o,l;const r=s;(l=(o=r.geometry)==null?void 0:o.dispose)==null||l.call(o);const a=Array.isArray(r.material)?r.material:r.material?[r.material]:[];for(const c of a){for(const h of Object.values(c))h instanceof Ee&&h.dispose();c.dispose()}}),this.renderer.dispose(),this.renderer.domElement.remove()}}pickQuality(){if(this.opts.quality)return this.opts.quality;const t=new URLSearchParams(window.location.search).get("quality");if(t==="high"||t==="medium"||t==="low")return t;const e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),s=n?String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)):"";if(/swiftshader|llvmpipe|software/i.test(s))return"low";const r=navigator.deviceMemory??8;return window.matchMedia("(pointer: coarse)").matches||r<=4?"medium":"high"}setupControls(){const t=this.controls=new Eg(this.camera,this.renderer.domElement);t.enableDamping=!0,t.dampingFactor=.09,t.screenSpacePanning=!1,t.zoomToCursor=!0,t.minDistance=70,t.maxDistance=12e3,t.maxPolarAngle=le.degToRad(84),t.zoomSpeed=1.1,t.addEventListener("start",()=>{this.flight=void 0}),t.addEventListener("change",()=>{const e=t.target,n=this.hf;e.x=le.clamp(e.x,n.xMin,n.xMax),e.z=le.clamp(e.z,n.zMin,n.zMax),e.y=0,this.dirty=!0}),this.renderer.domElement.addEventListener("keydown",this.onKey)}clampView(t){var e,n;return{x:le.clamp(t.x,this.hf.xMin,this.hf.xMax),z:le.clamp(t.z,this.hf.zMin,this.hf.zMax),dist:le.clamp(t.dist,((e=this.controls)==null?void 0:e.minDistance)??70,((n=this.controls)==null?void 0:n.maxDistance)??12e3),polar:le.clamp(t.polar,2,84),azimuth:t.azimuth}}currentView(){const t=this.controls.target,e=this.camera.position.clone().sub(t),n=new br().setFromVector3(e);return{x:t.x,z:t.z,dist:n.radius,polar:le.radToDeg(n.phi),azimuth:le.radToDeg(n.theta)}}applyView(t){const e=new br(t.dist,le.degToRad(t.polar),le.degToRad(t.azimuth)),n=this.controls.target.set(t.x,0,t.z);this.camera.position.setFromSpherical(e).add(n),this.camera.lookAt(n),this.dirty=!0}fly(t,e){if(!this.controls||this.external)return;if(t=this.clampView(t),!this.animating){this.flight=void 0,this.applyView(t),this.controls.update();return}const n=this.currentView();let s=(t.azimuth-n.azimuth)%360;s>180&&(s-=360),s<-180&&(s+=360),this.flight={from:n,to:{...t,azimuth:n.azimuth+s},t:0,duration:e}}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.fov=this.external?60:t/e<.8?52:38,this.camera.updateProjectionMatrix(),this.dirty=!0}}const Zo="Map data © OpenStreetMap contributors · Elevation © Geoscience Australia (CC BY 4.0)",H_=`
.inv-embed, .inv-embed-layer { position: absolute; inset: 0; overflow: hidden; }
/* the labels sit over the model but never take a touch: drags and pinches must reach the canvas underneath */
.inv-embed-labels, .inv-embed .inv-label { pointer-events: none; }
.inv-embed-credit { position: absolute; left: 50%; bottom: var(--inv-credit-bottom, 6px); transform: translateX(-50%); margin: 0; max-width: calc(100% - 24px);
  padding: 2px 8px; border-radius: 4px; background: rgba(13, 24, 30, 0.7); color: rgba(255, 255, 255, 0.82); font: 10px/1.4 system-ui, sans-serif; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; pointer-events: none; }
`;function V_(i,t){if(!document.querySelector("style[data-inverloch-model]")){const f=document.createElement("style");f.setAttribute("data-inverloch-model",""),f.textContent=Nn+H_,document.head.appendChild(f)}const e=document.createElement("div");e.className="inv-embed";const n=document.createElement("div");n.className="inv-embed-layer";const s=document.createElement("div");s.className="inv-embed-layer inv-embed-labels";const r=document.createElement("p");r.className="inv-embed-credit",r.textContent=Zo,e.append(n,s,r),i.appendChild(e);const a=typeof t.assets=="string"?{height:t.assets+"height.png",ground:t.assets+"ground.webp",town:t.assets+"town.json",detail:t.assets+"detail.json"}:t.assets;let o=[],l=!1,c;const h=new Promise((f,u)=>c={ok:f,fail:u}),d=new G_(n,s,{onProgress:(f,u)=>{var g;return(g=t.onProgress)==null?void 0:g.call(t,f,u)},onReady:f=>{o=f.places.map(u=>{const g=Math.min(Math.max(u.view[0]*.55,90),1500),v=u.view[1]*Math.PI/180,m=u.view[2]*Math.PI/180,p=u.x+g*Math.sin(v)*Math.sin(m),x=u.z+g*Math.sin(v)*Math.cos(m),S=Math.max(d.groundAt(p,x),d.waterLevel)+Math.max(g*Math.cos(v),20),M=u.x-p,w=u.y-10-S,E=u.z-x;return{id:u.id,name:u.name,kind:u.kind,x:p,y:S,z:x,yaw:Math.atan2(-M,-E),pitch:Math.atan2(w,Math.hypot(M,E)),tx:u.x,tz:u.z}}),t.labels===!1&&d.setLabelsVisible(!1),l=!0,c.ok()},onError:f=>{var u;return l?(u=t.onError)==null?void 0:u.call(t,f):c.fail(new Error(f))},onCompass:()=>{}},{assets:a,external:!0,quality:t.quality,clear:t.clear,clearLatLon:t.clearLatLon,clearPolygons:t.clearPolygons,detailLatLon:t.detailLatLon});return d.init(),{ready:h,setCamera:(f,u,g,v,m)=>d.setExternalCamera(f,u,g,v,m),setMinutes:f=>d.setSolarMinutes(f),setTide:f=>d.setTide(f),setAnimating:f=>d.setAnimating(f),setLabelsVisible:f=>d.setLabelsVisible(f),groundAt:(f,u)=>d.groundAt(f,u),waterLevel:()=>d.waterLevel,bounds:()=>d.bounds,fromLatLon:(f,u)=>d.fromLatLon(f,u),setMode:f=>d.setExternal(f!=="bird"),getCamera:()=>d.getCamera(),flyToPlace:f=>d.flyToPlace(f),lookAt:(f,u,g,v,m)=>d.setView(f,u,g,v,m),addParts:f=>d.addParts(f),addPad:f=>d.addPad(f),spots:()=>o,nearestCar:(f,u,g)=>d.nearestCar(f,u,g),driveCar:(f,u,g,v,m,p,x,S)=>d.driveCar(f,u,g,v,m,p,x,S),solidAt:(f,u)=>d.solidAt(f,u),addCars:f=>d.addCars(f),roadSpot:f=>{const u=d.roadSpot(f);return u?{id:"road:"+f,name:f,kind:"landmark",...u,tx:u.x-Math.sin(u.yaw)*70,tz:u.z-Math.cos(u.yaw)*70}:null},tide:{min:Ah,max:Rh,initial:Ch},credit:Zo,dispose:()=>{d.dispose(),e.remove()}}}return En.CREDIT=Zo,En.create=V_,Object.defineProperty(En,Symbol.toStringTag,{value:"Module"}),En}({});
