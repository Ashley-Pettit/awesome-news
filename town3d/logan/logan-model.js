var LoganModel=function(pn){"use strict";var y_=Object.defineProperty;var E_=(pn,rn,Ye)=>rn in pn?y_(pn,rn,{enumerable:!0,configurable:!0,writable:!0,value:Ye}):pn[rn]=Ye;var st=(pn,rn,Ye)=>E_(pn,typeof rn!="symbol"?rn+"":rn,Ye);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rn="187",Ye={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bh=0,Ao=1,wh=2,Wi=1,Th=2,Xi=3,ni=0,ke=1,Ge=2,di=0,qi=1,Ro=2,Co=3,Po=4,Ah=5,fi=100,Rh=101,Ch=102,Ph=103,Lh=104,Dh=200,Ih=201,Nh=202,Uh=203,Lo=204,Do=205,Fh=206,Oh=207,Bh=208,zh=209,kh=210,Gh=211,Hh=212,Vh=213,Wh=214,Mr=0,Sr=1,yr=2,Yi=3,Er=4,br=5,wr=6,Tr=7,Io=0,Xh=1,qh=2,wn=0,No=1,Uo=2,Fo=3,Oo=4,Bo=5,zo=6,Ar=7,ko=300,pi=301,Ki=302,Rr=303,Cr=304,Pr=1e3,Tn=1001,Lr=1002,De=1003,Yh=1004,Es=1005,Ke=1006,Dr=1007,An=1008,Qe=1009,Go=1010,Ho=1011,Zi=1012,Ir=1013,mn=1014,gn=1015,_n=1016,Nr=1017,Ur=1018,mi=1020,Vo=35902,Wo=35899,Xo=1021,qo=1022,xn=1023,Gn=1026,Hn=1027,Yo=1028,Fr=1029,ii=1030,Or=1031,Br=1033,bs=33776,ws=33777,Ts=33778,As=33779,zr=35840,kr=35841,Gr=35842,Hr=35843,Vr=36196,Wr=37492,Xr=37496,qr=37488,Yr=37489,Rs=37490,Kr=37491,Zr=37808,$r=37809,Jr=37810,Qr=37811,jr=37812,ta=37813,ea=37814,na=37815,ia=37816,sa=37817,ra=37818,aa=37819,oa=37820,la=37821,ca=36492,ha=36494,ua=36495,da=36283,fa=36284,Cs=36285,pa=36286,Kh=3200,Ko=3201,ma=0,Zh=1,Vn="",Te="srgb",Ps="srgb-linear",Ls="linear",re="srgb",ga=7680,$h=519,Jh=512,Qh=513,jh=514,Zo=515,tu=516,eu=517,$o=518,Jo=519,nu=35044,Qo="300 es",an=2e3,$i=2001;function iu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ji(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function su(){const i=Ji("canvas");return i.style.display="block",i}const jo={};function tl(...i){const t="THREE."+i.shift();console.log(t,...i)}function el(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ft(...i){i=el(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function jt(...i){i=el(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ds(...i){const t=i.join(" ");t in jo||(jo[t]=!0,Ft(...i))}function ru(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const au={[Mr]:Mr,[yr]:wr,[Er]:Er,[Yi]:br,[Sr]:Sr,[wr]:yr,[Tr]:Tr,[br]:Yi};class Wn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nl=1234567;const Qi=Math.PI/180,ji=180/Math.PI;function gi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Xt(i,t,e){return Math.max(t,Math.min(e,i))}function _a(i,t){return(i%t+t)%t}function ou(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function lu(i,t,e){return i!==t?(e-i)/(t-i):0}function ts(i,t,e){return(1-e)*i+e*t}function cu(i,t,e,n){return ts(i,t,1-Math.exp(-e*n))}function hu(i,t=1){return t-Math.abs(_a(i,t*2)-t)}function uu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function du(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function fu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function pu(i,t){return i+Math.random()*(t-i)}function mu(i){return i*(.5-Math.random())}function gu(i){i!==void 0&&(nl=i);let t=nl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _u(i){return i*Qi}function xu(i){return i*ji}function vu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Mu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function il(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Su(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),h=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*u,o*c);break;default:Ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xa(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function sl(i,t){if(t.constructor===Float32Array)return i;const e=xa(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function rl(i,t){if(t.constructor===Float32Array)return i;const e=xa(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const te={DEG2RAD:Qi,RAD2DEG:ji,generateUUID:gi,clamp:Xt,euclideanModulo:_a,mapLinear:ou,inverseLerp:lu,lerp:ts,damp:cu,pingpong:hu,smoothstep:uu,smootherstep:du,randInt:fu,randFloat:pu,randFloatSpread:mu,seededRandom:gu,degToRad:_u,radToDeg:xu,isPowerOfTwo:vu,ceilPowerOfTwo:Mu,floorPowerOfTwo:il,setQuaternionFromProperEuler:Su,normalize:rl,denormalize:sl},Mo=class Mo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mo.prototype.isVector2=!0;let Dt=Mo;class Xn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(d!==x||l!==h||c!==f||u!==m){let p=l*h+c*f+u*m+d*x;p<0&&(h=-h,f=-f,m=-m,x=-x,p=-p);let g=1-o;if(p<.9995){const M=Math.acos(p),S=Math.sin(M);g=Math.sin(g*M)/S,o=Math.sin(o*M)/S,l=l*g+h*o,c=c*g+f*o,u=u*g+m*o,d=d*g+x*o}else{l=l*g+h*o,c=c*g+f*o,u=u*g+m*o,d=d*g+x*o;const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+u*d+l*f-c*h,t[e+1]=l*m+u*h+c*d-o*f,t[e+2]=c*m+u*f+o*h-l*d,t[e+3]=u*m-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"YZX":this._x=h*u*d+c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d-h*f*m;break;case"XZY":this._x=h*u*d-c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d+h*f*m;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const So=class So{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(al.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return va.copy(this).projectOnVector(t),this.sub(va)}reflect(t){return this.sub(va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};So.prototype.isVector3=!0;let z=So;const va=new z,al=new Xn,yo=class yo{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],m=n[8],x=s[0],p=s[3],g=s[6],M=s[1],S=s[4],v=s[7],b=s[2],T=s[5],_=s[8];return r[0]=a*x+o*M+l*b,r[3]=a*p+o*S+l*T,r[6]=a*g+o*v+l*_,r[1]=c*x+u*M+d*b,r[4]=c*p+u*S+d*T,r[7]=c*g+u*v+d*_,r[2]=h*x+f*M+m*b,r[5]=h*p+f*S+m*T,r[8]=h*g+f*v+m*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,m=e*d+n*h+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=d*x,t[1]=(s*c-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=h*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ma.makeScale(t,e)),this}rotate(t){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ma.makeRotation(-t)),this}translate(t,e){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};yo.prototype.isMatrix3=!0;let Ot=yo;const Ma=new Ot,ol=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ll=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yu(){const i={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===re&&(s.r=Rn(s.r),s.g=Rn(s.g),s.b=Rn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?Ls:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ps]:{primaries:t,whitePoint:n,transfer:Ls,toXYZ:ol,fromXYZ:ll,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:n,transfer:re,toXYZ:ol,fromXYZ:ll,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),i}const Zt=yu();function Rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let xi;class Eu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{xi===void 0&&(xi=Ji("canvas")),xi.width=t.width,xi.height=t.height;const s=xi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=xi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ji("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Rn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rn(e[n]/255)*255):e[n]=Rn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bu=0;class Sa{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ya(s[a].image)):r.push(ya(s[a]))}else r=ya(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Eu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}let wu=0;const Ea=new z;class Ae extends Wn{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=Tn,s=Tn,r=Ke,a=An,o=xn,l=Qe,c=Ae.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=gi(),this.name="",this.source=new Sa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ea).x}get height(){return this.source.getSize(Ea).y}get depth(){return this.source.getSize(Ea).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ko)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pr:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case Lr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pr:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case Lr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null,Ae.DEFAULT_MAPPING=ko,Ae.DEFAULT_ANISOTROPY=1;const Eo=class Eo{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,v=(f+1)/2,b=(g+1)/2,T=(u+h)/4,_=(d+x)/4,y=(m+p)/4;return S>v&&S>b?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=_/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=_/r,s=y/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-m)*(p-m)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(d-x)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Eo.prototype.isVector4=!0;let de=Eo;class Tu extends Wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ae({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Sa(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends Tu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class cl extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Au extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const _r=class _r{constructor(t,e,n,s,r,a,o,l,c,u,d,h,f,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,f,m,x,p)}set(t,e,n,s,r,a,o,l,c,u,d,h,f,m,x,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _r().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/vi.setFromMatrixColumn(t,0).length(),r=1/vi.setFromMatrixColumn(t,1).length(),a=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,f=a*d,m=o*u,x=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=h-x*c,e[9]=-o*l,e[2]=x-h*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,m=c*u,x=c*d;e[0]=h+x*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-m,e[6]=x+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,m=c*u,x=c*d;e[0]=h-x*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*u,e[9]=x-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,f=a*d,m=o*u,x=o*d;e[0]=l*u,e[4]=m*c-f,e[8]=h*c+x,e[1]=l*d,e[5]=x*c+h,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*u,e[4]=x-h*d,e[8]=m*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+m,e[10]=h-x*d}else if(t.order==="XZY"){const h=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+x,e[5]=a*u,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*u,e[10]=x*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ru,t,Cu)}lookAt(t,e,n){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),qn.crossVectors(n,je),qn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),qn.crossVectors(n,je)),qn.normalize(),Is.crossVectors(je,qn),s[0]=qn.x,s[4]=Is.x,s[8]=je.x,s[1]=qn.y,s[5]=Is.y,s[9]=je.y,s[2]=qn.z,s[6]=Is.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],m=n[2],x=n[6],p=n[10],g=n[14],M=n[3],S=n[7],v=n[11],b=n[15],T=s[0],_=s[4],y=s[8],L=s[12],P=s[1],R=s[5],D=s[9],I=s[13],A=s[2],F=s[6],k=s[10],B=s[14],J=s[3],H=s[7],Y=s[11],tt=s[15];return r[0]=a*T+o*P+l*A+c*J,r[4]=a*_+o*R+l*F+c*H,r[8]=a*y+o*D+l*k+c*Y,r[12]=a*L+o*I+l*B+c*tt,r[1]=u*T+d*P+h*A+f*J,r[5]=u*_+d*R+h*F+f*H,r[9]=u*y+d*D+h*k+f*Y,r[13]=u*L+d*I+h*B+f*tt,r[2]=m*T+x*P+p*A+g*J,r[6]=m*_+x*R+p*F+g*H,r[10]=m*y+x*D+p*k+g*Y,r[14]=m*L+x*I+p*B+g*tt,r[3]=M*T+S*P+v*A+b*J,r[7]=M*_+S*R+v*F+b*H,r[11]=M*y+S*D+v*k+b*Y,r[15]=M*L+S*I+v*B+b*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],m=t[3],x=t[7],p=t[11],g=t[15],M=l*f-c*h,S=o*f-c*d,v=o*h-l*d,b=a*f-c*u,T=a*h-l*u,_=a*d-o*u;return e*(x*M-p*S+g*v)-n*(m*M-p*b+g*T)+s*(m*S-x*b+g*_)-r*(m*v-x*T+p*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],m=t[12],x=t[13],p=t[14],g=t[15],M=e*o-n*a,S=e*l-s*a,v=e*c-r*a,b=n*l-s*o,T=n*c-r*o,_=s*c-r*l,y=u*x-d*m,L=u*p-h*m,P=u*g-f*m,R=d*p-h*x,D=d*g-f*x,I=h*g-f*p,A=M*I-S*D+v*R+b*P-T*L+_*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/A;return t[0]=(o*I-l*D+c*R)*F,t[1]=(s*D-n*I-r*R)*F,t[2]=(x*_-p*T+g*b)*F,t[3]=(h*T-d*_-f*b)*F,t[4]=(l*P-a*I-c*L)*F,t[5]=(e*I-s*P+r*L)*F,t[6]=(p*v-m*_-g*S)*F,t[7]=(u*_-h*v+f*S)*F,t[8]=(a*D-o*P+c*y)*F,t[9]=(n*P-e*D-r*y)*F,t[10]=(m*T-x*v+g*M)*F,t[11]=(d*v-u*T-f*M)*F,t[12]=(o*L-a*R-l*y)*F,t[13]=(e*R-n*L+s*y)*F,t[14]=(x*S-m*b-p*M)*F,t[15]=(u*b-d*S+h*M)*F,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,m=r*d,x=a*u,p=a*d,g=o*d,M=l*c,S=l*u,v=l*d,b=n.x,T=n.y,_=n.z;return s[0]=(1-(x+g))*b,s[1]=(f+v)*b,s[2]=(m-S)*b,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(h+g))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(m+S)*_,s[9]=(p-M)*_,s[10]=(1-(h+x))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=vi.set(s[0],s[1],s[2]).length();const o=vi.set(s[4],s[5],s[6]).length(),l=vi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),on.copy(this);const c=1/a,u=1/o,d=1/l;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,e.setFromRotationMatrix(on),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=an,l=!1){const c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===an)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===$i)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=an,l=!1){const c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s);let m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===an)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===$i)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};_r.prototype.isMatrix4=!0;let fe=_r;const vi=new z,on=new fe,Ru=new z(0,0,0),Cu=new z(1,1,1),qn=new z,Is=new z,je=new z,hl=new fe,ul=new Xn;class Cn{constructor(t=0,e=0,n=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ul.setFromEuler(this),this.setFromQuaternion(ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class ba{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pu=0;const dl=new z,Mi=new Xn,Pn=new fe,Ns=new z,es=new z,Lu=new z,Du=new Xn,fl=new z(1,0,0),pl=new z(0,1,0),ml=new z(0,0,1),gl={type:"added"},Iu={type:"removed"},Si={type:"childadded",child:null},wa={type:"childremoved",child:null};class Ie extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new z,e=new Cn,n=new Xn,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Ot}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.premultiply(Mi),this}rotateX(t){return this.rotateOnAxis(fl,t)}rotateY(t){return this.rotateOnAxis(pl,t)}rotateZ(t){return this.rotateOnAxis(ml,t)}translateOnAxis(t,e){return dl.copy(t).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fl,t)}translateY(t){return this.translateOnAxis(pl,t)}translateZ(t){return this.translateOnAxis(ml,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ns.copy(t):Ns.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(es,Ns,this.up):Pn.lookAt(Ns,es,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Mi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gl),Si.child=t,this.dispatchEvent(Si),Si.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Iu),wa.child=t,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gl),Si.child=t,this.dispatchEvent(Si),Si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,t,Lu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,Du,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ie.DEFAULT_UP=new z(0,1,0),Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ln extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nu={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const _l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Us={h:0,s:0,l:0};function Aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?i+(t-i)*6*e:e<.5?t:e<.6666666666666666?i+(t-i)*6*(.6666666666666666-e):i}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=_a(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Aa(a,r,t+.3333333333333333),this.g=Aa(a,r,t),this.b=Aa(a,r,t-.3333333333333333)}return Zt.colorSpaceToWorking(this,s),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const n=_l[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rn(t.r),this.g=Rn(t.g),this.b=Rn(t.b),this}copyLinearToSRGB(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return Zt.workingToColorSpace(Oe.copy(this),t),Math.round(Xt(Oe.r*255,0,255))*65536+Math.round(Xt(Oe.g*255,0,255))*256+Math.round(Xt(Oe.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(Oe.copy(this),e);const n=Oe.r,s=Oe.g,r=Oe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Te){Zt.workingToColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,s=Oe.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(Us);const n=ts(Yn.h,Us.h,e),s=ts(Yn.s,Us.s,e),r=ts(Yn.l,Us.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new It;It.NAMES=_l;class Ra{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new Ra(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Uu extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const cn=new z,Ln=new z,Ca=new z,Dn=new z,yi=new z,Ei=new z,xl=new z,Pa=new z,La=new z,Da=new z,Ia=new de,Na=new de,Ua=new de;class hn{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),Ln.subVectors(n,e),Ca.subVectors(t,e);const a=cn.dot(cn),o=cn.dot(Ln),l=cn.dot(Ca),c=Ln.dot(Ln),u=Ln.dot(Ca),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,m=(a*u-o*l)*h;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ia.setScalar(0),Na.setScalar(0),Ua.setScalar(0),Ia.fromBufferAttribute(t,e),Na.fromBufferAttribute(t,n),Ua.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ia,r.x),a.addScaledVector(Na,r.y),a.addScaledVector(Ua,r.z),a}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),Ln.subVectors(t,e),cn.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),cn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;yi.subVectors(s,n),Ei.subVectors(r,n),Pa.subVectors(t,n);const l=yi.dot(Pa),c=Ei.dot(Pa);if(l<=0&&c<=0)return e.copy(n);La.subVectors(t,s);const u=yi.dot(La),d=Ei.dot(La);if(u>=0&&d<=u)return e.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(n).addScaledVector(yi,a);Da.subVectors(t,r);const f=yi.dot(Da),m=Ei.dot(Da);if(m>=0&&f<=m)return e.copy(r);const x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Ei,o);const p=u*m-f*d;if(p<=0&&d-u>=0&&f-m>=0)return xl.subVectors(r,s),o=(d-u)/(d-u+(f-m)),e.copy(s).addScaledVector(xl,o);const g=1/(p+x+h);return a=x*g,o=h*g,e.copy(n).addScaledVector(yi,a).addScaledVector(Ei,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ns{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,un):un.fromBufferAttribute(r,a),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),Os.subVectors(this.max,is),bi.subVectors(t.a,is),wi.subVectors(t.b,is),Ti.subVectors(t.c,is),Kn.subVectors(wi,bi),Zn.subVectors(Ti,wi),si.subVectors(bi,Ti);let e=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-si.z,si.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,si.z,0,-si.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-si.y,si.x,0];return!Fa(e,bi,wi,Ti,Os)||(e=[1,0,0,0,1,0,0,0,1],!Fa(e,bi,wi,Ti,Os))?!1:(Bs.crossVectors(Kn,Zn),e=[Bs.x,Bs.y,Bs.z],Fa(e,bi,wi,Ti,Os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const In=[new z,new z,new z,new z,new z,new z,new z,new z],un=new z,Fs=new ns,bi=new z,wi=new z,Ti=new z,Kn=new z,Zn=new z,si=new z,is=new z,Os=new z,Bs=new z,ri=new z;function Fa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ri.fromArray(i,r);const o=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),u=n.dot(ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const xe=new z,zs=new Dt;let Fu=0;class Wt extends Wn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nu,this.updateRanges=[],this.gpuType=gn,this.version=0,this._normalizationScale=t!==void 0?xa(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zs.fromBufferAttribute(this,e),zs.applyMatrix3(t),this.setXY(e,zs.x,zs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):sl(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):rl(t,this.array)}}class vl extends Wt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ml extends Wt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Re extends Wt{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Ou=new ns,ss=new z,Oa=new z;class rs{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ou.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const e=ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(Oa)),this.expandByPoint(ss.copy(t.center).sub(Oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Bu=0;const en=new fe,Ba=new Ie,Ai=new z,tn=new ns,as=new ns,Ce=new z;class Me extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(iu(t)?Ml:vl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Ba.lookAt(t),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Re(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];as.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(tn.min,as.min),tn.expandByPoint(Ce),Ce.addVectors(tn.max,as.max),tn.expandByPoint(Ce)):(tn.expandByPoint(as.min),tn.expandByPoint(as.max))}tn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ce.fromBufferAttribute(o,c),l&&(Ai.fromBufferAttribute(t,c),Ce.add(Ai)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Wt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new z,l[L]=new z;const u=new z,d=new z,h=new z,f=new Dt,m=new Dt,x=new Dt,p=new z,g=new z;function M(L,P,R){c[L]=c[P]=c[R]=1,u.fromBufferAttribute(n,L),d.fromBufferAttribute(n,P),h.fromBufferAttribute(n,R),f.fromBufferAttribute(r,L),m.fromBufferAttribute(r,P),x.fromBufferAttribute(r,R),d.sub(u),h.sub(u),m.sub(f),x.sub(f);const D=1/(m.x*x.y-x.x*m.y);isFinite(D)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(D),g.copy(h).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(D),o[L].add(p),o[P].add(p),o[R].add(p),l[L].add(g),l[P].add(g),l[R].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let L=0,P=S.length;L<P;++L){const R=S[L],D=R.start,I=R.count;for(let A=D,F=D+I;A<F;A+=3)M(t.getX(A+0),t.getX(A+1),t.getX(A+2))}const v=new z,b=new z,T=new z,_=new z;function y(L){T.fromBufferAttribute(s,L),_.copy(T);const P=o[L];v.copy(P),v.sub(T.multiplyScalar(T.dot(P))).normalize(),b.crossVectors(_,P);const D=b.dot(l[L])<0?-1:1;a.setXYZW(L,v.x,v.y,v.z,D)}for(let L=0,P=n.count;L<P;++L)c[L]&&y(L);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Wt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,d=new z;if(t)for(let h=0,f=t.count;h<f;h+=3){const m=t.getX(h+0),x=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,m=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let g=0;g<u;g++)h[m++]=c[f++]}return new Wt(h,u,d)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const za=new z,zu=new z,ku=new Ot;class Mn{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=za.subVectors(n,e).cross(zu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(za),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ku.getNormalMatrix(t),s=this.coplanarPoint(za).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Gu=0;class os extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=qi,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lo,this.blendDst=Do,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ga,this.stencilZFail=ga,this.stencilZPass=ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new It().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Mn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Dt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Nn=new z,ka=new z,ks=new z,Gs=new z;class Ga{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ka.copy(t).add(e).multiplyScalar(.5),ks.copy(e).sub(t).normalize(),Gs.copy(this.origin).sub(ka);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ks),o=Gs.dot(this.direction),l=-Gs.dot(ks),c=Gs.lengthSq(),u=Math.abs(1-a*a);let d,h,f,m;if(u>0)if(d=a*l-o,h=a*o-l,m=r*u,d>=0)if(h>=-m)if(h<=m){const x=1/u;d*=x,h*=x,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ka).addScaledVector(ks,h),f}intersectSphere(t,e){if(t.radius<0)return null;Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,m=e.x-a.x,x=e.y-a.y,p=e.z-a.z,g=n.x-a.x,M=n.y-a.y,S=n.z-a.z,v=Math.abs(l),b=Math.abs(c),T=Math.abs(u);let _,y,L,P,R,D,I,A,F,k,B,J;if(v>=b&&v>=T?(L=l,D=d,F=m,J=g,l>=0?(_=c,y=u,P=h,R=f,I=x,A=p,k=M,B=S):(_=u,y=c,P=f,R=h,I=p,A=x,k=S,B=M)):b>=T?(L=c,D=h,F=x,J=M,c>=0?(_=u,y=l,P=f,R=d,I=p,A=m,k=S,B=g):(_=l,y=u,P=d,R=f,I=m,A=p,k=g,B=S)):(L=u,D=f,F=p,J=S,u>=0?(_=l,y=c,P=d,R=h,I=m,A=x,k=g,B=M):(_=c,y=l,P=h,R=d,I=x,A=m,k=M,B=g)),L===0)return null;const H=_/L,Y=y/L,tt=1/L,gt=P-H*D,Pt=R-Y*D,K=I-H*F,nt=A-Y*F,St=k-H*J,Et=B-Y*J,lt=St*nt-Et*K,Mt=gt*Et-Pt*St,ee=K*Pt-nt*gt;if(s){if(lt<0||Mt<0||ee<0)return null}else if((lt<0||Mt<0||ee<0)&&(lt>0||Mt>0||ee>0))return null;const Ct=lt+Mt+ee;if(Ct===0)return null;const $t=tt*(lt*D+Mt*F+ee*J);return(Ct>0?$t<0:$t>0)?null:this.at($t/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hs extends os{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Sl=new fe,ai=new Ga,Vs=new rs,yl=new z,Ws=new z,Xs=new z,qs=new z,Ha=new z,Ys=new z,El=new z,Ks=new z;class se extends Ie{constructor(t=new Me,e=new Hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ys.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Ha.fromBufferAttribute(d,t),a?Ys.addScaledVector(Ha,u):Ys.addScaledVector(Ha.sub(e),u))}e.add(Ys)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(Vs.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Vs,yl)===null||ai.origin.distanceToSquared(yl)>(t.far-t.near)**2))&&(Sl.copy(r).invert(),ai.copy(t.ray).applyMatrix4(Sl),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=h.length;m<x;m++){const p=h[m],g=a[p.materialIndex],M=Math.max(p.start,f.start),S=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=M,b=S;v<b;v+=3){const T=o.getX(v),_=o.getX(v+1),y=o.getX(v+2);s=Zs(this,g,t,n,c,u,d,T,_,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){const M=o.getX(p),S=o.getX(p+1),v=o.getX(p+2);s=Zs(this,a,t,n,c,u,d,M,S,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=h.length;m<x;m++){const p=h[m],g=a[p.materialIndex],M=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=M,b=S;v<b;v+=3){const T=v,_=v+1,y=v+2;s=Zs(this,g,t,n,c,u,d,T,_,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){const M=p,S=p+1,v=p+2;s=Zs(this,a,t,n,c,u,d,M,S,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Hu(i,t,e,n,s,r,a,o){let l;if(t.side===ke?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ni,o),l===null)return null;Ks.copy(o),Ks.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ks);return c<e.near||c>e.far?null:{distance:c,point:Ks.clone(),object:i}}function Zs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ws),i.getVertexPosition(l,Xs),i.getVertexPosition(c,qs);const u=Hu(i,t,e,n,Ws,Xs,qs,El);if(u){const d=new z;hn.getBarycoord(El,Ws,Xs,qs,d),s&&(u.uv=hn.getInterpolatedAttribute(s,o,l,c,d,new Dt)),r&&(u.uv1=hn.getInterpolatedAttribute(r,o,l,c,d,new Dt)),a&&(u.normal=hn.getInterpolatedAttribute(a,o,l,c,d,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new z,materialIndex:0};hn.getNormal(Ws,Xs,qs,h.normal),u.face=h,u.barycoord=d}return u}class Vu extends Ae{constructor(t=null,e=1,n=1,s,r,a,o,l,c=De,u=De,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ls extends Wt{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const oi=new rs,Wu=new Dt(.5,.5),$s=new z;class cs{constructor(t=new Mn,e=new Mn,n=new Mn,s=new Mn,r=new Mn,a=new Mn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=an,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],m=r[8],x=r[9],p=r[10],g=r[11],M=r[12],S=r[13],v=r[14],b=r[15];if(s[0].setComponents(c-a,f-u,g-m,b-M).normalize(),s[1].setComponents(c+a,f+u,g+m,b+M).normalize(),s[2].setComponents(c+o,f+d,g+x,b+S).normalize(),s[3].setComponents(c-o,f-d,g-x,b-S).normalize(),n)s[4].setComponents(l,h,p,v).normalize(),s[5].setComponents(c-l,f-h,g-p,b-v).normalize();else if(s[4].setComponents(c-l,f-h,g-p,b-v).normalize(),e===an)s[5].setComponents(c+l,f+h,g+p,b+v).normalize();else if(e===$i)s[5].setComponents(l,h,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){oi.center.set(0,0,0);const e=Wu.distanceTo(t.center);return oi.radius=.7071067811865476+e,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if($s.x=s.normal.x>0?t.max.x:t.min.x,$s.y=s.normal.y>0?t.max.y:t.min.y,$s.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const bl=new fe;class Va{constructor(){this.coordinateSystem=an,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];bl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new cs),n[s].setFromProjectionMatrix(bl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new cs),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new Va().copy(this)}}class wl extends Ae{constructor(t=[],e=pi,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wa extends Ae{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ri extends Ae{constructor(t,e,n=mn,s,r,a,o=De,l=De,c,u=Gn,d=1){if(u!==Gn&&u!==Hn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Sa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Tl extends Ri{constructor(t,e=mn,n=pi,s,r,a=De,o=De,l,c=Gn){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Al extends Ae{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ci extends Me{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(d,2));function m(x,p,g,M,S,v,b,T,_,y,L){const P=v/_,R=b/y,D=v/2,I=b/2,A=T/2,F=_+1,k=y+1;let B=0,J=0;const H=new z;for(let Y=0;Y<k;Y++){const tt=Y*R-I;for(let gt=0;gt<F;gt++){const Pt=gt*P-D;H[x]=Pt*M,H[p]=tt*S,H[g]=A,c.push(H.x,H.y,H.z),H[x]=0,H[p]=0,H[g]=T>0?1:-1,u.push(H.x,H.y,H.z),d.push(gt/_),d.push(1-Y/y),B+=1}}for(let Y=0;Y<y;Y++)for(let tt=0;tt<_;tt++){const gt=h+tt+F*Y,Pt=h+tt+F*(Y+1),K=h+(tt+1)+F*(Y+1),nt=h+(tt+1)+F*Y;l.push(gt,Pt,nt),l.push(Pt,K,nt),J+=6}o.addGroup(f,J,L),f+=J,h+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Xa extends Me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(r.slice(),3)),this.setAttribute("uv",new Re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const S=new z,v=new z,b=new z;for(let T=0;T<e.length;T+=3)f(e[T+0],S),f(e[T+1],v),f(e[T+2],b),l(S,v,b,M)}function l(M,S,v,b){const T=b+1,_=[];for(let y=0;y<=T;y++){_[y]=[];const L=M.clone().lerp(v,y/T),P=S.clone().lerp(v,y/T),R=T-y;for(let D=0;D<=R;D++)D===0&&y===T?_[y][D]=L:_[y][D]=L.clone().lerp(P,D/R)}for(let y=0;y<T;y++)for(let L=0;L<2*(T-y)-1;L++){const P=Math.floor(L/2);L%2===0?(h(_[y][P+1]),h(_[y+1][P]),h(_[y][P])):(h(_[y][P+1]),h(_[y+1][P+1]),h(_[y+1][P]))}}function c(M){const S=new z;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(M),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function u(){const M=new z;for(let S=0;S<r.length;S+=3){M.x=r[S+0],M.y=r[S+1],M.z=r[S+2];const v=p(M)/2/Math.PI+.5,b=g(M)/Math.PI+.5;a.push(v,1-b)}m(),d()}function d(){for(let M=0;M<a.length;M+=6){const S=a[M+0],v=a[M+2],b=a[M+4],T=Math.max(S,v,b),_=Math.min(S,v,b);T>.9&&_<.1&&(S<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function f(M,S){const v=M*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function m(){const M=new z,S=new z,v=new z,b=new z,T=new Dt,_=new Dt,y=new Dt;for(let L=0,P=0;L<r.length;L+=9,P+=6){M.set(r[L+0],r[L+1],r[L+2]),S.set(r[L+3],r[L+4],r[L+5]),v.set(r[L+6],r[L+7],r[L+8]),T.set(a[P+0],a[P+1]),_.set(a[P+2],a[P+3]),y.set(a[P+4],a[P+5]),b.copy(M).add(S).add(v).divideScalar(3);const R=p(b);x(T,P+0,M,R),x(_,P+2,S,R),x(y,P+4,v,R)}}function x(M,S,v,b){b<0&&M.x===1&&(a[S]=M.x-1),v.x===0&&v.z===0&&(a[S]=b/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xa(t.vertices,t.indices,t.radius,t.detail)}}function Xu(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Rl(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=$u(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,d=l;for(let h=e;h<s;h+=e){const f=i[h],m=i[h+1];f<o&&(o=f),m<l&&(l=m),f>u&&(u=f),m>d&&(d=m)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return hs(r,a,e,o,l,c,0),a}function Rl(i,t,e,n,s){let r;if(s===od(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Dl(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Dl(a/n|0,i[a],i[a+1],r);return r&&Pi(r,r.next)&&(fs(r),r=r.next),r}function li(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Pi(e,e.next)||me(e.prev,e,e.next)===0)){if(fs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function hs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&ed(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Yu(i,n,s,r):qu(i)){t.push(l.i,i.i,c.i),fs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Ku(li(i),t),hs(i,t,e,n,s,r,2)):a===2&&Zu(i,t,e,n,s,r):hs(li(i),t,e,n,s,r,1);break}}}function qu(i){const t=i.prev,e=i,n=i.next;if(me(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c);let m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=f&&us(s,o,r,l,a,c,m.x,m.y)&&me(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Yu(i,t,e,n){const s=i.prev,r=i,a=i.next;if(me(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),m=Math.min(u,d,h),x=Math.max(o,l,c),p=Math.max(u,d,h),g=qa(f,m,t,e,n),M=qa(x,p,t,e,n);let S=i.prevZ,v=i.nextZ;for(;S&&S.z>=g&&v&&v.z<=M;){if(S.x>=f&&S.x<=x&&S.y>=m&&S.y<=p&&S!==s&&S!==a&&us(o,u,l,d,c,h,S.x,S.y)&&me(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=x&&v.y>=m&&v.y<=p&&v!==s&&v!==a&&us(o,u,l,d,c,h,v.x,v.y)&&me(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=x&&S.y>=m&&S.y<=p&&S!==s&&S!==a&&us(o,u,l,d,c,h,S.x,S.y)&&me(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=p&&v!==s&&v!==a&&us(o,u,l,d,c,h,v.x,v.y)&&me(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ku(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Pi(n,s)&&Pl(n,e,e.next,s)&&ds(n,s)&&ds(s,n)&&(t.push(n.i,e.i,s.i),fs(e),fs(e.next),e=i=s),e=e.next}while(e!==i);return li(e)}function Zu(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&sd(a,o)){let l=Ll(a,o);a=li(a,a.next),l=li(l,l.next),hs(a,t,e,n,s,r,0),hs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function $u(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Rl(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(id(c))}s.sort(Ju);for(let r=0;r<s.length;r++)e=Qu(s[r],e);return e}function Ju(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Qu(i,t){const e=ju(i,t);if(!e)return t;const n=Ll(e,i);return li(n,n.next),li(e,e.next)}function ju(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Pi(i,e))return e;do{if(Pi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Cl(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);ds(e,i)&&(d<u||d===u&&(e.x>a.x||e.x===a.x&&td(a,e)))&&(a=e,u=d)}e=e.next}while(e!==o);return a}function td(i,t){return me(i.prev,i,t.prev)<0&&me(t.next,i,i.next)<0}function ed(i,t,e,n){let s=i;do s.z===0&&(s.z=qa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,nd(s)}function nd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function qa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function id(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Cl(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function us(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Cl(i,t,e,n,s,r,a,o)}function sd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!rd(i,t)&&(ds(i,t)&&ds(t,i)&&ad(i,t)&&(me(i.prev,i,t.prev)||me(i,t.prev,t))||Pi(i,t)&&me(i.prev,i,i.next)>0&&me(t.prev,t,t.next)>0)}function me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Pi(i,t){return i.x===t.x&&i.y===t.y}function Pl(i,t,e,n){const s=Qs(me(i,t,e)),r=Qs(me(i,t,n)),a=Qs(me(e,n,i)),o=Qs(me(e,n,t));return!!(s!==r&&a!==o||s===0&&Js(i,e,t)||r===0&&Js(i,n,t)||a===0&&Js(e,i,n)||o===0&&Js(e,t,n))}function Js(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Qs(i){return i>0?1:i<0?-1:0}function rd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Pl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ds(i,t){return me(i.prev,i,i.next)<0?me(i,t,i.next)>=0&&me(i,i.prev,t)>=0:me(i,t,i.prev)<0||me(i,i.next,t)<0}function ad(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ll(i,t){const e=Ya(i.i,i.x,i.y),n=Ya(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Dl(i,t,e,n){const s=Ya(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ya(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function od(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class ld{static triangulate(t,e,n=2){return Xu(t,e,n)}}class js{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return js.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Il(t),Nl(n,t);let a=t.length;e.forEach(Il);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Nl(n,e[l]);const o=ld.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Il(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Nl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ka extends Xa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ka(t.radius,t.detail)}}class Li extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,f=[],m=[],x=[],p=[];for(let g=0;g<u;g++){const M=g*h-a;for(let S=0;S<c;S++){const v=S*d-r;m.push(v,-M,0),x.push(0,0,1),p.push(S/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){const S=M+c*g,v=M+c*(g+1),b=M+1+c*(g+1),T=M+1+c*g;f.push(S,v,T),f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new Re(m,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.width,t.height,t.widthSegments,t.heightSegments)}}class Za extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new z,h=new z,f=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){const M=[],S=g/n,v=a+S*o,b=t*Math.cos(v),T=Math.sqrt(t*t-b*b);let _=0;g===0&&a===0?_=.5/e:g===n&&l===Math.PI&&(_=-.5/e);for(let y=0;y<=e;y++){const L=y/e,P=s+L*r;d.x=-T*Math.cos(P),d.y=b,d.z=T*Math.sin(P),m.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(L+_,1-S),M.push(c++)}u.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){const S=u[g][M+1],v=u[g][M],b=u[g+1][M],T=u[g+1][M+1];(g!==0||a>0)&&f.push(S,v,T),(g!==n-1||l<Math.PI)&&f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new Re(m,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Za(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Di(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Ul(s))s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ul(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function He(i){const t={};for(let e=0;e<i.length;e++){const n=Di(i[e]);for(const s in n)t[s]=n[s]}return t}function Ul(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function cd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const hd={clone:Di,merge:He};var ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends os{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ud,this.fragmentShader=dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Di(t.uniforms),this.uniformsGroups=cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new It().setHex(s.value);break;case"v2":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new de().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"m4":this.uniforms[n].value=new fe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class fd extends $n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Sn extends os{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $a extends os{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pd extends os{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ja={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Ol(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Ol(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ol(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class md{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const gd=new md;class Qa{constructor(t){this.manager=t!==void 0?t:gd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Qa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ii=new WeakMap;class _d extends Qa{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Ja.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Ii.get(a);d===void 0&&(d=[],Ii.set(a,d)),d.push({onLoad:e,onError:s})}return a}const o=Ji("img");function l(){u(),e&&e(this);const d=Ii.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Ii.delete(this),r.manager.itemEnd(t)}function c(d){u(),s&&s(d),Ja.remove(`image:${t}`);const h=Ii.get(this)||[];for(let f=0;f<h.length;f++){const m=h[f];m.onError&&m.onError(d)}Ii.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ja.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}}class xd extends Qa{constructor(t){super(t)}load(t,e,n,s){const r=new Ae,a=new _d(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Bl extends Ie{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class vd extends Bl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ja=new fe,zl=new z,kl=new z;class Md{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;zl.setFromMatrixPosition(t.matrixWorld),e.position.copy(zl),kl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ja,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===$i||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const tr=new z,er=new Xn,yn=new z;class Gl extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(tr,er,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tr,er,yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(tr,er,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tr,er,yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new z,Hl=new Dt,Vl=new Dt;class dn extends Gl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(Qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z)}getViewSize(t,e){return this.getViewBounds(t,Hl,Vl),e.subVectors(Vl,Hl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Wl extends Gl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Sd extends Md{constructor(){super(new Wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yd extends Bl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Sd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Xl extends Me{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}const Ni=-90,Ui=1;class to extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(Ni,Ui,t,e);s.layers=this.layers,this.add(s);const r=new dn(Ni,Ui,t,e);r.layers=this.layers,this.add(r);const a=new dn(Ni,Ui,t,e);a.layers=this.layers,this.add(a);const o=new dn(Ni,Ui,t,e);o.layers=this.layers,this.add(o);const l=new dn(Ni,Ui,t,e);l.layers=this.layers,this.add(l);const c=new dn(Ni,Ui,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===an)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$i)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Ed extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const ql=new fe;class Yl{constructor(t,e,n=0,s=1/0){this.ray=new Ga(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ba,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ql.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ql),this}intersectObject(t,e=!0,n=[]){return eo(t,this,n,e),n.sort(Kl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)eo(t[s],this,n,e);return n.sort(Kl),n}}function Kl(i,t){return i.distance-t.distance}function eo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)eo(r[a],t,e,!0)}}class nr{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Xt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const bo=class bo{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};bo.prototype.isMatrix2=!0;let Zl=bo;class bd extends Wn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function $l(i,t,e,n){const s=wd(n);switch(e){case Xo:return i*t;case Yo:return i*t/s.components*s.byteLength;case Fr:return i*t/s.components*s.byteLength;case ii:return i*t*2/s.components*s.byteLength;case Or:return i*t*2/s.components*s.byteLength;case qo:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case Br:return i*t*4/s.components*s.byteLength;case bs:case ws:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ts:case As:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kr:case Hr:return Math.max(i,16)*Math.max(t,8)/4;case zr:case Gr:return Math.max(i,8)*Math.max(t,8)/2;case Vr:case Wr:case qr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xr:case Rs:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $r:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Jr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case jr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ea:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ra:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case aa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case la:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ca:case ha:case ua:return Math.ceil(i/4)*Math.ceil(t/4)*16;case da:case fa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Cs:case pa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wd(i){switch(i){case Qe:case Go:return{byteLength:1,components:1};case Zi:case Ho:case _n:return{byteLength:2,components:1};case Nr:case Ur:return{byteLength:2,components:4};case mn:case Ir:case gn:return{byteLength:4,components:1};case Vo:case Wo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rn}})),typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rn);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jl(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Td(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){const m=d[h],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){const x=d[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rd=`#ifdef USE_ALPHAHASH
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
#endif`,Cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ld=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Id=`#ifdef USE_AOMAP
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
#endif`,Nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ud=`#ifdef USE_BATCHING
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
#endif`,Fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kd=`#ifdef USE_IRIDESCENCE
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
#endif`,Gd=`#ifdef USE_BUMPMAP
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
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$d=`#define PI 3.141592653589793
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
} // validated`,Jd=`vec3 transformedNormal = objectNormal;
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
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rf=`#ifdef USE_ENVMAP
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
#endif`,af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,of=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pf=`#ifdef USE_GRADIENTMAP
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
}`,mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bf=`PhysicalMaterial material;
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
#endif`,wf=`uniform sampler2D dfgLUT;
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
}`,Tf=`
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
#endif`,Af=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Pf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Df=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Of=`#if defined( USE_POINTS_UV )
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
#endif`,Bf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gf=`#if defined( USE_MORPHCOLORS )
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
#endif`,Hf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vf=`#ifdef USE_MORPHTARGETS
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
#endif`,Wf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$f=`#ifdef USE_NORMALMAP
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
#endif`,Jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,np=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dp=`float getShadowMask() {
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
}`,fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pp=`#ifdef USE_SKINNING
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
#endif`,mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gp=`#ifdef USE_SKINNING
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
#endif`,_p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sp=`#ifdef USE_TRANSMISSION
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
#endif`,yp=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ht={alphahash_fragment:Ad,alphahash_pars_fragment:Rd,alphamap_fragment:Cd,alphamap_pars_fragment:Pd,alphatest_fragment:Ld,alphatest_pars_fragment:Dd,aomap_fragment:Id,aomap_pars_fragment:Nd,batching_pars_vertex:Ud,batching_vertex:Fd,begin_vertex:Od,beginnormal_vertex:Bd,bsdfs:zd,iridescence_fragment:kd,bumpmap_pars_fragment:Gd,clipping_planes_fragment:Hd,clipping_planes_pars_fragment:Vd,clipping_planes_pars_vertex:Wd,clipping_planes_vertex:Xd,color_fragment:qd,color_pars_fragment:Yd,color_pars_vertex:Kd,color_vertex:Zd,common:$d,defaultnormal_vertex:Jd,displacementmap_pars_vertex:Qd,displacementmap_vertex:jd,emissivemap_fragment:tf,emissivemap_pars_fragment:ef,colorspace_fragment:nf,colorspace_pars_fragment:sf,envmap_fragment:rf,envmap_common_pars_fragment:af,envmap_pars_fragment:of,envmap_pars_vertex:lf,envmap_physical_pars_fragment:vf,envmap_vertex:cf,fog_vertex:hf,fog_pars_vertex:uf,fog_fragment:df,fog_pars_fragment:ff,gradientmap_pars_fragment:pf,lightmap_pars_fragment:mf,lights_lambert_fragment:gf,lights_lambert_pars_fragment:_f,lights_pars_begin:xf,lights_toon_fragment:Mf,lights_toon_pars_fragment:Sf,lights_phong_fragment:yf,lights_phong_pars_fragment:Ef,lights_physical_fragment:bf,lights_physical_pars_fragment:wf,lights_fragment_begin:Tf,lights_fragment_maps:Af,lights_fragment_end:Rf,lightprobes_pars_fragment:Cf,logdepthbuf_fragment:Pf,logdepthbuf_pars_fragment:Lf,logdepthbuf_pars_vertex:Df,logdepthbuf_vertex:If,map_fragment:Nf,map_pars_fragment:Uf,map_particle_fragment:Ff,map_particle_pars_fragment:Of,metalnessmap_fragment:Bf,metalnessmap_pars_fragment:zf,morphinstance_vertex:kf,morphcolor_vertex:Gf,morphnormal_vertex:Hf,morphtarget_pars_vertex:Vf,morphtarget_vertex:Wf,normal_fragment_begin:Xf,normal_fragment_maps:qf,normal_pars_fragment:Yf,normal_pars_vertex:Kf,normal_vertex:Zf,normalmap_pars_fragment:$f,clearcoat_normal_fragment_begin:Jf,clearcoat_normal_fragment_maps:Qf,clearcoat_pars_fragment:jf,iridescence_pars_fragment:tp,opaque_fragment:ep,packing:np,premultiplied_alpha_fragment:ip,project_vertex:sp,dithering_fragment:rp,dithering_pars_fragment:ap,roughnessmap_fragment:op,roughnessmap_pars_fragment:lp,shadowmap_pars_fragment:cp,shadowmap_pars_vertex:hp,shadowmap_vertex:up,shadowmask_pars_fragment:dp,skinbase_vertex:fp,skinning_pars_vertex:pp,skinning_vertex:mp,skinnormal_vertex:gp,specularmap_fragment:_p,specularmap_pars_fragment:xp,tonemapping_fragment:vp,tonemapping_pars_fragment:Mp,transmission_fragment:Sp,transmission_pars_fragment:yp,uv_pars_fragment:Ep,uv_pars_vertex:bp,uv_vertex:wp,worldpos_vertex:Tp,background_vert:`varying vec2 vUv;
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
}`},xt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},En={basic:{uniforms:He([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:He([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:He([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:He([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:He([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new It(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:He([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:He([xt.points,xt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:He([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:He([xt.common,xt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:He([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:He([xt.sprite,xt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:He([xt.common,xt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:He([xt.lights,xt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};En.physical={uniforms:He([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const ir={r:0,b:0,g:0},Ap=new fe,Ql=new Ot;Ql.set(-1,0,0,0,1,0,0,0,1);function Rp(i,t,e,n,s,r){const a=new It(0);let o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){const v=M.backgroundBlurriness>0;S=t.get(S,v)}return S}function m(M){let S=!1;const v=f(M);v===null?p(a,o):v&&v.isColor&&(p(v,1),S=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,S){const v=f(S);v&&v.isCubeTexture?(c===void 0&&(c=new se(new Ci(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Di(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ap.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ql),c.material.toneMapped=Zt.getTransfer(v.colorSpace)!==re,(u!==v||d!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new se(new Li(2,2),new $n({name:"BackgroundMaterial",uniforms:Di(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(v.colorSpace)!==re,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,S){M.getRGB(ir,Fl(i)),e.buffers.color.setClear(ir.r,ir.g,ir.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),o=S,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:m,addToRenderList:x,dispose:g}}function Cp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(R,D,I,A,F){let k=!1;const B=d(R,A,I,D);r!==B&&(r=B,c(r.object)),k=f(R,A,I,F),k&&m(R,A,I,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,v(R,D,I,A),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function u(R){return i.deleteVertexArray(R)}function d(R,D,I,A){const F=A.wireframe===!0;let k=n[D.id];k===void 0&&(k={},n[D.id]=k);const B=R.isInstancedMesh===!0?R.id:0;let J=k[B];J===void 0&&(J={},k[B]=J);let H=J[I.id];H===void 0&&(H={},J[I.id]=H);let Y=H[F];return Y===void 0&&(Y=h(l()),H[F]=Y),Y}function h(R){const D=[],I=[],A=[];for(let F=0;F<e;F++)D[F]=0,I[F]=0,A[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:A,object:R,attributes:{},index:null}}function f(R,D,I,A){const F=r.attributes,k=D.attributes;let B=0;const J=I.getAttributes();for(const H in J)if(J[H].location>=0){const tt=F[H];let gt=k[H];if(gt===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(gt=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(gt=R.instanceColor)),tt===void 0||tt.attribute!==gt||gt&&tt.data!==gt.data)return!0;B++}return r.attributesNum!==B||r.index!==A}function m(R,D,I,A){const F={},k=D.attributes;let B=0;const J=I.getAttributes();for(const H in J)if(J[H].location>=0){let tt=k[H];tt===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(tt=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(tt=R.instanceColor));const gt={};gt.attribute=tt,tt&&tt.data&&(gt.data=tt.data),F[H]=gt,B++}r.attributes=F,r.attributesNum=B,r.index=A}function x(){const R=r.newAttributes;for(let D=0,I=R.length;D<I;D++)R[D]=0}function p(R){g(R,0)}function g(R,D){const I=r.newAttributes,A=r.enabledAttributes,F=r.attributeDivisors;I[R]=1,A[R]===0&&(i.enableVertexAttribArray(R),A[R]=1),F[R]!==D&&(i.vertexAttribDivisor(R,D),F[R]=D)}function M(){const R=r.newAttributes,D=r.enabledAttributes;for(let I=0,A=D.length;I<A;I++)D[I]!==R[I]&&(i.disableVertexAttribArray(I),D[I]=0)}function S(R,D,I,A,F,k,B){B===!0?i.vertexAttribIPointer(R,D,I,F,k):i.vertexAttribPointer(R,D,I,A,F,k)}function v(R,D,I,A){x();const F=A.attributes,k=I.getAttributes(),B=D.defaultAttributeValues;for(const J in k){const H=k[J];if(H.location>=0){let Y=F[J];if(Y===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(Y=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(Y=R.instanceColor)),Y!==void 0){const tt=Y.normalized,gt=Y.itemSize,Pt=t.get(Y);if(Pt===void 0)continue;const K=Pt.buffer,nt=Pt.type,St=Pt.bytesPerElement,Et=nt===i.INT||nt===i.UNSIGNED_INT||Y.gpuType===Ir;if(Y.isInterleavedBufferAttribute){const lt=Y.data,Mt=lt.isInterleavedBuffer===!0?lt.stride:lt.itemSize,ee=Y.offset;if(lt.isInstancedInterleavedBuffer||lt.isInstancedBufferAttribute){for(let Ct=0;Ct<H.locationSize;Ct++)g(H.location+Ct,lt.meshPerAttribute);R.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ct=0;Ct<H.locationSize;Ct++)p(H.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Ct=0;Ct<H.locationSize;Ct++)S(H.location+Ct,gt/H.locationSize,nt,tt,Mt*St,(ee+gt/H.locationSize*Ct)*St,Et)}else{if(Y.isInstancedBufferAttribute){for(let lt=0;lt<H.locationSize;lt++)g(H.location+lt,Y.meshPerAttribute);R.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let lt=0;lt<H.locationSize;lt++)p(H.location+lt);i.bindBuffer(i.ARRAY_BUFFER,K);for(let lt=0;lt<H.locationSize;lt++)S(H.location+lt,gt/H.locationSize,nt,tt,gt*St,gt/H.locationSize*lt*St,Et)}}else if(B!==void 0){const tt=B[J];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(H.location,tt);break;case 3:i.vertexAttrib3fv(H.location,tt);break;case 4:i.vertexAttrib4fv(H.location,tt);break;default:i.vertexAttrib1fv(H.location,tt)}}}}M()}function b(){L();for(const R in n){const D=n[R];for(const I in D){const A=D[I];for(const F in A){const k=A[F];for(const B in k)u(k[B].object),delete k[B];delete A[F]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;const D=n[R.id];for(const I in D){const A=D[I];for(const F in A){const k=A[F];for(const B in k)u(k[B].object),delete k[B];delete A[F]}}delete n[R.id]}function _(R){for(const D in n){const I=n[D];for(const A in I){const F=I[A];if(F[R.id]===void 0)continue;const k=F[R.id];for(const B in k)u(k[B].object),delete k[B];delete F[R.id]}}}function y(R){for(const D in n){const I=n[D],A=R.isInstancedMesh===!0?R.id:0,F=I[A];if(F!==void 0){for(const k in F){const B=F[k];for(const J in B)u(B[J].object),delete B[J];delete F[k]}delete I[A],Object.keys(I).length===0&&delete n[D]}}}function L(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:M}}function Pp(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Lp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==xn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const y=_===_n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Qe&&_!==gn&&!y&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Ft("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ft("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:v,maxSamples:b,samples:T}}function Dp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Mn,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const m=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,g=i.get(d);if(!s||m===null||m.length===0||r&&!p)r?u(null):c();else{const M=r?0:n,S=M*4;let v=g.clippingState||null;l.value=v,v=u(m,h,S,f);for(let b=0;b!==S;++b)v[b]=e[b];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,m){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,m!==!0||p===null){const g=f+x*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let S=0,v=f;S!==x;++S,v+=4)a.copy(d[S]).applyMatrix4(M,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}class no extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new wl(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ci(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:di});r.uniforms.tEquirect.value=e;const a=new se(s,r),o=e.minFilter;return e.minFilter===An&&(e.minFilter=Ke),new to(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const jl=256,Ip=3,Np=20,tc=256,ec=16,Up=3,Fp=new z,Op=new It;class sr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new to(1,10,null),this._boxMesh=new se(new Ci(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Fp}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,h=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Op));const p=new to(n,s,u);return p.position.copy(o),p.update(l,t),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=f,l.autoClearStencil=m,t.background=x,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(jl,il(t))}_fromTexture(t,e){t.mapping===pi||t.mapping===Ki?this._setSize(t.image.length===0?jl:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=nc(t,!1,!1),n=Math.log2(t)-Ip;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=nc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===pi||t.mapping===Ki?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ic()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Bp(),this._integrationMaterial=zp());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/ec);for(let a=0;a<=n;a++){const o=sr.lodToRoughness(a,n);if(a>n-Up)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(tc*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=kp());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function nc(i,t,e){return new no(i,{minFilter:An,generateMipmaps:t,type:_n,colorSpace:Ps,depthBuffer:e})}function ps(i,t,e){return new $n({name:i,uniforms:t,vertexShader:Ht.cube_vert,fragmentShader:e,side:ke,blending:di,depthTest:!1,depthWrite:!1})}function Bp(){return ps("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${tc}u

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
	`)}function zp(){return ps("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ec}},`

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
	`)}function kp(){return ps("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Np}
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
	`)}function ic(){return ps("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function sc(){return ps("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Gp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Rr||f===Cr)if(t.has(h)){const m=t.get(h).texture;return o(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const x=new no(m.height);return x.fromEquirectangularTexture(i,h),t.set(h,x),h.addEventListener("dispose",c),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const f=h.mapping,m=f===Rr||f===Cr,x=f===pi||f===Ki;if(m||x){let p=e.get(h);const g=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new sr(i)),p=m?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{const M=h.image;return m&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new sr(i)),p=m?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===Rr?h.mapping=pi:f===Cr&&(h.mapping=Ki),h}function l(h){let f=0;const m=6;for(let x=0;x<m;x++)h[x]!==void 0&&f++;return f===m}function c(h){const f=h.target;f.removeEventListener("dispose",c);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Hp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ds("WebGLRenderer: "+n+" extension not supported."),s}}}function Vp(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(const p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);const x=r.get(m);x&&(t.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function u(m){const x=m.attributes;for(const p in x)t.update(x[p],i.ARRAY_BUFFER)}function d(m){const x=m.index,p=m.attributes.position;let g=0;if(p===void 0)return;const M=x!==null?x.array.length:p.array.length/3-1,S=p.count>=65535?Ml:vl,v=new S(Math.ceil(M/3)*6,1),b=v.array;if(x!==null){const _=x.array;g=x.version;for(let y=0,L=0;y<M;y+=3){const P=_[y+0],R=_[y+1],D=_[y+2];b[L++]=P,b[L++]=R,b[L++]=R,b[L++]=D,b[L++]=D,b[L++]=P}}else{g=p.version;for(let _=0,y=0;_<M;_+=3){const L=_+0,P=_+1,R=_+2;b[y++]=L,b[y++]=P,b[y++]=P,b[y++]=R,b[y++]=R,b[y++]=L}}v.version=g;const T=r.get(m);T&&t.remove(T),r.set(m,v)}function h(m){const x=r.get(m);if(x){const p=m.index;p!==null&&x.version<p.version&&d(m)}else d(m);return r.get(m)}function f(){for(const m in s){const x=s[m].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function Wp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=h[p];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Xp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qp(i,t,e){const n=new WeakMap,s=new de;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let L=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",L)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;f===!0&&(S=1),m===!0&&(S=2),x===!0&&(S=3);let v=o.attributes.position.count*S,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const T=new Float32Array(v*b*4*d),_=new cl(T,v,b,d);_.type=gn,_.needsUpdate=!0;const y=S*4;for(let P=0;P<d;P++){const R=p[P],D=g[P],I=M[P],A=v*b*4*P;for(let F=0;F<R.count;F++){const k=F*y;f===!0&&(s.fromBufferAttribute(R,F),T[A+k+0]=s.x,T[A+k+1]=s.y,T[A+k+2]=s.z,T[A+k+3]=0),m===!0&&(s.fromBufferAttribute(D,F),T[A+k+4]=s.x,T[A+k+5]=s.y,T[A+k+6]=s.z,T[A+k+7]=0),x===!0&&(s.fromBufferAttribute(I,F),T[A+k+8]=s.x,T[A+k+9]=s.y,T[A+k+10]=s.z,T[A+k+11]=I.itemSize===4?s.w:1)}}h={count:d,texture:_,size:new Dt(v,b)},n.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Yp(i,t,e,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const Kp={[No]:"LINEAR_TONE_MAPPING",[Uo]:"REINHARD_TONE_MAPPING",[Fo]:"CINEON_TONE_MAPPING",[Oo]:"ACES_FILMIC_TONE_MAPPING",[zo]:"AGX_TONE_MAPPING",[Ar]:"NEUTRAL_TONE_MAPPING",[Bo]:"CUSTOM_TONE_MAPPING"};function Zp(i,t,e,n,s,r){const a=new vn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new Me;u.setAttribute("position",new Re([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Re([0,2,0,0,2,0],2));const d=new fd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new se(u,d),f=new Wl(-1,1,1,-1,0,1);let m=null,x=null,p=!1,g,M=null,S=[],v=!1;this.setSize=function(b,T){a.setSize(b,T),o!==null&&o.setSize(b,T),l!==null&&l.setSize(b,T);for(let _=0;_<S.length;_++){const y=S[_];y.setSize&&y.setSize(b,T)}},this.setEffects=function(b){S=b,v=S.length>0&&S[0].isRenderPass===!0;const T=a.width,_=a.height;S.length>0&&o===null&&(o=new vn(T,_,{type:_n,depthBuffer:!1,stencilBuffer:!1}),l=new vn(T,_,{type:_n,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&S.some(L=>L.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new Ri(T,_),r===!0&&(c.format=Hn,c.type=mi)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let L=0;L<S.length;L++){const P=S[L];P.setSize&&P.setSize(T,_),y&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(b,T){if(p||b.toneMapping===wn&&S.length===0)return!1;if(M=T,T!==null){const _=T.width,y=T.height;(a.width!==_||a.height!==y)&&this.setSize(_,y)}return v===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=wn,!0},this.hasRenderPass=function(){return v},this.end=function(b,T){b.toneMapping=g,p=!0;let _=a,y=o;for(let L=0;L<S.length;L++){const P=S[L];P.enabled!==!1&&(P.render(b,y,_,T),P.needsSwap!==!1&&(_=y,y=y===o?l:o))}if(m!==b.outputColorSpace||x!==b.toneMapping){m=b.outputColorSpace,x=b.toneMapping,d.defines={},Zt.getTransfer(m)===re&&(d.defines.SRGB_TRANSFER="");const L=Kp[x];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(M),b.render(h,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}const rc=new Ae,ac=new Ri(1,1),oc=new Tl(1),lc=new cl,cc=new Au,hc=new wl,uc=[],dc=[],fc=new Float32Array(16),pc=new Float32Array(9),mc=new Float32Array(4);function Fi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=uc[s];if(r===void 0&&(r=new Float32Array(s),uc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function rr(i,t){let e=dc[t];e===void 0&&(e=new Int32Array(t),dc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $p(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function Qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function tm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;mc.set(n),i.uniformMatrix2fv(this.addr,!1,mc),ye(e,n)}}function em(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;pc.set(n),i.uniformMatrix3fv(this.addr,!1,pc),ye(e,n)}}function nm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;fc.set(n),i.uniformMatrix4fv(this.addr,!1,fc),ye(e,n)}}function im(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function om(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function ar(i){return i.version===0&&(i.compareFunction=Jo,i.needsUpdate=!0),i}function um(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ar(ac):r=rc,e.setTexture2D(t||r,s)}function dm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cc,s)}function fm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ar(oc):r=hc,e.setTextureCube(t||r,s)}function pm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||lc,s)}function mm(i){switch(i){case 5126:return $p;case 35664:return Jp;case 35665:return Qp;case 35666:return jp;case 35674:return tm;case 35675:return em;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return sm;case 35668:case 35672:return rm;case 35669:case 35673:return am;case 5125:return om;case 36294:return lm;case 36295:return cm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}function gm(i,t){i.uniform1fv(this.addr,t)}function _m(i,t){const e=Fi(t,this.size,2);i.uniform2fv(this.addr,e)}function xm(i,t){const e=Fi(t,this.size,3);i.uniform3fv(this.addr,e)}function vm(i,t){const e=Fi(t,this.size,4);i.uniform4fv(this.addr,e)}function Mm(i,t){const e=Fi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sm(i,t){const e=Fi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ym(i,t){const e=Fi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Em(i,t){i.uniform1iv(this.addr,t)}function bm(i,t){i.uniform2iv(this.addr,t)}function wm(i,t){i.uniform3iv(this.addr,t)}function Tm(i,t){i.uniform4iv(this.addr,t)}function Am(i,t){i.uniform1uiv(this.addr,t)}function Rm(i,t){i.uniform2uiv(this.addr,t)}function Cm(i,t){i.uniform3uiv(this.addr,t)}function Pm(i,t){i.uniform4uiv(this.addr,t)}function Lm(i,t,e){const n=this.cache,s=t.length,r=rr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ar(ac):a=rc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Dm(i,t,e){const n=this.cache,s=t.length,r=rr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||cc,r[a])}function Im(i,t,e){const n=this.cache,s=t.length,r=rr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=ar(oc):a=hc;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Nm(i,t,e){const n=this.cache,s=t.length,r=rr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||lc,r[a])}function Um(i){switch(i){case 5126:return gm;case 35664:return _m;case 35665:return xm;case 35666:return vm;case 35674:return Mm;case 35675:return Sm;case 35676:return ym;case 5124:case 35670:return Em;case 35667:case 35671:return bm;case 35668:case 35672:return wm;case 35669:case 35673:return Tm;case 5125:return Am;case 36294:return Rm;case 36295:return Cm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Im;case 36289:case 36303:case 36311:case 36292:return Nm}}class Fm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mm(e.type)}}class Om{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Um(e.type)}}class Bm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const io=/(\w+)(\])?(\[|\.)?/g;function gc(i,t){i.seq.push(t),i.map[t.id]=t}function zm(i,t,e){const n=i.name,s=n.length;for(io.lastIndex=0;;){const r=io.exec(n),a=io.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){gc(e,c===void 0?new Fm(o,i,t):new Om(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Bm(o),gc(e,d)),e=d}}}class or{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);zm(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function _c(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const km=37297;let Gm=0;function Hm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const xc=new Ot;function Vm(i){Zt._getMatrix(xc,Zt.workingColorSpace,i);const t=`mat3( ${xc.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case Ls:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function vc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Hm(i.getShaderSource(t),o)}else return r}function Wm(i,t){const e=Vm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Xm={[No]:"Linear",[Uo]:"Reinhard",[Fo]:"Cineon",[Oo]:"ACESFilmic",[zo]:"AgX",[Ar]:"Neutral",[Bo]:"Custom"};function qm(i,t){const e=Xm[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const lr=new z;function Ym(){Zt.getLuminanceCoefficients(lr);const i=lr.x.toFixed(4),t=lr.y.toFixed(4),e=lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Km(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function Zm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $m(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ms(i){return i!==""}function Mc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Sc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function so(i){return i.replace(Jm,Qm)}function Qm(i,t){const e=Ht[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return so(e)}const jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yc(i){return i.replace(jm,t0)}function t0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ec(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const e0={[Wi]:"SHADOWMAP_TYPE_PCF",[Xi]:"SHADOWMAP_TYPE_VSM"};function n0(i){return e0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const i0={[Ki]:"ENVMAP_MODE_REFRACTION"};function s0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":i0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const r0={[Io]:"ENVMAP_BLENDING_MULTIPLY",[Xh]:"ENVMAP_BLENDING_MIX",[qh]:"ENVMAP_BLENDING_ADD"};function a0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":r0[i.combine]||"ENVMAP_BLENDING_NONE"}function o0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=n0(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=s0(e),d=a0(e),h=Km(e),f=Zm(r),m=s.createProgram();let x,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ms).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ms).join(`
`),p.length>0&&(p+=`
`)):(x=[Ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),p=[Ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==wn?qm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Wm("linearToOutputTexel",e.outputColorSpace),Ym(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ms).join(`
`)),a=so(a),a=Mc(a,e),a=Sc(a,e),o=so(o),o=Mc(o,e),o=Sc(o,e),a=yc(a),o=yc(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===Qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=g+x+a,S=g+p+o,v=_c(s,s.VERTEX_SHADER,M),b=_c(s,s.FRAGMENT_SHADER,S);s.attachShader(m,v),s.attachShader(m,b),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function T(P){if(i.debug.checkShaderErrors){const R=s.getProgramInfoLog(m)||"",D=s.getShaderInfoLog(v)||"",I=s.getShaderInfoLog(b)||"",A=R.trim(),F=D.trim(),k=I.trim();let B=!0,J=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,v,b);else{const H=vc(s,v,"vertex"),Y=vc(s,b,"fragment");jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+A+`
`+H+`
`+Y)}else A!==""?Ft("WebGLProgram: Program Info Log:",A):(F===""||k==="")&&(J=!1);J&&(P.diagnostics={runnable:B,programLog:A,vertexShader:{log:F,prefix:x},fragmentShader:{log:k,prefix:p}})}s.deleteShader(v),s.deleteShader(b),_=new or(s,m),y=$m(s,m)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(m,km)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gm++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=b,this}let l0=0;class c0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new h0(t),e.set(t,n)),n}}class h0{constructor(t){this.id=l0++,this.code=t,this.usedTimes=0}}function u0(i){return i===ii||i===Rs||i===Cs}function d0(i,t,e,n,s,r){const a=new ba,o=new c0,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,y,L,P,R,D){const I=P.fog,A=R.geometry,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=t.get(_.envMap||F,k),J=h[_.type];let H=n.precision;_.precision!==null&&(H=n.getMaxPrecision(_.precision),H!==_.precision&&Ft("WebGLProgram.getParameters:",_.precision,"not supported, using",H,"instead."));const Y=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,tt=Y!==void 0?Y.length:0;let gt=0;A.morphAttributes.position!==void 0&&(gt=1),A.morphAttributes.normal!==void 0&&(gt=2),A.morphAttributes.color!==void 0&&(gt=3);let Pt,K,nt,St;if(J){const vt=En[J];Pt=vt.vertexShader,K=vt.fragmentShader}else{Pt=_.vertexShader,K=_.fragmentShader;const vt=o.getVertexShaderStage(_),ae=o.getFragmentShaderStage(_);o.update(_,vt,ae),nt=vt.id,St=ae.id}const Et=i.getRenderTarget(),lt=i.state.buffers.depth.getReversed(),Mt=R.isInstancedMesh===!0,ee=R.isBatchedMesh===!0,Ct=!!_.map,$t=!!_.matcap,qt=!!B,ot=qt&&B.isPMREMTexture===!0,Nt=!!_.aoMap,kt=!!_.lightMap,ue=!!_.bumpMap&&_.wireframe===!1,oe=!!_.normalMap,$e=!!_.displacementMap,ge=!!_.emissiveMap,be=!!_.metalnessMap,Je=!!_.roughnessMap,We=_.anisotropy>0,O=_.clearcoat>0,Xe=_.diffuseRoughness>0,le=_.dispersion>0,pe=_.retroreflectivity>0,_t=_.iridescence>0,we=_.sheen>0,Ut=_.transmission>0,Bt=We&&!!_.anisotropyMap,C=O&&!!_.clearcoatMap,E=O&&!!_.clearcoatNormalMap,W=O&&!!_.clearcoatRoughnessMap,it=Xe&&!!_.diffuseRoughnessMap,et=_t&&!!_.iridescenceMap,ct=_t&&!!_.iridescenceThicknessMap,pt=we&&!!_.sheenColorMap,$=we&&!!_.sheenRoughnessMap,Q=!!_.specularMap,ut=!!_.specularColorMap,N=!!_.specularIntensityMap,j=Ut&&!!_.transmissionMap,Z=Ut&&!!_.thicknessMap,dt=!!_.gradientMap,at=!!_.alphaMap,ht=_.alphaTest>0,Rt=!!_.alphaHash,Vt=!!_.extensions;let rt=wn;_.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(rt=i.toneMapping);const Lt=ot?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,Gt={shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:Pt,fragmentShader:K,defines:_.defines,customVertexShaderID:nt,customFragmentShaderID:St,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:H,batching:ee,batchingColor:ee&&R._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&R.instanceColor!==null,instancingMorph:Mt&&R.morphTexture!==null,outputColorSpace:Et===null?i.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ct,matcap:$t,envMap:qt,envMapMode:qt&&B.mapping,envMapPMREM:ot,envMapMaxLod:ot?Lt.length-1:null,envMapSize:ot?Lt[0].width:null,aoMap:Nt,lightMap:kt,bumpMap:ue,normalMap:oe,displacementMap:$e,emissiveMap:ge,normalMapObjectSpace:oe&&_.normalMapType===Zh,normalMapTangentSpace:oe&&_.normalMapType===ma,packedNormalMap:oe&&_.normalMapType===ma&&u0(_.normalMap.format),metalnessMap:be,roughnessMap:Je,anisotropy:We,anisotropyMap:Bt,clearcoat:O,clearcoatMap:C,clearcoatNormalMap:E,clearcoatRoughnessMap:W,diffuseRoughness:Xe,diffuseRoughnessMap:it,dispersion:le,retroreflection:pe,iridescence:_t,iridescenceMap:et,iridescenceThicknessMap:ct,sheen:we,sheenColorMap:pt,sheenRoughnessMap:$,specularMap:Q,specularColorMap:ut,specularIntensityMap:N,transmission:Ut,transmissionMap:j,thicknessMap:Z,gradientMap:dt,opaque:_.transparent===!1&&_.blending===qi&&_.alphaToCoverage===!1,alphaMap:at,alphaTest:ht,alphaHash:Rt,combine:_.combine,mapUv:Ct&&f(_.map.channel),aoMapUv:Nt&&f(_.aoMap.channel),lightMapUv:kt&&f(_.lightMap.channel),bumpMapUv:ue&&f(_.bumpMap.channel),normalMapUv:oe&&f(_.normalMap.channel),displacementMapUv:$e&&f(_.displacementMap.channel),emissiveMapUv:ge&&f(_.emissiveMap.channel),metalnessMapUv:be&&f(_.metalnessMap.channel),roughnessMapUv:Je&&f(_.roughnessMap.channel),anisotropyMapUv:Bt&&f(_.anisotropyMap.channel),clearcoatMapUv:C&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:et&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&f(_.sheenRoughnessMap.channel),specularMapUv:Q&&f(_.specularMap.channel),specularColorMapUv:ut&&f(_.specularColorMap.channel),specularIntensityMapUv:N&&f(_.specularIntensityMap.channel),transmissionMapUv:j&&f(_.transmissionMap.channel),thicknessMapUv:Z&&f(_.thicknessMap.channel),alphaMapUv:at&&f(_.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(oe||We),vertexNormals:!!A.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!A.attributes.uv&&(Ct||at),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||A.attributes.normal===void 0&&oe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:lt,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:gt,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:D.filter(vt=>vt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:Ct&&_.map.isVideoTexture===!0&&Zt.getTransfer(_.map.colorSpace)===re,decodeVideoTextureEmissive:ge&&_.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(_.emissiveMap.colorSpace)===re,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ge,flipSided:_.side===ke,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Vt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&_.extensions.multiDraw===!0||ee)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function x(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)y.push(L),y.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(p(y,_),g(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function p(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapPMREM),_.push(y.envMapMaxLod),_.push(y.envMapSize),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.diffuseRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.numSunLights),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numSunLightShadows),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.numLightProbeGrids),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function g(_,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){const y=h[_.type];let L;if(y){const P=En[y];L=hd.clone(P.uniforms)}else L=_.uniforms;return L}function S(_,y){let L=u.get(y);return L!==void 0?++L.usedTimes:(L=new o0(i,y,_,s),c.push(L),u.set(y,L)),L}function v(_){if(--_.usedTimes===0){const y=c.indexOf(_);c[y]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function T(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:M,acquireProgram:S,releaseProgram:v,releaseShaderCache:b,programs:c,dispose:T}}function f0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function p0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function bc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,m,x,p,g){let M=i[t];return M===void 0?(M={id:h.id,object:h,geometry:f,material:m,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:p,group:g},i[t]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=m,M.materialVariant=a(h),M.groupOrder=x,M.renderOrder=h.renderOrder,M.z=p,M.group=g),t++,M}function l(h,f,m,x,p,g,M){M.reversedDepth===!0&&(p=-p);const S=o(h,f,m,x,p,g);m.transmission>0?n.push(S):m.transparent===!0?s.push(S):e.push(S)}function c(h,f,m,x,p,g){const M=o(h,f,m,x,p,g);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):e.unshift(M)}function u(h,f){e.length>1&&e.sort(h||p0),n.length>1&&n.sort(f||bc),s.length>1&&s.sort(f||bc)}function d(){for(let h=t,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function m0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new wc,i.set(n,[a])):s>=r.length?(a=new wc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function g0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new It};break;case"SpotLight":e={position:new z,direction:new z,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function _0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let x0=0;function v0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function M0(i){const t=new g0,e=_0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const s=new z,r=new fe,a=new fe;function o(c){let u=0,d=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,m=0,x=0,p=0,g=0,M=0,S=0,v=0,b=0,T=0,_=0,y=0,L=0,P=0;c.sort(v0);for(let D=0,I=c.length;D<I;D++){const A=c[D],F=A.color,k=A.intensity,B=A.distance;let J=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===ii?J=A.shadow.map.texture:J=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)u+=F.r*k,d+=F.g*k,h+=F.b*k;else if(A.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(A.sh.coefficients[H],k);P++}else if(A.isSunLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Y=A.shadow,tt=e.get(A);tt.shadowIntensity=Y.intensity,tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[m]=tt,n.sunShadowMap[m]=J;const gt=Y.getViewportCount();for(let Pt=0;Pt<gt;Pt++)n.sunShadowMatrix[x+Pt]=Y.getMatrix(Pt),n.sunShadowCascade[x+Pt]=Y._cascadeData[Pt];x+=gt,m++}n.sun[f]=H,f++}else if(A.isDirectionalLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Y=A.shadow,tt=e.get(A);tt.shadowIntensity=Y.intensity,tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,n.directionalShadow[p]=tt,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=A.shadow.matrix,b++}n.directional[p]=H,p++}else if(A.isSpotLight){const H=t.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(F).multiplyScalar(k),H.distance=B,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,n.spot[M]=H;const Y=A.shadow;if(A.map&&(n.spotLightMap[y]=A.map,y++,Y.updateMatrices(A),A.castShadow&&L++),n.spotLightMatrix[M]=Y.matrix,A.castShadow){const tt=e.get(A);tt.shadowIntensity=Y.intensity,tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,n.spotShadow[M]=tt,n.spotShadowMap[M]=J,_++}M++}else if(A.isRectAreaLight){const H=t.get(A);H.color.copy(F).multiplyScalar(k),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),n.rectArea[S]=H,S++}else if(A.isPointLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){const Y=A.shadow,tt=e.get(A);tt.shadowIntensity=Y.intensity,tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,tt.shadowCameraNear=Y.camera.near,tt.shadowCameraFar=Y.camera.far,n.pointShadow[g]=tt,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=A.shadow.matrix,T++}n.point[g]=H,g++}else if(A.isHemisphereLight){const H=t.get(A);H.skyColor.copy(A.color).multiplyScalar(k),H.groundColor.copy(A.groundColor).multiplyScalar(k),n.hemi[v]=H,v++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const R=n.hash;(R.sunLength!==f||R.directionalLength!==p||R.pointLength!==g||R.spotLength!==M||R.rectAreaLength!==S||R.hemiLength!==v||R.numSunShadows!==m||R.numDirectionalShadows!==b||R.numPointShadows!==T||R.numSpotShadows!==_||R.numSpotMaps!==y||R.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=S,n.point.length=g,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+y-L,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=P,R.sunLength=f,R.directionalLength=p,R.pointLength=g,R.spotLength=M,R.rectAreaLength=S,R.hemiLength=v,R.numSunShadows=m,R.numDirectionalShadows=b,R.numPointShadows=T,R.numSpotShadows=_,R.numSpotMaps=y,R.numLightProbes=P,n.version=x0++)}function l(c,u){let d=0,h=0,f=0,m=0,x=0,p=0;const g=u.matrixWorldInverse;for(let M=0,S=c.length;M<S;M++){const v=c[M];if(v.isSunLight){const b=n.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),d++}else if(v.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),h++}else if(v.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),m++}else if(v.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const b=n.hemi[p];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function Tc(i){const t=new M0(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){n.push(d)}function l(){t.setup(e),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){t.setupView(e,d)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function S0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Tc(i),t.set(s,[o])):r>=a.length?(o=new Tc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E0=`uniform sampler2D shadow_pass;
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
}`,b0=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],w0=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Ac=new fe,gs=new z,ro=new z;function T0(i,t,e){let n=new cs;const s=new Dt,r=new Dt,a=new de,o=new $a,l=new pd,c={},u=e.maxTextureSize,d={[ni]:ke,[ke]:ni,[Ge]:Ge},h=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:y0,fragmentShader:E0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const m=new Me;m.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new se(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wi;let g=this.type;this.render=function(T,_,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Th&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wi);const L=i.getRenderTarget(),P=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),D=i.state;D.setBlending(di),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=g!==this.type;I&&_.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(F=>F.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,F=T.length;A<F;A++){const k=T[A],B=k.shadow;if(B===void 0){Ft("WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const J=B.getFrameExtents();s.multiply(J),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,B.mapSize.y=r.y));const H=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=H,B.map===null||I===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Xi){if(k.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new vn(s.x,s.y,{format:ii,type:_n,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),B.map.texture.name=k.name+".shadowMap",B.map.depthTexture=new Ri(s.x,s.y,gn),B.map.depthTexture.name=k.name+".shadowMapDepth",B.map.depthTexture.format=Gn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=De,B.map.depthTexture.magFilter=De}else k.isPointLight?(B.map=new no(s.x),B.map.depthTexture=new Tl(s.x,mn)):(B.map=new vn(s.x,s.y),B.map.depthTexture=new Ri(s.x,s.y,mn)),B.map.depthTexture.name=k.name+".shadowMap",B.map.depthTexture.format=Gn,this.type===Wi?(B.map.depthTexture.compareFunction=H?$o:Zo,B.map.depthTexture.minFilter=Ke,B.map.depthTexture.magFilter=Ke):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=De,B.map.depthTexture.magFilter=De);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);const Y=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();k.isPointLight!==!0&&B.updateMatrices(k,y);const tt=B.camera.layers.mask&4294967294?B.camera.layers:y.layers;for(let gt=0;gt<Y;gt++){const Pt=B.getCamera(gt);if(k.isPointLight){const K=B.camera,nt=B.matrix,St=k.distance||K.far;St!==K.far&&(K.far=St,K.updateProjectionMatrix()),gs.setFromMatrixPosition(k.matrixWorld),K.position.copy(gs),ro.copy(K.position),ro.add(b0[gt]),K.up.copy(w0[gt]),K.lookAt(ro),K.updateMatrixWorld(),nt.makeTranslation(-gs.x,-gs.y,-gs.z),Ac.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Ac,K.coordinateSystem,K.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,gt),i.clear();else{gt===0&&(i.setRenderTarget(B.map),i.clear());const K=B.getViewport(gt);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),D.viewport(a)}n=B.getFrustum(gt),v(_,y,Pt,k,tt,this.type)}B.isPointLightShadow!==!0&&this.type===Xi&&M(B,y),B.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(L,P,R)};function M(T,_){const y=t.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new vn(s.x,s.y,{format:ii,type:_n}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,y,h,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,y,f,x,null)}function S(T,_,y,L){let P=null;const R=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)P=R;else if(P=y.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const D=P.uuid,I=_.uuid;let A=c[D];A===void 0&&(A={},c[D]=A);let F=A[I];F===void 0&&(F=P.clone(),A[I]=F,_.addEventListener("dispose",b)),P=F}if(P.visible=_.visible,P.wireframe=_.wireframe,L===Xi?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:d[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const D=i.properties.get(P);D.light=y}return P}function v(T,_,y,L,P,R){if(T.visible===!1)return;if(T.layers.test(P)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===Xi)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const A=t.update(T),F=T.material;if(Array.isArray(F)){const k=A.groups;for(let B=0,J=k.length;B<J;B++){const H=k[B],Y=F[H.materialIndex];if(Y&&Y.visible){const tt=S(T,Y,L,R);T.onBeforeShadow(i,T,_,y,A,tt,H),i.renderBufferDirect(y,null,A,tt,T,H),T.onAfterShadow(i,T,_,y,A,tt,H)}}}else if(F.visible){const k=S(T,F,L,R);T.onBeforeShadow(i,T,_,y,A,k,null),i.renderBufferDirect(y,null,A,k,T,null),T.onAfterShadow(i,T,_,y,A,k,null)}}const I=T.children;for(let A=0,F=I.length;A<F;A++)v(I[A],_,y,L,P,R)}function b(T){T.target.removeEventListener("dispose",b);for(const y in c){const L=c[y],P=T.target.uuid;P in L&&(L[P].dispose(),delete L[P])}}}function A0(i,t){function e(){let N=!1;const j=new de;let Z=null;const dt=new de(0,0,0,0);return{setMask:function(at){Z!==at&&!N&&(i.colorMask(at,at,at,at),Z=at)},setLocked:function(at){N=at},setClear:function(at,ht,Rt,Vt,rt){rt===!0&&(at*=Vt,ht*=Vt,Rt*=Vt),j.set(at,ht,Rt,Vt),dt.equals(j)===!1&&(i.clearColor(at,ht,Rt,Vt),dt.copy(j))},reset:function(){N=!1,Z=null,dt.set(-1,0,0,0)}}}function n(){let N=!1,j=!1,Z=null,dt=null,at=null;return{setReversed:function(ht){if(j!==ht){const Rt=t.get("EXT_clip_control");ht?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),j=ht;const Vt=at;at=null,this.setClear(Vt)}},getReversed:function(){return j},setTest:function(ht){ht?lt(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(ht){Z!==ht&&!N&&(i.depthMask(ht),Z=ht)},setFunc:function(ht){if(j&&(ht=au[ht]),dt!==ht){switch(ht){case Mr:i.depthFunc(i.NEVER);break;case Sr:i.depthFunc(i.ALWAYS);break;case yr:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case Er:i.depthFunc(i.EQUAL);break;case br:i.depthFunc(i.GEQUAL);break;case wr:i.depthFunc(i.GREATER);break;case Tr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=ht}},setLocked:function(ht){N=ht},setClear:function(ht){at!==ht&&(at=ht,j&&(ht=1-ht),i.clearDepth(ht))},reset:function(){N=!1,Z=null,dt=null,at=null,j=!1}}}function s(){let N=!1,j=null,Z=null,dt=null,at=null,ht=null,Rt=null,Vt=null,rt=null;return{setTest:function(Lt){N||(Lt?lt(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(Lt){j!==Lt&&!N&&(i.stencilMask(Lt),j=Lt)},setFunc:function(Lt,Gt,vt){(Z!==Lt||dt!==Gt||at!==vt)&&(i.stencilFunc(Lt,Gt,vt),Z=Lt,dt=Gt,at=vt)},setOp:function(Lt,Gt,vt){(ht!==Lt||Rt!==Gt||Vt!==vt)&&(i.stencilOp(Lt,Gt,vt),ht=Lt,Rt=Gt,Vt=vt)},setLocked:function(Lt){N=Lt},setClear:function(Lt){rt!==Lt&&(i.clearStencil(Lt),rt=Lt)},reset:function(){N=!1,j=null,Z=null,dt=null,at=null,ht=null,Rt=null,Vt=null,rt=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let u={},d={},h={},f=new WeakMap,m=[],x=null,p=!1,g=null,M=null,S=null,v=null,b=null,T=null,_=null,y=new It(0,0,0),L=0,P=!1,R=null,D=null,I=null,A=null,F=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,J=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=J>=2);let Y=null,tt={};const gt=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),K=new de().fromArray(gt),nt=new de().fromArray(Pt);function St(N,j,Z,dt){const at=new Uint8Array(4),ht=i.createTexture();i.bindTexture(N,ht),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<Z;Rt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(j+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return ht}const Et={};Et[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(Yi),ue(!1),oe(Ao),lt(i.CULL_FACE),Nt(di);function lt(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function Mt(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function ee(N,j){return h[N]!==j?(i.bindFramebuffer(N,j),h[N]=j,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=j),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=j),!0):!1}function Ct(N,j){let Z=m,dt=!1;if(N){Z=f.get(j),Z===void 0&&(Z=[],f.set(j,Z));const at=N.textures;if(Z.length!==at.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Rt=at.length;ht<Rt;ht++)Z[ht]=i.COLOR_ATTACHMENT0+ht;Z.length=at.length,dt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,dt=!0);dt&&i.drawBuffers(Z)}function $t(N){return x!==N?(i.useProgram(N),x=N,!0):!1}const qt={[fi]:i.FUNC_ADD,[Rh]:i.FUNC_SUBTRACT,[Ch]:i.FUNC_REVERSE_SUBTRACT};qt[Ph]=i.MIN,qt[Lh]=i.MAX;const ot={[Dh]:i.ZERO,[Ih]:i.ONE,[Nh]:i.SRC_COLOR,[Lo]:i.SRC_ALPHA,[kh]:i.SRC_ALPHA_SATURATE,[Bh]:i.DST_COLOR,[Fh]:i.DST_ALPHA,[Uh]:i.ONE_MINUS_SRC_COLOR,[Do]:i.ONE_MINUS_SRC_ALPHA,[zh]:i.ONE_MINUS_DST_COLOR,[Oh]:i.ONE_MINUS_DST_ALPHA,[Gh]:i.CONSTANT_COLOR,[Hh]:i.ONE_MINUS_CONSTANT_COLOR,[Vh]:i.CONSTANT_ALPHA,[Wh]:i.ONE_MINUS_CONSTANT_ALPHA};function Nt(N,j,Z,dt,at,ht,Rt,Vt,rt,Lt){if(N===di){p===!0&&(Mt(i.BLEND),p=!1);return}if(p===!1&&(lt(i.BLEND),p=!0),N!==Ah){if(N!==g||Lt!==P){if((M!==fi||b!==fi)&&(i.blendEquation(i.FUNC_ADD),M=fi,b=fi),Lt)switch(N){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ro:i.blendFunc(i.ONE,i.ONE);break;case Co:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Po:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:jt("WebGLState: Invalid blending: ",N);break}else switch(N){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ro:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Co:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Po:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",N);break}S=null,v=null,T=null,_=null,y.set(0,0,0),L=0,g=N,P=Lt}return}at=at||j,ht=ht||Z,Rt=Rt||dt,(j!==M||at!==b)&&(i.blendEquationSeparate(qt[j],qt[at]),M=j,b=at),(Z!==S||dt!==v||ht!==T||Rt!==_)&&(i.blendFuncSeparate(ot[Z],ot[dt],ot[ht],ot[Rt]),S=Z,v=dt,T=ht,_=Rt),(Vt.equals(y)===!1||rt!==L)&&(i.blendColor(Vt.r,Vt.g,Vt.b,rt),y.copy(Vt),L=rt),g=N,P=!1}function kt(N,j){N.side===Ge?Mt(i.CULL_FACE):lt(i.CULL_FACE);let Z=N.side===ke;j&&(Z=!Z),ue(Z),N.blending===qi&&N.transparent===!1?Nt(di):Nt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const dt=N.stencilWrite;o.setTest(dt),dt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ge(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(N){R!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),R=N)}function oe(N){N!==bh?(lt(i.CULL_FACE),N!==D&&(N===Ao?i.cullFace(i.BACK):N===wh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),D=N}function $e(N){N!==I&&(B&&i.lineWidth(N),I=N)}function ge(N,j,Z){N?(lt(i.POLYGON_OFFSET_FILL),(A!==j||F!==Z)&&(A=j,F=Z,a.getReversed()&&(j=-j,Z=-Z),i.polygonOffset(j,Z))):Mt(i.POLYGON_OFFSET_FILL)}function be(N){N?lt(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function Je(N){N===void 0&&(N=i.TEXTURE0+k-1),Y!==N&&(i.activeTexture(N),Y=N)}function We(N,j,Z){Z===void 0&&(Y===null?Z=i.TEXTURE0+k-1:Z=Y);let dt=tt[Z];dt===void 0&&(dt={type:void 0,texture:void 0},tt[Z]=dt),(dt.type!==N||dt.texture!==j)&&(Y!==Z&&(i.activeTexture(Z),Y=Z),i.bindTexture(N,j||Et[N]),dt.type=N,dt.texture=j)}function O(){const N=tt[Y];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Xe(){try{i.compressedTexImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function le(){try{i.compressedTexImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function pe(){try{i.texSubImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function _t(){try{i.texSubImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function we(){try{i.compressedTexSubImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function Ut(){try{i.compressedTexSubImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function Bt(){try{i.texStorage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function C(){try{i.texStorage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function E(){try{i.texImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function W(){try{i.texImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function it(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function et(N,j){d[N]!==j&&(i.pixelStorei(N,j),d[N]=j)}function ct(N){K.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),K.copy(N))}function pt(N){nt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),nt.copy(N))}function $(N,j){let Z=c.get(j);Z===void 0&&(Z=new WeakMap,c.set(j,Z));let dt=Z.get(N);dt===void 0&&(dt=i.getUniformBlockIndex(j,N.name),i.uniformBlockBinding(j,dt,dt),Z.set(N,dt))}function Q(N,j,Z){const at=c.get(j).get(N);l[at]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,at,Z),l[at]=Z)}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},Y=null,tt={},h={},l={},f=new WeakMap,m=[],x=null,p=!1,g=null,M=null,S=null,v=null,b=null,T=null,_=null,y=new It(0,0,0),L=0,P=!1,R=null,D=null,I=null,A=null,F=null,K.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Mt,bindFramebuffer:ee,drawBuffers:Ct,useProgram:$t,setBlending:Nt,setMaterial:kt,setFlipSided:ue,setCullFace:oe,setLineWidth:$e,setPolygonOffset:ge,setScissorTest:be,activeTexture:Je,bindTexture:We,unbindTexture:O,compressedTexImage2D:Xe,compressedTexImage3D:le,texImage2D:E,texImage3D:W,pixelStorei:et,getParameter:it,updateUBOMapping:$,uniformBlockBinding:Q,texStorage2D:Bt,texStorage3D:C,texSubImage2D:pe,texSubImage3D:_t,compressedTexSubImage2D:we,compressedTexSubImage3D:Ut,scissor:ct,viewport:pt,reset:ut}}function R0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,u=new WeakMap,d=new Set;let h;const f=new WeakMap,m=new Set,x=new FinalizationRegistry(C=>m.delete(C));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return p?new OffscreenCanvas(C,E):Ji("canvas")}function M(C,E,W){let it=1;const et=Bt(C);if((et.width>W||et.height>W)&&(it=W/Math.max(et.width,et.height)),it<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ct=Math.floor(it*et.width),pt=Math.floor(it*et.height);h===void 0&&(h=g(ct,pt));const $=E?g(ct,pt):h;return $.width=ct,$.height=pt,$.getContext("2d").drawImage(C,0,0,ct,pt),Ft("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+ct+"x"+pt+")."),$}else return"data"in C&&Ft("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function S(C){return C.generateMipmaps}function v(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(C,E,W,it,et,ct=!1){if(C!==null){if(i[C]!==void 0)return i[C];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pt;it&&(pt=t.get("EXT_texture_norm16"),pt||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=E;if(E===i.RED&&(W===i.FLOAT&&($=i.R32F),W===i.HALF_FLOAT&&($=i.R16F),W===i.UNSIGNED_BYTE&&($=i.R8),W===i.UNSIGNED_SHORT&&pt&&($=pt.R16_EXT),W===i.SHORT&&pt&&($=pt.R16_SNORM_EXT)),E===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.R8UI),W===i.UNSIGNED_SHORT&&($=i.R16UI),W===i.UNSIGNED_INT&&($=i.R32UI),W===i.BYTE&&($=i.R8I),W===i.SHORT&&($=i.R16I),W===i.INT&&($=i.R32I)),E===i.RG&&(W===i.FLOAT&&($=i.RG32F),W===i.HALF_FLOAT&&($=i.RG16F),W===i.UNSIGNED_BYTE&&($=i.RG8),W===i.UNSIGNED_SHORT&&pt&&($=pt.RG16_EXT),W===i.SHORT&&pt&&($=pt.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RG8UI),W===i.UNSIGNED_SHORT&&($=i.RG16UI),W===i.UNSIGNED_INT&&($=i.RG32UI),W===i.BYTE&&($=i.RG8I),W===i.SHORT&&($=i.RG16I),W===i.INT&&($=i.RG32I)),E===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RGB8UI),W===i.UNSIGNED_SHORT&&($=i.RGB16UI),W===i.UNSIGNED_INT&&($=i.RGB32UI),W===i.BYTE&&($=i.RGB8I),W===i.SHORT&&($=i.RGB16I),W===i.INT&&($=i.RGB32I)),E===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RGBA8UI),W===i.UNSIGNED_SHORT&&($=i.RGBA16UI),W===i.UNSIGNED_INT&&($=i.RGBA32UI),W===i.BYTE&&($=i.RGBA8I),W===i.SHORT&&($=i.RGBA16I),W===i.INT&&($=i.RGBA32I)),E===i.RGB&&(W===i.UNSIGNED_SHORT&&pt&&($=pt.RGB16_EXT),W===i.SHORT&&pt&&($=pt.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),E===i.RGBA){const Q=ct?Ls:Zt.getTransfer(et);W===i.FLOAT&&($=i.RGBA32F),W===i.HALF_FLOAT&&($=i.RGBA16F),W===i.UNSIGNED_BYTE&&($=Q===re?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&pt&&($=pt.RGBA16_EXT),W===i.SHORT&&pt&&($=pt.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(C,E){let W;return C?E===null||E===mn||E===mi?W=i.DEPTH24_STENCIL8:E===gn?W=i.DEPTH32F_STENCIL8:E===Zi&&(W=i.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===mn||E===mi?W=i.DEPTH_COMPONENT24:E===gn?W=i.DEPTH_COMPONENT32F:E===Zi&&(W=i.DEPTH_COMPONENT16),W}function y(C,E){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==De&&C.minFilter!==Ke?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function L(C){const E=new WeakRef(C);n.get(C).__ref=E,m.add(E),x.register(C,E,E)}function P(C){const E=n.get(C).__ref;E!==void 0&&(m.delete(E),x.unregister(E))}function R(C){I(C.target)}function D(C){A(C.target)}function I(C){C.removeEventListener("dispose",R),P(C),k(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&d.delete(C)}function A(C){C.removeEventListener("dispose",D),P(C),J(C)}function F(){for(const C of m){const E=C.deref();E!==void 0&&(E.isRenderTarget===!0?A(E):I(E))}m.clear(),d.clear()}function k(C){const E=n.get(C);if(E.__webglInit===void 0)return;const W=C.source,it=f.get(W);if(it){const et=it[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&B(C),Object.keys(it).length===0&&f.delete(W)}n.remove(C)}function B(C){const E=n.get(C);i.deleteTexture(E.__webglTexture);const W=C.source,it=f.get(W);delete it[E.__cacheKey],a.memory.textures--}function J(C){const E=n.get(C);E.__depthDisposeCallback&&E.__depthDisposeCallback();const W=C.depthTexture;if(W&&W.renderTarget===C&&I(W),C.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(E.__webglFramebuffer[et]))for(let ct=0;ct<E.__webglFramebuffer[et].length;ct++)i.deleteFramebuffer(E.__webglFramebuffer[et][ct]);else i.deleteFramebuffer(E.__webglFramebuffer[et]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[et])}else{if(Array.isArray(E.__webglFramebuffer))for(let et=0;et<E.__webglFramebuffer.length;et++)i.deleteFramebuffer(E.__webglFramebuffer[et]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let et=0;et<E.__webglColorRenderbuffer.length;et++)E.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[et]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const it=C.textures;for(let et=0,ct=it.length;et<ct;et++){const pt=n.get(it[et]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),a.memory.textures--),n.remove(it[et])}n.remove(C)}let H=0;function Y(){H=0}function tt(){return H}function gt(C){H=C}function Pt(){const C=H;return C>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,C}function K(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.mipmapsAutoUpdate),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function nt(C,E){const W=n.get(C);if(C.isVideoTexture&&we(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&W.__version!==C.version){const it=C.image;if(it===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{kt(W,C,E);return}}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+E)}function St(C,E){const W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){kt(W,C,E);return}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+E)}function Et(C,E){const W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){kt(W,C,E);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+E)}function lt(C,E){const W=n.get(C);if(C.version>0&&W.__version!==C.version){ue(W,C,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+E)}const Mt={[Pr]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[Lr]:i.MIRRORED_REPEAT},ee={[De]:i.NEAREST,[Yh]:i.NEAREST_MIPMAP_NEAREST,[Es]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[Dr]:i.LINEAR_MIPMAP_NEAREST,[An]:i.LINEAR_MIPMAP_LINEAR},Ct={[Jh]:i.NEVER,[Jo]:i.ALWAYS,[Qh]:i.LESS,[Zo]:i.LEQUAL,[jh]:i.EQUAL,[$o]:i.GEQUAL,[tu]:i.GREATER,[eu]:i.NOTEQUAL};function $t(C,E){if(E.type===gn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ke||E.magFilter===Dr||E.magFilter===Es||E.magFilter===An||E.minFilter===Ke||E.minFilter===Dr||E.minFilter===Es||E.minFilter===An)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Mt[E.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Mt[E.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Mt[E.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ee[E.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ee[E.minFilter]),E.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ct[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===De||E.minFilter!==Es&&E.minFilter!==An||E.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function qt(C,E){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",R),L(E));const it=E.source;let et=f.get(it);et===void 0&&(et={},f.set(it,et));const ct=K(E);if(ct!==C.__cacheKey){et[ct]===void 0&&(et[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),et[ct].usedTimes++;const pt=et[C.__cacheKey];pt!==void 0&&(et[C.__cacheKey].usedTimes--,pt.usedTimes===0&&B(E)),C.__cacheKey=ct,C.__webglTexture=et[ct].texture}return W}function ot(C,E,W){return Math.floor(Math.floor(C/W)/E)}function Nt(C,E,W,it){const ct=C.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,W,it,E.data);else{ct.sort((N,j)=>N.start-j.start);let pt=0;for(let N=1;N<ct.length;N++){const j=ct[pt],Z=ct[N],dt=j.start+j.count,at=ot(Z.start,E.width,4),ht=ot(j.start,E.width,4);Z.start<=dt+1&&at===ht&&ot(Z.start+Z.count-1,E.width,4)===at?j.count=Math.max(j.count,Z.start+Z.count-j.start):(++pt,ct[pt]=Z)}ct.length=pt+1;const $=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let N=0,j=ct.length;N<j;N++){const Z=ct[N],dt=Math.floor(Z.start/4),at=Math.ceil(Z.count/4),ht=dt%E.width,Rt=Math.floor(dt/E.width),Vt=at,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,Rt),e.texSubImage2D(i.TEXTURE_2D,0,ht,Rt,Vt,rt,W,it,E.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function kt(C,E,W){let it=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(it=i.TEXTURE_3D);const et=qt(C,E),ct=E.source;e.bindTexture(it,C.__webglTexture,i.TEXTURE0+W);const pt=n.get(ct);if(ct.version!==pt.__version||et===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const rt=Zt.getPrimaries(Zt.workingColorSpace),Lt=E.colorSpace===Vn?null:Zt.getPrimaries(E.colorSpace),Gt=E.colorSpace===Vn||rt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let Q=M(E.image,!1,s.maxTextureSize);Q=Ut(E,Q);const ut=r.convert(E.format,E.colorSpace),N=r.convert(E.type);let j=T(E.internalFormat,ut,N,E.normalized,E.colorSpace,E.isVideoTexture);$t(it,E);let Z;const dt=E.mipmaps,at=E.isVideoTexture!==!0,ht=pt.__version===void 0||et===!0,Rt=ct.dataReady,Vt=y(E,Q);if(E.isDepthTexture)j=_(E.format===Hn,E.type),ht&&(at?e.texStorage2D(i.TEXTURE_2D,1,j,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,j,Q.width,Q.height,0,ut,N,null));else if(E.isDataTexture)if(dt.length>0){at&&ht&&e.texStorage2D(i.TEXTURE_2D,Vt,j,dt[0].width,dt[0].height);for(let rt=0,Lt=dt.length;rt<Lt;rt++)Z=dt[rt],at?Rt&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Z.width,Z.height,ut,N,Z.data):e.texImage2D(i.TEXTURE_2D,rt,j,Z.width,Z.height,0,ut,N,Z.data);E.generateMipmaps=!1}else at?(ht&&e.texStorage2D(i.TEXTURE_2D,Vt,j,Q.width,Q.height),Rt&&Nt(E,Q,ut,N)):e.texImage2D(i.TEXTURE_2D,0,j,Q.width,Q.height,0,ut,N,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){at&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,j,dt[0].width,dt[0].height,Q.depth);for(let rt=0,Lt=dt.length;rt<Lt;rt++)if(Z=dt[rt],E.format!==xn)if(ut!==null)if(at){if(Rt)if(E.layerUpdates.size>0){const Gt=$l(Z.width,Z.height,E.format,E.type);for(const vt of E.layerUpdates){const ae=Z.data.subarray(vt*Gt/Z.data.BYTES_PER_ELEMENT,(vt+1)*Gt/Z.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,vt,Z.width,Z.height,1,ut,ae)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Z.width,Z.height,Q.depth,ut,Z.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,j,Z.width,Z.height,Q.depth,0,Z.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Rt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Z.width,Z.height,Q.depth,ut,N,Z.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,j,Z.width,Z.height,Q.depth,0,ut,N,Z.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{at&&ht&&e.texStorage2D(i.TEXTURE_2D,Vt,j,dt[0].width,dt[0].height);for(let rt=0,Lt=dt.length;rt<Lt;rt++)Z=dt[rt],E.format!==xn?ut!==null?at?Rt&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,Z.width,Z.height,ut,Z.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,j,Z.width,Z.height,0,Z.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Rt&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Z.width,Z.height,ut,N,Z.data):e.texImage2D(i.TEXTURE_2D,rt,j,Z.width,Z.height,0,ut,N,Z.data)}else if(E.isDataArrayTexture)if(at){if(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,j,Q.width,Q.height,Q.depth),Rt)if(E.layerUpdates.size>0){const rt=$l(Q.width,Q.height,E.format,E.type);for(const Lt of E.layerUpdates){const Gt=Q.data.subarray(Lt*rt/Q.data.BYTES_PER_ELEMENT,(Lt+1)*rt/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Lt,Q.width,Q.height,1,ut,N,Gt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ut,N,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,j,Q.width,Q.height,Q.depth,0,ut,N,Q.data);else if(E.isData3DTexture)at?(ht&&e.texStorage3D(i.TEXTURE_3D,Vt,j,Q.width,Q.height,Q.depth),Rt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ut,N,Q.data)):e.texImage3D(i.TEXTURE_3D,0,j,Q.width,Q.height,Q.depth,0,ut,N,Q.data);else if(E.isFramebufferTexture){if(ht)if(at)e.texStorage2D(i.TEXTURE_2D,Vt,j,Q.width,Q.height);else{let rt=Q.width,Lt=Q.height;for(let Gt=0;Gt<Vt;Gt++)e.texImage2D(i.TEXTURE_2D,Gt,j,rt,Lt,0,ut,N,null),rt>>=1,Lt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){const rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),Q.parentNode!==rt){rt.appendChild(Q),d.add(E),rt.onpaint=Lt=>{const Gt=Lt.changedElements;for(const vt of d)Gt.includes(vt.image)&&(vt.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{const Gt=i.RGBA,vt=i.RGBA,ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Gt,vt,ae,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(dt.length>0){if(at&&ht){const rt=Bt(dt[0]);e.texStorage2D(i.TEXTURE_2D,Vt,j,rt.width,rt.height)}for(let rt=0,Lt=dt.length;rt<Lt;rt++)Z=dt[rt],at?Rt&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,ut,N,Z):e.texImage2D(i.TEXTURE_2D,rt,j,ut,N,Z);E.generateMipmaps=!1}else if(at){if(ht){const rt=Bt(Q);e.texStorage2D(i.TEXTURE_2D,Vt,j,rt.width,rt.height)}Rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,N,Q)}else e.texImage2D(i.TEXTURE_2D,0,j,ut,N,Q);S(E)&&E.mipmapsAutoUpdate===!0&&v(it),pt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ue(C,E,W){if(E.image.length!==6)return;const it=qt(C,E),et=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+W);const ct=n.get(et);if(et.version!==ct.__version||it===!0){e.activeTexture(i.TEXTURE0+W);const pt=Zt.getPrimaries(Zt.workingColorSpace),$=E.colorSpace===Vn?null:Zt.getPrimaries(E.colorSpace),Q=E.colorSpace===Vn||pt===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ut=E.isCompressedTexture||E.image[0].isCompressedTexture,N=E.image[0]&&E.image[0].isDataTexture,j=[];for(let vt=0;vt<6;vt++)!ut&&!N?j[vt]=M(E.image[vt],!0,s.maxCubemapSize):j[vt]=N?E.image[vt].image:E.image[vt],j[vt]=Ut(E,j[vt]);const Z=j[0],dt=r.convert(E.format,E.colorSpace),at=r.convert(E.type);let ht=T(E.internalFormat,dt,at,E.normalized,E.colorSpace);const Rt=E.isVideoTexture!==!0,Vt=ct.__version===void 0||it===!0,rt=et.dataReady;let Lt=y(E,Z);$t(i.TEXTURE_CUBE_MAP,E);let Gt;if(E.isDepthTexture){if(ht=_(E.format===Hn,E.type),Vt)if(Rt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ht,Z.width,Z.height);else for(let vt=0;vt<6;vt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ht,Z.width,Z.height,0,dt,at,null)}else if(ut){Rt&&Vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,ht,Z.width,Z.height);for(let vt=0;vt<6;vt++){Gt=j[vt].mipmaps;for(let ae=0;ae<Gt.length;ae++){const Pe=Gt[ae];E.format!==xn?dt!==null?Rt?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae,0,0,Pe.width,Pe.height,dt,Pe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae,ht,Pe.width,Pe.height,0,Pe.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae,0,0,Pe.width,Pe.height,dt,at,Pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae,ht,Pe.width,Pe.height,0,dt,at,Pe.data)}}}else{if(Gt=E.mipmaps,Rt&&Vt){Gt.length>0&&Lt++;const vt=Bt(j[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,ht,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(N){Rt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,j[vt].width,j[vt].height,dt,at,j[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ht,j[vt].width,j[vt].height,0,dt,at,j[vt].data);for(let ae=0;ae<Gt.length;ae++){const ti=Gt[ae].image[vt].image;Rt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae+1,0,0,ti.width,ti.height,dt,at,ti.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae+1,ht,ti.width,ti.height,0,dt,at,ti.data)}}else{Rt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,dt,at,j[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ht,dt,at,j[vt]);for(let ae=0;ae<Gt.length;ae++){const Pe=Gt[ae];Rt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae+1,0,0,dt,at,Pe.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae+1,ht,dt,at,Pe.image[vt])}}}S(E)&&E.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),ct.__version=et.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function oe(C,E,W,it,et,ct){const pt=r.convert(W.format,W.colorSpace),$=r.convert(W.type),Q=T(W.internalFormat,pt,$,W.normalized,W.colorSpace),ut=n.get(E),N=n.get(W);if(N.__renderTarget=E,!ut.__hasExternalTextures){const j=Math.max(1,E.width>>ct),Z=Math.max(1,E.height>>ct);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,ct,Q,j,Z,E.depth,0,pt,$,null):e.texImage2D(et,ct,Q,j,Z,0,pt,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),_t(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,et,N.__webglTexture,0,pe(E)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,et,N.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(C,E,W){if(i.bindRenderbuffer(i.RENDERBUFFER,C),E.depthBuffer){const it=E.depthTexture,et=it&&it.isDepthTexture?it.type:null,ct=_(E.stencilBuffer,et),pt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe(E),ct,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe(E),ct,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ct,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,C)}else{const it=E.textures;for(let et=0;et<it.length;et++){const ct=it[et],pt=r.convert(ct.format,ct.colorSpace),$=r.convert(ct.type),Q=T(ct.internalFormat,pt,$,ct.normalized,ct.colorSpace);_t(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe(E),Q,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe(E),Q,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Q,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(C,E,W){const it=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const et=n.get(E.depthTexture);et.__renderTarget=E;const ct=it?E.depthTexture.image[0]:E.depthTexture.image;(!et.__webglTexture||ct.width!==E.width||ct.height!==E.height)&&(ct.width=E.width,ct.height=E.height,E.depthTexture.needsUpdate=!0),it?lt(E.depthTexture,0):nt(E.depthTexture,0);const pt=et.__webglTexture,$=pe(E),Q=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,ut=E.depthTexture.format===Hn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Gn)_t(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,Q,pt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,ut,Q,pt,0);else if(E.depthTexture.format===Hn)_t(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,Q,pt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,ut,Q,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function be(C){const E=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const it=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),it){const et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,it.removeEventListener("dispose",et)};it.addEventListener("dispose",et),E.__depthDisposeCallback=et}E.__boundDepthTexture=it}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let it=0;it<6;it++)ge(E.__webglFramebuffer[it],C,it);else C.texture.mipmaps.length>0?ge(E.__webglFramebuffer[0],C,0):ge(E.__webglFramebuffer,C,0);else if(W){E.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[it]),E.__webglDepthbuffer[it]===void 0)E.__webglDepthbuffer[it]=i.createRenderbuffer(),$e(E.__webglDepthbuffer[it],C,!1);else{const et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ct)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),$e(E.__webglDepthbuffer,C,!1);else{const et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(C,E,W){const it=n.get(C);E!==void 0&&oe(it.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&be(C)}function We(C){const E=C.texture,W=n.get(C),it=n.get(E);C.addEventListener("dispose",D),L(C);const et=C.textures,ct=C.isWebGLCubeRenderTarget===!0,pt=et.length>1;if(pt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=E.version,a.memory.textures++),ct){W.__webglFramebuffer=[];for(let $=0;$<6;$++)if(E.mipmaps.length>0){W.__webglFramebuffer[$]=[];for(let Q=0;Q<E.mipmaps.length;Q++)W.__webglFramebuffer[$][Q]=i.createFramebuffer()}else W.__webglFramebuffer[$]=i.createFramebuffer()}else{if(E.mipmaps.length>0){W.__webglFramebuffer=[];for(let $=0;$<E.mipmaps.length;$++)W.__webglFramebuffer[$]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(pt)for(let $=0,Q=et.length;$<Q;$++){const ut=n.get(et[$]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&_t(C)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let $=0;$<et.length;$++){const Q=et[$];W.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[$]);const ut=r.convert(Q.format,Q.colorSpace),N=r.convert(Q.type),j=T(Q.internalFormat,ut,N,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),Z=pe(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,j,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,W.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),$e(W.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),$t(i.TEXTURE_CUBE_MAP,E);for(let $=0;$<6;$++)if(E.mipmaps.length>0)for(let Q=0;Q<E.mipmaps.length;Q++)oe(W.__webglFramebuffer[$][Q],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else oe(W.__webglFramebuffer[$],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);S(E)?v(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}else if(pt){for(let $=0,Q=et.length;$<Q;$++){const ut=et[$],N=n.get(ut);let j=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,N.__webglTexture),$t(j,ut),oe(W.__webglFramebuffer,C,ut,i.COLOR_ATTACHMENT0+$,j,0),S(ut)&&v(j)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&($=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,it.__webglTexture),$t($,E),E.mipmaps.length>0)for(let Q=0;Q<E.mipmaps.length;Q++)oe(W.__webglFramebuffer[Q],C,E,i.COLOR_ATTACHMENT0,$,Q);else oe(W.__webglFramebuffer,C,E,i.COLOR_ATTACHMENT0,$,0);S(E)?v($):E.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&be(C)}function O(C){const E=C.textures;for(let W=0,it=E.length;W<it;W++){const et=E[W];if(S(et)&&et.mipmapsAutoUpdate===!0){const ct=b(C),pt=n.get(et).__webglTexture;e.bindTexture(ct,pt),v(ct),e.unbindTexture()}}}const Xe=[];function le(C){if(C.samples>0){if(_t(C)===!1){const E=C.textures,W=C.width,it=C.height;let et=i.COLOR_BUFFER_BIT;const ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(C),$=E.length>1;if($)for(let ut=0;ut<E.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let ut=0;ut<E.length;ut++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[ut]);const N=n.get(E[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,W,it,0,0,W,it,et,i.NEAREST),l===!0&&(Xe.length=0,Xe.push(i.COLOR_ATTACHMENT0+ut),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Xe.push(ct),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ut=0;ut<E.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,pt.__webglColorRenderbuffer[ut]);const N=n.get(E[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,N,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const E=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function pe(C){return Math.min(s.maxSamples,C.samples)}function _t(C){const E=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function we(C){const E=a.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function Ut(C,E){const W=C.colorSpace,it=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==Ps&&W!==Vn&&(Zt.getTransfer(W)===re?(it!==xn||et!==Qe)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",W)),E}function Bt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Pt,this.resetTextureUnits=Y,this.getTextureUnits=tt,this.setTextureUnits=gt,this.setTexture2D=nt,this.setTexture2DArray=St,this.setTexture3D=Et,this.setTextureCube=lt,this.rebindTextures=Je,this.setupRenderTarget=We,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=_t,this.dispose=F}function C0(i,t){function e(n,s=Vn){let r;const a=Zt.getTransfer(s);if(n===Qe)return i.UNSIGNED_BYTE;if(n===Nr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ur)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Go)return i.BYTE;if(n===Ho)return i.SHORT;if(n===Zi)return i.UNSIGNED_SHORT;if(n===Ir)return i.INT;if(n===mn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===_n)return i.HALF_FLOAT;if(n===Xo)return i.ALPHA;if(n===qo)return i.RGB;if(n===xn)return i.RGBA;if(n===Gn)return i.DEPTH_COMPONENT;if(n===Hn)return i.DEPTH_STENCIL;if(n===Yo)return i.RED;if(n===Fr)return i.RED_INTEGER;if(n===ii)return i.RG;if(n===Or)return i.RG_INTEGER;if(n===Br)return i.RGBA_INTEGER;if(n===bs||n===ws||n===Ts||n===As)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===As)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zr||n===kr||n===Gr||n===Hr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vr||n===Wr||n===Xr||n===qr||n===Yr||n===Rs||n===Kr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vr||n===Wr)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===qr)return r.COMPRESSED_R11_EAC;if(n===Yr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Rs)return r.COMPRESSED_RG11_EAC;if(n===Kr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zr||n===$r||n===Jr||n===Qr||n===jr||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$r)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ta)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ea)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===na)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ia)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ra)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===aa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===la)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ca||n===ha||n===ua)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ca)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===da||n===fa||n===Cs||n===pa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===da)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const P0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L0=`
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

}`;class D0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Al(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new $n({vertexShader:P0,fragmentShader:L0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new Li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I0 extends Wn{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,m=null;const x=typeof XRWebGLBinding<"u",p=new D0,g={},M=e.getContextAttributes();let S=null,v=null;const b=[],T=[],_=new Dt;let y=null,L=null;const P=new dn;P.viewport=new de;const R=new dn;R.viewport=new de;const D=[P,R],I=new Ed;let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let nt=b[K];return nt===void 0&&(nt=new Ta,b[K]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(K){let nt=b[K];return nt===void 0&&(nt=new Ta,b[K]=nt),nt.getGripSpace()},this.getHand=function(K){let nt=b[K];return nt===void 0&&(nt=new Ta,b[K]=nt),nt.getHandSpace()};function k(K){const nt=T.indexOf(K.inputSource);if(nt===-1)return;const St=b[nt];St!==void 0&&(St.update(K.inputSource,K.frame,c||a),St.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",J);for(let K=0;K<b.length;K++){const nt=T[K];nt!==null&&(T[K]=null,b[K].disconnect(nt))}A=null,F=null,p.reset();for(const K in g)delete g[K];if(t.setRenderTarget(S),f=null,h=null,d=null,s=null,v=null,Pt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(_.width,_.height,!1),L!==null){const K=L.camera;K.fov=L.fov,K.zoom=L.zoom,K.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",B),s.addEventListener("inputsourceschange",J),M.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Et=null,lt=null;M.depth&&(lt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=M.stencil?Hn:Gn,Et=M.stencil?mi:mn);const Mt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Mt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new vn(h.textureWidth,h.textureHeight,{format:xn,type:Qe,depthTexture:new Ri(h.textureWidth,h.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const St={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new vn(f.framebufferWidth,f.framebufferHeight,{format:xn,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Pt.setContext(s),Pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function J(K){for(let nt=0;nt<K.removed.length;nt++){const St=K.removed[nt],Et=T.indexOf(St);Et>=0&&(T[Et]=null,b[Et].disconnect(St))}for(let nt=0;nt<K.added.length;nt++){const St=K.added[nt];let Et=T.indexOf(St);if(Et===-1){for(let Mt=0;Mt<b.length;Mt++)if(Mt>=T.length){T.push(St),Et=Mt;break}else if(T[Mt]===null){T[Mt]=St,Et=Mt;break}if(Et===-1)break}const lt=b[Et];lt&&lt.connect(St)}}function H(K,nt){nt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(nt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let nt=K.near,St=K.far;p.texture!==null&&(p.depthNear>0&&(nt=p.depthNear),p.depthFar>0&&(St=p.depthFar)),I.near=R.near=P.near=nt,I.far=R.far=P.far=St,(A!==I.near||F!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),A=I.near,F=I.far),I.layers.mask=K.layers.mask|6,P.layers.mask=I.layers.mask&-5,R.layers.mask=I.layers.mask&-3;const Et=K.parent,lt=I.cameras;H(I,Et);for(let Mt=0;Mt<lt.length;Mt++)H(lt[Mt],Et);I.projectionMatrix.copy(P.projectionMatrix),I.projectionMatrixInverse.copy(P.projectionMatrixInverse),L===null&&K.isPerspectiveCamera&&(L={camera:K,fov:K.fov,zoom:K.zoom}),Y(K,I,Et)};function Y(K,nt,St){St===null?K.matrix.copy(nt.matrixWorld):(K.matrix.copy(St.matrixWorld),K.matrix.invert(),K.matrix.multiply(nt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ji*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(K){return g[K]};let tt=null;function gt(K,nt){if(u=nt.getViewerPose(c||a),m=nt,u!==null){const St=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Et=!1;St.length!==I.cameras.length&&(I.cameras.length=0,Et=!0);for(let Ct=0;Ct<St.length;Ct++){const $t=St[Ct];let qt=null;if(f!==null)qt=f.getViewport($t);else{const Nt=d.getViewSubImage(h,$t);qt=Nt.viewport,Ct===0&&(t.setRenderTargetTextures(v,Nt.colorTexture,Nt.depthStencilTexture),t.setRenderTarget(v))}let ot=D[Ct];ot===void 0&&(ot=new dn,ot.layers.enable(Ct),ot.viewport=new de,D[Ct]=ot),ot.matrix.fromArray($t.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray($t.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(qt.x,qt.y,qt.width,qt.height),Ct===0&&(I.matrix.copy(ot.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Et===!0&&I.cameras.push(ot)}const lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const Ct=d.getDepthInformation(St[0]);Ct&&Ct.isValid&&Ct.texture&&p.init(Ct,s.renderState)}if(lt&&lt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Ct=0;Ct<St.length;Ct++){const $t=St[Ct].camera;if($t){let qt=g[$t];qt||(qt=new Al,g[$t]=qt);const ot=d.getCameraImage($t);qt.sourceTexture=ot}}}}for(let St=0;St<b.length;St++){const Et=T[St],lt=b[St];Et!==null&&lt!==void 0&&lt.update(Et,nt,c||a)}tt&&tt(K,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),m=null}const Pt=new Jl;Pt.setAnimationLoop(gt),this.setAnimationLoop=function(K){tt=K},this.dispose=function(){}}}const N0=new fe,Rc=new Ot;Rc.set(-1,0,0,0,1,0,0,0,1);function U0(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Fl(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,M,S,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),h(p,g),g.isMeshPhysicalMaterial&&f(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,M,S):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===ke&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===ke&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const M=t.get(g),S=M.envMap,v=M.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(N0.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Rc),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,S){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=S*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,M){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ke&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){const M=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function F0(i,t,e,n){let s={},r={};function a(M,S){const v=S.program;n.uniformBlockBinding(M,v,s[M.id])}function o(M,S){let v=s[M.id];v===void 0&&(m(M),v=l(M),s[M.id]=v,M.addEventListener("dispose",p));const b=S.program;n.updateUBOMapping(M,b);const T=t.render.frame;r[M.id]!==T&&(c(M),r[M.id]=T)}function l(M){const S=i.createBuffer(),v=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,v,b),i.bindBuffer(i.UNIFORM_BUFFER,null),S}function c(M){const S=s[M.id],v=M.uniforms,b=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,_=v.length;T<_;T++){const y=v[T];if(Array.isArray(y))for(let L=0,P=y.length;L<P;L++)u(y[L],T,L,b);else u(y,T,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,S,v,b){if(h(M,S,v,b)===!0){const T=M.__offset,_=M.value;if(Array.isArray(_)){let y=0;for(let L=0;L<_.length;L++){const P=_[L],R=x(P,!0);d(P,M.__data,y),y+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,M.__data)}}function d(M,S,v){typeof M=="number"||typeof M=="boolean"?S[v]=M:M.isMatrix3?(S[v]=M.elements[0],S[v+1]=M.elements[1],S[v+2]=M.elements[2],S[v+3]=0,S[v+4]=M.elements[3],S[v+5]=M.elements[4],S[v+6]=M.elements[5],S[v+7]=0,S[v+8]=M.elements[6],S[v+9]=M.elements[7],S[v+10]=M.elements[8],S[v+11]=0):ArrayBuffer.isView(M)?S.set(M.subarray(0,S.length-v),v):M.toArray(S,v)}function h(M,S,v,b){const T=M.value,_=S+"_"+v;if(Array.isArray(T)){b[_]===void 0&&(b[_]=[]);const y=b[_];let L=!1;for(let P=0;P<T.length;P++)f(T[P],y,P)===!0&&(L=!0);return L}return f(T,b,_)}function f(M,S,v){if(S[v]===void 0)return typeof M=="number"||typeof M=="boolean"?S[v]=M:ArrayBuffer.isView(M)?S[v]=M.slice():S[v]=M.clone(),!0;{const b=S[v];if(typeof M=="number"||typeof M=="boolean"){if(b!==M)return S[v]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(b.equals(M)===!1)return b.copy(M),!0}}return!1}function m(M){const S=M.uniforms;let v=0;const b=16;for(let _=0,y=S.length;_<y;_++){const L=Array.isArray(S[_])?S[_]:[S[_]];for(let P=0,R=L.length;P<R;P++){const D=L[P],I=Array.isArray(D.value)?D.value:[D.value],A=Array.isArray(S[_])||Array.isArray(D.value);let F=v;for(let B=0,J=I.length;B<J;B++){const H=I[B],Y=x(H,A),tt=v%b,gt=tt%Y.boundary,Pt=tt+gt;v+=gt,Pt!==0&&b-Pt<Y.storage&&(v+=b-Pt),B===0&&(F=v),v+=Y.storage}const k=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new k((v-F)/Float32Array.BYTES_PER_ELEMENT),D.__offset=F}}const T=v%b;return T>0&&(v+=b-T),M.__size=v,M.__cache={},this}function x(M,S){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=16,v.storage=48):M.isMatrix4?(v.boundary=16,v.storage=64):M.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(v.boundary=16,v.storage=M.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",M),S===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(M){const S=M.target;S.removeEventListener("dispose",p),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(const M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:g}}const O0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function B0(){return bn===null&&(bn=new Vu(O0,16,16,ii,_n),bn.name="DFG_LUT",bn.minFilter=Ke,bn.magFilter=Ke,bn.wrapS=Tn,bn.wrapT=Tn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class z0{constructor(t={}){const{canvas:e=su(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Qe}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const x=f,p=new Set([Br,Or,Fr]),g=new Set([Qe,mn,Zi,mi,Nr,Ur]),M=new Uint32Array(4),S=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]};let b=null,T=null;const _=[],y=[];let L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let R=!1,D=null,I=null,A=null,F=null;this._outputColorSpace=Te;let k=0,B=0,J=null,H=-1,Y=null;const tt=new de,gt=new de;let Pt=null;const K=new It(0);let nt=0,St=e.width,Et=e.height,lt=1,Mt=null,ee=null;const Ct=new de(0,0,St,Et),$t=new de(0,0,St,Et);let qt=!1;const ot=new cs,Nt=new Va;let kt=!1,ue=!1;const oe=new fe,$e=new z,ge=new de,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function We(){return J===null?lt:1}let O=n;function Xe(w,U){return e.getContext(w,U)}let le,pe,_t,we,Ut,Bt,C,E,W,it,et,ct,pt,$,Q,ut,N,j,Z,dt,at,ht,Rt;try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rn}`),e.addEventListener("webglcontextlost",Lt,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),O===null){const U="webgl2";if(O=Xe(U,w),O===null)throw Xe(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(w){throw e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),jt("WebGLRenderer: "+w.message),w}function Vt(){le=new Hp(O),le.init(),at=new C0(O,le),pe=new Lp(O,le,t,at),_t=new A0(O,le),pe.reversedDepthBuffer&&h&&_t.buffers.depth.setReversed(!0),I=O.createFramebuffer(),A=O.createFramebuffer(),F=O.createFramebuffer(),we=new Xp(O),Ut=new f0,Bt=new R0(O,le,_t,Ut,pe,at,we),C=new Gp(P),E=new Td(O),ht=new Cp(O,E),W=new Vp(O,E,we,ht),it=new Yp(O,W,E,ht,we),j=new qp(O,pe,Bt),Q=new Dp(Ut),et=new d0(P,C,le,pe,ht,Q),ct=new U0(P,Ut),pt=new m0,$=new S0(le),N=new Rp(P,C,_t,it,m,l),ut=new T0(P,it,pe),Rt=new F0(O,we,pe,_t),Z=new Pp(O,le,we),dt=new Wp(O,le,we),we.programs=et.programs,P.capabilities=pe,P.extensions=le,P.properties=Ut,P.renderLists=pt,P.shadowMap=ut,P.state=_t,P.info=we}x!==Qe&&(L=new Zp(x,e.width,e.height,o,s,r));const rt=new I0(P,O);this.xr=rt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=le.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=le.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(w){w!==void 0&&(lt=w,this.setSize(St,Et,!1))},this.getSize=function(w){return w.set(St,Et)},this.setSize=function(w,U,q=!0){if(rt.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}St=w,Et=U,e.width=Math.floor(w*lt),e.height=Math.floor(U*lt),q===!0&&(e.style.width=w+"px",e.style.height=U+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(St*lt,Et*lt).floor()},this.setDrawingBufferSize=function(w,U,q){St=w,Et=U,lt=q,e.width=Math.floor(w*q),e.height=Math.floor(U*q),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(x===Qe){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(tt)},this.getViewport=function(w){return w.copy(Ct)},this.setViewport=function(w,U,q,V){w.isVector4?Ct.set(w.x,w.y,w.z,w.w):Ct.set(w,U,q,V),_t.viewport(tt.copy(Ct).multiplyScalar(We()).round())},this.getScissor=function(w){return w.copy($t)},this.setScissor=function(w,U,q,V){w.isVector4?$t.set(w.x,w.y,w.z,w.w):$t.set(w,U,q,V),_t.scissor(gt.copy($t).multiplyScalar(We()).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(w){_t.setScissorTest(qt=w)},this.setOpaqueSort=function(w){Mt=w},this.setTransparentSort=function(w){ee=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,q=!0){let V=0;if(w){let X=!1;if(J!==null){const mt=J.texture.format;X=p.has(mt)}if(X){const mt=J.texture.type,bt=g.has(mt),ft=N.getClearColor(),yt=N.getClearAlpha(),At=ft.r,zt=ft.g,Yt=ft.b;bt?(M[0]=At,M[1]=zt,M[2]=Yt,M[3]=yt,O.clearBufferuiv(O.COLOR,0,M)):(S[0]=At,S[1]=zt,S[2]=Yt,S[3]=yt,O.clearBufferiv(O.COLOR,0,S))}else V|=O.COLOR_BUFFER_BIT}U&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),N.dispose(),pt.dispose(),$.dispose(),Bt.dispose(),Ut.dispose(),C.dispose(),it.dispose(),W.dispose(),ht.dispose(),Rt.dispose(),et.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",ph),rt.removeEventListener("sessionend",mh),ci.stop()};function Lt(w){w.preventDefault(),tl("WebGLRenderer: Context Lost."),R=!0}function Gt(){tl("WebGLRenderer: Context Restored."),R=!1;const w=we.autoReset,U=ut.enabled,q=ut.autoUpdate,V=ut.needsUpdate,X=ut.type;Vt(),we.autoReset=w,ut.enabled=U,ut.autoUpdate=q,ut.needsUpdate=V,ut.type=X}function vt(w){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ae(w){const U=w.target;U.removeEventListener("dispose",ae),Pe(U)}function Pe(w){ti(w),Ut.remove(w)}function ti(w){const U=Ut.get(w).programs;U!==void 0&&(U.forEach(function(q){et.releaseProgram(q)}),w.isShaderMaterial&&et.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,q,V,X,mt){U===null&&(U=be);const bt=X.isMesh&&X.matrixWorld.determinantAffine()<0,ft=v_(w,U,q,V,X);_t.setMaterial(V,bt);let yt=q.index,At=1;if(V.wireframe===!0){if(yt=W.getWireframeAttribute(q),yt===void 0)return;At=2}const zt=q.drawRange,Yt=q.attributes.position;let wt=zt.start*At,Kt=(zt.start+zt.count)*At;mt!==null&&(wt=Math.max(wt,mt.start*At),Kt=Math.min(Kt,(mt.start+mt.count)*At)),yt!==null?(wt=Math.max(wt,0),Kt=Math.min(Kt,yt.count)):Yt!=null&&(wt=Math.max(wt,0),Kt=Math.min(Kt,Yt.count));const ve=Kt-wt;if(ve<0||ve===1/0)return;ht.setup(X,V,ft,q,yt);let he,ce=Z;if(yt!==null&&(he=E.get(yt),ce=dt,ce.setIndex(he)),X.isMesh)V.wireframe===!0?(_t.setLineWidth(V.wireframeLinewidth*We()),ce.setMode(O.LINES)):ce.setMode(O.TRIANGLES);else if(X.isLine){let Be=V.linewidth;Be===void 0&&(Be=1),_t.setLineWidth(Be*We()),X.isLineSegments?ce.setMode(O.LINES):X.isLineLoop?ce.setMode(O.LINE_LOOP):ce.setMode(O.LINE_STRIP)}else X.isPoints?ce.setMode(O.POINTS):X.isSprite&&ce.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(le.get("WEBGL_multi_draw"))ce.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Be=X._multiDrawStarts,Tt=X._multiDrawCounts,qe=X._multiDrawCount,ie=yt?E.get(yt).bytesPerElement:1,hi=Ut.get(V).currentProgram.getUniforms();for(let ze=0;ze<qe;ze++)hi.setValue(O,"_gl_DrawID",ze),ce.render(Be[ze]/ie,Tt[ze])}else if(X.isInstancedMesh)ce.renderInstances(wt,ve,X.count);else if(q.isInstancedBufferGeometry){const Be=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Tt=Math.min(q.instanceCount,Be);ce.renderInstances(wt,ve,Tt)}else ce.render(wt,ve)};function fh(w,U,q,V){D!==null&&w.isNodeMaterial&&D.setObject(V,w),kt===!0&&Q.setState(w,q,!1),w.transparent===!0&&w.side===Ge&&w.forceSinglePass===!1?(w.side=ke,w.needsUpdate=!0,ys(w,U,V),w.side=ni,w.needsUpdate=!0,ys(w,U,V),w.side=Ge):ys(w,U,V)}this.compile=function(w,U,q=null){q===null&&(q=w),D!==null&&D.renderStart(w,U,q),T=$.get(q),T.init(U),y.push(T),q.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),w!==q&&w.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),D!==null&&D.updateLights(T.state.lightsArray),ue=this.localClippingEnabled,kt=Q.init(this.clippingPlanes,ue),kt===!0&&Q.setGlobalState(this.clippingPlanes,U),D!==null&&ut.render(T.state.shadowsArray,q,U);const V=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const mt=X.material;if(mt)if(Array.isArray(mt))for(let bt=0;bt<mt.length;bt++){const ft=mt[bt];fh(ft,q,U,X),V.add(ft)}else fh(mt,q,U,X),V.add(mt)}),T=y.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(w,U,q=null){const V=this.compile(w,U,q);return new Promise(X=>{function mt(){if(V.forEach(function(bt){const yt=Ut.get(bt).currentProgram;(yt===void 0||yt.isReady())&&V.delete(bt)}),V.size===0){X(w);return}setTimeout(mt,10)}le.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let wo=null;function __(w){wo&&wo(w)}function ph(){ci.stop()}function mh(){ci.start()}const ci=new Jl;ci.setAnimationLoop(__),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(w){wo=w,rt.setAnimationLoop(w),w===null?ci.stop():ci.start()},rt.addEventListener("sessionstart",ph),rt.addEventListener("sessionend",mh),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D!==null&&D.renderStart(w,U);const q=rt.enabled===!0&&rt.isPresenting===!0,V=L!==null&&(J===null||q)&&L.begin(P,J);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(U),U=rt.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,U,J),T=$.get(w,y.length),T.init(U),T.state.textureUnits=Bt.getTextureUnits(),y.push(T),oe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Nt.setFromArrayCamera(U):ot.setFromProjectionMatrix(oe,an,U.reversedDepth),ue=this.localClippingEnabled,kt=Q.init(this.clippingPlanes,ue),b=pt.get(w,_.length),b.init(),_.push(b),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){const bt=P.xr.getDepthSensingMesh();bt!==null&&To(bt,U,-1/0,P.sortObjects)}To(w,U,0,P.sortObjects),b.finish(),D!==null&&D.updateLights(T.state.lightsArray),P.sortObjects===!0&&b.sort(Mt,ee),Je=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Je&&N.addToRenderList(b,w),this.info.autoReset===!0&&this.info.reset(),kt===!0&&Q.beginShadows();const X=T.state.shadowsArray;if(ut.render(X,w,U),kt===!0&&Q.endShadows(),(V&&L.hasRenderPass())===!1){const bt=b.opaque,ft=b.transmissive;if(T.setupLights(),U.isArrayCamera){const yt=U.cameras;if(ft.length>0)for(let At=0,zt=yt.length;At<zt;At++){const Yt=yt[At];_h(bt,ft,w,Yt)}Je&&N.render(w);for(let At=0,zt=yt.length;At<zt;At++){const Yt=yt[At];gh(b,w,Yt,Yt.viewport)}}else ft.length>0&&_h(bt,ft,w,U),Je&&N.render(w),gh(b,w,U)}J!==null&&B===0&&(Bt.updateMultisampleRenderTarget(J),Bt.updateRenderTargetMipmap(J)),V&&L.end(P),w.isScene===!0&&w.onAfterRender(P,w,U),ht.resetDefaultState(),H=-1,Y=null,y.pop(),y.length>0?(T=y[y.length-1],Bt.setTextureUnits(T.state.textureUnits),kt===!0&&Q.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,D!==null&&D.renderEnd()};function To(w,U,q,V){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){const bt=U.isArrayCamera?Nt:ot;if(!w.frustumCulled||w.intersectsFrustum(bt)){V&&ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(oe);const ft=it.update(w),yt=w.material;yt.visible&&b.push(w,ft,yt,q,ge.z,null,U)}}else if(w.isMesh||w.isLine||w.isPoints){const bt=U.isArrayCamera?Nt:ot;if(!w.frustumCulled||w.intersectsFrustum(bt)){const ft=it.update(w),yt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ge.copy(w.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),ge.copy(ft.boundingSphere.center)),ge.applyMatrix4(w.matrixWorld).applyMatrix4(oe)),Array.isArray(yt)){const At=ft.groups;for(let zt=0,Yt=At.length;zt<Yt;zt++){const wt=At[zt],Kt=yt[wt.materialIndex];Kt&&Kt.visible&&b.push(w,ft,Kt,q,ge.z,wt,U)}}else yt.visible&&b.push(w,ft,yt,q,ge.z,null,U)}}}const mt=w.children;for(let bt=0,ft=mt.length;bt<ft;bt++)To(mt[bt],U,q,V)}function gh(w,U,q,V){const{opaque:X,transmissive:mt,transparent:bt}=w;T.setupLightsView(q),kt===!0&&Q.setGlobalState(P.clippingPlanes,q),V&&_t.viewport(tt.copy(V)),X.length>0&&xr(X,U,q),mt.length>0&&xr(mt,U,q),bt.length>0&&xr(bt,U,q),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function _h(w,U,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){const wt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new vn(1,1,{generateMipmaps:!0,type:wt?_n:Qe,minFilter:An,samples:Math.max(4,pe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const mt=T.state.transmissionRenderTarget[V.id],bt=V.viewport||tt;mt.setSize(bt.z*P.transmissionResolutionScale,bt.w*P.transmissionResolutionScale);const ft=P.getRenderTarget(),yt=P.getActiveCubeFace(),At=P.getActiveMipmapLevel();P.setRenderTarget(mt),P.getClearColor(K),nt=P.getClearAlpha(),nt<1&&P.setClearColor(16777215,.5),P.clear(),Je&&N.render(q);const zt=P.toneMapping;P.toneMapping=wn;const Yt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),kt===!0&&Q.setGlobalState(P.clippingPlanes,V),xr(w,q,V),Bt.updateMultisampleRenderTarget(mt),Bt.updateRenderTargetMipmap(mt),le.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let Kt=0,ve=U.length;Kt<ve;Kt++){const he=U[Kt],{object:ce,geometry:Be,material:Tt,group:qe}=he;if(Tt.side===Ge&&ce.layers.test(V.layers)){const ie=Tt.side;Tt.side=ke,Tt.needsUpdate=!0,xh(ce,q,V,Be,Tt,qe),Tt.side=ie,Tt.needsUpdate=!0,wt=!0}}wt===!0&&(Bt.updateMultisampleRenderTarget(mt),Bt.updateRenderTargetMipmap(mt))}P.setRenderTarget(ft,yt,At),P.setClearColor(K,nt),Yt!==void 0&&(V.viewport=Yt),P.toneMapping=zt}function xr(w,U,q){const V=U.isScene===!0?U.overrideMaterial:null;for(let X=0,mt=w.length;X<mt;X++){const bt=w[X],{object:ft,geometry:yt,group:At}=bt;let zt=bt.material;zt.allowOverride===!0&&V!==null&&(zt=V),ft.layers.test(q.layers)&&xh(ft,U,q,yt,zt,At)}}function xh(w,U,q,V,X,mt){D!==null&&X.isNodeMaterial&&D.setObject(w,X),w.onBeforeRender(P,U,q,V,X,mt),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(P,U,q,V,w,mt),X.transparent===!0&&X.side===Ge&&X.forceSinglePass===!1?(X.side=ke,X.needsUpdate=!0,P.renderBufferDirect(q,U,V,X,w,mt),X.side=ni,X.needsUpdate=!0,P.renderBufferDirect(q,U,V,X,w,mt),X.side=Ge):P.renderBufferDirect(q,U,V,X,w,mt),w.onAfterRender(P,U,q,V,X,mt)}function vh(w){let U=0;for(const q of w)q.texture!==null&&U++;return U}function ys(w,U,q){U.isScene!==!0&&(U=be);const V=Ut.get(w),X=T.state.lights,mt=T.state.shadowsArray,bt=X.state.version,ft=et.getParameters(w,X.state,mt,U,q,T.state.lightProbeGridArray),yt=et.getProgramCacheKey(ft);let At=V.programs;V.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;const zt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;V.envMap=C.get(w.envMap||V.environment,zt),V.envMapRotation=V.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,At===void 0&&(w.addEventListener("dispose",ae),At=new Map,V.programs=At,V.programVariants=new Map);let Yt=At.get(yt);if(Yt!==void 0){if(V.currentProgram===Yt&&V.lightsStateVersion===bt)return Sh(w,ft),Yt}else ft.uniforms=et.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,q,ft),w.onBeforeCompile(ft,P),Yt=et.acquireProgram(ft,yt),At.set(yt,Yt),V.uniforms=ft.uniforms;const wt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(wt.clippingPlanes=Q.uniform),Sh(w,ft),V.needsLights=S_(w),V.lightsStateVersion=bt,V.needsLights&&(wt.ambientLightColor.value=X.state.ambient,wt.lightProbe.value=X.state.probe,wt.sunLights.value=X.state.sun,wt.sunLightShadows.value=X.state.sunShadow,wt.directionalLights.value=X.state.directional,wt.directionalLightShadows.value=X.state.directionalShadow,wt.spotLights.value=X.state.spot,wt.spotLightShadows.value=X.state.spotShadow,wt.rectAreaLights.value=X.state.rectArea,wt.ltc_1.value=X.state.rectAreaLTC1,wt.ltc_2.value=X.state.rectAreaLTC2,wt.pointLights.value=X.state.point,wt.pointLightShadows.value=X.state.pointShadow,wt.hemisphereLights.value=X.state.hemi,wt.sunShadowMatrix.value=X.state.sunShadowMatrix,wt.sunShadowCascade.value=X.state.sunShadowCascade,wt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,wt.spotLightMatrix.value=X.state.spotLightMatrix,wt.spotLightMap.value=X.state.spotLightMap,wt.pointShadowMatrix.value=X.state.pointShadowMatrix),V.numLightProbeGrids=vh(T.state.lightProbeGridArray),V.currentProgram=Yt,V.uniformsList=null,Yt}function x_(w,U,q,V,X){const mt=Ut.get(w),bt=mt.currentProgram.id+","+V+","+X;let ft=mt.programVariants.get(bt);return ft===void 0?(ft=ys(w,U,q),mt.programVariants.set(bt,ft)):(mt.currentProgram=ft,mt.uniformsList=null,mt.outputColorSpace=V,mt.toneMapping=X),ft}function Mh(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=or.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Sh(w,U){const q=Ut.get(w);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function v_(w,U,q,V,X){U.isScene!==!0&&(U=be),Bt.resetTextureUnits();const mt=U.fog,bt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,ft=J===null?P.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Zt.workingColorSpace,yt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,At=C.get(V.envMap||bt,yt),zt=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Yt=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),wt=!!q.morphAttributes.position,Kt=!!q.morphAttributes.normal,ve=!!q.morphAttributes.color;let he=wn;V.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(he=P.toneMapping);const ce=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Be=ce!==void 0?ce.length:0,Tt=Ut.get(V),qe=T.state.lights;if(kt===!0&&(ue===!0||w!==Y)){const _e=w===Y&&V.id===H;Q.setState(V,w,_e)}let ie=!1,hi=!1;V.version===Tt.__version?Tt.needsLights&&Tt.lightsStateVersion!==qe.state.version||X.isBatchedMesh&&Tt.batching===!1||!X.isBatchedMesh&&Tt.batching===!0||X.isBatchedMesh&&Tt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Tt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Tt.instancing===!1||!X.isInstancedMesh&&Tt.instancing===!0||X.isSkinnedMesh&&Tt.skinning===!1||!X.isSkinnedMesh&&Tt.skinning===!0||X.isInstancedMesh&&Tt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Tt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Tt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Tt.instancingMorph===!1&&X.morphTexture!==null||Tt.envMap!==At||V.fog===!0&&Tt.fog!==mt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Q.numPlanes||Tt.numIntersection!==Q.numIntersection)||Tt.vertexAlphas!==zt||Tt.vertexTangents!==Yt||Tt.morphTargets!==wt||Tt.morphNormals!==Kt||Tt.morphColors!==ve||Tt.morphTargetsCount!==Be||Tt.numLightProbeGrids!==vh(T.state.lightProbeGridArray)?ie=!0:(Tt.outputColorSpace!==ft||Tt.toneMapping!==he)&&(hi=!0):(ie=!0,Tt.__version=V.version);let ze=Tt.currentProgram;(ie===!0||hi===!0)&&(ze=hi===!0?x_(V,U,X,ft,he):ys(V,U,X),D&&V.isNodeMaterial&&D.onUpdateProgram(V,ze,Tt));let vr=!1,ei=!1,ui=!1;const Qt=ze.getUniforms(),Ue=Tt.uniforms;if(_t.useProgram(ze.program)&&(vr=!0,ei=!0,ui=!0),V.id!==H&&(H=V.id,ei=!0),vr||Y!==w){_t.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Qt.setValue(O,"projectionMatrix",w.projectionMatrix),Qt.setValue(O,"viewMatrix",w.matrixWorldInverse);const Le=Qt.map.cameraPosition;Le!==void 0&&Le.setValue(O,$e.setFromMatrixPosition(w.matrixWorld)),pe.logarithmicDepthBuffer&&Qt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Qt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),Y!==w&&(Y=w,ei=!0,ui=!0)}if(Tt.needsLights&&(qe.state.sunShadowMap.length>0&&Qt.setValue(O,"sunShadowMap",qe.state.sunShadowMap,Bt),qe.state.directionalShadowMap.length>0&&Qt.setValue(O,"directionalShadowMap",qe.state.directionalShadowMap,Bt),qe.state.spotShadowMap.length>0&&Qt.setValue(O,"spotShadowMap",qe.state.spotShadowMap,Bt),qe.state.pointShadowMap.length>0&&Qt.setValue(O,"pointShadowMap",qe.state.pointShadowMap,Bt)),X.isSkinnedMesh){Qt.setOptional(O,X,"bindMatrix"),Qt.setOptional(O,X,"bindMatrixInverse");const _e=X.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),Qt.setValue(O,"boneTexture",_e.boneTexture,Bt))}X.isBatchedMesh&&(Qt.setOptional(O,X,"batchingTexture"),Qt.setValue(O,"batchingTexture",X._matricesTexture,Bt),Qt.setOptional(O,X,"batchingIdTexture"),Qt.setValue(O,"batchingIdTexture",X._indirectTexture,Bt),Qt.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&Qt.setValue(O,"batchingColorTexture",X._colorsTexture,Bt));const fn=q.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&j.update(X,q,ze),(ei||Tt.receiveShadow!==X.receiveShadow)&&(Tt.receiveShadow=X.receiveShadow,Qt.setValue(O,"receiveShadow",X.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(Ue.envMapIntensity.value=U.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=B0()),ei){if(Qt.setValue(O,"toneMappingExposure",P.toneMappingExposure),Tt.needsLights&&M_(Ue,ui),mt&&V.fog===!0&&ct.refreshFogUniforms(Ue,mt),ct.refreshMaterialUniforms(Ue,V,lt,Et,T.state.transmissionRenderTarget[w.id]),Tt.needsLights&&Tt.numLightProbeGrids>0){const _e=v;let Le=0;for(const zn of T.state.lightProbeGridArray)zn.texture!==null&&(_e.textures[Le]=zn.texture,_e.min[Le]=zn.boundingBox.min,_e.max[Le]=zn.boundingBox.max,_e.resolution[Le]=zn.resolution,Le++);for(const zn in _e)_e[zn].length=Le;Ue.probesSH.value=_e.textures,Ue.probesMin.value=_e.min,Ue.probesMax.value=_e.max,Ue.probesResolution.value=_e.resolution}or.upload(O,Mh(Tt),Ue,Bt)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(or.upload(O,Mh(Tt),Ue,Bt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Qt.setValue(O,"center",X.center),Qt.setValue(O,"modelViewMatrix",X.modelViewMatrix),Qt.setValue(O,"normalMatrix",X.normalMatrix),Qt.setValue(O,"modelMatrix",X.matrixWorld),V.uniformsGroups!==void 0){const _e=V.uniformsGroups;for(let Le=0,zn=_e.length;Le<zn;Le++){const Eh=_e[Le];Rt.update(Eh,ze),Rt.bind(Eh,ze)}}return ze}function M_(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function S_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(w,U,q){const V=Ut.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Ut.get(w.texture).__webglTexture=U,Ut.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){const q=Ut.get(w);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,q=0){J=w,k=U,B=q;let V=null,X=!1,mt=!1;if(w){const ft=Ut.get(w);if(ft.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(O.FRAMEBUFFER,ft.__webglFramebuffer),tt.copy(w.viewport),gt.copy(w.scissor),Pt=w.scissorTest,_t.viewport(tt),_t.scissor(gt),_t.setScissorTest(Pt),H=-1;return}else if(ft.__webglFramebuffer===void 0)Bt.setupRenderTarget(w);else if(ft.__hasExternalTextures)Bt.rebindTextures(w,Ut.get(w.texture).__webglTexture,Ut.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const zt=w.depthTexture;if(ft.__boundDepthTexture!==zt){if(zt!==null&&Ut.has(zt)&&(w.width!==zt.image.width||w.height!==zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(w)}}const yt=w.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(mt=!0);const At=Ut.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(At[U])?V=At[U][q]:V=At[U],X=!0):w.samples>0&&Bt.useMultisampledRTT(w)===!1?V=Ut.get(w).__webglMultisampledFramebuffer:Array.isArray(At)?V=At[q]:V=At,tt.copy(w.viewport),gt.copy(w.scissor),Pt=w.scissorTest}else tt.copy(Ct).multiplyScalar(lt).floor(),gt.copy($t).multiplyScalar(lt).floor(),Pt=qt;if(q!==0&&(V=I),_t.bindFramebuffer(O.FRAMEBUFFER,V)&&_t.drawBuffers(w,V),_t.viewport(tt),_t.scissor(gt),_t.setScissorTest(Pt),X){const ft=Ut.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,ft.__webglTexture,q)}else if(mt){const ft=U;for(let yt=0;yt<w.textures.length;yt++){const At=Ut.get(w.textures[yt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+yt,At.__webglTexture,q,ft)}}else if(w!==null&&q!==0){const ft=Ut.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ft.__webglTexture,q)}H=-1};function yh(w){const U=Ut.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=pe.textureFormatReadable(w.format),U.__typeReadable=pe.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,q,V,X,mt,bt,ft=0){if(!(w&&w.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(yt=yt[bt],Array.isArray(yt)&&(yt=yt[0])),yt){_t.bindFramebuffer(O.FRAMEBUFFER,yt);try{const At=w.textures[ft],zt=At.format,Yt=At.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ft);const wt=yh(At);if(wt.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-V&&q>=0&&q<=w.height-X&&O.readPixels(U,q,V,X,at.convert(zt),at.convert(Yt),mt)}finally{const At=J!==null?Ut.get(J).__webglFramebuffer:null;_t.bindFramebuffer(O.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(w,U,q,V,X,mt,bt,ft=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(yt=yt[bt],Array.isArray(yt)&&(yt=yt[0])),yt)if(U>=0&&U<=w.width-V&&q>=0&&q<=w.height-X){_t.bindFramebuffer(O.FRAMEBUFFER,yt);const At=w.textures[ft],zt=At.format,Yt=At.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ft);const wt=yh(At);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Kt),O.bufferData(O.PIXEL_PACK_BUFFER,mt.byteLength,O.STREAM_READ),O.readPixels(U,q,V,X,at.convert(zt),at.convert(Yt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const ve=J!==null?Ut.get(J).__webglFramebuffer:null;_t.bindFramebuffer(O.FRAMEBUFFER,ve);const he=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await ru(O,he,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Kt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,mt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Kt),O.deleteSync(he),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,q=0){const V=Math.pow(2,-q),X=Math.floor(w.image.width*V),mt=Math.floor(w.image.height*V),bt=U!==null?U.x:0,ft=U!==null?U.y:0;Bt.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,bt,ft,X,mt),_t.unbindTexture()},this.copyTextureToTexture=function(w,U,q=null,V=null,X=0,mt=0){let bt,ft,yt,At,zt,Yt,wt,Kt,ve;const he=w.isCompressedTexture?w.mipmaps[mt]:w.image;if(q!==null)bt=q.max.x-q.min.x,ft=q.max.y-q.min.y,yt=q.isBox3?q.max.z-q.min.z:1,At=q.min.x,zt=q.min.y,Yt=q.isBox3?q.min.z:0;else{const Qt=Math.pow(2,-X);bt=Math.floor(he.width*Qt),ft=Math.floor(he.height*Qt),w.isDataArrayTexture?yt=he.depth:w.isData3DTexture?yt=Math.floor(he.depth*Qt):yt=1,At=0,zt=0,Yt=0}V!==null?(wt=V.x,Kt=V.y,ve=V.z):(wt=0,Kt=0,ve=0);const ce=at.convert(U.format),Be=at.convert(U.type);let Tt;U.isData3DTexture?(Bt.setTexture3D(U,0),Tt=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Bt.setTexture2DArray(U,0),Tt=O.TEXTURE_2D_ARRAY):(Bt.setTexture2D(U,0),Tt=O.TEXTURE_2D),_t.activeTexture(O.TEXTURE0),_t.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),_t.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_t.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const qe=_t.getParameter(O.UNPACK_ROW_LENGTH),ie=_t.getParameter(O.UNPACK_IMAGE_HEIGHT),hi=_t.getParameter(O.UNPACK_SKIP_PIXELS),ze=_t.getParameter(O.UNPACK_SKIP_ROWS),vr=_t.getParameter(O.UNPACK_SKIP_IMAGES);_t.pixelStorei(O.UNPACK_ROW_LENGTH,he.width),_t.pixelStorei(O.UNPACK_IMAGE_HEIGHT,he.height),_t.pixelStorei(O.UNPACK_SKIP_PIXELS,At),_t.pixelStorei(O.UNPACK_SKIP_ROWS,zt),_t.pixelStorei(O.UNPACK_SKIP_IMAGES,Yt);const ei=w.isDataArrayTexture||w.isData3DTexture,ui=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){const Qt=Ut.get(w),Ue=Ut.get(U),fn=Ut.get(Qt.__renderTarget),_e=Ut.get(Ue.__renderTarget);_t.bindFramebuffer(O.READ_FRAMEBUFFER,fn.__webglFramebuffer),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Le=0;Le<yt;Le++)ei&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ut.get(w).__webglTexture,X,Yt+Le),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ut.get(U).__webglTexture,mt,ve+Le)),O.blitFramebuffer(At,zt,At+bt,zt+ft,wt,Kt,wt+bt,Kt+ft,O.DEPTH_BUFFER_BIT,O.NEAREST);_t.bindFramebuffer(O.READ_FRAMEBUFFER,null),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||Ut.has(w)){const Qt=Ut.get(w),Ue=Ut.get(U);_t.bindFramebuffer(O.READ_FRAMEBUFFER,A),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,F);for(let fn=0;fn<yt;fn++)ei?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Qt.__webglTexture,X,Yt+fn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Qt.__webglTexture,X),ui?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ue.__webglTexture,mt,ve+fn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ue.__webglTexture,mt),X!==0?O.blitFramebuffer(At,zt,At+bt,zt+ft,wt,Kt,wt+bt,Kt+ft,O.COLOR_BUFFER_BIT,O.NEAREST):ui?O.copyTexSubImage3D(Tt,mt,wt,Kt,ve+fn,At,zt,bt,ft):O.copyTexSubImage2D(Tt,mt,wt,Kt,At,zt,bt,ft);_t.bindFramebuffer(O.READ_FRAMEBUFFER,null),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ui?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Tt,mt,wt,Kt,ve,bt,ft,yt,ce,Be,he.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Tt,mt,wt,Kt,ve,bt,ft,yt,ce,he.data):O.texSubImage3D(Tt,mt,wt,Kt,ve,bt,ft,yt,ce,Be,he):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,mt,wt,Kt,bt,ft,ce,Be,he.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,mt,wt,Kt,he.width,he.height,ce,he.data):O.texSubImage2D(O.TEXTURE_2D,mt,wt,Kt,bt,ft,ce,Be,he);_t.pixelStorei(O.UNPACK_ROW_LENGTH,qe),_t.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ie),_t.pixelStorei(O.UNPACK_SKIP_PIXELS,hi),_t.pixelStorei(O.UNPACK_SKIP_ROWS,ze),_t.pixelStorei(O.UNPACK_SKIP_IMAGES,vr),mt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(Tt),_t.unbindTexture()},this.initRenderTarget=function(w){Ut.get(w).__webglFramebuffer===void 0&&Bt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Bt.setTextureCube(w,0):w.isData3DTexture?Bt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Bt.setTexture2DArray(w,0):Bt.setTexture2D(w,0),_t.unbindTexture()},this.resetState=function(){k=0,B=0,J=null,_t.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}async function ao(i){const t=new Uint8Array(i),e=new DataView(i);let n=8,s=0,r=0,a=0,o=0,l=0;const c=[];for(;n<t.length;){const x=e.getUint32(n),p=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]);if(p==="IHDR")s=e.getUint32(n+8),r=e.getUint32(n+12),a=t[n+16],o=t[n+17],l=t[n+20];else if(p==="IDAT")c.push(t.subarray(n+8,n+8+x));else if(p==="IEND")break;n+=12+x}if(a!==8||o!==2&&o!==6||l)throw new Error("Unsupported terrain image format");const u=o===2?3:4,d=new Blob(c).stream().pipeThrough(new DecompressionStream("deflate")),h=new Uint8Array(await new Response(d).arrayBuffer()),f=s*u,m=new Uint8Array(f*r);for(let x=0;x<r;x++){const p=h[x*(f+1)],g=x*(f+1)+1,M=x*f;for(let S=0;S<f;S++){const v=S>=u?m[M+S-u]:0,b=x>0?m[M-f+S]:0,T=S>=u&&x>0?m[M-f+S-u]:0;let _=h[g+S];if(p===1)_+=v;else if(p===2)_+=b;else if(p===3)_+=v+b>>1;else if(p===4){const y=Math.abs(b-T),L=Math.abs(v-T),P=Math.abs(v+b-2*T);_+=y<=L&&y<=P?v:L<=P?b:T}m[M+S]=_&255}}return{width:s,height:r,channels:u,data:m}}const k0=["height.png","relief.webp","cover.png","ground.webp","lights.webp","roads.bin","buildings.bin","map.json","precinct.webp","flood.json","flood-1974.png","flood-2017.png","flood-2022.png","flood-aep1.png","flood-aep2.png","flood-aep5.png"];function G0(i,t=""){const e=s=>i+s+(t?"?v="+t:""),n={};for(const s of k0){const r=/^flood-(.+)\.png$/.exec(s);r&&(n[r[1]]=e(s))}return{height:e("height.png"),relief:e("relief.webp"),cover:e("cover.png"),ground:e("ground.webp"),lights:e("lights.webp"),roads:e("roads.bin"),buildings:e("buildings.bin"),map:e("map.json"),precinct:e("precinct.webp"),flood:e("flood.json"),floodLevels:n}}const Cc=1,H0=2,Pc=4,V0=8;function W0(i){const t=new DataView(i);if(t.getUint32(0,!0)!==827475788)throw new Error("Unexpected road data");const e=t.getUint32(4,!0),n=new Array(e);let s=8;for(let r=0;r<e;r++){const a=t.getUint8(s),o=t.getUint8(s+1),l=t.getUint16(s+2,!0),c=t.getUint16(s+4,!0);let u=t.getInt32(s+6,!0),d=t.getInt32(s+10,!0);s+=14;const h=new Float32Array(c*2);h[0]=u/4,h[1]=d/4;for(let f=1;f<c;f++)u+=t.getInt16(s,!0),d+=t.getInt16(s+2,!0),s+=4,h[f*2]=u/4,h[f*2+1]=d/4;n[r]={cls:a,flags:o,name:l,pts:h}}return n}function X0(i,t){const e=new DataView(i);if(e.getUint32(0,!0)!==826427212)throw new Error("Unexpected building data");const n=e.getUint32(4,!0),s=new Uint16Array(i,8,n),r=new Uint16Array(i,8+2*n,n),a=new Uint8Array(i,8+4*n,5*n),o={count:n,x:new Float32Array(n),z:new Float32Array(n),w:new Float32Array(n),d:new Float32Array(n),angle:new Float32Array(n),eave:new Float32Array(n),roof:new Float32Array(n)};for(let l=0;l<n;l++)o.x[l]=(s[l]/65535-.5)*t[0],o.z[l]=(r[l]/65535-.5)*t[1],o.w[l]=a[l]/2,o.d[l]=a[n+l]/2,o.angle[l]=a[2*n+l]/256*Math.PI,o.eave[l]=a[3*n+l]/4,o.roof[l]=a[4*n+l]/4;return o}function q0(i,t,e){const n=new Uint8Array(t*e),s=document.createElement("canvas");s.width=t,s.height=e;const r=s.getContext("2d");if(!r)return n;r.drawImage(i.image,0,0,t,e);const a=r.getImageData(0,0,t,e).data;for(let o=0;o<t*e;o++)n[o]=a[o*4];return n}async function Y0(i,t,e){let s=0;const r=_=>y=>(t(++s/9,_),y),a=async(_,y)=>{const L=await fetch(_,{signal:e});if(!L.ok)throw new Error(`Could not load ${y}`);return L},o=_=>new xd().loadAsync(_);t(0,"Fetching map data");const[l,c,u,d,h,f,m,x,p]=await Promise.all([a(i.map,"the map data").then(_=>_.json()).then(r("Suburbs and boundaries")),a(i.height,"the terrain").then(_=>_.arrayBuffer()).then(ao).then(r("Terrain")),o(i.ground).then(r("Ground texture")),o(i.relief).then(r("Relief")),o(i.lights).then(r("City lights")),a(i.roads,"the streets").then(_=>_.arrayBuffer()).then(W0).then(r("Streets")),a(i.buildings,"the buildings").then(_=>_.arrayBuffer()).then(r("Buildings")),a(i.cover,"the tree cover").then(_=>_.arrayBuffer()).then(ao).then(r("Bushland")),o(i.precinct).then(r("Council precinct"))]),g=c.width*c.height,M=new Float32Array(g),S=c.channels;for(let _=0;_<g;_++)M[_]=(c.data[_*S]<<8|c.data[_*S+1])/l.meta.heightScale-l.meta.heightOffset;u.colorSpace=Te;for(const _ of[u,d,h])_.generateMipmaps=!0,_.minFilter=An;const v=x.width*x.height,b=new Uint8Array(v);for(let _=0;_<v;_++)b[_]=x.data[_*x.channels]>127?1:0;const T={w:x.width,h:x.height,wooded:b,built:q0(h,x.width,x.height)};return{map:l,heights:M,ground:u,relief:d,lights:h,roads:f,buildings:X0(m,l.meta.size),cover:T,precinctGround:p}}const cr=new It;function G(i){return cr.set(i),[cr.r,cr.g,cr.b]}function Jt(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function K0(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function Oi(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class hr{constructor(){st(this,"pos",[]);st(this,"nor",[]);st(this,"col",[]);st(this,"glo",[]);st(this,"ox",0);st(this,"oy",0);st(this,"oz",0);st(this,"c",1);st(this,"s",0)}get vertexCount(){return this.pos.length/3}frame(t=0,e=0,n=0,s=0){return this.ox=t,this.oy=e,this.oz=n,this.c=Math.cos(s),this.s=Math.sin(s),this}wx(t,e){return this.ox+t*this.c+e*this.s}wz(t,e){return this.oz-t*this.s+e*this.c}tri(t,e,n,s,r,a,o,l,c,u,d=0){const h=this.wx(t,n),f=this.wz(t,n),m=this.oy+e,x=this.wx(s,a),p=this.wz(s,a),g=this.oy+r,M=this.wx(o,c),S=this.wz(o,c),v=this.oy+l,b=x-h,T=g-m,_=p-f,y=M-h,L=v-m,P=S-f;let R=T*P-_*L,D=_*y-b*P,I=b*L-T*y;const A=Math.hypot(R,D,I)||1;R/=A,D/=A,I/=A,this.pos.push(h,m,f,x,g,p,M,v,S),this.nor.push(R,D,I,R,D,I,R,D,I),this.col.push(u[0],u[1],u[2],u[0],u[1],u[2],u[0],u[1],u[2]),this.glo.push(d,d,d)}quad(t,e,n,s,r,a,o,l,c,u,d,h,f,m=0){this.tri(t,e,n,s,r,a,o,l,c,f,m),this.tri(t,e,n,o,l,c,u,d,h,f,m)}box(t,e,n,s,r,a,o,l=void 0,c=null,u=0){this.quad(t,e,a,s,e,a,s,r,a,t,r,a,o,u),this.quad(s,e,n,t,e,n,t,r,n,s,r,n,o,u),this.quad(s,e,a,s,e,n,s,r,n,s,r,a,o,u),this.quad(t,e,n,t,e,a,t,r,a,t,r,n,o,u),l!==null&&this.quad(t,r,a,s,r,a,s,r,n,t,r,n,l??o,u),c&&this.quad(t,e,n,s,e,n,s,e,a,t,e,a,c,u)}cyl(t,e,n,s,r,a,o,l,c=null,u=0){const d=e+a;for(let h=0;h<o;h++){const f=h/o*Math.PI*2,m=(h+1)/o*Math.PI*2,x=Math.cos(f),p=Math.sin(f),g=Math.cos(m),M=Math.sin(m);r>1e-4?(this.quad(t+x*s,e,n+p*s,t+x*r,d,n+p*r,t+g*r,d,n+M*r,t+g*s,e,n+M*s,l,u),c&&this.tri(t,d,n,t+g*r,d,n+M*r,t+x*r,d,n+p*r,c,u)):this.tri(t+x*s,e,n+p*s,t,d,n,t+g*s,e,n+M*s,l,u)}}blob(t,e,n,s,r,a,o,l,c,u,d=0){const h=u??c;for(let f=0;f<l;f++){const m=f/l*Math.PI,x=(f+1)/l*Math.PI,p=Math.cos(m),g=Math.cos(x),M=Math.sin(m),S=Math.sin(x),v=K0(c,h,1-(f+.5)/l);for(let b=0;b<o;b++){const T=b/o*Math.PI*2,_=(b+1)/o*Math.PI*2,y=Math.cos(T),L=Math.sin(T),P=Math.cos(_),R=Math.sin(_),D=t+y*M*s,I=e+p*r,A=n+L*M*a,F=t+P*M*s,k=n+R*M*a,B=t+y*S*s,J=e+g*r,H=n+L*S*a,Y=t+P*S*s,tt=n+R*S*a;f>0&&this.tri(D,I,A,F,I,k,Y,J,tt,v,d),f<l-1&&this.tri(D,I,A,Y,J,tt,B,J,H,v,d)}}}walls(t,e,n,s,r=0){const a=t.length/2,o=ur(t)>0;for(let l=0;l<a;l++){const c=(l+1)%a,u=t[l*2],d=t[l*2+1],h=t[c*2],f=t[c*2+1];o?this.quad(h,e,f,u,e,d,u,n,d,h,n,f,s,r):this.quad(u,e,d,h,e,f,h,n,f,u,n,d,s,r)}}cap(t,e,n,s=0){const r=t.length/2,a=[];for(let l=0;l<r;l++)a.push(new Dt(t[l*2],t[l*2+1]));const o=js.triangulateShape(a,[]);for(const l of o){const c=a[l[0]],u=a[l[1]],d=a[l[2]];(u.x-c.x)*(d.y-c.y)-(u.y-c.y)*(d.x-c.x)>0?this.tri(c.x,e,c.y,d.x,e,d.y,u.x,e,u.y,n,s):this.tri(c.x,e,c.y,u.x,e,u.y,d.x,e,d.y,n,s)}}build(){const t=new Me;return t.setAttribute("position",new Wt(new Float32Array(this.pos),3)),t.setAttribute("normal",new Wt(new Float32Array(this.nor),3)),t.setAttribute("color",new Wt(new Float32Array(this.col),3)),t.setAttribute("glow",new Wt(new Float32Array(this.glo),1)),t.computeBoundingSphere(),t.computeBoundingBox(),this.pos=[],this.nor=[],this.col=[],this.glo=[],t}}function ur(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}const Qn={value:0};function Lc(i={}){const t=new Sn({vertexColors:!0,roughness:i.roughness??.86,metalness:0,side:i.side??Ge}),e=new It(i.glowColor??16761722);return t.onBeforeCompile=n=>{n.uniforms.uNight=Qn,n.uniforms.uGlowColor={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float glow;
varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;
uniform float uNight;
uniform vec3 uGlowColor;`).replace("#include <emissivemap_fragment>",i.ownGlow?`#include <emissivemap_fragment>
totalEmissiveRadiance += (vGlow < 0.0 ? vColor.rgb * -vGlow : uGlowColor * vGlow) * uNight * 2.4;`:`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlowColor * vGlow * uNight * 2.4;`)},t.customProgramCacheKey=()=>i.ownGlow?"inverloch-model-own":"inverloch-model",t}async function Z0(i,t){const e=await fetch(i,{signal:t});if(!e.ok)throw new Error("Could not load the flood scenarios");return e.json()}const Dc=8;class $0{constructor(t,e,n,s){st(this,"mesh");st(this,"drop",{value:0});st(this,"time");st(this,"current","");st(this,"level");st(this,"wet");this.hf=t,this.info=e,this.levelUrls=s,this.time=n;const r=new Sn({color:16777215,roughness:.22,metalness:0,transparent:!0,depthWrite:!1});r.onBeforeCompile=a=>{a.uniforms.uDrop=this.drop,a.uniforms.uTime=this.time,a.uniforms.uNight=Qn,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
attribute float aWet;
attribute float aGround;
uniform float uDrop;
varying float vWet;
varying float vDepth;
varying vec3 vWPos;`).replace("#include <begin_vertex>",`vec3 transformed = vec3(position.x, position.y - uDrop, position.z);
          vWet = aWet;
          vDepth = transformed.y - aGround;
          vWPos = transformed;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
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
          }`)},r.customProgramCacheKey=()=>"logan-flood",this.mesh=new se(new Me,r),this.mesh.visible=!1,this.mesh.renderOrder=40,this.mesh.name="flood",this.mesh.frustumCulled=!1}get shown(){return this.mesh.visible?this.current:""}async show(t,e){const n=this.levelUrls[t];if(!n)throw new Error("That flood has no water levels");const s=await fetch(n,{signal:e});if(!s.ok)throw new Error("Could not load the flood");const r=await ao(await s.arrayBuffer()),{hf:a}=this,[o]=this.info.grid,l=a.step,c=a.nx*a.nz,u=new Float32Array(c*3),d=new Float32Array(c),h=new Float32Array(c);for(let p=0;p<a.nz;p++)for(let g=0;g<a.nx;g++){const M=p*a.nx+g,S=(p*l*o+g*l)*r.channels;u[M*3]=a.xMin+g*a.dx,u[M*3+1]=(r.data[S]<<8|r.data[S+1])/this.info.levelScale-this.info.levelOffset,u[M*3+2]=a.zMin+p*a.dz,d[M]=r.data[S+2]>127?1:0,h[M]=a.y[M]}const f=[];for(let p=0;p<a.nz-1;p++)for(let g=0;g<a.nx-1;g++){const M=p*a.nx+g,S=M+1,v=M+a.nx,b=v+1;d[M]+d[S]+d[v]+d[b]>0&&f.push(M,v,S,S,v,b)}const m=new Me;m.setAttribute("position",new Wt(u,3)),m.setAttribute("aWet",new Wt(d,1)),m.setAttribute("aGround",new Wt(h,1));const x=new Float32Array(c*3);for(let p=0;p<c;p++)x[p*3+1]=1;m.setAttribute("normal",new Wt(x,3)),m.setIndex(f),this.mesh.geometry.dispose(),this.mesh.geometry=m,this.mesh.visible=!0,this.current=t,this.level=new Float32Array(c);for(let p=0;p<c;p++)this.level[p]=u[p*3+1];this.wet=d}hide(){this.mesh.visible=!1}surfaceAt(t,e,n=!1){const{hf:s}=this;if(!this.mesh.visible||!this.level||!this.wet||!s.inside(t,e))return-1/0;const r=Math.round((e-s.zMin)/s.dz)*s.nx+Math.round((t-s.xMin)/s.dx);if(!this.wet[r])return-1/0;const a=this.level[r]-(n?0:this.drop.value);return a>s.yAt(t,e)?a:-1/0}setLevel(t){this.drop.value=(1-te.clamp(t,0,1))*Dc}}const J0='.lgn-label{position:absolute;left:0;top:0;margin:0;white-space:nowrap;will-change:transform;font-family:Space Grotesk,system-ui,sans-serif;line-height:1}button.lgn-label{pointer-events:auto;cursor:pointer}.lgn-label--suburb{padding:4px 6px;border:0;background:none;color:#fff;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;text-shadow:0 1px 2px rgba(8,22,28,.95),0 0 6px rgba(8,22,28,.85),0 0 2px rgba(8,22,28,.9)}.lgn-label--suburb:hover{color:#ffd200}.lgn-label--water{color:#eaf7ff;font-size:13px;font-style:italic;font-weight:500;letter-spacing:.1em;text-shadow:0 1px 2px rgba(0,40,70,.95),0 0 8px rgba(0,40,70,.75)}.lgn-label--region{color:#ffffffe6;font-size:15px;font-weight:600;letter-spacing:.32em;text-transform:uppercase;text-shadow:0 1px 3px rgba(8,22,28,.85),0 0 10px rgba(8,22,28,.6)}.lgn-label--division{padding:4px 8px;border-radius:4px;background:#083a54eb;color:#d6f1ff;font-size:12px;font-weight:600}.lgn-label--road{padding:3px 6px;border-radius:3px;background:#fade8ef0;color:#3a2a06;font-size:10.5px;font-weight:600}.lgn-label--place,.lgn-label--nature,.lgn-label--station,.lgn-label--peak{padding:6px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:#0c1c24eb;color:#fff;font-size:12px;font-weight:600}.lgn-label--place:after,.lgn-label--nature:after,.lgn-label--station:after,.lgn-label--peak:after{content:"";position:absolute;left:50%;bottom:-9px;width:1px;height:8px;background:#fffc}.lgn-label--place:hover{background:#0b7d9c}.lgn-label--nature{background:#183826f0}.lgn-label--nature:hover{background:#2c7a4b}.lgn-label--station{padding:4px 8px;border-color:#0c1c2459;background:#f4f2eaf5;color:#1c2a30;font-size:11px}.lgn-label--station:hover{background:#fff}.lgn-label--peak{background:#402c14f0}.lgn-label--peak:before{content:"▲ ";color:#ffd200;font-size:9px}.lgn-label--peak:hover{background:#7a5520}.lgn-range{-moz-appearance:none;appearance:none;-webkit-appearance:none;height:28px;background:transparent;cursor:pointer}.lgn-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#b9d7e6,#4f9bc4 55%,#173f7a)}.lgn-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#b9d7e6,#4f9bc4 55%,#173f7a)}.lgn-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.lgn-range::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.lgn-range:focus-visible{outline:2px solid #ffd200;outline-offset:4px;border-radius:4px}',Ic={type:"change"},oo={type:"start"},Nc={type:"end"},dr=new Ga,Uc=new Mn,Q0=Math.cos(70*te.DEG2RAD),Ee=new z,Ze=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},lo=1e-6;class j0 extends bd{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ye.ROTATE,MIDDLE:Ye.DOLLY,RIGHT:Ye.PAN},this.touches={ONE:kn.ROTATE,TWO:kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new Xn,this._lastTargetPosition=new z,this._quat=new Xn().setFromUnitVectors(t.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nr,this._sphericalDelta=new nr,this._scale=1,this._panOffset=new z,this._rotateStart=new Dt,this._rotateEnd=new Dt,this._rotateDelta=new Dt,this._panStart=new Dt,this._panEnd=new Dt,this._panDelta=new Dt,this._dollyStart=new Dt,this._dollyEnd=new Dt,this._dollyDelta=new Dt,this._dollyDirection=new z,this._mouse=new Dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eg.bind(this),this._onPointerDown=tg.bind(this),this._onPointerUp=ng.bind(this),this._onContextMenu=cg.bind(this),this._onMouseWheel=rg.bind(this),this._onKeyDown=ag.bind(this),this._onTouchStart=og.bind(this),this._onTouchMove=lg.bind(this),this._onMouseDown=ig.bind(this),this._onMouseMove=sg.bind(this),this._interceptControlDown=hg.bind(this),this._interceptControlUp=ug.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ne.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ic),this.update(),this.state=ne.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ee.copy(e).sub(this.target),Ee.applyQuaternion(this._quat),this._spherical.setFromVector3(Ee),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ze:n>Math.PI&&(n-=Ze),s<-Math.PI?s+=Ze:s>Math.PI&&(s-=Ze),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ee.setFromSpherical(this._spherical),Ee.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ee),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ee.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ee.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(dr.origin.copy(this.object.position),dr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dr.direction))<Q0?this.object.lookAt(this.target):(Uc.setFromNormalAndCoplanarPoint(this.object.up,this.target),dr.intersectPlane(Uc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>lo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>lo||this._lastTargetPosition.distanceToSquared(this.target)>lo?(this.dispatchEvent(Ic),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ze/60*this.autoRotateSpeed*t:Ze/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ee.setFromMatrixColumn(e,0),Ee.multiplyScalar(-t),this._panOffset.add(Ee)}_panUp(t,e){this.screenSpacePanning===!0?Ee.setFromMatrixColumn(e,1):(Ee.setFromMatrixColumn(e,0),Ee.crossVectors(this.object.up,Ee)),Ee.multiplyScalar(t),this._panOffset.add(Ee)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ee.copy(s).sub(this.target);let r=Ee.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function tg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function eg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ng(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nc),this.state=ne.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ig(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ne.DOLLY;break;case Ye.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}break;case Ye.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(oo)}function sg(i){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function rg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(i.preventDefault(),this.dispatchEvent(oo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Nc))}function ag(i){this.enabled!==!1&&this._handleKeyDown(i)}function og(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case kn.ROTATE:if(this.enableRotate===!1){this.state=ne.NONE;break}this._handleTouchStartRotate(i),this.state=ne.TOUCH_ROTATE;break;case kn.PAN:if(this.enablePan===!1){this.state=ne.NONE;break}this._handleTouchStartPan(i),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case kn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ne.TOUCH_DOLLY_PAN;break;case kn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(oo)}function lg(i){switch(this._trackPointer(i),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ne.NONE}}function cg(i){this.enabled!==!1&&i.preventDefault()}function hg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ug(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const co=new Mn,fr=new Yl,Bi=new Dt,ho=new z;class dg extends j0{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Ye.PAN,MIDDLE:Ye.DOLLY,RIGHT:Ye.ROTATE},this.touches={ONE:kn.PAN,TWO:kn.DOLLY_ROTATE},this._panWorldStart=new z}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;co.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();Bi.x=(t.clientX-n.left)/n.width*2-1,Bi.y=-((t.clientY-n.top)/n.height)*2+1,fr.setFromCamera(Bi,this.object),fr.ray.intersectPlane(co,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const n=this.domElement.getBoundingClientRect();Bi.x=(t.clientX-n.left)/n.width*2-1,Bi.y=-((t.clientY-n.top)/n.height)*2+1,fr.setFromCamera(Bi,this.object),fr.ray.intersectPlane(co,ho)&&(ho.sub(this._panWorldStart),this._panOffset.copy(ho).negate(),this.update())}}const Un={day:{sunDir:[-.42,.78,-.46],sunColor:16774109,sunIntensity:3.1,hemiSky:13953279,hemiGround:9280120,hemiIntensity:1.25,zenith:4163279,horizon:13625078,below:1582638,sunGlow:1,shallow:7129789,deep:1201018,waterSky:12903158,foam:1,night:0,exposure:1},golden:{sunDir:[-.84,.22,.36],sunColor:16756848,sunIntensity:3,hemiSky:15781309,hemiGround:6973032,hemiIntensity:1.15,zenith:4153244,horizon:16760970,below:1645863,sunGlow:1.6,shallow:7320486,deep:1390942,waterSky:16763040,foam:.9,night:.25,exposure:1},night:{sunDir:[.38,.72,-.42],sunColor:10467071,sunIntensity:.5,hemiSky:3821436,hemiGround:1053980,hemiIntensity:.55,zenith:396056,horizon:1582922,below:263948,sunGlow:.5,shallow:1920092,deep:331552,waterSky:2242140,foam:.45,night:1,exposure:1.05}},fg=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
  gl_Position = p.xyww;
}`,pg=`
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
}`;class mg{constructor(t,e,n){st(this,"sun",new yd(16777215,3));st(this,"hemi",new vd(16777215,8947848,1));st(this,"sky");st(this,"sunDir",new z);st(this,"horizon",new It);st(this,"skyUniforms");st(this,"from");st(this,"to");st(this,"t",1);st(this,"mode","day");this.renderer=t,this.water=e,this.from=this.to=Un.day,this.skyUniforms={uZenith:{value:new It},uHorizon:{value:new It},uBelow:{value:new It},uSunDir:{value:new z},uSunColor:{value:new It},uSunGlow:{value:1},uNight:{value:0}},this.sky=new se(new Za(1,32,16),new $n({uniforms:this.skyUniforms,vertexShader:fg,fragmentShader:pg,side:ke,depthWrite:!1,depthTest:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,n>0&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(n,n)),this.apply(1)}set(t,e=!1){t===this.mode&&this.t>=1||(this.from=this.snapshot(),this.to=Un[t],this.mode=t,this.t=e?1:0,this.apply(this.t))}update(t){return this.t>=1?!1:(this.t=Math.min(1,this.t+t/1.4),this.apply(this.t),!0)}aimShadow(t,e){if(!this.sun.castShadow)return;const n=te.clamp(e*.7,140,2400),s=this.sun.shadow,r=s.camera,a=n*2/s.mapSize.x,o=Math.round(t.x/a)*a,l=Math.round(t.z/a)*a,c=n*2.4+300;this.sun.target.position.set(o,0,l),this.sun.position.set(o,0,l).addScaledVector(this.sunDir,c),this.sun.target.updateMatrixWorld(),r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=1,r.far=c*2+400,r.updateProjectionMatrix(),s.bias=-.3/(r.far-r.near),s.normalBias=te.clamp(a*1.6,.06,1.2))}setSolar(t,e={rise:360,set:1230,noon:70}){const n=(t%1440+1440)%1440,{rise:s,set:r}=e;let a,o;if(n>=s&&n<=r)o=(n-s)/(r-s),a=Math.sin(Math.PI*o)*e.noon;else{const x=((n<s?n+1440:n)-r)/(1440-(r-s));o=x<.5?1:0,a=-Math.sin(Math.PI*x)*40}const l=te.degToRad(110*(1-2*o)),c=te.degToRad(Math.max(a,5)),u=[Math.sin(l)*Math.cos(c),Math.sin(c),-Math.cos(l)*Math.cos(c)];let d;a>=25?d=Un.day:a>=6?d=uo(Un.golden,Un.day,(a-6)/19):a>=-6?d=uo(Un.night,Un.golden,(a+6)/12):d=Un.night;const h=te.clamp((2-a)/6,0,1),f=Un.night.sunDir,m=[u[0]+(f[0]-u[0])*h,u[1]+(f[1]-u[1])*h,u[2]+(f[2]-u[2])*h];this.from=this.to={...d,sunDir:m},this.mode=a>=25?"day":a>=-6?"golden":"night",this.apply(1)}snapshot(){return uo(this.from,this.to,gg(this.t))}apply(t){this.t=t;const e=this.snapshot();this.sunDir.set(...e.sunDir).normalize(),this.sun.color.set(e.sunColor),this.sun.intensity=e.sunIntensity,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const n=this.skyUniforms;if(n.uZenith.value.set(e.zenith),n.uHorizon.value.set(e.horizon),n.uBelow.value.set(e.below),n.uSunDir.value.copy(this.sunDir),n.uSunColor.value.set(e.sunColor),n.uSunGlow.value=e.sunGlow,n.uNight.value=e.night,this.horizon.set(e.horizon),this.water){const s=this.water.uniforms;s.uSunDir.value.copy(this.sunDir),s.uSunColor.value.set(e.sunColor).multiplyScalar(Math.min(1,e.sunIntensity/2.5)),s.uShallow.value.set(e.shallow),s.uDeep.value.set(e.deep),s.uSky.value.set(e.waterSky),s.uFoam.value=e.foam,this.water.skirt.material.color.set(e.deep).lerp(new It(e.shallow),.35)}Qn.value=e.night,this.renderer.toneMappingExposure=e.exposure}}function gg(i){return i*i*(3-2*i)}function uo(i,t,e){if(e<=0)return i;if(e>=1)return t;const n=(r,a)=>new It(r).lerp(new It(a),e).getHex(),s=(r,a)=>r+(a-r)*e;return{sunDir:[s(i.sunDir[0],t.sunDir[0]),s(i.sunDir[1],t.sunDir[1]),s(i.sunDir[2],t.sunDir[2])],sunColor:n(i.sunColor,t.sunColor),sunIntensity:s(i.sunIntensity,t.sunIntensity),hemiSky:n(i.hemiSky,t.hemiSky),hemiGround:n(i.hemiGround,t.hemiGround),hemiIntensity:s(i.hemiIntensity,t.hemiIntensity),zenith:n(i.zenith,t.zenith),horizon:n(i.horizon,t.horizon),below:n(i.below,t.below),sunGlow:s(i.sunGlow,t.sunGlow),shallow:n(i.shallow,t.shallow),deep:n(i.deep,t.deep),waterSky:n(i.waterSky,t.waterSky),foam:s(i.foam,t.foam),night:s(i.night,t.night),exposure:s(i.exposure,t.exposure)}}const zi=2e3,fo=[15129800,13875354,12158312,15723750,12434098,14273200],po=[13224388,14868692,11843507,9409424,5987928,4672334,11035724,9280642],_g=new Float32Array([-.5,0,-.5,.5,0,-.5,.5,0,.5,-.5,0,.5,-.5,1,-.5,.5,1,-.5,.5,1,.5,-.5,1,.5,-.5,1,-.5,.5,1,-.5,.5,1,.5,-.5,1,.5,-.5,2,0,.5,2,0]),xg=new Float32Array([0,0,0,0,0,0,0,0,1,1,1,1,1,1]),vg=new Uint16Array([0,1,5,0,5,4,1,2,6,1,6,5,2,3,7,2,7,6,3,0,4,3,4,7,8,9,13,8,13,12,10,11,12,10,12,13,11,8,12,9,10,13]),Fc=`
attribute vec3 aPos;
attribute vec4 aDims; // width, eave height, depth, roof height
attribute vec4 aRot; // cos, sin, depth of the base below the centre ground, random seed
uniform float uRange;
uniform vec3 uEye; // the viewer's position; cameraPosition is the light's during the shadow pass
`,Oc=`
vec3 transformed;
vec3 lgLocal; // where the vertex is in the building's own frame: along its length, metres up the wall, across its depth
{
  float lgRoof = step(1.5, position.y);
  float lx = mix(position.x * aDims.x, sign(position.x) * max(aDims.x - aDims.z, 0.0) * 0.5, lgRoof);
  float lz = position.z * aDims.z * (1.0 - lgRoof);
  lgLocal = vec3(lx, min(position.y, 1.0) * aDims.y, lz);
  float lgGrow = 1.0 - smoothstep(uRange * 0.7, uRange, distance(uEye, aPos));
  float ly = (min(position.y, 1.0) * aDims.y + lgRoof * aDims.w) * lgGrow - (1.0 - step(0.01, position.y)) * aRot.z;
  transformed = vec3(aPos.x + lx * aRot.x - lz * aRot.y, aPos.y + ly, aPos.z + lx * aRot.y + lz * aRot.x);
}
`;function Bc(i){return new It(i)}function Mg(i,t){const e=new Sn({flatShading:!0,roughness:.86,metalness:0,side:Ge}),n=fo.map(Bc),s=po.map(Bc);e.onBeforeCompile=a=>{a.uniforms.uRange=i,a.uniforms.uEye=t,a.uniforms.uNight=Qn,a.uniforms.uWalls={value:n},a.uniforms.uRoofs={value:s},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
${Fc}
attribute float aPart;
uniform vec3 uWalls[${fo.length}];
uniform vec3 uRoofs[${po.length}];
varying vec3 vLgColor;
varying float vLgGlow;
varying vec3 vLgLocal;
varying vec3 vLgBox;
varying vec2 vLgWin;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = vec3(0.0, 1.0, 0.0);").replace("#include <begin_vertex>",`${Oc}
        {
          float seed = aRot.w;
          float large = step(650.0, aDims.x * aDims.z); // sheds and shops: pale metal roofs, plain walls
          vec3 wall = mix(uWalls[int(seed * ${fo.length}.0)], uWalls[4], large * 0.7);
          vec3 roof = mix(uRoofs[int(fract(seed * 7.31) * ${po.length}.0)], uRoofs[int(fract(seed * 3.7) * 3.0)], large);
          vLgColor = mix(wall, roof, aPart) * (0.92 + 0.16 * fract(seed * 13.7));
          vLgGlow = (1.0 - aPart) * step(0.42, fract(seed * 5.3)) * 0.5;
          // windows: on the walls of houses and other small buildings tall enough to have them
          vLgLocal = lgLocal;
          vLgBox = vec3(aDims.x * 0.5, aDims.y, aDims.z * 0.5);
          vLgWin = vec2((1.0 - aPart) * (1.0 - large) * step(2.3, aDims.y), seed);
        }`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLgColor;
varying float vLgGlow;
varying vec3 vLgLocal;
varying vec3 vLgBox;
varying vec2 vLgWin;
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
          float lgWhich = floor(lgCell) + floor(lgRow) * 17.0 + lgEnd * 31.0 + step(0.0, mix(vLgLocal.z, vLgLocal.x, lgEnd)) * 57.0;
          lgLit = lgGlass * step(0.6, fract(sin((lgWhich + vLgWin.y * 91.7) * 12.9898) * 43758.5453));
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.03, 0.05, 0.075), lgGlass * lgNear * 0.88);
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += vec3(1.0, 0.76, 0.48) * mix(vLgGlow, lgLit * 1.25, lgNear) * uNight * 1.6;`)},e.customProgramCacheKey=()=>"logan-building";const r=new $a({depthPacking:Ko});return r.onBeforeCompile=a=>{a.uniforms.uRange=i,a.uniforms.uEye=t,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
${Fc}`).replace("#include <begin_vertex>",Oc)},r.customProgramCacheKey=()=>"logan-building-depth",{mat:e,depth:r}}function Sg(i,t,e,n,s,r){const a=new ln;a.name="buildings";const o={value:n},l={value:new z},{mat:c,depth:u}=Mg(o,l),d=new Wt(_g,3),h=new Wt(xg,1),f=new Wt(vg,1),[m,x]=t.meta.size,p=Math.ceil(m/zi),g=new Map;let M=0;for(let T=0;T<i.count;T++){if(i.w[T]*i.d[T]<s)continue;const _=Math.floor((i.z[T]+x/2)/zi)*p+Math.floor((i.x[T]+m/2)/zi);let y=g.get(_);y||g.set(_,y=[]),y.push(T),M++}const S=Oi(4114),v=[];for(const[T,_]of g){const y=_.length,L=new Float32Array(y*3),P=new Float32Array(y*4),R=new Float32Array(y*4);let D=1/0,I=-1/0;for(let J=0;J<y;J++){const H=_[J],Y=i.x[H],tt=i.z[H],gt=i.w[H],Pt=i.d[H],K=Math.cos(i.angle[H]),nt=Math.sin(i.angle[H]),St=e.yAt(Y,tt);let Et=St;for(const[lt,Mt]of[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]])Et=Math.min(Et,e.yAt(Y+lt*gt*K-Mt*Pt*nt,tt+lt*gt*nt+Mt*Pt*K));L.set([Y,St,tt],J*3),P.set([gt,i.eave[H],Pt,Math.max(i.roof[H]-i.eave[H],0)],J*4),R.set([K,nt,St-Et+.4,S()],J*4),D=Math.min(D,Et),I=Math.max(I,St+i.roof[H])}const A=new Xl;A.setAttribute("position",d),A.setAttribute("aPart",h),A.setIndex(f),A.setAttribute("aPos",new ls(L,3)),A.setAttribute("aDims",new ls(P,4)),A.setAttribute("aRot",new ls(R,4)),A.instanceCount=y;const F=new z((T%p+.5)*zi-m/2,(D+I)/2,(Math.floor(T/p)+.5)*zi-x/2),k=Math.hypot(zi*.75,(I-D)/2)+60;A.boundingSphere=new rs(F,k);const B=new se(A,c);B.customDepthMaterial=u,B.castShadow=r,B.receiveShadow=r,B.visible=!1,a.add(B),v.push({mesh:B,centre:F,radius:k})}const b=yg(t,e,r);return b.visible=!1,a.add(b),{group:a,count:M+t.blocks.length,update(T){l.value.copy(T);let _=!1;for(const L of v){const P=T.distanceTo(L.centre)<n+L.radius;P!==L.mesh.visible&&(L.mesh.visible=P,_=!0)}const y=T.y<n*3;return y!==b.visible&&(b.visible=y,_=!0),_}}}function yg(i,t,e){const n=new hr,s=Oi(4131),r=[G(14605522),G(13224388),G(12172472),G(15328988)],a=[G(13618112),G(12434098),G(14275266)];for(const l of i.blocks){const c=l.p.length/2,u=new Array(c*2);let d=0,h=0,f=1/0;for(let x=0;x<c;x++){const p=l.p[x*2]/10,g=l.p[x*2+1]/10;u[x*2]=p,u[x*2+1]=g,d+=p/c,h+=g/c,f=Math.min(f,t.yAt(p,g))}const m=t.yAt(d,h)+l.e+(l.a-l.e)*.6;n.walls(u,f-.4,m,a[Math.floor(s()*a.length)],.22),n.cap(u,m,r[Math.floor(s()*r.length)])}const o=new se(n.build(),Lc({roughness:.84}));return o.castShadow=e,o.receiveShadow=e,o.name="blocks",o}const pr=1;class Eg{constructor(t,e,n,s,r,a){st(this,"nx");st(this,"nz");st(this,"y");st(this,"xMin");st(this,"zMin");st(this,"xMax");st(this,"zMax");st(this,"dx");st(this,"dz");st(this,"yMax");this.sizeX=s,this.sizeZ=r,this.step=a;const o=s/e,l=r/n;this.nx=Math.floor((e-1)/a)+1,this.nz=Math.floor((n-1)/a)+1,this.dx=o*a,this.dz=l*a,this.xMin=-s/2+o/2,this.zMin=-r/2+l/2,this.xMax=this.xMin+(this.nx-1)*this.dx,this.zMax=this.zMin+(this.nz-1)*this.dz,this.y=new Float32Array(this.nx*this.nz);let c=0;for(let u=0;u<this.nz;u++)for(let d=0;d<this.nx;d++){const h=t[u*a*e+d*a]*pr;this.y[u*this.nx+d]=h,h>c&&(c=h)}this.yMax=c}yAt(t,e){let n=(t-this.xMin)/this.dx,s=(e-this.zMin)/this.dz;n<0?n=0:n>this.nx-1.0001&&(n=this.nx-1.0001),s<0?s=0:s>this.nz-1.0001&&(s=this.nz-1.0001);const r=n|0,a=s|0,o=n-r,l=s-a,c=a*this.nx+r,u=this.y[c],d=this.y[c+1],h=this.y[c+this.nx],f=this.y[c+this.nx+1];return o+l<=1?u+(d-u)*o+(h-u)*l:f+(h-f)*(1-o)+(d-f)*(1-l)}metresAt(t,e){return this.yAt(t,e)/pr}inside(t,e,n=0){return t>this.xMin+n&&t<this.xMax-n&&e>this.zMin+n&&e<this.zMax-n}drape(t,e,n,s,r){const a=(t-this.xMin)/this.dx,o=(e-this.zMin)/this.dz,l=(n-this.xMin)/this.dx,c=(s-this.zMin)/this.dz,u=[],d=(f,m)=>{if(f===m)return;const x=Math.min(f,m),p=Math.max(f,m);for(let g=Math.floor(x)+1;g<p;g++)u.push((g-f)/(m-f))};d(a,l),d(o,c),d(a+o,l+c),u.sort((f,m)=>f-m);let h=0;for(const f of u){if(f-h<1e-4||f>.9999)continue;h=f;const m=t+(n-t)*f,x=e+(s-e)*f;r.push(m,this.yAt(m,x),x)}r.push(n,this.yAt(n,s),s)}}const bg=["suburb","water","region","road","division"],wg=["water","region","road","division"];class Tg{constructor(t,e,n){st(this,"items",[]);st(this,"v",new z);st(this,"visible",!0);st(this,"obstacles",[]);st(this,"hidden",new Set);this.layer=t;for(const s of[...e].sort((r,a)=>r.priority-a.priority)){const r=document.createElement(wg.includes(s.kind)?"span":"button");r instanceof HTMLButtonElement&&(r.type="button",r.tabIndex=-1,r.addEventListener("click",()=>n(s.id))),r.className=`lgn-label lgn-label--${s.kind}`,r.textContent=s.name,r.style.visibility="hidden",t.appendChild(r),this.items.push({def:s,el:r,w:0,h:0,shown:!1,centred:bg.includes(s.kind)})}}remeasure(){for(const t of this.items)t.w=0}setVisible(t){this.visible=t,this.layer.style.display=t?"":"none"}setKindVisible(t,e){e?this.hidden.delete(t):this.hidden.add(t)}setObstacles(t){this.obstacles=t}update(t,e,n,s=1/0){if(!this.visible)return;const r=[...this.obstacles];for(const a of this.items){a.w||(a.w=a.el.offsetWidth,a.h=a.el.offsetHeight);const o=a.def;this.v.set(o.x,o.y,o.z);const l=this.v.distanceTo(t.position);this.v.project(t);let c=!this.hidden.has(o.kind)&&this.v.z<1&&this.v.z>-1&&l<Math.min(o.maxDist??1/0,s)&&l>(o.minDist??0);const u=(this.v.x*.5+.5)*e,d=(-this.v.y*.5+.5)*n,h=u-a.w/2,f=a.centred?d-a.h/2:d-a.h-8,m=h+a.w,x=f+a.h;if(c&&(h<2||m>e-2||f<2||x>n-2)&&(c=!1),c){for(const p of r)if(h<p[2]+5&&m>p[0]-5&&f<p[3]+3&&x>p[1]-3){c=!1;break}}c&&(r.push([h,f,m,x]),a.el.style.transform=`translate3d(${Math.round(h)}px, ${Math.round(f)}px, 0)`),c!==a.shown&&(a.el.style.visibility=c?"visible":"hidden",a.shown=c)}}dispose(){for(const t of this.items)t.el.remove();this.items=[]}}const Ag=[{id:"council",name:"Logan City Council",kind:"place",lat:-27.64299,lon:153.10404,blurb:"The council's administration centre on Wembley Road, built around a courtyard. The survey puts its roof line about 10 metres up and the antenna on top at about 36 metres. The Logan Art Gallery is in its eastern wing.",view:[330,58,-150],priority:10,maxDist:3e4,stand:{from:[-40,35.5],at:[-5,49.5],pitch:.07}},{id:"lec",name:"Logan Entertainment Centre",kind:"place",lat:-27.643441,lon:153.102315,blurb:"The city's performance and events venue, next door to the council's administration centre.",view:[420,58,-150],priority:15,maxDist:5e3},{id:"pcyc",name:"PCYC Logan City",kind:"place",lat:-27.643802,lon:153.104141,blurb:"Police-Citizens Youth Club, behind the administration centre.",view:[360,58,-150],priority:16,maxDist:3500},{id:"gallery",name:"Logan Art Gallery",kind:"place",lat:-27.64274,lon:153.10439,blurb:"The city's art gallery. Queensland's community facilities data places it in the eastern wing of the council's administration centre.",view:[240,58,150],priority:16,maxDist:2600},{id:"civicpark",name:"Civic Centre Park",kind:"nature",lat:-27.64517,lon:153.10332,blurb:"Parkland and sports ovals south of the council's administration centre.",view:[520,58,10],priority:17,maxDist:2600},{id:"woodridgess",name:"Woodridge State School",kind:"place",lat:-27.64106,lon:153.10375,blurb:"State school on the north side of Wembley Road, opposite the council's administration centre.",view:[420,58,0],priority:18,maxDist:2200},{id:"specialschool",name:"Logan City Special School",kind:"place",lat:-27.6416,lon:153.10215,blurb:"Special school on Wembley Road, north-west of the council's administration centre.",view:[420,58,20],priority:18,maxDist:2200},{id:"police",name:"Logan Central Police Station",kind:"place",lat:-27.64589,lon:153.10493,blurb:"Police station south of the council's administration centre.",view:[420,58,-20],priority:18,maxDist:2200},{id:"wembleyfalls",name:"Wembley Falls Park",kind:"nature",lat:-27.64098,lon:153.10593,blurb:"Park beside the railway, north of Wembley Road.",view:[420,58,-15],priority:19,maxDist:2e3},{id:"hyperdome",name:"Logan Hyperdome",kind:"place",lat:-27.65885,lon:153.17124,blurb:"Shopping centre beside the Pacific Motorway. At about 98,700 square metres it is the largest building footprint in the city.",view:[1900,58,25],priority:11,maxDist:26e3},{id:"hospital",name:"Logan Hospital",kind:"place",lat:-27.67004,lon:153.14241,blurb:"The city's main public hospital. Its tallest block stands about 38 metres above the ground in the survey.",view:[1500,58,-15],priority:12,maxDist:22e3},{id:"griffith",name:"Griffith University",kind:"place",lat:-27.66509,lon:153.15262,blurb:"Griffith University's Logan campus.",view:[1700,58,10],priority:14,maxDist:16e3},{id:"springwood",name:"Springwood centre",kind:"place",lat:-27.61409,lon:153.12682,blurb:"Springwood's commercial centre beside the Pacific Motorway, around the Springwood Mall.",view:[1800,58,-25],priority:13,maxDist:2e4},{id:"grandplaza",name:"Grand Plaza",kind:"place",lat:-27.66299,lon:153.04097,blurb:"The main shopping centre at Browns Plains, and the third largest building footprint in the city.",view:[1700,58,20],priority:13,maxDist:2e4},{id:"butter",name:"Kingston Butter Factory",kind:"place",lat:-27.658,lon:153.12048,blurb:"The former butter factory, now a community arts venue, next to Kingston station.",view:[1100,60,30],priority:15,maxDist:12e3},{id:"mayes",name:"Mayes Cottage",kind:"place",lat:-27.65258,lon:153.11676,blurb:"Heritage house museum in Kingston.",view:[900,60,-30],priority:18,maxDist:7e3},{id:"beenleigh",name:"Beenleigh centre",kind:"place",lat:-27.71683,lon:153.20145,blurb:"Beenleigh's town centre: the courthouse, the library and the last station on the Beenleigh line.",view:[1900,58,15],priority:12,maxDist:24e3},{id:"yugambeh",name:"Yugambeh Museum",kind:"place",lat:-27.72409,lon:153.21749,blurb:"Museum of Yugambeh language and heritage.",view:[1100,60,-20],priority:18,maxDist:8e3},{id:"temple",name:"Chung Tian Temple",kind:"place",lat:-27.60327,lon:153.15125,blurb:"Buddhist temple set in bushland on the city's northern edge.",view:[1100,60,20],priority:17,maxDist:9e3},{id:"jimboomba",name:"Jimboomba centre",kind:"place",lat:-27.8295,lon:153.02645,blurb:"The town centre of Jimboomba, on the Mount Lindesay Highway in the south of the city.",view:[2200,58,-10],priority:12,maxDist:26e3},{id:"loganvillage",name:"Logan Village",kind:"place",lat:-27.76759,lon:153.10513,blurb:"Village centre near the Logan River, between Waterford and Yarrabilba.",view:[2e3,58,15],priority:14,maxDist:2e4},{id:"yarrabilba",name:"Yarrabilba",kind:"place",lat:-27.81405,lon:153.12125,blurb:"One of the city's newest communities. The surveyed streets and houses show how far it had been built.",view:[3200,56,-15],priority:13,maxDist:24e3},{id:"flagstone",name:"Flagstone",kind:"place",lat:-27.81686,lon:152.96475,blurb:"Flagstone's village centre, the heart of a growing community in the south-west.",view:[3e3,56,20],priority:13,maxDist:24e3},{id:"daisyhill",name:"Daisy Hill Conservation Park",kind:"nature",lat:-27.61761,lon:153.17205,blurb:"784 hectares of forest on the hills east of Springwood, home to the Daisy Hill Koala Centre.",view:[5200,56,-20],priority:9,maxDist:34e3},{id:"koala",name:"Daisy Hill Koala Centre",kind:"nature",lat:-27.62286,lon:153.15694,blurb:"Koala centre inside Daisy Hill Conservation Park.",view:[1300,60,35],priority:16,maxDist:9e3},{id:"springwoodcp",name:"Springwood Conservation Park",kind:"nature",lat:-27.62526,lon:153.14291,blurb:"A 29 hectare pocket of bushland in the middle of Springwood.",view:[1700,58,0],priority:17,maxDist:1e4},{id:"underwood",name:"Underwood Park",kind:"nature",lat:-27.59968,lon:153.1483,blurb:"About 40 hectares of sports fields and parkland.",view:[1900,58,-15],priority:17,maxDist:1e4},{id:"cornubia",name:"Cornubia Forest",kind:"nature",lat:-27.64953,lon:153.2047,blurb:"Cornubia Forest Nature Refuge: 133 hectares of bushland.",view:[3200,56,20],priority:15,maxDist:18e3},{id:"carbrook",name:"Carbrook Wetlands",kind:"nature",lat:-27.66949,lon:153.26531,blurb:"Conservation park on the low ground near the mouth of the Logan River.",view:[3600,56,-25],priority:14,maxDist:24e3},{id:"tygum",name:"Tygum Lagoon",kind:"nature",lat:-27.69524,lon:153.13178,blurb:"Lagoon and parkland in Waterford West.",view:[1300,60,20],priority:17,maxDist:9e3},{id:"parklands",name:"Logan River Parklands",kind:"nature",lat:-27.69839,lon:153.19237,blurb:"Riverside parkland on the Logan River at Beenleigh.",view:[1500,60,-30],priority:16,maxDist:1e4},{id:"eagleby",name:"Eagleby Wetlands",kind:"nature",lat:-27.70812,lon:153.22995,blurb:"Wetland reserve close to where the Albert River joins the Logan.",view:[2100,58,15],priority:16,maxDist:12e3},{id:"plunkett",name:"Plunkett Conservation Park",kind:"nature",lat:-27.80923,lon:153.14143,blurb:"782 hectares of bushland east of Yarrabilba.",view:[5200,56,20],priority:11,maxDist:3e4},{id:"springmountain",name:"Spring Mountain Forest Park",kind:"nature",lat:-27.71283,lon:152.90907,blurb:"340 hectares of forest in the west of the city.",view:[5200,56,-25],priority:12,maxDist:3e4},{id:"loganriver",name:"Logan River",kind:"water",lat:-27.70065,lon:153.14611,blurb:"The city's main river. It winds north-east across the whole map towards Moreton Bay.",view:[9e3,52,10],priority:8,maxDist:15e4},{id:"albertriver",name:"Albert River",kind:"water",lat:-27.74445,lon:153.19928,blurb:"Flows north along the city's eastern side to join the Logan River near Eagleby.",view:[8e3,52,-15],priority:9,maxDist:4e4}],Rg=[{name:"Pacific Motorway",kind:"road",lat:-27.65547,lon:153.16454,maxDist:26e3},{name:"Pacific Motorway",kind:"road",lat:-27.70388,lon:153.2014,maxDist:16e3},{name:"Logan Motorway",kind:"road",lat:-27.65277,lon:153.07095,maxDist:26e3},{name:"Logan Motorway",kind:"road",lat:-27.66671,lon:153.15186,maxDist:14e3},{name:"Mount Lindesay Highway",kind:"road",lat:-27.73991,lon:153.0265,maxDist:26e3},{name:"Mount Lindesay Highway",kind:"road",lat:-27.84813,lon:153.01892,maxDist:16e3},{name:"Logan River",kind:"water",lat:-27.69,lon:153.24506,maxDist:3e4},{name:"Logan River",kind:"water",lat:-27.769,lon:153.05127,maxDist:3e4}];function mo(i,t,e){return[(e-i.origin[0])*i.metresPerDegree[0],-(t-i.origin[1])*i.metresPerDegree[1]]}function Cg(i,t,e){return Ag.map(n=>{const[s,r]=mo(i,n.lat,n.lon);return{...n,x:s,z:r,y:t.yAt(s,r)+45,suburb:e(s,r)}})}const ki={uPixel:{value:.001},uTint:{value:new It(1,1,1)},uNight:Qn,uHole:{value:new de(0,0,0,0)},uHoleOn:{value:0},uStreet:{value:0}},zc=-1,Pg=0,Lg=1,Dg=2,Ig=3;class Fn{constructor(){st(this,"pos",[]);st(this,"side",[]);st(this,"road",[]);st(this,"col",[]);st(this,"idx",[])}get vertexCount(){return this.pos.length/3}add(t,e,n,s,r,a=!1,o=zc){const l=t.length/3;if(l<2)return;const c=this.vertexCount,u=e/2;let d=0;for(let h=0;h<l;h++){const f=t[h*3],m=t[h*3+1],x=t[h*3+2];h>0&&(d+=Math.hypot(f-t[h*3-3],x-t[h*3-1]));const p=h>0?h-1:a?l-2:0,g=h<l-1?h+1:a?1:l-1;let M=f-t[p*3],S=x-t[p*3+2],v=t[g*3]-f,b=t[g*3+2]-x;const T=Math.hypot(M,S),_=Math.hypot(v,b);T>1e-6?(M/=T,S/=T):(M=v/(_||1),S=b/(_||1)),_>1e-6?(v/=_,b/=_):(v=M,b=S);let y=M+v,L=S+b;const P=Math.hypot(y,L);P<1e-6?(y=v,L=b):(y/=P,L/=P);const R=1/Math.max(y*v+L*b,.45),D=-L*R,I=y*R;for(const A of[1,-1]){const F=r&&u>0?Math.max(m,r.yAt(f+D*A*u,x+I*A*u)):m;this.pos.push(f,F,x),this.side.push(D*A,I*A,u,n/2),this.road.push(A,d,o),this.col.push(s[0],s[1],s[2])}if(h>0){const A=c+(h-1)*2;this.idx.push(A,A+1,A+2,A+1,A+3,A+2)}}}build(){const t=new Me;return t.setAttribute("position",new Wt(new Float32Array(this.pos),3)),t.setAttribute("aSide",new Wt(new Float32Array(this.side),4)),t.setAttribute("aRoad",new Wt(new Float32Array(this.road),3)),t.setAttribute("color",new Wt(new Float32Array(this.col),3)),t.setIndex(this.vertexCount>65535?new Wt(new Uint32Array(this.idx),1):new Wt(new Uint16Array(this.idx),1)),t.computeBoundingSphere(),t.boundingSphere&&(t.boundingSphere.radius+=400),this.pos=[],this.side=[],this.road=[],this.col=[],this.idx=[],t}}function On(i={}){const t=new Hs({vertexColors:!0,transparent:!0,opacity:i.opacity??1,depthWrite:!1,side:Ge,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),e={value:i.lift??.4},n={value:i.glow??0},s={value:i.nightDim??.2};return t.onBeforeCompile=r=>{Object.assign(r.uniforms,ki,{uLift:e,uGlow:n,uNightDim:s}),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
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
uniform float uStreet;
varying vec2 vLgXZ;
varying vec4 vLgRoad;
varying float vLgHalf;`).replace("#include <color_fragment>",`#include <color_fragment>${i.street==="casing"?`
        // close up, the outline of a sealed street is its kerb
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.39, 0.385, 0.35), uStreet * step(-0.5, vLgRoad.z));`:i.street==="fill"?`
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
        }`:""}`)},t.customProgramCacheKey=()=>`logan-ribbon-${i.hole?"hole":"whole"}-${i.street??"plain"}`,t}const _s=G(3163482),kc={council:{wall:G(14341834),roof:G(15001058),windows:"all",storey:3.3,parapet:.9,shades:!0},hall:{wall:G(13223613),roof:G(14211541),windows:"ground",storey:4.2,parapet:.7},sport:{wall:G(13617856),roof:G(14474456),windows:"ground",storey:4,parapet:.4},gallery:{wall:G(15262938),roof:G(15526886),windows:"all",storey:3.8,parapet:.5,shades:!0},community:{wall:G(12755331),roof:G(7557184),windows:"all",storey:3.2,parapet:.2,pitched:!0},school:{wall:G(14472905),roof:G(14277851),windows:"all",storey:3.1,parapet:.15,shades:!0,pitched:!0},police:{wall:G(13488854),roof:G(11975357),windows:"all",storey:3.4,parapet:.5,shades:!0},shops:{wall:G(14208960),roof:G(13685196),windows:"ground",storey:4.4,parapet:.8},other:{wall:G(14012355),roof:G(13619403),windows:"all",storey:3.4,parapet:.4,pitched:!0}},Gc=[15921904,14277339,10132896,3948356,2040358,12069163,2969487,7372940,15262676,4877138].map(G),Gi=[5209412,5932872,6853456,4682303].map(G),Hc=[14273976,13219740,11901570,15130578,11109480,10254946,13617341,12371656,15328208,12891042].map(G),Vc=[9128506,10638655,7303026,4936280,9410199,12830662,5597263,8077107,4145991,11119270].map(G),Wc=[4008997,9056042,15789282,3099228,5201226].map(G),Xc=[9075560,14209728,9278097,6123356,10127988,7301731].map(G),Hi=G(9409430),qc=[3104138,12076090,15131350,4156234,2895411,14263361,8018572,10135469].map(G),Yc=[14727578,13211508,10252114,15782068].map(G),Ve=te.degToRad,jn=.25,nn=[15527140,14925626,12368043,3828920,2763824].map(G);class Ng{constructor(t){st(this,"pos",[]);st(this,"col",[]);this.hf=t}tri(t,e,n,s,r,a,o){const l=(s-e)*(r-t)-(n-t)*(a-e)>0;for(const[c,u]of l?[[t,e],[n,s],[r,a]]:[[t,e],[r,a],[n,s]])this.pos.push(c,this.hf.yAt(c,u)+jn+.04,u),this.col.push(o[0],o[1],o[2])}line(t,e,n,s,r,a){const o=Math.hypot(n-t,s-e);if(o<.001)return;const l=-(s-e)/o*(r/2),c=(n-t)/o*(r/2),u=Math.max(1,Math.ceil(o/4));for(let d=0;d<u;d++){const h=t+(n-t)*d/u,f=e+(s-e)*d/u,m=t+(n-t)*(d+1)/u,x=e+(s-e)*(d+1)/u;this.tri(h-l,f-c,m-l,x-c,m+l,x+c,a),this.tri(h-l,f-c,m+l,x+c,h+l,f+c,a)}}shape(t,e,n,s,r,a){const o=Ve(n),l=Math.cos(o)*s,c=Math.sin(o)*s,u=h=>t+r[h*2]*l-r[h*2+1]*c,d=h=>e-r[h*2]*c-r[h*2+1]*l;for(let h=1;h+1<r.length/2;h++)this.tri(u(0),d(0),u(h),d(h),u(h+1),d(h+1),a)}disc(t,e,n,s){const r=[];for(let a=0;a<8;a++)r.push(Math.cos(a/8*Math.PI*2)*n,Math.sin(a/8*Math.PI*2)*n);this.shape(t,e,0,1,r,s)}build(){const t=new Me,e=this.pos.length/3,n=new Float32Array(e*3);for(let a=0;a<e;a++)n[a*3+1]=1;t.setAttribute("position",new Wt(new Float32Array(this.pos),3)),t.setAttribute("normal",new Wt(n,3)),t.setAttribute("color",new Wt(new Float32Array(this.col),3));const s=new Sn({vertexColors:!0,transparent:!0,depthWrite:!1,roughness:.9,metalness:0,side:Ge,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),r=new se(t,s);return r.receiveShadow=!0,r.renderOrder=25,r.name="precinct-paint",r}}function Ug(i,t){const[e,n]=t.centre;for(let a=0;a<t.paint.length;a+=6){const o=t.paint;i.line(e+o[a]/100,n+o[a+1]/100,e+o[a+2]/100,n+o[a+3]/100,o[a+4]/100,nn[o[a+5]]??nn[0])}const s=[-2.3,-.2,.5,-.2,.5,.2,-2.3,.2],r=[.4,-.75,2.3,0,.4,.75];for(let a=0;a<t.marks.length;a+=5){const o=e+t.marks[a]/100,l=n+t.marks[a+1]/100,c=t.marks[a+2]/10,u=t.marks[a+3]/100,d=t.marks[a+4];if(d===0)i.shape(o,l,c,u,s,nn[0]),i.shape(o,l,c,u,r,nn[0]);else if(d===1||d===2){const h=d===1?1:-1;i.shape(o,l,c,u,[-2.3,-.2,.3,-.2,.3,.2,-2.3,.2],nn[0]),i.shape(o,l,c,u,[-.1,.2*h,.3,.2*h,.3,.95*h,-.1,.95*h],nn[0]),i.shape(o,l,c,u,[-.65,.85*h,.85,.85*h,.1,2.15*h],nn[0])}else if(d===3){i.disc(o,l,.55*u,nn[0]);const h=Ve(c);i.disc(o+Math.cos(h)*.95*u,l-Math.sin(h)*.95*u,.24*u,nn[0])}else i.disc(o,l,.42*u,nn[2]),i.disc(o,l,.33*u,nn[4])}}const Kc=i=>i.map(t=>t/10);function mr(i,t,e){let n=!1;for(let s=0,r=e.length-2;s<e.length;r=s,s+=2)e[s+1]>t!=e[r+1]>t&&i<(e[r]-e[s])*(t-e[s+1])/(e[r+1]-e[s+1])+e[s]&&(n=!n);return n}function go(i,t,e,n,s){const r=c=>Array.from({length:c.length/2},(u,d)=>new Dt(c[d*2],c[d*2+1])),a=r(t),o=e.map(r),l=a.concat(...o);for(const c of js.triangulateShape(a,o)){const u=l[c[0]],d=l[c[1]],h=l[c[2]];(d.x-u.x)*(h.y-u.y)-(d.y-u.y)*(h.x-u.x)>0?i.tri(u.x,n,u.y,h.x,n,h.y,d.x,n,d.y,s):i.tri(u.x,n,u.y,d.x,n,d.y,h.x,n,h.y,s)}}function Fg(i,t,e,n,s,r,a){const o=t.length/2,l=t.map((u,d)=>(d%2?n:e)+(u-(d%2?n:e))*.32),c=ur(t)>0;for(let u=0;u<o;u++){const d=(u+1)%o,h=t[u*2],f=t[u*2+1],m=t[d*2],x=t[d*2+1],p=l[u*2],g=l[u*2+1],M=l[d*2],S=l[d*2+1],v=Jt(a,.92+.14*(u%4/3));c?i.quad(m,s,x,h,s,f,p,r,g,M,r,S,v):i.quad(h,s,f,m,s,x,M,r,S,p,r,g,v)}go(i,l,[],r,Jt(a,1.04))}function Zc(i,t,e,n,s,r,a,o,l,c){const u=t.length/2,d=ur(t)>0;for(let h=0;h<u;h++){const f=(h+1)%u,m=t[h*2],x=t[h*2+1],p=t[f*2]-m,g=t[f*2+1]-x,M=Math.hypot(p,g);if(M<4.5||c!=null&&c(m,x,t[f*2],t[f*2+1]))continue;i.frame(m,n,x,Math.atan2(-g,p));const S=(d?1:-1)*(e?-1:1),v=-S*.07,b=Math.max(1,Math.floor((M-1.25)/2.95)),T=(M-1.6-(b-1)*.35)/b;for(const _ of s){const y=_*r+.95,L=y+Math.min(1.6,r-1.5);for(let P=0;P<b;P++){const R=.8+P*(T+.35),D=R+T,I=a()<.32?.85:.05;v>0?i.quad(R,y,v,D,y,v,D,L,v,R,L,v,_s,I):i.quad(D,y,v,R,y,v,R,L,v,D,L,v,_s,I)}if(o&&M>7){const P=-S*.02,R=-S*.62,D=L+.16,I=D+.14;i.box(.5,D,Math.min(P,R),M-.5,I,Math.max(P,R),Jt(l,.86),Jt(l,1.05),Jt(l,.7))}}}}function Og(i,t,e,n,s){const r=kc[t.k]??kc.other,a=Kc(t.p),o=t.h.map(Kc),l=a.length/2;let c=1/0,u=0,d=0,h=0;for(let D=0;D<l;D++){const I=e.yAt(a[D*2],a[D*2+1]);c=Math.min(c,I),u+=I,d+=a[D*2]/l,h+=a[D*2+1]/l}const f=Math.abs(ur(a)),m=a.filter((D,I)=>I%2===0),x=a.filter((D,I)=>I%2===1),p=Math.min(...m),g=Math.max(...m),M=Math.min(...x),S=Math.max(...x),v=!!r.pitched&&o.length===0&&t.a-t.e>1.1&&f<2600&&f/((g-p)*(S-M))>.55,b=u/l,T=b+t.e,_=T+(v?0:r.parapet);i.frame(),i.walls(a,c-.4,_,r.wall);for(const D of o)i.walls(D,c-.4,_,Jt(r.wall,.94));v?Fg(i,a,d,h,T,b+t.a,r.roof):go(i,a,o,T,r.roof);const y=Math.max(1,Math.round(t.e/r.storey)),L=t.e/y,P=r.windows==="none"?[]:r.windows==="ground"?[0]:Array.from({length:y},(D,I)=>I);if(L>=2.6){const D=(A,F,k)=>!!s&&Math.hypot(A-s.wall[k],F-s.wall[k+1])<1.5,I=t.k==="council"&&s?(A,F,k,B)=>D(A,F,0)&&D(k,B,2)||D(A,F,2)&&D(k,B,0):void 0;Zc(i,a,!1,b,P,L,n,!!r.shades,r.wall,I);for(const A of o)Zc(i,A,!0,b,P,L,n,!!r.shades,r.wall)}if(t.k==="hall"&&t.a-t.e>3){const D=a.map((I,A)=>(A%2?h:d)+(I-(A%2?h:d))*.5);i.frame(),i.walls(D,T,b+t.a*.92,Jt(r.wall,.96)),go(i,D,[],b+t.a*.92,r.roof)}else if(!v&&t.k!=="council"&&t.k!=="community"){const D=Math.min(10,Math.floor(f/420));for(let I=0,A=0;I<D&&A<120;A++){const F=p+n()*(g-p),k=M+n()*(S-M);[[-3,-3],[3,-3],[3,3],[-3,3]].every(([J,H])=>mr(F+J,k+H,a)&&!o.some(Y=>mr(F+J,k+H,Y)))&&(i.frame(F,T,k,n()*.6),i.box(-1.3,0,-.9,1.3,1.1,.9,G(11119528),G(12764353)),I++)}}const R=(D,I)=>mr(D,I,a)&&!o.some(A=>mr(D,I,A));return{floor:b,roofY:T,top:_,wall:r.wall,onRoof:R}}function Bg(i,t,e,n,s,r){for(const[d,h,f,m,x]of t.solar){i.frame(d,n+.3,h,Ve(x));for(let p=0;p*1.25+1.05<=m;p++){const g=-m/2+p*1.25,M=g+1.05;for(let S=-f/2;S+2<=f/2;S+=5.5){const v=Math.min(S+5.2,f/2);[[S,g],[v,g],[v,M],[S,M]].every(([b,T])=>r(i.wx(b,T),i.wz(b,T)))&&i.quad(S,0,M,v,0,M,v,0,g,S,0,g,G(1911879))}}}for(const[d,h,f,m,x,p]of t.plant)i.frame(d,n,h,Ve(x)),i.box(-f/2,0,-m/2,f/2,p,m/2,G(10198426),G(12040630));const[a,o,l,c,u]=t.canopy;if(i.frame(a,e,o,Ve(u)),!t.entry){i.box(-l/2,4,-c/2,l/2,4.4,c/2,G(15658730),void 0,G(14277076));for(const[d,h]of[[-1,-1],[1,-1],[1,1],[-1,1]])i.box(d*(l/2-.6)-.2,0,h*(c/2-.6)-.2,d*(l/2-.6)+.2,4,h*(c/2-.6)+.2,G(13619146))}for(let d=-2;d<=2;d++)i.cyl(d*2.2,0,c/2+1.6,.13,.13,.95,6,G(7172469),G(9080466));for(const d of[-1,1])i.box(d*(l/2+2.2)-.9,.38,-.25,d*(l/2+2.2)+.9,.48,.25,G(9071178)),i.box(d*(l/2+2.2)-.8,0,-.2,d*(l/2+2.2)-.7,.38,.2,Hi,null),i.box(d*(l/2+2.2)+.7,0,-.2,d*(l/2+2.2)+.8,.38,.2,Hi,null);i.frame(t.mast[0],n,t.mast[1]),i.cyl(0,0,0,.32,.12,e+s-n,6,G(13159116)),i.box(-.25,e+s-n,-.25,.25,e+s-n+.5,.25,G(13650490),void 0,null,1)}function $c(i){const[t,e,n,s]=i.wall,r=Math.hypot(n-t,s-e),a=(n-t)/r,o=(s-e)/r,l=(i.flags[0]/10-t)*-o+(i.flags[1]/10-e)*a>0?1:-1;return{ax:t,az:e,len:r,ux:a,uz:o,nx:-o*l,nz:a*l}}function zg(i,t,e,n,s){const r=$c(t),a=Jt(s,.8);i.frame();const o=(I,A)=>[r.ax+r.ux*I+r.nx*A,r.az+r.uz*I+r.nz*A];for(let I=4.6;I<r.len-1;I+=4.6){const[A,F]=o(I-.03,.03),[k,B]=o(I+.03,.03);i.quad(A,e-.4,F,k,e-.4,B,k,n,B,A,n,F,a)}for(const I of[e+2.9,e+6.2]){const[A,F]=o(.1,.03),[k,B]=o(r.len-.1,.03);i.quad(A,I-.025,F,k,I-.025,B,k,I+.025,B,A,I+.025,F,a)}const l=t.roof,c=l.length/2;let u=0,d=0;for(let I=0;I<c;I++)u+=l[I*2]/c,d+=l[I*2+1]/c;const[h,f,m,x]=t.doors,p=Math.hypot(m-h,x-f),g=(I,A)=>e+5+.36*Math.abs((I-h)*-(x-f)+(A-f)*(m-h))/p,M=[];for(let I=0;I<c;I++){const A=u+(l[I*2]-u)*1.14,F=d+(l[I*2+1]-d)*1.14;M.push([A,g(A,F),F])}const S=.55,v=G(15328988);for(let I=0;I<c;I++){const A=M[I],F=M[(I+1)%c];if(i.quad(A[0],A[1],A[2],F[0],F[1],F[2],F[0],F[1]+S,F[2],A[0],A[1]+S,A[2],v),I>0&&I<c-1){const k=M[0];i.tri(k[0],k[1],k[2],A[0],A[1],A[2],F[0],F[1],F[2],G(15722191)),i.tri(k[0],k[1]+S,k[2],F[0],F[1]+S,F[2],A[0],A[1]+S,A[2],G(14474454))}}for(let I=1;I<c-1;I++){const A=u+(l[I*2]-u)*.9,F=d+(l[I*2+1]-d)*.9;i.box(A-.22,e-.4,F-.22,A+.22,g(A,F),F+.22,G(14078664),null)}const b=Math.min(p/2-.3,1.9),T=(h+m)/2,_=(f+x)/2,y=(m-h)/p,L=(x-f)/p,P=(u-T)*-L+(d-_)*y>0?1:-1,R=-L*P*.07,D=y*P*.07;i.quad(T-y*b+R,e,_-L*b+D,T+y*b+R,e,_+L*b+D,T+y*b+R,e+2.7,_+L*b+D,T-y*b+R,e+2.7,_-L*b+D,_s,.6)}function kg(i,t){if(typeof document>"u")return null;const[e,n,s,r]=i.sign,a=document.createElement("canvas");a.width=2048,a.height=Math.round(2048*s/n);const o=a.getContext("2d");if(!o)return null;const l=a.width/n,c=(S,v,b,T,_,y,L="#2a2a2b")=>{o.fillStyle=L,o.font=`${y} ${Math.round(_/.716*l)}px "Arial Black", "Helvetica Neue", Arial, sans-serif`,o.letterSpacing="0.12em";const P=o.measureText(S).width;o.save(),o.translate(v*l,T*l),o.scale((b-v)*l/P,1),o.fillText(S,0,0),o.restore()};c("LOGAN CITY COUNCIL",1.5,12,.74,.58,900),c("ADMINISTRATION CENTRE",1.5,8.9,1.36,.3,700),c("150 WEMBLEY ROAD",1.5,7,1.96,.3,700);const u=(S,v,b)=>{o.beginPath(),o.arc(S*l,s/2*l,v*l,0,Math.PI*2),o.fillStyle=b,o.fill()};for(const S of[.66,n-.66])u(S,.64,"#8d9093"),u(S,.59,"#f4f3ee");o.save(),o.beginPath(),o.arc(.66*l,s/2*l,.44*l,0,Math.PI*2),o.clip(),o.fillStyle="#4d97cf",o.fillRect(0,0,1.4*l,s/2*l),o.fillStyle="#5c9a4c",o.fillRect(0,s/2*l,1.4*l,s*l),o.restore();for(const[S,v,b]of[[0,-.3,"#f08a24"],[-.17,-.16,"#d8412f"],[.17,-.16,"#7a4b9c"],[0,-.02,"#f2c230"]])o.beginPath(),o.ellipse((n-.66+S)*l,(s/2+v)*l,.1*l,.13*l,0,0,Math.PI*2),o.fillStyle=b,o.fill();c("LOGAN",n-1,n-.32,s/2+.36,.15,900,"#1e3a6b");const d=$c(i),h=e-n/2,f=t+r-s/2,m=(S,v)=>[d.ax+d.ux*S+d.nx*.08,v,d.az+d.uz*S+d.nz*.08],x=new Me;x.setAttribute("position",new Wt(new Float32Array([...m(h,f),...m(h+n,f),...m(h+n,f+s),...m(h,f+s)]),3)),x.setAttribute("normal",new Wt(new Float32Array([0,1,2,3].flatMap(()=>[d.nx,0,d.nz])),3)),x.setAttribute("uv",new Wt(new Float32Array([0,0,1,0,1,1,0,1]),2));const p=-d.uz*d.nx+d.ux*d.nz>0;x.setIndex(p?[0,1,2,0,2,3]:[0,2,1,0,3,2]);const g=new Wa(a);g.colorSpace=Te,g.anisotropy=8;const M=new se(x,new Sn({map:g,transparent:!0,depthWrite:!1,roughness:.9,metalness:0,side:Ge}));return M.name="precinct-name",M}const Gg=G(1452138),gr=G(16053488),Jc=G(13115436);function Hg(i,t,e){for(let s=0;s<t.flags.length;s+=3){const r=t.flags[s]/10,a=t.flags[s+1]/10,o=s/3;i.frame(r,e.yAt(r,a)+jn,a,Ve(t.flags[s+2]/10)),i.cyl(0,0,0,.06,.045,7.2,6,G(14277596),G(13214266));const l=(u,d,h,f,m,x=0)=>{for(const p of x?[x*.012,-x*.012]:[0])i.quad(.08+u*1.8,6.15+d*.9,p,.08+h*1.8,6.15+d*.9,p,.08+h*1.8,6.15+f*.9,p,.08+u*1.8,6.15+f*.9,p,m)},c=(u,d,h,f)=>{for(const m of[.012,-.012])for(let x=0;x<8;x++){const p=x/8*Math.PI*2,g=(x+1)/8*Math.PI*2,M=v=>.08+(u+Math.cos(v)*h*.5)*1.8,S=v=>6.15+(d+Math.sin(v)*h)*.9;i.tri(.08+u*1.8,6.15+d*.9,m,M(p),S(p),m,M(g),S(g),m,f)}};if(o===0){l(0,0,1,1,Gg),l(0,.68,.5,.82,gr,1),l(.2,.5,.3,1,gr,1),l(0,.72,.5,.78,Jc,2),l(.225,.5,.275,1,Jc,2);for(const[u,d,h]of[[.25,.25,.11],[.75,.8,.06],[.62,.5,.06],[.75,.2,.06],[.88,.56,.06]])c(u,d,h,gr)}else o===1?(l(0,.5,1,1,G(1184274)),l(0,0,1,.5,G(13115436)),c(.5,.5,.25,G(16240919))):o===2?(l(0,.8,1,1,G(2067020)),l(0,.74,1,.8,G(1184274)),l(0,.26,1,.74,G(1920924)),l(0,.2,1,.26,G(1184274)),l(0,0,1,.2,G(2067020)),c(.5,.5,.15,gr)):l(0,0,1,1,G(15910685))}for(let s=0;s<t.hedges.length;s+=4){const r=t.hedges[s]/10,a=t.hedges[s+1]/10,o=t.hedges[s+2]/10,l=t.hedges[s+3]/10;i.frame(r,(e.yAt(r,a)+e.yAt(o,l))/2+jn-.1,a,Math.atan2(-(l-a),o-r));const c=Math.hypot(o-r,l-a),u=[G(4881726),G(5671492),G(4486714)];i.box(0,0,-.42,c,.82,.42,G(4157239),G(5211202));for(let d=0,h=.45;h<c-.2;d++,h+=.82){const f=u[(s+d)%3],m=.6+d*7%5*.03;i.blob(h,.56,0,m,.56,m,6,3,Jt(f,.82),Jt(f,1.12))}}for(let s=0;s<t.tufts.length;s+=2){const r=t.tufts[s]/10,a=t.tufts[s+1]/10;i.frame(r,e.yAt(r,a)+jn,a,s);for(let o=0;o<6;o++){const l=o/6*Math.PI*2,c=Math.cos(l),u=Math.sin(l);i.tri(-u*.09,0,c*.09,u*.09,0,-c*.09,c*.42,1.25,u*.42,G(o%2?8201016:6102317))}}i.frame();const n=G(9409430);for(let s=0;s<t.rails.length;s+=4){const r=t.rails[s]/10,a=t.rails[s+1]/10,o=t.rails[s+2]/10,l=t.rails[s+3]/10,c=e.yAt(r,a)+jn,u=e.yAt(o,l)+jn,d=Math.max(2,Math.round(Math.hypot(o-r,l-a)/1.4)+1);for(const h of[.5,.98])Ms(i,r,c+h,a,o,u+h,l,.025,.025,n);for(let h=0;h<d;h++){const f=h/(d-1),m=r+(o-r)*f,x=a+(l-a)*f,p=c+(u-c)*f;i.box(m-.03,p,x-.03,m+.03,p+.98,x+.03,n,null)}}}const xs=G(3095882),Vg=G(1710877),Qc=G(11120048),jc=G(16774358),th=G(13771548);function sn(i,t,e,n){for(const s of[-1,1]){const r=s*(t+.04),a=s*(t-.24);i.box(Math.min(r,a),0,e-n,Math.max(r,a),n*2,e+n,Vg,null);const o=s*(t+.05),l=n*.45;s>0?i.quad(o,n-l,e+l,o,n-l,e-l,o,n+l,e-l,o,n+l,e+l,Qc):i.quad(o,n-l,e-l,o,n-l,e+l,o,n+l,e+l,o,n+l,e-l,Qc)}}function vs(i,t,e,n,s,r,a,o,l){const c=t-.09;i.quad(-t,e,r,t,e,r,c,n,o,-c,n,o,xs),i.quad(t,e,s,-t,e,s,-c,n,a,c,n,a,xs),i.quad(t,e,r,t,e,s,c,n,a,c,n,o,xs),i.quad(-t,e,s,-t,e,r,-c,n,o,-c,n,a,xs),i.quad(-c,n,o,c,n,o,c,n,a,-c,n,a,l)}function Vi(i,t,e,n,s,r,a,o=.16){const l=a?-1:0,c=a?-.85:0,u=n+.012;for(const d of[-1,1]){const h=d*(t-.27)-.17,f=h+.34;i.quad(h,e,s+.015,f,e,s+.015,f,e+o,s+.015,h,e+o,s+.015,jc,l),i.quad(h,u,s,f,u,s,f,u,s-.2,h,u,s-.2,jc,l),i.quad(f,e,r-.015,h,e,r-.015,h,e+o,r-.015,f,e+o,r-.015,th,c),i.quad(h,u,r+.2,f,u,r+.2,f,u,r,h,u,r,th,c)}}function Wg(i){const s=G(15659247),r=G(2067078),a=G(16753951);sn(i,1.25,3.7,.48),sn(i,1.25,-3.3,.48),i.box(-1.25,.34,-6.1,1.25,.98,6.1,s,null),i.box(-1.25,.98,-6.1,1.25,1.28,6.1,r,null),i.box(-1.25,1.28,-6.1,1.25,2.3,6.1,xs,null),i.box(-1.25,2.3,-6.1,1.25,3.02,6.1,s,G(14277851)),i.box(-.8,3.02,-3.4,.8,3.24,-.6,G(12896456));for(const[o,l]of[[4.2,5.4],[-.9,.5]])i.quad(1.27,.42,l,1.27,.42,o,1.27,2.3,o,1.27,2.3,l,G(1449252));i.quad(-.95,2.42,6.119999999999999,.95,2.42,6.119999999999999,.95,2.86,6.119999999999999,-.95,2.86,6.119999999999999,a,-.9),Vi(i,1.25,.6,3.02,6.1,-6.1,!0,.2)}function Xg(i,t,e){const n=G(2763823);for(let s=0;s<t.length;s+=4){const r=t[s]/10,a=t[s+1]/10,o=t[s+3];if(i.frame(r,e.yAt(r,a)+jn,a,Ve(90+t[s+2]/10)),o>=100){Wg(i);continue}const l=o>=20,c=s/4,u=(c*7+o%20*3)%10,d=Gc[u===9&&c%3?0:o%Gc.length],h=Jt(d,.93);u<=3?(sn(i,.89,1.42,.32),sn(i,.89,-1.38,.32),i.box(-.89,.26,-2.3,.89,.8,2.3,d),vs(i,.84,.8,1.42,-1.6,1,-1,.42,h),Vi(i,.89,.56,.8,2.3,-2.3,l)):u<=5?(sn(i,.87,1.25,.31),sn(i,.87,-1.3,.31),i.box(-.87,.26,-2,.87,.84,2,d),vs(i,.82,.84,1.47,-1.95,.85,-1.62,.3,h),Vi(i,.87,.58,.84,2,-2,l)):u<=7?(sn(i,.94,1.45,.37),sn(i,.94,-1.42,.37),i.box(-.94,.33,-2.35,.94,1,2.35,d),vs(i,.89,1,1.74,-2.3,1,-2.05,.5,h),Vi(i,.94,.72,1,2.35,-2.35,l)):u===8?(sn(i,.93,1.7,.37),sn(i,.93,-1.65,.37),i.box(-.93,.33,0,.93,.98,2.65,d),i.box(-.93,.33,-2.65,.93,.98,0,d,n),vs(i,.88,.98,1.72,.05,1.5,.2,1.05,h),Vi(i,.93,.7,.98,2.65,-2.65,l)):(sn(i,.97,1.75,.35),sn(i,.97,-1.6,.35),i.box(-.97,.3,-2.6,.97,1.08,2.6,d),i.box(-.97,1.08,-2.6,.97,2.02,1.2,d,h),vs(i,.97,1.08,2.02,1.2,2.3,1.2,1.72,h),Vi(i,.97,.66,1.08,2.6,-2.6,l))}}const eh=G(7297605),nh=G(13353648),ih=[7047774,8033384,6258520].map(G),sh=[9336009,10849248,8020664].map(G),qg=G(3495996);function Ms(i,t,e,n,s,r,a,o,l,c){const u=s-t,d=r-e,h=a-n,f=Math.hypot(u,d,h)||1;let m=-h,x=u;const p=Math.hypot(m,x);p<1e-6?(m=1,x=0):(m/=p,x/=p);const g=d/f*x,M=h/f*m-u/f*x,S=-(d/f)*m,v=(b,T,_,y,L)=>[_+(m*Math.cos(b)+g*Math.sin(b))*T,y+M*Math.sin(b)*T,L+(x*Math.cos(b)+S*Math.sin(b))*T];for(let b=0;b<4;b++){const T=b/4*Math.PI*2,_=(b+1)/4*Math.PI*2,y=v(T,o,t,e,n),L=v(_,o,t,e,n),P=v(_,l,s,r,a),R=v(T,l,s,r,a);i.quad(y[0],y[1],y[2],L[0],L[1],L[2],P[0],P[1],P[2],R[0],R[1],R[2],c)}}function rh(i,t,e,n){for(let s=0;s<t.length;s+=4){const r=t[s]/10,a=t[s+1]/10,o=t[s+2]/10,l=t[s+3];if(!n(o,l))continue;const c=Oi(5e3+s),u=c()*Math.PI*2,d=Gi[Math.floor(c()*Gi.length)];if(i.frame(r,e.yAt(r,a),a,u),l===1||l===5){const h=l===5,f=h?13+c()*4.5:6.5+c()*4.5,m=Math.max(o,2.2)*(h?1.12:1),x=G(5012799),p=G(7643735),g=h?15:12,M=h?.4:.52;h?(i.cyl(0,0,0,.21,.14,f-1.2,6,G(10985877)),i.cyl(0,f-1.2,0,.17,.12,1.25,6,G(8823647))):(i.cyl(0,0,0,.26,.17,f,5,G(9075302)),i.blob(0,f+.1,0,.5,.45,.5,5,3,x));const S=m/3.3,v=[[1.5,2,1.2],[1,1,-.2],[.6,.2,-1.5]];for(let b=0;b<g;b++){const T=b/g*Math.PI*2+c()*.3,_=Math.cos(T),y=Math.sin(T),L=v[b%3],P=b%2?x:p,R=(H,Y,tt,gt)=>[_*m*H-y*tt*gt,f+Y*S,y*m*H+_*tt*gt],D=R(0,0,.12,-1),I=R(0,0,.12,1),A=R(.35,L[0],M,-1),F=R(.35,L[0],M,1),k=R(.75,L[1],M*.9,-1),B=R(.75,L[1],M*.9,1),J=R(1.1,L[2],0,0);i.quad(D[0],D[1],D[2],I[0],I[1],I[2],F[0],F[1],F[2],A[0],A[1],A[2],P),i.quad(A[0],A[1],A[2],F[0],F[1],F[2],B[0],B[1],B[2],k[0],k[1],k[2],Jt(P,.94)),i.tri(k[0],k[1],k[2],B[0],B[1],B[2],J[0],J[1],J[2],Jt(P,.88))}}else if(l===2){const h=(5+o*1.5)*.52,f=ih[Math.floor(c()*ih.length)];i.cyl(0,0,0,.22+o*.03,.15,h+.2,5,nh);for(let m=0;m<3;m++){const x=m*2.09+c()*.8,p=o*(.42+.22*c()),g=h*(1.65+.5*c()),M=o*(.44+.14*c());Ms(i,0,h,0,Math.cos(x)*p,g,Math.sin(x)*p,.13,.06,nh),i.blob(Math.cos(x)*p,g+M*.3,Math.sin(x)*p,M,M*.62,M,6,3,Jt(f,.8),Jt(f,1.16))}}else if(l===3){const h=1.8+o*.5,f=sh[Math.floor(c()*sh.length)];i.cyl(0,0,0,.18+o*.03,.14,h+.2,5,G(5982780));for(let m=0;m<3;m++){const x=m*2.09+c()*.6,p=o*.52,g=h+o*.5;Ms(i,0,h,0,Math.cos(x)*p,g,Math.sin(x)*p,.11,.06,G(5982780)),i.blob(Math.cos(x)*p,g+o*.16,Math.sin(x)*p,o*.56,o*.36,o*.56,6,3,Jt(f,.82),Jt(f,1.12))}i.blob(0,h+o*.86,0,o*.5,o*.34,o*.5,6,3,Jt(f,.86),Jt(f,1.15))}else if(l===4){const h=4+o*2.2;i.cyl(0,0,0,.16,.1,h*.3,5,eh);for(let f=0;f<3;f++)i.cyl(0,h*(.18+.26*f),0,o*(.78-.2*f),.02,h*.38,6,Jt(qg,.9+.1*f))}else{const h=1.6+o*.75,f=o>4.5?3:o>2.6?2:0;i.cyl(0,0,0,.2+o*.035,.16+o*.02,h+o*.3,5,eh),i.blob(0,h+o*.62,0,o*(f?.86:1),o*.72,o*(f?.86:1),o>7?9:7,o>7?5:4,Jt(d,.82),Jt(d,1.18));for(let m=0;m<f;m++){const x=m*(6.283/f)+c(),p=o*(.48+.12*c());i.blob(Math.cos(x)*o*.5,h+o*(.42+.25*c()),Math.sin(x)*o*.5,p,p*.72,p,6,3,Jt(d,.78),Jt(d,1.12))}}}}function Yg(i,t,e){for(let n=0;n<t.length;n+=3){const s=t[n]/10,r=t[n+1]/10,a=t[n+2]/10;i.frame(s,e.yAt(s,r),r),i.cyl(0,0,0,.11,.08,a,5,Hi),i.box(-.7,a,-.22,.7,a+.16,.22,G(14211282),void 0,G(16773832),1)}}function Bn(i,t,e,n,s,r,a,o,l,c=0,u=.05){t===0?i.quad(s,a,n/2+u,r,a,n/2+u,r,o,n/2+u,s,o,n/2+u,l,c):t===1?i.quad(r,a,-n/2-u,s,a,-n/2-u,s,o,-n/2-u,r,o,-n/2-u,l,c):t===2?i.quad(e/2+u,a,r,e/2+u,a,s,e/2+u,o,s,e/2+u,o,r,l,c):i.quad(-e/2-u,a,s,-e/2-u,a,r,-e/2-u,o,r,-e/2-u,o,s,l,c)}function Kg(i,t,e,n){const s=G(12368043),r=G(9409430);for(let a=0;a<t.length;a+=9){const o=Oi(9001+a/9*8),l=t[a]/10,c=t[a+1]/10,u=t[a+2]/10,d=t[a+3]/10,h=t[a+5]/10,f=Math.max(t[a+6]/10,h+.25),m=t[a+7],x=e.yAt(l,c);i.frame(l,x,c,-Ve(t[a+4]/10));const p=u*d<46||h<2.35,g=p?G(o()<.5?12172474:13617851):Hc[Math.floor(o()*Hc.length)],M=p?G(o()<.5?10988200:8225926):Vc[Math.floor(o()*Vc.length)];i.box(-u/2,-.6,-d/2,u/2,h,d/2,g,null);const S=p?.15:.45,v=u/2+S,b=d/2+S,T=p||o()<.32,_=T?v:Math.max(.2,v-b*.9),y=Jt(M,1.06),L=Jt(M,.9),P=Jt(M,.98);if(i.quad(-v,h,b,v,h,b,_,f,0,-_,f,0,y),i.quad(v,h,-b,-v,h,-b,-_,f,0,_,f,0,L),T?(i.tri(v-S,h,d/2,v-S,h,-d/2,v-S,f,0,g),i.tri(-v+S,h,-d/2,-v+S,h,d/2,-v+S,f,0,g)):(i.tri(v,h,b,v,h,-b,_,f,0,P),i.tri(-v,h,-b,-v,h,b,-_,f,0,P)),p){u>4.5&&h>2.1&&Bn(i,m,u,d,-1.3,1.3,0,Math.min(2.1,h-.15),G(14934488));continue}const R=Oi(4242+a),D=R()<.6?G(15855592):G(4014405),I=(ot,Nt,kt)=>ot===0?[Nt,d/2+kt]:ot===1?[Nt,-d/2-kt]:ot===2?[u/2+kt,Nt]:[-u/2-kt,Nt],A=(ot,Nt,kt,ue,oe,$e,ge,be,Je)=>{const[We,O]=I(ot,Nt,ue),[Xe,le]=I(ot,kt,oe);i.box(Math.min(We,Xe),$e,Math.min(O,le),Math.max(We,Xe),ge,Math.max(O,le),be,Je)};i.quad(-v,h-.2,b,v,h-.2,b,v,h,b,-v,h,b,D),i.quad(v,h-.2,-b,-v,h-.2,-b,-v,h,-b,v,h,-b,D),T||(i.quad(v,h-.2,b,v,h-.2,-b,v,h,-b,v,h,b,D),i.quad(-v,h-.2,-b,-v,h-.2,b,-v,h,b,-v,h,-b,D));const F=-Ve(t[a+4]/10),k=Math.cos(F)<0?1:-1,B=(T?v:_+.25*(v-_))-.5,J=Math.min(B,2.4+R()*1.4);if(R()<.38&&J>1&&f-h>.5){const ot=(R()-.5)*(B-J)*2,Nt=kt=>h+(f-h)*(1-kt)+.07;i.quad(ot-J,Nt(.74),k*b*.74,ot+J,Nt(.74),k*b*.74,ot+J,Nt(.26),k*b*.26,ot-J,Nt(.26),k*b*.26,G(1780295))}if(R()<.45){const ot=(R()-.5)*_;i.box(ot-.03,f-.1,-.03,ot+.03,f+1.5,.03,r,null),i.box(ot-.5,f+1.28,-.02,ot+.5,f+1.32,.02,r),i.box(ot-.35,f+1.03,-.02,ot+.35,f+1.07,.02,r)}R()<.3&&i.cyl((R()-.5)*_,h+(f-h)*.5-.05,-k*b*.5,.19,.19,.34,6,G(12106940),G(13619922));const H=m^1,Y=m<2?R()<.5?2:3:R()<.5?0:1,tt=Y<2?u:d,gt=H<2?u:d;if(R()<.3){const[ot,Nt]=I(Y,(R()<.5?1:-1)*(tt/2-1.3),1.25),kt=R()<.5?G(8359802):G(13223088);i.cyl(ot,0,Nt,1,1,2,8,kt,Jt(kt,.88))}if(R()<.55){const ot=(R()-.5)*gt*.5;A(H,ot-.42,ot+.42,0,.34,.1,.78,G(14277334))}if(R()<.42){const[ot,Nt]=I(H,(R()-.5)*gt*.4,3.4+R()*1.6);i.box(ot-.035,0,Nt-.035,ot+.035,2,Nt+.035,r,null),i.box(ot-1.15,1.95,Nt-.03,ot+1.15,2,Nt+.03,r),i.box(ot-.03,1.95,Nt-1.15,ot+.03,2,Nt+1.15,r)}const Pt=h>5.1?[1,3.75]:[1],K=Math.max(1,Math.floor(u/3.7));for(const ot of[0,1])for(const Nt of Pt)for(let kt=0;kt<K;kt++){const ue=-u/2+u*(kt+.5)/K;if(!(ot===m&&Nt<2&&(kt===0||kt===Math.floor(K/2)))&&(Bn(i,ot,u,d,ue-.86,ue+.86,Nt-.1,Nt+1.26,D,0,.03),Bn(i,ot,u,d,ue-.75,ue+.75,Nt,Nt+1.15,_s,o()<.45?.7:.04),ot===m&&Nt<2)){const[oe,$e]=I(m,ue,.75),ge=Gi[(a+kt)%Gi.length],be=.42+R()*.2;i.blob(oe,be*.6,$e,be,be*.75,be,6,3,Jt(ge,.78),Jt(ge,1.1))}}for(const ot of[2,3])Bn(i,ot,u,d,-.81,.81,.9,2.26,D,0,.03),Bn(i,ot,u,d,-.7,.7,1,2.15,_s,o()<.4?.7:.04);const nt=m<2?u:d,St=Wc[Math.floor(o()*Wc.length)];let Et,lt,Mt;if(m<2){const ot=-nt/2+nt*.5/K,Nt=Math.min(1.35,nt/K/2-.2);Et=ot-Nt,lt=ot+Nt,Mt=-nt/2+nt*(Math.floor(K/2)+.5)/K}else Et=-nt/2+.5,lt=-nt/2+3.1,Mt=nt/2-1.4;Bn(i,m,u,d,Et,lt,0,2.15,G(14868437));for(const ot of[.54,1.08,1.62])Bn(i,m,u,d,Et,lt,ot,ot+.03,G(11118495),0,.07);Bn(i,m,u,d,Mt-.62,Mt+.62,0,2.22,D,0,.03),Bn(i,m,u,d,Mt-.5,Mt+.5,0,2.1,St);const ee=Math.min(2.5,h-.2);if(A(m,Mt-.8,Mt+.8,0,.6,-.4,.3,s),R()<.6&&ee>2.1){A(m,Mt-1.75,Mt+1.75,0,1.75,-.4,.3,s),A(m,Mt-1.85,Mt+1.85,0,1.85,ee,ee+.14,D,Jt(M,.95));for(const ot of[-1.68,1.68])A(m,Mt+ot-.06,Mt+ot+.06,1.58,1.7,.3,ee,D,null)}const Ct=G(3104058);A(m,-nt/2-.95,-nt/2-.4,-1.15,-.6,0,1,Ct,G(11022890)),A(m,-nt/2-.95,-nt/2-.4,-1.85,-1.3,0,1,Ct,G(14268718));const $t=(t[a+8]??0)/10,qt=Math.min($t-.4,14);if(qt>2.5){const[ot,Nt]=I(m,Mt,.5),[kt,ue]=I(m,Mt,qt);n.line(i.wx(ot,Nt),i.wz(ot,Nt),i.wx(kt,ue),i.wz(kt,ue),1,nn[2]),qt>4.5&&(A(m,Mt+.84,Mt+.96,qt-2.56,qt-2.44,0,.95,r,null),A(m,Mt+.7,Mt+1.1,qt-2.64,qt-2.36,.95,1.24,D))}}}function Zg(i,t,e){i.frame();for(let n=0;n<t.length;n+=4){const s=t[n]/10,r=t[n+1]/10,a=t[n+2]/10,o=t[n+3]/10,l=Xc[n/4%Xc.length],c=Math.max(1,Math.round(Math.hypot(a-s,o-r)/6));for(let u=0;u<c;u++){const d=s+(a-s)*u/c,h=r+(o-r)*u/c,f=s+(a-s)*(u+1)/c,m=r+(o-r)*(u+1)/c,x=e.yAt(d,h),p=e.yAt(f,m),g=1.7;i.quad(d,x,h,f,p,m,f,p+g,m,d,x+g,h,l),i.quad(f,p,m,d,x,h,d,x+g,h,f,p+g,m,Jt(l,.9))}}}function $g(i,t,e,n){for(let u=0;u<e.lamps.length;u+=3){const d=e.lamps[u]/10,h=e.lamps[u+1]/10;i.frame(d,n.yAt(d,h),h,Ve(e.lamps[u+2]/10)),i.cyl(0,0,0,.12,.08,9.2,5,Hi),i.box(0,9.05,-.06,2.4,9.18,.06,Hi),i.box(1.7,8.9,-.24,2.6,9.05,.24,G(14211282),void 0,G(16773832),1)}for(let u=0;u<e.masts.length;u+=4){const d=e.masts[u]/10,h=e.masts[u+1]/10,f=e.masts[u+3]/10;i.frame(d,n.yAt(d,h),h,Ve(e.masts[u+2]/10));for(const m of[-1,1])i.box(-.14,0,m*f-.14,.14,7.6,m*f+.14,G(7830398));i.box(-.12,7.2,-f,.12,7.5,f,G(7830398));for(let m=-f+2.2;m<f-1;m+=4.2)i.box(-.04,6.1,m-.04,.04,7.2,m+.04,G(6251366),null)}for(let u=0;u<e.shelters.length;u+=3){const d=e.shelters[u]/10,h=e.shelters[u+1]/10;i.frame(d,n.yAt(d,h),h,Ve(e.shelters[u+2]/10)),i.box(-2.2,2.45,-.9,2.2,2.6,.9,G(15329764),void 0,G(13619146));for(const f of[-2,2])i.box(f-.07,0,.7,f+.07,2.45,.84,Hi,null);i.box(-2.1,.3,.74,2.1,2.2,.8,G(7309203)),i.box(-1.6,.42,.2,1.6,.5,.62,G(9071178))}const s=G(7034692),r=G(2961201);let a=null;for(let u=0;u<e.wires.length;u+=4){const d=e.wires[u]/10,h=e.wires[u+1]/10,f=n.yAt(d,h);i.frame(d,f,h,Ve(e.wires[u+2]/10)),i.cyl(0,0,0,.17,.12,9.6,5,s),i.box(-.07,8.75,-1.15,.07,8.9,1.15,s);const m=[-1.05,0,1.05].map(x=>[i.wx(0,x),f+8.95,i.wz(0,x)]);if(a)for(let x=0;x<3;x++){const[p,g,M]=a[x],[S,v,b]=m[x],T=(p+S)/2,_=(g+v)/2-.55,y=(M+b)/2;Ms(t,p,g,M,T,_,y,.022,.022,r),Ms(t,T,_,y,S,v,b,.022,.022,r)}a=e.wires[u+3]?m:null}const o=G(9409430),l=G(13119530),c=G(15921644);for(let u=0;u<e.signs.length;u+=4){const d=e.signs[u]/10,h=e.signs[u+1]/10,f=e.signs[u+3];if(i.frame(d,n.yAt(d,h)+jn,h,Ve(e.signs[u+2]/10)),f===4){i.box(-.27,0,-.27,.27,.95,.27,G(4020805),G(2500650));continue}if(f===5){i.cyl(0,0,0,.09,.09,.72,6,G(3882561)),i.cyl(0,.72,0,.1,.1,.16,6,G(15985360),null,1),i.cyl(0,.88,0,.11,.11,.05,6,G(3882561),G(3882561));continue}if(f===6){const m=G(9071178);i.box(-.25,.42,-.95,.25,.48,.95,m),i.box(-.3,.48,-.95,-.24,.92,.95,m);for(const x of[-.8,.8])i.box(-.24,0,x-.04,.22,.42,x+.04,o,null);continue}if(f===7){i.box(-.06,0,-.32,.06,2.3,.32,G(2051974)),i.quad(.065,1.55,.26,.065,1.55,-.26,.065,2.05,-.26,.065,2.05,.26,c);continue}if(i.cyl(0,0,0,.04,.04,f===3?2.75:2.4,4,o),f===0)i.tri(.04,2.42,.46,.04,2.42,-.46,.04,1.62,0,l),i.tri(.055,2.34,.31,.055,2.34,-.31,.055,1.8,0,c);else if(f===1)i.box(-.02,2,-.55,.02,2.6,-.05,G(15904798));else if(f===2){i.box(-.02,1.7,-.3,.02,2.3,.3,G(2908072));const m=(x,p,g,M)=>i.quad(.03,g,x,.03,g,p,.03,M,p,.03,M,x,c);m(.06,.14,1.8,2.2),m(-.12,.06,2.13,2.2),m(-.12,-.05,2,2.2),m(-.12,.06,2,2.06)}else i.box(-.5,2.5,-.015,.5,2.7,.015,G(2059077))}for(let u=0;u<e.signals.length;u+=2){const d=e.signals[u]/10,h=e.signals[u+1]/10;i.frame(d,n.yAt(d,h),h,u/2*1.57),i.cyl(0,0,0,.1,.09,3.9,5,G(5593436)),i.box(-.2,3,-.16,.2,4.1,.16,G(2763822));for(const[f,m]of[G(13646383),G(14722346),G(3844186)].entries())i.quad(-.11,3.78-f*.34,.17,.11,3.78-f*.34,.17,.11,3.98-f*.34,.17,-.11,3.98-f*.34,.17,m)}}function Jg(i,t,e){for(let n=0;n<t.shrubs.length;n+=3){const s=t.shrubs[n]/10,r=t.shrubs[n+1]/10,a=t.shrubs[n+2]/10,o=Gi[n/3%Gi.length];i.frame(s,e.yAt(s,r),r,n),i.blob(0,a*.62,0,a,a*.72,a,6,3,Jt(o,.8),Jt(o,1.12))}for(let n=0;n<t.people.length;n+=4){const s=t.people[n]/10,r=t.people[n+1]/10,a=n/4,o=.94+a*37%13/100;i.frame(s,e.yAt(s,r)+.28,r,Ve(90+t.people[n+2]/10)),i.box(-.17,0,-.1,.17,.84*o,.1,G(a%3?3422271:5989488),null),i.box(-.21,.84*o,-.12,.21,1.42*o,.12,qc[t.people[n+3]%qc.length]),i.blob(0,1.56*o,0,.11,.13,.11,6,3,Yc[a%Yc.length])}}function Qg(i,t,e){const[n,s,r,a]=i.box,o=5,l=Math.ceil((r-n)/o)+1,c=Math.ceil((a-s)/o)+1,u=new Float32Array(l*c*3),d=new Float32Array(l*c*3),h=new Float32Array(l*c*2);for(let g=0;g<c;g++)for(let M=0;M<l;M++){const S=g*l+M,v=n+(r-n)*M/(l-1),b=s+(a-s)*g/(c-1);u.set([v,e.yAt(v,b)+.25,b],S*3),d.set([0,1,0],S*3),h.set([M/(l-1),1-g/(c-1)],S*2)}const f=[];for(let g=0;g<c-1;g++)for(let M=0;M<l-1;M++){const S=g*l+M,v=S+1,b=S+l,T=b+1;f.push(S,b,v,v,b,T)}const m=new Me;m.setAttribute("position",new Wt(u,3)),m.setAttribute("normal",new Wt(d,3)),m.setAttribute("uv",new Wt(h,2)),m.setIndex(f),t.colorSpace=Te,t.anisotropy=8,t.premultiplyAlpha=!0,t.needsUpdate=!0;const x=new Sn({map:t,transparent:!0,premultipliedAlpha:!0,depthWrite:!1,roughness:.95,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),p=new se(m,x);return p.receiveShadow=!0,p.renderOrder=24,p.name="precinct-ground",p}function jg(i,t,e,n,s){const r={houses:[],fences:[],lamps:[],masts:[],shelters:[],signals:[],shrubs:[],people:[],labels:[],wires:[],signs:[],paint:[],marks:[],...i},a=new ln;a.name="precinct";const o=(y,L)=>{const P=new se(y.build(),Lc({roughness:.84,ownGlow:!0}));return P.castShadow=n,P.receiveShadow=n,P.name=L,P},l=new hr,c=Oi(4114);for(const y of r.buildings){const{floor:L,roofY:P,top:R,wall:D,onRoof:I}=Og(l,y,e,c,r.entry);if(y.k==="council"&&(Bg(l,r,L,P,y.a,I),r.entry)){zg(l,r.entry,L,R,D);const A=kg(r.entry,L);A&&a.add(A)}}const u=(y,L)=>L===1||L===5||y>=3.2;rh(l,r.trees,e,u),Yg(l,r.poles,e);const d=o(l,"precinct-model"),h=new hr,f=new Ng(e);Ug(f,r),Kg(h,r.houses,e,f),Zg(h,r.fences,e);const m=new hr;$g(h,m,r,e),Jg(h,r,e),r.entry&&Hg(h,r.entry,e),Xg(h,r.cars,e),rh(h,r.trees,e,(y,L)=>!u(y,L));const x=o(h,"precinct-streets"),p=o(m,"precinct-wires");p.castShadow=!1,x.add(p);const g=Qg(r,t,e),M=g.material,S=f.build(),v=S.material;a.add(g,S,d,x);const b=new z(r.centre[0],e.yAt(r.centre[0],r.centre[1]),r.centre[1]),T=26;ki.uHole.value.set(r.box[0]+T,r.box[1]+T,r.box[2]-T,r.box[3]-T);let _="";return{group:a,update(y){const L=y.distanceTo(b),P=L<9e3,R=L<s+450,D=te.clamp((2900-L)/1100,0,1)*(1-.72*Qn.value),I=`${P}${R}${D.toFixed(2)}`;return I===_?!1:(_=I,a.visible=P,x.visible=R,g.visible=D>.01,M.opacity=D,S.visible=R&&D>.01,v.opacity=D,ki.uHoleOn.value=P?D:0,!0)}}}const ah=[{width:14,minPx:2.8,fill:G(15902272),casing:G(10115858)},{width:11.5,minPx:2.4,fill:G(16172115),casing:G(10253344)},{width:10,minPx:1.7,fill:G(16311974),casing:G(9405269)},{width:8,minPx:1.2,fill:G(16250090),casing:G(9275772)},{width:6.5,minPx:.85,fill:G(15723746),casing:G(10131082)},{width:4,minPx:.6,fill:G(14868178),casing:G(10723219)},{width:3,minPx:.6,fill:G(12889474),casing:G(9403740)},{width:2,minPx:.5,fill:G(14470050),casing:G(10260336)}],t_=G(13482126),e_=[{classes:[6,7],fade:[3500,5500],glow:.12,casing:!1},{classes:[4,5],fade:[13e3,19e3],glow:.45,casing:!0},{classes:[3],fade:[34e3,46e3],glow:.65,casing:!0},{classes:[2],fade:[1e9,1e9],glow:.85,casing:!0},{classes:[0,1],fade:[1e9,1e9],glow:1,casing:!0}];function oh(i,t){const e=i.pts,n=e.length/2,s=[e[0],t.yAt(e[0],e[1]),e[1]];if(i.flags&Cc){let r=0;for(let c=1;c<n;c++)r+=Math.hypot(e[c*2]-e[c*2-2],e[c*2+1]-e[c*2-1]);const a=s[1],o=t.yAt(e[n*2-2],e[n*2-1]);let l=0;for(let c=1;c<n;c++){l+=Math.hypot(e[c*2]-e[c*2-2],e[c*2+1]-e[c*2-1]);const u=a+(o-a)*(r>0?l/r:1);s.push(e[c*2],Math.max(u,t.yAt(e[c*2],e[c*2+1])),e[c*2+1])}return s}for(let r=1;r<n;r++)t.drape(e[r*2-2],e[r*2-1],e[r*2],e[r*2+1],s);return s}function n_(i,t){var r;const e=new ln;e.name="roads";const n=[],s=ah.map(()=>[]);for(const a of i)(r=s[a.cls])==null||r.push(a);return e_.forEach((a,o)=>{const l=new Fn,c=new Fn;for(const d of a.classes){const h=ah[d];for(const f of s[d]){const m=oh(f,t),x=f.flags&Pc?.62:1,p=f.flags&Cc?void 0:t,g=!!(f.flags&V0)&&d>=3,M=g||d>5?zc:f.flags&(Pc|H0)||d>3?Pg:d===0?Ig:d===1?Dg:Lg;l.add(m,h.width*x,h.minPx*x,g?t_:h.fill,p,!1,M),a.casing&&c.add(m,h.width*x+2.4,h.minPx*x+1.5,h.casing,p,!1,M)}}const u=[];if(a.casing&&c.vertexCount){const d=new se(c.build(),On({lift:.3,glow:0,nightDim:.12,opacity:.85,hole:!0,street:"casing"}));d.renderOrder=10+o*2,u.push(d)}if(l.vertexCount){const d=new se(l.build(),On({lift:.45,glow:a.glow,hole:!0,street:"fill"}));d.renderOrder=11+o*2,u.push(d)}for(const d of u)d.userData.baseOpacity=d.material.opacity,e.add(d);n.push({fade:a.fade,meshes:u,opacity:1})}),{group:e,update(a){let o=!1;for(const l of n){const c=1-te.smoothstep(a,l.fade[0],l.fade[1]);if(!(Math.abs(c-l.opacity)<.004)){l.opacity=c,o=!0;for(const u of l.meshes)u.visible=c>.01,u.material.opacity=u.userData.baseOpacity*c}}return o}}}const Ss=-260,_o=1100,i_=`
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
`;function s_(i,t,e){const{nx:n,nz:s}=i,r=new Float32Array(n*s*3),a=new Float32Array(n*s*2);for(let f=0;f<s;f++)for(let m=0;m<n;m++){const x=f*n+m,p=i.xMin+m*i.dx,g=i.zMin+f*i.dz;r[x*3]=p,r[x*3+1]=i.y[x],r[x*3+2]=g,a[x*2]=(p+i.sizeX/2)/i.sizeX,a[x*2+1]=1-(g+i.sizeZ/2)/i.sizeZ}const o=new Uint32Array((n-1)*(s-1)*6);let l=0;for(let f=0;f<s-1;f++)for(let m=0;m<n-1;m++){const x=f*n+m,p=x+1,g=x+n,M=g+1;o[l++]=x,o[l++]=g,o[l++]=p,o[l++]=p,o[l++]=g,o[l++]=M}const c=new Me;c.setAttribute("position",new Wt(r,3)),c.setAttribute("uv",new Wt(a,2)),c.setIndex(new Wt(o,1)),c.computeBoundingSphere();const u=new Sn({map:t.ground,roughness:.95,metalness:0,flatShading:!0});u.onBeforeCompile=f=>{f.uniforms.uRelief={value:t.relief},f.uniforms.uLights={value:t.lights},f.uniforms.uNight=Qn,f.uniforms.uTime=e,f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = vec3(0.0, 1.0, 0.0);").replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform sampler2D uRelief;
uniform sampler2D uLights;
uniform float uNight;
uniform float uTime;
${i_}`).replace("#include <map_fragment>",`#include <map_fragment>
        vec4 lgRelief = texture2D(uRelief, vMapUv);
        float lgWater = smoothstep(0.35, 0.65, lgRelief.b);
        float lgCamDist = length(cameraPosition - vWPos);
        {
          // the ground texture is about 13 m per pixel: add fine grain up close so it does not read as blur
          float nearFade = (1.0 - smoothstep(900.0, 7000.0, lgCamDist)) * (1.0 - lgWater);
          float grain = lgNoise(vWPos.xz * 0.16) * 0.5 + lgNoise(vWPos.xz * 0.031) * 0.5;
          diffuseColor.rgb *= mix(1.0, 0.86 + 0.28 * grain, nearFade);
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
float lgNear = 1.0 - smoothstep(2500.0, 16000.0, lgCamDist);
roughnessFactor = mix(roughnessFactor, mix(0.5, 0.2, lgNear), lgWater);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        {
          vec2 nxz = lgRelief.rg * 2.0 - 1.0;
          vec2 rp = vWPos.xz * 0.011 + vec2(uTime * 0.045, uTime * 0.027);
          nxz += (vec2(lgNoise(rp), lgNoise(rp + 31.7)) - 0.5) * 0.07 * lgWater * lgNear;
          vec3 on = vec3(nxz.x * ${pr.toFixed(2)}, sqrt(max(1.0 - dot(nxz, nxz), 0.0)), nxz.y * ${pr.toFixed(2)});
          normal = normalize((viewMatrix * vec4(on, 0.0)).xyz); // the mesh is not transformed, so object space is world space
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          // from high up the whole street grid glows; close to the ground the lit streets themselves take over
          float lit = texture2D(uLights, vMapUv).r;
          float spread = mix(0.3, 1.0, smoothstep(1500.0, 12000.0, lgCamDist));
          totalEmissiveRadiance += vec3(1.0, 0.7, 0.36) * lit * lit * uNight * 1.5 * spread;
        }`)},u.customProgramCacheKey=()=>"logan-terrain";const d=new se(c,u);d.receiveShadow=!0,d.name="terrain";const h=new ln;return h.add(d,a_(i),o_(i)),h}function r_(i){const t=[];for(let e=0;e<i.nx;e++)t.push([i.xMin+e*i.dx,i.zMin]);for(let e=1;e<i.nz;e++)t.push([i.xMax,i.zMin+e*i.dz]);for(let e=i.nx-2;e>=0;e--)t.push([i.xMin+e*i.dx,i.zMax]);for(let e=i.nz-2;e>=1;e--)t.push([i.xMin,i.zMin+e*i.dz]);return t}function a_(i){const t=r_(i),e=t.length,n=[],s=[],r=[],a=new It(9074780),o=new It(6180669),l=new It(3813673),c=45;for(let h=0;h<e;h++){const[f,m]=t[h],[x,p]=t[(h+1)%e],g=i.yAt(f,m),M=i.yAt(x,p),S=x-f,v=p-m,b=Math.hypot(S,v)||1,T=v/b,_=-S/b;for(const[y,L,P,R,D,I]of[[g,g-c,M,M-c,a,o],[g-c,Ss,M-c,Ss,o,l]]){n.push(f,y,m,x,P,p,x,R,p,f,y,m,x,R,p,f,L,m);for(const A of[D,D,I,D,I,I])s.push(A.r,A.g,A.b);for(let A=0;A<6;A++)r.push(T,0,_)}}const u=new Me;u.setAttribute("position",new Re(n,3)),u.setAttribute("normal",new Re(r,3)),u.setAttribute("color",new Re(s,3));const d=new se(u,new Sn({vertexColors:!0,roughness:1,side:Ge}));return d.name="skirt",d}function o_(i){const t=new ln,e=i.xMax-i.xMin+_o*2,n=i.zMax-i.zMin+_o*2,s=1100,r=(i.xMin+i.xMax)/2,a=(i.zMin+i.zMax)/2,o=new se(new Ci(e,s,n),new Sn({color:1779245,roughness:.75,metalness:.1}));o.position.set(r,Ss-s/2,a),t.add(o);const l=document.createElement("canvas");l.width=2048,l.height=160;const c=l.getContext("2d");c.fillStyle="#1b262d",c.fillRect(0,0,l.width,l.height),c.fillStyle="#e9d9a6",c.textBaseline="middle",c.font="600 78px 'Space Grotesk', system-ui, sans-serif",c.fillText("LOGAN",40,84);const u=c.measureText("LOGAN").width;c.fillStyle="#9fb4bd",c.font="400 42px 'Space Grotesk', system-ui, sans-serif",c.fillText("City of Logan, Queensland   ·   27.76° S  153.05° E   ·   958 km²",40+u+46,88);const d=new Wa(l);d.colorSpace=Te,d.anisotropy=8;const h=12500,f=new se(new Li(h,h*(l.height/l.width)),new Hs({map:d,toneMapped:!1,fog:!1}));f.position.set(r-e/2+h/2+700,Ss-s/2,a+n/2+4),t.add(f);const m=document.createElement("canvas");m.width=m.height=256;const x=m.getContext("2d");x.fillStyle="#e9d9a6",x.beginPath(),x.moveTo(128,18),x.lineTo(176,150),x.lineTo(128,122),x.lineTo(80,150),x.closePath(),x.fill(),x.font="700 86px 'Space Grotesk', system-ui, sans-serif",x.textAlign="center",x.fillText("N",128,240);const p=new Wa(m);p.colorSpace=Te;const g=new se(new Li(850,850),new Hs({map:p,transparent:!0,toneMapped:!1,fog:!1}));return g.rotation.x=-Math.PI/2,g.position.set(i.xMax+_o/2,Ss+4,i.zMin+800),t.add(g),t}const Ne=1e3,xo=[5932872,6853456,7772757,5209412,8824160],lh=`
attribute vec4 aTree; // x, ground height, z, canopy radius
attribute float aSeed;
attribute float aPart; // 0 the canopy, 1 the trunk
uniform float uRange;
uniform vec3 uEye; // the viewer's position; cameraPosition is the light's during the shadow pass
`,ch=`
vec3 transformed;
float lgSlim = step(0.5, fract(aSeed * 3.1));
{
  float lgGrow = 1.0 - smoothstep(uRange * 0.65, uRange, distance(uEye, aTree.xyz));
  float r = aTree.w * lgGrow;
  float lgLift = 0.35 + 0.6 * fract(aSeed * 5.3);
  if (aPart > 0.5) {
    float lgTrunk = (0.055 * aTree.w + 0.1) * lgGrow;
    transformed = vec3(aTree.x + position.x * lgTrunk, aTree.y + position.y * (lgLift + 0.7) * r, aTree.z + position.z * lgTrunk);
  } else {
    float lgWide = r * mix(1.0, 0.74, lgSlim);
    transformed = vec3(aTree.x + position.x * lgWide, aTree.y + (position.y * 1.25 + 1.05 + lgLift) * r, aTree.z + position.z * lgWide);
  }
}
`;function l_(i,t,e,n,s,r,a){const o=new ln;o.name="trees";const l={value:n},c={value:new z},u=xo.map(R=>new It(R)),d=new Sn({flatShading:!0,roughness:.95,metalness:0});d.onBeforeCompile=R=>{R.uniforms.uRange=l,R.uniforms.uEye=c,R.uniforms.uGreens={value:u},R.uniforms.uNight=Qn,R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
${lh}
uniform vec3 uGreens[${xo.length}];
varying vec3 vLgColor;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = vec3(0.0, 1.0, 0.0);").replace("#include <begin_vertex>",`${ch}
        vLgColor = uGreens[int(aSeed * ${xo.length}.0)] * (0.8 + 0.3 * fract(aSeed * 9.7)) * (0.72 + 0.28 * smoothstep(-0.6, 0.9, position.y));
        vLgColor = mix(vLgColor, vec3(0.36, 0.45, 0.33) * (0.8 + 0.3 * fract(aSeed * 9.7)), 0.55 * lgSlim); // the grey-green of gums
        if (aPart > 0.5) vLgColor = mix(vec3(0.33, 0.26, 0.2), vec3(0.62, 0.58, 0.5), lgSlim) * (0.85 + 0.3 * fract(aSeed * 7.9));`),R.fragmentShader=R.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLgColor;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = vLgColor;`)},d.customProgramCacheKey=()=>"logan-tree";const h=new $a({depthPacking:Ko});h.onBeforeCompile=R=>{R.uniforms.uRange=l,R.uniforms.uEye=c,R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
${lh}`).replace("#include <begin_vertex>",ch)},h.customProgramCacheKey=()=>"logan-tree-depth";const f=new Ka(1,0).getAttribute("position"),m=Array.from(f.array),x=new Array(f.count).fill(0);for(let R=0;R<3;R++){const D=R/3*Math.PI*2,I=(R+1)/3*Math.PI*2,A=Math.cos(D),F=Math.sin(D),k=Math.cos(I),B=Math.sin(I);m.push(A,0,F,k,1,B,k,0,B,A,0,F,A,1,F,k,1,B),x.push(1,1,1,1,1,1)}const p=new Wt(new Float32Array(m),3),g=new Wt(new Float32Array(x),1),[M,S]=e,v=t.w/M,b=t.h/S,T=(R,D)=>{const I=Math.sin(R*127.1+D*311.7)*43758.5453;return I-Math.floor(I)};function _(R,D){const I=R*Ne-M/2,A=D*Ne-S/2,F=[],k=[];let B=1/0,J=-1/0;const H=Math.ceil(Ne/s);for(let gt=0;gt<H;gt++)for(let Pt=0;Pt<H;Pt++){const K=Math.round(I/s)+Pt,nt=Math.round(A/s)+gt,St=T(K,nt),Et=T(nt+17.3,K-5.1),lt=T(K*1.7+3.1,nt*2.3),Mt=(K+St)*s,ee=(nt+Et)*s;if(!i.inside(Mt,ee,60)||Mt>a[0]&&Mt<a[2]&&ee>a[1]&&ee<a[3])continue;const Ct=Math.min(t.h-1,Math.max(0,Math.floor((ee+S/2)*b)))*t.w+Math.min(t.w-1,Math.max(0,Math.floor((Mt+M/2)*v)));if(!t.wooded[Ct]||t.built[Ct]>46+lt*30||lt>.9)continue;const $t=i.yAt(Mt,ee),qt=3.4+lt*3.2+St*1.4;F.push(Mt,$t-.5,ee,qt),k.push(Et),B=Math.min(B,$t),J=Math.max(J,$t+qt*3.4)}if(!k.length)return null;const Y=new Xl;Y.setAttribute("position",p.clone()),Y.setAttribute("aPart",g.clone()),Y.setAttribute("aTree",new ls(new Float32Array(F),4)),Y.setAttribute("aSeed",new ls(new Float32Array(k),1)),Y.instanceCount=k.length,Y.boundingSphere=new rs(new z(I+Ne/2,(B+J)/2,A+Ne/2),Math.hypot(Ne*.75,(J-B)/2)+20);const tt=new se(Y,d);return tt.customDepthMaterial=h,tt.castShadow=r,tt.receiveShadow=r,tt}const y=new Map,L=Math.ceil(M/Ne),P=Math.ceil(S/Ne);return{group:o,update(R){c.value.copy(R);const D=n+Ne*.75,I=(R.x+M/2)/Ne,A=(R.z+S/2)/Ne,F=Math.ceil(D/Ne);let k=0,B=!1;const J=R.y-i.yAt(R.x,R.z)<n;if(J)for(let H=Math.max(0,Math.floor(A-F));H<=Math.min(P-1,Math.floor(A+F));H++)for(let Y=Math.max(0,Math.floor(I-F));Y<=Math.min(L-1,Math.floor(I+F));Y++){const tt=H*L+Y;if(y.has(tt)||Math.hypot((Y+.5-I)*Ne,(H+.5-A)*Ne)>D)continue;if(k>=2){B=!0;continue}const gt=_(Y,H);y.set(tt,gt),gt&&o.add(gt),k++}for(const[H,Y]of y)(!J||Math.hypot((H%L+.5-I)*Ne,(Math.floor(H/L)+.5-A)*Ne)>D+Ne*2)&&(Y&&(o.remove(Y),Y.geometry.dispose()),y.delete(H));return k>0||B}}}const c_={rise:5.75*60,set:18*60,noon:62},hh=220,uh=125e3,h_={high:{step:1,range:7500,minArea:0,trees:[2400,15],shadow:4096,pixelRatio:2},medium:{step:2,range:5200,minArea:45,trees:[1800,19],shadow:2048,pixelRatio:1.5},low:{step:3,range:3600,minArea:60,trees:[1200,24],shadow:0,pixelRatio:1}},u_=new It(1,1,1),d_=()=>new Promise(i=>requestAnimationFrame(()=>i())),dh=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class f_{constructor(t,e,n,s){st(this,"renderer");st(this,"scene",new Uu);st(this,"camera",new dn(38,1,5,9e5));st(this,"controls");st(this,"atmosphere");st(this,"fog",new Ra(16777215,1,2));st(this,"hf");st(this,"map");st(this,"roads");st(this,"buildings");st(this,"precinct");st(this,"trees");st(this,"labels");st(this,"places",[]);st(this,"shapes",[]);st(this,"roadData",[]);st(this,"streets");st(this,"suburbLines");st(this,"divisionLines");st(this,"selection");st(this,"time",{value:0});st(this,"flood");st(this,"floodInfo");st(this,"floodRise");st(this,"raf",0);st(this,"last",0);st(this,"dirty",!0);st(this,"animating",!0);st(this,"disposed",!1);st(this,"abort",new AbortController);st(this,"resizeObserver");st(this,"flight");st(this,"lastCompass",NaN);st(this,"width",1);st(this,"height",1);st(this,"quality","high");st(this,"pixelRatio",1);st(this,"slowFrames",0);st(this,"press");st(this,"external");st(this,"solar",NaN);st(this,"idle",0);st(this,"focus",new z);st(this,"onPointerDown",t=>{this.press=t.button===0&&t.isPrimary?{x:t.clientX,y:t.clientY,t:performance.now()}:void 0});st(this,"onPointerUp",t=>{const e=this.press;if(this.press=void 0,!e||Math.hypot(t.clientX-e.x,t.clientY-e.y)>6||performance.now()-e.t>600)return;const n=this.groundPoint(t.clientX,t.clientY),s=n?this.suburbAt(n.x,n.z):-1;s>=0&&this.cb.onSelect({kind:"suburb",index:s})});st(this,"onKey",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=this.currentView(),n=e.dist*.12,s=te.degToRad(e.azimuth),r=-Math.sin(s),a=-Math.cos(s),o=Math.cos(s),l=-Math.sin(s);let c=null;switch(t.key){case"ArrowUp":c={...e,x:e.x+r*n,z:e.z+a*n};break;case"ArrowDown":c={...e,x:e.x-r*n,z:e.z-a*n};break;case"ArrowLeft":c={...e,x:e.x-o*n,z:e.z-l*n};break;case"ArrowRight":c={...e,x:e.x+o*n,z:e.z+l*n};break;case"+":case"=":c={...e,dist:e.dist*.8};break;case"-":case"_":c={...e,dist:e.dist*1.25};break;case"q":case"Q":c={...e,azimuth:e.azimuth-15};break;case"e":case"E":c={...e,azimuth:e.azimuth+15};break;case"r":case"R":c={...e,polar:e.polar-6};break;case"f":case"F":c={...e,polar:e.polar+6};break;case"Home":c=this.homeView();break;default:return}t.preventDefault(),this.fly(c,.3)});st(this,"frame",t=>{var u,d,h,f,m;if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);const e=(t-this.last)/1e3,n=Math.min(.1,e);if(this.last=t,document.hidden)return;if(this.flight){const x=this.flight;x.t=Math.min(1,x.t+n/x.duration);const p=dh(x.t),g=(M,S)=>M+(S-M)*p;this.applyView({x:g(x.from.x,x.to.x),z:g(x.from.z,x.to.z),dist:Math.exp(g(Math.log(x.from.dist),Math.log(x.to.dist))),polar:g(x.from.polar,x.to.polar),azimuth:g(x.from.azimuth,x.to.azimuth)}),x.t>=1&&(this.flight=void 0)}if(!this.external&&this.controls.update()&&(this.dirty=!0),this.atmosphere.update(n)&&(this.dirty=!0),this.floodRise&&this.flood){const x=this.floodRise;x.t=Math.min(1,x.t+n/4);const p=.35+.65*dh(x.t);this.flood.setLevel(p),this.time.value+=n,this.cb.onFloodLevel(p),x.t>=1&&(this.floodRise=void 0),this.dirty=!0}const s=this.camera;let r=this.controls.target,a;if(this.external){if(!this.dirty){this.idle++;return}this.dirty=!1,this.idle=0;const x=this.hf.yAt(s.position.x,s.position.z);s.position.y<x+1.2&&(s.position.y=x+1.2);const p=s.getWorldDirection(this.focus),g=s.position.y-x;a=te.clamp(p.y<-.08?g/-p.y:g*6,60,15e4),r=this.focus.multiplyScalar(a).add(s.position),r.y=this.hf.yAt(r.x,r.z)}else{const x=this.hf.yAt(r.x,r.z)-r.y;if(Math.abs(x)>.5){const g=x*Math.min(1,n*7);r.y+=g,s.position.y+=g,this.dirty=!0}if(!this.dirty)return;this.dirty=!1;const p=this.hf.yAt(s.position.x,s.position.z)+25;s.position.y<p&&(s.position.y=p),a=s.position.distanceTo(r)}const o=te.clamp(a*.02,this.external?.6:3,700),l=te.clamp(a*10+7e4,7e4,9e5);if((Math.abs(o-s.near)>s.near*.05||Math.abs(l-s.far)>s.far*.05)&&(s.near=o,s.far=l,s.updateProjectionMatrix()),this.fog.color.copy(this.atmosphere.horizon),this.fog.near=a*1.6+2500,this.fog.far=a*6+75e3,ki.uTint.value.copy(this.atmosphere.sun.color).lerp(u_,.45),ki.uStreet.value=1-te.smoothstep(a,650,1500),(u=this.roads)!=null&&u.update(a)&&(this.dirty=!0),(d=this.buildings)!=null&&d.update(s.position)&&(this.dirty=!0),(h=this.trees)!=null&&h.update(s.position)&&(this.dirty=!0),(f=this.precinct)!=null&&f.update(s.position)&&(this.dirty=!0),this.atmosphere.aimShadow(r,a),this.renderer.render(this.scene,s),(m=this.labels)==null||m.update(s,this.width,this.height,this.external?Math.max(280,a*6):1/0),e<.25&&(this.slowFrames=e>.042?this.slowFrames+1:Math.max(0,this.slowFrames-2),this.slowFrames>50&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio*.75),this.renderer.setPixelRatio(this.pixelRatio),this.resize(),this.slowFrames=0)),this.external)return;const c=Math.round(this.currentView().azimuth);c!==this.lastCompass&&(this.lastCompass=c,this.cb.onCompass(c))});this.container=t,this.labelLayer=e,this.cb=n,this.opts=s,this.external=!!s.external}async init(){var u;try{this.renderer=new z0({antialias:!0,powerPreference:"high-performance"})}catch{this.cb.onError("This browser could not start WebGL, which the 3D map needs.");return}const t=this.renderer;this.quality=this.pickQuality();const e=h_[this.quality];this.pixelRatio=Math.min(window.devicePixelRatio||1,e.pixelRatio),t.setPixelRatio(this.pixelRatio),t.outputColorSpace=Te,t.toneMapping=Ar,t.shadowMap.enabled=e.shadow>0,t.shadowMap.type=Wi;const n=t.domElement;n.tabIndex=0,this.external?(n.tabIndex=-1,n.setAttribute("role","img"),n.setAttribute("aria-label","3D map of Logan")):(n.setAttribute("role","application"),n.setAttribute("aria-label","3D map of Logan. Drag to pan, right-drag to rotate, scroll to zoom, click a suburb to select it. Arrow keys pan, plus and minus zoom, Q and E rotate.")),n.style.display="block",n.style.outlineOffset="-3px",this.container.appendChild(n),n.addEventListener("webglcontextlost",d=>{d.preventDefault(),this.disposed||this.cb.onError("The browser reclaimed the graphics memory this map was using.")});let s;try{s=await Y0(this.opts.assets,(d,h)=>this.cb.onProgress(d*.6,h),this.abort.signal)}catch(d){this.disposed||this.cb.onError(d instanceof Error?d.message:"The map data could not be loaded.");return}if(this.disposed)return;const{map:r,heights:a}=s;this.map=r,s.ground.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());const o=async(d,h)=>{this.cb.onProgress(d,h),await d_()};await o(.62,"Shaping the terrain");const l=this.hf=new Eg(a,r.meta.grid[0],r.meta.grid[1],r.meta.size[0],r.meta.size[1],e.step);if(this.scene.add(s_(l,s,this.time)),await o(.7,"Laying out the streets"),this.roadData=s.roads,this.roads=n_(s.roads,l),this.scene.add(this.roads.group,this.buildRail()),await o(.8,"Raising the buildings"),this.buildings=Sg(s.buildings,r,l,e.range,e.minArea,e.shadow>0),this.scene.add(this.buildings.group),this.trees=l_(l,s.cover,r.meta.size,e.trees[0],e.trees[1],e.shadow>0,r.precinct.box),this.precinct=jg(r.precinct,s.precinctGround,l,e.shadow>0,e.range),this.scene.add(this.trees.group,this.precinct.group),await o(.9,"Drawing the boundaries"),this.shapes=r.suburbs.map(d=>{const h=d.r.map(m=>new Float32Array(m.map(x=>x/10))),f=[1/0,1/0,-1/0,-1/0];for(const m of h)for(let x=0;x<m.length;x+=2)f[0]=Math.min(f[0],m[x]),f[1]=Math.min(f[1],m[x+1]),f[2]=Math.max(f[2],m[x]),f[3]=Math.max(f[3],m[x+1]);return{rings:h,box:f}}),this.buildBoundaries(),this.disposed)return;this.atmosphere=new mg(t,null,e.shadow),this.scene.add(this.atmosphere.sky,this.atmosphere.sun,this.atmosphere.sun.target,this.atmosphere.hemi),this.scene.fog=this.fog,this.places=Cg(r.meta,l,(d,h)=>{var f;return((f=r.suburbs[this.suburbAt(d,h)])==null?void 0:f.n)??""}),this.labels=new Tg(this.labelLayer,this.labelDefs(),d=>this.pickLabel(d)),this.labels.setKindVisible("division",!1),(u=document.fonts)==null||u.ready.then(()=>{var d;(d=this.labels)==null||d.remeasure(),this.dirty=!0}),this.setupControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize();const c=this.homeView();this.external?(this.controls.enabled=!1,this.animating=!window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.applyView(c)):window.matchMedia("(prefers-reduced-motion: reduce)").matches?(this.animating=!1,this.applyView(c)):(this.applyView({...c,dist:c.dist*1.1,polar:10,azimuth:-24}),this.fly(c,3.2)),this.cb.onProgress(1,"Ready"),this.cb.onReady({quality:this.quality,places:this.places,suburbs:r.suburbs.map((d,h)=>({index:h,name:d.n,areaKm2:d.a,buildings:d.b,low:d.e[0],high:d.e[1],wooded:d.t,streetKm:d.s})),facts:{areaKm2:r.meta.areaKm2,buildings:r.meta.buildings,streetKm:r.meta.streetKm,wooded:r.meta.treeCover,peakMetres:r.meta.peak.m,peakSuburb:r.meta.peak.suburb}}),this.last=performance.now(),this.raf=requestAnimationFrame(this.frame)}setTimeOfDay(t){var e;(e=this.atmosphere)==null||e.set(t,!this.animating),this.dirty=!0}async floodScenarios(){return this.floodInfo||(this.floodInfo=await Z0(this.opts.assets.flood,this.abort.signal)),this.floodInfo}async showFlood(t){var n;if(this.floodRise=void 0,!t){(n=this.flood)==null||n.hide(),this.dirty=!0;return}const e=await this.floodScenarios();this.flood||(this.flood=new $0(this.hf,e,this.time,this.opts.assets.floodLevels),this.scene.add(this.flood.mesh)),await this.flood.show(t,this.abort.signal),!this.disposed&&(this.animating?(this.floodRise={t:0},this.flood.setLevel(.35)):(this.flood.setLevel(1),this.cb.onFloodLevel(1)),this.dirty=!0)}setFloodLevel(t){var e;this.floodRise=void 0,(e=this.flood)==null||e.setLevel(t),this.dirty=!0}setLayerVisible(t,e){var n,s,r;t==="suburbs"&&this.suburbLines?(this.suburbLines.visible=e,(n=this.labels)==null||n.setKindVisible("suburb",e)):t==="divisions"&&this.divisionLines?(this.divisionLines.visible=e,(s=this.labels)==null||s.setKindVisible("division",e)):t==="labels"&&((r=this.labels)==null||r.setVisible(e)),this.dirty=!0}setLabelObstacles(t){var e;(e=this.labels)==null||e.setObstacles(t),this.dirty=!0}selectSuburb(t,e=!1){const n=t===null?void 0:this.shapes[t];if(this.highlight(n?n.rings.map(s=>this.drapeRing(s)):[]),n&&t!==null&&e){const s=this.map.suburbs[t],r=Math.max(n.box[2]-n.box[0],n.box[3]-n.box[1]);this.fly({x:s.c[0],z:s.c[1],dist:te.clamp(r*1.9,3200,42e3),polar:46,azimuth:0},2.2)}}findStreets(t,e=40){const n=t.trim().toLowerCase();if(n.length<2)return[];const s=[],r=[];for(const a of this.streetIndex()){const o=a.name.toLowerCase().indexOf(n);if(!(o<0)&&((o===0?s:r).push({id:a.id,name:a.name,suburb:a.suburb}),s.length>=e))break}return s.concat(r).slice(0,e)}selectStreet(t){const e=this.streetIndex()[t];if(!e)return;this.highlight(e.roads.map(s=>oh(s,this.hf)));const n=Math.max(e.box[2]-e.box[0],e.box[3]-e.box[1]);this.fly({x:(e.box[0]+e.box[2])/2,z:(e.box[1]+e.box[3])/2,dist:te.clamp(n*2.2,900,16e3),polar:48,azimuth:0},2.2)}flyToPlace(t){const e=this.places.find(n=>n.id===t);e&&this.fly({x:e.x,z:e.z,dist:e.view[0],polar:e.view[1],azimuth:e.view[2]},2.4)}resetView(){this.fly(this.homeView(),2)}setView(t,e,n,s,r,a=1.5){this.fly({x:t,z:e,dist:n,polar:s,azimuth:r},a)}faceNorth(){this.fly({...this.currentView(),azimuth:0},.8)}zoomBy(t){const e=this.currentView();this.fly({...e,dist:e.dist*t},.35)}setExternalCamera(t,e,n,s,r){const a=this.camera;!this.hf||a.position.x===t&&a.position.y===e&&a.position.z===n&&a.rotation.y===s&&a.rotation.x===r||(a.position.set(t,e,n),a.rotation.set(r,s,0,"YXZ"),this.dirty=!0)}getCamera(){const t=new Cn().setFromQuaternion(this.camera.quaternion,"YXZ");return{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z,yaw:t.y,pitch:t.x}}setSolarMinutes(t){const e=Math.round(t);e===this.solar||!this.atmosphere||(this.solar=e,this.atmosphere.setSolar(e,c_),this.dirty=!0)}setAnimating(t){this.animating=t}groundAt(t,e){return this.hf.yAt(t,e)}waterAt(t,e,n=!1){return this.flood?this.flood.surfaceAt(t,e,n):-1/0}overview(){const t=this.homeView(),e=te.degToRad(t.polar);return{x:t.x,y:this.hf.yAt(t.x,t.z)+t.dist*Math.cos(e),z:t.z+t.dist*Math.sin(e),yaw:0,pitch:e-Math.PI/2}}get settled(){return this.idle>=3}get fov(){return this.camera.fov}get bounds(){return[this.hf.xMin,this.hf.xMax,this.hf.zMin,this.hf.zMax]}fromLatLon(t,e){return mo(this.map.meta,t,e)}dispose(){var e,n,s;if(this.disposed=!0,this.abort.abort(),cancelAnimationFrame(this.raf),(e=this.resizeObserver)==null||e.disconnect(),(n=this.labels)==null||n.dispose(),(s=this.controls)==null||s.dispose(),!this.renderer)return;const t=this.renderer.domElement;t.removeEventListener("keydown",this.onKey),t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointerup",this.onPointerUp),this.scene.traverse(r=>{var l,c,u;const a=r;(c=(l=a.geometry)==null?void 0:l.dispose)==null||c.call(l);const o=Array.isArray(a.material)?a.material:a.material?[a.material]:[];for(const d of o){for(const h of Object.values(d))h instanceof Ae&&h.dispose();d.dispose()}(u=a.customDepthMaterial)==null||u.dispose()}),this.renderer.dispose(),t.remove()}homeView(){const t=this.width>=768&&!this.external,e=2*Math.atan(Math.tan(te.degToRad(this.camera.fov)/2)*this.camera.aspect),n=te.clamp((t?29e3:25500)/Math.tan(e/2),t?66e3:6e4,112e3);return{x:t?-n*.075:0,z:n*.04,dist:n,polar:t?38:30,azimuth:0}}suburbAt(t,e){for(let n=0;n<this.shapes.length;n++){const{rings:s,box:r}=this.shapes[n];if(t<r[0]||t>r[2]||e<r[1]||e>r[3])continue;let a=!1;for(const o of s)for(let l=0,c=o.length-2;l<o.length;c=l,l+=2)o[l+1]>e!=o[c+1]>e&&t<(o[c]-o[l])*(e-o[l+1])/(o[c+1]-o[l+1])+o[l]&&(a=!a);if(a)return n}return-1}highlight(t){if(this.selection&&(this.scene.remove(this.selection),this.selection.geometry.dispose(),this.selection.material.dispose(),this.selection=void 0),t.length){const e=new Fn;for(const n of t)e.add(n,0,9,G(858142));for(const n of t)e.add(n,0,4.5,G(16765440));this.selection=new se(e.build(),On({lift:4,nightDim:1})),this.selection.renderOrder=34,this.scene.add(this.selection)}this.dirty=!0}streetIndex(){if(this.streets)return this.streets;const t=new Map;for(const e of this.roadData){if(!e.name||e.cls>5)continue;const n=e.pts,s=Math.floor(n.length/4)*2,r=this.suburbAt(n[s],n[s+1]);if(r<0)continue;const a=`${e.name}:${r}`;let o=t.get(a);o||(o={id:0,name:this.map.roadNames[e.name],suburb:this.map.suburbs[r].n,roads:[],box:[1/0,1/0,-1/0,-1/0]},t.set(a,o)),o.roads.push(e);for(let l=0;l<n.length;l+=2)o.box[0]=Math.min(o.box[0],n[l]),o.box[1]=Math.min(o.box[1],n[l+1]),o.box[2]=Math.max(o.box[2],n[l]),o.box[3]=Math.max(o.box[3],n[l+1])}return this.streets=[...t.values()].sort((e,n)=>e.name.localeCompare(n.name)||e.suburb.localeCompare(n.suburb)),this.streets.forEach((e,n)=>e.id=n),this.streets}drapeRing(t){const e=[t[0],this.hf.yAt(t[0],t[1]),t[1]];for(let n=2;n<t.length;n+=2)this.hf.drape(t[n-2],t[n-1],t[n],t[n+1],e);return e}buildBoundaries(){const{map:t}=this,e=c=>c.map(u=>u/10),n=new Fn;for(const c of this.shapes)for(const u of c.rings)n.add(this.drapeRing(u),0,1.3,G(16777215));this.suburbLines=new se(n.build(),On({lift:2,opacity:.6,nightDim:.75})),this.suburbLines.renderOrder=28;const s=new Fn;for(const c of t.divisions)for(const u of c.r)s.add(this.drapeRing(e(u)),0,2.4,G(5556479));this.divisionLines=new se(s.build(),On({lift:3,opacity:.95,nightDim:.9})),this.divisionLines.renderOrder=30,this.divisionLines.visible=!1;const r=new Fn,a=new Fn;for(const c of t.boundary){const u=this.drapeRing(e(c));r.add(u,0,7,G(1057836)),a.add(u,0,3,G(16773288))}const o=new se(r.build(),On({lift:3,opacity:.45,nightDim:.4}));o.renderOrder=31;const l=new se(a.build(),On({lift:3.5,nightDim:.95}));l.renderOrder=32,this.scene.add(this.suburbLines,this.divisionLines,o,l)}buildRail(){const t=new Fn,e=new Fn;for(const a of this.map.rail){const o=this.drapeRing(a.map(l=>l/10));t.add(o,7,3.4,G(16052970)),e.add(o,3.4,1.7,G(4013895))}const n=new ln;n.name="rail";const s=new se(t.build(),On({lift:.5,opacity:.9,nightDim:.25,hole:!0}));s.renderOrder=22;const r=new se(e.build(),On({lift:.6,nightDim:.5,hole:!0}));return r.renderOrder=23,n.add(s,r),n}labelDefs(){const{map:t,hf:e}=this,n=(o,l,c)=>({x:o,z:l,y:e.yAt(o,l)+c}),s=[];t.suburbs.map((o,l)=>({s:o,i:l})).sort((o,l)=>l.s.b-o.s.b).forEach(({s:o,i:l},c)=>{s.push({id:`suburb:${l}`,name:o.n,kind:"suburb",...n(o.c[0],o.c[1],30),priority:20+c*.4,maxDist:c<16?1/0:c<36?62e3:c<56?36e3:24e3})});for(const o of this.places)s.push({id:`place:${o.id}`,name:o.name,kind:o.kind,x:o.x,y:o.y,z:o.z,priority:o.priority,maxDist:o.maxDist});for(const o of Rg){const[l,c]=mo(t.meta,o.lat,o.lon);s.push({id:`text:${o.name}:${o.lat}`,name:o.name,kind:o.kind,...n(l,c,20),priority:o.kind==="water"?9.5:40,maxDist:o.maxDist})}for(const o of t.precinct.labels??[])s.push({id:`text:${o.n}:${o.x}`,name:o.n,kind:o.k,...n(o.x,o.z,o.l),priority:44,maxDist:o.d});for(const o of t.stations)o.city&&s.push({id:`station:${o.n}`,name:`${o.n} station`,kind:"station",...n(o.x,o.z,30),priority:50,maxDist:9e3});const a=t.meta.peak;s.push({id:"peak",name:`Highest ground · ${a.m} m`,kind:"peak",...n(a.x,a.z,60),priority:16});for(const o of t.divisions)s.push({id:`division:${o.n}`,name:`Division ${o.n}`,kind:"division",...n(o.c[0],o.c[1],40),priority:6});for(const o of t.neighbours)s.push({id:`region:${o.n}`,name:o.n,kind:"region",...n(o.c[0],o.c[1],0),priority:5,minDist:14e3});return s}pickLabel(t){if(t==="peak"){const r=this.map.meta.peak;this.fly({x:r.x,z:r.z,dist:9e3,polar:62,azimuth:30},2.4),this.cb.onSelect({kind:"peak"});return}const e=t.indexOf(":"),n=t.slice(0,e),s=t.slice(e+1);if(n==="suburb")this.cb.onSelect({kind:"suburb",index:Number(s)});else if(n==="place")this.cb.onSelect({kind:"place",id:s});else if(n==="station"){const r=this.map.stations.find(a=>a.n===s);r&&this.fly({x:r.x,z:r.z,dist:1300,polar:58,azimuth:this.currentView().azimuth},2),this.cb.onSelect({kind:"station",name:s})}}groundPoint(t,e){const n=this.renderer.domElement.getBoundingClientRect(),s=new Dt((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),r=new Yl;r.setFromCamera(s,this.camera);const a=r.ray.origin,o=r.ray.direction,l=new z;let c=0,u=0;for(let d=0;d<4e3&&c<25e4;d++){l.copy(a).addScaledVector(o,c);const h=l.y-this.hf.yAt(l.x,l.z);if(h<=0){let f=u,m=c;for(let x=0;x<20;x++){const p=(f+m)/2;l.copy(a).addScaledVector(o,p),l.y-this.hf.yAt(l.x,l.z)>0?f=p:m=p}return this.hf.inside(l.x,l.z)?l:null}u=c,c+=Math.max(12,h*.4)}return null}pickQuality(){const t=new URLSearchParams(window.location.search).get("quality");if(t==="high"||t==="medium"||t==="low")return t;const e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),s=n?String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)):"";if(/swiftshader|llvmpipe|software/i.test(s))return"low";const r=navigator.deviceMemory??8;return window.matchMedia("(pointer: coarse)").matches||r<=4?"medium":"high"}setupControls(){const t=this.controls=new dg(this.camera,this.renderer.domElement);if(t.enableDamping=!0,t.dampingFactor=.09,t.screenSpacePanning=!1,t.zoomToCursor=!0,t.minDistance=hh,t.maxDistance=uh,t.maxPolarAngle=te.degToRad(82),t.zoomSpeed=1.1,t.addEventListener("start",()=>{this.flight=void 0}),t.addEventListener("change",()=>{const n=t.target;n.x=te.clamp(n.x,this.hf.xMin,this.hf.xMax),n.z=te.clamp(n.z,this.hf.zMin,this.hf.zMax),this.dirty=!0}),this.external)return;const e=this.renderer.domElement;e.addEventListener("keydown",this.onKey),e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointerup",this.onPointerUp)}clampView(t){return{x:te.clamp(t.x,this.hf.xMin,this.hf.xMax),z:te.clamp(t.z,this.hf.zMin,this.hf.zMax),dist:te.clamp(t.dist,hh,uh),polar:te.clamp(t.polar,2,82),azimuth:t.azimuth}}currentView(){const t=this.controls.target,e=new nr().setFromVector3(this.camera.position.clone().sub(t));return{x:t.x,z:t.z,dist:e.radius,polar:te.radToDeg(e.phi),azimuth:te.radToDeg(e.theta)}}applyView(t){const e=new nr(t.dist,te.degToRad(t.polar),te.degToRad(t.azimuth)),n=this.controls.target.set(t.x,this.hf.yAt(t.x,t.z),t.z);this.camera.position.setFromSpherical(e).add(n),this.camera.lookAt(n),this.dirty=!0}fly(t,e){if(t=this.clampView(t),!this.animating){this.flight=void 0,this.applyView(t),this.controls.update();return}const n=this.currentView();let s=(t.azimuth-n.azimuth)%360;s>180&&(s-=360),s<-180&&(s+=360),this.flight={from:n,to:{...t,azimuth:n.azimuth+s},t:0,duration:e}}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.fov=t/e<.8?52:38,this.camera.updateProjectionMatrix(),ki.uPixel.value=2*Math.tan(te.degToRad(this.camera.fov)/2)/e,this.dirty=!0}}const p_="6",vo="Map and flood data © State of Queensland · Elevation © Geoscience Australia · Rainfall and river heights © Bureau of Meteorology (CC BY 4.0)",m_=`
.lgn-embed, .lgn-embed-layer { position: absolute; inset: 0; overflow: hidden; }
/* the labels sit over the map but never take a touch: drags and pinches must reach whatever the host listens on */
.lgn-embed-labels, .lgn-embed .lgn-label, .lgn-embed button.lgn-label { pointer-events: none; cursor: default; }
/* --inv-credit-bottom: the name the Inverloch model uses, so one host rule places either credit */
.lgn-embed-credit { position: absolute; left: 12px; right: 12px; bottom: var(--lgn-credit-bottom, var(--inv-credit-bottom, 6px)); width: fit-content; margin: 0 auto;
  padding: 2px 8px; border-radius: 4px; background: rgba(13, 24, 30, 0.7); color: rgba(255, 255, 255, 0.82); font: 10px/1.4 system-ui, sans-serif; text-align: center;
  pointer-events: none; }
`;function g_(i,t){if(!document.querySelector("style[data-logan-model]")){const d=document.createElement("style");d.setAttribute("data-logan-model",""),d.textContent=J0+m_,document.head.appendChild(d)}const e=document.createElement("div");e.className="lgn-embed";const n=document.createElement("div");n.className="lgn-embed-layer";const s=document.createElement("div");s.className="lgn-embed-layer lgn-embed-labels",s.setAttribute("aria-hidden","true");const r=document.createElement("p");r.className="lgn-embed-credit",r.textContent=vo,e.append(n,s,r),i.appendChild(e);let a=[],o=!1,l;const c=new Promise((d,h)=>l={ok:d,fail:h}),u=new f_(n,s,{onProgress:(d,h)=>{var f;return(f=t.onProgress)==null?void 0:f.call(t,d,h)},onReady:d=>{a=d.places.map(h=>{const f=Math.min(Math.max(h.view[0],120),7e3),m=h.view[1]*Math.PI/180,x=h.view[2]*Math.PI/180,p=h.x+f*Math.sin(m)*Math.sin(x),g=h.z+f*Math.sin(m)*Math.cos(x),M=u.groundAt(h.x,h.z),S=Math.max(u.groundAt(p,g)+30,M+f*Math.cos(m)),v=h.x-p,b=M-S,T=h.z-g,_=h.stand&&{x:h.x+h.stand.from[0],z:h.z-h.stand.from[1],yaw:Math.atan2(h.stand.from[0]-h.stand.at[0],h.stand.at[1]-h.stand.from[1]),pitch:h.stand.pitch};return{id:h.id,name:h.name,kind:h.kind,blurb:h.blurb,x:p,y:S,z:g,yaw:Math.atan2(-v,-T),pitch:Math.atan2(b,Math.hypot(v,T)),tx:h.x,tz:h.z,stand:_}}),t.labels===!1&&u.setLayerVisible("labels",!1),o=!0,l.ok()},onError:d=>{var h;return o?(h=t.onError)==null?void 0:h.call(t,d):l.fail(new Error(d))},onCompass:()=>{},onSelect:()=>{},onFloodLevel:d=>{var h;return(h=t.onFloodLevel)==null?void 0:h.call(t,d)}},{assets:typeof t.assets=="string"?G0(t.assets,p_):t.assets,external:!0,quality:t.quality});return u.init(),{ready:c,setCamera:(d,h,f,m,x)=>u.setExternalCamera(d,h,f,m,x),getCamera:()=>u.getCamera(),settled:()=>u.settled,setMinutes:d=>u.setSolarMinutes(d),setTide:()=>{},tide:{min:0,max:0,initial:0},setAnimating:d=>u.setAnimating(d),setLabelsVisible:d=>u.setLayerVisible("labels",d),setLabelObstacles:d=>u.setLabelObstacles(d),groundAt:(d,h)=>u.groundAt(d,h),waterLevel:()=>-1e6,waterAt:(d,h,f)=>u.waterAt(d,h,f),overview:()=>u.overview(),bounds:()=>u.bounds,fov:()=>u.fov,fromLatLon:(d,h)=>u.fromLatLon(d,h),spots:()=>a,floods:()=>u.floodScenarios().then(d=>d.events),setFlood:d=>u.showFlood(d),setFloodLevel:d=>u.setFloodLevel(d),floodDrop:Dc,credit:vo,dispose:()=>{u.dispose(),e.remove()}}}return pn.CREDIT=vo,pn.create=g_,Object.defineProperty(pn,Symbol.toStringTag,{value:"Module"}),pn}({});
