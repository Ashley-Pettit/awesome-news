var InverlochModel=function(yn){"use strict";var K_=Object.defineProperty;var $_=(yn,Un,Qn)=>Un in yn?K_(yn,Un,{enumerable:!0,configurable:!0,writable:!0,value:Qn}):yn[Un]=Qn;var ct=(yn,Un,Qn)=>$_(yn,typeof Un!="symbol"?Un+"":Un,Qn);const Un='.inv-label{position:absolute;left:0;top:0;pointer-events:auto;font:600 12px/1 Space Grotesk,system-ui,sans-serif;padding:6px 10px;border-radius:999px;background:#0c1c24e6;color:#fff;border:1px solid rgba(255,255,255,.2);white-space:nowrap;cursor:pointer;will-change:transform}.inv-label:after{content:"";position:absolute;left:50%;bottom:-8px;width:1px;height:8px;background:#ffffffbf}.inv-label:hover{background:#0b7d9c}.inv-label--nature{background:#183826eb}.inv-label--nature:hover{background:#2c7a4b}.inv-label--water{background:none;border-color:transparent;color:#f1fbff;font-style:italic;font-weight:500;font-size:13px;letter-spacing:.1em;text-shadow:0 1px 2px rgba(0,35,60,.95),0 0 8px rgba(0,35,60,.7)}.inv-label--water:after{display:none}.inv-label--water:hover{background:#0c1c2499}.inv-range{-moz-appearance:none;appearance:none;-webkit-appearance:none;height:28px;background:transparent;cursor:pointer}.inv-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range:focus-visible{outline:2px solid #ffd200;outline-offset:4px;border-radius:4px}';/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qn="187",Fn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},jn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gh=0,nl=1,Hh=2,as=1,Vh=2,os=3,ti=0,Ve=1,ze=2,Ri=0,ls=1,$r=2,il=3,sl=4,Wh=5,Ci=100,Xh=101,qh=102,Yh=103,Zh=104,Kh=200,$h=201,Jh=202,Qh=203,rl=204,al=205,jh=206,tu=207,eu=208,nu=209,iu=210,su=211,ru=212,au=213,ou=214,Jr=0,Qr=1,jr=2,cs=3,ta=4,ea=5,na=6,ia=7,sa=0,lu=1,cu=2,On=0,ol=1,ll=2,cl=3,hl=4,ul=5,fl=6,ra=7,dl=300,Pi=301,hs=302,aa=303,oa=304,Os=1e3,hn=1001,la=1002,Ue=1003,hu=1004,zs=1005,We=1006,ca=1007,En=1008,Ke=1009,pl=1010,ml=1011,us=1012,ha=1013,bn=1014,un=1015,fn=1016,ua=1017,fa=1018,Di=1020,gl=35902,_l=35899,xl=1021,vl=1022,wn=1023,ei=1026,ni=1027,da=1028,pa=1029,ii=1030,ma=1031,ga=1033,Bs=33776,ks=33777,Gs=33778,Hs=33779,_a=35840,xa=35841,va=35842,Ma=35843,Sa=36196,ya=37492,Ea=37496,ba=37488,wa=37489,Vs=37490,Ta=37491,Aa=37808,Ra=37809,Ca=37810,Pa=37811,Da=37812,La=37813,Ia=37814,Na=37815,Ua=37816,Fa=37817,Oa=37818,za=37819,Ba=37820,ka=37821,Ga=36492,Ha=36494,Va=36495,Wa=36283,Xa=36284,Ws=36285,qa=36286,uu=3200,Xs=0,fu=1,si="",ye="srgb",qs="srgb-linear",Ys="linear",ne="srgb",Ya=7680,du=519,pu=512,mu=513,gu=514,Ml=515,_u=516,xu=517,Sl=518,yl=519,vu=35044,Zs=35048,El="300 es",dn=2e3,fs=2001;function Mu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Su(){const i=ds("canvas");return i.style.display="block",i}const bl={};function wl(...i){const t="THREE."+i.shift();console.log(t,...i)}function Tl(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Nt(...i){i=Tl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Kt(...i){i=Tl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ks(...i){const t=i.join(" ");t in bl||(bl[t]=!0,Nt(...i))}function yu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Eu={[Jr]:Jr,[jr]:na,[ta]:ta,[cs]:ea,[Qr]:Qr,[na]:jr,[ia]:ia,[ea]:cs};class ri{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Al=1234567;const ps=Math.PI/180,ms=180/Math.PI;function Li(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function Za(i,t){return(i%t+t)%t}function bu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function wu(i,t,e){return i!==t?(e-i)/(t-i):0}function gs(i,t,e){return(1-e)*i+e*t}function Tu(i,t,e,n){return gs(i,t,1-Math.exp(-e*n))}function Au(i,t=1){return t-Math.abs(Za(i,t*2)-t)}function Ru(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Cu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Pu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Du(i,t){return i+Math.random()*(t-i)}function Lu(i){return i*(.5-Math.random())}function Iu(i){i!==void 0&&(Al=i);let t=Al+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nu(i){return i*ps}function Uu(i){return i*ms}function Fu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ou(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Rl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zu(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ka(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Cl(i,t){if(t.constructor===Float32Array)return i;const e=Ka(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Pl(i,t){if(t.constructor===Float32Array)return i;const e=Ka(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const le={DEG2RAD:ps,RAD2DEG:ms,generateUUID:Li,clamp:Vt,euclideanModulo:Za,mapLinear:bu,inverseLerp:wu,lerp:gs,damp:Tu,pingpong:Au,smoothstep:Ru,smootherstep:Cu,randInt:Pu,randFloat:Du,randFloatSpread:Lu,seededRandom:Iu,degToRad:Nu,radToDeg:Uu,isPowerOfTwo:Fu,ceilPowerOfTwo:Ou,floorPowerOfTwo:Rl,setQuaternionFromProperEuler:zu,normalize:Pl,denormalize:Cl},Ko=class Ko{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ko.prototype.isVector2=!0;let Lt=Ko;class pn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*v;m<0&&(d=-d,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){const x=Math.acos(m),y=Math.sin(x);p=Math.sin(p*x)/y,o=Math.sin(o*x)/y,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o;const x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const $o=class $o{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $a.copy(this).projectOnVector(t),this.sub($a)}reflect(t){return this.sub($a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$o.prototype.isVector3=!0;let G=$o;const $a=new G,Dl=new pn,Jo=class Jo{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],x=s[1],y=s[4],M=s[7],b=s[2],E=s[5],_=s[8];return r[0]=a*v+o*x+l*b,r[3]=a*m+o*y+l*E,r[6]=a*p+o*M+l*_,r[1]=c*v+h*x+u*b,r[4]=c*m+h*y+u*E,r[7]=c*p+h*M+u*_,r[2]=d*v+f*x+g*b,r[5]=d*m+f*y+g*E,r[8]=d*p+f*M+g*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ja.makeScale(t,e)),this}rotate(t){return Ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ja.makeRotation(-t)),this}translate(t,e){return Ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Jo.prototype.isMatrix3=!0;let Ut=Jo;const Ja=new Ut,Ll=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Il=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bu(){const i={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ne&&(s.r=zn(s.r),s.g=zn(s.g),s.b=zn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ne&&(s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?Ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qs]:{primaries:t,whitePoint:n,transfer:Ys,toXYZ:Ll,fromXYZ:Il,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:Ll,fromXYZ:Il,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}}),i}const Yt=Bu();function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ii(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ni;class ku{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ni===void 0&&(Ni=ds("canvas")),Ni.width=t.width,Ni.height=t.height;const s=Ni.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ni}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ds("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zn(e[n]/255)*255):e[n]=zn(e[n]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gu=0;class Qa{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Li(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ja(s[a].image)):r.push(ja(s[a]))}else r=ja(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ja(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ku.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let Hu=0;const to=new G;class Ee extends ri{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=hn,s=hn,r=We,a=En,o=wn,l=Ke,c=Ee.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Li(),this.name="",this.source=new Qa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(to).x}get height(){return this.source.getSize(to).y}get depth(){return this.source.getSize(to).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Os:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case la:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Os:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case la:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null,Ee.DEFAULT_MAPPING=dl,Ee.DEFAULT_ANISOTROPY=1;const Qo=class Qo{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,M=(f+1)/2,b=(p+1)/2,E=(h+d)/4,_=(u+v)/4,S=(g+m)/4;return y>M&&y>b?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=_/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=S/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=_/r,s=S/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qo.prototype.isVector4=!0;let ce=Qo;class Vu extends ri{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ee({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Qa(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends Vu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Nl extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wu extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Yr=class Yr{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),a=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xu,t,qu)}lookAt(t,e,n){const s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),ai.crossVectors(n,$e),ai.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),ai.crossVectors(n,$e)),ai.normalize(),$s.crossVectors($e,ai),s[0]=ai.x,s[4]=$s.x,s[8]=$e.x,s[1]=ai.y,s[5]=$s.y,s[9]=$e.y,s[2]=ai.z,s[6]=$s.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],y=n[7],M=n[11],b=n[15],E=s[0],_=s[4],S=s[8],R=s[12],w=s[1],C=s[5],D=s[9],O=s[13],P=s[2],z=s[6],U=s[10],I=s[14],X=s[3],N=s[7],B=s[11],H=s[15];return r[0]=a*E+o*w+l*P+c*X,r[4]=a*_+o*C+l*z+c*N,r[8]=a*S+o*D+l*U+c*B,r[12]=a*R+o*O+l*I+c*H,r[1]=h*E+u*w+d*P+f*X,r[5]=h*_+u*C+d*z+f*N,r[9]=h*S+u*D+d*U+f*B,r[13]=h*R+u*O+d*I+f*H,r[2]=g*E+v*w+m*P+p*X,r[6]=g*_+v*C+m*z+p*N,r[10]=g*S+v*D+m*U+p*B,r[14]=g*R+v*O+m*I+p*H,r[3]=x*E+y*w+M*P+b*X,r[7]=x*_+y*C+M*z+b*N,r[11]=x*S+y*D+M*U+b*B,r[15]=x*R+y*O+M*I+b*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15],x=l*f-c*d,y=o*f-c*u,M=o*d-l*u,b=a*f-c*h,E=a*d-l*h,_=a*u-o*h;return e*(v*x-m*y+p*M)-n*(g*x-m*b+p*E)+s*(g*y-v*b+p*_)-r*(g*M-v*E+m*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=e*o-n*a,y=e*l-s*a,M=e*c-r*a,b=n*l-s*o,E=n*c-r*o,_=s*c-r*l,S=h*v-u*g,R=h*m-d*g,w=h*p-f*g,C=u*m-d*v,D=u*p-f*v,O=d*p-f*m,P=x*O-y*D+M*C+b*w-E*R+_*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/P;return t[0]=(o*O-l*D+c*C)*z,t[1]=(s*D-n*O-r*C)*z,t[2]=(v*_-m*E+p*b)*z,t[3]=(d*E-u*_-f*b)*z,t[4]=(l*w-a*O-c*R)*z,t[5]=(e*O-s*w+r*R)*z,t[6]=(m*M-g*_-p*y)*z,t[7]=(h*_-d*M+f*y)*z,t[8]=(a*D-o*w+c*S)*z,t[9]=(n*w-e*D-r*S)*z,t[10]=(g*E-v*M+p*x)*z,t[11]=(u*M-h*E-f*x)*z,t[12]=(o*R-a*C-l*S)*z,t[13]=(e*C-n*R+s*S)*z,t[14]=(v*y-g*b-m*x)*z,t[15]=(h*b-u*y+d*x)*z,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,x=l*c,y=l*h,M=l*u,b=n.x,E=n.y,_=n.z;return s[0]=(1-(v+p))*b,s[1]=(f+M)*b,s[2]=(g-y)*b,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(d+p))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+y)*_,s[9]=(m-x)*_,s[10]=(1-(d+v))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ui.set(s[0],s[1],s[2]).length();const o=Ui.set(s[4],s[5],s[6]).length(),l=Ui.set(s[8],s[9],s[10]).length();r<0&&(a=-a),mn.copy(this);const c=1/a,h=1/o,u=1/l;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,e.setFromRotationMatrix(mn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=dn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===dn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===fs)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=dn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===dn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===fs)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Yr.prototype.isMatrix4=!0;let $t=Yr;const Ui=new G,mn=new $t,Xu=new G(0,0,0),qu=new G(1,1,1),ai=new G,$s=new G,$e=new G,Ul=new $t,Fl=new pn;class An{constructor(t=0,e=0,n=0,s=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ul,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fl.setFromEuler(this),this.setFromQuaternion(Fl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class eo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yu=0;const Ol=new G,Fi=new pn,Bn=new $t,Js=new G,_s=new G,Zu=new G,Ku=new pn,zl=new G(1,0,0),Bl=new G(0,1,0),kl=new G(0,0,1),Gl={type:"added"},$u={type:"removed"},Oi={type:"childadded",child:null},no={type:"childremoved",child:null};class Pe extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new G,e=new An,n=new pn,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new Ut}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(zl,t)}rotateY(t){return this.rotateOnAxis(Bl,t)}rotateZ(t){return this.rotateOnAxis(kl,t)}translateOnAxis(t,e){return Ol.copy(t).applyQuaternion(this.quaternion),this.position.add(Ol.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zl,t)}translateY(t){return this.translateOnAxis(Bl,t)}translateZ(t){return this.translateOnAxis(kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Js.copy(t):Js.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(_s,Js,this.up):Bn.lookAt(Js,_s,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gl),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($u),no.child=t,this.dispatchEvent(no),no.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gl),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,Zu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Ku,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Pe.DEFAULT_UP=new G(0,1,0),Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0,Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Je extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ju={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ju)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function so(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?i+(t-i)*6*e:e<.5?t:e<.6666666666666666?i+(t-i)*6*(.6666666666666666-e):i}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=Za(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=so(a,r,t+.3333333333333333),this.g=so(a,r,t),this.b=so(a,r,t-.3333333333333333)}return Yt.colorSpaceToWorking(this,s),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const n=Hl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return Yt.workingToColorSpace(ke.copy(this),t),Math.round(Vt(ke.r*255,0,255))*65536+Math.round(Vt(ke.g*255,0,255))*256+Math.round(Vt(ke.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(ke.copy(this),e);const n=ke.r,s=ke.g,r=ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=ye){Yt.workingToColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,s=ke.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Qs);const n=gs(oi.h,Qs.h,e),s=gs(oi.s,Qs.s,e),r=gs(oi.l,Qs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Rt;Rt.NAMES=Hl;class Qu extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const gn=new G,kn=new G,ro=new G,Gn=new G,zi=new G,Bi=new G,Vl=new G,ao=new G,oo=new G,lo=new G,co=new ce,ho=new ce,uo=new ce;class _n{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),kn.subVectors(n,e),ro.subVectors(t,e);const a=gn.dot(gn),o=gn.dot(kn),l=gn.dot(ro),c=kn.dot(kn),h=kn.dot(ro),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return co.setScalar(0),ho.setScalar(0),uo.setScalar(0),co.fromBufferAttribute(t,e),ho.fromBufferAttribute(t,n),uo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(co,r.x),a.addScaledVector(ho,r.y),a.addScaledVector(uo,r.z),a}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),kn.subVectors(t,e),gn.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),gn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return _n.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;zi.subVectors(s,n),Bi.subVectors(r,n),ao.subVectors(t,n);const l=zi.dot(ao),c=Bi.dot(ao);if(l<=0&&c<=0)return e.copy(n);oo.subVectors(t,s);const h=zi.dot(oo),u=Bi.dot(oo);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(zi,a);lo.subVectors(t,r);const f=zi.dot(lo),g=Bi.dot(lo);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Bi,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Vl.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Vl,o);const p=1/(m+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(zi,a).addScaledVector(Bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class _i{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(t.matrixWorld),this.union(js)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),tr.subVectors(this.max,xs),ki.subVectors(t.a,xs),Gi.subVectors(t.b,xs),Hi.subVectors(t.c,xs),li.subVectors(Gi,ki),ci.subVectors(Hi,Gi),xi.subVectors(ki,Hi);let e=[0,-li.z,li.y,0,-ci.z,ci.y,0,-xi.z,xi.y,li.z,0,-li.x,ci.z,0,-ci.x,xi.z,0,-xi.x,-li.y,li.x,0,-ci.y,ci.x,0,-xi.y,xi.x,0];return!fo(e,ki,Gi,Hi,tr)||(e=[1,0,0,0,1,0,0,0,1],!fo(e,ki,Gi,Hi,tr))?!1:(er.crossVectors(li,ci),e=[er.x,er.y,er.z],fo(e,ki,Gi,Hi,tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Hn=[new G,new G,new G,new G,new G,new G,new G,new G],xn=new G,js=new _i,ki=new G,Gi=new G,Hi=new G,li=new G,ci=new G,xi=new G,xs=new G,tr=new G,er=new G,vi=new G;function fo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vi.fromArray(i,r);const o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Vn=ju();function ju(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function tf(i){Math.abs(i)>65504&&Nt("DataUtils.toHalfFloat(): Value out of range."),i=Vt(i,-65504,65504),Vn.floatView[0]=i;const t=Vn.uint32View[0],e=t>>23&511;return Vn.baseTable[e]+((t&8388607)>>Vn.shiftTable[e])}function ef(i){const t=i>>10;return Vn.uint32View[0]=Vn.mantissaTable[Vn.offsetTable[t]+(i&1023)]+Vn.exponentTable[t],Vn.floatView[0]}class Wl{static toHalfFloat(t){return tf(t)}static fromHalfFloat(t){return ef(t)}}const ve=new G,nr=new Lt;let nf=0;class be extends ri{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vu,this.updateRanges=[],this.gpuType=un,this.version=0,this._normalizationScale=t!==void 0?Ka(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)nr.fromBufferAttribute(this,e),nr.applyMatrix3(t),this.setXY(e,nr.x,nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Cl(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Pl(t,this.array)}}class Xl extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ql extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}}const sf=new _i,vs=new G,po=new G;class Vi{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):sf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(po)),this.expandByPoint(vs.copy(t.center).sub(po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let rf=0;const en=new $t,mo=new Pe,Wi=new G,Qe=new _i,Ms=new _i,De=new G;class we extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mu(t)?ql:Xl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return mo.lookAt(t),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(Qe.min,Ms.min),Qe.expandByPoint(De),De.addVectors(Qe.max,Ms.max),Qe.expandByPoint(De)):(Qe.expandByPoint(Ms.min),Qe.expandByPoint(Ms.max))}Qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)De.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(t,c),De.add(Wi)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new be(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)o[R]=new G,l[R]=new G;const h=new G,u=new G,d=new G,f=new Lt,g=new Lt,v=new Lt,m=new G,p=new G;function x(R,w,C){c[R]=c[w]=c[C]=1,h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),f.fromBufferAttribute(r,R),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,C),u.sub(h),d.sub(h),g.sub(f),v.sub(f);const D=1/(g.x*v.y-v.x*g.y);isFinite(D)&&(m.copy(u).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(D),p.copy(d).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(D),o[R].add(m),o[w].add(m),o[C].add(m),l[R].add(p),l[w].add(p),l[C].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,w=y.length;R<w;++R){const C=y[R],D=C.start,O=C.count;for(let P=D,z=D+O;P<z;P+=3)x(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const M=new G,b=new G,E=new G,_=new G;function S(R){E.fromBufferAttribute(s,R),_.copy(E);const w=o[R];M.copy(w),M.sub(E.multiplyScalar(E.dot(w))).normalize(),b.crossVectors(_,w);const D=b.dot(l[R])<0?-1:1;a.setXYZW(R,M.x,M.y,M.z,D)}for(let R=0,w=n.count;R<w;++R)c[R]&&S(R);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,h=new G,u=new G;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new be(d,h,u)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const go=new G,af=new G,of=new Ut;class Rn{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=go.subVectors(n,e).cross(af.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(go),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||of.getNormalMatrix(t),s=this.coplanarPoint(go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let lf=0;class Mi extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=ls,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=al,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ya,this.stencilZFail=Ya,this.stencilZPass=Ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Rn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Wn=new G,_o=new G,ir=new G,sr=new G;class rr{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){_o.copy(t).add(e).multiplyScalar(.5),ir.copy(e).sub(t).normalize(),sr.copy(this.origin).sub(_o);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ir),o=sr.dot(this.direction),l=-sr.dot(ir),c=sr.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_o).addScaledVector(ir,d),f}intersectSphere(t,e){if(t.radius<0)return null;Wn.subVectors(t.center,this.origin);const n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,g=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=n.x-a.x,x=n.y-a.y,y=n.z-a.z,M=Math.abs(l),b=Math.abs(c),E=Math.abs(h);let _,S,R,w,C,D,O,P,z,U,I,X;if(M>=b&&M>=E?(R=l,D=u,z=g,X=p,l>=0?(_=c,S=h,w=d,C=f,O=v,P=m,U=x,I=y):(_=h,S=c,w=f,C=d,O=m,P=v,U=y,I=x)):b>=E?(R=c,D=d,z=v,X=x,c>=0?(_=h,S=l,w=f,C=u,O=m,P=g,U=y,I=p):(_=l,S=h,w=u,C=f,O=g,P=m,U=p,I=y)):(R=h,D=f,z=m,X=y,h>=0?(_=l,S=c,w=u,C=d,O=g,P=v,U=p,I=x):(_=c,S=l,w=d,C=u,O=v,P=g,U=x,I=p)),R===0)return null;const N=_/R,B=S/R,H=1/R,it=w-N*D,st=C-B*D,q=O-N*z,et=P-B*z,rt=U-N*X,xt=I-B*X,at=rt*et-xt*q,bt=it*xt-st*rt,Wt=q*st-et*it;if(s){if(at<0||bt<0||Wt<0)return null}else if((at<0||bt<0||Wt<0)&&(at>0||bt>0||Wt>0))return null;const Et=at+bt+Wt;if(Et===0)return null;const Bt=H*(at*D+bt*z+Wt*X);return(Et>0?Bt<0:Bt>0)?null:this.at(Bt/Et,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xn extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Yl=new $t,Si=new rr,ar=new Vi,Zl=new G,or=new G,lr=new G,cr=new G,xo=new G,hr=new G,Kl=new G,ur=new G;class Qt extends Pe{constructor(t=new we,e=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(xo.fromBufferAttribute(u,t),a?hr.addScaledVector(xo,h):hr.addScaledVector(xo.sub(e),h))}e.add(hr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(r),Si.copy(t.ray).recast(t.near),!(ar.containsPoint(Si.origin)===!1&&(Si.intersectSphere(ar,Zl)===null||Si.origin.distanceToSquared(Zl)>(t.far-t.near)**2))&&(Yl.copy(r).invert(),Si.copy(t.ray).applyMatrix4(Yl),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,b=y;M<b;M+=3){const E=o.getX(M),_=o.getX(M+1),S=o.getX(M+2);s=fr(this,p,t,n,c,h,u,E,_,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);s=fr(this,a,t,n,c,h,u,x,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,b=y;M<b;M+=3){const E=M,_=M+1,S=M+2;s=fr(this,p,t,n,c,h,u,E,_,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=m,y=m+1,M=m+2;s=fr(this,a,t,n,c,h,u,x,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function cf(i,t,e,n,s,r,a,o){let l;if(t.side===Ve?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ti,o),l===null)return null;ur.copy(o),ur.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ur);return c<e.near||c>e.far?null:{distance:c,point:ur.clone(),object:i}}function fr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,or),i.getVertexPosition(l,lr),i.getVertexPosition(c,cr);const h=cf(i,t,e,n,or,lr,cr,Kl);if(h){const u=new G;_n.getBarycoord(Kl,or,lr,cr,u),s&&(h.uv=_n.getInterpolatedAttribute(s,o,l,c,u,new Lt)),r&&(h.uv1=_n.getInterpolatedAttribute(r,o,l,c,u,new Lt)),a&&(h.normal=_n.getInterpolatedAttribute(a,o,l,c,u,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new G,materialIndex:0};_n.getNormal(or,lr,cr,d.normal),h.face=d,h.barycoord=u}return h}class dr extends Ee{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ue,h=Ue,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $l extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xi=new $t,Jl=new $t,pr=[],Ql=new _i,hf=new $t,Ss=new Qt,ys=new Vi;class vn extends Qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $l(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,hf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),Ql.copy(t.boundingBox).applyMatrix4(Xi),this.boundingBox.union(Ql)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),ys.copy(t.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ys.copy(this.boundingSphere),ys.applyMatrix4(n),t.ray.intersectsSphere(ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xi),Jl.multiplyMatrices(n,Xi),Ss.matrixWorld=Jl,Ss.raycast(t,pr);for(let a=0,o=pr.length;a<o;a++){const l=pr[a];l.instanceId=r,l.object=this,e.push(l)}pr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new $l(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new dr(new Float32Array(s*this.count),s,this.count,da,un));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const yi=new Vi,uf=new Lt(.5,.5),mr=new G;class Es{constructor(t=new Rn,e=new Rn,n=new Rn,s=new Rn,r=new Rn,a=new Rn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=dn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],x=r[12],y=r[13],M=r[14],b=r[15];if(s[0].setComponents(c-a,f-h,p-g,b-x).normalize(),s[1].setComponents(c+a,f+h,p+g,b+x).normalize(),s[2].setComponents(c+o,f+u,p+v,b+y).normalize(),s[3].setComponents(c-o,f-u,p-v,b-y).normalize(),n)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,f-d,p-m,b-M).normalize();else if(s[4].setComponents(c-l,f-d,p-m,b-M).normalize(),e===dn)s[5].setComponents(c+l,f+d,p+m,b+M).normalize();else if(e===fs)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){yi.center.set(0,0,0);const e=uf.distanceTo(t.center);return yi.radius=.7071067811865476+e,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(mr.x=s.normal.x>0?t.max.x:t.min.x,mr.y=s.normal.y>0?t.max.y:t.min.y,mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(mr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const jl=new $t;class vo{constructor(){this.coordinateSystem=dn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];jl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Es),n[s].setFromProjectionMatrix(jl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Es),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new vo().copy(this)}}class tc extends Mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const gr=new G,_r=new G,ec=new $t,bs=new rr,xr=new Vi,Mo=new G,nc=new G;class ff extends Pe{constructor(t=new we,e=new tc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)gr.fromBufferAttribute(e,s-1),_r.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=gr.distanceTo(_r);t.setAttribute("lineDistance",new he(n,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(s),xr.radius+=r,t.ray.intersectsSphere(xr)===!1)return;ec.copy(s).invert(),bs.copy(t.ray).applyMatrix4(ec);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=h.getX(v),x=h.getX(v+1),y=vr(this,t,bs,l,p,x,v);y&&e.push(y)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=vr(this,t,bs,l,v,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=vr(this,t,bs,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=vr(this,t,bs,l,g-1,f,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function vr(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(gr.fromBufferAttribute(o,s),_r.fromBufferAttribute(o,r),e.distanceSqToSegment(gr,_r,Mo,nc)>n)return;Mo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Mo);if(!(c<t.near||c>t.far))return{distance:c,point:nc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const ic=new G,sc=new G;class df extends ff{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ic.fromBufferAttribute(e,s),sc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ic.distanceTo(sc);t.setAttribute("lineDistance",new he(n,1))}else Nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rc extends Ee{constructor(t=[],e=Pi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class So extends Ee{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qi extends Ee{constructor(t,e,n=bn,s,r,a,o=Ue,l=Ue,c,h=ei,u=1){if(h!==ei&&h!==ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class ac extends qi{constructor(t,e=bn,n=Pi,s,r,a=Ue,o=Ue,l,c=ei){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class oc extends Ee{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ei extends we{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(u,2));function g(v,m,p,x,y,M,b,E,_,S,R){const w=M/_,C=b/S,D=M/2,O=b/2,P=E/2,z=_+1,U=S+1;let I=0,X=0;const N=new G;for(let B=0;B<U;B++){const H=B*C-O;for(let it=0;it<z;it++){const st=it*w-D;N[v]=st*x,N[m]=H*y,N[p]=P,c.push(N.x,N.y,N.z),N[v]=0,N[m]=0,N[p]=E>0?1:-1,h.push(N.x,N.y,N.z),u.push(it/_),u.push(1-B/S),I+=1}}for(let B=0;B<S;B++)for(let H=0;H<_;H++){const it=d+H+z*B,st=d+H+z*(B+1),q=d+(H+1)+z*(B+1),et=d+(H+1)+z*B;l.push(it,st,et),l.push(st,q,et),X+=6}o.addGroup(f,X,R),f+=X,d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class yo extends we{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;x(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(f,2));function x(){const M=new G,b=new G;let E=0;const _=(e-t)/n;for(let S=0;S<=r;S++){const R=[],w=S/r,C=w*(e-t)+t;for(let D=0;D<=s;D++){const O=D/s,P=O*l+o,z=Math.sin(P),U=Math.cos(P);b.x=C*z,b.y=-w*n+m,b.z=C*U,u.push(b.x,b.y,b.z),M.set(z,_,U).normalize(),d.push(M.x,M.y,M.z),f.push(O,1-w),R.push(g++)}v.push(R)}for(let S=0;S<s;S++)for(let R=0;R<r;R++){const w=v[R][S],C=v[R+1][S],D=v[R+1][S+1],O=v[R][S+1];(t>0||R!==0)&&(h.push(w,C,O),E+=3),(e>0||R!==r-1)&&(h.push(C,D,O),E+=3)}c.addGroup(p,E,0),p+=E}function y(M){const b=g,E=new Lt,_=new G;let S=0;const R=M===!0?t:e,w=M===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;const C=g;for(let D=0;D<=s;D++){const P=D/s*l+o,z=Math.cos(P),U=Math.sin(P);_.x=R*U,_.y=m*w,_.z=R*z,u.push(_.x,_.y,_.z),d.push(0,w,0),E.x=z*.5+.5,E.y=U*.5*w+.5,f.push(E.x,E.y),g++}for(let D=0;D<s;D++){const O=b+D,P=C+D;M===!0?h.push(P,P+1,O):h.push(P+1,P,O),S+=3}c.addGroup(p,S,M===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Eo extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new G,M=new G,b=new G;for(let E=0;E<e.length;E+=3)f(e[E+0],y),f(e[E+1],M),f(e[E+2],b),l(y,M,b,x)}function l(x,y,M,b){const E=b+1,_=[];for(let S=0;S<=E;S++){_[S]=[];const R=x.clone().lerp(M,S/E),w=y.clone().lerp(M,S/E),C=E-S;for(let D=0;D<=C;D++)D===0&&S===E?_[S][D]=R:_[S][D]=R.clone().lerp(w,D/C)}for(let S=0;S<E;S++)for(let R=0;R<2*(E-S)-1;R++){const w=Math.floor(R/2);R%2===0?(d(_[S][w+1]),d(_[S+1][w]),d(_[S][w])):(d(_[S][w+1]),d(_[S+1][w+1]),d(_[S+1][w]))}}function c(x){const y=new G;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(x),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){const x=new G;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const M=m(x)/2/Math.PI+.5,b=p(x)/Math.PI+.5;a.push(M,1-b)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const y=a[x+0],M=a[x+2],b=a[x+4],E=Math.max(y,M,b),_=Math.min(y,M,b);E>.9&&_<.1&&(y<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),b<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,y){const M=x*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function g(){const x=new G,y=new G,M=new G,b=new G,E=new Lt,_=new Lt,S=new Lt;for(let R=0,w=0;R<r.length;R+=9,w+=6){x.set(r[R+0],r[R+1],r[R+2]),y.set(r[R+3],r[R+4],r[R+5]),M.set(r[R+6],r[R+7],r[R+8]),E.set(a[w+0],a[w+1]),_.set(a[w+2],a[w+3]),S.set(a[w+4],a[w+5]),b.copy(x).add(y).add(M).divideScalar(3);const C=m(b);v(E,w+0,x,C),v(_,w+2,y,C),v(S,w+4,M,C)}}function v(x,y,M,b){b<0&&x.x===1&&(a[y]=x.x-1),M.x===0&&M.z===0&&(a[y]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.vertices,t.indices,t.radius,t.detail)}}function pf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=lc(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=vf(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let d=e;d<s;d+=e){const f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return ws(r,a,e,o,l,c,0),a}function lc(i,t,e,n,s){let r;if(s===Pf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=fc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=fc(a/n|0,i[a],i[a+1],r);return r&&Yi(r,r.next)&&(Rs(r),r=r.next),r}function bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Yi(e,e.next)||de(e.prev,e,e.next)===0)){if(Rs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ws(i,t,e,n,s,r,a){if(!i)return;!a&&r&&bf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?gf(i,n,s,r):mf(i)){t.push(l.i,i.i,c.i),Rs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=_f(bi(i),t),ws(i,t,e,n,s,r,2)):a===2&&xf(i,t,e,n,s,r):ws(bi(i),t,e,n,s,r,1);break}}}function mf(i){const t=i.prev,e=i,n=i.next;if(de(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ts(s,o,r,l,a,c,g.x,g.y)&&de(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gf(i,t,e,n){const s=i.prev,r=i,a=i.next;if(de(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),v=Math.max(o,l,c),m=Math.max(h,u,d),p=bo(f,g,t,e,n),x=bo(v,m,t,e,n);let y=i.prevZ,M=i.nextZ;for(;y&&y.z>=p&&M&&M.z<=x;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Ts(o,h,l,u,c,d,y.x,y.y)&&de(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Ts(o,h,l,u,c,d,M.x,M.y)&&de(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Ts(o,h,l,u,c,d,y.x,y.y)&&de(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=x;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Ts(o,h,l,u,c,d,M.x,M.y)&&de(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function _f(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Yi(n,s)&&hc(n,e,e.next,s)&&As(n,s)&&As(s,n)&&(t.push(n.i,e.i,s.i),Rs(e),Rs(e.next),e=i=s),e=e.next}while(e!==i);return bi(e)}function xf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Af(a,o)){let l=uc(a,o);a=bi(a,a.next),l=bi(l,l.next),ws(a,t,e,n,s,r,0),ws(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function vf(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=lc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Tf(c))}s.sort(Mf);for(let r=0;r<s.length;r++)e=Sf(s[r],e);return e}function Mf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Sf(i,t){const e=yf(i,t);if(!e)return t;const n=uc(e,i);return bi(n,n.next),bi(e,e.next)}function yf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Yi(i,e))return e;do{if(Yi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&cc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);As(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Ef(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Ef(i,t){return de(i.prev,i,t.prev)<0&&de(t.next,i,i.next)<0}function bf(i,t,e,n){let s=i;do s.z===0&&(s.z=bo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wf(s)}function wf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function bo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Tf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function cc(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ts(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&cc(i,t,e,n,s,r,a,o)}function Af(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Rf(i,t)&&(As(i,t)&&As(t,i)&&Cf(i,t)&&(de(i.prev,i,t.prev)||de(i,t.prev,t))||Yi(i,t)&&de(i.prev,i,i.next)>0&&de(t.prev,t,t.next)>0)}function de(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Yi(i,t){return i.x===t.x&&i.y===t.y}function hc(i,t,e,n){const s=Sr(de(i,t,e)),r=Sr(de(i,t,n)),a=Sr(de(e,n,i)),o=Sr(de(e,n,t));return!!(s!==r&&a!==o||s===0&&Mr(i,e,t)||r===0&&Mr(i,n,t)||a===0&&Mr(e,i,n)||o===0&&Mr(e,t,n))}function Mr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Sr(i){return i>0?1:i<0?-1:0}function Rf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&hc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function As(i,t){return de(i.prev,i,i.next)<0?de(i,t,i.next)>=0&&de(i,i.prev,t)>=0:de(i,t,i.prev)<0||de(i,i.next,t)<0}function Cf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function uc(i,t){const e=wo(i.i,i.x,i.y),n=wo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function fc(i,t,e,n){const s=wo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Rs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Df{static triangulate(t,e,n=2){return pf(t,e,n)}}class To{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return To.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];dc(t),pc(n,t);let a=t.length;e.forEach(dc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,pc(n,e[l]);const o=Df.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function dc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function pc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ao extends Eo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ao(t.radius,t.detail)}}class hi extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const x=p*d-a;for(let y=0;y<c;y++){const M=y*u-r;g.push(M,-x,0),v.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const y=x+c*p,M=x+c*(p+1),b=x+1+c*(p+1),E=x+1+c*p;f.push(y,M,E),f.push(M,b,E)}this.setIndex(f),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(v,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ro extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new G,d=new G,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n,M=a+y*o,b=t*Math.cos(M),E=Math.sqrt(t*t-b*b);let _=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){const R=S/e,w=s+R*r;u.x=-E*Math.cos(w),u.y=b,u.z=E*Math.sin(w),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(R+_,1-y),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const y=h[p][x+1],M=h[p][x],b=h[p+1][x],E=h[p+1][x+1];(p!==0||a>0)&&f.push(y,M,E),(p!==n-1||l<Math.PI)&&f.push(M,b,E)}this.setIndex(f),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(v,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ro(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Zi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(mc(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(mc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=Zi(i[e]);for(const s in n)t[s]=n[s]}return t}function mc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Lf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const If={clone:Zi,merge:Xe};var Nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nf,this.fragmentShader=Uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Lf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Rt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ce().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"m4":this.uniforms[n].value=new $t().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Ff extends qn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ui extends Mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xs,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _c extends Mi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xs,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=sa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Of extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zf extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Co={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(xc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!xc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function xc(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Bf{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const kf=new Bf;class Po{constructor(t){this.manager=t!==void 0?t:kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Po.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ki=new WeakMap;class Gf extends Po{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Co.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=Ki.get(a);u===void 0&&(u=[],Ki.set(a,u)),u.push({onLoad:e,onError:s})}return a}const o=ds("img");function l(){h(),e&&e(this);const u=Ki.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Ki.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),Co.remove(`image:${t}`);const d=Ki.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Ki.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Co.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}}class vc extends Po{constructor(t){super(t)}load(t,e,n,s){const r=new Ee,a=new Gf(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Mc extends Pe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Hf extends Mc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Do=new $t,Sc=new G,yc=new G;class Vf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Ke,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sc),yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Do.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Do,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===fs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Do)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yr=new G,Er=new pn,Cn=new G;class Ec extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(yr,Er,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yr,Er,Cn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(yr,Er,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yr,Er,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fi=new G,bc=new Lt,wc=new Lt;class Mn extends Ec{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,bc,wc),e.subVectors(wc,bc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ps*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Tc extends Ec{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Wf extends Vf{constructor(){super(new Tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xf extends Mc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Wf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const $i=-90,Ji=1;class Lo extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn($i,Ji,t,e);s.layers=this.layers,this.add(s);const r=new Mn($i,Ji,t,e);r.layers=this.layers,this.add(r);const a=new Mn($i,Ji,t,e);a.layers=this.layers,this.add(a);const o=new Mn($i,Ji,t,e);o.layers=this.layers,this.add(o);const l=new Mn($i,Ji,t,e);l.layers=this.layers,this.add(l);const c=new Mn($i,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class qf extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const Ac=new $t;class Yf{constructor(t,e,n=0,s=1/0){this.ray=new rr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new eo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ac.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ac),this}intersectObject(t,e=!0,n=[]){return Io(t,this,n,e),n.sort(Rc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Io(t[s],this,n,e);return n.sort(Rc),n}}function Rc(i,t){return i.distance-t.distance}function Io(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Io(r[a],t,e,!0)}}class br{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Vt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const jo=class jo{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};jo.prototype.isMatrix2=!0;let Cc=jo;class Zf extends ri{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Pc(i,t,e,n){const s=Kf(n);switch(e){case xl:return i*t;case da:return i*t/s.components*s.byteLength;case pa:return i*t/s.components*s.byteLength;case ii:return i*t*2/s.components*s.byteLength;case ma:return i*t*2/s.components*s.byteLength;case vl:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case ga:return i*t*4/s.components*s.byteLength;case Bs:case ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gs:case Hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:case Ma:return Math.max(i,16)*Math.max(t,8)/4;case _a:case va:return Math.max(i,8)*Math.max(t,8)/2;case Sa:case ya:case ba:case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ea:case Vs:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ga:case Ha:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ws:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kf(i){switch(i){case Ke:case pl:return{byteLength:1,components:1};case us:case ml:case fn:return{byteLength:2,components:1};case ua:case fa:return{byteLength:2,components:4};case bn:case ha:case un:return{byteLength:4,components:1};case gl:case _l:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qn}})),typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qn);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dc(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $f(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qf=`#ifdef USE_ALPHAHASH
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
#endif`,jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ed=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,id=`#ifdef USE_AOMAP
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
#endif`,sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rd=`#ifdef USE_BATCHING
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
#endif`,ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hd=`#ifdef USE_IRIDESCENCE
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
#endif`,ud=`#ifdef USE_BUMPMAP
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
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Md=`#define PI 3.141592653589793
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
} // validated`,Sd=`vec3 transformedNormal = objectNormal;
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
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Td="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ad=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Od=`#ifdef USE_GRADIENTMAP
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
}`,zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yd=`PhysicalMaterial material;
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
#endif`,Zd=`uniform sampler2D dfgLUT;
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
}`,Kd=`
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
#endif`,$d=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qd=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,jd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
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
#endif`,fp=`#ifdef USE_MORPHTARGETS
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
#endif`,dp=`#ifdef USE_MORPHTARGETS
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
#endif`;const Gt={alphahash_fragment:Jf,alphahash_pars_fragment:Qf,alphamap_fragment:jf,alphamap_pars_fragment:td,alphatest_fragment:ed,alphatest_pars_fragment:nd,aomap_fragment:id,aomap_pars_fragment:sd,batching_pars_vertex:rd,batching_vertex:ad,begin_vertex:od,beginnormal_vertex:ld,bsdfs:cd,iridescence_fragment:hd,bumpmap_pars_fragment:ud,clipping_planes_fragment:fd,clipping_planes_pars_fragment:dd,clipping_planes_pars_vertex:pd,clipping_planes_vertex:md,color_fragment:gd,color_pars_fragment:_d,color_pars_vertex:xd,color_vertex:vd,common:Md,defaultnormal_vertex:Sd,displacementmap_pars_vertex:yd,displacementmap_vertex:Ed,emissivemap_fragment:bd,emissivemap_pars_fragment:wd,colorspace_fragment:Td,colorspace_pars_fragment:Ad,envmap_fragment:Rd,envmap_common_pars_fragment:Cd,envmap_pars_fragment:Pd,envmap_pars_vertex:Dd,envmap_physical_pars_fragment:Hd,envmap_vertex:Ld,fog_vertex:Id,fog_pars_vertex:Nd,fog_fragment:Ud,fog_pars_fragment:Fd,gradientmap_pars_fragment:Od,lightmap_pars_fragment:zd,lights_lambert_fragment:Bd,lights_lambert_pars_fragment:kd,lights_pars_begin:Gd,lights_toon_fragment:Vd,lights_toon_pars_fragment:Wd,lights_phong_fragment:Xd,lights_phong_pars_fragment:qd,lights_physical_fragment:Yd,lights_physical_pars_fragment:Zd,lights_fragment_begin:Kd,lights_fragment_maps:$d,lights_fragment_end:Jd,lightprobes_pars_fragment:Qd,logdepthbuf_fragment:jd,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:np,map_fragment:ip,map_pars_fragment:sp,map_particle_fragment:rp,map_particle_pars_fragment:ap,metalnessmap_fragment:op,metalnessmap_pars_fragment:lp,morphinstance_vertex:cp,morphcolor_vertex:hp,morphnormal_vertex:up,morphtarget_pars_vertex:fp,morphtarget_vertex:dp,normal_fragment_begin:pp,normal_fragment_maps:mp,normal_pars_fragment:gp,normal_pars_vertex:_p,normal_vertex:xp,normalmap_pars_fragment:vp,clearcoat_normal_fragment_begin:Mp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:yp,iridescence_pars_fragment:Ep,opaque_fragment:bp,packing:wp,premultiplied_alpha_fragment:Tp,project_vertex:Ap,dithering_fragment:Rp,dithering_pars_fragment:Cp,roughnessmap_fragment:Pp,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Ip,shadowmap_vertex:Np,shadowmask_pars_fragment:Up,skinbase_vertex:Fp,skinning_pars_vertex:Op,skinning_vertex:zp,skinnormal_vertex:Bp,specularmap_fragment:kp,specularmap_pars_fragment:Gp,tonemapping_fragment:Hp,tonemapping_pars_fragment:Vp,transmission_fragment:Wp,transmission_pars_fragment:Xp,uv_pars_fragment:qp,uv_pars_vertex:Yp,uv_vertex:Zp,worldpos_vertex:Kp,background_vert:`varying vec2 vUv;
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
}`},Mt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Pn={basic:{uniforms:Xe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Xe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Xe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Xe([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Xe([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Xe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Xe([Mt.points,Mt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Xe([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Xe([Mt.common,Mt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Xe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Xe([Mt.sprite,Mt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:Xe([Mt.common,Mt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:Xe([Mt.lights,Mt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Pn.physical={uniforms:Xe([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const wr={r:0,b:0,g:0},$p=new $t,Lc=new Ut;Lc.set(-1,0,0,0,1,0,0,0,1);function Jp(i,t,e,n,s,r){const a=new Rt(0);let o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){const M=x.backgroundBlurriness>0;y=t.get(y,M)}return y}function g(x){let y=!1;const M=f(x);M===null?m(a,o):M&&M.isColor&&(m(M,1),y=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,y){const M=f(y);M&&M.isCubeTexture?(c===void 0&&(c=new Qt(new Ei(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Zi(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($p.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Lc),c.material.toneMapped=Yt.getTransfer(M.colorSpace)!==ne,(h!==M||u!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Qt(new hi(2,2),new qn({name:"BackgroundMaterial",uniforms:Zi(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(M.colorSpace)!==ne,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,y){x.getRGB(wr,gc(i)),e.buffers.color.setClear(wr.r,wr.g,wr.b,y,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:g,addToRenderList:v,dispose:p}}function Qp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(C,D,O,P,z){let U=!1;const I=u(C,P,O,D);r!==I&&(r=I,c(r.object)),U=f(C,P,O,z),U&&g(C,P,O,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,M(C,D,O,P),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,D,O,P){const z=P.wireframe===!0;let U=n[D.id];U===void 0&&(U={},n[D.id]=U);const I=C.isInstancedMesh===!0?C.id:0;let X=U[I];X===void 0&&(X={},U[I]=X);let N=X[O.id];N===void 0&&(N={},X[O.id]=N);let B=N[z];return B===void 0&&(B=d(l()),N[z]=B),B}function d(C){const D=[],O=[],P=[];for(let z=0;z<e;z++)D[z]=0,O[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:P,object:C,attributes:{},index:null}}function f(C,D,O,P){const z=r.attributes,U=D.attributes;let I=0;const X=O.getAttributes();for(const N in X)if(X[N].location>=0){const H=z[N];let it=U[N];if(it===void 0&&(N==="instanceMatrix"&&C.instanceMatrix&&(it=C.instanceMatrix),N==="instanceColor"&&C.instanceColor&&(it=C.instanceColor)),H===void 0||H.attribute!==it||it&&H.data!==it.data)return!0;I++}return r.attributesNum!==I||r.index!==P}function g(C,D,O,P){const z={},U=D.attributes;let I=0;const X=O.getAttributes();for(const N in X)if(X[N].location>=0){let H=U[N];H===void 0&&(N==="instanceMatrix"&&C.instanceMatrix&&(H=C.instanceMatrix),N==="instanceColor"&&C.instanceColor&&(H=C.instanceColor));const it={};it.attribute=H,H&&H.data&&(it.data=H.data),z[N]=it,I++}r.attributes=z,r.attributesNum=I,r.index=P}function v(){const C=r.newAttributes;for(let D=0,O=C.length;D<O;D++)C[D]=0}function m(C){p(C,0)}function p(C,D){const O=r.newAttributes,P=r.enabledAttributes,z=r.attributeDivisors;O[C]=1,P[C]===0&&(i.enableVertexAttribArray(C),P[C]=1),z[C]!==D&&(i.vertexAttribDivisor(C,D),z[C]=D)}function x(){const C=r.newAttributes,D=r.enabledAttributes;for(let O=0,P=D.length;O<P;O++)D[O]!==C[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function y(C,D,O,P,z,U,I){I===!0?i.vertexAttribIPointer(C,D,O,z,U):i.vertexAttribPointer(C,D,O,P,z,U)}function M(C,D,O,P){v();const z=P.attributes,U=O.getAttributes(),I=D.defaultAttributeValues;for(const X in U){const N=U[X];if(N.location>=0){let B=z[X];if(B===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(B=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(B=C.instanceColor)),B!==void 0){const H=B.normalized,it=B.itemSize,st=t.get(B);if(st===void 0)continue;const q=st.buffer,et=st.type,rt=st.bytesPerElement,xt=et===i.INT||et===i.UNSIGNED_INT||B.gpuType===ha;if(B.isInterleavedBufferAttribute){const at=B.data,bt=at.isInterleavedBuffer===!0?at.stride:at.itemSize,Wt=B.offset;if(at.isInstancedInterleavedBuffer||at.isInstancedBufferAttribute){for(let Et=0;Et<N.locationSize;Et++)p(N.location+Et,at.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Et=0;Et<N.locationSize;Et++)m(N.location+Et);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Et=0;Et<N.locationSize;Et++)y(N.location+Et,it/N.locationSize,et,H,bt*rt,(Wt+it/N.locationSize*Et)*rt,xt)}else{if(B.isInstancedBufferAttribute){for(let at=0;at<N.locationSize;at++)p(N.location+at,B.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let at=0;at<N.locationSize;at++)m(N.location+at);i.bindBuffer(i.ARRAY_BUFFER,q);for(let at=0;at<N.locationSize;at++)y(N.location+at,it/N.locationSize,et,H,it*rt,it/N.locationSize*at*rt,xt)}}else if(I!==void 0){const H=I[X];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(N.location,H);break;case 3:i.vertexAttrib3fv(N.location,H);break;case 4:i.vertexAttrib4fv(N.location,H);break;default:i.vertexAttrib1fv(N.location,H)}}}}x()}function b(){R();for(const C in n){const D=n[C];for(const O in D){const P=D[O];for(const z in P){const U=P[z];for(const I in U)h(U[I].object),delete U[I];delete P[z]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;const D=n[C.id];for(const O in D){const P=D[O];for(const z in P){const U=P[z];for(const I in U)h(U[I].object),delete U[I];delete P[z]}}delete n[C.id]}function _(C){for(const D in n){const O=n[D];for(const P in O){const z=O[P];if(z[C.id]===void 0)continue;const U=z[C.id];for(const I in U)h(U[I].object),delete U[I];delete z[C.id]}}}function S(C){for(const D in n){const O=n[D],P=C.isInstancedMesh===!0?C.id:0,z=O[P];if(z!==void 0){for(const U in z){const I=z[U];for(const X in I)h(I[X].object),delete I[X];delete z[U]}delete O[P],Object.keys(O).length===0&&delete n[D]}}}function R(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function jp(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function tm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==wn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const S=_===fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Ke&&_!==un&&!S&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:M,maxSamples:b,samples:E}}function em(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Rn,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,y=x*4;let M=p.clippingState||null;l.value=M,M=h(g,d,y,f);for(let b=0;b!==y;++b)M[b]=e[b];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,M=f;y!==v;++y,M+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}class No extends Tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new rc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ei(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Ri});r.uniforms.tEquirect.value=e;const a=new Qt(s,r),o=e.minFilter;return e.minFilter===En&&(e.minFilter=We),new Lo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Ic=256,nm=3,im=20,Nc=256,Uc=16,sm=3,rm=new G,am=new Rt;class Tr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Lo(1,10,null),this._boxMesh=new Qt(new Ei(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=rm}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(am));const m=new Lo(n,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Ic,Rl(t))}_fromTexture(t,e){t.mapping===Pi||t.mapping===hs?this._setSize(t.image.length===0?Ic:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Fc(t,!1,!1),n=Math.log2(t)-nm;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Fc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Pi||t.mapping===hs?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Oc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=om(),this._integrationMaterial=lm());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Uc);for(let a=0;a<=n;a++){const o=Tr.lodToRoughness(a,n);if(a>n-sm)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(Nc*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=cm());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function Fc(i,t,e){return new No(i,{minFilter:En,generateMipmaps:t,type:fn,colorSpace:qs,depthBuffer:e})}function Cs(i,t,e){return new qn({name:i,uniforms:t,vertexShader:Gt.cube_vert,fragmentShader:e,side:Ve,blending:Ri,depthTest:!1,depthWrite:!1})}function om(){return Cs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function hm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===aa||f===oa)if(t.has(d)){const g=t.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new No(g.height);return v.fromEquirectangularTexture(i,d),t.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,g=f===aa||f===oa,v=f===Pi||f===hs;if(g||v){let m=e.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Tr(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const x=d.image;return g&&x&&x.height>0||v&&x&&l(x)?(n===null&&(n=new Tr(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===aa?d.mapping=Pi:f===oa&&(d.mapping=hs),d}function l(d){let f=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){const f=d.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function um(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ks("WebGLRenderer: "+n+" extension not supported."),s}}}function fm(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(const m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);const v=r.get(g);v&&(t.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function h(g){const v=g.attributes;for(const m in v)t.update(v[m],i.ARRAY_BUFFER)}function u(g){const v=g.index,m=g.attributes.position;let p=0;if(m===void 0)return;const x=v!==null?v.array.length:m.array.length/3-1,y=m.count>=65535?ql:Xl,M=new y(Math.ceil(x/3)*6,1),b=M.array;if(v!==null){const _=v.array;p=v.version;for(let S=0,R=0;S<x;S+=3){const w=_[S+0],C=_[S+1],D=_[S+2];b[R++]=w,b[R++]=C,b[R++]=C,b[R++]=D,b[R++]=D,b[R++]=w}}else{p=m.version;for(let _=0,S=0;_<x;_+=3){const R=_+0,w=_+1,C=_+2;b[S++]=R,b[S++]=w,b[S++]=w,b[S++]=C,b[S++]=C,b[S++]=R}}M.version=p;const E=r.get(g);E&&t.remove(E),r.set(g,M)}function d(g){const v=r.get(g);if(v){const m=g.index;m!==null&&v.version<m.version&&u(g)}else u(g);return r.get(g)}function f(){for(const g in s){const v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function dm(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function pm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Kt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function mm(i,t,e){const n=new WeakMap,s=new ce;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let R=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let M=o.attributes.position.count*y,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const E=new Float32Array(M*b*4*u),_=new Nl(E,M,b,u);_.type=un,_.needsUpdate=!0;const S=y*4;for(let w=0;w<u;w++){const C=m[w],D=p[w],O=x[w],P=M*b*4*w;for(let z=0;z<C.count;z++){const U=z*S;f===!0&&(s.fromBufferAttribute(C,z),E[P+U+0]=s.x,E[P+U+1]=s.y,E[P+U+2]=s.z,E[P+U+3]=0),g===!0&&(s.fromBufferAttribute(D,z),E[P+U+4]=s.x,E[P+U+5]=s.y,E[P+U+6]=s.z,E[P+U+7]=0),v===!0&&(s.fromBufferAttribute(O,z),E[P+U+8]=s.x,E[P+U+9]=s.y,E[P+U+10]=s.z,E[P+U+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new Lt(M,b)},n.set(o,d),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function gm(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const _m={[ol]:"LINEAR_TONE_MAPPING",[ll]:"REINHARD_TONE_MAPPING",[cl]:"CINEON_TONE_MAPPING",[hl]:"ACES_FILMIC_TONE_MAPPING",[fl]:"AGX_TONE_MAPPING",[ra]:"NEUTRAL_TONE_MAPPING",[ul]:"CUSTOM_TONE_MAPPING"};function xm(i,t,e,n,s,r){const a=new Tn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new we;h.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new he([0,2,0,0,2,0],2));const u=new Ff({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Qt(h,u),f=new Tc(-1,1,1,-1,0,1);let g=null,v=null,m=!1,p,x=null,y=[],M=!1;this.setSize=function(b,E){a.setSize(b,E),o!==null&&o.setSize(b,E),l!==null&&l.setSize(b,E);for(let _=0;_<y.length;_++){const S=y[_];S.setSize&&S.setSize(b,E)}},this.setEffects=function(b){y=b,M=y.length>0&&y[0].isRenderPass===!0;const E=a.width,_=a.height;y.length>0&&o===null&&(o=new Tn(E,_,{type:fn,depthBuffer:!1,stencilBuffer:!1}),l=new Tn(E,_,{type:fn,depthBuffer:!1,stencilBuffer:!1}));const S=s===!0&&y.some(R=>R.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new qi(E,_),r===!0&&(c.format=ni,c.type=Di)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let R=0;R<y.length;R++){const w=y[R];w.setSize&&w.setSize(E,_),S&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(c)}},this.begin=function(b,E){if(m||b.toneMapping===On&&y.length===0)return!1;if(x=E,E!==null){const _=E.width,S=E.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return M===!1&&b.setRenderTarget(a),p=b.toneMapping,b.toneMapping=On,!0},this.hasRenderPass=function(){return M},this.end=function(b,E){b.toneMapping=p,m=!0;let _=a,S=o;for(let R=0;R<y.length;R++){const w=y[R];w.enabled!==!1&&(w.render(b,S,_,E),w.needsSwap!==!1&&(_=S,S=S===o?l:o))}if(g!==b.outputColorSpace||v!==b.toneMapping){g=b.outputColorSpace,v=b.toneMapping,u.defines={},Yt.getTransfer(g)===ne&&(u.defines.SRGB_TRANSFER="");const R=_m[v];R&&(u.defines[R]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(x),b.render(d,f),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const Bc=new Ee,kc=new qi(1,1),Gc=new ac(1),Hc=new Nl,Vc=new Wu,Wc=new rc,Xc=[],qc=[],Yc=new Float32Array(16),Zc=new Float32Array(9),Kc=new Float32Array(4);function Qi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Xc[s];if(r===void 0&&(r=new Float32Array(s),Xc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ar(i,t){let e=qc[t];e===void 0&&(e=new Int32Array(t),qc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function Em(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Kc.set(n),i.uniformMatrix2fv(this.addr,!1,Kc),Ae(e,n)}}function bm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Zc.set(n),i.uniformMatrix3fv(this.addr,!1,Zc),Ae(e,n)}}function wm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Yc.set(n),i.uniformMatrix4fv(this.addr,!1,Yc),Ae(e,n)}}function Tm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function Pm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function Rr(i){return i.version===0&&(i.compareFunction=yl,i.needsUpdate=!0),i}function Nm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Rr(kc):r=Bc,e.setTexture2D(t||r,s)}function Um(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vc,s)}function Fm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Rr(Gc):r=Wc,e.setTextureCube(t||r,s)}function Om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hc,s)}function zm(i){switch(i){case 5126:return vm;case 35664:return Mm;case 35665:return Sm;case 35666:return ym;case 35674:return Em;case 35675:return bm;case 35676:return wm;case 5124:case 35670:return Tm;case 35667:case 35671:return Am;case 35668:case 35672:return Rm;case 35669:case 35673:return Cm;case 5125:return Pm;case 36294:return Dm;case 36295:return Lm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Om}}function Bm(i,t){i.uniform1fv(this.addr,t)}function km(i,t){const e=Qi(t,this.size,2);i.uniform2fv(this.addr,e)}function Gm(i,t){const e=Qi(t,this.size,3);i.uniform3fv(this.addr,e)}function Hm(i,t){const e=Qi(t,this.size,4);i.uniform4fv(this.addr,e)}function Vm(i,t){const e=Qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Wm(i,t){const e=Qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Xm(i,t){const e=Qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qm(i,t){i.uniform1iv(this.addr,t)}function Ym(i,t){i.uniform2iv(this.addr,t)}function Zm(i,t){i.uniform3iv(this.addr,t)}function Km(i,t){i.uniform4iv(this.addr,t)}function $m(i,t){i.uniform1uiv(this.addr,t)}function Jm(i,t){i.uniform2uiv(this.addr,t)}function Qm(i,t){i.uniform3uiv(this.addr,t)}function jm(i,t){i.uniform4uiv(this.addr,t)}function t0(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Rr(kc):a=Bc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function e0(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Vc,r[a])}function n0(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Rr(Gc):a=Wc;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function i0(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Hc,r[a])}function s0(i){switch(i){case 5126:return Bm;case 35664:return km;case 35665:return Gm;case 35666:return Hm;case 35674:return Vm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return qm;case 35667:case 35671:return Ym;case 35668:case 35672:return Zm;case 35669:case 35673:return Km;case 5125:return $m;case 36294:return Jm;case 36295:return Qm;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}class r0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zm(e.type)}}class a0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=s0(e.type)}}class o0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Uo=/(\w+)(\])?(\[|\.)?/g;function $c(i,t){i.seq.push(t),i.map[t.id]=t}function l0(i,t,e){const n=i.name,s=n.length;for(Uo.lastIndex=0;;){const r=Uo.exec(n),a=Uo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){$c(e,c===void 0?new r0(o,i,t):new a0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new o0(o),$c(e,u)),e=u}}}class Cr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);l0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Jc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const c0=37297;let h0=0;function u0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Qc=new Ut;function f0(i){Yt._getMatrix(Qc,Yt.workingColorSpace,i);const t=`mat3( ${Qc.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case Ys:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+u0(i.getShaderSource(t),o)}else return r}function d0(i,t){const e=f0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const p0={[ol]:"Linear",[ll]:"Reinhard",[cl]:"Cineon",[hl]:"ACESFilmic",[fl]:"AgX",[ra]:"Neutral",[ul]:"Custom"};function m0(i,t){const e=p0[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Pr=new G;function g0(){Yt.getLuminanceCoefficients(Pr);const i=Pr.x.toFixed(4),t=Pr.y.toFixed(4),e=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
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
#define LOW_PRECISION`),t}const b0={[as]:"SHADOWMAP_TYPE_PCF",[os]:"SHADOWMAP_TYPE_VSM"};function w0(i){return b0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const T0={[hs]:"ENVMAP_MODE_REFRACTION"};function A0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":T0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const R0={[sa]:"ENVMAP_BLENDING_MULTIPLY",[lu]:"ENVMAP_BLENDING_MIX",[cu]:"ENVMAP_BLENDING_ADD"};function C0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":R0[i.combine]||"ENVMAP_BLENDING_NONE"}function P0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=w0(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=A0(e),u=C0(e),d=_0(e),f=x0(r),g=s.createProgram();let v,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ps).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ps).join(`
`),m.length>0&&(m+=`
`)):(v=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),m=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Gt.tonemapping_pars_fragment:"",e.toneMapping!==On?m0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,d0("linearToOutputTexel",e.outputColorSpace),g0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ps).join(`
`)),a=Fo(a),a=th(a,e),a=eh(a,e),o=Fo(o),o=th(o,e),o=eh(o,e),a=nh(a),o=nh(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=p+v+a,y=p+m+o,M=Jc(s,s.VERTEX_SHADER,x),b=Jc(s,s.FRAGMENT_SHADER,y);s.attachShader(g,M),s.attachShader(g,b),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(w){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(g)||"",D=s.getShaderInfoLog(M)||"",O=s.getShaderInfoLog(b)||"",P=C.trim(),z=D.trim(),U=O.trim();let I=!0,X=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,b);else{const N=jc(s,M,"vertex"),B=jc(s,b,"fragment");Kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+P+`
`+N+`
`+B)}else P!==""?Nt("WebGLProgram: Program Info Log:",P):(z===""||U==="")&&(X=!1);X&&(w.diagnostics={runnable:I,programLog:P,vertexShader:{log:z,prefix:v},fragmentShader:{log:U,prefix:m}})}s.deleteShader(M),s.deleteShader(b),_=new Cr(s,g),S=v0(s,g)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(g,c0)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=h0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=b,this}let D0=0;class L0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new I0(t),e.set(t,n)),n}}class I0{constructor(t){this.id=D0++,this.code=t,this.usedTimes=0}}function N0(i){return i===ii||i===Vs||i===Ws}function U0(i,t,e,n,s,r){const a=new eo,o=new L0,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,S,R,w,C,D){const O=w.fog,P=C.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?w.environment:null,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,I=t.get(_.envMap||z,U),X=d[_.type];let N=n.precision;_.precision!==null&&(N=n.getMaxPrecision(_.precision),N!==_.precision&&Nt("WebGLProgram.getParameters:",_.precision,"not supported, using",N,"instead."));const B=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,H=B!==void 0?B.length:0;let it=0;P.morphAttributes.position!==void 0&&(it=1),P.morphAttributes.normal!==void 0&&(it=2),P.morphAttributes.color!==void 0&&(it=3);let st,q,et,rt;if(X){const St=Pn[X];st=St.vertexShader,q=St.fragmentShader}else{st=_.vertexShader,q=_.fragmentShader;const St=o.getVertexShaderStage(_),se=o.getFragmentShaderStage(_);o.update(_,St,se),et=St.id,rt=se.id}const xt=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),bt=C.isInstancedMesh===!0,Wt=C.isBatchedMesh===!0,Et=!!_.map,Bt=!!_.matcap,Jt=!!I,zt=Jt&&I.isPMREMTexture===!0,ge=!!_.aoMap,ee=!!_.lightMap,ae=!!_.bumpMap&&_.wireframe===!1,_e=!!_.normalMap,Nn=!!_.displacementMap,Le=!!_.emissiveMap,an=!!_.metalnessMap,on=!!_.roughnessMap,ln=_.anisotropy>0,V=_.clearcoat>0,cn=_.diffuseRoughness>0,ue=_.dispersion>0,fe=_.retroreflectivity>0,vt=_.iridescence>0,Ce=_.sheen>0,It=_.transmission>0,Ft=ln&&!!_.anisotropyMap,L=V&&!!_.clearcoatMap,T=V&&!!_.clearcoatNormalMap,Z=V&&!!_.clearcoatRoughnessMap,ot=cn&&!!_.diffuseRoughnessMap,nt=vt&&!!_.iridescenceMap,ut=vt&&!!_.iridescenceThicknessMap,gt=Ce&&!!_.sheenColorMap,Q=Ce&&!!_.sheenRoughnessMap,j=!!_.specularMap,dt=!!_.specularColorMap,F=!!_.specularIntensityMap,tt=It&&!!_.transmissionMap,J=It&&!!_.thicknessMap,pt=!!_.gradientMap,ht=!!_.alphaMap,ft=_.alphaTest>0,Pt=!!_.alphaHash,Ht=!!_.extensions;let lt=On;_.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(lt=i.toneMapping);const Dt=zt?I.isCompressedCubeTexture?I.image[0].mipmaps:I.mipmaps:null,kt={shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:st,fragmentShader:q,defines:_.defines,customVertexShaderID:et,customFragmentShaderID:rt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:N,batching:Wt,batchingColor:Wt&&C._colorsTexture!==null,instancing:bt,instancingColor:bt&&C.instanceColor!==null,instancingMorph:bt&&C.morphTexture!==null,outputColorSpace:xt===null?i.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Et,matcap:Bt,envMap:Jt,envMapMode:Jt&&I.mapping,envMapPMREM:zt,envMapMaxLod:zt?Dt.length-1:null,envMapSize:zt?Dt[0].width:null,aoMap:ge,lightMap:ee,bumpMap:ae,normalMap:_e,displacementMap:Nn,emissiveMap:Le,normalMapObjectSpace:_e&&_.normalMapType===fu,normalMapTangentSpace:_e&&_.normalMapType===Xs,packedNormalMap:_e&&_.normalMapType===Xs&&N0(_.normalMap.format),metalnessMap:an,roughnessMap:on,anisotropy:ln,anisotropyMap:Ft,clearcoat:V,clearcoatMap:L,clearcoatNormalMap:T,clearcoatRoughnessMap:Z,diffuseRoughness:cn,diffuseRoughnessMap:ot,dispersion:ue,retroreflection:fe,iridescence:vt,iridescenceMap:nt,iridescenceThicknessMap:ut,sheen:Ce,sheenColorMap:gt,sheenRoughnessMap:Q,specularMap:j,specularColorMap:dt,specularIntensityMap:F,transmission:It,transmissionMap:tt,thicknessMap:J,gradientMap:pt,opaque:_.transparent===!1&&_.blending===ls&&_.alphaToCoverage===!1,alphaMap:ht,alphaTest:ft,alphaHash:Pt,combine:_.combine,mapUv:Et&&f(_.map.channel),aoMapUv:ge&&f(_.aoMap.channel),lightMapUv:ee&&f(_.lightMap.channel),bumpMapUv:ae&&f(_.bumpMap.channel),normalMapUv:_e&&f(_.normalMap.channel),displacementMapUv:Nn&&f(_.displacementMap.channel),emissiveMapUv:Le&&f(_.emissiveMap.channel),metalnessMapUv:an&&f(_.metalnessMap.channel),roughnessMapUv:on&&f(_.roughnessMap.channel),anisotropyMapUv:Ft&&f(_.anisotropyMap.channel),clearcoatMapUv:L&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Q&&f(_.sheenRoughnessMap.channel),specularMapUv:j&&f(_.specularMap.channel),specularColorMapUv:dt&&f(_.specularColorMap.channel),specularIntensityMapUv:F&&f(_.specularIntensityMap.channel),transmissionMapUv:tt&&f(_.transmissionMap.channel),thicknessMapUv:J&&f(_.thicknessMap.channel),alphaMapUv:ht&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(_e||ln),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!P.attributes.uv&&(Et||ht),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&_e===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:at,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:it,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(St=>St.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:lt,decodeVideoTexture:Et&&_.map.isVideoTexture===!0&&Yt.getTransfer(_.map.colorSpace)===ne,decodeVideoTextureEmissive:Le&&_.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(_.emissiveMap.colorSpace)===ne,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ze,flipSided:_.side===Ve,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ht&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&_.extensions.multiDraw===!0||Wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function v(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)S.push(R),S.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(m(S,_),p(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function p(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){const S=d[_.type];let R;if(S){const w=Pn[S];R=If.clone(w.uniforms)}else R=_.uniforms;return R}function y(_,S){let R=h.get(S);return R!==void 0?++R.usedTimes:(R=new P0(i,S,_,s),c.push(R),h.set(S,R)),R}function M(_){if(--_.usedTimes===0){const S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:x,acquireProgram:y,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:E}}function F0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function O0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function sh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,v,m,p){let x=i[t];return x===void 0?(x={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},i[t]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=g,x.materialVariant=a(d),x.groupOrder=v,x.renderOrder=d.renderOrder,x.z=m,x.group=p),t++,x}function l(d,f,g,v,m,p,x){x.reversedDepth===!0&&(m=-m);const y=o(d,f,g,v,m,p);g.transmission>0?n.push(y):g.transparent===!0?s.push(y):e.push(y)}function c(d,f,g,v,m,p){const x=o(d,f,g,v,m,p);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):e.unshift(x)}function h(d,f){e.length>1&&e.sort(d||O0),n.length>1&&n.sort(f||sh),s.length>1&&s.sort(f||sh)}function u(){for(let d=t,f=i.length;d<f;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function z0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new rh,i.set(n,[a])):s>=r.length?(a=new rh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function B0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Rt};break;case"SpotLight":e={position:new G,direction:new G,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function k0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let G0=0;function H0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function V0(i){const t=new B0,e=k0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const s=new G,r=new $t,a=new $t;function o(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,x=0,y=0,M=0,b=0,E=0,_=0,S=0,R=0,w=0;c.sort(H0);for(let D=0,O=c.length;D<O;D++){const P=c[D],z=P.color,U=P.intensity,I=P.distance;let X=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ii?X=P.shadow.map.texture:X=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=z.r*U,u+=z.g*U,d+=z.b*U;else if(P.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(P.sh.coefficients[N],U);w++}else if(P.isSunLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,H=e.get(P);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[g]=H,n.sunShadowMap[g]=X;const it=B.getViewportCount();for(let st=0;st<it;st++)n.sunShadowMatrix[v+st]=B.getMatrix(st),n.sunShadowCascade[v+st]=B._cascadeData[st];v+=it,g++}n.sun[f]=N,f++}else if(P.isDirectionalLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,H=e.get(P);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=P.shadow.matrix,b++}n.directional[m]=N,m++}else if(P.isSpotLight){const N=t.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(z).multiplyScalar(U),N.distance=I,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,n.spot[x]=N;const B=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,B.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[x]=B.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=X,_++}x++}else if(P.isRectAreaLight){const N=t.get(P);N.color.copy(z).multiplyScalar(U),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),n.rectArea[y]=N,y++}else if(P.isPointLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){const B=P.shadow,H=e.get(P);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,H.shadowCameraNear=B.camera.near,H.shadowCameraFar=B.camera.far,n.pointShadow[p]=H,n.pointShadowMap[p]=X,n.pointShadowMatrix[p]=P.shadow.matrix,E++}n.point[p]=N,p++}else if(P.isHemisphereLight){const N=t.get(P);N.skyColor.copy(P.color).multiplyScalar(U),N.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[M]=N,M++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==p||C.spotLength!==x||C.rectAreaLength!==y||C.hemiLength!==M||C.numSunShadows!==g||C.numDirectionalShadows!==b||C.numPointShadows!==E||C.numSpotShadows!==_||C.numSpotMaps!==S||C.numLightProbes!==w)&&(n.sun.length=f,n.directional.length=m,n.spot.length=x,n.rectArea.length=y,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,C.sunLength=f,C.directionalLength=m,C.pointLength=p,C.spotLength=x,C.rectAreaLength=y,C.hemiLength=M,C.numSunShadows=g,C.numDirectionalShadows=b,C.numPointShadows=E,C.numSpotShadows=_,C.numSpotMaps=S,C.numLightProbes=w,n.version=G0++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,m=0;const p=h.matrixWorldInverse;for(let x=0,y=c.length;x<y;x++){const M=c[x];if(M.isSunLight){const b=n.sun[u];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),u++}else if(M.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(M.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function ah(i){const t=new V0(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){n.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function W0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ah(i),t.set(s,[o])):r>=a.length?(o=new ah(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const X0=`void main() {
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
}`,Y0=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Z0=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],oh=new $t,Ds=new G,Oo=new G;function K0(i,t,e){let n=new Es;const s=new Lt,r=new Lt,a=new ce,o=new Of,l=new zf,c={},h=e.maxTextureSize,u={[ti]:Ve,[Ve]:ti,[ze]:ze},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:X0,fragmentShader:q0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Qt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=as;let p=this.type;this.render=function(E,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Vh&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=as);const R=i.getRenderTarget(),w=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Ri),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=p!==this.type;O&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(z=>z.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,z=E.length;P<z;P++){const U=E[P],I=U.shadow;if(I===void 0){Nt("WebGLShadowMap:",U,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const X=I.getFrameExtents();s.multiply(X),r.copy(I.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,I.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,I.mapSize.y=r.y));const N=i.state.buffers.depth.getReversed();if(I.camera._reversedDepth=N,I.map===null||O===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===os){if(U.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Tn(s.x,s.y,{format:ii,type:fn,minFilter:We,magFilter:We,generateMipmaps:!1}),I.map.texture.name=U.name+".shadowMap",I.map.depthTexture=new qi(s.x,s.y,un),I.map.depthTexture.name=U.name+".shadowMapDepth",I.map.depthTexture.format=ei,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Ue,I.map.depthTexture.magFilter=Ue}else U.isPointLight?(I.map=new No(s.x),I.map.depthTexture=new ac(s.x,bn)):(I.map=new Tn(s.x,s.y),I.map.depthTexture=new qi(s.x,s.y,bn)),I.map.depthTexture.name=U.name+".shadowMap",I.map.depthTexture.format=ei,this.type===as?(I.map.depthTexture.compareFunction=N?Sl:Ml,I.map.depthTexture.minFilter=We,I.map.depthTexture.magFilter=We):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Ue,I.map.depthTexture.magFilter=Ue);I.camera.updateProjectionMatrix()}I.map.isWebGLCubeRenderTarget!==!0&&(I.map.width!==s.x||I.map.height!==s.y)&&I.map.setSize(s.x,s.y);const B=I.map.isWebGLCubeRenderTarget?6:I.getViewportCount();U.isPointLight!==!0&&I.updateMatrices(U,S);const H=I.camera.layers.mask&4294967294?I.camera.layers:S.layers;for(let it=0;it<B;it++){const st=I.getCamera(it);if(U.isPointLight){const q=I.camera,et=I.matrix,rt=U.distance||q.far;rt!==q.far&&(q.far=rt,q.updateProjectionMatrix()),Ds.setFromMatrixPosition(U.matrixWorld),q.position.copy(Ds),Oo.copy(q.position),Oo.add(Y0[it]),q.up.copy(Z0[it]),q.lookAt(Oo),q.updateMatrixWorld(),et.makeTranslation(-Ds.x,-Ds.y,-Ds.z),oh.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),I._frustum.setFromProjectionMatrix(oh,q.coordinateSystem,q.reversedDepth)}if(I.map.isWebGLCubeRenderTarget)i.setRenderTarget(I.map,it),i.clear();else{it===0&&(i.setRenderTarget(I.map),i.clear());const q=I.getViewport(it);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),D.viewport(a)}n=I.getFrustum(it),M(_,S,st,U,H,this.type)}I.isPointLightShadow!==!0&&this.type===os&&x(I,S),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(R,w,C)};function x(E,_){const S=t.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Tn(s.x,s.y,{format:ii,type:fn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,S,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,S,f,v,null)}function y(E,_,S,R){let w=null;const C=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)w=C;else if(w=S.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const D=w.uuid,O=_.uuid;let P=c[D];P===void 0&&(P={},c[D]=P);let z=P[O];z===void 0&&(z=w.clone(),P[O]=z,_.addEventListener("dispose",b)),w=z}if(w.visible=_.visible,w.wireframe=_.wireframe,R===os?w.side=_.shadowSide!==null?_.shadowSide:_.side:w.side=_.shadowSide!==null?_.shadowSide:u[_.side],w.alphaMap=_.alphaMap,w.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,w.map=_.map,w.clipShadows=_.clipShadows,w.clippingPlanes=_.clippingPlanes,w.clipIntersection=_.clipIntersection,w.displacementMap=_.displacementMap,w.displacementScale=_.displacementScale,w.displacementBias=_.displacementBias,w.wireframeLinewidth=_.wireframeLinewidth,w.linewidth=_.linewidth,S.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const D=i.properties.get(w);D.light=S}return w}function M(E,_,S,R,w,C){if(E.visible===!1)return;if(E.layers.test(w)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===os)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const P=t.update(E),z=E.material;if(Array.isArray(z)){const U=P.groups;for(let I=0,X=U.length;I<X;I++){const N=U[I],B=z[N.materialIndex];if(B&&B.visible){const H=y(E,B,R,C);E.onBeforeShadow(i,E,_,S,P,H,N),i.renderBufferDirect(S,null,P,H,E,N),E.onAfterShadow(i,E,_,S,P,H,N)}}}else if(z.visible){const U=y(E,z,R,C);E.onBeforeShadow(i,E,_,S,P,U,null),i.renderBufferDirect(S,null,P,U,E,null),E.onAfterShadow(i,E,_,S,P,U,null)}}const O=E.children;for(let P=0,z=O.length;P<z;P++)M(O[P],_,S,R,w,C)}function b(E){E.target.removeEventListener("dispose",b);for(const S in c){const R=c[S],w=E.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}function $0(i,t){function e(){let F=!1;const tt=new ce;let J=null;const pt=new ce(0,0,0,0);return{setMask:function(ht){J!==ht&&!F&&(i.colorMask(ht,ht,ht,ht),J=ht)},setLocked:function(ht){F=ht},setClear:function(ht,ft,Pt,Ht,lt){lt===!0&&(ht*=Ht,ft*=Ht,Pt*=Ht),tt.set(ht,ft,Pt,Ht),pt.equals(tt)===!1&&(i.clearColor(ht,ft,Pt,Ht),pt.copy(tt))},reset:function(){F=!1,J=null,pt.set(-1,0,0,0)}}}function n(){let F=!1,tt=!1,J=null,pt=null,ht=null;return{setReversed:function(ft){if(tt!==ft){const Pt=t.get("EXT_clip_control");ft?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),tt=ft;const Ht=ht;ht=null,this.setClear(Ht)}},getReversed:function(){return tt},setTest:function(ft){ft?at(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(ft){J!==ft&&!F&&(i.depthMask(ft),J=ft)},setFunc:function(ft){if(tt&&(ft=Eu[ft]),pt!==ft){switch(ft){case Jr:i.depthFunc(i.NEVER);break;case Qr:i.depthFunc(i.ALWAYS);break;case jr:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case ta:i.depthFunc(i.EQUAL);break;case ea:i.depthFunc(i.GEQUAL);break;case na:i.depthFunc(i.GREATER);break;case ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=ft}},setLocked:function(ft){F=ft},setClear:function(ft){ht!==ft&&(ht=ft,tt&&(ft=1-ft),i.clearDepth(ft))},reset:function(){F=!1,J=null,pt=null,ht=null,tt=!1}}}function s(){let F=!1,tt=null,J=null,pt=null,ht=null,ft=null,Pt=null,Ht=null,lt=null;return{setTest:function(Dt){F||(Dt?at(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Dt){tt!==Dt&&!F&&(i.stencilMask(Dt),tt=Dt)},setFunc:function(Dt,kt,St){(J!==Dt||pt!==kt||ht!==St)&&(i.stencilFunc(Dt,kt,St),J=Dt,pt=kt,ht=St)},setOp:function(Dt,kt,St){(ft!==Dt||Pt!==kt||Ht!==St)&&(i.stencilOp(Dt,kt,St),ft=Dt,Pt=kt,Ht=St)},setLocked:function(Dt){F=Dt},setClear:function(Dt){lt!==Dt&&(i.clearStencil(Dt),lt=Dt)},reset:function(){F=!1,tt=null,J=null,pt=null,ht=null,ft=null,Pt=null,Ht=null,lt=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let h={},u={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,x=null,y=null,M=null,b=null,E=null,_=null,S=new Rt(0,0,0),R=0,w=!1,C=null,D=null,O=null,P=null,z=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,X=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(N)[1]),I=X>=1):N.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),I=X>=2);let B=null,H={};const it=i.getParameter(i.SCISSOR_BOX),st=i.getParameter(i.VIEWPORT),q=new ce().fromArray(it),et=new ce().fromArray(st);function rt(F,tt,J,pt){const ht=new Uint8Array(4),ft=i.createTexture();i.bindTexture(F,ft),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<J;Pt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(tt+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return ft}const xt={};xt[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(cs),ae(!1),_e(nl),at(i.CULL_FACE),ge(Ri);function at(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function bt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Wt(F,tt){return d[F]!==tt?(i.bindFramebuffer(F,tt),d[F]=tt,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=tt),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function Et(F,tt){let J=g,pt=!1;if(F){J=f.get(tt),J===void 0&&(J=[],f.set(tt,J));const ht=F.textures;if(J.length!==ht.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Pt=ht.length;ft<Pt;ft++)J[ft]=i.COLOR_ATTACHMENT0+ft;J.length=ht.length,pt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,pt=!0);pt&&i.drawBuffers(J)}function Bt(F){return v!==F?(i.useProgram(F),v=F,!0):!1}const Jt={[Ci]:i.FUNC_ADD,[Xh]:i.FUNC_SUBTRACT,[qh]:i.FUNC_REVERSE_SUBTRACT};Jt[Yh]=i.MIN,Jt[Zh]=i.MAX;const zt={[Kh]:i.ZERO,[$h]:i.ONE,[Jh]:i.SRC_COLOR,[rl]:i.SRC_ALPHA,[iu]:i.SRC_ALPHA_SATURATE,[eu]:i.DST_COLOR,[jh]:i.DST_ALPHA,[Qh]:i.ONE_MINUS_SRC_COLOR,[al]:i.ONE_MINUS_SRC_ALPHA,[nu]:i.ONE_MINUS_DST_COLOR,[tu]:i.ONE_MINUS_DST_ALPHA,[su]:i.CONSTANT_COLOR,[ru]:i.ONE_MINUS_CONSTANT_COLOR,[au]:i.CONSTANT_ALPHA,[ou]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(F,tt,J,pt,ht,ft,Pt,Ht,lt,Dt){if(F===Ri){m===!0&&(bt(i.BLEND),m=!1);return}if(m===!1&&(at(i.BLEND),m=!0),F!==Wh){if(F!==p||Dt!==w){if((x!==Ci||b!==Ci)&&(i.blendEquation(i.FUNC_ADD),x=Ci,b=Ci),Dt)switch(F){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $r:i.blendFunc(i.ONE,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",F);break}else switch(F){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case il:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sl:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",F);break}y=null,M=null,E=null,_=null,S.set(0,0,0),R=0,p=F,w=Dt}return}ht=ht||tt,ft=ft||J,Pt=Pt||pt,(tt!==x||ht!==b)&&(i.blendEquationSeparate(Jt[tt],Jt[ht]),x=tt,b=ht),(J!==y||pt!==M||ft!==E||Pt!==_)&&(i.blendFuncSeparate(zt[J],zt[pt],zt[ft],zt[Pt]),y=J,M=pt,E=ft,_=Pt),(Ht.equals(S)===!1||lt!==R)&&(i.blendColor(Ht.r,Ht.g,Ht.b,lt),S.copy(Ht),R=lt),p=F,w=!1}function ee(F,tt){F.side===ze?bt(i.CULL_FACE):at(i.CULL_FACE);let J=F.side===Ve;tt&&(J=!J),ae(J),F.blending===ls&&F.transparent===!1?ge(Ri):ge(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const pt=F.stencilWrite;o.setTest(pt),pt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Le(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(F){C!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),C=F)}function _e(F){F!==Gh?(at(i.CULL_FACE),F!==D&&(F===nl?i.cullFace(i.BACK):F===Hh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),D=F}function Nn(F){F!==O&&(I&&i.lineWidth(F),O=F)}function Le(F,tt,J){F?(at(i.POLYGON_OFFSET_FILL),(P!==tt||z!==J)&&(P=tt,z=J,a.getReversed()&&(tt=-tt,J=-J),i.polygonOffset(tt,J))):bt(i.POLYGON_OFFSET_FILL)}function an(F){F?at(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function on(F){F===void 0&&(F=i.TEXTURE0+U-1),B!==F&&(i.activeTexture(F),B=F)}function ln(F,tt,J){J===void 0&&(B===null?J=i.TEXTURE0+U-1:J=B);let pt=H[J];pt===void 0&&(pt={type:void 0,texture:void 0},H[J]=pt),(pt.type!==F||pt.texture!==tt)&&(B!==J&&(i.activeTexture(J),B=J),i.bindTexture(F,tt||xt[F]),pt.type=F,pt.texture=tt)}function V(){const F=H[B];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function cn(){try{i.compressedTexImage2D(...arguments)}catch(F){Kt("WebGLState:",F)}}function ue(){try{i.compressedTexImage3D(...arguments)}catch(F){Kt("WebGLState:",F)}}function fe(){try{i.texSubImage2D(...arguments)}catch(F){Kt("WebGLState:",F)}}function vt(){try{i.texSubImage3D(...arguments)}catch(F){Kt("WebGLState:",F)}}function Ce(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Kt("WebGLState:",F)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Kt("WebGLState:",F)}}function Ft(){try{i.texStorage2D(...arguments)}catch(F){Kt("WebGLState:",F)}}function L(){try{i.texStorage3D(...arguments)}catch(F){Kt("WebGLState:",F)}}function T(){try{i.texImage2D(...arguments)}catch(F){Kt("WebGLState:",F)}}function Z(){try{i.texImage3D(...arguments)}catch(F){Kt("WebGLState:",F)}}function ot(F){return u[F]!==void 0?u[F]:i.getParameter(F)}function nt(F,tt){u[F]!==tt&&(i.pixelStorei(F,tt),u[F]=tt)}function ut(F){q.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),q.copy(F))}function gt(F){et.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),et.copy(F))}function Q(F,tt){let J=c.get(tt);J===void 0&&(J=new WeakMap,c.set(tt,J));let pt=J.get(F);pt===void 0&&(pt=i.getUniformBlockIndex(tt,F.name),i.uniformBlockBinding(tt,pt,pt),J.set(F,pt))}function j(F,tt,J){const ht=c.get(tt).get(F);l[ht]!==J&&(i.bindBufferBase(i.UNIFORM_BUFFER,ht,J),l[ht]=J)}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},B=null,H={},d={},l={},f=new WeakMap,g=[],v=null,m=!1,p=null,x=null,y=null,M=null,b=null,E=null,_=null,S=new Rt(0,0,0),R=0,w=!1,C=null,D=null,O=null,P=null,z=null,q.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:bt,bindFramebuffer:Wt,drawBuffers:Et,useProgram:Bt,setBlending:ge,setMaterial:ee,setFlipSided:ae,setCullFace:_e,setLineWidth:Nn,setPolygonOffset:Le,setScissorTest:an,activeTexture:on,bindTexture:ln,unbindTexture:V,compressedTexImage2D:cn,compressedTexImage3D:ue,texImage2D:T,texImage3D:Z,pixelStorei:nt,getParameter:ot,updateUBOMapping:Q,uniformBlockBinding:j,texStorage2D:Ft,texStorage3D:L,texSubImage2D:fe,texSubImage3D:vt,compressedTexSubImage2D:Ce,compressedTexSubImage3D:It,scissor:ut,viewport:gt,reset:dt}}function J0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,u=new Set;let d;const f=new WeakMap,g=new Set,v=new FinalizationRegistry(L=>g.delete(L));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,T){return m?new OffscreenCanvas(L,T):ds("canvas")}function x(L,T,Z){let ot=1;const nt=Ft(L);if((nt.width>Z||nt.height>Z)&&(ot=Z/Math.max(nt.width,nt.height)),ot<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ut=Math.floor(ot*nt.width),gt=Math.floor(ot*nt.height);d===void 0&&(d=p(ut,gt));const Q=T?p(ut,gt):d;return Q.width=ut,Q.height=gt,Q.getContext("2d").drawImage(L,0,0,ut,gt),Nt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+ut+"x"+gt+")."),Q}else return"data"in L&&Nt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),L;return L}function y(L){return L.generateMipmaps}function M(L){i.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(L,T,Z,ot,nt,ut=!1){if(L!==null){if(i[L]!==void 0)return i[L];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let gt;ot&&(gt=t.get("EXT_texture_norm16"),gt||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=T;if(T===i.RED&&(Z===i.FLOAT&&(Q=i.R32F),Z===i.HALF_FLOAT&&(Q=i.R16F),Z===i.UNSIGNED_BYTE&&(Q=i.R8),Z===i.UNSIGNED_SHORT&&gt&&(Q=gt.R16_EXT),Z===i.SHORT&&gt&&(Q=gt.R16_SNORM_EXT)),T===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(Q=i.R8UI),Z===i.UNSIGNED_SHORT&&(Q=i.R16UI),Z===i.UNSIGNED_INT&&(Q=i.R32UI),Z===i.BYTE&&(Q=i.R8I),Z===i.SHORT&&(Q=i.R16I),Z===i.INT&&(Q=i.R32I)),T===i.RG&&(Z===i.FLOAT&&(Q=i.RG32F),Z===i.HALF_FLOAT&&(Q=i.RG16F),Z===i.UNSIGNED_BYTE&&(Q=i.RG8),Z===i.UNSIGNED_SHORT&&gt&&(Q=gt.RG16_EXT),Z===i.SHORT&&gt&&(Q=gt.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(Q=i.RG8UI),Z===i.UNSIGNED_SHORT&&(Q=i.RG16UI),Z===i.UNSIGNED_INT&&(Q=i.RG32UI),Z===i.BYTE&&(Q=i.RG8I),Z===i.SHORT&&(Q=i.RG16I),Z===i.INT&&(Q=i.RG32I)),T===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),Z===i.UNSIGNED_INT&&(Q=i.RGB32UI),Z===i.BYTE&&(Q=i.RGB8I),Z===i.SHORT&&(Q=i.RGB16I),Z===i.INT&&(Q=i.RGB32I)),T===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),Z===i.UNSIGNED_INT&&(Q=i.RGBA32UI),Z===i.BYTE&&(Q=i.RGBA8I),Z===i.SHORT&&(Q=i.RGBA16I),Z===i.INT&&(Q=i.RGBA32I)),T===i.RGB&&(Z===i.UNSIGNED_SHORT&&gt&&(Q=gt.RGB16_EXT),Z===i.SHORT&&gt&&(Q=gt.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),T===i.RGBA){const j=ut?Ys:Yt.getTransfer(nt);Z===i.FLOAT&&(Q=i.RGBA32F),Z===i.HALF_FLOAT&&(Q=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(Q=j===ne?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&gt&&(Q=gt.RGBA16_EXT),Z===i.SHORT&&gt&&(Q=gt.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function _(L,T){let Z;return L?T===null||T===bn||T===Di?Z=i.DEPTH24_STENCIL8:T===un?Z=i.DEPTH32F_STENCIL8:T===us&&(Z=i.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===bn||T===Di?Z=i.DEPTH_COMPONENT24:T===un?Z=i.DEPTH_COMPONENT32F:T===us&&(Z=i.DEPTH_COMPONENT16),Z}function S(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ue&&L.minFilter!==We?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function R(L){const T=new WeakRef(L);n.get(L).__ref=T,g.add(T),v.register(L,T,T)}function w(L){const T=n.get(L).__ref;T!==void 0&&(g.delete(T),v.unregister(T))}function C(L){O(L.target)}function D(L){P(L.target)}function O(L){L.removeEventListener("dispose",C),w(L),U(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&u.delete(L)}function P(L){L.removeEventListener("dispose",D),w(L),X(L)}function z(){for(const L of g){const T=L.deref();T!==void 0&&(T.isRenderTarget===!0?P(T):O(T))}g.clear(),u.clear()}function U(L){const T=n.get(L);if(T.__webglInit===void 0)return;const Z=L.source,ot=f.get(Z);if(ot){const nt=ot[T.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&I(L),Object.keys(ot).length===0&&f.delete(Z)}n.remove(L)}function I(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const Z=L.source,ot=f.get(Z);delete ot[T.__cacheKey],a.memory.textures--}function X(L){const T=n.get(L);T.__depthDisposeCallback&&T.__depthDisposeCallback();const Z=L.depthTexture;if(Z&&Z.renderTarget===L&&O(Z),L.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(T.__webglFramebuffer[nt]))for(let ut=0;ut<T.__webglFramebuffer[nt].length;ut++)i.deleteFramebuffer(T.__webglFramebuffer[nt][ut]);else i.deleteFramebuffer(T.__webglFramebuffer[nt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[nt])}else{if(Array.isArray(T.__webglFramebuffer))for(let nt=0;nt<T.__webglFramebuffer.length;nt++)i.deleteFramebuffer(T.__webglFramebuffer[nt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let nt=0;nt<T.__webglColorRenderbuffer.length;nt++)T.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[nt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ot=L.textures;for(let nt=0,ut=ot.length;nt<ut;nt++){const gt=n.get(ot[nt]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(ot[nt])}n.remove(L)}let N=0;function B(){N=0}function H(){return N}function it(L){N=L}function st(){const L=N;return L>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,L}function q(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.mipmapsAutoUpdate),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function et(L,T){const Z=n.get(L);if(L.isVideoTexture&&Ce(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Z.__version!==L.version){const ot=L.image;if(ot===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(Z,L,T);return}}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+T)}function rt(L,T){const Z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){ee(Z,L,T);return}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+T)}function xt(L,T){const Z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){ee(Z,L,T);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+T)}function at(L,T){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){ae(Z,L,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+T)}const bt={[Os]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[la]:i.MIRRORED_REPEAT},Wt={[Ue]:i.NEAREST,[hu]:i.NEAREST_MIPMAP_NEAREST,[zs]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[ca]:i.LINEAR_MIPMAP_NEAREST,[En]:i.LINEAR_MIPMAP_LINEAR},Et={[pu]:i.NEVER,[yl]:i.ALWAYS,[mu]:i.LESS,[Ml]:i.LEQUAL,[gu]:i.EQUAL,[Sl]:i.GEQUAL,[_u]:i.GREATER,[xu]:i.NOTEQUAL};function Bt(L,T){if(T.type===un&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===We||T.magFilter===ca||T.magFilter===zs||T.magFilter===En||T.minFilter===We||T.minFilter===ca||T.minFilter===zs||T.minFilter===En)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,bt[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,bt[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,bt[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Wt[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Wt[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Et[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ue||T.minFilter!==zs&&T.minFilter!==En||T.type===un&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Jt(L,T){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",C),R(T));const ot=T.source;let nt=f.get(ot);nt===void 0&&(nt={},f.set(ot,nt));const ut=q(T);if(ut!==L.__cacheKey){nt[ut]===void 0&&(nt[ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),nt[ut].usedTimes++;const gt=nt[L.__cacheKey];gt!==void 0&&(nt[L.__cacheKey].usedTimes--,gt.usedTimes===0&&I(T)),L.__cacheKey=ut,L.__webglTexture=nt[ut].texture}return Z}function zt(L,T,Z){return Math.floor(Math.floor(L/Z)/T)}function ge(L,T,Z,ot){const ut=L.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,Z,ot,T.data);else{ut.sort((F,tt)=>F.start-tt.start);let gt=0;for(let F=1;F<ut.length;F++){const tt=ut[gt],J=ut[F],pt=tt.start+tt.count,ht=zt(J.start,T.width,4),ft=zt(tt.start,T.width,4);J.start<=pt+1&&ht===ft&&zt(J.start+J.count-1,T.width,4)===ht?tt.count=Math.max(tt.count,J.start+J.count-tt.start):(++gt,ut[gt]=J)}ut.length=gt+1;const Q=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let F=0,tt=ut.length;F<tt;F++){const J=ut[F],pt=Math.floor(J.start/4),ht=Math.ceil(J.count/4),ft=pt%T.width,Pt=Math.floor(pt/T.width),Ht=ht,lt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,Pt),e.texSubImage2D(i.TEXTURE_2D,0,ft,Pt,Ht,lt,Z,ot,T.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function ee(L,T,Z){let ot=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ot=i.TEXTURE_3D);const nt=Jt(L,T),ut=T.source;e.bindTexture(ot,L.__webglTexture,i.TEXTURE0+Z);const gt=n.get(ut);if(ut.version!==gt.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const lt=Yt.getPrimaries(Yt.workingColorSpace),Dt=T.colorSpace===si?null:Yt.getPrimaries(T.colorSpace),kt=T.colorSpace===si||lt===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let j=x(T.image,!1,s.maxTextureSize);j=It(T,j);const dt=r.convert(T.format,T.colorSpace),F=r.convert(T.type);let tt=E(T.internalFormat,dt,F,T.normalized,T.colorSpace,T.isVideoTexture);Bt(ot,T);let J;const pt=T.mipmaps,ht=T.isVideoTexture!==!0,ft=gt.__version===void 0||nt===!0,Pt=ut.dataReady,Ht=S(T,j);if(T.isDepthTexture)tt=_(T.format===ni,T.type),ft&&(ht?e.texStorage2D(i.TEXTURE_2D,1,tt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,tt,j.width,j.height,0,dt,F,null));else if(T.isDataTexture)if(pt.length>0){ht&&ft&&e.texStorage2D(i.TEXTURE_2D,Ht,tt,pt[0].width,pt[0].height);for(let lt=0,Dt=pt.length;lt<Dt;lt++)J=pt[lt],ht?Pt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,J.width,J.height,dt,F,J.data):e.texImage2D(i.TEXTURE_2D,lt,tt,J.width,J.height,0,dt,F,J.data);T.generateMipmaps=!1}else ht?(ft&&e.texStorage2D(i.TEXTURE_2D,Ht,tt,j.width,j.height),Pt&&ge(T,j,dt,F)):e.texImage2D(i.TEXTURE_2D,0,tt,j.width,j.height,0,dt,F,j.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ht&&ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,tt,pt[0].width,pt[0].height,j.depth);for(let lt=0,Dt=pt.length;lt<Dt;lt++)if(J=pt[lt],T.format!==wn)if(dt!==null)if(ht){if(Pt)if(T.layerUpdates.size>0){const kt=Pc(J.width,J.height,T.format,T.type);for(const St of T.layerUpdates){const se=J.data.subarray(St*kt/J.data.BYTES_PER_ELEMENT,(St+1)*kt/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,St,J.width,J.height,1,dt,se)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,J.width,J.height,j.depth,dt,J.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,tt,J.width,J.height,j.depth,0,J.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?Pt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,J.width,J.height,j.depth,dt,F,J.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,tt,J.width,J.height,j.depth,0,dt,F,J.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ht&&ft&&e.texStorage2D(i.TEXTURE_2D,Ht,tt,pt[0].width,pt[0].height);for(let lt=0,Dt=pt.length;lt<Dt;lt++)J=pt[lt],T.format!==wn?dt!==null?ht?Pt&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,J.width,J.height,dt,J.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,tt,J.width,J.height,0,J.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?Pt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,J.width,J.height,dt,F,J.data):e.texImage2D(i.TEXTURE_2D,lt,tt,J.width,J.height,0,dt,F,J.data)}else if(T.isDataArrayTexture)if(ht){if(ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,tt,j.width,j.height,j.depth),Pt)if(T.layerUpdates.size>0){const lt=Pc(j.width,j.height,T.format,T.type);for(const Dt of T.layerUpdates){const kt=j.data.subarray(Dt*lt/j.data.BYTES_PER_ELEMENT,(Dt+1)*lt/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Dt,j.width,j.height,1,dt,F,kt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,dt,F,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,tt,j.width,j.height,j.depth,0,dt,F,j.data);else if(T.isData3DTexture)ht?(ft&&e.texStorage3D(i.TEXTURE_3D,Ht,tt,j.width,j.height,j.depth),Pt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,dt,F,j.data)):e.texImage3D(i.TEXTURE_3D,0,tt,j.width,j.height,j.depth,0,dt,F,j.data);else if(T.isFramebufferTexture){if(ft)if(ht)e.texStorage2D(i.TEXTURE_2D,Ht,tt,j.width,j.height);else{let lt=j.width,Dt=j.height;for(let kt=0;kt<Ht;kt++)e.texImage2D(i.TEXTURE_2D,kt,tt,lt,Dt,0,dt,F,null),lt>>=1,Dt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){const lt=i.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),j.parentNode!==lt){lt.appendChild(j),u.add(T),lt.onpaint=Dt=>{const kt=Dt.changedElements;for(const St of u)kt.includes(St.image)&&(St.needsUpdate=!0)},lt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{const kt=i.RGBA,St=i.RGBA,se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,kt,St,se,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(pt.length>0){if(ht&&ft){const lt=Ft(pt[0]);e.texStorage2D(i.TEXTURE_2D,Ht,tt,lt.width,lt.height)}for(let lt=0,Dt=pt.length;lt<Dt;lt++)J=pt[lt],ht?Pt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,dt,F,J):e.texImage2D(i.TEXTURE_2D,lt,tt,dt,F,J);T.generateMipmaps=!1}else if(ht){if(ft){const lt=Ft(j);e.texStorage2D(i.TEXTURE_2D,Ht,tt,lt.width,lt.height)}Pt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,F,j)}else e.texImage2D(i.TEXTURE_2D,0,tt,dt,F,j);y(T)&&T.mipmapsAutoUpdate===!0&&M(ot),gt.__version=ut.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ae(L,T,Z){if(T.image.length!==6)return;const ot=Jt(L,T),nt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+Z);const ut=n.get(nt);if(nt.version!==ut.__version||ot===!0){e.activeTexture(i.TEXTURE0+Z);const gt=Yt.getPrimaries(Yt.workingColorSpace),Q=T.colorSpace===si?null:Yt.getPrimaries(T.colorSpace),j=T.colorSpace===si||gt===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const dt=T.isCompressedTexture||T.image[0].isCompressedTexture,F=T.image[0]&&T.image[0].isDataTexture,tt=[];for(let St=0;St<6;St++)!dt&&!F?tt[St]=x(T.image[St],!0,s.maxCubemapSize):tt[St]=F?T.image[St].image:T.image[St],tt[St]=It(T,tt[St]);const J=tt[0],pt=r.convert(T.format,T.colorSpace),ht=r.convert(T.type);let ft=E(T.internalFormat,pt,ht,T.normalized,T.colorSpace);const Pt=T.isVideoTexture!==!0,Ht=ut.__version===void 0||ot===!0,lt=nt.dataReady;let Dt=S(T,J);Bt(i.TEXTURE_CUBE_MAP,T);let kt;if(T.isDepthTexture){if(ft=_(T.format===ni,T.type),Ht)if(Pt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ft,J.width,J.height);else for(let St=0;St<6;St++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ft,J.width,J.height,0,pt,ht,null)}else if(dt){Pt&&Ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,ft,J.width,J.height);for(let St=0;St<6;St++){kt=tt[St].mipmaps;for(let se=0;se<kt.length;se++){const Ie=kt[se];T.format!==wn?pt!==null?Pt?lt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,se,0,0,Ie.width,Ie.height,pt,Ie.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,se,ft,Ie.width,Ie.height,0,Ie.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,se,0,0,Ie.width,Ie.height,pt,ht,Ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,se,ft,Ie.width,Ie.height,0,pt,ht,Ie.data)}}}else{if(kt=T.mipmaps,Pt&&Ht){kt.length>0&&Dt++;const St=Ft(tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,ft,St.width,St.height)}for(let St=0;St<6;St++)if(F){Pt?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,tt[St].width,tt[St].height,pt,ht,tt[St].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ft,tt[St].width,tt[St].height,0,pt,ht,tt[St].data);for(let se=0;se<kt.length;se++){const mi=kt[se].image[St].image;Pt?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,se+1,0,0,mi.width,mi.height,pt,ht,mi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,se+1,ft,mi.width,mi.height,0,pt,ht,mi.data)}}else{Pt?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,pt,ht,tt[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ft,pt,ht,tt[St]);for(let se=0;se<kt.length;se++){const Ie=kt[se];Pt?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,se+1,0,0,pt,ht,Ie.image[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,se+1,ft,pt,ht,Ie.image[St])}}}y(T)&&T.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ut.__version=nt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function _e(L,T,Z,ot,nt,ut){const gt=r.convert(Z.format,Z.colorSpace),Q=r.convert(Z.type),j=E(Z.internalFormat,gt,Q,Z.normalized,Z.colorSpace),dt=n.get(T),F=n.get(Z);if(F.__renderTarget=T,!dt.__hasExternalTextures){const tt=Math.max(1,T.width>>ut),J=Math.max(1,T.height>>ut);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,ut,j,tt,J,T.depth,0,gt,Q,null):e.texImage2D(nt,ut,j,tt,J,0,gt,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),vt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,nt,F.__webglTexture,0,fe(T)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,nt,F.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nn(L,T,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const ot=T.depthTexture,nt=ot&&ot.isDepthTexture?ot.type:null,ut=_(T.stencilBuffer,nt),gt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;vt(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(T),ut,T.width,T.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(T),ut,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ut,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,L)}else{const ot=T.textures;for(let nt=0;nt<ot.length;nt++){const ut=ot[nt],gt=r.convert(ut.format,ut.colorSpace),Q=r.convert(ut.type),j=E(ut.internalFormat,gt,Q,ut.normalized,ut.colorSpace);vt(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(T),j,T.width,T.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(T),j,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,j,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(L,T,Z){const ot=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const nt=n.get(T.depthTexture);nt.__renderTarget=T;const ut=ot?T.depthTexture.image[0]:T.depthTexture.image;(!nt.__webglTexture||ut.width!==T.width||ut.height!==T.height)&&(ut.width=T.width,ut.height=T.height,T.depthTexture.needsUpdate=!0),ot?at(T.depthTexture,0):et(T.depthTexture,0);const gt=nt.__webglTexture,Q=fe(T),j=ot?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,dt=T.depthTexture.format===ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===ei)vt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,j,gt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,dt,j,gt,0);else if(T.depthTexture.format===ni)vt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,j,gt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,dt,j,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function an(L){const T=n.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ot=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ot){const nt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ot.removeEventListener("dispose",nt)};ot.addEventListener("dispose",nt),T.__depthDisposeCallback=nt}T.__boundDepthTexture=ot}if(L.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let ot=0;ot<6;ot++)Le(T.__webglFramebuffer[ot],L,ot);else L.texture.mipmaps.length>0?Le(T.__webglFramebuffer[0],L,0):Le(T.__webglFramebuffer,L,0);else if(Z){T.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ot]),T.__webglDepthbuffer[ot]===void 0)T.__webglDepthbuffer[ot]=i.createRenderbuffer(),Nn(T.__webglDepthbuffer[ot],L,!1);else{const nt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ut)}}else if(L.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Nn(T.__webglDepthbuffer,L,!1);else{const nt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ut)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function on(L,T,Z){const ot=n.get(L);T!==void 0&&_e(ot.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&an(L)}function ln(L){const T=L.texture,Z=n.get(L),ot=n.get(T);L.addEventListener("dispose",D),R(L);const nt=L.textures,ut=L.isWebGLCubeRenderTarget===!0,gt=nt.length>1;if(gt||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=T.version,a.memory.textures++),ut){Z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(T.mipmaps.length>0){Z.__webglFramebuffer[Q]=[];for(let j=0;j<T.mipmaps.length;j++)Z.__webglFramebuffer[Q][j]=i.createFramebuffer()}else Z.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Q=0;Q<T.mipmaps.length;Q++)Z.__webglFramebuffer[Q]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(gt)for(let Q=0,j=nt.length;Q<j;Q++){const dt=n.get(nt[Q]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&vt(L)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Q=0;Q<nt.length;Q++){const j=nt[Q];Z.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[Q]);const dt=r.convert(j.format,j.colorSpace),F=r.convert(j.type),tt=E(j.internalFormat,dt,F,j.normalized,j.colorSpace,L.isXRRenderTarget===!0),J=fe(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,tt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,Z.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Nn(Z.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,T);for(let Q=0;Q<6;Q++)if(T.mipmaps.length>0)for(let j=0;j<T.mipmaps.length;j++)_e(Z.__webglFramebuffer[Q][j],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,j);else _e(Z.__webglFramebuffer[Q],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);y(T)?M(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let Q=0,j=nt.length;Q<j;Q++){const dt=nt[Q],F=n.get(dt);let tt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(tt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,F.__webglTexture),Bt(tt,dt),_e(Z.__webglFramebuffer,L,dt,i.COLOR_ATTACHMENT0+Q,tt,0),y(dt)&&M(tt)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Q=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,ot.__webglTexture),Bt(Q,T),T.mipmaps.length>0)for(let j=0;j<T.mipmaps.length;j++)_e(Z.__webglFramebuffer[j],L,T,i.COLOR_ATTACHMENT0,Q,j);else _e(Z.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,Q,0);y(T)?M(Q):T.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}L.depthBuffer&&an(L)}function V(L){const T=L.textures;for(let Z=0,ot=T.length;Z<ot;Z++){const nt=T[Z];if(y(nt)&&nt.mipmapsAutoUpdate===!0){const ut=b(L),gt=n.get(nt).__webglTexture;e.bindTexture(ut,gt),M(ut),e.unbindTexture()}}}const cn=[];function ue(L){if(L.samples>0){if(vt(L)===!1){const T=L.textures,Z=L.width,ot=L.height;let nt=i.COLOR_BUFFER_BIT;const ut=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(L),Q=T.length>1;if(Q)for(let dt=0;dt<T.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let dt=0;dt<T.length;dt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[dt]);const F=n.get(T[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,F,0)}i.blitFramebuffer(0,0,Z,ot,0,0,Z,ot,nt,i.NEAREST),l===!0&&(cn.length=0,cn.push(i.COLOR_ATTACHMENT0+dt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&cn.push(ut),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,cn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let dt=0;dt<T.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[dt]);const F=n.get(T[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,F,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function fe(L){return Math.min(s.maxSamples,L.samples)}function vt(L){const T=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ce(L){const T=a.render.frame;h.get(L)!==T&&(h.set(L,T),L.update())}function It(L,T){const Z=L.colorSpace,ot=L.format,nt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==qs&&Z!==si&&(Yt.getTransfer(Z)===ne?(ot!==wn||nt!==Ke)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",Z)),T}function Ft(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=st,this.resetTextureUnits=B,this.getTextureUnits=H,this.setTextureUnits=it,this.setTexture2D=et,this.setTexture2DArray=rt,this.setTexture3D=xt,this.setTextureCube=at,this.rebindTextures=on,this.setupRenderTarget=ln,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=an,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=vt,this.dispose=z}function Q0(i,t){function e(n,s=si){let r;const a=Yt.getTransfer(s);if(n===Ke)return i.UNSIGNED_BYTE;if(n===ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_l)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pl)return i.BYTE;if(n===ml)return i.SHORT;if(n===us)return i.UNSIGNED_SHORT;if(n===ha)return i.INT;if(n===bn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===xl)return i.ALPHA;if(n===vl)return i.RGB;if(n===wn)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===ni)return i.DEPTH_STENCIL;if(n===da)return i.RED;if(n===pa)return i.RED_INTEGER;if(n===ii)return i.RG;if(n===ma)return i.RG_INTEGER;if(n===ga)return i.RGBA_INTEGER;if(n===Bs||n===ks||n===Gs||n===Hs)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_a||n===xa||n===va||n===Ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sa||n===ya||n===Ea||n===ba||n===wa||n===Vs||n===Ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sa||n===ya)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ea)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ba)return r.COMPRESSED_R11_EAC;if(n===wa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Vs)return r.COMPRESSED_RG11_EAC;if(n===Ta)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa||n===Da||n===La||n===Ia||n===Na||n===Ua||n===Fa||n===Oa||n===za||n===Ba||n===ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Aa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ia)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ua)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ba)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===Ha||n===Va)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ga)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wa||n===Xa||n===Ws||n===qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ws)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const j0=`
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

}`;class eg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new oc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new qn({vertexShader:j0,fragmentShader:tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ng extends ri{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new eg,p={},x=e.getContextAttributes();let y=null,M=null;const b=[],E=[],_=new Lt;let S=null,R=null;const w=new Mn;w.viewport=new ce;const C=new Mn;C.viewport=new ce;const D=[w,C],O=new qf;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=b[q];return et===void 0&&(et=new io,b[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=b[q];return et===void 0&&(et=new io,b[q]=et),et.getGripSpace()},this.getHand=function(q){let et=b[q];return et===void 0&&(et=new io,b[q]=et),et.getHandSpace()};function U(q){const et=E.indexOf(q.inputSource);if(et===-1)return;const rt=b[et];rt!==void 0&&(rt.update(q.inputSource,q.frame,c||a),rt.dispatchEvent({type:q.type,data:q.inputSource}))}function I(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",X);for(let q=0;q<b.length;q++){const et=E[q];et!==null&&(E[q]=null,b[q].disconnect(et))}P=null,z=null,m.reset();for(const q in p)delete p[q];if(t.setRenderTarget(y),f=null,d=null,u=null,s=null,M=null,st.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(_.width,_.height,!1),R!==null){const q=R.camera;q.fov=R.fov,q.zoom=R.zoom,q.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",I),s.addEventListener("inputsourceschange",X),x.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,xt=null,at=null;x.depth&&(at=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=x.stencil?ni:ei,xt=x.stencil?Di:bn);const bt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Tn(d.textureWidth,d.textureHeight,{format:wn,type:Ke,depthTexture:new qi(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const rt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Tn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:Ke,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(q){for(let et=0;et<q.removed.length;et++){const rt=q.removed[et],xt=E.indexOf(rt);xt>=0&&(E[xt]=null,b[xt].disconnect(rt))}for(let et=0;et<q.added.length;et++){const rt=q.added[et];let xt=E.indexOf(rt);if(xt===-1){for(let bt=0;bt<b.length;bt++)if(bt>=E.length){E.push(rt),xt=bt;break}else if(E[bt]===null){E[bt]=rt,xt=bt;break}if(xt===-1)break}const at=b[xt];at&&at.connect(rt)}}function N(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let et=q.near,rt=q.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(rt=m.depthFar)),O.near=C.near=w.near=et,O.far=C.far=w.far=rt,(P!==O.near||z!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),P=O.near,z=O.far),O.layers.mask=q.layers.mask|6,w.layers.mask=O.layers.mask&-5,C.layers.mask=O.layers.mask&-3;const xt=q.parent,at=O.cameras;N(O,xt);for(let bt=0;bt<at.length;bt++)N(at[bt],xt);O.projectionMatrix.copy(w.projectionMatrix),O.projectionMatrixInverse.copy(w.projectionMatrixInverse),R===null&&q.isPerspectiveCamera&&(R={camera:q,fov:q.fov,zoom:q.zoom}),B(q,O,xt)};function B(q,et,rt){rt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(rt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ms*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(q){return p[q]};let H=null;function it(q,et){if(h=et.getViewerPose(c||a),g=et,h!==null){const rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let xt=!1;rt.length!==O.cameras.length&&(O.cameras.length=0,xt=!0);for(let Et=0;Et<rt.length;Et++){const Bt=rt[Et];let Jt=null;if(f!==null)Jt=f.getViewport(Bt);else{const ge=u.getViewSubImage(d,Bt);Jt=ge.viewport,Et===0&&(t.setRenderTargetTextures(M,ge.colorTexture,ge.depthStencilTexture),t.setRenderTarget(M))}let zt=D[Et];zt===void 0&&(zt=new Mn,zt.layers.enable(Et),zt.viewport=new ce,D[Et]=zt),zt.matrix.fromArray(Bt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Bt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Et===0&&(O.matrix.copy(zt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),xt===!0&&O.cameras.push(zt)}const at=s.enabledFeatures;if(at&&at.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const Et=u.getDepthInformation(rt[0]);Et&&Et.isValid&&Et.texture&&m.init(Et,s.renderState)}if(at&&at.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let Et=0;Et<rt.length;Et++){const Bt=rt[Et].camera;if(Bt){let Jt=p[Bt];Jt||(Jt=new oc,p[Bt]=Jt);const zt=u.getCameraImage(Bt);Jt.sourceTexture=zt}}}}for(let rt=0;rt<b.length;rt++){const xt=E[rt],at=b[rt];xt!==null&&at!==void 0&&at.update(xt,et,c||a)}H&&H(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const st=new Dc;st.setAnimationLoop(it),this.setAnimationLoop=function(q){H=q},this.dispose=function(){}}}const ig=new $t,lh=new Ut;lh.set(-1,0,0,0,1,0,0,0,1);function sg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,M=x.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(ig.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(lh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rg(i,t,e,n){let s={},r={};function a(x,y){const M=y.program;n.uniformBlockBinding(x,M,s[x.id])}function o(x,y){let M=s[x.id];M===void 0&&(g(x),M=l(x),s[x.id]=M,x.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(x,b);const E=t.render.frame;r[x.id]!==E&&(c(x),r[x.id]=E)}function l(x){const y=i.createBuffer(),M=x.__size,b=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,M,b),i.bindBuffer(i.UNIFORM_BUFFER,null),y}function c(x){const y=s[x.id],M=x.uniforms,b=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,_=M.length;E<_;E++){const S=M[E];if(Array.isArray(S))for(let R=0,w=S.length;R<w;R++)h(S[R],E,R,b);else h(S,E,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,y,M,b){if(d(x,y,M,b)===!0){const E=x.__offset,_=x.value;if(Array.isArray(_)){let S=0;for(let R=0;R<_.length;R++){const w=_[R],C=v(w,!0);u(w,x.__data,S),S+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,x.__data)}}function u(x,y,M){typeof x=="number"||typeof x=="boolean"?y[M]=x:x.isMatrix3?(y[M]=x.elements[0],y[M+1]=x.elements[1],y[M+2]=x.elements[2],y[M+3]=0,y[M+4]=x.elements[3],y[M+5]=x.elements[4],y[M+6]=x.elements[5],y[M+7]=0,y[M+8]=x.elements[6],y[M+9]=x.elements[7],y[M+10]=x.elements[8],y[M+11]=0):ArrayBuffer.isView(x)?y.set(x.subarray(0,y.length-M),M):x.toArray(y,M)}function d(x,y,M,b){const E=x.value,_=y+"_"+M;if(Array.isArray(E)){b[_]===void 0&&(b[_]=[]);const S=b[_];let R=!1;for(let w=0;w<E.length;w++)f(E[w],S,w)===!0&&(R=!0);return R}return f(E,b,_)}function f(x,y,M){if(y[M]===void 0)return typeof x=="number"||typeof x=="boolean"?y[M]=x:ArrayBuffer.isView(x)?y[M]=x.slice():y[M]=x.clone(),!0;{const b=y[M];if(typeof x=="number"||typeof x=="boolean"){if(b!==x)return y[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(b.equals(x)===!1)return b.copy(x),!0}}return!1}function g(x){const y=x.uniforms;let M=0;const b=16;for(let _=0,S=y.length;_<S;_++){const R=Array.isArray(y[_])?y[_]:[y[_]];for(let w=0,C=R.length;w<C;w++){const D=R[w],O=Array.isArray(D.value)?D.value:[D.value],P=Array.isArray(y[_])||Array.isArray(D.value);let z=M;for(let I=0,X=O.length;I<X;I++){const N=O[I],B=v(N,P),H=M%b,it=H%B.boundary,st=H+it;M+=it,st!==0&&b-st<B.storage&&(M+=b-st),I===0&&(z=M),M+=B.storage}const U=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new U((M-z)/Float32Array.BYTES_PER_ELEMENT),D.__offset=z}}const E=M%b;return E>0&&(M+=b-E),x.__size=M,x.__cache={},this}function v(x,y){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=16,M.storage=48):x.isMatrix4?(M.boundary=16,M.storage=64):x.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",x),y===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(x){const y=x.target;y.removeEventListener("dispose",m),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:p}}const ag=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Dn=null;function og(){return Dn===null&&(Dn=new dr(ag,16,16,ii,fn),Dn.name="DFG_LUT",Dn.minFilter=We,Dn.magFilter=We,Dn.wrapS=hn,Dn.wrapT=hn,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}class lg{constructor(t={}){const{canvas:e=Su(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ke}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=f,m=new Set([ga,ma,pa]),p=new Set([Ke,bn,us,Di,ua,fa]),x=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let b=null,E=null;const _=[],S=[];let R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let C=!1,D=null,O=null,P=null,z=null;this._outputColorSpace=ye;let U=0,I=0,X=null,N=-1,B=null;const H=new ce,it=new ce;let st=null;const q=new Rt(0);let et=0,rt=e.width,xt=e.height,at=1,bt=null,Wt=null;const Et=new ce(0,0,rt,xt),Bt=new ce(0,0,rt,xt);let Jt=!1;const zt=new Es,ge=new vo;let ee=!1,ae=!1;const _e=new $t,Nn=new G,Le=new ce,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let on=!1;function ln(){return X===null?at:1}let V=n;function cn(A,k){return e.getContext(A,k)}let ue,fe,vt,Ce,It,Ft,L,T,Z,ot,nt,ut,gt,Q,j,dt,F,tt,J,pt,ht,ft,Pt;try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qn}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",St,!1),V===null){const k="webgl2";if(V=cn(k,A),V===null)throw cn(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(A){throw e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Kt("WebGLRenderer: "+A.message),A}function Ht(){ue=new um(V),ue.init(),ht=new Q0(V,ue),fe=new tm(V,ue,t,ht),vt=new $0(V,ue),fe.reversedDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),O=V.createFramebuffer(),P=V.createFramebuffer(),z=V.createFramebuffer(),Ce=new pm(V),It=new F0,Ft=new J0(V,ue,vt,It,fe,ht,Ce),L=new hm(w),T=new $f(V),ft=new Qp(V,T),Z=new fm(V,T,Ce,ft),ot=new gm(V,Z,T,ft,Ce),tt=new mm(V,fe,Ft),j=new em(It),nt=new U0(w,L,ue,fe,ft,j),ut=new sg(w,It),gt=new z0,Q=new W0(ue),F=new Jp(w,L,vt,ot,g,l),dt=new K0(w,ot,fe),Pt=new rg(V,Ce,fe,vt),J=new jp(V,ue,Ce),pt=new dm(V,ue,Ce),Ce.programs=nt.programs,w.capabilities=fe,w.extensions=ue,w.properties=It,w.renderLists=gt,w.shadowMap=dt,w.state=vt,w.info=Ce}v!==Ke&&(R=new xm(v,e.width,e.height,o,s,r));const lt=new ng(w,V);this.xr=lt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=ue.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ue.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(A){A!==void 0&&(at=A,this.setSize(rt,xt,!1))},this.getSize=function(A){return A.set(rt,xt)},this.setSize=function(A,k,$=!0){if(lt.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=A,xt=k,e.width=Math.floor(A*at),e.height=Math.floor(k*at),$===!0&&(e.style.width=A+"px",e.style.height=k+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(rt*at,xt*at).floor()},this.setDrawingBufferSize=function(A,k,$){rt=A,xt=k,at=$,e.width=Math.floor(A*$),e.height=Math.floor(k*$),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(v===Ke){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(Et)},this.setViewport=function(A,k,$,Y){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,k,$,Y),vt.viewport(H.copy(Et).multiplyScalar(ln()).round())},this.getScissor=function(A){return A.copy(Bt)},this.setScissor=function(A,k,$,Y){A.isVector4?Bt.set(A.x,A.y,A.z,A.w):Bt.set(A,k,$,Y),vt.scissor(it.copy(Bt).multiplyScalar(ln()).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(A){vt.setScissorTest(Jt=A)},this.setOpaqueSort=function(A){bt=A},this.setTransparentSort=function(A){Wt=A},this.getClearColor=function(A){return A.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,$=!0){let Y=0;if(A){let K=!1;if(X!==null){const _t=X.texture.format;K=m.has(_t)}if(K){const _t=X.texture.type,wt=p.has(_t),mt=F.getClearColor(),yt=F.getClearAlpha(),Ct=mt.r,Ot=mt.g,Xt=mt.b;wt?(x[0]=Ct,x[1]=Ot,x[2]=Xt,x[3]=yt,V.clearBufferuiv(V.COLOR,0,x)):(y[0]=Ct,y[1]=Ot,y[2]=Xt,y[3]=yt,V.clearBufferiv(V.COLOR,0,y))}else Y|=V.COLOR_BUFFER_BIT}k&&(Y|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),F.dispose(),gt.dispose(),Q.dispose(),Ft.dispose(),It.dispose(),L.dispose(),ot.dispose(),Z.dispose(),ft.dispose(),Pt.dispose(),nt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Dh),lt.removeEventListener("sessionend",Lh),wi.stop()};function Dt(A){A.preventDefault(),wl("WebGLRenderer: Context Lost."),C=!0}function kt(){wl("WebGLRenderer: Context Restored."),C=!1;const A=Ce.autoReset,k=dt.enabled,$=dt.autoUpdate,Y=dt.needsUpdate,K=dt.type;Ht(),Ce.autoReset=A,dt.enabled=k,dt.autoUpdate=$,dt.needsUpdate=Y,dt.type=K}function St(A){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function se(A){const k=A.target;k.removeEventListener("dispose",se),Ie(k)}function Ie(A){mi(A),It.remove(A)}function mi(A){const k=It.get(A).programs;k!==void 0&&(k.forEach(function($){nt.releaseProgram($)}),A.isShaderMaterial&&nt.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,$,Y,K,_t){k===null&&(k=an);const wt=K.isMesh&&K.matrixWorld.determinantAffine()<0,mt=q_(A,k,$,Y,K);vt.setMaterial(Y,wt);let yt=$.index,Ct=1;if(Y.wireframe===!0){if(yt=Z.getWireframeAttribute($),yt===void 0)return;Ct=2}const Ot=$.drawRange,Xt=$.attributes.position;let Tt=Ot.start*Ct,qt=(Ot.start+Ot.count)*Ct;_t!==null&&(Tt=Math.max(Tt,_t.start*Ct),qt=Math.min(qt,(_t.start+_t.count)*Ct)),yt!==null?(Tt=Math.max(Tt,0),qt=Math.min(qt,yt.count)):Xt!=null&&(Tt=Math.max(Tt,0),qt=Math.min(qt,Xt.count));const Se=qt-Tt;if(Se<0||Se===1/0)return;ft.setup(K,Y,mt,$,yt);let oe,re=J;if(yt!==null&&(oe=T.get(yt),re=pt,re.setIndex(oe)),K.isMesh)Y.wireframe===!0?(vt.setLineWidth(Y.wireframeLinewidth*ln()),re.setMode(V.LINES)):re.setMode(V.TRIANGLES);else if(K.isLine){let Ge=Y.linewidth;Ge===void 0&&(Ge=1),vt.setLineWidth(Ge*ln()),K.isLineSegments?re.setMode(V.LINES):K.isLineLoop?re.setMode(V.LINE_LOOP):re.setMode(V.LINE_STRIP)}else K.isPoints?re.setMode(V.POINTS):K.isSprite&&re.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))re.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Ge=K._multiDrawStarts,At=K._multiDrawCounts,qe=K._multiDrawCount,te=yt?T.get(yt).bytesPerElement:1,Ti=It.get(Y).currentProgram.getUniforms();for(let He=0;He<qe;He++)Ti.setValue(V,"_gl_DrawID",He),re.render(Ge[He]/te,At[He])}else if(K.isInstancedMesh)re.renderInstances(Tt,Se,K.count);else if($.isInstancedBufferGeometry){const Ge=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,At=Math.min($.instanceCount,Ge);re.renderInstances(Tt,Se,At)}else re.render(Tt,Se)};function Ph(A,k,$,Y){D!==null&&A.isNodeMaterial&&D.setObject(Y,A),ee===!0&&j.setState(A,$,!1),A.transparent===!0&&A.side===ze&&A.forceSinglePass===!1?(A.side=Ve,A.needsUpdate=!0,Fs(A,k,Y),A.side=ti,A.needsUpdate=!0,Fs(A,k,Y),A.side=ze):Fs(A,k,Y)}this.compile=function(A,k,$=null){$===null&&($=A),D!==null&&D.renderStart(A,k,$),E=Q.get($),E.init(k),S.push(E),$.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),A!==$&&A.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),ae=this.localClippingEnabled,ee=j.init(this.clippingPlanes,ae),ee===!0&&j.setGlobalState(this.clippingPlanes,k),D!==null&&dt.render(E.state.shadowsArray,$,k);const Y=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const _t=K.material;if(_t)if(Array.isArray(_t))for(let wt=0;wt<_t.length;wt++){const mt=_t[wt];Ph(mt,$,k,K),Y.add(mt)}else Ph(_t,$,k,K),Y.add(_t)}),E=S.pop(),D!==null&&D.renderEnd(),Y},this.compileAsync=function(A,k,$=null){const Y=this.compile(A,k,$);return new Promise(K=>{function _t(){if(Y.forEach(function(wt){const yt=It.get(wt).currentProgram;(yt===void 0||yt.isReady())&&Y.delete(wt)}),Y.size===0){K(A);return}setTimeout(_t,10)}ue.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let tl=null;function W_(A){tl&&tl(A)}function Dh(){wi.stop()}function Lh(){wi.start()}const wi=new Dc;wi.setAnimationLoop(W_),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(A){tl=A,lt.setAnimationLoop(A),A===null?wi.stop():wi.start()},lt.addEventListener("sessionstart",Dh),lt.addEventListener("sessionend",Lh),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D!==null&&D.renderStart(A,k);const $=lt.enabled===!0&&lt.isPresenting===!0,Y=R!==null&&(X===null||$)&&R.begin(w,X);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(k),k=lt.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,k,X),E=Q.get(A,S.length),E.init(k),E.state.textureUnits=Ft.getTextureUnits(),S.push(E),_e.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?ge.setFromArrayCamera(k):zt.setFromProjectionMatrix(_e,dn,k.reversedDepth),ae=this.localClippingEnabled,ee=j.init(this.clippingPlanes,ae),b=gt.get(A,_.length),b.init(),_.push(b),this.info.render.frame++,lt.enabled===!0&&lt.isPresenting===!0){const wt=w.xr.getDepthSensingMesh();wt!==null&&el(wt,k,-1/0,w.sortObjects)}el(A,k,0,w.sortObjects),b.finish(),D!==null&&D.updateLights(E.state.lightsArray),w.sortObjects===!0&&b.sort(bt,Wt),on=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,on&&F.addToRenderList(b,A),this.info.autoReset===!0&&this.info.reset(),ee===!0&&j.beginShadows();const K=E.state.shadowsArray;if(dt.render(K,A,k),ee===!0&&j.endShadows(),(Y&&R.hasRenderPass())===!1){const wt=b.opaque,mt=b.transmissive;if(E.setupLights(),k.isArrayCamera){const yt=k.cameras;if(mt.length>0)for(let Ct=0,Ot=yt.length;Ct<Ot;Ct++){const Xt=yt[Ct];Nh(wt,mt,A,Xt)}on&&F.render(A);for(let Ct=0,Ot=yt.length;Ct<Ot;Ct++){const Xt=yt[Ct];Ih(b,A,Xt,Xt.viewport)}}else mt.length>0&&Nh(wt,mt,A,k),on&&F.render(A),Ih(b,A,k)}X!==null&&I===0&&(Ft.updateMultisampleRenderTarget(X),Ft.updateRenderTargetMipmap(X)),Y&&R.end(w),A.isScene===!0&&A.onAfterRender(w,A,k),ft.resetDefaultState(),N=-1,B=null,S.pop(),S.length>0?(E=S[S.length-1],Ft.setTextureUnits(E.state.textureUnits),ee===!0&&j.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,D!==null&&D.renderEnd()};function el(A,k,$,Y){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){const wt=k.isArrayCamera?ge:zt;if(!A.frustumCulled||A.intersectsFrustum(wt)){Y&&Le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);const mt=ot.update(A),yt=A.material;yt.visible&&b.push(A,mt,yt,$,Le.z,null,k)}}else if(A.isMesh||A.isLine||A.isPoints){const wt=k.isArrayCamera?ge:zt;if(!A.frustumCulled||A.intersectsFrustum(wt)){const mt=ot.update(A),yt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Le.copy(A.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Le.copy(mt.boundingSphere.center)),Le.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(yt)){const Ct=mt.groups;for(let Ot=0,Xt=Ct.length;Ot<Xt;Ot++){const Tt=Ct[Ot],qt=yt[Tt.materialIndex];qt&&qt.visible&&b.push(A,mt,qt,$,Le.z,Tt,k)}}else yt.visible&&b.push(A,mt,yt,$,Le.z,null,k)}}}const _t=A.children;for(let wt=0,mt=_t.length;wt<mt;wt++)el(_t[wt],k,$,Y)}function Ih(A,k,$,Y){const{opaque:K,transmissive:_t,transparent:wt}=A;E.setupLightsView($),ee===!0&&j.setGlobalState(w.clippingPlanes,$),Y&&vt.viewport(H.copy(Y)),K.length>0&&Zr(K,k,$),_t.length>0&&Zr(_t,k,$),wt.length>0&&Zr(wt,k,$),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Nh(A,k,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Y.id]===void 0){const Tt=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Y.id]=new Tn(1,1,{generateMipmaps:!0,type:Tt?fn:Ke,minFilter:En,samples:Math.max(4,fe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}const _t=E.state.transmissionRenderTarget[Y.id],wt=Y.viewport||H;_t.setSize(wt.z*w.transmissionResolutionScale,wt.w*w.transmissionResolutionScale);const mt=w.getRenderTarget(),yt=w.getActiveCubeFace(),Ct=w.getActiveMipmapLevel();w.setRenderTarget(_t),w.getClearColor(q),et=w.getClearAlpha(),et<1&&w.setClearColor(16777215,.5),w.clear(),on&&F.render($);const Ot=w.toneMapping;w.toneMapping=On;const Xt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),E.setupLightsView(Y),ee===!0&&j.setGlobalState(w.clippingPlanes,Y),Zr(A,$,Y),Ft.updateMultisampleRenderTarget(_t),Ft.updateRenderTargetMipmap(_t),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let qt=0,Se=k.length;qt<Se;qt++){const oe=k[qt],{object:re,geometry:Ge,material:At,group:qe}=oe;if(At.side===ze&&re.layers.test(Y.layers)){const te=At.side;At.side=Ve,At.needsUpdate=!0,Uh(re,$,Y,Ge,At,qe),At.side=te,At.needsUpdate=!0,Tt=!0}}Tt===!0&&(Ft.updateMultisampleRenderTarget(_t),Ft.updateRenderTargetMipmap(_t))}w.setRenderTarget(mt,yt,Ct),w.setClearColor(q,et),Xt!==void 0&&(Y.viewport=Xt),w.toneMapping=Ot}function Zr(A,k,$){const Y=k.isScene===!0?k.overrideMaterial:null;for(let K=0,_t=A.length;K<_t;K++){const wt=A[K],{object:mt,geometry:yt,group:Ct}=wt;let Ot=wt.material;Ot.allowOverride===!0&&Y!==null&&(Ot=Y),mt.layers.test($.layers)&&Uh(mt,k,$,yt,Ot,Ct)}}function Uh(A,k,$,Y,K,_t){D!==null&&K.isNodeMaterial&&D.setObject(A,K),A.onBeforeRender(w,k,$,Y,K,_t),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(w,k,$,Y,A,_t),K.transparent===!0&&K.side===ze&&K.forceSinglePass===!1?(K.side=Ve,K.needsUpdate=!0,w.renderBufferDirect($,k,Y,K,A,_t),K.side=ti,K.needsUpdate=!0,w.renderBufferDirect($,k,Y,K,A,_t),K.side=ze):w.renderBufferDirect($,k,Y,K,A,_t),A.onAfterRender(w,k,$,Y,K,_t)}function Fh(A){let k=0;for(const $ of A)$.texture!==null&&k++;return k}function Fs(A,k,$){k.isScene!==!0&&(k=an);const Y=It.get(A),K=E.state.lights,_t=E.state.shadowsArray,wt=K.state.version,mt=nt.getParameters(A,K.state,_t,k,$,E.state.lightProbeGridArray),yt=nt.getProgramCacheKey(mt);let Ct=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;const Ot=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=L.get(A.envMap||Y.environment,Ot),Y.envMapRotation=Y.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ct===void 0&&(A.addEventListener("dispose",se),Ct=new Map,Y.programs=Ct,Y.programVariants=new Map);let Xt=Ct.get(yt);if(Xt!==void 0){if(Y.currentProgram===Xt&&Y.lightsStateVersion===wt)return zh(A,mt),Xt}else mt.uniforms=nt.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,$,mt),A.onBeforeCompile(mt,w),Xt=nt.acquireProgram(mt,yt),Ct.set(yt,Xt),Y.uniforms=mt.uniforms;const Tt=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Tt.clippingPlanes=j.uniform),zh(A,mt),Y.needsLights=Z_(A),Y.lightsStateVersion=wt,Y.needsLights&&(Tt.ambientLightColor.value=K.state.ambient,Tt.lightProbe.value=K.state.probe,Tt.sunLights.value=K.state.sun,Tt.sunLightShadows.value=K.state.sunShadow,Tt.directionalLights.value=K.state.directional,Tt.directionalLightShadows.value=K.state.directionalShadow,Tt.spotLights.value=K.state.spot,Tt.spotLightShadows.value=K.state.spotShadow,Tt.rectAreaLights.value=K.state.rectArea,Tt.ltc_1.value=K.state.rectAreaLTC1,Tt.ltc_2.value=K.state.rectAreaLTC2,Tt.pointLights.value=K.state.point,Tt.pointLightShadows.value=K.state.pointShadow,Tt.hemisphereLights.value=K.state.hemi,Tt.sunShadowMatrix.value=K.state.sunShadowMatrix,Tt.sunShadowCascade.value=K.state.sunShadowCascade,Tt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Tt.spotLightMatrix.value=K.state.spotLightMatrix,Tt.spotLightMap.value=K.state.spotLightMap,Tt.pointShadowMatrix.value=K.state.pointShadowMatrix),Y.numLightProbeGrids=Fh(E.state.lightProbeGridArray),Y.currentProgram=Xt,Y.uniformsList=null,Xt}function X_(A,k,$,Y,K){const _t=It.get(A),wt=_t.currentProgram.id+","+Y+","+K;let mt=_t.programVariants.get(wt);return mt===void 0?(mt=Fs(A,k,$),_t.programVariants.set(wt,mt)):(_t.currentProgram=mt,_t.uniformsList=null,_t.outputColorSpace=Y,_t.toneMapping=K),mt}function Oh(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Cr.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function zh(A,k){const $=It.get(A);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function q_(A,k,$,Y,K){k.isScene!==!0&&(k=an),Ft.resetTextureUnits();const _t=k.fog,wt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,mt=X===null?w.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Yt.workingColorSpace,yt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ct=L.get(Y.envMap||wt,yt),Ot=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xt=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Tt=!!$.morphAttributes.position,qt=!!$.morphAttributes.normal,Se=!!$.morphAttributes.color;let oe=On;Y.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(oe=w.toneMapping);const re=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ge=re!==void 0?re.length:0,At=It.get(Y),qe=E.state.lights;if(ee===!0&&(ae===!0||A!==B)){const xe=A===B&&Y.id===N;j.setState(Y,A,xe)}let te=!1,Ti=!1;Y.version===At.__version?At.needsLights&&At.lightsStateVersion!==qe.state.version||K.isBatchedMesh&&At.batching===!1||!K.isBatchedMesh&&At.batching===!0||K.isBatchedMesh&&At.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&At.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&At.instancing===!1||!K.isInstancedMesh&&At.instancing===!0||K.isSkinnedMesh&&At.skinning===!1||!K.isSkinnedMesh&&At.skinning===!0||K.isInstancedMesh&&At.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&At.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&At.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&At.instancingMorph===!1&&K.morphTexture!==null||At.envMap!==Ct||Y.fog===!0&&At.fog!==_t||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==j.numPlanes||At.numIntersection!==j.numIntersection)||At.vertexAlphas!==Ot||At.vertexTangents!==Xt||At.morphTargets!==Tt||At.morphNormals!==qt||At.morphColors!==Se||At.morphTargetsCount!==Ge||At.numLightProbeGrids!==Fh(E.state.lightProbeGridArray)?te=!0:(At.outputColorSpace!==mt||At.toneMapping!==oe)&&(Ti=!0):(te=!0,At.__version=Y.version);let He=At.currentProgram;(te===!0||Ti===!0)&&(He=Ti===!0?X_(Y,k,K,mt,oe):Fs(Y,k,K),D&&Y.isNodeMaterial&&D.onUpdateProgram(Y,He,At));let Kr=!1,gi=!1,Ai=!1;const Zt=He.getUniforms(),Oe=At.uniforms;if(vt.useProgram(He.program)&&(Kr=!0,gi=!0,Ai=!0),Y.id!==N&&(N=Y.id,gi=!0),Kr||B!==A){vt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Zt.setValue(V,"projectionMatrix",A.projectionMatrix),Zt.setValue(V,"viewMatrix",A.matrixWorldInverse);const Ne=Zt.map.cameraPosition;Ne!==void 0&&Ne.setValue(V,Nn.setFromMatrixPosition(A.matrixWorld)),fe.logarithmicDepthBuffer&&Zt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Zt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),B!==A&&(B=A,gi=!0,Ai=!0)}if(At.needsLights&&(qe.state.sunShadowMap.length>0&&Zt.setValue(V,"sunShadowMap",qe.state.sunShadowMap,Ft),qe.state.directionalShadowMap.length>0&&Zt.setValue(V,"directionalShadowMap",qe.state.directionalShadowMap,Ft),qe.state.spotShadowMap.length>0&&Zt.setValue(V,"spotShadowMap",qe.state.spotShadowMap,Ft),qe.state.pointShadowMap.length>0&&Zt.setValue(V,"pointShadowMap",qe.state.pointShadowMap,Ft)),K.isSkinnedMesh){Zt.setOptional(V,K,"bindMatrix"),Zt.setOptional(V,K,"bindMatrixInverse");const xe=K.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),Zt.setValue(V,"boneTexture",xe.boneTexture,Ft))}K.isBatchedMesh&&(Zt.setOptional(V,K,"batchingTexture"),Zt.setValue(V,"batchingTexture",K._matricesTexture,Ft),Zt.setOptional(V,K,"batchingIdTexture"),Zt.setValue(V,"batchingIdTexture",K._indirectTexture,Ft),Zt.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Zt.setValue(V,"batchingColorTexture",K._colorsTexture,Ft));const Sn=$.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&tt.update(K,$,He),(gi||At.receiveShadow!==K.receiveShadow)&&(At.receiveShadow=K.receiveShadow,Zt.setValue(V,"receiveShadow",K.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(Oe.envMapIntensity.value=k.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=og()),gi){if(Zt.setValue(V,"toneMappingExposure",w.toneMappingExposure),At.needsLights&&Y_(Oe,Ai),_t&&Y.fog===!0&&ut.refreshFogUniforms(Oe,_t),ut.refreshMaterialUniforms(Oe,Y,at,xt,E.state.transmissionRenderTarget[A.id]),At.needsLights&&At.numLightProbeGrids>0){const xe=M;let Ne=0;for(const Jn of E.state.lightProbeGridArray)Jn.texture!==null&&(xe.textures[Ne]=Jn.texture,xe.min[Ne]=Jn.boundingBox.min,xe.max[Ne]=Jn.boundingBox.max,xe.resolution[Ne]=Jn.resolution,Ne++);for(const Jn in xe)xe[Jn].length=Ne;Oe.probesSH.value=xe.textures,Oe.probesMin.value=xe.min,Oe.probesMax.value=xe.max,Oe.probesResolution.value=xe.resolution}Cr.upload(V,Oh(At),Oe,Ft)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Cr.upload(V,Oh(At),Oe,Ft),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Zt.setValue(V,"center",K.center),Zt.setValue(V,"modelViewMatrix",K.modelViewMatrix),Zt.setValue(V,"normalMatrix",K.normalMatrix),Zt.setValue(V,"modelMatrix",K.matrixWorld),Y.uniformsGroups!==void 0){const xe=Y.uniformsGroups;for(let Ne=0,Jn=xe.length;Ne<Jn;Ne++){const kh=xe[Ne];Pt.update(kh,He),Pt.bind(kh,He)}}return He}function Y_(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Z_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,k,$){const Y=It.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),It.get(A.texture).__webglTexture=k,It.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const $=It.get(A);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,$=0){X=A,U=k,I=$;let Y=null,K=!1,_t=!1;if(A){const mt=It.get(A);if(mt.__useDefaultFramebuffer!==void 0){vt.bindFramebuffer(V.FRAMEBUFFER,mt.__webglFramebuffer),H.copy(A.viewport),it.copy(A.scissor),st=A.scissorTest,vt.viewport(H),vt.scissor(it),vt.setScissorTest(st),N=-1;return}else if(mt.__webglFramebuffer===void 0)Ft.setupRenderTarget(A);else if(mt.__hasExternalTextures)Ft.rebindTextures(A,It.get(A.texture).__webglTexture,It.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ot=A.depthTexture;if(mt.__boundDepthTexture!==Ot){if(Ot!==null&&It.has(Ot)&&(A.width!==Ot.image.width||A.height!==Ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(A)}}const yt=A.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(_t=!0);const Ct=It.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ct[k])?Y=Ct[k][$]:Y=Ct[k],K=!0):A.samples>0&&Ft.useMultisampledRTT(A)===!1?Y=It.get(A).__webglMultisampledFramebuffer:Array.isArray(Ct)?Y=Ct[$]:Y=Ct,H.copy(A.viewport),it.copy(A.scissor),st=A.scissorTest}else H.copy(Et).multiplyScalar(at).floor(),it.copy(Bt).multiplyScalar(at).floor(),st=Jt;if($!==0&&(Y=O),vt.bindFramebuffer(V.FRAMEBUFFER,Y)&&vt.drawBuffers(A,Y),vt.viewport(H),vt.scissor(it),vt.setScissorTest(st),K){const mt=It.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,mt.__webglTexture,$)}else if(_t){const mt=k;for(let yt=0;yt<A.textures.length;yt++){const Ct=It.get(A.textures[yt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+yt,Ct.__webglTexture,$,mt)}}else if(A!==null&&$!==0){const mt=It.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,mt.__webglTexture,$)}N=-1};function Bh(A){const k=It.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=fe.textureFormatReadable(A.format),k.__typeReadable=fe.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,$,Y,K,_t,wt,mt=0){if(!(A&&A.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=It.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(yt=yt[wt],Array.isArray(yt)&&(yt=yt[0])),yt){vt.bindFramebuffer(V.FRAMEBUFFER,yt);try{const Ct=A.textures[mt],Ot=Ct.format,Xt=Ct.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+mt);const Tt=Bh(Ct);if(Tt.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-Y&&$>=0&&$<=A.height-K&&V.readPixels(k,$,Y,K,ht.convert(Ot),ht.convert(Xt),_t)}finally{const Ct=X!==null?It.get(X).__webglFramebuffer:null;vt.bindFramebuffer(V.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(A,k,$,Y,K,_t,wt,mt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=It.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(yt=yt[wt],Array.isArray(yt)&&(yt=yt[0])),yt)if(k>=0&&k<=A.width-Y&&$>=0&&$<=A.height-K){vt.bindFramebuffer(V.FRAMEBUFFER,yt);const Ct=A.textures[mt],Ot=Ct.format,Xt=Ct.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+mt);const Tt=Bh(Ct);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,qt),V.bufferData(V.PIXEL_PACK_BUFFER,_t.byteLength,V.STREAM_READ),V.readPixels(k,$,Y,K,ht.convert(Ot),ht.convert(Xt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const Se=X!==null?It.get(X).__webglFramebuffer:null;vt.bindFramebuffer(V.FRAMEBUFFER,Se);const oe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await yu(V,oe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,qt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,_t),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(qt),V.deleteSync(oe),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,$=0){const Y=Math.pow(2,-$),K=Math.floor(A.image.width*Y),_t=Math.floor(A.image.height*Y),wt=k!==null?k.x:0,mt=k!==null?k.y:0;Ft.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,$,0,0,wt,mt,K,_t),vt.unbindTexture()},this.copyTextureToTexture=function(A,k,$=null,Y=null,K=0,_t=0){let wt,mt,yt,Ct,Ot,Xt,Tt,qt,Se;const oe=A.isCompressedTexture?A.mipmaps[_t]:A.image;if($!==null)wt=$.max.x-$.min.x,mt=$.max.y-$.min.y,yt=$.isBox3?$.max.z-$.min.z:1,Ct=$.min.x,Ot=$.min.y,Xt=$.isBox3?$.min.z:0;else{const Zt=Math.pow(2,-K);wt=Math.floor(oe.width*Zt),mt=Math.floor(oe.height*Zt),A.isDataArrayTexture?yt=oe.depth:A.isData3DTexture?yt=Math.floor(oe.depth*Zt):yt=1,Ct=0,Ot=0,Xt=0}Y!==null?(Tt=Y.x,qt=Y.y,Se=Y.z):(Tt=0,qt=0,Se=0);const re=ht.convert(k.format),Ge=ht.convert(k.type);let At;k.isData3DTexture?(Ft.setTexture3D(k,0),At=V.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Ft.setTexture2DArray(k,0),At=V.TEXTURE_2D_ARRAY):(Ft.setTexture2D(k,0),At=V.TEXTURE_2D),vt.activeTexture(V.TEXTURE0),vt.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,k.flipY),vt.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),vt.pixelStorei(V.UNPACK_ALIGNMENT,k.unpackAlignment);const qe=vt.getParameter(V.UNPACK_ROW_LENGTH),te=vt.getParameter(V.UNPACK_IMAGE_HEIGHT),Ti=vt.getParameter(V.UNPACK_SKIP_PIXELS),He=vt.getParameter(V.UNPACK_SKIP_ROWS),Kr=vt.getParameter(V.UNPACK_SKIP_IMAGES);vt.pixelStorei(V.UNPACK_ROW_LENGTH,oe.width),vt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,oe.height),vt.pixelStorei(V.UNPACK_SKIP_PIXELS,Ct),vt.pixelStorei(V.UNPACK_SKIP_ROWS,Ot),vt.pixelStorei(V.UNPACK_SKIP_IMAGES,Xt);const gi=A.isDataArrayTexture||A.isData3DTexture,Ai=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const Zt=It.get(A),Oe=It.get(k),Sn=It.get(Zt.__renderTarget),xe=It.get(Oe.__renderTarget);vt.bindFramebuffer(V.READ_FRAMEBUFFER,Sn.__webglFramebuffer),vt.bindFramebuffer(V.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ne=0;Ne<yt;Ne++)gi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,It.get(A).__webglTexture,K,Xt+Ne),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,It.get(k).__webglTexture,_t,Se+Ne)),V.blitFramebuffer(Ct,Ot,Ct+wt,Ot+mt,Tt,qt,Tt+wt,qt+mt,V.DEPTH_BUFFER_BIT,V.NEAREST);vt.bindFramebuffer(V.READ_FRAMEBUFFER,null),vt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||It.has(A)){const Zt=It.get(A),Oe=It.get(k);vt.bindFramebuffer(V.READ_FRAMEBUFFER,P),vt.bindFramebuffer(V.DRAW_FRAMEBUFFER,z);for(let Sn=0;Sn<yt;Sn++)gi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Zt.__webglTexture,K,Xt+Sn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Zt.__webglTexture,K),Ai?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Oe.__webglTexture,_t,Se+Sn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Oe.__webglTexture,_t),K!==0?V.blitFramebuffer(Ct,Ot,Ct+wt,Ot+mt,Tt,qt,Tt+wt,qt+mt,V.COLOR_BUFFER_BIT,V.NEAREST):Ai?V.copyTexSubImage3D(At,_t,Tt,qt,Se+Sn,Ct,Ot,wt,mt):V.copyTexSubImage2D(At,_t,Tt,qt,Ct,Ot,wt,mt);vt.bindFramebuffer(V.READ_FRAMEBUFFER,null),vt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ai?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(At,_t,Tt,qt,Se,wt,mt,yt,re,Ge,oe.data):k.isCompressedArrayTexture?V.compressedTexSubImage3D(At,_t,Tt,qt,Se,wt,mt,yt,re,oe.data):V.texSubImage3D(At,_t,Tt,qt,Se,wt,mt,yt,re,Ge,oe):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,_t,Tt,qt,wt,mt,re,Ge,oe.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,_t,Tt,qt,oe.width,oe.height,re,oe.data):V.texSubImage2D(V.TEXTURE_2D,_t,Tt,qt,wt,mt,re,Ge,oe);vt.pixelStorei(V.UNPACK_ROW_LENGTH,qe),vt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,te),vt.pixelStorei(V.UNPACK_SKIP_PIXELS,Ti),vt.pixelStorei(V.UNPACK_SKIP_ROWS,He),vt.pixelStorei(V.UNPACK_SKIP_IMAGES,Kr),_t===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&V.generateMipmap(At),vt.unbindTexture()},this.initRenderTarget=function(A){It.get(A).__webglFramebuffer===void 0&&Ft.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ft.setTextureCube(A,0):A.isData3DTexture?Ft.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ft.setTexture2DArray(A,0):Ft.setTexture2D(A,0),vt.unbindTexture()},this.resetState=function(){U=0,I=0,X=null,vt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}const ch={type:"change"},zo={type:"start"},hh={type:"end"},Dr=new rr,uh=new Rn,cg=Math.cos(70*le.DEG2RAD),Re=new G,Ye=2*Math.PI,jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bo=1e-6;class hg extends Zf{constructor(t,e=null){super(t,e),this.state=jt.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fn.ROTATE,MIDDLE:Fn.DOLLY,RIGHT:Fn.PAN},this.touches={ONE:jn.ROTATE,TWO:jn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new pn,this._lastTargetPosition=new G,this._quat=new pn().setFromUnitVectors(t.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new br,this._sphericalDelta=new br,this._scale=1,this._panOffset=new G,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new G,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fg.bind(this),this._onPointerDown=ug.bind(this),this._onPointerUp=dg.bind(this),this._onContextMenu=Mg.bind(this),this._onMouseWheel=gg.bind(this),this._onKeyDown=_g.bind(this),this._onTouchStart=xg.bind(this),this._onTouchMove=vg.bind(this),this._onMouseDown=pg.bind(this),this._onMouseMove=mg.bind(this),this._interceptControlDown=Sg.bind(this),this._interceptControlUp=yg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=jt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ch),this.update(),this.state=jt.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Re.copy(e).sub(this.target),Re.applyQuaternion(this._quat),this._spherical.setFromVector3(Re),this.autoRotate&&this.state===jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ye:n>Math.PI&&(n-=Ye),s<-Math.PI?s+=Ye:s>Math.PI&&(s-=Ye),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Re.setFromSpherical(this._spherical),Re.applyQuaternion(this._quatInverse),e.copy(this.target).add(Re),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Re.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new G(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Re.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Dr.origin.copy(this.object.position),Dr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Dr.direction))<cg?this.object.lookAt(this.target):(uh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Dr.intersectPlane(uh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Bo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bo||this._lastTargetPosition.distanceToSquared(this.target)>Bo?(this.dispatchEvent(ch),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ye/60*this.autoRotateSpeed*t:Ye/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Re.setFromMatrixColumn(e,0),Re.multiplyScalar(-t),this._panOffset.add(Re)}_panUp(t,e){this.screenSpacePanning===!0?Re.setFromMatrixColumn(e,1):(Re.setFromMatrixColumn(e,0),Re.crossVectors(this.object.up,Re)),Re.multiplyScalar(t),this._panOffset.add(Re)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Re.copy(s).sub(this.target);let r=Re.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ug(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function fg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function dg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hh),this.state=jt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function pg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Fn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=jt.DOLLY;break;case Fn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=jt.ROTATE}break;case Fn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=jt.PAN}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(zo)}function mg(i){switch(this.state){case jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function gg(i){this.enabled===!1||this.enableZoom===!1||this.state!==jt.NONE||(i.preventDefault(),this.dispatchEvent(zo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(hh))}function _g(i){this.enabled!==!1&&this._handleKeyDown(i)}function xg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case jn.ROTATE:if(this.enableRotate===!1){this.state=jt.NONE;break}this._handleTouchStartRotate(i),this.state=jt.TOUCH_ROTATE;break;case jn.PAN:if(this.enablePan===!1){this.state=jt.NONE;break}this._handleTouchStartPan(i),this.state=jt.TOUCH_PAN;break;default:this.state=jt.NONE}break;case 2:switch(this.touches.TWO){case jn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=jt.TOUCH_DOLLY_PAN;break;case jn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=jt.TOUCH_DOLLY_ROTATE;break;default:this.state=jt.NONE}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(zo)}function vg(i){switch(this._trackPointer(i),this.state){case jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=jt.NONE}}function Mg(i){this.enabled!==!1&&i.preventDefault()}function Sg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ko=new Rn,Lr=new Yf,ji=new Lt,Go=new G;class Eg extends hg{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Fn.PAN,MIDDLE:Fn.DOLLY,RIGHT:Fn.ROTATE},this.touches={ONE:jn.PAN,TWO:jn.DOLLY_ROTATE},this._panWorldStart=new G}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;ko.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();ji.x=(t.clientX-n.left)/n.width*2-1,ji.y=-((t.clientY-n.top)/n.height)*2+1,Lr.setFromCamera(ji,this.object),Lr.ray.intersectPlane(ko,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const n=this.domElement.getBoundingClientRect();ji.x=(t.clientX-n.left)/n.width*2-1,ji.y=-((t.clientY-n.top)/n.height)*2+1,Lr.setFromCamera(ji,this.object),Lr.ray.intersectPlane(ko,Go)&&(Go.sub(this._panWorldStart),this._panOffset.copy(Go).negate(),this.update())}}const Ir=new Rt;function W(i){return Ir.set(i),[Ir.r,Ir.g,Ir.b]}function ie(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function Ls(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function Ze(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class pe{constructor(){ct(this,"pos",[]);ct(this,"nor",[]);ct(this,"col",[]);ct(this,"glo",[]);ct(this,"ox",0);ct(this,"oy",0);ct(this,"oz",0);ct(this,"c",1);ct(this,"s",0)}get vertexCount(){return this.pos.length/3}frame(t=0,e=0,n=0,s=0){return this.ox=t,this.oy=e,this.oz=n,this.c=Math.cos(s),this.s=Math.sin(s),this}wx(t,e){return this.ox+t*this.c+e*this.s}wz(t,e){return this.oz-t*this.s+e*this.c}tri(t,e,n,s,r,a,o,l,c,h,u=0){const d=this.wx(t,n),f=this.wz(t,n),g=this.oy+e,v=this.wx(s,a),m=this.wz(s,a),p=this.oy+r,x=this.wx(o,c),y=this.wz(o,c),M=this.oy+l,b=v-d,E=p-g,_=m-f,S=x-d,R=M-g,w=y-f;let C=E*w-_*R,D=_*S-b*w,O=b*R-E*S;const P=Math.hypot(C,D,O)||1;C/=P,D/=P,O/=P,this.pos.push(d,g,f,v,p,m,x,M,y),this.nor.push(C,D,O,C,D,O,C,D,O),this.col.push(h[0],h[1],h[2],h[0],h[1],h[2],h[0],h[1],h[2]),this.glo.push(u,u,u)}quad(t,e,n,s,r,a,o,l,c,h,u,d,f,g=0){this.tri(t,e,n,s,r,a,o,l,c,f,g),this.tri(t,e,n,o,l,c,h,u,d,f,g)}box(t,e,n,s,r,a,o,l=void 0,c=null,h=0){this.quad(t,e,a,s,e,a,s,r,a,t,r,a,o,h),this.quad(s,e,n,t,e,n,t,r,n,s,r,n,o,h),this.quad(s,e,a,s,e,n,s,r,n,s,r,a,o,h),this.quad(t,e,n,t,e,a,t,r,a,t,r,n,o,h),l!==null&&this.quad(t,r,a,s,r,a,s,r,n,t,r,n,l??o,h),c&&this.quad(t,e,n,s,e,n,s,e,a,t,e,a,c,h)}cyl(t,e,n,s,r,a,o,l,c=null,h=0){const u=e+a;for(let d=0;d<o;d++){const f=d/o*Math.PI*2,g=(d+1)/o*Math.PI*2,v=Math.cos(f),m=Math.sin(f),p=Math.cos(g),x=Math.sin(g);r>1e-4?(this.quad(t+v*s,e,n+m*s,t+v*r,u,n+m*r,t+p*r,u,n+x*r,t+p*s,e,n+x*s,l,h),c&&this.tri(t,u,n,t+p*r,u,n+x*r,t+v*r,u,n+m*r,c,h)):this.tri(t+v*s,e,n+m*s,t,u,n,t+p*s,e,n+x*s,l,h)}}blob(t,e,n,s,r,a,o,l,c,h,u=0){const d=h??c;for(let f=0;f<l;f++){const g=f/l*Math.PI,v=(f+1)/l*Math.PI,m=Math.cos(g),p=Math.cos(v),x=Math.sin(g),y=Math.sin(v),M=Ls(c,d,1-(f+.5)/l);for(let b=0;b<o;b++){const E=b/o*Math.PI*2,_=(b+1)/o*Math.PI*2,S=Math.cos(E),R=Math.sin(E),w=Math.cos(_),C=Math.sin(_),D=t+S*x*s,O=e+m*r,P=n+R*x*a,z=t+w*x*s,U=n+C*x*a,I=t+S*y*s,X=e+p*r,N=n+R*y*a,B=t+w*y*s,H=n+C*y*a;f>0&&this.tri(D,O,P,z,O,U,B,X,H,M,u),f<l-1&&this.tri(D,O,P,B,X,H,I,X,N,M,u)}}}walls(t,e,n,s,r=0){const a=t.length/2,o=Ho(t)>0;for(let l=0;l<a;l++){const c=(l+1)%a,h=t[l*2],u=t[l*2+1],d=t[c*2],f=t[c*2+1];o?this.quad(d,e,f,h,e,u,h,n,u,d,n,f,s,r):this.quad(h,e,u,d,e,f,d,n,f,h,n,u,s,r)}}cap(t,e,n,s=0){const r=t.length/2,a=[];for(let l=0;l<r;l++)a.push(new Lt(t[l*2],t[l*2+1]));const o=To.triangulateShape(a,[]);for(const l of o){const c=a[l[0]],h=a[l[1]],u=a[l[2]];(h.x-c.x)*(u.y-c.y)-(h.y-c.y)*(u.x-c.x)>0?this.tri(c.x,e,c.y,u.x,e,u.y,h.x,e,h.y,n,s):this.tri(c.x,e,c.y,h.x,e,h.y,u.x,e,u.y,n,s)}}build(){const t=new we;return t.setAttribute("position",new be(new Float32Array(this.pos),3)),t.setAttribute("normal",new be(new Float32Array(this.nor),3)),t.setAttribute("color",new be(new Float32Array(this.col),3)),t.setAttribute("glow",new be(new Float32Array(this.glo),1)),t.computeBoundingSphere(),t.computeBoundingBox(),this.pos=[],this.nor=[],this.col=[],this.glo=[],t}}function Ho(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}const Nr={value:0};function Is(i={}){const t=new ui({vertexColors:!0,roughness:i.roughness??.86,metalness:0,side:i.side??ze}),e=new Rt(i.glowColor??16761722);return t.onBeforeCompile=n=>{n.uniforms.uNight=Nr,n.uniforms.uGlowColor={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float glow;
varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;
uniform float uNight;
uniform vec3 uGlowColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlowColor * vGlow * uNight * 2.4;`)},t.customProgramCacheKey=()=>"inverloch-model",t}function Ur(i){return i.onBeforeCompile=t=>{t.uniforms.uNight=Nr,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.82 * uNight;`)},i.customProgramCacheKey=()=>"inverloch-unlit",i}const Yn={day:{sunDir:[-.42,.78,-.46],sunColor:16774109,sunIntensity:3.1,hemiSky:13953279,hemiGround:9280120,hemiIntensity:1.25,zenith:4163279,horizon:13625078,below:1582638,sunGlow:1,shallow:7129789,deep:1201018,waterSky:12903158,foam:1,night:0,exposure:1},golden:{sunDir:[-.84,.22,.36],sunColor:16756848,sunIntensity:3,hemiSky:15781309,hemiGround:6973032,hemiIntensity:1.15,zenith:4153244,horizon:16760970,below:1645863,sunGlow:1.6,shallow:7320486,deep:1390942,waterSky:16763040,foam:.9,night:.25,exposure:1},night:{sunDir:[.38,.72,-.42],sunColor:10467071,sunIntensity:.5,hemiSky:3821436,hemiGround:1053980,hemiIntensity:.55,zenith:396056,horizon:1582922,below:263948,sunGlow:.5,shallow:1920092,deep:331552,waterSky:2242140,foam:.45,night:1,exposure:1.05}},bg=`
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
}`;class Tg{constructor(t,e,n){ct(this,"sun",new Xf(16777215,3));ct(this,"hemi",new Hf(16777215,8947848,1));ct(this,"sky");ct(this,"sunDir",new G);ct(this,"skyUniforms");ct(this,"from");ct(this,"to");ct(this,"t",1);ct(this,"mode","day");this.renderer=t,this.water=e,this.from=this.to=Yn.day,this.skyUniforms={uZenith:{value:new Rt},uHorizon:{value:new Rt},uBelow:{value:new Rt},uSunDir:{value:new G},uSunColor:{value:new Rt},uSunGlow:{value:1},uNight:{value:0}},this.sky=new Qt(new Ro(1,32,16),new qn({uniforms:this.skyUniforms,vertexShader:bg,fragmentShader:wg,side:Ve,depthWrite:!1,depthTest:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,n>0&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(n,n)),this.apply(1)}set(t,e=!1){t===this.mode&&this.t>=1||(this.from=this.snapshot(),this.to=Yn[t],this.mode=t,this.t=e?1:0,this.apply(this.t))}update(t){return this.t>=1?!1:(this.t=Math.min(1,this.t+t/1.4),this.apply(this.t),!0)}aimShadow(t,e){if(!this.sun.castShadow)return;const n=le.clamp(e*.7,140,2400),s=this.sun.shadow,r=s.camera,a=n*2/s.mapSize.x,o=Math.round(t.x/a)*a,l=Math.round(t.z/a)*a,c=n*2.4+300;this.sun.target.position.set(o,0,l),this.sun.position.set(o,0,l).addScaledVector(this.sunDir,c),this.sun.target.updateMatrixWorld(),r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=1,r.far=c*2+400,r.updateProjectionMatrix(),s.bias=-.3/(r.far-r.near),s.normalBias=le.clamp(a*1.6,.06,1.2))}setSolar(t){const e=(t%1440+1440)%1440,n=6*60,s=20.5*60;let r,a;if(e>=n&&e<=s)a=(e-n)/(s-n),r=Math.sin(Math.PI*a)*70;else{const g=((e<n?e+1440:e)-s)/(1440-(s-n));a=g<.5?1:0,r=-Math.sin(Math.PI*g)*40}const o=le.degToRad(110*(1-2*a)),l=le.degToRad(Math.max(r,5)),c=[Math.sin(o)*Math.cos(l),Math.sin(l),-Math.cos(o)*Math.cos(l)];let h;r>=25?h=Yn.day:r>=6?h=Vo(Yn.golden,Yn.day,(r-6)/19):r>=-6?h=Vo(Yn.night,Yn.golden,(r+6)/12):h=Yn.night;const u=le.clamp((2-r)/6,0,1),d=Yn.night.sunDir,f=[c[0]+(d[0]-c[0])*u,c[1]+(d[1]-c[1])*u,c[2]+(d[2]-c[2])*u];this.from=this.to={...h,sunDir:f},this.mode=r>=25?"day":r>=-6?"golden":"night",this.apply(1)}snapshot(){return Vo(this.from,this.to,Ag(this.t))}apply(t){this.t=t;const e=this.snapshot();this.sunDir.set(...e.sunDir).normalize(),this.sun.color.set(e.sunColor),this.sun.intensity=e.sunIntensity,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const n=this.skyUniforms;n.uZenith.value.set(e.zenith),n.uHorizon.value.set(e.horizon),n.uBelow.value.set(e.below),n.uSunDir.value.copy(this.sunDir),n.uSunColor.value.set(e.sunColor),n.uSunGlow.value=e.sunGlow,n.uNight.value=e.night;const s=this.water.uniforms;s.uSunDir.value.copy(this.sunDir),s.uSunColor.value.set(e.sunColor).multiplyScalar(Math.min(1,e.sunIntensity/2.5)),s.uShallow.value.set(e.shallow),s.uDeep.value.set(e.deep),s.uSky.value.set(e.waterSky),s.uFoam.value=e.foam,this.water.skirt.material.color.set(e.deep).lerp(new Rt(e.shallow),.35),Nr.value=e.night,this.renderer.toneMappingExposure=e.exposure}}function Ag(i){return i*i*(3-2*i)}function Vo(i,t,e){if(e<=0)return i;if(e>=1)return t;const n=(r,a)=>new Rt(r).lerp(new Rt(a),e).getHex(),s=(r,a)=>r+(a-r)*e;return{sunDir:[s(i.sunDir[0],t.sunDir[0]),s(i.sunDir[1],t.sunDir[1]),s(i.sunDir[2],t.sunDir[2])],sunColor:n(i.sunColor,t.sunColor),sunIntensity:s(i.sunIntensity,t.sunIntensity),hemiSky:n(i.hemiSky,t.hemiSky),hemiGround:n(i.hemiGround,t.hemiGround),hemiIntensity:s(i.hemiIntensity,t.hemiIntensity),zenith:n(i.zenith,t.zenith),horizon:n(i.horizon,t.horizon),below:n(i.below,t.below),sunGlow:s(i.sunGlow,t.sunGlow),shallow:n(i.shallow,t.shallow),deep:n(i.deep,t.deep),waterSky:n(i.waterSky,t.waterSky),foam:s(i.foam,t.foam),night:s(i.night,t.night),exposure:s(i.exposure,t.exposure)}}async function Rg(i,t,e){if(!i.detail)return[];try{const n=await fetch(i.detail,{signal:e});if(!n.ok)return[];const s=(await n.json()).patches,r=i.detail.slice(0,i.detail.lastIndexOf("/")+1),a=await Promise.all(s.map(async o=>{var h;const l=t?o.lo:o.file,c=await new vc().loadAsync(((h=i.detailFiles)==null?void 0:h[l])??r+l);return c.colorSpace=ye,c.generateMipmaps=!0,c.minFilter=En,c.wrapS=c.wrapT=hn,{x:o.x,z:o.z,size:o.size,texture:c}}));if(e!=null&&e.aborted){for(const o of a)o.texture.dispose();return[]}return a}catch{return[]}}const Wo=10,Cg=5,Ln=4,Pg=3;function Fr(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Int16Array(e.buffer,0,e.length>>1)}async function Dg(i){const t=new Uint8Array(i),e=new DataView(i);let n=8,s=0,r=0,a=0,o=0,l=0;const c=[];for(;n<t.length;){const v=e.getUint32(n),m=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]);if(m==="IHDR")s=e.getUint32(n+8),r=e.getUint32(n+12),a=t[n+16],o=t[n+17],l=t[n+20];else if(m==="IDAT")c.push(t.subarray(n+8,n+8+v));else if(m==="IEND")break;n+=12+v}if(a!==8||o!==2&&o!==6||l)throw new Error("Unsupported terrain image format");const h=o===2?3:4,u=new Blob(c).stream().pipeThrough(new DecompressionStream("deflate")),d=new Uint8Array(await new Response(u).arrayBuffer()),f=s*h,g=new Uint8Array(f*r);for(let v=0;v<r;v++){const m=d[v*(f+1)],p=v*(f+1)+1,x=v*f;for(let y=0;y<f;y++){const M=y>=h?g[x+y-h]:0,b=v>0?g[x-f+y]:0,E=y>=h&&v>0?g[x-f+y-h]:0;let _=d[p+y];if(m===1)_+=M;else if(m===2)_+=b;else if(m===3)_+=M+b>>1;else if(m===4){const S=Math.abs(b-E),R=Math.abs(M-E),w=Math.abs(M+b-2*E);_+=S<=R&&S<=w?M:R<=w?b:E}g[x+y]=_&255}}return{width:s,height:r,channels:h,data:g}}async function Lg(i,t,e){let n=0;const s=f=>t(++n/4,f);t(0,"Fetching map data");const[r,a,o]=await Promise.all([fetch(i.town,{signal:e}).then(f=>{if(!f.ok)throw new Error("Could not load the town data");return f.json()}).then(f=>(s("Streets and buildings"),f)),fetch(i.height,{signal:e}).then(f=>{if(!f.ok)throw new Error("Could not load the terrain");return f.arrayBuffer()}).then(Dg).then(f=>(s("Terrain"),f)),new vc().loadAsync(i.ground).then(f=>(s("Ground texture"),f))]),l=r.meta,c=a.width*a.height,h=new Float32Array(c),u=new Float32Array(c),d=a.channels;for(let f=0;f<c;f++)h[f]=(a.data[f*d]<<8|a.data[f*d+1])/l.heightScale-l.heightOffset,u[f]=a.data[f*d+2]/255;return o.colorSpace=ye,o.anisotropy=8,o.generateMipmaps=!0,o.minFilter=En,s("Building the model"),{town:{...r,houses:Fr(r.houses),cabins:Fr(r.cabins),cars:Fr(r.cars),trees:Fr(r.trees)},heights:h,exposure:u,ground:o}}const Or=[15921126,15261640,13619920,11120043,12110550,11845800,14272936,5988452,11036494,14205088,15327150,16448250].map(W),di=[15000277,12435386,8948618,4934726,3487290,6957594,8160360,3555666,11888447,11644323].map(W),je=W(3163994),zr=[7031348,3098712,9056042,15658730,4151878].map(W),Br=W(9138002),pi=W(16053230),fh=W(12171184),kr=W(1846090),dh=[15327951,3099196,2504783,8007210,3816770,13214282,5209226].map(W);function ph(i,t,e,n,s,r){const a=ie(r,.9);if(t>=e){const o=t-e;i.quad(-t,n,e,t,n,e,o,n+s,0,-o,n+s,0,r),i.quad(t,n,-e,-t,n,-e,-o,n+s,0,o,n+s,0,r),i.tri(t,n,e,t,n,-e,o,n+s,0,a),i.tri(-t,n,-e,-t,n,e,-o,n+s,0,a)}else{const o=e-t;i.quad(t,n,e,t,n,-e,0,n+s,-o,0,n+s,o,r),i.quad(-t,n,-e,-t,n,e,0,n+s,o,0,n+s,-o,r),i.tri(-t,n,e,t,n,e,0,n+s,o,a),i.tri(t,n,-e,-t,n,-e,0,n+s,-o,a)}}function ts(i,t,e,n,s,r,a,o){const l=t/2,c=e/2;if(t>=e){const u=c*s;return i.quad(-l-r,n-r*s,c+r,l+r,n-r*s,c+r,l+r,n+u,0,-l-r,n+u,0,a),i.quad(l+r,n-r*s,-c-r,-l-r,n-r*s,-c-r,-l-r,n+u,0,l+r,n+u,0,a),i.tri(l,n,c,l,n,-c,l,n+u,0,o),i.tri(-l,n,-c,-l,n,c,-l,n+u,0,o),u}const h=l*s;return i.quad(l+r,n-r*s,c+r,l+r,n-r*s,-c-r,0,n+h,-c-r,0,n+h,c+r,a),i.quad(-l-r,n-r*s,-c-r,-l-r,n-r*s,c+r,0,n+h,c+r,0,n+h,-c-r,a),i.tri(-l,n,c,l,n,c,0,n+h,c,o),i.tri(l,n,-c,-l,n,-c,0,n+h,-c,o),h}function Gr(i,t,e,n,s,r,a,o,l){const c=t/2,h=e/2,u=n+s,d=n+r,f=(u-d)/e;i.quad(-c-a,u+a*f,h+a,c+a,u+a*f,h+a,c+a,d-a*f,-h-a,-c-a,d-a*f,-h-a,o),i.quad(-c,n,h,c,n,h,c,u,h,-c,u,h,l),i.quad(c,n,h,c,n,-h,c,d,-h,c,u,h,l),i.quad(-c,n,-h,-c,n,h,-c,u,h,-c,d,-h,l),i.quad(c,n,-h,-c,n,-h,-c,d,-h,c,d,-h,l)}const nn=.05;function Zn(i,t,e,n,s,r,a,o=0){const l=t/2+nn;i.quad(e,s,l,n,s,l,n,r,l,e,r,l,a,o)}function Ig(i,t,e,n,s,r,a,o=0){const l=-t/2-nn;i.quad(n,s,l,e,s,l,e,r,l,n,r,l,a,o)}function mh(i,t,e,n,s,r,a,o=0){const l=t/2+nn;i.quad(l,s,n,l,s,e,l,r,e,l,r,n,a,o)}function gh(i,t,e,n,s,r,a,o=0){const l=-t/2-nn;i.quad(l,s,e,l,s,n,l,r,n,l,r,e,a,o)}function Xo(i,t,e,n){let s=1/0,r=-1/0;for(const[a,o]of[[-e,-n],[e,-n],[e,n],[-e,n],[0,0]]){const l=i.yAt(t.wx(a,o),t.wz(a,o));l<s&&(s=l),l>r&&(r=l)}return{lo:s,hi:r}}function Ng(i,t,e,n,s,r,a,o,l,c,h,u){i.frame(e,0,n,a);const d=Xo(t,i,s/2,r/2),f=d.hi+.18;i.frame(e,f,n,a);const g=Or[c%Or.length],v=di[h%di.length],m=o===2?5.5:2.85,p=s/2,x=r/2,y=ie(g,.7);i.box(-p,d.lo-f-.3,-x,p,0,x,y,null),i.box(-p,0,-x,p,m,x,g,l===3?ie(v,1):null);let M=m;if(l===0){const S=Math.min(p,x)+.5;ph(i,p+.5,x+.5,m,S*.44,v),M=m+S*.44}else l===1?M=m+ts(i,s,r,m,.5,.4,v,g):l===2?(Gr(i,s,r,m,1.35,.25,.5,v,g),Zn(i,r,-p+.5,p-.5,m+.25,m+1.05,je,u()<.5?1:0),M=m+1.4):(i.box(-p-.15,m,-x-.15,p+.15,m+.3,x+.15,ie(g,.92),v),M=m+.3);const b=zr[Math.floor(u()*zr.length)];for(let _=0;_<o;_++){const S=_*2.75+.85,R=S+1.3,w=Math.max(2,Math.floor(s/3.2)),C=_===0?Math.floor(u()*w):-1;for(let P=0;P<w;P++){const z=-p+(P+.5)/w*s;P===C?Zn(i,r,z-.5,z+.5,0,2.1,b):Zn(i,r,z-.85,z+.85,S,R,je,u()<.55?1:0)}const D=Math.max(1,Math.floor(s/3.8));for(let P=0;P<D;P++){const z=-p+(P+.5)/D*s;Ig(i,r,z-.75,z+.75,S,R,je,u()<.5?1:0)}const O=Math.max(1,Math.floor(r/4.2));for(let P=0;P<O;P++){const z=-x+(P+.5)/O*r;mh(i,s,z-.7,z+.7,S,R,je,u()<.45?1:0),gh(i,s,z-.7,z+.7,S,R,je,u()<.45?1:0)}}const E=u();if(o===1&&E<.36){const _=p*(.6+u()*.4),S=1.9;i.box(-_,-.12,x,_,.02,x+S,Br),i.quad(-_-.2,2.3,x+S+.2,_+.2,2.3,x+S+.2,_+.2,2.7,x,-_-.2,2.7,x,ie(v,.93));const R=Math.max(2,Math.round(_*2/3));for(let w=0;w<=R;w++){const C=-_+w/R*_*2;i.box(C-.06,0,x+S-.12,C+.06,2.32,x+S,pi,null)}}else if(o===2&&E<.5){const _=p*(.55+u()*.45),S=2;i.box(-_,2.62,x,_,2.78,x+S,fh,Br,ie(fh,.8));const R=u()<.5?W(10469580):pi;i.box(-_,2.78,x+S-.05,_,3.75,x+S,R,null),i.box(-_,2.78,x,-_+.05,3.75,x+S,R,null),i.box(_-.05,2.78,x,_,3.75,x+S,R,null);for(const w of[-_+.1,_-.1])i.box(w-.08,0,x+S-.2,w+.08,2.62,x+S-.04,pi,null);u()<.5&&i.quad(-_-.2,5.05,x+S+.2,_+.2,5.05,x+S+.2,_+.2,5.4,x,-_-.2,5.4,x,ie(v,.93))}if(u()<.1&&l<=1){const _=(u()-.5)*p,S=(u()-.5)*x*.6;i.box(_-.32,m,S-.32,_+.32,M+.55,S+.32,W(10116936))}if(u()<.24&&l<=1&&Ug(i,s,r,m,a,l,u),u()<.15){const _=(u()<.5?-1:1)*(p+1.25),S=-x+1.3;i.cyl(_,d.hi-f,S,1.05,1.05,2.1,8,u()<.5?W(9347975):W(12370625),W(11120814))}}function Ug(i,t,e,n,s,r,a){const o=t/2,l=e/2,c=r===0?.5:.4,h=.22,u=.74,d=.09;if(t>=e){const f=l+c,g=r===0?f*.44:l*.5*(1+c/l),v=r===0?n:n-c*.5,m=Math.max(1.4,(r===0?o-l:o)*.7)*(.6+a()*.4),p=Math.cos(s)<0,x=p?1:-1,y=x*f*(1-h),M=x*f*(1-u),b=v+g*h+d,E=v+g*u+d;p?i.quad(-m,b,y,m,b,y,m,E,M,-m,E,M,kr):i.quad(m,b,y,-m,b,y,-m,E,M,m,E,M,kr)}else{const f=o+c,g=r===0?f*.44:o*.5*(1+c/o),v=r===0?n:n-c*.5,m=Math.max(1.4,(r===0?l-o:l)*.7)*(.6+a()*.4),p=Math.sin(s)>0,x=p?1:-1,y=x*f*(1-h),M=x*f*(1-u),b=v+g*h+d,E=v+g*u+d;p?i.quad(y,b,m,y,b,-m,M,E,-m,M,E,m,kr):i.quad(y,b,-m,y,b,m,M,E,m,M,E,-m,kr)}}function Fg(i,t,e,n,s,r,a,o,l,c){i.frame(e,0,n,a);const h=Xo(t,i,s/2,r/2);i.frame(e,h.hi+.05,n,a);const u=[W(14275778),W(9083526),W(12041145),W(7305842)][l%4],d=di[c%di.length],f=2.4,g=s/2,v=r/2;i.box(-g,h.lo-h.hi-.3,-v,g,f,v,u,null),o===1?ts(i,s,r,f,.32,.2,d,u):Gr(i,s,r,f,.6,.1,.2,d,u),Zn(i,r,-g*.72,g*.72,0,2.05,ie(u,1.12))}const Hr=[14243375,3112880,6266970,14725690,9134e3,4170656,14252591,4878261].map(W);function Og(i,t,e,n,s,r,a,o){const l={0:[8,4.2],1:[6.4,4.8],2:[3.6,3.6],3:[10.5,7.5]},[c,h]=l[r];i.frame(e,0,n,s);const u=Xo(t,i,c/2,h/2);i.frame(e,u.hi+.05,n,s);const d=u.lo-u.hi-.3;if(r===0){const f=[W(15129798),W(12175305),W(13219994),W(10465434)][a%4],g=di[(a*3+1)%di.length];i.box(-4,d,-2.1,4,.35,2.1,ie(f,.6),null),i.box(-4,.35,-2.1,4,2.75,2.1,f,null),ts(i,8,4.2,2.75,.42,.35,g,f),i.box(-3.2,.2,2.1,1.2,.35,3.7,Br),i.box(-3.2,.35,3.62,1.2,1.25,3.7,pi,null),Zn(i,4.2,-2.8,-1.2,1.2,2.3,je,o()<.5?1:0),Zn(i,4.2,-.4,.5,.35,2.4,zr[a%zr.length]),Zn(i,4.2,1.4,3.2,1.2,2.3,je,o()<.5?1:0)}else if(r===1){const f=Hr[a%Hr.length];i.box(-2.9,.45,-2.3,2.9,2.55,-.1,pi,W(15263972),W(9079432)),i.box(-2.92,1.05,-2.32,2.92,1.3,-.08,f,null),i.box(-1.4,0,-2.2,-.8,.5,-.2,W(2763308)),i.box(.8,0,-2.2,1.4,.5,-.2,W(2763308)),Zn(i,-.2,-2.2,-1,1.45,2.15,je,o()<.4?1:0),i.box(-2.6,0,-.1,2.6,2,2.3,Ls(f,pi,.72),null),i.quad(-2.7,2,2.4,2.7,2,2.4,2.7,2.5,-.1,-2.7,2.5,-.1,Ls(f,pi,.55))}else if(r===2){const f=Hr[a%Hr.length];i.blob(0,0,0,1.75,1.55,1.75,6,4,ie(f,.85),f)}else{const f=W(14209732),g=W(5922659);i.box(-5.25,d,-3.75,5.25,3,3.75,f,null),Gr(i,10.5,7.5,3,1.5,.2,.7,g,W(9072466)),Zn(i,7.5,-4.4,4.4,.3,2.6,je,o()<.6?1:0),i.box(-5.25,.05,3.75,5.25,.25,6.2,Br),mh(i,10.5,-2,2,.9,2.3,je,o()<.5?1:0),gh(i,10.5,-2,2,.9,2.3,je,o()<.5?1:0)}}function zg(i){const t=i.length/2;let e={cx:0,cz:0,w:0,d:0,heading:0,area:1/0};for(let n=0;n<t;n++){const s=(n+1)%t;let r=i[s*2]-i[n*2],a=i[s*2+1]-i[n*2+1];const o=Math.hypot(r,a);if(o<.5)continue;r/=o,a/=o;let l=1/0,c=-1/0,h=1/0,u=-1/0;for(let f=0;f<t;f++){const g=i[f*2],v=i[f*2+1],m=g*r+v*a,p=-g*a+v*r;m<l&&(l=m),m>c&&(c=m),p<h&&(h=p),p>u&&(u=p)}const d=(c-l)*(u-h);if(d<e.area){const f=(l+c)/2,g=(h+u)/2;e={cx:f*r-g*a,cz:f*a+g*r,w:c-l,d:u-h,heading:Math.atan2(-a,r),area:d}}}return e}function Bg(i,t){const e=i.length/2,n=Ho(i)>0?1:-1,s=[];for(let r=0;r<e;r++){const a=(r+e-1)%e,o=(r+1)%e;let l=i[r*2]-i[a*2],c=i[r*2+1]-i[a*2+1],h=i[o*2]-i[r*2],u=i[o*2+1]-i[r*2+1];const d=Math.hypot(l,c)||1,f=Math.hypot(h,u)||1;l/=d,c/=d,h/=f,u/=f;const g=-c*n,v=l*n,m=-u*n,p=h*n;let x=g+m,y=v+p;const M=Math.hypot(x,y)||1;x/=M,y/=M;const b=t/Math.max(.4,x*g+y*v);s.push(i[r*2]+x*b,i[r*2+1]+y*b)}return s}const kg=new Set(["house","detached","residential","terrace","yes;house","semidetached_house","bungalow"]),Gg=new Set(["shed","garage","garages","toilets","hut"]);function _h(i,t,e,n,s,r){const a=e.p.map(R=>R/10),o=a.length/2;let l=0,c=0,h=1/0,u=-1/0;for(let R=0;R<o;R++){l+=a[R*2],c+=a[R*2+1];const w=t.yAt(a[R*2],a[R*2+1]);w<h&&(h=w),w>u&&(u=w)}l/=o,c/=o;const d=Math.abs(Ho(a)),f=zg(a),g=d/(f.w*f.d||1),v=u+.15,m=Math.hypot(l-r[0],c-r[1])<420,p=e.k==="retail"||e.k==="commercial"||!!e.u||!!e.n||e.k==="yes"&&(d>300||m&&d>110),x=!p&&(kg.has(e.k)||e.k==="yes"&&d<=300),y=Gg.has(e.k)||d<28;let M;e.l?M=e.l*3.1:e.k==="roof"?M=3:e.k==="hangar"?M=6.5:e.k==="church"?M=5:y?M=2.5:x?M=s()<.2?5.5:2.9:M=d>1200?7:d>500?5.6:4.3+s()*.8;const b={name:e.n,use:e.u,kind:e.k,poly:a,cx:l,cz:c,area:d,obb:f,floorY:v,wallH:M,topY:v+M};let E=26;for(let R=0;R<o;R++){const w=(R+1)%o,C=a[R*2],D=a[R*2+1],O=a[w*2],P=a[w*2+1],z=Math.hypot(O-C,P-D);if(z<4.5)continue;const U=(C+O)/2,I=(D+P)/2,X=n.nearest(U,I,E);if(!X)continue;let N=-(P-D)/z,B=(O-C)/z;if(N*(U-l)+B*(I-c)<0&&(N=-N,B=-B),(X.px-U)*N+(X.pz-I)*B<X.dist*.5)continue;E=X.dist;const H=Math.atan2(N,B),it=(O-C)*Math.cos(H)-(P-D)*Math.sin(H);b.street={x:it>0?C:O,z:it>0?D:P,heading:H,length:z}}if(i.frame(0,v,0,0),e.k==="roof"){const R=W(12172728);i.walls(a,M-.25,M,R),i.cap(a,M,R);for(let w=0;w<o;w++)i.box(a[w*2]-.12,h-v,a[w*2+1]-.12,a[w*2]+.12,M-.25,a[w*2+1]+.12,W(6974832),null);return b}const _=p?[W(15328470),W(14275266),W(13620178),W(15128768),W(12568777),W(15789540),W(13220258)][Math.floor(s()*7)]:Or[Math.floor(s()*Or.length)],S=p&&d>300?[W(13225160),W(11777972),W(14211280),W(10133405)][Math.floor(s()*4)]:di[Math.floor(s()*di.length)];if(i.walls(a,h-v-.3,M,_),e.k==="church"){i.frame(f.cx,v,f.cz,f.heading);const R=ts(i,f.w,f.d,M,1.15,.3,W(5922659),_);b.topY=v+M+R}else if((x||y||e.k==="hangar")&&g>.8&&o<=8)if(i.frame(f.cx,v,f.cz,f.heading),e.k==="hangar")b.topY=v+M+ts(i,f.w,f.d,M,.3,.3,W(12172728),_);else if(y)Gr(i,f.w,f.d,M,.5,.1,.2,S,_);else if(s()<.55){const R=Math.min(f.w,f.d)/2+.45;ph(i,f.w/2+.45,f.d/2+.45,M,R*.44,S),b.topY=v+M+R*.44}else b.topY=v+M+ts(i,f.w,f.d,M,.5,.4,S,_);else if(d<420&&!p){const R=Bg(a,Math.min(2.2,Math.sqrt(d)*.18)),w=1.15;for(let C=0;C<o;C++){const D=(C+1)%o;i.quad(a[C*2],M,a[C*2+1],a[D*2],M,a[D*2+1],R[D*2],M+w,R[D*2+1],R[C*2],M+w,R[C*2+1],S)}i.cap(R,M+w,ie(S,1.05)),b.topY=v+M+w}else{i.cap(a,M-.05,S),i.walls(a,M-.05,M+.45,ie(_,.96)),b.topY=v+M+.45;const R=Math.min(6,Math.floor(d/220));for(let w=0;w<R;w++){const C=(s()-.5)*f.w*.5,D=(s()-.5)*f.d*.5,O=Math.cos(f.heading),P=Math.sin(f.heading),z=f.cx+C*O+D*P,U=f.cz-C*P+D*O;i.box(z-1.1,M,U-.8,z+1.1,M+.9,U+.8,W(11120304))}}if(!y&&e.k!=="hangar"){const R=Math.max(1,Math.round(M/3));for(let w=0;w<o;w++){const C=(w+1)%o,D=a[w*2],O=a[w*2+1],P=a[C*2],z=a[C*2+1],U=Math.hypot(P-D,z-O);if(U<3.2)continue;let I=-(z-O)/U,X=(P-D)/U;I*((D+P)/2-l)+X*((O+z)/2-c)<0&&(I=-I,X=-X);const N=Math.atan2(I,X),B=(P-D)*Math.cos(N)-(z-O)*Math.sin(N);i.frame(B>0?D:P,v,B>0?O:z,N);const H=Math.floor(U/(p?4.2:3.4));for(let it=0;it<R;it++){const st=it*3+.9;if(!(p&&it===0&&b.street&&Math.abs(N-b.street.heading)<.01))for(let q=0;q<H;q++){const et=(q+.5)/H*U;i.quad(et-.8,st,nn,et+.8,st,nn,et+.8,st+1.3,nn,et-.8,st+1.3,nn,je,s()<.5?1:0)}}}}if(p&&b.street&&!e.k.includes("church")&&d>60){const R=b.street;i.frame(R.x,v,R.z,R.heading);const w=dh[Math.floor(s()*dh.length)];if(i.quad(.5,.35,nn,R.length-.5,.35,nn,R.length-.5,2.7,nn,.5,2.7,nn,je,.9),m&&R.length>6&&M<9){i.box(.2,3,0,R.length-.2,3.16,2.7,w,ie(w,.9),ie(w,.75)),i.box(.2,2.75,2.62,R.length-.2,3.3,2.7,Ls(w,pi,.25),null);const C=Math.max(1,Math.round(R.length/4.5));for(let D=0;D<=C;D++){const O=.35+D/C*(R.length-.7);i.box(O-.06,0,2.5,O+.06,3,2.62,W(4869456),null)}}}return i.frame(),b}function Hg(i,t,e,n,s=()=>!1){const r=new Je;r.name="buildings";const a=Is(),o=900,l=new Map,c=(p,x)=>{const y=`${Math.floor(p/o)}:${Math.floor(x/o)}`;let M=l.get(y);return M||l.set(y,M=new pe),M},h=i.meta,u=[(145.7285-h.origin[0])*h.metresPerDegree[0],-(-38.63385-h.origin[1])*h.metresPerDegree[1]],d=Ze(3996),f=[];for(const p of i.buildings){let x=0,y=0;for(let M=0;M<p.p.length;M+=2)x+=p.p[M],y+=p.p[M+1];if(x/=p.p.length*5,y/=p.p.length*5,!s(x,y)){if(n.has(p.n)){const M=new pe,b=_h(M,t,p,e,Ze(1),u);b.custom=!0,f.push(b);continue}f.push(_h(c(x,y),t,p,e,d,u))}}const g=i.houses;for(let p=0;p<g.length;p+=Wo){const x=g[p]/4,y=g[p+1]/4,M=g[p+2]/10,b=g[p+3]/10,E=g[p+4]/10*(Math.PI/180),_=Ze(p*7919+17);s(x,y)||(g[p+5]===1?Fg(c(x,y),t,x,y,M,b,E,g[p+7],g[p+8],g[p+9]):Ng(c(x,y),t,x,y,M,b,E,g[p+6],g[p+7],g[p+8],g[p+9],_))}const v=i.cabins;for(let p=0;p<v.length;p+=Cg){const x=v[p]/4,y=v[p+1]/4;s(x,y)||Og(c(x,y),t,x,y,v[p+2]/10*(Math.PI/180),v[p+3],v[p+4],Ze(p*31+5))}let m=0;for(const p of l.values()){p.frame(),m+=p.vertexCount/3;const x=new Qt(p.build(),a);x.castShadow=!0,x.receiveShadow=!0,r.add(x)}return{group:r,footprints:f,triangles:m}}const In=1.5;class Vg{constructor(t,e,n,s,r,a,o){ct(this,"nx");ct(this,"nz");ct(this,"y");ct(this,"xMin");ct(this,"zMin");ct(this,"xMax");ct(this,"zMax");ct(this,"dx");ct(this,"dz");ct(this,"cellX");ct(this,"cellZ");this.raw=t,this.exposure=e,this.w=n,this.h=s,this.sizeX=r,this.sizeZ=a,this.cellX=r/n,this.cellZ=a/s,this.nx=Math.floor((n-1)/o)+1,this.nz=Math.floor((s-1)/o)+1,this.dx=this.cellX*o,this.dz=this.cellZ*o,this.xMin=-r/2+this.cellX/2,this.zMin=-a/2+this.cellZ/2,this.xMax=this.xMin+(this.nx-1)*this.dx,this.zMax=this.zMin+(this.nz-1)*this.dz,this.y=new Float32Array(this.nx*this.nz);for(let l=0;l<this.nz;l++)for(let c=0;c<this.nx;c++)this.y[l*this.nx+c]=t[l*o*n+c*o]*In}yAt(t,e){let n=(t-this.xMin)/this.dx,s=(e-this.zMin)/this.dz;n<0?n=0:n>this.nx-1.0001&&(n=this.nx-1.0001),s<0?s=0:s>this.nz-1.0001&&(s=this.nz-1.0001);const r=n|0,a=s|0,o=n-r,l=s-a,c=a*this.nx+r,h=this.y[c],u=this.y[c+1],d=this.y[c+this.nx],f=this.y[c+this.nx+1];return o+l<=1?h+(u-h)*o+(d-h)*l:f+(d-f)*(1-o)+(u-f)*(1-l)}bilinear(t,e,n){let s=(e+this.sizeX/2)/this.cellX-.5,r=(n+this.sizeZ/2)/this.cellZ-.5;s<0?s=0:s>this.w-1.0001&&(s=this.w-1.0001),r<0?r=0:r>this.h-1.0001&&(r=this.h-1.0001);const a=s|0,o=r|0,l=s-a,c=r-o,h=o*this.w+a;return(t[h]*(1-l)+t[h+1]*l)*(1-c)+(t[h+this.w]*(1-l)+t[h+this.w+1]*l)*c}metresAt(t,e){return this.bilinear(this.raw,t,e)}exposureAt(t,e){return this.bilinear(this.exposure,t,e)}inside(t,e,n=0){return t>this.xMin+n&&t<this.xMax-n&&e>this.zMin+n&&e<this.zMax-n}}class Wg{constructor(t,e,n){ct(this,"items",[]);ct(this,"v",new G);ct(this,"visible",!0);ct(this,"obstacles",[]);this.layer=t;for(const s of[...e].sort((r,a)=>r.priority-a.priority)){const r=document.createElement("button");r.type="button",r.tabIndex=-1,r.className=`inv-label inv-label--${s.kind}`,r.textContent=s.name,r.style.visibility="hidden",r.addEventListener("click",()=>n(s.id)),t.appendChild(r),this.items.push({place:s,el:r,w:0,h:0,shown:!1})}}setVisible(t){this.visible=t,this.layer.style.display=t?"":"none"}setObstacles(t){this.obstacles=t}update(t,e,n,s=1/0){if(!this.visible)return;const r=[...this.obstacles];for(const a of this.items){a.w||(a.w=a.el.offsetWidth,a.h=a.el.offsetHeight);const o=a.place;this.v.set(o.x,o.y,o.z);const l=this.v.distanceTo(t.position);this.v.project(t);let c=this.v.z<1&&this.v.z>-1&&l<(o.maxDist??1/0)&&l<s;const h=(this.v.x*.5+.5)*e,u=(-this.v.y*.5+.5)*n,d=h-a.w/2,f=u-a.h,g=h+a.w/2,v=u;if(c&&(g<0||d>e||v<0||f>n)&&(c=!1),c){for(const m of r)if(d<m[2]+6&&g>m[0]-6&&f<m[3]+4&&v>m[1]-4){c=!1;break}}c&&(r.push([d,f,g,v]),a.el.style.transform=`translate3d(${Math.round(d)}px, ${Math.round(f)}px, 0)`),c!==a.shown&&(a.el.style.visibility=c?"visible":"hidden",a.shown=c)}}dispose(){for(const t of this.items)t.el.remove();this.items=[]}}const Xg=[{id:"town",name:"A'Beckett Street",kind:"landmark",lat:-38.63372,lon:145.7283,blurb:"Inverloch's main street: bakeries, fish and chips, cafes and shops, a short walk from the inlet.",view:[380,58,-28],priority:1,lift:26},{id:"jetty",name:"Inverloch Jetty",kind:"landmark",lat:-38.63591,lon:145.73413,blurb:"Timber jetty reaching into Anderson Inlet, with the boat ramp alongside. A favourite for fishing and an evening walk.",view:[190,63,32],priority:1,lift:16},{id:"surf",name:"Surf Beach & Life Saving Club",kind:"landmark",lat:-38.64634,lon:145.70199,blurb:"Ocean beach facing Bass Strait, watched over by the Inverloch Surf Life Saving Club on the dune.",view:[330,62,-32],priority:1,lift:20},{id:"inlet",name:"Anderson Inlet",kind:"water",lat:-38.6412,lon:145.7445,blurb:"A shallow tidal estuary where the Tarwin River meets the sea. The sandbars here come from LiDAR survey data: slide the tide to cover and uncover them.",view:[3e3,50,8],priority:2},{id:"hub",name:"The Hub",kind:"landmark",lat:-38.63332,lon:145.72762,blurb:"Inverloch Community Hub on A'Beckett Street, home to the library and visitor information.",view:[300,60,20],priority:3,maxDist:2600,lift:18},{id:"espy",name:"Esplanade Hotel",kind:"landmark",lat:-38.63419,lon:145.72889,blurb:"The pub at the foreshore end of the main street.",view:[280,62,-40],priority:3,maxDist:2200,lift:18},{id:"rainbow",name:"Rainbow Park",kind:"landmark",lat:-38.63529,lon:145.72876,blurb:"Foreshore playground with picnic lawns and barbecues beside the inlet beach.",view:[150,60,14],priority:3,maxDist:2200,lift:14},{id:"bunurong",name:"Bunurong Environment Centre",kind:"landmark",lat:-38.63465,lon:145.72917,blurb:"Environment centre and shell museum on The Esplanade.",view:[260,60,-15],priority:5,maxDist:1100,lift:15},{id:"glade",name:"The Glade",kind:"landmark",lat:-38.63539,lon:145.7302,blurb:"Foreshore reserve and picnic shelter between the town centre and the jetty.",view:[300,62,5],priority:5,maxDist:1300,lift:13},{id:"oval",name:"Recreation Reserve",kind:"landmark",lat:-38.63194,lon:145.72681,blurb:"The town's football oval, a block back from the main street.",view:[460,58,15],priority:4,maxDist:2600,lift:16},{id:"school",name:"Primary School",kind:"landmark",lat:-38.63062,lon:145.72813,blurb:"Inverloch Primary School.",view:[380,58,0],priority:6,maxDist:1500,lift:14},{id:"bowls",name:"Bowls Club",kind:"landmark",lat:-38.63556,lon:145.73245,blurb:"Inverloch Bowls Club, two greens beside the foreshore.",view:[260,60,0],priority:6,maxDist:1300,lift:12},{id:"tennis",name:"Tennis Club & Oval",kind:"landmark",lat:-38.62722,lon:145.7372,blurb:"Tennis courts and a second football oval on the north-east side of town.",view:[520,58,10],priority:6,maxDist:2e3,lift:14},{id:"camping",name:"Foreshore Holiday Parks",kind:"landmark",lat:-38.63425,lon:145.7442,blurb:"Cabins, caravans and tents under the trees along The Esplanade, steps from the inlet.",view:[560,60,15],priority:4,maxDist:2800,lift:16},{id:"screw",name:"Screw Creek & Townsend Bluff",kind:"nature",lat:-38.6338,lon:145.7546,blurb:"A tidal creek in a nature conservation reserve, with a walking circuit up to the lookout on Townsend Bluff.",view:[900,60,-20],priority:3,lift:24},{id:"norman",name:"Point Norman",kind:"nature",lat:-38.648,lon:145.7118,blurb:"The corner where the surf beach turns into the inlet.",view:[900,60,-35],priority:4,maxDist:4200,lift:14},{id:"smythe",name:"Point Smythe",kind:"nature",lat:-38.6466,lon:145.7366,blurb:"The tip of the Venus Bay peninsula, across the entrance from town: coastal scrub, dunes and walking tracks.",view:[1300,58,150],priority:3,lift:22},{id:"racv",name:"RACV Inverloch Resort",kind:"landmark",lat:-38.6487,lon:145.6876,blurb:"Resort and villas on the Cape Paterson road, on the hill above the coast.",view:[520,60,40],priority:5,maxDist:3200,lift:18},{id:"strait",name:"Bass Strait",kind:"water",lat:-38.6565,lon:145.7075,blurb:"Open ocean. Swell rolls in to the surf beach from here.",view:[2300,50,-12],priority:4}];function qg(i,t){return Xg.map(e=>{const n=(e.lon-i.origin[0])*i.metresPerDegree[0],s=-(e.lat-i.origin[1])*i.metresPerDegree[1],r=Math.max(t.yAt(n,s),0);return{...e,x:n,z:s,y:r+(e.lift??6)}})}function sn(i,t,e){return[(e-i.origin[0])*i.metresPerDegree[0],-(t-i.origin[1])*i.metresPerDegree[1]]}const Yg=new Set(["Inverloch Surf Life Saving Club","The Hub"]),Fe=W(10126440),Me=W(6113848),rn=W(16053230),es=W(11842219),me=W(7304312),Ns=W(3163994),ns=W(13644844),is=W(15909424),Zg=W(16119022),qo=2.05*In;function xh(i,t,e,n=35){let s=1/0,r=0,a=1;for(let o=0;o<24;o++){const l=o/24*Math.PI*2,c=i.metresAt(t+Math.cos(l)*n,e+Math.sin(l)*n)+i.metresAt(t+Math.cos(l)*n*2,e+Math.sin(l)*n*2);c<s&&(s=c,r=Math.cos(l),a=Math.sin(l))}return[r,a]}function Vr(i){let t=0,e=0;for(let n=0;n<i.length;n+=2)t+=i[n],e+=i[n+1];return[t/(i.length/2)/10,e/(i.length/2)/10]}function Kg(i,t,e){const n=[];for(let y=0;y<e.length;y+=2)n.push([e[y]/10,e[y+1]/10]);t.metresAt(n[0][0],n[0][1])<t.metresAt(n[n.length-1][0],n[n.length-1][1])&&n.reverse();const s=1.7,r=qo,[a,o]=n[0];let l=a-n[1][0],c=o-n[1][1];const h=Math.hypot(l,c)||1;l/=h,c/=h;let u=0;for(;u<30&&t.yAt(a+l*u,o+c*u)<r-.25;)u+=1.5;const d=Math.max(t.yAt(a+l*u,o+c*u),r-1.2),f=Math.atan2(-l,-c);i.frame(a+l*u,0,o+c*u,f),i.quad(-s,d+.05,0,s,d+.05,0,s,r,u,-s,r,u,Fe),i.quad(-s,d-1.2,0,-s,r-.4,u,-s,r,u,-s,d+.05,0,Me),i.quad(s,d-1.2,0,s,d+.05,0,s,r,u,s,r-.4,u,Me);for(let y=0;y<n.length-1;y++){const[M,b]=n[y],[E,_]=n[y+1],S=Math.hypot(E-M,_-b),R=Math.atan2(E-M,_-b);i.frame(M,r,b,R);const w=Math.ceil(S/1.2);for(let D=0;D<w;D++){const O=D/w*S,P=(D+1)/w*S;i.box(-s,-.14,O,s,0,P,ie(Fe,.9+D*7%5*.04),void 0,Me)}i.box(-s+.25,-.5,0,-s+.5,-.14,S,Me,null),i.box(s-.5,-.5,0,s-.25,-.14,S,Me,null);const C=Math.max(1,Math.round(S/3.6));for(let D=0;D<=C;D++){const O=D/C*S;for(const P of[-1,1]){const z=P*(s-.12),U=t.yAt(i.wx(z,O),i.wz(z,O));i.cyl(z,U-r-.6,O,.17,.15,r-U+.6+1.1,6,Me,ie(Fe,.8))}i.box(-s,-.78,O-.12,s,-.5,O+.12,Me),i.quad(-s+.1,-2.6,O,s-.1,-.8,O,s-.1,-.6,O,-s+.1,-2.4,O,ie(Me,.9))}for(const D of[-1,1]){const O=D*(s-.12);i.box(O-.05,1.02,0,O+.05,1.1,S,Fe,void 0,Me),i.box(O-.03,.52,0,O+.03,.58,S,Fe,void 0,Me)}i.box(-s,-.14,-s,s,0,.01,Fe,void 0,Me)}const[g,v]=n[n.length-1],[m,p]=n[n.length-2],x=Math.atan2(g-m,v-p);i.frame(g,r,v,x),i.box(-3.2,-.14,0,3.2,0,5.2,ie(Fe,.96),void 0,Me);for(const[y,M]of[[-3.05,.2],[3.05,.2],[-3.05,5],[3.05,5],[0,5]]){const b=t.yAt(i.wx(y,M),i.wz(y,M));i.cyl(y,b-r-.6,M,.19,.17,r-b+.6+(y===0?0:1.1),6,Me,ie(Fe,.8))}i.box(-3.1,1.02,4.9,3.1,1.1,5,Fe,void 0,Me),i.box(-3.1,1.02,0,-3,1.1,5,Fe,void 0,Me),i.box(3,1.02,0,3.1,1.1,5,Fe,void 0,Me),i.cyl(2.6,0,4.5,.07,.05,4.6,5,me),i.blob(2.6,4.75,4.5,.28,.2,.28,6,3,W(16773320),void 0,1.6),i.box(-.35,-3.6,5.22,-.3,.9,5.28,me,null),i.box(.3,-3.6,5.22,.35,.9,5.28,me,null);for(let y=-3.3;y<.6;y+=.42)i.box(-.3,y,5.22,.3,y+.05,5.28,me);return i.frame(),{head:new G(g,r,v),points:n}}function $g(i,t,e,n){const[s,r]=xh(t,e,n,25),a=Math.atan2(s,r);i.frame(e,0,n,a);const o=4.2,l=-8,c=[];for(let g=l;g<=46;g+=3){const v=t.yAt(i.wx(0,g),i.wz(0,g));if(c.push([g,v]),v<-1.6*In)break}const h=c[0][1]+.12,u=Math.min(c[c.length-1][1]+.25,-.9*In),d=c[c.length-1][0],f=c.length-1;for(let g=0;g<f;g++){const v=l+(d-l)*g/f,m=l+(d-l)*(g+1)/f,p=h+(u-h)*g/f,x=h+(u-h)*(g+1)/f;i.quad(-o,p,v,-o,x,m,o,x,m,o,p,v,g%2?es:ie(es,.94));for(const y of[-1,1])i.quad(y*o,p-1.5,v,y*o,x-1.5,m,y*o,x+.15,m,y*o,p+.15,v,ie(es,.8))}i.frame()}function Jg(i,t,e){const[n,s]=xh(t,e.cx,e.cz,60),r=e.obb;let a=r.heading,o=r.w,l=r.d,c=-1/0;for(let E=0;E<4;E++){const _=r.heading+E*Math.PI/2,S=Math.sin(_)*n+Math.cos(_)*s;S>c&&(c=S,a=_,o=E%2?r.d:r.w,l=E%2?r.w:r.d)}const h=o/2,u=l/2;i.frame(r.cx,e.floorY,r.cz,a);const d=W(13223611),f=W(15394522),g=W(6975604);i.box(-h,-4,-u,h,3.1,u,d,null),i.box(-h,3.1,-u,h,6.1,u,f,null);const v=Math.max(2,Math.floor(o/5));for(let E=0;E<v;E++){const _=-h+(E+.5)/v*o;i.quad(_-1.7,.05,u+.05,_+1.7,.05,u+.05,_+1.7,2.7,u+.05,_-1.7,2.7,u+.05,E%2?ns:is)}i.quad(-h+.6,3.6,u+.05,h-.6,3.6,u+.05,h-.6,5.7,u+.05,-h+.6,5.7,u+.05,Ns,.9),i.box(-h-.6,2.95,u,h+.6,3.12,u+3.4,es,Fe,ie(es,.8)),i.box(-h-.6,3.12,u+3.32,h+.6,4.15,u+3.4,W(10469580),null);for(const E of[-h-.4,-h/3,h/3,h+.4])i.box(E-.12,-4,u+3,E+.12,2.95,u+3.24,me,null);i.quad(-h-.8,7.5,u+3.8,h+.8,7.5,u+3.8,h+.8,6.2,-u-.6,-h-.8,6.2,-u-.6,g),i.quad(-h,6.1,u,h,6.1,u,h,7.1,u,-h,7.1,u,f),i.quad(h,6.1,u,h,6.1,-u,h,6.3,-u,h,7.1,u,f),i.quad(-h,6.1,-u,-h,6.1,u,-h,7.1,u,-h,6.3,-u,f);const m=h-2.2,p=u-1.8;i.box(m-1.8,6.1,p-1.8,m+1.8,9.2,p+1.8,f,null),i.box(m-1.85,9.2,p-1.85,m+1.85,10.5,p+1.85,Ns,null,null,.7),i.box(m-2.3,10.5,p-2.3,m+2.3,10.72,p+2.3,g),i.cyl(m,10.72,p,.06,.04,5.2,5,rn),i.quad(m,15.6,p,m+1.9,15.6,p,m+1.9,14.5,p,m,14.5,p,ns),i.quad(m,14.5,p,m+1.9,14.5,p,m+1.9,13.4,p,m,13.4,p,is);for(let E=0;E<4;E++){const _=-h+(E+.5)/4*o;i.quad(_+.9,3.9,-u-.05,_-.9,3.9,-u-.05,_-.9,5.3,-u-.05,_+.9,5.3,-u-.05,Ns,E%2)}let x=u+14;for(;x<160&&t.metresAt(r.cx+n*x,r.cz+s*x)>1.75;)x+=3;const y=r.cx+n*x,M=r.cz+s*x,b=Math.atan2(n,s);i.frame(y,t.yAt(y,M),M,b);for(const E of[-1,1]){const _=E*32,S=t.yAt(i.wx(_,0),i.wz(_,0))-t.yAt(y,M);i.cyl(_,S,0,.05,.04,4.4,5,rn),i.quad(_,S+4.4,0,_+.95,S+4.4,0,_+.95,S+3.1,0,_,S+3.1,0,ns),i.quad(_,S+3.1,0,_+.95,S+3.1,0,_+.95,S+1.8,0,_,S+1.8,0,is)}for(const[E,_]of[[-1.5,-5.5],[1.5,-5.5],[-1.5,-8.5],[1.5,-8.5]])i.cyl(E,0,_,.04,.04,2.2,4,me);i.tri(-1.7,2.2,-5.3,1.7,2.2,-5.3,0,3,-7,ns),i.tri(1.7,2.2,-8.7,-1.7,2.2,-8.7,0,3,-7,ns),i.tri(1.7,2.2,-5.3,1.7,2.2,-8.7,0,3,-7,is),i.tri(-1.7,2.2,-8.7,-1.7,2.2,-5.3,0,3,-7,is),i.blob(6,.35,-6,.95,.4,2.1,8,3,W(14238751),W(15755818)),i.box(5.6,.3,-7.9,6.4,.95,-7.5,W(2763308));for(let E=0;E<4;E++)i.box(-7+E*.5,.2,-7.2,-6.85+E*.5,.75,-4.6,E%2?is:W(3116992));return i.frame(),{beach:new G(y,t.yAt(y,M),M),seaward:[n,s]}}function vh(i,t){const e=i.length/2;let n=0;for(let a=0;a<e;a++){const o=(a+1)%e;n+=i[a*2]*i[o*2+1]-i[o*2]*i[a*2+1]}const s=n>0?1:-1,r=[];for(let a=0;a<e;a++){const o=(a+e-1)%e,l=(a+1)%e;let c=i[a*2]-i[o*2],h=i[a*2+1]-i[o*2+1],u=i[l*2]-i[a*2],d=i[l*2+1]-i[a*2+1];const f=Math.hypot(c,h)||1,g=Math.hypot(u,d)||1;c/=f,h/=f,u/=g,d/=g;const v=-h*s,m=c*s;let p=v-d*s,x=m+u*s;const y=Math.hypot(p,x)||1;p/=y,x/=y;const M=t/Math.max(.45,p*v+x*m);r.push(i[a*2]+p*M,i[a*2+1]+x*M)}return r}function Qg(i,t,e){i.frame(0,e.floorY,0,0);const n=W(11111014),s=W(15328470),r=W(9410458);let a=1/0;for(let h=0;h<e.poly.length;h+=2)a=Math.min(a,t.yAt(e.poly[h],e.poly[h+1]));const o=e.poly.length/2;i.walls(e.poly,a-e.floorY-.3,3.2,n),i.walls(e.poly,3.2,6.2,s);const l=vh(e.poly,3.2),c=vh(e.poly,4.4);for(let h=0;h<o;h++){const u=(h+1)%o;i.quad(e.poly[h*2],6.6,e.poly[h*2+1],e.poly[u*2],6.6,e.poly[u*2+1],l[u*2],6.05,l[u*2+1],l[h*2],6.05,l[h*2+1],r)}if(i.walls(e.poly,6.2,6.6,ie(s,.92)),i.walls(l,6.05,7.9,Ns,.8),i.cap(l,7.9,ie(r,1.08)),i.walls(c,7.9,8.3,ie(r,.9)),i.cap(c,8.3,r),e.street){const h=e.street;i.frame(h.x,e.floorY,h.z,h.heading),i.quad(.6,.3,.06,h.length-.6,.3,.06,h.length-.6,5.6,.06,.6,5.6,.06,Ns,.9),i.box(h.length*.3,3.3,0,h.length*.7,3.5,3.4,W(14263361),void 0,ie(W(14263361),.8)),i.box(h.length*.3+.2,0,3.1,h.length*.3+.4,3.3,3.3,me,null),i.box(h.length*.7-.4,0,3.1,h.length*.7-.2,3.3,3.3,me,null)}i.frame()}function tn(i,t,e,n,s,r=Zg){const a=e.length,o=.22,l=s?a:a-1;for(let c=0;c<l;c++){const[h,u]=e[c],[d,f]=e[(c+1)%a];let g=-(f-u),v=d-h;const m=Math.hypot(g,v)||1;g=g/m*n*.5,v=v/m*n*.5;const p=t.yAt(h,u)+o,x=t.yAt(d,f)+o;i.quad(h+g,p,u+v,d+g,x,f+v,d-g,x,f-v,h-g,p,u-v,r)}}function jg(i,t,e,n,s){const r=[];for(let y=0;y<n.length;y+=2)r.push([n[y]/10,n[y+1]/10]);const[a,o]=Vr(n);let l=0,c=0,h=0;for(const[y,M]of r)l+=(y-a)**2,c+=(M-o)**2,h+=(y-a)*(M-o);const u=.5*Math.atan2(2*h,l-c),d=Math.cos(u),f=Math.sin(u);let g=0,v=0;for(const[y,M]of r)g=Math.max(g,Math.abs((y-a)*d+(M-o)*f)),v=Math.max(v,Math.abs(-(y-a)*f+(M-o)*d));g-=5,v-=5;const m=(y,M)=>[a+y*d-M*f,o+y*f+M*d],p=[];for(let y=0;y<72;y++){const M=y/72*Math.PI*2;p.push(m(Math.cos(M)*g,Math.sin(M)*v))}tn(t,e,p,.35,!0),tn(t,e,[m(-25,-25),m(25,-25),m(25,25),m(-25,25)],.3,!0);const x=y=>Array.from({length:24},(M,b)=>m(Math.cos(b/24*Math.PI*2)*y,Math.sin(b/24*Math.PI*2)*y));tn(t,e,x(5),.3,!0),tn(t,e,x(1.5),.3,!0);for(const y of[-1,1]){tn(t,e,[m(y*g,-3.2),m(y*(g-9),-3.2),m(y*(g-9),3.2),m(y*g,3.2)],.3,!1);const M=[];for(let b=-8;b<=8;b++){const E=b/8*1.05,_=y*(g-50*Math.cos(E)),S=50*Math.sin(E);(_/g)**2+(S/v)**2<1&&M.push(m(_,S))}M.length>2&&tn(t,e,M,.3,!1);for(const[b,E]of[[-3.2,9.5],[3.2,9.5],[-9.6,6.2],[9.6,6.2]]){const[_,S]=m(y*g,b);i.frame(_,e.yAt(_,S),S,0),i.cyl(0,0,0,.11,.09,E,6,rn),i.cyl(0,0,0,.2,.2,1.6,6,b*b<12?W(2973608):W(12597806))}}if(s)for(const[y,M]of[[-.62,-1],[.62,-1],[-.62,1],[.62,1]]){const[b,E]=m(y*(g+6),M*(v+9));i.frame(b,e.yAt(b,E),E,Math.atan2(a-b,o-E)),i.cyl(0,0,0,.28,.16,24,6,me),i.box(-1.7,24,-.2,1.7,25.3,.2,W(4869972)),i.quad(-1.6,24.1,.22,1.6,24.1,.22,1.6,25.2,.22,-1.6,25.2,.22,W(16774876),2.2)}i.frame()}function t_(i,t,e,n,s){const r=[];for(let M=0;M<n.length;M+=2)r.push([n[M]/10,n[M+1]/10]);if(r.length<4)return;if(s==="bowls"){tn(t,e,r,.5,!0,W(15328986));return}const[a,o,l,c]=r,h=Math.hypot(o[0]-a[0],o[1]-a[1])>Math.hypot(l[0]-o[0],l[1]-o[1]),u=h?a:o,d=h?o:l,f=h?l:c,g=h?c:a,v=(M,b)=>{const E=u[0]+(d[0]-u[0])*M,_=u[1]+(d[1]-u[1])*M,S=g[0]+(f[0]-g[0])*M,R=g[1]+(f[1]-g[1])*M;return[E+(S-E)*b,_+(R-_)*b]},m=.14;tn(t,e,[v(0,0),v(1,0),v(1,1),v(0,1)],m,!0),tn(t,e,[v(0,.125),v(1,.125)],m,!1),tn(t,e,[v(0,.875),v(1,.875)],m,!1),tn(t,e,[v(.23,.125),v(.23,.875)],m,!1),tn(t,e,[v(.77,.125),v(.77,.875)],m,!1),tn(t,e,[v(.23,.5),v(.77,.5)],m,!1);const p=v(.5,-.04),x=v(.5,1.04),y=e.yAt(p[0],p[1])+.2;i.frame(0,y,0,0),i.quad(p[0],0,p[1],x[0],0,x[1],x[0],.95,x[1],p[0],.95,p[1],W(2830131)),i.quad(p[0],.95,p[1],x[0],.95,x[1],x[0],1.05,x[1],p[0],1.05,p[1],rn);for(const M of[p,x])i.cyl(M[0],0,M[1],.06,.06,1.1,5,me);i.frame()}const Kn=[14826299,15764004,15909424,5025616,3117008,8280002].map(W);function e_(i,t,e,n,s){const[r,a]=Vr(e),o=t.yAt(r,a)+.05,l=s()*Math.PI;i.frame(r,o,a,l);const c=(d,f,g,v)=>{for(const[m,p]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.cyl(d+m,0,f+p,.07,.07,g+2,5,W(8018492));i.box(d-1,g-.1,f-1,d+1,g,f+1,Fe,void 0,Me),i.cyl(d,g+2,f,1.5,0,1,4,v)};c(-2.2,0,1.5,Kn[0]),c(2.2,0,2.1,Kn[4]),i.box(-1.2,1.4,-.35,1.2,1.5,.35,Fe),i.quad(3.2,2.1,-.4,6.4,.15,-.4,6.4,.15,.4,3.2,2.1,.4,Kn[2]),i.quad(-3.2,1.5,.4,-5.6,.15,.4,-5.6,.15,-.4,-3.2,1.5,-.4,Kn[1]);const h=0,u=5.2;for(const d of[-2.2,2.2])i.quad(h+d,0,u-1.1,h+d+.08,0,u-1.1,h+d+.08,2.6,u,h+d,2.6,u,me),i.quad(h+d,0,u+1.1,h+d+.08,0,u+1.1,h+d+.08,2.6,u,h+d,2.6,u,me);i.box(h-2.25,2.55,u-.05,h+2.25,2.65,u+.05,Kn[3]);for(const d of[-1.1,0,1.1])i.box(h+d-.25,.5,u-.1,h+d+.25,.56,u+.1,W(2763308)),i.box(h+d-.24,.56,u-.01,h+d-.22,2.55,u+.01,me,null),i.box(h+d+.22,.56,u-.01,h+d+.24,2.55,u+.01,me,null);if(n){i.cyl(-6.5,0,-5.5,.09,.07,5.2,5,me);for(let d=0;d<6;d++){const f=d/6*Math.PI*2,g=-6.5+Math.cos(f)*3.2,v=-5.5+Math.sin(f)*3.2;i.quad(g-.04,0,v,g+.04,0,v,-6.46,5.1,-5.5,-6.54,5.1,-5.5,W(3104672))}for(let d=0;d<6;d++){const f=-9+d*3.4,g=Kn[d],v=4.6,m=3.3;i.cyl(f,0,-11,.08,.07,v,5,me),i.cyl(f+1.7,0,-7.2,.08,.07,m,5,me),i.tri(f,v,-11,f+3.4,v,-11,f+1.7,m,-7.2,g)}i.cyl(11.399999999999999,0,-11,.08,.07,4.6,5,me),i.cyl(6.5,.3,5.5,1.3,1.3,.12,10,Kn[5],Kn[2]),i.cyl(6.5,0,5.5,.1,.1,1.1,5,me);for(let d=0;d<3;d++)i.blob(9.5+d*1.6,.55,-1.5,.3,.3,.55,5,3,Kn[(d*2+1)%6])}i.frame()}function n_(i,t,e){const n=[];for(let u=0;u<e.length;u+=2)n.push([e[u]/10,e[u+1]/10]);const[s,r]=Vr(e),a=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1])>Math.hypot(n[2][0]-n[1][0],n[2][1]-n[1][1])?[n[0],n[1]]:[n[1],n[2]],o=Math.atan2(a[1][0]-a[0][0],a[1][1]-a[0][1]),l=Math.hypot(a[1][0]-a[0][0],a[1][1]-a[0][1])/2-1;i.frame(s,t.yAt(s,r)+.1,r,o);const c=W(13092286),h=ie(c,.88);for(const u of[-1,1]){const d=u*l,f=[[0,0],[1.4,.35],[2.4,1.1],[3,2]];for(let g=0;g<3;g++){const[v,m]=f[g],[p,x]=f[g+1],y=d-u*(3-v),M=d-u*(3-p);u>0?i.quad(-4,m,y,4,m,y,4,x,M,-4,x,M,g%2?c:h):i.quad(4,m,y,-4,m,y,-4,x,M,4,x,M,g%2?c:h)}i.box(-4,0,Math.min(d,d+u*1.2),4,2,Math.max(d,d+u*1.2),h,c)}i.box(-1.5,0,-1.2,1.5,.45,1.2,h,c),i.quad(-1.5,.45,1.2,1.5,.45,1.2,1.5,0,3,-1.5,0,3,c),i.quad(1.5,.45,-1.2,-1.5,.45,-1.2,-1.5,0,-3,1.5,0,-3,c),i.box(3.2,.45,-2.5,3.28,.5,2.5,me),i.frame()}function i_(i,t){const e=t.obb,n=e.w>=e.d,s=(n?e.w:e.d)/2;i.frame(e.cx,t.floorY,e.cz,e.heading);const r=n?s+1.2:0,a=n?0:s+1.2,o=W(15262418);i.box(r-1.4,-1,a-1.4,r+1.4,t.wallH+4.6,a+1.4,o,null),i.cyl(r,t.wallH+4.6,a,2.1,0,4.2,4,W(5922659)),i.box(r-.07,t.wallH+8.8,a-.07,r+.07,t.wallH+10.6,a+.07,rn),i.box(r-.5,t.wallH+9.8,a-.07,r+.5,t.wallH+9.95,a+.07,rn),i.frame()}function s_(i,t,e,n){i.frame(e,t.yAt(e,n),n,.4);const s=46;for(let r=0;r<6;r++){const a=r/6*s,o=1.5-r/6*1.1,l=1.5-(r+1)/6*1.1;i.cyl(0,a,0,o,l,s/6,3,r%2?rn:ns)}i.cyl(0,s,0,.08,.05,5,4,me),i.blob(0,s+5.1,0,.3,.3,.3,5,3,W(16726832),void 0,2.5);for(const[r,a]of[[.3,38],[2.4,35],[4.4,40]])i.cyl(Math.cos(r)*.9,a,Math.sin(r)*.9,.55,.55,.35,8,rn,rn);i.box(2.5,0,-1.5,5.5,2.6,1.5,W(13619919),W(9080716)),i.frame()}function r_(i,t,e,n,s){const r=s.nearest(e,n,60),a=r?Math.atan2(r.px-e,r.pz-n):0;i.frame(e,t.yAt(e,n)+.1,n,a);const o=W(3116874);for(const[l,c]of[[-6,3.5],[6,3.5],[-6,9.5],[6,9.5]])i.box(l-.2,0,c-.2,l+.2,5,c+.2,rn,null);i.box(-8,5,2,8,5.25,11,rn,W(14277590),W(15921902),.5),i.box(-8.05,5.25,1.95,8.05,5.9,11.05,o,W(14277590));for(const l of[-4,0,4])i.box(l-1.3,0,6.2,l+1.3,.2,6.8,es),i.box(l-.4,.2,6.25,l+.4,1.7,6.75,rn,o);i.frame()}function a_(i,t,e,n,s){for(let r=0;r<3;r++){const a=e+(s()-.5)*16,o=n+(s()-.5)*16;i.frame(a,t.yAt(a,o)+.05,o,s()*Math.PI),i.box(-1,.7,-.4,1,.78,.4,Fe,void 0,Me),i.box(-1,.4,-.85,1,.46,-.6,Fe,void 0,Me),i.box(-1,.4,.6,1,.46,.85,Fe,void 0,Me),i.box(-.75,0,-.7,-.65,.7,.7,me,null),i.box(.65,0,-.7,.75,.7,.7,me,null)}i.frame()}function o_(i){if(!i.hasDetail)return null;const{town:t,hf:e,roads:n,paths:s}=i,r=new pe,a=Ze(4411),o=[12597547,3108687,15921902,3426654,9268810,14266938,10134443].map(W),l=W(7301730),c=W(3103290),h=[W(13115434),W(15254046)],u=t.houses;for(let x=0;x<u.length;x+=Wo){const y=u[x]/4,M=u[x+1]/4;if(u[x+5]===1||!i.isDetail(y,M)||i.isClear(y,M))continue;const b=n.nearest(y,M,45),E=a()<.5?-1:1,_=E*(2.5+a()*2.5),S=Math.floor(a()*o.length),R=a()<.7;if(!b)continue;const w=b.cls<=3?6.4:3.6;if(b.dist<w+3)continue;const C=(y-b.px)/b.dist,D=(M-b.pz)/b.dist,O=-D,P=C,z=Math.atan2(C,D),U=b.px+C*w+O*_,I=b.pz+D*w+P*_;if(!i.isClear(U,I)&&(r.frame(U,e.yAt(U,I),I,z),r.box(-.05,0,-.05,.05,.95,.05,l),r.box(-.17,.95,-.22,.17,1.22,.22,o[S],ie(o[S],.8)),R)){const X=b.px+C*(w-1.1)+O*(_+E*1.5),N=b.pz+D*(w-1.1)+P*(_+E*1.5);r.frame(X,e.yAt(X,N),N,z),h.forEach((B,H)=>{r.box(H*.72-.28,0,-.33,H*.72+.28,.96,.33,c),r.box(H*.72-.3,.96,-.36,H*.72+.3,1.04,.36,B)})}}const d=W(7034692),f=W(5917242),g=W(2829102),v=W(14276303),m=42;for(const x of s){if(x.cls>3||x.flags)continue;const y=x.pts.length/3;let M=m*.4,b=null;for(let E=1;E<y;E++){const _=x.pts[E*3-3],S=x.pts[E*3-1],R=x.pts[E*3],w=x.pts[E*3+2],C=Math.hypot(R-_,w-S);if(M+=C,M<m)continue;M=0;const D=(R-_)/(C||1),O=(w-S)/(C||1),P=x.width/2+2.5,z=R+O*P,U=w-D*P;if(!i.isDetail(z,U)||i.isClear(z,U)||!e.inside(z,U,20)){b=null;continue}const I=e.yAt(z,U);r.frame(z,I,U,Math.atan2(D,O)),r.cyl(0,0,0,.15,.1,9.2,6,d),r.box(-1.15,8.45,-.06,1.15,8.58,.06,f);for(const N of[-.95,0,.95])r.box(N-.04,8.58,-.04,N+.04,8.72,.04,v);const X={x:z,y:I+8.72,z:U,nx:O,nz:-D};if(b&&Math.hypot(X.x-b.x,X.z-b.z)<m*1.8){r.frame();for(const N of[-.95,0,.95]){const B=b.x+b.nx*N,H=b.z+b.nz*N,it=X.x+X.nx*N,st=X.z+X.nz*N,q=(B+it)/2,et=(H+st)/2,rt=(b.y+X.y)/2-.5;for(const[xt,at,bt,Wt,Et,Bt]of[[B,b.y,H,q,rt,et],[q,rt,et,it,X.y,st]])r.quad(xt,at,bt,Wt,Et,Bt,Wt,Et+.035,Bt,xt,at+.035,bt,g),r.quad(xt,at,bt,Wt,Et,Bt,Wt+X.nx*.035,Et,Bt+X.nz*.035,xt+X.nx*.035,at,bt+X.nz*.035,g)}}b=X}}if(!r.vertexCount)return null;const p=new Qt(r.build(),Is());return p.castShadow=!0,p.receiveShadow=!0,p.name="street-detail",p}function l_(i){const{town:t,hf:e,paths:n}=i,s=120,r=new Map,a=t.houses;for(let C=0;C<a.length;C+=Wo){const D=Math.floor(a[C]/4/s)*4096+Math.floor(a[C+1]/4/s)+8390656;r.set(D,(r.get(D)??0)+1)}const[o,l]=sn(t.meta,-38.63385,145.7285),c=(C,D)=>(r.get(Math.floor(C/s)*4096+Math.floor(D/s)+2048*4097)??0)>=4||Math.hypot(C-o,D-l)<380,h=[];for(const C of n){if(C.cls>2||C.flags)continue;const D=C.cls===0?48:58,O=C.pts.length/3;let P=D*.5,z=1;for(let U=1;U<O;U++){const I=C.pts[U*3-3],X=C.pts[U*3-1],N=C.pts[U*3],B=C.pts[U*3+2],H=Math.hypot(N-I,B-X);if(P+=H,P<D)continue;P=0,z=-z;const it=(N-I)/(H||1),st=(B-X)/(H||1),q=C.width/2+1.6,et=N-st*q*z,rt=B+it*q*z;!c(et,rt)||!e.inside(et,rt,20)||i.isClear(et,rt)||h.push(et,e.yAt(et,rt),rt,Math.atan2(st*z,-it*z))}}const u=new pe,d=W(9278358);u.cyl(0,0,0,.11,.07,8.2,5,d),u.box(-.05,8.1,0,.05,8.22,2.2,d),u.box(-.22,8,1.7,.22,8.14,2.5,W(5922659)),u.quad(-.2,7.99,2.48,.2,7.99,2.48,.2,7.99,1.72,-.2,7.99,1.72,W(16773320),3);const f=h.length/4,g=new vn(u.build(),Is(),f),v=document.createElement("canvas");v.width=v.height=64;const m=v.getContext("2d"),p=m.createRadialGradient(32,32,0,32,32,32);p.addColorStop(0,"rgba(255,214,150,0.85)"),p.addColorStop(.45,"rgba(255,196,120,0.32)"),p.addColorStop(1,"rgba(255,180,100,0)"),m.fillStyle=p,m.fillRect(0,0,64,64);const x=new So(v);x.colorSpace=ye;const y=new hi(34,34);y.rotateX(-Math.PI/2);const M=new Xn({map:x,transparent:!0,opacity:0,blending:$r,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),b=new vn(y,M,f);b.renderOrder=3;const E=new $t,_=new pn,S=new G(0,1,0),R=new G(1,1,1),w=new G;for(let C=0;C<f;C++){const D=h[C*4],O=h[C*4+1],P=h[C*4+2],z=h[C*4+3];_.setFromAxisAngle(S,z),g.setMatrixAt(C,E.compose(w.set(D,O,P),_,R));const U=D+Math.sin(z)*2.1,I=P+Math.cos(z)*2.1;b.setMatrixAt(C,E.compose(w.set(U,e.yAt(U,I)+.5,I),_.identity(),R))}return g.castShadow=!1,g.computeBoundingSphere(),b.computeBoundingSphere(),b.onBeforeRender=()=>{M.opacity=Nr.value*.9},b.visible=!0,{lights:g,pools:b,poolMat:M}}function c_(i){const{town:t,hf:e,footprints:n,roads:s}=i,r=new Je;r.name="landmarks";const a=new pe,o=new pe,l=Ze(20261111),c={group:r,nightMaterials:[]};t.piers[0]&&(c.jetty=Kg(a,e,t.piers[0]));for(const[S,R]of[[-38.63578,145.73393],[-38.63595,145.73085]]){const[w,C]=sn(t.meta,S,R);$g(a,e,w,C)}const h=n.find(S=>S.name==="Inverloch Surf Life Saving Club");h&&(c.surf=Jg(a,e,h));const u=n.find(S=>S.name==="The Hub");u&&Qg(a,e,u);for(const S of n)S.kind==="church"&&i_(a,S);let d=0;for(const S of t.pitches)S.s==="australian_football"?jg(a,o,e,S.p,d++===0):S.s==="tennis"||S.s==="bowls"?t_(a,o,e,S.p,S.s):S.s==="skateboard"&&n_(a,e,S.p);const[f,g]=sn(t.meta,-38.63529,145.72876);for(const S of t.playgrounds){const[R,w]=Vr(S);e_(a,e,S,Math.hypot(R-f,w-g)<60,l)}const[v,m]=sn(t.meta,-38.62462,145.71011);s_(a,e,v,m);const[p,x]=sn(t.meta,-38.63161,145.72943);r_(a,e,p,x,s);for(const[S,R]of[[-38.6358,145.72885],[-38.63447,145.72923],[-38.63545,145.72875]]){const[w,C]=sn(t.meta,S,R);a_(a,e,w,C,l)}const y=new Qt(a.build(),Is());y.castShadow=!0,y.receiveShadow=!0,r.add(y);const M=o.build();M.deleteAttribute("glow");const b=new Qt(M,Ur(new Xn({vertexColors:!0,side:ze,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})));r.add(b);const E=o_(i);E&&r.add(E);const _=l_(i);return r.add(_.lights,_.pools),c.nightMaterials.push(_.poolMat),c}const ss=[16053490,16053490,16053490,13225168,10725291,5593438,2040100,2838410,11020586,2054728,14266938,8368595],Mh=[15223869,3113154,15909424,3843690,16777215,9329589,15764004,2042422,15231654,4899008],$n=[14826299,15764004,15909424,3715691,3117008,13651872,3720896,16053490].map(W);function Sh(){const i=new pe,t=W(16777215),e=W(1713198),n=W(1381655);i.box(-.88,.3,-2.1,.88,.95,2.1,t,void 0,n),i.box(-.8,.95,-1.35,.8,1.48,.7,e,t);for(const s of[-.9,.68])for(const r of[-1.55,1])i.box(s,0,r,s+.22,.62,r+.62,n);for(const s of[-.75,.45])i.quad(s,.6,2.11,s+.3,.6,2.11,s+.3,.8,2.11,s,.8,2.11,W(16776166),2.2);return i.build()}function yh(i){const t=new pe,e=new pe,n=W(16777215),s=W(1845814),r=W(1315862),a=W(11843772),o=W(2500651),l=(p,x,y,M,b)=>{let E=0,_=0;for(const[S,R]of x)E+=S,_+=R;E/=x.length,_/=x.length;for(let S=0;S<x.length;S++){const[R,w]=x[S],[C,D]=x[(S+1)%x.length];p.quad(y,w,R,M,w,R,M,D,C,y,D,C,b),p.tri(y,_,E,y,D,C,y,w,R,b),p.tri(M,_,E,M,w,R,M,D,C,b)}},c=[{lower:[[-2.12,.34],[2.1,.34],[2.18,.62],[2.02,.84],[1.02,.98],[-1.4,.98],[-2.08,.9],[-2.18,.6]],cabin:[[-1.4,.98],[1.02,.98],[.4,1.44],[-.9,1.44]]},{lower:[[-2.12,.36],[2.1,.36],[2.18,.68],[2,.92],[1.05,1.06],[-2.1,1.06],[-2.18,.66]],cabin:[[-2.05,1.06],[1.05,1.06],[.5,1.62],[-1.9,1.62]]},{lower:[[-2.3,.38],[2.15,.38],[2.22,.7],[2.05,.94],[1.1,1.06],[-.35,1.06],[-.4,.98],[-2.3,.98]],cabin:[[-.35,1.06],[1.1,1.06],[.55,1.58],[-.3,1.58]]}],{lower:h,cabin:u}=c[i%c.length],d=Math.max(...h.map(p=>p[0])),f=Math.min(...h.map(p=>p[0])),g=u[2][1];l(t,h,-.88,.88,n),l(e,u,-.8,.8,s),t.box(-.82,g,u[3][0]-.04,.82,g+.05,u[2][0]+.04,n);for(const p of[-.82,.78])for(const[x,y]of[[u[0],u[3]],[u[1],u[2]]])t.quad(p,x[1],x[0]-.05,p+.04,x[1],x[0]+.05,p+.04,y[1],y[0]+.05,p,y[1],y[0]-.05,n);e.box(-.84,.22,f+.2,.84,.36,d-.2,o,null);const v=.34,m=10;for(const p of[-1,1])for(const x of[-1.35,1.38]){const y=p*.66,M=p*.9;for(let b=0;b<m;b++){const E=b/m*Math.PI*2,_=(b+1)/m*Math.PI*2,S=v+Math.sin(E)*v,R=x+Math.cos(E)*v,w=v+Math.sin(_)*v,C=x+Math.cos(_)*v;e.quad(y,S,R,M,S,R,M,w,C,y,w,C,r),e.tri(M,v,x,M,S,R,M,w,C,r),e.tri(M+p*.012,v,x,M+p*.012,v+Math.sin(E)*v*.55,x+Math.cos(E)*v*.55,M+p*.012,v+Math.sin(_)*v*.55,x+Math.cos(_)*v*.55,a)}}for(const p of[-.78,.46])e.quad(p,.6,d+.01,p+.32,.6,d+.01,p+.32,.76,d+.01,p,.76,d+.01,W(16776166),2.2),e.quad(p,.64,f-.01,p+.32,.64,f-.01,p+.32,.8,f-.01,p,.8,f-.01,W(11736604),.9);for(const p of[d+.012,f-.012])e.quad(-.24,.42,p,.24,.42,p,.24,.54,p,-.24,.54,p,W(15921902));return{body:t.build(),trim:e.build()}}function Wr(i,t,e,n,s,r){const a=-t/2,o=t*.12,l=t/2,c=e/2,h=c*.5,u=ie(s,.72);for(const f of[-1,1])f>0?(i.quad(h,0,a,c*.88,n,a,c,n,o,h,0,o,s),i.quad(h,0,o,c,n,o,0,n*1.12,l,0,.1,l*.86,s)):(i.quad(-h,0,o,-c,n,o,-c*.88,n,a,-h,0,a,s),i.quad(0,.1,l*.86,0,n*1.12,l,-c,n,o,-h,0,o,s));i.quad(-h,0,a,-c*.88,n,a,c*.88,n,a,h,0,a,u),i.quad(-h,0,a,h,0,a,h,0,o,-h,0,o,u),i.tri(-h,0,o,h,0,o,0,.1,l*.86,u);const d=n*.8;i.quad(-c*.84,d,a+.05,c*.84,d,a+.05,c*.95,d,o,-c*.95,d,o,r),i.tri(-c*.95,d,o,c*.95,d,o,0,d,l*.95,r)}function h_(i,t){const e=new pe,n=W(16119280);if(i===0)Wr(e,4.6,1.9,.75,t()<.5?W(12962767):$n[Math.floor(t()*6)],W(10133668)),e.box(-.2,.55,-2.65,.2,1.25,-2.25,W(1974822)),e.box(-.75,.6,-.9,.75,.72,-.5,W(9138002)),e.box(-.75,.6,.4,.75,.72,.8,W(9138002));else if(i===1){const s=$n[Math.floor(t()*$n.length)];Wr(e,7.4,2.7,1.25,n,W(15131350)),e.box(-1.37,.72,-3.7,1.37,.9,3,s,null),e.box(-1.05,1,-1.2,1.05,2.25,1.9,n,W(15329248)),e.quad(-1,1.45,1.92,1,1.45,1.92,.9,2.2,1.92,-.9,2.2,1.92,W(2240572),.4),e.box(-1.06,1.5,-.9,-1.05,2.1,1.6,W(2240572),null),e.box(1.05,1.5,-.9,1.06,2.1,1.6,W(2240572),null),e.box(-.9,2.25,-1,.9,2.33,1.2,n),e.cyl(0,2.33,-.6,.03,.02,1.6,4,W(9278358))}else Wr(e,9,2.8,1.3,t()<.6?n:W(2377070),W(14208952)),e.box(-.85,1.05,-1.6,.85,1.55,1.6,n,W(15329248)),e.cyl(0,1.05,.9,.08,.05,11.5,5,W(14014682)),e.box(-.06,2.45,-3,.06,2.57,.9,W(14014682)),e.blob(0,2.72,-1.05,.17,.17,1.9,5,3,W(3104666)),e.quad(-.01,12.4,.9,.01,12.4,.9,.01,1.4,4.4,-.01,1.4,4.4,W(10133154));return e.build()}function u_(i){const t=new pe;return Wr(t,4.2,1.5,.55,W(16119280),W(14736588)),t.cyl(0,.45,.5,.04,.03,6,4,W(14014682)),t.tri(.02,6.3,.5,.02,1.1,.45,.6,1.2,-2,i),t.tri(.02,4.6,.6,.3,1,1.9,.02,1,.6,W(16250866)),t.blob(.35,.95,-.9,.22,.4,.22,5,3,W(14238767)),t.build()}function f_(i,t){const e=new pe,n=8,s=9,r=2.6;for(let a=0;a<n;a++){const o=-1.15+a/n*2.3,l=-1.15+(a+1)/n*2.3,c=Math.sin(o)*s*.5,h=Math.cos(o)*s*.42,u=Math.sin(l)*s*.5,d=Math.cos(l)*s*.42,f=a===0||a===n-1||a===3||a===4?t:i;e.quad(c,h,-r/2,u,d,-r/2,u,d,r/2,c,h,r/2,f)}return e.build()}function d_(i,t){const e=new pe;return e.box(-.22,0,-.75,.22,.06,.75,i),e.blob(-.25,.75,0,.2,.62,.22,5,3,t),e.blob(-.42,1.48,0,.13,.14,.13,5,3,W(14264711)),e.build()}function p_(i){const t=new pe;return t.blob(0,.02,0,.27,.05,1.05,6,2,i),t.blob(0,.42,-.1,.2,.4,.18,5,3,W(1976112)),t.blob(0,.9,-.1,.12,.13,.12,5,3,W(14264711)),t.build()}function m_(i){const t=new Map;for(const r of i){if(r.cls>1||!r.name||r.flags)continue;const a=t.get(r.name)??[];a.push(r),t.set(r.name,a)}const e=[],n=(r,a)=>a?[r[r.length-3],r[r.length-1]]:[r[0],r[2]],s=r=>{const a=new Float32Array(r.length);for(let o=0;o<r.length/3;o++)a.set(r.subarray(o*3,o*3+3),r.length-3-o*3);return a};for(const r of t.values()){const a=r.map(l=>l.pts),o=r[0].width;for(;a.length;){let l=Array.from(a.pop()),c=!0;for(;c;){c=!1;for(let f=0;f<a.length;f++){const g=a[f],v=[l[l.length-3],l[l.length-1]],m=[l[0],l[2]],p=(M,b)=>Math.hypot(M[0]-b[0],M[1]-b[1])<2.5;let x=null,y=!0;if(p(v,n(g,!1))?x=g:p(v,n(g,!0))?x=s(g):p(m,n(g,!0))?(x=g,y=!1):p(m,n(g,!1))&&(x=s(g),y=!1),!!x){l=y?l.concat(Array.from(x.subarray(3))):Array.from(x.subarray(0,x.length-3)).concat(l),a.splice(f,1),c=!0;break}}}const h=new Float32Array(l),u=h.length/3,d=new Float32Array(u);for(let f=1;f<u;f++)d[f]=d[f-1]+Math.hypot(h[f*3]-h[f*3-3],h[f*3+2]-h[f*3-1]);d[u-1]>380&&e.push({pts:h,cum:d,length:d[u-1],width:o})}}return e}class g_{constructor(t,e){ct(this,"group",new Je);ct(this,"afloat",new Je);ct(this,"boats",[]);ct(this,"dinghies",[]);ct(this,"kites",[]);ct(this,"kiteLines");ct(this,"surfers",[]);ct(this,"traffic");ct(this,"trafficTrim");ct(this,"cars",[]);ct(this,"gulls");ct(this,"gullState",[]);ct(this,"tmpM",new $t);ct(this,"tmpQ",new pn);ct(this,"tmpP",new G);ct(this,"up",new G(0,1,0));ct(this,"one",new G(1,1,1));this.ctx=t,this.group.name="life",this.group.add(this.afloat);const n=Is();this.addParkedCars(n),this.addTraffic(n),this.addBoats(n,e),this.addKites(n),this.addSurfers(n,e),this.addPeople(e),this.addGulls(e),this.update(0,0)}setTide(t){this.afloat.position.y=t}addParkedCars(t){const{town:e,hf:n}=this.ctx,s=e.cars,r=s.length/Ln,a=new vn(Sh(),t,r),o=new Rt,l=[[],[],[]];let c=0;for(let u=0;u<r;u++){const d=s[u*Ln]/4,f=s[u*Ln+1]/4;if(!this.ctx.isClear(d,f)&&!(!this.ctx.isDetail(d,f)&&this.ctx.roads.nearest(d,f,5.5))){if(this.ctx.hasDetail){l[(s[u*Ln+3]+u)%3].push(u);continue}this.tmpQ.setFromAxisAngle(this.up,s[u*Ln+2]/10*(Math.PI/180)),a.setMatrixAt(c,this.tmpM.compose(this.tmpP.set(d,n.yAt(d,f)+.3,f),this.tmpQ,this.one)),a.setColorAt(c++,o.set(ss[(s[u*Ln+3]*7+u)%ss.length]))}}a.count=c,a.castShadow=!0,a.computeBoundingSphere(),this.group.add(a),l.map(u=>u.map(d=>({x:s[d*Ln]/4,z:s[d*Ln+1]/4,heading:s[d*Ln+2]/10*(Math.PI/180),colour:(s[d*Ln+3]*7+d)%ss.length}))).forEach((u,d)=>{if(!u.length)return;const f=yh(d),g=new vn(f.body,t,u.length),v=new vn(f.trim,t,u.length);u.forEach((m,p)=>{this.tmpQ.setFromAxisAngle(this.up,m.heading),this.tmpM.compose(this.tmpP.set(m.x,n.yAt(m.x,m.z)+.3,m.z),this.tmpQ,this.one),g.setMatrixAt(p,this.tmpM),v.setMatrixAt(p,this.tmpM),g.setColorAt(p,o.set(ss[m.colour]))});for(const m of[g,v])m.castShadow=!0,m.computeBoundingSphere(),this.group.add(m)})}addTraffic(t){const e=m_(this.ctx.paths);if(!e.length)return;const n=e.reduce((c,h)=>c+h.length,0),s=Math.min(54,Math.round(n/240)),r=Ze(77),a=this.ctx.hasDetail?yh(0):null,o=this.traffic=new vn(a?a.body:Sh(),t,s);if(o.instanceMatrix.setUsage(Zs),o.frustumCulled=!1,a){const c=this.trafficTrim=new vn(a.trim,t,s);c.instanceMatrix.setUsage(Zs),c.frustumCulled=!1,c.castShadow=!0,this.group.add(c)}const l=new Rt;for(let c=0;c<s;c++){let h=r()*n,u=e[0];for(const d of e)if((h-=d.length)<=0){u=d;break}this.cars.push({route:u,s:r()*u.length,dir:r()<.5?1:-1,speed:9+r()*6}),o.setColorAt(c,l.set(ss[Math.floor(r()*ss.length)]))}o.castShadow=!0,this.group.add(o)}addBoats(t,e){var c;const{hf:n}=this.ctx,s=Ze(451),r=((c=e.jetty)==null?void 0:c.head)??new G(380,0,-117),a=[];for(let h=0;h<4e3&&a.length<16;h++){const u=s()*Math.PI*2,d=55+s()*420,f=r.x+Math.cos(u)*d,g=r.z+Math.sin(u)*d;n.metresAt(f,g)>-1.9||!n.inside(f,g,40)||a.some(([v,m])=>Math.hypot(v-f,m-g)<26)||a.push([f,g])}const o=2.2+s()*.4;a.forEach(([h,u],d)=>{const f=d%5===0?2:d%2?0:1,g=new Qt(h_(f,s),t);g.position.set(h,0,u),g.rotation.y=o+(s()-.5)*.5,g.castShadow=!0,this.afloat.add(g),this.boats.push({obj:g,phase:s()*6.28,y:f===0?-.22:-.42})});const l=[W(16250866),W(15222589),W(3117008),W(15909424)];for(let h=0;h<600&&this.dinghies.length<4;h++){const u=s()*Math.PI*2,d=150+s()*900,f=r.x+Math.cos(u)*d,g=r.z+160+Math.sin(u)*d*.5,v=45+s()*70,m=30+s()*40;let p=n.inside(f,g,160);for(let y=0;y<12&&p;y++){const M=y/12*Math.PI*2;n.metresAt(f+Math.cos(M)*v,g+Math.sin(M)*m)>-1.5&&(p=!1)}if(!p||this.dinghies.some(y=>Math.hypot(y.cx-f,y.cz-g)<170))continue;const x=new Qt(u_(l[this.dinghies.length%l.length]),t);x.castShadow=!0,this.afloat.add(x),this.dinghies.push({obj:x,cx:f,cz:g,rx:v,rz:m,phase:s()*6.28,speed:(2.2+s())/Math.max(v,m)})}}addKites(t){const{hf:e,town:n}=this.ctx,s=Ze(990),[r,a]=sn(n.meta,-38.6385,145.714),[o,l]=sn(n.meta,-38.645,145.731),c=[];for(let d=0;d<3e3&&c.length<6;d++){const f=r+s()*(o-r),g=a+s()*(l-a);e.metresAt(f,g)>-1.6||c.some(v=>Math.hypot(v.x-f,v.z-g)<110)||c.push(new G(f,0,g))}const h=new Float32Array(c.length*12);c.forEach((d,f)=>{let g=85;for(;g>15&&(e.metresAt(d.x+.65*g,d.z+.76*g)>-1.2||e.metresAt(d.x-.65*g,d.z-.76*g)>-1.2);)g-=10;const v=$n[Math.floor(s()*7)],m=$n[Math.floor(s()*7)],p=new Qt(f_(v,m===v?$n[7]:m),t),x=new Qt(d_($n[Math.floor(s()*7)],W(1976112)),t);p.castShadow=!0,this.afloat.add(p,x),this.kites.push({base:d,reach:g,phase:s()*6.28,speed:.12+s()*.06,kite:p,rider:x})});const u=new we;u.setAttribute("position",new be(h,3).setUsage(Zs)),this.kiteLines=new df(u,Ur(new tc({color:15921906,transparent:!0,opacity:.7}))),this.kiteLines.frustumCulled=!1,this.afloat.add(this.kiteLines)}addSurfers(t,e){if(!e.surf)return;const{hf:n}=this.ctx,s=Ze(31),[r,a]=e.surf.seaward,o=e.surf.beach;let l=20;for(;l<420&&n.metresAt(o.x+r*l,o.z+a*l)>-2;)l+=5;for(let c=0;c<9;c++){const h=(c-4)*13+(s()-.5)*8,u=l+(s()-.5)*30,d=o.x+r*u-a*h,f=o.z+a*u+r*h,g=new Qt(p_($n[Math.floor(s()*$n.length)]),t);g.position.set(d,0,f),g.rotation.y=Math.atan2(r,a)+(s()-.5)*.8,this.afloat.add(g),this.surfers.push({obj:g,phase:s()*6.28})}}addPeople(t){const{hf:e,town:n,paths:s,roads:r,footprints:a}=this.ctx,o=Ze(2026),l=[],c=[],h=(U,I)=>a.some(X=>{if(Math.hypot(U-X.cx,I-X.cz)>Math.max(X.obb.w,X.obb.d))return!1;let N=!1;for(let B=0,H=X.poly.length-2;B<X.poly.length;H=B,B+=2){const it=X.poly[B],st=X.poly[B+1],q=X.poly[H],et=X.poly[H+1];st>I!=et>I&&U<(q-it)*(I-st)/(et-st)+it&&(N=!N)}return N}),u=(U,I)=>!r.nearest(U,I,6.4)&&!h(U,I),d=(U,I,X,N,B,H,it=0)=>{for(let st=0,q=0;st<N*40&&q<N;st++){const et=o()*Math.PI*2,rt=Math.sqrt(o())*X,xt=U+Math.cos(et)*rt,at=I+Math.sin(et)*rt,bt=e.metresAt(xt,at);bt<B||bt>H||!u(xt,at)||(l.push(xt,e.yAt(xt,at),at),o()<it&&c.push(xt+1.2,e.yAt(xt+1.2,at),at+.6),q++)}};t.surf&&d(t.surf.beach.x,t.surf.beach.z,130,60,1.5,3,.32);const[f,g]=sn(n.meta,-38.63575,145.729);d(f,g,120,34,1.5,2.4,.3);const[v,m]=sn(n.meta,-38.6356,145.7337);d(v,m,110,26,1.5,2.6,.2);const[p,x]=sn(n.meta,-38.63194,145.72681);d(p,x,55,14,0,99);const[y,M]=sn(n.meta,-38.63385,145.7285);for(const U of s){if(U.cls>3||U.flags)continue;const I=U.pts.length/3;for(let X=1;X<I;X++){const N=U.pts[X*3],B=U.pts[X*3+2];if(Math.hypot(N-y,B-M)>300||o()>.42||this.ctx.isClear(N,B))continue;const H=N-U.pts[X*3-3],it=B-U.pts[X*3-1],st=Math.hypot(H,it)||1,q=o()<.5?1:-1,et=U.width/2+1.6+o()*1.2,rt=N-it/st*et*q,xt=B+H/st*et*q;u(rt,xt)&&l.push(rt,e.yAt(rt,xt),xt)}}if(t.jetty){const U=t.jetty.points;for(let I=0;I<U.length-1;I++)for(let X=0;X<3;X++){const N=o();l.push(U[I][0]+(U[I+1][0]-U[I][0])*N+(o()-.5)*2,qo,U[I][1]+(U[I+1][1]-U[I][1])*N+(o()-.5)*2)}}const b=l.length/3,E=new pe;E.cyl(0,0,0,.17,.22,.85,5,W(2765632)),E.cyl(0,.85,0,.24,.2,.6,5,W(16777215),W(16777215));const _=new pe;_.blob(0,1.6,0,.14,.15,.14,5,3,W(14264711));const S=new _c({vertexColors:!0}),R=U=>(U.deleteAttribute("glow"),U),w=new vn(R(E.build()),S,b),C=new vn(R(_.build()),S,b),D=new Rt,O=[16777215,15255976,12159590,9068354];for(let U=0;U<b;U++){const I=.92+o()*.2;this.tmpQ.setFromAxisAngle(this.up,o()*6.28),this.tmpM.compose(this.tmpP.set(l[U*3],l[U*3+1],l[U*3+2]),this.tmpQ,new G(I,I,I)),w.setMatrixAt(U,this.tmpM),C.setMatrixAt(U,this.tmpM),w.setColorAt(U,D.set(Mh[Math.floor(o()*Mh.length)])),C.setColorAt(U,D.set(O[Math.floor(o()*O.length)]))}w.computeBoundingSphere(),C.computeBoundingSphere(),this.group.add(w,C);const P=new pe;P.cyl(0,0,0,.03,.03,2,4,W(14277081)),P.cyl(0,1.75,0,1.25,0,.5,8,W(16777215));const z=new vn(R(P.build()),S,c.length/3);for(let U=0;U<c.length/3;U++)this.tmpQ.setFromAxisAngle(new G(1,0,0),(o()-.5)*.3),z.setMatrixAt(U,this.tmpM.compose(this.tmpP.set(c[U*3],c[U*3+1],c[U*3+2]),this.tmpQ,this.one)),z.setColorAt(U,D.set([14826299,3117008,15909424,3715691,15764004,16053490][Math.floor(o()*6)]));z.castShadow=!0,z.computeBoundingSphere(),this.group.add(z)}addGulls(t){if(!t.jetty)return;const e=Ze(8),n=16;for(let r=0;r<n;r++)this.gullState.push({cx:t.jetty.head.x+(e()-.5)*90,cz:t.jetty.head.z+(e()-.5)*90,r:18+e()*55,h:qo+6+e()*16,w:(.25+e()*.3)*(e()<.5?1:-1),phase:e()*6.28});const s=new we;s.setAttribute("position",new be(new Float32Array(n*18),3).setUsage(Zs)),this.gulls=new Qt(s,Ur(new Xn({color:16185074,side:ze}))),this.gulls.frustumCulled=!1,this.group.add(this.gulls)}update(t,e){for(const n of this.boats)n.obj.rotation.z=Math.sin(e*.9+n.phase)*.04,n.obj.rotation.x=Math.sin(e*.7+n.phase*1.7)*.025,n.obj.position.y=n.y+Math.sin(e*1.1+n.phase)*.06;for(const n of this.dinghies){const s=n.phase+e*n.speed;n.obj.position.set(n.cx+Math.cos(s)*n.rx,-.15,n.cz+Math.sin(s)*n.rz),n.obj.rotation.y=Math.atan2(-Math.sin(s)*n.rx,Math.cos(s)*n.rz),n.obj.rotation.z=.12+Math.sin(e*.8+n.phase)*.04}for(const n of this.surfers)n.obj.position.y=-.05+Math.sin(e*.9+n.phase)*.22;if(this.kiteLines){const n=this.kiteLines.geometry.getAttribute("position");this.kites.forEach((s,r)=>{const a=Math.sin(e*s.speed*6.28+s.phase),o=Math.cos(e*s.speed*6.28+s.phase)>=0?1:-1,l=s.base.x+.65*s.reach*a,c=s.base.z+.76*s.reach*a;s.rider.position.set(l,.05,c),s.rider.rotation.y=Math.atan2(.65*o,.76*o),s.rider.rotation.z=.28;const h=e*1.3+s.phase,u=l+12+o*5+Math.sin(h)*4.5,d=c-10+Math.cos(h)*1.5,f=17+Math.sin(h*2)*2.4;s.kite.position.set(u,f,d),s.kite.lookAt(l,1.2,c),s.kite.rotateX(-Math.PI/2),n.setXYZ(r*4,l-.3,1.25,c),n.setXYZ(r*4+1,u-2.6,f-1,d),n.setXYZ(r*4+2,l-.3,1.25,c),n.setXYZ(r*4+3,u+2.6,f-1,d)}),n.needsUpdate=!0}if(this.traffic){const n=this.ctx.hf;this.cars.forEach((s,r)=>{var M;const a=s.route;s.s+=s.dir*s.speed*t,s.s>a.length&&(s.s=a.length,s.dir=-1),s.s<0&&(s.s=0,s.dir=1);let o=0,l=a.cum.length-1;for(;l-o>1;){const b=o+l>>1;a.cum[b]<=s.s?o=b:l=b}const c=(s.s-a.cum[o])/(a.cum[l]-a.cum[o]||1),h=a.pts[o*3],u=a.pts[o*3+2],d=a.pts[l*3],f=a.pts[l*3+2];let g=d-h,v=f-u;const m=Math.hypot(g,v)||1;g=g/m*s.dir,v=v/m*s.dir;const p=Math.min(a.width*.24,2),x=h+(d-h)*c+v*p,y=u+(f-u)*c-g*p;this.tmpQ.setFromAxisAngle(this.up,Math.atan2(g,v)),this.traffic.setMatrixAt(r,this.tmpM.compose(this.tmpP.set(x,n.yAt(x,y)+.36,y),this.tmpQ,this.one)),(M=this.trafficTrim)==null||M.setMatrixAt(r,this.tmpM)}),this.traffic.instanceMatrix.needsUpdate=!0,this.trafficTrim&&(this.trafficTrim.instanceMatrix.needsUpdate=!0)}if(this.gulls){const n=this.gulls.geometry.getAttribute("position");this.gullState.forEach((s,r)=>{const a=s.phase+e*s.w,o=s.cx+Math.cos(a)*s.r,l=s.cz+Math.sin(a)*s.r,c=s.h+Math.sin(a*2.3)*1.5,h=s.w>0?1:-1,u=-Math.sin(a)*h,d=Math.cos(a)*h,f=d,g=-u,v=Math.sin(e*7+s.phase*3)*.45,m=r*6;n.setXYZ(m,o+u*.35,c,l+d*.35),n.setXYZ(m+1,o-u*.3,c,l-d*.3),n.setXYZ(m+2,o+f*.85,c+v,l+g*.85),n.setXYZ(m+3,o+u*.35,c,l+d*.35),n.setXYZ(m+4,o-f*.85,c+v,l-g*.85),n.setXYZ(m+5,o-u*.3,c,l-d*.3)}),n.needsUpdate=!0}}}const __=1,Eh=2,x_=[W(5198680),W(11575168),W(9072466),W(12434356)],v_=W(4474957),M_=W(15921382),S_=[.34,.3,.26,.22,.16,.15,.13,.11],bh=new Float32Array(9);function y_(i,t){const e=[i[0]/10,i[1]/10];for(let n=2;n<i.length;n+=2){const s=i[n-2]/10,r=i[n-1]/10,a=i[n]/10,o=i[n+1]/10,l=Math.max(1,Math.ceil(Math.hypot(a-s,o-r)/t));for(let c=1;c<=l;c++)e.push(s+(a-s)*c/l,r+(o-r)*c/l)}return e}class E_{constructor(){ct(this,"cells",new Map);ct(this,"segs",[]);ct(this,"size",40)}add(t,e,n,s,r,a){const o=this.segs.length/6;this.segs.push(t,e,n,s,r,a);const l=Math.floor(Math.min(t,n)/this.size),c=Math.floor(Math.max(t,n)/this.size),h=Math.floor(Math.min(e,s)/this.size),u=Math.floor(Math.max(e,s)/this.size);for(let d=l;d<=c;d++)for(let f=h;f<=u;f++){const g=(d+512)*4096+(f+512);let v=this.cells.get(g);v||this.cells.set(g,v=[]),v.push(o)}}nearest(t,e,n){let s=null;const r=Math.ceil(n/this.size),a=Math.floor(t/this.size),o=Math.floor(e/this.size);for(let l=a-r;l<=a+r;l++)for(let c=o-r;c<=o+r;c++){const h=this.cells.get((l+512)*4096+(c+512));if(h)for(const u of h){const d=this.segs[u*6],f=this.segs[u*6+1],g=this.segs[u*6+2],v=this.segs[u*6+3],m=g-d,p=v-f,x=Math.max(0,Math.min(1,((t-d)*m+(e-f)*p)/(m*m+p*p||1))),y=d+m*x,M=f+p*x,b=Math.hypot(t-y,e-M);b<=n&&(!s||b<s.dist)&&(s={dist:b,px:y,pz:M,cls:this.segs[u*6+4],name:this.segs[u*6+5]})}}return s}}function b_(i,t,e){const n=new pe,s=new pe,r=new E_,a=[],o=[];for(const[m,p,x,y,M,b]of i.roads){const E=y/10,_=y_(b,m<=3?6:5),S=_.length/2;if(S<2)continue;const R=p===0&&m<=1?v_:x_[p],w=S_[m],C=(x&__)!==0,D=t.yAt(_[0],_[1]),O=t.yAt(_[S*2-2],_[S*2-1]),P=new Float32Array(S);for(let N=1;N<S;N++)P[N]=P[N-1]+Math.hypot(_[N*2]-_[N*2-2],_[N*2+1]-_[N*2-1]);const z=P[S-1]||1,U=new Float32Array(S*3),I=new Float32Array(S*3),X=new Float32Array(S*3);for(let N=0;N<S;N++){const B=_[N*2],H=_[N*2+1],it=Math.max(N-1,0),st=Math.min(N+1,S-1);let q=_[st*2]-_[it*2],et=_[st*2+1]-_[it*2+1];const rt=Math.hypot(q,et)||1;q/=rt,et/=rt;let xt=1;if(N>0&&N<S-1){const zt=_[N*2]-_[N*2-2],ge=_[N*2+1]-_[N*2-1],ee=Math.hypot(zt,ge)||1;xt=1/Math.max(.6,(zt*q+ge*et)/ee)}const at=-et*(E/2)*xt,bt=q*(E/2)*xt,Wt=C?D+(O-D)*(P[N]/z)+.6+1*Math.sin(Math.PI*P[N]/z):NaN,Et=C?Wt:t.yAt(B,H)+w,Bt=C?Wt:t.yAt(B+at,H+bt)+w,Jt=C?Wt:t.yAt(B-at,H-bt)+w;U.set([B+at,Bt,H+bt],N*3),I.set([B,Et,H],N*3),X.set([B-at,Jt,H-bt],N*3),N>0&&m<=3&&r.add(_[N*2-2],_[N*2-1],B,H,m,M)}for(let N=0;N<S-1;N++){const B=N*3,H=B+3;if(e){const it=e(I[B],I[B+2]),st=e(I[H],I[H+2]);if(it&&st)continue;if(it!==st){let q=0,et=1;for(let ee=0;ee<12;ee++){const ae=(q+et)/2;e(I[B]+(I[H]-I[B])*ae,I[B+2]+(I[H+2]-I[B+2])*ae)===it?q=ae:et=ae}const rt=(q+et)/2;for(const ee of[U,I,X])for(let ae=0;ae<3;ae++)bh[(ee===U?0:ee===I?3:6)+ae]=ee[B+ae]+(ee[H+ae]-ee[B+ae])*rt;const[xt,at,bt,Wt,Et,Bt,Jt,zt,ge]=bh;it?(n.quad(xt,at,bt,U[H],U[H+1],U[H+2],I[H],I[H+1],I[H+2],Wt,Et,Bt,R),n.quad(Wt,Et,Bt,I[H],I[H+1],I[H+2],X[H],X[H+1],X[H+2],Jt,zt,ge,R)):(n.quad(U[B],U[B+1],U[B+2],xt,at,bt,Wt,Et,Bt,I[B],I[B+1],I[B+2],R),n.quad(I[B],I[B+1],I[B+2],Wt,Et,Bt,Jt,zt,ge,X[B],X[B+1],X[B+2],R));continue}}if(n.quad(U[B],U[B+1],U[B+2],U[H],U[H+1],U[H+2],I[H],I[H+1],I[H+2],I[B],I[B+1],I[B+2],R),n.quad(I[B],I[B+1],I[B+2],I[H],I[H+1],I[H+2],X[H],X[H+1],X[H+2],X[B],X[B+1],X[B+2],R),C){const it=W(p===2?7297604:13225162);for(const st of[U,X])n.quad(st[B],st[B+1],st[B+2],st[H],st[H+1],st[H+2],st[H],st[H+1]+1.05,st[H+2],st[B],st[B+1]+1.05,st[B+2],it),n.quad(st[B],st[B+1]-.7,st[B+2],st[H],st[H+1]-.7,st[H+2],st[H],st[H+1],st[H+2],st[B],st[B+1],st[B+2],W(9276036))}}if(m<=5&&!C)for(const N of[0,S-1]){const B=I[N*3],H=I[N*3+1],it=I[N*3+2];if(e!=null&&e(B,it))continue;const st=8;for(let q=0;q<st;q++){const et=q/st*Math.PI*2,rt=(q+1)/st*Math.PI*2;n.tri(B,H,it,B+Math.cos(rt)*E/2,H,it+Math.sin(rt)*E/2,B+Math.cos(et)*E/2,H,it+Math.sin(et)*E/2,R)}}if(m<=1&&!(x&Eh)&&z>20){let N=0;for(let B=4;B<z-4;B+=12){for(;N<S-2&&P[N+1]<B;)N++;const H=(B-P[N])/(P[N+1]-P[N]||1),it=I[N*3]+(I[N*3+3]-I[N*3])*H,st=I[N*3+1]+(I[N*3+4]-I[N*3+1])*H,q=I[N*3+2]+(I[N*3+5]-I[N*3+2])*H;if(e!=null&&e(it,q))continue;let et=I[N*3+3]-I[N*3],rt=I[N*3+5]-I[N*3+2];const xt=Math.hypot(et,rt)||1;et/=xt,rt/=xt;const at=(I[N*3+4]-I[N*3+1])/xt*3,bt=-rt*.16,Wt=et*.16,Et=.05;s.quad(it+bt,st+Et,q+Wt,it+et*3+bt,st+at+Et,q+rt*3+Wt,it+et*3-bt,st+at+Et,q+rt*3-Wt,it-bt,st+Et,q-Wt,M_)}}if(x&Eh){let N=0,B=0;for(let rt=0;rt<S;rt++)N+=_[rt*2],B+=_[rt*2+1];N/=S,B/=S;const H=S>>1,it=w_(_[0],_[1],_[H*2],_[H*2+1],_[S*2-2],_[S*2-1]),st=it?it.x:N,q=it?it.z:B,et=it?it.r:Math.hypot(_[0]-N,_[1]-B);et>3&&et<40&&!(e!=null&&e(st,q))&&!o.some(rt=>Math.hypot(rt.x-st,rt.z-q)<12)&&o.push({x:st,z:q,r:et,w:E})}m<=3&&a.push({cls:m,name:M>=0?i.names[M]:"",width:E,flags:x,pts:I,length:z})}const l=W(13158078),c=W(7314002),h=W(4943936);for(const m of o){const p=m.r-m.w/2-.3;if(p<1.2)continue;const x=t.yAt(m.x,m.z)+.2;n.frame(m.x,x,m.z,0),n.cyl(0,0,0,p,p,.4,14,l,c),n.blob(0,.9,0,p*.45,.8,p*.45,6,3,h,W(7181400)),n.frame()}const u=new ui({vertexColors:!0,roughness:.92,metalness:0,side:ze,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),d=new Qt(wh(n.build()),u);d.receiveShadow=!0,d.name="roads";const f=Ur(new Xn({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})),g=new Qt(wh(s.build()),f);g.name="road-markings";const v=new Je;return v.add(d,g),{group:v,index:r,paths:a}}function wh(i){return i.deleteAttribute("glow"),i}function w_(i,t,e,n,s,r){const a=2*(i*(n-r)+e*(r-t)+s*(t-n));if(Math.abs(a)<.001)return null;const o=i*i+t*t,l=e*e+n*n,c=s*s+r*r,h=(o*(n-r)+l*(r-t)+c*(t-n))/a,u=(o*(s-e)+l*(i-s)+c*(e-i))/a;return{x:h,z:u,r:Math.hypot(i-h,t-u)}}const Us=-36,Yo=170,T_=`
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
`,Xr=2;function Th(){const i=new dr(new Uint8Array([128,128,128,255]),1,1);return i.needsUpdate=!0,{maps:Array.from({length:Xr},()=>({value:i})),rects:Array.from({length:Xr},()=>({value:new ce(0,0,1,0)}))}}function A_(i,t,e,n=Th()){const{nx:s,nz:r}=i,a=new Float32Array(s*r*3),o=new Float32Array(s*r*3),l=new Float32Array(s*r*2);for(let v=0;v<r;v++)for(let m=0;m<s;m++){const p=v*s+m,x=i.xMin+m*i.dx,y=i.zMin+v*i.dz;a[p*3]=x,a[p*3+1]=i.y[p],a[p*3+2]=y,l[p*2]=(x+i.sizeX/2)/i.sizeX,l[p*2+1]=1-(y+i.sizeZ/2)/i.sizeZ;const M=i.y[v*s+Math.max(m-1,0)],b=i.y[v*s+Math.min(m+1,s-1)],E=i.y[Math.max(v-1,0)*s+m],_=i.y[Math.min(v+1,r-1)*s+m],S=(b-M)/(2*i.dx),R=(_-E)/(2*i.dz),w=Math.hypot(S,1,R);o[p*3]=-S/w,o[p*3+1]=1/w,o[p*3+2]=-R/w}const c=new Uint32Array((s-1)*(r-1)*6);let h=0;for(let v=0;v<r-1;v++)for(let m=0;m<s-1;m++){const p=v*s+m,x=p+1,y=p+s,M=y+1;c[h++]=p,c[h++]=y,c[h++]=x,c[h++]=x,c[h++]=y,c[h++]=M}const u=new we;u.setAttribute("position",new be(a,3)),u.setAttribute("normal",new be(o,3)),u.setAttribute("uv",new be(l,2)),u.setIndex(new be(c,1)),u.computeBoundingSphere();const d=new ui({map:t,roughness:.96,metalness:0});d.onBeforeCompile=v=>{v.uniforms.uTide=e;for(let m=0;m<Xr;m++)v.uniforms["uDetail"+m]=n.maps[m],v.uniforms["uDetailRect"+m]=n.rects[m];v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
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
          float above = vWPos.y / ${In.toFixed(2)} - uTide;
          float wet = smoothstep(0.45, 0.03, above);
          diffuseColor.rgb *= mix(1.0, 0.76, wet);
        }`)},d.customProgramCacheKey=()=>"inverloch-terrain-3";const f=new Qt(u,d);f.receiveShadow=!0,f.name="terrain";const g=new Je;return g.add(f,C_(i),P_(i)),g}function R_(i){const t=[];for(let e=0;e<i.nx;e++)t.push([i.xMin+e*i.dx,i.zMin]);for(let e=1;e<i.nz;e++)t.push([i.xMax,i.zMin+e*i.dz]);for(let e=i.nx-2;e>=0;e--)t.push([i.xMin+e*i.dx,i.zMax]);for(let e=i.nz-2;e>=1;e--)t.push([i.xMin,i.zMin+e*i.dz]);return t}function C_(i){const t=R_(i),e=t.length,n=[],s=[],r=[],a=new Rt(9074780),o=new Rt(6180669),l=new Rt(3813673),c=[[0,a,o],[1,o,l]];for(let d=0;d<e;d++){const[f,g]=t[d],[v,m]=t[(d+1)%e],p=i.yAt(f,g),x=i.yAt(v,m),y=v-f,M=m-g,b=Math.hypot(y,M)||1,E=-M/b*-1,_=y/b*-1;for(const[S,R,w]of c){const D=S===0?p:p-6,O=S===0?p-6:Us,P=S===0?x:x-6,z=S===0?x-6:Us;n.push(f,D,g,v,P,m,v,z,m,f,D,g,v,z,m,f,O,g);for(const U of[R,R,w,R,w,w])s.push(U.r,U.g,U.b);for(let U=0;U<6;U++)r.push(E,0,_)}}const h=new we;h.setAttribute("position",new he(n,3)),h.setAttribute("normal",new he(r,3)),h.setAttribute("color",new he(s,3));const u=new Qt(h,new ui({vertexColors:!0,roughness:1,side:ze}));return u.name="skirt",u}function P_(i){const t=new Je,e=i.xMax-i.xMin+Yo*2,n=i.zMax-i.zMin+Yo*2,s=190,r=(i.xMin+i.xMax)/2,a=(i.zMin+i.zMax)/2,o=new Qt(new Ei(e,s,n),new ui({color:1779245,roughness:.75,metalness:.1}));o.position.set(r,Us-s/2,a),o.receiveShadow=!0,t.add(o);const l=document.createElement("canvas");l.width=2048,l.height=160;const c=l.getContext("2d");c.fillStyle="#1b262d",c.fillRect(0,0,l.width,l.height),c.fillStyle="#e9d9a6",c.textBaseline="middle",c.font="600 78px 'Space Grotesk', system-ui, sans-serif",c.fillText("INVERLOCH",40,84);const h=c.measureText("INVERLOCH").width;c.fillStyle="#9fb4bd",c.font="400 42px 'Space Grotesk', system-ui, sans-serif",c.fillText("Bass Coast, Victoria   ·   38.63° S  145.73° E   ·   Anderson Inlet & Bass Strait",40+h+46,88);const u=new So(l);u.colorSpace=ye,u.anisotropy=8;const d=1700,f=new Qt(new hi(d,d*(l.height/l.width)),new Xn({map:u,toneMapped:!1}));f.position.set(r-e/2+d/2+110,Us-s/2,a+n/2+.6),t.add(f);const g=document.createElement("canvas");g.width=g.height=256;const v=g.getContext("2d");v.fillStyle="#e9d9a6",v.beginPath(),v.moveTo(128,18),v.lineTo(176,150),v.lineTo(128,122),v.lineTo(80,150),v.closePath(),v.fill(),v.font="700 86px 'Space Grotesk', system-ui, sans-serif",v.textAlign="center",v.fillText("N",128,240);const m=new So(g);m.colorSpace=ye;const p=new Qt(new hi(130,130),new Xn({map:m,transparent:!0,toneMapped:!1}));return p.rotation.x=-Math.PI/2,p.position.set(i.xMax+Yo/2,Us+.6,i.zMin+120),t.add(p),t}function qr(i,t,e,n,s,r,a,o,l,c){const h=new Ao(1,0),u=h.getAttribute("position"),d=[];for(let f=0;f<u.count;f++){const g=u.getX(f),v=u.getY(f),m=u.getZ(f),p=Math.sin(g*12.9898+v*78.233+m*37.719+o*4.1)*43758.5453,x=.8+(p-Math.floor(p))*.42;d.push([t+g*s*x,e+v*r*(v<0?.75:x),n+m*a*x])}for(let f=0;f<d.length;f+=3){const[g,v,m]=[d[f],d[f+1],d[f+2]],p=le.clamp(((g[1]+v[1]+m[1])/3-(e-r))/(2*r),0,1);i.tri(g[0],g[1],g[2],v[0],v[1],v[2],m[0],m[1],m[2],Ls(l,c,p))}h.dispose()}function D_(){const i=[],t=n=>{const s=n.build();return s.deleteAttribute("glow"),s};let e=new pe;return qr(e,0,.44,0,.82,.56,.82,1,W(3098152),W(7507285)),i.push(t(e)),e=new pe,e.cyl(0,0,0,.04,.026,.56,4,W(11905429)),qr(e,0,.72,0,.36,.3,.36,2,W(4151352),W(9349240)),qr(e,.17,.52,.1,.24,.19,.24,3,W(3887925),W(8362603)),i.push(t(e)),e=new pe,e.cyl(0,0,0,.055,.04,.4,4,W(7297608)),qr(e,0,.64,0,.46,.38,.46,4,W(3695150),W(9091170)),i.push(t(e)),e=new pe,e.cyl(0,0,0,.035,.03,.16,4,W(5916728)),e.cyl(0,.12,0,.23,.11,.42,6,W(2506539)),e.cyl(0,.5,0,.15,0,.5,6,W(4020796)),i.push(t(e)),i}function L_(i,t,e,n=()=>!1){const s=new Je;s.name="trees";const r=D_(),a=new _c({vertexColors:!0}),o=1300,l=new Map,c=i.trees,h=Ze(88);for(let x=0;x<c.length;x+=Pg){if(e<1&&h()>e||n(c[x]/4,c[x+1]/4))continue;const M=`${c[x+2]>>8}:${Math.floor(c[x]/4/o)}:${Math.floor(c[x+1]/4/o)}`;let b=l.get(M);b||l.set(M,b=[]),b.push(x)}const u=new $t,d=new pn,f=new G,g=new G,v=new G(0,1,0),m=new Rt;let p=0;for(const[x,y]of l){const M=Number(x.split(":")[0]),b=new vn(r[M],a,y.length);y.forEach((E,_)=>{const S=c[E]/4,R=c[E+1]/4,w=(c[E+2]&255)/10,C=Ze(E*2654435761+11);g.set(S,t.yAt(S,R)-.15,R),d.setFromAxisAngle(v,C()*Math.PI*2);const D=.85+C()*.35;f.set(w*D,w,w*(.85+C()*.35)),b.setMatrixAt(_,u.compose(g,d,f));const O=.8+C()*.34;b.setColorAt(_,m.setRGB(O*(.94+C()*.14),O,O*(.9+C()*.12)))}),b.instanceMatrix.needsUpdate=!0,b.instanceColor&&(b.instanceColor.needsUpdate=!0),b.computeBoundingSphere(),b.castShadow=!0,b.receiveShadow=!1,s.add(b),p+=y.length}return{group:s,count:p}}const I_=`
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
}`;function U_(i,t){const e=i.w*i.h,n=new Uint16Array(e*2);for(let f=0;f<e;f++)n[f*2]=Wl.toHalfFloat(i.raw[f]),n[f*2+1]=Wl.toHalfFloat(i.exposure[f]);const s=new dr(n,i.w,i.h,ii,fn);s.minFilter=s.magFilter=We,s.wrapS=s.wrapT=hn,s.needsUpdate=!0;const r={tField:{value:s},uSize:{value:new Lt(i.sizeX,i.sizeZ)},uTide:t,uTime:{value:0},uSunDir:{value:new G(.4,.8,.3).normalize()},uSunColor:{value:new Rt(16773848)},uShallow:{value:new Rt(7129789)},uDeep:{value:new Rt(937848)},uSky:{value:new Rt(12573938)},uFoam:{value:1}},a=new qn({uniforms:r,vertexShader:I_,fragmentShader:N_,transparent:!0,depthWrite:!1}),o=new hi(i.xMax-i.xMin,i.zMax-i.zMin);o.rotateX(-Math.PI/2);const l=new Qt(o,a);l.position.set((i.xMin+i.xMax)/2,t.value*In,(i.zMin+i.zMax)/2),l.renderOrder=2,l.name="water";const c=new Qt(new we,new Xn({color:1929103,transparent:!0,opacity:.8,side:ze,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));c.renderOrder=1,c.name="water-edge";const h=[];for(let f=0;f<i.nx;f++)h.push([i.xMin+f*i.dx,i.zMin]);for(let f=1;f<i.nz;f++)h.push([i.xMax,i.zMin+f*i.dz]);for(let f=i.nx-2;f>=0;f--)h.push([i.xMin+f*i.dx,i.zMax]);for(let f=i.nz-2;f>=1;f--)h.push([i.xMin,i.zMin+f*i.dz]);const u=h.map(([f,g])=>i.yAt(f,g)),d=f=>{t.value=f;const g=f*In;l.position.y=g;const v=[],m=h.length;for(let x=0;x<m;x++){const y=(x+1)%m,M=u[x],b=u[y];if(M>=g&&b>=g)continue;const[E,_]=h[x],[S,R]=h[y],w=Math.min(M,g),C=Math.min(b,g);v.push(E,g,_,S,g,R,S,C,R,E,g,_,S,C,R,E,w,_)}c.geometry.dispose();const p=new we;p.setAttribute("position",new he(v,3)),c.geometry=p};return d(t.value),{mesh:l,skirt:c,uniforms:r,setTide:d}}const Ah=-.9,Rh=1.3,Ch=.2,rs={x:260,z:150,dist:3900,polar:55,azimuth:16},F_={high:{step:1,trees:1,shadow:4096,pixelRatio:2},medium:{step:2,trees:.6,shadow:2048,pixelRatio:1.5},low:{step:2,trees:.35,shadow:0,pixelRatio:1}},O_=()=>new Promise(i=>requestAnimationFrame(()=>i()));function z_(i,t){const n=t.positions,s=t.normals,r=t.colors,a=t.uvs,o=t.indices,l=o?o.length:n.length/3,c=new $t().fromArray(Array.from(t.matrix)),h=new Ut().getNormalMatrix(c),u=new G,d=_=>{const S=o?o[_]:_,R=new Float64Array(11);return u.set(n[S*3],n[S*3+1],n[S*3+2]).applyMatrix4(c),R[0]=u.x,R[1]=u.y,R[2]=u.z,s&&(u.set(s[S*3],s[S*3+1],s[S*3+2]).applyMatrix3(h).normalize(),R[3]=u.x,R[4]=u.y,R[5]=u.z),r&&(R[6]=r[S*3],R[7]=r[S*3+1],R[8]=r[S*3+2]),a&&(R[9]=a[S*2],R[10]=a[S*2+1]),R},f=_=>(_[0]-i.xMin)/i.dx,g=_=>(_[2]-i.zMin)/i.dz,v=_=>f(_)+g(_),m=(_,S,R)=>{const w=[],C=[];for(let D=0;D<_.length;D++){const O=_[D],P=_[(D+1)%_.length],z=S(O)-R,U=S(P)-R;if(z<=1e-9&&w.push(O),z>=-1e-9&&C.push(O),z<-1e-9&&U>1e-9||z>1e-9&&U<-1e-9){const I=z/(z-U),X=new Float64Array(11);for(let N=0;N<11;N++)X[N]=O[N]+(P[N]-O[N])*I;w.push(X),C.push(X)}}return[w,C]},p=(_,S)=>{const R=[];for(let w of _){let C=1/0,D=-1/0;for(const O of w){const P=S(O);P<C&&(C=P),P>D&&(D=P)}for(let O=Math.floor(C+1e-9)+1;O<D-1e-9&&w.length>=3;O++){const[P,z]=m(w,S,O);P.length>=3&&R.push(P),w=z}w.length>=3&&R.push(w)}return R},x=[],y=[],M=[],b=[],E=_=>{x.push(_[0],_[1]+i.yAt(_[0],_[2]),_[2]),s&&y.push(_[3],_[4],_[5]),r&&M.push(_[6],_[7],_[8]),a&&b.push(_[9],_[10])};for(let _=0;_+2<l;_+=3){const S=d(_),R=d(_+1),w=d(_+2),C=Math.min(f(S),f(R),f(w)),D=Math.max(f(S),f(R),f(w)),O=Math.min(g(S),g(R),g(w)),P=Math.max(g(S),g(R),g(w)),z=Math.min(v(S),v(R),v(w)),U=Math.max(v(S),v(R),v(w));if(Math.floor(C)===Math.floor(D-1e-9)&&Math.floor(O)===Math.floor(P-1e-9)&&Math.floor(z)===Math.floor(U-1e-9)){E(S),E(R),E(w);continue}for(const I of p(p(p([[S,R,w]],f),g),v))for(let X=1;X+1<I.length;X++)E(I[0]),E(I[X]),E(I[X+1])}return{positions:new Float32Array(x),normals:s?new Float32Array(y):void 0,colors:r?new Float32Array(M):void 0,uvs:a?new Float32Array(b):void 0}}function B_(i,t,e){let n=0;for(let s=0;s<i.length;s++){const r=i[s],a=i[(s+1)%i.length],o=(a[0]-r[0])*(e-r[1])-(a[1]-r[1])*(t-r[0]);if(o!==0){if(n===0)n=Math.sign(o);else if(Math.sign(o)!==n)return!1}}return!0}const k_=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class G_{constructor(t,e,n,s){ct(this,"renderer");ct(this,"scene",new Qu);ct(this,"camera",new Mn(38,1,5,9e4));ct(this,"controls");ct(this,"atmosphere");ct(this,"water");ct(this,"hf");ct(this,"life");ct(this,"labels");ct(this,"places",[]);ct(this,"tide",{value:Ch});ct(this,"raf",0);ct(this,"last",0);ct(this,"time",0);ct(this,"dirty",!0);ct(this,"animating",!0);ct(this,"disposed",!1);ct(this,"abort",new AbortController);ct(this,"detailMaps",[]);ct(this,"resizeObserver");ct(this,"flight");ct(this,"lastCompass",NaN);ct(this,"width",1);ct(this,"height",1);ct(this,"quality","high");ct(this,"pixelRatio",1);ct(this,"slowFrames",0);ct(this,"solarMinutes",NaN);ct(this,"roadPaths",[]);ct(this,"external");ct(this,"meta");ct(this,"shadowAim",new G);ct(this,"lookDir",new G);ct(this,"onKey",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=this.currentView(),n=e.dist*.12,s=le.degToRad(e.azimuth),r=-Math.sin(s),a=-Math.cos(s),o=Math.cos(s),l=-Math.sin(s);let c=null;switch(t.key){case"ArrowUp":c={...e,x:e.x+r*n,z:e.z+a*n};break;case"ArrowDown":c={...e,x:e.x-r*n,z:e.z-a*n};break;case"ArrowLeft":c={...e,x:e.x-o*n,z:e.z-l*n};break;case"ArrowRight":c={...e,x:e.x+o*n,z:e.z+l*n};break;case"+":case"=":c={...e,dist:e.dist*.8};break;case"-":case"_":c={...e,dist:e.dist*1.25};break;case"q":case"Q":c={...e,azimuth:e.azimuth-15};break;case"e":case"E":c={...e,azimuth:e.azimuth+15};break;case"r":case"R":c={...e,polar:e.polar-6};break;case"f":case"F":c={...e,polar:e.polar+6};break;case"Home":c=rs;break;default:return}t.preventDefault(),this.fly(c,.3)});ct(this,"frame",t=>{var l,c;if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);const e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,document.hidden)return;if(this.flight){const h=this.flight;h.t=Math.min(1,h.t+e/h.duration);const u=k_(h.t),d=(f,g)=>f+(g-f)*u;this.applyView({x:d(h.from.x,h.to.x),z:d(h.from.z,h.to.z),dist:Math.exp(d(Math.log(h.from.dist),Math.log(h.to.dist))),polar:d(h.from.polar,h.to.polar),azimuth:d(h.from.azimuth,h.to.azimuth)}),h.t>=1&&(this.flight=void 0)}if(this.controls&&!this.external&&this.controls.update()&&(this.dirty=!0),this.atmosphere.update(e)&&(this.dirty=!0),this.animating&&(this.time+=e,this.water.uniforms.uTime.value=this.time,(l=this.life)==null||l.update(e,this.time),this.dirty=!0),!this.dirty)return;this.dirty=!1;const n=this.camera;let s,r=1/0;const a=!!this.controls&&!this.external;if(this.controls&&a){const h=this.hf.yAt(n.position.x,n.position.z)+12;n.position.y<h&&(n.position.y=h),s=n.position.distanceTo(this.controls.target),this.shadowAim.copy(this.controls.target)}else{const h=Math.max(1,n.position.y-Math.max(this.hf.yAt(n.position.x,n.position.z),this.waterLevel));n.getWorldDirection(this.lookDir);const u=Math.min(this.lookDir.y<-.05?h/-this.lookDir.y:1e9,60+h*3,3e3);this.shadowAim.copy(n.position).addScaledVector(this.lookDir,u),s=Math.max(u,h)*1.3,r=Math.max(350,h*10)}const o=a?le.clamp(s*.02,2,80):le.clamp(s*.012,.4,60);if(Math.abs(o-n.near)>n.near*.05&&(n.near=o,n.updateProjectionMatrix()),this.atmosphere.aimShadow(this.shadowAim,s),this.renderer.render(this.scene,n),(c=this.labels)==null||c.update(n,this.width,this.height,r),this.animating&&e<.25&&(this.slowFrames=e>.042?this.slowFrames+1:Math.max(0,this.slowFrames-2),this.slowFrames>50&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio*.75),this.renderer.setPixelRatio(this.pixelRatio),this.resize(),this.slowFrames=0)),a){const h=Math.round(this.currentView().azimuth);h!==this.lastCompass&&(this.lastCompass=h,this.cb.onCompass(h))}});this.container=t,this.labelLayer=e,this.cb=n,this.opts=s,this.external=!!s.external}async init(){try{this.renderer=new lg({antialias:!0,powerPreference:"high-performance"})}catch{this.cb.onError("This browser could not start WebGL, which the 3D model needs.");return}const t=this.renderer;this.quality=this.pickQuality();let e=F_[this.quality];const n=(navigator.deviceMemory??8)>4;this.quality==="medium"&&n&&!this.opts.quality&&(e={...e,pixelRatio:2,trees:.8}),this.pixelRatio=Math.min(window.devicePixelRatio||1,e.pixelRatio),t.setPixelRatio(this.pixelRatio),t.outputColorSpace=ye,t.toneMapping=ra,t.shadowMap.enabled=e.shadow>0,t.shadowMap.type=as;const s=t.domElement;this.opts.external?(s.setAttribute("role","img"),s.setAttribute("aria-label","3D model of Inverloch")):(s.tabIndex=0,s.setAttribute("role","application"),s.setAttribute("aria-label","3D model of Inverloch. Drag to pan, right-drag to rotate, scroll to zoom. Arrow keys pan, plus and minus zoom, Q and E rotate.")),s.style.display="block",s.style.outlineOffset="-3px",this.container.appendChild(s),s.addEventListener("webglcontextlost",w=>{w.preventDefault(),this.disposed||this.cb.onError("The browser reclaimed the graphics memory this model was using.")});let r;try{r=await Lg(this.opts.assets,(w,C)=>this.cb.onProgress(w*.6,C),this.abort.signal)}catch(w){this.disposed||this.cb.onError(w instanceof Error?w.message:"The model data could not be loaded.");return}if(this.disposed)return;const{town:a,heights:o,exposure:l,ground:c}=r;this.meta=a.meta;const h=[...this.opts.clear??[],...(this.opts.clearLatLon??[]).map(w=>{const[C,D]=this.fromLatLon(w.lat,w.lon);return{x:C,z:D,r:w.r}})],u=(this.opts.clearPolygons??[]).map(w=>({pts:w.latLon.map(([C,D])=>this.fromLatLon(C,D)),roads:!!w.roads})),d=(w,C,D)=>u.some(O=>(!D||O.roads)&&B_(O.pts,w,C)),f=(w,C)=>h.some(D=>(w-D.x)**2+(C-D.z)**2<D.r*D.r)||d(w,C,!1),g=(this.opts.detailLatLon??[]).map(w=>{const[C,D]=this.fromLatLon(w.lat,w.lon);return{x:C,z:D,r:w.r}}),v=(w,C)=>g.some(D=>(w-D.x)**2+(C-D.z)**2<D.r*D.r);c.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());const m=async(w,C)=>{this.cb.onProgress(w,C),await O_()};await m(.62,"Shaping the terrain");const p=this.hf=new Vg(o,l,a.meta.grid[0],a.meta.grid[1],a.meta.size[0],a.meta.size[1],e.step),x=Th();this.scene.add(A_(p,c,this.tide,x));const y=navigator.deviceMemory??8;Rg(this.opts.assets,this.quality==="low"||y<=4,this.abort.signal).then(w=>{if(this.disposed){for(const C of w)C.texture.dispose();return}w.slice(0,Xr).forEach((C,D)=>{C.texture.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),x.maps[D].value=C.texture,x.rects[D].value.set(C.x,C.z,1/C.size,1),this.detailMaps.push(C.texture)}),this.dirty=!0}),this.water=U_(p,this.tide),this.scene.add(this.water.skirt,this.water.mesh),await m(.7,"Laying out the streets");const M=b_(a,p,u.some(w=>w.roads)?(w,C)=>d(w,C,!0):void 0);this.scene.add(M.group),this.roadPaths=M.paths,await m(.78,"Raising the buildings");const b=Hg(a,p,M.index,Yg,f);this.scene.add(b.group),await m(.86,"Planting trees");const E=L_(a,p,e.trees,f);this.scene.add(E.group),await m(.92,"Adding landmarks");const _={town:a,hf:p,footprints:b.footprints,roads:M.index,paths:M.paths,isClear:f,isDetail:v,hasDetail:g.length>0},S=c_(_);if(this.scene.add(S.group),this.life=new g_(_,S),this.life.setTide(this.tide.value*In),this.scene.add(this.life.group),this.disposed)return;this.atmosphere=new Tg(t,this.water,e.shadow),this.scene.add(this.atmosphere.sky,this.atmosphere.sun,this.atmosphere.sun.target,this.atmosphere.hemi),this.places=qg(a.meta,p),this.labels=new Wg(this.labelLayer,this.places,w=>this.flyToPlace(w)),this.external||this.setupControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize();const R=window.matchMedia("(prefers-reduced-motion: reduce)").matches;R&&(this.animating=!1),this.external?this.setExternalCamera(300,900,2600,0,-.42):R?this.applyView(rs):(this.applyView({...rs,dist:9500,polar:24,azimuth:-20}),this.fly(rs,3.4)),this.cb.onProgress(1,"Ready"),this.cb.onReady({quality:this.quality,houses:a.counts.houses,mappedBuildings:a.counts.buildings,trees:E.count,roadPieces:a.counts.roads,sources:a.meta.sources,places:this.places}),this.last=performance.now(),this.raf=requestAnimationFrame(this.frame)}get isAnimating(){return this.animating}setAnimating(t){this.animating=t,this.dirty=!0}setExternalCamera(t,e,n,s,r){this.external&&(this.camera.position.set(t,e,n),this.camera.rotation.set(r,s,0,"YXZ"),this.dirty=!0)}setExternal(t){if(!(t===this.external||!this.hf)){if(this.external=t,t)this.flight=void 0,this.controls&&(this.controls.enabled=!1);else{this.controls||this.setupControls(),this.controls.enabled=!0;const e=this.camera;e.getWorldDirection(this.lookDir);const n=Math.max(1,e.position.y),s=this.lookDir.y<-.05?Math.min(n/-this.lookDir.y,6e3):900,r=this.controls.target.copy(e.position).addScaledVector(this.lookDir,s);r.x=le.clamp(r.x,this.hf.xMin,this.hf.xMax),r.z=le.clamp(r.z,this.hf.zMin,this.hf.zMax),r.y=0,this.controls.update(),this.fly(rs,1.6)}this.resize()}}getCamera(){const t=new An().setFromQuaternion(this.camera.quaternion,"YXZ"),e=this.camera.position;return{x:e.x,y:e.y,z:e.z,yaw:t.y,pitch:t.x}}fromLatLon(t,e){const n=this.meta;return n?[(e-n.origin[0])*n.metresPerDegree[0],-(t-n.origin[1])*n.metresPerDegree[1]]:[0,0]}addParts(t){const e=new Je;e.name="guest";const n=t.map(s=>{const r=s.onGround?{...s,...z_(this.hf,s),indices:void 0}:s,a=new we,o=(f,g)=>new be(f instanceof Float32Array?f:Float32Array.from(f),g);a.setAttribute("position",o(r.positions,3)),r.colors&&a.setAttribute("color",o(r.colors,3)),r.uvs&&a.setAttribute("uv",o(r.uvs,2)),r.indices&&a.setIndex(Array.from(r.indices)),r.normals?a.setAttribute("normal",o(r.normals,3)):a.computeVertexNormals();let l=null;r.map&&(l=new Ee(r.map),l.colorSpace=ye,l.wrapS=l.wrapT=Os,r.mapRepeat&&l.repeat.set(r.mapRepeat[0],r.mapRepeat[1]),l.anisotropy=4,l.needsUpdate=!0);const c=r.opacity??1,h={color:new Rt().setRGB(...r.color??[1,1,1]),map:l,vertexColors:!!r.colors,transparent:c<1,opacity:c,side:r.doubleSide?ze:ti},u=r.unlit?new Xn(h):new ui({...h,roughness:r.roughness??.9,metalness:r.metalness??0,emissive:new Rt().setRGB(...r.emissive??[0,0,0]),emissiveIntensity:r.emissiveIntensity??1,emissiveMap:r.glowMap?l:null,flatShading:!!r.flatShading}),d=new Qt(a,u);return d.matrixAutoUpdate=!1,r.onGround||d.matrix.fromArray(Array.from(r.matrix)),d.userData.fixed=!!r.onGround,d.castShadow=c>=1,d.receiveShadow=!0,e.add(d),d});return this.scene.add(e),this.dirty=!0,{setMatrix:(s,r)=>{const a=n[s];!a||a.userData.fixed||(a.matrix.fromArray(Array.from(r)),a.matrixWorldNeedsUpdate=!0,this.dirty=!0)},setEmissive:(s,r,a,o,l)=>{var h;const c=(h=n[s])==null?void 0:h.material;c instanceof ui&&(c.emissive.setRGB(r,a,o),c.emissiveIntensity=l,this.dirty=!0)},remove:()=>{var s;this.scene.remove(e);for(const r of n){r.geometry.dispose();const a=r.material;(s=a.map)==null||s.dispose(),a.dispose()}this.dirty=!0}}}addPad(t){const e=t.radius??t.halfWidth??5,n=t.radius??t.halfDepth??5,s=t.heading??0,r=Math.cos(s),a=Math.sin(s);let o=1/0,l=-1/0;for(const[f,g]of[[0,0],[-e,-n],[e,-n],[e,n],[-e,n],[0,-n],[0,n],[-e,0],[e,0]]){const v=this.hf.yAt(t.x+f*r+g*a,t.z-f*a+g*r);o=Math.min(o,v),l=Math.max(l,v)}const c=l+(t.lift??.25),h=c-o+1,u=t.radius?new yo(t.radius,t.radius,h,24):new Ei(e*2,h,n*2),d=new Qt(u,new ui({color:new Rt().setRGB(...t.color),roughness:1}));return d.position.set(t.x,c-h/2,t.z),d.rotation.y=s,d.receiveShadow=!0,d.name="guest-pad",this.scene.add(d),this.dirty=!0,c}setSolarMinutes(t){!this.atmosphere||t===this.solarMinutes||(this.solarMinutes=t,this.atmosphere.setSolar(t),this.dirty=!0)}roadSpot(t){const e=t.trim().toLowerCase();let n=null;for(const g of this.roadPaths)g.name.toLowerCase()===e&&(!n||g.length>n.length)&&(n=g);if(!n)return null;const s=n.pts.length/3,r=0,a=s-1,o=s>>1;let l=n.pts[a*3]-n.pts[r*3],c=n.pts[a*3+2]-n.pts[r*3+2];const h=Math.hypot(l,c)||1;l/=h,c/=h;const u=Math.min(70,h*.5),d=n.pts[o*3]-l*u,f=n.pts[o*3+2]-c*u;return{x:d,y:this.hf.yAt(d,f)+38,z:f,yaw:Math.atan2(-l,-c),pitch:-.42}}groundAt(t,e){return this.hf?this.hf.yAt(t,e):0}get waterLevel(){return this.tide.value*In}get bounds(){return this.hf?[this.hf.xMin,this.hf.xMax,this.hf.zMin,this.hf.zMax]:[-4e3,4e3,-3440,3440]}setTimeOfDay(t){var e;(e=this.atmosphere)==null||e.set(t,!this.animating),this.dirty=!0}setTide(t){var e;this.water&&(this.water.setTide(le.clamp(t,Ah,Rh)),(e=this.life)==null||e.setTide(this.tide.value*In),this.dirty=!0)}setLabelsVisible(t){var e;(e=this.labels)==null||e.setVisible(t),this.dirty=!0}setLabelObstacles(t){var e;(e=this.labels)==null||e.setObstacles(t),this.dirty=!0}flyToPlace(t){const e=this.places.find(n=>n.id===t);e&&this.fly({x:e.x,z:e.z,dist:e.view[0],polar:e.view[1],azimuth:e.view[2]},2.2)}resetView(){this.fly(rs,1.8)}setView(t,e,n,s,r,a=1.5){this.fly({x:t,z:e,dist:n,polar:s,azimuth:r},a)}faceNorth(){const t=this.currentView();this.fly({...t,azimuth:0},.8)}zoomBy(t){const e=this.currentView();this.fly({...e,dist:le.clamp(e.dist*t,this.controls.minDistance,this.controls.maxDistance)},.35)}dispose(){var t,e,n;if(this.disposed=!0,this.abort.abort(),cancelAnimationFrame(this.raf),(t=this.resizeObserver)==null||t.disconnect(),(e=this.labels)==null||e.dispose(),(n=this.controls)==null||n.dispose(),!!this.renderer){for(const s of this.detailMaps)s.dispose();this.renderer.domElement.removeEventListener("keydown",this.onKey),this.scene.traverse(s=>{var o,l;const r=s;(l=(o=r.geometry)==null?void 0:o.dispose)==null||l.call(o);const a=Array.isArray(r.material)?r.material:r.material?[r.material]:[];for(const c of a){for(const h of Object.values(c))h instanceof Ee&&h.dispose();c.dispose()}}),this.renderer.dispose(),this.renderer.domElement.remove()}}pickQuality(){if(this.opts.quality)return this.opts.quality;const t=new URLSearchParams(window.location.search).get("quality");if(t==="high"||t==="medium"||t==="low")return t;const e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),s=n?String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)):"";if(/swiftshader|llvmpipe|software/i.test(s))return"low";const r=navigator.deviceMemory??8;return window.matchMedia("(pointer: coarse)").matches||r<=4?"medium":"high"}setupControls(){const t=this.controls=new Eg(this.camera,this.renderer.domElement);t.enableDamping=!0,t.dampingFactor=.09,t.screenSpacePanning=!1,t.zoomToCursor=!0,t.minDistance=70,t.maxDistance=12e3,t.maxPolarAngle=le.degToRad(84),t.zoomSpeed=1.1,t.addEventListener("start",()=>{this.flight=void 0}),t.addEventListener("change",()=>{const e=t.target,n=this.hf;e.x=le.clamp(e.x,n.xMin,n.xMax),e.z=le.clamp(e.z,n.zMin,n.zMax),e.y=0,this.dirty=!0}),this.renderer.domElement.addEventListener("keydown",this.onKey)}clampView(t){var e,n;return{x:le.clamp(t.x,this.hf.xMin,this.hf.xMax),z:le.clamp(t.z,this.hf.zMin,this.hf.zMax),dist:le.clamp(t.dist,((e=this.controls)==null?void 0:e.minDistance)??70,((n=this.controls)==null?void 0:n.maxDistance)??12e3),polar:le.clamp(t.polar,2,84),azimuth:t.azimuth}}currentView(){const t=this.controls.target,e=this.camera.position.clone().sub(t),n=new br().setFromVector3(e);return{x:t.x,z:t.z,dist:n.radius,polar:le.radToDeg(n.phi),azimuth:le.radToDeg(n.theta)}}applyView(t){const e=new br(t.dist,le.degToRad(t.polar),le.degToRad(t.azimuth)),n=this.controls.target.set(t.x,0,t.z);this.camera.position.setFromSpherical(e).add(n),this.camera.lookAt(n),this.dirty=!0}fly(t,e){if(!this.controls||this.external)return;if(t=this.clampView(t),!this.animating){this.flight=void 0,this.applyView(t),this.controls.update();return}const n=this.currentView();let s=(t.azimuth-n.azimuth)%360;s>180&&(s-=360),s<-180&&(s+=360),this.flight={from:n,to:{...t,azimuth:n.azimuth+s},t:0,duration:e}}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.fov=this.external?60:t/e<.8?52:38,this.camera.updateProjectionMatrix(),this.dirty=!0}}const Zo="Map data © OpenStreetMap contributors · Elevation © Geoscience Australia (CC BY 4.0)",H_=`
.inv-embed, .inv-embed-layer { position: absolute; inset: 0; overflow: hidden; }
/* the labels sit over the model but never take a touch: drags and pinches must reach the canvas underneath */
.inv-embed-labels, .inv-embed .inv-label { pointer-events: none; }
.inv-embed-credit { position: absolute; left: 50%; bottom: var(--inv-credit-bottom, 6px); transform: translateX(-50%); margin: 0; max-width: calc(100% - 24px);
  padding: 2px 8px; border-radius: 4px; background: rgba(13, 24, 30, 0.7); color: rgba(255, 255, 255, 0.82); font: 10px/1.4 system-ui, sans-serif; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; pointer-events: none; }
`;function V_(i,t){if(!document.querySelector("style[data-inverloch-model]")){const d=document.createElement("style");d.setAttribute("data-inverloch-model",""),d.textContent=Un+H_,document.head.appendChild(d)}const e=document.createElement("div");e.className="inv-embed";const n=document.createElement("div");n.className="inv-embed-layer";const s=document.createElement("div");s.className="inv-embed-layer inv-embed-labels";const r=document.createElement("p");r.className="inv-embed-credit",r.textContent=Zo,e.append(n,s,r),i.appendChild(e);const a=typeof t.assets=="string"?{height:t.assets+"height.png",ground:t.assets+"ground.webp",town:t.assets+"town.json",detail:t.assets+"detail.json"}:t.assets;let o=[],l=!1,c;const h=new Promise((d,f)=>c={ok:d,fail:f}),u=new G_(n,s,{onProgress:(d,f)=>{var g;return(g=t.onProgress)==null?void 0:g.call(t,d,f)},onReady:d=>{o=d.places.map(f=>{const g=Math.min(Math.max(f.view[0]*.55,90),1500),v=f.view[1]*Math.PI/180,m=f.view[2]*Math.PI/180,p=f.x+g*Math.sin(v)*Math.sin(m),x=f.z+g*Math.sin(v)*Math.cos(m),y=Math.max(u.groundAt(p,x),u.waterLevel)+Math.max(g*Math.cos(v),20),M=f.x-p,b=f.y-10-y,E=f.z-x;return{id:f.id,name:f.name,kind:f.kind,x:p,y,z:x,yaw:Math.atan2(-M,-E),pitch:Math.atan2(b,Math.hypot(M,E)),tx:f.x,tz:f.z}}),t.labels===!1&&u.setLabelsVisible(!1),l=!0,c.ok()},onError:d=>{var f;return l?(f=t.onError)==null?void 0:f.call(t,d):c.fail(new Error(d))},onCompass:()=>{}},{assets:a,external:!0,quality:t.quality,clear:t.clear,clearLatLon:t.clearLatLon,clearPolygons:t.clearPolygons,detailLatLon:t.detailLatLon});return u.init(),{ready:h,setCamera:(d,f,g,v,m)=>u.setExternalCamera(d,f,g,v,m),setMinutes:d=>u.setSolarMinutes(d),setTide:d=>u.setTide(d),setAnimating:d=>u.setAnimating(d),setLabelsVisible:d=>u.setLabelsVisible(d),groundAt:(d,f)=>u.groundAt(d,f),waterLevel:()=>u.waterLevel,bounds:()=>u.bounds,fromLatLon:(d,f)=>u.fromLatLon(d,f),setMode:d=>u.setExternal(d!=="bird"),getCamera:()=>u.getCamera(),flyToPlace:d=>u.flyToPlace(d),lookAt:(d,f,g,v,m)=>u.setView(d,f,g,v,m),addParts:d=>u.addParts(d),addPad:d=>u.addPad(d),spots:()=>o,roadSpot:d=>{const f=u.roadSpot(d);return f?{id:"road:"+d,name:d,kind:"landmark",...f,tx:f.x-Math.sin(f.yaw)*70,tz:f.z-Math.cos(f.yaw)*70}:null},tide:{min:Ah,max:Rh,initial:Ch},credit:Zo,dispose:()=>{u.dispose(),e.remove()}}}return yn.CREDIT=Zo,yn.create=V_,Object.defineProperty(yn,Symbol.toStringTag,{value:"Module"}),yn}({});
