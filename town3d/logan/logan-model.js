var LoganModel=function(vn){"use strict";var W_=Object.defineProperty;var X_=(vn,cn,$e)=>cn in vn?W_(vn,cn,{enumerable:!0,configurable:!0,writable:!0,value:$e}):vn[cn]=$e;var ht=(vn,cn,$e)=>X_(vn,typeof cn!="symbol"?cn+"":cn,$e);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cn="187",$e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bh=0,Wa=1,kh=2,Ki=1,Gh=2,Zi=3,li=0,Ye=1,Pe=2,Mi=0,$i=1,Xa=2,qa=3,Ya=4,Hh=5,Si=100,Vh=101,Wh=102,Xh=103,qh=104,Yh=200,Kh=201,Zh=202,$h=203,Ka=204,Za=205,Jh=206,Qh=207,jh=208,tu=209,eu=210,nu=211,iu=212,su=213,ru=214,Nr=0,Ur=1,Fr=2,Ji=3,Or=4,zr=5,Br=6,kr=7,$a=0,ou=1,au=2,Ln=0,Ja=1,Qa=2,ja=3,tl=4,el=5,nl=6,Gr=7,il=300,yi=301,Qi=302,Hr=303,Vr=304,Wr=1e3,Dn=1001,Xr=1002,ke=1003,lu=1004,Ls=1005,Je=1006,qr=1007,In=1008,tn=1009,sl=1010,rl=1011,ji=1012,Yr=1013,Mn=1014,Sn=1015,yn=1016,Kr=1017,Zr=1018,Ei=1020,ol=35902,al=35899,ll=1021,cl=1022,En=1023,Xn=1026,qn=1027,hl=1028,$r=1029,ci=1030,Jr=1031,Qr=1033,Ds=33776,Is=33777,Ns=33778,Us=33779,jr=35840,to=35841,eo=35842,no=35843,io=36196,so=37492,ro=37496,oo=37488,ao=37489,Fs=37490,lo=37491,co=37808,ho=37809,uo=37810,fo=37811,po=37812,mo=37813,go=37814,_o=37815,xo=37816,vo=37817,Mo=37818,So=37819,yo=37820,Eo=37821,bo=36492,wo=36494,To=36495,Ao=36283,Ro=36284,Os=36285,Co=36286,cu=3200,ul=3201,Po=0,hu=1,Yn="",Ue="srgb",zs="srgb-linear",Bs="linear",ue="srgb",Lo=7680,uu=519,du=512,fu=513,pu=514,dl=515,mu=516,gu=517,fl=518,pl=519,_u=35044,ml="300 es",hn=2e3,ts=2001;function xu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vu(){const i=es("canvas");return i.style.display="block",i}const gl={};function _l(...i){const t="THREE."+i.shift();console.log(t,...i)}function xl(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=xl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function oe(...i){i=xl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ks(...i){const t=i.join(" ");t in gl||(gl[t]=!0,Vt(...i))}function Mu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Su={[Nr]:Nr,[Fr]:Br,[Or]:Or,[Ji]:zr,[Ur]:Ur,[Br]:Fr,[kr]:kr,[zr]:Ji};class Kn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vl=1234567;const ns=Math.PI/180,is=180/Math.PI;function bi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function Do(i,t){return(i%t+t)%t}function yu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Eu(i,t,e){return i!==t?(e-i)/(t-i):0}function ss(i,t,e){return(1-e)*i+e*t}function bu(i,t,e,n){return ss(i,t,1-Math.exp(-e*n))}function wu(i,t=1){return t-Math.abs(Do(i,t*2)-t)}function Tu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Au(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ru(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Cu(i,t){return i+Math.random()*(t-i)}function Pu(i){return i*(.5-Math.random())}function Lu(i){i!==void 0&&(vl=i);let t=vl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Du(i){return i*ns}function Iu(i){return i*is}function Nu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Uu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ml(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fu(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),d=o((t-n)/2),h=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*p,l*h,a*c);break;case"YXY":i.set(l*h,a*u,l*p,a*c);break;case"ZYZ":i.set(l*p,l*h,a*u,a*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Io(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Sl(i,t){if(t.constructor===Float32Array)return i;const e=Io(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function yl(i,t){if(t.constructor===Float32Array)return i;const e=Io(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const se={DEG2RAD:ns,RAD2DEG:is,generateUUID:bi,clamp:jt,euclideanModulo:Do,mapLinear:yu,inverseLerp:Eu,lerp:ss,damp:bu,pingpong:wu,smoothstep:Tu,smootherstep:Au,randInt:Ru,randFloat:Cu,randFloatSpread:Pu,seededRandom:Lu,degToRad:Du,radToDeg:Iu,isPowerOfTwo:Nu,ceilPowerOfTwo:Uu,floorPowerOfTwo:Ml,setQuaternionFromProperEuler:Fu,normalize:yl,denormalize:Sl},Oa=class Oa{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Oa.prototype.isVector2=!0;let Ot=Oa;class Zn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],d=r[o+0],h=r[o+1],p=r[o+2],_=r[o+3];if(f!==_||l!==d||c!==h||u!==p){let m=l*d+c*h+u*p+f*_;m<0&&(d=-d,h=-h,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){const v=Math.acos(m),y=Math.sin(v);g=Math.sin(g*v)/y,a=Math.sin(a*v)/y,l=l*g+d*a,c=c*g+h*a,u=u*g+p*a,f=f*g+_*a}else{l=l*g+d*a,c=c*g+h*a,u=u*g+p*a,f=f*g+_*a;const v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],d=r[o+1],h=r[o+2],p=r[o+3];return t[e]=a*p+u*f+l*h-c*d,t[e+1]=l*p+u*d+c*f-a*h,t[e+2]=c*p+u*h+a*d-l*f,t[e+3]=u*p-a*f-l*d-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),d=l(n/2),h=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f-d*h*p;break;case"YXZ":this._x=d*u*f+c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f+d*h*p;break;case"ZXY":this._x=d*u*f-c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f-d*h*p;break;case"ZYX":this._x=d*u*f-c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f+d*h*p;break;case"YZX":this._x=d*u*f+c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f-d*h*p;break;case"XZY":this._x=d*u*f-c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f+d*h*p;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=n+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(n>a&&n>f){const h=2*Math.sqrt(1+n-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-n-f);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const za=class za{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(El.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(El.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return No.copy(this).projectOnVector(t),this.sub(No)}reflect(t){return this.sub(No.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};za.prototype.isVector3=!0;let W=za;const No=new W,El=new Zn,Ba=class Ba{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],p=n[8],_=s[0],m=s[3],g=s[6],v=s[1],y=s[4],M=s[7],b=s[2],S=s[5],x=s[8];return r[0]=o*_+a*v+l*b,r[3]=o*m+a*y+l*S,r[6]=o*g+a*M+l*x,r[1]=c*_+u*v+f*b,r[4]=c*m+u*y+f*S,r[7]=c*g+u*M+f*x,r[2]=d*_+h*v+p*b,r[5]=d*m+h*y+p*S,r[8]=d*g+h*M+p*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,d=a*l-u*r,h=c*r-o*l,p=e*f+n*d+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=f*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=h*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uo.makeScale(t,e)),this}rotate(t){return ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uo.makeRotation(-t)),this}translate(t,e){return ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ba.prototype.isMatrix3=!0;let Xt=Ba;const Uo=new Xt,bl=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wl=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ou(){const i={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ue&&(s.r=Nn(s.r),s.g=Nn(s.g),s.b=Nn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?Bs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zs]:{primaries:t,whitePoint:n,transfer:Bs,toXYZ:bl,fromXYZ:wl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:bl,fromXYZ:wl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}const ie=Ou();function Nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ti;class zu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ti===void 0&&(Ti=es("canvas")),Ti.width=t.width,Ti.height=t.height;const s=Ti.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ti}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=es("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Nn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Nn(e[n]/255)*255):e[n]=Nn(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bu=0;class Fo{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Oo(s[o].image)):r.push(Oo(s[o]))}else r=Oo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Oo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}let ku=0;const zo=new W;class Fe extends Kn{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=Dn,s=Dn,r=Je,o=In,a=En,l=tn,c=Fe.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=bi(),this.name="",this.source=new Fo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(zo).x}get height(){return this.source.getSize(zo).y}get depth(){return this.source.getSize(zo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==il)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wr:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case Xr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wr:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case Xr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null,Fe.DEFAULT_MAPPING=il,Fe.DEFAULT_ANISOTROPY=1;const ka=class ka{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,M=(h+1)/2,b=(g+1)/2,S=(u+d)/4,x=(f+_)/4,E=(p+m)/4;return y>M&&y>b?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=S/n,r=x/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=E/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=x/r,s=E/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-p)*(m-p)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(f-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ka.prototype.isVector4=!0;let ge=ka;class Gu extends Kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Fe({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Fo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends Gu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Tl extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hu extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Lr=class Lr{constructor(t,e,n,s,r,o,a,l,c,u,f,d,h,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,f,d,h,p,_,m)}set(t,e,n,s,r,o,a,l,c,u,f,d,h,p,_,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=d,g[3]=h,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ai.setFromMatrixColumn(t,0).length(),r=1/Ai.setFromMatrixColumn(t,1).length(),o=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=o*u,h=o*f,p=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=h+p*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=p+h*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,h=l*f,p=c*u,_=c*f;e[0]=d+_*a,e[4]=p*a-h,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=h*a-p,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,h=l*f,p=c*u,_=c*f;e[0]=d-_*a,e[4]=-o*f,e[8]=p+h*a,e[1]=h+p*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,h=o*f,p=a*u,_=a*f;e[0]=l*u,e[4]=p*c-h,e[8]=d*c+_,e[1]=l*f,e[5]=_*c+d,e[9]=h*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,h=o*c,p=a*l,_=a*c;e[0]=l*u,e[4]=_-d*f,e[8]=p*f+h,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=h*f+p,e[10]=d-_*f}else if(t.order==="XZY"){const d=o*l,h=o*c,p=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+_,e[5]=o*u,e[9]=h*f-p,e[2]=p*f-h,e[6]=a*u,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vu,t,Wu)}lookAt(t,e,n){const s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),$n.crossVectors(n,en),$n.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),$n.crossVectors(n,en)),$n.normalize(),Gs.crossVectors(en,$n),s[0]=$n.x,s[4]=Gs.x,s[8]=en.x,s[1]=$n.y,s[5]=Gs.y,s[9]=en.y,s[2]=$n.z,s[6]=Gs.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],p=n[2],_=n[6],m=n[10],g=n[14],v=n[3],y=n[7],M=n[11],b=n[15],S=s[0],x=s[4],E=s[8],D=s[12],R=s[1],L=s[5],C=s[9],P=s[13],w=s[2],N=s[6],F=s[10],z=s[14],K=s[3],V=s[7],k=s[11],O=s[15];return r[0]=o*S+a*R+l*w+c*K,r[4]=o*x+a*L+l*N+c*V,r[8]=o*E+a*C+l*F+c*k,r[12]=o*D+a*P+l*z+c*O,r[1]=u*S+f*R+d*w+h*K,r[5]=u*x+f*L+d*N+h*V,r[9]=u*E+f*C+d*F+h*k,r[13]=u*D+f*P+d*z+h*O,r[2]=p*S+_*R+m*w+g*K,r[6]=p*x+_*L+m*N+g*V,r[10]=p*E+_*C+m*F+g*k,r[14]=p*D+_*P+m*z+g*O,r[3]=v*S+y*R+M*w+b*K,r[7]=v*x+y*L+M*N+b*V,r[11]=v*E+y*C+M*F+b*k,r[15]=v*D+y*P+M*z+b*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],h=t[14],p=t[3],_=t[7],m=t[11],g=t[15],v=l*h-c*d,y=a*h-c*f,M=a*d-l*f,b=o*h-c*u,S=o*d-l*u,x=o*f-a*u;return e*(_*v-m*y+g*M)-n*(p*v-m*b+g*S)+s*(p*y-_*b+g*x)-r*(p*M-_*S+m*x)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],h=t[11],p=t[12],_=t[13],m=t[14],g=t[15],v=e*a-n*o,y=e*l-s*o,M=e*c-r*o,b=n*l-s*a,S=n*c-r*a,x=s*c-r*l,E=u*_-f*p,D=u*m-d*p,R=u*g-h*p,L=f*m-d*_,C=f*g-h*_,P=d*g-h*m,w=v*P-y*C+M*L+b*R-S*D+x*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/w;return t[0]=(a*P-l*C+c*L)*N,t[1]=(s*C-n*P-r*L)*N,t[2]=(_*x-m*S+g*b)*N,t[3]=(d*S-f*x-h*b)*N,t[4]=(l*R-o*P-c*D)*N,t[5]=(e*P-s*R+r*D)*N,t[6]=(m*M-p*x-g*y)*N,t[7]=(u*x-d*M+h*y)*N,t[8]=(o*C-a*R+c*E)*N,t[9]=(n*R-e*C-r*E)*N,t[10]=(p*S-_*M+g*v)*N,t[11]=(f*M-u*S-h*v)*N,t[12]=(a*D-o*L-l*E)*N,t[13]=(e*L-n*D+s*E)*N,t[14]=(_*y-p*b-m*v)*N,t[15]=(u*b-f*y+d*v)*N,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,d=r*c,h=r*u,p=r*f,_=o*u,m=o*f,g=a*f,v=l*c,y=l*u,M=l*f,b=n.x,S=n.y,x=n.z;return s[0]=(1-(_+g))*b,s[1]=(h+M)*b,s[2]=(p-y)*b,s[3]=0,s[4]=(h-M)*S,s[5]=(1-(d+g))*S,s[6]=(m+v)*S,s[7]=0,s[8]=(p+y)*x,s[9]=(m-v)*x,s[10]=(1-(d+_))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ai.set(s[0],s[1],s[2]).length();const a=Ai.set(s[4],s[5],s[6]).length(),l=Ai.set(s[8],s[9],s[10]).length();r<0&&(o=-o),un.copy(this);const c=1/o,u=1/a,f=1/l;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,e.setFromRotationMatrix(un),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=hn,l=!1){const c=this.elements,u=2*r/(e-t),f=2*r/(n-s),d=(e+t)/(e-t),h=(n+s)/(n-s);let p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===hn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ts)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=hn,l=!1){const c=this.elements,u=2/(e-t),f=2/(n-s),d=-(e+t)/(e-t),h=-(n+s)/(n-s);let p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===hn)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===ts)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Lr.prototype.isMatrix4=!0;let ve=Lr;const Ai=new W,un=new ve,Vu=new W(0,0,0),Wu=new W(1,1,1),$n=new W,Gs=new W,en=new W,Al=new ve,Rl=new Zn;class Un{constructor(t=0,e=0,n=0,s=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Al,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class Bo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xu=0;const Cl=new W,Ri=new Zn,Fn=new ve,Hs=new W,rs=new W,qu=new W,Yu=new Zn,Pl=new W(1,0,0),Ll=new W(0,1,0),Dl=new W(0,0,1),Il={type:"added"},Ku={type:"removed"},Ci={type:"childadded",child:null},ko={type:"childremoved",child:null};class Ge extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new W,e=new Un,n=new Zn,s=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Xt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(Pl,t)}rotateY(t){return this.rotateOnAxis(Ll,t)}rotateZ(t){return this.rotateOnAxis(Dl,t)}translateOnAxis(t,e){return Cl.copy(t).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pl,t)}translateY(t){return this.translateOnAxis(Ll,t)}translateZ(t){return this.translateOnAxis(Dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hs.copy(t):Hs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(rs,Hs,this.up):Fn.lookAt(Hs,rs,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(Fn),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Il),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ku),ko.child=t,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Il),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,qu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,Yu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),h=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ge.DEFAULT_UP=new W(0,1,0),Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ae extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zu={type:"move"};class Go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,p=.005;c.inputState.pinching&&d>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function Ho(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?i+(t-i)*6*e:e<.5?t:e<.6666666666666666?i+(t-i)*6*(.6666666666666666-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=Do(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ho(o,r,t+.3333333333333333),this.g=Ho(o,r,t),this.b=Ho(o,r,t-.3333333333333333)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=Nl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return ie.workingToColorSpace(We.copy(this),t),Math.round(jt(We.r*255,0,255))*65536+Math.round(jt(We.g*255,0,255))*256+Math.round(jt(We.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(We.copy(this),e);const n=We.r,s=We.g,r=We.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Ue){ie.workingToColorSpace(We.copy(this),t);const e=We.r,n=We.g,s=We.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(Vs);const n=ss(Jn.h,Vs.h,e),s=ss(Jn.s,Vs.s,e),r=ss(Jn.l,Vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Gt;Gt.NAMES=Nl;class Vo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new Vo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $u extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const dn=new W,On=new W,Wo=new W,zn=new W,Pi=new W,Li=new W,Ul=new W,Xo=new W,qo=new W,Yo=new W,Ko=new ge,Zo=new ge,$o=new ge;class fn{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),dn.subVectors(t,e),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){dn.subVectors(s,e),On.subVectors(n,e),Wo.subVectors(t,e);const o=dn.dot(dn),a=dn.dot(On),l=dn.dot(Wo),c=On.dot(On),u=On.dot(Wo),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-h-p,p,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ko.setScalar(0),Zo.setScalar(0),$o.setScalar(0),Ko.fromBufferAttribute(t,e),Zo.fromBufferAttribute(t,n),$o.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ko,r.x),o.addScaledVector(Zo,r.y),o.addScaledVector($o,r.z),o}static isFrontFacing(t,e,n,s){return dn.subVectors(n,e),On.subVectors(t,e),dn.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),dn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return fn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Pi.subVectors(s,n),Li.subVectors(r,n),Xo.subVectors(t,n);const l=Pi.dot(Xo),c=Li.dot(Xo);if(l<=0&&c<=0)return e.copy(n);qo.subVectors(t,s);const u=Pi.dot(qo),f=Li.dot(qo);if(u>=0&&f<=u)return e.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),e.copy(n).addScaledVector(Pi,o);Yo.subVectors(t,r);const h=Pi.dot(Yo),p=Li.dot(Yo);if(p>=0&&h<=p)return e.copy(r);const _=h*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Li,a);const m=u*p-h*f;if(m<=0&&f-u>=0&&h-p>=0)return Ul.subVectors(r,s),a=(f-u)/(f-u+(h-p)),e.copy(s).addScaledVector(Ul,a);const g=1/(m+_+d);return o=_*g,a=d*g,e.copy(n).addScaledVector(Pi,o).addScaledVector(Li,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class os{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(t.matrixWorld),this.union(Ws)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(as),Xs.subVectors(this.max,as),Di.subVectors(t.a,as),Ii.subVectors(t.b,as),Ni.subVectors(t.c,as),Qn.subVectors(Ii,Di),jn.subVectors(Ni,Ii),hi.subVectors(Di,Ni);let e=[0,-Qn.z,Qn.y,0,-jn.z,jn.y,0,-hi.z,hi.y,Qn.z,0,-Qn.x,jn.z,0,-jn.x,hi.z,0,-hi.x,-Qn.y,Qn.x,0,-jn.y,jn.x,0,-hi.y,hi.x,0];return!Jo(e,Di,Ii,Ni,Xs)||(e=[1,0,0,0,1,0,0,0,1],!Jo(e,Di,Ii,Ni,Xs))?!1:(qs.crossVectors(Qn,jn),e=[qs.x,qs.y,qs.z],Jo(e,Di,Ii,Ni,Xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Bn=[new W,new W,new W,new W,new W,new W,new W,new W],pn=new W,Ws=new os,Di=new W,Ii=new W,Ni=new W,Qn=new W,jn=new W,hi=new W,as=new W,Xs=new W,qs=new W,ui=new W;function Jo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ui.fromArray(i,r);const a=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),l=t.dot(ui),c=e.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Re=new W,Ys=new Ot;let Ju=0;class qt extends Kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ju++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_u,this.updateRanges=[],this.gpuType=Sn,this.version=0,this._normalizationScale=t!==void 0?Io(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ys.fromBufferAttribute(this,e),Ys.applyMatrix3(t),this.setXY(e,Ys.x,Ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Sl(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):yl(t,this.array)}}class Fl extends qt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ol extends qt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class be extends qt{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Qu=new os,ls=new W,Qo=new W;class cs{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ls.subVectors(t,this.center);const e=ls.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ls.copy(t.center).add(Qo)),this.expandByPoint(ls.copy(t.center).sub(Qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ju=0;const rn=new ve,jo=new Ge,Ui=new W,nn=new os,hs=new os,Oe=new W;class we extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xu(t)?Ol:Fl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return jo.lookAt(t),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new be(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(nn.min,hs.min),nn.expandByPoint(Oe),Oe.addVectors(nn.max,hs.max),nn.expandByPoint(Oe)):(nn.expandByPoint(hs.min),nn.expandByPoint(hs.max))}nn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Oe.fromBufferAttribute(a,c),l&&(Ui.fromBufferAttribute(t,c),Oe.add(Ui)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)a[D]=new W,l[D]=new W;const u=new W,f=new W,d=new W,h=new Ot,p=new Ot,_=new Ot,m=new W,g=new W;function v(D,R,L){c[D]=c[R]=c[L]=1,u.fromBufferAttribute(n,D),f.fromBufferAttribute(n,R),d.fromBufferAttribute(n,L),h.fromBufferAttribute(r,D),p.fromBufferAttribute(r,R),_.fromBufferAttribute(r,L),f.sub(u),d.sub(u),p.sub(h),_.sub(h);const C=1/(p.x*_.y-_.x*p.y);isFinite(C)&&(m.copy(f).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(C),g.copy(d).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(C),a[D].add(m),a[R].add(m),a[L].add(m),l[D].add(g),l[R].add(g),l[L].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let D=0,R=y.length;D<R;++D){const L=y[D],C=L.start,P=L.count;for(let w=C,N=C+P;w<N;w+=3)v(t.getX(w+0),t.getX(w+1),t.getX(w+2))}const M=new W,b=new W,S=new W,x=new W;function E(D){S.fromBufferAttribute(s,D),x.copy(S);const R=a[D];M.copy(R),M.sub(S.multiplyScalar(S.dot(R))).normalize(),b.crossVectors(x,R);const C=b.dot(l[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,C)}for(let D=0,R=n.count;D<R;++D)c[D]&&E(D);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new qt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const s=new W,r=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(t)for(let d=0,h=t.count;d<h;d+=3){const p=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=e.count;d<h;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let g=0;g<u;g++)d[p++]=c[h++]}return new qt(d,u,f)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=t(d,n);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ta=new W,td=new W,ed=new Xt;class wn{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ta.subVectors(n,e).cross(td.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(ta),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ed.getNormalMatrix(t),s=this.coplanarPoint(ta).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let nd=0;class us extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=$i,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=Za,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lo,this.stencilZFail=Lo,this.stencilZPass=Lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new wn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ot().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const kn=new W,ea=new W,Ks=new W,Zs=new W;class na{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ea.copy(t).add(e).multiplyScalar(.5),Ks.copy(e).sub(t).normalize(),Zs.copy(this.origin).sub(ea);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ks),a=Zs.dot(this.direction),l=-Zs.dot(Ks),c=Zs.lengthSq(),u=Math.abs(1-o*o);let f,d,h,p;if(u>0)if(f=o*l-a,d=o*a-l,p=r*u,f>=0)if(d>=-p)if(d<=p){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-p?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=p?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ea).addScaledVector(Ks,d),h}intersectSphere(t,e){if(t.radius<0)return null;kn.subVectors(t.center,this.origin);const n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=t.x-o.x,d=t.y-o.y,h=t.z-o.z,p=e.x-o.x,_=e.y-o.y,m=e.z-o.z,g=n.x-o.x,v=n.y-o.y,y=n.z-o.z,M=Math.abs(l),b=Math.abs(c),S=Math.abs(u);let x,E,D,R,L,C,P,w,N,F,z,K;if(M>=b&&M>=S?(D=l,C=f,N=p,K=g,l>=0?(x=c,E=u,R=d,L=h,P=_,w=m,F=v,z=y):(x=u,E=c,R=h,L=d,P=m,w=_,F=y,z=v)):b>=S?(D=c,C=d,N=_,K=v,c>=0?(x=u,E=l,R=h,L=f,P=m,w=p,F=y,z=g):(x=l,E=u,R=f,L=h,P=p,w=m,F=g,z=y)):(D=u,C=h,N=m,K=y,u>=0?(x=l,E=c,R=f,L=d,P=p,w=_,F=g,z=v):(x=c,E=l,R=d,L=f,P=_,w=p,F=v,z=g)),D===0)return null;const V=x/D,k=E/D,O=1/D,$=R-V*C,et=L-k*C,X=P-V*N,J=w-k*N,j=F-V*K,at=z-k*K,it=j*J-at*X,lt=$*at-et*j,Rt=X*et-J*$;if(s){if(it<0||lt<0||Rt<0)return null}else if((it<0||lt<0||Rt<0)&&(it>0||lt>0||Rt>0))return null;const ft=it+lt+Rt;if(ft===0)return null;const At=O*(it*C+lt*N+Rt*K);return(ft>0?At<0:At>0)?null:this.at(At/ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ti extends us{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const zl=new ve,di=new na,$s=new cs,Bl=new W,Js=new W,Qs=new W,js=new W,ia=new W,tr=new W,kl=new W,er=new W;class $t extends Ge{constructor(t=new we,e=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(ia.fromBufferAttribute(f,t),o?tr.addScaledVector(ia,u):tr.addScaledVector(ia.sub(e),u))}e.add(tr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(r),di.copy(t.ray).recast(t.near),!($s.containsPoint(di.origin)===!1&&(di.intersectSphere($s,Bl)===null||di.origin.distanceToSquared(Bl)>(t.far-t.near)**2))&&(zl.copy(r).invert(),di.copy(t.ray).applyMatrix4(zl),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=o[m.materialIndex],v=Math.max(m.start,h.start),y=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let M=v,b=y;M<b;M+=3){const S=a.getX(M),x=a.getX(M+1),E=a.getX(M+2);s=nr(this,g,t,n,c,u,f,S,x,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=p,g=_;m<g;m+=3){const v=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);s=nr(this,o,t,n,c,u,f,v,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=o[m.materialIndex],v=Math.max(m.start,h.start),y=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let M=v,b=y;M<b;M+=3){const S=M,x=M+1,E=M+2;s=nr(this,g,t,n,c,u,f,S,x,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=p,g=_;m<g;m+=3){const v=m,y=m+1,M=m+2;s=nr(this,o,t,n,c,u,f,v,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function id(i,t,e,n,s,r,o,a){let l;if(t.side===Ye?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===li,a),l===null)return null;er.copy(a),er.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(er);return c<e.near||c>e.far?null:{distance:c,point:er.clone(),object:i}}function nr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Js),i.getVertexPosition(l,Qs),i.getVertexPosition(c,js);const u=id(i,t,e,n,Js,Qs,js,kl);if(u){const f=new W;fn.getBarycoord(kl,Js,Qs,js,f),s&&(u.uv=fn.getInterpolatedAttribute(s,a,l,c,f,new Ot)),r&&(u.uv1=fn.getInterpolatedAttribute(r,a,l,c,f,new Ot)),o&&(u.normal=fn.getInterpolatedAttribute(o,a,l,c,f,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new W,materialIndex:0};fn.getNormal(Js,Qs,js,d.normal),u.face=d,u.barycoord=f}return u}class sd extends Fe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=ke,u=ke,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ei extends qt{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const fi=new cs,rd=new Ot(.5,.5),ir=new W;class ds{constructor(t=new wn,e=new wn,n=new wn,s=new wn,r=new wn,o=new wn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],h=r[7],p=r[8],_=r[9],m=r[10],g=r[11],v=r[12],y=r[13],M=r[14],b=r[15];if(s[0].setComponents(c-o,h-u,g-p,b-v).normalize(),s[1].setComponents(c+o,h+u,g+p,b+v).normalize(),s[2].setComponents(c+a,h+f,g+_,b+y).normalize(),s[3].setComponents(c-a,h-f,g-_,b-y).normalize(),n)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,h-d,g-m,b-M).normalize();else if(s[4].setComponents(c-l,h-d,g-m,b-M).normalize(),e===hn)s[5].setComponents(c+l,h+d,g+m,b+M).normalize();else if(e===ts)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){fi.center.set(0,0,0);const e=rd.distanceTo(t.center);return fi.radius=.7071067811865476+e,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ir.x=s.normal.x>0?t.max.x:t.min.x,ir.y=s.normal.y>0?t.max.y:t.min.y,ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Gl=new ve;class sa{constructor(){this.coordinateSystem=hn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];Gl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ds),n[s].setFromProjectionMatrix(Gl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ds),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new sa().copy(this)}}class Hl extends Fe{constructor(t=[],e=yi,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sr extends Fe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fi extends Fe{constructor(t,e,n=Mn,s,r,o,a=ke,l=ke,c,u=Xn,f=1){if(u!==Xn&&u!==qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:f};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Vl extends Fi{constructor(t,e=Mn,n=yi,s,r,o=ke,a=ke,l,c=Xn){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Wl extends Fe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Oi extends we{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(f,2));function p(_,m,g,v,y,M,b,S,x,E,D){const R=M/x,L=b/E,C=M/2,P=b/2,w=S/2,N=x+1,F=E+1;let z=0,K=0;const V=new W;for(let k=0;k<F;k++){const O=k*L-P;for(let $=0;$<N;$++){const et=$*R-C;V[_]=et*v,V[m]=O*y,V[g]=w,c.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[g]=S>0?1:-1,u.push(V.x,V.y,V.z),f.push($/x),f.push(1-k/E),z+=1}}for(let k=0;k<E;k++)for(let O=0;O<x;O++){const $=d+O+N*k,et=d+O+N*(k+1),X=d+(O+1)+N*(k+1),J=d+(O+1)+N*k;l.push($,et,J),l.push(et,X,J),K+=6}a.addGroup(h,K,D),h+=K,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class rr extends we{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],h=[];let p=0;const _=[],m=n/2;let g=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(h,2));function v(){const M=new W,b=new W;let S=0;const x=(e-t)/n;for(let E=0;E<=r;E++){const D=[],R=E/r,L=R*(e-t)+t;for(let C=0;C<=s;C++){const P=C/s,w=P*l+a,N=Math.sin(w),F=Math.cos(w);b.x=L*N,b.y=-R*n+m,b.z=L*F,f.push(b.x,b.y,b.z),M.set(N,x,F).normalize(),d.push(M.x,M.y,M.z),h.push(P,1-R),D.push(p++)}_.push(D)}for(let E=0;E<s;E++)for(let D=0;D<r;D++){const R=_[D][E],L=_[D+1][E],C=_[D+1][E+1],P=_[D][E+1];(t>0||D!==0)&&(u.push(R,L,P),S+=3),(e>0||D!==r-1)&&(u.push(L,C,P),S+=3)}c.addGroup(g,S,0),g+=S}function y(M){const b=p,S=new Ot,x=new W;let E=0;const D=M===!0?t:e,R=M===!0?1:-1;for(let C=1;C<=s;C++)f.push(0,m*R,0),d.push(0,R,0),h.push(.5,.5),p++;const L=p;for(let C=0;C<=s;C++){const w=C/s*l+a,N=Math.cos(w),F=Math.sin(w);x.x=D*F,x.y=m*R,x.z=D*N,f.push(x.x,x.y,x.z),d.push(0,R,0),S.x=N*.5+.5,S.y=F*.5*R+.5,h.push(S.x,S.y),p++}for(let C=0;C<s;C++){const P=b+C,w=L+C;M===!0?u.push(w,w+1,P):u.push(w+1,w,P),E+=3}c.addGroup(g,E,M===!0?1:2),g+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class or extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new be(r,3)),this.setAttribute("normal",new be(r.slice(),3)),this.setAttribute("uv",new be(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new W,M=new W,b=new W;for(let S=0;S<e.length;S+=3)h(e[S+0],y),h(e[S+1],M),h(e[S+2],b),l(y,M,b,v)}function l(v,y,M,b){const S=b+1,x=[];for(let E=0;E<=S;E++){x[E]=[];const D=v.clone().lerp(M,E/S),R=y.clone().lerp(M,E/S),L=S-E;for(let C=0;C<=L;C++)C===0&&E===S?x[E][C]=D:x[E][C]=D.clone().lerp(R,C/L)}for(let E=0;E<S;E++)for(let D=0;D<2*(S-E)-1;D++){const R=Math.floor(D/2);D%2===0?(d(x[E][R+1]),d(x[E+1][R]),d(x[E][R])):(d(x[E][R+1]),d(x[E+1][R+1]),d(x[E+1][R]))}}function c(v){const y=new W;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(v),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function u(){const v=new W;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const M=m(v)/2/Math.PI+.5,b=g(v)/Math.PI+.5;o.push(M,1-b)}p(),f()}function f(){for(let v=0;v<o.length;v+=6){const y=o[v+0],M=o[v+2],b=o[v+4],S=Math.max(y,M,b),x=Math.min(y,M,b);S>.9&&x<.1&&(y<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function h(v,y){const M=v*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function p(){const v=new W,y=new W,M=new W,b=new W,S=new Ot,x=new Ot,E=new Ot;for(let D=0,R=0;D<r.length;D+=9,R+=6){v.set(r[D+0],r[D+1],r[D+2]),y.set(r[D+3],r[D+4],r[D+5]),M.set(r[D+6],r[D+7],r[D+8]),S.set(o[R+0],o[R+1]),x.set(o[R+2],o[R+3]),E.set(o[R+4],o[R+5]),b.copy(v).add(y).add(M).divideScalar(3);const L=m(b);_(S,R+0,v,L),_(x,R+2,y,L),_(E,R+4,M,L)}}function _(v,y,M,b){b<0&&v.x===1&&(o[y]=v.x-1),M.x===0&&M.z===0&&(o[y]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new or(t.vertices,t.indices,t.radius,t.detail)}}function od(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Xl(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=ud(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let u=a,f=l;for(let d=e;d<s;d+=e){const h=i[d],p=i[d+1];h<a&&(a=h),p<l&&(l=p),h>u&&(u=h),p>f&&(f=p)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return fs(r,o,e,a,l,c,0),o}function Xl(i,t,e,n,s){let r;if(s===yd(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Zl(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Zl(o/n|0,i[o],i[o+1],r);return r&&zi(r,r.next)&&(gs(r),r=r.next),r}function pi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zi(e,e.next)||Se(e.prev,e,e.next)===0)){if(gs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function fs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&gd(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?ld(i,n,s,r):ad(i)){t.push(l.i,i.i,c.i),gs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=cd(pi(i),t),fs(i,t,e,n,s,r,2)):o===2&&hd(i,t,e,n,s,r):fs(pi(i),t,e,n,s,r,1);break}}}function ad(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),f=Math.min(a,l,c),d=Math.max(s,r,o),h=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=d&&p.y>=f&&p.y<=h&&ps(s,a,r,l,o,c,p.x,p.y)&&Se(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ld(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Se(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,d=o.y,h=Math.min(a,l,c),p=Math.min(u,f,d),_=Math.max(a,l,c),m=Math.max(u,f,d),g=ra(h,p,t,e,n),v=ra(_,m,t,e,n);let y=i.prevZ,M=i.nextZ;for(;y&&y.z>=g&&M&&M.z<=v;){if(y.x>=h&&y.x<=_&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&ps(a,u,l,f,c,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=h&&M.x<=_&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&ps(a,u,l,f,c,d,M.x,M.y)&&Se(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=g;){if(y.x>=h&&y.x<=_&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&ps(a,u,l,f,c,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=v;){if(M.x>=h&&M.x<=_&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&ps(a,u,l,f,c,d,M.x,M.y)&&Se(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function cd(i,t){let e=i;do{const n=e.prev,s=e.next.next;!zi(n,s)&&Yl(n,e,e.next,s)&&ms(n,s)&&ms(s,n)&&(t.push(n.i,e.i,s.i),gs(e),gs(e.next),e=i=s),e=e.next}while(e!==i);return pi(e)}function hd(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vd(o,a)){let l=Kl(o,a);o=pi(o,o.next),l=pi(l,l.next),fs(o,t,e,n,s,r,0),fs(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ud(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Xl(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(xd(c))}s.sort(dd);for(let r=0;r<s.length;r++)e=fd(s[r],e);return e}function dd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function fd(i,t){const e=pd(i,t);if(!e)return t;const n=Kl(e,i);return pi(n,n.next),pi(e,e.next)}function pd(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(zi(i,e))return e;do{if(zi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&ql(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);ms(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&md(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function md(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function gd(i,t,e,n){let s=i;do s.z===0&&(s.z=ra(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_d(s)}function _d(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function ra(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function xd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ql(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ps(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&ql(i,t,e,n,s,r,o,a)}function vd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Md(i,t)&&(ms(i,t)&&ms(t,i)&&Sd(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||zi(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zi(i,t){return i.x===t.x&&i.y===t.y}function Yl(i,t,e,n){const s=lr(Se(i,t,e)),r=lr(Se(i,t,n)),o=lr(Se(e,n,i)),a=lr(Se(e,n,t));return!!(s!==r&&o!==a||s===0&&ar(i,e,t)||r===0&&ar(i,n,t)||o===0&&ar(e,i,n)||a===0&&ar(e,t,n))}function ar(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function lr(i){return i>0?1:i<0?-1:0}function Md(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Yl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ms(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function Sd(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Kl(i,t){const e=oa(i.i,i.x,i.y),n=oa(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Zl(i,t,e,n){const s=oa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function gs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function oa(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yd(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Ed{static triangulate(t,e,n=2){return od(t,e,n)}}class _s{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return _s.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];$l(t),Jl(n,t);let o=t.length;e.forEach($l);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Jl(n,e[l]);const a=Ed.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function $l(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Jl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class aa extends or{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new aa(t.radius,t.detail)}}class la extends or{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new la(t.radius,t.detail)}}class mi extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,d=e/l,h=[],p=[],_=[],m=[];for(let g=0;g<u;g++){const v=g*d-o;for(let y=0;y<c;y++){const M=y*f-r;p.push(M,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const y=v+c*g,M=v+c*(g+1),b=v+1+c*(g+1),S=v+1+c*g;h.push(y,M,S),h.push(M,b,S)}this.setIndex(h),this.setAttribute("position",new be(p,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.width,t.height,t.widthSegments,t.heightSegments)}}class cr extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new W,d=new W,h=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const v=[],y=g/n,M=o+y*a,b=t*Math.cos(M),S=Math.sqrt(t*t-b*b);let x=0;g===0&&o===0?x=.5/e:g===n&&l===Math.PI&&(x=-.5/e);for(let E=0;E<=e;E++){const D=E/e,R=s+D*r;f.x=-S*Math.cos(R),f.y=b,f.z=S*Math.sin(R),p.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(D+x,1-y),v.push(c++)}u.push(v)}for(let g=0;g<n;g++)for(let v=0;v<e;v++){const y=u[g][v+1],M=u[g][v],b=u[g+1][v],S=u[g+1][v+1];(g!==0||o>0)&&h.push(y,M,S),(g!==n-1||l<Math.PI)&&h.push(M,b,S)}this.setIndex(h),this.setAttribute("position",new be(p,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Bi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Ql(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ql(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ke(i){const t={};for(let e=0;e<i.length;e++){const n=Bi(i[e]);for(const s in n)t[s]=n[s]}return t}function Ql(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function bd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const wd={clone:Bi,merge:Ke};var Td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends us{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Td,this.fragmentShader=Ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=bd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Gt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"v3":this.uniforms[n].value=new W().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Rd extends ni{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mn extends us{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ca extends us{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cd extends us{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ha={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(tc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!tc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function tc(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Pd{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],p=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ld=new Pd;class ua{constructor(t){this.manager=t!==void 0?t:Ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}ua.DEFAULT_MATERIAL_NAME="__DEFAULT";const ki=new WeakMap;class Dd extends ua{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ha.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let f=ki.get(o);f===void 0&&(f=[],ki.set(o,f)),f.push({onLoad:e,onError:s})}return o}const a=es("img");function l(){u(),e&&e(this);const f=ki.get(this)||[];for(let d=0;d<f.length;d++){const h=f[d];h.onLoad&&h.onLoad(this)}ki.delete(this),r.manager.itemEnd(t)}function c(f){u(),s&&s(f),ha.remove(`image:${t}`);const d=ki.get(this)||[];for(let h=0;h<d.length;h++){const p=d[h];p.onError&&p.onError(f)}ki.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ha.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class Id extends ua{constructor(t){super(t)}load(t,e,n,s){const r=new Fe,o=new Dd(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class ec extends Ge{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Nd extends ec{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const da=new ve,nc=new W,ic=new W;class Ud{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;nc.setFromMatrixPosition(t.matrixWorld),e.position.copy(nc),ic.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ic),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(da,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ts||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const hr=new W,ur=new Zn,Tn=new W;class sc extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(hr,ur,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hr,ur,Tn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(hr,ur,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hr,ur,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ii=new W,rc=new Ot,oc=new Ot;class gn extends sc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return is*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,rc,oc),e.subVectors(oc,rc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ns*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ac extends sc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Fd extends Ud{constructor(){super(new ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Od extends ec{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new Fd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class fa extends we{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}const Gi=-90,Hi=1;class pa extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(Gi,Hi,t,e);s.layers=this.layers,this.add(s);const r=new gn(Gi,Hi,t,e);r.layers=this.layers,this.add(r);const o=new gn(Gi,Hi,t,e);o.layers=this.layers,this.add(o);const a=new gn(Gi,Hi,t,e);a.layers=this.layers,this.add(a);const l=new gn(Gi,Hi,t,e);l.layers=this.layers,this.add(l);const c=new gn(Gi,Hi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,d,h),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class zd extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const lc=new ve;class cc{constructor(t,e,n=0,s=1/0){this.ray=new na(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):oe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return lc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lc),this}intersectObject(t,e=!0,n=[]){return ma(t,this,n,e),n.sort(hc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ma(t[s],this,n,e);return n.sort(hc),n}}function hc(i,t){return i.distance-t.distance}function ma(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)ma(r[o],t,e,!0)}}class dr{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ga=class Ga{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Ga.prototype.isMatrix2=!0;let uc=Ga;class Bd extends Kn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function dc(i,t,e,n){const s=kd(n);switch(e){case ll:return i*t;case hl:return i*t/s.components*s.byteLength;case $r:return i*t/s.components*s.byteLength;case ci:return i*t*2/s.components*s.byteLength;case Jr:return i*t*2/s.components*s.byteLength;case cl:return i*t*3/s.components*s.byteLength;case En:return i*t*4/s.components*s.byteLength;case Qr:return i*t*4/s.components*s.byteLength;case Ds:case Is:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ns:case Us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case to:case no:return Math.max(i,16)*Math.max(t,8)/4;case jr:case eo:return Math.max(i,8)*Math.max(t,8)/2;case io:case so:case oo:case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ro:case Fs:case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ho:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case uo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case go:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _o:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case bo:case wo:case To:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ao:case Ro:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Os:case Co:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kd(i){switch(i){case tn:case sl:return{byteLength:1,components:1};case ji:case rl:case yn:return{byteLength:2,components:1};case Kr:case Zr:return{byteLength:2,components:4};case Mn:case Yr:case Sn:return{byteLength:4,components:1};case ol:case al:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cn}})),typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cn);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fc(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gd(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((h,p)=>h.start-p.start);let d=0;for(let h=1;h<f.length;h++){const p=f[d],_=f[h];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,p=f.length;h<p;h++){const _=f[h];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vd=`#ifdef USE_ALPHAHASH
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
#endif`,Wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kd=`#ifdef USE_AOMAP
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
#endif`,Zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$d=`#ifdef USE_BATCHING
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
#endif`,Jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ef=`#ifdef USE_IRIDESCENCE
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
#endif`,nf=`#ifdef USE_BUMPMAP
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
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,df=`#define PI 3.141592653589793
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
} // validated`,ff=`vec3 transformedNormal = objectNormal;
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
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",vf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cf=`#ifdef USE_GRADIENTMAP
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
}`,Pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,If=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bf=`PhysicalMaterial material;
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
#endif`,kf=`uniform sampler2D dfgLUT;
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
}`,Gf=`
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
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Xf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$f=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qf=`#if defined( USE_POINTS_UV )
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
#endif`,jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ep=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,np=`#if defined( USE_MORPHCOLORS )
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
#endif`,ip=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`#ifdef USE_MORPHTARGETS
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
#endif`,rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,up=`#ifdef USE_NORMALMAP
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
#endif`,dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ap=`float getShadowMask() {
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
}`,Rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,Pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ip=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Up=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fp=`#ifdef USE_TRANSMISSION
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
#endif`,Op=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jt={alphahash_fragment:Hd,alphahash_pars_fragment:Vd,alphamap_fragment:Wd,alphamap_pars_fragment:Xd,alphatest_fragment:qd,alphatest_pars_fragment:Yd,aomap_fragment:Kd,aomap_pars_fragment:Zd,batching_pars_vertex:$d,batching_vertex:Jd,begin_vertex:Qd,beginnormal_vertex:jd,bsdfs:tf,iridescence_fragment:ef,bumpmap_pars_fragment:nf,clipping_planes_fragment:sf,clipping_planes_pars_fragment:rf,clipping_planes_pars_vertex:of,clipping_planes_vertex:af,color_fragment:lf,color_pars_fragment:cf,color_pars_vertex:hf,color_vertex:uf,common:df,defaultnormal_vertex:ff,displacementmap_pars_vertex:pf,displacementmap_vertex:mf,emissivemap_fragment:gf,emissivemap_pars_fragment:_f,colorspace_fragment:xf,colorspace_pars_fragment:vf,envmap_fragment:Mf,envmap_common_pars_fragment:Sf,envmap_pars_fragment:yf,envmap_pars_vertex:Ef,envmap_physical_pars_fragment:Nf,envmap_vertex:bf,fog_vertex:wf,fog_pars_vertex:Tf,fog_fragment:Af,fog_pars_fragment:Rf,gradientmap_pars_fragment:Cf,lightmap_pars_fragment:Pf,lights_lambert_fragment:Lf,lights_lambert_pars_fragment:Df,lights_pars_begin:If,lights_toon_fragment:Uf,lights_toon_pars_fragment:Ff,lights_phong_fragment:Of,lights_phong_pars_fragment:zf,lights_physical_fragment:Bf,lights_physical_pars_fragment:kf,lights_fragment_begin:Gf,lights_fragment_maps:Hf,lights_fragment_end:Vf,lightprobes_pars_fragment:Wf,logdepthbuf_fragment:Xf,logdepthbuf_pars_fragment:qf,logdepthbuf_pars_vertex:Yf,logdepthbuf_vertex:Kf,map_fragment:Zf,map_pars_fragment:$f,map_particle_fragment:Jf,map_particle_pars_fragment:Qf,metalnessmap_fragment:jf,metalnessmap_pars_fragment:tp,morphinstance_vertex:ep,morphcolor_vertex:np,morphnormal_vertex:ip,morphtarget_pars_vertex:sp,morphtarget_vertex:rp,normal_fragment_begin:op,normal_fragment_maps:ap,normal_pars_fragment:lp,normal_pars_vertex:cp,normal_vertex:hp,normalmap_pars_fragment:up,clearcoat_normal_fragment_begin:dp,clearcoat_normal_fragment_maps:fp,clearcoat_pars_fragment:pp,iridescence_pars_fragment:mp,opaque_fragment:gp,packing:_p,premultiplied_alpha_fragment:xp,project_vertex:vp,dithering_fragment:Mp,dithering_pars_fragment:Sp,roughnessmap_fragment:yp,roughnessmap_pars_fragment:Ep,shadowmap_pars_fragment:bp,shadowmap_pars_vertex:wp,shadowmap_vertex:Tp,shadowmask_pars_fragment:Ap,skinbase_vertex:Rp,skinning_pars_vertex:Cp,skinning_vertex:Pp,skinnormal_vertex:Lp,specularmap_fragment:Dp,specularmap_pars_fragment:Ip,tonemapping_fragment:Np,tonemapping_pars_fragment:Up,transmission_fragment:Fp,transmission_pars_fragment:Op,uv_pars_fragment:zp,uv_pars_vertex:Bp,uv_vertex:kp,worldpos_vertex:Gp,background_vert:`varying vec2 vUv;
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
}`},bt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},An={basic:{uniforms:Ke([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ke([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ke([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ke([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ke([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ke([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ke([bt.points,bt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ke([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ke([bt.common,bt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ke([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ke([bt.sprite,bt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:Ke([bt.common,bt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:Ke([bt.lights,bt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};An.physical={uniforms:Ke([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const fr={r:0,b:0,g:0},Hp=new ve,pc=new Xt;pc.set(-1,0,0,0,1,0,0,0,1);function Vp(i,t,e,n,s,r){const o=new Gt(0);let a=s===!0?0:1,l,c,u=null,f=0,d=null;function h(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const M=v.backgroundBlurriness>0;y=t.get(y,M)}return y}function p(v){let y=!1;const M=h(v);M===null?m(o,a):M&&M.isColor&&(m(M,1),y=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,y){const M=h(y);M&&M.isCubeTexture?(c===void 0&&(c=new $t(new Oi(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Bi(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hp.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(pc),c.material.toneMapped=ie.getTransfer(M.colorSpace)!==ue,(u!==M||f!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new $t(new mi(2,2),new ni({name:"BackgroundMaterial",uniforms:Bi(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ie.getTransfer(M.colorSpace)!==ue,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,y){v.getRGB(fr,jl(i)),e.buffers.color.setClear(fr.r,fr.g,fr.b,y,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:_,dispose:g}}function Wp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(L,C,P,w,N){let F=!1;const z=f(L,w,P,C);r!==z&&(r=z,c(r.object)),F=h(L,w,P,N),F&&p(L,w,P,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,M(L,C,P,w),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function f(L,C,P,w){const N=w.wireframe===!0;let F=n[C.id];F===void 0&&(F={},n[C.id]=F);const z=L.isInstancedMesh===!0?L.id:0;let K=F[z];K===void 0&&(K={},F[z]=K);let V=K[P.id];V===void 0&&(V={},K[P.id]=V);let k=V[N];return k===void 0&&(k=d(l()),V[N]=k),k}function d(L){const C=[],P=[],w=[];for(let N=0;N<e;N++)C[N]=0,P[N]=0,w[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:w,object:L,attributes:{},index:null}}function h(L,C,P,w){const N=r.attributes,F=C.attributes;let z=0;const K=P.getAttributes();for(const V in K)if(K[V].location>=0){const O=N[V];let $=F[V];if($===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),O===void 0||O.attribute!==$||$&&O.data!==$.data)return!0;z++}return r.attributesNum!==z||r.index!==w}function p(L,C,P,w){const N={},F=C.attributes;let z=0;const K=P.getAttributes();for(const V in K)if(K[V].location>=0){let O=F[V];O===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(O=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(O=L.instanceColor));const $={};$.attribute=O,O&&O.data&&($.data=O.data),N[V]=$,z++}r.attributes=N,r.attributesNum=z,r.index=w}function _(){const L=r.newAttributes;for(let C=0,P=L.length;C<P;C++)L[C]=0}function m(L){g(L,0)}function g(L,C){const P=r.newAttributes,w=r.enabledAttributes,N=r.attributeDivisors;P[L]=1,w[L]===0&&(i.enableVertexAttribArray(L),w[L]=1),N[L]!==C&&(i.vertexAttribDivisor(L,C),N[L]=C)}function v(){const L=r.newAttributes,C=r.enabledAttributes;for(let P=0,w=C.length;P<w;P++)C[P]!==L[P]&&(i.disableVertexAttribArray(P),C[P]=0)}function y(L,C,P,w,N,F,z){z===!0?i.vertexAttribIPointer(L,C,P,N,F):i.vertexAttribPointer(L,C,P,w,N,F)}function M(L,C,P,w){_();const N=w.attributes,F=P.getAttributes(),z=C.defaultAttributeValues;for(const K in F){const V=F[K];if(V.location>=0){let k=N[K];if(k===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(k=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(k=L.instanceColor)),k!==void 0){const O=k.normalized,$=k.itemSize,et=t.get(k);if(et===void 0)continue;const X=et.buffer,J=et.type,j=et.bytesPerElement,at=J===i.INT||J===i.UNSIGNED_INT||k.gpuType===Yr;if(k.isInterleavedBufferAttribute){const it=k.data,lt=it.isInterleavedBuffer===!0?it.stride:it.itemSize,Rt=k.offset;if(it.isInstancedInterleavedBuffer||it.isInstancedBufferAttribute){for(let ft=0;ft<V.locationSize;ft++)g(V.location+ft,it.meshPerAttribute);L.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ft=0;ft<V.locationSize;ft++)m(V.location+ft);i.bindBuffer(i.ARRAY_BUFFER,X);for(let ft=0;ft<V.locationSize;ft++)y(V.location+ft,$/V.locationSize,J,O,lt*j,(Rt+$/V.locationSize*ft)*j,at)}else{if(k.isInstancedBufferAttribute){for(let it=0;it<V.locationSize;it++)g(V.location+it,k.meshPerAttribute);L.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let it=0;it<V.locationSize;it++)m(V.location+it);i.bindBuffer(i.ARRAY_BUFFER,X);for(let it=0;it<V.locationSize;it++)y(V.location+it,$/V.locationSize,J,O,$*j,$/V.locationSize*it*j,at)}}else if(z!==void 0){const O=z[K];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(V.location,O);break;case 3:i.vertexAttrib3fv(V.location,O);break;case 4:i.vertexAttrib4fv(V.location,O);break;default:i.vertexAttrib1fv(V.location,O)}}}}v()}function b(){D();for(const L in n){const C=n[L];for(const P in C){const w=C[P];for(const N in w){const F=w[N];for(const z in F)u(F[z].object),delete F[z];delete w[N]}}delete n[L]}}function S(L){if(n[L.id]===void 0)return;const C=n[L.id];for(const P in C){const w=C[P];for(const N in w){const F=w[N];for(const z in F)u(F[z].object),delete F[z];delete w[N]}}delete n[L.id]}function x(L){for(const C in n){const P=n[C];for(const w in P){const N=P[w];if(N[L.id]===void 0)continue;const F=N[L.id];for(const z in F)u(F[z].object),delete F[z];delete N[L.id]}}}function E(L){for(const C in n){const P=n[C],w=L.isInstancedMesh===!0?L.id:0,N=P[w];if(N!==void 0){for(const F in N){const z=N[F];for(const K in z)u(z[K].object),delete z[K];delete N[F]}delete P[w],Object.keys(P).length===0&&delete n[C]}}}function D(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:E,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Xp(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function qp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==En&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){const E=x===yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==tn&&x!==Sn&&!E&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Vt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,maxSamples:b,samples:S}}function Yp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new wn,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||s;return s=d,n=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,h){const p=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,g=i.get(f);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,y=v*4;let M=g.clippingState||null;l.value=M,M=u(p,d,y,h);for(let b=0;b!==y;++b)M[b]=e[b];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,h,p){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=h+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,M=h;y!==_;++y,M+=4)o.copy(f[y]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}class ga extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hl(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Oi(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Mi});r.uniforms.tEquirect.value=e;const o=new $t(s,r),a=e.minFilter;return e.minFilter===In&&(e.minFilter=Je),new pa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const mc=256,Kp=3,Zp=20,gc=256,_c=16,$p=3,Jp=new W,Qp=new Gt;class pr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new pa(1,10,null),this._boxMesh=new $t(new Oi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Jp}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,d=l.autoClearColor,h=l.autoClearDepth,p=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(Qp));const m=new pa(n,s,u);return m.position.copy(a),m.update(l,t),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=h,l.autoClearStencil=p,t.background=_,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(mc,Ml(t))}_fromTexture(t,e){t.mapping===yi||t.mapping===Qi?this._setSize(t.image.length===0?mc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=xc(t,!1,!1),n=Math.log2(t)-Kp;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=xc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===yi||t.mapping===Qi?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=vc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=jp(),this._integrationMaterial=t0());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/_c);for(let o=0;o<=n;o++){const a=pr.lodToRoughness(o,n);if(o>n-$p)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(gc*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=e0());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function xc(i,t,e){return new ga(i,{minFilter:In,generateMipmaps:t,type:yn,colorSpace:zs,depthBuffer:e})}function xs(i,t,e){return new ni({name:i,uniforms:t,vertexShader:Jt.cube_vert,fragmentShader:e,side:Ye,blending:Mi,depthTest:!1,depthWrite:!1})}function jp(){return xs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${gc}u

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
	`)}function t0(){return xs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:_c}},`

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
	`)}function e0(){return xs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Zp}
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
	`)}function vc(){return xs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Mc(){return xs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function n0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,h=!1){return d==null?null:h?o(d):r(d)}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Hr||h===Vr)if(t.has(d)){const p=t.get(d).texture;return a(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const _=new ga(p.height);return _.fromEquirectangularTexture(i,d),t.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const h=d.mapping,p=h===Hr||h===Vr,_=h===yi||h===Qi;if(p||_){let m=e.get(d);const g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new pr(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const v=d.image;return p&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new pr(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,h){return h===Hr?d.mapping=yi:h===Vr&&(d.mapping=Qi),d}function l(d){let h=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&h++;return h===p}function c(d){const h=d.target;h.removeEventListener("dispose",c);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function i0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ks("WebGLRenderer: "+n+" extension not supported."),s}}}function s0(i,t,e,n){const s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);const _=r.get(p);_&&(t.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function u(p){const _=p.attributes;for(const m in _)t.update(_[m],i.ARRAY_BUFFER)}function f(p){const _=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const v=_!==null?_.array.length:m.array.length/3-1,y=m.count>=65535?Ol:Fl,M=new y(Math.ceil(v/3)*6,1),b=M.array;if(_!==null){const x=_.array;g=_.version;for(let E=0,D=0;E<v;E+=3){const R=x[E+0],L=x[E+1],C=x[E+2];b[D++]=R,b[D++]=L,b[D++]=L,b[D++]=C,b[D++]=C,b[D++]=R}}else{g=m.version;for(let x=0,E=0;x<v;x+=3){const D=x+0,R=x+1,L=x+2;b[E++]=D,b[E++]=R,b[E++]=R,b[E++]=L,b[E++]=L,b[E++]=D}}M.version=g;const S=r.get(p);S&&t.remove(S),r.set(p,M)}function d(p){const _=r.get(p);if(_){const m=p.index;m!==null&&_.version<m.version&&f(p)}else f(p);return r.get(p)}function h(){for(const p in s){const _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:d,dispose:h}}function r0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,h){h!==0&&(i.drawElementsInstanced(n,d,r,f*o,h),e.update(d,n,h))}function u(f,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,h);let _=0;for(let m=0;m<h;m++)_+=d[m];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function o0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:oe("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function a0(i,t,e){const n=new WeakMap,s=new ge;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let D=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;h===!0&&(y=1),p===!0&&(y=2),_===!0&&(y=3);let M=a.attributes.position.count*y,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const S=new Float32Array(M*b*4*f),x=new Tl(S,M,b,f);x.type=Sn,x.needsUpdate=!0;const E=y*4;for(let R=0;R<f;R++){const L=m[R],C=g[R],P=v[R],w=M*b*4*R;for(let N=0;N<L.count;N++){const F=N*E;h===!0&&(s.fromBufferAttribute(L,N),S[w+F+0]=s.x,S[w+F+1]=s.y,S[w+F+2]=s.z,S[w+F+3]=0),p===!0&&(s.fromBufferAttribute(C,N),S[w+F+4]=s.x,S[w+F+5]=s.y,S[w+F+6]=s.z,S[w+F+7]=0),_===!0&&(s.fromBufferAttribute(P,N),S[w+F+8]=s.x,S[w+F+9]=s.y,S[w+F+10]=s.z,S[w+F+11]=P.itemSize===4?s.w:1)}}d={count:f,texture:x,size:new Ot(M,b)},n.set(a,d),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let h=0;for(let _=0;_<c.length;_++)h+=c[_];const p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function l0(i,t,e,n,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,d=t.get(c,f);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const c0={[Ja]:"LINEAR_TONE_MAPPING",[Qa]:"REINHARD_TONE_MAPPING",[ja]:"CINEON_TONE_MAPPING",[tl]:"ACES_FILMIC_TONE_MAPPING",[nl]:"AGX_TONE_MAPPING",[Gr]:"NEUTRAL_TONE_MAPPING",[el]:"CUSTOM_TONE_MAPPING"};function h0(i,t,e,n,s,r){const o=new bn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const u=new we;u.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new be([0,2,0,0,2,0],2));const f=new Rd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new $t(u,f),h=new ac(-1,1,1,-1,0,1);let p=null,_=null,m=!1,g,v=null,y=[],M=!1;this.setSize=function(b,S){o.setSize(b,S),a!==null&&a.setSize(b,S),l!==null&&l.setSize(b,S);for(let x=0;x<y.length;x++){const E=y[x];E.setSize&&E.setSize(b,S)}},this.setEffects=function(b){y=b,M=y.length>0&&y[0].isRenderPass===!0;const S=o.width,x=o.height;y.length>0&&a===null&&(a=new bn(S,x,{type:yn,depthBuffer:!1,stencilBuffer:!1}),l=new bn(S,x,{type:yn,depthBuffer:!1,stencilBuffer:!1}));const E=s===!0&&y.some(D=>D.needsDepthTexture===!0);E!==(o.depthTexture!==null)&&(E===!0&&c===null&&(c=new Fi(S,x),r===!0&&(c.format=qn,c.type=Ei)),o.dispose(),o.depthTexture=E?c:null,o.resolveDepthBuffer=E,o.storeMultisampledDepthBuffer=E);for(let D=0;D<y.length;D++){const R=y[D];R.setSize&&R.setSize(S,x),E&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(b,S){if(m||b.toneMapping===Ln&&y.length===0)return!1;if(v=S,S!==null){const x=S.width,E=S.height;(o.width!==x||o.height!==E)&&this.setSize(x,E)}return M===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=Ln,!0},this.hasRenderPass=function(){return M},this.end=function(b,S){b.toneMapping=g,m=!0;let x=o,E=a;for(let D=0;D<y.length;D++){const R=y[D];R.enabled!==!1&&(R.render(b,E,x,S),R.needsSwap!==!1&&(x=E,E=E===a?l:a))}if(p!==b.outputColorSpace||_!==b.toneMapping){p=b.outputColorSpace,_=b.toneMapping,f.defines={},ie.getTransfer(p)===ue&&(f.defines.SRGB_TRANSFER="");const D=c0[_];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(v),b.render(d,h),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}const Sc=new Fe,yc=new Fi(1,1),Ec=new Vl(1),bc=new Tl,wc=new Hu,Tc=new Hl,Ac=[],Rc=[],Cc=new Float32Array(16),Pc=new Float32Array(9),Lc=new Float32Array(4);function Vi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ac[s];if(r===void 0&&(r=new Float32Array(s),Ac[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function mr(i,t){let e=Rc[t];e===void 0&&(e=new Int32Array(t),Rc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function u0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function f0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function p0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function m0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Lc.set(n),i.uniformMatrix2fv(this.addr,!1,Lc),De(e,n)}}function g0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Pc.set(n),i.uniformMatrix3fv(this.addr,!1,Pc),De(e,n)}}function _0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Cc.set(n),i.uniformMatrix4fv(this.addr,!1,Cc),De(e,n)}}function x0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function v0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function M0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function S0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function y0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function E0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function b0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function w0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function gr(i){return i.version===0&&(i.compareFunction=pl,i.needsUpdate=!0),i}function T0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=gr(yc):r=Sc,e.setTexture2D(t||r,s)}function A0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||wc,s)}function R0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=gr(Ec):r=Tc,e.setTextureCube(t||r,s)}function C0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bc,s)}function P0(i){switch(i){case 5126:return u0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return x0;case 35667:case 35671:return v0;case 35668:case 35672:return M0;case 35669:case 35673:return S0;case 5125:return y0;case 36294:return E0;case 36295:return b0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}function L0(i,t){i.uniform1fv(this.addr,t)}function D0(i,t){const e=Vi(t,this.size,2);i.uniform2fv(this.addr,e)}function I0(i,t){const e=Vi(t,this.size,3);i.uniform3fv(this.addr,e)}function N0(i,t){const e=Vi(t,this.size,4);i.uniform4fv(this.addr,e)}function U0(i,t){const e=Vi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function F0(i,t){const e=Vi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function O0(i,t){const e=Vi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function z0(i,t){i.uniform1iv(this.addr,t)}function B0(i,t){i.uniform2iv(this.addr,t)}function k0(i,t){i.uniform3iv(this.addr,t)}function G0(i,t){i.uniform4iv(this.addr,t)}function H0(i,t){i.uniform1uiv(this.addr,t)}function V0(i,t){i.uniform2uiv(this.addr,t)}function W0(i,t){i.uniform3uiv(this.addr,t)}function X0(i,t){i.uniform4uiv(this.addr,t)}function q0(i,t,e){const n=this.cache,s=t.length,r=mr(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=gr(yc):o=Sc;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Y0(i,t,e){const n=this.cache,s=t.length,r=mr(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||wc,r[o])}function K0(i,t,e){const n=this.cache,s=t.length,r=mr(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=gr(Ec):o=Tc;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Z0(i,t,e){const n=this.cache,s=t.length,r=mr(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||bc,r[o])}function $0(i){switch(i){case 5126:return L0;case 35664:return D0;case 35665:return I0;case 35666:return N0;case 35674:return U0;case 35675:return F0;case 35676:return O0;case 5124:case 35670:return z0;case 35667:case 35671:return B0;case 35668:case 35672:return k0;case 35669:case 35673:return G0;case 5125:return H0;case 36294:return V0;case 36295:return W0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return q0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return K0;case 36289:case 36303:case 36311:case 36292:return Z0}}class J0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=P0(e.type)}}class Q0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$0(e.type)}}class j0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function Dc(i,t){i.seq.push(t),i.map[t.id]=t}function tm(i,t,e){const n=i.name,s=n.length;for(_a.lastIndex=0;;){const r=_a.exec(n),o=_a.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Dc(e,c===void 0?new J0(a,i,t):new Q0(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new j0(a),Dc(e,f)),e=f}}}class _r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);tm(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ic(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const em=37297;let nm=0;function im(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Nc=new Xt;function sm(i){ie._getMatrix(Nc,ie.workingColorSpace,i);const t=`mat3( ${Nc.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case Bs:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Uc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+im(i.getShaderSource(t),a)}else return r}function rm(i,t){const e=sm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const om={[Ja]:"Linear",[Qa]:"Reinhard",[ja]:"Cineon",[tl]:"ACESFilmic",[nl]:"AgX",[Gr]:"Neutral",[el]:"Custom"};function am(i,t){const e=om[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xr=new W;function lm(){ie.getLuminanceCoefficients(xr);const i=xr.x.toFixed(4),t=xr.y.toFixed(4),e=xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function hm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function um(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function vs(i){return i!==""}function Fc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Oc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function xa(i){return i.replace(dm,fm)}function fm(i,t){const e=Jt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return xa(e)}const pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(i){return i.replace(pm,mm)}function mm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const gm={[Ki]:"SHADOWMAP_TYPE_PCF",[Zi]:"SHADOWMAP_TYPE_VSM"};function _m(i){return gm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xm={[Qi]:"ENVMAP_MODE_REFRACTION"};function vm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":xm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Mm={[$a]:"ENVMAP_BLENDING_MULTIPLY",[ou]:"ENVMAP_BLENDING_MIX",[au]:"ENVMAP_BLENDING_ADD"};function Sm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Mm[i.combine]||"ENVMAP_BLENDING_NONE"}function ym(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=_m(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=vm(e),f=Sm(e),d=cm(e),h=hm(r),p=s.createProgram();let _,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h].filter(vs).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h].filter(vs).join(`
`),m.length>0&&(m+=`
`)):(_=[Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),m=[Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?am("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,rm("linearToOutputTexel",e.outputColorSpace),lm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),o=xa(o),o=Fc(o,e),o=Oc(o,e),a=xa(a),a=Fc(a,e),a=Oc(a,e),o=zc(o),a=zc(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=g+_+o,y=g+m+a,M=Ic(s,s.VERTEX_SHADER,v),b=Ic(s,s.FRAGMENT_SHADER,y);s.attachShader(p,M),s.attachShader(p,b),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function S(R){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(p)||"",C=s.getShaderInfoLog(M)||"",P=s.getShaderInfoLog(b)||"",w=L.trim(),N=C.trim(),F=P.trim();let z=!0,K=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,M,b);else{const V=Uc(s,M,"vertex"),k=Uc(s,b,"fragment");oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+w+`
`+V+`
`+k)}else w!==""?Vt("WebGLProgram: Program Info Log:",w):(N===""||F==="")&&(K=!1);K&&(R.diagnostics={runnable:z,programLog:w,vertexShader:{log:N,prefix:_},fragmentShader:{log:F,prefix:m}})}s.deleteShader(M),s.deleteShader(b),x=new _r(s,p),E=um(s,p)}let x;this.getUniforms=function(){return x===void 0&&S(this),x};let E;this.getAttributes=function(){return E===void 0&&S(this),E};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(p,em)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nm++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=b,this}let Em=0;class bm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new wm(t),e.set(t,n)),n}}class wm{constructor(t){this.id=Em++,this.code=t,this.usedTimes=0}}function Tm(i){return i===ci||i===Fs||i===Os}function Am(i,t,e,n,s,r){const o=new Bo,a=new bm,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,E,D,R,L,C){const P=R.fog,w=L.geometry,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=t.get(x.envMap||N,F),K=d[x.type];let V=n.precision;x.precision!==null&&(V=n.getMaxPrecision(x.precision),V!==x.precision&&Vt("WebGLProgram.getParameters:",x.precision,"not supported, using",V,"instead."));const k=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,O=k!==void 0?k.length:0;let $=0;w.morphAttributes.position!==void 0&&($=1),w.morphAttributes.normal!==void 0&&($=2),w.morphAttributes.color!==void 0&&($=3);let et,X,J,j;if(K){const wt=An[K];et=wt.vertexShader,X=wt.fragmentShader}else{et=x.vertexShader,X=x.fragmentShader;const wt=a.getVertexShaderStage(x),fe=a.getFragmentShaderStage(x);a.update(x,wt,fe),J=wt.id,j=fe.id}const at=i.getRenderTarget(),it=i.state.buffers.depth.getReversed(),lt=L.isInstancedMesh===!0,Rt=L.isBatchedMesh===!0,ft=!!x.map,At=!!x.matcap,xt=!!z,Dt=xt&&z.isPMREMTexture===!0,Kt=!!x.aoMap,te=!!x.lightMap,Wt=!!x.bumpMap&&x.wireframe===!1,ut=!!x.normalMap,Ut=!!x.displacementMap,Bt=!!x.emissiveMap,le=!!x.metalnessMap,Me=!!x.roughnessMap,ye=x.anisotropy>0,H=x.clearcoat>0,pe=x.diffuseRoughness>0,de=x.dispersion>0,he=x.retroreflectivity>0,gt=x.iridescence>0,xe=x.sheen>0,Nt=x.transmission>0,Ht=ye&&!!x.anisotropyMap,I=H&&!!x.clearcoatMap,T=H&&!!x.clearcoatNormalMap,q=H&&!!x.clearcoatRoughnessMap,ct=pe&&!!x.diffuseRoughnessMap,ot=gt&&!!x.iridescenceMap,mt=gt&&!!x.iridescenceThicknessMap,yt=xe&&!!x.sheenColorMap,nt=xe&&!!x.sheenRoughnessMap,st=!!x.specularMap,vt=!!x.specularColorMap,B=!!x.specularIntensityMap,rt=Nt&&!!x.transmissionMap,tt=Nt&&!!x.thicknessMap,Mt=!!x.gradientMap,pt=!!x.alphaMap,_t=x.alphaTest>0,Ft=!!x.alphaHash,Qt=!!x.extensions;let dt=Ln;x.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(dt=i.toneMapping);const kt=Dt?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Zt={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:et,fragmentShader:X,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:V,batching:Rt,batchingColor:Rt&&L._colorsTexture!==null,instancing:lt,instancingColor:lt&&L.instanceColor!==null,instancingMorph:lt&&L.morphTexture!==null,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ft,matcap:At,envMap:xt,envMapMode:xt&&z.mapping,envMapPMREM:Dt,envMapMaxLod:Dt?kt.length-1:null,envMapSize:Dt?kt[0].width:null,aoMap:Kt,lightMap:te,bumpMap:Wt,normalMap:ut,displacementMap:Ut,emissiveMap:Bt,normalMapObjectSpace:ut&&x.normalMapType===hu,normalMapTangentSpace:ut&&x.normalMapType===Po,packedNormalMap:ut&&x.normalMapType===Po&&Tm(x.normalMap.format),metalnessMap:le,roughnessMap:Me,anisotropy:ye,anisotropyMap:Ht,clearcoat:H,clearcoatMap:I,clearcoatNormalMap:T,clearcoatRoughnessMap:q,diffuseRoughness:pe,diffuseRoughnessMap:ct,dispersion:de,retroreflection:he,iridescence:gt,iridescenceMap:ot,iridescenceThicknessMap:mt,sheen:xe,sheenColorMap:yt,sheenRoughnessMap:nt,specularMap:st,specularColorMap:vt,specularIntensityMap:B,transmission:Nt,transmissionMap:rt,thicknessMap:tt,gradientMap:Mt,opaque:x.transparent===!1&&x.blending===$i&&x.alphaToCoverage===!1,alphaMap:pt,alphaTest:_t,alphaHash:Ft,combine:x.combine,mapUv:ft&&h(x.map.channel),aoMapUv:Kt&&h(x.aoMap.channel),lightMapUv:te&&h(x.lightMap.channel),bumpMapUv:Wt&&h(x.bumpMap.channel),normalMapUv:ut&&h(x.normalMap.channel),displacementMapUv:Ut&&h(x.displacementMap.channel),emissiveMapUv:Bt&&h(x.emissiveMap.channel),metalnessMapUv:le&&h(x.metalnessMap.channel),roughnessMapUv:Me&&h(x.roughnessMap.channel),anisotropyMapUv:Ht&&h(x.anisotropyMap.channel),clearcoatMapUv:I&&h(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&h(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&h(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ct&&h(x.diffuseRoughnessMap.channel),iridescenceMapUv:ot&&h(x.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&h(x.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&h(x.sheenColorMap.channel),sheenRoughnessMapUv:nt&&h(x.sheenRoughnessMap.channel),specularMapUv:st&&h(x.specularMap.channel),specularColorMapUv:vt&&h(x.specularColorMap.channel),specularIntensityMapUv:B&&h(x.specularIntensityMap.channel),transmissionMapUv:rt&&h(x.transmissionMap.channel),thicknessMapUv:tt&&h(x.thicknessMap.channel),alphaMapUv:pt&&h(x.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(ut||ye),vertexNormals:!!w.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!w.attributes.uv&&(ft||pt),fog:!!P,useFog:x.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||w.attributes.normal===void 0&&ut===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:it,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:$,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:C.filter(wt=>wt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:ft&&x.map.isVideoTexture===!0&&ie.getTransfer(x.map.colorSpace)===ue,decodeVideoTextureEmissive:Bt&&x.emissiveMap.isVideoTexture===!0&&ie.getTransfer(x.emissiveMap.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pe,flipSided:x.side===Ye,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Qt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&x.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function _(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)E.push(D),E.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(m(E,x),g(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function m(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapPMREM),x.push(E.envMapMaxLod),x.push(E.envMapSize),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.diffuseRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.numLightProbeGrids),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function g(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.diffuseRoughness&&o.enable(25),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){const E=d[x.type];let D;if(E){const R=An[E];D=wd.clone(R.uniforms)}else D=x.uniforms;return D}function y(x,E){let D=u.get(E);return D!==void 0?++D.usedTimes:(D=new ym(i,E,x,s),c.push(D),u.set(E,D)),D}function M(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function S(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:S}}function Rm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Cm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function kc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,p,_,m,g){let v=i[t];return v===void 0?(v={id:d.id,object:d,geometry:h,material:p,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},i[t]=v):(v.id=d.id,v.object=d,v.geometry=h,v.material=p,v.materialVariant=o(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=m,v.group=g),t++,v}function l(d,h,p,_,m,g,v){v.reversedDepth===!0&&(m=-m);const y=a(d,h,p,_,m,g);p.transmission>0?n.push(y):p.transparent===!0?s.push(y):e.push(y)}function c(d,h,p,_,m,g){const v=a(d,h,p,_,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):e.unshift(v)}function u(d,h){e.length>1&&e.sort(d||Cm),n.length>1&&n.sort(h||kc),s.length>1&&s.sort(h||kc)}function f(){for(let d=t,h=i.length;d<h;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function Pm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Gc,i.set(n,[o])):s>=r.length?(o=new Gc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Lm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new Gt};break;case"SpotLight":e={position:new W,direction:new W,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function Dm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Im=0;function Nm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Um(i){const t=new Lm,e=Dm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const s=new W,r=new ve,o=new ve;function a(c){let u=0,f=0,d=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let h=0,p=0,_=0,m=0,g=0,v=0,y=0,M=0,b=0,S=0,x=0,E=0,D=0,R=0;c.sort(Nm);for(let C=0,P=c.length;C<P;C++){const w=c[C],N=w.color,F=w.intensity,z=w.distance;let K=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===ci?K=w.shadow.map.texture:K=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=N.r*F,f+=N.g*F,d+=N.b*F;else if(w.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(w.sh.coefficients[V],F);R++}else if(w.isSunLight){const V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const k=w.shadow,O=e.get(w);O.shadowIntensity=k.intensity,O.shadowBias=k.bias,O.shadowNormalBias=k.normalBias,O.shadowRadius=k.radius,O.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[p]=O,n.sunShadowMap[p]=K;const $=k.getViewportCount();for(let et=0;et<$;et++)n.sunShadowMatrix[_+et]=k.getMatrix(et),n.sunShadowCascade[_+et]=k._cascadeData[et];_+=$,p++}n.sun[h]=V,h++}else if(w.isDirectionalLight){const V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const k=w.shadow,O=e.get(w);O.shadowIntensity=k.intensity,O.shadowBias=k.bias,O.shadowNormalBias=k.normalBias,O.shadowRadius=k.radius,O.shadowMapSize=k.mapSize,n.directionalShadow[m]=O,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=w.shadow.matrix,b++}n.directional[m]=V,m++}else if(w.isSpotLight){const V=t.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(N).multiplyScalar(F),V.distance=z,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,n.spot[v]=V;const k=w.shadow;if(w.map&&(n.spotLightMap[E]=w.map,E++,k.updateMatrices(w),w.castShadow&&D++),n.spotLightMatrix[v]=k.matrix,w.castShadow){const O=e.get(w);O.shadowIntensity=k.intensity,O.shadowBias=k.bias,O.shadowNormalBias=k.normalBias,O.shadowRadius=k.radius,O.shadowMapSize=k.mapSize,n.spotShadow[v]=O,n.spotShadowMap[v]=K,x++}v++}else if(w.isRectAreaLight){const V=t.get(w);V.color.copy(N).multiplyScalar(F),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),n.rectArea[y]=V,y++}else if(w.isPointLight){const V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const k=w.shadow,O=e.get(w);O.shadowIntensity=k.intensity,O.shadowBias=k.bias,O.shadowNormalBias=k.normalBias,O.shadowRadius=k.radius,O.shadowMapSize=k.mapSize,O.shadowCameraNear=k.camera.near,O.shadowCameraFar=k.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=w.shadow.matrix,S++}n.point[g]=V,g++}else if(w.isHemisphereLight){const V=t.get(w);V.skyColor.copy(w.color).multiplyScalar(F),V.groundColor.copy(w.groundColor).multiplyScalar(F),n.hemi[M]=V,M++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const L=n.hash;(L.sunLength!==h||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==y||L.hemiLength!==M||L.numSunShadows!==p||L.numDirectionalShadows!==b||L.numPointShadows!==S||L.numSpotShadows!==x||L.numSpotMaps!==E||L.numLightProbes!==R)&&(n.sun.length=h,n.directional.length=m,n.spot.length=v,n.rectArea.length=y,n.point.length=g,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+E-D,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=R,L.sunLength=h,L.directionalLength=m,L.pointLength=g,L.spotLength=v,L.rectAreaLength=y,L.hemiLength=M,L.numSunShadows=p,L.numDirectionalShadows=b,L.numPointShadows=S,L.numSpotShadows=x,L.numSpotMaps=E,L.numLightProbes=R,n.version=Im++)}function l(c,u){let f=0,d=0,h=0,p=0,_=0,m=0;const g=u.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){const M=c[v];if(M.isSunLight){const b=n.sun[f];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),f++}else if(M.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),d++}else if(M.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(M.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const b=n.point[h];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),h++}else if(M.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Hc(i){const t=new Um(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):e.push(f)}function a(f){n.push(f)}function l(){t.setup(e),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Fm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Hc(i),t.set(s,[a])):r>=o.length?(a=new Hc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zm=`uniform sampler2D shadow_pass;
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
}`,Bm=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],km=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Vc=new ve,Ms=new W,va=new W;function Gm(i,t,e){let n=new ds;const s=new Ot,r=new Ot,o=new ge,a=new ca,l=new Cd,c={},u=e.maxTextureSize,f={[li]:Ye,[Ye]:li,[Pe]:Pe},d=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:Om,fragmentShader:zm}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const p=new we;p.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $t(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ki;let g=this.type;this.render=function(S,x,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Gh&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ki);const D=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Mi),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const P=g!==this.type;P&&x.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(N=>N.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,N=S.length;w<N;w++){const F=S[w],z=F.shadow;if(z===void 0){Vt("WebGLShadowMap:",F,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const K=z.getFrameExtents();s.multiply(K),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,z.mapSize.y=r.y));const V=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=V,z.map===null||P===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Zi){if(F.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new bn(s.x,s.y,{format:ci,type:yn,minFilter:Je,magFilter:Je,generateMipmaps:!1}),z.map.texture.name=F.name+".shadowMap",z.map.depthTexture=new Fi(s.x,s.y,Sn),z.map.depthTexture.name=F.name+".shadowMapDepth",z.map.depthTexture.format=Xn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=ke,z.map.depthTexture.magFilter=ke}else F.isPointLight?(z.map=new ga(s.x),z.map.depthTexture=new Vl(s.x,Mn)):(z.map=new bn(s.x,s.y),z.map.depthTexture=new Fi(s.x,s.y,Mn)),z.map.depthTexture.name=F.name+".shadowMap",z.map.depthTexture.format=Xn,this.type===Ki?(z.map.depthTexture.compareFunction=V?fl:dl,z.map.depthTexture.minFilter=Je,z.map.depthTexture.magFilter=Je):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=ke,z.map.depthTexture.magFilter=ke);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const k=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();F.isPointLight!==!0&&z.updateMatrices(F,E);const O=z.camera.layers.mask&4294967294?z.camera.layers:E.layers;for(let $=0;$<k;$++){const et=z.getCamera($);if(F.isPointLight){const X=z.camera,J=z.matrix,j=F.distance||X.far;j!==X.far&&(X.far=j,X.updateProjectionMatrix()),Ms.setFromMatrixPosition(F.matrixWorld),X.position.copy(Ms),va.copy(X.position),va.add(Bm[$]),X.up.copy(km[$]),X.lookAt(va),X.updateMatrixWorld(),J.makeTranslation(-Ms.x,-Ms.y,-Ms.z),Vc.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Vc,X.coordinateSystem,X.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,$),i.clear();else{$===0&&(i.setRenderTarget(z.map),i.clear());const X=z.getViewport($);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),C.viewport(o)}n=z.getFrustum($),M(x,E,et,F,O,this.type)}z.isPointLightShadow!==!0&&this.type===Zi&&v(z,E),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(D,R,L)};function v(S,x){const E=t.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,h.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),S.mapPass===null?S.mapPass=new bn(s.x,s.y,{format:ci,type:yn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(x,null,E,d,_,null),h.uniforms.shadow_pass.value=S.mapPass.texture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(x,null,E,h,_,null)}function y(S,x,E,D){let R=null;const L=E.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)R=L;else if(R=E.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const C=R.uuid,P=x.uuid;let w=c[C];w===void 0&&(w={},c[C]=w);let N=w[P];N===void 0&&(N=R.clone(),w[P]=N,x.addEventListener("dispose",b)),R=N}if(R.visible=x.visible,R.wireframe=x.wireframe,D===Zi?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:f[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const C=i.properties.get(R);C.light=E}return R}function M(S,x,E,D,R,L){if(S.visible===!1)return;if(S.layers.test(R)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===Zi)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,S.matrixWorld);const w=t.update(S),N=S.material;if(Array.isArray(N)){const F=w.groups;for(let z=0,K=F.length;z<K;z++){const V=F[z],k=N[V.materialIndex];if(k&&k.visible){const O=y(S,k,D,L);S.onBeforeShadow(i,S,x,E,w,O,V),i.renderBufferDirect(E,null,w,O,S,V),S.onAfterShadow(i,S,x,E,w,O,V)}}}else if(N.visible){const F=y(S,N,D,L);S.onBeforeShadow(i,S,x,E,w,F,null),i.renderBufferDirect(E,null,w,F,S,null),S.onAfterShadow(i,S,x,E,w,F,null)}}const P=S.children;for(let w=0,N=P.length;w<N;w++)M(P[w],x,E,D,R,L)}function b(S){S.target.removeEventListener("dispose",b);for(const E in c){const D=c[E],R=S.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function Hm(i,t){function e(){let B=!1;const rt=new ge;let tt=null;const Mt=new ge(0,0,0,0);return{setMask:function(pt){tt!==pt&&!B&&(i.colorMask(pt,pt,pt,pt),tt=pt)},setLocked:function(pt){B=pt},setClear:function(pt,_t,Ft,Qt,dt){dt===!0&&(pt*=Qt,_t*=Qt,Ft*=Qt),rt.set(pt,_t,Ft,Qt),Mt.equals(rt)===!1&&(i.clearColor(pt,_t,Ft,Qt),Mt.copy(rt))},reset:function(){B=!1,tt=null,Mt.set(-1,0,0,0)}}}function n(){let B=!1,rt=!1,tt=null,Mt=null,pt=null;return{setReversed:function(_t){if(rt!==_t){const Ft=t.get("EXT_clip_control");_t?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),rt=_t;const Qt=pt;pt=null,this.setClear(Qt)}},getReversed:function(){return rt},setTest:function(_t){_t?it(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(_t){tt!==_t&&!B&&(i.depthMask(_t),tt=_t)},setFunc:function(_t){if(rt&&(_t=Su[_t]),Mt!==_t){switch(_t){case Nr:i.depthFunc(i.NEVER);break;case Ur:i.depthFunc(i.ALWAYS);break;case Fr:i.depthFunc(i.LESS);break;case Ji:i.depthFunc(i.LEQUAL);break;case Or:i.depthFunc(i.EQUAL);break;case zr:i.depthFunc(i.GEQUAL);break;case Br:i.depthFunc(i.GREATER);break;case kr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=_t}},setLocked:function(_t){B=_t},setClear:function(_t){pt!==_t&&(pt=_t,rt&&(_t=1-_t),i.clearDepth(_t))},reset:function(){B=!1,tt=null,Mt=null,pt=null,rt=!1}}}function s(){let B=!1,rt=null,tt=null,Mt=null,pt=null,_t=null,Ft=null,Qt=null,dt=null;return{setTest:function(kt){B||(kt?it(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(kt){rt!==kt&&!B&&(i.stencilMask(kt),rt=kt)},setFunc:function(kt,Zt,wt){(tt!==kt||Mt!==Zt||pt!==wt)&&(i.stencilFunc(kt,Zt,wt),tt=kt,Mt=Zt,pt=wt)},setOp:function(kt,Zt,wt){(_t!==kt||Ft!==Zt||Qt!==wt)&&(i.stencilOp(kt,Zt,wt),_t=kt,Ft=Zt,Qt=wt)},setLocked:function(kt){B=kt},setClear:function(kt){dt!==kt&&(i.clearStencil(kt),dt=kt)},reset:function(){B=!1,rt=null,tt=null,Mt=null,pt=null,_t=null,Ft=null,Qt=null,dt=null}}}const r=new e,o=new n,a=new s;let l={};const c=new WeakMap;let u={},f={},d={},h=new WeakMap,p=[],_=null,m=!1,g=null,v=null,y=null,M=null,b=null,S=null,x=null,E=new Gt(0,0,0),D=0,R=!1,L=null,C=null,P=null,w=null,N=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=K>=2);let k=null,O={};const $=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),X=new ge().fromArray($),J=new ge().fromArray(et);function j(B,rt,tt,Mt){const pt=new Uint8Array(4),_t=i.createTexture();i.bindTexture(B,_t),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<tt;Ft++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(rt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return _t}const at={};at[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(Ji),Wt(!1),ut(Wa),it(i.CULL_FACE),Kt(Mi);function it(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function lt(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Rt(B,rt){return d[B]!==rt?(i.bindFramebuffer(B,rt),d[B]=rt,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=rt),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function ft(B,rt){let tt=p,Mt=!1;if(B){tt=h.get(rt),tt===void 0&&(tt=[],h.set(rt,tt));const pt=B.textures;if(tt.length!==pt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Ft=pt.length;_t<Ft;_t++)tt[_t]=i.COLOR_ATTACHMENT0+_t;tt.length=pt.length,Mt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(tt)}function At(B){return _!==B?(i.useProgram(B),_=B,!0):!1}const xt={[Si]:i.FUNC_ADD,[Vh]:i.FUNC_SUBTRACT,[Wh]:i.FUNC_REVERSE_SUBTRACT};xt[Xh]=i.MIN,xt[qh]=i.MAX;const Dt={[Yh]:i.ZERO,[Kh]:i.ONE,[Zh]:i.SRC_COLOR,[Ka]:i.SRC_ALPHA,[eu]:i.SRC_ALPHA_SATURATE,[jh]:i.DST_COLOR,[Jh]:i.DST_ALPHA,[$h]:i.ONE_MINUS_SRC_COLOR,[Za]:i.ONE_MINUS_SRC_ALPHA,[tu]:i.ONE_MINUS_DST_COLOR,[Qh]:i.ONE_MINUS_DST_ALPHA,[nu]:i.CONSTANT_COLOR,[iu]:i.ONE_MINUS_CONSTANT_COLOR,[su]:i.CONSTANT_ALPHA,[ru]:i.ONE_MINUS_CONSTANT_ALPHA};function Kt(B,rt,tt,Mt,pt,_t,Ft,Qt,dt,kt){if(B===Mi){m===!0&&(lt(i.BLEND),m=!1);return}if(m===!1&&(it(i.BLEND),m=!0),B!==Hh){if(B!==g||kt!==R){if((v!==Si||b!==Si)&&(i.blendEquation(i.FUNC_ADD),v=Si,b=Si),kt)switch(B){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFunc(i.ONE,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ya:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:oe("WebGLState: Invalid blending: ",B);break}else switch(B){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qa:oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ya:oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:oe("WebGLState: Invalid blending: ",B);break}y=null,M=null,S=null,x=null,E.set(0,0,0),D=0,g=B,R=kt}return}pt=pt||rt,_t=_t||tt,Ft=Ft||Mt,(rt!==v||pt!==b)&&(i.blendEquationSeparate(xt[rt],xt[pt]),v=rt,b=pt),(tt!==y||Mt!==M||_t!==S||Ft!==x)&&(i.blendFuncSeparate(Dt[tt],Dt[Mt],Dt[_t],Dt[Ft]),y=tt,M=Mt,S=_t,x=Ft),(Qt.equals(E)===!1||dt!==D)&&(i.blendColor(Qt.r,Qt.g,Qt.b,dt),E.copy(Qt),D=dt),g=B,R=!1}function te(B,rt){B.side===Pe?lt(i.CULL_FACE):it(i.CULL_FACE);let tt=B.side===Ye;rt&&(tt=!tt),Wt(tt),B.blending===$i&&B.transparent===!1?Kt(Mi):Kt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const Mt=B.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Bt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(B){L!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),L=B)}function ut(B){B!==Bh?(it(i.CULL_FACE),B!==C&&(B===Wa?i.cullFace(i.BACK):B===kh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),C=B}function Ut(B){B!==P&&(z&&i.lineWidth(B),P=B)}function Bt(B,rt,tt){B?(it(i.POLYGON_OFFSET_FILL),(w!==rt||N!==tt)&&(w=rt,N=tt,o.getReversed()&&(rt=-rt,tt=-tt),i.polygonOffset(rt,tt))):lt(i.POLYGON_OFFSET_FILL)}function le(B){B?it(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function Me(B){B===void 0&&(B=i.TEXTURE0+F-1),k!==B&&(i.activeTexture(B),k=B)}function ye(B,rt,tt){tt===void 0&&(k===null?tt=i.TEXTURE0+F-1:tt=k);let Mt=O[tt];Mt===void 0&&(Mt={type:void 0,texture:void 0},O[tt]=Mt),(Mt.type!==B||Mt.texture!==rt)&&(k!==tt&&(i.activeTexture(tt),k=tt),i.bindTexture(B,rt||at[B]),Mt.type=B,Mt.texture=rt)}function H(){const B=O[k];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function pe(){try{i.compressedTexImage2D(...arguments)}catch(B){oe("WebGLState:",B)}}function de(){try{i.compressedTexImage3D(...arguments)}catch(B){oe("WebGLState:",B)}}function he(){try{i.texSubImage2D(...arguments)}catch(B){oe("WebGLState:",B)}}function gt(){try{i.texSubImage3D(...arguments)}catch(B){oe("WebGLState:",B)}}function xe(){try{i.compressedTexSubImage2D(...arguments)}catch(B){oe("WebGLState:",B)}}function Nt(){try{i.compressedTexSubImage3D(...arguments)}catch(B){oe("WebGLState:",B)}}function Ht(){try{i.texStorage2D(...arguments)}catch(B){oe("WebGLState:",B)}}function I(){try{i.texStorage3D(...arguments)}catch(B){oe("WebGLState:",B)}}function T(){try{i.texImage2D(...arguments)}catch(B){oe("WebGLState:",B)}}function q(){try{i.texImage3D(...arguments)}catch(B){oe("WebGLState:",B)}}function ct(B){return f[B]!==void 0?f[B]:i.getParameter(B)}function ot(B,rt){f[B]!==rt&&(i.pixelStorei(B,rt),f[B]=rt)}function mt(B){X.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),X.copy(B))}function yt(B){J.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),J.copy(B))}function nt(B,rt){let tt=c.get(rt);tt===void 0&&(tt=new WeakMap,c.set(rt,tt));let Mt=tt.get(B);Mt===void 0&&(Mt=i.getUniformBlockIndex(rt,B.name),i.uniformBlockBinding(rt,Mt,Mt),tt.set(B,Mt))}function st(B,rt,tt){const pt=c.get(rt).get(B);l[pt]!==tt&&(i.bindBufferBase(i.UNIFORM_BUFFER,pt,tt),l[pt]=tt)}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},k=null,O={},d={},l={},h=new WeakMap,p=[],_=null,m=!1,g=null,v=null,y=null,M=null,b=null,S=null,x=null,E=new Gt(0,0,0),D=0,R=!1,L=null,C=null,P=null,w=null,N=null,X.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:lt,bindFramebuffer:Rt,drawBuffers:ft,useProgram:At,setBlending:Kt,setMaterial:te,setFlipSided:Wt,setCullFace:ut,setLineWidth:Ut,setPolygonOffset:Bt,setScissorTest:le,activeTexture:Me,bindTexture:ye,unbindTexture:H,compressedTexImage2D:pe,compressedTexImage3D:de,texImage2D:T,texImage3D:q,pixelStorei:ot,getParameter:ct,updateUBOMapping:nt,uniformBlockBinding:st,texStorage2D:Ht,texStorage3D:I,texSubImage2D:he,texSubImage3D:gt,compressedTexSubImage2D:xe,compressedTexSubImage3D:Nt,scissor:mt,viewport:yt,reset:vt}}function Vm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,u=new WeakMap,f=new Set;let d;const h=new WeakMap,p=new Set,_=new FinalizationRegistry(I=>p.delete(I));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,T){return m?new OffscreenCanvas(I,T):es("canvas")}function v(I,T,q){let ct=1;const ot=Ht(I);if((ot.width>q||ot.height>q)&&(ct=q/Math.max(ot.width,ot.height)),ct<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const mt=Math.floor(ct*ot.width),yt=Math.floor(ct*ot.height);d===void 0&&(d=g(mt,yt));const nt=T?g(mt,yt):d;return nt.width=mt,nt.height=yt,nt.getContext("2d").drawImage(I,0,0,mt,yt),Vt("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+mt+"x"+yt+")."),nt}else return"data"in I&&Vt("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),I;return I}function y(I){return I.generateMipmaps}function M(I){i.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(I,T,q,ct,ot,mt=!1){if(I!==null){if(i[I]!==void 0)return i[I];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let yt;ct&&(yt=t.get("EXT_texture_norm16"),yt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=T;if(T===i.RED&&(q===i.FLOAT&&(nt=i.R32F),q===i.HALF_FLOAT&&(nt=i.R16F),q===i.UNSIGNED_BYTE&&(nt=i.R8),q===i.UNSIGNED_SHORT&&yt&&(nt=yt.R16_EXT),q===i.SHORT&&yt&&(nt=yt.R16_SNORM_EXT)),T===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.R8UI),q===i.UNSIGNED_SHORT&&(nt=i.R16UI),q===i.UNSIGNED_INT&&(nt=i.R32UI),q===i.BYTE&&(nt=i.R8I),q===i.SHORT&&(nt=i.R16I),q===i.INT&&(nt=i.R32I)),T===i.RG&&(q===i.FLOAT&&(nt=i.RG32F),q===i.HALF_FLOAT&&(nt=i.RG16F),q===i.UNSIGNED_BYTE&&(nt=i.RG8),q===i.UNSIGNED_SHORT&&yt&&(nt=yt.RG16_EXT),q===i.SHORT&&yt&&(nt=yt.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RG8UI),q===i.UNSIGNED_SHORT&&(nt=i.RG16UI),q===i.UNSIGNED_INT&&(nt=i.RG32UI),q===i.BYTE&&(nt=i.RG8I),q===i.SHORT&&(nt=i.RG16I),q===i.INT&&(nt=i.RG32I)),T===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),q===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),q===i.UNSIGNED_INT&&(nt=i.RGB32UI),q===i.BYTE&&(nt=i.RGB8I),q===i.SHORT&&(nt=i.RGB16I),q===i.INT&&(nt=i.RGB32I)),T===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),q===i.UNSIGNED_INT&&(nt=i.RGBA32UI),q===i.BYTE&&(nt=i.RGBA8I),q===i.SHORT&&(nt=i.RGBA16I),q===i.INT&&(nt=i.RGBA32I)),T===i.RGB&&(q===i.UNSIGNED_SHORT&&yt&&(nt=yt.RGB16_EXT),q===i.SHORT&&yt&&(nt=yt.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),T===i.RGBA){const st=mt?Bs:ie.getTransfer(ot);q===i.FLOAT&&(nt=i.RGBA32F),q===i.HALF_FLOAT&&(nt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(nt=st===ue?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&yt&&(nt=yt.RGBA16_EXT),q===i.SHORT&&yt&&(nt=yt.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function x(I,T){let q;return I?T===null||T===Mn||T===Ei?q=i.DEPTH24_STENCIL8:T===Sn?q=i.DEPTH32F_STENCIL8:T===ji&&(q=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Mn||T===Ei?q=i.DEPTH_COMPONENT24:T===Sn?q=i.DEPTH_COMPONENT32F:T===ji&&(q=i.DEPTH_COMPONENT16),q}function E(I,T){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==ke&&I.minFilter!==Je?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function D(I){const T=new WeakRef(I);n.get(I).__ref=T,p.add(T),_.register(I,T,T)}function R(I){const T=n.get(I).__ref;T!==void 0&&(p.delete(T),_.unregister(T))}function L(I){P(I.target)}function C(I){w(I.target)}function P(I){I.removeEventListener("dispose",L),R(I),F(I),I.isVideoTexture&&u.delete(I),I.isHTMLTexture&&f.delete(I)}function w(I){I.removeEventListener("dispose",C),R(I),K(I)}function N(){for(const I of p){const T=I.deref();T!==void 0&&(T.isRenderTarget===!0?w(T):P(T))}p.clear(),f.clear()}function F(I){const T=n.get(I);if(T.__webglInit===void 0)return;const q=I.source,ct=h.get(q);if(ct){const ot=ct[T.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&z(I),Object.keys(ct).length===0&&h.delete(q)}n.remove(I)}function z(I){const T=n.get(I);i.deleteTexture(T.__webglTexture);const q=I.source,ct=h.get(q);delete ct[T.__cacheKey],o.memory.textures--}function K(I){const T=n.get(I);T.__depthDisposeCallback&&T.__depthDisposeCallback();const q=I.depthTexture;if(q&&q.renderTarget===I&&P(q),I.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(T.__webglFramebuffer[ot]))for(let mt=0;mt<T.__webglFramebuffer[ot].length;mt++)i.deleteFramebuffer(T.__webglFramebuffer[ot][mt]);else i.deleteFramebuffer(T.__webglFramebuffer[ot]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ot])}else{if(Array.isArray(T.__webglFramebuffer))for(let ot=0;ot<T.__webglFramebuffer.length;ot++)i.deleteFramebuffer(T.__webglFramebuffer[ot]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ot=0;ot<T.__webglColorRenderbuffer.length;ot++)T.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ot]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ct=I.textures;for(let ot=0,mt=ct.length;ot<mt;ot++){const yt=n.get(ct[ot]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),o.memory.textures--),n.remove(ct[ot])}n.remove(I)}let V=0;function k(){V=0}function O(){return V}function $(I){V=I}function et(){const I=V;return I>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,I}function X(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.mipmapsAutoUpdate),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function J(I,T){const q=n.get(I);if(I.isVideoTexture&&xe(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&q.__version!==I.version){const ct=I.image;if(ct===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{te(q,I,T);return}}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+T)}function j(I,T){const q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){te(q,I,T);return}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+T)}function at(I,T){const q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){te(q,I,T);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+T)}function it(I,T){const q=n.get(I);if(I.version>0&&q.__version!==I.version){Wt(q,I,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+T)}const lt={[Wr]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[Xr]:i.MIRRORED_REPEAT},Rt={[ke]:i.NEAREST,[lu]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[In]:i.LINEAR_MIPMAP_LINEAR},ft={[du]:i.NEVER,[pl]:i.ALWAYS,[fu]:i.LESS,[dl]:i.LEQUAL,[pu]:i.EQUAL,[fl]:i.GEQUAL,[mu]:i.GREATER,[gu]:i.NOTEQUAL};function At(I,T){if(T.type===Sn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Je||T.magFilter===qr||T.magFilter===Ls||T.magFilter===In||T.minFilter===Je||T.minFilter===qr||T.minFilter===Ls||T.minFilter===In)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,lt[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,lt[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,lt[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Rt[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Rt[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ft[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ke||T.minFilter!==Ls&&T.minFilter!==In||T.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function xt(I,T){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",L),D(T));const ct=T.source;let ot=h.get(ct);ot===void 0&&(ot={},h.set(ct,ot));const mt=X(T);if(mt!==I.__cacheKey){ot[mt]===void 0&&(ot[mt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ot[mt].usedTimes++;const yt=ot[I.__cacheKey];yt!==void 0&&(ot[I.__cacheKey].usedTimes--,yt.usedTimes===0&&z(T)),I.__cacheKey=mt,I.__webglTexture=ot[mt].texture}return q}function Dt(I,T,q){return Math.floor(Math.floor(I/q)/T)}function Kt(I,T,q,ct){const mt=I.updateRanges;if(mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,q,ct,T.data);else{mt.sort((B,rt)=>B.start-rt.start);let yt=0;for(let B=1;B<mt.length;B++){const rt=mt[yt],tt=mt[B],Mt=rt.start+rt.count,pt=Dt(tt.start,T.width,4),_t=Dt(rt.start,T.width,4);tt.start<=Mt+1&&pt===_t&&Dt(tt.start+tt.count-1,T.width,4)===pt?rt.count=Math.max(rt.count,tt.start+tt.count-rt.start):(++yt,mt[yt]=tt)}mt.length=yt+1;const nt=e.getParameter(i.UNPACK_ROW_LENGTH),st=e.getParameter(i.UNPACK_SKIP_PIXELS),vt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let B=0,rt=mt.length;B<rt;B++){const tt=mt[B],Mt=Math.floor(tt.start/4),pt=Math.ceil(tt.count/4),_t=Mt%T.width,Ft=Math.floor(Mt/T.width),Qt=pt,dt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ft),e.texSubImage2D(i.TEXTURE_2D,0,_t,Ft,Qt,dt,q,ct,T.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,nt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,st),e.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function te(I,T,q){let ct=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ct=i.TEXTURE_3D);const ot=xt(I,T),mt=T.source;e.bindTexture(ct,I.__webglTexture,i.TEXTURE0+q);const yt=n.get(mt);if(mt.version!==yt.__version||ot===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const dt=ie.getPrimaries(ie.workingColorSpace),kt=T.colorSpace===Yn?null:ie.getPrimaries(T.colorSpace),Zt=T.colorSpace===Yn||dt===kt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let st=v(T.image,!1,s.maxTextureSize);st=Nt(T,st);const vt=r.convert(T.format,T.colorSpace),B=r.convert(T.type);let rt=S(T.internalFormat,vt,B,T.normalized,T.colorSpace,T.isVideoTexture);At(ct,T);let tt;const Mt=T.mipmaps,pt=T.isVideoTexture!==!0,_t=yt.__version===void 0||ot===!0,Ft=mt.dataReady,Qt=E(T,st);if(T.isDepthTexture)rt=x(T.format===qn,T.type),_t&&(pt?e.texStorage2D(i.TEXTURE_2D,1,rt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,rt,st.width,st.height,0,vt,B,null));else if(T.isDataTexture)if(Mt.length>0){pt&&_t&&e.texStorage2D(i.TEXTURE_2D,Qt,rt,Mt[0].width,Mt[0].height);for(let dt=0,kt=Mt.length;dt<kt;dt++)tt=Mt[dt],pt?Ft&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,tt.width,tt.height,vt,B,tt.data):e.texImage2D(i.TEXTURE_2D,dt,rt,tt.width,tt.height,0,vt,B,tt.data);T.generateMipmaps=!1}else pt?(_t&&e.texStorage2D(i.TEXTURE_2D,Qt,rt,st.width,st.height),Ft&&Kt(T,st,vt,B)):e.texImage2D(i.TEXTURE_2D,0,rt,st.width,st.height,0,vt,B,st.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){pt&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Qt,rt,Mt[0].width,Mt[0].height,st.depth);for(let dt=0,kt=Mt.length;dt<kt;dt++)if(tt=Mt[dt],T.format!==En)if(vt!==null)if(pt){if(Ft)if(T.layerUpdates.size>0){const Zt=dc(tt.width,tt.height,T.format,T.type);for(const wt of T.layerUpdates){const fe=tt.data.subarray(wt*Zt/tt.data.BYTES_PER_ELEMENT,(wt+1)*Zt/tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,wt,tt.width,tt.height,1,vt,fe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,tt.width,tt.height,st.depth,vt,tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,rt,tt.width,tt.height,st.depth,0,tt.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?Ft&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,tt.width,tt.height,st.depth,vt,B,tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,rt,tt.width,tt.height,st.depth,0,vt,B,tt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{pt&&_t&&e.texStorage2D(i.TEXTURE_2D,Qt,rt,Mt[0].width,Mt[0].height);for(let dt=0,kt=Mt.length;dt<kt;dt++)tt=Mt[dt],T.format!==En?vt!==null?pt?Ft&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,tt.width,tt.height,vt,tt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,rt,tt.width,tt.height,0,tt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?Ft&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,tt.width,tt.height,vt,B,tt.data):e.texImage2D(i.TEXTURE_2D,dt,rt,tt.width,tt.height,0,vt,B,tt.data)}else if(T.isDataArrayTexture)if(pt){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Qt,rt,st.width,st.height,st.depth),Ft)if(T.layerUpdates.size>0){const dt=dc(st.width,st.height,T.format,T.type);for(const kt of T.layerUpdates){const Zt=st.data.subarray(kt*dt/st.data.BYTES_PER_ELEMENT,(kt+1)*dt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,kt,st.width,st.height,1,vt,B,Zt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,B,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,rt,st.width,st.height,st.depth,0,vt,B,st.data);else if(T.isData3DTexture)pt?(_t&&e.texStorage3D(i.TEXTURE_3D,Qt,rt,st.width,st.height,st.depth),Ft&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,B,st.data)):e.texImage3D(i.TEXTURE_3D,0,rt,st.width,st.height,st.depth,0,vt,B,st.data);else if(T.isFramebufferTexture){if(_t)if(pt)e.texStorage2D(i.TEXTURE_2D,Qt,rt,st.width,st.height);else{let dt=st.width,kt=st.height;for(let Zt=0;Zt<Qt;Zt++)e.texImage2D(i.TEXTURE_2D,Zt,rt,dt,kt,0,vt,B,null),dt>>=1,kt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){const dt=i.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),st.parentNode!==dt){dt.appendChild(st),f.add(T),dt.onpaint=kt=>{const Zt=kt.changedElements;for(const wt of f)Zt.includes(wt.image)&&(wt.needsUpdate=!0)},dt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,st);else{const Zt=i.RGBA,wt=i.RGBA,fe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Zt,wt,fe,st)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Mt.length>0){if(pt&&_t){const dt=Ht(Mt[0]);e.texStorage2D(i.TEXTURE_2D,Qt,rt,dt.width,dt.height)}for(let dt=0,kt=Mt.length;dt<kt;dt++)tt=Mt[dt],pt?Ft&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,vt,B,tt):e.texImage2D(i.TEXTURE_2D,dt,rt,vt,B,tt);T.generateMipmaps=!1}else if(pt){if(_t){const dt=Ht(st);e.texStorage2D(i.TEXTURE_2D,Qt,rt,dt.width,dt.height)}Ft&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,B,st)}else e.texImage2D(i.TEXTURE_2D,0,rt,vt,B,st);y(T)&&T.mipmapsAutoUpdate===!0&&M(ct),yt.__version=mt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Wt(I,T,q){if(T.image.length!==6)return;const ct=xt(I,T),ot=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+q);const mt=n.get(ot);if(ot.version!==mt.__version||ct===!0){e.activeTexture(i.TEXTURE0+q);const yt=ie.getPrimaries(ie.workingColorSpace),nt=T.colorSpace===Yn?null:ie.getPrimaries(T.colorSpace),st=T.colorSpace===Yn||yt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const vt=T.isCompressedTexture||T.image[0].isCompressedTexture,B=T.image[0]&&T.image[0].isDataTexture,rt=[];for(let wt=0;wt<6;wt++)!vt&&!B?rt[wt]=v(T.image[wt],!0,s.maxCubemapSize):rt[wt]=B?T.image[wt].image:T.image[wt],rt[wt]=Nt(T,rt[wt]);const tt=rt[0],Mt=r.convert(T.format,T.colorSpace),pt=r.convert(T.type);let _t=S(T.internalFormat,Mt,pt,T.normalized,T.colorSpace);const Ft=T.isVideoTexture!==!0,Qt=mt.__version===void 0||ct===!0,dt=ot.dataReady;let kt=E(T,tt);At(i.TEXTURE_CUBE_MAP,T);let Zt;if(T.isDepthTexture){if(_t=x(T.format===qn,T.type),Qt)if(Ft)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,_t,tt.width,tt.height);else for(let wt=0;wt<6;wt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,_t,tt.width,tt.height,0,Mt,pt,null)}else if(vt){Ft&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,kt,_t,tt.width,tt.height);for(let wt=0;wt<6;wt++){Zt=rt[wt].mipmaps;for(let fe=0;fe<Zt.length;fe++){const ze=Zt[fe];T.format!==En?Mt!==null?Ft?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,fe,0,0,ze.width,ze.height,Mt,ze.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,fe,_t,ze.width,ze.height,0,ze.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,fe,0,0,ze.width,ze.height,Mt,pt,ze.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,fe,_t,ze.width,ze.height,0,Mt,pt,ze.data)}}}else{if(Zt=T.mipmaps,Ft&&Qt){Zt.length>0&&kt++;const wt=Ht(rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,kt,_t,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(B){Ft?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,rt[wt].width,rt[wt].height,Mt,pt,rt[wt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,_t,rt[wt].width,rt[wt].height,0,Mt,pt,rt[wt].data);for(let fe=0;fe<Zt.length;fe++){const oi=Zt[fe].image[wt].image;Ft?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,fe+1,0,0,oi.width,oi.height,Mt,pt,oi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,fe+1,_t,oi.width,oi.height,0,Mt,pt,oi.data)}}else{Ft?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Mt,pt,rt[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,_t,Mt,pt,rt[wt]);for(let fe=0;fe<Zt.length;fe++){const ze=Zt[fe];Ft?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,fe+1,0,0,Mt,pt,ze.image[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,fe+1,_t,Mt,pt,ze.image[wt])}}}y(T)&&T.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),mt.__version=ot.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ut(I,T,q,ct,ot,mt){const yt=r.convert(q.format,q.colorSpace),nt=r.convert(q.type),st=S(q.internalFormat,yt,nt,q.normalized,q.colorSpace),vt=n.get(T),B=n.get(q);if(B.__renderTarget=T,!vt.__hasExternalTextures){const rt=Math.max(1,T.width>>mt),tt=Math.max(1,T.height>>mt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,mt,st,rt,tt,T.depth,0,yt,nt,null):e.texImage2D(ot,mt,st,rt,tt,0,yt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),gt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,ot,B.__webglTexture,0,he(T)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,ot,B.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(I,T,q){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){const ct=T.depthTexture,ot=ct&&ct.isDepthTexture?ct.type:null,mt=x(T.stencilBuffer,ot),yt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(T),mt,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(T),mt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,mt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,I)}else{const ct=T.textures;for(let ot=0;ot<ct.length;ot++){const mt=ct[ot],yt=r.convert(mt.format,mt.colorSpace),nt=r.convert(mt.type),st=S(mt.internalFormat,yt,nt,mt.normalized,mt.colorSpace);gt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(T),st,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(T),st,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,st,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Bt(I,T,q){const ct=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ot=n.get(T.depthTexture);ot.__renderTarget=T;const mt=ct?T.depthTexture.image[0]:T.depthTexture.image;(!ot.__webglTexture||mt.width!==T.width||mt.height!==T.height)&&(mt.width=T.width,mt.height=T.height,T.depthTexture.needsUpdate=!0),ct?it(T.depthTexture,0):J(T.depthTexture,0);const yt=ot.__webglTexture,nt=he(T),st=ct?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,vt=T.depthTexture.format===qn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Xn)gt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,st,yt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,vt,st,yt,0);else if(T.depthTexture.format===qn)gt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,st,yt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,vt,st,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function le(I){const T=n.get(I),q=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const ct=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ct){const ot=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ct.removeEventListener("dispose",ot)};ct.addEventListener("dispose",ot),T.__depthDisposeCallback=ot}T.__boundDepthTexture=ct}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(q)for(let ct=0;ct<6;ct++)Bt(T.__webglFramebuffer[ct],I,ct);else I.texture.mipmaps.length>0?Bt(T.__webglFramebuffer[0],I,0):Bt(T.__webglFramebuffer,I,0);else if(q){T.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ct]),T.__webglDepthbuffer[ct]===void 0)T.__webglDepthbuffer[ct]=i.createRenderbuffer(),Ut(T.__webglDepthbuffer[ct],I,!1);else{const ot=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,mt)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Ut(T.__webglDepthbuffer,I,!1);else{const ot=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(I,T,q){const ct=n.get(I);T!==void 0&&ut(ct.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&le(I)}function ye(I){const T=I.texture,q=n.get(I),ct=n.get(T);I.addEventListener("dispose",C),D(I);const ot=I.textures,mt=I.isWebGLCubeRenderTarget===!0,yt=ot.length>1;if(yt||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=T.version,o.memory.textures++),mt){q.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(T.mipmaps.length>0){q.__webglFramebuffer[nt]=[];for(let st=0;st<T.mipmaps.length;st++)q.__webglFramebuffer[nt][st]=i.createFramebuffer()}else q.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(T.mipmaps.length>0){q.__webglFramebuffer=[];for(let nt=0;nt<T.mipmaps.length;nt++)q.__webglFramebuffer[nt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(yt)for(let nt=0,st=ot.length;nt<st;nt++){const vt=n.get(ot[nt]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&gt(I)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let nt=0;nt<ot.length;nt++){const st=ot[nt];q.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[nt]);const vt=r.convert(st.format,st.colorSpace),B=r.convert(st.type),rt=S(st.internalFormat,vt,B,st.normalized,st.colorSpace,I.isXRRenderTarget===!0),tt=he(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,rt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,q.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),At(i.TEXTURE_CUBE_MAP,T);for(let nt=0;nt<6;nt++)if(T.mipmaps.length>0)for(let st=0;st<T.mipmaps.length;st++)ut(q.__webglFramebuffer[nt][st],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,st);else ut(q.__webglFramebuffer[nt],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);y(T)?M(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(yt){for(let nt=0,st=ot.length;nt<st;nt++){const vt=ot[nt],B=n.get(vt);let rt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(rt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,B.__webglTexture),At(rt,vt),ut(q.__webglFramebuffer,I,vt,i.COLOR_ATTACHMENT0+nt,rt,0),y(vt)&&M(rt)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(nt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,ct.__webglTexture),At(nt,T),T.mipmaps.length>0)for(let st=0;st<T.mipmaps.length;st++)ut(q.__webglFramebuffer[st],I,T,i.COLOR_ATTACHMENT0,nt,st);else ut(q.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,nt,0);y(T)?M(nt):T.mipmaps.length>0&&i.texParameteri(nt,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&le(I)}function H(I){const T=I.textures;for(let q=0,ct=T.length;q<ct;q++){const ot=T[q];if(y(ot)&&ot.mipmapsAutoUpdate===!0){const mt=b(I),yt=n.get(ot).__webglTexture;e.bindTexture(mt,yt),M(mt),e.unbindTexture()}}}const pe=[];function de(I){if(I.samples>0){if(gt(I)===!1){const T=I.textures,q=I.width,ct=I.height;let ot=i.COLOR_BUFFER_BIT;const mt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(I),nt=T.length>1;if(nt)for(let vt=0;vt<T.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let vt=0;vt<T.length;vt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[vt]);const B=n.get(T[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,B,0)}i.blitFramebuffer(0,0,q,ct,0,0,q,ct,ot,i.NEAREST),l===!0&&(pe.length=0,pe.push(i.COLOR_ATTACHMENT0+vt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&pe.push(mt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let vt=0;vt<T.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[vt]);const B=n.get(T[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,B,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){const T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function he(I){return Math.min(s.maxSamples,I.samples)}function gt(I){const T=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function xe(I){const T=o.render.frame;u.get(I)!==T&&(u.set(I,T),I.update())}function Nt(I,T){const q=I.colorSpace,ct=I.format,ot=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==zs&&q!==Yn&&(ie.getTransfer(q)===ue?(ct!==En||ot!==tn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):oe("WebGLTextures: Unsupported texture color space:",q)),T}function Ht(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=et,this.resetTextureUnits=k,this.getTextureUnits=O,this.setTextureUnits=$,this.setTexture2D=J,this.setTexture2DArray=j,this.setTexture3D=at,this.setTextureCube=it,this.rebindTextures=Me,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=gt,this.dispose=N}function Wm(i,t){function e(n,s=Yn){let r;const o=ie.getTransfer(s);if(n===tn)return i.UNSIGNED_BYTE;if(n===Kr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ol)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===al)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sl)return i.BYTE;if(n===rl)return i.SHORT;if(n===ji)return i.UNSIGNED_SHORT;if(n===Yr)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===yn)return i.HALF_FLOAT;if(n===ll)return i.ALPHA;if(n===cl)return i.RGB;if(n===En)return i.RGBA;if(n===Xn)return i.DEPTH_COMPONENT;if(n===qn)return i.DEPTH_STENCIL;if(n===hl)return i.RED;if(n===$r)return i.RED_INTEGER;if(n===ci)return i.RG;if(n===Jr)return i.RG_INTEGER;if(n===Qr)return i.RGBA_INTEGER;if(n===Ds||n===Is||n===Ns||n===Us)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ds)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ds)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jr||n===to||n===eo||n===no)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===no)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===io||n===so||n===ro||n===oo||n===ao||n===Fs||n===lo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===io||n===so)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ro)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===oo)return r.COMPRESSED_R11_EAC;if(n===ao)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fs)return r.COMPRESSED_RG11_EAC;if(n===lo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===Mo||n===So||n===yo||n===Eo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===co)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ho)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===po)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===go)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_o)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bo||n===wo||n===To)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===bo)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ao||n===Ro||n===Os||n===Co)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Os)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ei?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Xm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qm=`
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

}`;class Ym{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Wl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ni({vertexShader:Xm,fragmentShader:qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Km extends Kn{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,p=null;const _=typeof XRWebGLBinding<"u",m=new Ym,g={},v=e.getContextAttributes();let y=null,M=null;const b=[],S=[],x=new Ot;let E=null,D=null;const R=new gn;R.viewport=new ge;const L=new gn;L.viewport=new ge;const C=[R,L],P=new zd;let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=b[X];return J===void 0&&(J=new Go,b[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=b[X];return J===void 0&&(J=new Go,b[X]=J),J.getGripSpace()},this.getHand=function(X){let J=b[X];return J===void 0&&(J=new Go,b[X]=J),J.getHandSpace()};function F(X){const J=S.indexOf(X.inputSource);if(J===-1)return;const j=b[J];j!==void 0&&(j.update(X.inputSource,X.frame,c||o),j.dispatchEvent({type:X.type,data:X.inputSource}))}function z(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",K);for(let X=0;X<b.length;X++){const J=S[X];J!==null&&(S[X]=null,b[X].disconnect(J))}w=null,N=null,m.reset();for(const X in g)delete g[X];if(t.setRenderTarget(y),h=null,d=null,f=null,s=null,M=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(x.width,x.height,!1),D!==null){const X=D.camera;X.fov=D.fov,X.zoom=D.zoom,X.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",z),s.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,at=null,it=null;v.depth&&(it=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=v.stencil?qn:Xn,at=v.stencil?Ei:Mn);const lt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new bn(d.textureWidth,d.textureHeight,{format:En,type:tn,depthTexture:new Fi(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const j={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new bn(h.framebufferWidth,h.framebufferHeight,{format:En,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(X){for(let J=0;J<X.removed.length;J++){const j=X.removed[J],at=S.indexOf(j);at>=0&&(S[at]=null,b[at].disconnect(j))}for(let J=0;J<X.added.length;J++){const j=X.added[J];let at=S.indexOf(j);if(at===-1){for(let lt=0;lt<b.length;lt++)if(lt>=S.length){S.push(j),at=lt;break}else if(S[lt]===null){S[lt]=j,at=lt;break}if(at===-1)break}const it=b[at];it&&it.connect(j)}}function V(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let J=X.near,j=X.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(j=m.depthFar)),P.near=L.near=R.near=J,P.far=L.far=R.far=j,(w!==P.near||N!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),w=P.near,N=P.far),P.layers.mask=X.layers.mask|6,R.layers.mask=P.layers.mask&-5,L.layers.mask=P.layers.mask&-3;const at=X.parent,it=P.cameras;V(P,at);for(let lt=0;lt<it.length;lt++)V(it[lt],at);P.projectionMatrix.copy(R.projectionMatrix),P.projectionMatrixInverse.copy(R.projectionMatrixInverse),D===null&&X.isPerspectiveCamera&&(D={camera:X,fov:X.fov,zoom:X.zoom}),k(X,P,at)};function k(X,J,j){j===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(j.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=is*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(X){return g[X]};let O=null;function $(X,J){if(u=J.getViewerPose(c||o),p=J,u!==null){const j=u.views;h!==null&&(t.setRenderTargetFramebuffer(M,h.framebuffer),t.setRenderTarget(M));let at=!1;j.length!==P.cameras.length&&(P.cameras.length=0,at=!0);for(let ft=0;ft<j.length;ft++){const At=j[ft];let xt=null;if(h!==null)xt=h.getViewport(At);else{const Kt=f.getViewSubImage(d,At);xt=Kt.viewport,ft===0&&(t.setRenderTargetTextures(M,Kt.colorTexture,Kt.depthStencilTexture),t.setRenderTarget(M))}let Dt=C[ft];Dt===void 0&&(Dt=new gn,Dt.layers.enable(ft),Dt.viewport=new ge,C[ft]=Dt),Dt.matrix.fromArray(At.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(At.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(xt.x,xt.y,xt.width,xt.height),ft===0&&(P.matrix.copy(Dt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),at===!0&&P.cameras.push(Dt)}const it=s.enabledFeatures;if(it&&it.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const ft=f.getDepthInformation(j[0]);ft&&ft.isValid&&ft.texture&&m.init(ft,s.renderState)}if(it&&it.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let ft=0;ft<j.length;ft++){const At=j[ft].camera;if(At){let xt=g[At];xt||(xt=new Wl,g[At]=xt);const Dt=f.getCameraImage(At);xt.sourceTexture=Dt}}}}for(let j=0;j<b.length;j++){const at=S[j],it=b[j];at!==null&&it!==void 0&&it.update(at,J,c||o)}O&&O(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),p=null}const et=new fc;et.setAnimationLoop($),this.setAnimationLoop=function(X){O=X},this.dispose=function(){}}}const Zm=new ve,Wc=new Xt;Wc.set(-1,0,0,0,1,0,0,0,1);function $m(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,jl(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,y,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&h(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ye&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ye&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const v=t.get(g),y=v.envMap,M=v.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(Zm.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Wc),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=y*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function h(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ye&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jm(i,t,e,n){let s={},r={};function o(v,y){const M=y.program;n.uniformBlockBinding(v,M,s[v.id])}function a(v,y){let M=s[v.id];M===void 0&&(p(v),M=l(v),s[v.id]=M,v.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(v,b);const S=t.render.frame;r[v.id]!==S&&(c(v),r[v.id]=S)}function l(v){const y=i.createBuffer(),M=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,M,b),i.bindBuffer(i.UNIFORM_BUFFER,null),y}function c(v){const y=s[v.id],M=v.uniforms,b=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let S=0,x=M.length;S<x;S++){const E=M[S];if(Array.isArray(E))for(let D=0,R=E.length;D<R;D++)u(E[D],S,D,b);else u(E,S,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,y,M,b){if(d(v,y,M,b)===!0){const S=v.__offset,x=v.value;if(Array.isArray(x)){let E=0;for(let D=0;D<x.length;D++){const R=x[D],L=_(R,!0);f(R,v.__data,E),E+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,v.__data)}}function f(v,y,M){typeof v=="number"||typeof v=="boolean"?y[M]=v:v.isMatrix3?(y[M]=v.elements[0],y[M+1]=v.elements[1],y[M+2]=v.elements[2],y[M+3]=0,y[M+4]=v.elements[3],y[M+5]=v.elements[4],y[M+6]=v.elements[5],y[M+7]=0,y[M+8]=v.elements[6],y[M+9]=v.elements[7],y[M+10]=v.elements[8],y[M+11]=0):ArrayBuffer.isView(v)?y.set(v.subarray(0,y.length-M),M):v.toArray(y,M)}function d(v,y,M,b){const S=v.value,x=y+"_"+M;if(Array.isArray(S)){b[x]===void 0&&(b[x]=[]);const E=b[x];let D=!1;for(let R=0;R<S.length;R++)h(S[R],E,R)===!0&&(D=!0);return D}return h(S,b,x)}function h(v,y,M){if(y[M]===void 0)return typeof v=="number"||typeof v=="boolean"?y[M]=v:ArrayBuffer.isView(v)?y[M]=v.slice():y[M]=v.clone(),!0;{const b=y[M];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return y[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function p(v){const y=v.uniforms;let M=0;const b=16;for(let x=0,E=y.length;x<E;x++){const D=Array.isArray(y[x])?y[x]:[y[x]];for(let R=0,L=D.length;R<L;R++){const C=D[R],P=Array.isArray(C.value)?C.value:[C.value],w=Array.isArray(y[x])||Array.isArray(C.value);let N=M;for(let z=0,K=P.length;z<K;z++){const V=P[z],k=_(V,w),O=M%b,$=O%k.boundary,et=O+$;M+=$,et!==0&&b-et<k.storage&&(M+=b-et),z===0&&(N=M),M+=k.storage}const F=C.type==="int"?Int32Array:C.type==="uint"?Uint32Array:Float32Array;C.__data=new F((M-N)/Float32Array.BYTES_PER_ELEMENT),C.__offset=N}}const S=M%b;return S>0&&(M+=b-S),v.__size=M,v.__cache={},this}function _(v,y){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",v),y===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(v){const y=v.target;y.removeEventListener("dispose",m),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function g(){for(const v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:g}}const Qm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Rn=null;function jm(){return Rn===null&&(Rn=new sd(Qm,16,16,ci,yn),Rn.name="DFG_LUT",Rn.minFilter=Je,Rn.magFilter=Je,Rn.wrapS=Dn,Rn.wrapT=Dn,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}class tg{constructor(t={}){const{canvas:e=vu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=tn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=h,m=new Set([Qr,Jr,$r]),g=new Set([tn,Mn,ji,Ei,Kr,Zr]),v=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let b=null,S=null;const x=[],E=[];let D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,C=null,P=null,w=null,N=null;this._outputColorSpace=Ue;let F=0,z=0,K=null,V=-1,k=null;const O=new ge,$=new ge;let et=null;const X=new Gt(0);let J=0,j=e.width,at=e.height,it=1,lt=null,Rt=null;const ft=new ge(0,0,j,at),At=new ge(0,0,j,at);let xt=!1;const Dt=new ds,Kt=new sa;let te=!1,Wt=!1;const ut=new ve,Ut=new W,Bt=new ge,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function ye(){return K===null?it:1}let H=n;function pe(A,G){return e.getContext(A,G)}let de,he,gt,xe,Nt,Ht,I,T,q,ct,ot,mt,yt,nt,st,vt,B,rt,tt,Mt,pt,_t,Ft;try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cn}`),e.addEventListener("webglcontextlost",kt,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),H===null){const G="webgl2";if(H=pe(G,A),H===null)throw pe(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(A){throw e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),oe("WebGLRenderer: "+A.message),A}function Qt(){de=new i0(H),de.init(),pt=new Wm(H,de),he=new qp(H,de,t,pt),gt=new Hm(H,de),he.reversedDepthBuffer&&d&&gt.buffers.depth.setReversed(!0),P=H.createFramebuffer(),w=H.createFramebuffer(),N=H.createFramebuffer(),xe=new o0(H),Nt=new Rm,Ht=new Vm(H,de,gt,Nt,he,pt,xe),I=new n0(R),T=new Gd(H),_t=new Wp(H,T),q=new s0(H,T,xe,_t),ct=new l0(H,q,T,_t,xe),rt=new a0(H,he,Ht),st=new Yp(Nt),ot=new Am(R,I,de,he,_t,st),mt=new $m(R,Nt),yt=new Pm,nt=new Fm(de),B=new Vp(R,I,gt,ct,p,l),vt=new Gm(R,ct,he),Ft=new Jm(H,xe,he,gt),tt=new Xp(H,de,xe),Mt=new r0(H,de,xe),xe.programs=ot.programs,R.capabilities=he,R.extensions=de,R.properties=Nt,R.renderLists=yt,R.shadowMap=vt,R.state=gt,R.info=xe}_!==tn&&(D=new h0(_,e.width,e.height,a,s,r));const dt=new Km(R,H);this.xr=dt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=de.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=de.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(A){A!==void 0&&(it=A,this.setSize(j,at,!1))},this.getSize=function(A){return A.set(j,at)},this.setSize=function(A,G,Q=!0){if(dt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,at=G,e.width=Math.floor(A*it),e.height=Math.floor(G*it),Q===!0&&(e.style.width=A+"px",e.style.height=G+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(j*it,at*it).floor()},this.setDrawingBufferSize=function(A,G,Q){j=A,at=G,it=Q,e.width=Math.floor(A*Q),e.height=Math.floor(G*Q),this.setViewport(0,0,A,G)},this.setEffects=function(A){if(_===tn){oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let G=0;G<A.length;G++)if(A[G].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(ft)},this.setViewport=function(A,G,Q,Y){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,G,Q,Y),gt.viewport(O.copy(ft).multiplyScalar(ye()).round())},this.getScissor=function(A){return A.copy(At)},this.setScissor=function(A,G,Q,Y){A.isVector4?At.set(A.x,A.y,A.z,A.w):At.set(A,G,Q,Y),gt.scissor($.copy(At).multiplyScalar(ye()).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(A){gt.setScissorTest(xt=A)},this.setOpaqueSort=function(A){lt=A},this.setTransparentSort=function(A){Rt=A},this.getClearColor=function(A){return A.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,Q=!0){let Y=0;if(A){let Z=!1;if(K!==null){const Et=K.texture.format;Z=m.has(Et)}if(Z){const Et=K.texture.type,Ct=g.has(Et),St=B.getClearColor(),Tt=B.getClearAlpha(),It=St.r,Yt=St.g,ee=St.b;Ct?(v[0]=It,v[1]=Yt,v[2]=ee,v[3]=Tt,H.clearBufferuiv(H.COLOR,0,v)):(y[0]=It,y[1]=Yt,y[2]=ee,y[3]=Tt,H.clearBufferiv(H.COLOR,0,y))}else Y|=H.COLOR_BUFFER_BIT}G&&(Y|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),C=A},this.dispose=function(){e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),B.dispose(),yt.dispose(),nt.dispose(),Ht.dispose(),Nt.dispose(),I.dispose(),ct.dispose(),q.dispose(),_t.dispose(),Ft.dispose(),ot.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Ch),dt.removeEventListener("sessionend",Ph),_i.stop()};function kt(A){A.preventDefault(),_l("WebGLRenderer: Context Lost."),L=!0}function Zt(){_l("WebGLRenderer: Context Restored."),L=!1;const A=xe.autoReset,G=vt.enabled,Q=vt.autoUpdate,Y=vt.needsUpdate,Z=vt.type;Qt(),xe.autoReset=A,vt.enabled=G,vt.autoUpdate=Q,vt.needsUpdate=Y,vt.type=Z}function wt(A){oe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function fe(A){const G=A.target;G.removeEventListener("dispose",fe),ze(G)}function ze(A){oi(A),Nt.remove(A)}function oi(A){const G=Nt.get(A).programs;G!==void 0&&(G.forEach(function(Q){ot.releaseProgram(Q)}),A.isShaderMaterial&&ot.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,Q,Y,Z,Et){G===null&&(G=le);const Ct=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,St=G_(A,G,Q,Y,Z);gt.setMaterial(Y,Ct);let Tt=Q.index,It=1;if(Y.wireframe===!0){if(Tt=q.getWireframeAttribute(Q),Tt===void 0)return;It=2}const Yt=Q.drawRange,ee=Q.attributes.position;let Pt=Yt.start*It,ne=(Yt.start+Yt.count)*It;Et!==null&&(Pt=Math.max(Pt,Et.start*It),ne=Math.min(ne,(Et.start+Et.count)*It)),Tt!==null?(Pt=Math.max(Pt,0),ne=Math.min(ne,Tt.count)):ee!=null&&(Pt=Math.max(Pt,0),ne=Math.min(ne,ee.count));const Ce=ne-Pt;if(Ce<0||Ce===1/0)return;_t.setup(Z,Y,St,Q,Tt);let _e,me=tt;if(Tt!==null&&(_e=T.get(Tt),me=Mt,me.setIndex(_e)),Z.isMesh)Y.wireframe===!0?(gt.setLineWidth(Y.wireframeLinewidth*ye()),me.setMode(H.LINES)):me.setMode(H.TRIANGLES);else if(Z.isLine){let Xe=Y.linewidth;Xe===void 0&&(Xe=1),gt.setLineWidth(Xe*ye()),Z.isLineSegments?me.setMode(H.LINES):Z.isLineLoop?me.setMode(H.LINE_LOOP):me.setMode(H.LINE_STRIP)}else Z.isPoints?me.setMode(H.POINTS):Z.isSprite&&me.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(de.get("WEBGL_multi_draw"))me.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Xe=Z._multiDrawStarts,Lt=Z._multiDrawCounts,Ze=Z._multiDrawCount,ce=Tt?T.get(Tt).bytesPerElement:1,xi=Nt.get(Y).currentProgram.getUniforms();for(let qe=0;qe<Ze;qe++)xi.setValue(H,"_gl_DrawID",qe),me.render(Xe[qe]/ce,Lt[qe])}else if(Z.isInstancedMesh)me.renderInstances(Pt,Ce,Z.count);else if(Q.isInstancedBufferGeometry){const Xe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Lt=Math.min(Q.instanceCount,Xe);me.renderInstances(Pt,Ce,Lt)}else me.render(Pt,Ce)};function Rh(A,G,Q,Y){C!==null&&A.isNodeMaterial&&C.setObject(Y,A),te===!0&&st.setState(A,Q,!1),A.transparent===!0&&A.side===Pe&&A.forceSinglePass===!1?(A.side=Ye,A.needsUpdate=!0,Ps(A,G,Y),A.side=li,A.needsUpdate=!0,Ps(A,G,Y),A.side=Pe):Ps(A,G,Y)}this.compile=function(A,G,Q=null){Q===null&&(Q=A),C!==null&&C.renderStart(A,G,Q),S=nt.get(Q),S.init(G),E.push(S),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),A!==Q&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),S.setupLights(),C!==null&&C.updateLights(S.state.lightsArray),Wt=this.localClippingEnabled,te=st.init(this.clippingPlanes,Wt),te===!0&&st.setGlobalState(this.clippingPlanes,G),C!==null&&vt.render(S.state.shadowsArray,Q,G);const Y=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Et=Z.material;if(Et)if(Array.isArray(Et))for(let Ct=0;Ct<Et.length;Ct++){const St=Et[Ct];Rh(St,Q,G,Z),Y.add(St)}else Rh(Et,Q,G,Z),Y.add(Et)}),S=E.pop(),C!==null&&C.renderEnd(),Y},this.compileAsync=function(A,G,Q=null){const Y=this.compile(A,G,Q);return new Promise(Z=>{function Et(){if(Y.forEach(function(Ct){const Tt=Nt.get(Ct).currentProgram;(Tt===void 0||Tt.isReady())&&Y.delete(Ct)}),Y.size===0){Z(A);return}setTimeout(Et,10)}de.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Ha=null;function B_(A){Ha&&Ha(A)}function Ch(){_i.stop()}function Ph(){_i.start()}const _i=new fc;_i.setAnimationLoop(B_),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(A){Ha=A,dt.setAnimationLoop(A),A===null?_i.stop():_i.start()},dt.addEventListener("sessionstart",Ch),dt.addEventListener("sessionend",Ph),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;C!==null&&C.renderStart(A,G);const Q=dt.enabled===!0&&dt.isPresenting===!0,Y=D!==null&&(K===null||Q)&&D.begin(R,K);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(G),G=dt.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,G,K),S=nt.get(A,E.length),S.init(G),S.state.textureUnits=Ht.getTextureUnits(),E.push(S),ut.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),G.isArrayCamera?Kt.setFromArrayCamera(G):Dt.setFromProjectionMatrix(ut,hn,G.reversedDepth),Wt=this.localClippingEnabled,te=st.init(this.clippingPlanes,Wt),b=yt.get(A,x.length),b.init(),x.push(b),this.info.render.frame++,dt.enabled===!0&&dt.isPresenting===!0){const Ct=R.xr.getDepthSensingMesh();Ct!==null&&Va(Ct,G,-1/0,R.sortObjects)}Va(A,G,0,R.sortObjects),b.finish(),C!==null&&C.updateLights(S.state.lightsArray),R.sortObjects===!0&&b.sort(lt,Rt),Me=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Me&&B.addToRenderList(b,A),this.info.autoReset===!0&&this.info.reset(),te===!0&&st.beginShadows();const Z=S.state.shadowsArray;if(vt.render(Z,A,G),te===!0&&st.endShadows(),(Y&&D.hasRenderPass())===!1){const Ct=b.opaque,St=b.transmissive;if(S.setupLights(),G.isArrayCamera){const Tt=G.cameras;if(St.length>0)for(let It=0,Yt=Tt.length;It<Yt;It++){const ee=Tt[It];Dh(Ct,St,A,ee)}Me&&B.render(A);for(let It=0,Yt=Tt.length;It<Yt;It++){const ee=Tt[It];Lh(b,A,ee,ee.viewport)}}else St.length>0&&Dh(Ct,St,A,G),Me&&B.render(A),Lh(b,A,G)}K!==null&&z===0&&(Ht.updateMultisampleRenderTarget(K),Ht.updateRenderTargetMipmap(K)),Y&&D.end(R),A.isScene===!0&&A.onAfterRender(R,A,G),_t.resetDefaultState(),V=-1,k=null,E.pop(),E.length>0?(S=E[E.length-1],Ht.setTextureUnits(S.state.textureUnits),te===!0&&st.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,x.pop(),x.length>0?b=x[x.length-1]:b=null,C!==null&&C.renderEnd()};function Va(A,G,Q,Y){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){const Ct=G.isArrayCamera?Kt:Dt;if(!A.frustumCulled||A.intersectsFrustum(Ct)){Y&&Bt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ut);const St=ct.update(A),Tt=A.material;Tt.visible&&b.push(A,St,Tt,Q,Bt.z,null,G)}}else if(A.isMesh||A.isLine||A.isPoints){const Ct=G.isArrayCamera?Kt:Dt;if(!A.frustumCulled||A.intersectsFrustum(Ct)){const St=ct.update(A),Tt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Bt.copy(A.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Bt.copy(St.boundingSphere.center)),Bt.applyMatrix4(A.matrixWorld).applyMatrix4(ut)),Array.isArray(Tt)){const It=St.groups;for(let Yt=0,ee=It.length;Yt<ee;Yt++){const Pt=It[Yt],ne=Tt[Pt.materialIndex];ne&&ne.visible&&b.push(A,St,ne,Q,Bt.z,Pt,G)}}else Tt.visible&&b.push(A,St,Tt,Q,Bt.z,null,G)}}}const Et=A.children;for(let Ct=0,St=Et.length;Ct<St;Ct++)Va(Et[Ct],G,Q,Y)}function Lh(A,G,Q,Y){const{opaque:Z,transmissive:Et,transparent:Ct}=A;S.setupLightsView(Q),te===!0&&st.setGlobalState(R.clippingPlanes,Q),Y&&gt.viewport(O.copy(Y)),Z.length>0&&Dr(Z,G,Q),Et.length>0&&Dr(Et,G,Q),Ct.length>0&&Dr(Ct,G,Q),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Dh(A,G,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Y.id]===void 0){const Pt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Y.id]=new bn(1,1,{generateMipmaps:!0,type:Pt?yn:tn,minFilter:In,samples:Math.max(4,he.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}const Et=S.state.transmissionRenderTarget[Y.id],Ct=Y.viewport||O;Et.setSize(Ct.z*R.transmissionResolutionScale,Ct.w*R.transmissionResolutionScale);const St=R.getRenderTarget(),Tt=R.getActiveCubeFace(),It=R.getActiveMipmapLevel();R.setRenderTarget(Et),R.getClearColor(X),J=R.getClearAlpha(),J<1&&R.setClearColor(16777215,.5),R.clear(),Me&&B.render(Q);const Yt=R.toneMapping;R.toneMapping=Ln;const ee=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),S.setupLightsView(Y),te===!0&&st.setGlobalState(R.clippingPlanes,Y),Dr(A,Q,Y),Ht.updateMultisampleRenderTarget(Et),Ht.updateRenderTargetMipmap(Et),de.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ne=0,Ce=G.length;ne<Ce;ne++){const _e=G[ne],{object:me,geometry:Xe,material:Lt,group:Ze}=_e;if(Lt.side===Pe&&me.layers.test(Y.layers)){const ce=Lt.side;Lt.side=Ye,Lt.needsUpdate=!0,Ih(me,Q,Y,Xe,Lt,Ze),Lt.side=ce,Lt.needsUpdate=!0,Pt=!0}}Pt===!0&&(Ht.updateMultisampleRenderTarget(Et),Ht.updateRenderTargetMipmap(Et))}R.setRenderTarget(St,Tt,It),R.setClearColor(X,J),ee!==void 0&&(Y.viewport=ee),R.toneMapping=Yt}function Dr(A,G,Q){const Y=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,Et=A.length;Z<Et;Z++){const Ct=A[Z],{object:St,geometry:Tt,group:It}=Ct;let Yt=Ct.material;Yt.allowOverride===!0&&Y!==null&&(Yt=Y),St.layers.test(Q.layers)&&Ih(St,G,Q,Tt,Yt,It)}}function Ih(A,G,Q,Y,Z,Et){C!==null&&Z.isNodeMaterial&&C.setObject(A,Z),A.onBeforeRender(R,G,Q,Y,Z,Et),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(R,G,Q,Y,A,Et),Z.transparent===!0&&Z.side===Pe&&Z.forceSinglePass===!1?(Z.side=Ye,Z.needsUpdate=!0,R.renderBufferDirect(Q,G,Y,Z,A,Et),Z.side=li,Z.needsUpdate=!0,R.renderBufferDirect(Q,G,Y,Z,A,Et),Z.side=Pe):R.renderBufferDirect(Q,G,Y,Z,A,Et),A.onAfterRender(R,G,Q,Y,Z,Et)}function Nh(A){let G=0;for(const Q of A)Q.texture!==null&&G++;return G}function Ps(A,G,Q){G.isScene!==!0&&(G=le);const Y=Nt.get(A),Z=S.state.lights,Et=S.state.shadowsArray,Ct=Z.state.version,St=ot.getParameters(A,Z.state,Et,G,Q,S.state.lightProbeGridArray),Tt=ot.getProgramCacheKey(St);let It=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,Y.fog=G.fog;const Yt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=I.get(A.envMap||Y.environment,Yt),Y.envMapRotation=Y.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,It===void 0&&(A.addEventListener("dispose",fe),It=new Map,Y.programs=It,Y.programVariants=new Map);let ee=It.get(Tt);if(ee!==void 0){if(Y.currentProgram===ee&&Y.lightsStateVersion===Ct)return Fh(A,St),ee}else St.uniforms=ot.getUniforms(A),C!==null&&A.isNodeMaterial&&C.build(A,Q,St),A.onBeforeCompile(St,R),ee=ot.acquireProgram(St,Tt),It.set(Tt,ee),Y.uniforms=St.uniforms;const Pt=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pt.clippingPlanes=st.uniform),Fh(A,St),Y.needsLights=V_(A),Y.lightsStateVersion=Ct,Y.needsLights&&(Pt.ambientLightColor.value=Z.state.ambient,Pt.lightProbe.value=Z.state.probe,Pt.sunLights.value=Z.state.sun,Pt.sunLightShadows.value=Z.state.sunShadow,Pt.directionalLights.value=Z.state.directional,Pt.directionalLightShadows.value=Z.state.directionalShadow,Pt.spotLights.value=Z.state.spot,Pt.spotLightShadows.value=Z.state.spotShadow,Pt.rectAreaLights.value=Z.state.rectArea,Pt.ltc_1.value=Z.state.rectAreaLTC1,Pt.ltc_2.value=Z.state.rectAreaLTC2,Pt.pointLights.value=Z.state.point,Pt.pointLightShadows.value=Z.state.pointShadow,Pt.hemisphereLights.value=Z.state.hemi,Pt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Pt.sunShadowCascade.value=Z.state.sunShadowCascade,Pt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Pt.spotLightMatrix.value=Z.state.spotLightMatrix,Pt.spotLightMap.value=Z.state.spotLightMap,Pt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.numLightProbeGrids=Nh(S.state.lightProbeGridArray),Y.currentProgram=ee,Y.uniformsList=null,ee}function k_(A,G,Q,Y,Z){const Et=Nt.get(A),Ct=Et.currentProgram.id+","+Y+","+Z;let St=Et.programVariants.get(Ct);return St===void 0?(St=Ps(A,G,Q),Et.programVariants.set(Ct,St)):(Et.currentProgram=St,Et.uniformsList=null,Et.outputColorSpace=Y,Et.toneMapping=Z),St}function Uh(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=_r.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function Fh(A,G){const Q=Nt.get(A);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function G_(A,G,Q,Y,Z){G.isScene!==!0&&(G=le),Ht.resetTextureUnits();const Et=G.fog,Ct=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?G.environment:null,St=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ie.workingColorSpace,Tt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,It=I.get(Y.envMap||Ct,Tt),Yt=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ee=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Pt=!!Q.morphAttributes.position,ne=!!Q.morphAttributes.normal,Ce=!!Q.morphAttributes.color;let _e=Ln;Y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(_e=R.toneMapping);const me=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Xe=me!==void 0?me.length:0,Lt=Nt.get(Y),Ze=S.state.lights;if(te===!0&&(Wt===!0||A!==k)){const Ee=A===k&&Y.id===V;st.setState(Y,A,Ee)}let ce=!1,xi=!1;Y.version===Lt.__version?Lt.needsLights&&Lt.lightsStateVersion!==Ze.state.version||Z.isBatchedMesh&&Lt.batching===!1||!Z.isBatchedMesh&&Lt.batching===!0||Z.isBatchedMesh&&Lt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Lt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Lt.instancing===!1||!Z.isInstancedMesh&&Lt.instancing===!0||Z.isSkinnedMesh&&Lt.skinning===!1||!Z.isSkinnedMesh&&Lt.skinning===!0||Z.isInstancedMesh&&Lt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Lt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Lt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Lt.instancingMorph===!1&&Z.morphTexture!==null||Lt.envMap!==It||Y.fog===!0&&Lt.fog!==Et||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==st.numPlanes||Lt.numIntersection!==st.numIntersection)||Lt.vertexAlphas!==Yt||Lt.vertexTangents!==ee||Lt.morphTargets!==Pt||Lt.morphNormals!==ne||Lt.morphColors!==Ce||Lt.morphTargetsCount!==Xe||Lt.numLightProbeGrids!==Nh(S.state.lightProbeGridArray)?ce=!0:(Lt.outputColorSpace!==St||Lt.toneMapping!==_e)&&(xi=!0):(ce=!0,Lt.__version=Y.version);let qe=Lt.currentProgram;(ce===!0||xi===!0)&&(qe=xi===!0?k_(Y,G,Z,St,_e):Ps(Y,G,Z),C&&Y.isNodeMaterial&&C.onUpdateProgram(Y,qe,Lt));let Ir=!1,ai=!1,vi=!1;const re=qe.getUniforms(),He=Lt.uniforms;if(gt.useProgram(qe.program)&&(Ir=!0,ai=!0,vi=!0),Y.id!==V&&(V=Y.id,ai=!0),Ir||k!==A){gt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),re.setValue(H,"projectionMatrix",A.projectionMatrix),re.setValue(H,"viewMatrix",A.matrixWorldInverse);const Be=re.map.cameraPosition;Be!==void 0&&Be.setValue(H,Ut.setFromMatrixPosition(A.matrixWorld)),he.logarithmicDepthBuffer&&re.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&re.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),k!==A&&(k=A,ai=!0,vi=!0)}if(Lt.needsLights&&(Ze.state.sunShadowMap.length>0&&re.setValue(H,"sunShadowMap",Ze.state.sunShadowMap,Ht),Ze.state.directionalShadowMap.length>0&&re.setValue(H,"directionalShadowMap",Ze.state.directionalShadowMap,Ht),Ze.state.spotShadowMap.length>0&&re.setValue(H,"spotShadowMap",Ze.state.spotShadowMap,Ht),Ze.state.pointShadowMap.length>0&&re.setValue(H,"pointShadowMap",Ze.state.pointShadowMap,Ht)),Z.isSkinnedMesh){re.setOptional(H,Z,"bindMatrix"),re.setOptional(H,Z,"bindMatrixInverse");const Ee=Z.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),re.setValue(H,"boneTexture",Ee.boneTexture,Ht))}Z.isBatchedMesh&&(re.setOptional(H,Z,"batchingTexture"),re.setValue(H,"batchingTexture",Z._matricesTexture,Ht),re.setOptional(H,Z,"batchingIdTexture"),re.setValue(H,"batchingIdTexture",Z._indirectTexture,Ht),re.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&re.setValue(H,"batchingColorTexture",Z._colorsTexture,Ht));const xn=Q.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&rt.update(Z,Q,qe),(ai||Lt.receiveShadow!==Z.receiveShadow)&&(Lt.receiveShadow=Z.receiveShadow,re.setValue(H,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&G.environment!==null&&(He.envMapIntensity.value=G.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=jm()),ai){if(re.setValue(H,"toneMappingExposure",R.toneMappingExposure),Lt.needsLights&&H_(He,vi),Et&&Y.fog===!0&&mt.refreshFogUniforms(He,Et),mt.refreshMaterialUniforms(He,Y,it,at,S.state.transmissionRenderTarget[A.id]),Lt.needsLights&&Lt.numLightProbeGrids>0){const Ee=M;let Be=0;for(const Vn of S.state.lightProbeGridArray)Vn.texture!==null&&(Ee.textures[Be]=Vn.texture,Ee.min[Be]=Vn.boundingBox.min,Ee.max[Be]=Vn.boundingBox.max,Ee.resolution[Be]=Vn.resolution,Be++);for(const Vn in Ee)Ee[Vn].length=Be;He.probesSH.value=Ee.textures,He.probesMin.value=Ee.min,He.probesMax.value=Ee.max,He.probesResolution.value=Ee.resolution}_r.upload(H,Uh(Lt),He,Ht)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(_r.upload(H,Uh(Lt),He,Ht),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&re.setValue(H,"center",Z.center),re.setValue(H,"modelViewMatrix",Z.modelViewMatrix),re.setValue(H,"normalMatrix",Z.normalMatrix),re.setValue(H,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){const Ee=Y.uniformsGroups;for(let Be=0,Vn=Ee.length;Be<Vn;Be++){const zh=Ee[Be];Ft.update(zh,qe),Ft.bind(zh,qe)}}return qe}function H_(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.sunLights.needsUpdate=G,A.sunLightShadows.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function V_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,G,Q){const Y=Nt.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Nt.get(A.texture).__webglTexture=G,Nt.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const Q=Nt.get(A);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,Q=0){K=A,F=G,z=Q;let Y=null,Z=!1,Et=!1;if(A){const St=Nt.get(A);if(St.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(H.FRAMEBUFFER,St.__webglFramebuffer),O.copy(A.viewport),$.copy(A.scissor),et=A.scissorTest,gt.viewport(O),gt.scissor($),gt.setScissorTest(et),V=-1;return}else if(St.__webglFramebuffer===void 0)Ht.setupRenderTarget(A);else if(St.__hasExternalTextures)Ht.rebindTextures(A,Nt.get(A.texture).__webglTexture,Nt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Yt=A.depthTexture;if(St.__boundDepthTexture!==Yt){if(Yt!==null&&Nt.has(Yt)&&(A.width!==Yt.image.width||A.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(A)}}const Tt=A.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(Et=!0);const It=Nt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(It[G])?Y=It[G][Q]:Y=It[G],Z=!0):A.samples>0&&Ht.useMultisampledRTT(A)===!1?Y=Nt.get(A).__webglMultisampledFramebuffer:Array.isArray(It)?Y=It[Q]:Y=It,O.copy(A.viewport),$.copy(A.scissor),et=A.scissorTest}else O.copy(ft).multiplyScalar(it).floor(),$.copy(At).multiplyScalar(it).floor(),et=xt;if(Q!==0&&(Y=P),gt.bindFramebuffer(H.FRAMEBUFFER,Y)&&gt.drawBuffers(A,Y),gt.viewport(O),gt.scissor($),gt.setScissorTest(et),Z){const St=Nt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,St.__webglTexture,Q)}else if(Et){const St=G;for(let Tt=0;Tt<A.textures.length;Tt++){const It=Nt.get(A.textures[Tt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Tt,It.__webglTexture,Q,St)}}else if(A!==null&&Q!==0){const St=Nt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,St.__webglTexture,Q)}V=-1};function Oh(A){const G=Nt.get(A);return(G.__readFormat!==A.format||G.__readType!==A.type)&&(G.__readFormat=A.format,G.__readType=A.type,G.__formatReadable=he.textureFormatReadable(A.format),G.__typeReadable=he.textureTypeReadable(A.type)),G}this.readRenderTargetPixels=function(A,G,Q,Y,Z,Et,Ct,St=0){if(!(A&&A.isWebGLRenderTarget)){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Nt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Tt=Tt[Ct],Array.isArray(Tt)&&(Tt=Tt[0])),Tt){gt.bindFramebuffer(H.FRAMEBUFFER,Tt);try{const It=A.textures[St],Yt=It.format,ee=It.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+St);const Pt=Oh(It);if(Pt.__formatReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-Y&&Q>=0&&Q<=A.height-Z&&H.readPixels(G,Q,Y,Z,pt.convert(Yt),pt.convert(ee),Et)}finally{const It=K!==null?Nt.get(K).__webglFramebuffer:null;gt.bindFramebuffer(H.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(A,G,Q,Y,Z,Et,Ct,St=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=Nt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Tt=Tt[Ct],Array.isArray(Tt)&&(Tt=Tt[0])),Tt)if(G>=0&&G<=A.width-Y&&Q>=0&&Q<=A.height-Z){gt.bindFramebuffer(H.FRAMEBUFFER,Tt);const It=A.textures[St],Yt=It.format,ee=It.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+St);const Pt=Oh(It);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ne),H.bufferData(H.PIXEL_PACK_BUFFER,Et.byteLength,H.STREAM_READ),H.readPixels(G,Q,Y,Z,pt.convert(Yt),pt.convert(ee),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);const Ce=K!==null?Nt.get(K).__webglFramebuffer:null;gt.bindFramebuffer(H.FRAMEBUFFER,Ce);const _e=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Mu(H,_e,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ne),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Et),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(ne),H.deleteSync(_e),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,Q=0){const Y=Math.pow(2,-Q),Z=Math.floor(A.image.width*Y),Et=Math.floor(A.image.height*Y),Ct=G!==null?G.x:0,St=G!==null?G.y:0;Ht.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,Q,0,0,Ct,St,Z,Et),gt.unbindTexture()},this.copyTextureToTexture=function(A,G,Q=null,Y=null,Z=0,Et=0){let Ct,St,Tt,It,Yt,ee,Pt,ne,Ce;const _e=A.isCompressedTexture?A.mipmaps[Et]:A.image;if(Q!==null)Ct=Q.max.x-Q.min.x,St=Q.max.y-Q.min.y,Tt=Q.isBox3?Q.max.z-Q.min.z:1,It=Q.min.x,Yt=Q.min.y,ee=Q.isBox3?Q.min.z:0;else{const re=Math.pow(2,-Z);Ct=Math.floor(_e.width*re),St=Math.floor(_e.height*re),A.isDataArrayTexture?Tt=_e.depth:A.isData3DTexture?Tt=Math.floor(_e.depth*re):Tt=1,It=0,Yt=0,ee=0}Y!==null?(Pt=Y.x,ne=Y.y,Ce=Y.z):(Pt=0,ne=0,Ce=0);const me=pt.convert(G.format),Xe=pt.convert(G.type);let Lt;G.isData3DTexture?(Ht.setTexture3D(G,0),Lt=H.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Ht.setTexture2DArray(G,0),Lt=H.TEXTURE_2D_ARRAY):(Ht.setTexture2D(G,0),Lt=H.TEXTURE_2D),gt.activeTexture(H.TEXTURE0),gt.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),gt.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),gt.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);const Ze=gt.getParameter(H.UNPACK_ROW_LENGTH),ce=gt.getParameter(H.UNPACK_IMAGE_HEIGHT),xi=gt.getParameter(H.UNPACK_SKIP_PIXELS),qe=gt.getParameter(H.UNPACK_SKIP_ROWS),Ir=gt.getParameter(H.UNPACK_SKIP_IMAGES);gt.pixelStorei(H.UNPACK_ROW_LENGTH,_e.width),gt.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_e.height),gt.pixelStorei(H.UNPACK_SKIP_PIXELS,It),gt.pixelStorei(H.UNPACK_SKIP_ROWS,Yt),gt.pixelStorei(H.UNPACK_SKIP_IMAGES,ee);const ai=A.isDataArrayTexture||A.isData3DTexture,vi=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const re=Nt.get(A),He=Nt.get(G),xn=Nt.get(re.__renderTarget),Ee=Nt.get(He.__renderTarget);gt.bindFramebuffer(H.READ_FRAMEBUFFER,xn.__webglFramebuffer),gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Be=0;Be<Tt;Be++)ai&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Nt.get(A).__webglTexture,Z,ee+Be),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Nt.get(G).__webglTexture,Et,Ce+Be)),H.blitFramebuffer(It,Yt,It+Ct,Yt+St,Pt,ne,Pt+Ct,ne+St,H.DEPTH_BUFFER_BIT,H.NEAREST);gt.bindFramebuffer(H.READ_FRAMEBUFFER,null),gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||Nt.has(A)){const re=Nt.get(A),He=Nt.get(G);gt.bindFramebuffer(H.READ_FRAMEBUFFER,w),gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,N);for(let xn=0;xn<Tt;xn++)ai?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,re.__webglTexture,Z,ee+xn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,re.__webglTexture,Z),vi?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,He.__webglTexture,Et,Ce+xn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,He.__webglTexture,Et),Z!==0?H.blitFramebuffer(It,Yt,It+Ct,Yt+St,Pt,ne,Pt+Ct,ne+St,H.COLOR_BUFFER_BIT,H.NEAREST):vi?H.copyTexSubImage3D(Lt,Et,Pt,ne,Ce+xn,It,Yt,Ct,St):H.copyTexSubImage2D(Lt,Et,Pt,ne,It,Yt,Ct,St);gt.bindFramebuffer(H.READ_FRAMEBUFFER,null),gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else vi?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Lt,Et,Pt,ne,Ce,Ct,St,Tt,me,Xe,_e.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(Lt,Et,Pt,ne,Ce,Ct,St,Tt,me,_e.data):H.texSubImage3D(Lt,Et,Pt,ne,Ce,Ct,St,Tt,me,Xe,_e):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Et,Pt,ne,Ct,St,me,Xe,_e.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Et,Pt,ne,_e.width,_e.height,me,_e.data):H.texSubImage2D(H.TEXTURE_2D,Et,Pt,ne,Ct,St,me,Xe,_e);gt.pixelStorei(H.UNPACK_ROW_LENGTH,Ze),gt.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ce),gt.pixelStorei(H.UNPACK_SKIP_PIXELS,xi),gt.pixelStorei(H.UNPACK_SKIP_ROWS,qe),gt.pixelStorei(H.UNPACK_SKIP_IMAGES,Ir),Et===0&&G.generateMipmaps===!0&&G.mipmapsAutoUpdate===!0&&H.generateMipmap(Lt),gt.unbindTexture()},this.initRenderTarget=function(A){Nt.get(A).__webglFramebuffer===void 0&&Ht.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ht.setTextureCube(A,0):A.isData3DTexture?Ht.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ht.setTexture2DArray(A,0):Ht.setTexture2D(A,0),gt.unbindTexture()},this.resetState=function(){F=0,z=0,K=null,gt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}async function Ma(i){const t=new Uint8Array(i),e=new DataView(i);let n=8,s=0,r=0,o=0,a=0,l=0;const c=[];for(;n<t.length;){const _=e.getUint32(n),m=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]);if(m==="IHDR")s=e.getUint32(n+8),r=e.getUint32(n+12),o=t[n+16],a=t[n+17],l=t[n+20];else if(m==="IDAT")c.push(t.subarray(n+8,n+8+_));else if(m==="IEND")break;n+=12+_}if(o!==8||a!==2&&a!==6||l)throw new Error("Unsupported terrain image format");const u=a===2?3:4,f=new Blob(c).stream().pipeThrough(new DecompressionStream("deflate")),d=new Uint8Array(await new Response(f).arrayBuffer()),h=s*u,p=new Uint8Array(h*r);for(let _=0;_<r;_++){const m=d[_*(h+1)],g=_*(h+1)+1,v=_*h;for(let y=0;y<h;y++){const M=y>=u?p[v+y-u]:0,b=_>0?p[v-h+y]:0,S=y>=u&&_>0?p[v-h+y-u]:0;let x=d[g+y];if(m===1)x+=M;else if(m===2)x+=b;else if(m===3)x+=M+b>>1;else if(m===4){const E=Math.abs(b-S),D=Math.abs(M-S),R=Math.abs(M+b-2*S);x+=E<=D&&E<=R?M:D<=R?b:S}p[v+y]=x&255}}return{width:s,height:r,channels:u,data:p}}const eg=["height.png","relief.webp","cover.png","ground.webp","lights.webp","roads.bin","buildings.bin","map.json","flood.json","flood-1974.png","flood-2017.png","flood-2022.png","flood-aep1.png","flood-aep2.png","flood-aep5.png","flood-creek1.png","flood-all1.png","flood-tide.png"];function ng(i,t=""){const e=s=>i+s+(t?"?v="+t:""),n={};for(const s of eg){const r=/^flood-(.+)\.png$/.exec(s);r&&(n[r[1]]=e(s))}return{height:e("height.png"),relief:e("relief.webp"),cover:e("cover.png"),ground:e("ground.webp"),lights:e("lights.webp"),roads:e("roads.bin"),buildings:e("buildings.bin"),map:e("map.json"),flood:e("flood.json"),floodLevels:n}}const Ss=1,Sa=2,ys=4,Xc=8;function ig(i){const t=new DataView(i);if(t.getUint32(0,!0)!==827475788)throw new Error("Unexpected road data");const e=t.getUint32(4,!0),n=new Array(e);let s=8;for(let r=0;r<e;r++){const o=t.getUint8(s),a=t.getUint8(s+1),l=t.getUint16(s+2,!0),c=t.getUint16(s+4,!0);let u=t.getInt32(s+6,!0),f=t.getInt32(s+10,!0);s+=14;const d=new Float32Array(c*2);d[0]=u/4,d[1]=f/4;for(let h=1;h<c;h++)u+=t.getInt16(s,!0),f+=t.getInt16(s+2,!0),s+=4,d[h*2]=u/4,d[h*2+1]=f/4;n[r]={cls:o,flags:a,name:l,pts:d}}return n}function sg(i,t){const e=new DataView(i);if(e.getUint32(0,!0)!==826427212)throw new Error("Unexpected building data");const n=e.getUint32(4,!0),s=new Uint16Array(i,8,n),r=new Uint16Array(i,8+2*n,n),o=new Uint8Array(i,8+4*n,5*n),a={count:n,x:new Float32Array(n),z:new Float32Array(n),w:new Float32Array(n),d:new Float32Array(n),angle:new Float32Array(n),eave:new Float32Array(n),roof:new Float32Array(n)};for(let l=0;l<n;l++)a.x[l]=(s[l]/65535-.5)*t[0],a.z[l]=(r[l]/65535-.5)*t[1],a.w[l]=o[l]/2,a.d[l]=o[n+l]/2,a.angle[l]=o[2*n+l]/256*Math.PI,a.eave[l]=o[3*n+l]/4,a.roof[l]=o[4*n+l]/4;return a}function rg(i,t,e){const n=new Uint8Array(t*e),s=document.createElement("canvas");s.width=t,s.height=e;const r=s.getContext("2d");if(!r)return n;r.drawImage(i.image,0,0,t,e);const o=r.getImageData(0,0,t,e).data;for(let a=0;a<t*e;a++)n[a]=o[a*4];return n}async function og(i,t,e){let s=0;const r=S=>x=>(t(++s/8,S),x),o=async(S,x)=>{const E=await fetch(S,{signal:e});if(!E.ok)throw new Error(`Could not load ${x}`);return E},a=S=>new Id().loadAsync(S);t(0,"Fetching map data");const[l,c,u,f,d,h,p,_]=await Promise.all([o(i.map,"the map data").then(S=>S.json()).then(r("Suburbs and boundaries")),o(i.height,"the terrain").then(S=>S.arrayBuffer()).then(Ma).then(r("Terrain")),a(i.ground).then(r("Ground texture")),a(i.relief).then(r("Relief")),a(i.lights).then(r("City lights")),o(i.roads,"the streets").then(S=>S.arrayBuffer()).then(ig).then(r("Streets")),o(i.buildings,"the buildings").then(S=>S.arrayBuffer()).then(r("Buildings")),o(i.cover,"the tree cover").then(S=>S.arrayBuffer()).then(Ma).then(r("Bushland"))]),m=c.width*c.height,g=new Float32Array(m),v=c.channels;for(let S=0;S<m;S++)g[S]=(c.data[S*v]<<8|c.data[S*v+1])/l.meta.heightScale-l.meta.heightOffset;u.colorSpace=Ue;for(const S of[u,f,d])S.generateMipmaps=!0,S.minFilter=In;const y=_.width*_.height,M=new Uint8Array(y);for(let S=0;S<y;S++)M[S]=_.data[S*_.channels]>127?1:0;const b={w:_.width,h:_.height,wooded:M,built:rg(d,_.width,_.height)};return{map:l,heights:g,ground:u,relief:f,lights:d,roads:h,buildings:sg(p,l.meta.size),cover:b}}const vr=new Gt;function U(i){return vr.set(i),[vr.r,vr.g,vr.b]}function zt(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function ag(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function si(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class sn{constructor(){ht(this,"pos",[]);ht(this,"nor",[]);ht(this,"col",[]);ht(this,"glo",[]);ht(this,"ox",0);ht(this,"oy",0);ht(this,"oz",0);ht(this,"c",1);ht(this,"s",0)}get vertexCount(){return this.pos.length/3}frame(t=0,e=0,n=0,s=0){return this.ox=t,this.oy=e,this.oz=n,this.c=Math.cos(s),this.s=Math.sin(s),this}wx(t,e){return this.ox+t*this.c+e*this.s}wz(t,e){return this.oz-t*this.s+e*this.c}tri(t,e,n,s,r,o,a,l,c,u,f=0){const d=this.wx(t,n),h=this.wz(t,n),p=this.oy+e,_=this.wx(s,o),m=this.wz(s,o),g=this.oy+r,v=this.wx(a,c),y=this.wz(a,c),M=this.oy+l,b=_-d,S=g-p,x=m-h,E=v-d,D=M-p,R=y-h;let L=S*R-x*D,C=x*E-b*R,P=b*D-S*E;const w=Math.hypot(L,C,P)||1;L/=w,C/=w,P/=w,this.pos.push(d,p,h,_,g,m,v,M,y),this.nor.push(L,C,P,L,C,P,L,C,P),this.col.push(u[0],u[1],u[2],u[0],u[1],u[2],u[0],u[1],u[2]),this.glo.push(f,f,f)}quad(t,e,n,s,r,o,a,l,c,u,f,d,h,p=0){this.tri(t,e,n,s,r,o,a,l,c,h,p),this.tri(t,e,n,a,l,c,u,f,d,h,p)}box(t,e,n,s,r,o,a,l=void 0,c=null,u=0){this.quad(t,e,o,s,e,o,s,r,o,t,r,o,a,u),this.quad(s,e,n,t,e,n,t,r,n,s,r,n,a,u),this.quad(s,e,o,s,e,n,s,r,n,s,r,o,a,u),this.quad(t,e,n,t,e,o,t,r,o,t,r,n,a,u),l!==null&&this.quad(t,r,o,s,r,o,s,r,n,t,r,n,l??a,u),c&&this.quad(t,e,n,s,e,n,s,e,o,t,e,o,c,u)}cyl(t,e,n,s,r,o,a,l,c=null,u=0){const f=e+o;for(let d=0;d<a;d++){const h=d/a*Math.PI*2,p=(d+1)/a*Math.PI*2,_=Math.cos(h),m=Math.sin(h),g=Math.cos(p),v=Math.sin(p);r>1e-4?(this.quad(t+_*s,e,n+m*s,t+_*r,f,n+m*r,t+g*r,f,n+v*r,t+g*s,e,n+v*s,l,u),c&&this.tri(t,f,n,t+g*r,f,n+v*r,t+_*r,f,n+m*r,c,u)):this.tri(t+_*s,e,n+m*s,t,f,n,t+g*s,e,n+v*s,l,u)}}blob(t,e,n,s,r,o,a,l,c,u,f=0){const d=u??c;for(let h=0;h<l;h++){const p=h/l*Math.PI,_=(h+1)/l*Math.PI,m=Math.cos(p),g=Math.cos(_),v=Math.sin(p),y=Math.sin(_),M=ag(c,d,1-(h+.5)/l);for(let b=0;b<a;b++){const S=b/a*Math.PI*2,x=(b+1)/a*Math.PI*2,E=Math.cos(S),D=Math.sin(S),R=Math.cos(x),L=Math.sin(x),C=t+E*v*s,P=e+m*r,w=n+D*v*o,N=t+R*v*s,F=n+L*v*o,z=t+E*y*s,K=e+g*r,V=n+D*y*o,k=t+R*y*s,O=n+L*y*o;h>0&&this.tri(C,P,w,N,P,F,k,K,O,M,f),h<l-1&&this.tri(C,P,w,k,K,O,z,K,V,M,f)}}}walls(t,e,n,s,r=0){const o=t.length/2,a=Mr(t)>0;for(let l=0;l<o;l++){const c=(l+1)%o,u=t[l*2],f=t[l*2+1],d=t[c*2],h=t[c*2+1];a?this.quad(d,e,h,u,e,f,u,n,f,d,n,h,s,r):this.quad(u,e,f,d,e,h,d,n,h,u,n,f,s,r)}}cap(t,e,n,s=0){const r=t.length/2,o=[];for(let l=0;l<r;l++)o.push(new Ot(t[l*2],t[l*2+1]));const a=_s.triangulateShape(o,[]);for(const l of a){const c=o[l[0]],u=o[l[1]],f=o[l[2]];(u.x-c.x)*(f.y-c.y)-(u.y-c.y)*(f.x-c.x)>0?this.tri(c.x,e,c.y,f.x,e,f.y,u.x,e,u.y,n,s):this.tri(c.x,e,c.y,u.x,e,u.y,f.x,e,f.y,n,s)}}build(){const t=new we;return t.setAttribute("position",new qt(new Float32Array(this.pos),3)),t.setAttribute("normal",new qt(new Float32Array(this.nor),3)),t.setAttribute("color",new qt(new Float32Array(this.col),3)),t.setAttribute("glow",new qt(new Float32Array(this.glo),1)),t.computeBoundingSphere(),t.computeBoundingBox(),this.pos=[],this.nor=[],this.col=[],this.glo=[],t}}function Mr(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}const ri={value:0};function Es(i={}){const t=new mn({vertexColors:!0,roughness:i.roughness??.86,metalness:0,side:i.side??Pe}),e=new Gt(i.glowColor??16761722);return t.onBeforeCompile=n=>{n.uniforms.uNight=ri,n.uniforms.uGlowColor={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float glow;
varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;
uniform float uNight;
uniform vec3 uGlowColor;`).replace("#include <emissivemap_fragment>",i.ownGlow?`#include <emissivemap_fragment>
totalEmissiveRadiance += (vGlow < 0.0 ? vColor.rgb * -vGlow : uGlowColor * vGlow) * uNight * 2.4;`:`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlowColor * vGlow * uNight * 2.4;`)},t.customProgramCacheKey=()=>i.ownGlow?"inverloch-model-own":"inverloch-model",t}async function lg(i,t){const e=await fetch(i,{signal:t});if(!e.ok)throw new Error("Could not load the flood scenarios");return e.json()}const qc=8;class cg{constructor(t,e,n,s){ht(this,"mesh");ht(this,"drop",{value:0});ht(this,"time");ht(this,"current","");ht(this,"level");ht(this,"wet");this.hf=t,this.info=e,this.levelUrls=s,this.time=n;const r=new mn({color:16777215,roughness:.22,metalness:0,transparent:!0,depthWrite:!1});r.onBeforeCompile=o=>{o.uniforms.uDrop=this.drop,o.uniforms.uTime=this.time,o.uniforms.uNight=ri,o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
attribute float aWet;
attribute float aGround;
uniform float uDrop;
varying float vWet;
varying float vDepth;
varying vec3 vWPos;`).replace("#include <begin_vertex>",`vec3 transformed = vec3(position.x, position.y - uDrop, position.z);
          vWet = aWet;
          vDepth = transformed.y - aGround;
          vWPos = transformed;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uNight;
varying float vWet;
varying float vDepth;
varying vec3 vWPos;`).replace("#include <color_fragment>",`#include <color_fragment>
          // outside the flooded cells the sheet is not water at all
          if (vWet < 0.5 || vDepth < -0.4) discard;
          float deep = smoothstep(0.0, 6.0, vDepth);
          diffuseColor.rgb = mix(vec3(0.33, 0.62, 0.80), vec3(0.05, 0.20, 0.45), deep);
          diffuseColor.a = mix(0.62, 0.9, smoothstep(0.0, 2.5, vDepth));`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          {
            // ripples only up close: from further away they would read as stripes
            float nearby = 1.0 - smoothstep(500.0, 3500.0, length(cameraPosition - vWPos));
            vec2 p = vWPos.xz * 0.05 + vec2(uTime * 0.05, uTime * 0.03);
            vec2 ripple = vec2(sin(p.x * 3.1 + sin(p.y * 2.3)), cos(p.y * 2.7 + sin(p.x * 1.9))) * 0.03 * nearby;
            normal = normalize((viewMatrix * vec4(ripple.x, 1.0, ripple.y, 0.0)).xyz);
          }`)},r.customProgramCacheKey=()=>"logan-flood",this.mesh=new $t(new we,r),this.mesh.visible=!1,this.mesh.renderOrder=40,this.mesh.name="flood",this.mesh.frustumCulled=!1}get shown(){return this.mesh.visible?this.current:""}async show(t,e){const n=this.levelUrls[t];if(!n)throw new Error("That flood has no water levels");const s=await fetch(n,{signal:e});if(!s.ok)throw new Error("Could not load the flood");const r=await Ma(await s.arrayBuffer()),{hf:o}=this,[a]=this.info.grid,l=o.step,c=o.nx*o.nz,u=new Float32Array(c*3),f=new Float32Array(c),d=new Float32Array(c);for(let m=0;m<o.nz;m++)for(let g=0;g<o.nx;g++){const v=m*o.nx+g,y=(m*l*a+g*l)*r.channels;u[v*3]=o.xMin+g*o.dx,u[v*3+1]=(r.data[y]<<8|r.data[y+1])/this.info.levelScale-this.info.levelOffset,u[v*3+2]=o.zMin+m*o.dz,f[v]=r.data[y+2]>127?1:0,d[v]=o.y[v]}const h=[];for(let m=0;m<o.nz-1;m++)for(let g=0;g<o.nx-1;g++){const v=m*o.nx+g,y=v+1,M=v+o.nx,b=M+1;f[v]+f[y]+f[M]+f[b]>0&&h.push(v,M,y,y,M,b)}const p=new we;p.setAttribute("position",new qt(u,3)),p.setAttribute("aWet",new qt(f,1)),p.setAttribute("aGround",new qt(d,1));const _=new Float32Array(c*3);for(let m=0;m<c;m++)_[m*3+1]=1;p.setAttribute("normal",new qt(_,3)),p.setIndex(h),this.mesh.geometry.dispose(),this.mesh.geometry=p,this.mesh.visible=!0,this.current=t,this.level=new Float32Array(c);for(let m=0;m<c;m++)this.level[m]=u[m*3+1];this.wet=f}hide(){this.mesh.visible=!1}surfaceAt(t,e,n=!1){const{hf:s}=this;if(!this.mesh.visible||!this.level||!this.wet||!s.inside(t,e))return-1/0;const r=Math.round((e-s.zMin)/s.dz)*s.nx+Math.round((t-s.xMin)/s.dx);if(!this.wet[r])return-1/0;const o=this.level[r]-(n?0:this.drop.value);return o>s.yAt(t,e)?o:-1/0}setLevel(t){this.drop.value=(1-se.clamp(t,0,1))*qc}}const hg='.lgn-label{position:absolute;left:0;top:0;margin:0;white-space:nowrap;will-change:transform;font-family:Space Grotesk,system-ui,sans-serif;line-height:1}button.lgn-label{pointer-events:auto;cursor:pointer}.lgn-label--suburb{padding:4px 6px;border:0;background:none;color:#fff;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;text-shadow:0 1px 2px rgba(8,22,28,.95),0 0 6px rgba(8,22,28,.85),0 0 2px rgba(8,22,28,.9)}.lgn-label--suburb:hover{color:#ffd200}.lgn-label--water{color:#eaf7ff;font-size:13px;font-style:italic;font-weight:500;letter-spacing:.1em;text-shadow:0 1px 2px rgba(0,40,70,.95),0 0 8px rgba(0,40,70,.75)}.lgn-label--region{color:#ffffffe6;font-size:15px;font-weight:600;letter-spacing:.32em;text-transform:uppercase;text-shadow:0 1px 3px rgba(8,22,28,.85),0 0 10px rgba(8,22,28,.6)}.lgn-label--division{padding:4px 8px;border-radius:4px;background:#083a54eb;color:#d6f1ff;font-size:12px;font-weight:600}.lgn-label--road{padding:3px 6px;border-radius:3px;background:#fade8ef0;color:#3a2a06;font-size:10.5px;font-weight:600}.lgn-label--place,.lgn-label--nature,.lgn-label--station,.lgn-label--peak{padding:6px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:#0c1c24eb;color:#fff;font-size:12px;font-weight:600}.lgn-label--place:after,.lgn-label--nature:after,.lgn-label--station:after,.lgn-label--peak:after{content:"";position:absolute;left:50%;bottom:-9px;width:1px;height:8px;background:#fffc}.lgn-label--place:hover{background:#0b7d9c}.lgn-label--nature{background:#183826f0}.lgn-label--nature:hover{background:#2c7a4b}.lgn-label--station{padding:4px 8px;border-color:#0c1c2459;background:#f4f2eaf5;color:#1c2a30;font-size:11px}.lgn-label--station:hover{background:#fff}.lgn-label--peak{background:#402c14f0}.lgn-label--peak:before{content:"▲ ";color:#ffd200;font-size:9px}.lgn-label--peak:hover{background:#7a5520}.lgn-range{-moz-appearance:none;appearance:none;-webkit-appearance:none;height:28px;background:transparent;cursor:pointer}.lgn-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#b9d7e6,#4f9bc4 55%,#173f7a)}.lgn-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#b9d7e6,#4f9bc4 55%,#173f7a)}.lgn-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.lgn-range::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.lgn-range:focus-visible{outline:2px solid #ffd200;outline-offset:4px;border-radius:4px}',Yc={type:"change"},ya={type:"start"},Kc={type:"end"},Sr=new na,Zc=new wn,ug=Math.cos(70*se.DEG2RAD),Ie=new W,Qe=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ea=1e-6;class dg extends Bd{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$e.ROTATE,MIDDLE:$e.DOLLY,RIGHT:$e.PAN},this.touches={ONE:Wn.ROTATE,TWO:Wn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Zn,this._lastTargetPosition=new W,this._quat=new Zn().setFromUnitVectors(t.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dr,this._sphericalDelta=new dr,this._scale=1,this._panOffset=new W,this._rotateStart=new Ot,this._rotateEnd=new Ot,this._rotateDelta=new Ot,this._panStart=new Ot,this._panEnd=new Ot,this._panDelta=new Ot,this._dollyStart=new Ot,this._dollyEnd=new Ot,this._dollyDelta=new Ot,this._dollyDirection=new W,this._mouse=new Ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=pg.bind(this),this._onPointerDown=fg.bind(this),this._onPointerUp=mg.bind(this),this._onContextMenu=yg.bind(this),this._onMouseWheel=xg.bind(this),this._onKeyDown=vg.bind(this),this._onTouchStart=Mg.bind(this),this._onTouchMove=Sg.bind(this),this._onMouseDown=gg.bind(this),this._onMouseMove=_g.bind(this),this._interceptControlDown=Eg.bind(this),this._interceptControlUp=bg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ae.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yc),this.update(),this.state=ae.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ie.copy(e).sub(this.target),Ie.applyQuaternion(this._quat),this._spherical.setFromVector3(Ie),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Qe:n>Math.PI&&(n-=Qe),s<-Math.PI?s+=Qe:s>Math.PI&&(s-=Qe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ie.setFromSpherical(this._spherical),Ie.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ie),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ie.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new W(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ie.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Sr.origin.copy(this.object.position),Sr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Sr.direction))<ug?this.object.lookAt(this.target):(Zc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Sr.intersectPlane(Zc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ea||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ea||this._lastTargetPosition.distanceToSquared(this.target)>Ea?(this.dispatchEvent(Yc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Qe/60*this.autoRotateSpeed*t:Qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ie.setFromMatrixColumn(e,0),Ie.multiplyScalar(-t),this._panOffset.add(Ie)}_panUp(t,e){this.screenSpacePanning===!0?Ie.setFromMatrixColumn(e,1):(Ie.setFromMatrixColumn(e,0),Ie.crossVectors(this.object.up,Ie)),Ie.multiplyScalar(t),this._panOffset.add(Ie)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ie.copy(s).sub(this.target);let r=Ie.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function fg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function pg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function mg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kc),this.state=ae.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function gg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case $e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ae.DOLLY;break;case $e.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}break;case $e.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(ya)}function _g(i){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function xg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(i.preventDefault(),this.dispatchEvent(ya),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Kc))}function vg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Mg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Wn.ROTATE:if(this.enableRotate===!1){this.state=ae.NONE;break}this._handleTouchStartRotate(i),this.state=ae.TOUCH_ROTATE;break;case Wn.PAN:if(this.enablePan===!1){this.state=ae.NONE;break}this._handleTouchStartPan(i),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case Wn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ae.TOUCH_DOLLY_PAN;break;case Wn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(ya)}function Sg(i){switch(this._trackPointer(i),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ae.NONE}}function yg(i){this.enabled!==!1&&i.preventDefault()}function Eg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ba=new wn,yr=new cc,Wi=new Ot,wa=new W;class wg extends dg{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:$e.PAN,MIDDLE:$e.DOLLY,RIGHT:$e.ROTATE},this.touches={ONE:Wn.PAN,TWO:Wn.DOLLY_ROTATE},this._panWorldStart=new W}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;ba.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();Wi.x=(t.clientX-n.left)/n.width*2-1,Wi.y=-((t.clientY-n.top)/n.height)*2+1,yr.setFromCamera(Wi,this.object),yr.ray.intersectPlane(ba,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const n=this.domElement.getBoundingClientRect();Wi.x=(t.clientX-n.left)/n.width*2-1,Wi.y=-((t.clientY-n.top)/n.height)*2+1,yr.setFromCamera(Wi,this.object),yr.ray.intersectPlane(ba,wa)&&(wa.sub(this._panWorldStart),this._panOffset.copy(wa).negate(),this.update())}}const Gn={day:{sunDir:[-.42,.78,-.46],sunColor:16774109,sunIntensity:3.1,hemiSky:13953279,hemiGround:9280120,hemiIntensity:1.25,zenith:4163279,horizon:13625078,below:1582638,sunGlow:1,shallow:7129789,deep:1201018,waterSky:12903158,foam:1,night:0,exposure:1},golden:{sunDir:[-.84,.22,.36],sunColor:16756848,sunIntensity:3,hemiSky:15781309,hemiGround:6973032,hemiIntensity:1.15,zenith:4153244,horizon:16760970,below:1645863,sunGlow:1.6,shallow:7320486,deep:1390942,waterSky:16763040,foam:.9,night:.25,exposure:1},night:{sunDir:[.38,.72,-.42],sunColor:10467071,sunIntensity:.5,hemiSky:3821436,hemiGround:1053980,hemiIntensity:.55,zenith:396056,horizon:1582922,below:263948,sunGlow:.5,shallow:1920092,deep:331552,waterSky:2242140,foam:.45,night:1,exposure:1.05}},Tg=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
  gl_Position = p.xyww;
}`,Ag=`
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
}`;class Rg{constructor(t,e,n){ht(this,"sun",new Od(16777215,3));ht(this,"hemi",new Nd(16777215,8947848,1));ht(this,"sky");ht(this,"sunDir",new W);ht(this,"horizon",new Gt);ht(this,"skyUniforms");ht(this,"from");ht(this,"to");ht(this,"t",1);ht(this,"mode","day");this.renderer=t,this.water=e,this.from=this.to=Gn.day,this.skyUniforms={uZenith:{value:new Gt},uHorizon:{value:new Gt},uBelow:{value:new Gt},uSunDir:{value:new W},uSunColor:{value:new Gt},uSunGlow:{value:1},uNight:{value:0}},this.sky=new $t(new cr(1,32,16),new ni({uniforms:this.skyUniforms,vertexShader:Tg,fragmentShader:Ag,side:Ye,depthWrite:!1,depthTest:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,n>0&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(n,n)),this.apply(1)}set(t,e=!1){t===this.mode&&this.t>=1||(this.from=this.snapshot(),this.to=Gn[t],this.mode=t,this.t=e?1:0,this.apply(this.t))}update(t){return this.t>=1?!1:(this.t=Math.min(1,this.t+t/1.4),this.apply(this.t),!0)}aimShadow(t,e){if(!this.sun.castShadow)return;const n=se.clamp(e*.7,140,2400),s=this.sun.shadow,r=s.camera,o=n*2/s.mapSize.x,a=Math.round(t.x/o)*o,l=Math.round(t.z/o)*o,c=n*2.4+300;this.sun.target.position.set(a,0,l),this.sun.position.set(a,0,l).addScaledVector(this.sunDir,c),this.sun.target.updateMatrixWorld(),r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=1,r.far=c*2+400,r.updateProjectionMatrix(),s.bias=-.3/(r.far-r.near),s.normalBias=se.clamp(o*1.6,.06,1.2))}setSolar(t,e={rise:360,set:1230,noon:70}){const n=(t%1440+1440)%1440,{rise:s,set:r}=e;let o,a;if(n>=s&&n<=r)a=(n-s)/(r-s),o=Math.sin(Math.PI*a)*e.noon;else{const _=((n<s?n+1440:n)-r)/(1440-(r-s));a=_<.5?1:0,o=-Math.sin(Math.PI*_)*40}const l=se.degToRad(110*(1-2*a)),c=se.degToRad(Math.max(o,5)),u=[Math.sin(l)*Math.cos(c),Math.sin(c),-Math.cos(l)*Math.cos(c)];let f;o>=25?f=Gn.day:o>=6?f=Ta(Gn.golden,Gn.day,(o-6)/19):o>=-6?f=Ta(Gn.night,Gn.golden,(o+6)/12):f=Gn.night;const d=se.clamp((2-o)/6,0,1),h=Gn.night.sunDir,p=[u[0]+(h[0]-u[0])*d,u[1]+(h[1]-u[1])*d,u[2]+(h[2]-u[2])*d];this.from=this.to={...f,sunDir:p},this.mode=o>=25?"day":o>=-6?"golden":"night",this.apply(1)}snapshot(){return Ta(this.from,this.to,Cg(this.t))}apply(t){this.t=t;const e=this.snapshot();this.sunDir.set(...e.sunDir).normalize(),this.sun.color.set(e.sunColor),this.sun.intensity=e.sunIntensity,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const n=this.skyUniforms;if(n.uZenith.value.set(e.zenith),n.uHorizon.value.set(e.horizon),n.uBelow.value.set(e.below),n.uSunDir.value.copy(this.sunDir),n.uSunColor.value.set(e.sunColor),n.uSunGlow.value=e.sunGlow,n.uNight.value=e.night,this.horizon.set(e.horizon),this.water){const s=this.water.uniforms;s.uSunDir.value.copy(this.sunDir),s.uSunColor.value.set(e.sunColor).multiplyScalar(Math.min(1,e.sunIntensity/2.5)),s.uShallow.value.set(e.shallow),s.uDeep.value.set(e.deep),s.uSky.value.set(e.waterSky),s.uFoam.value=e.foam,this.water.skirt.material.color.set(e.deep).lerp(new Gt(e.shallow),.35)}ri.value=e.night,this.renderer.toneMappingExposure=e.exposure}}function Cg(i){return i*i*(3-2*i)}function Ta(i,t,e){if(e<=0)return i;if(e>=1)return t;const n=(r,o)=>new Gt(r).lerp(new Gt(o),e).getHex(),s=(r,o)=>r+(o-r)*e;return{sunDir:[s(i.sunDir[0],t.sunDir[0]),s(i.sunDir[1],t.sunDir[1]),s(i.sunDir[2],t.sunDir[2])],sunColor:n(i.sunColor,t.sunColor),sunIntensity:s(i.sunIntensity,t.sunIntensity),hemiSky:n(i.hemiSky,t.hemiSky),hemiGround:n(i.hemiGround,t.hemiGround),hemiIntensity:s(i.hemiIntensity,t.hemiIntensity),zenith:n(i.zenith,t.zenith),horizon:n(i.horizon,t.horizon),below:n(i.below,t.below),sunGlow:s(i.sunGlow,t.sunGlow),shallow:n(i.shallow,t.shallow),deep:n(i.deep,t.deep),waterSky:n(i.waterSky,t.waterSky),foam:s(i.foam,t.foam),night:s(i.night,t.night),exposure:s(i.exposure,t.exposure)}}const _n={uPixel:{value:.001},uTint:{value:new Gt(1,1,1)},uNight:ri,uHole:{value:new ge(0,0,0,0)},uHoleOn:{value:0},uHole2:{value:new ge(0,0,0,0)},uHole2Fade:{value:6},uHoleOn2:{value:0},uStreet:{value:0}},$c=-1,Pg=0,Lg=1,Dg=2,Ig=3;class Cn{constructor(){ht(this,"pos",[]);ht(this,"side",[]);ht(this,"road",[]);ht(this,"col",[]);ht(this,"idx",[])}get vertexCount(){return this.pos.length/3}add(t,e,n,s,r,o=!1,a=$c){const l=t.length/3;if(l<2)return;const c=this.vertexCount,u=e/2;let f=0;for(let d=0;d<l;d++){const h=t[d*3],p=t[d*3+1],_=t[d*3+2];d>0&&(f+=Math.hypot(h-t[d*3-3],_-t[d*3-1]));const m=d>0?d-1:o?l-2:0,g=d<l-1?d+1:o?1:l-1;let v=h-t[m*3],y=_-t[m*3+2],M=t[g*3]-h,b=t[g*3+2]-_;const S=Math.hypot(v,y),x=Math.hypot(M,b);S>1e-6?(v/=S,y/=S):(v=M/(x||1),y=b/(x||1)),x>1e-6?(M/=x,b/=x):(M=v,b=y);let E=v+M,D=y+b;const R=Math.hypot(E,D);R<1e-6?(E=M,D=b):(E/=R,D/=R);const L=1/Math.max(E*M+D*b,.45),C=-D*L,P=E*L;for(const w of[1,-1]){const N=r&&u>0?Math.max(p,r.yAt(h+C*w*u,_+P*w*u)):p;this.pos.push(h,N,_),this.side.push(C*w,P*w,u,n/2),this.road.push(w,f,a),this.col.push(s[0],s[1],s[2])}if(d>0){const w=c+(d-1)*2;this.idx.push(w,w+1,w+2,w+1,w+3,w+2)}}}build(){const t=new we;return t.setAttribute("position",new qt(new Float32Array(this.pos),3)),t.setAttribute("aSide",new qt(new Float32Array(this.side),4)),t.setAttribute("aRoad",new qt(new Float32Array(this.road),3)),t.setAttribute("color",new qt(new Float32Array(this.col),3)),t.setIndex(this.vertexCount>65535?new qt(new Uint32Array(this.idx),1):new qt(new Uint16Array(this.idx),1)),t.computeBoundingSphere(),t.boundingSphere&&(t.boundingSphere.radius+=400),this.pos=[],this.side=[],this.road=[],this.col=[],this.idx=[],t}}function Pn(i={}){const t=new ti({vertexColors:!0,transparent:!0,opacity:i.opacity??1,depthWrite:!1,side:Pe,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),e={value:i.lift??.4},n={value:i.glow??0},s={value:i.nightDim??.2};return t.onBeforeCompile=r=>{Object.assign(r.uniforms,_n,{uLift:e,uGlow:n,uNightDim:s}),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aSide;
attribute vec3 aRoad;
uniform float uPixel;
uniform float uLift;
varying vec2 vLgXZ;
varying vec4 vLgRoad;
varying float vLgHalf;`).replace("#include <begin_vertex>",`vec3 transformed = vec3(position);
        {
          float lgDist = distance(cameraPosition, transformed);
          float lgHalf = max(aSide.z, aSide.w * lgDist * uPixel);
          transformed.xz += aSide.xy * lgHalf;
          // a ribbon widened past its true size no longer knows the ground under its edges: float it a little
          transformed.y += uLift + (lgHalf - aSide.z) * 0.3 + lgDist * 0.0004;
          vLgXZ = transformed.xz;
          // across the ribbon (-1 to 1), metres along it, what it becomes close up, and whether it is at its true width
          vLgRoad = vec4(aRoad.x, aRoad.y, aRoad.z, aSide.z / max(lgHalf, 0.001));
          vLgHalf = lgHalf;
        }`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uTint;
uniform float uNight;
uniform float uGlow;
uniform float uNightDim;
uniform vec4 uHole;
uniform float uHoleOn;
uniform vec4 uHole2;
uniform float uHole2Fade;
uniform float uHoleOn2;
uniform float uStreet;
varying vec2 vLgXZ;
varying vec4 vLgRoad;
varying float vLgHalf;`).replace("#include <color_fragment>",`#include <color_fragment>${i.street==="casing"?`
        // close up, the outline of a sealed street is its kerb
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.39, 0.385, 0.35), uStreet * step(-0.5, vLgRoad.z));`:i.street==="path"?`
        // a concrete footpath beside a street: only there close up
        diffuseColor.rgb = vec3(0.66, 0.65, 0.61) * (0.95 + 0.1 * step(0.5, fract(vLgRoad.y / 2.4)));
        diffuseColor.a *= uStreet;`:i.street==="fill"?`
        {
          // close up, a sealed street is asphalt, with lane lines once it is drawn at its true width
          float lgSt = uStreet * step(-0.5, vLgRoad.z);
          vec3 lgRoadCol = mix(diffuseColor.rgb, vec3(0.078, 0.081, 0.089), lgSt);
          float lgAcross = vLgRoad.x, lgW = 0.17 / max(vLgHalf, 0.5), lgAA = fwidth(lgAcross) * 1.3 + 0.0001;
          float lgDash = 1.0 - step(0.26, fract(vLgRoad.y / 12.0));
          float lgCentre = 1.0 - smoothstep(lgW, lgW + lgAA, abs(lgAcross));
          float lgLane = 1.0 - smoothstep(lgW, lgW + lgAA, abs(abs(lgAcross) - 0.333));
          float lgEdge = 1.0 - smoothstep(lgW, lgW + lgAA, abs(abs(lgAcross) - 0.9));
          float lgLine = vLgRoad.z > 2.5 ? max(lgLane * lgDash, lgEdge) : vLgRoad.z > 1.5 ? max(lgCentre * lgDash, lgEdge) : vLgRoad.z > 0.5 ? lgCentre * lgDash : 0.0;
          lgLine *= lgSt * smoothstep(0.9, 1.0, vLgRoad.w);
          diffuseColor.rgb = mix(lgRoadCol, vec3(0.84, 0.84, 0.78), lgLine);
        }`:""}
        diffuseColor.rgb = mix(diffuseColor.rgb * uTint, mix(diffuseColor.rgb * uNightDim, vec3(1.0, 0.72, 0.4), uGlow), uNight);${i.hole?`
        {
          vec2 lgIn = min(vLgXZ - uHole.xy, uHole.zw - vLgXZ);
          diffuseColor.a *= 1.0 - clamp(min(lgIn.x, lgIn.y) / 14.0, 0.0, 1.0) * uHoleOn;
          vec2 lgIn2 = min(vLgXZ - uHole2.xy, uHole2.zw - vLgXZ);
          diffuseColor.a *= 1.0 - clamp(min(lgIn2.x, lgIn2.y) / uHole2Fade, 0.0, 1.0) * uHoleOn2;
        }`:""}`)},t.customProgramCacheKey=()=>`logan-ribbon-${i.hole?"hole":"whole"}-${i.street??"plain"}`,t}const Xi=2e3,Aa=[15129800,13875354,12158312,15723750,12434098,14273200],Ra=[13224388,14868692,11843507,9409424,5987928,4672334,11035724,9280642],Ng=new Float32Array([-.5,0,-.5,.5,0,-.5,.5,0,.5,-.5,0,.5,-.5,1,-.5,.5,1,-.5,.5,1,.5,-.5,1,.5,-.5,1,-.5,.5,1,-.5,.5,1,.5,-.5,1,.5,-.5,2,0,.5,2,0,-.5,2,0,.5,2,0,-.5,1,-.5,-.5,1,.5,-.5,2,0,.5,1,-.5,.5,1,.5,.5,2,0]),Ug=new Float32Array([0,0,0,0,0,0,0,0,1,1,1,1,1,1,3,3,2,2,2,2,2,2]),Fg=new Uint16Array([0,1,5,0,5,4,1,2,6,1,6,5,2,3,7,2,7,6,3,0,4,3,4,7,8,9,13,8,13,12,10,11,12,10,12,13,11,8,14,9,10,15,16,17,18,20,19,21]),Jc=`
attribute vec3 aPos;
attribute vec4 aDims; // width, eave height, depth, roof height
attribute vec4 aRot; // cos, sin, depth of the base below the centre ground, random seed
attribute float aPart;
attribute float aFront; // which wall faces the street: 0 and 1 the long walls (+z, -z), 2 and 3 the ends (+x, -x)
uniform float uRange;
uniform vec3 uEye; // the viewer's position; cameraPosition is the light's during the shadow pass
`,Qc=`
vec3 transformed;
vec3 lgLocal; // where the vertex is in the building's own frame: along its length, metres up, across its depth
float lgLarge = step(650.0, aDims.x * aDims.z); // sheds and shops
{
  float lgGable = step(0.64, fract(aRot.w * 9.13)) * (1.0 - lgLarge);
  float lgOver = mix(min(0.45, 0.07 * min(aDims.x, aDims.z)), 0.2, lgLarge) * step(0.05, aDims.w); // how far the eaves overhang
  float lgDrop = lgOver * aDims.w / max(aDims.z * 0.5, 0.5); // the roof keeps its slope out to the eaves
  float lgTop = step(1.5, position.y);
  float lgRidge = sign(position.x) * mix(max(aDims.x - aDims.z, 0.0) * 0.5, aDims.x * 0.5 + lgOver, lgGable);
  float lx, lz, lh;
  if (aPart < 0.5) {
    lx = position.x * aDims.x; lz = position.z * aDims.z; lh = position.y * aDims.y;
  } else if (aPart < 1.5) {
    if (lgTop > 0.5) { lx = lgRidge; lz = 0.0; lh = aDims.y + aDims.w; }
    else { lx = position.x * (aDims.x + 2.0 * lgOver); lz = position.z * (aDims.z + 2.0 * lgOver); lh = aDims.y - lgDrop; }
  } else if (aPart < 2.5) {
    lx = position.x * aDims.x; lz = position.z * aDims.z * (1.0 - lgTop); lh = aDims.y + lgTop * aDims.w * lgGable;
  } else {
    lx = lgRidge; lz = 0.0; lh = mix(aDims.y + aDims.w, aDims.y - lgDrop, lgGable);
  }
  lgLocal = vec3(lx, lh, lz);
  float lgGrow = 1.0 - smoothstep(uRange * 0.7, uRange, distance(uEye, aPos));
  float ly = lh * lgGrow - (1.0 - step(0.01, position.y)) * aRot.z;
  transformed = vec3(aPos.x + lx * aRot.x - lz * aRot.y, aPos.y + ly, aPos.z + lx * aRot.y + lz * aRot.x);
}
`;function jc(i){return new Gt(i)}function Og(i,t){const e=new mn({flatShading:!0,roughness:.86,metalness:0,side:Pe}),n=Aa.map(jc),s=Ra.map(jc);e.onBeforeCompile=o=>{o.uniforms.uRange=i,o.uniforms.uEye=t,o.uniforms.uNight=ri,o.uniforms.uWalls={value:n},o.uniforms.uRoofs={value:s},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
${Jc}
uniform vec3 uWalls[${Aa.length}];
uniform vec3 uRoofs[${Ra.length}];
varying vec3 vLgColor;
varying float vLgGlow;
varying vec3 vLgLocal;
varying vec3 vLgBox;
varying vec2 vLgWin;
varying vec3 vLgRoof;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = vec3(0.0, 1.0, 0.0);").replace("#include <begin_vertex>",`${Qc}
        {
          float seed = aRot.w;
          float large = lgLarge; // sheds and shops: pale metal roofs, plain walls
          float isWall = 1.0 - step(0.5, aPart), isRoof = step(0.5, aPart) * (1.0 - step(1.5, aPart) * step(aPart, 2.5));
          vec3 wall = mix(uWalls[int(seed * ${Aa.length}.0)], uWalls[4], large * 0.7);
          vec3 roof = mix(uRoofs[int(fract(seed * 7.31) * ${Ra.length}.0)], uRoofs[int(fract(seed * 3.7) * 3.0)], large);
          vLgColor = mix(wall, roof, isRoof) * (0.92 + 0.16 * fract(seed * 13.7));
          vLgGlow = isWall * step(0.42, fract(seed * 5.3)) * 0.5;
          // windows: on the walls of houses and other small buildings tall enough to have them
          vLgLocal = lgLocal;
          vLgBox = vec3(aDims.x * 0.5, aDims.y, aDims.z * 0.5);
          vLgWin = vec2(isWall * (1.0 - large) * step(2.3, aDims.y), seed);
          vLgRoof = vec3(isRoof, large, aFront);
        }`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLgColor;
varying float vLgGlow;
varying vec3 vLgLocal;
varying vec3 vLgBox;
varying vec2 vLgWin;
varying vec3 vLgRoof;
uniform float uNight;`).replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = vLgColor;
        // Close up, the walls have windows: a row to each storey, one to every bay of about 2.8 m. Which
        // wall a point is on, and where along it, comes from its place in the building's own frame.
        float lgNear = (1.0 - smoothstep(380.0, 900.0, length(vViewPosition))) * vLgWin.x;
        float lgLit = 0.0;
        if (lgNear > 0.001) {
          float lgEnd = step(vLgBox.x - 0.05, abs(vLgLocal.x)); // 1 on the two end walls
          float lgU = mix(vLgLocal.x, vLgLocal.z, lgEnd), lgLen = 2.0 * mix(vLgBox.x, vLgBox.z, lgEnd);
          float lgBays = max(1.0, floor(lgLen / 2.8)), lgCell = (lgU / lgLen + 0.5) * lgBays;
          float lgStoreys = max(1.0, floor(vLgBox.y / 2.9)), lgH = vLgBox.y / lgStoreys, lgRow = vLgLocal.y / lgH;
          float lgFx = fract(lgCell), lgFy = fract(lgRow);
          float lgGlass = step(0.24, lgFx) * step(lgFx, 0.76) * step(0.95 / lgH, lgFy) * step(lgFy, min(2.15 / lgH, 0.9)) * step(1.8, lgLen);
          float lgSeed = vLgWin.y;
          // the wall that faces the nearest street has a garage door in its first bay, where there are three or
          // more, and the front door in its middle one
          float lgSide = floor(vLgRoof.z + 0.5), lgOnEnd = step(1.5, lgSide), lgWay = 1.0 - 2.0 * mod(lgSide, 2.0);
          float lgFront = (1.0 - abs(lgEnd - lgOnEnd)) * step(0.0, mix(vLgLocal.z, vLgLocal.x, lgEnd) * lgWay) * (1.0 - step(lgH, vLgLocal.y));
          float lgBay = floor(lgCell);
          float lgGarage = lgFront * step(2.5, lgBays) * step(lgBay, 0.5) * step(0.06, lgFx) * step(lgFx, 0.94) * step(vLgLocal.y, 2.15);
          float lgDoorBay = lgFront * step(1.5, lgBays) * step(abs(lgBay - floor(lgBays * 0.5)), 0.5);
          float lgDoor = lgDoorBay * step(0.33, lgFx) * step(lgFx, 0.67) * step(vLgLocal.y, 2.08);
          float lgOpening = max(step(0.5, lgFront * step(2.5, lgBays) * step(lgBay, 0.5)), lgDoorBay);
          float lgFrame = step(0.19, lgFx) * step(lgFx, 0.81) * step(0.85 / lgH, lgFy) * step(lgFy, min(2.26 / lgH, 0.93)) * step(1.8, lgLen) * (1.0 - lgOpening);
          lgGlass *= 1.0 - lgOpening;
          vec3 lgTrim = mix(vec3(0.88, 0.87, 0.83), vec3(0.17, 0.18, 0.19), step(0.72, fract(lgSeed * 3.3)));
          vec3 lgCol = diffuseColor.rgb;
          lgCol *= 1.0 - 0.22 * step(vLgLocal.y, 0.28); // a darker course at the foot of the wall
          lgCol = mix(lgCol, lgTrim, step(vLgBox.y - 0.2, vLgLocal.y)); // the fascia and gutter under the eaves
          lgCol = mix(lgCol, lgTrim, lgFrame);
          // each window: the sky in the top of the glass, a glazing bar down the middle (and across, on some), and
          // on some a blind drawn part of the way down
          float lgWinId = floor(lgCell) + floor(lgRow) * 17.0 + lgEnd * 31.0 + step(0.0, mix(vLgLocal.z, vLgLocal.x, lgEnd)) * 57.0;
          float lgWinRand = fract(sin((lgWinId + floor(lgSeed * 997.0) * 0.731) * 78.233) * 2463.63); // the seed rounded off: it must be exactly the same right across a window
          float lgY0 = 0.95 / lgH, lgY1 = min(2.15 / lgH, 0.9);
          float lgWx = (lgFx - 0.24) / 0.52, lgWy = clamp((lgFy - lgY0) / max(lgY1 - lgY0, 0.01), 0.0, 1.0);
          float lgFineWin = 1.0 - smoothstep(90.0, 260.0, length(vViewPosition));
          vec3 lgPane = mix(vec3(0.03, 0.05, 0.075), vec3(0.17, 0.26, 0.36), lgWy * lgWy * 0.85 * lgFineWin);
          lgPane = mix(lgPane, vec3(0.6, 0.58, 0.53), step(0.62, lgWinRand) * step(0.35 + 0.4 * fract(lgWinRand * 7.0), lgWy) * 0.85 * lgFineWin);
          float lgBars = max(step(abs(lgWx - 0.5), 0.04), step(abs(lgWy - 0.6), 0.035) * step(0.5, fract(lgWinRand * 3.0))) * lgFineWin;
          lgCol = mix(lgCol, lgPane, lgGlass * 0.9);
          lgCol = mix(lgCol, lgTrim, lgGlass * lgBars);
          // a sill under each window
          lgCol = mix(lgCol, lgTrim * 0.9, step(0.17, lgFx) * step(lgFx, 0.83) * step(0.78 / lgH, lgFy) * step(lgFy, 0.86 / lgH) * step(1.8, lgLen) * (1.0 - lgOpening) * lgFineWin);
          lgCol = mix(lgCol, vec3(0.8, 0.79, 0.74) * (1.0 - 0.18 * step(0.93, fract(vLgLocal.y / 0.54))), lgGarage);
          vec3 lgDoorCol = mix(mix(vec3(0.2, 0.13, 0.1), vec3(0.45, 0.12, 0.1), step(0.4, fract(lgSeed * 11.3))), vec3(0.14, 0.24, 0.3), step(0.75, fract(lgSeed * 11.3)));
          lgCol = mix(lgCol, lgDoorCol, lgDoor);
          lgLit = lgGlass * step(0.6, fract(sin((lgWinId + lgSeed * 91.7) * 12.9898) * 43758.5453));
          diffuseColor.rgb = mix(diffuseColor.rgb, lgCol, lgNear);
        }
        // Roofs close up: tiles in courses or sheet metal in ribs (by the roof's colour), a ridge cap, and solar
        // panels on some. None of this is surveyed: no particular house is known to have panels.
        float lgDist = length(vViewPosition);
        float lgClose = (1.0 - smoothstep(380.0, 900.0, lgDist)) * vLgRoof.x;
        if (lgClose > 0.001) {
          float lgSeed = vLgWin.y, lgFine = 1.0 - smoothstep(110.0, 300.0, lgDist), lgBig = vLgRoof.y;
          float lgTiled = step(0.5, fract(lgSeed * 7.31)) * (1.0 - lgBig);
          float lgRows = 1.0 - 0.2 * step(0.84, fract(abs(vLgLocal.z) / 0.36));
          float lgRibs = 1.0 - 0.13 * step(0.86, fract(vLgLocal.x / 0.76));
          float lgPat = mix(lgRibs, lgRows, lgTiled);
          lgPat = mix(lgPat, 1.14, step(abs(vLgLocal.z), 0.17) * (1.0 - lgBig));
          diffuseColor.rgb *= mix(1.0, lgPat, lgFine);
          float lgU = vLgLocal.x - (fract(lgSeed * 8.9) - 0.5) * vLgBox.x * 0.6, lgV = abs(vLgLocal.z) / max(vLgBox.z, 0.5);
          float lgPanel = step(0.72, fract(lgSeed * 4.71)) * (1.0 - lgBig) * step(4.0, vLgBox.z) * step(0.0, vLgLocal.z * (step(0.5, fract(lgSeed * 6.3)) * 2.0 - 1.0))
            * step(abs(lgU), min(2.6, vLgBox.x * 0.42)) * step(0.3, lgV) * step(lgV, 0.8);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.03, 0.045, 0.1) * (1.0 + 1.4 * lgFine * step(0.93, fract(lgU / 1.04))), lgPanel * lgClose);
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += vec3(1.0, 0.76, 0.48) * mix(vLgGlow, lgLit * 1.25, lgNear) * uNight * 1.6;`)},e.customProgramCacheKey=()=>"logan-building";const r=new ca({depthPacking:ul});return r.onBeforeCompile=o=>{o.uniforms.uRange=i,o.uniforms.uEye=t,o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
${Jc}`).replace("#include <begin_vertex>",Qc)},r.customProgramCacheKey=()=>"logan-building-depth",{mat:e,depth:r}}function zg(){const i=new ti({color:11118238,transparent:!0,depthWrite:!1,side:Pe,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return i.onBeforeCompile=t=>{Object.assign(t.uniforms,{uStreet:_n.uStreet,uTint:_n.uTint,uNight:_n.uNight}),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aFrom;
attribute vec3 aTo;
uniform float uStreet;`).replace("#include <begin_vertex>",`vec2 lgAlong = normalize(aTo.xz - aFrom.xz);
        vec3 transformed = mix(aFrom, aTo, position.x) + vec3(-lgAlong.y, 0.0, lgAlong.x) * position.z * 3.0 + vec3(0.0, 0.34, 0.0);`).replace("#include <project_vertex>",`#include <project_vertex>
if (uStreet < 0.01) gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // out of sight from far off`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uStreet;
uniform vec3 uTint;
uniform float uNight;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= mix(uTint, vec3(0.2), uNight);
diffuseColor.a *= uStreet;`)},i.customProgramCacheKey=()=>"logan-driveway",i}const Bg=[7,5.75,5,4,3.25,2];function kg(i){const e=new Map,n=(s,r)=>Math.floor(s/64)*100003+Math.floor(r/64);return i.forEach((s,r)=>{if(s.cls<1||s.cls>5||s.flags&(Ss|ys))return;const o=s.pts;for(let a=0;a+3<o.length;a+=2){const l=Math.max(1,Math.ceil(Math.hypot(o[a+2]-o[a],o[a+3]-o[a+1])/32));for(let c=0;c<=l;c++){const u=n(o[a]+(o[a+2]-o[a])*c/l,o[a+1]+(o[a+3]-o[a+1])*c/l),f=e.get(u);f?(f[f.length-2]!==r||f[f.length-1]!==a)&&f.push(r,a):e.set(u,[r,a])}}}),(s,r)=>{let o=null;for(let a=-1;a<=1;a++)for(let l=-1;l<=1;l++){const c=e.get(n(s+a*64,r+l*64));if(c)for(let u=0;u<c.length;u+=2){const f=i[c[u]],d=f.pts,h=c[u+1],p=d[h+2]-d[h],_=d[h+3]-d[h+1],m=p*p+_*_||1,g=Math.max(0,Math.min(1,((s-d[h])*p+(r-d[h+1])*_)/m)),v=d[h]+p*g,y=d[h+1]+_*g,M=Math.hypot(s-v,r-y);(!o||M<o.d)&&(o={d:M,px:v,pz:y,tx:p/Math.sqrt(m),tz:_/Math.sqrt(m),half:Bg[f.cls]??3})}}return o}}function Gg(i,t,e,n,s,r,o=[]){const a=kg(o),l=zg(),c=new qt(new Float32Array([0,0,-.5,1,0,-.5,1,0,.5,0,0,.5]),3),u=new qt(new Uint16Array([0,1,2,0,2,3]),1),f=new Ae;f.name="buildings";const d={value:n},h={value:new W},{mat:p,depth:_}=Og(d,h),m=new qt(Ng,3),g=new qt(Ug,1),v=new qt(Fg,1),[y,M]=t.meta.size,b=Math.ceil(y/Xi),S=new Map;let x=0;for(let L=0;L<i.count;L++){if(i.w[L]*i.d[L]<s)continue;const C=Math.floor((i.z[L]+M/2)/Xi)*b+Math.floor((i.x[L]+y/2)/Xi);let P=S.get(C);P||S.set(C,P=[]),P.push(L),x++}const E=si(4114),D=[];for(const[L,C]of S){const P=C.length,w=new Float32Array(P*3),N=new Float32Array(P*4),F=new Float32Array(P*4),z=new Float32Array(P),K=[],V=[];let k=1/0,O=-1/0;for(let j=0;j<P;j++){const at=C[j],it=i.x[at],lt=i.z[at],Rt=i.w[at],ft=i.d[at],At=Math.cos(i.angle[at]),xt=Math.sin(i.angle[at]),Dt=e.yAt(it,lt);let Kt=Dt;for(const[Ut,Bt]of[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]])Kt=Math.min(Kt,e.yAt(it+Ut*Rt*At-Bt*ft*xt,lt+Ut*Rt*xt+Bt*ft*At));w.set([it,Dt,lt],j*3),N.set([Rt,i.eave[at],ft,Math.max(i.roof[at]-i.eave[at],0)],j*4);const te=E();F.set([At,xt,Dt-Kt+.4,te],j*4);const Wt=a(it,lt);let ut=te<.5?0:1;if(Wt&&Wt.d<60){const Ut=(Wt.px-it)*At+(Wt.pz-lt)*xt,Bt=-(Wt.px-it)*xt+(Wt.pz-lt)*At;ut=Math.abs(Bt)*Rt>=Math.abs(Ut)*ft?Bt>0?0:1:Ut>0?2:3;const le=ut<2?Rt:ft,Me=Math.max(1,Math.floor(le/2.8)),ye=Rt*ft;if(Me>=3&&ye>70&&ye<650&&i.eave[at]>=2.3){const H=-le/2+le/Me/2,pe=ut%2?-1:1,de=ut<2?H:pe*Rt/2,he=ut<2?pe*ft/2:H,gt=ut<2?0:pe,xe=ut<2?pe:0,Nt=it+de*At-he*xt,Ht=lt+de*xt+he*At,I=gt*At-xe*xt,T=gt*xt+xe*At,q=I*Wt.tz-T*Wt.tx;if(Math.abs(q)>.35){const ct=((Wt.px-Nt)*Wt.tz-(Wt.pz-Ht)*Wt.tx)/q-Wt.half/Math.abs(q)+.4;if(ct>1.5&&ct<32){const ot=Nt+I*ct,mt=Ht+T*ct;K.push(Nt,e.yAt(Nt,Ht),Ht),V.push(ot,e.yAt(ot,mt),mt)}}}}z[j]=ut,k=Math.min(k,Kt),O=Math.max(O,Dt+i.roof[at])}const $=new fa;$.setAttribute("position",m),$.setAttribute("aPart",g),$.setIndex(v),$.setAttribute("aPos",new ei(w,3)),$.setAttribute("aDims",new ei(N,4)),$.setAttribute("aRot",new ei(F,4)),$.setAttribute("aFront",new ei(z,1)),$.instanceCount=P;const et=new W((L%b+.5)*Xi-y/2,(k+O)/2,(Math.floor(L/b)+.5)*Xi-M/2),X=Math.hypot(Xi*.75,(O-k)/2)+60;$.boundingSphere=new cs(et,X);const J=new $t($,p);if(J.customDepthMaterial=_,J.castShadow=r,J.receiveShadow=r,J.visible=!1,f.add(J),K.length){const j=new fa;j.setAttribute("position",c),j.setIndex(u),j.setAttribute("aFrom",new ei(new Float32Array(K),3)),j.setAttribute("aTo",new ei(new Float32Array(V),3)),j.instanceCount=K.length/3,j.boundingSphere=$.boundingSphere;const at=new $t(j,l);at.renderOrder=9,at.name="driveways",J.add(at)}D.push({mesh:J,centre:et,radius:X})}const R=Hg(t,e,r);return R.visible=!1,f.add(R),{group:f,count:x+t.blocks.length,update(L){h.value.copy(L);let C=!1;for(const w of D){const N=L.distanceTo(w.centre)<n+w.radius;N!==w.mesh.visible&&(w.mesh.visible=N,C=!0)}const P=L.y<n*3;return P!==R.visible&&(R.visible=P,C=!0),C}}}function Hg(i,t,e){const n=new sn,s=si(4131),r=[U(14605522),U(13224388),U(12172472),U(15328988)],o=[U(13618112),U(12434098),U(14275266)];for(const l of i.blocks){const c=l.p.length/2,u=new Array(c*2);let f=0,d=0,h=1/0;for(let _=0;_<c;_++){const m=l.p[_*2]/10,g=l.p[_*2+1]/10;u[_*2]=m,u[_*2+1]=g,f+=m/c,d+=g/c,h=Math.min(h,t.yAt(m,g))}const p=t.yAt(f,d)+l.e+(l.a-l.e)*.6;n.walls(u,h-.4,p,o[Math.floor(s()*o.length)],.22),n.cap(u,p,r[Math.floor(s()*r.length)])}const a=new $t(n.build(),Es({roughness:.84}));return a.castShadow=e,a.receiveShadow=e,a.name="blocks",a}const Er=1;class Vg{constructor(t,e,n,s,r,o){ht(this,"nx");ht(this,"nz");ht(this,"y");ht(this,"xMin");ht(this,"zMin");ht(this,"xMax");ht(this,"zMax");ht(this,"dx");ht(this,"dz");ht(this,"yMax");this.sizeX=s,this.sizeZ=r,this.step=o;const a=s/e,l=r/n;this.nx=Math.floor((e-1)/o)+1,this.nz=Math.floor((n-1)/o)+1,this.dx=a*o,this.dz=l*o,this.xMin=-s/2+a/2,this.zMin=-r/2+l/2,this.xMax=this.xMin+(this.nx-1)*this.dx,this.zMax=this.zMin+(this.nz-1)*this.dz,this.y=new Float32Array(this.nx*this.nz);let c=0;for(let u=0;u<this.nz;u++)for(let f=0;f<this.nx;f++){const d=t[u*o*e+f*o]*Er;this.y[u*this.nx+f]=d,d>c&&(c=d)}this.yMax=c}yAt(t,e){let n=(t-this.xMin)/this.dx,s=(e-this.zMin)/this.dz;n<0?n=0:n>this.nx-1.0001&&(n=this.nx-1.0001),s<0?s=0:s>this.nz-1.0001&&(s=this.nz-1.0001);const r=n|0,o=s|0,a=n-r,l=s-o,c=o*this.nx+r,u=this.y[c],f=this.y[c+1],d=this.y[c+this.nx],h=this.y[c+this.nx+1];return a+l<=1?u+(f-u)*a+(d-u)*l:h+(d-h)*(1-a)+(f-h)*(1-l)}metresAt(t,e){return this.yAt(t,e)/Er}inside(t,e,n=0){return t>this.xMin+n&&t<this.xMax-n&&e>this.zMin+n&&e<this.zMax-n}drape(t,e,n,s,r){const o=(t-this.xMin)/this.dx,a=(e-this.zMin)/this.dz,l=(n-this.xMin)/this.dx,c=(s-this.zMin)/this.dz,u=[],f=(h,p)=>{if(h===p)return;const _=Math.min(h,p),m=Math.max(h,p);for(let g=Math.floor(_)+1;g<m;g++)u.push((g-h)/(p-h))};f(o,l),f(a,c),f(o+a,l+c),u.sort((h,p)=>h-p);let d=0;for(const h of u){if(h-d<1e-4||h>.9999)continue;d=h;const p=t+(n-t)*h,_=e+(s-e)*h;r.push(p,this.yAt(p,_),_)}r.push(n,this.yAt(n,s),s)}}const Wg=["suburb","water","region","road","division"],Xg=["water","region","road","division"];class qg{constructor(t,e,n){ht(this,"items",[]);ht(this,"v",new W);ht(this,"visible",!0);ht(this,"obstacles",[]);ht(this,"hidden",new Set);this.layer=t;for(const s of[...e].sort((r,o)=>r.priority-o.priority)){const r=document.createElement(Xg.includes(s.kind)?"span":"button");r instanceof HTMLButtonElement&&(r.type="button",r.tabIndex=-1,r.addEventListener("click",()=>n(s.id))),r.className=`lgn-label lgn-label--${s.kind}`,r.textContent=s.name,r.style.visibility="hidden",t.appendChild(r),this.items.push({def:s,el:r,w:0,h:0,shown:!1,centred:Wg.includes(s.kind)})}}remeasure(){for(const t of this.items)t.w=0}setVisible(t){this.visible=t,this.layer.style.display=t?"":"none"}setKindVisible(t,e){e?this.hidden.delete(t):this.hidden.add(t)}setObstacles(t){this.obstacles=t}update(t,e,n,s=1/0){if(!this.visible)return;const r=[...this.obstacles];for(const o of this.items){o.w||(o.w=o.el.offsetWidth,o.h=o.el.offsetHeight);const a=o.def;this.v.set(a.x,a.y,a.z);const l=this.v.distanceTo(t.position);this.v.project(t);let c=!this.hidden.has(a.kind)&&this.v.z<1&&this.v.z>-1&&l<Math.min(a.maxDist??1/0,s)&&l>(a.minDist??0);const u=(this.v.x*.5+.5)*e,f=(-this.v.y*.5+.5)*n,d=u-o.w/2,h=o.centred?f-o.h/2:f-o.h-8,p=d+o.w,_=h+o.h;if(c&&(d<2||p>e-2||h<2||_>n-2)&&(c=!1),c){for(const m of r)if(d<m[2]+5&&p>m[0]-5&&h<m[3]+3&&_>m[1]-3){c=!1;break}}c&&(r.push([d,h,p,_]),o.el.style.transform=`translate3d(${Math.round(d)}px, ${Math.round(h)}px, 0)`),c!==o.shown&&(o.el.style.visibility=c?"visible":"hidden",o.shown=c)}}dispose(){for(const t of this.items)t.el.remove();this.items=[]}}const Yg=[{id:"council",name:"Logan City Council",kind:"place",lat:-27.64299,lon:153.10404,blurb:"The council's administration centre on Wembley Road, built around a courtyard. The survey puts its roof line about 10 metres up and the antenna on top at about 36 metres. The Logan Art Gallery is in its eastern wing.",view:[330,58,-150],priority:10,maxDist:3e4,stand:{from:[-3.6,70.4],at:[-3.4,44.5],pitch:.1}},{id:"wtr704",name:"704 Waterford Tamborine Road",kind:"place",lat:-27.73798825,lon:153.12964964,blurb:"704 to 710 Waterford Tamborine Road, Buccan, at the point Queensland's address data gives for it.",view:[240,52,-20],priority:11,maxDist:12e3,marker:!0,number:"704",boundary:[[-27.737935,153.127956],[-27.737152,153.128104],[-27.7377,153.131685],[-27.73813,153.131526],[-27.738455,153.131357]]},{id:"lec",name:"Logan Entertainment Centre",kind:"place",lat:-27.643441,lon:153.102315,blurb:"The city's performance and events venue, next door to the council's administration centre.",view:[420,58,-150],priority:15,maxDist:5e3},{id:"pcyc",name:"PCYC Logan City",kind:"place",lat:-27.643802,lon:153.104141,blurb:"Police-Citizens Youth Club, behind the administration centre.",view:[360,58,-150],priority:16,maxDist:3500},{id:"gallery",name:"Logan Art Gallery",kind:"place",lat:-27.64274,lon:153.10439,blurb:"The city's art gallery. Queensland's community facilities data places it in the eastern wing of the council's administration centre.",view:[240,58,150],priority:16,maxDist:2600},{id:"civicpark",name:"Civic Centre Park",kind:"nature",lat:-27.64517,lon:153.10332,blurb:"Parkland and sports ovals south of the council's administration centre.",view:[520,58,10],priority:17,maxDist:2600},{id:"woodridgess",name:"Woodridge State School",kind:"place",lat:-27.64106,lon:153.10375,blurb:"State school on the north side of Wembley Road, opposite the council's administration centre.",view:[420,58,0],priority:18,maxDist:2200},{id:"specialschool",name:"Logan City Special School",kind:"place",lat:-27.6416,lon:153.10215,blurb:"Special school on Wembley Road, north-west of the council's administration centre.",view:[420,58,20],priority:18,maxDist:2200},{id:"police",name:"Logan Central Police Station",kind:"place",lat:-27.64589,lon:153.10493,blurb:"Police station south of the council's administration centre.",view:[420,58,-20],priority:18,maxDist:2200},{id:"wembleyfalls",name:"Wembley Falls Park",kind:"nature",lat:-27.64098,lon:153.10593,blurb:"Park beside the railway, north of Wembley Road.",view:[420,58,-15],priority:19,maxDist:2e3},{id:"hyperdome",name:"Logan Hyperdome",kind:"place",lat:-27.65885,lon:153.17124,blurb:"Shopping centre beside the Pacific Motorway. At about 98,700 square metres it is the largest building footprint in the city.",view:[1900,58,25],priority:11,maxDist:26e3},{id:"hospital",name:"Logan Hospital",kind:"place",lat:-27.67004,lon:153.14241,blurb:"The city's main public hospital. Its tallest block stands about 38 metres above the ground in the survey.",view:[1500,58,-15],priority:12,maxDist:22e3},{id:"griffith",name:"Griffith University",kind:"place",lat:-27.66509,lon:153.15262,blurb:"Griffith University's Logan campus.",view:[1700,58,10],priority:14,maxDist:16e3},{id:"springwood",name:"Springwood centre",kind:"place",lat:-27.61409,lon:153.12682,blurb:"Springwood's commercial centre beside the Pacific Motorway, around the Springwood Mall.",view:[1800,58,-25],priority:13,maxDist:2e4},{id:"brownsplains",name:"Browns Plains in detail",kind:"place",lat:-27.663955,lon:153.054871,blurb:"About 100 metres of Browns Plains drawn in close detail: Ammons Street, Sutton and Coyle courts and the edge of Forestglen Park. Where the houses, roofs, pools, streets and trees are follows the survey and the aerial imagery; what is in the yards, the cars and the people are generated.",view:[205,57,-28],priority:14,maxDist:4e3,stand:{from:[-28,68.5],at:[32,58.7],pitch:.02}},{id:"grandplaza",name:"Grand Plaza",kind:"place",lat:-27.66299,lon:153.04097,blurb:"The main shopping centre at Browns Plains, and the third largest building footprint in the city.",view:[1700,58,20],priority:13,maxDist:2e4},{id:"butter",name:"Kingston Butter Factory",kind:"place",lat:-27.658,lon:153.12048,blurb:"The former butter factory, now a community arts venue, next to Kingston station.",view:[1100,60,30],priority:15,maxDist:12e3},{id:"mayes",name:"Mayes Cottage",kind:"place",lat:-27.65258,lon:153.11676,blurb:"Heritage house museum in Kingston.",view:[900,60,-30],priority:18,maxDist:7e3},{id:"beenleigh",name:"Beenleigh centre",kind:"place",lat:-27.71683,lon:153.20145,blurb:"Beenleigh's town centre: the courthouse, the library and the last station on the Beenleigh line.",view:[1900,58,15],priority:12,maxDist:24e3},{id:"yugambeh",name:"Yugambeh Museum",kind:"place",lat:-27.72409,lon:153.21749,blurb:"Museum of Yugambeh language and heritage.",view:[1100,60,-20],priority:18,maxDist:8e3},{id:"temple",name:"Chung Tian Temple",kind:"place",lat:-27.60327,lon:153.15125,blurb:"Buddhist temple set in bushland on the city's northern edge.",view:[1100,60,20],priority:17,maxDist:9e3},{id:"jimboomba",name:"Jimboomba centre",kind:"place",lat:-27.8295,lon:153.02645,blurb:"The town centre of Jimboomba, on the Mount Lindesay Highway in the south of the city.",view:[2200,58,-10],priority:12,maxDist:26e3},{id:"loganvillage",name:"Logan Village",kind:"place",lat:-27.76759,lon:153.10513,blurb:"Village centre near the Logan River, between Waterford and Yarrabilba.",view:[2e3,58,15],priority:14,maxDist:2e4},{id:"yarrabilba",name:"Yarrabilba",kind:"place",lat:-27.81405,lon:153.12125,blurb:"One of the city's newest communities. The surveyed streets and houses show how far it had been built.",view:[3200,56,-15],priority:13,maxDist:24e3},{id:"flagstone",name:"Flagstone",kind:"place",lat:-27.81686,lon:152.96475,blurb:"Flagstone's village centre, the heart of a growing community in the south-west.",view:[3e3,56,20],priority:13,maxDist:24e3},{id:"daisyhill",name:"Daisy Hill Conservation Park",kind:"nature",lat:-27.61761,lon:153.17205,blurb:"784 hectares of forest on the hills east of Springwood, home to the Daisy Hill Koala Centre.",view:[5200,56,-20],priority:9,maxDist:34e3},{id:"koala",name:"Daisy Hill Koala Centre",kind:"nature",lat:-27.62286,lon:153.15694,blurb:"Koala centre inside Daisy Hill Conservation Park.",view:[1300,60,35],priority:16,maxDist:9e3},{id:"springwoodcp",name:"Springwood Conservation Park",kind:"nature",lat:-27.62526,lon:153.14291,blurb:"A 29 hectare pocket of bushland in the middle of Springwood.",view:[1700,58,0],priority:17,maxDist:1e4},{id:"underwood",name:"Underwood Park",kind:"nature",lat:-27.59968,lon:153.1483,blurb:"About 40 hectares of sports fields and parkland.",view:[1900,58,-15],priority:17,maxDist:1e4},{id:"cornubia",name:"Cornubia Forest",kind:"nature",lat:-27.64953,lon:153.2047,blurb:"Cornubia Forest Nature Refuge: 133 hectares of bushland.",view:[3200,56,20],priority:15,maxDist:18e3},{id:"carbrook",name:"Carbrook Wetlands",kind:"nature",lat:-27.66949,lon:153.26531,blurb:"Conservation park on the low ground near the mouth of the Logan River.",view:[3600,56,-25],priority:14,maxDist:24e3},{id:"tygum",name:"Tygum Lagoon",kind:"nature",lat:-27.69524,lon:153.13178,blurb:"Lagoon and parkland in Waterford West.",view:[1300,60,20],priority:17,maxDist:9e3},{id:"parklands",name:"Logan River Parklands",kind:"nature",lat:-27.69839,lon:153.19237,blurb:"Riverside parkland on the Logan River at Beenleigh.",view:[1500,60,-30],priority:16,maxDist:1e4},{id:"eagleby",name:"Eagleby Wetlands",kind:"nature",lat:-27.70812,lon:153.22995,blurb:"Wetland reserve close to where the Albert River joins the Logan.",view:[2100,58,15],priority:16,maxDist:12e3},{id:"plunkett",name:"Plunkett Conservation Park",kind:"nature",lat:-27.80923,lon:153.14143,blurb:"782 hectares of bushland east of Yarrabilba.",view:[5200,56,20],priority:11,maxDist:3e4},{id:"springmountain",name:"Spring Mountain Forest Park",kind:"nature",lat:-27.71283,lon:152.90907,blurb:"340 hectares of forest in the west of the city.",view:[5200,56,-25],priority:12,maxDist:3e4},{id:"loganriver",name:"Logan River",kind:"water",lat:-27.70065,lon:153.14611,blurb:"The city's main river. It winds north-east across the whole map towards Moreton Bay.",view:[9e3,52,10],priority:8,maxDist:15e4},{id:"albertriver",name:"Albert River",kind:"water",lat:-27.74445,lon:153.19928,blurb:"Flows north along the city's eastern side to join the Logan River near Eagleby.",view:[8e3,52,-15],priority:9,maxDist:4e4}],Kg=[{name:"Pacific Motorway",kind:"road",lat:-27.65547,lon:153.16454,maxDist:26e3},{name:"Pacific Motorway",kind:"road",lat:-27.70388,lon:153.2014,maxDist:16e3},{name:"Logan Motorway",kind:"road",lat:-27.65277,lon:153.07095,maxDist:26e3},{name:"Logan Motorway",kind:"road",lat:-27.66671,lon:153.15186,maxDist:14e3},{name:"Mount Lindesay Highway",kind:"road",lat:-27.73991,lon:153.0265,maxDist:26e3},{name:"Mount Lindesay Highway",kind:"road",lat:-27.84813,lon:153.01892,maxDist:16e3},{name:"Logan River",kind:"water",lat:-27.69,lon:153.24506,maxDist:3e4},{name:"Logan River",kind:"water",lat:-27.769,lon:153.05127,maxDist:3e4}];function br(i,t,e){return[(e-i.origin[0])*i.metresPerDegree[0],-(t-i.origin[1])*i.metresPerDegree[1]]}function Zg(i,t,e){return Yg.map(n=>{const[s,r]=br(i,n.lat,n.lon);return{...n,x:s,z:r,y:t.yAt(s,r)+45,suburb:e(s,r)}})}const bs=U(3163482),th={council:{wall:U(14341834),roof:U(15001058),windows:"all",storey:3.3,parapet:.9,shades:!0},hall:{wall:U(13223613),roof:U(14211541),windows:"ground",storey:4.2,parapet:.7},sport:{wall:U(13617856),roof:U(14474456),windows:"ground",storey:4,parapet:.4},gallery:{wall:U(15262938),roof:U(15526886),windows:"all",storey:3.8,parapet:.5,shades:!0},community:{wall:U(12755331),roof:U(7557184),windows:"all",storey:3.2,parapet:.2,pitched:!0},school:{wall:U(14472905),roof:U(14277851),windows:"all",storey:3.1,parapet:.15,shades:!0,pitched:!0},police:{wall:U(13488854),roof:U(11975357),windows:"all",storey:3.4,parapet:.5,shades:!0},shops:{wall:U(14208960),roof:U(13685196),windows:"ground",storey:4.4,parapet:.8},other:{wall:U(14012355),roof:U(13619403),windows:"all",storey:3.4,parapet:.4,pitched:!0}},eh=[15921904,14277339,10132896,3948356,2040358,12069163,2969487,7372940,15262676,4877138].map(U),qi=[5209412,5932872,6853456,4682303].map(U),nh=[14273976,13219740,11901570,15130578,11109480,10254946,13617341,12371656,15328208,12891042].map(U),ih=[9128506,10638655,7303026,4936280,9410199,12830662,5597263,8077107,4145991,11119270].map(U),sh=[4008997,9056042,15789282,3099228,5201226].map(U),rh=[9075560,14209728,9278097,6123356,10127988,7301731].map(U),gi=U(9409430),wr=[3104138,12076090,15131350,4156234,2895411,14263361,8018572,10135469].map(U),Tr=[14727578,13211508,10252114,15782068].map(U),Ne=se.degToRad,je=.25,on=[15527140,14925626,12368043,3828920,2763824,4867135].map(U);class $g{constructor(t){ht(this,"pos",[]);ht(this,"col",[]);this.hf=t}tri(t,e,n,s,r,o,a){const l=(s-e)*(r-t)-(n-t)*(o-e)>0;for(const[c,u]of l?[[t,e],[n,s],[r,o]]:[[t,e],[r,o],[n,s]])this.pos.push(c,this.hf.yAt(c,u)+je+.04,u),this.col.push(a[0],a[1],a[2])}line(t,e,n,s,r,o){const a=Math.hypot(n-t,s-e);if(a<.001)return;const l=-(s-e)/a*(r/2),c=(n-t)/a*(r/2),u=Math.max(1,Math.ceil(a/4));for(let f=0;f<u;f++){const d=t+(n-t)*f/u,h=e+(s-e)*f/u,p=t+(n-t)*(f+1)/u,_=e+(s-e)*(f+1)/u;this.tri(d-l,h-c,p-l,_-c,p+l,_+c,o),this.tri(d-l,h-c,p+l,_+c,d+l,h+c,o)}}shape(t,e,n,s,r,o){const a=Ne(n),l=Math.cos(a)*s,c=Math.sin(a)*s,u=d=>t+r[d*2]*l-r[d*2+1]*c,f=d=>e-r[d*2]*c-r[d*2+1]*l;for(let d=1;d+1<r.length/2;d++)this.tri(u(0),f(0),u(d),f(d),u(d+1),f(d+1),o)}disc(t,e,n,s){const r=[];for(let o=0;o<8;o++)r.push(Math.cos(o/8*Math.PI*2)*n,Math.sin(o/8*Math.PI*2)*n);this.shape(t,e,0,1,r,s)}build(){const t=new we,e=this.pos.length/3,n=new Float32Array(e*3);for(let o=0;o<e;o++)n[o*3+1]=1;t.setAttribute("position",new qt(new Float32Array(this.pos),3)),t.setAttribute("normal",new qt(n,3)),t.setAttribute("color",new qt(new Float32Array(this.col),3));const s=new mn({vertexColors:!0,transparent:!0,depthWrite:!1,roughness:.9,metalness:0,side:Pe,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),r=new $t(t,s);return r.receiveShadow=!0,r.renderOrder=25,r.name="precinct-paint",r}}function Jg(i,t){const[e,n]=t.centre;for(let o=0;o<t.paint.length;o+=6){const a=t.paint;i.line(e+a[o]/100,n+a[o+1]/100,e+a[o+2]/100,n+a[o+3]/100,a[o+4]/100,on[a[o+5]]??on[0])}const s=[-2.3,-.2,.5,-.2,.5,.2,-2.3,.2],r=[.4,-.75,2.3,0,.4,.75];for(let o=0;o<t.marks.length;o+=5){const a=e+t.marks[o]/100,l=n+t.marks[o+1]/100,c=t.marks[o+2]/10,u=t.marks[o+3]/100,f=t.marks[o+4];if(f===0)i.shape(a,l,c,u,s,on[0]),i.shape(a,l,c,u,r,on[0]);else if(f===1||f===2){const d=f===1?1:-1;i.shape(a,l,c,u,[-2.3,-.2,.3,-.2,.3,.2,-2.3,.2],on[0]),i.shape(a,l,c,u,[-.1,.2*d,.3,.2*d,.3,.95*d,-.1,.95*d],on[0]),i.shape(a,l,c,u,[-.65,.85*d,.85,.85*d,.1,2.15*d],on[0])}else if(f===3){i.disc(a,l,.55*u,on[0]);const d=Ne(c);i.disc(a+Math.cos(d)*.95*u,l-Math.sin(d)*.95*u,.24*u,on[0])}else i.disc(a,l,.42*u,on[2]),i.disc(a,l,.33*u,on[4])}}const oh=i=>i.map(t=>t/10);function Ar(i,t,e){let n=!1;for(let s=0,r=e.length-2;s<e.length;r=s,s+=2)e[s+1]>t!=e[r+1]>t&&i<(e[r]-e[s])*(t-e[s+1])/(e[r+1]-e[s+1])+e[s]&&(n=!n);return n}function Ca(i,t,e,n,s){const r=c=>Array.from({length:c.length/2},(u,f)=>new Ot(c[f*2],c[f*2+1])),o=r(t),a=e.map(r),l=o.concat(...a);for(const c of _s.triangulateShape(o,a)){const u=l[c[0]],f=l[c[1]],d=l[c[2]];(f.x-u.x)*(d.y-u.y)-(f.y-u.y)*(d.x-u.x)>0?i.tri(u.x,n,u.y,d.x,n,d.y,f.x,n,f.y,s):i.tri(u.x,n,u.y,f.x,n,f.y,d.x,n,d.y,s)}}function Qg(i,t,e,n,s,r,o){const a=t.length/2,l=t.map((u,f)=>(f%2?n:e)+(u-(f%2?n:e))*.32),c=Mr(t)>0;for(let u=0;u<a;u++){const f=(u+1)%a,d=t[u*2],h=t[u*2+1],p=t[f*2],_=t[f*2+1],m=l[u*2],g=l[u*2+1],v=l[f*2],y=l[f*2+1],M=zt(o,.92+.14*(u%4/3));c?i.quad(p,s,_,d,s,h,m,r,g,v,r,y,M):i.quad(d,s,h,p,s,_,v,r,y,m,r,g,M)}Ca(i,l,[],r,zt(o,1.04))}function ah(i,t,e,n,s,r,o,a,l,c,u=0){const f=t.length/2,d=Mr(t)>0;for(let h=0;h<f;h++){const p=(h+1)%f,_=t[h*2],m=t[h*2+1],g=t[p*2]-_,v=t[p*2+1]-m,y=Math.hypot(g,v);if(y<4.5||c!=null&&c(_,m,t[p*2],t[p*2+1]))continue;i.frame(_,n,m,Math.atan2(-v,g));const M=(d?1:-1)*(e?-1:1),b=-M*.07;if(u>0){const E=(C,P,w,N,F,z)=>{F>0?i.quad(C,P,F,w,P,F,w,N,F,C,N,F,z):i.quad(w,P,F,C,P,F,C,N,F,w,N,F,z)},D=zt(l,.74),R=b*.45;E(0,-.4,y,.5,R,zt(l,.8)),E(0,.5,y,.56,R*1.2,D);const L=Math.max(1,Math.round(y/3.6));for(let C=1;C<L;C++)E(y*C/L-.02,.56,y*C/L+.02,u,R,D);for(let C=r;C<u-.6;C+=r)E(0,C-.02,y,C+.02,R,D);i.box(-.05,u,Math.min(-M*.16,M*.1),y+.05,u+.16,Math.max(-M*.16,M*.1),zt(l,1.1),zt(l,1.16))}const S=Math.max(1,Math.floor((y-1.25)/2.95)),x=(y-1.6-(S-1)*.35)/S;for(const E of s){const D=E*r+.95,R=D+Math.min(1.6,r-1.5);for(let L=0;L<S;L++){const C=.8+L*(x+.35),P=C+x,w=o()<.32?.85:.05,N=(O,$,et,X,J,j,at=0)=>{J>0?i.quad(O,$,J,et,$,J,et,X,J,O,X,J,j,at):i.quad(et,$,J,O,$,J,O,X,J,et,X,J,j,at)},F=zt(l,.72),z=b*1.25,K=b*1.5;N(C-.09,D-.09,P+.09,R+.09,b*.8,F),N(C,D,P,R,b,bs,w),N(C,D+(R-D)*.55,P,R,z,zt(bs,1.9),w),o()<.3&&N(C,R-(R-D)*(.25+o()*.4),P,R,z*1.1,U(12170666),w*.5);const V=Math.max(1,Math.round((P-C)/1.25));for(let O=1;O<V;O++){const $=C+(P-C)*O/V;N($-.03,D,$+.03,R,K,F)}N(C,D+(R-D)*.55-.025,P,D+(R-D)*.55+.025,K,F);const k=Math.sign(b);i.box(C-.12,D-.2,Math.min(0,k*.2),P+.12,D-.09,Math.max(0,k*.2),zt(l,1.1)),i.box(C-.09,R+.03,Math.min(0,k*.15),P+.09,R+.1,Math.max(0,k*.15),F)}if(a&&y>7){const L=-M*.02,C=-M*.62,P=R+.16,w=P+.14;i.box(.5,P,Math.min(L,C),y-.5,w,Math.max(L,C),zt(l,.86),zt(l,1.05),zt(l,.7))}}}}function jg(i,t,e,n,s){const r=th[t.k]??th.other,o=oh(t.p),a=t.h.map(oh),l=o.length/2;let c=1/0,u=0,f=0,d=0;for(let C=0;C<l;C++){const P=e.yAt(o[C*2],o[C*2+1]);c=Math.min(c,P),u+=P,f+=o[C*2]/l,d+=o[C*2+1]/l}const h=Math.abs(Mr(o)),p=o.filter((C,P)=>P%2===0),_=o.filter((C,P)=>P%2===1),m=Math.min(...p),g=Math.max(...p),v=Math.min(..._),y=Math.max(..._),M=!!r.pitched&&a.length===0&&t.a-t.e>1.1&&h<2600&&h/((g-m)*(y-v))>.55,b=u/l,S=b+t.e,x=S+(M?0:r.parapet);i.frame(),i.walls(o,c-.4,x,r.wall);for(const C of a)i.walls(C,c-.4,x,zt(r.wall,.94));M?Qg(i,o,f,d,S,b+t.a,r.roof):Ca(i,o,a,S,r.roof);const E=Math.max(1,Math.round(t.e/r.storey)),D=t.e/E,R=r.windows==="none"?[]:r.windows==="ground"?[0]:Array.from({length:E},(C,P)=>P);if(D>=2.6){const C=(w,N,F)=>!!s&&Math.hypot(w-s.wall[F],N-s.wall[F+1])<1.5,P=t.k==="council"&&s?(w,N,F,z)=>C(w,N,0)&&C(F,z,2)||C(w,N,2)&&C(F,z,0):void 0;ah(i,o,!1,b,R,D,n,!!r.shades,r.wall,P,M?t.e:t.e+r.parapet);for(const w of a)ah(i,w,!0,b,R,D,n,!!r.shades,r.wall)}if(t.k==="hall"&&t.a-t.e>3){const C=o.map((P,w)=>(w%2?d:f)+(P-(w%2?d:f))*.5);i.frame(),i.walls(C,S,b+t.a*.92,zt(r.wall,.96)),Ca(i,C,[],b+t.a*.92,r.roof)}else if(!M&&t.k!=="council"&&t.k!=="community"){const C=Math.min(10,Math.floor(h/420));for(let P=0,w=0;P<C&&w<120;w++){const N=m+n()*(g-m),F=v+n()*(y-v);[[-3,-3],[3,-3],[3,3],[-3,3]].every(([K,V])=>Ar(N+K,F+V,o)&&!a.some(k=>Ar(N+K,F+V,k)))&&(i.frame(N,S,F,n()*.6),i.box(-1.3,0,-.9,1.3,1.1,.9,U(11119528),U(12764353)),P++)}}const L=(C,P)=>Ar(C,P,o)&&!a.some(w=>Ar(C,P,w));return{floor:b,roofY:S,top:x,wall:r.wall,onRoof:L}}function t_(i,t,e,n,s,r){for(const[f,d,h,p,_]of t.solar){i.frame(f,n+.3,d,Ne(_));for(let m=0;m*1.25+1.05<=p;m++){const g=-p/2+m*1.25,v=g+1.05;for(let y=-h/2;y+2<=h/2;y+=5.5){const M=Math.min(y+5.2,h/2);[[y,g],[M,g],[M,v],[y,v]].every(([b,S])=>r(i.wx(b,S),i.wz(b,S)))&&i.quad(y,0,v,M,0,v,M,0,g,y,0,g,U(1911879))}}}for(const[f,d,h,p,_,m]of t.plant)i.frame(f,n,d,Ne(_)),i.box(-h/2,0,-p/2,h/2,m,p/2,U(10198426),U(12040630));const[o,a,l,c,u]=t.canopy;if(i.frame(o,e,a,Ne(u)),!t.entry){i.box(-l/2,4,-c/2,l/2,4.4,c/2,U(15658730),void 0,U(14277076));for(const[f,d]of[[-1,-1],[1,-1],[1,1],[-1,1]])i.box(f*(l/2-.6)-.2,0,d*(c/2-.6)-.2,f*(l/2-.6)+.2,4,d*(c/2-.6)+.2,U(13619146))}for(let f=-2;f<=2;f++)i.cyl(f*2.2,0,c/2+1.6,.13,.13,.95,6,U(7172469),U(9080466));for(const f of[-1,1])i.box(f*(l/2+2.2)-.9,.38,-.25,f*(l/2+2.2)+.9,.48,.25,U(9071178)),i.box(f*(l/2+2.2)-.8,0,-.2,f*(l/2+2.2)-.7,.38,.2,gi,null),i.box(f*(l/2+2.2)+.7,0,-.2,f*(l/2+2.2)+.8,.38,.2,gi,null);i.frame(t.mast[0],n,t.mast[1]),i.cyl(0,0,0,.32,.12,e+s-n,6,U(13159116)),i.box(-.25,e+s-n,-.25,.25,e+s-n+.5,.25,U(13650490),void 0,null,1)}function lh(i){const[t,e,n,s]=i.wall,r=Math.hypot(n-t,s-e),o=(n-t)/r,a=(s-e)/r,l=(i.flags[0]/10-t)*-a+(i.flags[1]/10-e)*o>0?1:-1;return{ax:t,az:e,len:r,ux:o,uz:a,nx:-a*l,nz:o*l}}function e_(i,t,e,n,s){const r=lh(t),o=zt(s,.8);i.frame();const a=(P,w)=>[r.ax+r.ux*P+r.nx*w,r.az+r.uz*P+r.nz*w];for(let P=4.6;P<r.len-1;P+=4.6){const[w,N]=a(P-.03,.03),[F,z]=a(P+.03,.03);i.quad(w,e-.4,N,F,e-.4,z,F,n,z,w,n,N,o)}for(const P of[e+2.9,e+6.2]){const[w,N]=a(.1,.03),[F,z]=a(r.len-.1,.03);i.quad(w,P-.025,N,F,P-.025,z,F,P+.025,z,w,P+.025,N,o)}const l=t.roof,c=l.length/2;let u=0,f=0;for(let P=0;P<c;P++)u+=l[P*2]/c,f+=l[P*2+1]/c;const[d,h,p,_]=t.doors,m=Math.hypot(p-d,_-h),g=(P,w)=>e+5+.36*Math.abs((P-d)*-(_-h)+(w-h)*(p-d))/m,v=[];for(let P=0;P<c;P++){const w=u+(l[P*2]-u)*1.14,N=f+(l[P*2+1]-f)*1.14;v.push([w,g(w,N),N])}const y=.55,M=U(15328988);for(let P=0;P<c;P++){const w=v[P],N=v[(P+1)%c];if(i.quad(w[0],w[1],w[2],N[0],N[1],N[2],N[0],N[1]+y,N[2],w[0],w[1]+y,w[2],M),P>0&&P<c-1){const F=v[0];i.tri(F[0],F[1],F[2],w[0],w[1],w[2],N[0],N[1],N[2],U(15722191)),i.tri(F[0],F[1]+y,F[2],N[0],N[1]+y,N[2],w[0],w[1]+y,w[2],U(14474454))}}for(let P=1;P<c-1;P++){const w=u+(l[P*2]-u)*.9,N=f+(l[P*2+1]-f)*.9;i.box(w-.22,e-.4,N-.22,w+.22,g(w,N),N+.22,U(14078664),null)}const b=Math.min(m/2-.3,1.9),S=(d+p)/2,x=(h+_)/2,E=(p-d)/m,D=(_-h)/m,R=(u-S)*-D+(f-x)*E>0?1:-1,L=-D*R*.07,C=E*R*.07;i.quad(S-E*b+L,e,x-D*b+C,S+E*b+L,e,x+D*b+C,S+E*b+L,e+2.7,x+D*b+C,S-E*b+L,e+2.7,x-D*b+C,bs,.6)}function n_(i,t){if(typeof document>"u")return null;const[e,n,s,r]=i.sign,o=document.createElement("canvas");o.width=4096,o.height=Math.round(4096*s/n);const a=o.getContext("2d");if(!a)return null;const l=o.width/n,c=(b,S,x,E,D,R,L="#2a2a2b")=>{a.fillStyle=L,a.font=`${R} ${Math.round(D/.716*l)}px "Arial Black", "Helvetica Neue", Arial, sans-serif`,a.letterSpacing="0.12em";const C=a.measureText(b).width;a.save(),a.translate(S*l,E*l),a.scale((x-S)*l/C,1),a.fillText(b,0,0),a.restore()};c("LOGAN CITY COUNCIL",1.5,12,.74,.58,900),c("ADMINISTRATION CENTRE",1.5,8.9,1.36,.3,700),c("150 WEMBLEY ROAD",1.5,7,1.96,.3,700);const u="#1f2a5c",f=s/2*l,d=(b,S,x,E)=>{a.beginPath(),a.arc(b*l,f,S*l,0,Math.PI*2),a.strokeStyle=x,a.lineWidth=E*l,a.stroke()};for(const b of[.66,n-.66])a.beginPath(),a.arc(b*l,f,.64*l,0,Math.PI*2),a.fillStyle="#f6f5f0",a.fill(),d(b,.62,u,.025),d(b,.55,u,.012);{const b=(n-.66)*l,S=.55*l,x=f+.02*S,E=(R,L,C,P,w,N,F)=>{a.beginPath(),a.moveTo(b,x),a.quadraticCurveTo(b+C*S,f+P*S,b+R*S,f+L*S),a.quadraticCurveTo(b+w*S,f+N*S,b,x),a.fillStyle=F,a.fill()};E(-.56,-.42,-.5,.04,-.2,-.36,u),E(.56,-.42,.5,.04,.2,-.36,u),E(-.3,-.6,-.36,-.3,-.06,-.32,"#c5462f"),E(.3,-.6,.36,-.3,.06,-.32,"#8e2b3b");const D=a.createLinearGradient(0,f-.74*S,0,x);D.addColorStop(0,"#f8cf4a"),D.addColorStop(1,"#ee8527"),E(0,-.74,-.2,-.36,.2,-.36,D),a.fillStyle=u,a.fillRect(b-.02*S,x,.04*S,.1*S),a.textAlign="center",a.font=`600 ${Math.round(.15*S)}px "Helvetica Neue", Arial, sans-serif`,a.fillText("CITY OF",b,f+.3*S),a.font=`800 ${Math.round(.33*S)}px "Helvetica Neue", Arial, sans-serif`,a.fillText("LOGAN",b,f+.64*S),a.textAlign="left"}{const b=.66*l,S=.55*l;a.setLineDash([.02*l,.018*l]),d(.66,.48,"#55606a",.035),a.setLineDash([]);const x=()=>{a.beginPath(),a.moveTo(b-.42*S,f-.52*S),a.quadraticCurveTo(b-.2*S,f-.44*S,b,f-.56*S),a.quadraticCurveTo(b+.2*S,f-.44*S,b+.42*S,f-.52*S),a.lineTo(b+.42*S,f+.12*S),a.quadraticCurveTo(b+.4*S,f+.46*S,b,f+.66*S),a.quadraticCurveTo(b-.4*S,f+.46*S,b-.42*S,f+.12*S),a.closePath()};a.save(),x(),a.clip(),a.fillStyle="#1e4a39",a.fillRect(b-S,f-S,2*S,2*S),a.fillStyle="#a9cbe8",a.fillRect(b-S,f-.04*S,2*S,.2*S),a.fillStyle="#3f78b5",a.fillRect(b-S,f+.14*S,2*S,.14*S),a.fillStyle="#2c5e3d",a.beginPath(),a.moveTo(b-S,f+.34*S),a.quadraticCurveTo(b-.2*S,f+.16*S,b+.1*S,f+.3*S),a.quadraticCurveTo(b+.3*S,f+.2*S,b+S,f+.32*S),a.lineTo(b+S,f+S),a.lineTo(b-S,f+S),a.fill(),a.fillStyle="#f4f3ee";for(const[E,D,R]of[[-.18,-.26,.085],[.2,-.36,.045],[.24,-.14,.045],[.02,-.4,.04]]){a.beginPath();for(let L=0;L<8;L++){const C=L/8*Math.PI*2,P=(L%2?.38:1)*R*S;a.lineTo(b+E*S+Math.sin(C)*P,f+D*S-Math.cos(C)*P)}a.fill()}a.restore(),x(),a.strokeStyle="#1c2b33",a.lineWidth=.02*l,a.stroke()}const h=lh(i),p=e-n/2,_=t+r-s/2,m=(b,S)=>[h.ax+h.ux*b+h.nx*.08,S,h.az+h.uz*b+h.nz*.08],g=new we;g.setAttribute("position",new qt(new Float32Array([...m(p,_),...m(p+n,_),...m(p+n,_+s),...m(p,_+s)]),3)),g.setAttribute("normal",new qt(new Float32Array([0,1,2,3].flatMap(()=>[h.nx,0,h.nz])),3)),g.setAttribute("uv",new qt(new Float32Array([0,0,1,0,1,1,0,1]),2));const v=-h.uz*h.nx+h.ux*h.nz>0;g.setIndex(v?[0,1,2,0,2,3]:[0,2,1,0,3,2]);const y=new sr(o);y.colorSpace=Ue,y.anisotropy=8;const M=new $t(g,new mn({map:y,transparent:!0,depthWrite:!1,roughness:.9,metalness:0,side:Pe}));return M.name="precinct-name",M}const i_=U(1452138),Rr=U(16053488),ch=U(13115436);function s_(i,t,e){for(let s=0;s<t.flags.length;s+=3){const r=t.flags[s]/10,o=t.flags[s+1]/10,a=s/3;i.frame(r,e.yAt(r,o)+je,o,Ne(t.flags[s+2]/10)),i.cyl(0,0,0,.06,.045,7.2,6,U(14277596),U(13214266));const l=(u,f,d,h,p,_=0)=>{for(const m of _?[_*.012,-_*.012]:[0])i.quad(.08+u*1.8,6.15+f*.9,m,.08+d*1.8,6.15+f*.9,m,.08+d*1.8,6.15+h*.9,m,.08+u*1.8,6.15+h*.9,m,p)},c=(u,f,d,h)=>{for(const p of[.012,-.012])for(let _=0;_<8;_++){const m=_/8*Math.PI*2,g=(_+1)/8*Math.PI*2,v=M=>.08+(u+Math.cos(M)*d*.5)*1.8,y=M=>6.15+(f+Math.sin(M)*d)*.9;i.tri(.08+u*1.8,6.15+f*.9,p,v(m),y(m),p,v(g),y(g),p,h)}};if(a===0){l(0,0,1,1,i_),l(0,.68,.5,.82,Rr,1),l(.2,.5,.3,1,Rr,1),l(0,.72,.5,.78,ch,2),l(.225,.5,.275,1,ch,2);for(const[u,f,d]of[[.25,.25,.11],[.75,.8,.06],[.62,.5,.06],[.75,.2,.06],[.88,.56,.06]])c(u,f,d,Rr)}else a===1?(l(0,.5,1,1,U(1184274)),l(0,0,1,.5,U(13115436)),c(.5,.5,.25,U(16240919))):a===2?(l(0,.8,1,1,U(2067020)),l(0,.74,1,.8,U(1184274)),l(0,.26,1,.74,U(1920924)),l(0,.2,1,.26,U(1184274)),l(0,0,1,.2,U(2067020)),c(.5,.5,.15,Rr)):l(0,0,1,1,U(15910685))}for(let s=0;s<t.hedges.length;s+=4){const r=t.hedges[s]/10,o=t.hedges[s+1]/10,a=t.hedges[s+2]/10,l=t.hedges[s+3]/10;i.frame(r,(e.yAt(r,o)+e.yAt(a,l))/2+je-.1,o,Math.atan2(-(l-o),a-r));const c=Math.hypot(a-r,l-o),u=[U(4881726),U(5671492),U(4486714)];i.box(0,0,-.42,c,.82,.42,U(4157239),U(5211202));for(let f=0,d=.45;d<c-.2;f++,d+=.82){const h=u[(s+f)%3],p=.6+f*7%5*.03;i.blob(d,.56,0,p,.56,p,6,3,zt(h,.82),zt(h,1.12))}}for(let s=0;s<t.tufts.length;s+=2){const r=t.tufts[s]/10,o=t.tufts[s+1]/10;i.frame(r,e.yAt(r,o)+je,o,s);for(let a=0;a<6;a++){const l=a/6*Math.PI*2,c=Math.cos(l),u=Math.sin(l);i.tri(-u*.09,0,c*.09,u*.09,0,-c*.09,c*.42,1.25,u*.42,U(a%2?8201016:6102317))}}i.frame();const n=U(9409430);for(let s=0;s<t.rails.length;s+=4){const r=t.rails[s]/10,o=t.rails[s+1]/10,a=t.rails[s+2]/10,l=t.rails[s+3]/10,c=e.yAt(r,o)+je,u=e.yAt(a,l)+je,f=Math.max(2,Math.round(Math.hypot(a-r,l-o)/1.4)+1);for(const d of[.5,.98])Rs(i,r,c+d,o,a,u+d,l,.025,.025,n);for(let d=0;d<f;d++){const h=d/(f-1),p=r+(a-r)*h,_=o+(l-o)*h,m=c+(u-c)*h;i.box(p-.03,m,_-.03,p+.03,m+.98,_+.03,n,null)}}}const ws=U(3095882),Cr=U(1710877),hh=U(11120048),uh=U(16774358),dh=U(13771548);function an(i,t,e,n){const r=U(1184532);for(const o of[-1,1]){const a=o*(t+.03),l=o*(t-.22),c=(f,d)=>[n+Math.sin(f/10*Math.PI*2)*d,e+Math.cos(f/10*Math.PI*2)*d];for(let f=0;f<10;f++){const[d,h]=c(f,n),[p,_]=c(f+1,n),[m,g]=c(f,n*.56),[v,y]=c(f+1,n*.56);o>0?(i.quad(l,d,h,l,p,_,a,p,_,a,d,h,Cr),i.quad(a,d,h,a,p,_,a,v,y,a,m,g,Cr),i.tri(a+.01,n,e,a+.01,m,g,a+.01,v,y,hh)):(i.quad(l,p,_,l,d,h,a,d,h,a,p,_,Cr),i.quad(a,p,_,a,d,h,a,m,g,a,v,y,Cr),i.tri(a-.01,n,e,a-.01,v,y,a-.01,m,g,hh))}const u=o*(t+.012);for(let f=0;f<6;f++){const d=f/6*Math.PI,h=(f+1)/6*Math.PI,p=n*1.02,_=n*1.2,m=(D,R)=>[n+Math.sin(D)*R,e+Math.cos(D)*R],[g,v]=m(d,p),[y,M]=m(h,p),[b,S]=m(h,_),[x,E]=m(d,_);o>0?i.quad(u,g,v,u,y,M,u,b,S,u,x,E,r):i.quad(u,y,M,u,g,v,u,x,E,u,b,S,r)}}}function Ts(i,t,e,n,s,r,o,a,l,c){const u=U(1908514),f=zt(l,.55),d=U(15987436),h=U(13225166);i.box(-t-.02,e-.04,s-.04,t+.02,e+.2,s+.07,u),i.box(-t-.02,e-.04,r-.07,t+.02,e+.2,r+.04,u),i.quad(-t+.48,e+.24,s+.02,t-.48,e+.24,s+.02,t-.48,e+.44,s+.02,-t+.48,e+.44,s+.02,u),i.quad(-.19,e+.02,s+.075,.19,e+.02,s+.075,.19,e+.14,s+.075,-.19,e+.14,s+.075,d),i.quad(.19,e+.24,r-.02,-.19,e+.24,r-.02,-.19,e+.36,r-.02,.19,e+.36,r-.02,d);for(const p of[-1,1]){const _=p*(t+.012),m=(g,v,y,M,b)=>{p>0?i.quad(_,g,M,_,g,y,_,v,y,_,v,M,b):i.quad(_,g,y,_,g,M,_,v,M,_,v,y,b)};for(const g of o)m(e+.08,n-.02,g-.012,g+.012,f);for(let g=0;g+1<o.length;g++)m(n-.16,n-.12,o[g+1]+.12,o[g+1]+.3,h);m(e,e+.07,r+.5,s-.5,u),i.box(Math.min(p*t,p*(t+.2)),n+.02,a-.07,Math.max(p*t,p*(t+.2)),n+.16,a+.07,u)}if(c){const[p,_,m]=c;for(const g of[-1,1])i.box(g*(t-.22)-.02,p,_,g*(t-.22)+.02,p+.07,m,u);for(const g of[_+.25,m-.25])i.box(-t+.2,p+.05,g-.025,t-.2,p+.09,g+.025,u)}}function As(i,t,e,n,s,r,o,a,l){const c=t-.09;i.quad(-t,e,r,t,e,r,c,n,a,-c,n,a,ws),i.quad(t,e,s,-t,e,s,-c,n,o,c,n,o,ws),i.quad(t,e,r,t,e,s,c,n,o,c,n,a,ws),i.quad(-t,e,s,-t,e,r,-c,n,a,-c,n,o,ws),i.quad(-c,n,a,c,n,a,c,n,o,-c,n,o,l)}function Yi(i,t,e,n,s,r,o,a=.16){const l=o?-1:0,c=o?-.85:0,u=n+.012;for(const f of[-1,1]){const d=f*(t-.27)-.17,h=d+.34;i.quad(d,e,s+.015,h,e,s+.015,h,e+a,s+.015,d,e+a,s+.015,uh,l),i.quad(d,u,s,h,u,s,h,u,s-.2,d,u,s-.2,uh,l),i.quad(h,e,r-.015,d,e,r-.015,d,e+a,r-.015,h,e+a,r-.015,dh,c),i.quad(d,u,r+.2,h,u,r+.2,h,u,r,d,u,r,dh,c)}}function r_(i){const s=U(15659247),r=U(2067078),o=U(16753951);an(i,1.25,3.7,.48),an(i,1.25,-3.3,.48),i.box(-1.25,.34,-6.1,1.25,.98,6.1,s,null),i.box(-1.25,.98,-6.1,1.25,1.28,6.1,r,null),i.box(-1.25,1.28,-6.1,1.25,2.3,6.1,ws,null),i.box(-1.25,2.3,-6.1,1.25,3.02,6.1,s,U(14277851)),i.box(-.8,3.02,-3.4,.8,3.24,-.6,U(12896456));for(const[a,l]of[[4.2,5.4],[-.9,.5]])i.quad(1.27,.42,l,1.27,.42,a,1.27,2.3,a,1.27,2.3,l,U(1449252));i.quad(-.95,2.42,6.119999999999999,.95,2.42,6.119999999999999,.95,2.86,6.119999999999999,-.95,2.86,6.119999999999999,o,-.9),Yi(i,1.25,.6,3.02,6.1,-6.1,!0,.2)}function Pa(i,t,e){const n=U(2763823);for(let s=0;s<t.length;s+=4){const r=t[s]/10,o=t[s+1]/10,a=t[s+3];if(i.frame(r,e.yAt(r,o)+je,o,Ne(90+t[s+2]/10)),a>=100){r_(i);continue}const l=a>=20,c=s/4,u=(c*7+a%20*3)%10,f=eh[u===9&&c%3?0:a%eh.length],d=zt(f,.93);u<=3?(an(i,.89,1.42,.32),an(i,.89,-1.38,.32),i.box(-.89,.26,-2.3,.89,.8,2.3,f,null),i.quad(-.89,.8,1,.89,.8,1,.89,.7,2.3,-.89,.7,2.3,zt(f,1.05)),i.quad(-.89,.8,-2.3,.89,.8,-2.3,.89,.8,1,-.89,.8,1,f),As(i,.84,.8,1.42,-1.6,1,-1,.42,d),Yi(i,.89,.56,.8,2.3,-2.3,l),Ts(i,.89,.26,.8,2.3,-2.3,[.95,-.1,-1.1],.9,f)):u<=5?(an(i,.87,1.25,.31),an(i,.87,-1.3,.31),i.box(-.87,.26,-2,.87,.84,2,f),As(i,.82,.84,1.47,-1.95,.85,-1.62,.3,d),Yi(i,.87,.58,.84,2,-2,l),Ts(i,.87,.26,.84,2,-2,[.8,-.2,-1.15],.75,f)):u<=7?(an(i,.94,1.45,.37),an(i,.94,-1.42,.37),i.box(-.94,.33,-2.35,.94,1,2.35,f),As(i,.89,1,1.74,-2.3,1,-2.05,.5,d),Yi(i,.94,.72,1,2.35,-2.35,l),Ts(i,.94,.33,1,2.35,-2.35,[.95,-.15,-1.2],.9,f,c%2?[1.74,-1.9,.3]:void 0)):u===8?(an(i,.93,1.7,.37),an(i,.93,-1.65,.37),i.box(-.93,.33,0,.93,.98,2.65,f),i.box(-.93,.33,-2.65,.93,.98,0,f,n),As(i,.88,.98,1.72,.05,1.5,.2,1.05,d),Yi(i,.93,.7,.98,2.65,-2.65,l),Ts(i,.93,.33,.98,2.65,-2.65,[1.45,.25,0],1.4,f)):(an(i,.97,1.75,.35),an(i,.97,-1.6,.35),i.box(-.97,.3,-2.6,.97,1.08,2.6,f),i.box(-.97,1.08,-2.6,.97,2.02,1.2,f,d),As(i,.97,1.08,2.02,1.2,2.3,1.2,1.72,d),Yi(i,.97,.66,1.08,2.6,-2.6,l),Ts(i,.97,.3,1.08,2.6,-2.6,[2.2,1.2,-.4],2.2,f))}}const fh=U(7297605),ph=U(13353648),mh=[7047774,8033384,6258520].map(U),gh=[9336009,10849248,8020664].map(U),o_=U(3495996);function Rs(i,t,e,n,s,r,o,a,l,c){const u=s-t,f=r-e,d=o-n,h=Math.hypot(u,f,d)||1;let p=-d,_=u;const m=Math.hypot(p,_);m<1e-6?(p=1,_=0):(p/=m,_/=m);const g=f/h*_,v=d/h*p-u/h*_,y=-(f/h)*p,M=(b,S,x,E,D)=>[x+(p*Math.cos(b)+g*Math.sin(b))*S,E+v*Math.sin(b)*S,D+(_*Math.cos(b)+y*Math.sin(b))*S];for(let b=0;b<4;b++){const S=b/4*Math.PI*2,x=(b+1)/4*Math.PI*2,E=M(S,a,t,e,n),D=M(x,a,t,e,n),R=M(x,l,s,r,o),L=M(S,l,s,r,o);i.quad(E[0],E[1],E[2],D[0],D[1],D[2],R[0],R[1],R[2],L[0],L[1],L[2],c)}}function _h(i,t,e,n){for(let s=0;s<t.length;s+=4){const r=t[s]/10,o=t[s+1]/10,a=t[s+2]/10,l=t[s+3];if(!n(a,l))continue;const c=si(5e3+t[s]*5+t[s+1]*9),u=c()*Math.PI*2,f=qi[Math.floor(c()*qi.length)];if(i.frame(r,e.yAt(r,o),o,u),l===1||l===5){const d=l===5,h=d?13+c()*4.5:6.5+c()*4.5,p=Math.max(a,2.2)*(d?1.12:1),_=U(5012799),m=U(7643735),g=d?15:12,v=d?.4:.52;d?(i.cyl(0,0,0,.21,.14,h-1.2,6,U(10985877)),i.cyl(0,h-1.2,0,.17,.12,1.25,6,U(8823647))):(i.cyl(0,0,0,.26,.17,h,5,U(9075302)),i.blob(0,h+.1,0,.5,.45,.5,5,3,_));const y=p/3.3,M=[[1.5,2,1.2],[1,1,-.2],[.6,.2,-1.5]];for(let b=0;b<g;b++){const S=b/g*Math.PI*2+c()*.3,x=Math.cos(S),E=Math.sin(S),D=M[b%3],R=b%2?_:m,L=(V,k,O,$)=>[x*p*V-E*O*$,h+k*y,E*p*V+x*O*$],C=L(0,0,.12,-1),P=L(0,0,.12,1),w=L(.35,D[0],v,-1),N=L(.35,D[0],v,1),F=L(.75,D[1],v*.9,-1),z=L(.75,D[1],v*.9,1),K=L(1.1,D[2],0,0);i.quad(C[0],C[1],C[2],P[0],P[1],P[2],N[0],N[1],N[2],w[0],w[1],w[2],R),i.quad(w[0],w[1],w[2],N[0],N[1],N[2],z[0],z[1],z[2],F[0],F[1],F[2],zt(R,.94)),i.tri(F[0],F[1],F[2],z[0],z[1],z[2],K[0],K[1],K[2],zt(R,.88))}}else if(l===2){const d=(5+a*1.5)*.52,h=mh[Math.floor(c()*mh.length)];i.cyl(0,0,0,.22+a*.03,.15,d+.2,5,ph);for(let p=0;p<3;p++){const _=p*2.09+c()*.8,m=a*(.42+.22*c()),g=d*(1.65+.5*c()),v=a*(.44+.14*c());Rs(i,0,d,0,Math.cos(_)*m,g,Math.sin(_)*m,.13,.06,ph),i.blob(Math.cos(_)*m,g+v*.3,Math.sin(_)*m,v,v*.62,v,6,3,zt(h,.8),zt(h,1.16))}}else if(l===3){const d=1.8+a*.5,h=gh[Math.floor(c()*gh.length)];i.cyl(0,0,0,.18+a*.03,.14,d+.2,5,U(5982780));for(let p=0;p<3;p++){const _=p*2.09+c()*.6,m=a*.52,g=d+a*.5;Rs(i,0,d,0,Math.cos(_)*m,g,Math.sin(_)*m,.11,.06,U(5982780)),i.blob(Math.cos(_)*m,g+a*.16,Math.sin(_)*m,a*.56,a*.36,a*.56,6,3,zt(h,.82),zt(h,1.12))}i.blob(0,d+a*.86,0,a*.5,a*.34,a*.5,6,3,zt(h,.86),zt(h,1.15))}else if(l===4){const d=4+a*2.2;i.cyl(0,0,0,.16,.1,d*.3,5,fh);for(let h=0;h<3;h++)i.cyl(0,d*(.18+.26*h),0,a*(.78-.2*h),.02,d*.38,6,zt(o_,.9+.1*h))}else{const d=1.6+a*.75,h=a>4.5?3:a>2.6?2:0;i.cyl(0,0,0,.2+a*.035,.16+a*.02,d+a*.3,5,fh),i.blob(0,d+a*.62,0,a*(h?.86:1),a*.72,a*(h?.86:1),a>7?9:7,a>7?5:4,zt(f,.82),zt(f,1.18));for(let p=0;p<h;p++){const _=p*(6.283/h)+c(),m=a*(.48+.12*c());i.blob(Math.cos(_)*a*.5,d+a*(.42+.25*c()),Math.sin(_)*a*.5,m,m*.72,m,6,3,zt(f,.78),zt(f,1.12))}}}}function a_(i,t,e){for(let n=0;n<t.length;n+=3){const s=t[n]/10,r=t[n+1]/10,o=t[n+2]/10;i.frame(s,e.yAt(s,r),r),i.cyl(0,0,0,.11,.08,o,5,gi),i.box(-.7,o,-.22,.7,o+.16,.22,U(14211282),void 0,U(16773832),1)}}function Hn(i,t,e,n,s,r,o,a,l,c=0,u=.05){t===0?i.quad(s,o,n/2+u,r,o,n/2+u,r,a,n/2+u,s,a,n/2+u,l,c):t===1?i.quad(r,o,-n/2-u,s,o,-n/2-u,s,a,-n/2-u,r,a,-n/2-u,l,c):t===2?i.quad(e/2+u,o,r,e/2+u,o,s,e/2+u,a,s,e/2+u,a,r,l,c):i.quad(-e/2-u,o,s,-e/2-u,o,r,-e/2-u,a,r,-e/2-u,a,s,l,c)}function l_(i,t,e,n,s){const r=U(12368043),o=U(9409430);for(let a=0;a<t.length;a+=9){const l=s==null?void 0:s.get(`${t[a]},${t[a+1]}`),c=si(9001+t[a]*7+t[a+1]*13),u=t[a]/10,f=t[a+1]/10,d=t[a+2]/10,h=t[a+3]/10,p=t[a+5]/10,_=Math.max(t[a+6]/10,p+.25),m=t[a+7],g=e.yAt(u,f);i.frame(u,g,f,-Ne(t[a+4]/10));const v=d*h<46||p<2.35,y=v?U(c()<.5?12172474:13617851):nh[Math.floor(c()*nh.length)],M=v?U(c()<.5?10988200:8225926):ih[Math.floor(c()*ih.length)],b=l?zt(U(l[0]),.92):M;i.box(-d/2,-.6,-h/2,d/2,p,h/2,y,null);const S=v?.15:.45,x=d/2+S,E=h/2+S,D=v||c()<.32,R=D?x:Math.max(.2,x-E*.9),L=zt(b,1.06),C=zt(b,.9),P=zt(b,.98);if(i.quad(-x,p,E,x,p,E,R,_,0,-R,_,0,L),i.quad(x,p,-E,-x,p,-E,-R,_,0,R,_,0,C),D?(i.tri(x-S,p,h/2,x-S,p,-h/2,x-S,_,0,y),i.tri(-x+S,p,-h/2,-x+S,p,h/2,-x+S,_,0,y)):(i.tri(x,p,E,x,p,-E,R,_,0,P),i.tri(-x,p,-E,-x,p,E,-R,_,0,P)),v){d>4.5&&p>2.1&&Hn(i,m,d,h,-1.3,1.3,0,Math.min(2.1,p-.15),U(14934488));continue}const w=si(4242+t[a]*3+t[a+1]*11),N=w()<.6?U(15855592):U(4014405),F=(ut,Ut,Bt)=>ut===0?[Ut,h/2+Bt]:ut===1?[Ut,-h/2-Bt]:ut===2?[d/2+Bt,Ut]:[-d/2-Bt,Ut],z=(ut,Ut,Bt,le,Me,ye,H,pe,de)=>{const[he,gt]=F(ut,Ut,le),[xe,Nt]=F(ut,Bt,Me);i.box(Math.min(he,xe),ye,Math.min(gt,Nt),Math.max(he,xe),H,Math.max(gt,Nt),pe,de)};i.quad(-x,p-.2,E,x,p-.2,E,x,p,E,-x,p,E,N),i.quad(x,p-.2,-E,-x,p-.2,-E,-x,p,-E,x,p,-E,N),D||(i.quad(x,p-.2,E,x,p-.2,-E,x,p,-E,x,p,E,N),i.quad(-x,p-.2,-E,-x,p-.2,E,-x,p,E,-x,p,-E,N));const K=-Ne(t[a+4]/10),V=Math.cos(K)<0?1:-1,k=(D?x:R+.25*(x-R))-.5,O=Math.min(k,2.4+w()*1.4),$=l?l[1]===1:w()<.38;if(l&&w(),$&&O>1&&_-p>.5){const ut=(w()-.5)*(k-O)*2,Ut=Bt=>p+(_-p)*(1-Bt)+.07;i.quad(ut-O,Ut(.74),V*E*.74,ut+O,Ut(.74),V*E*.74,ut+O,Ut(.26),V*E*.26,ut-O,Ut(.26),V*E*.26,U(1780295))}if(w()<.45){const ut=(w()-.5)*R;i.box(ut-.03,_-.1,-.03,ut+.03,_+1.5,.03,o,null),i.box(ut-.5,_+1.28,-.02,ut+.5,_+1.32,.02,o),i.box(ut-.35,_+1.03,-.02,ut+.35,_+1.07,.02,o)}w()<.3&&i.cyl((w()-.5)*R,p+(_-p)*.5-.05,-V*E*.5,.19,.19,.34,6,U(12106940),U(13619922));const et=m^1,X=m<2?w()<.5?2:3:w()<.5?0:1,J=X<2?d:h,j=et<2?d:h;if(w()<.3){const[ut,Ut]=F(X,(w()<.5?1:-1)*(J/2-1.3),1.25),Bt=w()<.5?U(8359802):U(13223088);i.cyl(ut,0,Ut,1,1,2,8,Bt,zt(Bt,.88))}if(w()<.55){const ut=(w()-.5)*j*.5;z(et,ut-.42,ut+.42,0,.34,.1,.78,U(14277334))}if(w()<.42){const[ut,Ut]=F(et,(w()-.5)*j*.4,3.4+w()*1.6);i.box(ut-.035,0,Ut-.035,ut+.035,2,Ut+.035,o,null),i.box(ut-1.15,1.95,Ut-.03,ut+1.15,2,Ut+.03,o),i.box(ut-.03,1.95,Ut-1.15,ut+.03,2,Ut+1.15,o)}const at=p>5.1?[1,3.75]:[1],it=Math.max(1,Math.floor(d/3.7));for(const ut of[0,1])for(const Ut of at)for(let Bt=0;Bt<it;Bt++){const le=-d/2+d*(Bt+.5)/it;if(!(ut===m&&Ut<2&&(Bt===0||Bt===Math.floor(it/2)))&&(Hn(i,ut,d,h,le-.86,le+.86,Ut-.1,Ut+1.26,N,0,.03),Hn(i,ut,d,h,le-.75,le+.75,Ut,Ut+1.15,bs,c()<.45?.7:.04),ut===m&&Ut<2)){const[Me,ye]=F(m,le,.75),H=qi[(a+Bt)%qi.length],pe=.42+w()*.2;i.blob(Me,pe*.6,ye,pe,pe*.75,pe,6,3,zt(H,.78),zt(H,1.1))}}for(const ut of[2,3])Hn(i,ut,d,h,-.81,.81,.9,2.26,N,0,.03),Hn(i,ut,d,h,-.7,.7,1,2.15,bs,c()<.4?.7:.04);const lt=m<2?d:h,Rt=sh[Math.floor(c()*sh.length)];let ft,At,xt;if(m<2){const ut=-lt/2+lt*.5/it,Ut=Math.min(1.35,lt/it/2-.2);ft=ut-Ut,At=ut+Ut,xt=-lt/2+lt*(Math.floor(it/2)+.5)/it}else ft=-lt/2+.5,At=-lt/2+3.1,xt=lt/2-1.4;Hn(i,m,d,h,ft,At,0,2.15,U(14868437));for(const ut of[.54,1.08,1.62])Hn(i,m,d,h,ft,At,ut,ut+.03,U(11118495),0,.07);Hn(i,m,d,h,xt-.62,xt+.62,0,2.22,N,0,.03),Hn(i,m,d,h,xt-.5,xt+.5,0,2.1,Rt);const Dt=Math.min(2.5,p-.2);if(z(m,xt-.8,xt+.8,0,.6,-.4,.3,r),w()<.6&&Dt>2.1){z(m,xt-1.75,xt+1.75,0,1.75,-.4,.3,r),z(m,xt-1.85,xt+1.85,0,1.85,Dt,Dt+.14,N,zt(b,.95));for(const ut of[-1.68,1.68])z(m,xt+ut-.06,xt+ut+.06,1.58,1.7,.3,Dt,N,null)}const Kt=U(3104058);z(m,-lt/2-.95,-lt/2-.4,-1.15,-.6,0,1,Kt,U(11022890)),z(m,-lt/2-.95,-lt/2-.4,-1.85,-1.3,0,1,Kt,U(14268718));const te=(t[a+8]??0)/10,Wt=Math.min(te-.4,14);if(Wt>2.5){const[ut,Ut]=F(m,xt,.5),[Bt,le]=F(m,xt,Wt);n.line(i.wx(ut,Ut),i.wz(ut,Ut),i.wx(Bt,le),i.wz(Bt,le),1,on[2]),Wt>4.5&&(z(m,xt+.84,xt+.96,Wt-2.56,Wt-2.44,0,.95,o,null),z(m,xt+.7,xt+1.1,Wt-2.64,Wt-2.36,.95,1.24,N))}}}function c_(i,t,e){i.frame();for(let n=0;n<t.length;n+=4){const s=t[n]/10,r=t[n+1]/10,o=t[n+2]/10,a=t[n+3]/10,l=rh[n/4%rh.length],c=Math.max(1,Math.round(Math.hypot(o-s,a-r)/6));for(let u=0;u<c;u++){const f=s+(o-s)*u/c,d=r+(a-r)*u/c,h=s+(o-s)*(u+1)/c,p=r+(a-r)*(u+1)/c,_=e.yAt(f,d),m=e.yAt(h,p),g=1.7;i.quad(f,_,d,h,m,p,h,m+g,p,f,_+g,d,l),i.quad(h,m,p,f,_,d,f,_+g,d,h,m+g,p,zt(l,.9))}}}function h_(i,t,e,n){for(let u=0;u<e.lamps.length;u+=3){const f=e.lamps[u]/10,d=e.lamps[u+1]/10;i.frame(f,n.yAt(f,d),d,Ne(e.lamps[u+2]/10)),i.cyl(0,0,0,.12,.08,9.2,5,gi),i.box(0,9.05,-.06,2.4,9.18,.06,gi),i.box(1.7,8.9,-.24,2.6,9.05,.24,U(14211282),void 0,U(16773832),1)}for(let u=0;u<e.masts.length;u+=4){const f=e.masts[u]/10,d=e.masts[u+1]/10,h=e.masts[u+3]/10;i.frame(f,n.yAt(f,d),d,Ne(e.masts[u+2]/10));for(const p of[-1,1])i.box(-.14,0,p*h-.14,.14,7.6,p*h+.14,U(7830398));i.box(-.12,7.2,-h,.12,7.5,h,U(7830398));for(let p=-h+2.2;p<h-1;p+=4.2)i.box(-.04,6.1,p-.04,.04,7.2,p+.04,U(6251366),null)}for(let u=0;u<e.shelters.length;u+=3){const f=e.shelters[u]/10,d=e.shelters[u+1]/10;i.frame(f,n.yAt(f,d),d,Ne(e.shelters[u+2]/10)),i.box(-2.2,2.45,-.9,2.2,2.6,.9,U(15329764),void 0,U(13619146));for(const h of[-2,2])i.box(h-.07,0,.7,h+.07,2.45,.84,gi,null);i.box(-2.1,.3,.74,2.1,2.2,.8,U(7309203)),i.box(-1.6,.42,.2,1.6,.5,.62,U(9071178))}const s=U(7034692),r=U(2961201);let o=null;for(let u=0;u<e.wires.length;u+=4){const f=e.wires[u]/10,d=e.wires[u+1]/10,h=n.yAt(f,d);i.frame(f,h,d,Ne(e.wires[u+2]/10)),i.cyl(0,0,0,.17,.12,9.6,5,s),i.box(-.07,8.75,-1.15,.07,8.9,1.15,s);const p=[-1.05,0,1.05].map(_=>[i.wx(0,_),h+8.95,i.wz(0,_)]);if(o)for(let _=0;_<3;_++){const[m,g,v]=o[_],[y,M,b]=p[_],S=(m+y)/2,x=(g+M)/2-.55,E=(v+b)/2;Rs(t,m,g,v,S,x,E,.022,.022,r),Rs(t,S,x,E,y,M,b,.022,.022,r)}o=e.wires[u+3]?p:null}const a=U(9409430),l=U(13119530),c=U(15921644);for(let u=0;u<e.signs.length;u+=4){const f=e.signs[u]/10,d=e.signs[u+1]/10,h=e.signs[u+3];if(i.frame(f,n.yAt(f,d)+je,d,Ne(e.signs[u+2]/10)),h===4){i.box(-.27,0,-.27,.27,.95,.27,U(4020805),U(2500650));continue}if(h===5){i.cyl(0,0,0,.09,.09,.72,6,U(3882561)),i.cyl(0,.72,0,.1,.1,.16,6,U(15985360),null,1),i.cyl(0,.88,0,.11,.11,.05,6,U(3882561),U(3882561));continue}if(h===6){const p=U(9071178);i.box(-.25,.42,-.95,.25,.48,.95,p),i.box(-.3,.48,-.95,-.24,.92,.95,p);for(const _ of[-.8,.8])i.box(-.24,0,_-.04,.22,.42,_+.04,a,null);continue}if(h===7){i.box(-.06,0,-.32,.06,2.3,.32,U(2051974)),i.quad(.065,1.55,.26,.065,1.55,-.26,.065,2.05,-.26,.065,2.05,.26,c);continue}if(i.cyl(0,0,0,.04,.04,h===3?2.75:2.4,4,a),h===0)i.tri(.04,2.42,.46,.04,2.42,-.46,.04,1.62,0,l),i.tri(.055,2.34,.31,.055,2.34,-.31,.055,1.8,0,c);else if(h===1)i.box(-.02,2,-.55,.02,2.6,-.05,U(15904798));else if(h===2){i.box(-.02,1.7,-.3,.02,2.3,.3,U(2908072));const p=(_,m,g,v)=>i.quad(.03,g,_,.03,g,m,.03,v,m,.03,v,_,c);p(.06,.14,1.8,2.2),p(-.12,.06,2.13,2.2),p(-.12,-.05,2,2.2),p(-.12,.06,2,2.06)}else i.box(-.5,2.5,-.015,.5,2.7,.015,U(2059077))}for(let u=0;u<e.signals.length;u+=2){const f=e.signals[u]/10,d=e.signals[u+1]/10;i.frame(f,n.yAt(f,d),d,u/2*1.57),i.cyl(0,0,0,.1,.09,3.9,5,U(5593436)),i.box(-.2,3,-.16,.2,4.1,.16,U(2763822));for(const[h,p]of[U(13646383),U(14722346),U(3844186)].entries())i.quad(-.11,3.78-h*.34,.17,.11,3.78-h*.34,.17,.11,3.98-h*.34,.17,-.11,3.98-h*.34,.17,p)}}function u_(i,t,e){for(let n=0;n<t.shrubs.length;n+=3){const s=t.shrubs[n]/10,r=t.shrubs[n+1]/10,o=t.shrubs[n+2]/10,a=qi[n/3%qi.length];i.frame(s,e.yAt(s,r),r,n),i.blob(0,o*.62,0,o,o*.72,o,6,3,zt(a,.8),zt(a,1.12))}for(let n=0;n<t.people.length;n+=4){const s=t.people[n]/10,r=t.people[n+1]/10,o=n/4,a=.94+o*37%13/100;i.frame(s,e.yAt(s,r)+.28,r,Ne(90+t.people[n+2]/10)),i.box(-.17,0,-.1,.17,.84*a,.1,U(o%3?3422271:5989488),null),i.box(-.21,.84*a,-.12,.21,1.42*a,.12,wr[t.people[n+3]%wr.length]),i.blob(0,1.56*a,0,.11,.13,.11,6,3,Tr[o%Tr.length])}}const xh=[8235870,8829030,7514200,7034434,12894649,11705474,11973804,4079685,4803408,8024165,11575424,6261326,3845846,13811608,13352872,10134626].map(U),d_=`
// a steady random number for each whole-numbered square (after Dave Hoskins: no sine, so it holds up for large numbers)
float lgHash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}
float lgNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(lgHash(i), lgHash(i + vec2(1.0, 0.0)), f.x), mix(lgHash(i + vec2(0.0, 1.0)), lgHash(i + vec2(1.0, 1.0)), f.x), f.y) - 0.5;
}
// how much of a pattern with features this many to the metre still shows, given how much ground one pixel covers
float lgShows(float perMetre, float pixel) { return 1.0 - smoothstep(0.5 / perMetre, 1.3 / perMetre, pixel); }
`,f_=`
{
  vec2 p = vLgGround.xz; // metres from the middle of the detailed area: small numbers, so the grain stays fine
  float px = sqrt(length(dFdx(p)) * length(dFdy(p))); // the ground one pixel covers, m: between its width and its length when seen at a low angle
  float k = vLgKind, v = 1.0;
  float broad = lgNoise(p * 0.33) * lgShows(0.33, px), patchy = lgNoise(p * 2.1) * lgShows(2.1, px);
  float grit = (lgHash(floor(p * 26.0)) - 0.5) * lgShows(26.0, px), chips = lgNoise(p * 9.0) * lgShows(9.0, px);
  if (k < 2.5 || k > 14.5) {
    // grass: blades, and stripes where it is mown
    v += broad * 0.16 + patchy * 0.1 + lgNoise(p * vec2(34.0, 11.0)) * 0.24 * lgShows(34.0, px);
    if (k > 0.5 && k < 2.5) v += (step(0.5, fract(dot(p, uMow) / 4.4)) - 0.5) * 0.07 * lgShows(0.25, px);
    if (k > 14.5) v += lgNoise(p * 0.9) * 0.14 * lgShows(0.9, px); // dry grass is patchier
  } else if (k < 3.5) v += chips * 0.5 + patchy * 0.2;                 // mulch
  else if (k < 4.5) v += broad * 0.07 + grit * 0.07;                   // concrete
  else if (k < 5.5) v += broad * 0.08 + grit * 0.3 + (lgHash(floor(p * 60.0)) - 0.5) * 0.18 * lgShows(60.0, px);  // pebbles in aggregate
  else if (k < 6.5) v += grit * 0.05;                                  // kerb
  else if (k < 8.5) v += broad * 0.14 + patchy * 0.08 + grit * 0.2;    // asphalt
  else if (k < 9.5) v += (lgHash(floor(p * 15.0)) - 0.5) * 0.5 * lgShows(15.0, px) + patchy * 0.15;  // ballast stones
  else if (k < 10.5) v += broad * 0.15 + chips * 0.15;                 // an unsealed track
  else if (k < 11.5) v += chips * 0.4 + patchy * 0.2;                  // planting
  else if (k < 12.5) {
    // pool water: light caught by the ripples, paler where it is shallow at the edges
    v += lgNoise(p * vec2(1.3, 2.1)) * 0.12 * lgShows(2.1, px) + max(0.0, lgNoise(p * 5.5)) * 0.35 * lgShows(5.5, px);
  }
  else if (k < 13.5) v += grit * 0.35 + chips * 0.3 + broad * 0.12;    // softfall
  else {
    // pavers: 40 cm squares, each a little different, with the joints between them
    vec2 lgSq = fract(p / 0.4);
    v *= 1.0 - step(0.9, max(lgSq.x, lgSq.y)) * 0.22 * lgShows(2.5, px);
    v += (lgHash(floor(p / 0.4)) - 0.5) * 0.1 * lgShows(2.5, px) + grit * 0.06;
  }
  diffuseColor.rgb *= v;
  // fade out at the edge of the detailed area, so its streets run into the map's own
  vec2 lgIn = min(p - uBox.xy, uBox.zw - p);
  diffuseColor.a *= clamp(min(lgIn.x, lgIn.y) / uFeather, 0.0, 1.0);
}
`;function p_(i,t,e=26){const[n,s]=i.centre,r=[],o=[],a=[],l=(m,g,v,y,M,b,S,x)=>{const E=Math.hypot(v-m,y-g),D=Math.hypot(M-v,b-y),R=Math.hypot(m-M,g-b),L=Math.max(E,D,R);if(L>7){if(L===E){const P=(m+v)/2,w=(g+y)/2;l(m,g,P,w,M,b,S,x),l(P,w,v,y,M,b,S,x)}else if(L===D){const P=(v+M)/2,w=(y+b)/2;l(m,g,v,y,P,w,S,x),l(m,g,P,w,M,b,S,x)}else{const P=(M+m)/2,w=(b+g)/2;l(m,g,v,y,P,w,S,x),l(P,w,v,y,M,b,S,x)}return}const C=(y-g)*(M-m)-(v-m)*(b-g)>0;for(const[P,w]of C?[[m,g],[v,y],[M,b]]:[[m,g],[M,b],[v,y]])r.push(P,t.yAt(P,w)+je,w),o.push(S[0],S[1],S[2]),a.push(x)};for(const m of i.ground??[]){const g=m[0],v=g>>4,y=g&15,M=xh[v]??xh[0],b=v===0?zt(M,.93+y*.028):y?zt(M,.94):M,S=m.slice(1).map(E=>Array.from({length:E.length/2},(D,R)=>new Ot(n+E[R*2]/100,s+E[R*2+1]/100)));if(S[0].length<3)continue;const x=S.flat();for(const E of _s.triangulateShape(S[0],S.slice(1))){const D=x[E[0]],R=x[E[1]],L=x[E[2]];l(D.x,D.y,R.x,R.y,L.x,L.y,b,v)}}const c=new we,u=r.length/3,f=new Float32Array(u*3);for(let m=0;m<u;m++)f[m*3+1]=1;c.setAttribute("position",new qt(new Float32Array(r),3)),c.setAttribute("normal",new qt(f,3)),c.setAttribute("color",new qt(new Float32Array(o),3)),c.setAttribute("aKind",new qt(new Float32Array(a),1));const d=new mn({vertexColors:!0,transparent:!0,depthWrite:!1,roughness:.95,metalness:0,side:Pe,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),h=new ge(i.box[0]-n,i.box[1]-s,i.box[2]-n,i.box[3]-s),p=new Ot(Math.cos(Ne(22.6)),-Math.sin(Ne(22.6)));d.onBeforeCompile=m=>{m.uniforms.uBox={value:h},m.uniforms.uFeather={value:e},m.uniforms.uMiddle={value:new W(n,0,s)},m.uniforms.uMow={value:p},m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
attribute float aKind;
uniform vec3 uMiddle;
varying float vLgKind;
varying vec3 vLgGround;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLgKind = aKind;
vLgGround = transformed - uMiddle;`),m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
varying float vLgKind;
varying vec3 vLgGround;
uniform vec4 uBox;
uniform float uFeather;
uniform vec2 uMow;
${d_}`).replace("#include <color_fragment>",`#include <color_fragment>
${f_}`)},d.customProgramCacheKey=()=>"logan-precinct-ground";const _=new $t(c,d);return _.receiveShadow=!0,_.renderOrder=24,_.name="precinct-ground",_}class vh{constructor(t,e){ht(this,"pts");ht(this,"at",[0]);ht(this,"length");this.closed=e,this.pts=t.map(n=>n/10),e&&this.pts.push(this.pts[0],this.pts[1]);for(let n=2;n<this.pts.length;n+=2)this.at.push(this.at[n/2-1]+Math.hypot(this.pts[n]-this.pts[n-2],this.pts[n+1]-this.pts[n-1]));this.length=this.at[this.at.length-1]}where(t){let e=!1;this.closed?t=(t%this.length+this.length)%this.length:(t=(t%(2*this.length)+2*this.length)%(2*this.length),t>this.length&&(t=2*this.length-t,e=!0));let n=1;for(;n<this.at.length-1&&this.at[n]<t;)n++;const s=this.pts[n*2-2],r=this.pts[n*2-1],o=this.pts[n*2],a=this.pts[n*2+1],l=this.at[n]-this.at[n-1]||1,c=(t-this.at[n-1])/l,u=e?-1:1;return[s+(o-s)*c,r+(a-r)*c,(o-s)/l*u,(a-r)/l*u]}}function m_(i,t,e){var u,f;const n=new Ae;n.name="precinct-movers";const s=Es({roughness:.84,ownGlow:!0}),r={yAt:()=>-je},o=d=>{const h=new $t(d.build(),s);return h.castShadow=e,h},a=[],l=(d,h,p,_)=>{let m=Math.atan2(h,p)-d.rotation.y;m=Math.atan2(Math.sin(m),Math.cos(m)),d.rotation.y+=m*Math.min(1,_)};(((u=i.movers)==null?void 0:u.cars)??[]).forEach((d,h)=>{const p=new vh(d,!0),_=new sn;Pa(_,[0,0,-900,20+(h*3+5)%10],r);const m=o(_);n.add(m),a.push((g,v)=>{const[y,M,b,S]=p.where(g*4.2+(h?p.length*.55+h*37:0));m.position.set(y,t.yAt(y,M)+je,M),l(m,b,S,v*6)})}),(((f=i.movers)==null?void 0:f.walkers)??[]).forEach((d,h)=>{var x;const p=new vh(d,!1),_=.94+h*37%13/100,m=1.25+h%3*.12,g=new Ae,v=new sn,y=U(h%2?3422271:5989488),M=wr[(h*3+1)%wr.length],b=Tr[h%Tr.length];v.box(-.21,.84*_,-.12,.21,1.42*_,.12,M),v.blob(0,1.56*_,0,.11,.13,.11,6,3,b),g.add(o(v));const S=[];for(const[E,D,R,L,C]of[[-.17,-.01,.84,.84,y],[.01,.17,.84,.84,y],[-.29,-.21,1.38,.58,M],[.21,.29,1.38,.58,M]]){const P=new sn;P.box(E,-L*_,-.09,D,0,.09,C,null);const w=o(P);w.position.y=R*_,g.add(w),S.push(w)}if(n.add(g),(((x=i.movers)==null?void 0:x.dogs)??[]).includes(h)){const E=new Ae,D=new Ae,R=new sn;D.rotation.y=-Math.PI/2,E.add(D),Mh(R,h+1),D.add(o(R));const L=[];for(const K of[-.08,.08]){const V=new sn;V.box(-.04,-.34,K-.04,.04,0,K+.04,zt(Pr[(h+1)%Pr.length],.65),null);const k=o(V);k.position.set(0,.34,0),D.add(k),L.push(k)}const C=new sn;C.box(-.012,0,-.012,.012,1,.012,U(13123631),null);const P=o(C);P.castShadow=!1,n.add(E,P);const w=new W,N=new W,F=new W(0,1,0),z=new W;a.push((K,V)=>{const k=K*m+h*23+1.3,[O,$,et,X]=p.where(k),J=O+X*1.15,j=$-et*1.15;E.position.set(J,t.yAt(J,j)+je,j),l(E,et,X,V*5);const at=Math.sin(k*9)*.5;L[0].rotation.z=at,L[1].rotation.z=-at,g.updateMatrixWorld(),w.set(.26,.86,.1).applyMatrix4(g.matrixWorld),E.updateMatrixWorld(),N.set(0,.62,.3).applyMatrix4(E.matrixWorld),z.subVectors(w,N),P.position.copy(N),P.scale.set(1,z.length(),1),P.quaternion.setFromUnitVectors(F,z.normalize())})}a.push((E,D)=>{const R=E*m+h*23,[L,C,P,w]=p.where(R),N=L+w*.55,F=C-P*.55;g.position.set(N,t.yAt(N,F)+je,F),l(g,P,w,D*5);const z=Math.sin(R*4.4)*.55;S[0].rotation.x=z,S[1].rotation.x=-z,S[2].rotation.x=-z*.8,S[3].rotation.x=z*.8})});let c=0;for(const d of a)d(0,1);return{group:n,any:a.length>0,advance(d){c+=d;for(const h of a)h(c,d)}}}const Pr=[3811870,13214314,15260870,1907999,9067059].map(U);function Mh(i,t,e=0){const n=Pr[t%Pr.length],s=zt(n,.7);i.box(-.32,.32,-.12,.3,.56,.12,n),i.box(.26,.48,-.09,.48,.7,.09,n),i.box(.46,.5,-.05,.58,.6,.05,s);for(const r of[-.08,.08])i.box(.3,.68,r-.03,.36,.78,r+.03,s);i.box(-.5,.5,-.025,-.3,.56,.025,n);for(const[r,o,a]of[[.2,-.08,e],[.2,.08,-e],[-.22,-.08,-e],[-.22,.08,e]])i.box(r-.04+a*.12,0,o-.035,r+.04+a*.12,.34,o+.035,s)}function g_(i,t,e){const n=U(1974307);i.frame();for(let s=0;s+3<t.length;s+=4){const r=t[s]/10,o=t[s+1]/10,a=t[s+2]/10,l=t[s+3]/10,c=Math.hypot(a-r,l-o);if(c<.2)continue;const u=(a-r)/c,f=(l-o)/c,d=e.yAt(r,o),h=e.yAt(a,l);for(const p of[.1,1.15])i.quad(r,d+p,o,a,h+p,l,a,h+p+.04,l,r,d+p+.04,o,n),i.quad(a,h+p,l,r,d+p,o,r,d+p+.04,o,a,h+p+.04,l,n);for(let p=0;p<=c;p+=.12){const _=r+u*p,m=o+f*p,g=d+(h-d)*p/c,v=Math.abs(p%2.4)<.06,y=v?.025:.01;i.quad(_-f*y-u*y,g,m+u*y-f*y,_+f*y-u*y,g,m-u*y-f*y,_+f*y-u*y,g+1.2,m-u*y-f*y,_-f*y-u*y,g+1.2,m+u*y-f*y,n),i.quad(_-u*y,g,m-f*y,_+u*y,g,m+f*y,_+u*y,g+1.2,m+f*y,_-u*y,g+1.2,m-f*y,n)}}}function __(i,t,e){const n=U(9409430),s=U(9071178),r=U(2500651);U(4156234);const o=U(5073749);for(let a=0;a<t.length;a+=4){const l=t[a]/10,c=t[a+1]/10,u=t[a+3],f=a/4,d=si(733+t[a]*3+t[a+1]*7);switch(i.frame(l,e.yAt(l,c),c,Ne(t[a+2]/10)),u){case 0:{const _=[U(3108789),U(3840586),U(14262842)][f%3];i.cyl(0,.83,0,2.05,2.05,.08,12,_,_),i.cyl(0,.85,0,1.8,1.8,.07,12,r,r);for(let m=0;m<6;m++){const g=m/6*Math.PI*2,v=Math.cos(g)*(1.8+.2),y=Math.sin(g)*(1.8+.2);m%2===0&&i.box(v-.03,0,y-.03,v+.03,.85,y+.03,n,null),i.box(v-.025,.85,y-.025,v+.025,2.6,y+.025,U(2895667),null);const M=(m+1)/6*Math.PI*2,b=Math.cos(M)*(1.8+.2),S=Math.sin(M)*(1.8+.2);i.quad(v,2.55,y,b,2.55,S,b,2.61,S,v,2.61,y,_)}break}case 1:{const h=U(13123631),p=U(3104680);for(const _ of[-1.9,1.9])i.quad(_-.06,0,-.9,_+.06,0,-.9,_+.06,2.4,0,_-.06,2.4,0,h),i.quad(_+.06,0,.9,_-.06,0,.9,_-.06,2.4,0,_+.06,2.4,0,h),i.box(_-.07,0,-.92,_+.07,2.4,-.88,h,null),i.box(_-.07,0,.88,_+.07,2.4,.92,h,null);i.box(-2,2.36,-.07,2,2.48,.07,h);for(const _ of[-.9,.9]){for(const m of[-.22,.22])i.box(_-.015,.48,m-.015,_+.015,2.38,m+.015,n,null);i.box(_-.24,.44,-.24,_+.24,.5,.24,_<0?p:r)}break}case 2:{const h=U(3108789),p=U(6969928),_=U(14262842),m=U(14726447);for(const[g,v]of[[-.8,-.8],[.8,-.8],[.8,.8],[-.8,.8]])i.box(g-.07,0,v-.07,g+.07,2.9,v+.07,h,null);i.box(-.9,1.3,-.9,.9,1.4,.9,p),i.cyl(0,2.9,0,1.25,0,.8,4,_);for(const g of[-.9,.9])i.box(-.9,1.4,g-.03,.9,2.15,g+.03,h,null);i.quad(.9,1.38,-.4,3.4,.25,-.4,3.4,.25,.4,.9,1.38,.4,m),i.quad(.9,1.38,.4,3.4,.25,.4,3.4,.25,.4,.9,1.38,.4,m);for(const g of[-.42,.42])i.quad(.9,1.38,g,3.4,.25,g,3.4,.45,g,.9,1.6,g,zt(m,.85));for(const g of[-.3,.3])i.box(-1.6,0,g-.04,-.9,1.4,g+.04,n,null);for(let g=0;g<4;g++)i.box(-1.55+g*.17,.3+g*.32,-.3,-1.45+g*.17,.34+g*.32,.3,n);break}case 3:case 4:{const h=u===4,p=h?2.3:1.8,_=2.6,m=h?6:4;for(let g=0;g<m;g++){const v=g/m*Math.PI*2+(h?0:Math.PI/4),y=h?p-.25:(p-.2)*Math.SQRT2;i.box(Math.cos(v)*y-.06,0,Math.sin(v)*y-.06,Math.cos(v)*y+.06,_,Math.sin(v)*y+.06,U(14210767),null)}h?(i.cyl(0,_,0,p+.25,.15,1.2,6,U(15263455)),i.cyl(0,_+1.2,0,.18,0,.3,6,o)):i.cyl(0,_,0,(p+.3)*Math.SQRT2,0,1,4,U(15263455)),i.cyl(0,_-.12,0,(h?p+.25:(p+.3)*Math.SQRT2)*.98,(h?p+.25:(p+.3)*Math.SQRT2)*.98,.12,h?6:4,U(12170925));break}case 5:{i.box(-1,.72,-.4,1,.78,.4,s);for(const h of[-.75,.75])i.box(-1,.42,h-.15,1,.47,h+.15,s);for(const h of[-.8,.8])i.box(h-.05,0,-.85,h+.05,.72,.85,zt(s,.8),null);break}case 6:{const h=[U(10463130),U(13223088),U(7306612),U(14210508)][f%4];i.box(-1.2,0,-.95,1.2,1.9,.95,h),i.quad(-1.3,1.85,1.05,1.3,1.85,1.05,1.3,2.25,0,-1.3,2.25,0,zt(h,1.08)),i.quad(1.3,1.85,-1.05,-1.3,1.85,-1.05,-1.3,2.25,0,1.3,2.25,0,zt(h,.95)),i.tri(1.2,1.9,.95,1.2,1.9,-.95,1.2,2.25,0,h),i.tri(-1.2,1.9,-.95,-1.2,1.9,.95,-1.2,2.25,0,h),i.quad(1.21,0,-.75,1.21,0,.75,1.21,1.75,.75,1.21,1.75,-.75,zt(h,.86));break}case 7:{const h=d()<.5?U(15526370):U(3882304),p=[U(15328207),U(3104138),U(12076090)][f%3];i.cyl(0,.7,0,.55,.55,.05,8,h,h),i.box(-.03,0,-.03,.03,2.2,.03,n,null),i.cyl(0,2,0,1.4,0,.45,8,p);for(let _=0;_<4;_++){const m=_/4*Math.PI*2+.4,g=Math.cos(m)*.85,v=Math.sin(m)*.85;i.box(g-.22,0,v-.22,g+.22,.45,v+.22,h),i.box(g+Math.cos(m)*.2-.04,.45,v+Math.sin(m)*.2-.2,g+Math.cos(m)*.2+.04,.9,v+Math.sin(m)*.2+.2,h)}break}case 8:i.box(-.6,0,-.3,.6,.85,.3,U(2895409)),i.box(-.55,.85,-.28,.55,1.1,.28,U(10133154),U(3816512));break;case 9:Mh(i,f);break;case 10:i.box(-.3,.12,-.25,.3,.42,.25,U(13123631)),i.cyl(0,.42,0,.14,.12,.18,6,U(2895409),U(2895409));for(const h of[-.22,.22])i.box(-1.05,.38,h-.02,-.3,.95,h+.02,n,null);i.box(-1.08,.93,-.24,-1,.98,.24,r);for(const[h,p]of[[-.24,-.27],[.24,-.27],[-.24,.27],[.24,.27]])i.box(h-.09,0,p-.03,h+.09,.18,p+.03,r,null);break;case 11:{const h=U(7106933);i.box(-1.1,.45,-.75,1.1,.95,.75,h,U(5593179)),i.box(1.1,.5,-.05,2.2,.58,.05,r);for(const p of[-.82,.82])i.box(-.32,0,p-.1,.32,.62,p+.1,U(1710877));break}case 12:{const h=[U(14726447),U(3840586),U(13123631)][f%3];i.cyl(0,0,0,.14,.14,.42,6,n),i.blob(0,.68,0,.42,.22,.17,6,3,h),i.blob(.38,.92,0,.14,.16,.12,6,3,h);break}case 13:{const h=[U(13650570),U(3108789),U(3840586)][f%3];i.cyl(-.38,0,0,.25,.25,.05,10,r,r),i.cyl(.38,0,0,.25,.25,.05,10,r,r),i.box(-.38,.05,-.03,.38,.1,.03,h),i.box(.25,.05,-.25,.3,.1,.25,n);break}case 14:{const h=[U(15328208),U(14205066),U(10469584)][f%3];for(const[p,_]of[[-.8,-.7],[.8,-.7],[.8,.7],[-.8,.7]])i.box(p-.05,0,_-.05,p+.05,.9,_+.05,s,null);i.box(-.85,.9,-.75,.85,2,.75,h),i.quad(-.95,1.95,.85,.95,1.95,.85,.95,2.5,0,-.95,2.5,0,U(9128506)),i.quad(.95,1.95,-.85,-.95,1.95,-.85,-.95,2.5,0,.95,2.5,0,U(8077107)),i.tri(.85,2,.75,.85,2,-.75,.85,2.5,0,h),i.tri(-.85,2,-.75,-.85,2,.75,-.85,2.5,0,h),i.quad(.86,1.05,-.3,.86,1.05,.3,.86,1.8,.3,.86,1.8,-.3,U(4008997)),i.quad(.9,.9,-.3,1.6,0,-.3,1.6,0,.3,.9,.9,.3,U(14726447));break}}}}function Sh(i,t,e,n,s=1){const r={houses:[],fences:[],lamps:[],masts:[],shelters:[],signals:[],shrubs:[],people:[],labels:[],wires:[],signs:[],paint:[],marks:[],ground:[],buildings:[],cars:[],trees:[],poles:[],solar:[],plant:[],canopy:[0,0,0,0,0],mast:[0,0],...i},o=i.feather??26,a=new Map;for(let w=0;w+3<(r.looks??[]).length;w+=4)a.set(`${r.looks[w]},${r.looks[w+1]}`,[r.looks[w+2],r.looks[w+3]]);const l=new Ae;l.name=s===1?"precinct":`detail-${i.id??"block"}`;const c=(w,N)=>{const F=new $t(w.build(),Es({roughness:.84,ownGlow:!0}));return F.castShadow=e,F.receiveShadow=e,F.name=N,F},u=new sn,f=si(4114);for(const w of r.buildings){const{floor:N,roofY:F,top:z,wall:K,onRoof:V}=jg(u,w,t,f,r.entry);if(w.k==="council"&&(t_(u,r,N,F,w.a,V),r.entry)){e_(u,r.entry,N,z,K);const k=n_(r.entry,N);k&&l.add(k)}}const d=(w,N)=>N===1||N===5||w>=4.6;_h(u,r.trees,t,d),a_(u,r.poles,t);for(const[w,N,F,z,K]of r.shades??[]){u.frame(w,t.yAt(w,N)+je,N,Ne(K));const V=U(6268832),k=2.9;u.quad(-F/2,k,z/2,F/2,k,z/2,F/2,k+.7,0,-F/2,k+.7,0,V),u.quad(F/2,k,-z/2,-F/2,k,-z/2,-F/2,k+.7,0,F/2,k+.7,0,zt(V,.9));for(let O=-F/2+.6;O<=F/2;O+=(F-1.2)/5)u.box(O-.08,0,-.08,O+.08,k+.7,.08,gi,null)}const h=c(u,"precinct-model"),p=new $g(t),_=new Ae;_.name="precinct-streets",Jg(p,r);const m=new Map,g=(w,N,F)=>{for(let z=0;z+N<=w.length;z+=N){const K=`${Math.floor(w[z]/2500)},${Math.floor(w[z+1]/2500)}`;let V=m.get(K);V||m.set(K,V={houses:[],fences:[],cars:[],trees:[],shrubs:[],people:[],props:[]});for(let k=0;k<N;k++)V[F].push(w[z+k])}};g(r.houses,9,"houses"),g(r.fences,4,"fences"),g(r.cars,4,"cars"),g(r.trees,4,"trees"),g(r.shrubs,3,"shrubs"),g(r.people,4,"people"),g(r.props??[],4,"props");for(const[w,N]of m){const F=new sn;l_(F,N.houses,t,p,a),c_(F,N.fences,t),u_(F,{...r,shrubs:N.shrubs,people:N.people},t),Pa(F,N.cars,t),_h(F,N.trees,t,(z,K)=>!d(z,K)),__(F,N.props,t),F.vertexCount&&_.add(c(F,`precinct-streets-${w}`))}const v=new sn,y=new sn;h_(v,y,r,t),r.entry&&s_(v,r.entry,t),g_(v,r.railings??[],t),_.add(c(v,"precinct-furniture"));const M=c(y,"precinct-wires");M.castShadow=!1,_.add(M);const b=m_(r,t,e);_.add(b.group);const S=p_(r,t,o),x=S.material,E=p.build(),D=E.material;l.add(S,E,h,_);const R=new W(r.centre[0],t.yAt(r.centre[0],r.centre[1]),r.centre[1]),L=o;(s===1?_n.uHole:_n.uHole2).value.set(r.box[0]+L,r.box[1]+L,r.box[2]-L,r.box[3]-L);const C=s===1?_n.uHoleOn:_n.uHoleOn2;let P="";return{group:l,update(w){const N=w.distanceTo(R),F=N<9e3,z=N<n+450,K=se.clamp((2900-N)/1100,0,1)*(1-.72*ri.value),V=`${F}${z}${K.toFixed(2)}`;return V===P?!1:(P=V,l.visible=F,_.visible=z,S.visible=K>.01,x.opacity=K,E.visible=z&&K>.01,D.opacity=K,C.value=F?K:0,!0)},animate(w,N){return!b.any||!_.visible||N.distanceTo(R)>520?!1:(b.advance(w),!0)}}}function x_(i,t,e,n,s,r){const o=new Ae;o.name="property-"+t;const a=i.length,l=(O,$)=>{let et=!1;for(let X=0,J=a-1;X<a;J=X++){const[j,at]=i[X],[it,lt]=i[J];at>$!=lt>$&&O<(it-j)*($-at)/(lt-at)+j&&(et=!et)}return et},c=i.map(O=>O[0]),u=i.map(O=>O[1]),f=Math.min(...c)-150,d=Math.max(...c)+150,h=Math.min(...u)-150,p=Math.max(...u)+150;let _=null,m=0;for(let O=0;O<s.count;O++)s.x[O]<f||s.x[O]>d||s.z[O]<h||s.z[O]>p||s.w[O]*s.d[O]<=m||!l(s.x[O],s.z[O])||(m=s.w[O]*s.d[O],_=[s.x[O],s.z[O]]);const g=n.filter(O=>O.cls<=5&&Array.from({length:O.pts.length/2}).some(($,et)=>O.pts[et*2]>f&&O.pts[et*2]<d&&O.pts[et*2+1]>h&&O.pts[et*2+1]<p)),v=(O,$)=>{let et={d:1/0,x:O,z:$};for(const X of g){const J=X.pts;for(let j=0;j+3<J.length;j+=2){const at=J[j+2]-J[j],it=J[j+3]-J[j+1],lt=Math.max(0,Math.min(1,((O-J[j])*at+($-J[j+1])*it)/(at*at+it*it||1))),Rt=J[j]+at*lt,ft=J[j+1]+it*lt,At=Math.hypot(O-Rt,$-ft);At<et.d&&(et={d:At,x:Rt,z:ft})}}return et},y=[];for(let O=0;O<a;O++){const[$,et]=i[O],[X,J]=i[(O+1)%a],j=Math.hypot(X-$,J-et),at=Math.max(1,Math.round(j/5));for(let it=0;it<at;it++){const lt=$+(X-$)*it/at,Rt=et+(J-et)*it/at;y.push({x:lt,z:Rt,h:Math.atan2(-(J-et),X-$),road:v(lt,Rt).d})}}const M=Math.min(...y.map(O=>O.road)),b=y.filter(O=>O.road<M+3),S=_??[c.reduce((O,$)=>O+$,0)/a,u.reduce((O,$)=>O+$,0)/a],x=b.reduce((O,$)=>Math.hypot($.x-S[0],$.z-S[1])<Math.hypot(O.x-S[0],O.z-S[1])?$:O,b[0]),E=new sn,D=U(9073752),R=U(9409430);y.forEach((O,$)=>{const et=y[($+1)%y.length],X=Math.hypot(O.x-x.x,O.z-x.z)<2.6||Math.hypot(et.x-x.x,et.z-x.z)<2.6,J=e.yAt(O.x,O.z),j=Math.hypot(et.x-O.x,et.z-O.z);if(E.frame(O.x,J,O.z,Math.atan2(-(et.z-O.z),et.x-O.x)),E.box(-.07,0,-.07,.07,X?1.6:1.25,.07,D),X)return;const at=e.yAt(et.x,et.z)-J;for(const it of[.45,.85,1.15])E.quad(0,it,0,j,it+at,0,j,it+at+.09,0,0,it+.09,0,D)});const L=v(x.x,x.z),C=(L.x-x.x)/(L.d||1),P=(L.z-x.z)/(L.d||1),w=x.x+C*1.2-P*3.2,N=x.z+P*1.2+C*3.2;E.frame(w,e.yAt(w,N),N,Math.atan2(C,P)),E.box(-.04,0,-.04,.04,1,.04,R,null),E.box(-.16,1,-.22,.16,1.28,.22,U(15328988));const F=new $t(E.build(),Es({roughness:.9}));F.castShadow=r,o.add(F);const z=[[L.x,L.z],[x.x,x.z]];if(_){const O=Math.hypot(_[0]-x.x,_[1]-x.z);z.push([x.x+(_[0]-x.x)*Math.max(O-9,0)/(O||1),x.z+(_[1]-x.z)*Math.max(O-9,0)/(O||1)])}const K=[];for(let O=0;O+1<z.length;O++){const[$,et]=z[O],[X,J]=z[O+1],j=Math.hypot(X-$,J-et),at=Math.max(1,Math.ceil(j/3)),it=-(J-et)/(j||1)*1.6,lt=(X-$)/(j||1)*1.6;for(let Rt=0;Rt<at;Rt++){const ft=(At,xt)=>{const Dt=$+(X-$)*At/at+it*xt,Kt=et+(J-et)*At/at+lt*xt;return[Dt,e.yAt(Dt,Kt)+.3,Kt]};K.push(...ft(Rt,-1),...ft(Rt+1,-1),...ft(Rt+1,1),...ft(Rt,-1),...ft(Rt+1,1),...ft(Rt,1))}}const V=new we;V.setAttribute("position",new qt(new Float32Array(K),3)),V.setAttribute("normal",new qt(new Float32Array(K.length).map((O,$)=>$%3===1?1:0),3));const k=new $t(V,new mn({color:11773063,roughness:1,side:Pe,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));if(k.receiveShadow=!0,k.renderOrder=9,o.add(k),typeof document<"u"){const O=document.createElement("canvas");O.width=256,O.height=128;const $=O.getContext("2d");if($){$.fillStyle="#f4f1e8",$.fillRect(0,0,256,128),$.fillStyle="#1d2a33",$.font='800 96px "Helvetica Neue", Arial, sans-serif',$.textAlign="center",$.textBaseline="middle",$.fillText(t,128,68);const et=new sr(O);et.colorSpace=Ue;const X=new $t(new mi(1.3,.65),new ti({map:et,side:Pe})),J=x.x+C*.4+P*3.4,j=x.z+P*.4-C*3.4;X.position.set(J,e.yAt(J,j)+1.35,j),X.rotation.y=Math.atan2(C,P),o.add(X)}}return o}const La=[{width:14,minPx:2.8,fill:U(15902272),casing:U(10115858)},{width:11.5,minPx:2.4,fill:U(16172115),casing:U(10253344)},{width:10,minPx:1.7,fill:U(16311974),casing:U(9405269)},{width:8,minPx:1.2,fill:U(16250090),casing:U(9275772)},{width:6.5,minPx:.85,fill:U(15723746),casing:U(10131082)},{width:4,minPx:.6,fill:U(14868178),casing:U(10723219)},{width:3,minPx:.6,fill:U(12889474),casing:U(9403740)},{width:2,minPx:.5,fill:U(14470050),casing:U(10260336)}],v_=U(13482126),M_=[{classes:[6,7],fade:[3500,5500],glow:.12,casing:!1},{classes:[4,5],fade:[13e3,19e3],glow:.45,casing:!0},{classes:[3],fade:[34e3,46e3],glow:.65,casing:!0},{classes:[2],fade:[1e9,1e9],glow:.85,casing:!0},{classes:[0,1],fade:[1e9,1e9],glow:1,casing:!0}];function Da(i,t){const e=i.pts,n=e.length/2,s=[e[0],t.yAt(e[0],e[1]),e[1]];if(i.flags&Ss){let r=0;for(let c=1;c<n;c++)r+=Math.hypot(e[c*2]-e[c*2-2],e[c*2+1]-e[c*2-1]);const o=s[1],a=t.yAt(e[n*2-2],e[n*2-1]);let l=0;for(let c=1;c<n;c++){l+=Math.hypot(e[c*2]-e[c*2-2],e[c*2+1]-e[c*2-1]);const u=o+(a-o)*(r>0?l/r:1);s.push(e[c*2],Math.max(u,t.yAt(e[c*2],e[c*2+1])),e[c*2+1])}return s}for(let r=1;r<n;r++)t.drape(e[r*2-2],e[r*2-1],e[r*2],e[r*2+1],s);return s}function S_(i,t,e){const n=i.length/3,s=[];for(let r=0;r<n;r++){const o=Math.max(0,r-1),a=Math.min(n-1,r+1);let l=i[a*3]-i[o*3],c=i[a*3+2]-i[o*3+2];const u=Math.hypot(l,c)||1;l/=u,c/=u;const f=i[r*3]-c*t,d=i[r*3+2]+l*t;s.push(f,e.yAt(f,d),d)}return s}function y_(i,t){var l;const e=new Ae;e.name="roads";const n=[],s=La.map(()=>[]);for(const c of i)(l=s[c.cls])==null||l.push(c);M_.forEach((c,u)=>{const f=new Cn,d=new Cn;for(const p of c.classes){const _=La[p];for(const m of s[p]){const g=Da(m,t),v=m.flags&ys?.62:1,y=m.flags&Ss?void 0:t,M=!!(m.flags&Xc)&&p>=3,b=M||p>5?$c:m.flags&(ys|Sa)||p>3?Pg:p===0?Ig:p===1?Dg:Lg;f.add(g,_.width*v,_.minPx*v,M?v_:_.fill,y,!1,b),c.casing&&d.add(g,_.width*v+2.4,_.minPx*v+1.5,_.casing,y,!1,b)}}const h=[];if(c.casing&&d.vertexCount){const p=new $t(d.build(),Pn({lift:.3,glow:0,nightDim:.12,opacity:.85,hole:!0,street:"casing"}));p.renderOrder=10+u*2,h.push(p)}if(f.vertexCount){const p=new $t(f.build(),Pn({lift:.45,glow:c.glow,hole:!0,street:"fill"}));p.renderOrder=11+u*2,h.push(p)}for(const p of h)p.userData.baseOpacity=p.material.opacity,e.add(p);n.push({fade:c.fade,meshes:h,opacity:1})});const r=new Cn,o=U(12434098);for(const c of[1,2,3,4])for(const u of s[c]){if(u.flags&(ys|Sa|Ss|Xc)||u.pts.length<4)continue;const f=Da(u,t),d=La[c].width/2+2.4;for(const h of c<=3?[1,-1]:[1])r.add(S_(f,d*h,t),1.6,0,o,t)}const a=new $t(r.build(),Pn({lift:.32,glow:0,nightDim:.2,hole:!0,street:"path"}));return a.renderOrder=9,a.visible=!1,a.name="footpaths",e.add(a),{group:e,update(c){let u=!1;const f=c<1500;f!==a.visible&&(a.visible=f,u=!0);for(const d of n){const h=1-se.smoothstep(c,d.fade[0],d.fade[1]);if(!(Math.abs(h-d.opacity)<.004)){d.opacity=h,u=!0;for(const p of d.meshes)p.visible=h>.01,p.material.opacity=p.userData.baseOpacity*h}}return u}}}const Cs=-260,Ia=1100,E_=`
float lgHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float lgNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(lgHash(i), lgHash(i + vec2(1.0, 0.0)), f.x), mix(lgHash(i + vec2(0.0, 1.0)), lgHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
`;function b_(i,t,e){const{nx:n,nz:s}=i,r=new Float32Array(n*s*3),o=new Float32Array(n*s*2);for(let h=0;h<s;h++)for(let p=0;p<n;p++){const _=h*n+p,m=i.xMin+p*i.dx,g=i.zMin+h*i.dz;r[_*3]=m,r[_*3+1]=i.y[_],r[_*3+2]=g,o[_*2]=(m+i.sizeX/2)/i.sizeX,o[_*2+1]=1-(g+i.sizeZ/2)/i.sizeZ}const a=new Uint32Array((n-1)*(s-1)*6);let l=0;for(let h=0;h<s-1;h++)for(let p=0;p<n-1;p++){const _=h*n+p,m=_+1,g=_+n,v=g+1;a[l++]=_,a[l++]=g,a[l++]=m,a[l++]=m,a[l++]=g,a[l++]=v}const c=new we;c.setAttribute("position",new qt(r,3)),c.setAttribute("uv",new qt(o,2)),c.setIndex(new qt(a,1)),c.computeBoundingSphere();const u=new mn({map:t.ground,roughness:.95,metalness:0,flatShading:!0});u.onBeforeCompile=h=>{h.uniforms.uRelief={value:t.relief},h.uniforms.uSize={value:new Ot(i.sizeX,i.sizeZ)},h.uniforms.uLights={value:t.lights},h.uniforms.uNight=ri,h.uniforms.uTime=e,h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = vec3(0.0, 1.0, 0.0);").replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform sampler2D uRelief;
uniform sampler2D uLights;
uniform vec2 uSize;
uniform float uNight;
uniform float uTime;
${E_}`).replace("#include <map_fragment>",`
        float lgCamDist = length(cameraPosition - vWPos);
        vec2 lgP = vWPos.xz;
        // The ground picture is about 13 m to the pixel. Close up, look it up a few metres to one side or
        // another, differently at every point, so that its pixels' straight edges become ragged, natural ones.
        float lgWarp = 1.0 - smoothstep(700.0, 3500.0, lgCamDist);
        vec2 lgShift = (vec2(lgNoise(lgP * 0.045), lgNoise(lgP * 0.045 + 17.3)) - 0.5) * 20.0
          + (vec2(lgNoise(lgP * 0.19), lgNoise(lgP * 0.19 + 5.1)) - 0.5) * 6.0;
        vec2 lgUv = vMapUv + lgShift * lgWarp / uSize;
        vec4 sampledDiffuseColor = texture2D(map, lgUv);
        diffuseColor *= sampledDiffuseColor;
        vec4 lgRelief = texture2D(uRelief, lgUv);
        float lgWater = smoothstep(0.35, 0.65, lgRelief.b);
        {
          // Then the detail the picture cannot hold, coarse to fine, each layer fading out once it is too small
          // to see: broad patches, clumps, blades of grass, grit. It is texture, not survey.
          float lgPx = sqrt(length(dFdx(lgP)) * length(dFdy(lgP))); // metres of ground under this pixel
          #define LG_SHOWS(perMetre) (1.0 - smoothstep(0.5 / (perMetre), 1.3 / (perMetre), lgPx))
          float nearFade = (1.0 - smoothstep(900.0, 7000.0, lgCamDist)) * (1.0 - lgWater);
          float close = (1.0 - smoothstep(500.0, 2200.0, lgCamDist)) * (1.0 - lgWater);
          vec3 c = diffuseColor.rgb;
          float green = clamp((c.g - max(c.r, c.b)) * 7.0, 0.0, 1.0); // how grassy or bushy the picture says it is here
          // open ground among the houses is not one flat colour close up: lawn here, dry grass there
          float patchy = smoothstep(0.38, 0.62, lgNoise(lgP * 0.05) * 0.6 + lgNoise(lgP * 0.21) * 0.4);
          vec3 lawn = mix(vec3(0.16, 0.33, 0.08), vec3(0.34, 0.4, 0.15), lgNoise(lgP * 0.02 + 9.0));
          c = mix(c, lawn, (1.0 - green) * patchy * 0.62 * close);
          c *= mix(1.0, 0.8 + 0.4 * (lgNoise(lgP * 0.031) * 0.45 + lgNoise(lgP * 0.16) * 0.55), nearFade);
          float grassy = mix(0.45, 1.0, max(green, patchy));
          c *= 1.0 + close * ((lgNoise(lgP * 1.3) - 0.5) * 0.26 * LG_SHOWS(1.3)
            + (lgNoise(lgP * vec2(7.0, 2.6)) - 0.5) * 0.34 * grassy * LG_SHOWS(7.0)
            + (lgNoise(lgP * 11.0 + 3.7) - 0.5) * 0.14 * LG_SHOWS(11.0)); // smooth grain: square specks would look like pixels again
          diffuseColor.rgb = c;
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
float lgNear = 1.0 - smoothstep(2500.0, 16000.0, lgCamDist);
roughnessFactor = mix(roughnessFactor, mix(0.5, 0.2, lgNear), lgWater);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        {
          vec2 nxz = lgRelief.rg * 2.0 - 1.0;
          vec2 rp = vWPos.xz * 0.011 + vec2(uTime * 0.045, uTime * 0.027);
          nxz += (vec2(lgNoise(rp), lgNoise(rp + 31.7)) - 0.5) * 0.07 * lgWater * lgNear;
          vec3 on = vec3(nxz.x * ${Er.toFixed(2)}, sqrt(max(1.0 - dot(nxz, nxz), 0.0)), nxz.y * ${Er.toFixed(2)});
          normal = normalize((viewMatrix * vec4(on, 0.0)).xyz); // the mesh is not transformed, so object space is world space
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          // from high up the whole street grid glows; close to the ground the lit streets themselves take over
          float lit = texture2D(uLights, vMapUv).r;
          float spread = mix(0.3, 1.0, smoothstep(1500.0, 12000.0, lgCamDist));
          totalEmissiveRadiance += vec3(1.0, 0.7, 0.36) * lit * lit * uNight * 1.5 * spread;
        }`)},u.customProgramCacheKey=()=>"logan-terrain";const f=new $t(c,u);f.receiveShadow=!0,f.name="terrain";const d=new Ae;return d.add(f,T_(i),A_(i)),d}function w_(i){const t=[];for(let e=0;e<i.nx;e++)t.push([i.xMin+e*i.dx,i.zMin]);for(let e=1;e<i.nz;e++)t.push([i.xMax,i.zMin+e*i.dz]);for(let e=i.nx-2;e>=0;e--)t.push([i.xMin+e*i.dx,i.zMax]);for(let e=i.nz-2;e>=1;e--)t.push([i.xMin,i.zMin+e*i.dz]);return t}function T_(i){const t=w_(i),e=t.length,n=[],s=[],r=[],o=new Gt(9074780),a=new Gt(6180669),l=new Gt(3813673),c=45;for(let d=0;d<e;d++){const[h,p]=t[d],[_,m]=t[(d+1)%e],g=i.yAt(h,p),v=i.yAt(_,m),y=_-h,M=m-p,b=Math.hypot(y,M)||1,S=M/b,x=-y/b;for(const[E,D,R,L,C,P]of[[g,g-c,v,v-c,o,a],[g-c,Cs,v-c,Cs,a,l]]){n.push(h,E,p,_,R,m,_,L,m,h,E,p,_,L,m,h,D,p);for(const w of[C,C,P,C,P,P])s.push(w.r,w.g,w.b);for(let w=0;w<6;w++)r.push(S,0,x)}}const u=new we;u.setAttribute("position",new be(n,3)),u.setAttribute("normal",new be(r,3)),u.setAttribute("color",new be(s,3));const f=new $t(u,new mn({vertexColors:!0,roughness:1,side:Pe}));return f.name="skirt",f}function A_(i){const t=new Ae,e=i.xMax-i.xMin+Ia*2,n=i.zMax-i.zMin+Ia*2,s=1100,r=(i.xMin+i.xMax)/2,o=(i.zMin+i.zMax)/2,a=new $t(new Oi(e,s,n),new mn({color:1779245,roughness:.75,metalness:.1}));a.position.set(r,Cs-s/2,o),t.add(a);const l=document.createElement("canvas");l.width=2048,l.height=160;const c=l.getContext("2d");c.fillStyle="#1b262d",c.fillRect(0,0,l.width,l.height),c.fillStyle="#e9d9a6",c.textBaseline="middle",c.font="600 78px 'Space Grotesk', system-ui, sans-serif",c.fillText("LOGAN",40,84);const u=c.measureText("LOGAN").width;c.fillStyle="#9fb4bd",c.font="400 42px 'Space Grotesk', system-ui, sans-serif",c.fillText("City of Logan, Queensland   ·   27.76° S  153.05° E   ·   958 km²",40+u+46,88);const f=new sr(l);f.colorSpace=Ue,f.anisotropy=8;const d=12500,h=new $t(new mi(d,d*(l.height/l.width)),new ti({map:f,toneMapped:!1,fog:!1}));h.position.set(r-e/2+d/2+700,Cs-s/2,o+n/2+4),t.add(h);const p=document.createElement("canvas");p.width=p.height=256;const _=p.getContext("2d");_.fillStyle="#e9d9a6",_.beginPath(),_.moveTo(128,18),_.lineTo(176,150),_.lineTo(128,122),_.lineTo(80,150),_.closePath(),_.fill(),_.font="700 86px 'Space Grotesk', system-ui, sans-serif",_.textAlign="center",_.fillText("N",128,240);const m=new sr(p);m.colorSpace=Ue;const g=new $t(new mi(850,850),new ti({map:m,transparent:!0,toneMapped:!1,fog:!1}));return g.rotation.x=-Math.PI/2,g.position.set(i.xMax+Ia/2,Cs+4,i.zMin+800),t.add(g),t}const ln=500,Na=650,R_=[7,5.75,5,4,3.25,2],yh=U(9409430);function C_(i,t,e,n,s){const r=new Ae;r.name="street-life";const[o,a]=e,l=Math.ceil(o/ln),c=(p,_)=>Math.floor((_+a/2)/ln)*l+Math.floor((p+o/2)/ln),u=new Map;i.forEach((p,_)=>{if(!(p.cls<1||p.cls>4||p.flags&(Ss|ys|Sa)))for(let m=0;m<p.pts.length;m+=2){const g=c(p.pts[m],p.pts[m+1]),v=u.get(g);v?v[v.length-1]!==_&&v.push(_):u.set(g,[_])}});const f=Es({roughness:.84,ownGlow:!0});function d(p){const _=new sn,m=[];for(const v of u.get(p)??[]){const y=i[v],M=y.pts,b=R_[y.cls]??3,S=si(v*7919+13);let x=0;for(let C=0;C+3<M.length;C+=2)x+=Math.hypot(M[C+2]-M[C],M[C+3]-M[C+1]);const E=y.cls<=3?46:72;let D=0,R=8+S()*30,L=14+S()*40;for(let C=0;C+3<M.length;C+=2){const P=Math.hypot(M[C+2]-M[C],M[C+3]-M[C+1]);if(P<.001)continue;const w=(M[C+2]-M[C])/P,N=(M[C+3]-M[C+1])/P,F=(z,K,V)=>c(K,V)===p&&!s.some(k=>K>k[0]&&K<k[2]&&V>k[1]&&V<k[3])&&z>0;for(;R<=D+P;R+=E){const z=R-D,K=M[C]+w*z-N*(b+1.3),V=M[C+1]+N*z+w*(b+1.3);F(R,K,V)&&(_.frame(K,t.yAt(K,V),V,Math.atan2(w,N)),_.cyl(0,0,0,.12,.08,9.2,5,yh),_.box(0,9.05,-.06,2.4,9.18,.06,yh),_.box(1.7,8.9,-.24,2.6,9.05,.24,U(14211282),void 0,U(16773832),1))}for(;y.cls===4&&x>60&&L<=D+P;L+=24+S()*60){const z=L-D,K=S()<.5?1:-1,V=Math.floor(S()*10),k=M[C]+w*z+N*K*(b-1.15),O=M[C+1]+N*z-w*K*(b-1.15);L<14||L>x-14||!F(L,k,O)||m.push(Math.round(k*10),Math.round(O*10),Math.round(se.radToDeg(Math.atan2(-N*K,w*K))*10),V)}D+=P}}if(Pa(_,m,t),!_.vertexCount)return null;const g=new $t(_.build(),f);return g.castShadow=n,g.receiveShadow=n,g}const h=new Map;return{group:r,update(p){let _=!1;const m=p.y-t.yAt(p.x,p.z)<500;if(m){let g=0;const v=Math.ceil(Na/ln),y=Math.floor((p.x+o/2)/ln),M=Math.floor((p.z+a/2)/ln);for(let b=M-v;b<=M+v&&g<1;b++)for(let S=y-v;S<=y+v&&g<1;S++){const x=b*l+S;if(S<0||b<0||S>=l||h.has(x))continue;const E=(S+.5)*ln-o/2,D=(b+.5)*ln-a/2;if(Math.hypot(E-p.x,D-p.z)>Na+ln*.71)continue;const R=d(x);h.set(x,R),R&&r.add(R),g++,_=!0}}for(const[g,v]of h){const y=(g%l+.5)*ln-o/2,M=(Math.floor(g/l)+.5)*ln-a/2;m&&Math.hypot(y-p.x,M-p.z)<Na+ln*2||(v&&(r.remove(v),v.geometry.dispose(),_=!0),h.delete(g))}return _}}}const Te=1e3,Ua=[5932872,6853456,7772757,5209412,8824160],Eh=`
attribute vec4 aTree; // x, ground height, z, canopy radius
attribute float aSeed;
attribute float aPart; // 0 the canopy, 1 the trunk
uniform float uRange;
uniform vec3 uEye; // the viewer's position; cameraPosition is the light's during the shadow pass
`,bh=`
vec3 transformed;
float lgSlim = step(0.5, fract(aSeed * 3.1));
vec3 lgCrown = position; // where the vertex is within the crown, for shading it
{
  float lgGrow = 1.0 - smoothstep(uRange * 0.65, uRange, distance(uEye, aTree.xyz));
  float r = aTree.w * lgGrow;
  float lgLift = 0.35 + 0.6 * fract(aSeed * 5.3);
  if (aPart > 0.5 && aPart < 1.5) {
    float lgTrunk = (0.055 * aTree.w + 0.1) * lgGrow;
    transformed = vec3(aTree.x + position.x * lgTrunk, aTree.y + position.y * (lgLift + 0.7) * r, aTree.z + position.z * lgTrunk);
  } else {
    float lgLobe = max(aPart - 1.0, 0.0); // 0 the main mass, 1 and 2 the smaller ones
    float lgTurn = aSeed * 40.0 + lgLobe * 2.6;
    vec3 lgOff = step(0.5, lgLobe) * vec3(cos(lgTurn) * 0.6, -0.2 + 0.32 * fract(aSeed * 11.0 + lgLobe * 0.37) + 0.22 * lgSlim, sin(lgTurn) * 0.6);
    float lgSize = mix(1.0, 0.56 + 0.14 * fract(aSeed * 13.0 + lgLobe), step(0.5, lgLobe));
    // every corner is pushed in or out a little, so no two crowns have the same outline
    float lgLump = 1.0 + 0.36 * (fract(sin(dot(position, vec3(12.9, 78.2, 37.7)) + aSeed * 50.0 + lgLobe) * 43758.5) - 0.5);
    lgCrown = position * lgSize * lgLump + lgOff;
    float lgWide = r * mix(1.0, 0.74, lgSlim);
    transformed = vec3(aTree.x + lgCrown.x * lgWide, aTree.y + (lgCrown.y * 1.25 + 1.05 + lgLift) * r, aTree.z + lgCrown.z * lgWide);
  }
}
`;function P_(i,t,e,n,s,r,o,a){const l=new Ae;l.name="trees";const c={value:n},u={value:new W},f=Ua.map(k=>new Gt(k)),d=new mn({flatShading:!0,roughness:.95,metalness:0});d.onBeforeCompile=k=>{k.uniforms.uRange=c,k.uniforms.uEye=u,k.uniforms.uGreens={value:f},k.uniforms.uNight=ri,k.vertexShader=k.vertexShader.replace("#include <common>",`#include <common>
${Eh}
uniform vec3 uGreens[${Ua.length}];
varying vec3 vLgColor;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = vec3(0.0, 1.0, 0.0);").replace("#include <begin_vertex>",`${bh}
        // lighter towards the top of the crown and darker underneath, each leaf mass a slightly different green
        float lgLeaf = fract(sin(dot(position, vec3(41.3, 17.9, 63.1)) + aSeed * 71.0 + aPart) * 9631.7);
        vLgColor = uGreens[int(aSeed * ${Ua.length}.0)] * (0.8 + 0.3 * fract(aSeed * 9.7)) * (0.6 + 0.4 * smoothstep(-0.7, 0.9, lgCrown.y)) * (0.86 + 0.28 * lgLeaf);
        vLgColor = mix(vLgColor, vec3(0.36, 0.45, 0.33) * (0.8 + 0.3 * fract(aSeed * 9.7)) * (0.7 + 0.3 * smoothstep(-0.7, 0.9, lgCrown.y)) * (0.88 + 0.24 * lgLeaf), 0.55 * lgSlim); // the grey-green of gums
        // now and then a tree in flower: jacaranda purple, or the yellow of a wattle (which trees flower is not surveyed)
        float lgBloom = fract(aSeed * 23.7);
        vLgColor = mix(vLgColor, mix(vec3(0.33, 0.24, 0.62), vec3(0.72, 0.6, 0.12), step(0.985, lgBloom)) * (0.8 + 0.4 * lgLeaf), step(0.97, lgBloom) * (1.0 - lgSlim) * 0.8);
        if (aPart > 0.5 && aPart < 1.5) vLgColor = mix(vec3(0.33, 0.26, 0.2), vec3(0.62, 0.58, 0.5), lgSlim) * (0.85 + 0.3 * fract(aSeed * 7.9));`),k.fragmentShader=k.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLgColor;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = vLgColor;`)},d.customProgramCacheKey=()=>"logan-tree";const h=new ca({depthPacking:ul});h.onBeforeCompile=k=>{k.uniforms.uRange=c,k.uniforms.uEye=u,k.vertexShader=k.vertexShader.replace("#include <common>",`#include <common>
${Eh}`).replace("#include <begin_vertex>",bh)},h.customProgramCacheKey=()=>"logan-tree-depth";const p=new aa(1,0).getAttribute("position"),_=new la(1,0).getAttribute("position"),m=Array.from(p.array),g=new Array(p.count).fill(0);for(const k of[2,3])m.push(...Array.from(_.array)),g.push(...new Array(_.count).fill(k));for(let k=0;k<4;k++){const O=k/4*Math.PI*2,$=(k+1)/4*Math.PI*2,et=Math.cos(O),X=Math.sin(O),J=Math.cos($),j=Math.sin($);m.push(et,0,X,J,1,j,J,0,j,et,0,X,et,1,X,J,1,j),g.push(1,1,1,1,1,1)}const v=new qt(new Float32Array(m),3),y=new qt(new Float32Array(g),1),[M,b]=e,S=t.w/M,x=t.h/b,E=(k,O)=>{const $=Math.sin(k*127.1+O*311.7)*43758.5453;return $-Math.floor($)},D=[7,5.75,5,4,3.25,2,1.5,1],R=Math.ceil(M/Te);let L;const C=()=>{if(L||!a)return L;const k=(et,X)=>Math.floor((X+b/2)/Te)*R+Math.floor((et+M/2)/Te),O=(et,X,J)=>{const j=et.get(X);j?j[j.length-1]!==J&&j.push(J):et.set(X,[J])};L={buildings:new Map,roads:new Map};const $=a.buildings;for(let et=0;et<$.count;et++)O(L.buildings,k($.x[et],$.z[et]),et);return a.roads.forEach((et,X)=>{if(!(et.cls>6))for(let J=0;J<et.pts.length;J+=2)O(L.roads,k(et.pts[J],et.pts[J+1]),X)}),L},P=2.5,w=Te/P;function N(k,O,$,et){const X=C();if(!X||!a)return null;const J=new Uint8Array(w*w),j=O*R+k,at=a.buildings,it=(lt,Rt,ft,At)=>{const xt=Math.max(0,Math.floor((lt-ft-$)/P)),Dt=Math.min(w-1,Math.floor((lt+ft-$)/P)),Kt=Math.max(0,Math.floor((Rt-ft-et)/P)),te=Math.min(w-1,Math.floor((Rt+ft-et)/P));for(let Wt=Kt;Wt<=te;Wt++)for(let ut=xt;ut<=Dt;ut++)(!At||At($+(ut+.5)*P,et+(Wt+.5)*P))&&(J[Wt*w+ut]=1)};for(const lt of X.buildings.get(j)??[]){const Rt=Math.cos(at.angle[lt]),ft=Math.sin(at.angle[lt]),At=at.w[lt]/2+2.6,xt=at.d[lt]/2+2.6;it(at.x[lt],at.z[lt],Math.hypot(At,xt),(Dt,Kt)=>{const te=Dt-at.x[lt],Wt=Kt-at.z[lt];return Math.abs(te*Rt+Wt*ft)<At&&Math.abs(-te*ft+Wt*Rt)<xt})}for(const lt of X.roads.get(j)??[]){const Rt=a.roads[lt],ft=(D[Rt.cls]??3)+2.2,At=Rt.pts;for(let xt=0;xt+3<At.length;xt+=2){const Dt=Math.hypot(At[xt+2]-At[xt],At[xt+3]-At[xt+1]),Kt=Math.max(1,Math.ceil(Dt/P));for(let te=0;te<=Kt;te++)it(At[xt]+(At[xt+2]-At[xt])*te/Kt,At[xt+1]+(At[xt+3]-At[xt+1])*te/Kt,ft)}}return J}function F(k,O){const $=k*Te-M/2,et=O*Te-b/2;let X;const J=[],j=[];let at=1/0,it=-1/0;const lt=Math.ceil(Te/s);for(let At=0;At<lt;At++)for(let xt=0;xt<lt;xt++){const Dt=Math.round($/s)+xt,Kt=Math.round(et/s)+At,te=E(Dt,Kt),Wt=E(Kt+17.3,Dt-5.1),ut=E(Dt*1.7+3.1,Kt*2.3),Ut=(Dt+te)*s,Bt=(Kt+Wt)*s;if(!i.inside(Ut,Bt,60)||o.some(H=>Ut>H[0]&&Ut<H[2]&&Bt>H[1]&&Bt<H[3]))continue;const le=Math.min(t.h-1,Math.max(0,Math.floor((Bt+b/2)*x)))*t.w+Math.min(t.w-1,Math.max(0,Math.floor((Ut+M/2)*S)));let Me;if(t.wooded[le]){if(t.built[le]>46+ut*30||ut>.9)continue;Me=3.4+ut*3.2+te*1.4}else{if(!a||t.built[le]<30||ut>.5)continue;X===void 0&&(X=N(k,O,$,et));const H=Math.floor((Ut-$)/P),pe=Math.floor((Bt-et)/P);if(!X||H<0||pe<0||H>=w||pe>=w||X[pe*w+H])continue;Me=1.9+te*1.9}const ye=i.yAt(Ut,Bt);J.push(Ut,ye-.5,Bt,Me),j.push(Wt),at=Math.min(at,ye),it=Math.max(it,ye+Me*3.4)}if(!j.length)return null;const Rt=new fa;Rt.setAttribute("position",v.clone()),Rt.setAttribute("aPart",y.clone()),Rt.setAttribute("aTree",new ei(new Float32Array(J),4)),Rt.setAttribute("aSeed",new ei(new Float32Array(j),1)),Rt.instanceCount=j.length,Rt.boundingSphere=new cs(new W($+Te/2,(at+it)/2,et+Te/2),Math.hypot(Te*.75,(it-at)/2)+20);const ft=new $t(Rt,d);return ft.customDepthMaterial=h,ft.castShadow=r,ft.receiveShadow=r,ft}const z=new Map,K=Math.ceil(M/Te),V=Math.ceil(b/Te);return{group:l,update(k){u.value.copy(k);const O=n+Te*.75,$=(k.x+M/2)/Te,et=(k.z+b/2)/Te,X=Math.ceil(O/Te);let J=0,j=!1;const at=k.y-i.yAt(k.x,k.z)<n;if(at)for(let it=Math.max(0,Math.floor(et-X));it<=Math.min(V-1,Math.floor(et+X));it++)for(let lt=Math.max(0,Math.floor($-X));lt<=Math.min(K-1,Math.floor($+X));lt++){const Rt=it*K+lt;if(z.has(Rt)||Math.hypot((lt+.5-$)*Te,(it+.5-et)*Te)>O)continue;if(J>=2){j=!0;continue}const ft=F(lt,it);z.set(Rt,ft),ft&&l.add(ft),J++}for(const[it,lt]of z)(!at||Math.hypot((it%K+.5-$)*Te,(Math.floor(it/K)+.5-et)*Te)>O+Te*2)&&(lt&&(l.remove(lt),lt.geometry.dispose()),z.delete(it));return J>0||j}}}const L_={rise:5.75*60,set:18*60,noon:62},wh=220,Th=125e3,D_={high:{step:1,range:7500,minArea:0,trees:[2400,15],shadow:4096,pixelRatio:2},medium:{step:2,range:5200,minArea:45,trees:[1800,19],shadow:2048,pixelRatio:1.5},low:{step:3,range:3600,minArea:60,trees:[1200,24],shadow:0,pixelRatio:1}},I_=new Gt(1,1,1),N_=()=>new Promise(i=>requestAnimationFrame(()=>i())),Ah=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class U_{constructor(t,e,n,s){ht(this,"renderer");ht(this,"scene",new $u);ht(this,"camera",new gn(38,1,5,9e5));ht(this,"controls");ht(this,"atmosphere");ht(this,"fog",new Vo(16777215,1,2));ht(this,"hf");ht(this,"map");ht(this,"roads");ht(this,"buildings");ht(this,"precinct");ht(this,"details",[]);ht(this,"trees");ht(this,"streetLife");ht(this,"labels");ht(this,"places",[]);ht(this,"shapes",[]);ht(this,"roadData",[]);ht(this,"streets");ht(this,"suburbLines");ht(this,"divisionLines");ht(this,"selection");ht(this,"time",{value:0});ht(this,"flood");ht(this,"floodInfo");ht(this,"floodRise");ht(this,"raf",0);ht(this,"last",0);ht(this,"dirty",!0);ht(this,"animating",!0);ht(this,"disposed",!1);ht(this,"abort",new AbortController);ht(this,"resizeObserver");ht(this,"flight");ht(this,"lastCompass",NaN);ht(this,"width",1);ht(this,"height",1);ht(this,"quality","high");ht(this,"pixelRatio",1);ht(this,"slowFrames",0);ht(this,"press");ht(this,"external");ht(this,"solar",NaN);ht(this,"idle",0);ht(this,"focus",new W);ht(this,"onPointerDown",t=>{this.press=t.button===0&&t.isPrimary?{x:t.clientX,y:t.clientY,t:performance.now()}:void 0});ht(this,"onPointerUp",t=>{const e=this.press;if(this.press=void 0,!e||Math.hypot(t.clientX-e.x,t.clientY-e.y)>6||performance.now()-e.t>600)return;const n=this.groundPoint(t.clientX,t.clientY),s=n?this.suburbAt(n.x,n.z):-1;s>=0&&this.cb.onSelect({kind:"suburb",index:s})});ht(this,"onKey",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=this.currentView(),n=e.dist*.12,s=se.degToRad(e.azimuth),r=-Math.sin(s),o=-Math.cos(s),a=Math.cos(s),l=-Math.sin(s);let c=null;switch(t.key){case"ArrowUp":c={...e,x:e.x+r*n,z:e.z+o*n};break;case"ArrowDown":c={...e,x:e.x-r*n,z:e.z-o*n};break;case"ArrowLeft":c={...e,x:e.x-a*n,z:e.z-l*n};break;case"ArrowRight":c={...e,x:e.x+a*n,z:e.z+l*n};break;case"+":case"=":c={...e,dist:e.dist*.8};break;case"-":case"_":c={...e,dist:e.dist*1.25};break;case"q":case"Q":c={...e,azimuth:e.azimuth-15};break;case"e":case"E":c={...e,azimuth:e.azimuth+15};break;case"r":case"R":c={...e,polar:e.polar-6};break;case"f":case"F":c={...e,polar:e.polar+6};break;case"Home":c=this.homeView();break;default:return}t.preventDefault(),this.fly(c,.3)});ht(this,"frame",t=>{var f,d,h,p,_,m,g;if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);const e=(t-this.last)/1e3,n=Math.min(.1,e);if(this.last=t,document.hidden)return;if(this.flight){const v=this.flight;v.t=Math.min(1,v.t+n/v.duration);const y=Ah(v.t),M=(b,S)=>b+(S-b)*y;this.applyView({x:M(v.from.x,v.to.x),z:M(v.from.z,v.to.z),dist:Math.exp(M(Math.log(v.from.dist),Math.log(v.to.dist))),polar:M(v.from.polar,v.to.polar),azimuth:M(v.from.azimuth,v.to.azimuth)}),v.t>=1&&(this.flight=void 0)}if(!this.external&&this.controls.update()&&(this.dirty=!0),this.atmosphere.update(n)&&(this.dirty=!0),this.floodRise&&this.flood){const v=this.floodRise;v.t=Math.min(1,v.t+n/4);const y=.35+.65*Ah(v.t);this.flood.setLevel(y),this.time.value+=n,this.cb.onFloodLevel(y),v.t>=1&&(this.floodRise=void 0),this.dirty=!0}const s=this.camera;let r=((f=this.precinct)==null?void 0:f.animate(n,s.position))??!1;for(const v of this.details)r=v.animate(n,s.position)||r;let o=this.controls.target,a;if(this.external){if(!this.dirty&&!r){this.idle++;return}this.idle=this.dirty?0:this.idle+1,this.dirty=!1;const v=this.hf.yAt(s.position.x,s.position.z);s.position.y<v+1.2&&(s.position.y=v+1.2);const y=s.getWorldDirection(this.focus),M=s.position.y-v;a=se.clamp(y.y<-.08?M/-y.y:M*6,60,15e4),o=this.focus.multiplyScalar(a).add(s.position),o.y=this.hf.yAt(o.x,o.z)}else{const v=this.hf.yAt(o.x,o.z)-o.y;if(Math.abs(v)>.5){const M=v*Math.min(1,n*7);o.y+=M,s.position.y+=M,this.dirty=!0}if(!this.dirty&&!r)return;this.dirty=!1;const y=this.hf.yAt(s.position.x,s.position.z)+25;s.position.y<y&&(s.position.y=y),a=s.position.distanceTo(o)}const l=se.clamp(a*.02,this.external?.6:3,700),c=se.clamp(a*10+7e4,7e4,9e5);(Math.abs(l-s.near)>s.near*.05||Math.abs(c-s.far)>s.far*.05)&&(s.near=l,s.far=c,s.updateProjectionMatrix()),this.fog.color.copy(this.atmosphere.horizon),this.fog.near=a*1.6+2500,this.fog.far=a*6+75e3,_n.uTint.value.copy(this.atmosphere.sun.color).lerp(I_,.45),_n.uStreet.value=1-se.smoothstep(a,650,1500),(d=this.roads)!=null&&d.update(a)&&(this.dirty=!0),(h=this.buildings)!=null&&h.update(s.position)&&(this.dirty=!0),(p=this.trees)!=null&&p.update(s.position)&&(this.dirty=!0),(_=this.precinct)!=null&&_.update(s.position)&&(this.dirty=!0);for(const v of this.details)v.update(s.position)&&(this.dirty=!0);if((m=this.streetLife)!=null&&m.update(s.position)&&(this.dirty=!0),this.atmosphere.aimShadow(o,a),this.renderer.render(this.scene,s),(g=this.labels)==null||g.update(s,this.width,this.height,this.external?Math.max(280,a*6):1/0),e<.25&&(this.slowFrames=e>.042?this.slowFrames+1:Math.max(0,this.slowFrames-2),this.slowFrames>50&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio*.75),this.renderer.setPixelRatio(this.pixelRatio),this.resize(),this.slowFrames=0)),this.external)return;const u=Math.round(this.currentView().azimuth);u!==this.lastCompass&&(this.lastCompass=u,this.cb.onCompass(u))});this.container=t,this.labelLayer=e,this.cb=n,this.opts=s,this.external=!!s.external}async init(){var d;try{this.renderer=new tg({antialias:!0,powerPreference:"high-performance"})}catch{this.cb.onError("This browser could not start WebGL, which the 3D map needs.");return}const t=this.renderer;this.quality=this.pickQuality();const e=D_[this.quality];this.pixelRatio=Math.min(window.devicePixelRatio||1,e.pixelRatio),t.setPixelRatio(this.pixelRatio),t.outputColorSpace=Ue,t.toneMapping=Gr,t.shadowMap.enabled=e.shadow>0,t.shadowMap.type=Ki;const n=t.domElement;n.tabIndex=0,this.external?(n.tabIndex=-1,n.setAttribute("role","img"),n.setAttribute("aria-label","3D map of Logan")):(n.setAttribute("role","application"),n.setAttribute("aria-label","3D map of Logan. Drag to pan, right-drag to rotate, scroll to zoom, click a suburb to select it. Arrow keys pan, plus and minus zoom, Q and E rotate.")),n.style.display="block",n.style.outlineOffset="-3px",this.container.appendChild(n),n.addEventListener("webglcontextlost",h=>{h.preventDefault(),this.disposed||this.cb.onError("The browser reclaimed the graphics memory this map was using.")});let s;try{s=await og(this.opts.assets,(h,p)=>this.cb.onProgress(h*.6,p),this.abort.signal)}catch(h){this.disposed||this.cb.onError(h instanceof Error?h.message:"The map data could not be loaded.");return}if(this.disposed)return;const{map:r,heights:o}=s;this.map=r,s.ground.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());const a=async(h,p)=>{this.cb.onProgress(h,p),await N_()};await a(.62,"Shaping the terrain");const l=this.hf=new Vg(o,r.meta.grid[0],r.meta.grid[1],r.meta.size[0],r.meta.size[1],e.step);this.scene.add(b_(l,s,this.time)),await a(.7,"Laying out the streets"),this.roadData=s.roads,this.roads=y_(s.roads,l),this.scene.add(this.roads.group,this.buildRail()),await a(.8,"Raising the buildings"),this.buildings=Gg(s.buildings,r,l,e.range,e.minArea,e.shadow>0,s.roads),this.scene.add(this.buildings.group);const c=[r.precinct.box,...(r.details??[]).map(h=>h.box)];if(this.trees=P_(l,s.cover,r.meta.size,e.trees[0],e.trees[1],e.shadow>0,c,{buildings:s.buildings,roads:s.roads}),this.precinct=Sh(r.precinct,l,e.shadow>0,e.range),this.details=(r.details??[]).slice(0,1).map(h=>Sh(h,l,e.shadow>0,e.range,2)),this.streetLife=C_(s.roads,l,r.meta.size,e.shadow>0,c),this.scene.add(this.trees.group,this.precinct.group,this.streetLife.group,...this.details.map(h=>h.group)),await a(.9,"Drawing the boundaries"),this.shapes=r.suburbs.map(h=>{const p=h.r.map(m=>new Float32Array(m.map(g=>g/10))),_=[1/0,1/0,-1/0,-1/0];for(const m of p)for(let g=0;g<m.length;g+=2)_[0]=Math.min(_[0],m[g]),_[1]=Math.min(_[1],m[g+1]),_[2]=Math.max(_[2],m[g]),_[3]=Math.max(_[3],m[g+1]);return{rings:p,box:_}}),this.buildBoundaries(),this.disposed)return;this.atmosphere=new Rg(t,null,e.shadow),this.scene.add(this.atmosphere.sky,this.atmosphere.sun,this.atmosphere.sun.target,this.atmosphere.hemi),this.scene.fog=this.fog,this.places=Zg(r.meta,l,(h,p)=>{var _;return((_=r.suburbs[this.suburbAt(h,p)])==null?void 0:_.n)??""});const u=new ti({color:15020589});for(const h of this.places){if(h.boundary){const v=h.boundary.map(([b,S])=>br(r.meta,b,S));this.scene.add(x_(v,h.number??"",l,s.roads,s.buildings,e.shadow>0));const y=new Ae;y.name="outline-"+h.id;const M=new W(0,1,0);v.forEach(([b,S],x)=>{const[E,D]=v[(x+1)%v.length],R=Math.max(1,Math.ceil(Math.hypot(E-b,D-S)/8));for(let L=0;L<R;L++){const C=b+(E-b)*L/R,P=S+(D-S)*L/R,w=b+(E-b)*(L+1)/R,N=S+(D-S)*(L+1)/R,F=l.yAt(C,P)+1.2,z=l.yAt(w,N)+1.2,K=new W(w-C,z-F,N-P),V=K.length(),k=new $t(new rr(.7,.7,V+1.2,6),u);k.position.set((C+w)/2,(F+z)/2,(P+N)/2),k.quaternion.setFromUnitVectors(M,K.normalize()),y.add(k)}}),this.scene.add(y)}if(!h.marker)continue;const p=new Ae,_=l.yAt(h.x,h.z),m=new $t(new rr(1,1,60,10),new ti({color:16052712}));m.position.y=30;const g=new $t(new cr(9,20,14),u);g.position.y=66,p.add(m,g),p.position.set(h.x,_,h.z),p.name="marker-"+h.id,this.scene.add(p)}this.labels=new qg(this.labelLayer,this.labelDefs(),h=>this.pickLabel(h)),this.labels.setKindVisible("division",!1),(d=document.fonts)==null||d.ready.then(()=>{var h;(h=this.labels)==null||h.remeasure(),this.dirty=!0}),this.setupControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize();const f=this.homeView();this.external?(this.controls.enabled=!1,this.animating=!window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.applyView(f)):window.matchMedia("(prefers-reduced-motion: reduce)").matches?(this.animating=!1,this.applyView(f)):(this.applyView({...f,dist:f.dist*1.1,polar:10,azimuth:-24}),this.fly(f,3.2)),this.cb.onProgress(1,"Ready"),this.cb.onReady({quality:this.quality,places:this.places,suburbs:r.suburbs.map((h,p)=>({index:p,name:h.n,areaKm2:h.a,buildings:h.b,low:h.e[0],high:h.e[1],wooded:h.t,streetKm:h.s})),facts:{areaKm2:r.meta.areaKm2,buildings:r.meta.buildings,streetKm:r.meta.streetKm,wooded:r.meta.treeCover,peakMetres:r.meta.peak.m,peakSuburb:r.meta.peak.suburb}}),this.last=performance.now(),this.raf=requestAnimationFrame(this.frame)}setTimeOfDay(t){var e;(e=this.atmosphere)==null||e.set(t,!this.animating),this.dirty=!0}async floodScenarios(){return this.floodInfo||(this.floodInfo=await lg(this.opts.assets.flood,this.abort.signal)),this.floodInfo}async showFlood(t){var n;if(this.floodRise=void 0,!t){(n=this.flood)==null||n.hide(),this.dirty=!0;return}const e=await this.floodScenarios();this.flood||(this.flood=new cg(this.hf,e,this.time,this.opts.assets.floodLevels),this.scene.add(this.flood.mesh)),await this.flood.show(t,this.abort.signal),!this.disposed&&(this.animating?(this.floodRise={t:0},this.flood.setLevel(.35)):(this.flood.setLevel(1),this.cb.onFloodLevel(1)),this.dirty=!0)}setFloodLevel(t){var e;this.floodRise=void 0,(e=this.flood)==null||e.setLevel(t),this.dirty=!0}setLayerVisible(t,e){var n,s,r;t==="suburbs"&&this.suburbLines?(this.suburbLines.visible=e,(n=this.labels)==null||n.setKindVisible("suburb",e)):t==="divisions"&&this.divisionLines?(this.divisionLines.visible=e,(s=this.labels)==null||s.setKindVisible("division",e)):t==="labels"&&((r=this.labels)==null||r.setVisible(e)),this.dirty=!0}setLabelObstacles(t){var e;(e=this.labels)==null||e.setObstacles(t),this.dirty=!0}selectSuburb(t,e=!1){const n=t===null?void 0:this.shapes[t];if(this.highlight(n?n.rings.map(s=>this.drapeRing(s)):[]),n&&t!==null&&e){const s=this.map.suburbs[t],r=Math.max(n.box[2]-n.box[0],n.box[3]-n.box[1]);this.fly({x:s.c[0],z:s.c[1],dist:se.clamp(r*1.9,3200,42e3),polar:46,azimuth:0},2.2)}}findStreets(t,e=40){const n=t.trim().toLowerCase();if(n.length<2)return[];const s=[],r=[];for(const o of this.streetIndex()){const a=o.name.toLowerCase().indexOf(n);if(!(a<0)&&((a===0?s:r).push({id:o.id,name:o.name,suburb:o.suburb}),s.length>=e))break}return s.concat(r).slice(0,e)}selectStreet(t){const e=this.streetIndex()[t];if(!e)return;this.highlight(e.roads.map(s=>Da(s,this.hf)));const n=Math.max(e.box[2]-e.box[0],e.box[3]-e.box[1]);this.fly({x:(e.box[0]+e.box[2])/2,z:(e.box[1]+e.box[3])/2,dist:se.clamp(n*2.2,900,16e3),polar:48,azimuth:0},2.2)}flyToPlace(t){const e=this.places.find(n=>n.id===t);e&&this.fly({x:e.x,z:e.z,dist:e.view[0],polar:e.view[1],azimuth:e.view[2]},2.4)}resetView(){this.fly(this.homeView(),2)}setView(t,e,n,s,r,o=1.5){this.fly({x:t,z:e,dist:n,polar:s,azimuth:r},o)}faceNorth(){this.fly({...this.currentView(),azimuth:0},.8)}zoomBy(t){const e=this.currentView();this.fly({...e,dist:e.dist*t},.35)}setExternalCamera(t,e,n,s,r){const o=this.camera;!this.hf||o.position.x===t&&o.position.y===e&&o.position.z===n&&o.rotation.y===s&&o.rotation.x===r||(o.position.set(t,e,n),o.rotation.set(r,s,0,"YXZ"),this.dirty=!0)}getCamera(){const t=new Un().setFromQuaternion(this.camera.quaternion,"YXZ");return{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z,yaw:t.y,pitch:t.x}}setSolarMinutes(t){const e=Math.round(t);e===this.solar||!this.atmosphere||(this.solar=e,this.atmosphere.setSolar(e,L_),this.dirty=!0)}setAnimating(t){this.animating=t}groundAt(t,e){return this.hf.yAt(t,e)}waterAt(t,e,n=!1){return this.flood?this.flood.surfaceAt(t,e,n):-1/0}overview(){const t=this.homeView(),e=se.degToRad(t.polar);return{x:t.x,y:this.hf.yAt(t.x,t.z)+t.dist*Math.cos(e),z:t.z+t.dist*Math.sin(e),yaw:0,pitch:e-Math.PI/2}}get settled(){return this.idle>=3}get fov(){return this.camera.fov}get bounds(){return[this.hf.xMin,this.hf.xMax,this.hf.zMin,this.hf.zMax]}fromLatLon(t,e){return br(this.map.meta,t,e)}dispose(){var e,n,s;if(this.disposed=!0,this.abort.abort(),cancelAnimationFrame(this.raf),(e=this.resizeObserver)==null||e.disconnect(),(n=this.labels)==null||n.dispose(),(s=this.controls)==null||s.dispose(),!this.renderer)return;const t=this.renderer.domElement;t.removeEventListener("keydown",this.onKey),t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointerup",this.onPointerUp),this.scene.traverse(r=>{var l,c,u;const o=r;(c=(l=o.geometry)==null?void 0:l.dispose)==null||c.call(l);const a=Array.isArray(o.material)?o.material:o.material?[o.material]:[];for(const f of a){for(const d of Object.values(f))d instanceof Fe&&d.dispose();f.dispose()}(u=o.customDepthMaterial)==null||u.dispose()}),this.renderer.dispose(),t.remove()}homeView(){const t=this.width>=768&&!this.external,e=2*Math.atan(Math.tan(se.degToRad(this.camera.fov)/2)*this.camera.aspect),n=se.clamp((t?29e3:25500)/Math.tan(e/2),t?66e3:6e4,112e3);return{x:t?-n*.075:0,z:n*.04,dist:n,polar:t?38:30,azimuth:0}}suburbAt(t,e){for(let n=0;n<this.shapes.length;n++){const{rings:s,box:r}=this.shapes[n];if(t<r[0]||t>r[2]||e<r[1]||e>r[3])continue;let o=!1;for(const a of s)for(let l=0,c=a.length-2;l<a.length;c=l,l+=2)a[l+1]>e!=a[c+1]>e&&t<(a[c]-a[l])*(e-a[l+1])/(a[c+1]-a[l+1])+a[l]&&(o=!o);if(o)return n}return-1}highlight(t){if(this.selection&&(this.scene.remove(this.selection),this.selection.geometry.dispose(),this.selection.material.dispose(),this.selection=void 0),t.length){const e=new Cn;for(const n of t)e.add(n,0,9,U(858142));for(const n of t)e.add(n,0,4.5,U(16765440));this.selection=new $t(e.build(),Pn({lift:4,nightDim:1})),this.selection.renderOrder=34,this.scene.add(this.selection)}this.dirty=!0}streetIndex(){if(this.streets)return this.streets;const t=new Map;for(const e of this.roadData){if(!e.name||e.cls>5)continue;const n=e.pts,s=Math.floor(n.length/4)*2,r=this.suburbAt(n[s],n[s+1]);if(r<0)continue;const o=`${e.name}:${r}`;let a=t.get(o);a||(a={id:0,name:this.map.roadNames[e.name],suburb:this.map.suburbs[r].n,roads:[],box:[1/0,1/0,-1/0,-1/0]},t.set(o,a)),a.roads.push(e);for(let l=0;l<n.length;l+=2)a.box[0]=Math.min(a.box[0],n[l]),a.box[1]=Math.min(a.box[1],n[l+1]),a.box[2]=Math.max(a.box[2],n[l]),a.box[3]=Math.max(a.box[3],n[l+1])}return this.streets=[...t.values()].sort((e,n)=>e.name.localeCompare(n.name)||e.suburb.localeCompare(n.suburb)),this.streets.forEach((e,n)=>e.id=n),this.streets}drapeRing(t){const e=[t[0],this.hf.yAt(t[0],t[1]),t[1]];for(let n=2;n<t.length;n+=2)this.hf.drape(t[n-2],t[n-1],t[n],t[n+1],e);return e}buildBoundaries(){const{map:t}=this,e=c=>c.map(u=>u/10),n=new Cn;for(const c of this.shapes)for(const u of c.rings)n.add(this.drapeRing(u),0,1.3,U(16777215));this.suburbLines=new $t(n.build(),Pn({lift:2,opacity:.6,nightDim:.75})),this.suburbLines.renderOrder=28;const s=new Cn;for(const c of t.divisions)for(const u of c.r)s.add(this.drapeRing(e(u)),0,2.4,U(5556479));this.divisionLines=new $t(s.build(),Pn({lift:3,opacity:.95,nightDim:.9})),this.divisionLines.renderOrder=30,this.divisionLines.visible=!1;const r=new Cn,o=new Cn;for(const c of t.boundary){const u=this.drapeRing(e(c));r.add(u,0,7,U(1057836)),o.add(u,0,3,U(16773288))}const a=new $t(r.build(),Pn({lift:3,opacity:.45,nightDim:.4}));a.renderOrder=31;const l=new $t(o.build(),Pn({lift:3.5,nightDim:.95}));l.renderOrder=32,this.scene.add(this.suburbLines,this.divisionLines,a,l)}buildRail(){const t=new Cn,e=new Cn;for(const o of this.map.rail){const a=this.drapeRing(o.map(l=>l/10));t.add(a,7,3.4,U(16052970)),e.add(a,3.4,1.7,U(4013895))}const n=new Ae;n.name="rail";const s=new $t(t.build(),Pn({lift:.5,opacity:.9,nightDim:.25,hole:!0}));s.renderOrder=22;const r=new $t(e.build(),Pn({lift:.6,nightDim:.5,hole:!0}));return r.renderOrder=23,n.add(s,r),n}labelDefs(){const{map:t,hf:e}=this,n=(a,l,c)=>({x:a,z:l,y:e.yAt(a,l)+c}),s=[];t.suburbs.map((a,l)=>({s:a,i:l})).sort((a,l)=>l.s.b-a.s.b).forEach(({s:a,i:l},c)=>{s.push({id:`suburb:${l}`,name:a.n,kind:"suburb",...n(a.c[0],a.c[1],30),priority:20+c*.4,maxDist:c<16?1/0:c<36?62e3:c<56?36e3:24e3})});for(const a of this.places)s.push({id:`place:${a.id}`,name:a.name,kind:a.kind,x:a.x,y:a.y,z:a.z,priority:a.priority,maxDist:a.maxDist});for(const a of Kg){const[l,c]=br(t.meta,a.lat,a.lon);s.push({id:`text:${a.name}:${a.lat}`,name:a.name,kind:a.kind,...n(l,c,20),priority:a.kind==="water"?9.5:40,maxDist:a.maxDist})}for(const a of[...t.precinct.labels??[],...(t.details??[]).flatMap(l=>l.labels??[])])s.push({id:`text:${a.n}:${a.x}`,name:a.n,kind:a.k,...n(a.x,a.z,a.l),priority:44,maxDist:a.d});for(const a of t.stations)a.city&&s.push({id:`station:${a.n}`,name:`${a.n} station`,kind:"station",...n(a.x,a.z,30),priority:50,maxDist:9e3});const o=t.meta.peak;s.push({id:"peak",name:`Highest ground · ${o.m} m`,kind:"peak",...n(o.x,o.z,60),priority:16});for(const a of t.divisions)s.push({id:`division:${a.n}`,name:`Division ${a.n}`,kind:"division",...n(a.c[0],a.c[1],40),priority:6});for(const a of t.neighbours)s.push({id:`region:${a.n}`,name:a.n,kind:"region",...n(a.c[0],a.c[1],0),priority:5,minDist:14e3});return s}pickLabel(t){if(t==="peak"){const r=this.map.meta.peak;this.fly({x:r.x,z:r.z,dist:9e3,polar:62,azimuth:30},2.4),this.cb.onSelect({kind:"peak"});return}const e=t.indexOf(":"),n=t.slice(0,e),s=t.slice(e+1);if(n==="suburb")this.cb.onSelect({kind:"suburb",index:Number(s)});else if(n==="place")this.cb.onSelect({kind:"place",id:s});else if(n==="station"){const r=this.map.stations.find(o=>o.n===s);r&&this.fly({x:r.x,z:r.z,dist:1300,polar:58,azimuth:this.currentView().azimuth},2),this.cb.onSelect({kind:"station",name:s})}}groundPoint(t,e){const n=this.renderer.domElement.getBoundingClientRect(),s=new Ot((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),r=new cc;r.setFromCamera(s,this.camera);const o=r.ray.origin,a=r.ray.direction,l=new W;let c=0,u=0;for(let f=0;f<4e3&&c<25e4;f++){l.copy(o).addScaledVector(a,c);const d=l.y-this.hf.yAt(l.x,l.z);if(d<=0){let h=u,p=c;for(let _=0;_<20;_++){const m=(h+p)/2;l.copy(o).addScaledVector(a,m),l.y-this.hf.yAt(l.x,l.z)>0?h=m:p=m}return this.hf.inside(l.x,l.z)?l:null}u=c,c+=Math.max(12,d*.4)}return null}pickQuality(){const t=new URLSearchParams(window.location.search).get("quality");if(t==="high"||t==="medium"||t==="low")return t;const e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),s=n?String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)):"";if(/swiftshader|llvmpipe|software/i.test(s))return"low";const r=navigator.deviceMemory??8;return window.matchMedia("(pointer: coarse)").matches||r<=4?"medium":"high"}setupControls(){const t=this.controls=new wg(this.camera,this.renderer.domElement);if(t.enableDamping=!0,t.dampingFactor=.09,t.screenSpacePanning=!1,t.zoomToCursor=!0,t.minDistance=wh,t.maxDistance=Th,t.maxPolarAngle=se.degToRad(82),t.zoomSpeed=1.1,t.addEventListener("start",()=>{this.flight=void 0}),t.addEventListener("change",()=>{const n=t.target;n.x=se.clamp(n.x,this.hf.xMin,this.hf.xMax),n.z=se.clamp(n.z,this.hf.zMin,this.hf.zMax),this.dirty=!0}),this.external)return;const e=this.renderer.domElement;e.addEventListener("keydown",this.onKey),e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointerup",this.onPointerUp)}clampView(t){return{x:se.clamp(t.x,this.hf.xMin,this.hf.xMax),z:se.clamp(t.z,this.hf.zMin,this.hf.zMax),dist:se.clamp(t.dist,wh,Th),polar:se.clamp(t.polar,2,82),azimuth:t.azimuth}}currentView(){const t=this.controls.target,e=new dr().setFromVector3(this.camera.position.clone().sub(t));return{x:t.x,z:t.z,dist:e.radius,polar:se.radToDeg(e.phi),azimuth:se.radToDeg(e.theta)}}applyView(t){const e=new dr(t.dist,se.degToRad(t.polar),se.degToRad(t.azimuth)),n=this.controls.target.set(t.x,this.hf.yAt(t.x,t.z),t.z);this.camera.position.setFromSpherical(e).add(n),this.camera.lookAt(n),this.dirty=!0}fly(t,e){if(t=this.clampView(t),!this.animating){this.flight=void 0,this.applyView(t),this.controls.update();return}const n=this.currentView();let s=(t.azimuth-n.azimuth)%360;s>180&&(s-=360),s<-180&&(s+=360),this.flight={from:n,to:{...t,azimuth:n.azimuth+s},t:0,duration:e}}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.fov=t/e<.8?52:38,this.camera.updateProjectionMatrix(),_n.uPixel.value=2*Math.tan(se.degToRad(this.camera.fov)/2)/e,this.dirty=!0}}const F_="14",Fa="Map and flood data © State of Queensland · Elevation © Geoscience Australia · Rainfall and river heights © Bureau of Meteorology (CC BY 4.0)",O_=`
.lgn-embed, .lgn-embed-layer { position: absolute; inset: 0; overflow: hidden; }
/* the labels sit over the map but never take a touch: drags and pinches must reach whatever the host listens on */
.lgn-embed-labels, .lgn-embed .lgn-label, .lgn-embed button.lgn-label { pointer-events: none; cursor: default; }
/* --inv-credit-bottom: the name the Inverloch model uses, so one host rule places either credit */
.lgn-embed-credit { position: absolute; left: 12px; right: 12px; bottom: var(--lgn-credit-bottom, var(--inv-credit-bottom, 6px)); width: fit-content; margin: 0 auto;
  padding: 2px 8px; border-radius: 4px; background: rgba(13, 24, 30, 0.7); color: rgba(255, 255, 255, 0.82); font: 10px/1.4 system-ui, sans-serif; text-align: center;
  pointer-events: none; }
`;function z_(i,t){if(!document.querySelector("style[data-logan-model]")){const f=document.createElement("style");f.setAttribute("data-logan-model",""),f.textContent=hg+O_,document.head.appendChild(f)}const e=document.createElement("div");e.className="lgn-embed";const n=document.createElement("div");n.className="lgn-embed-layer";const s=document.createElement("div");s.className="lgn-embed-layer lgn-embed-labels",s.setAttribute("aria-hidden","true");const r=document.createElement("p");r.className="lgn-embed-credit",r.textContent=Fa,e.append(n,s,r),i.appendChild(e);let o=[],a=!1,l;const c=new Promise((f,d)=>l={ok:f,fail:d}),u=new U_(n,s,{onProgress:(f,d)=>{var h;return(h=t.onProgress)==null?void 0:h.call(t,f,d)},onReady:f=>{o=f.places.map(d=>{const h=Math.min(Math.max(d.view[0],120),7e3),p=d.view[1]*Math.PI/180,_=d.view[2]*Math.PI/180,m=d.x+h*Math.sin(p)*Math.sin(_),g=d.z+h*Math.sin(p)*Math.cos(_),v=u.groundAt(d.x,d.z),y=Math.max(u.groundAt(m,g)+30,v+h*Math.cos(p)),M=d.x-m,b=v-y,S=d.z-g,x=d.stand&&{x:d.x+d.stand.from[0],z:d.z-d.stand.from[1],yaw:Math.atan2(d.stand.from[0]-d.stand.at[0],d.stand.at[1]-d.stand.from[1]),pitch:d.stand.pitch};return{id:d.id,name:d.name,kind:d.kind,blurb:d.blurb,x:m,y,z:g,yaw:Math.atan2(-M,-S),pitch:Math.atan2(b,Math.hypot(M,S)),tx:d.x,tz:d.z,stand:x,...d.marker?{marker:!0}:{}}}),t.labels===!1&&u.setLayerVisible("labels",!1),a=!0,l.ok()},onError:f=>{var d;return a?(d=t.onError)==null?void 0:d.call(t,f):l.fail(new Error(f))},onCompass:()=>{},onSelect:()=>{},onFloodLevel:f=>{var d;return(d=t.onFloodLevel)==null?void 0:d.call(t,f)}},{assets:typeof t.assets=="string"?ng(t.assets,F_):t.assets,external:!0,quality:t.quality});return u.init(),{ready:c,setCamera:(f,d,h,p,_)=>u.setExternalCamera(f,d,h,p,_),getCamera:()=>u.getCamera(),settled:()=>u.settled,setMinutes:f=>u.setSolarMinutes(f),setTide:()=>{},tide:{min:0,max:0,initial:0},setAnimating:f=>u.setAnimating(f),setLabelsVisible:f=>u.setLayerVisible("labels",f),setLabelObstacles:f=>u.setLabelObstacles(f),groundAt:(f,d)=>u.groundAt(f,d),waterLevel:()=>-1e6,waterAt:(f,d,h)=>u.waterAt(f,d,h),overview:()=>u.overview(),bounds:()=>u.bounds,fov:()=>u.fov,fromLatLon:(f,d)=>u.fromLatLon(f,d),spots:()=>o,floods:()=>u.floodScenarios().then(f=>f.events),setFlood:f=>u.showFlood(f),setFloodLevel:f=>u.setFloodLevel(f),floodDrop:qc,credit:Fa,dispose:()=>{u.dispose(),e.remove()}}}return vn.CREDIT=Fa,vn.create=z_,Object.defineProperty(vn,Symbol.toStringTag,{value:"Module"}),vn}({});
